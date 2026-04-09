<?php

namespace Database\Seeders;

use App\Models\Vacancy;
use Illuminate\Database\Seeder;

class VacancySeeder extends Seeder
{
    public function run(): void
    {
        $vacancies = [
            [
                'job_title_en' => 'Medical Officer',
                'job_title_sw' => 'Afisa wa Matibabu',
                'department' => 'Health Services and Sanitation',
                'grade' => 'Job Group M',
                'positions_available' => 5,
                'requirements_en' => 'Bachelor of Medicine and Bachelor of Surgery (MBChB), registered by Kenya Medical Practitioners and Dentists Council.',
                'requirements_sw' => 'Shahada ya Udaktari na Shahada ya Upasuaji (MBChB), iliyosajiliwa na Baraza la Madaktari na Madaktari wa Meno wa Kenya.',
                'closing_date' => now()->addDays(10),
                'document_path' => 'vacancies/medical_officer_adv.pdf',
                'document_size_kb' => 850,
                'is_active' => true,
            ],
            [
                'job_title_en' => 'Accountant II',
                'job_title_sw' => 'Mhasibu II',
                'department' => 'Finance and Economic Planning',
                'grade' => 'Job Group K',
                'positions_available' => 3,
                'requirements_en' => 'Bachelor of Commerce (Accounting option), CPA Section 6 or equivalent qualification.',
                'requirements_sw' => 'Shahada ya Biashara (chaguo la Uhasibu), CPA Sehemu ya 6 au sifa inayolingana.',
                'closing_date' => now()->addDays(5),
                'document_path' => 'vacancies/accountant_ii_adv.pdf',
                'document_size_kb' => 720,
                'is_active' => true,
            ],
            [
                'job_title_en' => 'Sub-County Administrator',
                'job_title_sw' => 'Mtawala wa Sehemu ya Kaunti',
                'department' => 'Public Service and Administration',
                'grade' => 'Job Group Q',
                'positions_available' => 1,
                'requirements_en' => 'Master\'s degree in Public Administration or Social Sciences with at least 10 years experience.',
                'requirements_sw' => 'Shahada ya uzamili katika Utawala wa Umma au Sayansi ya Jamii na angalau uzoefu wa miaka 10.',
                'closing_date' => now()->addDays(2),
                'document_path' => 'vacancies/sub_county_admin_adv.pdf',
                'document_size_kb' => 980,
                'is_active' => true,
            ],
            [
                'job_title_en' => 'Senior ICT Officer',
                'job_title_sw' => 'Afisa Mkuu wa ICT',
                'department' => 'ICT and Sustainable Development Goals',
                'grade' => 'Job Group L',
                'positions_available' => 2,
                'requirements_en' => 'Degree in Computer Science or IT. Experience in network administration and software development.',
                'requirements_sw' => 'Shahada ya Sayansi ya Kompyuta au IT. Uzoefu katika utawala wa mtandao na utengenezaji wa programu.',
                'closing_date' => now()->subDays(1),
                'document_path' => 'vacancies/senior_ict_officer_adv.pdf',
                'document_size_kb' => 1100,
                'is_active' => false,
            ],
        ];

        foreach ($vacancies as $vacancy) {
            Vacancy::create($vacancy);
        }
    }
}
