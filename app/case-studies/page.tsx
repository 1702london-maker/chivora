import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/motion/FadeUp";
import { InnerHero } from "@/components/hero/InnerHero";
import { CaseStatCarousel } from "@/components/hero/animations/CaseStatCarousel";
import { CASE_STUDIES } from "@/lib/content/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies | Chivora — D365 Data Migration Specialists",
  description: "Representative D365 migration scope, modelled on real delivery experience.",
};

// NOTE: CASE_STUDIES in lib/content/caseStudies.ts are modelled examples,
// not named client engagements. Replace with real, permissioned data as it
// becomes available.
export default function CaseStudiesPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <InnerHero
          breadcrumb={[{ label: "Case Studies", href: "/case-studies" }]}
          eyebrow="Case Studies"
          title="Migrations that landed."
          subline="The following examples are modelled on the types of migration challenges Chivora's team has encountered across ERP transformation programmes — including SAP and Microsoft Dynamics NAV source systems. Client names and specific identifying details have been removed."
          primaryCta={{ label: "Book a discovery call", href: "/contact" }}
          secondaryCta={{ label: "See our services", href: "/services" }}
          visual={<CaseStatCarousel />}
        />

        <section className="mx-auto max-w-6xl px-6 py-[var(--section-y)]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {CASE_STUDIES.map((c, i) => (
              <FadeUp key={c.slug} delay={(i % 2) * 0.08}>
                <div className="h-full rounded-[var(--radius-card)] border border-line bg-white p-8 shadow-[var(--shadow-card)]">
                  <p className="font-mono-chivora text-[10px] tracking-wide text-ink-mute uppercase">
                    {c.sector} · {c.sourceSystem} → {c.targetPlatform}
                  </p>
                  <p className="font-mono-chivora mt-4 text-4xl font-medium text-blue">
                    {c.stat}
                  </p>
                  <p className="text-sm text-ink-soft">{c.statLabel}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {c.subStats.map((s) => (
                      <span
                        key={s}
                        className="font-mono-chivora rounded-full bg-blue-tint px-2.5 py-1 text-[10px] tracking-wide text-blue"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <p className="mt-5 text-sm leading-[1.7] text-ink-soft">
                    {c.narrative}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2 border-t border-line pt-4">
                    {c.domains.map((d) => (
                      <span key={d} className="font-mono-chivora text-[10px] tracking-wide text-ink-mute uppercase">
                        {d}
                      </span>
                    ))}
                    <span className="font-mono-chivora text-[10px] tracking-wide text-ink-mute uppercase">
                      · {c.timeline}
                    </span>
                  </div>

                  <p className="mt-4 text-[11px] leading-snug text-ink-mute">
                    Anonymised delivery example — scope and complexity based
                    on real programme experience.
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        <section className="bg-navy py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="font-display text-[var(--text-h2)] font-bold tracking-[-0.02em] text-white">
              Your migration next.
            </h2>
            <div className="mt-8 flex justify-center">
              <Button href="/contact" className="!bg-white !text-navy">
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
