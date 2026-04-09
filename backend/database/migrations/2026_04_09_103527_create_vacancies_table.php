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
        Schema::create('vacancies', function (Blueprint $table) {
            $table->id();
            $table->string('job_title_en');
            $table->string('job_title_sw');
            $table->string('department');
            $table->string('grade');
            $table->integer('positions_available')->default(1);
            $table->text('requirements_en');
            $table->text('requirements_sw');
            $table->timestamp('closing_date');
            $table->string('document_path')->nullable();
            $table->integer('document_size_kb')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vacancies');
    }
};
