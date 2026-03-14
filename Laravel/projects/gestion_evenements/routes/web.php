<?php

use App\Http\Controllers\EvenementController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect()->route('evenements.index');
});

Route::resource('evenements', EvenementController::class);