import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { FadeUp } from "@/components/motion/FadeUp";
import { Button } from "@/components/ui/Button";
import { INSIGHTS, getInsightBySlug } from "@/lib/content/insights";

export function generateStaticParams() {
  return INSIGHTS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsightBySlug(slug);
  if (!article) return {};

  return {
    title: `${article.title} | Chivora Insights`,
    description: article.excerpt,
  };
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getInsightBySlug(slug);
  if (!article) notFound();

  return (
    <>
      <Nav />
      <main className="flex-1">
        <article className="mx-auto max-w-4xl px-6 py-16">
          <FadeUp>
            <div className="flex items-center gap-2">
              <span className="font-mono-chivora text-[10px] tracking-[0.08em] text-blue uppercase">
                {article.category}
              </span>
              <span className="font-mono-chivora text-[10px] tracking-[0.08em] text-ink-mute uppercase">
                · {article.readTime}
              </span>
            </div>
            <h1 className="font-display mt-4 text-[var(--text-h2)] font-bold tracking-[-0.02em] text-ink">
              {article.title}
            </h1>
            {article.author && (
              <p className="mt-3 text-sm text-ink-mute">By {article.author}</p>
            )}
          </FadeUp>

          <div className="mt-8 flex flex-col gap-6">
            {article.body.map((block, i) => {
              if (block.startsWith("### ")) {
                return (
                  <FadeUp key={i} delay={i * 0.03}>
                    <h3 className="font-display mt-2 text-lg font-medium text-ink">
                      {block.slice(4)}
                    </h3>
                  </FadeUp>
                );
              }
              if (block.startsWith("## ")) {
                return (
                  <FadeUp key={i} delay={i * 0.03}>
                    <h2 className="font-display mt-4 text-xl font-bold tracking-[-0.01em] text-ink">
                      {block.slice(3)}
                    </h2>
                  </FadeUp>
                );
              }
              return (
                <FadeUp key={i} delay={i * 0.03}>
                  <p className="text-justify text-[var(--text-body)] leading-[1.7] text-ink-soft">
                    {block}
                  </p>
                </FadeUp>
              );
            })}
          </div>

          {article.pullQuote && (
            <FadeUp>
              <blockquote className="mt-10 border-l-2 border-blue pl-6">
                <span className="font-display block text-4xl leading-none text-blue">
                  &quot;
                </span>
                <p className="font-display -mt-2 text-xl font-medium text-ink">
                  {article.pullQuote.text}
                </p>
                <p className="mt-2 font-mono-chivora text-xs tracking-[0.08em] text-ink-mute uppercase">
                  {article.pullQuote.attribution}
                </p>
              </blockquote>
            </FadeUp>
          )}

          <div className="mt-12 border-t border-line pt-8">
            <Button href="/contact" variant="primary">
              Book a discovery call
            </Button>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
