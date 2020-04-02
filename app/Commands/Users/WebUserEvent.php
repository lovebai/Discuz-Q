<?php

/**
 * Discuz & Tencent Cloud
 * This is NOT a freeware, use is subject to license terms
 */

namespace App\Commands\Users;

use App\Models\SessionToken;
use App\Models\UserWechat;
use EasyWeChat\Kernel\Messages\Text;

class WebUserEvent
{
    protected $app;

    public function __construct($app)
    {
        $this->app = $app;
    }

    public function handle()
    {
        $this->app->server->push(function ($message) {
            switch ($message['Event']) {
                case 'subscribe':
                case 'SCAN':
                    return $this->event($message);
                    break;
            }
        });
    }

    /**
     * @param $message
     * @return Text
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     */
    protected function event($message)
    {
        $openid = $message['FromUserName'];
        $EventKey = $message['EventKey'];
        $wechatuser = UserWechat::where('mp_openid', $openid)->first();
        if ($wechatuser) {
            //老用户  跟新扫描二维码用户
            SessionToken::get($EventKey)->update([
                    'user_id'=>$wechatuser['user_id'],
                ]);
            $text = trans('login.WebUser_login_success');
        } else {
            //新用户,跳转绑定页面
            $user = $this->app->user->get($openid);
            $user_wechats = new UserWechat();
            $user_wechats->mp_openid = $user->openid;
            $user_wechats->nickname =  $user->nickname;
            $user_wechats->sex = $user->sex;
            $user_wechats->province =$user->province;
            $user_wechats->city = $user->city;
            $user_wechats->country = $user->country;
            $user_wechats->headimgurl = $user->headimgurl;

            SessionToken::get($EventKey)->update([
                'scope'=>'wechat',
                'payload'=> $user
            ]);
            if ($user_wechats->save()) {
                $text = trans('login.WebNewUser_login_success');
            }
        }
        return new Text($text);
    }
}
