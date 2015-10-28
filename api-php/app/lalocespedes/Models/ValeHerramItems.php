<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 21/10/15
 * Time: 02:20 PM
 */

namespace lalocespedes\Models;

use Illuminate\Database\Eloquent\Model as Eloquent;

class ValeHerramItems extends Eloquent
{
    protected $table = 'vale_herram_items';

    protected $fillable = [
        'vale_herram_id',
        'cantidad',
        'codigo',
        'descripcion'
    ];

    public function vales() {

        return $this->hasMany('lalocespedes\Models\ValeHerram', 'id');
    }
}