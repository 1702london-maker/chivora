import { Counter } from "@/components/motion/Counter";

const STATS = [
  { to: 6, suffix: "+", label: "MIGRATIONS DELIVERED" },
  { to: 7, suffix: "", label: "DATA DOMAINS" },
  { to: 2, suffix: "", label: "D365 PLATFORMS" },
];

export function TrustCounters() {
  return (
    <section className="border-y border-line bg-white py-24">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-6 text-center sm:grid-cols-3">
        {STATS.map((s) => (
          <div key={s.label}>
            <Counter to={s.to} suffix={s.suffix} />
            <p className="mono-eyebrow mt-2 !text-ink-mute">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
