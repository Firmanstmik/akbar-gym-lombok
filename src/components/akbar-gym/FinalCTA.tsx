import { MediaImage } from "./MediaImage";
import { Reveal } from "./Reveal";
import { WhatsAppCTA } from "./WhatsAppCTA";

export function FinalCTA() {
  return (
    <section id="join" className="relative overflow-hidden py-24 text-warm md:py-32">
      <MediaImage
        src="/images/akbar-gym/community/athletes.webp"
        alt=""
        fill
        quality={80}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ink/80" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 text-center md:px-8">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand">
            Ready to train?
          </p>
          <h2 className="mx-auto mt-4 max-w-4xl font-display text-4xl font-bold uppercase leading-[0.95] tracking-[0.01em] md:text-6xl lg:text-7xl">
            Your next session starts here.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base text-warm/75 md:text-lg">
            Message Akbar Gym on WhatsApp for membership, daily pass, or personal
            training details.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <WhatsAppCTA intent="join">Join Akbar Gym</WhatsAppCTA>
            <WhatsAppCTA intent="general" variant="secondary">
              WhatsApp Us
            </WhatsAppCTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
