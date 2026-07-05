import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeUp } from "@/components/motion/FadeUp";
import { TodoChip } from "@/components/ui/TodoChip";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "How We Engage | Chivora — D365 Data Migration Specialists",
  description:
    "How Chivora structures engagements, prices its work, and runs the commercial process for D365 data migration.",
};

const SI_POINTS = [
  "We work within your project structure — not alongside it or above it.",
  "We own the data migration workstream. Everything else stays with your team.",
  "We do not scope-creep into configuration, functional design, or project management.",
  "We do not approach your client directly without your knowledge and agreement.",
  "Billing is to your organisation, not to the end client — unless we agree otherwise in writing.",
  "We are happy to operate under your branding or co-branded as Chivora, whichever suits the client relationship.",
];

const END_CLIENT_POINTS = [
  "We work alongside your SI partner without disrupting the existing team structure.",
  "We report to your programme manager or project sponsor, depending on governance preference.",
  "We bring our own tooling, methodology, and documentation — you don't need to provide templates.",
  "We are transparent about what we will and won't do, and we will tell you if data migration is not your biggest risk right now.",
];

const PROCESS_STEPS = [
  {
    step: "1. Discovery call (20 minutes, free)",
    detail:
      "You tell us about your programme, your source system, your timeline, and your data migration challenge. We ask specific questions. We tell you honestly whether we are the right fit.",
  },
  {
    step: "2. Written proposal or estimate (within 5 working days)",
    detail:
      "We produce a written scope, approach, timeline, and price. For fixed-price engagements this becomes the basis of the Statement of Work. For day-rate engagements it confirms the rate, minimum term, and working arrangement.",
  },
  {
    step: "3. Statement of Work or contract signature",
    detail:
      "We do not begin work without a signed SOW or purchase order. For SI partners, we work within your standard sub-contractor agreement or provide our own — whichever is faster to execute.",
  },
  {
    step: "4. Mobilisation within 5–10 working days",
    detail:
      "We confirm availability, agree the kick-off date, and begin the discovery phase. For rescue engagements, mobilisation can be within 5 working days of contract signature.",
  },
];

export default function HowWeEngagePage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 pt-16 pb-8">
          <FadeUp>
            <Eyebrow>Engagement</Eyebrow>
            <h1 className="font-display mt-3 text-[var(--text-display)] font-bold tracking-[-0.03em] text-ink">
              How We Engage
            </h1>
            <p className="mt-4 text-ink-soft">
              Chivora works with Microsoft Partners, systems integrators, and
              end-user organisations on D365 data migration. This page
              explains how engagements are structured, how we price our
              work, and what you can expect from the commercial process.
            </p>
            <p className="mt-4 text-ink-soft">
              We are direct about pricing because ambiguity wastes
              everyone&apos;s time. The figures below are real — not ranges
              designed to get you on a call. If your engagement falls
              outside these parameters, we&apos;ll tell you that clearly at
              the discovery stage.
            </p>
          </FadeUp>
        </section>

        {/* Who we work with */}
        <section className="mx-auto max-w-6xl px-6 py-[var(--section-y)]">
          <FadeUp>
            <Eyebrow>Who We Work With</Eyebrow>
            <h2 className="font-display mt-3 text-[var(--text-h2)] font-bold tracking-[-0.02em] text-ink">
              Two clients. Two engagement models.
            </h2>
          </FadeUp>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            <FadeUp>
              <div className="h-full rounded-[var(--radius-card)] border border-line bg-white p-8 shadow-[var(--shadow-card)]">
                <h3 className="font-display text-lg font-medium text-ink">
                  Microsoft Partners &amp; Systems Integrators
                </h3>
                <p className="mt-2 text-sm text-ink-soft">
                  If you are a Microsoft Gold or Solutions Partner delivering
                  a D365 F&amp;O or CE implementation and you need
                  specialist data migration resource to join your team,
                  Chivora operates as a sub-contractor on a day-rate basis.
                </p>
                <ul className="mt-5 flex flex-col gap-2.5">
                  {SI_POINTS.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-ink-soft">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 stroke-blue" />
                      {p}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm text-ink-soft">
                  We understand that bringing in a sub-contractor involves
                  trust. Our job is to make you look good to your client —
                  not to position ourselves as an alternative to you.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="h-full rounded-[var(--radius-card)] border border-line bg-white p-8 shadow-[var(--shadow-card)]">
                <h3 className="font-display text-lg font-medium text-ink">
                  End-User Organisations
                </h3>
                <p className="mt-2 text-sm text-ink-soft">
                  If you are a business planning or currently undergoing a
                  D365 implementation — whether managed by an internal team,
                  a systems integrator, or both — Chivora can be engaged
                  directly to own the data migration workstream.
                </p>
                <ul className="mt-5 flex flex-col gap-2.5">
                  {END_CLIENT_POINTS.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-ink-soft">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 stroke-blue" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* Pricing */}
        <section className="mx-auto max-w-5xl px-6 py-[var(--section-y)]">
          <FadeUp>
            <Eyebrow>Engagement Models &amp; Pricing</Eyebrow>
            <h2 className="font-display mt-3 text-[var(--text-h2)] font-bold tracking-[-0.02em] text-ink">
              Real figures, not ranges to get you on a call.
            </h2>
            <p className="mt-3 text-sm text-ink-mute">
              All prices are exclusive of VAT. Travel and subsistence for
              on-site attendance are charged at cost and agreed in advance.
            </p>
          </FadeUp>

          <div className="mt-10 flex flex-col gap-6">
            <PricingRow
              title="Day Rate — Remote Engagement"
              price="£650 – £750 per day"
              rows={[
                ["Best for", "SI partners and end clients who need Chivora to integrate into an existing project team on a flexible basis"],
                ["Minimum engagement", "5 days"],
                ["Typical duration", "4 – 20 weeks, depending on project phase and domain scope"],
                ["Notice period", "5 working days (standard); shorter by mutual agreement"],
              ]}
              note="Day-rate engagements are invoiced weekly in arrears on confirmed timesheets. Payment terms are 14 days from invoice date."
            />
            <PricingRow
              title="Day Rate — On-Site Engagement"
              price="£700 – £850 per day (plus reasonable travel and subsistence at cost)"
              rows={[
                ["Best for", "Key workshops, mock migration reviews, UAT sessions, and go-live cutover support where on-site presence is operationally important"],
              ]}
              note="Most Chivora engagements are 80–90% remote. On-site days are agreed on a session-by-session basis and do not require a separate contract."
            />
            <PricingRow
              title="Rescue & Urgent Mobilisation"
              price="£850 – £1,000 per day"
              rows={[
                ["Best for", "Programmes where data migration is already failing, a go-live is imminent, or a previous migration resource has left the project"],
                ["Mobilisation", "Typically within 5 working days of agreement"],
              ]}
              note="The premium rate reflects the complexity of entering a project mid-stream under pressure, not a different scope of work. The methodology is the same — the runway is shorter."
            />
            <PricingRow
              title="Data Migration Health Check — Fixed Price"
              price="£2,500 – £5,000 (depending on number of domains and source system complexity)"
              rows={[
                ["Duration", "5 – 10 working days"],
                ["Deliverable", "A written Data Migration Readiness Report: data quality assessment by domain, migration complexity rating (Low / Medium / High / Complex), indicative effort and timeline, cleansing recommendations, tooling recommendation"],
                ["Best for", "Organisations 2–4 months from starting a D365 implementation who want to understand their data risk before committing to a programme plan"],
              ]}
              note="The Health Check is a standalone engagement with no obligation to continue with Chivora for the full migration. If you proceed to a full End-to-End engagement within 90 days of a Health Check, the Health Check fee is credited against the total."
            />
            <PricingRow
              title="End-to-End Data Migration — Fixed Price or Day Rate"
              price="Scoped per project. Indicative range: £35,000 – £90,000+ for a full programme"
              rows={[
                ["Pricing model", "Fixed price (agreed scope, agreed deliverables) or day rate (flexible scope, weekly billing)"],
                ["What determines price", "Number of data domains in scope, source system complexity, data volumes, data quality at discovery, required timeline, and extent of cleansing support needed"],
              ]}
              note="We provide a written estimate with clear assumptions after the discovery call. We do not quote without understanding the programme first. Every fixed-price engagement includes a Statement of Work defining exactly what is included and excluded — data cleansing by the client is a prerequisite and explicitly excluded from scope. Change requests outside the agreed SOW are priced separately."
            />
            <PricingRow
              title="Post-Go-Live Data Support Retainer"
              price="From £1,500 per month (includes up to 3 days; additional days at standard day rate)"
              rows={[
                ["Duration", "Typically 3 – 6 months post go-live, then reviewed"],
                ["Best for", "Organisations in the stabilisation period after go-live who need ongoing data correction, reconciliation support, and a named specialist available when data issues arise"],
              ]}
              note="Retainers are invoiced monthly in advance. Either party may give 30 days' notice to end the arrangement."
            />
          </div>
        </section>

        {/* Commercial process */}
        <section className="mx-auto max-w-4xl px-6 py-[var(--section-y)]">
          <FadeUp>
            <Eyebrow>The Commercial Process</Eyebrow>
            <h2 className="font-display mt-3 text-[var(--text-h2)] font-bold tracking-[-0.02em] text-ink">
              From first contact to work starting.
            </h2>
          </FadeUp>
          <div className="mt-8 flex flex-col gap-6">
            {PROCESS_STEPS.map((s) => (
              <FadeUp key={s.step}>
                <div className="rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-[var(--shadow-card)]">
                  <p className="font-display font-medium text-ink">{s.step}</p>
                  <p className="mt-2 text-sm leading-[1.6] text-ink-soft">{s.detail}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* IR35 & Insurance */}
        <section className="mx-auto max-w-3xl px-6 py-[var(--section-y)]">
          <FadeUp>
            <Eyebrow>IR35 &amp; Compliance</Eyebrow>
            <h2 className="font-display mt-3 text-[var(--text-h2)] font-bold tracking-[-0.02em] text-ink">
              Structured as B2B, outside IR35.
            </h2>
            <p className="mt-4 text-sm leading-[1.7] text-ink-soft">
              Chivora engagements are structured as business-to-business
              contracts between your organisation and Nwoye Concepts Ltd
              (the registered company trading as Chivora). We do not operate
              inside IR35 arrangements. Our standard contracts include a
              right of substitution and are structured to reflect genuine
              outside-IR35 working practices.
            </p>
            <p className="mt-4 text-sm leading-[1.7] text-ink-soft">
              If your procurement process requires an IR35 determination, we
              are happy to provide the documentation required. We ask that
              IR35 status is confirmed before work begins, not after.
            </p>
          </FadeUp>

          <FadeUp>
            <p className="mono-eyebrow mt-12">
              <span className="slash">// </span>Insurance
            </p>
            <p className="mt-3 text-sm leading-[1.7] text-ink-soft">
              Nwoye Concepts Ltd holds the following insurance and will
              provide certificates on request:
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-ink-soft">
              <li>Professional Indemnity Insurance: £1,000,000 cover — Hiscox UK</li>
              <li>Public Liability Insurance: £1,000,000 cover — Hiscox UK</li>
              <li>
                Cyber Liability Insurance: <TodoChip>£X,000,000 cover — provider to confirm</TodoChip>
              </li>
            </ul>
          </FadeUp>
        </section>

        <section className="bg-navy py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="font-display text-[var(--text-h2)] font-bold tracking-[-0.02em] text-white">
              Ready to talk?
            </h2>
            <p className="mt-3 text-white/70">
              Book a 20-minute discovery call. Come with your questions —
              programme stage, source system, timeline, budget. We&apos;ll
              come with honest answers about what&apos;s achievable and how
              we&apos;d structure an engagement.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/contact" className="!bg-white !text-navy">
                Book a discovery call
              </Button>
            </div>
            <p className="mt-4 text-sm text-white/50">
              Prefer email first? Reach us at hello@chivora.co.uk
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function PricingRow({
  title,
  price,
  rows,
  note,
}: {
  title: string;
  price: string;
  rows: [string, string][];
  note: string;
}) {
  return (
    <FadeUp>
      <div className="rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-[var(--shadow-card)]">
        <h3 className="font-display text-lg font-medium text-ink">{title}</h3>
        <p className="mt-1 font-mono-chivora text-sm text-blue">{price}</p>
        <dl className="mt-4 flex flex-col gap-2">
          {rows.map(([label, value]) => (
            <div key={label} className="flex flex-col gap-0.5 sm:flex-row sm:gap-2">
              <dt className="font-mono-chivora shrink-0 text-[10px] tracking-wide text-ink-mute uppercase sm:w-40">
                {label}
              </dt>
              <dd className="text-sm text-ink-soft">{value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 border-t border-line pt-4 text-xs leading-relaxed text-ink-mute">
          {note}
        </p>
      </div>
    </FadeUp>
  );
}
