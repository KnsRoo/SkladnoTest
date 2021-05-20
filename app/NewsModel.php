<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class NewsModel extends Model
{
    protected $fillable = ['id', 'title', 'text', 'picturePath', 'visible', 'created_at'];
    protected $hidden = ['updated_at', 'deleted_at'];
}
