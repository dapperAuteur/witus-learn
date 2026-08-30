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
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3 — Fees compound too, and a regulation requires a document that says so
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-disclosure-that-must-reach-you",
      title: "9 · The fee disclosure is a document somebody is required to hand you",
      section: "Section 3 · Fees compound too, and one document has to say so",
      body: `This series keeps finding the same thing: somewhere behind a money decision there is a document that a rule requires somebody to give you. MONEY-01 found the adverse action notice. MONEY-06 found the Loan Estimate. Here it is the **participant fee disclosure**, and it is required by a regulation whose title tells you exactly what it is for: "Fiduciary requirements for disclosure in participant-directed individual account plans" (29 CFR § 2550.404a-5, n.d.).

**Start with why it is framed as a fiduciary duty.** The rule opens by stating that "the investment of plan assets is a fiduciary act governed by the fiduciary standards of section 404(a)(1)(A) and (B) of the Employee Retirement Income Security Act of 1974" (29 CFR § 2550.404a-5, n.d.). Those are the two duties Section 6 of this course reads in full: acting solely in participants' interest, and acting with prudence. The disclosure exists because a plan that lets you direct your own investments has handed you a decision, and handing someone a decision without the information to make it is not consistent with either duty.

**Who gets it and when.** The plan-related information must be furnished "on or before the date on which a participant or beneficiary can first direct his or her investments and at least annually thereafter" (29 CFR § 2550.404a-5, n.d.). The same timing applies to the investment-related information. So this is not a one-off welcome pack. It is an annual obligation, and if you have not seen one in over a year, that is a question worth asking in writing.

**What the plan-related half contains.** The rule lists, among other things, an explanation of the circumstances under which participants and beneficiaries may give investment instructions, an explanation of any limits the plan places on those instructions, a description of or reference to the plan provisions on voting and tender rights, and an identification of the designated investment alternatives offered under the plan (29 CFR § 2550.404a-5, n.d.). Read that list as a map of the decisions the plan has already made for you, and of the ones it is leaving to you.

**And then the two categories of cost, which are separated on purpose.**

- **Administrative expenses** are the general plan-wide charges: the rule requires an explanation of any fees and expenses for general plan administrative services that may be charged against individual accounts (29 CFR § 2550.404a-5, n.d.).
- **Individual expenses** are the ones that land on your account and not on your colleague's, because of something you did: the rule requires an explanation of any fees and expenses that may be charged against an individual account on an individual basis (29 CFR § 2550.404a-5, n.d.). Loan processing is the usual example.

**Why the separation matters.** Two people in the same plan with the same balance can pay different amounts, and the reason is in the second category. A cost you triggered is a cost you can sometimes avoid, and a cost the plan spreads across everyone is not. Reading a fee disclosure with those two buckets in mind is most of the skill.

**This course names no fee level as good or bad.** It has no view on what your plan should charge, because that depends on services you have not described to it and alternatives it does not know. What it says is narrower and firmer: the document exists, the rule says what must be in it, and you are entitled to it at least once a year.

:::reveal Which regulation requires the participant fee disclosure, and what is its subject? ||| 29 CFR 2550.404a-5, on fiduciary requirements for disclosure in participant-directed individual account plans.

:::reveal How often must the plan-related information be furnished? ||| On or before the date a participant can first direct investments, and at least annually after that.

:::reveal What is the difference between an administrative expense and an individual expense? ||| An administrative expense is a general plan-wide charge. An individual expense lands on one account because of something that participant did.

## Vocabulary
- **Participant fee disclosure**: the annual document a participant-directed individual account plan must furnish, setting out plan-related and investment-related information including costs.
- **Participant-directed plan**: a plan in which participants choose among investment alternatives themselves, which is what triggers the disclosure duty in the first place.
- **Designated investment alternative**: an investment option the plan makes available for participants to direct money into, which the disclosure must identify.
- **Administrative expense**: a general plan-wide charge for services such as recordkeeping, which may be charged against individual accounts.
- **Individual expense**: a charge that lands on one participant's account because of something that participant did, such as processing a loan.

## Sources
29 CFR § 2550.404a-5. (n.d.). *Fiduciary requirements for disclosure in participant-directed individual account plans*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/29/2550.404a-5

29 U.S.C. § 1104. (n.d.). *Fiduciary duties*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/29/1104`,
    },
    {
      slug: "what-you-actually-paid",
      title: "10 · What you actually paid, and the sentence the rule makes them print",
      section: "Section 3 · Fees compound too, and one document has to say so",
      body: `A disclosure of what a plan **may** charge is useful. A statement of what it **did** charge is better, and the rule requires both.

**The quarterly statement of dollars.** For administrative expenses, the plan must give participants a statement, at least quarterly, of the dollar amount actually charged to their account during that quarter, along with a description of the services those amounts paid for. The same requirement applies separately to individual expenses actually charged (29 CFR § 2550.404a-5, n.d.). That is the number to look for, because it is not an estimate, not a maximum and not an average. It is what left your account.

**The investment costs, stated two ways on purpose.** For each designated investment alternative, the rule requires disclosure of shareholder-type fees and of total annual operating expenses, expressed both as a percentage and as a dollar amount for each 1,000 dollars invested (29 CFR § 2550.404a-5, n.d.). The second form is there because a percentage is easy to wave away and a dollar figure is not. A cost quoted as a fraction of a percent and the same cost quoted as dollars per thousand are the identical fact, and most people react to them very differently.

**And a sentence the regulation puts in the plan's mouth.** The rule requires "[a] statement that the cumulative effect of fees and expenses can substantially reduce the growth of a participant's or beneficiary's retirement account and that participants and beneficiaries can visit the Employee Benefit Security Administration's Web site for an example demonstrating the long-term effect of fees and expenses" (29 CFR § 2550.404a-5, n.d.).

**Sit with that for a moment, because it is unusual.** A federal regulation requires the plan to tell you, in writing, that its own costs compound against you. This is not an advocate's argument or a critic's claim. It is a warning the rulemaker decided participants were entitled to receive from the plan itself, and it is on the document already in your file.

**Investment-related information also has a shape, not just a content.** The rule requires the investment-related disclosures to be furnished in a comparative format that makes the alternatives easy to set beside one another, with the date of the disclosure shown, and it entitles a participant to further material on request, including prospectuses and financial statements (29 CFR § 2550.404a-5, n.d.). The comparative chart is doing the same job the Loan Estimate does in MONEY-06: a standardized layout exists so that two things can be compared without expertise.

**What to do with all of this, stated as a procedure rather than as advice.**

1. Find the most recent annual disclosure and the most recent quarterly statement.
2. On the statement, read the dollar amount actually charged, in both categories, and the description of what it bought.
3. On the annual disclosure, find the comparative chart and read the cost of the alternatives you are actually in, both as a percentage and as dollars per thousand.
4. Multiply the dollars-per-thousand figure by your balance in thousands. That is the annual investment cost implied by the chart, in the same units as the statement.
5. If you cannot find either document, ask the plan administrator in writing, and remember from Section 1 that the written request is the one the statute attaches a deadline and a penalty to.

That procedure gives you a number. It does not tell you whether the number is acceptable, because this course does not know what your plan buys with it or what else is available to you.

:::reveal How often must a plan tell you the dollar amount it actually charged your account? ||| At least quarterly, with a description of the services the amounts paid for.

:::reveal In what two forms must an investment alternative's total annual operating expenses be disclosed? ||| As a percentage, and as a dollar amount for each 1,000 dollars invested.

:::reveal What does the regulation require the plan to state about the cumulative effect of fees? ||| That it can substantially reduce the growth of a participant's retirement account, and where an example of the long-term effect can be found.

## Vocabulary
- **Total annual operating expenses**: the ongoing cost of a designated investment alternative, which the rule requires to be disclosed both as a percentage and as dollars per 1,000 invested.
- **Shareholder-type fee**: a charge attributable to a participant's own transaction in an investment alternative, disclosed alongside the ongoing operating expenses.
- **Comparative format**: the layout the rule requires for investment-related disclosures, so alternatives can be set beside one another without expertise.
- **Quarterly statement**: the at-least-quarterly report of amounts actually charged against a participant's account, distinct from the annual disclosure of amounts that may be charged.

## Sources
29 CFR § 2550.404a-5. (n.d.). *Fiduciary requirements for disclosure in participant-directed individual account plans*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/29/2550.404a-5`,
    },
    {
      slug: "a-hypothetical-not-a-projection",
      title: "11 · A hypothetical, and why it is not a projection",
      section: "Section 3 · Fees compound too, and one document has to say so",
      body: `The regulation says fees compound. This lesson shows the arithmetic, and it is important to be exact about what the arithmetic is and is not.

**This is a hypothetical. It forecasts nothing.** Every number below is chosen to make a shape visible. No return is assumed, no rate is implied, no fee level is described as appropriate, and nothing here should be read as a statement about what any account will do. **This course gives no financial advice**, and that includes not telling you that any particular fee is too high, or that any particular alternative is cheaper, or that a difference in cost should change what you hold.

**Strip out growth entirely, so that no rate can be smuggled in.** Take a starting balance of 10,000 dollars. Assume an annual cost of 1.00 percent of assets, and assume the account changes for no other reason at all: no contributions, no growth, no losses. Then:

- Year 1: the cost is 100 dollars, and 9,900 remains.
- Year 2: 1.00 percent of 9,900 is 99, and 9,801 remains.
- Year 3: 1.00 percent of 9,801 is 98.01, and 9,702.99 remains.

**The pattern is the lesson.** The cost falls in dollars every year while staying constant in percent, because it is a percentage of a shrinking base. That is compounding, running in the direction people do not think about it running. After ten years the balance is 10,000 multiplied by 0.99 ten times, which is about 9,044 dollars. About 956 dollars, or roughly 9.6 percent of the starting balance, has gone to the cost alone, on an account that did nothing.

**Now change one input and nothing else.** Hold everything the same and set the annual cost to 0.25 percent. After ten years the balance is 10,000 multiplied by 0.9975 ten times, which is about 9,753 dollars. The difference between the two costs, over ten years, on a static balance, is about 709 dollars, or roughly 7 percent of where you started.

**What that comparison does and does not establish.** It establishes that a difference of three quarters of one percent a year is not a small difference, because it is applied every year to whatever is left. It establishes nothing whatever about which cost you should be paying, because the two accounts in the example buy nothing at all, and real alternatives differ in what services and what assets they include. A cheaper alternative that is not available in your plan is not an option, and this course does not know your plan.

**Why the regulation's dollars-per-thousand requirement matters here.** The chart from the last lesson gives you the cost of each alternative in dollars per 1,000 invested. Multiply by your balance in thousands and you have the first-year figure of exactly this arithmetic, taken from a document rather than from an assumption. That is the difference between reading your own plan and reading an illustration.

**One more caution, and it is the reason this lesson is placed here rather than earlier.** Cost is one input. The rule itself says so: alongside the fee table it requires a statement that fees and expenses are only one of several factors to consider when making an investment decision. This course teaches the one factor that is written down in a document you are entitled to, and it is silent on the others by design, because the others are advice.

:::reveal Why does this lesson assume no growth at all in its arithmetic? ||| So that no rate of return is implied. The point is the shape of a percentage-of-assets cost, not a forecast.

:::reveal On a 10,000 dollar balance with no growth, what remains after ten years at a 1.00 percent annual cost? ||| About 9,044 dollars, because the balance is multiplied by 0.99 ten times.

:::reveal Does the difference between a 1.00 percent and a 0.25 percent cost tell you which one you should pay? ||| No. The example's accounts buy nothing, real alternatives differ in what they include, and an alternative not offered by your plan is not an option.

## Vocabulary
- **Asset-based fee**: a charge computed as a percentage of the balance, which therefore recurs every year and applies to whatever is left.
- **Hypothetical**: an illustration whose numbers are chosen to make a mechanism visible, carrying no claim about what any real account will do.
- **Compounding**: repeated application of a proportional change to a changing base, which works on costs in the same way it works on balances.
- **Dollars per 1,000 invested**: the second required form of an investment alternative's cost, which converts a percentage into the units a participant actually feels.

## Sources
29 CFR § 2550.404a-5. (n.d.). *Fiduciary requirements for disclosure in participant-directed individual account plans*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/29/2550.404a-5`,
    },
    {
      slug: "quiz-fees-and-the-disclosure",
      title: "12 · Knowledge check: the fee disclosure and what it must say",
      section: "Section 3 · Fees compound too, and one document has to say so",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What is the subject of the regulation that requires the participant fee disclosure?",
            options: ["Fiduciary requirements for disclosure", "Minimum vesting standards for employer contributions to a qualified plan", "Restrictions on the distribution of amounts attributable to elective deferrals", "The computation of average indexed monthly earnings for a retirement benefit"],
            correctIndex: 0,
            explanation: "The section is titled fiduciary requirements for disclosure in participant-directed individual account plans.",
            sourceLessonSlug: "the-disclosure-that-must-reach-you",
          },
          {
            prompt: "How does the rule characterise the investment of plan assets?",
            options: ["As a fiduciary act", "As a commercial decision left entirely to the sponsoring employer", "As a transaction requiring approval from the supervising federal agency", "As an activity outside the scope of the statute governing pension plans"],
            correctIndex: 0,
            explanation: "The rule opens by stating that the investment of plan assets is a fiduciary act governed by the statute's fiduciary standards.",
            sourceLessonSlug: "the-disclosure-that-must-reach-you",
          },
          {
            prompt: "Which two fiduciary standards does the rule name at its opening?",
            options: ["Sole interest and prudence", "Diversification and compliance with the plan's own governing documents", "Bonding of fiduciaries and the annual reporting obligation of the plan", "Nondiscrimination in coverage and the minimum participation requirement"],
            correctIndex: 0,
            explanation: "It names section 404(a)(1)(A) and (B), which are acting solely in participants' interest and acting with prudence.",
            sourceLessonSlug: "the-disclosure-that-must-reach-you",
          },
          {
            prompt: "Why does a participant-directed plan owe this disclosure at all?",
            options: ["It handed you a decision", "Because the plan is required to recommend an investment to each participant", "Because participants would otherwise be unable to make elective deferrals", "Because the supervising agency reviews every plan's investment menu annually"],
            correctIndex: 0,
            explanation: "Handing someone a decision without the information to make it is not consistent with acting solely in their interest or with prudence.",
            sourceLessonSlug: "the-disclosure-that-must-reach-you",
          },
          {
            prompt: "By when must the plan-related information first be furnished?",
            options: ["Before you can first direct investments", "Within thirty days after the participant makes a written request for it", "At the end of the first plan year in which the participant is enrolled", "Only once the participant's balance exceeds the plan's stated threshold"],
            correctIndex: 0,
            explanation: "The rule says on or before the date on which a participant or beneficiary can first direct his or her investments.",
            sourceLessonSlug: "the-disclosure-that-must-reach-you",
          },
          {
            prompt: "How often must the disclosure be repeated after that?",
            options: ["At least annually", "At least quarterly, matching the statement of amounts actually charged", "Only when the plan changes its menu of designated investment alternatives", "Only when a participant asks the administrator for it in writing"],
            correctIndex: 0,
            explanation: "It is an annual obligation, which is why not having seen one in over a year is a question worth asking in writing.",
            sourceLessonSlug: "the-disclosure-that-must-reach-you",
          },
          {
            prompt: "Which of these must the plan-related disclosure explain?",
            options: ["When you may give investment instructions", "Which alternative the plan's fiduciaries believe is best for your circumstances", "What return each designated investment alternative is expected to produce", "How much of your pay the plan recommends that you defer each year"],
            correctIndex: 0,
            explanation: "The rule requires an explanation of the circumstances under which participants and beneficiaries may give investment instructions.",
            sourceLessonSlug: "the-disclosure-that-must-reach-you",
          },
          {
            prompt: "What else must the plan-related disclosure identify?",
            options: ["The designated investment alternatives", "The names of every fiduciary who has discretion over the plan's assets", "The identity of each participant whose account exceeds a stated balance", "The employer's total matching contribution across the whole workforce"],
            correctIndex: 0,
            explanation: "The list includes identification of any designated investment alternatives offered under the plan.",
            sourceLessonSlug: "the-disclosure-that-must-reach-you",
          },
          {
            prompt: "Which plan provisions must the disclosure describe or reference?",
            options: ["Voting and tender rights", "The formula the employer uses to compute its matching contribution", "The schedule under which employer contributions become nonforfeitable", "The events on which an amount attributable to a deferral may be distributed"],
            correctIndex: 0,
            explanation: "The rule requires a description of or reference to plan provisions relating to the exercise of voting, tender and similar rights.",
            sourceLessonSlug: "the-disclosure-that-must-reach-you",
          },
          {
            prompt: "What is an administrative expense in the rule's vocabulary?",
            options: ["A general plan-wide charge", "A charge triggered by one participant's own request to the plan", "A charge levied only on participants who have not yet fully vested", "A charge computed as a percentage of an investment alternative's assets"],
            correctIndex: 0,
            explanation: "The rule requires an explanation of any fees and expenses for general plan administrative services that may be charged against individual accounts.",
            sourceLessonSlug: "the-disclosure-that-must-reach-you",
          },
          {
            prompt: "What is an individual expense?",
            options: ["A charge you triggered", "A charge every participant pays in equal shares across the plan year", "A charge deducted from the employer's contribution before it is credited", "A charge the plan imposes on participants who direct their own investments"],
            correctIndex: 0,
            explanation: "The rule covers fees and expenses that may be charged against an individual account on an individual basis, of which loan processing is the usual example.",
            sourceLessonSlug: "the-disclosure-that-must-reach-you",
          },
          {
            prompt: "Why does separating the two cost categories matter to a participant?",
            options: ["One is sometimes avoidable", "Because only one of the two categories has to be disclosed in writing", "Because the plan may waive administrative expenses on written request", "Because individual expenses are always larger than plan-wide charges"],
            correctIndex: 0,
            explanation: "A cost you triggered can sometimes be avoided; a cost the plan spreads across everyone cannot, and reading with the two buckets in mind is most of the skill.",
            sourceLessonSlug: "the-disclosure-that-must-reach-you",
          },
          {
            prompt: "What is the usual example the lesson gives of an individual expense?",
            options: ["Loan processing", "Recordkeeping for the plan's entire population of participants", "Audit work performed on the plan's annual financial statements", "Legal advice obtained by the sponsor about the plan's compliance"],
            correctIndex: 0,
            explanation: "It lands on one account because of something that participant did, which is what distinguishes it from a plan-wide charge.",
            sourceLessonSlug: "the-disclosure-that-must-reach-you",
          },
          {
            prompt: "Does this course say what a plan should charge?",
            options: ["No", "Yes, it names a percentage above which a plan is charging too much", "Yes, but only for plans at establishments with fewer than fifty workers", "Yes, it publishes an annual benchmark drawn from the supervising agency"],
            correctIndex: 0,
            explanation: "It has no view on the level, because that depends on services and alternatives the course does not know. It says only that the document exists and what must be in it.",
            sourceLessonSlug: "the-disclosure-that-must-reach-you",
          },
          {
            prompt: "Which earlier course in this series found the adverse action notice?",
            options: ["MONEY-01", "MONEY-02, which taught deposit accounts and who is left without one", "MONEY-06, which taught the Loan Estimate and the Closing Disclosure", "MONEY-03, which taught the timing of when deposited money becomes usable"],
            correctIndex: 0,
            explanation: "The series keeps finding a document a rule requires somebody to give you: the adverse action notice, the Loan Estimate, and now the fee disclosure.",
            sourceLessonSlug: "the-disclosure-that-must-reach-you",
          },
          {
            prompt: "What is a designated investment alternative?",
            options: ["An option the plan makes available", "Any security a participant is permitted to buy through a brokerage window", "The single default the plan uses for participants who give no instruction", "An alternative the plan's fiduciaries have certified as suitable for a participant"],
            correctIndex: 0,
            explanation: "It is an investment option the plan makes available for participants to direct money into, and the disclosure must identify each one.",
            sourceLessonSlug: "the-disclosure-that-must-reach-you",
          },
          {
            prompt: "How should a reader interpret the list of plan-related items the rule requires?",
            options: ["As a map of decisions already made", "As a ranking of the alternatives in order of expected performance", "As a summary of the participant's own contributions during the year", "As a record of every fee the plan charged during the preceding quarter"],
            correctIndex: 0,
            explanation: "It shows which decisions the plan has already made for you and which ones it is leaving to you.",
            sourceLessonSlug: "the-disclosure-that-must-reach-you",
          },
          {
            prompt: "If you have not received a fee disclosure in more than a year, what does the lesson suggest?",
            options: ["Ask in writing", "Assume the plan has no fees to disclose for that period", "Wait until the plan's next quarterly statement arrives instead", "Contact the supervising agency before approaching the plan itself"],
            correctIndex: 0,
            explanation: "The obligation is annual, and Section 1 established that the written request is the one carrying a statutory deadline and penalty.",
            sourceLessonSlug: "the-disclosure-that-must-reach-you",
          },
          {
            prompt: "Which plans does this disclosure rule apply to?",
            options: ["Participant-directed individual account plans", "Every defined benefit pension plan maintained by a private employer", "Only plans with more than one hundred participants at the start of a year", "Only plans that offer a matching contribution on employee deferrals"],
            correctIndex: 0,
            explanation: "The rule's own title names participant-directed individual account plans, which is what triggers the disclosure duty.",
            sourceLessonSlug: "the-disclosure-that-must-reach-you",
          },
          {
            prompt: "What does the rule require about limits a plan places on investment instructions?",
            options: ["They must be explained", "They must be approved by a majority of the plan's participants", "They must be removed within one year of the plan's establishment", "They must be identical across every designated investment alternative"],
            correctIndex: 0,
            explanation: "The rule requires an explanation of any specified limitations on such instructions under the terms of the plan.",
            sourceLessonSlug: "the-disclosure-that-must-reach-you",
          },
          {
            prompt: "Which of the two statutory duties named in the rule concerns care and skill?",
            options: ["Prudence", "Acting solely in the interest of participants and their beneficiaries", "Diversifying investments so as to minimise the risk of large losses", "Following the documents and instruments governing the plan's operation"],
            correctIndex: 0,
            explanation: "The rule names section 404(a)(1)(A) and (B), the exclusive-purpose duty and the prudence duty.",
            sourceLessonSlug: "the-disclosure-that-must-reach-you",
          },
          {
            prompt: "Two participants in the same plan with the same balance can pay different amounts. Why?",
            options: ["Individual expenses", "Because the plan applies a different administrative charge to each account", "Because vesting schedules change the fees charged against a balance", "Because the plan reduces charges for participants who have served longer"],
            correctIndex: 0,
            explanation: "The second cost category lands on one account and not on another because of something that participant did.",
            sourceLessonSlug: "the-disclosure-that-must-reach-you",
          },
          {
            prompt: "How often must a plan state the dollar amount actually charged to your account?",
            options: ["At least quarterly", "At least annually, in the same document as the fee disclosure itself", "Only when a participant requests an accounting from the administrator", "Only in the year a participant separates from service with the employer"],
            correctIndex: 0,
            explanation: "The rule requires an at-least-quarterly statement of the dollar amount actually charged, for administrative and individual expenses separately.",
            sourceLessonSlug: "what-you-actually-paid",
          },
          {
            prompt: "What must accompany that dollar amount on the statement?",
            options: ["A description of the services", "A projection of the amount that will be charged in the following quarter", "A comparison against what other plans of a similar size typically charge", "A recommendation about how the participant might reduce the amount"],
            correctIndex: 0,
            explanation: "The rule pairs the dollar amount with a description of the services to which the amounts relate.",
            sourceLessonSlug: "what-you-actually-paid",
          },
          {
            prompt: "Why does the lesson single out the quarterly dollar figure?",
            options: ["It is what left your account", "Because it is the only figure the plan is required to compute accurately", "Because it includes the investment costs the comparative chart omits", "Because it is expressed as a percentage rather than as a dollar amount"],
            correctIndex: 0,
            explanation: "It is not an estimate, a maximum or an average, which is exactly what makes it worth finding.",
            sourceLessonSlug: "what-you-actually-paid",
          },
          {
            prompt: "In what two forms must total annual operating expenses be disclosed?",
            options: ["A percentage and dollars per 1,000", "A percentage and a projection of the amount over a ten-year horizon", "A dollar amount and a comparison against a published industry average", "A percentage and the total the plan collected across all participants"],
            correctIndex: 0,
            explanation: "The rule requires both forms, because a percentage is easy to wave away and a dollar figure is not.",
            sourceLessonSlug: "what-you-actually-paid",
          },
          {
            prompt: "Why does the rule require the dollars-per-thousand form at all?",
            options: ["People react to dollars differently", "Because percentages cannot be computed for some investment alternatives", "Because the supervising agency collects the figure in that form annually", "Because a dollar figure is more accurate than the equivalent percentage"],
            correctIndex: 0,
            explanation: "The two are the identical fact expressed differently, and most people respond to them very differently.",
            sourceLessonSlug: "what-you-actually-paid",
          },
          {
            prompt: "What kind of fee does the rule require to be disclosed alongside operating expenses?",
            options: ["Shareholder-type fees", "The employer's own cost of sponsoring and maintaining the plan", "The commissions paid to any adviser who recommended the alternative", "Any charge the recordkeeper levies for producing a benefit statement"],
            correctIndex: 0,
            explanation: "Shareholder-type fees are attributable to a participant's own transaction in an alternative, and are disclosed alongside the ongoing operating expenses.",
            sourceLessonSlug: "what-you-actually-paid",
          },
          {
            prompt: "What does the rule require the plan to state about the cumulative effect of fees?",
            options: ["It can substantially reduce growth", "That it is generally smaller than the effect of choosing the wrong asset", "That participants should consult a professional before making a change", "That the plan has negotiated the lowest costs reasonably available to it"],
            correctIndex: 0,
            explanation: "The required statement says the cumulative effect can substantially reduce the growth of a participant's or beneficiary's retirement account.",
            sourceLessonSlug: "what-you-actually-paid",
          },
          {
            prompt: "Where does the required statement tell participants to find an example of the long-term effect?",
            options: ["An agency website", "The plan's own summary plan description, in the section on expenses", "The quarterly statement issued by the plan's recordkeeper each period", "A publication issued annually by the tax authority alongside the limits"],
            correctIndex: 0,
            explanation: "The rule names the Employee Benefit Security Administration's website as the place carrying an example demonstrating the long-term effect.",
            sourceLessonSlug: "what-you-actually-paid",
          },
          {
            prompt: "What does the lesson find unusual about that required statement?",
            options: ["The rule puts it in the plan's mouth", "That it appears only in plans with more than one hundred participants", "That it must be repeated on every quarterly statement as well as annually", "That participants may waive it by signing an acknowledgement at enrolment"],
            correctIndex: 0,
            explanation: "A federal regulation requires the plan to tell you in writing that its own costs compound against you, which is not an advocate's claim but a rulemaker's decision.",
            sourceLessonSlug: "what-you-actually-paid",
          },
          {
            prompt: "In what layout must the investment-related information be furnished?",
            options: ["A comparative format", "A narrative summary written for a reader with no financial training", "A table ordered by the returns each alternative produced last year", "Whatever format the plan's recordkeeper finds most convenient to produce"],
            correctIndex: 0,
            explanation: "The comparative chart does the job the Loan Estimate does in MONEY-06: a standardized layout so two things can be compared without expertise.",
            sourceLessonSlug: "what-you-actually-paid",
          },
          {
            prompt: "What else must appear on the comparative disclosure?",
            options: ["Its date", "The name of the fiduciary who selected each alternative for the menu", "The number of participants currently invested in each alternative offered", "The employer's opinion of which alternative suits most of its employees"],
            correctIndex: 0,
            explanation: "The rule requires the date of the disclosure to be shown, which is what lets a reader tell how current the chart is.",
            sourceLessonSlug: "what-you-actually-paid",
          },
          {
            prompt: "What further material is a participant entitled to on request?",
            options: ["Prospectuses and financial statements", "The plan's negotiations with each of the investment providers it uses", "A written opinion on whether a chosen alternative suits the participant", "The account balances of other participants invested in the same option"],
            correctIndex: 0,
            explanation: "The rule provides for further investment material on request, including prospectuses and financial statements.",
            sourceLessonSlug: "what-you-actually-paid",
          },
          {
            prompt: "In the lesson's five-step procedure, what is the first step?",
            options: ["Find the two documents", "Compute the annual cost implied by the comparative chart's figures", "Compare the plan's costs against the alternatives available elsewhere", "Ask the administrator whether the plan's fees are reasonable in writing"],
            correctIndex: 0,
            explanation: "Start with the most recent annual disclosure and the most recent quarterly statement, because the rest of the procedure reads from both.",
            sourceLessonSlug: "what-you-actually-paid",
          },
          {
            prompt: "In that procedure, how do you convert the chart's figure into an annual cost?",
            options: ["Multiply by your balance in thousands", "Divide the percentage figure by the number of alternatives on the menu", "Subtract the quarterly statement's total from the annual disclosure's total", "Add the shareholder-type fee to the plan's general administrative charge"],
            correctIndex: 0,
            explanation: "The chart gives dollars per 1,000 invested, so multiplying by the balance in thousands puts it in the same units as the statement.",
            sourceLessonSlug: "what-you-actually-paid",
          },
          {
            prompt: "What does the procedure deliberately stop short of telling you?",
            options: ["Whether the number is acceptable", "How much the plan charged your account during the previous quarter", "Which of the plan's alternatives carry shareholder-type fees at all", "When the plan is required to furnish the disclosure to participants"],
            correctIndex: 0,
            explanation: "The course does not know what the plan buys with the money or what alternatives are open to you, so it gives you the number and stops.",
            sourceLessonSlug: "what-you-actually-paid",
          },
          {
            prompt: "What should you do if you cannot find either document?",
            options: ["Ask the administrator in writing", "Estimate the fees from the balance shown on your most recent statement", "Assume the plan charges nothing until a charge appears on a statement", "Report the plan to the agency that supervises employee benefit plans"],
            correctIndex: 0,
            explanation: "The written request is the one the statute attaches a thirty-day deadline and a per-day penalty to, as Section 1 established.",
            sourceLessonSlug: "what-you-actually-paid",
          },
          {
            prompt: "How does the quarterly statement differ from the annual disclosure?",
            options: ["It reports what was charged", "It covers investment alternatives the annual disclosure leaves out", "It is furnished only to participants who direct their own investments", "It is optional, and a plan may provide it in place of the annual document"],
            correctIndex: 0,
            explanation: "The annual disclosure describes what may be charged; the quarterly statement reports what actually was.",
            sourceLessonSlug: "what-you-actually-paid",
          },
          {
            prompt: "Which MONEY-06 document does the comparative chart resemble in function?",
            options: ["The Loan Estimate", "The recorded covenant found in a county land record", "The lease, which is governed by state rather than federal law", "The appraisal, which is an opinion of value rather than a price"],
            correctIndex: 0,
            explanation: "Both are standardized layouts that exist so two offers can be laid side by side without expertise.",
            sourceLessonSlug: "what-you-actually-paid",
          },
          {
            prompt: "Which categories does the at-least-quarterly statement cover?",
            options: ["Administrative and individual expenses", "Only the investment costs of each designated alternative on the menu", "Only charges exceeding a threshold the plan sets in its own document", "Only the amounts the employer paid on the participant's behalf that period"],
            correctIndex: 0,
            explanation: "The rule imposes the same at-least-quarterly requirement separately on both categories of amounts actually charged.",
            sourceLessonSlug: "what-you-actually-paid",
          },
          {
            prompt: "What is a shareholder-type fee attributable to?",
            options: ["The participant's own transaction", "The plan's overall administration across every participant account", "The employer's decision to add a new alternative to the plan menu", "The recordkeeper's cost of producing the quarterly benefit statement"],
            correctIndex: 0,
            explanation: "It arises from what that participant did in the alternative, which is why it is disclosed separately from ongoing operating expenses.",
            sourceLessonSlug: "what-you-actually-paid",
          },
          {
            prompt: "The lesson says the two forms of the cost figure are what, in relation to each other?",
            options: ["The identical fact", "Two different charges that a participant must add together", "An estimate and an actual, computed at different times of the year", "A ceiling and a floor between which the real charge is expected to fall"],
            correctIndex: 0,
            explanation: "A cost quoted as a fraction of a percent and the same cost quoted as dollars per thousand describe exactly the same thing.",
            sourceLessonSlug: "what-you-actually-paid",
          },
          {
            prompt: "How does the compounding lesson describe its own arithmetic?",
            options: ["A hypothetical", "A conservative projection based on published long-run market history", "An illustration approved by the agency that supervises retirement plans", "A worked example of the plan's actual costs over the last ten years"],
            correctIndex: 0,
            explanation: "Every number is chosen to make a shape visible, and the lesson says it forecasts nothing.",
            sourceLessonSlug: "a-hypothetical-not-a-projection",
          },
          {
            prompt: "Why does the illustration assume no growth in the account at all?",
            options: ["So no rate is implied", "Because a plan's fees are charged only on the account's original balance", "Because accounts that receive no contributions do not change in value", "Because the regulation forbids using an assumed return in any illustration"],
            correctIndex: 0,
            explanation: "Stripping out growth entirely makes it impossible to smuggle in a return the reader might take as a forecast.",
            sourceLessonSlug: "a-hypothetical-not-a-projection",
          },
          {
            prompt: "In the illustration, what is the cost in the first year on a 10,000 dollar balance at 1.00 percent?",
            options: ["100 dollars", "1,000 dollars, which is one tenth of the starting balance shown", "25 dollars, which is the figure for the lower cost used later on", "956 dollars, which is the total cost across the whole ten-year period"],
            correctIndex: 0,
            explanation: "One percent of 10,000 is 100, leaving 9,900 at the end of the first year.",
            sourceLessonSlug: "a-hypothetical-not-a-projection",
          },
          {
            prompt: "What is left after the second year of that illustration?",
            options: ["9,801 dollars", "9,900 dollars, which is the balance at the end of the first year", "9,044 dollars, which is the balance after the full ten-year period", "9,753 dollars, which is the ten-year balance at the lower cost level"],
            correctIndex: 0,
            explanation: "One percent of 9,900 is 99, so 9,801 remains after the second year.",
            sourceLessonSlug: "a-hypothetical-not-a-projection",
          },
          {
            prompt: "What happens to the cost in dollars as the illustration runs?",
            options: ["It falls each year", "It rises each year, because the charge accumulates against the balance", "It stays at exactly 100 dollars, because the balance is treated as fixed", "It disappears once the balance has fallen below the plan's minimum"],
            correctIndex: 0,
            explanation: "The cost stays constant in percent and falls in dollars, because it is a percentage of a shrinking base.",
            sourceLessonSlug: "a-hypothetical-not-a-projection",
          },
          {
            prompt: "After ten years at 1.00 percent with no growth, what remains of the 10,000 dollars?",
            options: ["About 9,044 dollars", "About 9,753 dollars, which is the result at the lower cost level instead", "About 9,000 dollars exactly, since ten years at one percent removes a tenth", "About 8,000 dollars, because the charge compounds at an accelerating rate"],
            correctIndex: 0,
            explanation: "The balance is 10,000 multiplied by 0.99 ten times, which is about 9,044.",
            sourceLessonSlug: "a-hypothetical-not-a-projection",
          },
          {
            prompt: "Roughly what share of the starting balance has gone to cost after those ten years?",
            options: ["About 9.6 percent", "About 1 percent, matching the annual charge applied to the account", "About 25 percent, which is the difference between the two cost levels", "About 7 percent, which is the gap between the two illustrated results"],
            correctIndex: 0,
            explanation: "About 956 dollars of the original 10,000 is gone, on an account that did nothing else at all.",
            sourceLessonSlug: "a-hypothetical-not-a-projection",
          },
          {
            prompt: "Holding everything else the same at 0.25 percent, what remains after ten years?",
            options: ["About 9,753 dollars", "About 9,044 dollars, which is the result at the higher cost level instead", "About 9,975 dollars, since a quarter of a percent is charged only once", "About 7,500 dollars, because the lower charge applies over a longer term"],
            correctIndex: 0,
            explanation: "The balance is 10,000 multiplied by 0.9975 ten times, which is about 9,753.",
            sourceLessonSlug: "a-hypothetical-not-a-projection",
          },
          {
            prompt: "What is the difference between the two illustrated results after ten years?",
            options: ["About 709 dollars", "About 956 dollars, which is the total cost at the higher charge alone", "About 100 dollars, which is the first year's cost at the higher charge", "About 75 dollars a year, which is the annual gap between the two charges"],
            correctIndex: 0,
            explanation: "That is roughly 7 percent of the starting balance, on an account assumed to do nothing at all.",
            sourceLessonSlug: "a-hypothetical-not-a-projection",
          },
          {
            prompt: "What does that comparison establish?",
            options: ["A small annual difference is not small", "That the cheaper of the two alternatives is the one a reader should choose", "That accounts charging less than a quarter of a percent perform better", "That fee levels are the most important factor in any investment decision"],
            correctIndex: 0,
            explanation: "Three quarters of one percent a year is applied every year to whatever is left, which is what makes the gap grow.",
            sourceLessonSlug: "a-hypothetical-not-a-projection",
          },
          {
            prompt: "What does the comparison expressly NOT establish?",
            options: ["Which cost you should pay", "That a percentage-of-assets charge applies to the remaining balance", "That the cost in dollars falls as the balance falls under a fixed rate", "That the difference between two charges accumulates over a long period"],
            correctIndex: 0,
            explanation: "The accounts in the example buy nothing, real alternatives differ in what they include, and an alternative your plan does not offer is not an option.",
            sourceLessonSlug: "a-hypothetical-not-a-projection",
          },
          {
            prompt: "How does the lesson connect the illustration back to a real document?",
            options: ["Dollars per thousand times your balance", "By comparing the plan's charges against a published industry benchmark", "By using the quarterly statement's total in place of the annual figure", "By asking the plan administrator to recompute the arithmetic on request"],
            correctIndex: 0,
            explanation: "That produces the first-year figure of exactly this arithmetic, taken from the comparative chart rather than from an assumption.",
            sourceLessonSlug: "a-hypothetical-not-a-projection",
          },
          {
            prompt: "What does the rule itself say about fees as a factor in an investment decision?",
            options: ["They are one of several", "That they are the factor a prudent participant should weigh most heavily", "That they may be disregarded where a plan negotiates on participants' behalf", "That they must be compared against the returns each alternative produced"],
            correctIndex: 0,
            explanation: "Alongside the fee table the rule requires a statement that fees and expenses are only one of several factors to consider.",
            sourceLessonSlug: "a-hypothetical-not-a-projection",
          },
          {
            prompt: "Why is this course silent about the other factors?",
            options: ["They are advice", "Because no regulation requires a plan to disclose them to participants", "Because they vary too much between plans for a course to describe them", "Because they are covered in a later course in the same personal money series"],
            correctIndex: 0,
            explanation: "The course teaches the factor that is written down in a document you are entitled to, and stops there by design.",
            sourceLessonSlug: "a-hypothetical-not-a-projection",
          },
          {
            prompt: "What is an asset-based fee?",
            options: ["A charge computed on the balance", "A one-time charge levied when a participant first enrols in the plan", "A charge that applies only to amounts contributed by the employer", "A charge assessed against the plan rather than against any account"],
            correctIndex: 0,
            explanation: "Because it is a percentage of the balance, it recurs every year and applies to whatever is left.",
            sourceLessonSlug: "a-hypothetical-not-a-projection",
          },
          {
            prompt: "In this lesson's sense, what is compounding?",
            options: ["A proportional change on a changing base", "The addition of investment earnings to an account at the end of each year", "The accumulation of employer contributions across successive plan years", "The doubling of a balance over a period determined by the rate of return"],
            correctIndex: 0,
            explanation: "It works on costs in exactly the way it works on balances, which is the entire point of the illustration.",
            sourceLessonSlug: "a-hypothetical-not-a-projection",
          },
          {
            prompt: "Where does the third of this course's three prose refusals of advice appear?",
            options: ["In this compounding lesson", "In the section on Social Security benefit computation and the earnings record", "In the section on vesting schedules and what happens when you leave a job", "Only in the description shown on the course landing page before enrolment"],
            correctIndex: 0,
            explanation: "The second of the three appears here, next to the arithmetic, precisely because arithmetic is where a reader is most likely to hear a recommendation.",
            sourceLessonSlug: "a-hypothetical-not-a-projection",
          },
          {
            prompt: "Does the lesson say that any particular fee is too high?",
            options: ["No", "Yes, it names one percent a year as excessive for a workplace plan", "Yes, it says any charge above a quarter of a percent should be avoided", "Yes, but only for participants whose balances exceed 10,000 dollars"],
            correctIndex: 0,
            explanation: "It refuses to say that any fee is too high, that any alternative is cheaper, or that a difference in cost should change what you hold.",
            sourceLessonSlug: "a-hypothetical-not-a-projection",
          },
          {
            prompt: "Why does the lesson say an alternative not offered by your plan is irrelevant to you?",
            options: ["It is not an option", "Because the plan would charge an additional fee to make it available", "Because participants may not compare a plan's costs with outside products", "Because the comparative chart is required to omit unavailable alternatives"],
            correctIndex: 0,
            explanation: "A cheaper alternative you cannot select changes nothing about your account, and the course does not know your plan's menu.",
            sourceLessonSlug: "a-hypothetical-not-a-projection",
          },
          {
            prompt: "What is the third year's balance in the illustration?",
            options: ["9,702.99 dollars", "9,801 dollars, which is the balance at the end of the second year", "9,900 dollars, which is the balance at the end of the first year", "9,044 dollars, which is the balance at the end of the tenth year"],
            correctIndex: 0,
            explanation: "One percent of 9,801 is 98.01, leaving 9,702.99 at the end of the third year.",
            sourceLessonSlug: "a-hypothetical-not-a-projection",
          },
          {
            prompt: "In which direction does the lesson say people usually fail to think about compounding?",
            options: ["Against them", "Toward them, since most people overestimate how fast a balance grows", "Sideways, since costs and returns cancel out over a long enough period", "Backwards, since a charge levied today reduces last year's balance too"],
            correctIndex: 0,
            explanation: "Compounding on a cost runs in the direction people do not think about it running, which is why the illustration strips growth out.",
            sourceLessonSlug: "a-hypothetical-not-a-projection",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4 — Tax timing, and the numbers that reset every year
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "traditional-and-roth-are-a-timing-choice",
      title: "13 · Traditional and Roth are a question about when, not what",
      section: "Section 4 · Tax timing, and the numbers that reset every year",
      body: `People treat traditional and Roth as two products. They are not products. They are two answers to a single question: **when is this money taxed?**

**The traditional side deducts now.** The Code allows an individual "as a deduction an amount equal to the qualified retirement contributions of the individual for the taxable year" (26 U.S.C. § 219, n.d.). Money that is deducted going in is taxed coming out, later, as it is distributed.

**The Roth side does the opposite.** "No deduction shall be allowed under section 219 for a contribution to a Roth IRA" (26 U.S.C. § 408A, n.d.). Nothing is deducted going in. Instead, "[a]ny qualified distribution from a Roth IRA shall not be includible in gross income" (26 U.S.C. § 408A, n.d.). The tax is paid on the way in and the qualifying distribution is not taxed on the way out.

**What a Roth IRA is, in the statute's own terms**, is worth reading because it makes the wrapper point from Lesson 1 concrete. It is "an individual retirement plan ... which is designated ... at the time of establishment of the plan as a Roth IRA" (26 U.S.C. § 408A, n.d.), and otherwise "a Roth IRA shall be treated for purposes of this title in the same manner as an individual retirement plan" (26 U.S.C. § 408A, n.d.). So the difference between the two is a designation and a set of tax consequences. It is not a different kind of asset.

**"Qualified" is doing real work in that sentence.** A distribution is qualified if it is made on or after the individual attains age 59 and a half, to a beneficiary or the estate on or after death, on account of the individual being disabled, or as a qualified special purpose distribution (26 U.S.C. § 408A, n.d.). And there is a second, independent condition: a payment is not a qualified distribution if it is made "within the 5-taxable year period beginning with the first taxable year for which the individual made a contribution to a Roth IRA" (26 U.S.C. § 408A, n.d.). Two hurdles, not one. Clearing the age and missing the period fails, and so does the reverse.

**Why this course refuses to tell you which side to choose.** The honest version of the traditional-against-Roth question is a comparison between a tax rate you face now and a tax rate you will face later. Nobody knows the second one. It depends on your future income, on your future filing situation, and on tax law that has not been written yet. Anyone who tells you confidently which side wins is either making assumptions they have not shown you or selling something. What this course can give you is the mechanism, so that when you read someone's argument you can see which assumption is carrying it.

**One structural point that is often missed.** These are not exclusively an IRA phenomenon. Employer plans commonly permit designated contributions with Roth treatment as well, which means the traditional-or-Roth question and the plan-or-IRA question are two separate axes rather than one. Keeping them separate stops a common confusion in which people believe they must leave a workplace plan to obtain Roth treatment.

**And the point that connects this to Section 1.** All of it presupposes that you have income to defer and, for the workplace version, a plan to defer into. The tax timing question is a real question. It is also a question that never reaches roughly half of the lowest-paid quarter of private-sector workers, because no plan was on offer.

:::reveal What single question do traditional and Roth treatment answer differently? ||| When the money is taxed: deducted now and taxed later, or taxed now and not taxed on a qualified distribution.

:::reveal What are the two independent conditions for a qualified distribution from a Roth IRA? ||| A qualifying event such as age 59 and a half, death, disability or a qualified special purpose distribution, and the 5-taxable-year period.

:::reveal Why does this course refuse to say which treatment is better? ||| Because the comparison turns on a future tax rate that nobody knows, which depends on income, filing situation and law not yet written.

## Vocabulary
- **Traditional treatment**: the arrangement under which a contribution is deducted in the year made and the distribution is taxed when received.
- **Roth treatment**: the arrangement under which no deduction is allowed and a qualified distribution is not includible in gross income.
- **Qualified distribution**: a Roth distribution that satisfies both a qualifying event and the 5-taxable-year period, and only then escapes inclusion in income.
- **Designation**: the act, at the time the plan is established, that makes an individual retirement plan a Roth IRA rather than an ordinary one.
- **Tax timing**: the choice between paying tax on money going into an account and paying it on money coming out, which is the whole of the traditional-against-Roth question.

## Sources
26 U.S.C. § 219. (n.d.). *Retirement savings*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/219

26 U.S.C. § 408A. (n.d.). *Roth IRAs*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/408A`,
    },
    {
      slug: "the-active-participant-rule",
      title: "14 · Your employer's decision reaches into your own account",
      section: "Section 4 · Tax timing, and the numbers that reset every year",
      body: `Here is the rule that makes the access story from Section 1 into a tax rule, and it is the least intuitive provision in this course.

**The deduction for your own IRA contribution can be reduced because of a plan you are in at work.** The Code provides that if, for any part of any plan year ending with or within a taxable year, "an individual or the individual's spouse is an active participant", the dollar limitations on the deduction "shall be reduced (but not below zero)" by an amount computed under the following paragraph (26 U.S.C. § 219, n.d.). That reduction is phased in over an income range, which is the thing everyone calls the phase-out.

**Read what that means slowly.** Two people with identical incomes, identical contributions and identical family situations can get different deductions, and the difference is that one of them works somewhere with a retirement plan. The employer's decision, made for the employer's reasons, changes the tax treatment of an account the employer has nothing to do with.

**And it reaches a spouse.** The statute says "an individual or the individual's spouse", so a household where only one person is covered at work is a household where the rule may reach both. There is separate treatment for the uncovered spouse, which is exactly the kind of detail that must be read for the current year rather than remembered.

**What makes someone an active participant.** The statute defines it by listing the arrangements: participation in a plan described in section 401(a) with a tax-exempt trust, an annuity plan under 403(a), a plan established for its employees by a government or its instrumentality, a 403(b) annuity contract, a simplified employee pension under 408(k), or a simple retirement account under 408(p); or a trust described in 501(c)(18) to which deductible contributions are made (26 U.S.C. § 219, n.d.). Two features of that definition are worth holding on to. First, it is about the arrangement rather than about how much you put in. Second, the determination applies whether or not rights under the plan are forfeitable, so being unvested does not take you out of it.

**Why this belongs in a course about access.** The usual framing of retirement policy is that individual accounts exist so that people without workplace plans have somewhere to save. That framing is half right and this rule is the other half: whether you have a workplace plan is itself an input to how the individual account is taxed. The two systems are not independent, and the connection runs from your employer's choice into your personal return.

**The figures are the part you must not memorise.** Every threshold in this rule is a dollar amount that is adjusted, and the adjustment happens on an annual cycle. This course prints none of them. What it teaches is the shape: there is a reduction, it depends on active-participant status, it depends on filing situation, it is phased across an income range, and it never goes below zero. The next lesson explains where the current year's numbers actually come from.

:::reveal What can reduce the deduction for your own IRA contribution? ||| Being an active participant in an employer arrangement, or having a spouse who is, with the reduction phased across an income range.

:::reveal Does being unvested take you out of active participant status? ||| No. The determination applies whether or not rights under the plan are forfeitable.

:::reveal Why does this rule belong in a course about access? ||| Because whether your employer offers a plan is itself an input into how your own individual account is taxed, so the two systems are not independent.

## Vocabulary
- **Active participant**: someone participating in one of the employer arrangements the statute lists, determined by the arrangement rather than by the amount contributed.
- **Phase-out**: the income range across which a deduction is progressively reduced, never below zero, rather than being lost at a single cliff.
- **Filing situation**: the household and return status that changes which threshold applies, which is why a single remembered number is almost always the wrong one.
- **Deductible amount**: the statutory ceiling on the deduction before any active-participant reduction is applied to it.

## Sources
26 U.S.C. § 219. (n.d.). *Retirement savings*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/219`,
    },
    {
      slug: "a-base-amount-and-an-adjustment",
      title: "15 · Where the annual numbers actually come from",
      section: "Section 4 · Tax timing, and the numbers that reset every year",
      body: `This course prints no current contribution limit. That is not caution for its own sake: it is because the limits are built in a way that makes the printed statutory figure and the operative figure two different things, and knowing that is more useful than knowing either number.

**The pattern, in the statute itself.** For elective deferrals, the Code says the deferrals of any individual are included in gross income to the extent they exceed "the applicable dollar amount", and then says "the applicable dollar amount is $15,000" (26 U.S.C. § 402, n.d.). Read alone, that looks like the limit. It is not. The next relevant paragraph directs the Secretary to adjust that 15,000 amount for cost of living, using a base period of the calendar quarter beginning July 1, 2005, and provides that "any increase under this paragraph which is not a multiple of $500 shall be rounded to the next lowest multiple of $500" (26 U.S.C. § 402, n.d.).

**The individual account version has the identical shape.** The deduction may not exceed the lesser of "the deductible amount" or the individual's includible compensation, and the statute then says "[t]he deductible amount is $5,000" (26 U.S.C. § 219, n.d.). A further provision adjusts that amount for cost of living for taxable years beginning after 2008, using calendar year 2007 as the base, again rounding down to a multiple of 500. The catch-up amount for individuals who have reached 50 is stated as 1,000 dollars and is adjusted on its own cycle, using calendar year 2022 as the base and rounding to a lower multiple of 100 (26 U.S.C. § 219, n.d.).

**So there are three things, and only one of them is stable.**

1. **A base amount**, printed in the statute. Stable, quotable, and not the answer.
2. **An adjustment mechanism**, also in the statute: a base period, an index, and a rounding rule. Stable, and the actual content of the rule.
3. **This year's number**, published annually. Useful, and out of date the moment it changes.

**Where the third one lives.** The operative figures are published each year by the tax authority in an annual notice, alongside the phase-out ranges from the previous lesson. That notice, for the year you are asking about, is the citation. A blog post, a colleague, or a course written in a previous year is not.

**The habit, stated as a rule you can apply anywhere.** When you meet a dollar figure in tax or benefits law, ask three questions. Is this a base amount or an operative amount? What is the adjustment mechanism? Where is this year's published figure? Any answer that skips the third question is describing a year, not a rule.

**One further mechanism worth knowing, because it changes participation rather than limits.** The Code now conditions qualification on automatic enrollment for certain arrangements: a cash or deferred arrangement is not treated as a qualified arrangement "unless such arrangement meets the automatic enrollment requirements of subsection (b)", and the same applies to a 403(b) annuity purchased under a salary reduction agreement (26 U.S.C. § 414A, n.d.). The requirement is that the arrangement be an eligible automatic contribution arrangement that also allows permissible withdrawals (26 U.S.C. § 414A, n.d.). The section carries its own exceptions, headed for simple plans, for plans or arrangements established before the section's enactment, for governmental and church plans, and for new and small businesses (26 U.S.C. § 414A, n.d.). That section was added by Public Law 117-328, enacted 29 December 2022, and read here on 29 August 2026. The reason it matters to this course is the take-up rate from Section 1: automatic enrollment is a rule aimed squarely at the gap between having a plan and being in one, and it does nothing at all about the gap between having a plan and not.

:::reveal What are the three separate things behind any annual contribution figure? ||| A base amount printed in the statute, an adjustment mechanism with a base period and a rounding rule, and this year's published number.

:::reveal How does the statute round an increase in the elective deferral amount? ||| To the next lowest multiple of 500 dollars.

:::reveal Which gap does automatic enrollment address, and which does it not? ||| It addresses the gap between having a plan and being in one. It does nothing about having no plan at all.

## Vocabulary
- **Applicable dollar amount**: the statutory base figure for elective deferrals, which the adjustment mechanism converts into the year's operative limit.
- **Cost-of-living adjustment**: the statutory mechanism that moves a base amount using a named base period, an index, and a rounding rule.
- **Rounding rule**: the instruction that decides how an adjusted amount is expressed, such as rounding down to the next lowest multiple of 500 dollars.
- **Eligible automatic contribution arrangement**: the kind of arrangement the automatic enrollment requirement demands, which must also allow permissible withdrawals.
- **Annual notice**: the yearly publication in which the tax authority states the operative limits and phase-out ranges, and the only correct citation for a current figure.

## Sources
26 U.S.C. § 219. (n.d.). *Retirement savings*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/219

26 U.S.C. § 402. (n.d.). *Taxability of beneficiary of employees' trust*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/402

26 U.S.C. § 414A. (n.d.). *Requirements related to automatic enrollment*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/414A`,
    },
    {
      slug: "quiz-tax-timing-and-limits",
      title: "16 · Knowledge check: tax timing, and where the numbers come from",
      section: "Section 4 · Tax timing, and the numbers that reset every year",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What question do traditional and Roth treatment answer differently?",
            options: ["When the money is taxed", "Which assets the account is permitted to hold under federal law", "Whether the employer is required to make a matching contribution", "How quickly the employer's contributions become nonforfeitable"],
            correctIndex: 0,
            explanation: "They are two answers to a single timing question, not two different kinds of product.",
            sourceLessonSlug: "traditional-and-roth-are-a-timing-choice",
          },
          {
            prompt: "What does the Code allow for a qualified retirement contribution on the traditional side?",
            options: ["A deduction", "A credit applied directly against the individual's final tax liability", "An exclusion from gross income that also removes the amount from payroll tax", "A deferral of the filing deadline until the contribution has been made"],
            correctIndex: 0,
            explanation: "The statute allows a deduction equal to the qualified retirement contributions of the individual for the taxable year.",
            sourceLessonSlug: "traditional-and-roth-are-a-timing-choice",
          },
          {
            prompt: "What does the Code say about a deduction for a contribution to a Roth IRA?",
            options: ["None is allowed", "It is allowed only for individuals below a stated income threshold", "It is allowed but must be spread across the following five taxable years", "It is allowed at half the rate applying to a traditional contribution"],
            correctIndex: 0,
            explanation: "No deduction is allowed under section 219 for a contribution to a Roth IRA, which is the whole of the trade.",
            sourceLessonSlug: "traditional-and-roth-are-a-timing-choice",
          },
          {
            prompt: "What is the treatment of a qualified distribution from a Roth IRA?",
            options: ["Not includible in gross income", "Includible in gross income at half the individual's marginal rate", "Includible in gross income but exempt from the additional 10 percent tax", "Taxed at the rate that applied in the year the contribution was made"],
            correctIndex: 0,
            explanation: "The statute excludes any qualified distribution from a Roth IRA from gross income.",
            sourceLessonSlug: "traditional-and-roth-are-a-timing-choice",
          },
          {
            prompt: "What makes an individual retirement plan a Roth IRA?",
            options: ["A designation at establishment", "The kind of assets the account holds once it has been opened", "The income level of the individual in the year the account is opened", "A separate registration filed with the tax authority for each account"],
            correctIndex: 0,
            explanation: "It is an individual retirement plan designated as a Roth IRA at the time the plan is established, and otherwise treated the same way.",
            sourceLessonSlug: "traditional-and-roth-are-a-timing-choice",
          },
          {
            prompt: "Which of these is a qualifying event for a qualified Roth distribution?",
            options: ["Attaining age 59 and a half", "Separating from service with the employer that sponsored the plan", "Reaching the retirement age defined in the Social Security statute", "Completing the plan's vesting schedule for employer contributions"],
            correctIndex: 0,
            explanation: "The listed events are age 59 and a half, death, disability, and a qualified special purpose distribution.",
            sourceLessonSlug: "traditional-and-roth-are-a-timing-choice",
          },
          {
            prompt: "What is the second, independent condition for a qualified distribution?",
            options: ["The 5-taxable-year period", "That the account has been held with the same institution throughout", "That the individual has made a contribution in each intervening year", "That the individual has no other retirement account of any kind"],
            correctIndex: 0,
            explanation: "A payment made within the 5-taxable-year period beginning with the first year a contribution was made is not a qualified distribution.",
            sourceLessonSlug: "traditional-and-roth-are-a-timing-choice",
          },
          {
            prompt: "What follows from there being two conditions rather than one?",
            options: ["Meeting one is not enough", "The individual may choose which of the two conditions to satisfy", "The conditions apply to different accounts held by the same person", "The second condition replaces the first once the individual turns 59"],
            correctIndex: 0,
            explanation: "Clearing the age and missing the period fails, and so does the reverse.",
            sourceLessonSlug: "traditional-and-roth-are-a-timing-choice",
          },
          {
            prompt: "When does the 5-taxable-year period begin?",
            options: ["With the first contribution year", "On the day the individual attains the age of 59 and a half", "At the start of the calendar year in which the account is opened", "When the individual first takes a distribution from the account"],
            correctIndex: 0,
            explanation: "It runs from the first taxable year for which the individual made a contribution to a Roth IRA established for them.",
            sourceLessonSlug: "traditional-and-roth-are-a-timing-choice",
          },
          {
            prompt: "Why does this course refuse to say which treatment is better?",
            options: ["Nobody knows the future rate", "Because the tax difference between the two is too small to be material", "Because the choice is fixed by the plan document rather than the participant", "Because federal law prohibits comparing the two treatments in a publication"],
            correctIndex: 0,
            explanation: "The comparison is between a rate you face now and a rate you will face later, which depends on income, filing situation, and law not yet written.",
            sourceLessonSlug: "traditional-and-roth-are-a-timing-choice",
          },
          {
            prompt: "What does the lesson say about someone who is confident about which side wins?",
            options: ["They are assuming or selling", "They have read the statute more carefully than most other commentators", "They are relying on the annual notice published by the tax authority", "They have access to the phase-out ranges that apply in a future year"],
            correctIndex: 0,
            explanation: "They are either making assumptions they have not shown you or selling something, and the mechanism lets you see which.",
            sourceLessonSlug: "traditional-and-roth-are-a-timing-choice",
          },
          {
            prompt: "What structural point does the lesson make about Roth treatment and employer plans?",
            options: ["They are two separate axes", "Roth treatment is available only through an individual retirement account", "An employer plan must offer Roth treatment if it offers traditional treatment", "Roth treatment inside a plan removes the plan's vesting schedule entirely"],
            correctIndex: 0,
            explanation: "Employer plans commonly permit designated contributions with Roth treatment, so the traditional-or-Roth question is separate from the plan-or-IRA question.",
            sourceLessonSlug: "traditional-and-roth-are-a-timing-choice",
          },
          {
            prompt: "Which confusion does keeping those two axes separate prevent?",
            options: ["Believing you must leave the plan", "Believing that a Roth account cannot receive an employer match at all", "Believing that a designated Roth contribution is not an elective deferral", "Believing that traditional treatment is unavailable inside an employer plan"],
            correctIndex: 0,
            explanation: "People commonly believe they must leave a workplace plan to obtain Roth treatment, which the separation of the two questions dispels.",
            sourceLessonSlug: "traditional-and-roth-are-a-timing-choice",
          },
          {
            prompt: "What does the whole tax-timing question presuppose?",
            options: ["Income to defer", "A vested balance in an employer-sponsored retirement plan", "That the individual has already reached the age of 50 or older", "That the individual's employer offers both treatments in the same plan"],
            correctIndex: 0,
            explanation: "It also presupposes a plan to defer into for the workplace version, which never reaches about half of the lowest-paid quarter of private-sector workers.",
            sourceLessonSlug: "traditional-and-roth-are-a-timing-choice",
          },
          {
            prompt: "How does the statute describe the relationship between a Roth IRA and an ordinary individual retirement plan?",
            options: ["Treated the same except as provided", "Treated as a wholly separate arrangement with its own body of rules", "Treated as a plan of the employer rather than of the individual holder", "Treated as an annuity contract rather than as an individual retirement plan"],
            correctIndex: 0,
            explanation: "Except as the section provides, a Roth IRA is treated for purposes of the title in the same manner as an individual retirement plan.",
            sourceLessonSlug: "traditional-and-roth-are-a-timing-choice",
          },
          {
            prompt: "What can reduce the deduction for a contribution to your own IRA?",
            options: ["Active participant status", "Holding more than one individual retirement account in the same year", "Receiving an employer matching contribution during the same taxable year", "Making the contribution after the end of the calendar year it relates to"],
            correctIndex: 0,
            explanation: "If the individual or the individual's spouse is an active participant, the dollar limitations are reduced, but not below zero.",
            sourceLessonSlug: "the-active-participant-rule",
          },
          {
            prompt: "How far can the active-participant reduction go?",
            options: ["Not below zero", "To half of the otherwise applicable deductible amount in any case", "To whatever amount the plan administrator certifies as appropriate", "To the amount of the employer's matching contribution for that year"],
            correctIndex: 0,
            explanation: "The statute says the dollar limitations shall be reduced but not below zero.",
            sourceLessonSlug: "the-active-participant-rule",
          },
          {
            prompt: "Whose participation can trigger the reduction besides your own?",
            options: ["Your spouse's", "Any dependent claimed on the same return for that taxable year", "Any person living in the same household regardless of relationship", "A former employer with whom the individual still holds an old balance"],
            correctIndex: 0,
            explanation: "The statute reads \"an individual or the individual's spouse is an active participant\", so a household with one covered worker may be reached.",
            sourceLessonSlug: "the-active-participant-rule",
          },
          {
            prompt: "What does the lesson say about the uncovered spouse?",
            options: ["Separate treatment applies", "The rule ignores them entirely for every taxable year in question", "They must open an account at the same institution as the covered spouse", "They are treated as an active participant in all circumstances regardless"],
            correctIndex: 0,
            explanation: "There is separate treatment for the uncovered spouse, which is exactly the kind of detail that has to be read for the current year.",
            sourceLessonSlug: "the-active-participant-rule",
          },
          {
            prompt: "Two people with identical incomes and contributions get different deductions. What explains it?",
            options: ["One has a plan at work", "One made the contribution earlier in the calendar year than the other", "One holds their account at a bank and the other at a brokerage firm", "One elected Roth treatment and the other elected traditional treatment"],
            correctIndex: 0,
            explanation: "The employer's decision, made for the employer's reasons, changes the tax treatment of an account the employer has nothing to do with.",
            sourceLessonSlug: "the-active-participant-rule",
          },
          {
            prompt: "How does the statute define active participant?",
            options: ["By listing arrangements", "By the dollar amount the individual contributed during the taxable year", "By whether the individual's rights under the plan have become vested", "By the number of hours the individual worked for the employer that year"],
            correctIndex: 0,
            explanation: "It lists the qualifying arrangements, which is why the test is about the arrangement rather than about the amount put in.",
            sourceLessonSlug: "the-active-participant-rule",
          },
          {
            prompt: "Which of these appears on the statutory list of qualifying arrangements?",
            options: ["A section 403(b) annuity contract", "Any brokerage account the individual maintains outside a retirement plan", "A savings account at a federally insured depository institution", "A health savings account maintained alongside a high deductible plan"],
            correctIndex: 0,
            explanation: "The list includes 401(a) plans with tax-exempt trusts, 403(a) annuity plans, governmental plans, 403(b) annuity contracts, 408(k) SEPs and 408(p) simple accounts.",
            sourceLessonSlug: "the-active-participant-rule",
          },
          {
            prompt: "Does being unvested keep you out of active participant status?",
            options: ["No", "Yes, until the plan's vesting schedule has been completed in full", "Yes, unless the employer has made a contribution in the same year", "Yes, for a cliff schedule but not for a graded schedule"],
            correctIndex: 0,
            explanation: "The determination applies whether or not rights under the plan are forfeitable.",
            sourceLessonSlug: "the-active-participant-rule",
          },
          {
            prompt: "What is a phase-out, in the sense this lesson uses?",
            options: ["A reduction across an income range", "A schedule under which an employer contribution becomes nonforfeitable", "A period during which no contribution to the account may be made at all", "The gradual closure of a plan after the sponsoring employer withdraws"],
            correctIndex: 0,
            explanation: "The deduction is progressively reduced across a range rather than lost at a single cliff, and it never falls below zero.",
            sourceLessonSlug: "the-active-participant-rule",
          },
          {
            prompt: "What half-truth does this rule correct in the usual framing of retirement policy?",
            options: ["That the two systems are independent", "That individual accounts are available only to people without a workplace plan", "That employers must offer a plan once they reach a stated number of employees", "That workplace plans and individual accounts are taxed at different rates"],
            correctIndex: 0,
            explanation: "Whether you have a workplace plan is itself an input into how the individual account is taxed, so the connection runs from the employer's choice into your return.",
            sourceLessonSlug: "the-active-participant-rule",
          },
          {
            prompt: "Why does this course print none of the phase-out thresholds?",
            options: ["They are adjusted annually", "Because they differ from one state to another across the country", "Because plan documents rather than statutes set them for each employer", "Because they apply only to taxpayers above a certain age threshold"],
            correctIndex: 0,
            explanation: "The course teaches the shape of the rule and points at where the current year's published figures live.",
            sourceLessonSlug: "the-active-participant-rule",
          },
          {
            prompt: "Which features of the active-participant rule does the course teach instead of the numbers?",
            options: ["Its shape", "The historical values of each threshold over the last decade", "The identity of the agency responsible for publishing the figures", "The proportion of taxpayers affected by the reduction each year"],
            correctIndex: 0,
            explanation: "There is a reduction, it depends on active-participant status, it depends on filing situation, it is phased across a range, and it never goes below zero.",
            sourceLessonSlug: "the-active-participant-rule",
          },
          {
            prompt: "What does the statute print as the applicable dollar amount for elective deferrals?",
            options: ["15,000 dollars", "5,000 dollars, which is the figure printed for the deductible amount", "7,000 dollars, which is the consent threshold for a mandatory distribution", "1,000 dollars, which is the catch-up figure printed for individuals over 50"],
            correctIndex: 0,
            explanation: "The statute states the applicable dollar amount as 15,000, and then directs the Secretary to adjust it.",
            sourceLessonSlug: "a-base-amount-and-an-adjustment",
          },
          {
            prompt: "Is that printed figure the limit that applies in a given year?",
            options: ["No", "Yes, it is fixed until Congress passes a new statute changing it", "Yes, unless the individual is also an active participant in a plan", "Yes, for elective deferrals although not for individual account contributions"],
            correctIndex: 0,
            explanation: "It is a base amount, and the adjustment mechanism converts it into the operative figure published each year.",
            sourceLessonSlug: "a-base-amount-and-an-adjustment",
          },
          {
            prompt: "What base period does the statute use for adjusting the elective deferral amount?",
            options: ["The quarter beginning July 1, 2005", "Calendar year 2007, which is the base for the deductible amount instead", "Calendar year 2022, which is the base for the catch-up amount instead", "The date the individual first became a participant in an employer plan"],
            correctIndex: 0,
            explanation: "The provision names the calendar quarter beginning July 1, 2005 as the base period for that adjustment.",
            sourceLessonSlug: "a-base-amount-and-an-adjustment",
          },
          {
            prompt: "How is an increase in the elective deferral amount rounded?",
            options: ["Down to a multiple of 500", "Up to the nearest multiple of 500 dollars in every case", "Down to a multiple of 100 dollars, matching the catch-up rule", "To whichever multiple of 1,000 dollars is closest to the computed figure"],
            correctIndex: 0,
            explanation: "Any increase not a multiple of 500 is rounded to the next lowest multiple of 500.",
            sourceLessonSlug: "a-base-amount-and-an-adjustment",
          },
          {
            prompt: "What does the statute print as the deductible amount for an individual retirement contribution?",
            options: ["5,000 dollars", "15,000 dollars, which is the applicable amount for elective deferrals", "1,000 dollars, which is the catch-up figure for individuals over 50", "7,000 dollars, which is the small-balance consent threshold in a plan"],
            correctIndex: 0,
            explanation: "The statute says the deductible amount is 5,000 dollars, and then adjusts it for taxable years beginning after 2008.",
            sourceLessonSlug: "a-base-amount-and-an-adjustment",
          },
          {
            prompt: "The deduction may not exceed the lesser of the deductible amount and what?",
            options: ["Includible compensation", "The total the individual contributed to every retirement account that year", "The employer's matching contribution made on the individual's behalf", "The amount published in the annual notice for the preceding taxable year"],
            correctIndex: 0,
            explanation: "The statutory ceiling is the lesser of the deductible amount or the compensation includible in the individual's gross income for the year.",
            sourceLessonSlug: "a-base-amount-and-an-adjustment",
          },
          {
            prompt: "What base year does the statute use for adjusting the deductible amount?",
            options: ["Calendar year 2007", "The calendar quarter beginning July 1, 2005, used for elective deferrals", "Calendar year 2022, which is the base used for the catch-up amount", "The year the individual first opened an individual retirement account"],
            correctIndex: 0,
            explanation: "The adjustment applies for taxable years beginning after 2008 using calendar year 2007 as the base.",
            sourceLessonSlug: "a-base-amount-and-an-adjustment",
          },
          {
            prompt: "What figure does the statute print for the catch-up contribution for individuals aged 50 and over?",
            options: ["1,000 dollars", "5,000 dollars, which is the base deductible amount for any individual", "500 dollars, which is the rounding increment rather than an amount", "15,000 dollars, which is the base amount for elective deferrals instead"],
            correctIndex: 0,
            explanation: "The catch-up amount is stated as 1,000 dollars and is adjusted on its own cycle.",
            sourceLessonSlug: "a-base-amount-and-an-adjustment",
          },
          {
            prompt: "How is the catch-up amount rounded when adjusted?",
            options: ["To a lower multiple of 100", "To a lower multiple of 500, matching the other two adjustments", "Up to the nearest whole dollar in the year the adjustment applies", "To the nearest multiple of 250 dollars in the direction of increase"],
            correctIndex: 0,
            explanation: "The catch-up adjustment uses calendar year 2022 as its base and rounds to a lower multiple of 100.",
            sourceLessonSlug: "a-base-amount-and-an-adjustment",
          },
          {
            prompt: "Which of the three things behind an annual figure is described as stable but not the answer?",
            options: ["The base amount", "This year's published figure, which is correct until it changes", "The adjustment mechanism, which is the actual content of the rule", "The rounding increment, which varies between the different provisions"],
            correctIndex: 0,
            explanation: "The base amount is stable and quotable and is not the operative limit for any year.",
            sourceLessonSlug: "a-base-amount-and-an-adjustment",
          },
          {
            prompt: "Which of the three does the lesson call the actual content of the rule?",
            options: ["The adjustment mechanism", "The base amount, because it is the figure Congress actually enacted", "The published figure, because it is what a taxpayer must comply with", "The phase-out range, because it decides how much of the deduction survives"],
            correctIndex: 0,
            explanation: "A base period, an index and a rounding rule are the durable substance, and only the output changes each year.",
            sourceLessonSlug: "a-base-amount-and-an-adjustment",
          },
          {
            prompt: "Where does the operative figure for a given year live?",
            options: ["In an annual notice", "In the plan document maintained by the participant's own employer", "In the summary the recordkeeper sends with each quarterly statement", "In the statute itself, which is amended by Congress every year"],
            correctIndex: 0,
            explanation: "The tax authority publishes the operative figures each year alongside the phase-out ranges, and that notice is the citation.",
            sourceLessonSlug: "a-base-amount-and-an-adjustment",
          },
          {
            prompt: "Which sources does the lesson say are NOT the citation for a current figure?",
            options: ["A blog post or a colleague", "The annual notice published for the taxable year in question", "The section of the Code that sets the base amount and the adjustment", "The plan's own comparative chart of designated investment alternatives"],
            correctIndex: 0,
            explanation: "A blog post, a colleague, or a course written in an earlier year is not the citation. The year's notice is.",
            sourceLessonSlug: "a-base-amount-and-an-adjustment",
          },
          {
            prompt: "What is the third question in the habit the lesson recommends for any dollar figure in tax or benefits law?",
            options: ["Where is this year's figure", "Who enacted the provision that first introduced the amount", "How many taxpayers the amount applies to in a typical year", "Whether the amount has ever been reduced rather than increased"],
            correctIndex: 0,
            explanation: "Ask whether it is a base or an operative amount, what the adjustment mechanism is, and where this year's published figure lives.",
            sourceLessonSlug: "a-base-amount-and-an-adjustment",
          },
          {
            prompt: "What does the lesson say about an answer that skips that third question?",
            options: ["It describes a year, not a rule", "It is acceptable provided the base amount is quoted accurately", "It will be correct until the next cost-of-living adjustment is announced", "It applies only to taxpayers who are not active participants in a plan"],
            correctIndex: 0,
            explanation: "Without the current published figure, the answer is a snapshot of one year rather than a statement of the rule.",
            sourceLessonSlug: "a-base-amount-and-an-adjustment",
          },
          {
            prompt: "What does the automatic enrollment section condition on the enrollment requirement?",
            options: ["Qualification of the arrangement", "The employer's entitlement to deduct its own contributions to the plan", "The participant's ability to take a distribution after leaving employment", "The plan's obligation to furnish an annual participant fee disclosure"],
            correctIndex: 0,
            explanation: "An arrangement is not treated as a qualified cash or deferred arrangement unless it meets the automatic enrollment requirements.",
            sourceLessonSlug: "a-base-amount-and-an-adjustment",
          },
          {
            prompt: "Which other kind of arrangement does the same section reach?",
            options: ["A 403(b) salary reduction annuity", "A simplified employee pension established by a small business owner", "An individual retirement account opened directly with a financial institution", "A defined benefit plan funded entirely by the sponsoring employer"],
            correctIndex: 0,
            explanation: "An annuity contract described in section 403(b) purchased under a salary reduction agreement is covered by the same requirement.",
            sourceLessonSlug: "a-base-amount-and-an-adjustment",
          },
          {
            prompt: "What must an eligible automatic contribution arrangement also allow?",
            options: ["Permissible withdrawals", "An employer matching contribution of at least a stated percentage", "Immediate vesting of every contribution the employer makes to it", "A participant to opt out only during an annual enrolment window"],
            correctIndex: 0,
            explanation: "The requirement is that the arrangement be an eligible automatic contribution arrangement allowing permissible withdrawals as defined by cross-reference.",
            sourceLessonSlug: "a-base-amount-and-an-adjustment",
          },
          {
            prompt: "Which of these is one of the section's own headed exceptions?",
            options: ["Governmental and church plans", "Plans covering workers in the lowest-paid quarter of occupations", "Plans that already offer designated contributions with Roth treatment", "Plans whose participant fee disclosure is furnished electronically"],
            correctIndex: 0,
            explanation: "The exceptions are headed for simple plans, plans established before enactment, governmental and church plans, and new and small businesses.",
            sourceLessonSlug: "a-base-amount-and-an-adjustment",
          },
          {
            prompt: "When was the automatic enrollment section enacted?",
            options: ["29 December 2022", "29 August 2026, the date this course read the provision", "18 March 2026, the date of the worker participation report", "1 July 2005, the base period for the elective deferral adjustment"],
            correctIndex: 0,
            explanation: "It was added by Public Law 117-328, enacted on that date, and read for this course on 29 August 2026.",
            sourceLessonSlug: "a-base-amount-and-an-adjustment",
          },
          {
            prompt: "Which gap from Section 1 does automatic enrollment address?",
            options: ["Access to participation", "The gap between having no plan and having one on offer at work", "The gap between the lowest-paid and the highest-paid quarter of occupations", "The gap between an employer's contribution and a participant's own deferral"],
            correctIndex: 0,
            explanation: "It aims squarely at the take-up rate, and does nothing about a worker whose employer sponsors no plan at all.",
            sourceLessonSlug: "a-base-amount-and-an-adjustment",
          },
          {
            prompt: "What does automatic enrollment do nothing about?",
            options: ["Having no plan at all", "The rate at which a participant's contributions are automatically escalated", "The fees a plan charges against the accounts of enrolled participants", "The order in which a participant's contributions are invested by default"],
            correctIndex: 0,
            explanation: "The requirement operates on arrangements that exist, so it cannot reach a worker whose employer sponsors none.",
            sourceLessonSlug: "a-base-amount-and-an-adjustment",
          },
          {
            prompt: "How many separate adjustment cycles does Section 4 identify in the two statutes it reads?",
            options: ["Three", "One, applied uniformly to every dollar amount in both sections", "Six, one for each dollar figure appearing anywhere in the two sections", "None, because the amounts are fixed until Congress amends them again"],
            correctIndex: 0,
            explanation: "The elective deferral amount, the deductible amount, and the catch-up amount each carry their own base period and rounding rule.",
            sourceLessonSlug: "a-base-amount-and-an-adjustment",
          },
          {
            prompt: "What is the practical reason the base amount is worth knowing at all?",
            options: ["It is stable and quotable", "It is the figure a taxpayer must actually comply with each year", "It is the amount the annual notice publishes without any adjustment", "It is the figure a plan uses to compute its matching contribution"],
            correctIndex: 0,
            explanation: "It tells you which provision to read and where the adjustment mechanism attaches, without pretending to be the year's limit.",
            sourceLessonSlug: "a-base-amount-and-an-adjustment",
          },
          {
            prompt: "Why does the lesson call the printed statutory figure and the operative figure two different things?",
            options: ["An adjustment sits between them", "Because different agencies publish each of the two numbers separately", "Because the statute applies to plans and the notice applies to individuals", "Because one is a ceiling and the other is a floor on the same contribution"],
            correctIndex: 0,
            explanation: "The statute prints a base, then directs an adjustment with a base period and a rounding rule, so the two are not the same number.",
            sourceLessonSlug: "a-base-amount-and-an-adjustment",
          },
          {
            prompt: "Which of these does the deduction ceiling NOT depend on?",
            options: ["The employer's match", "The deductible amount as adjusted for the taxable year in question", "The compensation includible in the individual's gross income that year", "Whether the individual or their spouse is an active participant"],
            correctIndex: 0,
            explanation: "The ceiling is the lesser of the deductible amount and includible compensation, then reduced for active-participant status.",
            sourceLessonSlug: "a-base-amount-and-an-adjustment",
          },
          {
            prompt: "What connects Section 4's tax rules back to Section 1's access finding?",
            options: ["Both start from whether a plan exists", "Both were read from the same statute on the same date in August 2026", "Both are published in the annual notice issued by the tax authority", "Both apply only to participants in participant-directed individual account plans"],
            correctIndex: 0,
            explanation: "The timing choice presupposes a plan and income to defer, and the active-participant rule turns the employer's choice into a tax consequence.",
            sourceLessonSlug: "the-active-participant-rule",
          },
          {
            prompt: "In what sense is the traditional-against-Roth choice a comparison of two rates?",
            options: ["One now and one later", "One for the employer and one for the employee on the same contribution", "One inside the plan and one on the individual retirement account", "One on the contribution and one on the earnings the account produces"],
            correctIndex: 0,
            explanation: "It compares the rate you face when contributing with the rate you will face when distributing, and only the first is known.",
            sourceLessonSlug: "traditional-and-roth-are-a-timing-choice",
          },
          {
            prompt: "What kind of distribution besides age, death and disability can be qualified?",
            options: ["A qualified special purpose distribution", "Any distribution taken after the 5-taxable-year period has elapsed", "A distribution taken in the year the individual separates from service", "A distribution rolled directly into another individual retirement plan"],
            correctIndex: 0,
            explanation: "The statute's list of qualifying events includes a qualified special purpose distribution alongside the three others.",
            sourceLessonSlug: "traditional-and-roth-are-a-timing-choice",
          },
          {
            prompt: "What does the phrase \"deductible amount\" refer to in the active-participant rule?",
            options: ["The ceiling before any reduction", "The amount remaining after the phase-out has been applied in full", "The employer contribution that may be deducted by the business", "The portion of a distribution excluded from the individual's income"],
            correctIndex: 0,
            explanation: "It is the statutory ceiling on the deduction, which the active-participant reduction then operates on.",
            sourceLessonSlug: "the-active-participant-rule",
          },
          {
            prompt: "Why is filing situation part of the shape of the active-participant rule?",
            options: ["It changes which threshold applies", "It determines whether the individual counts as an active participant", "It decides whether the contribution may be made at all in that year", "It fixes the rounding increment used to adjust the deductible amount"],
            correctIndex: 0,
            explanation: "That is why a single remembered number is almost always the wrong one for the reader who remembered it.",
            sourceLessonSlug: "the-active-participant-rule",
          },
          {
            prompt: "Which trust does the active-participant definition mention alongside the employer arrangements?",
            options: ["A section 501(c)(18) trust", "A grantor trust established by the individual for estate planning", "The trust holding the assets of any participant-directed account plan", "A charitable remainder trust funded with appreciated employer stock"],
            correctIndex: 0,
            explanation: "The definition covers a trust described in section 501(c)(18) to which deductible contributions are made.",
            sourceLessonSlug: "the-active-participant-rule",
          },
          {
            prompt: "For what period must active-participant status be tested?",
            options: ["Any part of any plan year", "The whole of the taxable year without any interruption in coverage", "The final quarter of the calendar year in which the contribution is made", "The period beginning when the individual first became eligible to join"],
            correctIndex: 0,
            explanation: "The statute reaches any part of any plan year ending with or within the taxable year, so partial-year coverage counts.",
            sourceLessonSlug: "the-active-participant-rule",
          },
          {
            prompt: "Which statement about the two figures Section 4 quotes from the statutes is accurate?",
            options: ["Neither is a current limit", "Both are the operative limits published for the current taxable year", "One is a current limit and the other is a base subject to adjustment", "Both were repealed and replaced by the annual notice mechanism"],
            correctIndex: 0,
            explanation: "The 15,000 and the 5,000 are both base amounts carrying their own adjustment mechanisms.",
            sourceLessonSlug: "a-base-amount-and-an-adjustment",
          },
          {
            prompt: "Why does this course say knowing the pattern beats knowing either number?",
            options: ["Only the pattern stays true", "Because the published figure is often reported inaccurately by commentators", "Because the base amount is easier for a general reader to remember", "Because the rounding rule changes more often than the base period does"],
            correctIndex: 0,
            explanation: "The base amount and the operative amount are different things, and the mechanism connecting them is what survives every annual change.",
            sourceLessonSlug: "a-base-amount-and-an-adjustment",
          },
          {
            prompt: "Which section of this course does the automatic enrollment provision speak to most directly?",
            options: ["The access and participation section", "The section on fees and the participant disclosure that reports them", "The section on vesting schedules and what happens when you leave", "The section on how a Social Security benefit is actually computed"],
            correctIndex: 0,
            explanation: "It is a rule about the take-up rate, which is the ratio Section 1 separated out from access and participation.",
            sourceLessonSlug: "a-base-amount-and-an-adjustment",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5 — Social Security, the floor under the whole thing
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "coverage-and-the-earnings-record",
      title: "17 · Coverage, and the record that becomes conclusive",
      section: "Section 5 · Social Security, the floor under the whole thing",
      body: `Everything so far in this course has been optional for an employer and optional for you. Social Security is neither, and that is the first thing to understand about it.

**Insured status is a count, and the statute does the counting.** A "fully insured individual" is one who had at least one quarter of coverage for each calendar year elapsing after 1950, or after the year they turned 21 if later, and before the year they died or turned 62, with a minimum of 6 quarters in any case; **or** who had "40 quarters of coverage" (42 U.S.C. § 414, n.d.). That second route is the one most people are describing when they talk about forty quarters, or ten years of work. It is a floor on eligibility, not a measure of the benefit.

**There is a second status with a different count.** A "currently insured individual" is one with at least six quarters of coverage during the thirteen-quarter period ending with the quarter in which they died, became entitled to old-age insurance benefits, or most recently became entitled to disability insurance benefits (42 U.S.C. § 414, n.d.). The two statuses do different jobs, and confusing them is a common error.

**Now the part almost nobody knows, and it is the reason this lesson exists.** Your earnings record is not permanently open to correction. The statute defines a "time limitation" as "a period of three years, three months, and fifteen days" (42 U.S.C. § 405, n.d.). After that period has expired for a given year, the agency's records of the amounts of wages paid to and self-employment income derived by an individual during any period in that year "shall be conclusive for the purposes of this subchapter", subject to changes made under the following paragraph (42 U.S.C. § 405, n.d.).

**Read the word conclusive.** It does not mean hard to change. It means that after the period runs, the record is the fact, and an employer's failure to report your wages correctly can become the legally operative version of your working life.

**The exceptions are real but they are a list.** After the time limitation expires the agency may still change or delete an entry, or include an omitted item, but "only" in the circumstances the statute then enumerates (42 U.S.C. § 405, n.d.). The regulation works several of those through, including conforming the record to a tax return: for wages, the agency may correct its records to agree with the return; for self-employment income, a return filed before the deadline may support a correction, while one filed after it may support only a reduction or removal rather than an increase (20 CFR § 404.822, n.d.).

**The action item is small and the consequence is not.** Check your earnings record. Every year of covered work you did that is missing from it is a year the benefit formula in the next lesson will treat as a year you earned nothing, and after three years, three months and fifteen days you are arguing against a record the statute calls conclusive rather than against a clerical error. This course names no service and sells nothing; the record is yours and the agency that keeps it is where you get it.

:::reveal What are the two routes to fully insured status? ||| A quarter of coverage for each elapsed year after 1950 or after age 21 with a minimum of six, or 40 quarters of coverage.

:::reveal How long is the statutory time limitation for correcting an earnings record? ||| Three years, three months, and fifteen days.

:::reveal What does the statute say the agency's records become after that period expires? ||| Conclusive, subject only to the enumerated circumstances in which a change may still be made.

## Vocabulary
- **Quarter of coverage**: the unit the statute counts to decide insured status, earned through covered work rather than through any application.
- **Fully insured individual**: someone meeting either the elapsed-years count or the 40-quarter count, which is the eligibility floor rather than a measure of benefit size.
- **Currently insured individual**: someone with at least six quarters of coverage in the thirteen-quarter period ending on a stated event, a separate status doing a different job.
- **Time limitation**: the period of three years, three months and fifteen days after which the agency's earnings records for a year become conclusive.
- **Conclusive record**: a record the statute treats as the fact, changeable afterwards only in the enumerated circumstances.

## Sources
42 U.S.C. § 405. (n.d.). *Evidence, procedure, and certification for payments*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/42/405

42 U.S.C. § 414. (n.d.). *Insured status for purposes of old-age and survivors insurance benefits*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/42/414

20 CFR § 404.822. (n.d.). *Correction of the record of your earnings after the time limit ends*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/20/404.822`,
    },
    {
      slug: "how-the-benefit-is-computed",
      title: "18 · How the benefit is actually computed, in four steps",
      section: "Section 5 · Social Security, the floor under the whole thing",
      body: `The computation is not a mystery and it is not a black box. It is four steps, each of them written down.

**Step one: index the earnings.** Earnings from earlier years are not used at their face value. Each computation base year's wages and self-employment income are deemed equal to that year's amount multiplied by a quotient: the national average wage index for the second calendar year preceding the year of the triggering event, divided by the national average wage index for the computation base year (42 U.S.C. § 415, n.d.). The regulation describes the same operation as multiplying the actual year-by-year dollar amounts by the quotients found for each of those years (20 CFR § 404.211, n.d.). The effect is that a dollar earned decades ago is restated in the wage terms of the year the benefit is being computed against.

**Step two: choose the years that count.** The regulation defines computation base years as all years after 1950 up to but not including the year of entitlement, and then says that for benefit computation years "we use the years with the highest amounts of earnings after indexing" (20 CFR § 404.211, n.d.). How many years is set by statute: the number of benefit computation years equals the number of elapsed years reduced, for old-age insurance benefits, "by 5 years" (42 U.S.C. § 415, n.d.). For a worker whose elapsed years run from age 22 through 61, dropping the five lowest indexed years leaves 35. That is where the familiar thirty-five-year figure comes from. It is a derived number, not a slogan.

**Step three: divide by months.** The indexed amounts for the benefit computation years are added, and the total is divided by the number of months in those years (20 CFR § 404.211, n.d.). The result is the **average indexed monthly earnings**, usually written AIME.

**Step four: apply a three-band formula, and notice its shape.** The primary insurance amount is "90 percent" of the AIME up to a first threshold, plus "32 percent" of the AIME above that threshold and up to a second, plus "15 percent" of the AIME above the second (42 U.S.C. § 415, n.d.). The regulation adds that the dollar amounts in the formula receive automatic annual increases tracking wage growth, that the formula applying to you is the one for the year you reach 62, become disabled or die, whichever is first, and that new formulas are published in the Federal Register (20 CFR § 404.212, n.d.).

**Those three percentages are the whole political and mathematical character of the program.** The first band replaces 90 cents of every dollar. The last replaces 15. That is a progressive replacement rate written into a statute: the program returns proportionally more of the earnings of a low earner than of a high earner. You do not have to like it or dislike it to need to know it, because it is what makes the benefit behave the way it does at the bottom of the earnings distribution, and it is why the thresholds themselves are the numbers that get argued about.

**The two things you should never carry in your head.** The threshold dollar figures, because they are adjusted every year, and any specific benefit amount, because it falls out of your own indexed record. This course prints neither. What it gives you is the procedure, so that you can read your own statement and see which step produced which line.

:::reveal What does indexing do to earnings from earlier years? ||| It restates them in the wage terms of the year the benefit is computed against, using a ratio of national average wage indices.

:::reveal Where does the familiar thirty-five-year figure come from? ||| It is derived: the number of benefit computation years is the number of elapsed years reduced by five, and the highest indexed years are the ones used.

:::reveal What are the three percentages in the primary insurance amount formula? ||| 90 percent of the first band, 32 percent of the second, and 15 percent of the amount above that.

## Vocabulary
- **Indexing**: restating an earlier year's earnings using the ratio of national average wage indices, so old and recent earnings are expressed in comparable terms.
- **Computation base year**: any year after 1950 up to but not including the year of entitlement, from which the benefit computation years are selected.
- **Benefit computation year**: one of the highest indexed earning years, counted as the elapsed years reduced by five for an old-age benefit.
- **Average indexed monthly earnings**: the total indexed earnings of the benefit computation years divided by the number of months in those years.
- **Primary insurance amount**: the figure produced by applying the three-band formula to the average indexed monthly earnings.

## Sources
20 CFR § 404.211. (n.d.). *Computing your average indexed monthly earnings*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/20/404.211

20 CFR § 404.212. (n.d.). *Computing your primary insurance amount from your average indexed monthly earnings*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/20/404.212

42 U.S.C. § 415. (n.d.). *Computation of primary insurance amount*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/42/415`,
    },
    {
      slug: "retirement-age-and-the-floor",
      title: "19 · Retirement age is in the statute, and it moved",
      section: "Section 5 · Social Security, the floor under the whole thing",
      body: `Two ages do different jobs, both of them are written into the statute rather than set by an agency, and one of them has been changing on a schedule Congress wrote decades in advance.

**Early retirement age is fixed.** The statute defines it as "age 62 in the case of an old-age, wife's, or husband's insurance benefit, and age 60 in the case of a widow's or widower's insurance benefit" (42 U.S.C. § 416, n.d.).

**Retirement age is a table, and reading it is the lesson.** The statute defines the term by cohort:

- 65 for an individual attaining early retirement age before January 1, 2000.
- 65 plus an age increase factor for someone attaining early retirement age after December 31, 1999 and before January 1, 2005.
- 66 for someone attaining early retirement age after December 31, 2004 and before January 1, 2017.
- 66 plus an age increase factor for someone attaining early retirement age after December 31, 2016 and before January 1, 2022.
- 67 for someone attaining early retirement age after December 31, 2021 (42 U.S.C. § 416, n.d.).

**Notice the design.** The change was legislated to phase in across cohorts over decades, with two flat plateaus and two ramps. Anyone whose retirement age is 67 has had that fact fixed in statute since long before they thought about it. This is a rare case where the number a person needs is genuinely stable, because the last step has already arrived: the final clause has no further increase after it.

**Why this matters here rather than as trivia.** Every other rule in this course is about an account somebody chooses to offer. This one is about a program that reaches almost everyone who works in covered employment, computed by a formula you can read, payable for life, and indexed. Whatever a household does or does not have in an account, this is the layer underneath.

**And for a large share of people it is not a layer, it is the structure.** Analysing survey data on people aged 65 and older, the Congressional Research Service reported that approximately 92 percent of individuals aged 65 and older received household income from Social Security, and that Social Security was the most common source of income among the aged in 2019, representing approximately 29.5 percent of aggregate income for that population (Congressional Research Service, 2025). The distribution inside that average is the finding that matters: "61.5% of aged individuals in the bottom 20% of the household income distribution rely on Social Security for 90% or more of household income in 2019, compared with almost none of those in the top two household income quintiles" (Congressional Research Service, 2025). That analysis uses data reflecting income received in calendar year 2019 and was updated on 5 August 2025.

**Set that beside Section 1 and the shape of the whole course appears.** The workers least likely to have a plan available at work are the workers most likely to reach 65 with Social Security as nearly all of their income. The two facts are not a coincidence and they are not separate subjects. They are the same fact seen at two ends of a working life.

:::reveal What is early retirement age for an old-age insurance benefit? ||| Age 62, with age 60 applying instead to a widow's or widower's insurance benefit.

:::reveal What is the retirement age for an individual attaining early retirement age after December 31, 2021? ||| 67, and the statute provides no further increase after that step.

:::reveal What share of aged individuals in the bottom fifth of the income distribution relied on Social Security for 90 percent or more of household income in 2019? ||| 61.5 percent, against almost none of those in the top two quintiles.

## Vocabulary
- **Early retirement age**: age 62 for an old-age, wife's or husband's insurance benefit, and age 60 for a widow's or widower's benefit, fixed by statute.
- **Retirement age**: the age defined by a statutory table keyed to the year an individual attains early retirement age, running from 65 to 67 across cohorts.
- **Age increase factor**: the statutory device that phases retirement age upward by months across the two transition cohorts rather than in a single step.
- **Aggregate income**: the total income of a population, used here to express how large a share of the income of people aged 65 and older comes from one source.

## Sources
42 U.S.C. § 416. (n.d.). *Additional definitions*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/42/416

Congressional Research Service. (2025, August 5). *Income for the population ages 65 and older: Evidence from the Health and Retirement Study (HRS)* (R47341). https://www.everycrsreport.com/reports/R47341.html`,
    },
    {
      slug: "quiz-social-security",
      title: "20 · Knowledge check: coverage, the computation, and the floor",
      section: "Section 5 · Social Security, the floor under the whole thing",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "How does Social Security differ from everything else taught so far in this course?",
            options: ["It is not optional for an employer", "It is administered by the same agency that supervises employee benefit plans", "It is funded by contributions the participant elects to defer from each paycheck", "It pays a benefit determined by the assets held in an account in the worker's name"],
            correctIndex: 0,
            explanation: "Every other arrangement in the course exists because an employer chose to offer it. Covered employment is not a choice of that kind.",
            sourceLessonSlug: "coverage-and-the-earnings-record",
          },
          {
            prompt: "Which is the second route to fully insured status in the statute?",
            options: ["40 quarters of coverage", "Ten consecutive years of employment with the same covered employer", "Six quarters of coverage within the thirteen quarters before entitlement", "Attaining the retirement age defined for the individual's own birth cohort"],
            correctIndex: 0,
            explanation: "The statute states either an elapsed-years count with a minimum of six quarters, or 40 quarters of coverage.",
            sourceLessonSlug: "coverage-and-the-earnings-record",
          },
          {
            prompt: "In the elapsed-years route to fully insured status, from which year does counting begin?",
            options: ["After 1950, or after age 21 if later", "After the first year in which the individual earned any wages at all", "After the year the individual attains early retirement age under the statute", "After 1935, the year the underlying programme was first established"],
            correctIndex: 0,
            explanation: "The count covers each calendar year elapsing after 1950, or after the year the individual attained age 21 if that is later.",
            sourceLessonSlug: "coverage-and-the-earnings-record",
          },
          {
            prompt: "What is the minimum number of quarters under the elapsed-years route?",
            options: ["Six", "Forty, matching the alternative route stated in the same subsection", "Thirteen, matching the period used for currently insured status", "One for each year elapsed, with no floor applying in any circumstance"],
            correctIndex: 0,
            explanation: "The statute says in no case shall an individual be fully insured unless they have at least 6 quarters of coverage.",
            sourceLessonSlug: "coverage-and-the-earnings-record",
          },
          {
            prompt: "What does fully insured status actually establish?",
            options: ["Eligibility, not benefit size", "The dollar amount of the monthly benefit the individual will receive", "The age at which the individual becomes entitled to claim a benefit", "The share of a household's income the benefit will eventually replace"],
            correctIndex: 0,
            explanation: "It is a floor on eligibility. The size of the benefit falls out of the earnings record and the formula.",
            sourceLessonSlug: "coverage-and-the-earnings-record",
          },
          {
            prompt: "What is a currently insured individual?",
            options: ["Six quarters in thirteen", "Anyone who has accumulated forty quarters of coverage over a lifetime", "A person receiving an old-age insurance benefit in the current month", "A worker whose employer is currently reporting wages to the agency"],
            correctIndex: 0,
            explanation: "The status requires at least six quarters of coverage during the thirteen-quarter period ending with a stated event.",
            sourceLessonSlug: "coverage-and-the-earnings-record",
          },
          {
            prompt: "How long is the statutory time limitation for a year's earnings record?",
            options: ["Three years, three months, and fifteen days", "Three full calendar years counted from the end of the year in question", "Seven years, matching the general reporting period for adverse credit items", "Ten years, matching the period covered by forty quarters of coverage"],
            correctIndex: 0,
            explanation: "The statute defines the term time limitation as exactly that period.",
            sourceLessonSlug: "coverage-and-the-earnings-record",
          },
          {
            prompt: "What happens to the agency's records once the time limitation expires?",
            options: ["They become conclusive", "They are deleted and reconstructed from the employer's own payroll files", "They are frozen until the individual applies for a benefit and requests review", "They are transferred to the tax authority, which then maintains them instead"],
            correctIndex: 0,
            explanation: "The records of wages paid and self-employment income derived in that year become conclusive for the purposes of the subchapter.",
            sourceLessonSlug: "coverage-and-the-earnings-record",
          },
          {
            prompt: "What does the lesson say the word conclusive actually means here?",
            options: ["The record becomes the fact", "That a correction requires a hearing before an administrative law judge", "That the record may still be amended freely on the individual's request", "That the record is presumed accurate unless the employer disputes it"],
            correctIndex: 0,
            explanation: "An employer's failure to report your wages correctly can become the legally operative version of your working life.",
            sourceLessonSlug: "coverage-and-the-earnings-record",
          },
          {
            prompt: "May the agency change a record after the time limitation has expired?",
            options: ["Only in enumerated circumstances", "No, the record is permanently closed once the period has run its course", "Yes, on request from the individual at any time and for any reason", "Yes, but only where the change reduces rather than increases the earnings"],
            correctIndex: 0,
            explanation: "The statute permits a change, deletion or inclusion after the limitation, but only in the circumstances it then lists.",
            sourceLessonSlug: "coverage-and-the-earnings-record",
          },
          {
            prompt: "Under the regulation, what may a self-employment return filed after the deadline support?",
            options: ["A reduction or removal", "An increase in the recorded self-employment income for that year", "A conversion of recorded wages into self-employment income instead", "A complete reconstruction of the record for every year in question"],
            correctIndex: 0,
            explanation: "A return filed after the deadline may support only a reduction or removal, not an increase.",
            sourceLessonSlug: "coverage-and-the-earnings-record",
          },
          {
            prompt: "For wages, what does the regulation permit the agency to do?",
            options: ["Conform its records to the return", "Accept the individual's own written statement of what they were paid", "Recompute the earnings using the national average wage index instead", "Substitute the average of the surrounding years for a missing year"],
            correctIndex: 0,
            explanation: "The agency may correct its records to agree with the amounts reported on a tax return.",
            sourceLessonSlug: "coverage-and-the-earnings-record",
          },
          {
            prompt: "How will the benefit formula treat a year of covered work that is missing from your record?",
            options: ["As a year you earned nothing", "As an average of the years immediately before and after the gap", "As a year excluded from the count of benefit computation years", "As a year requiring the agency to contact the employer for evidence"],
            correctIndex: 0,
            explanation: "That is why checking the record matters, and why doing it late means arguing against a record the statute calls conclusive.",
            sourceLessonSlug: "coverage-and-the-earnings-record",
          },
          {
            prompt: "Does this course recommend a service for checking your earnings record?",
            options: ["No", "Yes, it names a paid monitoring service used by most participants", "Yes, it directs readers to the recordkeeper that administers their plan", "Yes, it recommends asking a registered investment adviser to obtain it"],
            correctIndex: 0,
            explanation: "The record is yours and the agency that keeps it is where you get it. The course names no service and sells nothing.",
            sourceLessonSlug: "coverage-and-the-earnings-record",
          },
          {
            prompt: "What is a quarter of coverage?",
            options: ["The unit insured status is counted in", "A three-month period during which an individual received a benefit payment", "The interval at which the agency updates an individual's earnings record", "The portion of a year in which an employer must report wages to the agency"],
            correctIndex: 0,
            explanation: "It is earned through covered work rather than through any application, and the statute counts it to decide insured status.",
            sourceLessonSlug: "coverage-and-the-earnings-record",
          },
          {
            prompt: "What is the first step of the benefit computation?",
            options: ["Indexing the earnings", "Selecting the highest thirty-five years of nominal earnings on the record", "Dividing total lifetime earnings by the number of months worked", "Applying the three-band percentage formula to total career earnings"],
            correctIndex: 0,
            explanation: "Earlier years' earnings are restated using a ratio of national average wage indices before anything else happens.",
            sourceLessonSlug: "how-the-benefit-is-computed",
          },
          {
            prompt: "What is the numerator of the indexing quotient?",
            options: ["The wage index two years before the event", "The wage index for the computation base year being indexed", "The consumer price index for the year the benefit is first paid", "The average of the wage indices across the individual's whole career"],
            correctIndex: 0,
            explanation: "It is the national average wage index for the second calendar year preceding the year of the triggering event.",
            sourceLessonSlug: "how-the-benefit-is-computed",
          },
          {
            prompt: "What is the denominator of that quotient?",
            options: ["The wage index for the base year", "The wage index for the second year preceding the triggering event", "The number of months in the individual's benefit computation years", "The consumer price index for the year the earnings were received"],
            correctIndex: 0,
            explanation: "Dividing by the national average wage index for the computation base year is what restates old earnings in current wage terms.",
            sourceLessonSlug: "how-the-benefit-is-computed",
          },
          {
            prompt: "What is the effect of indexing?",
            options: ["Old earnings restated in current wage terms", "Removal of the years in which the individual earned the least income", "Conversion of monthly earnings figures into an annual equivalent", "Adjustment of the benefit for inflation after payments have begun"],
            correctIndex: 0,
            explanation: "A dollar earned decades ago is expressed in the wage terms of the year the benefit is computed against.",
            sourceLessonSlug: "how-the-benefit-is-computed",
          },
          {
            prompt: "What are computation base years, in the regulation's definition?",
            options: ["Years after 1950 up to entitlement", "The thirty-five years in which the individual earned the most money", "The years in which the individual had at least one quarter of coverage", "The thirteen quarters preceding the individual's entitlement to benefits"],
            correctIndex: 0,
            explanation: "They run from after 1950 up to but not including the year of entitlement, and through the year of death in some cases.",
            sourceLessonSlug: "how-the-benefit-is-computed",
          },
          {
            prompt: "Which years are used as benefit computation years?",
            options: ["The highest after indexing", "The most recent years worked before the individual claims a benefit", "The years in which the individual was employed by a covered employer", "The years in which the individual's earnings exceeded the taxable maximum"],
            correctIndex: 0,
            explanation: "The regulation says the years with the highest amounts of earnings after indexing are used.",
            sourceLessonSlug: "how-the-benefit-is-computed",
          },
          {
            prompt: "By how many years does the statute reduce the elapsed years for an old-age insurance benefit?",
            options: ["Five", "Ten, so that the count corresponds to forty quarters of coverage", "Three, matching the number of years in the record time limitation", "None, since every elapsed year is counted in the benefit computation"],
            correctIndex: 0,
            explanation: "The number of benefit computation years equals the number of elapsed years reduced by 5 years for an old-age benefit.",
            sourceLessonSlug: "how-the-benefit-is-computed",
          },
          {
            prompt: "Where does the familiar thirty-five-year figure actually come from?",
            options: ["It is derived", "It is stated as a fixed number in the text of the governing statute", "It is set each year by the agency and published in the Federal Register", "It is the number of quarters of coverage required for insured status"],
            correctIndex: 0,
            explanation: "Elapsed years from age 22 through 61 less the five lowest indexed years leaves 35, so the number falls out of the rule.",
            sourceLessonSlug: "how-the-benefit-is-computed",
          },
          {
            prompt: "In the third step, what are the indexed totals divided by?",
            options: ["The months in those years", "The number of benefit computation years used in the calculation", "The national average wage index for the year of entitlement", "The number of quarters of coverage the individual has earned"],
            correctIndex: 0,
            explanation: "Dividing the summed indexed amounts by the number of months in the benefit computation years produces the average indexed monthly earnings.",
            sourceLessonSlug: "how-the-benefit-is-computed",
          },
          {
            prompt: "What does that division produce?",
            options: ["Average indexed monthly earnings", "The primary insurance amount payable at the individual's retirement age", "The individual's replacement rate expressed as a share of final salary", "The taxable wage base against which contributions are computed"],
            correctIndex: 0,
            explanation: "The AIME is the input the three-band formula then operates on.",
            sourceLessonSlug: "how-the-benefit-is-computed",
          },
          {
            prompt: "What percentage does the formula apply to the first band of average indexed monthly earnings?",
            options: ["90 percent", "32 percent, which is the percentage applied to the middle band instead", "15 percent, which is the percentage applied to the highest band instead", "100 percent, since the first band is intended to be replaced in full"],
            correctIndex: 0,
            explanation: "The primary insurance amount is 90 percent of the first band, 32 percent of the second, and 15 percent of the amount above it.",
            sourceLessonSlug: "how-the-benefit-is-computed",
          },
          {
            prompt: "What percentage applies to the middle band?",
            options: ["32 percent", "90 percent, which applies to the first band of earnings instead", "15 percent, which applies to the band above the second threshold", "50 percent, which is the midpoint between the other two percentages"],
            correctIndex: 0,
            explanation: "The three percentages are 90, then 32, then 15, applied to successive bands of the AIME.",
            sourceLessonSlug: "how-the-benefit-is-computed",
          },
          {
            prompt: "What percentage applies above the second threshold?",
            options: ["15 percent", "32 percent, which applies between the first and second thresholds", "90 percent, which applies to the first band of average indexed earnings", "Zero, because earnings above the second threshold are disregarded entirely"],
            correctIndex: 0,
            explanation: "Fifteen percent of the AIME above the second threshold is the last term of the formula.",
            sourceLessonSlug: "how-the-benefit-is-computed",
          },
          {
            prompt: "What do those three percentages establish about the programme?",
            options: ["A progressive replacement rate", "That the benefit is proportional to lifetime earnings at every level", "That high earners receive a larger share of their earnings than low earners", "That the formula was designed to track the consumer price index over time"],
            correctIndex: 0,
            explanation: "The programme returns proportionally more of a low earner's earnings than a high earner's, which is written into the statute.",
            sourceLessonSlug: "how-the-benefit-is-computed",
          },
          {
            prompt: "Which formula applies to a given individual?",
            options: ["The one for the year of the first event", "The one in force in the year the individual first claims a benefit", "The one published in the Federal Register during the year of retirement", "Whichever of the published formulas produces the larger benefit amount"],
            correctIndex: 0,
            explanation: "The regulation keys it to the year the individual reaches age 62, becomes disabled, or dies, whichever occurs first.",
            sourceLessonSlug: "how-the-benefit-is-computed",
          },
          {
            prompt: "What happens to the dollar amounts inside the formula over time?",
            options: ["They are adjusted annually", "They are fixed until Congress amends the underlying statute again", "They are recomputed for each individual from their own earnings record", "They are replaced by percentages once an individual claims a benefit"],
            correctIndex: 0,
            explanation: "The regulation says the dollar amounts receive automatic annual increases matching wage growth, with new formulas published in the Federal Register.",
            sourceLessonSlug: "how-the-benefit-is-computed",
          },
          {
            prompt: "Which two things does this lesson tell you never to carry in your head?",
            options: ["The thresholds and any benefit amount", "The three percentages and the number of benefit computation years", "The indexing quotient and the definition of a computation base year", "The retirement age table and the definition of early retirement age"],
            correctIndex: 0,
            explanation: "The thresholds are adjusted every year and a benefit amount falls out of an individual's own indexed record.",
            sourceLessonSlug: "how-the-benefit-is-computed",
          },
          {
            prompt: "What does the lesson give you instead of those figures?",
            options: ["The procedure", "A worked example using the current year's published thresholds", "A table of typical benefit amounts by lifetime earnings level", "An estimate of the share of income the benefit is likely to replace"],
            correctIndex: 0,
            explanation: "Knowing the four steps lets you read your own statement and see which step produced which line.",
            sourceLessonSlug: "how-the-benefit-is-computed",
          },
          {
            prompt: "What is early retirement age for an old-age insurance benefit?",
            options: ["62", "60, which the statute assigns to a widow's or widower's benefit instead", "65, which is the retirement age for the earliest cohort in the table", "67, which is the retirement age for the most recent cohort in the table"],
            correctIndex: 0,
            explanation: "The statute sets 62 for an old-age, wife's, or husband's insurance benefit, and 60 for a widow's or widower's benefit.",
            sourceLessonSlug: "retirement-age-and-the-floor",
          },
          {
            prompt: "Which benefit carries an early retirement age of 60?",
            options: ["A widow's or widower's benefit", "An old-age insurance benefit claimed by an individual worker", "A wife's or husband's insurance benefit claimed on a spouse's record", "A disability insurance benefit claimed before the retirement age"],
            correctIndex: 0,
            explanation: "The statute names age 60 for a widow's or widower's insurance benefit and age 62 for the other three.",
            sourceLessonSlug: "retirement-age-and-the-floor",
          },
          {
            prompt: "What is the retirement age for someone attaining early retirement age before January 1, 2000?",
            options: ["65", "66, which applies to a later cohort in the statutory table", "67, which applies to the most recent cohort in the statutory table", "62, which is the early retirement age rather than the retirement age"],
            correctIndex: 0,
            explanation: "The first clause of the table sets 65 years of age for that cohort.",
            sourceLessonSlug: "retirement-age-and-the-floor",
          },
          {
            prompt: "What is the retirement age for someone attaining early retirement age between 2005 and 2016?",
            options: ["66", "65, which applies to individuals attaining early retirement age before 2000", "67, which applies to individuals attaining early retirement age after 2021", "66 plus an age increase factor, which applies to the 2017 to 2021 cohort"],
            correctIndex: 0,
            explanation: "The table sets a flat 66 for anyone attaining early retirement age after December 31, 2004 and before January 1, 2017.",
            sourceLessonSlug: "retirement-age-and-the-floor",
          },
          {
            prompt: "What is the retirement age for someone attaining early retirement age after December 31, 2021?",
            options: ["67", "66, which applies to the cohort attaining early retirement age from 2005", "65 plus an age increase factor, which applies to the 2000 to 2004 cohort", "68, since the statute continues to increase the age in later cohorts"],
            correctIndex: 0,
            explanation: "The last clause sets 67 and provides no further increase after it.",
            sourceLessonSlug: "retirement-age-and-the-floor",
          },
          {
            prompt: "What does the age increase factor do in the two transition cohorts?",
            options: ["Adds months to the base age", "Reduces the benefit payable to individuals in those cohorts", "Changes the early retirement age from 62 to a later starting point", "Sets the number of benefit computation years used in the formula"],
            correctIndex: 0,
            explanation: "It phases the retirement age upward in months rather than in a single step, producing two ramps between two plateaus.",
            sourceLessonSlug: "retirement-age-and-the-floor",
          },
          {
            prompt: "What is unusual about this particular statutory number, compared with the others in this course?",
            options: ["It is genuinely stable", "It is republished by the agency each year in the Federal Register", "It is set by a plan document rather than by the governing statute", "It is adjusted for cost of living using a base period and a rounding rule"],
            correctIndex: 0,
            explanation: "The last step has already arrived and there is no further increase after it, so the reader's number is fixed.",
            sourceLessonSlug: "retirement-age-and-the-floor",
          },
          {
            prompt: "Why does this lesson say Social Security belongs in a course otherwise about accounts?",
            options: ["It is the layer underneath", "Because it is administered by the same agency that supervises pension plans", "Because participants may roll a workplace balance into it after leaving a job", "Because the benefit is credited to an individual account in the worker's name"],
            correctIndex: 0,
            explanation: "It reaches almost everyone in covered employment, is computed by a readable formula, is payable for life, and is indexed.",
            sourceLessonSlug: "retirement-age-and-the-floor",
          },
          {
            prompt: "What share of individuals aged 65 and older received household income from Social Security?",
            options: ["About 92 percent", "About 61.5 percent, which is a figure about the lowest income quintile", "About 29.5 percent, which is a share of aggregate income rather than people", "About 53 percent, which is the private-sector plan participation rate"],
            correctIndex: 0,
            explanation: "The Congressional Research Service reported approximately 92 percent, analysing survey data for calendar year 2019.",
            sourceLessonSlug: "retirement-age-and-the-floor",
          },
          {
            prompt: "What share of aggregate income for people aged 65 and older did Social Security represent in 2019?",
            options: ["About 29.5 percent", "About 92 percent, which is the share of people receiving any such income", "About 61.5 percent, which is a figure about the bottom income quintile", "About 15 percent, which is the top band percentage in the benefit formula"],
            correctIndex: 0,
            explanation: "It was the most common source of income among the aged and about 29.5 percent of aggregate income for that population.",
            sourceLessonSlug: "retirement-age-and-the-floor",
          },
          {
            prompt: "In the bottom fifth of the household income distribution, what share relied on Social Security for 90 percent or more of income?",
            options: ["61.5 percent", "92 percent, which is the share receiving any income from the programme", "29.5 percent, which is its share of aggregate income for the whole group", "Almost none, which is the figure for the top two income quintiles"],
            correctIndex: 0,
            explanation: "The same analysis found almost none of those in the top two household income quintiles relied on it to that degree.",
            sourceLessonSlug: "retirement-age-and-the-floor",
          },
          {
            prompt: "What year's income does the analysis cited in this lesson reflect?",
            options: ["2019", "2025, the year the analysis itself was most recently updated", "2022, the year of the most recent Survey of Consumer Finances", "2026, the year the statutes in this course were read and dated"],
            correctIndex: 0,
            explanation: "The report uses data reflecting income received in calendar year 2019 and was updated on 5 August 2025.",
            sourceLessonSlug: "retirement-age-and-the-floor",
          },
          {
            prompt: "What connection does the lesson draw between Section 1 and Section 5?",
            options: ["Same fact at two ends of a working life", "That both concern arrangements an employer chooses whether to offer", "That both are governed by the same statute and the same federal agency", "That both use a base amount adjusted by a published cost-of-living formula"],
            correctIndex: 0,
            explanation: "The workers least likely to have a plan at work are the most likely to reach 65 with Social Security as nearly all of their income.",
            sourceLessonSlug: "retirement-age-and-the-floor",
          },
          {
            prompt: "Which feature of the benefit does the lesson name alongside being computed by a readable formula?",
            options: ["Payable for life and indexed", "Convertible into a lump sum on application to the agency", "Transferable to a surviving employer plan on a trustee-to-trustee basis", "Adjustable by the participant among a menu of investment alternatives"],
            correctIndex: 0,
            explanation: "That combination is what makes it the layer underneath whatever a household does or does not hold in an account.",
            sourceLessonSlug: "retirement-age-and-the-floor",
          },
          {
            prompt: "How was the change in retirement age designed to take effect?",
            options: ["Across cohorts over decades", "In a single step applying to everyone in the year of enactment", "By annual adjustment published each year in the Federal Register", "At the discretion of the agency once its funding position required it"],
            correctIndex: 0,
            explanation: "The table has two flat plateaus and two ramps, so anyone whose retirement age is 67 has had that fact fixed since long before they thought about it.",
            sourceLessonSlug: "retirement-age-and-the-floor",
          },
          {
            prompt: "Who sets the two ages this lesson describes?",
            options: ["The statute", "The agency, through rules published in the Federal Register", "The individual, by electing a claiming age on their application", "The employer, through terms written into the plan document"],
            correctIndex: 0,
            explanation: "Both are written into the statute rather than left to administrative discretion.",
            sourceLessonSlug: "retirement-age-and-the-floor",
          },
          {
            prompt: "What is aggregate income, in the sense the lesson uses it?",
            options: ["The total income of a population", "The income of one household summed across all of its sources", "The income remaining after taxes and mandatory deductions are taken", "The income an individual receives from a single programme in one year"],
            correctIndex: 0,
            explanation: "It is used to express how large a share of the income of everyone aged 65 and older comes from one source.",
            sourceLessonSlug: "retirement-age-and-the-floor",
          },
          {
            prompt: "Which two statuses does the coverage lesson warn are commonly confused?",
            options: ["Fully insured and currently insured", "Fully insured and the retirement age defined by the statutory table", "Currently insured and being an active participant in an employer plan", "Insured status and the number of benefit computation years used"],
            correctIndex: 0,
            explanation: "They use different counts over different periods and do different jobs in the statute.",
            sourceLessonSlug: "coverage-and-the-earnings-record",
          },
          {
            prompt: "The thirteen-quarter period for currently insured status ends with which kind of moment?",
            options: ["A stated event", "The end of the calendar year in which the quarters were earned", "The quarter in which the individual last worked in covered employment", "The quarter in which the individual attains early retirement age"],
            correctIndex: 0,
            explanation: "It ends with the quarter of death, of entitlement to old-age benefits, or of most recent entitlement to disability benefits.",
            sourceLessonSlug: "coverage-and-the-earnings-record",
          },
          {
            prompt: "Why does the earnings-record lesson say the action item is small and the consequence is not?",
            options: ["Checking is easy and the record hardens", "Because corrections require an appeal that takes several years to resolve", "Because the agency charges a fee for each year of the record it reviews", "Because employers must be sued individually for each unreported quarter"],
            correctIndex: 0,
            explanation: "After the time limitation you are arguing against a record the statute calls conclusive rather than against a clerical error.",
            sourceLessonSlug: "coverage-and-the-earnings-record",
          },
          {
            prompt: "How many steps does the computation lesson break the benefit calculation into?",
            options: ["Four", "Three, one for each percentage band in the primary insurance formula", "Two, one for indexing the earnings and one for applying the formula", "Five, one for each of the years dropped from the elapsed-year count"],
            correctIndex: 0,
            explanation: "Index the earnings, choose the years, divide by months, and apply the three-band formula.",
            sourceLessonSlug: "how-the-benefit-is-computed",
          },
          {
            prompt: "Where are new benefit formulas published?",
            options: ["The Federal Register", "The annual notice issued by the tax authority alongside the limits", "The summary plan description furnished by each participant's employer", "The comparative chart required by the participant fee disclosure rule"],
            correctIndex: 0,
            explanation: "The regulation says new formulas are published there and applied as soon as they become available.",
            sourceLessonSlug: "how-the-benefit-is-computed",
          },
          {
            prompt: "What is a benefit computation year?",
            options: ["One of the highest indexed years used", "Any year in which the individual earned at least one quarter of coverage", "The year in which the individual first becomes entitled to a benefit", "A year in which the individual's earnings reached the taxable maximum"],
            correctIndex: 0,
            explanation: "The count is the elapsed years reduced by five for an old-age benefit, and the years chosen are the highest after indexing.",
            sourceLessonSlug: "how-the-benefit-is-computed",
          },
          {
            prompt: "Why does the lesson call the three percentages the character of the programme?",
            options: ["They fix how much of each dollar returns", "Because they are the only part of the formula that has never been amended", "Because they determine which cohort's retirement age applies to a worker", "Because they set the thresholds at which each band of earnings begins"],
            correctIndex: 0,
            explanation: "Ninety cents of the first dollars and fifteen of the last is a progressive replacement rate written into a statute.",
            sourceLessonSlug: "how-the-benefit-is-computed",
          },
          {
            prompt: "Which part of the formula gets argued about, according to the lesson?",
            options: ["The thresholds", "The three percentages, which are revisited by Congress each session", "The indexing quotient, which the agency recomputes for each claimant", "The number of elapsed years, which varies by state of employment"],
            correctIndex: 0,
            explanation: "The percentages describe the shape and the thresholds decide where each band begins, which is why the thresholds are the contested numbers.",
            sourceLessonSlug: "how-the-benefit-is-computed",
          },
          {
            prompt: "How does the course describe the benefit computation overall?",
            options: ["Not a black box", "A proprietary calculation the agency does not publish in detail", "An estimate the agency revises each year as wage data are collected", "A projection that depends on assumptions about future employment"],
            correctIndex: 0,
            explanation: "It is four steps, each of them written down in a statute or a regulation a reader can open.",
            sourceLessonSlug: "how-the-benefit-is-computed",
          },
          {
            prompt: "What is the practical use of knowing the four steps?",
            options: ["Reading your own statement", "Computing the exact benefit you will receive at retirement age", "Predicting how the thresholds will move in the coming several years", "Deciding whether to claim a benefit early or to defer claiming it"],
            correctIndex: 0,
            explanation: "You can see which step produced which line, which is what the course offers in place of a number.",
            sourceLessonSlug: "how-the-benefit-is-computed",
          },
          {
            prompt: "Which document does the regulation say the agency may use to correct a wage record?",
            options: ["A tax return", "A letter from the employer confirming what the individual was paid", "The individual's own bank statements for the year in question", "A statement of account produced by the plan's own recordkeeper"],
            correctIndex: 0,
            explanation: "The regulation permits the agency to correct its records to agree with the amounts reported on a return.",
            sourceLessonSlug: "coverage-and-the-earnings-record",
          },
          {
            prompt: "Which of these is NOT one of the four steps of the benefit computation?",
            options: ["Applying a cost-of-living increase to past earnings", "Restating earlier years' earnings using a ratio of wage indices", "Selecting the highest indexed years as benefit computation years", "Dividing the indexed total by the months in those years"],
            correctIndex: 0,
            explanation: "Indexing uses wage indices rather than a price adjustment, and the four steps are index, select, divide, and apply the formula.",
            sourceLessonSlug: "how-the-benefit-is-computed",
          },
          {
            prompt: "What does the statute call the period the retirement age table is keyed to?",
            options: ["Attaining early retirement age", "The year of the individual's application for an old-age benefit", "The year in which the individual last worked in covered employment", "The taxable year in which the individual's earnings record closes"],
            correctIndex: 0,
            explanation: "Each clause of the table describes an individual who attains early retirement age within a stated window.",
            sourceLessonSlug: "retirement-age-and-the-floor",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 6 — Who is required to act in your interest
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "fiduciary-has-a-definition",
      title: "21 · Fiduciary is not a compliment, it is a definition",
      section: "Section 6 · Who is required to act in your interest",
      body: `The word fiduciary is used in advertising as though it meant trustworthy. In this area it is a legal status with a written definition, and the definition is unusual in a way worth noticing.

**It is functional, not titular.** A person is a fiduciary with respect to a plan "to the extent (i) he exercises any discretionary authority or discretionary control respecting management of such plan or exercises any authority or control respecting management or disposition of its assets, (ii) he renders investment advice for a fee or other compensation, direct or indirect, with respect to any moneys or other property of such plan, or has any authority or responsibility to do so, or (iii) he has any discretionary authority or discretionary responsibility in the administration of such plan" (29 U.S.C. § 1002, n.d.).

**Three things follow from that wording, and each one matters.** First, you become a fiduciary by doing certain things, not by holding a title, so nobody escapes the status by leaving it off a business card. Second, the phrase "to the extent" makes it partial: the same person can be a fiduciary for one function and not for another. Third, clause (ii) reaches indirect compensation, which is the clause that matters most when payment arrives from somewhere other than the person being advised.

**Then the duties, which are worth reading in full because they are short.** A fiduciary must discharge duties "solely in the interest of the participants and beneficiaries" and:

- "(A) for the exclusive purpose of: (i) providing benefits to participants and their beneficiaries; and (ii) defraying reasonable expenses of administering the plan";
- "(B) with the care, skill, prudence, and diligence under the circumstances then prevailing that a prudent man acting in a like capacity and familiar with such matters would use in the conduct of an enterprise of a like character and with like aims";
- "(C) by diversifying the investments of the plan so as to minimize the risk of large losses, unless under the circumstances it is clearly prudent not to do so"; and
- "(D) in accordance with the documents and instruments governing the plan insofar as such documents and instruments are consistent with the provisions of this subchapter and subchapter III" (29 U.S.C. § 1104, n.d.).

**Read the first eight words again.** Solely in the interest of the participants and beneficiaries. Not primarily, not while also considering, not subject to the sponsor's commercial relationships. That word is the whole of the standard, and it is the reason Section 3's fee disclosure exists: the rule that requires it opens by saying the investment of plan assets is a fiduciary act governed by (A) and (B).

**Two things this course is careful not to say.** It does not say that everyone who talks to you about your plan is a fiduciary, because the definition is functional and some of them are not. And it does not say that a fiduciary will always be right, because (B) is a standard of care and process rather than a guarantee of outcome. A prudent process can produce a bad year. What the standard forbids is the other thing: acting for someone else's benefit while advising you.

:::reveal Is fiduciary status conferred by a title? ||| No. The definition is functional: it attaches to the exercise of discretionary authority, control over assets, or rendering investment advice for compensation.

:::reveal What do the first words of the duty provision require? ||| That the fiduciary discharge duties solely in the interest of the participants and beneficiaries.

:::reveal Does the prudence duty guarantee a good outcome? ||| No. It is a standard of care and process, so a prudent process can still produce a bad year.

## Vocabulary
- **Fiduciary**: a person who, to the extent of certain functions, exercises discretionary authority over a plan, controls its assets, or renders investment advice for compensation.
- **Discretionary authority**: the power to decide rather than merely to execute, which is one of the triggers for fiduciary status.
- **Indirect compensation**: payment reaching an adviser from a source other than the person advised, expressly reached by the statutory definition.
- **Exclusive purpose**: the requirement that a fiduciary act only to provide benefits and to defray reasonable administrative expenses.
- **Prudent person standard**: the requirement to act with the care, skill, prudence and diligence a prudent person familiar with such matters would use in a like enterprise.

## Sources
29 U.S.C. § 1002. (n.d.). *Definitions*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/29/1002

29 U.S.C. § 1104. (n.d.). *Fiduciary duties*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/29/1104`,
    },
    {
      slug: "two-seats-one-conversation",
      title: "22 · The same conversation, two different legal seats",
      section: "Section 6 · Who is required to act in your interest",
      body: `Outside a plan, the person across the table from you is sitting in one of two seats, and the two are governed by different rules. Almost nobody knows which seat they are looking at, and the difference decides what you are actually receiving.

**Seat one: the investment adviser.** The Investment Advisers Act makes it unlawful for any investment adviser, using the mails or interstate commerce, "to employ any device, scheme, or artifice to defraud any client or prospective client", "to engage in any transaction, practice, or course of business which operates as a fraud or deceit upon any client or prospective client", to act as principal for their own account and knowingly sell to or buy from a client without disclosing the capacity in writing before completion and obtaining consent, or "to engage in any act, practice, or course of business which is fraudulent, deceptive, or manipulative" (15 U.S.C. § 80b-6, n.d.).

**Why those words produce a fiduciary duty is a matter of decided law.** In *SEC v. Capital Gains Research Bureau, Inc.*, 375 U.S. 180, decided 9 December 1963, the Supreme Court described "the delicate fiduciary nature of an investment advisory relationship" and the adviser's obligation of "utmost good faith, and full and fair disclosure of all material facts" (SEC v. Capital Gains Research Bureau, Inc., 1963). That case is why the anti-fraud language above is read as imposing an affirmative duty rather than merely prohibiting lies.

**Seat two: the broker-dealer, governed by its own rule.** Regulation Best Interest provides that a broker, dealer, or associated natural person, "when making a recommendation of any securities transaction or investment strategy involving securities (including account recommendations) to a retail customer, shall act in the best interest of the retail customer at the time the recommendation is made, without placing the financial or other interest of the broker, dealer, or natural person ... ahead of the interest of the retail customer" (17 CFR § 240.15l-1, n.d.). The rule is then built out of four component obligations, headed disclosure, care, conflict of interest, and compliance (17 CFR § 240.15l-1, n.d.).

**Read the two side by side and notice what differs.** The adviser standard, as the Court described it, runs to the relationship. The broker-dealer standard attaches "at the time the recommendation is made" and to recommendations to a retail customer. Both are real obligations; they are not the same obligation, they arise under different law, and this course does not tell you that one kind of firm is better than the other. What it tells you is that the question "which of these am I dealing with" has an answer, and that the answer is written down.

**And there is a document designed to answer it.** A registered investment adviser "must deliver Form CRS ... to each retail investor", before or at the time of entering into an advisory contract, and must post it on its website and deliver a current copy within 30 days on request (17 CFR § 275.204-5, n.d.). One trigger in that rule belongs in a retirement course specifically: an existing client must be given the current Form CRS before or at the time the firm recommends "that the retail investor roll over assets from a retirement account into a new or existing account or investment" (17 CFR § 275.204-5, n.d.). The rulemaker named the rollover conversation, which tells you how consequential it was thought to be.

**Two free public records answer the rest.** The SEC operates a site titled "IAPD - Investment Adviser Public Disclosure", which lets anyone look up registered investment advisers, their backgrounds and their regulatory history, at no cost. FINRA operates BrokerCheck, which its own page describes as a way to find a broker, investment or financial advisor. Neither is a recommendation and neither is being recommended here: they are records, and reading a record before a conversation is the same move this catalog teaches everywhere else.

:::reveal What did the Supreme Court call the investment advisory relationship in 1963? ||| Delicate and fiduciary in nature, carrying an obligation of utmost good faith and full and fair disclosure of all material facts.

:::reveal When does Regulation Best Interest's general obligation attach? ||| At the time a recommendation is made to a retail customer, and it forbids placing the firm's interest ahead of the customer's.

:::reveal Which retirement-specific event triggers delivery of Form CRS to an existing client? ||| A recommendation that the investor roll over assets from a retirement account into a new or existing account or investment.

## Vocabulary
- **Investment adviser**: a firm or person governed by the Advisers Act, whose anti-fraud provisions have been read since 1963 as imposing an affirmative fiduciary duty.
- **Broker-dealer**: a firm governed by Regulation Best Interest, which attaches to recommendations made to a retail customer.
- **Regulation Best Interest**: the rule requiring a broker-dealer not to place its own financial or other interest ahead of a retail customer's when recommending.
- **Form CRS**: the relationship summary a registered investment adviser must deliver to each retail investor, including before a rollover recommendation to an existing client.
- **Retail customer**: the category of person whose recommendations trigger the broker-dealer standard, which is why the standard's scope is narrower than a general duty.

## Sources
15 U.S.C. § 80b-6. (n.d.). *Prohibited transactions by investment advisers*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/80b-6

17 CFR § 240.15l-1. (n.d.). *Regulation best interest*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/17/240.15l-1

17 CFR § 275.204-5. (n.d.). *Delivery of Form CRS*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/17/275.204-5

SEC v. Capital Gains Research Bureau, Inc., 375 U.S. 180 (1963). Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/supremecourt/text/375/180

U.S. Securities and Exchange Commission. (n.d.). *IAPD - Investment Adviser Public Disclosure*. https://adviserinfo.sec.gov/

Financial Industry Regulatory Authority. (n.d.). *BrokerCheck*. https://brokercheck.finra.org/`,
    },
    {
      slug: "read-your-own-record",
      title: "23 · Capstone: read your own record, and the gap it sits inside",
      section: "Section 6 · Who is required to act in your interest",
      body: `**Said for the third and last time, in prose, as this series requires.** This course gives no financial advice. It has told you nothing about what to hold, how much to save, when to start, which account type to use, whether to roll anything over, or when to claim. It has named no product, no provider and no fee level, and it has projected no return. What it has done is show you where the rules are written and which documents somebody is required to give you. Everything below is a reading exercise, not a plan.

**Five documents, and every one of them exists because a rule says so.**

1. **The plan's governing documents.** Ask the administrator in writing for the latest summary plan description, the latest annual report, and the trust or bargaining agreement. Find the match formula, the vesting schedule, the plan's own definition of a year of service, and the events on which a distribution is permitted (29 U.S.C. § 1024, n.d.).
2. **The annual participant fee disclosure.** Find the comparative chart. For each alternative you are actually in, read the cost as a percentage and as dollars per 1,000 invested (29 CFR § 2550.404a-5, n.d.).
3. **The most recent quarterly statement.** Find the dollar amount actually charged to your account, in both the administrative and the individual categories, and the description of what it bought (29 CFR § 2550.404a-5, n.d.).
4. **Your Social Security earnings record.** Compare it against every year you worked. Anything missing is a year the formula will treat as zero, and after three years, three months and fifteen days you are arguing against a record the statute calls conclusive (42 U.S.C. § 405, n.d.).
5. **Form CRS, from anyone who advises you.** Ask for it before a conversation rather than after, and remember that a rollover recommendation to an existing client is itself a delivery trigger (17 CFR § 275.204-5, n.d.).

Then check a registration record for free before you take advice, on the SEC's Investment Adviser Public Disclosure site or on FINRA's BrokerCheck. That step costs nothing and takes minutes.

**Now the context those five documents sit inside, because the course would be dishonest without it.** Analysing the 2022 Survey of Consumer Finances, the Congressional Research Service reported that 54.3 percent of U.S. households had retirement account assets, with ownership by age running 49.6 percent for those younger than 35, 61.5 percent at 35 to 44, 62.2 percent at 45 to 54, 57 percent at 55 to 64, and 47 percent at 65 and older (Congressional Research Service, 2025). The same analysis reports that about 30 percent of households had retirement assets greater than zero and up to 100,000 dollars, 15.5 percent above 100,000 and up to 500,000, 4.7 percent above 500,000 and up to 1 million, and 4.6 percent above 1 million (Congressional Research Service, 2025).

**Read the first number against the fifth.** Nearly half of households hold no retirement account at all, and among those that do, the distribution is heavily concentrated. This is the same survey, taken in 2022 and published by the Federal Reserve in October 2023, whose companion analysis reported that median wealth among White families was 285,000 dollars, that "the wealth of the typical Black family ($44,900) was only about 15 percent of the typical White family", and that "[t]he typical Hispanic family similarly held only about 20 percent of the wealth" (Aladangady et al., 2023).

**Put that beside Section 1 and Section 5 and the course closes where it opened.** Access to a workplace plan runs from 49 percent in the lowest-paid quarter of private-sector occupations to 91 percent in the highest. Reliance on Social Security for nearly all of household income runs the other way, 61.5 percent in the bottom income quintile against almost none in the top two. The account gap and the wealth gap are not two separate stories about individual behaviour. They are one story about employment, and it is measured by the federal government, in public, every few years.

**What this course leaves you able to do.** Say what a retirement account is and is not. Find out whether you have access and what the plan document actually promises. Read a fee disclosure and compute what you paid. Explain where an annual limit comes from without repeating a stale number. Describe how a Social Security benefit is computed and why the earnings record matters. And ask, of anyone advising you, which seat they are sitting in, then check the free public record before you answer them.

:::reveal How many documents does the capstone ask you to read, and what do they have in common? ||| Five, and each exists because a statute or a regulation requires somebody to produce it.

:::reveal What share of U.S. households had retirement account assets in the 2022 Survey of Consumer Finances? ||| 54.3 percent, with ownership peaking at 62.2 percent for households aged 45 to 54.

:::reveal What single question does the course want you to ask anyone advising you? ||| Which legal seat they are sitting in, and then check the free public registration record before deciding what their advice is worth.

## Vocabulary
- **Survey of Consumer Finances**: the Federal Reserve's periodic survey of household finances, the source of the retirement-account ownership and wealth figures in this lesson.
- **Retirement account assets**: the survey category covering individual retirement accounts and certain employer-sponsored accounts, used here to measure who holds any account at all.
- **Registration record**: the free public file on an adviser or broker, which can be read before a conversation rather than after it.
- **Capstone**: the exercise that runs the whole mechanism once, on the learner's own documents, rather than on an example.

## Sources
17 CFR § 275.204-5. (n.d.). *Delivery of Form CRS*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/17/275.204-5

29 CFR § 2550.404a-5. (n.d.). *Fiduciary requirements for disclosure in participant-directed individual account plans*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/29/2550.404a-5

29 U.S.C. § 1024. (n.d.). *Filing and furnishing of information*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/29/1024

42 U.S.C. § 405. (n.d.). *Evidence, procedure, and certification for payments*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/42/405

Aladangady, A., Chang, A. C., & Krimmel, J. (2023, October 18). *Greater wealth, greater uncertainty: Changes in racial inequality in the Survey of Consumer Finances* (FEDS Notes). Board of Governors of the Federal Reserve System. https://www.federalreserve.gov/econres/notes/feds-notes/greater-wealth-greater-uncertainty-changes-in-racial-inequality-in-the-survey-of-consumer-finances-20231018.html

Congressional Research Service. (2025, February 26). *Distribution of retirement account balances: Analysis of the 2022 Survey of Consumer Finances* (IF12928). https://www.everycrsreport.com/reports/IF12928.html`,
    },
    {
      slug: "quiz-who-owes-you-a-duty",
      title: "24 · Knowledge check: fiduciary status, the two seats, and your own record",
      section: "Section 6 · Who is required to act in your interest",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "How does the statute confer fiduciary status with respect to a plan?",
            options: ["Functionally", "By the title a person holds within the sponsoring employer's organisation", "By registration with the agency that supervises employee benefit plans", "By written designation in the plan document adopted by the sponsor"],
            correctIndex: 0,
            explanation: "The definition attaches to what a person does, so nobody escapes it by leaving the word off a business card.",
            sourceLessonSlug: "fiduciary-has-a-definition",
          },
          {
            prompt: "Which of these triggers fiduciary status under the definition?",
            options: ["Discretionary control over plan assets", "Being employed by the company that sponsors the retirement plan", "Holding an account balance in the plan larger than a stated threshold", "Serving on a committee that reviews the plan's annual financial report"],
            correctIndex: 0,
            explanation: "Exercising any authority or control respecting management or disposition of the plan's assets is one of the three listed triggers.",
            sourceLessonSlug: "fiduciary-has-a-definition",
          },
          {
            prompt: "What does the phrase \"to the extent\" do in the definition?",
            options: ["Makes the status partial", "Limits the definition to plans above a stated number of participants", "Confines the status to persons formally appointed by the plan sponsor", "Restricts the status to decisions made during the plan's own fiscal year"],
            correctIndex: 0,
            explanation: "The same person can be a fiduciary for one function and not for another.",
            sourceLessonSlug: "fiduciary-has-a-definition",
          },
          {
            prompt: "Which clause of the definition reaches indirect compensation?",
            options: ["The investment advice clause", "The clause covering discretionary authority over plan administration", "The clause covering control over the management of the plan's assets", "The clause requiring compliance with the plan's governing documents"],
            correctIndex: 0,
            explanation: "It covers rendering investment advice for a fee or other compensation, direct or indirect, which matters when payment comes from elsewhere.",
            sourceLessonSlug: "fiduciary-has-a-definition",
          },
          {
            prompt: "In whose interest must a fiduciary discharge their duties?",
            options: ["Solely the participants and beneficiaries", "Primarily the participants, while also weighing the sponsor's interests", "The plan itself, considered separately from anyone with a claim on it", "The employer, since it bears the cost of establishing and running the plan"],
            correctIndex: 0,
            explanation: "The statute says solely, not primarily and not subject to the sponsor's commercial relationships.",
            sourceLessonSlug: "fiduciary-has-a-definition",
          },
          {
            prompt: "What are the two exclusive purposes named in the duty provision?",
            options: ["Benefits and reasonable expenses", "Growth of the plan's assets and preservation of the employer's capital", "Compliance with the statute and reporting to the supervising agency", "Diversification of investments and adherence to the plan's documents"],
            correctIndex: 0,
            explanation: "Providing benefits to participants and their beneficiaries, and defraying reasonable expenses of administering the plan.",
            sourceLessonSlug: "fiduciary-has-a-definition",
          },
          {
            prompt: "What standard of conduct does clause (B) impose?",
            options: ["The prudent person standard", "A guarantee that the plan's investments will not lose value in a year", "An obligation to obtain the highest available return on plan assets", "A duty to follow the recommendations of a registered investment adviser"],
            correctIndex: 0,
            explanation: "Care, skill, prudence and diligence such as a prudent person familiar with such matters would use in a like enterprise.",
            sourceLessonSlug: "fiduciary-has-a-definition",
          },
          {
            prompt: "What does clause (C) require, and with what qualification?",
            options: ["Diversification, unless clearly prudent not to", "Diversification, in every case and without any exception at all", "Concentration in the plan's default alternative unless a participant objects", "Selection of the lowest-cost alternative available in each asset category"],
            correctIndex: 0,
            explanation: "Diversifying so as to minimize the risk of large losses, unless under the circumstances it is clearly prudent not to do so.",
            sourceLessonSlug: "fiduciary-has-a-definition",
          },
          {
            prompt: "What does clause (D) require, and subject to what limit?",
            options: ["Following the documents, if lawful", "Following the documents, regardless of whether they comply with the statute", "Amending the documents whenever a participant objects to a term in them", "Filing the documents with the supervising agency before they take effect"],
            correctIndex: 0,
            explanation: "A fiduciary must act in accordance with the plan documents insofar as they are consistent with the relevant subchapters.",
            sourceLessonSlug: "fiduciary-has-a-definition",
          },
          {
            prompt: "Which word in the duty provision does the lesson call the whole of the standard?",
            options: ["Solely", "Prudence, because it governs how every decision must be reached", "Reasonable, because it limits what expenses the plan may defray", "Diversifying, because it protects participants from concentrated losses"],
            correctIndex: 0,
            explanation: "Not primarily, not while also considering, not subject to the sponsor's commercial relationships.",
            sourceLessonSlug: "fiduciary-has-a-definition",
          },
          {
            prompt: "How does the fee disclosure rule connect to these duties?",
            options: ["It cites clauses (A) and (B)", "It replaces them for plans that let participants direct their own investments", "It applies only where a fiduciary has failed to follow the plan's documents", "It exempts a fiduciary from the prudence duty for disclosed investments"],
            correctIndex: 0,
            explanation: "The rule opens by saying the investment of plan assets is a fiduciary act governed by the exclusive-purpose and prudence standards.",
            sourceLessonSlug: "fiduciary-has-a-definition",
          },
          {
            prompt: "Does this course say that everyone who discusses your plan with you is a fiduciary?",
            options: ["No", "Yes, because any discussion of plan assets is a fiduciary act", "Yes, but only where the person is paid directly by the participant", "Yes, once the person has been given access to the plan's documents"],
            correctIndex: 0,
            explanation: "The definition is functional, and some people who talk to you about a plan do not perform any of the listed functions.",
            sourceLessonSlug: "fiduciary-has-a-definition",
          },
          {
            prompt: "Does the prudence duty guarantee that a decision will turn out well?",
            options: ["No", "Yes, a fiduciary is liable for any loss the plan's investments suffer", "Yes, provided the fiduciary followed the plan's governing documents", "Yes, unless the loss arose from a failure to diversify the investments"],
            correctIndex: 0,
            explanation: "It is a standard of care and process, so a prudent process can still produce a bad year.",
            sourceLessonSlug: "fiduciary-has-a-definition",
          },
          {
            prompt: "What does the standard forbid, as the lesson puts it?",
            options: ["Advising you for someone else's benefit", "Charging any fee at all against a participant's individual account", "Selecting an investment alternative that later loses value in a year", "Making a decision without first consulting the affected participants"],
            correctIndex: 0,
            explanation: "The prohibition is on acting for another's benefit while advising you, not on being wrong.",
            sourceLessonSlug: "fiduciary-has-a-definition",
          },
          {
            prompt: "How is the word fiduciary commonly misused, according to the lesson?",
            options: ["As a compliment", "As a description of a plan document rather than of a person", "As a synonym for the agency that supervises employee benefit plans", "As a label for anyone who holds a participant's assets in custody"],
            correctIndex: 0,
            explanation: "It is used in advertising as though it meant trustworthy, when in this area it is a legal status with a written definition.",
            sourceLessonSlug: "fiduciary-has-a-definition",
          },
          {
            prompt: "What is discretionary authority, in the definition's sense?",
            options: ["The power to decide", "The power to execute instructions given by another person", "The power to review a decision after it has already been made", "The power to draft the plan document before it is adopted"],
            correctIndex: 0,
            explanation: "Deciding rather than merely executing is what makes the authority discretionary, and it is one of the triggers for the status.",
            sourceLessonSlug: "fiduciary-has-a-definition",
          },
          {
            prompt: "Which statute contains the two provisions read in this lesson?",
            options: ["The employee retirement income statute", "The Investment Advisers Act, which governs firms advising retail investors", "The Internal Revenue Code, which sets the contribution and distribution rules", "The Social Security Act, which sets insured status and the benefit formula"],
            correctIndex: 0,
            explanation: "Both the functional definition and the four duties come from the same body of law governing employee benefit plans.",
            sourceLessonSlug: "fiduciary-has-a-definition",
          },
          {
            prompt: "Which of these is NOT one of the three fiduciary triggers?",
            options: ["Holding an account in the plan", "Exercising discretionary control over the plan's management", "Rendering investment advice for a fee with respect to plan property", "Having discretionary responsibility in the plan's administration"],
            correctIndex: 0,
            explanation: "Being a participant is not a trigger. The three are discretionary management, control over assets or advice for compensation, and administrative discretion.",
            sourceLessonSlug: "fiduciary-has-a-definition",
          },
          {
            prompt: "What is indirect compensation, in this context?",
            options: ["Payment from a source other than the client", "Compensation paid in a form other than cash to an adviser", "Compensation deferred until after the advisory relationship ends", "Compensation charged against a plan rather than an individual account"],
            correctIndex: 0,
            explanation: "The definition expressly reaches it, which is what makes clause (ii) do work when the payer and the advised person differ.",
            sourceLessonSlug: "fiduciary-has-a-definition",
          },
          {
            prompt: "The duty provision uses the phrase \"under the circumstances then prevailing\". What does that qualify?",
            options: ["The care and skill required", "The purposes for which plan expenses may be defrayed", "The requirement to diversify the plan's investment holdings", "The obligation to follow the plan's governing instruments"],
            correctIndex: 0,
            explanation: "The prudence standard is judged against the circumstances at the time rather than with hindsight.",
            sourceLessonSlug: "fiduciary-has-a-definition",
          },
          {
            prompt: "Why does the lesson say nobody escapes fiduciary status by omitting a title?",
            options: ["The definition looks at conduct", "Because the supervising agency assigns the status on registration", "Because plan documents must name every fiduciary by full legal name", "Because the status attaches to any person paid out of the plan's assets"],
            correctIndex: 0,
            explanation: "The status attaches to the exercise of the listed functions, not to what anyone is called.",
            sourceLessonSlug: "fiduciary-has-a-definition",
          },
          {
            prompt: "What does the exclusive purpose clause say about administrative expenses?",
            options: ["They must be reasonable", "They may not be charged against participant accounts at all", "They must be borne entirely by the employer that sponsors the plan", "They must be equal for every participant regardless of account size"],
            correctIndex: 0,
            explanation: "The clause permits defraying reasonable expenses of administering the plan as one of the two exclusive purposes.",
            sourceLessonSlug: "fiduciary-has-a-definition",
          },
          {
            prompt: "In the phrase \"a prudent man acting in a like capacity\", what is being compared?",
            options: ["An enterprise of like character and aims", "The fiduciary's conduct against the plan's own investment results", "The plan's costs against those charged by other plans of similar size", "The fiduciary's decisions against the preferences of the participants"],
            correctIndex: 0,
            explanation: "The standard measures conduct against what a prudent person familiar with such matters would do in a like enterprise with like aims.",
            sourceLessonSlug: "fiduciary-has-a-definition",
          },
          {
            prompt: "How many distinct duties does clause (a)(1) impose after the opening words?",
            options: ["Four", "Two, covering the exclusive purpose and the prudence standard only", "Six, adding separate duties of loyalty, care and disclosure to the four", "One, since the four lettered items are illustrations of a single duty"],
            correctIndex: 0,
            explanation: "Exclusive purpose, prudence, diversification, and following lawful plan documents.",
            sourceLessonSlug: "fiduciary-has-a-definition",
          },
          {
            prompt: "Under the Advisers Act, what is unlawful for an investment adviser?",
            options: ["Employing a scheme to defraud a client", "Charging a fee computed as a percentage of a client's total assets", "Recommending a security the adviser also holds in a personal account", "Advising a client who has not signed a written advisory contract"],
            correctIndex: 0,
            explanation: "The section makes it unlawful to employ any device, scheme, or artifice to defraud any client or prospective client.",
            sourceLessonSlug: "two-seats-one-conversation",
          },
          {
            prompt: "Whom do the Advisers Act prohibitions protect besides existing clients?",
            options: ["Prospective clients", "Any person who reads the adviser's published marketing material", "Participants in any employer plan the adviser has been engaged by", "Retail customers of a broker-dealer affiliated with the adviser"],
            correctIndex: 0,
            explanation: "The prohibitions run to any client or prospective client, which extends them before a relationship has begun.",
            sourceLessonSlug: "two-seats-one-conversation",
          },
          {
            prompt: "What must an adviser acting as principal do before completing a transaction with a client?",
            options: ["Disclose the capacity and obtain consent", "File a notice with the securities regulator before the trade settles", "Obtain an independent valuation of the security being bought or sold", "Refund any advisory fee attributable to the period of the transaction"],
            correctIndex: 0,
            explanation: "The statute requires written disclosure of the capacity before completion, and the client's consent to the transaction.",
            sourceLessonSlug: "two-seats-one-conversation",
          },
          {
            prompt: "What did the Supreme Court call the investment advisory relationship in 1963?",
            options: ["Delicate and fiduciary in nature", "A commercial arrangement governed entirely by the parties' contract", "A brokerage relationship subject to the same rules as a securities trade", "An agency relationship terminable at will by either party without notice"],
            correctIndex: 0,
            explanation: "The Court described the delicate fiduciary nature of an investment advisory relationship in SEC v. Capital Gains Research Bureau.",
            sourceLessonSlug: "two-seats-one-conversation",
          },
          {
            prompt: "What obligation did that decision describe?",
            options: ["Utmost good faith and full disclosure", "A duty to obtain the best available price on every transaction", "A duty to register with the securities regulator before advising", "A duty to recommend only the lowest-cost product in each category"],
            correctIndex: 0,
            explanation: "The phrase is utmost good faith, and full and fair disclosure of all material facts.",
            sourceLessonSlug: "two-seats-one-conversation",
          },
          {
            prompt: "On what date was SEC v. Capital Gains Research Bureau decided?",
            options: ["9 December 1963", "29 December 2022, the date the automatic enrollment section was enacted", "18 March 2026, the date of the report on worker participation in pensions", "18 October 2023, the date of the note on wealth in the consumer survey"],
            correctIndex: 0,
            explanation: "The decision, reported at 375 U.S. 180, is why the anti-fraud language is read as imposing an affirmative duty.",
            sourceLessonSlug: "two-seats-one-conversation",
          },
          {
            prompt: "Why does that decision matter to the reading of the statute?",
            options: ["It turns prohibitions into an affirmative duty", "It exempted investment advisers from the prohibitions the statute lists", "It extended the statute to cover brokers as well as investment advisers", "It required advisers to deliver a relationship summary to retail investors"],
            correctIndex: 0,
            explanation: "Without it the anti-fraud language would read as merely prohibiting lies rather than requiring disclosure and good faith.",
            sourceLessonSlug: "two-seats-one-conversation",
          },
          {
            prompt: "Whom does Regulation Best Interest's general obligation apply to?",
            options: ["Brokers and dealers recommending to retail customers", "Investment advisers entering into a contract with any new client", "Plan fiduciaries selecting investment alternatives for a participant menu", "Recordkeepers producing quarterly statements for plan participants"],
            correctIndex: 0,
            explanation: "It covers a broker, dealer, or associated natural person making a recommendation of a securities transaction or strategy to a retail customer.",
            sourceLessonSlug: "two-seats-one-conversation",
          },
          {
            prompt: "What does that rule forbid a broker-dealer from doing?",
            options: ["Placing its interest ahead of the customer's", "Charging a commission on any recommended securities transaction", "Recommending a security issued by an affiliate of the same firm", "Advising a customer who also holds an employer-sponsored plan account"],
            correctIndex: 0,
            explanation: "The obligation is to act in the retail customer's best interest without placing the firm's financial or other interest ahead of theirs.",
            sourceLessonSlug: "two-seats-one-conversation",
          },
          {
            prompt: "At what moment does Regulation Best Interest's general obligation attach?",
            options: ["When the recommendation is made", "Continuously, for as long as the customer's account remains open", "At the point the customer first opens an account with the firm", "When the customer executes the transaction that was recommended"],
            correctIndex: 0,
            explanation: "The rule says at the time the recommendation is made, which is one of the ways it differs from the adviser relationship standard.",
            sourceLessonSlug: "two-seats-one-conversation",
          },
          {
            prompt: "How many component obligations is Regulation Best Interest built out of?",
            options: ["Four", "Two, covering disclosure of conflicts and the exercise of due care", "Six, adding separate obligations of loyalty and of best execution", "One, since the general obligation is not broken down any further"],
            correctIndex: 0,
            explanation: "They are headed disclosure, care, conflict of interest, and compliance.",
            sourceLessonSlug: "two-seats-one-conversation",
          },
          {
            prompt: "Which of these is one of those four component obligations?",
            options: ["Conflict of interest", "Diversification of the customer's holdings across asset categories", "Delivery of the plan's summary description to the retail customer", "Annual disclosure of the customer's account costs in dollar terms"],
            correctIndex: 0,
            explanation: "The four headings are disclosure, care, conflict of interest, and compliance.",
            sourceLessonSlug: "two-seats-one-conversation",
          },
          {
            prompt: "What does this course say about which of the two seats is better?",
            options: ["Nothing", "That an investment adviser is always preferable for retirement advice", "That a broker-dealer is preferable where the customer trades infrequently", "That the choice depends on the size of the customer's account balance"],
            correctIndex: 0,
            explanation: "It says only that the question of which one you are dealing with has an answer, and that the answer is written down.",
            sourceLessonSlug: "two-seats-one-conversation",
          },
          {
            prompt: "Who must deliver Form CRS, and to whom?",
            options: ["A registered adviser, to each retail investor", "A plan administrator, to each participant who can direct investments", "An employer, to each employee eligible to join its retirement plan", "A recordkeeper, to each participant whose account exceeds a threshold"],
            correctIndex: 0,
            explanation: "A registered investment adviser must deliver Form CRS to each retail investor, before or at the time of entering an advisory contract.",
            sourceLessonSlug: "two-seats-one-conversation",
          },
          {
            prompt: "Which retirement-specific event triggers delivery to an existing client?",
            options: ["A rollover recommendation", "The client reaching the age of 59 and a half during the relationship", "The client's separation from service with a plan-sponsoring employer", "The annual anniversary of the advisory contract being entered into"],
            correctIndex: 0,
            explanation: "The rule names a recommendation that the retail investor roll over assets from a retirement account into a new or existing account or investment.",
            sourceLessonSlug: "two-seats-one-conversation",
          },
          {
            prompt: "What does the naming of that trigger tell you, according to the lesson?",
            options: ["The rollover conversation was thought consequential", "That rollovers are prohibited unless a form has been delivered first", "That an adviser may not recommend a rollover to an existing client", "That the rollover decision is governed by the plan rather than the adviser"],
            correctIndex: 0,
            explanation: "The rulemaker singled out that conversation, which is a signal about how much turns on it.",
            sourceLessonSlug: "two-seats-one-conversation",
          },
          {
            prompt: "Where else must a registered adviser make Form CRS available?",
            options: ["On its website", "In the offices of the supervising securities regulator for the region", "In the annual report filed by any plan the adviser has been engaged by", "In the comparative chart the plan furnishes with its fee disclosure"],
            correctIndex: 0,
            explanation: "The rule requires the current Form CRS to be posted prominently on the firm's website, in an accessible location and format.",
            sourceLessonSlug: "two-seats-one-conversation",
          },
          {
            prompt: "How quickly must a current Form CRS be delivered on request?",
            options: ["Within 30 days", "Within 60 days, matching the period for communicating amendments", "Within three business days, matching a closing disclosure deadline", "Within one business day, matching a credit file security freeze"],
            correctIndex: 0,
            explanation: "The rule requires delivery of a current Form CRS to each retail investor within 30 days upon request.",
            sourceLessonSlug: "two-seats-one-conversation",
          },
          {
            prompt: "How long does a firm have to communicate amendments to Form CRS to an existing client?",
            options: ["Within 60 days", "Within 30 days, matching the deadline for delivering it on request", "Within one year, at the anniversary of the advisory contract", "Immediately, before any further advice may lawfully be given"],
            correctIndex: 0,
            explanation: "Changes must be communicated within 60 days after the amendments are required to be made, and without charge.",
            sourceLessonSlug: "two-seats-one-conversation",
          },
          {
            prompt: "Does delivering Form CRS satisfy a firm's other disclosure obligations?",
            options: ["No", "Yes, it replaces every other disclosure required under federal law", "Yes, for as long as the firm also posts the form on its own website", "Yes, provided the firm delivers it before entering into any contract"],
            correctIndex: 0,
            explanation: "The rule says compliance with the section does not relieve a firm of other disclosure obligations under federal or state law.",
            sourceLessonSlug: "two-seats-one-conversation",
          },
          {
            prompt: "What is the SEC's free lookup service called?",
            options: ["Investment Adviser Public Disclosure", "The Central Registration Depository of state securities administrators", "The Employee Benefits Security Administration's plan search facility", "The Federal Register's index of published rules and interpretations"],
            correctIndex: 0,
            explanation: "The site titles itself IAPD, Investment Adviser Public Disclosure, and lets anyone look up a registered adviser's background and regulatory history free of charge.",
            sourceLessonSlug: "two-seats-one-conversation",
          },
          {
            prompt: "What is FINRA's public lookup service called?",
            options: ["BrokerCheck", "The Investment Adviser Public Disclosure system operated by the SEC", "The consumer complaint database maintained by a federal regulator", "The public licence register maintained by each state banking regulator"],
            correctIndex: 0,
            explanation: "Its own page describes it as a way to find a broker, investment or financial advisor.",
            sourceLessonSlug: "two-seats-one-conversation",
          },
          {
            prompt: "How does the lesson characterise those two lookup sites?",
            options: ["Records, not recommendations", "Advisory services that rank firms by the quality of their advice", "Complaint channels for participants who believe they were misled", "Registries that certify a firm as suitable for retirement customers"],
            correctIndex: 0,
            explanation: "Neither is a recommendation and neither is being recommended. Reading a record before a conversation is the move this catalog teaches everywhere.",
            sourceLessonSlug: "two-seats-one-conversation",
          },
          {
            prompt: "What is the key structural difference between the two standards, as the lesson frames it?",
            options: ["One runs to the relationship, one to the recommendation", "One is enforced by a court and the other by an administrative agency", "One applies to retirement accounts and the other to taxable accounts", "One requires registration and the other requires only annual reporting"],
            correctIndex: 0,
            explanation: "The adviser standard as the Court described it runs to the relationship; the broker-dealer standard attaches at the time a recommendation is made.",
            sourceLessonSlug: "two-seats-one-conversation",
          },
          {
            prompt: "What is a retail customer, in the context of the broker-dealer rule?",
            options: ["The category triggering the standard", "Any person holding an account at a registered broker-dealer firm", "A participant in an employer-sponsored individual account plan", "An investor whose account balance falls below a stated threshold"],
            correctIndex: 0,
            explanation: "The standard attaches to recommendations made to a retail customer, which is why its scope is narrower than a general duty.",
            sourceLessonSlug: "two-seats-one-conversation",
          },
          {
            prompt: "Which of the Advisers Act prohibitions is the catch-all?",
            options: ["Fraudulent, deceptive, or manipulative conduct", "Acting as principal without disclosing the capacity in writing", "Employing a device, scheme or artifice to defraud a client", "Engaging in a transaction that operates as a fraud upon a client"],
            correctIndex: 0,
            explanation: "The fourth paragraph reaches any act, practice or course of business that is fraudulent, deceptive, or manipulative, with rulemaking authority attached.",
            sourceLessonSlug: "two-seats-one-conversation",
          },
          {
            prompt: "How is the third and final refusal of advice delivered in this course?",
            options: ["In prose, in the capstone", "As a footnote appended to the course's list of sources", "As a disclaimer displayed only on the course landing page", "As a warning shown before each quiz in the final two sections"],
            correctIndex: 0,
            explanation: "The series requires the refusal in prose in three places, and the capstone carries the third.",
            sourceLessonSlug: "read-your-own-record",
          },
          {
            prompt: "How many documents does the capstone ask a learner to read?",
            options: ["Five", "Three, covering the plan document, the fee disclosure and the statement", "Seven, adding the annual report and the trust agreement as separate items", "Two, since the plan document and the fee disclosure are the only ones required"],
            correctIndex: 0,
            explanation: "The plan's governing documents, the annual fee disclosure, the quarterly statement, the earnings record, and Form CRS.",
            sourceLessonSlug: "read-your-own-record",
          },
          {
            prompt: "What do all five capstone documents have in common?",
            options: ["A rule requires them", "They are all produced by the same employer or its recordkeeper", "They are all published annually in the Federal Register by an agency", "They all require a fee to obtain from the institution that holds them"],
            correctIndex: 0,
            explanation: "Each exists because a statute or a regulation obliges somebody to produce it.",
            sourceLessonSlug: "read-your-own-record",
          },
          {
            prompt: "Which four things does the capstone say to find in the plan's governing documents?",
            options: ["Match, vesting, year of service, distribution events", "Fees, returns, the recordkeeper's identity, and the plan's total assets", "The employer's contribution history, the auditor, the trustee, the sponsor", "The annual limit, the phase-out range, the catch-up amount, the base year"],
            correctIndex: 0,
            explanation: "Those four are the terms Sections 1 and 2 established as the ones that decide what you actually receive.",
            sourceLessonSlug: "read-your-own-record",
          },
          {
            prompt: "What does the capstone ask you to read for each alternative you are actually in?",
            options: ["The cost, in both required forms", "The return the alternative produced over the preceding ten years", "The number of other participants who have selected the same option", "The fiduciary's written reasons for including it on the plan's menu"],
            correctIndex: 0,
            explanation: "As a percentage and as dollars per 1,000 invested, both of which the fee disclosure rule requires.",
            sourceLessonSlug: "read-your-own-record",
          },
          {
            prompt: "What does the capstone say about a year of covered work missing from your earnings record?",
            options: ["The formula treats it as zero", "The agency reconstructs it from the employer's payroll submissions", "It is excluded from the count of benefit computation years entirely", "It reduces the number of elapsed years used in the computation"],
            correctIndex: 0,
            explanation: "And after three years, three months and fifteen days you are arguing against a record the statute calls conclusive.",
            sourceLessonSlug: "read-your-own-record",
          },
          {
            prompt: "When does the capstone say to ask for Form CRS?",
            options: ["Before the conversation", "After a recommendation has been made and considered", "Only if the firm fails to post it on its own public website", "At the annual anniversary of the advisory relationship"],
            correctIndex: 0,
            explanation: "Ask before rather than after, and remember that a rollover recommendation to an existing client is itself a delivery trigger.",
            sourceLessonSlug: "read-your-own-record",
          },
          {
            prompt: "What share of U.S. households had retirement account assets in the 2022 survey?",
            options: ["54.3 percent", "72 percent, which is the private-sector access rate from a different survey", "92 percent, which is the share of people 65 and over receiving benefits", "62.2 percent, which is the ownership rate for households aged 45 to 54"],
            correctIndex: 0,
            explanation: "The Congressional Research Service reported that figure from the 2022 Survey of Consumer Finances.",
            sourceLessonSlug: "read-your-own-record",
          },
          {
            prompt: "Which age band had the highest rate of retirement account ownership in that survey?",
            options: ["45 to 54", "Younger than 35, at 49.6 percent of households in that age group", "65 and older, at 47 percent of households in that age group", "55 to 64, at 57 percent of households in that age group"],
            correctIndex: 0,
            explanation: "Ownership ran 49.6 percent under 35, 61.5 percent at 35 to 44, 62.2 percent at 45 to 54, 57 percent at 55 to 64, and 47 percent at 65 and older.",
            sourceLessonSlug: "read-your-own-record",
          },
          {
            prompt: "What share of households in that survey had retirement assets above 1 million dollars?",
            options: ["4.6 percent", "15.5 percent, which is the share holding between 100,000 and 500,000", "30 percent, which is the share holding up to 100,000 dollars", "54.3 percent, which is the share holding any retirement assets at all"],
            correctIndex: 0,
            explanation: "The distribution reported was about 30 percent up to 100,000, 15.5 percent to 500,000, 4.7 percent to 1 million, and 4.6 percent above.",
            sourceLessonSlug: "read-your-own-record",
          },
          {
            prompt: "What was median wealth among White families in the 2022 Survey of Consumer Finances?",
            options: ["285,000 dollars", "44,900 dollars, which is the figure reported for the typical Black family", "536,000 dollars, which is the figure reported for the typical Asian family", "100,000 dollars, which is a boundary in the retirement asset distribution"],
            correctIndex: 0,
            explanation: "The Federal Reserve note on the same survey reported that figure alongside the comparisons with other groups.",
            sourceLessonSlug: "read-your-own-record",
          },
          {
            prompt: "The wealth of the typical Black family in that survey was about what share of the typical White family's?",
            options: ["About 15 percent", "About 20 percent, which is the figure reported for Hispanic families", "About 54 percent, which is the retirement account ownership rate", "About 47 percent, which is the ownership rate for households over 65"],
            correctIndex: 0,
            explanation: "The note reports 44,900 dollars, only about 15 percent of the typical White family's wealth.",
            sourceLessonSlug: "read-your-own-record",
          },
          {
            prompt: "And the typical Hispanic family held about what share?",
            options: ["About 20 percent", "About 15 percent, which is the figure reported for Black families", "About 30 percent, matching the share of households with small balances", "About 62 percent, matching the peak retirement account ownership rate"],
            correctIndex: 0,
            explanation: "The note reports that the typical Hispanic family similarly held only about 20 percent of the wealth.",
            sourceLessonSlug: "read-your-own-record",
          },
          {
            prompt: "What does the capstone say the account gap and the wealth gap are?",
            options: ["One story about employment", "Two independent findings drawn from two unrelated federal surveys", "Evidence that individual saving behaviour differs sharply between groups", "A statistical artefact caused by combining households of different ages"],
            correctIndex: 0,
            explanation: "Access runs from 49 to 91 percent by wage quartile and reliance on the floor runs the other way, and both are measured publicly.",
            sourceLessonSlug: "read-your-own-record",
          },
          {
            prompt: "Which free step does the capstone recommend before taking advice?",
            options: ["Check a registration record", "Compare the adviser's fees against the plan's own cost disclosure", "Ask the plan administrator to approve the adviser in writing first", "Request a written projection of the outcome the advice would produce"],
            correctIndex: 0,
            explanation: "The SEC's Investment Adviser Public Disclosure site and FINRA's BrokerCheck both cost nothing and take minutes.",
            sourceLessonSlug: "read-your-own-record",
          },
          {
            prompt: "Which of these is on the capstone's list of things the course has NOT told you?",
            options: ["Whether to roll anything over", "How a Social Security benefit is computed from indexed earnings", "What a plan administrator must furnish on a written request", "How to convert a fee percentage into an annual dollar figure"],
            correctIndex: 0,
            explanation: "The refusals cover what to hold, how much to save, when to start, which account type, whether to roll over, and when to claim.",
            sourceLessonSlug: "read-your-own-record",
          },
          {
            prompt: "What does the course say it leaves a learner able to do about an annual limit?",
            options: ["Explain where it comes from", "State the current year's figure from memory without looking it up", "Predict how the figure will move over the next several years", "Compute the figure directly from the published wage index"],
            correctIndex: 0,
            explanation: "Explaining the base amount, the adjustment mechanism and the annual notice beats repeating a stale number.",
            sourceLessonSlug: "read-your-own-record",
          },
          {
            prompt: "Which survey is the source of both the retirement-account and the wealth figures in the capstone?",
            options: ["The Survey of Consumer Finances", "The National Compensation Survey conducted by the labour statistics bureau", "The Health and Retirement Study, which follows the same households over time", "The national survey of unbanked and underbanked households run by the FDIC"],
            correctIndex: 0,
            explanation: "Both come from the Federal Reserve's 2022 survey, one through a congressional analysis and one through the Board's own note.",
            sourceLessonSlug: "read-your-own-record",
          },
          {
            prompt: "In which month and year was that survey published by the Federal Reserve?",
            options: ["October 2023", "February 2025, the date of the congressional analysis of the same data", "August 2025, the date of the analysis of income for people over 65", "March 2026, the date of the report on worker participation in pensions"],
            correctIndex: 0,
            explanation: "The 2022 survey was published in October 2023, and the analyses of it carry their own later dates.",
            sourceLessonSlug: "read-your-own-record",
          },
          {
            prompt: "What is the final question the course wants a learner to be able to ask?",
            options: ["Which seat are you sitting in", "What return have you produced for clients like me before", "How much of my pay do you think I ought to be deferring", "Which of the plan's alternatives would you personally choose"],
            correctIndex: 0,
            explanation: "Ask which legal seat the adviser occupies, then check the free public record before deciding what the advice is worth.",
            sourceLessonSlug: "read-your-own-record",
          },
          {
            prompt: "Why does the capstone include the survey figures at all?",
            options: ["The course would be dishonest without them", "Because the figures are required by the standards this course claims", "Because a capstone must include at least one quantitative exercise", "Because the survey is the only free source of retirement account data"],
            correctIndex: 0,
            explanation: "A reading exercise about documents would misdescribe the subject without the distribution the documents sit inside.",
            sourceLessonSlug: "read-your-own-record",
          },
          {
            prompt: "What does the capstone call itself, and what does it say it is not?",
            options: ["A reading exercise, not a plan", "A financial plan tailored to the learner's own circumstances", "A recommendation about which account type a learner should use", "A projection of the balance a learner can expect at retirement"],
            correctIndex: 0,
            explanation: "It shows where the rules are written and which documents somebody must give you, and nothing about what to do with them.",
            sourceLessonSlug: "read-your-own-record",
          },
        ],
      },
    },
  ],
};

