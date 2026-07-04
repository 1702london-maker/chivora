"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item, i) => (
        <motion.li
          key={item}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="flex items-start gap-3"
        >
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 stroke-blue" />
          <span className="text-sm leading-[1.6] text-ink-soft">{item}</span>
        </motion.li>
      ))}
    </ul>
  );
}
