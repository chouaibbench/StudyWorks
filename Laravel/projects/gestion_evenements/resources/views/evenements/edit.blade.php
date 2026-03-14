<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Modifier l'événement</title>
    <style>
        label { display: block; margin-top: 10px; }
        input, textarea { width: 300px; padding: 5px; }
        button { margin-top: 15px; }
    </style>
</head>
<body>
    <h1>Modifier l'événement</h1>

    <form action="{{ route('evenements.update', $evenement->id) }}" method="POST">
        @csrf
        @method('PUT')

        <label>Thème</label>
        <input type="text" name="theme" value="{{ $evenement->theme }}">

        <label>Date début</label>
        <input type="date" name="date_debut" value="{{ $evenement->date_debut }}">

        <label>Date fin</label>
        <input type="date" name="date_fin" value="{{ $evenement->date_fin }}">

        <label>Description</label>
        <textarea name="description">{{ $evenement->description }}</textarea>

        <label>Coût journalier</label>
        <input type="number" step="0.01" name="cout_journalier" value="{{ $evenement->cout_journalier }}">

        <br>
        <button type="submit">Enregistrer</button>
        <a href="{{ route('evenements.index') }}">Annuler</a>
    </form>
</body>
</html>
