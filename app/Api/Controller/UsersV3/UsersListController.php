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

use App\Common\ResponseCode;
use App\Models\User;
use App\Models\Group;
use Illuminate\Support\Arr;
use Discuz\Base\DzqController;

class UsersListController extends DzqController
{
    public function main()
    {
        $actor = $this->user;
        $currentPage = $this->inPut('page');
        $perPage = $this->inPut('perPage');
        $filter = (array)$this->inPut('filter');

        $query = User::query();
        $query->select('users.id AS pid', 'users.username', 'users.avatar', 'group_id');
        $query->join('group_user', 'users.id', '=', 'group_user.user_id');
        $query->where('users.status', User::STATUS_NORMAL);
        if (Arr::has($filter, 'username') && Arr::get($filter, 'username') !== '') {
            $username = $filter['username'];
            $query->where('users.username', 'like', '%' . $username . '%');
        }
        $query->orderByDesc('users.login_at');

        $users = $this->pagination($currentPage, $perPage, $query);
        $userDatas = $users['pageData'];
        $groupIds = array_column($userDatas, 'group_id');
        $userGroupDatas = Group::query()->whereIn('id', $groupIds)->where('is_display', 1)->get()->toArray();
        $userGroupDatas = array_column($userGroupDatas, null, 'id');
        // 将来需考虑单用户-多权限组情况
        foreach ($userDatas as $key => $value) {
            $userDatas[$key]['groupName'] = $userGroupDatas[$value['group_id']]['name'] ?? '';
            unset($userDatas[$key]['group_id']);
        }
        $userDatas = $this->camelData($userDatas);
        $users['pageData'] = $userDatas ?? [];

        return $this->outPut(ResponseCode::SUCCESS, '', $users);
    }
}