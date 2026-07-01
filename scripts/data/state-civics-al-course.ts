// Authored "Alabama Civics: How Your State Government Works" — the Alabama entry in the
// per-state Civics layer on Learn.WitUS. State-level companion to the general Civics
// courses: those teach the SYSTEM; this teaches Alabama's version.
//
// Factual and strictly non-partisan. Every content lesson is cited (APA 7 in-line +
// a `## Sources` bibliography) to ALABAMA'S OWN OFFICIAL SOURCES: the Legislature
// (legislature.state.al.us), the Secretary of State / elections (sos.alabama.gov), the
// Judicial System (judicial.alabama.gov), and the Alabama Constitution.
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. Alabama
// recompiled its constitution in 2022. Time-sensitive items are flagged and point
// learners to sos.alabama.gov.
//
// Organized into sections (course modules), ending with a fill-in exercise + a final
// quiz whose every question links back to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_AL_COURSE: AuthoredCourse = {
  title: "Alabama Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the state of Alabama governs itself — and how you take part where you live. Alabama's constitution is famous for one thing: length. Its 1901 constitution grew into the LONGEST constitution in the world — hundreds of thousands of words and hundreds of amendments — largely because power was centralized in Montgomery and even local matters required statewide amendments. In 2022, voters approved a recompiled 'Constitution of Alabama 2022.' You'll learn why Alabama's constitution is so long, its weak-home-rule tradition, its large plural executive, its Legislature of 35 senators and 105 representatives, its PARTISAN elected judiciary, and its 67 counties. Time-sensitive facts are flagged, pointing to sos.alabama.gov. Cited to Alabama's own official sources (legislature.state.al.us, sos.alabama.gov, judicial.alabama.gov).",
  lessons: [
    // ── Section 1: The longest constitution ──────────────────────────────
    {
      slug: "al-longest-constitution",
      title: "1 · The longest constitution in the world (and the 2022 recompile)",
      section: "What Makes Alabama Unique",
      body: `Alabama's most distinctive civic fact is about its **constitution** — specifically, its **extraordinary length.** Alabama's **Constitution of 1901** grew to become the **longest constitution in the world**, running to **hundreds of thousands of words** with **more than 900 amendments** (Alabama Legislature, n.d.).

**Why so long?** Two reasons (Alabama Legislature, n.d.):
1. **Centralized power / weak home rule.** The 1901 constitution deliberately **concentrated power in the state Legislature** and gave **local governments very little authority** ("weak home rule"). So counties and cities that wanted to do almost anything specific — set a local tax, regulate a local matter — often needed a **statewide constitutional amendment.** Over a century, that produced **hundreds of narrow, local amendments** bloating the document.
2. **Its origins.** The 1901 constitution was written in part to entrench the power structure of its era, including provisions later recognized as **racist**, and it was hard to change.

**The 2022 recompile.** ⚠️ In **2022, Alabama voters approved a recompiled "Constitution of Alabama 2022,"** which **removed racist language, deleted repealed sections, and reorganized** the sprawling text — without changing its fundamental structure (Alabama Legislature, n.d.). It's still very long, but cleaner. Because this is recent, older sources describe the "1901 constitution" — confirm current references at legislature.state.al.us.

Why it matters: Alabama's constitution is a living lesson in how **weak local self-government** and a **hard-to-amend, centralized system** can produce an enormous, unwieldy fundamental law — and how a state can **clean it up** by a vote of the people.

**A note this course keeps returning to:** state facts **vary and change.** Everything here is current as of authoring, but Alabama's own government (legislature.state.al.us, sos.alabama.gov, judicial.alabama.gov) is the authoritative source.

**Check yourself.** Why did Alabama's constitution become the longest in the world, and what did voters do in 2022?

## Sources
- Alabama Legislature. (n.d.). *The Alabama Constitution: length, local amendments, and the 2022 recompilation*. legislature.state.al.us. https://legislature.state.al.us/
- Alabama Secretary of State. (n.d.). *Alabama government overview*. sos.alabama.gov. https://www.sos.alabama.gov/`,
    },

    // ── Section 2: Weak home rule + the executive ────────────────────────
    {
      slug: "al-home-rule-executive",
      title: "2 · Weak home rule and Alabama's large plural executive",
      section: "The Three Branches",
      body: `**Weak home rule — power stays in Montgomery.** As Lesson 1 showed, Alabama gives its **counties and cities relatively little independent authority.** Many local decisions still run **through the state Legislature**, which passes **local laws** for individual counties. This **centralization** is a defining feature of Alabama government — the opposite of a strong home-rule state like Illinois — and it's why Alabamians often watch their **legislative delegation** closely for local matters (Alabama Legislature, n.d.).

**A large plural executive.** Alabama voters elect **many** statewide officials — one of the larger elected executives in the country (Alabama Secretary of State, n.d.): the **Governor**, **Lieutenant Governor** (elected **separately** — can be a different party), **Attorney General**, **Secretary of State**, **State Treasurer**, **State Auditor**, and **Commissioner of Agriculture and Industries**, plus the elected **Public Service Commission** and the elected **State Board of Education.** Executive power is spread widely across independently elected officials.

The **Legislative** and **Judicial** branches complete the three (next lessons).

**Veto and override.** The Governor may veto bills (and line-item veto appropriations), but ⚠️ Alabama's veto is comparatively **weak**: the Legislature can **override with only a simple majority** (the same majority that passed the bill) — similar to Tennessee — so a determined majority can override easily.

**Check yourself.** What does "weak home rule" mean for Alabama's local governments, and how strong is the Governor's veto?

## Sources
- Alabama Legislature. (n.d.). *Home rule, local laws, and the Legislature*. legislature.state.al.us. https://legislature.state.al.us/
- Alabama Secretary of State. (n.d.). *Statewide elected officials*. sos.alabama.gov. https://www.sos.alabama.gov/`,
    },

    // ── Section 3: The Legislature + partisan-elected judges ─────────────
    {
      slug: "al-legislature-courts",
      title: "3 · The Legislature and Alabama's partisan-elected judiciary",
      section: "The Three Branches",
      body: `**Legislative — the Alabama Legislature.** A bicameral body meeting in Montgomery (Alabama Legislature, n.d.):
- **House of Representatives — 105 members**, and **Senate — 35 senators**, all serving **4-year terms.**
- Much of the Legislature's work includes **"local legislation"** for individual counties and cities — a direct result of Alabama's weak home rule.

**Judicial — a PARTISAN elected judiciary.** Alabama is one of the states that **elects its judges in openly PARTISAN elections** — candidates run **with party labels (D or R) on the ballot** (Alabama Judicial System, n.d.):
- The **Supreme Court of Alabama** has **9 justices**, elected statewide in **partisan** races to **6-year terms.**
- Alabama also elects, separately and statewide, the judges of its **Court of Civil Appeals** and **Court of Criminal Appeals** (Alabama has **two** separate intermediate appellate courts — a less common arrangement), plus its trial (Circuit and District) judges.
This makes Alabama's judicial elections **explicitly political** — a contrast with the nonpartisan judicial ballots of states like Michigan or Wisconsin. If you're comparing states, note that in Alabama your judicial ballot **shows party labels.**

**How a bill becomes law:** introduction → committee → floor votes in both chambers → the Governor (sign, weak veto, or line-item veto). Alabama has **no statewide citizen initiative**; constitutional **amendments** are proposed by the Legislature and ratified by the **voters** — which, given the weak home rule, is why Alabamians vote on **so many** (often local) amendments.

**Check yourself.** How are Alabama's Supreme Court justices elected, and why do Alabamians vote on so many constitutional amendments?

## Sources
- Alabama Legislature. (n.d.). *The Legislature; local legislation; how a bill becomes law*. legislature.state.al.us. https://legislature.state.al.us/
- Alabama Judicial System. (n.d.). *Partisan judicial elections; the appellate courts*. judicial.alabama.gov. https://judicial.alabama.gov/`,
    },

    // ── Section 4: Local government + getting involved ───────────────────
    {
      slug: "al-local-involved",
      title: "4 · Local government and how to take part",
      section: "Get Involved",
      body: `**Local government.** Alabama's local layers include (Alabama Legislature, n.d.):
- **67 counties**, governed by elected **county commissions**, plus other elected county officials (sheriff, probate judge, tax officials). Because of weak home rule, counties often need **state legislative action** (or a constitutional amendment) for many local decisions.
- **Cities and towns** provide municipal services; some larger cities have gained more local authority over time.
- **School systems** (city and county) and **special districts** round out local government.

**Voting.** ⚠️ **Time-sensitive:** Alabama requires a **photo ID** to vote, and its absentee-voting rules are comparatively **restrictive** (an excuse is generally required; Alabama has been slower to adopt early/no-excuse voting than many states). Rules and deadlines are administered by **county officials** and can change — confirm the **current** details at **sos.alabama.gov** before you vote.

**How to take part:**
- **Register and vote** — bring photo ID; check absentee eligibility and deadlines at sos.alabama.gov.
- **Watch your legislative delegation.** Because of weak home rule, your **state legislators** decide many **local** matters — following them closely is especially important in Alabama.
- **Vote on amendments.** Alabama ballots often carry **many constitutional amendments** (statewide and local) — read them; they're a real part of your ballot here.
- **Show up locally.** County commissions, city councils, and school boards hold public meetings.
- **Run** — school board, city council, and county commission are reachable local starting points.

**Check yourself.** Why is your state legislative delegation especially important for local matters in Alabama, and what does Alabama require to vote in person?

## Sources
- Alabama Legislature. (n.d.). *Local government and the role of legislative delegations*. legislature.state.al.us. https://legislature.state.al.us/
- Alabama Secretary of State. (n.d.). *Voting in Alabama: photo ID, absentee rules, registration*. sos.alabama.gov. https://www.sos.alabama.gov/`,
    },

    // ── Section 5: Practice (fill in the blanks) ─────────────────────────
    {
      slug: "al-exercise",
      title: "5 · Practice: fill in the blanks",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about Alabama state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt:
              "Alabama's 1901 constitution became the ___ constitution in the world (by length).",
            answer: "longest",
            explanation:
              "Its hundreds of thousands of words and 900+ amendments — many local — made it the world's longest constitution.",
          },
          {
            prompt:
              "A big reason Alabama's constitution grew so long is its weak home ___ — local matters needed statewide amendments.",
            answer: "rule",
            explanation:
              "Weak home rule kept power in the Legislature, so counties/cities often needed constitutional amendments for local decisions.",
          },
          {
            prompt:
              "In 2022 Alabama voters approved a recompiled Constitution of Alabama ___.",
            answer: "2022",
            explanation:
              "The 2022 recompilation removed racist language and reorganized the text without changing its basic structure.",
          },
          {
            prompt:
              "Alabama elects its Supreme Court justices in ___ (party-labeled) elections.",
            answer: "partisan",
            explanation:
              "Alabama's 9 justices are elected in partisan statewide races to 6-year terms — party labels appear on the ballot.",
          },
          {
            prompt:
              "Alabama's Legislature has a 35-member Senate and a ___-member House.",
            answer: "105",
            explanation:
              "The Alabama House has 105 members and the Senate has 35, all on 4-year terms.",
          },
          {
            prompt:
              "TRUE or FALSE: Alabama has a statewide citizen initiative to propose new laws.",
            answer: "false",
            explanation:
              "False. Alabama has no statewide initiative; the Legislature proposes amendments, which voters ratify (often many at once).",
          },
        ],
      },
    },

    // ── Section 6: Final quiz ────────────────────────────────────────────
    {
      slug: "al-quiz",
      title: "6 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What is Alabama's constitution famous for?",
            options: [
              "Being the shortest in the nation",
              "Being the longest constitution in the world (by length)",
              "Having no amendments",
              "Being unwritten",
            ],
            correctIndex: 1,
            explanation:
              "Alabama's 1901 constitution grew into the world's longest, with hundreds of thousands of words and 900+ amendments.",
            sourceLessonSlug: "al-longest-constitution",
          },
          {
            prompt: "Why did Alabama's constitution grow so long?",
            options: [
              "It had a strong home-rule tradition",
              "Weak home rule meant local matters often required statewide constitutional amendments",
              "It copied other states word for word",
              "It was translated many times",
            ],
            correctIndex: 1,
            explanation:
              "Centralized power and weak home rule produced hundreds of narrow local amendments over a century.",
            sourceLessonSlug: "al-longest-constitution",
          },
          {
            prompt: "What did Alabama voters approve in 2022?",
            options: [
              "Abolishing the constitution",
              "A recompiled Constitution of Alabama 2022 that removed racist language and reorganized the text",
              "A brand-new form of government",
              "Ending elections",
            ],
            correctIndex: 1,
            explanation:
              "The 2022 recompilation cleaned up and reorganized the constitution without changing its basic structure.",
            sourceLessonSlug: "al-longest-constitution",
          },
          {
            prompt: "What does 'weak home rule' mean in Alabama?",
            options: [
              "Localities have broad independent power",
              "Localities have little independent authority and often need state legislative action",
              "There are no local governments",
              "The Governor runs every county",
            ],
            correctIndex: 1,
            explanation:
              "Alabama's weak home rule keeps power in Montgomery; counties/cities frequently need the Legislature to act.",
            sourceLessonSlug: "al-home-rule-executive",
          },
          {
            prompt: "How strong is the Alabama Governor's veto?",
            options: [
              "Impossible to override",
              "Comparatively weak — the Legislature overrides with a simple majority",
              "The Governor cannot veto",
              "Only courts can override it",
            ],
            correctIndex: 1,
            explanation:
              "Alabama's veto, like Tennessee's, is overridden by a simple majority — one of the weakest in the nation.",
            sourceLessonSlug: "al-home-rule-executive",
          },
          {
            prompt: "How does Alabama elect its Supreme Court justices?",
            options: [
              "Appointed for life by the Governor",
              "In partisan statewide elections (party labels on the ballot) to 6-year terms",
              "Elected by the Legislature",
              "On a nonpartisan ballot",
            ],
            correctIndex: 1,
            explanation:
              "Alabama's 9 justices are elected in openly partisan races — a contrast with nonpartisan-ballot states.",
            sourceLessonSlug: "al-legislature-courts",
          },
          {
            prompt: "How many members are in the Alabama House and Senate?",
            options: [
              "105 House / 35 Senate",
              "100 House / 40 Senate",
              "150 House / 50 Senate",
              "203 House / 50 Senate",
            ],
            correctIndex: 0,
            explanation:
              "The Alabama House has 105 members and the Senate has 35, all on 4-year terms.",
            sourceLessonSlug: "al-legislature-courts",
          },
          {
            prompt: "Why do Alabamians vote on so many constitutional amendments?",
            options: [
              "They enjoy voting",
              "Weak home rule means many local matters require statewide constitutional amendments",
              "Congress requires it",
              "The Governor demands it",
            ],
            correctIndex: 1,
            explanation:
              "Because localities lack independent authority, many (often local) issues reach the ballot as amendments.",
            sourceLessonSlug: "al-legislature-courts",
          },
          {
            prompt: "How many counties does Alabama have?",
            options: ["10", "67", "159", "254"],
            correctIndex: 1,
            explanation:
              "Alabama has 67 counties, governed by elected commissions but limited by weak home rule.",
            sourceLessonSlug: "al-local-involved",
          },
          {
            prompt: "Why does this course tell you to VERIFY Alabama's constitution references and voting rules?",
            options: [
              "Because Alabama has no government website",
              "Because the 2022 recompilation renamed/reorganized the constitution and voting rules are run by counties and can change — confirm at sos.alabama.gov",
              "Because only Congress sets them",
              "Because voting is secret",
            ],
            correctIndex: 1,
            explanation:
              "Alabama's recent recompilation and locally administered, comparatively restrictive voting make the state's own sites authoritative.",
            sourceLessonSlug: "al-local-involved",
          },
        ],
      },
    },
  ],
};
