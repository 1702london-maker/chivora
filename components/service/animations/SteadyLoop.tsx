"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export function SteadyLoop() {
  const prefersReducedMotion = useReducedMotion();
  const [resolved, setResolved] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => setResolved((r) => !r), 2200);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <div className="mx-auto flex h-[360px] w-full max-w-[400px] flex-col items-center justify-center gap-10 rounded-[var(--radius-card)] border border-line bg-white shadow-[var(--shadow-card)]">
      <div className="flex items-center gap-10">
        <div className="flex flex-col items-center gap-2">
          <motion.div
            animate={{ opacity: resolved ? 0.3 : 1, scale: resolved ? 0.94 : 1 }}
            transition={{ duration: 0.6 }}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-tint"
          >
            <AlertCircle className="h-6 w-6 stroke-amber" />
          </motion.div>
          <span className="font-mono-chivora text-[10px] tracking-wide text-ink-mute uppercase">
            Issue
          </span>
        </div>

        <motion.div
          className="h-[2px] w-16 rounded-full bg-blue-tint"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.2, repeat: Infinity }}
        />

        <div className="flex flex-col items-center gap-2">
          <motion.div
            animate={{ opacity: resolved ? 1 : 0.3, scale: resolved ? 1 : 0.94 }}
            transition={{ duration: 0.6 }}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-tint"
          >
            <CheckCircle2 className="h-6 w-6 stroke-success" />
          </motion.div>
          <span className="font-mono-chivora text-[10px] tracking-wide text-ink-mute uppercase">
            Resolved
          </span>
        </div>
      </div>
      <p className="font-mono-chivora text-[10px] tracking-[0.08em] text-ink-mute uppercase">
        Steady-state support, on a retainer
      </p>
    </div>
  );
}
