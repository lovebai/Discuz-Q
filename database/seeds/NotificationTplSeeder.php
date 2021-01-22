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

use App\Models\NotificationTpl;
use App\Models\NotificationTpl as NotificationTplModel;
use Illuminate\Database\Seeder;

class NotificationTplSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $notificationTpl = new NotificationTpl();
        $notificationTpl->truncate();

        // 获取系统通知
        $system = $this->systemData();
        $notificationTpl->insert($system);

        /**
         * 注意：由于数据格式不一致，分开 insert 执行
         */
        $wechat = $this->wechatData(); // 获取微信通知
        $newData = array_values(NotificationTplModel::addData()); // 获取新增的新通知(叠加)
        $appendArr = array_merge($wechat, $newData);
        $notificationTpl->insert($appendArr);
    }

    /**
     * 微信通知
     *
     * @return array
     */
    public function wechatData()
    {
        return [
            [
                'status' => 0,
                'type' => 1,
                'type_name' => '新用户注册通知',
                'title' => '微信注册通知',
            ],
            [
                'status' => 0,
                'type' => 1,
                'type_name' => '注册审核通过通知',
                'title' => '微信注册审核通知',
            ],
            [
                'status' => 0,
                'type' => 1,
                'type_name' => '注册审核不通过通知',
                'title' => '微信注册审核通知',
            ],
            [
                'status' => 0,
                'type' => 1,
                'type_name' => '内容审核通过通知',
                'title' => '微信内容审核通知',
            ],
            [
                'status' => 0,
                'type' => 1,
                'type_name' => '内容审核不通过通知',
                'title' => '微信内容审核通知',
            ],
            [
                'status' => 0,
                'type' => 1,
                'type_name' => '内容删除通知',
                'title' => '微信内容通知',
            ],
            [
                'status' => 0,
                'type' => 1,
                'type_name' => '内容精华通知',
                'title' => '微信内容通知',
            ],
            [
                'status' => 0,
                'type' => 1,
                'type_name' => '内容置顶通知',
                'title' => '微信内容通知',
            ],
            [
                'status' => 0,
                'type' => 1,
                'type_name' => '内容修改通知',
                'title' => '微信内容通知',
            ],
            [
                'status' => 0,
                'type' => 1,
                'type_name' => '用户禁用通知',
                'title' => '微信用户通知',
            ],
            [
                'status' => 0,
                'type' => 1,
                'type_name' => '用户解除禁用通知',
                'title' => '微信用户通知',
            ],
            [
                'status' => 0,
                'type' => 1,
                'type_name' => '用户角色调整通知',
                'title' => '微信角色通知',
            ],
        ];
    }

    /**
     * 系统通知
     *
     * @return array
     */
    public function systemData()
    {
        return [
            [
                'status' => 1,
                'type' => 0,
                'type_name' => '新用户注册通知',
                'title' => '欢迎加入{sitename}',
                'content' => '{username}你好，你已经成为{sitename} 的{groupname} ，请你在发表言论时，遵守当地法律法规。祝你在这里玩的愉快。',
                'vars' => serialize([
                    '{username}' => '用户名',
                    '{sitename}' => '站点名称',
                    '{groupname}' => '用户组'
                ])
            ],
            [
                'status' => 1,
                'type' => 0,
                'type_name' => '注册审核通过通知',
                'title' => '注册审核通知',
                'content' => '{username}你好，你的注册申请已审核通过。',
                'vars' => serialize([
                    '{username}' => '用户名'
                ])
            ],
            [
                'status' => 1,
                'type' => 0,
                'type_name' => '注册审核不通过通知',
                'title' => '注册审核通知',
                'content' => '{username}你好，你的注册申请审核不通过，原因：{reason}',
                'vars' => serialize([
                    '{username}' => '用户名',
                    '{reason}' => '原因'
                ])
            ],
            [
                'status' => 1,
                'type' => 0,
                'type_name' => '内容审核不通过通知',
                'title' => '内容审核通知',
                'content' => '{username}你好，你发布的内容 "{content}" 审核不通过，原因：{reason}',
                'vars' => serialize([
                    '{username}' => '用户名',
                    '{content}' => '内容',
                    '{reason}' => '原因'
                ])
            ],
            [
                'status' => 1,
                'type' => 0,
                'type_name' => '内容审核通过通知',
                'title' => '内容审核通知',
                'content' => '{username}你好，你发布的内容 "{content}" 审核通过',
                'vars' => serialize([
                    '{username}' => '用户名',
                    '{content}' => '内容'
                ])
            ],
            [
                'status' => 1,
                'type' => 0,
                'type_name' => '内容删除通知',
                'title' => '内容通知',
                'content' => '{username}你好，你发布的内容 "{content} " 已删除，原因：{reason}',
                'vars' => serialize([
                    '{username}' => '用户名',
                    '{content}' => '内容',
                    '{reason}' => '原因'
                ])
            ],
            [
                'status' => 1,
                'type' => 0,
                'type_name' => '内容精华通知',
                'title' => '内容通知',
                'content' => '{username}你好，你发布的内容 "{content}" 已设为精华',
                'vars' => serialize([
                    '{username}' => '用户名',
                    '{content}' => '内容'
                ])
            ],
            [
                'status' => 1,
                'type' => 0,
                'type_name' => '内容置顶通知',
                'title' => '内容通知',
                'content' => '{username}你好，你发布的内容 "{content}" 已置顶',
                'vars' => serialize([
                    '{username}' => '用户名',
                    '{content}' => '内容'
                ])
            ],
            [
                'status' => 1,
                'type' => 0,
                'type_name' => '内容修改通知',
                'title' => '内容通知',
                'content' => '{username}你好，你发布的内容 "{content}" 已被修改',
                'vars' => serialize([
                    '{username}' => '用户名',
                    '{content}' => '内容'
                ])
            ],
            [
                'status' => 1,
                'type' => 0,
                'type_name' => '用户禁用通知',
                'title' => '用户通知',
                'content' => '{username}你好，你的帐号已禁用，原因：{reason}',
                'vars' => serialize([
                    '{username}' => '用户名',
                    '{reason}' => '原因'
                ])
            ],
            [
                'status' => 1,
                'type' => 0,
                'type_name' => '用户解除禁用通知',
                'title' => '用户通知',
                'content' => '{username}你好，你的帐号已解除禁用',
                'vars' => serialize([
                    '{username}' => '用户名'
                ])
            ],
            [
                'status' => 1,
                'type' => 0,
                'type_name' => '用户角色调整通知',
                'title' => '角色通知',
                'content' => '{username}你好，你的角色由{oldgroupname}变更为{newgroupname}',
                'vars' => serialize([
                    '{username}' => '用户名',
                    '{oldgroupname}' => '老用户组',
                    '{newgroupname}' => '新用户组'
                ])
            ],
        ];
    }
}
