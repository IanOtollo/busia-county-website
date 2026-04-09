<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    use HasFactory;

    protected $fillable = [
        'slug',
        'title_en',
        'title_sw',
        'excerpt_en',
        'excerpt_sw',
        'body_en',
        'body_sw',
        'category',
        'author',
        'image_url',
        'published_at',
        'is_featured',
    ];

    protected $casts = [
        'published_at' => 'datetime',
        'is_featured' => 'boolean',
    ];

    public function getRouteKeyName()
    {
        return 'slug';
    }
}
