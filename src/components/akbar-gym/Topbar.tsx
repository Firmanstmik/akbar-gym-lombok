"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { useI18n } from "@/i18n/LocaleProvider";

export function Topbar() {
  const [open, setOpen] = useState(true);
  const { t } = useI18n();

  if (!open) return null;

  return (
    <div className="relative hidden bg-black text-[12px] font-medium text-white lg:block">
      <div className="mx-auto flex h-9 max-w-[90rem] items-center justify-center px-12 md:px-16">
        <p className="min-w-0 truncate tracking-wide">{t.topbar}</p>
        <button
          type="button"
          className="absolute right-4 grid size-8 place-items-center text-white/70 transition-colors duration-200 hover:text-white cursor-pointer focus-visible:outline-brand md:right-8"
          aria-label={t.closeAnnouncement}
          onClick={() => setOpen(false)}
        >
          <X className="size-3.5" strokeWidth={1.75} />
        </button>
      </div>
    </div>
  );
}
