"use client";

import Link from "next/link";
import { Layers, AlarmClock, DatabaseZap } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeUp } from "@/components/motion/FadeUp";
import { PAIN_POINTS } from "@/lib/constants";

const ICONS = {
  "layers-off": Layers,
  "clock-alert": AlarmClock,
  "database-x": DatabaseZap,
};

export function PainPoints() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-[var(--section-y)]">
      <FadeUp>
        <Eyebrow>The Problem</Eyebrow>
        <h2 className="font-display mt-3 text-[var(--text-h2)] font-bold tracking-[-0.02em] text-ink">
          Familiar with these pains?
        </h2>
        <p className="mt-3 max-w-[52ch] text-ink-soft">
          Data migration is the most common cause of D365 go-live failure.
          Here&apos;s why.
        </p>
      </FadeUp>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {PAIN_POINTS.map((p, i) => {
          const Icon = ICONS[p.icon as keyof typeof ICONS];
          return (
            <FadeUp key={p.title} delay={i * 0.08}>
              <div className="group relative h-full rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-1.5 hover:border-blue hover:shadow-[var(--shadow-hover)]">
                <span className="absolute left-6 right-6 top-0 h-[2px] origin-left scale-x-0 bg-blue transition-transform duration-200 group-hover:scale-x-100" />
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-tint">
                  <Icon className="h-5 w-5 stroke-blue" />
                </div>
                <h3 className="font-display mt-5 text-[var(--text-h3)] font-medium text-ink">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-[1.7] text-ink-soft">
                  {p.description}
                </p>
                <Link
                  href={p.href}
                  className="mt-5 inline-block text-sm font-medium text-blue"
                >
                  {p.linkLabel}
                </Link>
              </div>
            </FadeUp>
          );
        })}
      </div>
    </section>
  );
}
