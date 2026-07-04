import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeUp } from "@/components/motion/FadeUp";
import { SOURCE_SYSTEMS_CONTENT } from "@/lib/content/sourceSystems";

export const metadata: Metadata = {
  title: "Source Systems | Chivora — D365 Data Migration Specialists",
  description:
    "We migrate from SAP, Oracle, Sage, Dynamics NAV, BPCS, IFS and Access Dimensions into Dynamics 365.",
};

export default function SourceSystemsIndexPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-6 pt-16 pb-8">
          <Eyebrow>Source Systems</Eyebrow>
          <h1 className="font-display mt-3 text-[var(--text-display)] font-bold tracking-[-0.03em] text-ink">
            Seven legacy systems. One destination.
          </h1>
          <p className="mt-4 max-w-[52ch] text-ink-soft">
            Pick your source system for a detailed look at how we map its
            data into Dynamics 365.
          </p>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-[var(--section-y)]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SOURCE_SYSTEMS_CONTENT.map((s, i) => (
              <FadeUp key={s.slug} delay={(i % 3) * 0.08}>
                <Link
                  href={`/source-systems/${s.slug}`}
                  className="group relative flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-1.5 hover:border-blue hover:shadow-[var(--shadow-hover)]"
                >
                  <span className="absolute left-6 right-6 top-0 h-[2px] origin-left scale-x-0 bg-blue transition-transform duration-200 group-hover:scale-x-100" />
                  <p className="font-mono-chivora text-[10px] tracking-wide text-blue uppercase">
                    {s.label} → D365 {s.platform}
                  </p>
                  <h3 className="font-display mt-3 text-lg font-medium text-ink">
                    {s.name}
                  </h3>
                  <p className="mt-2 text-sm leading-[1.6] text-ink-soft">
                    {s.promise}
                  </p>
                </Link>
              </FadeUp>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
