<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Atelier extends Model
{
     use HasFactory;

    protected $fillable = [
        'nomAtelier',
        'descriptionAtelier',
        'evenement_id',
    ];

    public function evenement()
    {
        return $this->belongsTo(Evenement::class);
    }
}
