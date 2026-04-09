"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { useTranslations } from "next-intl";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const t = useTranslations("common");

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label={t("backToTop")}
      className="back-to-top fixed bottom-6 right-6 z-40 w-11 h-11 bg-primary-green text-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-blue transition-colors animate-fade-in"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
}
