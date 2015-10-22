<?php
/**
 * Created by PhpStorm.
 * User: arthaleon
 * Date: 10/16/15
 * Time: 2:00 PM
 */

use lalocespedes\Models\Empleados;

use lalocespedes\Models\ValeHerram;


$app->get('/vales', function() use($app) {

    $return = ValeHerram::with('empleado')->get();

    $app->response->setStatus(200);

    $response = $app->response();
    $response->write(json_encode($return));

});


$app->get('/vales/show/:id', function($id) use($app) {

    $return = ValeHerram::where('id', $id)->with('items')->with('empleado')->first();

    $app->response->setStatus(200);

    $response = $app->response();
    $response->write(json_encode($return));

});

function filter ($val) {

    if ($val) {

        $results = Empleados::where('nombre', 'LIKE', '%'. $val .'%')
            ->orWhere('numNomina', 'LIKE', '%'. $val .'%')
            ->limit(10)
            ->get();

        echo json_encode($results);
        exit;
    }
};

$app->get('/empleado', function() use($app) {

    $q = $app->request()->get('q');

    if($q) {

        filter($q);

    } else {

        $results = Empleados::all();

        echo json_encode($results);
    }

});
