import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import PageHero from "@/components/ui/PageHero";

export async function generateMetadata() {
  return { title: "County Public Service Board" };
}

export default async function PSBPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <PSBContent />;
}

function PSBContent() {
  const t = useTranslations("psb");

  const responsibilities = [t("resp1"), t("resp2"), t("resp3"), t("resp4"), t("resp5")];
  const functions = [
    t("func1"), t("func2"), t("func3"), t("func4"), t("func5"),
    t("func6"), t("func7"), t("func8"), t("func9"),
  ];
  const achievements = [t("achievement1"), t("achievement2"), t("achievement3")];

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

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Mandate */}
        <h2 className="text-2xl font-display font-bold text-gov-black mb-4">
          {t("mandateTitle")}
        </h2>
        <p className="font-body text-gov-grey-mid leading-body text-[15px] mb-4">
          {t("mandateContent")}
        </p>
        <p className="font-body text-gov-grey-mid text-sm mb-3">
          {t("responsibilities")}
        </p>
        <ul className="space-y-2 mb-10">
          {responsibilities.map((r, i) => (
            <li
              key={i}
              className="flex items-start gap-3 font-body text-gov-grey-mid text-sm"
            >
              <span className="w-1.5 h-1.5 bg-primary-green rounded-full mt-2 shrink-0" />
              {r}
            </li>
          ))}
        </ul>

        {/* Functions */}
        <h2 className="text-2xl font-display font-bold text-gov-black mb-4">
          {t("functionsTitle")}
        </h2>
        <ul className="space-y-2 mb-10">
          {functions.map((f, i) => (
            <li
              key={i}
              className="flex items-start gap-3 font-body text-gov-grey-mid text-sm"
            >
              <span className="w-5 h-5 bg-primary-green/10 text-primary-green rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                {i + 1}
              </span>
              {f}
            </li>
          ))}
        </ul>

        {/* Achievements */}
        <h2 className="text-2xl font-display font-bold text-gov-black mb-4">
          {t("achievementsTitle")}
        </h2>
        <div className="space-y-4">
          {achievements.map((a, i) => (
            <div
              key={i}
              className="bg-gov-green-light border-l-4 border-primary-green rounded-gov p-4"
            >
              <p className="font-body text-gov-black text-sm">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
