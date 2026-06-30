// Authored "State vs Federal Power" — a deeper, federalism-focused companion to
// US Civics 101 and US Constitution 101 in the Civics curriculum on Learn.WitUS.
// Factual and strictly non-partisan: how the Constitution divides power between the
// national government and the states, and how the two interact — not who should win
// a policy argument about it. Every content lesson is cited (APA 7 in-line + a
// `## Sources` bibliography) to primary/authoritative sources: the text of the
// Constitution (National Archives), the Constitution Annotated (Congress.gov), the
// Library of Congress, and the National Archives' milestone-documents for the named
// cases. Constitutional quotations are verbatim from the National Archives
// transcript; case citations are verified (McCulloch v. Maryland, 17 U.S. 316
// (1819); Gibbons v. Ogden, 22 U.S. 1 (1824)). The course is organized into sections
// and ends with a quiz whose every question links back to the lesson that teaches
// the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_VS_FEDERAL_COURSE: AuthoredCourse = {
  title: "State vs Federal Power: How American Government Is Divided",
  description:
    "A clear, non-partisan guide to American federalism — why power is split between the national government and the states, the enumerated, implied, and reserved powers (Article I, § 8 and the 10th Amendment), the Supremacy Clause and preemption (Article VI), the concurrent powers both levels share, the reach of the Commerce Clause, and the landmark cases that defined the balance (McCulloch v. Maryland, 1819; Gibbons v. Ogden, 1824). Cited to the Constitution itself and authoritative sources. Built to make you a confident reader of how the system divides power, not to take a side.",
  lessons: [
    // ── Section 1: The split ─────────────────────────────────────────────
    {
      slug: "what-is-federalism",
      title: "1 · What is federalism, and why split power at all?",
      section: "The Split",
      body: `**Federalism** is the division of governing power between a single national (federal) government and the governments of the individual states. The United States is not a single, top-down government and it is not a loose alliance of fully independent states — it is a **federal system**, somewhere in between, where both levels of government act directly on the same people at the same time.

Why split power this way? The framers had just lived under two extremes and rejected both:

- The **British Crown** — a distant central power the colonists felt they could not check.
- The **Articles of Confederation** (1781–1789) — a central government so weak it could not tax, regulate trade between the states, or enforce its decisions (National Archives, n.d.-a).

The Constitution's answer was to **divide power vertically**: give the national government a defined set of powers strong enough to govern the whole country, and leave the rest with the states. This vertical split sits alongside the *horizontal* split among the three branches. Both are guards against any one set of hands holding too much power.

A practical consequence you live with every day: the level of government that issues your driver's license, runs your local schools, and writes most criminal law is usually your **state**, while the level that runs the military, issues currency, and conducts foreign policy is the **federal** government.

**Check yourself.** In your own words, what does "federalism" divide, and name one extreme the framers were reacting against.

## Sources
- National Archives. (n.d.-a). *Articles of Confederation (1777)*. https://www.archives.gov/milestone-documents/articles-of-confederation
- Constitution Annotated. (n.d.-a). *Tenth Amendment*. Congress.gov. https://constitution.congress.gov/constitution/amendment-10/`,
    },
    {
      slug: "three-kinds-of-power",
      title: "2 · Three kinds of power: enumerated, implied, reserved",
      section: "The Split",
      body: `To see how the split works, it helps to sort governing power into three buckets.

- **Enumerated (delegated) powers** — powers the Constitution *lists* and gives to the federal government. Most are in **Article I, § 8**: the power to tax, to borrow, to regulate commerce among the states, to coin money, to declare war, and to raise armies. These are spelled out in the text.
- **Implied powers** — powers not listed by name, but reasonably *necessary* to carry out an enumerated power. Their textual hook is the last clause of Article I, § 8, the **Necessary and Proper Clause**: Congress may "make all Laws which shall be necessary and proper for carrying into Execution the foregoing Powers" (U.S. Const. art. I, § 8). The Supreme Court confirmed implied powers exist in *McCulloch v. Maryland* (1819), covered later in this course.
- **Reserved powers** — everything left over, kept by the states (or the people). The **10th Amendment** states the rule: "The powers not delegated to the United States by the Constitution, nor prohibited by it to the States, are reserved to the States respectively, or to the people" (U.S. Const. amend. X).

A simple way to remember it: the federal government has **listed** powers (plus what's needed to carry them out); the states keep the **rest**. So the everyday question in a federalism dispute is often, "Is this an area the Constitution handed to the federal government, or one the states kept?"

**Check yourself.** Which of the three kinds of power does the 10th Amendment describe, and which Article lists most of the enumerated powers?

## Sources
- National Archives. (n.d.-b). *The Constitution of the United States: A transcription*. https://www.archives.gov/founding-docs/constitution-transcript
- National Archives. (n.d.-c). *The Bill of Rights: A transcription*. https://www.archives.gov/founding-docs/bill-of-rights-transcript
- Constitution Annotated. (n.d.-b). *Article I, Section 8: Enumerated powers*. Congress.gov. https://constitution.congress.gov/constitution/article-1/`,
    },

    // ── Section 2: Federal powers ────────────────────────────────────────
    {
      slug: "enumerated-powers-article-i",
      title: "3 · The enumerated powers: Article I, § 8",
      section: "Federal Powers",
      body: `The clearest list of what the federal government may do is **Article I, Section 8** — a single section enumerating the powers of Congress. A representative sample:

- **Tax and spend** — "The Congress shall have Power To lay and collect Taxes, Duties, Imposts and Excises, to pay the Debts and provide for the common Defence and general Welfare of the United States" (U.S. Const. art. I, § 8).
- **Regulate commerce** — "To regulate Commerce with foreign Nations, and among the several States, and with the Indian Tribes" (U.S. Const. art. I, § 8). This is the **Commerce Clause**, which gets its own lesson.
- **Coin money**, borrow on the nation's credit, and set standards of weights and measures.
- **Declare war**, and raise and support armies and a navy.
- **Establish post offices** and federal courts below the Supreme Court.

The section closes with the **Necessary and Proper Clause** ("the elastic clause"): the power "To make all Laws which shall be necessary and proper for carrying into Execution the foregoing Powers" (U.S. Const. art. I, § 8). This clause is what lets enumerated powers carry implied powers with them — for example, the listed power to tax and borrow implies the power to set up the financial machinery to do it.

The key point for federalism: these powers are a **defined list**, not "anything the federal government wants." When a federal action is challenged, the question is whether it traces back to one of these enumerated powers (and the Necessary and Proper Clause), or whether it strays into territory the states kept.

**Check yourself.** Name two powers Article I, § 8 gives to Congress, and what the Necessary and Proper Clause adds.

## Sources
- National Archives. (n.d.-b). *The Constitution of the United States: A transcription*. https://www.archives.gov/founding-docs/constitution-transcript
- Constitution Annotated. (n.d.-b). *Article I, Section 8: Enumerated powers*. Congress.gov. https://constitution.congress.gov/constitution/article-1/`,
    },
    {
      slug: "commerce-clause-and-its-reach",
      title: "4 · The Commerce Clause and its reach",
      section: "Federal Powers",
      body: `Of all the enumerated powers, the **Commerce Clause** has done the most to shape the federal–state balance. Its text is short:

> "[The Congress shall have Power] To regulate Commerce with foreign Nations, and among the several States, and with the Indian Tribes." (U.S. Const. art. I, § 8)

The phrase "among the several States" is the **interstate commerce** power — the authority to regulate commercial activity that crosses state lines or affects trade between states. It is one of the most consequential clauses in the document because so much modern economic life is interstate: goods, shipping, communications, and markets routinely cross state borders.

- **What it covers.** The Supreme Court first read "commerce" broadly in *Gibbons v. Ogden* (1824) — covered in a later lesson — holding that the power "extends to navigation" and to commercial intercourse "among the several States," not just the buying and selling of goods (National Archives, n.d.-d).
- **Why it matters for federalism.** Because interstate commerce is so broad, the clause is the basis for a great deal of federal law. At the same time, it is not unlimited: it reaches *interstate* commerce, which leaves room for the states' own authority over genuinely local matters. Drawing that line — what is "interstate" enough — has been litigated repeatedly over two centuries, and the Constitution Annotated tracks how the Court's reading has shifted (Constitution Annotated, n.d.-c).
- **The takeaway.** When you hear that a federal law rests on "the Commerce Clause," it means Congress is regulating activity it treats as part of interstate commerce. Whether a particular activity qualifies is exactly the kind of federalism question courts decide.

**Check yourself.** Which words in the Commerce Clause give Congress power over trade *between* the states, and why does that power loom so large today?

## Sources
- National Archives. (n.d.-b). *The Constitution of the United States: A transcription*. https://www.archives.gov/founding-docs/constitution-transcript
- National Archives. (n.d.-d). *Gibbons v. Ogden (1824)*. https://www.archives.gov/milestone-documents/gibbons-v-ogden
- Constitution Annotated. (n.d.-c). *Article I, Section 8, Clause 3: Commerce with foreign nations and among the states*. Congress.gov. https://constitution.congress.gov/browse/essay/artI-S8-C3-1/`,
    },

    // ── Section 3: How conflicts resolve ─────────────────────────────────
    {
      slug: "supremacy-clause-and-preemption",
      title: "5 · The Supremacy Clause and preemption",
      section: "How Conflicts Resolve",
      body: `Two governments act on the same people, so their laws can collide. The Constitution settles the tie-breaker in **Article VI** — the **Supremacy Clause**:

> "This Constitution, and the Laws of the United States which shall be made in Pursuance thereof; and all Treaties made, or which shall be made, under the Authority of the United States, shall be the supreme Law of the Land; and the Judges in every State shall be bound thereby, any Thing in the Constitution or Laws of any State to the Contrary notwithstanding." (U.S. Const. art. VI, cl. 2)

Read it carefully — two limits are built in:

- It makes supreme the federal laws "made in **Pursuance** [of the Constitution]." A federal law that exceeds the federal government's enumerated powers is not automatically supreme.
- It binds **state judges**, settling that state courts must follow valid federal law even over a conflicting state law.

When valid federal law and state law conflict, federal law wins and the state law gives way. Lawyers call this **preemption**. The Constitution Annotated describes its common forms (Constitution Annotated, n.d.-d):

- **Express preemption** — Congress states in the statute that it overrides state law.
- **Conflict preemption** — it is impossible to comply with both, or the state law obstructs the federal purpose.
- **Field preemption** — federal regulation is so comprehensive that it occupies the entire area (for example, parts of immigration or nuclear safety), leaving no room for state law.

Crucially, supremacy operates **only within the federal government's lane**. Where the federal government has no valid power to act, there is nothing for a state law to "conflict" with, and the state's law stands.

**Check yourself.** What does the Supremacy Clause make "the supreme Law of the Land," and what does the word "preemption" describe?

## Sources
- National Archives. (n.d.-b). *The Constitution of the United States: A transcription*. https://www.archives.gov/founding-docs/constitution-transcript
- Constitution Annotated. (n.d.-d). *Article VI, Clause 2: Supremacy Clause*. Congress.gov. https://constitution.congress.gov/browse/essay/artVI-C2-1/`,
    },
    {
      slug: "concurrent-powers",
      title: "6 · Concurrent powers: what both levels share",
      section: "How Conflicts Resolve",
      body: `Not every power belongs to only one level. **Concurrent powers** are powers that the federal government *and* the states exercise at the same time, over the same people, in overlapping ways.

Common examples:

- **Taxing.** Both Congress and the states (and many local governments) can levy taxes. This is why you can owe federal income tax and state income tax in the same year — two governments taxing the same income under their own authority. The federal taxing power is in Article I, § 8; the states' taxing power is part of what they reserve under the 10th Amendment.
- **Courts.** The United States has **two parallel court systems**: federal courts (created under Article III) and the courts of each state. State courts handle most disputes — contracts, family law, most crimes — while federal courts hear cases "arising under" federal law and the Constitution, disputes between states, and certain others (U.S. Const. art. III, § 2). A single set of facts can sometimes raise both state and federal claims.
- **Making and enforcing law** generally — both levels write statutes, run agencies, and maintain police power within their spheres.

Concurrent powers are where federalism is most visible in daily life, and they are also where conflicts can arise — which is exactly when the **Supremacy Clause** (the previous lesson) decides the outcome. When the two levels' valid laws can coexist, both apply; when they truly conflict within the federal government's lane, the federal law prevails.

**Check yourself.** Give two examples of a power that both the federal government and the states exercise, and explain how a conflict between their laws is resolved.

## Sources
- National Archives. (n.d.-b). *The Constitution of the United States: A transcription*. https://www.archives.gov/founding-docs/constitution-transcript
- Constitution Annotated. (n.d.-e). *Article III, Section 2: Justiciability and jurisdiction*. Congress.gov. https://constitution.congress.gov/constitution/article-3/`,
    },

    // ── Section 4: The landmark cases ────────────────────────────────────
    {
      slug: "mcculloch-v-maryland",
      title: "7 · McCulloch v. Maryland (1819): implied powers and supremacy",
      section: "The Landmark Cases",
      body: `Two early Supreme Court decisions, both written by Chief Justice John Marshall, set the foundations of federal power. The first is **McCulloch v. Maryland, 17 U.S. (4 Wheat.) 316 (1819)**.

**The dispute.** Congress chartered a national bank. Maryland, which opposed it, passed a tax on the bank's operations within the state. James McCulloch, the bank's Baltimore cashier, refused to pay. Two questions reached the Court: (1) Did Congress have the power to charter a bank, even though the Constitution never lists "create a bank"? (2) Could a state tax the federal bank? (National Archives, n.d.-e).

**The holding.** The Court answered **yes** to federal power and **no** to the state tax:

- **Implied powers are real.** Chartering a bank is not enumerated, but it is a *means* of carrying out enumerated powers like taxing, borrowing, and regulating currency. Under the Necessary and Proper Clause, Congress may choose appropriate means to constitutional ends, so the bank was constitutional (National Archives, n.d.-e).
- **A state may not tax the federal government.** Because federal law is supreme within its sphere, a state cannot use its taxing power to burden a legitimate federal institution. Marshall's famous reasoning was that "the power to tax involves the power to destroy" — letting a state tax a federal entity would let the state defeat a power the Constitution made supreme (National Archives, n.d.-e).

**Why it matters.** *McCulloch* is the bedrock authority for two ideas this course has introduced: **implied powers** (the federal government can do what is necessary and proper to carry out its listed powers) and **federal supremacy** (states cannot undermine valid federal action).

**Check yourself.** What two things did *McCulloch v. Maryland* establish — one about the *scope* of federal power, one about what a *state* may not do to it?

## Sources
- National Archives. (n.d.-e). *McCulloch v. Maryland (1819)*. https://www.archives.gov/milestone-documents/mcculloch-v-maryland
- Constitution Annotated. (n.d.-f). *Article I, Section 8, Clause 18: Necessary and Proper Clause*. Congress.gov. https://constitution.congress.gov/browse/essay/artI-S8-C18-1/`,
    },
    {
      slug: "gibbons-v-ogden",
      title: "8 · Gibbons v. Ogden (1824): the Commerce Clause defined",
      section: "The Landmark Cases",
      body: `The second foundational case is **Gibbons v. Ogden, 22 U.S. (9 Wheat.) 1 (1824)** — the first major interpretation of the Commerce Clause.

**The dispute.** New York had granted a private monopoly over steamboat navigation in its waters. Aaron Ogden operated under that state monopoly; Thomas Gibbons ran competing steamboats between New Jersey and New York under a **federal coasting license** issued under an act of Congress. Ogden sued to shut Gibbons down. The question: could a state grant of a navigation monopoly stand against a federal license regulating that same interstate traffic? (National Archives, n.d.-d).

**The holding.** The Court sided with Gibbons and read the federal commerce power broadly:

- **"Commerce" is broad.** It is not limited to buying and selling goods; it includes navigation and "every species of commercial intercourse" among the states. Congress's power "to regulate Commerce … among the several States" therefore reaches the movement of vessels carrying that commerce (National Archives, n.d.-d).
- **The federal license prevailed.** Because Gibbons operated under a valid federal coasting license, and Congress's commerce power covered the interstate steamboat trade, New York's monopoly grant had to give way to the federal regulation of that same activity (National Archives, n.d.-d).

**Why it matters.** *Gibbons* established that the Commerce Clause is a **substantial, national power** over interstate commercial activity — the doctrinal starting point for the broad reach of federal commercial regulation you saw in Lesson 4. It also shows the federal–state hierarchy in action: a state grant could not stand against a valid federal regulation of interstate commerce.

**Check yourself.** How did *Gibbons v. Ogden* define "commerce," and why did the federal license win over the state monopoly?

## Sources
- National Archives. (n.d.-d). *Gibbons v. Ogden (1824)*. https://www.archives.gov/milestone-documents/gibbons-v-ogden
- Constitution Annotated. (n.d.-c). *Article I, Section 8, Clause 3: Commerce with foreign nations and among the states*. Congress.gov. https://constitution.congress.gov/browse/essay/artI-S8-C3-1/`,
    },

    // ── Section 5: Federalism in practice ────────────────────────────────
    {
      slug: "state-and-local-vs-federal",
      title: "9 · How state and local government differ from federal",
      section: "Federalism in Practice",
      body: `Federalism is easiest to feel by noticing **which government does what** in ordinary life. The federal government is one; there are **50 state governments**, each with its own constitution, plus thousands of local governments (counties, cities, school districts) that are creatures of their states.

A rough division of labor:

| Level | Typically handles | Constitutional basis |
| --- | --- | --- |
| **Federal** | Defense and foreign affairs, currency, immigration, interstate and foreign commerce, federal courts and crimes | Enumerated powers (Art. I, § 8; Arts. II–III) |
| **State** | Most criminal and family law, education standards, professional and driver licensing, elections administration, property law | Reserved powers (10th Amendment) |
| **Local** | Policing, K–12 schools, zoning, roads, water and sanitation, public health | Delegated by the state |

Three differences worth remembering:

- **States are not "branches" of the federal government.** Each state has its own legislature, governor, and court system — a full government, not a regional office of Washington.
- **Local governments get their power from the state, not the Constitution.** The U.S. Constitution does not mention cities or counties; they exist and act under their state's law.
- **The 10th Amendment is the default rule.** If the Constitution did not hand a power to the federal government, the presumption is that it belongs to the states or the people (U.S. Const. amend. X).

A practical takeaway from US Civics 101 bears repeating: **much of what affects your daily life is decided at the state and local level**, which is also where individual participation often carries the most weight.

**Check yourself.** Where do *local* governments get their authority, and which amendment is the default rule for powers the Constitution did not give to the federal government?

## Sources
- National Archives. (n.d.-c). *The Bill of Rights: A transcription*. https://www.archives.gov/founding-docs/bill-of-rights-transcript
- Constitution Annotated. (n.d.-a). *Tenth Amendment*. Congress.gov. https://constitution.congress.gov/constitution/amendment-10/`,
    },
    {
      slug: "state-and-federal-law-interact",
      title: "10 · Where state and federal law interact: real examples",
      section: "Federalism in Practice",
      body: `Federalism is not only conflict — most of the time the two levels work **side by side**. A few real, non-partisan examples of the interaction (described neutrally as how the system operates, not as a judgment about any policy):

- **Concurrent taxation.** You can owe both federal and state income tax on the same earnings, because taxing is a **concurrent power** (Lesson 6). Two governments tax under their own authority; neither cancels the other.
- **Cooperative federalism (shared programs).** In large programs like highways or Medicaid, Congress sets national standards and provides funding, and states administer the program within their borders. This pattern — federal framework, state delivery — is sometimes called *cooperative federalism*.
- **Two court systems for one set of facts.** A single incident can produce a **state** prosecution (for a state crime) and a separate **federal** case (for a federal offense), because the two sovereigns enforce their own laws. Which court hears which claim turns on whose law was broken (U.S. Const. art. III, § 2).
- **Preemption when laws truly conflict.** When a valid federal law and a state law cannot both stand, the **Supremacy Clause** resolves it in favor of the federal law (Lesson 5). When they *can* coexist — the more common case — both simply apply.
- **States as policy laboratories.** Because reserved powers let states set their own rules in many areas, states often differ from one another (on licensing, education, and more). Justice Brandeis famously called a state "a laboratory" that can "try novel social and economic experiments without risk to the rest of the country" — a description of how variation is a feature of the federal design.

The through-line: most of the time, state and federal law **overlap peacefully**; the constitutional tools you learned — enumerated powers, the 10th Amendment, the Supremacy Clause — are what sort out the cases where they don't.

**Check yourself.** Give one example where state and federal law operate side by side without conflict, and name the clause that decides the cases where they *do* conflict.

## Sources
- National Archives. (n.d.-b). *The Constitution of the United States: A transcription*. https://www.archives.gov/founding-docs/constitution-transcript
- Constitution Annotated. (n.d.-d). *Article VI, Clause 2: Supremacy Clause*. Congress.gov. https://constitution.congress.gov/browse/essay/artVI-C2-1/`,
    },

    // ── Section 6: Practice ──────────────────────────────────────────────
    {
      slug: "practice-powers-and-clauses",
      title: "11 · Practice: powers and clauses",
      section: "Practice",
      exercise: {
        instructions: "Fill in each blank, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt: "Powers the Constitution lists and gives to the federal government are called ___ powers.",
            answer: "enumerated",
            accept: ["delegated"],
            explanation:
              "Enumerated (delegated) powers are the ones the text lists — most of them in Article I, § 8.",
          },
          {
            prompt: "Powers kept by the states (or the people) are called ___ powers.",
            answer: "reserved",
            explanation:
              "Reserved powers are everything not delegated to the federal government — the 10th Amendment states the rule.",
          },
          {
            prompt:
              "The amendment that reserves un-delegated powers to the states and the people is the ___ Amendment (number).",
            answer: "10th",
            accept: ["tenth", "10", "ten"],
            explanation:
              "The 10th Amendment is the textual basis for reserved powers and for federalism's default rule.",
          },
          {
            prompt:
              "The clause that lets Congress make laws 'necessary and proper' to carry out its powers is the Necessary and ___ Clause.",
            answer: "Proper",
            explanation:
              "The Necessary and Proper Clause (Art. I, § 8) is the textual source of implied powers; McCulloch v. Maryland confirmed it.",
          },
          {
            prompt:
              "The clause in Article VI making valid federal law 'the supreme Law of the Land' is the ___ Clause.",
            answer: "Supremacy",
            explanation:
              "The Supremacy Clause resolves conflicts in favor of valid federal law — the basis of preemption.",
          },
        ],
      },
    },
    {
      slug: "practice-cases-and-interaction",
      title: "12 · Practice: the cases and how the levels interact",
      section: "Practice",
      exercise: {
        instructions: "Fill in each blank, then check.",
        items: [
          {
            prompt:
              "The 1819 case establishing implied powers and that a state may not tax the federal bank: McCulloch v. ___.",
            answer: "Maryland",
            explanation: "McCulloch v. Maryland, 17 U.S. 316 (1819).",
          },
          {
            prompt: "The 1824 case that read the Commerce Clause broadly to include navigation: Gibbons v. ___.",
            answer: "Ogden",
            explanation: "Gibbons v. Ogden, 22 U.S. 1 (1824).",
          },
          {
            prompt:
              "Powers exercised by BOTH the federal government and the states at the same time (like taxing) are called ___ powers.",
            answer: "concurrent",
            explanation:
              "Concurrent powers — such as taxing and running court systems — are shared by both levels of government.",
          },
          {
            prompt: "When a valid federal law overrides a conflicting state law, lawyers call that ___.",
            answer: "preemption",
            explanation:
              "Preemption (express, conflict, or field) is how the Supremacy Clause resolves true conflicts in the federal government's lane.",
          },
          {
            prompt:
              "Marshall wrote that 'the power to tax involves the power to ___' — why a state cannot tax the federal government.",
            answer: "destroy",
            explanation:
              "In McCulloch v. Maryland, 'the power to tax involves the power to destroy' explained why a state may not tax a supreme federal institution.",
          },
        ],
      },
    },

    // ── Section 7: Final quiz ────────────────────────────────────────────
    {
      slug: "state-vs-federal-quiz",
      title: "13 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What does federalism divide power between?",
            options: [
              "The three branches of the federal government",
              "The national (federal) government and the states",
              "The President and the courts",
              "Citizens and non-citizens",
            ],
            correctIndex: 1,
            explanation:
              "Federalism is the vertical division of power between a single national government and the individual state governments — distinct from the horizontal split among the three branches.",
            sourceLessonSlug: "what-is-federalism",
          },
          {
            prompt: "Which kind of power does the 10th Amendment describe?",
            options: [
              "Enumerated powers given to Congress",
              "Implied powers under the Necessary and Proper Clause",
              "Reserved powers kept by the states or the people",
              "Treaty powers of the President",
            ],
            correctIndex: 2,
            explanation:
              "The 10th Amendment reserves to the states (or the people) the powers not delegated to the federal government — the textual basis for reserved powers.",
            sourceLessonSlug: "three-kinds-of-power",
          },
          {
            prompt: "Where are most of the federal government's enumerated powers listed?",
            options: ["The Preamble", "Article I, Section 8", "The 10th Amendment", "Article III"],
            correctIndex: 1,
            explanation:
              "Article I, § 8 enumerates Congress's powers — taxing, borrowing, regulating interstate commerce, coining money, declaring war — and ends with the Necessary and Proper Clause.",
            sourceLessonSlug: "enumerated-powers-article-i",
          },
          {
            prompt: "What does the Commerce Clause give Congress power over?",
            options: [
              "Only the buying and selling of goods within one state",
              "Commerce with foreign nations, among the several states, and with the Indian tribes",
              "All commerce, with no limits",
              "Only commerce that the states approve",
            ],
            correctIndex: 1,
            explanation:
              "Article I, § 8 grants the power to regulate commerce 'with foreign Nations, and among the several States, and with the Indian Tribes.' The 'among the several States' phrase is the interstate commerce power.",
            sourceLessonSlug: "commerce-clause-and-its-reach",
          },
          {
            prompt:
              "Under the Supremacy Clause, what happens when a valid federal law and a state law genuinely conflict?",
            options: [
              "The state law wins",
              "Both are struck down",
              "The federal law prevails (the state law gives way)",
              "The Supreme Court must rewrite both",
            ],
            correctIndex: 2,
            explanation:
              "Article VI makes valid federal law 'the supreme Law of the Land,' so within the federal government's lane a conflicting state law gives way — a result lawyers call preemption.",
            sourceLessonSlug: "supremacy-clause-and-preemption",
          },
          {
            prompt: "Which of these is a concurrent power — exercised by both the federal government and the states?",
            options: ["Coining money", "Declaring war", "Taxing", "Conducting foreign policy"],
            correctIndex: 2,
            explanation:
              "Taxing is a concurrent power: both Congress and the states can levy taxes, which is why you can owe both federal and state income tax. Coining money, declaring war, and foreign policy are federal.",
            sourceLessonSlug: "concurrent-powers",
          },
          {
            prompt: "What did McCulloch v. Maryland (1819) establish?",
            options: [
              "That states may tax federal institutions",
              "That Congress has implied powers and a state may not tax the federal bank",
              "That the President can ignore Congress",
              "That the Commerce Clause is unlimited",
            ],
            correctIndex: 1,
            explanation:
              "McCulloch v. Maryland, 17 U.S. 316 (1819), confirmed implied powers under the Necessary and Proper Clause and held that a state cannot tax the federal government — 'the power to tax involves the power to destroy.'",
            sourceLessonSlug: "mcculloch-v-maryland",
          },
          {
            prompt: "In Gibbons v. Ogden (1824), how did the Supreme Court define 'commerce'?",
            options: [
              "Narrowly — only the sale of physical goods",
              "Broadly — including navigation and commercial intercourse among the states",
              "As anything a state chooses to allow",
              "As limited to foreign trade only",
            ],
            correctIndex: 1,
            explanation:
              "Gibbons v. Ogden, 22 U.S. 1 (1824), read 'commerce' broadly to include navigation and 'every species of commercial intercourse' among the states, and the federal coasting license prevailed over New York's monopoly.",
            sourceLessonSlug: "gibbons-v-ogden",
          },
          {
            prompt: "Where do local governments (cities and counties) get their authority?",
            options: [
              "Directly from the U.S. Constitution",
              "From the federal government",
              "From their state",
              "From the Supreme Court",
            ],
            correctIndex: 2,
            explanation:
              "The U.S. Constitution does not mention cities or counties; local governments are creatures of their state and act under state law.",
            sourceLessonSlug: "state-and-local-vs-federal",
          },
          {
            prompt: "Which statement best describes how state and federal law usually interact?",
            options: [
              "They are almost always in conflict",
              "Federal law replaces all state law",
              "Most of the time they operate side by side; the Supremacy Clause resolves true conflicts",
              "States can override any federal law they dislike",
            ],
            correctIndex: 2,
            explanation:
              "Most of the time state and federal law overlap peacefully (concurrent taxation, cooperative programs, two court systems). The Supremacy Clause settles only the cases where valid laws genuinely conflict.",
            sourceLessonSlug: "state-and-federal-law-interact",
          },
        ],
      },
    },
  ],
};
