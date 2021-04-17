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
use App\Models\MobileCode;
use App\Models\SessionToken;
use App\Repositories\MobileCodeRepository;
use Discuz\Base\DzqController;
use Illuminate\Support\Carbon;

abstract class AuthBaseController extends DzqController
{
    /**
     * 获取扫码后token登录信息数据
     * @return SessionToken
     */
    public function getScanCodeToken()
    {
        $sessionToken = $this->inPut('session_token');
        $token = SessionToken::get($sessionToken);
        if (empty($token)) {
            // 二维码已失效，扫码超时
            $this->outPut(ResponseCode::PC_QRCODE_TIME_OUT, ResponseCode::$codeMap[ResponseCode::PC_QRCODE_TIME_OUT]);
        }

        if (is_null($token->payload)) {
            // 扫码中
            $this->outPut(ResponseCode::PC_QRCODE_SCANNING_CODE, ResponseCode::$codeMap[ResponseCode::PC_QRCODE_SCANNING_CODE]);
        }

        return $token;
    }

    protected function getWechatH5Param()
    {
        $code           = $this->inPut('code');
        $sessionId      = $this->inPut('sessionId');

        $request        = $this ->request
                                ->withAttribute('session', new SessionToken())
                                ->withAttribute('sessionId', $sessionId);

        $this->dzqValidate([
            'code'      => $code,
            'sessionId' => $sessionId,
        ], [
            'code'      => 'required',
            'sessionId' => 'required'
        ]);

        $this->socialite->setRequest($request);

        $driver = $this->socialite->driver('wechat');
        $wxuser = $driver->user();

        return $data = [
            'request'   =>  $request,
            'wxuser'    =>  $wxuser
        ];
    }

    protected function recordWechatLog($wechatUser)
    {
        $wechatlog = app('wechatLog');
        $wechatlog->info('wechat_info', [
            'wechat_user'   => $wechatUser          == null ? '' : $wechatUser->toArray(),
            'user_info'     => $wechatUser->user    == null ? '' : $wechatUser->user->toArray()
        ]);
    }

    protected function fixData($rawUser, $actor)
    {
        $data = array_merge($rawUser, [
                                        'user_id'   => $actor->id ?: null,
                                        'mp_openid' => $rawUser['openid']]
        );
        unset($data['openid'], $data['language']);
        $data['privilege'] = serialize($data['privilege']);

        return $data;
    }

    protected function getSmsParam($type)
    {
        $mobile = $this->inPut('mobile');
        $code   = $this->inPut('code');

        $this->dzqValidate([
            'mobile'    => $mobile,
            'code'      => $code
        ], [
            'mobile'    => 'required',
            'code'      => 'required'
        ]);

        $mobileCode = $this->changeMobileCodeState($mobile, $type, $code);
        $data ['mobileCode'] = $mobileCode;

        return $data;
    }

    /**
     * 修改手机验证码的状态
     * @return MobileCode
     */
    public function changeMobileCodeState($mobile, $type, $code)
    {
        $mobileCodeRepository = app(mobileCodeRepository::class);
        /**
         * @var MobileCode $mobileCode
         **/
        $mobileCode = $mobileCodeRepository->getSmsCode($mobile, $type);

        if (!$mobileCode || $mobileCode->code !== $code || $mobileCode->expired_at < Carbon::now()) {
            $this->outPut(ResponseCode::NET_ERROR, ResponseCode::$codeMap[ResponseCode::NET_ERROR]);
        }

        $mobileCode->changeState(MobileCode::USED_STATE);
        $mobileCode->save();

        return $mobileCode;
    }

    protected function getWechatMiniProgramParam()
    {
        $data = [
            'jsCode'            => $this->inPut('jsCode'),
            'iv'                => $this->inPut('iv'),
            'encryptedData'     => $this->inPut('encryptedData')
        ];
        $this->dzqValidate($data, [
            'jsCode'            => 'required',
            'iv'                => 'required',
            'encryptedData'     => 'required'
       ]);

        return $data;
    }

    protected function updateUserBindType(){

    }
}