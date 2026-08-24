import Image from "next/image";
import { facilities } from "@/data/content";
import { Reveal } from "./Reveal";

export function Facilities() {
  return (
    <section id="facilities" className="bg-[#f4f4f4] py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand">
              Facilities
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-[0.95] tracking-[0.01em] text-ink md:text-5xl lg:text-[3.5rem]">
              A focused training environment.
            </h2>
            <p className="mt-5 text-base text-ink/65 md:text-lg">
              Strength-first floors with machines, free weights, and space to
              train with intent.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {facilities.map((item, i) => (
            <Reveal
              key={item.id}
              delayMs={i * 80}
              variant="scale"
              className="min-w-[78%] sm:min-w-[60%] md:min-w-0"
            >
              <a href="#gallery" className="group relative block cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden bg-ink">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 80vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent"
                    aria-hidden
                  />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
                      Training
                    </p>
                    <h3 className="mt-1 font-display text-2xl font-bold uppercase text-warm">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-warm/75">
                      {item.description}
                    </p>
                    <span className="mt-3 inline-block text-[12px] font-bold uppercase tracking-[0.12em] text-white underline decoration-brand underline-offset-4 transition-colors duration-200 group-hover:text-brand">
                      View
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
