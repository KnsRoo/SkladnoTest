<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class NewsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(Request $req)
    {
      $rules = [
          'title' => 'required|string',
          'description' => 'required',
          'visible' => 'required|boolean',
      ];

      switch ($this->getMethod())
      {
        case 'POST':
          return $rules;
        case 'PATCH':
          return array_merge(['id' => 'required|integer'],$rules);
        case 'DELETE':
          return [
              'id' => 'required|integer'
          ];
      }
    }
}
