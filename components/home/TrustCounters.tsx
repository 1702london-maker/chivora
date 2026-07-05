const STATS = [
  {
    headline: "7 source systems. 1 focus.",
    sub: "SAP · NAV · SAGE · BPCS · IFS · Access Dimensions · Oracle",
  },
  {
    headline: "6-phase methodology.",
    sub: "Discover → Design → Build → Test → Cutover → Stabilise",
  },
  {
    headline: "2 D365 platforms. Every domain. End to end.",
    sub: "D365 Finance & Operations and Customer Engagement",
  },
];

export function TrustCounters() {
  return (
    <section className="border-y border-line bg-white py-24">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-6 text-center sm:grid-cols-3">
        {STATS.map((s) => (
          <div key={s.headline}>
            <p className="font-display text-xl font-bold leading-tight text-blue">
              {s.headline}
            </p>
            <p className="mono-eyebrow mt-2 !text-ink-mute">{s.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
