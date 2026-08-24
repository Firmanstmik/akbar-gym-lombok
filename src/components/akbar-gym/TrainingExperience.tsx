import { MediaImage } from "./MediaImage";
import { Reveal } from "./Reveal";

const points = [
  {
    title: "Focused",
    text: "A floor built for people who come to train, not to browse.",
  },
  {
    title: "Welcoming",
    text: "Locals and visitors share the same space with a friendly, approachable energy.",
  },
  {
    title: "Practical",
    text: "Equipment and layout that support real sessions: strength, free weights, progression.",
  },
  {
    title: "Community led",
    text: "More than machines. A South Lombok training community that keeps you coming back.",
  },
];

export function TrainingExperience() {
  return (
    <section id="training" className="bg-ink py-20 md:py-28 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2 lg:items-center lg:gap-20">
        <Reveal variant="clip">
          <div className="relative aspect-[3/4] overflow-hidden md:aspect-[4/5]">
            <MediaImage
              src="/images/akbar-gym/community/athletes.webp"
              alt="Athletes posing at Akbar Gym after training"
              fill
              quality={70}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal variant="left">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand">
              Experience
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-[0.95] tracking-[0.01em] text-warm md:text-5xl lg:text-[3.5rem]">
              Train with purpose.
            </h2>
            <p className="mt-5 max-w-lg text-base text-muted md:text-lg">
              Energetic when it needs to be. Disciplined when it counts. Akbar
              Gym is where consistency meets community in South Lombok.
            </p>
          </Reveal>

          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {points.map((point, i) => (
              <Reveal key={point.title} delayMs={i * 70}>
                <li className="border-t border-border pt-5">
                  <h3 className="font-display text-xl font-semibold uppercase tracking-[0.06em] text-warm">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {point.text}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
