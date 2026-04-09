"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import PageHero from "@/components/ui/PageHero";
import EmptyState from "@/components/ui/EmptyState";
import { getMockNews } from "@/lib/api";
import type { NewsArticle } from "@/lib/api";
import { formatDate, getCategoryColor } from "@/lib/utils";
import { ArrowRight, Newspaper } from "lucide-react";

const CATEGORIES = ["all", "agriculture", "health", "infrastructure", "governance", "education"];

export default function NewsPage() {
  const t = useTranslations("news");
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    const data = getMockNews();
    setNews(data);
  }, []);

  const filtered = category === "all"
    ? news
    : news.filter((n) => n.category === category);

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
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 text-sm font-body font-medium rounded-gov transition-colors ${
                category === cat
                  ? "bg-primary-green text-white"
                  : "bg-gov-grey-light text-gov-grey-mid hover:bg-gov-green-light hover:text-primary-green border border-gov-grey-border"
              }`}
            >
              {t(cat)}
            </button>
          ))}
        </div>

        {/* News Grid */}
        {filtered.length === 0 ? (
          <EmptyState
            message={t("noResults")}
            icon={<Newspaper className="w-12 h-12" />}
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article) => (
              <article
                key={article.id}
                className="border border-gov-grey-border rounded-gov overflow-hidden hover:shadow-md transition-shadow bg-white"
              >
                <div className="bg-primary-green/5 h-48 flex items-center justify-center relative">
                  <div
                    className={`absolute top-3 left-3 px-2.5 py-1 rounded-gov text-white text-xs font-body font-semibold ${getCategoryColor(article.category)}`}
                  >
                    {article.category.charAt(0).toUpperCase() +
                      article.category.slice(1)}
                  </div>
                  <Newspaper className="w-12 h-12 text-primary-green/20" />
                </div>
                <div className="p-5">
                  <p className="text-xs text-gov-grey-mid font-body mb-2">
                    {formatDate(article.published_at)}
                  </p>
                  <h3 className="text-lg font-display font-bold text-gov-black mb-2 leading-snug line-clamp-2">
                    {article.title_en}
                  </h3>
                  <p className="text-sm text-gov-grey-mid font-body leading-relaxed mb-4 line-clamp-2">
                    {article.excerpt_en}
                  </p>
                  <Link
                    href={`/news/${article.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-body font-semibold text-primary-green hover:text-primary-blue transition-colors"
                  >
                    {t("readMore")}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
