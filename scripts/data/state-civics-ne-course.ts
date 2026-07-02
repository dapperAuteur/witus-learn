// Authored "Nebraska Civics: How Your State Government Works", the Nebraska entry in
// the per-state Civics layer on Learn.WitUS. State-level companion to the general
// Civics courses: those teach the SYSTEM; this teaches Nebraska's version.
//
// Factual and strictly non-partisan. Every content lesson is cited (APA 7 in-line +
// a `## Sources` bibliography) to NEBRASKA'S OWN OFFICIAL SOURCES: the Legislature
// (nebraskalegislature.gov), the Secretary of State / elections (sos.nebraska.gov),
// the Judicial Branch (supremecourt.nebraska.gov), and the Nebraska Constitution.
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. Nebraska's
// signature feature is its unicameral, nonpartisan Legislature. Time-sensitive items
// (voter ID, split electoral votes) are flagged and point learners to sos.nebraska.gov.
//
// Organized into sections (course modules), ending with a fill-in exercise + a final
// quiz whose every question links back to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_NE_COURSE: AuthoredCourse = {
  title: "Nebraska Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the state of Nebraska governs itself, and how you take part where you live. Nebraska is unlike every other state: it is the ONLY state with a UNICAMERAL (single-house) legislature, and the ONLY state whose legislature is officially NONPARTISAN: members run with no party label on the ballot. You'll learn how that one-house 'Unicameral' of 49 senators works, its strong direct democracy (initiative and referendum), how Nebraska selects judges by merit and retention, and two more Nebraska distinctives: it is the only state where ALL electricity is publicly owned, and it splits its presidential electoral votes by congressional district. Time-sensitive facts (voter ID, electoral rules) are flagged, pointing to sos.nebraska.gov. Cited to Nebraska's own official sources (nebraskalegislature.gov, sos.nebraska.gov, supremecourt.nebraska.gov).",
  lessons: [
    // ── Section 1: The Unicameral, Nebraska's defining feature ──────────
    {
      slug: "ne-unicameral",
      title: "1 · The Unicameral: one house, no party labels",
      section: "What Makes Nebraska Unique",
      body: `Start with the fact that defines Nebraska government: it has the **only UNICAMERAL (single-house) legislature in the United States**, and it is also the **only officially NONPARTISAN state legislature.** Nebraskans simply call it **"the Unicameral"** (Nebraska Legislature, n.d.).

**One house.** Every other state (and the U.S. Congress) has **two** legislative chambers: a house and a senate. Nebraska has **just one.** Its members are called **"Senators"** (there are **49 of them**, one per district), serving **4-year terms** with a limit of **two consecutive terms.** The single chamber meets in Lincoln.

**No party labels.** Nebraska's Unicameral is **nonpartisan**: candidates appear on the ballot **without a party label (D or R)**, there are officially **no party caucuses** running the chamber, and leadership and committee chairs are chosen by the members themselves rather than by party. Voters pick individuals, not a party slate.

**Where it came from.** Nebraska adopted the unicameral, nonpartisan Legislature by **ballot initiative in 1934**, championed by U.S. Senator **George W. Norris**, who argued a single, nonpartisan house would be **cheaper, more transparent, and less prone to backroom deals** than a two-house system with conference committees. It took effect in 1937 and has defined Nebraska ever since.

This is the through-line of Nebraska civics: nearly everything about how Nebraska makes law flows from having **one open, nonpartisan house.**

**A note this course keeps returning to:** state facts **vary and change.** Everything here is current as of authoring, but Nebraska's own government (nebraskalegislature.gov, sos.nebraska.gov) is the authoritative source. When something is time-sensitive, we say so.

**Check yourself.** What two things make Nebraska's Legislature unique among the states, and who championed the change in 1934?

## Sources
- Nebraska Legislature. (n.d.). *About the Unicameral: one-house, nonpartisan Legislature*. nebraskalegislature.gov. https://nebraskalegislature.gov/
- Nebraska Secretary of State. (n.d.). *Nebraska government and history*. sos.nebraska.gov. https://sos.nebraska.gov/`,
    },

    // ── Section 2: How the one-house legislature works ───────────────────
    {
      slug: "ne-how-unicameral-works",
      title: "2 · How a bill becomes law in a one-house legislature",
      section: "Making Law",
      recallContent: [
        {
          prompt: "What two features make Nebraska's Legislature unique among all 50 states?",
          answer: "It is the only unicameral (single-house) state legislature, and the only officially nonpartisan one, where candidates run with no party label on the ballot.",
        },
        {
          prompt: "How many members does the Unicameral have, what are they called, and who championed its creation in 1934?",
          answer: "It has 49 members called senators (one per district, serving 4-year terms). U.S. Senator George W. Norris championed the 1934 ballot initiative that created it.",
        },
      ],
      body: `Having a **single chamber** changes how law is made, mostly by making it **simpler and more transparent** (Nebraska Legislature, n.d.):

1. **Introduction.** A senator introduces a bill.
2. **Committee + a guaranteed public hearing.** A distinctive Nebraska rule: **every bill introduced gets a public hearing** before a committee, where any citizen may testify. In two-house states many bills die unheard; Nebraska's rule guarantees each one a public airing.
3. **Three rounds of floor debate.** Because there's no second chamber to act as a check, the Unicameral debates each bill in **three separate stages** ("General File," "Select File," and "Final Reading"), so a bill gets multiple looks before passage. This built-in, single-house deliberation **replaces the role a second chamber would play.**
4. **No conference committee.** With only one house, there's **no need to reconcile two different versions** of a bill, a step that consumes time (and hides deals) in every other state.
5. **Governor.** The Governor may **sign**, **veto**, or **line-item veto** appropriations. The Unicameral overrides a veto with a **three-fifths vote** (30 of 49 senators).

**Direct democracy, too.** Nebraska pairs its Legislature with **strong citizen tools** (added 1912): the **initiative** (put a statute or constitutional amendment on the ballot by petition), the **referendum** (veto a law the Legislature passed), and **recall** for many local offices (Nebraska Secretary of State, n.d.).

The takeaway: Nebraska's one-house design trades the "check" of a second chamber for **more transparency** (a hearing for every bill, three debate stages, no conference committee) plus the **backstop of direct democracy.**

**Check yourself.** Name two features of the Unicameral that provide the deliberation a second chamber would otherwise supply.

## Sources
- Nebraska Legislature. (n.d.). *How a bill becomes law; the public-hearing rule and three-stage debate*. nebraskalegislature.gov. https://nebraskalegislature.gov/
- Nebraska Secretary of State. (n.d.). *Initiative, referendum, and recall*. sos.nebraska.gov. https://sos.nebraska.gov/`,
    },

    // ── Section 3: The executive + how judges are chosen ─────────────────
    {
      slug: "ne-executive-courts",
      title: "3 · The executive and how Nebraska picks its judges",
      section: "The Three Branches",
      recallContent: [
        {
          prompt: "In Nebraska's one-house legislature, what is guaranteed for every bill introduced, and how many stages of floor debate does a bill get?",
          answer: "Every bill is guaranteed a public hearing where any citizen may testify, and each bill is debated in three separate stages (General File, Select File, and Final Reading).",
        },
        {
          prompt: "Because Nebraska has only one chamber, which step used in other states is unnecessary, and what citizen tools back up the Legislature?",
          answer: "No conference committee is needed, because there are not two versions of a bill to reconcile. Direct democracy tools (the initiative, referendum, and recall) back up the Legislature.",
        },
      ],
      body: `**Executive: the Governor and separately elected officers.** Nebraska voters elect several statewide executives (Nebraska Secretary of State, n.d.):
- The **Governor** and **Lieutenant Governor** run together on a **joint ticket.**
- Voters separately elect the **Secretary of State**, **Attorney General**, **State Treasurer**, and **State Auditor.**
- Nebraska also elects some boards directly, such as the **Public Service Commission**, the **State Board of Education**, and the **University Board of Regents.**

**Judicial: merit selection plus retention.** Nebraska chooses judges by the **"Missouri Plan"**, merit selection followed by retention (Nebraska Judicial Branch, n.d.):
1. A **nonpartisan judicial nominating commission** vets applicants and sends the Governor a short list.
2. The **Governor appoints** from that list.
3. The judge later faces voters in a **nonpartisan yes/no retention election.** The **Nebraska Supreme Court** has **7 members** (a Chief Justice plus six justices from districts).

So Nebraska keeps judges out of partisan campaigns (appointing from a vetted list, then letting voters retain or remove them), a contrast with states that elect judges in contested races.

**Check yourself.** How does Nebraska select its judges, and name two statewide executive officers Nebraskans elect besides the Governor?

## Sources
- Nebraska Secretary of State. (n.d.). *Statewide elected officials and boards*. sos.nebraska.gov. https://sos.nebraska.gov/
- Nebraska Judicial Branch. (n.d.). *Judicial selection and retention (merit selection)*. supremecourt.nebraska.gov. https://supremecourt.nebraska.gov/`,
    },

    // ── Section 4: Two more Nebraska distinctives ────────────────────────
    {
      slug: "ne-public-power-electoral",
      title: "4 · Two more Nebraska firsts: public power and split electoral votes",
      section: "What Makes Nebraska Unique",
      recallContent: [
        {
          prompt: "How does Nebraska select its judges under the 'Missouri Plan'?",
          answer: "A nonpartisan nominating commission vets applicants and sends the Governor a short list, the Governor appoints from that list, and the judge later faces voters in a nonpartisan yes/no retention election.",
        },
        {
          prompt: "Besides the Governor, name two statewide executive officers Nebraskans elect separately.",
          answer: "Any two of: Secretary of State, Attorney General, State Treasurer, and State Auditor. (The Governor and Lieutenant Governor run together on a joint ticket.)",
        },
      ],
      body: `Beyond the Unicameral, Nebraska has **two more genuinely distinctive features** worth knowing.

**1. The only all-public-power state.** Nebraska is the **only state in the nation where ALL electricity is publicly owned**: there are **no private, for-profit electric utilities.** Power is delivered by **public power districts, municipal utilities, and cooperatives**, governed by **elected boards** (Nebraska Legislature, n.d.). This grew out of Nebraska's early-20th-century public-power movement (again associated with **George Norris**). It means that in Nebraska, your electricity provider is a **government or cooperative body you can vote for**, a civics fact with real local consequences (rates and policy are set by boards you elect).

**2. Splitting presidential electoral votes.** For President, most states award **all** their Electoral College votes to the statewide winner (winner-take-all). Nebraska is one of only **two states** (with **Maine**) that **splits its electoral votes by congressional district**: two electors go to the statewide winner, and **one elector goes to the winner of each congressional district** (Nebraska Secretary of State, n.d.). That's why Nebraska's Omaha-based district, the **"blue dot"**, can send a single electoral vote to a different candidate than the rest of the state. ⚠️ **Time-sensitive:** proposals to switch Nebraska to winner-take-all surface periodically, so confirm the **current** rule at sos.nebraska.gov.

**Check yourself.** What is unusual about who owns Nebraska's electricity, and how does Nebraska award its presidential electoral votes?

## Sources
- Nebraska Legislature. (n.d.). *Public power in Nebraska*. nebraskalegislature.gov. https://nebraskalegislature.gov/
- Nebraska Secretary of State. (n.d.). *Presidential electors and district allocation*. sos.nebraska.gov. https://sos.nebraska.gov/`,
    },

    // ── Section 5: Local government + getting involved ───────────────────
    {
      slug: "ne-local-involved",
      title: "5 · Local government and how to take part",
      section: "Get Involved",
      recallContent: [
        {
          prompt: "What is unusual about who owns Nebraska's electricity?",
          answer: "Nebraska is the only state where all electricity is publicly owned, with no private for-profit electric utilities. Power comes from public power districts, municipal utilities, and cooperatives run by elected boards.",
        },
        {
          prompt: "How does Nebraska award its presidential electoral votes, and which other state does the same?",
          answer: "Like Maine, Nebraska splits its electoral votes by congressional district: two go to the statewide winner and one to the winner of each congressional district, so the Omaha 'blue dot' district can differ from the rest of the state.",
        },
      ],
      body: `**Local government.** Nebraska's local layers include (Nebraska Legislature, n.d.):
- **93 counties**, most governed by an elected **county board** (of commissioners or supervisors), plus separately elected officials (sheriff, clerk, treasurer, attorney, assessor).
- **Cities and villages**, classified by size, with mayor-council or council-manager forms; larger cities (Omaha, Lincoln) have home-rule charters.
- **Elected public-power district boards**, **natural resources districts (NRDs)**, a Nebraska innovation for managing water and soil by watershed, and **school districts.**

**How to take part:**
- **Vote, including for your utility.** Register and vote at sos.nebraska.gov; remember you also elect **public-power and NRD boards** that set electricity and water policy.
- **Testify at the Unicameral.** Because **every bill gets a public hearing**, any Nebraskan can go to Lincoln (or submit testimony) and be heard on a specific bill, an unusually open door.
- **Use direct democracy.** Sign, circulate, or organize an **initiative or referendum**: Nebraska's citizen tools are strong.
- **Contact your one senator.** In Nebraska you have a **single** state senator (no separate house and senate members), simpler to track and lobby.
- **Run:** school board, city council, county board, NRD, and public-power boards are reachable local starting points.

⚠️ **Time-sensitive:** Nebraska added a **voter photo-ID requirement** by initiative (2022); registration and ID rules are administered by **county election officials** and can change. Confirm current rules at **sos.nebraska.gov** before voting.

**Check yourself.** Name two Nebraska boards you can vote for that other states usually don't elect, and one reason the Unicameral is unusually open to citizens.

## Sources
- Nebraska Legislature. (n.d.). *Local government: counties, cities, natural resources districts, public power*. nebraskalegislature.gov. https://nebraskalegislature.gov/
- Nebraska Secretary of State. (n.d.). *Voting in Nebraska: registration, voter ID, elections*. sos.nebraska.gov. https://sos.nebraska.gov/`,
    },

    // ── Section 6: Practice (fill in the blanks) ─────────────────────────
    {
      slug: "ne-exercise",
      title: "6 · Practice: fill in the blanks",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about Nebraska state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt:
              "Nebraska is the only state with a ___ (single-house) legislature.",
            answer: "unicameral",
            explanation:
              "Nebraska's one-house 'Unicameral' has 49 members called senators, the only single-house state legislature.",
          },
          {
            prompt:
              "Nebraska's Legislature is also the only officially ___ one: members run with no party label.",
            answer: "nonpartisan",
            accept: ["non-partisan"],
            explanation:
              "Adopted by initiative in 1934 (championed by George Norris), the Unicameral is nonpartisan, no D or R on the ballot.",
          },
          {
            prompt:
              "A distinctive Nebraska rule guarantees that every bill introduced gets a public ___.",
            answer: "hearing",
            explanation:
              "Every bill gets a committee public hearing where citizens may testify, an openness feature that replaces some of a second chamber's role.",
          },
          {
            prompt:
              "Nebraska is the only state where all ___ is publicly owned (no private for-profit electric utilities).",
            answer: "electricity",
            accept: ["power", "electric power"],
            explanation:
              "Nebraska's electricity is delivered by public power districts, municipal utilities, and cooperatives governed by elected boards.",
          },
          {
            prompt:
              "Like Maine, Nebraska splits its presidential ___ votes by congressional district.",
            answer: "electoral",
            accept: ["electoral college", "Electoral College"],
            explanation:
              "Two electors go to the statewide winner and one to each congressional district's winner, so a single Nebraska district can differ.",
          },
          {
            prompt:
              "TRUE or FALSE: Nebraska has two legislative chambers, like most states.",
            answer: "false",
            explanation:
              "False. Nebraska has a single chamber (unicameral), the only state without a second legislative house.",
          },
        ],
      },
    },

    // ── Section 7: Final quiz ────────────────────────────────────────────
    {
      slug: "ne-quiz",
      title: "7 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What is unique about Nebraska's Legislature?",
            options: [
              "It has three chambers",
              "It is the only unicameral (single-house) AND officially nonpartisan state legislature",
              "It has no elected members",
              "It meets only once per decade",
            ],
            correctIndex: 1,
            explanation:
              "Nebraska's Unicameral is the nation's only single-house legislature and the only officially nonpartisan one.",
            sourceLessonSlug: "ne-unicameral",
          },
          {
            prompt: "Who championed Nebraska's move to a unicameral, nonpartisan legislature (adopted 1934)?",
            options: ["William Jennings Bryan", "George W. Norris", "Abraham Lincoln", "Warren Buffett"],
            correctIndex: 1,
            explanation:
              "U.S. Senator George W. Norris led the 1934 ballot initiative, arguing a single nonpartisan house would be cheaper and more transparent.",
            sourceLessonSlug: "ne-unicameral",
          },
          {
            prompt: "How many members does the Nebraska Legislature have, and what are they called?",
            options: [
              "49 members called senators",
              "100 members called representatives",
              "435 members called delegates",
              "12 members called commissioners",
            ],
            correctIndex: 0,
            explanation:
              "The Unicameral has 49 members, each called a 'senator,' serving 4-year terms (two-term limit).",
            sourceLessonSlug: "ne-unicameral",
          },
          {
            prompt: "Which feature helps the one-house Unicameral deliberate without a second chamber?",
            options: [
              "Secret votes only",
              "A guaranteed public hearing for every bill and three separate stages of floor debate",
              "Approval by the Governor before debate",
              "A conference committee with Congress",
            ],
            correctIndex: 1,
            explanation:
              "Every bill gets a public hearing, and each is debated in three stages, providing the scrutiny a second chamber would otherwise give.",
            sourceLessonSlug: "ne-how-unicameral-works",
          },
          {
            prompt: "Because Nebraska has only one house, which step is unnecessary?",
            options: [
              "Committee review",
              "A conference committee to reconcile two versions of a bill",
              "The Governor's signature",
              "A public hearing",
            ],
            correctIndex: 1,
            explanation:
              "With a single chamber there are not two versions to reconcile, so no conference committee is needed.",
            sourceLessonSlug: "ne-how-unicameral-works",
          },
          {
            prompt: "How does Nebraska select its judges?",
            options: [
              "Partisan elections",
              "Merit selection (commission → Governor appoints) plus nonpartisan retention elections",
              "The Legislature elects them",
              "The Governor appoints for life with no review",
            ],
            correctIndex: 1,
            explanation:
              "Nebraska uses the Missouri Plan: a commission vets applicants, the Governor appoints, and voters retain or remove judges.",
            sourceLessonSlug: "ne-executive-courts",
          },
          {
            prompt: "What is unusual about who owns Nebraska's electricity?",
            options: [
              "It is owned by one private company",
              "ALL electricity is publicly owned, no private for-profit electric utilities",
              "It is owned by the federal government",
              "Nebraska imports all its power",
            ],
            correctIndex: 1,
            explanation:
              "Nebraska is the only all-public-power state; electricity comes from public power districts, municipal utilities, and co-ops with elected boards.",
            sourceLessonSlug: "ne-public-power-electoral",
          },
          {
            prompt: "How does Nebraska award its presidential electoral votes?",
            options: [
              "Winner-take-all, like most states",
              "By congressional district (with Maine): two statewide, one per district",
              "By the Legislature's choice",
              "It has no electoral votes",
            ],
            correctIndex: 1,
            explanation:
              "Nebraska and Maine split electoral votes by district, so a single Nebraska district (the 'blue dot') can differ from the state.",
            sourceLessonSlug: "ne-public-power-electoral",
          },
          {
            prompt: "What is a Nebraska 'natural resources district' (NRD)?",
            options: [
              "A national park",
              "An elected local body that manages water and soil by watershed, a Nebraska innovation",
              "A private mining company",
              "A federal agency",
            ],
            correctIndex: 1,
            explanation:
              "NRDs are elected local governments managing water and soil conservation by watershed, a distinctive Nebraska layer.",
            sourceLessonSlug: "ne-local-involved",
          },
          {
            prompt: "Why does this course tell you to VERIFY Nebraska's voter-ID and electoral rules?",
            options: [
              "Because Nebraska has no elections office",
              "Because voter ID was recently added (2022) and electoral-vote proposals recur, confirm current rules at sos.nebraska.gov",
              "Because only Congress sets them",
              "Because voting is secret",
            ],
            correctIndex: 1,
            explanation:
              "Nebraska added voter photo ID by initiative and periodically debates its electoral-vote method, so sos.nebraska.gov is the authoritative source.",
            sourceLessonSlug: "ne-local-involved",
          },
        ],
      },
    },
  ],
};
