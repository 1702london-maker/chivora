import { TOOLS } from "@/lib/constants";

export function ToolsRow() {
  return (
    <section className="border-y border-line bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <p className="font-mono-chivora text-xs tracking-[0.08em] text-ink-mute uppercase">
          Tooling
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {TOOLS.map((tool) => (
            <span
              key={tool}
              className="font-mono-chivora rounded-full border border-line px-4 py-2 text-xs tracking-wide text-ink-soft transition-colors hover:bg-blue-tint hover:border-blue hover:text-blue"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
