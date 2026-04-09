<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tender extends Model
{
    use HasFactory;

    protected $fillable = [
        'tender_number',
        'title_en',
        'title_sw',
        'department',
        'closing_date',
        'document_path',
        'document_size_kb',
        'is_active',
    ];

    protected $casts = [
        'closing_date' => 'datetime',
        'is_active' => 'boolean',
    ];
}
