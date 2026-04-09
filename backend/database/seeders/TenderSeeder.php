<?php

namespace Database\Seeders;

use App\Models\Tender;
use Illuminate\Database\Seeder;

class TenderSeeder extends Seeder
{
    public function run(): void
    {
        $tenders = [
            [
                'tender_number' => 'BSA/CTY/FIN/001/2023-2024',
                'title_en' => 'Provision of Internal Audit Services for County Departments',
                'title_sw' => 'Utoaji wa Huduma za Ukaguzi wa Ndani kwa Idara za Kaunti',
                'department' => 'Finance and Economic Planning',
                'closing_date' => now()->addDays(14),
                'document_path' => 'tenders/audit_services_2023.pdf',
                'document_size_kb' => 1250,
                'is_active' => true,
            ],
            [
                'tender_number' => 'BSA/CTY/HOC/012/2023-2024',
                'title_en' => 'Supply and Delivery of Medical Equipment for Malaba Sub-County Hospital',
                'title_sw' => 'Ugavi na Uwasilishaji wa Vifaa vya Matibabu kwa Hospitali ya Sehemu ya Kaunti ya Malaba',
                'department' => 'Health Services and Sanitation',
                'closing_date' => now()->addDays(7),
                'document_path' => 'tenders/medical_equipment_malaba.pdf',
                'document_size_kb' => 2400,
                'is_active' => true,
            ],
            [
                'tender_number' => 'BSA/CTY/TRD/005/2023-2024',
                'title_en' => 'Construction of Modern Market Sheds at Nambale Market',
                'title_sw' => 'Ujenzi wa Vibanda vya Soko vya Kisasa katika Soko la Nambale',
                'department' => 'Trade, Industry and Investment',
                'closing_date' => now()->addDays(3),
                'document_path' => 'tenders/nambale_market_sheds.pdf',
                'document_size_kb' => 3100,
                'is_active' => true,
            ],
            [
                'tender_number' => 'BSA/CTY/ROD/045/2023-2024',
                'title_en' => 'Routine Maintenance of Rural Access Roads in Teso South Sub-County',
                'title_sw' => 'Matengenezo ya Kawaida ya Barabara za Vijijini katika Sehemu ya Kaunti ya Teso Kusini',
                'department' => 'Infrastructure, Energy and Transport',
                'closing_date' => now()->subDays(2),
                'document_path' => 'tenders/rural_roads_teso_south.pdf',
                'document_size_kb' => 1850,
                'is_active' => false,
            ],
            [
                'tender_number' => 'BSA/CTY/WTR/009/2023-2024',
                'title_en' => 'Drilling and Equipping of Solar-Powered Boreholes in Bunyala West',
                'title_sw' => 'Kuchimba na Kuweka Vifaa vya Visima Vinavyotumia Nishati ya Jua Bunyala Magharibi',
                'department' => 'Water, Environment and Natural Resources',
                'closing_date' => now()->addDays(21),
                'document_path' => 'tenders/boreholes_bunyala.pdf',
                'document_size_kb' => 4200,
                'is_active' => true,
            ],
        ];

        foreach ($tenders as $tender) {
            Tender::create($tender);
        }
    }
}
