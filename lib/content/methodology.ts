export interface MethodologyPhaseDetail {
  number: string;
  name: string;
  summary: string;
  paragraphs: string[];
  deliverables: string[];
  signOffArtifact: string;
  icon: "search" | "map" | "cog" | "flask" | "flag" | "check";
}

export const METHODOLOGY_DETAIL: MethodologyPhaseDetail[] = [
  {
    number: "01",
    name: "DISCOVER",
    summary: "Profiling, volumes, quality scoring across every source system in scope.",
    paragraphs: [
      "Every engagement starts with a genuine audit of the live data, not the original system specification. We profile volumes, duplication rates and completeness across every domain in scope, across every source system.",
      "The output is a data quality score per domain, ranked by risk, so the programme knows exactly what it's dealing with before design work begins.",
    ],
    deliverables: [
      "Data profiling report across all in-scope domains",
      "Duplicate and dead-record findings",
      "Data quality scorecard, ranked by risk",
      "Recommended cleansing priorities",
    ],
    signOffArtifact: "Data Quality Scorecard",
    icon: "search",
  },
  {
    number: "02",
    name: "DESIGN",
    summary: "Source-to-target mapping and the cleansing plan, agreed before build starts.",
    paragraphs: [
      "Every source entity is mapped to its D365 target explicitly, field by field, with transformation rules documented rather than left to build-time interpretation.",
      "The cleansing plan from discovery is finalised here, and every mapping decision is signed off by your finance and functional leads before a single line of ETL is written.",
    ],
    deliverables: [
      "Source-to-target mapping document",
      "Transformation rules for every field",
      "Finalised cleansing plan",
      "Sign-off from finance and functional leads",
    ],
    signOffArtifact: "Mapping & Cleansing Sign-Off",
    icon: "map",
  },
  {
    number: "03",
    name: "BUILD",
    summary: "DMF templates, KingswaySoft packages, SQL staging tables.",
    paragraphs: [
      "We build the migration machinery — DMF/DIXF templates, KingswaySoft packages, and SQL staging tables — against the mapping agreed in design, with unit tests on every transformation rule.",
      "Nothing here is generic. Every package is built against your specific source structures and your specific D365 configuration.",
    ],
    deliverables: [
      "DMF/DIXF import templates",
      "KingswaySoft ETL packages",
      "SQL staging schema",
      "Unit-tested transformation logic",
    ],
    signOffArtifact: "Build Readiness Checklist",
    icon: "cog",
  },
  {
    number: "04",
    name: "TEST",
    summary: "Two mock migrations, full reconciliation, and UAT sign-off.",
    paragraphs: [
      "Two full mock migrations run end to end, each followed by a formal reconciliation report comparing source and target balance for balance, record for record.",
      "Your team runs UAT against the second mock. Nothing proceeds to cutover planning until every domain reconciles and UAT is signed off.",
    ],
    deliverables: [
      "Mock migration 1, with reconciliation report",
      "Mock migration 2, with reconciliation report",
      "UAT test scripts and results",
      "Defect log, closed out",
    ],
    signOffArtifact: "UAT Sign-Off Document",
    icon: "flask",
  },
  {
    number: "05",
    name: "CUTOVER",
    summary: "Final load, balance reconciliation, go-live clearance.",
    paragraphs: [
      "The final load runs against the cutover plan built during design, with every domain reconciled against source one last time before go-live is cleared.",
      "This is the highest-pressure phase of the engagement, and it's run against a rehearsed plan, not improvised on the night.",
    ],
    deliverables: [
      "Final cutover plan and runbook",
      "Final load execution",
      "Final reconciliation report, all domains",
      "Go-live clearance sign-off",
    ],
    signOffArtifact: "Go-Live Sign-Off Document",
    icon: "flag",
  },
  {
    number: "06",
    name: "STABILISE",
    summary: "Corrections, closure report, retainer option for what follows.",
    paragraphs: [
      "The first weeks after go-live surface small issues no mock migration can fully predict — we're on hand to correct them fast.",
      "The engagement closes with a written closure report, and clients can move onto a Post-Go-Live Retainer for ongoing support beyond that.",
    ],
    deliverables: [
      "Post-go-live correction support (30 days included)",
      "Closure report",
      "Lessons-learned summary",
      "Retainer proposal, if required",
    ],
    signOffArtifact: "Closure Report",
    icon: "check",
  },
];
