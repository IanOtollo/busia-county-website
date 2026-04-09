import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import { DEPARTMENTS } from "@/lib/constants";
import { Mail, MapPin } from "lucide-react";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return DEPARTMENTS.filter((d) => !d.isExternal).map((d) => ({
    slug: d.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const dept = DEPARTMENTS.find((d) => d.slug === slug);
  return { title: dept?.name || "Department" };
}

export default async function DepartmentPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const dept = DEPARTMENTS.find((d) => d.slug === slug);
  if (!dept || dept.isExternal) return notFound();

  const name = locale === "sw" ? dept.nameSw : dept.name;
  const mandate = locale === "sw" ? dept.mandateSw : dept.mandate;

  return (
    <>
      <PageHero
        title={name}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Departments", href: "/departments" },
          { label: name },
        ]}
        variant="navy"
      />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-display font-bold text-gov-black mb-4">
              About the Department
            </h2>
            <p className="font-body text-gov-grey-mid leading-body text-[15px] mb-8">
              {mandate}
            </p>

            {/* Vision & Mission */}
            {dept.vision && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-gov-green-light border border-gov-grey-border rounded-gov p-5">
                  <h3 className="text-sm font-body font-semibold text-primary-green uppercase tracking-wider mb-2">
                    Vision
                  </h3>
                  <p className="font-body text-sm text-gov-grey-mid">
                    {dept.vision}
                  </p>
                </div>
                <div className="bg-gov-blue-light border border-gov-grey-border rounded-gov p-5">
                  <h3 className="text-sm font-body font-semibold text-primary-blue uppercase tracking-wider mb-2">
                    Mission
                  </h3>
                  <p className="font-body text-sm text-gov-grey-mid">
                    {dept.mission}
                  </p>
                </div>
              </div>
            )}

            {/* Key Functions */}
            {dept.functions.length > 0 && (
              <>
                <h2 className="text-xl font-display font-bold text-gov-black mb-4">
                  Key Functions
                </h2>
                <ul className="space-y-2 mb-8">
                  {dept.functions.map((func, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 font-body text-gov-grey-mid text-sm"
                    >
                      <span className="w-1.5 h-1.5 bg-primary-green rounded-full mt-2 shrink-0" />
                      {func}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {/* Achievements */}
            {dept.achievements.length > 0 && (
              <>
                <h2 className="text-xl font-display font-bold text-gov-black mb-4">
                  Recent Achievements
                </h2>
                <div className="space-y-3 mb-8">
                  {dept.achievements.map((ach, i) => (
                    <div
                      key={i}
                      className="bg-gov-green-light border-l-4 border-primary-green rounded-gov p-4"
                    >
                      <p className="font-body text-gov-black text-sm">
                        {ach}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Contact */}
            <h2 className="text-xl font-display font-bold text-gov-black mb-4">
              Contact
            </h2>
            <div className="bg-white border border-gov-grey-border rounded-gov p-5 space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent-gold" />
                <a
                  href={`mailto:${dept.email}`}
                  className="font-body text-sm text-primary-green hover:text-primary-blue transition-colors"
                >
                  {dept.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-accent-gold" />
                <span className="font-body text-sm text-gov-grey-mid">
                  County Headquarters, Busia Town
                </span>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-2">
            <div className="sticky top-24 space-y-6">
              <div className="bg-gov-grey-light border border-gov-grey-border rounded-gov p-5">
                <h3 className="text-sm font-body font-semibold text-gov-black uppercase tracking-wider mb-3">
                  Related Documents
                </h3>
                <p className="text-xs font-body text-gov-grey-mid">
                  View related documents in the{" "}
                  <a
                    href="/en/resources/documents"
                    className="text-primary-green hover:underline"
                  >
                    Document Library
                  </a>
                </p>
              </div>
              <div className="bg-gov-grey-light border border-gov-grey-border rounded-gov p-5">
                <h3 className="text-sm font-body font-semibold text-gov-black uppercase tracking-wider mb-3">
                  Current Tenders
                </h3>
                <p className="text-xs font-body text-gov-grey-mid">
                  View all tenders on the{" "}
                  <a
                    href="/en/tenders"
                    className="text-primary-green hover:underline"
                  >
                    Tenders page
                  </a>
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
