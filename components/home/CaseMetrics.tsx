"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeUp } from "@/components/motion/FadeUp";
import { CASE_METRICS } from "@/lib/constants";

// NOTE: CASE_METRICS in lib/constants.ts are modelled examples, not named
// client engagements — see the reframed disclosure copy below. Replace with
// real, permissioned client data as it becomes available.
export function CaseMetrics() {
  return (
    <section className="py-[var(--section-y)]">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp>
          <Eyebrow>03 — Delivery</Eyebrow>
          <h2 className="font-display mt-3 text-[var(--text-h2)] font-bold tracking-[-0.02em] text-ink">
            Migrations that landed.
          </h2>
          <p className="mt-2 max-w-[62ch] text-sm text-ink-soft">
            The following examples are modelled on the types of migration
            challenges Chivora&apos;s team has encountered across ERP
            transformation programmes — including SAP and Microsoft Dynamics
            NAV source systems. Client names and specific identifying
            details have been removed. The data volumes, domain complexity,
            and outcomes reflect the scale of work we&apos;re built to
            deliver.
          </p>
        </FadeUp>
      </div>

      <div className="mt-10 flex gap-6 overflow-x-auto px-6 pb-4 [scrollbar-width:thin] lg:mx-auto lg:max-w-7xl">
        {CASE_METRICS.map((c) => (
          <div
            key={c.sector}
            className="flex w-[280px] shrink-0 flex-col rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-[var(--shadow-card)]"
          >
            <p className="font-mono-chivora text-[10px] tracking-[0.08em] text-ink-mute uppercase">
              {c.sector}
            </p>
            <p className="font-mono-chivora mt-4 text-4xl font-medium text-blue">
              {c.stat}
            </p>
            <p className="text-sm text-ink-soft">{c.statLabel}</p>
            <div className="mt-4 flex flex-col gap-1.5">
              {c.subStats.map((s) => (
                <span
                  key={s}
                  className="font-mono-chivora text-[10px] tracking-wide text-ink-mute"
                >
                  {s}
                </span>
              ))}
            </div>
            <p className="mt-4 border-t border-line pt-3 text-[11px] leading-snug text-ink-mute">
              Anonymised delivery example — scope and complexity based on
              real programme experience.
            </p>
          </div>
        ))}

        <Link
          href="/contact"
          className="group flex w-[280px] shrink-0 flex-col items-start justify-center rounded-[var(--radius-card)] bg-navy p-6 text-white"
        >
          <span className="font-display text-xl font-medium">
            Your migration next
          </span>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-blue-bright">
            Book a discovery call
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </span>
        </Link>
      </div>
    </section>
  );
}
