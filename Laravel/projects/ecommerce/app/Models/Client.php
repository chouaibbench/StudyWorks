<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    /** @use HasFactory<\Database\Factories\ClientFactory> */
    use HasFactory;

    protected $fillable = [
        'nom',
        'telephone',
        'adresse',
        'ville',
        'code_postale',
        'pays'
    ];

    public function commandes()
    {
        return $this->hasMany(Commande::class);
    }
}
