import type { AuthoredCourse } from "./authored-course";

// MONEY-03 · "Cash Flow, and When the Money Actually Moves" (Money & Property). Source brief:
// plans/future-courses/2026-08-27-15-personal-finance-track-research.md, sections 4.1, 4.4, 7.
// Third course of the `personal-money` series, code MONEY. Tier 0. NO migration - pnpm seed:courses.
//
// THE SPINE, and the sentence the whole course is built to keep true:
// MONEY ARRIVES ON A DATE SET BY A RULE AND LEAVES ON A DATE SET BY A DIFFERENT RULE, AND THE GAP
// BETWEEN THEM IS A MECHANISM, NOT A CHARACTER FLAW.
//
// WHY TIMING AND NOT BUDGETING, WHICH IS THE DECISION THIS FILE EXISTS TO RECORD. The research
// brief argued that budgeting is a SECTION and not a course, and the argument is worth repeating
// because it is easy to lose: budgeting has no mechanism, no decision-maker and no recourse, so
// forcing this catalog's "read the rule that governs the decision" method onto it would produce a
// grievance nobody can check and advice nobody asked for. Cash-flow TIMING is a different subject
// and a much better one, because every part of it is written down somewhere a learner can read:
//   · WHEN MONEY ARRIVES is a federal schedule. The Expedited Funds Availability Act (12 U.S.C.
//     4001 et seq.) and Regulation CC (12 CFR part 229) say when a bank must make a deposit
//     available, by deposit type, with named exceptions and a civil-liability provision attached.
//   · WHEN MONEY LEAVES is a commercial-code permission. UCC 4-303(b) says items "may be accepted,
//     paid, certified, or charged to the indicated account of its customer in any order", so the
//     ORDER a bank processes a day's transactions in is the bank's choice, and the order changes
//     whether the same set of transactions overdraws.
//   · HOW OFTEN YOU ARE PAID is state law, not federal. The Fair Labor Standards Act sets a regular
//     pay day (29 CFR 778.106) and does not set its frequency; states do, and they disagree.
//   · WHEN A FEDERAL BENEFIT ARRIVES is a published rule keyed to your birth date (20 CFR 404.1807).
// Four mechanisms, four primary sources, zero advice. That is the course.
//
// THE SERIES, DECLARED SO A LATER AUTHOR INHERITS IT RATHER THAN INVENTS IT.
//   MONEY-01  Credit, and the Decisions Made About You  the file, the score, the adverse action
//   MONEY-02  Banking, and Who Has No Bank              deposit insurance, fees, the substitute market
//   MONEY-03  Cash Flow, and When the Money Actually Moves  (this course)
//   MONEY-04  Predatory Products, Priced                the fee-to-APR conversion, the MLA cap
//   MONEY-05  Filing Your Own Taxes                     domestic only; hands to taxes-americans-abroad
//   MONEY-06  Housing: the Lease and the Loan Estimate  the standardized federal forms
//   MONEY-07  Retirement and Investing Accounts         the wrapper vs the investment; last on purpose
//   MONEY-99  Read Your Own Record                      the series capstone, taken last
//
// WHAT THIS COURSE DOES NOT TEACH, BECAUSE THE SIBLINGS ALREADY DO AND DUPLICATION IS THE RISK.
//   · The consumer report, the score, the adverse action notice and the dispute: MONEY-01.
//   · Deposit insurance, the identity gate, the fee schedule, the overdraft OPT-IN and the
//     substitute market: MONEY-02. This course touches overdraft only where ORDER decides how many
//     of them happen, which is the one thing MONEY-02 leaves open, and it re-teaches no fee rule.
//   · Budgeting technique of any kind. No envelope method, no percentage split, no spending advice.
//
// EVERY PRIMARY DOCUMENT IN THIS FILE WAS FETCHED AND READ ON 28 AUGUST 2026, not summarised from
// memory. The regulatory and statutory spine:
//   · Regulation CC: 12 CFR 229.2 (banking day, business day, electronic payment, wire transfer,
//     local paying bank), 229.10 (next-day availability), 229.12 (the schedule), 229.13 (the six
//     exceptions and their notice), 229.14 (when interest starts, which is a different clock),
//     229.16 (the specific availability policy disclosure), 229.18 (the notices, including that
//     ANY person may request the policy), 229.19(a) (when funds are considered deposited, and the
//     cut-off hour), 229.21 (civil liability, and the one-year limit).
//   · EFAA: 12 U.S.C. 4002 (the statutory schedule) and 4006(f) (the five-year inflation
//     adjustment that produced the amounts in force from 1 July 2025).
//   · UCC 4-303(b), the posting-order permission, read together with 4-303(a).
//   · Regulation E: 12 CFR 1005.10(a) (notice of a preauthorized credit), (b) (written
//     authorization), (c) (stop payment, three business days), (d) (ten days' notice of a varying
//     amount).
//   · Regulation DD: 12 CFR 1030.11(a), which makes overdraft and returned-item fees measurable on
//     the statement, for the period and year to date.
//   · Wage timing: 29 CFR 778.106, Cal. Lab. Code 204(a), N.Y. Lab. Law 191(1)(a) and (1)(d).
//   · Benefit timing: 20 CFR 404.1807. Holidays: 5 U.S.C. 6103(a) and (b).
//
// THREE THINGS THIS COURSE REFUSES TO DO, RECORDED HERE SO A LATER EDITOR CANNOT SOFTEN ONE
// WITHOUT SEEING THAT IT WAS A DECISION.
//   1. IT GIVES NO FINANCIAL ADVICE. It never tells a reader what to do with their own money, names
//      no bank, card, app or payroll product as a recommendation, and recommends no pay frequency,
//      no buffer size and no order of payment. Said in PROSE in three places, per the posture
//      `surplus-funds-basics` established: Section 1 lesson 1, Section 6 lesson 1, and the capstone.
//      `cert-disclaimer.ts` does NOT cover this: its one sentence is about affiliation with a named
//      certifying body, which is a different speech act, and this course names no certifying body.
//   2. IT PRINTS NO SUMMARY TABLE OF THINGS THAT MOVE. The Regulation CC dollar thresholds are
//      adjusted every five years, state payday statutes differ in fifty ways and change, and a
//      bank's own cut-off hour is a term of its own disclosure. So the course teaches the FLOOR
//      (what the rule guarantees) and the METHOD (how to find what is true for you today), and
//      dates every figure IN the lesson.
//   3. IT DOES NOT DESCRIBE AN AGENCY'S CURRENT FOOTING IN THE PRESENT TENSE. Regulation CC is
//      issued jointly, the thresholds are adjusted jointly, and which body is supervising or
//      enforcing at any moment is not the durable layer. The course cites the statute and the
//      regulation and dates what it says about anything else.
//
// House style, inherited from MONEY-01 and MONEY-02: `section` on every lesson; flush-left
// single-line `:::reveal q ||| a`; a `## Vocabulary` block of 3-6 lesson-specific terms; APA 7
// `## Sources` with a stable URL; a quiz per teaching section (pool sized by density, serving 5,
// passing 80, shuffled) plus a final serving 10; every question carries `explanation` and
// `sourceLessonSlug`. Correct options are written SHORT and distractors long and specific, so
// `check-longest-option` passes by construction rather than by post-hoc trimming.
export const CASH_FLOW_TIMING_COURSE: AuthoredCourse = {
  title: "Cash Flow, and When the Money Actually Moves",
  description:
    "A bill is due on the first and the paycheck lands on the third. That is not a budgeting failure, it is two calendars that were set by different people under different rules, and this course is about those rules. It teaches no budgeting technique at all, on purpose: budgeting has no mechanism, no decision-maker and no recourse, while timing has all three and every one of them is public. When money arrives is a federal schedule. The Expedited Funds Availability Act and Regulation CC say how soon a bank must let you use a deposit, and the answer depends on what you deposited, where you deposited it, and what time of day the bank says its day ended. Cash handed to a teller is one rule, a payroll direct deposit is another, a government check is a third, and an ordinary check is a fourth, with six named exceptions that can extend any of them and a written notice owed to you whenever one is used. When money leaves is a different kind of rule and a much shorter one. The Uniform Commercial Code says a bank may charge items to your account in any order it finds convenient, which means the same four payments on the same day can produce one overdraft or three depending on a sequencing choice you never see. The course works that arithmetic rather than complaining about it, because the arithmetic is the part you can act on. Then the rails: cash, check, an automated clearing house credit, a card, a wire, and instant payment, six ways money moves with six different clocks, and only some of them are what the availability rule calls an electronic payment. Then the paycheck itself, where the arithmetic surprises people: weekly is fifty-two paydays a year, biweekly is twenty-six, semimonthly is twenty-four, and biweekly and semimonthly are not the same thing even though both are often called twice a month. Federal law sets a regular pay day and does not set how often it comes; your state does, and the statute has a number in it. A Social Security payment date is set by a published rule keyed to a birth date, which means it can be computed a year ahead. The course closes on the two questions worth knowing the answers to: which of these timings is a legal duty with a remedy attached, and which is merely the way a bank has chosen to run its day. It ends by having you map your own dates, request your own bank's availability policy, which any person may ask for in writing, and read your own state's payday statute. It is information about how the payment system keeps time, not advice about your money, and it says so in three separate lessons.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1 — Two clocks, and the words that run them
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-gap-is-the-subject",
      title: "1 · The gap is the subject, and it is not a budgeting failure",
      section: "Section 1 · Two clocks, and the words that run them",
      body: `Rent is due on the first. Pay lands on the third.

The first course in this series opened on that sentence and then went somewhere else, to the record a lender reads about you. **This course stays with the sentence.** Two days, every month, is not a small thing, and it is not a fact about your character. It is two calendars that were set by different people under different rules, and both sets of rules are public.

**Why this course teaches timing and refuses to teach budgeting.** Budgeting has no mechanism you can look up, no decision-maker you can name, and no recourse if it goes wrong. There is no statute about the envelope method. Nobody has to send you a notice. Timing is the opposite on all three counts:

- **When deposited money becomes usable** is a federal schedule. The Expedited Funds Availability Act and the regulation that implements it say how soon a bank must let you spend a deposit, by deposit type, with named exceptions and a written notice owed to you when one is used (12 U.S.C. § 4002, n.d.; 12 CFR Part 229, n.d.).
- **The order money leaves** is a commercial-code permission. Article 4 of the Uniform Commercial Code says items may be charged to your account "in any order" (U.C.C. § 4-303, n.d.). That is a choice somebody makes, and it changes the arithmetic.
- **How often you are paid** is state law, with a number in the statute.

Three mechanisms, three sources, and none of them require you to have any opinion about your own spending.

**So there are two clocks in this course, and the whole subject is the space between them.** The first clock runs from the moment money reaches your bank to the moment you are allowed to use it. The second runs from the moment you commit to a payment to the moment it actually leaves. Neither clock is the calendar on your wall, and neither is the balance on your phone.

**What this course is not.** **It is not financial advice, and it will not give you any.** It will not tell you what to spend, will not recommend a pay frequency, will not tell you how large a buffer to hold, and will not tell you which bill to pay first. Those are decisions about your life, and a course does not know your life. What it can do is put the rules in your hands, because the rules are free, written down, and mostly short.

**Two habits that come with that promise.** First, **every figure in this course carries the date it was read**, because dollar thresholds in this area are adjusted on a schedule and an undated number is a claim someone will still be repeating years later. Second, **this course teaches a method rather than a table.** Your state's payday statute, your bank's cut-off hour and your own pay calendar are three different documents with three different owners, and the transferable skill is finding each one, not memorising somebody else's.

**One reframe to carry into Section 2.** A bill paid late because the money had not cleared yet, and a bill unpaid because the money was never there, look identical on a statement and identical to a creditor. They are not the same problem. The first has a rule behind it and sometimes a remedy. Telling them apart is the first useful thing this course does.

:::reveal What are the two clocks this course is about? ||| The clock from money reaching your bank to your being allowed to use it, and the clock from committing to a payment to the money actually leaving.

:::reveal Why does this course teach cash-flow timing rather than budgeting? ||| Because timing has a mechanism, a decision-maker and a recourse you can look up, and budgeting has none of the three.

:::reveal Name the two habits this course promises about the numbers it prints. ||| Every figure carries the date it was read, and the course teaches the method for finding a current rule instead of printing a table that will go stale.

## Vocabulary
- **Cash flow**: the movement of money into and out of an account over time, described by dates rather than by totals.
- **Timing gap**: the interval between the date money is owed and the date usable money is present.
- **Availability**: the moment a bank must let you actually use deposited funds, which is later than the moment it received them.
- **Posting**: the act of charging a payment against your account balance, which is a separate event from authorising it.

## Sources
12 U.S.C. § 4002. (n.d.). *Expedited funds availability schedules*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/12/4002

12 CFR Part 229. (n.d.). *Availability of funds and collection of checks (Regulation CC)*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/part-229

U.C.C. § 4-303. (n.d.). *When items subject to notice, stop-payment order, legal process, or setoff; order in which items may be charged or certified*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/ucc/4/4-303`,
    },
    {
      slug: "business-day-banking-day",
      title: "2 · Business day, banking day, and the difference that costs money",
      section: "Section 1 · Two clocks, and the words that run them",
      body: `Every deadline in the availability rules is counted in **business days** from the **banking day** of deposit. Those are two different defined terms, they are not the same as each other, and neither is the same as a day.

**The two definitions, in the regulation's own words.**

> "Banking day means that part of any business day on which an office of a bank is open to the public for carrying on substantially all of its banking functions." (12 CFR § 229.2, n.d.)

> "Business day means a calendar day other than a Saturday or a Sunday, January 1, the third Monday in January, the third Monday in February, the last Monday in May, July 4, the first Monday in September, the second Monday in October, November 11, the fourth Thursday in November, or December 25." (12 CFR § 229.2, n.d.)

**Read the second one again, because it is a list of dates and not a reference to a holiday law.** Ten named dates plus weekends. Now set it beside the federal holiday statute, which is a different list:

> "New Year's Day, January 1. Birthday of Martin Luther King, Jr., the third Monday in January. Washington's Birthday, the third Monday in February. Memorial Day, the last Monday in May. Juneteenth National Independence Day, June 19. Independence Day, July 4. Labor Day, the first Monday in September. Columbus Day, the second Monday in October. Veterans Day, November 11. Thanksgiving Day, the fourth Thursday in November. Christmas Day, December 25." (5 U.S.C. § 6103, n.d.)

**Eleven holidays in the statute, ten dates in the regulation.** June 19 is in one list and not the other. As transcribed from the official annual edition of the Code of Federal Regulations and checked on 28 August 2026, Regulation CC's definition of a business day does not name June 19, so a day on which a bank is closed for Juneteenth is still a business day for counting an availability deadline, even though it is not a banking day for making a deposit. That is not a loophole anybody is exploiting. It is a reminder that **a defined term means what its definition says, not what the ordinary word suggests**, and that is the single most useful reading habit in this whole area.

**What follows from the pair.** A banking day is a subset of a business day: it is the part of a business day when a particular office is actually open for substantially all of its functions. So a bank that closes at noon on a Saturday has no banking day at all that Saturday, because Saturday is not a business day to begin with. A deposit made then is not a Saturday deposit in any sense the rule recognises.

**And that is why a Friday afternoon deposit is a Monday event.** The deposit is received on Friday. If Friday is a banking day and the deposit arrives before the bank's cut-off hour, Friday is the banking day of deposit, and the count of business days starts from there: Saturday and Sunday are not business days, so the first business day after is Monday. If a Monday holiday on that list intervenes, it is Tuesday. Nothing has gone wrong. The clock is simply counting the days the rule says to count.

:::reveal What is the difference between a business day and a banking day under Regulation CC? ||| A business day is a calendar day that is not a weekend or one of the named dates; a banking day is the part of a business day when an office is open for substantially all its banking functions.

:::reveal How many named dates does Regulation CC exclude from business days, and how many holidays does 5 U.S.C. 6103 list? ||| Ten named dates in the regulation, eleven holidays in the statute.

:::reveal Which holiday appears in the federal holiday statute but not in Regulation CC's list of excluded dates, as checked on 28 August 2026? ||| Juneteenth National Independence Day, June 19.

## Vocabulary
- **Business day**: Regulation CC's counting unit, defined as a calendar day other than a weekend or one of ten named dates.
- **Banking day**: the part of a business day when a bank office is open to the public for substantially all of its banking functions.
- **Defined term**: a word a rule gives its own meaning to, which may be narrower or wider than ordinary usage.
- **Legal public holiday**: the eleven days listed in 5 U.S.C. 6103(a), a list that Regulation CC's own definition does not track.

## Sources
12 CFR § 229.2. (n.d.). *Definitions*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/229.2

5 U.S.C. § 6103. (n.d.). *Holidays*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/5/6103

Office of the Federal Register. (2024). *Code of Federal Regulations, title 12, volume 3, section 229.2*. U.S. Government Publishing Office. https://www.govinfo.gov/content/pkg/CFR-2024-title12-vol3/xml/CFR-2024-title12-vol3-sec229-2.xml`,
    },
    {
      slug: "the-cut-off-hour",
      title: "3 · The cut-off hour, and the deposit that was not made today",
      section: "Section 1 · Two clocks, and the words that run them",
      body: `You put a check in at four in the afternoon. The receipt says today's date. The rule may not agree.

**Regulation CC lets a bank end its day early, within limits.** The section that decides when funds are considered deposited says funds may be treated as deposited on the **next** banking day in several situations, and the one that catches most people is a cut-off hour:

> "After a cut-off hour set by the depositary bank for the receipt of deposits of 2:00 p.m. or later, or, for the receipt of deposits at ATMs, contractual branches, or off-premise facilities, of 12:00 noon or later" (12 CFR § 229.19, n.d.)

**Those two times are floors, not the answer.** The rule does not say your bank's cut-off is two o'clock. It says a bank may not set one **earlier** than two in the afternoon at a staffed facility, or earlier than noon at a machine. Where the line actually falls is a term of your own bank's disclosure, and Section 6 shows you how to demand that document. This is the method-not-table rule doing real work: a course that printed a cut-off hour would be printing one bank's choice as if it were the law.

**The rest of the same paragraph is about physical handling, and it is worth reading once.**

> "Funds deposited at a staffed facility, ATM, or contractual branch are considered deposited when they are received at the staffed facility, ATM, or contractual branch" (12 CFR § 229.19, n.d.)

> "Funds deposited to a night depository, lock box, or similar facility are considered deposited on the day on which the deposit is removed from such facility" (12 CFR § 229.19, n.d.)

> "Funds mailed to the depositary bank are considered deposited on the day they are received by the depositary bank" (12 CFR § 229.19, n.d.)

**And the sharpest one, for a machine that is not on the bank's own premises.** Funds deposited at an ATM that is not on, or within fifty feet of, the bank's premises are considered deposited on the day the funds are **removed** from the machine, if funds are normally removed not more than twice each week (12 CFR § 229.19, n.d.). Twice a week. A deposit into such a machine on a Tuesday may not be a deposit, for counting purposes, until the collection run. The regulation makes the bank tell you: a bank operating such a machine has to disclose at or on it the days on which deposits made there will be considered received (12 CFR § 229.18, n.d.).

**Put the three ideas from this section together and you have the first clock.** What you deposited decides which schedule applies. Where you deposited it can move the date of deposit. When you deposited it can move the date of deposit again. Only after all three have been settled does the count of business days begin.

**One consequence to hold onto.** People describe a hold as the bank punishing them. Often nothing has been held at all: the deposit simply belongs to a later banking day than the one on the receipt, and every business day counted after that was counted correctly. Knowing which of the two has happened is what lets you ask a useful question at the counter.

:::reveal What is the earliest cut-off hour Regulation CC allows for deposits received at a staffed facility? ||| 2:00 p.m. A bank may set a later one but not an earlier one.

:::reveal When are funds deposited at an off-premise ATM whose deposits are removed no more than twice a week considered deposited? ||| On the day the funds are removed from the machine, not the day they were put in.

:::reveal Where do you find your own bank's actual cut-off hour? ||| In the bank's own specific availability policy disclosure, which the regulation requires it to provide on request.

## Vocabulary
- **Cut-off hour**: the time a bank sets after which a deposit is treated as received on the next banking day, which may be no earlier than 2:00 p.m. at a staffed facility or noon at a machine.
- **Depositary bank**: the bank where a deposit is made, as distinct from the bank the item is drawn on.
- **Night depository**: a drop facility whose deposits are considered made on the day they are removed from it.
- **Off-premise ATM**: a machine not on, or within fifty feet of, the bank's premises, which carries its own deposit-timing rule and its own disclosure duty.

## Sources
12 CFR § 229.19. (n.d.). *Miscellaneous*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/229.19

12 CFR § 229.18. (n.d.). *Additional disclosure requirements*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/229.18`,
    },
    {
      slug: "quiz-two-clocks",
      title: "4 · Knowledge check: two clocks, and the words that run them",
      section: "Section 1 · Two clocks, and the words that run them",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What does this course say the gap between a due date and a pay date actually is?",
            options: ["A timing mechanism", "A reliable indication that the household is spending more each month than it earns", "A sign that the borrower has failed to plan the month in advance", "A problem that disappears once a person adopts a disciplined savings habit"],
            correctIndex: 0,
            explanation: "The gap comes from two calendars set by different parties under different rules, and both sets of rules are public and readable.",
            sourceLessonSlug: "the-gap-is-the-subject",
          },
          {
            prompt: "Why does this course refuse to teach budgeting technique?",
            options: ["Budgeting has no mechanism, decision-maker or recourse", "Budgeting is taught in the first course of this series and repeating it would waste a learner's time", "Budgeting is a mathematical subject that belongs in a mathematics course rather than a money course", "Budgeting produces results too slowly for a course of this length to measure honestly"],
            correctIndex: 0,
            explanation: "This catalog's method is to read the rule that governs a decision. Budgeting has no such rule, so forcing the method onto it would manufacture a grievance nobody can check.",
            sourceLessonSlug: "the-gap-is-the-subject",
          },
          {
            prompt: "Which federal statute, with its implementing regulation, sets when a bank must make deposited funds available?",
            options: ["The Expedited Funds Availability Act", "The Fair Credit Reporting Act, which governs the consumer reports that lenders buy about borrowers", "The Equal Credit Opportunity Act, which lists the bases a creditor may not discriminate on", "The Truth in Lending Act, which requires the annual percentage rate to be disclosed before a loan"],
            correctIndex: 0,
            explanation: "The Act sits at 12 U.S.C. 4001 and following, and Regulation CC at 12 CFR part 229 implements its funds-availability and disclosure provisions.",
            sourceLessonSlug: "the-gap-is-the-subject",
          },
          {
            prompt: "What does Uniform Commercial Code section 4-303(b) permit a bank to do?",
            options: ["Charge items in any order", "Refuse to pay any item presented on a day when the account balance has already reached zero", "Hold a deposited check for as long as the bank believes is commercially reasonable", "Choose which of a customer's several accounts a given item will be charged against"],
            correctIndex: 0,
            explanation: "Subject to subsection (a), items may be accepted, paid, certified, or charged to the indicated account of its customer in any order.",
            sourceLessonSlug: "the-gap-is-the-subject",
          },
          {
            prompt: "Which of these is the FIRST of the two clocks this course names?",
            options: ["Arrival to availability", "The interval between a wage being earned and the employer calculating it for the payroll run", "The interval between a bill being issued and the creditor reporting it to a credit bureau", "The interval between a card being issued and the first statement being generated on it"],
            correctIndex: 0,
            explanation: "The first clock runs from money reaching your bank to the moment you are allowed to use it. The second runs from committing to a payment to the money leaving.",
            sourceLessonSlug: "the-gap-is-the-subject",
          },
          {
            prompt: "Which of these does this course explicitly promise NOT to do?",
            options: ["Give financial advice", "Quote the text of any federal regulation, since regulations are revised too often to be quoted safely", "Describe how a bank decides whether to open an account for a new customer", "Explain how a payment moves between two banks on any given day"],
            correctIndex: 0,
            explanation: "The course will not tell a reader what to spend, will not recommend a pay frequency or a buffer size, and will not tell anyone which bill to pay first.",
            sourceLessonSlug: "the-gap-is-the-subject",
          },
          {
            prompt: "Why does this course date every figure it prints?",
            options: ["The thresholds are adjusted on a schedule", "Because the publisher requires a date stamp on every number that appears in any course in this catalog", "Because a reader cannot understand a dollar amount without knowing which month it was published in", "Because the figures are estimates rather than published values and the date signals that"],
            correctIndex: 0,
            explanation: "Dollar thresholds in funds availability are adjusted periodically, so an undated number is a claim someone will still be repeating years after it stopped being true.",
            sourceLessonSlug: "the-gap-is-the-subject",
          },
          {
            prompt: "The course says a bill paid late for lack of cleared funds and a bill unpaid for lack of money are different problems. What makes them different?",
            options: ["One has a rule behind it", "One appears on a bank statement and the other appears only on the creditor's internal record", "One is charged a fee by the bank and the other is charged a fee by the creditor", "One can be reversed by the customer and the other can be reversed only by the bank"],
            correctIndex: 0,
            explanation: "The timing failure is governed by a schedule and sometimes carries a remedy. The shortfall is not, so telling them apart changes what question is worth asking.",
            sourceLessonSlug: "the-gap-is-the-subject",
          },
          {
            prompt: "According to this course, who sets how often an employee is paid?",
            options: ["State law", "The Fair Labor Standards Act, which fixes a minimum pay frequency for every covered employer", "The employee, who selects a frequency when completing a federal withholding form", "The bank that receives the direct deposit, which sets frequency in its account agreement"],
            correctIndex: 0,
            explanation: "Federal law requires payment on a regular pay day and does not set the frequency; state payday statutes do, and they differ from one another.",
            sourceLessonSlug: "the-gap-is-the-subject",
          },
          {
            prompt: "What does the phrase \"teach the method, not the table\" mean in this course?",
            options: ["Show how to find the current rule", "Present every rule as a chart so a learner can compare states without reading any statute", "Teach only rules that are unlikely to change during the useful life of the course", "Replace regulatory text with worked arithmetic wherever the arithmetic is simpler"],
            correctIndex: 0,
            explanation: "A state payday statute, a bank cut-off hour and a pay calendar are three documents with three owners, so the transferable skill is finding each one.",
            sourceLessonSlug: "the-gap-is-the-subject",
          },
          {
            prompt: "How does this course describe the balance shown on a banking app?",
            options: ["Not one of the two clocks", "The authoritative record of what a customer may spend at any given moment of the day", "A figure the bank is required by Regulation CC to update within one business day", "A number identical to the ledger balance in every case except a pending wire transfer"],
            correctIndex: 0,
            explanation: "Neither clock is the calendar on the wall and neither is the balance on the phone. Both clocks are defined by rules rather than by a display.",
            sourceLessonSlug: "the-gap-is-the-subject",
          },
          {
            prompt: "Which course in this series covers the consumer report, the score and the adverse action notice?",
            options: ["MONEY-01", "This course, in the section that explains how a bank decides whether to release deposited funds", "MONEY-04, which prices predatory products using the fee-to-rate conversion", "MONEY-99, the capstone in which a learner reconciles three reports at once"],
            correctIndex: 0,
            explanation: "MONEY-01 is Credit, and the Decisions Made About You. This course deliberately does not re-teach it.",
            sourceLessonSlug: "the-gap-is-the-subject",
          },
          {
            prompt: "In Regulation CC, what is a banking day?",
            options: ["Part of a business day when a bank is open", "Any calendar day on which a bank's electronic systems are able to accept a deposit from a customer", "Any weekday, including a federal holiday, on which the Federal Reserve settles payments between banks", "The twenty-four hours following the moment a deposit is physically received by a bank employee"],
            correctIndex: 0,
            explanation: "The definition is that part of any business day on which an office of a bank is open to the public for carrying on substantially all of its banking functions.",
            sourceLessonSlug: "business-day-banking-day",
          },
          {
            prompt: "In Regulation CC, what is a business day?",
            options: ["A calendar day other than named exclusions", "Any day on which the Federal Reserve's check-processing office is operating at normal capacity", "Any day on which the depositary bank's own head office is open for business to the public", "Any twenty-four-hour period beginning at the bank's stated cut-off hour and running to the next one"],
            correctIndex: 0,
            explanation: "It is a calendar day other than a Saturday or a Sunday and other than the ten dates the definition names.",
            sourceLessonSlug: "business-day-banking-day",
          },
          {
            prompt: "How many dates, besides Saturdays and Sundays, does Regulation CC's definition of business day exclude?",
            options: ["Ten", "Eleven, matching one for one the legal public holidays listed in the federal holiday statute", "Twelve, because the definition adds the day after Thanksgiving to the federal holiday list", "Nine, because the definition omits both Columbus Day and Veterans Day from the exclusions"],
            correctIndex: 0,
            explanation: "January 1, the third Monday in January, the third Monday in February, the last Monday in May, July 4, the first Monday in September, the second Monday in October, November 11, the fourth Thursday in November, and December 25.",
            sourceLessonSlug: "business-day-banking-day",
          },
          {
            prompt: "How many legal public holidays does 5 U.S.C. 6103(a) list?",
            options: ["Eleven", "Ten, the same ten dates that Regulation CC excludes from its definition of a business day", "Thirteen, counting the two days on which federal offices close for a presidential inauguration", "Twelve, because the statute treats the day after Thanksgiving as a separate observance"],
            correctIndex: 0,
            explanation: "New Year's Day, Martin Luther King Jr.'s Birthday, Washington's Birthday, Memorial Day, Juneteenth, Independence Day, Labor Day, Columbus Day, Veterans Day, Thanksgiving and Christmas.",
            sourceLessonSlug: "business-day-banking-day",
          },
          {
            prompt: "Which holiday is in the federal holiday statute but not in Regulation CC's list of excluded dates, as checked on 28 August 2026?",
            options: ["Juneteenth", "Veterans Day, which the regulation removed when the check-processing regions were consolidated", "Columbus Day, which the regulation replaced with the second Monday in October generally", "Washington's Birthday, which the regulation names by date rather than by the third Monday rule"],
            correctIndex: 0,
            explanation: "The regulation's list names ten dates and June 19 is not among them, so the day can be a business day for counting even when a bank is closed.",
            sourceLessonSlug: "business-day-banking-day",
          },
          {
            prompt: "What is the practical consequence of a day being a business day but not a banking day?",
            options: ["The availability clock still counts it", "No deposit made anywhere in the country can be treated as received on that day for any purpose", "The bank must extend every outstanding hold by one additional day to compensate the customer", "Interest stops accruing on every interest-bearing account held at that bank for the day"],
            correctIndex: 0,
            explanation: "Deadlines are counted in business days from the banking day of deposit, so a closed-bank day that is still a business day ticks the count forward.",
            sourceLessonSlug: "business-day-banking-day",
          },
          {
            prompt: "Why can a bank that opens on a Saturday morning still have no banking day that Saturday?",
            options: ["Saturday is not a business day", "Because a banking day requires the bank's head office rather than a branch to be open to the public", "Because a bank may declare a banking day only once in any seven consecutive calendar days", "Because deposits received on a weekend are treated as mailed deposits under the same section"],
            correctIndex: 0,
            explanation: "A banking day is part of a business day, and the definition of business day excludes Saturdays outright, so there is no business day for it to be part of.",
            sourceLessonSlug: "business-day-banking-day",
          },
          {
            prompt: "A deposit is made on a Friday that is a banking day, before the cut-off hour. When does the count of business days begin?",
            options: ["That Friday", "The following Monday, because the weekend must pass before any deposit can be considered received", "The following Tuesday, because the rule requires one full business day of processing first", "The Thursday before, because the availability schedule is calculated backward from the weekend"],
            correctIndex: 0,
            explanation: "Friday is the banking day of deposit, so it is the starting point. The first business day after it is Monday, because Saturday and Sunday are not business days.",
            sourceLessonSlug: "business-day-banking-day",
          },
          {
            prompt: "What reading habit does the business-day definition illustrate?",
            options: ["A defined term means its definition", "That a regulation should be read alongside the statute it implements before either is relied on", "That the older of two conflicting federal lists always controls the newer one", "That a list in a regulation is illustrative unless the regulation says otherwise"],
            correctIndex: 0,
            explanation: "Regulation CC's business day is a list of dates, not a reference to the holiday statute, so the ordinary sense of the words does not decide the question.",
            sourceLessonSlug: "business-day-banking-day",
          },
          {
            prompt: "Which of these is NOT excluded from business days by Regulation CC's definition?",
            options: ["June 19", "November 11, which the definition names by date rather than by a weekday rule", "The fourth Thursday in November, which falls on Thanksgiving Day each year", "The last Monday in May, which falls on Memorial Day each year"],
            correctIndex: 0,
            explanation: "The definition names ten dates and June 19 is absent from the list, although it is a legal public holiday under 5 U.S.C. 6103(a).",
            sourceLessonSlug: "business-day-banking-day",
          },
          {
            prompt: "Which source did this course use to confirm the exact wording of the business-day definition?",
            options: ["The official annual CFR edition", "A bank's published account agreement, which restates the regulation in the same terms", "A press release from the agency that issued the most recent threshold adjustment", "A state banking department bulletin summarising the availability schedule for consumers"],
            correctIndex: 0,
            explanation: "The wording was checked against the Government Publishing Office's Code of Federal Regulations title 12 text on 28 August 2026, alongside a secondary source.",
            sourceLessonSlug: "business-day-banking-day",
          },
          {
            prompt: "Under Regulation CC, what is the earliest cut-off hour a bank may set for deposits received at a staffed facility?",
            options: ["2:00 p.m.", "12:00 noon, the same limit that applies to deposits received at automated teller machines", "9:00 a.m., provided the bank discloses the hour on a sign at every teller window", "5:00 p.m., which is also the deadline for making the cash-withdrawal amount available"],
            correctIndex: 0,
            explanation: "The section allows a bank to treat a deposit as next-day if it arrives after a cut-off hour of 2:00 p.m. or later. Earlier hours are not permitted at a staffed facility.",
            sourceLessonSlug: "the-cut-off-hour",
          },
          {
            prompt: "What is the earliest cut-off hour allowed for deposits at an ATM, contractual branch or off-premise facility?",
            options: ["12:00 noon", "2:00 p.m., the same limit that applies to a deposit handed to an employee at a branch", "5:00 p.m., because machine deposits are collected at the end of the business day", "There is no floor, because the bank controls when it empties its own machines"],
            correctIndex: 0,
            explanation: "For those facilities the rule permits a cut-off hour of 12:00 noon or later, which is two hours earlier than the staffed-facility floor.",
            sourceLessonSlug: "the-cut-off-hour",
          },
          {
            prompt: "Are the times named in the cut-off rule the times your own bank uses?",
            options: ["No, they are floors", "Yes, every insured depository institution is required to use exactly those two hours", "Yes, unless the bank has fewer than a stated number of branches in the state", "No, they are ceilings, so a bank may only set an hour earlier than the one named"],
            correctIndex: 0,
            explanation: "The rule forbids a cut-off earlier than the named hour. Where a particular bank's line actually falls is a term of that bank's own disclosure.",
            sourceLessonSlug: "the-cut-off-hour",
          },
          {
            prompt: "When are funds deposited to a night depository or lock box considered deposited?",
            options: ["When the deposit is removed", "On the calendar day the customer places the deposit into the facility, whatever hour that is", "On the second business day after the facility is next opened by a bank employee", "On the banking day the bank credits the funds to the customer's ledger balance"],
            correctIndex: 0,
            explanation: "The rule says such funds are considered deposited on the day on which the deposit is removed from the facility.",
            sourceLessonSlug: "the-cut-off-hour",
          },
          {
            prompt: "When are funds mailed to a depositary bank considered deposited?",
            options: ["When the bank receives them", "On the day the customer places the envelope in the mail, as shown by the postmark on it", "On the business day after the postal service confirms delivery to the bank's address", "On the day the bank finishes processing the item and posts it to the account"],
            correctIndex: 0,
            explanation: "Mailed funds are considered deposited on the day they are received by the depositary bank.",
            sourceLessonSlug: "the-cut-off-hour",
          },
          {
            prompt: "For an off-premise ATM whose deposits are removed no more than twice a week, when are funds considered deposited?",
            options: ["When they are removed", "On the day the machine issues its printed receipt to the person making the deposit", "On the second business day following the calendar day the deposit was made", "On the banking day the deposit is scanned and imaged by the machine itself"],
            correctIndex: 0,
            explanation: "The rule applies to a machine not on, or within fifty feet of, the bank's premises, and it moves the deposit date to the collection run.",
            sourceLessonSlug: "the-cut-off-hour",
          },
          {
            prompt: "What distance does the rule use to decide whether an ATM is off the bank's premises?",
            options: ["Fifty feet", "Five hundred feet, measured from the nearest public entrance of the bank's branch", "One quarter of a mile, measured from the centre of the bank's own parcel of land", "One city block, as defined by the local jurisdiction where the machine is installed"],
            correctIndex: 0,
            explanation: "A machine not on, or within fifty feet of, the premises falls into the off-premise category for this deposit-timing rule.",
            sourceLessonSlug: "the-cut-off-hour",
          },
          {
            prompt: "What must a bank disclose at or on an off-premise ATM whose deposits are removed twice a week or less?",
            options: ["Which days deposits count as received", "The full text of its availability policy, printed in a form the customer may take away", "The name and address of the Federal Reserve Bank that processes its check deposits", "The maximum dollar amount the machine will accept in a single deposit envelope"],
            correctIndex: 0,
            explanation: "The additional-disclosure section requires the bank to disclose the days on which deposits made at that machine will be considered received.",
            sourceLessonSlug: "the-cut-off-hour",
          },
          {
            prompt: "The course names three things that must be settled before the count of business days can begin. Which is one of them?",
            options: ["Where the deposit was made", "How large the depositor's average balance has been over the preceding six months", "Whether the depositor has ever had an item returned unpaid at any institution", "Whether the paying bank is in the same state as the depositary bank"],
            correctIndex: 0,
            explanation: "What was deposited decides which schedule applies, and where and when it was deposited can both move the date of deposit itself.",
            sourceLessonSlug: "the-cut-off-hour",
          },
          {
            prompt: "According to this lesson, what does a customer often mistake for a bank punishing them?",
            options: ["A later banking day of deposit", "A charge for using an automated teller machine owned by a different institution", "A monthly maintenance fee assessed because a minimum balance was not maintained", "A returned-item fee charged by the party that presented the item for payment"],
            correctIndex: 0,
            explanation: "Frequently nothing was held at all. The deposit belonged to a later banking day than the receipt suggested, and every business day after it was counted correctly.",
            sourceLessonSlug: "the-cut-off-hour",
          },
          {
            prompt: "Where does a customer find the days on which an off-premise machine's deposits are treated as received?",
            options: ["Posted at or on the machine", "In the periodic statement the bank sends after the deposit has finally been credited", "In the Federal Reserve's published operating circular for the district the machine sits in", "In the deposit agreement signed when the account was first opened, and nowhere else"],
            correctIndex: 0,
            explanation: "The regulation places the disclosure duty at the machine itself for exactly this situation.",
            sourceLessonSlug: "the-cut-off-hour",
          },
          {
            prompt: "Which section of Regulation CC decides when funds are considered deposited?",
            options: ["Section 229.19", "Section 229.10, which lists the deposits that must be available on the next business day", "Section 229.13, which sets out the exceptions that let a bank extend a hold", "Section 229.21, which provides for civil liability when a bank fails to comply"],
            correctIndex: 0,
            explanation: "The miscellaneous section, 12 CFR 229.19, carries the deposit-timing rules including the cut-off hour.",
            sourceLessonSlug: "the-cut-off-hour",
          },
          {
            prompt: "A bank office that is open only for safe deposit box access on a given weekday is, for that purpose, most likely NOT having what?",
            options: ["A banking day", "A business day, because the definition depends on whether the office is open at all", "A cut-off hour, since the rule requires one only when deposits are being accepted", "A settlement day, because the Federal Reserve does not settle for partially open offices"],
            correctIndex: 0,
            explanation: "A banking day requires the office to be open for carrying on substantially all of its banking functions, not merely one of them.",
            sourceLessonSlug: "business-day-banking-day",
          },
          {
            prompt: "Which of these terms is defined by reference to a list of dates rather than to a bank's own hours?",
            options: ["Business day", "Banking day, which the regulation ties to the ten dates named in the definitions section", "Cut-off hour, which the regulation fixes at a single time for every institution", "Depositary bank, which is defined by the calendar on which it accepts items"],
            correctIndex: 0,
            explanation: "Business day is the list-of-dates term. Banking day is the one that depends on whether a particular office is open.",
            sourceLessonSlug: "business-day-banking-day",
          },
          {
            prompt: "What is the relationship between a banking day and a business day?",
            options: ["A banking day is part of a business day", "A business day is part of a banking day, because banks operate longer hours than the calendar allows", "They are the same thing under two names used in different parts of the regulation", "They overlap only on the days when the Federal Reserve is settling payments between banks"],
            correctIndex: 0,
            explanation: "The definition says a banking day is that part of any business day on which an office is open for substantially all of its banking functions.",
            sourceLessonSlug: "business-day-banking-day",
          },
          {
            prompt: "Which of these is one of the three mechanisms the opening lesson names as making timing teachable?",
            options: ["A federal availability schedule", "A national registry recording every household's income and its regular monthly obligations", "A federal agency that reviews individual complaints about the size of a household budget", "A uniform national rule fixing how many paydays an employer must provide each year"],
            correctIndex: 0,
            explanation: "The three are the availability schedule, the commercial-code posting-order permission, and state payday statutes.",
            sourceLessonSlug: "the-gap-is-the-subject",
          },
          {
            prompt: "How does the opening lesson describe the availability of a deposit?",
            options: ["Later than receipt", "Identical to the moment the bank receives the item from the customer at any facility", "Fixed at five business days for every kind of deposit a consumer can make", "Decided case by case by the branch manager who accepts the deposit"],
            correctIndex: 0,
            explanation: "Availability is defined as the moment a bank must let you actually use deposited funds, which comes after the moment it received them.",
            sourceLessonSlug: "the-gap-is-the-subject",
          },
          {
            prompt: "How does the opening lesson define posting?",
            options: ["Charging a payment against the balance", "Sending a written record of a transaction to the customer's registered mailing address", "Transmitting an item to the Federal Reserve for collection from the paying bank", "Recording a deposit in the bank's general ledger at the close of the banking day"],
            correctIndex: 0,
            explanation: "Posting is charging a payment against your account balance, and the lesson stresses that it is a separate event from authorising the payment.",
            sourceLessonSlug: "the-gap-is-the-subject",
          },
          {
            prompt: "Which course in this series covers deposit insurance, the identity gate and the substitute market?",
            options: ["MONEY-02", "This course, in the section on the rails that money can travel along between banks", "MONEY-05, the domestic tax-filing course that hands off to the taxes-abroad course", "MONEY-06, the housing course built around the standardized federal mortgage forms"],
            correctIndex: 0,
            explanation: "MONEY-02 is Banking, and Who Has No Bank. This course touches overdraft only where posting order decides how many occur.",
            sourceLessonSlug: "the-gap-is-the-subject",
          },
          {
            prompt: "What does this course say about naming a particular bank, card or payment app?",
            options: ["It names none as a recommendation", "It names one preferred provider in each category so learners have a concrete starting point", "It names providers only where a federal agency has published a comparison of them", "It names providers whose fee schedules are published, and recommends those over others"],
            correctIndex: 0,
            explanation: "The course gives no financial advice, so it recommends no provider, no pay frequency, no buffer size and no order of payment.",
            sourceLessonSlug: "the-gap-is-the-subject",
          },
          {
            prompt: "A deposit is handed to a teller at 3:30 p.m. at a bank whose disclosed cut-off hour is 3:00 p.m. What is the banking day of deposit?",
            options: ["The next banking day", "The same day, because the deposit was physically received during posted branch hours", "Two banking days later, because the rule adds a processing day after a late deposit", "The previous banking day, because the bank's day had already closed for accounting"],
            correctIndex: 0,
            explanation: "A cut-off hour of 3:00 p.m. is later than the 2:00 p.m. floor and therefore permitted, so a deposit after it may be treated as received on the next banking day.",
            sourceLessonSlug: "the-cut-off-hour",
          },
          {
            prompt: "Why would a course that printed a single national cut-off hour be misleading?",
            options: ["It would print one bank's choice as law", "It would omit the two-hour difference between staffed facilities and automated teller machines", "It would conflict with the federal holiday statute's list of legal public holidays", "It would ignore that some banks accept no deposits at all after the middle of the day"],
            correctIndex: 0,
            explanation: "The regulation sets only a floor. The actual hour is a term of each bank's own disclosure, which is why the course teaches how to demand that document.",
            sourceLessonSlug: "the-cut-off-hour",
          },
          {
            prompt: "Which of these is NOT one of the deposit-timing situations named in 12 CFR 229.19(a)?",
            options: ["A deposit made by a business customer", "A deposit made to a night depository, lock box or similar facility", "A deposit mailed to the depositary bank rather than delivered in person", "A deposit made at an ATM that is not on or within fifty feet of the premises"],
            correctIndex: 0,
            explanation: "The paragraph turns on how and where a deposit reaches the bank, not on who the depositor is.",
            sourceLessonSlug: "the-cut-off-hour",
          },
          {
            prompt: "Which single fact does the Juneteenth comparison in this section actually establish?",
            options: ["The two lists are not the same list", "That banks are legally required to remain open on every federal holiday that Regulation CC omits", "That the availability schedule has been shortened by one business day since 2021", "That a customer may demand an extra day of availability whenever a bank closes"],
            correctIndex: 0,
            explanation: "Regulation CC enumerates dates and the holiday statute enumerates holidays, and the two enumerations have diverged. The lesson draws no wider conclusion.",
            sourceLessonSlug: "business-day-banking-day",
          },
          {
            prompt: "What does the course say a customer gains from knowing whether a hold was applied or a deposit simply landed on a later banking day?",
            options: ["A useful question to ask", "The right to demand that the funds be released immediately without further inquiry", "An automatic refund of any fee charged while the funds were unavailable", "A basis for closing the account without paying an early closure charge"],
            correctIndex: 0,
            explanation: "Knowing which of the two happened is what lets a person ask something specific at the counter rather than a general complaint.",
            sourceLessonSlug: "the-cut-off-hour",
          },
          {
            prompt: "Which of these best describes the structure of the first clock, as this section builds it?",
            options: ["What, where, when, then count", "Count first, then check whether the deposit was made in person or at a machine", "Apply the schedule, then adjust it for the customer's account history over six months", "Add five business days to any deposit, then subtract for each weekday the bank was open"],
            correctIndex: 0,
            explanation: "What was deposited chooses the schedule, where and when can move the banking day of deposit, and only then does the count of business days start.",
            sourceLessonSlug: "the-cut-off-hour",
          },
          {
            prompt: "Which statement about the two clocks is accurate?",
            options: ["They are governed by different bodies of law", "They are both governed by Regulation CC, which covers deposits and withdrawals alike", "They are both governed by the Uniform Commercial Code as adopted in each state", "They are both set by the bank's account agreement rather than by any external rule"],
            correctIndex: 0,
            explanation: "Availability comes from a federal statute and regulation. Posting order comes from state commercial law, which permits any order.",
            sourceLessonSlug: "the-gap-is-the-subject",
          },
          {
            prompt: "What does the opening lesson say a course cannot know?",
            options: ["Your life", "The text of the federal regulations that govern the availability of deposited funds", "Which state's payday statute applies to a given employee's job", "How a bank decides the order in which it charges a day's items"],
            correctIndex: 0,
            explanation: "Decisions about spending, borrowing and priority are decisions about a life, and the course refuses them for that reason rather than for a legal one.",
            sourceLessonSlug: "the-gap-is-the-subject",
          },
          {
            prompt: "Which of these three documents does the course say has a different owner from the other two?",
            options: ["They each have a different owner", "Your bank's cut-off hour and your state's payday statute share one publisher", "Your pay calendar and your bank's cut-off hour are both set by your employer", "All three are published by the same federal agency in a single annual document"],
            correctIndex: 0,
            explanation: "A state payday statute belongs to the legislature, a cut-off hour to the bank, and a pay calendar to the employer, which is why the method matters more than a table.",
            sourceLessonSlug: "the-gap-is-the-subject",
          },
          {
            prompt: "A Monday that is the third Monday in February falls two days after a Saturday deposit. When is the first business day after the deposit?",
            options: ["Tuesday", "Monday, because the regulation counts every weekday as a business day regardless of holiday", "Saturday itself, because a deposit is always received on the day it is physically made", "Wednesday, because the rule adds one day after any federal holiday closure"],
            correctIndex: 0,
            explanation: "Saturday and Sunday are excluded, and the third Monday in February is one of the ten named dates, so the count resumes on Tuesday.",
            sourceLessonSlug: "business-day-banking-day",
          },
          {
            prompt: "What does Regulation CC's definitions section call the bank where a deposit is made?",
            options: ["The depositary bank", "The paying bank, which is the institution the deposited item is ultimately drawn upon", "The collecting bank, which is any institution handling the item other than the payor", "The reconciling bank, which is the institution that credits the customer's ledger"],
            correctIndex: 0,
            explanation: "The depositary bank is where the deposit is made, as distinct from the bank the item is drawn on.",
            sourceLessonSlug: "the-cut-off-hour",
          },
          {
            prompt: "What does the opening lesson say about the rules this course relies on?",
            options: ["They are public and mostly short", "They are held by the institutions that apply them and released only on written request", "They are technical enough that a reader needs professional help to interpret any of them", "They are revised so frequently that only the current month's version is worth reading"],
            correctIndex: 0,
            explanation: "The course's promise is that the rules are free, written down and mostly short, which is what makes putting them in a learner's hands possible.",
            sourceLessonSlug: "the-gap-is-the-subject",
          },
          {
            prompt: "Which of these does the course say it will NOT recommend?",
            options: ["A buffer size", "The section of the regulation that defines when funds are considered deposited", "The method for counting business days between a deposit and its availability", "The document a bank must supply on request describing its availability policy"],
            correctIndex: 0,
            explanation: "The course recommends no provider, no pay frequency, no buffer size and no order of payment, because those are decisions about a life.",
            sourceLessonSlug: "the-gap-is-the-subject",
          },
          {
            prompt: "How does the course describe the relationship between the two days in \"rent on the first, pay on the third\"?",
            options: ["Two calendars set by different parties", "A single schedule that the employer and the landlord negotiated with each other", "An accident of the calendar that disappears in months with thirty-one days", "A term of the lease that the tenant agreed to when the agreement was signed"],
            correctIndex: 0,
            explanation: "Two days every month is not a fact about character. It is two calendars set under different rules, and both sets of rules are public.",
            sourceLessonSlug: "the-gap-is-the-subject",
          },
          {
            prompt: "Which of these is true of a bank office open only part of a business day?",
            options: ["The open part is the banking day", "The whole calendar day is a banking day once the office opens for any purpose at all", "No banking day occurs unless the office is open for its full posted hours", "The banking day is fixed by the Federal Reserve rather than by the office's hours"],
            correctIndex: 0,
            explanation: "A banking day is that part of a business day on which an office is open to the public for carrying on substantially all of its banking functions.",
            sourceLessonSlug: "business-day-banking-day",
          },
          {
            prompt: "Where does the availability count begin, once the deposit's date is settled?",
            options: ["The banking day of deposit", "The calendar day printed on the receipt the customer received at the time of deposit", "The business day on which the paying bank first receives the item for payment", "The day the depositary bank receives credit for the funds from another institution"],
            correctIndex: 0,
            explanation: "Deadlines are counted in business days from the banking day of deposit, which is why the cut-off hour and the deposit location matter first.",
            sourceLessonSlug: "business-day-banking-day",
          },
          {
            prompt: "How does 5 U.S.C. 6103(b)(1) treat a holiday falling on a Saturday, for employees whose basic workweek is Monday through Friday?",
            options: ["The preceding Friday is the holiday", "The following Monday becomes the legal public holiday for those employees instead", "The holiday is observed on the Saturday itself with no substitution of any weekday", "The employee may select either the preceding Friday or the following Monday"],
            correctIndex: 0,
            explanation: "Instead of a holiday that occurs on a Saturday, the Friday immediately before is a legal public holiday for those employees.",
            sourceLessonSlug: "business-day-banking-day",
          },
          {
            prompt: "What kind of facility does the deposit-timing rule treat the same way as a night depository?",
            options: ["A lock box", "A staffed teller window at a branch of the depositary bank itself", "An automated teller machine located inside the bank's own lobby", "A contractual branch operated by another institution on the bank's behalf"],
            correctIndex: 0,
            explanation: "Funds deposited to a night depository, lock box, or similar facility are considered deposited on the day the deposit is removed from it.",
            sourceLessonSlug: "the-cut-off-hour",
          },
          {
            prompt: "Which fact about an off-premise machine triggers the removal-day deposit rule?",
            options: ["Funds are removed twice a week or less", "The machine is operated by a company other than an insured depository institution", "The machine accepts cash but not checks from the customers who use it", "The machine is located more than one mile from the nearest branch of the bank"],
            correctIndex: 0,
            explanation: "The rule applies where the machine is not on, or within fifty feet of, the premises and funds are normally removed not more than twice each week.",
            sourceLessonSlug: "the-cut-off-hour",
          },
          {
            prompt: "What does the course say is the first useful thing it does?",
            options: ["Tell two kinds of late apart", "Calculate the exact number of days a bank may hold any particular deposit", "Identify which federal agency supervises a given depository institution", "Rank the payment methods available to a household by their total cost"],
            correctIndex: 0,
            explanation: "A bill paid late for want of cleared funds and a bill unpaid for want of money look identical on a statement and are not the same problem.",
            sourceLessonSlug: "the-gap-is-the-subject",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2 — When money arrives: the availability schedule
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "why-a-schedule-exists",
      title: "5 · Why there is a schedule at all",
      section: "Section 2 · When money arrives: the availability schedule",
      body: `Before 1987 there was no federal answer to the question "when can I spend this?" A bank held a deposit for as long as it judged prudent, and the judgement was its own.

**Congress replaced the judgement with a schedule.** The Expedited Funds Availability Act put maximum holding periods into federal law, and Regulation CC implements its funds-availability and disclosure provisions (12 U.S.C. § 4002, n.d.; 12 CFR Part 229, n.d.). Notice the shape of what was done. Nobody legislated that a bank must be generous. Congress legislated a **ceiling on delay**, a duty to **disclose** the policy, and a **liability** when the ceiling is breached. That is the pattern to look for in every consumer-money rule you will meet: a floor of behaviour, a document, and a remedy.

**The statute's own numbers, so you can see the layers.** For cash and wire transfers the Act says funds "shall be available for withdrawal not later than the business day after the business day on which such cash is deposited or such funds are received for deposit" (12 U.S.C. § 4002, n.d.). For checks drawn on a local institution it says "not more than 1 business day shall intervene" between deposit and availability, and for a nonlocal institution "not more than 4 business days" (12 U.S.C. § 4002, n.d.).

**Then read this one, and hold the number.**

> "Not more than $400 . . . of funds deposited by one or more checks . . . shall be available for cash withdrawal not later than 5 o'clock post meridian" (12 U.S.C. § 4002, n.d.)

**Four hundred dollars is in the statute and it is not the operative figure.** The Act also carries its own updating clause:

> "The dollar amounts under this chapter shall be adjusted every 5 years after December 31, 2011, by the annual percentage increase in the Consumer Price Index for Urban Wage Earners and Clerical Workers, as published by the Bureau of Labor Statistics, rounded to the nearest multiple of $25." (12 U.S.C. § 4006, n.d.)

**So the statute prints an old number and instructs somebody to keep it current.** The adjusted amounts sit in the regulation. Read on 28 August 2026, the figures in force from 1 July 2025 were **$275** for the minimum amount of a day's check deposits that must be available on the next business day, **$550** for the amount that must be available for cash withdrawal, and **$6,725** for the large-deposit and new-account thresholds (12 CFR § 229.10, n.d.; 12 CFR § 229.12, n.d.; 12 CFR § 229.13, n.d.). **Every one of those will move again**, on the schedule the statute names, which is why this course teaches where they live rather than asking you to remember them.

**One more piece of history that quietly changed the schedule.** The Act distinguishes local from nonlocal checks, and a nonlocal check could be held two business days longer. That distinction depended on there being several Federal Reserve check-processing regions. The Reserve Banks cut their paper check-processing offices from forty-five in 2003 to a single office in 2010, and the Federal Reserve's own description of the consequence is blunt: the consolidation "resulted in all checks being considered 'local checks' under Regulation CC" (Board of Governors of the Federal Reserve System, n.d.). **The nonlocal category still exists in the text and no longer catches anything.**

That is worth more than the fact itself. A rule can be technically unchanged and practically transformed by something that happened to the plumbing underneath it, and you will only ever notice by reading both.

:::reveal What three things did Congress legislate when it set funds availability, rather than legislating generosity? ||| A ceiling on delay, a duty to disclose the policy, and a civil liability when the ceiling is breached.

:::reveal How often are the Act's dollar amounts adjusted, and by what measure? ||| Every five years after 31 December 2011, by the increase in the Consumer Price Index for Urban Wage Earners and Clerical Workers, rounded to the nearest twenty-five dollars.

:::reveal Why does the nonlocal check category no longer catch anything? ||| Because the Reserve Banks consolidated to a single check-processing office in 2010, so every check is local to every other.

## Vocabulary
- **Expedited Funds Availability Act**: the 1987 statute that replaced each bank's private judgement about holds with a federal maximum.
- **Regulation CC**: 12 CFR part 229, the rule that implements the Act's funds-availability and disclosure provisions.
- **Check-processing region**: the geographic area served by one Federal Reserve check-processing office, now a single region nationally.
- **Local check**: a check payable by or at a paying bank in the same check-processing region as the depositary bank, which since 2010 means every check.

## Sources
12 U.S.C. § 4002. (n.d.). *Expedited funds availability schedules*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/12/4002

12 U.S.C. § 4006. (n.d.). *Disclosure of funds availability policies*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/12/4006

Board of Governors of the Federal Reserve System. (n.d.). *Regulation CC (availability of funds and collection of checks)*. https://www.federalreserve.gov/paymentsystems/regcc-about.htm

12 CFR § 229.10. (n.d.). *Next-day availability*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/229.10`,
    },
    {
      slug: "next-day-and-second-day",
      title: "6 · What must be available tomorrow, and what may wait",
      section: "Section 2 · When money arrives: the availability schedule",
      body: `The schedule sorts deposits into buckets. Which bucket yours lands in is decided by what the item is, not by how much you need it.

**Cash, and the difference the counter makes.** Cash deposited **in person to an employee** of the bank must be available not later than the business day after the banking day of deposit; cash deposited any other way gets the **second** business day (12 CFR § 229.10, n.d.). Handing it to a person is a legally different act from feeding it to a machine.

**Electronic payments, and the narrow meaning of that phrase.** Funds received by an electronic payment must be available not later than the business day after the banking day the bank received it, and the rule says exactly when receipt happens:

> "An electronic payment is received when the bank receiving the payment has received both—(i) Payment in actually and finally collected funds; and (ii) Information on the account and amount to be credited." (12 CFR § 229.10, n.d.)

**Both halves.** Money without instructions is not received, and instructions without money are not received either. And the phrase itself is defined narrowly:

> "Electronic payment means a wire transfer or an ACH credit transfer." (12 CFR § 229.2, n.d.)

A payroll direct deposit is an automated clearing house credit, so it is covered. A card refund is not a wire or an ACH credit, so this particular rule does not reach it.

**The next-day check list, which is short and specific.** Six categories of check get next-business-day availability: Treasury checks, United States Postal Service money orders, Federal Reserve Bank and Federal Home Loan Bank checks, state and local government checks, cashier's, certified and teller's checks, and checks drawn on the same bank the deposit is made at (12 CFR § 229.10, n.d.). Several of those carry conditions, including special deposit-slip requirements, so read the paragraph rather than the summary.

**And a seventh category that is not a kind of check at all.** The same paragraph requires next-day availability of:

> "The lesser of—(A) $275, or (B) The aggregate amount deposited on any one banking day" (12 CFR § 229.10, n.d.)

That is the floor under every ordinary check deposit: whatever else is held, that much of a day's deposits is usable tomorrow. The amount was $225 before 1 July 2025 and is $275 as read on 28 August 2026.

**Everything else runs on the general schedule.** A depositary bank must make funds from a local check available not later than the **second** business day following the banking day of deposit, and funds deposited at a **nonproprietary** automated teller machine, meaning one the bank does not own or operate, not later than the **fifth** (12 CFR § 229.12, n.d.).

**One quiet extension worth knowing.** A bank may extend by **one** business day the time funds are available for withdrawal **by cash or similar means**, but it must still make $550 of those funds available for cash withdrawal not later than 5:00 p.m. on the business day they become available (12 CFR § 229.12, n.d.). Availability for paying a check and availability for taking notes out of a machine are not quite the same thing.

**A fourth clock, so you know it exists.** Interest is separate. A bank must begin to accrue interest or dividends on funds in an interest-bearing account "not later than the business day on which the depositary bank receives credit for the funds" (12 CFR § 229.14, n.d.). Money can therefore be earning before it is spendable. Those are different questions with different answers.

:::reveal What is the availability difference between cash handed to a bank employee and cash deposited another way? ||| In person to an employee is next business day; any other way is the second business day.

:::reveal What two things must a bank have received before an electronic payment counts as received? ||| Payment in actually and finally collected funds, and information on the account and amount to be credited.

:::reveal How much of a day's check deposits must be available on the next business day whatever else is held, as read on 28 August 2026? ||| The lesser of $275 or the aggregate amount deposited that banking day.

## Vocabulary
- **Electronic payment**: in Regulation CC, a wire transfer or an ACH credit transfer, and nothing else.
- **Next-day availability**: the requirement that named deposit types be usable no later than the business day after the banking day of deposit.
- **Nonproprietary ATM**: a machine the depositary bank neither owns nor operates and which is not on or near its premises, carrying a fifth-business-day schedule.
- **Minimum availability amount**: the portion of a day's aggregate check deposits that must be available next day regardless of the rest, $275 as read on 28 August 2026.
- **Cash-withdrawal amount**: the sum a bank must make available for cash by 5:00 p.m. when it uses the one-day cash extension, $550 as read on 28 August 2026.

## Sources
12 CFR § 229.10. (n.d.). *Next-day availability*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/229.10

12 CFR § 229.12. (n.d.). *Availability schedule*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/229.12

12 CFR § 229.14. (n.d.). *Payment of interest*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/229.14

12 CFR § 229.2. (n.d.). *Definitions*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/229.2`,
    },
    {
      slug: "six-exceptions-and-a-notice",
      title: "7 · Six exceptions, and the notice each one owes you",
      section: "Section 2 · When money arrives: the availability schedule",
      body: `The schedule has six named exits. Knowing their names is what turns "the bank is holding my money" into a question with an answer.

**The six, as the regulation heads them.** New accounts. Large deposits. Redeposited checks. Repeated overdrafts. Reasonable cause to doubt collectibility. Emergency conditions (12 CFR § 229.13, n.d.).

**New accounts** are the first thirty calendar days after an account is established. During that window the ordinary schedule applies only to the first $6,725 of certain deposits, and the excess must be available not later than the **ninth** business day (12 CFR § 229.13, n.d.). Thirty days is not a long time and it is the window in which a person is most likely to be moving money, which is exactly why it catches people.

**Large deposits** switch off the standard schedules "to the extent that the aggregate amount is in excess of $6,725 on any one banking day" (12 CFR § 229.13, n.d.). Note the word aggregate: several checks on one day are added together.

**Redeposited checks** covers a check returned unpaid and put in again, with stated carve-outs for a missing indorsement and a post-dated check (12 CFR § 229.13, n.d.).

**Repeated overdrafts** is the one with counting in it. The exception is available where the account has been overdrawn six or more times in the preceding six months, or two or more times by $6,725 or more, and it lasts for six months after the last such overdraft (12 CFR § 229.13, n.d.). Section 3 of this course is about how the **order** a bank processes a day's items in changes how many overdrafts a set of transactions produces. Hold the two facts together, because the count that opens this exception is produced by that order.

**Reasonable cause to doubt collectibility** applies where the bank "has reasonable cause to believe that the check is uncollectible" (12 CFR § 229.13, n.d.). It is the judgement-shaped one, and it is the reason the notice rule matters.

**Emergency conditions** covers an interruption of communications or equipment, a suspension of payments by another bank, a war, or an emergency beyond the bank's control (12 CFR § 229.13, n.d.).

**Now the part that makes the exceptions usable rather than mysterious: the notice.** When a bank invokes an exception it must give a written notice that includes an account identifier (a number or code "which need not exceed four digits"), the date of the deposit, the amount being delayed, **the reason the exception was invoked**, and the time period within which the funds will be available (12 CFR § 229.13, n.d.). The notice is due at the time of the deposit, unless the deposit was not made in person to an employee or the facts became known later (12 CFR § 229.13, n.d.).

**Read that list against the alternative.** Without it, an exception would be a bank saying "we are holding this." With it, an exception is a dated document naming a category and a release date, and a category is something you can check against the regulation.

**And the exceptions are not open-ended.** When one applies, the bank may extend the standard periods by "a reasonable period of time", and the regulation then defines that phrase in days: up to **one** business day for the same-bank checks, **five** business days for the checks on the general schedule, and **six** business days for the remaining categories including nonproprietary ATM deposits (12 CFR § 229.13, n.d.). A hold with no end date is not what the rule contemplates.

:::reveal Name three of the six exceptions in Regulation CC. ||| Any three of: new accounts, large deposits, redeposited checks, repeated overdrafts, reasonable cause to doubt collectibility, emergency conditions.

:::reveal What five things must an exception notice contain? ||| An account identifier, the deposit date, the amount delayed, the reason for the exception, and when the funds will be available.

:::reveal What counts as repeated overdrafts for the exception, as read on 28 August 2026? ||| Six or more overdrafts in six months, or two or more of $6,725 or more, and the exception then lasts six months after the last one.

## Vocabulary
- **Exception hold**: a delay beyond the standard schedule, permitted only under one of six named categories and only with written notice.
- **New account**: an account within its first thirty calendar days, during which a $6,725 threshold and a ninth-business-day backstop apply.
- **Aggregate**: the sum of a day's deposits taken together, which is how the large-deposit threshold is measured.
- **Reasonable period**: the regulation's own cap on an exception extension, defined as one, five or six business days depending on the deposit category.

## Sources
12 CFR § 229.13. (n.d.). *Exceptions*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/229.13

12 CFR § 229.12. (n.d.). *Availability schedule*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/229.12`,
    },
    {
      slug: "quiz-availability",
      title: "8 · Knowledge check: when money arrives",
      section: "Section 2 · When money arrives: the availability schedule",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What did Congress legislate when it set funds availability in 1987?",
            options: ["A ceiling on delay", "A minimum interest rate that banks must pay on funds held during a hold period", "A requirement that every deposit be made available on the day it is received", "A federal insurance fund that reimburses customers for deposits held too long"],
            correctIndex: 0,
            explanation: "The Act set maximum holding periods, a duty to disclose the policy, and a civil liability. It did not require generosity.",
            sourceLessonSlug: "why-a-schedule-exists",
          },
          {
            prompt: "Which three-part pattern does the availability statute illustrate, according to this lesson?",
            options: ["A floor of behaviour, a document, a remedy", "A licence requirement, an examination schedule, and a published register of violations", "A voluntary code, an industry ombudsman, and an annual compliance report to Congress", "A tax incentive, a safe harbour, and a private right of action limited to institutions"],
            correctIndex: 0,
            explanation: "That pattern recurs across consumer-money rules and is worth looking for whenever a new one is encountered.",
            sourceLessonSlug: "why-a-schedule-exists",
          },
          {
            prompt: "Under 12 U.S.C. 4002, how soon must cash and wire transfer funds be available?",
            options: ["The business day after deposit", "Within five business days of the deposit being received by the depositary institution", "Immediately upon receipt, with no permitted delay of any kind under any circumstance", "By the end of the calendar month in which the deposit was made to the account"],
            correctIndex: 0,
            explanation: "The statute says such funds shall be available for withdrawal not later than the business day after the business day of deposit or receipt.",
            sourceLessonSlug: "why-a-schedule-exists",
          },
          {
            prompt: "For a check drawn on a local institution, how many business days does the statute allow to intervene before availability?",
            options: ["One", "Four, which is the same period the statute allows for a nonlocal originating institution", "Five, matching the schedule that applies to a nonproprietary automated teller machine", "Nine, which is the backstop the regulation applies to a new account's excess deposits"],
            correctIndex: 0,
            explanation: "The statute says not more than one business day shall intervene for a local originating depository institution, and not more than four for a nonlocal one.",
            sourceLessonSlug: "why-a-schedule-exists",
          },
          {
            prompt: "What cash-withdrawal figure is printed in the text of 12 U.S.C. 4002 itself?",
            options: ["$400", "$550, which is also the amount currently in force under the implementing regulation", "$275, which is the minimum amount of a day's deposits available on the next day", "$6,725, which is the threshold that opens the large-deposit exception"],
            correctIndex: 0,
            explanation: "The statute prints $400 and separately instructs that the Act's dollar amounts be adjusted, so the operative figure lives in the regulation.",
            sourceLessonSlug: "why-a-schedule-exists",
          },
          {
            prompt: "How often does 12 U.S.C. 4006 require the Act's dollar amounts to be adjusted?",
            options: ["Every five years", "Every year, on the first day of July, using the preceding calendar year's inflation", "Every ten years, following the decennial census conducted by the Census Bureau", "Whenever the Bureau of Labor Statistics revises the base year of its price index"],
            correctIndex: 0,
            explanation: "The clause says the amounts shall be adjusted every five years after 31 December 2011.",
            sourceLessonSlug: "why-a-schedule-exists",
          },
          {
            prompt: "Which price measure does the statute name for adjusting its dollar amounts?",
            options: ["The CPI for Urban Wage Earners and Clerical Workers", "The gross domestic product deflator published quarterly by the Bureau of Economic Analysis", "The personal consumption expenditures index used by the Federal Open Market Committee", "The producer price index for finance and insurance services published each month"],
            correctIndex: 0,
            explanation: "The statute names that index, as published by the Bureau of Labor Statistics, and requires rounding to the nearest multiple of twenty-five dollars.",
            sourceLessonSlug: "why-a-schedule-exists",
          },
          {
            prompt: "To what multiple does the statute round its adjusted dollar amounts?",
            options: ["$25", "$100, which is why the earlier minimum availability amount was commonly called the hundred-dollar rule", "$50, matching the increment by which the cash-withdrawal amount rose in 2025", "$5, so that the adjusted figures track the index as closely as arithmetic allows"],
            correctIndex: 0,
            explanation: "The adjustment clause requires rounding to the nearest multiple of twenty-five dollars.",
            sourceLessonSlug: "why-a-schedule-exists",
          },
          {
            prompt: "As read on 28 August 2026, what was the minimum amount of a day's check deposits that must be available on the next business day?",
            options: ["$275", "$225, the figure that applied before the adjustment took effect in the middle of 2025", "$550, which is the amount that must be available for cash withdrawal by five in the afternoon", "$400, the figure printed in the text of the Expedited Funds Availability Act itself"],
            correctIndex: 0,
            explanation: "The amount rose from $225 to $275 effective 1 July 2025, and the course dates the figure because it will move again.",
            sourceLessonSlug: "why-a-schedule-exists",
          },
          {
            prompt: "As read on 28 August 2026, what was the large-deposit and new-account threshold in Regulation CC?",
            options: ["$6,725", "$5,525, the figure that applied before the five-year inflation adjustment took effect", "$10,000, matching the currency-transaction reporting threshold used elsewhere in banking", "$1,000, above which any deposit may be held for nine business days without notice"],
            correctIndex: 0,
            explanation: "The threshold governs both the large-deposit exception and the new-account exception, and it was adjusted upward effective 1 July 2025.",
            sourceLessonSlug: "why-a-schedule-exists",
          },
          {
            prompt: "Why does the nonlocal check category no longer catch anything?",
            options: ["There is one check-processing region", "Because the statute was amended in 2010 to delete every reference to a nonlocal check", "Because banks agreed voluntarily to treat all checks as local from February of that year", "Because electronic presentment made the geographic location of a paying bank unknowable"],
            correctIndex: 0,
            explanation: "The Reserve Banks cut their paper check-processing offices from forty-five in 2003 to a single office in 2010, so every check is local to every other.",
            sourceLessonSlug: "why-a-schedule-exists",
          },
          {
            prompt: "How many paper check-processing offices did the Reserve Banks operate in 2003, before the consolidation?",
            options: ["Forty-five", "Twelve, one for each Federal Reserve district as established by the Federal Reserve Act", "Four, corresponding to the four regional payment hubs then in operation nationally", "One hundred and eight, counting every branch that handled paper items at the time"],
            correctIndex: 0,
            explanation: "The Federal Reserve's own description records the reduction from forty-five offices in 2003 to a single office in 2010.",
            sourceLessonSlug: "why-a-schedule-exists",
          },
          {
            prompt: "What broader lesson does this lesson draw from the local-check story?",
            options: ["Plumbing can transform an unchanged rule", "That a regulation is void once the conditions it assumed have ceased to exist in practice", "That statutory text should always be read in preference to the regulation implementing it", "That agency guidance is more reliable than statute when the underlying facts change"],
            correctIndex: 0,
            explanation: "A rule can be textually unchanged and practically transformed by a change in the infrastructure beneath it, which only reading both reveals.",
            sourceLessonSlug: "why-a-schedule-exists",
          },
          {
            prompt: "Cash is deposited in person to a bank employee. When must it be available?",
            options: ["The business day after the banking day", "The second business day after the banking day, the same as a deposit made at a machine", "The fifth business day, because cash must be counted and verified before it is credited", "Immediately, because currency requires no collection from any other institution"],
            correctIndex: 0,
            explanation: "Cash handed to an employee is next-business-day. Cash deposited any other way gets the second business day.",
            sourceLessonSlug: "next-day-and-second-day",
          },
          {
            prompt: "Cash is deposited at a machine rather than to an employee. When must it be available?",
            options: ["The second business day", "The business day after the banking day, exactly as for a deposit made in person", "The fifth business day, matching the schedule for a nonproprietary machine deposit", "The ninth business day, matching the backstop applied to new-account deposits"],
            correctIndex: 0,
            explanation: "The paragraph splits cash deposits on whether the deposit was made in person to an employee of the depositary bank.",
            sourceLessonSlug: "next-day-and-second-day",
          },
          {
            prompt: "What two things must a bank have received before an electronic payment is treated as received?",
            options: ["Collected funds and crediting information", "A signed authorization from the customer and a confirmation number from the originating bank", "A settlement report from the Federal Reserve and a matching entry in the customer's ledger", "Notice from the payee and an acknowledgement from the receiving bank's compliance desk"],
            correctIndex: 0,
            explanation: "Payment in actually and finally collected funds, and information on the account and amount to be credited. Both halves are required.",
            sourceLessonSlug: "next-day-and-second-day",
          },
          {
            prompt: "How does Regulation CC define an electronic payment?",
            options: ["A wire transfer or an ACH credit transfer", "Any transfer initiated through an electronic terminal, telephone or computer by a consumer", "Any payment that does not involve the physical movement of a paper instrument between banks", "Any transfer that settles on the same calendar day it is initiated by the sending party"],
            correctIndex: 0,
            explanation: "The definition is narrow, which is why a card refund is not an electronic payment for this rule even though it is electronic in ordinary speech.",
            sourceLessonSlug: "next-day-and-second-day",
          },
          {
            prompt: "Is a payroll direct deposit covered by the next-day rule for electronic payments?",
            options: ["Yes, it is an ACH credit", "No, because payroll files are transmitted in batches rather than as individual payments", "No, because the rule reaches only wire transfers sent between two banks directly", "Only if the employer and the employee bank at the same institution"],
            correctIndex: 0,
            explanation: "An automated clearing house credit transfer is one of the two things the definition names, so a direct deposit falls inside it.",
            sourceLessonSlug: "next-day-and-second-day",
          },
          {
            prompt: "Which of these is NOT one of the next-day check categories in 12 CFR 229.10(c)?",
            options: ["A personal check from another customer", "A check drawn on the Treasury of the United States and deposited by its payee", "A cashier's, certified or teller's check meeting the paragraph's conditions", "A check drawn on the same bank at which the deposit is being made"],
            correctIndex: 0,
            explanation: "An ordinary personal check runs on the general schedule. The listed categories are government, bank-issued and same-bank items.",
            sourceLessonSlug: "next-day-and-second-day",
          },
          {
            prompt: "Which government instrument appears by name in the next-day check list?",
            options: ["A United States Postal Service money order", "A state lottery prize warrant issued by an authorised agency of any of the fifty states", "A federal income tax refund transmitted electronically by the Internal Revenue Service", "A municipal bond coupon presented for payment at the issuing authority's bank"],
            correctIndex: 0,
            explanation: "Postal Service money orders sit alongside Treasury checks, Federal Reserve and Federal Home Loan Bank checks, and state and local government checks.",
            sourceLessonSlug: "next-day-and-second-day",
          },
          {
            prompt: "What does the seventh next-day category in 12 CFR 229.10(c)(1) actually require?",
            options: ["The lesser of $275 or the day's aggregate", "That the first check deposited on any banking day be made available in full the next day", "That any deposit under $275 be exempt from every exception in the regulation", "That $275 be available in cash by five in the afternoon on the day of deposit"],
            correctIndex: 0,
            explanation: "It is a floor under ordinary check deposits: whatever else is held, that much of a day's deposits is usable on the next business day.",
            sourceLessonSlug: "next-day-and-second-day",
          },
          {
            prompt: "When must funds from a local check be available under 12 CFR 229.12?",
            options: ["The second business day after the banking day", "The business day after the banking day, the same schedule as a Treasury check", "The fifth business day after the banking day, unless the depositor requests otherwise", "The ninth business day after the banking day, which is the general schedule's outer limit"],
            correctIndex: 0,
            explanation: "The general schedule is second business day, with next-day availability reserved for the categories in 229.10.",
            sourceLessonSlug: "next-day-and-second-day",
          },
          {
            prompt: "When must funds deposited at a nonproprietary ATM be available?",
            options: ["The fifth business day", "The second business day, because all machine deposits follow the general schedule", "The next business day, because the machine issues an immediate receipt for the deposit", "The ninth business day, because the bank does not control the machine's collection"],
            correctIndex: 0,
            explanation: "A nonproprietary machine is one the depositary bank neither owns nor operates, and deposits there carry a fifth-business-day schedule.",
            sourceLessonSlug: "next-day-and-second-day",
          },
          {
            prompt: "By how much may a bank extend availability for withdrawal by cash or similar means?",
            options: ["One business day", "Three business days, provided the customer is notified in writing before the deposit", "Five business days, matching the schedule for deposits at a nonproprietary machine", "It may not extend that period at all under any provision of the regulation"],
            correctIndex: 0,
            explanation: "The extension is one business day, and it is subject to a floor that must still be available for cash by five in the afternoon.",
            sourceLessonSlug: "next-day-and-second-day",
          },
          {
            prompt: "When a bank uses the one-day cash extension, what must still be available by 5:00 p.m.?",
            options: ["$550 for cash withdrawal", "The entire amount of the deposit, because the extension applies only to check payments", "$275, the same figure as the minimum next-day availability amount for check deposits", "Nothing, because the extension suspends the cash-availability requirement entirely"],
            correctIndex: 0,
            explanation: "As read on 28 August 2026 the cash-withdrawal amount was $550, up from $450 before 1 July 2025.",
            sourceLessonSlug: "next-day-and-second-day",
          },
          {
            prompt: "When must a bank begin accruing interest on funds in an interest-bearing account?",
            options: ["When it receives credit for the funds", "When the funds become available to the customer for withdrawal under the schedule", "On the first day of the statement cycle following the date of the deposit", "On the second business day after the banking day on which the deposit was made"],
            correctIndex: 0,
            explanation: "Interest accrual and availability are different clocks, so money can be earning before it is spendable.",
            sourceLessonSlug: "next-day-and-second-day",
          },
          {
            prompt: "What does the difference between interest accrual and availability show?",
            options: ["They are different questions", "That a bank may not charge a fee while funds are still earning interest for the customer", "That the availability schedule was written to match the interest rules exactly", "That interest is paid only on funds the customer has already been permitted to withdraw"],
            correctIndex: 0,
            explanation: "When money starts earning and when it becomes spendable are governed by separate provisions with separate answers.",
            sourceLessonSlug: "next-day-and-second-day",
          },
          {
            prompt: "How many named exceptions does Regulation CC provide to the availability schedule?",
            options: ["Six", "Three, covering new accounts, large deposits and emergency conditions only", "Nine, one for each business day the regulation permits a hold to be extended", "Twelve, one for each Federal Reserve district that may set its own hold policy"],
            correctIndex: 0,
            explanation: "New accounts, large deposits, redeposited checks, repeated overdrafts, reasonable cause to doubt collectibility, and emergency conditions.",
            sourceLessonSlug: "six-exceptions-and-a-notice",
          },
          {
            prompt: "How long is an account a new account for the exception?",
            options: ["Thirty calendar days", "Ninety calendar days from the date the first deposit is credited to the account", "Six months, matching the lookback used for the repeated-overdraft exception", "One year, after which the standard availability schedule applies without exception"],
            correctIndex: 0,
            explanation: "An account is considered new during the first thirty calendar days after it is established, which is also when people move the most money.",
            sourceLessonSlug: "six-exceptions-and-a-notice",
          },
          {
            prompt: "Under the new-account exception, by when must deposits above the threshold be available?",
            options: ["The ninth business day", "The fifth business day, matching the nonproprietary machine schedule in the general rule", "The thirtieth calendar day, when the account stops being treated as a new account", "The second business day, because the general schedule continues to apply throughout"],
            correctIndex: 0,
            explanation: "The excess above $6,725 must be available not later than the ninth business day following the banking day of deposit.",
            sourceLessonSlug: "six-exceptions-and-a-notice",
          },
          {
            prompt: "How is the large-deposit threshold measured?",
            options: ["In the aggregate for one banking day", "Per individual check, so several smaller checks never reach the threshold together", "Against the average daily balance of the account over the preceding statement cycle", "Against the total of all deposits made during the current calendar month"],
            correctIndex: 0,
            explanation: "The exception applies to the aggregate amount of deposits by one or more checks in excess of the threshold on any one banking day.",
            sourceLessonSlug: "six-exceptions-and-a-notice",
          },
          {
            prompt: "What does the redeposited-check exception cover?",
            options: ["A check returned unpaid and deposited again", "A check deposited twice in error by the bank's own item-processing department", "A check drawn on an account at a bank that has since suspended payments", "A check deposited into two different accounts held by the same customer"],
            correctIndex: 0,
            explanation: "The exception has stated carve-outs, including a check returned for a missing indorsement and a post-dated check in certain circumstances.",
            sourceLessonSlug: "six-exceptions-and-a-notice",
          },
          {
            prompt: "How many overdrafts in six months open the repeated-overdraft exception on the plain count?",
            options: ["Six or more", "Two or more, whatever the amount of each individual overdraft may have been", "Ten or more, provided each of them was returned unpaid rather than honoured", "Three or more within any single statement cycle rather than across six months"],
            correctIndex: 0,
            explanation: "Six or more overdrafts in six months, or two or more of $6,725 or more, and the exception then runs for six months after the last one.",
            sourceLessonSlug: "six-exceptions-and-a-notice",
          },
          {
            prompt: "How long does the repeated-overdraft exception last once it is available?",
            options: ["Six months after the last overdraft", "Thirty calendar days from the date the bank first invokes it against the account", "Until the customer maintains a positive balance for two consecutive statement cycles", "Permanently, until the account is closed and reopened at a different institution"],
            correctIndex: 0,
            explanation: "The regulation ties the period to the last qualifying overdraft rather than to when the bank chose to act.",
            sourceLessonSlug: "six-exceptions-and-a-notice",
          },
          {
            prompt: "Why does this lesson tell you to hold the repeated-overdraft exception alongside Section 3?",
            options: ["Posting order produces the count", "Because the exception is the only one that requires a written notice to the customer", "Because overdraft fees are set by the same regulation that sets the availability schedule", "Because a bank must reverse the exception whenever an overdraft fee is refunded"],
            correctIndex: 0,
            explanation: "The order a bank charges a day's items in changes how many overdrafts a fixed set of transactions produces, and that count is what opens the exception.",
            sourceLessonSlug: "six-exceptions-and-a-notice",
          },
          {
            prompt: "What is the standard for the collectibility exception?",
            options: ["Reasonable cause to believe the check is uncollectible", "Actual knowledge, proved by a written communication from the paying institution", "A prior return of the same drawer's check within the preceding twelve months", "Any doubt at all, since the judgement is committed entirely to the bank's discretion"],
            correctIndex: 0,
            explanation: "It is the judgement-shaped exception, which is precisely why the notice requirement carries so much weight.",
            sourceLessonSlug: "six-exceptions-and-a-notice",
          },
          {
            prompt: "Which of these is named in the emergency-conditions exception?",
            options: ["Suspension of payments by another bank", "A sudden increase in the volume of deposits received at a single branch office", "The resignation of the officer responsible for the bank's item-processing function", "A change in the bank's core processing vendor scheduled with advance notice"],
            correctIndex: 0,
            explanation: "The exception names an interruption of communications or equipment, a suspension of payments by another bank, a war, and emergency conditions beyond the bank's control.",
            sourceLessonSlug: "six-exceptions-and-a-notice",
          },
          {
            prompt: "How long may the account identifier in an exception notice be?",
            options: ["It need not exceed four digits", "It must be the full account number so the customer can match it to a statement", "It must be at least eight characters to distinguish accounts at large institutions", "It must be the routing number of the depositary bank followed by a check digit"],
            correctIndex: 0,
            explanation: "The regulation says a number or code which need not exceed four digits, identifying the customer's account.",
            sourceLessonSlug: "six-exceptions-and-a-notice",
          },
          {
            prompt: "Which of these must an exception notice state?",
            options: ["The reason the exception was invoked", "The name of the officer who authorised the hold and their supervisor's approval", "The identity of the paying bank and the date it is expected to settle the item", "The customer's average balance during the preceding six statement cycles"],
            correctIndex: 0,
            explanation: "The notice must give an account identifier, the deposit date, the amount delayed, the reason, and when the funds will be available.",
            sourceLessonSlug: "six-exceptions-and-a-notice",
          },
          {
            prompt: "When is an exception notice normally due?",
            options: ["At the time of the deposit", "Within thirty calendar days of the end of the statement cycle containing the deposit", "Only if the customer asks in writing why the funds have not become available", "On the business day the funds finally become available to the customer"],
            correctIndex: 0,
            explanation: "It is due at the time of deposit unless the deposit was not made in person to an employee, or the facts became known to the bank later.",
            sourceLessonSlug: "six-exceptions-and-a-notice",
          },
          {
            prompt: "What does the notice requirement turn an exception into?",
            options: ["A dated document naming a category", "A negotiation in which the customer may propose an earlier release date to the bank", "An automatic waiver of any fee charged while the funds were unavailable", "A referral to the bank's regulator for review before the hold may take effect"],
            correctIndex: 0,
            explanation: "Without the notice an exception is a bank saying it is holding money. With it, the category is something a customer can check against the regulation.",
            sourceLessonSlug: "six-exceptions-and-a-notice",
          },
          {
            prompt: "The regulation caps an exception extension at a reasonable period. How is that phrase defined for checks on the general schedule?",
            options: ["Five business days", "Ten business days, which is twice the normal schedule for a local check deposit", "Thirty calendar days, matching the length of the new-account exception window", "It is not defined, so the bank determines what is reasonable case by case"],
            correctIndex: 0,
            explanation: "The regulation defines the phrase in days: up to one business day for same-bank checks, five for the general-schedule checks, and six for the remaining categories.",
            sourceLessonSlug: "six-exceptions-and-a-notice",
          },
          {
            prompt: "What is the reasonable-period extension for the same-bank checks described in 229.10(c)(1)(vi)?",
            options: ["One business day", "Five business days, the same as for checks running on the general availability schedule", "Six business days, the same as for deposits made at a nonproprietary machine", "Nine business days, matching the new-account backstop for excess deposits"],
            correctIndex: 0,
            explanation: "The regulation grades the extension by deposit category rather than allowing one open-ended period for all of them.",
            sourceLessonSlug: "six-exceptions-and-a-notice",
          },
          {
            prompt: "What does the definition of a reasonable period establish about holds generally?",
            options: ["A hold has an end date", "That a bank may extend a hold indefinitely once an exception has been invoked", "That the customer may set the release date by giving the bank written instructions", "That the extension runs from the date of the notice rather than the date of deposit"],
            correctIndex: 0,
            explanation: "A hold with no end date is not what the rule contemplates, because the extension periods are themselves capped in days.",
            sourceLessonSlug: "six-exceptions-and-a-notice",
          },
          {
            prompt: "Which of these deposits would run on the general second-business-day schedule rather than a next-day rule?",
            options: ["An ordinary personal check", "A cashier's check meeting the conditions in the next-day availability paragraph", "A check drawn on a Federal Home Loan Bank and deposited by its named payee", "Cash handed across the counter to an employee of the depositary bank"],
            correctIndex: 0,
            explanation: "The next-day list covers government, bank-issued and same-bank items, plus the minimum availability amount. Everything else runs on the general schedule.",
            sourceLessonSlug: "next-day-and-second-day",
          },
          {
            prompt: "What decides which availability bucket a deposit lands in?",
            options: ["What the item is", "How urgently the depositor tells the bank the funds are needed for a payment", "How long the customer has held the account, measured in whole statement cycles", "Whether the depositor has other accounts at the same institution"],
            correctIndex: 0,
            explanation: "The schedule sorts by instrument type, deposit method and location, never by need.",
            sourceLessonSlug: "next-day-and-second-day",
          },
          {
            prompt: "Why does the lesson tell you to read the next-day paragraph rather than a summary of it?",
            options: ["Several categories carry conditions", "Because the paragraph is amended more often than any other part of the regulation", "Because summaries of it are protected by copyright and cannot be republished", "Because the categories are illustrative rather than an exhaustive list"],
            correctIndex: 0,
            explanation: "Several of the listed check categories have conditions attached, including special deposit-slip requirements, which a summary tends to drop.",
            sourceLessonSlug: "next-day-and-second-day",
          },
          {
            prompt: "A customer deposits four checks on one banking day totalling more than the large-deposit threshold. Which exception may apply?",
            options: ["Large deposits", "Redeposited checks, because multiple checks presented together are treated as re-presented", "Emergency conditions, because a high-volume deposit strains the bank's processing", "New accounts, regardless of how long the account has been open"],
            correctIndex: 0,
            explanation: "The threshold is measured on the aggregate amount deposited by one or more checks on any one banking day.",
            sourceLessonSlug: "six-exceptions-and-a-notice",
          },
          {
            prompt: "What was the cash-withdrawal amount before the adjustment that took effect on 1 July 2025?",
            options: ["$450", "$400, the figure that appears in the text of the statute rather than the regulation", "$225, which was the previous minimum next-day availability amount for check deposits", "$5,525, which was the previous large-deposit and new-account threshold"],
            correctIndex: 0,
            explanation: "The cash-withdrawal amount rose from $450 to $550, while the minimum availability amount rose from $225 to $275.",
            sourceLessonSlug: "why-a-schedule-exists",
          },
          {
            prompt: "Why does this course teach where the availability figures live rather than asking you to memorise them?",
            options: ["They move on a fixed schedule", "Because the figures differ from one Federal Reserve district to another across the country", "Because each bank may set its own thresholds within a range the regulation allows", "Because the amounts are confidential and published only to supervised institutions"],
            correctIndex: 0,
            explanation: "The statute requires a five-year adjustment, so every one of the figures will change again on a known cycle.",
            sourceLessonSlug: "why-a-schedule-exists",
          },
          {
            prompt: "Which body of rules did Congress replace with the availability schedule?",
            options: ["Each bank's own judgement", "The uniform state statutes that had previously fixed a national maximum hold period", "The Federal Reserve's operating circulars, which had set availability district by district", "A voluntary industry code administered by a national clearing house association"],
            correctIndex: 0,
            explanation: "Before the Act there was no federal answer, and a bank held a deposit for as long as it judged prudent.",
            sourceLessonSlug: "why-a-schedule-exists",
          },
          {
            prompt: "Which section of Regulation CC contains the six exceptions?",
            options: ["Section 229.13", "Section 229.10, which lists the deposits entitled to next-business-day availability", "Section 229.19, which decides when funds are considered deposited at all", "Section 229.16, which requires the specific availability policy disclosure"],
            correctIndex: 0,
            explanation: "The exceptions and their notice requirements are collected at 12 CFR 229.13.",
            sourceLessonSlug: "six-exceptions-and-a-notice",
          },
          {
            prompt: "Which is the ONLY exception in Regulation CC that turns on the bank's own assessment of an individual item?",
            options: ["Reasonable cause to doubt collectibility", "Large deposits, because the bank chooses whether an aggregate amount is worth holding", "New accounts, because the bank decides when an account stops being newly opened", "Emergency conditions, because the bank judges whether an interruption is serious"],
            correctIndex: 0,
            explanation: "The other five turn on facts that can be checked from records: the account's age, the amount, whether the check was returned before, the overdraft count, or an external event.",
            sourceLessonSlug: "six-exceptions-and-a-notice",
          },
          {
            prompt: "Under 12 CFR 229.10(b), when must funds received by electronic payment be available?",
            options: ["The business day after the banking day of receipt", "The second business day after the banking day the payment instruction was originated", "The same banking day, because an electronic payment settles in finally collected funds", "The fifth business day, unless the payment came from an account at the same bank"],
            correctIndex: 0,
            explanation: "The clock runs from the banking day on which the bank received the electronic payment, which itself requires both funds and crediting information.",
            sourceLessonSlug: "next-day-and-second-day",
          },
          {
            prompt: "What is a proprietary machine, as the availability schedule uses the idea?",
            options: ["One the depositary bank owns or operates", "One located inside a bank branch, whoever owns and services the machine itself", "One that accepts deposits in envelopes rather than by scanning items directly", "One connected to a single network rather than to several interbank networks"],
            correctIndex: 0,
            explanation: "The nonproprietary category, carrying the fifth-business-day schedule, is the machine the depositary bank neither owns nor operates and which is not on or near its premises.",
            sourceLessonSlug: "next-day-and-second-day",
          },
          {
            prompt: "Which of these was the state of the law before the Expedited Funds Availability Act?",
            options: ["No federal answer to when a deposit could be spent", "A uniform two-business-day schedule applied by every federally insured institution", "A rule set district by district in Federal Reserve operating circulars", "A requirement that deposits be available the moment the bank received them"],
            correctIndex: 0,
            explanation: "A bank held a deposit for as long as it judged prudent, and the judgement was entirely its own.",
            sourceLessonSlug: "why-a-schedule-exists",
          },
          {
            prompt: "Where do the currently operative funds-availability dollar amounts appear?",
            options: ["In Regulation CC", "In the text of the Expedited Funds Availability Act, which is amended every five years", "In an annual notice each bank publishes describing its own availability thresholds", "In the operating circular of the Federal Reserve Bank serving the depositary bank"],
            correctIndex: 0,
            explanation: "The statute prints older figures and instructs that the amounts be adjusted; the adjusted amounts sit in the implementing regulation.",
            sourceLessonSlug: "why-a-schedule-exists",
          },
          {
            prompt: "Which of these deposits gets next-business-day availability under 12 CFR 229.10(c)?",
            options: ["A Federal Reserve Bank check", "A check drawn on a commercial bank in the same city as the depositary bank", "A money order issued by a nonbank money transmitter licensed in the state", "A check drawn on a foreign bank and payable through a domestic correspondent"],
            correctIndex: 0,
            explanation: "Federal Reserve Bank and Federal Home Loan Bank checks are named alongside Treasury checks, Postal Service money orders, and state and local government checks.",
            sourceLessonSlug: "next-day-and-second-day",
          },
          {
            prompt: "What does the phrase \"on-us check\" describe in the next-day availability list?",
            options: ["A check drawn on the same bank", "A check the bank has already presented once and had returned unpaid by the drawee", "A check the depositary bank has agreed in advance to guarantee for the customer", "A check drawn by the bank itself in favour of one of its own customers"],
            correctIndex: 0,
            explanation: "A check drawn on the same bank at which the deposit is made needs no collection from another institution, which is why it sits in the next-day list.",
            sourceLessonSlug: "next-day-and-second-day",
          },
          {
            prompt: "Why is a card refund NOT covered by the next-day rule for electronic payments?",
            options: ["It is neither a wire nor an ACH credit", "Because refunds are treated as reversals of an earlier charge rather than as deposits", "Because the availability rules exclude any transaction initiated by a merchant", "Because a refund is credited by the card network rather than by the depositary bank"],
            correctIndex: 0,
            explanation: "Regulation CC defines an electronic payment narrowly, as a wire transfer or an ACH credit transfer, so the phrase does not reach everything that is electronic.",
            sourceLessonSlug: "next-day-and-second-day",
          },
          {
            prompt: "What must a bank do before the excess above the new-account threshold becomes available?",
            options: ["Wait no longer than the ninth business day", "Obtain the customer's written acknowledgement that the funds are being held", "Verify the deposit with the paying institution and record the response in writing", "Apply the large-deposit exception separately to each check in the deposit"],
            correctIndex: 0,
            explanation: "During the first thirty calendar days the ordinary schedule applies to the first $6,725, and the excess must be available not later than the ninth business day.",
            sourceLessonSlug: "six-exceptions-and-a-notice",
          },
          {
            prompt: "Which two exceptions share the same dollar threshold?",
            options: ["New accounts and large deposits", "Redeposited checks and reasonable cause to doubt collectibility, at the same figure", "Emergency conditions and repeated overdrafts, both measured on a single banking day", "Large deposits and emergency conditions, both measured against the account's balance"],
            correctIndex: 0,
            explanation: "As read on 28 August 2026 both used $6,725, which is also one of the two counts in the repeated-overdraft test.",
            sourceLessonSlug: "six-exceptions-and-a-notice",
          },
          {
            prompt: "What does the exception notice have to say about timing?",
            options: ["When the funds will be available", "How many business days the bank has spent attempting to collect the item so far", "Whether the customer may appeal the hold to the bank's primary federal supervisor", "The cut-off hour that applied on the banking day the deposit was received"],
            correctIndex: 0,
            explanation: "The notice must state the time period within which the funds will be available for withdrawal, alongside the reason and the amount delayed.",
            sourceLessonSlug: "six-exceptions-and-a-notice",
          },
          {
            prompt: "What is the reasonable-period extension for deposits at a nonproprietary machine?",
            options: ["Six business days", "One business day, the same as for a check drawn on the depositary bank itself", "Five business days, the same as for checks on the general availability schedule", "There is no defined extension, so the bank may set a period it considers reasonable"],
            correctIndex: 0,
            explanation: "The regulation defines the extension in days by deposit category, and the nonproprietary machine category carries the longest of the three.",
            sourceLessonSlug: "six-exceptions-and-a-notice",
          },
          {
            prompt: "Which fact about the availability schedule makes the exception notice worth reading closely?",
            options: ["It names a category you can check", "It sets the fee the bank may charge for holding the funds beyond the standard period", "It transfers the risk of the item being returned unpaid from the bank to the customer", "It waives the customer's right to bring an action for a violation of the schedule"],
            correctIndex: 0,
            explanation: "The reason stated on the notice is one of six named categories, and a named category can be compared against the regulation's own text.",
            sourceLessonSlug: "six-exceptions-and-a-notice",
          },
          {
            prompt: "How does the course describe the relationship between the availability schedule and a bank's own policy?",
            options: ["The schedule is a ceiling on delay", "The schedule is a floor, so a bank must hold funds at least that long before releasing", "The schedule applies only where the bank has not published a policy of its own", "The schedule and the bank's policy apply alternately, whichever is longer"],
            correctIndex: 0,
            explanation: "Congress legislated a maximum delay rather than a required one, so a faster policy is permitted and a slower one is not.",
            sourceLessonSlug: "why-a-schedule-exists",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3 — When money leaves: order, not just amount
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "any-order-convenient",
      title: "9 · Nobody promised you an order",
      section: "Section 3 · When money leaves: order, not just amount",
      body: `Section 2 was a federal schedule with named exceptions, written notices and a civil remedy. This section is one sentence of state law, and it points the other way.

**The sentence.** Article 4 of the Uniform Commercial Code governs bank deposits and collections. Its section on the order of items says:

> "Subject to subsection (a), items may be accepted, paid, certified, or charged to the indicated account of its customer in any order." (U.C.C. § 4-303, n.d.)

**In any order.** Not lowest first, not in the sequence you made them, not in the order they arrived. Subsection (a) is about something else entirely: it fixes the moment after which a stop-payment order, a notice, legal process or a setoff comes too late to change the bank's right or duty to pay an item (U.C.C. § 4-303, n.d.). Nothing in either subsection promises you a sequence.

**One point of method before the arithmetic.** The Uniform Commercial Code is not federal law. It is a model code, enacted state by state, so the operative rule for you is your own state's enactment of Article 4. The section number is usually the same and the words usually are too, but the citation that governs your account is a state statute. **Finding it is the exercise**, and it is the same move this catalog teaches everywhere: read the document that governs the decision rather than a summary of what it usually says.

**Now the arithmetic, which is the whole point of this lesson.** Take an account holding $100 at the start of a day, and four payments that all reach the bank the same day: $80, $15, $12 and $8. Together they come to $115, so the account is going to end the day $15 short whatever happens. That much is fixed. What is not fixed is how many individual items are short when they are charged.

**Smallest first.** Charge $8 and the balance is $92. Charge $12 and it is $80. Charge $15 and it is $65. Charge $80 and the balance goes to negative $15. **One item is charged against an insufficient balance.**

**Largest first.** Charge $80 and the balance is $20. Charge $15 and it is $5. Charge $12 and the balance goes to negative $7. Charge $8 and it goes to negative $15. **Three items are charged against an insufficient balance.**

**Same day. Same four payments. Same closing balance. One shortfall or three.** Nothing about your conduct differs between the two columns. What differs is a sequencing decision made inside a computer, and the code says the bank may make it in any order.

**Two things this lesson is not doing.** It is not accusing any bank of anything: the arithmetic shows what the permission makes possible, not what any institution does, and where the count matters, what matters is your own statement rather than a general claim. And it is not telling you what to do about it. **This course gives no financial advice**, so it will not tell you to pay in a particular sequence or to hold a particular buffer.

**What it does give you is a countable fact.** The number of items charged against an insufficient balance is a number, it appears on your statement, and Section 6 shows you the rule that requires it to be totalled there. A number you can read is worth more than a suspicion you cannot.

**And carry this back to Section 2.** The repeated-overdraft exception counts occurrences. Order changes the count. Two rules that live in different bodies of law, written decades apart, meet on your account.

:::reveal What does U.C.C. 4-303(b) permit a bank to do with a day's items? ||| Accept, pay, certify or charge them to the customer's account in any order.

:::reveal In the worked example, how many items are charged against an insufficient balance smallest first, and how many largest first? ||| One smallest first, and three largest first, from the same four payments against the same opening balance.

:::reveal Why is the operative posting-order rule a state statute rather than a federal one? ||| Because the Uniform Commercial Code is a model code enacted state by state, so your state's enactment of Article 4 is what governs your account.

## Vocabulary
- **Posting order**: the sequence in which a bank charges a day's items against an account, which the commercial code leaves to the bank.
- **Item**: in Article 4, an instrument or a promise or order to pay money handled by a bank for collection or payment.
- **Uniform Commercial Code**: a model code adopted state by state, so its sections are uniform in wording and state law in force.
- **Insufficient balance**: the condition in which an item is charged against an account that does not hold enough to cover it, the count of which depends on order.

## Sources
U.C.C. § 4-303. (n.d.). *When items subject to notice, stop-payment order, legal process, or setoff; order in which items may be charged or certified*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/ucc/4/4-303

12 CFR § 1030.11. (n.d.). *Additional disclosure requirements for overdraft services*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/1030.11`,
    },
    {
      slug: "authorized-posted-settled",
      title: "10 · Authorised, posted, settled: three different moments",
      section: "Section 3 · When money leaves: order, not just amount",
      body: `A card is tapped and an app says the money is gone. Often it is not gone. Something else has happened, and the difference between the two is a large part of why balances surprise people.

**Start from what the availability rules mean by available.** Regulation CC defines it as:

> "available for all uses generally permitted to the customer for actually and finally collected funds under the bank's account agreement or policies, such as for payment of checks drawn on the account, certification of checks drawn on the account, electronic payments, withdrawals by cash, and transfers between accounts." (12 CFR § 229.2, n.d.)

**Read the phrase "under the bank's account agreement or policies".** Even the federal definition hands part of the answer back to a document your bank wrote. That is a signpost: the words **available balance** and **ledger balance** are defined in your own account agreement, they are not the same as each other, and the app on your phone shows one of them.

**Three moments, in the order they usually occur.** An **authorisation** is a check that funds exist and a reservation against them; it is not the transfer. **Posting** is the bank charging the item to your account, which is the moment the order in the last lesson decides. **Settlement** is the money actually moving between the institutions. A payment can be authorised on Friday, posted on Monday and settled later still, and every one of those is a different date on a different record.

**This is not a defect and it is not a secret.** It is how a system built to work when the two parties bank in different places has to work. But it means a balance is an answer to a question, and the question matters: money you may spend right now, money charged so far, or money finally moved.

**A right that exists precisely because arrival is invisible.** When someone sends preauthorized transfers **to** your account at least once every sixty days, Regulation E requires your institution to do one of three things: give oral or written notice within two business days after the transfer occurs, give notice within two business days of the scheduled date that it did **not** occur, or provide a readily available telephone line you may call to find out, with the number disclosed on the initial account disclosures and on each periodic statement (12 CFR § 1005.10, n.d.). The institution need not do it if the payor gives you positive notice itself (12 CFR § 1005.10, n.d.).

**Notice which one your bank chose, because it is a choice.** If your bank picked the telephone line, then nobody is going to tell you your pay did not arrive. You have a number to call, and knowing that is the whole benefit of reading the rule.

**Put the three moments together with Section 2 and you have the real picture.** Money coming in has an availability date set by a federal schedule. Money going out has an authorisation date, a posting date and a settlement date, only one of which the commercial code speaks to. The gap this course is about is the distance between the availability date on one side and the posting date on the other, and both are knowable in advance.

:::reveal What three moments does this lesson distinguish for a payment leaving an account? ||| Authorisation, posting, and settlement.

:::reveal Which of Regulation CC's definitions hands part of the meaning of "available" back to the bank's own document? ||| The definition of available for withdrawal, which refers to uses permitted under the bank's account agreement or policies.

:::reveal What three options does Regulation E give an institution for telling you about a recurring credit to your account? ||| Positive notice within two business days, negative notice within two business days of the scheduled date, or a readily available telephone line disclosed on the statements.

## Vocabulary
- **Authorisation**: a check that funds exist and a reservation against them, which is not itself a transfer of money.
- **Available balance**: the figure the bank treats as spendable now, defined in the account agreement and usually lower than the ledger balance.
- **Ledger balance**: the balance of items actually charged and credited so far, without regard to reservations.
- **Settlement**: the moment funds actually move between institutions, which may be later than posting.
- **Preauthorized transfer**: a transfer to or from an account arranged in advance to recur, which carries its own notice rules.

## Sources
12 CFR § 229.2. (n.d.). *Definitions*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/229.2

12 CFR § 1005.10. (n.d.). *Preauthorized transfers*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/1005.10`,
    },
    {
      slug: "the-stop-payment-clock",
      title: "11 · The transfer you scheduled, and the three days you have to stop it",
      section: "Section 3 · When money leaves: order, not just amount",
      body: `A recurring payment is a payment you agreed to once and will make many times. The rules about it are almost entirely rules about **when**.

**First, how one is created.** Regulation E is short and unambiguous:

> "Preauthorized electronic fund transfers from a consumer's account may be authorized only by a writing signed or similarly authenticated by the consumer." (12 CFR § 1005.10, n.d.)

A writing, signed or similarly authenticated. Not a phone call, not an implication from a prior course of dealing.

**Second, and this is the timing right worth memorising, how one is stopped.** A consumer may stop a preauthorized transfer by notifying the institution orally or in writing **at least three business days before the scheduled date** of the transfer (12 CFR § 1005.10, n.d.). The institution may require written confirmation within **fourteen days** of an oral notice, and if it does, it must tell you so and say where to send it (12 CFR § 1005.10, n.d.).

**Three business days, counted the way Section 1 taught you to count.** This is where the two halves of the course meet. Business days exclude weekends and the named dates. A transfer scheduled for a Monday therefore needs notice by the preceding Wednesday, because Thursday, Friday and Monday are the three business days in between only if no excluded date intervenes; if the Monday is one of the named dates, the arithmetic moves again. **A right measured in business days is a right you have to compute, not a right you can estimate.**

**Third, the notice you are owed when the amount moves.**

> "When a preauthorized electronic fund transfer from the consumer's account will vary in amount from the previous transfer under the same authorization or from the preauthorized amount, the designated payee or the financial institution shall send the consumer written notice of the amount and date of the transfer at least 10 days before the scheduled date of transfer." (12 CFR § 1005.10, n.d.)

**Ten days, and read who owes it: the payee or the institution.** The rule also lets an institution offer you the option of being notified only when a transfer falls outside a range you specified, or differs from the most recent one by more than an agreed amount (12 CFR § 1005.10, n.d.).

**Why these three rules belong in a course about timing rather than a course about rights.** Because each one converts a vague worry into a date. "Can I stop it?" becomes "is today at least three business days before the scheduled date?" "Will it be bigger this month?" becomes "did the ten-day notice arrive?" A date can be checked against a calendar. A worry cannot.

**One boundary, stated plainly.** These are rules about **electronic** fund transfers from a consumer account. A paper check you wrote is stopped under different law, and Section 6 comes back to the question of which rule governs which instrument. Getting that wrong is the commonest way a real right turns out not to apply.

:::reveal How may a preauthorized electronic fund transfer from a consumer's account be authorised? ||| Only by a writing signed or similarly authenticated by the consumer.

:::reveal How far before the scheduled date must a consumer notify the institution to stop a preauthorized transfer? ||| At least three business days.

:::reveal How much advance written notice is owed when a preauthorized transfer will vary in amount? ||| At least ten days before the scheduled date, from either the designated payee or the financial institution.

## Vocabulary
- **Preauthorized electronic fund transfer**: a recurring transfer from a consumer account, which may be authorised only by a signed or similarly authenticated writing.
- **Stop-payment notice**: the consumer's instruction to halt a scheduled transfer, effective if given at least three business days ahead.
- **Written confirmation**: the follow-up an institution may require within fourteen days of an oral stop-payment notice, if it tells the consumer of the requirement.
- **Varying-amount notice**: the ten-day advance written notice owed when a recurring transfer will differ from the previous or preauthorized amount.

## Sources
12 CFR § 1005.10. (n.d.). *Preauthorized transfers*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/1005.10

12 CFR § 229.2. (n.d.). *Definitions*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/229.2`,
    },
    {
      slug: "quiz-when-money-leaves",
      title: "12 · Knowledge check: when money leaves",
      section: "Section 3 · When money leaves: order, not just amount",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What does U.C.C. 4-303(b) say about the sequence in which a bank charges items?",
            options: ["Any order", "Items must be charged from smallest to largest so the fewest items are returned unpaid", "Items must be charged in the sequence the customer authorised them during the day", "Items must be charged in the sequence they were received by the bank from other banks"],
            correctIndex: 0,
            explanation: "Subject to subsection (a), items may be accepted, paid, certified, or charged to the indicated account of its customer in any order.",
            sourceLessonSlug: "any-order-convenient",
          },
          {
            prompt: "What is U.C.C. 4-303(a) actually about?",
            options: ["When a notice comes too late", "The sequence in which a bank must apply deposits before it applies withdrawals", "The maximum fee a bank may charge for an item paid against an insufficient balance", "The obligation of a paying bank to return an unpaid item by a stated deadline"],
            correctIndex: 0,
            explanation: "It fixes the moment after which a stop-payment order, notice, legal process or setoff comes too late to change the bank's right or duty to pay an item.",
            sourceLessonSlug: "any-order-convenient",
          },
          {
            prompt: "Is the Uniform Commercial Code federal law?",
            options: ["No, it is enacted state by state", "Yes, it was enacted by Congress and applies uniformly in every state and territory", "Yes, it is a federal regulation issued jointly by the banking agencies", "No, it is a voluntary industry standard that binds only its signatory institutions"],
            correctIndex: 0,
            explanation: "It is a model code, so the operative rule for a given account is that state's enactment of Article 4, even where the wording is identical.",
            sourceLessonSlug: "any-order-convenient",
          },
          {
            prompt: "In the worked example, an account holds $100 and four payments of $80, $15, $12 and $8 arrive the same day. What is the closing balance?",
            options: ["Negative $15", "Negative $7, because only the last two items exceed the funds remaining in the account", "Zero, because the bank returns whichever items the balance cannot cover that day", "Positive $5, because the largest item is returned rather than paid from the account"],
            correctIndex: 0,
            explanation: "The four payments total $115 against a $100 balance, so the day ends $15 short whatever order is used. Order changes the count of short items, not the total.",
            sourceLessonSlug: "any-order-convenient",
          },
          {
            prompt: "In that example, how many items are charged against an insufficient balance when the smallest is charged first?",
            options: ["One", "Two, because the balance runs out midway through the sequence of four payments", "Three, the same as when the largest item is charged before the others", "Four, because the total of the day's items exceeds the opening balance"],
            correctIndex: 0,
            explanation: "Charging $8, then $12, then $15 leaves $65, so only the $80 item meets an insufficient balance.",
            sourceLessonSlug: "any-order-convenient",
          },
          {
            prompt: "In that example, how many items are charged against an insufficient balance when the largest is charged first?",
            options: ["Three", "One, the same as when the smallest item is charged before the others", "Two, because the balance covers the first two payments and not the remaining pair", "None, because the bank must return the largest item before charging the smaller ones"],
            correctIndex: 0,
            explanation: "Charging $80 leaves $20 and charging $15 leaves $5, so the $12 and the $8 both meet an insufficient balance along with the item that overdrew it.",
            sourceLessonSlug: "any-order-convenient",
          },
          {
            prompt: "What does the worked example demonstrate?",
            options: ["Order changes the count", "That banks in every state are required to charge the largest item of the day first", "That the total charged to an account depends on the sequence the bank chooses", "That an overdrawn account always produces exactly one insufficient-balance item"],
            correctIndex: 0,
            explanation: "Same day, same payments, same closing balance, but one shortfall or three depending on a sequencing decision made inside a computer.",
            sourceLessonSlug: "any-order-convenient",
          },
          {
            prompt: "What does the posting-order lesson explicitly say it is NOT doing?",
            options: ["Accusing any bank", "Explaining how the commercial code treats a stop-payment order that arrives too late", "Showing what a permission in the commercial code makes arithmetically possible", "Connecting the count of overdrafts to the exception in the availability rules"],
            correctIndex: 0,
            explanation: "The arithmetic shows what the permission makes possible, not what any institution does. What matters in a real case is a person's own statement.",
            sourceLessonSlug: "any-order-convenient",
          },
          {
            prompt: "Why does the lesson call the number of insufficient-balance items a countable fact?",
            options: ["It appears on the statement", "Because the bank must report it to a consumer reporting agency once a year", "Because the commercial code requires the bank to disclose it before charging any item", "Because a customer may demand it be recalculated using a different posting order"],
            correctIndex: 0,
            explanation: "A number a person can read on their own statement is worth more than a suspicion they cannot check.",
            sourceLessonSlug: "any-order-convenient",
          },
          {
            prompt: "Which rule from Section 2 does posting order connect to?",
            options: ["The repeated-overdraft exception", "The new-account exception, which applies for thirty calendar days after opening", "The large-deposit exception, which is measured on the aggregate for one banking day", "The emergency-conditions exception, which covers an interruption of communications"],
            correctIndex: 0,
            explanation: "That exception counts occurrences, and order changes the count, so two rules written decades apart in different bodies of law meet on one account.",
            sourceLessonSlug: "any-order-convenient",
          },
          {
            prompt: "What is an item, in the sense Article 4 uses the word?",
            options: ["An instrument or order handled by a bank", "Any electronic message a bank sends to another bank during a settlement window", "Any charge a merchant submits to a card network for authorisation and later settlement", "Any entry a bank makes in its own general ledger at the close of a banking day"],
            correctIndex: 0,
            explanation: "Article 4 governs bank deposits and collections, and its items are the instruments and orders to pay that banks handle for collection or payment.",
            sourceLessonSlug: "any-order-convenient",
          },
          {
            prompt: "What is the exercise this lesson sets around the commercial code?",
            options: ["Find your own state's enactment", "Compare the code with the equivalent provision in Regulation CC's availability schedule", "Calculate the fee a bank may charge under the code for each insufficient item", "Determine which Federal Reserve district publishes the code for your region"],
            correctIndex: 0,
            explanation: "The section number and words are usually the same everywhere, but the citation governing a given account is a state statute.",
            sourceLessonSlug: "any-order-convenient",
          },
          {
            prompt: "How does Regulation CC define funds that are available for withdrawal?",
            options: ["Available for uses permitted for collected funds", "Available for cash withdrawal only, at any branch of the depositary bank during posted hours", "Available at the moment the depositary bank receives credit from the paying bank", "Available for any purpose except the payment of a check drawn on the same account"],
            correctIndex: 0,
            explanation: "The definition lists paying checks, certifying checks, electronic payments, cash withdrawals and transfers between accounts, under the bank's account agreement or policies.",
            sourceLessonSlug: "authorized-posted-settled",
          },
          {
            prompt: "What does the phrase \"under the bank's account agreement or policies\" in that definition signal?",
            options: ["Part of the answer is in the bank's own document", "That the bank may override the federal availability schedule by contract with the customer", "That the federal definition applies only to accounts opened after the rule took effect", "That a customer must consent in writing before any funds are treated as available"],
            correctIndex: 0,
            explanation: "Even the federal definition hands part of the meaning back to a document the bank wrote, which is where available balance and ledger balance are defined.",
            sourceLessonSlug: "authorized-posted-settled",
          },
          {
            prompt: "What is an authorisation, as this lesson distinguishes it?",
            options: ["A check that funds exist, and a reservation", "The moment the bank charges an item against the customer's account balance", "The moment funds actually move between the two institutions involved", "The written consent a consumer gives before a recurring transfer may begin"],
            correctIndex: 0,
            explanation: "An authorisation is not the transfer. Posting is the charge, and settlement is the money actually moving.",
            sourceLessonSlug: "authorized-posted-settled",
          },
          {
            prompt: "Which of the three moments is the one that posting order decides?",
            options: ["Posting", "Authorisation, because the bank chooses which requests to approve during the day", "Settlement, because the bank chooses when to send funds to the other institution", "None of them, because order is fixed by the availability schedule in Regulation CC"],
            correctIndex: 0,
            explanation: "Posting is the bank charging the item to the account, and that is the moment the commercial code's any-order permission operates on.",
            sourceLessonSlug: "authorized-posted-settled",
          },
          {
            prompt: "Why does the lesson say the three-moment structure is not a defect?",
            options: ["The parties bank in different places", "Because the delay lets the bank earn interest on funds before they are transferred out", "Because federal law requires a minimum interval between authorisation and settlement", "Because customers asked for a reservation system when debit cards were introduced"],
            correctIndex: 0,
            explanation: "It is how a system built to work when the payer and payee bank at different institutions has to work, but it means a balance answers a specific question.",
            sourceLessonSlug: "authorized-posted-settled",
          },
          {
            prompt: "How often must preauthorized credits arrive before Regulation E's notice rule applies?",
            options: ["At least once every sixty days", "At least once every calendar month, counted from the first day of the month", "At least twice in any statement cycle, whatever the length of that cycle is", "At least once every fourteen days, matching the written-confirmation window"],
            correctIndex: 0,
            explanation: "The rule attaches when a person initiates preauthorized electronic fund transfers to a consumer's account at least once every sixty days.",
            sourceLessonSlug: "authorized-posted-settled",
          },
          {
            prompt: "Which of these is one of the three options Regulation E gives an institution for that notice?",
            options: ["A readily available telephone line", "A written statement mailed within thirty days of the end of the statement cycle", "An electronic alert sent to every address the customer has ever registered", "A quarterly summary listing every recurring credit received during the quarter"],
            correctIndex: 0,
            explanation: "The three are positive notice within two business days, negative notice within two business days of the scheduled date, or a telephone line disclosed on the statements.",
            sourceLessonSlug: "authorized-posted-settled",
          },
          {
            prompt: "Within how long must positive notice of a preauthorized credit be given, if the institution chooses that option?",
            options: ["Two business days after the transfer", "Ten days before the scheduled date of the transfer to the consumer's account", "Three business days after the end of the statement cycle in which it occurred", "Fourteen days after the consumer asks whether the transfer has arrived"],
            correctIndex: 0,
            explanation: "Positive notice is oral or written notice of the transfer within two business days after it occurs.",
            sourceLessonSlug: "authorized-posted-settled",
          },
          {
            prompt: "What is negative notice under that rule?",
            options: ["Notice that the transfer did not occur", "Notice that the transfer occurred but in a smaller amount than the consumer expected", "Notice that the institution has declined to accept further transfers from that payor", "Notice that the consumer's authorization for the transfer has expired by its terms"],
            correctIndex: 0,
            explanation: "It is oral or written notice, within two business days of the date the transfer was scheduled to occur, that it did not occur.",
            sourceLessonSlug: "authorized-posted-settled",
          },
          {
            prompt: "When need an institution not provide any of the three notices?",
            options: ["When the payor gives positive notice itself", "When the consumer has enrolled in electronic rather than paper periodic statements", "When the transfer is smaller than the minimum availability amount in Regulation CC", "When the transfer arrives on a day that is not a business day under Regulation CC"],
            correctIndex: 0,
            explanation: "A financial institution need not provide notice of a transfer if the payor gives the consumer positive notice that the transfer has been initiated.",
            sourceLessonSlug: "authorized-posted-settled",
          },
          {
            prompt: "What does the lesson say is the practical consequence if your bank chose the telephone-line option?",
            options: ["Nobody will tell you the pay did not arrive", "The bank must call you within two business days of every scheduled transfer date", "The bank must waive any fee charged while the expected credit was outstanding", "The bank must send a written confirmation of every credit within fourteen days"],
            correctIndex: 0,
            explanation: "You have a number to call rather than an alert, and knowing which option the institution picked is the benefit of reading the rule.",
            sourceLessonSlug: "authorized-posted-settled",
          },
          {
            prompt: "Where is the telephone number required to be disclosed under that option?",
            options: ["On the initial disclosures and each periodic statement", "On a sign posted at every branch where the institution accepts consumer deposits", "In the annual privacy notice the institution sends to every accountholder", "On the back of every debit card the institution issues to a consumer"],
            correctIndex: 0,
            explanation: "The rule requires the number to be disclosed on the initial disclosure of account terms and on each periodic statement.",
            sourceLessonSlug: "authorized-posted-settled",
          },
          {
            prompt: "How may a preauthorized electronic fund transfer FROM a consumer's account be authorised?",
            options: ["By a signed or similarly authenticated writing", "By any oral instruction the consumer gives to the payee during a recorded telephone call", "By a course of dealing in which the consumer has permitted three prior transfers", "By the consumer's failure to object within ten days of the payee's first request"],
            correctIndex: 0,
            explanation: "Regulation E says such transfers may be authorized only by a writing signed or similarly authenticated by the consumer.",
            sourceLessonSlug: "the-stop-payment-clock",
          },
          {
            prompt: "How far ahead must a consumer notify the institution to stop a preauthorized transfer?",
            options: ["At least three business days before", "At least ten days before the scheduled date, matching the varying-amount notice period", "At least fourteen days before, matching the written-confirmation window in the rule", "At any time before the transfer settles, however close to the scheduled date that is"],
            correctIndex: 0,
            explanation: "The consumer may notify the institution orally or in writing at least three business days before the scheduled date of the transfer.",
            sourceLessonSlug: "the-stop-payment-clock",
          },
          {
            prompt: "May a stop-payment notice under that rule be given orally?",
            options: ["Yes", "No, the rule requires a signed writing exactly as the original authorization does", "Only if the consumer has previously registered a telephone number with the institution", "Only if the transfer is larger than the amount stated in the original authorization"],
            correctIndex: 0,
            explanation: "Notice may be oral or in writing, though the institution may then require written confirmation within fourteen days.",
            sourceLessonSlug: "the-stop-payment-clock",
          },
          {
            prompt: "Within how long may an institution require written confirmation of an oral stop-payment notice?",
            options: ["Fourteen days", "Three business days, the same period as the notice itself must be given in", "Thirty calendar days from the date the transfer was scheduled to occur", "Ten days, the same period as the notice of a varying amount requires"],
            correctIndex: 0,
            explanation: "The institution may require written confirmation within fourteen days of an oral notice, and must inform the consumer of the requirement.",
            sourceLessonSlug: "the-stop-payment-clock",
          },
          {
            prompt: "What must an institution do if it intends to require written confirmation?",
            options: ["Tell the consumer of the requirement", "Obtain the consumer's agreement in writing at the time the account is opened", "File a copy of the oral notice with the payee within two business days", "Suspend the transfer until the written confirmation has actually been received"],
            correctIndex: 0,
            explanation: "The rule conditions the requirement on the institution informing the consumer of it and saying where the confirmation should be sent.",
            sourceLessonSlug: "the-stop-payment-clock",
          },
          {
            prompt: "How much advance written notice is owed when a preauthorized transfer will vary in amount?",
            options: ["At least ten days", "At least three business days, matching the stop-payment notice period in the same rule", "At least fourteen days, matching the written-confirmation period in the same rule", "At least one full statement cycle before the transfer is scheduled to occur"],
            correctIndex: 0,
            explanation: "Written notice of the amount and date must be sent at least ten days before the scheduled date of transfer.",
            sourceLessonSlug: "the-stop-payment-clock",
          },
          {
            prompt: "Who owes the varying-amount notice?",
            options: ["The payee or the institution", "The consumer, who must inform the institution of any expected change in amount", "The Federal Reserve, which distributes the notice through the clearing system", "Only the institution, since the payee has no direct relationship with the consumer"],
            correctIndex: 0,
            explanation: "The rule says the designated payee or the financial institution shall send the consumer written notice.",
            sourceLessonSlug: "the-stop-payment-clock",
          },
          {
            prompt: "What option may an institution offer instead of a notice for every varying transfer?",
            options: ["Notice only outside a specified range", "Notice only for transfers that exceed the minimum availability amount in Regulation CC", "Notice only once each calendar quarter summarising the transfers in that quarter", "Notice only when the consumer requests it in writing before the scheduled date"],
            correctIndex: 0,
            explanation: "The consumer may elect to receive notice only when a transfer falls outside a specified range, or differs from the most recent one by more than an agreed amount.",
            sourceLessonSlug: "the-stop-payment-clock",
          },
          {
            prompt: "Why does the lesson say the three-business-day right must be computed rather than estimated?",
            options: ["Business days exclude weekends and named dates", "Because the institution may extend the period by one day at its own discretion", "Because the count runs from the date the payee sends the file rather than the transfer date", "Because different states count business days differently under their own statutes"],
            correctIndex: 0,
            explanation: "A right measured in business days changes with the calendar, so a transfer scheduled near a weekend or an excluded date needs the arithmetic done.",
            sourceLessonSlug: "the-stop-payment-clock",
          },
          {
            prompt: "What does this lesson say each of the three Regulation E rules converts a worry into?",
            options: ["A date", "A dollar figure that appears on the next periodic statement the institution sends", "A complaint that may be filed with the institution's primary federal supervisor", "A contractual term that the consumer may renegotiate with the payee directly"],
            correctIndex: 0,
            explanation: "Can I stop it becomes is today at least three business days before the scheduled date, and a date can be checked against a calendar.",
            sourceLessonSlug: "the-stop-payment-clock",
          },
          {
            prompt: "What boundary does the stop-payment lesson state plainly?",
            options: ["These rules cover electronic transfers", "These rules cover only transfers larger than the minimum availability amount", "These rules cover only accounts opened within the preceding thirty calendar days", "These rules cover only transfers between accounts at two different institutions"],
            correctIndex: 0,
            explanation: "A paper check is stopped under different law, and mistaking which rule governs which instrument is the commonest way a real right turns out not to apply.",
            sourceLessonSlug: "the-stop-payment-clock",
          },
          {
            prompt: "Which pair of ideas from earlier in the course meet in the three-business-day rule?",
            options: ["Counting business days and a consumer right", "The availability schedule and the six exceptions that can extend a hold", "The cut-off hour and the deposit-timing rule for a night depository", "The interest-accrual clock and the definition of a nonproprietary machine"],
            correctIndex: 0,
            explanation: "Section 1 taught how business days are counted, and this rule is a right measured in them.",
            sourceLessonSlug: "the-stop-payment-clock",
          },
          {
            prompt: "Which statement about the two halves of this course is accurate?",
            options: ["Money in has one schedule and money out has another", "Both directions are governed by Regulation CC, which covers deposits and withdrawals", "Both directions are governed by state commercial law rather than by federal rules", "Money out is governed by a federal schedule and money in by state commercial law"],
            correctIndex: 0,
            explanation: "Money coming in has an availability date set by a federal schedule; money going out has authorisation, posting and settlement dates, only one of which the commercial code addresses.",
            sourceLessonSlug: "authorized-posted-settled",
          },
          {
            prompt: "In the worked example, what is fixed regardless of posting order?",
            options: ["The closing balance", "The number of items charged against an insufficient balance during the day", "Which of the four payments the bank chooses to return unpaid to the payee", "Whether the account qualifies for the repeated-overdraft exception in future"],
            correctIndex: 0,
            explanation: "The four payments total more than the balance, so the day ends short by the same amount however they are sequenced.",
            sourceLessonSlug: "any-order-convenient",
          },
          {
            prompt: "How does this section describe the direction Article 4 points, compared with Regulation CC?",
            options: ["The other way", "The same way, since both set a maximum period and require a written notice", "Toward the customer, since the commercial code fixes a protective sequence", "Toward the Federal Reserve, which sets posting order for every member bank"],
            correctIndex: 0,
            explanation: "Regulation CC is a federal schedule with exceptions, notices and a remedy. Article 4's posting-order provision is a permission with none of those attached.",
            sourceLessonSlug: "any-order-convenient",
          },
          {
            prompt: "A payment is authorised on a Friday and charged to the account on the following Monday. What is the Monday event called?",
            options: ["Posting", "Settlement, because the money has by then moved between the two institutions", "Authorisation, because the reservation against the balance is renewed each day", "Availability, because the funds become usable to the payee on that date"],
            correctIndex: 0,
            explanation: "Posting is the bank charging the item to the account, which may be days after the authorisation and before final settlement.",
            sourceLessonSlug: "authorized-posted-settled",
          },
          {
            prompt: "Which two terms does the lesson say are defined in your own account agreement and are not the same as each other?",
            options: ["Available balance and ledger balance", "Business day and banking day, which Regulation CC defines rather than the bank", "Posting and settlement, which the commercial code defines for every institution", "Item and instrument, which Article 4 defines identically across every state"],
            correctIndex: 0,
            explanation: "The app on a phone shows one of them, and the federal definition of available for withdrawal explicitly refers back to the bank's own agreement or policies.",
            sourceLessonSlug: "authorized-posted-settled",
          },
          {
            prompt: "What is the gap this course is about, stated in terms of the three moments?",
            options: ["Availability on one side, posting on the other", "Authorisation on one side and settlement on the other, within the same transaction", "The interval between the statement closing date and the payment due date", "The interval between the cut-off hour and the opening of the next banking day"],
            correctIndex: 0,
            explanation: "Both are knowable in advance, which is what makes the gap something a person can map rather than something that simply happens to them.",
            sourceLessonSlug: "authorized-posted-settled",
          },
          {
            prompt: "Which section of Regulation E carries the preauthorized transfer rules?",
            options: ["Section 1005.10", "Section 1005.17, which governs the overdraft service opt-in for one-time debit transactions", "Section 1005.18, which governs disclosures for prepaid accounts before acquisition", "Section 1005.11, which governs the resolution of errors reported by a consumer"],
            correctIndex: 0,
            explanation: "12 CFR 1005.10 covers both preauthorized transfers to and from a consumer's account.",
            sourceLessonSlug: "the-stop-payment-clock",
          },
          {
            prompt: "Which rule requires overdraft and returned-item fee totals to be shown on a periodic statement?",
            options: ["Regulation DD, at 12 CFR 1030.11", "Regulation CC, at 12 CFR 229.16, which requires the availability policy disclosure", "Regulation E, at 12 CFR 1005.10, which governs preauthorized transfers to an account", "Article 4 of the Uniform Commercial Code, as enacted in each individual state"],
            correctIndex: 0,
            explanation: "The rule requires separate totals using the term Total Overdraft Fees, and a total for returned items, for the statement period and calendar year to date.",
            sourceLessonSlug: "any-order-convenient",
          },
          {
            prompt: "A consumer wants to stop a preauthorized transfer scheduled for a Monday that is not an excluded date. By which day must notice be given, counting only business days?",
            options: ["The preceding Wednesday", "The preceding Friday, because Saturday and Sunday count toward the three-day period", "The preceding Thursday, because the day of the transfer itself counts as one day", "The same Monday, provided the notice is given before the institution's cut-off hour"],
            correctIndex: 0,
            explanation: "Thursday, Friday and Monday are not three intervening business days, so notice by Wednesday is what the arithmetic gives when no excluded date intervenes.",
            sourceLessonSlug: "the-stop-payment-clock",
          },
          {
            prompt: "What kind of rule is the varying-amount notice measured in?",
            options: ["Days, not business days", "Business days, counted the same way as the stop-payment period in the same section", "Banking days, counted from the last day the institution was open to the public", "Statement cycles, counted from the closing date printed on the periodic statement"],
            correctIndex: 0,
            explanation: "The stop-payment right is three business days and the varying-amount notice is ten days, so the two are counted differently and should not be conflated.",
            sourceLessonSlug: "the-stop-payment-clock",
          },
          {
            prompt: "What does the phrase \"signed or similarly authenticated\" in the authorization rule allow for?",
            options: ["A form of writing beyond ink on paper", "An oral agreement recorded by the payee and retained for the life of the arrangement", "A course of dealing established by three or more prior transfers of the same amount", "An authorization given by anyone with access to the consumer's account credentials"],
            correctIndex: 0,
            explanation: "The rule still requires a writing, but it does not confine authentication to a handwritten signature.",
            sourceLessonSlug: "the-stop-payment-clock",
          },
          {
            prompt: "How does the lesson describe a balance figure?",
            options: ["An answer to a question", "A single authoritative number that every party to a payment sees identically", "A projection of what the account will hold once every pending item has settled", "A figure the bank must recalculate whenever a customer requests it in writing"],
            correctIndex: 0,
            explanation: "Money you may spend now, money charged so far, and money finally moved are three different questions with three different answers.",
            sourceLessonSlug: "authorized-posted-settled",
          },
          {
            prompt: "Which of these does the commercial code's posting-order provision NOT come with?",
            options: ["A written notice to the customer", "A permission for the bank to charge items in the sequence it finds convenient", "A companion subsection about when a stop-payment order arrives too late", "A place in state law rather than in the federal availability regulation"],
            correctIndex: 0,
            explanation: "Unlike an exception hold under Regulation CC, a sequencing decision carries no notice requirement and no stated reason.",
            sourceLessonSlug: "any-order-convenient",
          },
          {
            prompt: "What does the course say a person should rely on rather than a general claim about posting order?",
            options: ["Their own statement", "A published ranking of institutions by the number of overdraft fees they charge", "A supervisory report describing the practices examiners have observed recently", "An estimate produced by applying the largest-first sequence to a typical month"],
            correctIndex: 0,
            explanation: "The arithmetic shows what the permission makes possible; what happened on a particular account is a matter of that account's record.",
            sourceLessonSlug: "any-order-convenient",
          },
          {
            prompt: "Which of these is the correct order of the three moments as they usually occur?",
            options: ["Authorisation, posting, settlement", "Settlement, authorisation, posting, because funds must move before an item can be charged", "Posting, authorisation, settlement, because the bank charges the item before approving it", "Authorisation, settlement, posting, because the account is charged only after funds move"],
            correctIndex: 0,
            explanation: "A payment can be authorised on one day, posted on another and settled later still, each recorded on a different record.",
            sourceLessonSlug: "authorized-posted-settled",
          },
          {
            prompt: "In Regulation CC's definition, which of these is named as a use that available funds must support?",
            options: ["Certification of checks drawn on the account", "Purchase of a certificate of deposit at the same institution on the same banking day", "Transfer to an account at another institution by a preauthorized recurring debit", "Payment of a fee assessed by the bank against the account for a returned item"],
            correctIndex: 0,
            explanation: "The definition names payment of checks, certification of checks, electronic payments, withdrawals by cash, and transfers between accounts.",
            sourceLessonSlug: "authorized-posted-settled",
          },
          {
            prompt: "What makes the three-business-day stop-payment right a timing rule rather than only a consumer right?",
            options: ["Its operation depends entirely on a date", "It applies only to transfers that recur on a fixed date each calendar month", "It may be exercised only during the institution's posted business hours", "It expires three business days after the transfer has already been charged"],
            correctIndex: 0,
            explanation: "Whether the right is available at all is decided by counting, which is why the course places it beside the availability schedule rather than in a rights chapter.",
            sourceLessonSlug: "the-stop-payment-clock",
          },
          {
            prompt: "Why does the course teach the preauthorized-credit notice rule in a lesson about money leaving?",
            options: ["Arrival is otherwise invisible", "Because the rule governs the order in which recurring credits are posted to an account", "Because the same three-business-day period applies to credits and to debits alike", "Because a credit that fails to arrive is treated as a debit under Regulation E"],
            correctIndex: 0,
            explanation: "Knowing the state of an account requires knowing what has arrived, and the rule exists precisely because that arrival is not otherwise announced.",
            sourceLessonSlug: "authorized-posted-settled",
          },
          {
            prompt: "Which body of law would govern stopping a paper check you wrote?",
            options: ["Not Regulation E", "Regulation E, which covers every instruction a consumer gives to stop a payment", "Regulation CC, which governs the collection of checks between banks", "Regulation DD, which governs the disclosure of fees on periodic statements"],
            correctIndex: 0,
            explanation: "Regulation E's stop-payment rule is about preauthorized electronic fund transfers. A paper check is stopped under different law.",
            sourceLessonSlug: "the-stop-payment-clock",
          },
          {
            prompt: "What does the lesson suggest you should notice about your own institution's choice among the three credit-notice options?",
            options: ["That it was a choice", "That the institution must obtain the consumer's written consent before selecting one", "That the institution must use the same option for every account it holds nationally", "That the option may be changed only at the start of a new calendar year"],
            correctIndex: 0,
            explanation: "The rule offers three ways of satisfying the same duty, and which one a bank picked determines whether anyone tells you a credit failed to arrive.",
            sourceLessonSlug: "authorized-posted-settled",
          },
          {
            prompt: "A bank charges four items on one day and two of them meet an insufficient balance. What does the course say this tells you on its own?",
            options: ["Very little without the order", "That the bank used the largest-first sequence when it charged the day's items", "That the account holder authorised more payments than the balance could support", "That the availability schedule delayed a deposit that should have been credited"],
            correctIndex: 0,
            explanation: "The count depends on sequence as well as on the payments themselves, so the number is only interpretable once the order is known.",
            sourceLessonSlug: "any-order-convenient",
          },
          {
            prompt: "Which of these does the course treat as the durable layer in this section?",
            options: ["The statute and the regulation", "The supervisory expectations that examiners apply to institutions during examinations", "The practices that most large institutions follow when sequencing a day's items", "The published guidance that agencies issue about overdraft programmes generally"],
            correctIndex: 0,
            explanation: "The course cites the commercial code and the federal regulations, and dates anything it says about a body's current footing.",
            sourceLessonSlug: "any-order-convenient",
          },
          {
            prompt: "What is the relationship between the total charged to an account in a day and the posting order?",
            options: ["The total is unchanged by the order", "The total rises when the largest item is charged first because more items are short", "The total falls when the smallest item is charged first because fewer items are short", "The total depends on whether the bank charges deposits before withdrawals"],
            correctIndex: 0,
            explanation: "Order changes how many items meet an insufficient balance. It does not change the sum of the payments themselves.",
            sourceLessonSlug: "any-order-convenient",
          },
          {
            prompt: "Which of these is the clearest statement of what this section adds to Section 2?",
            options: ["Amount is not the only variable", "Deposits and withdrawals are governed by the same federal availability schedule", "The exceptions in Regulation CC apply equally to items charged against an account", "The cut-off hour determines the sequence in which a day's items are charged"],
            correctIndex: 0,
            explanation: "Section 2 was about when funds arrive. This section shows that on the way out, sequence matters as much as sum.",
            sourceLessonSlug: "any-order-convenient",
          },
          {
            prompt: "What does Article 4 of the Uniform Commercial Code govern?",
            options: ["Bank deposits and collections", "The disclosure of fees on the periodic statement a bank sends its customers", "The insurance of deposits held at a federally insured depository institution", "The order in which a consumer must pay competing creditors from one account"],
            correctIndex: 0,
            explanation: "Its posting-order provision sits inside that subject, which is why the rule is state commercial law rather than a federal consumer regulation.",
            sourceLessonSlug: "any-order-convenient",
          },
          {
            prompt: "Which of these is the safest summary of what a stop-payment right requires you to know?",
            options: ["The scheduled date and today's date", "The amount of the transfer and the identity of the originating institution", "The account agreement's definition of available balance and ledger balance", "The cut-off hour the institution has set for receiving deposits at a branch"],
            correctIndex: 0,
            explanation: "The right turns on whether today is at least three business days before the scheduled date, which is a calculation from two dates.",
            sourceLessonSlug: "the-stop-payment-clock",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4 — The rails, and how fast each one runs
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "six-rails-six-clocks",
      title: "13 · Six rails, and six different clocks",
      section: "Section 4 · The rails, and how fast each one runs",
      body: `"Sending money" is not one thing. It is at least six, and each one keeps time differently.

**Cash** is the only one with no clock between the two people. Handing over currency is the payment. A clock only starts when the cash reaches a bank, and Section 2 gave you that rule: in person to an employee is next business day, any other way is the second (12 CFR § 229.10, n.d.).

**A check** is an order to pay, not the payment. Depositing one begins a collection process between two banks, and the availability schedule governs when you may use the money while that process runs. Section 4's next lesson is entirely about what that means.

**An ACH credit** is a push: the payer's bank sends money toward the payee. This is what a payroll direct deposit is. Regulation CC defines the facility:

> "Automated clearinghouse or ACH means a facility that processes debit and credit transfers under rules established by a Federal Reserve Bank operating circular on automated clearinghouse items or under rules of an automated clearinghouse association." (12 CFR § 229.2, n.d.)

**Read what that sentence says about where the rules live**, because it is the most useful thing in this lesson. An operating circular or an association's rulebook is not a statute and is not in the Code of Federal Regulations. So the rules that decide how fast an ACH entry moves are a different kind of document from the rules that decide what your bank owes you, and the consumer-facing protections in Section 3 come from Regulation E rather than from any rulebook.

**An ACH debit** is a pull: the payee's bank reaches into the payer's account under an authorisation. Your recurring bill payments are usually these, which is why Regulation E's authorisation, stop-payment and varying-amount rules apply to them (12 CFR § 1005.10, n.d.). Note carefully that Regulation CC's next-day rule for electronic payments does **not** cover a debit, because the definition names "a wire transfer or an ACH credit transfer" (12 CFR § 229.2, n.d.).

**A card transaction** is the authorisation-then-settlement pattern from the last section, and it is likewise outside that definition.

**A wire** is defined in the same place, and the definition is worth reading for its shape:

> "Wire transfer means an unconditional order to a bank to pay a fixed or determinable amount of money to a beneficiary upon receipt or on a day stated in the order, that is transmitted by electronic or other means through Fedwire, the Clearing House Interbank Payments System, other similar network, between banks, or on the books of a bank." (12 CFR § 229.2, n.d.)

**Unconditional. Upon receipt.** A wire is not a request that something be collected; it is an instruction to pay. That is why it sits with ACH credits in the next-day availability rule.

**Instant payment** is the sixth, and it is new enough that most people's intuitions predate it. The next lesson but one takes it on its own.

**The single table worth carrying out of here is not a table of speeds.** It is a question: for this payment, is somebody pushing money or pulling it, and is a bank being asked to collect or being ordered to pay? Answer those two and you can predict which rules apply without memorising any speeds at all, which is fortunate, because speeds change and the categories do not.

:::reveal Which two things does Regulation CC's definition of electronic payment name? ||| A wire transfer and an ACH credit transfer, and nothing else.

:::reveal Where does Regulation CC say ACH rules come from? ||| A Federal Reserve Bank operating circular on automated clearinghouse items, or the rules of an automated clearinghouse association.

:::reveal What two questions let you predict which rules apply to a payment? ||| Whether money is being pushed or pulled, and whether a bank is being asked to collect or ordered to pay.

## Vocabulary
- **ACH credit**: a push transfer originated by the payer's side, the form a payroll direct deposit takes.
- **ACH debit**: a pull transfer originated by the payee's side under an authorisation, the form most recurring bill payments take.
- **Wire transfer**: an unconditional order to a bank to pay a fixed or determinable amount to a beneficiary upon receipt or on a stated day.
- **Operating circular**: a Federal Reserve Bank's own rulebook for a service, which is not a statute and is not published in the Code of Federal Regulations.

## Sources
12 CFR § 229.2. (n.d.). *Definitions*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/229.2

12 CFR § 229.10. (n.d.). *Next-day availability*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/229.10

12 CFR § 1005.10. (n.d.). *Preauthorized transfers*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/1005.10`,
    },
    {
      slug: "provisional-until-it-is-not",
      title: "14 · Your deposit is a provisional credit until it is not",
      section: "Section 4 · The rails, and how fast each one runs",
      body: `Here is the sentence that explains the entire availability schedule, and it is not in Regulation CC. It is in the commercial code.

> "Unless a contrary intent clearly appears and before the time that a settlement given by a collecting bank for an item is or becomes final, the bank, with respect to the item, is an agent or sub-agent of the owner of the item and any settlement given for the item is provisional." (U.C.C. § 4-201, n.d.)

**Provisional.** When you deposit a check, the bank is not buying it from you. It is collecting it for you, as your agent, and the credit it puts in your account is a placeholder pending an event that has not happened yet. Availability, in that light, is the bank letting you spend money it has not itself received.

**Which is why the exceptions in Section 2 look the way they do.** Every one of them is about the risk of that advance. A new account has no history to price the risk against. A large deposit is a large advance. A redeposited check has already failed once. Repeated overdrafts are evidence about the account. Reasonable cause to doubt collectibility is the judgement itself. Emergency conditions are the collection machinery breaking down (12 CFR § 229.13, n.d.). Read as a list of reasons to distrust an advance, the six stop looking arbitrary.

**And here is the other half, which people learn the hard way.** If the item is not finally paid, the bank may:

> "revoke the settlement given by it, charge back the amount of any credit given for the item to its customer's account, or obtain refund from its customer" (U.C.C. § 4-214, n.d.)

**A charge-back is not a penalty and it is not a reversal of your right to the money.** It is the placeholder being removed because the event it was holding a place for did not occur. The right is conditioned on the bank returning the item or notifying its customer by its midnight deadline or within a reasonable time after learning of the dishonor (U.C.C. § 4-214, n.d.).

**So availability and finality are two different clocks, and this is the most expensive confusion in the course.** Regulation CC tells you when you may **use** the money. The commercial code tells you when the money is **yours to keep**. Those questions have different answers and the second one can arrive later than the first. Funds released to you on schedule can be charged back afterwards if the item was never paid, and nothing about the schedule prevents that.

**One more clock, mentioned in Section 2 and now placed properly.** Interest begins to accrue "not later than the business day on which the depositary bank receives credit for the funds" (12 CFR § 229.14, n.d.). That is a collection-side event, while availability is a customer-side one. Three clocks on a single deposit: when it earns, when you may spend it, and when it is finally yours.

**What to do with this is not a strategy, because this course gives no financial advice.** It is a reading habit. When a bank tells you funds are available, that is an answer to one question and not to the other two, and knowing which question was answered is what keeps a person from being surprised twice by the same check.

:::reveal In the commercial code, what is a collecting bank's settlement for a deposited item until it becomes final? ||| Provisional. The bank is acting as agent or sub-agent of the owner of the item.

:::reveal What three things may a bank do if an item is not finally paid? ||| Revoke the settlement it gave, charge back the amount of any credit given to the customer's account, or obtain a refund from the customer.

:::reveal Name the three clocks that run on a single check deposit. ||| When interest begins to accrue, when the funds become available to spend, and when the settlement becomes final.

## Vocabulary
- **Provisional settlement**: a credit given for an item before final payment, which may be revoked if the item is not paid.
- **Collecting bank**: a bank handling an item for collection, acting as agent or sub-agent of the item's owner rather than as its purchaser.
- **Charge-back**: the removal of a provisional credit when an item is not finally paid, exercised within the code's stated deadlines.
- **Finality**: the point at which a settlement stops being provisional, which is a different moment from availability.

## Sources
U.C.C. § 4-201. (n.d.). *Status of collecting bank as agent and provisional status of credits; applicability of article; item indorsed "pay any bank"*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/ucc/4/4-201

U.C.C. § 4-214. (n.d.). *Right of charge-back or refund; liability of collecting bank; return of item*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/ucc/4/4-214

12 CFR § 229.13. (n.d.). *Exceptions*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/229.13

12 CFR § 229.14. (n.d.). *Payment of interest*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/229.14`,
    },
    {
      slug: "instant-and-irrevocable",
      title: "15 · Instant is a different object, and irrevocability is the price",
      section: "Section 4 · The rails, and how fast each one runs",
      body: `Every clock in this course so far has been counted in business days, and every one of them has assumed that a day ends. One rail does not.

**What it is, in the operator's own words.** The Federal Reserve's instant payment service "enables individuals and businesses to send instant payments through their depository institution accounts", and it "went live on July 20, 2023" (Board of Governors of the Federal Reserve System, n.d.). Its timekeeping is the part that matters here:

> "The service has a 24-hour business day each day of the week, including weekends and holidays." (Board of Governors of the Federal Reserve System, n.d.)

**Set that beside the definition you learned in Section 1.** Regulation CC's business day is a calendar day other than a weekend or one of ten named dates. This service's business day is every day. The two sentences use the same words to mean opposite things, which is exactly why defined terms are worth reading rather than assuming. Read on 28 August 2026.

**The functional difference is not just speed.** The service transfers funds "in near real-time and at any time, any day of the year", processing each transaction and settling it on a gross basis rather than netting a batch at a set hour (Board of Governors of the Federal Reserve System, n.d.). Nothing waits for a window to open. There is no window.

**And now the trade, which is the actual lesson.** Section 3 gave you a right: a preauthorized electronic fund transfer can be stopped by notifying the institution at least three business days before the scheduled date (12 CFR § 1005.10, n.d.). That right exists because there is an interval between agreeing to a payment and the payment happening. **A payment that settles the moment it is sent has no such interval.** Speed and the ability to change your mind are, in the payment system, two ends of the same measurement.

**This is a fact about the rails, not a warning and not advice.** The course does not tell you which rail to use, and it names no service as good or bad. What it tells you is how to ask the question: before sending, is there a window during which this can still be stopped, and how long is it? That question has a different answer for a check, a preauthorized debit, a card and an instant payment, and the difference is knowable before you send rather than after.

**One boundary, because this is where undated claims breed.** Which institutions offer instant payment, what limits they set, and which competing networks operate alongside the Federal Reserve's service are all things that change. This lesson dates what it says, cites the operator for the two facts it uses, and stops. **Your own institution's participation, limits and hours are a term of your own account documents**, which is the same answer this course has given about the cut-off hour and the availability policy, for the same reason.

:::reveal What is the length of the instant payment service's business day? ||| Twenty-four hours, on each day of the week, including weekends and holidays.

:::reveal Why does a stop-payment window exist for a preauthorized transfer and not for an instant payment? ||| Because the right depends on there being an interval between agreeing to a payment and the payment happening, and an instant payment settles as it is sent.

:::reveal Where do you find your own institution's instant-payment participation, limits and hours? ||| In your own account documents, not in a general description of the service.

## Vocabulary
- **Instant payment**: a transfer processed and settled in near real time, at any hour on any day, rather than in a batch at a set window.
- **Gross settlement**: settling each transaction individually rather than netting many of them together at a scheduled time.
- **Irrevocability**: the property of a payment that cannot be recalled once sent, which rises as settlement time falls.
- **Window**: the interval between committing to a payment and its becoming final, which is what a stop-payment right operates inside.

## Sources
Board of Governors of the Federal Reserve System. (n.d.). *About the FedNow Service*. https://www.federalreserve.gov/paymentsystems/fednow_about.htm

12 CFR § 1005.10. (n.d.). *Preauthorized transfers*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/1005.10

12 CFR § 229.2. (n.d.). *Definitions*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/229.2`,
    },
    {
      slug: "quiz-the-rails",
      title: "16 · Knowledge check: the rails and their clocks",
      section: "Section 4 · The rails, and how fast each one runs",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "Which payment method has no clock at all between the two people involved?",
            options: ["Cash", "A check, because the payee holds a negotiable instrument from the moment it is written", "A wire transfer, because it is an unconditional order to pay upon receipt", "An instant payment, because it settles on a gross basis at any hour of any day"],
            correctIndex: 0,
            explanation: "Handing over currency is the payment. A clock starts only once the cash reaches a bank and the availability rules attach.",
            sourceLessonSlug: "six-rails-six-clocks",
          },
          {
            prompt: "What is a check, in the sense this lesson uses?",
            options: ["An order to pay, not the payment", "A transfer of funds that becomes final the moment the payee accepts the instrument", "A record of a payment already made between the drawer's bank and the payee's bank", "A guarantee by the drawer's bank that funds have been reserved for the payee"],
            correctIndex: 0,
            explanation: "Depositing one begins a collection process between two banks, and the availability schedule governs use of the money while that process runs.",
            sourceLessonSlug: "six-rails-six-clocks",
          },
          {
            prompt: "What is an ACH credit?",
            options: ["A push from the payer's side", "A pull initiated by the payee's bank under an authorization the consumer signed", "A reservation of funds placed against an account pending later settlement", "An unconditional order to pay a beneficiary upon receipt of the instruction"],
            correctIndex: 0,
            explanation: "The payer's bank sends money toward the payee, which is the form a payroll direct deposit takes.",
            sourceLessonSlug: "six-rails-six-clocks",
          },
          {
            prompt: "What is an ACH debit?",
            options: ["A pull from the payee's side", "A push originated by the payer's bank toward the account of the intended payee", "A charge-back of a provisional credit given for an item that was not finally paid", "A settlement entry made on the books of a single bank holding both accounts"],
            correctIndex: 0,
            explanation: "The payee's bank reaches into the payer's account under an authorisation, which is why Regulation E's preauthorized transfer rules apply to it.",
            sourceLessonSlug: "six-rails-six-clocks",
          },
          {
            prompt: "Where does Regulation CC say ACH rules come from?",
            options: ["An operating circular or an association's rules", "The Code of Federal Regulations, in the same part that carries the availability schedule", "The Uniform Commercial Code as enacted in the state where the originating bank sits", "A joint rulemaking issued by the federal banking agencies every five years"],
            correctIndex: 0,
            explanation: "The definition names a Federal Reserve Bank operating circular on automated clearinghouse items, or the rules of an automated clearinghouse association.",
            sourceLessonSlug: "six-rails-six-clocks",
          },
          {
            prompt: "Why does the lesson say the location of the ACH rules matters?",
            options: ["They are not the rules that say what a bank owes you", "Because an operating circular may override the availability schedule in Regulation CC", "Because a rulebook published by an association is unenforceable against a consumer", "Because the rules change on a five-year cycle set by the Expedited Funds Availability Act"],
            correctIndex: 0,
            explanation: "The rules that decide how fast an entry moves are a different kind of document from the rules that decide a bank's duties, which come from Regulation E and Regulation CC.",
            sourceLessonSlug: "six-rails-six-clocks",
          },
          {
            prompt: "Is an ACH debit covered by Regulation CC's next-day rule for electronic payments?",
            options: ["No", "Yes, because the definition names both debit and credit transfers processed by the facility", "Yes, but only where the debit originates at the same bank that holds the account", "Only where the debit exceeds the minimum availability amount for that banking day"],
            correctIndex: 0,
            explanation: "The definition names a wire transfer or an ACH credit transfer, so a debit falls outside it.",
            sourceLessonSlug: "six-rails-six-clocks",
          },
          {
            prompt: "How does Regulation CC define a wire transfer?",
            options: ["An unconditional order to pay upon receipt or a stated day", "A batched instruction settled at a fixed hour on each business day between banks", "A request that one bank collect a stated amount from another bank on a customer's behalf", "A provisional credit given by a bank pending final settlement with the paying bank"],
            correctIndex: 0,
            explanation: "The definition specifies an order to pay a fixed or determinable amount to a beneficiary, transmitted through Fedwire, CHIPS, a similar network, between banks, or on the books of a bank.",
            sourceLessonSlug: "six-rails-six-clocks",
          },
          {
            prompt: "Which word in the wire-transfer definition explains why a wire gets next-day availability?",
            options: ["Unconditional", "Electronic, because the availability rules favour transfers that avoid paper handling", "Beneficiary, because a named beneficiary removes any doubt about who is entitled", "Determinable, because a determinable amount can be verified before it is credited"],
            correctIndex: 0,
            explanation: "A wire is not a request that something be collected; it is an instruction to pay, which is why it sits alongside ACH credits in the rule.",
            sourceLessonSlug: "six-rails-six-clocks",
          },
          {
            prompt: "Which two networks does the wire-transfer definition name by name?",
            options: ["Fedwire and CHIPS", "The automated clearing house and the national settlement service operated by the Reserve Banks", "The card networks and the automated clearing house association's own rulebook", "The instant payment service and the check-processing office in Cleveland"],
            correctIndex: 0,
            explanation: "The definition names Fedwire, the Clearing House Interbank Payments System, other similar networks, transfers between banks, and transfers on the books of a bank.",
            sourceLessonSlug: "six-rails-six-clocks",
          },
          {
            prompt: "What two questions does the lesson say let you predict which rules apply to a payment?",
            options: ["Push or pull, and collect or pay", "How much it is for, and whether the two parties bank at the same institution", "Which day of the week it falls on, and whether that day is a federal holiday", "Whether it is recurring, and whether the payee is a business or an individual"],
            correctIndex: 0,
            explanation: "Answering those two predicts the applicable rules without memorising any speeds, which matters because speeds change and the categories do not.",
            sourceLessonSlug: "six-rails-six-clocks",
          },
          {
            prompt: "Which of these is NOT an electronic payment under Regulation CC's definition?",
            options: ["A card transaction", "A wire transfer sent between two banks through the Clearing House Interbank Payments System", "An automated clearing house credit transfer originated by an employer's payroll provider", "A wire transfer made on the books of a single bank holding both of the accounts"],
            correctIndex: 0,
            explanation: "A card transaction follows the authorisation-then-settlement pattern and is outside a definition that names only wires and ACH credits.",
            sourceLessonSlug: "six-rails-six-clocks",
          },
          {
            prompt: "What does U.C.C. 4-201(a) say about a settlement a collecting bank gives for an item?",
            options: ["It is provisional", "It is final at the moment the bank credits the customer's account with the amount", "It transfers ownership of the item from the customer to the collecting bank", "It binds the paying bank to honour the item when it is later presented"],
            correctIndex: 0,
            explanation: "Before the settlement is or becomes final, the bank is an agent or sub-agent of the owner of the item and any settlement given is provisional.",
            sourceLessonSlug: "provisional-until-it-is-not",
          },
          {
            prompt: "In what capacity does a collecting bank hold a deposited item, under U.C.C. 4-201(a)?",
            options: ["As agent or sub-agent of the owner", "As purchaser of the item for value, having given the customer a credit in exchange", "As guarantor of the item to the customer against the risk of the drawer's dishonor", "As bailee of the item, with no authority to present it without further instruction"],
            correctIndex: 0,
            explanation: "The bank is collecting the item for the customer, which is why the credit it gives is a placeholder pending an event that has not happened.",
            sourceLessonSlug: "provisional-until-it-is-not",
          },
          {
            prompt: "What does this lesson say availability actually amounts to, seen through the commercial code?",
            options: ["The bank letting you spend money it has not received", "The bank confirming that the paying bank has already settled the item in full", "The bank waiving its right to recover the amount if the item is dishonoured", "The bank converting a provisional credit into a final one on a fixed schedule"],
            correctIndex: 0,
            explanation: "The credit is provisional pending collection, so making funds available is an advance against an item that has not yet been finally paid.",
            sourceLessonSlug: "provisional-until-it-is-not",
          },
          {
            prompt: "What do the six Regulation CC exceptions look like when read through the provisional-credit idea?",
            options: ["Reasons to distrust an advance", "Penalties imposed on customers whose accounts have been managed carelessly", "Categories in which the bank may charge a higher fee for handling the deposit", "Situations in which the paying bank rather than the depositary bank bears the risk"],
            correctIndex: 0,
            explanation: "A new account has no history, a large deposit is a large advance, a redeposited check has failed once, and so on. Read that way, the six stop looking arbitrary.",
            sourceLessonSlug: "provisional-until-it-is-not",
          },
          {
            prompt: "What three things may a bank do under U.C.C. 4-214(a) if an item is not finally paid?",
            options: ["Revoke, charge back, or obtain refund", "Report the customer to a consumer reporting agency, close the account, or sue the drawer", "Extend the hold, invoke an exception, or notify the customer's other creditors", "Present the item again, hold the funds indefinitely, or transfer the loss to the payee"],
            correctIndex: 0,
            explanation: "It may revoke the settlement it gave, charge back the amount of any credit given to the customer's account, or obtain refund from its customer.",
            sourceLessonSlug: "provisional-until-it-is-not",
          },
          {
            prompt: "On what is the charge-back right conditioned?",
            options: ["Returning the item or notifying by the deadline", "Obtaining the customer's written consent before the credit is removed from the account", "Proving that the customer knew the item would not be honoured when it was deposited", "Waiting until the availability schedule for that deposit category has fully expired"],
            correctIndex: 0,
            explanation: "The bank must return the item or send notification by its midnight deadline or within a reasonable time after it learns the facts.",
            sourceLessonSlug: "provisional-until-it-is-not",
          },
          {
            prompt: "How does the lesson describe a charge-back?",
            options: ["A placeholder being removed", "A penalty assessed against the customer for depositing an item that was not honoured", "A reversal of the customer's legal right to the amount written on the instrument", "A transfer of the loss from the depositary bank to the paying bank's own customer"],
            correctIndex: 0,
            explanation: "The provisional credit was holding a place for an event, and the event did not occur, so the credit is removed.",
            sourceLessonSlug: "provisional-until-it-is-not",
          },
          {
            prompt: "What does this lesson call the most expensive confusion in the course?",
            options: ["Availability against finality", "The difference between a business day and a banking day when counting a hold", "The difference between an authorisation and the settlement that follows it later", "The difference between an ACH credit and an ACH debit for a recurring payment"],
            correctIndex: 0,
            explanation: "Regulation CC says when money may be used; the commercial code says when it is yours to keep, and the second answer can arrive later than the first.",
            sourceLessonSlug: "provisional-until-it-is-not",
          },
          {
            prompt: "Can funds released to you on schedule be charged back afterwards?",
            options: ["Yes, if the item was never paid", "No, because the availability schedule makes the credit final once the period expires", "No, unless the customer agreed in writing to the possibility when the account was opened", "Only if the bank invoked one of the six exceptions before making the funds available"],
            correctIndex: 0,
            explanation: "Nothing about the availability schedule makes a bad item good, because the two rules answer different questions.",
            sourceLessonSlug: "provisional-until-it-is-not",
          },
          {
            prompt: "Name the three clocks this lesson says run on a single check deposit.",
            options: ["Interest, availability, finality", "Authorisation, posting, settlement, which are the three moments of a payment leaving", "Deposit, presentment, and the midnight deadline for returning the item unpaid", "Cut-off hour, banking day, and business day, which are the three counting units"],
            correctIndex: 0,
            explanation: "When it earns, when you may spend it, and when it is finally yours are three different questions with three different answers.",
            sourceLessonSlug: "provisional-until-it-is-not",
          },
          {
            prompt: "What kind of event is the start of interest accrual, as this lesson classifies it?",
            options: ["A collection-side event", "A customer-side event, decided by when the customer is permitted to use the funds", "A regulatory event, fixed by the Expedited Funds Availability Act's own schedule", "A contractual event, set by the terms of the bank's own account agreement"],
            correctIndex: 0,
            explanation: "Interest begins not later than the business day the depositary bank receives credit for the funds, while availability is decided on the customer's side.",
            sourceLessonSlug: "provisional-until-it-is-not",
          },
          {
            prompt: "What does the lesson say the provisional-credit idea should give a reader?",
            options: ["A reading habit", "A strategy for deciding which deposits to make and which to avoid entirely", "A basis for demanding that a bank waive its charge-back right in advance", "A method for calculating the exact day a settlement will become final"],
            correctIndex: 0,
            explanation: "The course gives no financial advice. Knowing which question an availability statement answers is what keeps a person from being surprised twice by one check.",
            sourceLessonSlug: "provisional-until-it-is-not",
          },
          {
            prompt: "When did the Federal Reserve's instant payment service go live?",
            options: ["20 July 2023", "February 2010, when the Reserve Banks consolidated to a single check-processing office", "1 July 2025, when the Regulation CC dollar thresholds were most recently adjusted", "1 September 1990, the effective date printed in the availability schedule section"],
            correctIndex: 0,
            explanation: "The operator's own page records that date, and this course cites it and dates the reading at 28 August 2026.",
            sourceLessonSlug: "instant-and-irrevocable",
          },
          {
            prompt: "How long is the instant payment service's business day?",
            options: ["Twenty-four hours, every day", "The same as Regulation CC's, being a calendar day other than a weekend or named date", "From the opening of the Fedwire funds service until its close on each weekday", "From the bank's cut-off hour until the same hour on the following banking day"],
            correctIndex: 0,
            explanation: "The service has a 24-hour business day each day of the week, including weekends and holidays.",
            sourceLessonSlug: "instant-and-irrevocable",
          },
          {
            prompt: "What does the contrast between the two definitions of business day illustrate?",
            options: ["Defined terms must be read, not assumed", "That the instant payment service is exempt from the Expedited Funds Availability Act", "That Regulation CC's definition was amended when the service went live in 2023", "That a business day means whatever the operator of a payment system says it means"],
            correctIndex: 0,
            explanation: "The same two words carry opposite meanings in the two documents, which is why the course reads definitions rather than relying on ordinary usage.",
            sourceLessonSlug: "instant-and-irrevocable",
          },
          {
            prompt: "What does it mean that instant payments settle on a gross basis?",
            options: ["Each transaction settles individually", "Each transaction is netted against the others before a single settlement is made", "Each transaction settles for the full amount without deduction of any transfer fee", "Each transaction settles only after the receiving institution confirms the beneficiary"],
            correctIndex: 0,
            explanation: "Nothing waits for a batch window to open, because there is no window.",
            sourceLessonSlug: "instant-and-irrevocable",
          },
          {
            prompt: "What is the trade this lesson identifies?",
            options: ["Speed against the ability to change your mind", "Cost against reliability, since faster rails carry higher fees for the sender", "Availability against finality, since faster funds are finally settled later", "Convenience against privacy, since faster payments carry more identifying data"],
            correctIndex: 0,
            explanation: "A stop-payment right exists because there is an interval between agreeing to a payment and its happening. A payment that settles as it is sent has no such interval.",
            sourceLessonSlug: "instant-and-irrevocable",
          },
          {
            prompt: "Which right from Section 3 does the instant lesson set against instant settlement?",
            options: ["The three-business-day stop payment", "The ten-day notice owed when a recurring transfer will vary in amount", "The fourteen-day window for confirming an oral stop-payment notice in writing", "The two-business-day notice that a recurring credit did or did not arrive"],
            correctIndex: 0,
            explanation: "That right depends on an interval existing between the agreement and the payment, which is exactly what instant settlement removes.",
            sourceLessonSlug: "instant-and-irrevocable",
          },
          {
            prompt: "What question does the lesson tell you to ask before sending a payment?",
            options: ["Is there a window, and how long is it", "Which network will carry the payment between the two institutions involved", "Whether the receiving institution charges a fee for accepting the payment", "Whether the payment will be reported on the next periodic statement"],
            correctIndex: 0,
            explanation: "That question has a different answer for a check, a preauthorized debit, a card and an instant payment, and it is knowable before sending.",
            sourceLessonSlug: "instant-and-irrevocable",
          },
          {
            prompt: "Where does the course say to find your own institution's instant-payment limits and hours?",
            options: ["Your own account documents", "The operator's published description of the service and its national participant list", "The Federal Reserve operating circular governing the automated clearing house", "The specific availability policy disclosure the bank must supply on request"],
            correctIndex: 0,
            explanation: "It is the same answer the course gives about the cut-off hour and the availability policy, and for the same reason.",
            sourceLessonSlug: "instant-and-irrevocable",
          },
          {
            prompt: "What does the instant lesson refuse to do?",
            options: ["Name a service as good or bad", "Quote the operator's own description of how the service keeps time", "State the date on which the service began operating for participants", "Compare the service's business day with the one in Regulation CC"],
            correctIndex: 0,
            explanation: "The course does not tell a reader which rail to use. It tells them how to ask whether a window exists.",
            sourceLessonSlug: "instant-and-irrevocable",
          },
          {
            prompt: "Which of these does the instant lesson identify as changeable and therefore not asserted?",
            options: ["Which institutions offer the service", "The number of hours in the service's business day as the operator describes it", "The date the service went live, which the operator publishes on its own page", "The fact that the service settles each transaction rather than netting a batch"],
            correctIndex: 0,
            explanation: "Participation, limits and competing networks all change, so the lesson dates what it says, cites the operator for two facts, and stops.",
            sourceLessonSlug: "instant-and-irrevocable",
          },
          {
            prompt: "Which rail is a payroll direct deposit?",
            options: ["An ACH credit", "An ACH debit, because the employee's bank pulls the wages from the employer's account", "A wire transfer, because the employer orders its bank to pay a fixed amount", "An instant payment, because wages must be available on the stated payday"],
            correctIndex: 0,
            explanation: "The payer's side pushes the money toward the payee, which is what makes a direct deposit an electronic payment under Regulation CC.",
            sourceLessonSlug: "six-rails-six-clocks",
          },
          {
            prompt: "Which rail are most recurring bill payments?",
            options: ["ACH debits", "ACH credits, because the payer's bank pushes the money to the biller each month", "Wire transfers, because they are unconditional orders to pay on a stated day", "Instant payments, because the biller requires funds to settle on the due date"],
            correctIndex: 0,
            explanation: "The payee's bank pulls under an authorisation, which is why Regulation E's preauthorized transfer rules govern them.",
            sourceLessonSlug: "six-rails-six-clocks",
          },
          {
            prompt: "Which section of this course covers what happens while a check is being collected?",
            options: ["The provisional-credit lesson", "The lesson on the cut-off hour and when funds are considered deposited", "The lesson on instant payment and the twenty-four-hour business day", "The lesson on posting order and the arithmetic of insufficient balances"],
            correctIndex: 0,
            explanation: "Depositing a check begins a collection process, and the commercial code's provisional-settlement rule is what governs the credit during it.",
            sourceLessonSlug: "six-rails-six-clocks",
          },
          {
            prompt: "How does the lesson describe the categories of payment rail relative to their speeds?",
            options: ["Categories are stable, speeds are not", "Both change often enough that neither is worth teaching in a course of this kind", "Speeds are fixed by regulation while the categories are set by private rulebooks", "Categories change with each rulebook revision while speeds are set by statute"],
            correctIndex: 0,
            explanation: "That is why the lesson gives two questions rather than a table of speeds.",
            sourceLessonSlug: "six-rails-six-clocks",
          },
          {
            prompt: "A customer deposits a check and spends the funds on the day they become available. The item is later dishonoured. What may happen?",
            options: ["A charge-back", "Nothing, because the availability schedule extinguished the bank's right to recover", "The bank must pursue the drawer before it may recover anything from the depositor", "The paying bank absorbs the loss because it failed to return the item on time"],
            correctIndex: 0,
            explanation: "The credit was provisional. If the item is not finally paid, the bank may revoke the settlement, charge back the credit, or obtain a refund, within the code's deadlines.",
            sourceLessonSlug: "provisional-until-it-is-not",
          },
          {
            prompt: "Which of these best states why the availability schedule and the charge-back right can both be true at once?",
            options: ["They answer different questions", "One is federal and the other is state, so the federal rule takes precedence", "The schedule applies to consumers and the charge-back right applies to businesses", "The schedule applies before an item clears and the charge-back right applies after"],
            correctIndex: 0,
            explanation: "One governs when funds may be used and the other governs when the settlement becomes final.",
            sourceLessonSlug: "provisional-until-it-is-not",
          },
          {
            prompt: "What is a Federal Reserve Bank operating circular, as this section uses the term?",
            options: ["A Reserve Bank's own rulebook for a service", "A regulation issued jointly by the federal banking agencies under a statute", "A supervisory letter sent to examined institutions describing expected practices", "A published summary of the availability schedule prepared for consumers"],
            correctIndex: 0,
            explanation: "It is not a statute and is not published in the Code of Federal Regulations, which is precisely the point the ACH definition makes.",
            sourceLessonSlug: "six-rails-six-clocks",
          },
          {
            prompt: "Which of these payments is a bank being ordered to pay rather than asked to collect?",
            options: ["A wire transfer", "A check deposited by its payee at a bank other than the drawee bank", "A card transaction authorised at a merchant and settled some days later", "An ACH debit pulled by a biller under a preauthorized arrangement"],
            correctIndex: 0,
            explanation: "The definition calls a wire an unconditional order to a bank to pay upon receipt or on a day stated in the order.",
            sourceLessonSlug: "six-rails-six-clocks",
          },
          {
            prompt: "What does the phrase \"before the time that a settlement is or becomes final\" govern in U.C.C. 4-201(a)?",
            options: ["The period during which a credit is provisional", "The deadline by which a paying bank must return an item it has decided to dishonour", "The period during which a customer may stop payment on a check they have written", "The interval between a deposit being made and interest beginning to accrue on it"],
            correctIndex: 0,
            explanation: "Within that period the bank is an agent or sub-agent of the item's owner and the settlement it gave is provisional.",
            sourceLessonSlug: "provisional-until-it-is-not",
          },
          {
            prompt: "Which of the six exceptions does the provisional-credit reading describe as the judgement itself?",
            options: ["Reasonable cause to doubt collectibility", "New accounts, because a bank judges how much history an account needs to build", "Emergency conditions, because a bank judges whether a disruption is serious enough", "Repeated overdrafts, because a bank judges whether an account's record is acceptable"],
            correctIndex: 0,
            explanation: "The other five turn on countable facts about the account or the item; this one is the bank's assessment of an individual item's collectibility.",
            sourceLessonSlug: "provisional-until-it-is-not",
          },
          {
            prompt: "Why does the course treat the ACH rulebook differently from Regulation E?",
            options: ["One sets speeds, the other sets duties to you", "Because the rulebook is issued by Congress and the regulation by an agency", "Because the rulebook binds consumers directly and the regulation binds only banks", "Because the rulebook is revised annually and the regulation is revised every five years"],
            correctIndex: 0,
            explanation: "The consumer-facing protections in this course come from Regulation E and Regulation CC, not from any operating circular or association rulebook.",
            sourceLessonSlug: "six-rails-six-clocks",
          },
          {
            prompt: "What does the lesson mean by saying most people's intuitions about instant payment predate it?",
            options: ["The rail is recent", "That instant payments were common long before the operator's service went live", "That consumers have long been able to stop an instant payment after sending it", "That instant payment follows the same business-day calendar as older rails"],
            correctIndex: 0,
            explanation: "The service went live on 20 July 2023, and its twenty-four-hour business day breaks assumptions built on rails that close overnight.",
            sourceLessonSlug: "instant-and-irrevocable",
          },
          {
            prompt: "Which of these is a fact this lesson states about the instant payment service?",
            options: ["It settles in near real time at any hour", "It guarantees availability of funds by five in the afternoon on any business day", "It applies the same exception categories that Regulation CC applies to check holds", "It requires ten days' advance notice before a recurring payment may vary in amount"],
            correctIndex: 0,
            explanation: "The operator describes transfers in near real-time, at any time, any day of the year, settled on a gross basis.",
            sourceLessonSlug: "instant-and-irrevocable",
          },
          {
            prompt: "Which of these is the safest description of what this section adds to the course?",
            options: ["Different rails, different rules", "A single ranking of payment methods by the speed at which each of them settles", "A demonstration that all electronic payments are treated identically by federal law", "A method for calculating the exact settlement date of any payment in advance"],
            correctIndex: 0,
            explanation: "Which rules apply depends on whether money is pushed or pulled and whether a bank is collecting or paying, not on how electronic the payment feels.",
            sourceLessonSlug: "six-rails-six-clocks",
          },
          {
            prompt: "A customer asks why their bank held a large check from a new account. Which reading makes the answer coherent?",
            options: ["The credit was an advance", "The bank was penalising the customer for opening the account too recently", "The bank was required to hold the item until the paying bank confirmed payment", "The bank was applying the posting-order permission in the commercial code"],
            correctIndex: 0,
            explanation: "Both the new-account and large-deposit exceptions are about the risk of advancing funds against an item that has not been finally paid.",
            sourceLessonSlug: "provisional-until-it-is-not",
          },
          {
            prompt: "Which document does this lesson say explains the entire availability schedule, though it is not part of it?",
            options: ["The commercial code's provisional-settlement rule", "The Expedited Funds Availability Act's five-year inflation adjustment clause", "The Federal Reserve's description of the consolidation of check-processing regions", "Regulation E's rule on notice of preauthorized credits to a consumer account"],
            correctIndex: 0,
            explanation: "U.C.C. 4-201(a) states that a collecting bank's settlement is provisional, which is why an availability rule has to exist at all.",
            sourceLessonSlug: "provisional-until-it-is-not",
          },
          {
            prompt: "What is the relationship between the interest clock and the availability clock on one deposit?",
            options: ["They can start on different days", "They always start on the same day, because both are set by Regulation CC", "Interest always starts after availability, since funds must be usable to earn", "Availability always starts after interest by exactly two business days"],
            correctIndex: 0,
            explanation: "Interest starts when the bank receives credit for the funds, so money can be earning before it is spendable.",
            sourceLessonSlug: "provisional-until-it-is-not",
          },
          {
            prompt: "Which rail does the lesson say is outside the authorisation-then-settlement pattern?",
            options: ["Cash", "A card transaction, which settles at the moment the merchant obtains approval", "An ACH debit, which is charged to the payer's account before it is authorised", "A wire transfer, which reserves funds before the beneficiary's bank is instructed"],
            correctIndex: 0,
            explanation: "Handing over currency is the payment itself, with no reservation and no later settlement between institutions.",
            sourceLessonSlug: "six-rails-six-clocks",
          },
          {
            prompt: "How many rails does this section identify?",
            options: ["Six", "Three, being cash, check and electronic transfer of any description", "Ten, one for each category listed in Regulation CC's definitions section", "Two, being those that Regulation CC calls electronic payments and those it does not"],
            correctIndex: 0,
            explanation: "Cash, check, ACH credit, ACH debit, card, wire, and instant payment, with the last treated in its own lesson.",
            sourceLessonSlug: "six-rails-six-clocks",
          },
          {
            prompt: "What does the course say about the ability to stop a payment as settlement time falls?",
            options: ["It falls with it", "It rises, because faster systems keep more detailed records of each instruction", "It is unaffected, because the stop-payment right is fixed at three business days", "It is decided by the sending institution rather than by the design of the rail"],
            correctIndex: 0,
            explanation: "Speed and the ability to change your mind are two ends of the same measurement in the payment system.",
            sourceLessonSlug: "instant-and-irrevocable",
          },
          {
            prompt: "Which of these does the course present as the durable half of what it says about instant payment?",
            options: ["The operator's description of its own timekeeping", "The list of institutions currently participating in the service nationwide", "The maximum amount a participant may send in a single instant payment", "The comparison of the service with competing private instant networks"],
            correctIndex: 0,
            explanation: "The lesson uses two cited facts from the operator, dates the reading, and leaves participation and limits to a person's own account documents.",
            sourceLessonSlug: "instant-and-irrevocable",
          },
          {
            prompt: "Which idea from Section 1 does the instant payment lesson reach back to?",
            options: ["The definition of a business day", "The two-hour difference between cut-off hours at branches and at machines", "The rule that deposits at a night depository count on the day of removal", "The distinction between a bill paid late and a bill left unpaid entirely"],
            correctIndex: 0,
            explanation: "Regulation CC's business day is a calendar day other than a weekend or ten named dates; the service's is every day, and the same words mean opposite things.",
            sourceLessonSlug: "instant-and-irrevocable",
          },
          {
            prompt: "What does the phrase \"agent or sub-agent of the owner of the item\" tell a depositor?",
            options: ["The bank is collecting for them", "The bank has bought the item and now holds it for its own account", "The bank has guaranteed payment of the item to the depositor", "The bank may not present the item without further written instruction"],
            correctIndex: 0,
            explanation: "That agency relationship is why the credit is provisional and why a charge-back right exists at all.",
            sourceLessonSlug: "provisional-until-it-is-not",
          },
          {
            prompt: "A person receives an availability notice and assumes the money is now theirs to keep. Which distinction have they missed?",
            options: ["Use against finality", "Business day against banking day when counting the availability period", "Authorisation against posting when a payment leaves the account", "Push against pull when identifying which rail carried the payment"],
            correctIndex: 0,
            explanation: "Availability answers when funds may be used. Finality answers when the settlement stops being provisional, and the second can come later.",
            sourceLessonSlug: "provisional-until-it-is-not",
          },
          {
            prompt: "Which of these correctly pairs a rail with the rule set that governs a consumer's protections on it?",
            options: ["Recurring debit and Regulation E", "Payroll direct deposit and the automated clearing house association's own rulebook", "Check deposit and the Federal Reserve Bank operating circular for check services", "Wire transfer and the posting-order provision of the Uniform Commercial Code"],
            correctIndex: 0,
            explanation: "The authorisation, stop-payment and varying-amount rules for a preauthorized transfer come from Regulation E rather than from any rulebook.",
            sourceLessonSlug: "six-rails-six-clocks",
          },
          {
            prompt: "What is the effect of a rail having no settlement window?",
            options: ["Nothing waits for one to open", "Payments accumulate until the operator opens the next scheduled batch window", "Institutions must net their positions before any individual payment can settle", "The availability schedule in Regulation CC applies with an extra business day"],
            correctIndex: 0,
            explanation: "Each transaction is processed and settled individually in near real time, at any hour on any day.",
            sourceLessonSlug: "instant-and-irrevocable",
          },
          {
            prompt: "Why does the availability schedule exist at all, on this section's reading?",
            options: ["Because a deposited credit is provisional", "Because banks need time to verify the identity of the person making a deposit", "Because the Federal Reserve settles check items only once in each business day", "Because the depositary bank must obtain the drawer's consent before crediting"],
            correctIndex: 0,
            explanation: "The bank is collecting the item as the customer's agent, so a rule is needed to say how long it may wait before letting the customer use the advance.",
            sourceLessonSlug: "provisional-until-it-is-not",
          },
          {
            prompt: "Which of these correctly describes a bank's position when it accepts a check for deposit?",
            options: ["It is collecting, not buying", "It has purchased the instrument and bears the whole risk that it is dishonoured", "It has guaranteed the amount to the depositor irrespective of what follows", "It has settled with the paying bank before the credit reaches the account"],
            correctIndex: 0,
            explanation: "U.C.C. 4-201(a) makes the bank an agent or sub-agent of the item's owner until settlement is or becomes final.",
            sourceLessonSlug: "provisional-until-it-is-not",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5 — Pay frequency, and the dates you do not set
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "four-different-years",
      title: "17 · Weekly, biweekly, semimonthly, monthly: four different years",
      section: "Section 5 · Pay frequency, and the dates you do not set",
      body: `Ask how many times a year somebody is paid and you get four different answers, and two of them are routinely confused with each other.

**The counts.** Weekly is **52** paydays. Biweekly is **26**. Semimonthly is **24**. Monthly is **12**. Nothing here is contested and nothing here needs a citation: it is arithmetic, and it is the most load-bearing arithmetic in this course.

**Biweekly and semimonthly are not the same thing.** Both are loosely called "twice a month" and they differ by two paychecks a year. **Biweekly** means every fourteen days, so it is anchored to a weekday: 26 times 14 is 364, which is why a biweekly payday falls on the same day of the week forever and drifts one calendar day earlier each year, two after a leap day. **Semimonthly** means twice within each calendar month, so it is anchored to dates: the fifteenth and the last day, say, or the first and the sixteenth.

**Three consequences follow, and they are the whole reason this lesson exists.**

**First, the three-paycheck month.** Twenty-six paychecks spread across twelve months averages a little over two per month, so a biweekly schedule produces **two months each year with three paydays** and ten with two. Semimonthly never does: twenty-four across twelve is exactly two, every month, forever. The three-paycheck month is not extra money. The annual total is the same number divided into more pieces, and the only thing that has changed is which dates the pieces land on.

**Second, a monthly bill does not line up with a fortnightly wage.** Rent, a loan payment and a subscription are usually **12** events a year. A biweekly wage is **26**. Twenty-six does not divide evenly into twelve, so the number of paydays standing between one rent day and the next is not constant: sometimes two, sometimes three. **The relationship changes every month, by design, without anyone deciding anything.** Under a semimonthly schedule it does not change at all, because both the wage and the bill are anchored to dates.

**Third, the two schedules break in opposite ways.** A semimonthly payday is a **date**, so it lands on Saturdays, Sundays and holidays regularly, and something has to happen when it does. A biweekly payday is a **weekday**, so it never lands on a weekend, but it walks steadily around the month, so its distance from a bill due on the first is never the same twice in a row.

**Work one through, to make it concrete rather than abstract.** Take a bill due on the first of each month and a biweekly payday falling on Friday the 3rd of January. The next paydays are the 17th and the 31st of January, then the 14th and 28th of February. So the February bill has one payday between it and the January bill's payday, and by spring the pattern has shifted again. Nothing is wrong. Fourteen and thirty are simply not compatible numbers, and no amount of planning makes them compatible.

**What this course does with that, and what it refuses to do.** It refuses to tell you what to do about it, because **this course gives no financial advice** and does not know your obligations. What it does is give you the map: count your paydays for the next twelve months from your own schedule, count your dated obligations, and look at where the two lists sit relative to each other. That is a piece of arithmetic anybody can do once and reuse for a year, and Section 6 turns it into an exercise.

:::reveal How many paydays a year are weekly, biweekly, semimonthly and monthly schedules? ||| 52, 26, 24 and 12.

:::reveal Why does a biweekly schedule produce two three-paycheck months a year and a semimonthly schedule none? ||| Because 26 paydays across 12 months averages slightly more than two per month, while 24 across 12 is exactly two every month.

:::reveal Why does the number of paydays between one rent day and the next change under a biweekly schedule? ||| Because a fortnightly wage is 26 events a year and a monthly bill is 12, and 26 does not divide evenly into 12.

## Vocabulary
- **Biweekly**: paid every fourteen days, which is 26 times a year and anchored to a weekday.
- **Semimonthly**: paid twice within each calendar month, which is 24 times a year and anchored to dates.
- **Three-paycheck month**: a month containing three biweekly paydays, produced by the calendar rather than by extra pay.
- **Pay period**: the span of work a given payment covers, which is not the same thing as the date the payment arrives.

## Sources
Cal. Lab. Code § 204. (n.d.). *Payment of wages*. California Legislative Information, California Legislature. https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=LAB&sectionNum=204

29 CFR § 778.106. (n.d.). *Time of payment*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/29/778.106`,
    },
    {
      slug: "who-decides-how-often",
      title: "18 · Who decides how often you are paid",
      section: "Section 5 · Pay frequency, and the dates you do not set",
      body: `The number in the last lesson is not yours to choose, and it is usually not your employer's to choose freely either.

**Federal law assumes a regular pay day and does not set its frequency.** The wage-and-hour regulations put it this way, in a passage about overtime:

> "There is no requirement in the Act that overtime compensation be paid weekly. The general rule is that overtime compensation earned in a particular workweek must be paid on the regular pay day for the period in which such workweek ends." (29 CFR § 778.106, n.d.)

**Read what that sentence takes for granted.** It regulates payment **relative to** a regular pay day, which means it presumes one exists and says nothing about how often it comes around. The frequency question is answered somewhere else, and that somewhere is your state.

**California, as one worked example.** The Labor Code says wages earned by any person in any employment "are due and payable twice during each calendar month, on days designated in advance by the employer as the regular paydays" (Cal. Lab. Code § 204, n.d.). Then it fixes windows: labour performed between the 1st and the 15th is payable between the 16th and the 26th of that month, and labour between the 16th and the last day is payable between the 1st and the 10th of the following month. Certain salaried executive, administrative and professional employees covered by federal law may instead be paid monthly, on or before the 26th, if the whole month's compensation is paid then (Cal. Lab. Code § 204, n.d.).

**New York, as a second, because the two states answer differently.**

> "A manual worker shall be paid weekly and not later than seven calendar days after the end of the week in which the wages are earned" (N.Y. Lab. Law § 191, n.d.)

> "A clerical and other worker shall be paid the wages earned in accordance with the agreed terms of employment, but not less frequently than semi-monthly" (N.Y. Lab. Law § 191, n.d.)

**Notice what actually decides your frequency in New York: a category.** Manual worker and clerical and other worker are classifications, and which one you are in is a legal question about the job rather than a term either party negotiated. **That is the single most transferable point in this lesson.** In several states the answer to "how often must I be paid" begins with "what kind of worker are you", and the statute is where that is settled.

**Now look at what both statutes really regulate, which is a lag.** New York's manual-worker rule caps the distance between the end of the week worked and the payment at **seven calendar days**. California's windows allow up to roughly eleven days between the close of a half-month and the payday for it. **A pay period and a payday are two different things**, and the gap between them is a timing fact with a number attached, written in a statute you can open.

**And the method, because this course prints no fifty-state table.** Payday statutes differ in every direction: which frequency, which categories, how long the lag, what happens on a holiday, and what the penalty is. A table of fifty answers would be wrong somewhere within a year of publication and would go on being read anyway. So: **find your own state's payday statute, read the frequency, read the category it applies to, and read the maximum lag.** Those three facts are what feed the map in Section 6, and they come from one document.

:::reveal Does federal wage-and-hour law set how often an employee must be paid? ||| No. It regulates payment relative to a regular pay day and presumes one exists; frequency is set by state law.

:::reveal In New York, what decides whether an employee is paid weekly or semi-monthly? ||| The worker's statutory category. A manual worker is paid weekly, and a clerical and other worker not less frequently than semi-monthly.

:::reveal What three facts should you take from your own state's payday statute? ||| The required frequency, the category of worker it applies to, and the maximum lag between the end of the pay period and the payday.

## Vocabulary
- **Regular pay day**: the recurring date federal wage regulations assume exists and measure other duties against.
- **Payday statute**: the state law that fixes how often, and how soon after the work, wages must be paid.
- **Worker category**: a statutory classification, such as manual worker, that can decide which pay frequency applies.
- **Pay lag**: the interval between the end of a pay period and the payday for it, which several state statutes cap explicitly.

## Sources
29 CFR § 778.106. (n.d.). *Time of payment*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/29/778.106

Cal. Lab. Code § 204. (n.d.). *Payment of wages*. California Legislative Information, California Legislature. https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=LAB&sectionNum=204

N.Y. Lab. Law § 191. (n.d.). *Frequency of payments*. The New York State Senate. https://www.nysenate.gov/legislation/laws/LAB/191`,
    },
    {
      slug: "when-a-benefit-arrives",
      title: "19 · When a benefit arrives is a rule, not a courtesy",
      section: "Section 5 · Pay frequency, and the dates you do not set",
      body: `For millions of households the largest regular arrival is not a wage. It is a benefit payment, and its date is set by a published regulation you can read in two minutes.

**The rule, in the regulation's own words.**

> "Insured individuals born on the 1st through the 10th of the month will be paid on the second Wednesday of each month. Insured individuals born on the 11th through the 20th of the month will be paid on the third Wednesday of each month. Insured individuals born after the 20th of the month will be paid on the fourth Wednesday of each month." (20 CFR § 404.1807, n.d.)

**A date of birth decides a payment date.** Not a queue, not a processing order, not how early anyone applied. Three brackets, three Wednesdays, published in the Code of Federal Regulations, applying every month.

**And the second half handles the calendar.**

> "If the day regularly scheduled for the delivery of your benefit payment falls on a Saturday, Sunday, or Federal legal holiday, you will be paid on the first preceding day that is not a Saturday, Sunday, or Federal legal holiday." (20 CFR § 404.1807, n.d.)

**The first preceding day.** The payment moves **earlier**, not later, which is the opposite of what most people assume a calendar collision does.

**Now put that beside Section 1, because the two rules use different holiday lists.** This regulation says "Federal legal holiday", and the federal holidays are the eleven listed in the holiday statute, Juneteenth among them (5 U.S.C. § 6103, n.d.). Regulation CC, by contrast, counts business days against its own list of ten named dates that does not include June 19 (12 CFR § 229.2, n.d.). **Same calendar, two rules, two lists.** A June 19 that falls on a Wednesday therefore moves a benefit payment to the preceding day under one rule while still counting as a business day under the other. That is not a contradiction; it is two documents doing different jobs, and it is why the course keeps insisting you read the definition rather than the word.

**The point of this lesson is not the schedule. It is the property the schedule has.** A payment date fixed by a published rule and a birth date is **computable a year in advance** by anybody, with no phone call and no account access. Very few dates in an ordinary household's month have that property. Most arrivals depend on somebody else's processing, and most obligations depend on a due date somebody else chose.

**So the practical move is small and it is not advice.** Take the arrivals you can compute (a benefit date under a published rule, a semimonthly payday anchored to fixed dates, a biweekly payday anchored to a weekday) and separate them from the arrivals you cannot (an item still being collected, a variable commission, a reimbursement). **The first list is a calendar. The second is a forecast.** Treating a forecast as a calendar is where most timing trouble starts, and telling them apart costs nothing.

**One honest limit.** This lesson quotes one regulation about one programme's monthly payment day. Other programmes, other agencies and state-administered benefits have their own rules, and this course has not read them and will not guess at them. **The transferable skill is knowing that a published rule probably exists and going to find it**, which is the same move as finding your payday statute and your bank's availability policy.

:::reveal Under 20 CFR 404.1807, what decides which Wednesday a monthly benefit is paid on? ||| The day of the month of the birth date: the 1st through the 10th, the 11th through the 20th, or after the 20th.

:::reveal What happens when a scheduled benefit delivery day falls on a Saturday, Sunday or Federal legal holiday? ||| Payment moves to the first preceding day that is not one of those.

:::reveal What distinguishes the arrivals you can compute from the ones you cannot? ||| A computable arrival is fixed by a published rule or a fixed date, and everything else is a forecast rather than a calendar.

## Vocabulary
- **Monthly payment day**: the scheduled delivery date for a monthly benefit, assigned by birth-date bracket to one of three Wednesdays.
- **First preceding day**: the substitution rule that moves a payment earlier when its scheduled day falls on a weekend or Federal legal holiday.
- **Federal legal holiday**: the eleven days named in 5 U.S.C. 6103(a), which is a different list from Regulation CC's ten named dates.
- **Computable arrival**: a payment whose date can be worked out in advance from a published rule, as distinct from a forecast.

## Sources
20 CFR § 404.1807. (n.d.). *Monthly payment day*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/20/404.1807

5 U.S.C. § 6103. (n.d.). *Holidays*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/5/6103

12 CFR § 229.2. (n.d.). *Definitions*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/229.2`,
    },
    {
      slug: "quiz-pay-frequency",
      title: "20 · Knowledge check: pay frequency and benefit dates",
      section: "Section 5 · Pay frequency, and the dates you do not set",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "How many paydays a year does a biweekly schedule produce?",
            options: ["26", "24, the same as a semimonthly schedule paying twice within each calendar month", "52, because a payment falls in every week of the year on the same weekday", "12, because the payments average out to one for each month of the year"],
            correctIndex: 0,
            explanation: "Every fourteen days across a 365-day year gives 26, and 26 times 14 is 364, which is why the payday keeps its weekday.",
            sourceLessonSlug: "four-different-years",
          },
          {
            prompt: "How many paydays a year does a semimonthly schedule produce?",
            options: ["24", "26, the same as a schedule that pays once every fourteen days throughout the year", "52, because there are two payments in each of the twenty-six fortnights", "48, because four of the twelve months contain an additional payment date"],
            correctIndex: 0,
            explanation: "Twice within each calendar month is exactly two a month, every month, which is twenty-four across the year.",
            sourceLessonSlug: "four-different-years",
          },
          {
            prompt: "By how many paychecks a year do biweekly and semimonthly schedules differ?",
            options: ["Two", "None, because both are commonly described as paying an employee twice a month", "Four, because a biweekly schedule adds one extra payday in each quarter", "Twenty-six, because one schedule pays fortnightly and the other pays monthly"],
            correctIndex: 0,
            explanation: "Twenty-six against twenty-four. The same annual pay is simply divided into a different number of pieces.",
            sourceLessonSlug: "four-different-years",
          },
          {
            prompt: "What is a biweekly payday anchored to?",
            options: ["A weekday", "A calendar date, such as the fifteenth and the last day of each month", "The employer's month-end accounting close for the preceding pay period", "The first business day following the end of each fourteen-day pay period"],
            correctIndex: 0,
            explanation: "Every fourteen days is two whole weeks, so the payday keeps its day of the week and drifts one calendar day earlier each year.",
            sourceLessonSlug: "four-different-years",
          },
          {
            prompt: "What is a semimonthly payday anchored to?",
            options: ["Dates", "A weekday, so that the payment never falls on a Saturday or a Sunday", "The number of hours worked since the previous payment was issued", "The date the employer receives its own receipts for the period in question"],
            correctIndex: 0,
            explanation: "Twice within each calendar month means fixed dates, such as the fifteenth and the last day, which is why such a payday lands on weekends regularly.",
            sourceLessonSlug: "four-different-years",
          },
          {
            prompt: "How many three-paycheck months does a biweekly schedule produce in a year?",
            options: ["Two", "None, because a fortnightly schedule always produces exactly two paydays a month", "Four, one in each quarter, because twenty-six divides evenly into four groups", "Six, because half the months of the year contain an extra payment date"],
            correctIndex: 0,
            explanation: "Twenty-six across twelve months averages a little over two per month, so two months carry three paydays and ten carry two.",
            sourceLessonSlug: "four-different-years",
          },
          {
            prompt: "How many three-paycheck months does a semimonthly schedule produce?",
            options: ["None", "Two, matching the pattern that a fortnightly payment schedule produces each year", "One, in the month that contains an extra calendar day beyond the usual thirty", "Three, in each of the months that contain thirty-one days rather than thirty"],
            correctIndex: 0,
            explanation: "Twenty-four across twelve is exactly two, every month, forever.",
            sourceLessonSlug: "four-different-years",
          },
          {
            prompt: "What does the course say a three-paycheck month actually is?",
            options: ["The same total in more pieces", "Additional compensation the employer provides twice in each calendar year", "A correction for the two months in which only one payment was made", "Evidence that the employer has changed the pay frequency during the year"],
            correctIndex: 0,
            explanation: "The annual total is unchanged. Only the dates the pieces land on have changed.",
            sourceLessonSlug: "four-different-years",
          },
          {
            prompt: "Why does the number of paydays between one rent day and the next vary on a biweekly schedule?",
            options: ["26 does not divide evenly into 12", "Because rent is due on a different day of the week in each calendar month", "Because employers adjust the payday when a month contains thirty-one days", "Because the availability schedule delays some deposits by an extra business day"],
            correctIndex: 0,
            explanation: "A fortnightly wage is 26 events a year and a monthly bill is 12, so the relationship changes every month without anyone deciding anything.",
            sourceLessonSlug: "four-different-years",
          },
          {
            prompt: "In what way do the two schedules break in opposite directions?",
            options: ["One hits weekends, the other drifts through the month", "One produces three-paycheck months and the other produces three-bill months", "One is set by state law and the other is set by the employer's own policy", "One is anchored to the pay period and the other to the date wages are earned"],
            correctIndex: 0,
            explanation: "A semimonthly payday is a date, so it lands on weekends and holidays; a biweekly payday is a weekday, so it walks around the month instead.",
            sourceLessonSlug: "four-different-years",
          },
          {
            prompt: "In the worked example, a biweekly payday falls on Friday the 3rd of January. What are the next two paydays?",
            options: ["The 17th and the 31st", "The 15th and the 31st, because a fortnightly schedule tracks the middle and the end", "The 10th and the 17th, because a fortnightly schedule pays every seven days", "The 1st and the 15th of February, because the pattern resets each calendar month"],
            correctIndex: 0,
            explanation: "Fourteen days after the 3rd is the 17th and fourteen days after that is the 31st, after which the pattern continues into February.",
            sourceLessonSlug: "four-different-years",
          },
          {
            prompt: "What does the course say about the incompatibility of fourteen and thirty?",
            options: ["No amount of planning makes them compatible", "It disappears in months containing exactly twenty-eight days rather than thirty", "It can be corrected by asking an employer to move the payday to a fixed date", "It is the reason state payday statutes require semimonthly rather than fortnightly pay"],
            correctIndex: 0,
            explanation: "The numbers are simply not compatible, which is why the course frames the situation as a map to draw rather than a problem to fix.",
            sourceLessonSlug: "four-different-years",
          },
          {
            prompt: "What exercise does the pay-frequency lesson set instead of giving advice?",
            options: ["Count your paydays and your dated obligations", "Choose the pay frequency that produces the fewest gaps for your obligations", "Negotiate with your employer for a payday closer to your largest monthly bill", "Move each dated obligation to the day immediately following a payday"],
            correctIndex: 0,
            explanation: "Count both lists for the next twelve months and look at where they sit relative to each other. Section 6 turns that into the exercise.",
            sourceLessonSlug: "four-different-years",
          },
          {
            prompt: "Does federal wage-and-hour law set how often an employee must be paid?",
            options: ["No", "Yes, it requires payment at least semimonthly for all covered non-exempt employees", "Yes, it requires weekly payment for any employee who works overtime hours", "Only for employees whose wages are paid by direct deposit rather than by check"],
            correctIndex: 0,
            explanation: "The regulations presume a regular pay day exists and measure other duties against it, leaving frequency to state law.",
            sourceLessonSlug: "who-decides-how-often",
          },
          {
            prompt: "What does 29 CFR 778.106 say about when overtime compensation must be paid?",
            options: ["On the regular pay day for the period", "Within seven calendar days of the end of the workweek in which it was earned", "Weekly, separately from the employee's ordinary wages for the same period", "On the last business day of the month in which the overtime was worked"],
            correctIndex: 0,
            explanation: "The general rule is that overtime earned in a particular workweek must be paid on the regular pay day for the period in which that workweek ends.",
            sourceLessonSlug: "who-decides-how-often",
          },
          {
            prompt: "What does the federal overtime-timing rule take for granted?",
            options: ["That a regular pay day exists", "That every employer pays its employees at least once in each calendar week", "That the employee has agreed in writing to the frequency of payment", "That the state in which the work is performed has no payday statute"],
            correctIndex: 0,
            explanation: "It regulates payment relative to a regular pay day and says nothing about how often that day comes around.",
            sourceLessonSlug: "who-decides-how-often",
          },
          {
            prompt: "Under California Labor Code section 204, how often are wages generally due?",
            options: ["Twice during each calendar month", "Every fourteen days, on a weekday designated in advance by the employer", "Weekly, within seven calendar days of the end of the week worked", "Monthly, on or before the twenty-sixth day of the month in every case"],
            correctIndex: 0,
            explanation: "The statute requires payment twice during each calendar month, on days designated in advance by the employer as the regular paydays.",
            sourceLessonSlug: "who-decides-how-often",
          },
          {
            prompt: "Under California Labor Code section 204, when is labour performed between the 1st and the 15th payable?",
            options: ["Between the 16th and the 26th", "Between the 1st and the 10th of the following calendar month, after the period closes", "On the last day of the same month in which the labour was actually performed", "Within seven calendar days of the end of the half-month in which it was earned"],
            correctIndex: 0,
            explanation: "Labour between the 16th and the last day is payable between the 1st and the 10th of the following month.",
            sourceLessonSlug: "who-decides-how-often",
          },
          {
            prompt: "Which employees may California allow to be paid monthly on or before the 26th?",
            options: ["Certain salaried executive, administrative and professional employees", "Any employee who agrees in writing to a monthly rather than a semimonthly schedule", "Any employee whose entire compensation is paid by electronic direct deposit", "Any employee working fewer than twenty hours in each week of the month"],
            correctIndex: 0,
            explanation: "The exception applies to those covered employees where the whole month's compensation is paid on or before the 26th.",
            sourceLessonSlug: "who-decides-how-often",
          },
          {
            prompt: "Under New York Labor Law section 191, how often must a manual worker be paid?",
            options: ["Weekly", "Semi-monthly, on days designated in advance by the employer as regular paydays", "Every fourteen days, in line with the schedule most employers use nationally", "Monthly, provided the payment is made within seven days of the month's end"],
            correctIndex: 0,
            explanation: "A manual worker shall be paid weekly and not later than seven calendar days after the end of the week in which the wages are earned.",
            sourceLessonSlug: "who-decides-how-often",
          },
          {
            prompt: "Under New York Labor Law section 191, how often must a clerical and other worker be paid?",
            options: ["Not less frequently than semi-monthly", "Weekly, and not later than seven calendar days after the week the wages were earned", "Every fourteen days, on a weekday the employer designates in advance", "Monthly, in accordance with whatever terms of employment the parties agreed"],
            correctIndex: 0,
            explanation: "The statute says wages are paid in accordance with the agreed terms of employment, but not less frequently than semi-monthly.",
            sourceLessonSlug: "who-decides-how-often",
          },
          {
            prompt: "What decides which New York frequency rule applies to a given employee?",
            options: ["The worker's statutory category", "The frequency the employer and the employee agreed to when the job was offered", "The number of hours the employee works in a typical calendar week", "Whether the employee is paid by check or by electronic direct deposit"],
            correctIndex: 0,
            explanation: "Manual worker and clerical and other worker are classifications, and which one applies is a legal question about the job rather than a negotiated term.",
            sourceLessonSlug: "who-decides-how-often",
          },
          {
            prompt: "What does the course call the single most transferable point of the payday-statute lesson?",
            options: ["Frequency can turn on a worker category", "That every state requires payment at least twice in each calendar month", "That federal law overrides a state payday statute wherever the two conflict", "That an employer may set any frequency it discloses in advance in writing"],
            correctIndex: 0,
            explanation: "In several states the answer to how often you must be paid begins with what kind of worker you are, and the statute settles that.",
            sourceLessonSlug: "who-decides-how-often",
          },
          {
            prompt: "What do both worked payday statutes actually regulate, beyond frequency?",
            options: ["A lag", "The minimum wage payable for each hour worked during the pay period", "The method by which wages must be delivered to the employee", "The number of hours an employee may work before a payment becomes due"],
            correctIndex: 0,
            explanation: "New York caps the manual-worker lag at seven calendar days and California's windows allow roughly eleven days after a half-month closes.",
            sourceLessonSlug: "who-decides-how-often",
          },
          {
            prompt: "What is the distinction the lesson draws between a pay period and a payday?",
            options: ["One is the work covered, the other is the date paid", "One is set by state law and the other is set by the employer's own policy", "One applies to hourly employees and the other to salaried employees", "One is measured in calendar days and the other in business days"],
            correctIndex: 0,
            explanation: "The gap between them is a timing fact with a number attached, written in a statute anyone can open.",
            sourceLessonSlug: "who-decides-how-often",
          },
          {
            prompt: "Why does this course print no fifty-state table of payday rules?",
            options: ["It would be wrong somewhere within a year", "Because state payday statutes are not published in a form that can be quoted", "Because federal law preempts state payday statutes for most covered employers", "Because most states have adopted the same model payday statute already"],
            correctIndex: 0,
            explanation: "The statutes differ in frequency, categories, lag, holiday treatment and penalty, and a stale table goes on being read anyway.",
            sourceLessonSlug: "who-decides-how-often",
          },
          {
            prompt: "Which three facts does the course tell you to take from your own state's payday statute?",
            options: ["Frequency, category, maximum lag", "Minimum wage, overtime multiplier, and the deadline for a final paycheck", "The employer's registration number, the filing deadline, and the penalty schedule", "The definition of a business day, the cut-off hour, and the availability period"],
            correctIndex: 0,
            explanation: "Those three come from one document and are what feed the mapping exercise in Section 6.",
            sourceLessonSlug: "who-decides-how-often",
          },
          {
            prompt: "Under 20 CFR 404.1807, when is an insured individual born on the 5th of a month paid?",
            options: ["The second Wednesday", "The third Wednesday, which covers birth dates in the middle third of the month", "The fourth Wednesday, which covers birth dates after the twentieth", "The first Wednesday, which covers birth dates in the first ten days"],
            correctIndex: 0,
            explanation: "Those born on the 1st through the 10th are paid on the second Wednesday of each month.",
            sourceLessonSlug: "when-a-benefit-arrives",
          },
          {
            prompt: "Under 20 CFR 404.1807, when is an insured individual born on the 15th of a month paid?",
            options: ["The third Wednesday", "The second Wednesday, which covers birth dates in the first ten days of the month", "The fourth Wednesday, which covers birth dates falling after the twentieth", "The first Wednesday, because the middle bracket begins earlier in the month"],
            correctIndex: 0,
            explanation: "Those born on the 11th through the 20th are paid on the third Wednesday of each month.",
            sourceLessonSlug: "when-a-benefit-arrives",
          },
          {
            prompt: "Under 20 CFR 404.1807, when is an insured individual born on the 27th of a month paid?",
            options: ["The fourth Wednesday", "The second Wednesday, because the last bracket wraps back to the start of the month", "The third Wednesday, which covers every birth date from the eleventh onward", "The last banking day of the month, whatever day of the week that happens to be"],
            correctIndex: 0,
            explanation: "Those born after the 20th are paid on the fourth Wednesday of each month.",
            sourceLessonSlug: "when-a-benefit-arrives",
          },
          {
            prompt: "What decides the payment date under that regulation?",
            options: ["A date of birth", "The order in which applications for benefits were received by the agency", "The state in which the beneficiary resided when the claim was first approved", "The day of the month on which the first benefit payment was originally made"],
            correctIndex: 0,
            explanation: "Three brackets of birth dates map to three Wednesdays, published in the Code of Federal Regulations and applying every month.",
            sourceLessonSlug: "when-a-benefit-arrives",
          },
          {
            prompt: "What happens if the scheduled delivery day falls on a Saturday, Sunday or Federal legal holiday?",
            options: ["Payment moves to the first preceding day", "Payment moves to the next following day that is not one of those three", "Payment is made on the same day, since electronic delivery is unaffected", "Payment is deferred to the corresponding Wednesday of the following month"],
            correctIndex: 0,
            explanation: "The regulation says the first preceding day that is not a Saturday, Sunday or Federal legal holiday, so the payment moves earlier.",
            sourceLessonSlug: "when-a-benefit-arrives",
          },
          {
            prompt: "Which direction does the substitution rule move a benefit payment?",
            options: ["Earlier", "Later, to the first following weekday that is not a Federal legal holiday", "Either way, at the discretion of the agency administering the programme", "It does not move it, because payments are delivered on weekends as well"],
            correctIndex: 0,
            explanation: "That is the opposite of what most people assume a calendar collision does.",
            sourceLessonSlug: "when-a-benefit-arrives",
          },
          {
            prompt: "Which holiday list does the benefit-payment regulation use?",
            options: ["The Federal legal holidays", "Regulation CC's list of ten named dates excluded from business days", "A list published annually by the agency administering the benefit programme", "The holidays observed by the Federal Reserve Banks for settlement purposes"],
            correctIndex: 0,
            explanation: "It refers to a Federal legal holiday, and those are the eleven listed in 5 U.S.C. 6103(a), Juneteenth among them.",
            sourceLessonSlug: "when-a-benefit-arrives",
          },
          {
            prompt: "What does the comparison of the two holiday lists show?",
            options: ["Two rules, two lists, one calendar", "That the benefit regulation is inconsistent with the funds-availability regulation", "That Regulation CC must be read as incorporating the federal holiday statute", "That a Federal legal holiday can never be a business day under any federal rule"],
            correctIndex: 0,
            explanation: "A Wednesday June 19 moves a benefit payment earlier under one rule while still counting as a business day under the other, because the documents do different jobs.",
            sourceLessonSlug: "when-a-benefit-arrives",
          },
          {
            prompt: "What property of the benefit-payment schedule does the lesson say is the actual point?",
            options: ["It is computable a year ahead", "It guarantees that funds will be available on the morning of the payment day", "It gives the beneficiary a right to demand payment on an earlier date", "It applies identically to every federal and state benefit programme"],
            correctIndex: 0,
            explanation: "A date fixed by a published rule and a birth date can be worked out by anybody, with no phone call and no account access.",
            sourceLessonSlug: "when-a-benefit-arrives",
          },
          {
            prompt: "How does the lesson divide a household's expected arrivals?",
            options: ["Calendar against forecast", "Wages against benefits, because the two are governed by different bodies of law", "Electronic against paper, because the two clear on different schedules", "Recurring against one-off, because only recurring arrivals can be planned"],
            correctIndex: 0,
            explanation: "Arrivals fixed by a published rule or a fixed date are a calendar; everything else is a forecast, and treating a forecast as a calendar is where timing trouble starts.",
            sourceLessonSlug: "when-a-benefit-arrives",
          },
          {
            prompt: "Which of these does the lesson class as a forecast rather than a calendar?",
            options: ["A variable commission", "A semimonthly payday anchored to the fifteenth and the last day of the month", "A benefit payment date assigned by a published regulation and a birth date", "A biweekly payday anchored to a fixed weekday every fourteen days"],
            correctIndex: 0,
            explanation: "A commission, a reimbursement and an item still being collected all depend on somebody else's processing.",
            sourceLessonSlug: "when-a-benefit-arrives",
          },
          {
            prompt: "What limit does the benefit lesson state about its own scope?",
            options: ["It quotes one regulation about one programme", "It applies to every federal benefit but not to state-administered programmes", "It describes the schedule as it stood before the most recent statutory amendment", "It covers monthly payments only, and says nothing about how a payment is delivered"],
            correctIndex: 0,
            explanation: "Other programmes and agencies have their own rules, and the course has not read them and will not guess at them.",
            sourceLessonSlug: "when-a-benefit-arrives",
          },
          {
            prompt: "What does the lesson say is the transferable skill from the benefit-date rule?",
            options: ["Knowing a published rule probably exists", "Memorising the three birth-date brackets and the Wednesday each one maps to", "Calculating the availability period for a benefit payment once it is deposited", "Comparing the benefit schedule with the employer's own payroll calendar"],
            correctIndex: 0,
            explanation: "It is the same move as finding a payday statute or a bank's availability policy: go and find the document.",
            sourceLessonSlug: "when-a-benefit-arrives",
          },
          {
            prompt: "How many paydays a year does a weekly schedule produce?",
            options: ["52", "26, because a weekly schedule pays on alternate weeks through the year", "48, because four weeks in each of twelve months gives forty-eight payments", "24, matching the count produced by a semimonthly payment schedule"],
            correctIndex: 0,
            explanation: "One payment in each week of the year. The four counts in this lesson are 52, 26, 24 and 12.",
            sourceLessonSlug: "four-different-years",
          },
          {
            prompt: "How many paydays a year does a monthly schedule produce?",
            options: ["12", "24, because a monthly schedule pays twice in each calendar month by convention", "13, because a year contains thirteen four-week periods rather than twelve months", "26, because monthly and fortnightly schedules produce the same annual count"],
            correctIndex: 0,
            explanation: "One payment in each calendar month. It is the fourth of the four counts and the least common of them.",
            sourceLessonSlug: "four-different-years",
          },
          {
            prompt: "Why does a biweekly payday keep the same day of the week forever?",
            options: ["Fourteen days is two whole weeks", "Because employers are required by statute to designate a fixed weekday in advance", "Because payroll systems round the payment date to the nearest banking day", "Because a fortnight is defined in wage regulations as a fixed weekday interval"],
            correctIndex: 0,
            explanation: "Twenty-six times fourteen is 364, which is why the payday drifts one calendar day earlier each year and two after a leap day.",
            sourceLessonSlug: "four-different-years",
          },
          {
            prompt: "Which pay schedule regularly puts a payday on a Saturday or a Sunday?",
            options: ["Semimonthly", "Biweekly, because a fortnightly cycle passes through every day of the week", "Weekly, because the payday advances by one day in each successive week", "None of them, because payroll systems always move a payday to a weekday"],
            correctIndex: 0,
            explanation: "A semimonthly payday is a date, so it lands on weekends and holidays regularly and something has to happen when it does.",
            sourceLessonSlug: "four-different-years",
          },
          {
            prompt: "What does the course refuse to tell a reader in the pay-frequency lesson?",
            options: ["What to do about the mismatch", "How many paydays each of the four schedules produces in a year", "Which day of the week a fortnightly payday will fall on next year", "How a state payday statute defines the categories of worker it covers"],
            correctIndex: 0,
            explanation: "The course gives no financial advice and does not know a reader's obligations. It gives the map and the arithmetic.",
            sourceLessonSlug: "four-different-years",
          },
          {
            prompt: "Which document answers the question of how often you must be paid?",
            options: ["A state payday statute", "The federal wage-and-hour regulations, which fix a minimum national frequency", "The employer's payroll policy, which may set any frequency it chooses", "The account agreement with the bank that receives the direct deposit"],
            correctIndex: 0,
            explanation: "Federal law presumes a regular pay day and leaves frequency to the states, which answer differently from one another.",
            sourceLessonSlug: "who-decides-how-often",
          },
          {
            prompt: "New York caps the lag for a manual worker at how long?",
            options: ["Seven calendar days", "Eleven days, matching the outer limit of California's semimonthly payment windows", "Fourteen days, matching the interval between two fortnightly paydays", "Thirty calendar days from the end of the month in which the work was performed"],
            correctIndex: 0,
            explanation: "Payment is due weekly and not later than seven calendar days after the end of the week in which the wages are earned.",
            sourceLessonSlug: "who-decides-how-often",
          },
          {
            prompt: "Which of these is an accurate description of California's semimonthly windows?",
            options: ["Roughly eleven days after a half-month closes", "Payment on the last calendar day of the half-month in which the work was done", "Payment within seven calendar days of the end of each half-month period", "Payment on the first banking day following the close of each half-month"],
            correctIndex: 0,
            explanation: "The 1st through the 15th is payable between the 16th and the 26th, and the 16th through the last day between the 1st and the 10th of the next month.",
            sourceLessonSlug: "who-decides-how-often",
          },
          {
            prompt: "What is the effect of a payday statute naming categories of worker?",
            options: ["Classification decides the frequency", "The employer may choose whichever category produces the most convenient schedule", "The employee may elect a category when accepting the offer of employment", "The categories apply only to employees exempt from federal overtime rules"],
            correctIndex: 0,
            explanation: "Which category a job falls into is a legal question about the job, not a term either party negotiated.",
            sourceLessonSlug: "who-decides-how-often",
          },
          {
            prompt: "How does the course describe the relationship between the benefit rule and Section 1's counting rules?",
            options: ["Different documents doing different jobs", "A contradiction that one of the two rules will eventually have to resolve", "An indication that the benefit regulation takes precedence over Regulation CC", "Proof that federal holidays are counted identically across all federal rules"],
            correctIndex: 0,
            explanation: "The benefit rule uses the eleven Federal legal holidays and Regulation CC uses its own ten named dates, and both are correct within their own texts.",
            sourceLessonSlug: "when-a-benefit-arrives",
          },
          {
            prompt: "Which of these is a computable arrival, on the lesson's definition?",
            options: ["A benefit date under a published rule", "A reimbursement expected once an employer approves a submitted expense claim", "A check deposit whose availability depends on whether an exception is invoked", "A commission that varies with the volume of sales closed in the period"],
            correctIndex: 0,
            explanation: "A computable arrival is fixed by a published rule or a fixed date; the others depend on somebody else's processing.",
            sourceLessonSlug: "when-a-benefit-arrives",
          },
          {
            prompt: "Why does the course call the confusion of a forecast with a calendar expensive?",
            options: ["It is where most timing trouble starts", "Because a forecast is always later than the calendar date it was mistaken for", "Because a bank may charge a fee for relying on an estimated arrival date", "Because a forecast cannot be recorded on a payment map at all"],
            correctIndex: 0,
            explanation: "Telling the two apart costs nothing and prevents planning around an arrival nobody has promised on a date.",
            sourceLessonSlug: "when-a-benefit-arrives",
          },
          {
            prompt: "What does the pay-frequency lesson say needs no citation?",
            options: ["The four annual counts", "The category of worker that a state payday statute assigns to a given job", "The window within which California requires a half-month's wages to be paid", "The rule that moves a benefit payment when it falls on a weekend"],
            correctIndex: 0,
            explanation: "Fifty-two, twenty-six, twenty-four and twelve are arithmetic, and it is the most load-bearing arithmetic in the course.",
            sourceLessonSlug: "four-different-years",
          },
          {
            prompt: "A worker is paid biweekly and rent is due on the first. What does the course say about the number of paydays between successive rent days?",
            options: ["It is not constant", "It is always two, because a fortnightly schedule produces two paydays a month", "It is always three, because a month is longer than two fourteen-day periods", "It depends on whether the bank treats the payday as a business day"],
            correctIndex: 0,
            explanation: "Sometimes two and sometimes three, and the relationship changes every month by design without anyone deciding anything.",
            sourceLessonSlug: "four-different-years",
          },
          {
            prompt: "What does the course say a semimonthly schedule does to the payday-to-bill relationship?",
            options: ["It does not change it", "It changes it every month, because dates fall on different weekdays each time", "It changes it twice a year, in the months containing an extra payday", "It changes it whenever the bill's due date falls on a weekend or holiday"],
            correctIndex: 0,
            explanation: "Both the wage and the bill are anchored to dates, so the relationship between them stays fixed.",
            sourceLessonSlug: "four-different-years",
          },
          {
            prompt: "Which of these best describes what a payday statute is, in this course's terms?",
            options: ["A mechanism with a number in it", "A voluntary standard that most employers within a state have agreed to follow", "A federal rule administered separately by each state's labour department", "A summary of the terms an employer must include in an employment contract"],
            correctIndex: 0,
            explanation: "It has a frequency, a category and a lag, all stated in a document a person can open, which is exactly why timing is teachable and budgeting is not.",
            sourceLessonSlug: "who-decides-how-often",
          },
          {
            prompt: "How does a benefit-payment schedule differ from most arrivals in a household's month?",
            options: ["It does not depend on anyone's processing", "It arrives on the same weekday as the recipient's biweekly payroll deposit", "It is guaranteed to be available for withdrawal on the day it is delivered", "It may be moved at the recipient's request to a more convenient date"],
            correctIndex: 0,
            explanation: "Most arrivals depend on somebody else's processing and most obligations on a due date somebody else chose. A published rule plus a birth date is neither.",
            sourceLessonSlug: "when-a-benefit-arrives",
          },
          {
            prompt: "Which two anchors does this section identify for a payday?",
            options: ["A weekday or a date", "A pay period or a bank's cut-off hour for receiving deposits", "A statute or an employer's internal payroll policy document", "A calendar month or a fourteen-day accounting cycle"],
            correctIndex: 0,
            explanation: "Biweekly is anchored to a weekday and semimonthly to dates, and every consequence in the lesson follows from that difference.",
            sourceLessonSlug: "four-different-years",
          },
          {
            prompt: "What must a semimonthly payroll system have a rule for that a biweekly one does not?",
            options: ["A payday landing on a weekend", "A month in which three paydays fall rather than the usual two", "A pay period that begins and ends on different days of the week", "A payday that drifts one calendar day earlier in each successive year"],
            correctIndex: 0,
            explanation: "A date-anchored payday lands on Saturdays, Sundays and holidays regularly, so something has to happen when it does.",
            sourceLessonSlug: "four-different-years",
          },
          {
            prompt: "Which of these does the course treat as the durable half of what it says about pay frequency?",
            options: ["The arithmetic", "The proportion of employers nationally that use each of the four schedules", "The list of states that require weekly payment for manual workers", "The typical lag between a pay period and a payday across the country"],
            correctIndex: 0,
            explanation: "The counts are arithmetic and do not go stale, while statutes and distributions do, which is why the course teaches where to find those instead.",
            sourceLessonSlug: "four-different-years",
          },
          {
            prompt: "What is a pay period, as this section uses the term?",
            options: ["The span of work a payment covers", "The interval between the date a payment is issued and the date it clears the bank", "The number of days a state statute allows before wages become legally overdue", "The calendar month in which an employee's wages are reported for tax purposes"],
            correctIndex: 0,
            explanation: "It is not the same thing as the date the payment arrives, and the gap between the two is what the payday statutes cap.",
            sourceLessonSlug: "four-different-years",
          },
          {
            prompt: "Which of these is the clearest reason a benefit payment date is easier to plan around than a wage?",
            options: ["It is published as a rule", "It is always larger than a wage payment and therefore easier to track", "It is delivered by a rail that settles instantly on any day of the year", "It is exempt from the availability schedule that applies to deposits generally"],
            correctIndex: 0,
            explanation: "A regulation plus a birth date can be computed by anybody a year ahead, with no phone call and no account access.",
            sourceLessonSlug: "when-a-benefit-arrives",
          },
          {
            prompt: "Why does the course pair the California and New York statutes rather than quoting one?",
            options: ["They answer the same question differently", "Because the two states together cover a majority of the national workforce", "Because federal law requires every other state to follow one of the two models", "Because both were enacted in the same year and use identical definitions"],
            correctIndex: 0,
            explanation: "One fixes windows around half-months for everyone; the other fixes frequency by worker category. Seeing both is what shows there is no national answer.",
            sourceLessonSlug: "who-decides-how-often",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 6 — Mapping it, and what recourse exists
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "build-the-map",
      title: "21 · Build the map: the dates in, the dates out, and the gap",
      section: "Section 6 · Mapping it, and what recourse exists",
      body: `Everything in the first five sections was somebody else's rule. This lesson turns them into one page about you.

**Say the boundary again before starting, because it matters most here. This course gives no financial advice.** What follows is not a plan, a budget or a recommendation. It is a way of writing down what is already true, so that things you were guessing about become things you can look up. **The map does not tell you what to do. It converts unknowns into knowns**, and what you do afterwards is yours.

**Step one: list the arrivals, and beside each one write the rule that fixes its date.** A wage has two rules behind it, the employer's schedule and the state payday statute that constrains it, and Section 5 told you which three facts to take from the statute. A benefit under a published payment-day rule has one. A deposit you make yourself has none until you make it, at which point Section 2 applies.

**Step two: list the obligations, and beside each one write who chose the date.** Almost every one was chosen by somebody else: a lease, a loan, a subscription, a utility cycle. That is worth writing down explicitly, because it is the fact that makes the gap structural rather than personal.

**Step three: for each arrival, write the date it becomes usable, not the date it lands.** These differ, and Section 2 is how you tell. A payroll direct deposit is an ACH credit, so the next-day rule for electronic payments reaches it. A check you deposit runs on the schedule that fits its category, adjusted for the cut-off hour and the place of deposit. **Write the usable date**, because that is the one an obligation can actually be met from.

**Step four: for each outgoing, write which of the three moments you can see, and whether a window exists.** A preauthorized electronic debit has a stop-payment window of at least three business days before the scheduled date, and a varying amount carries a ten-day notice (12 CFR § 1005.10, n.d.). A card authorisation and its later posting are two dates. An instant payment has no window at all. **A window is a fact about the rail, and it is knowable before you send.**

**Step five: mark where a usable date falls after an obligation date.** That is the gap, and now it has a length in days, a cause you can name, and in some cases a rule attached to it. A gap caused by a cut-off hour is a different object from a gap caused by a pay lag, which is a different object again from a gap caused by twenty-six not dividing into twelve.

**What the map is good for, stated without overclaiming.** It answers questions of the form "when", and it answers them from documents rather than from memory. It does not create money and it does not resolve a shortfall. **A timing map and a shortfall are different problems**, and the most useful thing this course can do is let you see which one you have, because the second one is not something a schedule can fix.

**Do it once and it lasts about a year.** Payday anchors, benefit payment days and statutory frequencies do not change often. Availability policies and cut-off hours do change, and Section 6's next lesson names the rule that requires your bank to tell you before they do.

:::reveal What does the map do, and what does it explicitly not do? ||| It converts unknowns into knowns by writing down dates from documents. It does not tell you what to do and does not resolve a shortfall.

:::reveal For each arrival, which date does the map record? ||| The date the money becomes usable, not the date it lands, because that is the date an obligation can actually be met from.

:::reveal What is the difference between a timing map and a shortfall? ||| A timing map answers when. A shortfall is an amount problem, and no schedule fixes it.

## Vocabulary
- **Usable date**: the date deposited money may actually be spent, as distinct from the date it reached the bank.
- **Obligation date**: a payment date chosen by another party, such as a lease, a loan or a utility cycle.
- **Window**: the interval, if any, during which a scheduled payment can still be stopped.
- **Structural gap**: a shortfall in timing produced by two schedules set independently, rather than by any decision the account holder made.

## Sources
12 CFR § 1005.10. (n.d.). *Preauthorized transfers*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/1005.10

12 CFR § 229.12. (n.d.). *Availability schedule*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/229.12`,
    },
    {
      slug: "violation-or-just-the-rule",
      title: "22 · What is a violation, and what is merely the rule",
      section: "Section 6 · Mapping it, and what recourse exists",
      body: `Two things can both feel unfair and only one of them is a breach of anything. Telling them apart decides where a complaint goes and whether it goes anywhere.

**Where money coming in is concerned, there is a duty, a document and a remedy.**

**The document first.** A bank must give a specific availability policy disclosure describing when funds deposited in an account are available for withdrawal, and its content is prescribed: a summary of the policy, the categories of deposit that cause delay and when each becomes available, a description of the exceptions in the exceptions section, the case-by-case delay policy, and how to tell a proprietary machine from a nonproprietary one where that matters (12 CFR § 229.16, n.d.).

**And here is the sentence people do not know.** A bank must provide the disclosure "to any person, upon oral or written request" (12 CFR § 229.18, n.d.). **Any person.** You need not hold an account to read a bank's availability policy before opening one.

**Changes are noticed too.** A bank must send notice to consumer accountholders at least **thirty days before** implementing a change to its availability policy, except that a change which expedites availability may be disclosed not later than thirty days **after** it takes effect (12 CFR § 229.18, n.d.). Slower needs warning; faster does not.

**Now the fee rule, which is the sharpest consumer-facing sentence in Regulation CC.** A bank that delays availability on a case-by-case basis and does not give the depositor written notice at the time of deposit:

> "shall not assess any fees for any subsequent overdrafts (including use of a line of credit) or return of checks or other debits to the account, if—(i) The overdraft or return of the check or other debit would not have occurred except for the fact that the deposited funds were delayed . . . and (ii) The deposited check was paid by the paying bank." (12 CFR § 229.16, n.d.)

**Read both conditions.** The delay has to be the but-for cause, and the check has to have actually been good. Where both hold and the notice was missing, the fees are not to be assessed.

**And there is a liability provision, with numbers.** A bank that fails to comply with a requirement of the funds-availability subpart is liable for any actual damage sustained, plus, in an individual action, "not less than $125 nor greater than $1,350"; in a class action the total is capped at "the lesser of $672,950 or 1 percent of the net worth of the bank involved"; plus costs and a reasonable attorney's fee in a successful action (12 CFR § 229.21, n.d.). Read on 28 August 2026, and these are among the amounts the five-year adjustment moves. **An action must be brought within one year of the occurrence of the violation** (12 CFR § 229.21, n.d.).

**Now the other side, and the contrast is the lesson.** Posting order has no schedule, no notice, no stated reason and no analogous remedy. The commercial code permits any order (U.C.C. § 4-303, n.d.). So a person unhappy about sequencing is not describing a breach of the availability rules, and filing it as one leads nowhere.

**What exists instead is measurement.** Truth in Savings requires a periodic statement to separately disclose the total dollar amount of fees imposed for paying overdrafts, using the term "Total Overdraft Fees", and the total for returning items unpaid, for the statement period **and** the calendar year to date (12 CFR § 1030.11, n.d.). That is a number, produced by rule, on a document you already receive.

**So the operative question is always: which rule was engaged?** A late availability is a schedule question with a remedy. A missing exception notice is a notice question with a fee consequence. A sequencing outcome is a measurement question and a comparison between institutions. **Naming the right one is the whole skill**, and it is the last thing this course teaches before the capstone. **None of this is legal advice and none of it is financial advice**; it is where the rules are, so a person can read them and decide for themselves.

:::reveal Who may request a bank's specific availability policy disclosure? ||| Any person, on oral or written request, whether or not they hold an account there.

:::reveal What two conditions must hold before the missing-notice fee rule bites? ||| The overdraft or return would not have occurred but for the delay, and the deposited check was paid by the paying bank.

:::reveal How long does a person have to bring an action for a funds-availability violation? ||| One year after the date of the occurrence of the violation.

## Vocabulary
- **Specific availability policy disclosure**: the prescribed document describing when a bank makes deposits available, which any person may request.
- **Case-by-case delay**: a bank holding funds longer than its stated policy in a particular instance, which triggers a written-notice duty.
- **Statutory damages**: the fixed range a court may award for a violation independent of proven loss, adjusted on the same five-year cycle as the thresholds.
- **Total Overdraft Fees**: the term Truth in Savings requires on a periodic statement for the total of fees imposed for paying overdrafts.

## Sources
12 CFR § 229.16. (n.d.). *Specific availability policy disclosure*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/229.16

12 CFR § 229.18. (n.d.). *Additional disclosure requirements*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/229.18

12 CFR § 229.21. (n.d.). *Civil liability*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/229.21

12 CFR § 1030.11. (n.d.). *Additional disclosure requirements for overdraft services*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/1030.11

U.C.C. § 4-303. (n.d.). *When items subject to notice, stop-payment order, legal process, or setoff; order in which items may be charged or certified*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/ucc/4/4-303`,
    },
    {
      slug: "read-your-own-calendar",
      title: "23 · Capstone: read your own calendar",
      section: "Section 6 · Mapping it, and what recourse exists",
      body: `Every course in this series ends by having you run its machinery once, on your own record. Here is this one's.

**Before anything else, the boundary, for the third and last time. This course is not financial advice and this capstone is not a plan.** Nothing below tells you what to spend, what to pay first, how much to hold back, which bank or payroll schedule to prefer, or whether to complain about anything. It is a document-gathering exercise. What you conclude from the documents is yours.

**Collect five documents. Each one is named, and each one has a rule behind it.**

**One. Your bank's specific availability policy disclosure.** Ask for it. The regulation requires a bank to provide it "to any person, upon oral or written request" (12 CFR § 229.18, n.d.). Read out of it: the cut-off hour, which categories of deposit are delayed and for how long, and how the bank describes its case-by-case delays.

**Two. Your account agreement's balance definitions.** Regulation CC's own definition of available funds refers to uses permitted "under the bank's account agreement or policies" (12 CFR § 229.2, n.d.), so the meaning of available balance and ledger balance lives there. Find both and note which one your app displays.

**Three. Your state's payday statute.** Section 5 named the three facts to extract: the required frequency, the category of worker it applies to, and the maximum lag between the end of a pay period and the payday.

**Four. Your own pay calendar for the next twelve months.** If you are paid biweekly, one anchor date generates the whole year at fourteen-day intervals, and you will find your two three-paycheck months. If semimonthly, write the two dates and mark every one that falls on a weekend. If you receive a benefit under a published payment-day rule, compute those dates too and apply the preceding-day substitution (20 CFR § 404.1807, n.d.).

**Five. Your most recent periodic statement, for two lines.** The total labelled "Total Overdraft Fees" and the total for returned items, both of which Truth in Savings requires for the statement period and the calendar year to date (12 CFR § 1030.11, n.d.). Also list your preauthorized debits and the date each is scheduled.

**Then answer five questions in writing.** What is my bank's cut-off hour, and how many of my deposits arrive after it? For each recurring arrival, on what date does it become usable rather than merely land? For each recurring obligation, how many days separate it from the nearest preceding usable date? Which of my outgoing payments still has a stop-payment window, and how long is it? And, for the year ahead, in which months does an obligation fall before any usable arrival?

**What you will have at the end.** Not a budget, not a plan and not a recommendation, because this course does not make those. **A calendar built from primary documents**, in which every date is traceable to a rule you have read, and in which the gaps are visible in advance rather than discovered afterwards.

**And one habit to keep after the course ends.** When a date surprises you, ask which document set it. In this domain the answer is nearly always a specific one: a definition of business day, a cut-off hour, an availability category, a posting sequence, a statutory pay lag, or a published payment day. **A surprise you can name is a surprise that can only happen to you once.**

:::reveal Which rule lets you obtain a bank's availability policy disclosure before you are a customer? ||| The additional-disclosure rule, which requires a bank to provide it to any person on oral or written request.

:::reveal Which two totals does Truth in Savings require on a periodic statement, and over what periods? ||| Total overdraft fees and total returned-item fees, for the statement period and the calendar year to date.

:::reveal What is the habit the capstone asks you to keep after the course? ||| When a date surprises you, ask which document set it, because in this domain the answer is nearly always one specific rule.

## Vocabulary
- **Anchor date**: one known payday from which an entire biweekly year can be generated at fourteen-day intervals.
- **Document-gathering exercise**: a capstone that produces a record from primary sources rather than a plan or a recommendation.
- **Traceable date**: a date on a personal calendar that can be tied back to a specific rule the learner has read.

## Sources
12 CFR § 229.18. (n.d.). *Additional disclosure requirements*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/229.18

12 CFR § 229.2. (n.d.). *Definitions*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/229.2

12 CFR § 1030.11. (n.d.). *Additional disclosure requirements for overdraft services*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/1030.11

20 CFR § 404.1807. (n.d.). *Monthly payment day*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/20/404.1807`,
    },
    {
      slug: "quiz-mapping-and-recourse",
      title: "24 · Knowledge check: the map, and what recourse exists",
      section: "Section 6 · Mapping it, and what recourse exists",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What does the mapping lesson say the map does?",
            options: ["Converts unknowns into knowns", "Produces a spending plan for the twelve months following the exercise", "Identifies which of a household's obligations should be paid first each month", "Calculates the size of the buffer a household needs to avoid an overdraft"],
            correctIndex: 0,
            explanation: "It writes down what is already true so guesses become things that can be looked up. What a person does afterwards is theirs.",
            sourceLessonSlug: "build-the-map",
          },
          {
            prompt: "In step one of the map, what goes beside each arrival?",
            options: ["The rule that fixes its date", "The amount expected, rounded to the nearest whole dollar for comparison", "The institution that will receive it and the account number it will land in", "The number of days it has been late in each of the preceding twelve months"],
            correctIndex: 0,
            explanation: "A wage has two rules behind it, the employer's schedule and the state payday statute; a benefit under a published payment-day rule has one.",
            sourceLessonSlug: "build-the-map",
          },
          {
            prompt: "In step two, what does the map record beside each obligation?",
            options: ["Who chose the date", "Whether the obligation is fixed or variable in amount from month to month", "Which payment rail the obligation will travel on when it is paid", "The penalty the creditor charges when the payment arrives after the due date"],
            correctIndex: 0,
            explanation: "Almost every obligation date was chosen by somebody else, and writing that down is what makes the gap structural rather than personal.",
            sourceLessonSlug: "build-the-map",
          },
          {
            prompt: "In step three, which date does the map record for each arrival?",
            options: ["The date it becomes usable", "The date the payer initiated it from their own account at their own bank", "The date it appears on the periodic statement the bank issues each cycle", "The date the depositary bank receives credit for the funds from another bank"],
            correctIndex: 0,
            explanation: "The landing date and the usable date differ, and only the usable date is one an obligation can be met from.",
            sourceLessonSlug: "build-the-map",
          },
          {
            prompt: "In step four, what does the map record for each outgoing payment?",
            options: ["Which moments are visible and whether a window exists", "The identity of the payee and the contract term that created the obligation", "The fee the institution charges for sending the payment on that rail", "Whether the payment is larger than the minimum availability amount"],
            correctIndex: 0,
            explanation: "A preauthorized debit has a stop-payment window of at least three business days; a card authorisation and its posting are two dates; an instant payment has no window.",
            sourceLessonSlug: "build-the-map",
          },
          {
            prompt: "What does step five of the map identify?",
            options: ["A usable date falling after an obligation date", "The total of all obligations falling due in each calendar month of the year", "The months in which three biweekly paydays fall rather than two", "The proportion of income committed to fixed rather than variable obligations"],
            correctIndex: 0,
            explanation: "That is the gap, and it then has a length in days, a nameable cause, and in some cases a rule attached to it.",
            sourceLessonSlug: "build-the-map",
          },
          {
            prompt: "Which three causes of a gap does the mapping lesson distinguish?",
            options: ["A cut-off hour, a pay lag, and an arithmetic mismatch", "A bank error, a payroll error, and a creditor error in the same month", "An overdraft, a returned item, and a fee charged against the account", "A holiday, a weekend, and a scheduled maintenance window at the bank"],
            correctIndex: 0,
            explanation: "A gap caused by a cut-off hour is a different object from a pay lag, which is different again from twenty-six not dividing into twelve.",
            sourceLessonSlug: "build-the-map",
          },
          {
            prompt: "What distinction does the mapping lesson call the most useful thing the course can offer?",
            options: ["A timing map against a shortfall", "A wage against a benefit as a source of a household's regular income", "A federal rule against a state rule where the two govern the same account", "An electronic payment against a paper item under the availability schedule"],
            correctIndex: 0,
            explanation: "A timing map answers when. A shortfall is an amount problem, and no schedule fixes it.",
            sourceLessonSlug: "build-the-map",
          },
          {
            prompt: "How long does the mapping lesson say the map lasts?",
            options: ["About a year", "One statement cycle, after which every figure in it must be recalculated", "Indefinitely, because the rules it is built from do not change at all", "Thirty calendar days, matching the notice period for an availability change"],
            correctIndex: 0,
            explanation: "Payday anchors, benefit payment days and statutory frequencies change rarely, while availability policies and cut-off hours can change with notice.",
            sourceLessonSlug: "build-the-map",
          },
          {
            prompt: "Which payment does the map record as having no stop-payment window?",
            options: ["An instant payment", "A preauthorized electronic debit scheduled for a date more than a week ahead", "A card transaction authorised at a merchant and posted several days later", "A check deposited at a branch before the bank's stated cut-off hour"],
            correctIndex: 0,
            explanation: "A payment that settles as it is sent leaves no interval for a stop-payment right to operate inside.",
            sourceLessonSlug: "build-the-map",
          },
          {
            prompt: "What must a specific availability policy disclosure contain, among other things?",
            options: ["Which deposits are delayed and for how long", "The name of the bank's primary federal supervisor and its examination schedule", "The total fees the bank collected for paying overdrafts in the preceding year", "The routing numbers of every Federal Reserve Bank the institution uses"],
            correctIndex: 0,
            explanation: "It must give a summary of the policy, the delaying categories and when each becomes available, the exceptions, the case-by-case policy, and how to identify a nonproprietary machine.",
            sourceLessonSlug: "violation-or-just-the-rule",
          },
          {
            prompt: "Who may request a bank's specific availability policy disclosure?",
            options: ["Any person", "Any accountholder, but only in writing and only once in each calendar year", "Any consumer who has already made a deposit at the institution", "Any person who has been given written notice of an exception hold"],
            correctIndex: 0,
            explanation: "The regulation requires the bank to provide it to any person upon oral or written request, so a prospective customer may read it before opening anything.",
            sourceLessonSlug: "violation-or-just-the-rule",
          },
          {
            prompt: "How much notice must a bank give before implementing a change that delays availability?",
            options: ["At least thirty days before", "At least ten days before, matching the varying-amount notice under Regulation E", "At least three business days before, matching the stop-payment notice period", "None, provided the change is reflected in the next periodic statement"],
            correctIndex: 0,
            explanation: "A change that expedites availability may instead be disclosed not later than thirty days after it takes effect. Slower needs warning; faster does not.",
            sourceLessonSlug: "violation-or-just-the-rule",
          },
          {
            prompt: "When may a change to an availability policy be disclosed after the fact?",
            options: ["When it expedites availability", "When the institution has fewer than a stated number of consumer accounts", "When the change applies only to deposits made at automated teller machines", "When the change is required by an amendment to the underlying statute"],
            correctIndex: 0,
            explanation: "A change that speeds up availability may be disclosed not later than thirty days after implementation, unlike one that delays it.",
            sourceLessonSlug: "violation-or-just-the-rule",
          },
          {
            prompt: "Under 12 CFR 229.16(c)(3), what may a bank NOT do if it delays availability case by case without written notice at the time of deposit?",
            options: ["Assess subsequent overdraft or return fees", "Invoke any of the six exceptions against that customer for six months", "Report the resulting overdraft to a deposit-screening consumer reporting agency", "Charge the customer for providing a copy of its availability policy disclosure"],
            correctIndex: 0,
            explanation: "The prohibition covers fees for subsequent overdrafts, including use of a line of credit, and for the return of checks or other debits.",
            sourceLessonSlug: "violation-or-just-the-rule",
          },
          {
            prompt: "What is the first of the two conditions in the missing-notice fee rule?",
            options: ["The delay was the but-for cause", "The customer disputed the hold in writing within thirty calendar days", "The deposit exceeded the large-deposit threshold on that banking day", "The bank had invoked the same exception against the account previously"],
            correctIndex: 0,
            explanation: "The overdraft or return must not have occurred except for the fact that the deposited funds were delayed.",
            sourceLessonSlug: "violation-or-just-the-rule",
          },
          {
            prompt: "What is the second condition in the missing-notice fee rule?",
            options: ["The deposited check was paid by the paying bank", "The customer had no other funds available in any account at the institution", "The delay exceeded the reasonable period defined in the exceptions section", "The bank had given the customer a written exception notice within one day"],
            correctIndex: 0,
            explanation: "The check has to have actually been good. Where both conditions hold and the notice was missing, the fees are not to be assessed.",
            sourceLessonSlug: "violation-or-just-the-rule",
          },
          {
            prompt: "What is the statutory damages range in an individual action under 12 CFR 229.21(a), as read on 28 August 2026?",
            options: ["Not less than $125 nor greater than $1,350", "Not less than $100 nor greater than $1,000, adjusted annually for inflation", "Not less than $275 nor greater than $6,725, matching the availability thresholds", "There is no statutory range, so only actual damages may be recovered"],
            correctIndex: 0,
            explanation: "Actual damages are recoverable in addition, and these amounts are among those the five-year adjustment moves.",
            sourceLessonSlug: "violation-or-just-the-rule",
          },
          {
            prompt: "What is the class-action cap under 12 CFR 229.21(a), as read on 28 August 2026?",
            options: ["The lesser of $672,950 or 1 percent of net worth", "Ten times the individual statutory maximum multiplied by the number of members", "One percent of the bank's total deposits as reported in its most recent call report", "There is no cap, because class recovery is limited only by proven actual damages"],
            correctIndex: 0,
            explanation: "The total recovery in any class action or series of class actions arising out of the same failure by the same depositary bank is capped at the lesser of the two.",
            sourceLessonSlug: "violation-or-just-the-rule",
          },
          {
            prompt: "What else may a successful plaintiff recover under 12 CFR 229.21(a)?",
            options: ["Costs and a reasonable attorney's fee", "Treble damages where the failure to comply was found to be wilful", "A refund of every fee the account was charged in the preceding twelve months", "An order requiring the bank to change its availability policy for all customers"],
            correctIndex: 0,
            explanation: "In a successful action the costs of the action, together with a reasonable attorney's fee as determined by the court.",
            sourceLessonSlug: "violation-or-just-the-rule",
          },
          {
            prompt: "How long does a person have to bring an action under the funds-availability rules?",
            options: ["One year", "Three years from the date the customer discovered the violation had occurred", "Six years, matching the general limitation period for contract actions", "Thirty days from the date the funds were finally made available"],
            correctIndex: 0,
            explanation: "The action must be brought within one year after the date of the occurrence of the violation involved.",
            sourceLessonSlug: "violation-or-just-the-rule",
          },
          {
            prompt: "What does posting order come with, compared with the availability rules?",
            options: ["No schedule, notice, reason or remedy", "A written notice requirement identical to the one for exception holds", "A civil liability provision with the same statutory damages range", "A thirty-day advance notice requirement before the sequence may change"],
            correctIndex: 0,
            explanation: "The commercial code permits any order, so a complaint about sequencing is not a complaint about a breach of the availability rules.",
            sourceLessonSlug: "violation-or-just-the-rule",
          },
          {
            prompt: "What exists instead of a remedy for posting order?",
            options: ["Measurement on the statement", "A supervisory hotline operated by the institution's primary federal regulator", "An arbitration clause required by the commercial code in every account agreement", "A right to demand the bank recalculate the day's items in a different sequence"],
            correctIndex: 0,
            explanation: "Truth in Savings requires the totals on a periodic statement, which is a number produced by rule on a document already received.",
            sourceLessonSlug: "violation-or-just-the-rule",
          },
          {
            prompt: "Which two totals does 12 CFR 1030.11(a) require on a periodic statement?",
            options: ["Total overdraft fees and returned-item fees", "Total deposits received and total withdrawals paid during the statement period", "Total interest accrued and total interest paid during the calendar year to date", "Total items presented and total items returned unpaid by the paying bank"],
            correctIndex: 0,
            explanation: "The first must use the term Total Overdraft Fees, and both must be given for the statement period and the calendar year to date.",
            sourceLessonSlug: "violation-or-just-the-rule",
          },
          {
            prompt: "Over what two periods must those totals be given?",
            options: ["The statement period and the calendar year to date", "The statement period and the twelve months preceding the statement date", "The calendar year to date and the same period in the preceding year", "The statement period only, unless the customer requests a longer history"],
            correctIndex: 0,
            explanation: "That pairing is what makes the number usable as a running measure rather than a single-month snapshot.",
            sourceLessonSlug: "violation-or-just-the-rule",
          },
          {
            prompt: "What does the recourse lesson say the whole skill is?",
            options: ["Naming which rule was engaged", "Calculating the exact amount of statutory damages available for a violation", "Deciding whether to complain to the institution or to its federal supervisor", "Determining whether the bank acted in good faith when it applied a hold"],
            correctIndex: 0,
            explanation: "A late availability, a missing exception notice and a sequencing outcome are three different questions with three different destinations.",
            sourceLessonSlug: "violation-or-just-the-rule",
          },
          {
            prompt: "Which of these is the first document the capstone asks you to collect?",
            options: ["The specific availability policy disclosure", "The most recent periodic statement for the account you use most often", "The state payday statute that governs your own category of employment", "A twelve-month pay calendar generated from a single known anchor date"],
            correctIndex: 0,
            explanation: "Ask for it: the regulation requires a bank to provide it to any person on oral or written request.",
            sourceLessonSlug: "read-your-own-calendar",
          },
          {
            prompt: "What three things does the capstone tell you to read out of the availability policy disclosure?",
            options: ["Cut-off hour, delayed categories, case-by-case policy", "Routing number, account number, and the branch at which the account was opened", "Interest rate, minimum balance, and the monthly maintenance fee for the account", "Deposit insurance coverage, ownership categories, and the per-institution limit"],
            correctIndex: 0,
            explanation: "Those three are what feed the usable-date column of the map.",
            sourceLessonSlug: "read-your-own-calendar",
          },
          {
            prompt: "Why does the capstone send you to your account agreement for balance definitions?",
            options: ["Regulation CC refers back to it", "Because the agreement supersedes the federal availability schedule for that account", "Because the bank may not disclose those definitions in any other document", "Because the definitions differ between the paper and the electronic statement"],
            correctIndex: 0,
            explanation: "The federal definition of available funds refers to uses permitted under the bank's account agreement or policies, so that is where the balance terms live.",
            sourceLessonSlug: "read-your-own-calendar",
          },
          {
            prompt: "What does the capstone ask you to note about the balance definitions?",
            options: ["Which one the app displays", "Which one the bank uses to calculate interest at the end of the cycle", "Which one appears first in the account agreement's definitions section", "Which one the bank is required to report to a consumer reporting agency"],
            correctIndex: 0,
            explanation: "Available balance and ledger balance are not the same, and knowing which one is on the screen is the point of the exercise.",
            sourceLessonSlug: "read-your-own-calendar",
          },
          {
            prompt: "How does the capstone tell a biweekly worker to generate a year of paydays?",
            options: ["From one anchor date at fourteen-day intervals", "By listing the fifteenth and the last day of every month in the year", "By asking the employer for a written calendar, since it cannot be computed", "By counting backward from the last payday of the following calendar year"],
            correctIndex: 0,
            explanation: "One anchor generates the whole year, and doing so reveals the two three-paycheck months.",
            sourceLessonSlug: "read-your-own-calendar",
          },
          {
            prompt: "What does the capstone tell a semimonthly worker to mark?",
            options: ["Every payday falling on a weekend", "Every month in which three paydays fall rather than the usual two", "Every payday that falls more than eleven days after the pay period closes", "Every payday on which the employer's own bank is closed for a holiday"],
            correctIndex: 0,
            explanation: "A date-anchored payday lands on weekends regularly, which is exactly where a substitution rule has to operate.",
            sourceLessonSlug: "read-your-own-calendar",
          },
          {
            prompt: "Which substitution rule does the capstone tell you to apply to computed benefit dates?",
            options: ["The preceding-day rule", "The next-business-day rule used for funds availability under Regulation CC", "The three-business-day rule used for stopping a preauthorized transfer", "The thirty-day rule used for notice of a change in availability policy"],
            correctIndex: 0,
            explanation: "If the scheduled delivery day falls on a Saturday, Sunday or Federal legal holiday, payment moves to the first preceding day that is none of those.",
            sourceLessonSlug: "read-your-own-calendar",
          },
          {
            prompt: "Which two lines does the capstone want from a periodic statement?",
            options: ["The overdraft and returned-item totals", "The opening balance and the closing balance for the statement period", "The interest paid and the annual percentage yield earned on the account", "The number of items presented and the number returned unpaid"],
            correctIndex: 0,
            explanation: "Truth in Savings requires both totals for the statement period and the calendar year to date.",
            sourceLessonSlug: "read-your-own-calendar",
          },
          {
            prompt: "Which of the capstone's five written questions concerns the cut-off hour?",
            options: ["How many of my deposits arrive after it", "Whether the bank is permitted to set the hour at the time it has chosen", "Whether the hour differs between a branch and an automated teller machine", "Whether the hour has changed since the account was originally opened"],
            correctIndex: 0,
            explanation: "The question pairs the disclosed hour with the learner's own deposit habits, which is what turns a policy term into a personal fact.",
            sourceLessonSlug: "read-your-own-calendar",
          },
          {
            prompt: "What does the capstone say you will have at the end?",
            options: ["A calendar built from primary documents", "A budget covering the twelve months following the exercise", "A written complaint ready to send to the institution's supervisor", "A recommendation about which pay frequency to request from an employer"],
            correctIndex: 0,
            explanation: "Every date is traceable to a rule the learner has read, and the gaps are visible in advance rather than discovered afterwards.",
            sourceLessonSlug: "read-your-own-calendar",
          },
          {
            prompt: "What habit does the capstone ask you to keep after the course ends?",
            options: ["Ask which document set a surprising date", "Request a fresh availability policy disclosure at the start of each quarter", "Recalculate the entire map after every statement cycle without exception", "Compare your institution's overdraft totals against a published national figure"],
            correctIndex: 0,
            explanation: "In this domain the answer is nearly always specific: a definition, a cut-off hour, an availability category, a posting sequence, a pay lag, or a published payment day.",
            sourceLessonSlug: "read-your-own-calendar",
          },
          {
            prompt: "How does the capstone describe a surprise you can name?",
            options: ["One that can only happen once", "One that entitles the accountholder to a refund of any resulting fee", "One that the bank must explain in writing within one business day", "One that must be reported to the institution's federal supervisor"],
            correctIndex: 0,
            explanation: "Naming the document that set the date is what converts a recurring surprise into a known rule.",
            sourceLessonSlug: "read-your-own-calendar",
          },
          {
            prompt: "How many times does this course state in prose that it gives no financial advice?",
            options: ["Three", "Once, in the description shown on the course landing page before enrolment", "Twice, in the opening lesson and again in the final assessment introduction", "It does not state it in prose at all, relying on a registry entry instead"],
            correctIndex: 0,
            explanation: "The opening lesson, the mapping lesson and the capstone each say it, because a learner deep in the course never saw the landing page.",
            sourceLessonSlug: "read-your-own-calendar",
          },
          {
            prompt: "What does the capstone explicitly refuse to tell a reader?",
            options: ["What to pay first", "Which rule requires a bank to provide its availability policy on request", "How to compute a benefit payment date from a published regulation", "Where the definitions of available balance and ledger balance are found"],
            correctIndex: 0,
            explanation: "It tells nobody what to spend, what to pay first, how much to hold back, or which schedule to prefer. It is a document-gathering exercise.",
            sourceLessonSlug: "read-your-own-calendar",
          },
          {
            prompt: "Which question does the map answer, in the course's own words?",
            options: ["Questions of the form \"when\"", "Questions about whether a household is spending beyond its means", "Questions about which institution offers the fastest availability schedule", "Questions about how large an emergency reserve a household should hold"],
            correctIndex: 0,
            explanation: "It answers them from documents rather than from memory, and it does not create money or resolve a shortfall.",
            sourceLessonSlug: "build-the-map",
          },
          {
            prompt: "Why does the mapping lesson insist the obligation dates be attributed to whoever chose them?",
            options: ["It makes the gap structural rather than personal", "It establishes which creditor may be asked to move a due date first", "It determines which state's law governs the obligation in question", "It decides whether the payment may be stopped under Regulation E"],
            correctIndex: 0,
            explanation: "A lease, a loan, a subscription and a utility cycle were all dated by somebody else, and writing that down is the point.",
            sourceLessonSlug: "build-the-map",
          },
          {
            prompt: "Which arrival does the mapping lesson say has no governing rule until you act?",
            options: ["A deposit you make yourself", "A wage paid on the employer's regular payday under a state statute", "A benefit paid under a published monthly payment-day regulation", "A preauthorized credit arriving at least once every sixty days"],
            correctIndex: 0,
            explanation: "It has none until the deposit is made, at which point the availability schedule applies to it.",
            sourceLessonSlug: "build-the-map",
          },
          {
            prompt: "Which rail does the map treat as having two dates rather than one?",
            options: ["A card payment", "A cash payment handed directly from one person to another", "An instant payment settled on a gross basis at any hour of the day", "A benefit payment delivered under a published monthly payment-day rule"],
            correctIndex: 0,
            explanation: "A card authorisation and its later posting are two separate dates on two separate records.",
            sourceLessonSlug: "build-the-map",
          },
          {
            prompt: "Which of these is a question the availability rules answer with a remedy attached?",
            options: ["Funds released later than the schedule allows", "Items charged to an account in an order the customer did not expect", "A payday falling on a different date from one month to the next", "A benefit payment moving to an earlier day because of a holiday"],
            correctIndex: 0,
            explanation: "A schedule breach engages the civil liability provision. Sequencing engages measurement instead.",
            sourceLessonSlug: "violation-or-just-the-rule",
          },
          {
            prompt: "Which rule requires a notice on preprinted deposit slips?",
            options: ["The additional-disclosure section of Regulation CC", "The specific availability policy disclosure section of Regulation CC", "The exceptions section, which governs written notice of an exception hold", "Truth in Savings, which governs the disclosure of fees on statements"],
            correctIndex: 0,
            explanation: "The same section carries the deposit-slip notice, the posted notice where employees receive consumer deposits, the ATM notices, the request right and the change-notice rule.",
            sourceLessonSlug: "violation-or-just-the-rule",
          },
          {
            prompt: "Where does a person unhappy about a sequencing outcome NOT get anywhere, according to this section?",
            options: ["Filing it as an availability breach", "Reading the totals disclosed on their own periodic statement", "Comparing institutions before deciding where to hold an account", "Finding their own state's enactment of the commercial code"],
            correctIndex: 0,
            explanation: "The commercial code permits any order, so a sequencing complaint is not a complaint about a breach of the availability rules.",
            sourceLessonSlug: "violation-or-just-the-rule",
          },
          {
            prompt: "What is the effect of the availability rules having a duty, a document and a remedy?",
            options: ["A complaint has somewhere to go", "A bank must obtain a customer's consent before applying any hold at all", "A customer may recover the fees charged on any account in any circumstance", "A schedule may not be changed once it has been disclosed to a customer"],
            correctIndex: 0,
            explanation: "That three-part shape is what the course told you to look for in the very first lesson of Section 2.",
            sourceLessonSlug: "violation-or-just-the-rule",
          },
          {
            prompt: "Which of these does the map ask you to write for each recurring obligation?",
            options: ["Days from the nearest preceding usable date", "The interest rate the creditor charges on a payment made after the due date", "Whether the creditor accepts payment by more than one payment rail", "The proportion of monthly income the obligation represents"],
            correctIndex: 0,
            explanation: "That is one of the five written questions in the capstone, and it is the number the whole map exists to produce.",
            sourceLessonSlug: "read-your-own-calendar",
          },
          {
            prompt: "How many documents does the capstone ask you to collect?",
            options: ["Five", "Three, being the availability policy, the payday statute and the pay calendar", "Seven, one for each rail identified in the section on payment methods", "Two, being the account agreement and the most recent periodic statement"],
            correctIndex: 0,
            explanation: "The availability policy disclosure, the account agreement's balance definitions, the state payday statute, a twelve-month pay calendar, and a periodic statement.",
            sourceLessonSlug: "read-your-own-calendar",
          },
          {
            prompt: "How many written questions does the capstone ask you to answer?",
            options: ["Five", "Three, one for each of the three moments a payment passes through", "Ten, one for each named category in the availability schedule", "One, being whether any obligation falls before a usable arrival"],
            correctIndex: 0,
            explanation: "They cover the cut-off hour, usable dates, days of separation, stop-payment windows, and the months where an obligation precedes any usable arrival.",
            sourceLessonSlug: "read-your-own-calendar",
          },
          {
            prompt: "Which of the capstone's documents comes from a legislature rather than a bank or an employer?",
            options: ["The state payday statute", "The specific availability policy disclosure required of every depositary bank", "The account agreement containing the definitions of the balance terms", "The periodic statement showing the overdraft and returned-item totals"],
            correctIndex: 0,
            explanation: "Section 5 named the three facts to extract from it: the frequency, the worker category, and the maximum lag.",
            sourceLessonSlug: "read-your-own-calendar",
          },
          {
            prompt: "What does the recourse lesson say about legal advice?",
            options: ["It gives none", "It gives it only in relation to the civil liability provision in Regulation CC", "It gives it wherever a statutory damages figure has been stated with a date", "It gives it through the complaint routes named at the end of the lesson"],
            correctIndex: 0,
            explanation: "The lesson states where the rules are so a person can read them and decide for themselves, and disclaims both legal and financial advice.",
            sourceLessonSlug: "violation-or-just-the-rule",
          },
          {
            prompt: "Which figure in the civil liability provision is subject to the same five-year adjustment as the availability thresholds?",
            options: ["The statutory damages amounts", "The one-year period for bringing an action after the violation occurred", "The requirement to award costs and a reasonable attorney's fee", "The percentage of net worth that caps a class action recovery"],
            correctIndex: 0,
            explanation: "The dollar amounts under the chapter are adjusted on the statute's five-year cycle, which is why the course dates them.",
            sourceLessonSlug: "violation-or-just-the-rule",
          },
          {
            prompt: "What does the course say a person can do with a bank's availability policy before opening an account?",
            options: ["Read it", "Negotiate the cut-off hour that will apply to their own deposits", "Require the bank to waive the exceptions section for their account", "Obtain a written guarantee of next-day availability for every deposit"],
            correctIndex: 0,
            explanation: "The disclosure must be provided to any person upon oral or written request, which makes it a comparison tool rather than only a customer document.",
            sourceLessonSlug: "violation-or-just-the-rule",
          },
          {
            prompt: "Which of these is the correct pairing of a problem with its rule?",
            options: ["A missing exception notice and a fee consequence", "A sequencing outcome and the civil liability provision in Regulation CC", "A pay lag and the availability schedule for check deposits", "A benefit payment date and the commercial code's posting-order rule"],
            correctIndex: 0,
            explanation: "A late availability is a schedule question with a remedy, a missing notice is a notice question with a fee consequence, and sequencing is a measurement question.",
            sourceLessonSlug: "violation-or-just-the-rule",
          },
          {
            prompt: "Why does the capstone ask for the preauthorized debits and their scheduled dates?",
            options: ["They are the payments with a window", "They are the only payments a bank is required to disclose on a statement", "They are the payments to which the availability schedule directly applies", "They are the payments most likely to be charged in an unexpected order"],
            correctIndex: 0,
            explanation: "A preauthorized electronic transfer carries the three-business-day stop-payment right and the ten-day varying-amount notice, which no other listed rail does.",
            sourceLessonSlug: "read-your-own-calendar",
          },
          {
            prompt: "What does the mapping lesson say about creating money?",
            options: ["The map does not", "The map does so by identifying fees that can be recovered from the bank", "The map does so by moving obligations to dates that follow a usable arrival", "The map does so by shortening the interval before deposits become available"],
            correctIndex: 0,
            explanation: "It answers questions of the form when, from documents. It does not create money and it does not resolve a shortfall.",
            sourceLessonSlug: "build-the-map",
          },
          {
            prompt: "Which section of this course does the map's third step draw on?",
            options: ["The availability schedule", "The section on posting order and the arithmetic of insufficient balances", "The section on pay frequency and the four annual payday counts", "The section on the rails and the two questions that predict the rules"],
            correctIndex: 0,
            explanation: "Turning a landing date into a usable date is exactly what the schedule, the cut-off hour and the deposit location decide.",
            sourceLessonSlug: "build-the-map",
          },
          {
            prompt: "What does the recourse lesson identify as the sharpest consumer-facing sentence in Regulation CC?",
            options: ["The missing-notice fee rule", "The definition of a business day as ten named dates and the weekends", "The requirement that a bank provide its policy to any person on request", "The requirement that a change delaying availability be noticed in advance"],
            correctIndex: 0,
            explanation: "A case-by-case delay without written notice at the time of deposit bars fees for the overdrafts and returns the delay caused, where the check was good.",
            sourceLessonSlug: "violation-or-just-the-rule",
          },
          {
            prompt: "Which of these best describes what the course leaves a learner able to do?",
            options: ["Trace a date to the rule that set it", "Predict the exact balance an account will hold on any future date", "Recover fees charged on an account in any month the balance ran short", "Choose the institution with the shortest availability schedule nationally"],
            correctIndex: 0,
            explanation: "That is the capstone's stated product: a calendar in which every date is traceable to a rule the learner has read.",
            sourceLessonSlug: "read-your-own-calendar",
          },
          {
            prompt: "Which document does the capstone say sets the meaning of the balance shown in a banking app?",
            options: ["The account agreement", "Regulation CC's definitions section, which fixes the term for every institution", "The specific availability policy disclosure required on request", "The periodic statement, which restates the definitions each cycle"],
            correctIndex: 0,
            explanation: "Regulation CC's own definition of available funds refers to uses permitted under the bank's account agreement or policies.",
            sourceLessonSlug: "read-your-own-calendar",
          },
          {
            prompt: "What is the relationship between the two lists a map produces?",
            options: ["Arrivals against obligations", "Fees charged against fees refunded during the same statement period", "Federal rules against state rules governing the same transaction", "Payments sent against payments received on each of the six rails"],
            correctIndex: 0,
            explanation: "Every arrival carries a usable date and every obligation carries a date somebody else chose, and the gaps are where the two lists collide.",
            sourceLessonSlug: "build-the-map",
          },
          {
            prompt: "Which of these does the course say changes often enough to need re-checking?",
            options: ["Availability policies and cut-off hours", "Statutory pay frequencies and the categories of worker they apply to", "The arithmetic that gives 52, 26, 24 and 12 paydays a year", "The birth-date brackets that assign a monthly benefit payment day"],
            correctIndex: 0,
            explanation: "That is why the same section names the rule requiring thirty days' notice before a change that delays availability.",
            sourceLessonSlug: "build-the-map",
          },
          {
            prompt: "What kind of exercise does the capstone say it is?",
            options: ["Document-gathering", "Budget-building, using the learner's own income and expenses for the year", "Complaint-drafting, using the civil liability provision as its framework", "Institution-comparison, ranking banks by the length of their hold periods"],
            correctIndex: 0,
            explanation: "What a learner concludes from the documents is theirs; the course produces the documents and the questions, not the conclusion.",
            sourceLessonSlug: "read-your-own-calendar",
          },
          {
            prompt: "Which of the five capstone questions is about the rails rather than about dates in and out?",
            options: ["Which payments still have a stop window", "How many of my deposits arrive after my bank's disclosed cut-off hour", "On what date does each recurring arrival become usable rather than land", "In which months does an obligation fall before any usable arrival"],
            correctIndex: 0,
            explanation: "A window is a property of the rail carrying the payment, and its length is knowable before the payment is sent.",
            sourceLessonSlug: "read-your-own-calendar",
          },
          {
            prompt: "What does the recourse lesson say a complaint about sequencing is NOT?",
            options: ["A breach of the availability rules", "A matter a person can measure from their own periodic statement", "A consequence of a permission written into state commercial law", "A question about which institution to hold an account with"],
            correctIndex: 0,
            explanation: "Filing a sequencing complaint as an availability breach leads nowhere, because the commercial code permits any order.",
            sourceLessonSlug: "violation-or-just-the-rule",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // FINAL ASSESSMENT
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "final-cash-flow-timing",
      title: "25 · Final assessment",
      section: "Final assessment",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 10,
        questions: [
          {
            prompt: "What is the spine of this course, in one sentence?",
            options: ["Money arrives and leaves on dates set by rules", "Households overspend in predictable ways that a budget can be built to correct", "Banks profit from delay, and every rule in this area exists to enable that", "Payment timing is unpredictable, so a large cash buffer is the only defence"],
            correctIndex: 0,
            explanation: "The gap between the two is a mechanism rather than a character flaw, and every rule that produces it is public.",
            sourceLessonSlug: "the-gap-is-the-subject",
          },
          {
            prompt: "Why does this course teach timing instead of budgeting?",
            options: ["Timing has a mechanism, a decision-maker and recourse", "Timing is easier to assess with multiple-choice questions than budgeting is", "Budgeting is covered by the first course in this series and would be duplicated", "Budgeting requires personal financial data that a self-paced course cannot collect"],
            correctIndex: 0,
            explanation: "Budgeting has none of the three, so forcing this catalog's read-the-rule method onto it would manufacture a grievance nobody can check.",
            sourceLessonSlug: "the-gap-is-the-subject",
          },
          {
            prompt: "How does Regulation CC define a business day?",
            options: ["A calendar day other than weekends and ten named dates", "Any day on which the depositary bank is open to the public for business", "Any day on which the Federal Reserve settles payments between institutions", "Any twenty-four-hour period beginning at the bank's disclosed cut-off hour"],
            correctIndex: 0,
            explanation: "The definition enumerates dates rather than referring to the federal holiday statute, which is why the two lists have diverged.",
            sourceLessonSlug: "business-day-banking-day",
          },
          {
            prompt: "How does Regulation CC define a banking day?",
            options: ["The part of a business day a bank is open", "Any calendar day on which a bank's electronic channels can accept a deposit", "Any weekday, whether or not the institution's offices are open to the public", "The period between one cut-off hour and the next at the same institution"],
            correctIndex: 0,
            explanation: "It is that part of any business day on which an office is open to the public for carrying on substantially all of its banking functions.",
            sourceLessonSlug: "business-day-banking-day",
          },
          {
            prompt: "Which holiday appears in 5 U.S.C. 6103(a) but not in Regulation CC's list of excluded dates, as checked on 28 August 2026?",
            options: ["Juneteenth", "Labor Day, which the regulation names as the first Monday in September", "Memorial Day, which the regulation names as the last Monday in May", "Christmas Day, which the regulation names by its calendar date"],
            correctIndex: 0,
            explanation: "Eleven holidays in the statute, ten named dates in the regulation, and June 19 is the one in the first list and not the second.",
            sourceLessonSlug: "business-day-banking-day",
          },
          {
            prompt: "What is the earliest cut-off hour a bank may set at a staffed facility?",
            options: ["2:00 p.m.", "12:00 noon, which is the floor that applies to automated teller machines", "5:00 p.m., which is the deadline for making the cash-withdrawal amount available", "There is no floor, because a bank sets its own hours of business"],
            correctIndex: 0,
            explanation: "A bank may set a later hour but not an earlier one at a staffed facility. The floor for machines and off-premise facilities is noon.",
            sourceLessonSlug: "the-cut-off-hour",
          },
          {
            prompt: "When are funds deposited at an off-premise ATM emptied twice a week or less considered deposited?",
            options: ["On the day they are removed", "On the day the deposit is made, as shown on the receipt the machine issues", "On the second business day after the deposit is physically made at the machine", "On the day the bank's item-processing department images the deposited items"],
            correctIndex: 0,
            explanation: "The rule applies to a machine not on, or within fifty feet of, the premises, and it moves the deposit date to the collection run.",
            sourceLessonSlug: "the-cut-off-hour",
          },
          {
            prompt: "What did Congress legislate when it created the funds-availability schedule?",
            options: ["A ceiling on delay, a disclosure, and a liability", "A requirement that all deposits be made available on the day of receipt", "A federal fund to compensate customers whose deposits were held too long", "A uniform hold period identical for every deposit type and every institution"],
            correctIndex: 0,
            explanation: "That three-part shape recurs across consumer-money rules and is worth looking for whenever a new one is encountered.",
            sourceLessonSlug: "why-a-schedule-exists",
          },
          {
            prompt: "How often are the Act's dollar amounts adjusted, and to what multiple are they rounded?",
            options: ["Every five years, to the nearest $25", "Every year, to the nearest $100, using the preceding year's price index", "Every ten years, to the nearest $50, following the decennial census", "Whenever the implementing agencies choose, to the nearest whole dollar"],
            correctIndex: 0,
            explanation: "The adjustment uses the Consumer Price Index for Urban Wage Earners and Clerical Workers, as published by the Bureau of Labor Statistics.",
            sourceLessonSlug: "why-a-schedule-exists",
          },
          {
            prompt: "As read on 28 August 2026, what was the minimum amount of a day's check deposits available on the next business day?",
            options: ["$275", "$225, the amount that applied before the adjustment effective 1 July 2025", "$550, which is the amount that must be available for cash by five in the afternoon", "$400, the figure that appears in the text of the statute rather than the regulation"],
            correctIndex: 0,
            explanation: "It is the lesser of that amount or the aggregate deposited that banking day, and the course dates it because it will move again.",
            sourceLessonSlug: "why-a-schedule-exists",
          },
          {
            prompt: "Why does the nonlocal check category catch nothing today?",
            options: ["Check processing consolidated to one region", "Because the category was repealed by statute in 2010 along with its schedule", "Because banks agreed collectively to treat every check as a local check", "Because electronic presentment makes a paying bank's location unknowable"],
            correctIndex: 0,
            explanation: "The Reserve Banks cut their paper check-processing offices from forty-five in 2003 to a single office in 2010, so all checks are local to each other.",
            sourceLessonSlug: "why-a-schedule-exists",
          },
          {
            prompt: "How does Regulation CC define an electronic payment?",
            options: ["A wire transfer or an ACH credit transfer", "Any transfer initiated through an electronic terminal, telephone or computer", "Any payment that moves without a paper instrument passing between banks", "Any transfer settling on the same calendar day it was originated"],
            correctIndex: 0,
            explanation: "The definition is narrow, so a payroll direct deposit is inside it and a card refund or a recurring debit is not.",
            sourceLessonSlug: "next-day-and-second-day",
          },
          {
            prompt: "When must cash deposited in person to a bank employee be available?",
            options: ["The business day after the banking day", "The second business day after the banking day, as for a machine deposit", "The same banking day, because currency needs no collection from another bank", "The fifth business day, so the bank can verify and count the currency"],
            correctIndex: 0,
            explanation: "Cash deposited any other way gets the second business day, so handing it to a person is a legally different act.",
            sourceLessonSlug: "next-day-and-second-day",
          },
          {
            prompt: "When must funds from a local check be available under the general schedule?",
            options: ["The second business day", "The next business day, the same as for a Treasury check or a cashier's check", "The fifth business day, the same as for a deposit at a nonproprietary machine", "The ninth business day, which is the schedule's outer limit for any deposit"],
            correctIndex: 0,
            explanation: "Next-day availability is reserved for the categories listed in the next-day section plus the minimum availability amount.",
            sourceLessonSlug: "next-day-and-second-day",
          },
          {
            prompt: "When must a bank begin accruing interest on an interest-bearing deposit?",
            options: ["When it receives credit for the funds", "When the funds become available for withdrawal by the customer", "On the first day of the statement cycle following the deposit", "On the second business day after the banking day of deposit"],
            correctIndex: 0,
            explanation: "Interest accrual and availability are different clocks, so money can be earning before it is spendable.",
            sourceLessonSlug: "next-day-and-second-day",
          },
          {
            prompt: "How many named exceptions to the availability schedule does Regulation CC provide?",
            options: ["Six", "Three, covering new accounts, large deposits and emergency conditions", "Nine, one for each business day the regulation permits a hold to run", "Twelve, one for each Federal Reserve district's own hold policy"],
            correctIndex: 0,
            explanation: "New accounts, large deposits, redeposited checks, repeated overdrafts, reasonable cause to doubt collectibility, and emergency conditions.",
            sourceLessonSlug: "six-exceptions-and-a-notice",
          },
          {
            prompt: "What must a written exception notice state?",
            options: ["The reason and when funds will be available", "The name of the officer authorising the hold and the date of that decision", "The identity of the paying bank and the expected date of its settlement", "The customer's average balance over the preceding six statement cycles"],
            correctIndex: 0,
            explanation: "It must give an account identifier, the deposit date, the amount delayed, the reason for the exception, and the time period until availability.",
            sourceLessonSlug: "six-exceptions-and-a-notice",
          },
          {
            prompt: "What counts as repeated overdrafts for the exception, as read on 28 August 2026?",
            options: ["Six in six months, or two of $6,725 or more", "Any three overdrafts occurring within a single statement cycle on the account", "Any overdraft at all, since the exception is available at the bank's discretion", "Ten overdrafts in twelve months, each returned unpaid rather than honoured"],
            correctIndex: 0,
            explanation: "The exception then lasts for six months after the last such overdraft, and posting order affects the count that opens it.",
            sourceLessonSlug: "six-exceptions-and-a-notice",
          },
          {
            prompt: "What does U.C.C. 4-303(b) permit?",
            options: ["Charging items in any order", "Refusing to pay any item once the balance has reached zero for the day", "Holding a deposited item for as long as the bank considers commercially prudent", "Selecting which of a customer's accounts an item will be charged against"],
            correctIndex: 0,
            explanation: "Subject to subsection (a), items may be accepted, paid, certified, or charged to the indicated account of its customer in any order.",
            sourceLessonSlug: "any-order-convenient",
          },
          {
            prompt: "In the worked example, four payments of $80, $15, $12 and $8 hit a $100 balance. What changes with the order?",
            options: ["How many items are short", "The total charged to the account by the end of the banking day", "Which of the four payments the bank chooses to return unpaid", "Whether the account qualifies for the large-deposit exception"],
            correctIndex: 0,
            explanation: "One item is short smallest first and three are short largest first, while the closing balance is negative fifteen dollars either way.",
            sourceLessonSlug: "any-order-convenient",
          },
          {
            prompt: "Is the Uniform Commercial Code federal law?",
            options: ["No, states enact it", "Yes, Congress enacted it and it applies uniformly in every state", "Yes, it is a regulation issued jointly by the federal banking agencies", "No, it is a voluntary code that binds only the institutions adopting it"],
            correctIndex: 0,
            explanation: "The operative posting-order rule for any given account is that state's own enactment of Article 4, even where the words match.",
            sourceLessonSlug: "any-order-convenient",
          },
          {
            prompt: "What are the three moments a payment leaving an account passes through?",
            options: ["Authorisation, posting, settlement", "Deposit, presentment, and return by the paying bank's midnight deadline", "Availability, finality, and the accrual of interest on the balance", "Origination, batching, and the opening of the next settlement window"],
            correctIndex: 0,
            explanation: "A payment can be authorised on one day, posted on another and settled later still, each on a different record.",
            sourceLessonSlug: "authorized-posted-settled",
          },
          {
            prompt: "Which of the three moments does posting order operate on?",
            options: ["Posting", "Authorisation, when the bank decides which requests to approve", "Settlement, when funds move between the two institutions", "All three equally, because the sequence is applied at every stage"],
            correctIndex: 0,
            explanation: "Posting is the bank charging the item to the account, which is where the any-order permission bites.",
            sourceLessonSlug: "authorized-posted-settled",
          },
          {
            prompt: "What three options does Regulation E give an institution for telling a consumer about a recurring credit?",
            options: ["Positive notice, negative notice, or a telephone line", "A written statement, an email alert, or a message in the mobile application", "A quarterly summary, an annual summary, or notice on request in writing", "Immediate notice, next-day notice, or notice at the end of the statement cycle"],
            correctIndex: 0,
            explanation: "Positive and negative notice both run within two business days, and the telephone number must be disclosed on the initial disclosures and each statement.",
            sourceLessonSlug: "authorized-posted-settled",
          },
          {
            prompt: "How may a preauthorized electronic fund transfer from a consumer's account be authorised?",
            options: ["By a signed or similarly authenticated writing", "By any oral instruction the consumer gives the payee over the telephone", "By a course of dealing after three prior transfers of a similar amount", "By the consumer failing to object within ten days of the payee's request"],
            correctIndex: 0,
            explanation: "Regulation E permits no other form of authorization for a transfer from a consumer's account.",
            sourceLessonSlug: "the-stop-payment-clock",
          },
          {
            prompt: "How far ahead must a consumer act to stop a preauthorized transfer?",
            options: ["At least three business days", "At least ten days, matching the varying-amount notice in the same section", "At least fourteen days, matching the written-confirmation window", "At any time before the transfer has actually settled between the banks"],
            correctIndex: 0,
            explanation: "Notice may be oral or in writing, and the institution may then require written confirmation within fourteen days if it says so.",
            sourceLessonSlug: "the-stop-payment-clock",
          },
          {
            prompt: "How much notice is owed when a preauthorized transfer will vary in amount?",
            options: ["At least ten days", "At least three business days, the same as the stop-payment period", "At least one full statement cycle before the transfer is scheduled", "None, provided the amount stays within the account's available balance"],
            correctIndex: 0,
            explanation: "The designated payee or the financial institution must send written notice of the amount and date at least ten days before the scheduled transfer.",
            sourceLessonSlug: "the-stop-payment-clock",
          },
          {
            prompt: "Which rail is a payroll direct deposit?",
            options: ["An ACH credit", "An ACH debit, because the employee's bank pulls the wages in", "A wire transfer, because the employer orders payment of a fixed amount", "An instant payment, because wages must be usable on the stated payday"],
            correctIndex: 0,
            explanation: "The payer's side pushes the money, which is what puts it inside Regulation CC's definition of an electronic payment.",
            sourceLessonSlug: "six-rails-six-clocks",
          },
          {
            prompt: "Where does Regulation CC say the rules for the automated clearing house come from?",
            options: ["An operating circular or an association's rules", "The Code of Federal Regulations, in the same part as the availability schedule", "The Uniform Commercial Code as enacted in the originating bank's state", "A joint rulemaking by the federal banking agencies on a five-year cycle"],
            correctIndex: 0,
            explanation: "Those documents are not statutes and are not published in the CFR, which is why the consumer protections come from Regulation E instead.",
            sourceLessonSlug: "six-rails-six-clocks",
          },
          {
            prompt: "What two questions does the course say predict which rules apply to a payment?",
            options: ["Push or pull, collect or pay", "How large it is, and whether both parties bank at the same institution", "Which weekday it falls on, and whether that day is a federal holiday", "Whether it recurs, and whether the payee is a business or an individual"],
            correctIndex: 0,
            explanation: "Answering both predicts the applicable rules without memorising speeds, which matters because speeds change and categories do not.",
            sourceLessonSlug: "six-rails-six-clocks",
          },
          {
            prompt: "Under U.C.C. 4-201(a), what is a collecting bank's settlement for a deposited item before it becomes final?",
            options: ["Provisional", "Final, because the credit has already been posted to the customer's account", "Conditional on the customer maintaining a positive balance until settlement", "Irrevocable once the availability period stated in the schedule has expired"],
            correctIndex: 0,
            explanation: "The bank is an agent or sub-agent of the item's owner, so the credit is a placeholder pending an event that has not happened.",
            sourceLessonSlug: "provisional-until-it-is-not",
          },
          {
            prompt: "What may a bank do under U.C.C. 4-214(a) if a deposited item is not finally paid?",
            options: ["Revoke, charge back, or obtain refund", "Report the customer to a screening agency and close the account immediately", "Extend the availability hold indefinitely until the item is eventually paid", "Recover the amount only from the drawer, never from its own customer"],
            correctIndex: 0,
            explanation: "The right is conditioned on returning the item or notifying the customer by the midnight deadline or within a reasonable time after learning the facts.",
            sourceLessonSlug: "provisional-until-it-is-not",
          },
          {
            prompt: "What does the course call the most expensive confusion it addresses?",
            options: ["Availability against finality", "Business day against banking day when counting an availability period", "ACH credit against ACH debit when identifying which rail applies", "Semimonthly against biweekly when counting a year of paydays"],
            correctIndex: 0,
            explanation: "Regulation CC says when money may be used and the commercial code says when it is yours to keep, and the second answer can come later.",
            sourceLessonSlug: "provisional-until-it-is-not",
          },
          {
            prompt: "How long is the instant payment service's business day?",
            options: ["Twenty-four hours, every day", "The same as Regulation CC's, excluding weekends and ten named dates", "From the opening of the funds service each weekday until its close", "From one cut-off hour to the next at the participating institution"],
            correctIndex: 0,
            explanation: "The operator's own description records a 24-hour business day each day of the week, including weekends and holidays, read on 28 August 2026.",
            sourceLessonSlug: "instant-and-irrevocable",
          },
          {
            prompt: "What is the trade the instant payment lesson identifies?",
            options: ["Speed against the ability to change your mind", "Cost against reliability, because faster rails carry higher sending fees", "Privacy against convenience, because faster payments carry more data", "Availability against interest, because faster funds accrue interest later"],
            correctIndex: 0,
            explanation: "A stop-payment right needs an interval between agreeing to a payment and its happening, and instant settlement removes the interval.",
            sourceLessonSlug: "instant-and-irrevocable",
          },
          {
            prompt: "How many paydays a year do biweekly and semimonthly schedules produce?",
            options: ["26 and 24", "24 and 26, with the fortnightly schedule producing the smaller count", "26 and 26, since both schedules pay approximately twice each month", "52 and 24, since a fortnightly schedule pays in every week of the year"],
            correctIndex: 0,
            explanation: "Biweekly is every fourteen days and anchored to a weekday; semimonthly is twice within each calendar month and anchored to dates.",
            sourceLessonSlug: "four-different-years",
          },
          {
            prompt: "Why does a biweekly schedule produce two three-paycheck months a year?",
            options: ["26 across 12 months averages over two", "Because two months each year contain a fifth occurrence of the payday weekday", "Because employers add an extra payment in the months containing 31 days", "Because a fortnightly cycle skips a payment in two months and doubles in two"],
            correctIndex: 0,
            explanation: "Semimonthly never does, because twenty-four across twelve is exactly two every month, and the annual total is unchanged either way.",
            sourceLessonSlug: "four-different-years",
          },
          {
            prompt: "What does the course say a three-paycheck month is?",
            options: ["The same total in more pieces", "Extra compensation the employer provides twice each calendar year", "A correction for two earlier months that contained only one payday", "Evidence that the employer changed the pay frequency mid-year"],
            correctIndex: 0,
            explanation: "Only the dates the pieces land on have changed, and the course draws no conclusion about what to do with that.",
            sourceLessonSlug: "four-different-years",
          },
          {
            prompt: "Does federal wage-and-hour law set how often an employee must be paid?",
            options: ["No", "Yes, it requires at least semimonthly payment for covered non-exempt employees", "Yes, it requires weekly payment for any employee working overtime hours", "Only for employees paid by direct deposit rather than by paper check"],
            correctIndex: 0,
            explanation: "The regulations presume a regular pay day exists and measure other duties against it, leaving frequency to state law.",
            sourceLessonSlug: "who-decides-how-often",
          },
          {
            prompt: "Under New York Labor Law section 191, how often must a manual worker be paid?",
            options: ["Weekly, within seven calendar days", "Semi-monthly, on days the employer designates in advance as regular paydays", "Every fourteen days, in line with the most common national schedule", "Monthly, provided payment falls within ten days of the month's end"],
            correctIndex: 0,
            explanation: "A clerical and other worker, by contrast, is paid on the agreed terms but not less frequently than semi-monthly.",
            sourceLessonSlug: "who-decides-how-often",
          },
          {
            prompt: "What three facts does the course tell you to take from your own state's payday statute?",
            options: ["Frequency, worker category, maximum lag", "Minimum wage, overtime multiplier, and final-paycheck deadline", "The penalty, the filing deadline, and the enforcing agency's address", "The definition of a business day, the cut-off hour, and the hold period"],
            correctIndex: 0,
            explanation: "Those three come from one document and feed the mapping exercise, which is why the course prints no fifty-state table.",
            sourceLessonSlug: "who-decides-how-often",
          },
          {
            prompt: "Under 20 CFR 404.1807, what decides the Wednesday on which a monthly benefit is paid?",
            options: ["The day of the month of a birth date", "The date on which the application for benefits was originally approved", "The state in which the beneficiary was residing when entitlement began", "The order in which payments are processed by the paying agency each month"],
            correctIndex: 0,
            explanation: "The 1st through the 10th maps to the second Wednesday, the 11th through the 20th to the third, and after the 20th to the fourth.",
            sourceLessonSlug: "when-a-benefit-arrives",
          },
          {
            prompt: "What happens when a scheduled benefit delivery day falls on a weekend or Federal legal holiday?",
            options: ["Payment moves to the first preceding day", "Payment moves to the next following weekday that is not a holiday", "Payment is delivered on the day itself, since delivery is electronic", "Payment is combined with the following month's scheduled delivery"],
            correctIndex: 0,
            explanation: "The payment moves earlier, which is the opposite of what most people assume a calendar collision does.",
            sourceLessonSlug: "when-a-benefit-arrives",
          },
          {
            prompt: "What property makes a benefit payment date unusual among a household's arrivals?",
            options: ["It can be computed a year ahead", "It is guaranteed to be available for withdrawal on the day it is delivered", "It is exempt from the availability schedule that applies to other deposits", "It may be moved to a different day at the recipient's written request"],
            correctIndex: 0,
            explanation: "A published rule plus a birth date needs no phone call and no account access, which separates a calendar from a forecast.",
            sourceLessonSlug: "when-a-benefit-arrives",
          },
          {
            prompt: "What does the mapping lesson say the map does not do?",
            options: ["Resolve a shortfall", "Record the date on which each recurring arrival becomes usable", "Identify which outgoing payments still have a stop-payment window", "Attribute each obligation date to the party that chose it"],
            correctIndex: 0,
            explanation: "A timing map and a shortfall are different problems, and no schedule fixes the second one.",
            sourceLessonSlug: "build-the-map",
          },
          {
            prompt: "Which date does the map record for each arrival?",
            options: ["The usable date", "The date the payer initiated the payment from their own account", "The date the item appears on the next periodic statement", "The date the depositary bank receives credit from the paying bank"],
            correctIndex: 0,
            explanation: "The landing date and the usable date differ, and only the usable date is one an obligation can actually be met from.",
            sourceLessonSlug: "build-the-map",
          },
          {
            prompt: "Who may request a bank's specific availability policy disclosure?",
            options: ["Any person", "Any accountholder, in writing, once in each calendar year", "Any consumer who has already made a deposit at that institution", "Any person who has received a written notice of an exception hold"],
            correctIndex: 0,
            explanation: "The rule requires the bank to provide it to any person upon oral or written request, which makes it a comparison tool before opening an account.",
            sourceLessonSlug: "violation-or-just-the-rule",
          },
          {
            prompt: "Under 12 CFR 229.16(c)(3), what follows a case-by-case delay with no written notice at the time of deposit?",
            options: ["No fees for the resulting overdrafts or returns", "The bank must credit the account with the full deposit immediately", "The bank must give thirty days' notice before applying any further hold", "The customer may recover statutory damages without proving any loss"],
            correctIndex: 0,
            explanation: "The bar applies where the overdraft or return would not have occurred but for the delay and the deposited check was paid by the paying bank.",
            sourceLessonSlug: "violation-or-just-the-rule",
          },
          {
            prompt: "How long does a person have to bring an action for a funds-availability violation?",
            options: ["One year", "Three years from the date the customer discovered the violation", "Six years, matching the general limitation period for contract claims", "Thirty days from the date the funds were finally made available"],
            correctIndex: 0,
            explanation: "The period runs from the date of the occurrence of the violation involved, alongside statutory damages, actual damages, costs and fees.",
            sourceLessonSlug: "violation-or-just-the-rule",
          },
          {
            prompt: "How many documents does the capstone ask a learner to collect, and what is the product?",
            options: ["Five documents, and a calendar built from them", "Three documents, and a monthly budget covering the coming year", "Seven documents, and a written complaint to the institution's supervisor", "Two documents, and a ranking of institutions by hold length"],
            correctIndex: 0,
            explanation: "Every date on the resulting calendar is traceable to a rule the learner has read, and the gaps become visible in advance.",
            sourceLessonSlug: "read-your-own-calendar",
          },
          {
            prompt: "What habit does the course ask a learner to keep after it ends?",
            options: ["Ask which document set a surprising date", "Recalculate the whole map after every statement cycle", "Request a new availability policy disclosure each quarter", "Compare their fee totals against a published national average"],
            correctIndex: 0,
            explanation: "The answer is nearly always a specific rule: a definition, a cut-off hour, an availability category, a posting sequence, a pay lag, or a published payment day.",
            sourceLessonSlug: "read-your-own-calendar",
          },
        ],
      },
    },
  ],
};
