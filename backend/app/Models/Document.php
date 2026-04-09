<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    use HasFactory;

    protected $fillable = [
        'title_en',
        'title_sw',
        'category',
        'year',
        'document_path',
        'document_size_kb',
    ];

    protected $casts = [
        'year' => 'integer',
        'document_size_kb' => 'integer',
    ];
}
