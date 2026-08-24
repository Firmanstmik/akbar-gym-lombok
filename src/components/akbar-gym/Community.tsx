"use client";

import Image from "next/image";
import { SITE } from "@/lib/site";
import { useI18n } from "@/i18n/LocaleProvider";
import { Reveal } from "./Reveal";

export function Community() {
  const { t } = useI18n();

  return (
    <section id="community" className="bg-[#f4f4f4] py-20 md:py-28 lg:py-32">
      <div className="ff-wrap">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-[46.15rem]">
              <p className="type-caption font-semibold uppercase text-brand">
                {t.community.kicker}
              </p>
              <h2 className="mt-4 type-h2 text-ink">
                {t.community.title}
              </h2>
            </div>
            <p className="max-w-sm type-body text-ink/60">
              {t.community.intro.split("{handle}")[0]}
              <a
                href={SITE.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand transition-colors duration-200 hover:text-brand-hover cursor-pointer focus-visible:outline-brand"
              >
                {SITE.instagram.handle}
              </a>
              {t.community.intro.split("{handle}")[1]}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-12 md:gap-5">
          <Reveal className="md:col-span-7" variant="clip">
            <div className="relative aspect-[16/11] overflow-hidden md:aspect-auto md:h-full md:min-h-[28rem]">
              <Image
                src="/images/akbar-gym/community/welcome-group-wide.webp"
                alt={t.community.alts.group}
                fill
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover object-center"
              />
            </div>
          </Reveal>
          <div className="grid gap-4 md:col-span-5">
            <Reveal delayMs={80} variant="scale">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/akbar-gym/community/women-training-wide.webp"
                  alt={t.community.alts.women}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-center"
                />
              </div>
            </Reveal>
            <Reveal delayMs={140} variant="scale">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/akbar-gym/community/community-atmosphere-wide.webp"
                  alt={t.community.alts.pose}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-center"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
