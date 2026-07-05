import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeUp } from "@/components/motion/FadeUp";
import { getPublishedInsights } from "@/lib/content/insights";

export function InsightsTeaser() {
  const posts = getPublishedInsights();
  if (posts.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 py-[var(--section-y)]">
      <FadeUp>
        <Eyebrow>Insights</Eyebrow>
        <h2 className="font-display mt-3 text-[var(--text-h2)] font-bold tracking-[-0.02em] text-ink">
          Latest thinking.
        </h2>
      </FadeUp>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {posts.map((post, i) => (
          <FadeUp key={post.slug} delay={i * 0.08}>
            <Link
              href={`/insights/${post.slug}`}
              className="group flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-1.5 hover:border-blue hover:shadow-[var(--shadow-hover)]"
            >
              <p className="font-mono-chivora text-[10px] tracking-[0.08em] text-blue uppercase">
                {post.category} · {post.readTime}
              </p>
              <h3 className="font-display mt-3 text-lg font-medium text-ink">
                {post.title}
              </h3>
              <p className="mt-2 text-sm leading-[1.6] text-ink-soft">
                {post.excerpt}
              </p>
              <span className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm font-medium text-blue">
                Read the full article
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </Link>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
