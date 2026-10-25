import type { AuthoredCourse, AuthoredLesson } from "./authored-course";

// FIRM-01 · "Read the Statements". Slug `read-the-statements`. Series `how-a-firm-works` ("How a Firm
// Works"), code FIRM, position 01, linear, no track. FIRM-01 is the prerequisite the ElementaryMBA plan
// names for FIRM-02, 07, 08 and 99.
//
// RESEARCH TIER 2 (docs/course-method/README.md; BAM's answer 3): money is at stake, because a learner
// who misreads a filing can misjudge a company. Brief: cloud-briefs/firm-01/00-approved-brief.md,
// APPROVED by BAM on 2026-10-25; his answers in its section 11 override earlier proposals.
// Evidence:  cloud-briefs/firm-01/research/read-the-statements-evidence.md (researched 2026-10-23).
//            Every ID cited in the comments below (F, E, A, M, R, N) points into it. Only items the
//            pack marks V (VERIFIED) are asserted; I (inferred) items appear only with their working
//            shown in the lesson; NOT FOUND items (N1 to N9) are not taught. Every figure is read from
//            ONE filing: Chipotle Mexican Grill, Inc., Form 10-K for the fiscal year ended December 31,
//            2025, filed February 4, 2026, accession 0001058090-26-000009, at the printed page the pack
//            names.
//
// SCHOOLS (the preview rule, BAM 2026-10-23). Seeded on ElementaryMBA (scripts/seed-speedway.ts,
// category Business Core), the home of the series, as READ_THE_STATEMENTS_COURSE; and on Learn.WitUS
// (scripts/seed-courses.ts, category Money & Property) as READ_THE_STATEMENTS_LEARN_COURSE, a preview
// listed in src/lib/series-previews.ts. The Learn.WitUS copy adds one closing lesson,
// `the-series-continues`, which names ElementaryMBA and links to its front page (BAM's answer 6), and
// three final-quiz questions on it. It sits just before the final quiz, so the final still comes last
// and the lesson is assessed in its own section. Lesson bodies link to no other course, because one text
// seeds to two schools (brief section 3). The link is https://elementarymba.com/, the domain the README
// and scripts/seed-tenants.ts give for the school; the network proxy refused a fetch of it on
// 2026-10-25, so BAM confirms it before release (it is in the PR's list for him).
//
// VISIBILITY: PUBLIC and free on both schools (BAM's answer 4: free for the first 100 students; the
// capped promotion is separate, later work). HELD ("Coming soon") with the brief's publishHoldReason
// until the qualified reviewer BAM has named signs off on every lesson marked QR, and until
// ElementaryMBA's courses are vetted.
//
// MARKED LESSONS. Every teaching lesson from 1 to 14 opens with the QR release marker (a CPA or a college
// accounting instructor). `the-series-continues` carries none: it says where the series continues and
// holds nothing for an accountant to check. What the reviewer checks, lesson by lesson, is in brief
// section 9; lesson 2's debit and credit rules are taught as reasoning from the IRS's definition and
// Regulation S-X's heading (the pack has no source stating the rules outright), and lesson 12's reading
// of "no outstanding debt" beside a liabilities-to-equity ratio of about 2.18 (A8) is flagged in the
// lesson itself for the reviewer (BAM's answer 8).
//
// NOT ADVICE (the house posture in credit-decisions-course.ts). Said in prose in lesson 1, lesson 9 and
// the capstone: the course describes what a public filing says; it does not say whether to buy, hold or
// sell anything, names no stock as good or bad, uses no market price, P/E ratio, valuation or forecast,
// and dates every figure in the lesson.
//
// RIGHTS (the source-hosting rule in CLAUDE.md, decided per source; evidence pack section 6):
//  - Tier A, may be hosted: SEC material (the Beginners' Guide, the 2011 investor bulletin, the Form
//    10-K instructions, the 2020 press release, the 12(g) small entity compliance guide, the Search
//    Filings page), the CFR sections (federal works, 17 U.S.C. 105), IRS Publication 583 and the two SBA
//    pages. Never the SEC seal or logos (R2).
//  - Tier B, link only: the Chipotle 10-K (filer copyright is a question for counsel, N7; short quotes
//    with page locators, no hosted copy, no screenshots), the two EDGAR listing pages for it, and the
//    Journal of Accountancy article.
//  - Tier C, cite by title only: FASB text. Named in lesson 12 through the Journal of Accountancy's report;
//    not read (N3), not quoted, not paraphrased.
//
// HEDGES WRITTEN INTO LESSONS (each has a check in src/lib/research-checks.ts, keys rts-*):
//  - L4 and L12 (and the Sources notes on every CFR entry): the regulations are quoted from the govinfo
//    edition revised as of April 1, 2025; later amendments were not checked (N2). rts-cfr-currency.
//  - L8: a newer 10-K for fiscal 2026 is due in early 2027, and the course does not update its figures
//    in place. rts-newer-10k.
//  - L12: the FASB's own pages were not read; the Concepts Statement is named through the Journal of
//    Accountancy. rts-fasb-concepts-unread.
//
// STANDARDS: excused with one BACKLOG line in scripts/check-standards-coverage.ts (brief section 3).
//
// House style, matching the-slide-rule-course.ts: `section` on every lesson; lesson titles numbered
// "1 · Title"; flush-left single-line `:::reveal q ||| a`; recallContent from the second teaching
// lesson on, quizzing the lesson before; numeric drills as `exercise` items with computedAnswer: true;
// a `## Vocabulary` block above an APA 7 `## Sources` block on every teaching lesson, every entry with a
// locator and a tier; a quiz per section pooled to round(words / 35), clamped 40 to 100, serving 5,
// passing 80, shuffled, with correctIndex rotated and all four options within 8 characters of each other;
// a final pooling 40 or more, serving 10, placed last. Invented teaching numbers are round, said to be
// invented, and never attributed to the company. No named individuals from the filing. American spelling
// in prose; quotations keep their own. No em or en dashes anywhere.

// ── Source helpers ────────────────────────────────────────────────────────────────────────────────
const CMG_10K =
  "Chipotle Mexican Grill, Inc. (2026, February 4). *Form 10-K: Annual report for the fiscal year ended December 31, 2025* (Accession No. 0001058090-26-000009). U.S. Securities and Exchange Commission. https://www.sec.gov/Archives/edgar/data/1058090/000105809026000009/cmg-20251231.htm";
const EDGAR_LIST =
  "U.S. Securities and Exchange Commission. (n.d.-a). *EDGAR company search: Chipotle Mexican Grill Inc, CIK 0001058090, Form 10-K filings*. Retrieved October 23, 2026, from https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001058090&type=10-K&dateb=&owner=include&count=40";
const SEC_SEARCH =
  "U.S. Securities and Exchange Commission. (n.d.-b). *Search filings*. Retrieved October 23, 2026, from https://www.sec.gov/search-filings";
const EDGAR_INDEX =
  "U.S. Securities and Exchange Commission. (n.d.-c). *Filing index: Chipotle Mexican Grill Inc, Form 10-K, accession 0001058090-26-000009*. Retrieved October 23, 2026, from https://www.sec.gov/Archives/edgar/data/1058090/000105809026000009/0001058090-26-000009-index.htm";
const SEC_GUIDE =
  "U.S. Securities and Exchange Commission. (2014, January 12). *Beginners' guide to financial statements*. https://www.sec.gov/about/reports-publications/beginners-guide-financial-statements";
const SEC_BULLETIN =
  "U.S. Securities and Exchange Commission, Office of Investor Education and Advocacy. (2011, September). *Investor bulletin: How to read a 10-K*. https://www.sec.gov/files/reada10k.pdf";
const FORM_10K =
  "U.S. Securities and Exchange Commission. (2025). *Form 10-K: General instructions* (SEC 1673 (02-25)). https://www.sec.gov/files/form10-k.pdf";
const SEC_2020 =
  "U.S. Securities and Exchange Commission. (2020, November 19). *SEC adopts amendments to modernize and enhance Management's Discussion and Analysis and other financial disclosures* [Press release 2020-290]. https://www.sec.gov/news/press-release/2020-290";
const SEC_12G =
  "U.S. Securities and Exchange Commission. (2016, May 24). *Changes to Exchange Act registration requirements to implement Title V and Title VI of the JOBS Act* [Small entity compliance guide]. https://www.sec.gov/file/small-entity-compliance-guide-44";
const CFR_3_01 =
  "Consolidated balance sheets, 17 C.F.R. § 210.3-01 (2025). https://www.govinfo.gov/content/pkg/CFR-2025-title17-vol3/pdf/CFR-2025-title17-vol3-sec210-3-01.pdf";
const CFR_3_02 =
  "Consolidated statements of comprehensive income and cash flows, 17 C.F.R. § 210.3-02 (2025). https://www.govinfo.gov/content/pkg/CFR-2025-title17-vol3/pdf/CFR-2025-title17-vol3-sec210-3-02.pdf";
const CFR_3_04 =
  "Changes in stockholders' equity and noncontrolling interests, 17 C.F.R. § 210.3-04 (2025). https://www.govinfo.gov/content/pkg/CFR-2025-title17-vol3/pdf/CFR-2025-title17-vol3-sec210-3-04.pdf";
const CFR_5_02 =
  "Balance sheets, 17 C.F.R. § 210.5-02 (2025). https://www.govinfo.gov/content/pkg/CFR-2025-title17-vol3/pdf/CFR-2025-title17-vol3-sec210-5-02.pdf";
const CFR_303 =
  "Management's discussion and analysis of financial condition and results of operations, 17 C.F.R. § 229.303 (2025). https://www.govinfo.gov/content/pkg/CFR-2025-title17-vol3/pdf/CFR-2025-title17-vol3-sec229-303.pdf";
const IRS_583 =
  "Internal Revenue Service. (2024). *Publication 583: Starting a business and keeping records* (Rev. December 2024). https://www.irs.gov/publications/p583";
const SBA_FINANCES =
  "U.S. Small Business Administration. (n.d.-a). *Manage your finances*. Retrieved October 23, 2026, from https://www.sba.gov/business-guide/manage-your-business/manage-your-finances";
const SBA_7A =
  "U.S. Small Business Administration. (n.d.-b). *7(a) loans*. Retrieved October 23, 2026, from https://www.sba.gov/funding-programs/loans/7a-loans";
const DREW_2021 =
  "Drew, J. (2021, December 23). FASB issues 2 new financial accounting concept statements. *Journal of Accountancy*. https://www.journalofaccountancy.com/news/2021/dec/fasb-2-inancial-accounting-concept-statements.html";
const FASB_CON8 =
  "Financial Accounting Standards Board. (2021). *Conceptual framework for financial reporting* (Statement of Financial Accounting Concepts No. 8, Chapters 4 and 7).";

/** Tier notes appended to each Sources entry (the source-hosting rule in CLAUDE.md). */
const TA = "Tier A (a federal work; may be hosted).";
const TB = "Tier B (link only, never rehost).";
const TC = "Tier C (cite by title only; not read, no link, no quotation).";
/** Every CFR entry says which edition was read (N2; research check rts-cfr-currency). */
const CFR_EDITION = "Read in the edition revised as of April 1, 2025; later amendments not checked.";

/** The release marker every teaching lesson opens with (parsed by the seeder into review_needs). */
const QR = "> **Before release:** needs a qualified reviewer (QR): a CPA or a college accounting instructor.";

/** The filing's date line, said in every lesson that uses a figure. */
const DATED = "fiscal 2025, Form 10-K filed February 4, 2026";

const S1 = "1 · The equation and the entry";
const S2 = "2 · The statements";
const S3 = "3 · Open the filing";
const S4 = "4 · Judgment";
const S5 = "5 · Capstone: five questions about one filing";

export const READ_THE_STATEMENTS_COURSE: AuthoredCourse = {
  title: "Read the Statements",
  description:
    "Open one real annual report on the SEC's free EDGAR system and learn financial accounting from it. You start with the accounting equation (assets equal liabilities plus shareholders' equity) and the double entry that keeps it true, then the timing question that separates cash from accrual, worked through gift cards and a rewards program. Then you read each of the four statements in that one filing (the balance sheet, the income statement, the cash flow statement and the statement of shareholders' equity) and prove that they tie together: net income into retained earnings, and the cash flow statement's ending cash into the balance sheet. Then you read the filing as a whole: how to find a 10-K and cite it by Item and page, what management's discussion says and whether the statements agree, which note holds the policy behind a number, what the auditor's opinion promises and what it does not, which estimates management calls critical, and which companies have to file at all. The one filing is Chipotle Mexican Grill's Form 10-K for fiscal 2025, filed February 4, 2026, chosen because it is short, has one reportable segment and no outstanding borrowings. Every figure is dated to that filing. The course closes with five questions you answer about a company from its own filing, page by page. It describes what a public document says; it is information, not investment advice, and it says so in three lessons. The first course in the How a Firm Works series.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1: The equation and the entry
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "two-sides-of-every-transaction",
      title: "1 · Two sides of every transaction",
      section: S1,
      body: `${QR}

**What this course is for.** By the end you should be able to open a company's annual report, find its four financial statements, read what each one says, and check that they agree with each other. You will learn accounting the way an analyst first meets it: from a real filing, not a made-up company.

**One equation runs the whole system.** The U.S. Securities and Exchange Commission (SEC) publishes a free *Beginners' Guide to Financial Statements*. It names "four main financial statements": balance sheets, income statements, cash flow statements and statements of shareholders' equity. And it states the rule underneath all of them:

**ASSETS = LIABILITIES + SHAREHOLDERS' EQUITY**

Read it in plain words. **Assets** are what a business owns or controls: cash, food in the walk-in, ovens, the right to use a building it leases. **Liabilities** are what it owes to others. **Shareholders' equity** is what is left for the owners after the debts are counted. The Small Business Administration (SBA) calls the balance sheet a statement that "operates as a snapshot of your business financials." The equation is what the snapshot shows.

**Why every transaction touches two places.** The equation must stay true after every event, so nothing can change on one side alone. Suppose, as an invented example with round numbers, you start a food truck and put in $5,000 of your own money. Cash (an asset) goes up $5,000, and equity (your share) goes up $5,000. Both sides rose by the same amount. Now you buy a $1,000 grill with cash. One asset goes down, another goes up, and the total does not move. Now you borrow $2,000. Cash goes up, and a liability goes up by the same amount. Every event moves at least two things, and the two sides stay equal. Lesson 2 gives that habit its name: double entry.

**Proof on a real company.** This course reads one filing: Chipotle Mexican Grill's annual report on Form 10-K for ${DATED}, accession number 0001058090-26-000009. The balance sheet is on printed page 36. Its figures are printed "(in thousands, except per share data)," so 8,994,531 on the page means $8,994,531,000, or about $8.99 billion. As of December 31, 2025:

| Line on page 36 | December 31, 2025 | December 31, 2024 |
|---|---|---|
| Total assets | 8,994,531 | 9,204,374 |
| Total liabilities | 6,163,924 | 5,548,828 |
| Total shareholders' equity | 2,830,607 | 3,655,546 |

Add the two lower lines for 2025: 6,163,924 + 2,830,607 = 8,994,531. That is total assets, to the last thousand dollars. Do the same for 2024: 5,548,828 + 3,655,546 = 9,204,374. The equation holds in both columns. It is not a summary someone chose to print. It is a condition the books must meet.

**Why this filing.** It is short and easy to read for a first try. The company describes itself in its first note (page 40): "We develop and operate restaurants that serve a relevant menu of burritos, burrito bowls, quesadillas, tacos, and salads." You already know that business from the counter. The same note says it owned 4,042 restaurants at December 31, 2025, and that it reports its operations as "one reportable segment," so there is one set of numbers to follow, not several. It has no bank loans to explain: its debt note (Note 12, page 61) says "We had no outstanding borrowings under the credit facility." And its revenue rules, as lesson 3 shows, make the timing of a sale easy to see through gift cards.

**How every figure in this course is dated.** A balance sheet is true "as of" one date, and an annual report is replaced every year. So every number in this course carries its source: ${DATED}, with the printed page. When you see a figure here, you can find it on that page yourself.

**What this course is not.** This course describes what a public document says. It does not say whether to buy, hold or sell any stock, names no company's shares as good or bad, uses no market price and makes no forecast. The company is named only as the author of the filing you are reading. **This is information about how to read financial statements, not investment advice.**

:::reveal State the accounting equation in words. ||| What a business owns (assets) equals what it owes (liabilities) plus what is left for the owners (shareholders' equity).

:::reveal If a business borrows $2,000 in cash, which two things change, and in which direction? ||| Cash, an asset, goes up $2,000, and a liability goes up $2,000. Both sides rise by the same amount, so the equation stays true.

:::reveal On page 36, total assets at December 31, 2025 are 8,994,531. What does that number mean in dollars? ||| The statements are in thousands, so it means $8,994,531,000, about $8.99 billion.

## Vocabulary
- **Asset**: something the business owns or controls, such as cash, inventory or equipment.
- **Liability**: an amount the business owes to someone else.
- **Shareholders' equity**: what is left for the owners after liabilities are subtracted from assets.
- **Balance sheet**: the statement of assets, liabilities and equity as of one date.
- **Accession number**: the number EDGAR gives one filing, used to cite exactly that document.

## Sources
- ${SEC_GUIDE} Locator: section "Balance Sheets" (the four main statements; the equation). ${TA}
- ${SBA_FINANCES} Locator: the balance sheet paragraph ("snapshot"). ${TA}
- ${CMG_10K} Locator: Item 8, p. 36, Consolidated Balance Sheets (totals; "in thousands"); Note 1, p. 40 (the business, 4,042 restaurants, one reportable segment); Note 12, p. 61 (no outstanding borrowings). ${TB}
- ${EDGAR_INDEX} Locator: the index header (filing date February 4, 2026; accession number). ${TB}`,
    },
    {
      slug: "debits-and-credits",
      title: "2 · Debits and credits",
      section: S1,
      recallContent: [
        {
          prompt: "What is the accounting equation?",
          answer: "Assets = liabilities + shareholders' equity.",
        },
        {
          prompt: "On page 36 of the fiscal 2025 10-K, what do total liabilities plus total shareholders' equity add up to?",
          answer: "8,994,531 (thousands), which is total assets: 6,163,924 + 2,830,607.",
        },
      ],
      body: `${QR}

**The system that keeps the equation true.** Lesson 1 showed that every event moves at least two things. Bookkeepers have a method that forces this to happen every time. The Internal Revenue Service (IRS) describes it in *Publication 583*, under the heading "Bookkeeping System":

- "A double-entry bookkeeping system uses journals and ledgers."
- "Transactions are first entered in a journal and then posted to ledger accounts."
- "In the double-entry system, each account has a left side for debits and a right side for credits."
- "It is self-balancing because you record every transaction as a debit entry in one account and as a credit entry in another."
- "Under this system, the total debits must equal the total credits after you post the journal entries to the ledger accounts."

**Journal and ledger.** The **journal** is the diary: each transaction written down in date order, with its debit and its credit side by side. The **ledger** is the filing cabinet: one page, or account, for each item (cash, inventory, unearned revenue, sales), where the journal's lines are posted so each account shows its running balance.

**Debit and credit are sides, not good and bad.** In everyday speech a "credit" sounds like a gift. In bookkeeping, debit means the left side of an account and credit means the right side. That is all. Whether a debit makes an account bigger or smaller depends on which kind of account it is.

**Which side each kind of account lives on.** The pack of sources this course uses has no single sentence that states the rule, so here it is worked out from two that do, and a reviewer checks it before release.

1. The SEC's rules for public company balance sheets, Regulation S-X, list the lines a balance sheet must show. The first heading in that list reads "ASSETS AND OTHER DEBITS." So assets are debit-side items: an asset account grows on its left, debit, side.
2. The IRS says total debits must equal total credits. Lesson 1 says assets equal liabilities plus equity. If assets are the debits, then liabilities and equity must be the credits, or the two totals could not match. So a liability or equity account grows on its right, credit, side.
3. Revenue makes the owners better off, so it adds to equity: revenue is recorded as a credit. An expense makes the owners worse off, so it takes away from equity: an expense is recorded as a debit.

| Kind of account | Grows with a | Shrinks with a |
|---|---|---|
| Asset (cash, inventory) | Debit | Credit |
| Liability (unearned revenue) | Credit | Debit |
| Equity | Credit | Debit |
| Revenue | Credit | Debit |
| Expense | Debit | Credit |

**Three worked entries.** These numbers are invented and round, to show the method. They are not the company's.

*Suppose you sell a burrito for $10 in cash.* Cash, an asset, grows: debit Cash $10. You earned revenue: credit Sales revenue $10. Debits $10, credits $10.

*Suppose you buy $300 of tortillas and pay cash.* Inventory, an asset, grows: debit Inventory $300. Cash, another asset, shrinks: credit Cash $300. One asset traded for another, and the totals did not move.

*Suppose a customer buys a $25 gift card.* Cash grows: debit Cash $25. But you have not served any food yet. You owe the customer a meal, so the other side is a liability: credit Unearned revenue $25. The filing you are reading records gift cards the same way, and lesson 3 shows exactly where it says so.

| Entry | Debit | Credit |
|---|---|---|
| Burrito sold for cash | Cash 10 | Sales revenue 10 |
| Tortillas bought for cash | Inventory 300 | Cash 300 |
| Gift card sold | Cash 25 | Unearned revenue 25 |
| **Totals** | **335** | **335** |

The two columns match. That is what "self-balancing" means: if they ever do not match, an entry is wrong, and you know to look for it.

**The vocabulary lives in the rules, too.** You might think "debit" is bookkeepers' slang. It is in federal regulation. The heading "ASSETS AND OTHER DEBITS" is in the Code of Federal Regulations, at 17 CFR 210.5-02, which tells every public company what its balance sheet must show. When you read the 10-K's balance sheet in lesson 4, you are reading a page built to that list.

:::reveal In double entry, which side of an account is the debit side? ||| The left side. The IRS: "each account has a left side for debits and a right side for credits."

:::reveal You sell a gift card for $25. What are the debit and the credit? ||| Debit Cash $25 (an asset grows); credit Unearned revenue $25 (a liability grows, because you still owe the customer a meal).

:::reveal Why can a bookkeeper find a mistake just by adding columns? ||| Because every entry has equal debits and credits, the totals must match. If they do not, some entry is wrong.

## Vocabulary
- **Double entry**: recording every transaction as a debit in one account and a credit in another, so the books balance.
- **Journal**: the date-order record where each transaction is first written down.
- **Ledger**: the set of accounts that journal entries are posted to, each with its own balance.
- **Debit**: an entry on the left side of an account; it grows assets and expenses.
- **Credit**: an entry on the right side of an account; it grows liabilities, equity and revenue.

## Sources
- ${IRS_583} Locator: section "Bookkeeping System" (journals and ledgers; left side debits, right side credits; self-balancing; total debits equal total credits). ${TA}
- ${CFR_5_02} Locator: § 210.5-02, printed p. 301, the opening heading "ASSETS AND OTHER DEBITS." ${CFR_EDITION} ${TA}
- ${SEC_GUIDE} Locator: section "Balance Sheets" (the equation). ${TA}`,
    },
    {
      slug: "when-a-sale-counts",
      title: "3 · When a sale counts",
      section: S1,
      recallContent: [
        {
          prompt: "Which side of an account is the debit side, and what does a debit do to an asset?",
          answer: "The left side. A debit makes an asset account grow.",
        },
        {
          prompt: "A customer buys a $25 gift card. What are the debit and the credit?",
          answer: "Debit Cash $25; credit Unearned revenue $25, a liability, because the meal has not been served.",
        },
      ],
      exercise: {
        instructions: "Use the Chipotle Rewards figures from Note 3, page 48 (in thousands of dollars). Type the number with or without commas.",
        items: [
          {
            prompt: "Rewards liability at the start of 2025 was 56,806. Add the 183,617 of revenue deferred during the year. What is the subtotal?",
            answer: "240,423",
            accept: ["240423"],
            explanation: "56,806 + 183,617 = 240,423: what the company owed in rewards before any were used up.",
            computedAnswer: true,
          },
          {
            prompt: "Subtract the 176,624 of revenue recognized during 2025 from 240,423. What is the ending rewards liability?",
            answer: "63,799",
            accept: ["63799"],
            explanation: "240,423 minus 176,624 = 63,799, the ending balance Note 3 prints. The roll-forward ties.",
            computedAnswer: true,
          },
        ],
      },
      body: `${QR}

**Two clocks.** Money arrives on one date. The work that earns it may happen on another. Accounting has to pick which date a sale counts on, and there are two methods.

**The SBA's plain words.** The Small Business Administration puts the difference in two sentences. "The accrual method puts transactions on the books immediately upon completing the sale." "The cash method only records this once payment has been received." Under the **cash method**, a sale counts when the money comes in. Under the **accrual method**, it counts when the sale is completed, whether or not the money has arrived.

**A warning about the IRS's version.** *Publication 583* also defines the two methods: "Under the cash method, you report income in the tax year you receive it." "Under an accrual method, you generally report income in the tax year you earn it." Notice the words "tax year." Those are rules for filing a tax return. A public company's financial statements are judged by a different standard: the auditor's opinion in this filing (lesson 11) says they are presented "in conformity with U.S. generally accepted accounting principles." The IRS wording is useful for the idea, but do not mistake it for the rule a 10-K follows. For that, read the company's own policy, which is next.

**The filing's rule for an ordinary sale.** Note 1 of the 10-K (page 44) says: "We generally recognize revenue, net of discounts and incentives, when payment is tendered at the point of sale." **Recognize** is the accounting word for "put on the books as revenue." At a restaurant counter, the meal is handed over and paid for at the same moment, so for an ordinary sale the two clocks read the same time. Here cash and accrual give the same answer.

**Where the clocks split: gift cards.** Note 1 (page 45) goes on: "Gift card balances are initially recorded as unearned revenue. We recognize revenue from gift cards when the gift card is redeemed by the guest." This is accrual in action. When someone buys a gift card, the company has the cash but has served nothing. So the money goes into **unearned revenue**, which is a liability: the company owes that person food. Only when the card is used does the liability shrink and revenue appear. It is the same entry you made in lesson 2.

**How big it is.** On the balance sheet (page 36), unearned revenue sits among the current liabilities. It was 240,375 at December 31, 2025 and 238,577 a year earlier (in thousands). Note 3 (page 48) breaks out the gift card part: 174,600 at the end of 2025 and 181,771 at the end of 2024.

**Rewards points work the same way.** Note 1 says the deferred revenue for the Chipotle Rewards program "is included in unearned revenue on our consolidated balance sheets." When a member earns points, part of what they paid is held back as owed, because the company has promised free food later. Note 3 prints how that liability moved during 2025 (in thousands):

| Chipotle Rewards liability, 2025 | Amount |
|---|---|
| Beginning balance | 56,806 |
| Revenue deferred (added during the year) | 183,617 |
| Revenue recognized (used up during the year) | (176,624) |
| Ending balance | 63,799 |

This table is a **roll-forward**: start, plus what came in, minus what went out, equals end. Check it: 56,806 + 183,617 = 240,423, and 240,423 minus 176,624 = 63,799. It ties. The parentheses around 176,624 mean it is subtracted; financial statements print negative numbers that way. You will see roll-forwards again in lesson 7, where one ties two statements together.

**Why this matters for reading.** If you counted gift card cash as revenue the day it came in, revenue would run ahead of the food actually served. Accrual makes revenue follow the work. That is why, on a balance sheet, a liability can be a sign of customers who have already paid.

:::reveal Under the accrual method, when does a sale count? ||| When the sale is completed. The SBA: accrual "puts transactions on the books immediately upon completing the sale."

:::reveal A guest buys a gift card. Why is it not revenue yet? ||| The company has the cash but has served nothing. The filing records gift card balances "initially" as unearned revenue, a liability, and recognizes revenue when the card is redeemed.

:::reveal Why should you not treat Publication 583's definitions as the rules a 10-K follows? ||| They are tax definitions, framed by "tax year." Financial statements follow generally accepted accounting principles, so read the company's own policy note.

## Vocabulary
- **Cash method**: a sale counts when the payment is received.
- **Accrual method**: a sale counts when it is completed, even if payment comes later or came earlier.
- **Recognize**: to record an amount as revenue (or expense) on the books.
- **Unearned revenue**: cash received for goods or service not yet delivered; a liability.
- **Roll-forward**: a table that starts with a beginning balance, adds and subtracts the year's changes, and ends at the ending balance.

## Sources
- ${SBA_FINANCES} Locator: the accounting methods paragraph (accrual and cash). ${TA}
- ${IRS_583} Locator: section "Choosing an Accounting Method" (cash and accrual, framed by tax year). ${TA}
- ${CMG_10K} Locator: Note 1, p. 44, Revenue Recognition ("point of sale"); Note 1, p. 45, Gift Cards and Chipotle Rewards; Item 8, p. 36 (unearned revenue); Note 3, p. 48 (gift card liability; rewards roll-forward). ${TB}`,
    },
    {
      slug: "section-1-quiz",
      title: "Section 1 quiz · The equation and the entry",
      section: S1,
      body: "A graded check on the accounting equation, double entry, and when a sale counts, all read from the fiscal 2025 10-K. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "What does the SEC's Beginners' Guide give as the accounting equation?", options: ["Assets = liabilities + shareholders' equity", "Assets = revenue + shareholders' equity", "Liabilities = assets + shareholders' equity", "Equity = revenue minus total liabilities"], correctIndex: 0, explanation: "The guide states it in capitals: ASSETS = LIABILITIES + SHAREHOLDERS' EQUITY (lesson 1).", sourceLessonSlug: "two-sides-of-every-transaction" },
          { prompt: "How many main financial statements does the SEC guide name?", options: ["Three", "Four", "Five", "Six"], correctIndex: 1, explanation: "Balance sheets, income statements, cash flow statements and statements of shareholders' equity (lesson 1).", sourceLessonSlug: "two-sides-of-every-transaction" },
          { prompt: "In the accounting equation, what are liabilities?", options: ["What the business owns", "What the owners keep", "What the business owes", "What the business earns"], correctIndex: 2, explanation: "Liabilities are amounts owed to others; assets are what the business owns, and equity is what is left for owners (lesson 1).", sourceLessonSlug: "two-sides-of-every-transaction" },
          { prompt: "How does the SBA describe the balance sheet?", options: ["A record of every sale", "A forecast of next year", "A list of tax payments", "A snapshot of finances"], correctIndex: 3, explanation: "The SBA says it \"operates as a snapshot of your business financials\" (lesson 1).", sourceLessonSlug: "two-sides-of-every-transaction" },
          { prompt: "You put $5,000 of your own money into a new business. What happens?", options: ["Cash and equity both rise", "Cash rises, debt falls too", "Equity rises, cash falls", "Cash and debt both rise"], correctIndex: 0, explanation: "Cash, an asset, rises $5,000 and the owner's equity rises $5,000, so both sides of the equation move together (lesson 1).", sourceLessonSlug: "two-sides-of-every-transaction" },
          { prompt: "You buy a $1,000 grill with cash. What happens to total assets?", options: ["They rise by $1,000", "They do not change", "They fall by $1,000", "They double to $2,000"], correctIndex: 1, explanation: "Cash falls $1,000 and equipment rises $1,000: one asset traded for another, so the total stays the same (lesson 1).", sourceLessonSlug: "two-sides-of-every-transaction" },
          { prompt: "A business borrows $2,000. What happens to its liabilities?", options: ["They fall by $2,000", "They stay the same", "They rise by $2,000", "They become equity"], correctIndex: 2, explanation: "Cash rises $2,000 and a liability (the loan) rises $2,000 (lesson 1).", sourceLessonSlug: "two-sides-of-every-transaction" },
          { prompt: "Why must every transaction touch at least two places on the books?", options: ["Tax law sets a limit", "Auditors require it", "Banks demand a copy", "The equation must hold"], correctIndex: 3, explanation: "Assets must still equal liabilities plus equity after every event, so nothing can change on one side alone (lesson 1).", sourceLessonSlug: "two-sides-of-every-transaction" },
          { prompt: "Which filing does this course read?", options: ["Chipotle's fiscal 2025 10-K", "Chipotle's 2025 tax return", "Chipotle's 2025 proxy filing", "An SBA 7(a) loan application"], correctIndex: 0, explanation: "The annual report on Form 10-K for fiscal 2025, filed February 4, 2026 (lesson 1).", sourceLessonSlug: "two-sides-of-every-transaction" },
          { prompt: "On what printed page of the 10-K is the balance sheet?", options: ["Page 24", "Page 36", "Page 40", "Page 61"], correctIndex: 1, explanation: "The Consolidated Balance Sheets are on page 36. Page 24 begins the MD&A, page 40 begins Note 1, and page 61 is the debt note (lesson 1).", sourceLessonSlug: "two-sides-of-every-transaction" },
          { prompt: "The statements are printed in thousands. What does 8,994,531 mean?", options: ["About $8.99 million", "About $899 million", "About $8.99 billion", "About $89.9 billion"], correctIndex: 2, explanation: "8,994,531 thousand dollars is $8,994,531,000, about $8.99 billion (lesson 1).", sourceLessonSlug: "two-sides-of-every-transaction" },
          { prompt: "What were total assets at December 31, 2025, in thousands?", options: ["9,204,374", "6,163,924", "2,830,607", "8,994,531"], correctIndex: 3, explanation: "Page 36: 8,994,531. The 9,204,374 figure is the 2024 column (lesson 1).", sourceLessonSlug: "two-sides-of-every-transaction" },
          { prompt: "What were total liabilities at December 31, 2025, in thousands?", options: ["6,163,924", "5,548,828", "8,994,531", "2,830,607"], correctIndex: 0, explanation: "Page 36: 6,163,924. The 5,548,828 figure is the 2024 column (lesson 1).", sourceLessonSlug: "two-sides-of-every-transaction" },
          { prompt: "What was total shareholders' equity at December 31, 2025, in thousands?", options: ["3,655,546", "2,830,607", "6,163,924", "1,466,953"], correctIndex: 1, explanation: "Page 36: 2,830,607. The 3,655,546 figure is the 2024 column (lesson 1).", sourceLessonSlug: "two-sides-of-every-transaction" },
          { prompt: "On page 36, what do total liabilities plus total equity add up to?", options: ["Total revenue", "Net income", "Total assets", "Cash on hand"], correctIndex: 2, explanation: "6,163,924 + 2,830,607 = 8,994,531, the total assets line. The equation holds (lesson 1).", sourceLessonSlug: "two-sides-of-every-transaction" },
          { prompt: "What were total assets at December 31, 2024, in thousands?", options: ["8,994,531", "5,548,828", "3,655,546", "9,204,374"], correctIndex: 3, explanation: "Page 36, 2024 column: 9,204,374, which equals 5,548,828 + 3,655,546 (lesson 1).", sourceLessonSlug: "two-sides-of-every-transaction" },
          { prompt: "How does the company describe its business in Note 1?", options: ["Restaurants serving burritos and bowls", "A grocery chain selling tortilla chips", "A franchisor that owns no restaurants", "A food supplier to other restaurants"], correctIndex: 0, explanation: "Note 1 (page 40): \"We develop and operate restaurants that serve a relevant menu of burritos, burrito bowls, quesadillas, tacos, and salads\" (lesson 1).", sourceLessonSlug: "two-sides-of-every-transaction" },
          { prompt: "How many reportable segments does the company report?", options: ["None", "One", "Two", "Four"], correctIndex: 1, explanation: "Note 1 says it aggregates its operations \"to one reportable segment\" (lesson 1).", sourceLessonSlug: "two-sides-of-every-transaction" },
          { prompt: "How many restaurants did the company own at December 31, 2025?", options: ["3,726", "3,938", "4,042", "4,376"], correctIndex: 2, explanation: "Note 1 (page 40): 4,042, of which 3,938 were in the United States (lesson 1).", sourceLessonSlug: "two-sides-of-every-transaction" },
          { prompt: "What does Note 12 say about borrowings under the credit facility?", options: ["They were $500 million", "They were repaid early", "They rose during 2025", "There were none outstanding"], correctIndex: 3, explanation: "Note 12 (page 61): \"We had no outstanding borrowings under the credit facility\" (lesson 1).", sourceLessonSlug: "two-sides-of-every-transaction" },
          { prompt: "Why is a balance sheet dated \"as of\" a single day?", options: ["It is a snapshot of one date", "It covers one full fiscal year", "It lists only one day of sales", "It shows the next day's cash"], correctIndex: 0, explanation: "A balance sheet shows what was owned and owed on one date, December 31 here (lesson 1).", sourceLessonSlug: "two-sides-of-every-transaction" },
          { prompt: "What does every figure in this course carry with it?", options: ["A forecast of next year", "Its filing and its page", "A rating of the company", "The stock's market price"], correctIndex: 1, explanation: "Every number is dated to the fiscal 2025 10-K, filed February 4, 2026, with its printed page, so you can find it yourself (lesson 1).", sourceLessonSlug: "two-sides-of-every-transaction" },
          { prompt: "Which of these is part of this course's stated posture?", options: ["It rates the stock", "It forecasts sales", "It describes a filing", "It sets a price target"], correctIndex: 2, explanation: "It describes what a public document says and gives no investment advice (lesson 1).", sourceLessonSlug: "two-sides-of-every-transaction" },
          { prompt: "Which of these does this course leave out on purpose?", options: ["Printed page numbers", "The accession number", "The balance sheet totals", "Any market stock price"], correctIndex: 3, explanation: "It uses no market price and makes no forecast, because those are where reading a filing turns into investment talk (lesson 1).", sourceLessonSlug: "two-sides-of-every-transaction" },
          { prompt: "What is the accession number of the filing this course reads?", options: ["0001058090-26-000009", "0001058090-25-000009", "0001058090-26-000090", "0001058090-24-000009"], correctIndex: 0, explanation: "0001058090-26-000009, from the EDGAR filing index (lesson 1).", sourceLessonSlug: "two-sides-of-every-transaction" },
          { prompt: "Shareholders' equity is best described as what?", options: ["Cash in the bank account", "What is left for owners", "Money owed to suppliers", "Total sales for the year"], correctIndex: 1, explanation: "Equity is what remains for the owners after liabilities are subtracted from assets (lesson 1).", sourceLessonSlug: "two-sides-of-every-transaction" },
          { prompt: "Assets minus liabilities equals what?", options: ["Annual net income", "Total annual revenue", "Shareholders' equity", "Current working capital"], correctIndex: 2, explanation: "Rearrange the equation: assets minus liabilities equals shareholders' equity. 8,994,531 minus 6,163,924 = 2,830,607 (lesson 1).", sourceLessonSlug: "two-sides-of-every-transaction" },
          { prompt: "When did the company file this 10-K?", options: ["December 31, 2025", "January 30, 2026", "March 17, 2026", "February 4, 2026"], correctIndex: 3, explanation: "Filed and accepted February 4, 2026, for the fiscal year ended December 31, 2025 (lesson 1).", sourceLessonSlug: "two-sides-of-every-transaction" },
          { prompt: "According to Publication 583, what does a double-entry system use?", options: ["Journals and ledgers", "Receipts and invoices", "Budgets and forecasts", "Checks and deposits"], correctIndex: 0, explanation: "The IRS: \"A double-entry bookkeeping system uses journals and ledgers\" (lesson 2).", sourceLessonSlug: "debits-and-credits" },
          { prompt: "Where are transactions first entered?", options: ["In the ledger", "In the journal", "On the balance sheet", "In the tax return"], correctIndex: 1, explanation: "\"Transactions are first entered in a journal and then posted to ledger accounts\" (lesson 2).", sourceLessonSlug: "debits-and-credits" },
          { prompt: "In double entry, which side of an account is for debits?", options: ["The right side", "The bottom row", "The left side", "The top row"], correctIndex: 2, explanation: "\"Each account has a left side for debits and a right side for credits\" (lesson 2).", sourceLessonSlug: "debits-and-credits" },
          { prompt: "Why does the IRS call double entry self-balancing?", options: ["An auditor balances it", "Software balances it", "The bank reconciles it", "Each entry has two sides"], correctIndex: 3, explanation: "Every transaction is recorded as a debit in one account and a credit in another, so the two totals match (lesson 2).", sourceLessonSlug: "debits-and-credits" },
          { prompt: "After posting, what must be true of total debits and total credits?", options: ["They must be equal", "Debits must be larger", "Credits must be larger", "They must both be zero"], correctIndex: 0, explanation: "\"The total debits must equal the total credits after you post the journal entries\" (lesson 2).", sourceLessonSlug: "debits-and-credits" },
          { prompt: "What does the word debit mean in bookkeeping?", options: ["A bad result", "The left side", "Money owed", "A cash loss"], correctIndex: 1, explanation: "Debit means the left side of an account; it is not good or bad news by itself (lesson 2).", sourceLessonSlug: "debits-and-credits" },
          { prompt: "In the federal balance sheet rules, what is the first heading?", options: ["Revenues and other gains", "Liabilities and equity", "Assets and other debits", "Cash and cash items only"], correctIndex: 2, explanation: "17 CFR 210.5-02 opens with \"ASSETS AND OTHER DEBITS\" (lesson 2).", sourceLessonSlug: "debits-and-credits" },
          { prompt: "Which rule lists the lines a public company's balance sheet must show?", options: ["IRS Publication 583", "SBA 7(a) loan rules", "Form 10-K cover page", "Regulation S-X 5-02"], correctIndex: 3, explanation: "Regulation S-X, at 17 CFR 210.5-02, lists the line items for the face of the balance sheet (lesson 2).", sourceLessonSlug: "debits-and-credits" },
          { prompt: "What kind of account grows with a debit?", options: ["An asset account", "A liability account", "An equity account", "A revenue account"], correctIndex: 0, explanation: "Assets are debit-side items, the reasoning from S-X's heading in lesson 2. Liabilities, equity and revenue grow with credits.", sourceLessonSlug: "debits-and-credits" },
          { prompt: "What kind of account grows with a credit?", options: ["An expense account", "A liability account", "An inventory account", "A cash account"], correctIndex: 1, explanation: "Liabilities sit on the credit side; expenses, inventory and cash grow with debits (lesson 2).", sourceLessonSlug: "debits-and-credits" },
          { prompt: "How is revenue recorded?", options: ["As a debit to equity", "As a debit to revenue", "As a credit to revenue", "As a credit to cash"], correctIndex: 2, explanation: "Revenue adds to equity, which grows on the credit side, so revenue is a credit (lesson 2).", sourceLessonSlug: "debits-and-credits" },
          { prompt: "How is an expense recorded?", options: ["As a credit, raising equity", "As a credit to the expense", "As a debit to cash received", "As a debit, lowering equity"], correctIndex: 3, explanation: "An expense takes away from equity, so it is recorded as a debit (lesson 2).", sourceLessonSlug: "debits-and-credits" },
          { prompt: "In the lesson's reasoning, why are liabilities and equity credit-side accounts?", options: ["Debits must equal credits", "Tax law says they are", "Banks book them that way", "They hold the most cash"], correctIndex: 0, explanation: "Assets are debits and assets equal liabilities plus equity; for debits to equal credits, liabilities and equity must be credits (lesson 2).", sourceLessonSlug: "debits-and-credits" },
          { prompt: "You sell a burrito for $10 in cash. Which account is debited?", options: ["Sales revenue", "Cash on hand", "Unearned revenue", "Inventory"], correctIndex: 1, explanation: "Cash, an asset, grows, so it is debited $10; sales revenue is credited (lesson 2).", sourceLessonSlug: "debits-and-credits" },
          { prompt: "You sell a burrito for $10 in cash. Which account is credited?", options: ["Cash on hand", "Inventory", "Sales revenue", "Unearned revenue"], correctIndex: 2, explanation: "You earned revenue, which is a credit. The food was served, so nothing is unearned (lesson 2).", sourceLessonSlug: "debits-and-credits" },
          { prompt: "You buy $300 of tortillas and pay cash. Which account is debited?", options: ["Cash on hand", "Sales revenue", "Unearned revenue", "Inventory on hand"], correctIndex: 3, explanation: "Inventory, an asset, grows, so it is debited; cash is credited (lesson 2).", sourceLessonSlug: "debits-and-credits" },
          { prompt: "After buying $300 of tortillas with cash, what happens to total assets?", options: ["They do not change", "They rise by $300", "They fall by $300", "They rise by $600"], correctIndex: 0, explanation: "Inventory up $300, cash down $300: one asset traded for another (lesson 2).", sourceLessonSlug: "debits-and-credits" },
          { prompt: "A customer buys a $25 gift card. Which account is credited?", options: ["Sales revenue", "Unearned revenue", "Cash on hand", "Inventory on hand"], correctIndex: 1, explanation: "No food has been served, so the credit goes to unearned revenue, a liability (lesson 2).", sourceLessonSlug: "debits-and-credits" },
          { prompt: "Why is a gift card sale credited to a liability?", options: ["The card may be lost", "Tax is due on the card", "Food is still owed", "The bank holds the cash"], correctIndex: 2, explanation: "The company has the cash but still owes the customer a meal (lesson 2).", sourceLessonSlug: "debits-and-credits" },
          { prompt: "In the lesson's three worked entries, what do total debits come to?", options: ["$300", "$25", "$10", "$335"], correctIndex: 3, explanation: "10 + 300 + 25 = 335, and the credits also total 335 (lesson 2).", sourceLessonSlug: "debits-and-credits" },
          { prompt: "If the debit and credit totals do not match, what does that tell you?", options: ["An entry is wrong", "The firm lost money", "Taxes are owed", "Revenue was high"], correctIndex: 0, explanation: "Every correct entry has equal debits and credits, so a mismatch means some entry is wrong (lesson 2).", sourceLessonSlug: "debits-and-credits" },
          { prompt: "What is the ledger?", options: ["The daily sales slip", "The set of accounts", "The annual report", "The tax return form"], correctIndex: 1, explanation: "Journal entries are posted to ledger accounts, one for each item, each with its own balance (lesson 2).", sourceLessonSlug: "debits-and-credits" },
          { prompt: "Which statement about debits is true?", options: ["A debit is always a loss", "A debit is always a gain", "A debit is a left-side entry", "A debit always cuts cash"], correctIndex: 2, explanation: "Debit names a side, the left. Whether it grows or shrinks an account depends on the kind of account (lesson 2).", sourceLessonSlug: "debits-and-credits" },
          { prompt: "Which pair is the correct entry for selling a gift card?", options: ["Debit revenue, credit cash", "Debit cash, credit revenue", "Debit unearned, credit cash", "Debit cash, credit unearned"], correctIndex: 3, explanation: "Cash grows (debit) and unearned revenue, a liability, grows (credit) (lesson 2).", sourceLessonSlug: "debits-and-credits" },
          { prompt: "What does Regulation S-X's balance sheet rule tell public companies?", options: ["Which lines to show", "When to pay taxes", "How to price stock", "Whom to hire as auditor"], correctIndex: 0, explanation: "It lists the items that \"should appear on the face of the balance sheets or related notes\" (lesson 2).", sourceLessonSlug: "debits-and-credits" },
          { prompt: "The IRS's description of double entry appears in which publication?", options: ["Form 10-K", "Publication 583", "Regulation S-K", "Form 1040"], correctIndex: 1, explanation: "Publication 583, Starting a Business and Keeping Records, under \"Bookkeeping System\" (lesson 2).", sourceLessonSlug: "debits-and-credits" },
          { prompt: "Where does each journal entry go after it is written down?", options: ["To the auditor", "To the tax return", "To ledger accounts", "To the SEC directly"], correctIndex: 2, explanation: "Entries are \"posted to ledger accounts\" (lesson 2).", sourceLessonSlug: "debits-and-credits" },
          { prompt: "When a gift card is redeemed for a meal, what happens on the books?", options: ["Cash rises again", "Inventory rises", "Liability rises", "Revenue appears"], correctIndex: 3, explanation: "The liability shrinks and revenue is recognized, because the food has now been served (lesson 3).", sourceLessonSlug: "when-a-sale-counts" },
          { prompt: "Per the SBA, when does the accrual method record a sale?", options: ["When the sale is completed", "When payment is received", "When taxes are filed", "When the year closes"], correctIndex: 0, explanation: "\"The accrual method puts transactions on the books immediately upon completing the sale\" (lesson 3).", sourceLessonSlug: "when-a-sale-counts" },
          { prompt: "Per the SBA, when does the cash method record a sale?", options: ["When the sale is completed", "When payment is received", "When the order is placed", "When the audit is signed"], correctIndex: 1, explanation: "\"The cash method only records this once payment has been received\" (lesson 3).", sourceLessonSlug: "when-a-sale-counts" },
          { prompt: "Why does the lesson warn about Publication 583's definitions?", options: ["They are out of date", "They cover only farms", "They are tax framing", "They omit the cash method"], correctIndex: 2, explanation: "They define the methods by tax year, for tax returns; a 10-K follows generally accepted accounting principles (lesson 3).", sourceLessonSlug: "when-a-sale-counts" },
          { prompt: "Which words in Publication 583's definitions mark them as tax rules?", options: ["Ledger", "Journal", "Revenue", "Tax year"], correctIndex: 3, explanation: "\"You report income in the tax year you receive it\" and \"in the tax year you earn it\" (lesson 3).", sourceLessonSlug: "when-a-sale-counts" },
          { prompt: "When does the company generally recognize revenue on an ordinary sale?", options: ["At the point of sale", "When the month ends", "When the audit ends", "When cash is banked"], correctIndex: 0, explanation: "Note 1 (page 44): \"when payment is tendered at the point of sale\" (lesson 3).", sourceLessonSlug: "when-a-sale-counts" },
          { prompt: "What does recognize mean in accounting?", options: ["Report to the SEC", "Record as revenue", "Pay a sales tax", "Count as an asset"], correctIndex: 1, explanation: "To recognize revenue is to put it on the books as revenue (lesson 3).", sourceLessonSlug: "when-a-sale-counts" },
          { prompt: "For an ordinary counter sale, how do cash and accrual compare here?", options: ["Cash comes first", "Accrual comes first", "They give one date", "Neither applies"], correctIndex: 2, explanation: "The meal is handed over and paid for at the same moment, so both methods count the sale then (lesson 3).", sourceLessonSlug: "when-a-sale-counts" },
          { prompt: "How are gift card balances first recorded, per Note 1?", options: ["As sales revenue", "As an expense", "As inventory", "As unearned revenue"], correctIndex: 3, explanation: "\"Gift card balances are initially recorded as unearned revenue\" (Note 1, page 45; lesson 3).", sourceLessonSlug: "when-a-sale-counts" },
          { prompt: "What kind of item is unearned revenue?", options: ["A liability", "An asset", "An expense", "Equity"], correctIndex: 0, explanation: "It is cash received for food not yet served, so the company owes it: a liability (lesson 3).", sourceLessonSlug: "when-a-sale-counts" },
          { prompt: "When does the company recognize revenue from a gift card?", options: ["When it is sold", "When it is redeemed", "When it is mailed", "When it is printed"], correctIndex: 1, explanation: "\"We recognize revenue from gift cards when the gift card is redeemed by the guest\" (lesson 3).", sourceLessonSlug: "when-a-sale-counts" },
          { prompt: "What was unearned revenue at December 31, 2025, in thousands?", options: ["238,577", "174,600", "240,375", "63,799"], correctIndex: 2, explanation: "Page 36: 240,375. The 238,577 figure is 2024, and 174,600 is the gift card part (lesson 3).", sourceLessonSlug: "when-a-sale-counts" },
          { prompt: "What was the gift card liability within unearned revenue at December 31, 2025?", options: ["181,771", "240,375", "56,806", "174,600"], correctIndex: 3, explanation: "Note 3 (page 48): 174,600 thousand. The 181,771 figure is 2024 (lesson 3).", sourceLessonSlug: "when-a-sale-counts" },
          { prompt: "Where is the Chipotle Rewards deferred revenue included?", options: ["In unearned revenue", "In total revenue", "In retained earnings", "In cash equivalents"], correctIndex: 0, explanation: "Note 1: it \"is included in unearned revenue on our consolidated balance sheets\" (lesson 3).", sourceLessonSlug: "when-a-sale-counts" },
          { prompt: "What was the rewards liability at the start of 2025, in thousands?", options: ["63,799", "56,806", "183,617", "176,624"], correctIndex: 1, explanation: "Note 3's roll-forward begins at 56,806 (lesson 3).", sourceLessonSlug: "when-a-sale-counts" },
          { prompt: "How much rewards revenue was deferred during 2025, in thousands?", options: ["176,624", "56,806", "183,617", "63,799"], correctIndex: 2, explanation: "183,617 was added to the liability during the year (Note 3; lesson 3).", sourceLessonSlug: "when-a-sale-counts" },
          { prompt: "How much rewards revenue was recognized during 2025, in thousands?", options: ["183,617", "63,799", "56,806", "176,624"], correctIndex: 3, explanation: "176,624 was used up and recognized as revenue (Note 3; lesson 3).", sourceLessonSlug: "when-a-sale-counts" },
          { prompt: "What was the ending rewards liability for 2025, in thousands?", options: ["63,799", "56,806", "240,423", "70,789"], correctIndex: 0, explanation: "56,806 + 183,617 minus 176,624 = 63,799, the ending balance Note 3 prints (lesson 3).", sourceLessonSlug: "when-a-sale-counts" },
          { prompt: "What is a roll-forward?", options: ["A forecast of next year", "Start, plus in, minus out", "A list of stock prices", "A ranking of restaurants"], correctIndex: 1, explanation: "Beginning balance, plus additions, minus reductions, equals ending balance (lesson 3).", sourceLessonSlug: "when-a-sale-counts" },
          { prompt: "What do parentheses around a number mean in a financial statement?", options: ["It is estimated", "It is unaudited", "It is negative", "It is in millions"], correctIndex: 2, explanation: "Statements print negative numbers in parentheses, as with (176,624) in the rewards table (lesson 3).", sourceLessonSlug: "when-a-sale-counts" },
          { prompt: "Why does accrual matter for gift card cash?", options: ["It speeds up taxes", "It raises the cash", "It hides the card", "Revenue follows the work"], correctIndex: 3, explanation: "Revenue waits until the food is served, rather than running ahead of it (lesson 3).", sourceLessonSlug: "when-a-sale-counts" },
          { prompt: "Where on the balance sheet does unearned revenue sit?", options: ["Current liabilities", "Current assets", "Shareholders' equity", "Long-term assets"], correctIndex: 0, explanation: "It is among the current liabilities on page 36 (lesson 3).", sourceLessonSlug: "when-a-sale-counts" },
          { prompt: "Which note breaks out the gift card liability and the rewards table?", options: ["Note 1", "Note 3", "Note 9", "Note 12"], correctIndex: 1, explanation: "Note 3, Revenue Recognition, on page 48. Note 1 states the policies (lesson 3).", sourceLessonSlug: "when-a-sale-counts" },
          { prompt: "If gift card cash were booked as revenue on the day of sale, what would happen?", options: ["Cash would fall", "Debt would rise", "Revenue would run ahead", "Taxes would vanish"], correctIndex: 2, explanation: "Revenue would run ahead of the food actually served, which accrual prevents (lesson 3).", sourceLessonSlug: "when-a-sale-counts" },
          { prompt: "What was unearned revenue at December 31, 2024, in thousands?", options: ["240,375", "181,771", "174,600", "238,577"], correctIndex: 3, explanation: "Page 36, 2024 column: 238,577 (lesson 3).", sourceLessonSlug: "when-a-sale-counts" },
          { prompt: "At a restaurant company, what does unearned revenue on the balance sheet show?", options: ["Guests have prepaid", "Sales have stopped", "Debt is overdue", "Food has spoiled"], correctIndex: 0, explanation: "It is cash from customers who paid before being served, through gift cards and rewards (lesson 3).", sourceLessonSlug: "when-a-sale-counts" },
          { prompt: "Which page of the 10-K states the revenue recognition policy?", options: ["Page 36", "Page 44", "Page 48", "Page 61"], correctIndex: 1, explanation: "Note 1, Revenue Recognition, page 44 (lesson 3).", sourceLessonSlug: "when-a-sale-counts" },
          { prompt: "Which page holds the gift card and rewards policy text?", options: ["Page 24", "Page 37", "Page 45", "Page 58"], correctIndex: 2, explanation: "Note 1, Gift Cards and Chipotle Rewards, page 45 (lesson 3).", sourceLessonSlug: "when-a-sale-counts" },
          { prompt: "Under the cash method, when would a $25 gift card count as a sale?", options: ["When it is redeemed", "When the year ends", "When it expires", "When it is paid for"], correctIndex: 3, explanation: "The cash method records a sale once payment is received, which is when the card is bought (lesson 3).", sourceLessonSlug: "when-a-sale-counts" },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2: The statements
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-balance-sheet",
      title: "4 · The balance sheet",
      section: S2,
      recallContent: [
        {
          prompt: "Under the accrual method, when does a sale count?",
          answer: "When the sale is completed, whether or not the money has arrived (the SBA's wording).",
        },
        {
          prompt: "How does the filing first record a gift card sale, and when does it become revenue?",
          answer: "As unearned revenue, a liability; it becomes revenue when the guest redeems the card (Note 1, page 45).",
        },
      ],
      exercise: {
        instructions: "Use the balance sheet figures from page 36 (in thousands of dollars). Type the number with or without commas.",
        items: [
          {
            prompt: "December 31, 2025: total current assets 1,466,953 minus total current liabilities 1,188,142. What is working capital?",
            answer: "278,811",
            accept: ["278811"],
            explanation: "1,466,953 minus 1,188,142 = 278,811 thousand, about $279 million.",
            computedAnswer: true,
          },
          {
            prompt: "December 31, 2024: total current assets 1,780,587 minus total current liabilities 1,168,768. What is working capital?",
            answer: "611,819",
            accept: ["611819"],
            explanation: "1,780,587 minus 1,168,768 = 611,819 thousand. Working capital fell during 2025, mostly because cash fell.",
            computedAnswer: true,
          },
        ],
      },
      body: `${QR}

**One date, two columns.** A balance sheet is true as of a single day. The SEC's accounting rules for public companies, Regulation S-X, require "audited balance sheets as of the end of each of the two most recent fiscal years" (17 CFR 210.3-01). That is why page 36 of the 10-K for ${DATED} shows two columns, December 31, 2025 and December 31, 2024. Read across a line and you see how it changed in a year.

**Reading the page.** The heading says "(in thousands, except per share data)," so add three zeros to every figure. A number in parentheses is negative. These two habits prevent most misreadings.

**Current and noncurrent.** The SEC's *Beginners' Guide* sorts assets and liabilities by time. Current assets are those expected to turn into cash within one year; current liabilities are those that come due within one year. Everything else is noncurrent, or long-term. The page groups lines that way, with a subtotal for each group:

| Line on page 36 (in thousands) | December 31, 2025 | December 31, 2024 |
|---|---|---|
| Cash and cash equivalents | 350,545 | 748,537 |
| Restricted cash | 35,364 | 29,842 |
| Inventory | 49,508 | 48,942 |
| Total current assets | 1,466,953 | 1,780,587 |
| Unearned revenue (current liability) | 240,375 | 238,577 |
| Total current liabilities | 1,188,142 | 1,168,768 |

**Why restricted cash has its own line.** Regulation S-X's balance sheet list (17 CFR 210.5-02), under its first caption, "Cash and cash items," requires "Separate disclosure" of cash "restricted as to withdrawal or usage." Cash the company cannot freely spend should not be mixed in with cash it can. So the filing shows it apart: 35,364 at the end of 2025. Lesson 7 shows this small line doing real work, when it ties the cash flow statement to the balance sheet.

**Inventory is small here.** The same rule asks companies to show inventories, with major classes such as finished goods and raw materials. For a restaurant company the figure is tiny next to its size: 49,508 thousand of inventory against 8,994,531 thousand of total assets.

**Working capital.** The SEC guide defines working capital as "the money leftover if a company paid its current liabilities." It is current assets minus current liabilities:

- December 31, 2025: 1,466,953 minus 1,188,142 = **278,811** thousand.
- December 31, 2024: 1,780,587 minus 1,168,768 = **611,819** thousand.

It fell by about half in a year. The first line of the table shows the main reason: cash and cash equivalents dropped from 748,537 to 350,545. Lesson 6 shows where that cash went.

**Let management explain.** Is a small working capital a warning? Not by itself, and the company says why in its management's discussion (Item 7, page 30): "We have not required significant working capital because guests generally pay using cash or credit and debit cards and because our operations do not require significant receivables or significant inventories." A restaurant is paid at the counter and, as the company says, carries no significant inventories. A business that waits months to be paid would need far more. A ratio means little until you know the business behind it.

**The biggest lines are leases.** Scan down the page and the largest asset is not cash or equipment. It is "Operating lease assets," 4,463,010 thousand at the end of 2025. On the other side sit current operating lease liabilities of 302,380 and long-term operating lease liabilities of 4,773,434. These lines come from leases: the asset is the right to use leased property, and the liabilities are the payments promised for it. How those amounts are measured is set by accounting standards this course does not teach. For now, notice that they are there, and that they are large. Lesson 12 comes back to them.

**A note on the rule's date.** The Regulation S-X text quoted in this course comes from the government's printed edition revised as of April 1, 2025. Changes made after that date have not been checked here.

:::reveal Why does page 36 show two years? ||| Regulation S-X requires audited balance sheets as of the end of each of the two most recent fiscal years.

:::reveal What makes an asset "current"? ||| It is expected to turn into cash within one year. A current liability is one that comes due within one year.

:::reveal Why is restricted cash on its own line? ||| Regulation S-X requires separate disclosure of cash "restricted as to withdrawal or usage," so cash the company cannot freely spend is shown apart.

:::reveal Working capital is only 278,811 thousand. Why does management say that is enough? ||| Guests pay by cash or card at the counter, and the business needs no significant receivables or inventories (Item 7, page 30).

## Vocabulary
- **Current asset**: an asset expected to turn into cash within one year.
- **Current liability**: an obligation that comes due within one year.
- **Restricted cash**: cash the company cannot freely withdraw or use, shown on its own line.
- **Working capital**: current assets minus current liabilities.
- **Operating lease asset**: the recorded right to use a leased property, such as a restaurant space.

## Sources
- ${CFR_3_01} Locator: § 210.3-01(a), printed p. 272 (two most recent fiscal years). ${CFR_EDITION} ${TA}
- ${CFR_5_02} Locator: § 210.5-02, printed p. 301, caption 1, "Cash and cash items" (separate disclosure of restricted cash); p. 302, caption 6, "Inventories." ${CFR_EDITION} ${TA}
- ${SEC_GUIDE} Locator: section "Balance Sheets" (current and noncurrent); section "Financial Statement Analysis" (working capital). ${TA}
- ${CMG_10K} Locator: Item 8, p. 36, Consolidated Balance Sheets (every figure in the table; operating lease lines); Item 7, p. 30 (the working capital paragraph). ${TB}`,
    },
    {
      slug: "the-income-statement",
      title: "5 · The income statement",
      section: S2,
      recallContent: [
        {
          prompt: "What is working capital, and what was it at December 31, 2025?",
          answer: "Current assets minus current liabilities: 1,466,953 minus 1,188,142 = 278,811 thousand.",
        },
        {
          prompt: "Why does Regulation S-X make restricted cash a separate line?",
          answer: "It requires separate disclosure of cash \"restricted as to withdrawal or usage.\"",
        },
      ],
      body: `${QR}

**A year, not a day.** The balance sheet is a snapshot. The income statement is a film of the year: what came in, what it cost, and what was left. Regulation S-X requires "audited statements of comprehensive income and cash flows for each of the three fiscal years preceding the date of the most recent audited balance sheet" (17 CFR 210.3-02). So page 37 of the 10-K for ${DATED}, titled "Consolidated Statements of Income and Comprehensive Income," shows three columns: 2025, 2024 and 2023.

**Top to bottom.** Figures are in thousands, except per share amounts.

| Line on page 37 (in thousands) | 2025 | 2024 | 2023 |
|---|---|---|---|
| Total revenue | 11,925,601 | 11,313,853 | 9,871,649 |
| Food, beverage and packaging | 3,526,992 | 3,374,516 | 2,912,564 |
| Labor | 2,991,680 | 2,789,789 | 2,440,982 |
| Total operating expenses | 9,989,803 | 9,397,520 | 8,313,836 |
| Income from operations | 1,935,798 | 1,916,333 | 1,557,813 |
| Provision for income taxes | 473,758 | 476,120 | 391,769 |
| Net income | 1,535,761 | 1,534,110 | 1,228,737 |
| Diluted earnings per share (dollars) | $1.14 | $1.11 | $0.89 |

**Revenue, then costs.** Revenue is the top line, the sales the company recognized under the rules from lesson 3. Below it come the costs of running restaurants. The two biggest are food, beverage and packaging (3,526,992) and labor (2,991,680). Add every operating cost and you get total operating expenses, 9,989,803.

**Income from operations.** Revenue minus operating expenses: 11,925,601 minus 9,989,803 = 1,935,798, exactly the line printed on page 37. This is what the restaurants earned from running restaurants, before taxes and a few other lines.

**Down to net income.** Between income from operations and net income sit a few more lines on the page, ending with the provision for income taxes, 473,758. What remains is **net income**: 1,535,761 thousand, about $1.54 billion, for 2025. It is the "bottom line," and lesson 7 follows it into the balance sheet.

**Read the captions.** The restaurant cost lines carry a caption: "exclusive of depreciation and amortization shown separately below." That means the cost of food and labor here does not include the wearing out of ovens and buildings; that cost has its own line, 361,382 thousand in 2025. If you added depreciation into food costs yourself, you would count it twice. Small words in a caption change what a number means, so read them before you compare anything.

**What depreciation is.** When a company buys equipment that lasts for years, it does not put the whole cost into one year's expenses. It spreads the cost over the years the asset is used. The filing's policy note (Note 1, page 42) says: "Depreciation is calculated using the straight-line method over the estimated useful lives of the assets." Straight-line means an equal share each year. The useful lives it gives are 3-20 years for leasehold improvements and buildings, 4-7 years for furniture and fixtures, and 3-10 years for equipment. Notice the word "estimated": someone chose those lives. Lesson 12 is about choices like that.

**Earnings per share.** The last line divides earnings among the company's shares. Diluted earnings per share was $1.14 for 2025, up from $1.11. It is in dollars, not thousands. One more thing to know: a 50-for-1 stock split took effect on June 26, 2024, and Note 1 (page 40) says share and per-share figures are restated for it. That is why the earlier years look comparable. When you compare per-share numbers across years, check for a split first.

**A measure you can compute.** The SEC guide names **operating margin**: income from operations as a share of revenue. For 2025: 1,935,798 divided by 11,925,601 is about 0.162, or about 16.2%. Out of every dollar of sales, about 16 cents was left after operating costs. This is a description of one year, not a judgment of the company.

:::reveal Why does page 37 show three years when page 36 shows two? ||| Regulation S-X requires audited income and cash flow statements for each of three fiscal years, but balance sheets for only two.

:::reveal What does "exclusive of depreciation and amortization shown separately below" warn you about? ||| The cost lines do not include depreciation; it has its own line. Adding it in again would count it twice.

:::reveal Compute 2025 income from operations from revenue and total operating expenses. ||| 11,925,601 minus 9,989,803 = 1,935,798 thousand, the figure printed on page 37.

:::reveal What does straight-line depreciation mean? ||| The cost of an asset is spread in equal shares over its estimated useful life.

## Vocabulary
- **Income statement**: the statement of revenue, expenses and net income over a period.
- **Income from operations**: revenue minus operating expenses.
- **Net income**: what is left after all expenses and income taxes; the bottom line.
- **Depreciation**: spreading the cost of a long-lived asset over the years it is used.
- **Earnings per share**: net income divided among the company's shares; printed in dollars, not thousands.
- **Operating margin**: income from operations divided by revenue.

## Sources
- ${CFR_3_02} Locator: § 210.3-02(a), printed p. 273 (three fiscal years). ${CFR_EDITION} ${TA}
- ${CMG_10K} Locator: Item 8, p. 37, Consolidated Statements of Income and Comprehensive Income (every figure; the "exclusive of depreciation" caption; depreciation and amortization); Note 1, p. 40 (the stock split); Note 1, p. 42 (straight-line depreciation; useful lives). ${TB}
- ${SEC_GUIDE} Locator: section "Income Statements"; section "Financial Statement Analysis" (operating margin). ${TA}`,
    },
    {
      slug: "the-cash-flow-statement",
      title: "6 · The cash flow statement",
      section: S2,
      recallContent: [
        {
          prompt: "What was net income for 2025, and on which page?",
          answer: "1,535,761 thousand, on page 37, the income statement.",
        },
        {
          prompt: "What does straight-line depreciation do with the cost of an oven?",
          answer: "It spreads the cost in equal shares over the oven's estimated useful life (Note 1, page 42).",
        },
      ],
      body: `${QR}

**Profit is not cash.** Net income for 2025 was 1,535,761 thousand, yet cash and cash equivalents fell by almost 400 million dollars during the year (lesson 4). Both are true. The cash flow statement explains how.

**Three kinds of cash flow.** The SEC's *Beginners' Guide* says cash flow statements report cash flows from "(1) operating activities; (2) investing activities; and (3) financing activities." Operating activities are the business itself: selling food, paying staff and suppliers. Investing activities are buying and selling long-lived assets, such as building out new restaurants. Financing activities are dealings with the people who fund the company: borrowing, repaying, and buying back or issuing shares. Page 39 of the 10-K for ${DATED} has one section for each (in thousands):

| Line on page 39 (in thousands) | 2025 |
|---|---|
| Net cash provided by operating activities | 2,113,926 |
| Net cash used in investing activities | (35,082) |
| Net cash used in financing activities | (2,470,898) |
| Effect of exchange rate changes | (416) |
| Net change in cash, cash equivalents, and restricted cash | (392,470) |
| Cash, cash equivalents, and restricted cash at beginning of year | 778,379 |
| Cash, cash equivalents, and restricted cash at end of year | 385,909 |

**The operating section starts at net income.** Its first line is net income, followed by "Adjustments to reconcile net income to net cash provided by operating activities." This layout, starting from profit and adjusting it to cash, is called the **indirect method**. Two adjustments show how it works:

- **Depreciation and amortization, 361,382, added back.** Lesson 5 showed depreciation as an expense that spreads an old purchase over many years. It lowered net income, but no cash left the company for it in 2025; the cash left when the equipment was bought. So the statement adds it back to get from profit to cash.
- **Change in unearned revenue, 40,710.** Lesson 3 showed that gift card cash arrives before it becomes revenue. Cash taken in ahead of revenue is cash the company has even though it is not yet profit, so a change in unearned revenue is one of the adjustments.

After all the adjustments, operating activities provided 2,113,926 thousand, about $2.11 billion. The restaurants produced more cash than profit.

**Investing.** The biggest investing line is "Purchases of leasehold improvements, property and equipment," (666,336). The management's discussion (page 30) puts capital expenditures for 2025 at "$666.3 million," the same number rounded. Yet net investing was only (35,082). Do the arithmetic: if the whole section nets to minus 35,082 and one line is minus 666,336, the other investing lines on page 39 must add up to plus 631,254. This course does not go through them; the point is that one big line does not tell you the section total.

**Financing.** Here is where the cash went. Net cash used in financing was (2,470,898), about $2.47 billion, and one line in it, "Repurchase of common stock," was (2,425,516). Almost all of the financing outflow was the company buying back its own shares. A buyback sends cash to shareholders who sell; lesson 7 shows what it does to equity.

**It adds up.** Check the totals: 2,113,926 minus 35,082 minus 2,470,898 minus 416 = minus 392,470, the net change printed on the page. And 385,909 minus 778,379 = minus 392,470 as well. Beginning cash plus the year's change equals ending cash. The cash flow statement is one more roll-forward, like the rewards table in lesson 3.

**Notice what is counted.** The total is "cash, cash equivalents, and restricted cash," not cash alone. Remember restricted cash from lesson 4. In lesson 7 that detail makes this page match the balance sheet to the dollar.

:::reveal Name the three kinds of activity on a cash flow statement. ||| Operating, investing and financing (the SEC guide).

:::reveal Why is depreciation added back in the operating section? ||| It was subtracted as an expense to get net income, but no cash was paid for it in 2025; the cash went out when the assets were bought.

:::reveal Where did most of the cash go in 2025? ||| Financing: net cash used of 2,470,898 thousand, of which 2,425,516 was the repurchase of common stock.

:::reveal Show that the 2025 cash flow statement adds up. ||| 2,113,926 minus 35,082 minus 2,470,898 minus 416 = minus 392,470, and 778,379 minus 392,470 = 385,909, the ending figure.

## Vocabulary
- **Operating activities**: cash flows from running the business.
- **Investing activities**: cash flows from buying and selling long-lived assets.
- **Financing activities**: cash flows with the company's funders, such as borrowing or buying back shares.
- **Indirect method**: a cash flow layout that starts with net income and adjusts it to cash.
- **Share repurchase**: the company buying back its own shares with cash.

## Sources
- ${SEC_GUIDE} Locator: section "Cash Flow Statements" (the three activities). ${TA}
- ${CMG_10K} Locator: Item 8, p. 39, Consolidated Statements of Cash Flows (every figure; "Adjustments to reconcile net income"); Item 7, p. 30 (capital expenditures of $666.3 million). ${TB}`,
    },
    {
      slug: "how-the-statements-tie",
      title: "7 · How the statements tie",
      section: S2,
      recallContent: [
        {
          prompt: "How much cash did operating activities provide in 2025?",
          answer: "2,113,926 thousand, about $2.11 billion (page 39).",
        },
        {
          prompt: "What took most of the financing outflow in 2025?",
          answer: "Repurchase of common stock, (2,425,516) thousand, out of (2,470,898) net financing.",
        },
      ],
      exercise: {
        instructions: "Use the figures from pages 36, 37, 38 and 39 (in thousands of dollars). Type the number with or without commas.",
        items: [
          {
            prompt: "Retained earnings at the end of 2024 were 1,574,232. Add 2025 net income of 1,535,761. What is the subtotal?",
            answer: "3,109,993",
            accept: ["3109993"],
            explanation: "1,574,232 + 1,535,761 = 3,109,993.",
            computedAnswer: true,
          },
          {
            prompt: "Subtract the 2,490,085 of repurchases charged to retained earnings from 3,109,993. What is ending retained earnings?",
            answer: "619,908",
            accept: ["619908"],
            explanation: "3,109,993 minus 2,490,085 = 619,908, the retained earnings line on page 36 for December 31, 2025.",
            computedAnswer: true,
          },
          {
            prompt: "Cash and cash equivalents 350,545 plus restricted cash 35,364 (page 36, December 31, 2025) equals what?",
            answer: "385,909",
            accept: ["385909"],
            explanation: "350,545 + 35,364 = 385,909, the cash flow statement's end-of-year figure on page 39.",
            computedAnswer: true,
          },
        ],
      },
      body: `${QR}

**Four statements, one set of books.** The statements are not four separate reports. They are four views of the same accounts, and the numbers pass from one to the next. When they agree, you know you are reading them right. This lesson checks two links in the 10-K for ${DATED}.

**The equity statement is a reconciliation.** Regulation S-X (17 CFR 210.3-04) says: "An analysis of the changes in each caption of stockholders' equity and noncontrolling interests presented in the balance sheets shall be given in a note or separate statement," as "a reconciliation of the beginning balance to the ending balance." In plain words: for each equity line on the balance sheet, show how you got from last year's number to this year's. The filing does it on page 38, the Consolidated Statements of Shareholders' Equity. It is a roll-forward with columns.

**Link 1: net income into retained earnings.** **Retained earnings** is the part of equity built from profits kept in the company. On page 38, the row "Net income" puts 1,535,761 into the Retained Earnings column: the same bottom line as page 37. The row "Repurchase of common stock" takes (2,490,085) out of that column. So (in thousands):

| Retained earnings | Amount | Page |
|---|---|---|
| End of 2024 | 1,574,232 | 36 |
| Plus 2025 net income | 1,535,761 | 37 and 38 |
| Minus repurchases charged to retained earnings | (2,490,085) | 38 |
| End of 2025 | 619,908 | 36 |

Check it: 1,574,232 + 1,535,761 = 3,109,993, and 3,109,993 minus 2,490,085 = 619,908. That is the retained earnings line on the balance sheet for December 31, 2025. The income statement fed the equity statement, and the equity statement landed on the balance sheet.

**Why buybacks hit retained earnings here.** Companies treat repurchased shares in different ways. This filing says which way it uses (Note 1, page 40): "All shares of common stock that we repurchase are immediately retired and not held as treasury stock." Retired shares are canceled, so their cost comes out of equity accounts, and in this filing most of it comes out of retained earnings. In 2025 the company spent more on repurchases than it earned, so retained earnings fell from 1,574,232 to 619,908, and total shareholders' equity fell from 3,655,546 to 2,830,607 (lesson 1). Lesson 12 shows why that matters when you read a ratio.

**Link 2: cash flow into the balance sheet.** The cash flow statement ended 2025 at 385,909 thousand of "cash, cash equivalents, and restricted cash" (page 39). The balance sheet (page 36) has no line with that number. But it has two lines that add to it:

- Cash and cash equivalents: 350,545
- Restricted cash: 35,364
- Sum: 350,545 + 35,364 = **385,909**

It matches. Try the start of the year too: 748,537 + 29,842 = 778,379, the cash flow statement's beginning figure. This is why lesson 4 cared about the small restricted cash line. Leave it out and the two statements seem not to agree.

**What the links prove.** If you are handed one statement and a figure in it looks odd, the links let you check it from another page. Net income must reach retained earnings; ending cash must reach the balance sheet. When a number will not tie, either you have misread a heading, a unit or a caption, or something needs a closer look. Lesson 14 asks you to use these checks on your own.

:::reveal What does Regulation S-X's rule 3-04 require for equity? ||| An analysis of the changes in each equity caption, as a reconciliation of the beginning balance to the ending balance.

:::reveal Which number links the income statement to the equity statement? ||| Net income, 1,535,761 thousand, which appears on page 37 and again in the Retained Earnings column on page 38.

:::reveal Why do repurchases reduce retained earnings in this filing? ||| The company retires repurchased shares immediately rather than holding them as treasury stock (Note 1, page 40), so their cost comes out of equity, here mostly retained earnings.

:::reveal The cash flow statement ends at 385,909. Which balance sheet lines add up to it? ||| Cash and cash equivalents, 350,545, plus restricted cash, 35,364.

## Vocabulary
- **Statement of shareholders' equity**: the reconciliation of each equity line from the start of the year to the end.
- **Retained earnings**: the part of equity built from profits the company has kept.
- **Articulation**: the way the statements' numbers pass from one to another and agree.
- **Retired shares**: repurchased shares that are canceled rather than held by the company.

## Sources
- ${CFR_3_04} Locator: § 210.3-04, printed p. 274 (the reconciliation of each equity caption). ${CFR_EDITION} ${TA}
- ${CMG_10K} Locator: Item 8, p. 36 (retained earnings; cash; restricted cash; equity totals); p. 37 (net income); p. 38, Consolidated Statements of Shareholders' Equity ("Net income" and "Repurchase of common stock" rows); p. 39 (beginning and ending cash, cash equivalents, and restricted cash); Note 1, p. 40 (repurchased shares retired). ${TB}`,
    },
    {
      slug: "section-2-quiz",
      title: "Section 2 quiz · The statements",
      section: S2,
      body: "A graded check on the balance sheet, the income statement, the cash flow statement and how the three tie through the statement of shareholders' equity, all read from the fiscal 2025 10-K. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "How many years of balance sheets does Regulation S-X require?", options: ["Two", "Three", "Five", "One"], correctIndex: 0, explanation: "17 CFR 210.3-01: balance sheets as of the end of each of the two most recent fiscal years (lesson 4).", sourceLessonSlug: "the-balance-sheet" },
          { prompt: "On page 36, which two dates head the columns?", options: ["Dec. 31, 2025 and 2023", "Dec. 31, 2025 and 2024", "Jan. 1 and Dec. 31, 2025", "June 30 and Dec. 31, 2025"], correctIndex: 1, explanation: "December 31, 2025 and December 31, 2024, the two most recent year-ends (lesson 4).", sourceLessonSlug: "the-balance-sheet" },
          { prompt: "What does the heading \"(in thousands, except per share data)\" tell you?", options: ["Add six zeros to totals", "Figures are estimates", "Add three zeros to most", "Figures are in millions"], correctIndex: 2, explanation: "Every figure except per-share amounts is in thousands, so add three zeros (lesson 4).", sourceLessonSlug: "the-balance-sheet" },
          { prompt: "Per the SEC guide, what makes an asset current?", options: ["It is worth over $1 million", "It was bought this same month", "It is held at a bank or broker", "It turns to cash within a year"], correctIndex: 3, explanation: "Current assets are expected to turn into cash within one year (lesson 4).", sourceLessonSlug: "the-balance-sheet" },
          { prompt: "What makes a liability current?", options: ["It comes due within a year", "It is owed to a bank", "It carries no interest", "It is owed to the owners"], correctIndex: 0, explanation: "A current liability comes due within one year, whoever it is owed to (lesson 4).", sourceLessonSlug: "the-balance-sheet" },
          { prompt: "What were cash and cash equivalents at December 31, 2025, in thousands?", options: ["748,537", "350,545", "385,909", "35,364"], correctIndex: 1, explanation: "Page 36: 350,545. The 748,537 figure is 2024, and 385,909 includes restricted cash (lesson 4).", sourceLessonSlug: "the-balance-sheet" },
          { prompt: "What was restricted cash at December 31, 2025, in thousands?", options: ["29,842", "49,508", "35,364", "40,710"], correctIndex: 2, explanation: "Page 36: 35,364. The 29,842 figure is 2024 (lesson 4).", sourceLessonSlug: "the-balance-sheet" },
          { prompt: "Why does restricted cash get its own line?", options: ["It earns more interest", "It is held overseas", "Auditors prefer it", "S-X requires it apart"], correctIndex: 3, explanation: "Regulation S-X requires separate disclosure of cash \"restricted as to withdrawal or usage\" (lesson 4).", sourceLessonSlug: "the-balance-sheet" },
          { prompt: "Which caption in Regulation S-X's balance sheet list covers restricted cash?", options: ["Cash and cash items", "Inventories", "Prepaid expenses", "Other assets"], correctIndex: 0, explanation: "Caption 1, \"Cash and cash items,\" on printed page 301 (lesson 4).", sourceLessonSlug: "the-balance-sheet" },
          { prompt: "What was inventory at December 31, 2025, in thousands?", options: ["48,942", "49,508", "63,799", "35,364"], correctIndex: 1, explanation: "Page 36: 49,508, small next to total assets of 8,994,531 (lesson 4).", sourceLessonSlug: "the-balance-sheet" },
          { prompt: "What were total current assets at December 31, 2025, in thousands?", options: ["1,780,587", "1,188,142", "1,466,953", "1,168,768"], correctIndex: 2, explanation: "Page 36: 1,466,953. The 1,780,587 figure is 2024 (lesson 4).", sourceLessonSlug: "the-balance-sheet" },
          { prompt: "What were total current liabilities at December 31, 2025, in thousands?", options: ["1,466,953", "1,168,768", "1,780,587", "1,188,142"], correctIndex: 3, explanation: "Page 36: 1,188,142. The 1,168,768 figure is 2024 (lesson 4).", sourceLessonSlug: "the-balance-sheet" },
          { prompt: "How does the SEC guide define working capital?", options: ["Money left after paying current debts", "Cash spent opening new restaurants", "Revenue minus food and labor costs", "Profit kept inside the business"], correctIndex: 0, explanation: "\"The money leftover if a company paid its current liabilities\" (lesson 4).", sourceLessonSlug: "the-balance-sheet" },
          { prompt: "What was working capital at December 31, 2025, in thousands?", options: ["611,819", "278,811", "385,909", "240,375"], correctIndex: 1, explanation: "1,466,953 minus 1,188,142 = 278,811 (lesson 4).", sourceLessonSlug: "the-balance-sheet" },
          { prompt: "What was working capital at December 31, 2024, in thousands?", options: ["278,811", "591,819", "611,819", "1,168,768"], correctIndex: 2, explanation: "1,780,587 minus 1,168,768 = 611,819 (lesson 4).", sourceLessonSlug: "the-balance-sheet" },
          { prompt: "What was the main reason working capital fell during 2025?", options: ["Inventory doubled", "Taxes were raised", "Debt came due", "Cash fell sharply"], correctIndex: 3, explanation: "Cash and cash equivalents dropped from 748,537 to 350,545 thousand (lesson 4).", sourceLessonSlug: "the-balance-sheet" },
          { prompt: "Why does management say it needs little working capital?", options: ["Guests pay at the counter", "It borrows every month", "It owns no restaurants", "Its suppliers pay it"], correctIndex: 0, explanation: "Guests pay by cash or card, and it needs no significant receivables or inventories (Item 7, page 30; lesson 4).", sourceLessonSlug: "the-balance-sheet" },
          { prompt: "Where does the company explain its working capital needs?", options: ["Note 12, page 61", "Item 7, page 30", "Item 8, page 36", "Cover page"], correctIndex: 1, explanation: "In the management's discussion, Item 7, page 30 (lesson 4).", sourceLessonSlug: "the-balance-sheet" },
          { prompt: "What is the largest asset line on page 36?", options: ["Cash and cash equivalents", "Total inventory on hand", "Operating lease assets", "Restricted cash balance"], correctIndex: 2, explanation: "Operating lease assets, 4,463,010 thousand at the end of 2025 (lesson 4).", sourceLessonSlug: "the-balance-sheet" },
          { prompt: "What were operating lease assets at December 31, 2025, in thousands?", options: ["4,773,434", "4,000,127", "302,380", "4,463,010"], correctIndex: 3, explanation: "Page 36: 4,463,010. The 4,000,127 figure is 2024, and 4,773,434 is the long-term lease liability (lesson 4).", sourceLessonSlug: "the-balance-sheet" },
          { prompt: "What were long-term operating lease liabilities at December 31, 2025?", options: ["4,773,434", "4,463,010", "4,262,782", "302,380"], correctIndex: 0, explanation: "Page 36: 4,773,434 thousand; the current part was a further 302,380 (lesson 4).", sourceLessonSlug: "the-balance-sheet" },
          { prompt: "What does this course say about how lease amounts are measured?", options: ["It teaches the formula", "It is set by standards", "It is set by the IRS", "It is up to the bank"], correctIndex: 1, explanation: "Measurement is set by accounting standards the course does not teach; it names the lines only (lesson 4).", sourceLessonSlug: "the-balance-sheet" },
          { prompt: "Which edition of the regulations does this course quote?", options: ["The January 2026 edition", "The 1934 original text", "The April 1, 2025 edition", "The 2020 amended edition"], correctIndex: 2, explanation: "The printed edition revised as of April 1, 2025; later changes were not checked (lesson 4).", sourceLessonSlug: "the-balance-sheet" },
          { prompt: "How many years does the income statement on page 37 show?", options: ["One", "Two", "Four", "Three"], correctIndex: 3, explanation: "2025, 2024 and 2023 (lesson 5).", sourceLessonSlug: "the-income-statement" },
          { prompt: "Which rule requires three years of income statements?", options: ["Regulation S-X 3-02", "Regulation S-X 3-01", "Regulation S-K 303", "Form 10-K Item 6"], correctIndex: 0, explanation: "17 CFR 210.3-02 requires income and cash flow statements for three fiscal years; 3-01 covers balance sheets (lesson 5).", sourceLessonSlug: "the-income-statement" },
          { prompt: "What was total revenue for 2025, in thousands?", options: ["11,313,853", "11,925,601", "9,989,803", "9,871,649"], correctIndex: 1, explanation: "Page 37: 11,925,601 (lesson 5).", sourceLessonSlug: "the-income-statement" },
          { prompt: "What was total revenue for 2024, in thousands?", options: ["11,925,601", "9,871,649", "11,313,853", "9,397,520"], correctIndex: 2, explanation: "Page 37: 11,313,853. The 9,871,649 figure is 2023 (lesson 5).", sourceLessonSlug: "the-income-statement" },
          { prompt: "What were labor costs for 2025, in thousands?", options: ["3,526,992", "2,789,789", "1,935,798", "2,991,680"], correctIndex: 3, explanation: "Page 37: 2,991,680. The 2,789,789 figure is 2024 (lesson 5).", sourceLessonSlug: "the-income-statement" },
          { prompt: "What were food, beverage and packaging costs for 2025, in thousands?", options: ["3,526,992", "3,374,516", "2,991,680", "2,912,564"], correctIndex: 0, explanation: "Page 37: 3,526,992. The 3,374,516 figure is 2024 (lesson 5).", sourceLessonSlug: "the-income-statement" },
          { prompt: "What were total operating expenses for 2025, in thousands?", options: ["11,925,601", "9,989,803", "9,397,520", "1,935,798"], correctIndex: 1, explanation: "Page 37: 9,989,803 (lesson 5).", sourceLessonSlug: "the-income-statement" },
          { prompt: "What was income from operations for 2025, in thousands?", options: ["1,535,761", "1,916,333", "1,935,798", "1,557,813"], correctIndex: 2, explanation: "Page 37: 1,935,798, which is 11,925,601 minus 9,989,803 (lesson 5).", sourceLessonSlug: "the-income-statement" },
          { prompt: "How is income from operations found?", options: ["Net income minus taxes", "Revenue plus all taxes", "Cash minus all expenses", "Revenue minus operating costs"], correctIndex: 3, explanation: "Revenue minus total operating expenses (lesson 5).", sourceLessonSlug: "the-income-statement" },
          { prompt: "What was net income for 2025, in thousands?", options: ["1,535,761", "1,534,110", "1,935,798", "1,228,737"], correctIndex: 0, explanation: "Page 37: 1,535,761. The 1,534,110 figure is 2024 (lesson 5).", sourceLessonSlug: "the-income-statement" },
          { prompt: "What was the provision for income taxes for 2025, in thousands?", options: ["476,120", "473,758", "391,769", "361,382"], correctIndex: 1, explanation: "Page 37: 473,758. The 476,120 figure is 2024 (lesson 5).", sourceLessonSlug: "the-income-statement" },
          { prompt: "What was diluted earnings per share for 2025?", options: ["$1.11", "$0.89", "$1.14", "$1.54"], correctIndex: 2, explanation: "$1.14, up from $1.11 in 2024 (lesson 5).", sourceLessonSlug: "the-income-statement" },
          { prompt: "In what unit is diluted earnings per share printed?", options: ["Thousands of dollars", "Millions of dollars", "Percent of revenue", "Dollars per share"], correctIndex: 3, explanation: "Per-share data is the exception to \"in thousands\" (lesson 5).", sourceLessonSlug: "the-income-statement" },
          { prompt: "What does \"exclusive of depreciation and amortization shown separately below\" mean?", options: ["Depreciation has its own line", "Depreciation is not recorded", "Depreciation is in labor costs", "Depreciation is paid in cash"], correctIndex: 0, explanation: "The cost lines leave depreciation out because it is shown on its own line (lesson 5).", sourceLessonSlug: "the-income-statement" },
          { prompt: "What was depreciation and amortization for 2025, in thousands?", options: ["473,758", "361,382", "666,336", "40,710"], correctIndex: 1, explanation: "361,382 (lesson 5).", sourceLessonSlug: "the-income-statement" },
          { prompt: "What happens if you add depreciation into the food cost line yourself?", options: ["Profit rises", "Taxes fall", "It counts twice", "Cash grows"], correctIndex: 2, explanation: "Depreciation already has its own line, so you would count it twice (lesson 5).", sourceLessonSlug: "the-income-statement" },
          { prompt: "What depreciation method does Note 1 name?", options: ["Double-declining", "Units of output", "Sum of the years", "Straight-line"], correctIndex: 3, explanation: "\"Depreciation is calculated using the straight-line method\" (Note 1, page 42; lesson 5).", sourceLessonSlug: "the-income-statement" },
          { prompt: "What does straight-line depreciation do?", options: ["Spreads cost in equal shares", "Expenses it all in year one", "Charges more in early years", "Charges nothing until sold"], correctIndex: 0, explanation: "It spreads the cost in equal shares over the estimated useful life (lesson 5).", sourceLessonSlug: "the-income-statement" },
          { prompt: "What useful life range does the filing give for equipment?", options: ["4-7 years", "3-10 years", "3-20 years", "1-2 years"], correctIndex: 1, explanation: "Equipment 3-10 years; furniture and fixtures 4-7; leasehold improvements and buildings 3-20 (lesson 5).", sourceLessonSlug: "the-income-statement" },
          { prompt: "Which word in the depreciation policy shows that someone made a judgment?", options: ["Calculated", "Straight-line", "Estimated", "Method"], correctIndex: 2, explanation: "\"Estimated useful lives\": someone chose them (lesson 5).", sourceLessonSlug: "the-income-statement" },
          { prompt: "Why do earlier per-share figures stay comparable after the 2024 split?", options: ["The split was undone", "Shares were not split", "Prices were adjusted", "They were restated"], correctIndex: 3, explanation: "Note 1 says share and per-share figures are restated for the split (lesson 5).", sourceLessonSlug: "the-income-statement" },
          { prompt: "What stock split took effect on June 26, 2024?", options: ["50-for-1", "2-for-1", "10-for-1", "100-for-1"], correctIndex: 0, explanation: "A 50-for-1 split (Note 1, page 40; lesson 5).", sourceLessonSlug: "the-income-statement" },
          { prompt: "What was operating margin for 2025, rounded?", options: ["About 12.9%", "About 16.2%", "About 18.0%", "About 20.4%"], correctIndex: 1, explanation: "1,935,798 divided by 11,925,601 is about 0.162 (lesson 5).", sourceLessonSlug: "the-income-statement" },
          { prompt: "How is operating margin computed?", options: ["Net income over assets", "Revenue over expenses", "Operating income over revenue", "Cash flow over revenue"], correctIndex: 2, explanation: "Income from operations divided by revenue, the measure the SEC guide names (lesson 5).", sourceLessonSlug: "the-income-statement" },
          { prompt: "Which statement explains how a year's profit and its cash differ?", options: ["The balance sheet", "The auditor's report", "The 10-K cover page", "The cash flow statement"], correctIndex: 3, explanation: "Net income was 1,535,761 thousand while cash fell; the cash flow statement explains how (lesson 6).", sourceLessonSlug: "the-cash-flow-statement" },
          { prompt: "Which three activities does the SEC guide name for cash flows?", options: ["Operating, investing, financing", "Selling, buying, borrowing", "Revenue, expense, profit", "Current, noncurrent, equity"], correctIndex: 0, explanation: "\"(1) operating activities; (2) investing activities; and (3) financing activities\" (lesson 6).", sourceLessonSlug: "the-cash-flow-statement" },
          { prompt: "Building out new restaurants is which kind of cash flow?", options: ["Operating", "Investing", "Financing", "Exchange"], correctIndex: 1, explanation: "Buying long-lived assets is investing (lesson 6).", sourceLessonSlug: "the-cash-flow-statement" },
          { prompt: "Buying back the company's own shares is which kind of cash flow?", options: ["Operating", "Investing", "Financing", "Exchange"], correctIndex: 2, explanation: "Dealings with the company's funders, including buybacks, are financing (lesson 6).", sourceLessonSlug: "the-cash-flow-statement" },
          { prompt: "Paying staff and food suppliers is which kind of cash flow?", options: ["Financing", "Investing", "Exchange", "Operating"], correctIndex: 3, explanation: "Running the business itself is operating (lesson 6).", sourceLessonSlug: "the-cash-flow-statement" },
          { prompt: "What does the indirect method start from?", options: ["Net income", "Total revenue", "Ending cash", "Total assets"], correctIndex: 0, explanation: "The operating section starts at net income and lists adjustments to reconcile it to cash (lesson 6).", sourceLessonSlug: "the-cash-flow-statement" },
          { prompt: "What was net cash provided by operating activities in 2025, in thousands?", options: ["1,535,761", "2,113,926", "2,470,898", "2,425,516"], correctIndex: 1, explanation: "Page 39: 2,113,926, about $2.11 billion (lesson 6).", sourceLessonSlug: "the-cash-flow-statement" },
          { prompt: "Why is depreciation added back in the operating section?", options: ["It is a tax refund", "It was paid twice", "No cash left for it", "It is a new loan"], correctIndex: 2, explanation: "It lowered net income, but no cash was paid for it in 2025 (lesson 6).", sourceLessonSlug: "the-cash-flow-statement" },
          { prompt: "When did the cash for depreciated equipment leave the company?", options: ["When it was depreciated", "When taxes were paid", "When the year closed", "When it was bought"], correctIndex: 3, explanation: "The cash went out at purchase, which shows in investing activities (lesson 6).", sourceLessonSlug: "the-cash-flow-statement" },
          { prompt: "What was the change in unearned revenue on page 39 for 2025?", options: ["40,710", "35,082", "361,382", "63,799"], correctIndex: 0, explanation: "40,710 thousand, one of the operating adjustments (lesson 6).", sourceLessonSlug: "the-cash-flow-statement" },
          { prompt: "What was net cash used in investing activities in 2025, in thousands?", options: ["(666,336)", "(35,082)", "(416)", "(2,470,898)"], correctIndex: 1, explanation: "Page 39: (35,082) (lesson 6).", sourceLessonSlug: "the-cash-flow-statement" },
          { prompt: "What were purchases of leasehold improvements, property and equipment in 2025?", options: ["(35,082)", "(361,382)", "(666,336)", "(2,425,516)"], correctIndex: 2, explanation: "Page 39: (666,336) thousand (lesson 6).", sourceLessonSlug: "the-cash-flow-statement" },
          { prompt: "How does the MD&A state 2025 capital expenditures?", options: ["$35.1 million", "$361.4 million", "$2.4 billion", "$666.3 million"], correctIndex: 3, explanation: "Item 7, page 30: \"$666.3 million\" (lesson 6).", sourceLessonSlug: "the-cash-flow-statement" },
          { prompt: "Investing nets (35,082) and one line is (666,336). What must the other lines total?", options: ["+631,254", "+701,418", "-631,254", "+35,082"], correctIndex: 0, explanation: "Minus 35,082 minus (minus 666,336) = plus 631,254 (lesson 6).", sourceLessonSlug: "the-cash-flow-statement" },
          { prompt: "What was net cash used in financing activities in 2025, in thousands?", options: ["(2,425,516)", "(2,470,898)", "(2,113,926)", "(392,470)"], correctIndex: 1, explanation: "Page 39: (2,470,898), about $2.47 billion (lesson 6).", sourceLessonSlug: "the-cash-flow-statement" },
          { prompt: "What does the cash flow statement show for repurchase of common stock in 2025?", options: ["(2,470,898)", "(2,490,085)", "(2,425,516)", "(666,336)"], correctIndex: 2, explanation: "Page 39: (2,425,516) thousand, almost all of the financing outflow (lesson 6).", sourceLessonSlug: "the-cash-flow-statement" },
          { prompt: "Where did most of the 2025 cash outflow go?", options: ["New restaurants", "Income taxes", "Paying off loans", "Buying back shares"], correctIndex: 3, explanation: "Repurchases of common stock, 2,425,516 thousand (lesson 6).", sourceLessonSlug: "the-cash-flow-statement" },
          { prompt: "What was the net change in cash, equivalents and restricted cash for 2025?", options: ["(392,470)", "(397,992)", "(35,082)", "392,470"], correctIndex: 0, explanation: "Page 39: (392,470) thousand (lesson 6).", sourceLessonSlug: "the-cash-flow-statement" },
          { prompt: "What were cash, equivalents and restricted cash at the beginning of 2025?", options: ["385,909", "778,379", "748,537", "350,545"], correctIndex: 1, explanation: "Page 39: 778,379 thousand (lesson 6).", sourceLessonSlug: "the-cash-flow-statement" },
          { prompt: "What were cash, equivalents and restricted cash at the end of 2025?", options: ["350,545", "778,379", "385,909", "35,364"], correctIndex: 2, explanation: "Page 39: 385,909 thousand, which is 778,379 minus 392,470 (lesson 6).", sourceLessonSlug: "the-cash-flow-statement" },
          { prompt: "What was the effect of exchange rate changes on cash in 2025?", options: ["(392,470)", "(35,082)", "40,710", "(416)"], correctIndex: 3, explanation: "Page 39: (416) thousand (lesson 6).", sourceLessonSlug: "the-cash-flow-statement" },
          { prompt: "Which statement does the lesson call one more roll-forward?", options: ["The cash flow statement", "The auditor's report", "The cover page list", "The risk factor list"], correctIndex: 0, explanation: "Beginning cash plus the year's change equals ending cash (lesson 6).", sourceLessonSlug: "the-cash-flow-statement" },
          { prompt: "What does the cash flow statement's total include besides cash?", options: ["Inventory and lease assets", "Equivalents, restricted cash", "Gift card and rewards cash", "Short-term debt balances"], correctIndex: 1, explanation: "Its total is \"cash, cash equivalents, and restricted cash\" (lesson 6).", sourceLessonSlug: "the-cash-flow-statement" },
          { prompt: "What does Regulation S-X 3-04 require for each equity caption?", options: ["A forecast of next year", "A list of shareholders", "A reconciliation of balances", "An audit of each line"], correctIndex: 2, explanation: "\"A reconciliation of the beginning balance to the ending balance\" (lesson 7).", sourceLessonSlug: "how-the-statements-tie" },
          { prompt: "On which page is the statement of shareholders' equity?", options: ["Page 36", "Page 37", "Page 39", "Page 38"], correctIndex: 3, explanation: "Page 38, between the income statement (37) and the cash flow statement (39) (lesson 7).", sourceLessonSlug: "how-the-statements-tie" },
          { prompt: "What is retained earnings?", options: ["Equity from profits kept", "Cash held in the bank", "Money owed to lenders", "Revenue not yet earned"], correctIndex: 0, explanation: "The part of equity built from profits the company has kept (lesson 7).", sourceLessonSlug: "how-the-statements-tie" },
          { prompt: "What were retained earnings at the end of 2024, in thousands?", options: ["619,908", "1,574,232", "1,535,761", "2,490,085"], correctIndex: 1, explanation: "Page 36, 2024 column: 1,574,232 (lesson 7).", sourceLessonSlug: "how-the-statements-tie" },
          { prompt: "What were retained earnings at the end of 2025, in thousands?", options: ["1,574,232", "1,535,761", "619,908", "385,909"], correctIndex: 2, explanation: "Page 36: 619,908 (lesson 7).", sourceLessonSlug: "how-the-statements-tie" },
          { prompt: "How much did the repurchase row take from retained earnings in 2025?", options: ["(2,425,516)", "(2,470,898)", "(2,490,653)", "(2,490,085)"], correctIndex: 3, explanation: "(2,490,085) in the Retained Earnings column; (2,490,653) is the row's Total column (page 38; lesson 7).", sourceLessonSlug: "how-the-statements-tie" },
          { prompt: "Which figure links page 37 to page 38?", options: ["Net income", "Revenue", "Tax provision", "Inventory"], correctIndex: 0, explanation: "Net income, 1,535,761, flows into the Retained Earnings column (lesson 7).", sourceLessonSlug: "how-the-statements-tie" },
          { prompt: "Why do repurchases reduce retained earnings in this filing?", options: ["Shares are held in treasury", "Shares are retired at once", "Shares are sold back later", "Shares are given to staff"], correctIndex: 1, explanation: "\"Immediately retired and not held as treasury stock\" (Note 1, page 40; lesson 7).", sourceLessonSlug: "how-the-statements-tie" },
          { prompt: "What happened to retained earnings during 2025?", options: ["It rose sharply", "It held steady", "It fell sharply", "It turned negative"], correctIndex: 2, explanation: "From 1,574,232 to 619,908 thousand (lesson 7).", sourceLessonSlug: "how-the-statements-tie" },
          { prompt: "Why did retained earnings fall during 2025?", options: ["Net income was negative", "Taxes rose sharply", "Inventory was written off", "Buybacks beat earnings"], correctIndex: 3, explanation: "Repurchases charged to retained earnings (2,490,085) exceeded net income (1,535,761) (lesson 7).", sourceLessonSlug: "how-the-statements-tie" },
          { prompt: "How did total shareholders' equity at the end of 2025 compare with 2024?", options: ["It fell", "It rose", "It doubled", "Unchanged"], correctIndex: 0, explanation: "From 3,655,546 to 2,830,607 thousand (lesson 7).", sourceLessonSlug: "how-the-statements-tie" },
          { prompt: "Which balance sheet lines add up to the cash flow statement's ending total?", options: ["Cash plus total inventory", "Cash plus restricted cash", "Cash plus unearned revenue", "Restricted cash plus leases"], correctIndex: 1, explanation: "350,545 + 35,364 = 385,909 (lesson 7).", sourceLessonSlug: "how-the-statements-tie" },
          { prompt: "Cash and equivalents at December 31, 2024 plus restricted cash equals what?", options: ["748,537", "385,909", "778,379", "750,000"], correctIndex: 2, explanation: "748,537 + 29,842 = 778,379, the cash flow statement's beginning figure (lesson 7).", sourceLessonSlug: "how-the-statements-tie" },
          { prompt: "If you left out the restricted cash line, what would seem to happen?", options: ["Assets would rise", "Profit would fall", "Taxes would rise", "The ties would fail"], correctIndex: 3, explanation: "Cash alone would not match the cash flow statement's total, so the statements would seem not to agree (lesson 7).", sourceLessonSlug: "how-the-statements-tie" },
          { prompt: "What does articulation mean for financial statements?", options: ["Their figures tie together", "They are audited each year", "They are filed on EDGAR", "They use the same fonts"], correctIndex: 0, explanation: "The numbers pass from one statement to the next and agree (lesson 7).", sourceLessonSlug: "how-the-statements-tie" },
          { prompt: "If a figure will not tie to another statement, what should you suspect first?", options: ["A fraud by managers", "A misread heading", "A missing audit", "A late filing"], correctIndex: 1, explanation: "Usually a misread heading, unit or caption; only then something needing a closer look (lesson 7).", sourceLessonSlug: "how-the-statements-tie" },
          { prompt: "In form, what is the statement of shareholders' equity?", options: ["A forecast", "A ranking", "A roll-forward", "A tax form"], correctIndex: 2, explanation: "It reconciles each equity line from beginning to end: a roll-forward with columns (lesson 7).", sourceLessonSlug: "how-the-statements-tie" },
          { prompt: "What does the \"Net income\" row on page 38 add to retained earnings?", options: ["1,574,232", "1,935,798", "2,490,085", "1,535,761"], correctIndex: 3, explanation: "1,535,761, the same bottom line as page 37 (lesson 7).", sourceLessonSlug: "how-the-statements-tie" },
          { prompt: "By how much did retained earnings fall during 2025, in thousands?", options: ["954,324", "824,939", "1,535,761", "2,490,085"], correctIndex: 0, explanation: "1,574,232 minus 619,908 = 954,324. The 824,939 figure is the fall in total equity (lesson 7).", sourceLessonSlug: "how-the-statements-tie" },
          { prompt: "What does the equity statement reconcile?", options: ["Sales to cash", "Start to end balances", "Assets to revenue", "Tax to profit"], correctIndex: 1, explanation: "Each equity caption's beginning balance to its ending balance (lesson 7).", sourceLessonSlug: "how-the-statements-tie" },
          { prompt: "Which statement shows the repurchase row charged to retained earnings?", options: ["The balance sheet", "The cash flow page", "The equity statement", "The income statement"], correctIndex: 2, explanation: "The statement of shareholders' equity, page 38 (lesson 7).", sourceLessonSlug: "how-the-statements-tie" },
          { prompt: "In this filing, what happens to repurchased shares?", options: ["Held as treasury stock", "Given to employees", "Resold the next year", "Retired immediately"], correctIndex: 3, explanation: "They are immediately retired (Note 1, page 40; lesson 7).", sourceLessonSlug: "how-the-statements-tie" },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3: Open the filing
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "find-the-10-k",
      title: "8 · Find the 10-K",
      section: S3,
      recallContent: [
        {
          prompt: "Which two balance sheet lines add up to the cash flow statement's ending total of 385,909?",
          answer: "Cash and cash equivalents (350,545) plus restricted cash (35,364).",
        },
        {
          prompt: "Why do repurchases reduce retained earnings in this filing?",
          answer: "Repurchased shares are immediately retired, not held as treasury stock (Note 1, page 40).",
        },
      ],
      body: `${QR}

**What a 10-K is, and who writes it.** The SEC's investor bulletin *How to Read a 10-K* says most U.S. public companies must file a 10-K every year: an annual report on a form the SEC sets. It also says something every reader should keep in mind: "The SEC neither writes the 10-K nor vouches for its accuracy." The company writes it. The SEC makes it public.

**EDGAR is free.** The SEC's system for filings is called EDGAR. Its search page invites you to "Enjoy free public access to millions of informational documents filed by publicly traded companies," with tools that include Company Search and Full Text Search. No account and no fee are needed.

**Finding this course's filing, step by step.**

1. On the SEC's "Search filings" page, use Company Search and type the company's name.
2. Filter the list of filings to Form 10-K. On October 23, 2026, EDGAR listed 21 Form 10-K filings for this company, the oldest filed March 17, 2006, and the newest was the one this course reads.
3. Open the filing index. It shows the company's Central Index Key (CIK), 0001058090, the filing date, February 4, 2026, the time it was accepted, 4:51:26 p.m. that day, and the **accession number**, 0001058090-26-000009. It lists every document in the filing: the main 10-K, here a file named cmg-20251231.htm, and the exhibits.
4. Open the main document. The company's own page number is printed at the foot of each page, and its table of contents uses those numbers.

**Record two things every time.** Write down the filing date and the accession number. A company files a new 10-K every year, 21 of them for this company so far, so "the Chipotle 10-K" is not specific enough. The accession number names exactly one filing.

**The deadline, and this filing's timing.** The SEC's general instructions for Form 10-K set the due date by the size of the filer: 60 days after the fiscal year ends for a large accelerated filer, 75 days for an accelerated filer and 90 days for everyone else. The cover page of this filing checks the box "Large accelerated filer." Its fiscal year ended December 31, 2025, and it was filed February 4, 2026. December has 31 days to count, January adds 31 more, and February 4 makes it 35 days in all: well inside its 60.

**The Items, in order.** A 10-K is divided into numbered Items, and every company uses the same numbers, so you can find the same part of any filing. Where they fall in this one:

| Item | What it holds | Printed page |
|---|---|---|
| Item 1 | Business | 4 |
| Item 1A | Risk Factors | 9 |
| Item 6 | "Reserved" | 23 |
| Item 7 | Management's discussion and analysis (MD&A) | 24 |
| Item 7A | Market risk | 32 |
| Item 8 | Auditor's report, then the statements and notes | 34 onward |

The form's instructions say Item 7 furnishes "the information required by Item 303 of Regulation S-K," and Item 8 files "financial statements meeting the requirements of Regulation S-X." So the two most important Items each point to a federal rule, and lessons 4, 5, 7, 9 and 12 quote those rules.

**A lesson in dating your sources.** The 2011 SEC bulletin describes Item 6 as "Selected Financial Data," five years of figures in one table. But this filing's Item 6, on page 23, says only "Reserved," and the current form's instructions say the same. What changed? On November 19, 2020, the SEC adopted amendments that included "Eliminating Item 301 (Selected Financial Data)." The names match: the table the bulletin describes is the one the 2020 rule removed. The bulletin was right when it was written. A source can be official, free and true on its date, and out of date now. Always check when a source was written, not just who wrote it.

**The same is true of this course.** This filing will not be the newest for long. A large accelerated filer with a December year-end has 60 days to file, so a 10-K for fiscal 2026 should appear in early 2027. This course does not change its figures when that happens. Every number here stays dated to the fiscal 2025 filing, and you should check EDGAR for a newer one before you rely on any of it.

**How to cite a figure.** Give the company, the form, the fiscal year, the filing date and the accession number once, then the Item and printed page for each figure: "Item 8, p. 36." Anyone can then find exactly what you read.

:::reveal Does the SEC check that a 10-K is accurate? ||| No. The SEC's bulletin: "The SEC neither writes the 10-K nor vouches for its accuracy." The company writes it.

:::reveal Why record the accession number and not just "the 2025 10-K"? ||| A company files many documents over the years; the accession number names exactly one filing.

:::reveal Was this 10-K filed on time? ||| Yes. As a large accelerated filer it had 60 days; it filed 35 days after its December 31, 2025 year-end.

:::reveal Why does the 2011 bulletin's description of Item 6 not match this filing? ||| A 2020 SEC rule eliminated Selected Financial Data, so the current form, and this filing, show Item 6 as reserved.

## Vocabulary
- **Form 10-K**: the annual report most U.S. public companies file with the SEC.
- **EDGAR**: the SEC's free online system for company filings.
- **Filing index**: the EDGAR page that lists a filing's date, accession number and documents.
- **Large accelerated filer**: a filer category with the shortest deadline, 60 days after year-end.
- **Item**: a numbered part of Form 10-K, the same in every company's filing.

## Sources
- ${SEC_BULLETIN} Locator: PDF p. 1 of 6 (most public companies file a 10-K; "neither writes the 10-K nor vouches for its accuracy"); PDF p. 2 (Item 6 as "Selected Financial Data"). ${TA}
- ${SEC_SEARCH} Locator: the page introduction ("free public access"; Company Search and Full Text Search). ${TA}
- ${EDGAR_LIST} Locator: the Form 10-K filter (21 filings as of October 23, 2026; the oldest filed 2006-03-17). ${TB}
- ${EDGAR_INDEX} Locator: the index header (CIK, filing date, acceptance time, accession number) and the document list. ${TB}
- ${FORM_10K} Locator: General Instruction A(2), PDF p. 1 of 19 (60, 75 and 90 days); PDF pp. 12 to 13 (Item 6 reserved; Items 7 and 8). ${TA}
- ${SEC_2020} Locator: the list of amendments ("Eliminating Item 301 (Selected Financial Data)"). ${TA}
- ${CMG_10K} Locator: cover page ("Large accelerated filer"); table of contents and page footers (the Items and pages); Item 6, p. 23 ("Reserved"). ${TB}`,
    },
    {
      slug: "md-and-a-against-the-numbers",
      title: "9 · The MD&A against the numbers",
      section: S3,
      recallContent: [
        {
          prompt: "How many days after year-end does a large accelerated filer have to file its 10-K?",
          answer: "60 days. This filing came 35 days after December 31, 2025.",
        },
        {
          prompt: "Why does this filing show Item 6 as \"Reserved\"?",
          answer: "A 2020 SEC rule eliminated Selected Financial Data, which is what Item 6 used to hold.",
        },
      ],
      body: `${QR}

**Management's own account.** Item 7 is management's discussion and analysis of financial condition and results of operations, the MD&A. The rule that governs it, Item 303 of Regulation S-K, gives its objective: "to provide material information relevant to an assessment of the financial condition and results of operations of the registrant." A compliant MD&A "is expected to better allow investors to view the registrant from management's perspective." The SEC's *Beginners' Guide* says the same in plainer words: "It is intended to help investors to see the company through the eyes of management." And the SEC's 10-K bulletin says the MD&A "allows company management to tell its story in its own words."

**Its own words is the point, and the risk.** The statements are audited numbers. The MD&A is the company explaining them. That makes it the most useful reading in the filing, and also the part you should check. The habit to build: take a claim in the MD&A and find the number behind it in the statements.

**The headline claims.** The MD&A in the 10-K for ${DATED} opens with 2025 financial highlights (Item 7, page 24). Three of them:

- "Total revenue increased 5.4% to $11.9 billion"
- "Comparable restaurant sales decreased 1.7%"
- "Diluted earnings per share was $1.14, a 2.7% increase from $1.11"

**Check them against page 37.** Revenue on the income statement was 11,925,601 thousand in 2025 and 11,313,853 thousand in 2024. Divide: 11,925,601 divided by 11,313,853 is about 1.054, an increase of about 5.4%. And 11,925,601 thousand is $11.9 billion, rounded. Diluted earnings per share on page 37 was $1.14 and $1.11; 1.14 divided by 1.11 is about 1.027, a 2.7% increase. The MD&A's numbers match the audited statements.

**A puzzle.** Revenue went up 5.4%, but comparable restaurant sales went down 1.7%. How can both be true? The MD&A answers it with a table on page 26, "Change in restaurant sales," that walks from 2024 sales to 2025 sales. This course calls a table like this a sales bridge (dollars in millions):

| Change in restaurant sales (page 26) | $ millions |
|---|---|
| 2024 total | 11,313.9 |
| Comparable restaurant sales | (191.3) |
| Restaurants opened in 2025 | 327.0 |
| Restaurants opened in 2024 | 481.8 |
| Restaurant closures | (31.6) |
| Other | 25.8 |
| 2025 total | 11,925.6 |

**Read the bridge.** It separates the comparable restaurant sales line from the sales of restaurants opened in 2024 and 2025, so the comparable measure is one that leaves the newest restaurants out; the company defines it in the MD&A on page 25. That measure lost 191.3 million. The new restaurants added 327.0 plus 481.8, more than 800 million together. So total revenue grew because the company had more restaurants, while sales at the restaurants it compares fell. The headline and the comparable figure are both true; they measure different things.

**Check the bridge too.** 11,313.9 minus 191.3 plus 327.0 plus 481.8 minus 31.6 plus 25.8 = 11,925.6. It adds up, and 11,925.6 million is the 11,925,601 thousand on page 37.

**Count the restaurants.** Page 25 shows the company-owned restaurant count: 3,726 at the beginning of 2025, 334 openings, 13 permanent closures and 5 relocations, and 4,042 at the end. The end figure is the same 4,042 that Note 1 gives. A business that opened 334 restaurants in a year can grow total sales even while its comparable sales slip, which is just what the bridge shows.

**What the "Other" line holds.** A footnote to the bridge says: "Other includes the impact of gift card breakage adjustments, as $20.1 million of additional gift card breakage revenue was recorded during the year ended December 31, 2025 as compared to the year ended December 31, 2024." That is a thread to pull. Lesson 10 follows it into the notes.

**What the check does not tell you.** Matching numbers show that the MD&A reports the statements correctly. They do not tell you whether the company is a good investment, and neither does this course. **This course describes what a filing says; it is not investment advice.** It names no stock as good or bad and makes no forecast.

:::reveal What is the MD&A's objective, under Item 303? ||| To provide material information relevant to an assessment of the company's financial condition and results of operations, from management's perspective.

:::reveal Revenue rose 5.4% while comparable restaurant sales fell 1.7%. How? ||| New restaurants: the 2024 and 2025 openings added 327.0 and 481.8 million, more than the 191.3 million comparable sales lost.

:::reveal How do you check the MD&A's 5.4% revenue claim? ||| Divide page 37's revenue, 11,925,601 by 11,313,853: about 1.054, a 5.4% increase.

## Vocabulary
- **MD&A**: management's discussion and analysis, Item 7, the company's own account of its results.
- **Comparable restaurant sales**: the company's measure of sales that leaves its newest restaurants out, defined on page 25.
- **Sales bridge**: a table that walks from last year's sales to this year's, one cause per line.
- **Highlights**: the headline claims at the start of the MD&A.

## Sources
- ${CFR_303} Locator: § 229.303(a), printed p. 413 (the objective; "management's perspective"). ${CFR_EDITION} ${TA}
- ${SEC_GUIDE} Locator: section "Read the MD&A." ${TA}
- ${SEC_BULLETIN} Locator: PDF pp. 2 to 3 (Item 7, "in its own words"). ${TA}
- ${CMG_10K} Locator: Item 7, p. 24 (2025 Financial Highlights); p. 25 (restaurant counts; comparable sales); p. 26 (change in restaurant sales and its footnote); Item 8, p. 37 (revenue and diluted earnings per share). ${TB}`,
    },
    {
      slug: "the-footnote-behind-the-number",
      title: "10 · The footnote behind the number",
      section: S3,
      recallContent: [
        {
          prompt: "What explained revenue rising while comparable restaurant sales fell?",
          answer: "Restaurants opened in 2024 and 2025 added 481.8 and 327.0 million, more than the 191.3 million comparable sales lost.",
        },
        {
          prompt: "What does the bridge's footnote say the \"Other\" line includes?",
          answer: "Gift card breakage adjustments: $20.1 million more breakage revenue in 2025 than in 2024.",
        },
      ],
      body: `${QR}

**The notes hold the rules.** The SEC's *Beginners' Guide* puts it simply: "The footnotes to financial statements are packed with information." The 10-K bulletin adds that Item 8's audited statements are "accompanied by notes." The statements give you numbers. The notes tell you which rules produced them. Two companies can do the same business and print different numbers because they chose different policies, and the notes are where you find out which.

**Note 1 is the policy list.** In the 10-K for ${DATED}, Note 1, "Description of Business and Summary of Significant Accounting Policies," starts on page 40 and runs to page 46. You have already read four of its policies in this course:

| Policy | What Note 1 says | Page | Lesson |
|---|---|---|---|
| Revenue | "when payment is tendered at the point of sale" | 44 | 3 |
| Gift cards | "initially recorded as unearned revenue" | 45 | 3 |
| Depreciation | "the straight-line method over the estimated useful lives" | 42 | 5 |
| Repurchased shares | "immediately retired and not held as treasury stock" | 40 | 7 |

**One more: inventory.** Note 1 (page 41) says inventory "is valued at the lower of first-in, first-out cost or net realizable value." First-in, first-out, as the name says, treats the first items bought as the first ones used, so what is left on the shelf carries the most recent costs. "The lower of" means that if that cost is higher than the net realizable value, the lower figure is the one on the balance sheet. This is why the 49,508 thousand of inventory on page 36 is not simply a count of food times today's price: a policy decided how to value it.

**Follow a thread from the MD&A to the note.** Lesson 9 ended on a footnote in the MD&A (page 26): "$20.1 million of additional gift card breakage revenue was recorded during the year ended December 31, 2025 as compared to the year ended December 31, 2024." The MD&A calls these "gift card breakage adjustments." Where does the number come from? Go to the gift card policy in Note 1, page 45. There the company reports gift card breakage revenue of "$27,877, $7,760 and $1,162" for 2025, 2024 and 2023, in thousands.

**Check that they agree.** 27,877 minus 7,760 = 20,117 thousand, which is $20.1 million, rounded. The MD&A's number and the note's numbers match.

**Read what the jump means.** Breakage revenue was 1,162 thousand in 2023, 7,760 in 2024 and 27,877 in 2025: more than three and a half times the year before. That growth added 20.1 million dollars of revenue in a year when total revenue grew about 612 million (11,925,601 minus 11,313,853 = 611,748 thousand). It is a small part of the total. But it is revenue that came from the gift card policy rather than from serving more meals, and you would not have known it was there without the MD&A's footnote and the note behind it.

**How breakage is decided.** Note 1's gift card paragraph on page 45 explains how the company determines breakage. This course has not yet quoted that explanation, so read it on page 45 yourself before you say how the number is set. What you can say from the pages quoted here is what the MD&A says: the change came from gift card breakage adjustments, and it moved revenue by 20.1 million dollars.

**The reading habit.** When a number surprises you, or an MD&A line says "Other," look for a footnote, then look in the notes for the policy behind it. Lesson 12 goes one step further: which of these policies rest on estimates management itself calls critical.

:::reveal Where does a 10-K list the accounting policies behind its numbers? ||| In Note 1, the Summary of Significant Accounting Policies (pages 40 to 46 in this filing).

:::reveal How is inventory valued in this filing? ||| At "the lower of first-in, first-out cost or net realizable value" (Note 1, page 41).

:::reveal Show that the MD&A's $20.1 million matches the note. ||| Breakage revenue was 27,877 in 2025 and 7,760 in 2024 (thousands); 27,877 minus 7,760 = 20,117, about $20.1 million.

## Vocabulary
- **Notes to the financial statements**: the pages after the statements that explain policies and break out figures.
- **Accounting policy**: a rule the company chose for how to record and value something.
- **First-in, first-out (FIFO)**: valuing inventory as if the first items bought are the first used.
- **Gift card breakage revenue**: revenue the filing reports from gift card balances under its gift card policy (Note 1, page 45).

## Sources
- ${SEC_GUIDE} Locator: section "Read the Footnotes." ${TA}
- ${SEC_BULLETIN} Locator: PDF p. 3 (Item 8, statements "accompanied by notes"). ${TA}
- ${CMG_10K} Locator: Note 1, pp. 40 to 46 (the policies); p. 41 (inventory); p. 45 (gift card breakage revenue for 2025, 2024 and 2023); Item 7, p. 26 (the breakage footnote to the sales bridge); Item 8, pp. 36 and 37 (inventory; revenue). ${TB}`,
    },
    {
      slug: "the-auditors-opinion",
      title: "11 · The auditor's opinion",
      section: S3,
      recallContent: [
        {
          prompt: "How does this filing value inventory?",
          answer: "At the lower of first-in, first-out cost or net realizable value (Note 1, page 41).",
        },
        {
          prompt: "How do you show the MD&A's $20.1 million breakage figure matches the note?",
          answer: "27,877 minus 7,760 = 20,117 thousand, the 2025 and 2024 breakage revenue in Note 1.",
        },
      ],
      body: `${QR}

**An outsider's opinion.** The SEC does not vouch for a 10-K (lesson 8). Someone else checks the financial statements: an independent auditor, an outside accounting firm. The firm's report sits at the front of Item 8, before the statements. In the 10-K for ${DATED}, it is the "Report of Independent Registered Public Accounting Firm" on pages 34 and 35.

**Who wrote it, and when.** The auditor is Ernst & Young LLP. The report is dated February 4, 2026, the same day the 10-K was filed, and says: "We have served as the Company's auditor since 1997." The report also gives the firm's identification number with the Public Company Accounting Oversight Board: PCAOB ID 42.

**The opinion, word by word.** The key sentence says the financial statements "present fairly, in all material respects, the financial position of the Company at December 31, 2025 and 2024, and the results of its operations and its cash flows for each of the three years in the period ended December 31, 2025, in conformity with U.S. generally accepted accounting principles." Take it apart:

- **"present fairly"**: a judgment that the statements give a fair picture. It does not say "exactly" or "with no errors."
- **"in all material respects"**: the opinion is about the things that matter to the picture, not every figure to the last dollar. Read the words for what they do not say: they do not promise that every number is perfect.
- **"financial position ... at December 31, 2025 and 2024"**: the two balance sheets (lesson 4).
- **"results of its operations and its cash flows for each of the three years"**: the three years of income and cash flow statements (lessons 5 and 6).
- **"in conformity with U.S. generally accepted accounting principles"**: the rulebook the statements are measured against, not tax rules (lesson 3).

**What an opinion is not.** It is not a recommendation to buy anything. It is not a prediction that the company will do well. It is not a guarantee against fraud or mistakes. It is a professional's opinion that the statements fairly present the company's finances under the accounting rules. That is valuable, and it is narrower than many readers assume.

**Unqualified and qualified.** The SEC's 10-K bulletin says: "Most audit reports express an 'unqualified opinion'." An unqualified opinion is a clean one: no exceptions. If an auditor's opinion is qualified, or the auditor disclaims an opinion, the bulletin says the reader should look carefully at why. The sentence quoted above has no exceptions in it, which is what a clean opinion looks like.

**A critical audit matter.** The report names one critical audit matter: "Evaluation of stock-based compensation performance condition assumptions." Read what the report says about it on page 35. Notice one connection now: stock-based compensation is also one of the four estimates management lists as critical in its MD&A. Lesson 12 reads that list. The auditor and management point at the same area.

**Management signs too.** The bulletin notes that the Sarbanes-Oxley Act requires the company's chief executive officer (CEO) and chief financial officer (CFO) to certify the 10-K, and that the certifications under Sections 302 and 906 are usually in Exhibits 31 and 32. This filing's index lists exhibits EX-31.1, EX-31.2 and EX-32.1. So the people who run the company put their own names to the report, separately from the auditor.

**Putting it together.** Management writes the 10-K and certifies it. The auditor gives an opinion on the financial statements. The SEC makes it public and vouches for neither. Each does a different job, and knowing which is which tells you how much weight each part of the filing can carry.

:::reveal What does "present fairly, in all material respects" promise, and what does it not? ||| A fair picture in everything that matters; it does not promise that every number is exact or that there is no error or fraud.

:::reveal What is an unqualified opinion? ||| A clean opinion with no exceptions. The SEC bulletin says most audit reports express one.

:::reveal What critical audit matter does this report name, and where else does that area appear? ||| "Evaluation of stock-based compensation performance condition assumptions"; stock-based compensation is also one of management's four critical accounting estimates.

:::reveal Where are the CEO and CFO certifications usually found? ||| In Exhibits 31 and 32; this filing lists EX-31.1, EX-31.2 and EX-32.1.

## Vocabulary
- **Independent auditor**: an outside accounting firm that gives an opinion on the financial statements.
- **Unqualified opinion**: a clean audit opinion with no exceptions.
- **Qualified opinion**: an audit opinion with an exception the reader should look into.
- **Critical audit matter**: an area the auditor's report singles out and explains.
- **Certification**: the CEO's and CFO's signed statements filed as exhibits with the 10-K.

## Sources
- ${CMG_10K} Locator: Item 8, pp. 34 to 35, Report of Independent Registered Public Accounting Firm (the opinion; the auditor and date; "since 1997"; PCAOB ID 42; the critical audit matter). ${TB}
- ${SEC_BULLETIN} Locator: PDF p. 1 (certification by the CEO and CFO); PDF p. 4 (unqualified opinions; Exhibits 31 and 32). ${TA}
- ${EDGAR_INDEX} Locator: the document list (EX-31.1, EX-31.2, EX-32.1). ${TB}`,
    },
    {
      slug: "section-3-quiz",
      title: "Section 3 quiz · Open the filing",
      section: S3,
      body: "A graded check on finding and citing a 10-K, checking the MD&A against the statements, tracing a number to its note, and reading the auditor's opinion, all in the fiscal 2025 10-K. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "Who writes a company's 10-K?", options: ["The company itself", "The SEC's staff", "The stock exchange", "The IRS examiners"], correctIndex: 0, explanation: "The company writes it; the SEC makes it public (lesson 8).", sourceLessonSlug: "find-the-10-k" },
          { prompt: "What does the SEC's bulletin say about the SEC's role in a 10-K?", options: ["It audits every single 10-K", "It neither writes nor vouches", "It rewrites unclear Items", "It certifies each figure"], correctIndex: 1, explanation: "\"The SEC neither writes the 10-K nor vouches for its accuracy\" (lesson 8).", sourceLessonSlug: "find-the-10-k" },
          { prompt: "What does it cost to search filings on EDGAR?", options: ["A yearly fee", "A per-page fee", "Nothing at all", "A broker account"], correctIndex: 2, explanation: "The SEC offers \"free public access\" (lesson 8).", sourceLessonSlug: "find-the-10-k" },
          { prompt: "Which two search tools does the SEC's Search Filings page name?", options: ["Price and Volume Search", "Broker and Dealer Search", "Ticker and Chart Search", "Company and Full Text Search"], correctIndex: 3, explanation: "Company Search and Full Text Search (lesson 8).", sourceLessonSlug: "find-the-10-k" },
          { prompt: "What is the company's Central Index Key on EDGAR?", options: ["0001058090", "0001058009", "1058090000", "0026000009"], correctIndex: 0, explanation: "CIK 0001058090, shown on the filing index (lesson 8).", sourceLessonSlug: "find-the-10-k" },
          { prompt: "At what time was the filing accepted on February 4, 2026?", options: ["9:00:00 a.m.", "4:51:26 p.m.", "11:59:59 p.m.", "5:00:00 p.m."], correctIndex: 1, explanation: "Accepted at 16:51:26, which is 4:51:26 p.m. (lesson 8).", sourceLessonSlug: "find-the-10-k" },
          { prompt: "What is the main 10-K document's file name?", options: ["cmg-20260204.htm", "cmg-10k-2025.htm", "cmg-20251231.htm", "chipotle-10k.htm"], correctIndex: 2, explanation: "cmg-20251231.htm, named for the fiscal year-end (lesson 8).", sourceLessonSlug: "find-the-10-k" },
          { prompt: "How many Form 10-K filings did EDGAR list for the company on October 23, 2026?", options: ["12", "35", "60", "21"], correctIndex: 3, explanation: "21, the newest being the one this course reads (lesson 8).", sourceLessonSlug: "find-the-10-k" },
          { prompt: "When was the oldest 10-K on that list filed?", options: ["March 17, 2006", "March 17, 2016", "January 1, 2000", "June 26, 2024"], correctIndex: 0, explanation: "March 17, 2006 (lesson 8).", sourceLessonSlug: "find-the-10-k" },
          { prompt: "Why record the accession number of a filing?", options: ["It sets the deadline", "It names one filing", "It is the stock ticker", "It proves an audit"], correctIndex: 1, explanation: "It identifies exactly one document among all a company has filed (lesson 8).", sourceLessonSlug: "find-the-10-k" },
          { prompt: "How many days does a large accelerated filer have to file its 10-K?", options: ["90 days", "75 days", "60 days", "35 days"], correctIndex: 2, explanation: "General Instruction A(2): 60 days after fiscal year-end (lesson 8).", sourceLessonSlug: "find-the-10-k" },
          { prompt: "How many days does a filer that is not accelerated have?", options: ["35 days", "60 days", "75 days", "90 days"], correctIndex: 3, explanation: "90 days for all other registrants (lesson 8).", sourceLessonSlug: "find-the-10-k" },
          { prompt: "How many days does an accelerated filer have?", options: ["75 days", "90 days", "60 days", "45 days"], correctIndex: 0, explanation: "75 days (lesson 8).", sourceLessonSlug: "find-the-10-k" },
          { prompt: "Which filer box does this filing's cover page check?", options: ["Accelerated filer", "Large accelerated filer", "Non-accelerated filer", "Smaller reporting company"], correctIndex: 1, explanation: "\"Large accelerated filer\" (lesson 8).", sourceLessonSlug: "find-the-10-k" },
          { prompt: "How many days after year-end was this 10-K filed?", options: ["60 days", "90 days", "35 days", "4 days"], correctIndex: 2, explanation: "December 31, 2025 to February 4, 2026 is 35 days (lesson 8).", sourceLessonSlug: "find-the-10-k" },
          { prompt: "Which Item holds the Business description?", options: ["Item 7", "Item 6", "Item 8", "Item 1"], correctIndex: 3, explanation: "Item 1, Business, page 4 (lesson 8).", sourceLessonSlug: "find-the-10-k" },
          { prompt: "Which Item holds management's discussion and analysis?", options: ["Item 7", "Item 1A", "Item 8", "Item 6"], correctIndex: 0, explanation: "Item 7, beginning on page 24 (lesson 8).", sourceLessonSlug: "find-the-10-k" },
          { prompt: "Which Item holds the audited financial statements?", options: ["Item 7", "Item 8", "Item 1", "Item 7A"], correctIndex: 1, explanation: "Item 8, with the auditor's report first (lesson 8).", sourceLessonSlug: "find-the-10-k" },
          { prompt: "On what printed page does this filing's MD&A begin?", options: ["Page 4", "Page 9", "Page 24", "Page 36"], correctIndex: 2, explanation: "Item 7 begins on page 24 (lesson 8).", sourceLessonSlug: "find-the-10-k" },
          { prompt: "What does Item 6 show in this filing?", options: ["Selected data", "Risk factors", "Market risk", "Reserved"], correctIndex: 3, explanation: "Page 23 says \"Reserved\" (lesson 8).", sourceLessonSlug: "find-the-10-k" },
          { prompt: "What eliminated Selected Financial Data from the form?", options: ["SEC amendments of 2020", "The 2011 investor bulletin", "A 2006 company decision", "The 2016 JOBS Act guide"], correctIndex: 0, explanation: "Amendments adopted November 19, 2020 (lesson 8).", sourceLessonSlug: "find-the-10-k" },
          { prompt: "What does the Item 6 story teach about sources?", options: ["Old sources are false", "Check when it was written", "Official means current", "Ignore SEC bulletins"], correctIndex: 1, explanation: "The 2011 bulletin was right on its date and is out of date now (lesson 8).", sourceLessonSlug: "find-the-10-k" },
          { prompt: "Which rule does the form say Item 8's statements must meet?", options: ["Regulation S-K", "IRS Publication 583", "Regulation S-X", "The PCAOB's rules"], correctIndex: 2, explanation: "\"Financial statements meeting the requirements of Regulation S-X\"; Item 7 points to S-K (lesson 8).", sourceLessonSlug: "find-the-10-k" },
          { prompt: "What should you check before relying on this course's figures?", options: ["The stock's price", "The auditor's fee", "Tax rates this year", "EDGAR for a newer 10-K"], correctIndex: 3, explanation: "The figures stay dated to fiscal 2025; a newer 10-K may exist (lesson 8).", sourceLessonSlug: "find-the-10-k" },
          { prompt: "Which Item of Regulation S-K governs the MD&A?", options: ["Item 303", "Item 301", "Item 105", "Item 8"], correctIndex: 0, explanation: "Item 303, 17 CFR 229.303 (lesson 9).", sourceLessonSlug: "md-and-a-against-the-numbers" },
          { prompt: "Whose perspective does Item 303 say the MD&A should show?", options: ["The auditor's", "Management's", "The SEC staff's", "Shareholders'"], correctIndex: 1, explanation: "It should \"allow investors to view the registrant from management's perspective\" (lesson 9).", sourceLessonSlug: "md-and-a-against-the-numbers" },
          { prompt: "How does the SEC 10-K bulletin describe the MD&A?", options: ["An audited summary", "A list of risks", "Management's story", "A legal opinion"], correctIndex: 2, explanation: "It \"allows company management to tell its story in its own words\" (lesson 9).", sourceLessonSlug: "md-and-a-against-the-numbers" },
          { prompt: "What habit does the lesson build for reading the MD&A?", options: ["Skip it entirely", "Trust it fully", "Read it last only", "Check its numbers"], correctIndex: 3, explanation: "Take a claim and find the number behind it in the statements (lesson 9).", sourceLessonSlug: "md-and-a-against-the-numbers" },
          { prompt: "By how much does the MD&A say total revenue increased in 2025?", options: ["5.4%", "1.7%", "2.7%", "16.2%"], correctIndex: 0, explanation: "\"Total revenue increased 5.4% to $11.9 billion\" (lesson 9).", sourceLessonSlug: "md-and-a-against-the-numbers" },
          { prompt: "What happened to comparable restaurant sales in 2025?", options: ["Rose 5.4%", "Fell 1.7%", "Rose 2.7%", "Fell 5.4%"], correctIndex: 1, explanation: "\"Comparable restaurant sales decreased 1.7%\" (lesson 9).", sourceLessonSlug: "md-and-a-against-the-numbers" },
          { prompt: "By how much did diluted earnings per share increase, per the MD&A?", options: ["5.4%", "1.7%", "2.7%", "1.14%"], correctIndex: 2, explanation: "\"$1.14, a 2.7% increase from $1.11\" (lesson 9).", sourceLessonSlug: "md-and-a-against-the-numbers" },
          { prompt: "How do you check the MD&A's 5.4% revenue claim?", options: ["Ask the auditor", "Read the cover", "Use page 36 cash", "Divide page 37 revenue"], correctIndex: 3, explanation: "11,925,601 divided by 11,313,853 is about 1.054 (lesson 9).", sourceLessonSlug: "md-and-a-against-the-numbers" },
          { prompt: "On what page is the change in restaurant sales table?", options: ["Page 26", "Page 24", "Page 37", "Page 45"], correctIndex: 0, explanation: "Item 7, page 26 (lesson 9).", sourceLessonSlug: "md-and-a-against-the-numbers" },
          { prompt: "In the sales bridge, what did comparable restaurant sales contribute?", options: ["+191.3 million", "-191.3 million", "+327.0 million", "-31.6 million"], correctIndex: 1, explanation: "(191.3) million, a decrease (lesson 9).", sourceLessonSlug: "md-and-a-against-the-numbers" },
          { prompt: "In the sales bridge, what did restaurants opened in 2024 add?", options: ["327.0 million", "25.8 million", "481.8 million", "191.3 million"], correctIndex: 2, explanation: "481.8 million; the 2025 openings added 327.0 (lesson 9).", sourceLessonSlug: "md-and-a-against-the-numbers" },
          { prompt: "In the sales bridge, what did restaurants opened in 2025 add?", options: ["481.8 million", "191.3 million", "31.6 million", "327.0 million"], correctIndex: 3, explanation: "327.0 million (lesson 9).", sourceLessonSlug: "md-and-a-against-the-numbers" },
          { prompt: "Why did revenue rise while comparable sales fell?", options: ["New restaurants opened", "Prices were cut", "Gift cards expired", "Taxes were refunded"], correctIndex: 0, explanation: "The 2024 and 2025 openings added more than 800 million, more than comparable sales lost (lesson 9).", sourceLessonSlug: "md-and-a-against-the-numbers" },
          { prompt: "What does the comparable sales measure leave out, as the bridge shows?", options: ["All gift card sales", "The newest restaurants", "Every delivery order", "Sales tax collected"], correctIndex: 1, explanation: "The bridge lists the newest restaurants on their own lines, apart from comparable sales (lesson 9).", sourceLessonSlug: "md-and-a-against-the-numbers" },
          { prompt: "What did restaurant closures take away in the sales bridge?", options: ["191.3 million", "25.8 million", "31.6 million", "327.0 million"], correctIndex: 2, explanation: "(31.6) million (lesson 9).", sourceLessonSlug: "md-and-a-against-the-numbers" },
          { prompt: "What total does the sales bridge end at, in millions?", options: ["11,313.9", "11,122.6", "12,034.2", "11,925.6"], correctIndex: 3, explanation: "11,925.6 million, matching page 37's 11,925,601 thousand (lesson 9).", sourceLessonSlug: "md-and-a-against-the-numbers" },
          { prompt: "How many company-owned restaurants were there at the start of 2025?", options: ["3,726", "4,042", "3,938", "334"], correctIndex: 0, explanation: "3,726 at the beginning of the year (page 25; lesson 9).", sourceLessonSlug: "md-and-a-against-the-numbers" },
          { prompt: "How many restaurant openings does page 25 show for 2025?", options: ["13", "334", "5", "104"], correctIndex: 1, explanation: "334 openings (lesson 9).", sourceLessonSlug: "md-and-a-against-the-numbers" },
          { prompt: "How many permanent closures does page 25 show for 2025?", options: ["5", "334", "13", "104"], correctIndex: 2, explanation: "13 permanent closures; 5 is the number of relocations (lesson 9).", sourceLessonSlug: "md-and-a-against-the-numbers" },
          { prompt: "What does the bridge's footnote say the Other line includes?", options: ["Delivery fees", "Menu price changes", "New store rents", "Breakage adjustments"], correctIndex: 3, explanation: "\"The impact of gift card breakage adjustments\" (lesson 9).", sourceLessonSlug: "md-and-a-against-the-numbers" },
          { prompt: "How much additional breakage revenue does the footnote report for 2025?", options: ["$20.1 million", "$27.9 million", "$7.8 million", "$25.8 million"], correctIndex: 0, explanation: "\"$20.1 million of additional gift card breakage revenue\" compared with 2024 (lesson 9).", sourceLessonSlug: "md-and-a-against-the-numbers" },
          { prompt: "What does matching the MD&A to the statements show?", options: ["The stock is cheap", "It reports them right", "The firm will grow", "No fraud occurred"], correctIndex: 1, explanation: "Only that the MD&A reports the statements correctly; it says nothing about investing (lesson 9).", sourceLessonSlug: "md-and-a-against-the-numbers" },
          { prompt: "Which statement fits this course's posture on the MD&A?", options: ["It ranks the stock", "It forecasts revenue", "It is not advice", "It sets price goals"], correctIndex: 2, explanation: "The course describes what a filing says; it is not investment advice (lesson 9).", sourceLessonSlug: "md-and-a-against-the-numbers" },
          { prompt: "What does the SEC guide say about footnotes?", options: ["They can be skipped", "They repeat the totals", "They are unaudited", "They are packed with info"], correctIndex: 3, explanation: "\"The footnotes to financial statements are packed with information\" (lesson 10).", sourceLessonSlug: "the-footnote-behind-the-number" },
          { prompt: "Why can two similar companies print different numbers?", options: ["Different policies", "Different auditors", "Different fonts", "Different stock prices"], correctIndex: 0, explanation: "They may choose different accounting policies, which the notes disclose (lesson 10).", sourceLessonSlug: "the-footnote-behind-the-number" },
          { prompt: "What does Note 1 summarize, besides the business?", options: ["Leases and Debt", "Accounting policies", "Revenue Recognition", "Supplemental info"], correctIndex: 1, explanation: "\"Description of Business and Summary of Significant Accounting Policies\" (lesson 10).", sourceLessonSlug: "the-footnote-behind-the-number" },
          { prompt: "On which pages does Note 1 run?", options: ["Pages 34 to 35", "Pages 36 to 39", "Pages 40 to 46", "Pages 47 to 48"], correctIndex: 2, explanation: "Page 40 to page 46 (lesson 10).", sourceLessonSlug: "the-footnote-behind-the-number" },
          { prompt: "Inventory is valued at the lower of first-in, first-out cost or what?", options: ["Replacement cost", "Retail price", "Original cost", "Net realizable value"], correctIndex: 3, explanation: "\"The lower of first-in, first-out cost or net realizable value\" (Note 1, page 41; lesson 10).", sourceLessonSlug: "the-footnote-behind-the-number" },
          { prompt: "What does first-in, first-out assume?", options: ["First items bought are used first", "Last items bought are used first", "All items cost the same amount", "Items are valued at sale price"], correctIndex: 0, explanation: "As the name says, the first items bought are treated as the first used (lesson 10).", sourceLessonSlug: "the-footnote-behind-the-number" },
          { prompt: "On what page is the inventory policy?", options: ["Page 36", "Page 41", "Page 42", "Page 45"], correctIndex: 1, explanation: "Note 1, page 41 (lesson 10).", sourceLessonSlug: "the-footnote-behind-the-number" },
          { prompt: "On what page is the depreciation policy?", options: ["Page 40", "Page 44", "Page 42", "Page 48"], correctIndex: 2, explanation: "Note 1, page 42 (lesson 10).", sourceLessonSlug: "the-footnote-behind-the-number" },
          { prompt: "Which Note 1 policy, on page 40, did lesson 7 rely on?", options: ["Revenue at point of sale", "Straight-line depreciation", "Gift cards as unearned", "Repurchased shares retired"], correctIndex: 3, explanation: "Repurchased shares are immediately retired, page 40 (lesson 10).", sourceLessonSlug: "the-footnote-behind-the-number" },
          { prompt: "What was gift card breakage revenue in 2025, in thousands?", options: ["27,877", "7,760", "1,162", "20,117"], correctIndex: 0, explanation: "27,877 (Note 1, page 45; lesson 10).", sourceLessonSlug: "the-footnote-behind-the-number" },
          { prompt: "What was gift card breakage revenue in 2024, in thousands?", options: ["27,877", "7,760", "1,162", "20,117"], correctIndex: 1, explanation: "7,760 (Note 1, page 45; lesson 10).", sourceLessonSlug: "the-footnote-behind-the-number" },
          { prompt: "What was gift card breakage revenue in 2023, in thousands?", options: ["27,877", "7,760", "1,162", "20,117"], correctIndex: 2, explanation: "1,162 (Note 1, page 45; lesson 10).", sourceLessonSlug: "the-footnote-behind-the-number" },
          { prompt: "What does 27,877 minus 7,760 come to?", options: ["35,637", "19,117", "21,017", "20,117"], correctIndex: 3, explanation: "20,117 thousand, the MD&A's $20.1 million (lesson 10).", sourceLessonSlug: "the-footnote-behind-the-number" },
          { prompt: "Where in the notes is gift card breakage revenue reported?", options: ["Note 1, page 45", "Note 3, page 48", "Note 9, page 58", "Note 12, page 61"], correctIndex: 0, explanation: "In the gift card policy, Note 1, page 45 (lesson 10).", sourceLessonSlug: "the-footnote-behind-the-number" },
          { prompt: "What does the MD&A call the change in breakage?", options: ["Gift card write-offs", "Breakage adjustments", "Loyalty redemptions", "Unearned discounts"], correctIndex: 1, explanation: "\"Gift card breakage adjustments\" (lesson 10).", sourceLessonSlug: "the-footnote-behind-the-number" },
          { prompt: "Roughly how many times 2024's breakage revenue was 2025's?", options: ["About 1.5 times", "About 2 times", "About 3.6 times", "About 10 times"], correctIndex: 2, explanation: "27,877 divided by 7,760 is about 3.6 (lesson 10).", sourceLessonSlug: "the-footnote-behind-the-number" },
          { prompt: "By how much did total revenue grow in 2025, in thousands?", options: ["20,117", "191,300", "808,800", "611,748"], correctIndex: 3, explanation: "11,925,601 minus 11,313,853 = 611,748 (lesson 10).", sourceLessonSlug: "the-footnote-behind-the-number" },
          { prompt: "Why is the jump in breakage revenue worth noticing?", options: ["It came from policy", "It was the largest line", "It was a one-time loss", "It reduced net income"], correctIndex: 0, explanation: "It is revenue from the gift card policy rather than from serving more meals (lesson 10).", sourceLessonSlug: "the-footnote-behind-the-number" },
          { prompt: "Where should you look when an MD&A line says Other?", options: ["The cover page", "Its footnote", "The stock price", "The exhibits"], correctIndex: 1, explanation: "Look for its footnote, then the note behind it (lesson 10).", sourceLessonSlug: "the-footnote-behind-the-number" },
          { prompt: "What does this course say about how breakage is determined?", options: ["It is set by the IRS", "It equals all balances", "Read Note 1 on page 45", "It is set by the auditor"], correctIndex: 2, explanation: "The method is in Note 1's gift card paragraph, which the course asks you to read yourself (lesson 10).", sourceLessonSlug: "the-footnote-behind-the-number" },
          { prompt: "Which source says Item 8's statements are accompanied by notes?", options: ["The cover page", "Form 10-K Item 6", "The 2020 rule", "The SEC bulletin"], correctIndex: 3, explanation: "The SEC's 10-K bulletin, page 3 (lesson 10).", sourceLessonSlug: "the-footnote-behind-the-number" },
          { prompt: "Why is the 49,508 of inventory not just food times today's price?", options: ["A policy set its value", "The auditor guessed it", "It includes leases", "It is in millions"], correctIndex: 0, explanation: "The FIFO, lower-of policy decided how it is valued (lesson 10).", sourceLessonSlug: "the-footnote-behind-the-number" },
          { prompt: "On which pages is the auditor's report?", options: ["Pages 24 to 26", "Pages 34 to 35", "Pages 36 to 39", "Pages 40 to 46"], correctIndex: 1, explanation: "Item 8, pages 34 to 35 (lesson 11).", sourceLessonSlug: "the-auditors-opinion" },
          { prompt: "Which firm audited the statements?", options: ["Deloitte & Touche LLP", "Grant Thornton LLP", "Ernst & Young LLP", "Moss Adams LLP"], correctIndex: 2, explanation: "Ernst & Young LLP (lesson 11).", sourceLessonSlug: "the-auditors-opinion" },
          { prompt: "What date is the auditor's report dated?", options: ["December 31, 2025", "January 30, 2026", "March 17, 2026", "February 4, 2026"], correctIndex: 3, explanation: "February 4, 2026, the day the 10-K was filed (lesson 11).", sourceLessonSlug: "the-auditors-opinion" },
          { prompt: "Since what year has this firm audited the company?", options: ["1997", "2006", "1993", "2020"], correctIndex: 0, explanation: "\"We have served as the Company's auditor since 1997\" (lesson 11).", sourceLessonSlug: "the-auditors-opinion" },
          { prompt: "What PCAOB ID does the report give for the firm?", options: ["1997", "42", "303", "10"], correctIndex: 1, explanation: "PCAOB ID 42 (lesson 11).", sourceLessonSlug: "the-auditors-opinion" },
          { prompt: "What does the opinion say the statements do?", options: ["Guarantee profits", "Forecast fairly", "Present fairly", "Exceed targets"], correctIndex: 2, explanation: "They \"present fairly, in all material respects\" (lesson 11).", sourceLessonSlug: "the-auditors-opinion" },
          { prompt: "What does \"in all material respects\" not promise?", options: ["A fair picture", "Things that matter", "A clean opinion", "Every number exact"], correctIndex: 3, explanation: "It covers what matters to the picture, not every figure to the last dollar (lesson 11).", sourceLessonSlug: "the-auditors-opinion" },
          { prompt: "What rules does the opinion measure the statements against?", options: ["U.S. GAAP", "IRS tax rules", "SBA lending rules", "Exchange rules"], correctIndex: 0, explanation: "\"In conformity with U.S. generally accepted accounting principles\" (lesson 11).", sourceLessonSlug: "the-auditors-opinion" },
          { prompt: "Which years' balance sheets does the opinion cover?", options: ["2024 and 2023", "2025 and 2024", "2025 only", "2023 to 2025"], correctIndex: 1, explanation: "Financial position \"at December 31, 2025 and 2024\" (lesson 11).", sourceLessonSlug: "the-auditors-opinion" },
          { prompt: "How many years of operations and cash flows does the opinion cover?", options: ["One", "Two", "Three", "Five"], correctIndex: 2, explanation: "\"For each of the three years in the period ended December 31, 2025\" (lesson 11).", sourceLessonSlug: "the-auditors-opinion" },
          { prompt: "Which best describes an audit opinion?", options: ["A stock rating", "A sales forecast", "A fraud guarantee", "A professional's view"], correctIndex: 3, explanation: "A professional's opinion that the statements fairly present the finances under the rules (lesson 11).", sourceLessonSlug: "the-auditors-opinion" },
          { prompt: "What does the SEC bulletin say most audit reports express?", options: ["An unqualified opinion", "A qualified opinion", "A disclaimer of opinion", "An adverse opinion"], correctIndex: 0, explanation: "\"Most audit reports express an 'unqualified opinion'\" (lesson 11).", sourceLessonSlug: "the-auditors-opinion" },
          { prompt: "What is an unqualified opinion?", options: ["One with exceptions", "A clean opinion", "A refused opinion", "A draft opinion"], correctIndex: 1, explanation: "A clean opinion with no exceptions (lesson 11).", sourceLessonSlug: "the-auditors-opinion" },
          { prompt: "What should a reader do on meeting a qualified opinion?", options: ["Ignore it", "Sell at once", "Look carefully", "File a complaint"], correctIndex: 2, explanation: "The bulletin says a qualified opinion or disclaimer deserves a careful look (lesson 11).", sourceLessonSlug: "the-auditors-opinion" },
          { prompt: "What critical audit matter does the report name?", options: ["Lease rate assumptions", "Gift card breakage", "Inventory counts", "Stock-based compensation"], correctIndex: 3, explanation: "\"Evaluation of stock-based compensation performance condition assumptions\" (lesson 11).", sourceLessonSlug: "the-auditors-opinion" },
          { prompt: "Where else does stock-based compensation appear as a critical item?", options: ["Management's estimates", "The 10-K cover page", "Note 12, on debt", "Item 6, reserved"], correctIndex: 0, explanation: "It is one of the four critical accounting estimates in the MD&A (lesson 11).", sourceLessonSlug: "the-auditors-opinion" },
          { prompt: "Which law requires the CEO and CFO to certify the 10-K?", options: ["The JOBS Act", "Sarbanes-Oxley", "The Tax Code", "Securities Act"], correctIndex: 1, explanation: "The Sarbanes-Oxley Act, per the SEC bulletin (lesson 11).", sourceLessonSlug: "the-auditors-opinion" },
          { prompt: "Where are the officers' certifications usually found?", options: ["Items 1 and 1A", "Notes 1 and 3", "Exhibits 31 and 32", "Pages 36 and 37"], correctIndex: 2, explanation: "Exhibits 31 and 32 (lesson 11).", sourceLessonSlug: "the-auditors-opinion" },
          { prompt: "Which certification exhibits does this filing's index list?", options: ["EX-10.1 and EX-21", "EX-1.1 and EX-2.1", "EX-99.1 only", "EX-31.1, 31.2, 32.1"], correctIndex: 3, explanation: "EX-31.1, EX-31.2 and EX-32.1 (lesson 11).", sourceLessonSlug: "the-auditors-opinion" },
          { prompt: "In the lesson's summary, what is the auditor's job?", options: ["Opine on statements", "Write the 10-K", "Publish the 10-K", "Certify for the CEO"], correctIndex: 0, explanation: "Management writes and certifies; the auditor gives an opinion on the statements; the SEC publishes (lesson 11).", sourceLessonSlug: "the-auditors-opinion" },
          { prompt: "Is an audit opinion a guarantee against fraud?", options: ["Yes, always", "No, it is not", "Only if clean", "Only for cash"], correctIndex: 1, explanation: "It is an opinion on fair presentation, narrower than a guarantee (lesson 11).", sourceLessonSlug: "the-auditors-opinion" },
          { prompt: "Where in the 10-K does the auditor's report sit?", options: ["After all the notes", "On the cover page", "Before the statements", "In the exhibit list"], correctIndex: 2, explanation: "At the front of Item 8, before the statements (lesson 11).", sourceLessonSlug: "the-auditors-opinion" },
          { prompt: "What does \"present fairly\" stop short of saying?", options: ["A fair picture", "Under the rules", "Most things", "With no errors"], correctIndex: 3, explanation: "It does not say \"exactly\" or \"with no errors\" (lesson 11).", sourceLessonSlug: "the-auditors-opinion" },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4: Judgment
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "what-management-chose",
      title: "12 · What management chose",
      section: S4,
      recallContent: [
        {
          prompt: "What does \"present fairly, in all material respects\" not promise?",
          answer: "That every number is exact, or that there is no error or fraud. It is an opinion on a fair picture in what matters.",
        },
        {
          prompt: "What critical audit matter does the auditor's report name?",
          answer: "\"Evaluation of stock-based compensation performance condition assumptions.\"",
        },
      ],
      body: `> **Before release:** needs a qualified reviewer (QR): a CPA or a college accounting instructor, who also checks this lesson's reading of "no outstanding debt" beside a liabilities-to-equity ratio of about 2.18 and the lease-rate example (brief answer 8).

**Numbers that rest on choices.** Lesson 5 showed that depreciation depends on "estimated useful lives." Lesson 10 showed that a policy decides how inventory is valued. Many figures in a filing rest on judgments like these. The SEC requires companies to say which ones matter most.

**What the rule says.** In 2020 the SEC added "a new Item 303(b)(3), Critical accounting estimates" to the rule that governs the MD&A. Its definition (17 CFR 229.303(b)(3)): "Critical accounting estimates are those estimates made in accordance with generally accepted accounting principles that involve a significant level of estimation uncertainty and have had or are reasonably likely to have a material impact on the financial condition or results of operations of the registrant." Two tests, then: the estimate is uncertain, and it matters. The SEC's 10-K bulletin describes the same part of the MD&A as "Critical accounting judgments, such as estimates and assumptions." This course quotes the rule from the printed edition revised as of April 1, 2025; later changes have not been checked.

**This filing's four.** The Critical Accounting Estimates section of the 10-K for ${DATED} (Item 7, pages 31 to 32) names four:

1. Leases
2. Impairment of long-lived assets
3. Stock-based compensation
4. Income taxes

You met the third in lesson 11: the auditor's one critical audit matter is about stock-based compensation too. Management and the auditor point at the same place.

**The lease estimate, close up.** Lesson 4 showed that the largest lines on the balance sheet are leases: operating lease assets of 4,463,010 thousand, and lease liabilities of 302,380 (current) plus 4,773,434 (long-term). To put a value on a lease liability, the company needs an interest rate, the incremental borrowing rate. Here is how it gets one (Item 7, page 31; the same sentence is in Note 1, page 43): "As we have no outstanding debt, we estimate this rate based on prevailing financial market conditions, comparable company and credit analysis, and management judgment." Because it does not borrow, it has no loan rate of its own to point to, so management estimates one. And the section says that if this estimate changed, "our operating lease assets and liabilities could differ materially." The biggest numbers on the balance sheet rest partly on a rate management chose. That is exactly what the rule asks a company to disclose. How lease amounts are measured is set by accounting standards this course does not teach; what you can read is that the estimate exists and that the company calls it critical.

**A reading lesson: "no debt" and 2.18.** The company says, twice, that it has no debt: "As we have no outstanding debt" (page 31), and in Note 12 (page 61), on its $500,000 thousand revolving credit facility, "We had no outstanding borrowings under the credit facility." Now open the SEC's *Beginners' Guide*. It defines a ratio and prints its formula: "Debt-to-Equity Ratio = Total Liabilities / Shareholders' Equity." Apply it to page 36 for December 31, 2025:

6,163,924 divided by 2,830,607 = about **2.18**.

A company with "no debt" and a "debt-to-equity ratio" of 2.18. Is one of them wrong? No. Look at what each one counts.

- The company's "no outstanding debt" means no borrowings: no bank loans, nothing drawn on its credit facility.
- The guide's formula uses **total liabilities**, everything the company owes. Here most of that is leases. Add the two lease lines: 302,380 + 4,773,434 = 5,075,814, which is about 82% of total liabilities (5,075,814 divided by 6,163,924). Unearned revenue from lesson 3 is in there too.

The same word, "debt," means two different things in two sources. Neither source is wrong; they count different things. The ratio is also high partly because equity is small, and lesson 7 showed why: the company spent more on buybacks than it earned, the main reason equity fell from 3,655,546 to 2,830,607 thousand. On the 2024 column the same formula gives 5,548,828 divided by 3,655,546, about 1.52. The ratio rose in a year, mostly because the bottom number shrank.

**The habit.** Before you compare a ratio, find out what goes into it. Never repeat "a debt-to-equity ratio of 2.18" about this company as if it meant borrowing. It does not, and the filing tells you so.

**Where the definitions come from.** Behind the standards sits the Financial Accounting Standards Board's (FASB) conceptual framework. The *Journal of Accountancy* reported that in December 2021 the FASB issued two chapters of Concepts Statement No. 8, Chapter 4, "Elements of Financial Statements," and Chapter 7, "Presentation," and that "Each Statement of Financial Accounting Concepts is nonauthoritative." This course has not read the FASB's own text, so it names the framework only as background, through that report.

:::reveal What two tests make an estimate "critical" under Item 303(b)(3)? ||| It involves a significant level of estimation uncertainty, and it has had or is reasonably likely to have a material impact on the company's financial condition or results.

:::reveal Why does management estimate the lease rate itself? ||| "As we have no outstanding debt," it has no borrowing rate of its own, so it estimates one from market conditions, comparable companies and credit analysis, and judgment.

:::reveal The company has no borrowings, yet total liabilities divided by equity is about 2.18. Explain. ||| The formula counts all liabilities, about 82% of which here are operating lease liabilities, not borrowings. Same word, two meanings.

## Vocabulary
- **Critical accounting estimate**: an estimate that is highly uncertain and could materially change the results, disclosed in the MD&A.
- **Incremental borrowing rate**: the interest rate used to value lease liabilities, which this company estimates because it has no debt.
- **Revolving credit facility**: a line of credit a company can draw on; this company had drawn nothing.
- **Total liabilities to equity**: total liabilities divided by shareholders' equity, the formula the SEC guide labels debt-to-equity.

## Sources
- ${CFR_303} Locator: § 229.303(b)(3), printed p. 414 (the definition of critical accounting estimates). ${CFR_EDITION} ${TA}
- ${SEC_2020} Locator: the list of amendments ("a new Item 303(b)(3), Critical accounting estimates"). ${TA}
- ${SEC_BULLETIN} Locator: PDF pp. 2 to 3 (critical accounting judgments in the MD&A). ${TA}
- ${SEC_GUIDE} Locator: section "Financial Statement Analysis" (the debt-to-equity formula). ${TA}
- ${CMG_10K} Locator: Item 7, pp. 31 to 32, Critical Accounting Estimates (the four; the lease rate; "could differ materially"); Note 1, p. 43 (the same lease-rate sentence); Note 12, p. 61 (the credit facility; no outstanding borrowings); Item 8, p. 36 (total liabilities, equity and lease lines). ${TB}
- ${DREW_2021} Locator: the article's report of Concepts Statement No. 8, Chapters 4 and 7, and that concepts statements are nonauthoritative. ${TB}
- ${FASB_CON8} Named through Drew (2021); the FASB's own page could not be read. ${TC}`,
    },
    {
      slug: "who-has-to-file",
      title: "13 · Who has to file",
      section: S4,
      recallContent: [
        {
          prompt: "Name the four critical accounting estimates in the fiscal 2025 10-K.",
          answer: "Leases; impairment of long-lived assets; stock-based compensation; income taxes.",
        },
        {
          prompt: "Why can a company with no borrowings show total liabilities to equity of about 2.18?",
          answer: "Total liabilities include operating lease liabilities, about 82% of the total here, which are not borrowings.",
        },
      ],
      body: `${QR}

**Not every company files.** Everything in this course so far depends on one fact: the company had to file a 10-K, so its statements are public, audited and on EDGAR for free. The SEC's 10-K bulletin says most U.S. public companies must file one each year. Not every business is a public company. Before you go looking for a company's 10-K, it helps to know when one has to exist.

**One line the SEC draws: registration.** The SEC's 2016 compliance guide for smaller companies explains when a company must register a class of its shares under the Securities Exchange Act. An issuer that is not a bank "is required to register a class of equity securities under the Exchange Act if" it has "more than $10 million of total assets" and the securities are "held of record" by "either 2,000 persons, or 500 persons who are not accredited investors." Both parts matter: the asset size and the number of holders of record. (Accredited investor is a defined term in the securities rules; this course does not go into it.) This course does not trace every route from registration to the duty to file a 10-K. The cover page is where each filer states its own position.

**The cover page asks the question.** Every 10-K cover page asks the filer to say where it stands. This filing's cover asks whether the registrant "is not required to file reports pursuant to Section 13 or Section 15(d) of the Act," and the box marked is No. In plain words: it is required to file. The same cover checks "Large accelerated filer" (lesson 8), the category with the shortest deadline.

**What this means for you as a reader.** The skills in this course work on any company that files a 10-K, because its 10-K follows the same Items, the same Regulation S-X statements and the same Item 303 MD&A. For a company that is not required to file, there may be no 10-K to read. If it keeps double-entry books, its numbers are built from the same equation as any filer's. But they are private.

**Private does not mean no one asks.** A company that files nothing with the SEC may still be asked for financial statements, most often by a lender. The Small Business Administration's page on its 7(a) loan program says: "The contents of the loan application vary depending on the size of the loan and the lender's processing method." And: "Your lender will help you determine which documents you'll need based on your individual circumstances." Its working-capital loan program describes a business that "Can produce timely and accurate financial statements, accounts receivable and accounts payable agings, and inventory reports." So there is no single list. What a lender asks for depends on the lender, the loan and the business. When one does ask, the statements it wants are the kind this course has taught you to read.

**What this course will not tell you.** It will not say how many U.S. companies file with the SEC, or what share of all businesses that is. The research for this course looked for a reliable count and did not find one it could cite. A guess dressed up as a statistic would be worse than no number. What you can rely on is the test itself: the asset size and the holders of record in the compliance guide, and the box every filer marks on its cover page.

**Where to look first.** If you want to read a company's statements, search its name on EDGAR (lesson 8). If a 10-K is there, every lesson in this course applies. If nothing is there, the company may not be required to file, and its statements, if it shares them, will come from the company itself.

:::reveal Under the 12(g) test, when must a non-bank issuer register a class of equity securities? ||| When it has more than $10 million of total assets and the securities are held of record by 2,000 persons, or by 500 persons who are not accredited investors.

:::reveal How does this filing's cover page show it must file reports? ||| It asks whether the registrant is not required to file under Section 13 or 15(d), and the box marked is No.

:::reveal What will a lender ask a private company for? ||| It varies. The SBA says application contents depend on the loan's size and the lender's process, and the lender helps decide which documents are needed.

## Vocabulary
- **Registration**: the step that makes a company's class of shares subject to the SEC's reporting rules.
- **Holders of record**: the persons who hold a company's securities on its records, counted in the registration test.
- **Section 13 and Section 15(d)**: the parts of the Exchange Act under which companies file reports, named on the 10-K cover.
- **Private company**: a company that is not required to file with the SEC, so its statements are not public.

## Sources
- ${SEC_12G} Locator: the summary of registration thresholds for issuers that are not banks ($10 million of total assets; 2,000 persons, or 500 who are not accredited investors). ${TA}
- ${SEC_BULLETIN} Locator: PDF p. 1 (most U.S. public companies file a 10-K). ${TA}
- ${CMG_10K} Locator: cover page (the Section 13 or 15(d) question marked No; "Large accelerated filer"). ${TB}
- ${SBA_7A} Locator: sections "Who can benefit?" (the working-capital program's financial statements) and "How do I apply?" (contents vary; the lender helps determine documents). ${TA}`,
    },
    {
      slug: "section-4-quiz",
      title: "Section 4 quiz · Judgment",
      section: S4,
      body: "A graded check on critical accounting estimates, the lease-rate example, reading \"no debt\" beside a liabilities-to-equity ratio, and which companies have to file. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "In what year did the SEC add Item 303(b)(3)?", options: ["2020", "2011", "2014", "2025"], correctIndex: 0, explanation: "The November 19, 2020 amendments added \"a new Item 303(b)(3), Critical accounting estimates\" (lesson 12).", sourceLessonSlug: "what-management-chose" },
          { prompt: "What does Item 303(b)(3) cover?", options: ["Selected financial data", "Critical accounting estimates", "Risk factor summary pages", "Executive compensation tables"], correctIndex: 1, explanation: "Critical accounting estimates, disclosed in the MD&A (lesson 12).", sourceLessonSlug: "what-management-chose" },
          { prompt: "Which two tests make an estimate critical under the rule?", options: ["Large and recent", "Audited and signed", "Uncertain and material", "Old and unchanged"], correctIndex: 2, explanation: "A significant level of estimation uncertainty, and a material impact that has happened or is reasonably likely (lesson 12).", sourceLessonSlug: "what-management-chose" },
          { prompt: "Under what basis must a critical estimate be made, per the rule?", options: ["Tax rules", "SBA rules", "Bank rules", "GAAP"], correctIndex: 3, explanation: "\"Estimates made in accordance with generally accepted accounting principles\" (lesson 12).", sourceLessonSlug: "what-management-chose" },
          { prompt: "How does the SEC bulletin describe this part of the MD&A?", options: ["Critical accounting judgments", "Selected financial data", "Quantitative market risk", "Controls and procedures"], correctIndex: 0, explanation: "\"Critical accounting judgments, such as estimates and assumptions\" (lesson 12).", sourceLessonSlug: "what-management-chose" },
          { prompt: "Where are the Critical Accounting Estimates in this filing?", options: ["Item 8, pp. 36 to 37", "Item 7, pp. 31 to 32", "Note 12, page 61", "Item 1A, page 9"], correctIndex: 1, explanation: "In the MD&A, Item 7, pages 31 to 32 (lesson 12).", sourceLessonSlug: "what-management-chose" },
          { prompt: "How many critical accounting estimates does this filing name?", options: ["Two", "Three", "Four", "Six"], correctIndex: 2, explanation: "Leases, impairment of long-lived assets, stock-based compensation and income taxes (lesson 12).", sourceLessonSlug: "what-management-chose" },
          { prompt: "Which is not one of the filing's four critical accounting estimates?", options: ["Leases", "Income taxes", "Impairment", "Breakage"], correctIndex: 3, explanation: "Gift card breakage is reported in Note 1 but is not on the critical estimates list (lesson 12).", sourceLessonSlug: "what-management-chose" },
          { prompt: "Which critical estimate matches the auditor's critical audit matter?", options: ["Stock-based compensation", "Impairment of assets", "Income taxes owed", "Lease interest rates"], correctIndex: 0, explanation: "Both point at stock-based compensation (lesson 12).", sourceLessonSlug: "what-management-chose" },
          { prompt: "What rate does the company estimate to value its lease liabilities?", options: ["The bank's posted loan rate", "Incremental borrowing rate", "The Federal Reserve rate", "Its own dividend payout rate"], correctIndex: 1, explanation: "The incremental borrowing rate (lesson 12).", sourceLessonSlug: "what-management-chose" },
          { prompt: "Why does management estimate the lease rate itself?", options: ["The auditor sets it", "The IRS requires it", "It has no debt", "Its leases are short"], correctIndex: 2, explanation: "\"As we have no outstanding debt, we estimate this rate\" (Item 7, page 31; lesson 12).", sourceLessonSlug: "what-management-chose" },
          { prompt: "Which of these does the lease-rate sentence name as an input?", options: ["Stock price trends", "Analyst forecasts", "Dividend history", "Management judgment"], correctIndex: 3, explanation: "Market conditions, comparable company and credit analysis, \"and management judgment\" (lesson 12).", sourceLessonSlug: "what-management-chose" },
          { prompt: "If the lease estimate changed, what does the filing say could differ materially?", options: ["Lease assets and liabilities", "Revenue and comparable sales", "Cash and restricted cash", "Gift card balances and breakage"], correctIndex: 0, explanation: "\"Our operating lease assets and liabilities could differ materially\" (lesson 12).", sourceLessonSlug: "what-management-chose" },
          { prompt: "Where else does the lease-rate sentence appear besides page 31?", options: ["Note 3, page 48", "Note 1, page 43", "Note 12, page 61", "Item 1, page 4"], correctIndex: 1, explanation: "The same sentence is in Note 1, page 43 (lesson 12).", sourceLessonSlug: "what-management-chose" },
          { prompt: "What were total operating lease liabilities, current plus long-term, at year-end 2025?", options: ["4,773,434", "4,463,010", "5,075,814", "6,163,924"], correctIndex: 2, explanation: "302,380 + 4,773,434 = 5,075,814 thousand (lesson 12).", sourceLessonSlug: "what-management-chose" },
          { prompt: "What size revolving credit facility does Note 12 describe, in thousands?", options: ["$50,000", "$5,000,000", "$250,000", "$500,000"], correctIndex: 3, explanation: "A $500,000 thousand facility, with nothing drawn (lesson 12).", sourceLessonSlug: "what-management-chose" },
          { prompt: "What did the company owe under its credit facility at year-end 2025?", options: ["Nothing", "$500 million", "$250 million", "$35 million"], correctIndex: 0, explanation: "\"We had no outstanding borrowings under the credit facility\" (Note 12, page 61; lesson 12).", sourceLessonSlug: "what-management-chose" },
          { prompt: "What formula does the SEC guide print for debt-to-equity?", options: ["Borrowings / total assets", "Total liabilities / equity", "Revenue / shareholders' equity", "Net income / total liabilities"], correctIndex: 1, explanation: "\"Debt-to-Equity Ratio = Total Liabilities / Shareholders' Equity\" (lesson 12).", sourceLessonSlug: "what-management-chose" },
          { prompt: "What is total liabilities divided by equity at December 31, 2025?", options: ["About 1.52", "About 3.18", "About 2.18", "About 0.46"], correctIndex: 2, explanation: "6,163,924 divided by 2,830,607 is about 2.18 (lesson 12).", sourceLessonSlug: "what-management-chose" },
          { prompt: "What is the same ratio for December 31, 2024?", options: ["About 2.18", "About 1.18", "About 0.66", "About 1.52"], correctIndex: 3, explanation: "5,548,828 divided by 3,655,546 is about 1.52 (lesson 12).", sourceLessonSlug: "what-management-chose" },
          { prompt: "What does the company mean by \"no outstanding debt\"?", options: ["No borrowings", "No liabilities", "No leases", "No unpaid bills"], correctIndex: 0, explanation: "No borrowings: no bank loans and nothing drawn on its facility. It still has liabilities (lesson 12).", sourceLessonSlug: "what-management-chose" },
          { prompt: "What does the guide's debt-to-equity formula put on top?", options: ["Only borrowings", "All liabilities", "Only leases", "Current debts"], correctIndex: 1, explanation: "Total liabilities, everything the company owes (lesson 12).", sourceLessonSlug: "what-management-chose" },
          { prompt: "About what share of total liabilities are operating lease liabilities?", options: ["About 18%", "About 50%", "About 82%", "About 95%"], correctIndex: 2, explanation: "5,075,814 divided by 6,163,924 is about 0.82 (lesson 12).", sourceLessonSlug: "what-management-chose" },
          { prompt: "Is either \"no debt\" or the 2.18 ratio wrong?", options: ["The 2.18 is wrong", "No debt is wrong", "Both are wrong", "Neither is wrong"], correctIndex: 3, explanation: "Both are right; the word \"debt\" means borrowings in one and all liabilities in the other (lesson 12).", sourceLessonSlug: "what-management-chose" },
          { prompt: "Why did the ratio rise from 2024 to 2025, mostly?", options: ["Equity shrank", "Loans rose", "Revenue fell", "Cash rose"], correctIndex: 0, explanation: "Equity fell from 3,655,546 to 2,830,607 thousand, so the bottom of the fraction shrank (lesson 12).", sourceLessonSlug: "what-management-chose" },
          { prompt: "What was the main reason equity fell in 2025?", options: ["A net loss", "Buybacks", "Lease costs", "Tax refunds"], correctIndex: 1, explanation: "The company spent more on buybacks than it earned (lessons 7 and 12).", sourceLessonSlug: "what-management-chose" },
          { prompt: "How should the 2.18 figure be described for this company?", options: ["As heavy bank borrowing", "As a clear buy signal", "As liabilities to equity", "As a market price ratio"], correctIndex: 2, explanation: "It is total liabilities to equity, not borrowing, and not a judgment of the stock (lesson 12).", sourceLessonSlug: "what-management-chose" },
          { prompt: "What habit does the lesson give for reading any ratio?", options: ["Compare it at once", "Round it to one digit", "Trust the highest one", "Learn what goes in it"], correctIndex: 3, explanation: "Before you compare a ratio, find out what goes into it (lesson 12).", sourceLessonSlug: "what-management-chose" },
          { prompt: "Which item from lesson 3 also sits inside total liabilities?", options: ["Unearned revenue", "Retained earnings", "Restricted cash", "Inventory"], correctIndex: 0, explanation: "Unearned revenue is a current liability (lesson 12).", sourceLessonSlug: "what-management-chose" },
          { prompt: "Who issues the conceptual framework named in this lesson?", options: ["The SEC", "The FASB", "The PCAOB", "The IRS"], correctIndex: 1, explanation: "The Financial Accounting Standards Board (lesson 12).", sourceLessonSlug: "what-management-chose" },
          { prompt: "How does the Journal of Accountancy say concepts statements stand?", options: ["They are binding law", "They are SEC rules", "Nonauthoritative", "They replace GAAP"], correctIndex: 2, explanation: "\"Each Statement of Financial Accounting Concepts is nonauthoritative\" (lesson 12).", sourceLessonSlug: "what-management-chose" },
          { prompt: "Which chapters of Concepts Statement No. 8 came out in December 2021?", options: ["1 and 2", "3 and 5", "6 and 8", "4 and 7"], correctIndex: 3, explanation: "Chapter 4, Elements of Financial Statements, and Chapter 7, Presentation (lesson 12).", sourceLessonSlug: "what-management-chose" },
          { prompt: "How does this course cite the FASB framework?", options: ["By title only", "With long quotes", "With a copied table", "With a hosted PDF"], correctIndex: 0, explanation: "By title only, through the Journal of Accountancy's report (lesson 12).", sourceLessonSlug: "what-management-chose" },
          { prompt: "Why does the course cite the FASB framework only by title?", options: ["It is out of print", "Its text was not read", "It is a federal work", "It was withdrawn"], correctIndex: 1, explanation: "The FASB's own text was not read, so nothing from it is quoted (lesson 12).", sourceLessonSlug: "what-management-chose" },
          { prompt: "What do lesson 5's useful lives and the lease rate have in common?", options: ["Both are taxes", "Both are cash", "Both are estimates", "Both are audited"], correctIndex: 2, explanation: "Both are figures management chose: estimated useful lives and an estimated rate (lesson 12).", sourceLessonSlug: "what-management-chose" },
          { prompt: "Which balance sheet figures rest partly on the lease rate?", options: ["Cash and inventory", "Revenue and labor", "Retained earnings", "The lease lines"], correctIndex: 3, explanation: "Operating lease assets and liabilities, the largest lines on page 36 (lesson 12).", sourceLessonSlug: "what-management-chose" },
          { prompt: "What total-asset level is part of the registration test in the SEC guide?", options: ["Over $10 million", "Over $1 million", "Over $100 million", "Over $500,000"], correctIndex: 0, explanation: "\"More than $10 million of total assets\" (lesson 13).", sourceLessonSlug: "who-has-to-file" },
          { prompt: "How many holders of record trigger registration, in general?", options: ["500", "2,000", "10,000", "100"], correctIndex: 1, explanation: "2,000 persons, or 500 who are not accredited investors (lesson 13).", sourceLessonSlug: "who-has-to-file" },
          { prompt: "How many holders who are not accredited investors trigger registration?", options: ["2,000", "100", "500", "35"], correctIndex: 2, explanation: "500 persons who are not accredited investors (lesson 13).", sourceLessonSlug: "who-has-to-file" },
          { prompt: "Which issuers does the quoted threshold apply to?", options: ["Only banks", "Only nonprofits", "Only foreign firms", "Issuers not banks"], correctIndex: 3, explanation: "The guide states the test for an issuer that is not a bank (lesson 13).", sourceLessonSlug: "who-has-to-file" },
          { prompt: "Which document explains the registration thresholds in this course?", options: ["An SEC compliance guide", "The 2011 SEC bulletin", "IRS Publication 583", "Form 10-K Item 7"], correctIndex: 0, explanation: "The SEC's 2016 small entity compliance guide (lesson 13).", sourceLessonSlug: "who-has-to-file" },
          { prompt: "How many parts does the registration test have?", options: ["One", "Two", "Three", "Four"], correctIndex: 1, explanation: "Asset size and the number of holders of record (lesson 13).", sourceLessonSlug: "who-has-to-file" },
          { prompt: "What does every 10-K cover page ask the filer?", options: ["Its stock price", "Its auditor's fee", "If it must file", "Its CEO's salary"], correctIndex: 2, explanation: "Whether it is not required to file reports under Section 13 or 15(d) (lesson 13).", sourceLessonSlug: "who-has-to-file" },
          { prompt: "How is the box marked on this filing's Section 13 or 15(d) question?", options: ["Yes", "Blank", "Both", "No"], correctIndex: 3, explanation: "No: it is not the case that it is not required to file (lesson 13).", sourceLessonSlug: "who-has-to-file" },
          { prompt: "What does that answer on the cover page mean?", options: ["It must file", "It may skip filing", "It filed late", "It is a bank"], correctIndex: 0, explanation: "It is required to file reports (lesson 13).", sourceLessonSlug: "who-has-to-file" },
          { prompt: "Which sections of the Exchange Act does the cover page name?", options: ["Sections 10 and 12", "Sections 13 and 15(d)", "Sections 302 and 906", "Sections 3 and 4"], correctIndex: 1, explanation: "Section 13 or Section 15(d) (lesson 13).", sourceLessonSlug: "who-has-to-file" },
          { prompt: "Why do this course's skills work on any 10-K filer?", options: ["All filers are big", "All are restaurants", "Same Items and rules", "All use one auditor"], correctIndex: 2, explanation: "Every 10-K follows the same Items, Regulation S-X statements and Item 303 MD&A (lesson 13).", sourceLessonSlug: "who-has-to-file" },
          { prompt: "What can be said of a company that is not required to file?", options: ["It keeps no books", "It must use cash basis", "It cannot borrow", "There may be no 10-K"], correctIndex: 3, explanation: "There may be no 10-K to read; its numbers are private (lesson 13).", sourceLessonSlug: "who-has-to-file" },
          { prompt: "Who most often asks a private company for financial statements?", options: ["A lender", "The SEC", "An auditor", "A competitor"], correctIndex: 0, explanation: "Most often a lender (lesson 13).", sourceLessonSlug: "who-has-to-file" },
          { prompt: "What does the SBA say about a 7(a) loan application's contents?", options: ["They are fixed by law", "They vary by loan", "They need a 10-K", "They are online only"], correctIndex: 1, explanation: "\"The contents of the loan application vary depending on the size of the loan and the lender's processing method\" (lesson 13).", sourceLessonSlug: "who-has-to-file" },
          { prompt: "Who helps decide which documents a 7(a) borrower needs?", options: ["The SEC", "The IRS", "The lender", "The auditor"], correctIndex: 2, explanation: "\"Your lender will help you determine which documents you'll need\" (lesson 13).", sourceLessonSlug: "who-has-to-file" },
          { prompt: "What does the SBA's working-capital program describe a business producing?", options: ["A filed Form 10-K", "Audited tax returns", "Stock price charts", "Financial statements"], correctIndex: 3, explanation: "\"Timely and accurate financial statements,\" agings and inventory reports (lesson 13).", sourceLessonSlug: "who-has-to-file" },
          { prompt: "Is there one standard list of what lenders ask private companies for?", options: ["No, it varies", "Yes, the SBA's", "Yes, the SEC's", "Yes, the IRS's"], correctIndex: 0, explanation: "It depends on the lender, the loan and the business (lesson 13).", sourceLessonSlug: "who-has-to-file" },
          { prompt: "How many U.S. companies file with the SEC, per this course?", options: ["About 4,042", "It gives no count", "About 10,000", "Most of them"], correctIndex: 1, explanation: "The course found no count it could cite, so it gives none (lesson 13).", sourceLessonSlug: "who-has-to-file" },
          { prompt: "Why does the course give no count of SEC filers?", options: ["It is secret", "It is too large", "None was found", "It changes daily"], correctIndex: 2, explanation: "The research found no reliable count it could cite (lesson 13).", sourceLessonSlug: "who-has-to-file" },
          { prompt: "Where should you look first for a company's statements?", options: ["The SBA site", "A stock forum", "The IRS site", "EDGAR"], correctIndex: 3, explanation: "Search its name on EDGAR (lesson 13).", sourceLessonSlug: "who-has-to-file" },
          { prompt: "If EDGAR has no 10-K for a company, what may be true?", options: ["It need not file", "It went bankrupt", "It is a bank", "It is overseas"], correctIndex: 0, explanation: "The company may not be required to file (lesson 13).", sourceLessonSlug: "who-has-to-file" },
          { prompt: "What kind of term is accredited investor, per the lesson?", options: ["A tax bracket", "A defined term", "A job title", "A stock class"], correctIndex: 1, explanation: "A defined term in the securities rules, which the course does not go into (lesson 13).", sourceLessonSlug: "who-has-to-file" },
          { prompt: "What filer category does the cover page check?", options: ["Smaller reporting", "Non-accelerated", "Large accelerated", "Emerging growth"], correctIndex: 2, explanation: "\"Large accelerated filer\" (lesson 13).", sourceLessonSlug: "who-has-to-file" },
          { prompt: "Under which law does the guide's registration test sit?", options: ["Securities Act", "JOBS Act alone", "Tax Code", "Exchange Act"], correctIndex: 3, explanation: "Registration \"under the Exchange Act\" (lesson 13).", sourceLessonSlug: "who-has-to-file" },
          { prompt: "What makes a private company's statements private?", options: ["They are not filed", "They are unaudited", "They are in pencil", "They use no GAAP"], correctIndex: 0, explanation: "They are not filed with the SEC, so they are not public (lesson 13).", sourceLessonSlug: "who-has-to-file" },
          { prompt: "Which statements would a lender likely want, per the lesson?", options: ["Stock price records", "The kind taught here", "Tax forms only", "Social media posts"], correctIndex: 1, explanation: "Financial statements of the kind this course teaches you to read (lesson 13).", sourceLessonSlug: "who-has-to-file" },
          { prompt: "What does a 10-K filer's MD&A follow, whatever the company?", options: ["IRS Publication 583", "Its own house format", "Regulation S-K 303", "SBA lending guidance"], correctIndex: 2, explanation: "Item 303 of Regulation S-K (lesson 13).", sourceLessonSlug: "who-has-to-file" },
          { prompt: "Which pair makes up the registration test in the guide?", options: ["Revenue and staff", "Profit and age", "Debt and cash", "Assets and holders"], correctIndex: 3, explanation: "Total assets and holders of record (lesson 13).", sourceLessonSlug: "who-has-to-file" },
          { prompt: "Does a company that files nothing still have an accounting equation?", options: ["Yes, if it keeps books", "No, never at all", "Only if it is audited", "Only if it is public"], correctIndex: 0, explanation: "If it keeps double-entry books, the same equation holds; only the statements are private (lesson 13).", sourceLessonSlug: "who-has-to-file" },
          { prompt: "Where does each filer state whether it must file reports?", options: ["In Item 8, page 36", "On its cover page", "In Note 1, page 40", "In Exhibit 32 only"], correctIndex: 1, explanation: "On the 10-K cover page (lesson 13).", sourceLessonSlug: "who-has-to-file" },
        ],
      },
    },
    // ── END OF LESSONS ──
  ],
};
