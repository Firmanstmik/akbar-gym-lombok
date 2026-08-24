"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { useI18n } from "@/i18n/LocaleProvider";
import { WhatsAppCTA } from "./WhatsAppCTA";

export function MobileStickyCTA() {
  const [show, setShow] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`mobile-sticky md:hidden ${show ? "is-visible" : ""}`}
    >
      <WhatsAppCTA intent="join" className="mobile-sticky-btn">
        <MessageCircle className="size-4" aria-hidden />
        {t.joinAkbar}
      </WhatsAppCTA>
    </div>
  );
}
