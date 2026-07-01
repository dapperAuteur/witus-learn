// Authored "Indiana Civics: How Your State Government Works" — the Indiana entry
// in the per-state Civics layer on Learn.WitUS. It is the state-level companion to
// the general Civics courses (US Civics 101, US Constitution 101, State vs Federal
// Power, and US, State & Local Government: Who Does What): those teach the SYSTEM;
// this teaches ONE state's specific version of it.
//
// Factual and strictly non-partisan (how Indiana's government works, not who should
// win). Every content lesson is cited (APA 7 in-line + a `## Sources` bibliography)
// to INDIANA'S OWN OFFICIAL SOURCES: the state portal (in.gov), the Indiana General
// Assembly (iga.in.gov), the Secretary of State / elections (in.gov/sos), and the
// state courts (in.gov/courts), plus the U.S. Supreme Court for Crawford v. Marion
// County (the case that upheld Indiana's voter-ID law).
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. Where a
// figure is time-sensitive (deadlines, office names that were recently renamed, a
// rule mid-transition), the course SAYS SO and points the learner to Indiana's own
// official source to confirm the current value, rather than freezing a number that
// could go stale. Two Indiana-specific "recently changed" items are flagged in-text:
//   • The elected Superintendent of Public Instruction became an APPOINTED Secretary
//     of Education (effective 2021) — but the CONSTITUTION still names the office.
//   • The State Auditor was renamed State COMPTROLLER (effective July 1, 2023).
//
// The course is organized into sections (course modules) and ends with a fill-in
// exercise + a final quiz whose every question links back to the lesson that teaches
// the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_IN_COURSE: AuthoredCourse = {
  title: "Indiana Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the state of Indiana governs itself — and how you take part where you live. You'll learn Indiana's 1851 constitution and its distinctive strict state-debt clause (a de-facto balanced budget); the three state branches, including a deliberately weak governor whose veto can be overridden by a SIMPLE majority; how a bill becomes an Indiana law in the General Assembly (a 100-member House and a 50-member Senate); local government across Indiana's 92 counties and its more than 1,000 townships; and Indiana's elections rules — strict photo voter ID (upheld in Crawford v. Marion County), excuse-required mail voting, and a registration deadline 29 days out. It closes on how to get involved where you live. Cited to Indiana's own official sources (in.gov, iga.in.gov, in.gov/sos, in.gov/courts). Because state facts vary and change, the course flags time-sensitive items — like the Superintendent-to-Secretary-of-Education change and the Auditor-to-Comptroller rename — and points you to Indiana's own sources to confirm the current rule.",
  lessons: [
    // ── Section 1: The Indiana Constitution ──────────────────────────────
    {
      slug: "in-constitution",
      title: "1 · Indiana's constitution: the 1851 rulebook",
      section: "The Indiana Constitution",
      body: `Every U.S. state has its own constitution — its own top-level rulebook — layered *under* the U.S. Constitution but governing the daily machinery of the state. Indiana is on its **second** constitution, adopted in **1851**, replacing the original 1816 statehood constitution (Indiana Historical Bureau, n.d.).

A state constitution does for the state what the U.S. Constitution does for the nation: it creates the branches, distributes power, and sets limits the legislature can't cross by ordinary law. Two features of Indiana's 1851 document stand out and shape everything else in this course:

- **The strict state-debt clause (Article 10, §5).** Indiana's constitution sharply limits the state's ability to borrow — it may not run up debt except in narrow circumstances. In practice this operates as a **de-facto balanced-budget requirement**: because the state generally can't borrow to cover ordinary operating costs, it has to balance its budget. This clause is a direct reaction to a real 1830s–40s fiscal crisis in which the state nearly went bankrupt funding canals and roads (Indiana Historical Bureau, n.d.).
- **Free public education (Article 8, §1).** The constitution makes it the state's duty to provide a "general and uniform system of Common Schools, wherein tuition shall be without charge." Public education isn't just a policy in Indiana — it's a **constitutional obligation**.

A state constitution is also **easier to amend than the U.S. Constitution**, and Indiana's has been amended many times. That matters for this course: some things you'll learn are set in the constitution (hard to change), while others are set by ordinary law (the General Assembly can change them, and sometimes does — we'll flag those).

**A note this course keeps returning to:** state facts **vary and change**. Office names, deadlines, and rules described here are current as of authoring, but the authoritative source is always Indiana's own government (in.gov and the offices below), not a textbook. When something is time-sensitive, we say so.

**Check yourself.** In what year did Indiana adopt its current constitution, and what does the strict state-debt clause effectively require the state budget to do?

## Sources
- Indiana Historical Bureau. (n.d.). *The 1851 Indiana Constitution* (by D. G. Vanderstel). IN.gov. https://www.in.gov/history/about-indiana-history-and-trivia/explore-indiana-history-by-topic/state-constitutions/the-1851-indiana-constitution-by-david-g-vanderstel/
- State of Indiana. (n.d.). *Constitution of the State of Indiana*. IN.gov. https://www.in.gov/history/about-indiana-history-and-trivia/explore-indiana-history-by-topic/indiana-documents-leading-to-statehood/constitution-of-1851/`,
    },

    // ── Section 2: The three state branches ──────────────────────────────
    {
      slug: "in-three-branches",
      title: "2 · The three branches — and Indiana's deliberately weak governor",
      section: "The Three Branches",
      body: `Like the federal government, Indiana splits its power into three branches — but the balance between them is distinctly Indiana's.

**Legislative — the Indiana General Assembly.** A two-chamber (bicameral) legislature:
- **House of Representatives — 100 members, 2-year terms.**
- **Senate — 50 members, 4-year terms.**
It writes state law and passes the budget (Indiana General Assembly, n.d.).

**Executive — the Governor and elected statewide officers.** The Governor is Indiana's chief executive, but the executive branch is **plural**: several statewide officers are elected separately (Lieutenant Governor, Secretary of State, Attorney General, Treasurer, and the office recently renamed **State Comptroller** — see the elections section). Because these officials answer to voters, not to the Governor, executive power in Indiana is **shared**, not concentrated in the Governor alone.

**Judicial — the state courts.** Indiana's court system runs from trial courts up to the **Court of Appeals** and the **Indiana Supreme Court**. How Indiana's *appellate* judges reach the bench is distinctive and covered in the next lesson.

**Indiana's signature feature — a deliberately WEAK governor.** The single most important thing to know about the balance of power in Indiana: **the General Assembly can override the governor's veto with a SIMPLE majority** — the same majority it took to pass the bill in the first place (Indiana General Assembly, n.d.; Indiana Historical Bureau, n.d.).

Compare that to the U.S. Congress, which needs a **two-thirds** vote to override a presidential veto. In Indiana, a governor who vetoes a bill the legislature still wants can be overridden almost immediately. This makes the **legislature the center of gravity** in Indiana government — a design choice, rooted in the 1851 constitution's distrust of concentrated executive power.

**Check yourself.** Name Indiana's three branches, give the size and term length of each legislative chamber, and explain what makes Indiana's governor "weak" compared with the U.S. President.

## Sources
- Indiana General Assembly. (n.d.). *About the General Assembly*. IGA.in.gov. https://iga.in.gov/information/about
- Indiana Historical Bureau. (n.d.). *Constitution of 1851, Article 4 — Legislative*. IN.gov. https://www.in.gov/history/about-indiana-history-and-trivia/explore-indiana-history-by-topic/indiana-documents-leading-to-statehood/constitution-of-1851/article-4-legislative/`,
    },
    {
      slug: "in-courts",
      title: "3 · Indiana's courts: merit selection + retention",
      section: "The Three Branches",
      body: `How does a state pick its judges? States do it very differently — some elect judges in partisan races, some in nonpartisan races, some appoint them. Indiana uses a distinctive **hybrid** for its highest courts.

**Merit selection, then retention (since 1970).** For the **Indiana Supreme Court** and the **Court of Appeals**, Indiana does *not* choose justices in a contested popular election. Instead (State of Indiana, Judicial Branch, n.d.):
1. A nonpartisan **Judicial Nominating Commission** reviews applicants and sends the Governor a short list of the most qualified.
2. The **Governor appoints** a justice from that list.
3. After a couple of years on the bench, the justice faces a **retention vote** — voters answer a simple yes/no "shall this justice be retained?" There's no opponent; it's a performance check, not a campaign.

This "merit selection + retention" system was adopted by constitutional amendment in **1970**. Its goal is to keep the highest courts insulated from ordinary campaign politics while still giving voters a periodic say.

**Not every Indiana court works this way.** Many **trial-court** judges (in the counties) are chosen differently — often in local elections whose rules vary by county. So the "merit selection" rule you just learned applies to the **appellate** courts, not automatically to every judge on every bench. (When you want the rule for a *specific* court, the authoritative source is the Indiana Judicial Branch — courts.in.gov.)

**Why this matters civically:** on your ballot you may see appellate justices listed for a **yes/no retention vote**. That's not a throwaway line — it's your direct check on the judges who interpret Indiana law. Knowing what a retention vote *is* means you can cast it thoughtfully instead of skipping it.

**Check yourself.** Describe Indiana's three-step way of selecting Supreme Court and Court of Appeals justices, and explain what a "retention vote" asks you to decide.

## Sources
- State of Indiana, Judicial Branch. (n.d.). *About the Indiana Supreme Court / selection of justices*. Courts.in.gov. https://www.in.gov/courts/supreme/about/
- Indiana Historical Bureau. (n.d.). *Constitution of 1851, Article 7 — Judicial*. IN.gov. https://www.in.gov/history/about-indiana-history-and-trivia/explore-indiana-history-by-topic/indiana-documents-leading-to-statehood/constitution-of-1851/`,
    },

    // ── Section 3: How a bill becomes a state law ────────────────────────
    {
      slug: "in-bill-to-law",
      title: "4 · How a bill becomes an Indiana law",
      section: "How a Bill Becomes State Law",
      body: `A bill in the Indiana General Assembly travels a path that rhymes with Congress but has its own steps and — crucially — its own ending. Here's the route (Indiana General Assembly, n.d.).

1. **Introduction.** A legislator files a bill in their chamber (House or Senate). Indiana's sessions are short and scheduled: a long "budget" session in odd-numbered years and a shorter session in even-numbered years.
2. **Committee.** The bill goes to a committee, which studies it, holds hearings, may amend it, and votes. **Most bills die in committee** — this is the biggest filter.
3. **Second and third readings / floor vote.** If it survives committee, the full chamber debates it (readings), may amend it, and votes.
4. **The other chamber.** A bill that passes one chamber goes to the other and repeats the whole process. If the second chamber changes it, the two versions must be reconciled (often in a **conference committee**) so both chambers pass **identical** text.
5. **The Governor.** Once both chambers pass the same bill, it goes to the Governor, who can **sign** it, **let it become law without a signature**, or **veto** it.
6. **The Indiana twist — a simple-majority override.** If the Governor vetoes, the General Assembly can override with a **simple majority** of each chamber (not the two-thirds Congress needs). This is the weak-governor design in action: a determined legislative majority can enact a bill **over** the Governor's objection with the same votes it used to pass it.

**A budget wrinkle unique to Indiana's setup:** because the constitution's strict debt clause functions as a de-facto balanced-budget rule (Lesson 1), the budget bill can't simply borrow to cover a shortfall the way the federal government does. Indiana's budget process has to make the numbers balance — that constraint shapes what bills can realistically spend.

**Check yourself.** Put these in order: committee, Governor's signature or veto, introduction, floor vote, the other chamber. Then explain why an Indiana governor's veto is easier to override than a U.S. President's.

## Sources
- Indiana General Assembly. (n.d.). *How a bill becomes a law / legislative process*. IGA.in.gov. https://iga.in.gov/information/about
- Indiana General Assembly. (n.d.). *Indiana General Assembly home*. IGA.in.gov. https://iga.in.gov/`,
    },

    // ── Section 4: Local government in Indiana ───────────────────────────
    {
      slug: "in-local-government",
      title: "5 · Local government in Indiana: 92 counties and 1,000+ townships",
      section: "Local Government in Indiana",
      body: `Indiana's local government has a shape you won't find in every state — most notably, it still runs on a dense layer of **townships**, which many states have dropped.

**Counties — 92 of them.** Indiana is divided into **92 counties**, and every square foot of the state is inside one. A typical Indiana county is run by two elected bodies working together (Indiana General Assembly, n.d.; National Association of Counties, n.d.):
- A **Board of Commissioners** (usually three members) — the county's executive, handling day-to-day administration, roads, and the like.
- A **County Council** (usually seven members) — the county's fiscal body, which controls the budget and sets tax levies.
Splitting executive and fiscal power between two elected boards is itself an Indiana characteristic.

**Townships — over 1,000 active ones.** Indiana keeps a **township** layer that many states abolished. There are roughly **1,008 active townships**, and — a distinctive fact — **every acre of Indiana lies within a township**; there are no gaps. Each township is run by an elected **Township Trustee** and a small **Township Board**. Historically townships handled things like **township assistance** (local poor relief), some **fire protection** in unincorporated areas, and property-related duties (Indiana General Assembly, n.d.).

⚠️ **Time-sensitive / varies — confirm the current setup.** The *exact* count of active townships and the precise duties they still perform have been the subject of ongoing reform debate and can shift. Treat "≈1,008 townships" as an authored-time figure and confirm the current number and duties with the state (Indiana Code Title 36 at iga.in.gov and in.gov), not a fixed textbook number.

**Cities and towns.** On top of counties and townships, Indiana has incorporated **cities** (with a mayor and council) and **towns** (usually a town council), which run municipal services where people are more densely settled.

The practical payoff is the same as everywhere: **who provides your service depends on where you live** — it might be your city, your county, or your township. Indiana's township layer just gives it one more box than many states have.

**Check yourself.** How many counties does Indiana have, what are the two elected county bodies and what does each control, and what local layer does Indiana keep that many states have dropped?

## Sources
- Indiana General Assembly. (n.d.). *Indiana Code, Title 36 — Local Government*. IGA.in.gov. https://iga.in.gov/laws/current/ic/titles/36
- National Association of Counties. (n.d.). *County government overview: Indiana*. https://www.naco.org/`,
    },

    // ── Section 5: Elections & ballot access ─────────────────────────────
    {
      slug: "in-elections",
      title: "6 · Elections in Indiana: strict photo ID, excuse-required mail voting",
      section: "Elections & Ballot Access",
      body: `Elections are run by each state, so Indiana's rules are specifically Indiana's — and several of them are notably **strict**. (Because rules like these change, the authoritative and current source is always the Indiana Secretary of State's elections division at in.gov/sos.)

**Strict photo voter ID — and the Supreme Court case that upheld it.** To vote in person in Indiana, you generally must show a government-issued **photo ID**. Indiana's law was one of the first strict photo-ID laws in the country, and it was challenged all the way to the U.S. Supreme Court. In **Crawford v. Marion County Election Board, 553 U.S. 181 (2008)**, the Court **upheld** Indiana's photo-ID requirement, making it a landmark decision that other states pointed to (Indiana Election Division, n.d.; Crawford v. Marion County Election Board, 2008).

**Mail (absentee) voting requires an excuse.** Indiana is **not** a no-excuse mail-voting state. To vote absentee **by mail**, you generally must qualify under one of the state's listed **excuses** (for example, being absent from the county on Election Day, a disability, being an elderly voter, or certain work/scheduling conflicts). If you don't meet an excuse, you vote in person (Indiana Election Division, n.d.).

**Registration closes about 29 days before the election.** Indiana does **not** offer same-day registration. You must be registered roughly **29 days before Election Day** to vote in it — so the deadline lands about four weeks out. Miss it, and you can't vote in that election (Indiana Election Division, n.d.).

**No statewide citizen initiative.** Here's a big structural fact for ballot access: **Indiana has NO statewide citizen-initiated ballot measures.** In many Western states, ordinary citizens can gather signatures to put a law or constitutional amendment directly on the ballot. **In Indiana, they can't** — the 1851 constitution gives the power to propose amendments **only to the General Assembly** (Indiana Historical Bureau, n.d.). So in Indiana, "changing the law" means electing legislators and lobbying them, not launching a petition drive.

⚠️ **Confirm the current details.** ID lists, excuse categories, and the exact registration deadline are set by state law and can be adjusted. Verify the current rules at **in.gov/sos** before relying on a specific one.

**Check yourself.** Name Indiana's ID requirement to vote in person and the case that upheld it; explain what "absentee by mail requires an excuse" means; and state whether an Indiana citizen can put a new law on the ballot by petition.

## Sources
- Indiana Election Division / Secretary of State. (n.d.). *Voter information — ID, absentee, registration*. IN.gov. https://www.in.gov/sos/elections/
- Indiana Historical Bureau. (n.d.). *Constitution of 1851, Article 16 — Amendments*. IN.gov. https://www.in.gov/history/about-indiana-history-and-trivia/explore-indiana-history-by-topic/indiana-documents-leading-to-statehood/constitution-of-1851/article-16-amendments/
- Crawford v. Marion County Election Board, 553 U.S. 181 (2008). https://www.supremecourt.gov/`,
    },
    {
      slug: "in-offices-that-changed",
      title: "7 · Two Indiana offices that recently CHANGED (flagged)",
      section: "Elections & Ballot Access",
      body: `This lesson exists because of the course's core honesty rule: **state facts change**, and two Indiana executive offices changed recently enough that older sources — and even the constitution's own text — can mislead you. Both are flagged here so you check the current name rather than trusting a stale one.

**1) Superintendent of Public Instruction → appointed Secretary of Education (effective 2021).** For most of Indiana's history, the state's top K–12 education official — the **Superintendent of Public Instruction** — was **elected** statewide. Indiana changed this: the position became an **appointed Secretary of Education**, chosen by the Governor, **effective in 2021** (Ballotpedia, n.d.-a).

⚠️ **The subtle part to flag:** the *constitution* still names the office of **"Superintendent of Public Instruction."** So the working, appointed job is the **Secretary of Education**, while the older constitutional title lingers in the document. If you read the constitution and then read a news story, you may see **two different names for what is now one appointed office.** Don't assume the elected superintendent still exists — confirm the current structure at in.gov.

**2) State Auditor → State Comptroller (effective July 1, 2023).** The statewide elected officer long called the **State Auditor** — the state's chief financial/accounting officer — was **renamed the State Comptroller**, effective **July 1, 2023** (WFYI Public Media, 2023). It's the **same office and the same elected position**; only the name changed, to better match what the office actually does. Sources written before mid-2023 will call it "Auditor"; sources after call it "Comptroller."

**Why a whole lesson on two name/selection changes?** Because this is exactly where learners get tripped up, and it teaches the transferable skill: **when a source and a document disagree on an office's name or how it's filled, the state's own current site is the tiebreaker.** Indiana isn't unique in renaming or reworking offices — every state does it — so the habit ("verify the office's *current* name and *current* selection method") matters more than memorizing today's answer.

**Check yourself.** What changed about Indiana's top K–12 education office in 2021, why can the constitution's text still confuse you about it, and what was the State Auditor renamed to (and when)?

## Sources
- Ballotpedia. (n.d.-a). *Indiana Secretary of Education*. https://ballotpedia.org/Indiana_Secretary_of_Education
- WFYI Public Media. (2023, May 8). *Indiana state auditor changing title to state comptroller*. https://www.wfyi.org/public-affairs/2023-05-08/indiana-state-auditor-changing-title-to-state-comptroller
- State of Indiana. (n.d.). *State of Indiana — agencies and officials*. IN.gov. https://www.in.gov/`,
    },

    // ── Section 6: Get involved where you live ───────────────────────────
    {
      slug: "in-get-involved",
      title: "8 · Get involved where you live in Indiana",
      section: "Get Involved Where You Live",
      body: `Knowing how Indiana works only pays off when you **show up**. Because Indiana concentrates power in its legislature and its local boards, that's exactly where an engaged Hoosier has leverage.

**Register and vote — mind Indiana's deadlines.** Register (and check your registration) **at least ~29 days before** any election you want to vote in, since Indiana has no same-day registration. Bring your **photo ID** to the polls. If you need to vote by mail, confirm you qualify under an **excuse** first. Start at the Secretary of State's elections site (Indiana Election Division, n.d.).

**Contact your state legislators — they're the center of gravity.** You have **one state representative** and **one state senator** in the General Assembly, on top of your members of Congress. Because Indiana's legislature can override the governor and there's **no citizen initiative**, lobbying your legislators is *the* way to change state law here. Look them up and track bills at **iga.in.gov**, where you can also find committee schedules and read bills (Indiana General Assembly, n.d.).

**Testify or submit comment on a bill.** Indiana's committee hearings are where most bills live or die. Watch a committee's calendar on iga.in.gov, and submit written comment or testify on a bill you care about — comment carries the most weight *before* the committee vote.

**Show up locally — county, township, city.** Your **County Council** and **Board of Commissioners** meetings, your **Township** meetings, and your **city/town council** meetings are public and set your local taxes and services. These smaller rooms are where one person's comment moves things most — and remember Indiana's extra township layer means there may be one more local board than you'd expect.

**Cast your retention votes thoughtfully.** When appellate justices appear on your ballot for a **yes/no retention vote** (Lesson 3), that's a real decision — read up before you fill it in rather than leaving it blank.

**Check yourself.** Name three specific ways to get involved in Indiana government, and explain why contacting your state legislators is especially important in Indiana given its weak governor and lack of a citizen initiative.

## Sources
- Indiana General Assembly. (n.d.). *Find your legislators / track legislation*. IGA.in.gov. https://iga.in.gov/
- Indiana Election Division / Secretary of State. (n.d.). *Voter information*. IN.gov. https://www.in.gov/sos/elections/`,
    },

    // ── Section 7: Practice ──────────────────────────────────────────────
    {
      slug: "in-practice",
      title: "9 · Practice: Indiana civics fill-in",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about Indiana state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt: "Indiana's current constitution was adopted in the year ___.",
            answer: "1851",
            explanation:
              "Indiana's second and current constitution dates to 1851, replacing the 1816 statehood constitution.",
          },
          {
            prompt:
              "The Indiana House has 100 members and the Indiana ___ has 50 members.",
            answer: "senate",
            explanation:
              "The bicameral General Assembly is a 100-member House (2-year terms) and a 50-member Senate (4-year terms).",
          },
          {
            prompt:
              "Indiana's legislature can override a governor's veto with a ___ majority (not two-thirds).",
            answer: "simple",
            accept: ["majority", "simple majority"],
            explanation:
              "A simple-majority override is Indiana's 'weak governor' signature — the same majority that passed the bill can override the veto.",
          },
          {
            prompt: "Indiana is divided into ___ counties.",
            answer: "92",
            accept: ["ninety-two", "ninety two"],
            explanation:
              "Indiana has 92 counties, each typically run by a Board of Commissioners plus a County Council.",
          },
          {
            prompt:
              "To vote in person in Indiana you generally must show a government-issued photo ___.",
            answer: "id",
            accept: ["identification"],
            explanation:
              "Indiana's strict photo-ID law was upheld by the U.S. Supreme Court in Crawford v. Marion County (2008).",
          },
          {
            prompt:
              "TRUE or FALSE: an ordinary Indiana citizen can gather signatures to put a new state law directly on the ballot.",
            answer: "false",
            explanation:
              "False. Indiana has NO statewide citizen initiative; only the General Assembly can propose constitutional amendments.",
          },
        ],
      },
    },

    // ── Section 8: Final quiz ────────────────────────────────────────────
    {
      slug: "in-quiz",
      title: "10 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What is distinctive about Indiana's strict state-debt clause (Article 10, §5)?",
            options: [
              "It lets the state borrow without limit",
              "It effectively requires the state to balance its budget",
              "It abolishes the state income tax",
              "It gives the governor a line-item veto",
            ],
            correctIndex: 1,
            explanation:
              "Because the state generally can't borrow to cover ordinary costs, the debt clause functions as a de-facto balanced-budget requirement.",
            sourceLessonSlug: "in-constitution",
          },
          {
            prompt: "How can the Indiana General Assembly override the governor's veto?",
            options: [
              "With a two-thirds vote of each chamber",
              "With a simple majority of each chamber",
              "It cannot — the governor's veto is final",
              "Only by a statewide referendum",
            ],
            correctIndex: 1,
            explanation:
              "Indiana's veto override needs only a simple majority — the same majority that passed the bill — making the governor deliberately 'weak.'",
            sourceLessonSlug: "in-three-branches",
          },
          {
            prompt: "How does Indiana select its Supreme Court and Court of Appeals justices?",
            options: [
              "Partisan statewide elections",
              "Lifetime appointment by the legislature",
              "Merit selection (nominating commission + governor) followed by yes/no retention votes",
              "Appointment by the U.S. President",
            ],
            correctIndex: 2,
            explanation:
              "Since 1970, Indiana's appellate justices are chosen by merit selection and then face retention votes — a yes/no performance check with no opponent.",
            sourceLessonSlug: "in-courts",
          },
          {
            prompt: "In the Indiana General Assembly, where do most bills die?",
            options: ["On the governor's desk", "In committee", "In a retention vote", "At the county council"],
            correctIndex: 1,
            explanation:
              "Committee is the biggest filter — most bills never make it out of committee to a floor vote.",
            sourceLessonSlug: "in-bill-to-law",
          },
          {
            prompt: "Which local layer does Indiana keep that many other states have abolished?",
            options: ["Special districts", "Townships", "Counties", "School boards"],
            correctIndex: 1,
            explanation:
              "Indiana retains a dense township layer (about 1,008 active townships), and every acre of the state lies within one.",
            sourceLessonSlug: "in-local-government",
          },
          {
            prompt: "Which U.S. Supreme Court case upheld Indiana's strict photo voter-ID law?",
            options: [
              "McCulloch v. Maryland",
              "Crawford v. Marion County Election Board (2008)",
              "Gibbons v. Ogden",
              "Marbury v. Madison",
            ],
            correctIndex: 1,
            explanation:
              "Crawford v. Marion County Election Board, 553 U.S. 181 (2008), upheld Indiana's photo-ID requirement.",
            sourceLessonSlug: "in-elections",
          },
          {
            prompt: "What is true about voting absentee BY MAIL in Indiana?",
            options: [
              "Any registered voter may do it for any reason (no-excuse)",
              "It generally requires qualifying under a listed excuse",
              "It is not allowed at all",
              "It is automatic for every voter",
            ],
            correctIndex: 1,
            explanation:
              "Indiana is an excuse-required mail-voting state — you must qualify under one of the state's listed excuses to vote absentee by mail.",
            sourceLessonSlug: "in-elections",
          },
          {
            prompt: "Can an ordinary Indiana citizen put a new state law on the ballot by petition?",
            options: [
              "Yes, with 5% of voters' signatures",
              "Yes, but only in even years",
              "No — Indiana has no statewide citizen initiative",
              "Yes, through the county council",
            ],
            correctIndex: 2,
            explanation:
              "Indiana has no statewide citizen initiative; only the General Assembly can propose constitutional amendments.",
            sourceLessonSlug: "in-elections",
          },
          {
            prompt: "What recently changed about Indiana's top K–12 education office?",
            options: [
              "It was abolished entirely",
              "The elected Superintendent of Public Instruction became an appointed Secretary of Education (effective 2021)",
              "It was merged into the governor's office",
              "It became a federal position",
            ],
            correctIndex: 1,
            explanation:
              "Effective 2021 the office became an appointed Secretary of Education — though the constitution still names 'Superintendent of Public Instruction,' which can confuse readers.",
            sourceLessonSlug: "in-offices-that-changed",
          },
          {
            prompt: "Because Indiana's legislature can override the governor and has no citizen initiative, what is the most effective way to change state law?",
            options: [
              "Launch a signature petition drive",
              "Sue in federal court",
              "Elect and lobby your state legislators (and testify on bills)",
              "Petition the governor directly",
            ],
            correctIndex: 2,
            explanation:
              "With a weak governor and no initiative, the legislature is the center of gravity — electing and lobbying legislators (and testifying in committee) is the real lever.",
            sourceLessonSlug: "in-get-involved",
          },
        ],
      },
    },
  ],
};
