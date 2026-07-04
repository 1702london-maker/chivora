import Link from "next/link";
import { Database, ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeUp } from "@/components/motion/FadeUp";
import { SERVICES } from "@/lib/constants";

export function ServicesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-[var(--section-y)]">
      <FadeUp>
        <Eyebrow>01 — Services</Eyebrow>
        <h2 className="font-display mt-3 text-[var(--text-h2)] font-bold tracking-[-0.02em] text-ink">
          One specialism. Nine ways to engage.
        </h2>
      </FadeUp>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <FadeUp key={s.slug} delay={(i % 3) * 0.08}>
            <Link
              href={`/services/${s.slug}`}
              className="group relative flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-1.5 hover:border-blue hover:shadow-[var(--shadow-hover)]"
            >
              <span className="absolute left-6 right-6 top-0 h-[2px] origin-left scale-x-0 bg-blue transition-transform duration-200 group-hover:scale-x-100" />
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-tint">
                <Database className="h-5 w-5 stroke-blue" />
              </div>
              <h3 className="font-display mt-5 text-[var(--text-h3)] font-medium text-ink">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-[1.6] text-ink-soft">
                {s.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono-chivora rounded-full bg-blue-tint px-2.5 py-1 text-[10px] tracking-wide text-blue"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-sm font-medium text-blue">
                Learn more
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </Link>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
