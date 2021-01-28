<?php

/**
 * Copyright (C) 2020 Tencent Cloud.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

namespace App\Listeners\RedPacket;

use App\Events\Post\Saved;
use App\Models\Order;
use App\Models\RedPacket;
use App\Models\Thread;
use App\Models\UserWalletLog;
use App\Validators\RedPacketValidator;
use Discuz\Contracts\Setting\SettingsRepository;
use Discuz\Foundation\EventsDispatchTrait;
use Exception;
use Illuminate\Contracts\Bus\Dispatcher as BusDispatcher;
use Illuminate\Contracts\Events\Dispatcher as EventDispatcher;
use Illuminate\Database\ConnectionInterface;
use Illuminate\Support\Arr;
use Illuminate\Validation\ValidationException;

class SaveRedPacketToDatabase
{
    use EventsDispatchTrait;

    /**
     * @var RedPacketValidator
     */
    protected $redPacketValidator;

    /**
     * @var ConnectionInterface
     */
    protected $connection;

    /**
     * @var SettingsRepository
     */
    protected $settings;

    /**
     * @var BusDispatcher
     */
    protected $bus;

    public function __construct(
        EventDispatcher $eventDispatcher,
        RedPacketValidator $redPacketValidator,
        ConnectionInterface $connection,
        SettingsRepository $settings,
        BusDispatcher $bus
    ) {
        $this->events = $eventDispatcher;
        $this->redPacketValidator = $redPacketValidator;
        $this->connection = $connection;
        $this->settings = $settings;
        $this->bus = $bus;
    }

    /**
     * @param Saved $event
     * @throws ValidationException
     * @throws Exception
     */
    public function handle(Saved $event)
    {

        $post = $event->post;
        $actor = $event->actor;
        $data = $event->data;

        if (($post->thread->type != Thread::TYPE_OF_TEXT || $post->thread->type != Thread::TYPE_OF_LONG)
             && (empty($data['attributes']['redPacket']['money'])
                || empty($data['attributes']['redPacket']['number']))) {
            return;
        }

        // 是否为草稿
        $isDraft = Arr::get($data, 'attributes.is_draft');

        // 判断是否是创建
        if (empty($isDraft)) {
            $id = $data['attributes']['id'];
            if (empty($id)) {
                if (!($post->is_first == 1 && ($post->wasRecentlyCreated == true))) {
                    return;
                }
            }
        }

        $thread = Thread::query()->where('id',$post->thread_id)->first();
        if (empty($thread['is_red_packet'])) {
            return;
        }

        $threadData = Arr::get($data, 'attributes');
        if (empty($threadData)) {
            throw new Exception(trans('post.post_thread_missing_parameter')); // 帖子缺失参数
        }

        /**
         * Validator
         *
         * @see QuestionValidator
         */
        $threadData['actor'] = $actor;
        //草稿不验证
        if (!$isDraft) {
            $this->redPacketValidator->valid($threadData['redPacket']);
        }

        $rule = $threadData['redPacket']['rule'];
        $condition = $threadData['redPacket']['condition'];
        $likenum = Arr::get($threadData, 'redPacket.likenum', 0);
        $number = $threadData['redPacket']['number'];
        $money = $threadData['redPacket']['money'];
        $singleMoney = $money / $number;
        if ($singleMoney < 0.01) {
            if ($rule == 1) { //红包领取规则 0：定额 1：随机
                throw new Exception(trans('redpacket.redpacket_money_illegal'));
            } else {
                throw new Exception(trans('redpacket.redpacket_average_money_illegal'));
            }
        }
        $remain_money = $money;
        $remain_number = $number;
        $status = 1;

        // Start Transaction
        $this->connection->beginTransaction();
        try {
            /**
             * Create RedPacket
             *
             * @var RedPacket $redPacket
             */
            $redPacket = RedPacket::query() ->where('thread_id', $post->thread_id)
                                            ->where('post_id',$post->id)
                                            ->first();

            $redPacket = RedPacket::creation(
                $thread['id'],
                $post->id,
                $rule,
                $condition,
                $likenum,
                $money,
                $number,
                $remain_money,
                $remain_number,
                $status,
                $redPacket
            );
            $redPacket->save();

             $threadData = Arr::get($data, 'relationships');
            if (! empty($orderSn = $threadData['redpacket']['data']['order_id'])) {
                /**
                 * Update Order relation thread_id
                 *
                 * @var Order $order
                 */
                $order = Order::query()->where('order_sn', $orderSn)->firstOrFail();
                if (empty($order)) {
                    throw new Exception(trans('redpacket.redpack_order_thread_id_not_null'));
                }
                $order->thread_id = $post->thread_id;
                $order->save();

                /**
                 * Update WalletLog relation question_id
                 *
                 * @var Order $order
                 * @var UserWalletLog $walletLog
                 */
                if ($order->payment_type == Order::PAYMENT_TYPE_WALLET) {
                    if ($thread['type'] == Thread::TYPE_OF_TEXT) {
                        $change_type = UserWalletLog::TYPE_TEXT_FREEZE;
                    } elseif ($thread['type'] == Thread::TYPE_OF_LONG) {
                        $change_type = UserWalletLog::TYPE_LONG_FREEZE;
                    } else {
                        $change_type = UserWalletLog::TYPE_TEXT_FREEZE;
                    }

                    $walletLog = UserWalletLog::query()->where([
                        'user_id' => $actor->id,
                        'order_id' => $order->id,
                        'change_type' => $change_type,
                    ])->first();
                    if (empty($walletLog)) {
                        throw new Exception(trans('redpacket.user_wallet_log_null'));
                    }
                    $walletLog->thread_id = $redPacket->thread_id;
                    $walletLog->post_id = $redPacket->post_id;
                    $walletLog->save();

                }
            }

            $this->connection->commit();
        } catch (Exception $e) {
            $this->connection->rollback();

            throw $e;
        }

        // 延迟执行事件
        $this->dispatchEventsFor($redPacket, $actor);


    }
}