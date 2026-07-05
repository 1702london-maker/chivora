"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { DottedArc } from "@/components/motion/DottedArc";
import { FadeUp } from "@/components/motion/FadeUp";
import { SOURCE_SYSTEMS } from "@/lib/constants";

export function ChessboardRows() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-[var(--section-y)]">
      <Row flip={false}>
        <SourceDepthVisual />
        <div>
          <h3 className="font-display text-[var(--text-h3)] font-medium text-ink">
            Six legacy systems. Hands-on, not theoretical.
          </h3>
          <p className="mt-3 max-w-[46ch] text-ink-soft">
            We&apos;ve worked inside SAP, Oracle, Sage, NAV, BPCS and IFS.
            Every migration starts with people who already know the source
            data model.
          </p>
        </div>
      </Row>

      <Row flip>
        <div>
          <h3 className="font-display text-[var(--text-h3)] font-medium text-ink">
            Every balance agrees before we sign off.
          </h3>
          <p className="mt-3 max-w-[46ch] text-ink-soft">
            No cutover is cleared until every ledger, every open item and
            every asset value reconciles against the source system.
          </p>
        </div>
        <ReconciliationVisual />
      </Row>

      <Row flip={false}>
        <OrgTreeVisual />
        <div>
          <h3 className="font-display text-[var(--text-h3)] font-medium text-ink">
            We plug into your team. We don&apos;t disrupt it.
          </h3>
          <p className="mt-3 max-w-[46ch] text-ink-soft">
            Data migration sits alongside your programme, functional
            consultants and SI partner, not in competition with them.
          </p>
          <Link
            href="/how-we-engage"
            className="mt-3 inline-block text-sm font-medium text-blue"
          >
            See how SI partner engagements work →
          </Link>
        </div>
      </Row>
    </section>
  );
}

function Row({ children, flip }: { children: [React.ReactNode, React.ReactNode]; flip: boolean }) {
  const [visual, text] = children;
  return (
    <div
      className={`grid grid-cols-1 items-center gap-12 py-16 md:grid-cols-2 ${
        flip ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <FadeUp fromX={flip ? 32 : -32}>{visual}</FadeUp>
      <FadeUp fromX={flip ? -32 : 32}>{text}</FadeUp>
    </div>
  );
}

function SourceDepthVisual() {
  const systems = SOURCE_SYSTEMS.slice(0, 6);
  const positions = systems.map((_, i) => {
    const angle = (360 / systems.length) * i - 90;
    const rad = (angle * Math.PI) / 180;
    return { x: 200 + 150 * Math.cos(rad), y: 160 + 130 * Math.sin(rad) };
  });

  return (
    <div className="flex justify-center rounded-[var(--radius-card)] border border-line bg-white p-8 shadow-[var(--shadow-card)]">
      <svg viewBox="0 0 400 320" className="h-72 w-full">
        {positions.map((p, i) => (
          <DottedArc key={i} d={`M200,160 L${p.x},${p.y}`} />
        ))}
        <circle cx={200} cy={160} r={28} fill="var(--blue)" />
        <text x={200} y={165} textAnchor="middle" className="font-mono-chivora" fill="white" fontSize="11">
          C▪
        </text>
        {positions.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r={26} fill="white" stroke="var(--line)" />
            <text
              x={p.x}
              y={p.y + 4}
              textAnchor="middle"
              className="font-mono-chivora"
              fill="var(--ink)"
              fontSize="9"
            >
              {systems[i].name.split(" ")[0]}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

function ReconciliationVisual() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [reconciled, setReconciled] = useState<boolean[]>(Array(6).fill(false));
  const [stamped, setStamped] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const timers = Array.from({ length: 6 }, (_, i) =>
      setTimeout(() => {
        setReconciled((r) => {
          const next = [...r];
          next[i] = true;
          return next;
        });
      }, i * 200)
    );
    const stampTimer = setTimeout(() => setStamped(true), 6 * 200 + 300);
    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(stampTimer);
    };
  }, [inView]);

  return (
    <div
      ref={ref}
      className="relative rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-[var(--shadow-card)]"
    >
      <div className="flex flex-col gap-2">
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={i}
            className="flex items-center justify-between rounded-md bg-gray-50 px-3 py-2"
          >
            <span className="h-2 w-24 rounded bg-gray-200" />
            <span
              className={`font-mono-chivora text-xs font-medium transition-colors duration-300 ${
                reconciled[i] ? "text-success" : "text-amber"
              }`}
            >
              {reconciled[i] ? "✓ 0.00" : "△ VARIANCE"}
            </span>
          </div>
        ))}
      </div>
      {stamped && (
        <motion.div
          initial={{ scale: 0, rotate: -8, opacity: 0 }}
          animate={{ scale: 1, rotate: -8, opacity: 1 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="font-mono-chivora absolute -top-4 right-4 rounded border-2 border-success bg-white px-3 py-1 text-xs font-medium text-success"
        >
          RECONCILED
        </motion.div>
      )}
    </div>
  );
}

function OrgTreeVisual() {
  return (
    <div className="flex justify-center rounded-[var(--radius-card)] border border-line bg-white p-8 shadow-[var(--shadow-card)]">
      <svg viewBox="0 0 360 220" className="h-56 w-full">
        <line x1="180" y1="40" x2="80" y2="120" stroke="var(--line)" strokeWidth={2} />
        <line x1="180" y1="40" x2="180" y2="120" stroke="var(--blue)" strokeWidth={2} />
        <line x1="180" y1="40" x2="280" y2="120" stroke="var(--line)" strokeWidth={2} />

        <rect x="130" y="12" width="100" height="36" rx="8" fill="var(--ink)" />
        <text x="180" y="34" textAnchor="middle" fill="white" fontSize="11" className="font-mono-chivora">
          PROGRAMME
        </text>

        <rect x="30" y="120" width="100" height="36" rx="8" fill="white" stroke="var(--line)" />
        <text x="80" y="142" textAnchor="middle" fill="var(--ink-mute)" fontSize="10" className="font-mono-chivora">
          FUNCTIONAL
        </text>

        <motion.rect
          x="130"
          y="120"
          width="100"
          height="36"
          rx="8"
          fill="var(--blue-tint)"
          stroke="var(--blue)"
          strokeWidth={2}
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <text x="180" y="142" textAnchor="middle" fill="var(--blue)" fontSize="10" className="font-mono-chivora">
          DATA MIGRATION
        </text>

        <rect x="230" y="120" width="100" height="36" rx="8" fill="white" stroke="var(--line)" />
        <text x="280" y="142" textAnchor="middle" fill="var(--ink-mute)" fontSize="10" className="font-mono-chivora">
          SI PARTNER
        </text>
      </svg>
    </div>
  );
}
