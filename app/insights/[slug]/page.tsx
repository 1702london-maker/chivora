import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { FadeUp } from "@/components/motion/FadeUp";
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
        <article className="mx-auto max-w-[680px] px-6 py-16">
          <FadeUp>
            <div className="flex items-center gap-2">
              <span className="font-mono-chivora text-[10px] tracking-[0.08em] text-blue uppercase">
                {article.date}
              </span>
              <span className="font-mono-chivora text-[10px] tracking-[0.08em] text-ink-mute uppercase">
                · {article.category} · {article.readTime}
              </span>
            </div>
            <h1 className="font-display mt-4 text-[var(--text-h2)] font-bold tracking-[-0.02em] text-ink">
              {article.title}
            </h1>
          </FadeUp>

          <div className="mt-8 flex flex-col gap-6">
            {article.body.map((para, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <p className="text-[var(--text-body)] leading-[1.7] text-ink-soft">
                  {para}
                </p>
              </FadeUp>
            ))}
          </div>

          {article.pullQuote && (
            <FadeUp>
              <blockquote className="mt-10 border-l-2 border-blue pl-6">
                <span className="font-display block text-4xl leading-none text-blue">
                  &quot;
                </span>
                <p className="font-display -mt-2 text-xl font-medium text-ink">
                  {article.pullQuote}
                </p>
              </blockquote>
            </FadeUp>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
