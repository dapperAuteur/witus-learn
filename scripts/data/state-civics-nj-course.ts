// Authored "New Jersey Civics: How Your State Government Works" — the New Jersey entry
// in the per-state Civics layer on Learn.WitUS. State-level companion to the general
// Civics courses: those teach the SYSTEM; this teaches New Jersey's version.
//
// Factual and strictly non-partisan. Every content lesson is cited (APA 7 in-line +
// a `## Sources` bibliography) to NEW JERSEY'S OWN OFFICIAL SOURCES: the Legislature
// (njleg.gov), the Department of State / Division of Elections (nj.gov/state and
// nj.gov/state/elections), the Judiciary (njcourts.gov), and the New Jersey
// Constitution (1947).
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. New Jersey
// created a Lieutenant Governor only in 2010 and renamed its county boards ("chosen
// freeholders" -> "county commissioners") in 2020-2021. Time-sensitive items are
// flagged and point learners to nj.gov/state.
//
// Organized into sections (course modules), ending with a fill-in exercise + a final
// quiz whose every question links back to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_NJ_COURSE: AuthoredCourse = {
  title: "New Jersey Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the state of New Jersey governs itself — and how you take part where you live. You'll learn New Jersey's Constitution of 1947; a Legislature of 40 senators and 80 Assembly members elected from 40 shared districts; and a genuinely distinctive executive — long considered one of the strongest governors in the nation because so many officials (the Attorney General, Secretary of State, and more) are APPOINTED by the governor rather than elected. You'll learn why New Jersey had NO Lieutenant Governor until 2010, why the state has NO citizen initiative, how its appointed judiciary earns tenure to age 70, and how its 21 counties and 500-plus municipalities work — including the recent renaming of county 'freeholders' to 'commissioners.' Time-sensitive facts are flagged, pointing to nj.gov/state. Cited to New Jersey's own official sources (njleg.gov, nj.gov/state, njcourts.gov).",
  lessons: [
    // ── Section 1: The New Jersey Constitution ───────────────────────────
    {
      slug: "nj-constitution",
      title: "1 · New Jersey's Constitution of 1947",
      section: "The New Jersey Constitution",
      body: `New Jersey governs under its **Constitution of 1947** — widely admired as one of the best-drafted modern state constitutions, and its **third** (after 1776 and 1844). New Jersey was the **3rd state**, ratifying the U.S. Constitution on **December 18, 1787** (New Jersey Legislature, n.d.).

The 1947 constitution's signature achievement was to **streamline and strengthen the executive branch** — it deliberately concentrated executive authority in a **single powerful Governor**, cleaning up a fragmented earlier system. That one design choice is the through-line of New Jersey civics and explains several features this course highlights:
- New Jersey's Governor is often called **one of the strongest governors in the United States**, because so many state officials are **appointed by the Governor**, not elected.
- For over 60 years the Governor was the **only official elected statewide** — New Jersey had **no Lieutenant Governor until 2010.**
- New Jersey has **no citizen initiative** — voters cannot put laws on the ballot by petition.

**A note this course keeps returning to:** state facts **vary and change.** Everything here is current as of authoring, but New Jersey's own government (njleg.gov, nj.gov/state, njcourts.gov) is the authoritative source. When something is time-sensitive — like the 2010 Lieutenant Governor or the recent county-board renaming — we say so.

**Check yourself.** What did New Jersey's 1947 constitution most notably do to the executive branch?

## Sources
- New Jersey Legislature. (n.d.). *New Jersey State Constitution (1947)*. njleg.gov. https://www.njleg.gov/
- New Jersey Department of State. (n.d.). *About New Jersey government*. nj.gov/state. https://www.nj.gov/state/`,
    },

    // ── Section 2: The strong Governor ───────────────────────────────────
    {
      slug: "nj-governor",
      title: "2 · New Jersey's powerful Governor (and the 2010 Lieutenant Governor)",
      section: "The Three Branches",
      body: `Here is what makes New Jersey's executive distinctive: **power is concentrated in the Governor** to a degree few states match.

**Why the Governor is so strong.** In most states, voters separately elect several statewide executives — an attorney general, a secretary of state, a treasurer — who are independent of the governor. **New Jersey does the opposite:** the Governor **appoints** the Attorney General, the Secretary of State, the State Treasurer, and most other top officials (with Senate confirmation). Because these officials owe their jobs to the Governor rather than to their own voters, the Governor controls the executive branch far more directly than a governor in, say, Washington or Texas (New Jersey Department of State, n.d.).

**No Lieutenant Governor until 2010.** For most of its history, New Jersey had **only one statewide-elected official — the Governor.** There was **no Lieutenant Governor.** ⚠️ This changed by constitutional amendment: after concerns about who runs the state when a Governor leaves office mid-term (in 2004 the Senate President became **acting** Governor while keeping his legislative seat — holding two roles at once), voters approved creating a **Lieutenant Governor**, and the **first one took office in January 2010.** Today the Governor and Lieutenant Governor **run together on a joint ticket**, and the Lieutenant Governor also holds a Cabinet post.

**Governor's term.** The Governor serves a **4-year term** and may serve **two consecutive terms** (then must sit out).

**Check yourself.** Name two officials the New Jersey Governor appoints (rather than voters electing), and say when New Jersey first had a Lieutenant Governor.

## Sources
- New Jersey Department of State. (n.d.). *The Governor and Lieutenant Governor of New Jersey*. nj.gov/state. https://www.nj.gov/state/
- New Jersey Legislature. (n.d.). *New Jersey State Constitution, Article V (Executive)*. njleg.gov. https://www.njleg.gov/`,
    },

    // ── Section 3: Legislature + judiciary ───────────────────────────────
    {
      slug: "nj-legislature-courts",
      title: "3 · The Legislature and the appointed judiciary",
      section: "The Three Branches",
      body: `**Legislative — the New Jersey Legislature.** A bicameral body meeting in Trenton (New Jersey Legislature, n.d.):
- **General Assembly — 80 members**, elected to **2-year terms.**
- **Senate — 40 senators**, who serve **4-year terms** — with one quirk: at the start of each decade (around redistricting) senators serve a short **2-year** term, producing a **"2-year, 4-year, 4-year"** cycle.
- New Jersey has **40 legislative districts**, and — like Arizona and Washington — **each district elects ONE senator and TWO Assembly members**, so your senator and both Assembly members share the same district.

**Judicial — an appointed judiciary with a strong reputation.** New Jersey does **not** elect its judges. Instead (New Jersey Courts, n.d.):
- The **Governor nominates** judges and justices, and the **Senate confirms** them ("advice and consent").
- A judge first serves an **initial 7-year term.** If **reappointed** (again by the Governor with Senate consent), the judge then earns **tenure until the mandatory retirement age of 70.**
- The **Supreme Court of New Jersey** has **7 members** and is widely regarded as one of the most influential state high courts in the country.

⚠️ **A New Jersey Senate custom to know: "senatorial courtesy."** By long-standing (unwritten) tradition, a nominee can be blocked by the senator(s) from the nominee's home county. It's a real feature of how confirmations work in practice — but it's a custom, not a constitutional rule, so confirm current practice.

**Check yourself.** How are New Jersey judges chosen, and what must happen for a judge to gain tenure to age 70?

## Sources
- New Jersey Legislature. (n.d.). *The Legislature; districts and terms*. njleg.gov. https://www.njleg.gov/
- New Jersey Courts. (n.d.). *Judicial appointment and tenure; the Supreme Court of New Jersey*. njcourts.gov. https://www.njcourts.gov/`,
    },

    // ── Section 4: How a bill becomes law (and no initiative) ────────────
    {
      slug: "nj-bill-to-law",
      title: "4 · How a bill becomes law — and why there's no citizen initiative",
      section: "Making Law",
      body: `In New Jersey, laws are made **through the Legislature** — full stop. Unlike many Western states, New Jersey has **no citizen initiative** and **no popular referendum** by petition.

**How a bill becomes law** (New Jersey Legislature, n.d.):
1. **Introduction.** A legislator introduces a bill in the Assembly or Senate.
2. **Committee.** Hearings, amendments, and a committee vote.
3. **Floor votes.** Both chambers must pass the bill.
4. **Governor.** The Governor may **sign** it, **veto** it, or — using powers that make New Jersey's governor especially strong — issue a **conditional veto** (sending it back with specific proposed changes) or a **line-item veto** on appropriations. A veto override requires a **two-thirds vote of each chamber.**

**No initiative or referendum.** New Jersey citizens **cannot** gather signatures to put a statute or a constitutional amendment directly on the ballot. Instead, **amending the constitution runs through the Legislature**: the Legislature places a proposed amendment on the ballot (either by a **three-fifths vote in one year**, or by a **simple majority in two consecutive years**), and **then** the voters ratify it. So New Jersey voters have the **final say on amendments**, but they cannot **start** one themselves.

The takeaway: in New Jersey, **the Legislature and the strong Governor make the law** — the direct-democracy on-ramps found in Colorado or California simply don't exist here.

**Check yourself.** Can New Jersey citizens put a law on the ballot by petition? What is a "conditional veto"?

## Sources
- New Jersey Legislature. (n.d.). *How a bill becomes law; amending the constitution*. njleg.gov. https://www.njleg.gov/`,
    },

    // ── Section 5: Local government ──────────────────────────────────────
    {
      slug: "nj-local-government",
      title: "5 · Local government: 21 counties, 500-plus towns, and 'home rule'",
      section: "Local Government",
      body: `New Jersey is famous for **"home rule"** — a deep tradition of strong, numerous local governments (New Jersey Department of State, n.d.):

- **21 counties.** Each is governed by an elected **Board of County Commissioners.** ⚠️ **Name change to know:** until recently these boards were called the **"Board of Chosen Freeholders"** — a term unique to New Jersey and centuries old. In **2020 the state voted to rename them**, and by **2021** they became **"county commissioners."** Older signs, websites, and documents may still say "freeholder," so don't be thrown.
- **565 municipalities.** New Jersey has an unusually **large number of small municipalities** — boroughs, townships, towns, cities, and villages — each with its own government. This is home rule in action: lots of very local decision-making about schools, police, zoning, and services.
- **Forms of government.** Many towns choose their structure under the **"Faulkner Act" (the Optional Municipal Charter Law)**, which offers menu options like mayor-council, council-manager, and others.
- **School districts** are numerous too, reflecting the same strong-localism tradition.

The practical effect: in New Jersey, **a great deal happens at the town level**, and property taxes — which fund much of it — are a perennial civic issue. "Who do I call?" usually starts with your **municipality**, then the county.

**Check yourself.** What were New Jersey county boards called before 2021, and what does "home rule" look like in New Jersey?

## Sources
- New Jersey Department of State. (n.d.). *Counties and municipalities; home rule; the Faulkner Act*. nj.gov/state. https://www.nj.gov/state/
- New Jersey Legislature. (n.d.). *Renaming of the Board of Chosen Freeholders (2020)*. njleg.gov. https://www.njleg.gov/`,
    },

    // ── Section 6: Elections & getting involved ──────────────────────────
    {
      slug: "nj-elections-involved",
      title: "6 · Elections and how to take part",
      section: "Get Involved",
      body: `New Jersey runs statewide elections on an unusual calendar and has expanded voting access — and there are real ways to take part.

**Odd-year statewide elections.** Like Virginia, New Jersey elects its **Governor (and Lieutenant Governor) in odd-numbered years** — for example **2025 and 2029** — separate from the presidential cycle. The **entire General Assembly** (and, on the decade cycle, the Senate) is also on the ballot in these years (New Jersey Division of Elections, n.d.).

**Expanded access.** New Jersey added **in-person early voting** in 2021, alongside long-standing **vote-by-mail** and drop boxes. ⚠️ **Time-sensitive:** registration deadlines, early-voting days, and mail-ballot rules change and are administered by **county** election officials — confirm the **current** rules at **nj.gov/state/elections** before you vote.

**How to take part:**
- **Register and vote** — use early voting, vote-by-mail, or Election Day; check your status at nj.gov/state/elections.
- **Show up locally.** With home rule, your **municipal council, school board, and county commission** make many of the decisions that affect you — their meetings are public.
- **Contact your legislators** — you have **one Senator and two Assembly members** from your district in Trenton.
- **Weigh in on amendments.** You can't start a ballot measure, but the Legislature refers **constitutional amendments** to you — read them and vote.
- **Run** — school board, borough/township council, and county commission are reachable local starting points.

**Check yourself.** In which years does New Jersey elect its Governor, and who administers the details of New Jersey elections?

## Sources
- New Jersey Division of Elections. (n.d.). *Voting in New Jersey: early voting, vote-by-mail, registration*. nj.gov/state/elections. https://www.nj.gov/state/elections/
- New Jersey Legislature. (n.d.). *Elections and the constitution*. njleg.gov. https://www.njleg.gov/`,
    },

    // ── Section 7: Practice (fill in the blanks) ─────────────────────────
    {
      slug: "nj-exercise",
      title: "7 · Practice: fill in the blanks",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about New Jersey state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt: "New Jersey's current constitution is the Constitution of ___.",
            answer: "1947",
            explanation:
              "The 1947 constitution, New Jersey's third, streamlined and strengthened the executive branch.",
          },
          {
            prompt:
              "New Jersey's Governor is considered one of the nation's strongest because so many officials are ___ by the Governor rather than elected.",
            answer: "appointed",
            explanation:
              "The Governor appoints the Attorney General, Secretary of State, Treasurer, and more (with Senate confirmation), concentrating executive power.",
          },
          {
            prompt:
              "New Jersey had no Lieutenant Governor until the year ___, when the first one took office.",
            answer: "2010",
            explanation:
              "A constitutional amendment created the office; the first Lieutenant Governor took office in January 2010, and now runs on a joint ticket with the Governor.",
          },
          {
            prompt:
              "TRUE or FALSE: New Jersey citizens can put a new law on the ballot through a citizen initiative.",
            answer: "false",
            explanation:
              "False. New Jersey has no citizen initiative; only the Legislature can place constitutional amendments before the voters.",
          },
          {
            prompt:
              "Before 2021, New Jersey's county boards were called the Board of Chosen ___.",
            answer: "Freeholders",
            accept: ["freeholders"],
            explanation:
              "New Jersey renamed the Board of Chosen Freeholders to the Board of County Commissioners, effective 2021.",
          },
          {
            prompt:
              "New Jersey's Legislature has a 40-member Senate and an 80-member General ___.",
            answer: "Assembly",
            accept: ["assembly"],
            explanation:
              "The General Assembly has 80 members (2-year terms); each of the 40 districts elects one senator and two Assembly members.",
          },
        ],
      },
    },

    // ── Section 8: Final quiz ────────────────────────────────────────────
    {
      slug: "nj-quiz",
      title: "8 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "Which constitution governs New Jersey today?",
            options: [
              "The Constitution of 1776",
              "The Constitution of 1844",
              "The Constitution of 1947",
              "New Jersey uses the federal constitution only",
            ],
            correctIndex: 2,
            explanation:
              "New Jersey's third constitution, adopted in 1947, notably strengthened the executive branch.",
            sourceLessonSlug: "nj-constitution",
          },
          {
            prompt: "Why is New Jersey's Governor considered one of the strongest in the nation?",
            options: [
              "The Governor also serves as Chief Justice",
              "Many top officials (Attorney General, Secretary of State, Treasurer) are appointed by the Governor, not elected",
              "The Governor can serve unlimited terms",
              "The Governor writes court decisions",
            ],
            correctIndex: 1,
            explanation:
              "Because the Governor appoints most executive officials (with Senate confirmation), New Jersey's Governor controls the executive branch unusually directly.",
            sourceLessonSlug: "nj-governor",
          },
          {
            prompt: "When did New Jersey first have a Lieutenant Governor?",
            options: [
              "At statehood in 1787",
              "In 1947",
              "In January 2010",
              "It still has none",
            ],
            correctIndex: 2,
            explanation:
              "New Jersey had no Lieutenant Governor until a constitutional amendment created the office; the first took office in January 2010.",
            sourceLessonSlug: "nj-governor",
          },
          {
            prompt: "How are New Jersey judges chosen?",
            options: [
              "Elected by voters in partisan races",
              "Nominated by the Governor and confirmed by the Senate; tenure to age 70 after reappointment",
              "Elected by the Legislature",
              "Chosen by a citizens' commission",
            ],
            correctIndex: 1,
            explanation:
              "New Jersey judges are appointed by the Governor with Senate consent, serve an initial 7-year term, and gain tenure to 70 if reappointed.",
            sourceLessonSlug: "nj-legislature-courts",
          },
          {
            prompt: "How are New Jersey's 40 legislative districts represented?",
            options: [
              "Each elects two senators and one Assembly member",
              "Each elects one senator and two Assembly members",
              "Senators are statewide; Assembly members by district",
              "Each elects three senators",
            ],
            correctIndex: 1,
            explanation:
              "Like Arizona and Washington, each of New Jersey's 40 districts elects one senator and two Assembly members.",
            sourceLessonSlug: "nj-legislature-courts",
          },
          {
            prompt: "Can New Jersey citizens put a new law on the ballot by petition?",
            options: [
              "Yes, New Jersey has a strong initiative",
              "No — New Jersey has no citizen initiative; only the Legislature can refer amendments to voters",
              "Only in even years",
              "Only for school budgets",
            ],
            correctIndex: 1,
            explanation:
              "New Jersey has no citizen initiative; the Legislature places constitutional amendments before voters for ratification.",
            sourceLessonSlug: "nj-bill-to-law",
          },
          {
            prompt: "What is a New Jersey gubernatorial 'conditional veto'?",
            options: [
              "A veto that expires after a year",
              "The Governor returns a bill with specific proposed changes for the Legislature to consider",
              "A veto only the courts can issue",
              "A veto of a federal law",
            ],
            correctIndex: 1,
            explanation:
              "The conditional veto lets the strong New Jersey Governor send a bill back with proposed amendments, a distinctive executive power.",
            sourceLessonSlug: "nj-bill-to-law",
          },
          {
            prompt: "What were New Jersey county boards called before 2021?",
            options: [
              "Boards of Supervisors",
              "The Board of Chosen Freeholders",
              "County Councils",
              "Parish Boards",
            ],
            correctIndex: 1,
            explanation:
              "New Jersey renamed the centuries-old 'Board of Chosen Freeholders' to the 'Board of County Commissioners,' effective 2021.",
            sourceLessonSlug: "nj-local-government",
          },
          {
            prompt: "In which years does New Jersey elect its Governor?",
            options: [
              "The same year as the U.S. President",
              "Odd-numbered years (e.g., 2025, 2029), separate from the presidential cycle",
              "Every two years",
              "Only in leap years",
            ],
            correctIndex: 1,
            explanation:
              "New Jersey, like Virginia, holds its gubernatorial elections in odd-numbered years.",
            sourceLessonSlug: "nj-elections-involved",
          },
          {
            prompt: "Why does this course tell you to VERIFY New Jersey's election details?",
            options: [
              "Because New Jersey has no elections office",
              "Because deadlines, early-voting days, and mail rules change and are run by county officials — confirm at nj.gov/state/elections",
              "Because only Congress sets them",
              "Because voting is secret",
            ],
            correctIndex: 1,
            explanation:
              "New Jersey elections are administered at the county level and rules change, so the authoritative, current source is nj.gov/state/elections.",
            sourceLessonSlug: "nj-elections-involved",
          },
        ],
      },
    },
  ],
};
