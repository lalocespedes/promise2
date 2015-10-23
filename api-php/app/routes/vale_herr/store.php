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

use lalocespedes\Validators\ValeHerram\Item as validator;

$app->post('/vales', function() use($app) {

    $request = json_decode($app->request()->getBody());

    //var_dump($request);
    //exit();

    //validate

    $empleado_id = (isset($request->empId)) ? $request->empId : "";

    $validateValues = [

        'empleado_id' => $empleado_id

    ];

    $validator = new validator;

    $isValid = $validator->assert($validateValues);

    if (!$isValid) {

        $app->response->setStatus(400);
        $response = $app->response();
        $response->write(json_encode($validator->errors()));

        $app->stop();

    }

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

    $return = [
        "id"    => $id
    ];

    $app->response->setStatus(200);

    $response = $app->response();
    $response->write(json_encode($return));

})->name('vales.add');