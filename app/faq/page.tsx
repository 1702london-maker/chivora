import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeUp } from "@/components/motion/FadeUp";
import { FaqAccordion } from "@/components/service/FaqAccordion";

const GROUPS = [
  {
    category: "General",
    items: [
      {
        question: "What does Chivora actually do?",
        answer:
          "We specialise exclusively in Microsoft Dynamics 365 data migration — moving business data from legacy ERPs into D365 F&O and CE. We don't do general IT, ERP configuration or implementation project management.",
      },
      {
        question: "Do you work with Microsoft Partners or only end clients?",
        answer:
          "Both. We work directly with end clients running their own migration, and as a specialist subcontractor to Microsoft Partners and SIs who need dedicated data workstream ownership.",
      },
      {
        question: "Which source systems do you support?",
        answer:
          "SAP, Oracle, Sage, Dynamics NAV, BPCS, IFS and Access Dimensions. If your source system isn't listed, ask — we scope new systems case by case.",
      },
    ],
  },
  {
    category: "Pricing & Engagement",
    items: [
      {
        question: "What's the difference between the Health Check and a full migration?",
        answer:
          "The Health Check is a fixed-price, 5–10 day engagement that scores your data readiness with no commitment to anything further. End-to-End Data Migration is the full workstream, from discovery to sign-off.",
      },
      {
        question: "Do you work day rate or fixed price?",
        answer:
          "Both, depending on the service and how firm the scope is. Day rate suits programmes still shaping scope; fixed price suits engagements with clearly defined domains and systems.",
      },
      {
        question: "How is pricing affected by the number of source systems?",
        answer:
          "More source systems generally means more discovery and mapping work, since each has its own data model and quirks — this is scoped explicitly during the discovery call.",
      },
    ],
  },
  {
    category: "Technical",
    items: [
      {
        question: "What tooling do you use for migration builds?",
        answer:
          "Primarily D365's native DMF/DIXF, KingswaySoft for complex transformations, and Azure Data Factory or Scribe/Skyvia for ongoing interfaces.",
      },
      {
        question: "How many mock migrations are typically run?",
        answer:
          "Two as standard on most engagements, each followed by a full reconciliation report, with additional cycles available if the programme needs them.",
      },
      {
        question: "How do you handle open AR/AP transactions?",
        answer:
          "We migrate the full document chain (invoice, credit note, payment, and the links between them), not just net balances, so ageing and payment application behave correctly after go-live.",
      },
    ],
  },
  {
    category: "Getting Started",
    items: [
      {
        question: "What happens on the discovery call?",
        answer:
          "We talk through your source systems, target platform, data domains in scope and rough timeline, and recommend the right starting engagement — usually a Health Check if data quality is unknown.",
      },
      {
        question: "How quickly can you start?",
        answer:
          "Standard engagements typically start within 2–3 weeks of confirmation. Migration Rescue engagements mobilise within 5 working days.",
      },
      {
        question: "Do we need to have chosen an SI before talking to you?",
        answer:
          "No — many clients engage us before choosing an SI, since Health Check findings can usefully inform that decision and the wider business case.",
      },
    ],
  },
];

export const metadata: Metadata = {
  title: "FAQ | Chivora — D365 Data Migration Specialists",
  description: "Answers to common questions about Chivora's D365 data migration services.",
};

export default function FaqPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 pt-16 pb-4 text-center">
          <FadeUp>
            <Eyebrow>FAQ</Eyebrow>
            <h1 className="font-display mt-3 text-[var(--text-display)] font-bold tracking-[-0.03em] text-ink">
              Questions, answered.
            </h1>
          </FadeUp>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-[var(--section-y)]">
          <div className="flex flex-col gap-16">
            {GROUPS.map((group) => (
              <div key={group.category}>
                <FadeUp>
                  <p className="font-mono-chivora text-xs tracking-[0.08em] text-blue uppercase">
                    {group.category}
                  </p>
                </FadeUp>
                <div className="mt-4">
                  <FaqAccordion items={group.items} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
