<?php

/**
 *      Discuz & Tencent Cloud
 *      This is NOT a freeware, use is subject to license terms
 *
 *      $Id: DeleteNotificationController.php xxx 2019-10-31 20:38:00 yanchen $
 */

namespace App\Api\Controller\Notification;

use App\Commands\Notification\DeleteNotification;
use Discuz\Api\Controller\AbstractDeleteController;
use Illuminate\Contracts\Bus\Dispatcher;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;

class DeleteNotificationController extends AbstractDeleteController
{
    /**
     * @var Dispatcher
     */
    protected $bus;

    /**
     * @param Dispatcher $bus
     */
    public function __construct(Dispatcher $bus)
    {
        $this->bus = $bus;
    }

    /**
     * {@inheritdoc}
     */
    protected function delete(ServerRequestInterface $request)
    {
        $ids = explode(',', Arr::get($request->getQueryParams(), 'id'));

        $actor = $request->getAttribute('actor');
        $actor->id = 1;

        //todo  optimization n+1
        foreach ($ids as $id) {
            $this->bus->dispatch(
                new DeleteNotification($id, $actor)
            );
        }
    }
}
