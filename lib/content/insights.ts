export interface InsightArticle {
  slug: string;
  title: string;
  category: "Technical" | "Strategy" | "Case Study";
  date: string;
  readTime: string;
  excerpt: string;
  body: string[];
  pullQuote?: string;
}

// Draft content — for review before publishing.
export const INSIGHTS: InsightArticle[] = [
  {
    slug: "why-data-migration-fails-on-d365-projects",
    title: "Why data migration fails on D365 projects",
    category: "Strategy",
    date: "DRAFT",
    readTime: "6 min read",
    excerpt: "The most common causes, and how to catch them before cutover.",
    body: [
      "Data migration is consistently one of the highest-risk workstreams on a D365 implementation, and it fails in predictable ways. The first and most common cause is ownership: migration gets assigned to a functional consultant as one task among many, rather than run as its own workstream with a dedicated owner accountable for it.",
      "The second cause is timing. Data quality issues that should surface during discovery instead surface for the first time at the first mock migration — by which point the cutover plan has already been built around an assumption that the data was clean.",
      "The third, and often the most damaging, is reconciliation discipline. Balances are checked at a summary level rather than transaction level, so discrepancies hide until go-live, when they surface as live production problems instead of test findings.",
      "None of these are inevitable. Treating data migration as its own workstream, profiling data quality honestly at the start, and reconciling at transaction level through every mock cycle removes most of the risk before it becomes a go-live problem.",
    ],
    pullQuote: "Data migration fails for the same three reasons, on almost every project.",
  },
  {
    slug: "dmf-vs-kingswaysoft-vs-scribe",
    title: "DMF vs KingswaySoft vs Scribe",
    category: "Technical",
    date: "DRAFT",
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
    date: "DRAFT",
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
