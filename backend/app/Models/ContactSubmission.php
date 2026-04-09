<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactSubmission extends Model
{
    use HasFactory;

    protected $fillable = [
        'full_name',
        'email',
        'phone',
        'department',
        'subject',
        'message',
        'status',
        'responded_at',
        'ip_address',
    ];

    protected $casts = [
        'responded_at' => 'datetime',
    ];
}
