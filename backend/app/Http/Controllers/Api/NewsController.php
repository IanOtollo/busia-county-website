<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\News;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    public function index(Request $request)
    {
        $query = News::query();

        if ($request->has('category')) {
            $query->where('category', $request->category);
        }

        if ($request->has('search')) {
            $search = $request->search;
            $query->where(function($q) use ($search) {
                $q->where('title_en', 'like', "%{$search}%")
                  ->orWhere('title_sw', 'like', "%{$search}%")
                  ->orWhere('body_en', 'like', "%{$search}%");
            });
        }

        if ($request->has('featured')) {
            $query->where('is_featured', true);
        }

        $news = $query->orderBy('published_at', 'desc')->paginate(12);
        
        return response()->json($news);
    }

    public function show($slug)
    {
        $article = News::where('slug', $slug)->firstOrFail();
        
        // Also return related news
        $related = News::where('category', $article->category)
            ->where('id', '!=', $article->id)
            ->limit(3)
            ->get();

        return response()->json([
            'article' => $article,
            'related' => $related
        ]);
    }
}
