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

namespace App\Api\Controller\UsersV3;

use App\Api\Serializer\UserProfileSerializer;
use App\Common\ResponseCode;
use App\Models\User;
use Discuz\Api\Controller\AbstractResourceController;
use Discuz\Auth\AssertPermissionTrait;
use Discuz\Base\DzqController;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class UnbindWechatController extends DzqController
{
    public function main()
    {
        if ($this->user->id != 1) {
            $this->outPut(ResponseCode::UNAUTHORIZED);
        }

        $id     = $this->inPut('id');
        $ip     = ip($this->request->getServerParams());
        $port   = Arr::get($this->request->getServerParams(), 'REMOTE_PORT', 0);

        $user   = User::query()->where('id', $id)->first();

        if (!empty($user->wechat)) {
            try {
                app('log')->info('被删除微信用户：'.$user->wechat.';ip：'.$ip.';port：'.$port);
                $user->wechat->delete();
            } catch (\Exception $e) {
                app('log')->info('被删除微信用户：'.$user->wechat.';ip：'.$ip.';port：'.$port.';$e:'.$e);
            }
        }

        $result = [
            'userWechat'    => !empty($user->wechat) ? $user->wechat : null
        ];

        $this->outPut(ResponseCode::SUCCESS, '', $result);
    }
}
