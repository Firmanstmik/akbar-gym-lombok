"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { trainingTracks } from "@/data/content";
import { useI18n } from "@/i18n/LocaleProvider";
import { Btn } from "./Btn";
import { MediaImage } from "./MediaImage";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

export function ClassCarousel() {
  const { t } = useI18n();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <section id="training-tracks" className="overflow-hidden bg-[#f3f3f3] py-16 text-[#2c2c2c] md:py-24">
      <div className="ff-wrap text-center">
        <h2 className="type-h2">
          {t.classes.title}
        </h2>
        <p className="mt-4 type-body text-[#555]">
          {t.classes.subtitle}
        </p>
      </div>

      <div className="class-swiper relative mx-auto mt-10 max-w-[100rem] md:mt-14">
        {ready ? (
          <Swiper
            modules={[EffectCoverflow, Navigation]}
            effect="coverflow"
            grabCursor
            centeredSlides
            loop
            speed={300}
            slidesPerView={1.15}
            spaceBetween={0}
            navigation={{
              prevEl: ".class-nav-prev",
              nextEl: ".class-nav-next",
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              768: { slidesPerView: 2.5 },
            }}
          >
            {trainingTracks.map((item) => {
              const copy = t.classes.tracks[item.id];
              return (
              <SwiperSlide key={item.id}>
                <article className="class-slide bg-white">
                  <div className="class-card-photo">
                    <MediaImage
                      src={item.image}
                      alt={copy.alt}
                      fill
                      quality={70}
                      sizes="(max-width: 768px) 90vw, 36vw"
                      className="object-cover"
                    />
                    <span className="class-card-kicker">{copy.category}</span>
                  </div>
                  <div className="class-card-body">
                    <h3>{copy.title}</h3>
                    <a href={item.href} className="class-card-link">
                      {t.classes.viewClass}
                    </a>
                  </div>
                </article>
              </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          <div className="mx-auto h-[28rem] max-w-xl bg-white" aria-hidden />
        )}

        <button type="button" className="class-nav class-nav-prev" aria-label={t.classes.prev}>
          <ChevronLeft className="size-5" strokeWidth={2.25} />
        </button>
        <button type="button" className="class-nav class-nav-next" aria-label={t.classes.next}>
          <ChevronRight className="size-5" strokeWidth={2.25} />
        </button>
      </div>

      <div className="mt-10 flex justify-center md:mt-14">
        <Btn href="#membership">{t.classes.cta}</Btn>
      </div>
    </section>
  );
}
