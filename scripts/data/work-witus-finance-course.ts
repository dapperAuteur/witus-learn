import type { AuthoredCourse } from "./authored-course";

// "Finance on Work.WitUS" (WORK-03, the "Work.WitUS guides" series, `work-witus-guides`). Slug `work-witus-finance`.
//
// SOURCE. Converted from the Work.WitUS tutorial markdown in contractor-os `content/tutorials/finance/`
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
// COURSE-SPECIFIC EDITS. The source was written for CentenarianOS Finance, so lesson 1's opening and its
// "How Finance connects" section (daily debrief, Planner, Weekly Review) were rewritten around what
// Finance connects to inside Work.WitUS: invoices generated from jobs, union dues payments, and equipment
// purchases (each taught in the sibling guides). Activity links on main link only transactions,
// invoices and equipment (components/ui/ActivityLinker.tsx), so trip and task links were removed.
// Saved contacts autocomplete on transactions and invoices (components/ui/ContactAutocomplete.tsx is
// used there and nowhere in the job forms), so the Travel and Planner uses of contacts were removed.
export const WORK_WITUS_FINANCE_COURSE: AuthoredCourse = {
  title: "Finance on Work.WitUS",
  description:
    "Learn how to track money in Work.WitUS: set up budget categories, log income and expenses, read the Finance dashboard, find and fix transactions, import a bank CSV, manage your accounts and balances, link purchases to your equipment, and save vendors so the forms fill themselves in.",
  lessons: [
    {
      slug: "welcome-to-finance",
      title: "Welcome to Finance",
      section: "Section 1 · Introduction",
      body: `Most financial tracking tools are standalone: they have no idea what work you did this week. Finance on Work.WitUS is different because it sits in the same app as your jobs. Invoices you generate from a job's time entries land in Finance → Invoices, and union dues payments and equipment purchases can link to the transactions that paid for them.

Finance isn't the most complex module in the app, but because it's connected, it turns financial data from a separate chore into part of the picture of how your work is going.

## What the Finance Module Tracks

The Finance module tracks two things:

**Budget categories**: Named spending buckets with a monthly budget target. You define these based on how you think about your spending: Food & Groceries, Training & Equipment, Business Expenses, Travel, Rent & Utilities, etc. Each category has a color and a monthly dollar target.

**Transactions**: Individual income and expense entries. Each transaction is dated, categorized, and described. Transactions flow into your category budgets and populate the dashboard charts.

## What It Doesn't Track

No bank account integration. No automatic import from your bank, credit card, or Venmo. You enter transactions manually or import via CSV. This is intentional (keeping the system simple and avoiding the OAuth complexity of banking APIs) but it means Finance works best when you either log transactions regularly (daily or weekly) or do a bulk import from your bank's CSV export at the end of each month.

## The Finance Dashboard

Navigate to \`/dashboard/finance\`. The main dashboard shows:

**Summary cards (top row):**
- Total expenses this month
- Total income this month
- Net (income minus expenses) for this month

**Monthly trend chart:** A 6-month bar chart showing income and expenses side by side for each month. Lets you see at a glance whether your financial trend is positive, stable, or declining.

**Spending by category:** A pie or donut chart showing what percentage of your monthly expenses went to each budget category.

**Budget progress bars:** One bar per active budget category, showing how much of the monthly budget has been spent and how much remains. Categories over budget are flagged visually.

Below the dashboard, you can access the detailed transaction history via **View All Transactions** or the **Transactions** link in the Finance navigation.

## How Finance Connects to the Rest of the System

**Invoices:** Invoices you generate from a job's time entries appear in Finance → Invoices (\`/dashboard/finance/invoices\`). When you mark one paid, you can create a linked income transaction. The contractor guide, Work.WitUS for Contractors, walks through it.

**Union dues:** Dues payments you record on a union membership can link to the transaction that paid them.

**Equipment:** An equipment item can link to the transaction where you bought it. Lesson 8 of this course and the equipment guide cover the link.

The Finance module is the dedicated ledger. Use it for your actual household and business financial tracking.

## Key Takeaways

- Finance tracks budget categories (monthly targets) and transactions (income + expenses)
- No bank integration: manual entry or CSV import
- Dashboard: summary cards (month totals), 6-month trend chart, spending by category, budget progress bars
- Finance connects to: invoices from your jobs, union dues payments, and equipment purchases
- Works best with regular logging (daily or weekly) or a monthly bulk import from your bank's CSV export`,
    },
    {
      slug: "setting-up-budget-categories",
      title: "Setting Up Budget Categories",
      section: "Section 2 · Setup",
      body: `Budget categories are the foundation of the Finance module. Every transaction belongs to a category, and every category has a monthly budget target. Setting them up thoughtfully at the start means your dashboard and progress bars will be meaningful from day one.

## What a Budget Category Is

A budget category is a named spending bucket with three properties:

**Name**: What you call this category. It should be clear and specific enough that you know exactly which transactions belong here: "Groceries", "Dining Out", "Training & Equipment", "SaaS & Software", "Rent", "Travel".

**Monthly budget**: The dollar amount you intend to spend in this category per month. This is the target the progress bar measures against. If you set $400 for Groceries and you've logged $310 in grocery transactions this month, the progress bar shows 77.5%.

**Color**: A visual identifier for this category. Colors appear in the spending-by-category chart and on transaction entries. Pick distinct colors so categories are easy to read at a glance in the pie chart.

## Creating a Budget Category

From the Finance dashboard, click **+ Add Category** (or the category management button; it may be in a modal or sidebar depending on your view).

The category form opens:

- **Category name**: Enter the name (e.g., "Groceries")
- **Monthly budget**: Enter the dollar amount (e.g., 400)
- **Color**: Pick from the color palette

Click **Save**. The new category appears in your budget progress bars and is available in the transaction category dropdown.

## How Many Categories to Create

More categories = more granular data but more work per transaction. Fewer categories = easier logging but less insight.

A practical starting set for personal finance (8 to 12 categories):
- Housing (rent, mortgage)
- Groceries
- Dining Out
- Transportation (gas, rideshare, parking)
- Health & Medical
- Training & Fitness
- Entertainment & Media
- Clothing & Personal
- Travel
- Business & Work Expenses
- Savings & Investments
- Miscellaneous

Don't over-engineer the categories before you've logged a month of transactions. Start with 6 to 8 broad categories, then split them once you see where you actually spend. "Food" can always become "Groceries" and "Dining Out" after you realize the distinction matters to you.

For business or freelance use:
- Separate business income and personal income categories
- Create specific expense categories for your business type: Marketing, Software/SaaS, Contractors, Professional Development, Equipment

## Editing a Category

Click **Edit** on any category card or row. Update the name, budget amount, or color. Changes take effect immediately; existing transactions assigned to this category are not affected. The category still shows in all past charts and progress bars.

## Deleting a Category

Click **Delete** on any category. A confirmation prompt appears. If the category has transactions assigned to it, you'll be asked what to do with those transactions: reassign them to a different category or leave them uncategorized.

Avoid deleting categories you've actively used; the historical chart data will become less readable if those transactions are uncategorized. A better approach is to rename an old category or leave it inactive rather than deleting it.

## Categories Without Budget Targets

You can create a category with a $0 monthly budget. This means the category still groups and tracks transactions, but no progress bar or "over budget" flag will appear for it. Useful for income categories (you're not budgeting income the same way you budget expenses) or irregular expense categories like "Annual Subscriptions" where a monthly target doesn't make sense.

## Key Takeaways

- Each category has: Name, Monthly budget (dollar target), Color
- Categories power the budget progress bars and the spending-by-category chart
- Start with 6 to 8 broad categories: split them after a month when you know where you actually spend
- $0 monthly budget = category still groups transactions but no progress bar target
- Deleting a category with transactions requires reassigning those transactions; prefer renaming over deleting
- Color matters: distinct colors make the spending pie chart readable at a glance`,
    },
    {
      slug: "logging-transactions",
      title: "Logging Transactions",
      section: "Section 3 · Daily Use",
      body: `A transaction is any single financial event: money going out (expense) or money coming in (income). Logging transactions is the core daily action in the Finance module. This lesson covers every field in the transaction form and how to build the logging habit.

## Adding a Transaction

From the Finance dashboard, click **+ Add Transaction**. The transaction modal opens.

## Transaction Form Fields

**Type**: Choose between **Expense** (money out) or **Income** (money in). This is the primary distinction. All expense transactions subtract from your budget category spending; income transactions add to your monthly income total and show separately in the summary cards and trend chart.

**Amount**: The dollar amount. Enter as a number (no $ symbol needed): 47.50, 1200, 8.99.

**Date**: The date this transaction occurred. Defaults to today. Click to change; you can log past transactions at any time.

**Category**: Which budget category does this belong to? Select from the categories you've created. If no category fits, select "Uncategorized"; you can always reassign later.

**Description**: A short note describing what this transaction was. Be specific enough that you'll recognize it later: "Whole Foods weekly shop", "Client invoice: March retainer", "Netflix annual subscription". Not so specific that you include the full receipt line by line: one line per transaction event is the right granularity.

**Vendor** (optional): The business or person you paid or received from. "Whole Foods", "Amazon", "Client Name", "Apple". Vendor data is useful for searching your transaction history ("show me all Amazon transactions this year") and for the spending-by-vendor breakdown in analytics.

Click **Save**. The transaction is logged immediately and your dashboard stats update.

## Expense vs. Income: Practical Examples

**Expenses:**
- Grocery run: $94.50, Groceries category, vendor "Whole Foods"
- Monthly gym: $75, Training & Fitness, vendor "Equinox"
- Software subscription: $29, Business Expenses, vendor "Adobe"
- Coffee meeting: $18, Dining Out, vendor "Blue Bottle Coffee"

**Income:**
- Freelance invoice paid: $2,400, Business Income category
- Salary deposit: $4,500, Salary/Employment category
- Side project payment: $750, Freelance Income category

## Logging Cadence

**Daily logging**: most accurate. Takes 30 to 60 seconds at the end of the day while the transactions are fresh. Best if you have high transaction volume or care about precise budget tracking.

**Weekly logging**: workable. Set aside 5 to 10 minutes each Sunday to log the week's transactions from memory or bank statements. Some detail may be lost.

**Monthly bulk import**: most common approach for people who find daily logging too much friction. Export a CSV from your bank or credit card at the end of the month, import it, and categorize in bulk. Covered in Lesson 06.

## Editing a Transaction

Transactions can be edited after saving. From the transaction history (Lesson 05) or via the dashboard's recent transactions list, click **Edit** on any entry. All fields are editable; update the amount, date, category, description, or vendor and save.

## Handling Split Transactions

One vendor visit can span multiple categories: a Target run that includes groceries and household supplies. Log this as two separate transactions with the same date and vendor: one for the grocery portion in "Groceries", one for the household supplies portion in "Home & Supplies". Split transactions give you accurate budget tracking per category.

## Key Takeaways

- Every transaction has: Type (Expense/Income), Amount, Date, Category, Description, optional Vendor
- Expense transactions update budget category progress bars; Income appears separately in summary cards
- Log cadence options: daily (most accurate), weekly (workable), monthly CSV import (lowest friction)
- Split a single vendor visit into multiple transactions if it spans multiple categories
- Description should be recognizable at a glance weeks later: not a full receipt, not a useless vague label
- Vendor field enables vendor-level search and spending analysis in transaction history`,
    },
    {
      slug: "reading-your-dashboard",
      title: "Reading Your Dashboard",
      section: "Section 4 · Analytics",
      body: `The Finance dashboard gives you a complete financial snapshot without having to read through individual transactions. Once you have at least a few weeks of data, the charts and progress bars start telling a story. This lesson covers how to read each element and what to act on.

## Summary Cards

At the top of the dashboard, three summary cards show your current month's financial state:

**Total Expenses**: Sum of all expense transactions in the current calendar month.

**Total Income**: Sum of all income transactions in the current calendar month.

**Net**: Income minus Expenses. Positive net = surplus. Negative net = deficit. This is the single most important number on the dashboard. A consistent positive net is the financial foundation of everything else.

These cards update immediately when you log or edit transactions.

## Monthly Trend Chart

Below the summary cards, a bar chart shows the last 6 months of income and expenses side by side. Each month has two bars: one for total expenses (typically in red or a warm color) and one for total income (typically in green or a cool color).

**What to look for:**

- **Income consistently higher than expenses**: healthy. The gap is your monthly surplus.
- **Expenses creeping upward month over month**: worth investigating. Which categories are driving the increase?
- **A specific month with a spike**: identify the outlier transaction. One-time large expenses (annual subscriptions, equipment purchases, travel) will show as spikes. These are normal but worth labeling clearly in your transaction descriptions so you can identify them easily.
- **Income volatility**: common for freelancers and business owners. The trend chart makes the irregular nature of income visible at a glance.

Hover over any bar to see the exact dollar total for that month.

## Spending by Category Chart

A pie or donut chart showing what percentage of your total monthly expenses went to each budget category. Each slice is colored with the category's color.

**What to look for:**

- **Which categories dominate**: the largest slices. If a category you consider low-priority is eating 30% of your monthly expenses, that's a flag.
- **Uncategorized slice**: if a significant portion of expenses is "Uncategorized", you have transactions that need to be assigned. A large uncategorized slice means your budget progress bars aren't accurate.
- **Balance between categories**: over time, your spending distribution should reflect your actual priorities.

Hover over any slice to see the category name, dollar amount, and percentage.

## Budget Progress Bars

One horizontal progress bar per budget category. Each bar shows:

- **Category name and color** on the left
- **Amount spent / Monthly budget** (e.g., "$310 / $400")
- **Progress bar**: fills left to right as you spend
- **Remaining amount**: how much is left in this category's budget for the month

**Color states:**
- **Neutral/green**: under budget, healthy amount of runway remaining
- **Amber**: approaching the budget (typically 80 to 85%+ used)
- **Red / over-budget indicator**: budget exceeded. The bar extends past 100% and the overage amount is shown

At a glance, the progress bars tell you which categories have room to spend and which are at risk. Check them before making discretionary purchases: "I've already spent $380 of $400 in Dining Out this month" is useful decision-making context.

## Acting on the Dashboard

The dashboard is a diagnostic, not a report. The right response to what you see:

- **Net is consistently negative** → find the largest expense category and set a lower monthly budget target with intent to spend down to it
- **A category is consistently over budget** → either the budget target is unrealistic and should be raised, or spending in that category genuinely needs to decrease
- **Income trend is flat while expenses are rising** → the gap is narrowing; address it before it becomes a deficit
- **Everything looks fine** → check the spending-by-category chart for any category whose slice is disproportionate to its perceived priority in your life

## Key Takeaways

- Three summary cards for the current calendar month: Total Expenses, Total Income, Net
- Monthly trend chart: 6 months of income vs. expenses; hover for exact values
- Spending by category: pie chart by expense category; a large uncategorized slice means transactions to assign
- Budget progress bars: green → healthy, amber → approaching limit, red → over budget
- Use progress bars as pre-purchase context: "How much is left in this category this month?"
- Net consistently negative = address it; category consistently over budget = either raise the target or reduce spending`,
    },
    {
      slug: "transaction-history",
      title: "Transaction History",
      section: "Section 5 · Transaction Management",
      body: `The dashboard shows you summaries. The Transaction History shows you the actual records: every individual transaction you've logged, searchable and filterable. This is where you do maintenance work: fixing miscategorized transactions, finding specific entries, and reviewing your spending at a detailed level.

## Navigating to Transaction History

From the Finance dashboard, click **View All Transactions** or the **Transactions** link in the Finance navigation. This takes you to \`/dashboard/finance/transactions\`.

## The Transactions List

The transactions page shows all your transactions in reverse chronological order (most recent first). Each row shows:

- **Date**: when the transaction occurred
- **Type**: Expense or Income, visually distinguished (usually red for expense, green for income)
- **Amount**: the dollar value
- **Category**: which budget category it's assigned to
- **Description**: your transaction note
- **Vendor**: the vendor if you logged one
- **Edit** and **Delete** buttons

## Filtering and Searching

**Date range filter**: Set a start and end date to view transactions within a specific period. Useful for reviewing a single month, a quarter, or a custom range for tax purposes.

**Type filter**: Show only Expenses, only Income, or both.

**Category filter**: Filter to transactions in a specific category. "Show me all Dining Out transactions for Q1" is a common query.

**Vendor search**: Type any vendor name to filter by vendor. "Amazon" returns all Amazon transactions. Useful for reviewing subscriptions, recurring expenses, or a specific vendor relationship.

**Description search**: Free-text search across description fields. Helpful when you remember part of a description but not the date or category.

Filters stack; you can combine date range + category + type to find exactly what you need.

## Editing a Transaction

Click **Edit** on any row. The transaction form opens with all fields pre-filled. Update anything (amount, date, category, description, vendor) and click Save.

Common reasons to edit:
- **Wrong category**: you logged groceries under Dining Out
- **Wrong date**: logged today but the transaction was yesterday
- **Incomplete vendor**: you left it blank but want to add it for better analytics
- **Amount error**: typo in the amount

## Deleting a Transaction

Click **Delete** on any row. A confirmation prompt appears. Deletion is permanent; the transaction is removed from all dashboard totals, charts, and budget progress bars immediately.

Use delete for:
- Duplicate transactions (logged the same transaction twice)
- Test entries
- Truly erroneous entries that don't represent a real financial event

Don't delete transactions just because they were over-budget or you regret the expense; that history is useful data.

## Bulk Reassignment

If you imported data and several transactions landed in the wrong category (or are uncategorized), you can edit them one by one. For large batches, the import tool (Lesson 06) supports category assignment at import time, which is more efficient than manual bulk editing.

## Year-End Review

The transaction history is your ledger for tax and financial planning purposes. At year-end:

1. Set the date range to January 1 to December 31 of the year
2. Filter to Income to see total annual income by category
3. Filter to Business Expenses to see deductible business costs
4. Use the CSV export (Lesson 06) to download the full year as a spreadsheet for your accountant

## Key Takeaways

- Transaction history at /dashboard/finance/transactions: all transactions, most recent first
- Filter by: date range, type (expense/income), category, vendor, description keyword; filters stack
- Edit any transaction: fix category, amount, date, vendor, description
- Delete is permanent: use for duplicates and errors, not for over-budget regret
- Vendor search is powerful: "Amazon" finds every Amazon transaction across all time
- Year-end: filter to Jan 1 to Dec 31, export CSV for accountant or tax purposes`,
    },
    {
      slug: "importing-and-exporting",
      title: "Importing and Exporting",
      section: "Section 6 · Data Management",
      body: `Manual entry works, but for most people the lowest-friction approach to Finance is a monthly import from your bank's CSV export. This lesson covers how to import transaction data in bulk and how to export your Finance data for use in spreadsheets, tax tools, or external analysis.

## Importing Transactions

From the Finance dashboard, click **Import** (or navigate to the import option in the Finance menu).

## Preparing Your Bank CSV

Most banks and credit card providers let you export a CSV of your transaction history from their website or app. The typical process:

1. Log in to your bank's web interface
2. Navigate to account history or statements
3. Find the export or download option (usually CSV, Excel, or OFX)
4. Set the date range and download

The resulting CSV will have columns for Date, Description/Merchant, and Amount. Different banks format these differently; the import tool handles common formats and normalizes column names.

## The Import Workflow

**Step 1: Upload or paste your CSV**
Drag the file onto the upload area or paste raw CSV text. The import tool parses it and shows a data table.

**Step 2: Review the parsed table**
Each row represents a transaction. Check that:
- Dates parsed correctly (YYYY-MM-DD)
- Amounts are positive numbers (the Type field handles direction)
- Descriptions look recognizable

**Step 3: Assign types and categories**
This is the most time-consuming step, especially on first import. For each row (or in bulk):
- Set **Type** to Expense or Income (the tool may auto-detect based on amount sign from your bank)
- Assign a **Category** from your existing budget categories

The table supports bulk category assignment: select multiple rows of the same type and assign them all to a category at once.

**Step 4: Set the vendor field (optional)**
If your bank descriptions include merchant names, the tool may parse them into the Vendor field automatically. Review and correct as needed.

**Step 5: Import**
Click **Import**. The system inserts all valid rows. You'll see a summary: imported count, skipped count (rows with missing or invalid data), and any errors.

Duplicate detection: if a transaction with the same date, amount, and description already exists, the import will skip it. This prevents double-logging when you re-import overlapping date ranges.

## Tips for Efficient Monthly Imports

- **Do it monthly, not annually**: 30 days of transactions is much faster to categorize than 365. The detail is fresher and easier to recognize.
- **Download on the 1st of each month** for the prior month's complete data.
- **Create specific budget categories before importing**: so you can assign categories during import rather than editing transactions after the fact.
- **Bank descriptions are often abbreviated**: "AMZN*MKTP US 123ABC" is an Amazon purchase. Familiarize yourself with your bank's typical merchant name format.

## Exporting Transactions

From the Finance dashboard or the Transactions page, click **Export** or **Download CSV**.

The export downloads all transactions within your current filter settings as a CSV file. To export:

- **All transactions ever:** clear all filters, then export
- **Current year only:** set the date range to Jan 1 to Dec 31 of the current year, then export
- **A specific category:** apply the category filter, then export

The exported CSV includes all transaction fields: Date, Type, Amount, Category, Description, Vendor. This CSV can be:
- Opened in Excel or Google Sheets for further analysis
- Shared with an accountant for tax preparation
- Imported into tax software that accepts CSV input
- Used as a backup of your Finance data

## No Automatic Sync

Finance on Work.WitUS doesn't connect directly to bank accounts or Plaid. The import process is intentionally manual: you download from your bank, review what you're importing, and categorize with intent.

This has two advantages: you review your transactions before they enter the system (catching errors or fraud), and there are no OAuth connections to banking credentials in Work.WitUS.

## Key Takeaways

- Import from any bank's CSV export: upload the file or paste raw CSV text
- Import workflow: parse → review table → assign type + category (bulk assign supported) → import
- Duplicate detection: same date + amount + description skips on re-import
- Do monthly imports (30 days at a time) for best efficiency and freshness
- Export uses your current filter: filter by year or category before exporting for targeted outputs
- Export CSV is your shareable ledger: tax prep, accountant, spreadsheet analysis, backup
- No direct bank connection: intentionally manual for security and intentional categorization`,
    },
    {
      slug: "financial-accounts",
      title: "Managing Financial Accounts",
      section: "Section 7 · Accounts",
      body: `Financial accounts are the containers for your money: checking accounts, savings accounts, credit cards, loans, and cash. This lesson covers how to set them up, what each field does, and how they connect to your transactions.

## What Is a Financial Account?

A financial account represents a real-world account or cash reserve. Every transaction you log can be assigned to an account, which lets you track balances, see per-account spending, and know exactly where your money lives.

## Account Types

Five types are supported:

| Type | Description | Example |
|------|-------------|---------|
| **Checking** | Primary spending account | Chase Checking |
| **Savings** | Money set aside | Ally Savings |
| **Credit Card** | Revolving credit | Visa Signature |
| **Loan** | Installment debt | Car loan, mortgage |
| **Cash** | Physical cash or petty cash | Wallet, emergency fund |

## Creating an Account

Navigate to \`/dashboard/finance/accounts\` and click **+ Add Account**.

The form includes:

| Field | Type | Notes |
|-------|------|-------|
| **Name** | text | Required, e.g., "Chase Checking" |
| **Account Type** | select | checking / savings / credit_card / loan / cash |
| **Institution Name** | text | Optional, bank or lender name |
| **Last Four** | 4 chars | Last 4 digits of account number (for identification) |
| **Opening Balance** | number | Starting balance, used as the baseline for calculations |
| **Interest Rate** | number | Optional, APR for savings/loans, APY for credit cards |
| **Credit Limit** | number | Optional, only relevant for credit cards |
| **Monthly Fee** | number | Optional, recurring account fee |
| **Due Date** | 1-28 | Optional, payment due day of month (credit cards, loans) |
| **Statement Date** | 1-28 | Optional, statement close day of month |

## How Balances Work

Account balances are calculated, not stored directly:

\`\`\`
Balance = Opening Balance + SUM(income transactions) - SUM(expense transactions)
\`\`\`

Every transaction assigned to the account affects the balance. Income adds. Expenses subtract. The opening balance provides the starting point.

This means you don't manually update balances; they stay accurate as long as your transactions are assigned to the right accounts.

## The Accounts Dashboard

The accounts row appears at the top of your finance dashboard (\`/dashboard/finance\`). Each account shows:
- Account name and type icon
- Current balance
- Last four digits (if set)

Click an account to filter the dashboard to only that account's transactions.

## Managing Accounts

The accounts management page at \`/dashboard/finance/accounts\` lets you:

**Edit**: change any field. Balance recalculates automatically.

**Delete**: two behaviors:
- If the account has no transactions: hard delete (permanently removed)
- If the account has transactions: soft deactivate. The account disappears from the dashboard but its data is preserved.

**Reactivate**: if an account was soft-deactivated, you can reactivate it to bring it back.

## Key Takeaways

- 5 account types: checking, savings, credit_card, loan, cash
- Balance = Opening Balance + income - expenses (auto-calculated from transactions)
- Accounts appear as a row at the top of the finance dashboard
- Delete with transactions → soft deactivate (data preserved); delete without → hard delete
- Assign transactions to accounts to maintain accurate per-account balances`,
    },
    {
      slug: "account-balances-and-linking",
      title: "Account Balances & Equipment Links",
      section: "Section 7 · Accounts",
      body: `Once your accounts are set up and transactions are flowing, balances become meaningful. This lesson covers how to read account balances, how they connect to the Equipment module, and how cross-module linking works.

## Reading Account Balances

Each account's balance is live; it updates every time you add, edit, or delete a transaction assigned to that account.

The balance calculation:
\`\`\`
Balance = Opening Balance + SUM(income) - SUM(expenses)
\`\`\`

For **checking/savings/cash**: a positive balance means money available.

For **credit cards**: the balance represents what you owe. Income transactions (payments) reduce it. Expense transactions (charges) increase it.

For **loans**: similar to credit cards; the balance tracks remaining debt.

## Per-Account Filtering

On the finance dashboard, click any account in the accounts row to filter the view to just that account. The summary cards, budget bars, and transaction list all update to reflect only that account's data.

Click **All** to return to the combined view.

## Equipment Transaction Links

The Equipment module (\`/dashboard/equipment\`) can link items to financial transactions. When a transaction is linked as a purchase record for a piece of equipment:

- The equipment detail page shows the transaction as the purchase source
- The Equipment Summary calculates purchase values from these links
- You can trace "what did I buy with this money?" directly from the Finance module

From the Equipment side, you search for the transaction by vendor name in the equipment form's **Linked Purchase Transaction** field.

## Activity Links from Finance

Financial transactions can also appear in activity links. If you link a transaction to a piece of equipment with the **Linked Activities** panel:

- The link appears on both the transaction detail and the linked item's detail
- Income transactions linked to equipment contribute to the Equipment Summary's ROI calculation

Activity links don't move money or change balances; they're informational cross-references.

## Example: Tracing a Purchase

1. You buy a camera for $1,799 at B&H Photo → logged as an expense in Finance
2. In Equipment, you create "Sony A7III" and link it to the B&H transaction
3. The equipment detail page shows: Purchased $1,799, linked to "B&H Photo ($1,799) 2024-06-15"
4. Later, you link the camera to a "$500 photography gig" income transaction via activity links
5. The Equipment Summary shows: Purchase $1,799, Revenue $500, ROI: -72%

The entire chain (spending, ownership, and revenue) is traceable across modules.

## Key Takeaways

- Account balances are auto-calculated: Opening Balance + income - expenses
- Click any account on the dashboard to filter to that account's transactions
- Equipment items link to transactions via the purchase transaction field
- Activity links connect transactions to equipment (and invoices to both) so you can trace across modules
- Income transactions linked to equipment contribute to ROI calculations`,
    },
    {
      slug: "contacts-and-autocomplete",
      title: "Saved Contacts & Vendor Autocomplete",
      section: "Section 8 · Contacts",
      body: `Every time you log a transaction, you type a vendor name. If you buy from the same places regularly, that gets repetitive. Saved Contacts solves this: save your vendors once, and the autocomplete fills in the details for you.

## What Are Saved Contacts?

A saved contact is a reusable vendor, customer, or location in your contacts directory. Each contact has:

- **Name**: the vendor or customer name (e.g., "Costco", "Amazon", "John's Auto")
- **Contact Type**: vendor, customer, or location
- **Default Category**: the budget category this vendor typically falls under (e.g., Costco → Groceries)
- **Notes**: any context you want to remember
- **Use Count**: how many times you've selected this contact (auto-incremented)

## Vendor Autocomplete

When you create a transaction and start typing in the Vendor field, the autocomplete kicks in:

1. Type 2+ characters
2. A dropdown appears showing matching saved contacts, sorted by use count (most used first)
3. Click a contact to select it
4. The vendor name auto-fills
5. If the contact has a default category, the transaction category auto-fills too

This means selecting "Costco" from the autocomplete automatically sets the category to "Groceries" with no extra clicks.

## Saving a New Contact

If you type a vendor name that doesn't match any saved contact, you'll see a **"Save?"** prompt. Click it to save the vendor as a new contact. You can set the default category during this process.

The save never makes a duplicate: if a contact with the same name and type already exists, the use count increments instead of creating a duplicate.

## Managing Contacts

Navigate to the contacts management area to:

- **Edit**: change the name, type, default category, or notes
- **Delete**: permanently remove the contact
- **Add locations**: attach sub-addresses to a contact

Contacts are shared across modules:
- **Finance**: vendor autocomplete on transactions
- **Invoices**: contact autocomplete on invoices

## Contact Locations

Each contact can have multiple locations (sub-addresses). For example:
- **Costco** → "Main Store" (123 Main St), "Gas Station" (parking lot pump)
- **Client: Acme Corp** → "HQ" (456 Market St), "Warehouse" (789 Industrial Blvd)

In the Finance module, locations aren't used directly; the vendor name and category are what matter.

## Key Takeaways

- Saved Contacts store vendor/customer names with default budget categories
- Autocomplete: type 2+ chars → dropdown → click to auto-fill vendor + category
- "Save?" prompt appears for new vendors and never creates a duplicate
- Contacts are shared across transactions and invoices
- Contacts can have multiple locations (sub-addresses)`,
    },
  ],
};
