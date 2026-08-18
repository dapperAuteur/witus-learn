// Authored "The Local Layer" — course 5 of Path A ("Who Has the Power? Governments From the Block
// to the Globe"), planned in plans/46-structures-paths-government-and-business.md.
//
// WHAT THIS COURSE IS
// -------------------
// The course about the level of government most adults were never taught. Path A course 1, "Who Has
// the Power to Do This?", shipped the METHOD (the four questions: who acted, under what authority,
// where the power comes from, who can overturn it) and INTRODUCED Dillon's Rule, home rule, and
// special districts inside its Section 3. This course does not repeat that survey; it DEVELOPS it.
// It goes deep on Dillon's Rule versus home rule (the spectrum, not a binary), the forms of
// municipal government (mayor-council, council-manager, commission) and what each one changes, the
// special districts that in the United States OUTNUMBER municipalities and whose elections nearly
// nobody votes in, the New England town meeting, and Unigov (the 1969/1970 consolidation of
// Indianapolis and Marion County) as the case study. It is US local-government content written to a
// standard of precision, and it says plainly, more than once, that it teaches how to READ authority
// and is NOT legal advice.
//
// RELATIONSHIP TO OTHER SHIPPED COURSES (do not contradict)
// --------------------------------------------------------
//   * Course 1 (who-has-the-power) introduced Dillon's Rule (City of Clinton v. Cedar Rapids, 1868),
//     the Cooley Doctrine (People ex rel. Le Roy v. Hurlbut, 1871), Hunter v. City of Pittsburgh
//     (1907), home rule (Missouri 1875, St. Louis), preemption, and the 2017 Census special-district
//     count. This course treats course 1 as its prerequisite and builds on those exact anchors.
//   * The Indianapolis route cluster (indiana-avenue-course) teaches Unigov as a CHRONOLOGY test for
//     one corridor and is careful that Unigov did NOT destroy Indiana Avenue (a cause cannot postdate
//     its effect). This course teaches Unigov as the STRUCTURAL case: the state reorganising a city by
//     statute without a referendum, the purest demonstration of "cities are creatures of the state."
//     The two are complementary. The Unigov facts and sources here are the cluster's verified ones
//     (Wachter, 2014 / Abell Foundation; Encyclopedia of Indianapolis; Chalkbeat Indiana, 2016).
//
// SOURCING DISCIPLINE (the load-bearing part of the file)
// ------------------------------------------------------
//   * Court cases cited by reporter; constitutional/statutory anchors named. The Census of
//     Governments counts are the 2017 figures verified in course 1; the 2022 census is cited only for
//     the robust qualitative claim (special districts again far outnumber municipalities).
//   * WHERE ACCOUNTS OR CLASSIFICATIONS DISAGREE, THE DISAGREEMENT IS THE LESSON: the home-rule
//     spectrum (imperio vs devolution), the "Dillon's Rule state" labelling problem (Krane, Rigos &
//     Hill, 2001), whether the first Galveston commission was fully elected, and the contested INTENT
//     behind Unigov's documented vote-dilution effect are all taught as live questions, not settled.
//   * NO invented case, person, quotation, date, statistic, district, or firm. Figures that could not
//     be verified are stated as concepts without a fabricated citation.
//
// House rule: NO em-dashes or en-dashes in prose. Regular hyphens only. Verbatim cited titles inside
// a `## Sources` block are the only place a dash may survive.

import type { AuthoredCourse } from "./authored-course";

export const THE_LOCAL_LAYER_COURSE: AuthoredCourse = {
  title: "The Local Layer",
  description:
    "The course about the level of government most adults were never taught: the city, the town, the county, and the tens of thousands of single-purpose special districts that tax people who cannot name them. It is course 5 of the path whose method course, Who Has the Power to Do This?, already taught the four questions and introduced Dillon's Rule. This course develops that introduction into the real machinery of local power. You will learn Dillon's Rule and home rule as a spectrum rather than a slogan, and why state preemption can wipe out a local ordinance the week after it passes. You will learn the forms of municipal government, mayor-council (strong and weak), council-manager, and commission, and exactly what each one changes about who decides. You will meet the special districts that in the United States outnumber municipalities, learn why they exist and why almost nobody votes in their elections, and read a real one. You will see the New England town meeting, where the residents are the legislature, and then Unigov, where in 1969 the Indiana legislature redrew a major city overnight, by statute, with no referendum, the purest demonstration of the fact that in the United States a city is a creature of the state. It closes with a capstone: document every local government and special district over your own address, from the primary record. This course teaches how to READ authority. It is not legal advice.",
  lessons: [
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 1 · The layer you were never taught
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "local-invisible-layer",
      title: "1 · The layer you live in and cannot see",
      section: "Section 1 · The layer you were never taught",
      body: `You live inside the local layer of government every hour of every day. It paves your street, schools your children, pipes your water, zones your block, licenses your business, and sends you a tax bill from bodies you have probably never named. **And it is the layer almost no civics class teaches**, which is why most adults can name the President and their governor but not the four or five local governments that actually decide what happens on their street.

## First, the boundary. This is not legal advice.

**This course teaches how to READ local authority. It is not legal advice, and it cannot tell you whether any particular local action was lawful in your situation.** It does not create a lawyer-client relationship. It teaches the questions a lawyer, a journalist, or an organiser asks first about a local government, so you can open a public record and get oriented. That distinction runs the whole way through.

## What you already have, if you took course 1

This is course 5 of the path "Who Has the Power? Governments From the Block to the Globe." **Course 1, "Who Has the Power to Do This?", gave you the method**, four questions to ask of any government action: who acted (the body), under what authority, where the power comes from (the document), and who can overturn it. It also introduced the single fact this whole course develops: **in the United States, a city is not a junior state; it is a creature of the state, holding only the power the state hands down** (Hunter v. City of Pittsburgh, 1907).

**This course does not re-teach that survey. It develops it.** Course 1 introduced Dillon's Rule and home rule in one lesson each. Here you get the spectrum, the preemption edge, the forms of municipal government course 1 never covered, the special districts in depth, the town meeting, and a full case study. If you have not done course 1, do it first; this course assumes the four questions.

## Why the local layer is invisible, and why that is a civics problem

The local layer hides for structural reasons, not accidental ones:

| Reason it hides | What it does to you |
|---|---|
| **Its elections are off-cycle and low-turnout** | A district or council race rarely shares a ballot with a presidential one, so few people vote |
| **Its boundaries do not match each other** | Your school, water, fire, and library lines can all differ from your city line |
| **Its power appears as tax-bill line items** | The one document that lists the governments taxing you is the one nobody reads closely |
| **It is genuinely complicated** | Cities, towns, counties, townships, and single-purpose districts overlap on the same ground |

**A government you cannot name is a government you cannot hold accountable.** That is the civics stakes of this course. The local layer is where the most decisions that touch daily life get made, and it is the layer with the least public attention on it. Making it legible is the whole job.

## Where this course goes

Four moves, in order: **(1)** Dillon's Rule versus home rule, developed into the real doctrine, with preemption as its modern edge. **(2)** The forms of municipal government, and what each one changes about who decides. **(3)** Special districts, the largest and least-watched layer. **(4)** Two answers to the local puzzle that sit at opposite poles: the New England town meeting, where residents are the legislature, and Unigov, where the state redrew a whole city by statute. Then you map your own block.

## Sources
- Hunter v. City of Pittsburgh, 207 U.S. 161 (1907). https://supreme.justia.com/cases/federal/us/207/161/
- U.S. Census Bureau. (2017). 2017 Census of Governments, Organization component. https://www.census.gov/programs-surveys/cog.html`,
    },
    {
      slug: "local-dillons-rule",
      title: "2 · Dillon's Rule, developed",
      section: "Section 1 · The layer you were never taught",
      body: `Course 1 named Dillon's Rule and told you what it does: a city holds only the power the state grants it. This lesson does the work course 1 did not have room for. It reads the rule's own text, shows the tie-breaker that does most of the damage, and explains the historical mess the rule grew out of.

## The rule, in its own three parts

John Forrest Dillon, an Iowa Supreme Court judge, stated the rule in City of Clinton v. Cedar Rapids and Missouri River Railroad Company and then systematised it in his 1872 treatise on municipal corporations (City of Clinton v. Cedar Rapids & M.R.R. Co., 1868; Dillon, 1872). A municipal corporation possesses only three kinds of power:

1. Those **granted in express words**;
2. Those **necessarily or fairly implied** in, or incident to, the powers expressly granted;
3. Those **essential** to the declared objects and purposes of the corporation, not merely convenient, but indispensable.

**Then comes the clause that does most of the work.** Where there is a reasonable, substantial doubt about whether a power was granted, **the doubt is resolved against the corporation, and the power is denied** (Cornell Legal Information Institute, n.d.). Read parts 1 to 3 and you might think a city has room to move. Read the tie-breaker and you see the room close: **in a genuine gray area, the city loses.**

## Why the tie-breaker is the whole doctrine

Most interesting government questions live in gray areas, because no charter can list every future problem. **A strict Dillon's Rule reading says: if the grant is unclear, the city may not act.** So a Dillon's Rule city that wants to try something its charter did not foresee, a new fee, a new regulation, a new kind of contract, must first find express or fairly implied authority, or go to the state and ask for it. Dillon himself described local governments as the creatures, and in effect the tenants at will, of the legislatures that made them.

## The historical mess the rule answered

Dillon's Rule did not arrive in a vacuum. In the nineteenth century, states chartered cities one at a time, by **special charters**, individual acts of the legislature for individual cities. That invited constant legislative meddling in local affairs and a great deal of corruption, and it is part of why courts and reformers wanted a clear rule about the limits of municipal power (National League of Cities, n.d.). **Dillon's Rule was, in part, a response to a system where the line between state and city power was chaos.** The reform that answered the same chaos from the other direction, giving cities a broad standing grant instead of narrow ones, is home rule, and it is the next lesson.

## How to use this when you read an action

When a city acts in a gray area and someone challenges it, **you are watching Dillon's Rule get applied.** The challenger says the power was never clearly granted; the city says it was fairly implied or essential. Knowing the doctrine tells you what the fight is actually about: not whether the city acted wisely, but **whether the state's grant reaches this far, with the doubt counting against the city.** This is a description of how to read the dispute. It is not legal advice about how any particular dispute comes out.

## Sources
- City of Clinton v. Cedar Rapids & Missouri River R.R. Co., 24 Iowa 455 (1868). https://www.law.cornell.edu/wex/city_of_clinton_v._cedar_rapids_and_missouri_railroad_company_(1868)
- Dillon, J. F. (1872). Treatise on the law of municipal corporations. James Cockcroft & Co.
- Cornell Legal Information Institute. (n.d.). Dillon's Rule. Wex. https://www.law.cornell.edu/wex/dillon's_rule
- National League of Cities. (n.d.). Cities 101: Delegation of power. https://www.nlc.org/resource/cities-101-delegation-of-power/`,
      recallContent: [
        {
          prompt: "Why is the local layer of government so hard for residents to see?",
          answer: "Its elections are off-cycle and low-turnout, its many boundaries do not match one another, its power shows up mainly as tax-bill line items nobody reads, and cities, towns, counties, townships, and single-purpose districts genuinely overlap. A government you cannot name is one you cannot hold accountable.",
        },
        {
          prompt: "What did course 1 establish that this course develops, in one sentence?",
          answer: "That in the United States a city is not a junior state but a creature of the state, holding only the power the state hands down (Hunter v. City of Pittsburgh, 1907). Course 1 introduced Dillon's Rule and home rule; this course develops them into the real machinery.",
        },
        {
          prompt: "State the boundary this course restates the whole way through.",
          answer: "It teaches how to READ local authority; it is not legal advice and cannot tell you whether a particular local action was lawful in your situation.",
        },
      ],
    },
    {
      slug: "local-home-rule",
      title: "3 · Home rule, and the spectrum nobody drew as a binary",
      section: "Section 1 · The layer you were never taught",
      body: `Home rule is the device states built to hand cities a broad, standing grant of local power instead of Dillon's narrow, ask-permission-for-everything grant. Course 1 introduced it and named St. Louis (Missouri Constitution of 1875) as the first home-rule city. This lesson develops the part course 1 flagged but did not open: **home rule is not one thing, and "your state is a home-rule state" is a slogan, not a fact.**

## The two models, which answer different questions

There are two very different ideas both called "home rule," and they differ on what the state can still do to you.

| | Imperio ("imperium in imperio") home rule | Legislative / devolution home rule |
|---|---|---|
| **The idea** | The city gets a protected sphere of purely local affairs the state may not enter | The city gets broad power to act, but the state may still override it on any matter of statewide concern |
| **The image** | A wall around local matters | A wide field with the state holding a veto |
| **Where the fight goes** | Is this subject "local" or "statewide"? | Has the state chosen to preempt this? |

The older, imperio model tried to carve out a "state within a state," a fixed zone of local control immune from state legislation. It ran aground on an impossible question: **which subjects are purely local?** Almost nothing is. The model that largely replaced it, associated with the American Municipal Association's 1953 model provision (commonly credited to Jefferson B. Fordham) and the National Municipal League's Model State Constitution, grants cities broad power up front and then lets the legislature preempt where it declares a statewide concern (Krane, Rigos & Hill, 2001). **The second model gives cities more room day to day and less protection when the state decides to act.**

## Constitutional versus legislative grant (course 1's Question 4, developed)

Cutting the other way is **how the grant is held**, which is course 1's fourth question, who can overturn it:

- **Constitutional home rule** is written into the state constitution. To take it back, the state generally needs a constitutional amendment.
- **Legislative home rule** is granted by an ordinary statute. The legislature can rewrite it next session.

**So "home rule" describes a spectrum of entrenchment, not a switch.** A city can have broad powers that are easy for the legislature to strip, or narrow ones that are hard to strip, or any combination.

## Why "Dillon's Rule state" is a starting hypothesis, not a fact

Because both axes vary, and because a single state often applies home rule to some governments or powers and Dillon's Rule to others, **flat state labels oversimplify.** The standard reference on the subject classifies the states along multiple dimensions precisely because a one-word label hides more than it shows, and different scholars, measuring different things, sort the same states differently (Krane, Rigos & Hill, 2001). You will hear "there are thirty-nine Dillon's Rule states," or some other round number. **Treat any such count as a claim to check against the actual state constitution and statutes, not a settled fact**, exactly as course 1 warned. This is guidance on how to read, not legal advice about your state.

## Sources
- Missouri Constitution of 1875, art. IX. https://www.sos.mo.gov/archives/history/1875Constitution
- Krane, D., Rigos, P. N., & Hill, M. B. (2001). Home rule in America: A fifty-state handbook. CQ Press.
- National League of Cities. (n.d.). Cities 101: Delegation of power. https://www.nlc.org/resource/cities-101-delegation-of-power/`,
      recallContent: [
        {
          prompt: "State Dillon's Rule in its three parts, and name the clause that does most of the work.",
          answer: "A municipal corporation has only powers granted in express words, those necessarily or fairly implied in them, and those essential to its declared purposes. The tie-breaker does most of the work: any reasonable, substantial doubt about a power is resolved against the city and the power is denied.",
        },
        {
          prompt: "What historical mess did Dillon's Rule grow out of?",
          answer: "The nineteenth-century system of special charters, where states chartered cities one at a time by individual acts, inviting constant legislative meddling and corruption. Dillon's Rule was in part a response to the chaotic line between state and city power.",
        },
        {
          prompt: "When a city acts in a grey area and is challenged, what is the fight actually about under Dillon's Rule?",
          answer: "Not whether the city acted wisely, but whether the state's grant reaches this far, with any reasonable doubt counting against the city.",
        },
      ],
    },
    {
      slug: "local-preemption",
      title: "4 · Preemption, the modern edge of the doctrine",
      section: "Section 1 · The layer you were never taught",
      body: `Home rule can give a city broad power to act, and the state can still take it away. The tool is **preemption**: a higher legislature passing a law that overrides a lower body's. Course 1 introduced it with the local minimum wage that the legislature nullifies. This lesson develops the categories, because "the state preempted it" hides several different mechanisms, and reading a real dispute means telling them apart. **This is how to read preemption, not legal advice about any specific ordinance.**

## Two axes: how it is declared, and what it forbids

**How the state declares it:**

| Kind | What it looks like |
|---|---|
| **Express preemption** | The statute says it: "no locality may regulate X" |
| **Implied preemption** | No such sentence, but a court reads a comprehensive state scheme as leaving no room, or finds the local law in direct conflict |

**What the state does to the local floor and ceiling:**

| Kind | Effect on the locality |
|---|---|
| **Floor preemption** | The state sets a minimum standard; localities may go further (a floor to build on) |
| **Ceiling preemption** | The state sets a maximum; localities may not exceed it (a ceiling they cannot break) |

**The floor-versus-ceiling distinction is the one people miss.** A state law can set a baseline everyone must meet, or it can set a cap nobody may pass, and the same subject can flip from one to the other when a legislature changes hands. Which one you are looking at decides whether a stronger local rule survives.

## The newer, sharper form

Scholars have documented a shift toward broader and more aggressive preemption, sometimes called **the new preemption**: not just overriding a specific ordinance, but barring localities from an entire field, and in some cases attaching penalties to local officials who legislate anyway, which commentators call **punitive preemption** (Briffault, 2018; National League of Cities, 2018). Whatever you think of it, the structural point is course 1's point sharpened: **a home-rule city's broad power still sits under the state's, and the state can occupy the field.** The city had the power to act; the state had the power to take the subject away. Both are true at once.

## Reading it in practice

When a local ordinance is challenged as preempted, the questions are concrete: **Is there express preemption? If not, is the state scheme so comprehensive that a court would find it implied? Is the state law a floor or a ceiling? Does the local law actually conflict?** You cannot answer these from memory, and this course will not let you pretend to, because **preemption rules are state-by-state and change with each legislative session.** The method points you at two documents, the state statute and the local charter or ordinance; the documents give the answer. If you have a real dispute, this helps you arrive at a lawyer already knowing the right questions. It does not replace one.

## Sources
- Briffault, R. (2018). The challenge of the new preemption. Stanford Law Review, 70, 1995-2027. https://www.stanfordlawreview.org/print/article/the-challenge-of-the-new-preemption/
- National League of Cities. (2018). City rights in an era of preemption: A state-by-state analysis. https://www.nlc.org/resource/city-rights-in-an-era-of-preemption/
- Hunter v. City of Pittsburgh, 207 U.S. 161 (1907). https://supreme.justia.com/cases/federal/us/207/161/`,
      recallContent: [
        {
          prompt: "Name the two models both called 'home rule' and how they differ.",
          answer: "Imperio home rule gives a city a protected sphere of purely local affairs the state may not enter (the fight is 'is this local or statewide?'). Legislative or devolution home rule gives broad power up front but lets the state preempt on any matter of statewide concern (the fight is 'has the state chosen to preempt?').",
        },
        {
          prompt: "What is the difference between constitutional and legislative home rule, and why does it matter?",
          answer: "Constitutional home rule is written into the state constitution and generally needs an amendment to take back; legislative home rule is granted by an ordinary statute the legislature can rewrite next session. Home rule is a spectrum of entrenchment, not a switch.",
        },
        {
          prompt: "Why is 'your state is a home-rule state' only a starting hypothesis?",
          answer: "Because both how broad the grant is and how entrenched it is vary, and a state often applies home rule to some governments or powers and Dillon's Rule to others. Different scholars sort the same states differently (Krane, Rigos & Hill, 2001), so any flat label or round count must be checked against the actual constitution and statutes.",
        },
      ],
    },
    {
      slug: "local-quiz-authority",
      title: "5 · Quiz: Dillon's Rule, home rule, and preemption",
      section: "Section 1 · The layer you were never taught",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "This course says the local layer is invisible mainly because:",
            options: [
              "It holds no real power over you",
              "Its votes are counted in secret",
              "It exists in only a few states",
              "Its races are off-cycle, low-turnout",
            ],
            correctIndex: 3,
            explanation: "Off-cycle low-turnout elections, boundaries that do not match, and power shown only as tax-bill line items make the busiest layer of government the least watched.",
            sourceLessonSlug: "local-invisible-layer",
          },
          {
            prompt: "Relative to course 1, this course sets out to:",
            options: [
              "Develop the local layer in depth",
              "Repeat the same survey again",
              "Replace the four-question method",
              "Cover only the federal branches",
            ],
            correctIndex: 0,
            explanation: "Course 1 introduced Dillon's Rule, home rule, and special districts in a lesson each. This course develops them, plus the forms of government and Unigov, that course 1 did not cover.",
            sourceLessonSlug: "local-invisible-layer",
          },
          {
            prompt: "Dillon's Rule holds that a city has only powers granted expressly, fairly implied, or:",
            options: [
              "Popular with the local voters",
              "Approved by a federal agency",
              "Essential to its declared purposes",
              "Cheaper than the alternatives",
            ],
            correctIndex: 2,
            explanation: "The third category is powers essential to the declared objects of the corporation, not merely convenient but indispensable (City of Clinton v. Cedar Rapids, 1868).",
            sourceLessonSlug: "local-dillons-rule",
          },
          {
            prompt: "Under Dillon's Rule, a reasonable, substantial doubt about a city's power is resolved:",
            options: [
              "In favor of the city acting",
              "Against the city, denying it",
              "By a vote of the residents",
              "By the county commission",
            ],
            correctIndex: 1,
            explanation: "The tie-breaker does most of the doctrine's work: in a genuine gray area the city loses, so it cannot act on unclear authority.",
            sourceLessonSlug: "local-dillons-rule",
          },
          {
            prompt: "The nineteenth-century system Dillon's Rule partly answered was one of:",
            options: [
              "Nationwide uniform city charters",
              "Cities with no legal charter",
              "Special charters, city by city",
              "Counties running every city",
            ],
            correctIndex: 2,
            explanation: "States chartered cities one at a time by special charters, inviting constant legislative meddling and corruption. Dillon's Rule responded to that chaotic line between state and city power.",
            sourceLessonSlug: "local-dillons-rule",
          },
          {
            prompt: "John Forrest Dillon, who stated the rule, was:",
            options: [
              "A United States senator",
              "An Iowa Supreme Court judge",
              "A Missouri city mayor",
              "A federal budget director",
            ],
            correctIndex: 1,
            explanation: "He stated the rule in City of Clinton v. Cedar Rapids (1868) and systematised it in his 1872 treatise on municipal corporations.",
            sourceLessonSlug: "local-dillons-rule",
          },
          {
            prompt: "Imperio (imperium in imperio) home rule tries to give a city:",
            options: [
              "A protected sphere of local affairs",
              "A permanent tax exemption forever",
              "A seat in the state legislature",
              "A veto over all federal action",
            ],
            correctIndex: 0,
            explanation: "The imperio model carves out a zone of purely local matters the state may not enter. It ran aground on the question of which subjects are actually purely local.",
            sourceLessonSlug: "local-home-rule",
          },
          {
            prompt: "The devolution (legislative) model of home rule gives a city broad power but lets the state:",
            options: [
              "Abolish the state constitution",
              "Preempt on statewide concerns",
              "Elect the city's own council",
              "Collect the city's parking fees",
            ],
            correctIndex: 1,
            explanation: "The model credited to the 1953 American Municipal Association provision grants broad power up front and lets the legislature override where it declares a statewide concern (Krane, Rigos & Hill, 2001).",
            sourceLessonSlug: "local-home-rule",
          },
          {
            prompt: "Constitutional home rule is harder for a legislature to strip than legislative home rule because it:",
            options: [
              "Is approved by the President",
              "Never expires under any law",
              "Requires a court order to use",
              "Needs a constitutional amendment",
            ],
            correctIndex: 3,
            explanation: "A power written into the state constitution generally needs an amendment to remove; a power granted by ordinary statute can be rewritten next session.",
            sourceLessonSlug: "local-home-rule",
          },
          {
            prompt: "The course says a flat label like 'Dillon's Rule state' should be treated as:",
            options: [
              "A settled fact to rely on",
              "A hypothesis you still check",
              "A federal legal ruling",
              "A permanent classification",
            ],
            correctIndex: 1,
            explanation: "States apply home rule to some powers or governments and Dillon's Rule to others, and classifiers sort them differently, so any round count must be checked against the actual documents.",
            sourceLessonSlug: "local-home-rule",
          },
          {
            prompt: "Express preemption differs from implied preemption in that express preemption:",
            options: [
              "Is decided only by voters",
              "Applies to federal law alone",
              "States the override in the text",
              "Cannot be found by a court",
            ],
            correctIndex: 2,
            explanation: "Express preemption says it outright ('no locality may regulate X'); implied preemption is a court reading a comprehensive scheme, or a direct conflict, as leaving no room.",
            sourceLessonSlug: "local-preemption",
          },
          {
            prompt: "Under FLOOR preemption, a locality may:",
            options: [
              "Go further than the state minimum",
              "Ignore the state law entirely",
              "Never regulate the subject at all",
              "Override the state constitution",
            ],
            correctIndex: 0,
            explanation: "A floor sets a minimum standard localities can build on and exceed. A ceiling sets a maximum they may not pass, which is the mirror image.",
            sourceLessonSlug: "local-preemption",
          },
          {
            prompt: "What commentators call 'punitive preemption' adds to a plain override:",
            options: [
              "A larger grant to the city",
              "A referendum for the voters",
              "A federal matching subsidy",
              "Penalties on local officials",
            ],
            correctIndex: 3,
            explanation: "The newer, sharper form can bar localities from a whole field and attach penalties to officials who legislate anyway (Briffault, 2018; National League of Cities, 2018).",
            sourceLessonSlug: "local-preemption",
          },
          {
            prompt: "When a home-rule city passes a rule and the state occupies the field, the course says:",
            options: [
              "Only the state ever had power",
              "The city never had any power",
              "Both facts are true at once",
              "A court alone can preempt it",
            ],
            correctIndex: 2,
            explanation: "The city had the power to act under its charter, and the state had the power to take the subject away by preemption. It reads cleanly as a hierarchy conflict, not a contradiction.",
            sourceLessonSlug: "local-preemption",
          },
          {
            prompt: "Whether a specific ordinance is preempted is something the course says you must:",
            options: [
              "Read from the actual statute",
              "Answer quickly from memory",
              "Assume is always the case",
              "Leave entirely to the mayor",
            ],
            correctIndex: 0,
            explanation: "Preemption rules are state-by-state and change each session. The method points you at the state statute and the local charter; the documents, not memory, give the answer.",
            sourceLessonSlug: "local-preemption",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 2 · The forms of municipal government
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "local-why-form-matters",
      title: "6 · Why the form matters: the same vote lands differently",
      section: "Section 2 · The forms of municipal government",
      body: `Two cities can hold identical elections, pass an identical ordinance, and get different outcomes, because they run on different **forms of government**. The form decides who is the chief executive, who hires and fires the staff, who writes the budget, and who can stop a law. Course 1 taught you to name the body that acted; this section teaches you to read what kind of body it is, because that changes the answer to every one of the four questions.

## Form is the wiring diagram, not the label

The name over the door ("City of Springfield") tells you almost nothing about how power flows inside it. The **form** does. There are three main forms in United States cities, plus the New England town meeting, which is its own thing and gets its own lesson in Section 4:

| Form | The one-line version |
|---|---|
| **Mayor-council** | An elected mayor and an elected council; power split between them, and how much the mayor holds varies a lot |
| **Council-manager** | An elected council sets policy and hires a professional manager to run the city day to day |
| **Commission** | Voters elect commissioners who together make policy and each also run a city department |

**Each form is a different answer to one question: who runs the administration?** In mayor-council it is an elected politician. In council-manager it is a hired professional. In commission it is the same people who make the law. That single design choice changes accountability, expertise, and who you call when the street floods.

## Why these forms exist: the reform argument

The council-manager and commission forms are not ancient. They were **inventions of the Progressive-era municipal reform movement** in the early twentieth century, which argued that city government should be run like a business, by trained professionals, insulated from machine politics and patronage (National League of Cities, n.d.). Whether that argument is right is still contested, professionalism can also mean less democratic control, but the history matters: **these forms were designed answers to a specific problem, corrupt boss-run cities, and they carry that design intent in their structure.** Reading a form well means reading the argument it was built to win.

## What changes, concretely, when the form changes

- **Who is the chief executive?** An elected mayor, a hired manager, or a board.
- **Who hires and fires department heads?** A politician answerable to voters, or a professional answerable to the council.
- **Is there a veto?** Strong mayors usually have one; managers and commissions usually do not.
- **Who writes the budget?** Often the mayor in a strong-mayor city, the manager in a council-manager city.
- **Where do you go to change things?** In one form you elect a new mayor; in another you lobby the council that hires the manager.

**Hold these five questions.** The next three lessons run each form through them, so that when you meet a real city you can read its wiring rather than guess from its name. This is analysis of structure, not legal advice.

## Sources
- National League of Cities. (n.d.). Cities 101: Forms of municipal government. https://www.nlc.org/resource/cities-101-forms-of-municipal-government/
- International City/County Management Association. (n.d.). Forms of local government. https://icma.org/`,
      recallContent: [
        {
          prompt: "Name the two axes preemption can be read on, and give each pair.",
          answer: "How it is declared: express (stated in the text) versus implied (a court reads a comprehensive scheme or a direct conflict). What it does to the locality: floor preemption (a minimum localities may exceed) versus ceiling preemption (a maximum localities may not pass).",
        },
        {
          prompt: "What is 'the new preemption,' including its punitive form?",
          answer: "A documented shift toward broader preemption that bars localities from an entire field rather than a single ordinance, and in its punitive form attaches penalties to local officials who legislate anyway (Briffault, 2018).",
        },
        {
          prompt: "Why can you not answer 'is this ordinance preempted?' from memory?",
          answer: "Preemption rules are state-by-state and change with each legislative session. You read the specific state statute and the local charter or ordinance; the method only tells you which two documents to read.",
        },
      ],
    },
    {
      slug: "local-mayor-council",
      title: "7 · Mayor-council: strong and weak",
      section: "Section 2 · The forms of municipal government",
      body: `The mayor-council form is the one most people picture: an elected mayor, an elected council, and the two of them sharing power. **The crucial variable is how much power the mayor actually holds**, and it runs along a spectrum from "strong mayor" to "weak mayor." The label on the ballot is the same; the wiring is completely different.

## Strong mayor: a real chief executive

In a **strong-mayor** city, the elected mayor is the chief executive, with the kind of powers a governor or a president has at their level (National League of Cities, n.d.):

- **Appoints and removes** department heads, often without needing council approval.
- **Prepares the budget** and submits it to the council.
- **Vetoes** council legislation, which the council can override only by a supermajority.
- **Runs the administration** directly; the council legislates but does not manage.

**Here the answer to "who runs the city?" is: the person you elected mayor.** Accountability is concentrated. If the potholes go unfilled, you know whose name is on it. The trade-off is that a great deal rides on one elected official, and the office can be captured.

## Weak mayor: power spread out

In a **weak-mayor** city, executive authority is **dispersed** rather than concentrated in the mayor (National League of Cities, n.d.):

- The mayor has **limited appointment power**; many officials are elected separately or appointed by the council.
- The mayor may have **no veto, or a weak one**.
- The **council** holds much of the administrative authority, sometimes running departments through committees.
- The mayor is often more a presiding officer and ceremonial head than a boss.

**Here "who runs the city?" has no single answer.** Power is split among the mayor, the council, and independently elected officials like a clerk, an assessor, or a treasurer. That was often the point: a weak-mayor design deliberately prevents any one person from controlling the machine. The cost is that accountability blurs, because no single office owns the outcome.

## Reading a mayor-council city with the method

- **Who acted?** The mayor, or the council, or a separately elected official. You must not blur them, especially in a weak-mayor city where several offices hold pieces of the executive.
- **Under what authority?** The charter, which sets exactly how strong the mayor is. Two mayor-council cities can put very different powers behind the same title.
- **Where is the power from?** The charter, granted by the state under Dillon's Rule or home rule.
- **Who can overturn it?** The council (by override or ordinance), the voters, the courts, and the state by preemption.

**The lesson to carry: never assume from the word "mayor."** Read the charter to find out whether this mayor signs the budget and hires the police chief, or cuts ribbons while the council runs the departments. This is structural reading, not legal advice.

## Sources
- National League of Cities. (n.d.). Cities 101: Forms of municipal government. https://www.nlc.org/resource/cities-101-forms-of-municipal-government/
- International City/County Management Association. (n.d.). Forms of local government. https://icma.org/`,
      recallContent: [
        {
          prompt: "What single question is each form of municipal government a different answer to?",
          answer: "Who runs the administration. In mayor-council it is an elected politician; in council-manager it is a hired professional; in commission it is the same people who make the law.",
        },
        {
          prompt: "Why were the council-manager and commission forms invented?",
          answer: "They were Progressive-era municipal reform inventions of the early twentieth century, arguing city government should be run like a business by trained professionals, insulated from machine politics and patronage. They carry that design intent in their structure.",
        },
        {
          prompt: "Name three of the five structural questions the section uses to read any form.",
          answer: "Who is the chief executive? Who hires and fires department heads? Is there a veto? Who writes the budget? Where do you go to change things? (Any three.)",
        },
      ],
    },
    {
      slug: "local-council-manager",
      title: "8 · Council-manager: the professional in the chair",
      section: "Section 2 · The forms of municipal government",
      body: `The council-manager form answers "who runs the city?" with a name most residents never learn: **the city manager**, a hired professional who is not on any ballot. It is one of the two most common forms in the United States, and it changes accountability in a way worth understanding precisely.

## How the wiring works

An elected **council** (usually with a mayor who sits on it, often as one vote among equals) holds the political authority: it makes policy, passes the budget, and represents the voters. It then **hires a professional city manager** to run the administration (National League of Cities, n.d.; International City/County Management Association, n.d.):

- The **manager** hires and fires department heads, prepares the budget for the council's approval, and runs day-to-day operations.
- The manager **serves at the council's pleasure**: the council can dismiss the manager, but voters cannot, because the manager is not elected.
- The **mayor** in this form is often mostly a presiding officer and community leader, not a chief executive.

**The design idea is a split between politics and administration.** The council decides what the city should do; the manager, a trained professional, decides how to do it. It is deliberately modeled on a corporation's board hiring a chief executive.

## Where it came from

The form grew out of the same reform movement as the commission. The position of a professional general manager appointed by the elected body traces to Staunton, Virginia, in 1908; **Sumter, South Carolina, adopted what is generally called the first council-manager charter in 1912**; and Dayton, Ohio, became the first large city to adopt the form in 1914, after a catastrophic 1913 flood exposed the limits of its old government (National League of Cities, n.d.). The professional association for these managers, now the International City/County Management Association, dates to 1914 (International City/County Management Association, n.d.).

## What it changes about accountability

Council-manager government trades one thing for another, and honest reading names both sides:

| You gain | You give up |
|---|---|
| Professional, trained administration | A directly elected chief executive to vote out |
| A manager insulated from patronage | A single clear political owner of outcomes |
| A board-and-executive division of labor | The simplicity of "elect the boss" |

**So the accountability runs indirectly.** You do not vote for the manager; you vote for the council that hires the manager. If you want the administration to change course, you change the council, and the council changes the manager. It is common among American cities above a few thousand people, according to the professional surveys, and rarer at the very largest cities, which lean mayor-council (International City/County Management Association, n.d.). Reading it well means knowing that the most powerful administrator in town holds no elected office. This is structure, not legal advice.

## Sources
- National League of Cities. (n.d.). Cities 101: Forms of municipal government. https://www.nlc.org/resource/cities-101-forms-of-municipal-government/
- International City/County Management Association. (n.d.). Council-manager form of government and ICMA history. https://icma.org/`,
      recallContent: [
        {
          prompt: "In a strong-mayor city, what four kinds of power does the mayor typically hold?",
          answer: "The mayor appoints and removes department heads, prepares the budget, can veto council legislation (overridable only by a supermajority), and runs the administration directly. The council legislates but does not manage.",
        },
        {
          prompt: "How is a weak-mayor city wired differently, and what was often the point?",
          answer: "Executive authority is dispersed: the mayor has limited appointment power, often no strong veto, and the council and separately elected officials hold much of the administration. The point was often to stop any one person from controlling the machine, at the cost of blurred accountability.",
        },
        {
          prompt: "Why should you never assume power from the word 'mayor'?",
          answer: "Two mayor-council cities can put very different powers behind the same title. You read the charter to learn whether this mayor signs the budget and hires the police chief, or mainly presides while the council runs the departments.",
        },
      ],
    },
    {
      slug: "local-commission",
      title: "9 · Commission government, and why it faded",
      section: "Section 2 · The forms of municipal government",
      body: `The commission form is the rarest of the three today, but it is worth knowing for two reasons: it was once the cutting edge of reform, and it does something the other forms deliberately avoid. **It fuses the legislature and the executive in the same people.**

## How it works

Voters elect a small board of **commissioners**, commonly three to five. Together, the commissioners are the city's **legislative body**: they pass ordinances and the budget as a group. But each commissioner **also individually heads an administrative department**, one runs public safety, another public works, another finance, and so on (National League of Cities, n.d.).

**That is the defining feature: no separation of powers.** The same people who write the laws also administer them. In mayor-council and council-manager government, lawmaking and administration are split between different offices; in commission government they are merged. It concentrates responsibility, and it removes the check that separation provides.

## Where it came from, with a real disagreement

The commission form is generally traced to **Galveston, Texas, in the rebuilding after the catastrophic hurricane of September 1900**, one of the deadliest disasters in United States history, which overwhelmed the old city government (Rice, 1977). A new charter concentrated authority in a small commission to get the city rebuilt.

**Here the accounts disagree, and the disagreement is the lesson.** The very first Galveston commission was not straightforwardly a model of elected reform: the 1901 arrangement involved some commissioners **appointed** rather than elected, which was later challenged and changed toward full election. So the tidy story that "Galveston invented elected commission government" needs a footnote (Rice, 1977). The form was then refined elsewhere, notably in Des Moines, Iowa, whose 1907 "Des Moines Plan" paired commission government with nonpartisan elections and the direct-democracy tools of initiative, referendum, and recall.

## Why it faded

Commission government spread fast in the Progressive era and then declined sharply, and few United States cities use it now (National League of Cities, n.d.). The reasons are structural:

- **No coordination.** With each commissioner running a department and no chief executive over them, nobody was responsible for the city as a whole; departments pulled in different directions.
- **The council-manager form ate its lunch.** Reformers who wanted professional administration got a cleaner version of it from council-manager government, which kept a policy board but hired one trained executive to run everything.

**So commission government is the form that tried to fix corruption by merging powers, and largely lost to the form that fixed it by hiring a professional.** Knowing it exists keeps you from mis-reading a commission city as if it had a separate executive, because it does not. This is structural analysis, not legal advice.

## Sources
- Rice, B. R. (1977). Progressive cities: The commission government movement in America, 1901-1920. University of Texas Press.
- National League of Cities. (n.d.). Cities 101: Forms of municipal government. https://www.nlc.org/resource/cities-101-forms-of-municipal-government/`,
      recallContent: [
        {
          prompt: "In council-manager government, who runs the administration, and how are they held to account?",
          answer: "A hired professional city manager runs day-to-day operations, hires and fires department heads, and prepares the budget, serving at the council's pleasure. Voters cannot remove the manager directly; they change the council that hires the manager.",
        },
        {
          prompt: "Trace the origin of the council-manager form.",
          answer: "A professional general manager appointed by the elected body traces to Staunton, Virginia (1908); Sumter, South Carolina adopted the first council-manager charter (1912); and Dayton, Ohio was the first large city to adopt it (1914), after the 1913 flood. The managers' association (now ICMA) dates to 1914.",
        },
        {
          prompt: "What does council-manager government trade away for professional administration?",
          answer: "A directly elected chief executive to vote out and a single clear political owner of outcomes. Accountability runs indirectly: you vote for the council, which hires the manager.",
        },
      ],
    },
    {
      slug: "local-quiz-forms",
      title: "10 · Quiz: the forms of municipal government",
      section: "Section 2 · The forms of municipal government",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "The form of a city government mainly determines:",
            options: [
              "How its power actually flows",
              "The name printed on its seal",
              "Its distance from the capital",
              "The size of its total budget",
            ],
            correctIndex: 0,
            explanation: "Form is the wiring diagram: who is chief executive, who hires staff, who writes the budget, who can veto. The name over the door tells you almost none of that.",
            sourceLessonSlug: "local-why-form-matters",
          },
          {
            prompt: "The council-manager and commission forms were invented mainly to:",
            options: [
              "Enlarge the mayor's own salary",
              "Copy the federal government",
              "Fight machine politics and graft",
              "Replace elections with courts",
            ],
            correctIndex: 2,
            explanation: "They were Progressive-era reforms arguing cities should be run like a business by professionals, insulated from patronage. They carry that design intent in their structure.",
            sourceLessonSlug: "local-why-form-matters",
          },
          {
            prompt: "The one question every form is a different answer to is:",
            options: [
              "How large the city should grow",
              "Who runs the administration",
              "Where to build the city hall",
              "When to hold the elections",
            ],
            correctIndex: 1,
            explanation: "In mayor-council it is an elected politician; in council-manager a hired professional; in commission the same people who make the law.",
            sourceLessonSlug: "local-why-form-matters",
          },
          {
            prompt: "In a STRONG-mayor city, the mayor typically has all of these EXCEPT:",
            options: [
              "Power to prepare the budget",
              "A veto over the council",
              "No say over the departments",
              "Power to appoint staff",
            ],
            correctIndex: 2,
            explanation: "A strong mayor runs the administration directly, appoints and removes department heads, prepares the budget, and holds a veto. Having no say over departments describes a weak mayor.",
            sourceLessonSlug: "local-mayor-council",
          },
          {
            prompt: "In a WEAK-mayor city, executive power is best described as:",
            options: [
              "Held only by the state",
              "Handed to a hired manager",
              "Concentrated in the mayor",
              "Dispersed across offices",
            ],
            correctIndex: 3,
            explanation: "The mayor has limited appointment power and often no strong veto; the council and separately elected officials hold much of the administration, deliberately spreading power out.",
            sourceLessonSlug: "local-mayor-council",
          },
          {
            prompt: "Two cities both call their leader 'mayor.' The course says you learn the real powers by reading:",
            options: [
              "The city's charter itself",
              "The mayor's own website",
              "The last election's result",
              "The federal constitution",
            ],
            correctIndex: 0,
            explanation: "The charter sets exactly how strong the mayor is. Two mayor-council cities can put very different powers behind the same title.",
            sourceLessonSlug: "local-mayor-council",
          },
          {
            prompt: "In council-manager government, the city manager is:",
            options: [
              "Elected by the city voters",
              "Appointed by the governor",
              "Chosen by a federal board",
              "Hired by the elected council",
            ],
            correctIndex: 3,
            explanation: "The council hires a professional manager to run the administration; the manager serves at the council's pleasure and is not on any ballot.",
            sourceLessonSlug: "local-council-manager",
          },
          {
            prompt: "The first council-manager charter is generally credited to:",
            options: [
              "Sumter, South Carolina, 1912",
              "Galveston, Texas, in 1901",
              "Dayton, Ohio, in the 1913 flood",
              "Des Moines, Iowa, in 1907",
            ],
            correctIndex: 0,
            explanation: "Sumter adopted the first council-manager charter in 1912. Staunton created a general-manager post in 1908, and Dayton was the first large city to adopt the form in 1914.",
            sourceLessonSlug: "local-council-manager",
          },
          {
            prompt: "The core accountability trade of council-manager government is professional administration in exchange for:",
            options: [
              "A far larger city council",
              "No elected chief to vote out",
              "The loss of all elections",
              "Direct rule by the state",
            ],
            correctIndex: 1,
            explanation: "You cannot vote out the manager. Accountability runs indirectly: you change the council, and the council changes the manager.",
            sourceLessonSlug: "local-council-manager",
          },
          {
            prompt: "The defining feature of commission government is that it:",
            options: [
              "Hires one trained manager",
              "Gives the mayor a strong veto",
              "Bans all city departments",
              "Merges lawmaking and running",
            ],
            correctIndex: 3,
            explanation: "Commissioners together are the legislature and each also heads a department, fusing lawmaking and administration in the same people, with no separation of powers.",
            sourceLessonSlug: "local-commission",
          },
          {
            prompt: "Commission government is generally traced to the rebuilding of:",
            options: [
              "Chicago after its 1871 fire",
              "San Francisco after the quake",
              "Galveston after the 1900 storm",
              "New Orleans after a flood",
            ],
            correctIndex: 2,
            explanation: "Galveston, Texas concentrated authority in a small commission after the catastrophic hurricane of September 1900 (Rice, 1977).",
            sourceLessonSlug: "local-commission",
          },
          {
            prompt: "The course adds a footnote to the Galveston origin story because the first commission:",
            options: [
              "Was never actually created",
              "Included appointed members",
              "Ran the entire state of Texas",
              "Lasted only a single week",
            ],
            correctIndex: 1,
            explanation: "The 1901 arrangement involved some commissioners appointed rather than elected, later challenged and changed. The tidy 'invented elected commission government' story needs the footnote (Rice, 1977).",
            sourceLessonSlug: "local-commission",
          },
          {
            prompt: "A main structural reason commission government faded is that it had:",
            options: [
              "No one coordinating the city",
              "Too many trained managers",
              "An overly powerful mayor",
              "No power to tax at all",
            ],
            correctIndex: 0,
            explanation: "With each commissioner running a department and no chief executive over them, nobody owned the city as a whole, and council-manager government offered cleaner professional administration.",
            sourceLessonSlug: "local-commission",
          },
          {
            prompt: "The Des Moines Plan of 1907 paired commission government with:",
            options: [
              "A hired city manager role",
              "A return to a strong mayor",
              "Nonpartisan votes and recall",
              "Rule by the county board",
            ],
            correctIndex: 2,
            explanation: "The Des Moines Plan added nonpartisan elections and the direct-democracy tools of initiative, referendum, and recall to the commission form.",
            sourceLessonSlug: "local-commission",
          },
          {
            prompt: "Reading a commission city correctly means remembering it has:",
            options: [
              "A separate elected executive",
              "No separate executive branch",
              "A manager over the board",
              "A governor as its mayor",
            ],
            correctIndex: 1,
            explanation: "Commission government merges legislature and executive, so there is no separate chief executive. Mis-reading it as if there were one is the common error.",
            sourceLessonSlug: "local-commission",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 3 · Special districts, the largest layer
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "local-special-districts",
      title: "11 · The layer that outnumbers the cities",
      section: "Section 3 · Special districts, the largest layer",
      body: `Course 1 told you special districts exist and that they outnumber municipalities. This section is the deep version: what a special district actually is, why there are so many of them, and why they are the sharpest test of everything this course teaches. Start with the count, because the count is the headline.

## The count

The 2017 Census of Governments counted, in the United States (U.S. Census Bureau, 2017):

| Type of local government | Count (2017) |
|---|---|
| **Special districts** | 38,542 |
| Township governments | 16,253 |
| **Municipalities** | 19,495 |
| County governments | 3,031 |
| Independent school districts | 12,754 |

Read the two bold rows against each other. **There are more special districts (38,542) than there are municipalities (19,495).** The 2022 Census of Governments counted roughly ninety-one thousand local governments in all and again found far more special districts than municipalities (U.S. Census Bureau, 2022). Add independent school districts, which the Census counts on a separate line but which are themselves single-purpose governments, and **the single-purpose layer dwarfs the general-purpose one.** The largest category of American government by unit count is the one with the least public attention on it.

## What a special district actually is

A **special district** is a unit of local government created to perform **one function, or a few related ones**, separate from the general-purpose city or county: water, sewer, fire protection, libraries, transit, ports, hospitals, cemeteries, mosquito abatement, soil conservation, flood control, and dozens more. Most are **independent**: they have their own governing board, their own boundary, their own budget, and very often their own power to **tax and to borrow** (U.S. Census Bureau, 2017; Foster, 1997). Ask a special district course 1's Question 2, under what authority, and the answer is the narrowest possible: the single purpose named in the statute that created it, and nothing wider.

## Why there are so many: three real reasons

Special districts are not an accident of clutter. They solve real problems that general-purpose governments cannot (Foster, 1997; Burns, 1994):

1. **A single job, done well.** A district can focus on one service, water, or fire, without competing for attention inside a city budget.
2. **The right boundary.** A service area often does not match a city line. A watershed, a transit region, or a fire-response zone crosses municipal boundaries, and a district can be drawn to fit the service instead of the politics.
3. **Money the city cannot raise.** This is the quiet one. A district has its own taxing and borrowing authority, so a community can finance a service, and issue debt for it, **without raising the general-purpose government's taxes or hitting its constitutional debt limit.** Districts are, in part, a workaround for state-imposed caps on city and county borrowing.

**That third reason is why the layer keeps growing.** When a city cannot tax or borrow enough for a project, a special district can be created that can. The result is real, taxing, borrowing government that almost nobody can name, and the next lesson is about why nobody votes in its elections. This is description of the structure, not legal advice.

## Sources
- U.S. Census Bureau. (2017). 2017 Census of Governments, Organization component. https://www.census.gov/programs-surveys/cog.html
- U.S. Census Bureau. (2022). 2022 Census of Governments, Organization component. https://www.census.gov/programs-surveys/cog.html
- Foster, K. A. (1997). The political economy of special-purpose government. Georgetown University Press.
- Burns, N. (1994). The formation of American local governments: Private values in public institutions. Oxford University Press.`,
      recallContent: [
        {
          prompt: "What is the defining feature commission government has that mayor-council and council-manager do not?",
          answer: "It merges the legislature and the executive in the same people: commissioners together pass the laws and budget, and each also individually heads a city department. There is no separation of powers and no separate chief executive.",
        },
        {
          prompt: "Give two structural reasons commission government faded.",
          answer: "With each commissioner running a department and no chief executive over them, nobody was responsible for the city as a whole and departments pulled in different directions; and council-manager government offered cleaner professional administration with a single trained executive.",
        },
        {
          prompt: "What did the 1907 Des Moines Plan add to the commission form?",
          answer: "Nonpartisan elections plus the direct-democracy tools of initiative, referendum, and recall.",
        },
      ],
    },
    {
      slug: "local-turnout-problem",
      title: "12 · Why nobody votes: the turnout problem",
      section: "Section 3 · Special districts, the largest layer",
      body: `A special district can tax you, borrow against your property, and set policy for a service you depend on, and its board is chosen in an election almost nobody votes in, or in no election at all. This is not a small flaw. **It is the accountability problem that makes the whole layer worth a lesson.**

## Two ways the board is chosen, and both dodge the voter

| How the board is filled | Why the voter is missing |
|---|---|
| **Elected, off-cycle** | The race is held on its own date, apart from a presidential or midterm ballot, so few people even know it is happening |
| **Appointed** | Board members are named by other officials or by member agencies, so residents never vote for them at all |

**Many special-district boards are not elected by residents directly at all.** They are appointed by a county board, by city councils, or, for regional districts, by the member governments that make up the district. Where the board is elected, the election is often **off-cycle**, held on an odd date by itself.

## The off-cycle finding, sourced

Off-cycle timing is not neutral. It drives turnout **down**, sometimes into the single digits, and low turnout systematically shifts influence toward small, organized, high-interest groups, the people with a direct stake, such as employees, contractors, and heavy users of the service, who reliably show up when almost no one else does (Anzia, 2014). **The result is a government whose electorate is tiny and unrepresentative by design, not by accident.** Anzia's central finding is that off-cycle elections do not merely lower turnout; they change who wins, by handing outsized weight to organized interests.

## Why this is the sharpest test of the course

Everything this course teaches converges on the special district:

- It holds real power (course 1's four questions all have answers here).
- Its authority is the narrowest kind (a single statutory purpose).
- It can tax and borrow (often to work around a city's limits).
- And it is chosen by almost no one, so the ordinary check, throwing the body out at the next election, barely functions.

**A government you cannot name, whose election you did not know was happening, that taxes you anyway, is the exact thing this course exists to make visible.** The fix is not complicated in principle: read your tax bill, find the districts, learn how each board is chosen, and vote in the off-cycle races or show up to the appointing body's meetings. It is only hard because the layer is built to be unseen. The next lesson reads one real district all the way down. This is civic description, not legal advice.

## Sources
- Anzia, S. F. (2014). Timing and turnout: How off-cycle elections favor organized groups. University of Chicago Press.
- U.S. Census Bureau. (2017). 2017 Census of Governments, Organization component. https://www.census.gov/programs-surveys/cog.html`,
      recallContent: [
        {
          prompt: "According to the 2017 Census, how did special districts compare with municipalities, and what happens when you add school districts?",
          answer: "There were more special districts (38,542) than municipalities (19,495). Adding independent school districts (12,754), themselves single-purpose governments the Census counts separately, the single-purpose layer dwarfs the general-purpose one.",
        },
        {
          prompt: "What are the three real reasons special districts exist?",
          answer: "A single job done well without competing inside a city budget; the right boundary, since a service area (a watershed, a transit region) often crosses city lines; and money the city cannot raise, because a district has its own taxing and borrowing authority and can sidestep a city's debt limit.",
        },
        {
          prompt: "How does a special district answer course 1's Question 2, under what authority?",
          answer: "In the narrowest possible way: its authority is the single function named in the statute that created it, and nothing wider.",
        },
      ],
    },
    {
      slug: "local-district-example",
      title: "13 · A real one, read all the way down",
      section: "Section 3 · Special districts, the largest layer",
      body: `Abstractions about special districts are easy to nod along to and hard to feel. So read a real one, a large, powerful district that serves millions of people, that almost none of them vote for, to see the whole pattern in a single case. Then a small kind of district to see the other end of the range.

## The giant almost nobody votes for: the Metropolitan Water District of Southern California

The **Metropolitan Water District of Southern California (MWD)** was created in 1928 under a California state act to bring water to the growing Los Angeles region. It is a wholesaler: it delivers imported water to member public agencies, which in turn serve their communities. Today it serves close to **nineteen million people across six Southern California counties** through its member agencies (Metropolitan Water District of Southern California, n.d.).

Now run course 1's four questions:

- **Who acted?** MWD's **board of directors**. And here is the tell: the directors are **appointed by the member agencies**, not elected by the nineteen million residents who drink the water. Board voting is weighted by each member agency's assessed valuation.
- **Under what authority?** Its single statutory purpose: importing and wholesaling water. Nothing wider.
- **Where is the power from?** The California act that created it, a state statute. A creature of the state, exactly like a city.
- **Who can overturn it?** The state (which can amend the enabling law), the member agencies (which appoint the board), and courts. **Ordinary residents have no direct ballot line to it at all.**

**So one of the most consequential governments in Southern California, controlling a water supply for millions, is one that those millions never vote for and mostly cannot name.** That is the special-district pattern at full scale: real power, narrow purpose, and an electorate that is not the public.

## The other end of the range: single-purpose districts you can hold in your hand

Not every district is a giant. At the small end are the single-purpose districts that give the layer its flavor. **Mosquito abatement and vector control** is a classic example: in California, such districts operate under a dedicated state law (the Mosquito Abatement and Vector Control District Law, California Health and Safety Code) and can levy taxes or assessments to control mosquitoes and the diseases they carry, governed by boards that are frequently **appointed** by the county board or city councils (California Health and Safety Code, Mosquito Abatement and Vector Control District Law). A district that exists to kill mosquitoes, with its own budget and taxing power and an appointed board, is not a joke. **It is a small, sharp illustration of the whole idea: government narrowed to one job, financed on its own, and almost invisible.**

## The pattern to carry

Whether it moves a river of water for millions or sprays a marsh for a county, a special district shows the same four things: **real authority, a single purpose, its own money, and an electorate that is tiny or absent.** When you do the capstone, this is what you will hunt for on your own tax bill, and it is where your surprises will be. This is description, not legal advice.

## Sources
- Metropolitan Water District of Southern California. (n.d.). About Metropolitan. https://www.mwdh2o.com/
- California Health and Safety Code, Mosquito Abatement and Vector Control District Law, div. 3, § 2000 et seq. https://leginfo.legislature.ca.gov/
- U.S. Census Bureau. (2017). 2017 Census of Governments, Organization component. https://www.census.gov/programs-surveys/cog.html`,
      recallContent: [
        {
          prompt: "Name the two ways a special-district board is filled, and why each dodges the voter.",
          answer: "Elected off-cycle, where the race is held on its own date apart from a major ballot so few people know it is happening; or appointed, where members are named by other officials or member agencies so residents never vote for them at all.",
        },
        {
          prompt: "What is Anzia's (2014) central finding about off-cycle elections?",
          answer: "Off-cycle timing does not merely lower turnout; it changes who wins, handing outsized weight to small, organized, high-interest groups (employees, contractors, heavy users) who reliably show up when almost no one else does.",
        },
        {
          prompt: "Why is the special district the sharpest test of this whole course?",
          answer: "It holds real power with the narrowest kind of authority, can tax and borrow (often to work around a city's limits), and is chosen by almost no one, so the ordinary check of voting the body out barely functions. It is exactly the invisible government the course exists to surface.",
        },
      ],
    },
    {
      slug: "local-quiz-districts",
      title: "14 · Quiz: special districts",
      section: "Section 3 · Special districts, the largest layer",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "According to the 2017 Census, special districts (38,542) versus municipalities (19,495) were:",
            options: [
              "Fewer than municipalities",
              "Roughly equal in number",
              "More than municipalities",
              "Not counted at all",
            ],
            correctIndex: 2,
            explanation: "There are more special districts than municipalities, and adding school districts the single-purpose layer dwarfs the general-purpose one.",
            sourceLessonSlug: "local-special-districts",
          },
          {
            prompt: "A special district is a unit of local government created to perform:",
            options: [
              "Every city function at once",
              "One function, or a few related",
              "All the powers a state holds",
              "The duties of the county board",
            ],
            correctIndex: 1,
            explanation: "Water, fire, libraries, transit, mosquito abatement: each can be its own district, with authority limited to the single purpose in its enabling statute.",
            sourceLessonSlug: "local-special-districts",
          },
          {
            prompt: "The 'quiet' third reason so many special districts exist is that a district can:",
            options: [
              "Raise money the city cannot",
              "Elect its own state senators",
              "Overrule the state supreme court",
              "Rewrite the city's own charter",
            ],
            correctIndex: 0,
            explanation: "A district has its own taxing and borrowing power, so a community can finance and issue debt for a service without raising the city's taxes or hitting its debt limit.",
            sourceLessonSlug: "local-special-districts",
          },
          {
            prompt: "The Census counts independent school districts on a separate line, but they are still:",
            options: [
              "Branches of the state courts",
              "Part of the county government",
              "Single-purpose governments",
              "Private nonprofit charities",
            ],
            correctIndex: 2,
            explanation: "School districts are single-purpose governments too; counting them with special districts, the single-purpose layer far outnumbers the general-purpose one.",
            sourceLessonSlug: "local-special-districts",
          },
          {
            prompt: "One real reason a service gets its own district is that the service area often:",
            options: [
              "Sits inside one city block",
              "Crosses city boundary lines",
              "Belongs to the federal army",
              "Changes shape every month",
            ],
            correctIndex: 1,
            explanation: "A watershed, a transit region, or a fire-response zone crosses municipal lines, so a district can be drawn to fit the service instead of the politics.",
            sourceLessonSlug: "local-special-districts",
          },
          {
            prompt: "Many special-district boards avoid the voter entirely because they are:",
            options: [
              "Chosen by a lottery draw",
              "Elected every single year",
              "Appointed by other officials",
              "Selected by the President",
            ],
            correctIndex: 2,
            explanation: "Boards are often appointed by a county board, city councils, or the member agencies of a regional district, so residents never vote for them.",
            sourceLessonSlug: "local-turnout-problem",
          },
          {
            prompt: "Anzia (2014) found that off-cycle elections do not just lower turnout; they also:",
            options: [
              "Change who tends to win",
              "Raise the overall turnout",
              "Cancel the vote by default",
              "Move power to the governor",
            ],
            correctIndex: 0,
            explanation: "Low off-cycle turnout hands outsized weight to small, organized, high-interest groups, so the timing itself shifts who wins.",
            sourceLessonSlug: "local-turnout-problem",
          },
          {
            prompt: "The special district is called the course's sharpest test because it combines real power with:",
            options: [
              "A very large voting public",
              "No taxing power at all",
              "Total federal oversight",
              "An electorate that is tiny",
            ],
            correctIndex: 3,
            explanation: "It taxes and borrows on a single narrow purpose, yet is chosen by almost no one, so the ordinary check of voting the body out barely functions.",
            sourceLessonSlug: "local-turnout-problem",
          },
          {
            prompt: "The Metropolitan Water District of Southern California is governed by a board that is:",
            options: [
              "Elected by all its residents",
              "Named by the President",
              "Appointed by member agencies",
              "Run by the state governor",
            ],
            correctIndex: 2,
            explanation: "Its directors are appointed by the member agencies, not elected by the millions who drink the water, with board votes weighted by assessed valuation.",
            sourceLessonSlug: "local-district-example",
          },
          {
            prompt: "MWD illustrates the special-district pattern at full scale because it serves:",
            options: [
              "A single small town only",
              "Millions who never vote for it",
              "The whole United States",
              "Just its own employees",
            ],
            correctIndex: 1,
            explanation: "It serves close to nineteen million people across six counties, almost none of whom vote for or can name it: real power, narrow purpose, no public electorate.",
            sourceLessonSlug: "local-district-example",
          },
          {
            prompt: "Asked course 1's Question 3 of MWD, where its power comes from, the answer is:",
            options: [
              "A California state statute",
              "A treaty with Mexico",
              "The federal Constitution",
              "A city's local charter",
            ],
            correctIndex: 0,
            explanation: "MWD was created under a California act, making it a creature of the state exactly like a city.",
            sourceLessonSlug: "local-district-example",
          },
          {
            prompt: "A mosquito abatement district is used in the lesson as an example of a district that is:",
            options: [
              "Larger than any state",
              "Banned in every state",
              "Small but real government",
              "Purely a private company",
            ],
            correctIndex: 2,
            explanation: "In California these districts run under a dedicated state law, can levy taxes or assessments, and are often governed by appointed boards: small, sharp, and almost invisible.",
            sourceLessonSlug: "local-district-example",
          },
          {
            prompt: "Every special district, giant or small, shows the same four things: real authority, one purpose, its own money, and:",
            options: [
              "A huge active electorate",
              "A tiny or absent electorate",
              "A seat in the state house",
              "A share of federal power",
            ],
            correctIndex: 1,
            explanation: "That is the pattern the capstone hunts for on your tax bill, and where the surprises are.",
            sourceLessonSlug: "local-district-example",
          },
          {
            prompt: "The reason residents rarely know a district election is happening is that it is often held:",
            options: [
              "On the presidential ballot",
              "Only inside city hall",
              "By the state legislature",
              "Off-cycle, on its own date",
            ],
            correctIndex: 3,
            explanation: "Off-cycle timing, a separate odd election date, keeps turnout low and the race off most voters' radar.",
            sourceLessonSlug: "local-turnout-problem",
          },
          {
            prompt: "Most special districts are described as 'independent,' meaning they have their own:",
            options: [
              "Army, navy, and air force",
              "Board, budget, and taxing power",
              "Seat in the United States Senate",
              "Currency and postal service",
            ],
            correctIndex: 1,
            explanation: "An independent special district has its own governing board, boundary, budget, and very often its own power to tax and borrow.",
            sourceLessonSlug: "local-special-districts",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 4 · Two answers, and a case study
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "local-town-meeting",
      title: "15 · Town meeting: the residents are the legislature",
      section: "Section 4 · Two answers, and a case study",
      body: `Every form so far, mayor-council, council-manager, commission, and every special district, puts a body between the residents and the law. The New England **town meeting** does the opposite. In its purest form there is no council standing in for you, because **the residents are the legislature.** It is one of the oldest continuous forms of direct democracy in the United States, and it is the far pole from the case study that closes this section.

## Open town meeting: direct democracy that still runs

In an **open town meeting**, the legislative body of the town is the **assembly of all its registered voters.** Once a year, and at special meetings when needed, the voters gather, and they themselves adopt the budget, pass the town's bylaws, set the tax rate, and authorize spending (Massachusetts Secretary of the Commonwealth, n.d.). A **moderator**, elected by the town, presides and keeps order; between meetings, an elected **board of selectmen or select board** administers what the meeting decided. **But the lawmaking body is the room full of voters, not a council.** When you ask course 1's Question 1, who acted, the answer at a town meeting can literally be: the voters of the town, in person, by a show of hands.

This is not a museum piece. Town meeting remains the working government of many towns across New England, Massachusetts, Vermont, New Hampshire, Connecticut, Rhode Island, and Maine, and it decides real budgets every year (Bryan, 2004).

## Representative town meeting: the compromise for larger towns

Direct assembly gets unwieldy when a town grows large. The answer some New England towns adopted is the **representative town meeting**: instead of every voter legislating, the voters **elect town meeting members**, often many dozens of them, who attend and vote on the town's behalf (Massachusetts Secretary of the Commonwealth, n.d.). It keeps the town-meeting structure, a large deliberative body adopting the budget and bylaws, but scales it by representation.

| | Open town meeting | Representative town meeting |
|---|---|---|
| **Who legislates** | Every registered voter, in person | Elected town meeting members |
| **Best fit** | Smaller towns | Larger towns |
| **What is kept** | Direct participation | The town-meeting form, at scale |

## Why it belongs in this course

Town meeting is the **counter-example that proves the point of the whole path.** After four sections in which power sits in councils, managers, commissions, appointed district boards, and, next lesson, a state legislature reorganizing a city from the capital, town meeting is the one form where the power sits, undelegated, in the residents themselves. **It shows that the local layer is not one thing.** At one pole, the people are the government in a room; at the other, the government is redrawn over the people's heads by statute. Both are the local layer. The last two lessons of this section are that other pole. This is description, not legal advice.

## Sources
- Massachusetts Secretary of the Commonwealth. (n.d.). Citizen's guide to town meetings. https://www.sec.state.ma.us/divisions/publications-and-regulations/publications.htm
- Bryan, F. M. (2004). Real democracy: The New England town meeting and how it works. University of Chicago Press.`,
      recallContent: [
        {
          prompt: "Run course 1's four questions on the Metropolitan Water District of Southern California.",
          answer: "Who acted: its board of directors, appointed by member agencies (not elected by residents). Under what authority: its single purpose, importing and wholesaling water. Where from: the California act that created it (a creature of the state). Who can overturn it: the state, the member agencies, and courts; residents have no direct ballot line.",
        },
        {
          prompt: "Why is a mosquito abatement district a good illustration of the special-district idea?",
          answer: "It is government narrowed to one job (killing mosquitoes and controlling vector-borne disease), financed on its own with taxing or assessment power under a dedicated state law, and governed by a frequently appointed board: real, small, and almost invisible.",
        },
        {
          prompt: "What four things does every special district show, giant or small?",
          answer: "Real authority, a single purpose, its own money (taxing and borrowing), and an electorate that is tiny or absent.",
        },
      ],
    },
    {
      slug: "local-unigov-one",
      title: "16 · Unigov: the state redraws a city overnight",
      section: "Section 4 · Two answers, and a case study",
      body: `Now the far pole from the town meeting. In one town, the residents are the legislature. In this case study, a state legislature reorganized a major city's whole government by statute, and the residents of that city never got to vote on it. **Unigov is the purest demonstration in this course of the fact course 1 taught and this course develops: in the United States, a city is a creature of the state.**

The Indianapolis route cluster in this catalog already teaches Unigov, as a chronology test for one corridor, Indiana Avenue. **This lesson teaches it as the structural case**: not what Unigov did to any one street, but how the state had the power to do it at all.

## What happened

The Indiana General Assembly **approved the Unigov bill in 1969**, and **Indianapolis and Marion County were officially consolidated on January 1, 1970**, creating the Consolidated City of Indianapolis (Wachter, 2014). "Unigov" is short for **unified government.** It merged the governments of the city and the county under a single elected mayor and a unified City-County Council, folding what had been 31 city departments and 11 agencies into six new executive departments (Wachter, 2014). It was driven by Mayor **Richard Lugar** and Marion County Republican chairman **Keith Bulen** (Wachter, 2014).

## The procedural fact that does the most work

Read this next fact through course 1's fourth question, who can overturn it, and through Hunter v. City of Pittsburgh, which held that a state may reorganize or abolish a city "with or without the consent of the citizens" (Hunter v. City of Pittsburgh, 1907).

**Unigov "stands out as the only major post-war consolidation to be accomplished without a voter referendum"** (Wachter, 2014). The other two large postwar city-county consolidations of the era, Nashville and Jacksonville, went to their voters. **Indianapolis did not.** A referendum was discussed and was overwhelmingly opposed, so the plan went through the state legislature instead (Wachter, 2014).

**That is the whole doctrine of this course, happening in one law.** A city is a creature of the state. The state, through its legislature, redrew the boundaries and the government of its largest city by statute, without asking the city's residents, exactly the power the Supreme Court described in 1907. Everything abstract in Section 1 is concrete here: **the city did not do this to itself, and could not have stopped it, because the power was never the city's to hold.**

## Why the state COULD do it

Nothing about Unigov required the city's permission, because under the vertical stack you learned in course 1, the city sits below the state and holds only delegated power. Reorganizing local government is a state function. So the enabling authority for Unigov was not a city charter at all; **it was an act of the Indiana General Assembly**, the state exercising its own power over its own creatures. A home-rule city might have had more room to resist in some matters, but the structure of local government itself is the kind of thing a state legislature can rewrite. This is analysis of the authority, not legal advice about consolidation.

## Sources
- Wachter, J. (2014, May). 40 years after Unigov: Indianapolis and Marion County's experience with consolidated government. The Abell Foundation. https://abell.org/wp-content/uploads/2022/02/ec-unigov514.pdf
- Hunter v. City of Pittsburgh, 207 U.S. 161 (1907). https://supreme.justia.com/cases/federal/us/207/161/
- Encyclopedia of Indianapolis. (n.d.). Structure of Unigov. https://indyencyclopedia.org/structure-of-unigov/`,
      recallContent: [
        {
          prompt: "In an open town meeting, who is the legislative body, and who presides?",
          answer: "The legislative body is the assembly of all the town's registered voters, who themselves adopt the budget, pass bylaws, and set the tax rate. An elected moderator presides, and an elected board of selectmen (select board) administers between meetings.",
        },
        {
          prompt: "How does a representative town meeting differ from an open one, and why?",
          answer: "Instead of every voter legislating in person, the voters elect town meeting members (often dozens) who attend and vote on the town's behalf. It keeps the town-meeting form but scales it by representation for larger towns.",
        },
        {
          prompt: "Why does town meeting belong in this course as a counter-example?",
          answer: "Every other form puts a body between residents and the law; town meeting is the one form where power sits undelegated in the residents themselves. It shows the local layer is not one thing, running from 'the people are the government in a room' to power redrawn over the people's heads.",
        },
      ],
    },
    {
      slug: "local-unigov-two",
      title: "17 · What Unigov did not consolidate, and the fight over why",
      section: "Section 4 · Two answers, and a case study",
      body: `"Consolidation" sounds total, one government replacing many. Unigov was not total, and the parts it left out are as revealing as the parts it merged. This lesson reads the exclusions, and then teaches the genuine, unresolved disagreement about what Unigov did to the people who lived under it. **Where accounts disagree, the disagreement is the lesson.**

## Consolidation did far less than the word suggests

Unigov left large pieces of local government standing (Wachter, 2014):

- **The school districts were not consolidated.** Indianapolis Public Schools and the township school corporations stayed separate.
- **Incorporated cities and towns over 5,000 people kept their own governments**, leaving **Beech Grove, Lawrence, Southport, and Speedway** independent inside the consolidated city.
- **The townships continued**, and several municipal corporations and the county courts remained separate.

The result, decades on: **fifty separate and overlapping governmental units remain within Marion County, with more than sixty-one taxing districts** (Wachter, 2014). **Read that against Section 3.** Even a celebrated "unified government" did not abolish the local layer's messiness. The special districts, the excluded cities, the townships, the separate schools, they all survived the consolidation. Unigov is a case study in how much government persists under a word that promises simplicity.

## Why the schools were left out, in the participants' own words

The school exclusion was not an oversight; it was a condition of passage, and the people who made it said so at the time. Mayor Lugar said the bill would die in the General Assembly if schools were included, and acknowledged that many people "really wanted to keep at least their particular school segregated" (Chalkbeat Indiana, 2016). School board president Landrum Shields said that including schools "would have raised the spectre of racial integration ... and would have meant instant death for the plan" (Owen & Willbern, as cited in Wachter, 2014). **The exclusion was the price of getting Unigov passed, stated plainly by the people who paid it.**

## The documented effect, and the honest disagreement about intent

Here is where precision matters most. On the **effect**, the record is clear. By expanding the city's boundaries to take in the largely white townships while leaving the school boundaries where they were, consolidation "immediately decreased the proportion of African Americans in Indianapolis ... from 27 percent of the old city to only 17 percent of the consolidated city," a share that did not recover until the 2010 census (Owen & Willbern, as cited in Wachter, 2014). A federal court later found that Unigov **fostered school segregation** by expanding the city limits into white townships while leaving the school district boundaries unchanged, though the court did not invalidate Unigov (United States v. Board of School Commissioners of Indianapolis, 1974; Wachter, 2014).

**On intent, honest accounts differ, and this course does not pretend to resolve it.** Was Unigov designed to dilute Black and Democratic voting strength, or was it a partisan and efficiency-driven reorganization whose racial effects were a foreseeable consequence rather than the primary aim? Both readings have serious support, and contemporaries and scholars have argued it for decades. **What the method asks of you is to keep the two questions apart.** The effect is documented and you can state it flatly. The intent is contested and you should say so, rather than laundering one into the other. That discipline, separating what the record shows from what people dispute, is the same one course 1 used on the tribal-sovereignty tension and on the apocryphal Jackson quote.

## The through-line

Unigov ties this whole course together. The **state** had the power to reorganize the **city** without the residents' consent (Section 1, and Hunter v. City of Pittsburgh). The word "consolidation" hid how much **local layering survived** (Sections 2 and 3). And the honest account requires teaching a documented **effect** alongside a contested **intent**. This is how to read a piece of local government history. It is not legal advice.

## Sources
- Wachter, J. (2014, May). 40 years after Unigov: Indianapolis and Marion County's experience with consolidated government. The Abell Foundation. https://abell.org/wp-content/uploads/2022/02/ec-unigov514.pdf
- Chalkbeat Indiana. (2016). [Reporting on Unigov and the exclusion of Indianapolis schools]. https://www.chalkbeat.org/indiana/
- United States v. Board of School Commissioners of Indianapolis, 503 F.2d 68 (7th Cir. 1974). https://law.justia.com/cases/federal/appellate-courts/F2/503/68/
- Encyclopedia of Indianapolis. (n.d.). Structure of Unigov. https://indyencyclopedia.org/structure-of-unigov/`,
      recallContent: [
        {
          prompt: "When was Unigov passed and effective, and what is procedurally unusual about it?",
          answer: "The Indiana General Assembly approved it in 1969, and Indianapolis and Marion County were consolidated effective January 1, 1970. It is the only major postwar city-county consolidation accomplished without a voter referendum; Nashville and Jacksonville went to their voters, Indianapolis did not.",
        },
        {
          prompt: "How is Unigov the purest demonstration of 'cities are creatures of the state'?",
          answer: "A state legislature redrew the boundaries and government of its largest city by statute, without the city residents' consent, exactly the power Hunter v. City of Pittsburgh (1907) describes. The city did not do it to itself and could not have stopped it, because the power was never the city's to hold.",
        },
        {
          prompt: "Why was Unigov's authority an act of the Indiana General Assembly rather than a city charter?",
          answer: "Reorganizing local government is a state function; the city sits below the state and holds only delegated power. So the enabling authority was the state exercising its own power over its own creatures, not anything the city granted itself.",
        },
      ],
    },
    {
      slug: "local-quiz-meeting-unigov",
      title: "18 · Quiz: town meeting and Unigov",
      section: "Section 4 · Two answers, and a case study",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "In an OPEN town meeting, the legislative body of the town is:",
            options: [
              "A small elected council",
              "All its registered voters",
              "A hired professional board",
              "The county commission",
            ],
            correctIndex: 1,
            explanation: "The voters themselves gather to adopt the budget, pass bylaws, and set the tax rate. A moderator presides; a select board administers between meetings.",
            sourceLessonSlug: "local-town-meeting",
          },
          {
            prompt: "A REPRESENTATIVE town meeting scales the form for larger towns by having voters:",
            options: [
              "Skip the annual meeting",
              "Hand power to the mayor",
              "Elect town meeting members",
              "Merge with the county",
            ],
            correctIndex: 2,
            explanation: "Instead of every voter legislating in person, voters elect town meeting members (often dozens) who attend and vote on the town's behalf, keeping the form at scale.",
            sourceLessonSlug: "local-town-meeting",
          },
          {
            prompt: "Town meeting belongs in this course because it is the one form where power sits in:",
            options: [
              "An appointed district board",
              "A distant state capital",
              "A hired city manager",
              "The residents themselves",
            ],
            correctIndex: 3,
            explanation: "Every other form puts a body between residents and the law. Town meeting is the counter-example: undelegated power in the people, the far pole from Unigov.",
            sourceLessonSlug: "local-town-meeting",
          },
          {
            prompt: "Town meeting is described as still governing many towns in:",
            options: [
              "New England states",
              "The Deep South",
              "The Pacific coast",
              "The desert Southwest",
            ],
            correctIndex: 0,
            explanation: "It remains the working government of many towns across Massachusetts, Vermont, New Hampshire, Connecticut, Rhode Island, and Maine (Bryan, 2004).",
            sourceLessonSlug: "local-town-meeting",
          },
          {
            prompt: "Unigov consolidated the governments of Indianapolis and:",
            options: [
              "The whole state of Indiana",
              "Marion County around it",
              "The city of Chicago",
              "Its public school system",
            ],
            correctIndex: 1,
            explanation: "The 1969 bill merged the City of Indianapolis and Marion County into the Consolidated City of Indianapolis, effective January 1, 1970 (Wachter, 2014).",
            sourceLessonSlug: "local-unigov-one",
          },
          {
            prompt: "The procedural fact about Unigov that does the most work is that it passed:",
            options: [
              "Only after a court order",
              "By a national referendum",
              "Without a voter referendum",
              "Under a federal statute",
            ],
            correctIndex: 2,
            explanation: "It is the only major postwar city-county consolidation accomplished without a voter referendum; Nashville and Jacksonville went to their voters (Wachter, 2014).",
            sourceLessonSlug: "local-unigov-one",
          },
          {
            prompt: "Unigov is the course's purest demonstration that a city is:",
            options: [
              "A creature of the state",
              "A separate sovereign nation",
              "Equal to the state itself",
              "Beyond the state's reach",
            ],
            correctIndex: 0,
            explanation: "A state legislature redrew a major city's government by statute without residents' consent, exactly the power Hunter v. City of Pittsburgh (1907) describes.",
            sourceLessonSlug: "local-unigov-one",
          },
          {
            prompt: "The enabling authority for Unigov was:",
            options: [
              "The Indianapolis city charter",
              "A vote of the county board",
              "An act of the state assembly",
              "A ruling of the Supreme Court",
            ],
            correctIndex: 2,
            explanation: "Reorganizing local government is a state function. The authority was the Indiana General Assembly exercising its own power over its creatures, not a city charter.",
            sourceLessonSlug: "local-unigov-one",
          },
          {
            prompt: "Which did Unigov NOT consolidate?",
            options: [
              "The city executive departments",
              "The city and county councils",
              "The public school districts",
              "The mayor's own office",
            ],
            correctIndex: 2,
            explanation: "Indianapolis Public Schools and the township school corporations stayed separate. The school exclusion was a condition of the bill's passage.",
            sourceLessonSlug: "local-unigov-two",
          },
          {
            prompt: "Even after 'consolidation,' Marion County still contains, per the source:",
            options: [
              "One single unified body",
              "Only the mayor's office",
              "No taxing districts at all",
              "Dozens of overlapping units",
            ],
            correctIndex: 3,
            explanation: "About fifty separate and overlapping governmental units remain, with more than sixty-one taxing districts (Wachter, 2014). Consolidation did far less than the word suggests.",
            sourceLessonSlug: "local-unigov-two",
          },
          {
            prompt: "Four incorporated places stayed independent inside the consolidated city:",
            options: [
              "Beech Grove, Lawrence, Southport, Speedway",
              "Carmel, Fishers, Noblesville, Greenwood",
              "Gary, Muncie, Kokomo, Anderson",
              "Bloomington, Lafayette, Elkhart, Marion",
            ],
            correctIndex: 0,
            explanation: "Incorporated cities and towns over 5,000 kept their governments, leaving Beech Grove, Lawrence, Southport, and Speedway independent (Wachter, 2014).",
            sourceLessonSlug: "local-unigov-two",
          },
          {
            prompt: "On Unigov's effect on the Black share of the city's population, the record shows it:",
            options: [
              "Rose sharply right away",
              "Fell from 27 to 17 percent",
              "Stayed exactly the same",
              "Was never measured at all",
            ],
            correctIndex: 1,
            explanation: "Consolidation cut the African American share from 27 percent of the old city to 17 percent of the consolidated city, not recovering until the 2010 census (Owen & Willbern, as cited in Wachter, 2014).",
            sourceLessonSlug: "local-unigov-two",
          },
          {
            prompt: "On whether Unigov was INTENDED to dilute Black voting strength, the course says to:",
            options: [
              "Declare the intent proven",
              "Treat effect and intent alike",
              "Ignore the whole question",
              "Keep effect and intent apart",
            ],
            correctIndex: 3,
            explanation: "The effect is documented and can be stated flatly; the intent is genuinely contested, so honest accounts keep the two questions apart rather than laundering one into the other.",
            sourceLessonSlug: "local-unigov-two",
          },
          {
            prompt: "The school exclusion from Unigov is best described, on the record, as:",
            options: [
              "A pure clerical oversight",
              "A federal requirement",
              "The price of its passage",
              "A later court addition",
            ],
            correctIndex: 2,
            explanation: "Participants said so at the time: Lugar said including schools would kill the bill, and the board president said it would have meant 'instant death for the plan' (Chalkbeat Indiana, 2016; Owen & Willbern, as cited in Wachter, 2014).",
            sourceLessonSlug: "local-unigov-two",
          },
          {
            prompt: "A federal court later found that Unigov, by expanding city limits into white townships, had:",
            options: [
              "Ended all segregation fully",
              "Fostered school segregation",
              "Abolished the school boards",
              "No effect on the schools",
            ],
            correctIndex: 1,
            explanation: "The court found Unigov fostered school segregation by leaving school boundaries unchanged while expanding the city into white townships, though it did not invalidate Unigov (United States v. Board of School Commissioners of Indianapolis, 1974).",
            sourceLessonSlug: "local-unigov-two",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 5 · See it, then map your own
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "local-map-home-rule-states",
      title: "19 · Map: the fifty states by home-rule regime",
      section: "Section 5 · See it, then map your own",
      body: `**Read this before the map, because the map's limits are the lesson.** This is a teaching aid, not a legal determination. It colors each state by the regime under which its cities and towns hold power, the home-rule-versus-Dillon's-Rule question from Section 1, drawn as a choropleth so you can see the rough national pattern at a glance. But Section 1 also taught that this question is a **spectrum, not a switch** (Lesson 3), and any three-color map of a spectrum is a simplification. **Do not use this map to decide what your city may lawfully do.** Read the caveats, read the colors as a rough landscape, and settle any real question against your own state's constitution and statutes.

## What the three colors mean

Section 1 taught that a state can hand its localities a broad, standing grant of power (**home rule**) or make them ask permission for anything not clearly granted (**Dillon's Rule**), and that most states do some of each. This map sorts the fifty states into three honest buckets:

| Colour | Category | What it means |
|---|---|---|
| **Blue** | Home rule (broad) | The standard references list the state as a home-rule state that does not apply Dillon's Rule to its municipalities |
| **Amber** | Dillon's Rule (limited) | The references list the state as a Dillon's Rule state, with no broad home-rule grant |
| **Grey** | Mixed / contested | The state applies home rule to some governments or powers and Dillon's Rule to others, or the sources genuinely disagree, or its status could not be placed with confidence |

**The gray bucket is the honest one, and it is deliberately the largest.** It holds the many states that are genuinely a blend, plus every state this map could not confidently sort. That is the point, not a cop-out: Section 1's whole argument is that "your state is a Dillon's Rule state" is a starting hypothesis, not a fact, so a state that cannot be placed cleanly is colored as unsettled rather than forced into a binary. Better honest and vague than confidently wrong.

## Why even the counts disagree

There is no single agreed list, and the disagreement is itself the lesson. The National League of Cities, summarizing the standard fifty-state survey, counts roughly 31 Dillon's Rule states, about 10 home-rule states, 8 states that apply Dillon's Rule only to certain municipalities, and Florida as a special case (home rule for everything except taxation) (National League of Cities, n.d.; Krane, Rigos & Hill, 2001). A widely cited Brookings analysis, reading the same underlying survey, instead counts 39 Dillon's Rule states, 10 that reject it, and Florida as uncertain (Richardson, Gough & Puentes, 2003). **Same country, same era, different totals**, because the authors measure slightly different things. This map follows the more cautious reading and pushes every genuinely-mixed or uncertain state into gray, which is why blue and amber here are small, confident groups and gray is everything else.

## Read Indiana, the course's own case

Notice that **Indiana is gray**, not amber. After Section 4, where the state redrew Indianapolis by statute with no referendum, it is tempting to call Indiana a flat Dillon's Rule state. But Indiana also grants its localities a limited home rule, so the honest color is mixed. And Unigov is the reminder that even a home-rule grant sits under the state's power to reorganise local government at all. The gray states are exactly where you must do the most reading before you claim anything about them.

## What the map cannot show, and what that proves

**It cannot show the spectrum inside a single color.** Two blue states can entrench home rule very differently (constitutional versus legislative, from Lesson 4), and two gray states can be mixed for opposite reasons. Colour carries one rough sort; the real answer for any state needs its constitution and statutes, which is exactly where the capstone sends you. This map is where the course's caution becomes a picture: it points you at the documents, it does not stand in for them. It is not legal advice.

## Sources
- National League of Cities. (n.d.). Cities 101: Delegation of power. https://www.nlc.org/resource/cities-101-delegation-of-power/
- Krane, D., Rigos, P. N., & Hill, M. B. (2001). Home rule in America: A fifty-state handbook. CQ Press.
- Richardson, J. J., Jr., Gough, M. Z., & Puentes, R. (2003). Is home rule the answer? Clarifying the influence of Dillon's Rule on growth management. Brookings Institution Center on Urban and Metropolitan Policy. https://www.brookings.edu/articles/is-home-rule-the-answer-clarifying-the-influence-of-dillons-rule-on-growth-management/`,
      mapContent: {
        // A US-STATE choropleth (plans/49): fill each state by its municipal-authority regime, the
        // home-rule-versus-Dillon's-Rule question from Section 1. `atlas: "us-states"` selects the
        // geoAlbersUsa projection and the us-atlas states topojson, joined by 2-digit state FIPS.
        // The classification is the standard NLC / Krane three-way sort as reproduced in the sources;
        // every genuinely-mixed or unplaceable state is pushed to "mixed / contested" on purpose, so
        // the map stays a teaching aid rather than a fabricated crisp binary (see the lesson body).
        regionLegend: [
          { category: "home rule (broad)", color: "#2563eb", label: "Home rule (broad grant)" },
          { category: "Dillon's Rule (limited)", color: "#b45309", label: "Dillon's Rule (limited grant)" },
          { category: "mixed / contested", color: "#6b7280", label: "Mixed / contested (a blend, or the sources disagree)" },
        ],
        regions: [
          // Home rule (broad): states the references list as home-rule, not Dillon's Rule.
          { featureId: "02", category: "home rule (broad)", atlas: "us-states", label: "Alaska: home rule (broad)" },
          { featureId: "12", category: "home rule (broad)", atlas: "us-states", label: "Florida: home rule (broad), with a taxation carve-out" },
          { featureId: "19", category: "home rule (broad)", atlas: "us-states", label: "Iowa: home rule (broad)" },
          { featureId: "25", category: "home rule (broad)", atlas: "us-states", label: "Massachusetts: home rule (broad)" },
          { featureId: "34", category: "home rule (broad)", atlas: "us-states", label: "New Jersey: home rule (broad)" },
          { featureId: "39", category: "home rule (broad)", atlas: "us-states", label: "Ohio: home rule (broad)" },
          { featureId: "41", category: "home rule (broad)", atlas: "us-states", label: "Oregon: home rule (broad)" },
          { featureId: "54", category: "home rule (broad)", atlas: "us-states", label: "West Virginia: home rule (broad)" },
          // Dillon's Rule (limited): states the references list as Dillon's Rule, with no broad home-rule grant.
          { featureId: "10", category: "Dillon's Rule (limited)", atlas: "us-states", label: "Delaware: Dillon's Rule (limited)" },
          { featureId: "28", category: "Dillon's Rule (limited)", atlas: "us-states", label: "Mississippi: Dillon's Rule (limited)" },
          { featureId: "30", category: "Dillon's Rule (limited)", atlas: "us-states", label: "Montana: Dillon's Rule (limited)" },
          { featureId: "32", category: "Dillon's Rule (limited)", atlas: "us-states", label: "Nevada: Dillon's Rule (limited)" },
          { featureId: "33", category: "Dillon's Rule (limited)", atlas: "us-states", label: "New Hampshire: Dillon's Rule (limited)" },
          { featureId: "40", category: "Dillon's Rule (limited)", atlas: "us-states", label: "Oklahoma: Dillon's Rule (limited)" },
          { featureId: "50", category: "Dillon's Rule (limited)", atlas: "us-states", label: "Vermont: Dillon's Rule (limited)" },
          { featureId: "51", category: "Dillon's Rule (limited)", atlas: "us-states", label: "Virginia: Dillon's Rule (limited); the textbook Dillon's Rule state" },
          { featureId: "56", category: "Dillon's Rule (limited)", atlas: "us-states", label: "Wyoming: Dillon's Rule (limited)" },
          // Mixed / contested: genuinely blended (home rule for some units or powers, Dillon's Rule for
          // others), sources disagree, or could not be placed with confidence. The honest default bucket.
          { featureId: "01", category: "mixed / contested", atlas: "us-states", label: "Alabama: mixed / contested" },
          { featureId: "04", category: "mixed / contested", atlas: "us-states", label: "Arizona: mixed / contested" },
          { featureId: "05", category: "mixed / contested", atlas: "us-states", label: "Arkansas: mixed / contested" },
          { featureId: "06", category: "mixed / contested", atlas: "us-states", label: "California: mixed / contested" },
          { featureId: "08", category: "mixed / contested", atlas: "us-states", label: "Colorado: mixed / contested" },
          { featureId: "09", category: "mixed / contested", atlas: "us-states", label: "Connecticut: mixed / contested" },
          { featureId: "13", category: "mixed / contested", atlas: "us-states", label: "Georgia: mixed / contested" },
          { featureId: "15", category: "mixed / contested", atlas: "us-states", label: "Hawaii: mixed / contested" },
          { featureId: "16", category: "mixed / contested", atlas: "us-states", label: "Idaho: mixed / contested" },
          { featureId: "17", category: "mixed / contested", atlas: "us-states", label: "Illinois: mixed / contested" },
          { featureId: "18", category: "mixed / contested", atlas: "us-states", label: "Indiana: mixed / contested (limited home rule; the course's own Unigov case)" },
          { featureId: "20", category: "mixed / contested", atlas: "us-states", label: "Kansas: mixed / contested" },
          { featureId: "21", category: "mixed / contested", atlas: "us-states", label: "Kentucky: mixed / contested" },
          { featureId: "22", category: "mixed / contested", atlas: "us-states", label: "Louisiana: mixed / contested" },
          { featureId: "23", category: "mixed / contested", atlas: "us-states", label: "Maine: mixed / contested" },
          { featureId: "24", category: "mixed / contested", atlas: "us-states", label: "Maryland: mixed / contested" },
          { featureId: "26", category: "mixed / contested", atlas: "us-states", label: "Michigan: mixed / contested" },
          { featureId: "27", category: "mixed / contested", atlas: "us-states", label: "Minnesota: mixed / contested" },
          { featureId: "29", category: "mixed / contested", atlas: "us-states", label: "Missouri: mixed / contested" },
          { featureId: "31", category: "mixed / contested", atlas: "us-states", label: "Nebraska: mixed / contested" },
          { featureId: "35", category: "mixed / contested", atlas: "us-states", label: "New Mexico: mixed / contested" },
          { featureId: "36", category: "mixed / contested", atlas: "us-states", label: "New York: mixed / contested" },
          { featureId: "37", category: "mixed / contested", atlas: "us-states", label: "North Carolina: mixed / contested" },
          { featureId: "38", category: "mixed / contested", atlas: "us-states", label: "North Dakota: mixed / contested" },
          { featureId: "42", category: "mixed / contested", atlas: "us-states", label: "Pennsylvania: mixed / contested" },
          { featureId: "44", category: "mixed / contested", atlas: "us-states", label: "Rhode Island: mixed / contested" },
          { featureId: "45", category: "mixed / contested", atlas: "us-states", label: "South Carolina: mixed / contested" },
          { featureId: "46", category: "mixed / contested", atlas: "us-states", label: "South Dakota: mixed / contested" },
          { featureId: "47", category: "mixed / contested", atlas: "us-states", label: "Tennessee: mixed / contested" },
          { featureId: "48", category: "mixed / contested", atlas: "us-states", label: "Texas: mixed / contested" },
          { featureId: "49", category: "mixed / contested", atlas: "us-states", label: "Utah: mixed / contested" },
          { featureId: "53", category: "mixed / contested", atlas: "us-states", label: "Washington: mixed / contested" },
          { featureId: "55", category: "mixed / contested", atlas: "us-states", label: "Wisconsin: mixed / contested" },
        ],
      },
    },
    {
      slug: "local-map-marion-county",
      title: "20 · Map: the local layer that survived Unigov",
      section: "Section 5 · See it, then map your own",
      body: `**Read this before the map, because the map's limits are part of the lesson.** This platform draws markers as fixed-size dots on a world projection, so the coordinates below are **approximate points placed to show a pattern, not addresses.** Do not use them to find a building. The point of the map is the relationship between the markers, not their exact positions.

## What the map shows

The map places, over Marion County, Indiana, the governments that still sit on the same ground **after** the 1969 Unigov consolidation. It is Section 4's argument drawn as cartography: the word "consolidation" promised one government, and the reality is a layer that survived largely intact.

**Blue marker: the consolidated government.** The seat of the Consolidated City of Indianapolis and Marion County, the unified mayor and City-County Council created by the state in 1970 (Wachter, 2014).

**Amber markers: the excluded cities and towns.** Beech Grove, Lawrence, Southport, and Speedway kept their own municipal governments, because incorporated places over 5,000 people were left out of the consolidation (Wachter, 2014). Four separate city governments sit inside the "unified" city.

**Green markers: the single-purpose and sub-general governments that persisted.** A separate school corporation (the schools were deliberately excluded), a township (the townships continued), and a separate library district. These are the local layer of Sections 2 and 3, still standing after consolidation.

## What the map cannot show, and what that proves

**It cannot show overlap as area.** The consolidated city, an excluded town, a township, a school corporation, and a library district are shapes that lie on top of one another, and a dot cannot draw a shape. The previous lesson is the polygon layer this path called for, but at the STATE scale, a choropleth of home-rule regimes. The shapes that overlap HERE are sub-county, an excluded town, a township, a school corporation, a library district, and the atlas that fills whole states and counties does not carry those municipal boundaries. So this map stays pins; hold the overlap in your head while you read the dots.

**But the dots already make the core point.** Count the markers. One law called "unified government" left this many separate governments standing on one county's ground, and the fuller tally is about fifty units and more than sixty-one taxing districts (Wachter, 2014). **That is the local layer: not the tidy pyramid people imagine, but a dense overlap that even a famous consolidation barely thinned.** Now go map your own.

## Sources
- Wachter, J. (2014, May). 40 years after Unigov: Indianapolis and Marion County's experience with consolidated government. The Abell Foundation. https://abell.org/wp-content/uploads/2022/02/ec-unigov514.pdf
- U.S. Census Bureau. (2017). 2017 Census of Governments, Organization component. https://www.census.gov/programs-surveys/cog.html`,
      mapContent: {
        markers: [
          {
            id: "local-map-consolidated",
            lat: 39.7684,
            lng: -86.1581,
            title: "The consolidated government (City-County seat, downtown Indianapolis)",
            color: "#1d4ed8",
            description:
              "The seat of the Consolidated City of Indianapolis and Marion County: the single unified mayor and City-County Council the Indiana General Assembly created in 1970, by statute and without a voter referendum. This one marker stands for the government the word 'consolidation' promised. The other markers are what consolidation left standing. Coordinates are approximate points placed to show the pattern, not an address.",
          },
          {
            id: "local-map-speedway",
            lat: 39.7909,
            lng: -86.2517,
            title: "Excluded town: Speedway",
            color: "#b45309",
            description:
              "Speedway kept its own town government through Unigov, because incorporated places over 5,000 people were left out of the consolidation (Wachter, 2014). A separate municipality sitting inside the 'unified' city. Coordinates are approximate.",
          },
          {
            id: "local-map-beech-grove",
            lat: 39.7228,
            lng: -86.0886,
            title: "Excluded city: Beech Grove",
            color: "#b45309",
            description:
              "Beech Grove retained its own city government after 1970, one of the four incorporated places excluded from Unigov. Its presence is why 'consolidated' does far less than the word implies. Coordinates are approximate points placed to show the pattern.",
          },
          {
            id: "local-map-lawrence",
            lat: 39.8387,
            lng: -86.0253,
            title: "Excluded city: Lawrence",
            color: "#b45309",
            description:
              "Lawrence kept its own municipal government through and after the consolidation. Four excluded cities and towns (Beech Grove, Lawrence, Southport, Speedway) survived Unigov intact. Coordinates are approximate.",
          },
          {
            id: "local-map-southport",
            lat: 39.6656,
            lng: -86.1258,
            title: "Excluded city: Southport",
            color: "#b45309",
            description:
              "Southport is the fourth incorporated place left independent by Unigov. Reading these four markers together is reading Section 4: consolidation excluded, rather than absorbed, the incorporated cities and towns over 5,000 people. Coordinates are approximate.",
          },
          {
            id: "local-map-schools",
            lat: 39.7850,
            lng: -86.1580,
            title: "A separate school corporation (schools were excluded)",
            color: "#047857",
            description:
              "The school districts were deliberately NOT consolidated into Unigov: Indianapolis Public Schools and the township school corporations stayed separate, a condition of the bill's passage. A federal court later found that leaving school boundaries unchanged while expanding the city into white townships fostered segregation (United States v. Board of School Commissioners of Indianapolis, 1974). Coordinates are approximate.",
          },
          {
            id: "local-map-township",
            lat: 39.7700,
            lng: -86.2600,
            title: "A township (the townships continued)",
            color: "#047857",
            description:
              "The nine townships of Marion County continued after Unigov, one of the sub-general-purpose governments the consolidation left in place. Townships are part of the local layer taught in Section 2. Coordinates are approximate points placed to show the pattern.",
          },
          {
            id: "local-map-library",
            lat: 39.7856,
            lng: -86.1560,
            title: "A separate library district (a special-purpose government)",
            color: "#047857",
            description:
              "A separate public library district is exactly the kind of single-purpose government from Section 3: its own board, boundary, and taxing power, standing apart from the consolidated city. Among the roughly fifty governmental units and more than sixty-one taxing districts that remain in Marion County (Wachter, 2014). Coordinates are approximate.",
          },
        ],
      },
    },
    {
      slug: "local-capstone",
      title: "21 · Capstone: map the local governments over your address",
      section: "Section 5 · See it, then map your own",
      lessonType: "assignment",
      body: `You have the whole local layer now: Dillon's Rule and home rule, the forms of municipal government, the special districts that outnumber the cities, the town meeting, and Unigov. Use it on the one place you know best, **the address you live at.** Document every local government and special district with authority over it, from the primary record. Most people find several they had no idea existed, and the surprises are almost always special districts.

**One boundary before you start, restated because a capstone is where people forget it: this is a research exercise in reading authority, not legal advice.** You are building an inventory of who has local power over your address and where that power comes from. You are not determining anyone's legal rights, including your own.

## The assignment

Produce a **local-layer map of your own address**: a labeled list (or an actual sketch) of every local government and special district with authority over it, each with its type, its enabling document, how its governing body is chosen, and who can overturn its acts. Aim for **completeness over polish.** The finding is the count and the sources, not the prose.

## Step 1. The general-purpose governments

Name the specific bodies, not "the city":

| Layer | The specific body over YOUR address | How to find it |
|---|---|---|
| **County** | Your county | County assessor or elections site |
| **Municipality or township** | Your city, town, township, or "unincorporated" | City or township site, or the county if unincorporated |

**If your address is unincorporated, that is a real finding**: there is no city layer, and the county or township does more. Write it down. And for your municipality, **name its form of government** (mayor-council, and is the mayor strong or weak; council-manager; commission; or town meeting), because that tells you who actually runs it.

## Step 2. Hunt the special districts (this is where the surprises are)

**Your property-tax bill is the single best primary source**, because every district that taxes you usually appears on it as a line item. Read it line by line. Then check your county's GIS or assessor site, which often lists the districts a parcel falls in. Look for:

- School district (and sometimes a separate community-college district)
- Water, sewer, and drainage or flood-control districts
- Fire protection district
- Library district
- Transit, park, hospital, cemetery, mosquito-abatement, or soil-conservation districts

**For each one, note how its board is chosen** (elected on-cycle, elected off-cycle, or appointed), because that is its accountability answer, and it is the turnout problem from Section 3 made personal.

## Step 3. For each government, fill the columns

For every entry, answer the method from course 1:

| Column | What goes in it |
|---|---|
| **Body** | The named government (Question 1) |
| **Type / form** | County, municipality and its form, township, or special district (its single purpose) |
| **Document** | Charter, enabling statute, or formation act (Question 3) |
| **Board chosen how** | Elected on-cycle, elected off-cycle, or appointed |
| **Who can overturn it** | Court, the state (Dillon's Rule / preemption), the body, or voters (Question 4) |

**Leave a cell blank rather than guess.** A blank you can fill later by reading one more document is honest; a confident wrong answer is not. If you could not find a district's enabling statute, write "not yet found," and say which record would settle it.

## Rules you do not get to break

1. **From the record, not from memory.** Every entry ties to a document you can name: a tax bill, a charter, a state statute, a county GIS layer, a Census table.
2. **No invented body, boundary, or statute.** If you cannot source it, it does not go on the map, or it goes on with a clear "unverified" flag.
3. **Distinguish "did not find" from "does not exist."** They are different findings and you must not blur them.
4. **Note the disagreements you meet.** If a source labels your state a flat "Dillon's Rule state" or "home-rule state," record it as a claim to check, not a settled fact (Section 1).
5. **This is not legal advice**, and your map should say so at the top, because someone else may read it.

## What good looks like

A complete, sourced inventory in which every local government over your address has a name, a type, a document, a way its board is chosen, and an overturn answer, and in which the blanks are labeled rather than filled with guesses. **If you found a special district you had never heard of that taxes you, learned how its board is chosen, and can name the document that created it, you have done exactly what this course set out to teach: you made the invisible layer legible over the one address that is yours.**

## Sources
- U.S. Census Bureau. (2017). 2017 Census of Governments, Organization component. https://www.census.gov/programs-surveys/cog.html
- Hunter v. City of Pittsburgh, 207 U.S. 161 (1907). https://supreme.justia.com/cases/federal/us/207/161/
- National League of Cities. (n.d.). Cities 101: Forms of municipal government. https://www.nlc.org/resource/cities-101-forms-of-municipal-government/`,
    },
  ],
};
