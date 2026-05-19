{{-- Titre --}}
<div>
    <x-input-label for="titre" value="Titre" />
    <x-text-input id="titre" name="titre" type="text" class="mt-1 block w-full"
        value="{{ old('titre', $film->titre ?? '') }}" required />
    <x-input-error :messages="$errors->get('titre')" class="mt-1" />
</div>

{{-- Description --}}
<div>
    <x-input-label for="description" value="Description" />
    <textarea id="description" name="description" rows="4"
        class="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">{{ old('description', $film->description ?? '') }}</textarea>
    <x-input-error :messages="$errors->get('description')" class="mt-1" />
</div>

{{-- Catégorie --}}
<div>
    <x-input-label for="categorie_id" value="Catégorie" />
    <select id="categorie_id" name="categorie_id"
        class="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
        <option value="">-- Choisir --</option>
        @foreach($categories as $cat)
            <option value="{{ $cat->idCart }}"
                {{ old('categorie_id', $film->categorie_id ?? '') == $cat->idCart ? 'selected' : '' }}>
                {{ $cat->nom }}
            </option>
        @endforeach
    </select>
    <x-input-error :messages="$errors->get('categorie_id')" class="mt-1" />
</div>

{{-- Acteurs --}}
<div>
    <x-input-label value="Acteurs" />
    <div class="mt-1 grid grid-cols-2 gap-2 max-h-48 overflow-y-auto border border-gray-300 dark:border-gray-700 rounded-md p-3">
        @foreach($acteurs as $acteur)
            <label class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <input type="checkbox" name="acteurs[]" value="{{ $acteur->id }}"
                    {{ in_array($acteur->id, old('acteurs', isset($film) ? $film->acteurs->pluck('id')->toArray() : [])) ? 'checked' : '' }}>
                {{ $acteur->prenom }} {{ $acteur->nom }}
            </label>
        @endforeach
    </div>
    <x-input-error :messages="$errors->get('acteurs')" class="mt-1" />
</div>

{{-- Poster --}}
<div>
    <x-input-label for="poster" value="Poster" />
    @if(isset($film) && $film->poster)
        <img src="{{ asset('storage/' . $film->poster) }}" class="h-24 w-16 object-cover rounded mb-2">
    @endif
    <input id="poster" name="poster" type="file" accept="image/*"
        class="mt-1 block w-full text-sm text-gray-600 dark:text-gray-300" />
    <x-input-error :messages="$errors->get('poster')" class="mt-1" />
</div>
