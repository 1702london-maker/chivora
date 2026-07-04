import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/motion/FadeUp";
import { MigrationOrbit } from "@/components/orbit/MigrationOrbit";

export function OrbitSection() {
  return (
    <section className="bg-navy py-[var(--section-y)]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[45%_55%]">
        <FadeUp>
          <p className="font-mono-chivora text-[0.8125rem] tracking-[0.08em] text-white/50 uppercase">
            <span className="text-blue-bright">// </span>02 — Data Domains
          </p>
          <h2 className="font-display mt-3 text-[var(--text-h2)] font-bold tracking-[-0.02em] text-white">
            One specialist. Every data domain.
          </h2>
          <p className="mt-3 max-w-[46ch] text-white/70">
            General Ledger to Fixed Assets, SAP to Access Dimensions — the
            full migration scope handled by one focused team.
          </p>
          <div className="mt-8">
            <Button href="/methodology" variant="ghost-navy">
              See the methodology
            </Button>
          </div>
        </FadeUp>

        <FadeUp fromX={24}>
          <MigrationOrbit />
        </FadeUp>
      </div>
    </section>
  );
}
