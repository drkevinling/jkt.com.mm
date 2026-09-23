---
updated: 2026-09-23
version: 1.4.0
status: target product model — commercial SSOT. Control-plane columns described here are not all migrated yet; see §12.
---

# Product design

Commercial source of truth for the multitenant platform: what is sold, how a screen unfolds, and how a business moves from a single standalone module to a customized group without a second database or a rewrite of history.

This document governs packaging, entitlements, upgrade, and the two staff gates in §9.1. It does not replace the engine specs:

| Topic                                  | Spec                                                                                                                                              |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bounded contexts, facades, ledgers     | [`backend/HEXAGONAL_PATTERN.md`](../backend/HEXAGONAL_PATTERN.md), [`ERP_MODULES_ENTERPRISE_CHECKLIST.md`](./ERP_MODULES_ENTERPRISE_CHECKLIST.md) |
| Plans, quotas, billing, platform roles | [`ENTERPRISE_PLATFORM_CHECKLIST.md`](./ENTERPRISE_PLATFORM_CHECKLIST.md), [`MULTITENANCY.MD`](./MULTITENANCY.MD)                                  |
| Industry map for Enterprise packs      | [`BUSINESSES_SUMMARY.md`](../BUSINESSES_SUMMARY.md)                                                                                               |
| Loyalty modes already shipped          | [`LOYALTY.md`](./LOYALTY.md) §2                                                                                                                   |
| Module feature snapshots               | [`SALES_FEATURES.md`](./SALES_FEATURES.md), [`INVENTORY_FEATURES.md`](./INVENTORY_FEATURES.md), [`FINANCE_FEATURES.md`](./FINANCE_FEATURES.md)    |

If a screen, plan, or preset disagrees with this file, this file wins for **what the product is**. Engine invariants (append-only ledgers, decimal money, facade-only cross-writes, one sales-order machine) still win for **how a posting is made**.

---

## 1. Two axes

Every tenant has a **package**. The package decides which modules exist and whether those modules must work together. Minimalist, Advanced, and Expert are how much of a module is on screen. They are the same product, folded. They are not three flows, not three plans, and not an authorization check.

```text
package  = which modules they bought
depth    = how far this page is unfolded, on this device
role     = who may perform an act, through Casbin
```

An owner and an accountant on the same plan see the same modules and the same three bars. The page opens on Minimalist either way. Either person may unfold Advanced and Expert. Saving a row still requires the role act for that module.

### 1.1 Packages

| Package          | Who it is for                                            | Shape                                                                                                          |
| ---------------- | -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **Entrepreneur** | A business that wants one job done                       | One standalone module. It runs with the others off.                                                            |
| **SME**          | A business that needs books, stock, and selling together | Accounting + inventory + sales (POS included) are required. Suite modules are optional add-ons.                |
| **Merchant**     | A business that wants the whole back office              | The SME core plus the full suite, on together.                                                                 |
| **Enterprise**   | A group, or a trade with shared extra workflows          | Merchant, plus vertical packs and vendor integrations. Packs are shared features, not one customer's wishlist. |
| **Premium**      | A named account with exceptions                          | A services add-on on top of whatever they already bought. Policy and overrides on that tenant. Same binary.    |

### 1.2 Depths

Three depths, on every package. They describe how much of the same module is on screen. A clinic, a school, a workshop, a shop, and a charity use the same three words. A standalone Accounting tenant and a Merchant tenant use them too.

| Depth          | What unfolding it shows                                                                             |
| -------------- | --------------------------------------------------------------------------------------------------- |
| **Minimalist** | The work finishes in one step. This is the screen everyone lands on.                                |
| **Advanced**   | Open work and running balances: a job, order, or bill can stay unfinished. Someone owes or is owed. |
| **Expert**     | The rest of that same module, the part a careful user opens: statements, tax, match, lots, a quote. |

The operator sells a package. The operator does not sell a depth and does not store one. The user unfolds what they need and can fold it back. Unfolding does not convert a posted sale, stock movement, or journal into a different record. The server does not read the depth. There is no ceiling column, and no request is refused because a bar was closed.

A module they bought is a complete product at all three depths. Accounting includes the books an accountant expects. Inventory includes costing, lots, and purchasing. Those features are active inside Expert. They are not withheld for a higher package.

### 1.2.1 How the screen unfolds

Every page and every modal opens on its Minimalist fields. Advanced and Expert are not separate pages, and every package renders both bars.

- A list or a form shows the Minimalist actions first.
- The bottom of that list or modal has a collapsible bar labeled **Advanced**. Expanding it shows the Advanced fields of modules that are on. Collapsing it hides them. The saved record is unchanged.
- A second collapsible bar sits under that one, labeled **Expert**. It holds the rest of the modules that are on.
- The user's last open or closed state may be remembered on the device.

**Greyed rows.** Expert also shows a short teaser for each module that is off. Those rows are visible and disabled. They exist so a curious user can see what else the platform does. A greyed row does not load that module, does not call its API, and does not change the plan. The entitlement snapshot already knows the flag is off; the screen paints from that flag.

Each missing module contributes a few rows, not its whole product:

| Module that is off    | Greyed rows in Expert                            |
| --------------------- | ------------------------------------------------ |
| Accounting            | Journals, formal statements, bank reconciliation |
| Inventory             | Items and quantities, purchasing, lots           |
| POS                   | The till                                         |
| Sales & order         | Quote, tax invoice                               |
| HR                    | Pay runs                                         |
| Loyalty               | Points on a sale                                 |
| Finance               | Budgets                                          |
| Expense               | Supplier bills                                   |
| Fixed assets          | Depreciation                                     |
| Production            | Production orders                                |
| A second legal entity | A second company, with its own books             |

When the operator turns that module on, the same rows become active. The bars do not move.

### 1.3 Sites and legal entities

These are plan settings. They are not depths.

| Setting            | What it is                                                                                                                                                                                                                  | Who can buy it                                                                                                                                               |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Location quota** | How many sites the tenant may have. One is the default. Each site the quota allows is a real place on stock and on journal lines. A transfer between two sites the quota already allows leaves and arrives in one movement. | Any package. The Minimalist view uses one location. The Advanced bar lists the other locations the quota allows.                                             |
| **Entities**       | A second legal company, with its own books, inside the same tenant. Group statements read those books. This is not a second tenant.                                                                                         | Enterprise only. On every other package the Expert bar shows "a second company" greyed out (§1.2.1). Every package already has the original company, `MAIN`. |

Fulfillment at a site other than the selling site, stock in transit (goods leave one site's books before they arrive), and site-level statements are Expert rows of Inventory and Accounting. They are active when that module is on and the location quota is above one. Intercompany trade and consolidation turn on with the Enterprise entity switch (§5.1). Until then, "a second company" stays a greyed row.

### 1.4 What is on the price list

Operators sell a package. The user unfolds the same three bars on every package. These are the products:

| Package      | What is active                                                                                        | What stays a greyed Expert row until a higher package   |
| ------------ | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| Entrepreneur | One standalone module, in full, including its Expert rows                                             | The other modules in §1.2.1                             |
| SME          | Accounting, inventory, and sales together, including quote, tax invoice, match, and formal statements | Finance, expense, assets, loyalty, HR, a second company |
| Merchant     | The SME core plus the suite                                                                           | Production, packs, a second company                     |
| Enterprise   | Merchant, plus packs and the entity switch                                                            | A bespoke pin. That is Premium.                         |
| Premium      | Whatever they already bought, plus the contracted pins                                                | A private codebase                                      |

Loyalty-only is an Entrepreneur SKU. It is the one package that is not "every business needs books and stock."

---

## 2. Package 1 — Entrepreneur

Standalone modules. Each one operates while the others are off. The buyer may own more than one standalone. They still do not form an ERP until the tenant moves to SME: there is no forced quote-to-cash chain, and a missing module must not fail the module they paid for.

| Module         | What the buyer gets                           | Includes                                                                                                                         | Leaves off                                                                                                                               |
| -------------- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Accounting** | A full set of books, opened on everyday money | Money in, Money out, transfer. Chart, journals, parties, periods, aging, tax settlement, formal statements, bank reconciliation. | Sales orders, stock ledger, POS, payroll, loyalty. Those appear as greyed Expert rows.                                                   |
| **Inventory**  | A full stock product, opened on quantities    | Item master, units, receipts, counts, purchasing, costing, reorder, lots, and every site the quota allows.                       | A sales invoice, a POS ticket, a statutory close. Those appear as greyed Expert rows.                                                    |
| **POS**        | A till                                        | Walk-up sale, tender, receipt, a tab, discounts, refunds.                                                                        | The sales-order lifecycle (quote, reserve, ship, invoice) and a required journal. Those appear as greyed Expert rows.                    |
| **HR**         | People and pay                                | Employees, a pay register, leave, a pay run.                                                                                     | A general ledger, unless they also bought Accounting. The journal row is greyed until then.                                              |
| **Loyalty**    | A program without a till                      | Programs, points, punch, rewards, staff grants, member app.                                                                      | POS earn, stock-issued free items, and loyalty journals, unless those other modules are also entitled. Those rows are greyed until then. |

### 2.1 Independence contract

Operational truth always posts. Financial truth posts only when Accounting is also entitled.

| Standalone | Always writes                              | Writes only if Accounting is entitled | Writes only if Inventory is entitled |
| ---------- | ------------------------------------------ | ------------------------------------- | ------------------------------------ |
| Accounting | Payment entries and journals               | —                                     | —                                    |
| Inventory  | Stock ledger, items, procurement documents | Write-off journals, GRNI accrual      | —                                    |
| POS        | The till ticket and the receipt            | Cash / sales journal                  | Quantity decrement                   |
| HR         | Payroll register                           | Payroll journal                       | —                                    |
| Loyalty    | Points ledger, punch, coupons              | Loyalty journals                      | Free-item stock issue                |

A receipt, a till sale, or a pay run succeeds when the other module is absent. The optional posting is skipped, not queued as an error.

POS in this package does **not** enable the sales module. The till is a completed ticket. Turning on `module_sales` is the SME upgrade, and that flag is one-way once set (a fast-forward voucher must keep voiding through the sales path). Entrepreneur POS stays off that flag.

### 2.2 Features per standalone module

The screen opens on the Minimalist list. Advanced and Expert are bars on the same page or at the bottom of the same modal. Expert rows of this module are active. Expert rows of modules they did not buy are the greyed teasers in §1.2.1.

**Accounting**

Minimalist

- Money in, Money out, and a transfer between cash and bank
- Reason tiles (rent, utilities, wages, supplier, owner capital, owner draw)
- Amount, cash or bank, and a note
- A simple profit figure from money in minus money out
- The chart of accounts stays inside the Advanced bar

Advanced

- A person or company on the entry
- A running balance of who owes you and who you owe
- Journals, the chart, and a simple profit statement and balance sheet
- One opening-balance journal, when the books should start from a summary of work done before accounting was on
- Periods

Expert

- Aging on what is owed and what you owe
- VAT / GST settlement
- Profit and loss, balance sheet, and cash flow
- Bank reconciliation

**Inventory** (items and procurement are this module)

Minimalist

- Items, categories, units, and barcodes
- Quantity on hand at one location
- Receive, adjust, and count stock
- Costing runs and stays inside the Advanced bar

Advanced

- Suppliers
- A purchase that can be received later
- Goods receipts
- The other locations the plan quota allows
- A transfer that leaves one location and arrives at the other in the same step
- Stock history

Expert

- The costing method is a setting (FIFO or weighted average) and it affects the next receipt
- Reorder point and supplier lead time
- Lot and expiry where the item needs them
- Barcode / SKU at volume
- In-transit transfer when the location quota is above one: goods leave one site's books before they arrive. It does not rewrite a same-day transfer

**POS**

Minimalist

- One till
- A walk-up sale that finishes in one motion
- Tender and a receipt
- Stock moves only if Inventory is also entitled
- A journal is written only if Accounting is also entitled

Advanced

- A named customer on the ticket
- A tab or house account that can stay unpaid

Expert

- A discount on the ticket
- A refund of a completed ticket

**HR**

Minimalist

- An employee list
- A pay list for one employer

Advanced

- A pay run that can be drafted and then paid
- Leave balances
- A payroll journal only if Accounting is also entitled

Expert

- Pay history across runs
- An approval before a run is paid

**Loyalty**

Minimalist

- One program
- Staff can grant points and stamp a punch card
- Members redeem a reward
- The member app: wallet, punch card, rewards

Advanced

- Rewards that are still outstanding
- A redemption that stays unconfirmed until staff accept it

Expert

- More than one tier
- Rules that earn or burn points beyond a single grant

Points, punch, and coupons are stored either way. A loyalty journal is written only if Accounting is also entitled. A free item leaves stock only if Inventory is also entitled. Earning points from a till sale needs POS as well. Until those modules are on, the matching Expert rows stay greyed.

---

## 3. Package 2 — SME

The smallest ERP. Accounting, inventory, and sales & order are required and they post to each other. POS is a channel of sales, not a separate product. The till opens as a Minimalist sale that finishes in one motion. The Advanced bar on that same till is where the sale can stay open. The Expert bar is where the quote, the tax invoice, the match, and the formal statements live. Those rows are active because the trio is on. Suite modules stay greyed until they are bought.

| Required      | Role in the trio                                                                                               |
| ------------- | -------------------------------------------------------------------------------------------------------------- |
| Accounting    | Books. Every stock issue and every sale that moves money posts a journal through the accounting facade.        |
| Inventory     | Stock and cost. A delivery consumes a cost layer. Procurement stays inside inventory.                          |
| Sales & order | Commercial documents. POS is `channel = pos` on that document. The Minimalist action completes it in one call. |

| Optional add-on | What it adds                                                                 | Stays off until bought |
| --------------- | ---------------------------------------------------------------------------- | ---------------------- |
| Finance         | Budgets, cost centers, cash forecasts. Planning. It does not own the ledger. | —                      |
| Expense         | Supplier bills, reimbursements, AP beyond a stock receipt.                   | —                      |
| Fixed assets    | Register, depreciation, disposal.                                            | —                      |
| Loyalty         | Points and punch attached to a sale.                                         | —                      |

HR is not an SME add-on. It is an Entrepreneur module and a Merchant suite module. A tenant who needs payroll before the rest of the suite buys HR as Entrepreneur alongside SME, or waits for Merchant.

### 3.1 Depth inside the trio

**Minimalist (open by default).** A sale is finished at the counter: stock decrements, cost is taken silently, cash and sales post from templates. The owner sees Money in / Money out and on-hand quantities at one location. The rows underneath are still a sales order, a shipment, an invoice, a payment, and balanced journals.

**Advanced (collapsible bar).** Goods or a service can move before cash arrives. A party has a running balance. A purchase can be received later. Till close batches the day's money-in postings. Further locations appear up to the quota, and a transfer leaves and arrives in one movement.

**Expert (collapsible bar).** The rest of the same three modules, active: quote through invoice, a tax invoice, three-way match, aging, formal statements, bank reconciliation, the costing method, lots, and an in-transit transfer when the location quota is above one. Finance, expense, assets, loyalty, HR, and a second company stay the greyed rows in §1.2.1.

---

## 4. Package 3 — Merchant

The full suite on top of the SME trio. One plan turns the add-ons on together.

| Suite module                         | Comes on         |
| ------------------------------------ | ---------------- |
| Finance                              | Yes              |
| Expense                              | Yes              |
| Fixed assets                         | Yes              |
| Loyalty                              | Yes              |
| HR (payroll)                         | Yes              |
| Accounting, inventory, sales & order | Already required |

Production (work orders, MRP) exists in the codebase and is licensed on its own flag. It is not part of Merchant. It attaches to an Enterprise **make** pack, or to a Premium override.

### 4.1 Depth inside the suite

The till and the money screen still open on Minimalist. The user unfolds Advanced, then Expert, on the same page or at the bottom of the same modal. Opening a bar is a screen choice. Saving a row still goes through Casbin.

**Advanced (collapsible bar).** Same as SME Advanced, with the suite available: expenses, assets, loyalty earn on a sale, pay runs. Further locations appear up to the quota. Transfers still leave and arrive together.

**Expert (collapsible bar).** The SME Expert rows stay active. The suite adds its own:

| Area          | What Expert shows, active because the module is on                                                                                                                                                                                                                                                                           |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sales & order | Quote → reserved → fulfilled → invoiced. Promotions and discounts. Loyalty points on the sale. Tax-compliant invoice. Approvals where an amount exceeds a limit. When the location quota is above one, an order taken at one site can be fulfilled at another.                                                               |
| Accounting    | Three-way match (purchase → receipt → supplier invoice) before AP is final. Aging on what is owed. Payroll journal. VAT / GST settlement. Profit and loss, balance sheet, cash flow, and site-level profit. Bank reconciliation.                                                                                             |
| Inventory     | Costing method is a real setting (FIFO or weighted average) and it affects margin. Reorder point. Supplier lead time. Barcode / SKU at volume. Lot and expiry where the item needs them. In-transit transfer is an extra document: goods leave one site's books before they arrive. It does not rewrite a same-day transfer. |
| Expense       | Match tolerances. A receipt and a bill that disagree stay in a match state until a person resolves them. Reversal is a new document. Posted stock and posted journals are append-only.                                                                                                                                       |
| Assets        | Capitalize, depreciate, dispose, through the accounting facade.                                                                                                                                                                                                                                                              |

Production orders and a second company stay greyed (§1.2.1). Three-way match is a reconciliation on the three documents, with a status and tolerances. It is a match status plus a reversal, which the ledgers already know how to append. It does not delete a posted receipt.

---

## 5. Package 4 — Enterprise

Merchant, plus **packs**, **integrations**, and the **entity switch**. The three bars are the same ones Merchant already has. Packs and a second company are what this package turns from greyed rows into working screens.

A pack is a shared operating pattern from [`BUSINESSES_SUMMARY.md`](../BUSINESSES_SUMMARY.md), not a private feature for one tenant. Real businesses are hybrids, so a tenant holds a **list** of packs, not one industry. The four-value label `general | restaurant | clinic | retail` is retired (§8).

| Pack (archetype)      | Adds on top of Merchant                                                                                      | Does not replace                                                                                                 |
| --------------------- | ------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| Sell goods            | Pricing, fulfillment, promotions already in sales; pack adds channel vocabulary and BOPIS-style site handoff | The sales order                                                                                                  |
| Make or process       | Production orders, BOM issue, finished-goods receipt                                                         | The stock ledger (inventory remains the only stock writer)                                                       |
| Deliver services      | Job or appointment, labor, consumables, billing                                                              | The invoice                                                                                                      |
| Rent or lease         | Availability, contract, deposit, return condition                                                            | The payment and the asset register                                                                               |
| Book finite resources | Schedule, capacity, hold, reservation                                                                        | The party and the deposit                                                                                        |
| Run projects          | Scope, budget, milestones, job cost                                                                          | The journal                                                                                                      |
| People or cases       | Long-lived record and milestones                                                                             | The party. Clinical, academic, and similar systems stay integrated, not reimplemented, where the summary says so |
| Memberships           | Plans, entitlements, recurring billing                                                                       | Loyalty and the invoice                                                                                          |
| Move goods or people  | Dispatch, proof, settlement                                                                                  | The stock movement and the invoice                                                                               |
| Physical assets       | Inspections and maintenance on the asset register                                                            | Depreciation                                                                                                     |
| Funds and programs    | Restricted funds, grants                                                                                     | The ledger                                                                                                       |
| Content and rights    | Versions, licensing, royalties                                                                               | The party and the invoice                                                                                        |

Packs that are not built yet stay off the plan. Shipping a column "just in case" is out of policy. Restaurant floor tickets (tables, kitchen, bar) stay in the POS floor domain. They are not children of the sales order. A food-service pack turns those stations on. It does not merge them into `sales.sales_orders`.

### 5.1 Entity switch

Enterprise adds the entity switch on top of the same three bars. The extra commercial switch is a second legal company inside the same tenant. It is not a new tenant, and it is not a fourth depth.

- Each legal entity has its own books and its own chart instance. Consolidation is a report: it eliminates intercompany balances when the statement is read. It does not post one entity's transaction into another entity's journal.
- Intercompany trade is a pair of documents (one in each entity), not a write-time merge.
- Stock may sit in a warehouse owned by entity A and stored by entity B. Ownership is a field on the stock position. The movement still goes through the stock ledger.
- Many channels, approval on large deals, and prices in more than one currency belong here, with the packs that need them.
- A user's writes are scoped to the entities they may touch, on top of tenant and role. Tenant isolation stays. Entity segregation is additional.
- Fixed-asset lifecycle, FX revaluation, budgeting, and the audit trail belong to the suite modules. The entity switch is what makes those books belong to a chosen legal body.

Before a second entity is allowed, every existing commercial document and stock row is labeled with the tenant's original entity (`MAIN`). That backfill is cheap while every tenant has one entity. It is the one upgrade step that touches old rows, and it only stamps a default. Amounts, document numbers, and ledger history stay as posted.

### 5.2 Integrations

An integration is a connector on a pack or on the platform: payments, SMS, a marketplace, a bank feed, e-invoice network. Connectors are entitled per tenant by the operator. They call the same facades. They do not open a second ledger.

---

## 6. Package 5 — Premium

Premium is a contract on one tenant, not a module and not a depth.

The operator pins exceptions that the published packages do not include:

- A module flag or a quota that differs from the plan (`module_overrides`, `quota_overrides`). The pin survives a later plan change.
- A pack list that is a hybrid the catalog does not sell as a single SKU.
- A workflow limit, an approval threshold, or a document layout agreed for that account.
- A connector that is not in the shared catalog yet, still posting through a facade.

Premium does not fork the codebase, does not create a database, and does not invent a fourth depth. When the same exception is wanted by a second tenant, it graduates into a pack or a plan, and the override can be removed.

Individual business wishes that are not shared and not contracted stay out of the product. Enterprise packs cover the common case. Premium covers the named account. Neither is a promise to build every row of [`BUSINESSES_SUMMARY.md`](../BUSINESSES_SUMMARY.md).

---

## 7. Depth, applied to the three engines

The engines are sales & order, inventory, and accounting. On Entrepreneur, only the column for the module they bought is active; the other columns are the greyed teasers in §1.2.1. The cells below are what each depth reveals inside a module that is on. A Minimalist sale on SME is still the full document chain, completed in one call. Advanced and Expert reveal the earlier states of that same chain.

|                | Sales & order                                                                                                    | Accounting                                                                                                 | Inventory                                                                                                                                                     |
| -------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Minimalist** | One till, walk-up, completed in one motion. One location.                                                        | Money in / Money out / transfer. Templates pick the accounts.                                              | Quantity moves on sale or receipt. One location.                                                                                                              |
| **Advanced**   | A sale can stay unpaid. Party balance.                                                                           | Who owes me / who I owe, as a running balance. Chart, journals, periods. Till close batches money-in.      | Suppliers, a purchase received later, as many locations as the quota. Transfer leaves and arrives together.                                                   |
| **Expert**     | Quote → reserved → fulfilled → invoiced. Promotions, tax invoice. Fulfill at another site when the quota allows. | Aging, tax settlement, formal statements, bank reconciliation. Three-way match when purchasing is also on. | Costing method affects the next receipt. Reorder, lead time, lots. In-transit is an extra document beside the same-day transfer, when the quota is above one. |

A second legal entity, consolidation, intercompany stock, and multi-currency pricing are the Enterprise entity switch (§5.1). They are a plan setting. On every smaller package they are the greyed row "a second company."

In-transit transfer and intercompany stock are new documents. They do not replace the same-day transfer. Historical same-day transfers stay valid.

---

## 8. Words the product uses

### 8.1 Package replaces the old presets

These labels are retired as product names: `loyalty_only`, `sales_pos`, `erp_launch`, `full_erp`. They bundled flags and were rewritten whenever a flag changed, so the name could not stay attached to what the customer bought.

| Retired label  | Target package | Flags to preserve                                                                                                                             |
| -------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `loyalty_only` | Entrepreneur   | Points on. Sales, inventory, accounting off.                                                                                                  |
| `sales_pos`    | Entrepreneur   | Sales on, accounting off. Treat as a till without books until they upgrade. New Entrepreneur POS does not turn sales on.                      |
| `erp_launch`   | SME            | Sales, inventory, accounting on. Expense and assets stay on as add-on overrides (they were inside that preset). Finance, payroll, points off. |
| `full_erp`     | Merchant       | Suite flags on. Production stays whatever it already was.                                                                                     |

After the cutover, a flag edit does not rename `package`. The operator changes that field explicitly. Depth is not stored. Every tenant unfolds the same three bars; which rows are active follows the flags.

The capability row that stores currency, tax, tenders, valuation methods, and `multi_entity_allowed` keeps its current table name (`tenant.erp_launch_profile`) until a dedicated rename. In the product UI it is the tenant capability profile, not a launch mode.

### 8.2 Party label replaces business type

`business_type` with only `general`, `restaurant`, `clinic`, and `retail` is retired. It was a POS wording switch (clinic → "Patient"), not a catalog of trades.

Replace it with `party_label`, used for words on the till and on documents:

| Retired `business_type`           | `party_label` |
| --------------------------------- | ------------- |
| `clinic`                          | `patient`     |
| `general`, `restaurant`, `retail` | `customer`    |

Further labels (`student`, `member`, `guest`, `donor`) are words. They are not packs. Packs are the Enterprise list in §5.

`ui_profile` (`standard`, `minimal`, `bar_only`) is a chrome preset. It is not a package and not a business type. Leave it until chrome presets are redesigned on purpose.

---

## 9. Who controls what

Platform operators sell modules, quotas, packs, and the entity switch. Tenant staff work inside that, and they unfold the screen themselves.

| Knob                                                         | Who may change it                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Where it lives                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| Package, suite modules, pack list, quotas, entity switch     | `superadmin`, `platform_ops`, `platform_billing`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Plan, copied onto the tenant when the plan is assigned                 |
| One-off pin (Premium)                                        | **As built (Phase 1/0310 + Phase 8):** `module_overrides` (module pins) and `tenant.profiles.quota_overrides` (quota pins) are platform-writable through the superadmin tenant PATCH; `module_overrides_replace` / `quota_overrides` replace the maps wholesale (send `{}` to leave Premium and let the next plan projection apply plan values). Pins survive plan assign/reproject; every write lands in `audit.audit_log` (object `tenant_settings`, metadata carries the applied overrides). Superadmin tenant editor shows the pins with a Clear action. |
| Integrations entitled for the tenant                         | Platform roles                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Plan or tenant connector list                                          |
| Unfold Advanced or Expert on a page or modal                 | The tenant user                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | A collapsible bar. Remembered on the device. Does not change the plan. |
| Day-to-day work (a sale, a receipt, a money tile, a pay run) | Tenant owner and staff, through role templates                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Existing module APIs                                                   |
| Turning on a module they did not buy, or adding an entity    | Nobody in the tenant                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | The Expert row stays greyed. The API rejects the call.                 |

Assigning a plan sets the module bundle in one step. Pins recorded as overrides survive that assignment. The platform-defaults bulk apply remains the only "reset every tenant" action, and it stays deliberate.

Tenant settings may store preferences (which cash account a tile uses, a note label, a costing method on an item). They may not turn on a module, raise a quota, or create a second entity.

### 9.1 Two gates after authentication

A staff request is authenticated first. The token yields a person and a tenant. After that, every staff read and every staff write is allowed or refused by two layers. Both must pass. Customer routes that never authenticate (guest checkout, the public menu) do not pass through either layer.

```text
authenticate  →  Casbin (role × route)  →  entitlement snapshot (what this tenant bought)
```

Casbin answers "may this role perform this act on this route?" The snapshot answers "did this tenant buy that module?" A cashier with the right role still cannot post a journal when accounting is off. A tenant with accounting on can post a tax settlement from the Expert bar; the depth is not what allows it.

#### Layer 1 — Casbin

Casbin stays as it is. This document does not add objects, acts, or policies to it.

- One enforcer, held in memory. A request does not query `casbin_rule`.
- The match is exact: `manage` does not imply `read` or `create`.
- The catalog stays role, tenant, object, and act for the route.
- Package, module flags, the entity switch, and quotas are not Casbin objects. Depth is not a Casbin object either. It is not stored.

Policy reload stays on its current notify path. The entitlement snapshot has its own refresh, described below.

#### Layer 2 — Entitlement snapshot

One record per tenant. The process loads it once for the request, from memory. Module, entity, and quota checks all read that record. They do not each select `tenant.tenant_modules`.

The record stores **limits and switches**. It does not store how many seats or locations are already used. It does not store a depth.

**Identity of the row**

| Field         | Meaning                                                                   |
| ------------- | ------------------------------------------------------------------------- |
| `tenant_id`   | The tenant the request is acting in                                       |
| `package`     | `entrepreneur`, `sme`, `merchant`, or `enterprise`                        |
| `party_label` | Word for the counterparty (`customer`, `patient`, …). A label, not a gate |

Premium is not a fifth package on this row. Premium is a set of pins merged into the fields below before the snapshot is stored. The gate reads the merged values.

**Modules (effective, after the plan and any Premium pin)**

| Field               | Module                                                                      |
| ------------------- | --------------------------------------------------------------------------- |
| `module_points`     | Loyalty                                                                     |
| `module_inventory`  | Inventory, including procurement                                            |
| `module_sales`      | Sales orders. Off for an Entrepreneur POS-only tenant. One-way once enabled |
| `module_accounting` | Journals                                                                    |
| `module_finance`    | Finance workspace beyond the core journals                                  |
| `module_expense`    | Expense                                                                     |
| `module_payroll`    | HR, which today is payroll                                                  |
| `module_assets`     | Fixed assets                                                                |
| `module_production` | Production. Off on Merchant. On only as an Enterprise pack or a Premium pin |

A missing row, or a module flag that is absent, means that module is **off**. The request is refused.

**Entity**

| Field                | Meaning                                                                                                                                                                                          |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `entity_switch`      | Whether a second legal company may exist. Off except on Enterprise (or a Premium pin). Today's column is `multi_entity_allowed`                                                                  |
| `allowed_entity_ids` | Empty means the request may use every entity the switch allows. When a person is later limited to some companies, those ids are filled on this same record. Casbin is not given an entity object |

**Quotas (the purchased limit)**

| Field            | Meaning                                                                                                                       |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `seats`          | Staff seats the plan allows                                                                                                   |
| `locations`      | Sites the plan allows. A count, not a depth                                                                                   |
| `docs_per_month` | Optional document cap. Empty means no cap                                                                                     |
| `storage_bytes`  | Optional file cap. Empty means no cap                                                                                         |
| `items`          | Optional catalog cap. Empty means no cap                                                                                      |
| `templates`      | Optional item-template cap. Empty means no cap                                                                                |
| `loyalty`        | Capabilities plus `max_programs`, `max_tiers`, `max_active_rules`, `max_members`. An empty member cap means unlimited members |

`quota_overrides` are already applied into these numbers when the snapshot is built. A gate does not re-read the override JSON.

**Packs**

| Field   | Meaning                                                                                            |
| ------- | -------------------------------------------------------------------------------------------------- |
| `packs` | Enterprise archetype list (sell, make, serve, and the rest in §5). Empty until that list is stored |

**What each request consults**

The snapshot is one load. A given request reads only the fields it needs.

| Request                                                                                                           | Fields read                                                                                                      |
| ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Any staff call into a module                                                                                      | That module's flag. A call into a module that is off is refused. The greyed row in Expert never makes this call. |
| Create a second legal entity                                                                                      | `entity_switch`                                                                                                  |
| Write that names an entity, once scope exists                                                                     | `entity_switch` and `allowed_entity_ids`                                                                         |
| Create a location, a seat, an item, a template, a loyalty program, or a document that counts toward a monthly cap | The matching limit                                                                                               |

Opening or closing Advanced or Expert is not a server check. A tax invoice, a lot, a formal statement, or a costing method is allowed when the module that owns it is on. The bar they used to find the button is not compared.

**Live counts stay a query**

The snapshot holds the limit. The number already used is counted at the moment of the create: locations that exist, seats assigned, items in the catalog, and the same for the other caps. That is one query on the write that consumes the quota. The used count is not cached, so a stale snapshot cannot admit an extra site.

**Where the snapshot lives**

- In the application process, for a few seconds, in the same kind of cache as the principal (who the caller is).
- Built by one SQL read: plan modules, quotas, entity switch, loyalty caps, and Premium overrides, already merged.
- Replaced immediately when an operator assigns a plan, patches modules, or changes an override, and on the database notify for those rows. The few-second lifetime covers a missed notify. It is not the only refresh.
- While the platform runs as one process, the store is that process memory. When more than one backend process is running, the same record is filled from Redis. The gates keep reading one snapshot type. Phase 1 does not run Redis.

**What these two layers do not decide**

A closed accounting period, insufficient stock, a missing account, or a failed posting is a business rule. It runs after both gates have allowed the request. Depth is not one of these rules, and it is not a third authorization layer.

---

## 10. Upgrade

An upgrade is a plan change on the same tenant, in the same database, in the same application. History stays posted. New capability appears as screens, policies, and modules. The owner does not export, re-import, or close the books in order to move.

```text
Entrepreneur  →  SME  →  Merchant  →  Enterprise  →  Premium
     one module      trio      suite on      packs + entities    pins
```

A tenant may skip a commercial step only by buying the higher plan directly (Entrepreneur accounting straight to Merchant). The data rule is the same: turn on what was missing, stamp defaults where a new dimension must exist, leave posted amounts alone.

### 10.1 What makes the climb cheap

These are already true, and upgrades rely on them:

- One deployment and one Postgres schema for every tenant. Empty modules cost no extra server. Jobs for a module that is off select no tenants.
- Sales, once the tenant is on SME, is one document chain. Minimalist POS is that chain completed in one call. Advanced and Expert reveal earlier states of the same chain.
- Stock is an append-only ledger. Accounting is an append-only journal. An upgrade never rewrites a posted line. A correction is a reversal.
- Cross-module writes go through facades. Turning a module on starts calling the facade. Turning it off stops calling it. The other module's past rows stay.
- Every tenant already receives one legal entity (`MAIN`) and one set of books at creation. Those rows wait, unused, when the tenant bought only POS or only loyalty. Adding Accounting later posts into books that already exist.
- Parties and items are shared ids. A loyalty member, a POS customer, and an accounts-receivable party can be the same party when a later package needs them to be. Standalone rows do not invent a second identity.

### 10.2 Entrepreneur → SME

**Operator.** Assign the SME plan and set the location quota. The plan turns accounting, inventory, and sales on. Add-ons stay off unless the plan or a pin includes them.

**What the business sees.** The till remains and still opens as one motion. Stock and money leave the greyed rows and become real navigation. Quote, tax invoice, match, and formal statements are already on the Expert bar and become active because those modules are now on. Finance, expense, assets, loyalty, and HR stay greyed.

**What happens to old data.**

| They had        | On upgrade                                                                                                                                                                                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Accounting only | Journals stay. Sales and stock start empty. Next sales post into the same books.                                                                                                                                         |
| Inventory only  | Items, quantities, and receipts stay. New sales consume those items. Past receipts gain a journal only if a person posts an opening balance. They are not rewritten.                                                     |
| POS only        | Old tickets stay tickets. New sales, from the moment sales is enabled, are sales orders completed through the till. Stock decrement and journals start with those new sales. Old tickets are not backfilled into orders. |
| HR only         | Pay history stays a register. Later pay runs journal when accounting is now on.                                                                                                                                          |
| Loyalty only    | Members and points stay. Sales earn turns on for new sales. Past grants are not replayed into invoices.                                                                                                                  |

**Overhead the owner does not take on.** No new database. No renumbering. No "close and reopen". No duplicate item master. The till still opens as one motion. Credit and the chart are the Advanced bar.

Enabling sales is one-way. That matches this upgrade: SME always includes sales, and the till from then on voids through the sales path.

### 10.3 SME → Merchant

**Operator.** Assign the Merchant plan. Finance, expense, fixed assets, loyalty, and HR turn on. Location quota may rise with it.

**What the business sees.** The same screens still open on Minimalist. The greyed rows for expenses, assets, loyalty, and payroll become active sections. Quotes, tax invoices, match, and formal statements were already available from SME. The till, the items, and the journals they already have stay where they are.

**What happens to old data.** Orders, shipments, invoices, stock movements, and journals stay posted. Expert features apply to new documents. An old paid sale is not reopened so it can grow a quote. Optional one-time choices, made in the product UI, not by a migration project: turn on a costing method for **future** receipts (the method already stored per item remains for items that already have layers), and map payroll or asset accounts if those templates are not filled. Unmapped accounts block only the new module's post, with the existing fail-closed setup banner.

**Overhead.** No restatement of last year's sales. If the location quota rises, past rows keep the site they already use. New rows can name another site.

### 10.4 Merchant → Enterprise

**Operator.** Assign the Enterprise plan. Attach the pack list (sell, make, serve, and so on). Turn on the entity switch only when they need a second legal company.

**Before the entity switch is turned on.** Stamp `MAIN` on every commercial document and stock row that does not yet name an entity. This is a default fill, run once by the platform, not a project the customer staffs. Posted amounts, dates, and document numbers stay. Only then may the operator create a second entity.

**What the business sees.** Pack screens (a job board, a reservation book, a production order) replace the greyed production row, and, with the entity switch, the greyed "second company" row becomes an entity switcher. Group statements appear as reports. Day-to-day entry stays inside one entity's books. The three bars stay where they were.

**What happens to old data.** The original business is entity `MAIN`. Nothing is split retrospectively. Intercompany activity starts with new documents after the second entity exists. Consolidation reads both books. It does not merge them.

**Overhead.** One stamped column, run by the operator, before the second entity. No chart rebuild. No stock recount required by the upgrade itself.

### 10.5 Enterprise → Premium

**Operator.** Leave the Enterprise plan in place. Record the contracted pins (module, quota, threshold, connector) on that tenant. Audit the change.

**What the business sees.** The extra field, limit, or connector they contracted. Everyone else's tenants are unchanged.

**What happens to old data.** Nothing is rewritten. The pin changes what new transactions are allowed to do.

**Leaving Premium.** Remove the pin. If the behavior is now a pack, assign that pack instead. History posted under the pin stays valid.

### 10.6 What an upgrade never does

- A second database, a second application, or a per-tenant code branch.
- A rewrite of a posted journal, a stock ledger line, or a document number.
- A new sales aggregate beside the one the till already uses, once the tenant is on SME.
- A forced close, a year-end, or a re-implementation of open balances.
- A requirement that the owner configure a chart of accounts before Minimalist depth will take a sale or a money tile. Setup that is still unfinished blocks only the posts that need those accounts, and the banner already routes them to setup.

---

## 11. Cost shape

Feature checkboxes do not add servers. The bill follows tenants, transaction volume, and how long ledger rows are kept.

- One application process and one Postgres hold every package. Supabase remains the auth plane.
- A module that is off performs no writes and its background job selects no tenants. Its Expert teaser is a few disabled rows. Disk grows where the core actually posts (stock and journals), including a Minimalist sale once the tenant is on SME.
- Quotas (seats, locations, documents per month) are the commercial brake on a large tenant sharing the database. Enforce them on the write path for any plan whose volume can dominate the disk.
- The browser loads a module's screens when the user opens them. A module the plan does not include is rejected on the server and shown only as the greyed rows in §1.2.1. The till does not download consolidation.

Raise the database and the application when connections, disk, or reports require it. Do not raise them because a plan gained a flag.

---

## 12. As built today, and what still has to match this document

The engines this model sits on are largely shipped: sales orders and POS fast-forward, stock ledger and costing, journals, plans, module flags, and platform assignment. The **names and the independence rules** are not fully shipped. Until they are, operators must not treat today's presets as the catalog in §1.

| This document                                                                    | In the product today                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `package`, operator-set, stable when flags change                                | **As built (0310):** `tenant.tenant_modules.package` in `entrepreneur \| sme \| merchant \| enterprise`, backfilled from the retired labels per §8.1; the 0287/0300 derive trigger is dropped and flag edits never rename it. Applying a package bundle is an explicit superadmin action. Depth is not a column.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Entrepreneur modules run alone                                                   | **As built (Phase 3):** the §2.1 independence contract holds for all five standalones — accounting-only books (chart/money in-out-transfer/journals/periods/trial balance), inventory-only stock (write-off, gain and GRNI GL posts skip via gated facades), POS-only settle (no journal outbox row, no quantity-decrement row, `module_sales` never auto-flips), HR-only pay register (journal link stays `null`), loyalty Mode C unchanged. Verified by `standalone_independence_integration_tests` + the fail-closed module-gate lint.                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Procurement is part of Inventory                                                 | No separate procurement flag. Routes follow inventory.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| HR is payroll                                                                    | Payroll module. No broader HR product.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Expense and assets are SME add-ons or Merchant suite                             | **As built (0312):** the `sme` plan projects the required trio (sales + inventory + accounting) with expense, assets, finance, loyalty, payroll, and production off; `merchant` / `enterprise` project the suite on one assignment (production stays off); the Entrepreneur SKUs (`entrepreneur-accounting` / `-inventory` / `-pos` / `-hr` / `-loyalty`) project exactly one standalone flag (POS keeps `module_sales` off). The retired `erp_launch` preset no longer bundles expense/assets into a plan assignment.                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `party_label`                                                                    | **As built (0311):** `tenant.erp_launch_profile.party_label` in `customer \| patient \| student \| member \| guest \| donor`, backfilled clinic→patient, others→customer; the retired column + CHECK are dropped and only POS wording reads it.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Modules, quotas, and the entity switch owned by platform roles                   | Tenant `admin` may update the capability profile, including tax and business type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Three bars on every package; unpurchased modules are greyed Expert rows (§1.2.1) | **As built (Phase 10):** catalog `DepthBar` + `ModuleTeaserRow`, composed by `DepthUnfold` on the module landings. Money (Pilot A), POS till (Pilot B), sales order modal, item master (costing/sites under Advanced; reorder/lots under Expert) plus the items list, HR people, loyalty overview, expense landing, and the asset register. Greyed Expert rows paint from ui-context module flags (and "a second company" when `entity_switch` is off). Depth is not stored.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Integrations (§5.2)                                                              | **As built (0314):** `platform.connector_catalog` + `tenant.tenant_connectors` (status `entitled\|disabled`, config jsonb) with platform-only CRUD/entitle/revoke routes. Entitlement metadata only — a connector calls the existing facades; no second ledger.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Intercompany trade (§5.1)                                                        | **As built (0314):** `sales.sales_orders.intercompany_order_id` links the pair (one document per entity, same tenant, different entities — validated at create); no write-time merge. `GET /api/accounting/reports/consolidation` reads per-entity journal totals + the intercompany elimination bucket (obj `accounting/consolidation`, read).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Entity switch off until Enterprise                                               | **As built (0311 ownership split + 0314 stamp):** `multi_entity_allowed` defaults off and is platform-only; `PUT /api/tenants/:id/entity-switch` is the write path. The canonical registry is `core.legal_entity` (MAIN per tenant, 0119); `POST/GET /api/tenants/:id/legal-entities` create/list entities, fail-closed on the switch and on the MAIN stamp precondition. `sales.sales_orders` + `sales.payments` + `inventory.stock_ledger` carry `legal_entity_id` (mutable rows backfilled to MAIN; the append-only ledger default-fills on insert and old NULLs mean MAIN); `inventory.item_valuation_state.owner_legal_entity_id` carries stock ownership. Journals already map book→entity (`accounting.journal_entry.book_id` + `legal_entity_id`). Entity scope: `tenant.tenant_modules.allowed_entity_ids` (empty = all) is validated on order writes.                                                                                                          |
| Fulfillment site on the order                                                    | **As built (0313):** `sales.sales_orders.fulfillment_location_id` (nullable FK; `NULL` = the tenant default leaf). The site is validated at write — active leaf of the tenant, and a non-default site fails closed when the effective location quota is 1. Confirm reserves there, the shipment issues there, and the order modal offers the picker only when the quota is above one. Location count stays a quota, not a depth.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| In-transit and intercompany                                                      | **As built (0313, in-transit):** the `inventory.in_transit_transfers` document posts the out-leg at the origin on dispatch (cost layers drained, unit cost captured) and the in-leg at the destination on arrival receipt (layers re-opened at the captured cost); append-only, gated on the location quota above one, and it never rewrites a same-day `transfer`. Intercompany orders are still not shipped.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Enterprise pack list                                                             | **As built (0314):** `tenant.tenant_modules.packs` (archetype slugs from §5), projected from `platform.plans.limits.packs` when empty and pinned by an operator write (survives reprojection); superadmin PATCH accepts it. Packs that are not built stay off the plan. `BUSINESSES_SUMMARY.md` stays the industry map, not an entitlement.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Production                                                                       | Built, separately flagged, outside Merchant                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Two staff gates: Casbin, then one entitlement snapshot (§9.1)                    | **As built (Phase 9):** Casbin is untouched. The entitlement snapshot is the process-wide `TenantDataCache` (moka, 60s TTL, keyed by runtime id so tests stay isolated) built by one SQL read merging plan modules + `module_overrides`, `package`, `party_label`, `multi_entity_allowed` → `entity_switch`, `allowed_entity_ids`, effective quota limits (`quota_overrides` applied), loyalty caps, and `packs`. Every per-request module gate (8 `pg_module_gate.rs` adapters, the POS settle/void hoist, the customer POS dispatch, the ERP onboarding checklist) reads it and fails closed on an absent row; cross-site, entity-switch, entity-scope, and pack reads come from the same snapshot. Operator writes invalidate it synchronously (`invalidate_tenant_resolution_caches`) with the TTL as the safety net. Quota creates still count live rows (`seats`/`locations`/`items`). Depth is not checked. Redis waits until more than one backend process runs. |

Build order when implementing this document:

1. Add `package`. Backfill from §8.1. Stop re-deriving a product name from flags. Point Superadmin at the new field. Do not add a depth column. _(done — migration 0310, `package` column + superadmin editor; bundle apply is explicit)_
2. Replace `business_type` with `party_label` (§8.2). Module flags, quotas, and the entity switch stay with platform roles. A costing method and a tax setup on a module they own stay with the tenant. _(done — migration 0311 + ownership split; superadmin editors shipped)_
3. Entrepreneur independence (§2.1), in this order: accounting-only, inventory-only (GL skipped when accounting is off), POS-only without enabling sales, HR register without a journal, loyalty already done. Each of those modules includes its Expert rows in §2.2. _(done — facade-level skips for inventory/procurement/payroll GL + settle/void outbox gates; four standalone suites green)_
4. SME plan: the trio on, expense and assets off unless added. Pages open on Minimalist. Advanced and Expert are the same page. Quote, tax invoice, match, and statements are active. Location quota stays a number on the plan. _(plan shape done — 0312 catalog seeds (`sme` + the Entrepreneur SKUs + merchant/enterprise) with projection tests; the bars land in step 9 / Phase 10)_
5. Expert rows that already exist (tax, statutory books, credit, match, valuation) stay features of the module that owns them. In-transit and cross-site fulfillment sit on Inventory and Sales, and only when the location quota is above one. _(done — migration 0313: `fulfillment_location_id` on the order + the in-transit dispatch/arrival document; quota > 1 enforced live and fail closed)_
6. Merchant plan: suite flags on. The greyed suite rows become active. Production stays out. _(done — the `merchant` plan seed (0312) projects finance + expense + assets + loyalty + payroll with the required trio; `merchant_plan_projects_suite_flags` pins the shape. The suite Expert rows are module-owned and gated by their own flag, fail closed: three-way match + aging + settlement in Accounting, expense match tolerances/reversal, depreciation through the accounting facade, payroll journal, loyalty earn on the sale.)_
7. Enterprise: pack list, then the `MAIN` stamp, then the entity switch. Integrations as connectors. The user still unfolds from a Minimalist screen. "A second company" stops being greyed when the switch is on. _(done — migration 0314: packs + entity scope on `tenant_modules`; MAIN stamps on orders/payments/ledger/stock positions; entity create gated on the switch; intercompany pair + read-only consolidation; connector catalog + entitlements. Depth bars land in Phase 10.)_
8. Premium: overrides only, which already survive a plan change. _(done — full-replace pin write paths + audit metadata + superadmin pins panel with Clear; `premium_pins_survive_and_can_be_cleared` proves pin → reproject → clear → reproject.)_
9. Entitlement snapshot (§9.1). One in-process record per tenant: effective modules, `package`, `entity_switch`, quota limits, loyalty caps, and packs. Module gates read it. A quota create still counts live rows. The screen paints greyed Expert rows from the same flags. Casbin is not edited. Redis waits until more than one backend process is running. _(done — snapshot in `TenantDataCache` + `TenantAggregate::module_enabled`/`cross_site_allowed`/`packs_contains`; gates converted; `/api/me/ui-context` exposes `entitlements`; `entitlement_snapshot_integration_tests` covers flip/invalidate/off-module refusal/race; migration 0315 fixes the 0314 stock-position stamp trigger.)_

Each step is a plan and a policy on the current engines. None of them replaces the sales order, the stock ledger, or the journal.
