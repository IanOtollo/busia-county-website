import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import PageHero from "@/components/ui/PageHero";
import { SUB_COUNTIES } from "@/lib/constants";

export async function generateMetadata() {
  return { title: "History of Busia County" };
}

export default async function HistoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HistoryContent locale={locale} />;
}

function HistoryContent({ locale }: { locale: string }) {
  const t = useTranslations("history");
  const tFooter = useTranslations("footer");

  return (
    <>
      <PageHero
        title={t("pageTitle")}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about/history" },
          { label: t("pageTitle") },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl lg:text-3xl font-display font-bold text-gov-black mb-6">
          {t("aboutTitle")}
        </h2>
        <div className="prose prose-lg font-body text-gov-grey-mid leading-body max-w-none">
          {t("aboutContent")
            .split("\n\n")
            .map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
        </div>

        <h2 className="text-2xl font-display font-bold text-gov-black mt-12 mb-6">
          {t("adminTitle")}
        </h2>
        <div className="overflow-x-auto">
          <table className="gov-table">
            <thead>
              <tr>
                <th>#</th>
                <th>{t("subCounty")}</th>
                <th>{t("adminUnits")}</th>
              </tr>
            </thead>
            <tbody>
              {SUB_COUNTIES.map((sc, i) => (
                <tr key={sc.name}>
                  <td className="font-mono text-sm text-gov-grey-mid">
                    {i + 1}
                  </td>
                  <td className="font-semibold text-gov-black">
                    {locale === "sw" ? sc.nameSw : sc.name}
                  </td>
                  <td className="text-gov-grey-mid">{sc.wards}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-display font-bold text-gov-black mt-12 mb-6">
          {t("visionMissionTitle")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gov-green-light border border-gov-grey-border rounded-gov p-6">
            <h3 className="text-lg font-display font-bold text-primary-green mb-3">
              {tFooter("vision")}
            </h3>
            <p className="font-body text-gov-grey-mid text-sm leading-relaxed">
              {tFooter("visionText")}
            </p>
          </div>
          <div className="bg-gov-blue-light border border-gov-grey-border rounded-gov p-6">
            <h3 className="text-lg font-display font-bold text-primary-blue mb-3">
              {tFooter("mission")}
            </h3>
            <p className="font-body text-gov-grey-mid text-sm leading-relaxed">
              {tFooter("missionText")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
