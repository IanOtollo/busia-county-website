<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Document;
use Illuminate\Http\Request;

class DocumentController extends Controller
{
    public function index(Request $request)
    {
        $query = Document::query();

        if ($request->has('category')) {
            $query->where('category', $request->category);
        }

        if ($request->has('year')) {
            $query->where('year', $request->year);
        }

        return response()->json($query->orderBy('year', 'desc')->orderBy('created_at', 'desc')->get());
    }
}
