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

use App\Censor\Censor;
use App\Common\ResponseCode;
use App\Models\User;
use App\Repositories\UserRepository;
use Discuz\Base\DzqController;
use Discuz\Foundation\EventsDispatchTrait;
use Discuz\Auth\AssertPermissionTrait;

class CheckController extends DzqController
{
    use EventsDispatchTrait;
    use AssertPermissionTrait;

    protected $censor;

    public function __construct(Censor $censor)
    {
        $this->censor = $censor;
    }

    protected function checkRequestPermissions(UserRepository $userRepo)
    {
        return true;
    }


    public function main()
    {
        try {
            $username = $this->inPut('username');
            //去除字符串中空格
            $username = str_replace(' ', '', $username);
            //敏感词检查
            $this->censor->checkText($username, 'username');
            if(strlen($username) == 0) {
                return $this->outPut(ResponseCode::USERNAME_NOT_NULL);
            }
            //长度检查
            if(mb_strlen($username,'UTF8') > 15){
                return $this->outPut(ResponseCode::NAME_LENGTH_ERROR);
            }
            //重名检查
            $userNameCount = User::query()->where('username', $username)->count('id');
            if($userNameCount > 0){
                return $this->outPut(ResponseCode::USERNAME_HAD_EXIST);
            }

            return $this->outPut(ResponseCode::SUCCESS);
        } catch (\Exception $e) {
            app('errorLog')->info('requestId：' . $this->requestId . '-' . '用户昵称检测接口异常-CheckController： 入参：username:'
                                  . $this->inPut('username') . ';异常:' . $e->getMessage());
            return $this->outPut(ResponseCode::INTERNAL_ERROR, '用户昵称检测接口异常');
        }
    }

}
