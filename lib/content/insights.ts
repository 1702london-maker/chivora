export interface InsightArticle {
  slug: string;
  title: string;
  category: "Technical" | "Strategy" | "Case Study";
  published: boolean;
  readTime: string;
  excerpt: string;
  body: string[];
  pullQuote?: { text: string; attribution: string };
  author?: string;
}

export const INSIGHTS: InsightArticle[] = [
  {
    slug: "why-data-migration-fails-on-d365-projects",
    title: "Why Data Migration Fails on D365 Projects — And What To Do About It",
    category: "Strategy",
    published: true,
    readTime: "8 min read",
    author: "Sunday Ukwungwu, Founder & Director — Chivora",
    excerpt:
      "It is the most predictable failure mode in D365 delivery — and it almost always traces back to the same root cause: data migration was treated as a task rather than a discipline.",
    body: [
      "If you have been part of a Microsoft Dynamics 365 implementation — as a programme manager, a finance director, a project sponsor, or a systems integrator — you have almost certainly seen it happen. The functional workstreams are tracking green. The configuration is done. The training sessions are booked. And then, three weeks before go-live, someone opens the migrated data in D365 and the numbers don't reconcile.",
      "This is not bad luck. It is not an edge case. It is the most predictable failure mode in D365 delivery — and it almost always traces back to the same root cause: data migration was treated as a task rather than a discipline.",
      "## The Pattern We See, Project After Project",
      "Data migration tends to be scoped as a line item on the project plan rather than a dedicated workstream with its own resource, methodology, and sign-off process. It gets assigned to a functional consultant who already owns the GL design, or an IT analyst who is also managing the infrastructure cutover, or — most commonly — a business analyst who knows the source system well but has never loaded data into D365 at volume.",
      "The result is predictable. Mapping decisions get made ad hoc. Cleansing happens inconsistently across domains. The first real load into D365 happens four weeks before go-live, when there is no longer enough runway to fix what is wrong. And the business goes live with data it does not fully trust.",
      "## The Six Reasons D365 Data Migration Fails",
      "### 1. Discovery is skipped or compressed",
      "Before a single record moves, someone needs to understand the source data in detail — not at a high level, but at the field level. What does the customer master actually contain? Are the GL account codes consistent across legal entities? How clean is the open AR? How many item records are duplicated or inactive?",
      "When discovery is skipped — usually because the project timeline doesn't budget for it — the problems surface during testing, when fixing them is expensive. Or worse, at cutover, when fixing them is not possible.",
      "### 2. Data quality problems are treated as the migration team's problem",
      "Data migration specialists can identify data quality issues, document them, and define what needs to be fixed. We cannot fix them on your behalf — because the decisions required (should this duplicate customer record be merged or deleted? should this historical transaction be carried forward or written off?) are business decisions, not technical ones.",
      "Projects that go wrong almost always have one thing in common: the business was not engaged in data cleansing early enough. By the time the quality problems surface, the people who own the data — the finance team, the warehouse manager, the credit controller — are already in UAT and have no bandwidth to go back.",
      "### 3. The mapping is done once and never revisited",
      "A data mapping document written in month two of a project is a snapshot of what the functional design looked like in month two. D365 configurations change. Business requirements shift. New entities are added. If the mapping document is not maintained in sync with those changes, the migration build will be loading data into a target that no longer matches the design it was built against.",
      "### 4. Testing is treated as a one-time event",
      "A single migration test run — even if it passes — is not enough. A robust migration programme runs at least two full mock migrations before cutover: the first to find the problems, the second to prove the fixes worked and to rehearse the cutover timing. Projects that skip the second mock run regularly discover at cutover that the fix introduced a new problem.",
      "### 5. Reconciliation is not defined in advance",
      "How will you know when the migration has succeeded? This sounds like an obvious question, but on the majority of projects we encounter, there is no pre-agreed reconciliation framework — no defined tolerance, no sign-off checklist, no named person with the authority to say ‘the data is good enough to go live.’",
      "Without that framework, the cutover decision becomes subjective. And subjective decisions under go-live pressure almost always go in the same direction: the business goes live with data it is not confident in, and spends the next three months firefighting.",
      "### 6. Nobody owns it end to end",
      "This is the root cause underneath all the others. Data migration done well requires a single, accountable owner who is present from discovery through to post-go-live stabilisation — someone whose only job on the project is to ensure that data moves correctly. When that ownership is distributed across multiple people with competing priorities, decisions fall through the gaps.",
      "## What Good Looks Like",
      "A well-run D365 data migration has the following characteristics, regardless of the size or complexity of the programme:",
      "A dedicated data migration resource — not a shared responsibility — present from kick-off. A data discovery phase completed before mapping begins, with a written assessment of data quality by domain. A source-to-target mapping document that is version-controlled and updated every time the D365 configuration changes. Business-owned data cleansing, with clear accountability and a defined completion date before migration build begins. Two full mock migration runs — the first to find issues, the second to prove them fixed. A pre-agreed reconciliation framework with defined tolerances and a named sign-off authority. A cutover plan rehearsed in mock migration 2, including rollback triggers and escalation paths. A post-go-live stabilisation period with named support resource for the first four to six weeks.",
      "None of these are complicated. None of them require technology you don't already have. They require discipline, dedicated ownership, and a methodology that has been applied enough times to know where the problems hide.",
      "## A Note on Source Systems",
      "The failure patterns above apply to every D365 migration regardless of source system — but each legacy ERP introduces its own specific complexity. SAP's BSEG clearing document structure creates open-item reconciliation challenges that catch teams off guard. Microsoft Dynamics NAV's dimension framework maps differently to D365 financial dimensions than most people expect. SAGE's multi-company structures require careful entity mapping decisions before a single record is touched.",
      "Understanding those source-system-specific risks in advance — before the mapping document is written — is the difference between a migration that surfaces problems in discovery and one that surfaces them at cutover.",
      "## What This Means If You're Planning a D365 Migration Now",
      "If your programme starts in the next 3 months: commission a Data Migration Health Check before your SI partner begins the functional design. Understanding the state of your source data now changes the scoping conversation, the timeline, and the risk profile of the entire programme. It costs a fraction of a go-live delay.",
      "If your migration is already in flight: ask your project manager two questions. Who specifically owns the data migration workstream, and what does the reconciliation framework look like? If neither question has a clear answer, that is the thing to fix before anything else.",
      "If your go-live is within 8 weeks and data is a concern: a migration rescue engagement can be mobilised within five working days. The sooner it starts, the more options exist.",
      "Chivora works exclusively on D365 data migration — nothing else. If you'd like to talk through where your programme stands, book a 20-minute discovery call. No sales pitch. Honest answers about what's achievable and how we'd approach it.",
    ],
    pullQuote: {
      text: "Data migration is not a task you assign. It is a discipline you resource.",
      attribution: "Sunday Ukwungwu, Founder — Chivora",
    },
  },
  {
    slug: "dmf-vs-kingswaysoft-vs-scribe",
    title: "DMF vs KingswaySoft vs Scribe",
    category: "Technical",
    published: true,
    readTime: "7 min read",
    excerpt: "Choosing the right migration tooling for your source system.",
    body: [
      "D365's native Data Management Framework (DMF/DIXF) is the default starting point for most migrations — it's built into the platform, handles standard entities well, and requires no additional licensing. Its limits show up with complex transformations, high data volumes, or source systems that don't export cleanly into DMF's expected format.",
      "KingswaySoft's SSIS-based integration toolkit is the tool we reach for most often on complex migrations. It handles transformation logic that DMF struggles with, supports a wide range of source connectors, and gives much finer control over error handling and retry logic — at the cost of needing SSIS development skill on the team.",
      "Scribe (now part of TIBCO, alongside Skyvia as a lighter alternative) suits ongoing integration more than one-off migration — its strength is maintainable, monitorable data flows rather than large one-time loads.",
      "In practice, most of our engagements use DMF for straightforward entities and KingswaySoft for anything with real transformation complexity — chosen per entity, not as an all-or-nothing platform decision.",
    ],
  },
  {
    slug: "migrating-open-ar-ap-transactions-lessons-learned",
    title: "Migrating open AR/AP transactions: lessons learned",
    category: "Technical",
    published: true,
    readTime: "5 min read",
    excerpt: "Why open items are the hardest part of any ledger migration.",
    body: [
      "Closed transactions are the easy part of any AR/AP migration — they're historical record, and once mapped correctly they don't need to behave like anything other than a static number. Open items are different: they need to behave correctly in the target system after go-live, including matching, ageing and payment application.",
      "The most common failure mode is migrating open items as flat balances without their underlying document structure — invoice, credit note, payment, and the links between them. Once that structure is lost, ageing reports and statement runs in the new system produce numbers that don't match what customers and vendors expect.",
      "The fix is to migrate the full document chain, not just the net balance, and to reconcile at document level during every mock cycle — not just at the ledger balance level. It's more work upfront, and it's the difference between a finance team that trusts the new system on day one and one that doesn't.",
    ],
  },
];

export function getInsightBySlug(slug: string) {
  return INSIGHTS.find((a) => a.slug === slug);
}

export function getPublishedInsights() {
  return INSIGHTS.filter((a) => a.published);
}
