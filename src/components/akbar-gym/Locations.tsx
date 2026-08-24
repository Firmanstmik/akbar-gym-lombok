"use client";

import { locations } from "@/data/content";
import { useI18n } from "@/i18n/LocaleProvider";
import { Reveal } from "./Reveal";
import { Btn } from "./Btn";
import { MediaImage } from "./MediaImage";
import { WhatsAppCTA } from "./WhatsAppCTA";

export function Locations() {
  const { t } = useI18n();

  return (
    <section id="location" className="bg-white py-20 text-ink md:py-28 lg:py-32">
      <div className="ff-wrap">
        <Reveal>
          <div className="max-w-[46.15rem]">
            <p className="type-caption font-semibold uppercase text-brand">
              {t.locations.kicker}
            </p>
            <h2 className="mt-4 type-h2">
              {t.locations.title}
            </h2>
            <p className="mt-5 type-body text-ink/65">{t.locations.intro}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {locations.map((loc, i) => {
            const copy = loc.id === "sengkol" ? t.locations.sengkol : t.locations.praya;
            return (
              <Reveal key={loc.id} delayMs={i * 90} variant="scale">
                <article className="flex h-full flex-col overflow-hidden bg-[#f4f4f4]">
                  <div className="relative aspect-[16/9]">
                    <MediaImage
                      src={loc.image}
                      alt={copy.alt}
                      fill
                      quality={85}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <p className="absolute left-4 top-4 bg-brand px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                      {copy.region}
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <h3 className="type-h3">
                      {loc.name}
                    </h3>
                    <p className="mt-3 type-body text-ink/75">{copy.note}</p>
                    <p className="mt-4 text-sm leading-relaxed text-ink/55">
                      {loc.addressListed}
                      <span className="mt-2 block text-xs uppercase tracking-[0.12em]">
                        {t.locations.confirm}
                      </span>
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <Btn href={loc.mapsUrl} external variant="on-light">
                        {t.locations.maps}
                      </Btn>
                      <WhatsAppCTA intent={loc.intent}>{t.locations.directions}</WhatsAppCTA>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
