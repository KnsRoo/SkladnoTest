<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class NewsModel extends Model
{
    protected $fillable = ['id', 'title', 'text', 'picturePath', 'visible', 'publicationDate'];
    protected $hidden = ['created_at', 'updated_at', 'deleted_at'];

    public function scopePublished($query)
    {
        return $query->where('visible',1)
        		     ->where('publicationDate', '<=', date('Y-m-d H:i:s'));
    }
}
