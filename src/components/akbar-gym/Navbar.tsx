"use client";

import { useEffect, useState } from "react";
import { CalendarDays, CircleUser, MapPin, Menu, X } from "lucide-react";
import { useI18n } from "@/i18n/LocaleProvider";
import { NAV_LINKS } from "@/lib/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Btn } from "./Btn";
import { LanguageSwitch } from "./LanguageSwitch";
import { Logo } from "./Logo";
import { Topbar } from "./Topbar";
import { WhatsAppCTA } from "./WhatsAppCTA";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { locale, t } = useI18n();
  const wa = getWhatsAppUrl("join", locale);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="site-header">
      <Topbar />
      <div className="site-nav">
        <div className="site-nav-inner">
          <Logo onClick={() => setOpen(false)} />

          <div className="site-nav-cluster">
            <nav className="site-nav-links" aria-label="Primary">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="nav-link">
                  {t.nav[link.key]}
                </a>
              ))}
            </nav>

            <div className="site-nav-end">
              {wa ? (
                <Btn href={wa} external className="nav-join">
                  {t.joinNow}
                </Btn>
              ) : null}

              <div className="nav-utils">
                <a href="#membership" className="nav-tool">
                  <CalendarDays strokeWidth={1.5} className="size-[1.4rem]" />
                  <span className="nav-tool-label">{t.nav.timetable}</span>
                </a>
                <a href="#location" className="nav-tool">
                  <MapPin strokeWidth={1.5} className="size-[1.4rem]" />
                  <span className="nav-tool-label">{t.nav.locations}</span>
                </a>
                {wa ? (
                  <a
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-tool"
                  >
                    <CircleUser strokeWidth={1.5} className="size-[1.4rem]" />
                    <span className="nav-tool-label">{t.nav.profile}</span>
                  </a>
                ) : null}
              </div>

              <LanguageSwitch />
            </div>
          </div>

          <div className="site-nav-mobile">
            <button
              type="button"
              className={`nav-burger ${open ? "is-open" : ""}`}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? t.closeMenu : t.openMenu}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-6" strokeWidth={1.75} /> : <Menu className="size-6" strokeWidth={1.75} />}
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={`mobile-sheet ${open ? "is-open" : ""}`}
          aria-hidden={!open}
        >
          <div className="mobile-sheet-inner">
            <p className="mobile-sheet-kicker">{t.hero.tagline}</p>
            <nav className="mobile-sheet-nav" aria-label="Mobile">
              {NAV_LINKS.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="mobile-sheet-link"
                  onClick={() => setOpen(false)}
                >
                  <span className="mobile-sheet-index">{String(index + 1).padStart(2, "0")}</span>
                  <span>{t.nav[link.key]}</span>
                </a>
              ))}
            </nav>

            <div className="mobile-sheet-meta">
              <a href="#location" className="mobile-sheet-chip" onClick={() => setOpen(false)}>
                <MapPin className="size-4" strokeWidth={2} aria-hidden />
                {t.hero.locations}
              </a>
              <LanguageSwitch variant="sheet" />
            </div>

            <WhatsAppCTA intent="join" className="mobile-sheet-cta">
              {t.joinAkbar}
            </WhatsAppCTA>
          </div>
        </div>
      </div>
    </header>
  );
}
