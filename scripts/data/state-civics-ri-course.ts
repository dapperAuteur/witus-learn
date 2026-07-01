// Authored "Rhode Island Civics: How Your State Government Works" — the Rhode Island
// entry in the per-state Civics layer on Learn.WitUS. State-level companion to the
// general Civics courses: those teach the SYSTEM; this teaches Rhode Island's version.
//
// Factual and strictly non-partisan. Every content lesson is cited (APA 7 in-line +
// a `## Sources` bibliography) to RHODE ISLAND'S OWN OFFICIAL SOURCES: the General
// Assembly (rilegislature.gov), the Secretary of State / elections (elections.ri.gov,
// sos.ri.gov), the Judiciary (courts.ri.gov), and the RI Constitution.
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. Rhode Island
// changed its official name in 2020 and reformed separation of powers in 2004. Time-
// sensitive items are flagged and point learners to the Secretary of State.
//
// Organized into sections (course modules), ending with a fill-in exercise + a final
// quiz whose every question links back to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_RI_COURSE: AuthoredCourse = {
  title: "Rhode Island Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the state of Rhode Island governs itself — and how you take part where you live. Rhode Island, the smallest state, has several distinctive features: in 2020 its voters shortened its official name (dropping 'and Providence Plantations'); it has counties on the map but NO county governments — its 39 cities and towns do everything; its Supreme Court justices serve for LIFE (the only state high court with life tenure); and for centuries its Legislature was so dominant that voters passed a separation-of-powers amendment in 2004 to rein it in. You'll also learn Rhode Island's plural executive, its General Assembly of 38 senators and 75 representatives, and how to take part. Time-sensitive facts are flagged, pointing to the Secretary of State. Cited to Rhode Island's own official sources (rilegislature.gov, sos.ri.gov, courts.ri.gov).",
  lessons: [
    // ── Section 1: The name change + founding ────────────────────────────
    {
      slug: "ri-name-founding",
      title: "1 · The smallest state, its founding, and its 2020 name change",
      section: "What Makes Rhode Island Unique",
      body: `Rhode Island is the **smallest state by area**, and one of the most historically distinctive. Founded by **Roger Williams in 1636** as a haven for **religious freedom and separation of church and state**, it was the **last of the original 13 colonies to ratify the U.S. Constitution** (becoming the **13th state on May 29, 1790**) — holding out until a Bill of Rights was assured (Rhode Island Secretary of State, n.d.).

**A recent, meaningful name change.** For most of its history, Rhode Island's **full official name was "State of Rhode Island and Providence Plantations"** — the **longest official state name** in the country. ⚠️ In **2020, Rhode Island voters approved removing "and Providence Plantations"** from the official name, because of the word "plantations" and its associations; the state is now officially just the **"State of Rhode Island"** (Rhode Island Secretary of State, n.d.). It's a good example of how a state's **constitution and identity can change by a vote of the people** — and a fact older sources will get wrong.

Rhode Island — nicknamed **"The Ocean State"** — governs under a constitution first adopted in **1843** (which ended an earlier property-restricted system after the **Dorr Rebellion** expanded suffrage) and substantially **reorganized in 1986.**

**A note this course keeps returning to:** state facts **vary and change.** Everything here is current as of authoring, but Rhode Island's own government (rilegislature.gov, sos.ri.gov, courts.ri.gov) is the authoritative source.

**Check yourself.** What did Rhode Island change about its official name in 2020, and who founded the colony and why?

## Sources
- Rhode Island Secretary of State. (n.d.). *Rhode Island history; the 2020 official-name change*. sos.ri.gov. https://www.sos.ri.gov/
- Rhode Island General Assembly. (n.d.). *Constitution of the State of Rhode Island*. rilegislature.gov. https://www.rilegislature.gov/`,
    },

    // ── Section 2: No county government + the towns ──────────────────────
    {
      slug: "ri-no-counties",
      title: "2 · Counties on the map, but no county governments",
      section: "What Makes Rhode Island Unique",
      body: `Like Connecticut, Rhode Island is one of the few states with **NO functioning county government** (Rhode Island General Assembly, n.d.).

**How it works.** Rhode Island has **5 counties** (Providence, Kent, Washington, Newport, Bristol), but they exist **only as geographic and judicial reference areas** — there are **no county commissioners, no county councils, no county budgets, and no county services.** Everything a county does elsewhere is handled by the **state** or by the **cities and towns** (Rhode Island General Assembly, n.d.).

**The city/town is everything.** Rhode Island has **39 cities and towns**, and they are the **workhorse of local government** — running schools, police, roads, zoning, and local services. Some smaller towns still use a **town meeting** or a **financial town meeting** to set budgets; larger cities use mayor-council forms. Because the state is small and has **only two tiers — the state and the municipality** — "who do I call?" is simple: your **city or town**, or the **state.**

This two-tier structure (with the **town** unusually important and **no county layer**) is shared only with a handful of states like Connecticut — a distinctive New England pattern.

**Check yourself.** How many cities and towns does Rhode Island have, and what happened to its county governments?

## Sources
- Rhode Island General Assembly. (n.d.). *Local government: cities and towns; the absence of county government*. rilegislature.gov. https://www.rilegislature.gov/
- Rhode Island Secretary of State. (n.d.). *Rhode Island's cities and towns*. sos.ri.gov. https://www.sos.ri.gov/`,
    },

    // ── Section 3: Legislative supremacy + the 2004 reform ───────────────
    {
      slug: "ri-separation-powers",
      title: "3 · From legislative supremacy to the 2004 separation-of-powers reform",
      section: "The Three Branches",
      body: `For most of its history, Rhode Island was an extreme **"legislative supremacy"** state — its **General Assembly** was one of the **most powerful legislatures in the country**, reaching deep into the other branches (Rhode Island General Assembly, n.d.).

**The old system.** Under Rhode Island's tradition, legislators didn't just make laws — they also **sat on and controlled many executive boards and commissions** that ran state agencies, blurring the line between making law and executing it. The Governor, by contrast, was comparatively **weak.** This concentration of power was a defining (and controversial) feature of Rhode Island government.

**The 2004 reform.** ⚠️ In **2004, Rhode Island voters approved a constitutional "separation of powers" amendment** that **removed legislators from executive boards and strengthened the Governor and the executive branch** (Rhode Island General Assembly, n.d.). It was a landmark change that moved Rhode Island toward the more standard three-branch balance seen elsewhere. Because this reform is recent, older descriptions of Rhode Island's "all-powerful legislature" are now **out of date** — so confirm current arrangements at rilegislature.gov.

**Executive today.** Rhode Island voters elect a **plural executive**: the **Governor**, **Lieutenant Governor** (elected **separately**), **Secretary of State**, **Attorney General**, and **General Treasurer** — each on a **4-year term.**

**Check yourself.** What did the 2004 separation-of-powers amendment change about Rhode Island government?

## Sources
- Rhode Island General Assembly. (n.d.). *Legislative history and the 2004 separation-of-powers amendment; statewide elected officials*. rilegislature.gov. https://www.rilegislature.gov/`,
    },

    // ── Section 4: The Legislature, life-tenure Supreme Court, lawmaking ─
    {
      slug: "ri-legislature-courts",
      title: "4 · The General Assembly and a Supreme Court that serves for life",
      section: "Making Law",
      body: `**Legislative — the Rhode Island General Assembly.** A bicameral body meeting in Providence (Rhode Island General Assembly, n.d.):
- **House of Representatives — 75 members**, and **Senate — 38 senators**, all serving **2-year terms.**

**How a bill becomes law:**
1. **Introduction** in the House or Senate; **committee** review; **floor votes** in both chambers.
2. **Governor** — sign, veto, or let it become law. ⚠️ Note a Rhode Island distinctive: the Governor's veto is comparatively **weak** — the General Assembly can **override with just a three-fifths vote** (not two-thirds), a legacy of the legislative-supremacy tradition. (Rhode Island also has **no line-item veto.**)
Rhode Island has **no statewide citizen initiative**; **constitutional amendments** are proposed by the General Assembly and then ratified by the **voters** (as with the 2020 name change and the 2004 reform).

**A Supreme Court that serves for LIFE.** Here's a genuine Rhode Island distinctive: its **Supreme Court justices serve for LIFE** (during good behavior) — Rhode Island is the **only state whose highest-court justices have life tenure**, like federal judges (Rhode Island Judiciary, n.d.). Justices are chosen by **merit selection**: a **Judicial Nominating Commission** sends names to the **Governor**, who appoints with **legislative confirmation.** Lower-court judges also serve to retirement/for life via the same merit process. So Rhode Island keeps judges **entirely out of elections** — and, uniquely, gives its top justices **life tenure.**

**Check yourself.** What is unique about the tenure of Rhode Island's Supreme Court justices, and how strong is the Governor's veto?

## Sources
- Rhode Island General Assembly. (n.d.). *The General Assembly; how a bill becomes law; the three-fifths override*. rilegislature.gov. https://www.rilegislature.gov/
- Rhode Island Judiciary. (n.d.). *Judicial selection and life tenure of Supreme Court justices*. courts.ri.gov. https://www.courts.ri.gov/`,
    },

    // ── Section 5: Getting involved ──────────────────────────────────────
    {
      slug: "ri-get-involved",
      title: "5 · How to take part where you live",
      section: "Get Involved",
      body: `Because Rhode Island is small and has only **two tiers** (state + city/town), taking part is unusually direct (Rhode Island Secretary of State, n.d.).

**Voting.** ⚠️ **Time-sensitive:** Rhode Island offers **early in-person voting**, **mail ballots**, and **online/automatic registration options**, and requires **ID** to vote. Rules and deadlines are administered by the **Secretary of State and local boards of canvassers** and can change — confirm the **current** details at **sos.ri.gov** (or elections.ri.gov) before you vote.

**How to take part:**
- **Register and vote** — use early voting or a mail ballot; check your status at sos.ri.gov.
- **Show up locally.** With no county layer, your **city or town council** (or **town meeting/financial town meeting** in smaller towns) and your **school committee** make most local decisions — and they're very accessible in a small state.
- **Contact your legislators** at the State House in Providence — you have one Representative and one Senator; in a small state, they're easy to reach.
- **Weigh in on amendments.** Rhode Island voters ratify constitutional amendments (like the 2020 name change and the 2004 reform) — read them and vote.
- **Run** — school committee, town/city council, and (in some towns) financial town meeting offices are among the most reachable in the country.

**The habit to build:** in a state this small, **one engaged resident** can genuinely influence a town budget or a State House bill — pick one issue and follow it.

**Check yourself.** With no counties, what local bodies make most decisions in Rhode Island, and what should you verify before voting?

## Sources
- Rhode Island Secretary of State. (n.d.). *Registering and voting: early voting, mail ballots, ID; local boards of canvassers*. sos.ri.gov. https://www.sos.ri.gov/
- Rhode Island General Assembly. (n.d.). *Cities, towns, and getting involved*. rilegislature.gov. https://www.rilegislature.gov/`,
    },

    // ── Section 6: Practice (fill in the blanks) ─────────────────────────
    {
      slug: "ri-exercise",
      title: "6 · Practice: fill in the blanks",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about Rhode Island state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt:
              "In 2020, Rhode Island voters shortened the state's official name by dropping 'and Providence ___.'",
            answer: "Plantations",
            accept: ["plantations"],
            explanation:
              "The official name went from 'State of Rhode Island and Providence Plantations' to simply 'State of Rhode Island.'",
          },
          {
            prompt:
              "Rhode Island has 5 counties on the map but no county ___ — cities and towns do everything.",
            answer: "government",
            accept: ["governments"],
            explanation:
              "Rhode Island's counties are only geographic/judicial areas; its 39 cities and towns provide local services.",
          },
          {
            prompt:
              "Rhode Island is the only state whose highest-court justices serve for ___.",
            answer: "life",
            explanation:
              "Rhode Island Supreme Court justices have life tenure (during good behavior), chosen by merit selection — unique among the states.",
          },
          {
            prompt:
              "In 2004 Rhode Island voters approved a ___ of powers amendment to rein in its dominant Legislature.",
            answer: "separation",
            explanation:
              "The 2004 separation-of-powers amendment removed legislators from executive boards and strengthened the Governor.",
          },
          {
            prompt:
              "Rhode Island's General Assembly has a 38-member Senate and a ___-member House.",
            answer: "75",
            accept: ["seventy-five"],
            explanation:
              "The Rhode Island House has 75 members and the Senate has 38, all on 2-year terms.",
          },
          {
            prompt:
              "TRUE or FALSE: Rhode Island has a statewide citizen initiative to propose new laws.",
            answer: "false",
            explanation:
              "False. Rhode Island has no statewide initiative; the General Assembly proposes amendments, which voters ratify.",
          },
        ],
      },
    },

    // ── Section 7: Final quiz ────────────────────────────────────────────
    {
      slug: "ri-quiz",
      title: "7 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What did Rhode Island change about its official name in 2020?",
            options: [
              "It added 'and Providence Plantations'",
              "It dropped 'and Providence Plantations,' becoming simply 'State of Rhode Island'",
              "It renamed itself 'Ocean State'",
              "It made no change",
            ],
            correctIndex: 1,
            explanation:
              "Voters removed 'and Providence Plantations' in 2020; the official name is now 'State of Rhode Island.'",
            sourceLessonSlug: "ri-name-founding",
          },
          {
            prompt: "Who founded the Rhode Island colony and for what principle?",
            options: [
              "William Penn, for farming",
              "Roger Williams, for religious freedom and separation of church and state",
              "John Smith, for gold",
              "The King, for taxes",
            ],
            correctIndex: 1,
            explanation:
              "Roger Williams founded Rhode Island in 1636 as a haven for religious freedom.",
            sourceLessonSlug: "ri-name-founding",
          },
          {
            prompt: "What is true about Rhode Island's counties?",
            options: [
              "They run schools and police",
              "They exist only as geographic/judicial areas — there are no county governments",
              "There are 39 of them",
              "They elect the Governor",
            ],
            correctIndex: 1,
            explanation:
              "Rhode Island's 5 counties have no government; its 39 cities and towns provide local services.",
            sourceLessonSlug: "ri-no-counties",
          },
          {
            prompt: "What did Rhode Island's 2004 amendment do?",
            options: [
              "Abolished the Legislature",
              "Established separation of powers — removing legislators from executive boards and strengthening the Governor",
              "Created counties",
              "Ended elections",
            ],
            correctIndex: 1,
            explanation:
              "The 2004 separation-of-powers amendment reined in Rhode Island's historically dominant Legislature.",
            sourceLessonSlug: "ri-separation-powers",
          },
          {
            prompt: "What is unique about Rhode Island's Supreme Court justices?",
            options: [
              "They are elected annually",
              "They serve for life — the only state high court with life tenure",
              "They are chosen by lottery",
              "They must be under 40",
            ],
            correctIndex: 1,
            explanation:
              "Rhode Island is the only state whose highest-court justices have life tenure, via merit selection.",
            sourceLessonSlug: "ri-legislature-courts",
          },
          {
            prompt: "How strong is the Rhode Island Governor's veto?",
            options: [
              "Very strong — impossible to override",
              "Comparatively weak — the Legislature overrides with only a three-fifths vote, and there's no line-item veto",
              "The Governor cannot veto at all",
              "Only courts can override it",
            ],
            correctIndex: 1,
            explanation:
              "A legacy of legislative supremacy, Rhode Island's veto is overridden by three-fifths, with no line-item veto.",
            sourceLessonSlug: "ri-legislature-courts",
          },
          {
            prompt: "How many members are in the Rhode Island House and Senate?",
            options: [
              "75 House / 38 Senate",
              "100 House / 40 Senate",
              "151 House / 36 Senate",
              "400 House / 24 Senate",
            ],
            correctIndex: 0,
            explanation:
              "The Rhode Island House has 75 members and the Senate has 38, on 2-year terms.",
            sourceLessonSlug: "ri-legislature-courts",
          },
          {
            prompt: "Since Rhode Island has no counties, what makes most local decisions?",
            options: [
              "County commissioners",
              "Cities and towns (and, in smaller towns, town meetings)",
              "The federal government",
              "Private companies",
            ],
            correctIndex: 1,
            explanation:
              "Rhode Island's 39 cities and towns handle local services; the state and municipality are the two tiers.",
            sourceLessonSlug: "ri-get-involved",
          },
          {
            prompt: "Can Rhode Island citizens put a law on the ballot by initiative?",
            options: [
              "Yes, a strong initiative",
              "No — there is no statewide initiative; the General Assembly proposes amendments for voters",
              "Only in even years",
              "Only for schools",
            ],
            correctIndex: 1,
            explanation:
              "Rhode Island has no statewide initiative; citizens ratify amendments the Legislature refers.",
            sourceLessonSlug: "ri-legislature-courts",
          },
          {
            prompt: "Why does this course tell you to VERIFY Rhode Island's name, structure, and voting rules?",
            options: [
              "Because Rhode Island has no government website",
              "Because the name changed in 2020, powers were reformed in 2004, and voting rules are run locally and change — confirm at sos.ri.gov",
              "Because only Congress sets them",
              "Because voting is secret",
            ],
            correctIndex: 1,
            explanation:
              "Rhode Island's recent name and structural changes plus locally administered voting make the state's own sites authoritative.",
            sourceLessonSlug: "ri-get-involved",
          },
        ],
      },
    },
  ],
};
