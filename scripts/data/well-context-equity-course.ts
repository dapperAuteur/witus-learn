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
    // ── Section 2 ────────────────────────────────────────────────────────────────────────────
    {
      slug: "who-can-use-your-materials",
      title: "4 · A third of adults cannot use what you hand them",
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
      title: "5 · Teach-back, and how well it actually works",
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
      title: "6 · Numeracy: the half nobody adjusts for",
      section: "Section 2 · Being understood",
      body: `Competency 3.8.5 names health literacy **and numeracy**, and the second word gets dropped in practice. It should not be, because coaching is unusually numeric.

**What a coach actually asks people to do with numbers.** Read a step count and compare it to a target. Interpret a percentage of body weight. Understand a risk reduction. Convert minutes per week into sessions. Read a food label per serving rather than per package. Judge whether a trend over four weeks means anything. Each of those is a quantitative task, and the NAAL evidence in lesson 4 measured exactly this kind of task.

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
    // ── Section 3 ────────────────────────────────────────────────────────────────────────────
    {
      slug: "cultural-humility",
      title: "7 · Cultural humility, and why it replaced competence",
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
      title: "8 · Power in the room, and how to lower it",
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
      title: "9 · Implicit bias, taught from the null results",
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
      title: "10 · Discord, microaggressions, and the repair",
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
      title: "11 · History, marginalization, and the trauma boundary",
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
    // ── Section 4 ────────────────────────────────────────────────────────────────────────────
    {
      slug: "the-coaching-agreement",
      title: "12 · The agreement that should exist before any of this",
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

**Where this connects to the rest of the course.** Every element above is a power lever. Fees, availability, cancellation, and duration all set the cost of the client saying no. Deciding them together, out loud, at the start, is the largest single thing a coach can do about the asymmetry in lesson 8.

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
      title: "13 · Group coaching, and what group delivery buys",
      section: "Section 4 · The agreement and the practice",
      body: `**Scope note, same as lesson 9.** "Group coaching" appears **zero times** in the 2026 NBHWC competency handbook. This is not credential coverage. It is here because BAM asked for it, and because group delivery is how most behavior-change work in the world is actually delivered.

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
      title: "14 · Appreciative Inquiry, and an honest evidence label",
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
      title: "15 · Putting it to work, and what this course does not license",
      section: "Section 4 · The agreement and the practice",
      body: `Fourteen lessons, one job: making the rest of the program survive contact with an actual person in actual circumstances.

**The through-line.** Section 1 said a plan lands in conditions you do not control, so adapt the plan. Section 2 said the plan has to be understood before it can be adapted, and a third of adults cannot use what most coaches hand out. Section 3 said the person delivering it is in the room too, with structural power and unexamined defaults, and that the fixes that work are structural rather than introspective. Section 4 said all of it should be agreed out loud before it starts.

**The five things to actually change.** **Ask what a Tuesday looks like** before agreeing to any plan, which surfaces most of Section 1 in one question. **Teach-back everything you hand over**, which costs thirty seconds. **Run on behavioral yes-or-no markers** unless a computed one earns its place. **Standardize your process** so the same questions get asked of everyone, which is the only bias intervention with outcome-level support behind it. **Write the agreement down with the client**, covering all seven handbook elements plus scope, confidentiality, records, and the referral commitment.

**What this course explicitly does not license.** It does not make you a social worker, a benefits navigator, a therapist, a trauma specialist, or a spokesperson for anyone's community. It does not license diagnosing a client's circumstances, raising a determinant they did not raise, or teaching implicit-bias content as though the workshop version were supported. It does not license claiming Appreciative Inquiry is proven, or teach-back cuts readmissions, or that a coach mentioning a resource improves a clinical outcome. Every one of those is a sentence this course's own sources refuse.

**The two lessons that are not credential coverage, one final time.** Implicit bias (lesson 9) and group coaching (lesson 13) appear zero times in the 2026 handbook. They are in this course because they were asked for and because they are real parts of professional practice. They are taught from primary sources like everything else, which is why lesson 9 reads the way it does: the honest version of that literature is mostly null results, and a course that taught the workshop version instead would be doing exactly what this whole program was built to avoid.

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
  ],
};
