// Authored "Illinois Civics: How Your State Government Works" — the Illinois entry in
// the per-state Civics layer on Learn.WitUS. State-level companion to the general
// Civics courses: those teach the SYSTEM; this teaches Illinois's version.
//
// Factual and strictly non-partisan. Every content lesson is cited (APA 7 in-line +
// a `## Sources` bibliography) to ILLINOIS'S OWN OFFICIAL SOURCES: the General
// Assembly (ilga.gov), the State Board of Elections (elections.il.gov) and Secretary
// of State (ilsos.gov), the Courts (illinoiscourts.gov), and the Illinois
// Constitution (1970).
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. Illinois's
// initiative power is narrowly limited, its Supreme Court is elected in partisan
// districts, and its home-rule tradition is strong. Time-sensitive items (voting
// rules) are flagged and point learners to elections.il.gov.
//
// Organized into sections (course modules), ending with a fill-in exercise + a final
// quiz whose every question links back to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_IL_COURSE: AuthoredCourse = {
  title: "Illinois Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the state of Illinois governs itself — and how you take part where you live. You'll learn Illinois's modern Constitution of 1970; a plural executive of six separately elected statewide officers (including BOTH a Comptroller and a Treasurer); a General Assembly of 59 senators and 118 representatives; a Supreme Court elected in PARTISAN district races; Illinois's unusually LIMITED citizen initiative — usable only to change the structure of the Legislature, the route that produced the famous 1980 'Cutback Amendment'; and one of the nation's strongest HOME-RULE traditions, the opposite of Dillon's Rule. It also covers Illinois's 102 counties and Cook County, its voter-access rules, and flags time-sensitive facts, pointing to elections.il.gov. Cited to Illinois's own official sources (ilga.gov, elections.il.gov, illinoiscourts.gov).",
  lessons: [
    // ── Section 1: The Illinois Constitution ─────────────────────────────
    {
      slug: "il-constitution",
      title: "1 · Illinois's modern Constitution of 1970",
      section: "The Illinois Constitution",
      body: `Illinois governs under its **Constitution of 1970**, which took effect **July 1, 1971** — a deliberately **modern** rewrite (Illinois's fourth constitution, after 1818, 1848, and 1870). Illinois became the **21st state on December 3, 1818** (Illinois General Assembly, n.d.).

The 1970 constitution modernized Illinois government in ways this course highlights:
- It created one of the nation's **strongest home-rule** systems, giving big local governments broad power.
- It kept a **narrowly limited** form of citizen initiative — usable **only** to change the structure of the **Legislature itself.**
- It preserved an elected judiciary chosen in **partisan** races.

A quick note on direct democracy: unlike Colorado or California, **Illinois voters cannot put ordinary laws or general constitutional amendments on the ballot by petition.** The citizen initiative exists, but it is **restricted to the Legislative Article** — a genuinely unusual limit covered in its own lesson.

**A note this course keeps returning to:** state facts **vary and change.** Everything here is current as of authoring, but Illinois's own government (ilga.gov, elections.il.gov, illinoiscourts.gov) is the authoritative source. When something is time-sensitive — like voter-registration rules — we say so.

**Check yourself.** When did Illinois's current constitution take effect, and what is unusual about the scope of Illinois's citizen initiative?

## Sources
- Illinois General Assembly. (n.d.). *Constitution of the State of Illinois (1970)*. ilga.gov. https://www.ilga.gov/
- Illinois State Board of Elections. (n.d.). *Illinois government overview*. elections.il.gov. https://www.elections.il.gov/`,
    },

    // ── Section 2: The plural executive ──────────────────────────────────
    {
      slug: "il-executive",
      title: "2 · Illinois's plural executive — six statewide officers",
      section: "The Three Branches",
      body: `Illinois has a **plural executive**: voters elect **six** separate statewide constitutional officers, so executive power is spread across independently elected officials (Illinois General Assembly, n.d.):

1. **Governor** — chief executive.
2. **Lieutenant Governor** — since **2014**, the Governor and Lieutenant Governor **run together on a joint ticket.** ⚠️ Before that reform they were elected **separately**, which once produced a Governor and Lieutenant Governor **from different parties** — the reason the joint-ticket rule was adopted.
3. **Attorney General** — the state's lawyer.
4. **Secretary of State** — keeper of state records, driver's licenses, and more (a powerful office in Illinois).
5. **Comptroller** — writes the state's checks and manages its accounts.
6. **Treasurer** — the state's banker and investor.

A distinctive Illinois quirk: it elects **both a Comptroller and a Treasurer** — **two** separate financial officers (one pays the bills, one holds and invests the money). Most states combine these; Illinois deliberately splits them as a check on each other, and a 2016 effort to merge the offices did not succeed.

The **Judicial** branch (the Supreme Court and lower courts) and the **Legislative** branch (the General Assembly) are covered next.

**Check yourself.** Name the two separate financial officers Illinois elects, and explain what changed in 2014 about the Governor and Lieutenant Governor.

## Sources
- Illinois General Assembly. (n.d.). *Constitution of Illinois, Article V (The Executive)*. ilga.gov. https://www.ilga.gov/
- Illinois Secretary of State. (n.d.). *Statewide constitutional officers*. ilsos.gov. https://www.ilsos.gov/`,
    },

    // ── Section 3: Legislature + partisan-elected courts ─────────────────
    {
      slug: "il-legislature-courts",
      title: "3 · The General Assembly and the partisan-elected Supreme Court",
      section: "The Three Branches",
      body: `**Legislative — the Illinois General Assembly.** A bicameral body meeting in Springfield (Illinois General Assembly, n.d.):
- **House of Representatives — 118 representatives**, elected to **2-year terms.**
- **Senate — 59 senators**, who serve on a staggered **"2-4-4"** cycle across each decade (tied to redistricting).
- ⚠️ The House size — **118** — is itself a product of the **1980 "Cutback Amendment"** (next lesson), which shrank it from 177.

**Judicial — an elected, PARTISAN judiciary.** Here is an Illinois distinctive: unlike states with nonpartisan judicial ballots (Michigan, Washington) or appointment (Massachusetts), **Illinois elects its judges in openly PARTISAN elections** (Illinois Courts, n.d.):
- The **Supreme Court of Illinois** has **7 justices**, elected from **judicial districts** — **3 from Cook County** (Chicago) and **1 each from four other districts** — in **partisan** races, to **10-year** terms.
- After the first partisan election, a sitting justice runs in a nonpartisan **retention** election and needs a **60% "yes" vote** to stay.
- Appellate and Circuit judges are likewise elected in partisan races (then retained).

So in Illinois, judges run **with party labels** — a system that makes judicial elections notably political, and one worth remembering when you compare states.

**Veto and override.** The Governor has strong veto tools — including an **amendatory veto** (returning a bill with specific changes) and a **line-item/reduction veto** on appropriations. Overrides require a **three-fifths vote of each chamber.**

**Check yourself.** How are Illinois Supreme Court justices elected, and how many come from Cook County?

## Sources
- Illinois General Assembly. (n.d.). *The General Assembly; Constitution Article IV*. ilga.gov. https://www.ilga.gov/
- Illinois Courts. (n.d.). *Illinois Supreme Court and judicial elections*. illinoiscourts.gov. https://www.illinoiscourts.gov/`,
    },

    // ── Section 4: The limited initiative + Cutback Amendment ────────────
    {
      slug: "il-initiative",
      title: "4 · The limited citizen initiative and the 1980 Cutback Amendment",
      section: "Making Law",
      body: `Illinois has a citizen initiative — but a **deliberately narrow** one, and its most famous use reshaped the Legislature itself.

**The limit.** Under the 1970 Constitution (Article XIV, Section 3), Illinois citizens may use the initiative **ONLY to amend the "Legislative Article"** — the part of the constitution that governs the **structure and procedures of the General Assembly** (Illinois General Assembly, n.d.). Citizens **cannot** initiate ordinary laws, tax changes, or amendments on other subjects (education, rights, the executive, etc.). This makes Illinois's initiative one of the **most restricted** in any initiative state — a strong contrast with Colorado, where citizens can initiate almost anything.

**The famous use — the 1980 "Cutback Amendment."** In 1980, Illinois voters used this narrow initiative power to pass the **Cutback Amendment**, which (Illinois General Assembly, n.d.):
- **Shrank the House of Representatives from 177 members to 118**, and
- **Ended Illinois's unusual multi-member districts and "cumulative voting"** system (in which each district had elected three representatives and voters could pile multiple votes on one candidate).

It's a striking example: the **only** thing Illinois citizens can initiate — changing the Legislature's structure — is exactly what they did, dramatically cutting the size of their own House. Because the initiative is confined to the Legislative Article, the Cutback Amendment is essentially the model case of Illinois direct democracy.

Everything else — ordinary laws — is made **through the General Assembly** (introduction → committee → both chambers → the Governor's signature or veto).

**Check yourself.** What is the ONLY subject Illinois citizens may change by initiative, and what did the 1980 Cutback Amendment do?

## Sources
- Illinois General Assembly. (n.d.). *Constitution of Illinois, Article XIV, Section 3 (initiative on the Legislative Article); the 1980 Cutback Amendment*. ilga.gov. https://www.ilga.gov/`,
    },

    // ── Section 5: Home rule + local government ──────────────────────────
    {
      slug: "il-home-rule",
      title: "5 · Home rule and local government (the opposite of Dillon's Rule)",
      section: "Local Government",
      body: `Illinois is one of the strongest **home-rule** states in the country — the deliberate **opposite** of a Dillon's Rule state like Virginia (Illinois General Assembly, n.d.).

**What home rule means here.** Under Article VII of the 1970 Constitution, a **home-rule unit** may "exercise any power and perform any function pertaining to its government and affairs" **unless the state specifically limits it.** In other words, Illinois home-rule governments **start with broad power** and don't have to ask Springfield for permission for most local matters — the reverse of Dillon's Rule, where localities have only what the state grants (Illinois General Assembly, n.d.):
- **Municipalities over 25,000 people are automatically home-rule** units; smaller ones can **become** home rule by **referendum** (and can also vote to give it up).
- Home-rule units have broad authority over local taxes, borrowing, licensing, and regulation.

**The layers.** Illinois has (Illinois General Assembly, n.d.):
- **102 counties** — including **Cook County**, one of the most populous local governments in the entire United States, which surrounds Chicago and itself has home-rule status.
- **Municipalities** (cities, villages, incorporated towns), many with home rule.
- **Townships** in much of the state, plus a very large number of **special districts** (Illinois is often cited as having among the **most units of local government** of any state).

The practical effect: Illinois pushes real power **down** to local governments, especially larger cities and Cook County — so "who decides?" is often a **local** answer.

**Check yourself.** How is Illinois home rule the opposite of Dillon's Rule, and which large Illinois county is itself a home-rule government?

## Sources
- Illinois General Assembly. (n.d.). *Constitution of Illinois, Article VII (Local Government) and home rule*. ilga.gov. https://www.ilga.gov/`,
    },

    // ── Section 6: Elections & getting involved ──────────────────────────
    {
      slug: "il-elections-involved",
      title: "6 · Elections and how to take part",
      section: "Get Involved",
      body: `Illinois has expanded voting access substantially and offers real ways to take part (Illinois State Board of Elections, n.d.).

**Access.** Illinois offers **same-day (Election-Day) registration**, **automatic voter registration**, **no-excuse vote-by-mail** (with a permanent vote-by-mail list you can join), **early voting**, and **online registration** — a broad menu of options. ⚠️ **Time-sensitive:** deadlines, drop-box availability, and ID requirements change and are administered by **county clerks and local election authorities** (Chicago and some cities run their own election boards). Confirm the **current** rules at **elections.il.gov** or your local election authority before you vote.

**How to take part:**
- **Register and vote** — even on Election Day; join the permanent vote-by-mail list at elections.il.gov if that suits you.
- **Show up locally.** Because Illinois pushes power to home-rule cities, counties, townships, and school and special districts, **local meetings decide a lot** — and they're public.
- **Contact your legislators** — you have one Representative and one Senator in Springfield.
- **Use the (narrow) initiative.** Remember your one direct lever: citizens can initiate changes to the **structure of the General Assembly** — the power that produced the Cutback Amendment.
- **Run** — school board, city/village council, township, and county offices are reachable local starting points.

**Check yourself.** Name two ways Illinois makes registering and voting easier, and the one thing Illinois citizens can put on the ballot themselves.

## Sources
- Illinois State Board of Elections. (n.d.). *Registering and voting in Illinois: same-day registration, vote-by-mail, early voting*. elections.il.gov. https://www.elections.il.gov/
- Illinois General Assembly. (n.d.). *Elections and the Legislative Article initiative*. ilga.gov. https://www.ilga.gov/`,
    },

    // ── Section 7: Practice (fill in the blanks) ─────────────────────────
    {
      slug: "il-exercise",
      title: "7 · Practice: fill in the blanks",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about Illinois state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt: "Illinois's current constitution is the Constitution of ___.",
            answer: "1970",
            explanation:
              "Illinois's modern fourth constitution was adopted in 1970 and took effect July 1, 1971.",
          },
          {
            prompt:
              "Illinois elects BOTH a Comptroller and a ___ — two separate financial officers.",
            answer: "Treasurer",
            accept: ["treasurer"],
            explanation:
              "The Comptroller writes the state's checks; the Treasurer holds and invests its money — a deliberate split as a check on each other.",
          },
          {
            prompt:
              "Illinois Supreme Court justices are elected in ___ (party-labeled) district races to 10-year terms.",
            answer: "partisan",
            explanation:
              "Illinois elects judges in partisan races — 7 justices from districts (3 from Cook County), then nonpartisan retention needing 60% to stay.",
          },
          {
            prompt:
              "Illinois citizens may use the initiative ONLY to amend the ___ Article — the part governing the structure of the General Assembly.",
            answer: "Legislative",
            accept: ["legislative"],
            explanation:
              "The initiative is confined to the Legislative Article (Art. XIV §3); the 1980 Cutback Amendment used it to shrink the House.",
          },
          {
            prompt:
              "The 1980 Cutback Amendment shrank the Illinois House from 177 to ___ members.",
            answer: "118",
            explanation:
              "It cut the House to 118 and ended Illinois's multi-member districts and cumulative voting.",
          },
          {
            prompt:
              "TRUE or FALSE: Illinois follows Dillon's Rule, giving localities only the powers the state expressly grants.",
            answer: "false",
            explanation:
              "False. Illinois is a strong HOME-RULE state — the opposite of Dillon's Rule; home-rule units start with broad power.",
          },
        ],
      },
    },

    // ── Section 8: Final quiz ────────────────────────────────────────────
    {
      slug: "il-quiz",
      title: "8 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "Which constitution governs Illinois today?",
            options: [
              "The Constitution of 1870",
              "The Constitution of 1970",
              "The Constitution of 1848",
              "Illinois uses the federal constitution only",
            ],
            correctIndex: 1,
            explanation:
              "Illinois's modern fourth constitution, adopted in 1970, took effect July 1, 1971.",
            sourceLessonSlug: "il-constitution",
          },
          {
            prompt: "What is distinctive about Illinois's two financial officers?",
            options: [
              "It has neither a Comptroller nor a Treasurer",
              "It elects BOTH a Comptroller and a Treasurer as separate offices",
              "The Governor appoints both",
              "They are the same person",
            ],
            correctIndex: 1,
            explanation:
              "Illinois splits financial duties between an elected Comptroller (pays bills) and an elected Treasurer (holds/invests funds).",
            sourceLessonSlug: "il-executive",
          },
          {
            prompt: "What changed in 2014 about the Illinois Governor and Lieutenant Governor?",
            options: [
              "The office of Lieutenant Governor was abolished",
              "They began running together on a joint ticket (previously elected separately)",
              "The Governor's term became six years",
              "The Lieutenant Governor became a judge",
            ],
            correctIndex: 1,
            explanation:
              "Since 2014 they run on a joint ticket; before that they were elected separately, which once produced a split-party pair.",
            sourceLessonSlug: "il-executive",
          },
          {
            prompt: "How are Illinois Supreme Court justices chosen?",
            options: [
              "Appointed by the Governor for life",
              "Elected in partisan district races to 10-year terms (3 justices from Cook County)",
              "Elected on a nonpartisan statewide ballot",
              "Chosen by the General Assembly",
            ],
            correctIndex: 1,
            explanation:
              "Illinois elects its 7 justices in partisan district races (3 from Cook County), then nonpartisan retention requiring 60%.",
            sourceLessonSlug: "il-legislature-courts",
          },
          {
            prompt: "What is the ONLY subject Illinois citizens may change by initiative?",
            options: [
              "Any law they wish",
              "The structure and procedures of the Legislature (the Legislative Article)",
              "Only tax rates",
              "Only the executive branch",
            ],
            correctIndex: 1,
            explanation:
              "Illinois's initiative is confined to the Legislative Article — the narrowest such power among initiative states.",
            sourceLessonSlug: "il-initiative",
          },
          {
            prompt: "What did the 1980 Cutback Amendment do?",
            options: [
              "Created a Lieutenant Governor",
              "Shrank the House from 177 to 118 and ended multi-member districts and cumulative voting",
              "Abolished the Supreme Court",
              "Merged Cook County into the state",
            ],
            correctIndex: 1,
            explanation:
              "Using the Legislative-Article initiative, voters cut the House to 118 and ended cumulative voting in multi-member districts.",
            sourceLessonSlug: "il-initiative",
          },
          {
            prompt: "How is Illinois's local-government tradition best described?",
            options: [
              "Dillon's Rule — localities have only granted powers",
              "Strong home rule — home-rule units start with broad power unless the state limits them",
              "All power held by the Governor",
              "No local governments at all",
            ],
            correctIndex: 1,
            explanation:
              "Illinois is a strong home-rule state under Article VII — the opposite of Dillon's Rule.",
            sourceLessonSlug: "il-home-rule",
          },
          {
            prompt: "Which large Illinois county is itself a home-rule government?",
            options: ["DuPage County", "Cook County", "Sangamon County", "Illinois has no counties"],
            correctIndex: 1,
            explanation:
              "Cook County, surrounding Chicago, is one of the most populous local governments in the U.S. and has home-rule status.",
            sourceLessonSlug: "il-home-rule",
          },
          {
            prompt: "Which voter-access feature does Illinois offer?",
            options: [
              "No mail voting of any kind",
              "Same-day registration, automatic registration, and no-excuse vote-by-mail",
              "Voting only for property owners",
              "In-person Election-Day voting only",
            ],
            correctIndex: 1,
            explanation:
              "Illinois offers same-day and automatic registration, no-excuse vote-by-mail (with a permanent list), and early voting.",
            sourceLessonSlug: "il-elections-involved",
          },
          {
            prompt: "Why does this course tell you to VERIFY Illinois's voting rules?",
            options: [
              "Because Illinois has no elections office",
              "Because deadlines and ID rules change and are run by county clerks and local boards — confirm at elections.il.gov",
              "Because only Congress sets them",
              "Because voting is secret",
            ],
            correctIndex: 1,
            explanation:
              "Illinois elections are administered locally (some cities run their own boards) and rules change, so elections.il.gov is the authoritative source.",
            sourceLessonSlug: "il-elections-involved",
          },
        ],
      },
    },
  ],
};
