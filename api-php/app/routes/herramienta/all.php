<?php

use lalocespedes\Models\Herramienta;

function filterh ($val) {

    if ($val) {

        $results = Herramienta::where('codigo', 'LIKE', '%'. $val .'%')
            ->orWhere('descripcion', 'LIKE', '%'. $val .'%')
            ->limit(10)
            ->get();

        echo json_encode($results);
        exit;
    }
};

$app->get("/herramienta", function() use($app) {

    $q = $app->request()->get('q');

    if($q) {

        filterh($q);

    } else {

        $results = Herramienta::all();

        echo json_encode($results);
    }

})->name("herramienta");