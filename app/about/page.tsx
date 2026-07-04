import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeUp } from "@/components/motion/FadeUp";
import { ToolsRow } from "@/components/home/ToolsRow";
import { Check, X } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Chivora — D365 Data Migration Specialists",
  description: "Chivora specialises exclusively in Microsoft Dynamics 365 data migration.",
};

const WHAT_WE_ARE = [
  "A specialist data migration team, and nothing else",
  "Owners of the data workstream, from discovery to sign-off",
  "Built to work alongside your Microsoft Partner or SI, not replace them",
  "Obsessive about reconciliation — every balance agrees before we sign off",
  "Direct about pricing, timelines and what's actually achievable",
];

const WHAT_WE_ARE_NOT = [
  "An ERP or IT consultancy",
  "A general Dynamics 365 implementation partner",
  "A configuration or process re-engineering service",
  "A body-shop for generic data engineering work",
  "A team that guesses at go-live dates to win the work",
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 pt-16 pb-8 text-center">
          <FadeUp>
            <Eyebrow>About</Eyebrow>
            <h1 className="font-display mt-3 text-[var(--text-display)] font-bold tracking-[-0.03em] text-ink">
              We only do one thing.
            </h1>
            <p className="mt-4 text-ink-soft">
              Chivora specialises exclusively in Microsoft Dynamics 365 data
              migration — moving critical business data from SAP, Oracle,
              Sage, NAV, BPCS, IFS and Access Dimensions into D365 F&amp;O and
              CE. Not configuration. Not general IT. Not implementation
              project management. Data migration, and nothing else.
            </p>
          </FadeUp>
        </section>

        {/* Founder / team — placeholder, do not invent name or bio */}
        <section className="mx-auto max-w-7xl px-6 py-[var(--section-y)]">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <FadeUp fromX={-32}>
              <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[var(--radius-card)] border-2 border-blue bg-gradient-to-br from-ink to-navy">
                <div className="flex h-full items-center justify-center">
                  <span className="font-mono-chivora text-xs tracking-[0.08em] text-white/40 uppercase">
                    Team photo placeholder
                  </span>
                </div>
              </div>
            </FadeUp>
            <FadeUp fromX={32}>
              <Eyebrow>The Team</Eyebrow>
              <h2 className="font-display mt-3 text-[var(--text-h2)] font-bold tracking-[-0.02em] text-ink">
                A small team, deliberately.
              </h2>
              <p className="mt-4 max-w-[52ch] text-ink-soft">
                [Team bio placeholder — awaiting sign-off on names, headshots
                and backgrounds. We won&apos;t publish fabricated
                biographical details here. This section is ready to receive
                real content on request.]
              </p>
            </FadeUp>
          </div>
        </section>

        {/* What we are / what we are not */}
        <section className="mx-auto max-w-6xl px-6 py-[var(--section-y)]">
          <FadeUp>
            <Eyebrow>Positioning</Eyebrow>
            <h2 className="font-display mt-3 text-[var(--text-h2)] font-bold tracking-[-0.02em] text-ink">
              What we are. What we&apos;re not.
            </h2>
          </FadeUp>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            <FadeUp>
              <div className="h-full rounded-[var(--radius-card)] border border-line bg-white p-8 shadow-[var(--shadow-card)]">
                <p className="font-mono-chivora text-xs tracking-[0.08em] text-blue uppercase">
                  What we are
                </p>
                <ul className="mt-5 flex flex-col gap-3">
                  {WHAT_WE_ARE.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-ink-soft">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 stroke-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="h-full rounded-[var(--radius-card)] border border-line bg-white p-8 shadow-[var(--shadow-card)]">
                <p className="font-mono-chivora text-xs tracking-[0.08em] text-ink-mute uppercase">
                  What we&apos;re not
                </p>
                <ul className="mt-5 flex flex-col gap-3">
                  {WHAT_WE_ARE_NOT.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-ink-soft">
                      <X className="mt-0.5 h-4 w-4 shrink-0 stroke-ink-mute" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* Competitive advantage */}
        <section className="mx-auto max-w-3xl px-6 py-[var(--section-y)]">
          <FadeUp>
            <Eyebrow>Why This Matters</Eyebrow>
            <h2 className="font-display mt-3 text-[var(--text-h2)] font-bold tracking-[-0.02em] text-ink">
              Most D365 projects treat data migration as an afterthought.
            </h2>
            <p className="mt-4 text-[var(--text-body)] leading-[1.7] text-ink-soft">
              On most implementations, data migration is handed to a
              functional consultant to run alongside their configuration
              work — squeezed into whatever time is left between workshops.
              It usually surfaces as a problem for the first time at the
              first mock migration, when balances don&apos;t reconcile and
              nobody on the programme owns the fix.
            </p>
            <p className="mt-4 text-[var(--text-body)] leading-[1.7] text-ink-soft">
              We exist because that pattern is predictable and avoidable.
              Treating data migration as its own workstream, with a
              dedicated team and a repeatable methodology, is the difference
              between a go-live that slips and one that doesn&apos;t.
            </p>
          </FadeUp>
        </section>

        <ToolsRow />

        <section className="bg-navy py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="font-display text-[var(--text-h2)] font-bold tracking-[-0.02em] text-white">
              Want to talk before you commit to anything?
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/contact" className="!bg-white !text-navy">
                Book a discovery call
              </Button>
              <Button href="/methodology" variant="ghost-navy">
                See the methodology
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
