import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import {
  FileText,
  Briefcase,
  Download,
  BarChart2,
  Building2,
  Phone,
  MapPin,
  Globe,
  Mountain,
  Landmark,
  ArrowRight,
} from "lucide-react";
import { getMockNews, getMockTenders } from "@/lib/api";
import { formatDate, isClosingSoon, getCategoryColor } from "@/lib/utils";
import NewsletterSignup from "@/components/sections/NewsletterSignup";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection locale={locale} />
      <ServiceTiles locale={locale} />
      <GovernorMessage locale={locale} />
      <TendersStrip locale={locale} />
      <NewsGrid locale={locale} />
      <CountyFacts locale={locale} />
      <NewsletterSignup />
    </>
  );
}

/* ===== Section 1: Hero ===== */
function HeroSection({ locale }: { locale: string }) {
  const t = useTranslations();

  const stats = [
    { value: "7", label: t("hero.subCounties") },
    { value: "81", label: t("hero.healthFacilities") },
    { value: "1,438", label: t("hero.schools") },
    { value: "894K+", label: t("hero.population") },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/busia-scenery.jpg"
          alt="Busia County Landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-green/95 via-primary-green/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gov-black/20 z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 py-20 lg:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <div className="inline-block px-3 py-1 bg-white/10 border border-white/20 rounded-full mb-6">
              <p className="text-white text-[10px] font-body font-bold uppercase tracking-[0.3em]">
                {t("hero.label")}
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[68px] font-display font-black text-white leading-[1.1] mb-8 text-glow">
              {t("hero.title")}
            </h1>
            <p className="text-lg lg:text-xl text-white/90 font-body leading-relaxed mb-10 max-w-lg">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/departments" className="btn-gov-primary">
                {t("hero.exploreServices")}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30 text-white font-body font-bold text-sm rounded-gov hover:bg-white hover:text-primary-green transition-all duration-300 backdrop-blur-sm"
              >
                {t("hero.contactUs")}
              </Link>
            </div>
          </div>

          {/* Right Stats Grid */}
          <div className="hidden lg:grid grid-cols-2 gap-4 animate-fade-in">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`glass-card rounded-gov p-8 text-center gov-shadow transform transition-transform duration-500 hover:-translate-y-2 ${
                  idx % 2 === 0 ? "mt-8" : ""
                }`}
              >
                <div className="text-4xl font-display font-black text-primary-green mb-2">
                  {stat.value}
                </div>
                <div className="text-[12px] font-body font-bold text-gov-grey-mid uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Bottom Decorative Wave/Pattern or Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  );
}

/* ===== Section 2: Service Tiles ===== */
function ServiceTiles({ locale }: { locale: string }) {
  const t = useTranslations("services");

  const tiles = [
    { icon: FileText, label: t("tenders"), href: "/tenders" },
    { icon: Briefcase, label: t("vacancies"), href: "/vacancies" },
    { icon: Download, label: t("documents"), href: "/resources/documents" },
    { icon: BarChart2, label: t("budget"), href: "/resources/budgets" },
    { icon: Building2, label: t("departments"), href: "/departments" },
    { icon: Phone, label: t("contact"), href: "/contact" },
  ];

  return (
    <section className="py-24 bg-white topo-pattern relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary-blue text-xs font-body font-bold tracking-[0.2em] uppercase mb-3 text-glow">
            Service Portal
          </p>
          <h2 className="text-3xl lg:text-4xl font-display font-black text-gov-black">
            {t("title")}
          </h2>
          <div className="w-20 h-1.5 bg-primary-green mx-auto mt-6 rounded-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tiles.map((tile) => {
            const Icon = tile.icon;
            return (
              <Link
                key={tile.label}
                href={tile.href}
                className="group relative block bg-white border border-gov-grey-border rounded-gov p-10 text-center transition-all duration-500 hover:shadow-2xl hover:border-primary-green/30 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gov-grey-border group-hover:bg-primary-green transition-colors" />
                <div className="w-16 h-16 bg-gov-grey-light rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-green/10 transition-colors">
                  <Icon className="w-8 h-8 text-primary-green group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg font-display font-bold text-gov-black group-hover:text-primary-green transition-colors">
                  {tile.label}
                </h3>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ===== Section 3: Governor's Message ===== */
function GovernorMessage({ locale }: { locale: string }) {
  const t = useTranslations("governor");

  return (
    <section className="py-24 bg-gov-grey-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          {/* Official Portrait */}
          <div className="lg:col-span-2 relative group">
            <div className="relative aspect-[4/5] rounded-gov overflow-hidden gov-shadow">
              <Image
                src="/images/leadership/governor-otuoma.jpg"
                alt="H.E. Dr. Paul Otuoma"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-green/80 via-transparent to-transparent opacity-60" />
            </div>
            {/* Name Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-gov gov-shadow hidden md:block border-l-4 border-primary-green">
              <p className="text-xl font-display font-black text-gov-black">{t("name")}</p>
              <p className="text-xs font-body font-bold text-primary-green tracking-widest uppercase">{t("role")}</p>
            </div>
          </div>

          {/* Message Content */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <p className="text-primary-blue text-xs font-body font-bold tracking-[0.2em] uppercase mb-4">
                {t("fromDesk")}
              </p>
              <h2 className="text-3xl lg:text-4xl font-display font-black text-gov-black leading-tight">
                {t("title")}
              </h2>
            </div>
            <div className="relative">
              <span className="absolute -top-10 -left-6 text-9xl text-primary-green/10 font-display">"</span>
              <p className="text-gov-grey-mid font-body leading-relaxed text-lg italic mb-10 relative z-10">
                {t("message")}
              </p>
            </div>
            <Link href="/about/governor" className="btn-gov-outline">
              {t("readFull")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== Section 4: Tenders Strip ===== */
function TendersStrip({ locale }: { locale: string }) {
  const t = useTranslations("tendersStrip");
  const tenders = getMockTenders().filter((t) => t.is_active).slice(0, 3);

  return (
    <section className="py-12 bg-primary-blue">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-display font-bold text-white mb-6">
          {t("title")}
        </h2>
        <div className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 snap-x">
          {tenders.map((tender) => (
            <div
              key={tender.id}
              className="min-w-[300px] lg:min-w-0 lg:flex-1 bg-white/5 border border-white/10 rounded-gov p-5 snap-start"
            >
              <p className="text-accent-gold font-mono text-xs mb-2">
                {tender.tender_number}
              </p>
              <p className="text-white font-body text-sm leading-relaxed mb-3">
                {locale === "sw" ? tender.title_sw : tender.title_en}
              </p>
              <p className="text-white/50 text-xs font-body">
                {t("closingDate")}:{" "}
                <span className={isClosingSoon(tender.closing_date) ? "text-gov-danger" : "text-white/70"}>
                  {formatDate(tender.closing_date, locale)}
                </span>
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/tenders"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-white text-white text-sm font-body font-medium rounded-gov hover:bg-white/10 transition-colors"
          >
            {t("viewAll")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ===== Section 5: News Grid ===== */
function NewsGrid({ locale }: { locale: string }) {
  const t = useTranslations("news");
  const news = getMockNews().slice(0, 3);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-green/5 rounded-full -mr-32 -mt-32 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-blue/5 rounded-full -ml-32 -mb-32 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl text-left">
            <p className="text-primary-blue text-xs font-body font-bold tracking-[0.2em] uppercase mb-3">
              Press & Media
            </p>
            <h2 className="text-3xl lg:text-4xl font-display font-black text-gov-black">
              {t("title")}
            </h2>
          </div>
          <Link
            href="/news"
            className="group inline-flex items-center gap-2 text-primary-green font-body font-bold text-sm"
          >
            {t("viewAll")}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article) => (
            <article
              key={article.id}
              className="group flex flex-col bg-white border border-gov-grey-border rounded-gov overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-primary-green/20"
            >
              {/* Image with overlay badge */}
              <div className="relative h-56 w-full overflow-hidden bg-gov-grey-light">
                <Image
                  src={`/images/news/${article.category}.jpg`}
                  alt={article.title_en}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gov-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-gov text-[10px] font-body font-bold text-white uppercase tracking-wider ${getCategoryColor(article.category)}`}>
                  {article.category}
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <p className="text-[11px] font-body font-bold text-gov-grey-mid uppercase tracking-widest mb-3">
                  {formatDate(article.published_at, locale)}
                </p>
                <h3 className="text-xl font-display font-bold text-gov-black mb-4 leading-snug group-hover:text-primary-green transition-colors">
                  {locale === "sw" ? article.title_sw : article.title_en}
                </h3>
                <p className="text-sm text-gov-grey-mid font-body leading-relaxed mb-6 line-clamp-2">
                  {locale === "sw" ? article.excerpt_sw : article.excerpt_en}
                </p>
                <div className="mt-auto">
                  <Link
                    href={`/news/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-body font-bold text-primary-green"
                  >
                    {t("readMore")}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== Section 6: County Facts ===== */
function CountyFacts({ locale }: { locale: string }) {
  const t = useTranslations("facts");

  const facts = [
    { icon: MapPin, label: t("location"), value: t("locationValue") },
    { icon: Globe, label: t("area"), value: t("areaValue") },
    { icon: Mountain, label: t("subCounties"), value: t("subCountiesValue") },
    { icon: Landmark, label: t("headquarters"), value: t("headquartersValue") },
  ];

  return (
    <section className="py-24 bg-primary-blue relative overflow-hidden">
      <div className="absolute inset-0 hero-pattern opacity-10" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-black text-white">
            {t("title")}
          </h2>
          <div className="w-20 h-1.5 bg-primary-green mx-auto mt-6 rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {facts.map((fact) => {
            const Icon = fact.icon;
            return (
              <div
                key={fact.label}
                className="bg-white/5 border border-white/10 rounded-gov p-10 text-center backdrop-blur-md transition-all duration-300 hover:bg-white/10"
              >
                <div className="w-12 h-12 bg-primary-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-6 h-6 text-primary-white" />
                </div>
                <h3 className="text-xs font-body font-bold text-white/60 uppercase tracking-[0.2em] mb-3">
                  {fact.label}
                </h3>
                <p className="text-lg font-display font-bold text-white">
                  {fact.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
