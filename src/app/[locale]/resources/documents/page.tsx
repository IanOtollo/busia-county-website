"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import PageHero from "@/components/ui/PageHero";
import EmptyState from "@/components/ui/EmptyState";
import { getMockDocuments } from "@/lib/api";
import type { Document } from "@/lib/api";
import { formatFileSize } from "@/lib/utils";
import { Download, Search, FileText } from "lucide-react";

export default function DocumentsPage() {
  const t = useTranslations("documents");
  const [documents, setDocuments] = useState<Document[]>([]);
  const [category, setCategory] = useState("all");
  const [year, setYear] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const data = getMockDocuments();
    setDocuments(data);
  }, []);

  const years = [...new Set(documents.map((d) => d.year))].sort(
    (a, b) => b - a
  );

  const filtered = documents.filter((doc) => {
    if (category !== "all" && doc.category !== category) return false;
    if (year !== "all" && doc.year !== parseInt(year)) return false;
    if (
      searchQuery &&
      !doc.title_en.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false;
    return true;
  });

  return (
    <>
      <PageHero
        title={t("pageTitle")}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources" },
          { label: t("pageTitle") },
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 p-4 bg-gov-grey-light border border-gov-grey-border rounded-gov">
          <div>
            <label
              htmlFor="cat-filter"
              className="block text-xs font-body font-semibold text-gov-grey-mid uppercase tracking-wider mb-1"
            >
              {t("filterCategory")}
            </label>
            <select
              id="cat-filter"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="h-9 px-3 border border-gov-grey-border rounded-gov text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary-green"
            >
              <option value="all">{t("all")}</option>
              <option value="budget">{t("budgets")}</option>
              <option value="adp">{t("adp")}</option>
              <option value="cidp">{t("cidp")}</option>
              <option value="report">{t("reports")}</option>
              <option value="policy">{t("policies")}</option>
              <option value="other">{t("other")}</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="year-filter"
              className="block text-xs font-body font-semibold text-gov-grey-mid uppercase tracking-wider mb-1"
            >
              {t("filterYear")}
            </label>
            <select
              id="year-filter"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="h-9 px-3 border border-gov-grey-border rounded-gov text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary-green"
            >
              <option value="all">{t("all")}</option>
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1 min-w-[200px]">
            <label
              htmlFor="doc-search"
              className="block text-xs font-body font-semibold text-gov-grey-mid uppercase tracking-wider mb-1"
            >
              {t("searchPlaceholder")}
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gov-grey-mid" />
              <input
                id="doc-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t("searchPlaceholder")}
                className="w-full h-9 pl-9 pr-3 border border-gov-grey-border rounded-gov text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary-green"
              />
            </div>
          </div>
        </div>

        {/* Table */}
        {filtered.length === 0 ? (
          <EmptyState
            message={t("noResults")}
            icon={<FileText className="w-12 h-12" />}
          />
        ) : (
          <div className="overflow-x-auto border border-gov-grey-border rounded-gov">
            <table className="gov-table">
              <thead>
                <tr>
                  <th className="min-w-[300px]">{t("title")}</th>
                  <th className="min-w-[100px]">{t("category")}</th>
                  <th className="min-w-[80px]">{t("year")}</th>
                  <th className="min-w-[80px]">{t("size")}</th>
                  <th className="min-w-[100px]">{t("download")}</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((doc) => (
                  <tr key={doc.id}>
                    <td className="text-sm text-gov-black font-medium">
                      {doc.title_en}
                    </td>
                    <td>
                      <span className="text-xs text-gov-grey-mid bg-gov-grey-light px-2 py-1 rounded-gov capitalize">
                        {doc.category}
                      </span>
                    </td>
                    <td className="text-sm text-gov-grey-mid">{doc.year}</td>
                    <td className="text-sm text-gov-grey-mid">
                      {formatFileSize(doc.document_size_kb)}
                    </td>
                    <td>
                      <button className="inline-flex items-center gap-1.5 text-xs font-body font-medium text-primary-green hover:text-primary-blue transition-colors">
                        <Download className="w-3.5 h-3.5" />
                        {t("download")}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
