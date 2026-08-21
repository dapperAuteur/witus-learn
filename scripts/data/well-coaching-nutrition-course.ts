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

    {
      slug: "quiz-the-lane",
      title: "3 · Knowledge check: the lane",
      section: "Section 1 · The lane",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "Why does this course say nutrition is the pillar where the lane has 'actual legal walls'?",
            options: [
              "Eating questions drift toward disease faster than movement questions",
              "Nutrition advice carries higher liability insurance requirements",
              "Dietetics is the only health profession with title protection in every state",
              "Food recommendations can produce harm faster than exercise recommendations",
            ],
            correctIndex: 0,
            explanation:
              "Drift speed is the reason. WELL-00 taught the legal structure; this pillar is where it bites, because a wellness question becomes a condition question in one sentence.",
            sourceLessonSlug: "coaching-eating-not-prescribing",
          },
          {
            prompt: "What does a CNC authorize, and what does no coaching credential authorize?",
            options: [
              "General nutrition coaching for healthy adults; not MNT, therapeutic diets, or clinical assessment",
              "Individualized meal planning for healthy adults; not therapeutic diets for diagnosed conditions",
              "Nutritional assessment and general coaching; not supplement recommendation",
              "All nutrition work short of diagnosis; not the use of protected titles",
            ],
            correctIndex: 0,
            explanation:
              "The licensed core is three things: MNT, therapeutic diets for diagnosed conditions, and individualized clinical assessment. Individualized meal planning is outside every published scope, not inside the CNC's.",
            sourceLessonSlug: "coaching-eating-not-prescribing",
          },
          {
            prompt: "What is 'medical nutrition therapy'?",
            options: [
              "Nutrition care to treat a diagnosed condition; the licensed core every scope walls off",
              "Any nutrition advice delivered to a client under medical care",
              "Nutrition assessment performed before a therapeutic plan is written",
              "Dietary guidance intended to prevent rather than treat disease",
            ],
            correctIndex: 0,
            explanation:
              "Treatment of a diagnosed condition. Note the contrast with prevention: Michigan's exemption expressly protects individualized recommendations for wellness or PRIMARY PREVENTION, and stops at therapy.",
            sourceLessonSlug: "coaching-eating-not-prescribing",
          },
          {
            prompt: "Which activities does Michigan's exemption expressly keep lawful for unlicensed people?",
            options: [
              "General nonmedical information, individualized wellness or prevention advice, behavior-change management, coaching, weight management",
              "General nutrition information and classes only, with individualized work reserved to licensees",
              "All nutrition work provided no fee is charged and no title is used",
              "Behavior-change management and coaching only, with all food guidance reserved",
            ],
            correctIndex: 0,
            explanation:
              "The list is remarkably wide, and it explicitly includes INDIVIDUALIZED recommendations, provided they are for wellness or primary prevention rather than therapy, and no protected title is used.",
            sourceLessonSlug: "coaching-eating-not-prescribing",
          },
          {
            prompt: "What is the 'drift test'?",
            options: [
              "The silent pre-check of every eating conversation: condition or behavior?",
              "The check for whether a client's goals have shifted since intake",
              "The test of whether a coach's language has become prescriptive over time",
              "The review of whether a client's diet has drifted from the agreed plan",
            ],
            correctIndex: 0,
            explanation:
              "One question, asked before speaking. Conditions refer out; behavior stays, and the lesson's example pair makes the distinction concrete.",
            sourceLessonSlug: "coaching-eating-not-prescribing",
          },
          {
            prompt: "Apply the drift test: 'I know what to eat and I keep not doing it.'",
            options: [
              "Behavior, and the entire reason this program exists",
              "A condition question in disguise, since the knowledge claim may be inaccurate",
              "Ambiguous, requiring assessment before it can be classified",
              "Behavior, but outside scope without a dietitian's involvement",
            ],
            correctIndex: 0,
            explanation:
              "Pure behavior. The lesson pairs it against 'what should I eat for my kidney disease', which is a condition and belongs to a registered dietitian.",
            sourceLessonSlug: "coaching-eating-not-prescribing",
          },
          {
            prompt: "How does the course characterize the width of the nutrition lane?",
            options: [
              "Narrow about WHAT to eat for a disease, wide about HOW a person changes eating",
              "Narrow in both directions, which is why the pillar is taught defensively",
              "Wide about what to eat for wellness, narrow about behavior change",
              "Narrow for unlicensed coaches, wide for those holding a nutrition credential",
            ],
            correctIndex: 0,
            explanation:
              "That framing is the lesson's whole argument. The restriction is on disease-directed content, and everything about how a person changes eating remains available.",
            sourceLessonSlug: "coaching-eating-not-prescribing",
          },
          {
            prompt: "What is 'non-prescriptive coaching' as this course defines it?",
            options: [
              "General education plus behavior change, never individualized diet prescriptions for conditions",
              "Nutrition work in which the coach never names specific foods",
              "Nutrition work that avoids any numerical target for intake",
              "Nutrition work delivered without a written plan of any kind",
            ],
            correctIndex: 0,
            explanation:
              "The restriction is on condition-directed prescription, not on naming foods, using numbers, or writing things down. Reading it more broadly gives away lane the coach actually has.",
            sourceLessonSlug: "coaching-eating-not-prescribing",
          },
          {
            prompt: "What is a 'wellness exemption'?",
            options: [
              "Statutory language, like MCL 333.18353, keeping named coaching activities lawful on conditions",
              "A waiver a client signs acknowledging the coach is not a licensed provider",
              "A regulatory exception for coaches working under clinician supervision",
              "The general principle that wellness work falls outside practice acts",
            ],
            correctIndex: 0,
            explanation:
              "It is statutory and conditional, not a general principle or a waiver. WELL-00 made the same point: coaching is lawful in Michigan because a statute says so on conditions, not because nothing addresses it.",
            sourceLessonSlug: "coaching-eating-not-prescribing",
          },
          {
            prompt: "What constitutional line did Cooksey v. Futrell draw, as this course summarizes it?",
            options: [
              "General nutrition speech, stories, classes, and opinions are protected; individualized clinical care is regulable",
              "All nutrition speech is protected regardless of whether it is individualized",
              "Only unpaid nutrition speech is protected; charging a fee removes the protection",
              "State dietetics boards may not regulate any speech delivered online",
            ],
            correctIndex: 0,
            explanation:
              "Two-sided, and the coaching lane runs between the posts. Note what the line is NOT drawn on: payment or medium.",
            sourceLessonSlug: "coaching-eating-not-prescribing",
          },
          {
            prompt: "Why does this lesson inventory the PERMISSIONS rather than stopping at prohibitions?",
            options: [
              "The converged guidance authorizes more than most coaches ever deploy",
              "Prohibitions vary by state while permissions are uniform",
              "Permissions are easier for clients to understand than restrictions",
              "The scope documents themselves are framed positively",
            ],
            correctIndex: 0,
            explanation:
              "Coaches under-use their lane. Scope teaching that stops at prohibitions produces a coach who is legally safe and practically timid.",
            sourceLessonSlug: "what-the-lane-contains",
          },
          {
            prompt: "Which education materials are expressly inside every published scope?",
            options: [
              "The Dietary Guidelines, MyPlate, and materials developed or endorsed by dietitians and physicians",
              "Any peer-reviewed nutrition research the coach can cite accurately",
              "Any material published by a recognized certification body",
              "Materials the client's own physician has provided to them",
            ],
            correctIndex: 0,
            explanation:
              "Government guidelines plus clinician-developed or clinician-endorsed materials. Peer-reviewed papers and certification content are not the channel the scopes name.",
            sourceLessonSlug: "what-the-lane-contains",
          },
          {
            prompt: "Which four teaching activities does the lesson list as inside the education permission?",
            options: [
              "Portion education, label reading, food-group teaching, cooking and food-prep skills",
              "Portion education, macronutrient targets, label reading, and supplement evaluation",
              "Label reading, meal planning, food-group teaching, and calorie estimation",
              "Cooking skills, portion education, nutritional assessment, and shopping strategy",
            ],
            correctIndex: 0,
            explanation:
              "All four are general education. Macronutrient targets, meal planning, and nutritional assessment are the out-of-scope items that get mistaken for teaching.",
            sourceLessonSlug: "what-the-lane-contains",
          },
          {
            prompt: "Why does the entire WELL-01 toolkit apply to eating 'without a single scope caveat'?",
            options: [
              "None of it tells anyone what to eat",
              "Behavior change is expressly permitted by the Michigan statute",
              "Coaching credentials authorize behavioral work in all jurisdictions",
              "The toolkit was validated in nutrition populations specifically",
            ],
            correctIndex: 0,
            explanation:
              "The reason is structural rather than permissive: nothing in any practice act reserves the behavior-change conversation, because none of it constitutes dietary advice.",
            sourceLessonSlug: "what-the-lane-contains",
          },
          {
            prompt: "What does the lesson say about environment and logistics work?",
            options: [
              "Not the consolation tier: the environment evidence suggests it is where the leverage lives",
              "It is a fallback for clients whose conditions preclude direct nutrition work",
              "It is permitted but low-yield compared with direct dietary education",
              "It requires a dietitian's involvement once specific foods are named",
            ],
            correctIndex: 0,
            explanation:
              "Section 3 makes the case: matched-nutrient ultra-processed food drove 508 extra kilocalories a day, and 26 studies found environments consistently making the healthier choice harder.",
            sourceLessonSlug: "what-the-lane-contains",
          },
          {
            prompt: "What four things does 'food logistics' cover?",
            options: [
              "Shopping strategy, meal structure and timing as behavior, pantry and workplace design, cost and social planning",
              "Meal prep, portion control, grocery budgeting, and food storage",
              "Shopping, cooking, portioning, and tracking",
              "Meal timing as therapy, shopping routines, cost management, and supplement scheduling",
            ],
            correctIndex: 0,
            explanation:
              "Note 'meal structure and timing as BEHAVIOR, not as therapy'. The qualifier is what keeps timing work inside the lane rather than turning it into a therapeutic protocol.",
            sourceLessonSlug: "what-the-lane-contains",
          },
          {
            prompt: "When a client already has a dietitian's plan, what is the coach's defined role?",
            options: [
              "Implementation support: adherence, obstacles, accountability",
              "Reviewing the plan for behavioral feasibility and suggesting modifications",
              "Translating the plan into weekly targets the coach monitors",
              "Providing a parallel plan the client can follow when the dietitian's is impractical",
            ],
            correctIndex: 0,
            explanation:
              "Three functions, all behavioral. The lesson is explicit that this is not a workaround of the scope line but the exact collaboration every scope document describes.",
            sourceLessonSlug: "what-the-lane-contains",
          },
          {
            prompt: "Which are the four tells that you have left the lane?",
            options: [
              "A meal plan for one person, macro targets for a condition, a supplement recommendation, adjusting a clinician's plan",
              "Naming specific foods, using numbers, writing a plan down, discussing a diagnosis",
              "Charging for nutrition work, using the word nutritionist, working with clinical clients, giving written advice",
              "Setting any target, discussing supplements, referencing a diagnosis, coaching weight loss",
            ],
            correctIndex: 0,
            explanation:
              "Four specific acts, each with a lawful nearby cousin. The distractors sweep in lawful activities, which is the timidity error the permissions lesson exists to prevent.",
            sourceLessonSlug: "what-the-lane-contains",
          },
          {
            prompt: "What is a 'lawful cousin,' and why does the lesson call knowing it 'the craft'?",
            options: [
              "The in-scope neighbor of an out-of-scope act: guideline education beside meal planning",
              "A related credential that authorizes what the coaching credential does not",
              "A colleague in a licensed profession to whom the work can be referred",
              "The permitted version of a technique once a client consents in writing",
            ],
            correctIndex: 0,
            explanation:
              "Every prohibited act has a nearby permitted one. Knowing the cousin is what lets a coach answer rather than simply refuse, which is the difference between scope discipline and unhelpfulness.",
            sourceLessonSlug: "what-the-lane-contains",
          },
          {
            prompt: "A client asks for a supplement recommendation. What is the lawful cousin?",
            options: [
              "Educate on what authorities say about the category; route the recommendation to their clinician",
              "Recommend a category rather than a specific product, since categories are general information",
              "Provide the recommendation with a written disclaimer that it is not medical advice",
              "Decline entirely, since supplements cannot be discussed within any coaching scope",
            ],
            correctIndex: 0,
            explanation:
              "General education stays in; the recommendation goes out. Recommending a category is still recommending, and declining to discuss it at all gives away lane the coach has.",
            sourceLessonSlug: "what-the-lane-contains",
          },
          {
            prompt: "What is 'recognized-authority education'?",
            options: [
              "Teaching from government guidelines and clinician-endorsed materials; every scope permits this channel",
              "Education delivered by a coach holding a recognized nutrition certification",
              "Teaching content that has been peer-reviewed and published",
              "Education a client's own clinician has authorized the coach to deliver",
            ],
            correctIndex: 0,
            explanation:
              "The authority is the material's source, not the coach's credential or the client's clinician. That is what makes it a channel a coach can rely on universally.",
            sourceLessonSlug: "what-the-lane-contains",
          },
          {
            prompt: "A hypertensive client asks what sodium target they should hit. What does the drift test return?",
            options: [
              "A condition question: the target belongs to licensed care; the adherence work stays yours",
              "A behavior question, since sodium intake is an everyday eating pattern",
              "A wellness question, since hypertension management is primary prevention",
              "An education question, since sodium guidance appears in the Dietary Guidelines",
            ],
            correctIndex: 0,
            explanation:
              "It is one of the lesson's named 'conditions in disguise'. Sodium guidance does appear in the guidelines, but a TARGET for a diagnosed condition is therapy.",
            sourceLessonSlug: "coaching-eating-not-prescribing",
          },
          {
            prompt: "Which is a correctly drawn division of labor for a client whose physician told them to lose weight with no plan attached?",
            options: [
              "Licensed care owns the targets; the coach owns adherence, environment, and habit machinery",
              "The coach sets interim targets and the physician reviews them at the next appointment",
              "The coach declines the work entirely until a dietitian is involved",
              "The coach proceeds with weight-loss coaching, since the physician has authorized it",
            ],
            correctIndex: 0,
            explanation:
              "A physician's instruction does not transfer their authority to the coach. Encouraging the client to obtain the actual plan, then coaching everything around it, is the referral-with-a-coaching-offer pattern.",
            sourceLessonSlug: "coaching-eating-not-prescribing",
          },
          {
            prompt: "What makes a coach who can 'make a nutrition label legible in ninety seconds' valuable?",
            options: [
              "Real, legal value delivered entirely inside the education permission",
              "It substitutes for the individualized guidance the coach cannot provide",
              "It satisfies the education requirement most scopes impose on coaches",
              "It establishes the coach's expertise before behavior work begins",
            ],
            correctIndex: 0,
            explanation:
              "The lesson's point is that the permission channel is genuinely useful rather than a leftover. No scope imposes an education requirement, and label teaching is not a substitute for what is prohibited.",
            sourceLessonSlug: "what-the-lane-contains",
          },
          {
            prompt: "Why does the course teach the legal map by 'recapping from the verified primaries'?",
            options: [
              "WELL-00 established it against statute text; this pillar applies it rather than re-deriving it",
              "The primaries change frequently, so the recap keeps the material current",
              "Legal content requires citation in every course under the citation rule",
              "The recap satisfies the scope documents' requirement to reference source law",
            ],
            correctIndex: 0,
            explanation:
              "It is the program's bridging rule again: one skill, one home. WELL-00 owns the statutory work, and this course applies it where it bites hardest.",
            sourceLessonSlug: "coaching-eating-not-prescribing",
          },
          {
            prompt: "Which claim about the coaching lane would this course reject?",
            options: [
              "'Coaches cannot discuss specific foods with clients'",
              "'Coaches cannot build a meal plan for an individual client'",
              "'Coaches cannot set macronutrient targets for a diagnosed condition'",
              "'Coaches cannot recommend supplements'",
            ],
            correctIndex: 0,
            explanation:
              "Discussing specific foods is education and squarely permitted; the other three are on the tells list. Over-restricting is the error the permissions lesson exists to correct.",
            sourceLessonSlug: "what-the-lane-contains",
          },
          {
            prompt: "What does the lesson mean by 'behavior facilitation, unrestricted'?",
            options: [
              "No practice act reserves the behavior-change conversation",
              "Behavior work requires no scope consideration in any jurisdiction",
              "Coaches may facilitate behavior change around any topic including treatment",
              "Behavioral techniques are exempt from the title-protection rules",
            ],
            correctIndex: 0,
            explanation:
              "Practice acts reserve nutrition WORK, and behavior-change conversation is not nutrition work. That is a narrower and more defensible claim than a general exemption.",
            sourceLessonSlug: "what-the-lane-contains",
          },
          {
            prompt: "Which pairing correctly matches an out-of-scope act with its lawful cousin?",
            options: [
              "Macro targets for a condition, paired with coaching adherence to the dietitian's macros",
              "Building a meal plan, paired with building a template the client fills in",
              "Recommending a supplement, paired with recommending a trusted brand",
              "Adjusting a clinician's plan, paired with adjusting it only with the client's consent",
              ],
            correctIndex: 0,
            explanation:
              "The cousin keeps the content with the licensee and the behavior with the coach. The other three only disguise the prohibited act rather than replacing it.",
            sourceLessonSlug: "what-the-lane-contains",
          },
        ],
      },
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

**And the systematic review that settles it.** DIETFITS is one trial, however clean, so the honest question is whether the whole literature agrees. It does. A Cochrane review pooled **61 randomized trials with 6,925 participants** comparing low-carbohydrate against balanced-carbohydrate weight-reducing diets in adults with overweight or obesity, and found **little to no difference** in weight loss at both three-to-eight months and one-to-two years, in people with and without type 2 diabetes. The differences were under a kilogram, which is below anything a client would notice, and the certainty of the evidence was graded moderate to high (Naude et al., 2022).

Sixty-one trials is a different kind of statement from one trial. When a client arrives certain that carbohydrate is the variable, this is the number to have: not "one study found no difference" but "sixty-one trials found no difference that would matter to you."

**Coaching translation.** When a client asks "low-carb or low-fat?", the evidence-honest answer is: whichever quality-focused version you will still be eating in a year. That answer is not a dodge; it is the trial's actual result, and it converts a prescription question into a behavior question, which is your question.

:::reveal Give the DIETFITS numbers that answer the 'which diet' question. ||| 609 adults, 12 months: minus 5.3 kg healthy low-fat versus minus 6.0 kg healthy low-carbohydrate, difference 0.7 kg with a confidence interval crossing zero, and no genotype (P=.20) or insulin-secretion (P=.47) interaction. Composition was not the lever; the shared quality-and-sustainability coaching was.

:::reveal Why is DIETFITS good news for a NON-prescriptive coach specifically? ||| Because the effective ingredients were the ones both arms shared: whole-food quality, sustainability, and behavioral support, which is exactly the coaching layer. The part that did not matter, the macronutrient prescription, is the part outside your lane anyway.

## Vocabulary
- **DIETFITS**: the 609-adult, 12-month randomized trial that found equivalent weight loss on healthy low-fat and healthy low-carbohydrate diets.
- **Diet-by-genotype interaction**: the tested hypothesis that genes predict which diet works for whom; DIETFITS found none (P=.20).
- **Healthy-diet arms**: DIETFITS' design choice: both diets emphasized whole foods and quality, so the comparison isolated composition rather than junk versus not.
- **Sustainability framing**: the evidence-honest answer to "which diet": the quality-focused version the client will still be eating in a year.
- **Clinically meaningful difference**: a difference large enough to matter to a person, as distinct from one merely detectable; the low-carb versus balanced gap is under a kilogram and fails this test.
- **Certainty grading**: a review's judgment of how much its estimate can be trusted, separate from the estimate's size; Naude's was moderate to high, which is unusually strong for this literature.

## Sources
Gardner, C. D., Trepanowski, J. F., Del Gobbo, L. C., et al. (2018). Effect of low-fat vs low-carbohydrate diet on 12-month weight loss in overweight adults and the association with genotype pattern or insulin secretion: The DIETFITS randomized clinical trial. *JAMA, 319*(7), 667-679. https://pubmed.ncbi.nlm.nih.gov/29466592/

Naude, C. E., Brand, A., Schoonees, A., Nguyen, K. A., Chaplin, M., & Volmink, J. (2022). Low-carbohydrate versus balanced-carbohydrate diets for reducing weight and cardiovascular risk. *Cochrane Database of Systematic Reviews, 1*(1), CD013334. https://pubmed.ncbi.nlm.nih.gov/35088407/`,
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
              "Fiber intake, standardized beta minus 0.37",
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
          {
            prompt: "What were DIETFITS' twelve-month weight results?",
            options: [
              "Minus 5.3 kg low-fat versus minus 6.0 kg low-carb; a 0.7 kg difference, CI crossing zero",
              "Minus 6.0 kg low-fat versus minus 5.3 kg low-carbohydrate, a 0.7 kg difference favoring low-fat",
              "Minus 5.3 kg versus minus 9.0 kg, favoring low-carbohydrate significantly",
              "No weight loss in either arm, since both were quality-focused rather than restrictive",
            ],
            correctIndex: 0,
            explanation:
              "Both arms lost meaningful weight; the difference between them was 0.7 kg with a confidence interval crossing zero, which is the statistical way of saying it could as easily have gone the other way.",
            sourceLessonSlug: "dietfits-the-composition-answer",
          },
          {
            prompt: "Which two pre-registered hypotheses did DIETFITS test, and what did it find?",
            options: [
              "Genotype (P = .20) and baseline insulin secretion (P = .47); neither predicted who succeeded",
              "Genotype pattern (P = .02) and insulin secretion (P = .47); genotype predicted success but insulin did not",
              "Baseline BMI and insulin secretion; neither predicted success on either diet",
              "Genotype pattern and adherence; adherence predicted success and genotype did not",
            ],
            correctIndex: 0,
            explanation:
              "The two most popular 'which diet is right for YOU' hypotheses, tested prospectively and both null. Pre-registration is what makes those nulls credible rather than exploratory.",
            sourceLessonSlug: "dietfits-the-composition-answer",
          },
          {
            prompt: "What behavioral treatment did both DIETFITS arms receive?",
            options: [
              "22 small-group sessions toward the lowest intake they could MAINTAIN, emphasizing whole foods",
              "Written meal plans with monthly check-ins and calorie targets",
              "12 individual counselling sessions focused on macronutrient compliance",
              "Digital self-monitoring with automated feedback and no group contact",
            ],
            correctIndex: 0,
            explanation:
              "Twenty-two group sessions, with maintainability and diet quality as the explicit emphasis. What both arms shared is the finding, and it is exactly the coaching layer.",
            sourceLessonSlug: "dietfits-the-composition-answer",
          },
          {
            prompt: "What macronutrient splits did the DIETFITS arms actually achieve?",
            options: [
              "48 versus 30 percent carbohydrate, and 29 versus 45 percent fat",
              "55 versus 20 percent carbohydrate, and 25 versus 55 percent fat",
              "40 versus 40 percent carbohydrate, since both arms converged",
              "48 versus 30 percent carbohydrate, with fat held constant in both arms",
            ],
            correctIndex: 0,
            explanation:
              "Genuinely different splits, which is what makes the null result meaningful: the arms separated on the variable being tested, and the outcome still did not follow.",
            sourceLessonSlug: "dietfits-the-composition-answer",
          },
          {
            prompt: "Why is DIETFITS 'good news for a non-prescriptive coach specifically'?",
            options: [
              "The effective ingredients were what both arms shared: the coaching layer. The prescription did not matter",
              "It shows that dietary prescription is unnecessary for weight loss in any population",
              "It demonstrates that group coaching outperforms individual dietary counselling",
              "It establishes that coaches can deliver equivalent results to registered dietitians",
            ],
            correctIndex: 0,
            explanation:
              "The convenient alignment is the point: the prescription, which you may not deliver, is the part that did not matter, and the behavioral support, which you may, is the part that did.",
            sourceLessonSlug: "dietfits-the-composition-answer",
          },
          {
            prompt: "How large was the Cochrane review of low-carbohydrate versus balanced-carbohydrate diets?",
            options: [
              "61 randomized trials with 6,925 participants",
              "26 randomized trials with 3,222 participants",
              "61 randomized trials with 609 participants",
              "10 randomized trials with 6,925 participants",
            ],
            correctIndex: 0,
            explanation:
              "61 trials, 6,925 participants. The 609 figure is DIETFITS alone, and the course's point is that sixty-one trials is a different kind of statement from one.",
            sourceLessonSlug: "dietfits-the-composition-answer",
          },
          {
            prompt: "What did the Cochrane review find, and over what timeframes?",
            options: [
              "Little to no difference at three-to-eight months and one-to-two years, with and without type 2 diabetes",
              "A small advantage for low-carbohydrate at three-to-eight months that disappeared by two years",
              "Little to no difference in people without diabetes, but an advantage for low-carbohydrate in those with it",
              "A consistent advantage for balanced-carbohydrate diets at both timepoints",
            ],
            correctIndex: 0,
            explanation:
              "Both timeframes, both populations, differences under a kilogram. The diabetes subgroup matters because it is where the low-carbohydrate case is usually made strongest.",
            sourceLessonSlug: "dietfits-the-composition-answer",
          },
          {
            prompt: "How was the certainty of the Cochrane evidence graded, and why does that matter?",
            options: [
              "Moderate to high, unusually strong for this literature",
              "Low to very low, consistent with most nutrition evidence",
              "Not graded, since the review pooled heterogeneous interventions",
              "High for weight but low for cardiovascular outcomes",
            ],
            correctIndex: 0,
            explanation:
              "Moderate to high certainty on a null finding is a strong statement: it is not 'we could not detect a difference' but 'we are reasonably confident there is not a meaningful one'.",
            sourceLessonSlug: "dietfits-the-composition-answer",
          },
          {
            prompt: "What is a 'clinically meaningful difference'?",
            options: [
              "A difference large enough to matter to a person, not merely detectable",
              "A difference that reaches statistical significance in an adequately powered trial",
              "A difference confirmed across more than one independent trial",
              "A difference large enough to change clinical guidelines",
            ],
            correctIndex: 0,
            explanation:
              "Mattering to a person, not detectability. The low-carb versus balanced gap is under a kilogram, which fails the test regardless of what any significance test says.",
            sourceLessonSlug: "dietfits-the-composition-answer",
          },
          {
            prompt: "A client is certain carbohydrate is the variable. What is the strongest number to have?",
            options: [
              "Sixty-one trials found no difference that would matter to you",
              "One large trial found a 0.7 kilogram difference with a confidence interval crossing zero",
              "Genotype does not predict which diet works for whom",
              "Adherence correlates with weight change inside every diet group",
            ],
            correctIndex: 0,
            explanation:
              "All four statements are true and useful, but the lesson names this one specifically: sixty-one trials is a different kind of statement from one trial, however clean.",
            sourceLessonSlug: "dietfits-the-composition-answer",
          },
          {
            prompt: "What did A TO Z find about adherence within diet groups?",
            options: [
              "Adherence correlated with weight change inside every group: .42, .34, .38",
              "Adherence correlated with weight change only in the Atkins group",
              "Adherence was higher on Atkins, which explains its larger average loss",
              "Adherence was unrelated to weight change once diet assignment was controlled",
            ],
            correctIndex: 0,
            explanation:
              "Inside every group, at similar magnitudes. That within-group pattern is what makes adherence the variable rather than a proxy for which diet someone got.",
            sourceLessonSlug: "adherence-the-active-ingredient",
          },
          {
            prompt: "What did the most and least adherent tertiles lose in A TO Z?",
            options: [
              "Most adherent: 8.3 kg Atkins, 6.5 Ornish. Least adherent: 1.9 and 1.7 on the same diets",
              "Most adherent: 6.5 kg on Atkins, 8.3 on Ornish. Least adherent: 1.7 and 1.9",
              "Most adherent: 8.3 kg on Atkins, 1.9 on Ornish. Least adherent: 6.5 and 1.7",
              "Most adherent: 5.3 kg on Atkins, 6.0 on Ornish. Least adherent: 0.7 on both",
            ],
            correctIndex: 0,
            explanation:
              "Philosophically opposite diets produced nearly identical results at equal adherence, and enormously different results at different adherence. That contrast is the section's spine.",
            sourceLessonSlug: "adherence-the-active-ingredient",
          },
          {
            prompt: "Into which two constructs did adherence factor in POUNDS LOST?",
            options: [
              "Behavioral adherence (attending, self-monitoring, showing up) and dietary adherence (hitting macro targets)",
              "Short-term adherence and long-term adherence, measured at six and twenty-four months",
              "Self-reported adherence and biomarker-verified adherence",
              "Attendance adherence and self-monitoring adherence, tracked separately",
            ],
            correctIndex: 0,
            explanation:
              "Showing up versus hitting targets. The distinction is the whole finding, because the two predicted outcomes very differently.",
            sourceLessonSlug: "adherence-the-active-ingredient",
          },
          {
            prompt: "How did behavioral adherence vary across the four POUNDS LOST diet prescriptions?",
            options: [
              "It was identical across all four",
              "It was highest on the lowest-fat prescription",
              "It declined as the prescription became more restrictive",
              "It was not measured separately by prescription",
            ],
            correctIndex: 0,
            explanation:
              "Identical across all four. That rules out the explanation that some prescriptions are simply easier to show up for, which would otherwise confound the finding.",
            sourceLessonSlug: "adherence-the-active-ingredient",
          },
          {
            prompt: "What did EARLY behavioral adherence predict in the POUNDS LOST follow-up?",
            options: [
              "Weight and waist change, at canonical correlations of 0.52 at six months and 0.37 at 24",
              "Weight change at six months only, with no relationship at twenty-four",
              "Dietary adherence at twenty-four months, which then predicted weight",
              "Weight change at 0.52 and 0.37, but only in participants who attended all sessions",
            ],
            correctIndex: 0,
            explanation:
              "0.52 at six months and 0.37 at twenty-four, which is a durable relationship. Early dietary adherence, by contrast, predicted almost nothing durable.",
            sourceLessonSlug: "adherence-the-active-ingredient",
          },
          {
            prompt: "What is the coach's-eyes reading of the POUNDS LOST adherence findings?",
            options: [
              "The showing-up behaviors out-predicted the macro-target behaviors, by a lot",
              "Dietary precision matters most in the first six months and less thereafter",
              "Attendance is a proxy for motivation, which is the real predictor",
              "Both dimensions matter equally once measured over twenty-four months",
            ],
            correctIndex: 0,
            explanation:
              "Attendance, self-monitoring, and showing up beat hitting the numbers. That is a coach's leverage rather than a dietitian's, which is the section's practical payoff.",
            sourceLessonSlug: "adherence-the-active-ingredient",
          },
          {
            prompt: "What did the low-carbohydrate versus low-fat metabolic-syndrome meta-analysis find?",
            options: [
              "Both improve markers; weight loss itself best predicted fasting-glucose improvement",
              "Low-carbohydrate diets improved every marker more than low-fat diets",
              "Neither diet improved metabolic-syndrome markers once weight was controlled",
              "Low-fat diets improved glucose and low-carbohydrate improved lipids, with no overlap",
            ],
            correctIndex: 0,
            explanation:
              "Weight loss itself was the best predictor of glucose improvement, with end-of-study macronutrient intake mattering mainly for triglycerides and diastolic pressure.",
            sourceLessonSlug: "adherence-the-active-ingredient",
          },
          {
            prompt: "How does the course summarize composition's place in the causal chain?",
            options: [
              "Composition is not nothing; it is downstream of somebody adhering to something",
              "Composition is irrelevant once total calories are matched",
              "Composition matters primarily in clinical populations",
              "Composition determines adherence, which then determines outcomes",
            ],
            correctIndex: 0,
            explanation:
              "Downstream, not absent. The phrasing preserves the honest fact that macronutrients affect triglycerides and diastolic pressure, while putting them behind adherence in the order of coaching priorities.",
            sourceLessonSlug: "adherence-the-active-ingredient",
          },
          {
            prompt: "What permission do the diet trials give a coach, in this lesson's words?",
            options: [
              "To be almost boring about food and relentless about behavior",
              "To decline all conversations about macronutrients as out of scope",
              "To recommend whichever diet the client finds most appealing",
              "To prioritize diet quality over both composition and adherence",
            ],
            correctIndex: 0,
            explanation:
              "Boring about food, relentless about behavior. It is permission rather than restriction: the evidence says the coach's natural lane is also the high-leverage one.",
            sourceLessonSlug: "adherence-the-active-ingredient",
          },
          {
            prompt: "What was the single most influential dietary predictor of six-month weight change in POUNDS LOST?",
            options: [
              "Fiber intake, at a standardized beta of minus 0.37",
              "Total calorie intake, at a standardized beta of minus 0.37",
              "Energy density, at a standardized beta of minus 0.29",
              "Protein intake, at a standardized beta of minus 0.22",
            ],
            correctIndex: 0,
            explanation:
              "Fiber, and the model that produced it also held calories, fat, energy density, and demographics. Beating calories in that company is what makes the finding notable.",
            sourceLessonSlug: "fiber-and-energy-density",
          },
          {
            prompt: "What fiber intakes and weight losses distinguished adherent from non-adherent participants?",
            options: [
              "25.2 versus 21.1 grams a day; 9.3 versus 6.4 kilograms lost",
              "28.0 versus 21.1 grams a day, and 9.3 versus 6.4 kilograms lost",
              "25.2 versus 21.1 grams a day, and 6.4 versus 9.3 kilograms lost",
              "25.2 versus 15.0 grams a day, and 8.3 versus 1.9 kilograms lost",
            ],
            correctIndex: 0,
            explanation:
              "A four-gram difference in fiber alongside a three-kilogram difference in weight loss. The 8.3-versus-1.9 figures belong to A TO Z's adherence tertiles.",
            sourceLessonSlug: "fiber-and-energy-density",
          },
          {
            prompt: "Why is fiber described as 'a rare target that improves the diet and the adherence to it simultaneously'?",
            options: [
              "Fiber predicted weight loss AND was strongly associated with adherence",
              "Fiber increases satiety, which reduces the effort required to restrict",
              "Fiber targets are easier to hit than macronutrient targets",
              "Fiber-rich foods are cheaper, which removes a common adherence barrier",
            ],
            correctIndex: 0,
            explanation:
              "Two effects from one lever, both in the data. Satiety and cost are plausible mechanisms, but the claim rests on the measured fiber-adherence association.",
            sourceLessonSlug: "fiber-and-energy-density",
          },
          {
            prompt: "What does fiber drag along when a coach targets it?",
            options: [
              "Lower energy density, more volume per calorie, and displacement of what is being crowded out",
              "Higher protein intake and improved micronutrient adequacy",
              "Lower total calories and higher meal frequency",
              "Improved glycemic control and reduced sodium intake",
            ],
            correctIndex: 0,
            explanation:
              "Fiber arrives inside vegetables, fruits, legumes, and whole grains, so coaching toward those foods brings the rest with it. That bundling is what makes it a behavior lever rather than a nutrient target.",
            sourceLessonSlug: "fiber-and-energy-density",
          },
          {
            prompt: "Why is fiber coaching 'fully inside the lane'?",
            options: [
              "'Eat more plants toward the guideline ballpark' is general, guideline-anchored education",
              "Fiber is a nutrient rather than a food, so it falls outside dietary prescription",
              "Fiber recommendations carry no risk, so scope restrictions do not apply",
              "Fiber targets are set by the client rather than the coach",
            ],
            correctIndex: 0,
            explanation:
              "It runs through the recognized-authority education channel. The reason is the source of the content, not the nutrient's identity or its safety profile.",
            sourceLessonSlug: "fiber-and-energy-density",
          },
          {
            prompt: "Why does this course coach fiber as additions rather than as a gram target?",
            options: [
              "A gram target turns eating into arithmetic; additions are countable, anchorable, minimum-versionable",
              "Gram targets are outside scope, while additions are general education",
              "Clients cannot accurately estimate fiber content, making targets unreliable",
              "Additions produce larger fiber increases than targets in the trial data",
            ],
            correctIndex: 0,
            explanation:
              "Framing and coachability, not scope or accuracy. Note the course does name a ballpark (25-plus grams) as education; what it avoids is making the number the behavior.",
            sourceLessonSlug: "fiber-and-energy-density",
          },
          {
            prompt: "What three additions does the lesson name as the craft version of fiber coaching?",
            options: [
              "The bean addition, the front-loaded vegetable, the whole-grain swap",
              "The protein addition, the vegetable side, the fruit dessert",
              "The salad starter, the legume swap, the fiber supplement",
              "The whole-grain breakfast, the vegetable snack, the smoothie addition",
            ],
            correctIndex: 0,
            explanation:
              "Each is a concrete chosen behavior rather than a quantity. A fiber supplement would also be out of scope, which is one reason it does not appear on the list.",
            sourceLessonSlug: "fiber-and-energy-density",
          },
          {
            prompt: "Why does addition coaching beat restriction coaching, per this lesson's analogy?",
            options: [
              "Same reason affirmation beats criticism: it gives the client something to DO, and doing is coachable",
              "Because restriction triggers the what-the-hell effect more readily",
              "Because additions are easier to self-monitor than restrictions",
              "Because restriction framing falls outside the non-prescriptive lane",
            ],
            correctIndex: 0,
            explanation:
              "The analogy is to lesson 9 of WELL-01. All four statements have some merit, but the lesson's stated reason is the actionability of an addition.",
            sourceLessonSlug: "fiber-and-energy-density",
          },
          {
            prompt: "What is 'crowding out'?",
            options: [
              "The addition strategy's mechanism: added foods displace reduced ones, with no restriction conversation",
              "The tendency of ultra-processed foods to displace whole foods in a diet",
              "The effect of a busy schedule pushing out meal preparation",
              "The competition between multiple simultaneous behavior goals",
            ],
            correctIndex: 0,
            explanation:
              "Displacement without a restriction conversation is the whole trick. It is how a coach reduces something without ever discussing reducing it.",
            sourceLessonSlug: "fiber-and-energy-density",
          },
          {
            prompt: "What is 'energy density'?",
            options: [
              "Calories per unit of food volume; fiber-rich whole foods sit low, giving fullness per calorie",
              "The proportion of a food's calories coming from fat",
              "The rate at which a food's calories are absorbed",
              "The calorie content of a standard serving of a given food",
            ],
            correctIndex: 0,
            explanation:
              "Calories per volume. That is why it travels with fiber: the same foods that carry fiber carry water and bulk, so fullness arrives at fewer calories.",
            sourceLessonSlug: "fiber-and-energy-density",
          },
          {
            prompt: "A client wants to debate optimal protein percentage for a whole session. What do the trials say to do?",
            options: [
              "Redirect the energy toward behavioral adherence, the variable that predicts their outcome",
              "Answer the question thoroughly, since accurate information builds trust",
              "Decline the topic, since macronutrient guidance is outside the coaching lane",
              "Set a protein target and use it as the session's behavior anchor",
            ],
            correctIndex: 0,
            explanation:
              "DIETFITS, A TO Z, POUNDS LOST, and now Naude all point the same way. Note that discussing protein generally is not out of scope; it is just the wrong lever.",
            sourceLessonSlug: "adherence-the-active-ingredient",
          },
          {
            prompt: "Which finding most directly supports coaching attendance and self-monitoring over dietary precision?",
            options: [
              "Early BEHAVIORAL adherence predicted weight and waist at 0.52 and 0.37; dietary adherence, almost nothing",
              "Adherence correlated with weight change inside every A TO Z diet group",
              "Fiber was the most influential dietary predictor of six-month weight change",
              "Sixty-one Cochrane trials found no meaningful difference between carbohydrate levels",
            ],
            correctIndex: 0,
            explanation:
              "Only the POUNDS LOST follow-up separates the two dimensions and shows them predicting differently. The others establish that composition does not matter much, which is a related but distinct claim.",
            sourceLessonSlug: "adherence-the-active-ingredient",
          },
          {
            prompt: "What are 'healthy-diet arms,' and why did DIETFITS use them?",
            options: [
              "Both diets emphasized whole foods, so the comparison isolated composition rather than junk versus not",
              "Both diets were designed by registered dietitians to ensure nutritional adequacy",
              "Both diets included the same foods in different proportions",
              "Both arms were screened for participants already eating a healthy baseline diet",
            ],
            correctIndex: 0,
            explanation:
              "The design choice makes the null interpretable. Comparing a quality low-carb diet against a junk low-fat one would have tested quality, not composition.",
            sourceLessonSlug: "dietfits-the-composition-answer",
          },
          {
            prompt: "Which claim about diet composition would this course permit?",
            options: [
              "'End-of-study macronutrient intake mattered mainly for triglycerides and diastolic pressure'",
              "'Macronutrient composition has no effect on any health marker'",
              "'Low-carbohydrate diets are superior for people with insulin resistance'",
              "'Composition is the primary determinant of long-term weight outcomes'",
            ],
            correctIndex: 0,
            explanation:
              "Composition is not nothing, and the metabolic-syndrome meta-analysis says exactly where it does register. DIETFITS specifically tested and rejected the insulin-secretion hypothesis.",
            sourceLessonSlug: "adherence-the-active-ingredient",
          },
          {
            prompt: "What is the 'fiber-adherence link'?",
            options: [
              "The finding that fiber intake predicted both weight loss AND adherence to the diet itself",
              "The observation that high-fiber diets are harder to adhere to initially",
              "The mechanism by which fiber increases satiety and reduces intake",
              "The correlation between fiber intake and session attendance",
            ],
            correctIndex: 0,
            explanation:
              "One lever, two effects. It is what elevates fiber above other food-level targets in a course whose spine is that adherence is the active ingredient.",
            sourceLessonSlug: "fiber-and-energy-density",
          },
          {
            prompt: "A client asks 'which diet should I do?' What is the evidence-honest answer, and why is it not a dodge?",
            options: [
              "Whichever quality-focused version you will still be eating in a year: the trials' actual result",
              "Whichever one your genotype and insulin profile suit best",
              "The one with the most randomized evidence behind it, which is low-fat",
              "It cannot be answered without an individualized assessment",
            ],
            correctIndex: 0,
            explanation:
              "It converts a prescription question into a behavior question, which is the coach's question. And it is the finding rather than an evasion: DIETFITS and 61 Cochrane trials both say so.",
            sourceLessonSlug: "dietfits-the-composition-answer",
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

**The physiology under the regain, which changes how you talk about it.** Both framings are arguing over a body that fights back, and a coach who does not know how it fights will mistake biology for character. Sumithran and colleagues followed 50 adults with overweight or obesity through a ten-week very-low-energy diet and then measured the hormones governing appetite. One year after the diet ended, and despite substantial regain, the changes had **not** normalized: leptin, peptide YY, cholecystokinin, insulin, and amylin remained below baseline, ghrelin and pancreatic polypeptide and gastric inhibitory polypeptide remained altered, and **subjective appetite remained higher than before the diet ever started** (Sumithran et al., 2011).

Read that as a coach. A year later, the body is still asking for the weight back, and the person experiencing it has no way to tell that signal apart from a personal failing. This is the mechanism underneath weight-cycling histories, and it licenses one specific piece of coaching language: regain is a physiological expectation with a name, not evidence about who the client is. It also argues for the maintenance structures of WELL-01 lesson 20 rather than a second round of effort, because the thing that changed was not their motivation.

**Coaching translation.** Frame-fit is a client variable, not an ideology. A client with a weight-cycling history and shame-driven abandonment may do their best work weight-neutral, measuring what improves without the scale. A client who wants weight loss and holds it without distress is running an evidence-supported strategy too. Both stay inside your lane; the capstone will ask you to hold both without a side.

:::reveal Score the Mensinger head-to-head at both time points. ||| Post-intervention: weight-loss arm won BMI and weight; weight-neutral arm won LDL reduction and intuitive eating. Twenty-four months: both held improvements in waist-to-hip ratio, total cholesterol, activity, fruit and vegetables, self-esteem, and quality of life. A menu, not a verdict.

:::reveal What may a coach claim for weight-neutral work, and what must they not claim? ||| May claim: improved eating attitudes, body image, fitness measures, quality of life, and some cardiometabolic markers even without weight change, with 34 percent of non-losers improving clustered risk and 73 percent improving quality of life in the ancillary data. Must not claim: reduced long-term cardiovascular events or mortality; that evidence does not exist.

## Vocabulary
- **Weight-neutral framing**: health promotion measured by behaviors and well-being rather than the scale; Health at Every Size is the best-studied version.
- **Intuitive eating**: eating guided by internal hunger and satiety cues; the weight-neutral arm's signature measured gain.
- **Frame-fit**: this course's rule that the framing is chosen per client (history, goals, distress pattern), never imposed as ideology.
- **Intermediate marker**: a measurable proxy like LDL or blood pressure, as distinct from hard endpoints like events and mortality; all the framing evidence lives here.
- **Hormonal adaptation to weight loss**: the persistent post-diet shift in appetite-governing hormones, still present at one year in Sumithran's cohort; the physiology under weight-cycling histories.
- **Weight cycling**: repeated loss and regain; understood here as a predictable interaction between effort and a defended physiology, not as a record of failed willpower.

## Sources
Dimitrov Ulian, M., Pinto, A. J., de Morais Sato, P., et al. (2022). Health at Every Size-based interventions may improve cardiometabolic risk and quality of life even in the absence of weight loss: An ancillary, exploratory analysis of the Health and Wellness in Obesity study. *Frontiers in Nutrition, 9*, 598920. https://pubmed.ncbi.nlm.nih.gov/35273983/

Sumithran, P., Prendergast, L. A., Delbridge, E., Purcell, K., Shulkes, A., Kriketos, A., & Proietto, J. (2011). Long-term persistence of hormonal adaptations to weight loss. *New England Journal of Medicine, 365*(17), 1597-1604. https://pubmed.ncbi.nlm.nih.gov/22029981/

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
          {
            prompt: "Describe the Hall inpatient trial's design.",
            options: [
              "Twenty weight-stable adults, inpatient, two weeks of each diet in randomized order",
              "Twenty adults with obesity followed each diet at home for two weeks in randomized order",
              "Sixty adults were randomized to one diet or the other for four weeks inpatient",
              "Twenty weight-stable adults were fed both diets simultaneously and chose freely",
            ],
            correctIndex: 0,
            explanation:
              "Inpatient, crossover, two weeks each. Everyone received both diets, which removes between-person variation as an explanation for the difference.",
            sourceLessonSlug: "the-hall-experiment",
          },
          {
            prompt: "On what was the Hall trial's food matched?",
            options: [
              "Presented calories, energy density, macronutrients, sugar, sodium, and fiber",
              "Calories and macronutrients only, with fiber deliberately left to differ",
              "Palatability and cost, so the comparison isolated processing alone",
              "Presented calories and portion sizes, with nutrients allowed to vary",
            ],
            correctIndex: 0,
            explanation:
              "Six things matched. That matching is what makes the result about FORM rather than about nutrition, and fiber in particular is the one people assume must differ.",
            sourceLessonSlug: "the-hall-experiment",
          },
          {
            prompt: "How much more did participants eat on the ultra-processed diet, and where did the excess come from?",
            options: [
              "508 more kilocalories a day, from carbohydrate and fat, not protein",
              "508 more kilocalories a day, from protein and fat",
              "250 more kilocalories a day, from carbohydrate alone",
              "1,000 more kilocalories a day, spread evenly across macronutrients",
            ],
            correctIndex: 0,
            explanation:
              "About a meal's worth a day, with protein intake holding steady. The protein detail matters because it is what a satiety-driven account would predict.",
            sourceLessonSlug: "the-hall-experiment",
          },
          {
            prompt: "What happened to body weight across the two Hall diet periods?",
            options: [
              "Plus 0.9 kg on ultra-processed, minus 0.9 on unprocessed, intake and weight tightly correlated",
              "Plus 0.9 kg on ultra-processed with no change on unprocessed",
              "No significant weight change in either period, only intake differences",
              "Plus 2.0 kg on ultra-processed, minus 0.5 kg on unprocessed",
            ],
            correctIndex: 0,
            explanation:
              "Symmetrical, and correlated with intake. Two weeks moving weight nearly a kilogram in each direction is a fast response to nothing but the food's form.",
            sourceLessonSlug: "the-hall-experiment",
          },
          {
            prompt: "What mechanism did the full Hall report add?",
            options: [
              "People ate FASTER on the ultra-processed diet, by about 7.4 grams and 17 kilocalories per minute",
              "People ate more frequently on the ultra-processed diet, adding roughly two eating occasions a day",
              "People reported greater hunger on the ultra-processed diet before each meal",
              "People slept less on the ultra-processed diet, which raised appetite hormones",
            ],
            correctIndex: 0,
            explanation:
              "Eating rate. It matters for coaching because speed is a behavior with a cue and a minimum version, unlike hunger or hormone levels.",
            sourceLessonSlug: "the-hall-experiment",
          },
          {
            prompt: "Why is the Hall experiment an argument against willpower framing?",
            options: [
              "Intake diverged by a meal a day with labels matched and no instruction to restrict",
              "Participants reported no difference in perceived effort between the two diets",
              "The effect persisted after adjusting for baseline dietary restraint",
              "Participants were unaware which diet they were receiving",
            ],
            correctIndex: 0,
            explanation:
              "Nobody decided anything. The lesson's phrasing: the overfeeding happened to people, and the unprocessed diet un-happened it.",
            sourceLessonSlug: "the-hall-experiment",
          },
          {
            prompt: "What is 'ad libitum intake'?",
            options: [
              "Eating freely, as much or as little as desired; the trial's measured outcome",
              "Eating on a fixed schedule with portions determined by the researchers",
              "Eating only when hunger is registered above a threshold",
              "Eating the same total calories in both arms, with composition varying",
            ],
            correctIndex: 0,
            explanation:
              "Free eating, which is what makes the intake difference a finding rather than a compliance measure. If portions had been assigned, the trial would have measured nothing.",
            sourceLessonSlug: "the-hall-experiment",
          },
          {
            prompt: "What is 'passive overconsumption'?",
            options: [
              "Intake rising without decisions to eat more; about 508 kcal a day of it",
              "Eating past fullness because of social or environmental pressure",
              "Consuming excess calories from beverages rather than food",
              "Overeating that a person is unable to recall accurately afterward",
            ],
            correctIndex: 0,
            explanation:
              "The absence of a decision is the defining feature. It is what licenses the reframe from character to environment.",
            sourceLessonSlug: "the-hall-experiment",
          },
          {
            prompt: "What is 'default design,' and why is it the lane-legal response to the Hall result?",
            options: [
              "Arranging home and work so the low-decision option is the better one: environment, not prescription",
              "Setting default portion sizes for the client's meals",
              "Establishing a default meal plan the client follows when time is short",
              "Defaulting to unprocessed foods in all recommendations to clients",
            ],
            correctIndex: 0,
            explanation:
              "Arranging the environment is behavior and logistics work, which is unreserved. Prescribing which foods a person must eat is not.",
            sourceLessonSlug: "the-hall-experiment",
          },
          {
            prompt: "How does the lesson say to handle the ultra-processed layer, as coaching?",
            options: [
              "Make it the exception that requires a decision rather than the default that does not",
              "Eliminate it from the home entirely, since matched nutrients did not protect intake",
              "Limit it to a fixed weekly allowance the client tracks",
              "Replace it gradually with nutritionally equivalent whole-food versions",
            ],
            correctIndex: 0,
            explanation:
              "Shift which option costs a decision. Elimination and allowances are prohibition coaching, and the lesson is explicit that this evidence powers environment coaching instead.",
            sourceLessonSlug: "the-hall-experiment",
          },
          {
            prompt: "Why is eating speed described as directly coachable?",
            options: [
              "Slower eating is a behavior with a cue and a minimum version, not a nutrition prescription",
              "Eating speed is the strongest single predictor of intake in observational studies",
              "Eating speed can be measured objectively without client self-report",
              "Slowing down reduces intake by a predictable percentage in every client",
            ],
            correctIndex: 0,
            explanation:
              "Cue plus minimum version is the habit-design test from WELL-01. It is also fully inside the lane, since telling someone to chew is not telling them what to eat.",
            sourceLessonSlug: "the-hall-experiment",
          },
          {
            prompt: "What did the qualitative synthesis of 26 studies find?",
            options: [
              "Environments make healthier eating harder, demanding continuous effort, hardest on low incomes",
              "People managing weight report environments as neutral, with motivation the dominant barrier",
              "Food environments matter most for people at higher incomes, who face more choice",
              "Environmental barriers were reported inconsistently across the included studies",
            ],
            correctIndex: 0,
            explanation:
              "Consistent, effortful, and unequal. The reframe it hands a coach: the client's sense of constant struggle is accurate perception, not personal weakness.",
            sourceLessonSlug: "the-food-environment",
          },
          {
            prompt: "How many people were in the qualitative food-environment synthesis?",
            options: [
              "679 people across 26 studies",
              "36,113 people across 26 studies",
              "679 people across 10 studies",
              "6,925 people across 61 studies",
            ],
            correctIndex: 0,
            explanation:
              "679 across 26 studies. The 36,113 figure is the food-insecurity meta-analysis and 6,925 belongs to the Cochrane carbohydrate review.",
            sourceLessonSlug: "the-food-environment",
          },
          {
            prompt: "What did the realist review of food-policy interventions conclude?",
            options: [
              "They move knowledge and some purchasing, but not consumption at clinically significant levels",
              "Menu calorie posting reduced consumption substantially across the studied populations",
              "Regulatory interventions outperform individual behavior change in every measured outcome",
              "No regulatory intervention has been evaluated rigorously enough to judge",
            ],
            correctIndex: 0,
            explanation:
              "They move knowledge and purchasing and stall before consumption. The coaching consequence: you cannot wait for the environment to be fixed from above.",
            sourceLessonSlug: "the-food-environment",
          },
          {
            prompt: "Which policy was most studied in the realist review?",
            options: [
              "Menu calorie posting",
              "Sugar-sweetened beverage taxation",
              "Front-of-package warning labels",
              "Restrictions on marketing to children",
            ],
            correctIndex: 0,
            explanation:
              "Menu calorie posting. Knowing which policy the evidence base actually rests on is what stops a coach generalizing the conclusion further than the studies reach.",
            sourceLessonSlug: "the-food-environment",
          },
          {
            prompt: "What did the food-insecurity meta-analysis find, and in how many people?",
            options: [
              "HIGHER obesity odds (OR 1.50, CI 1.43 to 1.58), across 36,113 adults and children",
              "Food insecurity associated with LOWER obesity odds (OR 0.67), across 36,113 adults and children",
              "Food insecurity associated with higher obesity odds (OR 1.50) in children only",
              "Food insecurity showed no association with obesity after income adjustment",
            ],
            correctIndex: 0,
            explanation:
              "Higher, not lower, which surprises people. The qualitative literature supplies the mechanism: cheap calories are energy-dense calories.",
            sourceLessonSlug: "the-food-environment",
          },
          {
            prompt: "What standing instruction does the food-insecurity finding give a coach?",
            options: [
              "Never coach a food change without asking what it costs; budget-fit is a design constraint",
              "Screen every client for food insecurity at intake using a validated instrument",
              "Refer food-insecure clients to social services before beginning nutrition work",
              "Avoid discussing specific foods with clients whose budgets are constrained",
            ],
            correctIndex: 0,
            explanation:
              "Cost as a first-class design constraint. Screening instruments and referral are clinical moves, and avoiding the topic removes help rather than adding it.",
            sourceLessonSlug: "the-food-environment",
          },
          {
            prompt: "What is 'budget-fit'?",
            options: [
              "The constraint that food changes must survive the client's actual finances",
              "The proportion of a client's income allocated to food",
              "The match between a client's food spending and published cost benchmarks",
              "A plan designed to reduce the client's grocery expenditure",
            ],
            correctIndex: 0,
            explanation:
              "A constraint on the coach's proposals, not a measurement of the client. The lesson calls it scope-legal and dignity-preserving, which are both deliberate.",
            sourceLessonSlug: "the-food-environment",
          },
          {
            prompt: "What five items are on the work-list the environment evidence writes?",
            options: [
              "Home defaults, a shopping habit, social if-thens, cost-aware swaps, and the reframe said aloud",
              "Home defaults, meal planning, calorie tracking, social avoidance, and budget review",
              "Pantry clearing, meal prep, grocery delivery, restaurant rules, and weekly weigh-ins",
              "Shopping lists, portion control, food logging, cooking skills, and accountability check-ins",
            ],
            correctIndex: 0,
            explanation:
              "Four design moves plus the reframe. Saying the reframe out loud is itself on the list: the environment is doing this on purpose, so we design against it on purpose.",
            sourceLessonSlug: "the-food-environment",
          },
          {
            prompt: "What is an 'obesogenic environment'?",
            options: [
              "Surroundings that systematically promote energy-dense eating and sitting",
              "A household in which most members have obesity",
              "A food environment lacking access to fresh produce",
              "A workplace with limited opportunity for movement during the day",
            ],
            correctIndex: 0,
            explanation:
              "Systematic promotion of both energy-dense eating AND sitting, which is why this pillar and the movement pillar keep pointing at the same surroundings.",
            sourceLessonSlug: "the-food-environment",
          },
          {
            prompt: "What is an 'intermediate outcome,' and where does it appear in this lesson?",
            options: [
              "A step short of the goal, like knowledge or purchasing; where food policies stall",
              "A measurement taken midway through an intervention period",
              "An outcome measured in a subgroup rather than the whole sample",
              "A biomarker used as a proxy for a clinical endpoint",
            ],
            correctIndex: 0,
            explanation:
              "A step short of the goal. Policies moved knowledge and purchasing without moving consumption, which is exactly the stall the term names.",
            sourceLessonSlug: "the-food-environment",
          },
          {
            prompt: "How did the Mensinger head-to-head score at post-intervention?",
            options: [
              "Weight-loss arm led on BMI and weight; weight-neutral on LDL and intuitive eating",
              "Weight-neutral arm larger BMI reductions; weight-loss arm larger LDL reductions",
              "Both arms equivalent on every measured outcome",
              "Weight-loss arm larger on every outcome including intuitive eating",
            ],
            correctIndex: 0,
            explanation:
              "Each frame led somewhere first. Neither owned the outcomes, which is why the course presents them as a menu rather than a war.",
            sourceLessonSlug: "weight-neutral-and-weight-loss",
          },
          {
            prompt: "What did BOTH Mensinger arms hold at twenty-four months?",
            options: [
              "Waist-to-hip ratio, cholesterol, activity, fruit and vegetables, self-esteem, quality of life",
              "BMI, weight, LDL cholesterol, and intuitive eating",
              "Physical activity and quality of life only",
              "Nothing; both arms returned to baseline on all measures",
            ],
            correctIndex: 0,
            explanation:
              "Six outcomes held in both arms. The persistence in BOTH is what makes the head-to-head a menu rather than a verdict for either framing.",
            sourceLessonSlug: "weight-neutral-and-weight-loss",
          },
          {
            prompt: "What did the seven-month Health at Every Size trial find?",
            options: [
              "No weight, BMI, or waist change, alongside gains in VO2 peak, function, eating attitudes, body image, and quality of life",
              "Modest weight loss alongside gains in body image and quality of life",
              "No change in any outcome, weight or otherwise",
              "Weight gain in the intervention group alongside psychological improvements",
            ],
            correctIndex: 0,
            explanation:
              "Real physiological and psychological gains with no weight change at all. It is the cleanest demonstration that the two can come apart.",
            sourceLessonSlug: "weight-neutral-and-weight-loss",
          },
          {
            prompt: "What did the HAES ancillary analysis find among participants who maintained or GAINED weight?",
            options: [
              "34 percent improved clustered cardiometabolic risk, 73 percent quality of life, at smaller sizes",
              "73 percent improved clustered cardiometabolic risk and 34 percent improved quality of life",
              "No cardiometabolic improvement, though quality of life improved in most",
              "Improvements matched those of participants who lost weight",
            ],
            correctIndex: 0,
            explanation:
              "34 percent and 73 percent, at smaller magnitudes. The analysis also confirmed that participants who DID lose weight showed the expected improvements, which keeps the honesty symmetrical.",
            sourceLessonSlug: "weight-neutral-and-weight-loss",
          },
          {
            prompt: "What did the review of intuitive and mindful-eating trials find?",
            options: [
              "Seven of ten beat control on at least one marker; no marker improved consistently",
              "All ten beat control on multiple cardiometabolic markers",
              "Three of ten beat control, with the rest showing null results",
              "Seven of ten improved eating attitudes but none improved cardiometabolic markers",
            ],
            correctIndex: 0,
            explanation:
              "Promising, real, inconsistent: that is the lesson's own three-word label. No marker moving consistently is what prevents a stronger claim.",
            sourceLessonSlug: "weight-neutral-and-weight-loss",
          },
          {
            prompt: "What may NOBODY claim about weight-neutral programs?",
            options: [
              "That they reduce long-term cardiovascular events or mortality",
              "That they improve body image and eating attitudes",
              "That they can improve fitness measures without weight change",
              "That they improve quality of life in most participants",
            ],
            correctIndex: 0,
            explanation:
              "The trials measure intermediate markers and quality of life over months to a couple of years. Hard endpoints are simply not in the evidence base.",
            sourceLessonSlug: "weight-neutral-and-weight-loss",
          },
          {
            prompt: "Which claim about weight-FOCUSED work does the course say outruns the data?",
            options: [
              "That weight-focused work is uniformly harmful",
              "That weight-focused work produces larger short-term BMI reductions",
              "That weight-focused work holds gains at twenty-four months",
              "That weight-focused work suits clients without a weight-cycling history",
            ],
            correctIndex: 0,
            explanation:
              "In Mensinger the weight-loss arm delivered its outcomes and held its gains too. The course insists on symmetry: neither framing gets to be the villain.",
            sourceLessonSlug: "weight-neutral-and-weight-loss",
          },
          {
            prompt: "How many adults did Sumithran and colleagues follow, and through what?",
            options: [
              "Fifty adults with overweight or obesity, through a ten-week very-low-energy diet",
              "Fifty adults with obesity, through a twelve-month behavioral program",
              "Eighty women with BMI over 30, through six months of weekly groups",
              "Twenty weight-stable adults, through two weeks of controlled feeding",
            ],
            correctIndex: 0,
            explanation:
              "Fifty adults, ten-week very-low-energy diet. The eighty-women trial is Mensinger and the twenty weight-stable adults are Hall's.",
            sourceLessonSlug: "weight-neutral-and-weight-loss",
          },
          {
            prompt: "One year after the diet ended, what had happened to the appetite hormones?",
            options: [
              "NOT normalized: leptin, peptide YY, cholecystokinin, insulin, amylin still below baseline",
              "They had normalized within six months and remained stable thereafter",
              "They had normalized in participants who maintained their loss but not in those who regained",
              "They had overshot baseline, producing lower appetite than before the diet",
            ],
            correctIndex: 0,
            explanation:
              "Still altered at one year, despite substantial regain. Ghrelin, pancreatic polypeptide, and gastric inhibitory polypeptide also remained changed.",
            sourceLessonSlug: "weight-neutral-and-weight-loss",
          },
          {
            prompt: "What happened to subjective appetite one year after the diet?",
            options: [
              "It remained HIGHER than before the diet ever started",
              "It returned to pre-diet levels once weight was regained",
              "It fell below pre-diet levels in participants who maintained their loss",
              "It was not measured, only the hormone concentrations were",
            ],
            correctIndex: 0,
            explanation:
              "Higher than baseline, a year later. That is the finding a client experiences directly and has no way to distinguish from a personal failing.",
            sourceLessonSlug: "weight-neutral-and-weight-loss",
          },
          {
            prompt: "What piece of coaching language does the Sumithran finding license?",
            options: [
              "Regain is a physiological expectation, not evidence about who the client is",
              "Weight loss should not be attempted, since the body will reverse it",
              "Clients who regain need a more restrictive approach next time",
              "Appetite is unreliable after dieting and should be ignored",
            ],
            correctIndex: 0,
            explanation:
              "It converts a moral account into a physiological one. The lesson is explicit that a coach who does not know how the body fights back will mistake biology for character.",
            sourceLessonSlug: "weight-neutral-and-weight-loss",
          },
          {
            prompt: "What does the Sumithran finding argue FOR, structurally?",
            options: [
              "WELL-01 lesson 20's maintenance structures, rather than a second round of effort",
              "A longer initial intervention, to allow hormones more time to normalize",
              "Weight-neutral framing for every client with a dieting history",
              "Pharmacological support alongside behavioral coaching",
            ],
            correctIndex: 0,
            explanation:
              "Because the thing that changed was not their motivation. Prescribing more effort against an altered appetite signal is aiming at the wrong variable.",
            sourceLessonSlug: "weight-neutral-and-weight-loss",
          },
          {
            prompt: "What is 'weight cycling,' as this course frames it?",
            options: [
              "Repeated loss and regain: an interaction between effort and a defended physiology",
              "Repeated loss and regain, understood as a record of failed willpower",
              "The natural fluctuation of body weight across a week",
              "Deliberate alternation between deficit and maintenance phases",
            ],
            correctIndex: 0,
            explanation:
              "The framing is the coaching content. Sumithran supplies the physiology that makes the non-blaming reading accurate rather than merely kind.",
            sourceLessonSlug: "weight-neutral-and-weight-loss",
          },
          {
            prompt: "What is 'frame-fit'?",
            options: [
              "Framing chosen per client on history, goals, and distress; never imposed as ideology",
              "The match between a client's goals and the evidence supporting them",
              "The alignment of the coach's philosophy with the client's expectations",
              "The selection of a framing based on which has stronger trial evidence",
            ],
            correctIndex: 0,
            explanation:
              "Per client, on three named variables. Neither framing has stronger evidence overall, which is precisely why the choice is clinical rather than doctrinal.",
            sourceLessonSlug: "weight-neutral-and-weight-loss",
          },
          {
            prompt: "Which client profile might do their best work weight-neutral, per this lesson?",
            options: [
              "A client with a weight-cycling history and shame-driven abandonment",
              "A client with no prior dieting experience",
              "A client whose physician has advised weight loss",
              "A client with a high baseline BMI and low distress",
            ],
            correctIndex: 0,
            explanation:
              "History plus distress pattern. The lesson is equally clear that a client who wants weight loss and holds it without distress is running an evidence-supported strategy too.",
            sourceLessonSlug: "weight-neutral-and-weight-loss",
          },
          {
            prompt: "What is an 'intermediate marker' in the framing evidence?",
            options: [
              "A proxy like LDL or blood pressure, not a hard endpoint like events or mortality",
              "A measurement taken between the start and end of an intervention",
              "A psychological outcome measured alongside physical ones",
              "A marker that predicts an endpoint with established accuracy",
            ],
            correctIndex: 0,
            explanation:
              "Proxy versus endpoint. All the framing evidence lives at the proxy level, which is exactly why nobody may claim mortality benefits for either approach.",
            sourceLessonSlug: "weight-neutral-and-weight-loss",
          },
          {
            prompt: "A client says 'I just need more discipline around food.' What does this section supply?",
            options: [
              "Matched-nutrient UPF drove a meal a day of passive overconsumption, and 26 studies found environments making it harder",
              "Discipline predicts adherence, which predicts outcomes, so the instinct is correct",
              "Self-control is a moderator of habit formation rate, per the pooled habit data",
              "Nothing directly; the response belongs to the eating-conversation lesson",
            ],
            correctIndex: 0,
            explanation:
              "Two independent findings pointing the same way. The plan that follows is design rather than discipline: home defaults, shopping structure, social if-thens, budget-fit swaps.",
            sourceLessonSlug: "the-food-environment",
          },
          {
            prompt: "Which pairing correctly matches a Section 3 finding with its coaching move?",
            options: [
              "Hall's eating-rate finding pairs with coaching eating speed; the insecurity finding pairs with budget-fit swaps",
              "Hall's intake finding pairs with calorie targets; the insecurity finding pairs with referral to social services",
              "The policy review pairs with advocacy work; the qualitative synthesis pairs with motivational interviewing",
              "The HAES trial pairs with weight-neutral framing for all clients; Mensinger pairs with weight-loss framing",
            ],
            correctIndex: 0,
            explanation:
              "Each finding produces a specific in-scope behavior. The distractors either leave the lane, generalize a framing beyond frame-fit, or convert a finding into advocacy.",
            sourceLessonSlug: "the-food-environment",
          },
          {
            prompt: "Why does the course present the two framings as 'a menu, not a war'?",
            options: [
              "Neither frame owned the outcomes in the head-to-head; each led somewhere first",
              "Both framings produce identical results once adherence is controlled",
              "The evidence for both is too weak to distinguish them",
              "Clients are equally satisfied with either approach in the trial data",
            ],
            correctIndex: 0,
            explanation:
              "Weight-loss led on BMI and weight; weight-neutral led on LDL and intuitive eating; both held six outcomes at two years. That is a menu.",
            sourceLessonSlug: "weight-neutral-and-weight-loss",
          },
          {
            prompt: "What is 'intuitive eating'?",
            options: [
              "Eating guided by internal hunger and satiety cues; the weight-neutral arm's gain",
              "Eating without tracking or measuring any aspect of intake",
              "Eating according to preference rather than nutritional guidance",
              "Eating on a schedule determined by natural hunger rhythms",
            ],
            correctIndex: 0,
            explanation:
              "Internal cues, and it is a measured construct rather than a philosophy. Mensinger's weight-neutral arm produced bigger gains on it at post-intervention.",
            sourceLessonSlug: "weight-neutral-and-weight-loss",
          },
          {
            prompt: "Why does the course say a coach should be able to quote 'both sides without flinching'?",
            options: [
              "The evidence prices them as a menu, and the capstone asks you to hold both",
              "Clients will test the coach's neutrality before committing to either approach",
              "Professional bodies require balanced presentation of contested approaches",
              "Both approaches carry equal risk of harm if applied to the wrong client",
            ],
            correctIndex: 0,
            explanation:
              "The evidence, and the capstone's explicit requirement. Frame-fit is a clinical judgment, and a coach who can only argue one side cannot make it.",
            sourceLessonSlug: "weight-neutral-and-weight-loss",
          },
          {
            prompt: "What is 'ultra-processed food' as this lesson uses it?",
            options: [
              "Industrially formulated products; the Hall diet form that drove overconsumption despite matched nutrients",
              "Any food containing added sugar, salt, or preservatives",
              "Food with more than five ingredients on its label",
              "Packaged food that requires no preparation before eating",
            ],
            correctIndex: 0,
            explanation:
              "Industrial formulation, and the trial detail is what makes the definition load-bearing here: the nutrients were matched, so the classification was doing the work.",
            sourceLessonSlug: "the-hall-experiment",
          },
          {
            prompt: "A client with a tight budget wants to eat more vegetables. What does the lesson's evidence direct?",
            options: [
              "Design the swaps inside their actual finances; cheap calories are energy-dense calories",
              "Prioritize fresh produce, since it carries the strongest evidence",
              "Defer the food work until their financial situation improves",
              "Refer them to a dietitian, since budget-constrained planning requires clinical input",
            ],
            correctIndex: 0,
            explanation:
              "Budget-fit as a design constraint. Deferring removes help, referral misreads the scope line, and prioritizing fresh produce ignores the constraint the evidence identified.",
            sourceLessonSlug: "the-food-environment",
          },
          {
            prompt: "Which statement about the Hall trial would this course refuse?",
            options: [
              "'Eliminating ultra-processed food will produce a 500-calorie daily deficit for your client'",
              "'Matched-nutrient ultra-processed food drove 508 extra kilocalories a day in an inpatient trial'",
              "'People ate faster on the ultra-processed diet, about 17 kilocalories per minute more'",
              "'The trial measured ad libitum intake over two weeks per diet in twenty adults'",
            ],
            correctIndex: 0,
            explanation:
              "It converts a two-week inpatient group finding into an individual free-living promise. The setting and the sample size are both doing work the promise ignores.",
            sourceLessonSlug: "the-hall-experiment",
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
      slug: "quiz-the-craft",
      title: "13 · Knowledge check: the craft",
      section: "Section 4 · The craft",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "Why is food talk 'where coaching craft gets tested hardest'?",
            options: [
              "No other pillar arrives wrapped in this much shame",
              "Food questions require the most technical knowledge to answer well",
              "Eating behavior changes more slowly than other health behaviors",
              "Clients have usually tried more approaches with food than elsewhere",
            ],
            correctIndex: 0,
            explanation:
              "Shame is the pillar-specific difficulty. It is why the language rules in this lesson are stricter than anywhere else in the program.",
            sourceLessonSlug: "the-eating-conversation",
          },
          {
            prompt: "Why is the fixing reflex DOUBLY wrong on this pillar?",
            options: [
              "Advice recruits the counter-argument, AND the trials say content matters less than behavior",
              "Advice is outside the coaching scope on this pillar, AND clients rarely follow it once given",
              "Advice triggers shame, AND shame reduces adherence in the trial data",
              "Advice is usually inaccurate, AND clients can detect the inaccuracy",
            ],
            correctIndex: 0,
            explanation:
              "The usual mechanics plus this pillar's own evidence. The fixing reflex here is not even fixing the right variable, which is the second half.",
            sourceLessonSlug: "the-eating-conversation",
          },
          {
            prompt: "What is 'advice pressure'?",
            options: [
              "The urge to supply meal ideas the moment food is confessed; the fixing reflex in costume",
              "The client's expectation that a coach will tell them what to eat",
              "Social pressure on the client to follow a particular way of eating",
              "The accumulation of conflicting dietary advice a client has received from previous professionals",
            ],
            correctIndex: 0,
            explanation:
              "It names the coach's internal experience, which is the only place it can be caught. The naming is the same move WELL-01 made with the fixing reflex generally.",
            sourceLessonSlug: "the-eating-conversation",
          },
          {
            prompt: "Which words does this lesson strip from coaching speech?",
            options: [
              "'Good foods', 'bad foods', 'cheating', 'being naughty'",
              "'Diet', 'restriction', 'calories', 'portion sizes'",
              "'Should', 'have to', 'just', 'obviously'",
              "'Healthy', 'unhealthy', 'clean', 'processed'",
            ],
            correctIndex: 0,
            explanation:
              "Moralized food language specifically. The quiet controllers ('should', 'have to', 'just') are WELL-01 lesson 23's list, and 'processed' is a descriptive term this course uses freely.",
            sourceLessonSlug: "the-eating-conversation",
          },
          {
            prompt: "What is 'moralized food language,' and why is it stripped?",
            options: [
              "Good/bad/cheat framing that converts eating into character; shame changes no behavior",
              "Language that implies a client's food choices reflect their values",
              "Any evaluative language about foods at all, including neutral nutritional descriptions",
              "Framing that assigns responsibility for eating outcomes to the client",
            ],
            correctIndex: 0,
            explanation:
              "Character conversion is the mechanism, and the reason is stated flatly. Descriptive nutritional language is not moralized, which keeps the education channel usable.",
            sourceLessonSlug: "the-eating-conversation",
          },
          {
            prompt: "What frame does the course substitute for moral framing, and why is it also TRUE?",
            options: [
              "Eating patterns as designed outcomes of environments and habits",
              "Eating patterns as expressions of underlying and unmet emotional needs",
              "Eating patterns as the result of accumulated knowledge gaps",
              "Eating patterns as biologically determined and largely fixed",
            ],
            correctIndex: 0,
            explanation:
              "Both shame-free and accurate. The Hall trial and the environment synthesis are what let the kinder framing also be the correct one, which is the lesson's point.",
            sourceLessonSlug: "the-eating-conversation",
          },
          {
            prompt: "Why does affirmation over praise 'matter doubly' on this pillar?",
            options: [
              "Praise makes the coach the food judge: the dynamic most clients arrive damaged by",
              "Praise is less effective at building self-efficacy in nutrition contexts",
              "Praise encourages restriction, which the trials associate with regain",
              "Praise implies the coach is monitoring compliance rather than facilitating change",
            ],
            correctIndex: 0,
            explanation:
              "Food judging is the specific harm. The lesson's contrast: 'you noticed the pattern and said it out loud' builds capability; 'good job being honest' installs a judge.",
            sourceLessonSlug: "the-eating-conversation",
          },
          {
            prompt: "What is the tension the self-monitoring craft resolves?",
            options: [
              "Self-monitoring is the crowned tool, and food tracking most easily turns obsessive",
              "Self-monitoring works only when the coach reviews the data",
              "Self-monitoring is effective but falls outside the non-prescriptive coaching lane",
              "Self-monitoring improves short-term adherence but not long-term outcomes",
            ],
            correctIndex: 0,
            explanation:
              "Crowned and dangerous at once. The resolution is to keep the tool and change its target: monitor the behavior rather than always the food.",
            sourceLessonSlug: "the-eating-conversation",
          },
          {
            prompt: "What does 'monitor the behavior, not always the food' look like?",
            options: [
              "Meals at the table, vegetables added, eating speed, hunger checked before seconds",
              "Weekly weigh-ins, waist circumference measurements, and standardized progress photographs",
              "Calorie ledgers reviewed weekly rather than logged daily",
              "Photographs of meals rather than written records",
            ],
            correctIndex: 0,
            explanation:
              "Four countable behaviors, all cheaper psychologically than a calorie ledger, and all inside the behavioral-adherence dimension the trials say predicts outcomes anyway.",
            sourceLessonSlug: "the-eating-conversation",
          },
          {
            prompt: "What is 'behavior monitoring' as this lesson defines it?",
            options: [
              "Self-monitoring aimed at countable behaviors rather than calories; the gentler species",
              "The coach's observation of the client's eating during sessions",
              "Monitoring that focuses on frequency rather than quantity",
              "Tracking that the client reviews privately without ever sharing the record with their coach",
            ],
            correctIndex: 0,
            explanation:
              "Same tool, different target. Calling it a species of self-monitoring matters: the evidence supporting self-monitoring is what it inherits.",
            sourceLessonSlug: "the-eating-conversation",
          },
          {
            prompt: "How does the lesson open the evoking half of an eating session?",
            options: [
              "What would eating peacefully look like; when did food last feel simple",
              "What do you already know about nutrition that you are not currently acting on",
              "What have you tried before, and what went wrong",
              "How important is changing this, on a scale of one to ten",
            ],
            correctIndex: 0,
            explanation:
              "Both questions evoke a wanted state rather than a problem history. Asking what went wrong invites sustain talk, and rating scales are an instrument rather than evocation.",
            sourceLessonSlug: "the-eating-conversation",
          },
          {
            prompt: "What is the typical inner obstacle on this pillar, and what is it in WELL-01 terms?",
            options: [
              "The story, like 'one slice ruins the day': the what-the-hell effect in food clothes",
              "The pantry contents, which form the environment the client believes they cannot control",
              "Low self-efficacy about cooking, which competence support addresses",
              "Ambivalence about the goal itself, which returns the session to evoking",
            ],
            correctIndex: 0,
            explanation:
              "The obstacle is rarely the pantry. Naming it as the what-the-hell effect means the same countermeasure applies: the pre-negotiated miss rule.",
            sourceLessonSlug: "the-eating-conversation",
          },
          {
            prompt: "What is a 'food-story obstacle'?",
            options: [
              "The belief behind most eating wishes, coachable where the pantry is just weather",
              "The client's own narrative about how their current eating patterns first developed",
              "A family or cultural story that shapes what the client eats",
              "The explanation a client offers for a lapse after it happens",
            ],
            correctIndex: 0,
            explanation:
              "A belief, and specifically one an if-then plan can fire against. The pantry-as-weather contrast is the same inner-versus-outer distinction WOOP requires.",
            sourceLessonSlug: "the-eating-conversation",
          },
          {
            prompt: "How does the planning half of an eating session close?",
            options: [
              "One addition or default change, anchored, minimum-versioned, client holding the pen",
              "Three changes spanning food, environment, and monitoring, agreed together in session",
              "A weekly menu the client and coach build collaboratively",
              "A calorie or macronutrient target the client will track",
            ],
            correctIndex: 0,
            explanation:
              "One change, and note which two kinds: an addition (from the fiber lesson) or a default change (from the Hall lesson). Both are the course's own evidence made operational.",
            sourceLessonSlug: "the-eating-conversation",
          },
          {
            prompt: "A client says 'I was bad this weekend. Pizza, twice.' What does this lesson train?",
            options: [
              "A reflection without moral language, treating the pattern as data",
              "An affirmation of their honesty in reporting it",
              "A reframe explaining that occasional pizza fits any sustainable pattern",
              "A question about what triggered the choice, to identify the cue",
            ],
            correctIndex: 0,
            explanation:
              "A reflection, and specifically not judging, advising, or treating the confession as a compliance report. Affirming the honesty makes the coach a judge who is being gracious.",
            sourceLessonSlug: "the-eating-conversation",
          },
          {
            prompt: "Which conditions does the clinical referral lane cover on this pillar?",
            options: [
              "Diabetes, kidney disease, cardiovascular disease, pregnancy complications, food allergy",
              "Diabetes, obesity, hypertension, and any client over 65",
              "Any diagnosed condition at all, plus any client currently taking prescription medication",
              "Eating disorders, diabetes, and kidney disease specifically",
            ],
            correctIndex: 0,
            explanation:
              "Five named condition families. Obesity is not on the list as a condition triggering referral, and eating disorders are their own separate lane with a different destination.",
            sourceLessonSlug: "referral-on-this-pillar",
          },
          {
            prompt: "How does Michigan's statute align with the clinical referral lane?",
            options: [
              "Its exemption is carved around this line: wellness and prevention yes, MNT no",
              "Its exemption requires referral for any client under clinical care",
              "Its exemption applies only where a dietitian has been consulted first",
              "Its exemption does not address referral, which is a professional rather than legal duty",
            ],
            correctIndex: 0,
            explanation:
              "The statutory line and the professional referral line are the same line. That alignment is why the drift test works as both an ethical and a legal instrument.",
            sourceLessonSlug: "referral-on-this-pillar",
          },
          {
            prompt: "Name the disordered-eating red flags this lesson lists.",
            options: [
              "Secret eating, tightening rules, compensatory behaviors, distress scaling with food, rapid weight change",
              "Skipping meals, counting calories, weighing daily, avoiding social meals",
              "Rapid weight loss, low mood, fatigue, and reduced training performance",
              "Restrictive eating, excessive compensatory exercise, and a flat refusal to discuss food openly with anyone",
            ],
            correctIndex: 0,
            explanation:
              "Six observable signs, none of which requires diagnosing anything. 'Rules that keep TIGHTENING' is the one that distinguishes a red flag from ordinary structure.",
            sourceLessonSlug: "referral-on-this-pillar",
          },
          {
            prompt: "Where do eating-disorder red flags route, and why is that different from the clinical lane?",
            options: [
              "Clinical-care territory (physician, therapist, specialist), not dietitian referral",
              "Registered dietitian territory, since the presentation is nutritional",
              "The client's primary care physician, who coordinates any onward referral",
              "A specialist only if the client requests one; otherwise the coaching simply continues",
            ],
            correctIndex: 0,
            explanation:
              "The lesson is explicit that this is not dietitian-referral territory. A dietitian addresses nutrition; these flags call for clinical care of the disorder itself.",
            sourceLessonSlug: "referral-on-this-pillar",
          },
          {
            prompt: "Why does coaching PAUSE on food specifically when eating-disorder flags are live?",
            options: [
              "Behavior-change tools aimed at food can sharpen the rules doing the damage",
              "Continuing would exceed the coach's scope of practice in every jurisdiction",
              "Clients with these flags cannot form new habits until treatment concludes",
              "The coach's food guidance would conflict with the treatment team's plan",
            ],
            correctIndex: 0,
            explanation:
              "Tracking, rules, and goals are the machinery of the disorder as well as the machinery of coaching. That overlap is the specific risk, and it is why the pause is on FOOD rather than on coaching.",
            sourceLessonSlug: "referral-on-this-pillar",
          },
          {
            prompt: "What may continue while eating-disorder flags are live?",
            options: [
              "Coaching away from food (sleep, movement, connection) alongside licensed care",
              "Nothing; the coaching relationship suspends until treatment concludes",
              "Food coaching, provided it is limited to additions rather than restrictions",
              "All coaching, provided the coach documents the flags and monitors them",
            ],
            correctIndex: 0,
            explanation:
              "The pause is targeted rather than total. Suspending everything abandons the client, which WELL-00 named as one of the two ways a referral is done badly.",
            sourceLessonSlug: "referral-on-this-pillar",
          },
          {
            prompt: "What is a 'condition in disguise'?",
            options: [
              "A 'wellness' request that is really a diagnosis question, like a sodium target",
              "A client concealing a diagnosis from their coach",
              "A symptom the client attributes to their lifestyle rather than to an underlying illness",
              "A referral question framed as a general education request",
            ],
            correctIndex: 0,
            explanation:
              "The pillar's characteristic gray zone. The prediabetic asking for a meal plan and the client whose physician said to lose weight are the lesson's other two examples.",
            sourceLessonSlug: "referral-on-this-pillar",
          },
          {
            prompt: "What is a 'referral with a coaching offer'?",
            options: [
              "The handoff that keeps the relationship: they own targets, you own the machinery",
              "A referral in which the coach recommends a specific practitioner",
              "A referral the coach makes directly on the client's behalf, with their prior consent",
              "A referral offered as an option the client may decline",
            ],
            correctIndex: 0,
            explanation:
              "It divides the labor rather than ending the relationship. The lesson insists the coaching half is not a consolation prize: sections 2 and 3 are the evidence that it is where the outcome lives.",
            sourceLessonSlug: "referral-on-this-pillar",
          },
          {
            prompt: "A physician told your client to 'lose weight' with no plan attached. Draw the division of labor.",
            options: [
              "Get them the actual plan from a clinician; coach adherence, environment, and framing",
              "Build the weight-loss plan yourself, since the physician has effectively authorized it",
              "Decline all weight-related work until a written plan exists",
              "Set interim targets and ask the client to review them with the physician",
            ],
            correctIndex: 0,
            explanation:
              "A physician's instruction does not transfer their authority. Everything around the targets is yours, and this whole course is the evidence that the half you keep is the half that produces the outcome.",
            sourceLessonSlug: "referral-on-this-pillar",
          },
          {
            prompt: "How does the self-coaching instruction apply the eating-disorder flags?",
            options: [
              "Tightening rules and outsized distress around food are triggers in the mirror too",
              "Self-coaching is exempt, since the coach can monitor their own state accurately",
              "The flags apply, but with a longer observation period before acting",
              "Only the observable flags apply; the internal ones cannot be self-assessed",
            ],
            correctIndex: 0,
            explanation:
              "Same flags, same triggers. The capstone will ask for exactly this application, and self-knowledge is what makes the flags harder to act on rather than easier.",
            sourceLessonSlug: "referral-on-this-pillar",
          },
          {
            prompt: "What is the 'clinical referral lane'?",
            options: [
              "Condition-directed diet questions routed to dietitians and physicians",
              "The pathway for clients already under a clinician's care",
              "The set of conditions requiring medical clearance before coaching begins",
              "The protocol for handing a client to another coach with clinical training",
            ],
            correctIndex: 0,
            explanation:
              "It is the formal version of lesson 1's drift test. Conditions refer out; behavior stays, and this names where 'out' goes.",
            sourceLessonSlug: "referral-on-this-pillar",
          },
          {
            prompt: "A client's food rules have narrowed from three avoided foods to fifteen over four months. What is this?",
            options: [
              "A red flag: tightening rules, routing to clinical care with food coaching paused",
              "Successful adherence, since the client is following their chosen plan very consistently",
              "A condition in disguise, routing to a registered dietitian",
              "An environment problem, addressed by broadening the home defaults",
            ],
            correctIndex: 0,
            explanation:
              "Tightening is the pattern, not the count. Routing it to a dietitian misreads the lane, and treating it as adherence is exactly the failure the flag list exists to prevent.",
            sourceLessonSlug: "referral-on-this-pillar",
          },
          {
            prompt: "A prediabetic client asks you for a meal plan. What does the craft prescribe?",
            options: [
              "Refer for the targets; offer to coach everything around the plan they write",
              "Provide general guideline education instead, which satisfies the request",
              "Build the plan, since prediabetes is a prevention rather than treatment context",
              "Decline the request and redirect the session to behavior work",
            ],
            correctIndex: 0,
            explanation:
              "Referral WITH a coaching offer. Substituting education without naming the referral leaves the actual question unanswered, and declining without an offer abandons the client.",
            sourceLessonSlug: "referral-on-this-pillar",
          },
          {
            prompt: "Which of these is inside the lane on this pillar?",
            options: [
              "Coaching a client's eating speed and meals-at-the-table count",
              "Setting a fiber target for a client with diverticular disease",
              "Recommending a fiber supplement to a client struggling to reach the guideline",
              "Adjusting the carbohydrate distribution a dietitian prescribed",
            ],
            correctIndex: 0,
            explanation:
              "Speed and meal-location counts are behaviors. A target for a diagnosed condition, a supplement recommendation, and adjusting a licensee's plan are three of the four tells from lesson 2.",
            sourceLessonSlug: "referral-on-this-pillar",
          },
          {
            prompt: "Why does the referral lesson say this pillar 'produces referral moments faster than any other'?",
            options: [
              "Fast drift toward disease, plus two lanes: clinical and eating-disorder",
              "Clients disclose more on this pillar than on any other",
              "Nutrition is the pillar carrying the most restrictive legal scope of the five",
              "Food questions more often involve medication interactions",
            ],
            correctIndex: 0,
            explanation:
              "Two lanes plus fast drift. Movement and sleep each have one referral destination; this pillar has two with different destinations and different protocols.",
            sourceLessonSlug: "referral-on-this-pillar",
          },
          {
            prompt: "What do the two referral lanes have in common, and what differs?",
            options: [
              "Both use the warm handoff; they differ in destination and whether food coaching pauses",
              "Both route to registered dietitians; they differ in urgency",
              "Both pause coaching entirely; they differ in how long the pause lasts",
              "Both require the client's written consent beforehand; they differ in documentation requirements",
            ],
            correctIndex: 0,
            explanation:
              "Same craft, different destination and different continuation rule. The clinical lane keeps the behavior work running; the eating-disorder lane pauses the food half specifically.",
            sourceLessonSlug: "referral-on-this-pillar",
          },
        ],
      },
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
