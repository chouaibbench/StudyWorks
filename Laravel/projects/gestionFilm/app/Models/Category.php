<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    /** @use HasFactory<\Database\Factories\CategoryFactory> */
    use HasFactory;

    protected $primaryKey = 'idCart';

    protected $fillable = ['nom'];

    public function films()
    {
        return $this->hasMany(Film::class, 'categorie_id');
    }
}
