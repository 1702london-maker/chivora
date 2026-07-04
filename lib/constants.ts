export const SERVICES = [
  {
    title: "End-to-End Data Migration",
    slug: "end-to-end-data-migration",
    tags: ["FLAGSHIP", "DAY RATE / FIXED"],
    description:
      "Full workstream ownership, discovery to post-go-live sign-off.",
  },
  {
    title: "Data Migration Health Check",
    slug: "data-migration-health-check",
    tags: ["FIXED PRICE", "FROM £2,500", "5–10 DAYS"],
    description: "Data quality scoring and a readiness report before you commit.",
  },
  {
    title: "Migration Rescue",
    slug: "migration-rescue",
    tags: ["URGENT", "5-DAY MOBILISATION"],
    description: "Take over failing migrations and salvage late-stage issues.",
  },
  {
    title: "Post-Go-Live Retainer",
    slug: "post-go-live-retainer",
    tags: ["FROM £1,500/MO"],
    description: "Corrections, reconciliation queries, minor re-migrations.",
  },
  {
    title: "Data Cleansing & Enrichment",
    slug: "data-cleansing-enrichment",
    tags: ["PRE-MIGRATION"],
    description: "Dedup, standardisation and enrichment before anything moves.",
  },
  {
    title: "Data Migration Project Management",
    slug: "data-migration-project-management",
    tags: ["DATA WORKSTREAM ONLY"],
    description: "Cutover plans, RAID, mock scheduling, sign-off governance.",
  },
  {
    title: "Integration & Interface Services",
    slug: "integration-interface-services",
    tags: ["RECURRING"],
    description: "Feeds between D365 and surviving systems, built and maintained.",
  },
  {
    title: "Data Governance & MDM",
    slug: "data-governance-mdm",
    tags: ["POST-MIGRATION"],
    description: "Ownership models, dictionaries, stewardship that sticks.",
  },
  {
    title: "Reconciliation Analytics",
    slug: "reconciliation-analytics",
    tags: ["POWER BI"],
    description: "Migration audit packs and reconciliation dashboards.",
  },
] as const;

export const SOURCE_SYSTEMS = [
  { name: "SAP", slug: "sap", label: "SAP ECC" },
  { name: "Oracle", slug: "oracle", label: "ORACLE EBS" },
  { name: "Sage", slug: "sage", label: "SAGE 200" },
  { name: "Dynamics NAV", slug: "dynamics-nav", label: "DYNAMICS NAV" },
  { name: "BPCS", slug: "bpcs", label: "BPCS" },
  { name: "IFS", slug: "ifs", label: "IFS" },
  { name: "Access Dimensions", slug: "access-dimensions", label: "ACCESS DIMENSIONS" },
] as const;

export const DATA_DOMAINS = [
  { code: "GL", name: "General Ledger", description: "Chart of accounts, balances, opening trial balance." },
  { code: "AR", name: "Accounts Receivable", description: "Customer masters, open items, ageing." },
  { code: "AP", name: "Accounts Payable", description: "Vendor masters, open items, payment terms." },
  { code: "INV", name: "Inventory", description: "Item masters, on-hand quantities, valuation." },
  { code: "FA", name: "Fixed Assets", description: "Asset register, depreciation profiles, net book values." },
  { code: "CUST", name: "Customers", description: "Customer master data and hierarchies." },
  { code: "VEND", name: "Vendors", description: "Vendor master data and banking details." },
] as const;

export const METHODOLOGY_PHASES = [
  {
    number: "01",
    name: "DISCOVER",
    description: "Profiling, volumes, quality scoring across every source system in scope.",
  },
  {
    number: "02",
    name: "DESIGN",
    description: "Source-to-target mapping and the cleansing plan, agreed before build starts.",
  },
  {
    number: "03",
    name: "BUILD",
    description: "DMF templates, KingswaySoft packages, SQL staging tables.",
  },
  {
    number: "04",
    name: "TEST",
    description: "Two mock migrations, full reconciliation, and UAT sign-off.",
  },
  {
    number: "05",
    name: "CUTOVER",
    description: "Final load, balance reconciliation, go-live clearance.",
  },
  {
    number: "06",
    name: "STABILISE",
    description: "Corrections, closure report, retainer option for what follows.",
  },
] as const;

export const PAIN_POINTS = [
  {
    icon: "layers-off",
    title: "An afterthought, not a workstream.",
    description:
      "Most projects hand data migration to a functional consultant to do in their spare time. Then the mock migration fails.",
    linkLabel: "Get a specialist →",
    href: "/services/end-to-end-data-migration",
  },
  {
    icon: "clock-alert",
    title: "Go-live slipping because of data.",
    description:
      "Balances don't reconcile. Open transactions won't load. Every slipped cutover costs the programme money.",
    linkLabel: "Rescue my migration →",
    href: "/services/migration-rescue",
  },
  {
    icon: "database-x",
    title: "Twenty years of legacy data. No plan.",
    description:
      "Duplicates, dead accounts, inconsistent masters. Garbage in becomes garbage out — unless it's cleansed first.",
    linkLabel: "Start with a Health Check →",
    href: "/services/data-migration-health-check",
  },
] as const;

export const TOOLS = [
  "DMF / DIXF",
  "KingswaySoft",
  "SQL Server / Azure SQL",
  "Power Query",
  "Power BI",
  "Azure Data Factory",
  "Scribe / Skyvia",
] as const;

// Illustrative examples only — not real client data. Replace once case studies are available.
export const CASE_METRICS = [
  {
    sector: "MANUFACTURING · SAP ECC → D365 F&O",
    stat: "1.2M",
    statLabel: "records migrated",
    subStats: ["100% GL RECONCILIATION", "0 DAYS SLIPPED", "3 MOCK CYCLES"],
  },
  {
    sector: "DISTRIBUTION · SAGE 200 → D365 F&O",
    stat: "640K",
    statLabel: "records migrated",
    subStats: ["100% AR/AP RECONCILIATION", "2 MOCK CYCLES", "5-WEEK BUILD"],
  },
  {
    sector: "PROFESSIONAL SERVICES · NAV → D365 CE",
    stat: "310K",
    statLabel: "records migrated",
    subStats: ["ZERO DATA LOSS", "1 DAY SLIPPED", "4 MOCK CYCLES"],
  },
  {
    sector: "RETAIL · ORACLE EBS → D365 F&O",
    stat: "2.4M",
    statLabel: "records migrated",
    subStats: ["100% INVENTORY RECONCILIATION", "0 DAYS SLIPPED", "3 MOCK CYCLES"],
  },
] as const;

export const INSIGHTS_DRAFTS = [
  {
    title: "Why data migration fails on D365 projects",
    excerpt: "The most common causes, and how to catch them before cutover.",
    date: "DRAFT",
  },
  {
    title: "DMF vs KingswaySoft vs Scribe",
    excerpt: "Choosing the right migration tooling for your source system.",
    date: "DRAFT",
  },
  {
    title: "Migrating open AR/AP transactions: lessons learned",
    excerpt: "Why open items are the hardest part of any ledger migration.",
    date: "DRAFT",
  },
] as const;

export const POSITIONING_LINE =
  "We specialise exclusively in Microsoft Dynamics 365 data migration — moving critical business data from SAP, Oracle, Sage, NAV, BPCS, IFS and Access Dimensions into D365 F&O and CE. Cleanly. Completely. On time.";
