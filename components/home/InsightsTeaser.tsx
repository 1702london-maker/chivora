import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeUp } from "@/components/motion/FadeUp";
import { INSIGHTS_DRAFTS } from "@/lib/constants";

export function InsightsTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-[var(--section-y)]">
      <FadeUp>
        <Eyebrow>Insights</Eyebrow>
        <h2 className="font-display mt-3 text-[var(--text-h2)] font-bold tracking-[-0.02em] text-ink">
          Latest thinking.
        </h2>
      </FadeUp>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {INSIGHTS_DRAFTS.map((post, i) => (
          <FadeUp key={post.title} delay={i * 0.08}>
            <div className="h-full rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-1.5 hover:border-blue hover:shadow-[var(--shadow-hover)]">
              <p className="font-mono-chivora text-[10px] tracking-[0.08em] text-blue uppercase">
                {post.date}
              </p>
              <h3 className="font-display mt-3 text-lg font-medium text-ink">
                {post.title}
              </h3>
              <p className="mt-2 text-sm leading-[1.6] text-ink-soft">
                {post.excerpt}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
