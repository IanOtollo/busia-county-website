import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <div className="min-h-[60vh] bg-primary-green hero-pattern flex items-center justify-center">
      <div className="text-center px-4">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-1 h-12 bg-accent-gold rounded-full" />
          <div>
            <div className="text-[10px] text-accent-gold tracking-[0.15em] font-body">
              COUNTY GOVERNMENT OF
            </div>
            <div className="text-2xl font-display font-bold text-white">
              BUSIA
            </div>
          </div>
        </div>

        <h1 className="text-8xl lg:text-9xl font-display font-bold text-white/20 mb-4">
          {t("title")}
        </h1>
        <h2 className="text-2xl lg:text-3xl font-display font-bold text-white mb-4">
          {t("heading")}
        </h2>
        <p className="text-white/70 font-body text-sm mb-8 max-w-md mx-auto">
          {t("message")}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-white text-primary-green font-body font-semibold text-sm rounded-gov hover:bg-gray-100 transition-colors"
          >
            {t("goHome")}
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-body font-semibold text-sm rounded-gov hover:bg-white/10 transition-colors"
          >
            {t("contactUs")}
          </Link>
        </div>
      </div>
    </div>
  );
}
