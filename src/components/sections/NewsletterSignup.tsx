"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";

export default function NewsletterSignup() {
  const t = useTranslations("newsletter");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }
    // In production, this would POST to the API
    setStatus("success");
    setEmail("");
  };

  return (
    <section className="py-12 bg-primary-green newsletter-section">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-display font-bold text-white mb-3">
          {t("title")}
        </h2>
        <p className="text-white/80 font-body text-sm mb-6">
          {t("subtitle")}
        </p>

        {status === "success" ? (
          <div className="flex items-center justify-center gap-2 text-white bg-white/10 rounded-gov px-4 py-3">
            <CheckCircle className="w-5 h-5" />
            <span className="font-body text-sm font-medium">
              {t("success")}
            </span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gov-grey-mid" />
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                placeholder={t("placeholder")}
                className={`w-full pl-10 pr-4 py-3 rounded-gov font-body text-sm text-gov-black focus:outline-none focus:ring-2 focus:ring-accent-gold ${
                  status === "error" ? "ring-2 ring-gov-danger" : ""
                }`}
                aria-label={t("placeholder")}
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-accent-gold text-white font-body font-semibold text-sm rounded-gov hover:bg-yellow-600 transition-colors shrink-0"
            >
              {t("subscribe")}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="mt-2 flex items-center justify-center gap-1 text-white/90 text-xs font-body">
            <AlertCircle className="w-3.5 h-3.5" />
            {t("error")}
          </p>
        )}
      </div>
    </section>
  );
}
