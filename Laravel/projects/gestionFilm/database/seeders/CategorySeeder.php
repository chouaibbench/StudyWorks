<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = ['Action', 'Comédie', 'Drame', 'Horreur', 'Science-Fiction', 'Thriller', 'Romance', 'Animation'];

        foreach ($categories as $nom) {
            Category::create(['nom' => $nom]);
        }
    }
}
