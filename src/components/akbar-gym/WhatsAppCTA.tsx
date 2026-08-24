"use client";

import type { WhatsAppIntent } from "@/lib/whatsapp";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { useI18n } from "@/i18n/LocaleProvider";
import { Btn } from "./Btn";
import { ArrowUpRight } from "lucide-react";

type Props = {
  intent?: WhatsAppIntent;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "on-light" | "on-orange" | "secondary-dark";
  showIcon?: boolean;
};

export function WhatsAppCTA({
  intent = "general",
  children,
  className = "",
  variant = "primary",
  showIcon = false,
}: Props) {
  const { locale } = useI18n();
  const href = getWhatsAppUrl(intent, locale);

  if (!href) {
    return (
      <span
        className={`btn-swipe btn-swipe-primary opacity-60 cursor-not-allowed ${className}`}
        title="WhatsApp number pending verification"
      >
        <span className="btn-swipe-label">{children}</span>
      </span>
    );
  }

  const mapped =
    variant === "secondary"
      ? "secondary"
      : variant === "on-light"
        ? "on-light"
        : variant === "on-orange"
          ? "on-orange"
          : variant === "secondary-dark"
            ? "secondary-dark"
            : "primary";

  return (
    <Btn href={href} external variant={mapped} className={className}>
      {children}
      {showIcon ? <ArrowUpRight className="size-4 shrink-0" aria-hidden /> : null}
    </Btn>
  );
}
