// Extra background knowledge for Andy, sourced from the "D365 Data Migration
// FAQ" reference doc, condensed into Andy's own voice. This supplements (and
// must stay consistent with) the site's own content — where the reference
// doc listed source systems beyond the 7 Chivora officially works with, that
// claim was NOT carried over, so Andy never contradicts the site's stated scope.
export const FAQ_KNOWLEDGE = `
GENERAL BACKGROUND KNOWLEDGE — use this to answer common questions naturally, in your own words, not as a script:

What data migration actually involves: moving master and transactional data (customers, vendors, GL balances, inventory, open orders) from a legacy system into D365 accurately and safely. It's not a copy-paste job — it means extracting data from the old system, cleansing and transforming it to fit D365's data model, validating it, and loading it in the right sequence so relationships between records stay intact. Most companies bring in a specialist because bad data going live in a new ERP is expensive to fix after the fact, far more than getting it right beforehand.

What kinds of data can move: both master data (customers, vendors, items, chart of accounts) and open transactions (unpaid invoices, open sales and purchase orders, current inventory). Closed historical transactions can also be migrated or archived depending on need. A sensible rule of thumb is that master data and open/active transactions go into D365 directly, while multiple years of closed history are often better handled through reporting archives, since loading years of closed history rarely adds operational value but does add risk and cost. Many clients bring in 1 to 3 years of detailed history and archive the rest.

Typical timeline: most mid-sized migrations run roughly 6 to 12 weeks from data assessment through cutover, though this depends heavily on how clean the source data is, how many source systems are involved, and how many mock/trial loads are wanted before go-live.

Downtime: migrations are designed to minimise disruption. Extraction, cleansing and mock loads happen in a sandbox while the live system keeps running. The only real downtime is a short, planned cutover window at final go-live, usually scheduled outside business hours, timed based on rehearsed mock migrations rather than improvised live.

Data cleansing: before anything moves, a data quality assessment flags duplicates, missing required fields and inconsistent formatting. Cleansing decisions (like which duplicate customer record is the "real" one) are made jointly, never silently changed without sign-off — the business usually knows best which record is correct when duplicates conflict.

Accuracy after load: every migration includes a validation pass, reconciling record counts, spot-checking key fields, and running control totals (for example, matching AR/AP balances between old and new systems) before a load is considered successful. Validation checklists are specific to the client's own data, and a sign-off report is provided before go-live.

What happens if something goes wrong: every migration has a rollback strategy. If a load fails validation it can be paused and fixed in staging without touching live production data. Running mock migrations first means most issues surface and get fixed long before the real cutover, and there's always a documented go/no-go checkpoint at cutover.

Testing before go-live: migrations run into a sandbox or UAT environment first so the client's team can review and sign off before anything touches production, typically across two to three mock migration cycles, each refining mapping and cleansing rules based on feedback.

Duplicate records: deduplication logic flags likely duplicates during assessment (matching on things like tax ID, address, or fuzzy name matching), producing a "possible matches" report — but the client's team makes the final call on merges, since business context can matter more than pure data matching.

The methodology in plain terms: assess the source data, define field mappings, cleanse and stage the data, run mock migrations for testing, get sign-off, then execute the final production load at cutover, followed by a post-go-live hypercare period. This matches the six-phase methodology already described on the site: Discover, Design, Build, Test, Cutover, Stabilise.

Business process impact: the migration itself focuses on data, not process, but close coordination with the implementation team ensures data structures line up with how workflows and approvals are configured in D365 — things like security roles, approval hierarchies and numbering sequences are specifically checked during UAT so they don't break on day one.

Data security and compliance: client data is treated as confidential throughout, using secure transfer methods, limiting access to authorised team members, and following the client's own data handling policies, including regulatory requirements like GDPR where applicable. This can include masking personally identifiable information in test environments.

Attachments and documents: files like a PDF invoice attached to a vendor record can be migrated along with their parent records, though document volumes often need separate scoping given storage and performance considerations in D365 — sometimes attachments are better linked via external storage than loaded directly.

Security roles and permissions: these are typically configured as part of the D365 implementation itself rather than "migrated" in the data sense, though mapping old roles to new D365 security roles as a reference point is something that can be discussed.

Migration versus integration: migration is a one-time move of data into D365 at cutover. Integration is an ongoing connection between D365 and another live system that keeps exchanging data continuously and needs separate design, testing and monitoring — think of migration as moving house and integration as keeping in touch.

Data mapping documents: a mapping document shows how each field in the old system corresponds to a field in D365. This is built together with the client using source system documentation and sample data, not something the client has to produce alone — it's the blueprint for the migration.

Post-go-live support: a hypercare period, typically 2 to 4 weeks after go-live, is included to catch and resolve any data issues that surface once the client's team starts working in the live system, before formally closing out the migration project. This aligns with the Post-Go-Live Retainer service for ongoing support beyond that window.

Getting a quote: the best next step is a short discovery call to learn about the source system, data volume and timeline, from which a scoped estimate can be put together. A sample data export or read access to the current system helps give a number that can be stood behind, rather than a rough guess.

What's needed to get started: read access or a data export from the current system, a list of which D365 modules are being implemented, and a point of contact who knows the data well. Sample exports of key tables, existing data dictionaries, and honest context on known data quality issues all help — none of it needs to be polished going in.

Phased versus big-bang cutover: migrations can be phased (for example, master data first, then transactional data closer to go-live) or done as a single cutover. There's a tradeoff between a simpler but higher-risk single cutover and a phased approach that's lower risk per step but requires running two systems in parallel for longer. Which approach fits best is discussed based on risk tolerance and timeline.

Handling messy or inconsistent source data: this is common, not unusual, and is exactly why a structured process with an upfront data quality assessment exists — issues get surfaced and flagged early rather than allowed to become a surprise at go-live.

Training: data migration and end-user training are usually separate workstreams, often owned by the implementation partner, though a data-focused walkthrough of what was migrated and how records were mapped is something that can be provided.
`;
