// Authored "New Hampshire Civics: How Your State Government Works" — the New Hampshire
// entry in the per-state Civics layer on Learn.WitUS. State-level companion to the
// general Civics courses: those teach the SYSTEM; this teaches New Hampshire's version.
//
// Factual and strictly non-partisan. Every content lesson is cited (APA 7 in-line +
// a `## Sources` bibliography) to NEW HAMPSHIRE'S OWN OFFICIAL SOURCES: the General
// Court / Legislature (gencourt.state.nh.us), the Secretary of State / elections
// (sos.nh.gov), the Judicial Branch (courts.nh.gov), and the NH Constitution (1784).
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. New Hampshire
// is phasing out its interest-and-dividends tax and protects a first-in-the-nation
// primary. Time-sensitive items are flagged and point learners to sos.nh.gov.
//
// Organized into sections (course modules), ending with a fill-in exercise + a final
// quiz whose every question links back to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_NH_COURSE: AuthoredCourse = {
  title: "New Hampshire Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the state of New Hampshire governs itself — and how you take part where you live. New Hampshire runs government unlike anywhere else: its House of Representatives has about 400 members — one of the largest legislative bodies in the English-speaking world — and legislators are paid just $100 a year, making it a true volunteer 'citizen legislature.' You'll learn New Hampshire's Constitution of 1784 (the second-oldest in the nation), its elected 5-member Executive Council that must approve the Governor's appointments, its 2-year governor term, its lack of a state income or sales tax ('the New Hampshire Advantage'), its appointed judiciary, its town-meeting tradition, and its protected first-in-the-nation presidential primary. Time-sensitive facts are flagged, pointing to sos.nh.gov. Cited to New Hampshire's own official sources (gencourt.state.nh.us, sos.nh.gov, courts.nh.gov).",
  lessons: [
    // ── Section 1: The huge citizen legislature ──────────────────────────
    {
      slug: "nh-huge-legislature",
      title: "1 · The 400-member House: New Hampshire's giant citizen legislature",
      section: "What Makes New Hampshire Unique",
      body: `Start with the fact that defines New Hampshire government: it has a **General Court** (the official name of its Legislature, shared with Massachusetts) with a **House of Representatives of about 400 members** — one of the **largest legislative bodies in the entire English-speaking world**, behind only the U.S. Congress and the British and Indian parliaments (New Hampshire General Court, n.d.).

**Just how big — and how "citizen."** With roughly **400 representatives** for a small-population state, each represents only a few thousand people — so your representative is often a **neighbor** you can actually reach. And here's the kicker: New Hampshire legislators are paid **just $100 per year** (plus mileage), a figure fixed in the constitution. That makes the General Court a genuine **volunteer "citizen legislature"** — people serve out of civic duty, not for a salary (New Hampshire General Court, n.d.).

The **Senate**, by contrast, is small — **24 senators.** So New Hampshire pairs a **giant, grassroots House** with a **compact Senate.**

Why it leads the course: this enormous, nearly unpaid House shapes New Hampshire's whole political culture — **extremely local, accessible, and participatory.** Ordinary residents run and win; testifying before a committee is routine.

**A note this course keeps returning to:** state facts **vary and change.** Everything here is current as of authoring, but New Hampshire's own government (gencourt.state.nh.us, sos.nh.gov, courts.nh.gov) is the authoritative source. When something is time-sensitive — like the phase-out of a state tax — we say so.

**Check yourself.** About how many members does the New Hampshire House have, and how much are legislators paid per year?

## Sources
- New Hampshire General Court. (n.d.). *About the General Court: the House, the Senate, and legislator pay*. gencourt.state.nh.us. https://gencourt.state.nh.us/
- New Hampshire Secretary of State. (n.d.). *New Hampshire government overview*. sos.nh.gov. https://www.sos.nh.gov/`,
    },

    // ── Section 2: Constitution + the executive/Executive Council ────────
    {
      slug: "nh-executive-council",
      title: "2 · The 1784 Constitution, a 2-year Governor, and the Executive Council",
      section: "The Three Branches",
      body: `New Hampshire governs under its **Constitution of 1784** — the **second-oldest state constitution still in use** (after Massachusetts's 1780). New Hampshire became the **9th state on June 21, 1788** — and it was the **decisive ninth ratification** that put the U.S. Constitution into effect (New Hampshire General Court, n.d.).

**A 2-year Governor and no Lieutenant Governor.** New Hampshire's **Governor serves a 2-year term** — one of only **two states** (with **Vermont**) that still elect a governor every two years, and there is **no term limit.** New Hampshire also has **no Lieutenant Governor**; the **President of the Senate** is next in line to succeed the Governor (New Hampshire General Court, n.d.).

**The Executive Council — a rare check on the Governor.** Like Massachusetts, New Hampshire elects an **Executive Council** — **five members**, each from a district — that **must approve many of the Governor's most important actions** (New Hampshire General Court, n.d.):
- **Appointments** (including judges), **state contracts above a threshold**, **pardons**, and large expenditures.
The Governor **cannot act alone** on these — the elected Council must agree. This makes New Hampshire's governorship comparatively **checked**: a five-member elected body sits between the Governor and much of the state's business. It's one of only a couple of states with such a council.

**Check yourself.** How long is New Hampshire's gubernatorial term, and what must the elected Executive Council approve?

## Sources
- New Hampshire General Court. (n.d.). *Constitution of New Hampshire (1784); the Governor and Executive Council*. gencourt.state.nh.us. https://gencourt.state.nh.us/
- New Hampshire Secretary of State. (n.d.). *The Executive Council*. sos.nh.gov. https://www.sos.nh.gov/`,
    },

    // ── Section 3: The 'New Hampshire Advantage' + how a bill becomes law ─
    {
      slug: "nh-taxes-lawmaking",
      title: "3 · The 'New Hampshire Advantage' and how a bill becomes law",
      section: "Making Law & Money",
      body: `**No income tax, no sales tax.** New Hampshire is one of the very few states with **neither a broad-based state income tax on wages NOR a general state sales tax** — a combination locals call the **"New Hampshire Advantage"** (New Hampshire General Court, n.d.). Instead, the state leans heavily on **local property taxes** and **business taxes.** ⚠️ **Time-sensitive:** New Hampshire long taxed **interest and dividends** (not wages), but that tax has been **phased out** — so confirm the **current** tax landscape at the state's own sites rather than assuming a fixed answer. The absence of income and sales taxes profoundly shapes New Hampshire's budget debates and its low-tax political identity ("Live Free or Die").

**How a bill becomes law** (New Hampshire General Court, n.d.):
1. **Introduction.** A representative or senator introduces a bill.
2. **Committee + hearings.** With ~400 House members and an open culture, **public hearings** are routine and accessible — ordinary residents testify often.
3. **Floor votes.** Both the House and Senate must pass the bill.
4. **Governor + Council note.** The Governor may sign or veto (a **two-thirds** override); recall that on **appointments and contracts**, the **Executive Council** also acts.

New Hampshire has **no statewide citizen initiative** for general laws — lawmaking runs through the General Court and, locally, through **town meeting** (next).

**Check yourself.** What two big taxes does New Hampshire NOT levy, and why should you verify its interest-and-dividends tax status?

## Sources
- New Hampshire General Court. (n.d.). *State taxes; how a bill becomes law*. gencourt.state.nh.us. https://gencourt.state.nh.us/`,
    },

    // ── Section 4: Courts, local government, town meeting ────────────────
    {
      slug: "nh-courts-local",
      title: "4 · Appointed judges, 10 counties, and town meeting",
      section: "Local Government & Courts",
      body: `**How New Hampshire picks its judges.** New Hampshire does **not** elect its judges. Following the New England pattern, the **Governor nominates** a judge, the **Executive Council confirms**, and judges then serve **until the mandatory retirement age of 70** (New Hampshire Judicial Branch, n.d.). The **New Hampshire Supreme Court** has **5 justices.** Keeping judges appointed (and confirmed by the elected Council) puts them outside partisan campaigns.

**Local government — towns first** (New Hampshire General Court, n.d.):
- New Hampshire is a **town-based** New England state. Many towns govern by **open town meeting**, where **any registered voter can attend, debate, and vote** on the town budget and warrant articles — direct democracy at the local level. (Many towns now use the "SB 2" official-ballot form, but the town-meeting tradition remains central.)
- New Hampshire has **10 counties**, which handle courts, jails, and some regional services, but the **town or city** is the center of daily local government.
- **School districts** are run locally, often with their own district meetings.

**The town meeting** is a defining New Hampshire (and New England) institution — the same participatory spirit as the 400-member House, applied to your own town's budget.

**Check yourself.** How are New Hampshire judges chosen, and what can any voter do at an open town meeting?

## Sources
- New Hampshire Judicial Branch. (n.d.). *The New Hampshire courts; judicial nomination and Executive Council confirmation*. courts.nh.gov. https://www.courts.nh.gov/
- New Hampshire General Court. (n.d.). *Local government: counties, towns, and town meeting*. gencourt.state.nh.us. https://gencourt.state.nh.us/`,
    },

    // ── Section 5: The first primary + getting involved ──────────────────
    {
      slug: "nh-primary-involved",
      title: "5 · The first-in-the-nation primary and how to take part",
      section: "Get Involved",
      body: `**First in the nation.** New Hampshire is famous for holding the **first presidential primary in the country**, a tradition **protected by state law** that directs the Secretary of State to schedule New Hampshire's primary **ahead of any similar contest** (New Hampshire Secretary of State, n.d.). ⚠️ **Time-sensitive:** the national primary calendar and party rules shift, and New Hampshire guards its first-primary status vigorously — confirm current dates and rules at **sos.nh.gov**. The tradition gives New Hampshire outsized attention in presidential politics and a strong culture of **retail, face-to-face campaigning.**

**How to take part:**
- **Register and vote** — New Hampshire offers **same-day (Election-Day) registration**; check details at sos.nh.gov. In presidential years, you may vote in the **first-in-the-nation primary.**
- **Go to town meeting.** If your town holds one, **show up and vote** on the budget and warrant articles directly.
- **Run — it's genuinely doable.** With ~400 House seats representing small populations, **ordinary residents win legislative office** here more easily than almost anywhere; local select boards and school boards are reachable too.
- **Testify.** The General Court's culture of open hearings means your voice on a specific bill is welcomed.
- **Contact your legislators** — you likely have **several** House members from your area (districts can elect multiple representatives) plus a senator.

**The habit to build:** because New Hampshire government is so **local and accessible**, pick one town-meeting article or one bill and follow it — your participation carries unusual weight here.

**Check yourself.** What is New Hampshire's protected role in presidential elections, and name one reason running for office is unusually accessible here.

## Sources
- New Hampshire Secretary of State. (n.d.). *The first-in-the-nation presidential primary; registering and voting*. sos.nh.gov. https://www.sos.nh.gov/
- New Hampshire General Court. (n.d.). *Find your legislators; testifying at hearings*. gencourt.state.nh.us. https://gencourt.state.nh.us/`,
    },

    // ── Section 6: Practice (fill in the blanks) ─────────────────────────
    {
      slug: "nh-exercise",
      title: "6 · Practice: fill in the blanks",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about New Hampshire state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt:
              "New Hampshire's House of Representatives has about ___ members — one of the largest in the English-speaking world.",
            answer: "400",
            accept: ["four hundred"],
            explanation:
              "With ~400 representatives, each serves only a few thousand people; legislators are paid just $100/year — a true citizen legislature.",
          },
          {
            prompt:
              "New Hampshire's Constitution of ___ is the second-oldest state constitution still in use.",
            answer: "1784",
            explanation:
              "Only Massachusetts's 1780 constitution is older; New Hampshire was the decisive 9th state to ratify the U.S. Constitution.",
          },
          {
            prompt:
              "The elected 5-member body that must approve New Hampshire's gubernatorial appointments and contracts is the Executive ___.",
            answer: "Council",
            accept: ["council"],
            explanation:
              "Like Massachusetts, New Hampshire's elected Executive Council checks the Governor on appointments, contracts, and pardons.",
          },
          {
            prompt:
              "New Hampshire's Governor serves a ___-year term (one of only two states with such short gubernatorial terms).",
            answer: "2",
            accept: ["two"],
            explanation:
              "New Hampshire and Vermont still elect governors every two years, with no term limit.",
          },
          {
            prompt:
              "The 'New Hampshire Advantage' refers to having no state income tax on wages and no state ___ tax.",
            answer: "sales",
            explanation:
              "New Hampshire levies neither a broad income tax nor a general sales tax, relying on property and business taxes.",
          },
          {
            prompt:
              "TRUE or FALSE: New Hampshire holds the first-in-the-nation presidential primary, protected by state law.",
            answer: "true",
            explanation:
              "True. State law directs the Secretary of State to schedule New Hampshire's primary ahead of similar contests.",
          },
        ],
      },
    },

    // ── Section 7: Final quiz ────────────────────────────────────────────
    {
      slug: "nh-quiz",
      title: "7 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What is distinctive about New Hampshire's House of Representatives?",
            options: [
              "It has only 10 members",
              "It has about 400 members — one of the largest legislative bodies in the English-speaking world",
              "It is appointed by the Governor",
              "It meets once a decade",
            ],
            correctIndex: 1,
            explanation:
              "New Hampshire's ~400-member House is huge; legislators are paid just $100/year, making it a volunteer citizen legislature.",
            sourceLessonSlug: "nh-huge-legislature",
          },
          {
            prompt: "How much are New Hampshire legislators paid per year?",
            options: ["$100", "$50,000", "$100,000", "Nothing at all"],
            correctIndex: 0,
            explanation:
              "The constitution fixes legislator pay at $100 per year (plus mileage) — a genuine volunteer legislature.",
            sourceLessonSlug: "nh-huge-legislature",
          },
          {
            prompt: "Which constitution governs New Hampshire, and how old is it?",
            options: [
              "The 1784 Constitution — the second-oldest still in use",
              "The 1959 Constitution — the newest",
              "The 1901 Constitution",
              "It has no written constitution",
            ],
            correctIndex: 0,
            explanation:
              "New Hampshire's 1784 constitution is the second-oldest in use, after Massachusetts's 1780.",
            sourceLessonSlug: "nh-executive-council",
          },
          {
            prompt: "What does New Hampshire's elected Executive Council do?",
            options: [
              "Writes all laws",
              "Approves the Governor's appointments, contracts, and pardons",
              "Runs the public schools",
              "Elects the Governor",
            ],
            correctIndex: 1,
            explanation:
              "The five-member elected Executive Council must approve many key gubernatorial actions — a rare check on the Governor.",
            sourceLessonSlug: "nh-executive-council",
          },
          {
            prompt: "How long is New Hampshire's gubernatorial term?",
            options: ["2 years", "4 years", "6 years", "8 years"],
            correctIndex: 0,
            explanation:
              "New Hampshire (with Vermont) elects its Governor every two years, with no term limit.",
            sourceLessonSlug: "nh-executive-council",
          },
          {
            prompt: "What is the 'New Hampshire Advantage'?",
            options: [
              "Free college for all",
              "No broad-based state income tax on wages and no general state sales tax",
              "The largest state budget",
              "Mandatory voting",
            ],
            correctIndex: 1,
            explanation:
              "New Hampshire levies neither a broad income tax nor a general sales tax, relying on property and business taxes.",
            sourceLessonSlug: "nh-taxes-lawmaking",
          },
          {
            prompt: "How are New Hampshire's judges chosen?",
            options: [
              "Elected in partisan races",
              "Nominated by the Governor, confirmed by the Executive Council, serving to age 70",
              "Elected by the Legislature",
              "Chosen by town meeting",
            ],
            correctIndex: 1,
            explanation:
              "New Hampshire judges are appointed by the Governor with Executive Council confirmation and serve to mandatory retirement at 70.",
            sourceLessonSlug: "nh-courts-local",
          },
          {
            prompt: "What is an 'open town meeting' in New Hampshire?",
            options: [
              "A closed legislative session",
              "A gathering where any registered voter can debate and vote on the town budget and warrant articles",
              "A meeting only for officials",
              "A statewide referendum",
            ],
            correctIndex: 1,
            explanation:
              "Town meeting lets voters decide town budgets and warrant articles directly — direct democracy in New England towns.",
            sourceLessonSlug: "nh-courts-local",
          },
          {
            prompt: "What is New Hampshire's protected role in presidential elections?",
            options: [
              "It hosts the national convention",
              "It holds the first-in-the-nation presidential primary, protected by state law",
              "It chooses the President directly",
              "It has no role",
            ],
            correctIndex: 1,
            explanation:
              "State law directs the Secretary of State to keep New Hampshire's primary first, giving it outsized attention.",
            sourceLessonSlug: "nh-primary-involved",
          },
          {
            prompt: "Why does this course tell you to VERIFY New Hampshire's tax and primary details?",
            options: [
              "Because New Hampshire has no government website",
              "Because the interest-and-dividends tax is being phased out and the primary calendar shifts — confirm at sos.nh.gov",
              "Because only Congress sets them",
              "Because voting is secret",
            ],
            correctIndex: 1,
            explanation:
              "New Hampshire's tax landscape is changing and its primary date is guarded but calendar-dependent, so the state's own sites are authoritative.",
            sourceLessonSlug: "nh-primary-involved",
          },
        ],
      },
    },
  ],
};
