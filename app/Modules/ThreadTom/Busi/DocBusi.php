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

use App\Api\Serializer\AttachmentSerializer;
use App\Common\CacheKey;
use App\Common\DzqCache;
use App\Common\ResponseCode;
use App\Models\Attachment;
use App\Models\Thread;
use App\Modules\ThreadTom\TomBaseBusi;

class DocBusi extends TomBaseBusi
{
    public function create()
    {
        $docIds = $this->getParams('docIds');
        if (count($docIds) > 9) {
            $this->outPut(ResponseCode::INVALID_PARAMETER, '文件不能超过9个');
        }
        return $this->jsonReturn(['docIds' => $docIds]);
    }

    public function update()
    {
        $docIds = $this->getParams('docIds');
        if (count($docIds) > 9) {
            $this->outPut(ResponseCode::INVALID_PARAMETER, '文件不能超过9个');
        }
        return $this->jsonReturn(['docIds' => $docIds]);
    }

    public function select()
    {
        $serializer = $this->app->make(AttachmentSerializer::class);
        $result = [];
        $docIds = $this->getParams('docIds');
        $attachments = DzqCache::extractCacheCollectionData(CacheKey::LIST_THREADS_V3_ATTACHMENT, $docIds, function ($docIds) {
            return Attachment::query()->whereIn('id', $docIds)->get()->keyBy('id');
        });
        $threadId = $this->threadId;
        $threads = DzqCache::extractCacheArrayData(CacheKey::LIST_THREADS_V3_THREADS, $threadId, function ($threadId) {
            $threads = Thread::getOneThread($threadId, true);
            $threads = [$threadId => $threads];
            return $threads;
        });
        $thread = $threads[$threadId] ?? null;
        foreach ($attachments as $attachment) {
            if (!empty($thread)) {
                $item = $this->camelData($serializer->getBeautyAttachment($attachment, $thread, $this->user));
                if (!$this->canViewTom) {
                    $item['url'] = $item['thumbUrl'] = $item['blurUrl'];
                }
                unset($item['blurUrl']);
                $result[] = $item;
            }
        }
        return $this->jsonReturn($result);
    }
}
