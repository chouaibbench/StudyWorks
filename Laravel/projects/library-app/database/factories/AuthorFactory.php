<?php

namespace Database\Factories;

use App\Models\Author;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Author>
 */
class AuthorFactory extends Factory
{
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'biography' => fake()->paragraph(),
            'birth_date' => fake()->date(),
            'nationality' => fake()->country()
        ];
    }
}
