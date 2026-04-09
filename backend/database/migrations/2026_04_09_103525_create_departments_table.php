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
        Schema::create('departments', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('name_en');
            $table->string('name_sw');
            $table->text('mandate_en');
            $table->text('mandate_sw');
            $table->text('vision_en')->nullable();
            $table->text('vision_sw')->nullable();
            $table->text('mission_en')->nullable();
            $table->text('mission_sw')->nullable();
            $table->json('functions_en')->nullable();
            $table->json('functions_sw')->nullable();
            $table->json('achievements_en')->nullable();
            $table->json('achievements_sw')->nullable();
            $table->string('email')->nullable();
            $table->string('icon')->nullable();
            $table->boolean('is_external')->default(false);
            $table->string('external_url')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('departments');
    }
};
