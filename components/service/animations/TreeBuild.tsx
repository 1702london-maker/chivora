"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const NODES = [
  { label: "GL", owner: "Finance", x: 90, y: 130 },
  { label: "AR/AP", owner: "Finance", x: 200, y: 90 },
  { label: "INVENTORY", owner: "Ops", x: 200, y: 170 },
  { label: "CUSTOMERS", owner: "Sales", x: 310, y: 130 },
];

export function TreeBuild() {
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % (NODES.length + 1);
      setVisible(i);
    }, 900);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <div className="mx-auto w-full max-w-[480px] rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-[var(--shadow-card)]">
      <p className="font-mono-chivora mb-2 text-[0.6875rem] tracking-[0.08em] text-ink-mute uppercase">
        Ownership Model
      </p>
      <svg viewBox="0 0 380 220" className="h-56 w-full">
        <circle cx="20" cy="130" r="8" fill="var(--ink)" />
        {NODES.map((n, i) => (
          <line
            key={n.label}
            x1={20}
            y1={130}
            x2={n.x}
            y2={n.y}
            stroke="var(--line)"
            strokeWidth={2}
            opacity={i < visible ? 1 : 0.2}
          />
        ))}
        {NODES.map((n, i) => (
          <motion.g
            key={n.label}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: i < visible ? 1 : 0.15, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <rect x={n.x - 45} y={n.y - 16} width={90} height={32} rx={8} fill="white" stroke="var(--blue)" strokeWidth={1.5} />
            <text x={n.x} y={n.y - 2} textAnchor="middle" fontSize="9" className="font-mono-chivora" fill="var(--ink)">
              {n.label}
            </text>
            <text x={n.x} y={n.y + 11} textAnchor="middle" fontSize="8" className="font-mono-chivora" fill="var(--blue)">
              {n.owner}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
