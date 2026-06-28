// Authored "US Civics 101" — the template for the Civics curriculum on Learn.WitUS.
// Factual and strictly non-partisan (how the system works, not who should win).
// Cited (U.S. Constitution; Marbury v. Madison, 1803). Ends with a quiz whose every
// question links back to the lesson that teaches the answer (the quiz standard).

import type { AuthoredCourse } from "./authored-course";

export const CIVICS_101_COURSE: AuthoredCourse = {
  title: "US Civics 101: How American Government Works",
  description:
    "A clear, non-partisan foundation in how the United States government actually works — the three branches, federalism, how a bill becomes law, the courts, elections, and your rights. Built to make you a confident, informed participant, not to take a side.",
  lessons: [
    {
      slug: "purpose-and-branches",
      title: "1 · Purpose of government and the three branches",
      body: `Government exists to make and enforce shared rules, provide common services, and protect rights. The U.S. Constitution divides federal power into **three branches** so no one part can dominate:

- **Legislative** (Congress: the House and the Senate) — makes the laws and controls spending.
- **Executive** (the President and federal agencies) — carries out and enforces the laws.
- **Judicial** (the Supreme Court and federal courts) — interprets the laws and the Constitution.

This split is **separation of powers**, reinforced by **checks and balances**: each branch can limit the others (the President can veto a bill; Congress can override a veto and confirms judges; courts can rule laws unconstitutional).

**Check yourself.** Name the branch that makes laws, the one that enforces them, and the one that interprets them.

## Sources
- U.S. Constitution, Articles I-III.`,
    },
    {
      slug: "federalism",
      title: "2 · Federalism: national, state, and local",
      body: `The U.S. has **three layers** of government, each with its own powers — this is **federalism**.

- **National (federal)** — defense, currency, foreign policy, interstate matters.
- **State** — elections administration, education, criminal law, licensing, much of daily life.
- **Local** (county, city, school board) — policing, schools, roads, zoning, public health.

Some powers are shared (taxing), some are exclusive. The **10th Amendment** reserves to the states (and the people) powers not given to the federal government. A practical takeaway: **a lot of what affects your daily life is decided at the state and local level**, not in Washington.

**Check yourself.** Which level of government runs your local schools and roads?

## Sources
- U.S. Constitution, 10th Amendment.`,
    },
    {
      slug: "how-a-bill-becomes-law",
      title: "3 · How a bill becomes a law",
      body: `A federal law starts as a **bill**:

1. A member of Congress **introduces** it.
2. A **committee** studies, amends, or shelves it.
3. The **full chamber** (House or Senate) debates and votes.
4. The **other chamber** does the same; differences are reconciled.
5. The **President signs** it (it becomes law) or **vetoes** it.
6. Congress can **override** a veto with a two-thirds vote in both chambers.

Most bills never become law — they die in committee. The same basic path exists in your **state legislature** for state laws.

**Check yourself.** What two things can the President do when a bill reaches their desk, and how can Congress respond to one of them?

## Sources
- U.S. Constitution, Article I, Section 7.`,
    },
    {
      slug: "the-courts",
      title: "4 · The courts and judicial review",
      body: `The judicial branch settles disputes and interprets the law. Its defining power is **judicial review** — the authority to strike down laws or actions that violate the Constitution. The Supreme Court established this in **Marbury v. Madison (1803)**.

- Federal courts are tiered: **district courts** (trials), **circuit courts** (appeals), and the **Supreme Court** (final say on federal and constitutional questions).
- Judges are nominated by the President and confirmed by the Senate; federal judges serve for life, to insulate them from political pressure.
- States have their own court systems for state law.

**Check yourself.** What is judicial review, and which 1803 case established it?

## Sources
- *Marbury v. Madison*, 5 U.S. 137 (1803); U.S. Constitution, Article III.`,
    },
    {
      slug: "elections-and-voting",
      title: "5 · Elections and voting",
      body: `Representatives are chosen through **elections**. Key ideas:

- **Federal terms:** House members every 2 years, the President every 4, Senators every 6 (staggered).
- **Primary vs. general:** primaries narrow each party's field; the general election decides the office.
- **The Electoral College** elects the President (state-by-state), which is why presidential campaigns focus on certain states.
- **State and local elections** (governor, legislature, mayor, school board, ballot measures) often happen in different years and have **lower turnout** — which means each vote carries more weight.

Voting rules (registration, deadlines, ID) are set **by each state**, so they differ. Check your state's official election website for yours.

**Check yourself.** Why can a single vote carry more weight in a local election than in a presidential one?

## Sources
- U.S. Constitution, Article I (terms) and Article II + 12th Amendment (Electoral College).`,
    },
    {
      slug: "rights-and-participation",
      title: "6 · Your rights and how to participate",
      body: `The first ten amendments to the Constitution are the **Bill of Rights** — including free speech, religion, press, assembly, and due process. Later amendments expanded who can vote (the 15th, 19th, 24th, and 26th).

Participation is not only voting:

- **Vote** in every election, including local ones.
- **Contact** your representatives; testify at public meetings (school board, city council).
- **Stay informed** from primary and varied sources, and check claims (see the media-literacy course).
- **Serve** — on a jury, a board, or by running for local office.

**Check yourself.** What are the first ten amendments collectively called, and name two ways to participate besides voting.

## Sources
- U.S. Constitution, Amendments 1-10 (Bill of Rights), and Amendments 15, 19, 24, 26.`,
    },
    {
      slug: "civics-101-quiz",
      title: "7 · Check your understanding",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "How many branches does the U.S. federal government have?",
            options: ["Two", "Three", "Four", "One"],
            correctIndex: 1,
            explanation:
              "Three: Legislative (makes laws), Executive (enforces laws), and Judicial (interprets laws).",
            sourceLessonSlug: "purpose-and-branches",
          },
          {
            prompt: "Which branch makes the laws?",
            options: ["Executive", "Judicial", "Legislative", "The states"],
            correctIndex: 2,
            explanation: "Congress — the Legislative branch — writes and passes federal laws.",
            sourceLessonSlug: "purpose-and-branches",
          },
          {
            prompt: "Federalism divides power between which levels of government?",
            options: [
              "Only the President and Congress",
              "National, state, and local",
              "Only the federal government",
              "Courts and police",
            ],
            correctIndex: 1,
            explanation:
              "Federalism layers power across national, state, and local government — and much of daily life is decided at the state and local levels.",
            sourceLessonSlug: "federalism",
          },
          {
            prompt: "What is the power of courts to strike down unconstitutional laws called?",
            options: ["Veto", "Judicial review", "Filibuster", "Impeachment"],
            correctIndex: 1,
            explanation:
              "Judicial review, established by the Supreme Court in Marbury v. Madison (1803).",
            sourceLessonSlug: "the-courts",
          },
          {
            prompt: "The first ten amendments to the Constitution are known as the…",
            options: ["Articles of Confederation", "Bill of Rights", "Federalist Papers", "Preamble"],
            correctIndex: 1,
            explanation:
              "The Bill of Rights — the first ten amendments — protects freedoms like speech, religion, and due process.",
            sourceLessonSlug: "rights-and-participation",
          },
        ],
      },
    },
  ],
};
