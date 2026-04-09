"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import PageHero from "@/components/ui/PageHero";
import EmptyState from "@/components/ui/EmptyState";
import { getMockDocuments } from "@/lib/api";
import type { Document } from "@/lib/api";
import { formatFileSize } from "@/lib/utils";
import { Download, FileText } from "lucide-react";

const BUDGET_CATEGORIES = ["all", "budget", "adp", "cidp"];

export default function BudgetDocumentsPage() {
  const t = useTranslations("documents");
  const [documents, setDocuments] = useState<Document[]>([]);
  const [category, setCategory] = useState("all");
  const [year, setYear] = useState("all");

  useEffect(() => {
    const allDocs = getMockDocuments();
    const budgetDocs = allDocs.filter((d) =>
      ["budget", "adp", "cidp"].includes(d.category)
    );
    setDocuments(budgetDocs);
  }, []);

  const years = [...new Set(documents.map((d) => d.year))].sort(
    (a, b) => b - a
  );

  const filtered = documents.filter((doc) => {
    if (category !== "all" && doc.category !== category) return false;
    if (year !== "all" && doc.year !== parseInt(year)) return false;
    return true;
  });

  return (
    <>
      <PageHero
        title={t("budgetTitle")}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources" },
          { label: t("budgetTitle") },
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
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
          <div className="flex gap-2 items-end">
            {BUDGET_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 text-sm font-body font-medium rounded-gov transition-colors ${
                  category === cat
                    ? "bg-primary-green text-white"
                    : "bg-gov-grey-light text-gov-grey-mid hover:bg-gov-green-light border border-gov-grey-border"
                }`}
              >
                {cat === "all" ? t("all") : t(cat)}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <EmptyState
            message={t("noResults")}
            icon={<FileText className="w-12 h-12" />}
          />
        ) : (
          <div className="space-y-3">
            {filtered.map((doc) => (
              <div
                key={doc.id}
                className="flex items-center justify-between p-5 bg-white border border-gov-grey-border rounded-gov hover:shadow-sm transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-gov-green-light rounded-gov">
                    <FileText className="w-6 h-6 text-primary-green" />
                  </div>
                  <div>
                    <h3 className="text-sm font-body font-semibold text-gov-black">
                      {doc.title_en}
                    </h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs text-gov-grey-mid bg-gov-grey-light px-2 py-0.5 rounded-gov capitalize">
                        {doc.category}
                      </span>
                      <span className="text-xs text-gov-grey-mid">
                        {doc.year}
                      </span>
                      <span className="text-xs text-gov-grey-mid">
                        {formatFileSize(doc.document_size_kb)}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary-green text-white text-xs font-body font-medium rounded-gov hover:bg-primary-blue transition-colors shrink-0">
                  <Download className="w-3.5 h-3.5" />
                  {t("download")}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
