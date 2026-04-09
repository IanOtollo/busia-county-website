import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { getMockNews } from "@/lib/api";
import { formatDate, getCategoryColor } from "@/lib/utils";
import { ArrowLeft, ArrowRight, Calendar, User, Newspaper } from "lucide-react";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const news = getMockNews();
  return news.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getMockNews().find((n) => n.slug === slug);
  return {
    title: article?.title_en || "News Article",
    description: article?.excerpt_en,
  };
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const allNews = getMockNews();
  const index = allNews.findIndex((n) => n.slug === slug);
  if (index === -1) return notFound();

  const article = allNews[index];
  const prevArticle = index > 0 ? allNews[index - 1] : null;
  const nextArticle = index < allNews.length - 1 ? allNews[index + 1] : null;
  const recentNews = allNews.filter((n) => n.id !== article.id).slice(0, 3);

  const title = locale === "sw" ? article.title_sw : article.title_en;
  const body = locale === "sw" ? article.body_sw : article.body_en;
  const excerpt = locale === "sw" ? article.excerpt_sw : article.excerpt_en;

  return (
    <>
      {/* Breadcrumb Hero */}
      <div className="bg-primary-green hero-pattern">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <nav aria-label="Breadcrumb" className="text-sm font-body">
            <ol className="flex items-center gap-1 text-white/70">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-1">
                <span>/</span>
                <Link href="/news" className="hover:text-white transition-colors">
                  News
                </Link>
              </li>
              <li className="flex items-center gap-1">
                <span>/</span>
                <span className="text-white/90 font-medium line-clamp-1" aria-current="page">
                  {title}
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-10">
          {/* Article */}
          <article className="lg:col-span-5">
            {/* Header */}
            <div className="mb-8">
              <span
                className={`inline-block px-2.5 py-1 rounded-gov text-white text-xs font-body font-semibold mb-4 ${getCategoryColor(article.category)}`}
              >
                {article.category.charAt(0).toUpperCase() +
                  article.category.slice(1)}
              </span>
              <h1 className="text-3xl lg:text-[40px] font-display font-bold text-gov-black leading-heading mb-4">
                {title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm font-body text-gov-grey-mid">
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4" />
                  {article.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {formatDate(article.published_at, locale)}
                </span>
              </div>
            </div>

            {/* Featured Image Placeholder */}
            <div className="bg-primary-green/10 rounded-gov h-64 lg:h-80 flex items-center justify-center mb-8">
              <div className="text-center">
                <Newspaper className="w-16 h-16 text-primary-green/30 mx-auto mb-2" />
                <p className="text-sm text-primary-green/50 font-body">{title}</p>
              </div>
            </div>

            {/* Body */}
            <div
              className="prose prose-lg max-w-none font-body text-gov-black leading-body [&_p]:mb-4 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:mt-8 [&_h2]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6"
              dangerouslySetInnerHTML={{ __html: body }}
            />

            {/* Prev / Next */}
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-gov-grey-border">
              {prevArticle ? (
                <Link
                  href={`/news/${prevArticle.slug}`}
                  className="flex items-center gap-2 text-sm font-body text-primary-green hover:text-primary-blue transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Previous Article
                </Link>
              ) : (
                <div />
              )}
              {nextArticle ? (
                <Link
                  href={`/news/${nextArticle.slug}`}
                  className="flex items-center gap-2 text-sm font-body text-primary-green hover:text-primary-blue transition-colors"
                >
                  Next Article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-2">
            <div className="sticky top-24 space-y-6">
              <div className="bg-gov-grey-light border border-gov-grey-border rounded-gov p-5">
                <h3 className="text-sm font-body font-semibold text-gov-black uppercase tracking-wider mb-4">
                  Recent News
                </h3>
                <div className="space-y-4">
                  {recentNews.map((n) => (
                    <Link
                      key={n.id}
                      href={`/news/${n.slug}`}
                      className="block group"
                    >
                      <p className="text-xs text-gov-grey-mid font-body mb-1">
                        {formatDate(n.published_at, locale)}
                      </p>
                      <p className="text-sm font-body font-medium text-gov-black group-hover:text-primary-green transition-colors leading-snug line-clamp-2">
                        {locale === "sw" ? n.title_sw : n.title_en}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
