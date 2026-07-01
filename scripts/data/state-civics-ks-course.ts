// Authored "Kansas Civics: How Your State Government Works" — the Kansas entry in the
// per-state Civics layer on Learn.WitUS. State-level companion to the general Civics
// courses: those teach the SYSTEM; this teaches Kansas's version.
//
// Factual and strictly non-partisan. Every content lesson is cited (APA 7 in-line +
// a `## Sources` bibliography) to KANSAS'S OWN OFFICIAL SOURCES: the Legislature
// (kslegislature.gov), the Secretary of State / elections (sos.ks.gov), the Judicial
// Branch (kscourts.gov), and the Kansas Constitution (Wyandotte, 1859/1861).
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. Kansas has
// debated changing how it selects Supreme Court justices. Time-sensitive items are
// flagged and point learners to sos.ks.gov.
//
// Organized into sections (course modules), ending with a fill-in exercise + a final
// quiz whose every question links back to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_KS_COURSE: AuthoredCourse = {
  title: "Kansas Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the state of Kansas governs itself — and how you take part where you live. Kansas was born in conflict: 'Bleeding Kansas' was the violent 1850s struggle over whether Kansas would be a free or slave state, and its free-state Wyandotte Constitution (1859) is still in force today. You'll learn the Kansas Constitution's origins, its plural executive, its Legislature of 40 senators and 125 representatives, its merit-selection Supreme Court, its strong home rule, and its 105 counties — while noting Kansas is unusual for a plains state in having NO statewide citizen initiative. Time-sensitive facts are flagged, pointing to sos.ks.gov. Cited to Kansas's own official sources (kslegislature.gov, sos.ks.gov, kscourts.gov).",
  lessons: [
    // ── Section 1: Bleeding Kansas + the Wyandotte Constitution ──────────
    {
      slug: "ks-bleeding-kansas",
      title: "1 · 'Bleeding Kansas' and the free-state Wyandotte Constitution",
      section: "What Makes Kansas Unique",
      body: `Kansas's founding is one of the most dramatic in American history — it helped **spark the Civil War.** In the 1850s, Kansas became the battleground for the national fight over **slavery**, an era known as **"Bleeding Kansas"** (Kansas Secretary of State, n.d.).

**What happened.** The **Kansas-Nebraska Act of 1854** let settlers decide by vote ("popular sovereignty") whether Kansas would be a **free** or **slave** state. Pro-slavery and anti-slavery settlers **poured in**, rival governments formed, and the territory descended into **violence** — raids, fraud-riddled elections, and killings — that previewed the Civil War (Kansas Secretary of State, n.d.). Kansans wrote **four different constitutions** during this struggle; the **free-state "Wyandotte Constitution" of 1859** finally prevailed, and Kansas entered the Union as a **free state — the 34th state, on January 29, 1861**, just before the war began.

**Still in force.** Remarkably, that **Wyandotte Constitution of 1859 is still Kansas's constitution today** (heavily amended). So Kansas's founding document is a **direct product of the fight against slavery** — a living link to Bleeding Kansas and the coming of the Civil War. Kansas's motto, **"Ad astra per aspera"** ("to the stars through difficulties"), captures that hard birth.

This is the through-line: Kansas's government was **forged in the national struggle over freedom**, and that origin still anchors its constitution.

**A note this course keeps returning to:** state facts **vary and change.** Everything here is current as of authoring, but Kansas's own government (kslegislature.gov, sos.ks.gov, kscourts.gov) is the authoritative source.

**Check yourself.** What was "Bleeding Kansas," and which of Kansas's constitutions is still in force today?

## Sources
- Kansas Secretary of State. (n.d.). *Bleeding Kansas and the Wyandotte Constitution (1859)*. sos.ks.gov. https://sos.ks.gov/
- Kansas Legislature. (n.d.). *The Kansas Constitution*. kslegislature.gov. https://www.kslegislature.gov/`,
    },

    // ── Section 2: The executive + the Legislature ───────────────────────
    {
      slug: "ks-executive-legislature",
      title: "2 · The executive and the Legislature",
      section: "The Three Branches",
      body: `**Executive — a plural executive.** Kansas voters elect several statewide officials (Kansas Secretary of State, n.d.):
- The **Governor** and **Lieutenant Governor** run **together on a joint ticket.**
- Voters separately elect the **Secretary of State** (who runs elections), the **Attorney General**, the **State Treasurer**, and the **Commissioner of Insurance.**
Because several officials are elected on their own, Kansas can end up with a **Governor of one party and other statewide officers of another**, and they can check one another. Statewide officers serve **4-year terms.**

**Legislative — the Kansas Legislature.** A bicameral body meeting in Topeka (Kansas Legislature, n.d.):
- **House of Representatives — 125 members** (2-year terms), and **Senate — 40 senators** (4-year terms).
- It is a part-time citizen legislature with annual sessions.

**Judicial** (merit selection, covered next) completes the three branches.

**Veto and override.** The Governor may veto bills (and line-item veto appropriations); the Legislature overrides with a **two-thirds vote of each chamber.**

**Check yourself.** Which statewide executive officers do Kansans elect, and how many members are in each legislative chamber?

## Sources
- Kansas Secretary of State. (n.d.). *Statewide elected officials*. sos.ks.gov. https://sos.ks.gov/
- Kansas Legislature. (n.d.). *The Legislature: House and Senate*. kslegislature.gov. https://www.kslegislature.gov/`,
    },

    // ── Section 3: Merit-selection courts + lawmaking (no initiative) ────
    {
      slug: "ks-courts-lawmaking",
      title: "3 · How Kansas picks its Supreme Court, and why there's no initiative",
      section: "Making Law",
      body: `**How Kansas chooses its Supreme Court justices — merit selection plus retention.** For its highest court, Kansas uses the **"Missouri Plan"** (Kansas Judicial Branch, n.d.):
1. A **Supreme Court Nominating Commission** (lawyers and citizens) screens applicants and sends the Governor a short list.
2. The **Governor appoints** a justice **from that list.**
3. The justice later faces voters in a **nonpartisan yes/no retention election.** The **Kansas Supreme Court** has **7 justices.**
⚠️ **Time-sensitive:** Kansas has **debated changing** this method (for example, to Senate-confirmed appointments or partisan elections), and the topic recurs in politics — so confirm the **current** method at kscourts.gov. (Kansas's **Court of Appeals** judges, by contrast, are appointed by the Governor **with Senate confirmation**, and many **district (trial) judges are elected** — the selection method varies by court and district.)

**How a bill becomes law** (Kansas Legislature, n.d.):
1. **Introduction** in the House or Senate; **committee** review; **floor votes** in both chambers.
2. **Governor** — sign, veto (two-thirds override), or line-item veto appropriations.

**No statewide citizen initiative.** ⚠️ Here's a surprise: unlike its plains and western neighbors (Colorado, Nebraska, the Dakotas), **Kansas has NO statewide citizen initiative.** Kansans **cannot** put a statute or amendment on the ballot by petition. **Constitutional amendments** are proposed by the **Legislature** (by a two-thirds vote) and then ratified by the **voters** — so the citizen role is **ratification**, not initiation. (This is why major Kansas ballot questions are ones the **Legislature** chose to refer.)

**Check yourself.** How does Kansas pick its Supreme Court justices, and can Kansas citizens start a law by initiative?

## Sources
- Kansas Judicial Branch. (n.d.). *Judicial selection: merit selection and retention; the debate over methods*. kscourts.gov. https://www.kscourts.gov/
- Kansas Legislature. (n.d.). *How a bill becomes law; amending the constitution*. kslegislature.gov. https://www.kslegislature.gov/`,
    },

    // ── Section 4: Home rule, local government, getting involved ─────────
    {
      slug: "ks-home-rule-involved",
      title: "4 · Home rule, local government, and how to take part",
      section: "Get Involved",
      body: `**Strong home rule.** Kansas gives its **cities and counties substantial home-rule authority** — the power to manage their own local affairs without asking the Legislature for permission on every matter (Kansas Legislature, n.d.). This is written into the Kansas Constitution and makes local governments comparatively **self-governing** (a contrast with weak-home-rule states like Alabama).

**Local government:**
- **105 counties**, governed by elected **boards of county commissioners**, plus other elected county officials (sheriff, clerk, treasurer, register of deeds).
- **Cities** (classified by size) provide municipal services under home rule; **townships** exist in rural areas; and **school districts** and **special districts** round things out.

**Voting.** ⚠️ **Time-sensitive:** Kansas offers **early/advance voting** and **advance mail ballots**, and requires **photo ID.** Rules and deadlines are administered by **county election officers** and can change — confirm the **current** details at **sos.ks.gov** before you vote.

**How to take part:**
- **Register and vote** — bring photo ID; use advance/early voting; check your status at sos.ks.gov.
- **Show up locally.** Thanks to home rule, your **county commission, city council, and school board** decide a lot without waiting on Topeka — their meetings are public.
- **Vote on referred amendments.** Since Kansans can't start ballot measures, the ones you see were **referred by the Legislature** — read them carefully.
- **Contact your legislators** in Topeka — you have one Representative and one Senator.
- **Run** — school board, city council, township, and county commission are reachable local starting points.

**Check yourself.** What does home rule give Kansas localities, and where do Kansas ballot measures come from (since there's no initiative)?

## Sources
- Kansas Legislature. (n.d.). *Home rule; local government: counties, cities, townships*. kslegislature.gov. https://www.kslegislature.gov/
- Kansas Secretary of State. (n.d.). *Registering and voting: advance voting, photo ID*. sos.ks.gov. https://sos.ks.gov/`,
    },

    // ── Section 5: Practice (fill in the blanks) ─────────────────────────
    {
      slug: "ks-exercise",
      title: "5 · Practice: fill in the blanks",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about Kansas state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt:
              "The violent 1850s struggle over slavery in Kansas is known as '___ Kansas.'",
            answer: "Bleeding",
            accept: ["bleeding"],
            explanation:
              "'Bleeding Kansas' was the pre-Civil War fight over whether Kansas would be free or slave.",
          },
          {
            prompt:
              "Kansas's still-in-force constitution is the free-state ___ Constitution of 1859.",
            answer: "Wyandotte",
            accept: ["wyandotte"],
            explanation:
              "The Wyandotte Constitution of 1859 prevailed; Kansas entered the Union as a free state in 1861 and still uses it.",
          },
          {
            prompt:
              "Kansas's Legislature has a 40-member Senate and a ___-member House.",
            answer: "125",
            explanation:
              "The Kansas House has 125 members (2-year terms) and the Senate has 40 (4-year terms).",
          },
          {
            prompt:
              "Kansas chooses its Supreme Court justices by merit selection, then keeps them by yes/no ___ elections.",
            answer: "retention",
            explanation:
              "A nominating commission → Governor appoints → voters hold retention elections (a method Kansas has debated changing).",
          },
          {
            prompt:
              "Kansas gives cities and counties strong home ___ to manage local affairs.",
            answer: "rule",
            explanation:
              "Kansas's constitution grants substantial home-rule authority — the opposite of weak-home-rule states.",
          },
          {
            prompt:
              "TRUE or FALSE: Kansas has a statewide citizen initiative like Colorado or the Dakotas.",
            answer: "false",
            explanation:
              "False. Kansas has no statewide initiative; the Legislature refers amendments to voters.",
          },
        ],
      },
    },

    // ── Section 6: Final quiz ────────────────────────────────────────────
    {
      slug: "ks-quiz",
      title: "6 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What was 'Bleeding Kansas'?",
            options: [
              "A drought in the 1930s",
              "The violent 1850s struggle over whether Kansas would be a free or slave state",
              "A labor strike",
              "A border dispute with Nebraska",
            ],
            correctIndex: 1,
            explanation:
              "Bleeding Kansas was the pre-Civil War fight over slavery that helped ignite the war.",
            sourceLessonSlug: "ks-bleeding-kansas",
          },
          {
            prompt: "Which constitution still governs Kansas today?",
            options: [
              "The Lecompton Constitution",
              "The free-state Wyandotte Constitution of 1859",
              "The Constitution of 1970",
              "It uses the federal constitution only",
            ],
            correctIndex: 1,
            explanation:
              "The free-state Wyandotte Constitution of 1859 prevailed and remains in force (amended).",
            sourceLessonSlug: "ks-bleeding-kansas",
          },
          {
            prompt: "Which statewide officers do Kansans elect?",
            options: [
              "Only the Governor",
              "Governor/Lt. Governor (joint ticket), Secretary of State, Attorney General, Treasurer, and Insurance Commissioner",
              "Nine officials",
              "The Legislature elects them",
            ],
            correctIndex: 1,
            explanation:
              "Kansas elects the Governor/Lt. Governor jointly plus the Secretary of State, Attorney General, Treasurer, and Insurance Commissioner.",
            sourceLessonSlug: "ks-executive-legislature",
          },
          {
            prompt: "How many members are in the Kansas House and Senate?",
            options: [
              "125 House / 40 Senate",
              "100 House / 40 Senate",
              "150 House / 50 Senate",
              "99 House / 33 Senate",
            ],
            correctIndex: 0,
            explanation:
              "The Kansas House has 125 members and the Senate has 40.",
            sourceLessonSlug: "ks-executive-legislature",
          },
          {
            prompt: "How does Kansas choose its Supreme Court justices?",
            options: [
              "Partisan elections",
              "Merit selection (nominating commission → Governor appoints) plus retention elections",
              "The Legislature elects them",
              "Lifetime appointment with no review",
            ],
            correctIndex: 1,
            explanation:
              "Kansas uses the Missouri Plan for its Supreme Court, though it has debated changing the method.",
            sourceLessonSlug: "ks-courts-lawmaking",
          },
          {
            prompt: "Can Kansas citizens put a law on the ballot by initiative?",
            options: [
              "Yes, a strong initiative like its neighbors",
              "No — Kansas has no statewide initiative; the Legislature refers amendments to voters",
              "Only in even years",
              "Only for farm policy",
            ],
            correctIndex: 1,
            explanation:
              "Unlike Colorado or the Dakotas, Kansas has no statewide initiative; citizens ratify referred amendments.",
            sourceLessonSlug: "ks-courts-lawmaking",
          },
          {
            prompt: "What does home rule give Kansas localities?",
            options: [
              "No local power at all",
              "Substantial authority to manage their own affairs without asking the Legislature for permission on every matter",
              "Control over the state budget",
              "The power to secede",
            ],
            correctIndex: 1,
            explanation:
              "Kansas's constitution grants strong home rule to cities and counties — a contrast with weak-home-rule states.",
            sourceLessonSlug: "ks-home-rule-involved",
          },
          {
            prompt: "Where do Kansas ballot measures come from?",
            options: [
              "Citizen petitions",
              "The Legislature, which refers amendments to the voters",
              "The Governor alone",
              "County commissions",
            ],
            correctIndex: 1,
            explanation:
              "Because Kansas has no initiative, ballot measures are amendments the Legislature chose to refer.",
            sourceLessonSlug: "ks-home-rule-involved",
          },
          {
            prompt: "How many counties does Kansas have?",
            options: ["10", "105", "159", "254"],
            correctIndex: 1,
            explanation:
              "Kansas has 105 counties, governed by elected commissioners under strong home rule.",
            sourceLessonSlug: "ks-home-rule-involved",
          },
          {
            prompt: "Why does this course tell you to VERIFY Kansas's judicial-selection and voting rules?",
            options: [
              "Because Kansas has no government website",
              "Because the method of choosing justices has been debated and voting rules are run by county officers and change — confirm at kscourts.gov / sos.ks.gov",
              "Because only Congress sets them",
              "Because voting is secret",
            ],
            correctIndex: 1,
            explanation:
              "Kansas's judicial-selection method is a live political question and voting is administered locally, so the state's own sites are authoritative.",
            sourceLessonSlug: "ks-courts-lawmaking",
          },
        ],
      },
    },
  ],
};
