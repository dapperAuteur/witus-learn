import type { AuthoredCourse } from "./authored-course";

// "Work.WitUS for Contractors" (WORK-01, the "Work.WitUS guides" series, `work-witus-guides`). Slug `work-witus-contractor-guide`.
//
// SOURCE. Converted from the Work.WitUS tutorial markdown in contractor-os `content/tutorials/contractor/`
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
// COURSE-SPECIFIC EDITS. Mileage left the Reports and Compare pages with Travel, so the mileage lines
// went with it. The Reports page has no CSV export on main, so that section was cut. The 1099 lesson no
// longer says a 1099 is coming at $600: the page still marks clients at $600, but the IRS instructions
// for Forms 1099-MISC and 1099-NEC (read 2026-10-31) give $2,000 for tax years beginning after 2025, so the
// lesson describes the badge and sends the learner to the IRS or a tax preparer instead of stating a
// threshold. The union-dues line stopped calling dues a Schedule C deduction (an unsourced tax claim).
export const WORK_WITUS_CONTRACTOR_GUIDE_COURSE: AuthoredCourse = {
  title: "Work.WitUS for Contractors",
  description:
    "Learn how to run your freelance work in Work.WitUS: create jobs, log hours, generate invoices from your time entries, save rate cards, scan pay stubs, build venue and city guides, keep union contracts and dues in one place, invite your crew, and read your earnings by client.",
  lessons: [
    {
      slug: "welcome-to-work-witus",
      title: "Welcome to Work.WitUS",
      section: "Section 1 · Getting Started",
      body: `Welcome to Work.WitUS for Contractors, a free course about Work.WitUS (work.witus.online).

If you're an independent contractor in broadcast, production, or live events, this module was built for you. By the end of this course, you'll know how to track every job, log your hours, generate invoices, manage rate cards, build venue knowledge bases, track union memberships and dues, and compare job profitability.

Let's start with a quick tour of the Contractor Hub dashboard.

## What is Work.WitUS?

Work.WitUS is the central workspace for managing your freelance career. It lives at work.witus.online, and the Contractor Hub is at /dashboard/contractor.

The hub has several core areas:

**Jobs**: Track every gig from assignment through payment. Each job stores the client, event, venue, dates, pay rates, department, and union local. Jobs flow through statuses: assigned → confirmed → in progress → completed → invoiced → paid.

**Time Entries**: Log your hours per work day on each job. The system auto-calculates straight time, overtime, and double time based on an 8-hour threshold.

**Rate Cards**: Save reusable rate presets by client, union, and department. Apply them to new jobs with one click.

**Invoices**: Generate invoices directly from your time entries. Line items are auto-calculated from your rates and hours.

**Venues**: Build a knowledge base for every venue you work at: parking, load-in, WiFi, power, catering, security.

**City Guides**: Community-contributed restaurant, hotel, and coffee shop recommendations for cities you travel to.

**Union Tools**: Upload and chat with your union contracts, track memberships across multiple locals, and stay on top of dues payments.

**Reports**: Earnings by client, 1099 tracking, and job comparison.

## Interactive Feature Walkthroughs

Every Work.WitUS feature has an interactive walkthrough you can take inside the app. When you first log in, you'll be offered a guided tour of whatever module you choose. You can also re-take tours anytime from **Settings > Module Tours** or the "Re-take Tours" option in your user menu.

If you'd rather read first, the public feature pages at /features/contractor explain each module in detail and let you try a demo login with one click.

## What's Next

In the next lesson, we'll create your first job. That's the foundation: time entries, invoices, and reports all flow from your job records.

After that, you'll have five topic areas to explore in any order: Jobs & Time Entries, Invoices & Rate Cards, Venues & City Guides, Union Tools, and Reports & Collaboration.`,
    },
    {
      slug: "creating-your-first-job",
      title: "Creating Your First Job",
      section: "Section 2 · Jobs & Time Entries",
      body: `Jobs are the backbone of Work.WitUS. Every time you get booked for a gig, you create a job record. Everything else (time entries, invoices, expenses) links back to that job.

## Creating a Job

Navigate to Dashboard → Jobs → New Job (\`/dashboard/contractor/jobs/new\`). Here's what you'll fill in:

**Client**: The network or production company (CBS Sports, ESPN, Fox Sports, etc.). If you've saved them as a contact, start typing and the autocomplete will match. Selecting a saved contact links the job for reporting later.

**Event Name**: What you're working (e.g., "Colts vs Dolphins", "NFL Draft Combine 2026", "B1G Women's Basketball Tournament").

**Location**: The venue. If you've saved venue locations, select from the dropdown. The venue's knowledge base info will be available from the job detail page.

**Dates**: Start and end date. For multi-day events, toggle "Multi-day" and optionally specify non-consecutive scheduled dates using the date picker.

**Pay Rates**: Standard time (ST), overtime (OT), and double time (DT) hourly rates. If you have a rate card saved for this client/union, select it to auto-fill these fields.

**Rate Type**: Hourly, daily, or flat rate.

**Department**: Camera, Audio, Utility, Graphics, etc.

**Union Local**: If it's a union gig, enter the local (e.g., "IATSE 317").

**Notes**: Any additional info about the job.

## Job Statuses

Jobs move through a lifecycle:

- **Assigned**: You've been booked but haven't confirmed
- **Confirmed**: You've confirmed you'll work it
- **In Progress**: You're currently on the job
- **Completed**: Work is done, ready for invoicing
- **Invoiced**: Invoice has been generated and sent
- **Paid**: Payment received
- **Cancelled**: Job fell through

You can update the status from the job detail page at any time.

## Key Takeaways

- Every job needs at minimum a client name, event name, and dates
- Linking saved contacts enables earnings-by-client reporting
- Rate cards save time when you work the same client/union regularly
- Multi-day jobs support non-consecutive scheduling`,
    },
    {
      slug: "time-entries-and-hours",
      title: "Time Entries and Hour Logging",
      section: "Section 2 · Jobs & Time Entries",
      body: `Once you've created a job, the next step is logging your hours. Time entries are the raw data that invoices are built from.

## Adding a Time Entry

From any job detail page, click the Time Entries tab, then Add Entry. Each entry represents one work day:

**Work Date**: The calendar date you worked. Each job can only have one time entry per date.

**Time In / Time Out**: Clock-in and clock-out times. Optional; you can just enter hours directly if you prefer.

**Break Minutes**: Meal breaks or other unpaid time. Defaults to 30 minutes.

**Hours Breakdown**: The system auto-calculates:
- **ST (Standard Time)**: First 8 hours
- **OT (Overtime)**: Hours 8-12 (typically 1.5x rate)
- **DT (Double Time)**: Hours beyond 12 (typically 2x rate)

You can also manually adjust the ST/OT/DT split if your union contract has different thresholds.

**Meal Provided**: Toggle if the venue provided meals (affects benefit calculations).

## Editing and Deleting Entries

Click any entry to edit it. The hours recalculate automatically when you change times. Delete an entry if it was logged in error; this won't affect any already-generated invoices (they're separate records).

## Tips for Multi-Day Jobs

For events like the NFL Combine (7+ days), you'll have one entry per work day. The job detail page shows a running total of all hours across all entries, broken down by ST/OT/DT. This is what the invoice generator uses.

## Key Takeaways

- One time entry per work date per job (the app will not save a second one)
- Auto-calculates ST/OT/DT from 8-hour threshold
- Break minutes are subtracted from total hours
- Multi-day jobs accumulate entries that feed into invoice generation`,
    },
    {
      slug: "job-documents-and-uploads",
      title: "Job Documents and Uploads",
      section: "Section 2 · Jobs & Time Entries",
      body: `Every job comes with paperwork: call sheets, crew lists, W9s, contracts, venue schematics. The Documents tab on each job lets you upload and organize all of it.

## Uploading Documents

From the job detail page, click the Documents tab, then Upload. Select a file and choose a document type:

- **Call Sheet**: Daily schedule with positions, call times, locations
- **Crew List**: Who's working the event and their roles
- **W9**: Tax form for the client
- **Certificate**: Insurance certificates, union cards
- **Contract**: Work agreements, deal memos
- **Receipt**: Expense receipts related to the job
- **Schematic**: Venue floor plans, camera plots, rigging diagrams
- **Map**: Venue maps, parking guides
- **Other**: Anything else

Files are uploaded to Cloudinary and the URL is stored with your job record.

## Sharing Documents

Toggle "Shared" on any document to make it visible to other contractors who've worked at the same venue. This is great for venue schematics and parking maps that benefit everyone on the crew.

## Key Takeaways

- Organize job paperwork by type for easy retrieval
- Share venue-specific documents with other contractors
- All files stored securely via Cloudinary`,
    },
    {
      slug: "generating-invoices",
      title: "Generating Invoices from Time Entries",
      section: "Section 3 · Invoices & Rate Cards",
      body: `Getting paid starts with a clean invoice. Work.WitUS can generate invoices automatically from your time entries, no spreadsheet needed.

## How Invoice Generation Works

From a job detail page, click Generate Invoice. The system:

1. Looks up the job's pay rates (ST, OT, DT)
2. Sums all time entries: total ST hours, OT hours, DT hours
3. Creates line items: "Standard Time (40h x $65)" = $2,600
4. If the job has travel benefits (meal allowance, per diem, mileage rate), those are added as benefit line items
5. Sets the invoice as a "receivable": money owed to you
6. Links the invoice to the job

The invoice appears in your Finance → Invoices module (\`/dashboard/finance/invoices\`) with status "draft". From there you can:

- Edit line items or add custom ones
- Change the due date (default: 30 days from job end)
- Send it (changes status to "sent")
- Mark it paid when payment arrives

## Invoice Details

Each generated invoice includes:
- **Invoice number**: Auto-generated from job number (e.g., INV-J-230000)
- **Client name**: From the job record
- **Issue date**: Job end date
- **Due date**: 30 days after issue
- **Line items**: ST, OT, DT hours with rates and totals
- **Job link**: Click through to the original job

## Linking to Finance

Generated invoices live in the main Finance → Invoices module. When you mark an invoice as paid, you can optionally create a linked financial transaction to track the income in your accounts. This feeds into your 1099 tracking and earnings reports.

## Key Takeaways

- One-click invoice generation from time entries
- Line items auto-calculated from job rates × logged hours
- Invoices integrate with the Finance module for full income tracking
- Keep job rates accurate: they directly determine invoice amounts`,
    },
    {
      slug: "rate-cards",
      title: "Rate Cards",
      section: "Section 3 · Invoices & Rate Cards",
      body: `If you work with the same clients and unions regularly, you don't want to type your rates every time you create a job. Rate cards solve this.

## What is a Rate Card?

A rate card is a saved preset with your pay rates for a specific client, union, and department. For example:

- **CBS Camera Op**: IATSE 317, Camera dept, $65/hr ST, $97.50 OT, $130 DT
- **ESPN Camera Op**: IATSE 317, Camera dept, $70/hr ST, $105 OT, $140 DT
- **BTN Utility**: No union, Utility dept, $45/hr ST, $67.50 OT, $90 DT

## Creating a Rate Card

Go to Dashboard → Rate Cards (\`/dashboard/contractor/rate-cards\`) → New. Fill in:
- **Name**: Descriptive label (client + role)
- **Union Local**: Optional
- **Department**: Camera, Audio, Utility, etc.
- **Rate Type**: Hourly, daily, or flat
- **ST / OT / DT Rates**: Your standard, overtime, and double time hourly rates
- **Benefits**: Optional predefined benefit items (meal allowance, per diem)
- **Travel Benefits**: Mileage rate, meal allowance, per diem amounts

## Using Rate Cards

When creating a new job, select a rate card from the dropdown. All rate fields auto-fill. Each use is counted, so your most-used cards sort to the top.

## Key Takeaways

- Rate cards eliminate repetitive data entry
- Store rates per client/union/department combination
- Most-used cards float to the top of the list
- Benefits and travel benefits can be included in the preset`,
    },
    {
      slug: "pay-stub-scanning",
      title: "Pay Stub Scanning",
      section: "Section 3 · Invoices & Rate Cards",
      body: `Sometimes you receive a pay stub or earnings statement instead of generating your own invoice. Work.WitUS can scan it and extract the data for you.

## How Pay Stub Scanning Works

From a job detail page, click Scan Pay Stub. You can:

1. **Take a photo** of a paper pay stub using your phone camera
2. **Upload a screenshot** of a digital pay stub or earnings report

The image is sent to Gemini Vision, which extracts:
- Hours worked (ST, OT, DT)
- Pay rates
- Gross and net amounts
- Benefits and deductions
- Date range

## Review Before Saving

The extracted data is shown in a preview form. Review and correct any values before saving. Once confirmed, the data pre-fills a time entry and optionally creates a matching invoice record.

This uses the same AI-powered scanning engine as the Scan page (\`/dashboard/scan\`), the same technology that reads receipts and other documents.

## Key Takeaways

- Photograph or screenshot any pay stub to extract data
- AI extracts hours, rates, and benefits automatically
- Always review extracted values before saving
- Great for reconciling what you were paid versus what you invoiced`,
    },
    {
      slug: "venue-knowledge-base",
      title: "Venue Knowledge Base",
      section: "Section 4 · Venues & City Guides",
      body: `You've been to Lucas Oil Stadium a dozen times. You know exactly where to park, which dock to use for load-in, and that the WiFi password changes monthly. But does your replacement know any of that? The Venue Knowledge Base keeps all that institutional knowledge organized and shareable.

## Accessing Venue Info

Go to Dashboard → Venues (\`/dashboard/contractor/venues\`) to see all venues you've worked. Each venue is a contact location tied to a client contact. Click a venue to see its detail page.

## Knowledge Base Fields

Each venue can store structured information:

- **Parking**: Directions, cost, crew validation, gate access times
- **Load-In**: Dock location, freight elevators, badge requirements
- **WiFi**: Network name, password policy, restrictions
- **Power**: Available circuits, distro locations, adapter needs
- **Catering**: Location, hours, dietary options
- **Security**: Check-in process, credential pickup, bag search policy
- **Custom**: Any additional key-value notes specific to this venue

## Venue Schematics

Upload floor plans, camera plots, rigging diagrams, or parking maps via the Schematics upload. Files are stored in Cloudinary and accessible from the venue detail page.

## Sharing with the Crew

Toggle "Shared" on a venue to make your knowledge base entries visible to other contractors who've worked at the same location. This builds a community resource over time.

## Key Takeaways

- Store parking, WiFi, power, catering, and security info per venue
- Upload schematics and floor plans
- Share venue knowledge with other contractors
- Great for onboarding replacements or first-timers at a venue`,
    },
    {
      slug: "city-guides",
      title: "City Guides",
      section: "Section 4 · Venues & City Guides",
      body: `When you travel to a new city for a gig, you want to know the good restaurants, which hotel is close to the venue, and where to find decent coffee at 5 AM. City Guides are your crew's collective travel wisdom.

## Creating a City Guide

Go to Dashboard → Cities (\`/dashboard/contractor/cities\`) → New Guide. Enter the city name, state, and region. Add a description (e.g., "Regularly work Colts and Pacers games here").

## Adding Entries

Each guide contains categorized entries:

- **Restaurant**: Where to eat (name, address, rating 1-5, price range 1-4, notes)
- **Hotel**: Where to stay (proximity to venue, amenities, crew rates)
- **Coffee**: Early morning spots near the venue
- **Gym**: Day pass options for staying active on the road
- **Grocery**: Stock up on meal prep supplies
- **Entertainment**: What to do on off days
- **Transport**: Ride share tips, rental car agencies, parking hacks
- **Other**: Anything else worth noting

## Community Sharing

Toggle "Shared" on your city guide to make it visible to all platform users. Other contractors can contribute their own entries too. Over time, popular work cities build rich, crew-curated travel guides.

## Key Takeaways

- Build restaurant/hotel/coffee/gym guides for every city you travel to
- Rate and annotate entries with insider tips
- Share guides with the community for collective benefit
- Great for planning travel logistics before you arrive`,
    },
    {
      slug: "union-contract-chat",
      title: "Union Contract Chat (RAG)",
      section: "Section 5 · Union Tools",
      body: `Union contracts are dense documents. Finding the answer to "What's my meal penalty after 6 hours?" can mean flipping through 80 pages of legalese. The Union Contract Chat uses AI to search your uploaded contracts and give you quick answers.

## Uploading a Contract

Go to Dashboard → Union (\`/dashboard/contractor/union\`). Click Upload Document. Select your union contract, bylaws, rate sheet, or work rules (PDF or text file). Choose the document type and enter the union local.

The system extracts the text, splits it into chunks, and generates semantic embeddings. This process takes a few moments; you'll see the status change from "processing" to "ready".

## Chatting with Your Contracts

Switch to the Chat tab. Type a question in plain language:

- "What's the OT threshold for IATSE 317 Indiana?"
- "What are my meal penalty rights?"
- "How much notice is required for a call time change?"
- "What's the minimum crew call?"

The AI searches your uploaded documents for relevant sections, then generates an answer based on the actual contract language.

## Important Disclaimer

Every response includes a mandatory disclaimer: **"This is an AI-generated summary for reference only. It is not legal advice. Always consult your union representative or the official contract document for authoritative answers."**

The AI is a research tool, not a legal advisor. Always verify important decisions against the original document.

## Community Submissions

You can submit documents to the platform admin for inclusion in a shared knowledge base. Go to Union → Submit to Community. Upload the document with details, and the admin will review and approve or reject it. Approved documents become searchable by all users.

## Key Takeaways

- Upload union contracts, bylaws, and rate sheets for AI-powered search
- Ask questions in plain language, get answers from your actual documents
- Always verify AI answers against the original contract
- Submit documents to the community for shared benefit`,
    },
    {
      slug: "union-memberships",
      title: "Union Memberships and Dues",
      section: "Section 5 · Union Tools",
      body: `Most contractors belong to at least one union; many belong to two or three. Tracking membership status, dues schedules, and payment history across multiple locals can be a headache. The Memberships module keeps it all in one place.

## Adding a Membership

Go to Dashboard → Memberships (\`/dashboard/contractor/union/memberships\`) → Add Membership. Fill in:

- **Union Name**: e.g., IATSE, IBEW, CWA
- **Local Number**: e.g., 317, 1220
- **Member ID**: Your union card number
- **Status**: Active, inactive, suspended, retired, or honorary
- **Join Date**: When you joined
- **Dues Amount**: How much per period
- **Dues Frequency**: Monthly, quarterly, semi-annual, or annual
- **Next Dues Date**: When your next payment is due
- **Initiation Fee**: One-time fee (and whether it's been paid)

## Color-Coded Urgency

Your membership cards show urgency at a glance:
- **Red**: Overdue (dues past due date)
- **Yellow**: Due soon (within 30 days)
- **Green**: Current (paid up)

## Recording Payments

Click any membership to expand it. Click Record Payment to log a dues payment with amount, date, period covered, payment method, and confirmation number. Each payment automatically advances your next dues date by the frequency interval (e.g., quarterly → +3 months).

## Linking to Finance

You can optionally link dues payments to financial transactions in your Finance module. This keeps your dues records next to the rest of your money records at tax time.

## Dues Summary

The Dues Summary view shows: total paid YTD across all unions, overdue memberships, upcoming payments, and current status.

## Key Takeaways

- Track memberships across multiple unions and locals
- Color-coded cards show payment urgency at a glance
- Recording a payment auto-advances the next due date
- Link dues to financial transactions to keep your records together`,
    },
    {
      slug: "inviting-colleagues",
      title: "Inviting Fellow Contractors",
      section: "Section 5 · Union Tools",
      body: `Work.WitUS is more useful when your crew is on it too. The invite system lets you bring in fellow contractors with a simple email.

## Sending an Invite

Go to Dashboard → Invite (\`/dashboard/contractor/invite\`, in the contractor nav). Enter your colleague's email address and click Send Invite.

They'll receive a magic link email. When they click it, they create an account with Contractor Hub access automatically granted.

## Invite Limits

Each contractor can send up to 10 invites. The invite list shows the status of each one:
- **Pending**: Invite sent, not yet accepted
- **Accepted**: They've created an account

## Why Invite?

When your crew is on Work.WitUS:
- Share venue knowledge base entries
- Contribute to city guides together
- Post jobs on the board when you need a replacement
- Build a network of trusted colleagues with shared resources

## Key Takeaways

- Send up to 10 invites to fellow contractors
- Recipients get a magic link: no signup friction
- More crew on the platform = better shared knowledge`,
    },
    {
      slug: "reports-and-1099-tracking",
      title: "Reports and 1099 Tracking",
      section: "Section 6 · Reports & Collaboration",
      body: `At the end of the year, you need to know exactly how much each client paid you. The Reports module gives you that visibility all year long.

## Earnings by Client

Go to Dashboard → Reports (\`/dashboard/contractor/reports\`). The default view shows earnings grouped by client for the current year. Each client row shows total hours, total earned, and number of jobs. This is your 1099 tracker.

## 1099 Threshold Tracking

The page shows the threshold it uses ("1099 Threshold: $600") and puts a 1099 badge on each client who has paid you more than that. The IRS sets the real reporting threshold, and it changes, so check the current figure with the IRS or your tax preparer before you rely on the badge. The badge still helps you plan for tax season and notice which 1099s to expect.

## Benefits Accrued

YTD benefits earned across all jobs: meal allowances, per diem, mileage reimbursements, and any custom benefit line items.

## Key Takeaways

- Track earnings per client to anticipate 1099 forms
- See which clients the page marks with a 1099 badge, then confirm the current IRS threshold`,
    },
    {
      slug: "job-board-and-comparison",
      title: "Job Board and Job Comparison",
      section: "Section 6 · Reports & Collaboration",
      body: `Sometimes you can't work a gig and need a replacement. Sometimes you're looking for extra work. The Job Board and Job Comparison tools help with both.

## Job Board

Go to Dashboard → Board (\`/dashboard/contractor/board\`). The board shows jobs other contractors have marked as public. These are gigs where someone needs a replacement or wants to share an opportunity.

**Finding Work:** Browse available jobs by date, location, and client. When you find one that interests you, click Request to send a message to the original contractor. They can accept (transferring the job to you) or decline.

**Posting for Replacement:** From any of your jobs, toggle "Public" to list it on the board. Add a note explaining what you need (e.g., "Can't work Dec 22, need camera op replacement at Lucas Oil"). When someone requests it, you'll see their profile and can approve or decline.

## Job Comparison

Go to Dashboard → Compare (\`/dashboard/contractor/compare\`). Select 2-4 jobs and see them side by side:

- **Total Pay**: Gross earnings per job
- **Hours Worked**: ST, OT, DT breakdown
- **Effective Rate**: Total pay ÷ total hours (true hourly rate after OT)
- **Benefits**: Meal allowances, per diem, mileage reimbursement
- **Expenses**: Linked expenses
- **Net Earnings**: Total pay minus expenses

This helps you evaluate which clients, events, and unions are most profitable. Over a season, patterns emerge: you might discover that a lower-rate client with no OT actually pays less per hour than a higher-rate client with consistent 10-hour days.

## Key Takeaways

- Post jobs you can't work to find replacements
- Browse the board for extra gigs
- Compare jobs side by side to find your most profitable work
- Effective rate (pay ÷ hours) reveals true job value`,
    },
  ],
};
