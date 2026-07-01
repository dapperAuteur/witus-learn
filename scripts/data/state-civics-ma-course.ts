// Authored "Massachusetts Civics: How Your State Government Works" — the Massachusetts
// entry in the per-state Civics layer on Learn.WitUS. State-level companion to the
// general Civics courses: those teach the SYSTEM; this teaches Massachusetts's version.
//
// Factual and strictly non-partisan. Every content lesson is cited (APA 7 in-line +
// a `## Sources` bibliography) to MASSACHUSETTS'S OWN OFFICIAL SOURCES: the General
// Court / Legislature (malegislature.gov), the Secretary of the Commonwealth /
// elections (sec.state.ma.us), the courts (mass.gov/courts), and the Massachusetts
// Constitution (1780).
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. Massachusetts
// abolished several county governments and updated voting rules recently (2022 VOTES
// Act). Time-sensitive items are flagged and point learners to sec.state.ma.us.
//
// Organized into sections (course modules), ending with a fill-in exercise + a final
// quiz whose every question links back to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_MA_COURSE: AuthoredCourse = {
  title: "Massachusetts Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the Commonwealth of Massachusetts governs itself — and how you take part where you live. You'll learn Massachusetts's Constitution of 1780 — the oldest functioning written constitution in the world, drafted by John Adams; a Legislature officially named the 'General Court' of 160 representatives and 40 senators; the elected Governor's Council, a colonial holdover that must approve judicial appointments; a judiciary whose judges are APPOINTED (not elected) and serve to age 70; the state's indirect initiative process; and its unusual local map, where several county governments were abolished. It also covers elections (the 2022 VOTES Act) and flags time-sensitive rules, pointing to sec.state.ma.us. Cited to Massachusetts's own official sources (malegislature.gov, sec.state.ma.us, mass.gov/courts).",
  lessons: [
    // ── Section 1: The Massachusetts Constitution ────────────────────────
    {
      slug: "ma-constitution",
      title: "1 · The Constitution of 1780 — the world's oldest functioning one",
      section: "The Massachusetts Constitution",
      body: `Massachusetts holds a genuine world record. Its **Constitution of 1780** is the **oldest functioning written constitution in the world** — older than the U.S. Constitution itself — and it is still in force today (Commonwealth of Massachusetts, n.d.).

It was principally **drafted by John Adams** in 1779–1780, and its structure (a declaration of rights followed by a "frame of government," with three separated branches) directly **influenced the U.S. Constitution** drafted seven years later. Massachusetts, like Virginia, calls itself a **Commonwealth** — a word reflecting government founded on the common good, though it carries no special legal power today. Massachusetts became the **6th state on February 6, 1788.**

Because the 1780 constitution has never been replaced — only amended — Massachusetts government keeps several **colonial-era features** you won't find in most states, and this course highlights them:
- The Legislature is formally called the **"General Court."**
- An elected **Governor's Council** must approve judicial appointments.
- Judges are **appointed and serve to age 70**, not elected.

**A note this course keeps returning to:** state facts **vary and change.** Everything here is current as of authoring, but Massachusetts's own government (malegislature.gov, sec.state.ma.us, mass.gov/courts) is the authoritative source. When something is time-sensitive — like the recent voting-law changes — we say so.

**Check yourself.** What is notable about Massachusetts's 1780 constitution, and who principally drafted it?

## Sources
- Commonwealth of Massachusetts. (n.d.). *Constitution of the Commonwealth of Massachusetts (1780)*. malegislature.gov. https://malegislature.gov/
- Secretary of the Commonwealth of Massachusetts. (n.d.). *Massachusetts government and history*. sec.state.ma.us. https://www.sec.state.ma.us/`,
    },

    // ── Section 2: The three branches + the General Court ────────────────
    {
      slug: "ma-three-branches",
      title: "2 · The three branches and the 'General Court'",
      section: "The Three Branches",
      body: `Massachusetts divides power into three branches, with distinctive names and structures.

**Legislative — the General Court.** Massachusetts's Legislature is officially the **"General Court of the Commonwealth"** — a name kept from colonial times (it once had judicial duties too). It is bicameral (Massachusetts General Court, n.d.):
- **House of Representatives — 160 representatives.**
- **Senate — 40 senators.**
- Members serve **2-year terms**, and Massachusetts has **no legislative term limits.**

**Executive — the Governor and separately elected officers.** The **Governor** and **Lieutenant Governor** run together on a **joint ticket** (since 1966). Voters separately elect the **Attorney General**, the **Secretary of the Commonwealth** (who runs elections), the **Treasurer and Receiver-General**, and the **State Auditor.** Massachusetts also elects a distinctive body — the **Governor's Council** — covered in its own lesson next.

**Judicial — the Massachusetts courts.** The top court has a distinctive name: the **Supreme Judicial Court (SJC)** — the oldest continuously functioning appellate court in the Western Hemisphere — above the **Appeals Court** and the Trial Court. Crucially, Massachusetts judges are **appointed, not elected** — the subject of the next lesson (Massachusetts Court System, n.d.).

**Veto and override.** The Governor may veto bills (and line-item veto appropriations). The General Court overrides with a **two-thirds vote of each chamber.**

**Check yourself.** What is the official name of the Massachusetts Legislature, and how many members sit in each chamber?

## Sources
- Massachusetts General Court. (n.d.). *About the General Court*. malegislature.gov. https://malegislature.gov/
- Massachusetts Court System. (n.d.). *The Supreme Judicial Court and the Trial Court*. mass.gov/courts. https://www.mass.gov/orgs/massachusetts-court-system`,
    },

    // ── Section 3: The Governor's Council + appointed judges ─────────────
    {
      slug: "ma-governors-council",
      title: "3 · The Governor's Council and how Massachusetts picks judges",
      section: "The Three Branches",
      body: `Here is Massachusetts's most distinctive institution — a body most states don't have at all.

**The Governor's Council (Executive Council).** Massachusetts elects an **eight-member Governor's Council** (from eight districts), chaired by the **Lieutenant Governor.** It is a colonial holdover with a real modern job: it **must approve many of the Governor's most important actions**, including (Commonwealth of Massachusetts, n.d.):
- **Judicial appointments** — the Governor cannot seat a judge without the Council's confirmation.
- **Pardons and commutations**, certain contracts and payments, and other appointments.

**How Massachusetts picks judges — appointment, not election.** Unlike states that elect judges (Michigan, Washington) or have the legislature elect them (Virginia), Massachusetts judges are **appointed** (Massachusetts Court System, n.d.):
1. The **Governor nominates** a judge (advised by a judicial nominating commission).
2. The **Governor's Council votes to confirm** — the essential check.
3. Once confirmed, a Massachusetts judge holds office **until mandatory retirement at age 70** — there are **no judicial elections and no fixed re-appointment**, giving judges strong independence.

Why it matters: Massachusetts keeps judges **out of electoral politics entirely**, and routes the confirmation power through an **elected Council** rather than the Senate. If you're comparing states, this Governor's-Council-confirms-and-judges-serve-to-70 model is genuinely unusual.

**Check yourself.** What must the Governor's Council approve, and until what age do Massachusetts judges serve once confirmed?

## Sources
- Commonwealth of Massachusetts. (n.d.). *The Governor's Council*. sec.state.ma.us / mass.gov. https://www.mass.gov/
- Massachusetts Court System. (n.d.). *Judicial appointment and tenure*. mass.gov/courts. https://www.mass.gov/orgs/massachusetts-court-system`,
    },

    // ── Section 4: How a bill becomes law + the indirect initiative ──────
    {
      slug: "ma-bill-to-law",
      title: "4 · How a bill becomes law — and the indirect initiative",
      section: "Making Law",
      body: `A Massachusetts law can be made **through the General Court**, or — with a distinctive extra step — **by the voters.**

**Path 1 — through the General Court** (Massachusetts General Court, n.d.):
1. **Introduction.** A legislator files a bill (Massachusetts uses a broad "right of free petition," so residents may ask a legislator to file bills on their behalf).
2. **Committee.** Joint committees (shared by both chambers) hold hearings and vote.
3. **Floor votes.** Both the House and Senate must pass it.
4. **Governor.** The Governor may sign, veto (two-thirds override), or return it with amendments.

**Path 2 — the INDIRECT initiative (a Massachusetts distinctive).** Massachusetts has an initiative process, but it is **indirect**: a citizen petition does **not** go straight to the ballot. Instead (Secretary of the Commonwealth, n.d.):
1. Petitioners gather an initial round of signatures and submit the measure to the **General Court.**
2. The **Legislature gets first crack** — it may enact the measure itself.
3. If the Legislature does **not** act, petitioners gather a **second round** of signatures, and **then** the measure goes to the **voters** on the ballot.

This "legislature first, ballot second" design is why it's called an **indirect** initiative — a middle path between pure legislative lawmaking and the direct initiatives of states like Colorado or California.

**Check yourself.** What makes Massachusetts's initiative "indirect," and who gets the first opportunity to act on a citizen petition?

## Sources
- Massachusetts General Court. (n.d.). *How an idea becomes a law; the right of free petition*. malegislature.gov. https://malegislature.gov/
- Secretary of the Commonwealth. (n.d.). *Massachusetts initiative and referendum process*. sec.state.ma.us. https://www.sec.state.ma.us/`,
    },

    // ── Section 5: Local government + abolished counties ─────────────────
    {
      slug: "ma-local-government",
      title: "5 · Local government: towns, cities, and Massachusetts's shrinking counties",
      section: "Local Government",
      body: `Massachusetts has one of the most distinctive local-government stories in the country — and it centers on the famous **town meeting** and the **decline of county government.**

**Towns and the town meeting.** Massachusetts is a **town-based** state. Many smaller towns still govern by **open town meeting**, in which **any registered voter can attend, speak, and vote** on the town budget and bylaws — one of the purest forms of direct democracy in America. Larger communities use **representative town meeting** or a **city** form (mayor/council or council/manager). Massachusetts is a strong **home-rule** state under the **Home Rule Amendment of 1966** (Commonwealth of Massachusetts, n.d.).

**The shrinking county.** Here's the twist that surprises people: ⚠️ Massachusetts **abolished the government of many of its counties.** Between roughly **1997 and 2000, several county governments were dissolved** and their functions absorbed by the **state** (Commonwealth of Massachusetts, n.d.):
- There are still **14 counties as geographic and judicial districts**, but **several no longer have a functioning county government** — the state took over their courts, jails, and registries.
- A few counties (such as Barnstable, Bristol, Dukes, Norfolk, Plymouth) **retained** county government; others did not.

So in Massachusetts, "what does my county do?" genuinely depends on **which** county you're in — a rare situation nationwide. The **town or city**, not the county, is the center of local government for most residents.

**Check yourself.** What can any registered voter do at an open town meeting, and what happened to many Massachusetts county governments around 1997–2000?

## Sources
- Commonwealth of Massachusetts. (n.d.). *Cities and towns; home rule; the status of county government*. mass.gov. https://www.mass.gov/
- Massachusetts General Court. (n.d.). *Home Rule Amendment (Article LXXXIX)*. malegislature.gov. https://malegislature.gov/`,
    },

    // ── Section 6: Elections & getting involved ──────────────────────────
    {
      slug: "ma-elections-involved",
      title: "6 · Elections and how to take part",
      section: "Get Involved",
      body: `Massachusetts has **expanded voting access** significantly and offers real ways to take part.

**The 2022 VOTES Act.** In 2022 Massachusetts passed the **VOTES Act**, which made permanent and expanded several access measures (Secretary of the Commonwealth, n.d.):
- **No-excuse mail-in voting** for every voter, and expanded **early in-person voting.**
- **Same-day registration** (register and vote at the same time), phasing in.
- Improved ballot access for eligible **jail-held** (not convicted of a felony) voters.

⚠️ **Time-sensitive.** Registration deadlines, early-voting windows, and the rollout of same-day registration change and are administered by your **local city or town clerk**. Confirm the **current** rules at **sec.state.ma.us** before an election.

**How to take part:**
- **Register and vote** — use mail-in, early, or Election-Day voting; check your status at sec.state.ma.us.
- **Go to town meeting.** If your town has open town meeting, **show up and vote** on the budget and bylaws directly — few states offer this.
- **Use the free petition and initiative.** You can ask your legislator to file a bill (the right of free petition), or join an **indirect initiative** campaign to bring a measure to the General Court and, if needed, the ballot.
- **Contact your legislators** — you have one Representative and one Senator in the General Court.
- **Run** — select board, school committee, city council, and town offices are reachable local starting points.

**Check yourself.** Name two access changes from the 2022 VOTES Act, and one uniquely local way Massachusetts residents make decisions.

## Sources
- Secretary of the Commonwealth. (n.d.). *Voting in Massachusetts; the VOTES Act (2022)*. sec.state.ma.us. https://www.sec.state.ma.us/
- Massachusetts General Court. (n.d.). *Right of free petition; getting involved*. malegislature.gov. https://malegislature.gov/`,
    },

    // ── Section 7: Practice (fill in the blanks) ─────────────────────────
    {
      slug: "ma-exercise",
      title: "7 · Practice: fill in the blanks",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about Massachusetts state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt:
              "Massachusetts's Constitution of ___ is the oldest functioning written constitution in the world.",
            answer: "1780",
            explanation:
              "Drafted principally by John Adams, the 1780 constitution is still in force and influenced the U.S. Constitution.",
          },
          {
            prompt: "The official name of the Massachusetts Legislature is the General ___.",
            answer: "Court",
            accept: ["court"],
            explanation:
              "The Legislature is the 'General Court of the Commonwealth,' a colonial-era name; it has a 160-member House and a 40-member Senate.",
          },
          {
            prompt:
              "The elected 8-member body that must approve Massachusetts judicial appointments is the Governor's ___.",
            answer: "Council",
            accept: ["council"],
            explanation:
              "The Governor's Council (Executive Council), chaired by the Lieutenant Governor, confirms judges and approves pardons — a colonial holdover.",
          },
          {
            prompt:
              "Massachusetts judges are appointed (not elected) and serve until mandatory retirement at age ___.",
            answer: "70",
            accept: ["seventy"],
            explanation:
              "Once nominated by the Governor and confirmed by the Governor's Council, a Massachusetts judge serves to age 70 — no judicial elections.",
          },
          {
            prompt:
              "Massachusetts's initiative is called ___ because a citizen petition goes to the Legislature first, before it could reach the ballot.",
            answer: "indirect",
            explanation:
              "In the indirect initiative, the General Court gets first crack; only if it declines do petitioners gather more signatures and go to the voters.",
          },
          {
            prompt:
              "TRUE or FALSE: Every Massachusetts county still has a fully functioning county government.",
            answer: "false",
            explanation:
              "False. Around 1997–2000 several county governments were abolished and absorbed by the state; 14 counties remain as districts, but not all have county government.",
          },
        ],
      },
    },

    // ── Section 8: Final quiz ────────────────────────────────────────────
    {
      slug: "ma-quiz",
      title: "8 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What is notable about the Massachusetts Constitution of 1780?",
            options: [
              "It was the first to abolish courts",
              "It is the oldest functioning written constitution in the world, drafted by John Adams",
              "It has never been amended",
              "It created a unicameral legislature",
            ],
            correctIndex: 1,
            explanation:
              "The 1780 constitution, drafted principally by John Adams, is the world's oldest functioning written constitution and influenced the U.S. Constitution.",
            sourceLessonSlug: "ma-constitution",
          },
          {
            prompt: "What is the official name of the Massachusetts Legislature?",
            options: ["The Assembly", "The General Court", "The House of Burgesses", "The Legislature of the Bay"],
            correctIndex: 1,
            explanation:
              "It is the 'General Court of the Commonwealth' — a 160-member House and 40-member Senate.",
            sourceLessonSlug: "ma-three-branches",
          },
          {
            prompt: "What does the elected Governor's Council do?",
            options: [
              "Writes the state budget",
              "Confirms judicial appointments and approves pardons",
              "Runs the public schools",
              "Commands the National Guard",
            ],
            correctIndex: 1,
            explanation:
              "The eight-member Governor's Council confirms judges and approves pardons and certain appointments — a colonial holdover.",
            sourceLessonSlug: "ma-governors-council",
          },
          {
            prompt: "How does Massachusetts choose its judges?",
            options: [
              "Partisan elections",
              "The Legislature elects them",
              "The Governor nominates and the Governor's Council confirms; judges serve to age 70",
              "A citizens' commission elects them",
            ],
            correctIndex: 2,
            explanation:
              "Massachusetts judges are appointed by the Governor with Governor's Council confirmation and serve until mandatory retirement at 70 — no elections.",
            sourceLessonSlug: "ma-governors-council",
          },
          {
            prompt: "What makes Massachusetts's initiative process 'indirect'?",
            options: [
              "Only the Governor can start it",
              "A citizen petition goes to the Legislature first; only if it declines does the measure go to voters",
              "It can never reach the ballot",
              "It applies only to local governments",
            ],
            correctIndex: 1,
            explanation:
              "The General Court gets first crack at an initiative petition; petitioners gather a second round of signatures to reach the ballot only if the Legislature declines.",
            sourceLessonSlug: "ma-bill-to-law",
          },
          {
            prompt: "What is an 'open town meeting' in Massachusetts?",
            options: [
              "A closed session of the Legislature",
              "A gathering where any registered voter can attend, speak, and vote on the town budget and bylaws",
              "A meeting only for elected officials",
              "A statewide referendum",
            ],
            correctIndex: 1,
            explanation:
              "In open town meeting, any registered voter can directly vote on town budgets and bylaws — one of the purest forms of direct democracy.",
            sourceLessonSlug: "ma-local-government",
          },
          {
            prompt: "What happened to many Massachusetts county governments around 1997–2000?",
            options: [
              "They were given new powers",
              "Several were abolished and their functions absorbed by the state",
              "They merged into one county",
              "They became independent cities",
            ],
            correctIndex: 1,
            explanation:
              "Several county governments were dissolved; 14 counties remain as districts, but not all retain a functioning county government.",
            sourceLessonSlug: "ma-local-government",
          },
          {
            prompt: "What did the 2022 VOTES Act do?",
            options: [
              "Ended mail voting",
              "Expanded no-excuse mail voting, early voting, and same-day registration",
              "Abolished the Governor's Council",
              "Required property ownership to vote",
            ],
            correctIndex: 1,
            explanation:
              "The VOTES Act expanded mail-in and early voting and phased in same-day registration.",
            sourceLessonSlug: "ma-elections-involved",
          },
          {
            prompt: "Which two statewide officers do Massachusetts voters elect separately from the Governor?",
            options: [
              "The Chief Justice and the Speaker",
              "The Attorney General and the Secretary of the Commonwealth (among others)",
              "Two U.S. Senators",
              "The county sheriffs only",
            ],
            correctIndex: 1,
            explanation:
              "Besides the Governor/Lt. Governor joint ticket, voters elect the Attorney General, Secretary of the Commonwealth, Treasurer, and Auditor.",
            sourceLessonSlug: "ma-three-branches",
          },
          {
            prompt: "Why does this course tell you to VERIFY Massachusetts's voting rules?",
            options: [
              "Because Massachusetts has no elections office",
              "Because the VOTES Act's rules are phasing in and are administered by local clerks, so confirm current details at sec.state.ma.us",
              "Because only Congress sets them",
              "Because voting is secret",
            ],
            correctIndex: 1,
            explanation:
              "Same-day registration and early-voting details are rolling out and run by city/town clerks, so the authoritative, current source is sec.state.ma.us.",
            sourceLessonSlug: "ma-elections-involved",
          },
        ],
      },
    },
  ],
};
