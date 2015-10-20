<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 20/10/15
 * Time: 01:18 PM
 */

namespace lalocespedes\Models;

use Illuminate\Database\Eloquent\Model as Eloquent;

class Herramienta extends Eloquent
{
    protected $table = 'herramienta';

    protected $fillable = [
        'codigo',
        'descripcion'
    ];
}
