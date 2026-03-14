<!DOCTYPE html>
<html>
<head>
    <title>My First Laravel Page</title>
    <style>
        table {
            border-collapse: collapse;
            width: 100%;
        }
        table, th, td {
            border: 1px solid black;
            padding: 8px
        }
        a, button {
            margin-right: 5px;
        }
    </style>
</head>
<body>
        <h1>List des évenements</h1>

        @if(session('success'))
            <p style="color: green; ">{{ session('success')}}</p>
        @endif

        <table>
            <thead>
                <tr>
                    <th>Thème</th>
                    <th>Date début</th>
                    <th>Date fin</th>
                    <th>Description</th>
                    <th>Cout journalier</th>
                    <th>Expert id</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                @foreach($evenements as $evenement)
                    <tr>
                        <td>{{ $evenement->theme }}</td>
                        <td>{{ $evenement->date_debut }}</td>
                        <td>{{ $evenement->date_fin }}</td>
                        <td>{{ $evenement->description }}</td>
                        <td>{{ $evenement->cout_journalier }}</td>
                        <td>{{ $evenement->expert_id }}</td>
                        <td>
                            <a href="{{ route('evenements.show', $evenement->id) }}">Consulter</a>
                            <a href="{{ route('evenements.edit', $evenement->id) }}">Modifier</a>

                            <form action="{{ route('evenements.destroy', $evenement->id) }}" method="POST" style="display:inline;">
                                @csrf
                                @method('DELETE')
                                <button type="submit" onclick="return confirm('Supprimer cet événement ?')">
                                    Supprimer
                                </button>
                            </form>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>

</body>
</html>