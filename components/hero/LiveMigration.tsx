"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useAnimationFrame, useReducedMotion } from "framer-motion";
import { Download, Sparkles, Shuffle, ShieldCheck } from "lucide-react";

const DEFAULT_SYSTEMS = [
  "SAGE 200",
  "SAP ECC",
  "DYNAMICS NAV",
  "ORACLE EBS",
  "BPCS",
  "IFS",
];

const DIRTY_ROWS = [1, 4]; // rows 2 and 5 (0-indexed)
const NODES = [
  { key: "extract", label: "EXTRACT", Icon: Download },
  { key: "cleanse", label: "CLEANSE", Icon: Sparkles },
  { key: "transform", label: "TRANSFORM", Icon: Shuffle },
  { key: "validate", label: "VALIDATE", Icon: ShieldCheck },
] as const;

export type PipelineFocus = "full" | "extract" | "cleanse" | "transform" | "validate";

export interface LiveMigrationProps {
  /** Source system label(s). A single entry locks the card header — no rotation. */
  systems?: string[];
  /** Right-card header label. */
  targetLabel?: string;
  /** "full" renders the whole EXTRACT→VALIDATE pipeline. Any other value
   * renders a zoomed, looping close-up on that one stage. */
  focus?: PipelineFocus;
}

const LOOP_MS = 10000;
const DISPATCH_INTERVAL = 1100;
const TRANSIT_MS = 2400;

type Packet = {
  id: number;
  row: number;
  dirty: boolean;
  startedAt: number;
};

export function LiveMigration({
  systems = DEFAULT_SYSTEMS,
  targetLabel = "D365 F&O — CUSTOMER MASTER",
  focus = "full",
}: LiveMigrationProps) {
  const prefersReducedMotion = useReducedMotion();

  if (focus !== "full") {
    return (
      <CloseUpLoop
        node={NODES.find((n) => n.key === focus) ?? NODES[1]}
        prefersReducedMotion={!!prefersReducedMotion}
      />
    );
  }

  return (
    <FullPipeline
      systems={systems}
      targetLabel={targetLabel}
      prefersReducedMotion={!!prefersReducedMotion}
    />
  );
}

function FullPipeline({
  systems,
  targetLabel,
  prefersReducedMotion,
}: {
  systems: string[];
  targetLabel: string;
  prefersReducedMotion: boolean;
}) {
  const locked = systems.length === 1;
  const [systemIndex, setSystemIndex] = useState(0);
  const [landed, setLanded] = useState<boolean[]>(Array(6).fill(false));
  const [packets, setPackets] = useState<Packet[]>([]);
  const [showStamp, setShowStamp] = useState(false);
  const loopStart = useRef(0);
  const nextDispatch = useRef(0);
  const dispatched = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (prefersReducedMotion) return;
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      setParallax({ x: -dx * 8, y: -dy * 8 });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [prefersReducedMotion]);

  const resetLoop = () => {
    setLanded(Array(6).fill(false));
    setPackets([]);
    setShowStamp(false);
    dispatched.current = 0;
    nextDispatch.current = 800;
    if (!locked) setSystemIndex((i) => (i + 1) % systems.length);
  };

  useAnimationFrame((time) => {
    if (prefersReducedMotion) return;
    if (loopStart.current === 0) loopStart.current = time;
    const t = time - loopStart.current;

    if (t >= nextDispatch.current && dispatched.current < 6) {
      const row = dispatched.current;
      setPackets((p) => [
        ...p,
        { id: row, row, dirty: DIRTY_ROWS.includes(row), startedAt: t },
      ]);
      dispatched.current += 1;
      nextDispatch.current = t + DISPATCH_INTERVAL;
    }

    if (t >= 8200 && !showStamp && dispatched.current >= 6) {
      setShowStamp(true);
    }

    if (t >= LOOP_MS) {
      loopStart.current = time;
      resetLoop();
    }
  });

  const handlePacketArrive = (row: number) => {
    setLanded((l) => {
      if (l[row]) return l;
      const next = [...l];
      next[row] = true;
      return next;
    });
    setPackets((p) => p.filter((pk) => pk.row !== row));
  };

  const rows = useMemo(() => Array.from({ length: 6 }, (_, i) => i), []);

  if (prefersReducedMotion) {
    return (
      <div className="relative w-full max-w-[560px] mx-auto grid grid-cols-[1fr_auto_1fr] gap-4 items-center">
        <StaticCard
          header={`${systems[0]} — CUSTOMERS`}
          headerColor="ink"
          rows={rows}
          dirty={false}
        />
        <div className="flex flex-col items-center gap-6">
          {NODES.map((n) => (
            <NodeIcon key={n.key} node={n} active />
          ))}
        </div>
        <StaticCard
          header={targetLabel}
          headerColor="blue"
          rows={rows}
          dirty={false}
          landed
          stamp
        />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[560px] mx-auto h-[520px]"
    >
      <motion.div
        animate={{ x: parallax.x, y: parallax.y }}
        transition={{ type: "spring", damping: 30 }}
        className="relative h-full w-full"
      >
        <div className="absolute -inset-20 -z-10 rounded-full bg-[radial-gradient(closest-side,rgb(37_99_235/0.05),transparent)]" />

        <div className="grid h-full grid-cols-[1fr_100px_1fr] items-center gap-2">
          {/* LEFT CARD */}
          <div className="relative rounded-2xl border border-line bg-white p-4 shadow-[var(--shadow-card)]">
            <motion.p
              key={locked ? systems[0] : systemIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-mono-chivora mb-3 text-[0.6875rem] tracking-[0.08em] text-ink-mute uppercase"
            >
              {systems[locked ? 0 : systemIndex]} — CUSTOMERS
            </motion.p>
            <div className="flex flex-col gap-3">
              {rows.map((row) => {
                const dirty = DIRTY_ROWS.includes(row);
                const gone = packets.some((p) => p.row === row) || landed[row];
                return (
                  <div
                    key={row}
                    className={`relative flex items-center gap-2 rounded-md py-1 pl-2 transition-opacity duration-300 ${
                      gone ? "opacity-30" : "opacity-100"
                    }`}
                  >
                    {dirty && (
                      <span className="absolute left-0 top-0 h-full w-[3px] rounded-full bg-amber" />
                    )}
                    {dirty && (
                      <span className="h-1.5 w-1.5 rounded-full bg-amber" />
                    )}
                    <span className="h-2.5 w-16 rounded bg-gray-200" />
                    <span className="h-2.5 w-10 rounded bg-gray-100" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* PIPELINE */}
          <div className="relative flex h-full flex-col items-center justify-center gap-8">
            <div className="absolute left-1/2 top-4 bottom-4 w-2 -translate-x-1/2 rounded-full bg-blue-tint" />
            {NODES.map((node) => (
              <NodeIcon key={node.key} node={node} active />
            ))}

            {/* travelling packets */}
            {packets.map((p) => (
              <TravellingPacket
                key={p.id}
                packet={p}
                onArrive={() => handlePacketArrive(p.row)}
              />
            ))}
          </div>

          {/* RIGHT CARD */}
          <div className="relative rounded-2xl border border-line bg-white p-4 shadow-[var(--shadow-card)]">
            <p className="font-mono-chivora mb-3 text-[0.6875rem] tracking-[0.08em] text-blue uppercase">
              {targetLabel}
            </p>
            <div className="flex flex-col gap-3">
              {rows.map((row) => (
                <motion.div
                  key={row}
                  initial={false}
                  animate={
                    landed[row]
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0.4, scale: 0.98 }
                  }
                  className="relative flex items-center gap-2 rounded-md py-1 pl-2"
                >
                  {landed[row] ? (
                    <>
                      <span className="absolute left-0 top-0 h-full w-[3px] rounded-full bg-blue" />
                      <span className="h-2.5 w-16 rounded bg-blue/20" />
                      <span className="h-2.5 w-10 rounded bg-blue/10" />
                    </>
                  ) : (
                    <span className="h-6 w-full rounded border border-dashed border-line" />
                  )}
                </motion.div>
              ))}
            </div>

            {showStamp && (
              <motion.div
                initial={{ scale: 0, rotate: -6, opacity: 0 }}
                animate={{ scale: [0, 1.1, 1], rotate: -6, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                className="font-mono-chivora absolute -top-4 right-4 rounded border-2 border-success px-3 py-1 text-xs font-medium text-success bg-white"
              >
                RECONCILED ✓ 100%
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/**
 * Zoomed-in loop on a single pipeline stage, used on service pages that own
 * one part of the journey (e.g. Data Cleansing focuses on CLEANSE only).
 */
function CloseUpLoop({
  node,
  prefersReducedMotion,
}: {
  node: (typeof NODES)[number];
  prefersReducedMotion: boolean;
}) {
  const [phase, setPhase] = useState<"arrive" | "processing" | "clean" | "exit">(
    "arrive"
  );

  useEffect(() => {
    if (prefersReducedMotion) return;
    const sequence: Array<[typeof phase, number]> = [
      ["arrive", 0],
      ["processing", 900],
      ["clean", 1500],
      ["exit", 2100],
    ];
    const timers = sequence.map(([p, delay]) =>
      setTimeout(() => setPhase(p), delay)
    );
    const loop = setInterval(() => setPhase("arrive"), 3400);
    return () => {
      timers.forEach(clearTimeout);
      clearInterval(loop);
    };
  }, [prefersReducedMotion]);

  const isCleanse = node.key === "cleanse";
  const dirty = isCleanse && (phase === "arrive" || phase === "processing");

  if (prefersReducedMotion) {
    return (
      <div className="mx-auto flex w-full max-w-[400px] flex-col items-center gap-6 rounded-[var(--radius-card)] border border-line bg-white p-10 shadow-[var(--shadow-card)]">
        <NodeIcon node={node} active large />
        <span className="h-[10px] w-[22px] rounded-md bg-blue" />
      </div>
    );
  }

  return (
    <div className="relative mx-auto flex h-[360px] w-full max-w-[400px] items-center justify-center rounded-[var(--radius-card)] border border-line bg-white shadow-[var(--shadow-card)]">
      <div className="absolute -inset-16 -z-10 rounded-full bg-[radial-gradient(closest-side,rgb(37_99_235/0.06),transparent)]" />

      <motion.div
        animate={{ scale: phase === "processing" ? [1, 1.15, 1] : 1 }}
        transition={{ duration: 0.3 }}
      >
        <NodeIcon node={node} active large />
      </motion.div>

      <motion.div
        key={phase}
        initial={{ x: -140, opacity: phase === "arrive" ? 0 : 1 }}
        animate={{
          x: phase === "exit" ? 140 : phase === "arrive" ? 0 : 0,
          opacity: 1,
        }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`absolute h-[10px] w-[22px] rounded-md ${
          dirty ? "bg-amber" : "bg-blue"
        }`}
      >
        {isCleanse && phase === "processing" && (
          <>
            <motion.span
              animate={{ x: [0, -2, 2, 0] }}
              transition={{ duration: 0.2, repeat: 2 }}
              className="absolute -right-2 -top-1 h-1.5 w-1.5 rounded-full bg-gray-400"
            />
            <motion.span
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -right-3 top-2 h-1 w-1 rounded-full bg-gray-400"
            />
          </>
        )}
      </motion.div>

      {phase === "clean" && (
        <motion.span
          initial={{ opacity: 0, y: 0, scale: 0.6 }}
          animate={{ opacity: [1, 1, 0], y: -20, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute top-10 text-success"
        >
          ✓
        </motion.span>
      )}
    </div>
  );
}

function NodeIcon({
  node,
  active,
  large,
}: {
  node: (typeof NODES)[number];
  active?: boolean;
  large?: boolean;
}) {
  const { Icon, label } = node;
  const size = large ? "h-[64px] w-[64px]" : "h-[34px] w-[34px]";
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`flex items-center justify-center rounded-full ${size} ${
          active ? "bg-blue-tint" : "bg-gray-100"
        }`}
      >
        <Icon className={large ? "h-7 w-7 stroke-blue" : "h-4 w-4 stroke-blue"} />
      </div>
      <span className="font-mono-chivora text-[10px] tracking-wide text-ink-mute uppercase">
        {label}
      </span>
    </div>
  );
}

function TravellingPacket({
  packet,
  onArrive,
}: {
  packet: Packet;
  onArrive: () => void;
}) {
  const [phase, setPhase] = useState<"transit" | "cleansing" | "cleaned">(
    "transit"
  );

  useEffect(() => {
    if (!packet.dirty) return;
    const cleanseTime = TRANSIT_MS * 0.35;
    const t = setTimeout(() => setPhase("cleansing"), cleanseTime);
    const t2 = setTimeout(() => setPhase("cleaned"), cleanseTime + 300);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, [packet.dirty]);

  useEffect(() => {
    const total = packet.dirty ? TRANSIT_MS + 300 : TRANSIT_MS;
    const t = setTimeout(onArrive, total);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dirty = phase === "cleansing";

  return (
    <motion.div
      initial={{ x: -110, y: (packet.row - 2.5) * 4, opacity: 0 }}
      animate={{
        x: [-110, 0, 110],
        y: [(packet.row - 2.5) * 4, -20, (packet.row - 2.5) * 4],
        opacity: 1,
      }}
      transition={{ duration: TRANSIT_MS / 1000, ease: "easeInOut" }}
      className={`absolute left-1/2 top-1/2 h-[10px] w-[22px] -translate-x-1/2 -translate-y-1/2 rounded-md ${
        dirty ? "bg-amber" : "bg-blue"
      }`}
    >
      {dirty && (
        <motion.span
          animate={{ x: [0, -2, 2, 0] }}
          transition={{ duration: 0.2, repeat: 1 }}
          className="absolute -right-2 -top-1 h-1.5 w-1.5 rounded-full bg-gray-400"
        />
      )}
    </motion.div>
  );
}

function StaticCard({
  header,
  headerColor,
  rows,
  dirty,
  landed,
  stamp,
}: {
  header: string;
  headerColor: "ink" | "blue";
  rows: number[];
  dirty: boolean;
  landed?: boolean;
  stamp?: boolean;
}) {
  return (
    <div className="relative rounded-2xl border border-line bg-white p-4 shadow-[var(--shadow-card)]">
      <p
        className={`font-mono-chivora mb-3 text-[0.6875rem] tracking-[0.08em] uppercase ${
          headerColor === "blue" ? "text-blue" : "text-ink-mute"
        }`}
      >
        {header}
      </p>
      <div className="flex flex-col gap-3">
        {rows.map((row) => (
          <div key={row} className="relative flex items-center gap-2 py-1 pl-2">
            {landed ? (
              <>
                <span className="absolute left-0 top-0 h-full w-[3px] rounded-full bg-blue" />
                <span className="h-2.5 w-16 rounded bg-blue/20" />
                <span className="h-2.5 w-10 rounded bg-blue/10" />
              </>
            ) : (
              <>
                {dirty && DIRTY_ROWS.includes(row) && (
                  <span className="absolute left-0 top-0 h-full w-[3px] rounded-full bg-amber" />
                )}
                <span className="h-2.5 w-16 rounded bg-gray-200" />
                <span className="h-2.5 w-10 rounded bg-gray-100" />
              </>
            )}
          </div>
        ))}
      </div>
      {stamp && (
        <div className="font-mono-chivora absolute -top-4 right-4 rounded border-2 border-success px-3 py-1 text-xs font-medium text-success bg-white -rotate-6">
          RECONCILED ✓ 100%
        </div>
      )}
    </div>
  );
}
