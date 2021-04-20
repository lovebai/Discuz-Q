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

namespace App\Api\Controller\TopicV3;

use App\Api\Controller\ThreadsV3\ThreadTrait;
use App\Common\Utils;
use App\Common\ResponseCode;
use App\Models\Category;
use App\Models\Topic;
use App\Models\ThreadTopic;
use App\Models\Thread;
use App\Repositories\TopicRepository;
use App\Repositories\UserRepository;
use Discuz\Base\DzqController;
use Illuminate\Support\Arr;

class TopicListController extends DzqController
{
    use ThreadTrait;

    protected $topics;

    public function __construct(TopicRepository $topics,  UserRepository $user)
    {
        $this->topics = $topics;
        $this->users = $user;
    }

    public function main()
    {
        $filter = $this->inPut('filter');
        $currentPage = $this->inPut('page');
        $perPage = $this->inPut('perPage');
        $topics = $this->filterTopics($filter, $currentPage, $perPage);
        $topicsList = $topics['pageData'];
        $topicIds = array_column($topicsList, 'id');
        $topicThreadDatas = [];

        if (Arr::has($filter, 'hot') && Arr::get($filter, 'hot') == 0) {
            $threads = $this->getFilterThreads($filter, $currentPage, $perPage, $topicIds);
            foreach ($threads as $key => $value) {
                $topicThreadDatas[$value['topic_id']][$value['id']] = $value;
            }

            if (!Arr::has($filter, 'content') && (!Arr::has($filter, 'topicId') || (Arr::has($filter, 'topicId') && Arr::get($filter, 'topicId') == 0))) {
                $topicLastThreadDatas = [];
                foreach ($topicThreadDatas as $key => $value) {
                    $topicThreadIds = array_column($value, 'id');
                    $lastThreadId = max($topicThreadIds);
                    $topicLastThreadDatas[$key][$lastThreadId] = $value[$lastThreadId];
                }
                $topicThreadDatas = $topicLastThreadDatas;
            }
        }

        foreach ($topicsList as $topic) {
            $topicId = $topic['id'];
            $thread = [];
            if (Arr::has($filter, 'hot') && Arr::get($filter, 'hot') == 0) {
                if (isset($topicThreadDatas[$topicId])) {
                    $thread = array_values($topicThreadDatas[$topicId]);
                }
            }

            $result[] = [
                'pid' => $topic['id'],
                'userId' => $topic['user_id'],
                'content' => $topic['content'],
                'viewCount' => $topic['view_count'],
                'threadCount' => $topic['thread_count'],
                'threads' => $thread
            ];
        }

        $topics['pageData'] = $result;
        return $this->outPut(ResponseCode::SUCCESS, '', $this->camelData($topics));
    }

    private function filterTopics($filter, $currentPage, $perPage)
    {
        $query = Topic::query();

        if ($content = trim(Arr::get($filter, 'content'))) {
            $query->where('topics.content', 'like', '%' . $content . '%');
        }

        if ($topicId = trim(Arr::get($filter, 'topicId'))) {
            $query->where('topics.id', '=', $topicId);
        }

        if (Arr::has($filter, 'hot') && Arr::get($filter, 'hot') == 1) {
            $query->orderByDesc('view_count');
        } else {
            $query->orderByDesc('created_at');
        }

        $topics = $this->pagination($currentPage, $perPage, $query);
        return $topics;
    }

    function getFilterThreads($filter, $currentPage, $perPage, $topicIds)
    {
        if (empty($filter)) $filter = [];
        $categoryids = [];
        $categoryids = Category::instance()->getValidCategoryIds($this->user, $categoryids);
        if (!$categoryids) {
            $this->outPut(ResponseCode::INVALID_PARAMETER, '没有内容浏览权限');
        }
        $threads = $this->getThreadsBuilder($topicIds);
        !empty($categoryids) && $threads->whereIn('category_id', $categoryids);
        return $threads->get()->toArray();
    }

    private function getThreadsBuilder($topicIds)
    {
        return Thread::query()
            ->from('threads as th')
            ->join('thread_topic as tt', 'tt.thread_id', '=', 'th.id')
            ->whereNull('th.deleted_at')
            ->where('th.is_sticky', Thread::BOOL_NO)
            ->where('th.is_draft', Thread::IS_NOT_DRAFT)
            ->where('th.is_approved', Thread::APPROVED)
            ->whereIn('tt.topic_id', $topicIds)
            ->orderByDesc('th.created_at');
    }
}