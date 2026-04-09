<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Vacancy;
use Illuminate\Http\Request;

class VacancyController extends Controller
{
    public function index(Request $request)
    {
        $query = Vacancy::query();

        if ($request->has('department')) {
            $query->where('department', $request->department);
        }

        return response()->json($query->orderBy('closing_date', 'desc')->get());
    }
}
