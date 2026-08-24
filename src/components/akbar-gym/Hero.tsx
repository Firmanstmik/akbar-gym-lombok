"use client";

import { useEffect, useState } from "react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { heroSlides } from "@/data/content";
import { useI18n } from "@/i18n/LocaleProvider";
import { MediaImage } from "./MediaImage";
import { WhatsAppCTA } from "./WhatsAppCTA";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export function Hero() {
  const { t } = useI18n();
  const [ready, setReady] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReady(true);
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <section
      id="top"
      className="hero-stage relative flex items-center overflow-hidden bg-ink"
    >
      <div className="absolute inset-0">
        {ready ? (
          <Swiper
            className="hero-swiper h-full w-full"
            modules={[Autoplay, EffectFade, Pagination]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop
            speed={1100}
            autoplay={
              reduceMotion
                ? false
                : { delay: 4800, disableOnInteraction: false, pauseOnMouseEnter: true }
            }
            pagination={{ clickable: true }}
          >
            {heroSlides.map((slide, index) => (
              <SwiperSlide key={slide.id}>
                <div className="hero-stage relative h-full w-full">
                  <MediaImage
                    src={slide.src}
                    alt={t.heroAlts[slide.id]}
                    fill
                    priority={index === 0}
                    quality={index === 0 ? 90 : 85}
                    sizes="100vw"
                    className="hero-kenburns object-cover object-[center_28%]"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <MediaImage
            src={heroSlides[0].src}
            alt={t.heroAlts[heroSlides[0].id]}
            fill
            priority
            quality={90}
            sizes="100vw"
            className="hero-kenburns object-cover object-[center_28%]"
          />
        )}
        <div className="pointer-events-none absolute inset-0 hero-veil bg-black/35" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 hero-veil delay-100 bg-gradient-to-r from-black/78 via-black/35 to-transparent"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[82.5rem] px-5 py-16 md:px-8 md:py-24 lg:py-28">
        <div className="max-w-[46.15rem]">
          <p className="hero-enter mb-5 inline-flex items-center gap-3 type-caption font-semibold uppercase text-white">
            <span className="hero-star" aria-hidden />
            <span>
              {t.hero.region}
              <span className="mt-0.5 block text-[12px] font-normal tracking-normal text-white/75">
                {t.hero.locations}
              </span>
            </span>
          </p>
          <h1 className="hero-enter delay-180 type-hero text-white">
            {t.hero.tagline}
          </h1>
          <p className="hero-enter delay-320 mt-6 type-body text-white/90">
            {t.hero.description}
          </p>
          <div className="hero-enter delay-480 mt-7 md:mt-8">
            <WhatsAppCTA intent="join" className="w-full max-w-xs sm:w-auto">
              {t.joinAkbar}
            </WhatsAppCTA>
          </div>
        </div>
      </div>
    </section>
  );
}
