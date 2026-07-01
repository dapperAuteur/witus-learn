// Authored "District of Columbia Civics: How Your Government Works" — the DC entry in
// the per-state Civics layer on Learn.WitUS. DC is NOT a state; it is a federal district.
// State-level companion to the general Civics courses: those teach the SYSTEM; this
// teaches DC's distinctive version — and why it is different from a state.
//
// Factual and strictly non-partisan. Every content lesson is cited (APA 7 in-line +
// a `## Sources` bibliography) to DC'S OWN OFFICIAL SOURCES: the Council of the District
// of Columbia (dccouncil.gov / code.dccouncil.gov), the Board of Elections (dcboe.gov),
// the Mayor (mayor.dc.gov), the DC Courts (dccourts.gov), plus the U.S. Constitution and
// the District of Columbia Home Rule Act (1973).
//
// Authoritative-values rule (load-bearing): DC's status and autonomy CHANGE, and the
// statehood question is active. Time-sensitive items are flagged and point learners to
// dcboe.gov / dccouncil.gov.
//
// Organized into sections (course modules), ending with a fill-in exercise + a final
// quiz whose every question links back to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_DC_COURSE: AuthoredCourse = {
  title: "District of Columbia Civics: How Your Government Works",
  description:
    "A practical, non-partisan guide to how the District of Columbia governs itself — and why it is different from a state. DC is NOT a state; it is a FEDERAL DISTRICT created by the U.S. Constitution as the seat of the national government, and Congress holds ultimate authority over it. You'll learn how the Home Rule Act of 1973 gave DC an elected Mayor and Council; why DC has no voting representation in Congress (only a non-voting Delegate) yet gets three electoral votes for President under the 23rd Amendment; how its distinctive Advisory Neighborhood Commissions work; how its judges are appointed by the U.S. President; and the ongoing DC statehood debate. Time-sensitive facts are flagged, pointing to dccouncil.gov and dcboe.gov. Cited to DC's own official sources and the U.S. Constitution.",
  lessons: [
    // ── Section 1: A federal district, not a state ───────────────────────
    {
      slug: "dc-federal-district",
      title: "1 · Washington, DC is a federal district — not a state",
      section: "What Makes DC Unique",
      body: `The most important fact about the District of Columbia's government is what DC **is not**: it is **NOT a state.** DC is a **federal district** — the **seat of the national government** — and that single fact shapes everything about its civics (Council of the District of Columbia, n.d.).

**Written into the Constitution.** The **U.S. Constitution (Article I, Section 8)** authorized a special **district** to serve as the nation's capital, **not part of any state**, over which **Congress would exercise authority.** The District was formed in 1790–1801 from land **ceded by Maryland** (an earlier portion from Virginia was returned to Virginia in 1846). So from the start, DC was designed to be governed differently from a state (U.S. Constitution, Article I, §8; Council of the District of Columbia, n.d.).

**Congress holds ultimate power.** Because the Constitution gives **Congress** authority over the District, **the U.S. Congress is, in effect, DC's ultimate government.** Congress can **review and overturn laws** the District passes, shapes its **budget**, and historically governed DC directly. DC's local self-government exists only because **Congress granted it** — and Congress can change it. This is the through-line of DC civics: DC governs its **local** affairs, but under the **ultimate authority of Congress** — a relationship no state has.

DC is often noted to have **more residents than some states** (such as Wyoming and Vermont), which fuels the debates you'll meet later about **representation and statehood.**

**A note this course keeps returning to:** facts about DC's status and autonomy **change**, and the **statehood** question is active. Everything here is current as of authoring, but DC's own government (dccouncil.gov, dcboe.gov) and the U.S. Constitution are the authoritative sources. When something is time-sensitive, we say so.

**Check yourself.** What is DC (if not a state), and which body holds ultimate authority over it?

## Sources
- Council of the District of Columbia. (n.d.). *About DC government; the District as a federal district*. dccouncil.gov. https://dccouncil.gov/
- U.S. Constitution, Article I, Section 8 (the District Clause). https://constitution.congress.gov/`,
    },

    // ── Section 2: Home Rule ─────────────────────────────────────────────
    {
      slug: "dc-home-rule",
      title: "2 · Home Rule: DC's elected Mayor and Council (since 1973)",
      section: "Local Government",
      body: `For most of its history, **DC had no elected local government at all** — **Congress ran the District directly**, and residents could not elect local leaders. That changed in **1973** (Council of the District of Columbia, n.d.).

**The Home Rule Act of 1973.** Congress passed the **District of Columbia Home Rule Act**, granting DC **limited self-government.** Under Home Rule (Council of the District of Columbia, n.d.):
- DC residents elect a **Mayor** (the chief executive) to a 4-year term, and
- a **13-member Council** (the local legislature): a **Chairman** and **four at-large members** elected citywide, plus **eight members**, one from each of DC's eight **wards.**
The Mayor and Council handle the things a **city and a state** would normally do — schools, police, sanitation, local taxes, and local laws.

**But Congress keeps the last word.** ⚠️ Home Rule is **limited**, not full self-government (Council of the District of Columbia, n.d.):
- **Every law the DC Council passes goes to Congress for a review period**, and Congress can **disapprove** it (a "resolution of disapproval").
- Congress shapes and reviews DC's **budget** (DC has gained more **budget autonomy** over local funds in recent years, but federal oversight remains). ⚠️ Confirm the **current** scope of budget autonomy, as it has changed.
- Congress can **override local decisions** and even legislate directly for DC.

So DC's government is **real and elected — but operates under a congressional veto** no state faces.

**Check yourself.** What did the Home Rule Act of 1973 create, and what power does Congress keep over DC laws?

## Sources
- Council of the District of Columbia. (n.d.). *The Home Rule Act (1973); the Mayor and Council; congressional review*. dccouncil.gov. https://dccouncil.gov/
- Code of the District of Columbia. (n.d.). *District of Columbia Home Rule Act*. code.dccouncil.gov. https://code.dccouncil.gov/`,
    },

    // ── Section 3: Representation, the 23rd Amendment, statehood ─────────
    {
      slug: "dc-representation-statehood",
      title: "3 · No vote in Congress, three electoral votes, and the statehood debate",
      section: "What Makes DC Unique",
      body: `DC's relationship to **national** representation is its most contested feature.

**No voting representation in Congress.** ⚠️ DC residents **pay federal taxes and can be drafted, but have NO voting representation in Congress.** DC elects a **Delegate to the U.S. House**, but the Delegate **cannot vote** on final passage of laws on the House floor, and DC has **no U.S. Senators at all** (Council of the District of Columbia, n.d.). This is the origin of the protest slogan **"Taxation Without Representation,"** printed on DC license plates — DC residents are governed by a Congress they **cannot vote for.**

**But three electoral votes for President.** There's an important exception: the **23rd Amendment (1961)** gave DC **electoral votes for President** — **three** (treated as if DC were a state, but capped at the number of the least-populous state) (U.S. Constitution, Amendment XXIII). So DC residents **do vote for President**, even though they lack voting members of Congress.

**The statehood debate.** ⚠️ **Time-sensitive and active:** many DC residents and officials seek **statehood** (a proposed "State of Washington, Douglass Commonwealth") to gain full voting representation and self-government. **DC voters approved statehood in a 2016 referendum**, and the **U.S. House passed a DC statehood bill** (in 2020 and 2021), but it has **not become law** (it would need the Senate and faces constitutional debate) (Council of the District of Columbia, n.d.). Whether DC becomes a state — or gains representation another way — is an **open, evolving question.** Confirm current status at dccouncil.gov.

**Check yourself.** Why do DC license plates say "Taxation Without Representation," yet DC residents can still vote for President?

## Sources
- Council of the District of Columbia. (n.d.). *DC representation, the Delegate, and statehood efforts*. dccouncil.gov. https://dccouncil.gov/
- U.S. Constitution, Amendment XXIII (DC electoral votes). https://constitution.congress.gov/`,
    },

    // ── Section 4: Neighborhood democracy + presidentially appointed courts
    {
      slug: "dc-ancs-courts",
      title: "4 · Advisory Neighborhood Commissions and presidentially appointed courts",
      section: "The Three Branches",
      body: `DC has two more distinctive institutions worth knowing.

**Advisory Neighborhood Commissions (ANCs) — hyperlocal democracy.** DC is divided into small neighborhood districts, each represented by an elected **Advisory Neighborhood Commissioner** who serves on an **ANC** (Council of the District of Columbia, n.d.). ANCs are **unpaid, grassroots bodies** that advise the city on **very local matters** — zoning, liquor licenses, traffic, permits, and neighborhood concerns — and DC agencies must give ANC positions **"great weight."** With hundreds of commissioners citywide representing just a few thousand residents each, ANCs are one of the **most hyperlocal forms of elected government in America** — a distinctive DC feature that gives ordinary residents a direct, official voice.

**Courts appointed by the President.** ⚠️ Here's a genuinely unusual feature: DC's **local courts are not staffed by locally elected or locally appointed judges.** DC has its own trial court (the **Superior Court**) and the **District of Columbia Court of Appeals** (its highest local court), but their **judges are nominated by the U.S. PRESIDENT and confirmed by the U.S. SENATE** — from a list prepared by a **DC Judicial Nomination Commission** (District of Columbia Courts, n.d.). So even DC's **local** judiciary runs through the **federal** appointment process — another way DC's status as a federal district shapes its government differently from any state.

**Check yourself.** What do Advisory Neighborhood Commissions do, and who appoints DC's local judges?

## Sources
- Council of the District of Columbia. (n.d.). *Advisory Neighborhood Commissions (ANCs)*. dccouncil.gov. https://dccouncil.gov/
- District of Columbia Courts. (n.d.). *Judicial nomination and appointment (President and Senate; Judicial Nomination Commission)*. dccourts.gov. https://www.dccourts.gov/`,
    },

    // ── Section 5: Getting involved ──────────────────────────────────────
    {
      slug: "dc-get-involved",
      title: "5 · How to take part where you live in DC",
      section: "Get Involved",
      body: `Even without statehood, DC residents have **real, accessible ways to take part** — some more local than almost anywhere (District of Columbia Board of Elections, n.d.).

**Voting.** ⚠️ **Time-sensitive:** DC offers **same-day (Election-Day) registration**, **early voting**, and **mail ballots sent to registered voters**, run by the **DC Board of Elections.** You vote for the **Mayor, Council, ANC commissioner, the U.S. House Delegate,** and — for President — DC's electors. Confirm the **current** rules at **dcboe.gov** before you vote.

**How to take part:**
- **Register and vote** — even on Election Day; watch for your mailed ballot; vote in **local** races (Mayor, Council, ANC) that decide day-to-day life.
- **Join your ANC.** Running for **Advisory Neighborhood Commissioner** is one of the most reachable elected offices in the country — a few hundred signatures can put a resident on the ballot, and ANCs shape real neighborhood decisions.
- **Testify at the Council.** The DC Council holds **public hearings**; residents regularly testify on bills and the budget.
- **Engage on representation.** Follow the **statehood and voting-rights** debate — a defining civic issue for DC residents.
- **Watch Congress, too.** Because Congress can review DC laws and budget, national politics directly affects DC's local government in a way it doesn't for states.

**The habit to build:** start with your **ANC and the Council** — the most immediate levers — while staying engaged on DC's larger fight for **representation.**

**Check yourself.** Name two DC offices you vote for, and one unusually reachable elected role in the District.

## Sources
- District of Columbia Board of Elections. (n.d.). *Registering and voting in DC: same-day registration, early voting, mail ballots*. dcboe.gov. https://dcboe.gov/
- Council of the District of Columbia. (n.d.). *Public hearings; getting involved; ANC elections*. dccouncil.gov. https://dccouncil.gov/`,
    },

    // ── Section 6: Practice (fill in the blanks) ─────────────────────────
    {
      slug: "dc-exercise",
      title: "6 · Practice: fill in the blanks",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about the District of Columbia's government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt:
              "Washington, DC is not a state — it is a ___ district, the seat of the national government.",
            answer: "federal",
            explanation:
              "The Constitution (Article I, §8) created DC as a federal district under the ultimate authority of Congress.",
          },
          {
            prompt:
              "The ___ Rule Act of 1973 gave DC an elected Mayor and a 13-member Council.",
            answer: "Home",
            accept: ["home"],
            explanation:
              "Before 1973 Congress ran DC directly; the Home Rule Act granted limited local self-government.",
          },
          {
            prompt:
              "DC residents pay federal taxes but have no voting members of ___ — hence 'Taxation Without Representation.'",
            answer: "Congress",
            accept: ["congress"],
            explanation:
              "DC has a non-voting House Delegate and no senators; the slogan appears on DC license plates.",
          },
          {
            prompt:
              "The 23rd ___ (1961) gave DC three electoral votes for President.",
            answer: "Amendment",
            accept: ["amendment"],
            explanation:
              "The 23rd Amendment lets DC residents vote for President, with electors capped at the least-populous state's number.",
          },
          {
            prompt:
              "DC's hyperlocal elected neighborhood bodies are called Advisory Neighborhood ___ (ANCs).",
            answer: "Commissions",
            accept: ["commissions", "commission"],
            explanation:
              "ANCs advise the city on very local matters and must be given 'great weight' — one of the most hyperlocal governments in America.",
          },
          {
            prompt:
              "TRUE or FALSE: DC's local judges are elected by DC voters.",
            answer: "false",
            explanation:
              "False. DC's local judges are nominated by the U.S. President and confirmed by the U.S. Senate — a federal process.",
          },
        ],
      },
    },

    // ── Section 7: Final quiz ────────────────────────────────────────────
    {
      slug: "dc-quiz",
      title: "7 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What is the District of Columbia?",
            options: [
              "The 51st state",
              "A federal district — the seat of the national government — under the ultimate authority of Congress",
              "A county of Maryland",
              "A national park",
            ],
            correctIndex: 1,
            explanation:
              "DC is a federal district created by the Constitution, not a state; Congress holds ultimate authority over it.",
            sourceLessonSlug: "dc-federal-district",
          },
          {
            prompt: "Which body holds ultimate authority over DC?",
            options: [
              "The Governor of Maryland",
              "The U.S. Congress",
              "The United Nations",
              "The Supreme Court alone",
            ],
            correctIndex: 1,
            explanation:
              "The Constitution's District Clause gives Congress ultimate authority; DC's self-government exists because Congress granted it.",
            sourceLessonSlug: "dc-federal-district",
          },
          {
            prompt: "What did the Home Rule Act of 1973 create?",
            options: [
              "DC statehood",
              "An elected Mayor and a 13-member Council for limited local self-government",
              "A new state constitution",
              "Voting senators for DC",
            ],
            correctIndex: 1,
            explanation:
              "Home Rule gave DC an elected Mayor and Council; before 1973 Congress governed DC directly.",
            sourceLessonSlug: "dc-home-rule",
          },
          {
            prompt: "What power does Congress keep over DC laws under Home Rule?",
            options: [
              "None",
              "A review period in which Congress can disapprove DC laws, plus budget oversight",
              "Only the power to name streets",
              "The power to elect the Mayor",
            ],
            correctIndex: 1,
            explanation:
              "DC laws go to Congress for review and possible disapproval, and Congress shapes DC's budget — a congressional veto no state faces.",
            sourceLessonSlug: "dc-home-rule",
          },
          {
            prompt: "What does 'Taxation Without Representation' on DC plates refer to?",
            options: [
              "DC pays no taxes",
              "DC residents pay federal taxes but have no voting representation in Congress",
              "DC has too many senators",
              "DC cannot vote for Mayor",
            ],
            correctIndex: 1,
            explanation:
              "DC has only a non-voting House Delegate and no senators, despite paying federal taxes.",
            sourceLessonSlug: "dc-representation-statehood",
          },
          {
            prompt: "How can DC residents vote for President despite lacking voting members of Congress?",
            options: [
              "They cannot vote for President",
              "The 23rd Amendment (1961) gives DC three electoral votes",
              "Maryland votes for them",
              "The Mayor casts DC's vote",
            ],
            correctIndex: 1,
            explanation:
              "The 23rd Amendment granted DC electoral votes (three), so residents vote for President.",
            sourceLessonSlug: "dc-representation-statehood",
          },
          {
            prompt: "What is the status of DC statehood?",
            options: [
              "DC became a state in 2016",
              "DC voters approved it (2016) and the U.S. House passed a bill, but it has not become law",
              "It is constitutionally forbidden forever",
              "Congress has no role",
            ],
            correctIndex: 1,
            explanation:
              "DC statehood has advanced (a 2016 referendum, House passage) but is not law; the question remains active.",
            sourceLessonSlug: "dc-representation-statehood",
          },
          {
            prompt: "What are Advisory Neighborhood Commissions (ANCs)?",
            options: [
              "Federal agencies",
              "Unpaid, elected hyperlocal bodies that advise the city on neighborhood matters and must be given 'great weight'",
              "The DC Council's staff",
              "Congressional committees",
            ],
            correctIndex: 1,
            explanation:
              "ANCs are grassroots elected commissions representing a few thousand residents each — among the most hyperlocal governments in America.",
            sourceLessonSlug: "dc-ancs-courts",
          },
          {
            prompt: "Who appoints DC's local judges?",
            options: [
              "DC voters elect them",
              "The U.S. President nominates and the U.S. Senate confirms them (from a DC commission's list)",
              "The Mayor appoints them",
              "The DC Council elects them",
            ],
            correctIndex: 1,
            explanation:
              "Even DC's local judiciary runs through the federal appointment process — a distinctive result of DC's status.",
            sourceLessonSlug: "dc-ancs-courts",
          },
          {
            prompt: "Why does this course tell you to VERIFY DC's autonomy and statehood status?",
            options: [
              "Because DC has no government website",
              "Because DC's budget autonomy and the statehood question are active and change — confirm at dccouncil.gov / dcboe.gov",
              "Because only Maryland decides",
              "Because voting is secret",
            ],
            correctIndex: 1,
            explanation:
              "DC's degree of self-government and its statehood push are evolving, so DC's own sources are essential for current status.",
            sourceLessonSlug: "dc-get-involved",
          },
        ],
      },
    },
  ],
};
