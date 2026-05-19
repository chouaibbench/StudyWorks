<?php

namespace App\Http\Controllers;

use App\Models\Evenement;
use Illuminate\Http\Request;

class EvenementController extends Controller
{
    public function index()
    {
        $evenements = Evenement::with(['expert', 'ateliers'])->get();
         return view('evenements.index', compact('evenements'));
    }

    public function show(string $id)
    {
        $evenement = Evenement::with(['expert', 'ateliers'])->findOrFail($id);
        return view('evenements.show', compact('evenement'));
    }

    
    public function edit(string $id)
    {
        $evenement = Evenement::findOrFail($id);
        return view('evenements.edit', compact('evenement'));
    }

    public function update(Request $request, string $id)
    {
        $evenement = Evenement::findOrFail($id);
        $evenement->update($request->only(['theme', 'date_debut', 'date_fin', 'description', 'cout_journalier']));

        return redirect()->route('evenements.index')
            ->with('success', 'Événement modifié avec succès.');
    }

    public function destroy(string $id)
    {
        $evenement = Evenement::findOrFail($id);
        $evenement->delete();

         return redirect()->route('evenements.index')
            ->with('success', 'Événement supprimé avec succès.');
    }
}
