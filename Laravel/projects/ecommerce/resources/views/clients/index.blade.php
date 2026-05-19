<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Clients</title>
</head>
<body>

    <h1>Ajouter un nouveau client</h1>

    <form action="{{ route('clients.store') }}" method="POST">
        @csrf
        <input type="text" name="nom" placeholder="Nom">
        <input type="text" name="telephone" placeholder="Téléphone">
        <input type="text" name="adresse" placeholder="Adresse">
        <input type="text" name="ville" placeholder="Ville">
        <input type="text" name="code_postale" placeholder="Code postale">
        <input type="text" name="pays" placeholder="Pays">
        <button type="submit">Ajouter</button>
    </form>

    <h1>Liste des clients</h1>

    <table border="1" cellpadding="10">
        <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Téléphone</th>
            <th>Adresse</th>
            <th>Ville</th>
            <th>Code postale</th>
            <th>Pays</th>
            <th>Actions</th>
        </tr>

        @foreach($clients as $client)
            <tr>
                <td>{{ $client->id }}</td>
                <td>{{ $client->nom }}</td>
                <td>{{ $client->telephone }}</td>
                <td>{{ $client->adresse }}</td>
                <td>{{ $client->ville }}</td>
                <td>{{ $client->code_postale }}</td>
                <td>{{ $client->pays }}</td>
                <td>
                    <form action="{{ route('clients.destroy', $client->id) }}" method="POST">
                        @csrf
                        @method('DELETE')
                        <button type="submit">Supprimer</button>
                    </form>
                </td>
            </tr>
        @endforeach

    </table>

</body>
</html>