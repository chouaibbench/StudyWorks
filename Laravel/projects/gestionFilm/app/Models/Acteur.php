<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Acteur extends Model
{
    /** @use HasFactory<\Database\Factories\ActeurFactory> */
    use HasFactory;

    protected $fillable = ['nom', 'prenom', 'date_naissance', 'nationalite'];

    public function films()
    {
        return $this->belongsToMany(Film::class, 'acteur_film');
    }
}
