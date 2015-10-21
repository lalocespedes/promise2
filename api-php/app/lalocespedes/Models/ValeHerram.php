<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 15/10/15
 * Time: 11:04 AM
 */

namespace lalocespedes\Models;

use Illuminate\Database\Eloquent\Model as Eloquent;

use lalocespedes\Models\ComprobantesGroups;

use Carbon\Carbon;

class ValeHerram extends Eloquent
{
    /**
     * Construct
     * @param array $attributes
     */
    public function __construct($attributes = array())  {

        parent::__construct($attributes); // Eloquent
        $this->getStartDateValue();
        //$this->getFolioValue();
    }

    protected $table = 'vale_herram';

    protected $fillable = [
        'empleado_id',
        'folio',
        'active',
        'date_entered'
    ];

    protected $attributes = [
        'active' => 1
    ];

    /**
     * @return string
     */
    private function getStartDateValue() {
        $this->attributes['date_entered'] = \Carbon\Carbon::now();
    }

    private function getFolioValue() {
        //$this->attributes['folio'] = ComprobantesGroups::where('id', 1)->first()->next_id;
        $folio = ComprobantesGroups::where('id', 1)->first()->next_id;
        ComprobantesGroups::where('id',1)->increment('next_id');

        return $folio;
    }

    /*
	|--------------------------------------------------------------------------
	| Relationships
	|--------------------------------------------------------------------------
	*/
    public function empleado()
    {
        return $this->belongsTo('lalocespedes\Models\Empleados', 'empleado_id');
    }
}
