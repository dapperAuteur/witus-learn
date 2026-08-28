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
        ],
      },
    },
    // APPEND-HERE
  ],
};
