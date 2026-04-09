<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    use HasFactory;

    protected $fillable = [
        'slug',
        'name_en',
        'name_sw',
        'mandate_en',
        'mandate_sw',
        'vision_en',
        'vision_sw',
        'mission_en',
        'mission_sw',
        'functions_en',
        'functions_sw',
        'achievements_en',
        'achievements_sw',
        'email',
        'icon',
        'is_external',
        'external_url',
    ];

    protected $casts = [
        'functions_en' => 'array',
        'functions_sw' => 'array',
        'achievements_en' => 'array',
        'achievements_sw' => 'array',
        'is_external' => 'boolean',
    ];

    public function getRouteKeyName()
    {
        return 'slug';
    }
}
