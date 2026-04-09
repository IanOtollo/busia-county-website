import {
  Wheat,
  HeartPulse,
  GraduationCap,
  Truck,
  MapPin,
  Droplets,
  Store,
  Landmark,
  Users,
  Wifi,
  Shield,
  Building2,
  type LucideIcon,
} from "lucide-react";

export interface Department {
  id: number;
  slug: string;
  nameKey: string;
  name: string;
  nameSw: string;
  icon: LucideIcon;
  mandate: string;
  mandateSw: string;
  vision: string;
  mission: string;
  functions: string[];
  achievements: string[];
  email: string;
  isExternal?: boolean;
  externalUrl?: string;
}

export const DEPARTMENTS: Department[] = [
  {
    id: 1,
    slug: "agriculture-livestock-fisheries",
    nameKey: "agriculture",
    name: "Agriculture, Livestock, Fisheries, Blue Economy & Agribusiness",
    nameSw: "Kilimo, Mifugo, Uvuvi, Uchumi wa Bahari na Biashara ya Kilimo",
    icon: Wheat,
    mandate:
      "Responsible for agricultural development, livestock management, fisheries, blue economy initiatives, and agribusiness promotion in Busia County.",
    mandateSw:
      "Inawajibika kwa maendeleo ya kilimo, usimamizi wa mifugo, uvuvi, mipango ya uchumi wa bahari, na kukuza biashara ya kilimo katika Kaunti ya Busia.",
    vision:
      "A food-secure county with a vibrant agricultural sector driving economic growth.",
    mission:
      "To promote sustainable agricultural production and value addition for improved livelihoods.",
    functions: [
      "Crop and livestock development programmes",
      "Fisheries management along Lake Victoria shores",
      "Agricultural extension services to farmers",
      "Implementation of the ASDSP (Agricultural Sector Development Support Programme)",
      "Promotion of sugarcane economy and value addition",
      "Veterinary services and disease control",
    ],
    achievements: [
      "Trained over 2,000 fishermen on sustainable fishing practices along Lake Victoria",
      "Distributed improved seeds and fertilizer to 15,000 smallholder farmers through subsidy programmes",
      "Established 3 new fish landing sites with modern cold storage facilities",
    ],
    email: "agriculture@busiacounty.go.ke",
  },
  {
    id: 2,
    slug: "health-services-sanitation",
    nameKey: "health",
    name: "Health Services & Sanitation",
    nameSw: "Huduma za Afya na Usafi",
    icon: HeartPulse,
    mandate:
      "Oversees county health facilities, public health programmes, disease control, and sanitation services across all 7 sub-counties.",
    mandateSw:
      "Inasimamia vituo vya afya vya kaunti, programu za afya ya umma, udhibiti wa magonjwa, na huduma za usafi katika kaunti ndogo zote 7.",
    vision:
      "A healthy and productive population with accessible quality healthcare for all.",
    mission:
      "To provide affordable, equitable, and quality health services to all residents of Busia County.",
    functions: [
      "Management of 81 health facilities across the county",
      "Maternal and child health programmes",
      "HIV/AIDS, TB, and malaria prevention and treatment",
      "Community health volunteer programme coordination",
      "Environmental health and sanitation enforcement",
      "Health worker recruitment and capacity building",
    ],
    achievements: [
      "Upgraded Busia County Referral Hospital with modern diagnostic equipment",
      "Achieved 78% immunization coverage for children under 5 years",
      "Recruited 200 additional healthcare workers to improve staff-to-patient ratios",
    ],
    email: "health@busiacounty.go.ke",
  },
  {
    id: 3,
    slug: "education-youth-gender-sports",
    nameKey: "education",
    name: "Education, Youth, Gender, Sports, Culture & Social Services",
    nameSw: "Elimu, Vijana, Jinsia, Michezo, Utamaduni na Huduma za Kijamii",
    icon: GraduationCap,
    mandate:
      "Manages early childhood development, vocational training, youth empowerment, gender mainstreaming, sports development, and social protection programmes.",
    mandateSw:
      "Inasimamia maendeleo ya utotoni, mafunzo ya ufundi, uwezeshaji wa vijana, usawazishaji wa kijinsia, maendeleo ya michezo, na programu za ulinzi wa kijamii.",
    vision:
      "An educated, empowered, and inclusive society that celebrates its cultural diversity.",
    mission:
      "To provide quality education, youth empowerment, and social services for sustainable human development.",
    functions: [
      "Early Childhood Development Education (ECDE) programmes",
      "Youth polytechnic and vocational training management",
      "Sports facility development and talent nurturing",
      "Gender mainstreaming and women empowerment initiatives",
      "Cultural heritage preservation and promotion",
      "Social protection and disability mainstreaming",
    ],
    achievements: [
      "Constructed and equipped 45 new ECDE classrooms across the county",
      "Enrolled over 3,000 youth in county vocational training centres",
      "Hosted the annual Busia County Cultural Festival promoting inter-community harmony",
    ],
    email: "education@busiacounty.go.ke",
  },
  {
    id: 4,
    slug: "roads-transport-public-works",
    nameKey: "roads",
    name: "Roads, Transport & Public Works",
    nameSw: "Barabara, Usafiri na Ujenzi wa Umma",
    icon: Truck,
    mandate:
      "Responsible for county road construction, maintenance, transport regulation, and public infrastructure development.",
    mandateSw:
      "Inawajibika kwa ujenzi wa barabara za kaunti, ukarabati, udhibiti wa usafiri, na maendeleo ya miundombinu ya umma.",
    vision:
      "A well-connected county with quality road infrastructure enabling economic growth.",
    mission:
      "To develop and maintain a reliable county road network and public infrastructure.",
    functions: [
      "County road construction and maintenance",
      "Bridges and drainage systems development",
      "Public buildings construction and maintenance",
      "Transport licensing and regulation",
      "Mechanical services and fleet management",
      "Urban infrastructure development",
    ],
    achievements: [
      "Maintained over 850km of county roads through routine and periodic maintenance",
      "Completed 10.5km of bitumen road upgrades connecting market centres",
      "Constructed 12 new bridges and culverts improving access in flood-prone areas",
    ],
    email: "roads@busiacounty.go.ke",
  },
  {
    id: 5,
    slug: "lands-housing-urban-development",
    nameKey: "lands",
    name: "Lands, Housing & Urban Development",
    nameSw: "Ardhi, Nyumba na Maendeleo ya Miji",
    icon: MapPin,
    mandate:
      "Oversees land administration, housing programmes, urban planning, and spatial development in the county.",
    mandateSw:
      "Inasimamia utawala wa ardhi, programu za nyumba, mipango miji, na maendeleo ya anga katika kaunti.",
    vision:
      "Orderly and sustainable land use with adequate housing for all residents.",
    mission:
      "To ensure efficient land administration, affordable housing, and planned urban development.",
    functions: [
      "Land survey, mapping, and adjudication",
      "Urban planning and development control",
      "Housing development and estate management",
      "Preparation of Valuation Rolls for rating",
      "Spatial planning and GIS mapping",
      "Public land management and allocation",
    ],
    achievements: [
      "Secured World Bank KUSP (Kenya Urban Support Programme) funding for Busia Municipality",
      "Completed the County Valuation Roll for improved revenue collection",
      "Developed the Busia County Spatial Plan guiding land use zoning",
    ],
    email: "lands@busiacounty.go.ke",
  },
  {
    id: 6,
    slug: "water-irrigation-environment",
    nameKey: "water",
    name: "Water, Irrigation, Environment, Natural Resources, Climate Change & Energy",
    nameSw: "Maji, Umwagiliaji, Mazingira, Maliasili, Mabadiliko ya Tabianchi na Nishati",
    icon: Droplets,
    mandate:
      "Manages water supply, irrigation infrastructure, environmental conservation, natural resource management, and renewable energy programmes.",
    mandateSw:
      "Inasimamia usambazaji wa maji, miundombinu ya umwagiliaji, uhifadhi wa mazingira, usimamizi wa maliasili, na programu za nishati jadidifu.",
    vision:
      "A county with universal access to clean water and a sustainably managed environment.",
    mission:
      "To provide clean and adequate water, promote environmental conservation, and advance renewable energy access.",
    functions: [
      "Water supply infrastructure development and maintenance",
      "Irrigation scheme development for agricultural productivity",
      "Environmental conservation and tree planting programmes",
      "Natural resource management and protection",
      "Climate change adaptation and mitigation",
      "Renewable energy and rural electrification initiatives",
    ],
    achievements: [
      "Drilled and equipped 35 new boreholes providing clean water to 50,000 residents",
      "Planted over 100,000 trees through the county reforestation programme",
      "Completed 3 solar-powered water systems serving rural communities",
    ],
    email: "water@busiacounty.go.ke",
  },
  {
    id: 7,
    slug: "trade-investment-industrialization",
    nameKey: "trade",
    name: "Trade, Investment, Industrialization, Cooperatives & SMEs",
    nameSw: "Biashara, Uwekezaji, Viwanda, Vyama vya Ushirika na SMEs",
    icon: Store,
    mandate:
      "Promotes trade development, investment attraction, industrial growth, cooperative societies, and small business support.",
    mandateSw:
      "Inakuza maendeleo ya biashara, kuvutia uwekezaji, ukuaji wa viwanda, vyama vya ushirika, na msaada wa biashara ndogo.",
    vision:
      "A thriving trade and industrial hub at the Kenya-Uganda border corridor.",
    mission:
      "To promote sustainable trade, attract investment, and support local enterprises for economic growth.",
    functions: [
      "Trade licensing and market management",
      "Investment promotion and investor facilitation",
      "Cooperative development and oversight",
      "SME support and business incubation",
      "Cross-border trade facilitation",
      "Consumer protection and fair trade practices",
    ],
    achievements: [
      "Constructed 4 modern market facilities improving trading conditions for over 5,000 traders",
      "Facilitated registration of 120 new cooperative societies",
      "Hosted the annual Busia Cross-Border Trade Fair attracting investors from East Africa",
    ],
    email: "trade@busiacounty.go.ke",
  },
  {
    id: 8,
    slug: "county-treasury-economic-planning",
    nameKey: "treasury",
    name: "County Treasury & Economic Planning",
    nameSw: "Hazina ya Kaunti na Mipango ya Kiuchumi",
    icon: Landmark,
    mandate:
      "Manages county finances, budget preparation, revenue collection, economic planning, and development coordination.",
    mandateSw:
      "Inasimamia fedha za kaunti, uandaaji wa bajeti, ukusanyaji wa mapato, mipango ya kiuchumi, na uratibu wa maendeleo.",
    vision:
      "Prudent, transparent, and accountable management of county resources.",
    mission:
      "To mobilize, allocate, and manage county resources efficiently for sustainable development.",
    functions: [
      "Annual budget preparation and execution",
      "Revenue collection and enhancement",
      "Financial reporting and audit coordination",
      "County Integrated Development Plan (CIDP) coordination",
      "Annual Development Plan preparation",
      "Public participation in budget and planning processes",
    ],
    achievements: [
      "Achieved 95% budget absorption rate in the previous financial year",
      "Increased own-source revenue collection by 30% through automation",
      "Successfully implemented the IFMIS system for transparent financial management",
    ],
    email: "treasury@busiacounty.go.ke",
  },
  {
    id: 9,
    slug: "public-service-management-governance",
    nameKey: "publicService",
    name: "Public Service Management & Governance",
    nameSw: "Usimamizi wa Huduma za Umma na Utawala",
    icon: Users,
    mandate:
      "Oversees human resource management, public service delivery, governance structures, and inter-governmental relations.",
    mandateSw:
      "Inasimamia usimamizi wa rasilimali watu, utoaji wa huduma za umma, miundo ya utawala, na uhusiano wa kiserikali.",
    vision:
      "A professional, efficient, and responsive county public service.",
    mission:
      "To build a competent and motivated public service that delivers quality services to citizens.",
    functions: [
      "Human resource management and development",
      "Performance management and appraisal",
      "Public service reforms and innovation",
      "Records management and documentation",
      "Governance coordination and civic education",
      "Inter-governmental relations and devolution affairs",
    ],
    achievements: [
      "Implemented a digital human resource management information system",
      "Conducted service delivery satisfaction surveys across all sub-counties",
      "Established county public service training and development programmes",
    ],
    email: "publicservice@busiacounty.go.ke",
  },
  {
    id: 10,
    slug: "strategic-partnerships-ict",
    nameKey: "ict",
    name: "Strategic Partnerships, ICT & Digital Economy",
    nameSw: "Ushirikiano wa Kimkakati, TEHAMA na Uchumi wa Kidijitali",
    icon: Wifi,
    mandate:
      "Drives digital transformation, ICT infrastructure development, strategic partnerships, and innovation in county governance.",
    mandateSw:
      "Inasukuma mabadiliko ya kidijitali, maendeleo ya miundombinu ya TEHAMA, ushirikiano wa kimkakati, na uvumbuzi katika utawala wa kaunti.",
    vision:
      "A digitally empowered county leveraging technology for efficient governance and economic growth.",
    mission:
      "To deploy ICT solutions and forge strategic partnerships that accelerate county development.",
    functions: [
      "ICT infrastructure development and maintenance",
      "Digital government services and e-governance",
      "Strategic partnership development and management",
      "Innovation hubs and technology incubation",
      "Cyber security and data protection",
      "Digital literacy and capacity building",
    ],
    achievements: [
      "Deployed county-wide fibre optic connectivity to all sub-county offices",
      "Launched the county digital platform for citizen engagement and service delivery",
      "Established partnerships with 5 international development organizations",
    ],
    email: "ictstrategicpartnership@busiacounty.go.ke",
  },
  {
    id: 11,
    slug: "governorship",
    nameKey: "governorship",
    name: "Governorship",
    nameSw: "Ugavana",
    icon: Shield,
    mandate:
      "The office of the Governor provides overall county leadership, policy direction, and coordination of government programmes.",
    mandateSw:
      "Ofisi ya Gavana inatoa uongozi wa jumla wa kaunti, mwelekeo wa sera, na uratibu wa programu za serikali.",
    vision: "Transformative leadership driving Busia County to prosperity.",
    mission:
      "To provide visionary leadership and policy direction for equitable development of Busia County.",
    functions: [
      "Overall county government leadership and policy direction",
      "Coordination of county executive committee affairs",
      "Representation of the county at national and international forums",
      "Signing of county legislation and policy documents",
      "Appointment of county executive committee members",
      "Chairing of county executive committee meetings",
    ],
    achievements: [
      "Successfully implemented the four-pillar development agenda",
      "Strengthened inter-governmental relations with national government",
      "Enhanced transparency through regular public engagement forums",
    ],
    email: "governor@busiacounty.go.ke",
  },
  {
    id: 12,
    slug: "county-assembly",
    nameKey: "countyAssembly",
    name: "County Assembly",
    nameSw: "Bunge la Kaunti",
    icon: Building2,
    mandate:
      "The County Assembly of Busia is the legislative arm of the county government.",
    mandateSw:
      "Bunge la Kaunti ya Busia ni mkono wa kutunga sheria wa serikali ya kaunti.",
    vision: "",
    mission: "",
    functions: [],
    achievements: [],
    email: "",
    isExternal: true,
    externalUrl: "https://busiaassembly.go.ke",
  },
];

export const NAV_STRUCTURE = {
  about: [
    { href: "/about/history", labelKey: "history" },
    { href: "/about/governor", labelKey: "governor" },
    { href: "/about/deputy-governor", labelKey: "deputyGovernor" },
    { href: "/about/executives", labelKey: "executives" },
    { href: "/about/public-service-board", labelKey: "publicServiceBoard" },
  ],
  departments: DEPARTMENTS.map((d) => ({
    href: d.isExternal ? d.externalUrl! : `/departments/${d.slug}`,
    label: d.name,
    isExternal: d.isExternal,
  })),
  resources: [
    { href: "/tenders", labelKey: "tenders" },
    { href: "/vacancies", labelKey: "vacancies" },
    { href: "/resources/budgets", labelKey: "budgetDocuments" },
    { href: "/resources/documents", labelKey: "allDownloads" },
  ],
  media: [
    { href: "/news", labelKey: "newsEvents" },
    { href: "/gallery", labelKey: "gallery" },
  ],
};

export const SUB_COUNTIES = [
  {
    name: "Teso North",
    nameSw: "Teso Kaskazini",
    wards: "Malaba Central, Malaba North, Angurai South, Angurai North, Angurai East",
  },
  {
    name: "Teso South",
    nameSw: "Teso Kusini",
    wards: "Angorom, Chakol South, Chakol North, Amukura East, Amukura West, Amukura Central",
  },
  {
    name: "Nambale",
    nameSw: "Nambale",
    wards: "Nambale Township, Bukhayo North/Waltsi, Bukhayo East",
  },
  {
    name: "Butula",
    nameSw: "Butula",
    wards: "Marachi West, Kingandole, Elugulu, Marachi Central, Marachi East, Marachi North",
  },
  {
    name: "Matayos",
    nameSw: "Matayos",
    wards: "Busibwabo, Burumba, Mayenje, Matayos South, Bukhayo West",
  },
  {
    name: "Samia",
    nameSw: "Samia",
    wards: "Nangina, Ageng'a Nanguba, Bwiri",
  },
  {
    name: "Bunyala",
    nameSw: "Bunyala",
    wards: "Bunyala Central, Bunyala North, Bunyala South, Bunyala West",
  },
];

export const NEWS_CATEGORIES = [
  "general",
  "agriculture",
  "health",
  "infrastructure",
  "governance",
  "education",
] as const;

export const DOCUMENT_CATEGORIES = [
  "budget",
  "adp",
  "cidp",
  "report",
  "policy",
  "other",
] as const;

export const CONTACT_INFO = {
  phone: "+254 700 106 517",
  email: "info@busiacounty.go.ke",
  ictEmail: "ictstrategicpartnership@busiacounty.go.ke",
  governorEmail: "governor@busiacounty.go.ke",
  address: "County Government of Busia Headquarters",
  street: "Off Busia-Kisumu Road",
  town: "Busia Town, 50400",
  country: "Kenya",
  poBox: "P.O. Box Private Bag, 50400, Busia, Kenya",
  weekdays: "Monday – Friday: 8:00 AM – 5:00 PM",
  weekends: "Saturday – Sunday: Closed",
  holidays: "Public Holidays: Closed",
  mapLat: 0.4606,
  mapLng: 34.1114,
  social: {
    facebook: "https://www.facebook.com/BusiaCountyGovernment",
    twitter: "https://twitter.com/BusiaCountyGovt",
    youtube: "https://www.youtube.com/@BusiaCountyGovernment",
  },
};

export const EXTERNAL_LINKS = [
  {
    name: "E-Citizen",
    url: "https://www.ecitizen.go.ke",
  },
  {
    name: "ICT Authority",
    url: "https://www.icta.go.ke",
  },
  {
    name: "Council of Governors",
    url: "https://www.cog.go.ke",
  },
  {
    name: "Bajeti Yetu",
    url: "https://www.bajetiyetu.go.ke",
  },
  {
    name: "Child Protection Fund",
    url: "https://www.socialprotection.go.ke",
  },
];

export type NewsCategory = (typeof NEWS_CATEGORIES)[number];
export type DocumentCategory = (typeof DOCUMENT_CATEGORIES)[number];
