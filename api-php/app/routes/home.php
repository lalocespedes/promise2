<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 15/10/15
 * Time: 10:14 AM
 */

$app->get('/client/:val', function($val) use($app) {

    echo "welcome api " . $val;

})->name('home');


$app->post('/client', function() use($app) {

    echo "welcome api ";

})->name('home');
