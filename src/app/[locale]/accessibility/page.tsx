import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import PageHero from "@/components/ui/PageHero";
import { CheckCircle } from "lucide-react";

export async function generateMetadata() {
  return { title: "Accessibility Statement" };
}

export default async function AccessibilityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AccessibilityContent />;
}

function AccessibilityContent() {
  const t = useTranslations("accessibility");

  const measures = [
    t("measure1"),
    t("measure2"),
    t("measure3"),
    t("measure4"),
    t("measure5"),
    t("measure6"),
    t("measure7"),
  ];

  return (
    <>
      <PageHero
        title={t("pageTitle")}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: t("pageTitle") },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        {/* Commitment */}
        <div>
          <h2 className="text-xl font-display font-bold text-gov-black mb-3">
            {t("commitment")}
          </h2>
          <p className="font-body text-gov-grey-mid text-[15px] leading-body">
            {t("commitmentContent")}
          </p>
        </div>

        {/* Measures */}
        <div>
          <h2 className="text-xl font-display font-bold text-gov-black mb-4">
            {t("measures")}
          </h2>
          <ul className="space-y-3">
            {measures.map((m, i) => (
              <li
                key={i}
                className="flex items-start gap-3 font-body text-gov-grey-mid text-sm"
              >
                <CheckCircle className="w-4 h-4 text-gov-success mt-0.5 shrink-0" />
                {m}
              </li>
            ))}
          </ul>
        </div>

        {/* Limitations */}
        <div>
          <h2 className="text-xl font-display font-bold text-gov-black mb-3">
            {t("limitations")}
          </h2>
          <p className="font-body text-gov-grey-mid text-[15px] leading-body">
            {t("limitationsContent")}
          </p>
        </div>

        {/* Feedback */}
        <div className="bg-gov-green-light border border-gov-grey-border rounded-gov p-6">
          <h2 className="text-xl font-display font-bold text-gov-black mb-3">
            {t("feedbackTitle")}
          </h2>
          <p className="font-body text-gov-grey-mid text-[15px] leading-body">
            {t("feedbackContent")}
          </p>
        </div>
      </div>
    </>
  );
}
