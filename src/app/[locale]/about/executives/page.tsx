import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import PageHero from "@/components/ui/PageHero";
import { DEPARTMENTS } from "@/lib/constants";

export async function generateMetadata() {
  return { title: "County Executive Committee Members" };
}

export default async function ExecutivesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ExecutivesContent locale={locale} />;
}

function ExecutivesContent({ locale }: { locale: string }) {
  const t = useTranslations("executives");
  const departments = DEPARTMENTS.filter((d) => !d.isExternal && d.slug !== "county-assembly");

  return (
    <>
      <PageHero
        title={t("pageTitle")}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
          { label: t("pageTitle") },
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <p className="font-body text-gov-grey-mid leading-body text-[15px] max-w-3xl mb-10">
          {t("intro")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept) => {
            const Icon = dept.icon;
            return (
              <div
                key={dept.id}
                className="bg-white border border-gov-grey-border rounded-gov overflow-hidden"
              >
                <div className="bg-primary-green/5 p-6 flex items-center justify-center">
                  <div className="w-20 h-20 bg-primary-green/10 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary-green" />
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-sm font-body font-semibold text-gov-black mb-1">
                    CECM
                  </h3>
                  <p className="text-xs text-accent-gold font-body font-medium mb-2">
                    {t("portfolio")}:
                  </p>
                  <p className="text-xs font-body text-gov-grey-mid leading-snug">
                    {locale === "sw" ? dept.nameSw : dept.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
