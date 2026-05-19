<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Category>
 */
class CategoryFactory extends Factory
{
    public function definition(): array
    {
        $categories = ['Action', 'Comédie', 'Drame', 'Horreur', 'Science-Fiction', 'Thriller', 'Romance', 'Animation'];

        return [
            'nom' => $this->faker->unique()->randomElement($categories),
        ];
    }
}
