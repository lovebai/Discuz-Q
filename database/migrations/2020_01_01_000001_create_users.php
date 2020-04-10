<?php

/**
 * Discuz & Tencent Cloud
 * This is NOT a freeware, use is subject to license terms
 */

use Discuz\Database\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $this->schema()->create('users', function (Blueprint $table) {
            $table->id()->comment('用户 id');
            $table->string('username', 100)->unique()->comment('用户名');
            $table->string('password', 100)->comment('密码');
            $table->string('pay_password', 100)->default('')->comment('支付密码');
            $table->string('mobile', 20)->default('')->comment('手机号');
            $table->ipAddress('last_login_ip')->default('')->comment('最后登录 ip 地址');
            $table->ipAddress('register_ip')->default('')->comment('注册ip');
            $table->string('register_reason', 50)->default('')->comment('注册原因');
            $table->unsignedInteger('thread_count')->default(0)->comment('主题数');
            $table->unsignedInteger('follow_count')->default(0)->comment('关注数');
            $table->unsignedInteger('fans_count')->default(0)->comment('粉丝数');
            $table->tinyInteger('status')->default(0)->comment('用户状态：0正常 1禁用 2审核中 3审核拒绝 4审核忽略');
            $table->string('avatar', 100)->default('')->comment('头像地址');
            $table->char('identity', 18)->default('')->comment('身份证号码');
            $table->string('realname', 20)->default('')->comment('身份证姓名');
            $table->dateTime('avatar_at')->nullable()->comment('头像修改时间');
            $table->dateTime('login_at')->nullable()->comment('最后登录时间');
            $table->dateTime('joined_at')->nullable()->comment('付费加入时间');
            $table->dateTime('expired_at')->nullable()->comment('付费到期时间');
            $table->dateTime('created_at')->comment('创建时间');
            $table->dateTime('updated_at')->comment('更新时间');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        $this->schema()->dropIfExists('users');
    }
}
