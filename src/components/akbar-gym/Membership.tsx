"use client";

import Image from "next/image";
import { membershipPlans } from "@/data/content";
import { useI18n } from "@/i18n/LocaleProvider";
import { Reveal } from "./Reveal";
import { WhatsAppCTA } from "./WhatsAppCTA";

export function Membership() {
  const { t } = useI18n();

  return (
    <section id="membership" className="bg-white py-20 text-ink md:py-28 lg:py-32">
      <div className="ff-wrap">
        <Reveal>
          <div className="max-w-[46.15rem]">
            <p className="type-caption font-semibold uppercase text-brand">
              {t.membership.kicker}
            </p>
            <h2 className="mt-4 type-h2">
              {t.membership.title}
            </h2>
            <p className="mt-5 type-body text-ink/65">{t.membership.intro}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {membershipPlans.map((plan, i) => {
            const copy = t.membership.plans[plan.id];
            return (
              <Reveal key={plan.id} delayMs={i * 80} variant="scale">
                <article
                  className={`flex h-full flex-col overflow-hidden ${
                    plan.featured ? "bg-ink text-warm" : "bg-[#f4f4f4] text-ink"
                  }`}
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={plan.image}
                      alt={copy.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
                      {plan.featured ? t.membership.featured : t.membership.option}
                    </p>
                    <h3 className="mt-2 type-h3">
                      {copy.name}
                    </h3>
                    <p
                      className={`mt-3 type-body ${
                        plan.featured ? "text-warm/70" : "text-ink/65"
                      }`}
                    >
                      {copy.summary}
                    </p>
                    <ul
                      className={`mt-5 flex-1 space-y-2.5 text-sm ${
                        plan.featured ? "text-warm/80" : "text-ink/70"
                      }`}
                    >
                      {copy.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span
                            className="mt-2 size-1.5 shrink-0 rounded-full bg-brand"
                            aria-hidden
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-7">
                      <WhatsAppCTA
                        intent={plan.intent}
                        variant={plan.featured ? "primary" : "on-light"}
                      >
                        {copy.cta}
                      </WhatsAppCTA>
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
