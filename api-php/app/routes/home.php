<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 15/10/15
 * Time: 10:14 AM
 */

$app->get('/', function() use($app) {

    echo "welcome api";

})->name('home');