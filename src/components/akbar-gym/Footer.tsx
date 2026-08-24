"use client";

import { NAV_LINKS, SITE, SOCIAL_LINKS, WHATSAPP_DISPLAY } from "@/lib/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { useI18n } from "@/i18n/LocaleProvider";
import { Logo } from "./Logo";
import { WhatsAppCTA } from "./WhatsAppCTA";

function FooterLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      className="block text-[13px] font-extrabold uppercase tracking-[0.06em] text-white transition-colors duration-200 hover:text-brand cursor-pointer focus-visible:outline-brand"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : undefined)}
    >
      {children}
    </a>
  );
}

export function Footer() {
  const year = 2026;
  const { locale, t } = useI18n();
  const wa = getWhatsAppUrl("join", locale);

  const train = [
    { href: "#membership", label: t.footer.dailyPass },
    { href: "#membership", label: t.nav.membership },
    { href: "#personal-training", label: t.nav.personalTraining },
    { href: "#join", label: t.joinAkbar },
  ] as const;

  const connect = [
    { href: SITE.instagram.url, label: "Instagram", external: true },
    { href: SITE.facebook.url, label: "Facebook", external: true },
    { href: SITE.tiktok.url, label: "TikTok", external: true },
    { href: getWhatsAppUrl("general", locale) ?? "#join", label: "WhatsApp", external: true },
    { href: "#location", label: "Sengkol", external: false },
    { href: "#location", label: "Praya", external: false },
  ] as const;

  return (
    <footer
      id="join"
      className="bg-[#1a1a1a] pb-24 pt-14 text-white md:pb-10 md:pt-16"
    >
      <div className="mx-auto grid max-w-[90rem] gap-12 px-5 lg:grid-cols-12 lg:gap-16 lg:px-10">
        <div className="lg:col-span-7">
          <Logo variant="dark" />

          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{t.nav[link.key]}</FooterLink>
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {train.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {connect.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href} external={link.external}>
                    {link.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex items-center gap-5">
            {SOCIAL_LINKS.map((network) => (
              <a
                key={network.id}
                href={network.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors duration-200 hover:text-brand cursor-pointer focus-visible:outline-brand"
                aria-label={`${network.label} ${network.handle}`}
              >
                {network.id === "instagram" ? (
                  <svg viewBox="0 0 24 24" className="size-6 fill-current" aria-hidden>
                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
                  </svg>
                ) : network.id === "facebook" ? (
                  <svg viewBox="0 0 24 24" className="size-6 fill-current" aria-hidden>
                    <path d="M14 13.5h2.5l.5-3H14V8.5c0-.8.2-1.3 1.4-1.3H17V4.1C16.7 4 15.6 4 14.4 4 11.8 4 10 5.6 10 8.7V10.5H7.5v3H10V20h4z" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" className="size-6 fill-current" aria-hidden>
                    <path d="M16.6 5.8c-.8.7-1.7 1.1-2.7 1.3V16a5 5 0 1 1-5-5c.2 0 .5 0 .7.1V14a2.1 2.1 0 1 0 1.5 2V2h2.4c.2 2.2 1.4 3.2 2.6 3.8h.5Z" />
                  </svg>
                )}
              </a>
            ))}
            {wa ? (
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors duration-200 hover:text-brand cursor-pointer focus-visible:outline-brand"
                aria-label={`WhatsApp ${WHATSAPP_DISPLAY}`}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="size-6 fill-current"
                  aria-hidden
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            ) : null}
          </div>
        </div>

        <div className="lg:col-span-5">
          <h2 className="type-h2 text-white">
            {t.footer.stay}
          </h2>
          <p className="mt-4 type-body text-white/70">{t.footer.stayBody}</p>
          <div className="mt-6">
            <WhatsAppCTA
              intent="join"
              className="!w-full !justify-center !min-h-12"
            >
              {t.footer.whatsappUs}
            </WhatsAppCTA>
          </div>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.08em] text-white">
            {t.footer.followFloor}
          </p>
          <a
            href={SITE.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-sm text-white/70 transition-colors duration-200 hover:text-brand cursor-pointer focus-visible:outline-brand"
          >
            Instagram {SITE.instagram.handle}
          </a>
          <p className="mt-6 text-sm text-white/45">{t.footer.locationsLine}</p>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-[90rem] border-t border-white/10 px-5 pt-6 text-xs text-white/40 lg:px-10">
        <p>
          © {year} {SITE.name}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
