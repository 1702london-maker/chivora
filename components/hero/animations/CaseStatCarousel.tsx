"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { CASE_STUDIES } from "@/lib/content/caseStudies";

/**
 * Case Studies-page hero visual: a single card cycles through each
 * modelled engagement, its headline stat and sub-stats sliding in and out
 * like a rotating results deck.
 */
export function CaseStatCarousel() {
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const cases = CASE_STUDIES.slice(0, 4);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % cases.length);
    }, 2600);
    return () => clearInterval(interval);
  }, [prefersReducedMotion, cases.length]);

  const current = cases[prefersReducedMotion ? 0 : index];

  return (
    <div className="relative mx-auto h-[340px] w-full max-w-[440px] overflow-hidden rounded-[var(--radius-card)] border border-line bg-white p-8 shadow-[var(--shadow-card)]">
      <AnimatePresence mode="wait">
        <motion.div
          key={current.slug}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono-chivora text-[10px] tracking-wide text-ink-mute uppercase">
            {current.sector} · {current.sourceSystem} → {current.targetPlatform}
          </p>
          <p className="font-mono-chivora mt-5 text-5xl font-medium text-blue">
            {current.stat}
          </p>
          <p className="mt-1 text-sm text-ink-soft">{current.statLabel}</p>
          <div className="mt-6 flex flex-col gap-2">
            {current.subStats.map((s) => (
              <span
                key={s}
                className="font-mono-chivora text-[11px] tracking-wide text-ink-mute"
              >
                · {s}
              </span>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-6 left-8 flex gap-1.5">
        {cases.map((c, i) => (
          <span
            key={c.slug}
            className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
              i === (prefersReducedMotion ? 0 : index) ? "bg-blue" : "bg-line"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
