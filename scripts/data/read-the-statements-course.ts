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
    // ── END OF LESSONS ──
  ],
};
