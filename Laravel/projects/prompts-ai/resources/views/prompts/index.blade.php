@extends('layouts.app')

@section('content')
<div class="d-flex justify-content-between align-items-center mb-3">
    <h2>Liste des Prompts IA</h2>
    <a href="{{ route('prompts.create') }}" class="btn btn-primary">Ajouter</a>
</div>

<table class="table table-bordered table-striped">
    <thead class="table-dark">
        <tr>
            <th>ID</th>
            <th>Titre</th>
            <th>Description</th>
            <th>Prompt Text</th>
            <th>Famille</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        @foreach($prompts as $prompt)
        <tr>
            <td>{{ $prompt->id }}</td>
            <td>{{ $prompt->titre }}</td>
            <td>{{ $prompt->description }}</td>
            <td>{{ $prompt->prompt_text }}</td>
            <td>{{ $prompt->famille->titre ?? '-' }}</td>
            <td>
                <a href="{{ route('prompts.show', $prompt) }}" class="btn btn-sm btn-info">Voir</a>
                <a href="{{ route('prompts.edit', $prompt) }}" class="btn btn-sm btn-warning">Modifier</a>
                <form action="{{ route('prompts.destroy', $prompt) }}" method="POST" class="d-inline"
                      onsubmit="return confirm('Supprimer ce prompt ?')">
                    @csrf
                    @method('DELETE')
                    <button type="submit" class="btn btn-sm btn-danger">Supprimer</button>
                </form>
            </td>
        </tr>
        @endforeach
    </tbody>
</table>

{{ $prompts->links() }}
@endsection
