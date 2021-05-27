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

namespace App\Api\Controller\SignInFieldsV3;

use App\Common\ResponseCode;
use App\Models\AdminSignInFields;
use Discuz\Auth\AssertPermissionTrait;
use Discuz\Base\DzqController;
use App\Repositories\UserRepository;
use Discuz\Auth\Exception\PermissionDeniedException;

class ListAdminSignInController extends DzqController
{

    use AssertPermissionTrait;

    protected function checkRequestPermissions(UserRepository $userRepo)
    {
        if (!$this->user->isAdmin()) {
            throw new PermissionDeniedException('您没有获取注册扩展列表权限');
        }
        return true;
    }

    public function main()
    {
        $this->outPut(ResponseCode::SUCCESS,'',$this->camelData(AdminSignInFields::instance()->getAdminSignInFields()));
    }
}
