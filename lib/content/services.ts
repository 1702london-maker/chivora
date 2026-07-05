import type { ServiceAnimationKind } from "@/components/service/ServiceHeroVisual";

export interface ServiceContent {
  slug: string;
  name: string;
  categoryTag: string;
  promise: string;
  bodyParagraph: string;
  tags: string[];
  animation: ServiceAnimationKind;
  included: string[];
  phasesHighlighted: string[];
  personas: { title: string; description: string }[];
  domains: string[];
  systems: string[];
  pricing: {
    title: string;
    price: string;
    detail: string;
    whatAffectsPrice: string[];
  };
  faqs: { question: string; answer: string }[];
  related: string[];
  ctaHeadline: string;
  ctaSub: string;
}

const ALL_DOMAINS = ["GL", "AR", "AP", "INV", "FA", "CUST", "VEND", "HR", "OSO", "OPO"];
const ALL_SYSTEMS = ["sap", "oracle", "sage", "dynamics-nav", "bpcs", "ifs", "access-dimensions"];

export const SERVICES_CONTENT: ServiceContent[] = [
  {
    slug: "end-to-end-data-migration",
    name: "End-to-End Data Migration",
    categoryTag: "FLAGSHIP",
    promise: "We own the entire data workstream, from discovery to sign-off.",
    bodyParagraph:
      "Most D365 programmes treat data migration as something a functional consultant handles between other tasks. We run it as its own workstream, with a dedicated team, so nothing gets missed between discovery and go-live — and your programme manager has one person accountable for the data, not five.",
    tags: ["FLAGSHIP", "DAY RATE / FIXED"],
    animation: "pipeline",
    included: [
      "Data discovery and scoping across every in-scope source system",
      "Source-to-target data mapping, signed off before build starts",
      "Data cleansing and enrichment plan",
      "Transformation design (DMF/DIXF templates, KingswaySoft packages)",
      "Migration build and SQL staging",
      "Two full mock migrations with reconciliation reports",
      "Cutover execution and go-live sign-off",
      "30 days of post-go-live correction support",
    ],
    phasesHighlighted: ["01", "02", "03", "04", "05", "06"],
    personas: [
      {
        title: "Programme Directors running a D365 implementation",
        description:
          "You need one accountable owner for the data workstream so it stops competing for attention with configuration and testing.",
      },
      {
        title: "Microsoft Partners delivering for an end client",
        description:
          "You want a specialist subcontractor who slots into your delivery plan without needing to be managed line by line.",
      },
      {
        title: "Finance Directors retiring a legacy ERP",
        description:
          "You need every balance to reconcile on day one, because finance can't operate on data nobody trusts.",
      },
    ],
    domains: ALL_DOMAINS,
    systems: ALL_SYSTEMS,
    pricing: {
      title: "End-to-End Data Migration",
      price: "Scoped per project — indicative range £35,000–£90,000+ for a full programme",
      detail:
        "Fixed price or day rate (£650–£850/day depending on remote or on-site). Most engagements run 8–16 weeks alongside your D365 programme, scoped after a discovery call. Full detail on how-we-engage.",
      whatAffectsPrice: [
        "Number of data domains in scope",
        "Source system complexity and number of source systems",
        "Data volume and historical depth required",
        "Go-live timeline and number of mock cycles needed",
      ],
    },
    faqs: [
      {
        question: "How is this different from asking our SI to handle data migration?",
        answer:
          "Most SIs treat data migration as a task inside functional workstreams. We own it as a dedicated workstream, with a team that does nothing else, running alongside your SI rather than instead of them.",
      },
      {
        question: "Which source systems do you support for this engagement?",
        answer:
          "SAP, Oracle, Sage, Dynamics NAV, BPCS, IFS and Access Dimensions, into either D365 Finance & Operations or Customer Engagement.",
      },
      {
        question: "How many mock migrations are included?",
        answer:
          "Two mock migrations are included as standard, each followed by a full reconciliation report. Additional cycles can be scoped if your programme needs them.",
      },
      {
        question: "What happens after go-live?",
        answer:
          "We include 30 days of post-go-live correction support. Beyond that, our Post-Go-Live Retainer service covers ongoing corrections and re-migrations.",
      },
      {
        question: "Do you work day rate or fixed price?",
        answer:
          "Either. Day rate (£650–£850/day) suits programmes where scope is still firming up; fixed price suits programmes that want cost certainty from the outset. Full detail on our How We Engage page.",
      },
    ],
    related: ["data-migration-health-check", "data-cleansing-enrichment", "data-migration-project-management"],
    ctaHeadline: "Ready to talk about your migration?",
    ctaSub: "Book a discovery call and we'll scope the workstream around your programme.",
  },
  {
    slug: "data-migration-health-check",
    name: "Data Migration Health Check",
    categoryTag: "FIXED PRICE",
    promise: "Know exactly how ready your data is, before you commit to a migration.",
    bodyParagraph:
      "A short, fixed-price engagement that profiles your source data, scores its quality domain by domain, and hands you a readiness report — duplicates, dead records, inconsistent masters, all quantified. No commitment to a full migration required.",
    tags: ["FIXED PRICE", "FROM £2,500", "5–10 DAYS"],
    animation: "scan",
    included: [
      "Full data profiling across the domains you nominate",
      "Duplicate and dead-record detection",
      "Data quality scoring per domain, with a clear readiness percentage",
      "A written readiness report ranking risk by domain",
      "A recommended cleansing plan if issues are found",
      "A findings walkthrough call with your team",
    ],
    phasesHighlighted: ["01"],
    personas: [
      {
        title: "Finance Directors planning a legacy ERP retirement",
        description:
          "You want to know what you're dealing with before you commit budget to a full migration.",
      },
      {
        title: "Programme Managers scoping a D365 business case",
        description:
          "You need a data quality figure to put in front of the steering group, not a guess.",
      },
    ],
    domains: ALL_DOMAINS,
    systems: ALL_SYSTEMS,
    pricing: {
      title: "Data Migration Health Check",
      price: "£2,500–£5,000, fixed",
      detail: "Typically delivered in 5–10 working days from kick-off.",
      whatAffectsPrice: [
        "Number of domains reviewed",
        "Number of source systems in scope",
        "Data volume",
        "Whether a D365 partner/SI is already engaged",
      ],
    },
    faqs: [
      {
        question: "How long does a Health Check take?",
        answer: "Most Health Checks are delivered in 5–10 working days from kick-off, depending on domain count and data access.",
      },
      {
        question: "What do I get at the end?",
        answer:
          "A written readiness report with a data quality score per domain, the specific issues found, and a recommended cleansing plan if needed.",
      },
      {
        question: "Does this commit me to a full migration?",
        answer:
          "No. The Health Check stands alone. Many clients use it purely to inform a business case or budget decision.",
      },
      {
        question: "Can you run this before we've chosen an SI?",
        answer:
          "Yes — in fact it's often more useful before the SI is engaged, since the findings can inform the RFP and the scope conversation.",
      },
    ],
    related: ["end-to-end-data-migration", "data-cleansing-enrichment"],
    ctaHeadline: "Not sure how clean your data really is?",
    ctaSub: "Book a Health Check and get a straight answer in under two weeks.",
  },
  {
    slug: "migration-rescue",
    name: "Migration Rescue",
    categoryTag: "URGENT",
    promise: "We take over failing migrations and get them moving again.",
    bodyParagraph:
      "When a mock migration fails, balances won't reconcile, or a go-live date is at risk because of data, we mobilise fast, diagnose what's actually broken, and take ownership of the fix — working with your existing SI, not around them.",
    tags: ["URGENT", "5-DAY MOBILISATION"],
    animation: "rescue",
    included: [
      "Rapid diagnostic of the failing migration workstream",
      "Root-cause analysis of reconciliation failures",
      "A recovery plan with a revised, realistic timeline",
      "Hands-on rebuild of broken mapping or transformation logic",
      "A fresh mock migration cycle with full reconciliation",
      "Handover or ongoing ownership through cutover",
    ],
    phasesHighlighted: ["03", "04", "05"],
    personas: [
      {
        title: "Programme Directors with a slipping go-live date",
        description:
          "Data is the blocker and you need someone who can diagnose and fix it fast, not restart the whole workstream.",
      },
      {
        title: "SI Partners whose data resource has fallen behind",
        description:
          "You need a specialist to parachute in and take the data workstream off your critical path.",
      },
    ],
    domains: ALL_DOMAINS,
    systems: ALL_SYSTEMS,
    pricing: {
      title: "Migration Rescue",
      price: "£850–£1,000 per day",
      detail: "Mobilised typically within 5 working days of agreement. The premium rate reflects the complexity of entering a project mid-stream under pressure, not a different scope of work.",
      whatAffectsPrice: [
        "Severity of the current failure",
        "How much of the existing build can be salvaged",
        "Remaining time to the go-live date",
        "Number of domains affected",
      ],
    },
    faqs: [
      {
        question: "How quickly can you start?",
        answer: "We mobilise within 5 working days of an urgent engagement being confirmed, often sooner.",
      },
      {
        question: "Will you work alongside our existing SI?",
        answer:
          "Yes. We take ownership of the data workstream specifically, working alongside your SI's functional and technical teams rather than replacing them.",
      },
      {
        question: "Can you rescue a migration that's already failed a mock?",
        answer:
          "Yes — that's the most common scenario we're brought in for. We diagnose why the mock failed before proposing a fix.",
      },
    ],
    related: ["end-to-end-data-migration", "data-migration-health-check"],
    ctaHeadline: "Is your go-live at risk because of data?",
    ctaSub: "Talk to us today — we can usually mobilise within a week.",
  },
  {
    slug: "post-go-live-retainer",
    name: "Post-Go-Live Retainer",
    categoryTag: "RETAINER",
    promise: "Ongoing data support after go-live, without re-tendering every time.",
    bodyParagraph:
      "Data problems don't stop at go-live. Corrections, reconciliation queries and small re-migrations keep surfacing for months afterwards. A retainer keeps the team who built your migration on call to fix them, at a fraction of the cost of a fresh engagement.",
    tags: ["FROM £1,500/MO"],
    animation: "retainer",
    included: [
      "A fixed monthly allocation of data support hours",
      "Correction of post-go-live data issues as they're raised",
      "Reconciliation query investigation",
      "Minor re-migrations (new entities, missed records)",
      "Monthly reporting on issues resolved",
      "Priority access to the original migration team",
    ],
    phasesHighlighted: ["06"],
    personas: [
      {
        title: "Finance teams who've just gone live on D365",
        description:
          "You're finding small data issues weekly and need a fast, known team to fix them without a new procurement cycle.",
      },
    ],
    domains: ALL_DOMAINS,
    systems: ALL_SYSTEMS,
    pricing: {
      title: "Post-Go-Live Retainer",
      price: "From £1,500/month (includes up to 3 days; additional days at standard day rate)",
      detail: "Typically 3–6 months post go-live, then reviewed. Invoiced monthly in advance; either party may give 30 days' notice to end the arrangement.",
      whatAffectsPrice: [
        "Expected monthly hours",
        "Number of domains under support",
        "Response time SLA required",
      ],
    },
    faqs: [
      {
        question: "How is this different from a support contract with our SI?",
        answer:
          "SI support contracts typically cover configuration and process issues. This retainer is specifically for data — corrections, reconciliation and re-migrations.",
      },
      {
        question: "Can we start this without having used your migration service?",
        answer:
          "Usually yes, though we'll need a short onboarding to understand your data model and migration history first.",
      },
      {
        question: "What happens if we need more than our monthly allocation?",
        answer: "Additional hours are billed at day rate, agreed with you before any work starts.",
      },
    ],
    related: ["end-to-end-data-migration", "reconciliation-analytics"],
    ctaHeadline: "Still finding data issues after go-live?",
    ctaSub: "A retainer keeps the team who knows your data on call.",
  },
  {
    slug: "data-cleansing-enrichment",
    name: "Data Cleansing & Enrichment",
    categoryTag: "PRE-MIGRATION",
    promise: "Clean, de-duplicated, enriched data — before a single record moves.",
    bodyParagraph:
      "Garbage in becomes garbage out. Before anything migrates, we deduplicate customer and vendor masters, standardise formats, fill enrichment gaps, and flag records that shouldn't move at all — so the migration itself starts from a clean base.",
    tags: ["PRE-MIGRATION"],
    animation: "cleanse",
    included: [
      "Duplicate detection and merge recommendations",
      "Format standardisation (addresses, tax IDs, bank details)",
      "Dead and dormant record identification",
      "Enrichment against reference data where available",
      "A cleansed data set staged and ready for migration",
      "A before/after data quality comparison",
    ],
    phasesHighlighted: ["01", "02"],
    personas: [
      {
        title: "Data owners inheriting twenty years of legacy records",
        description:
          "You know the data is messy but don't have the tooling or time to fix it before migration starts.",
      },
    ],
    domains: ["CUST", "VEND", "GL", "INV"],
    systems: ALL_SYSTEMS,
    pricing: {
      title: "Data Cleansing & Enrichment",
      price: "Standard day rate (£650–£850/day), or bundled into an End-to-End engagement",
      detail: "Scoped against record volume and the number of domains needing cleansing. See How We Engage for full day-rate detail.",
      whatAffectsPrice: ["Record volume per domain", "Number of domains", "Availability of reference/enrichment data"],
    },
    faqs: [
      {
        question: "Can this run standalone, without a full migration?",
        answer:
          "Yes — many clients run cleansing ahead of choosing a migration partner, so the data is ready whoever does the migration.",
      },
      {
        question: "Do you delete records, or just flag them?",
        answer:
          "We never delete without sign-off. Records are flagged with a recommendation, and your team makes the final call.",
      },
      {
        question: "Which domains benefit most from cleansing?",
        answer:
          "Customer and vendor masters see the most duplication and drift over time, followed by inventory item masters.",
      },
    ],
    related: ["data-migration-health-check", "end-to-end-data-migration"],
    ctaHeadline: "Is your legacy data ready to move?",
    ctaSub: "Cleanse it first, so the migration starts from a solid base.",
  },
  {
    slug: "data-migration-project-management",
    name: "Data Migration Project Management",
    categoryTag: "DATA WORKSTREAM ONLY",
    promise: "Dedicated PM for the data workstream, inside your wider programme.",
    bodyParagraph:
      "Cutover plans, RAID logs, mock migration scheduling, sign-off governance — all specific to the data workstream, run by someone who understands migration risk, not a generalist PM stretched across the whole programme.",
    tags: ["DATA WORKSTREAM ONLY"],
    animation: "gantt",
    included: [
      "A dedicated cutover plan for the data workstream",
      "RAID log ownership specific to data risks",
      "Mock migration scheduling and coordination",
      "Sign-off governance and evidence packs",
      "Weekly reporting into your wider programme PMO",
      "Escalation management for data-related blockers",
    ],
    phasesHighlighted: ["01", "02", "03", "04", "05", "06"],
    personas: [
      {
        title: "Programme Managers who need a data specialist, not a generalist",
        description:
          "Your PMO covers the whole programme — you need someone who lives inside the data risk register specifically.",
      },
    ],
    domains: ALL_DOMAINS,
    systems: ALL_SYSTEMS,
    pricing: {
      title: "Data Migration Project Management",
      price: "£650–£850/day, typically 2–3 days per week through the programme",
      detail: "Scoped against programme length and cutover complexity. See How We Engage for full day-rate detail.",
      whatAffectsPrice: ["Programme duration", "Number of mock cycles", "Number of workstreams to coordinate with"],
    },
    faqs: [
      {
        question: "Does this replace our overall programme manager?",
        answer:
          "No — this sits alongside your programme PM, owning the data workstream specifically and reporting into the wider programme.",
      },
      {
        question: "Can this be combined with the End-to-End service?",
        answer:
          "Yes, and often is — many engagements include both delivery and dedicated PM for the same workstream.",
      },
    ],
    related: ["end-to-end-data-migration", "migration-rescue"],
    ctaHeadline: "Need a PM who lives and breathes data risk?",
    ctaSub: "Book a call to see how this slots into your programme.",
  },
  {
    slug: "integration-interface-services",
    name: "Integration & Interface Services",
    categoryTag: "RECURRING",
    promise: "Reliable feeds between D365 and whatever survives the migration.",
    bodyParagraph:
      "Not every system retires at go-live. We build and maintain the interfaces between D365 and the systems that stay — using Azure Data Factory, KingswaySoft or Scribe/Skyvia depending on volume and complexity — so data keeps flowing correctly long after cutover.",
    tags: ["RECURRING"],
    animation: "integration",
    included: [
      "Interface design between D365 and surviving systems",
      "Build using Azure Data Factory, KingswaySoft or Scribe/Skyvia",
      "Error handling and retry logic",
      "Monitoring and alerting on interface failures",
      "Ongoing maintenance as source or target systems change",
      "Documentation of every interface for your internal team",
    ],
    phasesHighlighted: ["05", "06"],
    personas: [
      {
        title: "IT leads managing a hybrid system landscape post-migration",
        description:
          "Not everything moved to D365 — you need the remaining systems talking to it reliably.",
      },
    ],
    domains: ALL_DOMAINS,
    systems: ALL_SYSTEMS,
    pricing: {
      title: "Integration & Interface Services",
      price: "Build: £650–£850/day. Ongoing maintenance: scoped per interface",
      detail: "Scoped against interface count and data volume. See How We Engage for full day-rate detail.",
      whatAffectsPrice: ["Number of interfaces", "Real-time vs batch requirements", "Data volume and frequency"],
    },
    faqs: [
      {
        question: "What tools do you build interfaces with?",
        answer: "Azure Data Factory, KingswaySoft and Scribe/Skyvia, chosen based on volume, latency needs and budget.",
      },
      {
        question: "Can you take over an interface someone else built?",
        answer: "Yes, we regularly inherit and stabilise interfaces built by other teams or during the original implementation.",
      },
    ],
    related: ["post-go-live-retainer", "data-governance-mdm"],
    ctaHeadline: "Need reliable data flowing in and out of D365?",
    ctaSub: "Let's talk about the interfaces your landscape actually needs.",
  },
  {
    slug: "data-governance-mdm",
    name: "Data Governance & MDM",
    categoryTag: "POST-MIGRATION",
    promise: "Ownership and stewardship that stops the data drifting again.",
    bodyParagraph:
      "A clean migration doesn't stay clean without governance. We set up ownership models, data dictionaries and stewardship processes so duplicate customers and inconsistent masters don't creep back in six months after go-live.",
    tags: ["POST-MIGRATION"],
    animation: "tree",
    included: [
      "A data ownership model by domain",
      "A data dictionary defining every key field and its source of truth",
      "Stewardship processes for ongoing data quality",
      "Governance forum setup and cadence",
      "Master data management tooling recommendations",
      "A 90-day drift review after implementation",
    ],
    phasesHighlighted: ["06"],
    personas: [
      {
        title: "Data owners who don't want to repeat the cleansing exercise",
        description:
          "You've just paid to clean the data once — you want a process that keeps it that way.",
      },
    ],
    domains: ALL_DOMAINS,
    systems: ALL_SYSTEMS,
    pricing: {
      title: "Data Governance & MDM",
      price: "Day rate (£650–£850/day) or fixed price, scoped to domain count",
      detail: "Typically a 4–6 week engagement after go-live. See How We Engage for full day-rate detail.",
      whatAffectsPrice: ["Number of domains", "Number of stakeholder groups to align", "MDM tooling complexity"],
    },
    faqs: [
      {
        question: "When should we start this — before or after go-live?",
        answer:
          "After go-live is typical, once real usage patterns are visible, though the ownership model can be drafted earlier.",
      },
      {
        question: "Do you implement MDM tooling, or just the governance model?",
        answer:
          "Both are available — some clients only need the model and process; others want tooling recommendations and setup too.",
      },
    ],
    related: ["integration-interface-services", "post-go-live-retainer"],
    ctaHeadline: "Don't let the data drift back.",
    ctaSub: "Set up governance that protects the migration you just paid for.",
  },
  {
    slug: "reconciliation-analytics",
    name: "Reconciliation Analytics",
    categoryTag: "POWER BI",
    promise: "Migration audit packs and dashboards that prove every balance agrees.",
    bodyParagraph:
      "Sign-off shouldn't rest on a spreadsheet nobody trusts. We build Power BI reconciliation dashboards and audit packs that show, domain by domain, exactly what moved, what matched, and what still needs attention.",
    tags: ["POWER BI"],
    animation: "dashboard",
    included: [
      "A Power BI reconciliation dashboard per domain",
      "Source-vs-target variance reporting",
      "Automated audit pack generation for sign-off",
      "Drill-down from summary to record level",
      "Historical comparison across mock cycles",
      "Handover and training for your internal team",
    ],
    phasesHighlighted: ["04", "05"],
    personas: [
      {
        title: "Finance Directors who need evidence, not assurances",
        description:
          "You're signing off go-live and want a dashboard you can interrogate yourself, not a consultant's word.",
      },
    ],
    domains: ALL_DOMAINS,
    systems: ALL_SYSTEMS,
    pricing: {
      title: "Reconciliation Analytics",
      price: "Day rate (£650–£850/day) or fixed price, scoped per engagement",
      detail: "Scoped against the number of domains and mock cycles to be reported on. See How We Engage for full day-rate detail.",
      whatAffectsPrice: ["Number of domains", "Number of mock cycles", "Level of drill-down detail required"],
    },
    faqs: [
      {
        question: "Can this integrate with a migration you didn't run?",
        answer:
          "Yes, provided we have access to source and target extracts, we can build reconciliation dashboards independent of who ran the migration.",
      },
      {
        question: "Do we keep the Power BI dashboards after the engagement?",
        answer: "Yes, they're handed over along with training for your internal team to maintain them.",
      },
    ],
    related: ["post-go-live-retainer", "data-migration-project-management"],
    ctaHeadline: "Want proof, not just a promise, that it reconciles?",
    ctaSub: "Let's build the dashboard your sign-off actually deserves.",
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES_CONTENT.find((s) => s.slug === slug);
}
