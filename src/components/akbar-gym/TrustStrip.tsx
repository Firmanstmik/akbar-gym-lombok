import { MapPin, Dumbbell, Users, Compass } from "lucide-react";
import { trustFacts } from "@/data/content";
import { Reveal } from "./Reveal";

const icons = [Compass, MapPin, MapPin, Dumbbell] as const;

export function TrustStrip() {
  return (
    <section id="trust" className="bg-white text-ink" aria-label="Quick facts">
      <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
        {trustFacts.map((fact, i) => {
          const Icon = icons[i] ?? Users;
          return (
            <Reveal key={fact.label} delayMs={i * 60} variant="up">
              <div className="flex min-h-[8.5rem] flex-col justify-center border-b border-r border-black/10 px-5 py-8 md:min-h-[9.5rem] md:px-8">
                <Icon className="mb-3 size-5 text-brand" aria-hidden />
                <p className="font-display text-xl font-bold uppercase tracking-[0.04em] md:text-2xl">
                  {fact.label}
                </p>
                <p className="mt-1.5 text-sm text-ink/60">{fact.detail}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
