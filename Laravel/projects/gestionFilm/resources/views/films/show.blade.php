<x-app-layout>
    <x-slot name="header">
        <div class="flex justify-between items-center">
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">{{ $film->titre }}</h2>
            <div class="flex gap-2">
                <a href="{{ route('films.edit', $film) }}" class="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 text-sm">Modifier</a>
                <a href="{{ route('films.index') }}" class="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-sm">Retour</a>
            </div>
        </div>
    </x-slot>

    <div class="py-12">
        <div class="max-w-3xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg p-6 flex gap-6">
                @if($film->poster)
                    <img src="{{ asset('storage/' . $film->poster) }}" class="h-48 w-32 object-cover rounded shadow">
                @endif
                <div class="flex-1 space-y-3">
                    <div>
                        <span class="text-xs font-semibold uppercase text-gray-400">Catégorie</span>
                        <p class="text-gray-800 dark:text-gray-200">{{ $film->category->nom ?? '-' }}</p>
                    </div>
                    <div>
                        <span class="text-xs font-semibold uppercase text-gray-400">Description</span>
                        <p class="text-gray-800 dark:text-gray-200">{{ $film->description }}</p>
                    </div>
                    <div>
                        <span class="text-xs font-semibold uppercase text-gray-400">Acteurs</span>
                        <p class="text-gray-800 dark:text-gray-200">
                            {{ $film->acteurs->map(fn($a) => $a->prenom . ' ' . $a->nom)->join(', ') ?: '-' }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
