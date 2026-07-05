"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { METHODOLOGY_PHASES } from "@/lib/constants";

/**
 * Methodology-page hero visual: the six phases tick through in sequence,
 * each one filling and locking in before the next begins — a literal
 * reading of "six phases, no improvisation."
 */
export function PhaseTicker() {
  const prefersReducedMotion = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setActive((i) => (i + 1) % (METHODOLOGY_PHASES.length + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <div className="mx-auto w-full max-w-[440px] rounded-[var(--radius-card)] border border-line bg-white p-8 shadow-[var(--shadow-card)]">
      <p className="font-mono-chivora text-[0.6875rem] tracking-[0.08em] text-ink-mute uppercase">
        Migration Runbook
      </p>
      <div className="mt-5 flex flex-col gap-3">
        {METHODOLOGY_PHASES.map((phase, i) => {
          const done = prefersReducedMotion || i < active;
          const current = !prefersReducedMotion && i === active;
          return (
            <div key={phase.number} className="flex items-center gap-3">
              <motion.span
                animate={{
                  backgroundColor: done ? "var(--blue)" : "var(--line)",
                  scale: current ? 1.3 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="h-2.5 w-2.5 shrink-0 rounded-full"
              />
              <span className="font-mono-chivora w-8 shrink-0 text-xs text-ink-mute">
                {phase.number}
              </span>
              <span
                className={`font-display text-sm font-medium transition-colors duration-300 ${
                  done ? "text-ink" : "text-ink-mute"
                }`}
              >
                {phase.name}
              </span>
              <div className="relative h-1 flex-1 overflow-hidden rounded-full bg-gray-100">
                <motion.div
                  className="h-full rounded-full bg-blue"
                  animate={{ width: done ? "100%" : "0%" }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
