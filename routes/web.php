<?php

use App\Http\Controller;
use App\Api\Controller as ApiController;

$route->get('/', 'index', Controller\IndexController::class);

