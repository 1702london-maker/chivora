"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function FadeUp({
  children,
  delay = 0,
  fromX,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  fromX?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: fromX ? 0 : 24, x: fromX ?? 0 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
