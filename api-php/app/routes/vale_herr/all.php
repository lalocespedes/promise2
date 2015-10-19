<?php
/**
 * Created by PhpStorm.
 * User: arthaleon
 * Date: 10/16/15
 * Time: 2:00 PM
 */

$app->get('/vales/all', function() use($app) {


    $results = [

        [
            'name' => 'juan',
            'color' => 'black'
        ]

    ];

    echo json_encode($results);

});
