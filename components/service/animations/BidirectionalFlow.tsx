"use client";

import { motion, useReducedMotion } from "framer-motion";

export function BidirectionalFlow() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="mx-auto flex h-[360px] w-full max-w-[480px] items-center justify-between rounded-[var(--radius-card)] border border-line bg-white px-10 shadow-[var(--shadow-card)]">
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy">
          <span className="font-mono-chivora text-xs font-medium text-white">D365</span>
        </div>
        <span className="font-mono-chivora text-[10px] tracking-wide text-ink-mute uppercase">
          Target
        </span>
      </div>

      <div className="relative flex-1 mx-6 h-8">
        <div className="absolute left-0 right-0 top-1 h-[2px] rounded-full bg-blue-tint" />
        <div className="absolute left-0 right-0 bottom-1 h-[2px] rounded-full bg-blue-tint" />
        {!prefersReducedMotion && (
          <>
            <motion.span
              className="absolute top-0 h-2 w-2 -translate-y-1/2 rounded-full bg-blue"
              animate={{ left: ["0%", "100%"] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
            />
            <motion.span
              className="absolute bottom-0 h-2 w-2 translate-y-1/2 rounded-full bg-blue"
              animate={{ left: ["100%", "0%"] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: 0.6 }}
            />
          </>
        )}
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-tint">
          <span className="font-mono-chivora text-xs font-medium text-blue">SRC</span>
        </div>
        <span className="font-mono-chivora text-[10px] tracking-wide text-ink-mute uppercase">
          Surviving System
        </span>
      </div>
    </div>
  );
}
