// Authored "Arkansas Civics: How Your State Government Works" — the Arkansas entry in
// the per-state Civics layer on Learn.WitUS. State-level companion to the general
// Civics courses (US Civics 101, US Constitution 101, State vs Federal Power, and US,
// State & Local Government: Who Does What): those teach the SYSTEM; this teaches
// Arkansas's specific version of it.
//
// Factual and strictly non-partisan. Every content lesson is cited (APA 7 in-line +
// a `## Sources` bibliography) to ARKANSAS'S OWN OFFICIAL SOURCES: the General
// Assembly (arkleg.state.ar.us), the Secretary of State / elections (sos.arkansas.gov,
// incl. the official Initiatives & Referenda Handbook), and the Judiciary
// (arcourts.gov). The Arkansas Constitution's own text (via the state and Justia's
// mirror of it) supports the amendment-number citations.
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. The most
// time-sensitive item — flagged in-text — is the INITIATIVE-RULE FLUX: Arkansas's
// citizen-initiative process (Amendment 7, 1920) has recently been TIGHTENED by the
// Legislature (e.g., a county-distribution requirement and new canvasser/ID and
// fiscal-impact rules in 2023–2025), and further changes are in motion. The course
// describes the process as "recently tightened and in flux" and points learners to
// the Secretary of State's current Initiatives & Referenda Handbook rather than
// asserting fixed signature-distribution rules.
//
// Organized into sections (course modules), ending with a fill-in exercise + a final
// quiz whose every question links back to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_AR_COURSE: AuthoredCourse = {
  title: "Arkansas Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the state of Arkansas governs itself — and how you take part where you live. You'll learn Arkansas's 1874 constitution and its 100-plus amendments; the citizen initiative & referendum added by Amendment 7 (1920); the three branches, including SEVEN separately-elected executive officers (with a separately-elected Lieutenant Governor) and a nonpartisan-ELECTED Supreme Court (Amendment 80, 2001) rather than merit selection; how a bill becomes an Arkansas law in a General Assembly of a 35-member Senate and a 100-member House, where a veto is overridden by a SIMPLE majority; local government across Arkansas's 75 counties (a county judge plus a quorum court of justices of the peace; no townships); and Arkansas's elections — photo ID, no-excuse early voting, excuse-required mail voting, and a 30-day registration deadline. It closes on how to get involved. Cited to Arkansas's own official sources (arkleg.state.ar.us, sos.arkansas.gov, arcourts.gov). Because state facts vary and change, the course flags that Arkansas's initiative rules were recently tightened and remain in flux — and points you to the Secretary of State's current handbook rather than asserting fixed signature-distribution rules.",
  lessons: [
    // ── Section 1: The Arkansas Constitution ─────────────────────────────
    {
      slug: "ar-constitution",
      title: "1 · Arkansas's 1874 constitution and Amendment 7",
      section: "The Arkansas Constitution",
      body: `Arkansas governs itself under a constitution adopted in **1874** — its **fifth** constitution, written after the Reconstruction era and deliberately built to **limit the power of state government** (especially the governor) after the turbulence that preceded it. That "keep government on a short leash" instinct still shapes Arkansas government today, and it has been **amended more than 100 times** since (Arkansas Secretary of State, n.d.; Encyclopedia of Arkansas, n.d.).

Because the 1874 document is so heavily amended, **the amendments are where a lot of the action is** — several of the most important features of modern Arkansas government come from specific numbered amendments you'll meet in this course:

- **Amendment 7 (1920) — the citizen initiative and referendum (Article 5, §1).** This is Arkansas's version of direct democracy. It lets citizens **propose laws or constitutional amendments by petition (initiative)** and **refer a law the Legislature passed to the ballot (referendum)**. Historically the signature thresholds have been framed as roughly **8% of voters for a proposed statute, 10% for a constitutional amendment, and 6% for a referendum** — but see the flagged elections lesson: **the rules around this process have recently been tightened and are in flux.**
- **Amendment 63 (1984)** set **four-year terms** for the state's constitutional officers.
- **Amendment 80 (2001)** rewrote the judicial article and made Arkansas's appellate courts **nonpartisan elected** (not merit-selected).
- **Amendment 94 (2014)** set the current **legislative term limits** (a combined cap you'll see in the branches lesson).

**A note this course keeps returning to:** state facts **vary and change**, and Arkansas's amendment-heavy constitution changes relatively often — its initiative rules especially. Everything here is current as of authoring, but Arkansas's own government (arkleg.state.ar.us, sos.arkansas.gov, arcourts.gov) is the authoritative source. When something is time-sensitive or in flux, we say so.

**Check yourself.** In what year was Arkansas's current constitution adopted, and what did Amendment 7 (1920) give Arkansas citizens the power to do?

## Sources
- Arkansas Secretary of State. (n.d.). *Constitution of the State of Arkansas of 1874*. SOS.arkansas.gov. https://www.sos.arkansas.gov/
- Encyclopedia of Arkansas. (n.d.). *Arkansas Constitution of 1874*. https://encyclopediaofarkansas.net/`,
    },

    // ── Section 2: The three state branches ──────────────────────────────
    {
      slug: "ar-three-branches",
      title: "2 · The three branches — and seven elected executives",
      section: "The Three Branches",
      body: `Arkansas splits power into three branches, with two features that stand out: a **plural elected executive** and a **weak-veto governor**.

**Legislative — the Arkansas General Assembly** (Arkansas General Assembly, n.d.):
- **Senate — 35 senators, 4-year terms** (staggered, so not all are up at once).
- **House of Representatives — 100 representatives, 2-year terms.**
- **Term limits (Amendment 94, 2014):** a **combined 16-year** cap on total service in the General Assembly (House and Senate time counts together toward the 16 years). ⚠️ Term-limit rules have been amended before and could change — confirm the current cap at arkleg.state.ar.us.

**Executive — SEVEN separately elected officers.** This is a defining Arkansas fact: the executive branch is **plural**, with **seven constitutional officers each elected on their own** (Encyclopedia of Arkansas, n.d.):
1. **Governor**
2. **Lieutenant Governor** — and note: in Arkansas the Lt. Governor is **separately elected**, *not* chosen as a running mate on the governor's ticket. So Arkansas can (and sometimes does) have a governor and lieutenant governor from **different parties**.
3. **Secretary of State**
4. **Treasurer of State**
5. **Auditor of State**
6. **Attorney General**
7. **Commissioner of State Lands**
All serve **four-year terms** under **Amendment 63 (1984)**.

**Judicial — a nonpartisan ELECTED Supreme Court.** Covered fully in the next lesson: unlike Indiana or Arizona's big counties, Arkansas **elects** its Supreme Court justices (nonpartisan races), rather than using merit selection (Arkansas Judiciary, n.d.).

**Veto override — a SIMPLE majority.** Like Indiana (and unlike Arizona), **Arkansas's General Assembly can override the governor's veto with a SIMPLE majority** of each chamber (Arkansas General Assembly, n.d.). Combined with a governor who shares power with six other elected executives, this makes the Arkansas governor comparatively **limited** — exactly what the 1874 constitution intended.

**Check yourself.** Give the size of each chamber of the Arkansas General Assembly, name what's distinctive about how Arkansas's Lieutenant Governor is chosen, and state the vote needed to override the governor's veto.

## Sources
- Arkansas General Assembly. (n.d.). *About the General Assembly*. Arkleg.state.ar.us. https://arkleg.state.ar.us/
- Encyclopedia of Arkansas. (n.d.). *Constitutional officers / term limits*. https://encyclopediaofarkansas.net/`,
    },
    {
      slug: "ar-courts",
      title: "3 · Arkansas's courts: a nonpartisan ELECTED Supreme Court",
      section: "The Three Branches",
      body: `Arkansas's way of choosing its highest judges is a clean contrast to the two states most often compared with it — and it flows from **Amendment 80 (2001)**, which rewrote the judicial article of the constitution (Arkansas Judiciary, n.d.).

**Nonpartisan, elected — NOT merit selection.** For the **Arkansas Supreme Court** (**seven justices, 8-year terms**) and the **Court of Appeals**, Arkansas holds **nonpartisan statewide elections**. "Nonpartisan" means the candidates run **without a party label** on the ballot; "elected" means voters — not a governor picking from a commission's list — put them on the bench (Arkansas Judiciary, n.d.).

This is worth underlining because it's the **opposite** of merit selection:
- **Indiana** and **Arizona's large counties** use *merit selection* (a commission nominates, the governor appoints, voters later retain or not).
- **Arkansas** simply **elects** its appellate judges in nonpartisan races. There's no nominating commission and no gubernatorial appointment for these seats.

The justices serve **staggered 8-year terms**, so it's unlikely the whole court turns over in a single election — a stability feature built into Amendment 80.

**Why this matters civically:** in Arkansas, your **judicial races are real elections you vote in** — not yes/no retention questions. You may see candidates for the Supreme Court and Court of Appeals on your ballot with **no party listed**, which is by design (nonpartisan). Knowing that these are contested, nonpartisan elections tells you to research the candidates on the merits rather than looking for a party cue that isn't there.

**Check yourself.** How does Arkansas choose its Supreme Court justices, how is that different from merit selection, and what does "nonpartisan" mean on your judicial ballot?

## Sources
- Arkansas Judiciary. (n.d.). *Arkansas Supreme Court / judicial selection (Amendment 80)*. Arcourts.gov. https://www.arcourts.gov/courts/supreme-court
- Arkansas Secretary of State. (n.d.). *Arkansas Constitution — Amendment 80*. SOS.arkansas.gov. https://www.sos.arkansas.gov/`,
    },

    // ── Section 3: How a bill becomes a state law ────────────────────────
    {
      slug: "ar-bill-to-law",
      title: "4 · How a bill becomes an Arkansas law",
      section: "How a Bill Becomes State Law",
      body: `A bill in the Arkansas General Assembly follows the familiar two-chamber path, with a weak-veto ending that mirrors the state's "limited governor" design (Arkansas General Assembly, n.d.).

1. **Introduction.** A legislator files a bill in the House or Senate. Arkansas holds a **regular session** (historically a longer one in odd years and a fiscal session in even years), so timing matters for when a bill can move.
2. **Committee.** The bill is assigned to a committee that holds hearings, may amend it, and votes. As everywhere, **most bills die in committee** — the biggest filter.
3. **Floor vote.** If it clears committee, the full chamber debates, may amend, and votes.
4. **The other chamber.** It repeats the process in the second chamber; any differences must be reconciled so both chambers pass **identical** text.
5. **The Governor.** The Governor can **sign** the bill, **let it become law without signature**, or **veto** it.
6. **The Arkansas twist — a SIMPLE-majority override.** If the Governor vetoes, the General Assembly can override with a **simple majority** of each chamber — the same majority that passed the bill. As in Indiana, this makes the veto a **weak** tool and keeps the **Legislature** the center of gravity.

**And don't forget the other lawmaker — the voters.** Because of **Amendment 7**, Arkansans can also make law **without** the Legislature, by **initiative** (petition a law or amendment onto the ballot) or block a law by **referendum**. So, as in Arizona, a bill isn't the *only* route to a new law in Arkansas — though (as the next flagged lesson explains) the rules for that petition route have recently been **tightened**.

**Check yourself.** Order these: committee, floor vote, Governor's action, introduction, the other chamber. Then explain why an Arkansas governor's veto is comparatively weak.

## Sources
- Arkansas General Assembly. (n.d.). *How a bill becomes a law / legislative process*. Arkleg.state.ar.us. https://arkleg.state.ar.us/
- Arkansas Secretary of State. (n.d.). *Initiatives and referenda*. SOS.arkansas.gov. https://www.sos.arkansas.gov/elections/initiatives-and-referenda/`,
    },

    // ── Section 4: Local government in Arkansas ──────────────────────────
    {
      slug: "ar-local-government",
      title: "5 · Local government in Arkansas: 75 counties, quorum courts, no townships",
      section: "Local Government in Arkansas",
      body: `Arkansas's local government has its **own vocabulary** — most notably a **"county judge"** who is an executive (not a courtroom judge) and a **"quorum court"** that is a legislature (not a court). Getting these names right is half the lesson.

**Counties — 75 of them.** Arkansas is divided into **75 counties**, and each is run by two elected parts working together (Arkansas Secretary of State, n.d.):
- **The County Judge** — despite the name, this is the county's **chief executive**, not a courtroom judge. The county judge runs county operations, roads, and the county budget's execution.
- **The Quorum Court** — despite the name, this is the county's **legislative body**. It's made up of elected **Justices of the Peace (JPs)**, who pass county ordinances and appropriate county money. (The old name survives from when JPs literally gathered to form a "quorum.")
Other county officers — **Sheriff, Circuit Clerk, County Clerk, Assessor, Collector, Treasurer, Coroner** — are typically elected as well.

**No townships.** Like Arizona (and unlike Indiana), **Arkansas has no township layer** — **zero townships** as a unit of local government. Below the county, local government is **cities and towns** (municipalities).

**Cities and towns.** Incorporated **municipalities** run local services where people live densely — police, local streets, water in many places, zoning — typically under a **mayor and city council** (or a similar structure).

The practical upshot: if you have a local problem in Arkansas, the two levels to think about are your **county** (county judge + quorum court of JPs) and your **city or town** — not a township. And watch the vocabulary: the "county judge" is your executive and the "quorum court" is your local legislature, which trips up newcomers constantly.

**Check yourself.** How many counties does Arkansas have, what does the "county judge" actually do, what is the "quorum court," and what local layer does Arkansas NOT have?

## Sources
- Arkansas Secretary of State. (n.d.). *Arkansas county government (county judge, quorum court, JPs)*. SOS.arkansas.gov. https://www.sos.arkansas.gov/
- Encyclopedia of Arkansas. (n.d.). *County government in Arkansas*. https://encyclopediaofarkansas.net/`,
    },

    // ── Section 5: Elections & ballot access ─────────────────────────────
    {
      slug: "ar-elections",
      title: "6 · Elections in Arkansas: ID, early voting, and a 30-day deadline",
      section: "Elections & Ballot Access",
      body: `Arkansas runs its own elections, and its everyday rules are a specific mix. (Because election rules change, the current source is always the Arkansas Secretary of State — sos.arkansas.gov.)

**Photo ID to vote.** Arkansas generally requires voters to present a **photo ID** (with a fail-safe process, such as a provisional ballot, for a voter who lacks one at the polls). Confirm the current acceptable-ID list at sos.arkansas.gov (Arkansas Secretary of State, n.d.).

**No-excuse EARLY voting, but excuse-required MAIL voting.** Two different rules that people mix up:
- **Early voting is no-excuse:** any registered voter can vote early, in person, during the early-voting period — you don't need a reason.
- **Absentee voting BY MAIL requires an excuse:** to get a mail ballot you generally must qualify under a listed reason (e.g., you'll be away, illness/disability, etc.). So "no-excuse" applies to *early in-person* voting, **not** to mail voting (Arkansas Secretary of State, n.d.).

**Registration closes 30 days before the election.** Arkansas does **not** have same-day registration; you must be registered about **30 days before Election Day**. Miss the deadline and you can't vote in that election (Arkansas Secretary of State, n.d.).

**Check yourself.** In Arkansas, which kind of voting is "no-excuse" and which kind needs an excuse — and how many days before the election does registration close?

## Sources
- Arkansas Secretary of State. (n.d.). *Voter information — ID, early voting, absentee, registration*. SOS.arkansas.gov. https://www.sos.arkansas.gov/elections/
- Arkansas Secretary of State. (n.d.). *Elections division*. SOS.arkansas.gov. https://www.sos.arkansas.gov/`,
    },
    {
      slug: "ar-initiative-in-flux",
      title: "7 · The citizen initiative — recently tightened & in flux (flagged)",
      section: "Elections & Ballot Access",
      body: `⚠️ **THIS LESSON IS ABOUT RULES THAT ARE CHANGING. Do not memorize fixed signature-distribution numbers — confirm the current rules in the Secretary of State's Initiatives & Referenda Handbook.**

**The baseline (Amendment 7, 1920).** Arkansas is a strong direct-democracy state on paper: **Amendment 7** lets citizens **initiate** a state statute or a constitutional amendment, and **refer** a legislative act to the ballot. The traditional statewide signature thresholds have been framed as roughly **8% of the last gubernatorial vote for an initiated statute, 10% for a constitutional amendment, and 6% for a referendum** (Arkansas Secretary of State, n.d.).

**But the *how* has been tightened — repeatedly and recently.** Over the last several years the Legislature has added requirements that make qualifying a measure harder, and more changes are in motion. Recent examples reported by the state and trackers include (Ballotpedia, n.d.; Arkansas Secretary of State, n.d.):
- A **county-distribution requirement** — collecting a minimum share of signatures from a set number of the state's **75 counties** (rather than concentrating in a few population centers). The exact number of counties and the per-county share have themselves been changed.
- **Canvasser rules** — e.g., requiring petition circulators to inform signers that petition fraud is a crime, to check a signer's **ID**, and to ensure the signer reads (or has read to them) the **ballot title** before signing.
- A **fiscal-impact-statement** requirement for measures.

⚠️ **Because these rules are genuinely in flux, this course will NOT assert a fixed set of signature-distribution numbers.** The specific county-distribution rule, the acceptable methods, and the deadlines can differ from one election cycle to the next and are being litigated and legislated. The authoritative, current source is the **Arkansas Secretary of State's *Initiatives and Referenda Handbook*** for the relevant cycle — check that, not an older summary, before you rely on any specific requirement (Arkansas Secretary of State, n.d.).

**Why flag this so hard?** Ballot-access rules are exactly the kind of "state fact" that **changes between elections** and **varies by cycle**. Asserting a stale number here would be worse than useless — it could send someone down a petition path under rules that no longer apply. The durable skill is: **for the initiative process, always pull the current handbook from sos.arkansas.gov.**

**Check yourself.** What power does Amendment 7 give Arkansans, why does this course refuse to state fixed signature-distribution numbers, and where should you look for the current rules?

## Sources
- Arkansas Secretary of State. (n.d.). *Initiatives and Referenda (current Handbook)*. SOS.arkansas.gov. https://www.sos.arkansas.gov/elections/initiatives-and-referenda/
- Ballotpedia. (n.d.). *Laws governing the initiative process in Arkansas*. https://ballotpedia.org/Laws_governing_the_initiative_process_in_Arkansas`,
    },

    // ── Section 6: Get involved where you live ───────────────────────────
    {
      slug: "ar-get-involved",
      title: "8 · Get involved where you live in Arkansas",
      section: "Get Involved Where You Live",
      body: `Arkansas gives you several levers — candidate elections, direct democracy, and unusually accessible local bodies. Here's where to pull them.

**Register and vote — mind the 30-day deadline.** Register (and check your registration) **at least ~30 days before** any election, since Arkansas has no same-day registration. Bring your **photo ID**. Remember the split: **early in-person voting is no-excuse**, but a **mail ballot needs an excuse**. Start at sos.arkansas.gov (Arkansas Secretary of State, n.d.).

**Vote your judicial races on the merits.** Because Arkansas **elects** its Supreme Court and Court of Appeals in **nonpartisan** races (Lesson 3), you won't see a party label to guide you — so research the candidates directly before you vote.

**Use direct democracy — but check the current rules first.** Amendment 7 lets you **initiate** or **refer** measures. But as the flagged lesson warns, the **signature and canvasser rules have been tightened and are in flux** — so before you sign, circulate, or launch a petition, pull the **current Initiatives & Referenda Handbook** from sos.arkansas.gov (Arkansas Secretary of State, n.d.).

**Contact your legislators.** You have **one state senator and one state representative** in the General Assembly, plus your members of Congress. Because the governor's veto is weak and executive power is split among seven elected officers, the **Legislature is the center of gravity** — look up your legislators and track bills at **arkleg.state.ar.us**, and testify or comment in committee where bills live or die (Arkansas General Assembly, n.d.).

**Show up locally — county and city.** Your **Quorum Court** (the Justices of the Peace) and your **city/town council** meetings are public and set your local taxes, ordinances, and services (no townships to track in Arkansas). These smaller rooms are where one voice carries the most weight — and remember the vocabulary: the **county judge** is your local executive, the **quorum court** is your local legislature.

**Check yourself.** Name three ways to get involved in Arkansas government, and explain why you must check the current handbook before relying on the state's initiative rules.

## Sources
- Arkansas Secretary of State. (n.d.). *Voting, registration, and citizen petitions*. SOS.arkansas.gov. https://www.sos.arkansas.gov/elections/
- Arkansas General Assembly. (n.d.). *Find your legislators / track legislation*. Arkleg.state.ar.us. https://arkleg.state.ar.us/`,
    },

    // ── Section 7: Practice ──────────────────────────────────────────────
    {
      slug: "ar-practice",
      title: "9 · Practice: Arkansas civics fill-in",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about Arkansas state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt: "Arkansas's current constitution was adopted in the year ___.",
            answer: "1874",
            explanation:
              "Arkansas's fifth and current constitution dates to 1874 and has been amended more than 100 times.",
          },
          {
            prompt:
              "The Arkansas Senate has 35 members and the Arkansas House has ___ members.",
            answer: "100",
            accept: ["one hundred"],
            explanation:
              "The General Assembly is a 35-member Senate (4-year staggered terms) and a 100-member House (2-year terms).",
          },
          {
            prompt:
              "In Arkansas, the Lieutenant Governor is separately ___ — not a running mate on the governor's ticket.",
            answer: "elected",
            explanation:
              "Arkansas separately elects its Lt. Governor, so the governor and lieutenant governor can be from different parties.",
          },
          {
            prompt:
              "Arkansas elects its Supreme Court justices in ___ races (no party label), rather than using merit selection.",
            answer: "nonpartisan",
            accept: ["non-partisan"],
            explanation:
              "Amendment 80 (2001) made Arkansas's appellate courts nonpartisan and elected — seven justices, 8-year terms.",
          },
          {
            prompt: "Arkansas is divided into ___ counties.",
            answer: "75",
            accept: ["seventy-five", "seventy five"],
            explanation:
              "Arkansas has 75 counties, each run by a county judge (executive) and a quorum court of JPs (legislature); no townships.",
          },
          {
            prompt:
              "TRUE or FALSE: this course states the exact, fixed signature-distribution numbers for an Arkansas ballot initiative.",
            answer: "false",
            explanation:
              "False. Arkansas's initiative rules were recently tightened and remain in flux, so the course points you to the Secretary of State's current handbook instead.",
          },
        ],
      },
    },

    // ── Section 8: Final quiz ────────────────────────────────────────────
    {
      slug: "ar-quiz",
      title: "10 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What did Amendment 7 (1920) add to the Arkansas Constitution?",
            options: [
              "A state income tax",
              "The citizen initiative and referendum",
              "A Lieutenant Governor",
              "Merit selection of judges",
            ],
            correctIndex: 1,
            explanation:
              "Amendment 7 (Article 5, §1) gave Arkansans the initiative (propose laws/amendments) and referendum (refer laws to the ballot).",
            sourceLessonSlug: "ar-constitution",
          },
          {
            prompt: "What is distinctive about Arkansas's executive branch?",
            options: [
              "The governor appoints all other executives",
              "There are seven separately elected constitutional officers, including a separately-elected Lieutenant Governor",
              "There is only one elected executive",
              "The Lieutenant Governor runs on the governor's ticket",
            ],
            correctIndex: 1,
            explanation:
              "Arkansas has seven separately elected constitutional officers; the Lt. Governor is elected on their own, so they can be from a different party than the governor.",
            sourceLessonSlug: "ar-three-branches",
          },
          {
            prompt: "How does Arkansas choose its Supreme Court justices?",
            options: [
              "Merit selection (commission + governor + retention)",
              "Partisan statewide elections",
              "Nonpartisan statewide elections",
              "Appointment by the Legislature",
            ],
            correctIndex: 2,
            explanation:
              "Under Amendment 80 (2001), Arkansas elects its seven Supreme Court justices in nonpartisan races (8-year staggered terms) — not merit selection.",
            sourceLessonSlug: "ar-courts",
          },
          {
            prompt: "How can the Arkansas General Assembly override the governor's veto?",
            options: [
              "With a two-thirds vote of each chamber",
              "With a three-fourths vote",
              "With a simple majority of each chamber",
              "It cannot override a veto",
            ],
            correctIndex: 2,
            explanation:
              "Arkansas overrides a veto with a simple majority — the same majority that passed the bill — making the governor's veto comparatively weak.",
            sourceLessonSlug: "ar-bill-to-law",
          },
          {
            prompt: "In Arkansas county government, what is the 'county judge'?",
            options: [
              "The judge who runs criminal trials",
              "The county's chief EXECUTIVE (not a courtroom judge)",
              "A member of the Supreme Court",
              "The head of the quorum court's legal staff",
            ],
            correctIndex: 1,
            explanation:
              "Despite the name, the county judge is the county's chief executive; the quorum court (justices of the peace) is the county's legislative body.",
            sourceLessonSlug: "ar-local-government",
          },
          {
            prompt: "Which local layer does Arkansas NOT have?",
            options: ["Counties", "Cities and towns", "Townships", "Quorum courts"],
            correctIndex: 2,
            explanation:
              "Arkansas has no townships — its 75 counties (county judge + quorum court) and its cities/towns are the local layers.",
            sourceLessonSlug: "ar-local-government",
          },
          {
            prompt: "Which statement about Arkansas voting rules is correct?",
            options: [
              "Early in-person voting requires an excuse; mail voting is no-excuse",
              "Early in-person voting is no-excuse; mail (absentee) voting requires an excuse",
              "Both early and mail voting require an excuse",
              "Neither early nor mail voting is allowed",
            ],
            correctIndex: 1,
            explanation:
              "Early in-person voting is no-excuse for any registered voter; absentee voting by mail generally requires qualifying under a listed excuse.",
            sourceLessonSlug: "ar-elections",
          },
          {
            prompt: "About how many days before an election does Arkansas voter registration close?",
            options: ["Same day", "10 days", "30 days", "90 days"],
            correctIndex: 2,
            explanation:
              "Arkansas has no same-day registration; you must be registered about 30 days before Election Day.",
            sourceLessonSlug: "ar-elections",
          },
          {
            prompt: "Why does this course NOT state fixed signature-distribution numbers for Arkansas ballot initiatives?",
            options: [
              "Because Arkansas has no initiative process",
              "Because the initiative rules were recently tightened and remain in flux — so you must check the current handbook",
              "Because the numbers are secret",
              "Because only the governor knows them",
            ],
            correctIndex: 1,
            explanation:
              "Arkansas's initiative rules (county distribution, canvasser/ID, fiscal impact) have been tightened recently and are in flux; the current source is the Secretary of State's Initiatives & Referenda Handbook.",
            sourceLessonSlug: "ar-initiative-in-flux",
          },
          {
            prompt: "Because Arkansas's governor's veto is weak and executive power is split among seven elected officers, what is a key lever for changing state law?",
            options: [
              "Petitioning the governor alone",
              "Electing and lobbying your state legislators (and testifying in committee)",
              "Contacting the U.S. President",
              "Filing in federal court only",
            ],
            correctIndex: 1,
            explanation:
              "With a weak veto and a plural executive, the Legislature is the center of gravity — electing/lobbying legislators and testifying in committee is a key lever (as is the initiative, under current rules).",
            sourceLessonSlug: "ar-get-involved",
          },
        ],
      },
    },
  ],
};
