// Authored "Jury Duty & the Courts (the citizen's side)", a Civics-category sibling of
// US Civics 101 on Learn.WitUS. Practical and strictly non-partisan: this is HOW jury
// service and the trial process work for the citizen who gets the summons, not an
// argument about any case, verdict, or court. Cited (APA 7 in-line + a `## Sources`
// bibliography per lesson) to the federal judiciary's own pages (uscourts.gov), the
// National Archives (the Constitution and Bill of Rights text, Founders Online), the
// Constitution Annotated (Congress.gov, Library of Congress), and the U.S. Code via
// Cornell Law School's Legal Information Institute (law.cornell.edu, an .edu source).
// Federal rules and figures (pay, jury size, exemptions) are given as the FEDERAL
// baseline; lessons flag where state/local rules vary rather than asserting one
// national rule. Ends with a quiz whose every question links back to the lesson that
// teaches the answer (the quiz standard).

import type { AuthoredCourse } from "./authored-course";

export const JURY_DUTY_COURTS_COURSE: AuthoredCourse = {
  title: "Jury Duty & the Courts (the citizen's side)",
  description:
    "A clear, non-partisan guide to jury duty from the citizen's side: why juries exist under the Sixth and Seventh Amendments, what to do with a summons, how voir dire selects a jury, the difference between grand and petit juries, how a trial actually unfolds, civil vs. criminal juries, the practical logistics of serving (pay, exemptions, and job protection), and why jury service matters. Cited to uscourts.gov, the National Archives, and the U.S. Code. Built to make you a confident, informed juror, not to take a side.",
  lessons: [
    {
      slug: "why-juries-exist",
      title: "1 · Why juries exist: the right to trial by jury",
      body: `The U.S. Constitution guarantees a jury trial twice, once for criminal cases and once for civil cases.

- **Criminal cases.** The Sixth Amendment guarantees "the accused shall enjoy the right to a speedy and public trial, by an impartial jury of the State and district wherein the crime shall have been committed" (U.S. Const. amend. VI).
- **Civil cases.** The Seventh Amendment guarantees that "In Suits at common law, where the value in controversy shall exceed twenty dollars, the right of trial by jury shall be preserved" (U.S. Const. amend. VII).

Even before the Bill of Rights, Article III required jury trials for federal crimes: "The Trial of all Crimes … shall be by Jury" (U.S. Const. art. III, § 2).

Why hand this power to ordinary citizens instead of government officials alone? The framers saw the jury as a check on government power: a panel of the accused's peers, not judges or prosecutors, decides guilt or liability. Alexander Hamilton defended the design in Federalist No. 83, arguing that the Constitution's silence about civil jury trial in its main body did not mean the framers meant to abolish it (Hamilton, 1788).

This course walks through how jury service actually works in practice: getting a summons, jury selection (voir dire), the two kinds of juries (grand and petit), how a trial unfolds, and the practical logistics of serving.

:::reveal Which two amendments guarantee the right to trial by jury, and which kind of case does each cover? ||| The Sixth Amendment guarantees a jury trial in criminal cases. The Seventh Amendment guarantees one in civil cases (suits at common law).

## Sources
- U.S. Const. amend. VI. National Archives. https://www.archives.gov/founding-docs/bill-of-rights-transcript
- U.S. Const. amend. VII. National Archives. https://www.archives.gov/founding-docs/bill-of-rights-transcript
- U.S. Const. art. III, § 2. Constitution Annotated, Congress.gov. https://constitution.congress.gov/constitution/article-3/
- Hamilton, A. (1788). *The Federalist No. 83*. Founders Online, National Archives. https://founders.archives.gov/documents/Hamilton/01-04-02-0246`,
    },
    {
      slug: "getting-a-summons",
      title: "2 · Getting a summons: what to do",
      body: `Most people first meet jury duty through the mail: a **jury summons**. Here is how it happens and what to do.

**How you're chosen.** Courts randomly select names from **voter registration lists**, supplemented in many districts by licensed-driver lists, to build a pool of qualified citizens (Administrative Office of the U.S. Courts, n.d.-a). You do not volunteer or apply; you're selected at random.

**The qualification questionnaire.** You'll first get a **Juror Qualification Questionnaire**, on paper or through the court's online eJuror system, which you must complete and return, typically within 10 days (Administrative Office of the U.S. Courts, n.d.-a). It confirms you meet basic qualifications: U.S. citizenship, at least 18 years old, having resided primarily in the judicial district for at least a year, and the ability to read, write, and speak English adequately (Administrative Office of the U.S. Courts, n.d.-b).

**The summons itself.** If you're found qualified, you may then receive a **summons** ordering you to be "on call" for jury service, often for about a two-week period, during which you may need to call in or check online to see if you're needed on a given day (Administrative Office of the U.S. Courts, n.d.-c).

**Take it seriously.** Ignoring a federal summons has real consequences: a person who fails to respond or appear can be ordered to show cause before a judge, and, absent good cause, held in **contempt of court** under 28 U.S.C. § 1864(b), which can mean a fine, brief imprisonment, or community service (Legal Information Institute, n.d.-a).

**Rules vary by jurisdiction.** This lesson describes the **federal** process. State and local courts run their own, separate jury systems (their own summons, questionnaires, and pay), so always follow the instructions on the summons you actually receive and check your own state or county court's jury website.

:::reveal Where do federal courts get the names for jury summonses, and what can happen if you simply ignore one? ||| Names come from voter registration lists (often supplemented by licensed-driver lists). Ignoring a summons can lead to a show-cause hearing and, without good cause, contempt of court, a fine, brief imprisonment, or community service.

## Sources
- Administrative Office of the U.S. Courts. (n.d.-a). *Juror selection process*. uscourts.gov. https://www.uscourts.gov/court-programs/jury-service/juror-selection-process
- Administrative Office of the U.S. Courts. (n.d.-b). *Juror qualifications, exemptions and excuses*. uscourts.gov. https://www.uscourts.gov/court-programs/jury-service/juror-qualifications-exemptions-and-excuses
- Administrative Office of the U.S. Courts. (n.d.-c). *Summoned for federal jury service?* uscourts.gov. https://www.uscourts.gov/court-programs/jury-service/summoned-federal-jury-service
- Legal Information Institute. (n.d.-a). *28 U.S.C. § 1864, Manner and time for jury selection*. Cornell Law School. https://www.law.cornell.edu/uscode/text/28/1864`,
      recallContent: [
        {
          prompt: "Which amendment guarantees a jury trial in criminal cases, and which one covers civil cases?",
          answer: "The Sixth Amendment covers criminal cases; the Seventh Amendment covers civil cases (suits at common law).",
        },
        {
          prompt: "Why did the framers build a jury into the system instead of leaving guilt and liability decisions to government officials alone?",
          answer: "They saw the jury as a check on government power: ordinary citizens, not judges or prosecutors, decide guilt or liability.",
        },
      ],
    },
    {
      slug: "voir-dire-jury-selection",
      title: "3 · Voir dire: how jury selection works",
      body: `Being on the jury pool doesn't mean you'll sit on a jury. Before a trial starts, both sides question the pool in a process called **voir dire** (a law-French phrase meaning roughly "to speak the truth"), to seat a fair, impartial jury (Administrative Office of the U.S. Courts, n.d.-a).

**How it works.** The judge, and often the attorneys, question prospective jurors, first with a short statement about the case and the parties, then with questions aimed at uncovering any personal interest in the case or reason a juror couldn't be impartial (Administrative Office of the U.S. Courts, n.d.-b).

**Two kinds of challenges.** Based on the answers, jurors can be removed in two ways:

- **Challenge for cause.** Either side can ask the judge to excuse a juror who appears to be biased or otherwise unable to be fair. There is **no limit** on the number of for-cause challenges either side may raise (Administrative Office of the U.S. Courts, n.d.-b).
- **Peremptory challenge.** Each side also gets a small, fixed number of challenges it may use to remove a juror **without stating a reason** (Administrative Office of the U.S. Courts, n.d.-b).

Whoever remains after voir dire is seated as the jury (plus, often, one or more alternates) and hears the case.

:::reveal What is voir dire, and what is the key difference between a challenge for cause and a peremptory challenge? ||| Voir dire is the questioning of prospective jurors to screen for bias before trial. A challenge for cause removes a juror the judge agrees might be biased, with no limit on how many either side may raise; a peremptory challenge lets each side remove a limited number of jurors without giving a reason.

## Sources
- Administrative Office of the U.S. Courts. (n.d.-a). *Juror selection process*. uscourts.gov. https://www.uscourts.gov/court-programs/jury-service/juror-selection-process
- Administrative Office of the U.S. Courts. (n.d.-b). *The voir dire examination*. Southern District of New York, uscourts.gov. https://wp.nysd.uscourts.gov/jurors/the-voir-dire-examination`,
      recallContent: [
        {
          prompt: "How are names for a federal jury summons chosen?",
          answer: "Courts randomly select names from voter registration lists, often supplemented with licensed-driver lists.",
        },
        {
          prompt: "What can happen to someone who ignores a federal jury summons without good cause?",
          answer: "They can be ordered to show cause before a judge and, without good cause, held in contempt of court: a fine, brief imprisonment, or community service.",
        },
      ],
    },
    {
      slug: "grand-jury-vs-petit-jury",
      title: "4 · Grand jury vs. petit (trial) jury",
      body: `"Jury duty" can mean two very different jobs. Federal courts (and most states) use two kinds of juries.

**Petit (trial) juries.** This is the jury most people picture: it hears a single criminal or civil case, weighs the evidence, and reaches a **verdict**. A federal petit jury has **6 to 12 members**, and jurors typically serve on one case before being discharged (Administrative Office of the U.S. Courts, n.d.-a).

**Grand juries.** A grand jury does something different: it doesn't decide guilt. A federal prosecutor presents evidence, and the grand jury decides only whether there is **probable cause** to believe a crime was committed, enough to issue an **indictment** and let a case go forward to trial. A federal grand jury has **16 to 23 members**, 16 of whom must be present to do business, and **12 must agree** to indict. Its proceedings are private, and grand jurors can serve on many cases over a term of up to 18 months, extendable to 24 (Administrative Office of the U.S. Courts, n.d.-a).

**Why the private, larger panel?** The Fifth Amendment requires that federal felony charges go through a grand jury: "No person shall be held to answer for a capital, or otherwise infamous crime, unless on a presentment or indictment of a Grand Jury" (U.S. Const. amend. V). That requirement is federal, though: the Supreme Court held in *Hurtado v. California*, 110 U.S. 516 (1884), that the Fifth Amendment's grand jury clause does **not** bind the states, so **states vary**, many charge felonies by a prosecutor's filing (an "information") after a preliminary hearing instead of a grand jury (Constitution Annotated, n.d.).

:::reveal What does a grand jury decide, and how is that different from what a petit (trial) jury decides? ||| A grand jury decides only whether there is probable cause to indict (issue formal charges); it does not decide guilt. A petit (trial) jury hears the actual case and decides guilt or liability.

## Sources
- Administrative Office of the U.S. Courts. (n.d.-a). *Types of juries*. uscourts.gov. https://www.uscourts.gov/court-programs/jury-service/types-juries
- U.S. Const. amend. V. National Archives. https://www.archives.gov/founding-docs/bill-of-rights-transcript
- Constitution Annotated. (n.d.). *Grand jury clause doctrine and practice*. Congress.gov, Library of Congress. https://constitution.congress.gov/browse/essay/amdt5-2-2/ALDE_00013572/`,
      recallContent: [
        {
          prompt: "What does a grand jury decide, and how big is it?",
          answer: "Whether there is probable cause to indict (issue charges); it does not decide guilt. A federal grand jury has 16 to 23 members, and 12 must agree to indict.",
        },
        {
          prompt: "Does every state require a grand jury indictment for felony charges?",
          answer: "No. The Fifth Amendment's grand jury requirement binds only the federal government (Hurtado v. California, 1884), so states vary and many use a prosecutor's filed information instead.",
        },
      ],
    },
    {
      slug: "structure-of-a-trial",
      title: "5 · The structure of a trial: opening to verdict",
      body: `Once a jury is seated, a trial generally follows the same basic shape, whether it's civil or criminal.

1. **Opening statements.** Each side gives a roadmap of the case: the basic facts, the parties, and what each side intends to prove. It's not evidence, just a preview (Administrative Office of the U.S. Courts, n.d.-a).
2. **Presentation of evidence.** The side with the burden of proof (the prosecution in a criminal case, the plaintiff in a civil case) presents its witnesses and evidence first; the other side can then present its own witnesses and evidence, and both sides may cross-examine the other's witnesses (Administrative Office of the U.S. Courts, n.d.-a).
3. **Closing arguments.** Each side reminds the jury of the key evidence and argues how the jury should interpret it (Administrative Office of the U.S. Courts, n.d.-a).
4. **Jury instructions.** The judge instructs, or "charges," the jury on the law it must apply to the facts (Administrative Office of the U.S. Courts, n.d.-a).
5. **Deliberation.** The jury retires to a private room to discuss the evidence and reach a **verdict**, applying the law the judge gave them to the facts they found (Administrative Office of the U.S. Courts, n.d.-a).
6. **Verdict.** The jury's decision is read in open court. In criminal cases, a federal jury's guilty verdict must be **unanimous** (Fed. R. Crim. P. 31); a not-guilty verdict acquits the defendant, and a jury that cannot agree is a **hung jury**, which can lead to a mistrial.

Throughout, the judge rules on legal questions (what evidence comes in, objections, and so on) while the jury's job stays focused on the facts.

:::reveal Put the stages of a trial in order: closing arguments, deliberation, evidence, jury instructions, opening statements, verdict. ||| Opening statements, presentation of evidence, closing arguments, jury instructions, deliberation, verdict.

## Sources
- Administrative Office of the U.S. Courts. (n.d.-a). *The eight stages of trial*. Southern District of New York, uscourts.gov. https://wp.nysd.uscourts.gov/jurors/the-eight-stages-of-trial
- Fed. R. Crim. P. 31. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/rules/frcrmp/rule_31`,
      recallContent: [
        {
          prompt: "What does a grand jury decide, and how big is it?",
          answer: "Whether there is probable cause to indict (issue charges); it does not decide guilt. A federal grand jury has 16 to 23 members, and 12 must agree to indict.",
        },
        {
          prompt: "Does every state require a grand jury indictment for felony charges?",
          answer: "No. The Fifth Amendment's grand jury requirement binds only the federal government (Hurtado v. California, 1884), so states vary and many use a prosecutor's filed information instead.",
        },
      ],
    },
    {
      slug: "civil-vs-criminal-juries",
      title: "6 · Civil vs. criminal juries: what differs",
      body: `Petit juries hear both criminal and civil cases, but the rules that govern them differ in real ways.

**What's at stake.** A **criminal** jury decides whether the government proved, **beyond a reasonable doubt**, that the defendant committed the charged crime. A **civil** jury decides whether a plaintiff proved, by a **preponderance of the evidence** (more likely than not), that the defendant is liable, and if so, what compensation is owed (Administrative Office of the U.S. Courts, n.d.-a). Beyond a reasonable doubt is a much higher bar, because a criminal conviction can cost someone their liberty.

**Where the right comes from.** The right to a criminal jury comes from the Sixth Amendment; the right to a civil jury (in federal court, for suits at common law) comes from the Seventh Amendment (U.S. Const. amends. VI, VII).

**Jury size and unanimity.**
- **Criminal:** federal criminal juries have **12 members** unless the parties stipulate to fewer, and a verdict must be **unanimous** (Fed. R. Crim. P. 23(b), 31).
- **Civil:** federal civil juries have **6 to 12 members**, and the verdict must be unanimous **unless the parties agree otherwise** (Fed. R. Civ. P. 48).

**Who can bring the case.** A criminal case is brought by the government (a prosecutor) against a defendant; a civil case is brought by one private party (or the government acting in a civil role) against another. Both share the trial structure from the last lesson, opening statements, evidence, closing arguments, instructions, deliberation, verdict, just with different standards of proof and different stakes.

:::reveal What standard of proof applies in a criminal case, and what standard applies in a civil case? ||| A criminal case requires proof beyond a reasonable doubt. A civil case requires proof by a preponderance of the evidence (more likely than not), a lower bar.

## Sources
- Administrative Office of the U.S. Courts. (n.d.-a). *What is the difference between a petit jury and a grand jury?* District of Connecticut, uscourts.gov. https://www.ctd.uscourts.gov/content/what-difference-between-petit-jury-and-grand-jury
- U.S. Const. amends. VI, VII. National Archives. https://www.archives.gov/founding-docs/bill-of-rights-transcript
- Fed. R. Crim. P. 23(b); Fed. R. Crim. P. 31. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/rules/frcrmp/rule_23
- Fed. R. Civ. P. 48. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/rules/frcp/rule_48`,
      recallContent: [
        {
          prompt: "What happens during opening statements?",
          answer: "Each side gives the jury a roadmap of the case, the basic facts, the parties, and what it intends to prove. It is not evidence.",
        },
        {
          prompt: "What must a federal criminal jury's guilty verdict be, and what is it called when a jury cannot agree?",
          answer: "It must be unanimous. A jury that cannot agree is called a hung jury, which can lead to a mistrial.",
        },
      ],
    },
    {
      slug: "jury-duty-logistics",
      title: "7 · Jury duty logistics: pay, exemptions, and your job",
      body: `Practical questions matter too: will you get paid, can you get out of it, and can your employer punish you for serving? Here's the federal baseline; **check your own state or local court**, because pay, exemptions, and specific rules vary by jurisdiction.

**Pay.** Federal jurors are paid an attendance fee of **$50 per day**, and jurors who serve more than 10 days on one trial (petit jurors) or more than 45 days of grand jury service can receive up to **$10 more per day** after that point, plus a travel allowance (28 U.S.C. § 1871).

**Exemptions.** Federal law completely exempts three groups from jury service: active-duty members of the armed forces or National Guard, professional firefighters and police officers, and full-time public officers actively performing official government duties (Administrative Office of the U.S. Courts, n.d.-a).

**Excuses and deferrals.** Courts can also excuse or defer other people for **undue hardship or extreme inconvenience** (for example, caregiving, travel, or a serious medical issue), and each of the 94 federal district courts sets its own detailed excuse policy (Administrative Office of the U.S. Courts, n.d.-a).

**Your job is protected.** Federal law makes it illegal for an employer to fire, threaten, intimidate, or coerce a permanent employee because of federal jury service (28 U.S.C. § 1875). An employer who violates this can be liable for lost wages, ordered to reinstate the employee, and fined up to $5,000 per violation (Legal Information Institute, n.d.-a).

**State and local rules vary.** Whether jury duty pay, exemptions, and job-protection rules apply to state or local jury service, and what they actually are, depends on your state. Always check your own state court's jury service website.

:::reveal Name one thing federal law guarantees a juror about pay, and one thing it guarantees about their job. ||| Federal jurors are paid at least $50 per day for attendance. Federal law also makes it illegal for an employer to fire, threaten, or intimidate a permanent employee because of federal jury service.

## Sources
- Administrative Office of the U.S. Courts. (n.d.-a). *Juror qualifications, exemptions and excuses*. uscourts.gov. https://www.uscourts.gov/court-programs/jury-service/juror-qualifications-exemptions-and-excuses
- 28 U.S.C. § 1871, Fees. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/28/1871
- Legal Information Institute. (n.d.-a). *28 U.S.C. § 1875, Protection of jurors' employment*. Cornell Law School. https://www.law.cornell.edu/uscode/text/28/1875`,
      recallContent: [
        {
          prompt: "What standard of proof does a criminal jury use, and what standard does a civil jury use?",
          answer: "Criminal: beyond a reasonable doubt. Civil: preponderance of the evidence (more likely than not), a lower bar.",
        },
        {
          prompt: "How many members does a federal criminal jury have, and must its verdict be unanimous?",
          answer: "12 members (unless the parties stipulate to fewer), and yes, the verdict must be unanimous.",
        },
      ],
    },
    {
      slug: "why-jury-service-matters",
      title: "8 · Why jury service matters",
      body: `It's easy to see jury duty as an inconvenience. It's also one of the few moments an ordinary citizen exercises direct governmental power.

**A check on the government.** The framers built jury trial into the Constitution twice (the Sixth and Seventh Amendments) precisely because they didn't want the government to be the sole judge of its own cases. Alexander Hamilton defended the institution in Federalist No. 83, pointing to "the security it gives to the innocent" against unjust prosecution (Hamilton, 1788). A jury made of your neighbors, not government officials, decides whether the government proved its case.

**Keeps the law close to the people.** Jury service brings people from every walk of the community into the courtroom to weigh evidence and apply the law, so verdicts are shaped by many different life experiences and perspectives, not by a single official's view (Administrative Office of the U.S. Courts, n.d.-a).

**It's also reciprocal.** The right you'd want if you were ever a party in court, criminal or civil, depends on other citizens showing up to serve. Jury duty is, in that sense, a duty owed back to a system that protects everyone, including you.

**Beyond the summons.** Serving on a jury is one specific, concrete way to participate in self-government, alongside voting, contacting representatives, and attending public meetings. It's the one form of civic participation the Constitution itself makes a right for the person on trial, and a duty for everyone else.

:::reveal Give one reason the jury system is described as a "check" on government power. ||| A jury made up of ordinary citizens, not government officials, decides whether the government proved its case, so the government cannot be the sole judge of its own prosecutions.

## Sources
- Administrative Office of the U.S. Courts. (n.d.-a). *Importance of jury service*. Southern District of New York, uscourts.gov. https://wp.nysd.uscourts.gov/jurors/importance-of-jury-services
- Hamilton, A. (1788). *The Federalist No. 83*. Founders Online, National Archives. https://founders.archives.gov/documents/Hamilton/01-04-02-0246`,
      recallContent: [
        {
          prompt: "How much is a federal juror paid per day of attendance, at minimum?",
          answer: "$50 per day, plus a travel allowance; the rate can rise after extended service.",
        },
        {
          prompt: "Can an employer fire someone for serving on a federal jury?",
          answer: "No. Federal law (28 U.S.C. § 1875) makes it illegal to fire, threaten, or intimidate a permanent employee because of federal jury service, with penalties for violators.",
        },
      ],
    },
    {
      slug: "practice-jury-duty-terms",
      title: "9 · Practice: jury duty terms",
      exercise: {
        instructions: "Fill in each blank, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt: "The process where the judge and lawyers question prospective jurors before trial is called ___ ___.",
            answer: "voir dire",
            explanation: "Voir dire screens jurors for bias before they are seated on the jury.",
          },
          {
            prompt: "A jury that decides only whether there is probable cause to indict is called a ___ jury.",
            answer: "grand",
            explanation: "A grand jury decides probable cause, not guilt; a petit jury hears the actual case.",
          },
          {
            prompt: "The standard of proof in a criminal case is beyond a reasonable ___.",
            answer: "doubt",
            explanation: "The higher standard reflects how much is at stake in a criminal case: a person's liberty.",
          },
          {
            prompt: "Removing a prospective juror without giving any reason is called a ___ challenge.",
            answer: "peremptory",
            explanation: "Each side gets a limited number of peremptory challenges; challenges for cause are unlimited.",
          },
          {
            prompt: "The amendment guaranteeing a jury trial in criminal cases is the ___ Amendment (number).",
            answer: "6th",
            accept: ["sixth", "6", "six"],
            explanation: "The Sixth Amendment guarantees a speedy, public trial by an impartial jury in criminal cases.",
          },
        ],
      },
    },
    {
      slug: "jury-duty-courts-quiz",
      title: "10 · Check your understanding",
      quiz: {
        passingScore: 70,
        // Options shuffle per attempt so a fixed answer position cannot be gamed;
        // scoring is by identity, so no answer changes (src/lib/quiz.ts).
        shuffleOptions: true,
        questions: [
          {
            prompt: "Which amendment guarantees the right to a jury trial in criminal cases?",
            options: ["The Fifth Amendment", "The Sixth Amendment", "The Seventh Amendment", "The Eighth Amendment"],
            correctIndex: 1,
            explanation:
              "The Sixth Amendment guarantees a speedy, public trial by an impartial jury in criminal cases; the Seventh Amendment covers civil cases.",
            sourceLessonSlug: "why-juries-exist",
          },
          {
            prompt: "Where do federal courts typically get the names for jury summonses?",
            options: [
              "Referrals from local court employees",
              "Voter registration and driver lists",
              "Only people who have served before",
              "Direct nomination by your employer",
            ],
            correctIndex: 1,
            explanation:
              "Courts randomly select names from voter registration lists, often supplemented with licensed-driver lists, so no one volunteers or applies.",
            sourceLessonSlug: "getting-a-summons",
          },
          {
            prompt: "What is voir dire?",
            options: [
              "The jury's final vote on a verdict",
              "Questioning jurors to screen for bias",
              "The judge's final instructions to the jury",
              "An appeal filed after a conviction",
            ],
            correctIndex: 1,
            explanation:
              "Voir dire is the pre-trial questioning of prospective jurors, using challenges for cause and peremptory challenges, to seat a fair jury.",
            sourceLessonSlug: "voir-dire-jury-selection",
          },
          {
            prompt: "What does a federal grand jury decide?",
            options: [
              "Guilt or innocence at the criminal trial",
              "Whether probable cause exists to indict",
              "How much civil money compensation is owed",
              "The length of a convict's prison sentence",
            ],
            correctIndex: 1,
            explanation:
              "A grand jury only decides whether there is probable cause to issue an indictment; it does not decide guilt.",
            sourceLessonSlug: "grand-jury-vs-petit-jury",
          },
          {
            prompt: "Under the Fifth Amendment, are all 50 states required to use a grand jury to charge someone with a felony?",
            options: [
              "Yes, in every state without exception",
              "No, it binds only the federal government",
              "Only in serious death-penalty cases",
              "Only if the defendant formally requests one",
            ],
            correctIndex: 1,
            explanation:
              "Hurtado v. California (1884) held the Fifth Amendment's grand jury clause does not bind the states, so states vary; many use a prosecutor's filed information instead.",
            sourceLessonSlug: "grand-jury-vs-petit-jury",
          },
          {
            prompt: "Which of these is the correct order for the stages of a trial?",
            options: [
              "Closing arguments, opening statements, evidence, deliberation, jury instructions, verdict",
              "Jury instructions, evidence, opening statements, closing arguments, deliberation, verdict",
              "Opening statements, evidence, closing arguments, jury instructions, deliberation, verdict",
              "Deliberation, evidence, opening statements, closing arguments, jury instructions, verdict",
            ],
            correctIndex: 2,
            explanation:
              "A trial runs: opening statements, presentation of evidence, closing arguments, jury instructions, deliberation, then verdict.",
            sourceLessonSlug: "structure-of-a-trial",
          },
          {
            prompt: "What standard of proof applies in a civil case?",
            options: [
              "Proof beyond a reasonable doubt",
              "Simple probable cause alone",
              "Preponderance of the evidence",
              "No legal standard is required",
            ],
            correctIndex: 2,
            explanation:
              "Civil cases use the lower preponderance-of-the-evidence standard; criminal cases require the higher beyond-a-reasonable-doubt standard.",
            sourceLessonSlug: "civil-vs-criminal-juries",
          },
          {
            prompt: "Under federal law, can an employer fire a permanent employee for serving on a federal jury?",
            options: [
              "Yes, if the employer offers unpaid leave instead",
              "No, it is illegal under 28 U.S.C. § 1875",
              "Only if the trial lasts more than a week",
              "It depends only on how large the employer is",
            ],
            correctIndex: 1,
            explanation:
              "Federal law makes it illegal to fire, threaten, intimidate, or coerce a permanent employee because of federal jury service, with real penalties for violators.",
            sourceLessonSlug: "jury-duty-logistics",
          },
          {
            prompt: "Why is jury service often described as a check on government power?",
            options: [
              "Jurors can veto any state law they dislike",
              "Ordinary citizens, not officials, decide it",
              "Jurors are paid directly by the defense lawyer",
              "Jurors can overturn the U.S. Constitution",
            ],
            correctIndex: 1,
            explanation:
              "Because a jury of ordinary citizens, not government officials, decides whether the government proved its case, the government cannot be the sole judge of its own prosecutions.",
            sourceLessonSlug: "why-jury-service-matters",
          },
        ],
      },
    },
  ],
};
