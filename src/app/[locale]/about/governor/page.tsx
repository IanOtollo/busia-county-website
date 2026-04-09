import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import PageHero from "@/components/ui/PageHero";
import { Mail } from "lucide-react";

export async function generateMetadata() {
  return { title: "H.E. The Governor" };
}

export default async function GovernorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <GovernorContent locale={locale} />;
}

function GovernorContent({ locale }: { locale: string }) {
  const t = useTranslations("governor");

  return (
    <>
      <PageHero
        title={`${t("fullTitle")} — Governor`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
          { label: "The Governor" },
        ]}
        variant="navy"
      />

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Photo */}
          <div className="lg:col-span-2">
            <div className="bg-primary-green rounded-gov aspect-[3/4] flex items-end justify-center relative overflow-hidden sticky top-24">
              <div className="absolute inset-0 hero-pattern" />
              <div className="relative bg-gov-black/60 w-full p-5 text-center">
                <p className="text-white font-display font-bold text-xl">
                  {t("fullTitle")}
                </p>
                <p className="text-accent-gold text-sm font-body mt-1">
                  {t("role")}
                </p>
                <p className="text-white/60 text-xs font-body mt-1">
                  {t("elected")}
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-display font-bold text-gov-black mb-6">
              {t("title")}
            </h2>
            <div className="space-y-4 font-body text-gov-grey-mid leading-body text-[15px]">
              {t("fullMessage")
                .split("\n\n")
                .map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gov-grey-border">
              <h3 className="text-lg font-display font-bold text-gov-black mb-3">
                Contact the Governor&apos;s Office
              </h3>
              <a
                href={`mailto:${t("contactEmail")}`}
                className="inline-flex items-center gap-2 text-sm font-body text-primary-green hover:text-primary-blue transition-colors"
              >
                <Mail className="w-4 h-4" />
                {t("contactEmail")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
