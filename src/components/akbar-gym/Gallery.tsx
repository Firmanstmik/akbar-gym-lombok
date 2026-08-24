"use client";

import { useCallback, useEffect, useId, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryItems } from "@/data/content";
import { MediaImage } from "./MediaImage";
import { Reveal } from "./Reveal";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const titleId = useId();

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => {
    setActive((i) =>
      i === null ? i : (i - 1 + galleryItems.length) % galleryItems.length,
    );
  }, []);
  const next = useCallback(() => {
    setActive((i) => (i === null ? i : (i + 1) % galleryItems.length));
  }, []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, prev, next]);

  return (
    <section id="gallery" className="bg-white py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand">
              Gallery
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-[0.95] tracking-[0.01em] text-ink md:text-5xl lg:text-[3.5rem]">
              Inside Akbar Gym.
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid auto-rows-[220px] grid-cols-1 gap-3 sm:grid-cols-2 md:auto-rows-[260px] lg:grid-cols-3 lg:gap-4">
          {galleryItems.map((item, index) => (
            <Reveal
              key={item.id}
              delayMs={index * 70}
              variant="scale"
              className={
                item.span === "wide"
                  ? "sm:col-span-2"
                  : item.span === "tall"
                    ? "md:row-span-2"
                    : ""
              }
            >
              <button
                type="button"
                onClick={() => setActive(index)}
                className="group relative h-full min-h-[220px] w-full overflow-hidden bg-ink cursor-pointer focus-visible:outline-brand"
                aria-label={`Open gallery image: ${item.alt}`}
              >
                <MediaImage
                  src={item.src}
                  alt={item.alt}
                  fill
                  quality={85}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                />
                <span
                  className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/25"
                  aria-hidden
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/95 p-4"
          onClick={close}
        >
          <p id={titleId} className="sr-only">
            {galleryItems[active].alt}
          </p>
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 z-10 inline-flex size-11 items-center justify-center text-warm transition-colors duration-200 hover:text-brand cursor-pointer focus-visible:outline-brand"
            aria-label="Close gallery"
          >
            <X className="size-7" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-2 top-1/2 z-10 inline-flex size-11 -translate-y-1/2 items-center justify-center text-warm transition-colors duration-200 hover:text-brand cursor-pointer focus-visible:outline-brand md:left-6"
            aria-label="Previous image"
          >
            <ChevronLeft className="size-8" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-2 top-1/2 z-10 inline-flex size-11 -translate-y-1/2 items-center justify-center text-warm transition-colors duration-200 hover:text-brand cursor-pointer focus-visible:outline-brand md:right-6"
            aria-label="Next image"
          >
            <ChevronRight className="size-8" />
          </button>
          <div
            className="relative h-[70vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <MediaImage
              src={galleryItems[active].src}
              alt={galleryItems[active].alt}
              fill
              quality={90}
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
