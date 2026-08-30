import type { AuthoredCourse } from "./authored-course";

// MONEY-05 · "Taxes, and the Money Taken Before You See It" (Money & Property). Source brief:
// plans/future-courses/2026-08-27-15-personal-finance-track-research.md, section 4.8. Fifth course
// of the `personal-money` series, code MONEY, position 05. Tier 0.
//
// THE SPINE, and the sentence the whole course is built to keep true:
// THE TAX SYSTEM TAKES YOUR MONEY BEFORE YOU SEE IT, PAYS SOME PEOPLE MORE THAN THEY PAID IN, AND
// HOLDS EXACTLY THOSE PEOPLE'S MONEY LONGEST.
// This is not a course about how to do your taxes. It is a course about the machine: which statute
// takes the money, which document you control, what the return legally is, which credits can pay
// out rather than only reduce, what date federal law fixes for the two credits that pay the lowest
// earners, and who gets examined afterwards. Every one of those has a statutory answer anyone can
// read for free, and none of them is a number that resets in January.
//
// WHY THIS CATALOG, AND NOT A FILING TUTORIAL. The method here is the catalog's method: read the
// document that governs the decision, and ask who the rule excludes. Applied to tax it produces a
// course nobody else writes, because the interesting object is not the 1040. It is 26 U.S.C.
// 6402(m), a sentence Congress wrote that delays the refund of returns claiming two named credits
// and nobody else's, where those two credits are the ones conditioned on having earned income at
// the bottom of the distribution. A gate, in statute, with a named affected class. That is exactly
// the shape `financing-without-access` teaches as a procedure and `the-county-committee` teaches
// from the federal side.
//
// BOUNDARIES AGAINST THE FOUR SIBLINGS, because this is the course most likely to duplicate.
//   · MONEY-03 (`cash-flow-timing`) owns WHEN money moves and who set the date. This course does
//     not re-teach funds availability, posting order or pay frequency. It adds one date those
//     lessons do not have: the one in 26 U.S.C. 6402(m).
//   · MONEY-04 (`predatory-products`) already has a whole lesson, `a-refund-is-money-already-owed`,
//     that reads 6402(a) and 6402(m) and PRICES the refund-advance product against the window. This
//     course must NOT re-price it. It teaches why the window exists, what it is for, whom it lands
//     on, and what else can shrink the refund before it arrives, then hands the pricing over by
//     name. Section 4 lesson 2 and lesson 3 both say so in the lesson body.
//   · MONEY-01 (`credit-decisions`) owns the consumer report, the score and the adverse action
//     notice. Nothing here re-teaches them.
//   · `taxes-americans-abroad` owns the foreign case. This course is DOMESTIC ONLY and says so in
//     lesson 4, with the handoff by name.
//
// EVERY PRIMARY DOCUMENT IN THIS FILE WAS FETCHED AND READ ON 29 AUGUST 2026, not summarised from
// memory. The statutory spine, deliberately Internal Revenue Code and CFR rather than IRS guidance
// pages, for the reason MONEY-01 established about agency footing:
//   · Withholding: 26 U.S.C. 3402(a)(1) (the employer's duty), 3402(f)(1) and (f)(2) (the
//     certificate the employee furnishes), 3402(n) (the exemption and its two conditions),
//     3101 (the separate chapter 21 tax), 31(a)(1) (chapter 24 withholding allowed as a CREDIT,
//     which is the sentence that makes a refund not a gift), and 26 CFR 31.3402(f)(5)-1(a), which
//     names Form W-4 and records that it was previously called the Employee's Withholding
//     Allowance Certificate.
//   · The return: 6012(a)(1)(A) (who must file), 6072(a) (when), 6065 (the perjury declaration,
//     quoted in full because it is one sentence), 6651(a)(1) and (a)(2) (the two penalties and the
//     reasonable-cause escape), 6501(a), (c)(1), (c)(3) and (e)(1)(A) (the assessment clocks),
//     6511(a) (the refund-claim clock), 7703(a) and (b) (marital status), 2(b)(1) (head of
//     household), 6013(a) and (d)(3) (joint returns, and joint and several liability).
//   · Credits: 6401(a) and (b)(1) (the excess of a subpart C credit "shall be considered an
//     overpayment", which IS the definition of refundable), 32(a)(1), (c)(1)(A)(ii), (c)(2)(A),
//     (c)(3)(A), (j) and (k)(1) (the earned income credit and its disallowance periods), 24(a) and
//     (d)(1) (the child credit and its refundable portion), 6695(g) (preparer due diligence).
//   · The refund: 6402(a) ("shall refund any balance"), 6402(m) (the hold), 6402(c), (d)(1), (e)(1)
//     and (f) (the offsets that can reduce it first).
//   · Free preparation: 7526A (the VITA matching grant program, made permanent by the Taxpayer
//     First Act of 2019, Public Law 116-25).
//   · Examination: 7602 (the authority), 6212 and 6213(a) (the notice and the 90 days), 7803(a)(3)
//     (the ten enumerated taxpayer rights, quoted).
//
// THREE THINGS THIS COURSE REFUSES TO DO, RECORDED HERE SO A LATER EDITOR CANNOT SOFTEN ONE
// WITHOUT SEEING THAT IT WAS A DECISION.
//   1. IT GIVES NO TAX ADVICE, AND THIS IS THE MOST ADVICE-ADJACENT COURSE IN THE TRACK. It never
//      tells a reader what to put on a W-4, which filing status to use, whether to claim a credit,
//      which preparer to use, or whether to file. It names no commercial product. Said in PROSE in
//      three places, per the posture `surplus-funds-basics` established: Section 1 lesson 1,
//      Section 3 lesson 2, and the capstone. A registry entry a landing page renders is necessary
//      and not sufficient, because a learner in lesson 14 never saw the landing page.
//   2. IT PRINTS NO CURRENT BRACKET, STANDARD DEDUCTION, CONTRIBUTION LIMIT OR CREDIT AMOUNT AS A
//      BARE FACT. Every one of those resets annually by revenue procedure. The course teaches the
//      METHOD and the place to look, and where a figure appears at all it carries its tax year, its
//      source and the date it was read. The sharpest demonstration is 26 U.S.C. 24(a), whose own
//      text says one thousand dollars while the amount actually in effect is set by temporary
//      amendment: the Code section itself is not the number. Section 3 lesson 3 teaches that.
//   3. IT DOES NOT DESCRIBE A PROGRAM'S CURRENT STATUS IN THE PRESENT TENSE WITHOUT A DATE. Free
//      File, VITA and Direct File have all moved, and Direct File moved twice in eighteen months.
//      Section 5 dates every sentence and files research checks with an annual cadence.
//
// House style, inherited from MONEY-01: `section` on every lesson; flush-left single-line
// `:::reveal q ||| a`; a `## Vocabulary` block of 3-6 lesson-specific terms; APA 7 `## Sources`
// with a stable URL; a quiz per teaching section (pool sized by density, serving 5, passing 80,
// shuffled) plus a final serving 10; every question carries `explanation` and `sourceLessonSlug`.
// Correct options are written SHORT and distractors long and specific, so `check-longest-option`
// passes by construction rather than by post-hoc trimming.
export const TAXES_AND_FILING_COURSE: AuthoredCourse = {
  title: "Taxes, and the Money Taken Before You See It",
  description:
    "For most working people in the United States, federal income tax is not a bill that arrives. It is money that is already gone, taken by an employer under a duty the law places on the employer rather than on you, before the pay statement is printed. This course is not about how to do your taxes. It is about the machine that decides how much is held, what the document you sign actually is, and who the rules land on. It starts with the two separate deductions on one pay statement, taken under two different chapters of the Internal Revenue Code, only one of which comes back to you as a credit at the end of the year. Then the withholding certificate, the single dial an employee controls, and the regulation that renamed it when the allowances it was built around were removed. Then the reason a refund is not a gift: the statute says withheld tax is allowed to you as a credit, so an overpayment is your own money returning, while a refundable credit is something else entirely and the law is explicit about which is which. Then the return as a document with legal consequences, signed under penalties of perjury by force of a single sentence of the Code, starting a three-year clock to assess that becomes six years on a large omission and never runs at all on a false return or on no return. Then filing status, which is not a preference but a determination made as of the last day of the year, and which on a joint return makes each spouse liable for the whole tax rather than half. The centre of the course is the place where the tax system stops collecting revenue and starts paying money out: the refundable credit, defined by a sentence saying the excess shall be considered an overpayment, and the earned income credit, which is conditioned on having worked and is the largest cash safety-net program in the country. Then the date Congress wrote for those credits and for nobody else, which holds the refunds of the lowest-earning filers until mid-February and is the window every refund-advance product is priced against. Then free filing, which turns out to be a private contract with an income limit derived from a percentile rather than a statute, a volunteer program born in 1969, and a government-built filing tool that was suspended. It closes on examination: what an audit legally is, what clock it starts, and what published research using named methods found about who is selected, including a disparity concentrated in exactly the credit this course spends a section on. It gives no tax advice, prints no current bracket or credit amount, dates every figure, and says so in three separate lessons.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1 — The money is taken before you see it
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "withholding-is-the-default",
      title: "1 · The money is taken before you ever see it",
      section: "Section 1 · The money is taken before you see it",
      body: `Most people in the United States never pay their federal income tax. It is taken.

That is not a figure of speech, and the grammar of the statute is the whole point. **26 U.S.C. § 3402(a)(1)** does not say that a worker shall pay. It says that "every employer making payment of wages shall deduct and withhold upon such wages a tax determined in accordance with tables or computational procedures prescribed by the Secretary" (26 U.S.C. § 3402, n.d.). The duty runs to the employer. You are not a party to the transaction. The money is gone before the pay statement is printed, and the first time most workers meet the tax system is as a subtraction they did not authorise and cannot refuse.

**This course is about that machine, not about how to fill in a form.** Which statute takes the money, which document you actually control, what the return you sign legally is, which credits can pay you rather than only reduce what you owe, what date federal law fixes for two of those credits and nobody else, and who gets examined afterwards.

**It is not tax advice, and it will not give you any.** It will not tell you what to write on a withholding certificate, which filing status to use, whether to claim a credit, whether to use a preparer, or whether to file at all. Those are decisions about your life and your facts, and this course does not know either. What it can do is hand you the rules, because the rules are public, free, and written down in a code you can read without paying anyone.

**Two habits that come with that promise.** First, **every figure here carries a date and a source**, because tax figures reset annually by revenue procedure and an undated number is a claim someone will still be repeating in five years. Second, **this course teaches a method rather than a table**. Brackets, standard deductions and credit amounts all move. What does not move is the machinery: who owes the duty, what the document must contain, what the deadline is. So where a summary table would be convenient and wrong, you will get the statute and the way to check it yourself.

## Two deductions, two different chapters, two different fates

Look at a pay statement and you will usually find at least two federal subtractions, and almost nobody is taught that they are governed by different chapters of the Internal Revenue Code and behave completely differently.

**Federal income tax withholding is chapter 24.** That is the § 3402 duty above.

**FICA is chapter 21.** Under **26 U.S.C. § 3101** a separate tax is imposed on the employee's wages for old-age, survivors and disability insurance and for hospital insurance. Different chapter, different purpose, different destination.

Now the sentence that makes the difference matter. **26 U.S.C. § 31(a)(1)** says: "The amount withheld as tax under chapter 24 shall be allowed to the recipient of the income as a credit against the tax imposed by this subtitle" (26 U.S.C. § 31, n.d.).

**Chapter 24, and only chapter 24.** Income tax withheld from your pay is a prepayment credited to you when the year is added up. There is no matching provision for chapter 21. The FICA line on your stub is not a deposit against your income tax and it does not come back in an income tax refund. Two lines, one statement, opposite legal character.

## Gross to net, on a labelled hypothetical

Take a pay period in which the statement shows gross pay of 1,000.00, federal income tax withheld of 84.00, FICA of 76.50, and a health premium of 40.00. Add the three deductions: 84.00 plus 76.50 plus 40.00 comes to 200.50. Net pay is 1,000.00 minus 200.50, which is **799.50**.

**The arithmetic is trivial and the classification is not.** Of the 200.50 that left, only the 84.00 is a prepayment of the tax the return will compute. The 76.50 is a separate tax under a separate chapter. The 40.00 is not a tax at all.

**These are labelled hypothetical figures and not this year's rates.** The employee FICA rate is stated in § 3101 rather than reset each January, but the wage ceiling above which the old-age portion stops is adjusted, and the income tax withholding tables are reissued annually, so confirm both against the current documents before you use any number of your own.

:::reveal On whom does 26 U.S.C. 3402(a)(1) place the duty to deduct and withhold? ||| The employer, not the worker.

:::reveal Which chapter's withholding does 26 U.S.C. 31(a)(1) allow to you as a credit? ||| Chapter 24, the income tax withholding. There is no matching provision for chapter 21.

:::reveal Why does this course print no current bracket or credit amount? ||| Because they reset annually by revenue procedure, so a table goes stale silently while a method does not.

## Vocabulary
- **Withholding**: money an employer is required by 26 U.S.C. 3402 to deduct from wages and pay over to the government, before the worker receives anything.
- **Chapter 24**: the part of the Internal Revenue Code that imposes income tax withholding on wages, and the only withholding that section 31 credits back to you.
- **Chapter 21**: the part that imposes the FICA taxes, which appear on the same pay statement and are not credited against income tax.
- **Gross pay**: the amount earned before any deduction. Net pay is what remains after every deduction, taxes and non-taxes alike.
- **Method rather than table**: this course's rule that it teaches how to find what is true today rather than printing a figure that will expire without announcing it.

## Sources
26 U.S.C. § 31. (n.d.). *Tax withheld on wages*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/31

26 U.S.C. § 3101. (n.d.). *Rate of tax*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/3101

26 U.S.C. § 3402. (n.d.). *Income tax collected at source*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/3402`,
    },
    {
      slug: "the-w4-is-the-dial",
      title: "2 · The withholding certificate is the one dial you hold",
      section: "Section 1 · The money is taken before you see it",
      body: `If the employer has the duty and the tables are written by the Secretary, what is left for the worker? Exactly one document.

**26 U.S.C. § 3402(f)(2)** puts it plainly: "On commencement of employment with an employer, the employee shall furnish the employer with a signed withholding allowance certificate relating to the withholding allowance claimed by the employee" (26 U.S.C. § 3402, n.d.). The subsection before it, § 3402(f)(1), says that an employee receiving wages shall on any day be entitled to a withholding allowance determined under rules the Secretary sets.

**That certificate is the dial.** It is the only input into the withholding calculation that you supply, and it is the reason two people earning identical wages at the same employer can have different amounts taken.

## The regulation names the form, and records that it changed

You will not find "W-4" in the statute. You find it in the regulation. **26 CFR § 31.3402(f)(5)-1(a)** states that Form W-4, "Employee's Withholding Certificate," previously called "Employee's Withholding Allowance Certificate," is the form prescribed for the withholding allowance certificate required to be furnished under section 3402(f)(2) (26 C.F.R. § 31.3402(f)(5)-1, n.d.). The same paragraph requires that a certificate be prepared in accordance with the instructions applicable to it and set forth fully and clearly the information called for.

**Read the two names side by side, because the rename is the history.** The form used to be built around counting *allowances*, a number a worker chose that stood in for exemptions and deductions. The IRS's own explanation of the redesign says "Allowances are no longer used for the redesigned Form W-4" and that the change "is meant to increase transparency, simplicity, and accuracy of the form" (Internal Revenue Service, 2026a). The regulation then quietly records the consequence: the word "Allowance" came out of the form's title, and the regulation names the old title so a reader meeting either one knows they are the same document.

**The current form asks for different things.** According to the IRS's own questions and answers on the redesign, read on 29 August 2026 and last reviewed by the agency on 22 July 2026, its steps ask for personal information including filing status, then account for multiple jobs, then allow a filer to claim income tax credits such as the child tax credit, then account for other income and deductions, and finally require a signature (Internal Revenue Service, 2026a). The official title of the form is "Employee's Withholding Certificate" and its stated purpose is so "your employer can withhold the correct federal income tax from your pay" (Internal Revenue Service, 2026b).

**This course will not tell you what to put in any of those steps.** That depends on facts it does not have. What it will tell you is that the document exists, that you furnish it, that you may furnish a new one when your circumstances change, and that the IRS publishes a free Tax Withholding Estimator whose stated use is "to estimate the correct amount of tax your employer (W-2) or pension provider should withhold each year" (Internal Revenue Service, 2026c). That page, read on 29 August 2026 and last reviewed by the agency on 27 June 2026, also says the estimator can generate a pre-filled Form W-4 to hand to an employer.

## The certificate that stops withholding entirely

There is one more thing the certificate can do, and it is in the statute rather than in the instructions.

**26 U.S.C. § 3402(n)** relieves an employer of the duty to withhold where the employee has furnished a certificate stating two things: that the employee "incurred no liability for income tax imposed under subtitle A for his preceding taxable year," and that the employee "anticipates that he will incur no liability for income tax imposed under subtitle A for his current taxable year" (26 U.S.C. § 3402, n.d.).

**Both conditions, not either.** It is a statement about the year just gone and a prediction about the one under way, and the employee is the person making it. That is a genuinely different kind of claim from adjusting a number, and it is worth knowing that the statute draws the line there rather than leaving it to a form designer.

:::reveal Which subsection requires an employee to furnish a signed certificate on commencing employment? ||| 26 U.S.C. 3402(f)(2).

:::reveal What did the regulation say Form W-4 was previously called? ||| The Employee's Withholding Allowance Certificate. It is now the Employee's Withholding Certificate.

:::reveal What two things must an employee certify to claim the section 3402(n) exemption? ||| No income tax liability for the preceding taxable year, and an expectation of none for the current one.

## Vocabulary
- **Withholding certificate**: the signed document an employee furnishes under 26 U.S.C. 3402(f)(2), prescribed by regulation as Form W-4, that supplies the employee's own inputs to the withholding calculation.
- **Withholding allowance**: the entitlement named in 3402(f)(1). The counted allowances the old form was built around were removed in the redesign, though the statutory term remains.
- **Section 3402(n) exemption**: the statutory route by which an employee certifying no liability last year and none expected this year relieves the employer of the duty to withhold.
- **Tax Withholding Estimator**: the IRS's own free tool for estimating what should be withheld, which can produce a pre-filled certificate for the employer.

## Sources
26 C.F.R. § 31.3402(f)(5)-1. (n.d.). *Form and contents of withholding allowance certificates*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/26/31.3402(f)(5)-1

26 U.S.C. § 3402. (n.d.). *Income tax collected at source*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/3402

Internal Revenue Service. (2026a). *FAQs on the Form W-4*. https://www.irs.gov/newsroom/faqs-on-the-2020-form-w-4

Internal Revenue Service. (2026b). *About Form W-4, Employee's Withholding Certificate*. https://www.irs.gov/forms-pubs/about-form-w-4

Internal Revenue Service. (2026c). *Tax withholding estimator*. https://www.irs.gov/individuals/tax-withholding-estimator`,
    },
    {
      slug: "a-refund-is-not-a-gift",
      title: "3 · A refund is not a gift, and a balance due is not a fine",
      section: "Section 1 · The money is taken before you see it",
      body: `Two beliefs cost people real money, and the same two sentences of the Code correct both.

The first is that a refund is a windfall. The second is that owing money in April means you did something wrong.

## Where a refund actually comes from

There are exactly two sources, and they are legally different objects.

**Source one is your own money.** Section 31(a)(1) allows chapter 24 withholding to you as a credit against the tax. Add up the year, compare the tax to the credits, and if more was withheld than the tax came to, the excess is an **overpayment**. **26 U.S.C. § 6402(a)** then says the Secretary may credit an overpayment against any liability in respect of an internal revenue tax on the part of the person who made it, and "shall refund any balance to such person" (26 U.S.C. § 6402, n.d.).

**Shall refund.** It is not discretion and it is not generosity. It is a debt, and the creditor is you.

**Source two is a payment the tax system makes to you.** Some credits can produce money beyond zero tax. **26 U.S.C. § 6401(b)(1)** says that if the amount allowable as credits under subpart C, which the statute itself labels as relating to refundable credits, exceeds the tax imposed reduced by the credits allowable under the other named subparts, "the amount of such excess shall be considered an overpayment" (26 U.S.C. § 6401, n.d.). That single deeming sentence is the entire mechanism by which the income tax system pays money out, and Section 3 of this course takes it apart.

**So a refund cheque can be two different things wearing the same envelope**, and the difference is not cosmetic. One is money you lent interest free for up to a year. The other is a transfer Congress designed.

## Why over-withholding is not free

Withholding more than you owe is a savings arrangement with three unusual properties: you cannot withdraw from it, it pays no interest, and someone else sets the release date.

**This course does not tell you that is bad.** People choose it deliberately, for reasons that are entirely rational. A lump sum in February can do things that a slightly larger amount per pay period cannot, and a forced arrangement you cannot raid is worth something to a household whose calendar is tight. The sibling course *Cash Flow, and When the Money Actually Moves* is the one that teaches how the timing of money against obligations actually works, and it is the right place to think that through. **This course gives no advice on the setting either way.**

What it does say is that the choice is real, that the certificate in the previous lesson is where it is made, and that nobody should believe the money appears from nowhere.

## Why a balance due is not a penalty

If the year's withholding came to less than the tax, the return shows a balance due. **That is not a fine.** It is the remainder of a bill that was being paid in instalments all year, and instalments computed from a certificate are estimates.

**Penalties are separate, statutory, and have their own names.** The next section reads them. A balance due, by itself, is arithmetic.

**One thing does follow from it, and it is procedural rather than moral.** Because withholding is set by a certificate you furnished, a repeated surprise in either direction is information about the certificate rather than about your character. What to do about that is your decision, and it is exactly the sort of decision this course refuses to make for you.

:::reveal What does 26 U.S.C. 6402(a) require the Secretary to do with the balance of an overpayment? ||| Refund it, after crediting it against any liability in respect of an internal revenue tax.

:::reveal What are the two legally different sources of a refund? ||| Over-withheld money of your own coming back, and a refundable credit that the Code deems an overpayment.

:::reveal What does 26 U.S.C. 6401(b)(1) say about credits under subpart C that exceed the tax? ||| That the amount of such excess shall be considered an overpayment.

## Vocabulary
- **Overpayment**: tax paid in excess of the liability, which 26 U.S.C. 6402(a) requires to be credited against other tax and then refunded.
- **Refund**: the payment of that balance. It is a debt owed to the filer rather than a discretionary award.
- **Deeming provision**: a rule like 6401(b)(1) that treats one thing as another for legal purposes, here treating excess refundable credits as an overpayment so the refund machinery applies to them.
- **Balance due**: the amount by which the year's tax exceeded the credits, which is the remainder of an instalment arrangement rather than a penalty.

## Sources
26 U.S.C. § 31. (n.d.). *Tax withheld on wages*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/31

26 U.S.C. § 6401. (n.d.). *Amounts treated as overpayments*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/6401

26 U.S.C. § 6402. (n.d.). *Authority to make credits or refunds*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/6402`,
    },
    {
      slug: "quiz-withholding",
      title: "Section 1 review · Withholding, the certificate, and the refund",
      section: "Section 1 · The money is taken before you see it",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "On whom does 26 U.S.C. 3402(a)(1) place the duty to deduct and withhold?",
            options: ["The employer", "The worker, who must remit the tax each pay period", "The Secretary, acting through the withholding tables", "The payroll processor named in the employment contract"],
            correctIndex: 0,
            explanation: "The statute says every employer making payment of wages shall deduct and withhold, so the worker is not a party to the duty.",
            sourceLessonSlug: "withholding-is-the-default",
          },
          {
            prompt: "What two verbs does 26 U.S.C. 3402(a)(1) use for what happens to wages?",
            options: ["Deduct and withhold", "Assess and collect, in the order the Secretary prescribes", "Compute and remit, once each calendar quarter has closed", "Report and transfer, against the employee's annual estimate"],
            correctIndex: 0,
            explanation: "Deduct and withhold, upon such wages, is the operative phrase of the subsection.",
            sourceLessonSlug: "withholding-is-the-default",
          },
          {
            prompt: "Under 3402(a)(1), what determines the amount of tax withheld?",
            options: ["Tables the Secretary prescribes", "The rate schedule the employee selects on the certificate", "An agreement negotiated between the employer and the employee", "The prior year's average liability across the employer's workforce"],
            correctIndex: 0,
            explanation: "The subsection says a tax determined in accordance with tables or computational procedures prescribed by the Secretary.",
            sourceLessonSlug: "withholding-is-the-default",
          },
          {
            prompt: "Which chapter of the Internal Revenue Code imposes income tax withholding on wages?",
            options: ["Chapter 24", "Chapter 21, which also carries the old-age and hospital insurance taxes", "Chapter 61, which governs returns and the information reporting rules", "Chapter 1, which imposes the income tax on individuals directly"],
            correctIndex: 0,
            explanation: "Section 3402 sits in chapter 24, and section 31 credits only chapter 24 withholding.",
            sourceLessonSlug: "withholding-is-the-default",
          },
          {
            prompt: "Which chapter imposes the FICA taxes that appear on a pay statement?",
            options: ["Chapter 21", "Chapter 24, the same chapter that governs income tax withholding", "Chapter 25, which the Code reserves for general employment provisions", "Chapter 2, which imposes the tax on self-employment income"],
            correctIndex: 0,
            explanation: "Section 3101 sits in chapter 21, which is a separate chapter with a separate purpose.",
            sourceLessonSlug: "withholding-is-the-default",
          },
          {
            prompt: "What does 26 U.S.C. 31(a)(1) allow to the recipient of the income?",
            options: ["A credit against the tax", "A deduction from gross income equal to the amount withheld", "A refund payable without regard to the tax the return computes", "An exemption from the obligation to file a return for that year"],
            correctIndex: 0,
            explanation: "The amount withheld as tax under chapter 24 shall be allowed to the recipient as a credit against the tax imposed by the subtitle.",
            sourceLessonSlug: "withholding-is-the-default",
          },
          {
            prompt: "Which withholding does section 31(a)(1) name by chapter?",
            options: ["Chapter 24 only", "Both chapter 21 and chapter 24, since both appear on the stub", "Chapter 21 only, because that is the tax the employee bears", "Every federal withholding, whatever chapter imposes it"],
            correctIndex: 0,
            explanation: "The sentence names chapter 24 and nothing else, which is why the FICA line behaves differently at filing.",
            sourceLessonSlug: "withholding-is-the-default",
          },
          {
            prompt: "Does the FICA line on a pay statement come back in an income tax refund?",
            options: ["No", "Yes, because it is withheld under the same statutory duty", "Yes, but only after the wage ceiling for the year is reached", "Only where the employee also claims a refundable credit"],
            correctIndex: 0,
            explanation: "There is no provision matching section 31(a)(1) for chapter 21, so FICA is not a prepayment of income tax.",
            sourceLessonSlug: "withholding-is-the-default",
          },
          {
            prompt: "In the lesson's labelled hypothetical, what is net pay?",
            options: ["799.50", "916.00, which is gross pay less the income tax withheld", "923.50, which is gross pay less the FICA amount shown", "960.00, which is gross pay less the health premium alone"],
            correctIndex: 0,
            explanation: "Gross pay of 1,000.00 less deductions of 200.50 leaves 799.50.",
            sourceLessonSlug: "withholding-is-the-default",
          },
          {
            prompt: "In that hypothetical, which deduction is a prepayment of the tax the return will compute?",
            options: ["The 84.00", "The 76.50, which is credited under chapter 21 at filing", "The 40.00, because a premium reduces taxable wages directly", "The whole 200.50, since every deduction reduces take-home pay"],
            correctIndex: 0,
            explanation: "Only the chapter 24 income tax withholding is credited against the tax under section 31(a)(1).",
            sourceLessonSlug: "withholding-is-the-default",
          },
          {
            prompt: "What is the 40.00 health premium in the hypothetical?",
            options: ["Not a tax at all", "A chapter 21 tax collected alongside the FICA amount", "A chapter 24 withholding treated as a credit at filing", "A statutory deduction the employer must remit to the Secretary"],
            correctIndex: 0,
            explanation: "It reduces net pay without being a tax, which is why classification rather than arithmetic is the lesson.",
            sourceLessonSlug: "withholding-is-the-default",
          },
          {
            prompt: "What is gross pay?",
            options: ["Earnings before any deduction", "Earnings after taxes but before non-tax deductions are taken", "The amount actually deposited into the worker's bank account", "The figure used to compute the FICA wage ceiling for the year"],
            correctIndex: 0,
            explanation: "Net pay is what remains after every deduction, taxes and non-taxes alike.",
            sourceLessonSlug: "withholding-is-the-default",
          },
          {
            prompt: "Where is the employee FICA rate stated?",
            options: ["In section 3101", "In the annual revenue procedure that sets the brackets", "In the withholding tables the Secretary reissues each year", "In the employee's withholding certificate, as a selected rate"],
            correctIndex: 0,
            explanation: "The rate is in the statute rather than reset each January, though the wage ceiling is adjusted.",
            sourceLessonSlug: "withholding-is-the-default",
          },
          {
            prompt: "Which part of the FICA calculation does the lesson say is adjusted?",
            options: ["The wage ceiling", "The hospital insurance rate, which rises with average earnings", "The employer's matching share, which is set by revenue procedure", "The chapter 21 credit allowed against the income tax at filing"],
            correctIndex: 0,
            explanation: "The ceiling above which the old-age portion stops is adjusted, so both the rate and the ceiling must be confirmed.",
            sourceLessonSlug: "withholding-is-the-default",
          },
          {
            prompt: "What does this course say it is about?",
            options: ["The machine, not the form", "The line-by-line completion of a federal individual income tax return", "The choice of preparation software best suited to a household", "The state and local taxes that follow from a federal filing status"],
            correctIndex: 0,
            explanation: "Which statute takes the money, which document you control, and who the rules land on.",
            sourceLessonSlug: "withholding-is-the-default",
          },
          {
            prompt: "Which of these will the course expressly not tell a reader?",
            options: ["What to write on a certificate", "Which chapter of the Code imposes income tax withholding on wages", "What a consumer report contains and who may lawfully obtain one", "How the statute defines an overpayment for refund purposes"],
            correctIndex: 0,
            explanation: "It gives no tax advice, so it names no setting, no status, no credit to claim and no preparer.",
            sourceLessonSlug: "withholding-is-the-default",
          },
          {
            prompt: "Why does every figure in this course carry a date?",
            options: ["Tax figures reset annually", "Because federal law requires an educational publisher to date its sources", "Because the citation tooling cannot index an undated numerical claim", "Because a dated figure counts as a primary source under the catalog's rule"],
            correctIndex: 0,
            explanation: "They reset by revenue procedure, so an undated number is a claim someone will still be repeating in five years.",
            sourceLessonSlug: "withholding-is-the-default",
          },
          {
            prompt: "What is the total of the three deductions in the lesson's hypothetical?",
            options: ["200.50", "160.50, counting only the two federal taxes on the statement", "124.00, counting the income tax withheld and the premium", "116.50, counting the FICA amount and the health premium"],
            correctIndex: 0,
            explanation: "84.00 plus 76.50 plus 40.00 comes to 200.50, which is subtracted from gross pay of 1,000.00.",
            sourceLessonSlug: "withholding-is-the-default",
          },
          {
            prompt: "Which two federal subtractions does the lesson say usually appear on a pay statement?",
            options: ["Income tax and FICA", "Income tax withholding and the employer's unemployment contribution", "The self-employment tax and the hospital insurance surtax on wages", "The estimated tax instalment and the state income tax withheld"],
            correctIndex: 0,
            explanation: "One under chapter 24 and one under chapter 21, governed by different statutes with different consequences.",
            sourceLessonSlug: "withholding-is-the-default",
          },
          {
            prompt: "What does section 3101 impose the tax for?",
            options: ["Old-age and hospital insurance", "The general fund, from which all federal spending is appropriated", "The refundable credits paid to filers with qualifying children", "The administration of the withholding tables and their annual reissue"],
            correctIndex: 0,
            explanation: "Old-age, survivors and disability insurance, and hospital insurance, which is a different purpose from chapter 24.",
            sourceLessonSlug: "withholding-is-the-default",
          },
          {
            prompt: "What does the course offer in place of a summary table?",
            options: ["The statute and how to check", "A comparison of the current year's figures across filing statuses", "A worked calculation using the withholding tables now in force", "An annual revision schedule for every figure the lessons mention"],
            correctIndex: 0,
            explanation: "Summary tables go stale silently, and a method does not.",
            sourceLessonSlug: "withholding-is-the-default",
          },
          {
            prompt: "How does the lesson describe most workers' first encounter with the tax system?",
            options: ["A subtraction they cannot refuse", "An annual return prepared with the help of a paid professional", "A notice of assessment issued after the close of the taxable year", "A quarterly instalment computed from the previous year's liability"],
            correctIndex: 0,
            explanation: "The money is gone before the pay statement is printed, and the duty was never theirs to discharge.",
            sourceLessonSlug: "withholding-is-the-default",
          },
          {
            prompt: "Why does the lesson label its pay-statement figures as hypothetical?",
            options: ["They are not this year's rates", "Because the Code forbids reproducing an actual employer's pay statement", "Because withholding tables are proprietary to the payroll industry", "Because the arithmetic differs by state and cannot be shown nationally"],
            correctIndex: 0,
            explanation: "The withholding tables are reissued annually and the wage ceiling moves, so the figures illustrate classification rather than current rates.",
            sourceLessonSlug: "withholding-is-the-default",
          },
          {
            prompt: "What does the course say does NOT move, and is therefore what it teaches?",
            options: ["The machinery", "The bracket thresholds set for each filing status", "The credit amounts published for the current tax year", "The standard deduction stated in the annual revenue procedure"],
            correctIndex: 0,
            explanation: "Who owes the duty, what the document must contain, and what the deadline is.",
            sourceLessonSlug: "withholding-is-the-default",
          },
          {
            prompt: "Which subsection requires an employee to furnish a signed certificate on commencing employment?",
            options: ["3402(f)(2)", "3402(a)(1), which places the withholding duty on the employer", "3402(n), which relieves the employer of the duty entirely", "3101(b), which imposes the hospital insurance portion of FICA"],
            correctIndex: 0,
            explanation: "On commencement of employment, the employee shall furnish the employer with a signed withholding allowance certificate.",
            sourceLessonSlug: "the-w4-is-the-dial",
          },
          {
            prompt: "What must the employee furnish under that subsection?",
            options: ["A signed withholding certificate", "A statement of estimated income for the coming taxable year", "A copy of the prior year's return showing the tax actually owed", "An election naming the rate schedule the employer is to apply"],
            correctIndex: 0,
            explanation: "It is the only input into the withholding calculation that the employee supplies.",
            sourceLessonSlug: "the-w4-is-the-dial",
          },
          {
            prompt: "Where is Form W-4 named?",
            options: ["In the regulation", "In section 3402(f)(2) of the Internal Revenue Code itself", "In the annual revenue procedure that sets the withholding tables", "In the employer's payroll agreement with its processing vendor"],
            correctIndex: 0,
            explanation: "The statute describes a certificate; 26 CFR 31.3402(f)(5)-1(a) is where the form number appears.",
            sourceLessonSlug: "the-w4-is-the-dial",
          },
          {
            prompt: "Which regulation prescribes the form for the section 3402(f)(2) certificate?",
            options: ["26 CFR 31.3402(f)(5)-1", "26 CFR 1.31-1, which governs the credit for tax withheld on wages", "26 CFR 301.6402-2, which governs claims for credit or refund", "26 CFR 31.3101-1, which imposes the employee portion of FICA"],
            correctIndex: 0,
            explanation: "Its paragraph (a) names Form W-4 and states what a certificate must contain.",
            sourceLessonSlug: "the-w4-is-the-dial",
          },
          {
            prompt: "What does the regulation say Form W-4 was previously called?",
            options: ["Employee's Withholding Allowance Certificate", "Employee's Certificate of Exemption From Federal Withholding", "Employer's Statement of Wages Paid and Taxes Withheld", "Employee's Declaration of Anticipated Annual Tax Liability"],
            correctIndex: 0,
            explanation: "The regulation records the old title alongside the current one, which is how the rename is documented.",
            sourceLessonSlug: "the-w4-is-the-dial",
          },
          {
            prompt: "What is the form's title now?",
            options: ["Employee's Withholding Certificate", "Employee's Annual Withholding Allowance Declaration", "Employee's Statement of Filing Status and Dependents", "Employee's Application for Reduced Federal Withholding"],
            correctIndex: 0,
            explanation: "The word Allowance came out of the title when the allowances themselves were removed.",
            sourceLessonSlug: "the-w4-is-the-dial",
          },
          {
            prompt: "What did the redesign of the form remove?",
            options: ["Allowances", "The signature requirement, which moved into the employer's records", "The filing status entry, which the employer now takes from payroll", "The exemption certificate authorised by section 3402(n) of the Code"],
            correctIndex: 0,
            explanation: "The IRS says allowances are no longer used for the redesigned Form W-4.",
            sourceLessonSlug: "the-w4-is-the-dial",
          },
          {
            prompt: "What did the IRS say the change was meant to increase?",
            options: ["Transparency, simplicity, and accuracy", "The proportion of workers who receive a refund rather than owing", "The speed with which an employer can process a new hire's payroll", "The revenue collected through withholding over the course of a year"],
            correctIndex: 0,
            explanation: "That is the agency's own stated purpose for the redesign, on its questions and answers page.",
            sourceLessonSlug: "the-w4-is-the-dial",
          },
          {
            prompt: "What does the regulation require of a certificate's contents?",
            options: ["The information called for, fully and clearly", "A notarised declaration of the employee's anticipated annual income", "An itemised schedule of every deduction the employee expects to claim", "A copy of any prior certificate the employee furnished to that employer"],
            correctIndex: 0,
            explanation: "It must be prepared in accordance with the applicable instructions and set forth fully and clearly what is called for.",
            sourceLessonSlug: "the-w4-is-the-dial",
          },
          {
            prompt: "What does the final step of the current Form W-4 require?",
            options: ["A signature", "A calculation of the total tax expected for the coming year", "A statement of every other job held by the employee's household", "An acknowledgement that the employer has explained the withholding tables"],
            correctIndex: 0,
            explanation: "The IRS describes the steps as personal information, multiple jobs, credits, other income and deductions, and then signing.",
            sourceLessonSlug: "the-w4-is-the-dial",
          },
          {
            prompt: "According to the IRS, what does the form's second step account for?",
            options: ["Multiple jobs", "The taxpayer's chosen number of withholding allowances for the year", "The employer's share of the chapter 21 taxes on the same wages", "Any refund the taxpayer received in respect of the preceding year"],
            correctIndex: 0,
            explanation: "Personal information comes first, then multiple jobs, then credits, then other income and deductions.",
            sourceLessonSlug: "the-w4-is-the-dial",
          },
          {
            prompt: "What may a filer claim in the step after the multiple-jobs step?",
            options: ["Income tax credits", "A reduction in the FICA taxes withheld under chapter 21", "An exemption from filing a return for the year in question", "A deferral of the balance due until the following taxable year"],
            correctIndex: 0,
            explanation: "The IRS names income tax credits such as the child tax credit for that step.",
            sourceLessonSlug: "the-w4-is-the-dial",
          },
          {
            prompt: "What is the stated purpose of Form W-4?",
            options: ["Correct withholding from your pay", "Reporting to the Secretary the wages an employer paid in a year", "Claiming a refund of tax withheld in excess of the year's liability", "Recording the employee's consent to electronic delivery of tax forms"],
            correctIndex: 0,
            explanation: "The IRS page says to complete it so that your employer can withhold the correct federal income tax from your pay.",
            sourceLessonSlug: "the-w4-is-the-dial",
          },
          {
            prompt: "What is the Tax Withholding Estimator for?",
            options: ["Estimating what should be withheld", "Calculating the refundable credits a household is entitled to claim", "Preparing and transmitting a federal individual income tax return", "Projecting the balance due for the following three taxable years"],
            correctIndex: 0,
            explanation: "The IRS describes it as estimating the correct amount an employer or pension provider should withhold each year.",
            sourceLessonSlug: "the-w4-is-the-dial",
          },
          {
            prompt: "What can the estimator produce for the user?",
            options: ["A pre-filled Form W-4", "A completed federal return ready for electronic transmission", "A schedule of estimated tax instalments for the coming year", "A determination of eligibility for the earned income credit"],
            correctIndex: 0,
            explanation: "The page says it can generate a pre-filled Form W-4 or Form W-4P to give to the employer or pension provider.",
            sourceLessonSlug: "the-w4-is-the-dial",
          },
          {
            prompt: "On what date does the lesson say the IRS last reviewed its Tax Withholding Estimator page?",
            options: ["27 June 2026", "29 August 2026, which is the date the lesson author read it", "22 July 2026, which is the date shown on the W-4 questions page", "12 June 2026, which is the date shown on the Free File page"],
            correctIndex: 0,
            explanation: "The lesson records both the agency's review date and the date the page was read, because program pages move.",
            sourceLessonSlug: "the-w4-is-the-dial",
          },
          {
            prompt: "Which subsection relieves an employer of the duty to withhold?",
            options: ["3402(n)", "3402(f)(1), which entitles an employee to a withholding allowance", "3101(a), which imposes the old-age portion of the FICA tax", "31(a)(1), which credits withheld tax against the tax imposed"],
            correctIndex: 0,
            explanation: "It operates through a certificate the employee furnishes making two specific statements.",
            sourceLessonSlug: "the-w4-is-the-dial",
          },
          {
            prompt: "What is the first thing an employee must certify for the 3402(n) exemption?",
            options: ["No liability last year", "That total wages will fall below the filing threshold for the year", "That another employer is already withholding on the same wages", "That the employee expects to claim a refundable credit on the return"],
            correctIndex: 0,
            explanation: "The certificate states that the employee incurred no liability for income tax for the preceding taxable year.",
            sourceLessonSlug: "the-w4-is-the-dial",
          },
          {
            prompt: "What is the second thing that certificate must state?",
            options: ["None anticipated this year", "That the employee has no dependants to claim on a return", "That the employer has verified the prior year's tax return", "That the employee will file a return within the prescribed time"],
            correctIndex: 0,
            explanation: "It is a prediction about the current taxable year, made by the employee rather than by the employer.",
            sourceLessonSlug: "the-w4-is-the-dial",
          },
          {
            prompt: "Are the two conditions of the 3402(n) exemption alternatives?",
            options: ["No, both are required", "Yes, either statement standing alone is sufficient", "Yes, provided the employer countersigns the certificate", "Only where the employee furnishes the certificate at hire"],
            correctIndex: 0,
            explanation: "One is a statement about the year just gone and the other a prediction about the one under way, and the statute requires both.",
            sourceLessonSlug: "the-w4-is-the-dial",
          },
          {
            prompt: "Why can two people earning identical wages at one employer have different amounts withheld?",
            options: ["Different certificates", "Because the Secretary publishes a separate table for each employer", "Because chapter 21 applies to some wage earners and not to others", "Because seniority changes the rate at which wages are withheld upon"],
            correctIndex: 0,
            explanation: "The certificate is the only employee-supplied input to the calculation, so it is where the difference comes from.",
            sourceLessonSlug: "the-w4-is-the-dial",
          },
          {
            prompt: "What does 3402(f)(1) say an employee receiving wages is entitled to?",
            options: ["A withholding allowance", "A refund of any tax withheld beyond the year's actual liability", "An exemption from withholding for the first year of employment", "A statement from the employer showing how the tables were applied"],
            correctIndex: 0,
            explanation: "The entitlement is determined under rules the Secretary sets, and the statutory term survives the form's redesign.",
            sourceLessonSlug: "the-w4-is-the-dial",
          },
          {
            prompt: "What are the two legally different sources of a refund?",
            options: ["Over-withholding and refundable credits", "An overpayment of chapter 21 tax and an overpayment of chapter 24 tax", "A statutory interest allowance and a discretionary hardship payment", "An employer correction and an adjustment made on examination"],
            correctIndex: 0,
            explanation: "One is your own money coming back, the other is a transfer that 6401(b)(1) deems an overpayment.",
            sourceLessonSlug: "a-refund-is-not-a-gift",
          },
          {
            prompt: "What does 26 U.S.C. 6402(a) require the Secretary to do with the balance of an overpayment?",
            options: ["Refund it", "Hold it as a credit against the following year's estimated tax", "Apply it to any debt the taxpayer owes to a state or federal agency", "Retain it until the return for that year has been examined and closed"],
            correctIndex: 0,
            explanation: "The Secretary may credit the overpayment against internal revenue tax liability and shall refund any balance to the person who made it.",
            sourceLessonSlug: "a-refund-is-not-a-gift",
          },
          {
            prompt: "Is refunding the balance of an overpayment discretionary?",
            options: ["No", "Yes, where the Secretary determines the amount is administratively small", "Yes, unless the taxpayer files a written claim within the limitation period", "Only where the overpayment arose from withholding rather than a credit"],
            correctIndex: 0,
            explanation: "The statute says shall refund, which makes it a debt rather than a favour.",
            sourceLessonSlug: "a-refund-is-not-a-gift",
          },
          {
            prompt: "What is an overpayment, in the lesson's terms?",
            options: ["Tax paid beyond the liability", "Any amount withheld from wages during the course of a taxable year", "The portion of a refund attributable to a refundable credit claim", "The difference between gross pay and net pay across a full year"],
            correctIndex: 0,
            explanation: "Compare the tax to the credits, and any excess of credits over tax is the overpayment.",
            sourceLessonSlug: "a-refund-is-not-a-gift",
          },
          {
            prompt: "What does 26 U.S.C. 6401(b)(1) do?",
            options: ["Deems excess credits an overpayment", "Imposes a limit on the total refundable credits allowed in a year", "Authorises the Secretary to pay interest on a delayed refund claim", "Requires a return before any refundable credit may be allowed at all"],
            correctIndex: 0,
            explanation: "It says the amount of such excess shall be considered an overpayment, which is how the refund machinery reaches a credit.",
            sourceLessonSlug: "a-refund-is-not-a-gift",
          },
          {
            prompt: "Which subpart of the credits does 6401(b)(1) treat as producing an overpayment?",
            options: ["Subpart C", "Subpart A, which the Code labels as nonrefundable personal credits", "Subpart B, which covers the credits allowed against the business tax", "Subpart G, which the subsection subtracts before making the comparison"],
            correctIndex: 0,
            explanation: "The statute names subpart C and parenthetically labels it as relating to refundable credits.",
            sourceLessonSlug: "a-refund-is-not-a-gift",
          },
          {
            prompt: "Which credit subparts does 6401(b)(1) subtract before comparing?",
            options: ["A, B, D and G", "C alone, since it is the subpart the sentence is about", "Every subpart of part IV without exception or qualification", "Only those subparts the Secretary designates by revenue procedure"],
            correctIndex: 0,
            explanation: "The tax imposed is reduced by the credits allowable under subparts A, B, D and G before the excess is measured.",
            sourceLessonSlug: "a-refund-is-not-a-gift",
          },
          {
            prompt: "How does the lesson describe deliberate over-withholding?",
            options: ["An interest-free loan", "A statutory instalment plan authorised by section 3402(n) of the Code", "A prepayment that earns interest at the rate the Secretary publishes", "A penalty the employer imposes where a certificate is not furnished"],
            correctIndex: 0,
            explanation: "You cannot withdraw from it, it pays no interest, and someone else sets the release date.",
            sourceLessonSlug: "a-refund-is-not-a-gift",
          },
          {
            prompt: "Which three properties does the lesson give over-withholding as a savings arrangement?",
            options: ["No withdrawal, no interest, fixed date", "Federal insurance, a guaranteed return, and an annual statement", "Employer matching, tax deferral, and a penalty for early access", "A minimum balance, a monthly fee, and an overdraft protection line"],
            correctIndex: 0,
            explanation: "Those three together are why the lesson insists the choice is a real one rather than a free one.",
            sourceLessonSlug: "a-refund-is-not-a-gift",
          },
          {
            prompt: "Does this course say over-withholding is a mistake?",
            options: ["No", "Yes, because the money earns nothing while the government holds it", "Yes, unless the filer claims a refundable credit on the same return", "Only where the refund exceeds the filer's monthly household expenses"],
            correctIndex: 0,
            explanation: "It says people choose it for rational reasons and that the course gives no advice on the setting either way.",
            sourceLessonSlug: "a-refund-is-not-a-gift",
          },
          {
            prompt: "Which sibling course does this lesson name for the timing of money against obligations?",
            options: ["Cash Flow", "Credit, and the Decisions Made About You, which covers the consumer file", "Banking, and Who Has No Bank, which covers deposit accounts and fees", "Housing, which covers the lease, the loan estimate and the land record"],
            correctIndex: 0,
            explanation: "Cash Flow, and When the Money Actually Moves is the course that teaches when money moves and who set the date.",
            sourceLessonSlug: "a-refund-is-not-a-gift",
          },
          {
            prompt: "Is a balance due shown on a return a penalty?",
            options: ["No", "Yes, imposed automatically where withholding proved insufficient", "Yes, but only where the shortfall exceeds a threshold set by regulation", "Only where the taxpayer furnished a certificate claiming an exemption"],
            correctIndex: 0,
            explanation: "It is the remainder of a bill that was being paid in instalments, and penalties are separate and statutory.",
            sourceLessonSlug: "a-refund-is-not-a-gift",
          },
          {
            prompt: "What is a balance due, in the lesson's terms?",
            options: ["The remainder of instalments", "A charge imposed for furnishing an inaccurate withholding certificate", "The amount by which chapter 21 tax exceeded chapter 24 withholding", "An assessment the Secretary makes after examining the year's return"],
            correctIndex: 0,
            explanation: "Withholding is an instalment arrangement computed from a certificate, and instalments are estimates.",
            sourceLessonSlug: "a-refund-is-not-a-gift",
          },
          {
            prompt: "A repeated surprise in either direction is information about what?",
            options: ["The certificate", "The taxpayer's honesty in reporting income to the employer", "The accuracy of the withholding tables the Secretary publishes", "Whether the employer discharged its duty under section 3402(a)(1)"],
            correctIndex: 0,
            explanation: "Withholding is set by the certificate you furnished, which makes the surprise procedural rather than moral.",
            sourceLessonSlug: "a-refund-is-not-a-gift",
          },
          {
            prompt: "What is a deeming provision?",
            options: ["A rule treating one thing as another", "A grant of discretion to an agency to decide a matter case by case", "A sunset clause causing a statutory amount to expire on a fixed date", "A cross-reference directing a reader from one Code section to another"],
            correctIndex: 0,
            explanation: "Section 6401(b)(1) deems excess refundable credits an overpayment so that the refund rules apply to them.",
            sourceLessonSlug: "a-refund-is-not-a-gift",
          },
          {
            prompt: "When a refund is owed, who is the creditor?",
            options: ["The filer", "The Secretary, who holds the amount pending examination of the return", "The employer, which remitted the withheld tax on the filer's behalf", "The preparer, where the refund is routed through a preparer's account"],
            correctIndex: 0,
            explanation: "Section 6402(a) makes the refund a debt owed to the person who made the overpayment.",
            sourceLessonSlug: "a-refund-is-not-a-gift",
          },
          {
            prompt: "What does the lesson say a lump sum in February can do?",
            options: ["Things a per-period amount cannot", "Earn interest at a rate the Secretary is required to publish annually", "Reduce the following year's withholding without a new certificate", "Satisfy a balance due arising from the preceding taxable year"],
            correctIndex: 0,
            explanation: "It is one of the rational reasons people choose to over-withhold, which is why the course refuses to call the choice wrong.",
            sourceLessonSlug: "a-refund-is-not-a-gift",
          },
          {
            prompt: "What is the legal character of a refund, on the lesson's reading of 6402(a)?",
            options: ["A debt", "A discretionary payment the Secretary may withhold for cause", "A credit that must be carried forward to the following taxable year", "A benefit conditioned on the filer having claimed a refundable credit"],
            correctIndex: 0,
            explanation: "The statute says shall refund any balance, so the obligation runs to the person who made the overpayment.",
            sourceLessonSlug: "a-refund-is-not-a-gift",
          },
          {
            prompt: "What makes a refund cheque potentially two different things in one envelope?",
            options: ["Two legally different sources", "Two separate statutes governing federal and state refunds together", "Two chapters of withholding, both credited under section 31(a)(1)", "Two filing statuses applying to the same household in one year"],
            correctIndex: 0,
            explanation: "Over-withheld money returning is not the same object as a credit Congress designed to pay out.",
            sourceLessonSlug: "a-refund-is-not-a-gift",
          },
          {
            prompt: "Under section 31(a)(1), what happens to withheld tax when the year is added up?",
            options: ["It is credited against the tax", "It is deducted from gross income before the tax is computed", "It is returned in full whatever the year's liability turns out to be", "It is applied against the chapter 21 taxes withheld on the same wages"],
            correctIndex: 0,
            explanation: "The credit is compared with the tax, and any excess of credits over tax becomes the overpayment.",
            sourceLessonSlug: "a-refund-is-not-a-gift",
          },
          {
            prompt: "How does the lesson describe penalties relative to a balance due?",
            options: ["Separate and statutory", "Automatic, and computed as a percentage of the balance shown", "Discretionary, and imposed only where the Secretary examines a return", "Identical, since the Code treats an unpaid balance as a penalty itself"],
            correctIndex: 0,
            explanation: "They have their own names and their own sections, which the next part of the course reads.",
            sourceLessonSlug: "a-refund-is-not-a-gift",
          },
          {
            prompt: "Why does the lesson call withholding instalments estimates?",
            options: ["They come from a certificate", "Because the Secretary revises the withholding tables mid-year", "Because an employer may vary the amount at its own discretion", "Because chapter 21 amounts are netted against them at year end"],
            correctIndex: 0,
            explanation: "The certificate supplies the employee's inputs in advance, so the running total is a projection rather than the tax.",
            sourceLessonSlug: "a-refund-is-not-a-gift",
          },
          {
            prompt: "What does the lesson say is left for the worker once the employer has the duty and the Secretary has the tables?",
            options: ["One document", "The choice of which chapter the withholding falls under", "The right to elect out of withholding for any single pay period", "The ability to negotiate the rate applied to a given pay period"],
            correctIndex: 0,
            explanation: "The withholding certificate is the only input the employee supplies, which is why the lesson calls it the dial.",
            sourceLessonSlug: "the-w4-is-the-dial",
          },
          {
            prompt: "What was the old Form W-4 built around counting?",
            options: ["Allowances", "Dependants, each of which reduced the tax by a fixed amount", "Pay periods remaining in the calendar year at the date of hire", "Prior employers, so that wages from each could be aggregated"],
            correctIndex: 0,
            explanation: "Allowances stood in for exemptions and deductions, and the redesign removed them.",
            sourceLessonSlug: "the-w4-is-the-dial",
          },
          {
            prompt: "What does the lesson say the course will not tell a reader about the withholding form?",
            options: ["What to put in it", "Which regulation prescribes it and what that regulation requires", "That the employee rather than the employer furnishes the certificate", "That a new certificate may be furnished when circumstances change"],
            correctIndex: 0,
            explanation: "That depends on facts the course does not have, which is why it teaches the document rather than the entry.",
            sourceLessonSlug: "the-w4-is-the-dial",
          },
          {
            prompt: "What does the lesson say about furnishing a new certificate later?",
            options: ["It may be done when circumstances change", "It is permitted only at the start of a calendar year", "It requires the employer's written agreement in each case", "It is barred once the first certificate has been countersigned"],
            correctIndex: 0,
            explanation: "The IRS estimator page even generates a pre-filled form for that purpose.",
            sourceLessonSlug: "the-w4-is-the-dial",
          },
          {
            prompt: "What kind of statement does the lesson say the 3402(n) certificate is, compared with adjusting a number?",
            options: ["A genuinely different kind of claim", "The same kind of entry, made in a different box of the form", "A request the employer may grant or refuse at its own discretion", "An election the Secretary must approve before it takes any effect"],
            correctIndex: 0,
            explanation: "It combines an assertion about a completed year with a prediction about the current one, and the statute rather than a form designer draws that line.",
            sourceLessonSlug: "the-w4-is-the-dial",
          },
          {
            prompt: "What does the lesson say the two pay-statement lines have, despite sitting on one page?",
            options: ["Opposite legal character", "The same statutory basis under chapter 24 of the Code", "A shared ceiling above which neither amount is withheld", "A common destination in the general fund of the Treasury"],
            correctIndex: 0,
            explanation: "One is credited back under section 31(a)(1) and the other is not, which is the whole point of separating them.",
            sourceLessonSlug: "withholding-is-the-default",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2 — The return is a document you sign
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "who-has-to-file-and-who-should",
      title: "4 · Who has to file, and who files anyway",
      section: "Section 2 · The return is a document you sign",
      body: `The requirement to file is one sentence long, and the sentence does not contain a number.

**26 U.S.C. § 6012(a)(1)(A)** begins: "Every individual having for the taxable year gross income which equals or exceeds the exemption amount" shall make a return, subject to the exceptions the rest of the paragraph sets out (26 U.S.C. § 6012, n.d.).

**Read what it points at rather than what it says.** The threshold is not written into the statute as a figure. It is defined by reference to another amount, and the practical thresholds a filer actually uses, which vary by filing status and age, are published each year. **So there is no correct number to memorise here, and this course will not print one.** The place to look is the current year's Form 1040 instructions and the current revision of IRS Publication 17, which is free, comprehensive, and reissued annually. Name the revision year whenever you quote it.

**And the deadline is in the Code.** Under **26 U.S.C. § 6072(a)**, returns made on the basis of the calendar year "shall be filed on or before the 15th day of April following the close" of that year (26 U.S.C. § 6072, n.d.).

## The people who are not required to file, and should

Here is the asymmetry that matters most in this whole course.

**A refundable credit is paid through the refund machinery, and the refund machinery starts with a return.** Section 6401(b)(1) turns excess refundable credits into an overpayment; section 6402(a) requires the Secretary to refund an overpayment. Neither can happen if nothing was filed, because there is no computed overpayment to refund.

**The same is true of your own withheld money.** Chapter 24 withholding is credited under section 31(a)(1) against the tax the return computes. No return, no computation, no credit, no refund. The money stays where it is.

**So a person whose gross income is below the filing threshold can be owed money and receive none of it by doing nothing.** That is not a trick and it is not hidden. It follows from the plumbing.

## And the money expires

**26 U.S.C. § 6511(a)** sets the outside limit: a claim for credit or refund of an overpayment "shall be filed by the taxpayer within 3 years from the time the return was filed or 2 years from the time the tax was paid, whichever of such periods expires the later, or if no return was filed by the taxpayer, within 2 years from the time the tax was paid" (26 U.S.C. § 6511, n.d.).

**Withholding counts as tax paid.** So for someone who never filed, the second branch is the operative one, and it is short.

## What this course does not cover

**This is the domestic case only.** A United States person living abroad meets a different set of rules: the exclusion for foreign earned income, the credit for foreign taxes, and separate information reporting on foreign accounts. **None of that is taught here.** The catalog's *Taxes for Americans Abroad* course is where that material lives, and it is the handoff this course makes rather than summarising a subject it has not built.

**Nor does this lesson tell you whether to file.** It tells you what the statute requires, what the refund plumbing needs in order to run, and how long the window stays open. What you do with your own facts is yours.

:::reveal What does 26 U.S.C. 6012(a)(1)(A) use in place of a dollar figure? ||| A reference to the exemption amount, with the practical thresholds published annually.

:::reveal Why can a person below the filing threshold still be owed money they never receive? ||| Because a refund requires a computed overpayment, and there is no computation without a return.

:::reveal Under 6511(a), how long does someone who never filed have to claim a refund? ||| Two years from the time the tax was paid.

## Vocabulary
- **Gross income**: the starting measure the filing requirement is written against, before deductions of any kind.
- **Filing threshold**: the level of gross income at which section 6012 requires a return, expressed in the statute by reference rather than as a printed figure.
- **Publication 17**: the IRS's free, comprehensive, annually revised guide for individuals, and the right place to look up a current threshold with its year named.
- **Limitation period**: the outside time within which an act must be done, here the section 6511(a) window for claiming a refund.

## Sources
26 U.S.C. § 6012. (n.d.). *Persons required to make returns of income*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/6012

26 U.S.C. § 6072. (n.d.). *Time for filing income tax returns*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/6072

26 U.S.C. § 6511. (n.d.). *Limitations on credit or refund*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/6511`,
    },
    {
      slug: "under-penalties-of-perjury",
      title: "5 · You sign it under penalties of perjury, and that starts two clocks",
      section: "Section 2 · The return is a document you sign",
      body: `A return is not a form. It is a sworn statement, and one sentence of the Code makes it one.

**26 U.S.C. § 6065** reads, in its entirety: "Except as otherwise provided by the Secretary, any return, declaration, statement, or other document required to be made under any provision of the internal revenue laws or regulations shall contain or be verified by a written declaration that it is made under the penalties of perjury" (26 U.S.C. § 6065, n.d.).

**That is why the signature block says what it says**, and it is why signing a return is a different act from filling in a form. **26 U.S.C. § 7206(1)** makes it a felony to wilfully make and subscribe any return "which contains or is verified by a written declaration that it is made under the penalties of perjury, and which he does not believe to be true and correct as to every material matter" (26 U.S.C. § 7206, n.d.).

## Two penalties, and they run at different speeds

Most people collapse "did not file" and "did not pay" into one idea. The Code does not.

**Failure to file, 26 U.S.C. § 6651(a)(1):** unless the failure is "due to reasonable cause and not due to willful neglect," there is added to the tax "5 percent of the amount of such tax if the failure is for not more than 1 month, with an additional 5 percent for each additional month or fraction thereof during which such failure continues, not exceeding 25 percent in the aggregate" (26 U.S.C. § 6651, n.d.).

**Failure to pay, 26 U.S.C. § 6651(a)(2):** the same structure, the same reasonable-cause escape, and **0.5 percent** per month rather than 5 percent.

**Ten to one.** The penalty for not filing accrues ten times as fast as the penalty for not paying. Those are two different positions with two different prices, and the Code has already told you which one it treats as worse.

**Both carry the same escape clause**, and it is a real one: reasonable cause and not wilful neglect. What counts is a body of law of its own, and this course does not attempt it.

## Filing starts a clock. Not filing means the clock never starts.

This is the most under-appreciated consequence of the signature.

**26 U.S.C. § 6501(a)**: except as otherwise provided, tax "shall be assessed within 3 years after the return was filed" (26 U.S.C. § 6501, n.d.).

**§ 6501(e)(1)(A)** extends that to **6 years** where the taxpayer omits from gross income an amount properly includible that is in excess of 25 percent of the gross income stated in the return.

**§ 6501(c)(1)**: in the case of "a false or fraudulent return with the intent to evade tax," the tax may be assessed "at any time."

**§ 6501(c)(3)**: in the case of failure to file a return, the tax may be assessed "at any time."

**Set those four side by side and the shape appears.** The three-year period is not a right the taxpayer holds by default. It is something a filed return produces. A person who does not file has not bought silence; they have removed the deadline that would have ended the matter.

**And section 6511(a), from the previous lesson, is the mirror on the taxpayer's side.** Filing starts the clock in both directions.

:::reveal What does 26 U.S.C. 6065 require of any return required under the internal revenue laws? ||| That it contain or be verified by a written declaration made under the penalties of perjury.

:::reveal How much faster does the failure-to-file penalty accrue than the failure-to-pay penalty? ||| Ten times: 5 percent a month against 0.5 percent, each capped at 25 percent in the aggregate.

:::reveal What is the assessment period where no return was filed at all? ||| There is none. Under 6501(c)(3) the tax may be assessed at any time.

## Vocabulary
- **Verification**: the written declaration under penalties of perjury that section 6065 requires on a return, which converts a form into a sworn statement.
- **Assessment**: the formal recording of a tax liability, which section 6501 confines to a period measured from the filing of the return.
- **Reasonable cause**: the statutory escape from both section 6651 penalties, available where the failure was not due to wilful neglect.
- **Substantial omission**: the section 6501(e)(1)(A) trigger, an omission of more than 25 percent of the gross income stated in the return, which doubles the assessment period.

## Sources
26 U.S.C. § 6065. (n.d.). *Verification of returns*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/6065

26 U.S.C. § 6501. (n.d.). *Limitations on assessment and collection*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/6501

26 U.S.C. § 6651. (n.d.). *Failure to file tax return or to pay tax*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/6651

26 U.S.C. § 7206. (n.d.). *Fraud and false statements*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/7206`,
    },
    {
      slug: "filing-status-is-a-legal-fact",
      title: "6 · Filing status is a legal fact, not a preference",
      section: "Section 2 · The return is a document you sign",
      body: `Filing status is presented to most people as a menu. It is a determination, and the Code makes it on a date.

**26 U.S.C. § 7703(a)**: "the determination of whether an individual is married shall be made as of the close of his taxable year; except that if his spouse dies during his taxable year such determination shall be made as of the time of such death" (26 U.S.C. § 7703, n.d.).

**One day decides twelve months.** A marriage on 31 December and a marriage on 2 January produce different filing statuses for the year just ended, and nothing about the intervening conduct changes that.

## The rule for people living apart

**§ 7703(b)** treats a married individual as not married where three things hold together: the individual maintains as a home a household that is for more than half the taxable year the principal place of abode of a child for whom a dependency deduction is allowable, furnishes over half the cost of maintaining that household, and, "during the last 6 months of the taxable year, such individual's spouse is not a member of such household" (26 U.S.C. § 7703, n.d.).

**Three conditions, joined by "and."** Two out of three is not the rule.

## Head of household is written as a closed test

**26 U.S.C. § 2(b)(1)** is unusually blunt: an individual is a head of a household "if, and only if," the individual is not married at the close of the taxable year, is not a surviving spouse as defined in subsection (a), and maintains as a home a household which constitutes for more than one-half of the taxable year the principal place of abode of a qualifying child or other qualifying person (26 U.S.C. § 2, n.d.). The paragraph then adds its own definition of maintaining: an individual maintains a household "only if over half of the cost of maintaining the household during the taxable year is furnished by such individual."

**"If, and only if" is drafting that leaves nothing to preference.** So is a definition of "maintains" written into the same paragraph.

## The joint return, and the sentence people sign without reading

**26 U.S.C. § 6013(a)** allows a married couple to make a single return jointly "even though one of the spouses has neither gross income nor deductions" (26 U.S.C. § 6013, n.d.).

Then **§ 6013(d)(3)**: "if a joint return is made, the tax shall be computed on the aggregate income and the liability with respect to the tax shall be joint and several" (26 U.S.C. § 6013, n.d.).

**Joint and several means each spouse is liable for the whole tax, not for half of it.** Collection may proceed against either one for the entire amount, and it does not matter which of them earned the income, which of them prepared the return, or whether the marriage still exists when the bill arrives. That is a legal consequence of a signature, and almost nobody is told about it at the moment they sign.

**Relief from it exists and is a separate procedure.** Section 6015 provides routes for a spouse to be relieved of joint liability in defined circumstances, each with its own conditions and its own deadlines. **This course names the section and stops there**, because whether any of it applies to a particular person is exactly the individualised question it refuses to answer.

## And status moves the numbers, which is why no numbers appear here

Filing status selects the rate schedule and the basic standard deduction, and both are adjusted annually. **So the amounts are deliberately absent from this lesson.** Look them up in the current year's instructions or Publication 17, and write the year down beside whatever you find.

:::reveal On what date does 26 U.S.C. 7703(a) determine whether an individual is married? ||| As of the close of the taxable year, or the time of death where a spouse dies during it.

:::reveal What does joint and several liability under 6013(d)(3) mean for each spouse? ||| Each is liable for the whole tax, and collection may proceed against either for the entire amount.

:::reveal What phrase does 26 U.S.C. 2(b)(1) use to introduce the head of household test? ||| If, and only if, which is drafting that admits no preference.

## Vocabulary
- **Filing status**: the category the Code assigns a filer, determined by facts on a stated date rather than chosen, which selects the rate schedule and the basic standard deduction.
- **Joint and several liability**: the rule at 6013(d)(3) making each spouse on a joint return liable for the entire tax rather than a share of it.
- **Head of household**: the status defined at 2(b)(1) by a closed test, including a household-maintenance requirement the same paragraph defines.
- **Section 6015 relief**: the separate statutory procedure by which a spouse may be relieved of joint liability, named here and not advised on.

## Sources
26 U.S.C. § 2. (n.d.). *Definitions and special rules*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/2

26 U.S.C. § 6013. (n.d.). *Joint returns of income tax by husband and wife*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/6013

26 U.S.C. § 6015. (n.d.). *Relief from joint and several liability on joint return*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/6015

26 U.S.C. § 7703. (n.d.). *Determination of marital status*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/7703`,
    },
    {
      slug: "quiz-the-return",
      title: "Section 2 review · Filing, the signature, and status",
      section: "Section 2 · The return is a document you sign",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What does 26 U.S.C. 6012(a)(1)(A) use in place of a dollar figure?",
            options: ["A reference to the exemption amount", "A table of thresholds broken down by filing status and age", "A percentage of the median household income for the taxable year", "The standard deduction stated in section 63 of the same subtitle"],
            correctIndex: 0,
            explanation: "The practical thresholds are published annually, which is why the course prints none of them.",
            sourceLessonSlug: "who-has-to-file-and-who-should",
          },
          {
            prompt: "Which measure of income does the filing requirement in 6012(a)(1)(A) use?",
            options: ["Gross income", "Adjusted gross income, after the deductions allowed above the line", "Taxable income, after the standard deduction has been subtracted", "Net earnings from self-employment, computed under chapter 2"],
            correctIndex: 0,
            explanation: "It is the starting measure, before deductions of any kind.",
            sourceLessonSlug: "who-has-to-file-and-who-should",
          },
          {
            prompt: "Where does the lesson send a reader for the current filing threshold?",
            options: ["This year's instructions and Publication 17", "The text of section 6012 itself, which states the figures directly", "The withholding tables the Secretary issues to employers each year", "A summary table maintained by the course and revised each January"],
            correctIndex: 0,
            explanation: "Publication 17 is free, comprehensive and reissued annually, and the revision year should be named whenever it is quoted.",
            sourceLessonSlug: "who-has-to-file-and-who-should",
          },
          {
            prompt: "Under 26 U.S.C. 6072(a), when must a calendar-year return be filed?",
            options: ["On or before 15 April", "Within ninety days of the close of the calendar year", "On or before the last day of the third month following year end", "By a date the Secretary sets each year in a revenue procedure"],
            correctIndex: 0,
            explanation: "The statute says on or before the 15th day of April following the close of the calendar year.",
            sourceLessonSlug: "who-has-to-file-and-who-should",
          },
          {
            prompt: "Why can a person below the filing threshold still be owed money and receive none of it?",
            options: ["A refund needs a computed overpayment", "Because refundable credits are only paid to filers who owe tax", "Because withholding below the threshold is refunded automatically", "Because the Secretary pays such refunds only on a written request"],
            correctIndex: 0,
            explanation: "Section 6401(b)(1) and 6402(a) both run on a computed overpayment, and there is no computation without a return.",
            sourceLessonSlug: "who-has-to-file-and-who-should",
          },
          {
            prompt: "What happens to chapter 24 withholding if no return is ever filed?",
            options: ["It is never credited", "It is refunded automatically after the limitation period expires", "It is transferred to the following year as an estimated tax payment", "It is credited against the chapter 21 taxes withheld on the same wages"],
            correctIndex: 0,
            explanation: "Section 31(a)(1) credits it against the tax the return computes, so with no return there is no credit and no refund.",
            sourceLessonSlug: "who-has-to-file-and-who-should",
          },
          {
            prompt: "Under 26 U.S.C. 6511(a), what is the general period for claiming a refund?",
            options: ["Three years from filing, or two from payment", "Six years from the close of the taxable year in every case", "Ten years from the date the Secretary assessed the tax at issue", "Until the assessment period under section 6501 has closed"],
            correctIndex: 0,
            explanation: "Whichever of those two periods expires the later, which is why the filing date matters to the taxpayer as well.",
            sourceLessonSlug: "who-has-to-file-and-who-should",
          },
          {
            prompt: "Under 6511(a), how long does someone who never filed have to claim a refund?",
            options: ["Two years from payment", "Three years from the close of the taxable year in question", "Until the Secretary issues a notice of deficiency for that year", "Indefinitely, since no return means no limitation period has begun"],
            correctIndex: 0,
            explanation: "Where no return was filed, the second branch of the sentence is the operative one and it is the shorter of the two.",
            sourceLessonSlug: "who-has-to-file-and-who-should",
          },
          {
            prompt: "Why does withholding matter to the section 6511(a) clock for a non-filer?",
            options: ["Withholding counts as tax paid", "Because withholding suspends the limitation period until a return arrives", "Because an employer's remittance restarts the period each pay period", "Because chapter 24 amounts are excluded from the definition of payment"],
            correctIndex: 0,
            explanation: "That is what makes the two-years-from-payment branch the operative limit for someone who never filed.",
            sourceLessonSlug: "who-has-to-file-and-who-should",
          },
          {
            prompt: "Which case does this course expressly not cover?",
            options: ["Filing from abroad", "The consequences of signing a return under penalties of perjury", "The federal withholding taken from an ordinary domestic paycheck", "The limitation period for claiming a refund of overpaid tax"],
            correctIndex: 0,
            explanation: "The exclusion for foreign earned income, the foreign tax credit and foreign account reporting belong to the catalog's Taxes for Americans Abroad course.",
            sourceLessonSlug: "who-has-to-file-and-who-should",
          },
          {
            prompt: "Which catalog course does this lesson hand the foreign case to?",
            options: ["Taxes for Americans Abroad", "Banking Abroad, which covers accounts held outside the United States", "Moving Abroad 101, which covers residence and the practicalities of a move", "Healthcare Abroad, which covers coverage outside the United States"],
            correctIndex: 0,
            explanation: "The course names the handoff rather than summarising a subject it has not built.",
            sourceLessonSlug: "who-has-to-file-and-who-should",
          },
          {
            prompt: "Does this lesson tell a reader whether to file?",
            options: ["No", "Yes, whenever any tax was withheld during the year", "Yes, whenever gross income falls below the published threshold", "Only where the reader expects to claim a refundable credit"],
            correctIndex: 0,
            explanation: "It states what the statute requires, what the refund plumbing needs, and how long the window stays open.",
            sourceLessonSlug: "who-has-to-file-and-who-should",
          },
          {
            prompt: "What is Publication 17?",
            options: ["The IRS's free annual guide for individuals", "The regulation prescribing the employee's withholding certificate", "The statutory table of filing thresholds enacted by Congress", "The annual revenue procedure adjusting each inflation-indexed amount"],
            correctIndex: 0,
            explanation: "It is comprehensive and reissued annually, which is why the lesson insists on naming the revision year.",
            sourceLessonSlug: "who-has-to-file-and-who-should",
          },
          {
            prompt: "What does 26 U.S.C. 6065 require of a return?",
            options: ["A declaration under penalties of perjury", "A signature witnessed by a person authorised to administer oaths", "A statement of the preparer's identifying number alongside the filer's", "An acknowledgement that the Secretary may examine the return later"],
            correctIndex: 0,
            explanation: "It must contain or be verified by a written declaration that it is made under the penalties of perjury.",
            sourceLessonSlug: "under-penalties-of-perjury",
          },
          {
            prompt: "Which documents does section 6065 reach?",
            options: ["Any return, declaration, statement or document required", "Only the annual individual income tax return itself", "Only documents a paid preparer signs on a filer's behalf", "Only returns filed electronically rather than on paper"],
            correctIndex: 0,
            explanation: "The sentence covers anything required to be made under any provision of the internal revenue laws or regulations.",
            sourceLessonSlug: "under-penalties-of-perjury",
          },
          {
            prompt: "What does 26 U.S.C. 7206(1) make criminal?",
            options: ["Signing a return you do not believe true", "Failing to file a return by the date section 6072 prescribes", "Understating tax by any amount, whatever the filer's state of mind", "Refusing to produce records when an examination has been opened"],
            correctIndex: 0,
            explanation: "It requires wilfully making and subscribing a document verified under penalties of perjury and not believed true as to every material matter.",
            sourceLessonSlug: "under-penalties-of-perjury",
          },
          {
            prompt: "What is the section 6651(a)(1) failure-to-file penalty rate?",
            options: ["5 percent a month, capped at 25 percent", "1 percent a month, with no aggregate limit stated in the statute", "10 percent of the tax, imposed once whatever the length of delay", "0.5 percent a month, matching the failure-to-pay penalty exactly"],
            correctIndex: 0,
            explanation: "Five percent for the first month or fraction, five more for each additional month, not exceeding 25 percent in the aggregate.",
            sourceLessonSlug: "under-penalties-of-perjury",
          },
          {
            prompt: "What is the section 6651(a)(2) failure-to-pay penalty rate?",
            options: ["0.5 percent a month", "5 percent a month, the same rate as the failure to file", "2 percent a month, compounded from the date the tax was due", "An amount the Secretary sets by revenue procedure for each year"],
            correctIndex: 0,
            explanation: "Same structure and same 25 percent aggregate cap, at one tenth the rate of the failure-to-file penalty.",
            sourceLessonSlug: "under-penalties-of-perjury",
          },
          {
            prompt: "What is the escape clause both section 6651 penalties carry?",
            options: ["Reasonable cause, not wilful neglect", "A first-time waiver available once in any five-year period", "A hardship exception based on the filer's household income", "An automatic abatement where the tax is paid within thirty days"],
            correctIndex: 0,
            explanation: "Both paragraphs begin unless it is shown that such failure is due to reasonable cause and not due to willful neglect.",
            sourceLessonSlug: "under-penalties-of-perjury",
          },
          {
            prompt: "What is the ratio between the two section 6651 penalties?",
            options: ["Ten to one", "Two to one, with the failure to pay the more expensive of the two", "One to one, since both accrue at the same monthly percentage rate", "Five to one, reflecting the difference in their aggregate caps"],
            correctIndex: 0,
            explanation: "Five percent a month against half a percent, which is the Code telling you which position it treats as worse.",
            sourceLessonSlug: "under-penalties-of-perjury",
          },
          {
            prompt: "What is the general assessment period under 26 U.S.C. 6501(a)?",
            options: ["Three years after the return was filed", "Three years after the close of the taxable year in question", "Six years after the tax was paid by withholding or otherwise", "Ten years after the Secretary records the liability on the account"],
            correctIndex: 0,
            explanation: "The period runs from the filing of the return, which is why filing is what starts it.",
            sourceLessonSlug: "under-penalties-of-perjury",
          },
          {
            prompt: "What does 26 U.S.C. 6501(e)(1)(A) extend the assessment period to?",
            options: ["Six years", "Four years, where the return understates the tax by any amount", "Eight years, where the omission relates to a foreign source of income", "Twelve years, where the omission is discovered on examination"],
            correctIndex: 0,
            explanation: "It applies where the taxpayer omits an amount in excess of 25 percent of the gross income stated in the return.",
            sourceLessonSlug: "under-penalties-of-perjury",
          },
          {
            prompt: "What triggers the six-year assessment period?",
            options: ["Omitting over 25 percent of stated gross income", "Any understatement of tax exceeding one thousand dollars", "A return prepared by someone other than the taxpayer", "A refund claim filed after the ordinary period has closed"],
            correctIndex: 0,
            explanation: "The measure is gross income stated in the return, not the tax and not the deductions claimed.",
            sourceLessonSlug: "under-penalties-of-perjury",
          },
          {
            prompt: "What is the assessment period for a false or fraudulent return under 6501(c)(1)?",
            options: ["There is none", "Six years, the same as a substantial omission of income", "Ten years, running from the date the fraud was discovered", "Three years, but only where the taxpayer filed on time"],
            correctIndex: 0,
            explanation: "Where the return is false or fraudulent with the intent to evade tax, the tax may be assessed at any time.",
            sourceLessonSlug: "under-penalties-of-perjury",
          },
          {
            prompt: "What is the assessment period where no return was filed at all?",
            options: ["There is none", "Two years from the date the tax was paid by withholding", "Three years from the deadline the return should have met", "Six years, on the theory that all income was omitted"],
            correctIndex: 0,
            explanation: "Section 6501(c)(3) allows assessment at any time, so a non-filer has removed the deadline rather than bought silence.",
            sourceLessonSlug: "under-penalties-of-perjury",
          },
          {
            prompt: "What does the lesson call the three-year assessment period?",
            options: ["Something a filed return produces", "A constitutional protection independent of any filing", "A grace period the Secretary grants at the taxpayer's request", "A limit that runs from the close of the taxable year regardless"],
            correctIndex: 0,
            explanation: "It is not a default entitlement, which is why the four subsections read together change the meaning of not filing.",
            sourceLessonSlug: "under-penalties-of-perjury",
          },
          {
            prompt: "What makes a return a sworn statement rather than a form?",
            options: ["Section 6065", "The presence of a paid preparer's signature alongside the filer's", "The requirement in section 6072 that it be filed by a fixed date", "The Secretary's authority under section 7602 to examine it later"],
            correctIndex: 0,
            explanation: "One sentence requiring a written declaration under penalties of perjury is what converts the document.",
            sourceLessonSlug: "under-penalties-of-perjury",
          },
          {
            prompt: "On what date does 26 U.S.C. 7703(a) determine whether an individual is married?",
            options: ["The close of the taxable year", "The date the return for that year is actually filed", "The first day of the taxable year to which the return relates", "The date the Secretary receives the withholding certificate"],
            correctIndex: 0,
            explanation: "The one exception is where a spouse dies during the year, in which case the determination is made at the time of death.",
            sourceLessonSlug: "filing-status-is-a-legal-fact",
          },
          {
            prompt: "What is the exception to the close-of-year rule in 7703(a)?",
            options: ["Death of a spouse during the year", "Separation under a written agreement signed before July", "A change of residence to a different state during the year", "The filing of a joint return for the immediately preceding year"],
            correctIndex: 0,
            explanation: "In that case the determination is made as of the time of the death rather than at year end.",
            sourceLessonSlug: "filing-status-is-a-legal-fact",
          },
          {
            prompt: "How many conditions must hold together for the 7703(b) living-apart rule?",
            options: ["Three", "Two, being the household test and the six-month absence test", "Four, adding a requirement that a decree of separation be in force", "One, being that the spouses maintained separate residences"],
            correctIndex: 0,
            explanation: "A household that is a child's principal place of abode for over half the year, over half the maintenance cost furnished, and the spouse absent for the last six months.",
            sourceLessonSlug: "filing-status-is-a-legal-fact",
          },
          {
            prompt: "What must be true of the spouse during the last six months under 7703(b)?",
            options: ["Not a member of the household", "Contributing less than half the household's maintenance cost", "Living in a different state from the individual claiming the rule", "Filing a separate return for the same taxable year in question"],
            correctIndex: 0,
            explanation: "The statute names the last six months of the taxable year specifically, alongside the two other conditions.",
            sourceLessonSlug: "filing-status-is-a-legal-fact",
          },
          {
            prompt: "What phrase does 26 U.S.C. 2(b)(1) use to introduce the head of household test?",
            options: ["If, and only if", "To the extent that the Secretary may by regulation provide", "Where the individual so elects on a timely filed return", "Notwithstanding any other provision of this subtitle"],
            correctIndex: 0,
            explanation: "It is drafting that admits no preference, and the same paragraph then defines what maintaining a household means.",
            sourceLessonSlug: "filing-status-is-a-legal-fact",
          },
          {
            prompt: "What share of the household's cost must a head of household furnish under 2(b)(1)?",
            options: ["Over half", "At least a quarter, measured across the whole taxable year", "The entire cost, with no contribution from any other person", "Whatever share exceeds the qualifying child's own contribution"],
            correctIndex: 0,
            explanation: "The paragraph says an individual maintains a household only if over half of the cost is furnished by that individual.",
            sourceLessonSlug: "filing-status-is-a-legal-fact",
          },
          {
            prompt: "For how much of the year must the household be a qualifying child's principal place of abode?",
            options: ["More than one-half", "The entire taxable year without any interruption", "At least three months, whether or not consecutive", "The last six months of the taxable year specifically"],
            correctIndex: 0,
            explanation: "Section 2(b)(1) uses more than one-half of the taxable year for the abode test.",
            sourceLessonSlug: "filing-status-is-a-legal-fact",
          },
          {
            prompt: "What does 26 U.S.C. 6013(a) permit even where one spouse has no income?",
            options: ["A single joint return", "A transfer of the other spouse's deductions to the earning spouse", "An exemption from the requirement to sign under penalties of perjury", "A separate computation of tax on each spouse's own income"],
            correctIndex: 0,
            explanation: "The subsection says so expressly, even though one of the spouses has neither gross income nor deductions.",
            sourceLessonSlug: "filing-status-is-a-legal-fact",
          },
          {
            prompt: "What does 26 U.S.C. 6013(d)(3) say about liability on a joint return?",
            options: ["It is joint and several", "It is divided in proportion to each spouse's share of the income", "It attaches only to the spouse who signed the return first", "It falls on the spouse whose name appears first on the form"],
            correctIndex: 0,
            explanation: "The tax is computed on the aggregate income and the liability is joint and several.",
            sourceLessonSlug: "filing-status-is-a-legal-fact",
          },
          {
            prompt: "What does joint and several liability mean for each spouse?",
            options: ["Each is liable for the whole tax", "Each is liable for the portion attributable to their own income", "Each is liable only while the marriage continues to exist", "Each is liable up to the value of jointly held property"],
            correctIndex: 0,
            explanation: "Collection may proceed against either spouse for the entire amount, whoever earned the income or prepared the return.",
            sourceLessonSlug: "filing-status-is-a-legal-fact",
          },
          {
            prompt: "Which section provides relief from joint and several liability?",
            options: ["Section 6015", "Section 6013(b), which permits a joint return to be amended", "Section 6511, which sets the period for claiming a refund", "Section 7703, which determines an individual's marital status"],
            correctIndex: 0,
            explanation: "It supplies routes with their own conditions and deadlines, which the course names without advising on.",
            sourceLessonSlug: "filing-status-is-a-legal-fact",
          },
          {
            prompt: "Why does this lesson print no rate schedule or standard deduction amount?",
            options: ["Both are adjusted annually", "Because they are set by the states rather than by federal law", "Because they depend on facts the filer supplies on the certificate", "Because the Code no longer states either figure in any section"],
            correctIndex: 0,
            explanation: "Filing status selects them, and the lesson sends a reader to the current instructions with the year written down.",
            sourceLessonSlug: "filing-status-is-a-legal-fact",
          },
          {
            prompt: "What does filing status select, according to the lesson?",
            options: ["The rate schedule and the standard deduction", "The chapter of the Code under which wages are withheld upon", "The limitation period for assessing tax on the year's return", "The date by which a calendar-year return must be filed"],
            correctIndex: 0,
            explanation: "Both are adjusted annually, which is why the lesson refuses to print either.",
            sourceLessonSlug: "filing-status-is-a-legal-fact",
          },
          {
            prompt: "How does the lesson describe the difference a single day can make to filing status?",
            options: ["One day decides twelve months", "The status is prorated across the portion of the year affected", "The change takes effect from the following taxable year onward", "The filer elects which of the two statuses to apply for that year"],
            correctIndex: 0,
            explanation: "Because 7703(a) fixes the determination at the close of the taxable year, nothing about the intervening conduct changes it.",
            sourceLessonSlug: "filing-status-is-a-legal-fact",
          },
          {
            prompt: "What does the lesson say about the moment a joint return is signed?",
            options: ["Almost nobody is told about the liability", "The signature is witnessed by a person authorised to take oaths", "The Secretary confirms each spouse's consent before processing it", "Each spouse signs a separate acknowledgement of their own share"],
            correctIndex: 0,
            explanation: "Joint and several liability is a legal consequence of that signature, and it survives the marriage.",
            sourceLessonSlug: "filing-status-is-a-legal-fact",
          },
          {
            prompt: "Which condition of the 7703(b) rule concerns a child?",
            options: ["The household is the child's principal abode", "The child must be under the age of seventeen at year end", "The child must have earned income below the filing threshold", "The child must be claimed on the other spouse's return instead"],
            correctIndex: 0,
            explanation: "For more than half the taxable year, and for a child for whom a dependency deduction is allowable.",
            sourceLessonSlug: "filing-status-is-a-legal-fact",
          },
          {
            prompt: "Why does the course stop after naming section 6015?",
            options: ["Whether it applies is individualised", "Because the section was repealed and replaced by section 6013(e)", "Because relief is granted automatically once a divorce is final", "Because the catalog treats liability questions as out of scope"],
            correctIndex: 0,
            explanation: "That is exactly the kind of question the course refuses to answer about a particular person's facts.",
            sourceLessonSlug: "filing-status-is-a-legal-fact",
          },
          {
            prompt: "What is a limitation period, as the course uses the term?",
            options: ["The outside time for doing an act", "A cap on the amount of tax that may be assessed for a year", "A restriction on which credits may be claimed on a late return", "A ceiling on the penalties that may accrue under section 6651"],
            correctIndex: 0,
            explanation: "Section 6511(a) is the taxpayer's version and section 6501 is the government's.",
            sourceLessonSlug: "who-has-to-file-and-who-should",
          },
          {
            prompt: "What is verification, in the sense section 6065 uses it?",
            options: ["The declaration under penalties of perjury", "A check performed by the Secretary before a refund is issued", "A confirmation from the employer that the wages reported are correct", "An audit conducted before a return is accepted for processing"],
            correctIndex: 0,
            explanation: "It is what converts a form into a sworn statement and brings section 7206(1) into play.",
            sourceLessonSlug: "under-penalties-of-perjury",
          },
          {
            prompt: "What is assessment, as section 6501 uses the term?",
            options: ["The formal recording of a liability", "The examination of a return for accuracy and completeness", "The collection of tax from a taxpayer's wages or bank account", "The computation a taxpayer performs when preparing a return"],
            correctIndex: 0,
            explanation: "Section 6501 confines it to a period measured from the filing of the return, subject to its own exceptions.",
            sourceLessonSlug: "under-penalties-of-perjury",
          },
          {
            prompt: "Does the course attempt to explain what counts as reasonable cause?",
            options: ["No", "Yes, through a list of the circumstances the Secretary accepts", "Yes, by reference to the penalty abatement rules in section 6404", "Only for the failure-to-file penalty and not the failure to pay"],
            correctIndex: 0,
            explanation: "It says the escape is real and that what counts is a body of law of its own that the course does not attempt.",
            sourceLessonSlug: "under-penalties-of-perjury",
          },
          {
            prompt: "What does the lesson say about a marriage on 31 December compared with one on 2 January?",
            options: ["They produce different statuses for the year ended", "They produce the same status, since the years are adjacent", "The later date governs, because status follows the filing date", "The filer may choose between them on a timely filed return"],
            correctIndex: 0,
            explanation: "Section 7703(a) fixes the determination at the close of the taxable year, so the one-day gap crosses a boundary.",
            sourceLessonSlug: "filing-status-is-a-legal-fact",
          },
          {
            prompt: "What must a head of household not be, under 2(b)(1), besides unmarried?",
            options: ["A surviving spouse", "A person who filed jointly in the preceding taxable year", "A person claimed as a dependent on any other return", "A person whose qualifying child has any gross income"],
            correctIndex: 0,
            explanation: "The test excludes a surviving spouse as defined in section 2(a) before reaching the household conditions.",
            sourceLessonSlug: "filing-status-is-a-legal-fact",
          },
          {
            prompt: "How does the lesson characterise filing status as it is usually presented?",
            options: ["As a menu, when it is a determination", "As a determination, when it is genuinely a free choice", "As an election the filer makes once and cannot later change", "As a matter of state law rather than of the Internal Revenue Code"],
            correctIndex: 0,
            explanation: "The Code makes the determination on a date, using tests written as closed conditions.",
            sourceLessonSlug: "filing-status-is-a-legal-fact",
          },
          {
            prompt: "What are the maximum fine and prison term the lesson attributes to a section 7206 conviction for an individual?",
            options: ["A fine and up to three years", "A fine only, with no possibility of a custodial sentence", "Up to one year, which makes the offence a misdemeanour", "Up to ten years, with a mandatory minimum on a first offence"],
            correctIndex: 0,
            explanation: "The offence is a felony, and the statute also allows the costs of prosecution to be imposed.",
            sourceLessonSlug: "under-penalties-of-perjury",
          },
          {
            prompt: "What does the course say the refund plumbing needs before it can run?",
            options: ["A return", "A written claim on a form the Secretary prescribes", "An examination confirming the amounts the filer reported", "A certificate from the employer showing the tax withheld"],
            correctIndex: 0,
            explanation: "Sections 6401(b)(1) and 6402(a) both operate on a computed overpayment, and the computation comes from the return.",
            sourceLessonSlug: "who-has-to-file-and-who-should",
          },
          {
            prompt: "Which two statutory clocks does the lesson say filing starts?",
            options: ["Assessment and refund", "Collection and examination, which run from the same date", "Penalty accrual and interest, which stop once a return arrives", "Withholding and estimated payments, which reset each January"],
            correctIndex: 0,
            explanation: "Section 6501 measures the government's period from the filed return and section 6511(a) measures the taxpayer's from the same event.",
            sourceLessonSlug: "under-penalties-of-perjury",
          },
          {
            prompt: "What does 6501(e)(1)(A) measure the 25 percent against?",
            options: ["Gross income stated in the return", "The tax shown as due on the face of the return", "The total of deductions claimed for the taxable year", "The refund the taxpayer claimed for that same year"],
            correctIndex: 0,
            explanation: "The omitted amount must exceed 25 percent of the gross income stated, which is a comparison to the return rather than to the tax.",
            sourceLessonSlug: "under-penalties-of-perjury",
          },
          {
            prompt: "What does the lesson say a non-filer has NOT bought?",
            options: ["Silence", "Any protection against the failure-to-pay penalty", "The right to claim a refund under section 6511(a)", "An extension of the ordinary filing deadline in section 6072"],
            correctIndex: 0,
            explanation: "Under 6501(c)(3) the tax may be assessed at any time, so what has been removed is the deadline that would have ended the matter.",
            sourceLessonSlug: "under-penalties-of-perjury",
          },
          {
            prompt: "What kind of income measure does the lesson say gross income is?",
            options: ["The starting measure, before deductions", "The measure remaining after the standard deduction is taken", "The measure the withholding tables use to compute each payment", "The measure used to determine eligibility for a refundable credit"],
            correctIndex: 0,
            explanation: "That is why the section 6012 filing requirement is written against it rather than against taxable income.",
            sourceLessonSlug: "who-has-to-file-and-who-should",
          },
          {
            prompt: "Which three foreign-case topics does the lesson name as outside its scope?",
            options: ["Foreign earned income, foreign tax credit, account reporting", "Estate tax, gift tax, and generation-skipping transfer tax", "Payroll tax, self-employment tax, and the additional Medicare tax", "State income tax, local income tax, and property tax"],
            correctIndex: 0,
            explanation: "All three belong to the catalog's course on taxes for Americans abroad rather than to this one.",
            sourceLessonSlug: "who-has-to-file-and-who-should",
          },
          {
            prompt: "What does the lesson say is not a trick and not hidden?",
            options: ["That doing nothing can forfeit money owed", "That the filing threshold changes with each taxable year", "That withholding is computed from a certificate the filer signs", "That a joint return makes both spouses liable for the whole tax"],
            correctIndex: 0,
            explanation: "It follows from the plumbing: no return, no computed overpayment, no refund.",
            sourceLessonSlug: "who-has-to-file-and-who-should",
          },
          {
            prompt: "Which is worse in the Code's own pricing, not filing or not paying?",
            options: ["Not filing", "Not paying, because the balance itself continues to grow", "Neither, because the two penalties accrue at identical rates", "It depends on whether the Secretary examines the return"],
            correctIndex: 0,
            explanation: "Five percent a month against half a percent a month is the Code stating its own priority.",
            sourceLessonSlug: "under-penalties-of-perjury",
          },
          {
            prompt: "What is a substantial omission, as the lesson defines it?",
            options: ["Over 25 percent of stated gross income", "Any omission the Secretary discovers on examination", "An understatement of more than five thousand dollars of tax", "A failure to report income from any source outside the country"],
            correctIndex: 0,
            explanation: "It is the section 6501(e)(1)(A) trigger that doubles the ordinary three-year assessment period.",
            sourceLessonSlug: "under-penalties-of-perjury",
          },
          {
            prompt: "What does the lesson call the head of household definition of maintaining a household?",
            options: ["Written into the same paragraph", "Left entirely to the Secretary's regulations to supply", "Borrowed from the definition used in section 7703(b)", "Determined by the state law where the household is located"],
            correctIndex: 0,
            explanation: "Section 2(b)(1) supplies its own over-half-the-cost test rather than leaving the word undefined.",
            sourceLessonSlug: "filing-status-is-a-legal-fact",
          },
          {
            prompt: "Does the marriage still have to exist when a joint tax bill arrives?",
            options: ["No", "Yes, or the liability lapses as to both spouses", "Yes, unless a decree expressly preserves the liability", "Only where the return was filed during the marriage"],
            correctIndex: 0,
            explanation: "Joint and several liability does not depend on the marriage continuing, on who earned the income, or on who prepared the return.",
            sourceLessonSlug: "filing-status-is-a-legal-fact",
          },
          {
            prompt: "What does 26 U.S.C. 6072(a) govern?",
            options: ["When a return must be filed", "Who is required to make a return of income", "How long the Secretary has to assess the tax shown", "Whether a return must be verified under penalties of perjury"],
            correctIndex: 0,
            explanation: "It fixes 15 April for calendar-year returns, separately from the section 6012 question of who must file at all.",
            sourceLessonSlug: "who-has-to-file-and-who-should",
          },
        ],
      },
    },
  ],
};
