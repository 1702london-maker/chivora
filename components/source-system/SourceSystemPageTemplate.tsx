import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { InnerHero } from "@/components/hero/InnerHero";
import { SourceSystemFlow } from "@/components/hero/SourceSystemFlow";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/motion/FadeUp";
import { DomainMappingTable } from "@/components/source-system/DomainMappingTable";
import { PitfallsList } from "@/components/source-system/PitfallsList";
import { MiniTimeline } from "@/components/service/MiniTimeline";
import { FaqAccordion } from "@/components/service/FaqAccordion";
import { DATA_DOMAINS } from "@/lib/constants";
import type { SourceSystemContent } from "@/lib/content/sourceSystems";

const ALL_PHASES = ["01", "02", "03", "04", "05", "06"];

export function SourceSystemPageTemplate({ system }: { system: SourceSystemContent }) {
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* 1 — HERO */}
        <InnerHero
          breadcrumb={[
            { label: "Source Systems", href: "/source-systems" },
            { label: system.name, href: `/source-systems/${system.slug}` },
          ]}
          eyebrow="Source System"
          title={`${system.name} to Dynamics 365 Data Migration`}
          subline={system.promise}
          tags={[system.label, `D365 ${system.platform}`]}
          primaryCta={{ label: "Book a discovery call", href: "/contact" }}
          secondaryCta={{ label: "Get a Health Check", href: "/services/data-migration-health-check" }}
          visual={<SourceSystemFlow systemLabel={system.label} rows={system.flowRows} />}
        />

        {/* 2 — WHY THIS MIGRATION IS HARD */}
        <section className="mx-auto max-w-3xl px-6 py-[var(--section-y)]">
          <FadeUp>
            <Eyebrow>The Challenge</Eyebrow>
            <h2 className="font-display mt-3 text-[var(--text-h2)] font-bold tracking-[-0.02em] text-ink">
              Why {system.name} migrations are hard.
            </h2>
          </FadeUp>
          <div className="mt-6 flex flex-col gap-5">
            {system.challenge.map((para, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <p className="text-[var(--text-body)] leading-[1.7] text-ink-soft">
                  {para}
                </p>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* 3 — DOMAIN MAPPING TABLE */}
        <section className="mx-auto max-w-4xl px-6 py-[var(--section-y)]">
          <FadeUp>
            <Eyebrow>Mapping</Eyebrow>
            <h2 className="font-display mt-3 text-[var(--text-h2)] font-bold tracking-[-0.02em] text-ink">
              {system.name} entities, mapped to D365.
            </h2>
          </FadeUp>
          <div className="mt-8">
            <DomainMappingTable rows={system.mappingRows} />
          </div>
        </section>

        {/* 4 — COMMON PITFALLS */}
        <section className="mx-auto max-w-4xl px-6 py-[var(--section-y)]">
          <FadeUp>
            <Eyebrow>Pitfalls</Eyebrow>
            <h2 className="font-display mt-3 text-[var(--text-h2)] font-bold tracking-[-0.02em] text-ink">
              Where {system.name} migrations go wrong.
            </h2>
          </FadeUp>
          <div className="mt-8">
            <PitfallsList items={system.pitfalls} />
          </div>
        </section>

        {/* 5 — DOMAINS WE MIGRATE */}
        <section className="mx-auto max-w-4xl px-6 py-[var(--section-y)]">
          <FadeUp>
            <Eyebrow>Domains</Eyebrow>
            <h2 className="font-display mt-3 text-[var(--text-h2)] font-bold tracking-[-0.02em] text-ink">
              Domains we most commonly migrate from {system.name}.
            </h2>
          </FadeUp>
          <div className="mt-8 flex flex-wrap gap-2">
            {DATA_DOMAINS.map((d) => {
              const active = system.commonDomains.includes(d.code);
              return (
                <span
                  key={d.code}
                  className={`font-mono-chivora rounded-full px-3 py-1.5 text-xs ${
                    active ? "bg-blue-tint text-blue" : "bg-gray-50 text-ink-mute/50"
                  }`}
                >
                  {d.code}
                </span>
              );
            })}
          </div>
        </section>

        {/* 6 — METHODOLOGY */}
        <section className="mx-auto max-w-6xl px-6 py-[var(--section-y)]">
          <FadeUp>
            <Eyebrow>Methodology</Eyebrow>
            <h2 className="font-display mt-3 text-[var(--text-h2)] font-bold tracking-[-0.02em] text-ink">
              The same six phases, every time.
            </h2>
          </FadeUp>
          <div className="mt-10">
            <MiniTimeline highlighted={ALL_PHASES} />
          </div>
        </section>

        {/* 7 — FAQ */}
        <section className="mx-auto max-w-3xl px-6 py-[var(--section-y)]">
          <FadeUp>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="font-display mt-3 text-[var(--text-h2)] font-bold tracking-[-0.02em] text-ink">
              Questions about migrating from {system.name}.
            </h2>
          </FadeUp>
          <div className="mt-8">
            <FaqAccordion items={system.faqs} />
          </div>
        </section>

        {/* 8 — CTA BAND */}
        <section className="bg-navy py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="font-display text-[var(--text-h2)] font-bold tracking-[-0.02em] text-white">
              Planning a {system.name} to D365 migration?
            </h2>
            <p className="mt-3 text-white/70">
              Start with a Health Check to see exactly what needs cleansing
              before it moves.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/services/data-migration-health-check" className="!bg-white !text-navy">
                Start with a Health Check
              </Button>
              <Button href="/contact" variant="ghost-navy">
                Book a discovery call
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
