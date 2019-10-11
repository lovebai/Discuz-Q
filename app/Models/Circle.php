<?php
declare(strict_types=1);

/**
 *      Discuz & Tencent Cloud
 *      This is NOT a freeware, use is subject to license terms
 *
 *      Id: Circle.php 28830 2019-09-25 14:49 chenkeke $
 */

namespace App\Models;

use App\Events\Circle\Created;
use Discuz\Foundation\EventGeneratorTrait;
use Discuz\Database\ScopeVisibilityTrait;
use Illuminate\Database\Eloquent\Model;

/**
 * @property 圈子名称 name
 * @property 圈子图标 icon
 * @property 圈子介绍 description
 * @property 圈子属性 property
 * @property 创建的IP地址 ip
 */
class Circle extends Model
{
    use EventGeneratorTrait;
    use ScopeVisibilityTrait;

    /**
     * 与模型关联的数据表.
     *
     * @var string
     */
    protected $table = 'circles';

    /**
     * 该模型是否被自动维护时间戳.
     *
     * @var bool
     */
    public $timestamps = true;

    /**
     * 模型的日期字段的存储格式
     *
     * @var string
     */
    protected $dateFormat = 'U';

    /**
     * 存储时间戳的字段名
     *
     * @var string
     */
    const CREATED_AT = 'createtime';

    /**
     * 存储时间戳的字段名
     *
     * @var string
     */
    const UPDATED_AT = 'updatetime';

    /**
     * 模型的「启动」方法.
     *
     * @return void
     */
    public static function boot()
    {
        parent::boot();
    }

    /**
     * 创建圈子.
     *
     * @param $name        圈子名称
     * @param $icon        圈子图标
     * @param $description 圈子介绍
     * @param $property    圈子属性
     * @param $ipAddress   创建的IP地址
     * @return static
     */
    public static function creation(
        $name,
        $icon,
        $description,
        $property,
        $ipAddress
    ) {
        // 实例一个圈子模型
        $circle = new static;

        // 设置模型属性值
        $circle->name = $name;
        $circle->icon = $icon;
        $circle->description = $description;
        $circle->property = $property;
        $circle->ip = $ipAddress;

        // 暂存需要执行的事件
        $circle->raise(new Created($circle));

        // 返回圈子模型
        return $circle;
    }

}