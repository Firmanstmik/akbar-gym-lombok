import Image from "next/image";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="bg-white py-20 text-ink md:py-28 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal variant="left">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand">
              Why Akbar Gym
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-[0.95] tracking-[0.01em] md:text-5xl lg:text-[3.5rem]">
              Built for people who take training seriously.
            </h2>
          </Reveal>
          <Reveal delayMs={80}>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-ink/70 md:text-lg">
              <p>
                Akbar Gym is a South Lombok training space known for focused
                in Sengkol and Praya.
              </p>
              <p>
                Whether you are building consistency, visiting Mandalika, or
                looking for structured coaching, the floor is practical, the
                atmosphere is real, and the culture is about showing up.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="relative lg:col-span-7">
          <Reveal variant="clip">
            <div className="relative aspect-[4/5] overflow-hidden md:aspect-[5/4]">
              <Image
                src="/images/akbar-gym/community/welcome-group-wide.webp"
                alt="Akbar Gym trainer and members together on the training floor"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
