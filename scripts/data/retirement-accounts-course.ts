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
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2 — The match, the vesting schedule, and what leaving does
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-match-is-a-plan-term",
      title: "5 · The match is compensation with a condition, not a return",
      section: "Section 2 · The match, the schedule, and what leaving does",
      body: `An employer match is routinely described as free money. It is not free and it is not a return. It is **compensation**, offered on a condition, and the condition is written in the plan document.

**What a match is.** The plan says that if you defer some of your own pay into the plan, the employer will contribute an amount computed by a formula in the document. The formula is a term of your employment package in the same way a wage rate is. Two employers offering the same salary and different match formulas are offering different total compensation, and the only place the difference is stated precisely is the plan document.

**Why calling it a return is a category error.** A return is what an investment produces. A match is what an employer pays. If the plan's formula produces a contribution when you defer, that contribution is produced by a rule, not by a market, and it happens whatever the assets in the account do. Keeping the two apart matters, because the moment someone describes a match as a guaranteed return they have started comparing a term of employment against an investment outcome, and those are not comparable things.

**One half of the account is yours the instant it exists.** For an arrangement to qualify under the Internal Revenue Code, the plan must provide "that an employee's right to his accrued benefit derived from employer contributions made to the trust pursuant to his election is nonforfeitable" (26 U.S.C. § 401, n.d.). That is the money you elected to defer out of your own pay. The parallel rule for plans generally says a plan satisfies the requirement "if an employee's rights in his accrued benefit derived from his own contributions are nonforfeitable" (26 U.S.C. § 411, n.d.; see also 29 U.S.C. § 1053, n.d.). So the deferrals you make cannot be taken back by anyone, ever, on any schedule.

**The other half can be conditional, and usually is.** Amounts the employer contributes on top may be subject to a vesting schedule. That is the next lesson, and it is the single most misunderstood term in this subject.

**A match can also be changed, but not retroactively.** A sponsor may generally amend a plan going forward, including changing or suspending a match formula for future contributions. What it may not do is reach backwards: a plan fails the qualification requirements "if the accrued benefit of a participant is decreased by an amendment of the plan", subject to narrow exceptions the statute names (26 U.S.C. § 411, n.d.). That is usually called the anti-cutback rule, and it is why the correct mental model of a match is "a term that applies to contributions made while it is in force" rather than "a promise about your career".

**What this lesson does not do.** It does not tell you to defer enough to obtain the whole match, and it will not. Whether you can spare the money at all is a question about your rent, your household and your other obligations, and Section 1 of this series taught that a person in the lowest-paid quarter of private-sector occupations is more likely than not to have no plan on offer in the first place. What this lesson does is make the term legible, so that if you do face the choice you are reading a rule instead of guessing at one.

**The practical move.** The match formula is in the summary plan description, and the summary plan description is one of the documents an administrator must furnish on written request. Read the formula, then read whatever conditions sit next to it: some plans require you to be employed on a particular date for a contribution to be made at all, and that is a term, not a rumour.

:::reveal Why is calling an employer match a guaranteed return a category error? ||| A return is produced by an investment. A match is produced by a rule in the plan document and happens whatever the assets do.

:::reveal Which part of a 401(k) account can never be forfeited? ||| The part derived from the employee's own elected deferrals, which the Code requires to be nonforfeitable.

:::reveal What does the anti-cutback rule prevent a plan amendment from doing? ||| Decreasing a participant's accrued benefit, subject to the narrow exceptions the statute names.

## Vocabulary
- **Match**: an employer contribution computed by a plan formula and conditioned on the employee deferring some of their own pay, which makes it compensation rather than investment return.
- **Elective deferral**: pay an employee chooses to have contributed to the plan instead of received, and the part of the account the Code makes nonforfeitable.
- **Nonforfeitable**: incapable of being lost, so that no schedule, condition or later amendment can take the amount away.
- **Anti-cutback rule**: the requirement that a plan amendment may not decrease a participant's accrued benefit, which limits amendments to future contributions.
- **Plan amendment**: a change to the plan document made by the sponsor, generally effective going forward rather than backwards.

## Sources
26 U.S.C. § 401. (n.d.). *Qualified pension, profit-sharing, and stock bonus plans*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/401

26 U.S.C. § 411. (n.d.). *Minimum vesting standards*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/411

29 U.S.C. § 1053. (n.d.). *Minimum vesting standards*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/29/1053`,
    },
    {
      slug: "vesting-is-a-retention-device",
      title: "6 · Vesting is a retention device, and the statute caps how long it can run",
      section: "Section 2 · The match, the schedule, and what leaving does",
      body: `Vesting is the answer to one question: when does the employer's contribution stop being conditional and become yours?

**Say what it is for.** A vesting schedule makes part of your compensation contingent on staying. That is its purpose. It is not an administrative formality, it is a retention device, and understanding it that way explains every design choice in it. An employer that wants people to stay three years writes a schedule that pays off at three years.

**Congress capped how long the condition may run**, which is why this is a legal question rather than a matter of employer discretion. For an individual account plan, the statute gives an employer two shapes to choose between, and no others.

- **Cliff.** The plan satisfies the rule "if an employee who has completed at least 3 years of service has a nonforfeitable right to 100 percent of the employee's accrued benefit derived from employer contributions" (29 U.S.C. § 1053, n.d.). Nothing before three years, everything at three.
- **Graded.** Or the plan uses the table the statute prints: 2 years, 20 percent; 3 years, 40; 4 years, 60; 5 years, 80; 6 or more years, 100 (29 U.S.C. § 1053, n.d.).

**A defined benefit plan gets longer schedules**, which is the clearest place the two plan shapes diverge. There the permitted cliff is at least 5 years of service to 100 percent, and the permitted graded table runs 3 years at 20 percent, 4 at 40, 5 at 60, 6 at 80, and 7 or more at 100 (29 U.S.C. § 1053, n.d.).

**Read the shape of those two tables against each other.** In the individual account graded schedule, half your employer's contributions are conditional until your fourth year. In the defined benefit graded schedule the same halfway point falls a year later. Every one of those numbers is a maximum on the condition, not a requirement: a plan may vest faster, including immediately, and many do. What a plan may not do is run longer.

**None of this touches your own deferrals.** The rule from the last lesson holds throughout: an employee's rights in the accrued benefit derived from their own contributions are nonforfeitable, full stop (29 U.S.C. § 1053, n.d.). A vesting schedule can only ever apply to what the employer put in.

**What "a year of service" means is itself a plan term**, and it is the detail that trips people. Service is generally measured by a period and an hours threshold defined in the plan document rather than by the anniversary of your start date, and a plan may or may not count service before it existed. This is exactly the kind of question the summary plan description answers and a colleague does not.

**Why this matters more than the match percentage.** Two offers with identical match formulas are not identical if one vests immediately and the other has a three-year cliff. The second is offering the same compensation with a condition attached, and the value of the condition depends on something neither you nor the employer knows: how long you will actually be there. The reason this course insists on reading the schedule is not that one shape is better. It is that the schedule is the term that decides whether the compensation you were quoted is compensation you will receive.

:::reveal What is a vesting schedule for? ||| It makes part of your compensation contingent on staying, which is a retention device rather than an administrative formality.

:::reveal What is the longest cliff a statute permits for employer contributions to an individual account plan? ||| Three years of service to 100 percent, after which nothing further may be conditional.

:::reveal Can a vesting schedule ever apply to your own elective deferrals? ||| No. Rights in the accrued benefit derived from an employee's own contributions are nonforfeitable.

## Vocabulary
- **Vesting**: the point at which an employer contribution stops being conditional and becomes the participant's own, which the statute caps but does not require a plan to delay.
- **Cliff vesting**: a schedule under which nothing is nonforfeitable until a stated number of years of service, and then all of it is.
- **Graded vesting**: a schedule under which a stated percentage becomes nonforfeitable each year, following the table the statute prints.
- **Year of service**: a period and hours threshold defined in the plan document, which is why it is rarely the same thing as an anniversary of a start date.
- **Accrued benefit**: the amount credited to a participant under the plan, part of which may still be conditional if a vesting schedule applies to employer contributions.

## Sources
29 U.S.C. § 1053. (n.d.). *Minimum vesting standards*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/29/1053

26 U.S.C. § 411. (n.d.). *Minimum vesting standards*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/411`,
    },
    {
      slug: "what-leaving-does",
      title: "7 · What leaving does, and the four things that can happen next",
      section: "Section 2 · The match, the schedule, and what leaving does",
      body: `Leaving a job is the moment every term in Section 2 becomes concrete at once. Four separate rules fire, and they fire in a particular order.

**First, the unvested part is forfeited.** Whatever employer contributions had not yet vested under the schedule are gone. Not delayed, not held: gone. That is what the word conditional meant all along, and it is why the schedule was worth reading on the day you joined rather than on the day you left.

**Second, the money becomes distributable, but only on stated events.** The Code does not let a plan hand out elective deferrals whenever it likes. Amounts attributable to those deferrals "may not be distributable to participants or other beneficiaries earlier than" a closed list of events, of which the first is "severance from employment, death, or disability", and which also includes attainment of age 59 and a half in a profit-sharing or stock bonus plan, and hardship (26 U.S.C. § 401, n.d.). Leaving is one of the listed events. Wanting the money is not.

**Third, you have a right to move it without touching it.** If you elect to have an eligible rollover distribution paid directly to an eligible retirement plan and you name that plan, "such distribution shall be made in the form of a direct trustee-to-trustee transfer to the eligible retirement plan so specified" (26 U.S.C. § 401, n.d.). The phrase to hold on to is trustee-to-trustee. The money moves between institutions rather than through your hands, which is the difference between a transfer and a distribution.

**Fourth, and least known: a small balance can be moved without you.** A plan need not keep a small account. If the present value of your nonforfeitable accrued benefit does not exceed 7,000 dollars, the plan may distribute it without your consent; the consent requirement attaches only above that figure (26 U.S.C. § 411, n.d.). And where such a mandatory distribution exceeds 1,000 dollars and you make no election, the plan administrator must transfer it "to an individual retirement plan of a designated trustee or issuer" rather than sending you a cheque (26 U.S.C. § 401, n.d.). Both figures are printed in the statute and were read on 29 August 2026; both have been changed by legislation before, so check them before relying on either.

**That fourth rule is how retirement accounts get lost.** A balance under the threshold leaves with the job, lands in an account at an institution chosen by somebody else, and is remembered by nobody. The defence is administrative rather than financial: know the plan, know the recordkeeper, and keep the address they have for you current.

**And the tax rule that sits behind all of it.** If a taxpayer receives an amount from a qualified retirement plan, the tax "shall be increased by an amount equal to 10 percent of the portion of such amount which is includible in gross income" (26 U.S.C. § 72, n.d.). That is an additional tax on top of ordinary income tax, and the statute then lists exceptions, including distributions made on or after age 59 and a half, on death, on disability, as substantially equal periodic payments, and after separation from service after attaining age 55 (26 U.S.C. § 72, n.d.). This course does not tell you what to do at that fork. It tells you that the fork exists, that the additional tax is a statutory consequence rather than a penalty someone chose to impose on you, and that the exceptions are a list you can read.

:::reveal What happens to unvested employer contributions when you leave? ||| They are forfeited. That is what the vesting condition meant.

:::reveal What is a trustee-to-trustee transfer? ||| A direct movement of an eligible rollover distribution between institutions, so the money never passes through the participant's hands.

:::reveal Above what present value does a plan need your consent before distributing your benefit? ||| 7,000 dollars as the statute prints it, read on 29 August 2026 and worth re-checking.

## Vocabulary
- **Forfeiture**: the loss of employer contributions that had not vested under the plan's schedule at the moment employment ended.
- **Severance from employment**: one of the closed list of events on which amounts attributable to elective deferrals may be distributed at all.
- **Eligible rollover distribution**: a distribution a participant may direct into another eligible retirement plan, which the statute requires to be made as a direct transfer when the participant so elects.
- **Mandatory distribution**: a small-balance distribution a plan may make without the participant's consent, which above a stated figure must be transferred into an individual retirement plan rather than paid out.
- **Additional tax**: the 10 percent charge on the includible portion of a distribution from a qualified retirement plan, subject to a list of statutory exceptions.

## Sources
26 U.S.C. § 72. (n.d.). *Annuities; certain proceeds of endowment and life insurance contracts*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/72

26 U.S.C. § 401. (n.d.). *Qualified pension, profit-sharing, and stock bonus plans*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/401

26 U.S.C. § 411. (n.d.). *Minimum vesting standards*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/411`,
    },
    {
      slug: "quiz-match-vesting-leaving",
      title: "8 · Knowledge check: the match, the schedule, and what leaving does",
      section: "Section 2 · The match, the schedule, and what leaving does",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "In this course's terms, what is an employer match?",
            options: ["Compensation with a condition", "A guaranteed rate of return credited to the account each pay period", "An investment the plan's trustee makes on behalf of every participant", "A tax credit the government pays into the account of a saving employee"],
            correctIndex: 0,
            explanation: "The condition is deferring some of your own pay, and the formula that computes it is a term of the plan document.",
            sourceLessonSlug: "the-match-is-a-plan-term",
          },
          {
            prompt: "Where is the match formula stated precisely?",
            options: ["The plan document", "The offer letter the employer sends before an employee's first day", "The quarterly account statement produced by the plan's recordkeeper", "The annual notice the tax authority publishes for the coming year"],
            correctIndex: 0,
            explanation: "The summary plan description carries it, and that summary is one of the documents an administrator must furnish on written request.",
            sourceLessonSlug: "the-match-is-a-plan-term",
          },
          {
            prompt: "Two employers offer the same salary with different match formulas. What follows?",
            options: ["They offer different compensation", "The difference is an investment choice rather than a difference in pay", "The formulas must be equalised because federal law requires comparability", "Neither difference matters until the employee has vested under the schedule"],
            correctIndex: 0,
            explanation: "The match is part of the package in the same way a wage rate is, and the plan document is where the difference is written down.",
            sourceLessonSlug: "the-match-is-a-plan-term",
          },
          {
            prompt: "Why is describing a match as a guaranteed return a category error?",
            options: ["A return comes from an investment", "Because the match is smaller than any return the account is likely to earn", "Because a return is taxed differently from the contribution that produced it", "Because the employer may reclaim the contribution if the market falls"],
            correctIndex: 0,
            explanation: "A match is produced by a rule in a document and happens whatever the assets do, so it is not comparable to an investment outcome.",
            sourceLessonSlug: "the-match-is-a-plan-term",
          },
          {
            prompt: "Which part of a 401(k) account is nonforfeitable from the moment it exists?",
            options: ["Your own elective deferrals", "The employer's matching contribution, once the formula has been applied", "Any amount rolled in from a previous employer's plan within sixty days", "The portion invested in the plan's default investment alternative"],
            correctIndex: 0,
            explanation: "The Code requires the plan to provide that the right to the accrued benefit derived from contributions made pursuant to the employee's election is nonforfeitable.",
            sourceLessonSlug: "the-match-is-a-plan-term",
          },
          {
            prompt: "What does nonforfeitable mean?",
            options: ["It cannot be lost", "It may be distributed at any time the participant chooses to request it", "It is exempt from the additional tax that applies to an early distribution", "It is guaranteed by a federal insurance fund up to a stated dollar limit"],
            correctIndex: 0,
            explanation: "No schedule, condition or later amendment can take a nonforfeitable amount away.",
            sourceLessonSlug: "the-match-is-a-plan-term",
          },
          {
            prompt: "Which part of the account may be subject to a vesting schedule?",
            options: ["The employer's contributions", "The employee's own deferrals, once they exceed the annual dollar limit", "Any earnings the account produces after the first full year of service", "Amounts rolled in from a plan maintained by a different employer"],
            correctIndex: 0,
            explanation: "A vesting schedule can only ever apply to what the employer put in, never to what the employee elected to defer.",
            sourceLessonSlug: "the-match-is-a-plan-term",
          },
          {
            prompt: "May a sponsor change a match formula for future contributions?",
            options: ["Generally yes", "No, a match formula is fixed for the life of the plan once adopted", "Only with the written consent of a majority of participating employees", "Only where the plan has fewer than one hundred participants in total"],
            correctIndex: 0,
            explanation: "A sponsor may generally amend a plan going forward, including changing or suspending a match for future contributions.",
            sourceLessonSlug: "the-match-is-a-plan-term",
          },
          {
            prompt: "What does the anti-cutback rule forbid?",
            options: ["Decreasing an accrued benefit by amendment", "Suspending an employer match formula for contributions made in future years", "Changing the investment alternatives a plan makes available to participants", "Adopting a longer vesting schedule for employees hired after the change"],
            correctIndex: 0,
            explanation: "A plan is treated as failing the requirements if a participant's accrued benefit is decreased by an amendment, subject to narrow statutory exceptions.",
            sourceLessonSlug: "the-match-is-a-plan-term",
          },
          {
            prompt: "What is the correct mental model of a match, given the anti-cutback rule?",
            options: ["A term applying while it is in force", "A promise the employer makes covering the whole of an employee's career", "An investment return the plan is obliged to credit in every future year", "A guarantee enforceable against the employer even after the plan terminates"],
            correctIndex: 0,
            explanation: "It applies to contributions made while the formula is in force, and it cannot be reached backwards.",
            sourceLessonSlug: "the-match-is-a-plan-term",
          },
          {
            prompt: "Does this lesson tell you to defer enough to capture the entire match?",
            options: ["No", "Yes, because the match is the highest-value term in most plan documents", "Yes, provided the employee has already vested under the plan's schedule", "Yes, but only for employees at establishments with 500 or more workers"],
            correctIndex: 0,
            explanation: "Whether a household can spare the money is a fact about rent and obligations that the course does not know, so it makes the term legible instead.",
            sourceLessonSlug: "the-match-is-a-plan-term",
          },
          {
            prompt: "Which condition do some plans attach to whether a matching contribution is made at all?",
            options: ["Employment on a stated date", "Completion of the plan's full vesting schedule before any match is credited", "A minimum account balance maintained throughout the whole of the plan year", "Participation in the plan's default investment alternative for that year"],
            correctIndex: 0,
            explanation: "Some plans require a participant to be employed on a particular date for the contribution to be made, which is a term rather than a rumour.",
            sourceLessonSlug: "the-match-is-a-plan-term",
          },
          {
            prompt: "What is an elective deferral?",
            options: ["Pay contributed instead of received", "An employer contribution the participant elects to have invested a certain way", "A distribution the participant elects to postpone past the normal retirement age", "A transfer the participant elects to make from one plan to another plan"],
            correctIndex: 0,
            explanation: "It is pay the employee chooses to have contributed to the plan rather than paid out, and it is the nonforfeitable part of the account.",
            sourceLessonSlug: "the-match-is-a-plan-term",
          },
          {
            prompt: "What is the single question a vesting schedule answers?",
            options: ["When the employer's contribution becomes yours", "How much of their own pay an employee is permitted to defer each year", "Which investment alternatives a participant may select from the plan menu", "How soon after leaving a job a participant may take a distribution"],
            correctIndex: 0,
            explanation: "It fixes the point at which employer contributions stop being conditional.",
            sourceLessonSlug: "vesting-is-a-retention-device",
          },
          {
            prompt: "What is a vesting schedule actually for?",
            options: ["Retention", "Spreading the employer's funding obligation evenly across a working life", "Protecting participants from taking distributions before they are ready", "Complying with a federal requirement that all plans delay full ownership"],
            correctIndex: 0,
            explanation: "It makes part of the compensation contingent on staying, and reading it that way explains every design choice in it.",
            sourceLessonSlug: "vesting-is-a-retention-device",
          },
          {
            prompt: "For an individual account plan, what is the longest permitted cliff?",
            options: ["Three years of service", "Five years of service, which is the figure applying to defined benefit plans", "Seven years of service, matching the end of the graded table for pensions", "Six years of service, matching the end of the individual account graded table"],
            correctIndex: 0,
            explanation: "An employee completing at least 3 years of service must have a nonforfeitable right to 100 percent of the accrued benefit derived from employer contributions.",
            sourceLessonSlug: "vesting-is-a-retention-device",
          },
          {
            prompt: "In the individual account graded table, what percentage is nonforfeitable at 2 years of service?",
            options: ["20 percent", "40 percent, which is the figure the table reaches at three years instead", "60 percent, which is the figure the table reaches at four years instead", "Nothing, because graded schedules begin only after three years of service"],
            correctIndex: 0,
            explanation: "The statutory table runs 2 years at 20 percent, 3 at 40, 4 at 60, 5 at 80, and 6 or more at 100.",
            sourceLessonSlug: "vesting-is-a-retention-device",
          },
          {
            prompt: "In that same table, at how many years does 100 percent become nonforfeitable?",
            options: ["Six", "Seven, matching the end point of the defined benefit graded table", "Three, matching the cliff alternative available to the same plan type", "Five, matching the cliff alternative available to defined benefit plans"],
            correctIndex: 0,
            explanation: "The individual account graded table ends at 6 or more years of service at 100 percent.",
            sourceLessonSlug: "vesting-is-a-retention-device",
          },
          {
            prompt: "For a defined benefit plan, what is the permitted cliff?",
            options: ["Five years of service", "Three years of service, which is the figure for individual account plans", "Two years of service, which is where the graded table begins to pay out", "Seven years of service, which is where the graded table finishes instead"],
            correctIndex: 0,
            explanation: "The defined benefit cliff runs to at least 5 years of service for 100 percent of the accrued benefit derived from employer contributions.",
            sourceLessonSlug: "vesting-is-a-retention-device",
          },
          {
            prompt: "Where does the defined benefit graded table begin?",
            options: ["3 years at 20 percent", "2 years at 20 percent, matching the individual account plan table exactly", "4 years at 40 percent, one step later than the individual account table", "5 years at 60 percent, which is where the two tables happen to converge"],
            correctIndex: 0,
            explanation: "It runs 3 years at 20 percent, 4 at 40, 5 at 60, 6 at 80, and 7 or more at 100.",
            sourceLessonSlug: "vesting-is-a-retention-device",
          },
          {
            prompt: "Are the statutory vesting schedules a floor or a ceiling on how long the condition may run?",
            options: ["A ceiling", "A floor, so a plan may not vest employer contributions any faster than shown", "Both, since the statute requires the plan to use exactly one of the two tables", "Neither, since the schedules are guidance a sponsor may depart from freely"],
            correctIndex: 0,
            explanation: "A plan may vest faster, including immediately, and many do. What it may not do is run longer.",
            sourceLessonSlug: "vesting-is-a-retention-device",
          },
          {
            prompt: "Comparing the two graded tables, when does half of the employer's contribution stop being conditional?",
            options: ["A year later for a pension", "At the same point, because both tables reach 60 percent at four years", "A year earlier for a pension, since its schedule begins at three years", "Immediately in both, because the halfway point is not a statutory concept"],
            correctIndex: 0,
            explanation: "The individual account table passes the halfway mark in the fourth year and the defined benefit table a year later.",
            sourceLessonSlug: "vesting-is-a-retention-device",
          },
          {
            prompt: "How is a year of service usually determined?",
            options: ["By a plan term", "By the anniversary of the employee's first day of work at the employer", "By the calendar year in which the employee first made an elective deferral", "By a federal regulation that fixes the same definition for every plan"],
            correctIndex: 0,
            explanation: "Service is generally measured by a period and an hours threshold defined in the plan document, which is rarely the same as a start-date anniversary.",
            sourceLessonSlug: "vesting-is-a-retention-device",
          },
          {
            prompt: "Which document answers whether service before a plan existed counts toward vesting?",
            options: ["The summary plan description", "The annual notice of adjusted dollar limits published by the tax authority", "The quarterly statement showing what the participant was actually charged", "The statute itself, which fixes the answer identically for every plan"],
            correctIndex: 0,
            explanation: "That is a plan term, which is why the lesson sends you to the document rather than to a colleague.",
            sourceLessonSlug: "vesting-is-a-retention-device",
          },
          {
            prompt: "Two job offers have identical match formulas but different vesting. What does the difference turn on?",
            options: ["How long you stay", "Which employer contributes to the plan earlier in the calendar year", "Whether the plans use the same recordkeeper to administer the accounts", "Whether the employer contributions are made in cash or in employer stock"],
            correctIndex: 0,
            explanation: "The condition's value depends on something neither party knows in advance, which is why the schedule is the term that decides what you actually receive.",
            sourceLessonSlug: "vesting-is-a-retention-device",
          },
          {
            prompt: "Does this lesson say that one vesting shape is better than the other?",
            options: ["No", "Yes, cliff vesting is better because it reaches 100 percent in one step", "Yes, graded vesting is better because something is nonforfeitable sooner", "Yes, whichever schedule the larger employer uses is treated as the standard"],
            correctIndex: 0,
            explanation: "The point is that the schedule is a term you should read, not that either shape wins.",
            sourceLessonSlug: "vesting-is-a-retention-device",
          },
          {
            prompt: "Under a three-year cliff, what is nonforfeitable from employer contributions after two years?",
            options: ["Nothing", "Twenty percent, following the graded table the same statute prints", "Forty percent, since two full years have been completed under the plan", "All of it, because the employee's own deferrals are always nonforfeitable"],
            correctIndex: 0,
            explanation: "A cliff pays nothing before the stated point and everything at it, which is what makes it a cliff.",
            sourceLessonSlug: "vesting-is-a-retention-device",
          },
          {
            prompt: "What happens to unvested employer contributions when you leave a job?",
            options: ["They are forfeited", "They are held by the plan until the employee returns to the same employer", "They are transferred to an individual retirement plan chosen by the trustee", "They vest automatically, because separation from service completes the schedule"],
            correctIndex: 0,
            explanation: "Not delayed and not held: gone. That is what the word conditional meant all along.",
            sourceLessonSlug: "what-leaving-does",
          },
          {
            prompt: "Which of these is on the closed statutory list of events allowing distribution of elective deferrals?",
            options: ["Severance from employment", "A participant's written request made at any time after enrolling", "The plan's decision to change recordkeepers during the plan year", "A drop in the value of the investment alternative the participant selected"],
            correctIndex: 0,
            explanation: "The list begins with severance from employment, death, or disability, and wanting the money is not on it.",
            sourceLessonSlug: "what-leaving-does",
          },
          {
            prompt: "In a profit-sharing or stock bonus plan, which age appears on the distribution-events list?",
            options: ["59 and a half", "55, which appears instead among the exceptions to the additional tax", "62, which is the early retirement age used by the Social Security statute", "67, which is the retirement age for people attaining age 62 after 2021"],
            correctIndex: 0,
            explanation: "Attainment of age 59 and a half is one of the listed events for a profit-sharing or stock bonus plan.",
            sourceLessonSlug: "what-leaving-does",
          },
          {
            prompt: "What phrase describes the way an elected rollover must be paid?",
            options: ["A trustee-to-trustee transfer", "A distribution paid to the participant and redeposited within sixty days", "A cash payment made after the plan withholds the applicable income tax", "A transfer routed through the employer's payroll department each quarter"],
            correctIndex: 0,
            explanation: "The money moves between institutions rather than through your hands, which is what distinguishes a transfer from a distribution.",
            sourceLessonSlug: "what-leaving-does",
          },
          {
            prompt: "What must a participant do to trigger the direct transfer requirement?",
            options: ["Elect it and name the plan", "Wait until the plan's next quarterly processing window has opened", "Obtain the written consent of the employer that sponsored the old plan", "Have completed the plan's vesting schedule in full before separating"],
            correctIndex: 0,
            explanation: "The statute applies where the distributee elects to have the distribution paid directly to an eligible retirement plan and specifies which one.",
            sourceLessonSlug: "what-leaving-does",
          },
          {
            prompt: "Above what present value does a plan need your consent before distributing your benefit?",
            options: ["7,000 dollars", "1,000 dollars, which is the figure triggering the automatic transfer instead", "15,000 dollars, which is the elective deferral base printed in the statute", "Any amount at all, because consent is always required before a distribution"],
            correctIndex: 0,
            explanation: "The consent requirement attaches where the present value of the nonforfeitable accrued benefit exceeds the printed figure of 7,000 dollars.",
            sourceLessonSlug: "what-leaving-does",
          },
          {
            prompt: "Where a mandatory distribution exceeds 1,000 dollars and you make no election, what must the administrator do?",
            options: ["Transfer it to an individual retirement plan", "Hold the amount in the plan until the participant provides instructions", "Send a cheque to the participant's last address on the payroll record", "Return the amount to the employer as a forfeiture under the plan terms"],
            correctIndex: 0,
            explanation: "The statute requires a transfer to an individual retirement plan of a designated trustee or issuer rather than a payment to the participant.",
            sourceLessonSlug: "what-leaving-does",
          },
          {
            prompt: "How does the lesson say retirement accounts get lost?",
            options: ["A small balance leaves with the job", "Employers routinely fail to report contributions to the supervising agency", "Recordkeepers destroy account records after a fixed number of dormant years", "Plans are permitted to forfeit vested balances that go unclaimed for a decade"],
            correctIndex: 0,
            explanation: "It lands at an institution somebody else chose and is remembered by nobody, which is why the defence is administrative.",
            sourceLessonSlug: "what-leaving-does",
          },
          {
            prompt: "What defence does the lesson recommend against losing track of an old account?",
            options: ["Keep your address current", "Consolidate every old account into whichever plan charges the lowest fee", "Take the distribution in cash so that no institution holds it on your behalf", "Ask the employer to keep the account open until you return to that employer"],
            correctIndex: 0,
            explanation: "Know the plan, know the recordkeeper, and keep the address they have for you current. The defence is administrative rather than financial.",
            sourceLessonSlug: "what-leaving-does",
          },
          {
            prompt: "What is the additional tax on the includible portion of a distribution from a qualified retirement plan?",
            options: ["10 percent", "20 percent, which is the rate at which the plan must withhold income tax", "A rate set annually by the tax authority in the same notice as the limits", "Whatever the participant's marginal income tax rate is in the year received"],
            correctIndex: 0,
            explanation: "The statute increases the tax by an amount equal to 10 percent of the portion includible in gross income, and then lists exceptions.",
            sourceLessonSlug: "what-leaving-does",
          },
          {
            prompt: "Which of these appears among the statutory exceptions to that additional tax?",
            options: ["Disability", "Buying a first car, provided the distribution is repaid within five years", "Any distribution taken after the participant has completed vesting in full", "A distribution made in the same calendar year the participant changed jobs"],
            correctIndex: 0,
            explanation: "The listed exceptions include age 59 and a half, death, disability, substantially equal periodic payments, and separation from service after age 55.",
            sourceLessonSlug: "what-leaving-does",
          },
          {
            prompt: "Which age appears in the separation-from-service exception to the additional tax?",
            options: ["55", "59 and a half, which is the age used in the general age-based exception", "62, the early retirement age defined in the Social Security statute", "67, the retirement age for individuals attaining age 62 after 2021"],
            correctIndex: 0,
            explanation: "The exception covers separation from service after attaining age 55, which is distinct from the age 59 and a half exception.",
            sourceLessonSlug: "what-leaving-does",
          },
          {
            prompt: "How does the lesson characterise the 10 percent charge?",
            options: ["A statutory consequence", "A penalty a plan administrator chooses to impose on an impatient participant", "A fee the recordkeeper charges for processing an out-of-cycle distribution", "A withholding the employer applies and later refunds after the tax year ends"],
            correctIndex: 0,
            explanation: "It is written into the Code rather than chosen by anyone, and the exceptions are a list a reader can check.",
            sourceLessonSlug: "what-leaving-does",
          },
          {
            prompt: "Does this lesson tell you what to do with an old account when you leave a job?",
            options: ["No", "Yes, it recommends rolling the balance into the new employer's plan", "Yes, it recommends leaving the balance where it is to avoid transfer costs", "Yes, it recommends taking the distribution whenever the balance is small"],
            correctIndex: 0,
            explanation: "It says the fork exists and that the rules governing each path are readable, and it makes no recommendation.",
            sourceLessonSlug: "what-leaving-does",
          },
          {
            prompt: "When were the two dollar figures in this lesson read from the statute?",
            options: ["29 August 2026", "18 March 2026, the publication date of the worker participation report", "29 December 2022, the date the automatic enrollment section was enacted", "1 March 2025, the reference month of the employee benefits survey data"],
            correctIndex: 0,
            explanation: "Both figures have been changed by legislation before, so the lesson dates them and tells the reader to re-check.",
            sourceLessonSlug: "what-leaving-does",
          },
          {
            prompt: "Which of these does the Code NOT list as an event permitting distribution of elective deferrals?",
            options: ["Wanting the money", "Death of the participant during the course of covered employment", "Disability of the participant as defined by the governing provisions", "Hardship of the employee, subject to the provisions the statute names"],
            correctIndex: 0,
            explanation: "The list is closed and includes severance, death, disability, an age threshold in some plans, and hardship. A wish is not on it.",
            sourceLessonSlug: "what-leaving-does",
          },
          {
            prompt: "In what order does the lesson say the four rules fire when you leave a job?",
            options: ["Forfeiture, distributability, transfer, small balance", "Small balance, transfer, forfeiture, distributability, in the order the plan chooses", "Distributability first, since nothing can be forfeited until a distribution is due", "Transfer first, because the participant's election overrides every other rule"],
            correctIndex: 0,
            explanation: "The unvested part is forfeited, the money becomes distributable on a listed event, a direct transfer may be elected, and a small balance may move without you.",
            sourceLessonSlug: "what-leaving-does",
          },
          {
            prompt: "What is a mandatory distribution?",
            options: ["A small-balance distribution without consent", "A distribution the tax authority requires once a participant reaches a stated age", "A distribution the plan must make whenever a participant changes employers", "A distribution ordered by a court to satisfy a participant's outstanding debts"],
            correctIndex: 0,
            explanation: "A plan need not keep a small account, and above a further threshold that distribution must be transferred into an individual retirement plan.",
            sourceLessonSlug: "what-leaving-does",
          },
          {
            prompt: "Why does the lesson say the vesting schedule was worth reading on the day you joined?",
            options: ["Because leaving is when it bites", "Because a schedule read late cannot be challenged under the anti-cutback rule", "Because plans may amend a schedule retroactively once an employee departs", "Because the schedule determines which investment alternatives are available"],
            correctIndex: 0,
            explanation: "The forfeiture at separation is the moment the condition becomes concrete, and by then nothing about it can be changed.",
            sourceLessonSlug: "what-leaving-does",
          },
          {
            prompt: "Which of these best describes an eligible rollover distribution?",
            options: ["One a participant may direct elsewhere", "Any distribution a plan makes to a participant who has separated from service", "A distribution that is exempt from income tax because of the participant's age", "A payment the plan makes directly to a participant's bank account each month"],
            correctIndex: 0,
            explanation: "It is a distribution the participant may direct into another eligible retirement plan, which the statute then requires to be made as a direct transfer.",
            sourceLessonSlug: "what-leaving-does",
          },
          {
            prompt: "Under the mandatory-distribution rules, an eligible plan is one that provides immediate distribution below which present value?",
            options: ["7,000 dollars", "1,000 dollars, the figure that triggers the automatic transfer to an IRA", "15,000 dollars, the elective deferral base amount printed in the statute", "5,000 dollars, which was the figure before the current text was enacted"],
            correctIndex: 0,
            explanation: "The definition turns on immediate distribution of nonforfeitable accrued benefits where the present value does not exceed the printed 7,000 dollars.",
            sourceLessonSlug: "what-leaving-does",
          },
          {
            prompt: "Which statement about the employee's own deferrals survives every rule in Section 2?",
            options: ["They are always nonforfeitable", "They vest on the same schedule the employer chooses for its own contributions", "They may be forfeited if the employee leaves before completing a year of service", "They become nonforfeitable only once the participant reaches age 59 and a half"],
            correctIndex: 0,
            explanation: "A vesting schedule reaches only employer contributions, so the deferrals an employee elected are theirs from the moment they are made.",
            sourceLessonSlug: "the-match-is-a-plan-term",
          },
          {
            prompt: "What is a forfeiture, in the sense this section uses?",
            options: ["Loss of unvested employer contributions", "A tax charged on a distribution taken before a statutory age is reached", "A fee deducted from the account when a participant transfers to another plan", "The reduction of an accrued benefit by an amendment to the plan document"],
            correctIndex: 0,
            explanation: "It is the loss of employer contributions that had not vested under the schedule at the moment employment ended.",
            sourceLessonSlug: "what-leaving-does",
          },
          {
            prompt: "Which is the more consequential term when comparing two job offers, according to this section?",
            options: ["The vesting schedule", "The number of investment alternatives the plan makes available to choose from", "The identity of the recordkeeper that administers the participant's account", "The month of the year in which the employer makes its matching contribution"],
            correctIndex: 0,
            explanation: "Identical match formulas are not identical offers if one vests immediately and the other has a three-year cliff.",
            sourceLessonSlug: "vesting-is-a-retention-device",
          },
          {
            prompt: "May a plan vest employer contributions immediately?",
            options: ["Yes", "No, the statute requires a minimum of two years before anything vests", "Only for employees hired before the plan document was last amended", "Only in a defined benefit plan, where the employer funds the whole promise"],
            correctIndex: 0,
            explanation: "The statutory schedules are maximums on the condition, so a plan may vest faster, including immediately, and many do.",
            sourceLessonSlug: "vesting-is-a-retention-device",
          },
          {
            prompt: "What is an accrued benefit?",
            options: ["The amount credited under the plan", "The amount a participant is guaranteed to receive at normal retirement age", "The employer's total contribution to the plan across all participants", "The portion of an account invested in the plan's default alternative"],
            correctIndex: 0,
            explanation: "Part of it may still be conditional if a vesting schedule applies to the employer contributions within it.",
            sourceLessonSlug: "vesting-is-a-retention-device",
          },
          {
            prompt: "Which of these is a plan permitted to do to its match formula?",
            options: ["Suspend it prospectively", "Recover matching contributions already credited to a participant's account", "Reduce a participant's accrued benefit to fund the following year's match", "Apply a longer vesting schedule to contributions made in previous years"],
            correctIndex: 0,
            explanation: "Amendments generally operate forward. The anti-cutback rule blocks a decrease in an accrued benefit already earned.",
            sourceLessonSlug: "the-match-is-a-plan-term",
          },
          {
            prompt: "Why does this section insist the match is a term of employment rather than an investment feature?",
            options: ["It is produced by a rule, not a market", "Because the employer may deduct it from taxable income in the year it is made", "Because it is reported on the participant's earnings statement as taxable wages", "Because the plan's trustee selects the assets the contribution is invested in"],
            correctIndex: 0,
            explanation: "Treating it as a return invites a comparison between a term of employment and a market outcome, which are not comparable.",
            sourceLessonSlug: "the-match-is-a-plan-term",
          },
          {
            prompt: "What does Section 1 of this course already establish about the choice a match presents?",
            options: ["Many workers never face it", "That the choice is identical for every worker in the private sector", "That employers must offer a match once they offer a retirement plan", "That the match rate is set by regulation rather than by the plan sponsor"],
            correctIndex: 0,
            explanation: "A worker in the lowest-paid quarter of private-sector occupations is more likely than not to have no plan on offer at all.",
            sourceLessonSlug: "the-match-is-a-plan-term",
          },
          {
            prompt: "Which document must an administrator furnish that carries the match formula?",
            options: ["The summary plan description", "The annual report the plan files with the supervising federal agency", "The quarterly statement of fees actually charged against the account", "The trust agreement under which the plan's assets are held and invested"],
            correctIndex: 0,
            explanation: "The formula sits in the summary plan description, which is on the statutory list of documents available on written request.",
            sourceLessonSlug: "the-match-is-a-plan-term",
          },
          {
            prompt: "Under a graded schedule for an individual account plan, what is nonforfeitable at 5 years?",
            options: ["80 percent", "60 percent, which is the figure the statutory table reaches at four years", "100 percent, which the table reaches only at six or more years of service", "40 percent, which is the figure the statutory table reaches at three years"],
            correctIndex: 0,
            explanation: "The table runs 2 years at 20, 3 at 40, 4 at 60, 5 at 80, and 6 or more at 100.",
            sourceLessonSlug: "vesting-is-a-retention-device",
          },
          {
            prompt: "Under the defined benefit graded schedule, what is nonforfeitable at 6 years?",
            options: ["80 percent", "100 percent, which that table reaches only at seven or more years", "60 percent, which that table reaches at five years of service instead", "20 percent, which is where that table begins at three years of service"],
            correctIndex: 0,
            explanation: "The pension table runs 3 years at 20, 4 at 40, 5 at 60, 6 at 80, and 7 or more at 100.",
            sourceLessonSlug: "vesting-is-a-retention-device",
          },
          {
            prompt: "What does the lesson mean by saying vesting is a legal question rather than one of employer discretion?",
            options: ["Congress capped the condition", "Employers must obtain approval before adopting any schedule at all", "Participants may negotiate their own schedule with the plan administrator", "A court sets the schedule whenever a plan document is silent on the point"],
            correctIndex: 0,
            explanation: "A sponsor chooses between the shapes the statute permits, and may vest faster, but may not run the condition longer.",
            sourceLessonSlug: "vesting-is-a-retention-device",
          },
          {
            prompt: "Which of these is NOT protected by the rule about an employee's own contributions?",
            options: ["The employer's matching contribution", "Amounts the employee elected to defer during the first year of participation", "Amounts the employee elected to defer in a year when no match was made", "Amounts the employee elected to defer immediately before separating from service"],
            correctIndex: 0,
            explanation: "The nonforfeitability rule covers the accrued benefit derived from the employee's own contributions; the match is what a schedule may condition.",
            sourceLessonSlug: "the-match-is-a-plan-term",
          },
          {
            prompt: "What happens to the vesting condition once employment ends?",
            options: ["It stops running", "It continues until the participant reaches the plan's normal retirement age", "It restarts if the participant is later rehired by any employer in the industry", "It is waived automatically for participants who elect a direct rollover"],
            correctIndex: 0,
            explanation: "Whatever had not vested at separation is forfeited, which is why the schedule matters most at the moment of leaving.",
            sourceLessonSlug: "what-leaving-does",
          },
          {
            prompt: "Which two figures in Section 2 are printed in the statute and dated in the lesson?",
            options: ["7,000 and 1,000 dollars", "15,000 and 500 dollars, which govern the elective deferral limit instead", "100 dollars and 30 days, which govern the document request penalty instead", "10 percent and 55, which govern the additional tax and one of its exceptions"],
            correctIndex: 0,
            explanation: "Both the consent threshold and the automatic-transfer trigger are printed figures that legislation has changed before.",
            sourceLessonSlug: "what-leaving-does",
          },
          {
            prompt: "What does the lesson say a participant should know about their old plan, beyond the balance?",
            options: ["Who the recordkeeper is", "Which investment alternative produced the highest return in the last year", "How much the employer contributed to the plan across its entire workforce", "Which federal agency supervised the plan during the participant's service"],
            correctIndex: 0,
            explanation: "Know the plan, know the recordkeeper, and keep your address current, because the small-balance rule moves money without you.",
            sourceLessonSlug: "what-leaving-does",
          },
          {
            prompt: "The additional tax applies to which part of a distribution?",
            options: ["The includible portion", "The entire distribution, whether or not any part of it is taxable income", "Only the portion attributable to employer contributions rather than deferrals", "Only the portion exceeding the annual elective deferral limit for that year"],
            correctIndex: 0,
            explanation: "The statute increases the tax by 10 percent of the portion of the amount which is includible in gross income.",
            sourceLessonSlug: "what-leaving-does",
          },
          {
            prompt: "Which exception to the additional tax involves a payment pattern rather than an event?",
            options: ["Substantially equal periodic payments", "Death of the employee, which ends the arrangement in any case", "Disability of the employee, which the statute defines by cross-reference", "Separation from service after the employee has attained age 55"],
            correctIndex: 0,
            explanation: "The listed exceptions include distributions taken as substantially equal periodic payments over life or life expectancy.",
            sourceLessonSlug: "what-leaving-does",
          },
        ],
      },
    },
  ],
};

