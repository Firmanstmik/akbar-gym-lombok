"use client";

import { Check } from "lucide-react";
import { useI18n } from "@/i18n/LocaleProvider";
import { Reveal } from "./Reveal";
import { Btn } from "./Btn";
import { MediaImage } from "./MediaImage";

export function FindGym() {
  const { t } = useI18n();

  return (
    <section className="bg-white py-12 text-ink md:py-20">
      <div className="ff-wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal variant="left">
          <h2 className="type-h2 text-[#222]">
            {t.findGym.title}
          </h2>
          <p className="mt-6 type-body text-[#444]">{t.findGym.intro}</p>
          <ul className="mt-6 space-y-3.5">
            {t.findGym.points.map((point) => (
              <li key={point} className="flex items-start gap-3 type-body text-[#333]">
                <Check
                  className="mt-0.5 size-5 shrink-0 text-brand"
                  strokeWidth={2.75}
                  aria-hidden
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Btn href="#location">{t.findGym.cta}</Btn>
          </div>
        </Reveal>

        <Reveal variant="clip">
          <div className="relative aspect-[16/11] overflow-hidden rounded-[20px] bg-ink">
            <MediaImage
              src="/images/akbar-gym/generated/find-gym.webp"
              alt={t.findGym.alt}
              fill
              quality={85}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
