<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Course extends Model
{
    use SoftDeletes;

    protected $fillable = ['user_id', 'title', 'description', 'price', 'image'];
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function lesson()
    {
        return $this->hasMany(Lesson::class);
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }
}
