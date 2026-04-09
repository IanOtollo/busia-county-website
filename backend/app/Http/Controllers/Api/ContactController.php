<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ContactSubmission;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'full_name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:20',
            'department' => 'required|string',
            'subject' => 'required|string|max:255',
            'message' => 'required|string|max:5000',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $submission = ContactSubmission::create(array_merge(
            $validator->validated(),
            ['ip_address' => $request->ip(), 'status' => 'unread']
        ));

        // In a real app, send email notification here

        return response()->json([
            'message' => 'Your message has been received successfully. We will get back to you shortly.',
            'submission_id' => $submission->id
        ], 201);
    }
}
