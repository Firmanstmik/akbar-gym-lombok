"use client";

import { ChevronLeft } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { useI18n } from "@/i18n/LocaleProvider";

export function SideRail() {
  const { locale, t } = useI18n();
  const href = getWhatsAppUrl("join", locale);
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="side-rail hidden lg:flex"
    >
      <ChevronLeft className="size-3.5 shrink-0" aria-hidden />
      {t.joinAkbar}
    </a>
  );
}

export function ChatFab() {
  const { locale, t } = useI18n();
  const href = getWhatsAppUrl("general", locale);
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="chat-fab"
      aria-label={t.chatWhatsApp}
    >
      <span className="chat-fab-pulse" aria-hidden />
      <svg viewBox="0 0 24 24" className="relative z-[1] size-7" aria-hidden>
        <path
          fill="currentColor"
          d="M12 3c-4.8 0-8.6 3.4-8.6 7.5 0 2.5 1.4 4.7 3.6 6.1-.1.6-.5 1.7-1.6 2.9-.1.1 0 .3.2.3 1.8-.1 3.1-1.1 3.7-1.6.8.2 1.7.3 2.7.3 4.8 0 8.6-3.4 8.6-7.5S16.8 3 12 3Z"
        />
        <circle cx="8.2" cy="10.5" r="1.15" fill="#e86324" />
        <circle cx="12" cy="10.5" r="1.15" fill="#e86324" />
        <circle cx="15.8" cy="10.5" r="1.15" fill="#e86324" />
      </svg>
    </a>
  );
}
