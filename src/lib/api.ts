const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1";

/* ===== Type Definitions ===== */
export interface NewsArticle {
  id: number;
  title_en: string;
  title_sw: string;
  slug: string;
  excerpt_en: string;
  excerpt_sw: string;
  body_en: string;
  body_sw: string;
  category: string;
  author: string;
  published_at: string;
  featured_image: string | null;
  is_published: boolean;
}

export interface Tender {
  id: number;
  tender_number: string;
  title_en: string;
  title_sw: string;
  description_en: string;
  description_sw: string;
  department: string;
  closing_date: string;
  document_path: string | null;
  document_size_kb: number;
  is_active: boolean;
}

export interface Vacancy {
  id: number;
  job_title_en: string;
  job_title_sw: string;
  department: string;
  grade: string;
  positions_available: number;
  requirements_en: string;
  requirements_sw: string;
  closing_date: string;
  document_path: string | null;
  document_size_kb: number;
  is_active: boolean;
}

export interface Document {
  id: number;
  title_en: string;
  title_sw: string;
  category: string;
  year: number;
  document_path: string;
  document_size_kb: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
}

export interface SearchResults {
  news: NewsArticle[];
  tenders: Tender[];
  vacancies: Vacancy[];
  documents: Document[];
}

export interface ContactFormData {
  full_name: string;
  email: string;
  phone?: string;
  department: string;
  subject: string;
  message: string;
}

/* ===== Mock Data (used when API is not available) ===== */
const MOCK_NEWS: NewsArticle[] = [
  {
    id: 1,
    title_en:
      "Governor Otuoma Launches Agricultural Transformation Programme in Busia",
    title_sw:
      "Gavana Otuoma Azindua Programu ya Mabadiliko ya Kilimo Busia",
    slug: "governor-launches-agricultural-transformation-programme",
    excerpt_en:
      "H.E. Dr. Paul Otuoma has launched a comprehensive agricultural transformation programme aimed at boosting food production and improving livelihoods for thousands of farmers across Busia County.",
    excerpt_sw:
      "Mhe. Dkt. Paul Otuoma amezindua programu kamili ya mabadiliko ya kilimo inayolenga kuongeza uzalishaji wa chakula na kuboresha maisha ya maelfu ya wakulima katika Kaunti ya Busia.",
    body_en:
      "<p>H.E. Dr. Paul Otuoma has launched a comprehensive agricultural transformation programme aimed at boosting food production and improving livelihoods for thousands of farmers across Busia County.</p><p>The programme, which targets all seven sub-counties, includes the distribution of improved seeds, provision of subsidized fertilizers, and deployment of agricultural extension officers to support farmers with modern farming techniques.</p><p>Speaking during the launch at the county headquarters, Governor Otuoma emphasized that agriculture is the backbone of Busia's economy, employing over 70% of the county's workforce.</p>",
    body_sw:
      "<p>Mhe. Dkt. Paul Otuoma amezindua programu kamili ya mabadiliko ya kilimo inayolenga kuongeza uzalishaji wa chakula na kuboresha maisha ya maelfu ya wakulima katika Kaunti ya Busia.</p>",
    category: "agriculture",
    author: "County Communications",
    published_at: "2025-12-15T10:00:00Z",
    featured_image: null,
    is_published: true,
  },
  {
    id: 2,
    title_en:
      "Busia County Referral Hospital Receives Modern Diagnostic Equipment",
    title_sw:
      "Hospitali ya Rufaa ya Kaunti ya Busia Yapokea Vifaa vya Kisasa vya Uchunguzi",
    slug: "referral-hospital-receives-modern-equipment",
    excerpt_en:
      "The county government has equipped Busia County Referral Hospital with state-of-the-art diagnostic equipment worth KES 50 million, significantly enhancing healthcare delivery in the region.",
    excerpt_sw:
      "Serikali ya kaunti imeiwekea Hospitali ya Rufaa ya Kaunti ya Busia vifaa vya kisasa vya uchunguzi vyenye thamani ya KES milioni 50.",
    body_en:
      "<p>The county government has equipped Busia County Referral Hospital with state-of-the-art diagnostic equipment worth KES 50 million, significantly enhancing healthcare delivery in the region.</p><p>The new equipment includes digital X-ray machines, ultrasound scanners, and a fully equipped laboratory analysis system. This investment is part of the county's commitment to universal healthcare access.</p>",
    body_sw: "<p>Serikali ya kaunti imeiwekea Hospitali ya Rufaa ya Kaunti ya Busia vifaa vya kisasa vya uchunguzi vyenye thamani ya KES milioni 50.</p>",
    category: "health",
    author: "Health Department",
    published_at: "2025-12-10T08:30:00Z",
    featured_image: null,
    is_published: true,
  },
  {
    id: 3,
    title_en:
      "County Completes 10.5km Bitumen Road Upgrade in Matayos Sub-County",
    title_sw:
      "Kaunti Yakamilisha Ukarabati wa Barabara ya Lami ya km 10.5 katika Kaunti Ndogo ya Matayos",
    slug: "bitumen-road-upgrade-matayos",
    excerpt_en:
      "A major road infrastructure project connecting key market centres in Matayos Sub-County has been completed, benefiting over 50,000 residents with improved transport connectivity.",
    excerpt_sw:
      "Mradi mkubwa wa miundombinu ya barabara unaounganisha vituo vikuu vya soko katika Kaunti Ndogo ya Matayos umekamilishwa.",
    body_en:
      "<p>A major road infrastructure project connecting key market centres in Matayos Sub-County has been completed, benefiting over 50,000 residents with improved transport connectivity.</p><p>The 10.5-kilometre bitumen road upgrade was funded through the county's roads development budget and will significantly reduce transport costs for farmers and traders in the region.</p>",
    body_sw: "<p>Mradi mkubwa wa miundombinu ya barabara unaounganisha vituo vikuu vya soko katika Kaunti Ndogo ya Matayos umekamilishwa.</p>",
    category: "infrastructure",
    author: "Roads Department",
    published_at: "2025-12-05T14:00:00Z",
    featured_image: null,
    is_published: true,
  },
  {
    id: 4,
    title_en: "Public Participation Forums Held Across All 7 Sub-Counties",
    title_sw:
      "Vikao vya Ushiriki wa Umma Vyafanyika Katika Kaunti Ndogo Zote 7",
    slug: "public-participation-forums-all-subcounties",
    excerpt_en:
      "The county government successfully conducted public participation forums in all seven sub-counties to gather citizen input on the upcoming Annual Development Plan and budget priorities.",
    excerpt_sw:
      "Serikali ya kaunti imefanikiwa kufanya vikao vya ushiriki wa umma katika kaunti ndogo zote saba kukusanya maoni ya raia.",
    body_en:
      "<p>The county government successfully conducted public participation forums in all seven sub-counties to gather citizen input on the upcoming Annual Development Plan and budget priorities.</p><p>Over 15,000 residents participated in the forums, providing their views on development priorities, service delivery challenges, and proposed solutions.</p>",
    body_sw: "<p>Serikali ya kaunti imefanikiwa kufanya vikao vya ushiriki wa umma katika kaunti ndogo zote saba.</p>",
    category: "governance",
    author: "County Communications",
    published_at: "2025-11-28T09:00:00Z",
    featured_image: null,
    is_published: true,
  },
  {
    id: 5,
    title_en:
      "45 New ECDE Classrooms Constructed Across Busia County",
    title_sw:
      "Vyumba 45 Vipya vya Madarasa ya ECDE Vyjengwa Katika Kaunti ya Busia",
    slug: "new-ecde-classrooms-constructed",
    excerpt_en:
      "The Department of Education has completed the construction of 45 new Early Childhood Development Education classrooms, providing quality learning environments for young children.",
    excerpt_sw:
      "Idara ya Elimu imekamilisha ujenzi wa vyumba 45 vipya vya madarasa ya Elimu ya Maendeleo ya Utotoni.",
    body_en:
      "<p>The Department of Education has completed the construction of 45 new Early Childhood Development Education (ECDE) classrooms, providing quality learning environments for young children across the county.</p><p>Each classroom has been equipped with modern furniture, learning materials, and outdoor play areas. The project was funded through the county education budget and national government grants.</p>",
    body_sw: "<p>Idara ya Elimu imekamilisha ujenzi wa vyumba 45 vipya vya madarasa ya ECDE.</p>",
    category: "education",
    author: "Education Department",
    published_at: "2025-11-20T11:00:00Z",
    featured_image: null,
    is_published: true,
  },
  {
    id: 6,
    title_en:
      "Busia County Signs Partnership Agreement with International Health Organization",
    title_sw:
      "Kaunti ya Busia Yasaini Makubaliano ya Ushirikiano na Shirika la Kimataifa la Afya",
    slug: "partnership-international-health-organization",
    excerpt_en:
      "A landmark partnership agreement has been signed between Busia County and an international health organization to strengthen maternal and child health services across the county.",
    excerpt_sw:
      "Makubaliano muhimu ya ushirikiano yamesainiwa kati ya Kaunti ya Busia na shirika la kimataifa la afya.",
    body_en:
      "<p>A landmark partnership agreement has been signed between Busia County and an international health organization to strengthen maternal and child health services across the county.</p><p>The partnership will support capacity building for healthcare workers, provision of essential medical supplies, and establishment of community health outreach programmes in underserved areas.</p>",
    body_sw: "<p>Makubaliano muhimu ya ushirikiano yamesainiwa kati ya Kaunti ya Busia na shirika la kimataifa la afya.</p>",
    category: "health",
    author: "Health Department",
    published_at: "2025-11-15T15:30:00Z",
    featured_image: null,
    is_published: true,
  },
  {
    id: 7,
    title_en: "County Launches Digital Platform for Citizen Engagement",
    title_sw:
      "Kaunti Yazindua Jukwaa la Kidijitali la Ushiriki wa Raia",
    slug: "digital-platform-citizen-engagement",
    excerpt_en:
      "The Department of ICT has launched a new digital platform enabling citizens to access county services, submit feedback, and track government projects in real-time.",
    excerpt_sw:
      "Idara ya TEHAMA imezindua jukwaa jipya la kidijitali linalowawezesha raia kupata huduma za kaunti.",
    body_en:
      "<p>The Department of ICT has launched a new digital platform enabling citizens to access county services, submit feedback, and track government projects in real-time.</p><p>The platform, accessible via web and mobile devices, represents a significant step in the county's digital transformation agenda.</p>",
    body_sw: "<p>Idara ya TEHAMA imezindua jukwaa jipya la kidijitali linalowawezesha raia kupata huduma za kaunti.</p>",
    category: "governance",
    author: "ICT Department",
    published_at: "2025-11-10T10:00:00Z",
    featured_image: null,
    is_published: true,
  },
  {
    id: 8,
    title_en:
      "Annual Cross-Border Trade Fair Attracts Record Investors",
    title_sw:
      "Maonyesho ya Kila Mwaka ya Biashara ya Mpakani Yavutia Wawekezaji Wengi",
    slug: "cross-border-trade-fair-record-investors",
    excerpt_en:
      "The annual Busia Cross-Border Trade Fair attracted a record number of investors from across East Africa, showcasing the county's potential as a regional trade hub.",
    excerpt_sw:
      "Maonyesho ya kila mwaka ya Biashara ya Mpakani ya Busia yamevutia idadi kubwa ya wawekezaji kutoka Afrika Mashariki.",
    body_en:
      "<p>The annual Busia Cross-Border Trade Fair attracted a record number of investors from across East Africa, showcasing the county's potential as a regional trade hub.</p><p>Over 200 exhibitors from Kenya, Uganda, Tanzania, and Rwanda participated in the three-day event, which featured business matchmaking sessions, investment forums, and cultural exhibitions.</p>",
    body_sw: "<p>Maonyesho ya kila mwaka ya Biashara ya Mpakani ya Busia yamevutia idadi kubwa ya wawekezaji kutoka Afrika Mashariki.</p>",
    category: "agriculture",
    author: "Trade Department",
    published_at: "2025-11-05T09:00:00Z",
    featured_image: null,
    is_published: true,
  },
];

const MOCK_TENDERS: Tender[] = [
  {
    id: 1,
    tender_number: "BCG/TNR/OT/001/2025-2026",
    title_en:
      "Supply and Delivery of Office Furniture for County Headquarters",
    title_sw:
      "Ugavi na Uwasilishaji wa Samani za Ofisi kwa Makao Makuu ya Kaunti",
    description_en:
      "Supply, delivery, and installation of office furniture including desks, chairs, filing cabinets, and conference tables for the refurbished County Headquarters.",
    description_sw:
      "Ugavi, uwasilishaji, na ufungaji wa samani za ofisi ikiwa ni pamoja na meza, viti, makabati ya faili, na meza za mikutano.",
    department: "Public Service Management & Governance",
    closing_date: "2026-05-15T17:00:00Z",
    document_path: "/documents/tenders/BCG-TNR-OT-001.pdf",
    document_size_kb: 1250,
    is_active: true,
  },
  {
    id: 2,
    tender_number: "BCG/TNR/OT/002/2025-2026",
    title_en:
      "Construction of Level 3 Health Centre in Teso North Sub-County",
    title_sw:
      "Ujenzi wa Kituo cha Afya Kiwango cha 3 katika Kaunti Ndogo ya Teso Kaskazini",
    description_en:
      "Construction of a fully equipped Level 3 Health Centre including outpatient department, maternity wing, laboratory, and pharmacy.",
    description_sw:
      "Ujenzi wa Kituo cha Afya Kiwango cha 3 kilichojengwa kikamilifu ikiwa ni pamoja na idara ya wagonjwa wa nje, sehemu ya uzazi, maabara, na famasia.",
    department: "Health Services & Sanitation",
    closing_date: "2026-05-20T17:00:00Z",
    document_path: "/documents/tenders/BCG-TNR-OT-002.pdf",
    document_size_kb: 3400,
    is_active: true,
  },
  {
    id: 3,
    tender_number: "BCG/TNR/OT/003/2025-2026",
    title_en:
      "Routine Maintenance of County Roads — Lot 1: Matayos and Butula Sub-Counties",
    title_sw:
      "Ukarabati wa Kawaida wa Barabara za Kaunti — Kura ya 1: Kaunti Ndogo za Matayos na Butula",
    description_en:
      "Routine maintenance works including grading, gravelling, culvert installation, and drainage improvement on classified county roads in Matayos and Butula Sub-Counties.",
    description_sw:
      "Kazi za ukarabati wa kawaida ikiwa ni pamoja na utengenezaji, uwekaji wa changarawe, ufungaji wa karavati, na uboreshaji wa mifereji.",
    department: "Roads, Transport & Public Works",
    closing_date: "2026-04-30T17:00:00Z",
    document_path: "/documents/tenders/BCG-TNR-OT-003.pdf",
    document_size_kb: 2100,
    is_active: true,
  },
  {
    id: 4,
    tender_number: "BCG/TNR/OT/004/2025-2026",
    title_en:
      "Provision of ICT Equipment and Networking for Sub-County Offices",
    title_sw:
      "Utoaji wa Vifaa vya TEHAMA na Mtandao kwa Ofisi za Kaunti Ndogo",
    description_en:
      "Supply, delivery, installation, and commissioning of ICT equipment including computers, printers, networking infrastructure, and UPS systems for all seven sub-county offices.",
    description_sw:
      "Ugavi, uwasilishaji, ufungaji, na uanzishaji wa vifaa vya TEHAMA ikiwa ni pamoja na kompyuta, printa, miundombinu ya mtandao, na mifumo ya UPS.",
    department: "Strategic Partnerships, ICT & Digital Economy",
    closing_date: "2026-05-10T17:00:00Z",
    document_path: "/documents/tenders/BCG-TNR-OT-004.pdf",
    document_size_kb: 1800,
    is_active: true,
  },
  {
    id: 5,
    tender_number: "BCG/TNR/OT/012/2024-2025",
    title_en:
      "Supply and Delivery of Agricultural Inputs — Season B 2024/2025",
    title_sw:
      "Ugavi na Uwasilishaji wa Pembejeo za Kilimo — Msimu B 2024/2025",
    description_en:
      "Supply and delivery of certified seeds, fertilizers, and pesticides for distribution to registered farmers under the county agricultural subsidy programme.",
    description_sw:
      "Ugavi na uwasilishaji wa mbegu zilizoidhinishwa, mbolea, na viuatilifu kwa usambazaji kwa wakulima waliosajiliwa.",
    department: "Agriculture, Livestock, Fisheries, Blue Economy & Agribusiness",
    closing_date: "2025-09-30T17:00:00Z",
    document_path: "/documents/tenders/BCG-TNR-OT-012.pdf",
    document_size_kb: 950,
    is_active: false,
  },
  {
    id: 6,
    tender_number: "BCG/TNR/OT/015/2024-2025",
    title_en: "Drilling and Equipping of Boreholes — Phase III",
    title_sw: "Uchimbaji na Uwekaji wa Visima — Awamu ya III",
    description_en:
      "Drilling, test pumping, and equipping of 15 boreholes with solar-powered pumping systems in water-scarce areas across the county.",
    description_sw:
      "Uchimbaji, upigaji wa majaribio, na uwekaji wa visima 15 na mifumo ya kusukuma maji inayotumia nishati ya jua.",
    department:
      "Water, Irrigation, Environment, Natural Resources, Climate Change & Energy",
    closing_date: "2025-08-15T17:00:00Z",
    document_path: "/documents/tenders/BCG-TNR-OT-015.pdf",
    document_size_kb: 2750,
    is_active: false,
  },
];

const MOCK_VACANCIES: Vacancy[] = [
  {
    id: 1,
    job_title_en: "County Director of Health Services",
    job_title_sw: "Mkurugenzi wa Kaunti wa Huduma za Afya",
    department: "Health Services & Sanitation",
    grade: "Job Group R",
    positions_available: 1,
    requirements_en:
      "Master's degree in Public Health, Health Systems Management, or related field. Minimum 10 years' experience in health service management. Must be registered with relevant professional body.",
    requirements_sw:
      "Shahada ya Uzamili katika Afya ya Umma, Usimamizi wa Mifumo ya Afya, au fani inayohusiana. Uzoefu wa miaka 10 katika usimamizi wa huduma za afya.",
    closing_date: "2026-05-25T17:00:00Z",
    document_path: "/documents/vacancies/director-health.pdf",
    document_size_kb: 450,
    is_active: true,
  },
  {
    id: 2,
    job_title_en: "Senior Engineer (Roads)",
    job_title_sw: "Mhandisi Mwandamizi (Barabara)",
    department: "Roads, Transport & Public Works",
    grade: "Job Group N",
    positions_available: 2,
    requirements_en:
      "Bachelor's degree in Civil Engineering. Registered with Engineers Board of Kenya. Minimum 6 years' experience in road construction and maintenance.",
    requirements_sw:
      "Shahada ya Uhandisi wa Kiraia. Amesajiliwa na Bodi ya Wahandisi ya Kenya. Uzoefu wa miaka 6 katika ujenzi na ukarabati wa barabara.",
    closing_date: "2026-05-20T17:00:00Z",
    document_path: "/documents/vacancies/senior-engineer-roads.pdf",
    document_size_kb: 380,
    is_active: true,
  },
  {
    id: 3,
    job_title_en: "Agricultural Extension Officer",
    job_title_sw: "Afisa wa Ugani wa Kilimo",
    department:
      "Agriculture, Livestock, Fisheries, Blue Economy & Agribusiness",
    grade: "Job Group J/K",
    positions_available: 5,
    requirements_en:
      "Diploma in Agriculture, Horticulture, or related field from a recognized institution. Experience in farmer training and extension services preferred.",
    requirements_sw:
      "Diploma ya Kilimo, Bustani, au fani inayohusiana kutoka taasisi inayotambuliwa. Uzoefu katika mafunzo ya wakulima unapendekezwa.",
    closing_date: "2026-05-15T17:00:00Z",
    document_path: "/documents/vacancies/agric-extension-officer.pdf",
    document_size_kb: 320,
    is_active: true,
  },
  {
    id: 4,
    job_title_en: "ICT Officer",
    job_title_sw: "Afisa wa TEHAMA",
    department: "Strategic Partnerships, ICT & Digital Economy",
    grade: "Job Group K/L",
    positions_available: 3,
    requirements_en:
      "Bachelor's degree in Computer Science, ICT, or related field. Experience in network administration, systems support, and database management.",
    requirements_sw:
      "Shahada ya Sayansi ya Kompyuta, TEHAMA, au fani inayohusiana. Uzoefu katika usimamizi wa mtandao na mifumo.",
    closing_date: "2026-05-10T17:00:00Z",
    document_path: "/documents/vacancies/ict-officer.pdf",
    document_size_kb: 290,
    is_active: true,
  },
  {
    id: 5,
    job_title_en: "Revenue Clerk",
    job_title_sw: "Karani wa Mapato",
    department: "County Treasury & Economic Planning",
    grade: "Job Group G/H",
    positions_available: 8,
    requirements_en:
      "Diploma in Business Administration, Accounting, or related field. CPA Part II or equivalent qualification. Experience in revenue collection preferred.",
    requirements_sw:
      "Diploma ya Usimamizi wa Biashara, Uhasibu, au fani inayohusiana. CPA Sehemu ya II au sifa sawa.",
    closing_date: "2025-10-30T17:00:00Z",
    document_path: "/documents/vacancies/revenue-clerk.pdf",
    document_size_kb: 260,
    is_active: false,
  },
];

const MOCK_DOCUMENTS: Document[] = [
  {
    id: 1,
    title_en: "County Budget Estimates FY 2025/2026",
    title_sw: "Makadirio ya Bajeti ya Kaunti MF 2025/2026",
    category: "budget",
    year: 2025,
    document_path: "/documents/budgets/budget-estimates-2025-2026.pdf",
    document_size_kb: 4500,
  },
  {
    id: 2,
    title_en: "Annual Development Plan 2025/2026",
    title_sw: "Mpango wa Maendeleo wa Kila Mwaka 2025/2026",
    category: "adp",
    year: 2025,
    document_path: "/documents/adp/adp-2025-2026.pdf",
    document_size_kb: 6200,
  },
  {
    id: 3,
    title_en:
      "County Integrated Development Plan (CIDP) 2023-2027",
    title_sw:
      "Mpango Jumuishi wa Maendeleo ya Kaunti (CIDP) 2023-2027",
    category: "cidp",
    year: 2023,
    document_path: "/documents/cidp/cidp-2023-2027.pdf",
    document_size_kb: 12800,
  },
  {
    id: 4,
    title_en: "Supplementary Budget FY 2024/2025",
    title_sw: "Bajeti ya Nyongeza MF 2024/2025",
    category: "budget",
    year: 2024,
    document_path: "/documents/budgets/supplementary-budget-2024-2025.pdf",
    document_size_kb: 3200,
  },
  {
    id: 5,
    title_en: "Annual Development Plan 2024/2025",
    title_sw: "Mpango wa Maendeleo wa Kila Mwaka 2024/2025",
    category: "adp",
    year: 2024,
    document_path: "/documents/adp/adp-2024-2025.pdf",
    document_size_kb: 5800,
  },
  {
    id: 6,
    title_en: "County Budget Review and Outlook Paper (CBROP) 2024",
    title_sw:
      "Karatasi ya Mapitio na Mtazamo wa Bajeti ya Kaunti (CBROP) 2024",
    category: "report",
    year: 2024,
    document_path: "/documents/reports/cbrop-2024.pdf",
    document_size_kb: 2900,
  },
  {
    id: 7,
    title_en: "County Fiscal Strategy Paper (CFSP) 2025",
    title_sw: "Karatasi ya Mkakati wa Fedha ya Kaunti (CFSP) 2025",
    category: "policy",
    year: 2025,
    document_path: "/documents/policies/cfsp-2025.pdf",
    document_size_kb: 3100,
  },
  {
    id: 8,
    title_en: "Programme Based Budget FY 2025/2026",
    title_sw: "Bajeti Inayotegemea Programu MF 2025/2026",
    category: "budget",
    year: 2025,
    document_path: "/documents/budgets/programme-budget-2025-2026.pdf",
    document_size_kb: 5400,
  },
  {
    id: 9,
    title_en: "County Budget Estimates FY 2024/2025",
    title_sw: "Makadirio ya Bajeti ya Kaunti MF 2024/2025",
    category: "budget",
    year: 2024,
    document_path: "/documents/budgets/budget-estimates-2024-2025.pdf",
    document_size_kb: 4100,
  },
  {
    id: 10,
    title_en: "Annual Development Plan 2023/2024",
    title_sw: "Mpango wa Maendeleo wa Kila Mwaka 2023/2024",
    category: "adp",
    year: 2023,
    document_path: "/documents/adp/adp-2023-2024.pdf",
    document_size_kb: 5500,
  },
  {
    id: 11,
    title_en: "County Public Service Human Resource Policy 2024",
    title_sw:
      "Sera ya Rasilimali Watu ya Huduma za Umma za Kaunti 2024",
    category: "policy",
    year: 2024,
    document_path: "/documents/policies/hr-policy-2024.pdf",
    document_size_kb: 1800,
  },
  {
    id: 12,
    title_en: "County Annual Report FY 2023/2024",
    title_sw: "Ripoti ya Mwaka ya Kaunti MF 2023/2024",
    category: "report",
    year: 2024,
    document_path: "/documents/reports/annual-report-2023-2024.pdf",
    document_size_kb: 7600,
  },
];

/* ===== API Fetch Functions ===== */
async function fetchApi<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  try {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...options?.headers,
      },
    });

    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }

    return res.json();
  } catch {
    // Fall back to mock data when API is unavailable
    return getMockData<T>(endpoint);
  }
}

function getMockData<T>(endpoint: string): T {
  if (endpoint.startsWith("/news/")) {
    const slug = endpoint.replace("/news/", "");
    const article = MOCK_NEWS.find((n) => n.slug === slug);
    return (article || MOCK_NEWS[0]) as T;
  }
  if (endpoint.startsWith("/news")) return { data: MOCK_NEWS, current_page: 1, last_page: 1, per_page: 15, total: MOCK_NEWS.length } as T;
  if (endpoint.startsWith("/tenders")) return { data: MOCK_TENDERS, current_page: 1, last_page: 1, per_page: 15, total: MOCK_TENDERS.length } as T;
  if (endpoint.startsWith("/vacancies")) return { data: MOCK_VACANCIES, current_page: 1, last_page: 1, per_page: 15, total: MOCK_VACANCIES.length } as T;
  if (endpoint.startsWith("/documents")) return { data: MOCK_DOCUMENTS, current_page: 1, last_page: 1, per_page: 15, total: MOCK_DOCUMENTS.length } as T;
  if (endpoint.startsWith("/search")) {
    return {
      news: MOCK_NEWS.slice(0, 3),
      tenders: MOCK_TENDERS.slice(0, 2),
      vacancies: MOCK_VACANCIES.slice(0, 2),
      documents: MOCK_DOCUMENTS.slice(0, 3),
    } as T;
  }
  return {} as T;
}

/* ===== Public API Functions ===== */
export async function getNews(
  page: number = 1,
  category?: string
): Promise<PaginatedResponse<NewsArticle>> {
  const params = new URLSearchParams({ page: page.toString() });
  if (category && category !== "all") params.set("category", category);
  return fetchApi<PaginatedResponse<NewsArticle>>(`/news?${params}`);
}

export async function getNewsArticle(
  slug: string
): Promise<NewsArticle> {
  return fetchApi<NewsArticle>(`/news/${slug}`);
}

export async function getTenders(
  status?: string,
  department?: string
): Promise<PaginatedResponse<Tender>> {
  const params = new URLSearchParams();
  if (status && status !== "all") params.set("status", status);
  if (department && department !== "all") params.set("department", department);
  return fetchApi<PaginatedResponse<Tender>>(`/tenders?${params}`);
}

export async function getVacancies(
  department?: string
): Promise<PaginatedResponse<Vacancy>> {
  const params = new URLSearchParams();
  if (department && department !== "all") params.set("department", department);
  return fetchApi<PaginatedResponse<Vacancy>>(`/vacancies?${params}`);
}

export async function getDocuments(
  category?: string,
  year?: string
): Promise<PaginatedResponse<Document>> {
  const params = new URLSearchParams();
  if (category && category !== "all") params.set("category", category);
  if (year && year !== "all") params.set("year", year);
  return fetchApi<PaginatedResponse<Document>>(`/documents?${params}`);
}

export async function searchSite(
  query: string
): Promise<SearchResults> {
  return fetchApi<SearchResults>(`/search?q=${encodeURIComponent(query)}`);
}

export async function submitContact(
  data: ContactFormData
): Promise<{ success: boolean; message: string }> {
  return fetchApi<{ success: boolean; message: string }>("/contact", {
    method: "POST",
    body: JSON.stringify(data),
    cache: "no-store",
  });
}

export async function subscribeNewsletter(
  email: string
): Promise<{ success: boolean; message: string }> {
  return fetchApi<{ success: boolean; message: string }>(
    "/newsletter/subscribe",
    {
      method: "POST",
      body: JSON.stringify({ email }),
      cache: "no-store",
    }
  );
}

/* ===== Direct Mock Access (for server components) ===== */
export function getMockNews(): NewsArticle[] {
  return MOCK_NEWS;
}

export function getMockTenders(): Tender[] {
  return MOCK_TENDERS;
}

export function getMockVacancies(): Vacancy[] {
  return MOCK_VACANCIES;
}

export function getMockDocuments(): Document[] {
  return MOCK_DOCUMENTS;
}
