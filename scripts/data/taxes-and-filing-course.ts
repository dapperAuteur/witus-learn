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
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3 — Credits, and where the tax system pays out
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "refundable-or-not",
      title: "7 · The distinction that decides whether a credit can pay you",
      section: "Section 3 · Credits, and where the tax system pays out",
      body: `Two words separate a benefit that can put money in a bank account from one that can only ever reduce a bill to zero. They are **refundable** and **non-refundable**, and the difference is written into the Code rather than into a brochure.

## First, a deduction is not a credit

**A deduction reduces the income the tax is computed on. A credit reduces the tax itself.**

Write it as arithmetic. Let the rate applying to the last dollars of a filer's income be **r**. A deduction of **D** reduces the tax by **r times D**. A credit of **C** reduces the tax by **C**.

**Put a labelled hypothetical rate of 10 percent on it.** A deduction of 1,000 saves 100. A credit of 1,000 saves 1,000. The credit is ten times the deduction, for the same headline figure.

**Ten percent is a number chosen to make the arithmetic clean.** It is not a current bracket rate, and this course prints none, because the rate schedule is adjusted annually and a figure written into a lesson outlives its accuracy silently.

## Then, the floor

A **non-refundable** credit can reduce the tax to zero and no further. The Code does this through a limitation: section 24(d)(1)(A) refers in terms to "the limitation under section 26(a)", which is the general cap on the aggregate of the nonrefundable personal credits (26 U.S.C. § 24, n.d.). Below zero, the credit simply stops.

A **refundable** credit does not stop. **26 U.S.C. § 6401(b)(1)** says that where the amount allowable as credits under subpart C, which the section itself labels as relating to refundable credits, exceeds the tax imposed by subtitle A reduced by the credits allowable under subparts A, B, D and G, "the amount of such excess shall be considered an overpayment" (26 U.S.C. § 6401, n.d.).

**That single deeming sentence IS the definition of refundable.** There is nothing else to it. Congress did not build a payment system; it declared an excess to be an overpayment and let the existing refund machinery in section 6402(a) do the rest.

## The same credit amount, two different outcomes

Take a filer whose computed tax for the year is **400**.

**Give them a non-refundable credit of 1,000.** The tax goes to zero. The remaining 600 of credit does nothing at all. It is not carried, it is not paid, it simply is not used.

**Give them a refundable credit of 1,000 instead.** The tax goes to zero and the remaining 600 is deemed an overpayment under 6401(b)(1). Section 6402(a) then requires the Secretary to refund the balance. **Six hundred dollars leaves the Treasury and arrives with the filer.**

**Same headline number, same taxpayer, same year, opposite result.** The only thing that changed was which subpart of the Code the credit sits in.

## Why that is checkable rather than arguable

Whether a credit is refundable is not a matter of opinion or of how generous a program feels. **It is a drafting fact**: either the credit is enacted in subpart C, or it is not. You can look up the section and read where it sits. Section 32, the earned income credit, is there. So is the portion of section 24 that subsection (d) makes refundable, which is why the next two lessons take both apart.

:::reveal What is the difference between a deduction and a credit? ||| A deduction reduces the income the tax is computed on, while a credit reduces the tax itself.

:::reveal Which sentence of the Code is the definition of a refundable credit? ||| 26 U.S.C. 6401(b)(1), which says the excess shall be considered an overpayment.

:::reveal On a computed tax of 400, what does a refundable credit of 1,000 produce that a non-refundable one does not? ||| A 600 overpayment, which section 6402(a) requires to be refunded.

## Vocabulary
- **Deduction**: an amount subtracted from income before the tax is computed, so its value depends on the rate applying to the last dollars of income.
- **Credit**: an amount subtracted from the tax itself, so its value is its face amount.
- **Non-refundable credit**: one limited by section 26(a) to the tax, which can reduce a liability to zero and does nothing beyond that point.
- **Refundable credit**: one enacted in subpart C, whose excess over the tax section 6401(b)(1) deems an overpayment so that section 6402(a) refunds it.

## Sources
26 U.S.C. § 24. (n.d.). *Child tax credit*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/24

26 U.S.C. § 6401. (n.d.). *Amounts treated as overpayments*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/6401

26 U.S.C. § 6402. (n.d.). *Authority to make credits or refunds*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/6402`,
    },
    {
      slug: "the-earned-income-credit",
      title: "8 · The earned income credit, and what it is actually for",
      section: "Section 3 · Credits, and where the tax system pays out",
      body: `This is the place where the tax system stops collecting revenue and starts paying money out, and it is the centre of this course.

**26 U.S.C. § 32(a)(1)**: "In the case of an eligible individual, there shall be allowed as a credit against the tax imposed by this subtitle for the taxable year an amount equal to the credit percentage of so much of the taxpayer's earned income for the taxable year as does not exceed the earned income amount" (26 U.S.C. § 32, n.d.).

**Read the shape rather than the numbers.** A percentage of earnings, up to a ceiling. Below the ceiling the credit rises with every extra dollar earned. At the ceiling it plateaus. Above a further threshold it phases out until it reaches zero. The percentages and the dollar figures sit in section 32(b), and **section 32(j) adjusts the dollar amounts for inflation**, which is the statute telling you in its own text that the numbers are not fixed.

**So this lesson prints none of them.** The current figures live in the year's revenue procedure and in the current revision of IRS Publication 17, and anyone quoting one should name the tax year beside it.

## You must have worked

**§ 32(c)(2)(A)** defines earned income as "wages, salaries, tips, and other employee compensation, but only if such amounts are includible in gross income for the taxable year, plus the amount of the taxpayer's net earnings from self-employment for the taxable year" (26 U.S.C. § 32, n.d.).

**That is the design fact that explains the whole program.** A household with no earned income receives no earned income credit, however low its income is. The credit is not conditioned on need alone; it is conditioned on having earnings for the year, and it grows with them across the first range. It is a wage subsidy written as a tax credit, and its shape follows from that.

**It also means the program excludes people by construction**, which is a fact about the statute rather than a complaint about it. Someone out of work for the whole year, or unable to work, is outside section 32(a)(1) at the first clause.

## Who counts as eligible

Two routes. With a qualifying child, **§ 32(c)(3)(A)** defines the term by reference to section 152(c), determined without regard to one of its paragraphs and without section 152(e).

Without a qualifying child, **§ 32(c)(1)(A)(ii)** sets three conditions together: the individual's "principal place of abode is in the United States for more than one-half of such taxable year"; the individual, or if married either spouse, "has attained age 25 but not attained age 65 before the close of the taxable year"; and the individual is not a dependent for whom a deduction is allowable to another taxpayer for a taxable year beginning in the same calendar year (26 U.S.C. § 32, n.d.).

**An age band, a residence test, and a not-a-dependent test, all three at once.**

## How large the program is

The credit is not a minor provision. The Treasury and academic researchers who studied its administration state the position plainly: "the Earned Income Tax Credit (EITC) has replaced welfare as the largest cash-based safety net program in the United States" (Elzayn et al., 2023, p. 1).

**Hold that beside what you learned in Section 1.** The largest cash safety-net program in the country is delivered through the refund machinery, which means it is delivered once a year, to people who filed a return, after the return is processed. Section 4 of this course is about the date that delivery is allowed to happen.

## What this course will not do

**It will not tell you whether you qualify.** Eligibility turns on relationship, age and residency definitions in section 152, on facts about a household this course does not know, and on figures that change every year. **Getting it wrong in either direction is expensive**, which is exactly why the next lesson exists and why Section 5 names the free, non-commercial places to get help: the volunteer preparation programs, and the IRS's own free publications.

:::reveal What does 26 U.S.C. 32(c)(2)(A) require before any earned income credit is available? ||| Earned income: wages, salaries, tips and other employee compensation includible in gross income, plus net earnings from self-employment.

:::reveal What does section 32(j) tell you about the dollar amounts in the statute? ||| That they are adjusted for inflation, so they are not fixed figures to memorise.

:::reveal What three conditions does 32(c)(1)(A)(ii) impose on an eligible individual with no qualifying child? ||| A principal place of abode in the United States for over half the year, age at least 25 and under 65, and not being another taxpayer's dependent.

## Vocabulary
- **Earned income**: the statutory measure at 32(c)(2)(A), employee compensation includible in gross income plus net earnings from self-employment, without which no credit arises.
- **Credit percentage**: the rate applied to earned income up to the earned income amount, set in section 32(b) rather than in the allowance sentence.
- **Phase-out**: the range above which the credit falls back toward zero as income rises, which is why the credit is largest in the middle rather than at the bottom.
- **Qualifying child**: defined at 32(c)(3)(A) by reference to section 152(c), with two named modifications.

## Sources
26 U.S.C. § 32. (n.d.). *Earned income*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/32

Elzayn, H., Smith, E., Hertz, T., Ramesh, A., Fisher, R., Ho, D. E., & Goldin, J. (2023). *Measuring and mitigating racial disparities in tax audits*. Stanford Institute for Human-Centered Artificial Intelligence. https://dho.stanford.edu/wp-content/uploads/IRS_Disparities.pdf`,
    },
    {
      slug: "when-a-credit-is-disallowed",
      title: "9 · What a disallowed claim costs, and who else is on the hook",
      section: "Section 3 · Credits, and where the tax system pays out",
      body: `A credit that can pay money out attracts rules that a credit which only reduces a bill does not. Section 32 carries two of them, and they explain a great deal of what a filer actually experiences.

## The bar on future years

**26 U.S.C. § 32(k)(1)(A)**: "No credit shall be allowed under this section for any taxable year in the disallowance period" (26 U.S.C. § 32, n.d.).

**§ 32(k)(1)(B)** then defines that period: **10 taxable years** after the most recent taxable year for which there was a final determination that the claim "was due to fraud," and **2 taxable years** after the most recent year for which there was a final determination that the claim "was due to reckless or intentional disregard of rules and regulations (but not due to fraud)" (26 U.S.C. § 32, n.d.).

**Notice what that is and is not.** It is not a fine and it is not interest. It is a bar on a future entitlement, running in taxable years rather than in dollars, and it attaches to a determination about the filer's state of mind. Ten years is a long time in a household's life.

## The preparer is on the hook too

**26 U.S.C. § 6695(g)** imposes a penalty on a tax return preparer who fails to comply with due diligence requirements imposed by regulation for determining eligibility to file as a head of household under section 2(b), or eligibility for or the amount of the credits allowable by section 24, section 25A(a)(1) or section 32. The statute sets the penalty at **500 dollars for each such failure**, and subsection (h) adjusts that figure for inflation (26 U.S.C. § 6695, n.d.).

**Read the list.** Head of household status, the child credit, the education credit, and the earned income credit. Those four, and not the rest of the return.

**That is why a preparer asks for documents about a child's residence and school records and gets awkward about it.** The preparer is answering to a penalty of their own on exactly those four items, and it is per failure rather than per return. Knowing that turns an irritating conversation into an explicable one.

## And now the rule this whole course is built on

**26 U.S.C. § 24(a)** allows a credit for each qualifying child "an amount equal to 1,000 dollars" (26 U.S.C. § 24, n.d.). **§ 24(d)(1)** makes part of it refundable, computed as the lesser of the credit determined without regard to the subsection, or the increase produced by raising "the limitation under section 26(a)" by, among other things, 15 percent of the taxpayer's earned income above a stated floor.

**The amount actually in force is not 1,000 dollars.** It has been set for years at a time by temporary amendments layered over subsection (a), and the refundable portion has its own separately-legislated figure. **So even opening the Code and reading the operative sentence gives you a number that is not the answer.**

**This is the sharpest possible demonstration of the course's central rule.** If the statute's own text can be stale, a summary table in a lesson has no chance at all. The method is:

1. Find the current revision of **IRS Publication 17** and note its year on the cover.
2. Find the **annual revenue procedure** setting the inflation-adjusted amounts for that tax year, and cite it by number.
3. Write the tax year beside every figure you copy out.
4. Re-check anything older than one filing season, because the amount will have moved and nothing will announce it.

**That procedure is the transferable skill.** The figure you look up today is worth less than the habit of knowing where to look.

:::reveal What are the two disallowance periods in 26 U.S.C. 32(k)(1)(B)? ||| Ten taxable years after a final determination of fraud, and two after a determination of reckless or intentional disregard of rules and regulations.

:::reveal Which four items does the section 6695(g) preparer penalty cover? ||| Head of household status, and the credits under sections 24, 25A(a)(1) and 32.

:::reveal Why is the figure printed in 26 U.S.C. 24(a) not the amount in force? ||| Because temporary amendments have set the operative amount for years at a time, which is why even the Code's own text has to be checked against the current year.

## Vocabulary
- **Disallowance period**: the span of taxable years in 32(k)(1)(B) during which no earned income credit is allowed following a final determination of fraud or of reckless disregard.
- **Due diligence penalty**: the section 6695(g) charge on a preparer, per failure, for the head of household status and three named credits.
- **Revenue procedure**: the annual IRS document setting the inflation-adjusted figures for a tax year, which is the citable source for any current amount.
- **Temporary amendment**: a change to a Code section enacted for a limited number of years, which is why the printed text of a section may not state the amount actually in force.

## Sources
26 U.S.C. § 24. (n.d.). *Child tax credit*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/24

26 U.S.C. § 32. (n.d.). *Earned income*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/32

26 U.S.C. § 6695. (n.d.). *Other assessable penalties with respect to the preparation of tax returns for other persons*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/6695`,
    },
    {
      slug: "quiz-credits",
      title: "Section 3 review · Refundable credits and the earned income credit",
      section: "Section 3 · Credits, and where the tax system pays out",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What does a deduction reduce?",
            options: ["The income the tax is computed on", "The tax itself, dollar for dollar of the amount claimed", "The withholding taken from each pay period during the year", "The refundable portion of any credit claimed on the return"],
            correctIndex: 0,
            explanation: "Its value is the rate applying to the last dollars of income multiplied by the deduction.",
            sourceLessonSlug: "refundable-or-not",
          },
          {
            prompt: "What does a credit reduce?",
            options: ["The tax itself", "The gross income against which the filing threshold is measured", "The adjusted gross income used for the phase-out calculations", "The wages on which the employer must withhold under chapter 24"],
            correctIndex: 0,
            explanation: "Its value is its face amount rather than a fraction of it, which is why a credit beats a deduction of the same size.",
            sourceLessonSlug: "refundable-or-not",
          },
          {
            prompt: "At a labelled hypothetical rate of 10 percent, what does a deduction of 1,000 save?",
            options: ["100", "1,000, because a deduction reduces the tax by its full amount", "900, being the deduction less the rate applied to it", "10, being the rate expressed as a dollar figure"],
            correctIndex: 0,
            explanation: "The rate times the deduction, which is one tenth of what a credit of the same size would save.",
            sourceLessonSlug: "refundable-or-not",
          },
          {
            prompt: "Why does the lesson use 10 percent rather than a real bracket rate?",
            options: ["Real rates are adjusted annually", "Because the Code no longer states any rate in section 1", "Because withholding tables use a flat rate for all wage earners", "Because the arithmetic only works at rates below the lowest bracket"],
            correctIndex: 0,
            explanation: "A figure written into a lesson outlives its accuracy silently, which is why the rate is labelled as chosen for clean arithmetic.",
            sourceLessonSlug: "refundable-or-not",
          },
          {
            prompt: "What can a non-refundable credit do at most?",
            options: ["Reduce the tax to zero", "Produce a payment equal to the unused portion of the credit", "Carry the unused portion forward to the following taxable year", "Offset the chapter 21 taxes withheld on the same year's wages"],
            correctIndex: 0,
            explanation: "The limitation under section 26(a) caps the aggregate nonrefundable personal credits at the tax, and below zero the credit stops.",
            sourceLessonSlug: "refundable-or-not",
          },
          {
            prompt: "Which section supplies the limitation that section 24(d)(1)(A) refers to by name?",
            options: ["Section 26(a)", "Section 32(j), which adjusts the dollar amounts for inflation", "Section 6402(a), which requires the balance to be refunded", "Section 6012(a)(1)(A), which sets the requirement to file at all"],
            correctIndex: 0,
            explanation: "It is the general cap on the aggregate of the nonrefundable personal credits.",
            sourceLessonSlug: "refundable-or-not",
          },
          {
            prompt: "Which sentence of the Code is the definition of a refundable credit?",
            options: ["26 U.S.C. 6401(b)(1)", "26 U.S.C. 6402(a), which requires the balance to be refunded", "26 U.S.C. 32(a)(1), which allows the earned income credit", "26 U.S.C. 31(a)(1), which credits withheld tax against the tax"],
            correctIndex: 0,
            explanation: "It says the amount of such excess shall be considered an overpayment, and there is nothing else to the concept.",
            sourceLessonSlug: "refundable-or-not",
          },
          {
            prompt: "On a computed tax of 400, what does a non-refundable credit of 1,000 produce?",
            options: ["Zero tax and nothing paid out", "Zero tax and a refund of the remaining six hundred dollars", "A negative liability carried into the following taxable year", "A reduction of the withholding required for the following year"],
            correctIndex: 0,
            explanation: "The remaining 600 is not carried, not paid, and simply not used.",
            sourceLessonSlug: "refundable-or-not",
          },
          {
            prompt: "On a computed tax of 400, what does a refundable credit of 1,000 produce?",
            options: ["Zero tax and a 600 overpayment", "Zero tax and no payment, since the credit stops at zero", "A tax of 600, being the credit less the liability", "A deferral of the unused 600 to the next taxable year"],
            correctIndex: 0,
            explanation: "Section 6401(b)(1) deems the excess an overpayment and section 6402(a) requires the Secretary to refund the balance.",
            sourceLessonSlug: "refundable-or-not",
          },
          {
            prompt: "What is the only thing that changes between those two outcomes?",
            options: ["Which subpart the credit sits in", "The amount of tax the filer computed for the taxable year", "The filing status the taxpayer selected on the return", "Whether the taxpayer used a paid preparer or filed alone"],
            correctIndex: 0,
            explanation: "Same headline number, same taxpayer, same year, opposite result, decided by a drafting fact.",
            sourceLessonSlug: "refundable-or-not",
          },
          {
            prompt: "Why is refundability checkable rather than arguable?",
            options: ["It depends on where the credit was enacted", "Because the Secretary publishes a list each year in a notice", "Because a credit is refundable only if the taxpayer elects it", "Because it turns on how generous the program is judged to be"],
            correctIndex: 0,
            explanation: "Either the credit is in subpart C or it is not, and you can look up the section and read where it sits.",
            sourceLessonSlug: "refundable-or-not",
          },
          {
            prompt: "What did Congress build in place of a payment system for refundable credits?",
            options: ["A deeming rule", "A separate disbursement office within the Treasury Department", "An annual appropriation from which the payments are drawn", "A schedule of instalments paid across the following year"],
            correctIndex: 0,
            explanation: "It declared the excess to be an overpayment and let the existing section 6402(a) refund machinery do the rest.",
            sourceLessonSlug: "refundable-or-not",
          },
          {
            prompt: "What does 26 U.S.C. 32(a)(1) allow, in its own terms?",
            options: ["A credit equal to a percentage of earned income", "A deduction equal to the taxpayer's total wages for the year", "A refund of the chapter 24 tax withheld from the taxpayer's pay", "An exemption from the requirement to file a return for the year"],
            correctIndex: 0,
            explanation: "The credit percentage of so much of the earned income as does not exceed the earned income amount.",
            sourceLessonSlug: "the-earned-income-credit",
          },
          {
            prompt: "What is the shape of the earned income credit across the income range?",
            options: ["It rises, plateaus, then phases out", "It falls steadily as income rises from the first dollar earned", "It is a flat amount unaffected by how much the taxpayer earns", "It rises without limit as long as earned income keeps increasing"],
            correctIndex: 0,
            explanation: "A percentage of earnings up to a ceiling, a plateau, then a phase-out toward zero.",
            sourceLessonSlug: "the-earned-income-credit",
          },
          {
            prompt: "What does section 32(j) do to the dollar amounts in the statute?",
            options: ["Adjusts them for inflation", "Freezes them at the level enacted in the original legislation", "Delegates them to the states in which the taxpayer resides", "Reduces them by the amount of any refundable child credit claimed"],
            correctIndex: 0,
            explanation: "The statute itself tells you the numbers are not fixed, which is why the lesson prints none of them.",
            sourceLessonSlug: "the-earned-income-credit",
          },
          {
            prompt: "How does 26 U.S.C. 32(c)(2)(A) define earned income?",
            options: ["Employee compensation plus self-employment earnings", "Every item includible in gross income for the taxable year", "Adjusted gross income less the standard deduction for the year", "The wages shown on the employer's annual information return only"],
            correctIndex: 0,
            explanation: "Wages, salaries, tips and other employee compensation includible in gross income, plus net earnings from self-employment.",
            sourceLessonSlug: "the-earned-income-credit",
          },
          {
            prompt: "What does a household with no earned income receive under section 32?",
            options: ["Nothing", "A reduced credit calculated from its total household income", "The full credit, since the program is targeted by income level", "A credit carried forward to a year in which it does have earnings"],
            correctIndex: 0,
            explanation: "The credit is conditioned on having earnings for the year rather than on need alone, which is the design fact that explains the program.",
            sourceLessonSlug: "the-earned-income-credit",
          },
          {
            prompt: "How does the lesson describe the earned income credit structurally?",
            options: ["A wage subsidy written as a tax credit", "A means-tested transfer administered by the state welfare agencies", "A refund of the chapter 21 taxes withheld from a worker's wages", "A deduction against income available only to households with children"],
            correctIndex: 0,
            explanation: "It grows with earnings across the first range, which is what makes it a subsidy for work rather than a payment for low income.",
            sourceLessonSlug: "the-earned-income-credit",
          },
          {
            prompt: "Who falls outside section 32(a)(1) at its first clause?",
            options: ["Someone with no earnings for the year", "Someone whose income exceeds the published filing threshold", "Someone who filed a return after the section 6072 deadline", "Someone who claimed the credit in the preceding taxable year"],
            correctIndex: 0,
            explanation: "That includes a person out of work all year or unable to work, which the lesson states as a fact about the statute.",
            sourceLessonSlug: "the-earned-income-credit",
          },
          {
            prompt: "How does 26 U.S.C. 32(c)(3)(A) define a qualifying child?",
            options: ["By reference to section 152(c)", "By listing the relationships that qualify within section 32 itself", "By reference to the dependency rules the states apply locally", "By reference to whoever is claimed on the withholding certificate"],
            correctIndex: 0,
            explanation: "Determined without regard to one paragraph of 152(c) and without section 152(e).",
            sourceLessonSlug: "the-earned-income-credit",
          },
          {
            prompt: "What residence condition does 32(c)(1)(A)(ii) impose on an individual with no qualifying child?",
            options: ["Abode in the United States over half the year", "Continuous residence in one state for the whole taxable year", "Residence in the United States on the last day of the year", "A principal place of abode within the country for any part of the year"],
            correctIndex: 0,
            explanation: "It is one of three conditions the subclause imposes together.",
            sourceLessonSlug: "the-earned-income-credit",
          },
          {
            prompt: "What age band does 32(c)(1)(A)(ii) set for an individual with no qualifying child?",
            options: ["At least 25 and under 65", "At least 18 and under 70 at the close of the taxable year", "At least 21 and under 60 for the whole of the taxable year", "Any age, provided the individual is not claimed as a dependent"],
            correctIndex: 0,
            explanation: "Attained age 25 but not attained age 65 before the close of the taxable year, for the individual or either spouse.",
            sourceLessonSlug: "the-earned-income-credit",
          },
          {
            prompt: "What is the third condition in 32(c)(1)(A)(ii)?",
            options: ["Not another taxpayer's dependent", "Filing a joint return with a spouse who also has earnings", "Having no investment income of any kind during the year", "Having filed a return in each of the two preceding years"],
            correctIndex: 0,
            explanation: "The individual must not be a dependent for whom a deduction is allowable to another taxpayer for a year beginning in the same calendar year.",
            sourceLessonSlug: "the-earned-income-credit",
          },
          {
            prompt: "What do the researchers quoted in the lesson say the earned income credit has become?",
            options: ["The largest cash-based safety net program", "A minor provision affecting fewer than one household in fifty", "A deduction rather than a credit after the most recent amendments", "A program administered jointly by the Treasury and the states"],
            correctIndex: 0,
            explanation: "Elzayn and colleagues write that it has replaced welfare as the largest cash-based safety net program in the United States.",
            sourceLessonSlug: "the-earned-income-credit",
          },
          {
            prompt: "What follows from that program being delivered through the refund machinery?",
            options: ["It arrives once a year, after a return is processed", "It is paid in equal monthly instalments across the calendar year", "It is administered by the employer through the withholding tables", "It reaches households whether or not they file a return at all"],
            correctIndex: 0,
            explanation: "Which is why the date on which that delivery is allowed to happen is the subject of the next section.",
            sourceLessonSlug: "the-earned-income-credit",
          },
          {
            prompt: "Does this course tell a reader whether they qualify for the earned income credit?",
            options: ["No", "Yes, through a checklist covering each statutory condition", "Yes, for filers with no qualifying child but not for others", "Only where the reader supplies their filing status and earnings"],
            correctIndex: 0,
            explanation: "Eligibility turns on section 152 definitions, on household facts the course does not know, and on figures that change every year.",
            sourceLessonSlug: "the-earned-income-credit",
          },
          {
            prompt: "Where does the lesson send a reader for free help with eligibility?",
            options: ["The volunteer programs and IRS publications", "A commercial preparer with a licence in the reader's own state", "The reader's employer, which computes the credit through payroll", "A state revenue department, which administers the federal credit"],
            correctIndex: 0,
            explanation: "Section 5 of the course names the free, non-commercial routes rather than any product.",
            sourceLessonSlug: "the-earned-income-credit",
          },
          {
            prompt: "What does 26 U.S.C. 32(k)(1)(A) provide?",
            options: ["No credit during the disallowance period", "A penalty equal to the credit wrongly claimed in a prior year", "Interest on any credit repaid after a final determination is made", "A requirement to file with a preparer for the following ten years"],
            correctIndex: 0,
            explanation: "It is a bar on a future entitlement rather than a monetary charge.",
            sourceLessonSlug: "when-a-credit-is-disallowed",
          },
          {
            prompt: "How long is the disallowance period following a final determination of fraud?",
            options: ["Ten taxable years", "Three taxable years, matching the ordinary assessment period", "Two taxable years, the same as for reckless disregard", "Indefinitely, until the taxpayer applies for reinstatement"],
            correctIndex: 0,
            explanation: "It runs from the most recent taxable year for which the determination was made, in taxable years rather than in dollars.",
            sourceLessonSlug: "when-a-credit-is-disallowed",
          },
          {
            prompt: "How long is the disallowance period for reckless or intentional disregard of rules?",
            options: ["Two taxable years", "Ten taxable years, the same as for a determination of fraud", "Five taxable years, running from the date the return was filed", "One taxable year, unless the disregard is repeated afterwards"],
            correctIndex: 0,
            explanation: "The statute distinguishes it expressly from fraud, using the words but not due to fraud.",
            sourceLessonSlug: "when-a-credit-is-disallowed",
          },
          {
            prompt: "What kind of sanction is the disallowance period?",
            options: ["A bar on a future entitlement", "A fine measured as a percentage of the credit disallowed", "Interest running from the date the improper refund was paid", "A criminal penalty carried by section 7206 of the same title"],
            correctIndex: 0,
            explanation: "It runs in taxable years and attaches to a determination about the filer's state of mind.",
            sourceLessonSlug: "when-a-credit-is-disallowed",
          },
          {
            prompt: "Whom does 26 U.S.C. 6695(g) penalise?",
            options: ["The tax return preparer", "The taxpayer who signed the return under penalties of perjury", "The employer that failed to withhold the correct amount of tax", "The software provider through which the return was transmitted"],
            correctIndex: 0,
            explanation: "For failing to meet the due diligence requirements imposed by regulation on four named items.",
            sourceLessonSlug: "when-a-credit-is-disallowed",
          },
          {
            prompt: "Which four items does the section 6695(g) penalty cover?",
            options: ["Head of household status and three credits", "Every line of the return the preparer signed for the taxpayer", "The filing status, the standard deduction, and two credit claims", "Withholding, estimated payments, and two refundable credits"],
            correctIndex: 0,
            explanation: "Head of household eligibility under section 2(b), and the credits under sections 24, 25A(a)(1) and 32.",
            sourceLessonSlug: "when-a-credit-is-disallowed",
          },
          {
            prompt: "What amount does the statute set for the section 6695(g) penalty?",
            options: ["500 dollars for each failure", "A percentage of the credit the preparer wrongly claimed", "1,000 dollars for each return containing any such failure", "An amount the Secretary sets by regulation for each tax year"],
            correctIndex: 0,
            explanation: "Subsection (h) then adjusts the figure for inflation, so the amount actually charged is not the printed one.",
            sourceLessonSlug: "when-a-credit-is-disallowed",
          },
          {
            prompt: "Is the section 6695(g) penalty charged per return or per failure?",
            options: ["Per failure", "Per return, whatever number of failures it contains", "Per taxpayer, across all returns the preparer signs in a year", "Per office, where a firm employs more than one preparer"],
            correctIndex: 0,
            explanation: "The statute says for each such failure, which is why a return touching several of the four items carries several exposures.",
            sourceLessonSlug: "when-a-credit-is-disallowed",
          },
          {
            prompt: "What does the preparer penalty explain about a preparer's behaviour?",
            options: ["Why they ask for documents about a child", "Why they charge a fee proportional to the refund produced", "Why they decline to prepare returns claiming refundable credits", "Why they must transmit the return electronically rather than on paper"],
            correctIndex: 0,
            explanation: "The preparer is answering to a penalty of their own on exactly those four items, per failure rather than per return.",
            sourceLessonSlug: "when-a-credit-is-disallowed",
          },
          {
            prompt: "What amount does 26 U.S.C. 24(a) state on its face?",
            options: ["1,000 dollars", "2,000 dollars, which is the amount currently in force", "An amount adjusted each year by revenue procedure", "No amount at all, since the figure sits in subsection (d)"],
            correctIndex: 0,
            explanation: "The amount actually allowed has been set for years at a time by temporary amendments layered over that subsection.",
            sourceLessonSlug: "when-a-credit-is-disallowed",
          },
          {
            prompt: "What does 26 U.S.C. 24(d)(1) do?",
            options: ["Makes part of the child credit refundable", "Bars the credit for ten years after a determination of fraud", "Adjusts the credit for inflation in each subsequent tax year", "Requires the credit to be claimed on a timely filed return"],
            correctIndex: 0,
            explanation: "It is computed as the lesser of two amounts, one of which raises the section 26(a) limitation by a percentage of earned income above a floor.",
            sourceLessonSlug: "when-a-credit-is-disallowed",
          },
          {
            prompt: "What does the section 24 example demonstrate about the Code itself?",
            options: ["Its printed text can be out of date", "That every dollar figure in it is adjusted automatically", "That the Code never states a dollar amount in operative text", "That temporary amendments are published only in regulations"],
            correctIndex: 0,
            explanation: "If the statute's own sentence can be stale, a summary table in a lesson has no chance at all.",
            sourceLessonSlug: "when-a-credit-is-disallowed",
          },
          {
            prompt: "What is the first step of the course's four-step method for a current figure?",
            options: ["Find the current Publication 17 and note its year", "Read the operative sentence of the Code section itself", "Ask a paid preparer which figure applies to the filer", "Search for the most recent news report giving the amount"],
            correctIndex: 0,
            explanation: "Then the annual revenue procedure cited by number, then writing the tax year beside every figure, then re-checking anything older than a season.",
            sourceLessonSlug: "when-a-credit-is-disallowed",
          },
          {
            prompt: "How often does the method say a copied figure should be re-checked?",
            options: ["Anything older than one filing season", "Once every five years, when the statute is usually amended", "Only when the taxpayer's own circumstances have changed", "Never, provided the source was a primary document when read"],
            correctIndex: 0,
            explanation: "The amount will have moved and nothing will announce it, which is the failure mode this domain punishes hardest.",
            sourceLessonSlug: "when-a-credit-is-disallowed",
          },
          {
            prompt: "What does the lesson call the transferable skill?",
            options: ["Knowing where to look", "Memorising the current year's credit and deduction amounts", "Computing the refundable portion of the child credit by hand", "Reciting the four items the preparer penalty covers"],
            correctIndex: 0,
            explanation: "The figure you look up today is worth less than the habit of knowing where to look it up.",
            sourceLessonSlug: "when-a-credit-is-disallowed",
          },
          {
            prompt: "Why do refundable credits attract rules that other credits do not?",
            options: ["They can pay money out", "Because they are claimed more often than other credits are", "Because they are enacted in a different title of the United States Code", "Because the Secretary has no authority to examine them otherwise"],
            correctIndex: 0,
            explanation: "Section 32 carries both a disallowance bar and a preparer due diligence penalty for that reason.",
            sourceLessonSlug: "when-a-credit-is-disallowed",
          },
          {
            prompt: "What is a revenue procedure, as this course uses the term?",
            options: ["The annual IRS document setting adjusted figures", "A regulation issued under a specific Code section by the Secretary", "A court decision resolving a dispute about a taxpayer's liability", "An internal manual governing how examinations are conducted"],
            correctIndex: 0,
            explanation: "It is the citable source for any current inflation-adjusted amount, and it should be cited by number.",
            sourceLessonSlug: "when-a-credit-is-disallowed",
          },
          {
            prompt: "What is a phase-out?",
            options: ["The range over which a credit falls toward zero", "The period after which a disallowed credit may be claimed again", "The gradual removal of a credit from the Code by amendment", "The reduction in withholding as the year approaches its end"],
            correctIndex: 0,
            explanation: "It is why the earned income credit is largest in the middle of its range rather than at the very bottom.",
            sourceLessonSlug: "the-earned-income-credit",
          },
          {
            prompt: "Where do the credit percentages for section 32 sit?",
            options: ["In section 32(b)", "In the allowance sentence at section 32(a)(1) itself", "In the regulations rather than anywhere in the statute", "In the annual revenue procedure and nowhere in the Code"],
            correctIndex: 0,
            explanation: "The allowance sentence names the percentage and the earned income amount without stating either figure.",
            sourceLessonSlug: "the-earned-income-credit",
          },
          {
            prompt: "What does the lesson say about the value of a credit compared with a deduction of the same size?",
            options: ["The credit is worth more", "They are worth the same, since both reduce what is owed", "The deduction is worth more at higher rates of tax", "It depends on whether the filer itemises deductions"],
            correctIndex: 0,
            explanation: "The deduction is worth the rate times its amount, while the credit is worth its face amount.",
            sourceLessonSlug: "refundable-or-not",
          },
          {
            prompt: "Which subparts does 6401(b)(1) subtract from the tax before measuring the excess?",
            options: ["A, B, D and G", "C alone, being the refundable credits themselves", "None, because the comparison is with the tax as computed", "Only those the taxpayer elects to apply first on the return"],
            correctIndex: 0,
            explanation: "Subpart C is the one being measured, so the other named subparts reduce the tax it is measured against.",
            sourceLessonSlug: "refundable-or-not",
          },
          {
            prompt: "Which two sections does the lesson name as examples of credits in subpart C?",
            options: ["Sections 32 and part of 24", "Sections 26 and 63, which cap credits and set deductions", "Sections 31 and 3402, which govern withholding on wages", "Sections 6401 and 6402, which define and refund overpayments"],
            correctIndex: 0,
            explanation: "The earned income credit and the portion of the child credit that subsection (d) makes refundable.",
            sourceLessonSlug: "refundable-or-not",
          },
          {
            prompt: "In the lesson's terms, what is a household with earnings across the first range of the credit receiving?",
            options: ["More credit for each extra dollar earned", "A fixed amount that does not vary with additional earnings", "A smaller credit as earnings increase toward the plateau", "A credit only once earnings pass the phase-out threshold"],
            correctIndex: 0,
            explanation: "Below the ceiling the credit rises with earnings, which is the wage-subsidy half of its design.",
            sourceLessonSlug: "the-earned-income-credit",
          },
          {
            prompt: "What does the lesson say about getting eligibility wrong?",
            options: ["It is expensive in either direction", "It carries no consequence beyond a corrected return", "It matters only where the error understates the credit", "It is handled entirely by the preparer under section 6695"],
            correctIndex: 0,
            explanation: "Which is why the disallowance lesson follows it and why the free help routes are named.",
            sourceLessonSlug: "the-earned-income-credit",
          },
          {
            prompt: "What is a temporary amendment, in the sense the lesson uses it?",
            options: ["A change enacted for a limited number of years", "A regulation the Secretary may withdraw at any time", "A provision suspended pending the outcome of litigation", "An adjustment made automatically by revenue procedure"],
            correctIndex: 0,
            explanation: "It is why the printed text of section 24(a) may not state the amount actually in force.",
            sourceLessonSlug: "when-a-credit-is-disallowed",
          },
          {
            prompt: "What does the second step of the four-step method require?",
            options: ["Citing the annual revenue procedure by number", "Reading the operative sentence of the Code section aloud", "Confirming the figure with two independent news sources", "Checking the withholding tables the employer applied"],
            correctIndex: 0,
            explanation: "It sets the inflation-adjusted amounts for a tax year, and citing it by number is what makes the figure checkable.",
            sourceLessonSlug: "when-a-credit-is-disallowed",
          },
          {
            prompt: "What kind of fact does the lesson say the earned income credit's exclusion of non-earners is?",
            options: ["A fact about the statute", "A complaint about how the program is administered", "An error in drafting that later amendments corrected", "A rule that varies by state under the Code's savings clause"],
            correctIndex: 0,
            explanation: "It follows from the first clause of section 32(a)(1) rather than from anyone's policy view.",
            sourceLessonSlug: "the-earned-income-credit",
          },
          {
            prompt: "What is the earned income amount, in the structure of section 32(a)(1)?",
            options: ["The ceiling on earnings the percentage applies to", "The minimum earnings required before any credit is allowed", "The total credit a taxpayer may claim in any taxable year", "The threshold above which the credit begins to phase out"],
            correctIndex: 0,
            explanation: "The credit is the credit percentage of so much of the earned income as does not exceed that amount.",
            sourceLessonSlug: "the-earned-income-credit",
          },
          {
            prompt: "What did the researchers' phrasing replace, according to the quotation in the lesson?",
            options: ["Welfare", "The withholding system as the main route for delivering benefits", "The child credit as the largest credit available to households", "State-administered cash assistance in a minority of jurisdictions"],
            correctIndex: 0,
            explanation: "The quotation says the credit has replaced welfare as the largest cash-based safety net program in the country.",
            sourceLessonSlug: "the-earned-income-credit",
          },
          {
            prompt: "Which two modifications does 32(c)(3)(A) make to the section 152(c) definition?",
            options: ["It disregards one paragraph and section 152(e)", "It adds an age limit and a residency requirement of its own", "It substitutes the head of household test in section 2(b)(1)", "It applies the definition only to children under seventeen"],
            correctIndex: 0,
            explanation: "The statute says determined without regard to paragraph (1)(D) of that subsection and without section 152(e).",
            sourceLessonSlug: "the-earned-income-credit",
          },
          {
            prompt: "What does the lesson say the section 24 refundable portion is computed as?",
            options: ["The lesser of two amounts", "A fixed percentage of the total credit for each qualifying child", "The whole credit, once the taxpayer's tax reaches zero", "The excess of the credit over the taxpayer's earned income"],
            correctIndex: 0,
            explanation: "One of those amounts raises the section 26(a) limitation by a percentage of earned income above a stated floor.",
            sourceLessonSlug: "when-a-credit-is-disallowed",
          },
          {
            prompt: "What does the course say is worth less than the habit it teaches?",
            options: ["The figure you look up today", "The statutory text of the section you are reading", "The publication year printed on the cover of a guide", "The preparer's own view of which figure applies"],
            correctIndex: 0,
            explanation: "The method survives the year; the number does not.",
            sourceLessonSlug: "when-a-credit-is-disallowed",
          },
          {
            prompt: "What does an unused non-refundable credit become?",
            options: ["Nothing", "An overpayment refundable under section 6402(a)", "A carryforward available in the next five taxable years", "A deduction against the following year's gross income"],
            correctIndex: 0,
            explanation: "It is not carried, not paid, and simply not used, which is the whole difference the section turns on.",
            sourceLessonSlug: "refundable-or-not",
          },
          {
            prompt: "How does the lesson describe the section 32 credit's relationship to need?",
            options: ["It is conditioned on earnings, not need alone", "It rises as household income falls toward zero for the year", "It is available to any household below the filing threshold", "It is calculated from the number of people in the household"],
            correctIndex: 0,
            explanation: "The first clause of 32(a)(1) reaches earned income, so a household with none receives none of the credit.",
            sourceLessonSlug: "the-earned-income-credit",
          },
          {
            prompt: "Which subsection of section 32 carries the disallowance rules?",
            options: ["Subsection (k)", "Subsection (j), which adjusts the dollar amounts for inflation", "Subsection (c), which defines an eligible individual and earned income", "Subsection (b), which sets the credit percentages and amounts"],
            correctIndex: 0,
            explanation: "Its paragraph (1) states the bar and defines the two disallowance periods.",
            sourceLessonSlug: "when-a-credit-is-disallowed",
          },
          {
            prompt: "Which subsection adjusts the section 6695(g) preparer penalty for inflation?",
            options: ["Subsection (h)", "Subsection (g) itself, which states the adjustment inline", "Section 32(j), which adjusts the earned income credit amounts", "Section 26(a), which caps the nonrefundable personal credits"],
            correctIndex: 0,
            explanation: "So the printed 500 dollars is not the amount actually charged for a current year.",
            sourceLessonSlug: "when-a-credit-is-disallowed",
          },
          {
            prompt: "Which education credit does the section 6695(g) list name?",
            options: ["The credit under section 25A(a)(1)", "Every education credit allowed anywhere in subchapter A", "The deduction for qualified tuition and related expenses", "The credit for interest paid on a qualified student loan"],
            correctIndex: 0,
            explanation: "It sits in the list beside head of household status and the credits under sections 24 and 32.",
            sourceLessonSlug: "when-a-credit-is-disallowed",
          },
          {
            prompt: "What does the lesson say a preparer's document requests turn into once the penalty is understood?",
            options: ["An explicable conversation", "A requirement the taxpayer may decline without consequence", "A sign that the preparer suspects the taxpayer of fraud", "A step the Secretary imposes directly on the taxpayer"],
            correctIndex: 0,
            explanation: "The preparer is answering to a per-failure penalty on exactly those four items.",
            sourceLessonSlug: "when-a-credit-is-disallowed",
          },
          {
            prompt: "What is the third step of the course's four-step method?",
            options: ["Write the tax year beside every figure", "Confirm the figure against a commercial preparation product", "Compare the figure with the amount printed in the Code section", "Ask whether the figure changed in the preceding legislative session"],
            correctIndex: 0,
            explanation: "Then re-check anything older than one filing season, because nothing announces the change.",
            sourceLessonSlug: "when-a-credit-is-disallowed",
          },
          {
            prompt: "Where does the lesson say the earned income credit's current figures live?",
            options: ["The revenue procedure and Publication 17", "Section 32(a)(1), which states them in its own sentence", "The employer's withholding tables for the year in question", "A schedule the taxpayer completes on the face of the return"],
            correctIndex: 0,
            explanation: "Anyone quoting one of them should name the tax year beside it.",
            sourceLessonSlug: "the-earned-income-credit",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4 — The date in the statute
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-fifteenth-day-of-the-second-month",
      title: "10 · A date Congress wrote for two credits and nobody else",
      section: "Section 4 · The date in the statute",
      body: `Here is the sentence this whole course was built around.

**26 U.S.C. § 6402(m)**: "No credit or refund of an overpayment for a taxable year shall be made to a taxpayer before the 15th day of the second month following the close of such taxable year if a credit is allowed to such taxpayer under section 24 (by reason of subsection (d) thereof) or 32 for such taxable year" (26 U.S.C. § 6402, n.d.).

**Take it apart clause by clause, because every clause is doing work.**

**"No credit or refund of an overpayment."** Not part of it. The whole overpayment.

**"Before the 15th day of the second month following the close of such taxable year."** The statute does not say February. It states a formula, and for a calendar-year filer the formula produces **15 February**.

**"If a credit is allowed to such taxpayer under section 24 (by reason of subsection (d) thereof) or 32."** Two credits, named. Section 24 by reason of subsection (d) is the refundable portion of the child credit, the one commonly called the additional child tax credit. Section 32 is the earned income credit. **Nothing else is in the sentence.**

## The hold reaches the whole refund, not the credit

This is the part that surprises people, and both the statute and the agency say it plainly. The IRS's own guidance on the change states: "The IRS will hold the entire refund. Under the new law, the IRS cannot release the part of the refund that is not associated with the EITC and ACTC" (Internal Revenue Service, 2026d).

**So a filer whose refund is mostly their own over-withheld wages, with a modest credit on top, waits for all of it.**

## Where the sentence came from, and what it is for

Section 6402(m) was added by **section 201(b) of the Protecting Americans from Tax Hikes Act of 2015**, and the Internal Revenue Manual records the linkage in those terms at IRM 21.4.1.3.1 (Internal Revenue Service, 2023). The IRM also describes the operational side: an account meeting the criteria carries a freeze that releases on 15 February.

**The stated purpose is anti-fraud, and it is specific.** In the agency's own words, the delay "allows additional time to help prevent revenue lost due to identity theft and refund fraud related to fabricated wages and withholdings" (Internal Revenue Service, 2026d).

**Read that beside the other half of the same section of the Act**, which moved forward the date by which employers must file wage statements. The package makes sense as one idea: get the employer's report of what it paid you into the government's hands before the government pays a refund computed from what you said it paid you. **The hold buys a matching window.**

## The statutory floor is not the practical date

The statute sets an earliest date. It does not promise that date.

For the 2026 filing season, opened on 26 January 2026, the IRS said it "expects most refunds for the Earned Income Tax Credit and the Additional Child Tax Credit to be available in bank accounts or on debit cards by March 2, 2026, for taxpayers who chose direct deposit and have no other issues with their returns" (Internal Revenue Service, 2026e).

**That figure carries its season and its source deliberately.** The practical date is published fresh each year, it sits weeks after the statutory floor, and quoting last year's is exactly the mistake this course exists to prevent.

:::reveal What formula does 26 U.S.C. 6402(m) use instead of naming a month? ||| The 15th day of the second month following the close of the taxable year, which for a calendar-year filer is 15 February.

:::reveal Which two credits does 6402(m) name? ||| The credit under section 24 by reason of subsection (d), and the credit under section 32.

:::reveal How much of the refund does the hold reach? ||| All of it, including the part not associated with either credit.

## Vocabulary
- **The statutory hold**: the rule at 26 U.S.C. 6402(m) that no credit or refund of an overpayment may be made before a stated date where either named credit is allowed.
- **Additional child tax credit**: the refundable portion of the section 24 credit, which 6402(m) reaches through the words by reason of subsection (d) thereof.
- **Matching window**: the period the hold creates in which the government can compare an employer's wage report against the wages a return claims.
- **Statutory floor**: the earliest date a thing may lawfully happen, which is not the same as the date it is expected to happen.

## Sources
26 U.S.C. § 6402. (n.d.). *Authority to make credits or refunds*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/6402

Internal Revenue Service. (2023). *Internal Revenue Manual 21.4.1, Refund research*. https://www.irs.gov/irm/part21/irm_21-004-001r

Internal Revenue Service. (2026d). *New federal tax law may affect some refunds filed in early 2017*. https://www.irs.gov/for-tax-pros/new-federal-tax-law-may-affect-some-refunds-filed-in-early-2017

Internal Revenue Service. (2026e). *IRS opens 2026 filing season* (IR-2026-12). https://www.irs.gov/newsroom/irs-opens-2026-filing-season`,
    },
    {
      slug: "who-the-hold-lands-on",
      title: "11 · Who the hold lands on, by the design of the credits",
      section: "Section 4 · The date in the statute",
      body: `A rule that applies to two named credits applies to whoever claims those two credits. So the question of who waits is answered by reading the credits, not by guessing.

## Both named credits are conditioned on having worked

**Section 32** requires earned income before any credit arises at all. Subsection (c)(2)(A) defines it as employee compensation includible in gross income plus net earnings from self-employment, and the allowance sentence at 32(a)(1) applies a percentage to it.

**Section 24(d)(1)** computes the refundable portion of the child credit from an amount that includes a percentage of the taxpayer's earned income above a stated floor.

**So both credits in section 6402(m) are conditioned on earnings, and both are structured to reach households at the lower end of the earnings distribution.** That is not an inference about who claims them. It is what the sections say.

## Which makes the distributive effect a matter of arithmetic

**The hold delays the refunds of filers who by statutory design have earned income and lower earnings, and delays nobody else's.** A filer with the same size refund arising entirely from over-withholding, claiming neither credit, is outside section 6402(m) completely.

**This course states that as a fact about two statutes read together, and it does not call it a scandal.** The purpose is stated, specific, and about fraud rather than about deservingness. Fabricated wages and withholdings are a real problem and a matching window is a real answer to it.

**What is not in dispute is the effect.** The delay falls on the group least able to absorb it, and the reason is structural rather than accidental: the credits were designed to reach low earners, and the hold was attached to the credits.

## The catalog's own method, applied

The sibling course *Financing Without Access* teaches a procedure for reading any rule of this shape: **ask which door was closed, what pool replaced it, and who bears the risk.**

**Which door was closed:** access to a refund before mid-February, for one defined class of filers.

**What pool replaced it:** a market in products that advance money against a refund not yet paid.

**Who bears the risk:** the filer, in the form of a price.

## And this is where this course stops

**The pricing of that market belongs to the sibling course *Predatory Products, Priced*, and it is already taught there.** Its lesson *A refund is a debt the government already owes you* reads section 6402(a) to show that a lender advancing against a refund is not taking a credit risk on whether the money exists, because the debtor is the Treasury, and then prices the product.

**This course does not repeat that, and deliberately.** The two courses divide the object: MONEY-04 prices the product, and this lesson explains why the window it is priced against exists at all, who is inside it, and what it is for. **If you want the arithmetic of an advance, go and read the other course.**

**And this course does not tell you whether to take one.** That is a decision about a household's calendar and this course does not know it.

:::reveal Why are the two credits named in 6402(m) the ones aimed at lower earners? ||| Because section 32 requires earned income and section 24(d)(1) computes the refundable portion from a percentage of earned income above a floor.

:::reveal What is the stated purpose of the hold, and what is its effect? ||| Preventing fraud from fabricated wages and withholdings, and delaying the refunds of the filers least able to absorb a delay.

:::reveal Which sibling course prices the refund-advance product, and why does this one not? ||| Predatory Products, Priced, which already reads 6402(a) and prices it, so this course explains the window instead of repeating the pricing.

## Vocabulary
- **Distributive effect**: who a rule actually falls on, which here follows from the eligibility conditions of the two credits the rule names.
- **Structural rather than accidental**: the sense in which the hold's incidence follows from the design of the credits rather than from chance.
- **The exclusion procedure**: the catalog's three questions from Financing Without Access, which door was closed, what pool replaced it, and who bears the risk.
- **Refund advance**: a product that pays money against a refund not yet issued, priced and taught in MONEY-04 rather than here.

## Sources
26 U.S.C. § 24. (n.d.). *Child tax credit*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/24

26 U.S.C. § 32. (n.d.). *Earned income*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/32

26 U.S.C. § 6402. (n.d.). *Authority to make credits or refunds*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/6402

Internal Revenue Service. (2026d). *New federal tax law may affect some refunds filed in early 2017*. https://www.irs.gov/for-tax-pros/new-federal-tax-law-may-affect-some-refunds-filed-in-early-2017`,
    },
    {
      slug: "the-refund-can-be-taken-first",
      title: "12 · The refund can be reduced before it ever reaches you",
      section: "Section 4 · The date in the statute",
      body: `Timing is one risk. Amount is another, and the same section that promises the refund also lists the things that can take it first.

## Four offsets, in the statute, in order

**§ 6402(a)** comes first: the Secretary may credit an overpayment against any liability in respect of an internal revenue tax on the part of the person who made it. **Your own unpaid federal tax has priority over your refund.**

Then the referrals, and each begins the same way, with the Secretary acting on notice from somebody else.

**§ 6402(c)**: the amount to be refunded "shall be reduced by the amount of any past-due support" (26 U.S.C. § 6402, n.d.).

**§ 6402(d)(1)**: "Upon receiving notice from any Federal agency that a named person owes a past-due legally enforceable debt (other than past-due support subject to the provisions of subsection (c)) to such agency," the Secretary shall reduce and pay over (26 U.S.C. § 6402, n.d.).

**§ 6402(e)(1)**: "Upon receiving notice from any State that a named person owes a past-due, legally enforceable State income tax obligation to such State," the same machinery applies (26 U.S.C. § 6402, n.d.).

**§ 6402(f)** does the same for covered unemployment compensation debts.

**And the order is set out in the section**: federal tax first, then past-due support, then federal agency debts, then state income tax obligations, then unemployment compensation debts, with any remaining balance available to be credited against estimated tax under subsection (b) or refunded.

## Why the order matters more than it looks

**The reduction happens before payment.** The money is not paid and then collected back. It never arrives, which means it is never available to be spent, budgeted or borrowed against.

**And the debt belongs to somebody else.** Read the grammar of subsections (d) and (e) again: the Secretary acts "upon receiving notice from" a federal agency or a state. **The Internal Revenue Service is the collector here, not the creditor.** Questions about whether the debt is owed, how much it is, or whether it has been paid belong to the agency or the state that referred it, because that is the party the statute puts the notice duty on.

## The third risk in a refund advance

The sibling course *Predatory Products, Priced* observes that a lender advancing against a refund is not taking a risk on whether the money exists, because the debtor is the Treasury, and that what it bears instead is timing risk and the risk that the return is wrong.

**This section adds a third: the amount can shrink between the return and the payment**, by operation of a statute, for a reason the filer may not have been thinking about. A refund that is offset is still a refund the taxpayer received the benefit of, since a debt of theirs was paid with it. It is simply not money that arrives.

## One thing worth knowing and not advising on

Where a joint return's refund is reduced for a debt belonging to only one of the spouses, a separate procedure exists for the spouse who is not the debtor. **This course names that it exists and stops there**, because whether it applies to a particular household is exactly the individualised question the course refuses. The free preparation programs named in the next section are staffed by people trained to answer it.

:::reveal Under 6402(d)(1) and (e)(1), what starts the offset process? ||| Notice to the Secretary from a federal agency or from a state that a named person owes a past-due, legally enforceable debt.

:::reveal Why does an offset never reach the filer's budget? ||| Because the reduction happens before payment, so the money never arrives to be spent or borrowed against.

:::reveal Who should a filer ask about an offset for a state or agency debt? ||| The agency or state that referred it, because the statute makes that party the one giving notice.

## Vocabulary
- **Offset**: the statutory reduction of a refund to satisfy a listed debt before the balance is paid.
- **Past-due support**: the first of the referred categories, reached by 26 U.S.C. 6402(c) ahead of other agency debts.
- **Referring agency**: the federal agency or state that gives the Secretary notice under 6402(d) or (e), and therefore the party that owns the underlying debt question.
- **Priority order**: the sequence in which section 6402 applies an overpayment, beginning with the filer's own federal tax.

## Sources
26 U.S.C. § 6402. (n.d.). *Authority to make credits or refunds*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/6402`,
    },
    {
      slug: "quiz-the-hold",
      title: "Section 4 review · The statutory hold and the offsets",
      section: "Section 4 · The date in the statute",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What date formula does 26 U.S.C. 6402(m) use?",
            options: ["The 15th day of the second month after year end", "The last business day of February following the taxable year", "Twenty-one days after the return is accepted for processing", "The first day of the third month following the close of the year"],
            correctIndex: 0,
            explanation: "The statute states a formula rather than naming February, and for a calendar-year filer it produces 15 February.",
            sourceLessonSlug: "the-fifteenth-day-of-the-second-month",
          },
          {
            prompt: "Which two credits does 26 U.S.C. 6402(m) name?",
            options: ["Sections 24(d) and 32", "Sections 24 and 25A, the child and education credits together", "Sections 31 and 32, being withholding and the earned income credit", "Every credit enacted in subpart C of part IV of subchapter A"],
            correctIndex: 0,
            explanation: "Section 24 by reason of subsection (d), which is the refundable portion, and section 32, the earned income credit.",
            sourceLessonSlug: "the-fifteenth-day-of-the-second-month",
          },
          {
            prompt: "What does the phrase by reason of subsection (d) thereof identify in section 24?",
            options: ["The refundable portion of the child credit", "The condition that the child be under a stated age at year end", "The limitation imposed by section 26(a) on the credit's amount", "The inflation adjustment applied to the credit for a given year"],
            correctIndex: 0,
            explanation: "That is the part commonly called the additional child tax credit, and it is what brings a return within the hold.",
            sourceLessonSlug: "the-fifteenth-day-of-the-second-month",
          },
          {
            prompt: "How much of a refund does the section 6402(m) hold reach?",
            options: ["All of it", "Only the portion attributable to the two named credits", "Only the portion exceeding the tax computed on the return", "Only the portion arising from chapter 24 withholding on wages"],
            correctIndex: 0,
            explanation: "The IRS says it cannot release the part of the refund that is not associated with the two credits.",
            sourceLessonSlug: "the-fifteenth-day-of-the-second-month",
          },
          {
            prompt: "Which enactment added section 6402(m) to the Code?",
            options: ["Section 201(b) of the PATH Act of 2015", "The Taxpayer First Act of 2019, which also made VITA grants permanent", "The Tax Reform Act of 1969, which produced the volunteer programs", "The One, Big, Beautiful Bill Act of 2025, which addressed Direct File"],
            correctIndex: 0,
            explanation: "The Internal Revenue Manual records the linkage between that section of the Act and the Code provision.",
            sourceLessonSlug: "the-fifteenth-day-of-the-second-month",
          },
          {
            prompt: "What is the stated purpose of the hold, in the agency's own words?",
            options: ["Preventing fraud from fabricated wages", "Spreading the processing workload across the whole filing season", "Reducing the number of returns that require manual examination", "Allowing states time to refer their own income tax obligations"],
            correctIndex: 0,
            explanation: "The delay allows additional time to help prevent revenue lost due to identity theft and refund fraud related to fabricated wages and withholdings.",
            sourceLessonSlug: "the-fifteenth-day-of-the-second-month",
          },
          {
            prompt: "What did the other half of the same section of the PATH Act do?",
            options: ["Moved employer wage reporting earlier", "Raised the earned income credit for households with three children", "Extended the period for assessing tax on a fraudulent return", "Required the IRS to publish a refund schedule before each season"],
            correctIndex: 0,
            explanation: "Reading the two halves together, the hold buys a window in which the employer's report can be matched against the return.",
            sourceLessonSlug: "the-fifteenth-day-of-the-second-month",
          },
          {
            prompt: "What does the lesson call the period the hold creates?",
            options: ["A matching window", "A processing backlog the agency clears each February", "A grace period during which a return may be amended freely", "An appeal window in which a filer may contest the credit"],
            correctIndex: 0,
            explanation: "It lets the government compare what an employer reported paying against what a return claims before paying a refund.",
            sourceLessonSlug: "the-fifteenth-day-of-the-second-month",
          },
          {
            prompt: "Does the statutory date promise when a refund will arrive?",
            options: ["No, it is an earliest date only", "Yes, refunds subject to it are issued on that date each year", "Yes, provided the filer chose direct deposit for the refund", "Only for returns filed before the season formally opens"],
            correctIndex: 0,
            explanation: "The practical date is published fresh each season and sits weeks after the statutory floor.",
            sourceLessonSlug: "the-fifteenth-day-of-the-second-month",
          },
          {
            prompt: "What date did the IRS give for most affected refunds in the 2026 filing season?",
            options: ["2 March 2026", "15 February 2026, which is the statutory floor for the year", "26 January 2026, which is the date the season itself opened", "15 April 2026, which is the deadline for filing the return"],
            correctIndex: 0,
            explanation: "For taxpayers who chose direct deposit and had no other issues with their returns, according to the release opening that season.",
            sourceLessonSlug: "the-fifteenth-day-of-the-second-month",
          },
          {
            prompt: "On what date did the 2026 filing season open?",
            options: ["26 January 2026", "15 February 2026, when the statutory hold releases", "2 March 2026, the date most affected refunds were expected", "1 January 2026, the first day of the calendar year"],
            correctIndex: 0,
            explanation: "The IRS began accepting and processing individual returns for tax year 2025 on that date.",
            sourceLessonSlug: "the-fifteenth-day-of-the-second-month",
          },
          {
            prompt: "Which record describes the operational freeze that implements the hold?",
            options: ["The Internal Revenue Manual", "The annual revenue procedure setting inflation adjustments", "The regulation prescribing the employee's withholding certificate", "The memorandum of understanding governing the Free File program"],
            correctIndex: 0,
            explanation: "IRM 21.4.1.3.1 records the linkage to the Act and describes a freeze that releases on 15 February.",
            sourceLessonSlug: "the-fifteenth-day-of-the-second-month",
          },
          {
            prompt: "What does the phrase no credit or refund of an overpayment tell you about the scope of the hold?",
            options: ["It reaches the whole overpayment", "It reaches only credits and leaves cash refunds unaffected", "It reaches only the amount above the tax shown on the return", "It reaches only refunds the taxpayer requested by direct deposit"],
            correctIndex: 0,
            explanation: "Not part of it, which is why a filer with a modest credit on a large withholding refund waits for all of it.",
            sourceLessonSlug: "the-fifteenth-day-of-the-second-month",
          },
          {
            prompt: "Why is the population affected by the hold answerable by reading the credits?",
            options: ["The rule applies to whoever claims those two", "Because the statute lists the income levels it covers directly", "Because the Secretary publishes the affected population each year", "Because the hold applies only to filers below a stated threshold"],
            correctIndex: 0,
            explanation: "A rule attached to two named credits falls on the people the eligibility conditions of those credits reach.",
            sourceLessonSlug: "who-the-hold-lands-on",
          },
          {
            prompt: "What do both credits named in 6402(m) have in common?",
            options: ["Both are conditioned on earned income", "Both require the taxpayer to have a qualifying child", "Both are non-refundable and stop at a zero liability", "Both are claimed on a schedule filed separately from the return"],
            correctIndex: 0,
            explanation: "Section 32 requires it outright and 24(d)(1) computes the refundable portion from a percentage of it above a floor.",
            sourceLessonSlug: "who-the-hold-lands-on",
          },
          {
            prompt: "Who is outside section 6402(m) entirely?",
            options: ["A filer claiming neither named credit", "A filer whose refund exceeds ten thousand dollars for the year", "A filer who used a paid preparer rather than filing alone", "A filer who requested a paper cheque rather than direct deposit"],
            correctIndex: 0,
            explanation: "Even a refund of the same size arising entirely from over-withholding is untouched, which is what makes the incidence structural.",
            sourceLessonSlug: "who-the-hold-lands-on",
          },
          {
            prompt: "Does this course call the hold a scandal?",
            options: ["No", "Yes, because it discriminates among filers by income", "Yes, because the fraud rationale has never been published", "Only where the practical date falls more than a month later"],
            correctIndex: 0,
            explanation: "The purpose is stated, specific and about fraud, and fabricated wages are a real problem with a real answer.",
            sourceLessonSlug: "who-the-hold-lands-on",
          },
          {
            prompt: "What does the course say is not in dispute about the hold?",
            options: ["Its effect", "Its constitutionality under the taxing power of Congress", "Whether the two credits it names are refundable at all", "Whether the Secretary has discretion to release a refund early"],
            correctIndex: 0,
            explanation: "The delay falls on the group least able to absorb it, because the credits were designed to reach low earners and the hold was attached to the credits.",
            sourceLessonSlug: "who-the-hold-lands-on",
          },
          {
            prompt: "Which sibling course supplies the three-question exclusion procedure?",
            options: ["Financing Without Access", "Credit, and the Decisions Made About You, which reads the consumer file", "Cash Flow, and When the Money Actually Moves, which reads the calendar", "Banking, and Who Has No Bank, which reads the deposit account"],
            correctIndex: 0,
            explanation: "Which door was closed, what pool replaced it, and who bears the risk.",
            sourceLessonSlug: "who-the-hold-lands-on",
          },
          {
            prompt: "Applying that procedure here, which door was closed?",
            options: ["Access to a refund before mid-February", "Access to the earned income credit for filers without children", "Access to free preparation for households above an income limit", "Access to an examination file after a determination has been made"],
            correctIndex: 0,
            explanation: "And only for the defined class of filers claiming one of the two named credits.",
            sourceLessonSlug: "who-the-hold-lands-on",
          },
          {
            prompt: "Applying that procedure, what pool replaced the closed door?",
            options: ["A market in advances against unpaid refunds", "A network of volunteer preparation sites funded by federal grants", "A statutory hardship procedure administered by the Taxpayer Advocate", "A schedule of instalment payments made across the following year"],
            correctIndex: 0,
            explanation: "And the risk is borne by the filer, in the form of a price.",
            sourceLessonSlug: "who-the-hold-lands-on",
          },
          {
            prompt: "Which sibling course prices the refund advance product?",
            options: ["Predatory Products, Priced", "Housing, which reads the lease and the federal loan disclosures", "Banking, and Who Has No Bank, which reads the fee schedule", "Credit, and the Decisions Made About You, which reads the score"],
            correctIndex: 0,
            explanation: "Its lesson on a refund as a debt the government already owes you reads section 6402(a) and works the arithmetic.",
            sourceLessonSlug: "who-the-hold-lands-on",
          },
          {
            prompt: "Why does this course not re-price the refund advance?",
            options: ["The sibling course already teaches it", "Because the product is illegal in most states and not worth teaching", "Because the arithmetic depends on figures that reset every January", "Because pricing a product would amount to giving financial advice"],
            correctIndex: 0,
            explanation: "The two courses divide the object: one prices the product, and this one explains the window it is priced against.",
            sourceLessonSlug: "who-the-hold-lands-on",
          },
          {
            prompt: "What does the sibling course say a refund lender is NOT taking a risk on?",
            options: ["Whether the money exists", "Whether the filer will repay the advance when the refund lands", "Whether the return will be selected for examination that season", "Whether the statutory hold will be extended by a later Congress"],
            correctIndex: 0,
            explanation: "The debtor is the Treasury, so what the lender bears is timing risk and the risk that the return is wrong.",
            sourceLessonSlug: "who-the-hold-lands-on",
          },
          {
            prompt: "Does this course tell a reader whether to take a refund advance?",
            options: ["No", "Yes, where the household has no other source of cash", "Yes, where the fee converts to an annual rate below a threshold", "Only where the filer claims one of the two named credits"],
            correctIndex: 0,
            explanation: "That is a decision about a household's calendar, which the course does not know.",
            sourceLessonSlug: "who-the-hold-lands-on",
          },
          {
            prompt: "Which liability does section 6402(a) put ahead of a refund?",
            options: ["The filer's own federal tax", "Any past-due support the filer owes to a custodial parent", "A debt referred by a federal agency other than the Treasury", "A state income tax obligation certified as legally enforceable"],
            correctIndex: 0,
            explanation: "The Secretary may credit the overpayment against any liability in respect of an internal revenue tax before the balance is refunded.",
            sourceLessonSlug: "the-refund-can-be-taken-first",
          },
          {
            prompt: "What does 26 U.S.C. 6402(c) reduce a refund by?",
            options: ["Past-due support", "Any student loan balance in default with the Department of Education", "Any unpaid state sales tax certified by the state's revenue agency", "Any court judgment entered against the filer during the taxable year"],
            correctIndex: 0,
            explanation: "It sits ahead of the other referred categories in the section's own order.",
            sourceLessonSlug: "the-refund-can-be-taken-first",
          },
          {
            prompt: "What starts the offset process under 6402(d)(1)?",
            options: ["Notice from a federal agency", "A determination by the Secretary on examining the return", "A request from the taxpayer to apply the refund to a debt", "A judgment obtained by the creditor in a federal district court"],
            correctIndex: 0,
            explanation: "Upon receiving notice that a named person owes a past-due legally enforceable debt to that agency.",
            sourceLessonSlug: "the-refund-can-be-taken-first",
          },
          {
            prompt: "What kind of debt does 26 U.S.C. 6402(e)(1) reach?",
            options: ["A past-due state income tax obligation", "Any debt owed to a state agency of whatever description", "A local property tax certified by a county assessor's office", "A state court fine imposed for a violation of state law"],
            correctIndex: 0,
            explanation: "The subsection names a past-due, legally enforceable State income tax obligation specifically.",
            sourceLessonSlug: "the-refund-can-be-taken-first",
          },
          {
            prompt: "What does 26 U.S.C. 6402(f) cover?",
            options: ["Covered unemployment compensation debts", "Overpayments of the earned income credit in prior years", "Penalties assessed under section 6651 for a failure to file", "Interest accrued on an unpaid balance from a previous year"],
            correctIndex: 0,
            explanation: "It is the last of the four referred categories in the section's priority order.",
            sourceLessonSlug: "the-refund-can-be-taken-first",
          },
          {
            prompt: "What comes first in the section 6402 priority order?",
            options: ["Internal revenue tax", "Past-due support owed by the person who made the overpayment", "Debts referred by a federal agency other than the Treasury", "The credit of any balance against the following year's estimated tax"],
            correctIndex: 0,
            explanation: "Then past-due support, then federal agency debts, then state income tax obligations, then unemployment compensation debts.",
            sourceLessonSlug: "the-refund-can-be-taken-first",
          },
          {
            prompt: "Why does the lesson say an offset never reaches a household's budget?",
            options: ["The reduction happens before payment", "Because the offset is applied to the following year's return", "Because the taxpayer must consent before an offset takes effect", "Because the amount is held in suspense until a claim is filed"],
            correctIndex: 0,
            explanation: "The money is not paid and then collected back, so it is never available to be spent, budgeted or borrowed against.",
            sourceLessonSlug: "the-refund-can-be-taken-first",
          },
          {
            prompt: "In an offset for a referred debt, what role does the IRS play?",
            options: ["Collector, not creditor", "Creditor, since the debt is owed under the Internal Revenue Code", "Adjudicator, since it decides whether the debt is properly owed", "Guarantor, since it undertakes to pay the referring agency in full"],
            correctIndex: 0,
            explanation: "The grammar of subsections (d) and (e) has the Secretary acting upon receiving notice from the agency or the state.",
            sourceLessonSlug: "the-refund-can-be-taken-first",
          },
          {
            prompt: "Whom should a filer ask about the amount of a referred debt?",
            options: ["The agency or state that referred it", "The Internal Revenue Service, which applied the reduction", "The Bureau of the Fiscal Service, which issues refund payments", "The employer whose wage report produced the withholding"],
            correctIndex: 0,
            explanation: "The statute places the notice duty on that party, which makes it the one that owns the underlying debt question.",
            sourceLessonSlug: "the-refund-can-be-taken-first",
          },
          {
            prompt: "What third risk does this lesson add to a refund advance?",
            options: ["The amount can shrink before payment", "The statutory hold may be extended after the advance is made", "The lender may withdraw the advance before the refund is issued", "The taxpayer may be barred from claiming the credit in future years"],
            correctIndex: 0,
            explanation: "By operation of the offset provisions, for a reason the filer may not have been thinking about.",
            sourceLessonSlug: "the-refund-can-be-taken-first",
          },
          {
            prompt: "Does an offset mean the taxpayer received no benefit?",
            options: ["No, a debt of theirs was paid", "Yes, the amount is retained permanently by the Treasury", "Yes, unless the taxpayer disputes the offset within thirty days", "It depends on whether the debt was federal or owed to a state"],
            correctIndex: 0,
            explanation: "It is simply not money that arrives, which is a different thing from money that is lost.",
            sourceLessonSlug: "the-refund-can-be-taken-first",
          },
          {
            prompt: "What does the lesson say exists where a joint refund is offset for one spouse's debt?",
            options: ["A separate procedure", "An automatic split of the refund between the two spouses", "A bar on offsetting a joint refund for an individual debt", "A right to file separately for the year after the offset occurs"],
            correctIndex: 0,
            explanation: "The lesson names that it exists and stops, sending the individualised question to the free preparation programs.",
            sourceLessonSlug: "the-refund-can-be-taken-first",
          },
          {
            prompt: "Where does the lesson send a filer with a question about that separate procedure?",
            options: ["The free preparation programs", "A commercial preparer specialising in refund offsets", "The federal agency that referred the underlying debt", "The Tax Court, by petition within ninety days of the notice"],
            correctIndex: 0,
            explanation: "They are staffed by people trained to answer it, and the course itself refuses individualised questions.",
            sourceLessonSlug: "the-refund-can-be-taken-first",
          },
          {
            prompt: "What is an offset, as this course uses the term?",
            options: ["A statutory reduction of a refund to pay a listed debt", "A penalty imposed for claiming a credit the filer was not entitled to", "A credit of an overpayment against the following year's estimated tax", "An adjustment made by the Secretary after examining a filed return"],
            correctIndex: 0,
            explanation: "It happens before the balance is paid, which is what distinguishes it from ordinary collection.",
            sourceLessonSlug: "the-refund-can-be-taken-first",
          },
          {
            prompt: "What is a statutory floor, as the course uses the phrase?",
            options: ["The earliest date something may lawfully happen", "The minimum refund the Secretary is required to issue", "The lowest income at which a return must be filed", "The smallest credit amount the statute will allow"],
            correctIndex: 0,
            explanation: "It is not the same as the date the thing is expected to happen, which is why both dates carry sources here.",
            sourceLessonSlug: "the-fifteenth-day-of-the-second-month",
          },
          {
            prompt: "What does the lesson mean by calling the hold's incidence structural rather than accidental?",
            options: ["It follows from the design of the credits", "It results from how the agency chooses to schedule processing", "It varies from year to year with the volume of returns filed", "It depends on which state the filer's return was submitted from"],
            correctIndex: 0,
            explanation: "The credits were designed to reach low earners, and the hold was attached to the credits.",
            sourceLessonSlug: "who-the-hold-lands-on",
          },
          {
            prompt: "Which subsection allows a remaining balance to be credited against estimated tax?",
            options: ["Subsection (b)", "Subsection (m), which fixes the earliest date for payment", "Subsection (c), which reaches past-due support obligations", "Subsection (f), which reaches unemployment compensation debts"],
            correctIndex: 0,
            explanation: "It sits at the end of the priority order the section sets out, after the referred categories.",
            sourceLessonSlug: "the-refund-can-be-taken-first",
          },
          {
            prompt: "How does the lesson describe what section 32 requires before any credit arises?",
            options: ["Earned income", "A qualifying child meeting the section 152(c) definition", "A filing status other than married filing separately", "Investment income below the threshold in subsection (i)"],
            correctIndex: 0,
            explanation: "Employee compensation includible in gross income plus net earnings from self-employment, per 32(c)(2)(A).",
            sourceLessonSlug: "who-the-hold-lands-on",
          },
          {
            prompt: "What kind of fact does the course say the hold's distributive effect is?",
            options: ["A matter of arithmetic", "A contested empirical question researchers disagree about", "An assertion the course makes without a primary source", "A policy judgment on which reasonable people differ"],
            correctIndex: 0,
            explanation: "It follows from reading the two credits' eligibility conditions beside the sentence that names them.",
            sourceLessonSlug: "who-the-hold-lands-on",
          },
          {
            prompt: "What did the course choose to teach instead of repeating the sibling course's arithmetic?",
            options: ["Why the window exists and who is in it", "The state licensing rules that govern refund advance lenders", "The conversion of a flat fee into an annual percentage rate", "The enforcement record of the largest refund advance providers"],
            correctIndex: 0,
            explanation: "The division of labour is deliberate, and the lesson tells a reader to go and read the other course for the pricing.",
            sourceLessonSlug: "who-the-hold-lands-on",
          },
          {
            prompt: "What does the section 6402 order tell you about a filer who owes federal tax and is due a refund?",
            options: ["The tax is satisfied first", "The refund is paid in full and the tax collected separately", "The refund is held until the tax is paid by other means", "The two amounts are netted only if the filer so elects"],
            correctIndex: 0,
            explanation: "Subsection (a) allows the Secretary to credit the overpayment against internal revenue tax before refunding any balance.",
            sourceLessonSlug: "the-refund-can-be-taken-first",
          },
          {
            prompt: "What phrase do both 6402(d)(1) and 6402(e)(1) begin with?",
            options: ["Upon receiving notice", "Notwithstanding any other provision of this section", "At the discretion of the Secretary of the Treasury", "Where the taxpayer has been afforded an opportunity to object"],
            correctIndex: 0,
            explanation: "Which is the grammar that makes the Service the collector rather than the creditor.",
            sourceLessonSlug: "the-refund-can-be-taken-first",
          },
          {
            prompt: "What does a filer with a modest credit on a large withholding refund experience under the hold?",
            options: ["A wait for the entire amount", "A partial payment covering the withholding portion only", "An immediate refund, since the credit portion is the smaller part", "A choice between waiting and forgoing the credit for that year"],
            correctIndex: 0,
            explanation: "The IRS says it cannot release the part of the refund not associated with the two credits.",
            sourceLessonSlug: "the-fifteenth-day-of-the-second-month",
          },
          {
            prompt: "What does the course say about quoting last season's refund date?",
            options: ["It is exactly the mistake the course prevents", "It is acceptable where the statutory floor has not changed", "It is required, because the practical date rarely moves", "It is safe provided the year is not printed alongside it"],
            correctIndex: 0,
            explanation: "The practical date is published fresh each year and sits weeks after the statutory floor.",
            sourceLessonSlug: "the-fifteenth-day-of-the-second-month",
          },
          {
            prompt: "How does 24(d)(1) connect the refundable child credit to work?",
            options: ["Through a percentage of earned income above a floor", "Through a requirement that the child attend school in the year", "Through a limit tied to the tax withheld from the filer's wages", "Through a phase-out that begins at the filing threshold"],
            correctIndex: 0,
            explanation: "Which is why both credits named in 6402(m) reach households with earnings at the lower end.",
            sourceLessonSlug: "who-the-hold-lands-on",
          },
          {
            prompt: "In the exclusion procedure, who bears the risk created by the hold?",
            options: ["The filer, in the form of a price", "The lender, which advances money against an uncertain refund", "The Treasury, which pays interest on any delayed refund", "The employer, which must report wages earlier than before"],
            correctIndex: 0,
            explanation: "That is the third of the three questions the sibling course teaches for reading any exclusion.",
            sourceLessonSlug: "who-the-hold-lands-on",
          },
          {
            prompt: "Which clause of 6402(m) tells you the rule is not about the size of a refund?",
            options: ["The clause naming two credits", "The clause fixing the fifteenth day of the second month", "The clause referring to a credit or refund of an overpayment", "The clause referring to the close of the taxable year"],
            correctIndex: 0,
            explanation: "Eligibility for either named credit is the trigger, so an identical refund without either is untouched.",
            sourceLessonSlug: "the-fifteenth-day-of-the-second-month",
          },
          {
            prompt: "What does the lesson say about naming February in the statute?",
            options: ["The statute names no month", "The statute names February and the fifteenth day of it", "The statute names February for calendar-year filers only", "The statute leaves the month to the Secretary to designate"],
            correctIndex: 0,
            explanation: "It states a formula, and the formula happens to land on 15 February for a calendar-year filer.",
            sourceLessonSlug: "the-fifteenth-day-of-the-second-month",
          },
          {
            prompt: "What is the common name for the section 24 credit portion that 6402(m) reaches?",
            options: ["The additional child tax credit", "The child and dependent care credit for working households", "The credit for other dependents who are not qualifying children", "The adoption credit allowed for qualified adoption expenses"],
            correctIndex: 0,
            explanation: "It is the refundable portion, which the statute reaches through the words by reason of subsection (d) thereof.",
            sourceLessonSlug: "the-fifteenth-day-of-the-second-month",
          },
          {
            prompt: "What kind of fraud does the agency's stated reason for the hold name?",
            options: ["Fabricated wages and withholdings", "Claims for qualifying children who live in another household", "Returns filed by preparers without an identifying number", "Refunds directed to accounts in another person's name"],
            correctIndex: 0,
            explanation: "The delay allows additional time to help prevent revenue lost due to identity theft and refund fraud of that kind.",
            sourceLessonSlug: "the-fifteenth-day-of-the-second-month",
          },
          {
            prompt: "What does the course say the package of PATH Act section 201 amounts to as one idea?",
            options: ["Match the employer's report before paying", "Delay every refund until the season's returns are all filed", "Raise the credits and slow their payment in the same measure", "Transfer verification of wages from the agency to the employer"],
            correctIndex: 0,
            explanation: "Earlier wage reporting on one side and a refund hold on the other buy a window in which the two can be compared.",
            sourceLessonSlug: "the-fifteenth-day-of-the-second-month",
          },
          {
            prompt: "Whose eligibility conditions decide who waits under the hold?",
            options: ["The two named credits'", "The taxpayer's, as recorded on the withholding certificate", "The referring agency's, where a debt has also been notified", "The preparer's, under the section 6695(g) due diligence rules"],
            correctIndex: 0,
            explanation: "A rule attached to two credits falls on whoever those credits reach, which is a matter of reading the sections.",
            sourceLessonSlug: "who-the-hold-lands-on",
          },
          {
            prompt: "What does the course say about calling the fraud rationale real?",
            options: ["Fabricated wages are a real problem", "The rationale has never been published by the agency", "The rationale applies equally to every refund claimed", "The rationale was added after the hold took effect"],
            correctIndex: 0,
            explanation: "A matching window is a real answer to it, which is why the lesson states the effect without calling the rule a scandal.",
            sourceLessonSlug: "who-the-hold-lands-on",
          },
          {
            prompt: "What does the lesson say a refund lender bears instead of existence risk?",
            options: ["Timing risk and correctness risk", "Interest rate risk and the risk of an offset by a state", "Credit risk on the filer and the risk of an early repayment", "The risk that the credit will be disallowed in a future year"],
            correctIndex: 0,
            explanation: "The debtor is the Treasury, so the money exists; what is uncertain is when it arrives and whether the return is right.",
            sourceLessonSlug: "who-the-hold-lands-on",
          },
          {
            prompt: "What does the priority order in section 6402 do with any balance left after the offsets?",
            options: ["Makes it available to credit or refund", "Retains it against the following year's tax automatically", "Returns it to the referring agency for further distribution", "Holds it in suspense until the next return is filed"],
            correctIndex: 0,
            explanation: "Subsection (b) allows a credit against estimated tax and subsection (a) requires the remainder to be refunded.",
            sourceLessonSlug: "the-refund-can-be-taken-first",
          },
          {
            prompt: "How does the lesson distinguish money that is offset from money that is lost?",
            options: ["A debt of the filer's was paid with it", "The amount is refunded in a later taxable year instead", "The offset may be reversed on request within thirty days", "The referring agency returns the excess after collection"],
            correctIndex: 0,
            explanation: "It is not money that arrives, which is a different thing from money the filer never had the benefit of.",
            sourceLessonSlug: "the-refund-can-be-taken-first",
          },
          {
            prompt: "Which two things does the offset section make it worth knowing about a refund?",
            options: ["It can be late and it can be smaller", "It is guaranteed in amount but not in timing", "It is guaranteed in timing but not in amount", "It is neither guaranteed nor enforceable against the Treasury"],
            correctIndex: 0,
            explanation: "Section 6402(m) supplies the timing risk and subsections (c) through (f) supply the amount risk.",
            sourceLessonSlug: "the-refund-can-be-taken-first",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5 — Free filing, and who actually gets it
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "free-file-is-a-contract",
      title: "13 · Free File is a contract, and the number in it moves",
      section: "Section 5 · Free filing, and who actually gets it",
      body: `Almost everything people believe about free tax filing is wrong in the same way: they think it is a government program with a rule. **The main one is a contract between the government and a trade body, and the eligibility number in it is not a number at all.**

## What Free File actually is

Treasury's own report to Congress describes it precisely: "The Free File program is a public-private partnership between the IRS and Free File, Inc. (FFI), a tax-exempt section 501(c)(4) social welfare organization," first launched for the 2003 filing season, whose stated objective is to expand electronic filing and extend online preparation to economically disadvantaged and underserved populations at no cost to individual taxpayers or to the Treasury (U.S. Department of the Treasury, 2025, p. 5). Free File, Inc. is the successor to the Free File Alliance.

**The terms are in a memorandum of understanding between the IRS and FFI**, not in the Internal Revenue Code. The report notes that the Ninth memorandum was extended by an amendment dated 30 April 2024 to run to 31 October 2029, and that when the arrangement was created in 2002 the Department of Justice's Antitrust Division reviewed it and indicated it had no intention of challenging it at that time, implying that material changes in structure or operations should be re-examined for antitrust compliance (U.S. Department of the Treasury, 2025, pp. 5-6).

## The eligibility number is a percentile

Here is the sentence to carry out of this lesson. Treasury writes that the memorandum "sets an annual income limit intended to make approximately 70 percent of taxpayers eligible to use Free File to file their federal income tax return," citing Article 3.1 of the memorandum (U.S. Department of the Treasury, 2025, p. 6).

**So the threshold is not a policy figure and it is not a statutory one. It is derived from a share of the filing population, in a private contract, recalculated annually.** That is a mechanism, and a mechanism you can reason about. It also guarantees the number moves every year, which is exactly why no course should print it as a fact.

**Two dated readings make the point.** Treasury records that "For tax year 2024, the AGI limit was 84,000 dollars" (U.S. Department of the Treasury, 2025, p. 6). The IRS's own Free File page, read on 29 August 2026 and last reviewed by the agency on 12 June 2026, states an adjusted gross income of 89,000 dollars or less for the guided software (Internal Revenue Service, 2026f).

**Neither figure is the answer to your question**, because your question is about a filing season neither of them may cover. The method is to open the agency's own page, read the number there, and write down the date you read it.

## The three things people get wrong about it

**First, there are two products, not one.** The guided software has the income limit. **Free File Fillable Forms** has none: the IRS page describes it as available for any income level, with online forms the filer selects, form instructions as the only guidance, and limited calculations (Internal Revenue Service, 2026f). It is a typewriter, not an adviser, and it is federal only.

**Second, each provider sets its own narrower criteria.** Treasury records that participating providers may impose additional criteria such as age limits, military status or lower income limits, but that collectively they must make at least one federal return option available to every eligible taxpayer (U.S. Department of the Treasury, 2025, p. 6).

**Third, state returns are a separate question.** Treasury notes that state coverage is required only in states participating in a State Free File Program, and that where offered, income limits or scope restrictions may be more restrictive than the federal ones, which is one reason taxpayers perceive that Free File is not truly free (U.S. Department of the Treasury, 2025, pp. 6-7).

:::reveal What kind of instrument sets the Free File eligibility limit? ||| A memorandum of understanding between the IRS and Free File, Inc., not a statute.

:::reveal What is the Free File income limit actually derived from? ||| A share of the filing population: Article 3.1 sets an annual limit intended to make approximately 70 percent of taxpayers eligible.

:::reveal What is the income limit for Free File Fillable Forms? ||| There is none. It is available at any income level, with form instructions as its only guidance.

## Vocabulary
- **Public-private partnership**: the structure of Free File, in which commercial providers supply the software and the terms sit in a contract rather than in the Code.
- **Memorandum of understanding**: the agreement between the IRS and Free File, Inc. that governs the program, including the annual income limit.
- **Free File Fillable Forms**: the no-income-limit, federal-only option that supplies electronic forms and form instructions rather than guided preparation.
- **State Free File Program**: the separate arrangement under which some states are covered, on terms that may be narrower than the federal ones.

## Sources
Internal Revenue Service. (2026f). *IRS Free File: Do your taxes for free*. https://www.irs.gov/filing/irs-free-file-do-your-taxes-for-free

U.S. Department of the Treasury. (2025). *Report on the replacement of Direct File: Report to Congress*. https://home.treasury.gov/system/files/131/Report-Replacement-of-Direct-File-2025.pdf`,
    },
    {
      slug: "the-volunteer-programs",
      title: "14 · The volunteer programs, and the statute behind them",
      section: "Section 5 · Free filing, and who actually gets it",
      body: `The other free route is older than the software, it is staffed by trained people rather than by a form, and it is the one this course would point at if it were allowed to point at anything.

## Where they came from

Treasury's report records that the Volunteer Income Tax Assistance program was "established as an outgrowth of the Tax Reform Act of 1969 (Public Law 91-172)" and that Tax Counseling for the Elderly started in 1978, providing free tax help tailored to seniors with priority given to taxpayers aged 60 and older, including counselling on pensions and retirement issues (U.S. Department of the Treasury, 2025, p. 4).

**The grant program that funds VITA partners is in the Code.** The Taxpayer First Act of 2019 (Public Law 116-25) made it permanent, codified at **26 U.S.C. § 7526A**, whose subsection (a) directs that "The Secretary shall establish a Community Volunteer Income Tax Assistance Matching Grant Program" (26 U.S.C. § 7526A, n.d.; U.S. Department of the Treasury, 2025, p. 4 n.16). Grants are matched dollar for dollar by the recipient program.

## How large it is, and the number that matters

As of Treasury's October 2025 report: the two programs together involve nearly **3,100 partner organizations** and more than **76,000 IRS-trained and certified volunteers**, many of them retirees, students or community members. VITA operates at more than **5,600 sites** and TCE at more than **3,900**, typically in community centres, libraries, schools, churches and senior centres (U.S. Department of the Treasury, 2025, pp. 4-5).

**Now the figure worth carrying out of this lesson.** For tax year 2024, Treasury estimated that approximately **67 million tax units were eligible for VITA**, and that **1.6 million returns** were filed through the program as of 1 August 2025 (U.S. Department of the Treasury, 2025, p. 4). For TCE, approximately 22 million eligible and 1.2 million returns filed.

**Sixty-seven million eligible, one point six million served.** Whatever is limiting this program, it is not eligibility. It is capacity, awareness, and the fact that a site with volunteer hours is a physical thing with a queue.

## The limits, stated plainly

**There is an income test and it moves.** Treasury records a VITA adjusted gross income threshold of **67,000 dollars for tax year 2024** (U.S. Department of the Treasury, 2025, p. 4). The IRS's own page, read on 29 August 2026 and last reviewed by the agency on 12 August 2026, describes VITA as serving people who generally make 69,000 dollars or less, persons with disabilities, and limited English speaking taxpayers (Internal Revenue Service, 2026g). **Two figures, two dates, one moving number, and the same method as the last lesson: read the agency's page and write down when you read it.**

**There is a scope limit.** Treasury notes that services vary by site with volunteer training and capacity, and that some situations, such as certain self-employment income, capital gains and losses, and children's unearned income, are generally outside the scope of what a site will prepare (U.S. Department of the Treasury, 2025, p. 4).

**And there is a quality floor.** The IRS states that "All VITA/TCE volunteers who prepare returns must take and pass tax law training that meets or exceeds IRS standards," and Treasury records that a reviewer checks a volunteer-prepared return before it is finalised (Internal Revenue Service, 2026g; U.S. Department of the Treasury, 2025, p. 5 n.19).

## Preparation is not representation

One more distinction, because people conflate them and they are different services with different statutes.

**26 U.S.C. § 7526** authorises grants for **low-income taxpayer clinics**, which are a different thing from a preparation site. A qualified clinic charges no more than nominal fees and either represents low-income taxpayers in controversies with the Internal Revenue Service or runs programs informing individuals for whom English is a second language about their rights and responsibilities (26 U.S.C. § 7526, n.d.).

**Preparation happens before a return is filed. Representation happens after something has gone wrong with one.** Section 6 of this course is about the second situation, and the clinics are the free route into it.

:::reveal Which statute made the VITA matching grant program permanent, and where is it codified? ||| The Taxpayer First Act of 2019, codified at 26 U.S.C. 7526A.

:::reveal What do the VITA eligibility and participation figures for tax year 2024 suggest is limiting the program? ||| Not eligibility: roughly 67 million tax units were eligible and about 1.6 million returns were filed through it.

:::reveal What is the difference between a VITA site and a low-income taxpayer clinic? ||| A site prepares a return before it is filed; a clinic under 26 U.S.C. 7526 represents taxpayers in controversies afterwards.

## Vocabulary
- **VITA**: the Volunteer Income Tax Assistance program, an outgrowth of the Tax Reform Act of 1969, whose grant funding sits at 26 U.S.C. 7526A.
- **TCE**: Tax Counseling for the Elderly, begun in 1978, with priority for taxpayers aged 60 and older and a focus on pensions and retirement.
- **Scope limitation**: the rule that a volunteer site prepares only the return types its training and capacity cover, so some situations are turned away.
- **Low-income taxpayer clinic**: the 26 U.S.C. 7526 institution that represents taxpayers in controversies with the Service, which is representation rather than preparation.

## Sources
26 U.S.C. § 7526. (n.d.). *Low-income taxpayer clinics*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/7526

26 U.S.C. § 7526A. (n.d.). *Return preparation programs for applicable taxpayers*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/7526A

Internal Revenue Service. (2026g). *Free tax return preparation for qualifying taxpayers*. https://www.irs.gov/individuals/free-tax-return-preparation-for-qualifying-taxpayers

U.S. Department of the Treasury. (2025). *Report on the replacement of Direct File: Report to Congress*. https://home.treasury.gov/system/files/131/Report-Replacement-of-Direct-File-2025.pdf`,
    },
    {
      slug: "direct-file-and-what-happened",
      title: "15 · The government built one itself, and then suspended it",
      section: "Section 5 · Free filing, and who actually gets it",
      body: `The third route is the one that shows most clearly why this course refuses to describe a program in the present tense without a date.

## What was built, and how much it was used

Treasury's report to Congress states the facts and the numbers. Direct File let eligible taxpayers file a federal individual return online directly with the IRS at no direct cost to the user. It launched as a pilot for tax year 2023 in **12 states**, at the conclusion of which "a total of 140,803 returns had been filed by users and accepted by the IRS." For tax year 2024 it was available in **25 states**, and as of 20 April 2025 "a total of 296,531 returns had been filed by users and accepted by the IRS" (U.S. Department of the Treasury, 2025, p. 1).

**Then the assessment, in the report's own words:** "Direct File had low overall participation and relatively high costs and burdens on the federal government, compared to other free filing options" (U.S. Department of the Treasury, 2025, p. 1).

## The statute that asked the question

The report exists because Congress required it. Its own cover states that "Section 70607 of Public Law No. 119-21 (the One, Big, Beautiful Bill Act or 'OBBBA') directs the Department of the Treasury to evaluate alternatives to Direct File. This report fulfills this requirement" (U.S. Department of the Treasury, 2025, cover page). The report is dated **2 October 2025**.

## The answer it gave

The report sets out a four-step approach, and its second step is the one that matters here. Under the heading "STEP 2: Suspend the Direct File Program," it states: "The IRS will suspend Direct File pilot program due to the program's high costs, limited participation, and the agency's need to focus resources on other priorities. Benefits intended under Direct File can be achieved more efficiently, and for a broader population, through enhancements to the Free File program" (U.S. Department of the Treasury, 2025, p. 18).

The other three steps are: enhance awareness of Free File and launch a public communications strategy; conduct a formal taxpayer survey using funds available from 1 October 2025 and convene a **Free Filing Modernization Summit** chaired by senior Treasury officials; and define what a "free" return means, collect data from commercial software companies, and prepare a supplemental report (U.S. Department of the Treasury, 2025, pp. 16-19).

## What this course will and will not say

**What is documented:** the report above, dated 2 October 2025, announcing suspension. And the IRS's own news release opening the 2026 filing season on 26 January 2026, which names Free File and the volunteer programs as the free routes and does not mention Direct File (Internal Revenue Service, 2026e).

**What this course will not do is state a present-tense status for the program on the day you happen to be reading.** Two documents on two dates are evidence about those dates. The lesson records both and files a source check rather than asserting a fact about today, which is precisely the discipline the rest of this course applies to a bracket amount.

## The transferable lesson

**A free filing route can be designed, launched, used by hundreds of thousands of people, evaluated in a report to Congress, and suspended, inside about eighteen months.** A course that told you which routes exist would be wrong within a year. A course that tells you where the routes are announced will not be.

**So the method is:** before each filing season, open the IRS's own filing pages, see which routes it names, and note the date. Then check the same pages for the income limits, because those move too, on a different clock, for different reasons.

:::reveal How many returns were filed and accepted through Direct File for tax year 2024, and as at what date? ||| 296,531, as of 20 April 2025, according to Treasury's report to Congress.

:::reveal Which statutory provision required Treasury's report on the replacement of Direct File? ||| Section 70607 of Public Law No. 119-21.

:::reveal Why does this lesson refuse to state a present-tense status for Direct File? ||| Because two dated documents are evidence about those dates, and the program's status changed twice in about eighteen months.

## Vocabulary
- **Direct File**: the IRS-built option for filing a federal return directly with the agency at no direct cost to the user, piloted for tax year 2023 and expanded for tax year 2024.
- **Report to Congress**: the document a statute requires an agency to produce, which is a primary source for what the agency said and when it said it.
- **Suspension**: the step Treasury's October 2025 report announced for the program, distinct from a repeal of any statute.
- **Free Filing Modernization Summit**: the convening the same report proposed, bringing tax preparation industry leaders together to expand free filing.

## Sources
Internal Revenue Service. (2026e). *IRS opens 2026 filing season* (IR-2026-12). https://www.irs.gov/newsroom/irs-opens-2026-filing-season

U.S. Department of the Treasury. (2025). *Report on the replacement of Direct File: Report to Congress*. https://home.treasury.gov/system/files/131/Report-Replacement-of-Direct-File-2025.pdf`,
    },
    {
      slug: "quiz-free-filing",
      title: "Section 5 review · Free File, the volunteer programs, and Direct File",
      section: "Section 5 · Free filing, and who actually gets it",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What kind of arrangement is IRS Free File?",
            options: ["A public-private partnership", "A program established by a section of the Internal Revenue Code", "A grant program administered through community partner organizations", "A service operated directly by the Bureau of the Fiscal Service"],
            correctIndex: 0,
            explanation: "Treasury describes it as a partnership between the IRS and Free File, Inc., a tax-exempt section 501(c)(4) social welfare organization.",
            sourceLessonSlug: "free-file-is-a-contract",
          },
          {
            prompt: "What is Free File, Inc. the successor to?",
            options: ["The Free File Alliance", "The Volunteer Income Tax Assistance program partner network", "The Electronic Tax Administration Advisory Committee", "The Taxpayer Advocate Service's outreach panel"],
            correctIndex: 0,
            explanation: "Treasury's report records the succession in a footnote to its description of the program.",
            sourceLessonSlug: "free-file-is-a-contract",
          },
          {
            prompt: "For which filing season did Free File first launch?",
            options: ["2003", "1969, alongside the creation of the volunteer program", "2019, when the Taxpayer First Act was enacted", "2024, when Direct File was expanded to twenty-five states"],
            correctIndex: 0,
            explanation: "Its stated objective was to expand electronic filing and extend online preparation to underserved populations at no cost.",
            sourceLessonSlug: "free-file-is-a-contract",
          },
          {
            prompt: "Where are the terms of the Free File program set out?",
            options: ["In a memorandum of understanding", "In the Internal Revenue Code at section 7526A", "In regulations issued by the Secretary under section 6011", "In an annual revenue procedure published each December"],
            correctIndex: 0,
            explanation: "That is why the eligibility limit is a contractual term rather than a statutory one.",
            sourceLessonSlug: "free-file-is-a-contract",
          },
          {
            prompt: "What does Article 3.1 of that memorandum set the annual income limit to achieve?",
            options: ["Eligibility for about 70 percent of taxpayers", "A limit equal to the median adjusted gross income for the year", "A limit matching the VITA income threshold for the same year", "Eligibility for every taxpayer below the section 6012 threshold"],
            correctIndex: 0,
            explanation: "The threshold is derived from a share of the filing population, recalculated annually, which guarantees it moves.",
            sourceLessonSlug: "free-file-is-a-contract",
          },
          {
            prompt: "What AGI limit does Treasury record for Free File in tax year 2024?",
            options: ["84,000 dollars", "89,000 dollars, which is the figure the IRS page now shows", "67,000 dollars, which is the VITA threshold for the same year", "79,000 dollars, which was the limit before the ninth memorandum"],
            correctIndex: 0,
            explanation: "The IRS page read on 29 August 2026 shows a different figure, which is the point: two dated readings of one moving number.",
            sourceLessonSlug: "free-file-is-a-contract",
          },
          {
            prompt: "What AGI figure did the IRS Free File page state when the lesson author read it?",
            options: ["89,000 dollars or less", "84,000 dollars or less, matching the tax year 2024 limit", "There is no limit for any of the Free File products", "A limit set individually by each participating provider"],
            correctIndex: 0,
            explanation: "Read on 29 August 2026, with the agency's own review date of 12 June 2026 recorded beside it.",
            sourceLessonSlug: "free-file-is-a-contract",
          },
          {
            prompt: "What is the income limit for Free File Fillable Forms?",
            options: ["There is none", "The same limit that applies to the guided software", "A limit half the size of the guided software's threshold", "A limit each participating provider sets for itself"],
            correctIndex: 0,
            explanation: "It is available at any income level, with form instructions as its only guidance and limited calculations.",
            sourceLessonSlug: "free-file-is-a-contract",
          },
          {
            prompt: "How does the lesson describe Free File Fillable Forms?",
            options: ["A typewriter, not an adviser", "Guided preparation with step-by-step interview questions", "A service staffed by trained volunteers at community sites", "A product that also prepares and transmits a state return"],
            correctIndex: 0,
            explanation: "It supplies electronic forms and their instructions, and it is federal only.",
            sourceLessonSlug: "free-file-is-a-contract",
          },
          {
            prompt: "May a Free File provider impose criteria narrower than the program's?",
            options: ["Yes, such as age or military status", "No, every provider must accept every eligible taxpayer", "Only with the written consent of the Secretary each year", "Only where the taxpayer also files a state return through it"],
            correctIndex: 0,
            explanation: "Collectively, though, providers must make at least one federal return option available to all eligible taxpayers.",
            sourceLessonSlug: "free-file-is-a-contract",
          },
          {
            prompt: "When is state coverage required under the Free File program?",
            options: ["Only in states with a State Free File Program", "In every state that imposes an individual income tax", "Wherever the taxpayer's federal return is prepared for free", "Only for taxpayers below the federal adjusted gross income limit"],
            correctIndex: 0,
            explanation: "Where offered, its income limits or scope restrictions may be more restrictive than the federal ones.",
            sourceLessonSlug: "free-file-is-a-contract",
          },
          {
            prompt: "What did the Department of Justice's Antitrust Division do in 2002?",
            options: ["Indicated no intention to challenge the arrangement", "Approved the arrangement permanently and closed the matter", "Required the program to be reopened to non-member providers", "Conditioned the arrangement on an annual income limit"],
            correctIndex: 0,
            explanation: "Implying that material changes in structure or operations should be re-examined for antitrust compliance.",
            sourceLessonSlug: "free-file-is-a-contract",
          },
          {
            prompt: "Until when was the ninth memorandum extended?",
            options: ["31 October 2029", "2 October 2025, the date of the Treasury report", "30 April 2024, the date of the amendment itself", "The end of the 2026 filing season"],
            correctIndex: 0,
            explanation: "By an amendment dated 30 April 2024, according to Treasury's report to Congress.",
            sourceLessonSlug: "free-file-is-a-contract",
          },
          {
            prompt: "Which Act was VITA an outgrowth of?",
            options: ["The Tax Reform Act of 1969", "The Taxpayer First Act of 2019, which made its grants permanent", "The Protecting Americans from Tax Hikes Act of 2015", "The One, Big, Beautiful Bill Act of 2025"],
            correctIndex: 0,
            explanation: "Public Law 91-172, according to Treasury's report, with TCE following in 1978.",
            sourceLessonSlug: "the-volunteer-programs",
          },
          {
            prompt: "Which Act made the VITA matching grant program permanent?",
            options: ["The Taxpayer First Act of 2019", "The Tax Reform Act of 1969, which created the program itself", "The Consolidated Appropriations Act, 2016, which carried the PATH Act", "The One, Big, Beautiful Bill Act, which addressed free filing generally"],
            correctIndex: 0,
            explanation: "Public Law 116-25, codified at 26 U.S.C. 7526A.",
            sourceLessonSlug: "the-volunteer-programs",
          },
          {
            prompt: "Where is the VITA matching grant program codified?",
            options: ["26 U.S.C. 7526A", "26 U.S.C. 7526, which authorises low-income taxpayer clinics", "26 U.S.C. 6402, which governs credits and refunds of overpayments", "26 U.S.C. 7803, which sets out the enumerated taxpayer rights"],
            correctIndex: 0,
            explanation: "Its subsection (a) directs the Secretary to establish the Community Volunteer Income Tax Assistance Matching Grant Program.",
            sourceLessonSlug: "the-volunteer-programs",
          },
          {
            prompt: "On what basis are the section 7526A grants matched?",
            options: ["Dollar for dollar", "At three federal dollars for every dollar raised locally", "At a rate the Secretary sets for each grant recipient", "Only for the first year of a partner organization's operation"],
            correctIndex: 0,
            explanation: "A qualified return preparation program must provide matching funds on that basis.",
            sourceLessonSlug: "the-volunteer-programs",
          },
          {
            prompt: "In what year did the TCE program start?",
            options: ["1978", "1969, alongside the Act that produced VITA", "2003, the first filing season for Free File", "2019, when the Taxpayer First Act was enacted"],
            correctIndex: 0,
            explanation: "It provides free help tailored to seniors, with priority given to taxpayers aged 60 and older.",
            sourceLessonSlug: "the-volunteer-programs",
          },
          {
            prompt: "Which age group has priority under TCE?",
            options: ["Taxpayers aged 60 and older", "Taxpayers aged 65 and older, matching the earned income credit ceiling", "Taxpayers who have begun drawing a pension of any kind", "Taxpayers who retired during the taxable year in question"],
            correctIndex: 0,
            explanation: "Volunteers often counsel on pensions and retirement issues unique to older taxpayers.",
            sourceLessonSlug: "the-volunteer-programs",
          },
          {
            prompt: "How many volunteers did Treasury record across the two programs?",
            options: ["More than 76,000", "About 3,100, matching the number of partner organizations", "More than 5,600, matching the number of VITA sites", "About 1.6 million, matching the returns filed through VITA"],
            correctIndex: 0,
            explanation: "IRS-trained and certified, many of them retirees, students or community members.",
            sourceLessonSlug: "the-volunteer-programs",
          },
          {
            prompt: "How many partner organizations did Treasury record?",
            options: ["Nearly 3,100", "More than 76,000, which is the volunteer figure instead", "More than 9,500, being the VITA and TCE sites combined", "About 67 million, which is the eligible population figure"],
            correctIndex: 0,
            explanation: "Together they run more than 5,600 VITA sites and more than 3,900 TCE sites.",
            sourceLessonSlug: "the-volunteer-programs",
          },
          {
            prompt: "How many tax units did Treasury estimate were eligible for VITA in tax year 2024?",
            options: ["About 67 million", "About 22 million, which is the TCE eligibility estimate", "About 1.6 million, which is the number of returns filed", "About 3,100, which is the partner organization count"],
            correctIndex: 0,
            explanation: "And about 1.6 million returns were filed through the program as of 1 August 2025.",
            sourceLessonSlug: "the-volunteer-programs",
          },
          {
            prompt: "What does the gap between VITA eligibility and VITA use suggest is limiting the program?",
            options: ["Capacity and awareness, not eligibility", "The income threshold, which excludes most working households", "The statutory grant formula, which caps the number of sites", "The scope rules, which exclude the most common return types"],
            correctIndex: 0,
            explanation: "A site with volunteer hours is a physical thing with a queue, and roughly one eligible household in forty was served.",
            sourceLessonSlug: "the-volunteer-programs",
          },
          {
            prompt: "What VITA income threshold does Treasury record for tax year 2024?",
            options: ["67,000 dollars", "69,000 dollars, which is the figure the IRS page now shows", "84,000 dollars, which is the Free File limit for the same year", "89,000 dollars, which is the current Free File software limit"],
            correctIndex: 0,
            explanation: "The IRS page read on 29 August 2026 describes a different figure, which is why both carry their dates.",
            sourceLessonSlug: "the-volunteer-programs",
          },
          {
            prompt: "Besides an income test, whom does the IRS page say VITA serves?",
            options: ["Persons with disabilities and limited English speakers", "Taxpayers claiming the earned income credit in any amount", "Taxpayers who have received a notice of deficiency", "Taxpayers residing outside the United States for part of the year"],
            correctIndex: 0,
            explanation: "Read on 29 August 2026, with the agency's own review date of 12 August 2026 recorded beside it.",
            sourceLessonSlug: "the-volunteer-programs",
          },
          {
            prompt: "Which situations does Treasury name as generally outside VITA scope?",
            options: ["Some self-employment, capital gains, children's unearned income", "Any return claiming the earned income credit or the child credit", "Any return for a taxpayer over the age of sixty", "Any return that also requires a state filing to be prepared"],
            correctIndex: 0,
            explanation: "Services vary by site with volunteer training and capacity, so scope is a site-level fact.",
            sourceLessonSlug: "the-volunteer-programs",
          },
          {
            prompt: "What training standard applies to VITA and TCE volunteers who prepare returns?",
            options: ["Training that meets or exceeds IRS standards", "A state licence in the jurisdiction where the site operates", "A certification issued by the partner organization itself", "A qualification equivalent to that of a paid preparer"],
            correctIndex: 0,
            explanation: "They must take and pass it, and a reviewer checks a volunteer-prepared return before it is finalised.",
            sourceLessonSlug: "the-volunteer-programs",
          },
          {
            prompt: "What does 26 U.S.C. 7526 authorise grants for?",
            options: ["Low-income taxpayer clinics", "Volunteer preparation sites operated by community partners", "Free electronic filing software supplied by commercial providers", "Outreach campaigns encouraging eligible households to claim credits"],
            correctIndex: 0,
            explanation: "A different institution from a preparation site, and a different statute from section 7526A.",
            sourceLessonSlug: "the-volunteer-programs",
          },
          {
            prompt: "What does a qualified low-income taxpayer clinic do?",
            options: ["Represents taxpayers in controversies, or educates them", "Prepares and transmits returns free of charge before filing", "Issues determinations binding on the Internal Revenue Service", "Administers the matching grants paid to volunteer programs"],
            correctIndex: 0,
            explanation: "The statute names representation in controversies and programs informing people for whom English is a second language.",
            sourceLessonSlug: "the-volunteer-programs",
          },
          {
            prompt: "What fee limit applies to a qualified low-income taxpayer clinic?",
            options: ["No more than nominal fees", "A fee capped at one percent of the amount in controversy", "A sliding scale published annually by the Secretary", "No fee at all under any circumstance whatsoever"],
            correctIndex: 0,
            explanation: "Except for reimbursement of actual costs, according to the statutory definition.",
            sourceLessonSlug: "the-volunteer-programs",
          },
          {
            prompt: "What distinction does the lesson draw between preparation and representation?",
            options: ["Before filing versus after something goes wrong", "Free versus paid, whatever the stage of the matter", "Federal versus state, depending on which return is at issue", "Volunteer-staffed versus software-driven service delivery"],
            correctIndex: 0,
            explanation: "Section 6 of the course is about the second situation, and the clinics are the free route into it.",
            sourceLessonSlug: "the-volunteer-programs",
          },
          {
            prompt: "In how many states was Direct File available for the tax year 2023 pilot?",
            options: ["12", "25, which was the number for tax year 2024 instead", "50, since it was a federal program available nationwide", "Fewer than 5, because it was limited to a small trial group"],
            correctIndex: 0,
            explanation: "A total of 140,803 returns had been filed and accepted by the conclusion of the pilot.",
            sourceLessonSlug: "direct-file-and-what-happened",
          },
          {
            prompt: "How many returns were filed and accepted through the tax year 2023 pilot?",
            options: ["140,803", "296,531, which is the tax year 2024 figure instead", "1.6 million, which is the VITA figure for tax year 2024", "Fewer than 10,000, because the pilot covered twelve states"],
            correctIndex: 0,
            explanation: "Treasury's report to Congress states the figure for the conclusion of the pilot program.",
            sourceLessonSlug: "direct-file-and-what-happened",
          },
          {
            prompt: "In how many states was Direct File available for tax year 2024?",
            options: ["25", "12, which was the pilot figure for tax year 2023", "38, following the expansion announced in the report", "All of them, once the pilot had concluded successfully"],
            correctIndex: 0,
            explanation: "And 296,531 returns had been filed and accepted as of 20 April 2025.",
            sourceLessonSlug: "direct-file-and-what-happened",
          },
          {
            prompt: "How did Treasury's report characterise Direct File's participation and costs?",
            options: ["Low participation and relatively high costs", "High participation at a cost comparable to other free options", "Low participation at a cost lower than any commercial product", "High participation but a burden falling mainly on the states"],
            correctIndex: 0,
            explanation: "Compared to other free filing options, in the report's own words.",
            sourceLessonSlug: "direct-file-and-what-happened",
          },
          {
            prompt: "Which provision required Treasury to evaluate alternatives to Direct File?",
            options: ["Section 70607 of Public Law No. 119-21", "Section 201(b) of the Protecting Americans from Tax Hikes Act", "Section 7526A of the Internal Revenue Code, on matching grants", "Article 3.1 of the memorandum of understanding with Free File, Inc."],
            correctIndex: 0,
            explanation: "The report's own cover page states that it fulfils that requirement.",
            sourceLessonSlug: "direct-file-and-what-happened",
          },
          {
            prompt: "What date does Treasury's report on the replacement of Direct File carry?",
            options: ["2 October 2025", "26 January 2026, the opening of the following filing season", "4 July 2025, the date the requiring statute was enacted", "20 April 2025, the date of the participation figure it cites"],
            correctIndex: 0,
            explanation: "Dating the document is what lets a reader judge how much it says about any later moment.",
            sourceLessonSlug: "direct-file-and-what-happened",
          },
          {
            prompt: "What does Step 2 of the report announce?",
            options: ["Suspension of the Direct File program", "Expansion of Direct File to the remaining twenty-five states", "Transfer of Direct File to a commercial software provider", "A statutory repeal of the authority to operate Direct File"],
            correctIndex: 0,
            explanation: "Citing high costs, limited participation, and the agency's need to focus resources on other priorities.",
            sourceLessonSlug: "direct-file-and-what-happened",
          },
          {
            prompt: "Through what does the report say Direct File's intended benefits can be achieved instead?",
            options: ["Enhancements to the Free File program", "Expansion of the volunteer preparation sites in every state", "A new grant program administered through community partners", "A direct appropriation to build a replacement filing system"],
            correctIndex: 0,
            explanation: "More efficiently and for a broader population, in the report's own words.",
            sourceLessonSlug: "direct-file-and-what-happened",
          },
          {
            prompt: "What does Step 1 of the report propose?",
            options: ["Enhancing awareness of Free File", "Suspending the Direct File program immediately", "Convening a summit of tax preparation industry leaders", "Defining what a free return means for data collection"],
            correctIndex: 0,
            explanation: "Together with launching a public communications strategy, ahead of the suspension step.",
            sourceLessonSlug: "direct-file-and-what-happened",
          },
          {
            prompt: "What is the Free Filing Modernization Summit?",
            options: ["A convening the report proposed, chaired by Treasury", "An annual conference the Internal Revenue Code requires", "A grant competition among volunteer partner organizations", "A panel that sets the Free File income limit each year"],
            correctIndex: 0,
            explanation: "It would bring tax preparation industry leaders and experts together to expand free filing.",
            sourceLessonSlug: "direct-file-and-what-happened",
          },
          {
            prompt: "What does the fourth step of the report require Treasury to define?",
            options: ["What a free return means", "Which taxpayers are eligible for the volunteer programs", "How the annual Free File income limit is to be calculated", "Which states must participate in a State Free File Program"],
            correctIndex: 0,
            explanation: "Alongside collecting data from commercial software companies and preparing a supplemental report.",
            sourceLessonSlug: "direct-file-and-what-happened",
          },
          {
            prompt: "Which free routes does the IRS release opening the 2026 filing season name?",
            options: ["Free File and the volunteer programs", "Direct File, Free File and the volunteer programs together", "Only Free File, with no mention of volunteer preparation", "Only the volunteer programs, since Free File had been suspended"],
            correctIndex: 0,
            explanation: "The release does not mention Direct File, which the lesson records as evidence about that date rather than about today.",
            sourceLessonSlug: "direct-file-and-what-happened",
          },
          {
            prompt: "Why does the lesson file a source check rather than stating the program's status?",
            options: ["Two dated documents are evidence about those dates", "Because the agency has not published any document on the subject", "Because a course may not cite a report to Congress as a source", "Because the status is a matter of state rather than federal law"],
            correctIndex: 0,
            explanation: "It is the same discipline the rest of the course applies to a bracket amount.",
            sourceLessonSlug: "direct-file-and-what-happened",
          },
          {
            prompt: "What does the lesson say happened to a free filing route inside about eighteen months?",
            options: ["Designed, launched, evaluated, and suspended", "Enacted by statute and then repealed by a later Congress", "Transferred from the agency to a private trade association", "Expanded from twelve states to every state in the country"],
            correctIndex: 0,
            explanation: "Which is why a course naming the routes would be wrong within a year while one naming where they are announced would not.",
            sourceLessonSlug: "direct-file-and-what-happened",
          },
          {
            prompt: "What method does the lesson give for the start of each filing season?",
            options: ["Open the IRS pages and note the date", "Search for news coverage of the previous season's routes", "Ask a commercial preparer which free options remain open", "Rely on the course, which is revised before each season"],
            correctIndex: 0,
            explanation: "Then check the same pages for the income limits, because those move too, on a different clock.",
            sourceLessonSlug: "direct-file-and-what-happened",
          },
          {
            prompt: "What does the lesson say the two moving numbers in this section have in common?",
            options: ["Both require a reading with a date attached", "Both are set by statute and change only by amendment", "Both are published in the annual revenue procedure", "Both apply to the same population of eligible filers"],
            correctIndex: 0,
            explanation: "The Free File limit follows a percentile in a contract and the VITA threshold moves on its own schedule.",
            sourceLessonSlug: "the-volunteer-programs",
          },
          {
            prompt: "What kind of thing does the lesson say a volunteer site is?",
            options: ["A physical thing with a queue", "A software product available at any hour of the day", "A federal office staffed by agency employees", "A hotline operated by the Taxpayer Advocate Service"],
            correctIndex: 0,
            explanation: "Which is part of why sixty-seven million eligible households produced about 1.6 million returns.",
            sourceLessonSlug: "the-volunteer-programs",
          },
          {
            prompt: "What was Direct File's cost to the user, as the report describes it?",
            options: ["No direct cost", "A flat fee lower than any commercial alternative", "A fee waived only for taxpayers below an income limit", "A cost shared between the taxpayer and the participating state"],
            correctIndex: 0,
            explanation: "Eligible taxpayers filed a federal individual return online directly with the IRS at no direct cost.",
            sourceLessonSlug: "direct-file-and-what-happened",
          },
          {
            prompt: "What does the course say a memorandum of understanding is, relative to the Code?",
            options: ["A contract rather than a statute", "A regulation with the force of law once published", "An interpretive document binding only on the agency", "A schedule appended to the Internal Revenue Code by reference"],
            correctIndex: 0,
            explanation: "Which is why nobody amends a statute when the Free File income limit moves.",
            sourceLessonSlug: "free-file-is-a-contract",
          },
          {
            prompt: "What does the lesson say is wrong with how most people understand free filing?",
            options: ["They think it is a program with a rule", "They think it is limited to taxpayers claiming credits", "They think it covers state returns in every jurisdiction", "They think it requires an appointment at a volunteer site"],
            correctIndex: 0,
            explanation: "The main route is a contract between the government and a trade body, and its eligibility number is a percentile.",
            sourceLessonSlug: "free-file-is-a-contract",
          },
          {
            prompt: "What was the stated objective of the Free File program?",
            options: ["Expanding electronic filing to underserved populations", "Reducing the number of returns requiring manual processing", "Replacing the volunteer preparation sites with software", "Collecting data on how taxpayers prepare their own returns"],
            correctIndex: 0,
            explanation: "At no cost to individual taxpayers or to the Treasury, according to the report's description.",
            sourceLessonSlug: "free-file-is-a-contract",
          },
          {
            prompt: "Why does Treasury say taxpayers sometimes perceive Free File as not truly free?",
            options: ["State returns may carry a charge", "Because providers require payment before transmitting a return", "Because the income limit excludes most of the filing population", "Because the software collects a fee from any refund produced"],
            correctIndex: 0,
            explanation: "State coverage is required only in participating states, and where offered may be narrower than the federal terms.",
            sourceLessonSlug: "free-file-is-a-contract",
          },
          {
            prompt: "How many TCE sites did Treasury record?",
            options: ["More than 3,900", "More than 5,600, which is the VITA site count instead", "Nearly 3,100, which is the partner organization count", "More than 76,000, which is the volunteer count"],
            correctIndex: 0,
            explanation: "Typically in senior centres, libraries and other community locations.",
            sourceLessonSlug: "the-volunteer-programs",
          },
          {
            prompt: "How many returns were filed through TCE for tax year 2024, per Treasury?",
            options: ["1.2 million", "1.6 million, which is the VITA figure for the same year", "22 million, which is the TCE eligibility estimate", "296,531, which is the Direct File figure for that year"],
            correctIndex: 0,
            explanation: "Against an estimated 22 million eligible tax units, as of 1 August 2025.",
            sourceLessonSlug: "the-volunteer-programs",
          },
          {
            prompt: "What does the course say a lesson naming today's free routes would be within a year?",
            options: ["Wrong", "Still accurate, since the routes rarely change", "Incomplete but not misleading to a reader", "Unciteable, because no primary source exists"],
            correctIndex: 0,
            explanation: "A lesson naming where the routes are announced survives the change; a list of them does not.",
            sourceLessonSlug: "direct-file-and-what-happened",
          },
          {
            prompt: "What tax-exempt classification does the lesson give Free File, Inc.?",
            options: ["Section 501(c)(4)", "Section 501(c)(3), the classification for public charities", "Section 527, the classification for political organizations", "Section 501(c)(6), the classification for trade associations"],
            correctIndex: 0,
            explanation: "Treasury describes it as a tax-exempt section 501(c)(4) social welfare organization.",
            sourceLessonSlug: "free-file-is-a-contract",
          },
          {
            prompt: "What does the lesson tell a reader to write down alongside a free-filing income figure?",
            options: ["The date it was read", "The name of the provider that published it", "The section of the Code that authorises the program", "The number of taxpayers eligible under that figure"],
            correctIndex: 0,
            explanation: "Neither the tax year 2024 figure nor the current page figure answers a question about a season that neither covers.",
            sourceLessonSlug: "free-file-is-a-contract",
          },
          {
            prompt: "How many Free File products does the lesson say there are?",
            options: ["Two", "One, with an income limit set annually by contract", "Three, counting the state filing option separately", "As many as there are participating software providers"],
            correctIndex: 0,
            explanation: "Guided software with an income limit, and fillable forms with none.",
            sourceLessonSlug: "free-file-is-a-contract",
          },
          {
            prompt: "What guidance does Free File Fillable Forms supply?",
            options: ["Form instructions", "A full interview covering every credit the filer may claim", "A review by a trained volunteer before the return is filed", "A calculation of every line the return requires"],
            correctIndex: 0,
            explanation: "With limited calculations, which is why the lesson calls it a typewriter rather than an adviser.",
            sourceLessonSlug: "free-file-is-a-contract",
          },
          {
            prompt: "Who is described as staffing the volunteer programs?",
            options: ["Retirees, students and community members", "Enrolled agents licensed to practise before the Service", "Employees of the Internal Revenue Service on rotation", "Staff of the commercial software companies in the partnership"],
            correctIndex: 0,
            explanation: "All of them IRS-trained and certified, with a review step before a return is finalised.",
            sourceLessonSlug: "the-volunteer-programs",
          },
          {
            prompt: "Where does Treasury say the volunteer sites are typically located?",
            options: ["Community centres, libraries, schools and churches", "Offices of the Internal Revenue Service in each judicial district", "Branches of the banks that participate in the refund program", "State revenue department offices in each county seat"],
            correctIndex: 0,
            explanation: "With TCE typically in senior centres and other community locations.",
            sourceLessonSlug: "the-volunteer-programs",
          },
          {
            prompt: "What does section 7526A(a) direct the Secretary to establish?",
            options: ["A matching grant program", "A network of federally staffed preparation offices", "A public-private partnership with software providers", "A clinic representing taxpayers in controversies"],
            correctIndex: 0,
            explanation: "The Community Volunteer Income Tax Assistance Matching Grant Program, funded dollar for dollar.",
            sourceLessonSlug: "the-volunteer-programs",
          },
          {
            prompt: "Which income ceiling does the section 7526 clinic definition use?",
            options: ["250 percent of the poverty level", "The Free File income limit for the same taxable year", "The VITA threshold published by the Service each year", "The filing threshold in section 6012 for the taxpayer's status"],
            correctIndex: 0,
            explanation: "With controversies generally not exceeding the amount specified in section 7463.",
            sourceLessonSlug: "the-volunteer-programs",
          },
          {
            prompt: "What does the lesson say Section 6 of the course is about?",
            options: ["What happens after something goes wrong", "How to choose between the free preparation routes", "The credits a household may claim on a return", "The withholding certificate and the amounts it sets"],
            correctIndex: 0,
            explanation: "Which is why the clinics, rather than the preparation sites, are the free route into it.",
            sourceLessonSlug: "the-volunteer-programs",
          },
          {
            prompt: "What did Treasury's report call its own purpose on its cover page?",
            options: ["Fulfilling a statutory requirement", "Recommending the permanent expansion of Direct File", "Announcing the terms of a new memorandum of understanding", "Summarising the results of the taxpayer survey it describes"],
            correctIndex: 0,
            explanation: "Section 70607 of Public Law No. 119-21 directs Treasury to evaluate alternatives to Direct File, and the report says it fulfils that.",
            sourceLessonSlug: "direct-file-and-what-happened",
          },
          {
            prompt: "From what date were the funds for the taxpayer survey available?",
            options: ["1 October 2025", "2 October 2025, the date the report itself carries", "4 July 2025, the date the requiring statute was enacted", "26 January 2026, the opening of the following season"],
            correctIndex: 0,
            explanation: "The report describes a formal survey using funds appropriated by Congress and available beginning on that date.",
            sourceLessonSlug: "direct-file-and-what-happened",
          },
          {
            prompt: "How many steps does Treasury's proposed approach contain?",
            options: ["Four", "Two, being suspension and replacement by Free File", "Six, matching the number of recommendations GAO made", "One, being the immediate suspension of the program"],
            correctIndex: 0,
            explanation: "Enhance awareness of Free File, suspend Direct File, survey and engage partners, and define a free return before a supplemental report.",
            sourceLessonSlug: "direct-file-and-what-happened",
          },
          {
            prompt: "What kind of source does the lesson call a report to Congress?",
            options: ["A primary source for what an agency said and when", "A secondary summary of positions taken elsewhere", "An interpretive rule binding on taxpayers and the agency alike", "A legislative document carrying the force of a statute"],
            correctIndex: 0,
            explanation: "Which is why the lesson quotes it with its date rather than paraphrasing its conclusions as current facts.",
            sourceLessonSlug: "direct-file-and-what-happened",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 6 — Examination, and who gets examined
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "an-examination-is-a-procedure",
      title: "16 · An examination is a procedure with a clock and a list of rights",
      section: "Section 6 · Examination, and who gets examined",
      body: `The word "audit" does most of its work as a threat. In the Code it is a procedure, with an authority behind it, deadlines attached to it, and a list of rights the Commissioner is directed to have employees act in accordance with.

## The authority

**26 U.S.C. § 7602(a)** opens: "For the purpose of ascertaining the correctness of any return, making a return where none has been made, determining the liability of any person for any internal revenue tax ... or collecting any such liability, the Secretary is authorized" to do several things, the first of which is "To examine any books, papers, records, or other data which may be relevant or material to such inquiry" (26 U.S.C. § 7602, n.d.).

**Notice the purposes.** Ascertaining correctness is one of them, and it does not presume a wrong answer. Making a return where none has been made is another, which connects straight back to what an unfiled year leaves open.

## Two shapes, and the difference is who arrives

**A correspondence examination is a letter.** It asks for documents supporting particular items and it is worked by mail. **A field examination involves a person.** The Government Accountability Office reports that examinations of returns claiming the earned income credit "are primarily pre-refund audits and are conducted through correspondence, requiring less time," which IRS officials gave as one reason those examinations continued at scale while others contracted (U.S. Government Accountability Office, 2022).

**Pre-refund matters.** It means the money has not been paid yet, and Section 4 of this course has already explained what a delayed refund does to a household budget.

## The clock

If an examination produces a proposed change, **26 U.S.C. § 6212(a)** authorises the Secretary, on determining a deficiency, to send notice of it "to the taxpayer by certified mail or registered mail" (26 U.S.C. § 6212, n.d.).

Then **26 U.S.C. § 6213(a)**: "Within 90 days, or 150 days if the notice is addressed to a person outside the United States, after the notice of deficiency authorized in section 6212 is mailed (not counting Saturday, Sunday, or a legal holiday in the District of Columbia as the last day), the taxpayer may file a petition with the Tax Court for a redetermination of the deficiency" (26 U.S.C. § 6213, n.d.).

**Ninety days from mailing, not from reading.** That is why the letter is sent by certified or registered mail, and why an address the Service does not have is a genuine problem rather than an inconvenience.

## The rights, enumerated in the statute

**26 U.S.C. § 7803(a)(3)** directs the Commissioner to ensure that employees are familiar with and act in accord with taxpayer rights, and then lists them: the right to be informed; to quality service; to pay no more than the correct amount of tax; to challenge the position of the Internal Revenue Service and be heard; to appeal a decision of the Internal Revenue Service in an independent forum; to finality; to privacy; to confidentiality; to retain representation; and to a fair and just tax system (26 U.S.C. § 7803, n.d.).

**Ten of them, in the United States Code**, which is a different thing from a customer charter. The ninth one, the right to retain representation, is the hinge that connects this section back to the low-income taxpayer clinics in Section 5.

## What the published numbers say about who is examined

The GAO's May 2022 report analysed at least ten years of IRS audit data for individual returns and ten years of summary data on amounts collected, and interviewed officials across the agency's operating and research divisions. Its findings for tax years 2010 to 2019:

- **Audit rates fell for every income level.** On average the rate fell "from 0.9 percent to 0.25 percent," which IRS officials attributed primarily to reduced staffing following decreased funding.
- **They fell most at the top.** "Audit rates decreased the most for taxpayers with incomes of 200,000 dollars and above," because those examinations are more complex and require staff review.
- **And the exception is the one to hold onto.** "However, the audit rate for lower-income taxpayers claiming the Earned Income Tax Credit (EITC) was higher than average" (U.S. Government Accountability Office, 2022).

**Those are figures for stated tax years, from a stated dataset, in a dated report.** They are not a claim about the current filing season, and this course does not make one.

:::reveal What is the first thing 26 U.S.C. 7602(a) authorises the Secretary to do? ||| Examine any books, papers, records or other data which may be relevant or material to the inquiry.

:::reveal From what event do the 90 days in 26 U.S.C. 6213(a) run? ||| From the mailing of the notice of deficiency, not from the taxpayer reading it.

:::reveal How did average individual audit rates change from tax year 2010 to tax year 2019? ||| They fell from 0.9 percent to 0.25 percent, and fell most for incomes of 200,000 dollars and above.

## Vocabulary
- **Examination**: the statutory inquiry authorised by 26 U.S.C. 7602, one of whose stated purposes is ascertaining the correctness of a return rather than presuming it wrong.
- **Correspondence examination**: an examination worked by mail on particular items, which is how earned income credit claims are primarily handled.
- **Notice of deficiency**: the certified or registered letter authorised by 6212(a), which starts the 6213(a) petition period.
- **Pre-refund audit**: one conducted before the refund is paid, so the money is held rather than recovered afterwards.

## Sources
26 U.S.C. § 6212. (n.d.). *Notice of deficiency*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/6212

26 U.S.C. § 6213. (n.d.). *Restrictions applicable to deficiencies; petition to Tax Court*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/6213

26 U.S.C. § 7602. (n.d.). *Examination of books and witnesses*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/7602

26 U.S.C. § 7803. (n.d.). *Commissioner of Internal Revenue; other officials*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/7803

U.S. Government Accountability Office. (2022). *Tax compliance: Trends of IRS audit rates and results for individual taxpayers by income* (GAO-22-104960). https://www.gao.gov/products/gao-22-104960`,
    },
    {
      slug: "the-disparity-and-the-method",
      title: "17 · A disparity nobody could see, and the method that made it visible",
      section: "Section 6 · Examination, and who gets examined",
      body: `Start with the problem that makes this lesson interesting: **the Internal Revenue Service does not collect taxpayers' race.**

The Government Accountability Office states the position and the consequence in one sentence: "Even though IRS does not collect information on the race and ethnicity of taxpayers, some audit selection criteria and methods could have different implications for taxpayers depending on their race or ethnicity" (U.S. Government Accountability Office, 2024).

**So how would anyone measure a racial disparity in a system that is formally race-blind?** That question, and not the headline, is what this lesson teaches.

## The study, and what it actually did

Elzayn and colleagues published *Measuring and Mitigating Racial Disparities in Tax Audits* in the *Quarterly Journal of Economics* in 2025, working with anonymised administrative tax data alongside Treasury economists. The abstract of the working paper states the problem and the answer together: "Because neither we nor the IRS observe taxpayer race, we propose and employ a novel partial identification strategy to estimate these differences. Despite race-blind audit selection, we find that Black taxpayers are audited at 2.9 to 4.7 times the rate of non-Black taxpayers" (Elzayn et al., 2023, abstract).

**Three things in that sentence deserve more attention than the multiple.**

**First, race was imputed rather than observed.** The authors used Bayesian Improved First Name Surname Geocoding, which combines first name, surname and geography to produce a probability, drawing on the method of Imai and Khanna and adding first names because later work found them more informative than surnames for identifying Black individuals (Elzayn et al., 2023, section 3.2).

**Second, the imputation was calibrated against real self-reported data.** The authors matched taxpayers to publicly available North Carolina voter registration records, which carry self-reported race because the state required registrants to report it until 1993. The match was by name and address, produced a 47 percent unique match rate, and yielded about 2.5 million matched records (Elzayn et al., 2023, section 4).

**Third, the answer is a range and not a point.** "2.9 to 4.7 times" is what a partial identification strategy produces when the protected characteristic is unobserved. A course that reported a single multiple would be reporting a headline rather than a finding.

## Where the disparity comes from

The abstract is specific: "The main source of the disparity is differing audit rates by race among taxpayers claiming the Earned Income Tax Credit (EITC)" (Elzayn et al., 2023, abstract). GAO puts a figure on it, attributing it to that research: "audits of EITC returns accounted for 78 percent of the overall estimated racial disparity in audit rates" (U.S. Government Accountability Office, 2024).

**And the study identifies which design choices drive it.** Using counterfactual selection models, the authors found that "maximizing the detection of underreported taxes would not lead to Black taxpayers being audited at higher rates," while three choices tend to increase that rate: "(1) designing audit selection algorithms to minimize the 'no-change rate'; (2) targeting erroneously claimed refundable credits rather than total under-reporting; and (3) limiting the share of more complex EITC returns that can be selected for audit" (Elzayn et al., 2023, abstract).

## The no-change rate, and why a metric can do this

GAO explains the first of those three in operational terms, and it is the clearest mechanism in the whole section.

The agency seeks a low no-change rate because it indicates it is auditing non-compliant taxpayers. But the calculation "includes default audits, audits closed as a 'change' because taxpayers did not respond or provided insufficient responses to IRS's notices." And GAO reports: "IRS officials said their recent research found that Black taxpayers are more likely not to respond to IRS correspondence than taxpayers of other races." Default audits may also be more common among lower-income and EITC taxpayers because of difficulties in communicating with the agency, such as being transitory or not having bank accounts. Since past results inform current planning, the agency "could lead to W and I disproportionately selecting the types of returns that have historically resulted in filers' nonresponse rather than in confirmed noncompliance" (U.S. Government Accountability Office, 2024).

**Read that slowly.** A non-response is counted as a success by the metric. Selecting on the metric therefore selects for non-response. Nothing in that chain mentions race, and the outcome is measurably raced.

GAO also found that some risk scores in the automated selection system "vary by sex, which could skew selection, and have not been updated since 2001." It made six recommendations, and reports that the IRS agreed to all of them (U.S. Government Accountability Office, 2024).

## The sentence to carry away

The study's own closing claim is the general one: "Our results highlight how seemingly technocratic choices about algorithmic design can embed important policy values and trade-offs" (Elzayn et al., 2023, abstract).

**This catalog has taught that shape before, from the private side.** MONEY-01 is about a credit decision made by a formally neutral model on a record you did not write, where the law's answer is to require a statement of specific reasons. Here the decider is public, the criteria are formally neutral, and the disparity was produced by choosing a metric. **The lesson is the same in both: neutrality of criteria is not neutrality of outcome, and the way you find out is to read what the system is optimising for.**

:::reveal Why could the IRS's own records not answer the question this study asked? ||| Because the Service does not collect taxpayers' race, so the characteristic was unobserved.

:::reveal What was the imputed race calibrated against, and how well did it match? ||| North Carolina voter registration records carrying self-reported race, matched by name and address at a 47 percent unique match rate, about 2.5 million records.

:::reveal Why is the answer reported as a range rather than a single multiple? ||| Because a partial identification strategy on an unobserved characteristic produces bounds, so 2.9 to 4.7 times is the finding.

## Vocabulary
- **Partial identification**: an estimation strategy producing a range rather than a point estimate, used here because taxpayer race is not observed.
- **BIFSG**: Bayesian Improved First Name Surname Geocoding, which combines first name, surname and geography to estimate the probability that a person belongs to a racial group.
- **No-change rate**: the share of audited returns yielding no additional revenue, used as a performance measure, whose calculation counts an unanswered notice as a change.
- **Default audit**: an examination closed as a change because the taxpayer did not respond or responded insufficiently.

## Sources
Elzayn, H., Smith, E., Hertz, T., Ramesh, A., Fisher, R., Ho, D. E., & Goldin, J. (2023). *Measuring and mitigating racial disparities in tax audits*. Stanford Institute for Human-Centered Artificial Intelligence. https://dho.stanford.edu/wp-content/uploads/IRS_Disparities.pdf

Elzayn, H., Smith, E., Hertz, T., Guage, C., Ramesh, A., Fisher, R., Ho, D. E., & Goldin, J. (2025). Measuring and mitigating racial disparities in tax audits. *The Quarterly Journal of Economics*, *140*(1), 113-163. https://academic.oup.com/qje/article-abstract/140/1/113/7778259

U.S. Government Accountability Office. (2024). *Tax enforcement: IRS audit selection processes for returns claiming refundable credits could better address equity* (GAO-24-106126). https://www.gao.gov/products/gao-24-106126`,
    },
    {
      slug: "capstone-read-your-own-paperwork",
      title: "18 · Capstone: read your own paperwork, and look one thing up properly",
      section: "Section 6 · Examination, and who gets examined",
      body: `Everything in this course was chosen because it can be checked against a document. This last lesson asks you to run the whole thing once, on documents that are yours.

**Before you start, the promise this course made in lesson 1 and repeated in lesson 8, said once more because you are about to touch your own paperwork.** This is not tax advice and none of what follows is a recommendation. It does not tell you what to write on a certificate, which status to claim, whether to claim a credit, or whether to file. Every step below is an act of reading, and where a step produces a question about your own facts, the answer is a person: a volunteer preparation site, a low-income taxpayer clinic, or a professional you choose. **This course's job is to make you able to ask the question precisely.**

## Five things to do

**1. Read your own withholding certificate.** Find the one your employer holds, or the last one you submitted. Which steps did you complete, and which did you skip? What filing status does it show? Is it the status the statute would give you on the last day of this year?

**2. Classify every line on one pay statement.** Which subtraction is chapter 24 withholding, credited back to you under section 31(a)(1)? Which is chapter 21 FICA, which is not? Which lines are not taxes at all? Then do the arithmetic by hand: gross, minus each deduction, equals net. If it does not reconcile, you have found a question worth asking.

**3. Determine your filing status from the statute rather than from software.** Read 26 U.S.C. § 7703(a), § 7703(b) and § 2(b)(1) and ask which one describes your facts as of the close of the taxable year. If you would file jointly, read § 6013(d)(3) once more and be sure you know what joint and several means.

**4. Look up exactly one current figure, properly.** Pick the basic standard deduction for your filing status for the current tax year. Find it in the current revision of IRS Publication 17 with the revision year on the cover, or in the annual revenue procedure, cited by number. **Write the tax year and the date you looked it up beside the figure.** That single habit is the most durable thing in this course.

**5. Find today's free routes, with dates.** Open the IRS's own filing pages and record which free preparation routes are named right now and what the income limits are. Write the date you read each page. Compare what you find with what Section 5 records from 29 August 2026, and notice whether anything has moved.

## The deliverable

**One page, three headings**, the same discipline this catalog applies to its own sourcing:

- **What the documents say.** The status on the certificate, the classification of each pay line, the statute that fits your facts, the figure with its year.
- **Where they disagree.** A certificate that assumes one status while the statute suggests another. A pay statement that does not reconcile. A free-filing limit that has changed since this course recorded it.
- **What I could not verify.** The honest column, and the useful one, because it becomes the list of questions to take to a preparation site or a clinic.

## What you have at the end

Not a completed return, and not advice. **You have the documents, the disagreements, and the knowledge of exactly which statute answers each remaining question.** You know that the money was taken under chapter 24 and credited back under section 31, that the return you sign is verified under penalties of perjury by section 6065, that filing status is fixed on one day by section 7703, that a credit pays out only if section 6401(b)(1) reaches it, that section 6402(m) holds two credits and nobody else, and that section 6402(c) through (f) can shrink what arrives.

**And you know the habit that outlives every figure in this course:** find the primary document, read the sentence, and write down the date.

:::reveal What is the deliverable of this capstone? ||| A one-page note under three headings: what the documents say, where they disagree, and what could not be verified.

:::reveal Which heading of the note does the lesson call the useful one, and why? ||| What I could not verify, because it becomes the list of questions to take to a preparation site or a clinic.

:::reveal What does this lesson say you have at the end, instead of a completed return? ||| The documents, the disagreements, and the knowledge of which statute answers each remaining question.

## Vocabulary
- **Reconcile**: to check that a computed total matches the figures it was built from, which is what step 2 asks of a pay statement.
- **Primary document**: the statute, regulation, publication or agency page a claim can be read out of, as against a summary of one.
- **Dating a figure**: recording the tax year a figure belongs to and the day it was read, which is what makes it checkable later.
- **The honest column**: the record of what could not be verified, which the catalog treats as a working list rather than as a failure.

## Sources
26 U.S.C. § 2. (n.d.). *Definitions and special rules*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/2

26 U.S.C. § 6013. (n.d.). *Joint returns of income tax by husband and wife*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/6013

26 U.S.C. § 7703. (n.d.). *Determination of marital status*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/7703

Internal Revenue Service. (2026g). *Free tax return preparation for qualifying taxpayers*. https://www.irs.gov/individuals/free-tax-return-preparation-for-qualifying-taxpayers`,
    },
    {
      slug: "quiz-examination",
      title: "Section 6 review · Examination, the disparity, and your own paperwork",
      section: "Section 6 · Examination, and who gets examined",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What is the first thing 26 U.S.C. 7602(a) authorises the Secretary to do?",
            options: ["Examine relevant books, papers and records", "Assess a deficiency without first issuing any written notice", "Seize property to satisfy an unpaid liability under the Code", "Refer a taxpayer's file to the Department of Justice for prosecution"],
            correctIndex: 0,
            explanation: "Any data which may be relevant or material to the inquiry, under the purposes the subsection's opening lists.",
            sourceLessonSlug: "an-examination-is-a-procedure",
          },
          {
            prompt: "Which purpose does 26 U.S.C. 7602(a) name FIRST in its opening?",
            options: ["Ascertaining the correctness of any return", "Collecting a liability that has already been assessed", "Determining whether a criminal referral should be made", "Establishing the liability of a transferee or fiduciary"],
            correctIndex: 0,
            explanation: "It does not presume a wrong answer, which is a different starting point from the popular meaning of the word audit.",
            sourceLessonSlug: "an-examination-is-a-procedure",
          },
          {
            prompt: "Which section 7602(a) purpose connects to an unfiled year?",
            options: ["Making a return where none has been made", "Ascertaining the correctness of a return already filed", "Collecting a liability from a transferee of the taxpayer", "Determining the liability of a fiduciary in equity"],
            correctIndex: 0,
            explanation: "Read beside 6501(c)(3), which allows assessment at any time where no return was filed.",
            sourceLessonSlug: "an-examination-is-a-procedure",
          },
          {
            prompt: "What is a correspondence examination?",
            options: ["One worked by mail on particular items", "One conducted at the taxpayer's home or place of business", "One opened only where a criminal referral has been declined", "One handled entirely by an automated system with no human review"],
            correctIndex: 0,
            explanation: "A field examination involves a person, and the two shapes carry very different resource costs.",
            sourceLessonSlug: "an-examination-is-a-procedure",
          },
          {
            prompt: "How does GAO describe examinations of returns claiming the earned income credit?",
            options: ["Primarily pre-refund and by correspondence", "Primarily field examinations conducted at the taxpayer's home", "Conducted only after the refund has already been paid out", "Opened at random from among all returns claiming any credit"],
            correctIndex: 0,
            explanation: "Requiring less time, which officials gave as a reason those examinations continued at scale.",
            sourceLessonSlug: "an-examination-is-a-procedure",
          },
          {
            prompt: "Why does pre-refund matter?",
            options: ["The money has not been paid yet", "The taxpayer may amend the return before it is examined", "The limitation period has not yet started to run", "The preparer rather than the filer answers the inquiry"],
            correctIndex: 0,
            explanation: "It is held rather than recovered afterwards, which is the household effect Section 4 already worked through.",
            sourceLessonSlug: "an-examination-is-a-procedure",
          },
          {
            prompt: "How must a notice of deficiency be sent under 26 U.S.C. 6212(a)?",
            options: ["By certified or registered mail", "By any method giving the taxpayer actual notice", "By personal service on the taxpayer or an agent", "By electronic delivery to the address on the last return"],
            correctIndex: 0,
            explanation: "Which is why an address the Service does not have is a genuine problem rather than an inconvenience.",
            sourceLessonSlug: "an-examination-is-a-procedure",
          },
          {
            prompt: "How long does 26 U.S.C. 6213(a) give for a Tax Court petition in the ordinary case?",
            options: ["90 days", "30 days from receipt of the notice of deficiency", "12 months, matching the ordinary appeal period", "3 years, matching the assessment period in section 6501(a)"],
            correctIndex: 0,
            explanation: "Or 150 days where the notice is addressed to a person outside the United States.",
            sourceLessonSlug: "an-examination-is-a-procedure",
          },
          {
            prompt: "From what event does the 6213(a) period run?",
            options: ["The mailing of the notice", "The taxpayer's receipt of the notice at their address", "The date the examination was formally opened by the Service", "The close of the taxable year the deficiency relates to"],
            correctIndex: 0,
            explanation: "Not from reading it, which is what makes the certified or registered mail requirement load-bearing.",
            sourceLessonSlug: "an-examination-is-a-procedure",
          },
          {
            prompt: "Which days does 6213(a) exclude from being the last day of the period?",
            options: ["Saturday, Sunday and a District of Columbia legal holiday", "Any day on which the Tax Court is not sitting anywhere", "Any federal holiday observed in the taxpayer's own state", "Any day within the annual filing season for individual returns"],
            correctIndex: 0,
            explanation: "The parenthetical is part of the statutory sentence rather than an administrative practice.",
            sourceLessonSlug: "an-examination-is-a-procedure",
          },
          {
            prompt: "How many taxpayer rights does 26 U.S.C. 7803(a)(3) enumerate?",
            options: ["Ten", "Five, grouped under a general fairness principle", "Twelve, matching the number in the agency's own charter", "None; the subsection refers to rights elsewhere in the Code"],
            correctIndex: 0,
            explanation: "The Commissioner is directed to ensure employees are familiar with and act in accord with them.",
            sourceLessonSlug: "an-examination-is-a-procedure",
          },
          {
            prompt: "Which enumerated right connects Section 6 back to the low-income taxpayer clinics?",
            options: ["The right to retain representation", "The right to pay no more than the correct amount of tax", "The right to appeal a decision in an independent forum", "The right to a fair and just tax system"],
            correctIndex: 0,
            explanation: "A clinic under 26 U.S.C. 7526 is a free route into exercising it.",
            sourceLessonSlug: "an-examination-is-a-procedure",
          },
          {
            prompt: "Which of these is one of the enumerated rights in 7803(a)(3)?",
            options: ["The right to finality", "The right to a jury trial in any tax controversy", "The right to a fixed deadline for any refund payment", "The right to be represented at the government's expense"],
            correctIndex: 0,
            explanation: "It sits alongside the rights to privacy, to confidentiality and to retain representation.",
            sourceLessonSlug: "an-examination-is-a-procedure",
          },
          {
            prompt: "What does the lesson say distinguishes the enumerated rights from a customer charter?",
            options: ["They are in the United States Code", "They are enforced by an independent ombudsman", "They apply only during a correspondence examination", "They were adopted by the agency rather than by Congress"],
            correctIndex: 0,
            explanation: "Section 7803(a)(3) directs the Commissioner to ensure employees act in accord with them.",
            sourceLessonSlug: "an-examination-is-a-procedure",
          },
          {
            prompt: "What data did GAO analyse for its May 2022 report?",
            options: ["At least ten years of IRS audit data", "A survey of taxpayers who had been examined that year", "The full text of every notice of deficiency issued in 2019", "Administrative records supplied by commercial preparers"],
            correctIndex: 0,
            explanation: "Plus ten years of summary data on amounts collected, with interviews across the agency's operating and research divisions.",
            sourceLessonSlug: "an-examination-is-a-procedure",
          },
          {
            prompt: "How did the average individual audit rate change from tax year 2010 to 2019?",
            options: ["From 0.9 percent to 0.25 percent", "From 2.5 percent to 0.9 percent across all income levels", "From 0.25 percent to 0.9 percent as enforcement expanded", "It was unchanged, though its composition shifted by income"],
            correctIndex: 0,
            explanation: "IRS officials attributed the decline primarily to reduced staffing following decreased funding.",
            sourceLessonSlug: "an-examination-is-a-procedure",
          },
          {
            prompt: "For which taxpayers did audit rates decrease the most over that period?",
            options: ["Those with incomes of 200,000 dollars and above", "Those claiming the earned income credit on a filed return", "Those filing as head of household with a qualifying child", "Those below the section 6012 filing threshold for their status"],
            correctIndex: 0,
            explanation: "Those examinations are generally more complex and require staff review, which staffing cuts hit hardest.",
            sourceLessonSlug: "an-examination-is-a-procedure",
          },
          {
            prompt: "Which group's audit rate did GAO report as higher than average?",
            options: ["Lower-income taxpayers claiming the EITC", "Taxpayers with business income above one million dollars", "Taxpayers who filed after the section 6072 deadline", "Taxpayers who prepared their own returns without software"],
            correctIndex: 0,
            explanation: "Officials explained that those examinations require relatively few resources and prevent ineligible taxpayers from receiving the credit.",
            sourceLessonSlug: "an-examination-is-a-procedure",
          },
          {
            prompt: "What does the course say about the GAO audit-rate figures?",
            options: ["They describe stated tax years, not today", "They are updated continuously and always describe the present", "They are estimates the agency disputes in its own publications", "They apply only to returns examined by correspondence"],
            correctIndex: 0,
            explanation: "They come from a stated dataset in a dated report, and the course makes no claim about the current season.",
            sourceLessonSlug: "an-examination-is-a-procedure",
          },
          {
            prompt: "What does the IRS not collect about taxpayers, according to GAO?",
            options: ["Race and ethnicity", "Filing status, which the return supplies instead", "Occupation, which is asked for only on business returns", "Bank account details, which are optional on every return"],
            correctIndex: 0,
            explanation: "Which is what makes measuring a racial disparity in audit selection a methodological problem in the first place.",
            sourceLessonSlug: "the-disparity-and-the-method",
          },
          {
            prompt: "What did GAO say could still differ by race despite that absence?",
            options: ["The implications of audit selection criteria", "The statutory rights available during an examination", "The rate at which the agency issues notices of deficiency", "The period within which a taxpayer may petition the Tax Court"],
            correctIndex: 0,
            explanation: "Some audit selection criteria and methods could have different implications for taxpayers depending on race or ethnicity.",
            sourceLessonSlug: "the-disparity-and-the-method",
          },
          {
            prompt: "Where was the study on racial disparities in tax audits published?",
            options: ["The Quarterly Journal of Economics", "A report to Congress issued by the Treasury Department", "A working paper series with no subsequent peer review", "A Government Accountability Office report of its own"],
            correctIndex: 0,
            explanation: "In volume 140, issue 1, pages 113 to 163, in 2025, following a 2023 working paper.",
            sourceLessonSlug: "the-disparity-and-the-method",
          },
          {
            prompt: "What estimation strategy did the study use?",
            options: ["Partial identification", "A randomised controlled trial among examined taxpayers", "A regression on self-reported race collected on the return", "A survey of taxpayers who had been selected for examination"],
            correctIndex: 0,
            explanation: "Because neither the researchers nor the IRS observe taxpayer race, the method produces bounds rather than a point.",
            sourceLessonSlug: "the-disparity-and-the-method",
          },
          {
            prompt: "What did the study find about relative audit rates?",
            options: ["Black taxpayers audited at 2.9 to 4.7 times the rate", "Black taxpayers audited at exactly three times the rate", "No measurable difference once income was controlled for", "Higher rates for non-Black taxpayers at every income level"],
            correctIndex: 0,
            explanation: "Despite race-blind audit selection, which is the finding's whole point.",
            sourceLessonSlug: "the-disparity-and-the-method",
          },
          {
            prompt: "Which imputation method did the study use for race?",
            options: ["Bayesian Improved First Name Surname Geocoding", "Self-reporting collected through a supplementary questionnaire", "Assignment by the Census tract of the taxpayer's address alone", "Matching against Social Security Administration records"],
            correctIndex: 0,
            explanation: "It combines first name, surname and geography, adding first names because later work found them more informative.",
            sourceLessonSlug: "the-disparity-and-the-method",
          },
          {
            prompt: "Why did the authors add first names to the surname-and-geography method?",
            options: ["Later work found them more informative", "Because surnames are unavailable in administrative tax data", "Because the Census does not publish surname distributions", "Because geography alone produced probabilities above one"],
            correctIndex: 0,
            explanation: "The lesson cites the study's own section describing the choice and the source for it.",
            sourceLessonSlug: "the-disparity-and-the-method",
          },
          {
            prompt: "Against what did the authors calibrate their imputed race estimates?",
            options: ["North Carolina voter registration records", "A national survey conducted by the Treasury Department", "Employer wage reports filed for the same taxable year", "Census block group population counts for each address"],
            correctIndex: 0,
            explanation: "Those records carry self-reported race because the state required registrants to report it until 1993.",
            sourceLessonSlug: "the-disparity-and-the-method",
          },
          {
            prompt: "Why do the North Carolina records carry self-reported race?",
            options: ["The state required it of registrants until 1993", "Federal law requires every state to collect it at registration", "The records were assembled specifically for this research", "The state collects it from driver licensing records instead"],
            correctIndex: 0,
            explanation: "Reporting became optional after that year, which is why the source is a historical artefact rather than a current requirement.",
            sourceLessonSlug: "the-disparity-and-the-method",
          },
          {
            prompt: "What unique match rate did the taxpayer-to-voter record match produce?",
            options: ["47 percent", "About 90 percent, since name and address are nearly unique", "About 12 percent, which the authors described as a limitation", "100 percent, because the match was performed on identifiers"],
            correctIndex: 0,
            explanation: "Yielding about 2.5 million matched records, matched by name and address.",
            sourceLessonSlug: "the-disparity-and-the-method",
          },
          {
            prompt: "About how many matched records did the calibration exercise produce?",
            options: ["About 2.5 million", "About 296,000, matching the Direct File figure", "About 76,000, matching the volunteer figure", "About 140,000, matching the Direct File pilot figure"],
            correctIndex: 0,
            explanation: "Which is what allowed the authors to assess the validity of their estimated race probabilities.",
            sourceLessonSlug: "the-disparity-and-the-method",
          },
          {
            prompt: "Why is the study's answer reported as a range?",
            options: ["Partial identification produces bounds", "Because the authors reported results for two separate years", "Because the audit rate varied across the states in the sample", "Because the IRS published two conflicting sets of figures"],
            correctIndex: 0,
            explanation: "A course reporting a single multiple would be reporting a headline rather than a finding.",
            sourceLessonSlug: "the-disparity-and-the-method",
          },
          {
            prompt: "What did the study identify as the main source of the disparity?",
            options: ["Audit rates among EITC claimants", "Differences in the income levels of the two groups compared", "The share of returns prepared by paid preparers in each group", "The rate at which each group petitions the Tax Court"],
            correctIndex: 0,
            explanation: "Differing audit rates by race among taxpayers claiming the earned income credit.",
            sourceLessonSlug: "the-disparity-and-the-method",
          },
          {
            prompt: "What share of the estimated racial disparity did GAO attribute to EITC audits?",
            options: ["78 percent", "About half, with the remainder spread across other return types", "About 25 percent, which GAO described as a lower bound", "The whole of it, according to the academic study cited"],
            correctIndex: 0,
            explanation: "GAO attributes the figure to the academic study rather than asserting it independently.",
            sourceLessonSlug: "the-disparity-and-the-method",
          },
          {
            prompt: "What did the counterfactual models show about maximising detection of underreported tax?",
            options: ["It would not raise Black taxpayers' audit rate", "It would raise the disparity beyond the measured range", "It would leave the disparity exactly where it currently is", "It could not be modelled because race is unobserved"],
            correctIndex: 0,
            explanation: "Which is why the study points at design choices rather than at an unavoidable trade-off.",
            sourceLessonSlug: "the-disparity-and-the-method",
          },
          {
            prompt: "Which design choice does the study name FIRST as tending to increase the disparity?",
            options: ["Minimising the no-change rate", "Targeting the highest-income returns for examination first", "Auditing every return claiming a refundable credit in full", "Selecting returns at random from the whole filing population"],
            correctIndex: 0,
            explanation: "Followed by targeting erroneously claimed refundable credits, and limiting the share of complex EITC returns selectable.",
            sourceLessonSlug: "the-disparity-and-the-method",
          },
          {
            prompt: "What is the second design choice the study names?",
            options: ["Targeting erroneously claimed refundable credits", "Prioritising returns with the largest dollar refunds claimed", "Excluding returns prepared by volunteers from the selection pool", "Weighting selection toward taxpayers in particular states"],
            correctIndex: 0,
            explanation: "Rather than targeting total under-reporting, which the counterfactual models treated differently.",
            sourceLessonSlug: "the-disparity-and-the-method",
          },
          {
            prompt: "What is the third design choice the study names?",
            options: ["Limiting the share of complex EITC returns selectable", "Capping the total number of examinations opened each year", "Requiring a supervisor to approve each selection manually", "Excluding returns filed after the statutory deadline"],
            correctIndex: 0,
            explanation: "All three are choices about how a selection system is built rather than about who a rule names.",
            sourceLessonSlug: "the-disparity-and-the-method",
          },
          {
            prompt: "Why does the agency seek a low no-change rate?",
            options: ["It indicates it is auditing non-compliant taxpayers", "Because a statute caps the share of examinations closing without change", "Because each no-change examination triggers a refund of costs", "Because the rate is published in the annual revenue procedure"],
            correctIndex: 0,
            explanation: "The problem GAO identifies is in how the rate is calculated rather than in wanting it low.",
            sourceLessonSlug: "the-disparity-and-the-method",
          },
          {
            prompt: "What does GAO say the no-change rate calculation includes?",
            options: ["Default audits", "Examinations still open at the end of the fiscal year", "Examinations of returns claiming no refundable credit", "Only examinations closed with an agreed adjustment"],
            correctIndex: 0,
            explanation: "Audits closed as a change because taxpayers did not respond or provided insufficient responses to notices.",
            sourceLessonSlug: "the-disparity-and-the-method",
          },
          {
            prompt: "What is a default audit?",
            options: ["One closed as a change for want of a response", "One opened automatically without any human selection step", "One that produces no additional tax and is closed as agreed", "One conducted in the field rather than by correspondence"],
            correctIndex: 0,
            explanation: "It counts toward the metric in the same direction as a genuine finding of non-compliance.",
            sourceLessonSlug: "the-disparity-and-the-method",
          },
          {
            prompt: "What did IRS officials say their own research found about correspondence?",
            options: ["Black taxpayers are more likely not to respond", "Correspondence examinations resolve faster than field ones", "Response rates are unrelated to any demographic characteristic", "Most taxpayers respond only after a second notice is sent"],
            correctIndex: 0,
            explanation: "GAO reports the officials' statement as part of its explanation of how the metric can skew selection.",
            sourceLessonSlug: "the-disparity-and-the-method",
          },
          {
            prompt: "What other reasons does GAO give for default audits being common among lower-income filers?",
            options: ["Being transitory or lacking bank accounts", "Filing later in the season than other taxpayers do", "Using volunteer preparers who cannot represent them", "Claiming credits with more complex eligibility rules"],
            correctIndex: 0,
            explanation: "Challenges that make communicating successfully with the agency more difficult.",
            sourceLessonSlug: "the-disparity-and-the-method",
          },
          {
            prompt: "What is the chain GAO describes from past results to future selection?",
            options: ["Past results inform planning, selecting for nonresponse", "Past results are discarded each year and selection restarts", "Past results are reviewed by an independent body before use", "Past results affect only the number of examinations, not the type"],
            correctIndex: 0,
            explanation: "The division could disproportionately select the return types that historically produced nonresponse rather than confirmed noncompliance.",
            sourceLessonSlug: "the-disparity-and-the-method",
          },
          {
            prompt: "What does the lesson say is remarkable about that chain?",
            options: ["Nothing in it mentions race", "It was designed deliberately to produce that outcome", "It applies only to returns claiming refundable credits", "It was corrected before the study was published"],
            correctIndex: 0,
            explanation: "A non-response is counted as a success by the metric, so selecting on the metric selects for non-response.",
            sourceLessonSlug: "the-disparity-and-the-method",
          },
          {
            prompt: "What did GAO find about some risk scores in the automated selection system?",
            options: ["They vary by sex and date from 2001", "They are recalculated before every filing season", "They were removed after the academic study was published", "They are set by statute rather than by the agency"],
            correctIndex: 0,
            explanation: "Which GAO said could skew selection, and which it raised among its recommendations.",
            sourceLessonSlug: "the-disparity-and-the-method",
          },
          {
            prompt: "How many recommendations did GAO make, and what was the response?",
            options: ["Six, and the IRS agreed to all of them", "Two, and the IRS disagreed with both of them", "Ten, and the IRS agreed with half of them", "None, because the report was descriptive only"],
            correctIndex: 0,
            explanation: "Including calculating the no-change rate without default audits and using additional performance measures.",
            sourceLessonSlug: "the-disparity-and-the-method",
          },
          {
            prompt: "What is the study's own general conclusion?",
            options: ["Technocratic design choices can embed policy values", "Race-blind selection guarantees race-neutral outcomes", "Audit selection should be performed manually rather than by system", "Refundable credits should not be examined before payment"],
            correctIndex: 0,
            explanation: "Its abstract says such choices can embed important policy values and trade-offs.",
            sourceLessonSlug: "the-disparity-and-the-method",
          },
          {
            prompt: "Which sibling course does this lesson connect the finding to?",
            options: ["Credit, and the Decisions Made About You", "Banking, and Who Has No Bank, on the deposit account gate", "Cash Flow, and When the Money Actually Moves, on posting order", "Housing, on the appraisal and the recorded covenant"],
            correctIndex: 0,
            explanation: "A formally neutral private model on a record you did not write, answered by a requirement to state specific reasons.",
            sourceLessonSlug: "the-disparity-and-the-method",
          },
          {
            prompt: "What does the lesson say the two cases have in common?",
            options: ["Neutral criteria are not neutral outcomes", "Both are governed by the Fair Credit Reporting Act", "Both give the affected person a right to a written explanation", "Both were corrected once the disparity was measured"],
            correctIndex: 0,
            explanation: "And the way you find out is to read what the system is optimising for.",
            sourceLessonSlug: "the-disparity-and-the-method",
          },
          {
            prompt: "What does this course say about giving tax advice in the capstone?",
            options: ["It gives none, and repeats that before you start", "It gives limited advice once the reader has read the statutes", "It advises on filing status but not on credits", "It advises only where the reader uses a volunteer site"],
            correctIndex: 0,
            explanation: "Every step is an act of reading, and a question about your own facts is answered by a person rather than by the course.",
            sourceLessonSlug: "capstone-read-your-own-paperwork",
          },
          {
            prompt: "Whom does the capstone name as the answer to a question about your own facts?",
            options: ["A volunteer site, a clinic, or a chosen professional", "The Internal Revenue Service's automated telephone system", "A commercial software product with a guarantee attached", "The employer that prepared the pay statement in question"],
            correctIndex: 0,
            explanation: "The course's job is stated as making you able to ask the question precisely.",
            sourceLessonSlug: "capstone-read-your-own-paperwork",
          },
          {
            prompt: "What is the first task of the capstone?",
            options: ["Read your own withholding certificate", "Compute the credits you may be entitled to claim", "Look up the standard deduction for your filing status", "Find the free preparation routes available today"],
            correctIndex: 0,
            explanation: "Which steps were completed, which were skipped, and what filing status it shows.",
            sourceLessonSlug: "capstone-read-your-own-paperwork",
          },
          {
            prompt: "What does the second capstone task ask you to do with a pay statement?",
            options: ["Classify every line and reconcile it by hand", "Compare it against the withholding tables for the year", "Send it to a volunteer site for review before filing", "Recompute the FICA amount using the current wage ceiling"],
            correctIndex: 0,
            explanation: "Which line is chapter 24, which is chapter 21, and which is not a tax at all.",
            sourceLessonSlug: "capstone-read-your-own-paperwork",
          },
          {
            prompt: "What does the capstone say a pay statement that does not reconcile has produced?",
            options: ["A question worth asking", "Evidence that the employer failed to withhold correctly", "Grounds for filing an amended return for the year", "A reason to change the withholding certificate immediately"],
            correctIndex: 0,
            explanation: "The course stops at the question rather than supplying the answer to it.",
            sourceLessonSlug: "capstone-read-your-own-paperwork",
          },
          {
            prompt: "Which three sections does the third capstone task send you to?",
            options: ["7703(a), 7703(b) and 2(b)(1)", "6012, 6072 and 6511, on filing and its deadlines", "6401, 6402 and 32, on credits and refunds", "7602, 6212 and 6213, on examination and the Tax Court"],
            correctIndex: 0,
            explanation: "To determine filing status from the statute rather than from software, as of the close of the taxable year.",
            sourceLessonSlug: "capstone-read-your-own-paperwork",
          },
          {
            prompt: "Which additional section does the capstone ask a would-be joint filer to reread?",
            options: ["6013(d)(3)", "6015, on relief from joint and several liability", "7703(b), on married individuals living apart", "6065, on the declaration under penalties of perjury"],
            correctIndex: 0,
            explanation: "So that the reader knows what joint and several means before signing.",
            sourceLessonSlug: "capstone-read-your-own-paperwork",
          },
          {
            prompt: "How many current figures does the fourth capstone task ask you to look up?",
            options: ["One", "Every figure the course chose not to print", "Three, being the deduction, the credit and the threshold", "None, because the course supplies them in an appendix"],
            correctIndex: 0,
            explanation: "The basic standard deduction for your status, from Publication 17 with its revision year or the revenue procedure by number.",
            sourceLessonSlug: "capstone-read-your-own-paperwork",
          },
          {
            prompt: "What does the capstone call the most durable thing in the course?",
            options: ["Writing the year and date beside a figure", "Knowing the current standard deduction by heart", "Being able to compute gross to net without help", "Understanding the difference between the two chapters"],
            correctIndex: 0,
            explanation: "That single habit outlives every figure a lesson could have printed.",
            sourceLessonSlug: "capstone-read-your-own-paperwork",
          },
          {
            prompt: "What does the fifth capstone task ask you to record about free filing routes?",
            options: ["Which are named and the date you looked", "Which had the best user reviews in the current season", "Which of them a commercial preparer recommends", "Which states participate in a State Free File Program"],
            correctIndex: 0,
            explanation: "Then compare with what Section 5 recorded on 29 August 2026 and notice whether anything has moved.",
            sourceLessonSlug: "capstone-read-your-own-paperwork",
          },
          {
            prompt: "What are the three headings of the capstone's one-page note?",
            options: ["What they say, where they disagree, what I could not verify", "What I owe, what I am owed, and what I intend to claim", "What is accurate, what is inaccurate, and what I will amend", "What each document shows, who prepared it, and when it was signed"],
            correctIndex: 0,
            explanation: "The same discipline this catalog applies to its own sourcing.",
            sourceLessonSlug: "capstone-read-your-own-paperwork",
          },
          {
            prompt: "Which heading does the lesson call the useful one?",
            options: ["What I could not verify", "What the documents say, since it is the longest section", "Where they disagree, since it identifies errors to correct", "None of them; the note itself is the useful product"],
            correctIndex: 0,
            explanation: "It becomes the list of questions to take to a preparation site or a clinic.",
            sourceLessonSlug: "capstone-read-your-own-paperwork",
          },
          {
            prompt: "What does the capstone say you have at the end?",
            options: ["The documents, the disagreements, and the statutes", "A completed return ready for electronic transmission", "A recommendation about your withholding for next year", "A determination of which credits you are entitled to claim"],
            correctIndex: 0,
            explanation: "Not a completed return and not advice, which is the distinction the whole course keeps.",
            sourceLessonSlug: "capstone-read-your-own-paperwork",
          },
          {
            prompt: "Which habit does the capstone say outlives every figure in the course?",
            options: ["Find the document, read the sentence, note the date", "Memorise the section numbers for each rule taught", "Compare two commercial products before choosing one", "Recompute the withholding at the start of each year"],
            correctIndex: 0,
            explanation: "It is the same method the course applied to the Free File limit, the VITA threshold and the credit amounts.",
            sourceLessonSlug: "capstone-read-your-own-paperwork",
          },
          {
            prompt: "Which section does the capstone recall for the perjury declaration?",
            options: ["Section 6065", "Section 7206, which makes a false subscription a felony", "Section 6651, which imposes the failure-to-file penalty", "Section 6501, which limits the period for assessment"],
            correctIndex: 0,
            explanation: "It is what makes the signed return a sworn statement rather than a form.",
            sourceLessonSlug: "capstone-read-your-own-paperwork",
          },
          {
            prompt: "Which section does the capstone recall as fixing filing status on one day?",
            options: ["Section 7703", "Section 2(b)(1), which defines head of household", "Section 6013(a), which permits a joint return", "Section 6072(a), which sets the filing deadline"],
            correctIndex: 0,
            explanation: "Determination is made as of the close of the taxable year, or at the time of a spouse's death.",
            sourceLessonSlug: "capstone-read-your-own-paperwork",
          },
          {
            prompt: "Which section does the capstone recall as deciding whether a credit can pay out?",
            options: ["Section 6401(b)(1)", "Section 32(a)(1), which allows the earned income credit", "Section 26(a), which caps the nonrefundable personal credits", "Section 24(d)(1), which computes the refundable child credit"],
            correctIndex: 0,
            explanation: "It deems the excess of a subpart C credit over the tax to be an overpayment.",
            sourceLessonSlug: "capstone-read-your-own-paperwork",
          },
          {
            prompt: "Which subsections does the capstone recall as able to shrink a refund before it arrives?",
            options: ["6402(c) through (f)", "6402(m) alone, which fixes the earliest payment date", "6501(a) through (e), which limit the period to assess", "6651(a)(1) and (a)(2), which impose the two penalties"],
            correctIndex: 0,
            explanation: "Past-due support, federal agency debts, state income tax obligations and unemployment compensation debts.",
            sourceLessonSlug: "capstone-read-your-own-paperwork",
          },
          {
            prompt: "What does the course mean by a primary document?",
            options: ["The text a claim can be read out of", "Any document a government agency has published", "The most recent version of any summary of the law", "A document held by the taxpayer rather than the agency"],
            correctIndex: 0,
            explanation: "As against a summary of one, which is what the capstone asks a reader to prefer.",
            sourceLessonSlug: "capstone-read-your-own-paperwork",
          },
          {
            prompt: "What does it mean to reconcile, as the capstone uses the word?",
            options: ["Check a total against the figures behind it", "Agree a disputed amount with the Internal Revenue Service", "Amend a return to match the employer's wage report", "Resolve a difference between federal and state figures"],
            correctIndex: 0,
            explanation: "Which is what step two asks of a pay statement, by hand.",
            sourceLessonSlug: "capstone-read-your-own-paperwork",
          },
          {
            prompt: "How does the catalog treat the honest column of unverified items?",
            options: ["As a working list", "As a failure that disqualifies the rest of the note", "As material to be removed before the note is shared", "As a request for the agency to supply the missing answer"],
            correctIndex: 0,
            explanation: "It is the same posture the catalog applies to its own source checks.",
            sourceLessonSlug: "capstone-read-your-own-paperwork",
          },
          {
            prompt: "What did the course say a field examination involves that a correspondence one does not?",
            options: ["A person", "A notice sent by certified or registered mail", "A right to petition the Tax Court within ninety days", "A pre-refund hold on the amount claimed"],
            correctIndex: 0,
            explanation: "Which is part of why the two shapes carry very different resource costs.",
            sourceLessonSlug: "an-examination-is-a-procedure",
          },
          {
            prompt: "What does the lesson say the word audit mostly does in ordinary use?",
            options: ["Works as a threat", "Describes a criminal referral to the Department of Justice", "Refers to any correspondence received from the agency", "Names the assessment that follows a notice of deficiency"],
            correctIndex: 0,
            explanation: "In the Code it is a procedure with an authority, deadlines and an enumerated list of rights.",
            sourceLessonSlug: "an-examination-is-a-procedure",
          },
          {
            prompt: "What year did the study's working paper version carry?",
            options: ["2023", "2025, the year of publication in the journal", "2022, the year of the GAO audit-rate report", "2019, the last tax year in the GAO audit-rate series"],
            correctIndex: 0,
            explanation: "The journal version followed in 2025, and the lesson cites both.",
            sourceLessonSlug: "the-disparity-and-the-method",
          },
          {
            prompt: "Which volume and pages carry the published version of the study?",
            options: ["Volume 140, pages 113 to 163", "Volume 24, pages 1 to 47, in a Treasury working series", "Volume 106, pages 126 to 178, in a GAO report series", "Volume 32, pages 32 to 78, in a law review symposium"],
            correctIndex: 0,
            explanation: "In issue 1 of that volume, published in 2025.",
            sourceLessonSlug: "the-disparity-and-the-method",
          },
          {
            prompt: "What did GAO recommend the agency do with the no-change rate?",
            options: ["Calculate it without default audits", "Publish it separately for each income band each year", "Replace it entirely with a measure of revenue collected", "Stop using it in planning until the study is replicated"],
            correctIndex: 0,
            explanation: "It was among six recommendations, all of which the IRS agreed to.",
            sourceLessonSlug: "the-disparity-and-the-method",
          },
          {
            prompt: "Whose economists did the study work alongside?",
            options: ["Treasury's", "The Government Accountability Office's", "The Congressional Budget Office's", "The Federal Reserve Board's"],
            correctIndex: 0,
            explanation: "The research used anonymised administrative tax data, with steps requiring non-anonymised information conducted by Treasury economists.",
            sourceLessonSlug: "the-disparity-and-the-method",
          },
          {
            prompt: "What does the lesson say the interesting question is, rather than the headline?",
            options: ["How you measure a disparity in a race-blind system", "Whether the disparity is large enough to matter politically", "Which agency is responsible for correcting the disparity", "How many taxpayers were affected in a single filing season"],
            correctIndex: 0,
            explanation: "The method is what makes the finding a finding rather than an assertion.",
            sourceLessonSlug: "the-disparity-and-the-method",
          },
          {
            prompt: "What does 6213(a) restrict while the petition period runs?",
            options: ["Assessment of the deficiency", "The taxpayer's ability to amend the return at issue", "The agency's authority to examine other taxable years", "The accrual of interest on the amount in dispute"],
            correctIndex: 0,
            explanation: "Which is what makes the ninety-day window a real protection rather than a formality.",
            sourceLessonSlug: "an-examination-is-a-procedure",
          },
          {
            prompt: "What did IRS officials give as a reason EITC examinations continued at scale?",
            options: ["They require relatively few resources", "They are required by statute in every filing season", "They are conducted by an outside contractor at no cost", "They produce the largest recommended adjustments per return"],
            correctIndex: 0,
            explanation: "Being primarily pre-refund and conducted through correspondence, they require less time.",
            sourceLessonSlug: "an-examination-is-a-procedure",
          },
          {
            prompt: "What did IRS officials attribute the overall decline in audit rates to?",
            options: ["Reduced staffing after decreased funding", "A deliberate policy of examining fewer returns each year", "Improved voluntary compliance across every income level", "A change in the statutory period for assessing tax"],
            correctIndex: 0,
            explanation: "Which hit the more complex high-income examinations hardest, since those require staff review.",
            sourceLessonSlug: "an-examination-is-a-procedure",
          },
          {
            prompt: "What did the capstone say the course's job is?",
            options: ["To let you ask the question precisely", "To answer the question your documents raise", "To replace the need for a preparation site or clinic", "To supply the current figures for each tax year"],
            correctIndex: 0,
            explanation: "Every step is an act of reading, and a question about your own facts is answered by a person.",
            sourceLessonSlug: "capstone-read-your-own-paperwork",
          },
          {
            prompt: "Which right in 7803(a)(3) speaks to an independent forum?",
            options: ["The right to appeal a decision", "The right to challenge the position of the Service", "The right to pay no more than the correct amount of tax", "The right to a fair and just tax system"],
            correctIndex: 0,
            explanation: "The right to challenge and be heard is listed separately from the right to appeal in an independent forum.",
            sourceLessonSlug: "an-examination-is-a-procedure",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // FINAL ASSESSMENT — 48 pooled, serving 10, passing 80
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "final-assessment",
      title: "Final assessment · Taxes, and the money taken before you see it",
      section: "Final assessment",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 10,
        questions: [
          {
            prompt: "On whom does the federal income tax withholding duty fall?",
            options: ["The employer", "The employee, who must remit the tax each pay period", "The Secretary, through the tables published each year", "The payroll provider named in the employment agreement"],
            correctIndex: 0,
            explanation: "26 U.S.C. 3402(a)(1) says every employer making payment of wages shall deduct and withhold.",
            sourceLessonSlug: "withholding-is-the-default",
          },
          {
            prompt: "Which chapter's withholding is credited back to you at filing?",
            options: ["Chapter 24", "Chapter 21, which imposes the FICA taxes on wages", "Both, since both appear on the same pay statement", "Neither, since withholding is a payment rather than a credit"],
            correctIndex: 0,
            explanation: "Section 31(a)(1) names chapter 24 and nothing else, which is why the FICA line behaves differently.",
            sourceLessonSlug: "withholding-is-the-default",
          },
          {
            prompt: "What is the legal character of a refund under 26 U.S.C. 6402(a)?",
            options: ["A debt owed to the filer", "A discretionary payment the Secretary may withhold", "A credit that must be carried to the following year", "A benefit conditioned on a refundable credit claim"],
            correctIndex: 0,
            explanation: "The statute says the Secretary shall refund any balance to the person who made the overpayment.",
            sourceLessonSlug: "a-refund-is-not-a-gift",
          },
          {
            prompt: "Which regulation names Form W-4 and records its former title?",
            options: ["26 CFR 31.3402(f)(5)-1", "26 CFR 1.31-1, on the credit for tax withheld on wages", "26 CFR 301.6402-2, on claims for credit or refund", "26 CFR 1.6012-1, on individuals required to make returns"],
            correctIndex: 0,
            explanation: "Its paragraph (a) names the form and records that it was previously the Employee's Withholding Allowance Certificate.",
            sourceLessonSlug: "the-w4-is-the-dial",
          },
          {
            prompt: "What did the redesign of the withholding certificate remove?",
            options: ["Allowances", "The requirement that the employee sign the certificate", "The filing status entry, now taken from payroll records", "The exemption available under section 3402(n) of the Code"],
            correctIndex: 0,
            explanation: "The IRS says allowances are no longer used for the redesigned form, and the title changed to match.",
            sourceLessonSlug: "the-w4-is-the-dial",
          },
          {
            prompt: "What two things must an employee certify to stop withholding under 3402(n)?",
            options: ["No liability last year, none expected this year", "That wages will fall below the section 6012 filing threshold", "That another employer is withholding on the same wages", "That a refundable credit will exceed the year's liability"],
            correctIndex: 0,
            explanation: "Both conditions together: a statement about the preceding taxable year and a prediction about the current one.",
            sourceLessonSlug: "the-w4-is-the-dial",
          },
          {
            prompt: "What does 26 U.S.C. 6012(a)(1)(A) use in place of a dollar figure?",
            options: ["A reference to the exemption amount", "A schedule of thresholds by filing status and age", "A percentage of the prior year's median household income", "The basic standard deduction stated in section 63(c)"],
            correctIndex: 0,
            explanation: "Which is why the practical thresholds are published annually rather than printed in a lesson.",
            sourceLessonSlug: "who-has-to-file-and-who-should",
          },
          {
            prompt: "Why can someone below the filing threshold be owed money and receive none?",
            options: ["A refund requires a computed overpayment", "Because refundable credits are paid only to filers who owe tax", "Because the Secretary refunds withholding automatically", "Because withholding below the threshold is never collected"],
            correctIndex: 0,
            explanation: "Sections 6401(b)(1) and 6402(a) both need the computation that only a return produces.",
            sourceLessonSlug: "who-has-to-file-and-who-should",
          },
          {
            prompt: "Under 6511(a), how long does a non-filer have to claim a refund?",
            options: ["Two years from payment", "Three years from the close of the taxable year", "Ten years, matching the collection period", "Indefinitely, since no limitation period has begun"],
            correctIndex: 0,
            explanation: "Withholding counts as tax paid, so that branch is the operative one for someone who never filed.",
            sourceLessonSlug: "who-has-to-file-and-who-should",
          },
          {
            prompt: "What does 26 U.S.C. 6065 require of any return under the internal revenue laws?",
            options: ["A declaration under penalties of perjury", "A signature witnessed by an authorised officer", "A preparer's identifying number alongside the filer's", "An acknowledgement of the Secretary's power to examine it"],
            correctIndex: 0,
            explanation: "It is one sentence, and it converts a form into a sworn statement.",
            sourceLessonSlug: "under-penalties-of-perjury",
          },
          {
            prompt: "How do the two section 6651 penalties compare?",
            options: ["Failure to file runs ten times faster", "They accrue at identical monthly rates and caps", "Failure to pay runs five times faster than failure to file", "Only one of them carries a reasonable-cause escape"],
            correctIndex: 0,
            explanation: "Five percent a month against half a percent, each capped at 25 percent in the aggregate.",
            sourceLessonSlug: "under-penalties-of-perjury",
          },
          {
            prompt: "What is the assessment period where no return was filed?",
            options: ["There is none", "Three years from the date the return was due", "Six years, on the theory that all income was omitted", "Two years from the date the tax was paid by withholding"],
            correctIndex: 0,
            explanation: "Section 6501(c)(3) allows assessment at any time, so a non-filer removed the deadline rather than bought silence.",
            sourceLessonSlug: "under-penalties-of-perjury",
          },
          {
            prompt: "What triggers the six-year assessment period in 6501(e)(1)(A)?",
            options: ["Omitting over 25 percent of stated gross income", "Any understatement of tax exceeding five thousand dollars", "A return prepared by someone other than the taxpayer", "A refund claim made after the ordinary period closed"],
            correctIndex: 0,
            explanation: "The measure is gross income stated in the return rather than the tax or the deductions.",
            sourceLessonSlug: "under-penalties-of-perjury",
          },
          {
            prompt: "On what date does 26 U.S.C. 7703(a) determine marital status?",
            options: ["The close of the taxable year", "The date the return for that year is filed", "The first day of the taxable year in question", "The date the withholding certificate was furnished"],
            correctIndex: 0,
            explanation: "Except where a spouse dies during the year, when the determination is made at the time of death.",
            sourceLessonSlug: "filing-status-is-a-legal-fact",
          },
          {
            prompt: "What does 26 U.S.C. 6013(d)(3) mean for each spouse on a joint return?",
            options: ["Each is liable for the whole tax", "Each is liable for the tax on their own income only", "Each is liable only while the marriage subsists", "Each is liable up to the value of jointly held property"],
            correctIndex: 0,
            explanation: "The tax is computed on aggregate income and the liability is joint and several, so collection may proceed against either.",
            sourceLessonSlug: "filing-status-is-a-legal-fact",
          },
          {
            prompt: "What phrase introduces the head of household test in 26 U.S.C. 2(b)(1)?",
            options: ["If, and only if", "Where the individual so elects on a timely return", "To the extent the Secretary may by regulation provide", "Notwithstanding any other provision of this subtitle"],
            correctIndex: 0,
            explanation: "The same paragraph then defines maintaining a household as furnishing over half its cost.",
            sourceLessonSlug: "filing-status-is-a-legal-fact",
          },
          {
            prompt: "What is the difference between a deduction and a credit?",
            options: ["One reduces income, the other reduces tax", "One is refundable and the other never is", "One requires itemising and the other does not", "One is claimed on the return and the other on the certificate"],
            correctIndex: 0,
            explanation: "A deduction is worth the rate times its amount, while a credit is worth its face amount.",
            sourceLessonSlug: "refundable-or-not",
          },
          {
            prompt: "Which sentence of the Code defines a refundable credit?",
            options: ["26 U.S.C. 6401(b)(1)", "26 U.S.C. 6402(a), on refunding the balance", "26 U.S.C. 26(a), which caps the personal credits", "26 U.S.C. 32(a)(1), which allows the earned income credit"],
            correctIndex: 0,
            explanation: "It deems the excess of a subpart C credit over the tax to be an overpayment, and the refund machinery does the rest.",
            sourceLessonSlug: "refundable-or-not",
          },
          {
            prompt: "On a computed tax of 400, what does a refundable credit of 1,000 produce?",
            options: ["Zero tax and a 600 overpayment", "Zero tax and no payment beyond that", "A tax of 600 carried to the following year", "A refund of the full 1,000 whatever the tax was"],
            correctIndex: 0,
            explanation: "The same amount as a non-refundable credit would leave 600 unused and unpaid.",
            sourceLessonSlug: "refundable-or-not",
          },
          {
            prompt: "What must exist before any earned income credit arises?",
            options: ["Earned income", "A qualifying child under the section 152(c) definition", "A filing status other than married filing separately", "A tax liability the credit can be applied against"],
            correctIndex: 0,
            explanation: "Section 32(c)(2)(A) defines it as employee compensation includible in gross income plus net earnings from self-employment.",
            sourceLessonSlug: "the-earned-income-credit",
          },
          {
            prompt: "What does section 32(j) tell you about the statute's dollar amounts?",
            options: ["They are adjusted for inflation", "They are fixed until Congress amends the section", "They are set by each state for its own residents", "They are published only in the withholding tables"],
            correctIndex: 0,
            explanation: "The statute says in its own text that the figures move, which is why this course prints none of them.",
            sourceLessonSlug: "the-earned-income-credit",
          },
          {
            prompt: "What age band does 32(c)(1)(A)(ii) set for a claimant with no qualifying child?",
            options: ["At least 25 and under 65", "At least 18 and under 70 at year end", "At least 21 and under 60 throughout the year", "Any age, provided the claimant has earned income"],
            correctIndex: 0,
            explanation: "Together with a United States abode for over half the year and not being another taxpayer's dependent.",
            sourceLessonSlug: "the-earned-income-credit",
          },
          {
            prompt: "How do the researchers quoted in the course describe the earned income credit?",
            options: ["The largest cash-based safety net program", "A minor provision reaching a small share of filers", "A deduction rather than a credit in current law", "A program jointly administered with the states"],
            correctIndex: 0,
            explanation: "They write that it has replaced welfare in that role in the United States.",
            sourceLessonSlug: "the-earned-income-credit",
          },
          {
            prompt: "What are the two disallowance periods in 26 U.S.C. 32(k)(1)(B)?",
            options: ["Ten years for fraud, two for reckless disregard", "Five years for fraud, one for a careless error", "Three years in both cases, matching the assessment period", "Permanent in both cases, subject to reinstatement on request"],
            correctIndex: 0,
            explanation: "Measured in taxable years from the most recent year for which a final determination was made.",
            sourceLessonSlug: "when-a-credit-is-disallowed",
          },
          {
            prompt: "Which four items does the section 6695(g) preparer penalty cover?",
            options: ["Head of household status and three named credits", "Every credit claimed on a return the preparer signs", "Filing status, the standard deduction and two credits", "Withholding, estimated payments and two refundable credits"],
            correctIndex: 0,
            explanation: "Section 2(b) head of household eligibility, and the credits under sections 24, 25A(a)(1) and 32.",
            sourceLessonSlug: "when-a-credit-is-disallowed",
          },
          {
            prompt: "Why is the amount printed in 26 U.S.C. 24(a) not the amount in force?",
            options: ["Temporary amendments have set it for years at a time", "Because the subsection was repealed and never replaced", "Because the figure is adjusted automatically for inflation", "Because it applies only to taxpayers filing jointly"],
            correctIndex: 0,
            explanation: "Which is the course's sharpest demonstration that even the Code's own text has to be checked against the current year.",
            sourceLessonSlug: "when-a-credit-is-disallowed",
          },
          {
            prompt: "What is the first step of the course's four-step method for a current figure?",
            options: ["Find the current Publication 17 and note its year", "Read the operative Code section and copy the amount", "Ask a paid preparer which figure applies this season", "Search for the most recent news report quoting it"],
            correctIndex: 0,
            explanation: "Then the annual revenue procedure by number, the tax year beside the figure, and a re-check each season.",
            sourceLessonSlug: "when-a-credit-is-disallowed",
          },
          {
            prompt: "What formula does 26 U.S.C. 6402(m) use for the earliest refund date?",
            options: ["The 15th day of the second month after year end", "The last business day of February in each year", "Twenty-one days after the return is accepted", "The first day of the third month after year end"],
            correctIndex: 0,
            explanation: "The statute names no month, and for a calendar-year filer the formula lands on 15 February.",
            sourceLessonSlug: "the-fifteenth-day-of-the-second-month",
          },
          {
            prompt: "How much of an affected refund does the section 6402(m) hold reach?",
            options: ["All of it", "Only the part attributable to the named credits", "Only the part exceeding the tax shown on the return", "Only the part arising from withholding on wages"],
            correctIndex: 0,
            explanation: "The IRS says it cannot release the part of the refund not associated with the two credits.",
            sourceLessonSlug: "the-fifteenth-day-of-the-second-month",
          },
          {
            prompt: "What is the stated purpose of the hold?",
            options: ["Preventing fraud from fabricated wages", "Spreading refund payments across the filing season", "Allowing states to refer their own tax obligations", "Giving preparers time to complete due diligence checks"],
            correctIndex: 0,
            explanation: "The agency's words are identity theft and refund fraud related to fabricated wages and withholdings.",
            sourceLessonSlug: "the-fifteenth-day-of-the-second-month",
          },
          {
            prompt: "Why do both credits named in 6402(m) reach lower earners?",
            options: ["Both are conditioned on earned income", "Both require a qualifying child under seventeen", "Both phase out above the median household income", "Both are claimed only by filers below the filing threshold"],
            correctIndex: 0,
            explanation: "Section 32 requires it and 24(d)(1) computes the refundable portion from a percentage of it above a floor.",
            sourceLessonSlug: "who-the-hold-lands-on",
          },
          {
            prompt: "Which sibling course prices the refund advance, so this one does not?",
            options: ["Predatory Products, Priced", "Credit, and the Decisions Made About You", "Banking, and Who Has No Bank", "Cash Flow, and When the Money Actually Moves"],
            correctIndex: 0,
            explanation: "Its lesson reads 6402(a) to show the debtor is the Treasury, then works the arithmetic of the product.",
            sourceLessonSlug: "who-the-hold-lands-on",
          },
          {
            prompt: "What starts an offset under 26 U.S.C. 6402(d)(1) and (e)(1)?",
            options: ["Notice from a federal agency or a state", "A determination made by the Secretary on examination", "A request from the taxpayer to apply the refund to a debt", "A judgment obtained by the creditor in federal court"],
            correctIndex: 0,
            explanation: "Which is the grammar that makes the Service the collector rather than the creditor.",
            sourceLessonSlug: "the-refund-can-be-taken-first",
          },
          {
            prompt: "What comes first in the section 6402 priority order?",
            options: ["The filer's own internal revenue tax", "Past-due support owed by the filer", "Debts referred by any federal agency", "State income tax obligations certified as enforceable"],
            correctIndex: 0,
            explanation: "Then past-due support, federal agency debts, state income tax obligations and unemployment compensation debts.",
            sourceLessonSlug: "the-refund-can-be-taken-first",
          },
          {
            prompt: "Why does an offset never reach a household's budget?",
            options: ["The reduction happens before payment", "Because the offset applies to the following year's refund", "Because the taxpayer must consent before it takes effect", "Because the amount is held in suspense pending a claim"],
            correctIndex: 0,
            explanation: "The money never arrives, so it is never available to be spent, budgeted or borrowed against.",
            sourceLessonSlug: "the-refund-can-be-taken-first",
          },
          {
            prompt: "What kind of instrument sets the Free File income limit?",
            options: ["A memorandum of understanding", "A section of the Internal Revenue Code", "A regulation issued by the Secretary", "An annual revenue procedure published each December"],
            correctIndex: 0,
            explanation: "Between the IRS and Free File, Inc., which is why the limit is contractual rather than statutory.",
            sourceLessonSlug: "free-file-is-a-contract",
          },
          {
            prompt: "What is that income limit designed to achieve?",
            options: ["Eligibility for about 70 percent of taxpayers", "A limit equal to the median adjusted gross income", "A limit matching the VITA threshold for the same year", "Eligibility for every taxpayer required to file a return"],
            correctIndex: 0,
            explanation: "Article 3.1 of the memorandum, per Treasury's report, which is why the number moves every year.",
            sourceLessonSlug: "free-file-is-a-contract",
          },
          {
            prompt: "What income limit applies to Free File Fillable Forms?",
            options: ["None", "The same limit as the guided software carries", "A limit set separately by each participating provider", "A limit half the size of the guided software's"],
            correctIndex: 0,
            explanation: "It is federal only, with form instructions as its guidance and limited calculations.",
            sourceLessonSlug: "free-file-is-a-contract",
          },
          {
            prompt: "Where is the VITA matching grant program codified?",
            options: ["26 U.S.C. 7526A", "26 U.S.C. 7526, on low-income taxpayer clinics", "26 U.S.C. 6402, on credits and refunds", "26 U.S.C. 7803, on the enumerated taxpayer rights"],
            correctIndex: 0,
            explanation: "Made permanent by the Taxpayer First Act of 2019, Public Law 116-25.",
            sourceLessonSlug: "the-volunteer-programs",
          },
          {
            prompt: "What do the VITA eligibility and use figures for tax year 2024 suggest?",
            options: ["Capacity and awareness limit the program", "Eligibility rules exclude most working households", "The grant formula caps the number of returns prepared", "Most eligible households prefer commercial preparation"],
            correctIndex: 0,
            explanation: "About 67 million tax units eligible against roughly 1.6 million returns filed through it.",
            sourceLessonSlug: "the-volunteer-programs",
          },
          {
            prompt: "What is the difference between section 7526A and section 7526?",
            options: ["Preparation grants versus representation clinics", "Federal grants versus state matching contributions", "Individual filers versus business taxpayers", "Volunteer sites versus commercial software providers"],
            correctIndex: 0,
            explanation: "Preparation happens before a return is filed; representation happens after something has gone wrong with one.",
            sourceLessonSlug: "the-volunteer-programs",
          },
          {
            prompt: "Which provision required Treasury's report on the replacement of Direct File?",
            options: ["Section 70607 of Public Law No. 119-21", "Section 201(b) of the PATH Act of 2015", "Section 7526A of the Internal Revenue Code", "Article 3.1 of the Free File memorandum of understanding"],
            correctIndex: 0,
            explanation: "The report's own cover page states that it fulfils that requirement, and it is dated 2 October 2025.",
            sourceLessonSlug: "direct-file-and-what-happened",
          },
          {
            prompt: "What does Step 2 of Treasury's report announce?",
            options: ["Suspension of the Direct File program", "Expansion of Direct File to every remaining state", "A statutory repeal of the authority to run it", "Transfer of the program to a commercial provider"],
            correctIndex: 0,
            explanation: "Citing high costs, limited participation and the agency's need to focus resources elsewhere.",
            sourceLessonSlug: "direct-file-and-what-happened",
          },
          {
            prompt: "Why does the course refuse to state Direct File's status today?",
            options: ["Dated documents are evidence about their dates", "Because no primary source has ever addressed the question", "Because program status is a matter of state rather than federal law", "Because the agency has asked publishers not to describe it"],
            correctIndex: 0,
            explanation: "It is the same discipline the course applies to a bracket amount, and a source check is filed instead.",
            sourceLessonSlug: "direct-file-and-what-happened",
          },
          {
            prompt: "From what event do the 90 days in 26 U.S.C. 6213(a) run?",
            options: ["The mailing of the notice of deficiency", "The taxpayer's receipt of that notice", "The opening of the examination by the Service", "The close of the taxable year in question"],
            correctIndex: 0,
            explanation: "Which is why the notice goes by certified or registered mail and why an outdated address is a real problem.",
            sourceLessonSlug: "an-examination-is-a-procedure",
          },
          {
            prompt: "How did average individual audit rates move from tax year 2010 to 2019?",
            options: ["From 0.9 percent to 0.25 percent", "From 0.25 percent to 0.9 percent as funding rose", "They held steady while their composition changed", "They rose for low incomes and fell for high incomes"],
            correctIndex: 0,
            explanation: "GAO reported the decline across all income levels, with the largest fall above 200,000 dollars of income.",
            sourceLessonSlug: "an-examination-is-a-procedure",
          },
          {
            prompt: "How was race handled in the study of audit disparities?",
            options: ["Imputed, then calibrated against voter records", "Taken from a question added to the tax return", "Supplied by the Census for each taxpayer's address", "Reported voluntarily by taxpayers who were examined"],
            correctIndex: 0,
            explanation: "Bayesian Improved First Name Surname Geocoding, checked against North Carolina records carrying self-reported race.",
            sourceLessonSlug: "the-disparity-and-the-method",
          },
          {
            prompt: "Why is the study's finding a range rather than a single figure?",
            options: ["Partial identification produces bounds", "Because two separate years were analysed separately", "Because the agency published two conflicting datasets", "Because the rate varied across the states sampled"],
            correctIndex: 0,
            explanation: "2.9 to 4.7 times is what the method yields when the protected characteristic is unobserved.",
            sourceLessonSlug: "the-disparity-and-the-method",
          },
          {
            prompt: "What does GAO say the no-change rate calculation includes?",
            options: ["Default audits", "Examinations still open at the fiscal year end", "Only examinations closed with an agreed adjustment", "Examinations of returns claiming no refundable credit"],
            correctIndex: 0,
            explanation: "Audits closed as a change because the taxpayer did not respond, so selecting on the metric selects for nonresponse.",
            sourceLessonSlug: "the-disparity-and-the-method",
          },
          {
            prompt: "What are the three headings of the capstone's one-page note?",
            options: ["What they say, where they disagree, what I could not verify", "What I owe, what I am owed, and what I will claim", "What is accurate, what is inaccurate, what I will amend", "What each document shows, who signed it, and when"],
            correctIndex: 0,
            explanation: "The third is the useful one, because it becomes the list of questions for a preparation site or a clinic.",
            sourceLessonSlug: "capstone-read-your-own-paperwork",
          },
          {
            prompt: "What habit does the capstone say outlives every figure in the course?",
            options: ["Find the document, read the sentence, note the date", "Memorise the section number for each rule taught", "Recompute the withholding at the start of each year", "Compare two commercial products before choosing one"],
            correctIndex: 0,
            explanation: "It is the same method applied to the Free File limit, the VITA threshold and the credit amounts alike.",
            sourceLessonSlug: "capstone-read-your-own-paperwork",
          },
        ],
      },
    },
  ],
};
