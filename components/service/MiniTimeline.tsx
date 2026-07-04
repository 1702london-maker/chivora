import { METHODOLOGY_PHASES } from "@/lib/constants";

export function MiniTimeline({ highlighted }: { highlighted: string[] }) {
  return (
    <div className="flex flex-col gap-6 border-l border-line pl-6 sm:flex-row sm:gap-4 sm:border-l-0 sm:border-t sm:pl-0 sm:pt-6">
      {METHODOLOGY_PHASES.map((phase) => {
        const active = highlighted.includes(phase.number);
        return (
          <div
            key={phase.number}
            className={`relative flex-1 transition-opacity duration-300 ${
              active ? "opacity-100" : "opacity-35"
            }`}
          >
            <span
              className={`absolute -left-[31px] top-1 h-3 w-3 rounded-full sm:-top-[31px] sm:left-1 ${
                active ? "bg-blue" : "bg-ink-mute"
              }`}
            />
            <p
              className={`font-mono-chivora text-xs ${active ? "text-blue" : "text-ink-mute"}`}
            >
              {phase.number}
            </p>
            <h4 className="font-display mt-1 text-sm font-medium text-ink">
              {phase.name}
            </h4>
            <p className="mt-1 text-xs leading-[1.6] text-ink-soft">
              {phase.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
