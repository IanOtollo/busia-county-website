import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import { routing } from "@/i18n/routing";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import "../globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "County Government of Busia — Gateway to East & Central Africa",
    template: "%s | County Government of Busia",
  },
  description:
    "Official website of the County Government of Busia, Kenya. Access tenders, vacancies, budget documents, news, and county services.",
  keywords: [
    "Busia County",
    "County Government of Busia",
    "Kenya County",
    "Busia tenders",
    "Busia vacancies",
    "Busia budget",
    "Governor Otuoma",
  ],
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${playfair.variable} ${sourceSans.variable}`}>
      <body className="font-body antialiased text-gov-black bg-white">
        <NextIntlClientProvider messages={messages}>
          <a href="#main-content" className="skip-to-content">
            Skip to main content
          </a>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <BackToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
