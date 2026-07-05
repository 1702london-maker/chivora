"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { PenLine } from "lucide-react";

const LINE_WIDTHS = ["92%", "78%", "85%", "60%", "88%", "70%"];

/**
 * Insights-page hero visual: a document builds itself line by line, a pen
 * cursor tracking down the page — a literal reading of "latest thinking."
 */
export function ArticleWrite() {
  const prefersReducedMotion = useReducedMotion();
  const [written, setWritten] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % (LINE_WIDTHS.length + 2);
      setWritten(i);
    }, 500);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <div className="relative mx-auto w-full max-w-[440px] rounded-[var(--radius-card)] border border-line bg-white p-8 shadow-[var(--shadow-card)]">
      <div className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-amber" />
        <span className="h-2.5 w-2.5 rounded-full bg-blue-tint" />
        <span className="h-2.5 w-2.5 rounded-full bg-success" />
        <span className="font-mono-chivora ml-2 text-[10px] tracking-wide text-ink-mute uppercase">
          Chivora Insights — draft.md
        </span>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <div className="h-3 w-2/3 rounded bg-ink/80" />
        {LINE_WIDTHS.map((w, i) => {
          const active = prefersReducedMotion || i < written;
          return (
            <div key={i} className="relative h-2 overflow-hidden rounded bg-gray-100">
              <motion.div
                className="h-full rounded bg-blue/25"
                animate={{ width: active ? w : "0%" }}
                transition={{ duration: 0.35 }}
              />
              {!prefersReducedMotion && i === written && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                  className="absolute -right-3 top-1/2 -translate-y-1/2"
                >
                  <PenLine className="h-3 w-3 stroke-blue" />
                </motion.span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
