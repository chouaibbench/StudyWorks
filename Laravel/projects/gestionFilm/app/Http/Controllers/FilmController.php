<?php

namespace App\Http\Controllers;

use App\Http\Requests\FilmRequest;
use App\Models\Acteur;
use App\Models\Category;
use App\Models\Film;

class FilmController extends Controller
{
    public function index()
    {
        $films = Film::with(['category', 'acteurs'])->latest()->paginate(10);
        return view('films.index', compact('films'));
    }

    public function create()
    {
        $categories = Category::all();
        $acteurs    = Acteur::orderBy('nom')->get();
        return view('films.create', compact('categories', 'acteurs'));
    }

    public function store(FilmRequest $request)
    {
        $data = $request->validated();

        if ($request->hasFile('poster')) {
            $data['poster'] = $request->file('poster')->store('posters', 'public');
        }

        $film = Film::create($data);
        $film->acteurs()->sync($request->input('acteurs', []));

        return redirect()->route('films.index')->with('success', 'Film créé avec succès.');
    }

    public function show(Film $film)
    {
        $film->load(['category', 'acteurs']);
        return view('films.show', compact('film'));
    }

    public function edit(Film $film)
    {
        $categories = Category::all();
        $acteurs    = Acteur::orderBy('nom')->get();
        return view('films.edit', compact('film', 'categories', 'acteurs'));
    }

    public function update(FilmRequest $request, Film $film)
    {
        $data = $request->validated();

        if ($request->hasFile('poster')) {
            $data['poster'] = $request->file('poster')->store('posters', 'public');
        }

        $film->update($data);
        $film->acteurs()->sync($request->input('acteurs', []));

        return redirect()->route('films.index')->with('success', 'Film mis à jour avec succès.');
    }

    public function destroy(Film $film)
    {
        $film->delete();
        return redirect()->route('films.index')->with('success', 'Film supprimé avec succès.');
    }
}
