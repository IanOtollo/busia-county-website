"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import PageHero from "@/components/ui/PageHero";
import Badge from "@/components/ui/Badge";
import EmptyState from "@/components/ui/EmptyState";
import { getMockVacancies } from "@/lib/api";
import type { Vacancy } from "@/lib/api";
import { formatDate, formatFileSize, isClosingSoon, isPastDeadline } from "@/lib/utils";
import { DEPARTMENTS } from "@/lib/constants";
import { Download, Briefcase, Calendar, Users, Award } from "lucide-react";

export default function VacanciesPage() {
  const t = useTranslations("vacancies");
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);
  const [deptFilter, setDeptFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    const data = getMockVacancies();
    setVacancies(data);
  }, []);

  const filtered = vacancies.filter((v) => {
    if (statusFilter === "open" && !v.is_active) return false;
    if (statusFilter === "closed" && v.is_active) return false;
    if (deptFilter !== "all" && v.department !== deptFilter) return false;
    return true;
  });

  return (
    <>
      <PageHero
        title={t("pageTitle")}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: t("pageTitle") },
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 p-4 bg-gov-grey-light border border-gov-grey-border rounded-gov">
          <div>
            <label
              htmlFor="dept-filter"
              className="block text-xs font-body font-semibold text-gov-grey-mid uppercase tracking-wider mb-1"
            >
              {t("filterDepartment")}
            </label>
            <select
              id="dept-filter"
              value={deptFilter}
              onChange={(e) => setDeptFilter(e.target.value)}
              className="h-9 px-3 border border-gov-grey-border rounded-gov text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary-green max-w-[250px]"
            >
              <option value="all">{t("all")}</option>
              {DEPARTMENTS.filter((d) => !d.isExternal).map((d) => (
                <option key={d.id} value={d.name}>
                  {d.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="status-filter"
              className="block text-xs font-body font-semibold text-gov-grey-mid uppercase tracking-wider mb-1"
            >
              {t("filterStatus")}
            </label>
            <select
              id="status-filter"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="h-9 px-3 border border-gov-grey-border rounded-gov text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary-green"
            >
              <option value="all">{t("all")}</option>
              <option value="open">{t("open")}</option>
              <option value="closed">{t("closed")}</option>
            </select>
          </div>
        </div>

        {/* Vacancy Cards */}
        {filtered.length === 0 ? (
          <EmptyState
            message={t("noResults")}
            icon={<Briefcase className="w-12 h-12" />}
          />
        ) : (
          <div className="space-y-4">
            {filtered.map((vacancy) => {
              const closed = isPastDeadline(vacancy.closing_date);
              const closingSoon = !closed && isClosingSoon(vacancy.closing_date);

              return (
                <div
                  key={vacancy.id}
                  className="bg-white border border-gov-grey-border rounded-gov p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="text-lg font-display font-bold text-gov-black">
                          {vacancy.job_title_en}
                        </h3>
                        {closingSoon && (
                          <Badge variant="red">{t("closingSoon")}</Badge>
                        )}
                        {closed && (
                          <Badge variant="grey">{t("closed")}</Badge>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-3 mb-3">
                        <span className="inline-flex items-center gap-1 text-xs font-body text-white bg-primary-green px-2 py-0.5 rounded-gov">
                          {vacancy.department.split(",")[0]}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-body text-gov-grey-mid">
                          <Award className="w-3 h-3" />
                          {t("grade")}: {vacancy.grade}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-body text-gov-grey-mid">
                          <Users className="w-3 h-3" />
                          {vacancy.positions_available}{" "}
                          {vacancy.positions_available === 1
                            ? t("positions")
                            : t("positions_plural")}
                        </span>
                      </div>

                      <p className="text-sm font-body text-gov-grey-mid leading-relaxed mb-3 line-clamp-2">
                        <span className="font-semibold text-gov-black">
                          {t("requirements")}:{" "}
                        </span>
                        {vacancy.requirements_en}
                      </p>

                      <div className="flex items-center gap-1.5 text-sm font-body">
                        <Calendar className="w-4 h-4 text-accent-gold" />
                        <span className="text-gov-grey-mid">
                          {t("deadline")}:{" "}
                        </span>
                        <span
                          className={
                            closingSoon
                              ? "text-gov-danger font-semibold"
                              : closed
                                ? "text-gov-grey-mid line-through"
                                : "text-gov-black font-medium"
                          }
                        >
                          {formatDate(vacancy.closing_date)}
                        </span>
                      </div>
                    </div>

                    {vacancy.document_path && !closed && (
                      <div className="shrink-0">
                        <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary-green text-white text-sm font-body font-medium rounded-gov hover:bg-primary-blue transition-colors">
                          <Download className="w-4 h-4" />
                          {t("downloadAdvert")}
                          <span className="text-xs text-white/70">
                            PDF &middot; {formatFileSize(vacancy.document_size_kb)}
                          </span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
