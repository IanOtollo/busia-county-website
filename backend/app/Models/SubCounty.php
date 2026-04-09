<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubCounty extends Model
{
    use HasFactory;

    protected $fillable = [
        'name_en',
        'name_sw',
        'headquarters',
        'area_sq_km',
        'population',
        'wards',
    ];

    protected $casts = [
        'wards' => 'array',
        'area_sq_km' => 'decimal:2',
        'population' => 'integer',
    ];
}
