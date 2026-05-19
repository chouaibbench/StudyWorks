<x-app-layout>
    <x-slot name="header">
        <div class="flex justify-between items-center">
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Films</h2>
            <a href="{{ route('films.create') }}"
               class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-sm">
                + Ajouter un film
            </a>
        </div>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">

            @if(session('success'))
                <div class="mb-4 p-4 bg-green-100 text-green-800 rounded">{{ session('success') }}</div>
            @endif

            <div class="bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg overflow-hidden">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead class="bg-gray-50 dark:bg-gray-700">
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Poster</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Titre</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Catégorie</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Acteurs</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                        @forelse($films as $film)
                        <tr>
                            <td class="px-6 py-4">
                                @if($film->poster)
                                    <img src="{{ asset('storage/' . $film->poster) }}" class="h-16 w-12 object-cover rounded">
                                @else
                                    <div class="h-16 w-12 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-400">N/A</div>
                                @endif
                            </td>
                            <td class="px-6 py-4 text-gray-900 dark:text-gray-100 font-medium">{{ $film->titre }}</td>
                            <td class="px-6 py-4 text-gray-600 dark:text-gray-300">{{ $film->category->nom ?? '-' }}</td>
                            <td class="px-6 py-4 text-gray-600 dark:text-gray-300 text-sm">
                                {{ $film->acteurs->map(fn($a) => $a->prenom . ' ' . $a->nom)->join(', ') ?: '-' }}
                            </td>
                            <td class="px-6 py-4 space-x-2 text-sm">
                                <a href="{{ route('films.show', $film) }}" class="text-blue-600 hover:underline">Voir</a>
                                <a href="{{ route('films.edit', $film) }}" class="text-yellow-600 hover:underline">Modifier</a>
                                <form action="{{ route('films.destroy', $film) }}" method="POST" class="inline"
                                      onsubmit="return confirm('Supprimer ce film ?')">
                                    @csrf @method('DELETE')
                                    <button type="submit" class="text-red-600 hover:underline">Supprimer</button>
                                </form>
                            </td>
                        </tr>
                        @empty
                        <tr>
                            <td colspan="5" class="px-6 py-8 text-center text-gray-400">Aucun film trouvé.</td>
                        </tr>
                        @endforelse
                    </tbody>
                </table>
                <div class="px-6 py-4">{{ $films->links() }}</div>
            </div>
        </div>
    </div>
</x-app-layout>
