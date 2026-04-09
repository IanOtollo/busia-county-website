<?php

namespace Database\Seeders;

use App\Models\News;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class NewsSeeder extends Seeder
{
    public function run(): void
    {
        $news = [
            [
                'title_en' => 'Governor Otuoma Launches Massive Agricultural Transformation Programme',
                'title_sw' => 'Gavana Otuoma Azindua Mpango Mkubwa wa Mabadiliko ya Kilimo',
                'excerpt_en' => 'The program aims to support over 50,000 farmers with high-yield seeds and modern farming equipment to boost food security.',
                'excerpt_sw' => 'Mpango huo unalenga kusaidia wakulima zaidi ya 50,000 kwa mbegu zenye mazao mengi na vifaa vya kisasa vya kilimo ili kuimarisha usalama wa chakula.',
                'body_en' => '<p>Governor Dr. Paul Otuoma has today launched a comprehensive agricultural transformation programme aimed at revolutionizing the sector in Busia County. The initiative, funded through a partnership with national government agencies, will see farmers across all seven sub-counties receive subsidized inputs and training.</p><p>Speaking during the launch at the Busia Agricultural Training Centre, the Governor emphasized that his administration is committed to making Busia a food-secure county and a leading producer of edible oils and cereals in the Western region.</p>',
                'body_sw' => '<p>Gavana Dkt. Paul Otuoma leo amezindua mpango kamili wa mabadiliko ya kilimo unalenga kuleta mapinduzi katika sekta hiyo katika Kaunti ya Busia. Mpango huo, unaofadhiliwa kupitia ushirikiano na mashirika ya serikali ya kitaifa, utawaona wakulima katika sehemu zote saba za kaunti wakipokea pembejeo za ruzuku na mafunzo.</p><p>Akizungumza wakati wa uzinduzi katika Kituo cha Mafunzo ya Kilimo cha Busia, Gavana alisisitiza kuwa serikali yake imejitolea kuifanya Busia kuwa kaunti yenye usalama wa chakula na mzalishaji mkuu wa mafuta ya kula na nafaka katika ukanda wa Magharibi.</p>',
                'category' => 'agriculture',
                'author' => 'County Communications Team',
                'published_at' => now()->subDays(2),
                'is_featured' => true,
            ],
            [
                'title_en' => 'Busia County Referral Hospital Receives Modern Dialysis Equipment',
                'title_sw' => 'Hospitali ya Rufaa ya Kaunti ya Busia Yapokea Vifaa vya Kisasa vya Kusafisha Damu',
                'excerpt_en' => 'The new machines will increase the capacity of the renal unit, allowing for more sessions per week and reducing wait times for patients.',
                'excerpt_sw' => 'Mashine hizo mpya zitaongeza uwezo wa kitengo cha figo, kuruhusu vikao zaidi kwa wiki na kupunguza nyakati za kusubiri kwa wagonjwa.',
                'body_en' => '<p>In a significant boost to the healthcare sector, the Busia County Referral Hospital has taken delivery of five state-of-the-art dialysis machines. The equipment was procured through the county\'s health equalization fund to address the rising cases of kidney-related ailments.</p><p>The CEC Health Services noted that these machines will significantly reduce the burden on patients who previously had to travel to Eldoret or Kisumu for critical renal services.</p>',
                'body_sw' => '<p>Katika nyongeza kubwa kwa sekta ya afya, Hospitali ya Rufaa ya Kaunti ya Busia imepokea mashine tano za kisasa za kusafisha damu. Vifaa hivyo vilinunuliwa kupitia mfuko wa kusawazisha afya wa kaunti ili kushughulikia kuongezeka kwa visa vya magonjwa yanayohusiana na figo.</p><p>CEC wa Huduma za Afya alibainisha kuwa mashine hizi zitapunguza kwa kiasi kikubwa mzigo kwa wagonjwa ambao awali walilazimika kusafiri hadi Eldoret au Kisumu kwa huduma muhimu za figo.</p>',
                'category' => 'health',
                'author' => 'Health Department',
                'published_at' => now()->subDays(5),
                'is_featured' => false,
            ],
            [
                'title_en' => 'County Government Upgrades Matayos-Bumala Road to Bitumen Standards',
                'title_sw' => 'Serikali ya Kaunti Inaboresha Barabara ya Matayos-Bumala kufikia Viwango vya Lami',
                'excerpt_en' => 'The road project is expected to improve transport efficiency and market access for traders between Matayos and Bumala markets.',
                'excerpt_sw' => 'Mradi wa barabara unatarajiwa kuimarisha ufanisi wa usafirishaji na upatikanaji wa soko kwa wafanyabiashara kati ya masoko ya Matayos na Bumala.',
                'body_en' => '<p>Construction works for the upgrading of the Matayos-Bumala link road to bitumen standard have officially commenced. The 12-kilometer stretch is a vital artery for the transport of agricultural produce to local markets.</p><p>The Department of Infrastructure has assured residents that the project will be completed within the 12-month contract period, providing employment to hundreds of local youths during the construction phase.</p>',
                'body_sw' => '<p>Kazi za ujenzi wa uboreshaji wa barabara ya kiungo ya Matayos-Bumala kufikia kiwango cha lami zimeanza rasmi. Kipande hicho cha kilomita 12 ni mshipa muhimu kwa usafirishaji wa mazao ya kilimo kwenda kwenye masoko ya eneo hilo.</p><p>Idara ya Miundombinu imewahakikishia wakazi kuwa mradi huo utakamilika ndani ya kipindi cha mkataba wa miezi 12, ikitoa ajira kwa mamia ya vijana wa huko wakati wa awamu ya ujenzi.</p>',
                'category' => 'infrastructure',
                'author' => 'Infrastructure Department',
                'published_at' => now()->subDays(10),
                'is_featured' => false,
            ],
            [
                'title_en' => 'Busia Youth Skill Training Center Graduates Over 500 Students',
                'title_sw' => 'Kituo cha Mafunzo ya Ujuzi wa Vijana Busia Chahitimu Wanafunzi Zaidi ya 500',
                'excerpt_en' => 'Graduates received certificates in vocational skills including welding, fashion design, and ICT to enhance their employability.',
                'excerpt_sw' => 'Wahitimu walipokea vyeti vya ujuzi wa ufundi ikiwemo kulehemu, usanifu wa mitindo, na ICT ili kuimarisha uwezo wao wa kuajiriwa.',
                'body_en' => '<p>More than 500 youths have graduated from various vocational training centers across Busia County. The graduation ceremony, held at the Busia Youth Centre, celebrated students who completed courses in technical and vocational fields.</p><p>The County Government continues to invest in youth polytechnics to bridge the skill gap and empower the young generation with practical tools for self-reliance.</p>',
                'body_sw' => '<p>Zaidi ya vijana 500 wamehitimu kutoka vituo mbalimbali vya mafunzo ya ufundi kote Kaunti ya Busia. Sherehe ya mahafali, iliyofanyika katika Kituo cha Vijana cha Busia, iliwasherehekea wanafunzi waliokamilisha kozi katika fani za ufundi na ufundi stadi.</p><p>Serikali ya Kaunti inaendelea kuwekeza katika vyuo vya ufundi vya vijana ili kuziba pengo la ujuzi na kuwawezesha kizazi kipya na zana za vitendo kwa ajili ya kujitegemea.</p>',
                'category' => 'education',
                'author' => 'Education Department',
                'published_at' => now()->subDays(12),
                'is_featured' => false,
            ],
            [
                'title_en' => 'Busia County to Host 2nd Edition of Cross-Border Trade Fair',
                'title_sw' => 'Kaunti ya Busia Kuandaa Toleo la 2 la Maonyesho ya Biashara ya Mipakani',
                'excerpt_en' => 'The trade fair will bring together traders from Kenya and Uganda to explore new business opportunities and strengthen economic ties.',
                'excerpt_sw' => 'Maonyesho ya biashara yatawakutanisha wafanyabiashara kutoka Kenya na Uganda ili kuchunguza fursa mpya za biashara na kuimarisha uhusiano wa kiuchumi.',
                'body_en' => '<p>Busia County is gearing up to host the second edition of the Kenya-Uganda Cross-Border Trade Fair. The event aims to streamline trade processes at the border and foster collaboration between East African business communities.</p><p>Exhibitors from various sectors, including textiles, agriculture, and services, are expected to showcase their products during the three-day event at the Busia border post.</p>',
                'body_sw' => '<p>Kaunti ya Busia inajiandaa kuandaa toleo la pili la Maonyesho ya Biashara ya Mipakani ya Kenya na Uganda. Tukio hilo linalenga kurahisisha michakato ya biashara mpakani na kukuza ushirikiano kati ya jamii za biashara za Afrika Mashariki.</p><p>Waonyeshaji kutoka sekta mbalimbali, ikiwa ni pamoja na nguo, kilimo, na huduma, wanatarajiwa kuonyesha bidhaa zao wakati wa tukio la siku tatu katika kituo cha mpaka cha Busia.</p>',
                'category' => 'governance',
                'author' => 'Trade Department',
                'published_at' => now()->subDays(15),
                'is_featured' => false,
            ],
        ];

        foreach ($news as $article) {
            $article['slug'] = Str::slug($article['title_en']);
            News::create($article);
        }
    }
}
