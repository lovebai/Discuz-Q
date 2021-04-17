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

use App\Common\AuthUtils;
use App\Common\ResponseCode;
use App\Models\User;
use App\Models\UserWechat;
use App\Models\UserQq;
use App\Settings\SettingsRepository;
use Discuz\Base\DzqController;

class LsDisplayController extends DzqController
{

    protected $settings;

    public function __construct(SettingsRepository $settingsRepository)
    {
        $this->settings = $settingsRepository;
    }

    public function main()
    {
        //用户名密码模式，默认展示用户名和密码登录
        $registerType = $this->settings->get('register_type');
        if($registerType == 0) {
            $this->outPut(ResponseCode::SUCCESS, '',['status' => true]);
        }
        //存在未绑定任何第三方的信息用户，则展示用户名和密码登录
        $status = false;
        if(User::query()->where('bind_type',AuthUtils::DEFAULT)->count('id') > 0){
            $status = true;
        }

        return $this->outPut(ResponseCode::SUCCESS, '',['status' => $status]);
    }

}