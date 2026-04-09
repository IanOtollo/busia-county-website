"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import PageHero from "@/components/ui/PageHero";
import Badge from "@/components/ui/Badge";
import EmptyState from "@/components/ui/EmptyState";
import { getMockTenders } from "@/lib/api";
import type { Tender } from "@/lib/api";
import { formatDate, formatFileSize, isClosingSoon, isPastDeadline } from "@/lib/utils";
import { DEPARTMENTS } from "@/lib/constants";
import { Download, FileText, Search } from "lucide-react";

export default function TendersPage() {
  const t = useTranslations("tenders");
  const [tenders, setTenders] = useState<Tender[]>([]);
  const [statusFilter, setStatusFilter] = useState("all");
  const [deptFilter, setDeptFilter] = useState("all");

  useEffect(() => {
    const data = getMockTenders();
    setTenders(data);
  }, []);

  const filtered = tenders.filter((tender) => {
    if (statusFilter === "active" && !tender.is_active) return false;
    if (statusFilter === "closed" && tender.is_active) return false;
    if (deptFilter !== "all" && tender.department !== deptFilter) return false;
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

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 p-4 bg-gov-grey-light border border-gov-grey-border rounded-gov">
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
              <option value="active">{t("active")}</option>
              <option value="closed">{t("closed")}</option>
            </select>
          </div>
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
        </div>

        {/* Table */}
        {filtered.length === 0 ? (
          <EmptyState
            message={t("noResults")}
            icon={<Search className="w-12 h-12" />}
          />
        ) : (
          <div className="overflow-x-auto border border-gov-grey-border rounded-gov">
            <table className="gov-table">
              <thead>
                <tr>
                  <th className="min-w-[140px]">{t("tenderNo")}</th>
                  <th className="min-w-[280px]">{t("description")}</th>
                  <th className="min-w-[160px]">{t("department")}</th>
                  <th className="min-w-[120px]">{t("closingDate")}</th>
                  <th className="min-w-[100px]">{t("status")}</th>
                  <th className="min-w-[120px]">{t("documents")}</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((tender) => {
                  const closed = isPastDeadline(tender.closing_date);
                  const closingSoon = !closed && isClosingSoon(tender.closing_date);

                  return (
                    <tr key={tender.id}>
                      <td className="font-mono text-xs text-accent-gold font-medium">
                        {tender.tender_number}
                      </td>
                      <td className="text-sm text-gov-black">
                        {tender.title_en}
                      </td>
                      <td>
                        <span className="text-xs text-gov-grey-mid bg-gov-grey-light px-2 py-1 rounded-gov">
                          {tender.department.split(",")[0]}
                        </span>
                      </td>
                      <td
                        className={`text-sm ${
                          closingSoon
                            ? "text-gov-danger font-semibold"
                            : "text-gov-grey-mid"
                        }`}
                      >
                        {formatDate(tender.closing_date)}
                      </td>
                      <td>
                        {closed ? (
                          <Badge variant="grey">{t("closedBadge")}</Badge>
                        ) : closingSoon ? (
                          <Badge variant="red">{t("closingSoon")}</Badge>
                        ) : (
                          <Badge variant="green">{t("open")}</Badge>
                        )}
                      </td>
                      <td>
                        {tender.document_path && (
                          <button className="inline-flex items-center gap-1.5 text-xs font-body font-medium text-primary-green hover:text-primary-blue transition-colors">
                            <Download className="w-3.5 h-3.5" />
                            PDF &middot; {formatFileSize(tender.document_size_kb)}
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
