<?php

namespace App\Http\Controllers;

use App\Models\Famille;
use App\Models\Prompt;
use Illuminate\Http\Request;

class PromptController extends Controller
{
    public function index()
    {
        $prompts = Prompt::with('famille')->paginate(9);
        return view('prompts.index', compact('prompts'));
    }

    public function create()
    {
        $familles = Famille::all();
        return view('prompts.create', compact('familles'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'titre'       => 'required',
            'description' => 'required',
            'prompt_text' => 'required',
            'famille_id'  => 'required|exists:familles,id',
        ]);

        Prompt::create($request->only(['titre', 'description', 'prompt_text', 'famille_id']));

        return redirect()->route('prompts.index')->with('success', 'Prompt ajouté avec succès.');
    }

    public function show(Prompt $prompt)
    {
        return view('prompts.show', compact('prompt'));
    }

    public function edit(Prompt $prompt)
    {
        $familles = Famille::all();
        return view('prompts.edit', compact('prompt', 'familles'));
    }

    public function update(Request $request, Prompt $prompt)
    {
        $request->validate([
            'titre'       => 'required',
            'description' => 'required',
            'prompt_text' => 'required',
            'famille_id'  => 'required|exists:familles,id',
        ]);

        $prompt->update($request->only(['titre', 'description', 'prompt_text', 'famille_id']));

        return redirect()->route('prompts.index')->with('success', 'Prompt modifié avec succès.');
    }

    public function destroy(Prompt $prompt)
    {
        $prompt->delete();
        return redirect()->route('prompts.index')->with('success', 'Prompt supprimé avec succès.');
    }
}
