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

namespace App\Common;

use App\Exports\UsersExport;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Maatwebsite\Excel\Excel;
use Monolog\Formatter\LineFormatter;
use Monolog\Handler\RotatingFileHandler;
use Monolog\Logger;
use Psr\Log\LoggerInterface;

class Utils
{
    public static function diffTime($time)
    {
        $diff = time() - strtotime($time);
        if ($diff < 60) {
            return $diff . '秒前';
        }
        if ($diff >= 60 && $diff < 60 * 60) {
            return intval($diff / 60.0) . '分钟前';
        }
        if ($diff >= 60 * 60 && $diff < 24 * 60 * 60) {
            return intval($diff / (60 * 60.0)) . '小时前';
        }
        return date('Y-m-d H:i:s', strtotime($time));
    }

    public static function pluckArray(&$array, $field)
    {
        $result = [];
        foreach ($array as $item) {
            $result[$item[$field]] [] = $item;
        }
        $array = $result;
        return $result;
    }

    /**
     *字段名称转小驼峰格式
     * @param $array
     * @return array
     */
    public static function paginateBeauty(&$array)
    {
        $data = [];
        foreach ($array as $k => $v) {
            $data[Str::camel($k)] = $v;
        }
        $array = $data;
        return $data;
    }

    public static function getDzqStorage()
    {
        $server = Request::capture()->server();
        return dirname($server['DOCUMENT_ROOT']) . '/storage';
    }

    public static function getDzqDomain()
    {
        return Request::capture()->getSchemeAndHttpHost();
    }

    /**
     * 用指定的转换方法，转换数组的键格式
     *
     * @param array $arr
     * @param callable $transformer
     * @param array $exceptKeys
     *
     * @return array
     */
    public static function arrayKeysTransform(array $arr, callable $transformer, array $exceptKeys = []): array
    {
        foreach ($arr as $k => $v) {
            if (in_array($k, $exceptKeys, true)) {
                continue;
            }
            unset($arr[$k]);
            $k = $transformer($k);
            if (is_array($v)) {
                $v = static::arrayKeysTransform($v, $transformer, $exceptKeys);
            }
            $arr[$k] = $v;
        }
        return $arr;
    }

    /**
     * 把数组的键转换为小驼峰
     *
     * @param array $params
     * @param array $exceptKeys
     *
     * @return array
     */
    public static function arrayKeysToCamel(array $params, array $exceptKeys = []): array
    {
        return static::arrayKeysTransform($params, [\Illuminate\Support\Str::class, 'camel'], $exceptKeys);
    }

    /**
     * 把数组的键转换为下划线
     *
     * @param array $params
     * @param array $exceptKeys
     *
     * @return array
     */
    public static function arrayKeysToSnake(array $params, array $exceptKeys = []): array
    {
        return static::arrayKeysTransform($params, [\Illuminate\Support\Str::class, 'snake'], $exceptKeys);
    }

    public static function logOldPermissionPosition($method)
    {
        // 整改完之前，先忽略日志，增长太快
        if (!app()->has('permLog')) {
            $logConfig = [
                'alias' => 'permLog',
                'path' => 'logs/permLog.log',
                'level' => Logger::INFO,
            ];

            $handler = new RotatingFileHandler(
                storage_path(Arr::get($logConfig, 'path')),
                200,
                Arr::get($logConfig, 'level')
            );
            $handler->setFormatter(new LineFormatter(null, null, true, true));
            app()->instance(Arr::get($logConfig, 'alias'), new Logger(Arr::get($logConfig, 'alias'), [$handler]));
            app()->alias(Arr::get($logConfig, 'alias'), LoggerInterface::class);
        }

        /** @var LoggerInterface $logger */
        $logger = app('permLog');
        $trace = collect(debug_backtrace())->map(function ($trace) {
            return Arr::only($trace, ['file', 'line', 'function', 'class', 'type']);
        })->slice(0, 10);
        $logger->info('in: ' . $method . ':' . PHP_EOL . json_encode($trace));
    }

    /**
     * 由于浮点数的原因，取整比较两个数。这里暂时不用 bc 模块，用bc需要php安置对应模块
     * @param $leftM
     * @param $rightM
     */
    public static function compareMath($leftM, $rightM)
    {
        return intval($leftM * 100) != intval($rightM * 100);
    }

    public static function hideStr($str)
    {
        if ($str == false) {
            return $str;
        }
        return preg_replace('/.+?/i', '*', $str);
    }

    public static function getSiteUrl()
    {
        $request = app('request');
        $url = $request->getUri();
        $port = $url->getPort();
        $port = $port == null ? '' : ':' . $port;
        return $url->getScheme() . '://' . $url->getHost() . $port;
    }

    //获取今天的开始和结束时间
    public static function getTodayTime()
    {
        return [
            'begin' => date('Y-m-d 00:00:00'),
            'end' => date('Y-m-d 23:59:59')
        ];
    }

    //execl 导出
    public static function localexport($filePath, $fileName= '', $header = [], $readBuffer = 1024)
    {
        //设置头信息
        //声明浏览器输出的是字节流
        $contentType = isset($header['Content-Type']) ? $header['Content-Type'] : 'application/octet-stream';
        header('Content-Type: ' . $contentType);
        //声明浏览器返回大小是按字节进行计算
        header('Accept-Ranges:bytes');
        //告诉浏览器文件的总大小
        $fileSize = filesize($filePath);//坑 filesize 如果超过2G 低版本php会返回负数
        header('Content-Length:' . $fileSize); //注意是'Content-Length:' 非Accept-Length
        $contentDisposition = isset($header['Content-Disposition']) ? $header['Content-Disposition'] : 'attachment;filename=' . $fileName;
        //声明下载文件的名称
        header('Content-Disposition:' . $contentDisposition);//声明作为附件处理和下载后文件的名称
        //获取文件内容
        $handle = fopen($filePath, 'rb');//二进制文件用‘rb’模式读取

        while (!feof($handle)) { //循环到文件末尾 规定每次读取（向浏览器输出为$readBuffer设置的字节数）
            echo fread($handle, $readBuffer);
        }
        fclose($handle);//关闭文件句柄
        exit();
    }

    public static function setAppKey($key, $value)
    {
        return app()->instance($key, $value);
    }

    public static function getAppKey($key)
    {
        if (app()->has($key)) {
            return app()->get($key);
        }
        return null;
    }
}
