"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { communityStories } from "@/data/content";
import { SITE } from "@/lib/site";
import { useI18n } from "@/i18n/LocaleProvider";
import { MediaImage } from "./MediaImage";
import { Reveal } from "./Reveal";
import { WhatsAppCTA } from "./WhatsAppCTA";

function StoryVideo({
  image,
  video,
  alt,
  playLabel,
}: {
  image: string;
  video: string;
  alt: string;
  playLabel: string;
}) {
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const start = async () => {
    setFailed(false);
    setPlaying(true);
    // Wait a tick so the video element mounts, then play explicitly (iOS-friendly)
    requestAnimationFrame(() => {
      const el = videoRef.current;
      if (!el) return;
      const playPromise = el.play();
      if (playPromise) {
        playPromise.catch(() => {
          // Autoplay blocked: keep controls visible so user can tap play
        });
      }
    });
  };

  return (
    <div className="story-media group relative aspect-[16/10] w-full overflow-hidden bg-ink">
      {playing ? (
        <>
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            src={video}
            poster={image}
            controls
            playsInline
            preload="metadata"
            controlsList="nodownload"
            onEnded={() => setPlaying(false)}
            onError={() => {
              setFailed(true);
              setPlaying(false);
            }}
          />
          {failed ? (
            <p className="absolute inset-x-0 bottom-3 z-10 px-3 text-center text-xs text-white/90">
              Video unavailable. Try again later.
            </p>
          ) : null}
        </>
      ) : (
        <button
          type="button"
          className="absolute inset-0 h-full w-full cursor-pointer border-0 bg-transparent p-0"
          onClick={start}
        >
          <MediaImage
            src={image}
            alt={alt}
            fill
            quality={85}
            sizes="(max-width: 768px) 100vw, 36vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <span className="story-play" aria-hidden>
            <Play className="ml-0.5 size-5" fill="#e86324" color="#e86324" strokeWidth={0} />
          </span>
          <span className="sr-only">{playLabel}</span>
        </button>
      )}
    </div>
  );
}

export function Testimonials() {
  const { t } = useI18n();

  return (
    <section id="stories" className="bg-white py-16 text-[#2c2c2c] md:py-24">
      <div className="ff-wrap grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
        <Reveal variant="left" className="lg:col-span-4">
          <h2 className="type-h2">
            {t.stories.title}
          </h2>
          <p className="mt-4 type-body text-[#555]">
            {t.stories.intro.replace("{handle}", SITE.instagram.handle)}
          </p>
          <div className="mt-8">
            <WhatsAppCTA intent="join">{t.joinAkbar}</WhatsAppCTA>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
          {communityStories.map((story, index) => {
            const copy = t.stories.items[story.id];
            return (
            <Reveal key={story.id} delayMs={index * 120} variant="scale">
              <article className="story-card flex h-full flex-col overflow-hidden rounded-[18px] bg-[#f3f3f3]">
                <StoryVideo
                  image={story.image}
                  video={story.video}
                  alt={copy.alt}
                  playLabel={t.stories.play}
                />
                <div className="flex flex-1 flex-col px-6 py-7 text-center md:px-8">
                  <p className="type-body text-[#444]">{copy.text}</p>
                  <div className="mt-8">
                    <p className="font-display text-[13px] font-extrabold uppercase tracking-[0.08em]">
                      {story.name}
                    </p>
                    <p className="mt-1 text-[13px] text-[#666]">{story.role}</p>
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
