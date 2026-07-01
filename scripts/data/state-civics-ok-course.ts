// Authored "Oklahoma Civics: How Your State Government Works" — the Oklahoma entry in
// the per-state Civics layer on Learn.WitUS. State-level companion to the general Civics
// courses: those teach the SYSTEM; this teaches Oklahoma's version.
//
// Factual and strictly non-partisan. Every content lesson is cited (APA 7 in-line +
// a `## Sources` bibliography) to OKLAHOMA'S OWN OFFICIAL SOURCES: the Legislature
// (oklegislature.gov), the State Election Board / Secretary of State (elections.ok.gov,
// sos.ok.gov), the Courts (oscn.net), and the Oklahoma Constitution (1907).
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. Tribal
// jurisdiction questions (McGirt, 2020) are evolving. Time-sensitive items are flagged
// and point learners to elections.ok.gov.
//
// Organized into sections (course modules), ending with a fill-in exercise + a final
// quiz whose every question links back to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_OK_COURSE: AuthoredCourse = {
  title: "Oklahoma Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the state of Oklahoma governs itself — and how you take part where you live. Oklahoma has several distinctive features: it is one of only TWO states (with Texas) that has two separate highest courts — a civil Supreme Court and a Court of Criminal Appeals; it elects an unusually large slate of statewide officials; and its history as 'Indian Territory' means sovereign tribal nations are central to its civic landscape (underscored by the 2020 McGirt decision). You'll learn Oklahoma's Constitution of 1907, its large plural executive, its Legislature of 48 senators and 101 representatives, its strong direct democracy, its merit-selection appellate judiciary, and its 77 counties. Time-sensitive facts are flagged, pointing to elections.ok.gov. Cited to Oklahoma's own official sources (oklegislature.gov, elections.ok.gov, oscn.net).",
  lessons: [
    // ── Section 1: Two highest courts ────────────────────────────────────
    {
      slug: "ok-two-high-courts",
      title: "1 · Two highest courts: Oklahoma's split top bench",
      section: "What Makes Oklahoma Unique",
      body: `Oklahoma shares a rare feature with only **one other state (Texas)**: it has **TWO separate courts of last resort** — two "highest courts," each supreme in its own area (Oklahoma State Courts Network, n.d.).

**How it works.** Most states have a **single supreme court** that is the final word on **all** appeals. Oklahoma instead splits the top of its judiciary in two (Oklahoma State Courts Network, n.d.):
- The **Oklahoma Supreme Court** (9 justices) is the highest court for **CIVIL** cases (lawsuits, contracts, property, government disputes), and
- the **Oklahoma Court of Criminal Appeals** (5 judges) is the highest court for **CRIMINAL** cases.
There is **no appeal from one to the other** — each is final in its lane. (Texas has the same split, with its Supreme Court and its Court of Criminal Appeals.) So in Oklahoma, **whether your case is civil or criminal decides which "supreme court" has the last word.**

Oklahoma governs under its **Constitution of 1907**, adopted when Oklahoma became the **46th state on November 16, 1907** — a long, detailed, **Progressive-Era** constitution that built in strong citizen powers (you'll see the initiative later). Oklahoma is nicknamed the **"Sooner State."**

This is one of the through-lines: Oklahoma made distinctive **structural choices** — two high courts, a big elected executive, strong direct democracy — rooted in its populist founding era.

**A note this course keeps returning to:** state facts **vary and change.** Everything here is current as of authoring, but Oklahoma's own government (oklegislature.gov, elections.ok.gov, oscn.net) is the authoritative source.

**Check yourself.** What are Oklahoma's two highest courts, and how do you know which one is final for a given case?

## Sources
- Oklahoma State Courts Network. (n.d.). *The Oklahoma Supreme Court and the Court of Criminal Appeals*. oscn.net. https://www.oscn.net/
- Oklahoma Legislature. (n.d.). *Oklahoma Constitution (1907)*. oklegislature.gov. https://www.oklegislature.gov/`,
    },

    // ── Section 2: A large plural executive ──────────────────────────────
    {
      slug: "ok-plural-executive",
      title: "2 · One of the largest elected executives in the nation",
      section: "The Three Branches",
      body: `Oklahoma's Progressive-Era founders **distrusted concentrated power**, so they created one of the **largest plural executives** in the country — many statewide officials **elected separately** (Oklahoma State Election Board, n.d.):
- **Governor** and **Lieutenant Governor** (elected **separately** — can be different parties),
- **Attorney General**,
- **State Treasurer**,
- **State Auditor and Inspector**,
- **Superintendent of Public Instruction** (leading K–12 education),
- **Commissioner of Labor**,
- **Insurance Commissioner**, and
- the three-member **Corporation Commission** (which regulates utilities, and historically oil and gas — a powerful elected body).
(One notable exception: Oklahoma's **Secretary of State is appointed by the Governor**, not elected.)

Because so many executive officials answer **directly to voters** rather than to the Governor, Oklahoma's executive power is **widely divided** — the Governor shares the branch with a large cast of independently elected officers who can check one another. Statewide officers serve **4-year terms** with **term limits.**

The **Legislative** and **Judicial** branches complete the three (Lesson 1 covered the courts; the Legislature is next).

**Check yourself.** Name three statewide executives Oklahomans elect besides the Governor, and note which top official is appointed rather than elected.

## Sources
- Oklahoma State Election Board. (n.d.). *Statewide elected officials*. elections.ok.gov. https://oklahoma.gov/elections.html
- Oklahoma Legislature. (n.d.). *Constitution of Oklahoma, Article VI (Executive)*. oklegislature.gov. https://www.oklegislature.gov/`,
    },

    // ── Section 3: The Legislature + strong direct democracy ─────────────
    {
      slug: "ok-legislature-initiative",
      title: "3 · The Legislature and Oklahoma's strong direct democracy",
      section: "Making Law",
      body: `**Legislative — the Oklahoma Legislature.** A bicameral body meeting in Oklahoma City (Oklahoma Legislature, n.d.):
- **House of Representatives — 101 members** (2-year terms), and **Senate — 48 senators** (4-year terms).
- Members face **term limits** — a combined **12 years** in the Legislature — and the Legislature meets in **annual sessions** of limited length.

**How a bill becomes law:**
1. **Introduction** in the House or Senate; **committee** review; **floor votes** in both chambers.
2. **Governor** — sign, veto (a **two-thirds** override), or line-item veto appropriations.

**Strong direct democracy.** True to its populist founding, Oklahoma gives citizens **robust tools** (Oklahoma State Election Board, n.d.):
- **Initiative** — gather signatures to put a **statute OR a constitutional amendment** directly on the ballot. Oklahoma was, in fact, the **first state to include the initiative and referendum in its original constitution** (1907), and Oklahomans use these tools **regularly** for major decisions.
- **Referendum** — voters can **reject** a law the Legislature passed.
So Oklahoma pairs a **term-limited Legislature** with **strong citizen lawmaking** — the people can make law directly when the Legislature won't.

**Check yourself.** What two direct-democracy tools do Oklahomans have, and what "first" does Oklahoma's 1907 constitution hold regarding them?

## Sources
- Oklahoma Legislature. (n.d.). *The Legislature; term limits; how a bill becomes law*. oklegislature.gov. https://www.oklegislature.gov/
- Oklahoma State Election Board. (n.d.). *Initiative and referendum in Oklahoma*. elections.ok.gov. https://oklahoma.gov/elections.html`,
    },

    // ── Section 4: Judges, tribal nations, getting involved ──────────────
    {
      slug: "ok-courts-tribes-involved",
      title: "4 · Merit-selection judges, sovereign tribal nations, and getting involved",
      section: "Get Involved",
      body: `**How Oklahoma picks its appellate judges — merit selection plus retention.** For its two high courts and the Court of Civil Appeals, Oklahoma uses the **"Missouri Plan"**: a **Judicial Nominating Commission** sends the Governor a list, the **Governor appoints**, and the judge later faces **nonpartisan yes/no retention elections** (Oklahoma State Courts Network, n.d.). (Many **district (trial) judges**, by contrast, are **elected** on nonpartisan ballots.)

**Indian Territory and sovereign tribal nations.** Oklahoma's history is inseparable from Native American nations: much of the state was **"Indian Territory"** before statehood, home to nations forcibly relocated there. Today Oklahoma includes **38+ federally recognized tribal nations** — sovereign governments with their own constitutions, courts, and laws (Oklahoma State Election Board, n.d.). ⚠️ **Time-sensitive and important:** in **McGirt v. Oklahoma (2020)**, the U.S. Supreme Court held that a large part of eastern Oklahoma **remains a tribal reservation** for purposes of certain **criminal jurisdiction** — a landmark ruling whose implications for state, tribal, and federal authority are **still being worked out.** So tribal nations are a **central, active** part of Oklahoma's civic landscape; confirm current jurisdictional details at authoritative sources.

**Voting.** ⚠️ **Time-sensitive:** Oklahoma offers **early in-person voting** and **absentee** voting and requires **ID**; rules are administered by **county election boards** and can change — confirm at **elections.ok.gov** before you vote.

**How to take part:**
- **Register and vote**, and **use the initiative** — Oklahoma's is strong and frequently used.
- **Show up locally** — county commissions, city councils, and school boards meet publicly; **77 counties** run local services.
- **Learn tribal governance** if you live in or near a nation's boundaries — tribal governments are sovereign and consequential.
- **Contact your legislators** in Oklahoma City; **run** for reachable local offices.

**Check yourself.** How does Oklahoma pick its appellate judges, and what did the 2020 McGirt decision establish?

## Sources
- Oklahoma State Courts Network. (n.d.). *Judicial selection: merit selection and retention*. oscn.net. https://www.oscn.net/
- Oklahoma State Election Board. (n.d.). *Registering and voting; tribal nations in Oklahoma*. elections.ok.gov. https://oklahoma.gov/elections.html`,
    },

    // ── Section 5: Practice (fill in the blanks) ─────────────────────────
    {
      slug: "ok-exercise",
      title: "5 · Practice: fill in the blanks",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about Oklahoma state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt:
              "Oklahoma is one of only two states (with Texas) that has ___ separate highest courts.",
            answer: "two",
            accept: ["2"],
            explanation:
              "The Oklahoma Supreme Court is highest for civil cases; the Court of Criminal Appeals is highest for criminal cases.",
          },
          {
            prompt:
              "Oklahoma's highest court for CRIMINAL cases is the Court of Criminal ___.",
            answer: "Appeals",
            accept: ["appeals"],
            explanation:
              "Criminal cases end at the Court of Criminal Appeals; civil cases end at the Oklahoma Supreme Court — neither reviews the other.",
          },
          {
            prompt:
              "Oklahoma's current constitution is the Constitution of ___.",
            answer: "1907",
            explanation:
              "Oklahoma adopted its long, Progressive-Era constitution in 1907, becoming the 46th state.",
          },
          {
            prompt:
              "Oklahoma citizens can put a statute or amendment on the ballot by ___ (a strong populist tool).",
            answer: "initiative",
            explanation:
              "Oklahoma's 1907 constitution included the initiative and referendum from the start; Oklahomans use them often.",
          },
          {
            prompt:
              "In McGirt v. Oklahoma (2020), the U.S. Supreme Court held much of eastern Oklahoma remains a tribal ___ for certain jurisdiction.",
            answer: "reservation",
            explanation:
              "McGirt recognized that a large area remains a reservation for purposes of certain criminal jurisdiction — implications are still evolving.",
          },
          {
            prompt:
              "TRUE or FALSE: Oklahoma elects only the Governor statewide, like a strong-executive state.",
            answer: "false",
            explanation:
              "False. Oklahoma has one of the largest plural executives, electing many statewide officials separately.",
          },
        ],
      },
    },

    // ── Section 6: Final quiz ────────────────────────────────────────────
    {
      slug: "ok-quiz",
      title: "6 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What is unusual about Oklahoma's highest courts?",
            options: [
              "It has no high court",
              "It has TWO — a civil Supreme Court and a Court of Criminal Appeals (like Texas)",
              "Its high court is federal",
              "Its high court has 50 members",
            ],
            correctIndex: 1,
            explanation:
              "Oklahoma and Texas are the only states with two courts of last resort — one civil, one criminal.",
            sourceLessonSlug: "ok-two-high-courts",
          },
          {
            prompt: "Which Oklahoma court is final for CRIMINAL cases?",
            options: [
              "The Oklahoma Supreme Court",
              "The Court of Criminal Appeals",
              "The Corporation Commission",
              "A federal court",
            ],
            correctIndex: 1,
            explanation:
              "Criminal appeals end at the Court of Criminal Appeals; civil appeals end at the Supreme Court.",
            sourceLessonSlug: "ok-two-high-courts",
          },
          {
            prompt: "What is distinctive about Oklahoma's executive branch?",
            options: [
              "The Governor appoints everyone",
              "It is one of the largest plural executives, electing many statewide officials separately",
              "It has no elected officials",
              "The Legislature runs it",
            ],
            correctIndex: 1,
            explanation:
              "Oklahoma's populist founders spread executive power across many independently elected officers.",
            sourceLessonSlug: "ok-plural-executive",
          },
          {
            prompt: "Which powerful elected Oklahoma body regulates utilities (and historically oil and gas)?",
            options: [
              "The Corporation Commission",
              "The Governor's Council",
              "The Court of Chancery",
              "The Metropolitan Council",
            ],
            correctIndex: 0,
            explanation:
              "The three-member elected Corporation Commission regulates utilities and, historically, oil and gas.",
            sourceLessonSlug: "ok-plural-executive",
          },
          {
            prompt: "What direct-democracy tools do Oklahomans have?",
            options: [
              "None",
              "Initiative (statutes and amendments) and referendum — from the original 1907 constitution",
              "Only recall of judges",
              "Only advisory votes",
            ],
            correctIndex: 1,
            explanation:
              "Oklahoma included the initiative and referendum in its original constitution and uses them frequently.",
            sourceLessonSlug: "ok-legislature-initiative",
          },
          {
            prompt: "How many members are in the Oklahoma House and Senate?",
            options: [
              "101 House / 48 Senate",
              "150 House / 50 Senate",
              "100 House / 40 Senate",
              "99 House / 33 Senate",
            ],
            correctIndex: 0,
            explanation:
              "The Oklahoma House has 101 members and the Senate has 48, with term limits.",
            sourceLessonSlug: "ok-legislature-initiative",
          },
          {
            prompt: "How does Oklahoma choose its appellate judges?",
            options: [
              "Partisan elections",
              "Merit selection (commission → Governor appoints) plus retention elections",
              "The Legislature elects them",
              "Lifetime appointment",
            ],
            correctIndex: 1,
            explanation:
              "Oklahoma uses the Missouri Plan for appellate judges; many district (trial) judges are elected nonpartisan.",
            sourceLessonSlug: "ok-courts-tribes-involved",
          },
          {
            prompt: "What did McGirt v. Oklahoma (2020) establish?",
            options: [
              "That Oklahoma has no counties",
              "That much of eastern Oklahoma remains a tribal reservation for purposes of certain criminal jurisdiction",
              "That the Governor controls the courts",
              "That Oklahoma must join Texas",
            ],
            correctIndex: 1,
            explanation:
              "McGirt recognized a large area as a reservation for certain criminal jurisdiction — with implications still being worked out.",
            sourceLessonSlug: "ok-courts-tribes-involved",
          },
          {
            prompt: "How many counties does Oklahoma have?",
            options: ["10", "77", "159", "254"],
            correctIndex: 1,
            explanation:
              "Oklahoma has 77 counties, alongside its municipalities and 38+ sovereign tribal nations.",
            sourceLessonSlug: "ok-courts-tribes-involved",
          },
          {
            prompt: "Why does this course tell you to VERIFY Oklahoma's tribal-jurisdiction and voting details?",
            options: [
              "Because Oklahoma has no government website",
              "Because McGirt's implications are still evolving and voting rules are run by county boards and change — confirm at authoritative sources / elections.ok.gov",
              "Because only Congress sets them",
              "Because voting is secret",
            ],
            correctIndex: 1,
            explanation:
              "Post-McGirt jurisdiction is being worked out and voting is administered locally, so the state's and courts' own sources are authoritative.",
            sourceLessonSlug: "ok-courts-tribes-involved",
          },
        ],
      },
    },
  ],
};
