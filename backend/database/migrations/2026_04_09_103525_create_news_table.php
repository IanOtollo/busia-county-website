<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('news', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('title_en');
            $table->string('title_sw');
            $table->text('excerpt_en');
            $table->text('excerpt_sw');
            $table->longText('body_en');
            $table->longText('body_sw');
            $table->string('category');
            $table->string('author');
            $table->string('image_url')->nullable();
            $table->timestamp('published_at');
            $table->boolean('is_featured')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('news');
    }
};
