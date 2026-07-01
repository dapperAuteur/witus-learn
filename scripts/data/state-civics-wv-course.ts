// Authored "West Virginia Civics: How Your State Government Works" — the West Virginia
// entry in the per-state Civics layer on Learn.WitUS. State-level companion to the
// general Civics courses: those teach the SYSTEM; this teaches West Virginia's version.
//
// Factual and strictly non-partisan. Every content lesson is cited (APA 7 in-line +
// a `## Sources` bibliography) to WEST VIRGINIA'S OWN OFFICIAL SOURCES: the Legislature
// (wvlegislature.gov), the Secretary of State / elections (sos.wv.gov), the Judiciary
// (courtswv.gov), and the West Virginia Constitution (1872).
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. West Virginia
// switched to nonpartisan judicial elections (2015) and added an intermediate court
// (2022). Time-sensitive items are flagged and point learners to sos.wv.gov.
//
// Organized into sections (course modules), ending with a fill-in exercise + a final
// quiz whose every question links back to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_WV_COURSE: AuthoredCourse = {
  title: "West Virginia Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the state of West Virginia governs itself — and how you take part where you live. West Virginia has a unique origin story: it is the ONLY state created by breaking away from another state — its western counties split from Virginia during the Civil War and joined the Union in 1863. You'll learn West Virginia's Constitution of 1872, its plural executive (with no lieutenant governor), its Legislature of 34 senators and 100 delegates, its recently nonpartisan judiciary, and its 55 counties. Time-sensitive facts are flagged, pointing to sos.wv.gov. Cited to West Virginia's own official sources (wvlegislature.gov, sos.wv.gov, courtswv.gov).",
  lessons: [
    // ── Section 1: Born from the Civil War ───────────────────────────────
    {
      slug: "wv-civil-war-origin",
      title: "1 · The only state born by breaking away from another",
      section: "What Makes West Virginia Unique",
      body: `West Virginia's most distinctive fact is its **origin**: it is the **only U.S. state created by separating from another state** (West Virginia Legislature, n.d.).

**How it happened.** When Virginia **seceded from the Union in 1861** at the start of the Civil War, the people of Virginia's **western, mountainous counties** — culturally and economically different from the plantation east, and largely **pro-Union** — refused to go along. They organized their own government, and in **1863**, with Congress's approval, the western counties **broke away from Virginia and were admitted to the Union as the new state of West Virginia** (June 20, 1863) (West Virginia Legislature, n.d.).

This makes West Virginia the **only state formed by seceding from an existing state** — a birth **out of the Civil War itself.** (The U.S. Constitution normally forbids carving a new state out of an existing one without that state's consent; the extraordinary wartime circumstances made West Virginia's creation possible.) The split still echoes in West Virginia's identity as a state of **mountains, coal, and independent-minded communities.**

West Virginia governs today under its **Constitution of 1872** (its second, replacing the 1863 founding constitution).

**A note this course keeps returning to:** state facts **vary and change.** Everything here is current as of authoring, but West Virginia's own government (wvlegislature.gov, sos.wv.gov, courtswv.gov) is the authoritative source. When something is time-sensitive — like recent changes to its courts — we say so.

**Check yourself.** How was West Virginia created, and what event made its creation possible?

## Sources
- West Virginia Legislature. (n.d.). *West Virginia statehood (1863) and the Constitution of 1872*. wvlegislature.gov. https://www.wvlegislature.gov/
- West Virginia Secretary of State. (n.d.). *West Virginia history and government*. sos.wv.gov. https://sos.wv.gov/`,
    },

    // ── Section 2: The executive + the Legislature ───────────────────────
    {
      slug: "wv-executive-legislature",
      title: "2 · The executive and the Legislature",
      section: "The Three Branches",
      body: `**Executive — a plural executive with no Lieutenant Governor.** West Virginia voters elect several statewide officials (West Virginia Secretary of State, n.d.):
- The **Governor** — the chief executive,
- the **Secretary of State** (who runs elections),
- the **Attorney General**,
- the **State Auditor**,
- the **State Treasurer**, and
- the **Commissioner of Agriculture.**
⚠️ West Virginia has **no Lieutenant Governor**; by statute, the **President of the Senate** carries the title and is first in line to succeed the Governor (similar to Tennessee). Statewide officers serve **4-year terms.**

**Legislative — the West Virginia Legislature.** A bicameral body meeting in Charleston (West Virginia Legislature, n.d.):
- **House of Delegates — 100 members** (2-year terms), and **Senate — 34 senators** (4-year terms).
- It is a part-time citizen legislature with a fixed annual session (60 days in most years).

**Judicial** (nonpartisan, covered next) and the three branches complete the picture.

**Veto and override.** The Governor may veto bills; ⚠️ note a West Virginia quirk — for **most** bills the Legislature can **override a veto with a simple majority** (a weak veto, like Tennessee and Alabama), though **budget and supplementary appropriations** bills require a **two-thirds** override.

**Check yourself.** Who succeeds the Governor in West Virginia (since there's no Lieutenant Governor), and how strong is the Governor's veto on most bills?

## Sources
- West Virginia Secretary of State. (n.d.). *Statewide elected officials; succession*. sos.wv.gov. https://sos.wv.gov/
- West Virginia Legislature. (n.d.). *The Legislature; veto and override*. wvlegislature.gov. https://www.wvlegislature.gov/`,
    },

    // ── Section 3: The nonpartisan judiciary (a recent change) ───────────
    {
      slug: "wv-courts",
      title: "3 · How West Virginia picks its judges (a recent switch to nonpartisan)",
      section: "The Three Branches",
      body: `West Virginia **elects** its judges — but with a **recent, important change** worth knowing (West Virginia Judiciary, n.d.):

**From partisan to nonpartisan.** ⚠️ Until **2015**, West Virginia elected its judges in **partisan** races (with party labels). In **2015 the state switched to NONPARTISAN judicial elections** — judges now run **without party labels** on the ballot (West Virginia Judiciary, n.d.). So older sources describing "partisan" West Virginia judicial elections are **out of date.**
- The **Supreme Court of Appeals of West Virginia** — the state's **highest court** (note the distinctive name; it's not called a "Supreme Court" plain) — has **5 justices**, elected on a **nonpartisan** ballot to **12-year terms.**
- **Circuit** and other judges are likewise elected on nonpartisan ballots.

**A brand-new intermediate court.** ⚠️ For most of its history, West Virginia was one of the few states with **no intermediate appellate court** — appeals went straight to the Supreme Court of Appeals. In **2022, West Virginia created a new Intermediate Court of Appeals** to hear appeals below the high court — a significant recent change to the court system (West Virginia Judiciary, n.d.).

Why it matters: West Virginia's courts have changed **substantially in the last decade** (nonpartisan elections in 2015, a new intermediate court in 2022) — a reminder to check **current** structure at courtswv.gov rather than older descriptions.

**Check yourself.** What changed about West Virginia's judicial elections in 2015, and what new court did it add in 2022?

## Sources
- West Virginia Judiciary. (n.d.). *Nonpartisan judicial elections (2015); the Intermediate Court of Appeals (2022); the Supreme Court of Appeals*. courtswv.gov. https://www.courtswv.gov/`,
    },

    // ── Section 4: Lawmaking, local government, getting involved ─────────
    {
      slug: "wv-lawmaking-involved",
      title: "4 · How a bill becomes law, local government, and getting involved",
      section: "Get Involved",
      body: `**How a bill becomes law** (West Virginia Legislature, n.d.):
1. **Introduction** in the House of Delegates or Senate during the 60-day session; **committee** review; **floor votes** in both chambers.
2. **Governor** — sign, veto (simple-majority override for most bills; two-thirds for budget bills), or line-item veto appropriations.
West Virginia has **no statewide citizen initiative**; **constitutional amendments** are proposed by the **Legislature** (by a two-thirds vote) and ratified by the **voters.**

**Local government** (West Virginia Legislature, n.d.):
- **55 counties**, governed by elected **county commissions**, plus other elected county officials (sheriff, clerk, assessor, prosecuting attorney).
- **Cities and towns** provide municipal services; some larger cities have home-rule charters (West Virginia has expanded municipal home rule in recent years).
- **County school systems** and **special districts** round out local government.

**Voting.** ⚠️ **Time-sensitive:** West Virginia offers **early in-person voting** and **absentee** voting (with reasons), and requires **ID.** Rules and deadlines are administered by **county clerks** and can change — confirm the **current** details at **sos.wv.gov** before you vote.

**How to take part:**
- **Register and vote** — use early voting; bring ID; check your status at sos.wv.gov.
- **Show up locally.** County commissions, city/town councils, and county boards of education hold public meetings.
- **Contact your legislators** in Charleston — you have one Delegate-district team and one Senator; the session is a short 60 days, so timing matters.
- **Watch judicial elections.** They're now **nonpartisan** — research candidates, since party labels no longer guide you.
- **Run** — county board of education, city council, and county commission are reachable local starting points.

**Check yourself.** Does West Virginia have a citizen initiative, and why should you research judicial candidates carefully now?

## Sources
- West Virginia Legislature. (n.d.). *How a bill becomes law; local government; amending the constitution*. wvlegislature.gov. https://www.wvlegislature.gov/
- West Virginia Secretary of State. (n.d.). *Registering and voting: early voting, absentee, ID*. sos.wv.gov. https://sos.wv.gov/`,
    },

    // ── Section 5: Practice (fill in the blanks) ─────────────────────────
    {
      slug: "wv-exercise",
      title: "5 · Practice: fill in the blanks",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about West Virginia state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt:
              "West Virginia is the only state created by breaking away from another state — it split from ___ in 1863.",
            answer: "Virginia",
            accept: ["virginia"],
            explanation:
              "When Virginia seceded from the Union, its pro-Union western counties broke away and became West Virginia in 1863.",
          },
          {
            prompt:
              "West Virginia's creation was made possible by the ___ War.",
            answer: "Civil",
            accept: ["civil"],
            explanation:
              "The extraordinary circumstances of the Civil War allowed the western counties to form a new Union state.",
          },
          {
            prompt:
              "West Virginia has no Lieutenant Governor; the President of the ___ succeeds the Governor.",
            answer: "Senate",
            accept: ["senate"],
            explanation:
              "By statute, the Senate President carries the Lt. Governor title and is first in succession (like Tennessee).",
          },
          {
            prompt:
              "In 2015 West Virginia switched to ___ judicial elections (no party labels).",
            answer: "nonpartisan",
            accept: ["non-partisan"],
            explanation:
              "West Virginia moved from partisan to nonpartisan judicial elections in 2015; its highest court is the Supreme Court of Appeals.",
          },
          {
            prompt:
              "West Virginia's Legislature has a 34-member Senate and a 100-member House of ___.",
            answer: "Delegates",
            accept: ["delegates"],
            explanation:
              "The House of Delegates has 100 members (2-year terms) and the Senate has 34 (4-year terms).",
          },
          {
            prompt:
              "TRUE or FALSE: West Virginia has a statewide citizen initiative to propose new laws.",
            answer: "false",
            explanation:
              "False. West Virginia has no statewide initiative; the Legislature proposes amendments, which voters ratify.",
          },
        ],
      },
    },

    // ── Section 6: Final quiz ────────────────────────────────────────────
    {
      slug: "wv-quiz",
      title: "6 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What is unique about how West Virginia became a state?",
            options: [
              "It was purchased from France",
              "It is the only state created by breaking away from another state (Virginia), during the Civil War",
              "It was a separate country first",
              "It was admitted by lottery",
            ],
            correctIndex: 1,
            explanation:
              "West Virginia's pro-Union western counties split from Virginia and joined the Union in 1863.",
            sourceLessonSlug: "wv-civil-war-origin",
          },
          {
            prompt: "What event made West Virginia's creation possible?",
            options: [
              "The Louisiana Purchase",
              "The Civil War (Virginia's secession from the Union)",
              "The Revolutionary War",
              "The Gold Rush",
            ],
            correctIndex: 1,
            explanation:
              "When Virginia seceded, the extraordinary wartime circumstances allowed the western counties to form a new state.",
            sourceLessonSlug: "wv-civil-war-origin",
          },
          {
            prompt: "Who succeeds the Governor in West Virginia?",
            options: [
              "The Lieutenant Governor",
              "The President of the Senate (there is no Lieutenant Governor)",
              "The Chief Justice",
              "The Speaker of the House",
            ],
            correctIndex: 1,
            explanation:
              "West Virginia has no lieutenant governor; the Senate President carries the title and succeeds the Governor.",
            sourceLessonSlug: "wv-executive-legislature",
          },
          {
            prompt: "How strong is West Virginia's gubernatorial veto on most bills?",
            options: [
              "Impossible to override",
              "Weak — most vetoes can be overridden by a simple majority (budget bills need two-thirds)",
              "The Governor cannot veto",
              "Only courts can override it",
            ],
            correctIndex: 1,
            explanation:
              "For most bills a simple majority overrides West Virginia's veto; budget bills require two-thirds.",
            sourceLessonSlug: "wv-executive-legislature",
          },
          {
            prompt: "What changed about West Virginia's judicial elections in 2015?",
            options: [
              "Judges became appointed for life",
              "Elections became nonpartisan (no party labels on the ballot)",
              "Judges were abolished",
              "The Legislature began electing them",
            ],
            correctIndex: 1,
            explanation:
              "West Virginia switched from partisan to nonpartisan judicial elections in 2015.",
            sourceLessonSlug: "wv-courts",
          },
          {
            prompt: "What new court did West Virginia add in 2022?",
            options: [
              "A traffic court",
              "An Intermediate Court of Appeals (it previously had none)",
              "A federal court",
              "A tax court",
            ],
            correctIndex: 1,
            explanation:
              "West Virginia created an Intermediate Court of Appeals in 2022, having long had none.",
            sourceLessonSlug: "wv-courts",
          },
          {
            prompt: "What is West Virginia's highest court called?",
            options: [
              "The Supreme Court",
              "The Supreme Court of Appeals of West Virginia",
              "The Court of Chancery",
              "The General Court",
            ],
            correctIndex: 1,
            explanation:
              "West Virginia's highest court is the Supreme Court of Appeals (5 justices, nonpartisan, 12-year terms).",
            sourceLessonSlug: "wv-courts",
          },
          {
            prompt: "How many members are in the West Virginia House of Delegates and Senate?",
            options: [
              "100 Delegates / 34 Senators",
              "150 Delegates / 50 Senators",
              "99 Delegates / 33 Senators",
              "60 Delegates / 30 Senators",
            ],
            correctIndex: 0,
            explanation:
              "The House of Delegates has 100 members and the Senate has 34.",
            sourceLessonSlug: "wv-executive-legislature",
          },
          {
            prompt: "Does West Virginia have a statewide citizen initiative?",
            options: [
              "Yes, a strong one",
              "No — amendments are proposed by the Legislature and ratified by voters",
              "Only for coal policy",
              "Only in even years",
            ],
            correctIndex: 1,
            explanation:
              "West Virginia has no statewide initiative; citizens ratify amendments the Legislature refers.",
            sourceLessonSlug: "wv-lawmaking-involved",
          },
          {
            prompt: "Why does this course tell you to VERIFY West Virginia's court structure and voting rules?",
            options: [
              "Because West Virginia has no government website",
              "Because it switched to nonpartisan judicial elections (2015) and added an intermediate court (2022), and voting is run by county clerks — confirm at courtswv.gov / sos.wv.gov",
              "Because only Congress sets them",
              "Because voting is secret",
            ],
            correctIndex: 1,
            explanation:
              "West Virginia's courts changed substantially in the last decade and voting is administered locally, so the state's own sites are authoritative.",
            sourceLessonSlug: "wv-courts",
          },
        ],
      },
    },
  ],
};
