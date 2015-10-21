<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 15/10/15
 * Time: 01:19 PM
 */

use lalocespedes\Models\ValeHerram;
use lalocespedes\Models\ValeHerramItems;
use lalocespedes\Models\ComprobantesGroups;

require 'validation.php';

$app->post('/vales', function() use($app) {

    $request = json_decode($app->request()->getBody());

    //validate


    //save

    $folio = ComprobantesGroups::where('id', 1)->first()->next_id;
    ComprobantesGroups::where('id',1)->increment('next_id');

    $vale = ValeHerram::create([
        "empleado_id" => $request->empId,
        "folio"         => $folio
    ]);

    $id = $vale->id;

    foreach($request->items as $item) {

        ValeHerramItems::create([
            "vale_herram_id"    => $id,
            "cantidad"          => $item->qty,
            "codigo"            => $item->codigo,
            "descripcion"       => $item->descripcion
        ]);

    }

    $return = "grabado";

    $app->response->setStatus(200);

    $response = $app->response();
    $response->write(json_encode($return));

})->name('vales.add');