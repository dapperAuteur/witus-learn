// Authored "The Supreme Court & the Judicial Branch", a sibling of US Civics 101
// and US Constitution 101 in the Civics curriculum on Learn.WitUS. US Civics
// 101's "The courts and judicial review" lesson is a five-line summary, and
// `state-vs-federal-course.ts` uses landmark cases only to illustrate the
// federalism SPLIT (federal vs. state power), not how the Court itself operates
// as an institution. This course is the deep version: federal court structure,
// how a judge/justice is nominated and confirmed, how a case actually reaches
// the Supreme Court (certiorari, the rule of four), oral argument and the
// justices' private conference, how opinions are written and what precedent
// means, how judges/justices READ the Constitution (described evenhandedly,
// not argued for or against), and how the other branches check the judiciary.
// Strictly non-partisan and institutional: no position on any Justice, ruling,
// or judicial philosophy.
//
// Every content lesson is cited (APA 7 in-line + a `## Sources` bibliography) to
// primary/authoritative sources: the National Archives (constitutional text),
// Congress.gov (Constitution Annotated + Congressional Research Service),
// uscourts.gov, the Federal Judicial Center (fjc.gov), and the Library of
// Congress (for Federalist No. 78, matching the citation this platform already
// uses for the Federalist Papers). Quotations are verbatim from those sources.
// Ends with a quiz whose every question links back to the lesson that teaches
// the answer.

import type { AuthoredCourse } from "./authored-course";

export const SUPREME_COURT_JUDICIAL_BRANCH_COURSE: AuthoredCourse = {
  title: "The Supreme Court & the Judicial Branch",
  description:
    "A non-partisan, institutional deep dive into how the federal judiciary actually works: the structure of the federal courts (94 district courts, 13 circuit courts, one Supreme Court), how a judge or justice is nominated and confirmed, how a case reaches the Supreme Court (certiorari and the 'rule of four'), what happens at oral argument and in the justices' private conference, how opinions (majority, concurring, dissenting) get written and what precedent means, how judges read the Constitution (described evenhandedly, not argued for or against), and how the other branches, and the People, check the courts. Cited to the National Archives, Congress.gov, the federal courts, and the Federal Judicial Center. This is how the institution works, not a verdict on any ruling.",
  lessons: [
    // ── Section 1: The Federal Judiciary ─────────────────────────────────
    {
      slug: "federal-court-structure",
      title: "1 · The federal judiciary: from district courts to the Supreme Court",
      section: "The Federal Judiciary",
      body: `Article III of the Constitution vests "the judicial Power of the United States" in "one supreme Court, and in such inferior Courts as the Congress may from time to time ordain and establish" (U.S. Const. art. III, § 1). Congress used that authority to build a three-tiered system (Administrative Office of the U.S. Courts, n.d.-a):

- **94 U.S. district courts**, the trial courts, where cases start: evidence is heard, witnesses testify, and a judge (or jury) determines the facts and applies the law. There is at least one district court in every state, plus D.C. and the territories.
- **13 U.S. courts of appeals** ("circuit courts"), one for each of 12 regional circuits plus the Federal Circuit (which handles specialized subjects like patent appeals nationwide). They don't retry facts; they review whether the law was applied correctly below.
- **One U.S. Supreme Court**, the final level of appeal for federal and constitutional questions.

Two protections insulate Article III judges from political pressure: they "hold their Offices during good Behaviour," effectively **life tenure**, and their salary "shall not be diminished" while in office (U.S. Const. art. III, § 1).

Not every federal judge is an Article III judge. **Bankruptcy judges and magistrate judges**, for example, are created by Congress under other constitutional authority (sometimes called "Article I" judges); they serve fixed terms rather than life tenure and handle specific, narrower categories of matters (Administrative Office of the U.S. Courts, n.d.-a).

:::reveal How many U.S. district courts and circuit courts of appeals are there, and what two protections does Article III give judges' independence? ||| 94 district courts and 13 courts of appeals (plus the Supreme Court). Article III judges have effective life tenure ("during good Behaviour") and salary protection (it cannot be reduced while they serve).

## Sources
- U.S. Const. art. III, § 1. National Archives. https://www.archives.gov/founding-docs/constitution-transcript
- Administrative Office of the U.S. Courts. (n.d.-a). *Court role and structure*. https://www.uscourts.gov/about-federal-courts/court-role-and-structure`,
    },
    {
      slug: "nomination-and-confirmation",
      title: "2 · How a judge gets there: nomination and confirmation",
      section: "The Federal Judiciary",
      recallContent: [
        {
          prompt: "What are the three tiers of the federal court system?",
          answer: "U.S. district courts (trial), U.S. courts of appeals/circuit courts (first appeal), and the Supreme Court (final appeal).",
        },
        {
          prompt: "What two protections does Article III give federal judges to keep them independent of political pressure?",
          answer: "Effective life tenure ('during good Behaviour') and salary protection.",
        },
      ],
      body: `Article II gives the President the power to **nominate** federal judges and Supreme Court justices, "by and with the Advice and Consent of the Senate" (U.S. Const. art. II, § 2). In modern practice, a nomination goes to the **Senate Judiciary Committee**, which investigates the nominee's record, holds public hearings where senators question the nominee, and then votes on whether to recommend confirmation to the full Senate (Congressional Research Service, n.d.-a).

The full Senate then votes; confirmation itself has always required only a **simple majority** of senators present and voting (Congressional Research Service, n.d.-a). Getting to that vote is the part that has changed: debate on a nomination could historically be **filibustered**, requiring 60 votes to invoke cloture and move to a final vote. The Senate changed this by a rules interpretation, informally called the "nuclear option": in **2013**, for lower-court and executive-branch nominations, and in **2017**, extended to **Supreme Court nominations**, after which ending debate on any judicial nomination has required only a simple majority (Congressional Research Service, n.d.-b).

Once confirmed, the President formally **commissions** the judge or justice, who then takes the constitutional and judicial oaths of office before serving (Congressional Research Service, n.d.-a).

:::reveal What vote has always been required to actually CONFIRM a judicial nominee, and what changed in 2013 and 2017? ||| A simple majority has always been enough to confirm. What changed was the vote needed to end debate and get to that vote: the Senate lowered the cloture threshold for judicial nominations from 60 votes to a simple majority, in 2013 for lower courts and in 2017 for the Supreme Court.

## Sources
- U.S. Const. art. II, § 2. National Archives. https://www.archives.gov/founding-docs/constitution-transcript
- Congressional Research Service. (n.d.-a). *Supreme Court appointment process: Consideration by the Senate Judiciary Committee* (Report No. R44236). Congress.gov. https://www.congress.gov/crs-product/R44236
- Congressional Research Service. (n.d.-b). *Senate proceedings establishing majority cloture for Supreme Court nominations: In brief* (Report No. R44819). Congress.gov. https://www.congress.gov/crs-product/R44819`,
    },

    // ── Section 2: Getting to the Supreme Court ──────────────────────────
    {
      slug: "reaching-the-supreme-court",
      title: "3 · Original vs. appellate jurisdiction, and how a case reaches the Court",
      section: "Getting to the Supreme Court",
      recallContent: [
        {
          prompt: "Who nominates federal judges, and who confirms them?",
          answer: "The President nominates; the Senate confirms (advice and consent).",
        },
        {
          prompt: "What vote does it actually take to confirm a nominee once debate ends?",
          answer: "A simple majority.",
        },
      ],
      body: `Article III, Section 2 gives the Supreme Court two very different kinds of jurisdiction (U.S. Const. art. III, § 2). **Original jurisdiction**, cases the Court hears first and only, is narrow: it applies mainly to cases involving foreign ambassadors and cases in which a state is a party, and it is used rarely. Almost every Supreme Court case instead arrives through **appellate jurisdiction**, review of a decision from a lower court, most often a U.S. court of appeals or a state's highest court.

The Court does not have to take an appellate case. A losing party asks the Court to hear the case by filing a **petition for a writ of certiorari** ("cert petition"). The Court receives far more petitions each term than it can hear and grants only a small fraction, reserving its limited docket for cases raising important, unsettled, or nationally significant legal questions, such as when different circuit courts of appeals have reached conflicting answers on the same legal question, a "circuit split" (Administrative Office of the U.S. Courts, n.d.-b).

By long-standing custom, known as the **"rule of four,"** the Court grants certiorari if just **four of the nine justices** vote to hear the case, not a majority. The rule isn't in the Constitution or any statute; it's an internal practice meant to keep a slim majority of the Court from controlling the whole docket (Federal Judicial Center, n.d.-a).

:::reveal What is a "cert petition," and how many justices' votes does it take under the "rule of four" to grant one? ||| A petition for a writ of certiorari, asking the Supreme Court to review a lower court's decision. Four of the nine justices' votes are enough to grant it, less than a majority.

## Sources
- U.S. Const. art. III, § 2. National Archives. https://www.archives.gov/founding-docs/constitution-transcript
- Administrative Office of the U.S. Courts. (n.d.-b). *Supreme Court procedures*. https://www.uscourts.gov/about-federal-courts/educational-resources/about-educational-outreach/activity-resources/supreme-court-procedures
- Federal Judicial Center. (n.d.-a). *The Supreme Court's rule of four*. https://www.fjc.gov/history/spotlight-judicial-history/rule-four`,
    },
    {
      slug: "oral-argument-and-conference",
      title: "4 · Oral argument and the justices' private conference",
      section: "Getting to the Supreme Court",
      recallContent: [
        {
          prompt: "What is the difference between the Supreme Court's original and appellate jurisdiction?",
          answer:
            "Original jurisdiction means the Court hears the case first and only (narrow, e.g. cases involving states or ambassadors); appellate jurisdiction means reviewing a lower court's decision, which is how almost every case reaches the Court.",
        },
        {
          prompt: "What is a 'circuit split,' and why does it make the Court more likely to grant cert?",
          answer:
            "When different circuit courts of appeals reach conflicting answers on the same legal question; the Court often grants review to resolve the conflict and make the law uniform nationwide.",
        },
      ],
      body: `Once certiorari is granted, both sides file written **briefs** laying out their legal arguments, and outside groups with an interest in the outcome may file their own **amicus curiae** ("friend of the court") briefs. Then the case is scheduled for **oral argument**: each side gets roughly **30 minutes**, though the Justices frequently interrupt with questions, so argument functions less as a rehearsal of the briefs and more as the Justices probing the weak points of each side's position (Administrative Office of the U.S. Courts, n.d.-b).

After argument, the Justices meet privately in the **conference**, with no law clerks, staff, or anyone else present, to discuss and vote. By tradition, the **Chief Justice speaks first**, followed by each Associate Justice in order of **seniority** (time served on the Court), ending with the most junior Justice; voting then follows the same order, Chief Justice first, most junior Justice last (Supreme Court Historical Society, n.d.).

:::reveal In the justices' conference, who speaks and votes first, and who votes last? ||| The Chief Justice speaks and votes first; the other Justices follow in order of seniority, with the most junior Justice speaking and voting last.

## Sources
- Administrative Office of the U.S. Courts. (n.d.-b). *Supreme Court procedures*. https://www.uscourts.gov/about-federal-courts/educational-resources/about-educational-outreach/activity-resources/supreme-court-procedures
- Supreme Court Historical Society. (n.d.). *How the Court works: The justices' conference*. https://supremecourthistory.org/how-the-court-works/the-justices-conference/`,
    },

    // ── Section 3: Opinions, Precedent, and Interpretation ───────────────
    {
      slug: "opinions-and-precedent",
      title: "5 · Writing the opinion: majority, concurrence, dissent, and precedent",
      section: "Opinions & Interpretation",
      recallContent: [
        {
          prompt: "About how much time does each side get at Supreme Court oral argument?",
          answer: "Roughly 30 minutes, though Justices frequently interrupt with questions.",
        },
        {
          prompt: "Who is present at the justices' private conference?",
          answer: "Only the Justices themselves, no law clerks or staff.",
        },
      ],
      body: `After the conference vote, someone has to write the Court's **opinion**. If the Chief Justice voted with the majority, the Chief assigns who writes it (to themselves or another Justice in the majority); if not, the **most senior Associate Justice in the majority** makes the assignment (Administrative Office of the U.S. Courts, n.d.-b). Drafts circulate among the Justices, and votes can still shift before the opinion is finalized and released.

A published decision can include several kinds of opinions (Administrative Office of the U.S. Courts, n.d.-b):

- **The majority opinion.** The Court's official ruling and reasoning; it's the binding legal precedent.
- **A concurring opinion.** Written by a Justice who agrees with the outcome but wants to add or state different reasoning.
- **A dissenting opinion.** Written by a Justice who disagrees with the outcome; it has no legal force but can influence future cases or later become the majority view.
- **A per curiam opinion.** An unsigned opinion "by the court" as a whole, often for less contentious or emergency matters.

The doctrine of **stare decisis** ("to stand by things decided") means courts generally follow their own prior rulings on the same legal question, giving the law predictability, though the Supreme Court can and occasionally does overrule its own past precedent (Federal Judicial Center, n.d.-b).

:::reveal Who assigns which Justice writes the majority opinion, and what is stare decisis? ||| If the Chief Justice is in the majority, the Chief assigns it (to self or another Justice); otherwise, the most senior Associate Justice in the majority assigns it. Stare decisis is the principle that courts generally follow their own prior decisions on the same legal question.

## Sources
- Administrative Office of the U.S. Courts. (n.d.-b). *Supreme Court procedures*. https://www.uscourts.gov/about-federal-courts/educational-resources/about-educational-outreach/activity-resources/supreme-court-procedures
- Federal Judicial Center. (n.d.-b). *Stare decisis*. https://www.fjc.gov/history/courts/stare-decisis`,
    },
    {
      slug: "reading-the-constitution",
      title: "6 · How judges read the Constitution: interpretive approaches",
      section: "Opinions & Interpretation",
      recallContent: [
        {
          prompt: "What is a concurring opinion, and what is a dissenting opinion?",
          answer:
            "A concurring opinion agrees with the outcome but offers different or additional reasoning; a dissenting opinion disagrees with the outcome and has no legal force, though it can influence future cases.",
        },
        {
          prompt: "What does stare decisis mean?",
          answer: "That courts generally follow their own prior decisions on the same legal question.",
        },
      ],
      body: `The Constitution's text is often general ("due process," "unreasonable searches," "the freedom of speech"), and judges have long debated HOW to read it. This lesson describes the major approaches neutrally; none is presented as correct, and the terms are widely used across the ideological spectrum (Congressional Research Service, n.d.-c).

- **Originalism / textualism.** Interprets the Constitution (or a statute) according to the original public meaning of its words at the time it was adopted, treating that meaning as fixed unless formally amended.
- **Living constitutionalism.** Reads constitutional text and its underlying principles as adaptable to changing social conditions and understanding over time, rather than frozen at ratification.
- **Purposivism.** Focuses on the broader purpose or goal a constitutional or statutory provision was meant to achieve, using that purpose to resolve ambiguity.
- **Pragmatism.** Weighs the practical, real-world consequences of a given interpretation as part of deciding it.

In practice, most judges and justices draw on more than one of these tools depending on the case, and reasonable jurists using the same approach can still reach different conclusions. Recognizing these labels helps you follow legal commentary and opinions without mistaking a judge's *method* for a partisan position, judges appointed by presidents of either party have used each of these approaches (Congressional Research Service, n.d.-c).

:::reveal What is the core difference between originalism and living constitutionalism, described neutrally? ||| Originalism reads the Constitution's text by its original public meaning at adoption, treating that meaning as fixed; living constitutionalism reads the text and its principles as adaptable to changing conditions over time.

## Sources
- Congressional Research Service. (n.d.-c). *Modes of constitutional interpretation* (Report No. R45129). Congress.gov. https://www.congress.gov/crs-product/R45129`,
    },

    // ── Section 4: Checks on the Judiciary ───────────────────────────────
    {
      slug: "checks-on-the-judiciary",
      title: "7 · Checks on the Court: how the other branches, and the People, constrain it",
      section: "Checks on the Judiciary",
      recallContent: [
        {
          prompt: "Name two interpretive approaches judges use to read the Constitution.",
          answer:
            "Any two of: originalism/textualism, living constitutionalism, purposivism, pragmatism.",
        },
        {
          prompt: "Why doesn't using a particular interpretive method tell you a judge's party or politics?",
          answer:
            "Because judges appointed by presidents of either party have used each of these approaches; the method is a tool, not a partisan label.",
        },
      ],
      body: `The judiciary is often called the "least dangerous branch," a phrase from Alexander Hamilton's **Federalist No. 78 (1788)**: "the judiciary, from the nature of its functions, will always be the least dangerous to the political rights of the Constitution," because it has "neither FORCE nor WILL, but merely judgment," and must depend on the executive branch to actually carry out its rulings (Hamilton, 1788). In practice, the Court has no army or budget of its own; it relies on the other branches to enforce and fund what it decides.

Several concrete checks back that up:

- **Congress sets the Court's size.** Nine Justices isn't in the Constitution, it's set by statute (the Judiciary Act of 1869), meaning Congress could, in theory, change it (Constitution Annotated, n.d.-a).
- **Congress can regulate the Court's appellate jurisdiction.** Article III's "Exceptions Clause" lets Congress make "such Exceptions, and under such Regulations" to the Court's appellate jurisdiction as Congress prescribes (U.S. Const. art. III, § 2), a power the Court itself upheld in **Ex parte McCardle (1868)** (Constitution Annotated, n.d.-b).
- **Judges can be impeached and removed**, though it is rare: in the nation's history, only 15 federal judges have been impeached by the House, and only 8 have been convicted and removed by the Senate (Federal Judicial Center, n.d.-c).
- **A constitutional amendment can override a ruling.** The clearest example: after the Supreme Court struck down a federal income tax in *Pollock v. Farmers' Loan & Trust Co.* (1895), the **16th Amendment (1913)** explicitly gave Congress the power to tax income, superseding that holding (Constitution Annotated, n.d.-c).

:::reveal Name two concrete ways the other branches (or the amendment process) can check the judiciary. ||| Any two of: Congress sets the Court's size by statute; Congress can regulate the Court's appellate jurisdiction under the Exceptions Clause; judges can be impeached and removed; a constitutional amendment can override a specific ruling (as the 16th Amendment did to Pollock).

## Sources
- Hamilton, A. (1788). *The Federalist No. 78*. Library of Congress. https://guides.loc.gov/federalist-papers/full-text
- Constitution Annotated. (n.d.-a). *Supreme Court and Congress*. Congress.gov. https://constitution.congress.gov/browse/essay/artIII-S1-8-3/
- Constitution Annotated. (n.d.-b). *Exceptions Clause and congressional control over appellate jurisdiction*. Congress.gov. https://constitution.congress.gov/browse/essay/artIII-S2-C2-6/
- Federal Judicial Center. (n.d.-c). *Impeachments of federal judges*. https://www.fjc.gov/history/judges/impeachments-federal-judges
- Constitution Annotated. (n.d.-c). *Historical background on Sixteenth Amendment*. Congress.gov. https://constitution.congress.gov/browse/essay/amdt16-2/`,
    },

    // ── Section 5: Practice ───────────────────────────────────────────────
    {
      slug: "practice-structure-and-confirmation",
      title: "8 · Practice: structure and confirmation",
      section: "Practice",
      exercise: {
        instructions: "Fill in each blank, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt: "There are 94 U.S. district courts and ___ U.S. courts of appeals (a number).",
            answer: "13",
            accept: ["thirteen"],
            explanation: "13 circuit courts of appeals sit below the Supreme Court: 12 regional circuits plus the Federal Circuit.",
          },
          {
            prompt: "Article III judges effectively serve for life, described as holding office 'during good ___.'",
            answer: "Behaviour",
            accept: ["behavior", "good behavior"],
            explanation: "Article III, Section 1 grants federal judges tenure 'during good Behaviour,' insulating them from political pressure.",
          },
          {
            prompt: "The President ___ (verb) federal judges; the Senate confirms them.",
            answer: "nominates",
            accept: ["nominate"],
            explanation: "Article II gives the President the power to nominate, subject to the Senate's advice and consent.",
          },
          {
            prompt: "In 2017, the Senate lowered the cloture threshold for Supreme Court nominations from 60 votes to a ___ majority.",
            answer: "simple",
            explanation: "The 'nuclear option' extended the 2013 change (for other judicial nominees) to Supreme Court nominations in 2017.",
          },
          {
            prompt: "A losing party asks the Supreme Court to hear their case by filing a petition for a writ of ___.",
            answer: "certiorari",
            accept: ["cert"],
            explanation: "A 'cert petition' asks the Court to exercise its discretion to review a lower court's decision.",
          },
        ],
      },
    },
    {
      slug: "practice-process-and-checks",
      title: "9 · Practice: process, precedent, and checks",
      section: "Practice",
      exercise: {
        instructions: "Fill in each blank, then check.",
        items: [
          {
            prompt: "Under the 'rule of four,' it takes ___ (a number) of the nine justices' votes to grant certiorari.",
            answer: "4",
            accept: ["four"],
            explanation: "The rule of four lets less than a majority (4 of 9) put a case on the Court's docket.",
          },
          {
            prompt: "At the justices' conference, the ___ Justice speaks and votes first.",
            answer: "Chief",
            accept: ["chief justice"],
            explanation: "By tradition, the Chief Justice speaks and votes first, followed by the others in order of seniority.",
          },
          {
            prompt: "An opinion that agrees with the outcome but offers different reasoning is called a ___ opinion.",
            answer: "concurring",
            accept: ["concurrence"],
            explanation: "A concurring opinion agrees with the result but not necessarily the majority's reasoning.",
          },
          {
            prompt: "The principle that courts generally follow their own prior rulings is called stare ___.",
            answer: "decisis",
            explanation: "Stare decisis ('to stand by things decided') gives legal precedent its predictive power.",
          },
          {
            prompt: "The number of Supreme Court justices (nine) is set by ___ (statute / the Constitution), so Congress could change it.",
            answer: "statute",
            accept: ["law", "the judiciary act"],
            explanation: "The Constitution doesn't fix the Court's size; the Judiciary Act of 1869 set it at nine.",
          },
        ],
      },
    },

    // ── Section 6: Final Quiz ──────────────────────────────────────────────
    {
      slug: "supreme-court-judicial-branch-quiz",
      title: "10 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "How many U.S. district courts and courts of appeals make up the federal trial and first-appeal system?",
            options: [
              "50 district courts, 50 courts of appeals",
              "94 district courts, 13 courts of appeals",
              "13 district courts, 94 courts of appeals",
              "9 district courts, 9 courts of appeals",
            ],
            correctIndex: 1,
            explanation: "There are 94 U.S. district courts (trial courts) and 13 U.S. courts of appeals (12 regional circuits plus the Federal Circuit).",
            sourceLessonSlug: "federal-court-structure",
          },
          {
            prompt: "What vote has ALWAYS been required to confirm a federal judicial nominee once debate ends?",
            options: ["A simple majority", "Two-thirds", "Three-fifths (60 votes)", "Unanimous consent"],
            correctIndex: 0,
            explanation: "Confirmation itself has always taken only a simple majority; what changed in 2013 and 2017 was the vote needed to end debate (cloture) and reach that vote.",
            sourceLessonSlug: "nomination-and-confirmation",
          },
          {
            prompt: "Which kind of Supreme Court jurisdiction covers the review of a lower court's decision, the path almost every case takes?",
            options: ["Original jurisdiction", "Appellate jurisdiction", "Exclusive jurisdiction", "Concurrent jurisdiction"],
            correctIndex: 1,
            explanation: "Original jurisdiction (cases the Court hears first and only) is narrow; nearly all cases reach the Court through appellate jurisdiction.",
            sourceLessonSlug: "reaching-the-supreme-court",
          },
          {
            prompt: "Under the 'rule of four,' how many of the nine justices must vote to grant certiorari?",
            options: ["A majority (5)", "Four", "Six", "All nine, unanimously"],
            correctIndex: 1,
            explanation: "The rule of four is a longstanding custom: four justices' votes are enough to put a case on the docket, less than a majority.",
            sourceLessonSlug: "reaching-the-supreme-court",
          },
          {
            prompt: "About how much time does each side typically get at Supreme Court oral argument?",
            options: ["5 minutes", "30 minutes", "2 hours", "A full day"],
            correctIndex: 1,
            explanation: "Each side generally gets roughly 30 minutes, though the Justices frequently interrupt with questions.",
            sourceLessonSlug: "oral-argument-and-conference",
          },
          {
            prompt: "In the justices' private conference, who speaks and votes first?",
            options: ["The most junior Justice", "The Chief Justice", "Whoever wrote the cert petition summary", "It's decided by a coin flip"],
            correctIndex: 1,
            explanation: "By tradition, the Chief Justice speaks and votes first, and the other Justices follow in order of seniority.",
            sourceLessonSlug: "oral-argument-and-conference",
          },
          {
            prompt: "What is a dissenting opinion, and does it carry legal force?",
            options: [
              "An opinion agreeing with the outcome; it is binding",
              "An opinion disagreeing with the outcome; it has no legal force",
              "The Court's official binding ruling",
              "An unsigned opinion issued 'by the court'",
            ],
            correctIndex: 1,
            explanation: "A dissent disagrees with the majority's outcome and has no binding legal force, though it can influence later cases.",
            sourceLessonSlug: "opinions-and-precedent",
          },
          {
            prompt: "What does originalism mean, described neutrally?",
            options: [
              "Reading the text by its original public meaning at the time it was adopted",
              "Ignoring the text in favor of current public opinion",
              "Following whatever the President prefers",
              "A rule that requires unanimous court decisions",
            ],
            correctIndex: 0,
            explanation: "Originalism/textualism interprets the Constitution or a statute according to its original public meaning at adoption.",
            sourceLessonSlug: "reading-the-constitution",
          },
          {
            prompt: "What sets the Supreme Court's size at nine justices?",
            options: [
              "The Constitution fixes it at nine",
              "A statute (the Judiciary Act of 1869), which Congress could change",
              "A Supreme Court ruling",
              "An executive order",
            ],
            correctIndex: 1,
            explanation: "The Constitution never specifies a number; Congress set it at nine by the Judiciary Act of 1869.",
            sourceLessonSlug: "checks-on-the-judiciary",
          },
          {
            prompt: "Which constitutional amendment overturned the Supreme Court's Pollock ruling that struck down a federal income tax?",
            options: ["The 14th Amendment", "The 15th Amendment", "The 16th Amendment", "The 19th Amendment"],
            correctIndex: 2,
            explanation: "The 16th Amendment (1913) explicitly gave Congress power to tax income, superseding Pollock v. Farmers' Loan & Trust Co. (1895).",
            sourceLessonSlug: "checks-on-the-judiciary",
          },
        ],
      },
    },
  ],
};
