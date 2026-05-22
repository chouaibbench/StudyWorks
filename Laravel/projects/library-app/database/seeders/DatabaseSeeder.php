<?php

namespace Database\Seeders;

use App\Models\Author;
use App\Models\Book;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $authors = Author::factory(10)->create();

        Book::factory(20)->create()->each(function ($book) use ($authors) {

            $book->authors()->attach(
                $authors->random(2),
                [
                    'contribution_role' => 'writer'
                ]
            );
        });
    }
}
