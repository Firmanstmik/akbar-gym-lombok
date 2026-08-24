"use client";

import { useI18n } from "@/i18n/LocaleProvider";
import { MediaImage } from "./MediaImage";
import { Reveal } from "./Reveal";
import { WhatsAppCTA } from "./WhatsAppCTA";

export function PersonalTraining() {
  const { t } = useI18n();

  return (
    <section id="personal-training" className="bg-white py-16 text-[#222] md:py-24">
      <div className="ff-wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal variant="left">
          <h2 className="type-h2">
            {t.pt.title}
          </h2>
          <p className="mt-6 max-w-xl type-body text-[#555]">{t.pt.body}</p>
          <div className="mt-8">
            <WhatsAppCTA intent="consultation">{t.pt.cta}</WhatsAppCTA>
          </div>
        </Reveal>

        <Reveal variant="clip">
          <div className="relative aspect-[16/11] overflow-hidden rounded-[20px] bg-ink">
            <MediaImage
              src="/images/akbar-gym/generated/card-personal-training.webp"
              alt={t.pt.alt}
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
