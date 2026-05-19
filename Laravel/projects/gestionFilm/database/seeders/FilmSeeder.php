<?php

namespace Database\Seeders;

use App\Models\Acteur;
use App\Models\Film;
use Illuminate\Database\Seeder;

class FilmSeeder extends Seeder
{
    public function run(): void
    {
        Film::factory(30)->create()->each(function (Film $film) {
            $acteurs = Acteur::inRandomOrder()->take(rand(1, 5))->pluck('id');
            $film->acteurs()->attach($acteurs);
        });
    }
}
