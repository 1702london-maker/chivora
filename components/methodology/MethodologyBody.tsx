"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Search, Map, Cog, FlaskConical, Flag, CheckCircle2, Check } from "lucide-react";
import { METHODOLOGY_DETAIL, type MethodologyPhaseDetail } from "@/lib/content/methodology";

const ICONS = {
  search: Search,
  map: Map,
  cog: Cog,
  flask: FlaskConical,
  flag: Flag,
  check: CheckCircle2,
} as const;

export function MethodologyBody() {
  const [active, setActive] = useState(METHODOLOGY_DETAIL[0].number);
  const refs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const num = entry.target.getAttribute("data-phase");
            if (num) setActive(num);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    Object.values(refs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-[var(--section-y)] lg:grid-cols-[160px_1fr]">
      <nav className="hidden lg:block">
        <ul className="sticky top-32 flex flex-col gap-4 border-l border-line pl-4">
          {METHODOLOGY_DETAIL.map((phase) => (
            <li key={phase.number}>
              <a
                href={`#phase-${phase.number}`}
                className={`font-mono-chivora block text-xs tracking-wide transition-colors ${
                  active === phase.number ? "text-blue" : "text-ink-mute"
                }`}
              >
                {phase.number} — {phase.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex flex-col gap-20">
        {METHODOLOGY_DETAIL.map((phase) => (
          <PhaseRow
            key={phase.number}
            phase={phase}
            setRef={(el) => (refs.current[phase.number] = el)}
          />
        ))}
      </div>
    </div>
  );
}

function PhaseRow({
  phase,
  setRef,
}: {
  phase: MethodologyPhaseDetail;
  setRef: (el: HTMLElement | null) => void;
}) {
  const Icon = ICONS[phase.icon];

  return (
    <section
      id={`phase-${phase.number}`}
      data-phase={phase.number}
      ref={setRef}
      className="scroll-mt-32"
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[auto_1fr]">
        <div className="flex md:flex-col items-center md:items-start gap-4">
          <span className="font-display text-5xl font-bold text-blue/20">
            {phase.number}
          </span>
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-tint">
            <Icon className="h-6 w-6 stroke-blue" />
          </div>
        </div>

        <div>
          <h2 className="font-display text-[var(--text-h2)] font-bold tracking-[-0.02em] text-ink">
            {phase.name}
          </h2>
          <div className="mt-4 flex flex-col gap-4">
            {phase.paragraphs.map((p, i) => (
              <p key={i} className="max-w-[60ch] text-[var(--text-body)] leading-[1.7] text-ink-soft">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-[1fr_auto]">
            <div>
              <p className="font-mono-chivora text-xs tracking-[0.08em] text-ink-mute uppercase">
                Deliverables
              </p>
              <ul className="mt-3 flex flex-col gap-2.5">
                {phase.deliverables.map((d, i) => (
                  <motion.li
                    key={d}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="flex items-start gap-2 text-sm text-ink-soft"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 stroke-blue" />
                    {d}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="flex items-start sm:items-center">
              <span className="font-mono-chivora rounded-full border border-blue bg-blue-tint px-3 py-1.5 text-[10px] tracking-wide text-blue uppercase">
                Sign-off: {phase.signOffArtifact}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
