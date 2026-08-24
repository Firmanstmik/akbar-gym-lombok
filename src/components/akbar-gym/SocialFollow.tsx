"use client";

import { SOCIAL_LINKS } from "@/lib/site";
import { galleryItems } from "@/data/content";
import { useI18n } from "@/i18n/LocaleProvider";
import { MediaImage } from "./MediaImage";

const feed = galleryItems.map((item, index) => {
  const network = SOCIAL_LINKS[index % SOCIAL_LINKS.length];
  return { ...item, network };
});

const loop = [...feed, ...feed];

export function SocialFollow() {
  const { t } = useI18n();

  return (
    <section id="social" className="scroll-mt-28 overflow-hidden bg-white pb-0 pt-16 md:pt-20">
      <h2 className="px-5 text-center type-h2 text-ink">
        {t.social.title}
      </h2>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 px-5 type-caption font-semibold uppercase">
        {SOCIAL_LINKS.map((network) => (
          <a
            key={network.id}
            href={network.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink/55 transition-colors duration-200 hover:text-brand cursor-pointer focus-visible:outline-brand"
          >
            {network.label}
          </a>
        ))}
      </div>

      <div className="social-marquee mt-8">
        <div className="social-marquee-track">
          {loop.map((item, index) => (
            <a
              key={`${item.id}-${index}`}
              href={item.network.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-marquee-card group relative overflow-hidden bg-ink cursor-pointer focus-visible:outline-brand"
              aria-label={`${item.alt}, ${item.network.label}`}
            >
              <MediaImage
                src={item.src}
                alt={item.alt}
                fill
                quality={60}
                sizes="280px"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
              />
              <span
                className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-ink/0"
                aria-hidden
              />
              <span className="absolute bottom-3 left-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white">
                {item.network.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
