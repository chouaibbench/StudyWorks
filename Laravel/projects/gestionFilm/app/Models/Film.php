<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Film extends Model
{
    /** @use HasFactory<\Database\Factories\FilmFactory> */
    use HasFactory, SoftDeletes;

    protected $fillable = ['titre', 'description', 'poster', 'categorie_id'];

    public function category()
    {
        return $this->belongsTo(Category::class, 'categorie_id', 'idCart');
    }

    public function acteurs()
    {
        return $this->belongsToMany(Acteur::class, 'acteur_film');
    }
}
