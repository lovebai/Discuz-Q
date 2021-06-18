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

use App\Commands\Users\UpdateAdminUser;
use App\Common\ResponseCode;
use App\Repositories\UserRepository;
use Discuz\Base\DzqController;
use Discuz\Contracts\Setting\SettingsRepository;
use Illuminate\Contracts\Bus\Dispatcher;

class UpdateAdminController extends DzqController
{

    protected $bus;
    protected $settings;

    public function __construct(Dispatcher $bus,SettingsRepository $settings)
    {
        $this->bus = $bus;
        $this->settings = $settings;
    }

    // 权限检查
    protected function checkRequestPermissions(UserRepository $userRepo)
    {
        return $this->user->isAdmin();
    }

    public function main()
    {
        $id = $this->inPut('id');

        if(empty($id)){
            $this->outPut(ResponseCode::INVALID_PARAMETER,'用户id不能为空');
        }
        $username = $this->inPut('username');
        $nickname = $this->inPut('nickname');
        $password = $this->inPut('password');
        $newPassword = $this->inPut('newPassword');
        $mobile = $this->inPut('mobile');
        $status = $this->inPut('status');
        $expire_at = $this->inPut('expiredAt');
        $groupId = $this->inPut('groupId');

        $requestData = [];
        if(!empty($username)){
            $requestData['username'] = $username;
        }

        if (!empty($nickname)) {
            $requestData['nickname'] = $nickname;
        }

        if(!empty($password)){
            $requestData['password'] = $password;
        }
        if(!empty($newPassword)){
            $requestData['newPassword'] = $newPassword;
        }

        $requestData['mobile'] = $mobile;
        $requestData['status'] = $status;

        if(!empty($expire_at)){
            $requestData['expired_at'] = $expire_at;
        }
        if(!empty($groupId)){
            $requestData['groupId'] = $groupId;
        }

        $this->dzqValidate($requestData, [
            'username'=> 'required|max:15',
            'newPassword'=> 'max:50|min:6'
        ]);

        $result = $this->bus->dispatch(
            new UpdateAdminUser(
                $id,
                $requestData,
                $this->user
            )
        );
        $data = $this->camelData($result);
        $returnData = [];
        $returnData['id'] = $data['id'];
        $returnData['username'] = $data['username'];
        $returnData['nickname'] = $data['nickname'];
        $returnData['mobile'] = $data['mobile'];
        $returnData['status'] = $data['status'];
        $returnData['avatar'] = $data['avatar'];
        $returnData['expiredAt'] = $data['expiredAt'];
        $returnData['registerIp'] = $data['registerIp'];
        $returnData['createdAt'] = $data['createdAt'];
        $returnData['lastLoginIp'] = $data['lastLoginIp'];
        $returnData['loginAt'] = $data['loginAt'];

        return $this->outPut(ResponseCode::SUCCESS,'', $returnData);
    }
}
