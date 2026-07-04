"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const ROWS = 6;

export function ScanScore() {
  const prefersReducedMotion = useReducedMotion();
  const [scored, setScored] = useState<Array<"amber" | "success" | null>>(
    Array(ROWS).fill(null)
  );
  const [scanY, setScanY] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    let i = 0;
    const interval = setInterval(() => {
      setScanY(i);
      setScored((s) => {
        const next = [...s];
        next[i] = i % 3 === 0 ? "amber" : "success";
        return next;
      });
      i += 1;
      if (i >= ROWS) {
        setTimeout(() => {
          setScored(Array(ROWS).fill(null));
          i = 0;
        }, 1400);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  const score = scored.filter(Boolean).length;
  const pct = Math.round((score / ROWS) * 100);

  return (
    <div className="relative mx-auto w-full max-w-[480px] rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-[var(--shadow-card)]">
      <p className="font-mono-chivora text-[0.6875rem] tracking-[0.08em] text-ink-mute uppercase">
        Data Quality Scan
      </p>
      <div className="relative mt-4 flex flex-col gap-2.5">
        {Array.from({ length: ROWS }).map((_, i) => (
          <div
            key={i}
            className="relative flex items-center justify-between rounded-md bg-gray-50 px-3 py-2"
          >
            <span className="h-2 w-28 rounded bg-gray-200" />
            <span
              className={`font-mono-chivora text-xs font-medium transition-colors duration-300 ${
                scored[i] === "success"
                  ? "text-success"
                  : scored[i] === "amber"
                  ? "text-amber"
                  : "text-ink-mute/40"
              }`}
            >
              {scored[i] === "success" ? "✓ CLEAN" : scored[i] === "amber" ? "△ REVIEW" : "…"}
            </span>
          </div>
        ))}
        {!prefersReducedMotion && (
          <motion.div
            className="pointer-events-none absolute left-0 right-0 h-8 bg-[linear-gradient(180deg,transparent,rgb(37_99_235/0.12),transparent)]"
            animate={{ top: `${(scanY / ROWS) * 100}%` }}
            transition={{ duration: 0.4 }}
          />
        )}
      </div>
      <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
        <span className="font-mono-chivora text-[10px] tracking-[0.08em] text-ink-mute uppercase">
          Readiness score
        </span>
        <span className="font-mono-chivora text-lg font-medium text-blue">
          {pct}%
        </span>
      </div>
    </div>
  );
}
