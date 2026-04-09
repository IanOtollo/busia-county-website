import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import PageHero from "@/components/ui/PageHero";
import { DEPARTMENTS } from "@/lib/constants";
import { ArrowRight, ExternalLink } from "lucide-react";

export async function generateMetadata() {
  return { title: "County Departments" };
}

export default async function DepartmentsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <DepartmentsContent locale={locale} />;
}

function DepartmentsContent({ locale }: { locale: string }) {
  const t = useTranslations();

  return (
    <>
      <PageHero
        title={t("nav.departments")}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: t("nav.departments") },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEPARTMENTS.map((dept) => {
            const Icon = dept.icon;

            if (dept.isExternal) {
              return (
                <a
                  key={dept.id}
                  href={dept.externalUrl!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white border border-gov-grey-border rounded-gov overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="h-1 bg-primary-green" />
                  <div className="p-6">
                    <Icon className="w-8 h-8 text-primary-green mb-4" />
                    <h3 className="text-base font-display font-bold text-gov-black mb-2 leading-snug">
                      {locale === "sw" ? dept.nameSw : dept.name}
                    </h3>
                    <p className="text-sm font-body text-gov-grey-mid leading-relaxed mb-4">
                      {locale === "sw" ? dept.mandateSw : dept.mandate}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-body font-semibold text-primary-green group-hover:text-primary-blue transition-colors">
                      Visit Website
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </a>
              );
            }

            return (
              <Link
                key={dept.id}
                href={`/departments/${dept.slug}`}
                className="group block bg-white border border-gov-grey-border rounded-gov overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="h-1 bg-primary-green" />
                <div className="p-6">
                  <Icon className="w-8 h-8 text-primary-green mb-4" />
                  <h3 className="text-base font-display font-bold text-gov-black mb-2 leading-snug">
                    {locale === "sw" ? dept.nameSw : dept.name}
                  </h3>
                  <p className="text-sm font-body text-gov-grey-mid leading-relaxed mb-4">
                    {locale === "sw" ? dept.mandateSw : dept.mandate}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-body font-semibold text-primary-green group-hover:text-primary-blue transition-colors">
                    View Department
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
