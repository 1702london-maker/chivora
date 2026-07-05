"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Handshake } from "lucide-react";

const MODELS = [
  { label: "DAY RATE — REMOTE", price: "£650–£750/day" },
  { label: "DAY RATE — ON-SITE", price: "£700–£850/day" },
  { label: "RESCUE & URGENT", price: "£850–£1,000/day" },
  { label: "HEALTH CHECK", price: "£2,500–£5,000" },
  { label: "END-TO-END", price: "£35,000–£90,000+" },
  { label: "RETAINER", price: "From £1,500/mo" },
];

/**
 * How We Engage-page hero visual: a rotating ticker of engagement models
 * and their real prices, with a handshake node linking Chivora to whichever
 * model is active — literal reading of "real figures, not ranges."
 */
export function EngagementTicker() {
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % MODELS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  const current = MODELS[prefersReducedMotion ? 0 : index];

  return (
    <div className="relative mx-auto flex h-[340px] w-full max-w-[440px] flex-col items-center justify-center gap-8 rounded-[var(--radius-card)] border border-line bg-white p-8 shadow-[var(--shadow-card)]">
      <div className="absolute -inset-16 -z-10 rounded-full bg-[radial-gradient(closest-side,rgb(37_99_235/0.06),transparent)]" />

      <div className="flex items-center gap-6">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-tint">
          <span className="font-display text-sm font-bold text-ink">
            C<span className="text-blue">▪</span>
          </span>
        </div>
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <Handshake className="h-6 w-6 stroke-blue" />
        </motion.div>
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy">
          <span className="font-mono-chivora text-[10px] font-medium text-white">
            YOU
          </span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <p className="font-mono-chivora text-[10px] tracking-[0.08em] text-ink-mute uppercase">
            {current.label}
          </p>
          <p className="font-mono-chivora mt-2 text-2xl font-medium text-blue">
            {current.price}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="flex gap-1.5">
        {MODELS.map((m, i) => (
          <span
            key={m.label}
            className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
              i === (prefersReducedMotion ? 0 : index) ? "bg-blue" : "bg-line"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
