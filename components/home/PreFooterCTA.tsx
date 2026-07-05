"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";

type Particle = { left: number; top: number; duration: number; delay: number };

export function PreFooterCTA() {
  const prefersReducedMotion = useReducedMotion();
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 40 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 12 + Math.random() * 12,
        delay: Math.random() * 6,
      }))
    );
  }, []);

  return (
    <section className="relative overflow-hidden bg-navy py-[var(--section-y)]">
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue opacity-[0.06] blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-blue opacity-[0.06] blur-3xl" />

      {!prefersReducedMotion &&
        particles.map((p, i) => (
          <motion.span
            key={i}
            className="absolute h-[2px] w-[2px] rounded-full bg-blue"
            style={{ left: `${p.left}%`, top: `${p.top}%`, opacity: 0.2 }}
            animate={{ y: [0, -40, 0] }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-[var(--text-h2)] font-bold tracking-[-0.02em] text-white">
          Planning a D365 migration?
        </h2>
        <p className="font-display mt-2 text-[var(--text-h2)] font-bold tracking-[-0.02em] text-blue-bright">
          Start with a Health Check.
        </p>
        <p className="font-mono-chivora mt-4 text-xs tracking-[0.08em] text-white/50 uppercase">
          From £2,500 · 5–10 days · Any source system
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/services/data-migration-health-check" className="!bg-white !text-navy">
            Book a Health Check
          </Button>
          <Button href="/contact" variant="ghost-navy">
            Talk to us first
          </Button>
        </div>
      </div>
    </section>
  );
}
