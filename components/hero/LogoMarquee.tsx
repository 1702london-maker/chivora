import { SOURCE_SYSTEMS } from "@/lib/constants";

export function LogoMarquee() {
  const names = SOURCE_SYSTEMS.map((s) => s.name.toUpperCase());
  const track = [...names, ...names];

  return (
    <div className="relative mt-16 flex items-center gap-6 border-t border-line pt-8">
      <span className="font-mono-chivora shrink-0 text-[0.6875rem] tracking-[0.08em] text-ink-mute uppercase">
        We migrate from
      </span>

      <div className="marquee-track relative flex-1 overflow-hidden">
        <div className="animate-marquee flex w-max gap-12">
          {track.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-mono-chivora shrink-0 text-sm tracking-wide text-ink grayscale opacity-40 transition-opacity hover:opacity-100"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      <span className="font-mono-chivora shrink-0 rounded-full bg-blue px-4 py-1.5 text-xs font-medium text-white">
        → D365
      </span>
    </div>
  );
}
