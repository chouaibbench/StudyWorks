<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Film;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Film>
 */
class FilmFactory extends Factory
{
    public function definition(): array
    {
        return [
            'titre'        => $this->faker->sentence(3),
            'description'  => $this->faker->paragraph(),
            'poster'       => $this->faker->imageUrl(300, 450, 'movies'),
            'categorie_id' => Category::inRandomOrder()->first()?->idCart ?? Category::factory(),
        ];
    }
}
