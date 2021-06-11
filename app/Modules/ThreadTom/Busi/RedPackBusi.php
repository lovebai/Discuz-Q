<?php
/**
 * Copyright (C) 2021 Tencent Cloud.
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

namespace App\Modules\ThreadTom\Busi;

use App\Common\ResponseCode;
use App\Models\Thread;
use App\Modules\ThreadTom\TomBaseBusi;
use App\Models\RedPacket;
use App\Models\Order;
use App\Models\OrderChildren;
use App\Models\ThreadRedPacket;
use Carbon\Carbon;


class RedPackBusi extends TomBaseBusi
{
    const NEED_PAY = true;

    public function create()
    {
        $input = $this->verification();

        //判断随机金额红布够不够分
        if ($input['rule'] == 1) {
            if ($input['price']*100 <  $input['number']) $this->outPut(ResponseCode::INVALID_PARAMETER,'红包金额不够分');
        }

        if (!empty($input['orderSn'])) {
            $order = Order::query()
                ->where('order_sn',$input['orderSn'])
                ->first(['id','thread_id','user_id','status','amount','expired_at','type']);

            //判断红包金额
            if ($input['rule'] == 1) {
                if ($order->type == Order::ORDER_TYPE_REDPACKET && $order['amount'] != $input['price']) $this->outPut(ResponseCode::INVALID_PARAMETER,'订单金额错误');
            } else {
                if ($order->type == Order::ORDER_TYPE_REDPACKET && $input['price']*$input['number'] != $order['amount']) $this->outPut(ResponseCode::INVALID_PARAMETER,'订单金额错误');
            }

            if (empty($order) ||
                !empty($order['thread_id']) ||
                ($order->type == Order::ORDER_TYPE_REDPACKET && !empty($order['thread_id'])) ||
                $order['user_id'] != $this->user['id'] ||
                $order['status'] != Order::ORDER_STATUS_PENDING ||
                (!empty($order['expired_at']) && strtotime($order['expired_at']) < time())) {
                $this->outPut(ResponseCode::RESOURCE_EXPIRED, '订单已过期或异常，请重新创建订单');
            }

            if ($order->type == Order::ORDER_TYPE_MERGE) {
                $orderChildrenInfo = OrderChildren::query()
                    ->where('order_sn', $input['orderSn'])
                    ->where('type', Order::ORDER_TYPE_REDPACKET)
                    ->first();
                if (empty($orderChildrenInfo) ||
                    $orderChildrenInfo->amount != $input['price'] ||
                    $orderChildrenInfo->status != Order::ORDER_STATUS_PENDING) {
                    $this->outPut(ResponseCode::RESOURCE_EXPIRED, '子订单异常');
                }
            }

            $order->thread_id = $this->threadId;
            $order->save();
            if ($order->type == Order::ORDER_TYPE_MERGE) {
                $orderChildrenInfo->thread_id = $this->threadId;
                $orderChildrenInfo->save();
            }

            if (empty($order['thread_id'])) {
                $this->outPut(ResponseCode::INTERNAL_ERROR);
            }
        }

        if (empty($threadRedPacket)) {
            $threadRedPacket = new ThreadRedPacket;
        } else {
            $threadRedPacket->updated_at = date('Y-m-d H:i:s');
        }

        //定额红包计算
        $price = $input['rule'] == 0 ? $input['price']*$input['number'] : $input['price'];
        $threadRedPacket->thread_id = $this->threadId;
        $threadRedPacket->post_id = $this->postId;
        $threadRedPacket->rule = $input['rule'];
        $threadRedPacket->condition = $input['condition'];
        $threadRedPacket->likenum = $input['likenum'];
        $threadRedPacket->money = $price;
        $threadRedPacket->remain_money = $price;
        $threadRedPacket->number = $input['number'];
        $threadRedPacket->remain_number = $input['number'];
        $threadRedPacket->status = RedPacket::RED_PACKET_STATUS_VALID;
        $threadRedPacket->save();

        $threadRedPacket->content = $input['content'];

        return $this->jsonReturn($threadRedPacket);
    }

    public function update()
    {
        $input = $this->verification();
        $old_order = Order::query()->where('thread_id', $this->threadId)->first();
        if(empty($input['orderSn']) && !empty($old_order)){
            $this->outPut(ResponseCode::INVALID_PARAMETER, '该贴已有订单，缺少 orderSn');
        }
        $threadRedPacket = ThreadRedPacket::query()->where('thread_id', $this->threadId)->first();
        if(empty($threadRedPacket)){
            $this->outPut(ResponseCode::INTERNAL_ERROR, '原红包帖数据不存在');
        }
        //如果该帖具有老订单了，并且本次请求的orderSn 与老订单的 order_sn 相同的话，则取出老 $threadRedPacket 返回就好了
        if($old_order->order_sn && $old_order->order_sn == $input['orderSn'] ){
            return $this->jsonReturn($threadRedPacket);
        }
        if(!empty($input['orderSn'])){
            $order = Order::query()->where('order_sn', $input['orderSn'])->first();
            if(empty($order)){
                $this->outPut(ResponseCode::INTERNAL_ERROR, 'orderSn不正确');
            }
        }
        //在已绑定 order 的情况下，如果再传 了 orderSn 过来，则需要处理 老订单，将老订单与该帖 脱离关系
        if(!empty($old_order) && !empty($input['orderSn']) && $old_order->order_sn != $input['orderSn']){
            //规定时间内，含有红包的帖子不能频繁修改
            if($old_order->created_at > Carbon::now()->subMinutes(self::RED_LIMIT_TIME) ){
                $this->outPut(ResponseCode::INTERNAL_ERROR, '系统处理中，请稍后再试……');
            }
            $old_order->thread_id = 0;
            $res = $old_order->save();
            if($res === false){
                $this->outPut(ResponseCode::INTERNAL_ERROR, '清除原订单帖子id失败');
            }
            // 将原 orderChildrenInfo 的 thread_id 置 0
            if ($old_order->type == Order::ORDER_TYPE_MERGE) {
                $orderChildrenInfo = OrderChildren::query()
                    ->where('order_sn', $input['orderSn'])
                    ->where('type', Order::ORDER_TYPE_REDPACKET)
                    ->first();
                if (empty($orderChildrenInfo) || $orderChildrenInfo->status != Order::ORDER_STATUS_PENDING) {
                    $this->outPut(ResponseCode::RESOURCE_EXPIRED,'子订单异常');
                }
                $orderChildrenInfo->thread_id = 0;
                $res = $orderChildrenInfo->save();
                if($res === false){
                    $this->outPut(ResponseCode::INTERNAL_ERROR, '清除原子订单帖子id失败');
                }
            }
        }
        // 将原 threadRedPacket 中 thread_id 、post_id 置 0
        $threadRedPacket->thread_id = 0;
        $threadRedPacket->post_id = 0;
        $res = $threadRedPacket->save();
        if($res === false){
            $this->outPut(ResponseCode::INTERNAL_ERROR, '修改原红包帖数据出错');
        }
        return self::create();
    }

    public function select()
    {
        $redPacket = ThreadRedPacket::query()->where('id',$this->body['id'])->first(['remain_money','remain_number','status']);
        $this->body['remain_money'] = $redPacket['remain_money'];
        $this->body['remain_number'] = $redPacket['remain_number'];
        $this->body['status'] = $redPacket['remain_number'];

        return $this->jsonReturn($this->camelData($this->body));
    }

    public function verification(){
        $input = [
            'condition' => $this->getParams('condition'),
            'likenum' => $this->getParams('condition') == 1 ? $this->getParams('likenum') : 1,
            'number' => $this->getParams('number'),
            'rule' => $this->getParams('rule'),
            'orderSn' => $this->getParams('orderSn'),
            'price' => $this->getParams('price'),
            'content' => $this->getParams('content'),
            'draft' => $this->getParams('draft')
        ];
        $rules = [
            'condition' => 'required|integer|in:0,1',
            'likenum' => $input['condition'] == 1 ? 'required|int|min:1|max:250' : '',
            'number' => 'required|int|min:1|max:100',
            'rule' => 'required|integer|in:0,1',
            'price' => 'required|numeric|min:0.01|max:200',
            'content' => 'max:1000',
        ];

        $input['draft'] != Thread::IS_DRAFT ? $rules['orderSn'] = 'required|numeric' : '';

        $this->dzqValidate($input, $rules);

        return $input;
    }
}
