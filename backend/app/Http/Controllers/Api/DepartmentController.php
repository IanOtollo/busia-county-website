<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Department;
use Illuminate\Http\Request;

class DepartmentController extends Controller
{
    public function index()
    {
        return response()->json(Department::all());
    }

    public function show($slug)
    {
        $department = Department::where('slug', $slug)->firstOrFail();
        return response()->json($department);
    }
}
