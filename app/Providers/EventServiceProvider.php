<?php

namespace App\Providers;

use App\Events\Users\UserVerify;
use App\Listeners\User\WeixinBind;
use App\Policies\GroupPolicy;
use App\Policies\StopWordPolicy;
use Discuz\Foundation\Suppor\Providers\EventServiceProvider as BaseEventServiceProvider;

class EventServiceProvider extends BaseEventServiceProvider
{
    protected $listen = [
        'App\Events\Users\Registered' => ['App\Listeners\Wallet\CreateUserWalletListener'],
        UserVerify::class => [
            WeixinBind::class
        ]
    ];

    protected $subscribe = [
        GroupPolicy::class,
        StopWordPolicy::class,
        'App\Listeners\Wallet\ReviewCashSubscriber',
    ];
}
