"use client";

import { motion } from "framer-motion";

const WORDS = ["Cleanly.", "Completely.", "On time."];
const DELAYS = [0.6, 0.75, 0.9];

export function HeroWords() {
  return (
    <p className="font-display flex flex-wrap gap-x-3 text-[var(--text-display)] font-bold leading-[1.05] tracking-[-0.03em] text-blue">
      {WORDS.map((word, i) => (
        <motion.span
          key={word}
          initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: DELAYS[i], duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}
