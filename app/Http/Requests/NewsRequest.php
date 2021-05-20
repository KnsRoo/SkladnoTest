<?php

namespace App\Http\Requests;

use Illuminate\Http\Request;

class NewsRequest extends Request
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
      echo "rules";

      $rules = [
          'title' => 'required|string',
          'text' => 'required',
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
