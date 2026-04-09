import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import PageHero from "@/components/ui/PageHero";
import { Camera } from "lucide-react";

export async function generateMetadata() {
  return { title: "Gallery" };
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <GalleryContent />;
}

function GalleryContent() {
  const t = useTranslations("common");

  return (
    <>
      <PageHero
        title={t("gallery")}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Media" },
          { label: t("gallery") },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="bg-gov-grey-light border border-gov-grey-border rounded-gov py-16 px-8">
          <Camera className="w-16 h-16 text-primary-green/30 mx-auto mb-6" />
          <h2 className="text-2xl font-display font-bold text-gov-black mb-3">
            {t("comingSoon")}
          </h2>
          <p className="text-sm font-body text-gov-grey-mid max-w-md mx-auto leading-relaxed">
            {t("galleryComingSoon")}
          </p>
        </div>
      </div>
    </>
  );
}
