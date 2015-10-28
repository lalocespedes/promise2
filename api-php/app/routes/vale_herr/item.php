<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 26/10/15
 * Time: 09:22 AM
 */

use lalocespedes\Models\ValeHerramItems;

use Illuminate\Database\Capsule\Manager as Capsule;

$app->get('/vales/herramienta', function() use($app) {

    $value = $app->request()->get('q');

//    $return = ValeHerram::with(['items'=> function($query) {
//
//        $query->where('codigo', 'NM001');
//
//    }])->with('empleado')->get();


    //$return = ValeHerramItems::where('codigo', 'LIKE', '%'. $value .'%')->get();

//    $return = ValeHerramItems::where('codigo', 'LIKE', '%'. $value .'%')
//        ->with(['vales' => function($q) {
//            $q->with('empleado');
//        }])
//        ->get();

    $return = Capsule::table('vale_herram_items')
        ->join('vale_herram', 'vale_herram_items.vale_herram_id', '=', 'vale_herram.id')
        ->join('empleados', 'vale_herram.empleado_id', '=', 'empleados.id')
        ->where('codigo', 'LIKE', '%'. $value .'%')
        //->orWhere('tax_id', 'LIKE', '%'. $q .'%')
        ->take(10)
        ->get();

    //dump($return);
    //exit;

    $app->response->setStatus(200);

    $response = $app->response();
    $response->write(json_encode($return));

});
