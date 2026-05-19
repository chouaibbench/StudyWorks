<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class FilmRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    /**
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'titre'        => ['required', 'string', 'max:255'],
            'description'  => ['required', 'string'],
            'poster'       => ['nullable', 'image', 'max:2048'],
            'categorie_id' => ['required', 'exists:categories,idCart'],
            'acteurs'      => ['nullable', 'array'],
            'acteurs.*'    => ['exists:acteurs,id'],
        ];
    }
}
