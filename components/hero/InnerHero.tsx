import Link from "next/link";
import { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/motion/FadeUp";
import { LiveMigration, type PipelineFocus } from "@/components/hero/LiveMigration";

export interface InnerHeroProps {
  breadcrumb: { label: string; href: string }[];
  eyebrow: string;
  title: string;
  subline: string;
  tags?: string[];
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  /**
   * Config for the default LiveMigration pipeline visual. Ignored if
   * `visual` is supplied — use that instead for a page that needs a
   * structurally different animation (e.g. source-system entity mapping).
   */
  animation?: {
    systems?: string[];
    targetLabel?: string;
    focus?: PipelineFocus;
  };
  /** Overrides the default pipeline visual entirely. */
  visual?: ReactNode;
}

export function InnerHero({
  breadcrumb,
  eyebrow,
  title,
  subline,
  tags,
  primaryCta,
  secondaryCta,
  animation,
  visual,
}: InnerHeroProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-12 pb-8">
      <FadeUp>
        <nav className="font-mono-chivora flex flex-wrap items-center gap-1.5 text-xs tracking-wide text-ink-mute uppercase">
          {breadcrumb.map((crumb, i) => (
            <span key={crumb.href} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3 w-3" />}
              {i === breadcrumb.length - 1 ? (
                <span className="text-ink">{crumb.label}</span>
              ) : (
                <Link href={crumb.href} className="hover:text-blue">
                  {crumb.label}
                </Link>
              )}
            </span>
          ))}
        </nav>
      </FadeUp>

      <div className="mt-8 grid grid-cols-1 items-center gap-12 lg:grid-cols-[55%_45%]">
        <div>
          <FadeUp delay={0.1}>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="font-display mt-4 text-[var(--text-display)] font-bold leading-[1.05] tracking-[-0.03em] text-ink">
              {title}
            </h1>
          </FadeUp>

          <FadeUp delay={0.25}>
            <p className="mt-6 max-w-[52ch] text-[var(--text-body)] leading-[1.7] text-ink-soft">
              {subline}
            </p>

            {tags && tags.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono-chivora rounded-full bg-blue-tint px-3 py-1 text-[10px] tracking-wide text-blue"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={primaryCta.href} variant="primary">
                {primaryCta.label}
              </Button>
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="secondary">
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.35} fromX={24}>
          {visual ?? (
            <LiveMigration
              systems={animation?.systems}
              targetLabel={animation?.targetLabel}
              focus={animation?.focus}
            />
          )}
        </FadeUp>
      </div>
    </section>
  );
}
