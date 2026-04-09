import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import PageHero from "@/components/ui/PageHero";

export async function generateMetadata() {
  return { title: "Privacy Policy" };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <PrivacyContent />;
}

function PrivacyContent() {
  const t = useTranslations("privacy");

  const sections = [
    { title: t("section1Title"), content: t("section1Content") },
    { title: t("section2Title"), content: t("section2Content") },
    { title: t("section3Title"), content: t("section3Content") },
    { title: t("section4Title"), content: t("section4Content") },
    { title: t("section5Title"), content: t("section5Content") },
    { title: t("section6Title"), content: t("section6Content") },
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

      <div className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-sm font-body text-gov-grey-mid mb-8">
          {t("lastUpdated")}
        </p>

        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-display font-bold text-gov-black mb-3">
                {section.title}
              </h2>
              <p className="font-body text-gov-grey-mid text-[15px] leading-body">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
