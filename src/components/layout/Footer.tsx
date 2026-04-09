import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
} from "lucide-react";
import { FacebookIcon, TwitterIcon, YoutubeIcon } from "@/components/ui/SocialIcons";
import { DEPARTMENTS, CONTACT_INFO, EXTERNAL_LINKS } from "@/lib/constants";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-primary-blue text-white font-body relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 hero-pattern opacity-5 pointer-events-none" />
      
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Column 1 — Brand Identity */}
          <div className="space-y-8">
            <Link href="/" className="flex flex-col gap-4">
              <div className="relative w-20 h-20">
                <Image
                  src="/images/branding/logo-white.png"
                  alt="Busia County Government"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="border-l-2 border-primary-green pl-4">
                <p className="text-[10px] text-white/60 tracking-[0.2em] font-bold uppercase leading-tight">
                  {t("site.countyGovernmentOf")}
                </p>
                <p className="text-2xl font-display font-black text-white uppercase tracking-tighter">
                  Busia
                </p>
              </div>
            </Link>
            
            <p className="text-sm text-white/70 leading-relaxed italic">
              &ldquo;{t("site.tagline")}&rdquo;
            </p>
            
            <div className="flex items-center gap-4">
              <a href="#" className="p-2.5 bg-white/5 rounded-full hover:bg-primary-green transition-all duration-300">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 bg-white/5 rounded-full hover:bg-primary-green transition-all duration-300">
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 bg-white/5 rounded-full hover:bg-primary-green transition-all duration-300">
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2 — Citizen Portal */}
          <div>
            <h3 className="text-xs font-bold text-white/40 uppercase tracking-[0.2em] mb-8 border-b border-white/10 pb-2">
              {t("footer.citizenServices")}
            </h3>
            <ul className="space-y-4">
              <FooterLink href="/tenders" label={t("nav.tenders")} />
              <FooterLink href="/vacancies" label={t("nav.vacancies")} />
              <FooterLink href="/resources/budgets" label={t("nav.budgetDocuments")} />
              <FooterLink href="/resources/documents" label={t("nav.allDownloads")} />
              <FooterLink href="/contact" label={t("nav.contact")} />
              <li>
                <a
                  href="https://www.ecitizen.go.ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  {t("footer.eCitizen")}
                  <ExternalLink className="w-3.5 h-3.5 text-primary-green opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 — Administration */}
          <div>
            <h3 className="text-xs font-bold text-white/40 uppercase tracking-[0.2em] mb-8 border-b border-white/10 pb-2">
              Administration
            </h3>
            <ul className="space-y-3">
              {DEPARTMENTS.slice(0, 8).map((dept) => (
                <li key={dept.id}>
                  <Link
                    href={`/departments/${dept.slug}`}
                    className="text-xs text-white/50 hover:text-white transition-colors leading-snug block py-1"
                  >
                    {dept.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Headquarters */}
          <div>
            <h3 className="text-xs font-bold text-white/40 uppercase tracking-[0.2em] mb-8 border-b border-white/10 pb-2">
              {t("footer.getInTouch")}
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="mt-1 p-2 bg-white/5 rounded-lg group-hover:bg-primary-green transition-colors">
                  <MapPin className="w-4 h-4 text-primary-green" />
                </div>
                <div>
                  <p className="text-xs text-white/40 font-bold uppercase tracking-wider mb-1">Office</p>
                  <p className="text-sm text-white/80">{t("footer.address")}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="mt-1 p-2 bg-white/5 rounded-lg group-hover:bg-primary-green transition-colors">
                  <Phone className="w-4 h-4 text-primary-green" />
                </div>
                <div>
                  <p className="text-xs text-white/40 font-bold uppercase tracking-wider mb-1">Hotline</p>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="text-sm text-white font-bold hover:text-primary-green transition-colors">
                    +254 700 106 517
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="mt-1 p-2 bg-white/5 rounded-lg group-hover:bg-primary-green transition-colors">
                  <Mail className="w-4 h-4 text-primary-green" />
                </div>
                <div>
                  <p className="text-xs text-white/40 font-bold uppercase tracking-wider mb-1">Email</p>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm text-white/80 hover:text-white transition-colors">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Strip */}
      <div className="border-t border-white/5 bg-gov-black/20">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-body text-white/40">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p>&copy; {new Date().getFullYear()} {t("footer.copyright")}</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors uppercase tracking-widest font-bold font-body">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors uppercase tracking-widest font-bold font-body">Terms</Link>
              <Link href="/accessibility" className="hover:text-white transition-colors uppercase tracking-widest font-bold font-body">Accessibility</Link>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://mail.busiacounty.go.ke" target="_blank" className="flex items-center gap-2 hover:text-white transition-colors font-bold uppercase tracking-widest border border-white/10 px-4 py-1.5 rounded-full font-body">
              Staff Portal
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-white/60 hover:text-white hover:translate-x-1 transition-all duration-300 block font-body"
      >
        {label}
      </Link>
    </li>
  );
}
