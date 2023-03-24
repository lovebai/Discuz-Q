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

namespace App\Listeners\SiteInfo;


use App\Events\SiteInfo\AdminSiteInfo;
use Illuminate\Contracts\Events\Dispatcher;

class SiteInfoListener
{
    public function subscribe(Dispatcher $events)
    {
        // $events->listen(AdminSiteInfo::class, QcloudDaily::class);
        // $events->listen(AdminSiteInfo::class, QcloudSiteInfoDaily::class);
        //去掉迁移 数据上报 监听

    }

}
