"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeUp } from "@/components/motion/FadeUp";
import { METHODOLOGY_PHASES } from "@/lib/constants";

export function MethodologyTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.7", "end 0.3"],
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="mx-auto max-w-7xl px-6 py-[var(--section-y)]"
    >
      <FadeUp>
        <Eyebrow>02 — Methodology</Eyebrow>
        <h2 className="font-display mt-3 text-[var(--text-h2)] font-bold tracking-[-0.02em] text-ink">
          Six phases. No improvisation.
        </h2>
      </FadeUp>

      <div className="relative mt-16 hidden md:block">
        <svg
          viewBox="0 0 1200 4"
          className="absolute left-0 top-[19px] w-full"
          preserveAspectRatio="none"
        >
          <motion.line
            x1="0"
            y1="2"
            x2="1200"
            y2="2"
            stroke="var(--line)"
            strokeWidth={2}
          />
          <motion.line
            x1="0"
            y1="2"
            x2="1200"
            y2="2"
            stroke="var(--blue)"
            strokeWidth={2}
            style={{ pathLength }}
          />
        </svg>

        <div className="grid grid-cols-6 gap-4">
          {METHODOLOGY_PHASES.map((phase, i) => (
            <PhaseNode key={phase.number} phase={phase} index={i} total={6} scrollYProgress={scrollYProgress} />
          ))}
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-8 border-l border-line pl-6 md:hidden">
        {METHODOLOGY_PHASES.map((phase) => (
          <div key={phase.number} className="relative">
            <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-blue" />
            <p className="font-mono-chivora text-xs text-ink-mute">{phase.number}</p>
            <h3 className="font-display mt-1 text-lg font-medium text-ink">
              {phase.name}
            </h3>
            <p className="mt-1 text-sm leading-[1.6] text-ink-soft">
              {phase.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function PhaseNode({
  phase,
  index,
  total,
  scrollYProgress,
}: {
  phase: (typeof METHODOLOGY_PHASES)[number];
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const threshold = index / total;
  const scale = useTransform(
    scrollYProgress,
    [threshold - 0.05, threshold, threshold + 0.05],
    [1, 1.15, 1]
  );
  const filled = useTransform(scrollYProgress, (v) => (v >= threshold ? 1 : 0));

  return (
    <div className="flex flex-col items-center text-center">
      <motion.span
        style={{ scale }}
        className="relative z-10 h-5 w-5 rounded-full border-2 border-blue bg-white"
      >
        <motion.span
          style={{ opacity: filled }}
          className="absolute inset-0.5 rounded-full bg-blue"
        />
      </motion.span>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        className="mt-4"
      >
        <p className="font-mono-chivora text-xs text-blue">{phase.number}</p>
        <h3 className="font-display mt-1 text-sm font-medium text-ink">
          {phase.name}
        </h3>
        <p className="mt-2 text-xs leading-[1.6] text-ink-soft">
          {phase.description}
        </p>
      </motion.div>
    </div>
  );
}
