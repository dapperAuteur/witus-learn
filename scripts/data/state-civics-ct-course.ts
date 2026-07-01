// Authored "Connecticut Civics: How Your State Government Works" — the Connecticut entry
// in the per-state Civics layer on Learn.WitUS. State-level companion to the general
// Civics courses: those teach the SYSTEM; this teaches Connecticut's version.
//
// Factual and strictly non-partisan. Every content lesson is cited (APA 7 in-line +
// a `## Sources` bibliography) to CONNECTICUT'S OWN OFFICIAL SOURCES: the General
// Assembly (cga.ct.gov), the Secretary of the State / elections (portal.ct.gov/sots),
// the Judicial Branch (jud.ct.gov), and the Connecticut Constitution (1965).
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. Connecticut
// abolished county government (1960) and recently adopted early voting (2024). Time-
// sensitive items are flagged and point learners to the Secretary of the State.
//
// Organized into sections (course modules), ending with a fill-in exercise + a final
// quiz whose every question links back to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_CT_COURSE: AuthoredCourse = {
  title: "Connecticut Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the state of Connecticut governs itself — and how you take part where you live. Connecticut is 'The Constitution State,' a nickname honoring its 1639 Fundamental Orders — often called the first written constitution to frame a government. It is also one of the few states that ABOLISHED county government entirely (in 1960): Connecticut has no county governments at all — its 169 towns and the state do everything. You'll learn Connecticut's Constitution of 1965, its plural executive, its General Assembly of 36 senators and 151 representatives, how the Legislature appoints its judges, and its town-based local government. It also notes Connecticut recently added early voting. Time-sensitive facts are flagged, pointing to the Secretary of the State. Cited to Connecticut's own official sources (cga.ct.gov, portal.ct.gov/sots, jud.ct.gov).",
  lessons: [
    // ── Section 1: The Constitution State ────────────────────────────────
    {
      slug: "ct-constitution-state",
      title: "1 · 'The Constitution State' and the Fundamental Orders of 1639",
      section: "What Makes Connecticut Unique",
      body: `Connecticut's nickname is **"The Constitution State"** — and it comes from a remarkable document: the **Fundamental Orders of 1639** (Connecticut Secretary of the State, n.d.).

**Why it matters.** In 1639, the towns of Hartford, Windsor, and Wethersfield adopted the **Fundamental Orders**, a written framework of self-government. Many historians call it **one of the first written constitutions in the Western tradition to establish a government by the consent of the governed** — which is why Connecticut proudly calls itself the Constitution State. It set an early precedent for the idea that **a written charter, not a king, defines the government's powers.**

Connecticut governs today under its **Constitution of 1965** — a relatively modern rewrite of an older order (Connecticut had long governed under its colonial charter and then an 1818 constitution). Connecticut became the **5th state on January 9, 1788.**

Connecticut is also nicknamed **"the Land of Steady Habits,"** reflecting a tradition of stable, orderly government. Two features stand out and lead this course: Connecticut **abolished county government entirely**, and its **Legislature appoints the judges** — both covered ahead.

**A note this course keeps returning to:** state facts **vary and change.** Everything here is current as of authoring, but Connecticut's own government (cga.ct.gov, portal.ct.gov/sots, jud.ct.gov) is the authoritative source. When something is time-sensitive — like Connecticut's new early voting — we say so.

**Check yourself.** Why is Connecticut called "The Constitution State," and what document is the nickname based on?

## Sources
- Connecticut Secretary of the State. (n.d.). *The Fundamental Orders of 1639 and 'The Constitution State'*. portal.ct.gov/sots. https://portal.ct.gov/sots/
- Connecticut General Assembly. (n.d.). *Constitution of the State of Connecticut (1965)*. cga.ct.gov. https://www.cga.ct.gov/`,
    },

    // ── Section 2: No county government ──────────────────────────────────
    {
      slug: "ct-no-counties",
      title: "2 · Connecticut abolished county government (1960)",
      section: "What Makes Connecticut Unique",
      body: `Here is Connecticut's most distinctive structural feature: it is one of the very few states with **NO county government at all** (Connecticut General Assembly, n.d.).

**What happened.** In **1960, Connecticut abolished its county governments.** The eight historic counties still exist **only as geographic and (for a time) judicial reference areas** — there are **no county commissioners, no county councils, no county budgets, and no county services.** Everything a county does elsewhere — courts, jails, records, roads, social services — is handled either by the **state** or by the **towns** (Connecticut General Assembly, n.d.).

⚠️ **A recent update:** because federal programs and data often assume "counties," Connecticut in recent years designated **nine "planning regions"** (councils of governments) to serve as **county-equivalents for federal statistical purposes** — but these are **regional planning bodies, not general-purpose county governments.** So if you see Connecticut "counties" on a federal map or census table, remember: **they have no government.** Confirm current regional arrangements at the state's sites.

**The result: a two-tier system.** Connecticut government is essentially **the state + the towns**, with **no county layer** in between. This makes the **town** unusually important (next lesson) and the **state** unusually central — a genuinely distinctive American arrangement, shared only with a couple of other states (like Rhode Island).

**Check yourself.** What did Connecticut do to its county governments in 1960, and who provides "county-type" services now?

## Sources
- Connecticut General Assembly. (n.d.). *The abolition of county government (1960); planning regions*. cga.ct.gov. https://www.cga.ct.gov/
- Connecticut Secretary of the State. (n.d.). *Connecticut's counties and planning regions*. portal.ct.gov/sots. https://portal.ct.gov/sots/`,
    },

    // ── Section 3: The executive + General Assembly ──────────────────────
    {
      slug: "ct-executive-legislature",
      title: "3 · The executive and the General Assembly",
      section: "The Three Branches",
      body: `**Executive — a plural executive.** Connecticut voters elect several statewide officials (Connecticut Secretary of the State, n.d.):
- The **Governor** and **Lieutenant Governor** (nominated separately in primaries, then running **together** in the general election),
- the **Secretary of the State** (who runs elections),
- the **State Treasurer**,
- the **State Comptroller**, and
- the **Attorney General.**
All serve **4-year terms** with **no term limits.**

**Legislative — the Connecticut General Assembly.** A bicameral body meeting in Hartford (Connecticut General Assembly, n.d.):
- **House of Representatives — 151 members**, elected to **2-year terms.**
- **Senate — 36 senators**, elected to **2-year terms** (yes — Connecticut senators also serve 2-year terms).
- It is a **part-time citizen legislature** with sessions of fixed length (longer in odd "budget" years).

**Judicial — the courts.** District courts up through the Appellate Court and the **Connecticut Supreme Court** (7 justices). How Connecticut selects judges — via the Legislature — is distinctive and covered next.

**Veto and override.** The Governor may veto bills (and line-item veto appropriations); the General Assembly overrides with a **two-thirds vote of each chamber.**

**Check yourself.** Which statewide executive officers do Connecticut voters elect, and how long is a Connecticut state senator's term?

## Sources
- Connecticut Secretary of the State. (n.d.). *Statewide elected officials*. portal.ct.gov/sots. https://portal.ct.gov/sots/
- Connecticut General Assembly. (n.d.). *The General Assembly: House and Senate*. cga.ct.gov. https://www.cga.ct.gov/`,
    },

    // ── Section 4: How Connecticut picks judges + how a bill becomes law ─
    {
      slug: "ct-courts-lawmaking",
      title: "4 · How Connecticut picks its judges, and how a bill becomes law",
      section: "Making Law",
      body: `**How Connecticut chooses judges — nominated, then appointed by the Legislature.** Connecticut does **not** elect its judges in campaigns. Instead (Connecticut Judicial Branch, n.d.):
1. A **Judicial Selection Commission** screens candidates and recommends qualified nominees.
2. The **Governor nominates** a judge from those recommended.
3. The **General Assembly (the Legislature) appoints** the judge by vote, for an **8-year term** (renewable by reappointment through the same process).
So Connecticut blends a **screening commission**, a **gubernatorial nomination**, and a **legislative appointment** — keeping judges out of elections while giving the elected branches the final say.

**How a bill becomes law** (Connecticut General Assembly, n.d.):
1. **Introduction** in the House or Senate; **committee** hearings (Connecticut uses **joint committees** shared by both chambers — an efficiency feature); **floor votes** in both chambers.
2. **Governor** — sign, veto (two-thirds override), or line-item veto appropriations.

**No statewide citizen initiative.** Connecticut citizens **cannot** put a statute or amendment on the ballot by petition. **Amendments** are proposed by the **General Assembly** and then ratified by the **voters** (and the state periodically asks voters whether to call a **constitutional convention**). So the citizen role is **ratification**, not initiation.

**Check yourself.** Who appoints Connecticut's judges, and can Connecticut citizens start a law by initiative?

## Sources
- Connecticut Judicial Branch. (n.d.). *Judicial selection: the commission, nomination, and legislative appointment*. jud.ct.gov. https://www.jud.ct.gov/
- Connecticut General Assembly. (n.d.). *How a bill becomes law; joint committees; amending the constitution*. cga.ct.gov. https://www.cga.ct.gov/`,
    },

    // ── Section 5: Town government + getting involved ────────────────────
    {
      slug: "ct-towns-involved",
      title: "5 · Town government and how to take part",
      section: "Get Involved",
      body: `**Local government is the town.** Because Connecticut has **no counties** (Lesson 2), the **town** is the workhorse of local government (Connecticut General Assembly, n.d.):
- Connecticut has **169 towns**, each with its own government. Many smaller towns still use a **town meeting** and a **board of selectmen**; larger towns and cities use **mayor-council** or **council-manager** forms.
- Towns handle **schools, police, roads, zoning, and local services** — the things a county might do elsewhere.
- **Regional councils of governments** (the "planning regions") coordinate some services across towns, but they are **not** general-purpose governments.

**Voting.** ⚠️ **Time-sensitive:** Connecticut recently **expanded voting access** — voters approved **early in-person voting** (used starting in 2024) and **no-excuse absentee voting**, both relatively new for a state that had long been restrictive. Rules and deadlines are administered by **town registrars of voters** and can change — confirm the **current** details at the **Secretary of the State** (portal.ct.gov/sots) before you vote.

**How to take part:**
- **Register and vote** — take advantage of Connecticut's new **early voting**; check your status at portal.ct.gov/sots.
- **Show up at Town Hall.** With no county layer, your **town meeting, board of selectmen, or town/city council** — plus the **local board of education** — make most local decisions.
- **Contact your legislators** in Hartford — you have one Representative and one Senator.
- **Weigh in on amendments and conventions** — Connecticut voters ratify amendments and periodically vote on calling a constitutional convention.
- **Run** — board of selectmen, board of education, and town/city council are reachable local starting points.

**Check yourself.** Since Connecticut has no counties, what is the key unit of local government — and what new voting option did Connecticut adopt?

## Sources
- Connecticut General Assembly. (n.d.). *Town government and regional councils*. cga.ct.gov. https://www.cga.ct.gov/
- Connecticut Secretary of the State. (n.d.). *Voting in Connecticut: early voting and absentee voting*. portal.ct.gov/sots. https://portal.ct.gov/sots/`,
    },

    // ── Section 6: Practice (fill in the blanks) ─────────────────────────
    {
      slug: "ct-exercise",
      title: "6 · Practice: fill in the blanks",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about Connecticut state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt:
              "Connecticut is nicknamed 'The ___ State,' after its Fundamental Orders of 1639.",
            answer: "Constitution",
            accept: ["constitution"],
            explanation:
              "The 1639 Fundamental Orders are often called one of the first written constitutions framing a government — hence the nickname.",
          },
          {
            prompt:
              "In 1960 Connecticut abolished its ___ governments, leaving the state and towns to do everything.",
            answer: "county",
            accept: ["counties"],
            explanation:
              "Connecticut has no county governments; its historic counties are only geographic references, with planning regions for federal purposes.",
          },
          {
            prompt:
              "Connecticut's current constitution is the Constitution of ___.",
            answer: "1965",
            explanation:
              "Connecticut's modern constitution was adopted in 1965, following its colonial charter and 1818 constitution.",
          },
          {
            prompt:
              "Connecticut's judges are nominated by the Governor and appointed by the ___.",
            answer: "legislature",
            accept: ["Legislature", "General Assembly", "general assembly"],
            explanation:
              "After a Judicial Selection Commission screens candidates, the Governor nominates and the General Assembly appoints judges for 8-year terms.",
          },
          {
            prompt:
              "Connecticut's key unit of local government (since it has no counties) is the ___; there are 169 of them.",
            answer: "town",
            accept: ["towns"],
            explanation:
              "The 169 towns handle schools, police, roads, and zoning — the county's role elsewhere.",
          },
          {
            prompt:
              "TRUE or FALSE: Connecticut has a statewide citizen initiative for ballot measures.",
            answer: "false",
            explanation:
              "False. Connecticut has no statewide initiative; the General Assembly proposes amendments, which voters ratify.",
          },
        ],
      },
    },

    // ── Section 7: Final quiz ────────────────────────────────────────────
    {
      slug: "ct-quiz",
      title: "7 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "Why is Connecticut called 'The Constitution State'?",
            options: [
              "It wrote the U.S. Constitution",
              "For its 1639 Fundamental Orders, often called one of the first written constitutions framing a government",
              "It has the most amendments",
              "It has no constitution",
            ],
            correctIndex: 1,
            explanation:
              "The nickname honors the Fundamental Orders of 1639, an early written framework of self-government.",
            sourceLessonSlug: "ct-constitution-state",
          },
          {
            prompt: "What did Connecticut do to county government in 1960?",
            options: [
              "Strengthened it",
              "Abolished it — Connecticut has no county governments",
              "Merged all counties into one",
              "Created new counties",
            ],
            correctIndex: 1,
            explanation:
              "Connecticut abolished county government in 1960; the state and towns provide all services.",
            sourceLessonSlug: "ct-no-counties",
          },
          {
            prompt: "Who provides 'county-type' services in Connecticut today?",
            options: [
              "County commissioners",
              "The state and the towns (with regional planning bodies for federal purposes)",
              "The federal government",
              "Private companies",
            ],
            correctIndex: 1,
            explanation:
              "With no county governments, the state and towns handle services; 'planning regions' serve as county-equivalents only for federal statistics.",
            sourceLessonSlug: "ct-no-counties",
          },
          {
            prompt: "How long is a Connecticut state senator's term?",
            options: ["2 years", "4 years", "6 years", "8 years"],
            correctIndex: 0,
            explanation:
              "Both the 151-member House and the 36-member Senate serve 2-year terms in Connecticut.",
            sourceLessonSlug: "ct-executive-legislature",
          },
          {
            prompt: "Which statewide officer runs Connecticut's elections?",
            options: [
              "The Attorney General",
              "The Secretary of the State",
              "The Comptroller",
              "The Chief Justice",
            ],
            correctIndex: 1,
            explanation:
              "Connecticut's elected Secretary of the State administers elections.",
            sourceLessonSlug: "ct-executive-legislature",
          },
          {
            prompt: "How are Connecticut's judges chosen?",
            options: [
              "Elected in partisan races",
              "Screened by a commission, nominated by the Governor, and appointed by the General Assembly for 8-year terms",
              "Appointed for life by the Governor",
              "Chosen by town meeting",
            ],
            correctIndex: 1,
            explanation:
              "Connecticut blends a screening commission, gubernatorial nomination, and legislative appointment for its judges.",
            sourceLessonSlug: "ct-courts-lawmaking",
          },
          {
            prompt: "Can Connecticut citizens put a law on the ballot by initiative?",
            options: [
              "Yes, a strong initiative",
              "No — Connecticut has no statewide initiative; the General Assembly proposes amendments for voters",
              "Only in even years",
              "Only for schools",
            ],
            correctIndex: 1,
            explanation:
              "Connecticut has no statewide initiative; citizens ratify amendments the Legislature refers.",
            sourceLessonSlug: "ct-courts-lawmaking",
          },
          {
            prompt: "Since Connecticut has no counties, what is its key unit of local government?",
            options: [
              "The parish",
              "The town (169 of them)",
              "The borough",
              "The precinct",
            ],
            correctIndex: 1,
            explanation:
              "Connecticut's 169 towns handle local services that counties provide elsewhere.",
            sourceLessonSlug: "ct-towns-involved",
          },
          {
            prompt: "Which voting change did Connecticut recently adopt?",
            options: [
              "It banned absentee voting",
              "It added early in-person voting (used starting 2024) and no-excuse absentee voting",
              "It ended all elections",
              "It required property ownership",
            ],
            correctIndex: 1,
            explanation:
              "Connecticut, long restrictive, recently added early in-person voting and no-excuse absentee voting.",
            sourceLessonSlug: "ct-towns-involved",
          },
          {
            prompt: "Why does this course tell you to VERIFY Connecticut's regions and voting rules?",
            options: [
              "Because Connecticut has no government website",
              "Because planning-region arrangements and new voting rules are recent and change, and towns run elections — confirm at portal.ct.gov/sots",
              "Because only Congress sets them",
              "Because voting is secret",
            ],
            correctIndex: 1,
            explanation:
              "Connecticut's county-equivalent regions and early-voting rollout are recent and administered locally, so the Secretary of the State is authoritative.",
            sourceLessonSlug: "ct-towns-involved",
          },
        ],
      },
    },
  ],
};
