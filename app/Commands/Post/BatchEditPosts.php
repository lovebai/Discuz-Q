<?php

/**
 *      Discuz & Tencent Cloud
 *      This is NOT a freeware, use is subject to license terms
 *
 *      $Id: BatchEditPosts.php xxx 2019-10-31 11:48:00 LiuDongdong $
 */

namespace App\Commands\Post;

use App\Events\Post\PostWasApproved;
use App\Events\Post\Saving;
use App\Models\User;
use App\Repositories\PostRepository;
use Discuz\Foundation\EventsDispatchTrait;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Support\Arr;

class BatchEditPosts
{
    use EventsDispatchTrait;

    /**
     * The user performing the action.
     *
     * @var User
     */
    public $actor;

    /**
     * The attributes to update on the posts.
     *
     * @var array
     */
    public $data;

    /**
     * @param User $actor
     * @param array $data
     */
    public function __construct(User $actor, array $data)
    {
        $this->actor = $actor;
        $this->data = $data;
    }

    /**
     * @param Dispatcher $events
     * @param PostRepository $posts
     * @return array
     */
    public function handle(Dispatcher $events, PostRepository $posts)
    {
        $this->events = $events;

        $result = ['data' => [], 'meta' => []];

        foreach ($this->data as $data) {
            if (isset($data['id'])) {
                $id = $data['id'];
            } else {
                continue;
            }

            $post = $posts->query()->whereVisibleTo($this->actor)->find($id);

            if ($post) {
                $post->timestamps = false;
            } else {
                $result['meta'][] = ['id' => $id, 'message' => 'model_not_found'];
                continue;
            }

            $attributes = Arr::get($data, 'attributes', []);

            if (isset($attributes['isApproved']) && $attributes['isApproved'] < 3) {
                if ($this->actor->can('approve', $post)) {
                    $post->is_approved = $attributes['isApproved'];

                    $post->raise(new PostWasApproved(
                        $post,
                        $this->actor,
                        ['message' => isset($attributes['message']) ? $attributes['message'] : '']
                    ));
                } else {
                    $result['meta'][] = ['id' => $id, 'message' => 'permission_denied'];
                    continue;
                }
            }

            if (isset($attributes['isDeleted'])) {
                if ($this->actor->can('delete', $post)) {
                    $message = isset($attributes['message']) ? $attributes['message'] : '';

                    if ($attributes['isDeleted']) {
                        $post->hide($this->actor, $message);
                    } else {
                        $post->restore($this->actor, $message);
                    }
                } else {
                    $result['meta'][] = ['id' => $id, 'message' => 'permission_denied'];
                    continue;
                }
            }

            try {
                $this->events->dispatch(
                    new Saving($post, $this->actor, $data)
                );
            } catch (\Exception $e) {
                $result['meta'][] = ['id' => $id, 'message' => $e->getMessage()];
                continue;
            }

            $post->save();

            $result['data'][] = $post;

            try {
                $this->dispatchEventsFor($post, $this->actor);
            } catch (\Exception $e) {
                $result['meta'][] = ['id' => $id, 'message' => $e->getMessage()];
                continue;
            }
        }

        return $result;
    }
}
