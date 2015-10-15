<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 15/10/15
 * Time: 01:01 PM
 */

namespace lalocespedes\Models;

use Illuminate\Database\Eloquent\Model as Eloquent;

/**
 *
 */

class ComprobantesGroups extends Eloquent
{
    protected $table = 'comprobantes_groups';

    protected $fillable = [
        'name',
        'next_id',
        'prefix',
        'template'
    ];
}