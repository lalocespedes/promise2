<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 15/10/15
 * Time: 01:19 PM
 */

use lalocespedes\Models\ValeHerram;

$app->get('/vales/add', function() use($app) {

    $vale = ValeHerram::create([
       'empleado_id'   => '1'
    ]);

    echo $vale->id;

})->name('vales.add');