<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vacancy extends Model
{
    use HasFactory;

    protected $fillable = [
        'job_title_en',
        'job_title_sw',
        'department',
        'grade',
        'positions_available',
        'requirements_en',
        'requirements_sw',
        'closing_date',
        'document_path',
        'document_size_kb',
        'is_active',
    ];

    protected $casts = [
        'closing_date' => 'datetime',
        'is_active' => 'boolean',
        'positions_available' => 'integer',
        'document_size_kb' => 'integer',
    ];
}
