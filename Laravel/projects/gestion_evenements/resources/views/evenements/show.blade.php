<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Détail de l'événement</title>
    <style>
        table { border-collapse: collapse; width: 50%; }
        table, th, td { border: 1px solid black; padding: 8px; }
        a, button { margin-right: 5px; }
    </style>
</head>
<body>
    <h1>Détail de l'événement</h1>

    <table>
        <tr><th>Thème</th><td>{{ $evenement->theme }}</td></tr>
        <tr><th>Date début</th><td>{{ $evenement->date_debut }}</td></tr>
        <tr><th>Date fin</th><td>{{ $evenement->date_fin }}</td></tr>
        <tr><th>Description</th><td>{{ $evenement->description }}</td></tr>
        <tr><th>Coût journalier</th><td>{{ $evenement->cout_journalier }}</td></tr>
        <tr><th>Expert</th><td>{{ $evenement->expert?->nomExp }} {{ $evenement->expert?->prenomExp }}</td></tr>
    </table>

    <br>
    <a href="{{ route('evenements.index') }}">Retour à la liste</a>
</body>
</html>
