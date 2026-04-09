"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import PageHero from "@/components/ui/PageHero";
import EmptyState from "@/components/ui/EmptyState";
import Badge from "@/components/ui/Badge";
import { getMockNews, getMockTenders, getMockVacancies, getMockDocuments } from "@/lib/api";
import { formatDate, formatFileSize, isClosingSoon, isPastDeadline, sanitizeSearchQuery } from "@/lib/utils";
import { Search, ArrowRight, FileText, Briefcase, Newspaper, Download } from "lucide-react";

export default function SearchPage() {
  const t = useTranslations("search");
  const searchParams = useSearchParams();
  const query = sanitizeSearchQuery(searchParams.get("q") || "");
  const [searchInput, setSearchInput] = useState(query);

  const q = query.toLowerCase();

  const newsResults = q
    ? getMockNews().filter(
        (n) =>
          n.title_en.toLowerCase().includes(q) ||
          n.excerpt_en.toLowerCase().includes(q)
      )
    : [];

  const tenderResults = q
    ? getMockTenders().filter(
        (t) =>
          t.title_en.toLowerCase().includes(q) ||
          t.tender_number.toLowerCase().includes(q)
      )
    : [];

  const vacancyResults = q
    ? getMockVacancies().filter(
        (v) =>
          v.job_title_en.toLowerCase().includes(q) ||
          v.department.toLowerCase().includes(q)
      )
    : [];

  const documentResults = q
    ? getMockDocuments().filter((d) =>
        d.title_en.toLowerCase().includes(q)
      )
    : [];

  const totalResults =
    newsResults.length +
    tenderResults.length +
    vacancyResults.length +
    documentResults.length;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      window.location.href = `/en/search?q=${encodeURIComponent(searchInput.trim())}`;
    }
  };

  return (
    <>
      <PageHero
        title={t("pageTitle")}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: t("pageTitle") },
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="flex gap-3 mb-8"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gov-grey-mid" />
            <input
              type="search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder={t("placeholder")}
              className="w-full h-12 pl-11 pr-4 border border-gov-grey-border rounded-gov text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary-green"
            />
          </div>
          <button
            type="submit"
            className="px-6 h-12 bg-primary-green text-white font-body font-semibold text-sm rounded-gov hover:bg-primary-blue transition-colors"
          >
            {t("searchButton")}
          </button>
        </form>

        {query && (
          <p className="text-sm font-body text-gov-grey-mid mb-6">
            {t("resultsFor")} &ldquo;<span className="font-semibold text-gov-black">{query}</span>&rdquo;
            {" "}&mdash; {totalResults} result{totalResults !== 1 ? "s" : ""}
          </p>
        )}

        {query && totalResults === 0 && (
          <EmptyState
            message={t("noResults")}
            icon={<Search className="w-12 h-12" />}
          />
        )}

        {/* News Results */}
        {newsResults.length > 0 && (
          <ResultSection
            title={t("newsResults")}
            icon={<Newspaper className="w-5 h-5" />}
          >
            {newsResults.map((article) => (
              <Link
                key={article.id}
                href={`/news/${article.slug}`}
                className="block p-4 border border-gov-grey-border rounded-gov hover:bg-gov-grey-light transition-colors"
              >
                <p className="text-sm font-body font-semibold text-gov-black mb-1">
                  {article.title_en}
                </p>
                <p className="text-xs text-gov-grey-mid font-body line-clamp-1">
                  {article.excerpt_en}
                </p>
                <p className="text-xs text-gov-grey-mid font-body mt-1">
                  {formatDate(article.published_at)}
                </p>
              </Link>
            ))}
          </ResultSection>
        )}

        {/* Tender Results */}
        {tenderResults.length > 0 && (
          <ResultSection
            title={t("tenderResults")}
            icon={<FileText className="w-5 h-5" />}
          >
            {tenderResults.map((tender) => (
              <Link
                key={tender.id}
                href="/tenders"
                className="flex items-center justify-between p-4 border border-gov-grey-border rounded-gov hover:bg-gov-grey-light transition-colors"
              >
                <div>
                  <p className="text-xs text-accent-gold font-mono mb-1">
                    {tender.tender_number}
                  </p>
                  <p className="text-sm font-body font-semibold text-gov-black">
                    {tender.title_en}
                  </p>
                </div>
                <Badge
                  variant={
                    isPastDeadline(tender.closing_date) ? "grey" : "green"
                  }
                >
                  {isPastDeadline(tender.closing_date) ? "CLOSED" : "OPEN"}
                </Badge>
              </Link>
            ))}
          </ResultSection>
        )}

        {/* Vacancy Results */}
        {vacancyResults.length > 0 && (
          <ResultSection
            title={t("vacancyResults")}
            icon={<Briefcase className="w-5 h-5" />}
          >
            {vacancyResults.map((v) => (
              <Link
                key={v.id}
                href="/vacancies"
                className="block p-4 border border-gov-grey-border rounded-gov hover:bg-gov-grey-light transition-colors"
              >
                <p className="text-sm font-body font-semibold text-gov-black mb-1">
                  {v.job_title_en}
                </p>
                <p className="text-xs text-gov-grey-mid font-body">
                  {v.department.split(",")[0]} &middot; Deadline:{" "}
                  {formatDate(v.closing_date)}
                </p>
              </Link>
            ))}
          </ResultSection>
        )}

        {/* Document Results */}
        {documentResults.length > 0 && (
          <ResultSection
            title={t("documentResults")}
            icon={<Download className="w-5 h-5" />}
          >
            {documentResults.map((d) => (
              <div
                key={d.id}
                className="flex items-center justify-between p-4 border border-gov-grey-border rounded-gov"
              >
                <div>
                  <p className="text-sm font-body font-semibold text-gov-black">
                    {d.title_en}
                  </p>
                  <p className="text-xs text-gov-grey-mid font-body">
                    {d.category} &middot; {d.year}
                  </p>
                </div>
                <span className="text-xs text-gov-grey-mid font-body">
                  {formatFileSize(d.document_size_kb)}
                </span>
              </div>
            ))}
          </ResultSection>
        )}
      </div>
    </>
  );
}

function ResultSection({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8">
      <h2 className="flex items-center gap-2 text-lg font-display font-bold text-gov-black mb-4">
        <span className="text-primary-green">{icon}</span>
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}
