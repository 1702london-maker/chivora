import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { InnerHero } from "@/components/hero/InnerHero";
import { PhaseTicker } from "@/components/hero/animations/PhaseTicker";
import { MethodologyBody } from "@/components/methodology/MethodologyBody";

export const metadata: Metadata = {
  title: "Methodology | Chivora — D365 Data Migration Specialists",
  description:
    "Six phases, no improvisation — how Chivora runs every D365 data migration from discovery to stabilisation.",
};

export default function MethodologyPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <InnerHero
          breadcrumb={[{ label: "Methodology", href: "/methodology" }]}
          eyebrow="Methodology"
          title="Six phases. No improvisation."
          subline="Every Chivora engagement runs through the same six phases, whatever the source system or engagement type. It's the reason our migrations reconcile — not luck, a repeatable process."
          primaryCta={{ label: "Book a discovery call", href: "/contact" }}
          secondaryCta={{ label: "See our services", href: "/services" }}
          visual={<PhaseTicker />}
        />

        <MethodologyBody />

        <section className="bg-navy py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="font-display text-[var(--text-h2)] font-bold tracking-[-0.02em] text-white">
              Ready to see it applied to your migration?
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/contact" className="!bg-white !text-navy">
                Book a discovery call
              </Button>
              <Button href="/services/data-migration-health-check" variant="ghost-navy">
                Start with a Health Check
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
