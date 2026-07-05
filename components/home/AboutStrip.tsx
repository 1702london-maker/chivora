import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeUp } from "@/components/motion/FadeUp";

export function AboutStrip() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-[var(--section-y)] text-center">
      <FadeUp>
        <Eyebrow>Why Chivora Exists — In The Founder&apos;s Own Words</Eyebrow>
        <span className="font-display mt-4 block text-6xl leading-none text-blue">
          &quot;
        </span>
        <p className="font-display -mt-2 text-[var(--text-h3)] font-medium text-ink">
          Most D365 implementations treat data migration as a box to tick. It
          gets handed to a functional consultant with twelve other
          responsibilities, no dedicated tooling, and no clear sign-off
          process. That&apos;s why it&apos;s the most common reason go-lives
          slip, cost overruns happen, and post-live reconciliation becomes a
          six-month headache. I built Chivora because that problem is
          entirely preventable — if someone owns it properly from day one.
          We are that someone.
        </p>
        <p className="font-mono-chivora mt-5 text-xs tracking-[0.08em] text-ink-mute uppercase">
          Sunday Ukwungwu — Founder &amp; Director, Chivora
        </p>
        <p className="mt-1 text-xs text-ink-mute">
          Trading name of Nwoye Concepts Ltd, registered in England &amp; Wales
        </p>
      </FadeUp>
    </section>
  );
}
