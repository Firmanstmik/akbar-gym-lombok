"use client";

import { Dumbbell, Handshake, MapPin, Users, Waves } from "lucide-react";
import { useI18n } from "@/i18n/LocaleProvider";
import { Reveal } from "./Reveal";
import { Btn } from "./Btn";

const pillarIcons = [Dumbbell, Handshake, Users, MapPin, Waves] as const;

export function Inspired() {
  const { t } = useI18n();

  return (
    <section id="about" className="bg-white py-16 text-ink md:py-24">
      <div className="ff-wrap">
        <Reveal>
          <h2 className="max-w-[46.15rem] type-h2">
            {t.inspired.title}
            <span className="mt-1 block">{t.inspired.titleLine2}</span>
          </h2>
          <p className="mt-4 type-body text-[#555]">{t.inspired.intro}</p>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {t.inspired.pillars.map((item, i) => {
            const Icon = pillarIcons[i];
            return (
              <Reveal key={item.title} delayMs={i * 70}>
                <div className="border-t border-black/10 pt-5">
                  <Icon className="size-7 text-brand" strokeWidth={1.6} aria-hidden />
                  <h3 className="mt-4 type-h4">
                    {item.title}
                  </h3>
                  <p className="mt-2 type-body text-ink/60">{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delayMs={120}>
          <div className="mt-12">
            <Btn href="#membership" variant="on-light">
              {t.inspired.cta}
            </Btn>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
