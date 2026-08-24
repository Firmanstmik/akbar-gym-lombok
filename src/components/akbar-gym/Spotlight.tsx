"use client";

import { storyCards } from "@/data/content";
import { useI18n } from "@/i18n/LocaleProvider";
import { MediaImage } from "./MediaImage";
import { Reveal } from "./Reveal";

export function Spotlight() {
  const { t } = useI18n();

  return (
    <section className="bg-white py-8 md:py-12" aria-label={t.spotlightAria}>
      <div className="ff-wrap grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {storyCards.map((card, i) => {
          const copy = t.storyCards[card.id];
          return (
            <Reveal key={card.id} delayMs={i * 90} variant="scale">
              <a
                href={card.href}
                className="group relative block min-h-[22rem] overflow-hidden rounded-[20px] bg-ink cursor-pointer focus-visible:outline-brand md:min-h-[26rem]"
              >
                <MediaImage
                  src={card.image}
                  alt={copy.alt}
                  fill
                  quality={85}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10"
                  aria-hidden
                />
                <div className="absolute inset-x-0 bottom-0 flex flex-col p-6 md:p-8">
                  <h3 className="type-h3 text-white">
                    {copy.kicker}
                  </h3>
                  <p className="mt-3 type-body text-white/90">{copy.text}</p>
                  <span className="mt-5 inline-block w-fit text-[13px] font-semibold text-white underline decoration-white/80 decoration-1 underline-offset-[6px] transition-[text-decoration-color,transform] duration-200 group-hover:decoration-brand group-hover:translate-x-0.5">
                    {t.learnMore}
                  </span>
                </div>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
