export interface SourceSystemContent {
  slug: string;
  name: string;
  label: string;
  platform: string;
  promise: string;
  challenge: string[];
  mappingRows: { source: string; target: string }[];
  flowRows: { source: string; target: string }[];
  pitfalls: string[];
  commonDomains: string[];
  faqs: { question: string; answer: string }[];
}

export const SOURCE_SYSTEMS_CONTENT: SourceSystemContent[] = [
  {
    slug: "sap",
    name: "SAP",
    label: "SAP ECC",
    platform: "F&O",
    promise:
      "We've moved General Ledger, AR/AP and Fixed Assets out of SAP ECC into D365 F&O — cleanly, completely, on time.",
    challenge: [
      "SAP ECC is one of the most common source systems we migrate from, and one of the most demanding. Customer and vendor master data is split across general (KNA1, LFA1) and company-code (KNB1, LFB1) tables, so a single D365 customer or vendor record often has to be assembled from two SAP tables rather than one.",
      "The general ledger runs through SKA1/SKB1 for the account master and BSEG for line items. Open items in BSEG carry clearing document links that reference other line items — migrate them without preserving that chain and your AR/AP ageing will be wrong from day one.",
      "Fixed assets in ANLA/ANLC are held by depreciation area, and SAP often runs several areas in parallel (book, tax, group). Deciding which area maps to D365's net book value is a design decision, not a data-mapping afterthought. Material master data in MARA/MARC frequently spans multiple plants and valuation classes, which needs to be rationalised against D365's single item structure before it moves.",
    ],
    mappingRows: [
      { source: "KNA1 / KNB1 — Customer master", target: "CustTable / CustCreditManagement" },
      { source: "LFA1 / LFB1 — Vendor master", target: "VendTable" },
      { source: "SKA1 / SKB1 — GL account master", target: "MainAccount" },
      { source: "BSEG — GL line items", target: "GeneralJournalAccountEntry" },
      { source: "ANLA / ANLC — Asset master & values", target: "AssetTable / AssetBook" },
      { source: "MARA / MARC — Material master", target: "InventTable / InventDim" },
    ],
    flowRows: [
      { source: "KNA1", target: "CustTable" },
      { source: "LFA1", target: "VendTable" },
      { source: "SKA1", target: "MainAccount" },
      { source: "BSEG", target: "GenJournalEntry" },
      { source: "ANLA", target: "AssetTable" },
      { source: "MARA", target: "InventTable" },
    ],
    pitfalls: [
      "Multiple chart of accounts per company code — reconciling to a single D365 chart requires a mapping decision early, not at cutover.",
      "SAP's KNA1/KNB1 split between general and company-code customer data doesn't map cleanly to a single D365 customer record — plan the merge before you build.",
      "Open AR/AP items in BSEG carry clearing document links that break if migrated without preserving the original document chain.",
      "Asset values in ANLC are stored by depreciation area — decide which area maps to D365's book value before transformation, not during UAT.",
      "Multiple SAP company codes sharing one chart of accounts often need to be split or consolidated to fit D365's legal entity model.",
    ],
    commonDomains: ["GL", "AR", "AP", "FA", "CUST", "VEND"],
    faqs: [
      {
        question: "Do you migrate from SAP S/4HANA as well as ECC?",
        answer:
          "Yes — the underlying table structures are largely consistent between ECC and S/4HANA, though S/4HANA's universal journal (ACDOCA) changes how GL line items are extracted.",
      },
      {
        question: "How do you handle SAP's multiple currency fields?",
        answer:
          "We map local, group and hard currency values explicitly during transformation design, so nothing defaults silently during load.",
      },
      {
        question: "Can you migrate open purchase orders, not just masters?",
        answer:
          "Yes, open POs and sales orders are commonly in scope alongside master data — we scope this during discovery based on what's still open at cutover.",
      },
    ],
  },
  {
    slug: "oracle",
    name: "Oracle",
    label: "ORACLE EBS",
    platform: "F&O",
    promise:
      "We've moved General Ledger, receivables and fixed assets out of Oracle E-Business Suite into D365 F&O — cleanly, completely, on time.",
    challenge: [
      "Oracle E-Business Suite spreads customer data across HZ_PARTIES and HZ_CUST_ACCOUNTS in the Trading Community Architecture model, which is more normalised than most legacy ERPs and needs careful flattening before it fits D365's customer structure.",
      "The general ledger stores balances in GL_BALANCES and journal lines in GL_JE_LINES, segmented by a flexible chart of accounts (the accounting flexfield) that's often configured with more segments than D365's account structure supports directly. Deciding how those segments map to D365's main accounts and financial dimensions is one of the first design decisions we make.",
      "Fixed assets live in the FA_ASSETS and FA_BOOKS tables, again with multiple depreciation books running in parallel. Inventory item masters in MTL_SYSTEM_ITEMS often carry organisation-specific attributes that need rationalising if the business ran multiple operating units in Oracle.",
    ],
    mappingRows: [
      { source: "HZ_PARTIES / HZ_CUST_ACCOUNTS — Customer", target: "CustTable" },
      { source: "AP_SUPPLIERS — Supplier master", target: "VendTable" },
      { source: "GL_JE_LINES / GL_BALANCES — GL", target: "GeneralJournalAccountEntry" },
      { source: "FA_ASSETS / FA_BOOKS — Fixed assets", target: "AssetTable / AssetBook" },
      { source: "MTL_SYSTEM_ITEMS — Inventory items", target: "InventTable" },
    ],
    flowRows: [
      { source: "HZ_PARTIES", target: "CustTable" },
      { source: "AP_SUPPLIERS", target: "VendTable" },
      { source: "GL_JE_LINES", target: "GenJournalEntry" },
      { source: "FA_ASSETS", target: "AssetTable" },
      { source: "MTL_SYSTEM_ITEMS", target: "InventTable" },
    ],
    pitfalls: [
      "The accounting flexfield often has more chart-of-account segments than D365 supports natively — map segments to financial dimensions early.",
      "TCA's party/account/site model needs flattening — a single Oracle customer can span multiple sites that need consolidating or splitting for D365.",
      "Multiple operating units in one Oracle instance often use inconsistent item numbering that needs rationalising before it loads into a single D365 legal entity.",
      "Depreciation books (corporate, tax, other) in FA_BOOKS need an explicit mapping decision to D365's book value, made before build starts.",
    ],
    commonDomains: ["GL", "AR", "AP", "FA", "INV", "CUST", "VEND"],
    faqs: [
      {
        question: "Do you support both Oracle EBS and Oracle Fusion Cloud?",
        answer:
          "Our primary experience is with E-Business Suite. Fusion Cloud migrations are scoped case by case given its different data architecture and API surface.",
      },
      {
        question: "How do you handle Oracle's multi-org structure?",
        answer:
          "We map each operating unit to a D365 legal entity (or consolidate them, if that better reflects the target operating model) during the design phase.",
      },
    ],
  },
  {
    slug: "sage",
    name: "Sage",
    label: "SAGE 200",
    platform: "F&O",
    promise:
      "We've moved nominal ledgers, sales and purchase ledgers out of Sage into D365 F&O — cleanly, completely, on time.",
    challenge: [
      "Sage 200 and Sage 50 organise finance around a Nominal Ledger with account codes and, in larger implementations, analysis codes layered on top for departmental or cost-centre reporting. Those analysis codes don't map one-to-one onto D365's financial dimensions — they need an explicit design decision about which becomes a dimension and which becomes part of the main account.",
      "The Sales Ledger and Purchase Ledger hold customer and vendor records with open item ageing that must be preserved through migration so debtor and creditor reports tie out on day one. Where a business has run multiple Sage companies for group entities, consolidating them into D365's legal entity model is usually the single biggest design conversation.",
      "Stock records in Sage 200 are typically simpler than in larger ERPs, but bill-of-materials and stock take history can still carry inconsistencies that surface once data volume increases at migration.",
    ],
    mappingRows: [
      { source: "Nominal Ledger — Account codes", target: "MainAccount" },
      { source: "Sales Ledger — Customer accounts", target: "CustTable" },
      { source: "Purchase Ledger — Supplier accounts", target: "VendTable" },
      { source: "Nominal Ledger — Analysis codes", target: "Financial dimensions" },
      { source: "Stock records — Item master", target: "InventTable" },
    ],
    flowRows: [
      { source: "NOMINAL", target: "MainAccount" },
      { source: "SALES LEDGER", target: "CustTable" },
      { source: "PURCH LEDGER", target: "VendTable" },
      { source: "ANALYSIS CODE", target: "FinDimension" },
      { source: "STOCK ITEM", target: "InventTable" },
    ],
    pitfalls: [
      "Analysis codes layered over the nominal ledger don't map one-to-one onto D365 dimensions — decide the mapping before build, not during UAT.",
      "Multiple Sage companies for group entities usually need consolidating into D365's legal entity model — plan this early with finance.",
      "Open item ageing in the Sales and Purchase Ledgers must be preserved exactly, or debtor/creditor reports won't tie out at go-live.",
      "Sage 50 and Sage 200 have materially different underlying structures — confirm which variant you're on before scoping.",
    ],
    commonDomains: ["GL", "AR", "AP", "INV", "CUST", "VEND"],
    faqs: [
      {
        question: "Do you support both Sage 50 and Sage 200?",
        answer:
          "Yes, though the underlying data structures differ significantly, so we scope discovery separately for each.",
      },
      {
        question: "Can you consolidate multiple Sage companies into one D365 entity?",
        answer:
          "Yes — this is one of the most common design decisions on Sage migrations, and we work through it with your finance team during the design phase.",
      },
    ],
  },
  {
    slug: "dynamics-nav",
    name: "Dynamics NAV",
    label: "DYNAMICS NAV",
    platform: "F&O",
    promise:
      "We've moved Customer, Vendor and G/L Account data out of Dynamics NAV into D365 F&O — cleanly, completely, on time.",
    challenge: [
      "Dynamics NAV (and Business Central) organises finance around the G/L Account table combined with Dimension Sets, which is conceptually close to D365 F&O's own dimension model — the good news is the mapping is usually more direct than from other legacy systems. The complexity comes from how dimension combinations were used in practice, which often drifts from how they were originally designed.",
      "Customer and Vendor tables carry ledger entries (Cust. Ledger Entry, Vendor Ledger Entry) that hold the open item history — these need to migrate with their application (payment matching) intact, not just as flat balances, or reconciliation will fail immediately after cutover.",
      "Item tables and their associated Item Ledger Entries can carry years of costing history using average, FIFO or standard costing methods, which needs to be reconciled against D365's inventory costing model before the item master moves.",
    ],
    mappingRows: [
      { source: "Customer table", target: "CustTable" },
      { source: "Vendor table", target: "VendTable" },
      { source: "G/L Account + Dimension Sets", target: "MainAccount + Financial dimensions" },
      { source: "Cust./Vendor Ledger Entry", target: "CustTrans / VendTrans" },
      { source: "Item table", target: "InventTable" },
    ],
    flowRows: [
      { source: "CUSTOMER", target: "CustTable" },
      { source: "VENDOR", target: "VendTable" },
      { source: "G/L ACCOUNT", target: "MainAccount" },
      { source: "LEDGER ENTRY", target: "CustTrans" },
      { source: "ITEM", target: "InventTable" },
    ],
    pitfalls: [
      "Dimension Sets often drift from their original design over time — audit actual usage before mapping to D365 financial dimensions, not the original design document.",
      "Ledger Entry application (payment matching) must migrate intact, or AR/AP reconciliation fails immediately after cutover.",
      "Item costing history (FIFO, average, standard) needs reconciling against D365's costing model before item masters move.",
      "NAV and Business Central versions differ enough in schema that discovery should confirm the exact version before scoping.",
    ],
    commonDomains: ["GL", "AR", "AP", "INV", "CUST", "VEND"],
    faqs: [
      {
        question: "Do you migrate from Business Central as well as NAV?",
        answer:
          "Yes — the table structures are closely related, though Business Central's extension model can introduce custom fields that need discovery first.",
      },
      {
        question: "Is migrating from NAV to D365 F&O easier than from other systems?",
        answer:
          "The dimension model is conceptually similar, which helps, but ledger entry application and costing history still need careful handling.",
      },
    ],
  },
  {
    slug: "bpcs",
    name: "BPCS",
    label: "BPCS",
    platform: "F&O",
    promise:
      "We've moved General Ledger and inventory data out of BPCS into D365 F&O — cleanly, completely, on time.",
    challenge: [
      "BPCS (Business Planning and Control System) runs on the IBM AS/400 (IBM i) platform, and most implementations we encounter have little to no modern API surface. Data extraction typically means working with flat-file exports or direct reads against the DB2 database underneath, which requires AS/400-literate technical resource on the discovery side.",
      "Because BPCS installations are often decades old, customisations accumulate in ways that aren't always documented — custom fields bolted onto standard structures, or entire modules replaced with bespoke logic. Discovery has to include a genuine audit of what the live system actually contains, not just what the original implementation specification said.",
      "General ledger and inventory data volumes in long-running BPCS environments can be substantial, and historical transaction detail is often only available through report extracts rather than clean table dumps, which shapes how much history is practical to bring forward versus summarise at migration.",
    ],
    mappingRows: [
      { source: "Customer master file", target: "CustTable" },
      { source: "Vendor master file", target: "VendTable" },
      { source: "GL account master & transactions", target: "MainAccount / GeneralJournalAccountEntry" },
      { source: "Item master file", target: "InventTable" },
    ],
    flowRows: [
      { source: "CUST MASTER", target: "CustTable" },
      { source: "VEND MASTER", target: "VendTable" },
      { source: "GL MASTER", target: "MainAccount" },
      { source: "ITEM MASTER", target: "InventTable" },
    ],
    pitfalls: [
      "Limited or no API access means extraction usually relies on flat-file exports or direct DB2 reads — confirm access method during discovery, not during build.",
      "Undocumented customisations are common in long-running BPCS environments — profile the live system rather than trusting original specs.",
      "Historical transaction detail is often only available via report extracts, not clean tables — decide what history is practical to migrate versus summarise.",
      "AS/400-literate technical resource is usually needed on the source side — factor this into discovery timelines.",
    ],
    commonDomains: ["GL", "AR", "AP", "INV", "CUST", "VEND"],
    faqs: [
      {
        question: "How do you extract data from BPCS if there's no modern API?",
        answer:
          "Typically via flat-file exports or direct DB2/AS400 reads, coordinated with whoever currently administers the environment.",
      },
      {
        question: "Can you handle heavily customised BPCS instances?",
        answer:
          "Yes — this is the norm rather than the exception. Discovery includes profiling the live system to find customisations the documentation may have missed.",
      },
    ],
  },
  {
    slug: "ifs",
    name: "IFS",
    label: "IFS",
    platform: "F&O",
    promise:
      "We've moved customer, supplier and general ledger data out of IFS Applications into D365 F&O — cleanly, completely, on time.",
    challenge: [
      "IFS Applications covers finance, supply chain and asset management in one suite, which means data that would sit in separate systems elsewhere — maintenance history against fixed assets, for example — often needs to be disentangled before it maps onto D365's more modular structure.",
      "Older IFS versions have more limited API access than the current cloud-based releases, so discovery has to confirm which version and deployment model you're on before we can commit to an extraction approach — direct database access, IFS's own integration layer, or flat-file exports.",
      "IFS's accounting rules engine, which derives GL postings from underlying transactions, means the general ledger data itself is often a downstream result of business rules rather than a direct entry — understanding those rules is necessary to migrate historical balances accurately rather than just the summarised output.",
    ],
    mappingRows: [
      { source: "Customer Info", target: "CustTable" },
      { source: "Supplier Info", target: "VendTable" },
      { source: "General ledger (via Accounting Rules)", target: "MainAccount / GeneralJournalAccountEntry" },
      { source: "Inventory Part", target: "InventTable" },
    ],
    flowRows: [
      { source: "CUSTOMER INFO", target: "CustTable" },
      { source: "SUPPLIER INFO", target: "VendTable" },
      { source: "GL POSTING", target: "MainAccount" },
      { source: "INVENTORY PART", target: "InventTable" },
    ],
    pitfalls: [
      "IFS's accounting rules engine derives GL postings from transactions — understand the rules before assuming the ledger data is a direct entry.",
      "Version and deployment model (on-prem vs cloud) materially affects extraction method — confirm this before committing to an approach.",
      "Asset maintenance history bundled with finance and supply chain data needs disentangling before it fits D365's modular structure.",
      "API access varies significantly by version — older on-prem instances often need flat-file or direct database extraction.",
    ],
    commonDomains: ["GL", "AR", "AP", "INV", "FA", "CUST", "VEND"],
    faqs: [
      {
        question: "Does the migration approach differ between IFS versions?",
        answer:
          "Yes, materially. Cloud-based IFS releases have a modern API surface; older on-prem versions typically need direct database or flat-file extraction.",
      },
      {
        question: "Can you migrate asset maintenance history alongside fixed assets?",
        answer:
          "Yes, though it's scoped separately since it often sits in a different part of the IFS data model than pure financial asset records.",
      },
    ],
  },
  {
    slug: "access-dimensions",
    name: "Access Dimensions",
    label: "ACCESS DIMENSIONS",
    platform: "F&O",
    promise:
      "We've moved nominal, sales and purchase ledger data out of Access Dimensions into D365 F&O — cleanly, completely, on time.",
    challenge: [
      "Access Dimensions is common among UK SMEs and mid-market businesses, and compared to larger ERPs its data model is relatively straightforward — a Nominal Ledger, Sales Ledger and Purchase Ledger with analysis codes for basic departmental reporting. The migration challenge is usually less about structural complexity and more about years of manual workarounds: journals posted to suspense accounts, ad-hoc analysis code usage, and customer/vendor records that were never properly closed off.",
      "Because Access Dimensions installations are often smaller in data volume than the other systems we migrate from, the priority shifts from performance and staging strategy toward thorough cleansing — this is frequently the source system where our Data Cleansing & Enrichment service adds the most value before migration.",
      "Where a business has grown through acquisition, it's common to find multiple Access Dimensions company databases that need consolidating into a single D365 legal entity, each with its own chart of accounts variations to reconcile.",
    ],
    mappingRows: [
      { source: "Nominal Ledger — Account codes", target: "MainAccount" },
      { source: "Sales Ledger — Customer accounts", target: "CustTable" },
      { source: "Purchase Ledger — Supplier accounts", target: "VendTable" },
      { source: "Analysis codes", target: "Financial dimensions" },
    ],
    flowRows: [
      { source: "NOMINAL", target: "MainAccount" },
      { source: "SALES LEDGER", target: "CustTable" },
      { source: "PURCH LEDGER", target: "VendTable" },
      { source: "ANALYSIS CODE", target: "FinDimension" },
    ],
    pitfalls: [
      "Years of manual workarounds (suspense postings, inconsistent analysis code use) are common — budget for cleansing, not just mapping.",
      "Multiple company databases from acquisitions often need consolidating into one D365 legal entity — reconcile chart-of-account variations early.",
      "Customer and vendor records that were never closed off tend to accumulate — a Health Check before migration usually pays for itself here.",
      "Smaller data volumes mean the real risk is data quality, not extraction performance — plan the workstream accordingly.",
    ],
    commonDomains: ["GL", "AR", "AP", "CUST", "VEND"],
    faqs: [
      {
        question: "Is migrating from Access Dimensions simpler than from SAP or Oracle?",
        answer:
          "Structurally, yes — but data quality issues from years of manual workarounds are common, so cleansing is often the bigger workstream.",
      },
      {
        question: "Can you consolidate multiple Access Dimensions companies into one D365 entity?",
        answer:
          "Yes, this is a common requirement for businesses that have grown by acquisition, and we scope the chart-of-account reconciliation during design.",
      },
    ],
  },
];

export function getSourceSystemBySlug(slug: string) {
  return SOURCE_SYSTEMS_CONTENT.find((s) => s.slug === slug);
}
