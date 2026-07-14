// Authored "Know Your Rights at Work" — the labor-side sibling of the Bill of Rights course
// (`know-your-rights-course.ts`). Six women, one argument in six movements: Addie Wyatt (what a
// contract IS), Dolores Huerta (how you build power outside the room), Crystal Lee Sutton (what
// retaliation COSTS), Sara Nelson (leverage), Fran Drescher + Meredith Stiehm (the modern fight —
// AI likeness, residuals, and an employer restructuring the job out from under the old contract).
//
// Sourcing discipline (the load-bearing part of this file):
//   * EVERY statutory statement is quoted from the U.S. Code as published by Cornell's Legal
//     Information Institute — NLRA §7 (29 U.S.C. § 157), §2(3) and §2(11) (§ 152), §8(a)(1)/(3)/(4)
//     (§ 158), §10(b)/(c) (§ 160) — and the Railway Labor Act (45 U.S.C. § 156). No section number
//     in this course was guessed. nlrb.gov and dol.gov block automated fetching, so the course cites
//     the STATUTE and the CFR (29 C.F.R. § 102.9) rather than paraphrasing agency pages unread.
//   * Where the law VARIES BY STATE (at-will employment), the course says so and names Montana as
//     the statutory exception rather than stating one state's rule as universal.
//   * The five known calendar errors are corrected here on purpose, not by accident:
//       - Wyatt was ONE OF TWELVE women on Time's 1975 cover, when Time named "American Women"
//         collectively its Person of the Year. She was not "Time's Woman of the Year."
//       - Her 1976 election was to the AMALGAMATED MEAT CUTTERS. The UFCW did not exist until 1979.
//       - Sutton's mill was in ROANOKE RAPIDS, NC (Burlington is where she later died), and the
//         union in 1973–74 was the TWUA — ACTWU did not exist until the 1976 merger.
//       - Drescher (SAG-AFTRA) and Stiehm (WGAW) BOTH LEFT OFFICE IN SEPTEMBER 2025. They are
//         FORMER presidents; Sean Astin and Michele Mulroney succeeded them.
//       - Sara Nelson's "Time 100" credit could not be verified in any year and is NOT asserted.
//         Her membership/airline numbers are given as of her own Sept. 2021 congressional witness
//         bio and LABELLED with that date, because the number moves.
//   * Crystal Lee Sutton: a CourtListener opinion-database search returns NO case captioned with
//     her name (as Jordan or Sutton). This course therefore teaches retaliation from the STATUTE
//     and from NLRB v. Washington Aluminum, and states plainly that no landmark case bears her
//     name — rather than inventing a citation. Her 1977 reinstatement + back pay are real and cited.
//   * Huerta/Chavez: BAM's editorial decision was "address it directly, cited." The course teaches
//     the organizing method AND the March 2026 public record, dated, sourced to AP/NPR/CalMatters
//     coverage of the New York Times investigation. It ADJUDICATES NOTHING, speculates nowhere, and
//     invents no quotes. The two quoted Huerta lines are the ones AP reported from her own
//     March 18, 2026 statement.
//   * NOT cited anywhere, deliberately: Grokipedia and similar AI-generated reference sites, which
//     surfaced repeatedly in the research for this course. Drescher's most-circulated strike quote
//     is NOT reproduced — two orderings circulate and the primary video was not retrieved.

import type { AuthoredCourse } from "./authored-course";

export const KNOW_YOUR_RIGHTS_AT_WORK_COURSE: AuthoredCourse = {
  title: "Know Your Rights at Work",
  description:
    "The labor-side companion to The Bill of Rights: Know Your Rights. Six women — Addie Wyatt, Dolores Huerta, Crystal Lee Sutton, Sara Nelson, Fran Drescher and Meredith Stiehm — and one argument in six movements: what a contract actually is, how you build power when you have none, what retaliation costs the person who absorbs it, where leverage really comes from, and what happens when an employer restructures the job so the old contract stops protecting you. You finish able to read your own contract and find the clause that protects you, recognize protected concerted activity and retaliation under the National Labor Relations Act, and know what the law does and does not do about it. Every legal statement is quoted from the statute itself.",
  lessons: [
    // ───────────────── SECTION 1 · THE CONTRACT WAS THE PROTECTION (ADDIE WYATT) ─────────────────
    {
      slug: "kyraw-the-contract-was-the-protection",
      title: "1 · Addie Wyatt at seventeen: the contract was the protection",
      section: "Section 1 · What a contract actually is",
      body: `In 1941, a seventeen-year-old named **Addie Wyatt** applied for a typist job at **Armour & Company** in Chicago. She passed the typing test. Then she showed up for work and was told that Black women were not hired as typists in the front office. She was sent to the canning department to pack stew in cans for the Army, at **62 cents an hour** (Kelly, 2022).

That is where the story usually stops — a story about discrimination, and a bad one. But it is not where *her* story stops, and the rest of it is the reason this course exists.

Wyatt joined the union: the **United Packinghouse Workers of America (UPWA)**. Not long after, Armour tried to fire her and put a white woman in her place. And here is the sentence that this entire course is built on:

> "When Armour tried to fire her and hire a white woman in her place, the UPWA used its seniority clause to protect her job." (Kelly, 2022)

Not a speech. Not a protest. Not a lawsuit. **A clause.** A specific paragraph in a specific document that said, in effect: *when the company decides who stays and who goes, it goes by how long you have been here, and not by who the boss likes.* Armour wanted to fire her. The contract said Armour could not. Armour did not.

**Wyatt learned at seventeen that the contract was the protection**, and she spent the next sixty years putting clauses like that into other people's contracts. She was elected vice president of UPWA Local 56 in 1953 and became the local's first woman president in 1954 (UFCW, n.d.). In 1974 she co-founded the **Coalition of Labor Union Women** (Kelly, 2022).

**Two things the record actually says, which are often told wrong.**

- In **1976** she became the first woman elected International Vice President of the **Amalgamated Meat Cutters and Butcher Workmen** — *not* of the UFCW. The **UFCW did not exist until 1979**, when the Meat Cutters merged with the Retail Clerks. After that merger she became the UFCW's first Black woman international vice president. Both facts are true; the dates are three years apart and constantly collapsed into one wrong sentence.
- In **1975**, *Time* named **"American Women" — collectively — its Person of the Year**, and put **twelve** women on the cover. Wyatt was one of them, alongside Betty Ford, Barbara Jordan and Billie Jean King (*Time*, n.d.). She was **not** "Time's Woman of the Year." The collective award is the whole point of the award, and flattening it into an individual prize erases eleven other people.

She was inducted into the U.S. Department of Labor's Hall of Honor in 2012 (UFCW, n.d.).

**So: what is a contract?** A **collective bargaining agreement** is a written agreement between an employer and a union representing its workers. It is not a mission statement and it is not a list of feelings. It is an enforceable document, and the reason it matters is that it **replaces the boss's discretion with a written rule** — on pay, on hours, on discipline, on who gets laid off first, and on what happens when somebody thinks a rule was broken.

Everything else in this course is about how those clauses get into the document, and what happens to the people who put them there.

:::reveal Addie Wyatt's job at Armour was saved by something very specific. What was it, and why is that different from her employer simply deciding to be fair? ||| A **seniority clause** in the UPWA's contract, which set layoff and replacement order by length of service rather than by the employer's preference. It is different because it did not depend on the employer's goodwill at all — it was an enforceable written rule that took the decision out of the company's hands.

## Sources
- Kelly, K. (2022, January 11). *The indomitable Rev. Addie L. Wyatt*. The Nation. https://www.thenation.com/article/activism/addie-wyatt-labor/
- *Time*. (n.d.). *American Women: 1975 — Person of the Year: A photo history*. https://content.time.com/time/specials/packages/article/0,28804,2019712_2019710_2019675,00.html
- United Food and Commercial Workers International Union. (n.d.). *UFCW celebrates Black History Month: Addie Wyatt*. https://www.ufcw.org/ufcw-celebrates-black-history-month-addie-wyatt/`,
    },
    {
      slug: "kyraw-at-will-and-what-a-contract-changes",
      title: "2 · At-will employment, and exactly what a contract changes",
      section: "Section 1 · What a contract actually is",
      recallContent: [
        {
          prompt: "What kind of clause saved Addie Wyatt's job at Armour in the 1940s, and what does that kind of clause do?",
          answer:
            "A seniority clause. It sets the order of layoffs and replacements by length of service, replacing the employer's discretion with a written rule.",
        },
        {
          prompt: "Which union did Addie Wyatt become the first woman International Vice President of in 1976 — and why is it wrong to call it the UFCW?",
          answer:
            "The Amalgamated Meat Cutters and Butcher Workmen. The UFCW did not exist until 1979, when the Meat Cutters merged with the Retail Clerks.",
        },
      ],
      body: `To understand what a contract *changes*, you have to know what the default is. The default is harsher than most people realize.

**The default is at-will employment.** In the United States, the background rule in nearly every state is that "an employer and employee agree there is no set period of employment" (Legal Information Institute [LII], n.d.-a). In practice that means an employer can fire you **for a good reason, a bad reason, or no reason at all** — and you can quit the same way. Your boss does not owe you an explanation, a warning, a hearing, or a second chance.

That is the water you are swimming in. It is not a loophole; it is the rule.

**At-will is not unlimited.** Courts and legislatures have carved out exceptions, and the LII lists three that most states recognize in some form (LII, n.d.-a):

| Exception | What it means |
| --- | --- |
| **Public policy** | An employer cannot fire you for a reason that violates well-established public policy of the state — for example, for refusing to break the law. |
| **Implied contract** | An employer's own conduct or documents (a handbook, a promise) can create a reasonable expectation of continued employment. |
| **Implied covenant of good faith and fair dealing** | In some states (California is the usual example), an employer cannot fire in bad faith. |

Separately, **federal law forbids firing you for specific protected reasons** — because of your race, sex, religion, national origin, age or disability; because you filed a safety complaint; and, as the next section covers in detail, because you organized with your coworkers.

**One state is genuinely different, and you should know which.** **Montana** is the one state that abandoned at-will employment by statute. Under the **Wrongful Discharge from Employment Act**, once an employee has completed a probationary period, a discharge is wrongful if, among other things, "it was not for good cause" (Mont. Code Ann. § 39-2-904). Everywhere else, "good cause" is not something the law gives you by default.

**Which is exactly what a contract does.** A collective bargaining agreement is how a group of workers *buys* the protections that at-will employment does not give them. Look at what the J.P. Stevens textile workers finally won in their 1980 settlement, after a six-year fight you will read about in Section 4 — it is a good inventory of what a contract actually contains (Fink, 2014):

| Clause | What it replaces |
| --- | --- |
| **Just cause / discipline** | "Fired for any reason or no reason" → the employer must have a reason, and must be able to defend it. |
| **Seniority** | The boss's preference → length of service. (Wyatt's clause.) |
| **Grievance procedure with binding arbitration** | "Take it up with your manager" → a defined process ending in front of a **neutral third party**, not the company. |
| **Wages and a pay scale** | "Whatever you individually negotiated" → a published rate everyone can see. |
| **Dues check-off** | A union that has to collect dues by hand → a stable organization that can survive between fights. |

Notice which one is doing the heaviest lifting. It is not the money. It is the **grievance-and-arbitration clause**, because it is the only one that gives you somewhere to *go* when the employer breaks the others. A right with no procedure attached is a wish.

**And notice the honest limit.** All of this is about *union* contracts. Most American workers do not have one. If you are working a shift job right now, you are almost certainly at-will — which is precisely why the next section matters, because the National Labor Relations Act protects you **whether or not you have a union or ever want one**.

:::reveal Your manager fires you because she does not like your attitude. You have no union and no written contract. Has she broken the law? ||| Probably not. Under at-will employment — the default rule in nearly every state — an employer may fire you for a good reason, a bad reason, or no reason at all. It becomes unlawful only if the *real* reason falls into a protected category (race, sex, religion, age, disability, a safety complaint, or organizing with coworkers), or if a state exception like public policy or an implied contract applies. Montana is the one state that requires "good cause" by statute after a probationary period.

## Sources
- Legal Information Institute. (n.d.-a). *Employment-at-will doctrine*. Cornell Law School. https://www.law.cornell.edu/wex/employment-at-will_doctrine
- Mont. Code Ann. § 39-2-904 (Elements of wrongful discharge). Montana Legislature. https://mca.legmt.gov/bills/mca/title_0390/chapter_0020/part_0090/section_0040/0390-0020-0090-0040.html
- Fink, J. (2014, July 15). In good faith: Working-class women, feminism, and religious support in the struggle to organize J. P. Stevens textile workers in the Southern Piedmont, 1974–1980. *Southern Spaces*. https://southernspaces.org/2014/good-faith-working-class-women-feminism-and-religious-support-struggle-organize-j-p-stevens-textile-workers-southern-piedmont-1974-1980/`,
    },
    {
      slug: "kyraw-find-the-clause",
      title: "3 · Practice: find the clause that protects you",
      section: "Section 1 · What a contract actually is",
      recallContent: [
        {
          prompt: "What is \"at-will employment,\" in one sentence?",
          answer:
            "The default rule in nearly every U.S. state: absent a contract or a protected reason, an employer may fire you for a good reason, a bad reason, or no reason at all.",
        },
        {
          prompt: "Which single clause in a union contract gives all the other clauses their teeth, and why?",
          answer:
            "The grievance procedure ending in binding arbitration, because it is the clause that gives you somewhere to go — in front of a neutral third party — when the employer breaks one of the others.",
        },
      ],
      body: `Reading a contract is a skill, and like most skills it is mostly knowing what to look for. Here is the drill.

**If you have a contract, an offer letter, or an employee handbook**, get it out now — a real one, yours. If you do not have one, use a friend's, a parent's, or a publicly posted union contract (many locals publish theirs, and both the SAG-AFTRA and WGA agreements you will meet in Section 6 are public documents).

**The five things to find, in this order:**

1. **Does it say how you can be fired?** Search for the words *cause*, *just cause*, *termination*, *discipline*, *at-will*. If it says "at-will" anywhere, that is the most important sentence in the document, and Lesson 2 told you what it means.
2. **Does it say what happens if you disagree?** Search for *grievance*, *dispute*, *arbitration*. If there is no procedure, there is no remedy short of a lawsuit.
3. **Does it say how your hours and pay are set?** Search for *schedule*, *overtime*, *rate*, *classification*.
4. **Does it say what happens when work is cut?** Search for *seniority*, *layoff*, *recall*. That is Wyatt's clause.
5. **Does it say anything about your image, voice, name, or work product?** Search for *likeness*, *name and likeness*, *digital*, *AI*, *artificial intelligence*, *work made for hire*, *assignment*. Section 6 is entirely about this, and it is the clause most likely to be in *your* contract and not in your parents'.

**A note on the words.** Contract language is not written to be beautiful; it is written to be enforceable. "Shall" means it is required. "May" means it is optional. "Sole discretion" means the other party decides and you have no say. "Reasonable" means a neutral third party gets to decide what that meant. When you see **"sole discretion,"** slow down — you have just read a sentence that gives something away.

Fill in each blank below, then check. Spelling and capitalization are forgiving.

**This course explains general legal principles. It is not legal advice.** If you are facing an actual situation, a lawyer, a legal-aid organization, your union, or the relevant government agency can advise you on your state's law and your particular facts.`,
      exercise: {
        instructions: "Fill in each blank, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt: "The clause that set the order of layoffs by length of service — the one that saved Addie Wyatt's job — is a ___ clause.",
            answer: "seniority",
            explanation: "Seniority replaces the employer's preference with a written, checkable rule.",
          },
          {
            prompt: "The default rule in nearly every U.S. state, under which an employer may fire you for a good reason, a bad reason, or no reason at all, is called ___ employment.",
            answer: "at-will",
            accept: ["at will", "employment at will", "at-will"],
            explanation: "At-will employment is the background rule; a contract is how workers replace it with something better.",
          },
          {
            prompt: "The clause that gives you a defined process, ending in front of a neutral third party, when you think the employer broke a rule is the ___ procedure.",
            answer: "grievance",
            explanation: "A grievance procedure ending in binding arbitration is what gives every other clause its teeth.",
          },
          {
            prompt: "The neutral third party who decides a grievance the employer and union cannot settle is an ___.",
            answer: "arbitrator",
            accept: ["arbitrator", "arbiter"],
            explanation: "Binding arbitration takes the final decision away from the company.",
          },
          {
            prompt: "The one U.S. state that abandoned at-will employment by statute and requires \"good cause\" to fire an employee past probation is ___.",
            answer: "Montana",
            explanation: "Montana's Wrongful Discharge from Employment Act (Mont. Code Ann. § 39-2-904).",
          },
          {
            prompt: "In contract language, a term meaning the other party decides and you have no say is \"sole ___.\"",
            answer: "discretion",
            explanation: "\"Sole discretion\" is the phrase to slow down on: you have just read a sentence that gives something away.",
          },
          {
            prompt: "In contract language, the word that means an obligation is REQUIRED (as opposed to optional) is \"___.\"",
            answer: "shall",
            explanation: "\"Shall\" is mandatory; \"may\" is permissive. The difference is the whole clause.",
          },
          {
            prompt: "A written agreement between an employer and a union representing its workers is a collective ___ agreement.",
            answer: "bargaining",
            explanation: "The collective bargaining agreement (CBA) is the document this whole course is about.",
          },
        ],
      },
    },
    {
      slug: "kyraw-quiz-contract",
      title: "4 · Quiz: what a contract actually is",
      section: "Section 1 · What a contract actually is",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What specifically saved Addie Wyatt's job when Armour tried to replace her with a white woman?",
            options: [
              "A seniority clause in the UPWA's contract",
              "A federal anti-discrimination statute",
              "A strike by the whole plant",
              "A personal appeal to the plant manager",
            ],
            correctIndex: 0,
            explanation:
              "The UPWA used its seniority clause to protect her job (Kelly, 2022). No federal employment anti-discrimination statute existed in 1941 — that is part of why the clause mattered so much.",
            sourceLessonSlug: "kyraw-the-contract-was-the-protection",
          },
          {
            prompt: "In 1976, Addie Wyatt became the first woman elected International Vice President of which union?",
            options: [
              "The Amalgamated Meat Cutters and Butcher Workmen",
              "The United Food and Commercial Workers (UFCW)",
              "The United Packinghouse Workers of America (UPWA)",
              "The Coalition of Labor Union Women (CLUW)",
            ],
            correctIndex: 0,
            explanation:
              "It was the Amalgamated Meat Cutters. The UFCW did not exist until 1979, when the Meat Cutters merged with the Retail Clerks — she became the UFCW's first Black woman international VP after that merger. Sources routinely collapse these two facts into one wrong sentence.",
            sourceLessonSlug: "kyraw-the-contract-was-the-protection",
          },
          {
            prompt: "What did Time magazine actually do in 1975?",
            options: [
              "Named \"American Women\" collectively its Person of the Year, with twelve women — including Wyatt — on the cover",
              "Named Addie Wyatt its Woman of the Year",
              "Named Addie Wyatt and Barbara Jordan co-Persons of the Year",
              "Named the Coalition of Labor Union Women its Organization of the Year",
            ],
            correctIndex: 0,
            explanation:
              "The 1975 Person of the Year was a collective award to \"American Women.\" Wyatt was one of twelve on the cover. Calling her \"Time's Woman of the Year\" erases the other eleven and misstates the award.",
            sourceLessonSlug: "kyraw-the-contract-was-the-protection",
          },
          {
            prompt: "Under at-will employment, which of these is generally true?",
            options: [
              "An employer may fire you for a good reason, a bad reason, or no reason at all",
              "An employer must give two weeks' notice and a written reason",
              "An employer must show good cause before firing anyone",
              "An employer may only fire you after a documented warning process",
            ],
            correctIndex: 0,
            explanation:
              "At-will is the default in nearly every state (LII, n.d.-a). It becomes unlawful only when the real reason is a protected one, or a state exception applies.",
            sourceLessonSlug: "kyraw-at-will-and-what-a-contract-changes",
          },
          {
            prompt: "Which state abandoned at-will employment by statute and requires \"good cause\" to discharge an employee who has finished probation?",
            options: ["Montana", "California", "New York", "Massachusetts"],
            correctIndex: 0,
            explanation:
              "Montana's Wrongful Discharge from Employment Act (Mont. Code Ann. § 39-2-904). California recognizes an implied-covenant exception but is still an at-will state.",
            sourceLessonSlug: "kyraw-at-will-and-what-a-contract-changes",
          },
          {
            prompt: "Which of these is NOT one of the commonly recognized exceptions to at-will employment listed by Cornell's Legal Information Institute?",
            options: [
              "The employee has worked there more than five years",
              "Public policy",
              "Implied contract",
              "The implied covenant of good faith and fair dealing",
            ],
            correctIndex: 0,
            explanation:
              "Length of service, by itself, creates no at-will exception. Seniority protects you only if a *contract* says it does — which is exactly the point of Lesson 1.",
            sourceLessonSlug: "kyraw-at-will-and-what-a-contract-changes",
          },
          {
            prompt: "Why is the grievance-and-arbitration clause described as the one that gives the other clauses their teeth?",
            options: [
              "Because it is the only clause that gives you a defined process, ending before a neutral third party, when the employer breaks another clause",
              "Because it sets the highest wages",
              "Because it is legally required in every contract",
              "Because it lets the union call a strike at any time",
            ],
            correctIndex: 0,
            explanation:
              "A right with no procedure attached is a wish. Arbitration moves the final decision out of the company's hands.",
            sourceLessonSlug: "kyraw-at-will-and-what-a-contract-changes",
          },
          {
            prompt: "In contract language, what does \"sole discretion\" signal?",
            options: [
              "The other party decides, and you have no say",
              "Both parties must agree",
              "A neutral arbitrator decides",
              "The clause is unenforceable",
            ],
            correctIndex: 0,
            explanation: "\"Sole discretion\" is the phrase to slow down on — you have just read a sentence that gives something away.",
            sourceLessonSlug: "kyraw-find-the-clause",
          },
          {
            prompt: "In contract language, what is the difference between \"shall\" and \"may\"?",
            options: [
              "\"Shall\" makes it required; \"may\" makes it optional",
              "\"Shall\" applies to the employer; \"may\" applies to the employee",
              "They mean the same thing",
              "\"Shall\" applies in the future; \"may\" applies now",
            ],
            correctIndex: 0,
            explanation: "Mandatory versus permissive. Swapping one for the other changes what the clause is worth.",
            sourceLessonSlug: "kyraw-find-the-clause",
          },
          {
            prompt: "A collective bargaining agreement is best described as:",
            options: [
              "An enforceable written agreement between an employer and a union representing its workers",
              "A statement of an employer's values and commitments",
              "A federal statute governing all workplaces",
              "A non-binding memo produced at the end of a strike",
            ],
            correctIndex: 0,
            explanation:
              "It is enforceable, and its function is to replace the employer's discretion with written rules — on pay, hours, discipline, layoffs, and what happens when someone says a rule was broken.",
            sourceLessonSlug: "kyraw-the-contract-was-the-protection",
          },
          {
            prompt: "Wyatt's employer sent her to the canning floor in 1941 after she passed the typing test. What was the stated reason?",
            options: [
              "Black women were not hired as typists in the front office",
              "There were no typist vacancies that week",
              "She was too young for a clerical role",
              "The typing test result was lost",
            ],
            correctIndex: 0,
            explanation:
              "She was hired, and then told on arrival that the clerical positions were closed to her. She was sent to pack stew for the Army at 62 cents an hour (Kelly, 2022).",
            sourceLessonSlug: "kyraw-the-contract-was-the-protection",
          },
          {
            prompt: "Which of these clauses replaces \"whatever you individually negotiated\" with a published rate that everyone can see?",
            options: ["A wage scale", "A seniority clause", "A dues check-off", "A no-strike clause"],
            correctIndex: 0,
            explanation:
              "A published pay scale is one of the quieter powers of a contract: it makes pay legible, which makes unequal pay visible.",
            sourceLessonSlug: "kyraw-at-will-and-what-a-contract-changes",
          },
          {
            prompt: "In 1974, Addie Wyatt co-founded which organization?",
            options: [
              "The Coalition of Labor Union Women (CLUW)",
              "The United Farm Workers (UFW)",
              "The Association of Flight Attendants (AFA)",
              "The Textile Workers Union of America (TWUA)",
            ],
            correctIndex: 0,
            explanation: "She co-founded CLUW in 1974 (Kelly, 2022), and was a founding member of the Coalition of Black Trade Unionists.",
            sourceLessonSlug: "kyraw-the-contract-was-the-protection",
          },
          {
            prompt: "You read your offer letter and find the phrase \"employment is at-will.\" What is the practical effect of that sentence?",
            options: [
              "Either side can end the employment at any time, for almost any reason, without cause or notice",
              "You are guaranteed employment for one year",
              "You cannot be fired without a written warning first",
              "You have automatically joined a union",
            ],
            correctIndex: 0,
            explanation:
              "It is the single most consequential sentence in most offer letters, and it usually appears in a paragraph people skim.",
            sourceLessonSlug: "kyraw-find-the-clause",
          },
          {
            prompt: "Which of these is the LEAST reliable protection for a worker, on its own?",
            options: [
              "An employer's stated commitment to treating employees fairly",
              "A seniority clause in a signed collective bargaining agreement",
              "A statutory right enforced by a federal agency",
              "A grievance procedure ending in binding arbitration",
            ],
            correctIndex: 0,
            explanation:
              "A commitment depends on the employer's continuing goodwill. A clause, a statute, and a procedure do not. That is the difference Wyatt learned at seventeen.",
            sourceLessonSlug: "kyraw-the-contract-was-the-protection",
          },
        ],
      },
    },
    // ───────────── SECTION 2 · WHO THE LAW COVERS — AND WHO IT LEAVES OUT (NLRA §7) ─────────────
    {
      slug: "kyraw-section-7-protected-concerted-activity",
      title: "5 · Section 7: the right you already have, union or not",
      section: "Section 2 · Protected concerted activity — and who the law leaves out",
      recallContent: [
        {
          prompt: "What does a grievance-and-arbitration clause do that no other clause does?",
          answer:
            "It gives you a defined process, ending before a neutral third party rather than the company, when you believe the employer broke one of the other clauses.",
        },
        {
          prompt: "What is the default rule in nearly every U.S. state if you have no contract?",
          answer:
            "At-will employment: the employer may fire you for a good reason, a bad reason, or no reason at all, unless the real reason is a legally protected one.",
        },
      ],
      body: `Most of Section 1 was about people who had a contract. Now the part that applies to **you**, right now, in the job you may already have — with no union, no contract, and no plans to get either.

In 1935 Congress passed the **National Labor Relations Act (NLRA)**, sometimes called the Wagner Act. Its **Section 7** is one sentence, and it is worth reading slowly, because it is short and it is doing a great deal of work:

> "Employees shall have the right to self-organization, to form, join, or assist labor organizations, to bargain collectively through representatives of their own choosing, **and to engage in other concerted activities for the purpose of collective bargaining or other mutual aid or protection**, and shall also have the right to refrain from any or all of such activities..." (29 U.S.C. § 157)

Read the bolded part again. That is the sleeper clause of American labor law, and it is the reason this lesson exists. **Section 7 does not only protect union members. It protects employees who act together — whether or not a union exists, is wanted, or is ever mentioned.**

This has a name: **protected concerted activity**. Break the phrase in half.

**"Concerted"** means *with or on behalf of other employees* — not just you, alone, about you, alone. Two coworkers agreeing to ask for a schedule change together is concerted. One employee grumbling about their own raise, alone, generally is not.

**"For mutual aid or protection"** means it has to be about **the terms and conditions of your work** — pay, hours, safety, scheduling, workload, treatment by a supervisor. Not about the price of the sandwiches, not about politics generally.

**The Supreme Court case that makes this concrete is worth knowing by heart.** In **NLRB v. Washington Aluminum Co., 370 U.S. 9 (1962)**, seven machinists in a Baltimore machine shop came in on a January morning to find the furnace had broken overnight and the shop was freezing — it was 22 degrees outside. They talked it over, and they walked out. The company fired all seven.

Two facts make this case the one to remember:

1. **They had no union.** They were, in the Court's words, completely unorganized, with no bargaining representative of any kind.
2. **They never made a demand.** They didn't ask for anything first. They just left.

The Supreme Court held they were protected anyway, and that firing them violated the Act. The Court said it "cannot agree that employees necessarily lose their right to engage in concerted activities under § 7 merely because they do not present a specific demand upon their employer to remedy a condition they find objectionable" (*NLRB v. Washington Aluminum Co.*, 1962).

**So, in plain terms, Section 7 protects you when you and at least one coworker:**

- talk to each other about your pay, hours, schedules or working conditions (including on social media, and including where the employer has told you not to);
- go together to a manager to raise a problem about the work;
- sign a group letter or petition about a working condition;
- refuse together to work in conditions you believe are unsafe.

**And a limit, honestly stated:** Section 7 is not a shield for everything you might do at work. Activity can lose protection if it is, for example, egregiously disloyal, violent, or a deliberate breach of a contract's no-strike clause. And — critically — it must be *concerted*. Acting entirely alone, about only yourself, usually is not covered.

**One distinction the sibling course sets up.** *The Bill of Rights: Know Your Rights* teaches that the 1st Amendment restrains **government**, not private employers — your boss at a private company is not bound by the free speech clause. Section 7 is where a private-sector worker's protection actually comes from. **Different source, different scope, and confusing the two is the most common mistake people make about their rights at work.**

:::reveal Three coworkers with no union walk off a shift together because the walk-in freezer has been broken for a week and the kitchen is unbearable. They never asked the manager to fix it first. Are they protected? ||| Generally yes. This is the fact pattern of *NLRB v. Washington Aluminum* (1962): they acted **together** (concerted), about a **working condition** (mutual aid or protection), and the Supreme Court held that employees do not lose § 7 protection merely because they made no specific demand first. Having no union does not matter — § 7 protects concerted activity whether or not a union is involved.

## Sources
- National Labor Relations Act § 7, 29 U.S.C. § 157. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/29/157
- NLRB v. Washington Aluminum Co., 370 U.S. 9 (1962). Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/supremecourt/text/370/9`,
    },
    {
      slug: "kyraw-who-the-nlra-leaves-out",
      title: "6 · The exclusions: who Section 7 does not cover, and why it matters",
      section: "Section 2 · Protected concerted activity — and who the law leaves out",
      recallContent: [
        {
          prompt: "What are the two halves of \"protected concerted activity\"?",
          answer:
            "\"Concerted\" — acting with or on behalf of other employees, not alone about yourself only. And \"for mutual aid or protection\" — about the terms and conditions of work: pay, hours, safety, scheduling, treatment.",
        },
        {
          prompt: "Do you need a union for Section 7 to protect you?",
          answer:
            "No. Section 7 protects employees who act together whether or not a union exists, is wanted, or is ever mentioned. NLRB v. Washington Aluminum (1962) involved seven completely unorganized workers.",
        },
      ],
      body: `Here is the part of American labor law that nobody puts on a poster.

Section 7 gives rights to "**employees**." So everything depends on who counts as an employee — and the Act answers that in **Section 2(3)**, which is mostly a list of people who **do not**:

> "The term 'employee' shall include any employee... **but shall not include** any individual employed as an **agricultural laborer**, or in the **domestic service** of any family or person at his home, or any individual employed by his **parent or spouse**, or any individual having the status of an **independent contractor**, or any individual employed as a **supervisor**, or any individual employed by an employer subject to the **Railway Labor Act**..." (29 U.S.C. § 152(3))

Read that list again and notice who is on it. This is not a technicality. **It is a map of who got left out of the deal in 1935, and the consequences are still running.**

| Excluded | What that means in practice |
| --- | --- |
| **Agricultural laborers** | Farm workers have **no federal right** to organize under the NLRA. This is why Section 3 of this course exists — Dolores Huerta's entire fight had to happen *outside* this statute. |
| **Domestic workers** | Housekeepers, nannies and home care workers in a private home are excluded. |
| **Independent contractors** | If you are (genuinely) a contractor, not an employee, § 7 does not cover you. Note that what matters is the **actual working relationship**, not what the company calls you on paper — but the exclusion is real, and it is why the "are you a contractor or an employee?" fight is so bitter. Freelancers: this is your line. |
| **Supervisors** | See below. |
| **Employees under the Railway Labor Act** | Railroad and airline workers — including **flight attendants**. They have organizing rights, but under a *different statute* with very different rules. Section 5 of this course is entirely about what that does to leverage. |

Public-sector workers are also outside the NLRA; government employees' rights come from other federal and state laws that vary enormously.

**"Supervisor" is a bigger trapdoor than it sounds.** The Act defines it in **Section 2(11)**:

> "The term 'supervisor' means any individual having authority, in the interest of the employer, to **hire, transfer, suspend, lay off, recall, promote, discharge, assign, reward, or discipline** other employees, or responsibly to direct them, or to adjust their grievances, or effectively to recommend such action, if in connection with the foregoing the exercise of such authority is **not of a merely routine or clerical nature, but requires the use of independent judgment**." (29 U.S.C. § 152(11))

Notice what this does *not* say. It does not say "manager." It does not depend on your title, your salary, or whether you have an office. It depends on **authority and independent judgment**. A shift lead at a coffee shop who genuinely has authority to discipline or effectively recommend firing may be a supervisor — and therefore outside § 7 — while carrying a name badge identical to everyone else's. Conversely, a "manager" whose authority is purely routine may still be a covered employee.

**Why this section is the honest one.** It would be easy to teach a course that says "you have rights at work!" and stop. But the single most useful thing a worker can know is **whether the law is actually pointed at them**, because the entire rest of the analysis — retaliation, charges, remedies — depends on it. A farm worker, a nanny, a freelance camera operator and a flight attendant all have very different answers, and none of their answers is the one in the poster.

The next four sections are, in order: what people did when the law **didn't** cover them (Huerta), what happens when it covers you and the employer breaks it anyway (Sutton), how you find leverage under a statute designed to **stop** you striking (Nelson), and what happens when the job itself changes shape (Drescher and Stiehm).

:::reveal Your friend works on a farm picking strawberries. Another friend is a flight attendant. A third is a freelance video editor invoicing as a contractor. Which of them is protected by NLRA Section 7? ||| **None of them, as such.** Agricultural laborers, independent contractors, and workers for employers covered by the Railway Labor Act (which includes airlines) are all expressly excluded from the definition of "employee" in § 2(3). Flight attendants do have organizing rights — but under the Railway Labor Act, a different statute with different rules. The farm worker's rights depend entirely on state law, if any.

## Sources
- National Labor Relations Act § 2(3) and § 2(11), 29 U.S.C. § 152. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/29/152
- National Labor Relations Act § 7, 29 U.S.C. § 157. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/29/157`,
    },
    {
      slug: "kyraw-quiz-coverage",
      title: "7 · Quiz: protected concerted activity, and who is covered",
      section: "Section 2 · Protected concerted activity — and who the law leaves out",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Which statute contains the right to engage in \"concerted activities for... mutual aid or protection\"?",
            options: [
              "The National Labor Relations Act, Section 7 (29 U.S.C. § 157)",
              "The 1st Amendment to the U.S. Constitution",
              "The Fair Labor Standards Act",
              "The Railway Labor Act, Section 6",
            ],
            correctIndex: 0,
            explanation:
              "NLRA § 7, codified at 29 U.S.C. § 157. The 1st Amendment restrains government, not a private employer — a distinction the sibling Bill of Rights course develops.",
            sourceLessonSlug: "kyraw-section-7-protected-concerted-activity",
          },
          {
            prompt: "Do you need to be in a union for Section 7 to protect you?",
            options: [
              "No — § 7 protects concerted activity whether or not a union is involved",
              "Yes — § 7 only protects union members",
              "Yes — but only if a union election has been filed",
              "Only if your employer voluntarily recognizes a union",
            ],
            correctIndex: 0,
            explanation:
              "This is the most under-known fact in American labor law. NLRB v. Washington Aluminum (1962) protected seven completely unorganized workers.",
            sourceLessonSlug: "kyraw-section-7-protected-concerted-activity",
          },
          {
            prompt: "In NLRB v. Washington Aluminum Co. (1962), what did the employees do?",
            options: [
              "Walked out together because the shop's furnace had broken and it was freezing",
              "Filed a formal written grievance through their union",
              "Went on strike for higher wages after a failed negotiation",
              "Picketed a customer's business to pressure their employer",
            ],
            correctIndex: 0,
            explanation:
              "Seven unorganized machinists walked out of a freezing Baltimore machine shop without making any demand first. The Court held the walkout was protected concerted activity.",
            sourceLessonSlug: "kyraw-section-7-protected-concerted-activity",
          },
          {
            prompt: "According to Washington Aluminum, do employees lose § 7 protection if they never made a specific demand to the employer first?",
            options: [
              "No — the Court held they do not necessarily lose protection for that reason",
              "Yes — a written demand is always required first",
              "Yes — unless a union files the demand on their behalf",
              "Only if the employer has an open-door policy",
            ],
            correctIndex: 0,
            explanation:
              "The Court would not agree that employees \"necessarily lose their right to engage in concerted activities under § 7 merely because they do not present a specific demand.\"",
            sourceLessonSlug: "kyraw-section-7-protected-concerted-activity",
          },
          {
            prompt: "What does \"concerted\" mean in \"protected concerted activity\"?",
            options: [
              "Acting with or on behalf of other employees, rather than alone about yourself only",
              "Acting with the written approval of a union",
              "Acting during a formally called strike",
              "Acting after giving the employer notice",
            ],
            correctIndex: 0,
            explanation:
              "Concerted = together. An employee complaining alone, purely about themselves, generally is not engaged in concerted activity.",
            sourceLessonSlug: "kyraw-section-7-protected-concerted-activity",
          },
          {
            prompt: "Which of these groups is EXPRESSLY EXCLUDED from the NLRA's definition of \"employee\" in § 2(3)?",
            options: [
              "Agricultural laborers",
              "Part-time retail workers",
              "Workers under the age of 21",
              "Employees at companies with fewer than 100 workers",
            ],
            correctIndex: 0,
            explanation:
              "§ 2(3) excludes agricultural laborers, domestic service workers, people employed by a parent or spouse, independent contractors, supervisors, and employees of employers covered by the Railway Labor Act.",
            sourceLessonSlug: "kyraw-who-the-nlra-leaves-out",
          },
          {
            prompt: "Why did Dolores Huerta's fight for farm workers have to happen OUTSIDE the National Labor Relations Act?",
            options: [
              "Because agricultural laborers are excluded from the NLRA's definition of \"employee\"",
              "Because the NLRA only applies east of the Mississippi",
              "Because the NLRA had not been passed yet",
              "Because farm workers chose not to use it",
            ],
            correctIndex: 0,
            explanation:
              "The exclusion in § 2(3) means farm workers have no federal right to organize under the NLRA. That single omission shapes the whole of Section 3 of this course.",
            sourceLessonSlug: "kyraw-who-the-nlra-leaves-out",
          },
          {
            prompt: "Flight attendants and railroad workers are excluded from the NLRA. Which statute covers them instead?",
            options: [
              "The Railway Labor Act",
              "The Fair Labor Standards Act",
              "The Taft-Hartley Act",
              "No statute — they have no organizing rights",
            ],
            correctIndex: 0,
            explanation:
              "§ 2(3) excludes employees of employers subject to the Railway Labor Act. They do have organizing rights — under a different statute with very different rules about striking, which Section 5 covers.",
            sourceLessonSlug: "kyraw-who-the-nlra-leaves-out",
          },
          {
            prompt: "Under NLRA § 2(11), what makes someone a \"supervisor\" — and therefore NOT covered by § 7?",
            options: [
              "Authority to hire, discipline, discharge or effectively recommend such action, using independent judgment",
              "Having the word \"manager\" in their job title",
              "Earning a salary rather than an hourly wage",
              "Having worked at the company for more than five years",
            ],
            correctIndex: 0,
            explanation:
              "The test is authority plus independent judgment — not title, not pay type. A shift lead with real disciplinary authority may be a supervisor; a \"manager\" whose authority is merely routine may not be.",
            sourceLessonSlug: "kyraw-who-the-nlra-leaves-out",
          },
          {
            prompt: "Which of these is LEAST likely to be protected concerted activity?",
            options: [
              "One employee, alone, complaining to a manager that their own raise was too small",
              "Two coworkers going together to a manager about unsafe equipment",
              "Four employees signing a group letter about scheduling",
              "Three coworkers discussing their pay with each other",
            ],
            correctIndex: 0,
            explanation:
              "Acting entirely alone, about only yourself, generally is not \"concerted.\" The other three all involve employees acting together about terms and conditions of work.",
            sourceLessonSlug: "kyraw-section-7-protected-concerted-activity",
          },
          {
            prompt: "Your employer's handbook says employees may not discuss their pay with each other. Under § 7, what is the status of that rule?",
            options: [
              "Discussing pay with coworkers is generally protected concerted activity, and a rule forbidding it is legally suspect",
              "The handbook rule controls, because you agreed to it",
              "It depends on whether you are salaried",
              "It is fine, because pay is confidential business information",
            ],
            correctIndex: 0,
            explanation:
              "Talking with coworkers about pay is a core example of concerted activity for mutual aid or protection. A workplace rule cannot simply contract § 7 away.",
            sourceLessonSlug: "kyraw-section-7-protected-concerted-activity",
          },
          {
            prompt: "Which of these is TRUE about the 1st Amendment and your private-sector job?",
            options: [
              "The 1st Amendment restrains government, not a private employer — your workplace protection comes from statutes like the NLRA instead",
              "The 1st Amendment fully protects anything you say at a private workplace",
              "The 1st Amendment and NLRA § 7 mean the same thing",
              "The 1st Amendment applies only to unionized private employers",
            ],
            correctIndex: 0,
            explanation:
              "Confusing constitutional free speech with workplace rights is the most common mistake people make about rights at work. See the sibling course, The Bill of Rights: Know Your Rights.",
            sourceLessonSlug: "kyraw-section-7-protected-concerted-activity",
          },
          {
            prompt: "A nanny working in a private family home wants to organize with other nannies employed by the same family. Does the NLRA cover her?",
            options: [
              "No — domestic service in a private home is excluded from § 2(3)",
              "Yes — all private-sector workers are covered",
              "Yes, but only if there are more than five employees",
              "Only if she is paid hourly",
            ],
            correctIndex: 0,
            explanation:
              "Domestic workers in a private home are one of the § 2(3) exclusions — one of several groups written out of the deal in 1935.",
            sourceLessonSlug: "kyraw-who-the-nlra-leaves-out",
          },
          {
            prompt: "A company classifies its delivery drivers as independent contractors. What does that do to their § 7 rights, and what is the catch?",
            options: [
              "Genuine independent contractors are excluded from § 7 — but what matters is the actual working relationship, not the label the company uses",
              "The label the company uses is legally decisive",
              "Contractors have the same § 7 rights as employees",
              "Contractors are covered by the Railway Labor Act instead",
            ],
            correctIndex: 0,
            explanation:
              "The exclusion is real, which is why misclassification fights are so bitter — but a company cannot make the exclusion apply simply by writing \"contractor\" on the paperwork.",
            sourceLessonSlug: "kyraw-who-the-nlra-leaves-out",
          },
          {
            prompt: "Why does the course say knowing the EXCLUSIONS is more useful than knowing the rights?",
            options: [
              "Because whether the law is pointed at you determines everything that follows — retaliation, charges, and remedies all depend on being a covered \"employee\"",
              "Because the exclusions are easier to memorize",
              "Because most workers are excluded",
              "Because the rights are rarely enforced",
            ],
            correctIndex: 0,
            explanation:
              "A farm worker, a nanny, a freelancer and a flight attendant all get different answers to \"what are my rights at work?\" — and none of them is the answer on the poster.",
            sourceLessonSlug: "kyraw-who-the-nlra-leaves-out",
          },
        ],
      },
    },
  ],
};
