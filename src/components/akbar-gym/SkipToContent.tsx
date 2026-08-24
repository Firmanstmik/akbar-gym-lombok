"use client";

import { useI18n } from "@/i18n/LocaleProvider";

export function SkipToContent() {
  const { t } = useI18n();

  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-brand focus:px-4 focus:py-2 focus:text-ink"
    >
      {t.skip}
    </a>
  );
}
