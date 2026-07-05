import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeUp } from "@/components/motion/FadeUp";
import { InnerHero } from "@/components/hero/InnerHero";
import { IdentityFocus } from "@/components/hero/animations/IdentityFocus";
import { ToolsRow } from "@/components/home/ToolsRow";
import { TodoChip } from "@/components/ui/TodoChip";
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
        <InnerHero
          breadcrumb={[{ label: "About", href: "/about" }]}
          eyebrow="About"
          title="We only do one thing."
          subline="Chivora specialises exclusively in Microsoft Dynamics 365 data migration — moving critical business data from SAP, Oracle, Sage, NAV, BPCS, IFS and Access Dimensions into D365 F&O and CE. Not configuration. Not general IT. Not implementation project management. Data migration, and nothing else."
          primaryCta={{ label: "Book a discovery call", href: "/contact" }}
          secondaryCta={{ label: "See the methodology", href: "/methodology" }}
          visual={<IdentityFocus />}
        />

        {/* Founder bio — text stands alone until a real headshot is added */}
        <section className="mx-auto max-w-4xl px-6 py-[var(--section-y)]">
          <FadeUp>
            <Eyebrow>The Founder</Eyebrow>
            <h2 className="font-display mt-3 text-[var(--text-h2)] font-bold tracking-[-0.02em] text-ink">
              Sunday Ukwungwu — Founder &amp; Director
            </h2>

            <div className="mt-6 flex flex-col gap-4 text-justify text-[var(--text-body)] leading-[1.7] text-ink-soft">
              <p>I started Chivora because data migration kept being the thing that went wrong.</p>
              <p>
                Across <TodoChip>7</TodoChip> years working on ERP
                transformation programmes — including implementations
                moving organisations from Microsoft Dynamics NAV and SAP
                into Dynamics 365 — I watched the same failure play out
                repeatedly. The functional design would be solid. The
                configuration would be done. The training would be
                delivered. And then, in the final weeks before go-live, the
                data would surface problems that should have been found in
                month two.
              </p>
              <p>
                The reason was always the same: nobody had owned data
                migration as a discipline. It had been distributed across
                people with other priorities, no dedicated tooling, and no
                structured methodology. It was treated as something that
                would &quot;just happen&quot; alongside everything else —
                and it didn&apos;t.
              </p>
              <p>
                I have been part of <TodoChip>6</TodoChip> migration
                projects across that period, working across General Ledger,
                Accounts Receivable, Accounts Payable, Inventory, Fixed
                Assets, Customers, and Vendors — and across source systems
                including SAP, Microsoft Dynamics NAV, SAGE, BPCS, IFS, and
                Access Dimensions. I know where the problems hide in each of
                those systems because I have found them, documented them,
                and fixed them under real delivery pressure.
              </p>
              <p>
                Chivora exists to provide what those programmes were
                missing: a single, accountable specialist who owns data
                migration from discovery through to post-go-live sign-off,
                with a methodology built from real delivery experience
                rather than generic best practice.
              </p>
            </div>

            <blockquote className="mt-8 border-l-2 border-blue pl-6">
              <p className="font-display text-lg font-medium text-ink">
                &quot;We only do data migration. Not configuration, not
                project management, not general IT. That focus is not a
                limitation — it is the reason we&apos;re better at it.&quot;
              </p>
              <p className="mt-2 font-mono-chivora text-xs tracking-[0.08em] text-ink-mute uppercase">
                Sunday Ukwungwu, Founder &amp; Director — Chivora
              </p>
            </blockquote>

            <div className="mt-10">
              <p className="font-mono-chivora text-xs tracking-[0.08em] text-blue uppercase">
                Background &amp; Experience
              </p>
              <ul className="mt-4 flex flex-col gap-2.5 text-sm text-ink-soft">
                <li>
                  <TodoChip>7</TodoChip>+ years working on ERP transformation
                  and data migration programmes
                </li>
                <li>
                  <TodoChip>6</TodoChip> D365 migration projects delivered
                  across F&amp;O and CE platforms
                </li>
                <li>Source systems: Microsoft Dynamics NAV, SAP (ECC), SAGE, BPCS, IFS, Access Dimensions</li>
                <li>Domains: GL, AR, AP, Inventory, Fixed Assets, Customers, Vendors — full coverage</li>
                <li>Tools: DIXF / Data Management Framework, KingswaySoft, SQL Server, Excel / Power Query, Power BI</li>
              </ul>
            </div>

            <div className="mt-6">
              <p className="font-mono-chivora text-xs tracking-[0.08em] text-blue uppercase">
                How I Work
              </p>
              <p className="mt-3 text-sm leading-[1.7] text-ink-soft">
                Chivora takes on a small number of engagements at a time —
                by design. Every client gets my direct involvement from the
                first discovery conversation through to post-go-live
                sign-off. There are no account managers, no junior
                handoffs, and no situations where the person who scoped the
                work is not the person delivering it.
              </p>
              <p className="mt-3 text-sm leading-[1.7] text-ink-soft">
                I work remotely as standard, with on-site attendance for key
                workshops, mock migration reviews, and cutover. I am based
                in the UK and available for programmes across the UK and,
                where the engagement is primarily remote, internationally.
              </p>
            </div>
          </FadeUp>
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
        <section className="mx-auto max-w-4xl px-6 py-[var(--section-y)]">
          <FadeUp>
            <Eyebrow>Why This Matters</Eyebrow>
            <h2 className="font-display mt-3 text-[var(--text-h2)] font-bold tracking-[-0.02em] text-ink">
              Most D365 projects treat data migration as an afterthought.
            </h2>
            <p className="mt-4 text-justify text-[var(--text-body)] leading-[1.7] text-ink-soft">
              On most implementations, data migration is handed to a
              functional consultant to run alongside their configuration
              work — squeezed into whatever time is left between workshops.
              It usually surfaces as a problem for the first time at the
              first mock migration, when balances don&apos;t reconcile and
              nobody on the programme owns the fix.
            </p>
            <p className="mt-4 text-justify text-[var(--text-body)] leading-[1.7] text-ink-soft">
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
