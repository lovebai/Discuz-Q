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

namespace App\Api\Controller\WalletV3;

use App\Common\ResponseCode;
use App\Models\UserWalletLog;
use Discuz\Base\DzqController;

class UsersWalletLogsListController extends DzqController
{
    // 权限检查，用户是否为管理员

    public function main()
    {
        $currentPage = $this->inPut('page');
        $perPage = $this->inPut('perPage');
        $filter = (array)$this->inPut('filter');

        $query = UserWalletLog::query();
        $query->select('user_wallet_logs.id as walletLogId', 'users.nickname', 'users.username', 'user_wallet_logs.created_at', 'user_wallet_logs.change_available_amount', 'user_wallet_logs.change_freeze_amount', 'user_wallet_logs.change_desc', 'user_wallet_logs.change_type');
        $query->join('users', 'user_wallet_logs.user_id', '=', 'users.id');
        if (isset($filter['nickname']) && !empty($filter['nickname'])) {
            $query->where('users.nickname', 'like', '%' . $filter['nickname'] . '%');
        }

        if (isset($filter['changeType']) && !empty($filter['changeType'])) {
            $query->where('user_wallet_logs.change_type', $filter['changeType']);
        }

        if (isset($filter['changeDesc']) && !empty($filter['changeDesc'])) {
            $query->where('user_wallet_logs.change_desc', 'like', '%' . $$filter['changeDesc'] . '%');
        }

        if (isset($filter['startTime']) && !empty($filter['startTime'])) {
            $query->where('user_wallet_logs.created_at', '>=', $filter['startTime']);
        }

        if (isset($filter['endTime']) && !empty($filter['endTime'])) {
            $query->where('user_wallet_logs.created_at', '<=', $filter['endTime']);
        }

        $query->orderByDesc('user_wallet_logs.created_at');
        $usersWalletLogs = $this->pagination($currentPage, $perPage, $query);
        $usersWalletLogs['pageData'] = $this->camelData($usersWalletLogs['pageData']) ?? [];

        return $this->outPut(ResponseCode::SUCCESS, '', $usersWalletLogs);
    }
}