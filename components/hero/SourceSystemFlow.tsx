"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { GitCompareArrows } from "lucide-react";

export interface MappingRow {
  source: string;
  target: string;
}

export interface SourceSystemFlowProps {
  systemLabel: string;
  rows: MappingRow[];
}

const CYCLE_MS = 2600;

/**
 * Distinct hero visual for source-system pages: a table-level mapping loop
 * built from that system's real entity codes (KNA1 -> CustTable, etc.),
 * driven through a single MAP & VALIDATE node. Deliberately different in
 * composition from the service-page LiveMigration pipeline — no shared
 * layout, no shared node set.
 */
export function SourceSystemFlow({ systemLabel, rows }: SourceSystemFlowProps) {
  const prefersReducedMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [matched, setMatched] = useState<Set<number>>(new Set());

  const items = useMemo(() => rows.slice(0, 6), [rows]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setActive((i) => {
        const next = (i + 1) % items.length;
        setMatched((prev) => new Set(prev).add(i));
        if (next === 0) {
          setTimeout(() => setMatched(new Set()), 400);
        }
        return next;
      });
    }, CYCLE_MS);
    return () => clearInterval(interval);
  }, [items.length, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <div className="mx-auto w-full max-w-[520px] rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-[var(--shadow-card)]">
        <p className="font-mono-chivora text-[0.6875rem] tracking-[0.08em] text-ink-mute uppercase">
          {systemLabel} — Entity Mapping
        </p>
        <div className="mt-4 flex flex-col gap-2">
          {items.map((row) => (
            <div
              key={row.source}
              className="flex items-center justify-between rounded-md bg-gray-50 px-3 py-2 text-xs"
            >
              <span className="font-mono-chivora text-ink-soft">{row.source}</span>
              <GitCompareArrows className="h-3.5 w-3.5 stroke-blue" />
              <span className="font-mono-chivora text-blue">{row.target}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative mx-auto w-full max-w-[520px] rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-[var(--shadow-card)]">
      <div className="absolute -inset-16 -z-10 rounded-full bg-[radial-gradient(closest-side,rgb(37_99_235/0.05),transparent)]" />

      <p className="font-mono-chivora text-[0.6875rem] tracking-[0.08em] text-ink-mute uppercase">
        {systemLabel} — Entity Mapping
      </p>

      <div className="mt-5 flex flex-col gap-2.5">
        {items.map((row, i) => {
          const isActive = i === active;
          const isMatched = matched.has(i);
          return (
            <div
              key={row.source}
              className={`relative flex items-center justify-between rounded-lg border px-3 py-2.5 transition-colors duration-300 ${
                isActive
                  ? "border-blue bg-blue-tint"
                  : isMatched
                  ? "border-line bg-white"
                  : "border-line bg-gray-50"
              }`}
            >
              <span className="font-mono-chivora text-xs text-ink-soft">
                {row.source}
              </span>

              <div className="relative flex h-6 w-10 items-center justify-center">
                <motion.div
                  animate={
                    isActive
                      ? { rotate: [0, 8, -8, 0], scale: [1, 1.15, 1] }
                      : { rotate: 0, scale: 1 }
                  }
                  transition={{ duration: 0.6 }}
                >
                  <GitCompareArrows
                    className={`h-4 w-4 transition-colors duration-300 ${
                      isActive || isMatched ? "stroke-blue" : "stroke-ink-mute"
                    }`}
                  />
                </motion.div>
                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.4 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.4 }}
                      className="absolute -top-2 -right-1 text-success text-[10px]"
                    >
                      ✓
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              <span
                className={`font-mono-chivora text-xs transition-colors duration-300 ${
                  isActive || isMatched ? "text-blue" : "text-ink-mute"
                }`}
              >
                {row.target}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex items-center justify-center gap-2 border-t border-line pt-4">
        <span className="relative flex h-2.5 w-2.5">
          <motion.span
            className="absolute inline-flex h-full w-full rounded-full bg-blue"
            animate={{ scale: [1, 2], opacity: [0.6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity }}
          />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue" />
        </span>
        <span className="font-mono-chivora text-[10px] tracking-[0.08em] text-ink-mute uppercase">
          Mapping &amp; validating entities
        </span>
      </div>
    </div>
  );
}
