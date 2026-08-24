"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useI18n } from "@/i18n/LocaleProvider";
import type { Locale } from "@/i18n/messages";

export function LanguageSwitch({
  className = "",
  variant = "nav",
}: {
  className?: string;
  variant?: "nav" | "sheet";
}) {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onPointer = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const options: { code: Locale; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "id", label: "ID" },
  ];

  if (variant === "sheet") {
    return (
      <div className={`lang-sheet ${className}`} role="group" aria-label={t.language}>
        {options.map((option) => (
          <button
            key={option.code}
            type="button"
            className={`lang-sheet-btn ${locale === option.code ? "is-active" : ""}`}
            onClick={() => setLocale(option.code)}
          >
            {option.label}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div ref={rootRef} className={`lang-ff ${className}`}>
      <button
        type="button"
        className="lang-ff-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.language}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{locale === "en" ? "EN" : "ID"}</span>
        <ChevronDown className={`size-3.5 opacity-70 transition-transform duration-200 ${open ? "rotate-180" : ""}`} strokeWidth={2} />
      </button>
      {open ? (
        <ul className="lang-ff-list" role="listbox">
          {options.map((option) => (
            <li key={option.code} role="none">
              <button
                type="button"
                role="option"
                aria-selected={locale === option.code}
                className={`lang-ff-option ${locale === option.code ? "is-active" : ""}`}
                onClick={() => {
                  setLocale(option.code);
                  setOpen(false);
                }}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
