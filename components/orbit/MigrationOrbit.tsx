"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { DATA_DOMAINS, SOURCE_SYSTEMS } from "@/lib/constants";

const SIZE = 640;
const CENTER = SIZE / 2;
const R1 = 180;
const R2 = 280;

function polar(r: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: CENTER + r * Math.cos(rad), y: CENTER + r * Math.sin(rad) };
}

export function MigrationOrbit() {
  const prefersReducedMotion = useReducedMotion();
  const [hovered, setHovered] = useState<string | null>(null);

  const domainChips = useMemo(
    () =>
      DATA_DOMAINS.map((d, i) => ({
        ...d,
        angle: (360 / DATA_DOMAINS.length) * i,
      })),
    []
  );

  const sourceChips = useMemo(
    () =>
      SOURCE_SYSTEMS.map((s, i) => ({
        ...s,
        angle: (360 / SOURCE_SYSTEMS.length) * i + 25,
      })),
    []
  );

  const paused = hovered !== null;

  return (
    <div
      className="relative mx-auto"
      style={{ width: SIZE, height: SIZE, maxWidth: "100%", aspectRatio: "1 / 1" }}
    >
      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="absolute inset-0 h-full w-full">
        <motion.circle
          cx={CENTER}
          cy={CENTER}
          r={R1}
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth={1}
          strokeDasharray="2 8"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        />
        <motion.circle
          cx={CENTER}
          cy={CENTER}
          r={R2}
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth={1}
          strokeDasharray="2 8"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
        />

        {/* beam hub -> D365 node */}
        <motion.line
          x1={CENTER}
          y1={CENTER}
          x2={SIZE - 70}
          y2={SIZE - 70}
          stroke="var(--blue)"
          strokeWidth={2}
          strokeDasharray="6 6"
          animate={prefersReducedMotion ? {} : { strokeDashoffset: [0, -24] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      {/* RING 1 — domain chips */}
      <motion.div
        className="absolute inset-0"
        animate={prefersReducedMotion || paused ? {} : { rotate: 360 }}
        transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
      >
        {domainChips.map((d) => {
          const pos = polar(R1, d.angle);
          return (
            <motion.div
              key={d.code}
              className="absolute"
              style={{ left: pos.x, top: pos.y, translate: "-50% -50%" }}
              animate={prefersReducedMotion || paused ? {} : { rotate: -360 }}
              transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
            >
              <button
                onMouseEnter={() => setHovered(d.code)}
                onMouseLeave={() => setHovered(null)}
                className={`font-mono-chivora rounded-full bg-white px-3 py-1.5 text-xs font-medium text-ink transition-all duration-200 ${
                  hovered === d.code ? "scale-[1.12] ring-2 ring-blue" : ""
                }`}
              >
                {d.code}
              </button>
              {hovered === d.code && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute left-1/2 top-full z-20 mt-2 w-56 -translate-x-1/2 rounded-xl border border-line bg-white p-3 text-left shadow-[var(--shadow-card)]"
                >
                  <p className="font-display text-sm font-medium text-ink">
                    {d.name.toUpperCase()}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-ink-soft">
                    {d.description}
                  </p>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </motion.div>

      {/* RING 2 — source system chips */}
      <motion.div
        className="absolute inset-0"
        animate={prefersReducedMotion || paused ? {} : { rotate: -360 }}
        transition={{ duration: 72, repeat: Infinity, ease: "linear" }}
      >
        {sourceChips.map((s) => {
          const pos = polar(R2, s.angle);
          return (
            <motion.div
              key={s.slug}
              className="absolute"
              style={{ left: pos.x, top: pos.y, translate: "-50% -50%" }}
              animate={prefersReducedMotion || paused ? {} : { rotate: 360 }}
              transition={{ duration: 72, repeat: Infinity, ease: "linear" }}
            >
              <span className="font-mono-chivora rounded-full bg-navy-soft px-3 py-1.5 text-xs font-medium text-white">
                {s.name.toUpperCase()}
              </span>
            </motion.div>
          );
        })}
      </motion.div>

      {/* HUB */}
      <div
        className="absolute flex items-center justify-center rounded-full bg-white"
        style={{
          left: CENTER,
          top: CENTER,
          width: 96,
          height: 96,
          translate: "-50% -50%",
        }}
      >
        <motion.span
          animate={
            prefersReducedMotion ? {} : { scale: [1, 1.12, 1], opacity: [0.4, 0, 0.4] }
          }
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full border-2 border-blue"
        />
        <span className="font-display text-lg font-bold text-ink">
          C<span className="text-blue">▪</span>
        </span>
      </div>

      {/* D365 node */}
      <div
        className="absolute flex items-center justify-center rounded-2xl bg-blue"
        style={{ right: 6, bottom: 6, width: 64, height: 64 }}
      >
        <span className="font-mono-chivora text-xs font-medium text-white">
          D365
        </span>
      </div>

      {!prefersReducedMotion && <OrbitParticles />}
    </div>
  );
}

function OrbitParticles() {
  const particles = useMemo(() => Array.from({ length: 6 }, (_, i) => i), []);
  return (
    <>
      {particles.map((i) => (
        <motion.span
          key={i}
          className="absolute h-[3px] w-[3px] rounded-full bg-blue"
          style={{ left: CENTER, top: CENTER }}
          animate={{
            x: [0, SIZE / 2 - 70 - CENTER],
            y: [0, SIZE / 2 - 70 - CENTER],
            opacity: [1, 1, 0],
            scale: [1, 1, 0],
          }}
          transition={{
            duration: 0.9,
            repeat: Infinity,
            delay: i * (2.4 / particles.length),
            ease: "easeIn",
          }}
        />
      ))}
    </>
  );
}
