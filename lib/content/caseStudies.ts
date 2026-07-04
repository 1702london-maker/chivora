// Illustrative examples only — Chivora has no published client case studies
// yet. These are placeholders showing the shape of a future case study,
// not real client engagements. Replace with real, permissioned data before
// this page is presented as fact.
export interface CaseStudy {
  slug: string;
  sector: string;
  sourceSystem: string;
  targetPlatform: string;
  domains: string[];
  timeline: string;
  stat: string;
  statLabel: string;
  subStats: string[];
  narrative: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "manufacturing-sap-fo",
    sector: "Manufacturing",
    sourceSystem: "SAP ECC",
    targetPlatform: "D365 F&O",
    domains: ["GL", "AR", "AP", "FA"],
    timeline: "12 weeks",
    stat: "1.2M",
    statLabel: "records migrated",
    subStats: ["100% GL RECONCILIATION", "0 DAYS SLIPPED", "3 MOCK CYCLES"],
    narrative:
      "A mid-market manufacturer retiring SAP ECC needed general ledger, AR/AP and fixed assets moved into D365 F&O without disrupting a live production schedule. Three mock cycles caught reconciliation issues early enough that cutover ran to plan.",
  },
  {
    slug: "distribution-sage-fo",
    sector: "Distribution",
    sourceSystem: "Sage 200",
    targetPlatform: "D365 F&O",
    domains: ["GL", "AR", "AP"],
    timeline: "8 weeks",
    stat: "640K",
    statLabel: "records migrated",
    subStats: ["100% AR/AP RECONCILIATION", "2 MOCK CYCLES", "5-WEEK BUILD"],
    narrative:
      "A distribution business consolidating three Sage 200 companies into a single D365 F&O legal entity needed chart-of-account differences reconciled before a single balance moved.",
  },
  {
    slug: "professional-services-nav-ce",
    sector: "Professional Services",
    sourceSystem: "Dynamics NAV",
    targetPlatform: "D365 CE",
    domains: ["CUST", "VEND"],
    timeline: "6 weeks",
    stat: "310K",
    statLabel: "records migrated",
    subStats: ["ZERO DATA LOSS", "1 DAY SLIPPED", "4 MOCK CYCLES"],
    narrative:
      "A professional services firm migrating customer relationship data from NAV into D365 CE needed ledger entry application preserved so account history stayed intact for client-facing teams.",
  },
  {
    slug: "retail-oracle-fo",
    sector: "Retail",
    sourceSystem: "Oracle EBS",
    targetPlatform: "D365 F&O",
    domains: ["INV", "GL"],
    timeline: "14 weeks",
    stat: "2.4M",
    statLabel: "records migrated",
    subStats: ["100% INVENTORY RECONCILIATION", "0 DAYS SLIPPED", "3 MOCK CYCLES"],
    narrative:
      "A multi-site retailer moving inventory and GL data out of Oracle EBS needed item masters rationalised across several operating units before a single D365 legal entity could go live.",
  },
];
