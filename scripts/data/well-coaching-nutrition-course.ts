import type { AuthoredCourse } from "./authored-course";

// WELL-03 · Coaching Nutrition (plans/67). The second THIN BRIDGE: coaching EATING BEHAVIOR
// for a student who already holds a CNC. It never re-teaches nutrition science, and it stays
// deliberately, visibly inside the non-prescriptive coaching lane WELL-00 mapped.
//
// EVERY factual claim traces to the verified dossier (plans/future-courses/health/dossiers/
// 03-nutrition/03-nutrition.md §3-4). Notable verification outcomes baked in:
// - Three misattributed sources in the research exports were corrected (Williamson, not
//   "Mensinger", for early adherence; Sisnowski, not "Gomes"; Hayashi, not "Eskandari").
// - "Michigan's 2020 statute" corrected to 2024 PA 39 / MCL 333.18353 (verified in dossier 00).
// - The HAES ancillary analysis is taught at its precise proportions (34% / 73%), and no
//   weight-neutral claim reaches for hard clinical endpoints, per the export's own limits.
// - Quiz option lengths written against the always-pick-longest guard from the start.
export const WELL_COACHING_NUTRITION_COURSE: AuthoredCourse = {
  title: "Wellness Coaching 03: Coaching Nutrition",
  description:
    "The second thin-bridge course of the WELL program: coaching eating behavior inside the non-prescriptive lane. What the diet trials actually settled about composition versus adherence, the fiber and food-environment levers, the weight-neutral and weight-loss framings at their honest sizes, and the eating conversation run with WELL-01's tools. Assumes a CNC; teaches only what it does not.",
  lessons: [
    // ── Section 1 ────────────────────────────────────────────────────────────────────────────
    {
      slug: "coaching-eating-not-prescribing",
      title: "1 · Coaching eating, not prescribing it",
      section: "Section 1 · The lane",
      body: `Nutrition is the pillar where the coaching lane has actual legal walls, which is why this course starts by re-walking them with your CNC in hand.

**The two-hats rule, hardest mode.** Your CNC authorizes general nutrition coaching for healthy adults: reviewing eating patterns, educating from guidelines, coaching behavior. What NO coaching or nutrition-coaching credential authorizes is the licensed core: medical nutrition therapy, therapeutic diets for diagnosed conditions, and individualized clinical assessment. WELL-00 taught the structure; this pillar is where it bites, because eating questions drift toward disease faster than movement questions do.

**The legal map, recapped from the verified primaries.** States regulate this two ways: practice regulation reserves the WORK (medical nutrition therapy to licensees), title regulation reserves the NAMES (dietitian, licensed nutritionist). Michigan's 2024 law (Public Act 39, with its exemption section at MCL 333.18353) shows how much room a careful coach keeps: general nonmedical nutrition information, individualized recommendations for wellness or primary prevention, behavior-change management, coaching, and weight-management services all stay lawful, provided the work is not medical nutrition therapy and no protected title is used. And Cooksey v. Futrell drew the constitutional line: general nutrition speech, personal stories, classes, and published opinions have First Amendment protection; individualized clinical nutrition care remains squarely regulable (details and citations in WELL-00, lesson 5).

**What "non-prescriptive" still leaves you.** More than most coaches use: every adherence lever in this course, the entire food-environment toolbox, guideline education, label and portion coaching, meal-structure and shopping strategy, and the behavior-change craft of WELL-01 applied to eating. The lane is narrow about WHAT to eat for a disease, and wide about HOW a person changes eating at all.

**The drift test.** Before any nutrition conversation, one silent question: is this about a CONDITION or about BEHAVIOR? "What should I eat for my kidney disease" is a condition, and it belongs to a registered dietitian. "I know what to eat and I keep not doing it" is behavior, and it is the entire reason this program exists.

:::reveal Recite the two-way legal structure and where the coaching lane sits in it. ||| Practice regulation reserves the work (medical nutrition therapy to licensees); title regulation reserves the names (dietitian, licensed nutritionist). The coaching lane is general education plus behavior change, without therapeutic diets, without clinical assessment, and without protected titles.

:::reveal Apply the drift test: 'What should I eat now that I'm prediabetic?' versus 'I keep snacking after dinner and hate it.' ||| The first is condition-directed: it asks for diet guidance targeted at a diagnosis, which is dietitian territory, so refer while keeping the behavior work. The second is pure behavior, squarely yours: cue, environment, and habit coaching from WELL-01.

## Vocabulary
- **Non-prescriptive coaching**: nutrition work built from general education and behavior change, never from individualized diet prescriptions for conditions.
- **Medical nutrition therapy (MNT)**: nutrition care to treat a diagnosed condition; the licensed core every scope in this field walls off.
- **The drift test**: the silent pre-check of every eating conversation: condition or behavior? Conditions refer out; behavior stays.
- **Wellness exemption**: statutory language, like Michigan's MCL 333.18353, that keeps named coaching activities lawful for unlicensed people on stated conditions.`,
    },
    {
      slug: "what-the-lane-contains",
      title: "2 · What the lane contains",
      section: "Section 1 · The lane",
      body: `Scope teaching usually stops at the prohibitions. This lesson inventories the permissions, because the converged NBHWC, ACE, and NASM guidance (verified in WELL-00) authorizes more than most coaches ever deploy.

**Education from recognized authorities.** Sharing and teaching the Dietary Guidelines for Americans, MyPlate, and materials developed or endorsed by registered dietitians and physicians is expressly inside every published scope. That includes portion education, label reading, food-group teaching, and cooking and food-preparation skills. A coach who can make a nutrition label legible in ninety seconds is delivering real, legal value.

**Behavior facilitation, unrestricted.** Nothing in any practice act reserves the behavior-change conversation. Goals, if-then plans, WOOP on an eating wish, habit anchors for meals, self-monitoring structure, relapse post-mortems: the entire WELL-01 toolkit applies to eating without a single scope caveat, because none of it tells anyone what to eat.

**Environment and logistics.** Shopping strategy, meal structure and timing as behavior (not as therapy), pantry and workplace food-environment design, planning around cost and social situations. Section 3 will show this is not the consolation-prize tier; the environment evidence suggests it is where the leverage lives.

**Support of licensed care.** When a client HAS a dietitian's plan or a physician's dietary instruction, the coach's defined role is implementation support: adherence, obstacles, accountability. That is not a workaround of the scope line; it is the exact collaboration every scope document describes.

**The tells that you have left the lane.** Building a meal plan for one person. Setting macro targets for a condition. Recommending a supplement. Adjusting anything a clinician prescribed. Each has a lawful nearby cousin (teaching what a balanced plate looks like; coaching adherence to the dietitian's macros; educating on what the evidence says about a supplement category, without a recommendation), and knowing the cousin is the craft.

:::reveal Name three permission categories the converged scopes expressly grant, with one example each. ||| Education from recognized authorities (teaching label reading from the Dietary Guidelines); behavior facilitation (WOOP on an eating wish, habit anchors for meals); environment and logistics work (pantry design, shopping strategy, planning around cost and social food situations).

:::reveal Give the lawful cousin of 'building a client a meal plan'. ||| Teaching what a balanced plate looks like from guideline materials, then coaching the client as they build their own plans, or supporting adherence to a plan a dietitian wrote. The content stays general or stays the licensee's; the behavior work stays yours.

## Vocabulary
- **Recognized-authority education**: teaching from government guidelines and clinician-endorsed materials, the expressly permitted content channel of every published scope.
- **Implementation support**: the coach's defined role beside licensed care: adherence, obstacle work, and accountability for a plan someone licensed wrote.
- **Lawful cousin**: the in-scope neighbor of an out-of-scope act, like guideline education beside meal planning; knowing the cousin is the scope craft.
- **Food logistics**: shopping, structure, cost, and social planning around eating: unreserved behavior territory with outsized leverage.`,
      recallContent: [
        {
          prompt: "A client asks: 'Should I take creatine?' Walk the scope line as this lesson teaches.",
          answer:
            "Recommending a supplement is out of every published scope. The lawful cousin: educate on what the evidence and authorities say about the supplement category generally, encourage the client to raise it with their physician or dietitian, and keep coaching the behaviors around it.",
        },
      ],
    },

    // ── Section 2 ────────────────────────────────────────────────────────────────────────────
    {
      slug: "dietfits-the-composition-answer",
      title: "3 · DIETFITS: the composition question, answered",
      section: "Section 2 · What the trials say",
      body: `If macronutrient composition were the lever diet culture says it is, the DIETFITS trial was built to find it. It is the cleanest single answer this pillar has, and every coaching conversation about "which diet" should know it cold.

**The design.** Six hundred nine adults without diabetes were randomized to a healthy low-fat or healthy low-carbohydrate diet for twelve months. Both arms got the same behavioral treatment: 22 small-group sessions coaching them toward the lowest fat or carbohydrate intake they could MAINTAIN, with heavy emphasis on diet quality: whole foods, minimal refined sugar and processed food. The trial also pre-registered the two most popular "which diet is right for YOU" hypotheses: that genotype pattern or baseline insulin secretion would predict who succeeds on which diet (Gardner et al., 2018).

**The results.** Twelve-month weight change: minus 5.3 kilograms low-fat versus minus 6.0 low-carbohydrate, a between-group difference of 0.7 kilograms with a confidence interval crossing zero. No diet-by-genotype interaction (P = .20). No diet-by-insulin-secretion interaction (P = .47). The diets landed at genuinely different macronutrient splits (48 versus 30 percent carbohydrate; 29 versus 45 percent fat), and it did not matter, on average, which one a person got.

**What both arms shared is the finding.** Every participant was coached toward whole foods, diet quality, and a pattern they could sustain. Both groups lost meaningful weight. The active ingredients were the ones the arms had in COMMON, which is precisely the part of the trial a non-prescriptive coach is licensed to deliver.

**Coaching translation.** When a client asks "low-carb or low-fat?", the evidence-honest answer is: whichever quality-focused version you will still be eating in a year. That answer is not a dodge; it is the trial's actual result, and it converts a prescription question into a behavior question, which is your question.

:::reveal Give the DIETFITS numbers that answer the 'which diet' question. ||| 609 adults, 12 months: minus 5.3 kg healthy low-fat versus minus 6.0 kg healthy low-carbohydrate, difference 0.7 kg with a confidence interval crossing zero, and no genotype (P=.20) or insulin-secretion (P=.47) interaction. Composition was not the lever; the shared quality-and-sustainability coaching was.

:::reveal Why is DIETFITS good news for a NON-prescriptive coach specifically? ||| Because the effective ingredients were the ones both arms shared: whole-food quality, sustainability, and behavioral support, which is exactly the coaching layer. The part that did not matter, the macronutrient prescription, is the part outside your lane anyway.

## Vocabulary
- **DIETFITS**: the 609-adult, 12-month randomized trial that found equivalent weight loss on healthy low-fat and healthy low-carbohydrate diets.
- **Diet-by-genotype interaction**: the tested hypothesis that genes predict which diet works for whom; DIETFITS found none (P=.20).
- **Healthy-diet arms**: DIETFITS' design choice: both diets emphasized whole foods and quality, so the comparison isolated composition rather than junk versus not.
- **Sustainability framing**: the evidence-honest answer to "which diet": the quality-focused version the client will still be eating in a year.

## Sources
Gardner, C. D., Trepanowski, J. F., Del Gobbo, L. C., et al. (2018). Effect of low-fat vs low-carbohydrate diet on 12-month weight loss in overweight adults and the association with genotype pattern or insulin secretion: The DIETFITS randomized clinical trial. *JAMA, 319*(7), 667-679. https://pubmed.ncbi.nlm.nih.gov/29466592/`,
    },
    {
      slug: "adherence-the-active-ingredient",
      title: "4 · Adherence: the active ingredient",
      section: "Section 2 · What the trials say",
      body: `Across the big diet trials, one variable keeps out-predicting every macronutrient argument: whether people actually followed anything at all. This lesson is the evidence spine of the whole course.

**A TO Z: adherence beats assignment.** In a year-long trial comparing Atkins, Zone, and Ornish, adherence correlated with weight change INSIDE every diet group (correlations .42, .34, .38). The most adherent tertile lost 8.3 kilograms on Atkins, 6.5 on Ornish; the least adherent lost 1.9 and 1.7 on the same diets. Diets philosophically opposite produced nearly identical results at equal adherence (Alhassan et al., 2008).

**POUNDS LOST: adherence has two dimensions.** In the 811-person POUNDS LOST trial, adherence factored cleanly into two constructs: BEHAVIORAL adherence (attending sessions, self-monitoring, showing up) and DIETARY adherence (hitting the prescribed macronutrient targets). Behavioral adherence was identical across all four diet prescriptions (Williamson et al., 2010a). And in the follow-up analysis, EARLY behavioral adherence in the first six months predicted weight and waist change with canonical correlations of 0.52 at six months and 0.37 at twenty-four, while early dietary adherence predicted almost nothing durable (Williamson et al., 2010b). Read that again with a coach's eyes: the showing-up behaviors out-predicted the macro-target behaviors, by a lot.

**The metabolic footnote that behaves the same way.** A meta-analysis of low-carbohydrate versus low-fat interventions found both improve metabolic-syndrome markers, with weight loss itself the best predictor of fasting-glucose improvement, and end-of-study macronutrient intake mattering mainly for triglycerides and diastolic pressure (Willems et al., 2021). Composition is not nothing; it is downstream of somebody actually adhering to something.

**Coaching translation.** Your leverage lives in behavioral adherence: attendance, self-monitoring, the structures WELL-01 builds. When a client wants to argue macros, the honest move is to redirect the energy toward the variable that predicts their outcome: what they can keep doing. The trials give you permission to be almost boring about food and relentless about behavior.

:::reveal Quote the A TO Z tertile numbers and what they retire. ||| Most adherent versus least adherent: minus 8.3 vs minus 1.9 kg on Atkins, minus 6.5 vs minus 1.7 on Ornish, with adherence correlating with weight change inside every diet. They retire the idea that the diet's identity, rather than its being followed, carries the result.

:::reveal What are the two adherence dimensions in POUNDS LOST, and which one predicted long-term outcomes? ||| Behavioral adherence (attendance, self-monitoring, showing up) and dietary adherence (hitting macro targets). Early BEHAVIORAL adherence predicted weight and waist change at 6 and 24 months (R = 0.52 and 0.37); early dietary adherence predicted almost nothing durable.

## Vocabulary
- **Behavioral adherence**: the showing-up dimension: attendance, self-monitoring, engagement; the stronger outcome predictor by far.
- **Dietary adherence**: the hitting-the-targets dimension: meeting prescribed macronutrient goals; real, but the weaker long-term predictor.
- **Adherence tertile**: a trial's most-, middle-, and least-adherent thirds; A TO Z's tertiles show the same diet producing four-fold different results.
- **Canonical correlation**: a statistic relating sets of variables; 0.52 links early showing-up behaviors to six-month body change in POUNDS LOST.

## Sources
Alhassan, S., Kim, S., Bersamin, A., King, A. C., & Gardner, C. D. (2008). Dietary adherence and weight loss success among overweight women: Results from the A TO Z weight loss study. *International Journal of Obesity, 32*(6), 985-991. https://pubmed.ncbi.nlm.nih.gov/18268511/

Willems, A. E. M., Sura-de Jong, M., van Beek, A. P., Nederhof, E., & van Dijk, G. (2021). Effects of macronutrient intake in obesity: A meta-analysis of low-carbohydrate and low-fat diets on markers of the metabolic syndrome. *Nutrition Reviews, 79*(4), 429-444. https://pubmed.ncbi.nlm.nih.gov/32885229/

Williamson, D. A., Anton, S. D., Han, H., et al. (2010a). Adherence is a multi-dimensional construct in the POUNDS LOST trial. *Journal of Behavioral Medicine, 33*(1), 35-46. https://pubmed.ncbi.nlm.nih.gov/19856202/

Williamson, D. A., Anton, S. D., Han, H., et al. (2010b). Early behavioral adherence predicts short and long-term weight loss in the POUNDS LOST study. *Journal of Behavioral Medicine, 33*(4), 305-314. https://pubmed.ncbi.nlm.nih.gov/20195742/`,
      recallContent: [
        {
          prompt: "A client wants to spend the session debating optimal protein percentage. What do the trials tell you to do with that energy?",
          answer:
            "Redirect it to the variable that predicts their outcome: behavioral adherence. DIETFITS, A TO Z, and POUNDS LOST all show composition mattering far less than following anything consistently, and early showing-up behaviors out-predicting macro-target behaviors long term.",
        },
      ],
    },
    {
      slug: "fiber-and-energy-density",
      title: "5 · Fiber: the lever adherence rides on",
      section: "Section 2 · What the trials say",
      body: `If this course allowed exactly one food-level coaching target, the trial evidence picks it for you, and it is not a macronutrient ratio.

**The fiber finding.** In POUNDS LOST's calorie-restricted diets, the single most influential dietary predictor of six-month weight change was fiber intake (standardized beta of minus 0.37, the strongest in a model that also held calories, fat, energy density, and demographics). Participants who adhered to their prescriptions ate more fiber (25.2 versus 21.1 grams a day) and lost more weight (9.3 versus 6.4 kilograms), and fiber intake was itself strongly associated with adherence (Miketinas et al., 2019).

**Why fiber is a behavior lever, not just a nutrient.** Fiber arrives inside foods: vegetables, fruits, legumes, whole grains. Coaching toward those foods drags along lower energy density, more volume per calorie, and displacement of the foods clients are trying to crowd out. The fiber-adherence association points the same way: fiber-rich eating patterns appear EASIER to stay on, which makes fiber a rare target that improves the diet and the adherence to it simultaneously.

**Fully inside the lane.** "Eat more plants, aim toward the guideline ballpark of 25-plus grams of fiber a day, here is what that looks like on a plate" is general, guideline-anchored education, deliverable to any healthy client without touching prescription. It is also concrete enough to hang the whole WELL-01 rig on: a fiber-forward behavior is countable, anchorable, and minimum-versionable.

**The craft version.** Not "hit 28 grams", which turns eating into arithmetic, but additions a client chooses: the bean addition, the front-loaded vegetable, the whole-grain swap. Addition coaching beats restriction coaching for the same reason affirmation beats criticism: it gives the client something to DO, and doing is coachable.

:::reveal Quote the Miketinas numbers that make fiber the chosen lever. ||| Fiber was the most influential predictor of six-month weight change (beta minus 0.37, P < 0.0001); adherent participants ate 25.2 versus 21.1 grams a day and lost 9.3 versus 6.4 kilograms; and fiber intake was strongly associated with adherence itself.

:::reveal Why does this course coach fiber as additions rather than as a gram target? ||| A gram target turns eating into arithmetic and invites restriction framing. Additions the client chooses (beans, front-loaded vegetables, whole-grain swaps) are concrete behaviors: countable, anchorable to cues, minimum-versionable, and they carry the fiber, the lower energy density, and the crowding-out along with them.

## Vocabulary
- **Energy density**: calories per unit of food volume; fiber-rich whole foods sit low on it, delivering fullness per calorie.
- **Crowding out**: the addition strategy's mechanism: foods added to the plate displace the ones being reduced, without a restriction conversation.
- **Fiber-adherence link**: the verified finding that fiber intake predicted both weight loss AND adherence to the diet itself; one lever, two effects.
- **Addition coaching**: framing change as chosen additions rather than restrictions; the behavioral cousin of affirmation over criticism.

## Sources
Miketinas, D. C., Bray, G. A., Beyl, R. A., Ryan, D. H., Sacks, F. M., & Champagne, C. M. (2019). Fiber intake predicts weight loss and dietary adherence in adults consuming calorie-restricted diets: The POUNDS Lost study. *The Journal of Nutrition, 149*(10), 1742-1748. https://pubmed.ncbi.nlm.nih.gov/31174214/`,
    },
    {
      slug: "quiz-lane-and-trials",
      title: "6 · Knowledge check: the lane and the trials",
      section: "Section 2 · What the trials say",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questions: [
          {
            prompt: "The drift test asks one question before every nutrition conversation. What is it?",
            options: [
              "Is this about a condition or about behavior?",
              "Does this client have a signed informed-consent form on file for nutrition topics?",
              "Is the client's BMI within the range my certification covers for advice?",
              "Has the client already tried the guideline recommendations for at least six months?",
            ],
            correctIndex: 0,
            explanation:
              "Condition-directed questions (what to eat FOR a diagnosis) route to licensed care; behavior questions (why the eating keeps not happening) are the coaching lane. Consent forms, BMI ranges, and prior attempts are not the scope test.",
            sourceLessonSlug: "coaching-eating-not-prescribing",
          },
          {
            prompt: "Which activity sits INSIDE the converged nutrition-coaching permissions?",
            options: [
              "Teaching label reading from the Dietary Guidelines and coaching shopping strategy",
              "Writing a personalized meal plan for a healthy client who requests one politely",
              "Recommending a third-party-tested protein supplement to a training client",
              "Adjusting the sodium targets a dietitian set, since the client found them hard",
            ],
            correctIndex: 0,
            explanation:
              "Recognized-authority education and food-logistics coaching are expressly permitted. Individualized meal plans, supplement recommendations, and any adjustment of a licensee's plan are the standing exclusions, politeness and difficulty notwithstanding.",
            sourceLessonSlug: "what-the-lane-contains",
          },
          {
            prompt: "DIETFITS randomized 609 adults to healthy low-fat versus healthy low-carb for a year. The result was:",
            options: [
              "Equivalent weight loss (minus 5.3 vs minus 6.0 kg), with no genotype or insulin-secretion interaction",
              "A decisive low-carbohydrate metabolic advantage of roughly four kilograms of additional loss at twelve months",
              "Weight loss only in participants whose genotype matched their assigned diet arm",
              "No meaningful weight loss in either arm without prescribed calorie targets",
            ],
            correctIndex: 0,
            explanation:
              "The 0.7 kg between-group difference crossed zero, and neither pre-registered personalization hypothesis (genotype P=.20, insulin secretion P=.47) held. Both quality-focused arms lost meaningful weight without calorie prescriptions.",
            sourceLessonSlug: "dietfits-the-composition-answer",
          },
          {
            prompt: "Why is DIETFITS specifically good news for the NON-prescriptive coach?",
            options: [
              "The effective ingredients were what both arms shared: quality, sustainability, and behavioral support",
              "It proved that individualized macronutrient prescriptions are the core driver of long-term weight change",
              "It showed coaching sessions are unnecessary once a diet is correctly assigned",
              "It licensed coaches to individualize macronutrient targets for healthy clients",
            ],
            correctIndex: 0,
            explanation:
              "The part that did not matter (the composition prescription) is outside the coaching lane anyway; the part that carried the result (shared quality-and-sustainability coaching) is exactly the coaching layer.",
            sourceLessonSlug: "dietfits-the-composition-answer",
          },
          {
            prompt: "In the A TO Z adherence analysis, the most adherent tertile on Atkins lost 8.3 kg. The least adherent tertile on the same diet lost:",
            options: [
              "1.9 kg, roughly a quarter as much on the identical diet",
              "7.8 kg, essentially the same amount as the most adherent",
              "Nothing at all, with the average showing modest weight gain",
              "More than the adherent group, due to measurement artifacts",
            ],
            correctIndex: 0,
            explanation:
              "Minus 8.3 versus minus 1.9 kg on the same diet, with adherence correlating with outcomes inside every diet group. The diet's identity mattered far less than whether it was followed.",
            sourceLessonSlug: "adherence-the-active-ingredient",
          },
          {
            prompt: "POUNDS LOST separated adherence into two dimensions. Which predicted long-term outcomes?",
            options: [
              "Behavioral adherence (attendance, self-monitoring): R = 0.52 at 6 months and 0.37 at 24",
              "Dietary adherence (hitting the prescribed macro targets precisely), which drove all the durable results",
              "Neither dimension predicted anything beyond the first ninety days",
              "Only the interaction of the two, with each meaningless alone",
            ],
            correctIndex: 0,
            explanation:
              "Early behavioral adherence predicted weight and waist change at both horizons; early dietary adherence predicted almost nothing durable. The showing-up behaviors out-predicted the macro-target behaviors.",
            sourceLessonSlug: "adherence-the-active-ingredient",
          },
          {
            prompt: "The single most influential dietary predictor of weight change in POUNDS LOST's model was:",
            options: [
              "Fiber intake, at a standardized beta of minus 0.37",
              "Protein percentage, at double the influence of any other nutrient",
              "Meal frequency, with six small meals outperforming three",
              "Total caloric intake, which explained nearly all the variance alone",
            ],
            correctIndex: 0,
            explanation:
              "Fiber (beta = minus 0.37, P < 0.0001) led a model that also held calories, fat, and energy density; adherents ate 25.2 vs 21.1 g/day and lost 9.3 vs 6.4 kg. Protein splits and meal frequency were not the drivers.",
            sourceLessonSlug: "fiber-and-energy-density",
          },
          {
            prompt: "Why does fiber count as a BEHAVIOR lever rather than only a nutrient?",
            options: [
              "It arrives inside coachable whole foods and its intake predicted adherence itself",
              "Because fiber supplements are the one supplement coaches may recommend",
              "Because fiber has no physiological effects, only psychological ones",
              "Because tracking fiber grams is substantially easier than tracking any other nutrient in food records",
            ],
            correctIndex: 0,
            explanation:
              "Coaching toward fiber-rich foods drags along lower energy density and crowding-out, and fiber intake was strongly associated with adherence to the diet itself. Supplement recommendations remain out of scope regardless of nutrient.",
            sourceLessonSlug: "fiber-and-energy-density",
          },
          {
            prompt: "Michigan's wellness-coaching exemption (2024 PA 39 / MCL 333.18353) permits unlicensed people to provide:",
            options: [
              "Individualized wellness and prevention recommendations, coaching, and weight-management services, short of MNT and protected titles",
              "Medical nutrition therapy for stable chronic conditions, provided a supervising physician is copied on each individualized written plan",
              "Any nutrition service whatsoever, since Michigan repealed dietetics licensure in 2024",
              "Nothing individualized at all, restricting unlicensed work to public lectures",
            ],
            correctIndex: 0,
            explanation:
              "The exemption names the coaching activities expressly, with two conditions: the work must not constitute medical nutrition therapy and no protected title may be used. It neither authorizes MNT nor confines coaches to lectures.",
            sourceLessonSlug: "coaching-eating-not-prescribing",
          },
          {
            prompt: "A client on a dietitian-written plan is struggling to follow it. The coach's defined role is:",
            options: [
              "Implementation support: adherence structures, obstacle work, and accountability for the plan as written",
              "Simplifying the dietitian's plan by removing its hardest requirements until the client's adherence recovers",
              "Replacing the plan with guideline-based education, since guidelines are in scope",
              "Ending the coaching engagement until the client returns to the dietitian",
            ],
            correctIndex: 0,
            explanation:
              "Supporting implementation of licensed care is the collaboration every scope document describes: the plan stays the dietitian's, the adherence craft stays yours, and struggles get routed back to the plan's author, not edited away.",
            sourceLessonSlug: "what-the-lane-contains",
          },
        ],
      },
    },

    // ── Section 3 ────────────────────────────────────────────────────────────────────────────
    {
      slug: "the-hall-experiment",
      title: "7 · The ultra-processed experiment",
      section: "Section 3 · Environment and frame",
      body: `One inpatient experiment reframed what "willpower around food" even means, and it belongs in every coaching conversation about why eating feels harder than it should.

**The design.** Twenty weight-stable adults lived at the NIH Clinical Center and were fed, in randomized order, two weeks of an ultra-processed diet and two weeks of an unprocessed diet. The meals were matched for PRESENTED calories, energy density, macronutrients, sugar, sodium, and fiber, and participants were told to eat as much or as little as they wanted (Hall et al., 2019).

**The results.** On the ultra-processed diet, people ate 508 more kilocalories a day, the excess coming from carbohydrate and fat, not protein. They gained 0.9 kilograms in two weeks on the ultra-processed diet and lost 0.9 on the unprocessed one, with intake and weight change tightly correlated. The full report adds the mechanism a coach can actually use: people ate FASTER on the ultra-processed diet, by about 7.4 grams and 17 kilocalories per minute.

**What it means.** With nutrition labels matched, the FORM of the food changed intake by roughly a meal's worth per day, without anyone deciding anything. That is not a willpower story; it is an environment story running at the level of the plate. The overfeeding happened to people; the unprocessed diet un-happened it.

**Coaching translation, inside the lane.** This evidence powers environment coaching, not prohibition coaching. Shift the home default toward foods that require assembly; make the ultra-processed layer the exception that requires a decision rather than the default that does not; and coach eating SPEED directly, since slower eating is a behavior with a cue and a minimum version, not a nutrition prescription. Telling a client "your kitchen's defaults are eating for you" is both accurate and kinder than anything willpower-flavored.

:::reveal Quote the Hall numbers: intake, weight, and the mechanism. ||| Plus 508 kilocalories a day on the ultra-processed diet with meals nutritionally matched; plus 0.9 kilograms in two weeks on it and minus 0.9 on the unprocessed diet; and faster eating on the ultra-processed food, about 7.4 grams and 17 kilocalories more per minute.

:::reveal Why is this experiment an argument against willpower framing? ||| Because intake diverged by a meal a day with nutrition labels matched and no instructions to restrict: the food's form, not anyone's resolve, moved consumption. The coachable response is defaults and eating speed, not character.

## Vocabulary
- **Ultra-processed food (UPF)**: industrially formulated products; in the Hall trial, the diet form that drove passive overconsumption despite matched nutrients.
- **Ad libitum intake**: eating freely, as much or as little as desired; the trial's measured outcome, uncorrupted by instructions.
- **Passive overconsumption**: intake rising without decisions to eat more; roughly 508 kcal/day of it on the ultra-processed diet.
- **Default design**: arranging the home and workplace so the low-decision option is the better one; the lane-legal response to the Hall result.

## Sources
Hall, K. D., Ayuketah, A., Brychta, R., et al. (2019). Ultra-processed diets cause excess calorie intake and weight gain: An inpatient randomized controlled trial of ad libitum food intake. *Cell Metabolism, 30*(1), 67-77. https://pubmed.ncbi.nlm.nih.gov/31105044/`,
    },
    {
      slug: "the-food-environment",
      title: "8 · The environment your client eats in",
      section: "Section 3 · Environment and frame",
      body: `Clients blame themselves for outcomes their surroundings are systematically producing. The environment evidence gives a coach both the reframe and the work-list.

**The qualitative record.** Across 26 studies of 679 people actively engaged in weight management, the synthesis is blunt: food environments consistently make purchasing and eating healthier food HARDER, demanding continuous navigation effort, and the burden falls heaviest on low incomes (Neve & Isaacs, 2022). Your clients' reports of constant effort are not weakness; they are accurate perception.

**Policy will not save them soon.** A realist review of real-world regulatory interventions (menu calorie posting most studied) found isolated policies improve intermediate outcomes like knowledge and some purchasing, but fail to change consumption at clinically significant levels (Sisnowski et al., 2017). Coaching cannot wait for the environment to be fixed from above; it has to work the client's own slice of it.

**The money layer.** Across 36,113 adults and children in high-income countries, food insecurity was associated with HIGHER obesity odds (odds ratio 1.50, confidence interval 1.43 to 1.58), with the qualitative literature pointing at the mechanism: cheap calories are energy-dense calories (Eskandari et al., 2022). For a coach this is a standing instruction: never coach a food change without asking what it costs, and treat budget-fit as a design constraint, not an afterthought.

**The work-list this evidence writes.** Home defaults (lesson 7's assembly-required principle); a shopping routine built as a habit with a list as its cue; social-situation planning as if-then work (WELL-01, directly); cost-aware swaps inside the client's actual budget; and the reframe itself, delivered out loud: the environment is doing this ON PURPOSE, so we will design against it on purpose.

:::reveal What did the qualitative synthesis find about people actively managing weight, and what reframe does it hand the coach? ||| Across 26 studies, environments consistently made healthier purchasing and eating harder, requiring continuous effort, hardest on low incomes. The reframe: the client's sense of constant struggle is accurate perception of a hostile environment, not personal weakness, so the work is design, not character.

:::reveal Why does the food-insecurity finding change how a coach proposes food changes? ||| Because insecurity associates with higher obesity odds (OR 1.50) through reliance on cheap, energy-dense food. So cost is a first-class design constraint: never propose a change without asking what it costs, and build swaps inside the client's actual budget.

## Vocabulary
- **Obesogenic environment**: surroundings that systematically promote energy-dense eating and sitting; the documented opponent of every weight-management effort.
- **Intermediate outcome**: a step short of the goal, like improved knowledge or purchasing; where isolated food policies stall, per the realist review.
- **Food insecurity**: unreliable access to adequate food; associated with HIGHER obesity odds in high-income countries via cheap energy-dense calories.
- **Budget-fit**: the standing constraint that proposed food changes must survive the client's actual finances; a scope-legal, dignity-preserving design rule.

## Sources
Eskandari, F., Lake, A. A., Rose, K., Butler, M., & O'Malley, C. (2022). A mixed-method systematic review and meta-analysis of the influences of food environments and food insecurity on obesity in high-income countries. *Food Science & Nutrition, 10*(11), 3689-3723. https://pubmed.ncbi.nlm.nih.gov/36348796/

Neve, K. L., & Isaacs, A. (2022). How does the food environment influence people engaged in weight management? A systematic review and thematic synthesis of the qualitative literature. *Obesity Reviews, 23*(3), e13398. https://pubmed.ncbi.nlm.nih.gov/34881511/

Sisnowski, J., Street, J. M., & Merlin, T. (2017). Improving food environments and tackling obesity: A realist systematic review of the policy success of regulatory interventions targeting population nutrition. *PLoS One, 12*(8), e0182581. https://pubmed.ncbi.nlm.nih.gov/28783757/`,
      recallContent: [
        {
          prompt: "A client says 'I just need more discipline around food.' Answer with this section's evidence, in coaching language.",
          answer:
            "The evidence says the environment is doing real work against them: matched-nutrient ultra-processed food drove a meal a day of passive overconsumption, and 26 studies of people managing weight found environments consistently making the healthier choice harder. So the plan is design, not discipline: home defaults, shopping structure, social if-thens, budget-fit swaps.",
        },
      ],
    },
    {
      slug: "weight-neutral-and-weight-loss",
      title: "9 · Two framings, honestly priced",
      section: "Section 3 · Environment and frame",
      body: `Weight-loss framing and weight-neutral framing are usually presented as a war. The trial evidence prices them as a menu, and a coach should be able to quote both sides without flinching.

**The head-to-head.** Eighty women with BMI over 30 were randomized to six months of weekly groups run either weight-loss or weight-neutral. At post-intervention, the weight-loss program produced larger BMI and weight reductions; the weight-neutral program produced larger LDL-cholesterol reductions and bigger gains in intuitive eating. At twenty-four months, BOTH groups held improvements in waist-to-hip ratio, total cholesterol, physical activity, fruit and vegetable intake, self-esteem, and quality of life (Mensinger et al., 2016). Neither frame owned the outcomes; each led somewhere first.

**What weight-neutral delivers without weight change.** A seven-month randomized trial of an intensive Health at Every Size intervention found no change in weight, BMI, or waist in either group, alongside real improvements in peak oxygen uptake, functional capacity, eating attitudes, every body-image scale measured, and quality-of-life domains (Ulian et al., 2018). The ancillary analysis kept the honesty symmetrical: participants who DID lose weight showed the expected cardiometabolic improvements, and among those who maintained or gained, 34 percent still improved clustered cardiometabolic risk and 73 percent improved quality of life, at smaller magnitudes (Dimitrov Ulian et al., 2022).

**The mixed middle.** A review of ten intuitive and mindful-eating trials found seven beating control on at least one cardiometabolic marker, with no marker improving consistently across studies (Hayashi et al., 2021). Promising, real, inconsistent: that is the honest label.

**What no one gets to claim.** There is no evidence that weight-neutral programs reduce long-term cardiovascular events or mortality; the trials measure intermediate markers and quality of life over months to a couple of years. Equally, the claim that weight-focused work is uniformly harmful outruns this data, in which the weight-loss arm delivered its outcomes and held its gains too.

**Coaching translation.** Frame-fit is a client variable, not an ideology. A client with a weight-cycling history and shame-driven abandonment may do their best work weight-neutral, measuring what improves without the scale. A client who wants weight loss and holds it without distress is running an evidence-supported strategy too. Both stay inside your lane; the capstone will ask you to hold both without a side.

:::reveal Score the Mensinger head-to-head at both time points. ||| Post-intervention: weight-loss arm won BMI and weight; weight-neutral arm won LDL reduction and intuitive eating. Twenty-four months: both held improvements in waist-to-hip ratio, total cholesterol, activity, fruit and vegetables, self-esteem, and quality of life. A menu, not a verdict.

:::reveal What may a coach claim for weight-neutral work, and what must they not claim? ||| May claim: improved eating attitudes, body image, fitness measures, quality of life, and some cardiometabolic markers even without weight change, with 34 percent of non-losers improving clustered risk and 73 percent improving quality of life in the ancillary data. Must not claim: reduced long-term cardiovascular events or mortality; that evidence does not exist.

## Vocabulary
- **Weight-neutral framing**: health promotion measured by behaviors and well-being rather than the scale; Health at Every Size is the best-studied version.
- **Intuitive eating**: eating guided by internal hunger and satiety cues; the weight-neutral arm's signature measured gain.
- **Frame-fit**: this course's rule that the framing is chosen per client (history, goals, distress pattern), never imposed as ideology.
- **Intermediate marker**: a measurable proxy like LDL or blood pressure, as distinct from hard endpoints like events and mortality; all the framing evidence lives here.

## Sources
Dimitrov Ulian, M., Pinto, A. J., de Morais Sato, P., et al. (2022). Health at Every Size-based interventions may improve cardiometabolic risk and quality of life even in the absence of weight loss: An ancillary, exploratory analysis of the Health and Wellness in Obesity study. *Frontiers in Nutrition, 9*, 598920. https://pubmed.ncbi.nlm.nih.gov/35273983/

Hayashi, L. C., Benasi, G., St-Onge, M. P., & Aggarwal, B. (2021). Intuitive and mindful eating to improve physiological health parameters: A short narrative review of intervention studies. *Journal of Complementary and Integrative Medicine, 20*(3), 537-547. https://pubmed.ncbi.nlm.nih.gov/34913327/

Mensinger, J. L., Calogero, R. M., Stranges, S., & Tylka, T. L. (2016). A weight-neutral versus weight-loss approach for health promotion in women with high BMI: A randomized-controlled trial. *Appetite, 105*, 364-374. https://pubmed.ncbi.nlm.nih.gov/27289009/

Ulian, M. D., Pinto, A. J., de Morais Sato, P., et al. (2018). Effects of a new intervention based on the Health at Every Size approach for the management of obesity: The "Health and Wellness in Obesity" study. *PLoS One, 13*(7), e0198401. https://pubmed.ncbi.nlm.nih.gov/29979699/`,
    },
    {
      slug: "quiz-environment-and-frame",
      title: "10 · Knowledge check: environment and frame",
      section: "Section 3 · Environment and frame",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "In the Hall inpatient trial, the ultra-processed and unprocessed menus were matched for:",
            options: [
              "Presented calories, energy density, macronutrients, sugar, sodium, and fiber",
              "Nothing at all; the trial deliberately contrasted junk food with a strict diet",
              "Taste and palatability ratings, but not for any nutritional parameter",
              "Cost per meal, ensuring both diets were equally affordable to produce",
            ],
            correctIndex: 0,
            explanation:
              "The matching is what makes the result devastating to willpower framing: with the labels equal, the food's form alone drove 508 extra kcal/day, weight gain on one diet, and weight loss on the other.",
            sourceLessonSlug: "the-hall-experiment",
          },
          {
            prompt: "On the ultra-processed diet, participants:",
            options: [
              "Ate 508 more kcal/day, ate faster, and gained 0.9 kg in two weeks",
              "Ate the same amount but gained weight from metabolic changes alone",
              "Ate less overall, drawn by hyper-palatability into earlier satiety",
              "Showed effects only in participants with obesity at baseline",
            ],
            correctIndex: 0,
            explanation:
              "Plus 508 kcal/day (carbohydrate and fat, not protein), faster eating (about 7.4 g and 17 kcal more per minute), plus 0.9 kg on UPF and minus 0.9 kg on unprocessed, in weight-stable adults.",
            sourceLessonSlug: "the-hall-experiment",
          },
          {
            prompt: "The lane-legal coaching response to the Hall result is:",
            options: [
              "Default design and eating-speed coaching, making the processed layer the exception that requires a decision",
              "Prescribing a strictly unprocessed elimination diet for every coaching client, regardless of their stated goals",
              "Teaching clients that overconsumption reflects insufficient personal resolve",
              "Recommending appetite-suppressing supplements to offset the environment",
            ],
            correctIndex: 0,
            explanation:
              "Environment coaching, not prohibition or prescription: shift home defaults toward assembly-required foods and coach eating speed as a behavior. Diet prescriptions and supplement recommendations exit the lane; willpower framing exits the evidence.",
            sourceLessonSlug: "the-hall-experiment",
          },
          {
            prompt: "The qualitative synthesis of 26 weight-management studies found food environments:",
            options: [
              "Consistently making healthier purchasing and eating harder, heaviest on low incomes",
              "Broadly neutral, with outcomes explained almost entirely by individual choices",
              "Hostile only in rural areas lacking access to large grocery stores",
              "Improving steadily since menu-labeling policies became widespread",
            ],
            correctIndex: 0,
            explanation:
              "Neve and Isaacs: continuous navigation effort required, hardest for low incomes. The coaching reframe follows: the client's sense of constant struggle is accurate perception, and the response is design.",
            sourceLessonSlug: "the-food-environment",
          },
          {
            prompt: "The realist review of food-environment policies (menu labeling most studied) concluded:",
            options: [
              "Isolated policies improve intermediate outcomes but fail to change consumption at clinically significant levels",
              "Menu labeling alone produced clinically significant population-level weight loss within five years of adoption",
              "Regulatory approaches outperform individual behavior change in every comparison",
              "No policy has ever shifted purchasing behavior in any measurable way",
            ],
            correctIndex: 0,
            explanation:
              "Sisnowski, Street, and Merlin: knowledge and some purchasing move; consumption does not, at clinical levels, from isolated policies. Coaching works the client's own slice of the environment rather than waiting.",
            sourceLessonSlug: "the-food-environment",
          },
          {
            prompt: "Across 36,113 people in high-income countries, food insecurity was associated with obesity at:",
            options: [
              "OR 1.50 (CI 1.43 to 1.58), via reliance on cheap, energy-dense food",
              "OR 0.75, with insecurity protective through reduced total intake",
              "No association after adjusting for household income and education",
              "OR 4.2, the strongest association in all of nutrition epidemiology",
            ],
            correctIndex: 0,
            explanation:
              "Eskandari: OR 1.503 (1.432 to 1.577), mechanism visible in the qualitative data: cheap calories are energy-dense calories. The coaching consequence is budget-fit as a first-class design constraint.",
            sourceLessonSlug: "the-food-environment",
          },
          {
            prompt: "At post-intervention in the Mensinger head-to-head trial, the weight-NEUTRAL arm showed:",
            options: [
              "Larger LDL-cholesterol reductions and bigger intuitive-eating gains than the weight-loss arm",
              "Larger reductions in BMI and total body weight than the weight-loss arm itself achieved at six months",
              "No measurable changes on any physiological or psychological outcome",
              "Improvements that had fully disappeared by the 24-month follow-up",
            ],
            correctIndex: 0,
            explanation:
              "Each frame led somewhere first: weight-loss won BMI and weight; weight-neutral won LDL and intuitive eating. At 24 months both held gains across waist-to-hip, cholesterol, activity, produce intake, self-esteem, and QoL.",
            sourceLessonSlug: "weight-neutral-and-weight-loss",
          },
          {
            prompt: "The HAES ancillary analysis found what among participants who maintained or GAINED weight?",
            options: [
              "34 percent improved clustered cardiometabolic risk and 73 percent improved quality of life, at smaller magnitudes",
              "None showed any physiological or quality-of-life improvement whatsoever",
              "All of them improved every measured cardiometabolic marker exactly as much as the participants who lost weight did",
              "Improvements appeared only in participants younger than thirty",
            ],
            correctIndex: 0,
            explanation:
              "The precise proportions matter: benefits without weight loss are real (34% risk, 73% QoL) and smaller than among weight losers. Teaching either half without the other misrepresents the trial.",
            sourceLessonSlug: "weight-neutral-and-weight-loss",
          },
          {
            prompt: "Which claim is FORBIDDEN by the weight-neutral evidence as it stands?",
            options: [
              "That weight-neutral programs reduce long-term cardiovascular events or mortality",
              "That eating attitudes and body image can improve without any accompanying weight change",
              "That quality of life improved in weight-neutral trial participants",
              "That fitness measures like peak oxygen uptake rose without weight loss",
            ],
            correctIndex: 0,
            explanation:
              "The trials measure intermediate markers and QoL over months to a couple of years; hard-endpoint claims outrun them. Attitudes, body image, QoL, and fitness gains without weight change are exactly what the trials verified.",
            sourceLessonSlug: "weight-neutral-and-weight-loss",
          },
          {
            prompt: "This course's rule for choosing between framings is:",
            options: [
              "Frame-fit: match the framing to the client's history, goals, and distress pattern, never impose ideology",
              "Always weight-neutral, since the evidence shows weight-loss framing is uniformly harmful to coaching clients",
              "Always weight-loss, since it produced the larger six-month BMI change",
              "Alternate framings monthly so the client experiences both equally",
            ],
            correctIndex: 0,
            explanation:
              "Both framings sit inside the lane with real evidence behind them. A weight-cycling, shame-driven history argues weight-neutral; a distress-free weight-loss goal is evidence-supported too. The client variable decides, not the coach's ideology.",
            sourceLessonSlug: "weight-neutral-and-weight-loss",
          },
        ],
      },
    },

    // ── Section 4 ────────────────────────────────────────────────────────────────────────────
    {
      slug: "the-eating-conversation",
      title: "11 · The eating conversation",
      section: "Section 4 · The craft",
      body: `Food talk is where coaching craft gets tested hardest, because no other pillar arrives wrapped in this much shame. This lesson runs WELL-01's tools on eating, with the adjustments the pillar demands.

**The fixing reflex, food edition.** A client confesses an eating pattern and the room fills with advice pressure: meal ideas, swaps, rules. Resist it harder here than anywhere, for two reasons. First, the WELL-01 mechanics: advice to an ambivalent person recruits the other side of the argument. Second, this pillar's own trials: DIETFITS and A TO Z say the content of the advice matters far less than the behavior around it, so the fixing reflex is not even fixing the right variable.

**Language that keeps the door open.** No moralized food words: not "good foods", "bad foods", "cheating", "being naughty". The evidence-aligned frame treats eating patterns as designed outcomes of environments and habits, which is both true (lessons 7 and 8) and shame-free. Affirmation over praise matters doubly here: "you noticed the pattern and said it out loud" builds the capability the change runs on; "good job being honest" makes the coach the food judge, which is the exact dynamic most clients arrive damaged by.

**Self-monitoring, gently.** The adherence data crowns self-monitoring, and food tracking is also the tool most likely to turn obsessive. The craft: monitor the BEHAVIOR, not always the food. Meals eaten at the table, vegetables added, eating speed, hunger checked before seconds: all countable, all cheaper psychologically than calorie ledgers, all inside the behavioral-adherence dimension the trials say predicts outcomes anyway.

**The session loop on an eating wish.** Evoke: what would eating peacefully even look like, when did food last feel simple. Return the obstacle inward: the obstacle is rarely the pantry; it is the story ("a day is ruined by one slice"), which is WELL-01's what-the-hell effect wearing food clothes, met with the same miss rule. Plan: one addition or one default change, anchored, minimum-versioned, with the client holding the pen.

:::reveal Why is the fixing reflex doubly wrong on this pillar? ||| The usual mechanics: advice to an ambivalent person recruits the counter-argument. Plus this pillar's trials: composition advice targets the variable (diet content) that A TO Z and DIETFITS showed matters far less than the behavior around it. Wrong move, aimed at the wrong lever.

:::reveal What does 'monitor the behavior, not always the food' look like in practice? ||| Counting meals at the table, vegetables added, eating speed, hunger checked before seconds, rather than defaulting to calorie ledgers. It keeps the crowned tool (self-monitoring) while lowering the obsession risk, and it tracks the behavioral-adherence dimension that predicted outcomes anyway.

## Vocabulary
- **Moralized food language**: good/bad/cheat framing that converts eating into character; stripped from coaching speech because shame is not a behavior-change technique.
- **Behavior monitoring**: self-monitoring aimed at countable eating behaviors rather than calories; the gentler species of the trials' crowned tool.
- **Food-story obstacle**: the inner obstacle behind most eating wishes: a belief like "one slice ruins the day", coachable where the pantry is just weather.
- **Advice pressure**: the felt urge to supply meal ideas the moment food is confessed; the fixing reflex's food-specific costume.`,
      recallContent: [
        {
          prompt: "A client says: 'I was bad this weekend. Pizza, twice.' Give the coaching response this lesson trains, and name what you are NOT doing.",
          answer:
            "A reflection without moral language: 'Two pizza nights in a weekend that sounds like it had a lot going on; what was the weekend like?' Not doing: judging (good/bad framing), advising (fixing reflex), or treating the confession as a compliance report. The pattern is data about environment and story, and the client stays the author.",
        },
      ],
    },
    {
      slug: "referral-on-this-pillar",
      title: "12 · Referral: when food is not a coaching topic",
      section: "Section 4 · The craft",
      body: `Every scope document this program verified names the same two referral lanes for nutrition work, and this pillar produces referral moments faster than any other.

**The clinical lane.** The drift test from lesson 1, formalized: any diet question aimed at a diagnosed condition (diabetes, kidney disease, cardiovascular disease, pregnancy complications, food allergy management) is a registered dietitian's or physician's question. The converged guidance (NBHWC, ACE, NASM, all verified in WELL-00) is unambiguous, and Michigan's statute carves its exemption around exactly this line: wellness and prevention yes, medical nutrition therapy no. Refer while keeping what remains: the behavior work around whatever plan licensed care writes.

**The eating-disorder lane, which is its own protocol.** Disordered eating red flags: eating in secret, rigid food rules that keep tightening, compensatory behaviors, distress that scales with food decisions, rapid weight change, a client whose food talk is mostly fear. This is not dietitian-referral territory; it is clinical-care territory (physician, therapist, or eating-disorder specialist), under WELL-00's warm-handoff craft: name the observation without diagnosing, say what is and is not yours, offer concrete next steps, and do NOT keep coaching food while the flags are live, because behavior-change tools pointed at food can sharpen the very rules doing the damage. Coaching can continue away from food (sleep, movement, connection) alongside licensed care where appropriate.

**The gray zone this pillar owns.** "Wellness" requests that are conditions in disguise: the prediabetic asking for a meal plan, the hypertensive asking about sodium targets, the client whose physician "told them to lose weight" with no plan attached. The craft is a referral WITH a coaching offer: licensed care owns the targets; you own the adherence, environment, and habit machinery once targets exist. That division is not a consolation prize; sections 2 and 3 of this course are the evidence that it is where the outcome actually lives.

**Self-coaching, once more.** The capstone will ask you to apply the same flags to yourself. Rigid rules that keep tightening and food decisions that generate outsized distress are referral triggers in the mirror too.

:::reveal Why does coaching PAUSE on food specifically when eating-disorder flags are live? ||| Because behavior-change tools aimed at food (tracking, rules, goals) can sharpen the rigid rules and monitoring already doing the damage. The move is a warm handoff to clinical care, with coaching continuing away from food where appropriate, never a food-focused push through the flags.

:::reveal A physician told your client to 'lose weight' and offered nothing else. Draw the division of labor. ||| Targets and any therapeutic diet belong to licensed care: encourage the client to ask the physician or a dietitian for the plan. Everything around it is yours: adherence structures, environment design, fiber-forward additions, self-monitoring, and the framing conversation. The evidence of this whole course says that half is where the outcome lives.

## Vocabulary
- **Clinical referral lane**: condition-directed diet questions routed to registered dietitians and physicians; the drift test's formal destination.
- **Disordered-eating red flags**: secret eating, tightening rules, compensatory behavior, distress scaling with food decisions; triggers for the clinical-care handoff, not dietitian referral.
- **Condition in disguise**: a "wellness" request that is actually a diagnosis question, like sodium targets from a hypertensive client; the pillar's characteristic gray zone.
- **Referral with a coaching offer**: the handoff that keeps the relationship: licensed care owns targets, coaching owns the adherence and environment machinery around them.

## Sources
American Council on Exercise. (n.d.). *Position statement on nutrition scope of practice for exercise professionals and health coaches*. https://contentcdn.eacefitness.com/certifiednews/images/article/pdfs/NutritionScopeOfPractice.pdf

Michigan Compiled Laws § 333.18353. (2024). *Exemptions*. Michigan Legislature. https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-333-18353

National Board for Health & Wellness Coaching. (n.d.). *Scope of practice*. https://nbhwc.org/scope-of-practice/`,
    },
    {
      slug: "final-coaching-nutrition",
      title: "13 · Final: coaching nutrition",
      section: "Section 4 · The craft",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 10,
        questions: [
          {
            prompt: "The WELL-03 division of labor between your CNC and your coaching is:",
            options: [
              "The CNC carries nutrition content for healthy clients; coaching carries the behavior, environment, and adherence layer",
              "The CNC authorizes delivering medical nutrition therapy once sufficient coaching rapport has been established",
              "Coaching replaces the CNC's content entirely for any client with a health goal",
              "The two credentials merge into one scope covering all nutrition services",
            ],
            correctIndex: 0,
            explanation:
              "The thin-bridge premise: content stays with the credential that carries it, behavior craft is what this course adds, and nothing in either credential opens the licensed core of MNT and therapeutic diets.",
            sourceLessonSlug: "coaching-eating-not-prescribing",
          },
          {
            prompt: "Which is the lawful cousin of 'setting macro targets for a client's prediabetes'?",
            options: [
              "Encouraging the client to get targets from a dietitian, then coaching adherence and environment around them",
              "Setting the same macronutrient targets but labeling them wellness suggestions in the client's written summary",
              "Providing the targets verbally so no prescriptive document exists afterward",
              "Declining all further nutrition conversation with the client permanently",
            ],
            correctIndex: 0,
            explanation:
              "Condition-directed targets are MNT territory regardless of labeling or format. The lawful cousin keeps the client: licensed care writes the targets, coaching owns the adherence machinery, which the trials say is where outcomes live anyway.",
            sourceLessonSlug: "referral-on-this-pillar",
          },
          {
            prompt: "DIETFITS' contribution to the 'which diet' conversation is:",
            options: [
              "Equivalent 12-month weight loss on healthy low-fat and low-carb, with neither genotype nor insulin secretion predicting the winner",
              "Proof that low-carbohydrate eating is metabolically superior for most adults, regardless of food quality or adherence levels",
              "Evidence that genotype testing should guide every diet recommendation",
              "A demonstration that neither diet works without prescribed calorie limits",
            ],
            correctIndex: 0,
            explanation:
              "Minus 5.3 vs minus 6.0 kg, difference crossing zero, both personalization hypotheses null. The shared quality-and-sustainability coaching carried the result; no calorie prescriptions were used.",
            sourceLessonSlug: "dietfits-the-composition-answer",
          },
          {
            prompt: "The strongest long-term predictor among POUNDS LOST's adherence dimensions was:",
            options: [
              "Early behavioral adherence: attendance and self-monitoring in the first six months",
              "Early dietary adherence: hitting the prescribed macronutrient targets precisely",
              "The specific macronutrient composition each participant was assigned",
              "Baseline motivation scores measured before the intervention began",
            ],
            correctIndex: 0,
            explanation:
              "R = 0.52 at six months and 0.37 at twenty-four for the showing-up behaviors; early dietary adherence predicted almost nothing durable. Coaching leverage lives in behavioral adherence.",
            sourceLessonSlug: "adherence-the-active-ingredient",
          },
          {
            prompt: "Miketinas' fiber analysis found adherent participants ate and lost:",
            options: [
              "25.2 g/day of fiber (vs 21.1) and 9.3 kg (vs 6.4), with fiber the model's most influential predictor",
              "40 g/day of fiber (versus 15) and twice the weight loss of any other measured subgroup in the entire trial",
              "Identical fiber to non-adherents, with weight differences from protein alone",
              "Less fiber than non-adherents, since restriction lowered food volume overall",
            ],
            correctIndex: 0,
            explanation:
              "Fiber led the model (beta minus 0.37) and was strongly associated with adherence itself: one lever moving both the diet's quality and the staying-on-it, which is why this course crowns it.",
            sourceLessonSlug: "fiber-and-energy-density",
          },
          {
            prompt: "The Hall trial's central finding was that ultra-processed food:",
            options: [
              "Drove about 508 extra kcal/day and 0.9 kg of two-week gain despite nutrient-matched menus, eaten faster",
              "Caused weight gain only in the periods when its added-sugar content exceeded the unprocessed comparison diet's",
              "Reduced intake through hyper-palatability-induced early satiety signals",
              "Affected self-reported satisfaction but not objectively measured intake",
            ],
            correctIndex: 0,
            explanation:
              "With presented calories, density, macros, sugar, sodium, and fiber matched, form alone moved intake by a meal a day and weight by 0.9 kg each direction, with faster eating as a measured mechanism.",
            sourceLessonSlug: "the-hall-experiment",
          },
          {
            prompt: "The coaching reframe the food-environment evidence supports is:",
            options: [
              "'The environment is designed against you, so we will design against it': structure over willpower",
              "'Discipline is the real differentiator in the end, since food environments affect every client equally'",
              "'Policy changes will soon fix food environments, so coaching can wait'",
              "'Low-income clients cannot benefit from coaching until incomes change'",
            ],
            correctIndex: 0,
            explanation:
              "Qualitative synthesis shows environments consistently undermining effort (hardest on low incomes), policy reviews show isolated measures stalling at intermediate outcomes, and the Hall trial shows form driving intake. The response is design: defaults, shopping structure, if-thens, budget-fit.",
            sourceLessonSlug: "the-food-environment",
          },
          {
            prompt: "Budget-fit is a first-class constraint in this course because:",
            options: [
              "Food insecurity associates with higher obesity odds (OR 1.50) through reliance on cheap, energy-dense food",
              "Expensive foods are inherently more nutritious than affordable ones",
              "Coaching contracts legally require financial means testing of clients",
              "The trials show weight loss only occurs reliably above a defined weekly food-spending threshold per household",
            ],
            correctIndex: 0,
            explanation:
              "Eskandari's meta-analysis plus the qualitative record: cost pushes people toward energy-dense calories. Proposing changes that ignore budget is designing plans that fail, so cost-fit is built into every swap.",
            sourceLessonSlug: "the-food-environment",
          },
          {
            prompt: "Which statement prices the two framings the way the evidence does?",
            options: [
              "Each led somewhere first (weight-loss: BMI; weight-neutral: LDL and intuitive eating) and both held broad gains at 24 months",
              "Weight-neutral programs decisively outperformed weight-loss programs on every single trial outcome measured at both time points",
              "Weight-loss programs outperformed weight-neutral programs on every measured outcome",
              "Neither framing produced any outcome differences at any time point measured",
            ],
            correctIndex: 0,
            explanation:
              "Mensinger's head-to-head: distinct early wins, shared durable gains, no outcome where weight-neutral was inferior. The menu reading, not the war reading, is what the trial supports.",
            sourceLessonSlug: "weight-neutral-and-weight-loss",
          },
          {
            prompt: "A coach tells a prospect: 'Weight-neutral coaching reduces your risk of heart attack.' The problem is:",
            options: [
              "No weight-neutral evidence reaches hard endpoints; the trials measure intermediate markers and quality of life over months to a couple of years",
              "The claim actually understates the published evidence, which shows cardiovascular mortality benefits for weight-neutral programs as well",
              "Heart-attack risk may only be discussed by cardiologists in any context",
              "Weight-neutral approaches showed no cardiometabolic effects of any kind",
            ],
            correctIndex: 0,
            explanation:
              "Intermediate markers (LDL, blood pressure, glucose) improved in some trials; events and mortality were never measured. The claim outruns the evidence, which is this program's definition of the line not to cross.",
            sourceLessonSlug: "weight-neutral-and-weight-loss",
          },
          {
            prompt: "The 'monitor the behavior, not always the food' principle exists because:",
            options: [
              "Self-monitoring predicts outcomes, but calorie ledgers carry obsession risk that behavior counts avoid",
              "Food intake is impossible to measure with any acceptable accuracy outside inpatient laboratory conditions",
              "Behavior monitoring is a legal requirement of the coaching scope",
              "Calorie tracking was shown to cause weight gain in the adherence trials",
            ],
            correctIndex: 0,
            explanation:
              "The trials crown self-monitoring, and food tracking is the version most likely to turn rigid. Counting meals at the table, additions, and eating speed keeps the crowned tool inside the behavioral-adherence dimension at lower psychological cost.",
            sourceLessonSlug: "the-eating-conversation",
          },
          {
            prompt: "A client's food talk has become mostly fear, with tightening rules and secret eating. The move is:",
            options: [
              "A warm handoff to clinical care, pausing food-focused coaching because behavior tools can sharpen the damaging rules",
              "Doubling down on detailed food tracking so the secret patterns are brought fully into the open where coaching can address them",
              "A referral to a registered dietitian for a more flexible meal plan",
              "Continuing food coaching unchanged while suggesting a therapist eventually",
            ],
            correctIndex: 0,
            explanation:
              "These are disordered-eating flags: clinical-care territory, not dietitian territory. Food-focused coaching pauses because tracking and rules can worsen exactly what is wrong; coaching may continue away from food alongside licensed care.",
            sourceLessonSlug: "referral-on-this-pillar",
          },
          {
            prompt: "Why does this course teach 'be almost boring about food and relentless about behavior'?",
            options: [
              "Because the trials show behavior around eating out-predicting diet content, and behavior is the coach's whole jurisdiction",
              "Because detailed food knowledge is unnecessary for anyone already holding a CNC credential in good standing",
              "Because clients respond best to coaches who avoid all nutrition topics",
              "Because discussing food content is prohibited by every state statute",
            ],
            correctIndex: 0,
            explanation:
              "DIETFITS, A TO Z, and POUNDS LOST converge: composition mattered far less than adherence, and behavioral adherence predicted the long game. The lane and the leverage point at the same place.",
            sourceLessonSlug: "adherence-the-active-ingredient",
          },
          {
            prompt: "The Cooksey case's two-sided moral, applied to this course, is:",
            options: [
              "General nutrition speech and coaching enjoy constitutional protection, while individualized clinical nutrition care remains regulable",
              "All nutrition advice offered by unlicensed people is constitutionally protected speech in every form and every single jurisdiction",
              "No unlicensed person may discuss food publicly in any U.S. jurisdiction",
              "The First Amendment abolished state dietetics licensure nationwide",
            ],
            correctIndex: 0,
            explanation:
              "The coaching lane runs between the posts: classes, opinions, stories, and general education are protected; MNT and condition-directed individualized care remain the licensed core. Neither extreme reading survives the case.",
            sourceLessonSlug: "coaching-eating-not-prescribing",
          },
        ],
      },
    },
  ],
};
