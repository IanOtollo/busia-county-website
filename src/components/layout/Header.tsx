"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import {
  Phone,
  Mail,
  Menu,
  X,
  Search,
  ChevronDown,
  ExternalLink,
} from "lucide-react";
import { FacebookIcon, TwitterIcon, YoutubeIcon } from "@/components/ui/SocialIcons";
import { DEPARTMENTS, NAV_STRUCTURE, CONTACT_INFO } from "@/lib/constants";

export default function Header() {
  const t = useTranslations();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sticky, setSticky] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 44);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (searchQuery.trim()) {
        window.location.href = `/en/search?q=${encodeURIComponent(searchQuery.trim())}`;
      }
    },
    [searchQuery]
  );

  return (
    <header>
      {/* Utility Bar */}
      <div className="bg-primary-green text-white text-[13px] font-body">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-11">
          <div className="flex items-center gap-4">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-white/80 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{CONTACT_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center gap-1.5 hover:text-white/80 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{CONTACT_INFO.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 border-r border-white/20 pr-4">
              <a
                href={CONTACT_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-white/80 transition-colors"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={CONTACT_INFO.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-white/80 transition-colors"
              >
                <TwitterIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={CONTACT_INFO.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:text-white/80 transition-colors"
              >
                <YoutubeIcon className="w-3.5 h-3.5" />
              </a>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`bg-white/95 backdrop-blur-md border-b border-gov-grey-border shadow-sm transition-all duration-300 w-full ${
          sticky ? "fixed top-0 left-0 z-[100] animate-slide-down" : "relative z-[100]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 h-20 md:h-24 flex justify-between items-center">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative w-14 h-14 md:w-16 md:h-16 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/branding/logo.png"
                alt="Busia County Government"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="border-l border-gov-grey-border pl-4">
              <p className="text-[10px] md:text-xs font-body font-bold text-primary-green uppercase tracking-[0.2em] leading-tight">
                County Government of
              </p>
              <p className="text-xl md:text-2xl font-display font-black text-gov-black uppercase tracking-tighter">
                Busia
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            <Dropdown
              label={t("nav.about")}
              items={NAV_STRUCTURE.about.map((item) => ({
                href: item.href,
                label: t(`nav.${item.labelKey}`),
              }))}
              isOpen={activeDropdown === "about"}
              onToggle={() =>
                setActiveDropdown(activeDropdown === "about" ? null : "about")
              }
            />

            <Dropdown
              label={t("nav.departments")}
              items={DEPARTMENTS.filter((d) => !d.isExternal).map((d) => ({
                href: `/departments/${d.slug}`,
                label: d.name,
              }))}
              isOpen={activeDropdown === "departments"}
              onToggle={() =>
                setActiveDropdown(
                  activeDropdown === "departments" ? null : "departments"
                )
              }
              wide
            />

            <Dropdown
              label={t("nav.resources")}
              items={NAV_STRUCTURE.resources.map((item) => ({
                href: item.href,
                label: t(`nav.${item.labelKey}`),
              }))}
              isOpen={activeDropdown === "resources"}
              onToggle={() =>
                setActiveDropdown(
                  activeDropdown === "resources" ? null : "resources"
                )
              }
            />

            <Dropdown
              label={t("nav.media")}
              items={NAV_STRUCTURE.media.map((item) => ({
                href: item.href,
                label: t(`nav.${item.labelKey}`),
              }))}
              isOpen={activeDropdown === "media"}
              onToggle={() =>
                setActiveDropdown(activeDropdown === "media" ? null : "media")
              }
            />

            <NavLink href="/contact" label={t("nav.contact")} />
          </div>

          {/* Right side: Search + Mobile toggle */}
          <div className="flex items-center gap-2">
            {searchOpen ? (
              <form onSubmit={handleSearch} className="flex items-center">
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t("search.placeholder")}
                  className="w-48 lg:w-64 h-9 px-3 border border-gov-grey-border rounded-gov text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary-green"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="ml-2 p-1.5 text-gov-grey-mid hover:text-primary-green"
                  aria-label="Close search"
                >
                  <X className="w-5 h-5" />
                </button>
              </form>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 text-gov-grey-mid hover:text-primary-green transition-colors"
                aria-label={t("nav.search")}
              >
                <Search className="w-5 h-5" />
              </button>
            )}

            <button
              className="lg:hidden p-2 text-gov-black"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Sticky spacer */}
      {sticky && <div className="h-20 md:h-24 w-full block" />}

      {/* Mobile Menu */}
      {mobileOpen && (
        <MobileMenu onClose={() => setMobileOpen(false)} />
      )}
    </header>
  );
}

/* ===== Sub-Components ===== */

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="px-3 py-2 text-sm font-body font-medium text-gov-black hover:text-primary-green transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-primary-green after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
    >
      {label}
    </Link>
  );
}

interface DropdownItem {
  href: string;
  label: string;
  isExternal?: boolean;
}

function Dropdown({
  label,
  items,
  isOpen,
  onToggle,
  wide,
}: {
  label: string;
  items: DropdownItem[];
  isOpen: boolean;
  onToggle: () => void;
  wide?: boolean;
}) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 px-3 py-2 text-sm font-body font-medium text-gov-black hover:text-primary-green transition-colors"
        aria-expanded={isOpen}
      >
        {label}
        <ChevronDown
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div
          className={`absolute top-full left-0 mt-1 bg-white border border-gov-grey-border shadow-lg rounded-gov animate-slide-down z-50 ${
            wide ? "w-[340px]" : "w-64"
          }`}
        >
          <div className="py-1 max-h-[60vh] overflow-y-auto">
            {items.map((item) =>
              item.isExternal ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-2.5 text-sm font-body text-gov-black hover:bg-gov-green-light hover:text-primary-green transition-colors"
                >
                  <span>{item.label}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-gov-grey-mid" />
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2.5 text-sm font-body text-gov-black hover:bg-gov-green-light hover:text-primary-green transition-colors"
                  onClick={onToggle}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function LanguageSwitcher() {
  return (
    <div className="flex items-center gap-0.5 text-xs font-body font-medium">
      <a
        href="/en"
        className="px-1.5 py-0.5 rounded hover:bg-white/20 transition-colors"
      >
        EN
      </a>
      <span className="text-white/50">|</span>
      <a
        href="/sw"
        className="px-1.5 py-0.5 rounded hover:bg-white/20 transition-colors"
      >
        SW
      </a>
    </div>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  const t = useTranslations();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  return (
    <div className="fixed inset-0 z-[100] lg:hidden">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="absolute top-0 right-0 bottom-0 w-[300px] bg-white overflow-y-auto animate-slide-down">
        <div className="flex items-center justify-between p-4 border-b border-gov-grey-border">
          <div className="text-lg font-display font-bold text-primary-green">
            {t("nav.home")}
          </div>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 text-gov-black"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4">
          <Link
            href="/"
            className="block py-3 text-sm font-body font-medium text-gov-black border-b border-gov-grey-border"
            onClick={onClose}
          >
            {t("nav.home")}
          </Link>

          <MobileDropdown
            label={t("nav.about")}
            items={NAV_STRUCTURE.about.map((item) => ({
              href: item.href,
              label: t(`nav.${item.labelKey}`),
            }))}
            isExpanded={expandedSection === "about"}
            onToggle={() =>
              setExpandedSection(expandedSection === "about" ? null : "about")
            }
            onClose={onClose}
          />

          <MobileDropdown
            label={t("nav.departments")}
            items={DEPARTMENTS.filter((d) => !d.isExternal).map((d) => ({
              href: `/departments/${d.slug}`,
              label: d.name,
            }))}
            isExpanded={expandedSection === "departments"}
            onToggle={() =>
              setExpandedSection(
                expandedSection === "departments" ? null : "departments"
              )
            }
            onClose={onClose}
          />

          <MobileDropdown
            label={t("nav.resources")}
            items={NAV_STRUCTURE.resources.map((item) => ({
              href: item.href,
              label: t(`nav.${item.labelKey}`),
            }))}
            isExpanded={expandedSection === "resources"}
            onToggle={() =>
              setExpandedSection(
                expandedSection === "resources" ? null : "resources"
              )
            }
            onClose={onClose}
          />

          <MobileDropdown
            label={t("nav.media")}
            items={NAV_STRUCTURE.media.map((item) => ({
              href: item.href,
              label: t(`nav.${item.labelKey}`),
            }))}
            isExpanded={expandedSection === "media"}
            onToggle={() =>
              setExpandedSection(expandedSection === "media" ? null : "media")
            }
            onClose={onClose}
          />

          <Link
            href="/contact"
            className="block py-3 text-sm font-body font-medium text-gov-black border-b border-gov-grey-border"
            onClick={onClose}
          >
            {t("nav.contact")}
          </Link>
        </div>
      </div>
    </div>
  );
}

function MobileDropdown({
  label,
  items,
  isExpanded,
  onToggle,
  onClose,
}: {
  label: string;
  items: DropdownItem[];
  isExpanded: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  return (
    <div className="border-b border-gov-grey-border">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-3 text-sm font-body font-medium text-gov-black"
      >
        {label}
        <ChevronDown
          className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
        />
      </button>
      {isExpanded && (
        <div className="pb-2 pl-4">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2 text-sm font-body text-gov-grey-mid hover:text-primary-green transition-colors"
              onClick={onClose}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
