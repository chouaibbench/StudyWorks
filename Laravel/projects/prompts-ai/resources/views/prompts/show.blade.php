@extends('layouts.app')

@section('content')
<h2>Détail du Prompt</h2>
<div class="card">
    <div class="card-body">
        <p><strong>ID :</strong> {{ $prompt->id }}</p>
        <p><strong>Titre :</strong> {{ $prompt->titre }}</p>
        <p><strong>Description :</strong> {{ $prompt->description }}</p>
        <p><strong>Prompt Text :</strong> {{ $prompt->prompt_text }}</p>
        <p><strong>Famille :</strong> {{ $prompt->famille->titre ?? '-' }}</p>
    </div>
</div>
<a href="{{ route('prompts.index') }}" class="btn btn-secondary mt-3">Retour</a>
@endsection
