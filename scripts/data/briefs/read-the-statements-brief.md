# Brief: Read the Statements (proposed FIRM-01)

**Status:** DRAFT for BAM's approval (2026-10-23). Not approved; no course file may be created from it until
BAM approves it (rubric gate A8).

**Why it lives here.** The course-brief rule in `CLAUDE.md` puts briefs in `plans/future-courses/`, which is
gitignored. This course will be authored by a cloud session that reads only committed files, so the brief and
its evidence pack are committed beside the course data (the CREW-05 brief did the same in `cloud-briefs/`).
**Evidence pack:** `scripts/data/briefs/read-the-statements-evidence.md`. Every ID below (F, E, A, M, R, N)
points into it. **Source plan:** the ElementaryMBA curriculum plan of 2026-08-28 (sections 3, 5.1, 6, 7, 8 and
11), whose text is also committed in `src/lib/future-work-content/proposals.ts`. **Decisions:** BAM's answers of
2026-10-23 on the FIRM series, summarized in section 3.

---

## 0. Registration at a glance

| Field | Proposed value |
|---|---|
| Slug | `read-the-statements` (no collision: searched every `scripts/seed-*.ts`, `scripts/`, `src/` and `tests/` on 2026-10-23; the only hit is the plan's echo in `src/lib/future-work-content/proposals.ts`). House slugs carry no series prefix (`credit-decisions` is MONEY-01, `the-slide-rule` is TOOLS-02) |
| Title | Read the Statements |
| Data module | `scripts/data/read-the-statements-course.ts`, exporting `READ_THE_STATEMENTS_COURSE: AuthoredCourse` |
| Schools | ElementaryMBA (`elementary-mba`), the series home; Learn.WitUS, as the series preview (section 3) |
| Category | ElementaryMBA: **Business Core**. Learn.WitUS: **Money & Property** |
| Series | `seriesSlug: "how-a-firm-works"`, `seriesTitle: "How a Firm Works"`, `seriesOrder: 1`, `seriesCode: "FIRM"`, `seriesPosition: "01"`, no track |
| Navigation | `navigationMode: "linear"` |
| Visibility (insert-only) | `visibility: "public"`, held with a `publishHoldReason` until a qualified reviewer signs off |
| Price (insert-only) | Proposed `price: 0`, `priceType: "free"` on both schools (question 4) |
| Research tier | **Tier 2** proposed (money and credential-adjacent; question 3) |
| Standards | Excused: one `BACKLOG` line (section 3) |
| Hold reason (draft) | "Held until a qualified reviewer (a CPA or a college accounting instructor) has checked every lesson marked QR, and until ElementaryMBA's courses are vetted. Research tier 2: every figure is read from one filed 10-K (Chipotle Mexican Grill, fiscal 2025, accession 0001058090-26-000009) and every rule from SEC, CFR, IRS or SBA text." |

## 1. Description

A learner opens one real annual report on the SEC's free EDGAR system and learns financial accounting from
it. They start with the accounting equation and the double entry that keeps it true, then the timing question
that separates cash from accrual. They read each statement in that one filing: the balance sheet, the income
statement, the cash flow statement and the statement of shareholders' equity, and prove that the four tie
together. Then they read the filing as a whole: where the statements sit, what management says about them,
which note holds the accounting policy behind a number, what the auditor's opinion promises and what it
does not, which estimates management calls critical, and who is not required to file anything at all.

The one filing is Chipotle Mexican Grill's Form 10-K for fiscal 2025, filed February 4, 2026 (F1). It was
chosen because it is short and legible: one reportable segment (F6), a business anyone understands from the
counter (F5), no outstanding borrowings (E29, E30), and a revenue policy that makes accrual visible through
gift cards and a loyalty program (E25, E26). Every figure in the course carries that filing's date and
accession number. The course describes what a public document says; it is information, not investment
advice, and it says so in three lessons.

**Learning outcomes.** By the end a learner can:

1. State the accounting equation and show that it holds on a real balance sheet (A1).
2. Record a simple transaction as a debit and a credit and explain why the books stay in balance (M10).
3. Explain cash versus accrual timing, using unearned revenue from gift cards as the worked case (E25, E26).
4. Say what each of the four statements shows, as of what date or over what period, and read its units.
5. Show how the statements tie: net income into retained earnings, and the cash flow statement's ending cash
   into the balance sheet (A2, A3).
6. Find a company's 10-K on EDGAR, record its filing date and accession number, and cite any figure by Item and
   printed page.
7. Check a claim in the MD&A against the statements (E22, E23).
8. Find the note that holds the policy behind a number, and name the estimate it rests on (E19, A9).
9. Say what an unqualified audit opinion and a critical accounting estimate each promise and do not promise.
10. Explain which companies must file with the SEC, and what a company that files nothing can still be asked
    for (M12, M14).

## 2. Outline (draft)

Four teaching sections and a capstone, 13 teaching lessons plus the capstone (the plan's shape: 12 to 14
lessons in four sections). Every section that teaches ends with a quiz; the final quiz sits last. Lesson
titles follow CREW-01's numbering ("1 · Title"). Slugs are proposals and become permanent once seeded.

### Section 1 · The equation and the entry

| # | Slug | Teaches | Evidence |
|---|---|---|---|
| 1 | `two-sides-of-every-transaction` | The equation (assets = liabilities + shareholders' equity). Why every transaction touches two places. Proof on the real thing: Chipotle's December 31, 2025 totals. Why this filing was chosen, how its figures are dated, and the first not-advice statement | M1; E1 to E3; A1; F1, F5, F6; E29, E30 |
| 2 | `debits-and-credits` | Journal and ledger; left side debits, right side credits; self-balancing books. Worked entries in second person ("suppose you sell a burrito for cash"), with invented round numbers labeled as invented and never attributed to the company. Regulation S-X's balance-sheet heading "ASSETS AND OTHER DEBITS" shows the vocabulary lives in the rules too | M10; M8 |
| 3 | `when-a-sale-counts` | Cash versus accrual, in the SBA's plain words, with Publication 583's tax framing flagged as tax framing. The filing's point-of-sale policy versus gift cards: a gift card sold is unearned revenue, a liability, until redeemed. The rewards liability rolled forward | M11; M10; E25, E26; E8; E20, E21; A10 |
| Q | `section-1-quiz` | Section quiz | |

### Section 2 · The statements

| # | Slug | Teaches | Evidence |
|---|---|---|---|
| 4 | `the-balance-sheet` | One date, two years shown (Regulation S-X 3-01). Current versus noncurrent (one year). Restricted cash shown on its own line because S-X requires it. Reading "(in thousands)" and parentheses. Working capital computed, then the MD&A's own explanation of why the company needs little | M5; M1; M8; E4 to E8; E35; A6; E31 |
| 5 | `the-income-statement` | One year, three years shown (S-X 3-02). Revenue to income from operations to net income; costs captioned "exclusive of depreciation"; the straight-line depreciation policy and useful lives; diluted earnings per share; operating margin | M6; E11 to E15; E28; A5; A7 |
| 6 | `the-cash-flow-statement` | Operating, investing and financing activities. The indirect method: start at net income, add back depreciation, adjust for changes such as unearned revenue. Fiscal 2025: cash from operations about $2.11 billion; financing outflow about $2.47 billion, almost all share repurchases | M1; E17; E18; E36 |
| 7 | `how-the-statements-tie` | The equity statement as a reconciliation (S-X 3-04). Retained earnings: beginning plus net income minus repurchases equals ending. Cash: the cash flow statement ends at cash plus restricted cash on the balance sheet. Why repurchases hit retained earnings here (shares are retired, not held) | M7; E9; E16; E17; E33; A2 to A4 |
| Q | `section-2-quiz` | Section quiz | |

### Section 3 · Open the filing

| # | Slug | Teaches | Evidence |
|---|---|---|---|
| 8 | `find-the-10-k` | What a 10-K is and who writes it (the SEC "neither writes the 10-K nor vouches for its accuracy"). EDGAR is free; Company Search; the filing index; accession number and filing date; the 60/75/90-day deadlines and this filing's 35 days. The Items in order. A lesson in dating sources: the 2011 SEC bulletin calls Item 6 "Selected Financial Data"; the current form and this filing show it reserved, because a 2020 rule removed it. Citing by Item and printed page | M2; M13; F1 to F3; M3; A11; M4 |
| 9 | `md-and-a-against-the-numbers` | MD&A's legal objective (Item 303(a)). Fiscal 2025: total revenue up 5.4% while comparable restaurant sales fell 1.7%. The sales bridge shows why: new restaurants. The learner checks MD&A's numbers against page 37. Second not-advice statement | M9; M1; E22 to E24; E11; A12; A13 |
| 10 | `the-footnote-behind-the-number` | Note 1 as the list of policies that produced the numbers: inventory at the lower of FIFO cost or net realizable value; straight-line depreciation; gift card breakage, an estimate that added $20.1 million more revenue in 2025 than in 2024, found in the MD&A and traced to the note | M1; E27; E28; E19; E23; A9 |
| 11 | `the-auditors-opinion` | The opinion's words ("present fairly, in all material respects"), who wrote it and when, and what "in all material respects" does not promise. The one critical audit matter. Unqualified versus qualified opinions. The CEO and CFO certifications in Exhibits 31 and 32 | E34; M2; F7 |
| Q | `section-3-quiz` | Section quiz | |

### Section 4 · Judgement

| # | Slug | Teaches | Evidence |
|---|---|---|---|
| 12 | `what-management-chose` | Critical accounting estimates as the rule defines them (Item 303(b)(3), added in 2020). The filing's four. The lease rate example: "As we have no outstanding debt", management estimates the rate itself. A reading lesson: the SEC guide's "debt-to-equity" formula gives 2.18 for a company that says it has no debt, because most of its liabilities are leases. The FASB's conceptual framework named as the nonauthoritative background, cited by title only | M9; M4; E29; E30; E32; E10; M1; A8; M15 |
| 13 | `who-has-to-file` | Who must register and report (the 12(g) thresholds: more than $10 million in assets and 2,000 holders of record, or 500 who are not accredited investors). The cover page's own question about it. The gate: most of what this course teaches is only readable for companies that cross that line; a company that files nothing may still be asked by a lender for financial statements, and what is asked varies by lender. No statistic on how many companies file (N5) | M12; F4; F3; M14; M2 |
| Q | `section-4-quiz` | Section quiz | |

### Capstone and final

| # | Slug | Teaches | Evidence |
|---|---|---|---|
| 14 | `capstone-five-questions` | Five questions about one company from its own filing, every answer with its page (section 7). Part A on the course's filing with `:::reveal` checks; Part B, an ungraded assignment, on any 10-K the learner picks. Third not-advice statement | All of the above |
| F | `final-quiz` | Final quiz, placed last | |

## 3. Fit

- **Audience and tier.** Adults and self-directed older teens; ElementaryMBA's Business Core tier, labeled on the
  school (no age gate, BAM's decision). No prior accounting needed; arithmetic only.
- **Public, held.** Public course, held "Coming soon" until a qualified reviewer signs off on the lessons marked
  QR, and ElementaryMBA itself stays "coming soon" until its courses are vetted (BAM's decision).
- **Series.** FIRM ("firm" as in a business, not an acronym; BAM approved the code). Linear `01` to `10`, then
  `99`; no `00` and no tracks (plan section 6). FIRM-01 is the prerequisite the plan names for FIRM-02, 07, 08
  and 99.
- **The preview rule (BAM, 2026-10-23).** Only position 01 of a series appears on both schools. So FIRM-01 is
  seeded on ElementaryMBA (the home of the series) and on Learn.WitUS as a preview; FIRM-02 to 10 and 99 stay
  on ElementaryMBA only. **The Learn.WitUS copy ends by pointing to the rest of the series on ElementaryMBA.**
  Recommended mechanism: the data module exports the course, and the Learn.WitUS registration seeds it with one
  extra closing lesson, `the-series-continues`, that names the series and says the next courses continue on
  ElementaryMBA. While ElementaryMBA is "coming soon" that lesson carries no link (question 6). **Dependency:**
  registering one slug on two schools needs the change to `tests/seed-registry.test.ts` ("each slug once per
  school", allowed only at position 01), which is being built on its own branch
  (`chore/seed-registry-per-school`). Confirm `pnpm lint` (series codes, standards, citations) accepts the
  pair after that change lands.
- **Cross-school isolation.** One lesson text seeds to two schools, and a learner on one school must not be sent
  to a course that exists only on the other. So **lesson bodies link to no other course**. The connections in
  section 4 are for the author's awareness and for later, per-school work.
- **School disclaimer.** ElementaryMBA's school-level disclaimer ("not a university, not a degree program, not
  accredited") is Phase 0's job: a tenant-keyed registry beside `src/lib/cert-disclaimer.ts` (plan section 8).
  FIRM-01 does not author it and must not contradict it. Copy rules for the whole tier, from plan section 8:
  never "MBA-level", "graduate-level", "business school", "our curriculum", "faculty", "degree", "credits",
  "transcript", "alumni", "cohort" or "core curriculum"; never "modeled on" or any school's name; no outcome
  claims. The category name "Business Core" is BAM's and is allowed.
- **Standards posture: excuse, do not map (BAM's decision).** Add one line to `BACKLOG` in
  `scripts/check-standards-coverage.ts`:
  `"read-the-statements": "OUT OF SCOPE for now: adult and post-secondary business education. State business standards sit in career and technical education frameworks this repo has not transcribed, and the Subject union has no CTE shelf. Revisit as a project, not as a per-course fix (BAM, 2026-10-23).",`
  Do not invent a Social Studies or math claim to make it look aligned.
- **Not-advice posture** (the house posture in `scripts/data/credit-decisions-course.ts`). Said in prose in
  lesson 1, lesson 9 and the capstone: the course describes what a public filing says; it does not say whether
  to buy, hold or sell anything, names no stock as good or bad, uses no market price, P/E ratio, valuation or
  forecast, and dates every figure in the lesson ("fiscal 2025, 10-K filed February 4, 2026"). A registry
  entry is not enough, because a learner in lesson 12 never saw the landing page.

## 4. Connections (coverage search, 2026-10-23)

Searched `scripts/data/` and `src/lib/` (excluding `src/lib/future-work-content/`) for "10-K", "balance sheet",
"income statement", "cash flow statement", "statement of cash flows", "double entry", "double-entry",
"accrual", "EDGAR", "retained earnings", "MD&A", "Regulation S-X", "debits", "general ledger", "annual
report", "profit and loss" and "net income".

- `ai-e5-finance-analytics-capstone` (ElementaryMBA, Founder track), lesson `finance-basics-in-plain-terms`:
  revenue, costs, profit and cash flow in plain words; balance sheets and cash versus accrual appear only in
  its SBA citation. Lesson `ai-for-bookkeeping-drafts` names cash versus accrual in passing. **In passing.**
- `cash-flow-timing` (MONEY-03, Learn.WitUS): personal cash timing; "general ledger" appears only in quiz
  options about a bank's books. Different seat, not accounting.
- `cooperatives` (Learn.WitUS), lesson `coop-member-capital`: retained earnings as a source of member capital.
  **Named in passing.**
- `business-governance` (Learn.WitUS), lesson `bgov-committees`: the audit committee checks the financial
  statements and the outside auditor. Related to lesson 11.
- `credit-decisions` (MONEY-01): the not-advice posture this course copies; no content overlap.
- **Nothing covers** double entry, the four statements, articulation, reading a 10-K, MD&A, notes or an
  auditor's report: zero hits for "10-K" as a filing, "cash flow statement", "statement of cash flows",
  "double entry", "MD&A" and "Regulation S-X".

## 5. Course or lesson?

**A course.** Rubric: gates A1 to A7 pass, A8 pending (this draft); B 3/2/3/3/3/3 = 33; form **C6**, course.
B1 3 (the filing and the CFR are documents, read and VERIFIED); B2 2 (named in passing in `ai-e5` and
`cooperatives`, taught nowhere); B3 3 (the learner opens the same 10-K on EDGAR); B4 3 (verified material for
four sections); B5 3 (connects by lesson to four courses, section 4, and holds a series slot; the links are not drawn
inside lesson bodies, for the cross-school reason in section 3); B6 3 (fills the named
first slot of the FIRM series BAM approved, and is the prerequisite for three later FIRM courses).
**Alternatives rejected:** a section inside `ai-e5` (a teen-founder course about AI-drafted bookkeeping; this
is four sections deep and a different audience); a lesson in `business-governance` (governance, not accounts);
a private course (the subject is general and public); FIRM-06 first (BAM chose FIRM-01 first).

## 6. Evidence status

Full tables, locators and references: `read-the-statements-evidence.md`. Summary:

| Claim group | Status | IDs |
|---|---|---|
| The filing: company, fiscal year, filing date, accession number, filer status, page locators | VERIFIED | F1 to F7; section 2 of the pack |
| Every statement figure used in the outline | VERIFIED, exact | E1 to E36 |
| Articulation and ratios | Inferred arithmetic on verified figures; teach with the working shown | A1 to A13 |
| SEC guide, bulletin, Form 10-K instructions, 2020 amendments | VERIFIED | M1 to M4 |
| Regulation S-X 3-01, 3-02, 3-04, 5-02; Regulation S-K Item 303 | VERIFIED, exact (April 1, 2025 edition) | M5 to M9 |
| Double entry; cash and accrual | VERIFIED (tax framing flagged) | M10, M11 |
| Who must file; what lenders ask for; EDGAR is free | VERIFIED | M12 to M14 |
| FASB Concepts Statement No. 8 exists, is nonauthoritative | VERIFIED via the Journal of Accountancy; FASB page itself NOT FOUND (403) | M15, N3 |
| Reuse of SEC.gov material; federal works | VERIFIED | R1, R2 |
| Investor.gov page; eCFR currency after April 2025; count of filers; FASB Chapter 1 objective; filer copyright | NOT FOUND | N1 to N9 |

No lesson may assert a NOT FOUND or REPORTED item. Any hedge the author writes gets an entry in
`src/lib/research-checks.ts`.

## 7. Assessment design

**Quiz method (the current house method, as in `scripts/data/the-slide-rule-course.ts`).**

- Multiple choice, four options. **All four options within 8 characters of each other** (the visible-length
  margin in `src/lib/quiz-integrity.ts` is the larger of 8 characters or 10% of the option), so no length
  strategy beats chance. Qualifiers and the "because" go in `explanation`, which no guard measures.
- **`correctIndex` rotated** evenly through 0, 1, 2 and 3 across each bank, and **`shuffleOptions: true`** on
  every bank.
- Section quizzes: `passingScore: 80`, `questionsPerAttempt: 5`. Pool = round(section words / 35), clamped to
  40 to 100 (a pool within 90 percent of target passes). At about 1,000 words a lesson that is roughly 86, 100,
  100 and 57 questions for sections 1 to 4. Final: pool 40 or more, `questionsPerAttempt: 10`, `passingScore: 80`.
- Every question carries `explanation` and `sourceLessonSlug`. Distractors are specific and definitively wrong.
  No "all of the above", no wording that names a position, no prompt that states another question's answer.
- **Numbers are multiple choice.** A typed exercise whose answers are all bare numbers fails
  `check-assessment-fit` (`closed-set-fill-in`). Where computing a figure by hand is the skill (working
  capital, a roll-forward), either write it as multiple choice or set `computedAnswer: true` on that exercise.
- Self-checks as flush-left `:::reveal <question> ||| <answer>`; `recallContent` from lesson 2 on, quizzing the
  lesson before; a `## Vocabulary` block of 3 to 6 lesson-specific terms above `## Sources`.
- After seeding: never edit a prompt, never reorder options or move `correctIndex`; fix option text in place.

**Capstone design.** "Five questions about one company from its own filing, with the page cited" (plan
section 11).

- **Part A, on the course's filing** (text lesson with five `:::reveal` checks): (1) Did the company make money
  in fiscal 2025, and on what page? (net income, p. 37); (2) Where did the cash go? (financing activities and
  repurchases, p. 39); (3) Does the balance sheet balance? (p. 36, A1); (4) What does the MD&A say drove
  revenue, and do the statements agree? (pp. 24 and 26 against p. 37); (5) Which policy produced the unearned
  revenue line, and what estimate does it rest on? (Note 1, p. 45; Note 3, p. 48). Each answer names the Item
  and printed page.
- **Part B, ungraded** (`lessonType: "assignment"`): the same five questions on any 10-K the learner chooses,
  with a fill-in template that asks for the accession number and a page for every answer.
- The final quiz carries locate-the-page questions in the same shape, so the capstone skill is graded there.
  Run `pnpm audit:course read-the-statements --spec` to confirm the capstone section needs no quiz of its own.

## 8. Rules the author must follow (house rules, condensed)

- **File header** names the tier, this brief's path, the evidence pack, visibility and hold reason, the marked
  lessons, source rights, hedges and house style (model: `scripts/data/stage-and-broadcast-rigging-course.ts`).
- **Release markers.** Every teaching lesson's first line:
  `> **Before release:** needs a qualified reviewer (QR): a CPA or a college accounting instructor.`
- **Sources.** Every teaching lesson ends with an APA 7 `## Sources` block; each entry has a locator (the 10-K's
  Item and printed page; the CFR section and printed page; the PDF page for the two SEC PDFs) and a rights tier.
  Store each reference once as a named constant. Tiers: the 10-K is **Tier B** (link to EDGAR; short quotes;
  no hosted copy, no screenshots); SEC, CFR, IRS and SBA material is **Tier A**; FASB text is **Tier C** (cite
  by title, quote nothing). Never use the SEC seal or logos (R2).
- **Figures.** Quote figures as printed, with "in thousands" said once per lesson, and date them to the filing.
  Do not round in a way that changes a tie-out.
- **Voice.** Plain English, short sentences, active voice, acronyms spelled out once; American spelling; no em
  or en dashes; no stage cues; no named individuals from the filing. Second-person examples only; no invented
  characters.
- **Registration and docs.** Register on both schools per section 3; add the slug to `STAGED_COURSES` in
  `src/lib/citations.ts`; add the `BACKLOG` line; update README and `src/lib/roadmap.ts`; file a research check
  for every hedge; if a blog post is drafted, add a `src/lib/release-followups.ts` entry. Typecheck, lint, test
  and build green, then list the database commands in order.

## 9. Risks, and what a qualified reviewer must check

**Risks.**

- **Reads as stock analysis.** A traded company is the subject. Mitigated by the three not-advice statements,
  no market measures, and dated figures.
- **Staleness.** The fiscal 2026 10-K will be filed in early 2027 (I: 60 days after year end for a large
  accelerated filer). The course does not update numbers in place; whether to roll to a newer filing is a
  later decision, best filed as a research check when the course ships.
- **Tax framing leaking into accounting.** Publication 583 defines cash and accrual for taxes (M10).
- **Lease lines are large** (E10) and their accounting lives in FASB text. Name them; do not teach measurement.
- **The "no debt" versus 2.18 point (A8)** must be explained, not left as a contradiction.
- **Quiz volume.** About 380 questions; check for cross-question leaks before the first seed.
- **Cross-school links** (section 3) and the copy rules on ElementaryMBA.
- **Rights.** Filer copyright is unresolved (N7); Tier B handles it.

**The reviewer checks, lesson by lesson:** the debit and credit rules and every worked entry (2); the accrual
explanation and unearned revenue (3, 10); current versus noncurrent and working capital (4); the indirect
method and the add-backs (6); repurchases charged to retained earnings and the equity reconciliation (7); the
meaning of "present fairly, in all material respects" and of a critical audit matter (11); critical accounting
estimates and the lease-rate example (12); the 12(g) explanation (13); and every figure against its page.

## 10. Rubric gates, condensed (Parts A, D and H)

The full rubric is `docs/course-method/course-creation-rubric.md` v1.3, which is gitignored; this is the part a
cloud session needs.

**Part A, brief gates (pass or fail).**

| Gate | Condition | Status |
|---|---|---|
| A1 Coverage first | `scripts/data/` and `src/lib/` searched; every hit named by course and lesson | Pass (section 4) |
| A2 The one job | A cited course for a Learn school | Pass |
| A3 Premise checked | The plan's premise (a real 10-K, free on EDGAR; SEC rules are federal works) checked on fetched sources | Pass (F1, M13, R1, R2) |
| A4 Rights | No third-party copyrighted text, tables, exercises or answer keys reproduced or paraphrased | Pass if the author keeps FASB at Tier C and the 10-K at Tier B |
| A5 Visibility | Public or private stated, with insert-only fields | Pass (section 0) |
| A6 Content decision | Violence, medical harm, minors, restricted knowledge | Not triggered |
| A7 Nothing invented | Every number, date and quote read on a fetched source and marked | Pass (evidence pack) |
| A8 Approved | BAM approves, or waives in the course header | **Pending** |

**Part D, build gates (the course is not done until all pass).** D1 header names tier and brief. D2 assessment
spec (section 7) with `pnpm audit:course read-the-statements --spec` clean. D3 quiz integrity through
`pnpm lint`, with no new line in any grandfather or allowlist map. D4 voice (no dashes, no AI tells). D5 only
VERIFIED claims assert; hedges have research checks; APA 7 `## Sources`; the slug staged in `STAGED_COURSES`.
D5a every source tiered A, B or C, with a locator saying where to look. D6 standards `BACKLOG` line. D7
registration with insert-only fields right the first time. D8 README and roadmap. D9 typecheck, lint, tests
and build green; branch pushed; database commands listed in order.

**Part H, evidence markings.** VERIFIED (read on a fetched source, dated) may be asserted with its citation.
REPORTED (seen only in search results or summaries) and UNVERIFIED may not. Wikipedia is a pointer, never a
citation. A failed fetch supports nothing. Thinness is reported as the finding. Say what the record shows, not
a motive it does not.

## 11. Questions for BAM

1. Approve the slug `read-the-statements`, the title, and the series slug and title `how-a-firm-works`, "How a
   Firm Works"?
2. Approve Chipotle's fiscal 2025 10-K as the one filing? The criteria were one segment, no outstanding
   borrowings, short statements, a familiar business. A different company can be swapped in at the cost of
   redoing the evidence pack's sections 1 to 4.
3. Research tier 2 (recommended: the method guide lists money and credential-adjacent subjects as tier 2,
   which adds an adversarial pass on the generated outline) or tier 1?
4. Price: free on both schools (recommended, since the Learn.WitUS copy is a preview), or paid on ElementaryMBA?
5. Who is the qualified reviewer (a CPA or an accounting instructor)? The course stays held until they sign off.
6. Before ElementaryMBA opens, should the Learn.WitUS closing lesson name ElementaryMBA without a link, or should
   that lesson wait until ElementaryMBA is live?
7. Is the capstone's Part B (any 10-K the learner picks, ungraded) the right shape?
8. Teach the "no debt" versus 2.18 reading lesson (A8) in lesson 12? Recommended, reviewer-checked.
9. Keep committed cloud briefs under `scripts/data/briefs/`, or move this one to `cloud-briefs/firm-01/` beside
   CREW-05's?

## References

Chipotle Mexican Grill, Inc. (2026, February 4). *Form 10-K: Annual report for the fiscal year ended December 31, 2025* (Accession No. 0001058090-26-000009). U.S. Securities and Exchange Commission. https://www.sec.gov/Archives/edgar/data/1058090/000105809026000009/cmg-20251231.htm

Internal Revenue Service. (2024). *Publication 583: Starting a business and keeping records* (Rev. December 2024). https://www.irs.gov/publications/p583

Management's discussion and analysis of financial condition and results of operations, 17 C.F.R. § 229.303 (2025). https://www.govinfo.gov/content/pkg/CFR-2025-title17-vol3/pdf/CFR-2025-title17-vol3-sec229-303.pdf

U.S. Securities and Exchange Commission. (2014, January 12). *Beginners' guide to financial statements*. https://www.sec.gov/about/reports-publications/beginners-guide-financial-statements

U.S. Securities and Exchange Commission. (2016, May 24). *Changes to Exchange Act registration requirements to implement Title V and Title VI of the JOBS Act* [Small entity compliance guide]. https://www.sec.gov/file/small-entity-compliance-guide-44

U.S. Securities and Exchange Commission. (2025). *Form 10-K: General instructions* (SEC 1673 (02-25)). https://www.sec.gov/files/form10-k.pdf

U.S. Securities and Exchange Commission, Office of Investor Education and Advocacy. (2011, September). *Investor bulletin: How to read a 10-K*. https://www.sec.gov/files/reada10k.pdf

U.S. Small Business Administration. (n.d.). *Manage your finances*. Retrieved October 23, 2026, from https://www.sba.gov/business-guide/manage-your-business/manage-your-finances

The full reference list, with every source fetched for this brief, is in `read-the-statements-evidence.md`.
