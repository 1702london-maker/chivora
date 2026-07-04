"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MousePointerClick, AlertTriangle } from "lucide-react";

export function RescueLoop() {
  const prefersReducedMotion = useReducedMotion();
  const [phase, setPhase] = useState<"stalled" | "intervening" | "resolved">(
    "stalled"
  );

  useEffect(() => {
    if (prefersReducedMotion) return;
    const t1 = setTimeout(() => setPhase("intervening"), 1400);
    const t2 = setTimeout(() => setPhase("resolved"), 2600);
    const loop = setInterval(() => setPhase("stalled"), 4600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearInterval(loop);
    };
  }, [prefersReducedMotion]);

  return (
    <div className="relative mx-auto flex h-[360px] w-full max-w-[440px] items-center justify-center rounded-[var(--radius-card)] border border-line bg-white shadow-[var(--shadow-card)]">
      <div className="absolute left-1/2 top-1/2 h-2 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-tint" />

      <motion.div
        animate={
          phase === "stalled"
            ? { x: 0, scale: [1, 1.06, 1] }
            : { x: phase === "resolved" ? 120 : 0 }
        }
        transition={
          phase === "stalled"
            ? { duration: 0.6, repeat: Infinity }
            : { duration: 1, ease: [0.22, 1, 0.36, 1] }
        }
        className={`absolute h-[10px] w-[24px] rounded-md ${
          phase === "resolved" ? "bg-blue" : "bg-amber"
        }`}
      />

      {phase !== "resolved" && (
        <motion.span
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="absolute -top-6 left-1/2 -translate-x-1/2"
        >
          <AlertTriangle className="h-4 w-4 stroke-amber" />
        </motion.span>
      )}

      {phase === "intervening" && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute bottom-10 flex flex-col items-center gap-1"
        >
          <MousePointerClick className="h-5 w-5 stroke-blue" />
          <span className="font-mono-chivora text-[10px] tracking-wide text-ink-mute uppercase">
            Chivora intervenes
          </span>
        </motion.div>
      )}

      {phase === "resolved" && (
        <motion.span
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute bottom-10 font-mono-chivora text-xs font-medium text-success"
        >
          ✓ UNSTUCK
        </motion.span>
      )}
    </div>
  );
}
