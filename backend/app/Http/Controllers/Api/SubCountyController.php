<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\SubCounty;
use Illuminate\Http\Request;

class SubCountyController extends Controller
{
    public function index()
    {
        return response()->json(SubCounty::all());
    }
}
