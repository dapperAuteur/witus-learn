import type { AuthoredCourse } from "./authored-course";

// "Equipment Tracking on Work.WitUS" (WORK-04, the "Work.WitUS guides" series, `work-witus-guides`). Slug `work-witus-equipment`.
//
// SOURCE. Converted from the Work.WitUS tutorial markdown in contractor-os `content/tutorials/equipment/`
// (gitignored there; backup ~/Downloads/workwitus-tutorials-2026-10-31.tar.gz), read 2026-11-01. Each
// lesson keeps its narrator script and key takeaways. The screen-recording notes, audio-chapter JSON and
// teacher setup checklist were production notes, not learner text, and were left out. Edits to the text:
// em dashes replaced; routes checked against contractor-os main (f8a2bfa8, 2026-11-01) and kept only
// where the route exists; references to screens Work.WitUS no longer has removed (Travel moved to
// RideWitUS, the Academy moved to Learn.WitUS, and the CentenarianOS modules this text was first written
// for were never part of Work.WitUS). The source names no screenshots that exist, so no lesson shows one.
//
// BRIEF. None was written: BAM's decisions in contractor-os plans/user-tasks/25 (2026-11-01) stand in for
// it. Every guide, one course per guide, published as one series, public, BAM as instructor, and the
// travel guide left out (it goes to RideWitUS's curriculum). RESEARCH TIER 1: product documentation,
// ours. Nothing outside Work.WitUS is cited, so there is no ## Sources list and no citation staging.
//
// NO QUIZZES YET. The source had none, and BAM asked for the guides as written. A quiz pass, sized like
// the Using Learn.WitUS exception in scripts/audit-course.ts, is a follow-up, not part of the move.
//
// COURSE-SPECIFIC EDITS. Lesson 6 (activity links) was rebuilt around what main supports: equipment
// links to transactions, and invoices link to both (components/ui/ActivityLinker.tsx, LINKABLE_TYPES).
// The trip, workout, recipe, task and maintenance links the source taught left with CentenarianOS and
// Travel. The default category list was checked against app/api/equipment/categories/route.ts and is
// unchanged. Column and table names (transaction_id, sort_order, equipment_valuations) became plain
// words; the summary API path and its sample JSON stay, because lesson 7 reads its fields.
export const WORK_WITUS_EQUIPMENT_COURSE: AuthoredCourse = {
  title: "Equipment Tracking on Work.WitUS",
  description:
    "Learn how to catalog your gear in Work.WitUS: set up categories, add items with their purchase details, link each item to the transaction that paid for it, record what it is worth over time, connect it to the income it earns, and read the Equipment Summary for depreciation and ROI.",
  lessons: [
    {
      slug: "welcome-to-equipment",
      title: "Welcome to Equipment Tracking",
      section: "Section 1 · Getting Started",
      body: `Welcome to Equipment Tracking on Work.WitUS, a free course about the Equipment module in Work.WitUS (work.witus.online).

The Equipment module is where you catalog everything you own that matters: cameras, laptops, fitness gear, tools, instruments, anything. Instead of keeping a mental inventory or a messy spreadsheet, Equipment Tracking gives you a structured home for every item: what you paid, what it's worth now, and how it connects to the rest of your data.

Let's take a quick tour of the hub so you know where everything lives.

## Where to Find It

From your dashboard, click **Equipment** in the menu (under **Life** in the main sidebar, or **Money** in the contractor menu). This takes you to \`/dashboard/equipment\`: the Equipment hub.

## The Hub Layout

The hub has two main sections:

**Summary cards**: across the top of the page. Four cards show:
- **Total Items**: how many active (non-retired) items you're tracking
- **Total Value**: the combined current value of all active items
- **Depreciation**: the difference between what you paid and what everything is worth now
- **Categories**: how many categories you're using

**Category filter**: a row of pills below the summary. Click **All** to see everything, or click a specific category to narrow the grid.

**Equipment grid**: the main content area. Each item appears as a card showing:
- Item photo (or a placeholder Package icon)
- Name, brand, and model
- Purchase price and current value
- A percentage showing value change (green if appreciated, red if depreciated)
- Condition badge (New, Excellent, Good, Fair, Poor)
- A "Retired" badge if the item is no longer active

## Three Key Pages

The Equipment module has three pages:

**Hub** (\`/dashboard/equipment\`): the overview you're looking at now. Browse your inventory, filter by category, and see summary stats.

**Manage** (\`/dashboard/equipment/manage\`): where you add, edit, retire, and delete items. This is also where you manage your categories.

**Detail** (\`/dashboard/equipment/[id]\`): click any item card on the hub to open its detail page. This shows the full item record, value history chart, and activity links.

## What Makes It Useful

Equipment Tracking isn't just a list. It connects to the rest of Work.WitUS:

- **Financial link**: tie an item to the financial transaction where you bought it, so you can trace the purchase back to your spending data
- **Activity links**: connect an item to the transactions that relate to it, such as the pay from a gig it worked. Lesson 6 covers them.
- **Value history**: add valuations over time to watch appreciation or depreciation. The detail page charts this visually.

This course will walk you through every feature. Let's start with the first thing you'll need: categories.

## Key Takeaways

- Equipment Tracking lives at /dashboard/equipment (Equipment in the dashboard menu)
- The hub shows summary cards, category filters, and an item grid
- Three pages: Hub (browse), Manage (CRUD), Detail (deep dive per item)
- Items link to financial transactions, other modules via activity links, and track value over time`,
    },
    {
      slug: "setting-up-categories",
      title: "Setting Up Categories",
      section: "Section 1 · Getting Started",
      body: `Before you start adding equipment, take a moment to set up your categories. Categories are how you organize items by type: computers in one group, cameras in another, fitness gear in a third.

Work.WitUS seeds a set of default categories the first time you open the Equipment module. You can keep them, rename them, delete ones you don't need, and add new ones.

## Default Categories

The first time you access Equipment, these categories are created automatically:

| # | Category |
|---|----------|
| 1 | Computer |
| 2 | Camera |
| 3 | Microphone |
| 4 | Audio |
| 5 | Lighting |
| 6 | Fitness |
| 7 | Swag |
| 8 | Battery |
| 9 | Storage |
| 10 | Accessory |
| 11 | Other |

They are listed in this order, and you can change the order later.

## Managing Categories

Navigate to \`/dashboard/equipment/manage\` and click **Manage Categories**. A modal opens with:

**Add a category**: type a name in the input field and click **Add**. The new category goes to the end of the list.

**Existing categories**: listed below the add form. Each row shows the category name and a delete icon.

**Delete a category**: click the trash icon. This only works if no items are assigned to that category. If items exist, you'll see an error: "Cannot delete: N item(s) use this category. Reassign them first."

## Category Rules

- Names must be unique per user: you can't have two categories both called "Camera"
- Deleting a category fails if any equipment items reference it
- Each category belongs only to your account: other users have their own independent category lists

## Choosing Good Categories

Think about how you'll filter your inventory. Good categories are:
- **Broad enough** to group 3+ items (e.g., "Audio" covers headphones, speakers, mixers)
- **Specific enough** to be meaningful when filtering (e.g., "Camera" is better than "Electronics" if you have 5 cameras and 2 laptops)
- **Action-oriented** if your gear serves a workflow (e.g., "Recording Studio", "Travel Kit", "Home Office")

You can always reassign items to different categories later without losing any data.

## What's Next

With your categories in place, you're ready to add your first item. The next lesson covers the full equipment form: every field, photos, and condition ratings.

After that, you can take the remaining topics in any order: linking transactions, tracking valuations, activity links, or the summary dashboard.

## Key Takeaways

- 11 default categories are seeded on first access (Computer, Camera, Microphone, Audio, etc.)
- Add categories via the Manage Categories modal: name must be unique per user
- Delete only works if no items reference the category: reassign items first
- Categories are per-user: each account has its own list
- Good categories balance breadth (grouping) with specificity (filtering)`,
    },
    {
      slug: "adding-your-first-item",
      title: "Adding Your First Item",
      section: "Section 2 · Managing Equipment",
      body: `This lesson walks you through the equipment form: every field, what it's for, and how to fill it out. By the end, you'll have your first item in the system.

## Opening the Form

Navigate to \`/dashboard/equipment/manage\` and click **Add Item**. A modal opens with the equipment form.

## Required Fields

Only one field is required:

**Name**: what you call this item. Be specific enough to distinguish it from similar items. "Sony A7III" is better than "Camera."

## Optional Fields

**Category**: select from your category list, or leave as "None." You can always reassign later.

**Brand**: the manufacturer (e.g., "Sony", "Apple", "Trek").

**Model**: the specific model (e.g., "A7III", "MacBook Pro 16-inch", "Domane SL5").

**Serial Number**: for warranty claims, insurance, or theft reports.

**Condition**: a dropdown with five options:
- New
- Excellent
- Good
- Fair
- Poor

This is your subjective assessment. Update it later if the item degrades.

**Purchase Date**: when you bought or received the item.

**Purchase Price**: what you paid. This is the item's attributed portion; if you bought a bundle, enter what this specific item is worth, not the bundle total.

**Current Value**: what it's worth now. If you leave this blank on creation, it defaults to the purchase price. Valuations (covered in Lesson 05) will update this automatically.

**Warranty Expires**: the warranty end date, if applicable.

**Photo**: upload an image via the Cloudinary uploader. This appears on the hub card and detail page.

**Notes**: any free-text context you want to attach.

## Linking a Purchase Transaction

At the bottom of the form, there's a **Linked Purchase Transaction** field. This connects the equipment item to an existing transaction in your Finance module.

Type a vendor name or amount in the search field. Results show as: \`Vendor · $Amount · Date\`. Click a result to link it. A green pill appears showing the linked transaction; click the X to unlink.

This link is optional. You can add or change it later from the manage page.

## Saving the Item

Click **Save**. The item is created and appears in your equipment list. If you uploaded a photo, it will appear on the card. If not, you'll see the default Package icon.

## Editing and Retiring

Back on the manage page, each item row has three actions:

**Edit** (pencil icon): reopens the form with current values. Change any field and save.

**Retire** (archive icon): marks the item as inactive. Retired items disappear from the hub grid by default, but you can toggle **Show retired items** on the manage page to see them. Retired items show a "Retired" badge and are grayed out.

**Reactivate** (rotate icon): appears on retired items. Click to bring the item back to active status.

**Delete** (trash icon): permanently removes the item if it has no valuations or activity links. If it does, the delete converts to a soft-delete (retirement) instead.

## Example: Adding a Camera

Here's a complete example:

| Field | Value |
|-------|-------|
| Name | Sony A7III |
| Category | Camera |
| Brand | Sony |
| Model | ILCE-7M3 |
| Serial Number | SN-2024-A7III-001 |
| Condition | Excellent |
| Purchase Date | 2024-06-15 |
| Purchase Price | 1799.00 |
| Current Value | 1450.00 |
| Warranty Expires | 2026-06-15 |
| Notes | Body only, no kit lens |

## Key Takeaways

- Only Name is required: all other fields are optional but recommended
- Purchase Price is the attributed portion: not necessarily the full transaction total
- Current Value defaults to Purchase Price if left blank
- Link a purchase transaction to trace spending back to your Finance module
- Retire items to hide them from the hub without deleting data
- Hard delete only works if no valuations or activity links exist`,
    },
    {
      slug: "linking-transactions",
      title: "Linking Purchase Transactions",
      section: "Section 2 · Managing Equipment",
      body: `One of Equipment Tracking's strongest features is its connection to the Finance module. When you link an equipment item to the transaction where you bought it, you create a traceable line from "I spent money" to "I own this thing."

This lesson covers how the link works, when to use it, and how to handle common scenarios like bundle purchases.

## How the Link Works

Every equipment item has an optional purchase-transaction link: a direct reference to one transaction in your Finance records. It doesn't move money, create a new transaction, or change any financial data. It's a pointer: a way to say "this item came from that purchase."

## Linking During Creation

When you add a new item (Lesson 03 covered the form), the **Linked Purchase Transaction** field at the bottom of the form lets you search your existing transactions.

Type a keyword: the vendor name, an amount, or a date fragment. Results appear as:

\`\`\`
Vendor · $Amount · Date
\`\`\`

Click a result. A green pill appears confirming the link. Click the X on the pill to remove it before saving.

## Linking After Creation

If you skip the link during creation, you can add it later:

1. Go to \`/dashboard/equipment/manage\`
2. Click the edit icon on the item
3. Scroll to **Linked Purchase Transaction**
4. Search and select the transaction
5. Save

You can also change or remove a link the same way.

## One Item, One Transaction

Each equipment item links to at most one transaction. But multiple items can link to the same transaction. This is intentional for bundle purchases.

**Example:** You buy a camera kit for $2,500 that includes a body ($1,800), a lens ($500), and a bag ($200). In Finance, you have one transaction for $2,500 at B&H Photo. In Equipment, you create three items (each with its own purchase price reflecting its attributed share) and all three link to the same $2,500 transaction.

The purchase price on the equipment item is independent of the transaction total. It represents what that specific item is worth to you within the purchase.

## Why Link at All?

Linking serves three purposes:

**Audit trail**: when you look at a large expense in Finance, you can trace it to the specific items you received.

**ROI calculation**: the Equipment Summary dashboard calculates return on investment by comparing purchase costs to revenue earned from items (via activity links to income transactions). The purchase transaction link helps verify the cost side.

**Depreciation context**: seeing the original purchase alongside current value and valuation history gives you the full financial lifecycle of an item.

## What If the Transaction Doesn't Exist Yet?

If you haven't logged the purchase in Finance yet, skip the link during equipment creation. Go to \`/dashboard/finance\`, log the transaction, then come back and edit the equipment item to add the link.

The link is always optional. Equipment tracking works fine without it; you just lose the Finance cross-reference.

## Key Takeaways

- Each equipment item can link to one financial transaction via the edit form
- Multiple items can link to the same transaction (bundle purchases)
- Purchase Price on equipment is the attributed portion: independent of the transaction total
- The link is optional: skip it if the transaction isn't logged yet, add it later
- Links enable audit trails, ROI calculations, and depreciation context in the summary`,
    },
    {
      slug: "tracking-valuations",
      title: "Tracking Value Over Time",
      section: "Section 3 · Valuations",
      body: `Most things lose value after you buy them. Some gain value. The Valuations feature lets you record what an item is worth at any point in time, building a visual history of appreciation or depreciation.

## What Is a Valuation?

A valuation is a timestamped snapshot of an item's value. Each valuation has:

- **Date**: when you assessed the value
- **Value**: the dollar amount
- **Source**: how you determined the value: Manual, eBay (comparable listings), or Other
- **Notes**: optional context (e.g., "eBay sold listings average", "insurance appraisal")

## Adding a Valuation

1. Navigate to an item's detail page at \`/dashboard/equipment/[id]\`
2. Scroll to the **Value History** section
3. Click **+ Add Valuation**
4. Fill in the inline form: date, value, and optional notes
5. Click **Save**

When you save a valuation, two things happen:
- The valuation is saved to the item's value history
- The item's current value is automatically updated to match the new valuation

This means the most recent valuation always determines the current value shown on the hub and summary.

## The Value Chart

Below the add form, the detail page shows a line chart. The chart plots:

- **Purchase price** as the first data point (at the purchase date)
- **Each valuation** as a subsequent point (at the valuation date)

The line connects these points chronologically, giving you a visual trend. A rising line means the item is appreciating. A falling line means it's depreciating.

The chart uses a teal line with a grid background, dollar-formatted Y axis, and tooltips on hover showing the exact value and date.

## The Valuations Table

Below the chart, a table lists every valuation in reverse chronological order (newest first). Each row shows:

- Date
- Value
- Notes (if any)

This gives you a scannable history of every assessment.

## Depreciation Math

The Equipment Summary (Lesson 07) calculates depreciation as:

\`\`\`
Depreciation = Total Purchase Value - Total Current Value
\`\`\`

If you paid $5,000 across all your gear and it's currently worth $3,800, your depreciation is $1,200.

Individual item depreciation shows on the hub cards as a percentage:

\`\`\`
Change % = ((Current Value - Purchase Price) / Purchase Price) × 100
\`\`\`

A camera bought for $1,800 now worth $1,450 shows **-19.4%**. A vintage guitar bought for $800 now worth $1,200 shows **+50.0%**.

## When to Add Valuations

There's no automatic schedule. Add a valuation when:
- You check comparable prices (eBay, marketplace)
- An insurance appraisal happens
- The item's condition changes significantly
- You want to update the current value for any reason

Even one valuation per year gives you a useful trend over time.

## Example Valuation Data

Here's what the saved valuations look like for a camera over two years:

\`\`\`json
[
  {
    "id": "val-001",
    "equipment_id": "equip-a7iii",
    "valued_at": "2024-12-01",
    "value": 1600.00,
    "source": "ebay",
    "notes": "Average of 5 sold listings on eBay"
  },
  {
    "id": "val-002",
    "equipment_id": "equip-a7iii",
    "valued_at": "2025-06-15",
    "value": 1450.00,
    "source": "ebay",
    "notes": "Price dropped after A7IV release"
  },
  {
    "id": "val-003",
    "equipment_id": "equip-a7iii",
    "valued_at": "2026-01-10",
    "value": 1350.00,
    "source": "manual",
    "notes": "Steady decline, shutter count at 45k"
  }
]
\`\`\`

## Key Takeaways

- A valuation is a dated value snapshot: add one whenever you reassess an item's worth
- Saving a valuation automatically updates the item's current value
- The detail page chart plots purchase price + all valuations chronologically
- Depreciation = Total Purchase Value - Total Current Value (shown in summary)
- Change % on hub cards shows individual item appreciation/depreciation
- Even yearly valuations build a useful trend over time`,
    },
    {
      slug: "activity-links",
      title: "Cross-Module Activity Links",
      section: "Section 4 · Connections",
      body: `Equipment doesn't exist in a vacuum. The camera you bought earns money on the jobs it works, and both the purchase and the pay sit in your Finance records. Activity Links let you connect an equipment item to related records elsewhere in Work.WitUS.

## What Are Activity Links?

An activity link is a bidirectional connection between two records in different modules. When you link your camera to a transaction, the camera's detail page shows the transaction, and the transaction's detail page shows the camera.

Work.WitUS supports links between these record types:

- Equipment
- Transaction
- Invoice (an invoice can link to equipment and to transactions)

Older links to record types Work.WitUS no longer has still appear, labeled by their type, and you can remove them.

## The Linked Activities Panel

On the equipment detail page (\`/dashboard/equipment/[id]\`), scroll to the **Linked Activities** section.

**Existing links** appear as color-coded pills. Each pill shows:
- The linked record type (e.g., "Transaction")
- The display name (e.g., "$1,799 at B&H Photo")
- An X button to remove the link

**Adding a link:**
1. Click **+ Link**
2. Select a record type from the dropdown (from an equipment item, that is Transaction)
3. Type a search term in the search field
4. Click the search icon or press Enter
5. Results appear; click one to create the link
6. The new pill appears immediately
7. Click **Cancel** to collapse the add UI

## Common Equipment Links

| Equipment | Linked To | Why |
|-----------|-----------|-----|
| Camera | Transaction (photography gig payment) | Tie equipment to income for ROI |
| Guitar | Transaction (gig payment) | Tie equipment to income for ROI |

## Links and ROI

The Equipment Summary dashboard (Lesson 07) calculates ROI by finding income transactions linked to your equipment via activity links. If your camera is linked to a "$500 photography gig" income transaction, that $500 counts as attributed revenue.

\`\`\`
ROI = ((Attributed Revenue - Purchase Price) / Purchase Price) × 100
\`\`\`

So linking equipment to income transactions directly affects the ROI number on your summary page.

## Example Activity Link Data

Here's what an activity link record looks like in the database:

\`\`\`json
{
  "id": "link-001",
  "source_type": "equipment",
  "source_id": "equip-a7iii",
  "target_type": "transaction",
  "target_id": "txn-gig-500",
  "created_at": "2026-02-15T10:30:00Z"
}
\`\`\`

Links are bidirectional: this link appears on both the equipment detail page and the transaction detail page.

## Removing a Link

Click the X on any link pill. The link is deleted immediately. This doesn't affect either record; it only removes the connection between them.

## Key Takeaways

- Activity links connect equipment to transactions, and invoices can link to both
- Links are bidirectional: they appear on both sides
- Use the Linked Activities panel on the equipment detail page: + Link → select type → search → click result
- Linking equipment to income transactions enables ROI calculation in the summary
- Removing a link doesn't affect either record: it only deletes the connection`,
    },
    {
      slug: "equipment-summary",
      title: "The Equipment Summary Dashboard",
      section: "Section 4 · Connections",
      body: `The Equipment Summary gives you a bird's-eye view of everything you own: total value, depreciation, revenue attribution, and a category-by-category breakdown. This lesson covers how to read it and what the numbers mean.

## Accessing the Summary

The summary data drives the four cards at the top of the hub page (\`/dashboard/equipment\`). The API behind them is \`/api/equipment/summary\`, which aggregates data across all your active (non-retired) equipment.

## The Four Summary Cards

**Total Items**: the count of active equipment items. Retired items are excluded.

**Total Value**: the sum of current values across all active items. This reflects the latest valuations, not what you paid.

**Depreciation**: the difference between what you paid and what everything is worth now:

\`\`\`
Depreciation = Total Purchase Value - Total Current Value
\`\`\`

If this number is negative, your portfolio has appreciated overall.

**Categories**: how many distinct categories your active items span.

## Category Breakdown

The summary API also returns a per-category breakdown, used for filtering on the hub. Each category entry shows:

- **Category name**
- **Item count**: how many active items in this category
- **Purchase total**: sum of purchase prices
- **Current total**: sum of current values

Categories are sorted by current value descending; your most valuable category appears first.

## ROI Calculation

The summary includes an ROI (Return on Investment) figure:

\`\`\`
ROI = ((Total Attributed Revenue - Total Purchase Value) / Total Purchase Value) × 100
\`\`\`

**Attributed Revenue** comes from income transactions that are linked to your equipment via activity links (Lesson 06). If you have a camera linked to a photography gig that paid $500, that $500 is attributed revenue.

If no income transactions are linked, ROI is 0%. This metric is most useful for equipment that generates revenue: cameras for photography, instruments for gigs, tools for paid work.

## What the Summary Doesn't Include

- **Retired items**: excluded from all calculations. If you retire a laptop, its value drops out of the totals.
- **Unlinked transactions**: the purchase-transaction link on equipment (Lesson 04) is for audit purposes. ROI uses activity links to income transactions, not the purchase transaction link.
- **Projected values**: the summary shows current state only, not future projections.

## Using the Summary Effectively

Check the summary monthly to answer:
- Is my total asset value going up or down?
- Which category holds the most value?
- Am I earning revenue from my equipment? (ROI)
- How much has my gear depreciated since purchase?

If depreciation is high and ROI is low, you're spending on gear that isn't working for you. If ROI is climbing, your equipment is paying for itself.

## Example Summary Response

Here's what the \`/api/equipment/summary\` API returns:

\`\`\`json
{
  "totalItems": 12,
  "totalPurchaseValue": 8500.00,
  "totalCurrentValue": 6800.00,
  "depreciation": 1700.00,
  "totalAttributedRevenue": 3200.00,
  "roi": -62.35,
  "categories": [
    { "name": "Camera", "count": 3, "purchaseTotal": 4500.00, "currentTotal": 3200.00 },
    { "name": "Computer", "count": 2, "purchaseTotal": 2800.00, "currentTotal": 2400.00 },
    { "name": "Audio", "count": 4, "purchaseTotal": 800.00, "currentTotal": 750.00 },
    { "name": "Fitness", "count": 3, "purchaseTotal": 400.00, "currentTotal": 450.00 }
  ]
}
\`\`\`

## Key Takeaways

- Summary cards show: Total Items, Total Value, Depreciation, and Categories for active equipment
- Depreciation = Total Purchase Value - Total Current Value
- ROI uses attributed revenue from income transactions linked via activity links
- Retired items are excluded from all summary calculations
- Category breakdown is sorted by current value: most valuable category first
- Check monthly to track whether your gear is working for you or just depreciating`,
    },
  ],
};
