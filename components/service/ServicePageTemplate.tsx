import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { InnerHero } from "@/components/hero/InnerHero";
import { ServiceHeroVisual } from "@/components/service/ServiceHeroVisual";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/motion/FadeUp";
import { Checklist } from "@/components/service/Checklist";
import { MiniTimeline } from "@/components/service/MiniTimeline";
import { PricingCard } from "@/components/service/PricingCard";
import { FaqAccordion } from "@/components/service/FaqAccordion";
import { DATA_DOMAINS, SOURCE_SYSTEMS } from "@/lib/constants";
import { getServiceBySlug, SERVICES_CONTENT, type ServiceContent } from "@/lib/content/services";

export function ServicePageTemplate({ service }: { service: ServiceContent }) {
  const related = service.related
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is ServiceContent => !!s);

  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* 1 — HERO */}
        <InnerHero
          breadcrumb={[
            { label: "Services", href: "/services" },
            { label: service.name, href: `/services/${service.slug}` },
          ]}
          eyebrow={`Service — ${service.categoryTag}`}
          title={service.name}
          subline={service.bodyParagraph}
          tags={service.tags}
          primaryCta={{ label: "Book a discovery call", href: "/contact" }}
          secondaryCta={{ label: "Download the one-pager", href: "/capability-statement" }}
          visual={<ServiceHeroVisual kind={service.animation} />}
        />
        <div className="mx-auto -mt-2 max-w-7xl px-6">
          <p className="font-display max-w-[52ch] text-lg font-medium text-blue">
            {service.promise}
          </p>
        </div>

        {/* 2 — WHAT'S INCLUDED */}
        <section className="mx-auto max-w-5xl px-6 py-[var(--section-y)]">
          <FadeUp>
            <Eyebrow>What&apos;s Included</Eyebrow>
            <h2 className="font-display mt-3 text-[var(--text-h2)] font-bold tracking-[-0.02em] text-ink">
              Everything this engagement covers.
            </h2>
          </FadeUp>
          <div className="mt-8 max-w-xl">
            <Checklist items={service.included} />
          </div>
        </section>

        {/* 3 — HOW IT RUNS */}
        <section className="mx-auto max-w-6xl px-6 py-[var(--section-y)]">
          <FadeUp>
            <Eyebrow>How It Runs</Eyebrow>
            <h2 className="font-display mt-3 text-[var(--text-h2)] font-bold tracking-[-0.02em] text-ink">
              Where this sits in our methodology.
            </h2>
          </FadeUp>
          <div className="mt-10">
            <MiniTimeline highlighted={service.phasesHighlighted} />
          </div>
        </section>

        {/* 4 — WHO IT'S FOR */}
        <section className="mx-auto max-w-6xl px-6 py-[var(--section-y)]">
          <FadeUp>
            <Eyebrow>Who It&apos;s For</Eyebrow>
            <h2 className="font-display mt-3 text-[var(--text-h2)] font-bold tracking-[-0.02em] text-ink">
              Built for these situations.
            </h2>
          </FadeUp>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {service.personas.map((p, i) => (
              <FadeUp key={p.title} delay={i * 0.08}>
                <div className="h-full rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-[var(--shadow-card)]">
                  <h3 className="font-display text-base font-medium text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-[1.6] text-ink-soft">
                    {p.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* 5 — DOMAINS & SYSTEMS COVERED */}
        <section className="mx-auto max-w-6xl px-6 py-[var(--section-y)]">
          <FadeUp>
            <Eyebrow>Scope</Eyebrow>
            <h2 className="font-display mt-3 text-[var(--text-h2)] font-bold tracking-[-0.02em] text-ink">
              Domains &amp; systems covered.
            </h2>
          </FadeUp>
          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <p className="font-mono-chivora text-xs tracking-[0.08em] text-ink-mute uppercase">
                Data domains
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {DATA_DOMAINS.map((d) => {
                  const active = service.domains.includes(d.code);
                  return (
                    <span
                      key={d.code}
                      className={`font-mono-chivora rounded-full px-3 py-1.5 text-xs ${
                        active
                          ? "bg-blue-tint text-blue"
                          : "bg-gray-50 text-ink-mute/50"
                      }`}
                    >
                      {d.code}
                    </span>
                  );
                })}
              </div>
            </div>
            <div>
              <p className="font-mono-chivora text-xs tracking-[0.08em] text-ink-mute uppercase">
                Source systems
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {SOURCE_SYSTEMS.map((s) => {
                  const active = service.systems.includes(s.slug);
                  return active ? (
                    <Link
                      key={s.slug}
                      href={`/source-systems/${s.slug}`}
                      className="font-mono-chivora rounded-full bg-blue-tint px-3 py-1.5 text-xs text-blue transition-colors hover:bg-blue hover:text-white"
                    >
                      {s.name}
                    </Link>
                  ) : (
                    <span
                      key={s.slug}
                      className="font-mono-chivora rounded-full bg-gray-50 px-3 py-1.5 text-xs text-ink-mute/50"
                    >
                      {s.name}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 6 — PRICING / ENGAGEMENT */}
        <section className="mx-auto max-w-3xl px-6 py-[var(--section-y)]">
          <FadeUp>
            <Eyebrow>Engagement</Eyebrow>
            <h2 className="font-display mt-3 text-[var(--text-h2)] font-bold tracking-[-0.02em] text-ink">
              How this is priced.
            </h2>
          </FadeUp>
          <div className="mt-8">
            <PricingCard
              title={service.pricing.title}
              price={service.pricing.price}
              detail={service.pricing.detail}
            />
          </div>
          <div className="mt-8">
            <p className="font-mono-chivora text-xs tracking-[0.08em] text-ink-mute uppercase">
              What affects price
            </p>
            <ul className="mt-3 flex flex-col gap-2">
              {service.pricing.whatAffectsPrice.map((item) => (
                <li key={item} className="text-sm text-ink-soft">
                  · {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 7 — FAQ */}
        <section className="mx-auto max-w-3xl px-6 py-[var(--section-y)]">
          <FadeUp>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="font-display mt-3 text-[var(--text-h2)] font-bold tracking-[-0.02em] text-ink">
              Questions we get asked.
            </h2>
          </FadeUp>
          <div className="mt-8">
            <FaqAccordion items={service.faqs} />
          </div>
        </section>

        {/* 8 — RELATED SERVICES */}
        {related.length > 0 && (
          <section className="mx-auto max-w-6xl px-6 py-[var(--section-y)]">
            <FadeUp>
              <Eyebrow>See Also</Eyebrow>
              <h2 className="font-display mt-3 text-[var(--text-h2)] font-bold tracking-[-0.02em] text-ink">
                Related services.
              </h2>
            </FadeUp>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {related.map((r, i) => (
                <FadeUp key={r.slug} delay={i * 0.08}>
                  <Link
                    href={`/services/${r.slug}`}
                    className="group block h-full rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-1.5 hover:border-blue hover:shadow-[var(--shadow-hover)]"
                  >
                    <p className="font-mono-chivora text-[10px] tracking-wide text-blue uppercase">
                      {r.categoryTag}
                    </p>
                    <h3 className="font-display mt-2 text-base font-medium text-ink">
                      {r.name}
                    </h3>
                    <p className="mt-2 text-sm leading-[1.6] text-ink-soft">
                      {r.promise}
                    </p>
                  </Link>
                </FadeUp>
              ))}
            </div>
          </section>
        )}

        {/* 9 — CTA BAND */}
        <section className="bg-navy py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="font-display text-[var(--text-h2)] font-bold tracking-[-0.02em] text-white">
              {service.ctaHeadline}
            </h2>
            <p className="mt-3 text-white/70">{service.ctaSub}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/contact" className="!bg-white !text-navy">
                Book a discovery call
              </Button>
              <Button href="/services/data-migration-health-check" variant="ghost-navy">
                Start with a Health Check
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
