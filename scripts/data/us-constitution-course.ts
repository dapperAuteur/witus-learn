// Authored "US Constitution 101" — a sibling of US Civics 101 in the Civics
// curriculum on Learn.WitUS. Factual and strictly non-partisan: how the document
// is structured and what it says, not who should win an argument about it.
// Every content lesson is cited (APA 7 in-line + a `## Sources` bibliography) to
// primary/authoritative sources — the text of the Constitution itself (National
// Archives), the Constitution Annotated (Congress.gov), and the Library of
// Congress. Quotations are verbatim from the National Archives transcript. The
// course is organized into sections (course modules) and ends with a quiz whose
// every question links back to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const US_CONSTITUTION_COURSE: AuthoredCourse = {
  title: "US Constitution 101: The Document That Builds the Government",
  description:
    "A clear, non-partisan walk through the United States Constitution — why the country needed one, the Preamble, the three branches it creates (Articles I–III), how separation of powers and checks & balances keep them honest, the federal–state split, the Bill of Rights, and how the document is amended. Cited to the text itself and the National Archives. Built to make you a confident reader of the Constitution, not to take a side.",
  lessons: [
    // ── Section 1: Founding ──────────────────────────────────────────────
    {
      slug: "why-a-constitution",
      title: "1 · Why a constitution? From the Articles of Confederation",
      section: "Foundations",
      body: `A **constitution** is the rulebook for a government: it says what the government may do, how it is structured, and what limits bind it. The United States' first national rulebook was **not** the Constitution we have now — it was the **Articles of Confederation** (in force 1781–1789).

The Articles created a deliberately weak central government — really a "league of friendship" among the states. Congress could not levy taxes or regulate trade, there was no national executive or court system, and amending the Articles required the unanimous consent of all thirteen states (National Archives, n.d.-a). The result was a government that could not pay its debts, settle disputes between states, or respond to unrest.

So in 1787 delegates met in Philadelphia at what became the **Constitutional Convention**. Rather than patch the Articles, they wrote a new framework that created a stronger national government — while still dividing and limiting its power. The Constitution was signed on **September 17, 1787**, and took effect after nine states ratified it; it has governed since 1789 (National Archives, n.d.-b).

A useful way to read the whole document: it first **creates** power (the three branches, in Articles I–III), then **divides and checks** that power, and finally lets the people **amend** it over time.

**Check yourself.** Name two things the national government could *not* do under the Articles of Confederation.

## Sources
- National Archives. (n.d.-a). *Articles of Confederation (1777)*. https://www.archives.gov/milestone-documents/articles-of-confederation
- National Archives. (n.d.-b). *The Constitution of the United States: A transcription*. https://www.archives.gov/founding-docs/constitution-transcript`,
    },
    {
      slug: "the-preamble",
      title: "2 · The Preamble: who, and why",
      section: "Foundations",
      body: `The Constitution opens with a single sentence — the **Preamble** — that states who is establishing the government and for what ends. It reads, in full:

> "We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America." (U.S. Const. pmbl.)

Two things to notice:

- **"We the People."** Authority is claimed to come from the people, not from the states acting alone — a deliberate contrast with the Articles of Confederation.
- **The Preamble grants no power.** It states *purposes* (justice, domestic tranquility, common defense, the general welfare, liberty). Courts do not treat it as a source of government authority — the actual powers come from the Articles that follow. The Preamble is the statement of intent, not an operative grant (Constitution Annotated, n.d.-a).

**Check yourself.** Whom does the Preamble name as establishing the Constitution, and does the Preamble itself grant the government any powers?

## Sources
- National Archives. (n.d.-b). *The Constitution of the United States: A transcription*. https://www.archives.gov/founding-docs/constitution-transcript
- Constitution Annotated. (n.d.-a). *Preamble*. Congress.gov. https://constitution.congress.gov/browse/essay/intro.1-1/`,
    },

    // ── Section 2: The three branches ────────────────────────────────────
    {
      slug: "article-i-congress",
      title: "3 · Article I: the Congress (the legislative branch)",
      section: "The Three Branches",
      body: `**Article I** is the longest article and creates the **legislative branch** — the lawmaking power. Its very first sentence vests that power in Congress:

> "All legislative Powers herein granted shall be vested in a Congress of the United States, which shall consist of a Senate and House of Representatives." (U.S. Const. art. I, § 1)

Key features:

- **A two-chamber (bicameral) Congress.** The **House of Representatives** is apportioned by state population; members serve 2-year terms (U.S. Const. art. I, § 2). The **Senate** has two senators per state; senators serve 6-year terms (U.S. Const. art. I, § 3). (Senators are now elected directly by the people under the 17th Amendment.)
- **Enumerated powers.** Section 8 lists what Congress may do — tax, borrow, regulate interstate and foreign **commerce**, coin money, declare war, raise armies, and so on — capped by the **Necessary and Proper Clause**, which lets Congress make laws needed to carry out those powers (U.S. Const. art. I, § 8).
- **The power of the purse.** Spending requires an appropriation by law: "No Money shall be drawn from the Treasury, but in Consequence of Appropriations made by Law" (U.S. Const. art. I, § 9).
- **How a law is made.** Section 7 sets out presentment: a bill that passes both chambers goes to the President, who signs or vetoes it; Congress can override a veto by a two-thirds vote in each chamber (U.S. Const. art. I, § 7).

**Check yourself.** What are the two chambers of Congress, and how long is a term in each?

## Sources
- National Archives. (n.d.-b). *The Constitution of the United States: A transcription*. https://www.archives.gov/founding-docs/constitution-transcript
- Constitution Annotated. (n.d.-b). *Article I*. Congress.gov. https://constitution.congress.gov/constitution/article-1/`,
    },
    {
      slug: "article-ii-presidency",
      title: "4 · Article II: the Presidency (the executive branch)",
      section: "The Three Branches",
      body: `**Article II** creates the **executive branch** and vests it in a single person:

> "The executive Power shall be vested in a President of the United States of America." (U.S. Const. art. II, § 1)

What Article II sets up:

- **A 4-year term**, with the President and Vice President chosen through the **Electoral College** — electors appointed by each state (U.S. Const. art. II, § 1). (The 22nd Amendment later limited a President to two elected terms.)
- **The executive's job:** the President "shall take Care that the Laws be faithfully executed" (U.S. Const. art. II, § 3) — i.e., carry out the laws Congress writes.
- **Shared (checked) powers.** The President is Commander in Chief, can make treaties, and appoints judges and officers — but treaties and major appointments require the **Senate's advice and consent** (U.S. Const. art. II, § 2). The President can also **veto** legislation (Article I, § 7), and **recommend** measures to Congress (Article II, § 3).
- **Accountability.** Article II, § 4 provides that the President, Vice President, and civil officers can be **removed from office on impeachment** for, and conviction of, "Treason, Bribery, or other high Crimes and Misdemeanors."

Notice how much of the President's power is *shared* with Congress — that interlock is the checks-and-balances design.

**Check yourself.** Name one presidential power that the Senate must approve before it takes effect.

## Sources
- National Archives. (n.d.-b). *The Constitution of the United States: A transcription*. https://www.archives.gov/founding-docs/constitution-transcript
- Constitution Annotated. (n.d.-c). *Article II*. Congress.gov. https://constitution.congress.gov/constitution/article-2/`,
    },
    {
      slug: "article-iii-judiciary",
      title: "5 · Article III: the courts (the judicial branch)",
      section: "The Three Branches",
      body: `**Article III** creates the **judicial branch**. It establishes one **Supreme Court** and lets Congress create the lower federal courts:

> "The judicial Power of the United States, shall be vested in one supreme Court, and in such inferior Courts as the Congress may from time to time ordain and establish." (U.S. Const. art. III, § 1)

Key features:

- **Independence by design.** Federal judges "hold their Offices during good Behaviour" — effectively life tenure — and their salary cannot be reduced, insulating them from political pressure (U.S. Const. art. III, § 1).
- **What federal courts decide.** Their jurisdiction covers cases "arising under this Constitution, the Laws of the United States, and Treaties," disputes between states, and more (U.S. Const. art. III, § 2).
- **Judicial review.** The text does not use the phrase, but the Supreme Court established the power to declare a law unconstitutional in **Marbury v. Madison, 5 U.S. 137 (1803)** — making the judiciary the interpreter of the Constitution (Library of Congress, n.d.).
- **Treason — narrowly defined.** Article III, § 3 carefully limits treason ("only in levying War against them, or in adhering to their Enemies") and requires two witnesses or a confession in open court — the one crime the Constitution itself defines.

**Check yourself.** How long do federal judges serve, and which 1803 case established judicial review?

## Sources
- National Archives. (n.d.-b). *The Constitution of the United States: A transcription*. https://www.archives.gov/founding-docs/constitution-transcript
- Constitution Annotated. (n.d.-d). *Article III*. Congress.gov. https://constitution.congress.gov/constitution/article-3/
- Library of Congress. (n.d.). *Marbury v. Madison, 5 U.S. 137 (1803)*. https://www.loc.gov/item/usrep005137/`,
    },

    // ── Section 3: How the design holds ──────────────────────────────────
    {
      slug: "separation-of-powers",
      title: "6 · Separation of powers and checks & balances",
      section: "How the Design Holds",
      body: `The Constitution does not just list three branches — it makes them **depend on and limit one another**. Two related ideas:

- **Separation of powers.** Each branch gets its own job: Congress *makes* law (Article I), the President *enforces* it (Article II), the courts *interpret* it (Article III). No single branch holds all three powers.
- **Checks and balances.** Each branch can restrain the others, so power is never concentrated:
  - The **President** can veto a bill (Art. I, § 7).
  - **Congress** can override that veto by a two-thirds vote, controls spending, confirms appointments and treaties (the Senate), and can **impeach and remove** the President or judges (Art. I; Art. II, § 4).
  - The **courts** can rule a law or executive act unconstitutional — judicial review, *Marbury v. Madison* (1803).

This was a deliberate guard against tyranny. As James Madison put it in **Federalist No. 51 (1788)**, "the great security against a gradual concentration of the several powers in the same department, consists in giving to those who administer each department the necessary constitutional means … to resist encroachments of the others" — the design often summed up as "Ambition must be made to counteract ambition."

**Check yourself.** Give one check each branch holds over another.

## Sources
- National Archives. (n.d.-b). *The Constitution of the United States: A transcription*. https://www.archives.gov/founding-docs/constitution-transcript
- Madison, J. (1788). *The Federalist No. 51*. Library of Congress. https://guides.loc.gov/federalist-papers/full-text
- Library of Congress. (n.d.). *Marbury v. Madison, 5 U.S. 137 (1803)*. https://www.loc.gov/item/usrep005137/`,
    },
    {
      slug: "federalism",
      title: "7 · Federalism: state and federal power",
      section: "How the Design Holds",
      body: `The Constitution splits power **vertically**, too — between the national government and the states. This is **federalism**.

- **The federal government has enumerated powers.** It may do what the Constitution lists (Article I, § 8 and elsewhere) — national defense, foreign affairs, currency, regulating commerce among the states.
- **The states keep the rest.** The **10th Amendment** makes this explicit: "The powers not delegated to the United States by the Constitution, nor prohibited by it to the States, are reserved to the States respectively, or to the people" (U.S. Const. amend. X). States run most of daily life — elections administration, education, criminal law, licensing.
- **Federal law is supreme — within its lane.** The **Supremacy Clause** provides that the Constitution and federal laws made under it "shall be the supreme Law of the Land," binding state judges (U.S. Const. art. VI, cl. 2). Where valid federal and state law conflict, federal law prevails.

A practical takeaway: much of what affects your daily life is decided at the **state and local** level, not in Washington — while a core set of national matters is reserved to the federal government.

**Check yourself.** Which amendment reserves un-delegated powers to the states and the people?

## Sources
- National Archives. (n.d.-b). *The Constitution of the United States: A transcription*. https://www.archives.gov/founding-docs/constitution-transcript
- Constitution Annotated. (n.d.-e). *Tenth Amendment*. Congress.gov. https://constitution.congress.gov/constitution/amendment-10/
- Constitution Annotated. (n.d.-f). *Article VI*. Congress.gov. https://constitution.congress.gov/constitution/article-6/`,
    },

    // ── Section 4: Rights and change ─────────────────────────────────────
    {
      slug: "bill-of-rights",
      title: "8 · The Bill of Rights (Amendments I–X)",
      section: "Rights and Change",
      body: `Several states ratified the Constitution only on the promise that a list of protected rights would be added. In 1791 the first **ten amendments** — the **Bill of Rights** — were ratified (National Archives, n.d.-c).

A quick map of the ten:

| Amendment | Protects |
| --- | --- |
| **1st** | Religion, speech, press, assembly, petition |
| **2nd** | Right to keep and bear arms |
| **3rd** | No forced quartering of soldiers |
| **4th** | No unreasonable searches and seizures |
| **5th** | Due process, grand jury, no double jeopardy, no self-incrimination, takings (just compensation) |
| **6th** | Speedy public trial, jury, counsel, to confront witnesses |
| **7th** | Jury trial in civil cases |
| **8th** | No excessive bail/fines or cruel and unusual punishment |
| **9th** | Rights not listed are still retained by the people |
| **10th** | Powers not delegated are reserved to the states/people |

The First Amendment's text is worth reading directly: "Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances" (U.S. Const. amend. I).

**Check yourself.** What are the first ten amendments collectively called, and which one protects speech and religion?

## Sources
- National Archives. (n.d.-c). *The Bill of Rights: A transcription*. https://www.archives.gov/founding-docs/bill-of-rights-transcript
- Constitution Annotated. (n.d.-g). *First Amendment*. Congress.gov. https://constitution.congress.gov/constitution/amendment-1/`,
    },
    {
      slug: "amendments-and-later-changes",
      title: "9 · Changing the Constitution: Article V and key later amendments",
      section: "Rights and Change",
      body: `The Constitution is meant to **endure and adapt**. **Article V** sets a deliberately demanding path to amend it: an amendment is *proposed* by a two-thirds vote of both houses of Congress (or by a convention called by two-thirds of the states), and then *ratified* by **three-fourths of the states** (U.S. Const. art. V). The high bar is why there have been only **27 amendments**.

Several later amendments dramatically expanded liberty and the vote — the **Reconstruction Amendments** and the suffrage amendments:

- **13th (1865)** — abolished slavery: "Neither slavery nor involuntary servitude … shall exist within the United States" (U.S. Const. amend. XIII).
- **14th (1868)** — guaranteed **citizenship** to those born or naturalized in the U.S., and required states to provide **due process** and **equal protection of the laws** (U.S. Const. amend. XIV).
- **15th (1870)** — the right to vote may not be denied "on account of race, color, or previous condition of servitude" (U.S. Const. amend. XV).
- **19th (1920)** — the right to vote may not be denied "on account of sex," extending the vote to women (U.S. Const. amend. XIX).

Together these show the design at work: a fixed framework, changed only by broad national consensus, gradually widening who is included as "We the People."

**Check yourself.** How many states must ratify an amendment, and which amendment abolished slavery?

## Sources
- National Archives. (n.d.-b). *The Constitution of the United States: A transcription*. https://www.archives.gov/founding-docs/constitution-transcript
- National Archives. (n.d.-d). *The Constitution: Amendments 11–27*. https://www.archives.gov/founding-docs/amendments-11-27
- Constitution Annotated. (n.d.-h). *Article V*. Congress.gov. https://constitution.congress.gov/constitution/article-5/`,
    },

    // ── Section 5: Practice ──────────────────────────────────────────────
    {
      slug: "practice-articles-and-branches",
      title: "10 · Practice: the articles and the branches",
      section: "Practice",
      exercise: {
        instructions: "Fill in each blank, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt: "Article ___ (number) creates Congress, the legislative branch.",
            answer: "I",
            accept: ["1", "one", "first"],
            explanation: "Article I vests all legislative powers in Congress (the House and Senate).",
          },
          {
            prompt: "Article ___ (number) creates the Presidency, the executive branch.",
            answer: "II",
            accept: ["2", "two", "second"],
            explanation: "Article II vests the executive power in a President of the United States.",
          },
          {
            prompt: "Article ___ (number) creates the Supreme Court, the judicial branch.",
            answer: "III",
            accept: ["3", "three", "third"],
            explanation:
              "Article III vests the judicial power in one Supreme Court and the lower courts Congress creates.",
          },
          {
            prompt: "Congress has two chambers: the Senate and the House of ___.",
            answer: "Representatives",
            explanation:
              "The Constitution makes Congress bicameral: a Senate and a House of Representatives (Art. I, § 1).",
          },
          {
            prompt: "When the President rejects a bill, that action is called a ___.",
            answer: "veto",
            explanation: "Congress can override a veto with a two-thirds vote in both chambers (Art. I, § 7).",
          },
        ],
      },
    },
    {
      slug: "practice-rights-and-amendments",
      title: "11 · Practice: rights and amendments",
      section: "Practice",
      exercise: {
        instructions: "Fill in each blank, then check.",
        items: [
          {
            prompt: "The first ten amendments are collectively the Bill of ___.",
            answer: "Rights",
            explanation: "The Bill of Rights (1791) protects freedoms like speech, religion, and due process.",
          },
          {
            prompt:
              "Powers not delegated to the federal government are reserved to the states by the ___ Amendment (number).",
            answer: "10th",
            accept: ["tenth", "10", "ten"],
            explanation:
              "The 10th Amendment is the textual basis of federalism — un-delegated powers stay with the states and the people.",
          },
          {
            prompt: "An amendment must be ratified by ___-fourths of the states.",
            answer: "three",
            accept: ["3", "3/4", "three-fourths"],
            explanation: "Article V requires ratification by three-fourths of the states — a deliberately high bar.",
          },
          {
            prompt: "The amendment that abolished slavery is the ___ Amendment (number).",
            answer: "13th",
            accept: ["thirteenth", "13", "thirteen"],
            explanation: "The 13th Amendment (1865) abolished slavery and involuntary servitude.",
          },
          {
            prompt: "The amendment guaranteeing equal protection and due process from the states is the ___ Amendment (number).",
            answer: "14th",
            accept: ["fourteenth", "14", "fourteen"],
            explanation:
              "The 14th Amendment (1868) guarantees citizenship, due process, and equal protection of the laws.",
          },
        ],
      },
    },

    // ── Section 6: Final quiz ────────────────────────────────────────────
    {
      slug: "us-constitution-101-quiz",
      title: "12 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What governed the United States before the Constitution?",
            options: [
              "The Bill of Rights",
              "The Articles of Confederation",
              "The Federalist Papers",
              "The Declaration of Independence",
            ],
            correctIndex: 1,
            explanation:
              "The Articles of Confederation (1781–1789) created a weak central government that could not tax or regulate trade — which is why the Constitution replaced it.",
            sourceLessonSlug: "why-a-constitution",
          },
          {
            prompt: "Does the Preamble itself grant the government any powers?",
            options: [
              "Yes — it grants Congress its main powers",
              "No — it states purposes; the powers come from the Articles that follow",
              "Yes — it grants the President war powers",
              "Only during wartime",
            ],
            correctIndex: 1,
            explanation:
              "The Preamble ('We the People…') states the purposes of the government. Courts do not treat it as a source of authority; the actual powers are in Articles I–III.",
            sourceLessonSlug: "the-preamble",
          },
          {
            prompt: "Which article creates Congress, and how many chambers does Congress have?",
            options: [
              "Article II; one chamber",
              "Article I; two chambers (Senate and House)",
              "Article III; two chambers",
              "Article I; three chambers",
            ],
            correctIndex: 1,
            explanation:
              "Article I vests all legislative power in a bicameral Congress — the Senate and the House of Representatives (Art. I, § 1).",
            sourceLessonSlug: "article-i-congress",
          },
          {
            prompt: "Under Article II, what must the Senate do before a treaty or major appointment takes effect?",
            options: [
              "Nothing — the President acts alone",
              "Give its advice and consent (approve it)",
              "Pass a constitutional amendment",
              "Ask the Supreme Court",
            ],
            correctIndex: 1,
            explanation:
              "The President makes treaties and appoints judges and officers, but the Senate must give its advice and consent (Art. II, § 2) — a built-in check.",
            sourceLessonSlug: "article-ii-presidency",
          },
          {
            prompt: "What is the power of courts to strike down unconstitutional laws called, and which case established it?",
            options: [
              "Veto; Federalist No. 51",
              "Judicial review; Marbury v. Madison (1803)",
              "Impeachment; Marbury v. Madison (1803)",
              "Supremacy; McCulloch v. Maryland (1819)",
            ],
            correctIndex: 1,
            explanation:
              "Judicial review — the authority to declare a law unconstitutional — was established in Marbury v. Madison, 5 U.S. 137 (1803).",
            sourceLessonSlug: "article-iii-judiciary",
          },
          {
            prompt: "How can Congress override a presidential veto?",
            options: [
              "A simple majority in the House",
              "A two-thirds vote in both chambers",
              "A ruling from the Supreme Court",
              "Approval by three-fourths of the states",
            ],
            correctIndex: 1,
            explanation:
              "A two-thirds vote in both the House and the Senate overrides a veto (Art. I, § 7) — a core check and balance.",
            sourceLessonSlug: "separation-of-powers",
          },
          {
            prompt: "Which amendment reserves un-delegated powers to the states and the people?",
            options: ["The 1st", "The 10th", "The 14th", "The 27th"],
            correctIndex: 1,
            explanation:
              "The 10th Amendment is the textual basis of federalism: powers not delegated to the United States are reserved to the states or the people.",
            sourceLessonSlug: "federalism",
          },
          {
            prompt: "The first ten amendments to the Constitution are known as the…",
            options: ["Articles of Confederation", "Bill of Rights", "Reconstruction Amendments", "Preamble"],
            correctIndex: 1,
            explanation:
              "The Bill of Rights (ratified 1791) — the first ten amendments — protects freedoms like speech, religion, and due process.",
            sourceLessonSlug: "bill-of-rights",
          },
          {
            prompt: "Under Article V, how many states must ratify a constitutional amendment?",
            options: ["A simple majority", "Two-thirds", "Three-fourths", "All of them (unanimous)"],
            correctIndex: 2,
            explanation:
              "Article V requires ratification by three-fourths of the states — a deliberately high bar, which is why there are only 27 amendments.",
            sourceLessonSlug: "amendments-and-later-changes",
          },
          {
            prompt: "Which amendment abolished slavery?",
            options: ["The 13th", "The 14th", "The 15th", "The 19th"],
            correctIndex: 0,
            explanation:
              "The 13th Amendment (1865) abolished slavery and involuntary servitude. The 14th guaranteed equal protection; the 15th and 19th expanded the vote.",
            sourceLessonSlug: "amendments-and-later-changes",
          },
        ],
      },
    },
  ],
};
