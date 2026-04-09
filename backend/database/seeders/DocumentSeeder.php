<?php

namespace Database\Seeders;

use App\Models\Document;
use Illuminate\Database\Seeder;

class DocumentSeeder extends Seeder
{
    public function run(): void
    {
        $documents = [
            [
                'title_en' => 'County Integrated Development Plan (CIDP) 2023-2027',
                'title_sw' => 'Mpango Jumuishi wa Maendeleo ya Kaunti (CIDP) 2023-2027',
                'category' => 'cidp',
                'year' => 2023,
                'document_path' => 'documents/busia_cidp_2023_2027.pdf',
                'document_size_kb' => 15400,
            ],
            [
                'title_en' => 'Annual Development Plan (ADP) 2024/2025',
                'title_sw' => 'Mpango wa Maendeleo wa Mwaka (ADP) 2024/2025',
                'category' => 'adp',
                'year' => 2023,
                'document_path' => 'documents/busia_adp_2024_2025.pdf',
                'document_size_kb' => 4500,
            ],
            [
                'title_en' => 'Approved Program Based Budget 2023/2024',
                'title_sw' => 'Bajeti Inayozingatia Mpango Iliyoidhinishwa 2023/2024',
                'category' => 'budget',
                'year' => 2023,
                'document_path' => 'documents/approved_budget_2023_2024.pdf',
                'document_size_kb' => 8200,
            ],
            [
                'title_en' => 'Busia County Health Strategic Plan 2023-2027',
                'title_sw' => 'Mpango Mkakati wa Afya wa Kaunti ya Busia 2023-2027',
                'category' => 'policy',
                'year' => 2023,
                'document_path' => 'documents/health_strategic_plan.pdf',
                'document_size_kb' => 3800,
            ],
            [
                'title_en' => 'Quarterly Economic and Budgetary Review (QEBR) - Q1 2023/2024',
                'title_sw' => 'Mapitio ya Kiuchumi na Bajeti ya Robo Mwaka (QEBR) - Robo 1 2023/2024',
                'category' => 'report',
                'year' => 2023,
                'document_path' => 'documents/qebr_q1_2023.pdf',
                'document_size_kb' => 2100,
            ],
        ];

        foreach ($documents as $doc) {
            Document::create($doc);
        }
    }
}
