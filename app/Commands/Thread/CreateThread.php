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

namespace App\Commands\Thread;

use App\Censor\Censor;
use App\Commands\Post\CreatePost;
use App\Repositories\SequenceRepository;
use App\Events\Thread\Created;
use App\Events\Thread\Saving;
use App\Models\Category;
use App\Models\Post;
use App\Models\Thread;
use App\Models\User;
use App\Models\RedPacket;
use App\Models\Setting;
use App\Repositories\ThreadRepository;
use App\Settings\ForumSettingField;
use App\Validators\ThreadValidator;
use Carbon\Carbon;
use Discuz\Auth\AssertPermissionTrait;
use Discuz\Auth\Exception\PermissionDeniedException;
use Discuz\Foundation\EventsDispatchTrait;
use Exception;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Contracts\Bus\Dispatcher as BusDispatcher;
use Illuminate\Contracts\Events\Dispatcher as EventDispatcher;
use Illuminate\Support\Arr;
use Illuminate\Validation\ValidationException;

class CreateThread
{
    use AssertPermissionTrait;
    use EventsDispatchTrait;

    /**
     * The user performing the action.
     *
     * @var User
     */
    public $actor;

    /**
     * The attributes of the new thread.
     *
     * @var array
     */
    public $data;

    /**
     * The current ip address of the actor.
     *
     * @var array
     */
    public $ip;

    /**
     * The current port of the actor.
     *
     * @var int
     */
    public $port;

    /**
     * @param User $actor
     * @param array $data
     * @param string $ip
     * @param string $port
     */
    public function __construct(User $actor, array $data, $ip, $port, ForumSettingField $forumField)
    {
        $this->actor = $actor;
        $this->data = $data;
        $this->ip = $ip;
        $this->port = $port;
        $this->forumField = $forumField;
    }

    /**
     * @param EventDispatcher $events
     * @param BusDispatcher $bus
     * @param Censor $censor
     * @param Thread $thread
     * @param ThreadRepository $threads
     * @param ThreadValidator $validator
     * @return Thread
     * @throws GuzzleException
     * @throws PermissionDeniedException
     * @throws ValidationException
     * @throws Exception
     * @throws GuzzleException
     */
    public function handle(EventDispatcher $events, BusDispatcher $bus, Censor $censor, Thread $thread, ThreadRepository $threads, ThreadValidator $validator)
    {
        $this->events = $events;

        // 没有任何一个分类的发布权限时，判断是否有全局权限
        if (! Category::getIdsWhereCan($this->actor, 'createThread')) {
            $this->assertCan($this->actor, 'createThread');
        }

        $attributes = Arr::get($this->data, 'attributes', []);

        $thread_id = Arr::get($attributes, 'id');
        if ($thread_id) {
            $thread = $threads->findOrFail($thread_id, $this->actor);
        }

        //是否为草稿
        $is_draft = Arr::get($attributes, 'is_draft', '0');

        $thread->is_draft = $is_draft;

        $thread->type = (int) Arr::get($attributes, 'type', Thread::TYPE_OF_TEXT);

        // 是否有权发布某类型帖子
        $this->assertCan($this->actor, 'createThread.' . $thread->type);

        //文字帖
        $red_money = Arr::get($this->data, 'attributes.redPacket.money', null);
        $thread->is_red_packet = Thread::NOT_HAVE_RED_PACKET;
        if ($thread->type === Thread::TYPE_OF_TEXT || $thread->type === Thread::TYPE_OF_LONG) {

            if (!empty($red_money)) {
                $this->assertCan($this->actor, 'createThread.' . $thread->type . '.redPacket');

                if ($thread->type === Thread::TYPE_OF_TEXT) {
                    $thread->is_red_packet = Thread::HAVE_RED_PACKET;//0:未添加红包，1:有添加红包
                } else {
                    //长文帖价格参数和附件参数必须为0才允许添加红包
                    if(empty((float) Arr::get($attributes, 'price')) && empty((float) Arr::get($attributes, 'attachment_price'))) {
                        $thread->is_red_packet = Thread::HAVE_RED_PACKET;
                    }
                }
            }
        }

        // 标题，长文帖和专辑帖需要设置
        if ($thread->type === Thread::TYPE_OF_LONG) {
            $thread->title = trim($censor->checkText(Arr::get($attributes, 'title')));

            // 长文帖支持附件，附件可设置价格
            if ($thread->attachment_price = (float) Arr::get($attributes, 'attachment_price', 0)) {
                $this->assertCan($this->actor, 'createThreadPaid');
            }
        }

        // 发布视频帖 或 标题中存在审核敏感词，将帖子放入待审核
        if ($thread->type == Thread::TYPE_OF_VIDEO || $censor->isMod) {
            $thread->is_approved = Thread::UNAPPROVED;
        }

        // 非文字帖可设置价格
        if ($thread->type !== Thread::TYPE_OF_TEXT) {
            $thread->price = (float) Arr::get($attributes, 'price', 0);

            // 非问答帖检查「发布付费内容」权限
            if ($thread->price > 0 && $thread->type !== Thread::TYPE_OF_QUESTION) {
                $this->assertCan($this->actor, 'createThreadPaid');
            }

            // 付费长文帖可设置免费阅读字数
            if ($thread->price > 0 && $thread->type === Thread::TYPE_OF_LONG) {
                $thread->free_words = (float) Arr::get($this->data, 'attributes.free_words', 0);
            }
        }

        $thread->user_id = $this->actor->id;
        $thread->created_at = Carbon::now();

        // 是否匿名
        $thread->is_anonymous = (bool) Arr::get($attributes, 'is_anonymous', false);

        // 是否显示（问答未回答时也允许查看）
        // $thread->is_display = $thread->type !== Thread::TYPE_OF_QUESTION;

        // 经纬度及地理位置
        $thread->longitude = (float) Arr::get($attributes, 'longitude', 0);
        $thread->latitude = (float) Arr::get($attributes, 'latitude', 0);
        $thread->address = Arr::get($attributes, 'address', '');
        $thread->location = Arr::get($attributes, 'location', '');

        // 红蓝版本对于位置权限的兼容性判断 红蓝，蓝1，红2，默认为1
        $site_skin = $this->forumField->getSiteSkin();
        if (!empty($skin->value) && $site_skin == 2) {
            if (!empty($thread->longitude) || !empty($thread->latitude) || !empty($thread->address) || !empty($thread->location)) {
                $this->assertCan($this->actor, 'createThread.' . $thread->type . '.position');
            }
        }

        $thread->setRelation('user', $this->actor);

        $thread->raise(new Created($thread));

        $this->events->dispatch(
            new Saving($thread, $this->actor, $this->data)
        );

        // 发帖验证码
        if (! $this->actor->isAdmin() && $this->actor->can('createThreadWithCaptcha')) {
            $captcha = [
                Arr::get($attributes, 'captcha_ticket', ''),
                Arr::get($attributes, 'captcha_rand_str', ''),
                $this->ip,
            ];
        } else {
            $captcha = ''; // 默认为空将不走验证
        }

        // 草稿主题不进行验证
        if (!$is_draft) {
            $validator->valid($thread->getAttributes() + compact('captcha'));
        }

        $thread->save();

        app(SequenceRepository::class)->updateSequenceCache($thread->id);

        try {
            $post = $bus->dispatch(
                new CreatePost($thread->id, $this->actor, $this->data, $this->ip, $this->port, true)
            );
        } catch (Exception $e) {
            Post::query()->where('thread_id', $thread->id)->delete();
            RedPacket::query()->where('thread_id', $thread->id)->delete();
            $thread->delete();
            throw $e;
        }

        $thread->setRawAttributes($post->thread->getAttributes(), true);
        $thread->setLastPost($post);

        $this->dispatchEventsFor($thread, $this->actor);

        $thread->save();

        return $thread;
    }
}
