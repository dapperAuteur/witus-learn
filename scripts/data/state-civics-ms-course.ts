// Authored "Mississippi Civics: How Your State Government Works" — the Mississippi entry
// in the per-state Civics layer on Learn.WitUS. State-level companion to the general
// Civics courses: those teach the SYSTEM; this teaches Mississippi's version.
//
// Factual and strictly non-partisan. Every content lesson is cited (APA 7 in-line +
// a `## Sources` bibliography) to MISSISSIPPI'S OWN OFFICIAL SOURCES: the Legislature
// (legislature.ms.gov), the Secretary of State / elections (sos.ms.gov), the Judiciary
// (courts.ms.gov), and the Mississippi Constitution (1890).
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. Mississippi
// changed its statewide-election rule (2020), adopted a new state flag (2020), and its
// initiative process was struck down (2021). Time-sensitive items are flagged and point
// learners to sos.ms.gov.
//
// Organized into sections (course modules), ending with a fill-in exercise + a final
// quiz whose every question links back to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_MS_COURSE: AuthoredCourse = {
  title: "Mississippi Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the state of Mississippi governs itself — and how you take part where you live. Mississippi has changed in real, recent ways: in 2020 voters replaced an unusual Jim Crow-era rule that could send statewide elections to the state House, and Mississippi adopted a new state flag; and in 2021 the state's ballot-initiative process was struck down by its Supreme Court. You'll learn Mississippi's Constitution of 1890, its large plural executive (with an unusually powerful Lieutenant Governor), its Legislature of 52 senators and 122 representatives, its nonpartisan elected judiciary, its odd-year elections, and its 82 counties. Time-sensitive facts are flagged, pointing to sos.ms.gov. Cited to Mississippi's own official sources (legislature.ms.gov, sos.ms.gov, courts.ms.gov).",
  lessons: [
    // ── Section 1: Recent changes ────────────────────────────────────────
    {
      slug: "ms-recent-changes",
      title: "1 · A state that changed: the 2020 election rule and the new flag",
      section: "What Makes Mississippi Unique",
      body: `Mississippi is a good place to see that **a state's rules and symbols can change** — and change recently. Two 2020 changes stand out (Mississippi Secretary of State, n.d.).

**1. A Jim Crow-era election rule, replaced.** ⚠️ For 130 years, Mississippi's **1890 constitution** used an unusual rule to elect the **Governor and statewide officers**: a candidate had to win **BOTH a majority of the popular vote AND a majority of the state's 122 House districts.** If **no candidate won both**, the **state House of Representatives chose the winner** from the top two. This provision — adopted in the **1890 constitution**, part of a document written to entrench white political power and disenfranchise Black Mississippians — could **override the popular vote.** In **2020, Mississippi voters approved a constitutional amendment removing it**, replacing it with a straightforward system: **win a majority of the popular vote, or go to a runoff** (Mississippi Secretary of State, n.d.).

**2. A new state flag.** Also in **2020**, Mississippi **retired its old state flag** — the last U.S. state flag to include the **Confederate battle emblem** — and voters approved a **new flag** (the "In God We Trust"/Magnolia flag) in a referendum (Mississippi Secretary of State, n.d.).

Mississippi became the **20th state on December 10, 1817**, and still governs under the (much-amended) **Constitution of 1890.**

This is the through-line: Mississippi's civics can only be understood with attention to **what has recently changed** — which is exactly why this course keeps saying to **verify current rules.**

**A note this course keeps returning to:** state facts **vary and change.** Everything here is current as of authoring, but Mississippi's own government (legislature.ms.gov, sos.ms.gov, courts.ms.gov) is the authoritative source.

**Check yourself.** What Jim Crow-era election rule did Mississippi remove in 2020, and what else did the state change that year?

## Sources
- Mississippi Secretary of State. (n.d.). *2020 constitutional amendment on electing statewide officials; the new state flag*. sos.ms.gov. https://www.sos.ms.gov/
- Mississippi Legislature. (n.d.). *Mississippi Constitution (1890)*. legislature.ms.gov. https://www.legislature.ms.gov/`,
    },

    // ── Section 2: The executive (a powerful Lt. Governor) ───────────────
    {
      slug: "ms-executive",
      title: "2 · A large plural executive and an unusually powerful Lieutenant Governor",
      section: "The Three Branches",
      body: `**Executive — a large plural executive.** Mississippi voters elect **many** statewide officials (Mississippi Secretary of State, n.d.): the **Governor**, **Lieutenant Governor** (elected **separately** — can be a different party), **Secretary of State**, **Attorney General**, **State Treasurer**, **State Auditor**, **Insurance Commissioner**, and **Commissioner of Agriculture and Commerce**, plus the elected **Public Service Commission** and **Transportation Commission.** Executive power is spread widely across independently elected officers.

**An unusually powerful Lieutenant Governor.** ⚠️ Mississippi's **Lieutenant Governor** is often described as **one of the most powerful in the nation.** Beyond succeeding the Governor, the Lieutenant Governor **presides over the state Senate** and, by tradition and rule, exercises **strong control over the Senate's committees, calendar, and which bills advance** (Mississippi Legislature, n.d.). In Mississippi, that makes the Lieutenant Governor a **central figure in lawmaking** — sometimes rivaling the Governor's influence — a distinctive feature to keep in mind.

Statewide officers serve **4-year terms**, elected in **odd-numbered years** (like Virginia, New Jersey, Kentucky, and Louisiana) — for example **2023 and 2027.**

The **Legislative** and **Judicial** branches complete the three (next lessons).

**Veto and override.** The Governor may veto bills (and line-item veto appropriations); the Legislature overrides with a **two-thirds vote of each chamber.**

**Check yourself.** Why is Mississippi's Lieutenant Governor considered so powerful, and in which years does Mississippi elect its Governor?

## Sources
- Mississippi Secretary of State. (n.d.). *Statewide elected officials; odd-year elections*. sos.ms.gov. https://www.sos.ms.gov/
- Mississippi Legislature. (n.d.). *The Lieutenant Governor and the Senate*. legislature.ms.gov. https://www.legislature.ms.gov/`,
    },

    // ── Section 3: The Legislature + the struck-down initiative ──────────
    {
      slug: "ms-legislature-initiative",
      title: "3 · The Legislature — and why Mississippi's initiative doesn't work right now",
      section: "Making Law",
      body: `**Legislative — the Mississippi Legislature.** A bicameral body meeting in Jackson (Mississippi Legislature, n.d.):
- **House of Representatives — 122 members**, and **Senate — 52 senators**, all serving **4-year terms.**
- Recall from Lesson 2 that the **Lieutenant Governor** wields strong influence over the Senate.

**How a bill becomes law:** introduction → committee → floor votes in both chambers → the Governor (sign, veto with a two-thirds override, or line-item veto).

**A citizen initiative that was struck down.** ⚠️ Here's an unusual, important, time-sensitive fact: **Mississippi's ballot-initiative process is currently NOT in effect.** Mississippi's constitution allowed citizen initiatives, but it required signatures to be gathered **equally from the state's FIVE congressional districts.** After the **2000 census, Mississippi dropped from five U.S. House seats to four** — making the "five districts" formula **mathematically impossible to satisfy.** In **May 2021, the Mississippi Supreme Court ruled the entire initiative process invalid** because of this defect (in the case over a voter-passed medical-marijuana measure) (Mississippi Secretary of State, n.d.). So **as of authoring, Mississippi citizens cannot use a statewide initiative** unless and until the **Legislature and voters adopt a fix.** ⚠️ Confirm the **current** status at sos.ms.gov, since this may change.

**Constitutional amendments** are otherwise proposed by the **Legislature** and ratified by the **voters.** The takeaway: in Mississippi today, lawmaking runs **through the Legislature** — the citizen initiative is, for now, **on hold.**

**Check yourself.** Why was Mississippi's initiative process struck down, and what does that mean for citizen lawmaking there now?

## Sources
- Mississippi Secretary of State. (n.d.). *The initiative process and the 2021 Supreme Court ruling*. sos.ms.gov. https://www.sos.ms.gov/
- Mississippi Legislature. (n.d.). *The Legislature; how a bill becomes law*. legislature.ms.gov. https://www.legislature.ms.gov/`,
    },

    // ── Section 4: Courts, local government, getting involved ────────────
    {
      slug: "ms-courts-involved",
      title: "4 · Judges, local government, and how to take part",
      section: "Get Involved",
      body: `**How Mississippi picks its judges.** Mississippi **elects** its judges on a **NONPARTISAN** ballot — no party label appears next to their names (Mississippi Judiciary, n.d.). The **Mississippi Supreme Court** has **9 justices**, elected from districts to **8-year terms**; Court of Appeals, Circuit, and Chancery judges are likewise elected nonpartisan. When a seat opens mid-term, the **Governor appoints** a replacement who then stands for election.

**Local government** (Mississippi Legislature, n.d.):
- **82 counties**, governed by elected **boards of supervisors** (each county is divided into five supervisor districts, or "beats"), plus other elected county officials (sheriff, chancery/circuit clerks, tax officials).
- **Cities and towns** provide municipal services; **school districts** and **special districts** round out local government.

**Voting.** ⚠️ **Time-sensitive:** Mississippi requires a **photo ID** to vote and has comparatively **limited early/absentee** options (an excuse is generally required for absentee, and Mississippi has been slower than many states to adopt no-excuse early voting). Rules are administered by **county election officials** and can change — confirm the **current** details at **sos.ms.gov** before you vote.

**How to take part:**
- **Register and vote** — bring photo ID; check absentee eligibility and deadlines at sos.ms.gov. Remember Mississippi's big elections fall in **odd years.**
- **Show up locally.** Your county **board of supervisors**, city council, and school board hold public meetings.
- **Contact your legislators** in Jackson — you have one Representative and one Senator.
- **Watch for an initiative fix.** If the Legislature restores a citizen-initiative process, that would return a direct lever to voters — follow it.
- **Run** — school board, city council, and county board of supervisors are reachable local starting points.

**Check yourself.** How are Mississippi's judges chosen, and what elected board governs a Mississippi county?

## Sources
- Mississippi Judiciary. (n.d.). *Nonpartisan judicial elections; the Supreme Court*. courts.ms.gov. https://courts.ms.gov/
- Mississippi Legislature. (n.d.). *Local government: counties (boards of supervisors) and municipalities*. legislature.ms.gov. https://www.legislature.ms.gov/`,
    },

    // ── Section 5: Practice (fill in the blanks) ─────────────────────────
    {
      slug: "ms-exercise",
      title: "5 · Practice: fill in the blanks",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about Mississippi state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt:
              "In 2020, Mississippi voters removed a Jim Crow-era rule that could send statewide elections to the state ___.",
            answer: "House",
            accept: ["house", "House of Representatives", "legislature"],
            explanation:
              "The 1890 rule required winning both the popular vote and a majority of House districts, or the House would choose — removed in 2020.",
          },
          {
            prompt:
              "Also in 2020, Mississippi adopted a new state ___, retiring the last one with a Confederate emblem.",
            answer: "flag",
            explanation:
              "Voters approved the new 'In God We Trust'/Magnolia flag in a 2020 referendum.",
          },
          {
            prompt:
              "Mississippi's Lieutenant Governor is unusually powerful because they control much of the state ___.",
            answer: "Senate",
            accept: ["senate"],
            explanation:
              "The Lieutenant Governor presides over the Senate and strongly influences its committees, calendar, and bills.",
          },
          {
            prompt:
              "Mississippi's citizen initiative process was struck down in 2021 because its formula required five congressional ___ that no longer exist.",
            answer: "districts",
            accept: ["district"],
            explanation:
              "Mississippi dropped to four U.S. House seats after 2000, making the five-district signature formula impossible; the court invalidated the process.",
          },
          {
            prompt:
              "Mississippi's current constitution is the Constitution of ___.",
            answer: "1890",
            explanation:
              "Mississippi still governs under its much-amended 1890 constitution.",
          },
          {
            prompt:
              "TRUE or FALSE: Mississippi citizens can currently use a statewide ballot initiative.",
            answer: "false",
            explanation:
              "False. The initiative process was struck down in 2021 and is not in effect unless the Legislature and voters adopt a fix.",
          },
        ],
      },
    },

    // ── Section 6: Final quiz ────────────────────────────────────────────
    {
      slug: "ms-quiz",
      title: "6 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What did Mississippi voters remove from the constitution in 2020?",
            options: [
              "The Governor's office",
              "A Jim Crow-era rule that could send statewide elections to the state House if no candidate won both the popular vote and a majority of House districts",
              "All elections",
              "The Supreme Court",
            ],
            correctIndex: 1,
            explanation:
              "The 1890 electoral rule could override the popular vote; voters replaced it in 2020 with a popular-majority-or-runoff system.",
            sourceLessonSlug: "ms-recent-changes",
          },
          {
            prompt: "What else did Mississippi change in 2020?",
            options: [
              "It adopted a new state flag, retiring the last one with a Confederate emblem",
              "It abolished counties",
              "It banned voting",
              "It moved its capital",
            ],
            correctIndex: 0,
            explanation:
              "Mississippi adopted a new state flag by referendum in 2020.",
            sourceLessonSlug: "ms-recent-changes",
          },
          {
            prompt: "Why is Mississippi's Lieutenant Governor considered so powerful?",
            options: [
              "They command the National Guard",
              "They preside over the Senate and strongly control its committees, calendar, and which bills advance",
              "They appoint all judges",
              "They write the budget alone",
            ],
            correctIndex: 1,
            explanation:
              "Mississippi's Lieutenant Governor is a central figure in lawmaking through control of the Senate.",
            sourceLessonSlug: "ms-executive",
          },
          {
            prompt: "In which years does Mississippi elect its Governor?",
            options: [
              "The same year as the President",
              "Odd-numbered years (e.g., 2023, 2027)",
              "Every two years",
              "Only in leap years",
            ],
            correctIndex: 1,
            explanation:
              "Mississippi, like Virginia and Kentucky, holds statewide elections in odd years.",
            sourceLessonSlug: "ms-executive",
          },
          {
            prompt: "Why is Mississippi's citizen initiative process currently not in effect?",
            options: [
              "Voters abolished it",
              "The state Supreme Court struck it down (2021) because its five-congressional-district signature formula became impossible after Mississippi dropped to four districts",
              "The Governor vetoed it",
              "It was never created",
            ],
            correctIndex: 1,
            explanation:
              "The 2021 ruling invalidated the initiative process due to the outdated five-district formula; a legislative fix would be needed to restore it.",
            sourceLessonSlug: "ms-legislature-initiative",
          },
          {
            prompt: "How many members are in the Mississippi House and Senate?",
            options: [
              "122 House / 52 Senate",
              "100 House / 40 Senate",
              "150 House / 50 Senate",
              "99 House / 33 Senate",
            ],
            correctIndex: 0,
            explanation:
              "The Mississippi House has 122 members and the Senate has 52, all on 4-year terms.",
            sourceLessonSlug: "ms-legislature-initiative",
          },
          {
            prompt: "How does Mississippi choose its Supreme Court justices?",
            options: [
              "Appointed for life by the Governor",
              "Elected on a nonpartisan ballot from districts to 8-year terms",
              "Elected by the Legislature",
              "In partisan races",
            ],
            correctIndex: 1,
            explanation:
              "Mississippi elects its 9 justices nonpartisan to 8-year terms (appointment fills mid-term vacancies).",
            sourceLessonSlug: "ms-courts-involved",
          },
          {
            prompt: "What elected board governs a Mississippi county?",
            options: [
              "A city council",
              "A board of supervisors (from five supervisor districts, or 'beats')",
              "A fiscal court",
              "A police jury",
            ],
            correctIndex: 1,
            explanation:
              "Each Mississippi county is run by an elected board of supervisors, divided into five districts.",
            sourceLessonSlug: "ms-courts-involved",
          },
          {
            prompt: "How many counties does Mississippi have?",
            options: ["10", "82", "159", "254"],
            correctIndex: 1,
            explanation:
              "Mississippi has 82 counties, governed by elected boards of supervisors.",
            sourceLessonSlug: "ms-courts-involved",
          },
          {
            prompt: "Why does this course especially tell you to VERIFY Mississippi's rules?",
            options: [
              "Because Mississippi has no government website",
              "Because so much changed recently — the election rule (2020), the flag (2020), and the initiative process (struck down 2021) — confirm current status at sos.ms.gov",
              "Because only Congress sets them",
              "Because voting is secret",
            ],
            correctIndex: 1,
            explanation:
              "Mississippi's electoral rule, flag, and initiative process all changed in 2020–2021, so the state's own sites are essential for current status.",
            sourceLessonSlug: "ms-legislature-initiative",
          },
        ],
      },
    },
  ],
};
