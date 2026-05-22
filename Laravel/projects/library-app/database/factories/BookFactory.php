<?php

namespace Database\Factories;

use App\Models\Book;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Book>
 */
class BookFactory extends Factory
{
    
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(),
            'description' => fake()->paragraph(),
            'isbn' => fake()->isbn13(),
            'published_at' => fake()->date(),
            'pages' => fake()->numberBetween(100,800),
        ];
    }
}
