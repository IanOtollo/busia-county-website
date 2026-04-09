"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import PageHero from "@/components/ui/PageHero";
import { DEPARTMENTS, CONTACT_INFO } from "@/lib/constants";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  CheckCircle,
  AlertCircle,
  Send,
} from "lucide-react";
import { FacebookIcon, TwitterIcon, YoutubeIcon } from "@/components/ui/SocialIcons";

export default function ContactPage() {
  const t = useTranslations("contact");
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    department: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.full_name) newErrors.full_name = t("required");
    if (!formData.email) newErrors.email = t("required");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = t("invalidEmail");
    if (!formData.department) newErrors.department = t("required");
    if (!formData.subject) newErrors.subject = t("required");
    else if (formData.subject.length > 100)
      newErrors.subject = t("subjectTooLong");
    if (!formData.message) newErrors.message = t("required");
    else if (formData.message.length < 20)
      newErrors.message = t("messageTooShort");
    else if (formData.message.length > 1000)
      newErrors.message = t("messageTooLong");
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setStatus("sending");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        department: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  return (
    <>
      <PageHero
        title={t("pageTitle")}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: t("pageTitle") },
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Form — 60% */}
          <div className="lg:col-span-3">
            <h2 className="text-xl font-display font-bold text-gov-black mb-6">
              {t("formTitle")}
            </h2>

            {status === "success" && (
              <div className="flex items-start gap-3 bg-gov-success/10 border border-gov-success/20 text-gov-success rounded-gov p-4 mb-6">
                <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" />
                <p className="text-sm font-body font-medium">{t("success")}</p>
              </div>
            )}

            {status === "error" && (
              <div className="flex items-start gap-3 bg-gov-danger/10 border border-gov-danger/20 text-gov-danger rounded-gov p-4 mb-6">
                <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" />
                <p className="text-sm font-body font-medium">{t("error")}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="full_name"
                  className="block text-sm font-body font-medium text-gov-black mb-1"
                >
                  {t("fullName")} *
                </label>
                <input
                  id="full_name"
                  type="text"
                  value={formData.full_name}
                  onChange={(e) => updateField("full_name", e.target.value)}
                  className={`w-full h-10 px-3 border rounded-gov text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary-green ${
                    errors.full_name ? "border-gov-danger" : "border-gov-grey-border"
                  }`}
                />
                {errors.full_name && (
                  <p className="mt-1 text-xs text-gov-danger font-body">
                    {errors.full_name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-body font-medium text-gov-black mb-1"
                >
                  {t("emailAddress")} *
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className={`w-full h-10 px-3 border rounded-gov text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary-green ${
                    errors.email ? "border-gov-danger" : "border-gov-grey-border"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-gov-danger font-body">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-body font-medium text-gov-black mb-1"
                >
                  {t("phoneNumber")}
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  placeholder="+254..."
                  className="w-full h-10 px-3 border border-gov-grey-border rounded-gov text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary-green"
                />
              </div>

              {/* Department */}
              <div>
                <label
                  htmlFor="department"
                  className="block text-sm font-body font-medium text-gov-black mb-1"
                >
                  {t("department")} *
                </label>
                <select
                  id="department"
                  value={formData.department}
                  onChange={(e) => updateField("department", e.target.value)}
                  className={`w-full h-10 px-3 border rounded-gov text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary-green ${
                    errors.department ? "border-gov-danger" : "border-gov-grey-border"
                  }`}
                >
                  <option value="">{t("selectDepartment")}</option>
                  <option value="general">{t("generalEnquiry")}</option>
                  {DEPARTMENTS.filter((d) => !d.isExternal).map((d) => (
                    <option key={d.id} value={d.name}>
                      {d.name}
                    </option>
                  ))}
                </select>
                {errors.department && (
                  <p className="mt-1 text-xs text-gov-danger font-body">
                    {errors.department}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-body font-medium text-gov-black mb-1"
                >
                  {t("subject")} *
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => updateField("subject", e.target.value)}
                  maxLength={100}
                  className={`w-full h-10 px-3 border rounded-gov text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary-green ${
                    errors.subject ? "border-gov-danger" : "border-gov-grey-border"
                  }`}
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-gov-danger font-body">
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-body font-medium text-gov-black mb-1"
                >
                  {t("message")} *
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  rows={6}
                  maxLength={1000}
                  className={`w-full px-3 py-2 border rounded-gov text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary-green resize-vertical ${
                    errors.message ? "border-gov-danger" : "border-gov-grey-border"
                  }`}
                />
                <div className="flex justify-between mt-1">
                  {errors.message ? (
                    <p className="text-xs text-gov-danger font-body">
                      {errors.message}
                    </p>
                  ) : (
                    <span />
                  )}
                  <span className="text-xs text-gov-grey-mid font-body">
                    {formData.message.length}/1000 {t("characters")}
                  </span>
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-green text-white font-body font-semibold text-sm rounded-gov hover:bg-primary-blue transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                {status === "sending" ? t("sending") : t("sendMessage")}
              </button>
            </form>
          </div>

          {/* Contact Details — 40% */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {/* Physical Address */}
              <div className="bg-gov-grey-light border border-gov-grey-border rounded-gov p-5">
                <h3 className="text-sm font-body font-semibold text-gov-black uppercase tracking-wider mb-3">
                  {t("physicalAddress")}
                </h3>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-accent-gold mt-0.5 shrink-0" />
                  <div className="text-sm font-body text-gov-grey-mid leading-relaxed">
                    <p>{CONTACT_INFO.address}</p>
                    <p>{CONTACT_INFO.street}</p>
                    <p>{CONTACT_INFO.town}</p>
                    <p>{CONTACT_INFO.country}</p>
                  </div>
                </div>
              </div>

              {/* Mailing */}
              <div className="bg-gov-grey-light border border-gov-grey-border rounded-gov p-5">
                <h3 className="text-sm font-body font-semibold text-gov-black uppercase tracking-wider mb-3">
                  {t("mailingAddress")}
                </h3>
                <p className="text-sm font-body text-gov-grey-mid">
                  {CONTACT_INFO.poBox}
                </p>
              </div>

              {/* Contact Details */}
              <div className="bg-gov-grey-light border border-gov-grey-border rounded-gov p-5 space-y-3">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-accent-gold shrink-0" />
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="text-sm font-body text-gov-grey-mid hover:text-primary-green transition-colors"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-accent-gold shrink-0" />
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-sm font-body text-gov-grey-mid hover:text-primary-green transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-accent-gold shrink-0" />
                  <div>
                    <p className="text-xs text-gov-grey-mid font-body">
                      {t("ictEmail")}
                    </p>
                    <a
                      href={`mailto:${CONTACT_INFO.ictEmail}`}
                      className="text-sm font-body text-gov-grey-mid hover:text-primary-green transition-colors"
                    >
                      {CONTACT_INFO.ictEmail}
                    </a>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="bg-gov-grey-light border border-gov-grey-border rounded-gov p-5">
                <h3 className="text-sm font-body font-semibold text-gov-black uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent-gold" />
                  {t("openingHours")}
                </h3>
                <div className="text-sm font-body text-gov-grey-mid space-y-1">
                  <p>{t("weekdays")}</p>
                  <p>{t("weekends")}</p>
                  <p>{t("holidays")}</p>
                </div>
              </div>

              {/* Google Maps */}
              <div className="rounded-gov overflow-hidden border border-gov-grey-border">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.8!2d${CONTACT_INFO.mapLng}!3d${CONTACT_INFO.mapLat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMjcnMzguMiJOIDM0wrAwNic0MS4wIkU!5e0!3m2!1sen!2ske!4v1704000000000!5m2!1sen!2ske`}
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="County Government of Busia location"
                />
              </div>

              {/* Social */}
              <div>
                <h3 className="text-sm font-body font-semibold text-gov-black uppercase tracking-wider mb-3">
                  {t("followUs")}
                </h3>
                <div className="flex gap-2">
                  <a
                    href={CONTACT_INFO.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="p-2.5 bg-primary-green text-white rounded-gov hover:bg-primary-blue transition-colors"
                  >
                    <FacebookIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={CONTACT_INFO.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="p-2.5 bg-primary-green text-white rounded-gov hover:bg-primary-blue transition-colors"
                  >
                    <TwitterIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={CONTACT_INFO.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="p-2.5 bg-primary-green text-white rounded-gov hover:bg-primary-blue transition-colors"
                  >
                    <YoutubeIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
