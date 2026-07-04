"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";

const PHASES = ["DISCOVER", "DESIGN", "BUILD", "TEST", "CUTOVER", "STABILISE"];

export function GanttFill() {
  const prefersReducedMotion = useReducedMotion();
  const [filled, setFilled] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % (PHASES.length + 1);
      setFilled(i);
    }, 900);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <div className="mx-auto w-full max-w-[480px] rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-[var(--shadow-card)]">
      <p className="font-mono-chivora text-[0.6875rem] tracking-[0.08em] text-ink-mute uppercase">
        Cutover Plan
      </p>
      <div className="mt-4 flex flex-col gap-2.5">
        {PHASES.map((phase, i) => {
          const done = i < filled;
          return (
            <div key={phase} className="flex items-center gap-3">
              <span className="font-mono-chivora w-24 shrink-0 text-[10px] tracking-wide text-ink-mute uppercase">
                {phase}
              </span>
              <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-gray-100">
                <motion.div
                  className="h-full rounded-full bg-blue"
                  animate={{ width: done ? "100%" : "0%" }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              {done && <Check className="h-4 w-4 shrink-0 stroke-success" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
