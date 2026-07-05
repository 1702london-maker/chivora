"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Settings, Users, ClipboardList, Server, Check } from "lucide-react";

const FADING = [
  { key: "config", label: "CONFIGURATION", Icon: Settings },
  { key: "pm", label: "PROJECT MANAGEMENT", Icon: ClipboardList },
  { key: "it", label: "GENERAL IT", Icon: Server },
];

/**
 * About-page hero visual: distractions (configuration, PM, general IT) fade
 * out one by one, leaving DATA MIGRATION as the single focus that remains —
 * a visual reading of "we only do one thing."
 */
export function IdentityFocus() {
  const prefersReducedMotion = useReducedMotion();
  const [cleared, setCleared] = useState<number>(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % (FADING.length + 2);
      setCleared(i);
    }, 1100);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  const allCleared = cleared >= FADING.length;

  return (
    <div className="relative mx-auto flex h-[400px] w-full max-w-[440px] flex-col items-center justify-center gap-6 rounded-[var(--radius-card)] border border-line bg-white p-8 shadow-[var(--shadow-card)]">
      <div className="absolute -inset-16 -z-10 rounded-full bg-[radial-gradient(closest-side,rgb(37_99_235/0.06),transparent)]" />

      <div className="flex flex-col gap-3">
        {FADING.map((item, i) => {
          const isCleared = prefersReducedMotion ? true : i < cleared;
          const Icon = item.Icon;
          return (
            <motion.div
              key={item.key}
              animate={{ opacity: isCleared ? 0.25 : 1, x: isCleared ? -8 : 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 rounded-lg border border-line px-4 py-2.5"
            >
              <Icon className="h-4 w-4 stroke-ink-mute" />
              <span className="font-mono-chivora text-xs tracking-wide text-ink-mute line-through decoration-ink-mute/40">
                {item.label}
              </span>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        animate={{
          scale: allCleared || prefersReducedMotion ? 1.08 : 1,
          borderColor: allCleared || prefersReducedMotion ? "var(--blue)" : "var(--line)",
        }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 rounded-lg border-2 bg-blue-tint px-5 py-3"
      >
        <Users className="h-5 w-5 stroke-blue" />
        <span className="font-mono-chivora text-sm font-medium tracking-wide text-blue">
          DATA MIGRATION
        </span>
        {(allCleared || prefersReducedMotion) && (
          <Check className="h-4 w-4 stroke-success" />
        )}
      </motion.div>
    </div>
  );
}
