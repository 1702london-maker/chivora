"use client";

import { Counter } from "@/components/motion/Counter";
import { CheckCircle2 } from "lucide-react";

const BARS = [
  { label: "GL", value: 92 },
  { label: "AR", value: 100 },
  { label: "AP", value: 97 },
  { label: "FA", value: 100 },
];

export function DashboardCount() {
  return (
    <div className="mx-auto w-full max-w-[480px] rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-[var(--shadow-card)]">
      <p className="font-mono-chivora text-[0.6875rem] tracking-[0.08em] text-ink-mute uppercase">
        Reconciliation Dashboard
      </p>
      <div className="mt-5 grid grid-cols-2 gap-4">
        {BARS.map((bar) => (
          <div key={bar.label} className="rounded-lg bg-gray-50 p-4">
            <div className="flex items-center justify-between">
              <span className="font-mono-chivora text-xs text-ink-mute">{bar.label}</span>
              <CheckCircle2 className="h-3.5 w-3.5 stroke-success" />
            </div>
            <div className="mt-2 flex items-baseline gap-1">
              <Counter to={bar.value} suffix="%" duration={1.4} />
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-blue"
                style={{ width: `${bar.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
