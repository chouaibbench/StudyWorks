<?php

namespace Database\Seeders;

use App\Models\Acteur;
use Illuminate\Database\Seeder;

class ActeurSeeder extends Seeder
{
    public function run(): void
    {
        Acteur::factory(20)->create();
    }
}
