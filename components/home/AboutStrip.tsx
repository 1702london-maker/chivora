import { FadeUp } from "@/components/motion/FadeUp";

// Placeholder — director photo, name and quote are not yet supplied.
// Replace with real attribution before launch. Do not invent a name or quote.
export function AboutStrip() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-[var(--section-y)]">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <FadeUp fromX={-32}>
          <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[var(--radius-card)] border-2 border-blue bg-gradient-to-br from-ink to-navy">
            <div className="flex h-full items-center justify-center">
              <span className="font-mono-chivora text-xs tracking-[0.08em] text-white/40 uppercase">
                Director photo placeholder
              </span>
            </div>
          </div>
        </FadeUp>

        <FadeUp fromX={32}>
          <span className="font-display block text-6xl leading-none text-blue">
            &quot;
          </span>
          <p className="font-display -mt-4 text-[var(--text-h3)] font-medium text-ink">
            [Quote placeholder — awaiting director sign-off. We only do data
            migration. Not configuration, not project rescue theatre, not
            general IT. That focus is the whole point.]
          </p>
          <p className="font-mono-chivora mt-4 text-xs tracking-[0.08em] text-ink-mute uppercase">
            Director, Chivora — name pending
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
