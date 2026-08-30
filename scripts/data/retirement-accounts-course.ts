import type { AuthoredCourse } from "./authored-course";

// MONEY-07 · "Retirement: the Plan, the Fee Disclosure, and the Floor" (Money & Property). Source
// brief: plans/future-courses/2026-08-27-15-personal-finance-track-research.md, sections 4.6, 6, 7
// and 10. Seventh course of the `personal-money` series, code MONEY. Tier 0.
//
// THE SPINE, and the sentence the whole course is built to keep true:
// A RETIREMENT ACCOUNT IS A LEGAL WRAPPER SOMEBODY ELSE DECIDES WHETHER TO OFFER YOU, AND EVERY
// TERM THAT MATTERS IS WRITTEN IN A DOCUMENT YOU ARE ENTITLED TO ASK FOR.
// This is NOT a course about how to invest. It refuses that question on purpose and says so in
// prose in three separate lessons. It is a course about access, about the plan document, about the
// fee disclosure a regulation requires, about how a Social Security benefit is actually computed,
// and about which of the people talking to you is legally required to act in your interest.
//
// WHY THIS CATALOG, AND NOT A GENERIC INVESTING COURSE. Access is the subject. A 401(k) exists only
// because an employer chose to sponsor one, so whether you have a plan at all is a fact about the
// labour market rather than about your discipline. The BLS National Compensation Survey measures
// that gradient directly and the numbers are not close: in March 2025, 91 percent of private
// industry workers in the highest-paid quarter of occupations had access to a plan and 80 percent
// participated, against 49 percent and 23 percent in the lowest-paid quarter (CRS IF13185, 18 March
// 2026). That is the same move `the-county-committee` makes on federal farm credit and
// `financing-without-access` makes on the capital system, one level down, on an account.
//
// EVERY PRIMARY DOCUMENT IN THIS FILE WAS FETCHED AND READ ON 29 AUGUST 2026, not summarised from
// memory. The statutory and regulatory spine:
//   · ERISA: 29 U.S.C. 1002(2)(A) (what an employee pension benefit plan is), 1002(21)(A) (the
//     functional definition of a fiduciary), 1024(b)(4) (documents on written request), 1053(a)
//     (the minimum vesting standards and the two permitted schedules), 1104(a)(1)(A) through (D)
//     (the duties, quoted in full), 1132(c)(1) (the per-day penalty for not furnishing).
//   · The participant fee disclosure: 29 CFR 2550.404a-5, its (a), (c)(1), (c)(2), (c)(3) and
//     (d)(1), including the sentence the rule itself requires about the cumulative effect of fees.
//   · The Internal Revenue Code: 219(a) and 219(g) (the deduction, and the active-participant
//     limitation that makes an employer's choice reach into your own IRA), 401(a)(31)(A) (direct
//     rollover), 401(k)(2)(B) and (k)(2)(C) (distribution events, and elective deferrals being
//     nonforfeitable), 402(g)(1)(B) and (g)(4) (a base figure in statute plus an annual adjustment
//     rounded to the next lowest multiple of 500), 408A(a) through (d)(2) (Roth), 411(a)(1) and
//     411(a)(11)(A) (the involuntary cash-out threshold), 414A (automatic enrollment), 72(t)(1) and
//     (t)(2) (the additional tax and its exceptions).
//   · Social Security: 42 U.S.C. 414(a) (fully insured), 405(c)(1)(B), (c)(4) and (c)(5) (the time
//     limitation and the conclusiveness of the earnings record), 415(a)(1)(A) (the 90, 32 and 15
//     percent formula), 415(b)(2)(A) (the five dropped years), 416(l)(1) and (l)(2) (retirement age
//     in the statute), and 20 CFR 404.211, 404.212 and 404.822.
//   · Who owes you a duty: 15 U.S.C. 80b-6 (the Advisers Act prohibitions), SEC v. Capital Gains
//     Research Bureau, Inc., 375 U.S. 180 (1963), 17 CFR 240.15l-1 (Regulation Best Interest) and
//     17 CFR 275.204-5 (delivery of Form CRS, including its rollover trigger).
//
// FIVE THINGS THIS COURSE REFUSES TO DO, RECORDED HERE SO A LATER EDITOR CANNOT SOFTEN ONE WITHOUT
// SEEING THAT IT WAS A DECISION.
//   1. IT GIVES NO FINANCIAL ADVICE. No allocation, no savings rate, no months of expenses, no
//      product, fund, ticker, provider or platform, and no "you should". Said in PROSE in three
//      places, per the posture `surplus-funds-basics` established and MONEY-01 inherited: Section 1
//      lesson 1, Section 3 lesson 3, and the capstone.
//   2. IT PRINTS NO CONTRIBUTION LIMIT, CATCH-UP AMOUNT, INCOME PHASE-OUT OR BENEFIT FIGURE AS A
//      BARE FACT. Those reset annually. What it teaches is the mechanism that produces them: a base
//      amount fixed in the statute, an adjustment the Secretary makes each year, and the annual
//      notice where the operative number is published. The two dollar figures it does print,
//      402(g)(1)(B)'s 15,000 base and 411(a)(11)(A)'s 7,000 threshold, are quoted from the statute
//      as printed, dated in the lesson, and labelled as statutory rather than current.
//   3. IT PROJECTS NO RETURN. The compounding arithmetic in Section 3 is labelled a HYPOTHETICAL in
//      the lesson, chosen to make the shape of a percentage-of-assets fee visible, and the lesson
//      says in its own words that it is not a forecast and implies no rate anyone should expect.
//   4. IT DESCRIBES NO AGENCY'S CURRENT FOOTING IN THE PRESENT TENSE. Statutes and regulations are
//      the durable layer; who is writing and enforcing them at any moment is not.
//   5. IT TEACHES NO RISK, RETURN OR DIVERSIFICATION, and the standards map says so out loud. Every
//      state framework bundles retirement in with investing products, and the claims this course
//      supports are deliberately narrow because of it.
//
// House style, inherited from MONEY-01: `section` on every lesson; flush-left single-line
// `:::reveal q ||| a`; a `## Vocabulary` block of 3-6 lesson-specific terms; APA 7 `## Sources`
// with a stable URL; a quiz per teaching section (pool sized by density, serving 5, passing 80,
// shuffled) plus a final serving 10; every question carries `explanation` and `sourceLessonSlug`.
// Correct options are written SHORT and distractors long and specific, so `check-longest-option`
// passes by construction rather than by post-hoc trimming.
export const RETIREMENT_ACCOUNTS_COURSE: AuthoredCourse = {
  title: "Retirement: the Plan, the Fee Disclosure, and the Floor",
  description:
    "This is not a course about how to invest, and it will not tell you what to buy, how much to save, or when to start. It teaches the machinery instead, because the machinery is public and the advice would be a guess. Start with the fact that decides everything else: a workplace retirement plan exists only because an employer chose to sponsor one, so whether you have access is a fact about the labour market rather than about your discipline, and the federal survey that measures it finds the gap running from 91 percent access in the best-paid quarter of private-sector occupations down to 49 percent in the lowest-paid quarter. From there the course reads the documents. An employee pension benefit plan has a statutory definition, and the plan document, not a website, decides what your employer contributes and when it becomes yours; the vesting schedules an employer may choose from are printed in the statute itself, your own deferrals are nonforfeitable from the day you make them, and what happens to the rest when you leave is a term you can look up rather than a rumour. Fees compound in exactly the way balances do, and one regulation requires the plan to hand you a disclosure that says so, to state each investment's cost both as a percentage and as a dollar amount per thousand invested, and to tell you at least quarterly what you were actually charged. The tax half is taught as a timing choice rather than a product choice, and the annual figures are taught as a method: a base amount fixed in statute, an adjustment made each year, and the notice where the current number is published. Then Social Security, taught from the statute rather than from a brochure: forty quarters of coverage, an earnings record that becomes conclusive three years, three months and fifteen days after the year it covers, thirty-five years of indexed earnings, and a benefit formula that pays 90 percent of the first slice of average indexed monthly earnings and 15 percent of the last. The course closes on the question almost nobody asks and everybody should: which of the people talking to you is legally required to act in your interest, which is held to a different standard written in a different rule, and where the free public records are that let you check either one before you listen.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1 — The account is a wrapper, and somebody else decides if you get one
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "not-a-product-and-not-advice",
      title: "1 · The account is not the investment, and this course gives no advice",
      section: "Section 1 · The account is a wrapper, and somebody else decides if you get one",
      body: `Start with the distinction most people get wrong, because everything after it depends on getting it right.

**A retirement account is a container, not a thing you buy.** A 401(k) is not an investment. Neither is an IRA. Each is a legal wrapper defined by a statute, and what the wrapper does is change the tax treatment and the legal protections that attach to whatever is held inside it. Federal law describes the employer version as a "plan, fund, or program" that "provides retirement income to employees" or "results in a deferral of income by employees for periods extending to the termination of covered employment or beyond" (29 U.S.C. § 1002, n.d.). Notice what that definition does not say. It says nothing about what the money is invested in, because the wrapper and the contents are two separate questions with two separate answers.

**What this course will not do, said plainly here and said again twice more.** It gives no financial advice of any kind. It will not tell you how much to save, what to hold, or when to begin. It names no fund, no ticker, no provider, no bank, no insurer and no platform as a good one. It promises no outcome and it projects no return. Those refusals are not modesty. A course cannot know your income, your health, your household, your other obligations or how long you will be able to work, and a recommendation made without those facts is a guess in a suit.

**What it will do instead** is teach the mechanism: what these accounts are in law, who is required to offer you one and who is not, what the plan document decides, which costs are charged to you and which document has to disclose them, how the tax timing works, how a Social Security benefit is actually computed, and who is legally obliged to act in your interest. All of that is public, written down, and checkable by you.

**Three habits come with that promise**, inherited from the earlier courses in this series.

1. **Every figure carries a date in the lesson.** More numbers reset annually in this subject than anywhere else in the series. Contribution limits, catch-up amounts, income phase-outs and benefit figures all move on their own schedules. An undated number here is a claim someone will still be repeating five years after it stopped being true.
2. **This course teaches a method rather than a table.** Where a table would be convenient and wrong, you get the rule that sets the number and the place the current year's number is published.
3. **Statute and regulation first.** Which office is writing and enforcing a rule at any given moment changes. What the rule says changes far more slowly, and it is written down where you can read it for nothing.

**Where this sits in the series.** MONEY-01 taught how a credit decision gets made about a record you did not write. MONEY-02 taught the deposit account and who has none. This course is the same move applied to an account your employer may or may not have decided to offer you.

:::reveal Is a 401(k) itself an investment? ||| No. It is a legal wrapper defined by statute that changes tax treatment and legal protections. What is held inside it is a separate question.

:::reveal Name three things this course will never tell you. ||| How much to save, what to hold, and when to start. It also names no provider and promises no outcome.

:::reveal Why does every figure in this course carry a date? ||| Because limits, phase-outs and benefit figures reset annually, so an undated number goes quietly wrong and gets repeated for years.

## Vocabulary
- **Account wrapper**: the legal container an asset sits inside, which sets its tax treatment and legal protections without determining what the asset is.
- **Employee pension benefit plan**: the statutory term for an employer-established plan, fund or program that provides retirement income or defers income until employment ends or later.
- **Deferral of income**: postponing the receipt of pay, and the tax on it, until a later period, which is the mechanism behind most workplace retirement plans.
- **Advice**: telling a particular person what to do with their money, which requires facts about that person that no course has, and which this course therefore never does.

## Sources
29 U.S.C. § 1002. (n.d.). *Definitions*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/29/1002`,
    },
    {
      slug: "who-has-a-plan-at-all",
      title: "2 · Access, participation, and the difference between them",
      section: "Section 1 · The account is a wrapper, and somebody else decides if you get one",
      body: `You cannot contribute to a workplace plan that does not exist. That sentence sounds obvious and it is the most under-taught fact in this subject, because almost every popular treatment of retirement starts at the moment a plan is already on the table.

**Nobody has to offer you one.** Federal law regulates a retirement plan heavily once an employer establishes it. It does not require an employer to establish one. So whether a plan is available to you is a fact about who employs you, in what occupation, at what wage, for how many hours.

**Three different numbers get called "coverage", and they are not the same.** The federal survey that measures this separates them, and the separation is the lesson:

- **Access** is whether a plan is available to you at your job.
- **Participation** is whether you are actually in it.
- **The take-up rate** is participation divided by access, which is the share of people who could join and did.

Quote any one of the three as "coverage" and you can make the same country look well served or badly served. That is why a careless source can say half of workers have no retirement plan while another says nearly three quarters have one, and both can be reading the same survey.

**The measured figures, dated.** The Bureau of Labor Statistics conducts the National Compensation Survey and publishes these estimates. Reading the March 2025 results, the Congressional Research Service reported that 72 percent of private-sector workers had access to an employer-sponsored retirement plan and 53 percent participated (Congressional Research Service, 2026). Those figures are from March 2025 and were published on 18 March 2026. Check the current release before you repeat them.

**The gradient inside those averages is the part that matters**, and it is steep. In the same data, among private-sector workers in the lowest-paid quarter of occupations, 49 percent had access and 23 percent participated. In the highest-paid quarter, 91 percent had access and 80 percent participated. Part-time workers: 47 percent access, 23 percent participation. Full-time: 81 and 62. At establishments with fewer than 50 workers, 55 percent had access and 38 percent participated; at those with 500 or more, 90 and 76 (Congressional Research Service, 2026).

**Read that as a structure, not as a scoreboard of effort.** A person in the lowest-paid quartile who is not in a plan is, better than one time in two, a person with no plan to be in. Whatever else is going on, the first constraint is not discipline. It is the offer.

**And the difference between access and participation is not one thing either.** It can be an eligibility rule in the plan document, a waiting period, an hours threshold, an enrolment step nobody took, or a wage that leaves nothing to defer. Sections 2 and 4 take those apart. What matters here is that the two gaps are different gaps and a single number hides both.

:::reveal What is the difference between access and participation? ||| Access is whether a plan is available at your job. Participation is whether you are actually in it.

:::reveal What is the take-up rate? ||| Participation divided by access, meaning the share of workers who could join a plan and did.

:::reveal Among private-sector workers in the lowest-paid quarter of occupations in March 2025, what share had access to a plan? ||| 49 percent, against 91 percent in the highest-paid quarter.

## Vocabulary
- **Access**: whether an employer makes a retirement plan available to a given worker, which is a decision of the employer rather than a requirement of law.
- **Participation**: whether a worker is actually enrolled in a plan, which can fall short of access for reasons ranging from eligibility rules to having nothing spare to defer.
- **Take-up rate**: participation expressed as a share of access, the measure that separates "no plan offered" from "plan offered and not joined".
- **National Compensation Survey**: the Bureau of Labor Statistics survey of employer-provided benefits that produces the access and participation estimates quoted here.

## Sources
Congressional Research Service. (2026, March 18). *Worker participation in employer-sponsored pensions in 2025* (IF13185). https://www.everycrsreport.com/reports/IF13185.html

U.S. Bureau of Labor Statistics. (n.d.). *Employee benefits in the United States* (National Compensation Survey). https://www.bls.gov/ebs/`,
    },
    {
      slug: "the-plan-document-governs",
      title: "3 · The plan document governs, and you may ask for it in writing",
      section: "Section 1 · The account is a wrapper, and somebody else decides if you get one",
      body: `If a plan is available to you, then a written document says what it does. Not a poster in the break room, not the enrolment website, and not what a colleague told you. A document.

**Two shapes of plan, and the difference is who carries the uncertainty.** A **defined benefit** plan promises a benefit computed by a formula, usually from your pay and years of service, and the employer is responsible for funding that promise. An **individual account** plan, which the same statute also calls a defined contribution plan, gives you an account; what goes in is defined, and what comes out is whatever the account holds when you take it. A 401(k) is the second kind. The distinction is not decoration: it decides who bears investment risk, and it changes the vesting rules, as Section 2 shows.

**The statute makes the plan document binding on the people running the plan.** Among the duties a plan fiduciary owes is to act "in accordance with the documents and instruments governing the plan insofar as such documents and instruments are consistent with the provisions of this subchapter" (29 U.S.C. § 1104, n.d.). Read that from your side of the table. The document is not a formality that lawyers keep in a drawer. It is the thing the plan's own decision-makers are legally required to follow, which is exactly why it is the thing you should read.

**You are entitled to it, on written request.** The administrator must, on written request from a participant or beneficiary, furnish copies of "the latest updated summary, plan description, and the latest annual report, any terminal report, the bargaining agreement, trust agreement, contract, or other instruments under which the plan is established or operated" (29 U.S.C. § 1024, n.d.). The administrator may charge a reasonable amount for the copying. That list is worth reading twice, because it includes the bargaining agreement and the trust agreement, not merely the friendly summary.

**And the request has teeth.** If an administrator fails or refuses to mail the requested material to your last known address within 30 days of the request, a court may hold that administrator "personally liable to such participant or beneficiary in the amount of up to $100 a day from the date of such failure or refusal" (29 U.S.C. § 1132, n.d.). Two cautions, both real. First, that is a matter for a court, not a button you press. Second, the 100 dollars is the figure printed in the statute; federal civil penalties of this kind are adjusted for inflation on their own schedule, so the operative daily maximum is higher than the printed one and must be looked up rather than assumed. This course prints the statutory figure and dates it: read on 29 August 2026.

**The habit this builds is the one the whole series is about.** When someone tells you what your plan does, the correct next question is which document says so, and then you ask for that document in writing.

:::reveal In a defined benefit plan and in an individual account plan, who bears the investment uncertainty? ||| The employer in a defined benefit plan, since it must fund a promised formula. The participant in an individual account plan.

:::reveal What must a plan administrator furnish on written request? ||| The latest updated summary plan description, the latest annual report, any terminal report, and the bargaining agreement, trust agreement, contract or other instruments the plan operates under.

:::reveal Why does this course say the printed 100 dollars a day is not necessarily the operative amount? ||| Because federal civil penalties of this kind are adjusted for inflation on their own schedule, so the current maximum has to be looked up.

## Vocabulary
- **Defined benefit plan**: a plan promising a benefit computed by a formula, where the employer carries the funding obligation and the investment uncertainty.
- **Individual account plan**: a plan that gives each participant an account, where the contribution is defined and the eventual balance is whatever the account holds.
- **Plan administrator**: the person or entity responsible for running the plan, including furnishing the governing documents to a participant who asks in writing.
- **Summary plan description**: the participant-facing written explanation of the plan, one of the documents an administrator must supply on written request.
- **Trust agreement**: the instrument holding plan assets, named in the statute's list of documents a participant may demand, and usually the least-read one.

## Sources
29 U.S.C. § 1024. (n.d.). *Filing and furnishing of information*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/29/1024

29 U.S.C. § 1104. (n.d.). *Fiduciary duties*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/29/1104

29 U.S.C. § 1132. (n.d.). *Civil enforcement*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/29/1132`,
    },
    {
      slug: "quiz-wrapper-and-access",
      title: "4 · Knowledge check: the wrapper, and who is offered one",
      section: "Section 1 · The account is a wrapper, and somebody else decides if you get one",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "In this course's terms, what is a retirement account?",
            options: ["A legal wrapper", "A diversified portfolio assembled and rebalanced by the plan's trustee", "A contract under which an employer guarantees a minimum annual return", "A savings product sold by a bank and covered by federal deposit insurance"],
            correctIndex: 0,
            explanation: "It is a container defined by statute, and what is held inside it is a separate question the course does not answer.",
            sourceLessonSlug: "not-a-product-and-not-advice",
          },
          {
            prompt: "What does the wrapper actually change?",
            options: ["Tax treatment and legal protections", "The rate of return earned by whatever assets are held inside it", "The fees a recordkeeper is permitted to charge against the balance", "The order in which creditors may reach the assets held by an employer"],
            correctIndex: 0,
            explanation: "That is the whole function of the wrapper, and it operates on the contents without determining what the contents are.",
            sourceLessonSlug: "not-a-product-and-not-advice",
          },
          {
            prompt: "How does federal law describe an employer-established retirement arrangement?",
            options: ["A plan, fund, or program", "A trust maintained exclusively for the benefit of the employer's officers", "A pooled investment vehicle registered with a federal securities regulator", "An insurance contract issued to the employer for the benefit of employees"],
            correctIndex: 0,
            explanation: "The statutory phrase is \"plan, fund, or program\", established or maintained by an employer, an employee organization, or both.",
            sourceLessonSlug: "not-a-product-and-not-advice",
          },
          {
            prompt: "What does the statutory definition of an employee pension benefit plan say nothing about?",
            options: ["What the money is invested in", "Whether the employer must offer the arrangement to every employee it hires", "How long a participant must work before any benefit becomes nonforfeitable", "Which government office is responsible for enforcing the resulting obligations"],
            correctIndex: 0,
            explanation: "The definition turns on providing retirement income or deferring income, not on the assets held, which is why the wrapper and the contents are separate questions.",
            sourceLessonSlug: "not-a-product-and-not-advice",
          },
          {
            prompt: "Will this course tell you how much of your pay to save?",
            options: ["No", "Yes, it gives a percentage of gross pay adjusted for the learner's age", "Yes, but only after the learner completes the Social Security section", "Yes, it states a minimum sufficient to capture a typical employer match"],
            correctIndex: 0,
            explanation: "It gives no financial advice at all, and a savings rate stated without knowing a household's facts is a guess.",
            sourceLessonSlug: "not-a-product-and-not-advice",
          },
          {
            prompt: "Which of these does this course specifically refuse to name?",
            options: ["A good provider", "A federal statute that governs an employer-sponsored retirement plan", "A regulation that requires a plan to disclose its fees to participants", "A public record that lets a reader check a firm's registration history"],
            correctIndex: 0,
            explanation: "It names no fund, ticker, provider, bank, insurer or platform as a good one, while naming statutes and public records freely.",
            sourceLessonSlug: "not-a-product-and-not-advice",
          },
          {
            prompt: "Why does the course refuse to make a recommendation to any reader?",
            options: ["It knows none of your facts", "Because federal law forbids publishing retirement information without a licence", "Because the statutes it teaches have been amended too recently to rely on", "Because a recommendation would duplicate what MONEY-01 already taught about credit"],
            correctIndex: 0,
            explanation: "Income, health, household, other obligations and working life are all unknown to a course, and a recommendation without them is a guess.",
            sourceLessonSlug: "not-a-product-and-not-advice",
          },
          {
            prompt: "What does the course teach in place of advice?",
            options: ["The mechanism", "A ranking of the retirement products most commonly offered to workers", "A schedule of the returns each type of account has historically produced", "A comparison of the fees charged by the largest retirement plan providers"],
            correctIndex: 0,
            explanation: "What these accounts are in law, who must offer them, what the plan document decides, what must be disclosed, and who owes you a duty.",
            sourceLessonSlug: "not-a-product-and-not-advice",
          },
          {
            prompt: "What does the course's first habit require of every figure it prints?",
            options: ["A date", "A citation to the agency that currently enforces the rule behind it", "A statement of the margin of error attached to the published estimate", "A comparison against the equivalent figure from the preceding decade"],
            correctIndex: 0,
            explanation: "Contribution limits, catch-up amounts, phase-outs and benefit figures reset annually, so an undated number goes wrong silently.",
            sourceLessonSlug: "not-a-product-and-not-advice",
          },
          {
            prompt: "Why does dating a figure matter more in this subject than in most?",
            options: ["The numbers reset annually", "Because retirement statutes are rewritten by Congress more often than other laws", "Because plan administrators are permitted to restate past account balances", "Because federal surveys of retirement coverage are conducted only once a decade"],
            correctIndex: 0,
            explanation: "Limits, catch-ups, phase-outs and benefit figures each move on their own annual schedule.",
            sourceLessonSlug: "not-a-product-and-not-advice",
          },
          {
            prompt: "The course's second habit is to teach a method rather than what?",
            options: ["A table", "A statute, because statutory text is harder for a general reader to follow", "A worked example, because arithmetic distracts from the underlying rule", "A case study, because one household's facts never generalise to another's"],
            correctIndex: 0,
            explanation: "Where a table would be convenient and wrong, the course gives the rule that sets the number and the place the current number is published.",
            sourceLessonSlug: "not-a-product-and-not-advice",
          },
          {
            prompt: "Which layer does the course's third habit put first?",
            options: ["Statute and regulation", "The plain-language explanations published on a federal agency's own website", "The commentary of practitioners who work with retirement plans every day", "The enrolment materials a plan gives a new employee on their first day"],
            correctIndex: 0,
            explanation: "Who is writing and enforcing a rule changes; what the rule says changes far more slowly and is free to read.",
            sourceLessonSlug: "not-a-product-and-not-advice",
          },
          {
            prompt: "What did MONEY-01 teach that this course builds on?",
            options: ["How a credit decision is made", "How a deposit account is priced and who ends up outside the banking system", "How a mortgage disclosure is delivered and which quoted costs may move", "How a payday loan's flat fee converts into an annual percentage rate"],
            correctIndex: 0,
            explanation: "MONEY-01 taught the decision made about a record you did not write; this course applies the same move to an account you may not be offered.",
            sourceLessonSlug: "not-a-product-and-not-advice",
          },
          {
            prompt: "What did MONEY-02 teach in the same series?",
            options: ["The deposit account", "The timing of when deposited money actually becomes available to spend", "The federal forms a creditor must deliver before a mortgage can close", "The statutes that price payday lending differently from one state to another"],
            correctIndex: 0,
            explanation: "MONEY-02 covered consumer deposit accounts and who is left without one.",
            sourceLessonSlug: "not-a-product-and-not-advice",
          },
          {
            prompt: "What does \"deferral of income\" mean in the statutory definition?",
            options: ["Postponing pay and its tax", "Reducing the amount of pay an employer is obliged to report to the government", "Converting wages into an ownership interest in the employer's own business", "Suspending an employee's right to a benefit until a vesting schedule is met"],
            correctIndex: 0,
            explanation: "The pay, and the tax on it, are received later rather than now, which is the mechanism behind most workplace plans.",
            sourceLessonSlug: "not-a-product-and-not-advice",
          },
          {
            prompt: "Does this course project any rate of return?",
            options: ["No", "Yes, a conservative long-run average drawn from published market history", "Yes, but only for the purpose of comparing two account types side by side", "Yes, a rate published each year by the agency that supervises retirement plans"],
            correctIndex: 0,
            explanation: "It projects nothing, and the one compounding illustration it contains is labelled a hypothetical in the lesson itself.",
            sourceLessonSlug: "not-a-product-and-not-advice",
          },
          {
            prompt: "Is an individual retirement account itself an investment?",
            options: ["No", "Yes, it is a diversified fund managed by the institution that holds it", "Yes, because federal law prescribes the assets it is permitted to hold", "Yes, since its value moves with the market in the way a security does"],
            correctIndex: 0,
            explanation: "Like a 401(k) it is a wrapper, and what is held inside it is a separate question entirely.",
            sourceLessonSlug: "not-a-product-and-not-advice",
          },
          {
            prompt: "Besides providing retirement income, what else brings an arrangement within the statutory definition?",
            options: ["Deferring income past employment", "Insuring an employee against the loss of earnings caused by a disability", "Distributing a share of the employer's annual profits to its workforce", "Reimbursing an employee for medical expenses incurred after retirement"],
            correctIndex: 0,
            explanation: "The definition reaches a plan that results in a deferral of income for periods extending to the termination of covered employment or beyond.",
            sourceLessonSlug: "not-a-product-and-not-advice",
          },
          {
            prompt: "What does the course call a recommendation made without knowing a reader's circumstances?",
            options: ["A guess", "A reasonable starting point that a reader can adjust to their own situation", "An estimate that carries a stated margin of error a reader should respect", "A default that regulators expect a plan to apply unless a participant objects"],
            correctIndex: 0,
            explanation: "The lesson calls it a guess in a suit, and refuses to make one.",
            sourceLessonSlug: "not-a-product-and-not-advice",
          },
          {
            prompt: "What is the relationship between the account wrapper and what is held inside it?",
            options: ["Two separate questions", "The wrapper determines the assets, since federal law prescribes a fixed menu", "The contents determine the wrapper, since the tax result follows the asset type", "They are the same thing, because the account has no existence apart from its assets"],
            correctIndex: 0,
            explanation: "Confusing the two is the mistake the whole course is built to prevent.",
            sourceLessonSlug: "not-a-product-and-not-advice",
          },
          {
            prompt: "Which of these is something the course explicitly declines to do?",
            options: ["Promise an outcome", "Quote the text of a statute governing employer-sponsored retirement plans", "Explain what a plan administrator must furnish to a participant who asks", "Describe how a federal survey separates access from participation"],
            correctIndex: 0,
            explanation: "It promises no outcome and names no product, while quoting statutes and explaining mechanisms freely.",
            sourceLessonSlug: "not-a-product-and-not-advice",
          },
          {
            prompt: "Are employers required by federal law to offer a retirement plan?",
            options: ["No", "Yes, once the employer reaches fifty employees in a single calendar year", "Yes, but only for employees who have completed one full year of service", "Yes, unless the employer already contributes to a multiemployer arrangement"],
            correctIndex: 0,
            explanation: "Federal law regulates a plan heavily once one exists, and does not require an employer to establish one.",
            sourceLessonSlug: "who-has-a-plan-at-all",
          },
          {
            prompt: "In the survey vocabulary, what does access mean?",
            options: ["A plan is available to you", "You have satisfied every eligibility condition the plan document imposes", "You are receiving an employer contribution to an account in your own name", "Your account balance is large enough to be distributed without your consent"],
            correctIndex: 0,
            explanation: "Access is availability at your job, which is a fact about your employer rather than about you.",
            sourceLessonSlug: "who-has-a-plan-at-all",
          },
          {
            prompt: "What does participation mean in the same vocabulary?",
            options: ["You are actually in the plan", "Your employer has established a plan covering your class of employees", "You have been given the plan's summary description and fee disclosure", "You have worked long enough for the employer contribution to become yours"],
            correctIndex: 0,
            explanation: "Participation is enrolment, which can fall well short of access for several different reasons.",
            sourceLessonSlug: "who-has-a-plan-at-all",
          },
          {
            prompt: "How is the take-up rate computed?",
            options: ["Participation divided by access", "Access divided by the total number of workers in the private sector", "Participants divided by the number of accounts the recordkeeper maintains", "Employer contributions divided by the total payroll of the covered workforce"],
            correctIndex: 0,
            explanation: "It isolates the share of workers who could join a plan and did, separating that from having no plan to join.",
            sourceLessonSlug: "who-has-a-plan-at-all",
          },
          {
            prompt: "What share of private-sector workers had access to an employer-sponsored plan in March 2025?",
            options: ["72 percent", "About half, which is why the phrase \"half of workers have no plan\" is used", "Close to nine in ten, once multiemployer arrangements are counted as well", "Roughly one in three, with the remainder relying on individual accounts"],
            correctIndex: 0,
            explanation: "The Congressional Research Service reported 72 percent access from the March 2025 National Compensation Survey.",
            sourceLessonSlug: "who-has-a-plan-at-all",
          },
          {
            prompt: "What share of private-sector workers participated in a plan in March 2025?",
            options: ["53 percent", "72 percent, the same figure the survey reports for availability at work", "80 percent, which is the rate reported for the best-paid group of workers", "23 percent, which is the rate reported for the lowest-paid group of workers"],
            correctIndex: 0,
            explanation: "Participation was 53 percent against 72 percent access, which is why quoting one figure as \"coverage\" misleads.",
            sourceLessonSlug: "who-has-a-plan-at-all",
          },
          {
            prompt: "Among private-sector workers in the lowest-paid quarter of occupations, what share had access in March 2025?",
            options: ["49 percent", "72 percent, matching the overall private-sector figure for that same month", "23 percent, which is the participation figure rather than the access figure", "91 percent, which is the figure reported for the highest-paid quarter instead"],
            correctIndex: 0,
            explanation: "Slightly more than half of that group had no plan available at all, which is a fact about the job rather than the worker.",
            sourceLessonSlug: "who-has-a-plan-at-all",
          },
          {
            prompt: "And in the highest-paid quarter of occupations, what share had access?",
            options: ["91 percent", "72 percent, which is the average across all private-sector workers surveyed", "80 percent, which is that group's participation rate rather than its access", "49 percent, which is the figure reported for the lowest-paid quarter instead"],
            correctIndex: 0,
            explanation: "Access runs from 49 percent in the lowest-paid quarter to 91 percent in the highest, which is the gradient the lesson is built on.",
            sourceLessonSlug: "who-has-a-plan-at-all",
          },
          {
            prompt: "What was the participation rate in the highest-paid quarter of private-sector occupations?",
            options: ["80 percent", "91 percent, which is that group's access rate rather than its participation", "53 percent, which is the overall private-sector participation rate that month", "62 percent, which is the participation rate reported for full-time workers"],
            correctIndex: 0,
            explanation: "Eighty percent participation against ninety-one percent access is a high take-up rate as well as high access.",
            sourceLessonSlug: "who-has-a-plan-at-all",
          },
          {
            prompt: "What was the participation rate in the lowest-paid quarter of private-sector occupations?",
            options: ["23 percent", "49 percent, which is that group's access rate rather than its participation", "47 percent, which is the access rate reported for part-time workers instead", "38 percent, which is the participation rate at the smallest establishments"],
            correctIndex: 0,
            explanation: "Just under a quarter participated, against 80 percent in the highest-paid quarter.",
            sourceLessonSlug: "who-has-a-plan-at-all",
          },
          {
            prompt: "What share of private-sector part-time workers had access to a plan?",
            options: ["47 percent", "81 percent, which is the access figure reported for full-time workers", "23 percent, which is that group's participation rate rather than its access", "55 percent, which is the access figure at the smallest private establishments"],
            correctIndex: 0,
            explanation: "Part-time access was 47 percent and participation 23 percent, against 81 and 62 for full-time workers.",
            sourceLessonSlug: "who-has-a-plan-at-all",
          },
          {
            prompt: "What share of private-sector full-time workers participated in a plan?",
            options: ["62 percent", "81 percent, which is the access figure for full-time workers rather than participation", "53 percent, which is the participation figure across all private-sector workers", "76 percent, which is the participation figure at the largest establishments"],
            correctIndex: 0,
            explanation: "Full-time workers had 81 percent access and 62 percent participation.",
            sourceLessonSlug: "who-has-a-plan-at-all",
          },
          {
            prompt: "At private establishments with fewer than 50 workers, what share had access?",
            options: ["55 percent", "90 percent, which is the access figure at establishments of 500 or more", "38 percent, which is that group's participation rate rather than its access", "72 percent, which is the average across all private-sector workers surveyed"],
            correctIndex: 0,
            explanation: "Small-establishment access was 55 percent with 38 percent participation, against 90 and 76 at the largest.",
            sourceLessonSlug: "who-has-a-plan-at-all",
          },
          {
            prompt: "At private establishments with 500 or more workers, what share participated?",
            options: ["76 percent", "90 percent, which is that group's access rate rather than its participation", "38 percent, which is the participation rate at the smallest establishments", "62 percent, which is the participation rate reported for full-time workers"],
            correctIndex: 0,
            explanation: "The largest establishments had 90 percent access and 76 percent participation.",
            sourceLessonSlug: "who-has-a-plan-at-all",
          },
          {
            prompt: "Which federal survey produces the access and participation estimates in this lesson?",
            options: ["The National Compensation Survey", "The Survey of Consumer Finances, conducted every three years by the Federal Reserve", "The national survey of unbanked and underbanked households conducted by the FDIC", "The Health and Retirement Study, which follows the same households over many years"],
            correctIndex: 0,
            explanation: "The Bureau of Labor Statistics conducts it and publishes the employee benefits estimates from it.",
            sourceLessonSlug: "who-has-a-plan-at-all",
          },
          {
            prompt: "Who published the reading of the March 2025 survey that this lesson cites?",
            options: ["The Congressional Research Service", "The Employee Benefits Security Administration, in a participant guidance bulletin", "The Securities and Exchange Commission, in an investor education publication", "The Social Security Administration, in its annual statistical supplement tables"],
            correctIndex: 0,
            explanation: "CRS report IF13185, published 18 March 2026, reports the March 2025 figures the lesson quotes.",
            sourceLessonSlug: "who-has-a-plan-at-all",
          },
          {
            prompt: "What is the publication date of the report the access figures are taken from?",
            options: ["18 March 2026", "1 March 2025, the reference month of the survey data it summarises", "9 December 1963, the date of the decision on adviser fiduciary duty", "29 December 2022, the date the automatic enrollment section was enacted"],
            correctIndex: 0,
            explanation: "The data are from March 2025 and the report reading them is dated 18 March 2026, which is why both dates appear in the lesson.",
            sourceLessonSlug: "who-has-a-plan-at-all",
          },
          {
            prompt: "Why can two honest sources disagree about how many workers are covered?",
            options: ["They quote different measures", "Because the underlying survey is repeated only once every three years", "Because employers are not required to report plan participation to any agency", "Because state-sponsored programmes are counted by some agencies and not others"],
            correctIndex: 0,
            explanation: "Access, participation and take-up are three different numbers, and calling any of them \"coverage\" changes the story.",
            sourceLessonSlug: "who-has-a-plan-at-all",
          },
          {
            prompt: "For a low-wage worker with no plan, what does the lesson say the first constraint is?",
            options: ["The offer", "A failure to prioritise long-term saving over immediate consumption", "An eligibility waiting period that most plan documents impose on new hires", "A lack of information about which investments are available in the plan"],
            correctIndex: 0,
            explanation: "Better than one time in two, a worker in the lowest-paid quarter who is not participating has no plan available to join.",
            sourceLessonSlug: "who-has-a-plan-at-all",
          },
          {
            prompt: "Which of these can explain a gap between access and participation?",
            options: ["An eligibility rule", "The employer's decision not to establish any retirement plan at all", "A federal requirement that plans exclude workers under a stated wage level", "A statutory ban on enrolling employees at establishments below a set size"],
            correctIndex: 0,
            explanation: "Eligibility rules, waiting periods, hours thresholds, an enrolment step nobody took, or no spare income can each open that gap.",
            sourceLessonSlug: "who-has-a-plan-at-all",
          },
          {
            prompt: "What does a single \"coverage\" number hide, according to the lesson?",
            options: ["Two different gaps", "The margin of error the Bureau of Labor Statistics attaches to its estimates", "The share of workers whose employer contributions have not yet vested", "The proportion of plans that are individual account rather than defined benefit"],
            correctIndex: 0,
            explanation: "The gap between no plan and a plan, and the gap between a plan and enrolment, are different problems with different causes.",
            sourceLessonSlug: "who-has-a-plan-at-all",
          },
          {
            prompt: "In a defined benefit plan, who is responsible for funding the promised benefit?",
            options: ["The employer", "The participant, through deferrals taken from each period's gross pay", "The plan's recordkeeper, which guarantees the formula it administers", "A federal insurance fund that pays the benefit directly to each retiree"],
            correctIndex: 0,
            explanation: "The plan promises a benefit computed by a formula and the employer must fund that promise, which is why it carries the uncertainty.",
            sourceLessonSlug: "the-plan-document-governs",
          },
          {
            prompt: "In an individual account plan, what is the thing that is actually defined?",
            options: ["The contribution", "The benefit, which is fixed by a formula based on pay and years of service", "The rate of return, which the plan sponsor is obliged to credit each year", "The retirement date, after which no further contributions may be accepted"],
            correctIndex: 0,
            explanation: "What goes in is defined and what comes out is whatever the account holds when it is taken, which is why the participant bears the uncertainty.",
            sourceLessonSlug: "the-plan-document-governs",
          },
          {
            prompt: "A 401(k) is which kind of plan?",
            options: ["An individual account plan", "A defined benefit plan funded entirely by the sponsoring employer", "A multiemployer arrangement governed by a collective bargaining agreement", "An insurance contract issued to the employer for the benefit of its employees"],
            correctIndex: 0,
            explanation: "The same statute also calls it a defined contribution plan, and the label decides the vesting rules that apply.",
            sourceLessonSlug: "the-plan-document-governs",
          },
          {
            prompt: "Whom does the plan document legally bind?",
            options: ["The plan's fiduciaries", "The participant, who may not question any term after enrolling in the plan", "The Secretary of Labor, who must approve each amendment before it takes effect", "The recordkeeper alone, since it is the party that performs the administration"],
            correctIndex: 0,
            explanation: "A fiduciary must discharge duties in accordance with the documents and instruments governing the plan, which is why the document is worth reading.",
            sourceLessonSlug: "the-plan-document-governs",
          },
          {
            prompt: "The duty to follow the plan documents applies insofar as those documents are what?",
            options: ["Consistent with the statute", "Written in language a participant without legal training can follow", "Filed with the agency that supervises employee benefit plans each year", "Approved by a majority of the participants covered by the arrangement"],
            correctIndex: 0,
            explanation: "The statutory phrase is that the documents must be consistent with the provisions of the relevant subchapters, so an unlawful term does not bind.",
            sourceLessonSlug: "the-plan-document-governs",
          },
          {
            prompt: "What must a plan administrator furnish to a participant who asks in writing?",
            options: ["The governing documents", "A projection of the balance the participant can expect at retirement age", "A written recommendation about which investment alternative to select", "A statement of the employer's total contributions to the plan since inception"],
            correctIndex: 0,
            explanation: "The statute lists the latest updated summary plan description, the latest annual report, any terminal report, and the instruments the plan operates under.",
            sourceLessonSlug: "the-plan-document-governs",
          },
          {
            prompt: "Which document on the statutory list is the one most participants never think to ask for?",
            options: ["The trust agreement", "The summary plan description, which most plans supply to new hires anyway", "The enrolment form, which a participant completes when first joining the plan", "The quarterly benefit statement, which arrives without any request being made"],
            correctIndex: 0,
            explanation: "The list includes the bargaining agreement, the trust agreement and other instruments, not merely the friendly summary.",
            sourceLessonSlug: "the-plan-document-governs",
          },
          {
            prompt: "May an administrator charge for producing the requested copies?",
            options: ["Yes, a reasonable amount", "No, the statute requires every copy to be furnished entirely free of charge", "Only if the participant has already requested the same documents that year", "Only where the plan covers fewer than one hundred participants in total"],
            correctIndex: 0,
            explanation: "The statute permits a reasonable charge to cover the cost of furnishing complete copies, subject to regulation of the maximum.",
            sourceLessonSlug: "the-plan-document-governs",
          },
          {
            prompt: "How long does the administrator have to respond before the penalty provision can apply?",
            options: ["30 days", "Ten business days, counted from the date the written request is postmarked", "Ninety days, matching the deadline for filing the plan's annual report", "Three years, three months and fifteen days, matching the earnings record rule"],
            correctIndex: 0,
            explanation: "The provision runs from a failure or refusal to mail the material within 30 days after the request.",
            sourceLessonSlug: "the-plan-document-governs",
          },
          {
            prompt: "Where must the requested material be mailed?",
            options: ["Your last known address", "The address of the employer's principal place of business in that state", "The office of the agency that supervises employee benefit plans nationally", "Any address the administrator selects, provided delivery can be evidenced"],
            correctIndex: 0,
            explanation: "The statute speaks of mailing the material requested to the last known address of the requesting participant or beneficiary.",
            sourceLessonSlug: "the-plan-document-governs",
          },
          {
            prompt: "What per-day amount is printed in the statute for an administrator's failure to furnish?",
            options: ["Up to 100 dollars", "A fixed sum of 500 dollars for each separate document that is withheld", "An amount equal to one percent of the participant's account balance daily", "Whatever the participant can prove they lost as a result of the refusal"],
            correctIndex: 0,
            explanation: "The printed figure is up to 100 dollars a day from the date of the failure or refusal, plus any other relief a court thinks proper.",
            sourceLessonSlug: "the-plan-document-governs",
          },
          {
            prompt: "Who decides whether that per-day amount is imposed?",
            options: ["A court", "The plan administrator, on reviewing the participant's written complaint", "The recordkeeper, which deducts the amount from the plan's expense account", "The employer, once its own internal grievance process has been exhausted"],
            correctIndex: 0,
            explanation: "The statute makes the administrator liable in a court's discretion, so this is litigation rather than a button a participant presses.",
            sourceLessonSlug: "the-plan-document-governs",
          },
          {
            prompt: "Why does the lesson say the printed 100 dollars is not necessarily the operative figure?",
            options: ["It is adjusted for inflation", "Because courts have consistently declined to award the maximum in practice", "Because the amount varies by state under the law where the plan is located", "Because the figure applies only to plans with more than one hundred participants"],
            correctIndex: 0,
            explanation: "Federal civil penalties of this kind are adjusted on their own schedule, so the operative daily maximum is higher and has to be looked up.",
            sourceLessonSlug: "the-plan-document-governs",
          },
          {
            prompt: "On what date were the statutes in this lesson read for the course?",
            options: ["29 August 2026", "1 March 2025, the reference month of the employee benefits survey data", "29 December 2022, the date the automatic enrollment requirement was enacted", "18 March 2026, the publication date of the report on worker participation"],
            correctIndex: 0,
            explanation: "The course dates every reading, because a figure printed in a statute can be superseded by an adjustment made elsewhere.",
            sourceLessonSlug: "the-plan-document-governs",
          },
          {
            prompt: "When someone tells you what your plan does, what is the correct next question?",
            options: ["Which document says so", "How much of my pay should I be deferring to get the most out of it", "What return has the plan's default investment produced in recent years", "Which of the plan's investment alternatives do most colleagues choose"],
            correctIndex: 0,
            explanation: "Then ask for that document in writing, which is the habit this whole series is built to install.",
            sourceLessonSlug: "the-plan-document-governs",
          },
          {
            prompt: "What does a plan's shape, defined benefit or individual account, decide?",
            options: ["Who bears investment risk", "Which federal agency is responsible for supervising the arrangement", "Whether the employer may deduct its contributions from taxable income", "How often the plan is required to send a benefit statement to participants"],
            correctIndex: 0,
            explanation: "It also changes the vesting rules that apply, which Section 2 works through in detail.",
            sourceLessonSlug: "the-plan-document-governs",
          },
          {
            prompt: "What is a summary plan description?",
            options: ["The participant-facing explanation", "The annual financial report the plan files with the supervising agency", "The instrument under which the plan's assets are held and invested", "The agreement between the employer and a union covering plan benefits"],
            correctIndex: 0,
            explanation: "It is one of the documents an administrator must supply on written request, and the one most participants have already seen.",
            sourceLessonSlug: "the-plan-document-governs",
          },
          {
            prompt: "What is a plan administrator, in the sense this lesson uses?",
            options: ["Whoever runs the plan", "The financial firm that holds the plan's assets in a custodial account", "The government office that reviews and approves each plan's written terms", "The committee of participants elected to represent employees to the sponsor"],
            correctIndex: 0,
            explanation: "The administrator is the party responsible for running the plan, including furnishing documents to a participant who asks in writing.",
            sourceLessonSlug: "the-plan-document-governs",
          },
          {
            prompt: "Besides the trust agreement, which negotiated instrument appears on the statutory list?",
            options: ["The bargaining agreement", "The employment contract signed by each individual participating employee", "The service agreement between the plan and its investment consultant", "The insurance policy covering the plan's fiduciaries against liability"],
            correctIndex: 0,
            explanation: "The list names the bargaining agreement, trust agreement, contract, or other instruments under which the plan is established or operated.",
            sourceLessonSlug: "the-plan-document-governs",
          },
          {
            prompt: "Which periodic filing is also on the list of documents available on written request?",
            options: ["The latest annual report", "The quarterly statement of the participant's own individual account balance", "The monthly reconciliation of contributions received against payroll records", "The five-year projection of the plan's expected funding obligations"],
            correctIndex: 0,
            explanation: "The statute names the latest updated summary plan description, the latest annual report, and any terminal report.",
            sourceLessonSlug: "the-plan-document-governs",
          },
        ],
      },
    },
  ],
};

