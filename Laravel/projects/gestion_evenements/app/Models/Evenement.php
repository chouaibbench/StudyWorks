<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class Evenement extends Model
{
    use HasFactory;

    protected $fillable = [
        'theme',
        'date_debut',
        'date_fin',
        'description',
        'cout_journalier',
        'expert_id',
    ];
    public function expert()
    {
        return $this->belongsTo(Expert::class);
    }

    public function ateliers()
    {
        return $this->hasMany(Atelier::class);
    }
}
