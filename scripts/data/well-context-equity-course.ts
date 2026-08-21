import type { AuthoredCourse } from "./authored-course";

// WELL-08 · Context, Equity, and the Coaching Agreement (plans/67).
//
// The course the adversarial-review verification pass earned. Gemini's coverage attack was mostly
// wrong on facts, but its structural finding held: eight competency clusters in the 2026 NBHWC
// handbook had ZERO systematic treatment anywhere in the nine WELL courses. Verified locators,
// counted against the handbook itself:
//   3.9.9 adapt goals/action plans for social determinants of health   · 0 hits
//   3.8.3-3.8.4 structural and environmental supports; systemic barriers · 0 hits
//   3.8.5 health literacy and numeracy                                  · 0 hits
//   1.2.2.1 diversity-related history, marginalization, trauma          · 0 hits
//   1.2.2.2-1.2.2.4 power and privilege, cultural humility, own biases  · 0 hits
//   1.3.2.6-1.3.2.7 neutralize power dynamics; repair discord           · 0 hits
//   1.5.2 co-create the coaching agreement                              · 0 hits
//   2.9 Appreciative Inquiry                                            · 0 hits
//
// TWO lessons here are NOT competency coverage and say so in their own prose: group coaching and
// implicit bias. Both appear ZERO times in the 2026 handbook. They are in the course because BAM
// asked for them (2026-08-20), framed as professional practice beyond the credential's stated
// scope rather than as exam material. The implicit-bias lesson teaches the null results, not the
// workshop version, because that is what the primary sources say.
//
// Every figure in this course was verified against the primary before it was written: NCES
// 2006-483 for the health-literacy distribution, and PubMed abstracts for Berkman, Seligman,
// Gottlieb, Dinh, Tervalon, FitzGerald, Oswald, Forscher, Lai, Williams, and Odgers-Jewell.
export const WELL_CONTEXT_EQUITY_COURSE: AuthoredCourse = {
  title: "Wellness Coaching 08: Context, Equity, and the Coaching Agreement",
  description:
    "The eight competency clusters the other nine courses never covered. What a plan collides with when it leaves the room, why a third of adults cannot use the materials most coaches hand out, what the evidence actually says about implicit bias training (it is not what the workshop says), and the agreement that should exist before any of it starts.",
  lessons: [
    // ── Section 1 ────────────────────────────────────────────────────────────────────────────
    {
      slug: "plans-land-in-lives",
      title: "1 · A plan lands in a life, not a vacuum",
      section: "Section 1 · The context a plan lands in",
      body: `Every protocol in the first nine courses assumed something that is usually false: that the person can act on it. This course is about the part of coaching that happens where the plan meets the conditions of an actual life.

**The competency this covers.** The 2026 handbook asks a coach to "adapt goals or action plans to address the impact of social determinants of health" (3.9.9). Not to *know about* determinants. To **adapt the plan**. That verb is the whole lesson: this is an operational skill, not a sensitivity topic.

**What the term names.** Social determinants of health are the conditions in which people are born, grow, work, live, and age, and the systems that shape those conditions. In coaching terms they are the variables you do not control and often cannot change, but which decide whether an agreed action is possible on a Tuesday.

**Why a coach should care, in numbers rather than sentiment.** Take one determinant, food insecurity, defined as being unable to afford enough food for an active healthy life. Among 5,094 low-income adults aged 18 to 65 in NHANES 1999-2004, food insecurity was associated with self-reported hypertension at an adjusted relative risk of 1.20 (95% CI 1.04-1.38) and hyperlipidemia at 1.30 (1.09-1.55), and with laboratory or examination evidence of hypertension at 1.21 (1.04-1.41) (Seligman et al., 2010). The diabetes association did not reach significance in the fully adjusted model unless a stricter definition of food insecurity was used, at which point it was 2.42 (1.44-4.08). That is a coaching-relevant hazard sitting entirely outside the coaching conversation.

**The failure mode this prevents.** A coach who does not ask about context reads a missed action as a motivation problem and applies motivational technique to a logistics problem. WELL-01 taught you to evoke change talk. Evoking will not produce a grocery store, a car, a childcare option, or a predictable shift. Applying it to those situations does not just fail; it teaches the client that the failure was theirs.

**The opposite error, which is just as bad.** Concluding that because a determinant exists, nothing is coachable. That reasoning ends every conversation with a shrug and is also wrong: the evidence in the next two lessons is that specific, small adaptations survive hard conditions, and that a plan built for the conditions gets done.

**What you are NOT doing.** Not diagnosing poverty, not case-managing, not becoming a social worker, and not raising a determinant a client did not raise as though you had discovered it. The skill is narrow: notice the constraint, ask about it plainly, and change the plan.

:::reveal What does competency 3.9.9 actually require, and what makes the verb the whole point? ||| It requires the coach to ADAPT goals or action plans to address the impact of social determinants of health. Not to know about them. It is an operational skill applied to a specific plan, not a sensitivity topic.

:::reveal Give the two symmetrical failures a coach makes around context. ||| Reading a logistics problem as a motivation problem, so motivational technique gets applied to a barrier it cannot move and the client learns the failure was theirs. And concluding that because a determinant exists nothing is coachable, which ends the conversation with a shrug.

## Vocabulary
- **Social determinants of health**: the conditions in which people are born, grow, work, live, and age, plus the systems shaping those conditions.
- **Food insecurity**: inability to afford enough food for an active, healthy life; measured in the research above by the Food Security Survey Module.
- **Adjusted relative risk**: the risk ratio after accounting for named confounders, here age, gender, race, education, and income.
- **Logistics problem**: a missed action whose cause is a condition rather than a preference, and which motivational technique cannot move.

## Sources
Seligman, H. K., Laraia, B. A., & Kushel, M. B. (2010). Food insecurity is associated with chronic disease among low-income NHANES participants. *Journal of Nutrition, 140*(2), 304-310. https://pubmed.ncbi.nlm.nih.gov/20032485/`,
    },
    {
      slug: "supports-and-immovables",
      title: "2 · Supports, barriers, and the ones that do not move",
      section: "Section 1 · The context a plan lands in",
      body: `The handbook splits the context skill into two halves, and coaches are much better at the first than the second.

**The two competencies.** Identify structural and environmental **supports** the client already has or could reach (3.8.3), and **recognize systemic barriers that are not modifiable by the client** (3.8.4). The first is an asset hunt. The second is an honesty requirement.

**The asset hunt.** Most clients have more usable structure than they report, because nobody asked in the right way. A workplace with a gym nobody mentions. A library, a park, a bus route, a family member with a car on Thursdays, an employer wellness benefit, a religious community that eats together, a neighbor already walking at six. The coaching move is to ask what already exists in the week rather than what the client should add to it, which is the same instinct WELL-99 applies when it makes the week the design unit.

**The honesty requirement, which is harder.** Some barriers will not move during the coaching relationship. A night shift. No car in a place built for cars. Immigration status limiting which services are safe to use. A neighborhood without a store selling fresh food. Caring for a parent with dementia. The competency asks you to **recognize** these, and recognizing has a specific meaning: naming the barrier as real and external, then designing around it rather than through it.

**Why naming matters clinically, not just kindly.** An unnamed barrier gets silently attributed. The client attributes the failure to their own character, and the coach, who cannot see the barrier either, agrees. WELL-01's whole account of self-efficacy predicts what happens next: repeated failure at an impossible task lowers the belief that effort works, and that belief is the thing carrying every future behavior.

**Design around, not through.** Around means the plan assumes the barrier permanently. A client on nights does not get a "try to sleep at night" plan with a sympathetic caveat; they get a plan built for a person who sleeps in the day, which WELL-05 already describes. Through means pretending effort can dissolve the constraint, and it produces plans that work only in weeks the constraint happens to lift.

**The line you do not cross.** Recognizing a systemic barrier is not the same as intervening in it. You are not filing appeals, contacting employers, or arranging benefits. If a determinant is the dominant problem, the referral is to someone whose job it is: a social worker, a benefits navigator, a patient advocate, a community health worker. Same discipline as every other referral in this program.

:::reveal What is the difference between designing AROUND a barrier and designing THROUGH it? ||| Around means the plan permanently assumes the barrier, like building a night-shift client a plan for someone who sleeps in the day. Through means implying effort can dissolve the constraint, which produces plans that only work in weeks the constraint lifts.

:::reveal Why is naming an immovable barrier a clinical act rather than a kindness? ||| Because an unnamed barrier gets attributed to the client's character by both parties. Repeated failure at an impossible task lowers self-efficacy, and self-efficacy is the belief carrying every future behavior.

## Vocabulary
- **Structural support**: an existing feature of the client's environment that makes an action easier, found by asking what is already in the week.
- **Non-modifiable systemic barrier**: a constraint the client cannot change within the coaching relationship, which the coach names and designs around.
- **Silent attribution**: what happens to an unnamed barrier, when both coach and client assign the failure to the client's character instead.
- **Designing around**: building the plan on the assumption that the barrier is permanent.`,
    },
    {
      slug: "adapting-the-plan",
      title: "3 · Adapting the plan, and what happens when someone tries",
      section: "Section 1 · The context a plan lands in",
      body: `Now the operational half. Given a constraint you have named, what changes about the plan, and does addressing context actually do anything?

**Four adaptations that carry most cases.** **Shrink the unit** so the minimum version survives the worst week, which WELL-99 already requires of every protocol. **Move the location** to somewhere the client already goes, since travel is the most common silent cost. **Change the currency** from money to time or from time to money, depending on which the client actually has. **Borrow the structure** from something already recurring, which is the cue work from WELL-01 pointed at a logistics problem.

**What the evidence says about doing something.** The honest state is thin, and one trial is worth knowing in detail. Gottlieb and colleagues randomized 1,809 families in two safety-net pediatric clinics to social-needs screening plus in-person resource navigation, or to an active control. At four months, the intervention arm's number of reported social needs fell more than the control arm's, a mean change of -0.39 versus +0.22 (P < .001), and caregivers reported significantly greater improvement in the child's health status, -0.36 versus -0.12 (P < .001) (Gottlieb et al., 2016).

**Read that carefully, because it is easy to overclaim.** It is a real randomized trial with a real effect on a real outcome. It is also four months, caregiver-reported health status, a pediatric safety-net population, and navigation delivered by trained staff rather than coaching. It does not show that a coach mentioning a food bank improves anyone's blood pressure. What it supports is narrower and still useful: **asking about social needs and connecting people to concrete help changes the needs, and something downstream moved too.**

**The scope translation for a coach.** You screen informally, in the ordinary flow of a conversation, and you connect rather than navigate. "Is getting to the store a problem?" is inside your scope. Working out someone's benefits eligibility is not. Keeping a short list of local resources is inside your scope. Advocating with an employer is not.

**What to do with a client who does not want context discussed.** Drop it. A client is allowed to keep their circumstances out of the coaching relationship, and pressing is a power move dressed as concern. Adapt the plan to what you can see, and leave the door open.

:::reveal A client agrees to three gym sessions a week and completes none for a month. Name the two diagnoses this section distinguishes, and the question that separates them. ||| A motivation problem or a logistics problem. The separating question is whether the action was POSSIBLE in the weeks it did not happen: ask what the Tuesday actually looked like before asking what the client wants.

:::reveal What did the Gottlieb trial actually show, and what would be overclaiming it? ||| 1,809 families randomized to social-needs screening plus in-person navigation versus active control: at four months reported social needs fell more (-0.39 versus +0.22, P < .001) and caregiver-reported child health improved more (-0.36 versus -0.12, P < .001). Overclaiming would be treating it as evidence that a coach mentioning a food bank improves a clinical outcome. It is four months, caregiver-reported, pediatric safety-net, and delivered by trained navigators.

:::reveal Name the four adaptations and the constraint each one answers. ||| Shrink the unit, for weeks with no time. Move the location, for travel cost. Change the currency between time and money, for whichever the client lacks. Borrow structure from something already recurring, for a missing cue.

## Vocabulary
- **Screen informally**: asking about conditions in the ordinary flow of a conversation, as opposed to administering an instrument.
- **Connect, not navigate**: naming a concrete resource is in scope; working out eligibility or advocating is not.
- **Active control**: a comparison group that receives a real alternative rather than nothing, which makes Gottlieb's difference harder to explain away.
- **Silent cost**: an unstated burden of a plan, most often travel time, that decides adherence without ever being discussed.

## Sources
Gottlieb, L. M., Hessler, D., Long, D., Laves, E., Burns, A. R., Amaya, A., Sweeney, P., Schudel, C., & Adler, N. E. (2016). Effects of social needs screening and in-person service navigation on child health: A randomized clinical trial. *JAMA Pediatrics, 170*(11), e162521. https://pubmed.ncbi.nlm.nih.gov/27599265/`,
      recallContent: [
        {
          prompt: "What does competency 3.9.9 require a coach to do about social determinants of health?",
          answer:
            "Adapt goals or action plans to address their impact. The requirement is operational: change the specific plan, not merely know the topic.",
        },
        {
          prompt: "Which barrier does a coach RECOGNIZE rather than try to move, and what does recognizing mean in practice?",
          answer:
            "A systemic barrier not modifiable by the client (3.8.4). Recognizing means naming it as real and external, then designing the plan around it permanently rather than through it.",
        },
      ],
    },
    {
      slug: "quiz-context",
      title: "4 · Knowledge check: the context a plan lands in",
      section: "Section 1 · The context a plan lands in",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What does competency 3.9.9 require?",
            options: ["Adapting goals or action plans", "Knowing the major categories of social determinant and their health effects", "Screening every client with a validated social-needs instrument at intake", "Referring any client with an identified determinant to a social worker"],
            correctIndex: 0,
            explanation: "The verb is the whole point: it is an operational skill applied to a specific plan, not a sensitivity topic.",
            sourceLessonSlug: "plans-land-in-lives",
          },
          {
            prompt: "What do social determinants of health name?",
            options: ["Conditions people are born, grow, work, live, and age in", "The behavioral choices that accumulate into chronic disease risk over a lifetime", "The genetic and family-history factors a coach cannot modify through behavior", "The healthcare access variables measured by insurance status and provider supply"],
            correctIndex: 0,
            explanation: "Plus the systems shaping those conditions. In coaching terms, the variables that decide whether an agreed action is possible on a Tuesday.",
            sourceLessonSlug: "plans-land-in-lives",
          },
          {
            prompt: "How large was the Seligman food-insecurity sample, and who was in it?",
            options: ["5,094 low-income adults aged 18 to 65", "About 19,000 adults aged 16 and over in households and prisons", "Roughly 8,500 participants across 47 education trials", "1,809 families attending two safety-net pediatric clinics"],
            correctIndex: 0,
            explanation: "Drawn from NHANES 1999-2004, with food insecurity assessed by the Food Security Survey Module.",
            sourceLessonSlug: "plans-land-in-lives",
          },
          {
            prompt: "What was food insecurity's adjusted relative risk for self-reported hypertension?",
            options: ["1.20, CI 1.04 to 1.38", "2.42, with a confidence interval running from 1.44 to 4.08", "1.30, with a confidence interval running from 1.09 to 1.55", "1.48, with a confidence interval that crossed one at 0.94 to 2.32"],
            correctIndex: 0,
            explanation: "Adjusted for age, gender, race, education, and income. Hyperlipidemia was 1.30 (1.09-1.55).",
            sourceLessonSlug: "plans-land-in-lives",
          },
          {
            prompt: "What happened to the food-insecurity diabetes association?",
            options: ["It missed significance unless the stricter definition was used", "It was the strongest of the three associations in every model specification", "It reached significance only in the unadjusted model and vanished after adjustment", "It was not examined, because the sample had too few diagnosed diabetics"],
            correctIndex: 0,
            explanation: "Under the stricter definition it was 2.42 (1.44-4.08). Laboratory evidence of diabetes was 1.48 (0.94-2.32), which crosses one.",
            sourceLessonSlug: "plans-land-in-lives",
          },
          {
            prompt: "What does a coach who never asks about context mistake?",
            options: ["A logistics problem for a motivation problem", "A motivation problem for a knowledge problem the client could read their way out of", "A temporary constraint for a permanent one, and abandons a workable plan too early", "A clinical problem for a behavioral one, and coaches something needing referral"],
            correctIndex: 0,
            explanation: "So motivational technique gets applied to a barrier it cannot move, and the client learns the failure was theirs.",
            sourceLessonSlug: "plans-land-in-lives",
          },
          {
            prompt: "Why will evoking change talk not fix a determinant?",
            options: ["It cannot produce a store, a car, or a shift", "Because change talk only predicts behavior in clients who are already in the action stage", "Because determinants operate through physiology rather than through behavioral choice", "Because motivational interviewing was validated in clinical rather than community samples"],
            correctIndex: 0,
            explanation: "And applying it there does not merely fail; it teaches the client that the failure was theirs.",
            sourceLessonSlug: "plans-land-in-lives",
          },
          {
            prompt: "What is the symmetrical error to ignoring context?",
            options: ["Deciding nothing is coachable", "Treating every determinant as something the client could overcome with enough planning", "Referring every client with any identified constraint out of the coaching relationship", "Assuming a determinant a client mentions once is the dominant factor in every setback"],
            correctIndex: 0,
            explanation: "That reasoning ends every conversation with a shrug, and the evidence says specific small adaptations survive hard conditions.",
            sourceLessonSlug: "plans-land-in-lives",
          },
          {
            prompt: "Which is NOT part of the coach's job here?",
            options: ["Case-managing the determinant", "Noticing a constraint that has appeared repeatedly in what the client describes", "Asking about a constraint plainly once the client has raised the underlying difficulty", "Changing the agreed plan so it assumes the constraint will still be there"],
            correctIndex: 0,
            explanation: "The skill is narrow: notice, ask plainly, change the plan. Not diagnosing poverty, and not raising a determinant the client did not raise.",
            sourceLessonSlug: "plans-land-in-lives",
          },
          {
            prompt: "What is an adjusted relative risk?",
            options: ["A risk ratio accounting for named confounders", "A risk ratio recalculated after excluding participants who did not complete follow-up", "A ratio comparing the exposed group against the population rather than a control group", "A ratio weighted by how severe each outcome was in the participants who developed it"],
            correctIndex: 0,
            explanation: "In Seligman the adjustment covered age, gender, race, educational attainment, and income.",
            sourceLessonSlug: "plans-land-in-lives",
          },
          {
            prompt: "What does food insecurity mean, as measured in that study?",
            options: ["Being unable to afford enough food for an active, healthy life", "Living further than one mile from a store that sells fresh produce and staples", "Reporting that food costs consume more than a third of household monthly income", "Having skipped at least one meal for financial reasons in the past seven days"],
            correctIndex: 0,
            explanation: "Assessed with the Food Security Survey Module, which is why the stricter-definition analysis was available.",
            sourceLessonSlug: "plans-land-in-lives",
          },
          {
            prompt: "Why does the lesson give numbers instead of a moral argument?",
            options: ["To make it a coaching-relevant hazard, not a sentiment", "Because coaches respond better to quantitative evidence than to qualitative accounts", "Because the handbook competency requires the coach to quantify each determinant present", "Because the numbers establish that the determinant caused the disease in these adults"],
            correctIndex: 0,
            explanation: "A hazard of that size sitting entirely outside the coaching conversation is the argument for putting it inside.",
            sourceLessonSlug: "plans-land-in-lives",
          },
          {
            prompt: "A client misses agreed walks for a month. What do you ask first?",
            options: ["What the week actually looked like", "Whether they still consider the goal important enough to keep pursuing", "Whether the agreed dose was too ambitious for their current fitness level", "Whether they would prefer a different activity that they might enjoy more"],
            correctIndex: 0,
            explanation: "Possibility before preference. The separating question is whether the action was possible in the weeks it did not happen.",
            sourceLessonSlug: "plans-land-in-lives",
          },
          {
            prompt: "What is 'silent attribution'?",
            options: ["An unnamed barrier being blamed on the client's character", "A client attributing a success to luck rather than to their own sustained effort", "A coach recording a missed action without noting the reason the client gave for it", "A determinant that affects behavior without producing any measurable health outcome"],
            correctIndex: 0,
            explanation: "Both parties do it, because the coach cannot see the barrier either. Naming it is what stops it.",
            sourceLessonSlug: "supports-and-immovables",
          },
          {
            prompt: "What do competencies 3.8.3 and 3.8.4 ask for, respectively?",
            options: ["An asset hunt, and an honesty requirement", "A formal environmental assessment, and a referral to an appropriate community service", "A list of barriers, and a plan for removing each of them within the coaching term", "A screening instrument at intake, and a rescreen at the close of the engagement"],
            correctIndex: 0,
            explanation: "Identify structural and environmental supports; recognize systemic barriers the client cannot modify.",
            sourceLessonSlug: "supports-and-immovables",
          },
          {
            prompt: "How do you find structural supports a client never mentions?",
            options: ["Ask what already exists in the week", "Ask what the client believes they should be adding to their current routine", "Work through a standard checklist of community resources for their postal code", "Ask which of their previous programs worked and what those programs provided"],
            correctIndex: 0,
            explanation: "Same instinct WELL-99 applies in making the week the design unit. Most clients have more usable structure than they report.",
            sourceLessonSlug: "supports-and-immovables",
          },
          {
            prompt: "What does 'recognize' mean for a non-modifiable barrier?",
            options: ["Name it as real and external, then design around it", "Document it in the record so a future practitioner can see the full picture", "Acknowledge it sympathetically while keeping the original plan and its timeline intact", "Escalate it to whichever agency has responsibility for that category of problem"],
            correctIndex: 0,
            explanation: "Recognizing has an operational meaning here, and the word 'around' is doing the work in it.",
            sourceLessonSlug: "supports-and-immovables",
          },
          {
            prompt: "What is the difference between designing around and designing through?",
            options: ["Around assumes the barrier is permanent", "Around avoids the barrier's category entirely, while through addresses it in small increments", "Around uses external resources, while through relies only on what the client already has", "Around changes the goal, while through keeps the goal and changes only the timeline"],
            correctIndex: 0,
            explanation: "Through implies effort can dissolve the constraint, which produces plans that work only in weeks the constraint lifts.",
            sourceLessonSlug: "supports-and-immovables",
          },
          {
            prompt: "What does a night-shift client get, on this reasoning?",
            options: ["A plan built for someone who sleeps in the day", "A plan to shift gradually toward a conventional schedule over the coming months", "A plan identical to a day-worker's, with an acknowledgment that it will be harder", "A referral, since shift work places the case outside a coach's scope of practice"],
            correctIndex: 0,
            explanation: "Which WELL-05 already describes. The sympathetic caveat version is designing through the barrier.",
            sourceLessonSlug: "supports-and-immovables",
          },
          {
            prompt: "Which mechanism explains why unnamed barriers do lasting damage?",
            options: ["Repeated failure lowers self-efficacy", "Repeated failure produces habituation, so the client stops noticing the missed action", "Unnamed barriers grow larger over time as the client avoids confronting them directly", "The coach loses credibility, and the client discounts later suggestions accordingly"],
            correctIndex: 0,
            explanation: "WELL-01 identifies self-efficacy as the belief carrying every future behavior, which is why the damage outlasts the plan.",
            sourceLessonSlug: "supports-and-immovables",
          },
          {
            prompt: "Which is a structural support rather than a barrier?",
            options: ["A workplace gym the client has not mentioned", "A commute that consumes ninety minutes at each end of the working day", "A partner who works nights, leaving the client responsible for evening childcare", "A neighborhood with no store selling fresh food within reasonable travel distance"],
            correctIndex: 0,
            explanation: "Along with libraries, parks, bus routes, a family member with a car on Thursdays, and a neighbor already walking at six.",
            sourceLessonSlug: "supports-and-immovables",
          },
          {
            prompt: "Where is the line between recognizing a barrier and intervening in it?",
            options: ["You do not file appeals or arrange benefits", "You may contact an employer on the client's behalf if the client gives written permission", "You may intervene once the barrier has persisted beyond the agreed coaching duration", "You may intervene in environmental barriers but not in financial or legal ones"],
            correctIndex: 0,
            explanation: "If a determinant is the dominant problem, refer to a social worker, benefits navigator, patient advocate, or community health worker.",
            sourceLessonSlug: "supports-and-immovables",
          },
          {
            prompt: "Which barrier does the lesson name as genuinely immovable within coaching?",
            options: ["Immigration status limiting which services are safe", "A client's reluctance to exercise in a gym where they feel conspicuous or judged", "A schedule crowded with commitments the client has agreed to but does not value", "A belief that previous attempts failed because the client lacks the necessary discipline"],
            correctIndex: 0,
            explanation: "Alongside a night shift, no car in a car-built place, no store selling fresh food, and caring for a parent with dementia.",
            sourceLessonSlug: "supports-and-immovables",
          },
          {
            prompt: "Why are coaches better at the asset half than the honesty half?",
            options: ["Naming an immovable barrier feels like giving up", "Because assets are documented in community directories while barriers are not recorded anywhere", "Because the competency framework was written to emphasize strengths over deficits", "Because clients volunteer their assets readily and conceal their barriers deliberately"],
            correctIndex: 0,
            explanation: "It is not. It is the precondition for a plan that survives, and the alternative is silent attribution.",
            sourceLessonSlug: "supports-and-immovables",
          },
          {
            prompt: "Name the four adaptations from lesson 3.",
            options: ["Shrink the unit, move the location, change the currency, borrow the structure", "Reduce the frequency, lengthen the timeline, add accountability, increase the reward", "Simplify the goal, add a reminder, recruit a partner, schedule a review", "Lower the target, extend the deadline, remove a pillar, revisit the motivation"],
            correctIndex: 0,
            explanation: "Each answers a specific constraint: no time, travel cost, the wrong currency, and a missing cue.",
            sourceLessonSlug: "adapting-the-plan",
          },
          {
            prompt: "What does 'move the location' answer?",
            options: ["Travel, the most common silent cost", "A client's discomfort with the social environment of a conventional gym setting", "The difficulty of maintaining a habit whose cue is tied to a single fixed place", "The tendency for home-based plans to be interrupted by household demands"],
            correctIndex: 0,
            explanation: "Somewhere the client already goes. The silent cost is the unstated burden that decides adherence without being discussed.",
            sourceLessonSlug: "adapting-the-plan",
          },
          {
            prompt: "What does 'change the currency' mean?",
            options: ["Swap money for time, or time for money", "Replace an outcome goal with a process goal the client controls more directly", "Convert a target from minutes into sessions so it is easier to track and report", "Move the reward from an external incentive to an internal source of satisfaction"],
            correctIndex: 0,
            explanation: "Depending on which the client actually has. A cheap plan that eats an hour is expensive to someone with no hours.",
            sourceLessonSlug: "adapting-the-plan",
          },
          {
            prompt: "What does 'borrow the structure' apply, and to what?",
            options: ["WELL-01's cue work, to a logistics problem", "WELL-99's monthly review, to a client whose plan keeps drifting between sessions", "WELL-02's dose-response evidence, to a client with very little available time", "WELL-06's social-connection findings, to a client who is isolated during the week"],
            correctIndex: 0,
            explanation: "Attach the action to something already recurring rather than building a new occasion for it.",
            sourceLessonSlug: "adapting-the-plan",
          },
          {
            prompt: "How many families did Gottlieb randomize, and to what?",
            options: ["1,809, to screening plus navigation or an active control", "5,094 low-income adults, to a social-needs intervention or to usual primary care", "8,533 participants, to group-based education or to individual education sessions", "About 19,000 adults, to a health-literacy intervention or to standard materials"],
            correctIndex: 0,
            explanation: "In two safety-net pediatric clinics, with primary outcomes at four months.",
            sourceLessonSlug: "adapting-the-plan",
          },
          {
            prompt: "What were Gottlieb's two results at four months?",
            options: ["Social needs fell more, and reported child health improved more", "Social needs fell in both arms equally, but child health improved only in the intervention arm", "Social needs fell in the intervention arm, with no difference in any health measure", "Both arms improved on health status, but only the control arm's social needs changed"],
            correctIndex: 0,
            explanation: "Needs changed -0.39 versus +0.22 (P < .001); caregiver-reported child health changed -0.36 versus -0.12 (P < .001).",
            sourceLessonSlug: "adapting-the-plan",
          },
          {
            prompt: "What is an active control, and why does it matter here?",
            options: ["A real alternative rather than nothing", "A group receiving the intervention later, so every participant eventually benefits from it", "A group whose outcomes are measured but who receive no contact from the research team", "A comparison drawn from routine records rather than from randomly assigned participants"],
            correctIndex: 0,
            explanation: "It makes the observed difference harder to explain away as attention or expectation.",
            sourceLessonSlug: "adapting-the-plan",
          },
          {
            prompt: "Which claim would overclaim the Gottlieb trial?",
            options: ["That mentioning a food bank improves blood pressure", "That screening for social needs and connecting families to help reduced their reported needs", "That caregiver-reported child health improved more in the arm receiving navigation", "That the effect was measured at four months in a pediatric safety-net population"],
            correctIndex: 0,
            explanation: "It is four months, caregiver-reported health status, pediatric safety-net, and navigation by trained staff rather than coaching.",
            sourceLessonSlug: "adapting-the-plan",
          },
          {
            prompt: "What is the scope translation of that trial for a coach?",
            options: ["Screen informally, connect rather than navigate", "Administer the same screening instrument the trial used, then refer every positive result", "Deliver navigation directly, since the trial shows it works and coaches have the contact time", "Avoid the topic, since the evidence comes from navigators rather than from coaches"],
            correctIndex: 0,
            explanation: "Asking in the flow of a conversation and naming a concrete resource are in scope. Eligibility work and advocacy are not.",
            sourceLessonSlug: "adapting-the-plan",
          },
          {
            prompt: "A client does not want their circumstances discussed. What do you do?",
            options: ["Drop it and adapt to what you can see", "Explain why the information would improve the plan, then ask once more", "Note it as resistance and return to it when the relationship is more established", "Refer them, since a plan built without context cannot be responsibly designed"],
            correctIndex: 0,
            explanation: "Pressing is a power move dressed as concern. Leave the door open.",
            sourceLessonSlug: "adapting-the-plan",
          },
          {
            prompt: "What is a 'silent cost'?",
            options: ["An unstated burden that decides adherence", "A financial cost of a plan that the client is embarrassed to raise with the coach", "A cost that appears only after several weeks, once the initial enthusiasm has faded", "The opportunity cost of the activity the plan displaces from the client's week"],
            correctIndex: 0,
            explanation: "Most often travel time, and it decides adherence without ever being discussed.",
            sourceLessonSlug: "adapting-the-plan",
          },
          {
            prompt: "What does 'shrink the unit' borrow from WELL-99?",
            options: ["The minimum version, defined before the worst week", "The monthly review, which converts what happened into what changes next", "The stop conditions, decided in advance for injury, illness, or crisis", "The capstone artefact, rerun a year later against the original protocol"],
            correctIndex: 0,
            explanation: "Every protocol in WELL-99 already requires a minimum version, and a constraint is exactly when it earns its place.",
            sourceLessonSlug: "adapting-the-plan",
          },
          {
            prompt: "What does 'screen informally' rule out?",
            options: ["Administering an instrument", "Asking about a determinant more than once in a coaching relationship", "Recording anything the client says about their circumstances in your notes", "Raising the subject before the client has completed several sessions"],
            correctIndex: 0,
            explanation: "The question happens in the ordinary flow of a conversation, which is what keeps it inside a coach's scope.",
            sourceLessonSlug: "adapting-the-plan",
          },
          {
            prompt: "Why does the course call determinants a coaching variable rather than a policy topic?",
            options: ["They decide whether an agreed action is possible", "Because coaches are often the only professional a client sees regularly enough to notice them", "Because the credential requires coaches to advocate on structural issues affecting clients", "Because most determinants can be modified within a normal coaching engagement"],
            correctIndex: 0,
            explanation: "That is the whole claim: they are variables you do not control that govern whether the plan happens on a Tuesday.",
            sourceLessonSlug: "plans-land-in-lives",
          },
          {
            prompt: "Which pair of numbers belongs to Seligman's hyperlipidemia finding?",
            options: ["1.30, CI 1.09 to 1.55", "1.21, with a confidence interval running from 1.04 to 1.41", "1.19, with a confidence interval running from 0.89 to 1.58", "1.20, with a confidence interval running from 1.04 to 1.38"],
            correctIndex: 0,
            explanation: "1.21 (1.04-1.41) was laboratory or examination evidence of hypertension; 1.20 (1.04-1.38) was self-reported hypertension.",
            sourceLessonSlug: "plans-land-in-lives",
          },
          {
            prompt: "What is the coach's narrow skill with determinants, in three steps?",
            options: ["Notice, ask plainly, change the plan", "Screen, document, and refer to the appropriate community service for follow-up", "Assess severity, prioritize the largest determinant, and build the plan around it", "Educate the client about the determinant, then evoke their motivation to address it"],
            correctIndex: 0,
            explanation: "Deliberately narrow, because the alternatives are all somebody else's job.",
            sourceLessonSlug: "plans-land-in-lives",
          },
          {
            prompt: "A client with no car lives where everything requires driving. What is the adaptation?",
            options: ["Move the location to somewhere they already go", "Help them research public transport routes to the facility you originally agreed on", "Shrink the plan until it can be completed entirely within their own home", "Treat transport as the primary goal and coach toward solving it first"],
            correctIndex: 0,
            explanation: "Travel is the most common silent cost, and the fix is a location already in the week rather than a new journey.",
            sourceLessonSlug: "adapting-the-plan",
          },
          {
            prompt: "What is the relationship between this course and the first nine?",
            options: ["Those assumed the person could act on the plan", "Those covered the science, and this one covers the interpersonal skills that deliver it", "Those were written from research dossiers, and this one from the competency handbook only", "Those addressed individual clients, and this one addresses populations and communities"],
            correctIndex: 0,
            explanation: "Which is usually false. This course is the part of coaching where the plan meets the conditions of an actual life.",
            sourceLessonSlug: "plans-land-in-lives",
          },
          {
            prompt: "What kind of evidence is the Seligman finding, and what follows?",
            options: ["Cross-sectional and adjusted, so association not causation", "A randomized trial, so the association can be read as a causal effect of food insecurity", "A meta-analysis of cohorts, so the pooled estimate is more reliable than any single study", "A case series, so the numbers describe the sample and do not generalize at all"],
            correctIndex: 0,
            explanation: "It is NHANES data with named adjustments, which makes it a coaching-relevant hazard rather than a demonstrated mechanism.",
            sourceLessonSlug: "plans-land-in-lives",
          },
          {
            prompt: "What does the lesson say about raising a determinant the client has not raised?",
            options: ["Do not, and do not present it as a discovery", "Raise it once early, so the client knows the subject is available to them", "Raise it only if it appears in a validated screening instrument you administered", "Raise it whenever the evidence suggests it is likely given their circumstances"],
            correctIndex: 0,
            explanation: "It sits alongside not diagnosing poverty and not case-managing, in the list of things this skill is not.",
            sourceLessonSlug: "plans-land-in-lives",
          },
          {
            prompt: "Why does the honesty requirement come with a self-efficacy argument?",
            options: ["Because the alternative teaches a false lesson about the client", "Because self-efficacy is the outcome the coaching relationship is contracted to improve", "Because clients with high self-efficacy report their barriers more accurately at intake", "Because self-efficacy measures predict which barriers a client will manage to overcome"],
            correctIndex: 0,
            explanation: "Unnamed barriers get attributed to character, and repeated failure at an impossible task lowers the belief that effort works.",
            sourceLessonSlug: "supports-and-immovables",
          },
          {
            prompt: "Which question finds structure a client has not reported?",
            options: ["What is already in your week?", "What would you need to add in order to make this plan realistic?", "What has worked for you in previous attempts at a change like this one?", "What resources does your community offer that you have not yet tried?"],
            correctIndex: 0,
            explanation: "Asking what exists rather than what should be added is the difference between an asset hunt and a prescription.",
            sourceLessonSlug: "supports-and-immovables",
          },
          {
            prompt: "Which referral fits a dominant determinant?",
            options: ["A benefits navigator or community health worker", "A physician, since the determinant will eventually present as a clinical problem", "A behavioral therapist, to address the distress the circumstances are producing", "A different coach with more experience in the client's particular circumstances"],
            correctIndex: 0,
            explanation: "Or a social worker or patient advocate. Same discipline as every other referral in the program.",
            sourceLessonSlug: "supports-and-immovables",
          },
          {
            prompt: "What does the phrase 'possible on a Tuesday' capture?",
            options: ["Whether the agreed action can actually happen", "Whether the client has scheduled the action on a specific and consistent weekday", "Whether the plan survives the midweek dip in motivation most clients experience", "Whether the action fits a working day rather than depending on the weekend"],
            correctIndex: 0,
            explanation: "It is the operational test the determinant framing exists to make askable.",
            sourceLessonSlug: "plans-land-in-lives",
          },
          {
            prompt: "Two clients miss the same plan. One lacks childcare; one lost interest. What differs?",
            options: ["One is a logistics problem, one a motivation problem", "One requires a referral out of coaching, and the other requires a revised plan", "One is a scope issue for the coach, and the other is within ordinary coaching practice", "One will resolve without intervention, and the other requires a change of goal"],
            correctIndex: 0,
            explanation: "The separating question is whether the action was possible in the weeks it did not happen. The techniques are entirely different.",
            sourceLessonSlug: "plans-land-in-lives",
          },
          {
            prompt: "What is the risk of an extended, sympathetic acknowledgment of a barrier?",
            options: ["It leaves the plan unchanged, which is designing through", "It signals to the client that the coach considers their situation hopeless and unfixable", "It uses session time that would be better spent on the parts the client can control", "It invites disclosure the coach has no scope to hold, which is a separate error"],
            correctIndex: 0,
            explanation: "Recognition without redesign is the sympathetic caveat version, and it produces plans that work only in easy weeks.",
            sourceLessonSlug: "supports-and-immovables",
          },
          {
            prompt: "Which detail makes the Gottlieb result harder to dismiss?",
            options: ["The comparison arm was active, not nothing", "The trial ran for four months, which is long enough for behavioral effects to appear", "The outcome was caregiver-reported, so it reflects what families actually experienced", "The sample spanned two hospitals, which makes the finding less site-specific"],
            correctIndex: 0,
            explanation: "An active control makes attention and expectation weaker explanations for the difference.",
            sourceLessonSlug: "adapting-the-plan",
          },
          {
            prompt: "Which is the honest one-line summary of the social-needs evidence?",
            options: ["Asking and connecting changed the needs, and something downstream moved", "Addressing social needs improves clinical outcomes across populations and settings", "Social-needs interventions have no measurable effect once the control is made active", "The evidence is too thin to justify asking about social needs in a coaching context"],
            correctIndex: 0,
            explanation: "Narrower than the enthusiastic version and wider than the dismissive one, which is what the trial actually supports.",
            sourceLessonSlug: "adapting-the-plan",
          },
          {
            prompt: "A client has money but no time. Which adaptation applies?",
            options: ["Change the currency toward money", "Shrink the unit until the plan fits into the fragments of time available", "Move the location to somewhere closer to their home or their workplace", "Borrow structure from a recurring commitment that already exists in the week"],
            correctIndex: 0,
            explanation: "Currency swaps run in both directions, and the point is to spend whichever resource the client actually has.",
            sourceLessonSlug: "adapting-the-plan",
          },
          {
            prompt: "What is the first thing that changes when a constraint is named?",
            options: ["The attribution stops being about character", "The client becomes willing to discuss other constraints they had been concealing", "The coach gains permission to contact services on the client's behalf if needed", "The plan can be paused until the constraint has been resolved by someone else"],
            correctIndex: 0,
            explanation: "That is the clinical function of naming, and it happens before any redesign of the plan.",
            sourceLessonSlug: "supports-and-immovables",
          },
          {
            prompt: "Which sentence would this section refuse?",
            options: ["'If she wanted it enough, she would find a way'", "'Her shift pattern makes an evening plan impossible, so the plan should assume mornings'", "'The store nearest her sells no fresh produce, which changes what we should agree on'", "'She has a workplace gym she has never mentioned, which is worth building around'"],
            correctIndex: 0,
            explanation: "It is silent attribution stated out loud, and every other option is the competency being applied.",
            sourceLessonSlug: "supports-and-immovables",
          },
          {
            prompt: "What is the 'asset hunt', and what makes it work?",
            options: ["Looking for structure the client already has", "Compiling a directory of local services the client has not yet made use of", "Reviewing which previous programs the client completed and what those provided", "Assessing which of the six pillars the client is currently strongest in"],
            correctIndex: 0,
            explanation: "Most clients have more usable structure than they report, because nobody asked in the right way.",
            sourceLessonSlug: "supports-and-immovables",
          },
          {
            prompt: "Why does adapting a plan not mean lowering the ambition?",
            options: ["A plan built for the conditions actually gets done", "Because the ambition is set by the client, and only the coach's suggestions are adapted", "Because adaptation changes the timeline rather than the target the client agreed to", "Because most constraints prove temporary once the client begins making progress"],
            correctIndex: 0,
            explanation: "The evidence in this section is that specific small adaptations survive hard conditions, which is the opposite of a shrug.",
            sourceLessonSlug: "adapting-the-plan",
          },
        ],
      },
    },
    // ── Section 2 ────────────────────────────────────────────────────────────────────────────
    {
      slug: "who-can-use-your-materials",
      title: "5 · A third of adults cannot use what you hand them",
      section: "Section 2 · Being understood",
      body: `The last section was about whether a plan is possible. This one is about whether it was understood, which is a different failure with the same symptom.

**The distribution, from the primary source.** The 2003 National Assessment of Adult Literacy administered health-literacy tasks to more than 19,000 US adults aged 16 and over, in households and prisons, and measured performance directly rather than by self-report. The result: 53 percent scored Intermediate, 12 percent Proficient, 22 percent Basic, and 14 percent Below Basic (Kutner et al., 2006). So **36 percent of adults were at Basic or Below Basic**, and only about one in eight reached Proficient.

**What those levels mean concretely.** Below Basic means locating a single easy piece of information in a short text. Basic means simple documents and simple inference. Proficient, the level most health handouts are written for, means things like using a table to work out an insurance cost or calculating an employee's share of a premium. If your material assumes Proficient, roughly seven in eight adults are working above their measured level.

**Why a coach cannot dismiss this as a clinical problem.** Coaching runs almost entirely on language: agreements, plans, numbers, instructions, tracking. The materials a coach hands out are typically written by the coach, unreviewed, at whatever level comes naturally to someone who reads for a living.

**What low health literacy predicts.** A systematic review of 96 good- or fair-quality studies found low health literacy consistently associated with more hospitalizations, greater use of emergency care, lower receipt of mammography screening and influenza vaccine, poorer ability to demonstrate taking medications appropriately, and poorer overall health status (Berkman et al., 2011). Consistently associated, in observational data: this is a marker of real difficulty, not a proven causal chain, and the same confounding caution the rest of this program applies to observational findings applies here.

**The competency.** 3.8.5 asks the coach to consider how health literacy and numeracy impact the client's health and to **adjust the coaching approach** accordingly. Same operational verb as 3.9.9, and the same trap: knowing the statistic changes nothing until it changes the sentence you say next.

**What it does NOT license.** Not assuming a client's level from their appearance, accent, job, or education. Health literacy is task-specific and situational; a physician can be functionally illiterate about a condition they have never had, and a person with no diploma can be expert about the disease they have managed for twenty years. The response to this evidence is to make everything usable by default, not to guess who needs it.

:::reveal Give the four health-literacy levels with their percentages, and the sample. ||| Below Basic 14 percent, Basic 22, Intermediate 53, Proficient 12, from health-literacy tasks given to more than 19,000 US adults aged 16 and over in 2003. So 36 percent at Basic or Below Basic.

:::reveal Why is guessing a client's health literacy from how they present the wrong response to this evidence? ||| Because health literacy is task-specific and situational: a physician can be lost about a condition they have never had, and someone with no diploma can be expert on a disease they have managed for two decades. The correct response is to make everything usable by default.

## Vocabulary
- **Health literacy**: the ability to obtain, process, and use health information to make decisions, measured directly by task performance rather than self-report.
- **Proficient level**: the highest NAAL band, reached by 12 percent, involving tasks like computing a share of an insurance premium from a table.
- **Task-specific**: the property of health literacy that makes it impossible to infer from a person's education or occupation.
- **Usable by default**: designing every material for the lower bands, rather than screening to find who needs it.

## Sources
Kutner, M., Greenberg, E., Jin, Y., & Paulsen, C. (2006). *The health literacy of America's adults: Results from the 2003 National Assessment of Adult Literacy* (NCES 2006-483). U.S. Department of Education, National Center for Education Statistics. https://nces.ed.gov/pubs2006/2006483.pdf

Berkman, N. D., Sheridan, S. L., Donahue, K. E., Halpern, D. J., & Crotty, K. (2011). Low health literacy and health outcomes: An updated systematic review. *Annals of Internal Medicine, 155*(2), 97-107. https://pubmed.ncbi.nlm.nih.gov/21768583/`,
    },
    {
      slug: "teach-back",
      title: "6 · Teach-back, and how well it actually works",
      section: "Section 2 · Being understood",
      body: `The standard fix for the previous lesson is teach-back. It is worth learning, and worth quoting accurately rather than enthusiastically.

**The technique.** Instead of "does that make sense?", which reliably returns yes, you ask the client to say the plan back in their own words, and you frame the request so that a gap is your failure rather than theirs. "I want to make sure I explained that well. Can you tell me how you would describe the plan to your partner tonight?" If the version that comes back is wrong, you re-explain differently and ask again.

**Why the framing carries the technique.** "Does that make sense" tests politeness. "Tell me what you'll do" tests recall. Only teach-back tests comprehension, and only the ownership framing makes it safe enough to produce an honest answer.

**The evidence, stated as it actually reads.** A systematic review found 12 studies of teach-back in chronic-disease education. Four confirmed improved disease-specific knowledge. One found significantly better adherence to medication and diet in type 2 diabetes (P < 0.001). Two found significant improvements in self-efficacy. One examined quality of life in heart failure and found no improvement (P = 0.59). Five found reductions in readmission or hospitalization, **but these were not always statistically significant**. The review's own conclusion is that teach-back showed positive effects across a range of outcomes "although these were not always statistically significant," with limited evidence for quality of life or knowledge retention, and it calls for larger randomized trials (Dinh et al., 2016).

**So the honest verdict.** A cheap, low-risk technique with consistent knowledge and self-efficacy signals and inconsistent hard-outcome signals, on a small evidence base. That is a reason to use it, not a reason to sell it. A coach who says "teach-back cuts readmissions" has overstated a review that says the readmission findings were not always significant.

**Three companions that cost nothing.** **Plain language**: short sentences, everyday words, one idea at a time, the action first. **Chunk and check**: two or three items, then a teach-back, rather than a monologue then a quiz. **Write down the plan**, in the client's own words from their teach-back, not yours, because the sentence they generated is the one they will remember.

**What this does for the coaching relationship specifically.** It converts the most common awkward moment in coaching, the suspicion that the client did not follow what you said, into a routine step that costs thirty seconds and blames nobody.

:::reveal State the teach-back evidence honestly, including the numbers that undercut a strong claim. ||| Twelve studies. Four improved disease-specific knowledge, one improved adherence in type 2 diabetes (P < 0.001), two improved self-efficacy, one found no quality-of-life change in heart failure (P = 0.59), and five found readmission reductions that were not always statistically significant. Positive but inconsistent, on a small base.

:::reveal Why is the ownership framing part of the technique rather than politeness? ||| Because it makes an honest answer safe. If a gap belongs to the coach's explanation, the client can reveal it without being wrong; "does that make sense?" tests politeness and returns yes regardless.

## Vocabulary
- **Teach-back**: asking the client to restate the plan in their own words, framed so a gap is the coach's failure, then re-explaining and re-asking.
- **Chunk and check**: delivering two or three items and testing comprehension, rather than explaining at length and testing at the end.
- **Plain language**: short sentences, everyday words, one idea at a time, action stated first.
- **Not always statistically significant**: the review's own phrasing about the readmission findings, and the reason not to sell teach-back on hard outcomes.

## Sources
Dinh, T. T. H., Bonner, A., Clark, R., Ramsbotham, J., & Hines, S. (2016). The effectiveness of the teach-back method on adherence and self-management in health education for people with chronic disease: A systematic review. *JBI Database of Systematic Reviews and Implementation Reports, 14*(1), 210-247. https://pubmed.ncbi.nlm.nih.gov/26878928/`,
    },
    {
      slug: "numeracy-and-risk",
      title: "7 · Numeracy: the half nobody adjusts for",
      section: "Section 2 · Being understood",
      body: `Competency 3.8.5 names health literacy **and numeracy**, and the second word gets dropped in practice. It should not be, because coaching is unusually numeric.

**What a coach actually asks people to do with numbers.** Read a step count and compare it to a target. Interpret a percentage of body weight. Understand a risk reduction. Convert minutes per week into sessions. Read a food label per serving rather than per package. Judge whether a trend over four weeks means anything. Each of those is a quantitative task, and the NAAL evidence in lesson 5 measured exactly this kind of task.

**Where the misreads concentrate.** **Relative versus absolute risk**, the single largest one: "cuts your risk by 30 percent" sounds enormous and may mean a change from 1 percent to 0.7 percent. **Denominators**, where "1 in 8" and "12 percent" are the same fact and land completely differently. **Per-serving labels**, where the number of servings in the package is the whole trick. **Trends versus noise**, where four weeks of a bathroom scale is mostly water.

**The fixes, all of which are free.** Give **absolute** numbers, ideally as natural frequencies: "about 3 people in 100 instead of 4 in 100" rather than "a 25 percent reduction." Keep one denominator across a conversation. State the direction before the number, so the number lands in a frame. Prefer counts to percentages for anything the client tracks. And when a number is genuinely uncertain, say so rather than rounding to a false precision, which is the same discipline WELL-99 asks for about effect sizes.

**Adjusting the coaching approach, which is the competency's actual verb.** For a client who struggles with quantitative material, the adaptation is not to explain harder. It is to **change what the plan runs on**: behavioral markers instead of computed ones. "Did the walk happen?" is a yes or no. "Are you averaging above your baseline weekly step trend?" is a computation, a comparison, and a judgment about noise. WELL-99 already argues that behavioral metrics beat capacity metrics for day-to-day steering; for a client with low numeracy the argument is twice as strong.

**A caution about the whole section.** None of this is dumbing anything down, and treating it that way is the fastest route to condescension. It is removing an unnecessary cognitive test from between the client and the behavior. The behavior is the point. The arithmetic was never the point.

:::reveal Give the four numeracy misreads a coach should expect. ||| Relative versus absolute risk, where 30 percent may mean 1 percent to 0.7 percent. Shifting denominators, where 1 in 8 and 12 percent land differently. Per-serving labels, where servings per package is the trick. Trends versus noise, where four weeks of scale data is mostly water.

:::reveal What is the numeracy adaptation, and why is "explain it better" the wrong one? ||| Change what the plan runs on: behavioral yes-or-no markers instead of computed ones. "Did the walk happen?" replaces a computation, a comparison, and a noise judgment. Explaining harder leaves the arithmetic test in place between the client and the behavior.

## Vocabulary
- **Numeracy**: the quantitative half of health literacy, covering percentages, risk, denominators, labels, and trends.
- **Natural frequency**: a risk stated as counts out of a fixed group, such as 3 in 100 instead of a 25 percent reduction.
- **Relative risk reduction**: the proportional change, which sounds large regardless of how small the absolute change is.
- **Behavioral marker**: a yes-or-no record of whether an action happened, which requires no arithmetic to interpret.`,
      recallContent: [
        {
          prompt: "What did the teach-back review find about readmissions, and how should that be phrased to a client?",
          answer:
            "Five of twelve studies found reductions in readmission or hospitalization, but not always statistically significant. So teach-back is worth using and should not be sold on hard outcomes.",
        },
        {
          prompt: "What proportion of US adults scored at Basic or Below Basic health literacy in 2003, and what does that imply about handouts?",
          answer:
            "36 percent (22 Basic plus 14 Below Basic), with only 12 percent Proficient. Material written at the Proficient level sits above roughly seven in eight adults.",
        },
      ],
    },
    {
      slug: "quiz-being-understood",
      title: "8 · Knowledge check: being understood",
      section: "Section 2 · Being understood",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "Give the 2003 NAAL health-literacy distribution.",
            options: ["14 Below Basic, 22 Basic, 53 Intermediate, 12 Proficient", "22 Below Basic, 14 Basic, 52 Intermediate, and 12 percent Proficient", "10 Below Basic, 30 Basic, 48 Intermediate, and 12 percent Proficient", "14 Below Basic, 22 Basic, 43 Intermediate, and 21 percent Proficient"],
            correctIndex: 0,
            explanation: "So 36 percent at Basic or below, and only about one in eight reaching Proficient.",
            sourceLessonSlug: "who-can-use-your-materials",
          },
          {
            prompt: "How was the 2003 health-literacy assessment administered?",
            options: ["To more than 19,000 adults aged 16 and over", "To a stratified sample of roughly 5,000 adults recruited through primary care clinics", "By self-report questionnaire mailed to a nationally representative household panel", "To about 8,500 adults aged 18 to 65 through the NHANES examination centers"],
            correctIndex: 0,
            explanation: "In households or prisons, measuring literacy directly through tasks rather than by self-report.",
            sourceLessonSlug: "who-can-use-your-materials",
          },
          {
            prompt: "What proportion of US adults scored at Basic or Below Basic?",
            options: ["36 percent", "Roughly half, once the Intermediate band is included in the count", "About one in eight, which is the same share that reached the Proficient band", "Around 22 percent, which is the share scoring at the Basic level alone"],
            correctIndex: 0,
            explanation: "22 percent Basic plus 14 percent Below Basic. Only 12 percent reached Proficient.",
            sourceLessonSlug: "who-can-use-your-materials",
          },
          {
            prompt: "What kind of task defines the Proficient level?",
            options: ["Computing a share of an insurance premium from a table", "Reading a short passage and identifying its single most important stated fact", "Following a set of written instructions in the order in which they are presented", "Recognizing common medical terms and matching them to their plain-language meanings"],
            correctIndex: 0,
            explanation: "Which is roughly the level most health handouts are written for, and only 12 percent reached it.",
            sourceLessonSlug: "who-can-use-your-materials",
          },
          {
            prompt: "What does Below Basic mean in this assessment?",
            options: ["Locating one easy piece of information in a short text", "Being unable to read connected prose in English at any measurable level of skill", "Reading fluently but being unable to apply health information to a personal decision", "Understanding spoken instructions but not written ones in a clinical context"],
            correctIndex: 0,
            explanation: "Basic adds simple documents and simple inference. Neither reaches the level most materials assume.",
            sourceLessonSlug: "who-can-use-your-materials",
          },
          {
            prompt: "Why can a coach not treat health literacy as a clinical problem?",
            options: ["Coaching runs almost entirely on language", "Because coaches see clients more frequently than clinicians and can reinforce written material", "Because the competency framework assigns literacy assessment to the coach rather than the clinician", "Because clinical settings measure literacy formally while coaching settings never can"],
            correctIndex: 0,
            explanation: "Agreements, plans, numbers, instructions, tracking. And the materials are typically written unreviewed by someone who reads for a living.",
            sourceLessonSlug: "who-can-use-your-materials",
          },
          {
            prompt: "How many studies were in the Berkman review, and what quality?",
            options: ["96 good- or fair-quality studies", "Twelve studies of a single technique across chronic-disease populations", "47 studies covering 8,533 participants in group and individual arms", "492 studies with a combined total of 87,418 participants"],
            correctIndex: 0,
            explanation: "Reported across 111 articles, updating a 2004 review.",
            sourceLessonSlug: "who-can-use-your-materials",
          },
          {
            prompt: "What was low health literacy consistently associated with?",
            options: ["More hospitalizations and more emergency care", "Lower medication costs, because fewer prescriptions were filled and fewer refills requested", "Higher rates of preventive screening, because clients sought reassurance more often", "Shorter consultations, because clinicians simplified their explanations accordingly"],
            correctIndex: 0,
            explanation: "Plus lower receipt of mammography and influenza vaccine, poorer ability to demonstrate taking medications appropriately, and poorer health status.",
            sourceLessonSlug: "who-can-use-your-materials",
          },
          {
            prompt: "What kind of evidence is the Berkman association?",
            options: ["Observational, so confounding applies", "Randomized, so the association can be read as a causal effect of literacy on outcomes", "Mechanistic, since the pathway from literacy to hospitalization has been demonstrated", "Ecological, since it compares populations rather than measuring individual literacy"],
            correctIndex: 0,
            explanation: "It is a marker of real difficulty, not a proven causal chain, and the same caution the program applies elsewhere applies here.",
            sourceLessonSlug: "who-can-use-your-materials",
          },
          {
            prompt: "What does competency 3.8.5 require?",
            options: ["Adjusting the coaching approach", "Assessing each client's literacy level with a validated screening instrument at intake", "Providing written material at a specified reading grade level for every client", "Referring clients with low literacy to a health-literacy specialist for support"],
            correctIndex: 0,
            explanation: "Considering how health literacy and numeracy impact the client's health, then changing the approach. Same operational verb as 3.9.9.",
            sourceLessonSlug: "who-can-use-your-materials",
          },
          {
            prompt: "Why should a coach not infer literacy from how a client presents?",
            options: ["It is task-specific and situational", "Because doing so would breach the confidentiality terms of the coaching agreement", "Because the measured levels apply to populations and never to any individual person", "Because a client's presentation reflects their confidence rather than their comprehension"],
            correctIndex: 0,
            explanation: "A physician can be lost about a condition they have never had; someone with no diploma can be expert on a disease they have managed for twenty years.",
            sourceLessonSlug: "who-can-use-your-materials",
          },
          {
            prompt: "What is the correct response to the literacy evidence?",
            options: ["Make everything usable by default", "Screen each client early so effort can be concentrated where it is needed most", "Provide two versions of each material and let the client choose between them", "Deliver everything verbally, since written material is the source of the problem"],
            correctIndex: 0,
            explanation: "Rather than guessing who needs it, which is the route to condescension and to getting it wrong.",
            sourceLessonSlug: "who-can-use-your-materials",
          },
          {
            prompt: "What is health literacy, as measured here?",
            options: ["Task performance in obtaining and using health information", "A self-rated measure of confidence in understanding medical instructions and forms", "The number of years of formal education a person completed before leaving school", "The ability to read at or above a specified grade level on standardized reading tests"],
            correctIndex: 0,
            explanation: "The assessment measured directly through tasks, unlike indirect measures relying on self-report and subjective evaluation.",
            sourceLessonSlug: "who-can-use-your-materials",
          },
          {
            prompt: "What replaces 'does that make sense?' in teach-back?",
            options: ["Asking the client to say the plan back", "Asking whether the client has any questions before the session moves on to the next item", "Asking the client to rate their confidence in following the plan from one to ten", "Asking the client to read the written plan aloud so errors become audible"],
            correctIndex: 0,
            explanation: "In their own words, framed so a gap is your failure. If the version that comes back is wrong, re-explain differently and ask again.",
            sourceLessonSlug: "teach-back",
          },
          {
            prompt: "Why does the framing carry the technique?",
            options: ["It makes an honest answer safe", "Because it establishes the coach's expertise before the client is asked to respond", "Because it slows the conversation enough for the client to consolidate what was said", "Because it satisfies the documentation requirement that comprehension was checked"],
            correctIndex: 0,
            explanation: "If a gap belongs to the coach's explanation, the client can reveal it without being wrong.",
            sourceLessonSlug: "teach-back",
          },
          {
            prompt: "What do 'does that make sense' and 'tell me what you'll do' each test?",
            options: ["Politeness, and recall", "Comprehension, and commitment to the plan that was agreed in the session", "Confidence, and the client's ability to prioritize among competing actions", "Attention, and whether the client was listening rather than thinking ahead"],
            correctIndex: 0,
            explanation: "Only teach-back tests comprehension, which is why neither substitute works.",
            sourceLessonSlug: "teach-back",
          },
          {
            prompt: "How many studies were in the teach-back review?",
            options: ["Twelve", "Twenty-one, of which every one met the review's inclusion criteria", "Ninety-six good- or fair-quality studies reported across 111 articles", "Forty-seven studies covering a total of 8,533 participants"],
            correctIndex: 0,
            explanation: "Twelve of 21 articles retrieved in full met the inclusion criteria.",
            sourceLessonSlug: "teach-back",
          },
          {
            prompt: "What did the teach-back review find about readmissions?",
            options: ["Five studies found reductions, not always significant", "Five studies found consistent and statistically significant reductions in readmission", "No study examined readmission, which is the review's main acknowledged limitation", "Readmissions rose slightly, which the review attributed to better symptom recognition"],
            correctIndex: 0,
            explanation: "The review's own phrase. It is the exact sentence that stops 'teach-back cuts readmissions' from being sayable.",
            sourceLessonSlug: "teach-back",
          },
          {
            prompt: "What did the teach-back review find on quality of life?",
            options: ["No improvement in heart failure, P = 0.59", "A significant improvement in heart failure patients at six-month follow-up", "Improvement in diabetes but not in heart failure or in respiratory disease", "It was not measured in any of the twelve included studies"],
            correctIndex: 0,
            explanation: "One study examined it, and there was limited evidence overall on quality of life or knowledge retention.",
            sourceLessonSlug: "teach-back",
          },
          {
            prompt: "Which teach-back findings were positive and significant?",
            options: ["Adherence in type 2 diabetes, and self-efficacy in two studies", "Readmission reduction across five studies, and disease-specific knowledge in four", "Quality of life in heart failure, and knowledge retention at long-term follow-up", "Hospitalization rates and mortality, in the two largest included trials"],
            correctIndex: 0,
            explanation: "Adherence to medication and diet at P < 0.001, and self-efficacy at P = 0.0026 and P < 0.001. Four studies confirmed improved disease-specific knowledge.",
            sourceLessonSlug: "teach-back",
          },
          {
            prompt: "What is the honest verdict on teach-back?",
            options: ["Cheap and low-risk, on a small and inconsistent base", "Well established across large randomized trials, with reliable effects on hard outcomes", "Unsupported by evidence, and used mainly because it feels respectful to clients", "Effective for knowledge but harmful for self-efficacy in clients with low literacy"],
            correctIndex: 0,
            explanation: "Consistent knowledge and self-efficacy signals, inconsistent hard-outcome signals. A reason to use it, not a reason to sell it.",
            sourceLessonSlug: "teach-back",
          },
          {
            prompt: "What is 'chunk and check'?",
            options: ["Two or three items, then a teach-back", "Breaking the plan into weekly blocks and reviewing each block at the next session", "Checking comprehension at the start and again at the end of every session", "Splitting written material into sections with a summary box after each one"],
            correctIndex: 0,
            explanation: "Rather than a monologue followed by a quiz, which loses the early items before the check arrives.",
            sourceLessonSlug: "teach-back",
          },
          {
            prompt: "Whose words should the written plan use?",
            options: ["The client's, from their teach-back", "The coach's, since precision matters more than familiarity when a plan is recorded", "A standard template's, so plans stay consistent and comparable across clients", "Whichever version is shorter, since brevity aids recall more than phrasing does"],
            correctIndex: 0,
            explanation: "The sentence they generated is the one they will remember.",
            sourceLessonSlug: "teach-back",
          },
          {
            prompt: "What does plain language mean concretely?",
            options: ["Short sentences, everyday words, action first", "Avoiding all technical terms, and defining any that cannot be avoided in a glossary", "Writing at or below a sixth-grade reading level as measured by a readability formula", "Using bullet points rather than paragraphs and keeping any document to one page"],
            correctIndex: 0,
            explanation: "One idea at a time, with the action stated before the explanation.",
            sourceLessonSlug: "teach-back",
          },
          {
            prompt: "What awkward moment does teach-back convert into a routine step?",
            options: ["Suspecting the client did not follow what you said", "Having to correct a client who has misremembered a previous session's agreement", "Realizing mid-session that the plan you proposed is beyond the client's means", "Asking whether the client completed the actions they agreed to last time"],
            correctIndex: 0,
            explanation: "It costs thirty seconds and blames nobody, which is why it survives repeated use.",
            sourceLessonSlug: "teach-back",
          },
          {
            prompt: "Which claim overstates the teach-back evidence?",
            options: ["'Teach-back cuts readmissions'", "'Teach-back improved adherence in one type 2 diabetes study at P less than 0.001'", "'Teach-back showed positive effects that were not always statistically significant'", "'The evidence on quality of life and knowledge retention is limited'"],
            correctIndex: 0,
            explanation: "Five studies found reductions in readmission or hospitalization, but the review says these were not always statistically significant.",
            sourceLessonSlug: "teach-back",
          },
          {
            prompt: "What is numeracy, in this competency?",
            options: ["The quantitative half of health literacy", "The client's confidence in performing arithmetic without a calculator or assistance", "The ability to keep accurate records of a tracked behavior over several weeks", "A separate construct from health literacy, assessed with different instruments"],
            correctIndex: 0,
            explanation: "Covering percentages, risk, denominators, labels, and trends. Competency 3.8.5 names both words, and the second gets dropped.",
            sourceLessonSlug: "numeracy-and-risk",
          },
          {
            prompt: "Which quantitative tasks does coaching routinely require?",
            options: ["Comparing a step count to a target, and reading a label", "Calculating energy balance and estimating basal metabolic rate from a formula", "Interpreting laboratory values against reference ranges provided by a clinician", "Converting between metric and imperial units for weight and distance measures"],
            correctIndex: 0,
            explanation: "Plus interpreting a percentage of body weight, understanding a risk reduction, converting minutes into sessions, and judging a four-week trend.",
            sourceLessonSlug: "numeracy-and-risk",
          },
          {
            prompt: "What is the single largest numeracy misread?",
            options: ["Relative versus absolute risk", "Confusing the median with the mean when a distribution is skewed by outliers", "Reading a confidence interval as a range of plausible individual outcomes", "Treating a correlation coefficient as a percentage of variation explained"],
            correctIndex: 0,
            explanation: "'Cuts your risk by 30 percent' sounds enormous and may mean a change from 1 percent to 0.7 percent.",
            sourceLessonSlug: "numeracy-and-risk",
          },
          {
            prompt: "What is a natural frequency?",
            options: ["A risk given as counts out of a fixed group", "The number of times per week a behavior occurs without deliberate scheduling", "A rate expressed per unit of time rather than per unit of exposure or dose", "The background rate of an outcome in a population before any intervention"],
            correctIndex: 0,
            explanation: "'About 3 people in 100 instead of 4 in 100' rather than 'a 25 percent reduction'.",
            sourceLessonSlug: "numeracy-and-risk",
          },
          {
            prompt: "What is the denominator problem?",
            options: ["'1 in 8' and '12 percent' land differently", "Percentages become unreliable when the underlying group is smaller than a hundred", "Clients cannot convert between rates expressed per day, per week, and per month", "The denominator is usually omitted from health material, leaving the rate meaningless"],
            correctIndex: 0,
            explanation: "They are the same fact. The fix is to keep one denominator across a conversation.",
            sourceLessonSlug: "numeracy-and-risk",
          },
          {
            prompt: "What is the trick in a per-serving label?",
            options: ["The number of servings in the package", "The rounding rules that allow small amounts to be reported as zero on the panel", "The difference between the listed serving size and a realistic portion for an adult", "The order of ingredients, which reflects weight rather than nutritional importance"],
            correctIndex: 0,
            explanation: "It is a multiplication most people never perform, which turns the whole panel into a misread.",
            sourceLessonSlug: "numeracy-and-risk",
          },
          {
            prompt: "What is wrong with four weeks of bathroom-scale data?",
            options: ["It is mostly water", "It is too short to detect a change of the size a behavior program produces", "Home scales are not calibrated, so the absolute values are unreliable", "Daily weighing produces measurement-induced anxiety in most clients who try it"],
            correctIndex: 0,
            explanation: "Which makes trend-versus-noise the fourth misread, and a reason to prefer behavioral markers.",
            sourceLessonSlug: "numeracy-and-risk",
          },
          {
            prompt: "Name the free fixes for numeracy problems.",
            options: ["Absolute numbers, one denominator, direction before number", "Larger print, simpler fonts, and color coding for good and bad ranges", "Weekly rather than daily measurement, and a graph instead of a table of values", "A calculator, a worked example, and a written formula the client can reuse"],
            correctIndex: 0,
            explanation: "Plus counts rather than percentages for anything tracked, and saying when a number is genuinely uncertain rather than rounding to false precision.",
            sourceLessonSlug: "numeracy-and-risk",
          },
          {
            prompt: "What is the actual numeracy adaptation?",
            options: ["Change what the plan runs on", "Explain the arithmetic more slowly and check understanding with a worked example", "Provide the calculations pre-computed so the client only has to read the result", "Reduce the number of metrics tracked from several down to a single primary one"],
            correctIndex: 0,
            explanation: "Behavioral markers instead of computed ones. 'Did the walk happen?' is a yes or no; a step-trend comparison is a computation and a noise judgment.",
            sourceLessonSlug: "numeracy-and-risk",
          },
          {
            prompt: "Why is 'explain it better' the wrong adaptation?",
            options: ["It leaves the arithmetic test in place", "Because repeated explanation signals to the client that the coach doubts their ability", "Because explanation consumes session time that would be better spent on the behavior", "Because comprehension of numbers cannot be improved within a coaching relationship"],
            correctIndex: 0,
            explanation: "The behavior is the point. The arithmetic was never the point, and it sits between the client and the behavior.",
            sourceLessonSlug: "numeracy-and-risk",
          },
          {
            prompt: "Which WELL-99 argument does the numeracy lesson strengthen?",
            options: ["Behavioral metrics beat capacity metrics for steering", "The minimum version should be defined before the worst plausible day arrives", "Stop conditions should be decided in advance rather than improvised in a crisis", "The monthly review does more across decades than any measurement device"],
            correctIndex: 0,
            explanation: "For a client with low numeracy the argument is twice as strong, because the computed metric adds a test the behavioral one does not.",
            sourceLessonSlug: "numeracy-and-risk",
          },
          {
            prompt: "What is the caution attached to this whole section?",
            options: ["None of it is dumbing anything down", "It applies only to clients who have disclosed difficulty with written material", "It should not be used with clients who hold professional or clinical qualifications", "It risks slowing the session enough that the agreed plan does not get made"],
            correctIndex: 0,
            explanation: "Treating it that way is the fastest route to condescension. It removes an unnecessary cognitive test from between the client and the behavior.",
            sourceLessonSlug: "numeracy-and-risk",
          },
          {
            prompt: "A client tracks 'did the walk happen'. What has that removed?",
            options: ["A computation, a comparison, and a noise judgment", "The need to own or wear any measurement device during the walk itself", "The temptation to compare their progress against other clients' results", "The requirement to record anything at all between coaching sessions"],
            correctIndex: 0,
            explanation: "Which is what a weekly step-trend comparison against baseline actually asks a person to do.",
            sourceLessonSlug: "numeracy-and-risk",
          },
          {
            prompt: "Why state the direction before the number?",
            options: ["So the number lands in a frame", "So the client can stop listening once they have heard whether the news is good", "Because numbers presented first are more likely to be misheard or transposed", "Because the direction is the only part most clients will remember afterwards"],
            correctIndex: 0,
            explanation: "A number with no frame gets assigned one by the listener, usually the wrong one.",
            sourceLessonSlug: "numeracy-and-risk",
          },
          {
            prompt: "Which is the better phrasing of a risk?",
            options: ["'3 in 100 instead of 4 in 100'", "'A 25 percent relative reduction in the risk of the primary outcome'", "'Your risk drops by a quarter compared with people who do not do this'", "'A statistically significant reduction with a P value below the conventional threshold'"],
            correctIndex: 0,
            explanation: "Natural frequencies with one denominator. The other three are the relative-risk misread in three different costumes.",
            sourceLessonSlug: "numeracy-and-risk",
          },
          {
            prompt: "What does 'usable by default' commit a coach to?",
            options: ["Designing every material for the lower bands", "Offering to read any document aloud to clients who prefer that format", "Testing every material with a readability formula before it is used", "Providing a plain-language summary alongside the full technical version"],
            correctIndex: 0,
            explanation: "Rather than screening to find out who needs it, which is guessing dressed as assessment.",
            sourceLessonSlug: "who-can-use-your-materials",
          },
          {
            prompt: "Why does the lesson call literacy 'situational'?",
            options: ["A person can be expert in one condition and lost in another", "Because performance varies with how much sleep and stress the person had that day", "Because reading ability declines with age independently of education level", "Because assessment scores depend heavily on the setting the test is given in"],
            correctIndex: 0,
            explanation: "It is task-specific, which is exactly what makes it impossible to infer from someone's education or occupation.",
            sourceLessonSlug: "who-can-use-your-materials",
          },
          {
            prompt: "What is the relationship between Sections 1 and 2 of this course?",
            options: ["Possible, then understood: same symptom, different failures", "Section 1 covers the client's context and Section 2 covers the coach's assumptions", "Section 1 is about barriers and Section 2 is about the tools for removing them", "Section 1 applies at intake and Section 2 applies throughout the engagement"],
            correctIndex: 0,
            explanation: "A missed action can mean the plan was impossible or that it was never understood, and the two need different responses.",
            sourceLessonSlug: "who-can-use-your-materials",
          },
          {
            prompt: "A client agrees readily and then does something different. What might Section 2 suggest?",
            options: ["The plan was never understood as you meant it", "The client agreed in the session to avoid an uncomfortable disagreement", "The plan was understood but became impossible during the week", "The client's motivation was extrinsic and faded once the session ended"],
            correctIndex: 0,
            explanation: "Which is why teach-back exists: 'does that make sense?' returns yes regardless, and only a restatement reveals the gap.",
            sourceLessonSlug: "teach-back",
          },
          {
            prompt: "What does the Berkman review's number of hospitalizations finding license?",
            options: ["Treating low literacy as a marker worth adapting for", "Telling a client that improving their literacy will reduce their hospital admissions", "Screening clients for literacy to predict who will need more intensive support", "Concluding that literacy interventions reduce healthcare costs at the system level"],
            correctIndex: 0,
            explanation: "Consistently associated, in observational data. It is a marker of real difficulty, not a demonstrated causal chain.",
            sourceLessonSlug: "who-can-use-your-materials",
          },
          {
            prompt: "Which of these is a numeracy task rather than a literacy task?",
            options: ["Judging whether a four-week trend means anything", "Reading the instructions printed on the side of a medication package", "Understanding a written explanation of how a behavior affects a condition", "Following a sequence of steps described in a plan agreed with the coach"],
            correctIndex: 0,
            explanation: "Along with comparing a step count to a target, interpreting a percentage, and reading a label per serving.",
            sourceLessonSlug: "numeracy-and-risk",
          },
          {
            prompt: "What did the assessment do that self-report measures do not?",
            options: ["Measure performance directly through tasks", "Cover adults living in institutions as well as those in private households", "Distinguish between reading ability and the ability to act on health information", "Produce scores comparable to earlier assessments of the same population"],
            correctIndex: 0,
            explanation: "Unlike indirect measures relying on self-reports and other subjective evaluations, which is why the distribution is credible.",
            sourceLessonSlug: "who-can-use-your-materials",
          },
          {
            prompt: "Which teach-back companion protects against the recency problem?",
            options: ["Chunk and check", "Writing the plan down in the client's own words at the end", "Using plain language with the action stated before the explanation", "Framing any gap as the coach's failure rather than the client's"],
            correctIndex: 0,
            explanation: "A monologue followed by a single check loses everything said early, which is exactly what chunking prevents.",
            sourceLessonSlug: "teach-back",
          },
          {
            prompt: "How should a coach describe an uncertain number?",
            options: ["Say it is uncertain", "Round it to a single figure so the client has something concrete to hold on to", "Give the confidence interval, so the client can judge the precision themselves", "Omit it, since an uncertain number is worse than no number in a coaching context"],
            correctIndex: 0,
            explanation: "Rather than rounding to a false precision, which is the same discipline WELL-99 asks for about effect sizes.",
            sourceLessonSlug: "numeracy-and-risk",
          },
          {
            prompt: "What is the fastest way to make the literacy adaptation condescending?",
            options: ["Treat it as dumbing things down", "Apply it only to clients whose background suggests they will need it", "Provide simplified material without explaining why it looks different", "Check comprehension repeatedly within a single conversation"],
            correctIndex: 0,
            explanation: "The lesson names it directly. What is being removed is a cognitive test, not the content.",
            sourceLessonSlug: "numeracy-and-risk",
          },
          {
            prompt: "Who writes most of the material a coach hands out, and at what level?",
            options: ["The coach, unreviewed, at their own natural level", "A professional body, at a level validated for general adult audiences", "A clinician, at the level used for patient education in medical settings", "A template provider, at a level chosen to satisfy accessibility requirements"],
            correctIndex: 0,
            explanation: "Which is whatever comes naturally to someone who reads for a living, and that is the problem the NAAL numbers describe.",
            sourceLessonSlug: "who-can-use-your-materials",
          },
          {
            prompt: "What is the ownership framing in a teach-back request?",
            options: ["'I want to make sure I explained that well'", "'Let us check that we both have the same understanding of what was agreed'", "'It would help me to hear the plan back so I can note it down accurately'", "'Some of this is complicated, so tell me if any part was unclear to you'"],
            correctIndex: 0,
            explanation: "It places any gap in the coach's explanation, which is what makes an honest answer safe enough to give.",
            sourceLessonSlug: "teach-back",
          },
          {
            prompt: "How many articles reported the 96 studies in the Berkman review?",
            options: ["111", "96, one article for each of the included studies in the review", "Twenty-two, of which nine also covered numeracy alongside health literacy", "Fifty-three publications describing forty-seven separate included studies"],
            correctIndex: 0,
            explanation: "98 articles on health literacy, 22 on numeracy, and 9 on both.",
            sourceLessonSlug: "who-can-use-your-materials",
          },
          {
            prompt: "Why does the numeracy lesson say coaching is 'unusually numeric'?",
            options: ["Almost every tracked thing is a number", "Because coaches are trained to use quantitative outcome measures in every session", "Because clients arrive expecting numerical targets and judge progress against them", "Because the evidence base a coach draws on is expressed entirely in effect sizes"],
            correctIndex: 0,
            explanation: "Steps, percentages, risk reductions, minutes converted to sessions, labels per serving, and trends over weeks.",
            sourceLessonSlug: "numeracy-and-risk",
          },
        ],
      },
    },
    // ── Section 3 ────────────────────────────────────────────────────────────────────────────
    {
      slug: "cultural-humility",
      title: "9 · Cultural humility, and why it replaced competence",
      section: "Section 3 · The coach in the room",
      body: `The first two sections were about the client's conditions. This one is about yours, and it starts with a distinction that has a specific origin and a specific argument behind it.

**Where the term comes from.** Tervalon and Murray-García introduced cultural humility in 1998, in the context of defining physician training outcomes in multicultural education. Their argument was against **cultural competence** as it was then being taught: as a body of knowledge about groups that a practitioner could acquire and thereafter possess (Tervalon & Murray-García, 1998).

**Why they objected.** Competence framed as knowledge produces a checklist of group traits, which is a stereotype with a professional vocabulary. It also implies an endpoint, a state of being finished, which is exactly the posture that stops a practitioner asking. And it locates the expertise in the practitioner, when the person who knows what a client's culture means to that client is the client.

**What they proposed instead.** A lifelong commitment to self-evaluation and self-critique, redressing power imbalances in the practitioner-patient dynamic, and developing mutually beneficial, non-paternalistic partnerships with communities. Note that two of those three are about **power**, not about culture; the next lesson is entirely about that half.

**What it looks like in a coaching hour.** You ask rather than assume: what a food means in this household, who decides the schedule, what "rest" is permitted, whether an exercise setting is comfortable, what a diagnosis means in this family's history. You treat the client as the authority on their own context. You notice when you are surprised, because surprise marks a place your default assumption was doing work you did not notice.

**The trap on the other side.** Humility is not an excuse to ask a client to educate you about their entire group, which offloads work onto the person paying you and turns them into a representative. The questions stay about **this client's** life and **this plan**, not about their culture as a topic.

**Why the program teaches this rather than a competence module.** It matches how the rest of the curriculum works. WELL-01 already argues that the client is the expert on their own life and the coach is the expert on process. Cultural humility is that same claim, applied to the parts of the client's life a coach is most likely to think they already understand.

:::reveal What were Tervalon and Murray-García arguing AGAINST, and what were the three elements they proposed? ||| Against cultural competence framed as an acquirable body of knowledge about groups, which produces a stereotype with a professional vocabulary and implies an endpoint. They proposed lifelong self-evaluation and self-critique, redressing power imbalances in the practitioner-patient dynamic, and non-paternalistic partnerships with communities.

:::reveal What is the trap on the humility side, and where does the line sit? ||| Asking a client to educate you about their whole group, which offloads work onto the person paying you and makes them a representative. The questions stay about this client's life and this plan.

## Vocabulary
- **Cultural humility**: lifelong self-critique, redress of power imbalances, and non-paternalistic partnership, proposed in 1998 as an alternative to competence-as-knowledge.
- **Cultural competence**: the earlier frame, treating cultural knowledge as an acquirable and completable body of facts about groups.
- **Paternalism**: acting on a judgment of what is good for someone without their participation, which the third element explicitly rejects.
- **Surprise as a signal**: noticing where a default assumption was silently doing work.

## Sources
Tervalon, M., & Murray-García, J. (1998). Cultural humility versus cultural competence: A critical distinction in defining physician training outcomes in multicultural education. *Journal of Health Care for the Poor and Underserved, 9*(2), 117-125. https://pubmed.ncbi.nlm.nih.gov/10073197/`,
    },
    {
      slug: "power-in-the-room",
      title: "10 · Power in the room, and how to lower it",
      section: "Section 3 · The coach in the room",
      body: `Two competencies in the handbook are about power, and they use unusually direct verbs: "recognize power and privilege imbalances" (1.2.2.2) and "notice and attempt to **neutralize** any power dynamics" (1.3.2.6).

**Where the power actually comes from, in a coaching relationship.** Not mainly from identity, though identity can amplify it. From structure. You set the agenda and the frame. You decide what counts as progress. You hold expertise the client came for. In most arrangements you are paid, which means the client is buying approval as well as help. You ask the questions and they answer, which is the most reliable power asymmetry in any conversation.

**Add the identity layer.** Where a coach and client differ in race, gender, class, age, body size, language, immigration status, or disability, and especially where the coach sits on the side that carries more social advantage, the structural asymmetry gets bigger and the client's cost of disagreeing goes up.

**Why "neutralize" is doable rather than aspirational.** You cannot delete the asymmetry, and pretending to is its own move. What you can do is reduce the specific costs of disagreement:

- **Ask permission before advising.** "Would it be useful if I offered a thought here?" restores a real no.
- **Offer options, plural, and mean it.** One recommendation from an expert is an instruction. Three genuine options is a choice.
- **Name the asymmetry once, plainly, early.** "You know your life better than I do. If something I suggest does not fit, telling me is the most useful thing you can do." Once, honestly, not as ritual.
- **Make disagreement cheap by responding well the first time it happens.** The first time a client pushes back is the whole test, and everything after it is decided by what you did in that moment.
- **Watch the compliance tell.** Fast agreement, no questions, no modifications. Very few real plans survive first contact with an actual week unchanged. Frictionless agreement usually means the client is managing you.

**What this section does NOT claim.** That naming power in the room repairs anything structural. It does not. The claim is small and local: a client who can disagree with you gives you accurate information, and a client who cannot gives you agreeable information, which is worthless for coaching.

**Connection to the earlier courses.** This is MI's spirit made operational. WELL-01 taught partnership and autonomy support as a stance; this lesson is the stance broken into the moves that produce it when the two people in the room are not socially equal.

:::reveal Where does most of a coach's power come from, and what does identity do to it? ||| Structure: setting the agenda, defining progress, holding the expertise, being paid, and asking the questions while the client answers. Identity difference amplifies that asymmetry and raises the client's cost of disagreeing.

:::reveal What is the compliance tell, and why is agreeable information worthless? ||| Fast agreement with no questions and no modifications, when almost no real plan survives an actual week unchanged. It usually means the client is managing you, and a plan you cannot get honest data about cannot be coached.

## Vocabulary
- **Power asymmetry**: the structural imbalance built into the coaching arrangement, independent of anyone's intent.
- **Neutralize**: the handbook's own verb (1.3.2.6), meaning lower the cost of disagreement rather than delete the imbalance.
- **Ask permission before advising**: the move that restores a real no before information is offered.
- **Compliance tell**: frictionless agreement, no questions, no modifications, usually indicating management rather than commitment.`,
    },
    {
      slug: "implicit-bias-honestly",
      title: "11 · Implicit bias, taught from the null results",
      section: "Section 3 · The coach in the room",
      body: `**Scope note, stated first because it matters.** "Implicit bias" appears **zero times** in the 2026 NBHWC competency handbook. This lesson is not exam coverage and is not a credential requirement. It is here because BAM asked for it, and because a coach will meet the topic in every workplace training they ever attend. What follows is what the primary literature says, which is not what most of those trainings say.

**The claim in its strong form.** People hold associations outside conscious awareness that produce negative evaluations based on irrelevant characteristics; these can be measured, they predict discriminatory behavior, and training can reduce them and therefore reduce the behavior. Take those four claims separately, because they have very different evidence.

**Claim 1: healthcare professionals show it.** Supported. A systematic review of 42 eligible articles found that 35 showed evidence of implicit bias in healthcare professionals, that they exhibit about the same levels as the wider population, and that every study examining correlations found a significant positive relationship between level of implicit bias and lower quality of care (FitzGerald & Hurst, 2017). The review's own framing is that correlational evidence indicates biases are **likely** to influence decisions in some circumstances and need further investigation.

**Claim 2: the standard measure predicts behavior.** Weak. A meta-analysis of Implicit Association Test criterion studies across two domains of intergroup bias and six criterion categories found IATs were **poor predictors of every criterion category other than brain activity**, and performed no better than simple explicit measures (Oswald et al., 2013). A test that predicts no better than just asking people is not a diagnostic instrument.

**Claim 3: training changes the measure.** Partly, weakly, briefly. A network meta-analysis of 492 studies and 87,418 participants found implicit measures **can** be changed but that effects are usually small (|d| < .30), that most studies used brief single-session manipulations, that procedures changed explicit measures less and produced **generally trivial changes in behavior**, and, decisively, that **changes in implicit measures did not mediate changes in explicit measures or behavior** (Forscher et al., 2019). A separate pair of studies testing 9 interventions on 6,321 participants found all 9 reduced implicit racial preferences immediately and **none were effective after a delay of several hours to several days** (Lai et al., 2016).

**So the honest summary.** Bias in professional judgment is real and it correlates with worse care. The most famous measure of it is a poor predictor of individual behavior. Interventions move the measure a little and briefly, and moving the measure does not move the behavior. Anyone selling a two-hour workshop as a fix is selling something the evidence does not support.

**What follows for a coach, which is the useful part.** Stop trying to introspect your way out and change the **structure** instead. Ask every client the same context questions rather than the ones you think apply. Use a written intake so the same ground is covered regardless of who is in front of you. Offer the same options at the same point in the arc. Record who you refer and for what, and look at the pattern quarterly, because a pattern in your own referral log is real evidence about your behavior in a way that a test score is not. Notice differential effort: whose plan you shrank, whose ambition you talked down, whose report you took at face value.

**Why structure rather than awareness.** Because the outcome-level literature says the awareness route does not carry. Structure does not require you to have solved anything about yourself; it makes the same thing happen anyway, which is the same reason WELL-01 prefers implementation intentions over motivation.

:::reveal Separate the four claims about implicit bias and give the verdict on each. ||| Professionals show it: supported (35 of 42 articles; all correlational studies found bias associated with lower quality of care). The IAT predicts behavior: weak (poor predictor of every criterion category except brain activity, no better than explicit measures). Training changes the measure: small and short-lived (|d| < .30; none of 9 interventions survived a delay of hours to days). Changing the measure changes behavior: not supported (trivial behavioral changes, and implicit change did not mediate them).

:::reveal What does this lesson tell a coach to do INSTEAD of bias introspection, and why? ||| Change the structure: same context questions for everyone, a written intake, the same options at the same point, and a quarterly look at your own referral log and where you shrank a plan. Because the outcome literature says the awareness route does not carry, while structure produces the behavior without requiring self-repair.

## Vocabulary
- **Implicit measure**: a response-bias score on a task like the IAT, which Oswald's meta-analysis found predicts criterion behavior poorly.
- **Mediation**: whether the change in one variable explains the change in another; Forscher found implicit change did NOT mediate behavior change.
- **Network meta-analysis**: the method behind the 492-study synthesis, which compares many procedures against each other rather than one at a time.
- **Structural response**: fixing the process so the same thing happens for every client, rather than relying on the coach's self-awareness.

## Sources
FitzGerald, C., & Hurst, S. (2017). Implicit bias in healthcare professionals: A systematic review. *BMC Medical Ethics, 18*(1), 19. https://pubmed.ncbi.nlm.nih.gov/28249596/

Oswald, F. L., Mitchell, G., Blanton, H., Jaccard, J., & Tetlock, P. E. (2013). Predicting ethnic and racial discrimination: A meta-analysis of IAT criterion studies. *Journal of Personality and Social Psychology, 105*(2), 171-192. https://pubmed.ncbi.nlm.nih.gov/23773046/

Forscher, P. S., Lai, C. K., Axt, J. R., Ebersole, C. R., Herman, M., Devine, P. G., & Nosek, B. A. (2019). A meta-analysis of procedures to change implicit measures. *Journal of Personality and Social Psychology, 117*(3), 522-559. https://pubmed.ncbi.nlm.nih.gov/31192631/

Lai, C. K., Skinner, A. L., Cooley, E., Murrar, S., Brauer, M., Devos, T., Calanchini, J., Xiao, Y. J., Pedram, C., Marshburn, C. K., Simon, S., Blanchar, J. C., Joy-Gaba, J. A., Conway, J., Redford, L., Klein, R. A., Roussos, G., Schellhaas, F. M. H., Burns, M., … Nosek, B. A. (2016). Reducing implicit racial preferences: II. Intervention effectiveness across time. *Journal of Experimental Psychology: General, 145*(8), 1001-1016. https://pubmed.ncbi.nlm.nih.gov/27454041/`,
      recallContent: [
        {
          prompt: "The handbook uses one specific verb about power dynamics. What is it, and what does it mean in practice?",
          answer:
            "Neutralize (1.3.2.6). It means lowering the cost of disagreement: ask permission before advising, offer real options, name the asymmetry once, and respond well the first time a client pushes back.",
        },
        {
          prompt: "What did Tervalon and Murray-García object to in cultural competence?",
          answer:
            "Framing cultural knowledge as an acquirable body of facts about groups, which produces a stereotype with professional vocabulary, implies an endpoint, and locates expertise in the practitioner instead of the client.",
        },
      ],
    },
    {
      slug: "discord-and-repair",
      title: "12 · Discord, microaggressions, and the repair",
      section: "Section 3 · The coach in the room",
      body: `Competency 1.3.2.7 asks the coach to repair discord in the relationship, **including discord arising from microaggressions**. That word carries an active scientific dispute, and this course teaches the dispute rather than picking a side for you.

**The claim.** Microaggressions are brief, commonplace verbal or behavioral slights, often unintentional, that communicate hostility or negativity toward a person's group membership, and they accumulate into a meaningful health burden.

**The critique.** Lilienfeld's review argued that the microaggression research program suffered from an unclear definition, an assumption that the recipient's interpretation establishes the intent, thin evidence that the specific incidents cause the specific harms rather than being correlated with general distress, and inadequate psychometrics for the instruments used (Lilienfeld, 2017).

**The reply.** Williams responded directly, arguing that the construct is better specified than the critique allows, that a substantial evidence base connects these experiences to mental-health outcomes, and that dismissing the phenomenon carries its own costs for the people reporting it (Williams, 2020).

**Why this course does not resolve it.** Because it is genuinely unresolved in the literature, and because **for a coach the argument is largely beside the point**. The competency does not ask you to adjudicate a construct. It asks you to repair discord. If a client goes quiet, contracts, becomes formal, or disengages after something you said, you have a coaching problem in front of you regardless of what the right label for the moment is.

**The repair, which is the actual skill.** Four moves, in order.

1. **Notice the shift.** Tone, posture, length of answers, a change in what they will bring up. This is the same noticing WELL-01 teaches for sustain talk.
2. **Name it without demanding a verdict.** "Something shifted just now, and I think it may have been what I said." That takes the burden of accusing you off the client, which is the whole reason clients say nothing.
3. **Do not defend the intent.** "I didn't mean it that way" converts the client's experience into a debate about your interior, which they cannot win and did not raise. Intent is not the topic. Effect is.
4. **Change something.** Apologize briefly, correct the specific thing, and continue. An apology that becomes a long performance makes the client responsible for your discomfort, which is the second injury.

**The pattern worth watching.** One awkward moment is a moment. The same category of moment recurring with clients who share a characteristic is data about you, and it belongs in the same quarterly review as the referral log from the previous lesson.

**And the ordinary version.** Most discord is not about identity at all: a misjudged joke, a plan pushed too hard, an interruption, a number that landed as judgment. The repair sequence is identical, which is why it is worth practicing on the ordinary cases where the stakes are low.

:::reveal Give both sides of the microaggression dispute, with the two names. ||| Lilienfeld (2017) argued the research program has an unclear definition, treats the recipient's interpretation as establishing intent, has thin evidence for specific causation, and uses inadequate psychometrics. Williams (2020) replied that the construct is better specified than that, a substantial base links these experiences to mental-health outcomes, and dismissal carries its own costs.

:::reveal Why does the repair sequence forbid defending your intent? ||| Because it converts the client's experience into a debate about your interior, which they cannot win and did not raise. Intent is not the topic; effect is. And an extended apology makes the client responsible for your discomfort, which is a second injury.

## Vocabulary
- **Discord**: a rupture in the working relationship, visible as withdrawal, formality, shortened answers, or disengagement.
- **Microaggression**: a brief, commonplace, often unintentional slight communicating negativity about group membership; a contested construct with a live literature on both sides.
- **Repair**: notice the shift, name it without demanding a verdict, do not defend intent, change something.
- **The second injury**: making the client manage the coach's discomfort about the first one.

## Sources
Lilienfeld, S. O. (2017). Microaggressions: Strong claims, inadequate evidence. *Perspectives on Psychological Science, 12*(1), 138-169. https://doi.org/10.1177/1745691616659391

Williams, M. T. (2020). Microaggressions: Clarification, evidence, and impact. *Perspectives on Psychological Science, 15*(1), 3-26. https://pubmed.ncbi.nlm.nih.gov/31418642/`,
    },
    {
      slug: "history-and-trauma",
      title: "13 · History, marginalization, and the trauma boundary",
      section: "Section 3 · The coach in the room",
      body: `Competency 1.2.2.1 asks the coach to understand the impact of diversity-related history, marginalization, and trauma. This is the lesson with the sharpest scope line in the course, so the line comes first.

**The boundary, stated before the content.** You are not a trauma therapist. You do not take a trauma history, do not ask a client to recount an experience, and do not process anything. Trauma-focused treatment is a licensed clinical activity, exactly as CBT-I is in WELL-05 and as the therapy boundary is in WELL-06. What you are responsible for is **not making things worse**, and recognizing when to refer.

**Why history is a coaching variable at all.** Because it shows up as behavior you will otherwise misread. A client who will not engage with a medical referral may be acting on a family or community history with medical institutions rather than on avoidance. A client who cannot commit to a fixed schedule may be managing an unpredictable environment rather than resisting structure. A client who agrees with everything may have learned that disagreement is expensive, which the previous lessons already flagged as the most common form of bad data in coaching.

**The framework worth knowing, at the level a coach needs.** SAMHSA's trauma-informed approach rests on six principles: **safety; trustworthiness and transparency; peer support; collaboration and mutuality; empowerment, voice and choice; and cultural, historical, and gender issues** (SAMHSA, 2014). Read them as design constraints on a coaching practice, not as therapeutic technique.

**What each one changes about an ordinary session.** *Safety*: predictable structure, a clear ending time, no surprises about who else sees anything. *Trustworthiness and transparency*: say what happens with notes and data before it happens, not when asked. *Peer support*: connection to others in similar situations is a legitimate part of a plan, which is also the strongest single lever in WELL-99. *Collaboration and mutuality*: the plan is co-authored, and the power lesson is how. *Empowerment, voice, and choice*: real options, and a real no. *Cultural, historical, and gender issues*: the humility lesson, applied.

**Notice what those six do NOT require.** None of them requires you to know what happened to anyone. Every one of them is a property of how you run the relationship. That is precisely why a coach can practice in a trauma-informed way without ever practicing outside scope.

**The referral triggers, unchanged from WELL-06.** Disclosure of current abuse or danger. Symptoms that look like PTSD, dissociation, or panic. A client who wants to work on a traumatic experience itself. Any indication of risk to self. The referral is warm, specific, and immediate, and the crisis protocol from WELL-06 governs the last of those without exception.

**One thing to avoid actively.** Do not invite disclosure you cannot hold. Open questions about the past, asked by someone with no clinical training and no capacity to respond, can open something in a session that ends in fifty minutes and does not resume for a week. The trauma-informed move is a stable, predictable, low-pressure relationship, not a deeper conversation.

:::reveal Name SAMHSA's six principles and say what kind of thing they are. ||| Safety; trustworthiness and transparency; peer support; collaboration and mutuality; empowerment, voice and choice; and cultural, historical, and gender issues. They are design constraints on how the relationship is run, not therapeutic techniques, which is why none of them requires knowing what happened to anyone.

:::reveal Why is inviting disclosure the specific thing to avoid? ||| Because an open question about the past, from someone with no clinical training and no capacity to respond, can open something in a session that ends in fifty minutes and does not resume for a week. The trauma-informed move is a stable, predictable, low-pressure relationship instead.

## Vocabulary
- **Trauma-informed**: running the relationship according to the six principles, without taking a history or processing anything.
- **Design constraint**: a property of how a practice is structured, as opposed to a technique applied to a client.
- **Warm referral**: naming a specific person or service and making the connection, rather than handing over a list.
- **Inviting disclosure**: asking questions that open material the coach has no scope or capacity to hold, which is the active error here.

## Sources
Substance Abuse and Mental Health Services Administration. (2014). *SAMHSA's concept of trauma and guidance for a trauma-informed approach* (HHS Publication No. SMA 14-4884). https://library.samhsa.gov/product/samhsas-concept-trauma-and-guidance-trauma-informed-approach/sma14-4884`,
    },
    {
      slug: "quiz-the-coach-in-the-room",
      title: "14 · Knowledge check: the coach in the room",
      section: "Section 3 · The coach in the room",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "Who introduced cultural humility, when, and in what context?",
            options: ["Tervalon and Murray-García, 1998, physician training outcomes", "Cooperrider and Srivastva in 1987, in the context of organizational development work", "The National Board for Health and Wellness Coaching, in its first competency handbook", "Miller and Rollnick, in the canonical edition of the motivational interviewing text"],
            correctIndex: 0,
            explanation: "Specifically about defining physician training outcomes in multicultural education.",
            sourceLessonSlug: "cultural-humility",
          },
          {
            prompt: "What were they arguing against?",
            options: ["Competence framed as acquirable knowledge about groups", "The exclusion of cultural content from medical curricula in the preceding decade", "The use of interpreters in place of practitioners who spoke a patient's own language", "The idea that cultural background is relevant to clinical decision-making at all"],
            correctIndex: 0,
            explanation: "Which produces a checklist of group traits: a stereotype with a professional vocabulary.",
            sourceLessonSlug: "cultural-humility",
          },
          {
            prompt: "Name the three elements of cultural humility.",
            options: ["Self-critique, redressing power imbalances, non-paternalistic partnership", "Knowledge of the group, awareness of one's own culture, and skill in cross-cultural communication", "Assessment, adaptation, and evaluation of the practitioner's cultural responsiveness", "Language access, community consultation, and representation in the workforce"],
            correctIndex: 0,
            explanation: "A lifelong commitment to self-evaluation and self-critique, redressing power imbalances in the practitioner-patient dynamic, and mutually beneficial partnerships with communities.",
            sourceLessonSlug: "cultural-humility",
          },
          {
            prompt: "What is notable about two of those three elements?",
            options: ["They are about power, not culture", "They apply to institutions rather than to individual practitioners in their own work", "They can be assessed objectively, unlike the third, which relies on self-report", "They were added later, in responses to critiques of the original 1998 formulation"],
            correctIndex: 0,
            explanation: "Redressing power imbalances and non-paternalistic partnership, which is why the following lesson is entirely about power.",
            sourceLessonSlug: "cultural-humility",
          },
          {
            prompt: "Why does 'competence' imply the wrong posture?",
            options: ["It implies an endpoint, so the practitioner stops asking", "It requires certification, which most practitioners never actually complete in practice", "It focuses on the practitioner's comfort rather than on the patient's experience", "It applies only to differences of language, and ignores every other kind of difference"],
            correctIndex: 0,
            explanation: "A state of being finished is exactly the posture that stops a practitioner asking, and it locates the expertise in the wrong person.",
            sourceLessonSlug: "cultural-humility",
          },
          {
            prompt: "Who is the authority on what a client's culture means to that client?",
            options: ["The client", "The practitioner, once they have completed appropriate cultural training", "Community representatives who can speak for the group's shared norms and values", "Neither party fully, which is why the question should be avoided in coaching"],
            correctIndex: 0,
            explanation: "Which is the same claim WELL-01 makes about the client being expert on their own life and the coach expert on process.",
            sourceLessonSlug: "cultural-humility",
          },
          {
            prompt: "What does humility look like in a coaching hour?",
            options: ["Asking rather than assuming", "Disclosing your own background so the client knows who they are working with", "Naming the differences between you and the client at the start of the relationship", "Adjusting your recommendations to what is typical for the client's community"],
            correctIndex: 0,
            explanation: "What a food means in this household, who decides the schedule, what rest is permitted, what a diagnosis means in this family's history.",
            sourceLessonSlug: "cultural-humility",
          },
          {
            prompt: "Why does the lesson say surprise is a signal?",
            options: ["It marks where a default assumption was working unnoticed", "It indicates the client has told you something inconsistent with what they said before", "It shows the coach has reached the limit of their knowledge and should refer out", "It usually precedes a rupture in the relationship, so it is an early warning"],
            correctIndex: 0,
            explanation: "Noticing it is the practical form of self-critique, available in the middle of an ordinary session.",
            sourceLessonSlug: "cultural-humility",
          },
          {
            prompt: "What is the trap on the humility side?",
            options: ["Asking the client to educate you about their group", "Refusing to make any recommendation, on the grounds that you cannot know enough", "Assuming that acknowledging your ignorance is sufficient without changing anything", "Deferring every decision to the client, which abandons your responsibility for process"],
            correctIndex: 0,
            explanation: "It offloads work onto the person paying you and turns them into a representative. The questions stay about this client and this plan.",
            sourceLessonSlug: "cultural-humility",
          },
          {
            prompt: "What is paternalism, as the third element rejects it?",
            options: ["Acting on a judgment of someone's good without their participation", "Withholding information a client would find distressing until they are ready for it", "Treating a client as less capable because of their age, education, or condition", "Making decisions on behalf of a client who has asked the coach to decide for them"],
            correctIndex: 0,
            explanation: "Which is why the element specifies mutually beneficial and non-paternalistic partnerships.",
            sourceLessonSlug: "cultural-humility",
          },
          {
            prompt: "Where does most of a coach's power come from?",
            options: ["Structure, not identity", "The client's belief that the coach holds knowledge they themselves could not acquire", "The credential the coach holds and the professional setting the work takes place in", "The client's emotional investment in being approved of by someone they respect"],
            correctIndex: 0,
            explanation: "Agenda, definition of progress, expertise, payment, and asking the questions while the other person answers.",
            sourceLessonSlug: "power-in-the-room",
          },
          {
            prompt: "Which two competencies cover power, and what do they say?",
            options: ["1.2.2.2 recognize imbalances; 1.3.2.6 neutralize dynamics", "1.2.2.1 understand history and 1.2.2.3 practice cultural humility in every session", "3.8.3 identify supports and 3.8.4 recognize barriers the client cannot modify", "1.5.2 co-create the agreement and 1.3.2.7 repair discord including microaggressions"],
            correctIndex: 0,
            explanation: "Recognize power and privilege imbalances, and notice and attempt to neutralize any power dynamics. Both use unusually direct verbs.",
            sourceLessonSlug: "power-in-the-room",
          },
          {
            prompt: "What does identity difference do to the structural asymmetry?",
            options: ["Amplifies it, raising the cost of disagreeing", "Replaces it, since identity is the dominant source of power in most relationships", "Removes it, when the coach shares a characteristic with the client", "Has no measurable effect, since the arrangement is the same either way"],
            correctIndex: 0,
            explanation: "Especially where the coach sits on the side carrying more social advantage across race, gender, class, age, body size, language, status, or disability.",
            sourceLessonSlug: "power-in-the-room",
          },
          {
            prompt: "What does 'neutralize' actually mean here?",
            options: ["Reduce the cost of disagreeing", "Eliminate the imbalance by refusing to hold expertise over the client", "Balance the relationship by disclosing an equivalent vulnerability of your own", "Transfer decision-making entirely to the client for the duration of the session"],
            correctIndex: 0,
            explanation: "You cannot delete the asymmetry, and pretending to is its own move. You can lower the specific costs of a client saying no.",
            sourceLessonSlug: "power-in-the-room",
          },
          {
            prompt: "What does asking permission before advising restore?",
            options: ["A real no", "The client's sense that the coach respects their professional autonomy", "The order of the session, by marking a transition from listening to advising", "The client's attention, which drifts during unsolicited explanatory passages"],
            correctIndex: 0,
            explanation: "'Would it be useful if I offered a thought here?' makes declining possible before the information arrives.",
            sourceLessonSlug: "power-in-the-room",
          },
          {
            prompt: "Why offer three options rather than one recommendation?",
            options: ["One recommendation from an expert is an instruction", "Because clients are more likely to comply when they feel they have chosen freely", "Because a single recommendation puts the coach's judgment at risk if it fails", "Because three options let the coach discover which value the client holds most"],
            correctIndex: 0,
            explanation: "Three genuine options is a choice, provided the coach means all three.",
            sourceLessonSlug: "power-in-the-room",
          },
          {
            prompt: "How should the asymmetry be named?",
            options: ["Once, plainly, early, and honestly", "In every session, so the client is regularly reminded of their right to disagree", "Only if the client raises it first, since naming it otherwise makes it larger", "In the written agreement rather than in conversation, where it may sound rehearsed"],
            correctIndex: 0,
            explanation: "'You know your life better than I do. If something I suggest does not fit, telling me is the most useful thing you can do.' Once, not as ritual.",
            sourceLessonSlug: "power-in-the-room",
          },
          {
            prompt: "When is the whole test of whether disagreement is safe?",
            options: ["The first time a client pushes back", "The moment the coaching agreement is signed and the terms become binding", "The first session after a client has failed to complete an agreed action", "The point at which the coach makes a recommendation the client dislikes"],
            correctIndex: 0,
            explanation: "Everything after it is decided by what you did in that moment.",
            sourceLessonSlug: "power-in-the-room",
          },
          {
            prompt: "What is the compliance tell?",
            options: ["Fast agreement, no questions, no modifications", "A client who agrees in session and then reports difficulty at the next one", "A client who asks many clarifying questions but never commits to a date", "A client who completes every agreed action but reports no satisfaction from it"],
            correctIndex: 0,
            explanation: "Very few real plans survive first contact with an actual week unchanged, so frictionless agreement usually means the client is managing you.",
            sourceLessonSlug: "power-in-the-room",
          },
          {
            prompt: "Why is agreeable information worthless to a coach?",
            options: ["You cannot coach a plan you get no honest data about", "Because it makes the coach complacent about the quality of their own suggestions", "Because agreeable clients tend to drop out of coaching earlier than others do", "Because it inflates the coach's outcome statistics without improving any client"],
            correctIndex: 0,
            explanation: "A client who can disagree gives you accurate information; a client who cannot gives you agreeable information.",
            sourceLessonSlug: "power-in-the-room",
          },
          {
            prompt: "What does the power lesson NOT claim?",
            options: ["That naming power repairs anything structural", "That the asymmetry affects the quality of information a coach receives", "That being paid is part of what creates the imbalance in the first place", "That asking permission before advising changes how a suggestion lands"],
            correctIndex: 0,
            explanation: "The claim is small and local: a client who can disagree with you gives you usable information.",
            sourceLessonSlug: "power-in-the-room",
          },
          {
            prompt: "How does this lesson relate to WELL-01?",
            options: ["It breaks MI's spirit into the moves that produce it", "It replaces MI's stance with a structural account that does not require relationship skill", "It applies MI's techniques to the coach's own behavior rather than to the client's", "It shows that MI was validated in settings without meaningful power differences"],
            correctIndex: 0,
            explanation: "Partnership and autonomy support as a stance, made operational for two people who are not socially equal.",
            sourceLessonSlug: "power-in-the-room",
          },
          {
            prompt: "How many times does 'implicit bias' appear in the 2026 NBHWC handbook?",
            options: ["Zero", "Once, in the competency covering the coach's own unconscious biases", "Several times, across the ethics and the coaching-process domains", "Twice, in the theory list alongside the positive-psychology approach"],
            correctIndex: 0,
            explanation: "Which is why the lesson opens by saying it is not exam coverage. It is there because BAM asked for it.",
            sourceLessonSlug: "implicit-bias-honestly",
          },
          {
            prompt: "How many of the 42 articles in FitzGerald and Hurst found evidence of bias?",
            options: ["35", "All 42, which is what makes the finding so consistent across settings", "17, being the subset that used an implicit measure rather than vignettes", "27, being the subset that examined racial or ethnic bias specifically"],
            correctIndex: 0,
            explanation: "Seventeen used an implicit measure and 25 used vignettes; 27 examined racial or ethnic bias among ten types investigated.",
            sourceLessonSlug: "implicit-bias-honestly",
          },
          {
            prompt: "What did every correlational study in that review find?",
            options: ["Higher implicit bias went with lower quality of care", "That implicit and explicit measures of bias correlated strongly with each other", "That bias levels among professionals exceeded those in the general population", "That bias was strongest in the professionals with the least clinical experience"],
            correctIndex: 0,
            explanation: "A significant positive relationship in every study that examined correlations, which is the strongest part of the case.",
            sourceLessonSlug: "implicit-bias-honestly",
          },
          {
            prompt: "How do healthcare professionals compare with the wider population on implicit bias?",
            options: ["About the same levels", "Substantially lower, which the review attributes to professional training and exposure", "Substantially higher, which the review attributes to time pressure and cognitive load", "Too variable across studies for the review to reach any conclusion on the question"],
            correctIndex: 0,
            explanation: "Which the review states directly, and which is neither exonerating nor damning on its own.",
            sourceLessonSlug: "implicit-bias-honestly",
          },
          {
            prompt: "What did Oswald's meta-analysis find about IAT prediction?",
            options: ["Poor for every criterion except brain activity", "Strong for interpersonal behavior but weak for policy preference and person perception", "Strong overall, but only when stereotype IATs rather than attitude IATs were used", "Moderate and consistent across all six of the criterion categories examined"],
            correctIndex: 0,
            explanation: "And IATs performed no better than simple explicit measures, which is the sentence that matters most.",
            sourceLessonSlug: "implicit-bias-honestly",
          },
          {
            prompt: "Why does 'no better than explicit measures' matter?",
            options: ["A test that predicts no better than asking is not diagnostic", "Because explicit measures are cheaper and faster to administer in a workplace setting", "Because it shows implicit and explicit bias are the same underlying construct", "Because it means the IAT should be replaced by longer self-report inventories"],
            correctIndex: 0,
            explanation: "The IAT's claim to importance rests on revealing something self-report cannot, and the meta-analysis undercuts exactly that.",
            sourceLessonSlug: "implicit-bias-honestly",
          },
          {
            prompt: "How big was the Forscher network meta-analysis?",
            options: ["492 studies, 87,418 participants", "Two studies with a combined total of 6,321 participants across nine interventions", "Forty-two eligible articles, of which seventeen used an implicit measure", "Ninety-six good- or fair-quality studies reported across 111 separate articles"],
            correctIndex: 0,
            explanation: "Synthesized with network meta-analysis, comparing many procedures against each other rather than one at a time.",
            sourceLessonSlug: "implicit-bias-honestly",
          },
          {
            prompt: "How large were the effects on implicit measures in Forscher?",
            options: ["Often weak, absolute d below .30", "Moderate, in the range of .40 to .60 for the most effective procedure types", "Large for association-based procedures and negligible for all other categories", "Too heterogeneous to summarize, so the review reported ranges rather than estimates"],
            correctIndex: 0,
            explanation: "Implicit measures can be changed, but most studies used brief single-session manipulations aimed at short-term change.",
            sourceLessonSlug: "implicit-bias-honestly",
          },
          {
            prompt: "What did Forscher find about behavior?",
            options: ["Generally trivial changes", "Behavior changed as much as the implicit measures did, in proportion to the effect", "Behavior changed only in studies where explicit measures also moved substantially", "Behavior was not measured, which the authors describe as the field's central gap"],
            correctIndex: 0,
            explanation: "Procedures changed explicit measures less consistently than implicit ones, and produced generally trivial changes in behavior.",
            sourceLessonSlug: "implicit-bias-honestly",
          },
          {
            prompt: "What is the decisive mediation finding?",
            options: ["Implicit change did not mediate explicit or behavioral change", "Implicit change fully mediated behavioral change in the association-based procedures", "Explicit change mediated implicit change, reversing the assumed causal direction", "Mediation could not be tested because too few studies measured all three outcomes"],
            correctIndex: 0,
            explanation: "So even where a procedure moved the measure and something else, the first did not explain the second.",
            sourceLessonSlug: "implicit-bias-honestly",
          },
          {
            prompt: "What did Lai and colleagues test, and on how many people?",
            options: ["Nine interventions, 6,321 participants, across two studies", "Nine interventions in a single study of 87,418 participants worldwide", "Eight real interventions and one sham, in 42 healthcare-professional samples", "Twelve interventions across 492 studies included in a network meta-analysis"],
            correctIndex: 0,
            explanation: "Eight real and one sham, all aimed at reducing implicit racial preferences.",
            sourceLessonSlug: "implicit-bias-honestly",
          },
          {
            prompt: "What happened to the Lai effects over time?",
            options: ["All nine worked immediately; none survived a delay", "The strongest three persisted for several weeks while the rest decayed within days", "Effects grew over time in participants motivated to respond without prejudice", "Effects were absent immediately but appeared at the delayed follow-up assessment"],
            correctIndex: 0,
            explanation: "None were effective after a delay of several hours to several days, and none changed explicit racial preferences.",
            sourceLessonSlug: "implicit-bias-honestly",
          },
          {
            prompt: "State the honest four-part summary of this literature.",
            options: ["Bias is real; the measure predicts poorly; training moves it briefly; that does not move behavior", "Bias is a measurement artifact; the IAT is invalid; training is harmful; nothing should be done", "Bias is real and measurable; the IAT is diagnostic; training works; effects last for months", "Bias exists in the population but not in professionals; the measure is fine; training is unnecessary"],
            correctIndex: 0,
            explanation: "Which is why anyone selling a two-hour workshop as a fix is selling something the evidence does not support.",
            sourceLessonSlug: "implicit-bias-honestly",
          },
          {
            prompt: "What does the lesson tell a coach to do instead?",
            options: ["Change the structure", "Take the IAT annually and track whether the score improves over the years", "Attend a longer training, since the null results came from brief single sessions", "Disclose your own likely biases to clients so they can correct you when needed"],
            correctIndex: 0,
            explanation: "Same context questions for everyone, a written intake, the same options at the same point, and a quarterly review of your own referral log.",
            sourceLessonSlug: "implicit-bias-honestly",
          },
          {
            prompt: "Why is a referral log better evidence than a test score?",
            options: ["It is a record of what you actually did", "Because it can be audited by a supervisor, while a test score cannot be verified", "Because referral patterns are the outcome that matters most to a client's health", "Because it accumulates over years, while a test score reflects only a single day"],
            correctIndex: 0,
            explanation: "A pattern in who you refer and for what is behavioral data about you, in a way an implicit measure demonstrably is not.",
            sourceLessonSlug: "implicit-bias-honestly",
          },
          {
            prompt: "What is 'differential effort' worth noticing?",
            options: ["Whose plan you shrank and whose ambition you talked down", "Which clients require more sessions to reach the same behavioral outcome", "How much preparation you do before sessions with different kinds of client", "Whether you follow up more quickly with clients who respond more promptly"],
            correctIndex: 0,
            explanation: "Along with whose report you took at face value. These are observable in your own records.",
            sourceLessonSlug: "implicit-bias-honestly",
          },
          {
            prompt: "Why structure rather than awareness?",
            options: ["The awareness route does not carry to behavior", "Because awareness training is expensive and most coaches cannot access it", "Because structural fixes are required by the competency framework and awareness is not", "Because awareness produces defensiveness, which makes the underlying bias worse"],
            correctIndex: 0,
            explanation: "Same reason WELL-01 prefers implementation intentions over motivation: structure produces the behavior without requiring self-repair.",
            sourceLessonSlug: "implicit-bias-honestly",
          },
          {
            prompt: "What is a network meta-analysis?",
            options: ["A synthesis comparing many procedures against each other", "A meta-analysis restricted to studies sharing a common control condition", "An analysis of how findings propagate through citation networks over time", "A pooled analysis weighting studies by the size of their research networks"],
            correctIndex: 0,
            explanation: "The method behind the 492-study synthesis, which is what let it rank procedure types rather than test one at a time.",
            sourceLessonSlug: "implicit-bias-honestly",
          },
          {
            prompt: "Which procedures changed implicit measures most, per Forscher?",
            options: ["Associating concepts, invoking goals, taxing mental resources", "Threat, self-affirmation, and the induction of specific moods or emotions", "Extended contact with members of the group in question over several weeks", "Education about the history and consequences of discrimination in healthcare"],
            correctIndex: 0,
            explanation: "Threat, affirmation, and specific moods or emotions changed them the least. All effects were still weak.",
            sourceLessonSlug: "implicit-bias-honestly",
          },
          {
            prompt: "What did Forscher's bias tests suggest?",
            options: ["Implicit effects could be inflated relative to true values", "That the included studies were representative of the wider unpublished literature", "That larger studies reported larger effects, which argues against publication bias", "That the effects were robust to every sensitivity analysis the authors performed"],
            correctIndex: 0,
            explanation: "Which makes the already-weak effects a probable overestimate rather than a floor.",
            sourceLessonSlug: "implicit-bias-honestly",
          },
          {
            prompt: "What does competency 1.3.2.7 ask, and what word does it use?",
            options: ["Repair discord, including from microaggressions", "Avoid microaggressions through training in inclusive language and behavior", "Report microaggressions occurring in professional settings to the relevant body", "Assess whether a client has experienced microaggressions in prior care settings"],
            correctIndex: 0,
            explanation: "The competency asks for repair, not for adjudication of the construct.",
            sourceLessonSlug: "discord-and-repair",
          },
          {
            prompt: "What was Lilienfeld's critique?",
            options: ["Unclear definition, thin causal evidence, weak psychometrics", "That the phenomenon does not occur, and reported incidents are fabricated or misremembered", "That the research overstates harms while ignoring the benefits of frank conversation", "That the concept applies in employment settings but not in healthcare or coaching"],
            correctIndex: 0,
            explanation: "Plus the assumption that the recipient's interpretation establishes intent.",
            sourceLessonSlug: "discord-and-repair",
          },
          {
            prompt: "What was Williams's reply?",
            options: ["Better specified than claimed, with a substantial outcome literature", "That the critique was correct on the evidence but wrong about the practical implications", "That the construct should be replaced by a broader measure of everyday discrimination", "That psychometric objections are irrelevant because the harm is self-evident"],
            correctIndex: 0,
            explanation: "And that dismissing the phenomenon carries its own costs for the people reporting it.",
            sourceLessonSlug: "discord-and-repair",
          },
          {
            prompt: "Why does the course refuse to resolve the dispute?",
            options: ["It is unresolved, and the coaching task does not depend on it", "Because taking a side would breach the program's neutrality on contested social questions", "Because the coach's own view determines how they will respond in the moment anyway", "Because the competency requires coaches to remain agnostic on all contested constructs"],
            correctIndex: 0,
            explanation: "If a client withdraws after something you said, you have a coaching problem regardless of the right label for the moment.",
            sourceLessonSlug: "discord-and-repair",
          },
          {
            prompt: "Give the four repair moves in order.",
            options: ["Notice, name without demanding a verdict, do not defend intent, change something", "Apologize, explain what you meant, ask whether the client wants to continue, resume", "Pause the session, ask what happened, agree how to handle it in future, move on", "Acknowledge, reflect the client's feeling, explore its history, return to the plan"],
            correctIndex: 0,
            explanation: "The first is the same noticing WELL-01 teaches for sustain talk.",
            sourceLessonSlug: "discord-and-repair",
          },
          {
            prompt: "What does naming the shift without demanding a verdict achieve?",
            options: ["It takes the burden of accusing you off the client", "It establishes a record of the incident in case it needs to be revisited later", "It gives the client time to decide whether they wish to raise the issue at all", "It signals that the coach is trained in this area and can handle the conversation"],
            correctIndex: 0,
            explanation: "'Something shifted just now, and I think it may have been what I said.' That burden is the whole reason clients say nothing.",
            sourceLessonSlug: "discord-and-repair",
          },
          {
            prompt: "Why is 'I didn't mean it that way' the wrong move?",
            options: ["It makes your interior the topic", "It concedes too much, since intent is genuinely relevant to how a remark should be read", "It delays the repair, which should happen before any explanation is offered", "It invites the client to reassure you, which most clients will politely do"],
            correctIndex: 0,
            explanation: "A debate the client cannot win and did not raise. Intent is not the topic; effect is.",
            sourceLessonSlug: "discord-and-repair",
          },
          {
            prompt: "What is the second injury?",
            options: ["Making the client manage your discomfort", "Repeating the original remark while attempting to explain what you meant by it", "Raising the incident again in a later session after the client has moved on", "Recording the incident in your notes without telling the client you have done so"],
            correctIndex: 0,
            explanation: "Which is what an apology that becomes a long performance does.",
            sourceLessonSlug: "discord-and-repair",
          },
          {
            prompt: "How do you tell a moment from a pattern?",
            options: ["The same category recurring with clients who share a characteristic", "Whether more than one client has raised the same concern within a single year", "Whether the incident was noticed by the client or only by the coach afterwards", "Whether the repair worked, since a successful repair means it was only a moment"],
            correctIndex: 0,
            explanation: "That is data about you, and it belongs in the same quarterly review as the referral log.",
            sourceLessonSlug: "discord-and-repair",
          },
          {
            prompt: "What is most discord actually about?",
            options: ["Ordinary things: a joke, a push, an interruption", "Unresolved conflicts the client brought in from other relationships", "The coach's failure to remember details from previous sessions accurately", "Disagreement about the goal, which surfaces once the work becomes difficult"],
            correctIndex: 0,
            explanation: "A misjudged joke, a plan pushed too hard, an interruption, a number that landed as judgment. The repair sequence is identical.",
            sourceLessonSlug: "discord-and-repair",
          },
          {
            prompt: "How is discord visible in a session?",
            options: ["Withdrawal, formality, shorter answers, disengagement", "Direct statements of dissatisfaction, which most clients will make if asked", "Missed sessions and late cancellations in the weeks that follow the rupture", "Increased questioning, as the client tests whether the coach can be trusted"],
            correctIndex: 0,
            explanation: "Plus a change in what the client will bring up, which is often the earliest sign.",
            sourceLessonSlug: "discord-and-repair",
          },
          {
            prompt: "Why practice the repair sequence on low-stakes ruptures?",
            options: ["The sequence is identical, and the stakes are lower", "Because low-stakes ruptures are more common and therefore more important overall", "Because clients are more forgiving of errors in areas that do not involve identity", "Because practising it on identity-related ruptures would be unethical without training"],
            correctIndex: 0,
            explanation: "Most discord is not about identity at all, which makes it the training ground for the times it is.",
            sourceLessonSlug: "discord-and-repair",
          },
          {
            prompt: "What does competency 1.2.2.1 cover?",
            options: ["Diversity-related history, marginalization, and trauma", "The coach's own social identities and their unconscious biases and triggers", "The impact of the healthcare system's structure on access and outcomes", "The legal protections applying to clients from protected characteristic groups"],
            correctIndex: 0,
            explanation: "Understanding their impact, which the lesson treats as reading behavior correctly rather than as clinical knowledge.",
            sourceLessonSlug: "history-and-trauma",
          },
          {
            prompt: "What is the boundary stated before the trauma content?",
            options: ["You do not take a history, ask for accounts, or process anything", "You may take a brief history but must not return to it in later sessions", "You may discuss past experiences only if the client raises them unprompted", "You may work with trauma if you have completed a recognized short course"],
            correctIndex: 0,
            explanation: "Trauma-focused treatment is a licensed clinical activity, like CBT-I in WELL-05 and the therapy boundary in WELL-06.",
            sourceLessonSlug: "history-and-trauma",
          },
          {
            prompt: "What are the coach's two responsibilities in this area?",
            options: ["Not making things worse, and knowing when to refer", "Screening for trauma history, and documenting what the client discloses", "Providing psychoeducation, and monitoring symptoms between clinical appointments", "Assessing severity, and adjusting the plan to the client's current capacity"],
            correctIndex: 0,
            explanation: "Everything else in the lesson serves one of those two.",
            sourceLessonSlug: "history-and-trauma",
          },
          {
            prompt: "Why is history a coaching variable at all?",
            options: ["It shows up as behavior you would otherwise misread", "Because unresolved history predicts which clients will drop out of coaching early", "Because the competency requires a coach to include it in the intake assessment", "Because clients expect a coach to understand the context they are working within"],
            correctIndex: 0,
            explanation: "Refusing a medical referral, resisting a fixed schedule, or agreeing with everything can each be a history rather than a preference.",
            sourceLessonSlug: "history-and-trauma",
          },
          {
            prompt: "Name SAMHSA's six principles.",
            options: ["Safety; trustworthiness and transparency; peer support; collaboration and mutuality; empowerment, voice and choice; cultural, historical, and gender issues", "Safety; confidentiality; competence; consent; continuity of care; and cultural responsiveness", "Awareness; avoidance of retraumatization; assessment; adaptation; advocacy; and accountability", "Recognition; response; referral; review; relationship; and resilience across the care pathway"],
            correctIndex: 0,
            explanation: "Read as design constraints on a practice, not as therapeutic technique.",
            sourceLessonSlug: "history-and-trauma",
          },
          {
            prompt: "What is notable about all six principles?",
            options: ["None requires knowing what happened to anyone", "All six require specialized training that most coaches will not have completed", "All six were written for inpatient settings and adapt poorly to coaching practice", "Each one maps onto a specific competency in the coaching handbook's own list"],
            correctIndex: 0,
            explanation: "Every one is a property of how the relationship is run, which is exactly why a coach can practice this way without leaving scope.",
            sourceLessonSlug: "history-and-trauma",
          },
          {
            prompt: "What does 'safety' change about an ordinary session?",
            options: ["Predictable structure, clear ending, no surprises about access", "Screening for risk at the start of every session before other work begins", "Avoiding any topic the client has previously found difficult to discuss", "Ensuring the physical setting has an unobstructed exit and no closed door"],
            correctIndex: 0,
            explanation: "Including who else sees anything, which links safety to the records terms in the coaching agreement.",
            sourceLessonSlug: "history-and-trauma",
          },
          {
            prompt: "What does 'trustworthiness and transparency' require in practice?",
            options: ["Say what happens with notes and data before it happens", "Share your own qualifications and limitations at the start of the relationship", "Explain the reasoning behind every recommendation you make to the client", "Disclose any conflict of interest arising from products or services you sell"],
            correctIndex: 0,
            explanation: "Before it happens, not when asked, which is the difference between transparency and answering a question.",
            sourceLessonSlug: "history-and-trauma",
          },
          {
            prompt: "How does the 'peer support' principle connect to the rest of the program?",
            options: ["It is the strongest single lever in WELL-99", "It supplies the accountability mechanism that habit formation depends on in WELL-01", "It substitutes for professional support when a coach's availability is limited", "It is the only principle that requires resources outside the coaching relationship"],
            correctIndex: 0,
            explanation: "Connection to others in similar situations is a legitimate part of a plan, and social connection carries the strongest evidence in the capstone.",
            sourceLessonSlug: "history-and-trauma",
          },
          {
            prompt: "Which principle does the power lesson operationalize?",
            options: ["Collaboration and mutuality", "Safety, since a client who cannot disagree is not in a safe relationship", "Cultural, historical, and gender issues, which is where power differences originate", "Trustworthiness and transparency, since power should be disclosed rather than hidden"],
            correctIndex: 0,
            explanation: "The plan is co-authored, and lesson 10 is the set of moves that make co-authoring real.",
            sourceLessonSlug: "history-and-trauma",
          },
          {
            prompt: "Give the referral triggers from this lesson.",
            options: ["Current abuse or danger, PTSD-like symptoms, wanting to work on the trauma, risk to self", "Any disclosure of a past adverse experience, however long ago it occurred", "A client who becomes tearful in a session, or who cancels repeatedly without explanation", "A client whose plan has not progressed across three consecutive sessions"],
            correctIndex: 0,
            explanation: "Unchanged from WELL-06, and the crisis protocol governs the last of them without exception.",
            sourceLessonSlug: "history-and-trauma",
          },
          {
            prompt: "What should a coach actively avoid here?",
            options: ["Inviting disclosure you cannot hold", "Mentioning that trauma can affect behavior, which may alarm the client unnecessarily", "Referring too early, before the client has built enough trust to accept a referral", "Applying the six principles, which are designed for clinical rather than coaching settings"],
            correctIndex: 0,
            explanation: "An open question about the past can open something in a session that ends in fifty minutes and does not resume for a week.",
            sourceLessonSlug: "history-and-trauma",
          },
          {
            prompt: "What IS the trauma-informed move for a coach?",
            options: ["A stable, predictable, low-pressure relationship", "A gentle exploration of the client's history at a pace they can tolerate", "A referral at the first sign that history is influencing present behavior", "A written agreement that the past is outside the scope of the coaching work"],
            correctIndex: 0,
            explanation: "Not a deeper conversation, which is the error the previous point names.",
            sourceLessonSlug: "history-and-trauma",
          },
          {
            prompt: "What is a warm referral?",
            options: ["Naming a specific person or service and making the connection", "Referring while the client is still engaged rather than after they disengage", "Following up after the referral to confirm the client made contact successfully", "Offering to continue coaching alongside the clinical work if the client wants it"],
            correctIndex: 0,
            explanation: "Rather than handing over a list, which is a referral in name only.",
            sourceLessonSlug: "history-and-trauma",
          },
          {
            prompt: "A client refuses a medical referral. What does this lesson suggest considering?",
            options: ["A history with medical institutions, not avoidance", "That the client does not believe the problem is serious enough to warrant it", "That the referral was made too early in the coaching relationship to be accepted", "That the client is testing whether the coach will accept being disagreed with"],
            correctIndex: 0,
            explanation: "Family or community history is a behavior you will otherwise misread, which is the whole reason 1.2.2.1 is a coaching competency.",
            sourceLessonSlug: "history-and-trauma",
          },
          {
            prompt: "A client cannot commit to a fixed schedule. What is the alternative reading?",
            options: ["They are managing an unpredictable environment", "They are ambivalent about the goal and have not yet resolved it", "They have low conscientiousness, which predicts poor adherence generally", "They are testing the coach's flexibility before committing to the work"],
            correctIndex: 0,
            explanation: "Rather than resisting structure, which is the reading a coach reaches for first and which Section 1 already warned about.",
            sourceLessonSlug: "history-and-trauma",
          },
          {
            prompt: "A client agrees with everything. Which two lessons both explain it?",
            options: ["The power lesson and the history lesson", "The cultural humility lesson and the discord lesson", "The implicit bias lesson and the coaching agreement lesson", "The health literacy lesson and the numeracy lesson"],
            correctIndex: 0,
            explanation: "The compliance tell, and having learned somewhere that disagreement is expensive. Both produce the same worthless agreeable data.",
            sourceLessonSlug: "history-and-trauma",
          },
          {
            prompt: "What is a 'design constraint', as this lesson uses it?",
            options: ["A property of how a practice is structured", "A limit on what a coach may do, imposed by the scope of practice", "A feature of the client's environment that the plan must accommodate", "A requirement written into the coaching agreement at the outset"],
            correctIndex: 0,
            explanation: "As opposed to a technique applied to a client, which is what keeps the six principles inside a coach's scope.",
            sourceLessonSlug: "history-and-trauma",
          },
          {
            prompt: "Which is a coach's legitimate use of the six principles?",
            options: ["Running a predictable session with real options and clear data terms", "Screening every client for adverse childhood experiences at intake", "Explaining to the client how trauma affects the nervous system", "Adjusting the plan based on the trauma history the client disclosed"],
            correctIndex: 0,
            explanation: "Every principle is about how the relationship runs, and none of them requires knowing what happened to anyone.",
            sourceLessonSlug: "history-and-trauma",
          },
          {
            prompt: "What is the structural response to bias, in one sentence?",
            options: ["Make the same thing happen for every client", "Learn enough about each group to adapt your approach appropriately for them", "Monitor your own reactions in session and correct them as they arise", "Seek supervision from a colleague who can observe your sessions periodically"],
            correctIndex: 0,
            explanation: "Same questions, same intake, same options at the same point, and a quarterly look at your own records.",
            sourceLessonSlug: "implicit-bias-honestly",
          },
          {
            prompt: "Which is the strongest evidence claim this lesson permits about implicit bias?",
            options: ["Professionals show it, and it correlates with lower quality of care", "Implicit bias causes measurable differences in the treatment decisions professionals make", "Reducing implicit bias through training improves the quality of care patients receive", "Implicit bias explains most of the disparity in outcomes between patient groups"],
            correctIndex: 0,
            explanation: "The review's own framing is that correlational evidence indicates biases are LIKELY to influence decisions in some circumstances and need further investigation.",
            sourceLessonSlug: "implicit-bias-honestly",
          },
          {
            prompt: "Which sentence would this course refuse?",
            options: ["'Bias training reduces disparities in care'", "'The IAT performed no better than simple explicit measures of bias'", "'Changes in implicit measures did not mediate changes in behavior'", "'Healthcare professionals show about the same levels of implicit bias as everyone else'"],
            correctIndex: 0,
            explanation: "Nothing in the four sources supports the causal chain from training to reduced disparities; the other three are direct findings.",
            sourceLessonSlug: "implicit-bias-honestly",
          },
          {
            prompt: "How does the implicit-bias lesson justify being in a course about competencies?",
            options: ["It does not; it says openly that it is not credential coverage", "It maps to competency 1.2.2.4 on the coach's own unconscious biases", "It is required background for the microaggression competency that follows it", "It substitutes for the cultural-competence content the handbook no longer includes"],
            correctIndex: 0,
            explanation: "It is there on BAM's request, and because a coach will meet the topic in every workplace training they attend.",
            sourceLessonSlug: "implicit-bias-honestly",
          },
          {
            prompt: "Which coaching move most directly serves 'empowerment, voice and choice'?",
            options: ["Offering three genuine options and meaning all three", "Explaining the reasoning behind the recommendation you have chosen", "Asking the client to rate their confidence in the plan before agreeing it", "Recording the plan in writing so the client can refer to it later"],
            correctIndex: 0,
            explanation: "Real options and a real no, which is the power lesson supplying the mechanism for a trauma-informed principle.",
            sourceLessonSlug: "history-and-trauma",
          },
          {
            prompt: "What is the relationship between Sections 2 and 3 of this course?",
            options: ["Whether the client understood, then who is delivering it", "Both cover communication skills, at increasing levels of difficulty", "Section 2 concerns written material and Section 3 concerns spoken interaction", "Section 2 is competency coverage and Section 3 is entirely beyond the credential"],
            correctIndex: 0,
            explanation: "Section 3 turns the attention to the person in the room with structural power and unexamined defaults.",
            sourceLessonSlug: "cultural-humility",
          },
          {
            prompt: "Why does the course teach the microaggression dispute rather than a position?",
            options: ["Because the coaching task is the same under either position", "Because taking a position would require evidence the program has not gathered", "Because clients hold both positions and the coach must be able to argue either", "Because the dispute will be resolved shortly and any position taken would date"],
            correctIndex: 0,
            explanation: "The competency asks for repair, not adjudication. A client who withdraws needs the same four moves either way.",
            sourceLessonSlug: "discord-and-repair",
          },
          {
            prompt: "What single fact makes the IAT-based workshop model hard to defend?",
            options: ["Moving the measure did not move behavior", "The IAT has never been administered outside laboratory research settings", "Workshops are too short to produce any change in a stable trait measure", "Participants can deliberately alter their scores once they know how the test works"],
            correctIndex: 0,
            explanation: "Forscher found generally trivial behavioral changes and no mediation, which removes the mechanism the model assumes.",
            sourceLessonSlug: "implicit-bias-honestly",
          },
          {
            prompt: "How often should the referral log and discord pattern be reviewed?",
            options: ["Quarterly", "After every session in which something uncomfortable occurred", "Annually, alongside the coach's own continuing education requirements", "Whenever a client raises a concern, and not otherwise"],
            correctIndex: 0,
            explanation: "Both lessons name the same cadence, and both treat the record rather than the recollection as the evidence.",
            sourceLessonSlug: "implicit-bias-honestly",
          },
          {
            prompt: "What does it mean that expertise is 'located in the wrong person'?",
            options: ["The client knows what their culture means to them", "The coach is expert in process and should not claim expertise in content", "Community organizations hold knowledge that individual practitioners cannot", "The client's clinician holds information the coach is not entitled to interpret"],
            correctIndex: 0,
            explanation: "Competence-as-knowledge places the expertise in the practitioner, which is the third of the three objections.",
            sourceLessonSlug: "cultural-humility",
          },
          {
            prompt: "Which everyday coaching question is cultural humility in practice?",
            options: ["'Who decides the schedule in your household?'", "'What is typical for people from your background in this situation?'", "'Would you like me to adapt this for your cultural requirements?'", "'Is there anything about your culture I should know before we start?'"],
            correctIndex: 0,
            explanation: "It is about this client's life and this plan, rather than about their culture as a topic.",
            sourceLessonSlug: "cultural-humility",
          },
          {
            prompt: "What makes a coach's power invisible to the coach?",
            options: ["It comes from the arrangement, not from anything they do", "It only appears when a client disagrees, which most clients never do", "It is offset by the client's ability to end the relationship at any time", "It is smaller than the power in clinical relationships, so it goes unnoticed"],
            correctIndex: 0,
            explanation: "Agenda, definition of progress, expertise, payment, and the question-and-answer structure are all present regardless of intent.",
            sourceLessonSlug: "power-in-the-room",
          },
          {
            prompt: "Why does a paid relationship add to the asymmetry?",
            options: ["The client is buying approval as well as help", "The coach has a financial interest in the relationship continuing", "Payment creates an expectation that the coach will produce results", "Money is itself a determinant, which links back to Section 1"],
            correctIndex: 0,
            explanation: "Which is one reason the fee terms in the coaching agreement are a power lever rather than an administrative detail.",
            sourceLessonSlug: "power-in-the-room",
          },
          {
            prompt: "A client accepts every suggestion in the first three sessions. What should you do?",
            options: ["Treat it as a signal, not as success", "Continue, since early compliance predicts good long-term adherence", "Increase the difficulty, since the current plan is clearly not challenging enough", "Ask the client to explain why they find the suggestions so useful"],
            correctIndex: 0,
            explanation: "Very few real plans survive first contact with an actual week unchanged. Frictionless agreement usually means management.",
            sourceLessonSlug: "power-in-the-room",
          },
          {
            prompt: "What is the practical form of 'lifelong self-critique' in a session?",
            options: ["Noticing where you were surprised", "Reviewing your session recordings against a coding framework each month", "Asking clients for feedback on your cultural responsiveness at the close", "Completing continuing education in cultural topics at regular intervals"],
            correctIndex: 0,
            explanation: "Surprise marks a place a default assumption was doing work you did not notice, and it is available in real time.",
            sourceLessonSlug: "cultural-humility",
          },
          {
            prompt: "Which is the correct order of the first two repair moves?",
            options: ["Notice the shift, then name it", "Name the possibility, then watch whether the client confirms it", "Apologize immediately, then ask what specifically caused the reaction", "Ask a question to change the subject, then return to it at the end"],
            correctIndex: 0,
            explanation: "Noticing comes first because a repair aimed at a rupture you did not detect never happens at all.",
            sourceLessonSlug: "discord-and-repair",
          },
          {
            prompt: "What does 'change something' mean at the end of a repair?",
            options: ["Apologize briefly, correct the specific thing, continue", "Change the topic so the client is not left dwelling on the moment", "Change the plan, since the rupture indicates the plan was wrong", "Change how you speak for the rest of the session, without comment"],
            correctIndex: 0,
            explanation: "Brief is the operative word: an apology that becomes a performance produces the second injury.",
            sourceLessonSlug: "discord-and-repair",
          },
          {
            prompt: "Which detail of the Lai studies makes the result hard to dismiss?",
            options: ["One of the nine interventions was a sham", "The participants were healthcare professionals rather than students", "The delay was measured in months rather than in hours or days", "The interventions were delivered in person rather than online"],
            correctIndex: 0,
            explanation: "Eight real and one sham, and all nine reduced implicit preferences immediately, which is itself informative about what the immediate effect means.",
            sourceLessonSlug: "implicit-bias-honestly",
          },
          {
            prompt: "What is the honest thing to say to a client about your own bias?",
            options: ["Little; change the structure instead", "That you have taken the IAT and know your own patterns", "That coaching is a bias-free space because of your professional training", "That you will tell them if you notice yourself reacting differently to them"],
            correctIndex: 0,
            explanation: "The lesson's whole argument is that structure produces the behavior without requiring anyone to have solved anything about themselves.",
            sourceLessonSlug: "implicit-bias-honestly",
          },
          {
            prompt: "Which of these is a 'written intake' actually for?",
            options: ["Covering the same ground regardless of who is in front of you", "Producing a record that protects the coach in the event of a complaint", "Saving session time so more of the hour can be spent on coaching", "Allowing the client to disclose in writing what they would not say aloud"],
            correctIndex: 0,
            explanation: "It is a structural bias intervention: the same questions get asked whether or not you would have thought to ask them.",
            sourceLessonSlug: "implicit-bias-honestly",
          },
          {
            prompt: "What links the discord pattern, the referral log, and differential effort?",
            options: ["All three are records of behavior rather than of self-perception", "All three appear in the competency handbook's list of required practices", "All three are reviewed with a supervisor rather than by the coach alone", "All three concern identity, which is why they are grouped in this section"],
            correctIndex: 0,
            explanation: "Which is the whole point: the literature says self-perception is a poor guide, so the evidence has to come from what you did.",
            sourceLessonSlug: "implicit-bias-honestly",
          },
          {
            prompt: "Which principle covers the humility lesson, in SAMHSA's list?",
            options: ["Cultural, historical, and gender issues", "Collaboration and mutuality, since humility is about sharing authority", "Trustworthiness and transparency, since assumptions should be stated openly", "Empowerment, voice and choice, since the client defines their own context"],
            correctIndex: 0,
            explanation: "It is the sixth principle, and the lesson describes it as the humility lesson applied.",
            sourceLessonSlug: "history-and-trauma",
          },
          {
            prompt: "A client discloses current danger at home. What governs your response?",
            options: ["The WELL-06 crisis protocol, without exception", "Your professional judgment about whether the danger is immediate", "The confidentiality terms agreed at the start of the relationship", "A referral at the end of the session, once the client has finished speaking"],
            correctIndex: 0,
            explanation: "Risk to self is among the four triggers, and the crisis protocol from WELL-06 governs it without exception.",
            sourceLessonSlug: "history-and-trauma",
          },
          {
            prompt: "Why does this section come after the two about the client's circumstances?",
            options: ["Because the coach is a variable too, and the last one examined", "Because it requires the vocabulary that Sections 1 and 2 establish", "Because it is the most contested material and needs the evidence discipline first", "Because the competencies it covers are numbered later in the handbook"],
            correctIndex: 0,
            explanation: "Section 3's argument is that the person delivering the plan is in the room, with structural power and unexamined defaults.",
            sourceLessonSlug: "power-in-the-room",
          },
          {
            prompt: "What kind of evidence were the 25 vignette studies in FitzGerald and Hurst?",
            options: ["Between-subjects designs varying patient characteristics", "Longitudinal cohorts following professionals across several years of practice", "Randomized trials of interventions intended to reduce the biases identified", "Qualitative interviews about professionals' attitudes toward patient groups"],
            correctIndex: 0,
            explanation: "The review included them although they do not isolate implicit attitudes, because specialists recognize them as a way of detecting possible implicit bias.",
            sourceLessonSlug: "implicit-bias-honestly",
          },
          {
            prompt: "Which study design does the review call its most convincing?",
            options: ["IAT combined with real-world treatment quality", "Vignette experiments, because the patient characteristic is randomly assigned", "Subliminal priming, because it removes the participant's conscious control", "Large surveys, because they capture the widest range of professional settings"],
            correctIndex: 0,
            explanation: "Studies combining the IAT with a measure of treatment quality in the actual world, which is where the correlational claim comes from.",
            sourceLessonSlug: "implicit-bias-honestly",
          },
          {
            prompt: "What does the microaggression definition claim, in its strong form?",
            options: ["Brief, commonplace slights that accumulate into a health burden", "Deliberate but deniable hostility expressed through indirect language and behavior", "Institutional practices that disadvantage groups without any individual intent", "Any comment about group membership, regardless of how it was received"],
            correctIndex: 0,
            explanation: "Often unintentional, communicating hostility or negativity toward a person's group membership. That accumulation claim is what the dispute is about.",
            sourceLessonSlug: "discord-and-repair",
          },
        ],
      },
    },
    // ── Section 4 ────────────────────────────────────────────────────────────────────────────
    {
      slug: "the-coaching-agreement",
      title: "15 · The agreement that should exist before any of this",
      section: "Section 4 · The agreement and the practice",
      body: `Competency 1.5.2 asks the coach to **co-create a coaching agreement**, and it is the largest single hole the review found: neither "coaching agreement" nor "informed consent" appeared anywhere in the other nine courses. Eleven courses of technique were built on top of a relationship nobody had defined.

**What the handbook itself lists.** 1.5.2.1 names guidelines covering **logistics, fees, scheduling, inclusion of others, and duration**, plus **feedback mechanisms** and **mutual fit**. Every one of those is a decision, and every one of them causes a problem later if it is left implicit.

**Co-create, not present.** The verb is the point again. A form the client signs is a contract. An agreement is reached in conversation, with the client's answers changing the terms, and then written down. The difference shows up the first time something goes wrong: a client who chose the cancellation window behaves differently from a client who was told it.

**The elements, one at a time.**

- **Logistics.** Where, how, on what platform, who initiates, what happens if someone is late, how to reach you between sessions and how fast a reply is realistic. Between-session availability is the most common unstated expectation in coaching and the most common source of resentment on both sides.
- **Fees.** The amount, what a session includes, when payment happens, what a cancellation costs and how much notice avoids it, and whether unused sessions expire. Say the numbers out loud. A coach too uncomfortable to state a fee clearly is training the client to be uncomfortable raising money problems later, which is a context variable from Section 1 that you have just made invisible.
- **Scheduling.** Frequency, session length, how far ahead, how rescheduling works.
- **Inclusion of others.** Whether a partner, family member, physician, or trainer is part of this, in what role, with what access to what. This is where confidentiality gets decided in practice.
- **Duration.** How long the arrangement runs, when it is reviewed, and what ending looks like. A relationship with no defined end drifts into dependence, which is a failure of coaching even when both parties enjoy it.
- **Feedback mechanisms.** How the client tells you something is not working. Left to chance, a dissatisfied client does not complain; they cancel. Given a named, scheduled mechanism, they tell you.
- **Mutual fit.** Explicitly two-directional. The client may decide you are not the right coach, and you may decide the same, and saying so at the start makes the later conversation possible.

**What belongs in the agreement that the handbook list does not spell out.** **Scope**, in one plain sentence: what you do, what you do not do, and that you do not diagnose, treat, or interpret clinical measurements. **Confidentiality and its limits**, including the specific circumstances in which you would break it. **Records**: what you keep, where, for how long, and who can see it. And **the referral commitment**: that you will say so when something is outside your scope, which turns the referral from a rejection into a term the client already agreed to.

**Where this connects to the rest of the course.** Every element above is a power lever. Fees, availability, cancellation, and duration all set the cost of the client saying no. Deciding them together, out loud, at the start, is the largest single thing a coach can do about the asymmetry in lesson 10.

:::reveal List the seven elements the handbook names for the coaching agreement. ||| Logistics, fees, scheduling, inclusion of others, and duration, plus feedback mechanisms and mutual fit.

:::reveal Why does a named feedback mechanism matter, and what happens without one? ||| Without one a dissatisfied client does not complain, they cancel, and you never learn why. A named, scheduled mechanism converts a silent exit into information you can act on.

## Vocabulary
- **Co-create**: reach the agreement in conversation so the client's answers change the terms, then write it down; as opposed to presenting a form.
- **Mutual fit**: the explicitly two-directional term that either party may end the arrangement, stated at the start so it can be used later.
- **Inclusion of others**: who else is part of the work and with what access, which is where confidentiality is decided in practice.
- **Referral commitment**: the agreed term that the coach will name anything outside scope, which makes a later referral a promise kept rather than a rejection.`,
    },
    {
      slug: "group-coaching",
      title: "16 · Group coaching, and what group delivery buys",
      section: "Section 4 · The agreement and the practice",
      body: `**Scope note, same as lesson 11.** "Group coaching" appears **zero times** in the 2026 NBHWC competency handbook. This is not credential coverage. It is here because BAM asked for it, and because group delivery is how most behavior-change work in the world is actually delivered.

**The closest good evidence.** Group-based education for type 2 diabetes has been studied heavily, and the review to know covers 47 studies and 8,533 participants. Compared with usual care, waiting list, or **individual** education, group-based programs produced greater reductions in HbA1c at 6 to 10 months (mean difference 3 mmol/mol, 0.3 percent), at 12 to 14 months (4 mmol/mol, 0.3 percent), at 18 months (8 mmol/mol, 0.7 percent), and at 36 to 48 months (10 mmol/mol, 0.9 percent), **but not at 24 months**. Outcomes also favored group delivery for fasting blood glucose, body weight, waist circumference, triglycerides, and diabetes knowledge, though not at every time point. Interventions facilitated by a single discipline, a multidisciplinary team, or professionals with peer supporters beat **peer-led** interventions on HbA1c (Odgers-Jewell et al., 2017).

**How to read that honestly.** It is education, not coaching, and diabetes, not general wellness, so it does not transfer automatically. The effect sizes are modest and the pattern across time points is uneven, including a null at 24 months in a run of positive results, which is exactly the kind of inconsistency this program refuses to smooth over elsewhere. What it does establish is that **group delivery is not a compromised version of individual delivery**, which is the assumption worth killing. On these outcomes it did at least as well, at a fraction of the practitioner time per participant. And the peer-led comparison says facilitation quality matters.

**What a group adds that an individual session cannot.** Modeling from someone one step ahead. Normalization, since hearing your problem in someone else's mouth does something no reassurance from a coach can. Commitment made in front of people, which is the social-anchor mechanism from WELL-99 built into the delivery structure. And plain reach: a coach's hours are finite, and per-person cost is a context variable from Section 1.

**What gets harder, specifically.** **Confidentiality now has holes you do not control**, because you can bind yourself and only ask the members. That must be explicit in the agreement, and the honest phrasing is that what is said in the room may leave it. **Individualization drops.** **Airtime is a resource**, and one dominant member can consume a session. **Comparison can harm**, since the fastest-moving member is a benchmark nobody chose. **A distressed member in a group** is a scope event with an audience: you still refer, and you do it without turning the group into the setting for it.

**Design decisions that follow.** Closed cohorts over open drop-in, if the goal is trust. Six to twelve people, small enough that everyone speaks. An explicit agreement covering confidentiality, airtime, and the no-advice-giving norm. A structured arc rather than open discussion. And an individual channel for anything that should not be in the room.

**Where it fails.** Groups are a poor fit for a client whose situation is genuinely unusual, for anyone in acute distress, and for anyone whose barrier is one they will not name in front of peers, which includes several of the most common determinants in Section 1.

:::reveal Give the Odgers-Jewell result including the part that complicates it. ||| 47 studies, 8,533 participants: group-based education beat controls and individual education on HbA1c at 6-10 months (0.3 percent), 12-14 months (0.3 percent), 18 months (0.7 percent), and 36-48 months (0.9 percent), but NOT at 24 months. Professional or peer-supported facilitation beat peer-led on HbA1c.

:::reveal What is the confidentiality problem in a group, and what is the honest phrasing? ||| You can bind yourself and only ask the members, so the guarantee has holes you do not control. The honest phrasing in the agreement is that what is said in the room may leave it.

## Vocabulary
- **Group delivery**: running a program with several participants at once, which this evidence shows is not a compromised version of individual delivery.
- **Peer-led**: facilitated by a fellow participant rather than a professional; the arm that did worse on HbA1c.
- **Airtime**: session speaking time treated as a finite shared resource that the facilitator allocates.
- **Closed cohort**: a group whose membership is fixed for the program, chosen over drop-in when trust is the goal.

## Sources
Odgers-Jewell, K., Ball, L. E., Kelly, J. T., Isenring, E. A., Reidlinger, D. P., & Thomas, R. (2017). Effectiveness of group-based self-management education for individuals with Type 2 diabetes: A systematic review with meta-analyses and meta-regression. *Diabetic Medicine, 34*(8), 1027-1039. https://pubmed.ncbi.nlm.nih.gov/28226200/`,
      recallContent: [
        {
          prompt: "Which two elements of the coaching agreement most directly set the cost of a client saying no?",
          answer:
            "Fees and cancellation terms, together with between-session availability and duration. Deciding them together, out loud, at the start is the largest single thing a coach can do about the power asymmetry.",
        },
        {
          prompt: "What does 'co-create' change about a coaching agreement, and when does the difference show?",
          answer:
            "The client's answers change the terms rather than the client signing a presented form. The difference shows the first time something goes wrong: a client who chose the cancellation window behaves differently from one who was told it.",
        },
      ],
    },
    {
      slug: "appreciative-inquiry",
      title: "17 · Appreciative Inquiry, and an honest evidence label",
      section: "Section 4 · The agreement and the practice",
      body: `The handbook's theory list names a **Positive Psychology Approach** (2.8) and **Appreciative Inquiry** (2.9). PERMA already appears in four WELL courses. Appreciative Inquiry appeared in none, so it gets its lesson, with a label on it.

**What it is.** An approach originating in organizational development that begins from what is working rather than from what is broken. Its familiar structure is four stages, usually given as Discovery (what is working at its best), Dream (what could be), Design (what to build), and Destiny or Delivery (doing it, and sustaining it).

**Translated to one client.** *Discovery*: when in your life did you eat, sleep, move, or connect the way you would like to? Not hypothetically, actually. *Dream*: what would an ordinary good week look like? *Design*: what is the smallest structure that would make that week likely? *Destiny*: what happens the first week it does not work?

**Why the frame does real work.** Most people arrive with a deficit narrative and a fluent account of their failures. Discovery asks for evidence they have already succeeded at the thing, which is usually available and rarely rehearsed. That evidence is the raw material for self-efficacy, which WELL-01 identifies as the strongest single predictor a coach can influence. It also produces a plan built from conditions that have already worked for this person, rather than from a template.

**Where it overlaps with what you already have.** Heavily. This is close to MI's affirmations, to solution-focused exception questions, and to strengths work in positive psychology. If you already ask "when has this gone well for you, and what was different then?", you are already doing the load-bearing part.

**The honest evidence label, which is why this lesson is short.** Appreciative Inquiry is well developed as a practice methodology in organizational settings, and this program could not locate randomized evidence for it as a **one-to-one health-coaching intervention** comparable to the trials behind motivational interviewing in WELL-01. So it is taught here as a **framing device with a plausible mechanism and a good fit to the rest of the program**, not as an evidence-backed protocol. Where the program can say "this is what the trials show", it does. Here it cannot, and pretending otherwise would break the rule the whole curriculum is built on. A source check is filed for exactly this question.

**How to use it without overclaiming.** Use the Discovery question freely, because it is a good question and costs nothing. Do not tell a client that Appreciative Inquiry is proven to change health behavior. Do not let a positive frame become a refusal to look at what is going wrong, which is the standard failure mode of strengths-based approaches and would collide with the honest-measurement discipline in WELL-99.

:::reveal What are the four stages, and what does each become for one client? ||| Discovery, Dream, Design, and Destiny. When has this actually gone well for you; what would an ordinary good week look like; what is the smallest structure that makes it likely; and what happens the first week it fails.

:::reveal What is this course's evidence label on Appreciative Inquiry, and why does the label matter? ||| A framing device with a plausible mechanism and good fit, not an evidence-backed protocol: no randomized evidence was located for it as a one-to-one health-coaching intervention comparable to the MI trials. The label matters because claiming otherwise would break the rule the curriculum is built on, and a source check is filed on the question.

## Vocabulary
- **Appreciative Inquiry**: a strengths-first approach from organizational development, structured as Discovery, Dream, Design, and Destiny.
- **Discovery question**: asking for an actual past instance in which the behavior went well, which supplies real self-efficacy evidence.
- **Deficit narrative**: the fluent account of failure most clients arrive with, and the thing Discovery is designed to interrupt.
- **Framing device**: this course's label for a method with a plausible mechanism but without comparable trial evidence.`,
    },
    {
      slug: "putting-context-to-work",
      title: "18 · Putting it to work, and what this course does not license",
      section: "Section 4 · The agreement and the practice",
      body: `Fourteen lessons, one job: making the rest of the program survive contact with an actual person in actual circumstances.

**The through-line.** Section 1 said a plan lands in conditions you do not control, so adapt the plan. Section 2 said the plan has to be understood before it can be adapted, and a third of adults cannot use what most coaches hand out. Section 3 said the person delivering it is in the room too, with structural power and unexamined defaults, and that the fixes that work are structural rather than introspective. Section 4 said all of it should be agreed out loud before it starts.

**The five things to actually change.** **Ask what a Tuesday looks like** before agreeing to any plan, which surfaces most of Section 1 in one question. **Teach-back everything you hand over**, which costs thirty seconds. **Run on behavioral yes-or-no markers** unless a computed one earns its place. **Standardize your process** so the same questions get asked of everyone, which is the only bias intervention with outcome-level support behind it. **Write the agreement down with the client**, covering all seven handbook elements plus scope, confidentiality, records, and the referral commitment.

**What this course explicitly does not license.** It does not make you a social worker, a benefits navigator, a therapist, a trauma specialist, or a spokesperson for anyone's community. It does not license diagnosing a client's circumstances, raising a determinant they did not raise, or teaching implicit-bias content as though the workshop version were supported. It does not license claiming Appreciative Inquiry is proven, or teach-back cuts readmissions, or that a coach mentioning a resource improves a clinical outcome. Every one of those is a sentence this course's own sources refuse.

**The two lessons that are not credential coverage, one final time.** Implicit bias (lesson 11) and group coaching (lesson 16) appear zero times in the 2026 handbook. They are in this course because they were asked for and because they are real parts of professional practice. They are taught from primary sources like everything else, which is why lesson 11 reads the way it does: the honest version of that literature is mostly null results, and a course that taught the workshop version instead would be doing exactly what this whole program was built to avoid.

**Where this sits relative to the credential.** These are the largest verified competency gaps that existed in the program after nine courses: 3.9.9, 3.8.3-3.8.5, 1.2.2.1-1.2.2.4, 1.3.2.6-1.3.2.7, 1.5.2, and 2.9. Covering them closes the gap between what the program taught and what the credential's own competency list requires. It does not confer the credential, and WELL-00 lesson 1 still governs: this is an independent study program, not affiliated with, endorsed by, or accredited by NASM or the NBHWC.

**One question to carry into the capstone.** The WELL-99 protocol you write is for you, and your own conditions are the ones you are least likely to see. Run Section 1 on yourself: which of your own constraints is currently being read as a character problem?

:::reveal Name the five operational changes this course asks for. ||| Ask what a Tuesday looks like before agreeing to a plan. Teach-back anything you hand over. Run on behavioral yes-or-no markers by default. Standardize the process so everyone gets the same questions. Write the agreement down with the client, covering the seven handbook elements plus scope, confidentiality, records, and the referral commitment.

:::reveal Which sentences does this course refuse, and what do they have in common? ||| That Appreciative Inquiry is proven, that teach-back cuts readmissions, and that a coach mentioning a resource improves a clinical outcome. Each is an overstatement of a source the course itself cites, which is the specific failure the whole curriculum was built to avoid.

## Vocabulary
- **The Tuesday question**: asking what an ordinary week actually contains before agreeing to any plan.
- **Standardized process**: asking every client the same questions and reviewing your own referral log, the bias response with outcome-level support.
- **Competency gap**: a handbook requirement with no coverage anywhere in the program, which is what this course was built from.
- **Not credential coverage**: the label carried by lessons 9 and 13, both of which appear zero times in the handbook.`,
    },
    {
      slug: "quiz-the-agreement",
      title: "19 · Knowledge check: the agreement and the practice",
      section: "Section 4 · The agreement and the practice",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What does competency 1.5.2 require?",
            options: ["Co-creating a coaching agreement", "Obtaining written informed consent before the first session takes place", "Reviewing the terms of the engagement at the midpoint and at its conclusion", "Documenting the client's goals in a form both parties sign at the outset"],
            correctIndex: 0,
            explanation: "It was the largest single hole the review found: neither 'coaching agreement' nor 'informed consent' appeared anywhere in the other nine courses.",
            sourceLessonSlug: "the-coaching-agreement",
          },
          {
            prompt: "Which seven elements does 1.5.2.1 name?",
            options: ["Logistics, fees, scheduling, inclusion of others, duration, feedback mechanisms, mutual fit", "Goals, methods, frequency, cost, confidentiality, records, and the termination procedure", "Scope, competence, consent, confidentiality, referral, documentation, and supervision", "Availability, cancellation, payment, communication, review, evaluation, and renewal"],
            correctIndex: 0,
            explanation: "Every one is a decision, and every one causes a problem later if left implicit.",
            sourceLessonSlug: "the-coaching-agreement",
          },
          {
            prompt: "What is the difference between co-creating and presenting an agreement?",
            options: ["The client's answers change the terms", "A co-created agreement is verbal, while a presented one is written and signed", "Co-creating takes a full session, while presenting can be done before the first one", "A co-created agreement can be revised later, while a presented one cannot"],
            correctIndex: 0,
            explanation: "A form the client signs is a contract; an agreement is reached in conversation and then written down.",
            sourceLessonSlug: "the-coaching-agreement",
          },
          {
            prompt: "When does the difference between the two show up?",
            options: ["The first time something goes wrong", "At renewal, when the client decides whether to continue the engagement", "In the first session, when the client's expectations become visible", "Never, if the terms themselves are identical in both versions"],
            correctIndex: 0,
            explanation: "A client who chose the cancellation window behaves differently from a client who was told it.",
            sourceLessonSlug: "the-coaching-agreement",
          },
          {
            prompt: "What is the most common unstated expectation in coaching?",
            options: ["Between-session availability", "How progress will be measured and what counts as success", "Whether the coach will contact the client's other professionals", "How long the whole engagement is expected to last"],
            correctIndex: 0,
            explanation: "And the most common source of resentment on both sides, which is why it belongs in the logistics element.",
            sourceLessonSlug: "the-coaching-agreement",
          },
          {
            prompt: "What does the logistics element cover?",
            options: ["Where, how, who initiates, lateness, and reply speed", "The equipment and space the client will need to complete the agreed plan", "The scheduling software, the payment system, and the note-taking method used", "The travel arrangements for any sessions held outside the usual setting"],
            correctIndex: 0,
            explanation: "Including how to reach you between sessions and how fast a reply is realistic.",
            sourceLessonSlug: "the-coaching-agreement",
          },
          {
            prompt: "What does the fees element require beyond the amount?",
            options: ["Inclusions, timing, cancellation cost, notice, and expiry", "A written invoice for each session and a receipt issued within seven days", "A sliding scale, so clients with fewer resources are not excluded from the service", "Confirmation that the client's insurer or employer will cover the agreed amount"],
            correctIndex: 0,
            explanation: "What a session includes, when payment happens, what a cancellation costs and how much notice avoids it, and whether unused sessions expire.",
            sourceLessonSlug: "the-coaching-agreement",
          },
          {
            prompt: "Why does the lesson insist on stating the fee out loud?",
            options: ["Discomfort about money trains the client to hide money problems", "Because verbal agreements about payment are more enforceable than written ones", "Because clients frequently misread written fee schedules and dispute them later", "Because the competency requires fees to be discussed rather than documented"],
            correctIndex: 0,
            explanation: "Which makes a Section 1 context variable invisible at exactly the moment it matters most.",
            sourceLessonSlug: "the-coaching-agreement",
          },
          {
            prompt: "What does 'inclusion of others' decide in practice?",
            options: ["Confidentiality", "Whether family members may attend sessions when the client wants support", "Which other professionals the coach is permitted to contact about the client", "How group sessions are structured if the client later joins a cohort"],
            correctIndex: 0,
            explanation: "Whether a partner, family member, physician, or trainer is part of this, in what role, with what access to what.",
            sourceLessonSlug: "the-coaching-agreement",
          },
          {
            prompt: "Why does duration belong in the agreement?",
            options: ["A relationship with no defined end drifts into dependence", "Because clients need to budget for the total cost before committing to the work", "Because behavior change has a known timeline that the agreement should reflect", "Because open-ended engagements are prohibited by most professional standards"],
            correctIndex: 0,
            explanation: "Which is a failure of coaching even when both parties enjoy it.",
            sourceLessonSlug: "the-coaching-agreement",
          },
          {
            prompt: "What happens without a named feedback mechanism?",
            options: ["A dissatisfied client cancels rather than complains", "The coach receives feedback only at the end, when it is too late to act on it", "Feedback arrives informally and is easy for the coach to discount as a passing mood", "The client raises problems with a third party rather than with the coach"],
            correctIndex: 0,
            explanation: "Given a named, scheduled mechanism, they tell you instead, which converts a silent exit into information.",
            sourceLessonSlug: "the-coaching-agreement",
          },
          {
            prompt: "What makes mutual fit different from the other elements?",
            options: ["It is explicitly two-directional", "It is the only element that cannot be written down in advance of the work", "It is assessed at the end of the engagement rather than at its beginning", "It applies to the coach's competence rather than to the client's circumstances"],
            correctIndex: 0,
            explanation: "Either party may decide this is not the right match, and saying so at the start makes the later conversation possible.",
            sourceLessonSlug: "the-coaching-agreement",
          },
          {
            prompt: "Which additions does the lesson make beyond the handbook list?",
            options: ["Scope, confidentiality limits, records, and the referral commitment", "Cancellation policy, late arrival, session length, and rescheduling procedure", "Goals, milestones, review dates, and the criteria for a successful engagement", "Emergency contacts, medical clearance, insurance, and liability limitations"],
            correctIndex: 0,
            explanation: "Scope in one plain sentence, the specific circumstances in which confidentiality would be broken, what records are kept and for how long, and the promise to name anything out of scope.",
            sourceLessonSlug: "the-coaching-agreement",
          },
          {
            prompt: "What does the referral commitment do to a later referral?",
            options: ["Turns it into a term the client already agreed to", "Removes the coach's discretion about when a referral is appropriate", "Requires the coach to maintain a list of named local professionals", "Obliges the client to accept the referral once it has been made"],
            correctIndex: 0,
            explanation: "Rather than a rejection, which is how an unannounced referral can land.",
            sourceLessonSlug: "the-coaching-agreement",
          },
          {
            prompt: "Why does the lesson call every agreement element a power lever?",
            options: ["Fees, availability, cancellation, and duration set the cost of saying no", "Because the coach drafts them, which is itself an exercise of authority", "Because they can be revised only with the coach's consent once agreed", "Because they determine how much of the relationship the client controls"],
            correctIndex: 0,
            explanation: "Deciding them together, out loud, at the start is the largest single thing a coach can do about the asymmetry in lesson 10.",
            sourceLessonSlug: "the-coaching-agreement",
          },
          {
            prompt: "How many times does 'group coaching' appear in the 2026 handbook?",
            options: ["Zero", "Once, in the competency covering delivery formats and their selection", "Twice, in the ethics domain and again in the coaching-process domain", "Several times, since group delivery is the most common professional setting"],
            correctIndex: 0,
            explanation: "Same status as implicit bias: not credential coverage, in the course because BAM asked for it.",
            sourceLessonSlug: "group-coaching",
          },
          {
            prompt: "How large was the Odgers-Jewell review?",
            options: ["47 studies, 8,533 participants", "53 studies covering 5,094 adults recruited through diabetes clinics", "Twelve studies of a single education technique in chronic-disease populations", "492 studies with 87,418 participants across many intervention types"],
            correctIndex: 0,
            explanation: "Described in 53 publications, all of group-based education for type 2 diabetes measuring HbA1c with at least six months of follow-up.",
            sourceLessonSlug: "group-coaching",
          },
          {
            prompt: "What did group-based education beat, in that review?",
            options: ["Usual care, waiting list, AND individual education", "Usual care only, with no comparison against individually delivered programs", "Individual education only, with no usual-care comparison available", "Peer-led group programs, but not professionally led individual programs"],
            correctIndex: 0,
            explanation: "Which is the finding that kills the assumption that group delivery is a compromised version of individual delivery.",
            sourceLessonSlug: "group-coaching",
          },
          {
            prompt: "Give the HbA1c differences by time point.",
            options: ["0.3 percent at 6-10 and 12-14 months, 0.7 at 18, 0.9 at 36-48", "0.9 percent at 6-10 months, declining steadily to 0.3 percent by 48 months", "A constant 0.5 percent difference sustained across every measured time point", "0.3 percent at every time point, with no evidence of change over the follow-up"],
            correctIndex: 0,
            explanation: "3, 4, 8, and 10 mmol/mol respectively.",
            sourceLessonSlug: "group-coaching",
          },
          {
            prompt: "Which time point did NOT favor group education?",
            options: ["24 months", "18 months, where the confidence interval crossed the null value", "6 to 10 months, where the difference was smallest and not significant", "36 to 48 months, where too few studies remained to reach significance"],
            correctIndex: 0,
            explanation: "A null sitting in the middle of a run of positive results, which is exactly the kind of inconsistency the program refuses to smooth over.",
            sourceLessonSlug: "group-coaching",
          },
          {
            prompt: "What did the facilitation comparison find?",
            options: ["Professional or peer-supported facilitation beat peer-led", "Peer-led programs matched professionally led programs on every measured outcome", "Multidisciplinary teams beat single-discipline facilitation on all outcomes", "Facilitation type made no difference once study quality was accounted for"],
            correctIndex: 0,
            explanation: "Single discipline, multidisciplinary teams, or professionals with peer supporters all produced better HbA1c than peer-led interventions.",
            sourceLessonSlug: "group-coaching",
          },
          {
            prompt: "Which secondary outcomes favored group delivery?",
            options: ["Fasting glucose, weight, waist, triglycerides, knowledge", "Blood pressure, cholesterol, medication adherence, and quality of life", "Self-efficacy and diabetes distress, but no physical measure at any time point", "Only diabetes knowledge, with no difference on any clinical or lifestyle measure"],
            correctIndex: 0,
            explanation: "Though not at all time points, which is the same unevenness as the primary outcome.",
            sourceLessonSlug: "group-coaching",
          },
          {
            prompt: "What are the two honest limits on transferring this evidence?",
            options: ["It is education, not coaching, and diabetes, not general wellness", "It is observational, and the participants were volunteers rather than typical patients", "It is short-term, and the outcomes were self-reported rather than measured", "It is from one country, and the group sizes were much larger than a coach would run"],
            correctIndex: 0,
            explanation: "So it does not transfer automatically. What it establishes is that group delivery is not inherently compromised.",
            sourceLessonSlug: "group-coaching",
          },
          {
            prompt: "What assumption does this evidence kill?",
            options: ["That group delivery is a watered-down version of individual work", "That group programs are cheaper to run than individual programs are", "That peer-led groups perform as well as professionally facilitated ones", "That diabetes education generalizes to other chronic conditions"],
            correctIndex: 0,
            explanation: "On these outcomes group delivery did at least as well, at a fraction of the practitioner time per participant.",
            sourceLessonSlug: "group-coaching",
          },
          {
            prompt: "What does a group add that an individual session cannot?",
            options: ["Modeling, normalization, public commitment, and reach", "Faster progress, because members compete with one another to improve", "Cheaper delivery, which is the only advantage the evidence actually supports", "Longer contact time, since group sessions run longer than individual ones"],
            correctIndex: 0,
            explanation: "Hearing your problem in someone else's mouth does something no reassurance from a coach can, and commitment in front of people is WELL-99's social anchor built into the structure.",
            sourceLessonSlug: "group-coaching",
          },
          {
            prompt: "What is the confidentiality problem in a group?",
            options: ["You can bind yourself and only ask the members", "Group members are not covered by professional confidentiality obligations at all", "Records of group sessions cannot be kept without every member's written consent", "Anything said in a group must be excluded from the coach's individual notes"],
            correctIndex: 0,
            explanation: "The honest phrasing in the agreement is that what is said in the room may leave it.",
            sourceLessonSlug: "group-coaching",
          },
          {
            prompt: "What is 'airtime', and why does it need managing?",
            options: ["Speaking time as a shared resource one member can consume", "The total session length available once administration has been completed", "The proportion of the session spent on content rather than on discussion", "The time each member spends reporting on the previous week's actions"],
            correctIndex: 0,
            explanation: "One dominant member can consume a session, which is a facilitation failure rather than a member problem.",
            sourceLessonSlug: "group-coaching",
          },
          {
            prompt: "How can comparison harm in a group?",
            options: ["The fastest member becomes a benchmark nobody chose", "Members conceal setbacks in order to appear as successful as the others", "Members adopt each other's plans regardless of their own circumstances", "Members judge the coach by how the group's slowest member is progressing"],
            correctIndex: 0,
            explanation: "Which is a specific cost of the modeling benefit, and the reason a facilitator manages the frame rather than letting it emerge.",
            sourceLessonSlug: "group-coaching",
          },
          {
            prompt: "A group member becomes distressed. What is different about it?",
            options: ["It is a scope event with an audience", "It is outside the coach's scope in a way it would not be individually", "It requires the group to be ended early and rescheduled for another day", "It should be handled by the group, since peer support is a stated benefit"],
            correctIndex: 0,
            explanation: "You still refer, and you do it without turning the group into the setting for it.",
            sourceLessonSlug: "group-coaching",
          },
          {
            prompt: "Which design decisions follow from the group evidence?",
            options: ["Closed cohorts, six to twelve people, explicit norms, structured arc", "Open drop-in, large groups, informal norms, and open discussion", "Peer-led sessions, since peer support is the mechanism the evidence identifies", "Matched cohorts, so members share a condition, an age band, and a goal"],
            correctIndex: 0,
            explanation: "Plus an individual channel for anything that should not be in the room.",
            sourceLessonSlug: "group-coaching",
          },
          {
            prompt: "Where do groups fail?",
            options: ["Unusual situations, acute distress, and unnameable barriers", "Clients who prefer working alone, and those with demanding schedules", "Long engagements, since group cohesion decays after several months", "Mixed-ability groups, where the range of starting points is too wide"],
            correctIndex: 0,
            explanation: "The last of those includes several of the most common determinants from Section 1, which a client will not name in front of peers.",
            sourceLessonSlug: "group-coaching",
          },
          {
            prompt: "Why choose a closed cohort over drop-in?",
            options: ["Trust", "Attendance, which is more consistent when membership is fixed", "Cost, since closed cohorts require fewer facilitator hours overall", "Evidence, since the review included only closed-cohort programs"],
            correctIndex: 0,
            explanation: "If the goal is trust, membership stability is the mechanism, and six to twelve keeps everyone speaking.",
            sourceLessonSlug: "group-coaching",
          },
          {
            prompt: "Which two handbook items does the Appreciative Inquiry lesson cover?",
            options: ["2.8 Positive Psychology Approach and 2.9 Appreciative Inquiry", "1.2.2.3 cultural humility and 1.3.2.6 neutralizing power dynamics", "3.8.5 health literacy and 3.9.9 adapting plans for determinants", "1.5.2 the coaching agreement and 1.3.2.7 repairing discord"],
            correctIndex: 0,
            explanation: "PERMA already appears in four WELL courses; Appreciative Inquiry appeared in none.",
            sourceLessonSlug: "appreciative-inquiry",
          },
          {
            prompt: "Name the four Appreciative Inquiry stages.",
            options: ["Discovery, Dream, Design, Destiny", "Assess, Analyze, Advise, Act, in the sequence taught for clinical consultations", "Explore, Envision, Execute, Evaluate, in the standard coaching-cycle formulation", "Notice, Name, Negotiate, Navigate, following the appreciative-practice literature"],
            correctIndex: 0,
            explanation: "Sometimes given as Delivery rather than Destiny for the last stage.",
            sourceLessonSlug: "appreciative-inquiry",
          },
          {
            prompt: "What does Discovery ask, for one client?",
            options: ["When have you actually done this well?", "What would need to be true for you to succeed at this over the next year?", "What are your strengths, as you would describe them to someone who knows you", "Which parts of your current routine would you most like to keep unchanged"],
            correctIndex: 0,
            explanation: "Not hypothetically, actually. That evidence is usually available and rarely rehearsed.",
            sourceLessonSlug: "appreciative-inquiry",
          },
          {
            prompt: "Why does the Discovery question do real work?",
            options: ["It supplies self-efficacy evidence the client already has", "It builds rapport by beginning the relationship on a positive footing", "It reveals which of the six pillars the client is already strongest in", "It identifies the conditions that will need to be recreated artificially"],
            correctIndex: 0,
            explanation: "Most people arrive with a deficit narrative and a fluent account of their failures. WELL-01 identifies self-efficacy as the strongest predictor a coach can influence.",
            sourceLessonSlug: "appreciative-inquiry",
          },
          {
            prompt: "What is a deficit narrative?",
            options: ["The fluent account of failure most clients arrive with", "A description of what a client lacks in resources rather than in motivation", "A plan built entirely from what needs correcting rather than what works", "The coach's own framing of the client's situation as a set of problems"],
            correctIndex: 0,
            explanation: "Which is the thing the Discovery question is designed to interrupt.",
            sourceLessonSlug: "appreciative-inquiry",
          },
          {
            prompt: "What does Appreciative Inquiry overlap with in the existing program?",
            options: ["MI affirmations and solution-focused exception questions", "The transtheoretical model's stages and their matched processes of change", "Implementation intentions and the cue-based habit work from WELL-01", "The measurement discipline and honest effect sizes from WELL-99"],
            correctIndex: 0,
            explanation: "If you already ask 'when has this gone well for you, and what was different then?', you are doing the load-bearing part.",
            sourceLessonSlug: "appreciative-inquiry",
          },
          {
            prompt: "What is this course's evidence label on Appreciative Inquiry?",
            options: ["A framing device with a plausible mechanism", "An evidence-backed protocol comparable to motivational interviewing", "A discredited approach retained only because the handbook names it", "An organizational method with no applicability to individual coaching"],
            correctIndex: 0,
            explanation: "The program could not locate randomized evidence for it as a one-to-one health-coaching intervention comparable to the MI trials.",
            sourceLessonSlug: "appreciative-inquiry",
          },
          {
            prompt: "What did the course do about that evidence gap?",
            options: ["Filed a source check on the question", "Removed the topic, since it cannot be taught to the program's standard", "Cited the organizational literature as though it applied to individual coaching", "Marked it as contested, alongside the microaggression dispute in Section 3"],
            correctIndex: 0,
            explanation: "Which is the rule the whole curriculum runs on: a hedge with no check is a hedge nobody will ever clear.",
            sourceLessonSlug: "appreciative-inquiry",
          },
          {
            prompt: "What may a coach NOT say about Appreciative Inquiry?",
            options: ["That it is proven to change health behavior", "That it begins from what is working rather than from what is broken", "That it originated in organizational development rather than in clinical practice", "That its Discovery question overlaps with affirmations in motivational interviewing"],
            correctIndex: 0,
            explanation: "Where the program can say 'this is what the trials show', it does. Here it cannot.",
            sourceLessonSlug: "appreciative-inquiry",
          },
          {
            prompt: "What is the standard failure mode of strengths-based approaches?",
            options: ["A positive frame becoming a refusal to look at what is wrong", "An emphasis on past success that discourages attempting anything new", "A focus on the client's traits rather than on their current behavior", "An assumption that strengths transfer between unrelated life domains"],
            correctIndex: 0,
            explanation: "Which would collide directly with the honest-measurement discipline in WELL-99.",
            sourceLessonSlug: "appreciative-inquiry",
          },
          {
            prompt: "Where does Appreciative Inquiry come from?",
            options: ["Organizational development", "Clinical psychology, as a variant of solution-focused brief therapy", "Public health, as a community-engagement methodology for health promotion", "Positive psychology, as the applied arm of the PERMA well-being model"],
            correctIndex: 0,
            explanation: "Which is part of why the health-coaching evidence base for it is thinner than the practice literature suggests.",
            sourceLessonSlug: "appreciative-inquiry",
          },
          {
            prompt: "State this course's through-line in one sentence.",
            options: ["Conditions, then comprehension, then the coach, then the agreement", "Determinants, literacy, bias, and business, in order of how often they arise", "The competencies the handbook lists, taught in the order it lists them", "Evidence, technique, ethics, and practice management, as four separate topics"],
            correctIndex: 0,
            explanation: "A plan lands in conditions; it has to be understood; the person delivering it is in the room; and all of it should be agreed out loud first.",
            sourceLessonSlug: "putting-context-to-work",
          },
          {
            prompt: "Name the five operational changes this course asks for.",
            options: ["Ask about the Tuesday, teach-back, behavioral markers, standardize, write the agreement", "Screen, refer, document, review, and evaluate at the close of each engagement", "Assess literacy, adapt materials, examine bias, manage power, and contract clearly", "Reduce the dose, extend the timeline, add support, measure less, and review monthly"],
            correctIndex: 0,
            explanation: "One from each section, plus the standardization that carries the only bias intervention with outcome-level support.",
            sourceLessonSlug: "putting-context-to-work",
          },
          {
            prompt: "What does the Tuesday question surface?",
            options: ["Most of Section 1, in one question", "Whether the client has time for the plan as it is currently written", "The client's habitual weekly rhythm, which the plan should be anchored to", "Which day of the week the client is most likely to complete an action"],
            correctIndex: 0,
            explanation: "Asking what an ordinary week actually contains, before agreeing to any plan.",
            sourceLessonSlug: "putting-context-to-work",
          },
          {
            prompt: "Which does this course NOT license?",
            options: ["Diagnosing a client's circumstances or raising an unraised determinant", "Asking about transport in the ordinary flow of a coaching conversation", "Keeping a short list of local resources to name when a client raises a need", "Adapting an agreed plan so it assumes a constraint will remain in place"],
            correctIndex: 0,
            explanation: "Along with becoming a social worker, navigator, therapist, trauma specialist, or spokesperson for anyone's community.",
            sourceLessonSlug: "putting-context-to-work",
          },
          {
            prompt: "Which three sentences does the closing lesson refuse?",
            options: ["AI is proven; teach-back cuts readmissions; mentioning a resource improves outcomes", "Bias is real; group delivery works; literacy affects hospitalization rates", "Determinants matter; power exists in the room; agreements should be co-created", "Coaching is unregulated; the credential is optional; the program grants no credential"],
            correctIndex: 0,
            explanation: "Each is an overstatement of a source the course itself cites, which is the specific failure the curriculum was built to avoid.",
            sourceLessonSlug: "putting-context-to-work",
          },
          {
            prompt: "Which two lessons are not credential coverage?",
            options: ["Implicit bias and group coaching", "Cultural humility and the coaching agreement", "Appreciative Inquiry and trauma-informed practice", "Health literacy and social determinants of health"],
            correctIndex: 0,
            explanation: "Both appear zero times in the 2026 handbook, and both say so in their own opening lines.",
            sourceLessonSlug: "putting-context-to-work",
          },
          {
            prompt: "Why does lesson 11 read the way it does?",
            options: ["The honest version of that literature is mostly null results", "Because the topic is contested and the course presents both sides equally", "Because BAM asked for a critical rather than a practical treatment of it", "Because the handbook does not cover it, so no positive account was available"],
            correctIndex: 0,
            explanation: "A course teaching the workshop version instead would be doing exactly what the program was built to avoid.",
            sourceLessonSlug: "putting-context-to-work",
          },
          {
            prompt: "Which competency locators does this course close?",
            options: ["3.9.9, 3.8.3-3.8.5, 1.2.2.1-1.2.2.4, 1.3.2.6-1.3.2.7, 1.5.2, and 2.9", "The whole of Domain 1, which the earlier courses had not addressed at all", "Every locator in the handbook that the nine earlier courses did not mention", "The ethics and scope locators, which WELL-00 had covered only in outline"],
            correctIndex: 0,
            explanation: "The largest verified competency gaps that existed after nine courses.",
            sourceLessonSlug: "putting-context-to-work",
          },
          {
            prompt: "Does closing those gaps confer anything?",
            options: ["No; WELL-00 lesson 1 still governs", "Yes, it satisfies the content requirement for board-certification eligibility", "Yes, it makes the program equivalent to an approved training program", "Partially, in that it covers the competencies the written examination tests"],
            correctIndex: 0,
            explanation: "An independent study program, not affiliated with, endorsed by, or accredited by NASM or the NBHWC.",
            sourceLessonSlug: "putting-context-to-work",
          },
          {
            prompt: "What question does the closing lesson send into the capstone?",
            options: ["Which of your own constraints reads as a character problem?", "Which pillar of your own protocol is currently the weakest?", "Which competency in this course will be hardest for you to practice?", "Which of your clients would benefit most from a group format?"],
            correctIndex: 0,
            explanation: "Run Section 1 on yourself: your own conditions are the ones you are least likely to see.",
            sourceLessonSlug: "putting-context-to-work",
          },
          {
            prompt: "Which bias intervention has outcome-level support behind it?",
            options: ["Standardizing the process", "Annual implicit-association testing with tracked results", "Extended contact training delivered over several sessions", "Reflective supervision focused on the coach's own reactions"],
            correctIndex: 0,
            explanation: "It is the only one of the four with support at the level of what the coach actually does, which is why it is one of the five changes.",
            sourceLessonSlug: "putting-context-to-work",
          },
          {
            prompt: "What is the default metric type after this course?",
            options: ["Behavioral yes-or-no, unless a computed one earns its place", "Capacity measures taken once or twice a year, as WELL-99 recommends", "Whatever the client's device already produces without extra effort", "A weighted composite, so no single number dominates the review"],
            correctIndex: 0,
            explanation: "Which is the numeracy lesson's adaptation promoted to a standing default.",
            sourceLessonSlug: "putting-context-to-work",
          },
          {
            prompt: "What does the agreement now have to cover, in full?",
            options: ["The seven handbook elements plus scope, confidentiality, records, referral", "The seven handbook elements, which are sufficient as the competency states them", "Fees and cancellation, which are the only terms that cause disputes in practice", "Whatever the client asks about, since anything unasked is not yet a concern"],
            correctIndex: 0,
            explanation: "Written down with the client, which is the fifth of the five operational changes.",
            sourceLessonSlug: "putting-context-to-work",
          },
          {
            prompt: "A client asks whether their partner can join sessions. Which element covers it?",
            options: ["Inclusion of others", "Logistics, since it concerns who is physically present in the session", "Confidentiality, since a third party changes what may be discussed", "Mutual fit, since it changes the nature of the coaching relationship"],
            correctIndex: 0,
            explanation: "In what role, and with what access to what, which is where confidentiality gets decided in practice.",
            sourceLessonSlug: "the-coaching-agreement",
          },
          {
            prompt: "A group member repeatedly dominates the session. Whose problem is it?",
            options: ["The facilitator's, since airtime is allocated", "The member's, and it should be addressed with them privately after the session", "The group's, since peer norms are the mechanism that regulates participation", "Nobody's, provided the other members do not raise it as a concern"],
            correctIndex: 0,
            explanation: "Airtime is a resource, and letting it be consumed is a facilitation failure rather than a member trait.",
            sourceLessonSlug: "group-coaching",
          },
          {
            prompt: "Which client is a poor fit for a group?",
            options: ["One whose barrier they will not name in front of peers", "One who has never taken part in a group program before", "One whose goal differs from the other members' stated goals", "One who is progressing faster than the rest of the cohort"],
            correctIndex: 0,
            explanation: "Which includes several of the most common determinants from Section 1, alongside unusual situations and acute distress.",
            sourceLessonSlug: "group-coaching",
          },
          {
            prompt: "How should the group's confidentiality term be worded?",
            options: ["What is said in the room may leave it", "Everything said in the group is strictly confidential to its members", "Members agree not to repeat anything said, and the coach will enforce this", "Confidentiality applies to the coach's records but not to the discussion"],
            correctIndex: 0,
            explanation: "Because you can bind yourself and only ask the members, and pretending otherwise is a promise you cannot keep.",
            sourceLessonSlug: "group-coaching",
          },
          {
            prompt: "What does 'peer support' as a SAMHSA principle license in a plan?",
            options: ["Connection to others in similar situations", "Substituting a peer-led group for professional coaching sessions", "Asking a client's friend to monitor whether they completed their actions", "Recruiting former clients to mentor new ones within the practice"],
            correctIndex: 0,
            explanation: "A legitimate part of a plan, and the same lever the capstone identifies as the strongest single one.",
            sourceLessonSlug: "group-coaching",
          },
          {
            prompt: "Why is the group's cost per participant a Section 1 variable?",
            options: ["Affordability is a determinant", "Because group programs require less travel than individual sessions do", "Because cost predicts adherence more strongly than any other single factor", "Because employers fund group programs more readily than individual ones"],
            correctIndex: 0,
            explanation: "A coach's hours are finite, and reach at a lower price point is how the evidence connects to the first section of this course.",
            sourceLessonSlug: "group-coaching",
          },
          {
            prompt: "What is the honest one-line reading of the group evidence?",
            options: ["Group delivery did at least as well, for less practitioner time", "Group delivery is superior to individual delivery for chronic-disease outcomes", "Group delivery works only where a professional rather than a peer facilitates", "Group delivery has been tested too narrowly for any conclusion to be drawn"],
            correctIndex: 0,
            explanation: "On these outcomes, in this population, with the 24-month null and the education-not-coaching caveat both stated.",
            sourceLessonSlug: "group-coaching",
          },
          {
            prompt: "What does Dream ask, in the one-client translation?",
            options: ["What an ordinary good week looks like", "What the client would do if no constraint at all applied to them", "What the client's life would look like five years after full success", "What the client most wants to be able to do that they cannot do now"],
            correctIndex: 0,
            explanation: "Ordinary is doing the work: it keeps the stage from producing a fantasy the Design stage cannot build toward.",
            sourceLessonSlug: "appreciative-inquiry",
          },
          {
            prompt: "What does Destiny ask, in the one-client translation?",
            options: ["What happens the first week it does not work", "How the client will sustain the change once coaching has ended", "Who else needs to know about the plan in order to support it", "What the client will do to celebrate reaching the agreed goal"],
            correctIndex: 0,
            explanation: "Which is the same question WELL-99's stop conditions and minimum versions exist to answer.",
            sourceLessonSlug: "appreciative-inquiry",
          },
          {
            prompt: "What does Design ask?",
            options: ["The smallest structure making that week likely", "The full weekly schedule required to reach the stated goal", "Which of the six pillars the client should address first", "How the plan will be measured and reviewed over time"],
            correctIndex: 0,
            explanation: "Smallest is the operative word, and it connects directly to the minimum version in the capstone.",
            sourceLessonSlug: "appreciative-inquiry",
          },
          {
            prompt: "Which element of the agreement most directly addresses dependence?",
            options: ["Duration", "Mutual fit, since either party may end the relationship", "Feedback mechanisms, since dissatisfaction surfaces early", "Fees, since the ongoing cost limits how long clients continue"],
            correctIndex: 0,
            explanation: "How long the arrangement runs, when it is reviewed, and what ending looks like.",
            sourceLessonSlug: "the-coaching-agreement",
          },
          {
            prompt: "What is wrong with an agreement that omits confidentiality limits?",
            options: ["The client learns the limits at the worst possible moment", "It exposes the coach to liability if a disclosure later has to be made", "It leaves the coach unable to consult a supervisor about a difficult case", "It prevents the coach from communicating with the client's clinicians"],
            correctIndex: 0,
            explanation: "The specific circumstances in which you would break confidentiality belong in the agreement, not in the conversation where you break it.",
            sourceLessonSlug: "the-coaching-agreement",
          },
          {
            prompt: "Which two things did the review find missing entirely from nine courses?",
            options: ["'Coaching agreement' and 'informed consent'", "'Social determinants' and 'health literacy', which this course now covers", "'Cultural humility' and 'power imbalance', which Section 3 now covers", "'Appreciative Inquiry' and 'positive psychology', which the theory list names"],
            correctIndex: 0,
            explanation: "Zero hits for both, which is why the agreement lesson calls it the largest single hole.",
            sourceLessonSlug: "the-coaching-agreement",
          },
          {
            prompt: "What is the scope sentence in the agreement for?",
            options: ["Stating plainly what you do and do not do", "Protecting the coach from claims arising outside the agreed work", "Satisfying the insurer's requirement for a documented scope of practice", "Explaining the difference between coaching and therapy to the client"],
            correctIndex: 0,
            explanation: "Including that you do not diagnose, treat, or interpret clinical measurements, which is WELL-00's line written into the contract.",
            sourceLessonSlug: "the-coaching-agreement",
          },
          {
            prompt: "What records terms belong in the agreement?",
            options: ["What is kept, where, for how long, and who can see it", "A commitment to destroy all notes at the end of the engagement", "The client's right to request a copy of everything held about them", "The systems used, so the client can verify their security independently"],
            correctIndex: 0,
            explanation: "It is also the transparency principle from the trauma-informed lesson, said before it happens rather than when asked.",
            sourceLessonSlug: "the-coaching-agreement",
          },
          {
            prompt: "Why does the course place the agreement in the final section rather than the first?",
            options: ["Every earlier lesson supplies a term it should contain", "Because it is administrative, and the substantive material comes first", "Because the handbook lists it last among the competencies covered", "Because a coach cannot write one until they have client experience"],
            correctIndex: 0,
            explanation: "Scope, confidentiality, records, referral, power, and data all arrive from the earlier lessons, which is what makes the agreement the assembly point.",
            sourceLessonSlug: "the-coaching-agreement",
          },
          {
            prompt: "Which claim about group coaching would this course refuse?",
            options: ["'Groups work better than one-to-one coaching'", "'Group-based diabetes education beat individual education on HbA1c in this review'", "'The 24-month time point did not favor group delivery'", "'Peer-led interventions did worse than professionally facilitated ones'"],
            correctIndex: 0,
            explanation: "The evidence is diabetes education, not coaching, and the pattern across time points is uneven. At least as good is the defensible reading.",
            sourceLessonSlug: "group-coaching",
          },
          {
            prompt: "A client says a plan is fine but nothing gets done. Which section applies?",
            options: ["Possibly all four, and the order of checking matters", "Section 1 only, since a completed plan means it was understood", "Section 3 only, since agreement without action is the compliance tell", "Section 4 only, since the agreement failed to set expectations"],
            correctIndex: 0,
            explanation: "Possible, understood, safe to disagree about, and actually agreed. Checking in that order is what the course assembles.",
            sourceLessonSlug: "putting-context-to-work",
          },
          {
            prompt: "What is the single sentence describing what this course adds to the program?",
            options: ["It makes the other nine survive contact with a real person", "It covers the credential competencies the others omitted", "It adds the business and ethics material a practice needs", "It teaches the interpersonal skills the science courses assumed"],
            correctIndex: 0,
            explanation: "In actual circumstances, which is the closing lesson's own summary of the job.",
            sourceLessonSlug: "putting-context-to-work",
          },
          {
            prompt: "What does the scheduling element cover?",
            options: ["Frequency, length, how far ahead, and rescheduling", "The days and times the coach is available for appointments each week", "Whether sessions are held in person or remotely, and who chooses", "The calendar system used and how reminders are sent to the client"],
            correctIndex: 0,
            explanation: "It is separate from logistics because it is about the shape of the engagement rather than the mechanics of one session.",
            sourceLessonSlug: "the-coaching-agreement",
          },
          {
            prompt: "Why does the lesson call an unwritten agreement a problem rather than an informality?",
            options: ["Every element causes a problem later if left implicit", "Because professional bodies require written agreements for all engagements", "Because clients forget verbal terms within a few weeks of agreeing them", "Because an unwritten agreement cannot be revised without disputes"],
            correctIndex: 0,
            explanation: "Eleven courses of technique were built on top of a relationship nobody had defined.",
            sourceLessonSlug: "the-coaching-agreement",
          },
          {
            prompt: "What did the group review require of included studies?",
            options: ["HbA1c measured, with follow-up of at least six months", "Random allocation and a minimum sample of one hundred participants", "Delivery by a health professional rather than a peer facilitator", "A comparison against individual education rather than usual care"],
            correctIndex: 0,
            explanation: "Group-based education programs for adults with type 2 diabetes, searched across six electronic databases.",
            sourceLessonSlug: "group-coaching",
          },
          {
            prompt: "Which stage of Appreciative Inquiry supplies the raw material for self-efficacy?",
            options: ["Discovery", "Dream, since imagining success builds the belief that it is possible", "Design, since a workable structure makes success more likely to occur", "Destiny, since sustaining a change is what proves the belief was warranted"],
            correctIndex: 0,
            explanation: "It asks for evidence the client has already succeeded at the thing, which is usually available and rarely rehearsed.",
            sourceLessonSlug: "appreciative-inquiry",
          },
          {
            prompt: "What makes the closing lesson's list of refusals coherent?",
            options: ["Each overstates a source the course itself cites", "Each concerns a topic outside a coach's scope of practice", "Each was claimed by the adversarial review and could not be verified", "Each belongs to the two lessons that are not credential coverage"],
            correctIndex: 0,
            explanation: "Which is the specific failure the whole curriculum was built to avoid, and the reason the list appears in the final lesson.",
            sourceLessonSlug: "putting-context-to-work",
          },
          {
            prompt: "Which is the correct order for diagnosing a plan that is not happening?",
            options: ["Possible, understood, safe to disagree about, actually agreed", "Agreed, understood, possible, and finally safe to disagree about", "Understood, agreed, possible, and finally safe to disagree about", "Safe to disagree about, possible, agreed, and finally understood"],
            correctIndex: 0,
            explanation: "It follows the course's own section order, and checking out of order wastes the session on the wrong problem.",
            sourceLessonSlug: "putting-context-to-work",
          },
          {
            prompt: "What does this course say about becoming a spokesperson for a community?",
            options: ["It is not licensed by anything in these fifteen lessons", "It is appropriate where a coach shares the community's background", "It follows naturally from the non-paternalistic partnership element", "It is permitted provided the community has asked the coach to do so"],
            correctIndex: 0,
            explanation: "It sits in the same refusal list as case management, therapy, and trauma specialism.",
            sourceLessonSlug: "putting-context-to-work",
          },
        ],
      },
    },
  ],
};
