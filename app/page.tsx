import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { LiveMigration } from "@/components/hero/LiveMigration";
import { HeroWords } from "@/components/hero/HeroWords";
import { LogoMarquee } from "@/components/hero/LogoMarquee";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeUp } from "@/components/motion/FadeUp";
import { TrustCounters } from "@/components/home/TrustCounters";
import { PainPoints } from "@/components/home/PainPoints";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { OrbitSection } from "@/components/home/OrbitSection";
import { MethodologyTimeline } from "@/components/home/MethodologyTimeline";
import { ChessboardRows } from "@/components/home/ChessboardRows";
import { CaseMetrics } from "@/components/home/CaseMetrics";
import { AboutStrip } from "@/components/home/AboutStrip";
import { ToolsRow } from "@/components/home/ToolsRow";
import { InsightsTeaser } from "@/components/home/InsightsTeaser";
import { PreFooterCTA } from "@/components/home/PreFooterCTA";

export default function Home() {
  return (
    <>
      <Nav />

      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-6 pt-16 pb-8">
          <div className="grid min-h-[80vh] grid-cols-1 items-center gap-12 lg:grid-cols-[55%_45%]">
            <div>
              <FadeUp delay={0}>
                <Eyebrow>D365 Data Migration Specialists</Eyebrow>
              </FadeUp>

              <FadeUp delay={0.15}>
                <h1 className="font-display mt-4 text-[var(--text-display)] font-bold leading-[1.05] tracking-[-0.03em] text-ink">
                  We move your data into Dynamics 365.
                </h1>
              </FadeUp>

              <div className="mt-2">
                <HeroWords />
              </div>

              <FadeUp delay={1.1}>
                <p className="mt-6 max-w-[52ch] text-[var(--text-body)] leading-[1.7] text-ink-soft">
                  Specialist data migration for D365 Finance &amp; Operations
                  and Customer Engagement. From SAP, Oracle, Sage, NAV, BPCS,
                  IFS and Access Dimensions. We own the data workstream so
                  your go-live doesn&apos;t slip.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Button href="/contact" variant="primary">
                    Book a discovery call
                  </Button>
                  <Button href="/capability-statement" variant="secondary">
                    Download capability statement
                  </Button>
                </div>
              </FadeUp>
            </div>

            <FadeUp delay={0.9} fromX={24}>
              <LiveMigration />
            </FadeUp>
          </div>

          <LogoMarquee />
        </section>

        <TrustCounters />
        <PainPoints />
        <ServicesGrid />
        <OrbitSection />
        <MethodologyTimeline />
        <ChessboardRows />
        <CaseMetrics />
        <AboutStrip />
        <ToolsRow />
        <InsightsTeaser />
        <PreFooterCTA />
      </main>

      <Footer />
    </>
  );
}
