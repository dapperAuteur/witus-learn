// Authored "Utah Civics: How Your State Government Works" — the Utah entry in the
// per-state Civics layer on Learn.WitUS. State-level companion to the general Civics
// courses: those teach the SYSTEM; this teaches Utah's version.
//
// Factual and strictly non-partisan. Every content lesson is cited (APA 7 in-line +
// a `## Sources` bibliography) to UTAH'S OWN OFFICIAL SOURCES: the Legislature
// (le.utah.gov), the Lieutenant Governor's elections office (elections.utah.gov /
// vote.utah.gov), the Courts (utcourts.gov), and the Utah Constitution (1896).
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. Utah's dual-
// path candidate nomination (SB54) has been litigated. Time-sensitive items are flagged
// and point learners to vote.utah.gov.
//
// Organized into sections (course modules), ending with a fill-in exercise + a final
// quiz whose every question links back to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_UT_COURSE: AuthoredCourse = {
  title: "Utah Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the state of Utah governs itself — and how you take part where you live. Utah has a distinctive way candidates get on the ballot: since 2014 they can qualify EITHER through the traditional caucus-and-convention system OR by gathering signatures (or both) — a 'dual path' found in few other states. You'll also learn Utah's Constitution of 1896 (statehood came only after banning polygamy), its plural executive, its part-time Legislature of 29 senators and 75 representatives that meets 45 days a year, its merit-selection judiciary with retention elections, its all-mail elections, and its 29 counties. Time-sensitive facts are flagged, pointing to vote.utah.gov. Cited to Utah's own official sources (le.utah.gov, vote.utah.gov, utcourts.gov).",
  lessons: [
    // ── Section 1: The dual-path nomination ──────────────────────────────
    {
      slug: "ut-dual-path",
      title: "1 · Utah's dual-path ballot access: caucus-convention OR signatures",
      section: "What Makes Utah Unique",
      body: `Utah's most distinctive election feature is **how a candidate gets on the primary ballot.** Since **2014, Utah offers a "dual path" (or "dual track") to the ballot** that few states use (Utah Lieutenant Governor's Office, n.d.).

**The two roads.** To appear on a party's primary ballot in Utah, a candidate can qualify **either — or both — of two ways** (Utah Lieutenant Governor's Office, n.d.):
1. **The caucus-and-convention path.** Neighbors gather at local **precinct caucuses** to elect delegates; those delegates meet at a party **convention** and vote on which candidates advance. This is the **traditional, activist-driven** route.
2. **The signature path.** A candidate can **gather a set number of voter signatures** to qualify for the primary ballot directly — **bypassing the convention.**

**Why this exists.** For years Utah used **only** the caucus-convention system, which gave a small number of **convention delegates** enormous power to pick nominees. A **2014 compromise** (born from a citizen effort called "Count My Vote" and the Legislature's response, **"SB54"**) added the **signature path** so candidates could reach the **broader primary electorate** directly. ⚠️ **Time-sensitive:** the dual-path system has been **litigated** and debated ever since, so confirm the **current** rules at vote.utah.gov.

Why it matters: it's a live, distinctive experiment in **who controls nominations — party activists at conventions, or the broader electorate through signatures and primaries.** Utah lets candidates try **both.**

Utah governs under its **Constitution of 1896**, adopted when Utah became the **45th state on January 4, 1896.**

**A note this course keeps returning to:** state facts **vary and change.** Everything here is current as of authoring, but Utah's own government (le.utah.gov, vote.utah.gov, utcourts.gov) is the authoritative source.

**Check yourself.** What are the two paths a Utah candidate can use to reach the primary ballot, and why was the second path added?

## Sources
- Utah Lieutenant Governor's Office (Elections). (n.d.). *Candidate ballot access: the dual-path (caucus-convention and signature) system*. vote.utah.gov. https://vote.utah.gov/
- Utah State Legislature. (n.d.). *SB54 and Utah's nomination process; the 1896 Constitution*. le.utah.gov. https://le.utah.gov/`,
    },

    // ── Section 2: Statehood, the executive ──────────────────────────────
    {
      slug: "ut-statehood-executive",
      title: "2 · Statehood, and Utah's plural executive",
      section: "The Three Branches",
      body: `**A statehood story worth knowing.** Utah's path to statehood was long and shaped by one issue: **polygamy.** The territory, settled largely by members of **The Church of Jesus Christ of Latter-day Saints**, sought statehood for decades but was repeatedly refused. Utah was admitted only in **1896**, after its constitution **permanently banned polygamy** and affirmed the **separation of church and state and religious freedom** (Utah State Legislature, n.d.). Notably, Utah's 1896 constitution also **guaranteed women the right to vote** from the start — Utah women had voted in the territory as early as 1870.

**Executive — a plural executive.** Utah voters elect several statewide officials (Utah Lieutenant Governor's Office, n.d.):
- The **Governor** and **Lieutenant Governor** run **together on a joint ticket** (the Lieutenant Governor also serves as Utah's **chief elections officer**).
- Voters separately elect the **Attorney General**, the **State Auditor**, and the **State Treasurer.**
Statewide officers serve **4-year terms.**

The **Legislative** and **Judicial** branches complete the three (next lessons).

**Check yourself.** What condition did Utah have to meet for statehood in 1896, and which official serves as Utah's chief elections officer?

## Sources
- Utah State Legislature. (n.d.). *Utah statehood and the 1896 Constitution*. le.utah.gov. https://le.utah.gov/
- Utah Lieutenant Governor's Office. (n.d.). *Statewide elected officials; the Lieutenant Governor as elections officer*. vote.utah.gov. https://vote.utah.gov/`,
    },

    // ── Section 3: The 45-day legislature + how a bill becomes law ───────
    {
      slug: "ut-legislature",
      title: "3 · A 45-day citizen Legislature and how a bill becomes law",
      section: "Making Law",
      body: `**Legislative — the Utah State Legislature.** A part-time **citizen legislature** meeting in Salt Lake City (Utah State Legislature, n.d.):
- **House of Representatives — 75 members**, elected to **2-year terms**, and **Senate — 29 senators**, elected to **4-year terms.**
- ⚠️ **It meets for a short annual session — 45 calendar days**, beginning in January. Utah packs its lawmaking into that brief window each year, so legislators are **part-time citizen legislators** with regular jobs. (Special sessions can be called for specific issues.)

**How a bill becomes law:**
1. **Introduction** during the 45-day session; **committee** hearings; **floor votes** in both chambers.
2. **Governor** — sign, veto (a **two-thirds** override; the Legislature can call itself into a **veto-override session**), or line-item veto appropriations.

**Direct democracy.** Utah citizens have the **initiative** (statutes) and **referendum** (rejecting laws) (Utah Lieutenant Governor's Office, n.d.). ⚠️ These tools have been the subject of notable recent fights (for example, over whether and how the Legislature may amend or repeal a voter-passed initiative), so confirm the **current** rules at vote.utah.gov. The takeaway: Utah pairs a **short, part-time Legislature** with **citizen initiative and referendum** — and the balance between them is an active civic question.

**Check yourself.** How long is Utah's annual legislative session, and what two direct-democracy tools do Utah citizens have?

## Sources
- Utah State Legislature. (n.d.). *The 45-day session; how a bill becomes law*. le.utah.gov. https://le.utah.gov/
- Utah Lieutenant Governor's Office. (n.d.). *Initiative and referendum in Utah*. vote.utah.gov. https://vote.utah.gov/`,
    },

    // ── Section 4: Courts + all-mail elections ───────────────────────────
    {
      slug: "ut-courts-elections",
      title: "4 · How Utah picks its judges, and its all-mail elections",
      section: "Elections & Courts",
      body: `**How Utah chooses its judges — merit selection plus retention.** Utah uses the **"Missouri Plan"** model (Utah State Courts, n.d.):
1. A **Judicial Nominating Commission** screens applicants and sends the Governor a list.
2. The **Governor appoints** a judge **from that list**, and the **Senate confirms.**
3. The judge later faces voters in a **nonpartisan yes/no retention election.** The **Utah Supreme Court** has **5 justices** on **10-year** terms. Utah adds a distinctive quality check: a **Judicial Performance Evaluation Commission** publishes evaluations to help voters decide retention — an unusually transparent aid.

**All-mail elections.** ⚠️ **Time-sensitive:** Utah conducts its elections primarily **by mail** — every active registered voter is **mailed a ballot**, returnable by mail or drop box, with in-person options and **same-day registration** also available (Utah Lieutenant Governor's Office, n.d.). Rules and deadlines are administered by **county clerks** and can change — confirm the **current** details at **vote.utah.gov** before you vote.

**Check yourself.** How does Utah select its judges, and how do most Utahns receive their ballots?

## Sources
- Utah State Courts. (n.d.). *Judicial selection, retention, and performance evaluation*. utcourts.gov. https://www.utcourts.gov/
- Utah Lieutenant Governor's Office. (n.d.). *Vote by mail and registration in Utah*. vote.utah.gov. https://vote.utah.gov/`,
    },

    // ── Section 5: Local government + getting involved ───────────────────
    {
      slug: "ut-local-involved",
      title: "5 · Local government and how to take part",
      section: "Get Involved",
      body: `**Local government.** Utah's local layers include (Utah State Legislature, n.d.):
- **29 counties**, governed by elected **county commissions or councils** (some counties have adopted alternative forms via charter), plus other elected county officials.
- **Cities and towns** provide municipal services; larger cities use mayor-council or council-manager forms.
- **School districts** and **special districts** round out local government.

**How to take part:**
- **Register and vote** — Utah mails you a ballot; you can also register same-day. Confirm details at vote.utah.gov.
- **Go to your precinct caucus.** Because of the **dual-path** system (Lesson 1), the **neighborhood caucus** is still a powerful entry point — attend, and you can become a **delegate** who helps pick nominees.
- **Gather or sign signatures.** The signature path means citizens and candidates can put names on the ballot by **petition** — another way to shape who runs.
- **Use direct democracy.** Sign or circulate an **initiative or referendum.**
- **Show up locally.** County commissions/councils, city councils, and school boards hold public meetings.
- **Contact your legislators** in Salt Lake City — you have one Representative and one Senator; note the session is a short 45 days each winter, so timing matters.
- **Run** — school board, city council, and county commission are reachable local starting points.

**Check yourself.** Name two ways Utah's dual-path system lets you influence who gets on the ballot.

## Sources
- Utah State Legislature. (n.d.). *Local government: counties, cities, and towns*. le.utah.gov. https://le.utah.gov/
- Utah Lieutenant Governor's Office. (n.d.). *Caucuses, signatures, and getting involved*. vote.utah.gov. https://vote.utah.gov/`,
    },

    // ── Section 6: Practice (fill in the blanks) ─────────────────────────
    {
      slug: "ut-exercise",
      title: "6 · Practice: fill in the blanks",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about Utah state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt:
              "Since 2014, Utah candidates can reach the primary ballot by the caucus-convention path OR by gathering ___.",
            answer: "signatures",
            explanation:
              "Utah's dual-path (SB54) system lets candidates qualify by convention, by signatures, or both.",
          },
          {
            prompt:
              "Utah's neighborhood gatherings that elect convention delegates are called precinct ___.",
            answer: "caucuses",
            accept: ["caucus"],
            explanation:
              "Precinct caucuses elect delegates to party conventions — the traditional path in Utah's dual-path system.",
          },
          {
            prompt:
              "Utah gained statehood in 1896 only after its constitution permanently banned ___.",
            answer: "polygamy",
            explanation:
              "Utah's 1896 constitution banned polygamy and affirmed separation of church and state; statehood followed.",
          },
          {
            prompt:
              "Utah's Legislature meets for a short annual session of ___ days.",
            answer: "45",
            accept: ["forty-five"],
            explanation:
              "The 45-day annual session makes Utah's a part-time citizen legislature.",
          },
          {
            prompt:
              "Utah chooses judges by merit selection, then keeps or removes them by yes/no ___ elections.",
            answer: "retention",
            explanation:
              "A nominating commission → Governor appoints → Senate confirms → voters hold retention elections (aided by performance evaluations).",
          },
          {
            prompt:
              "TRUE or FALSE: Utah's only way onto the primary ballot is winning at the party convention.",
            answer: "false",
            explanation:
              "False. Since 2014 candidates can also qualify by gathering signatures — the dual-path system.",
          },
        ],
      },
    },

    // ── Section 7: Final quiz ────────────────────────────────────────────
    {
      slug: "ut-quiz",
      title: "7 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What is distinctive about how Utah candidates reach the primary ballot?",
            options: [
              "Only the Governor can nominate them",
              "A dual path — the caucus-and-convention system OR gathering signatures (or both)",
              "They are appointed",
              "There is no primary",
            ],
            correctIndex: 1,
            explanation:
              "Since 2014 (SB54), Utah candidates can qualify by convention, by signatures, or both.",
            sourceLessonSlug: "ut-dual-path",
          },
          {
            prompt: "Why was the signature path added in 2014?",
            options: [
              "To abolish primaries",
              "So candidates could reach the broader primary electorate rather than only convention delegates",
              "To reduce voting",
              "Because Congress required it",
            ],
            correctIndex: 1,
            explanation:
              "The 'Count My Vote'/SB54 compromise added the signature path to reduce the power of a small set of convention delegates.",
            sourceLessonSlug: "ut-dual-path",
          },
          {
            prompt: "What condition preceded Utah's 1896 statehood?",
            options: [
              "Adopting a state lottery",
              "Its constitution permanently banning polygamy",
              "Abolishing its Legislature",
              "Joining another state",
            ],
            correctIndex: 1,
            explanation:
              "Utah was admitted in 1896 after banning polygamy; its constitution also guaranteed women's suffrage.",
            sourceLessonSlug: "ut-statehood-executive",
          },
          {
            prompt: "Who serves as Utah's chief elections officer?",
            options: [
              "The Attorney General",
              "The Lieutenant Governor",
              "The State Auditor",
              "The Chief Justice",
            ],
            correctIndex: 1,
            explanation:
              "Utah's Lieutenant Governor (elected on a joint ticket with the Governor) is the chief elections officer.",
            sourceLessonSlug: "ut-statehood-executive",
          },
          {
            prompt: "How long is Utah's annual legislative session?",
            options: ["45 days", "90 days", "120 days", "Year-round"],
            correctIndex: 0,
            explanation:
              "Utah's Legislature meets for a 45-day annual session, making it a part-time citizen legislature.",
            sourceLessonSlug: "ut-legislature",
          },
          {
            prompt: "What direct-democracy tools do Utah citizens have?",
            options: [
              "None",
              "Initiative (statutes) and referendum",
              "Only recall of judges",
              "Only advisory polls",
            ],
            correctIndex: 1,
            explanation:
              "Utah citizens can use the initiative and referendum, though the balance with the Legislature is contested.",
            sourceLessonSlug: "ut-legislature",
          },
          {
            prompt: "How does Utah choose its judges?",
            options: [
              "Partisan elections",
              "Merit selection (commission → Governor appoints → Senate confirms), then retention elections",
              "The Legislature elects them",
              "Lifetime appointment with no review",
            ],
            correctIndex: 1,
            explanation:
              "Utah uses the Missouri Plan, with a Judicial Performance Evaluation Commission aiding retention voters.",
            sourceLessonSlug: "ut-courts-elections",
          },
          {
            prompt: "How do most Utahns receive their ballots?",
            options: [
              "In person only",
              "By mail — Utah conducts elections primarily by mail",
              "Online",
              "By phone",
            ],
            correctIndex: 1,
            explanation:
              "Utah mails ballots to active registered voters, with in-person options and same-day registration.",
            sourceLessonSlug: "ut-courts-elections",
          },
          {
            prompt: "How can a Utah citizen influence who gets on the ballot?",
            options: [
              "Only by voting in November",
              "By attending precinct caucuses (to become a delegate) and/or signing candidate petitions",
              "By contacting the Governor",
              "There is no way",
            ],
            correctIndex: 1,
            explanation:
              "The dual-path system means caucuses and signature petitions both shape who appears on the ballot.",
            sourceLessonSlug: "ut-local-involved",
          },
          {
            prompt: "Why does this course tell you to VERIFY Utah's nomination and voting rules?",
            options: [
              "Because Utah has no elections office",
              "Because the dual-path (SB54) system has been litigated and voting rules are run by county clerks and change — confirm at vote.utah.gov",
              "Because only Congress sets them",
              "Because voting is secret",
            ],
            correctIndex: 1,
            explanation:
              "Utah's nomination system is contested and voting is administered locally, so vote.utah.gov is the authoritative source.",
            sourceLessonSlug: "ut-local-involved",
          },
        ],
      },
    },
  ],
};
