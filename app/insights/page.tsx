import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { FadeUp } from "@/components/motion/FadeUp";
import { InnerHero } from "@/components/hero/InnerHero";
import { ArticleWrite } from "@/components/hero/animations/ArticleWrite";
import { getPublishedInsights } from "@/lib/content/insights";

export const metadata: Metadata = {
  title: "Insights | Chivora — D365 Data Migration Specialists",
  description: "Technical and strategic writing on D365 data migration.",
};

export default function InsightsIndexPage() {
  const posts = getPublishedInsights();

  return (
    <>
      <Nav />
      <main className="flex-1">
        <InnerHero
          breadcrumb={[{ label: "Insights", href: "/insights" }]}
          eyebrow="Insights"
          title="Latest thinking."
          subline="Technical and strategic writing on D365 data migration — from the specific quirks of individual source systems to the discipline that keeps a migration on track."
          primaryCta={{ label: "Book a discovery call", href: "/contact" }}
          secondaryCta={{ label: "See the methodology", href: "/methodology" }}
          visual={<ArticleWrite />}
        />

        <section className="mx-auto max-w-6xl px-6 py-[var(--section-y)]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {posts.map((post, i) => (
              <FadeUp key={post.slug} delay={i * 0.08}>
                <Link
                  href={`/insights/${post.slug}`}
                  className="group block h-full rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-1.5 hover:border-blue hover:shadow-[var(--shadow-hover)]"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono-chivora text-[10px] tracking-[0.08em] text-blue uppercase">
                      {post.category}
                    </span>
                    <span className="font-mono-chivora text-[10px] tracking-[0.08em] text-ink-mute uppercase">
                      · {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-display mt-3 text-lg font-medium text-ink">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-[1.6] text-ink-soft">
                    {post.excerpt}
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
