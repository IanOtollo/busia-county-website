<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Tender;
use Illuminate\Http\Request;

class TenderController extends Controller
{
    public function index(Request $request)
    {
        $query = Tender::query();

        if ($request->has('department')) {
            $query->where('department', $request->department);
        }

        if ($request->has('status')) {
            if ($request->status === 'open') {
                $query->where('closing_date', '>', now());
            } elseif ($request->status === 'closed') {
                $query->where('closing_date', '<=', now());
            }
        }

        return response()->json($query->orderBy('closing_date', 'desc')->get());
    }
}
