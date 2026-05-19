<?php

namespace Database\Factories;

use App\Models\Acteur;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Acteur>
 */
class ActeurFactory extends Factory
{
    public function definition(): array
    {
        return [
            'nom'            => $this->faker->lastName(),
            'prenom'         => $this->faker->firstName(),
            'date_naissance' => $this->faker->dateTimeBetween('-80 years', '-18 years')->format('Y-m-d'),
            'nationalite'    => $this->faker->country(),
        ];
    }
}
