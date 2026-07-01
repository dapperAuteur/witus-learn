// Authored "Hawaii Civics: How Your State Government Works" — the Hawaii entry in the
// per-state Civics layer on Learn.WitUS. State-level companion to the general Civics
// courses: those teach the SYSTEM; this teaches Hawaii's version.
//
// Factual and strictly non-partisan. Every content lesson is cited (APA 7 in-line +
// a `## Sources` bibliography) to HAWAII'S OWN OFFICIAL SOURCES: the Legislature
// (capitol.hawaii.gov), the Office of Elections (elections.hawaii.gov), the Judiciary
// (courts.state.hi.us), and the Hawaii Constitution (1959).
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. Hawaii runs
// the most centralized state government in the US (one statewide school system, only
// county governments). Time-sensitive items (voting rules) are flagged and point to
// elections.hawaii.gov.
//
// Organized into sections (course modules), ending with a fill-in exercise + a final
// quiz whose every question links back to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_HI_COURSE: AuthoredCourse = {
  title: "Hawaii Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the state of Hawaii governs itself — and how you take part where you live. Hawaii runs the most CENTRALIZED government of any state: it has just FOUR counties and essentially NO city or town governments below them, and it is the ONLY state with a single, statewide school system (no local school districts). You'll learn Hawaii's Constitution of 1959, its executive, its Legislature of 25 senators and 51 representatives, its merit-selected judiciary (where a commission — not voters — decides retention), the Office of Hawaiian Affairs, and Hawaii's status as the only state with an official second language (Hawaiian). It also runs elections entirely by mail. Time-sensitive facts are flagged, pointing to elections.hawaii.gov. Cited to Hawaii's own official sources (capitol.hawaii.gov, elections.hawaii.gov, courts.state.hi.us).",
  lessons: [
    // ── Section 1: The most centralized state ────────────────────────────
    {
      slug: "hi-centralized",
      title: "1 · The most centralized state: four counties, no cities, one school system",
      section: "What Makes Hawaii Unique",
      body: `Start with what makes Hawaii government unique: it is the **most centralized state government in the United States** (Hawaii State Legislature, n.d.).

**Only counties — no city or town governments.** Most states stack **counties, cities, towns, and villages.** Hawaii has essentially **only ONE layer of local government: the county.** There are just **four (functioning) counties** (Hawaii Office of Elections, n.d.):
- **City and County of Honolulu** (the island of Oʻahu — a consolidated city-county),
- **Hawaiʻi County** (the Big Island),
- **Maui County** (Maui, Molokaʻi, Lānaʻi), and
- **Kauaʻi County** (Kauaʻi and Niʻihau).
(There's also tiny **Kalawao**, administered by the state health department.) Crucially, there are **no separate incorporated cities, towns, or villages** — so when you hear "Hilo" or "Kailua," those are **places**, not **governments.** Your local government is your **county.**

**One statewide school system.** Even more striking: Hawaii is the **ONLY state with a single, unified, statewide public-school system.** There are **no local school districts and no local school boards** — the **Hawaii State Department of Education** runs **every public school in the state** as one system (Hawaii State Legislature, n.d.). In every other state, schools are run by hundreds or thousands of local districts; in Hawaii, it's **one.**

Why this leads the course: Hawaii concentrates power at the **state** level to a degree no other state does — a legacy of its history as a **unified kingdom** before annexation and statehood.

**A note this course keeps returning to:** state facts **vary and change.** Everything here is current as of authoring, but Hawaii's own government (capitol.hawaii.gov, elections.hawaii.gov, courts.state.hi.us) is the authoritative source.

**Check yourself.** How many counties does Hawaii have, and what is unique about how Hawaii runs its public schools?

## Sources
- Hawaii State Legislature. (n.d.). *Hawaii's centralized government; the statewide school system*. capitol.hawaii.gov. https://www.capitol.hawaii.gov/
- Hawaii Office of Elections. (n.d.). *Hawaii's counties*. elections.hawaii.gov. https://elections.hawaii.gov/`,
    },

    // ── Section 2: Constitution + the three branches ─────────────────────
    {
      slug: "hi-constitution-branches",
      title: "2 · The Constitution of 1959 and the three branches",
      section: "The Three Branches",
      body: `Hawaii governs under its **Constitution of 1959**, adopted as Hawaii became the **50th (and newest) state on August 21, 1959.** It carries the marks of Hawaii's distinctive history — including recognition of **Native Hawaiian** rights and the **Hawaiian language** (Hawaii State Legislature, n.d.).

**Executive — a compact, elected top.** Hawaii voters elect just **two** statewide officials (Hawaii Office of Elections, n.d.):
- The **Governor**, and
- The **Lieutenant Governor** (who also serves as Hawaii's chief elections officer / "secretary of state"-type role).
The **Attorney General** and department heads are **appointed by the Governor** (with Senate confirmation), so — like Alaska — Hawaii has a comparatively **strong Governor** over a small elected executive.

**Legislative — the Hawaii State Legislature.** A bicameral body meeting in Honolulu (Hawaii State Legislature, n.d.):
- **House of Representatives — 51 members**, elected to **2-year terms.**
- **Senate — 25 senators**, elected to **4-year terms.**

**Judicial — the Hawaii courts.** District and Circuit courts up through the Intermediate Court of Appeals and the **Hawaii Supreme Court** (5 justices). How Hawaii selects — and *retains* — judges is distinctive, covered next.

**Veto and override.** The Governor may veto bills; the Legislature overrides with a **two-thirds vote of each chamber.**

**Check yourself.** How many statewide executives do Hawaiians elect, and how many members sit in each chamber of the Legislature?

## Sources
- Hawaii State Legislature. (n.d.). *Constitution of the State of Hawaii (1959); the three branches*. capitol.hawaii.gov. https://www.capitol.hawaii.gov/
- Hawaii Office of Elections. (n.d.). *Statewide elected officials*. elections.hawaii.gov. https://elections.hawaii.gov/`,
    },

    // ── Section 3: How Hawaii picks (and keeps) judges ───────────────────
    {
      slug: "hi-courts",
      title: "3 · How Hawaii chooses its judges (a commission, not voters, decides retention)",
      section: "The Three Branches",
      body: `Hawaii uses **merit selection**, but with a distinctive twist on how judges keep their seats (Hawaii State Judiciary, n.d.):

1. **Judicial Selection Commission.** A nonpartisan **Judicial Selection Commission** reviews applicants and sends a list of nominees to the appointing authority.
2. **Appointment with Senate consent.** The **Governor appoints** Supreme Court and appellate judges (the **Chief Justice** also appoints many lower-court judges) **from that list**, and the **Senate confirms.** Judges serve **10-year terms.**
3. **Retention by the Commission — not the voters.** Here's the twist: when a judge's term ends, ⚠️ **the Judicial Selection Commission — not the voters — decides whether to retain the judge.** Most merit-selection states (Missouri, Colorado, Alaska) send judges to **voters** for a yes/no retention vote; **Hawaii keeps that decision inside the commission.** This makes Hawaii's judiciary especially **insulated from electoral politics.**

Why it matters: if you're comparing states, don't assume Hawaii holds judicial **retention elections** — it doesn't. A professional commission handles both the front end (nomination) and the back end (retention).

**Check yourself.** Who decides whether a Hawaii judge is retained at the end of a term — and how is that different from Missouri or Colorado?

## Sources
- Hawaii State Judiciary. (n.d.). *Judicial selection and retention; the Judicial Selection Commission*. courts.state.hi.us. https://www.courts.state.hi.us/
- Hawaii State Legislature. (n.d.). *Constitution of Hawaii, Article VI (The Judiciary)*. capitol.hawaii.gov. https://www.capitol.hawaii.gov/`,
    },

    // ── Section 4: Native Hawaiian affairs + official language ───────────
    {
      slug: "hi-hawaiian-affairs",
      title: "4 · The Office of Hawaiian Affairs and an official second language",
      section: "What Makes Hawaii Unique",
      body: `Hawaii's constitution reflects its history as a **sovereign kingdom** before it was annexed by the United States — and two features stand out.

**The Office of Hawaiian Affairs (OHA).** Hawaii's 1978 constitutional convention created the **Office of Hawaiian Affairs**, a distinctive **semi-autonomous state agency** governed by an **elected board of trustees** (Hawaii State Legislature, n.d.). OHA manages a share of the revenues from **"ceded lands"** (former kingdom and government lands) in trust for the betterment of **Native Hawaiians**, and advocates on their behalf. Uniquely, **all Hawaii voters** elect OHA's trustees. No other state has an equivalent elected body dedicated to an indigenous people's trust — it's a genuine Hawaii distinctive rooted in its unique history.

**Two official languages.** Hawaii is the **only U.S. state with an official second language: Hawaiian** (ʻŌlelo Hawaiʻi). The state constitution makes **both English and Hawaiian official languages of the State** (Hawaii State Legislature, n.d.). This supports Hawaiian-language immersion schools and the use of Hawaiian in public life — another way Hawaii's kingdom-era heritage lives in its modern government.

⚠️ **Time-sensitive:** OHA's structure, funding, and related legal questions evolve; confirm current details at the state's own sites.

**Check yourself.** What does the Office of Hawaiian Affairs do, and what makes Hawaii's official-language status unique among the states?

## Sources
- Hawaii State Legislature. (n.d.). *The Office of Hawaiian Affairs; official languages (Constitution, Article XV)*. capitol.hawaii.gov. https://www.capitol.hawaii.gov/`,
    },

    // ── Section 5: Elections, local government, getting involved ─────────
    {
      slug: "hi-elections-involved",
      title: "5 · Elections, county government, and how to take part",
      section: "Get Involved",
      body: `**Elections — Hawaii votes by mail.** Since 2020 Hawaii has conducted its **elections by mail**: every registered voter is **mailed a ballot**, returnable by mail or at a **voter service center or drop box** (Hawaii Office of Elections, n.d.). Hawaii also offers **same-day registration** at voter service centers. ⚠️ **Time-sensitive:** deadlines and service-center locations are administered by the **county clerks** and can change — confirm the **current** rules at **elections.hawaii.gov** or your county clerk before you vote.

**Local government is the county.** Remember Lesson 1: your local government is your **county** (Honolulu, Hawaiʻi, Maui, or Kauaʻi). There are **no city or town councils below the county** — the **county council and mayor** handle local roads, police, water, zoning, and parks. (Public schools, by contrast, are **state**-run, not local.)

**How to take part:**
- **Vote — it's mailed to you.** Track your ballot at elections.hawaii.gov; return it by mail or drop box.
- **Elect your OHA trustees.** All voters help choose the Office of Hawaiian Affairs board — an often-overlooked part of the Hawaii ballot.
- **Show up at the county.** Your **county council** and mayor make most local decisions; their meetings are public.
- **Contact your legislators** in Honolulu — you have one Representative and one Senator.
- **Engage the state on schools.** Because schools are state-run, education advocacy runs through the **statewide Board of Education and Legislature**, not a local district.
- **Run** — county council, the Board of Education, OHA, and the Legislature are reachable starting points.

**Check yourself.** Who provides your local government in Hawaii, and where do you go to influence public-school policy?

## Sources
- Hawaii Office of Elections. (n.d.). *Elections by mail; registration; voter service centers*. elections.hawaii.gov. https://elections.hawaii.gov/
- Hawaii State Legislature. (n.d.). *County government and the statewide school system*. capitol.hawaii.gov. https://www.capitol.hawaii.gov/`,
    },

    // ── Section 6: Practice (fill in the blanks) ─────────────────────────
    {
      slug: "hi-exercise",
      title: "6 · Practice: fill in the blanks",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about Hawaii state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt:
              "Hawaii is the ONLY state with a single, statewide public ___ system (no local districts).",
            answer: "school",
            explanation:
              "The Hawaii State Department of Education runs every public school as one system — there are no local school districts or boards.",
          },
          {
            prompt:
              "Hawaii's only real layer of local government is the ___ (there are four functioning ones).",
            answer: "county",
            accept: ["counties"],
            explanation:
              "Honolulu, Hawaiʻi, Maui, and Kauaʻi are the four counties; there are no separate city or town governments below them.",
          },
          {
            prompt:
              "Hawaii's current constitution is the Constitution of ___, adopted at statehood.",
            answer: "1959",
            explanation:
              "Hawaii became the 50th state in 1959 and adopted its constitution that year.",
          },
          {
            prompt:
              "Unlike Missouri or Colorado, in Hawaii a judicial ___ Commission — not the voters — decides whether to retain a judge.",
            answer: "Selection",
            accept: ["selection"],
            explanation:
              "Hawaii's Judicial Selection Commission handles both nomination and retention, insulating judges from electoral politics.",
          },
          {
            prompt:
              "Hawaii is the only state with an official second language: ___.",
            answer: "Hawaiian",
            accept: ["hawaiian", "ʻŌlelo Hawaiʻi", "Olelo Hawaii"],
            explanation:
              "Both English and Hawaiian are official languages of the State under the constitution.",
          },
          {
            prompt:
              "TRUE or FALSE: Hawaii has hundreds of local school boards, like most states.",
            answer: "false",
            explanation:
              "False. Hawaii is the only state with a single statewide school system — no local school boards or districts at all.",
          },
        ],
      },
    },

    // ── Section 7: Final quiz ────────────────────────────────────────────
    {
      slug: "hi-quiz",
      title: "7 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What makes Hawaii's government the most centralized in the U.S.?",
            options: [
              "It has 254 counties",
              "It has only four counties, essentially no city/town governments, and a single statewide school system",
              "It has no state government",
              "It is run by the federal government",
            ],
            correctIndex: 1,
            explanation:
              "Hawaii concentrates power at the state level: four counties, no municipalities below them, and one statewide school system.",
            sourceLessonSlug: "hi-centralized",
          },
          {
            prompt: "How does Hawaii run its public schools?",
            options: [
              "Through hundreds of local districts",
              "As a single, unified statewide school system with no local districts or boards",
              "Only private schools exist",
              "Each county runs its own",
            ],
            correctIndex: 1,
            explanation:
              "Hawaii is the only state with one statewide school system, run by the Hawaii State Department of Education.",
            sourceLessonSlug: "hi-centralized",
          },
          {
            prompt: "How many statewide executive officials do Hawaiians elect?",
            options: [
              "Only two — the Governor and Lieutenant Governor",
              "Nine",
              "None",
              "Six",
            ],
            correctIndex: 0,
            explanation:
              "Hawaiians elect the Governor and Lieutenant Governor; the Attorney General and department heads are appointed by the Governor.",
            sourceLessonSlug: "hi-constitution-branches",
          },
          {
            prompt: "How is judicial retention decided in Hawaii?",
            options: [
              "By a yes/no vote of the people",
              "By the Judicial Selection Commission, not the voters",
              "By the Governor alone",
              "By the U.S. Supreme Court",
            ],
            correctIndex: 1,
            explanation:
              "Unlike Missouri or Colorado, Hawaii's Judicial Selection Commission decides retention, keeping judges out of elections.",
            sourceLessonSlug: "hi-courts",
          },
          {
            prompt: "What is the Office of Hawaiian Affairs (OHA)?",
            options: [
              "A tourism agency",
              "An elected-trustee state agency managing ceded-land revenues in trust for Native Hawaiians",
              "The state police",
              "A federal court",
            ],
            correctIndex: 1,
            explanation:
              "OHA, created in 1978, is governed by elected trustees and manages a share of ceded-land revenues for Native Hawaiians.",
            sourceLessonSlug: "hi-hawaiian-affairs",
          },
          {
            prompt: "What makes Hawaii's official-language status unique?",
            options: [
              "It has no official language",
              "It is the only state with an official second language (Hawaiian), alongside English",
              "It bans English",
              "It requires Latin",
            ],
            correctIndex: 1,
            explanation:
              "Hawaii's constitution makes both English and Hawaiian official languages of the State — the only such state.",
            sourceLessonSlug: "hi-hawaiian-affairs",
          },
          {
            prompt: "Which constitution governs Hawaii, and when did it take effect?",
            options: [
              "The Constitution of 1900",
              "The Constitution of 1959, adopted at statehood",
              "The Kingdom constitution of 1840",
              "It has no constitution",
            ],
            correctIndex: 1,
            explanation:
              "Hawaii adopted its constitution in 1959 as it became the 50th state.",
            sourceLessonSlug: "hi-constitution-branches",
          },
          {
            prompt: "In Hawaii, what provides your local government?",
            options: [
              "A city council",
              "Your county (one of four) — there are no city or town governments below the county",
              "A township",
              "The school district",
            ],
            correctIndex: 1,
            explanation:
              "Your county council and mayor handle local services; Hawaii has no municipalities below the county.",
            sourceLessonSlug: "hi-elections-involved",
          },
          {
            prompt: "How does most voting happen in Hawaii?",
            options: [
              "In person only",
              "By mail — a ballot is sent to every registered voter",
              "Online",
              "By telephone",
            ],
            correctIndex: 1,
            explanation:
              "Since 2020 Hawaii conducts elections by mail, with same-day registration at voter service centers.",
            sourceLessonSlug: "hi-elections-involved",
          },
          {
            prompt: "Where does public-school policy advocacy go in Hawaii?",
            options: [
              "To a local school district",
              "To the statewide Board of Education and the Legislature, because schools are state-run",
              "To the county sheriff",
              "To the federal government",
            ],
            correctIndex: 1,
            explanation:
              "Because Hawaii's schools are a single state system, education policy runs through the statewide Board of Education and Legislature, not local districts.",
            sourceLessonSlug: "hi-elections-involved",
          },
        ],
      },
    },
  ],
};
