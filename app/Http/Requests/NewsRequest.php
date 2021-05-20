<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Tymon\JWTAuth;

class NewsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return !!auth()->user();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required',
            'text' => 'required',
            'visible' => 'required|boolean',
            'publicationDate' => 'date_format:Y.m.d H:i:s',
        ];
    }
}
