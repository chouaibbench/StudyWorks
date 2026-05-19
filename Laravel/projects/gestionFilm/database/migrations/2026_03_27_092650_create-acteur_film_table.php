<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('acteur_film', function (Blueprint $table) {
            $table->foreignId('film_id')->constrained('films')->onDelete('cascade');
            $table->foreignId('acteur_id')->constrained('acteurs')->onDelete('cascade');
            $table->primary(['film_id', 'acteur_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('acteur_film');
    }
};
