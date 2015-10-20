<?php
/**
 * Created by PhpStorm.
 * User: arthaleon
 * Date: 10/16/15
 * Time: 2:00 PM
 */

use lalocespedes\Models\Empleados;

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

    $nombre = $app->request()->get('nombre');

    if($nombre) {

        filter($nombre);

    } else {

        $results = Empleados::all();

        echo json_encode($results);
    }

});
