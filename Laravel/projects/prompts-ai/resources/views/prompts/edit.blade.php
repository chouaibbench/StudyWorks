@extends('layouts.app')

@section('content')
<h2>Modifier le Prompt</h2>

<form action="{{ route('prompts.update', $prompt) }}" method="POST">
    @csrf
    @method('PUT')

    <div class="mb-3">
        <label class="form-label">Titre</label>
        <input type="text" name="titre" class="form-control @error('titre') is-invalid @enderror"
               value="{{ old('titre', $prompt->titre) }}">
        @error('titre') <div class="invalid-feedback">{{ $message }}</div> @enderror
    </div>

    <div class="mb-3">
        <label class="form-label">Description</label>
        <textarea name="description" class="form-control @error('description') is-invalid @enderror"
                  rows="3">{{ old('description', $prompt->description) }}</textarea>
        @error('description') <div class="invalid-feedback">{{ $message }}</div> @enderror
    </div>

    <div class="mb-3">
        <label class="form-label">Prompt Text</label>
        <textarea name="prompt_text" class="form-control @error('prompt_text') is-invalid @enderror"
                  rows="4">{{ old('prompt_text', $prompt->prompt_text) }}</textarea>
        @error('prompt_text') <div class="invalid-feedback">{{ $message }}</div> @enderror
    </div>

    <div class="mb-3">
        <label class="form-label">Famille</label>
        <select name="famille_id" class="form-select @error('famille_id') is-invalid @enderror">
            <option value="">-- Choisir une famille --</option>
            @foreach($familles as $famille)
                <option value="{{ $famille->id }}"
                    {{ old('famille_id', $prompt->famille_id) == $famille->id ? 'selected' : '' }}>
                    {{ $famille->titre }} ({{ $famille->type }})
                </option>
            @endforeach
        </select>
        @error('famille_id') <div class="invalid-feedback">{{ $message }}</div> @enderror
    </div>

    <button type="submit" class="btn btn-warning">Modifier</button>
    <a href="{{ route('prompts.index') }}" class="btn btn-secondary">Retour</a>
</form>
@endsection
