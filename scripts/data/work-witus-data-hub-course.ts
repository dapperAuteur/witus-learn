import type { AuthoredCourse } from "./authored-course";

// "The Work.WitUS Data Hub" (WORK-05, the "Work.WitUS guides" series, `work-witus-guides`). Slug `work-witus-data-hub`.
//
// SOURCE. Converted from the Work.WitUS tutorial markdown in contractor-os `content/tutorials/data-hub/`
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
// COURSE-SPECIFIC EDITS. The source described ten CentenarianOS modules. The Data Hub on main has three
// cards (app/dashboard/data/page.tsx): Finance, Equipment and Contacts, so the module tables, tips, filter
// lists and column lists were cut to those three and checked against each export route
// (app/api/{finance,equipment,contacts}/export) and the import page (app/dashboard/data/import/[module],
// components/data/GenericImportPage.tsx). The import page on main has no Google Sheets tab, so the Google
// Sheets workflow was removed. Finance's Import goes to /dashboard/finance/import, its own importer.
export const WORK_WITUS_DATA_HUB_COURSE: AuthoredCourse = {
  title: "The Work.WitUS Data Hub",
  description:
    "Learn how to move your Work.WitUS data in and out in bulk: the Data Hub's Finance, Equipment, and Contacts cards, the CSV templates, the import preview, and full or filtered exports.",
  lessons: [
    {
      slug: "the-data-hub",
      title: "The Data Hub: Your Data Command Center",
      section: "Section 1 · The Data Hub",
      body: `Your Work.WitUS data lives in more than one place: your Finance records, your equipment, and your saved contacts. The Data Hub brings their imports and exports onto one page so you never have to hunt for the right button.

## What Is the Data Hub?

The Data Hub lives at **Data Hub** in the dashboard menu (or \`/dashboard/data\`). It shows a card for every module that supports bulk data, with three actions per card:

- **Import**: opens the import page where you upload a CSV file
- **Export All**: downloads all your data for that module as a CSV file
- **Template**: downloads a CSV template with example rows

## Modules Available

| Module | What You Can Import/Export |
|--------|--------------------------|
| **Finance** | Transactions: income, expenses, and transfers |
| **Equipment** | Gear, tools, and merchandise |
| **Contacts** | Vendors, customers, and saved locations |

## Quick Access from Dashboards

You don't have to visit the Data Hub every time. The Finance dashboard and the Equipment hub each have their own Import and Export buttons.

## Export Filter Parameters

Each export URL supports an optional query parameter for filtered downloads. The Data Hub prints each one under its card:

\`\`\`
/api/finance/export?from=2026-01-01&to=2026-01-31
/api/equipment/export?category_id=abc123
/api/contacts/export?type=vendor
\`\`\`

You can type these directly in your browser or bookmark them for regular use.

## Key Takeaways

- The Data Hub is a single page for your Finance, Equipment, and Contacts imports and exports
- Each module card has Import, Export All, and Template buttons
- The Finance dashboard and the Equipment hub also have their own Import/Export buttons
- Export URLs support a date range (Finance), a category (Equipment), or a contact type (Contacts)`,
    },
    {
      slug: "importing-data",
      title: "Importing Data from CSV",
      section: "Section 1 · The Data Hub",
      body: `Whether you're moving from another app or bulk-loading historical data, the Data Hub importer handles it. This lesson walks through the full import workflow: from downloading a template to seeing your data land in the dashboard.

## Step 1: Download the Template

1. Go to the **Data Hub** (\`/dashboard/data\`)
2. Find the module you want to import into
3. Click the **Template** button to download the CSV template
4. Open it in Google Sheets, Excel, or any spreadsheet app

Each template includes:
- A header row with the exact column names the importer expects
- Example rows with realistic data
- Required columns are noted in the import page instructions

## Step 2: Fill In Your Data

Follow these guidelines:

- **Dates** must be \`YYYY-MM-DD\` format (e.g., \`2026-02-15\`)
- **Numbers** should be plain (no \`$\` signs or commas in amounts)
- **Leave optional columns empty** if they don't apply: the importer skips blanks
- **Keep under the row limit**: 1,000 rows for most modules, 500 for contacts

## Step 3: Upload and Preview

1. Click **Import** on the module card in the Data Hub (Finance opens its own importer at \`/dashboard/finance/import\`, covered in the Finance guide)
2. Choose your CSV file
3. The importer reads your columns and shows a **preview table** of the first 50 rows
4. Review the preview for any obvious issues

## Step 4: Import

1. Click the **Import** button (it shows the row count, e.g., "Import 47 Rows")
2. Wait for the progress indicator
3. Review the result banner:
   - **Green**: success! Shows imported count and any skipped rows
   - **Red**: error details so you can fix and retry

## Module-Specific Tips

| Module | Tips |
|--------|------|
| **Equipment** | Required: \`name\`. Category names are auto-created if they don't exist. \`current_value\` defaults to \`purchase_price\`. |
| **Contacts** | Required: \`name\` and \`contact_type\` (vendor, customer, or location). Rows match by name + type, so existing contacts are updated, not duplicated. Location fields create saved locations. Max 500. |

## Key Takeaways

- Download the CSV template first: it shows the exact format expected
- Dates must be YYYY-MM-DD, numbers plain (no $ or commas)
- Preview your data before importing to catch issues
- Equipment creates missing categories; Contacts updates existing contacts instead of duplicating them`,
    },
    {
      slug: "exporting-data",
      title: "Exporting Data: Full and Filtered",
      section: "Section 1 · The Data Hub",
      body: `Your data belongs to you. Work.WitUS lets you export everything (or just a filtered slice) as a downloadable CSV file. Use exports for backups, analysis in spreadsheets, or moving to another tool.

## Full Export

The simplest export: click **Export All** on any module card in the Data Hub. This downloads every record you have for that module as a CSV file:
- \`work-witus-finance-export.csv\`
- \`work-witus-equipment-export.csv\`
- \`work-witus-contacts-export.csv\`

## Filtered Export

Each module supports one filter, added to the export URL:

| Module | Filter Parameters | Example |
|--------|-------------------|---------|
| **Finance** | \`from\`, \`to\` (dates) | \`/api/finance/export?from=2026-01-01&to=2026-01-31\` |
| **Equipment** | \`category_id\` | \`/api/equipment/export?category_id=xyz-456\` |
| **Contacts** | \`type\` (vendor, customer, or location) | \`/api/contacts/export?type=vendor\` |

Type these URLs directly in your browser's address bar, or bookmark them.

## What's in the Export?

| Module | Columns |
|--------|-------------|
| **Finance** | Date, Type, Amount, Description, Vendor, Category, Notes |
| **Equipment** | Name, Category, Brand, Model, Serial Number, Purchase Date, Purchase Price, Current Value, Warranty Expires, Condition, Notes, Ownership |
| **Contacts** | Name, Contact Type, Notes, Location Label, Address, Lat, Lng |

## Tips for Working with Exports

1. **Open in Google Sheets**: drag the downloaded CSV into Google Drive, then open it with Sheets
2. **Pivot tables**: use the exported data to create custom reports and charts
3. **Regular backups**: bookmark your export URLs and download monthly
4. **Re-import after edits**: export, edit in a spreadsheet, then re-import via the Data Hub

## Key Takeaways

- Export All downloads every record for a module as CSV
- Finance takes \`?from=\` and \`?to=\` for a date range
- Equipment filters by category and Contacts by contact type
- Use exported CSVs for backups, analysis, or re-import after edits`,
    },
  ],
};
