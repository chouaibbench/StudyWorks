@can('update', $course)
    <a href="{{ route('courses.edit', $course) }}">Modifier</a>
@endcan

@can('delete', $course)
    <form action="{{ route('courses.destroy', $course) }}" method="POST">
        @csrf
        @method('DELETE')
        <button type="submit">Supprimer</button>
    </form>
@endcan

<x-card>
    <x-slot name="header">Header</x-slot>
    Content here
    <x-slot name="footer">Footer</x-slot>
</x-card>
