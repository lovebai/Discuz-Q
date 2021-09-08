<?php

use Discuz\Database\Migration;
use Illuminate\Database\Query\Expression;
use Illuminate\Database\Schema\Blueprint;

class CreatePluginGroupPermission extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $this->schema()->create('plugin_group_permission', function (Blueprint $table) {
            $table->unsignedBigInteger('id', true)->comment('自增id');
            $table->integer('group_id')->nullable(false)->comment('用户组id');
            $table->string('app_id', 100)->nullable(false)->comment('插件id');
            $table->string('permission', 100)->nullable(false)->comment('权限描述符');
            $table->timestamp('created_at')->nullable(false)->default(new Expression('CURRENT_TIMESTAMP'))->comment('创建时间');
            $table->timestamp('updated_at')->nullable(false)->default(new Expression('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))->comment('更新时间');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        $this->schema()->dropIfExists('plugin_group_permission');
    }
}
