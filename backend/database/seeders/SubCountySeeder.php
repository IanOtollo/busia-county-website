<?php

namespace Database\Seeders;

use App\Models\SubCounty;
use Illuminate\Database\Seeder;

class SubCountySeeder extends Seeder
{
    public function run(): void
    {
        $subCounties = [
            [
                'name_en' => 'Teso North',
                'name_sw' => 'Teso Kaskazini',
                'headquarters' => 'Amagoro',
                'area_sq_km' => 256.00,
                'population' => 117947,
                'wards' => ['Malaba Central', 'Malaba North', 'Malaba South', 'Ang\'urai South', 'Ang\'urai North', 'Ang\'urai East'],
            ],
            [
                'name_en' => 'Teso South',
                'name_sw' => 'Teso Kusini',
                'headquarters' => 'Amukura',
                'area_sq_km' => 299.00,
                'population' => 168116,
                'wards' => ['Ang\'orom', 'Chakol South', 'Chakol North', 'Amukura West', 'Amukura Central', 'Amukura East'],
            ],
            [
                'name_en' => 'Nambale',
                'name_sw' => 'Nambale',
                'headquarters' => 'Nambale',
                'area_sq_km' => 237.00,
                'population' => 111000,
                'wards' => ['Nambale Town', 'Bukhayo North/Walatsi', 'Bukhayo East', 'Bukhayo Central'],
            ],
            [
                'name_en' => 'Matayos',
                'name_sw' => 'Matayos',
                'headquarters' => 'Matayos',
                'area_sq_km' => 196.00,
                'population' => 125000,
                'wards' => ['Bukhayo West', 'Mayenje', 'Matayos South', 'Busia Town'],
            ],
            [
                'name_en' => 'Butula',
                'name_sw' => 'Butula',
                'headquarters' => 'Butula',
                'area_sq_km' => 247.00,
                'population' => 142000,
                'wards' => ['Marachi West', 'Marachi Central', 'Marachi East', 'Marachi North'],
            ],
            [
                'name_en' => 'Funyula',
                'name_sw' => 'Funyula',
                'headquarters' => 'Funyula',
                'area_sq_km' => 265.00,
                'population' => 105000,
                'wards' => ['Namboboto Nambuku', 'Nangina', 'Ageng\'a Nanguba', 'Bwiri'],
            ],
            [
                'name_en' => 'Budalangi',
                'name_sw' => 'Budalangi',
                'headquarters' => 'Port Victoria',
                'area_sq_km' => 188.00,
                'population' => 84000,
                'wards' => ['Bunyala Central', 'Bunyala North', 'Bunyala West', 'Bunyala South'],
            ],
        ];

        foreach ($subCounties as $sc) {
            SubCounty::create($sc);
        }
    }
}
