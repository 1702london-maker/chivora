"use client";

import { motion } from "framer-motion";

export function DottedArc({
  d,
  onNavy = false,
  className = "",
}: {
  d: string;
  onNavy?: boolean;
  className?: string;
}) {
  return (
    <motion.path
      d={d}
      fill="none"
      stroke={onNavy ? "rgba(255,255,255,0.25)" : "rgba(37,99,235,0.3)"}
      strokeWidth={3}
      strokeLinecap="round"
      strokeDasharray="0.1 10"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    />
  );
}
