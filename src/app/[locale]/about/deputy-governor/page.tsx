import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import PageHero from "@/components/ui/PageHero";

export async function generateMetadata() {
  return { title: "Deputy Governor" };
}

export default async function DeputyGovernorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <DeputyGovernorContent locale={locale} />;
}

function DeputyGovernorContent({ locale }: { locale: string }) {
  const t = useTranslations("deputyGovernor");

  const functions = [t("func1"), t("func2"), t("func3"), t("func4"), t("func5")];

  return (
    <>
      <PageHero
        title={t("pageTitle")}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
          { label: t("pageTitle") },
        ]}
        variant="navy"
      />

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="bg-primary-blue rounded-gov aspect-[3/4] flex items-end justify-center relative overflow-hidden">
              <div className="absolute inset-0 hero-pattern" />
              <div className="relative bg-gov-black/60 w-full p-5 text-center">
                <p className="text-white font-display font-bold text-xl">
                  {t("name")}
                </p>
                <p className="text-accent-gold text-sm font-body mt-1">
                  {t("role")}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-2xl font-display font-bold text-gov-black mb-4">
              {t("pageTitle")}
            </h2>
            <p className="font-body text-gov-grey-mid leading-body text-[15px] mb-8">
              {t("about")}
            </p>

            <h3 className="text-xl font-display font-bold text-gov-black mb-4">
              {t("functions")}
            </h3>
            <ul className="space-y-3">
              {functions.map((func, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 font-body text-gov-grey-mid text-sm"
                >
                  <span className="w-6 h-6 bg-primary-green/10 text-primary-green rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {func}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
