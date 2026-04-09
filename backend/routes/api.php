<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\DepartmentController;
use App\Http\Controllers\Api\NewsController;
use App\Http\Controllers\Api\TenderController;
use App\Http\Controllers\Api\VacancyController;
use App\Http\Controllers\Api\DocumentController;
use App\Http\Controllers\Api\SubCountyController;
use App\Http\Controllers\Api\ContactController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Public API Routes
Route::prefix('v1')->group(function () {
    // Departments
    Route::get('/departments', [DepartmentController::class, 'index']);
    Route::get('/departments/{slug}', [DepartmentController::class, 'show']);

    // News
    Route::get('/news', [NewsController::class, 'index']);
    Route::get('/news/{slug}', [NewsController::class, 'show']);

    // Tenders
    Route::get('/tenders', [TenderController::class, 'index']);

    // Vacancies
    Route::get('/vacancies', [VacancyController::class, 'index']);

    // Documents
    Route::get('/documents', [DocumentController::class, 'index']);

    // Sub-Counties
    Route::get('/sub-counties', [SubCountyController::class, 'index']);

    // Contact Form
    Route::post('/contact', [ContactController::class, 'store']);
});
