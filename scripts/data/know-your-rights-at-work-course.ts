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
    "The labor-side companion to The Bill of Rights: Know Your Rights. Six women, Addie Wyatt, Dolores Huerta, Crystal Lee Sutton, Sara Nelson, Fran Drescher and Meredith Stiehm, and one argument in six movements: what a contract actually is, how you build power when you have none, what retaliation costs the person who absorbs it, where leverage really comes from, and what happens when an employer restructures the job so the old contract stops protecting you. You finish able to read your own contract and find the clause that protects you, recognize protected concerted activity and retaliation under the National Labor Relations Act, and know what the law does and does not do about it. Every legal statement is quoted from the statute itself.",
  lessons: [
    // ───────────────── SECTION 1 · THE CONTRACT WAS THE PROTECTION (ADDIE WYATT) ─────────────────
    {
      slug: "kyraw-the-contract-was-the-protection",
      title: "1 · Addie Wyatt at seventeen: the contract was the protection",
      section: "Section 1 · What a contract actually is",
      body: `In 1941, a seventeen-year-old named **Addie Wyatt** applied for a typist job at **Armour & Company** in Chicago. She passed the typing test. Then she showed up for work and was told that Black women were not hired as typists in the front office. She was sent to the canning department to pack stew in cans for the Army, at **62 cents an hour** (Kelly, 2022).

That is where the story usually stops, a story about discrimination, and a bad one. But it is not where *her* story stops, and the rest of it is the reason this course exists.

Wyatt joined the union: the **United Packinghouse Workers of America (UPWA)**. Not long after, Armour tried to fire her and put a white woman in her place. And here is the sentence that this entire course is built on:

> "When Armour tried to fire her and hire a white woman in her place, the UPWA used its seniority clause to protect her job." (Kelly, 2022)

Not a speech. Not a protest. Not a lawsuit. **A clause.** A specific paragraph in a specific document that said, in effect: *when the company decides who stays and who goes, it goes by how long you have been here, and not by who the boss likes.* Armour wanted to fire her. The contract said Armour could not. Armour did not.

**Wyatt learned at seventeen that the contract was the protection**, and she spent the next sixty years putting clauses like that into other people's contracts. She was elected vice president of UPWA Local 56 in 1953 and became the local's first woman president in 1954 (UFCW, n.d.). In 1974 she co-founded the **Coalition of Labor Union Women** (Kelly, 2022).

**Two things the record actually says, which are often told wrong.**

- In **1976** she became the first woman elected International Vice President of the **Amalgamated Meat Cutters and Butcher Workmen**, *not* of the UFCW. The **UFCW did not exist until 1979**, when the Meat Cutters merged with the Retail Clerks. After that merger she became the UFCW's first Black woman international vice president. Both facts are true; the dates are three years apart and constantly collapsed into one wrong sentence.
- In **1975**, *Time* named **"American Women", collectively, its Person of the Year**, and put **twelve** women on the cover. Wyatt was one of them, alongside Betty Ford, Barbara Jordan and Billie Jean King (*Time*, n.d.). She was **not** "Time's Woman of the Year." The collective award is the whole point of the award, and flattening it into an individual prize erases eleven other people.

She was inducted into the U.S. Department of Labor's Hall of Honor in 2012 (UFCW, n.d.).

**So: what is a contract?** A **collective bargaining agreement** is a written agreement between an employer and a union representing its workers. It is not a mission statement and it is not a list of feelings. It is an enforceable document, and the reason it matters is that it **replaces the boss's discretion with a written rule**, on pay, on hours, on discipline, on who gets laid off first, and on what happens when somebody thinks a rule was broken.

Everything else in this course is about how those clauses get into the document, and what happens to the people who put them there.

:::reveal Addie Wyatt's job at Armour was saved by something very specific. What was it, and why is that different from her employer simply deciding to be fair? ||| A **seniority clause** in the UPWA's contract, which set layoff and replacement order by length of service rather than by the employer's preference. It is different because it did not depend on the employer's goodwill at all, it was an enforceable written rule that took the decision out of the company's hands.

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
          prompt: "Which union did Addie Wyatt become the first woman International Vice President of in 1976, and why is it wrong to call it the UFCW?",
          answer:
            "The Amalgamated Meat Cutters and Butcher Workmen. The UFCW did not exist until 1979, when the Meat Cutters merged with the Retail Clerks.",
        },
      ],
      body: `To understand what a contract *changes*, you have to know what the default is. The default is harsher than most people realize.

**The default is at-will employment.** In the United States, the background rule in nearly every state is that "an employer and employee agree there is no set period of employment" (Legal Information Institute [LII], n.d.-a). In practice that means an employer can fire you **for a good reason, a bad reason, or no reason at all**, and you can quit the same way. Your boss does not owe you an explanation, a warning, a hearing, or a second chance.

That is the water you are swimming in. It is not a loophole; it is the rule.

**At-will is not unlimited.** Courts and legislatures have carved out exceptions, and the LII lists three that most states recognize in some form (LII, n.d.-a):

| Exception | What it means |
| --- | --- |
| **Public policy** | An employer cannot fire you for a reason that violates well-established public policy of the state, for example, for refusing to break the law. |
| **Implied contract** | An employer's own conduct or documents (a handbook, a promise) can create a reasonable expectation of continued employment. |
| **Implied covenant of good faith and fair dealing** | In some states (California is the usual example), an employer cannot fire in bad faith. |

Separately, **federal law forbids firing you for specific protected reasons**, because of your race, sex, religion, national origin, age or disability; because you filed a safety complaint; and, as the next section covers in detail, because you organized with your coworkers.

**One state is genuinely different, and you should know which.** **Montana** is the one state that abandoned at-will employment by statute. Under the **Wrongful Discharge from Employment Act**, once an employee has completed a probationary period, a discharge is wrongful if, among other things, "it was not for good cause" (Mont. Code Ann. § 39-2-904). Everywhere else, "good cause" is not something the law gives you by default.

**Which is exactly what a contract does.** A collective bargaining agreement is how a group of workers *buys* the protections that at-will employment does not give them. Look at what the J.P. Stevens textile workers finally won in their 1980 settlement, after a six-year fight you will read about in Section 4, it is a good inventory of what a contract actually contains (Fink, 2014):

| Clause | What it replaces |
| --- | --- |
| **Just cause / discipline** | "Fired for any reason or no reason" → the employer must have a reason, and must be able to defend it. |
| **Seniority** | The boss's preference → length of service. (Wyatt's clause.) |
| **Grievance procedure with binding arbitration** | "Take it up with your manager" → a defined process ending in front of a **neutral third party**, not the company. |
| **Wages and a pay scale** | "Whatever you individually negotiated" → a published rate everyone can see. |
| **Dues check-off** | A union that has to collect dues by hand → a stable organization that can survive between fights. |

Notice which one is doing the heaviest lifting. It is not the money. It is the **grievance-and-arbitration clause**, because it is the only one that gives you somewhere to *go* when the employer breaks the others. A right with no procedure attached is a wish.

**And notice the honest limit.** All of this is about *union* contracts. Most American workers do not have one. If you are working a shift job right now, you are almost certainly at-will, which is precisely why the next section matters, because the National Labor Relations Act protects you **whether or not you have a union or ever want one**.

:::reveal Your manager fires you because she does not like your attitude. You have no union and no written contract. Has she broken the law? ||| Probably not. Under at-will employment, the default rule in nearly every state, an employer may fire you for a good reason, a bad reason, or no reason at all. It becomes unlawful only if the *real* reason falls into a protected category (race, sex, religion, age, disability, a safety complaint, or organizing with coworkers), or if a state exception like public policy or an implied contract applies. Montana is the one state that requires "good cause" by statute after a probationary period.

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
            "The grievance procedure ending in binding arbitration, because it is the clause that gives you somewhere to go, in front of a neutral third party, when the employer breaks one of the others.",
        },
      ],
      body: `Reading a contract is a skill, and like most skills it is mostly knowing what to look for. Here is the drill.

**If you have a contract, an offer letter, or an employee handbook**, get it out now, a real one, yours. If you do not have one, use a friend's, a parent's, or a publicly posted union contract (many locals publish theirs, and both the SAG-AFTRA and WGA agreements you will meet in Section 6 are public documents).

**The five things to find, in this order:**

1. **Does it say how you can be fired?** Search for the words *cause*, *just cause*, *termination*, *discipline*, *at-will*. If it says "at-will" anywhere, that is the most important sentence in the document, and Lesson 2 told you what it means.
2. **Does it say what happens if you disagree?** Search for *grievance*, *dispute*, *arbitration*. If there is no procedure, there is no remedy short of a lawsuit.
3. **Does it say how your hours and pay are set?** Search for *schedule*, *overtime*, *rate*, *classification*.
4. **Does it say what happens when work is cut?** Search for *seniority*, *layoff*, *recall*. That is Wyatt's clause.
5. **Does it say anything about your image, voice, name, or work product?** Search for *likeness*, *name and likeness*, *digital*, *AI*, *artificial intelligence*, *work made for hire*, *assignment*. Section 6 is entirely about this, and it is the clause most likely to be in *your* contract and not in your parents'.

**A note on the words.** Contract language is not written to be beautiful; it is written to be enforceable. "Shall" means it is required. "May" means it is optional. "Sole discretion" means the other party decides and you have no say. "Reasonable" means a neutral third party gets to decide what that meant. When you see **"sole discretion,"** slow down, you have just read a sentence that gives something away.

Fill in each blank below, then check. Spelling and capitalization are forgiving.

**This course explains general legal principles. It is not legal advice.** If you are facing an actual situation, a lawyer, a legal-aid organization, your union, or the relevant government agency can advise you on your state's law and your particular facts.`,
      exercise: {
        instructions: "Fill in each blank, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt: "The clause that set the order of layoffs by length of service, the one that saved Addie Wyatt's job, is a ___ clause.",
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
              "The UPWA used its seniority clause to protect her job (Kelly, 2022). No federal employment anti-discrimination statute existed in 1941, that is part of why the clause mattered so much.",
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
              "It was the Amalgamated Meat Cutters. The UFCW did not exist until 1979, when the Meat Cutters merged with the Retail Clerks, she became the UFCW's first Black woman international VP after that merger. Sources routinely collapse these two facts into one wrong sentence.",
            sourceLessonSlug: "kyraw-the-contract-was-the-protection",
          },
          {
            prompt: "What did Time magazine actually do in 1975?",
            options: [
              "Named \"American Women\" collectively its Person of the Year, with twelve women, including Wyatt, on the cover",
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
              "Length of service, by itself, creates no at-will exception. Seniority protects you only if a *contract* says it does, which is exactly the point of Lesson 1.",
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
            explanation: "\"Sole discretion\" is the phrase to slow down on, you have just read a sentence that gives something away.",
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
              "It is enforceable, and its function is to replace the employer's discretion with written rules, on pay, hours, discipline, layoffs, and what happens when someone says a rule was broken.",
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
      section: "Section 2 · Protected concerted activity, and who the law leaves out",
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
      body: `Most of Section 1 was about people who had a contract. Now the part that applies to **you**, right now, in the job you may already have, with no union, no contract, and no plans to get either.

In 1935 Congress passed the **National Labor Relations Act (NLRA)**, sometimes called the Wagner Act. Its **Section 7** is one sentence, and it is worth reading slowly, because it is short and it is doing a great deal of work:

> "Employees shall have the right to self-organization, to form, join, or assist labor organizations, to bargain collectively through representatives of their own choosing, **and to engage in other concerted activities for the purpose of collective bargaining or other mutual aid or protection**, and shall also have the right to refrain from any or all of such activities..." (29 U.S.C. § 157)

Read the bolded part again. That is the sleeper clause of American labor law, and it is the reason this lesson exists. **Section 7 does not only protect union members. It protects employees who act together, whether or not a union exists, is wanted, or is ever mentioned.**

This has a name: **protected concerted activity**. Break the phrase in half.

**"Concerted"** means *with or on behalf of other employees*, not just you, alone, about you, alone. Two coworkers agreeing to ask for a schedule change together is concerted. One employee grumbling about their own raise, alone, generally is not.

**"For mutual aid or protection"** means it has to be about **the terms and conditions of your work**, pay, hours, safety, scheduling, workload, treatment by a supervisor. Not about the price of the sandwiches, not about politics generally.

**The Supreme Court case that makes this concrete is worth knowing by heart.** In **NLRB v. Washington Aluminum Co., 370 U.S. 9 (1962)**, seven machinists in a Baltimore machine shop came in on a January morning to find the furnace had broken overnight and the shop was freezing, it was 22 degrees outside. They talked it over, and they walked out. The company fired all seven.

Two facts make this case the one to remember:

1. **They had no union.** They were, in the Court's words, completely unorganized, with no bargaining representative of any kind.
2. **They never made a demand.** They didn't ask for anything first. They just left.

The Supreme Court held they were protected anyway, and that firing them violated the Act. The Court said it "cannot agree that employees necessarily lose their right to engage in concerted activities under § 7 merely because they do not present a specific demand upon their employer to remedy a condition they find objectionable" (*NLRB v. Washington Aluminum Co.*, 1962).

**So, in plain terms, Section 7 protects you when you and at least one coworker:**

- talk to each other about your pay, hours, schedules or working conditions (including on social media, and including where the employer has told you not to);
- go together to a manager to raise a problem about the work;
- sign a group letter or petition about a working condition;
- refuse together to work in conditions you believe are unsafe.

**And a limit, honestly stated:** Section 7 is not a shield for everything you might do at work. Activity can lose protection if it is, for example, egregiously disloyal, violent, or a deliberate breach of a contract's no-strike clause. And, critically, it must be *concerted*. Acting entirely alone, about only yourself, usually is not covered.

**One distinction the sibling course sets up.** *The Bill of Rights: Know Your Rights* teaches that the 1st Amendment restrains **government**, not private employers, your boss at a private company is not bound by the free speech clause. Section 7 is where a private-sector worker's protection actually comes from. **Different source, different scope, and confusing the two is the most common mistake people make about their rights at work.**

:::reveal Three coworkers with no union walk off a shift together because the walk-in freezer has been broken for a week and the kitchen is unbearable. They never asked the manager to fix it first. Are they protected? ||| Generally yes. This is the fact pattern of *NLRB v. Washington Aluminum* (1962): they acted **together** (concerted), about a **working condition** (mutual aid or protection), and the Supreme Court held that employees do not lose § 7 protection merely because they made no specific demand first. Having no union does not matter, § 7 protects concerted activity whether or not a union is involved.

## Sources
- National Labor Relations Act § 7, 29 U.S.C. § 157. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/29/157
- NLRB v. Washington Aluminum Co., 370 U.S. 9 (1962). Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/supremecourt/text/370/9`,
    },
    {
      slug: "kyraw-who-the-nlra-leaves-out",
      title: "6 · The exclusions: who Section 7 does not cover, and why it matters",
      section: "Section 2 · Protected concerted activity, and who the law leaves out",
      recallContent: [
        {
          prompt: "What are the two halves of \"protected concerted activity\"?",
          answer:
            "\"Concerted\", acting with or on behalf of other employees, not alone about yourself only. And \"for mutual aid or protection\", about the terms and conditions of work: pay, hours, safety, scheduling, treatment.",
        },
        {
          prompt: "Do you need a union for Section 7 to protect you?",
          answer:
            "No. Section 7 protects employees who act together whether or not a union exists, is wanted, or is ever mentioned. NLRB v. Washington Aluminum (1962) involved seven completely unorganized workers.",
        },
      ],
      body: `Here is the part of American labor law that nobody puts on a poster.

Section 7 gives rights to "**employees**." So everything depends on who counts as an employee, and the Act answers that in **Section 2(3)**, which is mostly a list of people who **do not**:

> "The term 'employee' shall include any employee... **but shall not include** any individual employed as an **agricultural laborer**, or in the **domestic service** of any family or person at his home, or any individual employed by his **parent or spouse**, or any individual having the status of an **independent contractor**, or any individual employed as a **supervisor**, or any individual employed by an employer subject to the **Railway Labor Act**..." (29 U.S.C. § 152(3))

Read that list again and notice who is on it. This is not a technicality. **It is a map of who got left out of the deal in 1935, and the consequences are still running.**

| Excluded | What that means in practice |
| --- | --- |
| **Agricultural laborers** | Farm workers have **no federal right** to organize under the NLRA. This is why Section 3 of this course exists, Dolores Huerta's entire fight had to happen *outside* this statute. |
| **Domestic workers** | Housekeepers, nannies and home care workers in a private home are excluded. |
| **Independent contractors** | If you are (genuinely) a contractor, not an employee, § 7 does not cover you. Note that what matters is the **actual working relationship**, not what the company calls you on paper, but the exclusion is real, and it is why the "are you a contractor or an employee?" fight is so bitter. Freelancers: this is your line. |
| **Supervisors** | See below. |
| **Employees under the Railway Labor Act** | Railroad and airline workers, including **flight attendants**. They have organizing rights, but under a *different statute* with very different rules. Section 5 of this course is entirely about what that does to leverage. |

Public-sector workers are also outside the NLRA; government employees' rights come from other federal and state laws that vary enormously.

**"Supervisor" is a bigger trapdoor than it sounds.** The Act defines it in **Section 2(11)**:

> "The term 'supervisor' means any individual having authority, in the interest of the employer, to **hire, transfer, suspend, lay off, recall, promote, discharge, assign, reward, or discipline** other employees, or responsibly to direct them, or to adjust their grievances, or effectively to recommend such action, if in connection with the foregoing the exercise of such authority is **not of a merely routine or clerical nature, but requires the use of independent judgment**." (29 U.S.C. § 152(11))

Notice what this does *not* say. It does not say "manager." It does not depend on your title, your salary, or whether you have an office. It depends on **authority and independent judgment**. A shift lead at a coffee shop who genuinely has authority to discipline or effectively recommend firing may be a supervisor, and therefore outside § 7, while carrying a name badge identical to everyone else's. Conversely, a "manager" whose authority is purely routine may still be a covered employee.

**Why this section is the honest one.** It would be easy to teach a course that says "you have rights at work!" and stop. But the single most useful thing a worker can know is **whether the law is actually pointed at them**, because the entire rest of the analysis, retaliation, charges, remedies, depends on it. A farm worker, a nanny, a freelance camera operator and a flight attendant all have very different answers, and none of their answers is the one in the poster.

The next four sections are, in order: what people did when the law **didn't** cover them (Huerta), what happens when it covers you and the employer breaks it anyway (Sutton), how you find leverage under a statute designed to **stop** you striking (Nelson), and what happens when the job itself changes shape (Drescher and Stiehm).

:::reveal Your friend works on a farm picking strawberries. Another friend is a flight attendant. A third is a freelance video editor invoicing as a contractor. Which of them is protected by NLRA Section 7? ||| **None of them, as such.** Agricultural laborers, independent contractors, and workers for employers covered by the Railway Labor Act (which includes airlines) are all expressly excluded from the definition of "employee" in § 2(3). Flight attendants do have organizing rights, but under the Railway Labor Act, a different statute with different rules. The farm worker's rights depend entirely on state law, if any.

## Sources
- National Labor Relations Act § 2(3) and § 2(11), 29 U.S.C. § 152. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/29/152
- National Labor Relations Act § 7, 29 U.S.C. § 157. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/29/157`,
    },
    {
      slug: "kyraw-quiz-coverage",
      title: "7 · Quiz: protected concerted activity, and who is covered",
      section: "Section 2 · Protected concerted activity, and who the law leaves out",
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
              "NLRA § 7, codified at 29 U.S.C. § 157. The 1st Amendment restrains government, not a private employer, a distinction the sibling Bill of Rights course develops.",
            sourceLessonSlug: "kyraw-section-7-protected-concerted-activity",
          },
          {
            prompt: "Do you need to be in a union for Section 7 to protect you?",
            options: [
              "No, § 7 protects concerted activity whether or not a union is involved",
              "Yes, § 7 only protects union members",
              "Yes, but only if a union election has been filed",
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
              "No, the Court held they do not necessarily lose protection for that reason",
              "Yes, a written demand is always required first",
              "Yes, unless a union files the demand on their behalf",
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
              "No statute, they have no organizing rights",
            ],
            correctIndex: 0,
            explanation:
              "§ 2(3) excludes employees of employers subject to the Railway Labor Act. They do have organizing rights, under a different statute with very different rules about striking, which Section 5 covers.",
            sourceLessonSlug: "kyraw-who-the-nlra-leaves-out",
          },
          {
            prompt: "Under NLRA § 2(11), what makes someone a \"supervisor\", and therefore NOT covered by § 7?",
            options: [
              "Authority to hire, discipline, discharge or effectively recommend such action, using independent judgment",
              "Having the word \"manager\" in their job title",
              "Earning a salary rather than an hourly wage",
              "Having worked at the company for more than five years",
            ],
            correctIndex: 0,
            explanation:
              "The test is authority plus independent judgment, not title, not pay type. A shift lead with real disciplinary authority may be a supervisor; a \"manager\" whose authority is merely routine may not be.",
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
              "The 1st Amendment restrains government, not a private employer, your workplace protection comes from statutes like the NLRA instead",
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
              "No, domestic service in a private home is excluded from § 2(3)",
              "Yes, all private-sector workers are covered",
              "Yes, but only if there are more than five employees",
              "Only if she is paid hourly",
            ],
            correctIndex: 0,
            explanation:
              "Domestic workers in a private home are one of the § 2(3) exclusions, one of several groups written out of the deal in 1935.",
            sourceLessonSlug: "kyraw-who-the-nlra-leaves-out",
          },
          {
            prompt: "A company classifies its delivery drivers as independent contractors. What does that do to their § 7 rights, and what is the catch?",
            options: [
              "Genuine independent contractors are excluded from § 7, but what matters is the actual working relationship, not the label the company uses",
              "The label the company uses is legally decisive",
              "Contractors have the same § 7 rights as employees",
              "Contractors are covered by the Railway Labor Act instead",
            ],
            correctIndex: 0,
            explanation:
              "The exclusion is real, which is why misclassification fights are so bitter, but a company cannot make the exclusion apply simply by writing \"contractor\" on the paperwork.",
            sourceLessonSlug: "kyraw-who-the-nlra-leaves-out",
          },
          {
            prompt: "Why does the course say knowing the EXCLUSIONS is more useful than knowing the rights?",
            options: [
              "Because whether the law is pointed at you determines everything that follows, retaliation, charges, and remedies all depend on being a covered \"employee\"",
              "Because the exclusions are easier to memorize",
              "Because most workers are excluded",
              "Because the rights are rarely enforced",
            ],
            correctIndex: 0,
            explanation:
              "A farm worker, a nanny, a freelancer and a flight attendant all get different answers to \"what are my rights at work?\", and none of them is the answer on the poster.",
            sourceLessonSlug: "kyraw-who-the-nlra-leaves-out",
          },
        ],
      },
    },
    // ─────────── SECTION 3 · BUILDING POWER OUTSIDE THE ROOM (DOLORES HUERTA) ───────────
    {
      slug: "kyraw-building-power-outside-the-room",
      title: "8 · Dolores Huerta: how you build power outside the room",
      section: "Section 3 · Building power when the law does not cover you",
      recallContent: [
        {
          prompt: "Which group excluded from NLRA § 2(3) is the reason this section exists?",
          answer:
            "Agricultural laborers. Farm workers have no federal right to organize under the NLRA, so the farm worker movement had to build power outside the statute entirely.",
        },
        {
          prompt: "Under NLRA § 2(11), what makes someone a \"supervisor\" and therefore outside § 7?",
          answer:
            "Authority to hire, discipline, discharge, assign or effectively recommend such action, exercised with independent judgment, not the job title, and not whether they are salaried.",
        },
      ],
      body: `Section 2 ended on a hard fact: **agricultural laborers are written out of the National Labor Relations Act** (29 U.S.C. § 152(3)). No federal right to organize. No federal election. No federal agency to complain to.

So what do you do when the law is not merely against you, it simply *does not see you*?

**Dolores Clara Fernández Huerta** was born in Dawson, New Mexico, on **April 10, 1930** (National Archives [NARA], 2023). She trained as a teacher, and quit, because, as she put it, she could do more by organizing farm workers than by trying to teach their hungry children (NARA, 2023). She met **César Chávez** at the Community Service Organization, and in **1962** the two of them founded the **National Farm Workers Association (NFWA)**, which became the **United Farm Workers (UFW)** (NARA, 2023; Dolores Huerta Foundation [DHF], n.d.).

She was **the UFW's chief contract negotiator**, the person actually at the table, across four decades, at a time when neither Latinos nor women were in those rooms at all.

**Here is her method, and it is the transferable part.** She could not file for an election, so she built power everywhere the law wasn't:

**1. Legislate what you cannot bargain for.** Before the union was even a union, Huerta was lobbying in Sacramento. Working with allies in the legislature in the early 1960s, she helped win **disability insurance and public assistance for California farm workers regardless of citizenship** (DHF, n.d.). If you cannot win a benefit at the bargaining table, win it in the statute book, and the employer has to obey it anyway.

**2. Organize house to house.** The UFW was built through **house meetings**, one worker's kitchen, a handful of neighbours, a conversation. This is slow, and it is the only thing that works. An organization built out of relationships survives a lost strike. An organization built out of a mailing list does not.

**3. Strike, and know that the strike alone may not be enough.** On **September 8, 1965**, over 800 Filipino farm workers of the **Agricultural Workers Organizing Committee (AWOC)**, led by **Larry Itliong** and Ben Gines, walked out of ten grape vineyards around Delano, California (National Park Service [NPS], n.d.). *The Filipino workers struck first.* This is routinely left out of the story, and leaving it out is a small dishonesty that has become a large one. On **September 16, 1965**, Mexican Independence Day, the NFWA membership voted overwhelmingly to join them (NPS, n.d.).

**4. When the employer can outlast you, go around the employer to the customer.** The growers could wait out a strike; farm work is seasonal and strikers get hungry. So the union went to the *buyers*. In December 1965 the NFWA launched a **boycott** of Schenley Industries, the second-largest grower in Delano; by April 1966 Schenley's sales had dropped significantly, and the company signed an agreement (NPS, n.d.). That tactic scaled into the **national grape boycott**, millions of Americans simply not buying grapes. **The boycott is the purest illustration of this whole course's argument: leverage is not something you are given, it is a seam you find.**

The strike lasted five years. **Huerta was the lead negotiator on the final contracts** (NARA, 2023).

**5. Then turn the win into a law, so the next group does not have to do it all again.** In **1975**, California enacted the **Agricultural Labor Relations Act**, "becoming the first state to extend collective bargaining rights to agricultural workers" (Agricultural Labor Relations Board [ALRB], n.d.). Huerta was instrumental in it (DHF, n.d.). The federal exclusion still stands, but in one state, farm workers finally had a board, an election, and an unfair-labor-practice process.

**6. And a phrase.** In **1972**, when Arizona's governor moved to push legislation criminalizing UFW organizing and boycotts, Huerta answered with three words that became the movement's rallying cry: **"Sí, se puede"** (NARA, 2023). **It is hers.** It is very commonly credited to Chávez, and that is simply wrong, the UFW's own history corrects it.

She received the **Presidential Medal of Freedom in 2012** (DHF, n.d.).

**The lesson, stated plainly:** Wyatt teaches you what a contract is. Huerta teaches you **how you get one when you have nothing**, no statute, no election, no agency, no leverage. You build it: in the legislature, in the kitchen, on the picket line, and in the grocery store two thousand miles away. You build power *outside* the room so that you have something to say *inside* it.

The next lesson is about what else was happening inside that movement, because the public record changed in 2026, and a course that stopped here would be lying to you by omission.

:::reveal The growers could outlast a strike, because farm work is seasonal and strikers get hungry. What did the farm workers do instead, and why is it the best illustration of "leverage" in this course? ||| They went around the employer to the employer's **customers**, a boycott, first of Schenley Industries in 1965-66 and then the national table-grape boycott. It is the best illustration because the workers had no legal power and no economic power *at the worksite*, so they found the one place where their opponent WAS vulnerable: sales. Leverage is not given to you; it is a seam you find.

## Sources
- Agricultural Labor Relations Board. (n.d.). *Who we are*. State of California. https://www.alrb.ca.gov/about-us/who-we-are/
- Dolores Huerta Foundation. (n.d.). *Dolores Huerta*. https://doloreshuerta.org/dolores-huerta/
- National Archives and Records Administration. (2023, October 11). *Dolores Huerta: "Sí, se puede!"* Pieces of History. https://prologue.blogs.archives.gov/2023/10/11/dolores-huerta-si-se-puede/
- National Park Service. (n.d.). *Workers united: The Delano grape strike and boycott*. https://www.nps.gov/articles/000/workers-united-the-delano-grape-strike-and-boycott.htm
- National Labor Relations Act § 2(3), 29 U.S.C. § 152(3). Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/29/152`,
    },
    {
      slug: "kyraw-a-movement-is-not-a-saint",
      title: "9 · A movement is not a saint: the record, as it stands in 2026",
      section: "Section 3 · Building power when the law does not cover you",
      recallContent: [
        {
          prompt: "Who struck first at Delano in September 1965, and why does the course insist on saying so?",
          answer:
            "Filipino farm workers of the AWOC, led by Larry Itliong and Ben Gines, on September 8, 1965. The NFWA voted to join on September 16. Leaving the Filipino workers out is a small dishonesty that has become a large one.",
        },
        {
          prompt: "Who coined \"Sí, se puede,\" and in what circumstances?",
          answer:
            "Dolores Huerta, in 1972, when Arizona's governor moved to push legislation criminalizing UFW organizing and boycotts. It is very commonly miscredited to César Chávez.",
        },
      ],
      body: `The last lesson told you how the farm worker movement was built. This one tells you what else was true inside it. **Both lessons are part of the same course, and neither cancels the other.**

**What happened, and when.**

On **March 18, 2026**, *The New York Times* published an investigation into **César Chávez**, reported by Manny Fernandez and Sarah Hurtes over nearly five years. As the Associated Press and NPR reported, the *Times* interviewed **more than 60 people** and reviewed **hundreds of pages of union records**. The investigation reported that Chávez sexually abused women and girls within the farm worker movement over a period of decades, including two women who said the abuse began when they were **12 and 13 years old** (Figueroa, 2026; NPR, 2026).

**The same day, Dolores Huerta came forward.** In a statement, Huerta, then 95, the union's co-founder and the woman you just spent a lesson reading about, said that Chávez sexually abused her in the 1960s. She described two encounters: one in which she was manipulated and pressured, and one in which, in her words, she was **"forced against my will."** Both, she said, resulted in pregnancies. She said she had stayed silent for six decades because she feared damaging the farm worker movement, which was her life's work (Figueroa, 2026).

She also said: **"Cesar's actions do not reflect the values of our community and our movement."** (Figueroa, 2026)

**What followed.** The **United Farm Workers** and the **UFW Foundation** cancelled all César Chávez Day activities, and the union and the Cesar Chavez Foundation said they would set up a confidential channel for people who wanted to report harm, and a process for accountability measures (NPR, 2026). On **March 26, 2026**, eight days after the story broke, the California Legislature voted unanimously in the Senate, 37-0, to **rename the state's March 31 holiday from César Chávez Day to Farmworkers Day**, and Governor Newsom signed it into law immediately (CalMatters, 2026; PBS News, 2026).

**What this course will not do.**

It will not adjudicate. It is not the job of a high school course to decide what a court has not, and no court has. It will not speculate about anyone's motives. It will not invent a quotation, or repeat one it cannot source. Where it has told you something, it has told you **who reported it and on what date**, so that you can go and check, and so that you can update it when the record does, because a record from four months ago is a record that is still moving.

**What this course will do is refuse to tell you a simpler story than the true one.**

Because here is the thing about the version of this story you would have been told two years ago. It was a story about a heroic partnership: two people who built a union from nothing. And that story was **true**. The house meetings happened. The boycott worked. The 1975 Act is real law and it still protects people. Huerta really was at the table for forty years and really did coin the phrase.

**And it was not the whole truth.** The same organization that won those contracts was, according to its own co-founder, a place where she was assaulted and then stayed silent for sixty years *because speaking would have damaged the work*. Read that sentence again, because it is the most important sentence in this course:

**She stayed silent to protect the movement, and the movement was the thing that had harmed her.**

**Why this belongs in a course about your rights at work.**

It would be easy to file this under "history," or under "sad news about a famous man," and move on. Do not. There is a straight line from this to the job you have right now:

- **The powerful person who is on your side of the fight is still a powerful person.** A union, a boss, a coach, a mentor, a movement you believe in, none of these is a guarantee of safety, and *believing in the cause is exactly the pressure that keeps people quiet.* Huerta named that pressure precisely: she was protecting the work.
- **This is why procedure matters more than personality.** Section 1 taught you that a grievance procedure ending before a **neutral third party** is what gives every other clause its teeth. That is not a boring administrative detail. It is the *entire* answer to "what do I do when the person who wronged me is the person everybody admires?" A process you can use without the permission of the powerful is the only kind worth having, and it has to exist *inside* the organization, not just against the employer.
- **An institution that cannot be criticized cannot be trusted.** The instinct to protect a good movement from a true story is the instinct that lets harm continue inside it. The UFW's response, cancelling the celebrations, opening a reporting channel, is what taking that seriously looks like at the start. Whether it works is a question for the record, later.

**A movement is not a saint.** The person who built the power can also be harmed inside it. **Both are true, and neither one cancels the other.** You are allowed, you are *required*, to hold both.

:::reveal Dolores Huerta said she stayed silent for six decades. What reason did she give, and why does this course call that the most important thing in it? ||| She said she feared that speaking would damage the farm worker movement, building it and securing farm worker rights had been her life's work. It is the most important thing in the course because it names the exact pressure that keeps people silent inside organizations they believe in: *she stayed quiet to protect the movement, and the movement was the thing that had harmed her.* It is also why a grievance process that works **without the permission of the powerful** matters more than any individual's good character.

## Sources
- CalMatters. (2026, March). *César Chávez Day renamed to Farmworkers Day in California*. https://calmatters.org/politics/2026/03/cesar-chavez-day-renamed/
- Figueroa, F. (2026, March 18). *Labor rights leader Dolores Huerta says she was sexually abused by César Chávez* [Associated Press]. PBS News. https://www.pbs.org/newshour/nation/labor-rights-leader-dolores-huerta-says-she-was-sexually-abused-by-cesar-chavez
- NPR. (2026, March 18). *Cesar Chavez abused and raped women and girls, NYT investigation says*. https://www.npr.org/2026/03/18/nx-s1-5752253/cesar-chavez-sexual-assault-dolores-huerta-united-farm-workers
- PBS News. (2026, March). *California lawmakers pass bill renaming César Chávez Day after sexual abuse allegations*. https://www.pbs.org/newshour/politics/california-lawmakers-pass-bill-renaming-cesar-chavez-day-after-sexual-abuse-allegations`,
    },
    {
      slug: "kyraw-quiz-power",
      title: "10 · Quiz: building power when the law does not cover you",
      section: "Section 3 · Building power when the law does not cover you",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Why could farm workers not simply file for an NLRB election in the 1960s?",
            options: [
              "Agricultural laborers are excluded from the NLRA's definition of \"employee\"",
              "The NLRB only operated east of the Mississippi",
              "They had not yet formed a union",
              "Their employers were too small to be covered",
            ],
            correctIndex: 0,
            explanation:
              "29 U.S.C. § 152(3) excludes agricultural laborers. No federal right to organize, no federal election, no federal agency, which is why the entire movement had to be built outside the statute.",
            sourceLessonSlug: "kyraw-building-power-outside-the-room",
          },
          {
            prompt: "Who began the Delano grape strike on September 8, 1965?",
            options: [
              "Filipino farm workers of the AWOC, led by Larry Itliong and Ben Gines",
              "The National Farm Workers Association, led by César Chávez",
              "The Teamsters",
              "The United Farm Workers, led by Dolores Huerta",
            ],
            correctIndex: 0,
            explanation:
              "Over 800 Filipino farm workers of the AWOC struck ten vineyards first. The NFWA voted to join on September 16. Leaving the Filipino workers out of this story is a common and consequential erasure.",
            sourceLessonSlug: "kyraw-building-power-outside-the-room",
          },
          {
            prompt: "The growers could outlast a strike. What did the farm workers do instead, and why did it work?",
            options: [
              "Launched a consumer boycott, going around the employer to the employer's customers, the one place the growers were vulnerable",
              "Filed unfair labor practice charges with the NLRB",
              "Sued the growers in federal court",
              "Petitioned Congress to amend the NLRA",
            ],
            correctIndex: 0,
            explanation:
              "The Schenley boycott (1965-66) and then the national grape boycott. This is the course's clearest illustration that leverage is a seam you find, not a thing you are given.",
            sourceLessonSlug: "kyraw-building-power-outside-the-room",
          },
          {
            prompt: "Who coined the phrase \"Sí, se puede\"?",
            options: ["Dolores Huerta", "César Chávez", "Larry Itliong", "Philip Vera Cruz"],
            correctIndex: 0,
            explanation:
              "Huerta, in 1972, when Arizona's governor moved against UFW organizing and boycotts. It is very commonly miscredited to Chávez, the UFW's own history corrects this.",
            sourceLessonSlug: "kyraw-building-power-outside-the-room",
          },
          {
            prompt: "What did California's Agricultural Labor Relations Act of 1975 do?",
            options: [
              "Made California the first state to extend collective bargaining rights to agricultural workers",
              "Amended the NLRA to cover farm workers nationwide",
              "Banned consumer boycotts of agricultural products",
              "Created the National Labor Relations Board",
            ],
            correctIndex: 0,
            explanation:
              "The ALRB's own words. Note what it did NOT do: the federal exclusion in § 2(3) still stands. A farm worker in most states still has no organizing statute.",
            sourceLessonSlug: "kyraw-building-power-outside-the-room",
          },
          {
            prompt: "\"Legislate what you cannot bargain for.\" What does this step in Huerta's method mean?",
            options: [
              "If you cannot win a benefit at the bargaining table, win it in the statute book, then the employer must obey it anyway",
              "Only elected officials can improve working conditions",
              "Unions should not negotiate contracts",
              "Boycotts should be made illegal",
            ],
            correctIndex: 0,
            explanation:
              "Huerta helped win disability insurance and public assistance for California farm workers regardless of citizenship, before the union had any bargaining power at all.",
            sourceLessonSlug: "kyraw-building-power-outside-the-room",
          },
          {
            prompt: "Why does the course say house meetings, one kitchen, a few neighbours, are worth the slowness?",
            options: [
              "An organization built out of relationships survives a lost strike; one built out of a mailing list does not",
              "They are cheaper than advertising",
              "They are legally required before an election",
              "They allow the union to avoid the employer's notice",
            ],
            correctIndex: 0,
            explanation: "This is the least glamorous and most durable part of the method.",
            sourceLessonSlug: "kyraw-building-power-outside-the-room",
          },
          {
            prompt: "On March 18, 2026, what did Dolores Huerta say publicly?",
            options: [
              "That César Chávez sexually abused her in the 1960s, and that she had stayed silent for six decades",
              "That she was retiring from the Dolores Huerta Foundation",
              "That the UFW should disband",
              "That she disputed The New York Times investigation",
            ],
            correctIndex: 0,
            explanation:
              "Her statement came the same day The New York Times published its investigation into Chávez (Figueroa, 2026, AP).",
            sourceLessonSlug: "kyraw-a-movement-is-not-a-saint",
          },
          {
            prompt: "What reason did Huerta give for her long silence?",
            options: [
              "She feared speaking would damage the farm worker movement, which was her life's work",
              "She had signed a non-disclosure agreement",
              "She had been threatened with a lawsuit",
              "She did not remember the events until recently",
            ],
            correctIndex: 0,
            explanation:
              "This is the pressure the lesson asks you to notice: she stayed silent to protect the movement, and the movement was the thing that had harmed her.",
            sourceLessonSlug: "kyraw-a-movement-is-not-a-saint",
          },
          {
            prompt: "What did the California Legislature do on March 26, 2026?",
            options: [
              "Voted to rename the March 31 state holiday from César Chávez Day to Farmworkers Day",
              "Repealed the Agricultural Labor Relations Act",
              "Extended NLRA coverage to farm workers",
              "Opened a criminal investigation",
            ],
            correctIndex: 0,
            explanation:
              "The Senate voted 37-0 and the governor signed it immediately, in time for the March 31 holiday (CalMatters, 2026; PBS News, 2026).",
            sourceLessonSlug: "kyraw-a-movement-is-not-a-saint",
          },
          {
            prompt: "What is the central claim of the lesson \"A movement is not a saint\"?",
            options: [
              "The organizing work was real AND the harm was real, the person who built the power can also be harmed inside it, and neither fact cancels the other",
              "The farm worker movement's achievements were fraudulent",
              "Allegations against historical figures should be left to historians",
              "The 1975 Act should be repealed",
            ],
            correctIndex: 0,
            explanation:
              "The house meetings happened. The boycott worked. The 1975 Act is still law. And the co-founder says she was assaulted and stayed silent for sixty years. You are required to hold both.",
            sourceLessonSlug: "kyraw-a-movement-is-not-a-saint",
          },
          {
            prompt: "What does the course say is the connection between the Huerta/Chávez record and YOUR rights at work?",
            options: [
              "It is why a grievance process you can use WITHOUT the permission of the powerful matters more than anyone's good character",
              "It proves unions are ineffective",
              "It shows you should never trust a coworker",
              "It means historical figures cannot be taught",
            ],
            correctIndex: 0,
            explanation:
              "Believing in the cause is exactly the pressure that keeps people quiet. Procedure beats personality, that is the whole argument for a neutral third party.",
            sourceLessonSlug: "kyraw-a-movement-is-not-a-saint",
          },
          {
            prompt: "The course reports the 2026 allegations with named sources and specific dates. Why does it insist on that, rather than just summarizing?",
            options: [
              "So you can check it yourself, and update it when the record moves, a record from a few months ago is still moving",
              "Because the sources requested attribution",
              "To make the lesson longer",
              "Because the events are disputed and unverifiable",
            ],
            correctIndex: 0,
            explanation:
              "The course adjudicates nothing and speculates nowhere. It tells you who reported what, and when, so the claim is checkable rather than trusted.",
            sourceLessonSlug: "kyraw-a-movement-is-not-a-saint",
          },
          {
            prompt: "Dolores Huerta's formal role in the UFW, across four decades, was:",
            options: [
              "Chief contract negotiator, the person actually at the bargaining table",
              "Press secretary",
              "Treasurer",
              "Legal counsel",
            ],
            correctIndex: 0,
            explanation:
              "She was lead negotiator on the contracts that ended the five-year Delano strike (NARA, 2023), at a time when neither Latinos nor women were in those rooms.",
            sourceLessonSlug: "kyraw-building-power-outside-the-room",
          },
          {
            prompt: "Which of these best describes the relationship between the two lessons in this section?",
            options: [
              "They are both required: the method is genuinely teachable, and the record is genuinely true, and a course that gave you only one would be lying by omission",
              "The second lesson replaces the first",
              "The first lesson is history; the second is opinion",
              "They contradict each other, and the student must choose",
            ],
            correctIndex: 0,
            explanation:
              "That is the design of this section, stated in its own text. Neither fact cancels the other.",
            sourceLessonSlug: "kyraw-a-movement-is-not-a-saint",
          },
        ],
      },
    },
    // ─────────── SECTION 4 · WHAT RETALIATION COSTS (CRYSTAL LEE SUTTON) ───────────
    {
      slug: "kyraw-retaliation-what-the-law-says",
      title: "11 · Retaliation: what the law forbids, and what it actually does about it",
      section: "Section 4 · Retaliation, and what it costs",
      recallContent: [
        {
          prompt: "What was the boycott, in leverage terms?",
          answer:
            "Going around an employer who could outlast a strike, to the employer's customers, the one place the growers were actually vulnerable. Leverage is a seam you find, not a thing you are given.",
        },
        {
          prompt: "What is the central claim of \"A movement is not a saint\"?",
          answer:
            "The organizing work was real and the harm was real. The person who built the power can also be harmed inside it, and neither fact cancels the other.",
        },
      ],
      body: `You now know that Section 7 protects concerted activity. So here is the obvious next question, and it is the question that actually matters: **what happens if your employer fires you for it anyway?**

**What the law forbids.** Section 8(a) of the NLRA lists the employer conduct that is an **unfair labor practice**. Three of them matter to you:

| Provision | The statute's words |
| --- | --- |
| **§ 8(a)(1)** | It is unlawful "to interfere with, restrain, or coerce employees in the exercise of the rights guaranteed in section 157" (29 U.S.C. § 158(a)(1)) |
| **§ 8(a)(3)** | It is unlawful to discriminate "in regard to hire or tenure of employment or any term or condition of employment to encourage or discourage membership in any labor organization" (29 U.S.C. § 158(a)(3)) |
| **§ 8(a)(4)** | It is unlawful "to discharge or otherwise discriminate against an employee because he has filed charges or given testimony" under the Act (29 U.S.C. § 158(a)(4)) |

Read § 8(a)(1) again. It does not say "fire." It says **interfere with, restrain, or coerce**. Retaliation is not only a firing. It is the cut hours. The suddenly-terrible schedule. The write-up for a rule nobody else gets written up for. The transfer to the worst station. The meeting where a manager explains, warmly, that people who make trouble tend not to last. That last one has a name: it is a **threat**, and threatening an employee for protected activity is itself a violation of § 8(a)(1), the employer does not have to actually do anything.

**§ 8(a)(4) is the one people miss.** It makes it separately unlawful to punish you **for filing a charge or testifying**. The law anticipated that the act of complaining would itself invite punishment, and forbade that too.

**What you can actually do about it.**

1. **You file a charge with the National Labor Relations Board.** Not a lawsuit, a **charge**. The regulation is refreshingly plain: "**Any person** may file a charge alleging that any person has engaged in or is engaging in any unfair labor practice" (29 C.F.R. § 102.9). *Any person.* You do not need to be in a union. You do not need a lawyer. It does not cost money. You file with the NLRB **Regional Office** for your area, and the Board's staff investigates.

2. **You have six months. This is the deadline that ends most cases before they start.** Section 10(b) says that "**no complaint shall issue based upon any unfair labor practice occurring more than six months prior to the filing of the charge**" (29 U.S.C. § 160(b)). Six months from the event, not from when you found out it was illegal, not from when you got around to it. **If you take one practical thing from this entire course, take this one: the clock is six months, and it is short.**

3. **If the Board finds a violation, what do you get?** Here the course has to be honest with you, because this is where most people's picture of the law is wrong. Section 10(c) empowers the Board to order the employer "to cease and desist from such unfair labor practice, and to take such affirmative action **including reinstatement of employees with or without back pay**" (29 U.S.C. § 160(c)).

**Read what that remedy is, and notice what it is not.**

- You can get your **job back**.
- You can get **back pay**, the wages you lost.
- What you generally **do not** get is **punitive damages**. There is no pot of money that punishes the employer for what it did to you. The remedy is designed to *make you whole*, to put you roughly back where you were.
- And § 10(c) has a proviso: no reinstatement or back pay "if such individual was suspended or discharged **for cause**." Which is exactly what every employer in this situation says the reason was.

**So the honest summary is this.** The law forbids retaliation. The remedy is your job back and your lost wages, **years later, after a process you have to survive**, and in the meantime you have no income, and the thirty coworkers watching you get walked out have learned a lesson the statute cannot un-teach.

That gap, between what the law says and what it costs the person who tests it, is not a footnote. **It is the subject of the next lesson.**

**Where to check this yourself.** The National Labor Relations Board (nlrb.gov) publishes its own plain-language guidance and the addresses of its Regional Offices; the statute itself is at 29 U.S.C. §§ 151-169. **This course explains general legal principles and is not legal advice.** If something has happened to you, an NLRB Regional Office, a union, or a legal-aid organization can advise you on your facts, and the six-month clock is running while you decide.

:::reveal Your manager cuts your hours in half two days after you and three coworkers signed a letter about scheduling. Nobody was fired. Is that retaliation, and how long do you have to do something about it? ||| Yes, potentially. § 8(a)(1) forbids conduct that "interfere[s] with, restrain[s], or coerce[s]" employees in exercising § 7 rights, it is not limited to firing. Cut hours, punitive scheduling, selective write-ups, and even a *threat* can all violate it. You file a **charge** with an NLRB Regional Office, any person may file, no lawyer and no union needed, at no cost, and under § 10(b) you have **six months** from the event.

## Sources
- National Labor Relations Act § 8(a), 29 U.S.C. § 158(a). Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/29/158
- National Labor Relations Act § 10(b) and § 10(c), 29 U.S.C. § 160. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/29/160
- 29 C.F.R. § 102.9 (Who may file a charge). Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/29/102.9`,
    },
    {
      slug: "kyraw-sutton-the-price",
      title: "12 · Crystal Lee Sutton: the person who pays for the clause",
      section: "Section 4 · Retaliation, and what it costs",
      recallContent: [
        {
          prompt: "How long do you have to file an unfair labor practice charge with the NLRB, and where does that deadline come from?",
          answer:
            "Six months from the event. NLRA § 10(b), 29 U.S.C. § 160(b): no complaint may issue on an unfair labor practice occurring more than six months before the charge was filed.",
        },
        {
          prompt: "If the NLRB finds your employer retaliated against you, what is the remedy, and what is it NOT?",
          answer:
            "Reinstatement and back pay (§ 10(c)), a make-whole remedy. It is NOT punitive damages. There is generally no money that punishes the employer for what it did.",
        },
      ],
      body: `Every course about labor rights is tempted to teach the law and skip the price. **She is the price.**

**Crystal Lee Jordan**, she was Jordan then; Sutton is a later married name, worked at the **J.P. Stevens** textile mill in **Roanoke Rapids, North Carolina**, folding towels for about **$2.65 an hour** (Alamance Community College [ACC], n.d.). *(Not Burlington. Burlington is where she later lived and died, and the mix-up is the single most common error told about her.)*

The **Textile Workers Union of America (TWUA)** was trying to organize the plant. She signed on.

On **May 30, 1973**, she was fired for "insubordination" after copying an anti-union letter off the company bulletin board (Fink, 2014). And on her way out, she did the thing that became a film:

> She "climbed atop a shop floor table and raised a piece of cardboard with 'UNION' scrawled on it" (Fink, 2014).

In her own words, from her archive: she "took a piece of cardboard and wrote the word UNION on it in big letters, got up on my work table, and slowly turned it around" (ACC, n.d.). One by one, the machines went quiet. The police carried her out.

*Norma Rae* (1979) is her story. **Her name is not in it.**

**Now the part the film does not show you.**

**The retaliation was not a one-off. It was the business model.** Between 1963 and 1973, the NLRB found J.P. Stevens "guilty of violating labor laws in **twenty-one of twenty-two cases**." The company "paid **$1.3 million in back wages to nearly three hundred workers illegally discharged for union support**" (Fink, 2014).

Sit with that. **Three hundred people fired for organizing, at one company.** And the remedy was exactly the remedy Lesson 11 described: back pay. Money, later. Which the company evidently regarded as an acceptable operating expense, because it kept doing it. **When the only penalty for breaking a law is paying back what you owed anyway, the law has priced the violation, not prohibited it.**

**They won. It took six more years.**

On **August 28, 1974**, workers at the seven Stevens plants in Roanoke Rapids voted. **3,133 workers cast ballots and the TWUA won by 237 votes** (Fink, 2014). *(The union that won that election was the TWUA. You will very often see it credited to the ACTWU, including in her own archive, but ACTWU did not exist until the 1976 merger. The record drifts; check the dates.)*

And then **nothing happened for six years.** Winning the election did not get them a contract. The company simply would not sign one. "Two years after the euphoria of Roanoke Rapids, the workers still had no contract" (Fink, 2014). The union took the fight national, a boycott, the same weapon Huerta used, and in **October 1980**, seven years after Crystal Lee Jordan was carried out of that mill, J.P. Stevens finally settled: a contract with **automatic dues check-off, binding arbitration of grievances, and compensation for the wage increases the workers lost during the years spent trying to secure a contract** (Fink, 2014).

**Look at that list.** Binding arbitration of grievances. It is Wyatt's contract. It is the clause from Lesson 2. **It took seven years and three hundred fired workers to buy the paragraph that Addie Wyatt's union already had in 1941**, and that is the honest shape of how this works.

**What happened to her.** In **1977** she was awarded back wages and her job was **reinstated by court order**. She went back for **two days**, and left (ACC, n.d.).

**One thing this course will not do, and you should know why.**

You may have heard that there is a landmark court case bearing her name. **There is not.** A search of the published-opinions database returns **no case captioned with her name**, as Jordan or as Sutton. Her firing was found unlawful and her reinstatement and back pay were real, that is well documented, but they came through the NLRB-and-court process that ground J.P. Stevens down over two decades, not through a single famous precedent with her name on the cover.

**The course could have made one up. It is not going to.** A citation you have not read is not a citation; it is a decoration. And if this course is going to tell you to check the law before you rely on it, it has to hold itself to the same rule. **Where the record is thin, the honest thing is to say so.**

**What she actually teaches.** Not "the system works." Something harder and more useful:

- **Retaliation is real, it is illegal, and it happens anyway**, twenty-one times out of twenty-two, at one company, for a decade.
- **The remedy is slow and it is make-whole, not punitive**, which means an employer can decide the fine is worth it.
- **The person who goes first absorbs the cost**, and the cost is not abstract: a job, an income, a town, years.
- **And it still worked.** They won the election. They got the contract. The clauses are real and they protected people for decades afterward. **Both of those things are true at once**, which, by now, you should be recognizing as the shape of this entire course.

:::reveal The NLRB found J.P. Stevens violated labor law in 21 of 22 cases over a decade, and the company paid $1.3 million in back pay to ~300 illegally fired workers, and kept doing it. What does that tell you about the remedy in NLRA § 10(c)? ||| That a make-whole remedy, reinstatement and back pay, with no punitive damages, can function as a **price** rather than a prohibition. If breaking the law costs no more than paying back what you owed anyway, an employer can rationally treat mass illegal firings as an operating expense. That is the gap between what the law says and what it does, and it is why the person who goes first pays for everyone.

## Sources
- Alamance Community College. (n.d.). *About Crystal Lee* [Crystal Lee Sutton Collection]. https://library.alamancecc.edu/sutton/about
- Fink, J. (2014, July 15). In good faith: Working-class women, feminism, and religious support in the struggle to organize J. P. Stevens textile workers in the Southern Piedmont, 1974–1980. *Southern Spaces*. https://southernspaces.org/2014/good-faith-working-class-women-feminism-and-religious-support-struggle-organize-j-p-stevens-textile-workers-southern-piedmont-1974-1980/
- National Labor Relations Act § 10(c), 29 U.S.C. § 160(c). Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/29/160`,
    },
    {
      slug: "kyraw-quiz-retaliation",
      title: "13 · Quiz: retaliation, and what it costs",
      section: "Section 4 · Retaliation, and what it costs",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "How long do you have to file an unfair labor practice charge with the NLRB?",
            options: [
              "Six months from the unfair labor practice",
              "Two years from the unfair labor practice",
              "Thirty days from the unfair labor practice",
              "There is no deadline",
            ],
            correctIndex: 0,
            explanation:
              "NLRA § 10(b), 29 U.S.C. § 160(b). Six months, from the event, not from when you learned it was unlawful. This deadline ends more cases than any argument does.",
            sourceLessonSlug: "kyraw-retaliation-what-the-law-says",
          },
          {
            prompt: "Who may file an unfair labor practice charge with the NLRB?",
            options: [
              "Any person, no union membership, no lawyer, and no fee required",
              "Only a certified union, on a worker's behalf",
              "Only an employee with at least one year of service",
              "Only an attorney admitted to practice before the Board",
            ],
            correctIndex: 0,
            explanation:
              "29 C.F.R. § 102.9: \"Any person may file a charge alleging that any person has engaged in or is engaging in any unfair labor practice.\"",
            sourceLessonSlug: "kyraw-retaliation-what-the-law-says",
          },
          {
            prompt: "If the Board finds your employer retaliated against you, what remedy does NLRA § 10(c) authorize?",
            options: [
              "Cease and desist, and affirmative action including reinstatement with or without back pay",
              "Punitive damages of up to three times lost wages",
              "Criminal prosecution of the manager involved",
              "Automatic union recognition at the workplace",
            ],
            correctIndex: 0,
            explanation:
              "It is a make-whole remedy: your job and your lost wages. There are generally no punitive damages, which is the whole problem the Sutton lesson exposes.",
            sourceLessonSlug: "kyraw-retaliation-what-the-law-says",
          },
          {
            prompt: "Retaliation under § 8(a)(1) is limited to firing someone. True or false?",
            options: [
              "False, the statute forbids conduct that interferes with, restrains, or coerces, which includes cut hours, punitive scheduling, selective discipline, and even threats",
              "True, only a discharge counts",
              "True, unless the employee is in a union",
              "False, but only cut pay counts",
            ],
            correctIndex: 0,
            explanation:
              "\"To interfere with, restrain, or coerce.\" A manager who merely *threatens* an employee for protected activity has already violated § 8(a)(1).",
            sourceLessonSlug: "kyraw-retaliation-what-the-law-says",
          },
          {
            prompt: "What does NLRA § 8(a)(4) separately forbid?",
            options: [
              "Discharging or discriminating against an employee because they filed charges or gave testimony under the Act",
              "Hiring replacement workers during a strike",
              "Closing a plant for economic reasons",
              "Refusing to recognize a union without an election",
            ],
            correctIndex: 0,
            explanation:
              "The law anticipated that complaining would itself invite punishment, and forbade that too. It is the provision people most often miss.",
            sourceLessonSlug: "kyraw-retaliation-what-the-law-says",
          },
          {
            prompt: "Where was the mill where Crystal Lee Sutton worked and was fired?",
            options: [
              "Roanoke Rapids, North Carolina",
              "Burlington, North Carolina",
              "Delano, California",
              "Chicago, Illinois",
            ],
            correctIndex: 0,
            explanation:
              "Roanoke Rapids. Burlington is where she later lived and died, the mix-up is the single most common error told about her.",
            sourceLessonSlug: "kyraw-sutton-the-price",
          },
          {
            prompt: "Which union was organizing the Roanoke Rapids mill in 1973-74, and won the election?",
            options: [
              "The Textile Workers Union of America (TWUA)",
              "The Amalgamated Clothing and Textile Workers Union (ACTWU)",
              "The United Packinghouse Workers of America (UPWA)",
              "The United Farm Workers (UFW)",
            ],
            correctIndex: 0,
            explanation:
              "The TWUA. ACTWU did not exist until the 1976 merger, and is very often credited retroactively, including in Sutton's own archive. Check the dates; records drift.",
            sourceLessonSlug: "kyraw-sutton-the-price",
          },
          {
            prompt: "Between 1963 and 1973, how did the NLRB rule in cases against J.P. Stevens?",
            options: [
              "It found the company guilty of violating labor laws in 21 of 22 cases",
              "It found for the company in most cases",
              "It never heard a case against the company",
              "It found one violation, in 1973",
            ],
            correctIndex: 0,
            explanation:
              "21 of 22. The company paid $1.3 million in back wages to nearly 300 workers illegally discharged for union support, and kept doing it (Fink, 2014).",
            sourceLessonSlug: "kyraw-sutton-the-price",
          },
          {
            prompt: "What is the deeper point of the J.P. Stevens back-pay figure?",
            options: [
              "When the only penalty for breaking a law is paying back what you owed anyway, the law has priced the violation rather than prohibited it",
              "The NLRB is an ineffective agency that should be abolished",
              "Back pay is a generous remedy",
              "Workers should not file charges",
            ],
            correctIndex: 0,
            explanation:
              "A make-whole remedy with no punitive damages can be rationally treated by an employer as an operating expense. That is the gap between what the law says and what it does.",
            sourceLessonSlug: "kyraw-sutton-the-price",
          },
          {
            prompt: "The Roanoke Rapids workers won their NLRB election in August 1974. When did they get a first contract?",
            options: [
              "October 1980, six more years, after a national boycott",
              "Immediately, in September 1974",
              "In 1975, after federal mediation",
              "They never got one",
            ],
            correctIndex: 0,
            explanation:
              "Winning an election does not get you a contract. It took six more years and a national boycott, the same weapon Huerta used, to force J.P. Stevens to sign.",
            sourceLessonSlug: "kyraw-sutton-the-price",
          },
          {
            prompt: "What did the October 1980 J.P. Stevens settlement contain?",
            options: [
              "Dues check-off, binding arbitration of grievances, and compensation for wages lost during the fight for a contract",
              "Punitive damages for every fired worker",
              "A federal consent decree and criminal penalties",
              "Automatic recognition at every Stevens plant nationwide",
            ],
            correctIndex: 0,
            explanation:
              "Binding arbitration of grievances, the clause from Lesson 2. It took seven years and 300 fired workers to buy the paragraph Addie Wyatt's union already had in 1941.",
            sourceLessonSlug: "kyraw-sutton-the-price",
          },
          {
            prompt: "Is there a landmark court case bearing Crystal Lee Sutton's name?",
            options: [
              "No, a published-opinions search returns no case captioned with her name; her reinstatement came through the NLRB-and-court process, not a famous precedent",
              "Yes, Sutton v. J.P. Stevens, decided by the Supreme Court",
              "Yes, Jordan v. J.P. Stevens, decided by the Fourth Circuit",
              "Yes, but it was unpublished",
            ],
            correctIndex: 0,
            explanation:
              "The course says so out loud rather than inventing a citation. A citation you have not read is not a citation; it is a decoration.",
            sourceLessonSlug: "kyraw-sutton-the-price",
          },
          {
            prompt: "What happened after Sutton was reinstated by court order in 1977?",
            options: [
              "She worked two days and left",
              "She stayed at the mill until she retired",
              "She refused reinstatement and took a cash settlement instead",
              "She was immediately fired again",
            ],
            correctIndex: 0,
            explanation:
              "Two days. The remedy restored the job; it could not restore the four years.",
            sourceLessonSlug: "kyraw-sutton-the-price",
          },
          {
            prompt: "Which film tells her story, and what is notable about how it does?",
            options: [
              "Norma Rae (1979), her name is not in it",
              "Norma Rae (1979), she is credited as a co-writer",
              "Silkwood (1983), she is named throughout",
              "Matewan (1987), she appears as herself",
            ],
            correctIndex: 0,
            explanation: "Her story became a famous film and an Oscar. Her name was never used in it.",
            sourceLessonSlug: "kyraw-sutton-the-price",
          },
          {
            prompt: "What are the two things the Sutton lesson insists are true AT ONCE?",
            options: [
              "The person who goes first absorbs a real and heavy cost, AND it still worked: they won the election, got the contract, and the clauses protected people for decades",
              "That the law is useless, and that unions are unnecessary",
              "That retaliation is rare, and that remedies are generous",
              "That the film was accurate, and that her name was used",
            ],
            correctIndex: 0,
            explanation:
              "By Section 4 you should be recognizing this shape. Holding two true things at once is the method this whole course is teaching.",
            sourceLessonSlug: "kyraw-sutton-the-price",
          },
        ],
      },
    },
    // ─────────── SECTION 5 · LEVERAGE (SARA NELSON) ───────────
    {
      slug: "kyraw-find-the-seam",
      title: "14 · Sara Nelson: find the seam",
      section: "Section 5 · Leverage when you hold no obvious cards",
      recallContent: [
        {
          prompt: "What made J.P. Stevens' pattern of illegal firings economically rational for the company?",
          answer:
            "The NLRA's remedy is make-whole, reinstatement and back pay, with no punitive damages. Paying back what you already owed can be cheaper than obeying the law, so the fine becomes a price.",
        },
        {
          prompt: "Under 29 C.F.R. § 102.9, who may file an unfair labor practice charge?",
          answer:
            "Any person. No union membership, no lawyer, and no fee, and under § 10(b) you have six months from the event.",
        },
      ],
      body: `Every previous section has been about people with an obvious grievance and no obvious power. This section is about the question underneath all of them: **where does leverage actually come from?**

**Sara Nelson** became a flight attendant at **United Airlines in 1996**, joining the union the same year. She has served as **International President of the Association of Flight Attendants-CWA since 2014** (Nelson, 2021).

**Start with how weak her position looks on paper.**

Remember the exclusion list from Lesson 6? Flight attendants are on it. Airline employees are excluded from the NLRA because their employer is "subject to the **Railway Labor Act**" (29 U.S.C. § 152(3)). So they organize under the **RLA** instead, and the RLA is not a friendlier statute. It is a statute **designed to stop you striking.**

Here is what a flight attendant has to get through before she can legally walk out (National Mediation Board [NMB], n.d.):

| Step | What it means |
| --- | --- |
| **Section 6 notice** | The union serves notice of intended changes; the **status quo is frozen** (45 U.S.C. § 156). |
| **Direct negotiation** | Bargain. There is no deadline. Airline contracts do not expire, they become "amendable." Negotiations can run for **years**. |
| **Mediation** | The **National Mediation Board** takes the case. The NMB decides when, and whether, it is done. |
| **Proffer of arbitration** | "When the NMB believes that further mediation efforts will not result in an agreement, it issues a proffer of arbitration" (NMB, n.d.). |
| **Release + 30-day cooling-off** | Only if a party *rejects* arbitration does the NMB release the parties into a **30-day cooling-off period**, during which nobody may change the status quo (NMB, n.d.). |
| **Self-help** | Only *then* may the union legally strike (NMB, n.d.), and even then Congress or a Presidential Emergency Board may intervene. |

**Read that table as a worker, not a lawyer.** A flight attendant cannot simply walk out when the freezer breaks. She cannot do what the seven machinists in *Washington Aluminum* did, the case that anchors this entire course does **not** apply to her. She must be *released*, by a federal board, at a time the board chooses. In practice, **97% of NMB mediation cases have been resolved with no interruption to service** (NMB, n.d.). The statute works exactly as designed.

**So: no strike weapon, no NLRA, no leverage. Right?**

**January 2019.** The federal government had been shut down for a month, the longest in U.S. history. Roughly 800,000 federal workers were furloughed or working without pay. Among them: **air traffic controllers** and **TSA officers**. Not Nelson's members. Not her union. Not her fight, on any org chart.

On **January 20, 2019**, accepting the AFL-CIO's **Martin Luther King Jr. Drum Major for Justice Award**, Nelson stood up and called on the labor movement to **discuss conducting a general strike** to end the shutdown.

**Now look at what she had actually noticed.** She did not argue that the shutdown was unfair, though it was. She did not appeal to anyone's decency. **She pointed at a seam.**

The seam was this: *the safety of the aviation system was degrading, and aviation is the one system in America whose interruption is instantly, nationally, undeniably visible.* Air traffic controllers were exhausted and unpaid. Screeners were calling out. Her own union was preparing for a flight attendant strike over **unsafe conditions**, a different legal theory entirely from a contract strike (Nelson, 2021).

She was not threatening to make America angry. **She was pointing out, correctly and publicly, that the country was about to stop flying.**

**What happened next is the part you must get right.** On **January 25, 2019**, after air traffic controller sick-outs began delaying flights at LaGuardia, the shutdown ended, the same day. **Five days after her speech.**

**And here is the honest accounting, which matters more than the legend:**

- **The general strike never happened.** It was never called. It was, at most, proposed for discussion.
- **AFA did not strike either.** Under the RLA, it largely could not.
- **The people whose absence actually stopped the planes were the air traffic controllers**, acting on their own, and they are federal employees, who are *forbidden* to strike.
- Nelson's own congressional biography claims only that the *New York Times* called her "America's most powerful flight attendant" for her role in **helping to end** the shutdown (Nelson, 2021). Her own description of what she did is careful. This course will be too.

**So what was the leverage? The leverage was the credible threat, and the fact that she was the one who made it legible.**

Nothing was withdrawn. No one struck. What changed is that a sentence was said out loud, by someone with standing to say it, that made an *already-existing* vulnerability impossible for the other side to keep ignoring. The pressure was always there in the system. She named it.

**This is the transferable skill, and it is the most valuable thing in this course:**

> **Leverage is not about how sympathetic you are, how hard you have worked, or how badly you are being treated. It is about locating the point in a system where your group's refusal — or even your group's credible, articulated capacity to refuse — stops something the other side cannot afford to have stopped. And then making that point legible to them.**

You are a freelance camera operator with one client. You are a contractor whose invoice is 90 days late. You are one of four people who know how the payroll system works. You are a high school student and your shift is the only one that covers Friday close. **You are never as powerless as the org chart says.** You are, however, usually looking in the wrong place, at fairness, when you should be looking at *dependency*.

**Ask: what breaks if we stop? Who notices? How fast? And do they know it yet?**

**One correction, because this course does not repeat things it cannot verify.** You will frequently see Sara Nelson credited with a place on the *Time* 100 list. **That could not be verified in any year, and this course does not assert it.** Her membership numbers move too, her own 2021 congressional testimony said AFA represented **50,000 flight attendants at 17 airlines** *as of that date*, and the number has been changing as new carriers organize. Facts about living people have dates on them. Check them.

:::reveal Sara Nelson's union legally could not strike, never called a general strike, and the workers who actually stopped the planes were not hers. So what exactly was her leverage? ||| The **credible, articulated threat**, and her standing to make it legible. She identified an already-existing vulnerability (aviation safety was degrading and the country was about to stop flying) and said it out loud, publicly, in a way the other side could no longer ignore. Leverage is not sympathy or desert; it is locating the point where a refusal, or a credible capacity to refuse, stops something the other side cannot afford to have stopped.

## Sources
- National Labor Relations Act § 2(3), 29 U.S.C. § 152(3). Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/29/152
- Railway Labor Act § 6, 45 U.S.C. § 156. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/45/156
- National Mediation Board. (n.d.). *Mediation overview & FAQ*. https://nmb.gov/NMB_Application/index.php/meditation-overview-faq/
- Nelson, S. (2021, September 23). *Witness biography* [Submitted to the U.S. House Committee on Transportation and Infrastructure]. U.S. Congress. https://www.congress.gov/117/meeting/house/114058/witnesses/HHRG-117-PW05-Bio-NelsonS-20210923.pdf`,
    },
    {
      slug: "kyraw-quiz-leverage",
      title: "15 · Quiz: leverage when you hold no obvious cards",
      section: "Section 5 · Leverage when you hold no obvious cards",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Why are flight attendants NOT covered by the National Labor Relations Act?",
            options: [
              "NLRA § 2(3) excludes employees of an employer subject to the Railway Labor Act, which covers airlines",
              "They are classified as independent contractors",
              "They are classified as supervisors",
              "They cross state lines, so no federal law applies",
            ],
            correctIndex: 0,
            explanation:
              "Airlines and railroads are under the Railway Labor Act, a different statute with very different rules, especially about striking.",
            sourceLessonSlug: "kyraw-find-the-seam",
          },
          {
            prompt: "Under the Railway Labor Act, when may an airline union legally strike?",
            options: [
              "Only after the NMB proffers arbitration, a party rejects it, the NMB releases the parties, and a 30-day cooling-off period expires",
              "Any time after the contract expires",
              "Any time a majority of members vote to do so",
              "Only with the President's written permission",
            ],
            correctIndex: 0,
            explanation:
              "The RLA is designed to prevent interruptions. 97% of NMB mediation cases have been resolved with no interruption to service, the statute works as intended.",
            sourceLessonSlug: "kyraw-find-the-seam",
          },
          {
            prompt: "Could the seven machinists in NLRB v. Washington Aluminum have done what they did, if they had been flight attendants?",
            options: [
              "No, the NLRA does not cover them, and the RLA forbids a walkout until the parties are released and a cooling-off period expires",
              "Yes, § 7 applies to all private-sector workers",
              "Yes, but only with 30 days' notice",
              "Only if they had first filed a charge with the NLRB",
            ],
            correctIndex: 0,
            explanation:
              "The case that anchors this whole course does not apply to a flight attendant. That is the constraint Sara Nelson had to work inside.",
            sourceLessonSlug: "kyraw-find-the-seam",
          },
          {
            prompt: "On January 20, 2019, what did Sara Nelson actually do?",
            options: [
              "Called on the labor movement to discuss conducting a general strike to end the government shutdown",
              "Called an immediate strike of all AFA flight attendants",
              "Filed an unfair labor practice charge against the federal government",
              "Ordered air traffic controllers to call in sick",
            ],
            correctIndex: 0,
            explanation:
              "She made the call while accepting the AFL-CIO's MLK Drum Major for Justice Award. Getting this precise matters, the legend inflates it.",
            sourceLessonSlug: "kyraw-find-the-seam",
          },
          {
            prompt: "Did a general strike actually happen in January 2019?",
            options: [
              "No, it was never called, and AFA did not strike either",
              "Yes, millions of workers walked out",
              "Yes, but only flight attendants participated",
              "Yes, it lasted five days",
            ],
            correctIndex: 0,
            explanation:
              "It was, at most, proposed for discussion. The honest accounting is the point of the lesson: the threat, not the strike, was the leverage.",
            sourceLessonSlug: "kyraw-find-the-seam",
          },
          {
            prompt: "Whose absence actually began to stop the planes, five days later?",
            options: [
              "Air traffic controllers, whose sick-outs delayed flights at LaGuardia",
              "Flight attendants, who walked off aircraft",
              "Pilots, who refused to fly",
              "Baggage handlers, who struck nationally",
            ],
            correctIndex: 0,
            explanation:
              "Federal employees, acting on their own, and they are forbidden to strike. The shutdown ended the same day, January 25, 2019.",
            sourceLessonSlug: "kyraw-find-the-seam",
          },
          {
            prompt: "What, precisely, was Sara Nelson's leverage?",
            options: [
              "A credible, articulated threat that made an already-existing vulnerability impossible for the other side to keep ignoring",
              "The legal right to shut down all U.S. air travel",
              "A strike fund large enough to outlast the government",
              "A court injunction against the shutdown",
            ],
            correctIndex: 0,
            explanation:
              "Nothing was withdrawn and no one struck. What changed is that someone with standing said the vulnerability out loud.",
            sourceLessonSlug: "kyraw-find-the-seam",
          },
          {
            prompt: "The course defines leverage as:",
            options: [
              "Locating the point where your group's refusal, or credible capacity to refuse, stops something the other side cannot afford to have stopped, and making it legible to them",
              "The degree of public sympathy your cause attracts",
              "The number of members your union has",
              "How badly you are being treated",
            ],
            correctIndex: 0,
            explanation:
              "Leverage is about dependency, not fairness. Ask: what breaks if we stop? Who notices? How fast? And do they know it yet?",
            sourceLessonSlug: "kyraw-find-the-seam",
          },
          {
            prompt: "The course says you are \"usually looking in the wrong place.\" What is the right place?",
            options: ["Dependency, who needs what you do", "Fairness, whether you deserve better", "Seniority", "Your job title"],
            correctIndex: 0,
            explanation:
              "Fairness is an argument. Dependency is leverage. The two are not the same, and only one of them moves an employer.",
            sourceLessonSlug: "kyraw-find-the-seam",
          },
          {
            prompt: "Is Sara Nelson a Time 100 honoree?",
            options: [
              "It could not be verified in any year, so this course does not assert it",
              "Yes, in 2019",
              "Yes, multiple times",
              "Yes, in 2020 and 2022",
            ],
            correctIndex: 0,
            explanation:
              "The credit circulates widely and could not be substantiated. This course drops claims it cannot verify rather than repeating them.",
            sourceLessonSlug: "kyraw-find-the-seam",
          },
          {
            prompt: "Under the RLA, what happens to an airline contract when it reaches its end date?",
            options: [
              "It does not expire, it becomes \"amendable,\" and the terms stay in force while bargaining continues, possibly for years",
              "It expires and the workers become at-will",
              "It automatically renews on the same terms for one year",
              "The NMB imposes a new contract",
            ],
            correctIndex: 0,
            explanation:
              "This is a genuinely strange feature of the RLA, and it is a large part of why airline negotiations run so long.",
            sourceLessonSlug: "kyraw-find-the-seam",
          },
          {
            prompt: "What was AFA preparing, separate from any general strike?",
            options: [
              "A flight attendant strike over unsafe conditions, a different legal theory from a contract strike",
              "A lawsuit against the President",
              "A boycott of United Airlines",
              "A petition to Congress",
            ],
            correctIndex: 0,
            explanation:
              "Per her own congressional witness bio (Nelson, 2021). Safety is a distinct route, and it mattered to the credibility of the threat.",
            sourceLessonSlug: "kyraw-find-the-seam",
          },
          {
            prompt: "Sara Nelson's own 2021 congressional testimony said AFA represented how many flight attendants?",
            options: [
              "About 50,000, at 17 airlines, as of that date",
              "Exactly 55,000, at 20 airlines, permanently",
              "About 100,000, at 30 airlines",
              "The number has never been published",
            ],
            correctIndex: 0,
            explanation:
              "The number moves as new carriers organize. The course gives it WITH its date, because facts about living people and living organizations have dates on them.",
            sourceLessonSlug: "kyraw-find-the-seam",
          },
          {
            prompt: "Why is the RLA's 97% no-interruption record relevant to the leverage lesson?",
            options: [
              "It shows the statute is designed to prevent strikes, and works, which is exactly why Nelson had to find leverage somewhere other than a strike",
              "It proves flight attendants do not want to strike",
              "It shows the NMB is biased toward unions",
              "It is irrelevant to leverage",
            ],
            correctIndex: 0,
            explanation:
              "Her whole achievement only makes sense once you understand how thoroughly the law had disarmed her.",
            sourceLessonSlug: "kyraw-find-the-seam",
          },
          {
            prompt: "You are one of four people at your company who understand the payroll system, and your invoice is 90 days late. What does this section tell you to ask?",
            options: [
              "What breaks if we stop? Who notices? How fast? And do they know it yet?",
              "Am I being treated fairly compared to my coworkers?",
              "How long have I worked here?",
              "Is my manager a reasonable person?",
            ],
            correctIndex: 0,
            explanation:
              "You are never as powerless as the org chart says, but you have to look at dependency rather than desert.",
            sourceLessonSlug: "kyraw-find-the-seam",
          },
        ],
      },
    },
    // ─────────── SECTION 6 · THE MODERN FIGHT (FRAN DRESCHER + MEREDITH STIEHM) ───────────
    {
      slug: "kyraw-your-face-is-not-public-domain",
      title: "16 · Fran Drescher: your face is not public domain",
      section: "Section 6 · When the job changes shape",
      recallContent: [
        {
          prompt: "What was Sara Nelson's actual leverage in January 2019?",
          answer:
            "A credible, articulated threat. She made an already-existing vulnerability, degrading aviation safety, impossible for the other side to keep ignoring. No strike was ever called.",
        },
        {
          prompt: "Leverage is about ___, not fairness.",
          answer:
            "Dependency. Ask what breaks if you stop, who notices, how fast, and whether they know it yet.",
        },
      ],
      body: `Everything so far has been about a fight over the **terms** of a job: the pay, the hours, the safety, who gets laid off first. This section is about something newer and stranger, a fight over whether the **job still exists in the form the contract describes**.

**Fran Drescher**, the actor, from *The Nanny*, was elected **President of SAG-AFTRA in September 2021** and re-elected in 2023. **She left office in September 2025**, succeeded by **Sean Astin** (SAG-AFTRA, 2025). She is a **former** president, and this course says so because getting the tense right about a living person is the minimum standard.

In 2023 she led the **SAG-AFTRA strike: 118 days**, from **July 14 to November 9, 2023**, the longest actors' strike against the studios in Hollywood history, and the first time actors and writers had struck simultaneously since 1960.

**And the central issue was not glamorous.** It was this: *studios wanted to scan performers' faces and bodies, and then use the scan.*

**What the strike actually won, and it is a real, readable document.** The 2023 agreement built a consent-and-compensation framework around what it calls a **digital replica**. Here is the structure (Authors Guild, 2024):

**An "employment-based digital replica"** is one created in connection with your employment, they scan you on set, and used to make you appear in scenes you did not actually perform.

- **Consent is required**, and it must be **clear and conspicuous**, in the employment contract or a separate signed document.
- The consent must include a **"reasonably specific description" of the intended use.** This is the load-bearing sentence in the whole framework, and you should understand exactly why. A blanket consent, *"Producer may use Performer's digital replica in any manner, in any media, in perpetuity"*, is precisely the thing this provision is designed to defeat. **"Reasonably specific" means they have to tell you what they are going to do with your face.**
- **You get paid**, and you get **residuals** if the replica is used in ways that would have earned you residuals had you done the work yourself.
- **Consent survives death** unless otherwise stated, which is why the estate provisions exist at all.

**An "independently created digital replica"** is one made *without* employing you at all, a synthetic asset that creates the clear impression of an identifiable performer. Consent, in a signed document with a reasonably specific description of the use, is required **before creation and use**. There are carve-outs grounded in the First Amendment for comment, criticism, scholarship, satire, parody, docudrama, and historical or biographical work.

**A "synthetic performer"** is a digitally created asset trained on multiple humans that is not recognizably any one of them. Producers must **notify the union** and bargain over compensation.

**Why this belongs in a course for people who are not actors.**

Because **you are being asked to sign this right now, and you are not being paid $200,000 to do it.**

Read that list again and translate it out of Hollywood. A "digital replica" clause is a clause about **your voice, your face, your name, your likeness, and your work product being used to make a thing that replaces you.** Look at the contracts already circulating in ordinary working life:

- The retail job whose onboarding paperwork licenses your image "for training and promotional purposes."
- The customer-service job that records your calls, and the clause about using recordings to "improve our systems."
- The freelance gig whose terms grant the client a "perpetual, irrevocable, worldwide, royalty-free license" to your work product **for any purpose**.
- The content platform whose terms let it train models on everything you upload.
- The school or employer app that collects your voice or face for "verification."

**Every one of those is the same clause SAG-AFTRA struck 118 days over.** The performers had a union, a strike fund, and enormous public sympathy, and it still took them four months to win the word **"reasonably specific."**

**So the practical skill this course wants you to leave with is simple, and it is a habit, not a fact:**

When a document asks for your image, voice, name, likeness, or work product, **find the scope words.** *Perpetual. Irrevocable. Worldwide. Royalty-free. Sublicensable. In any media now known or hereafter devised. For any purpose. In its sole discretion.* Each of those words is doing enormous work, and none of them is there by accident.

**Ask the question the 2023 agreement forced the studios to answer: what, specifically, are you going to do with it?** If the document will not say, that is the answer.

**A note on a famous quote.** Drescher gave a widely-shared speech at the start of the strike. **Two different orderings of its most-quoted passage circulate**, and this course could not retrieve the primary video to settle which is right, so it does not reproduce the quote at all. That is the same rule the course applied to Crystal Lee Sutton's non-existent court case and Sara Nelson's unverifiable *Time* credit. **The agreement is the artifact. Teach the document, not the anecdote.**

:::reveal A freelance contract grants the client a "perpetual, irrevocable, worldwide, royalty-free, sublicensable license to Contractor's name, voice and likeness for any purpose." What did SAG-AFTRA's 2023 agreement establish that this clause is missing? ||| **A "reasonably specific description" of the intended use**, plus consent that is clear and conspicuous, and compensation (including residuals) for the use. "For any purpose," in perpetuity, is exactly the blanket consent the digital-replica provisions were written to defeat. If the document will not tell you what it is going to do with your face, that refusal *is* the answer.

## Sources
- Authors Guild. (2024, January 17). *SAG-AFTRA agreement establishes important safeguards for actors around AI use*. https://authorsguild.org/news/sag-aftra-agreement-establishes-important-ai-safeguards/
- SAG-AFTRA. (2025, September). *SAG-AFTRA members elect Sean Astin president and Michelle Hurd secretary-treasurer*. https://www.sagaftra.org/sag-aftra-members-elect-sean-astin-president-and-michelle-hurd-secretary-treasurer
- SAG-AFTRA. (n.d.). *2023 TV/Theatrical contracts*. https://www.sagaftra.org/contracts-industry-resources/contracts/2023-tvtheatrical-contracts`,
    },
    {
      slug: "kyraw-when-the-job-changes-shape",
      title: "17 · Meredith Stiehm: when the employer restructures the job",
      section: "Section 6 · When the job changes shape",
      recallContent: [
        {
          prompt: "What does a \"reasonably specific description\" requirement do to a digital-replica consent?",
          answer:
            "It defeats blanket consent. The employer must say what, specifically, it will do with your likeness, rather than taking a perpetual, irrevocable licence \"for any purpose.\"",
        },
        {
          prompt: "How long was the 2023 SAG-AFTRA strike, and who led it?",
          answer:
            "118 days (July 14, November 9, 2023), led by then-president Fran Drescher. She left office in September 2025 and was succeeded by Sean Astin.",
        },
      ],
      body: `Drescher's fight was about a thing being taken from you, your face. **Meredith Stiehm's is subtler, and in the long run it is the one that will touch more people's jobs.**

Stiehm is a screenwriter and showrunner: **creator of *Cold Case*, co-creator of *The Bridge*, writer and executive producer on *Homeland*** (which she did not create, it was developed by Howard Gordon and Alex Gansa), with earlier credits on *NYPD Blue* and *ER*. She was elected **President of the Writers Guild of America West in September 2021**, re-elected in 2023, and **termed out in September 2025**, succeeded by **Michele Mulroney**. Like Drescher, she is a **former** president.

She led the WGAW through the **148-day 2023 strike** (May 2, September 27, 2023). *(Do not swap the numbers: **WGA = 148 days. SAG-AFTRA = 118 days.** They are constantly crossed.)*

**Her fight was about the shape of the job.** Consider what had happened to television writing without a single word of the contract changing:

| The old job | What it became |
| --- | --- |
| A writers' room of a dozen people, staffed for a full season | A **"mini-room"**, a handful of writers, hired for a few weeks, before a show is even greenlit |
| 22 episodes a year | 8 or 10, so the same "one season" of work pays a fraction |
| A writer on set, learning to produce | A writer sent home after the script, never becoming a showrunner |
| Residuals you could compute from a broadcast schedule | Streaming residuals based on viewership data **the company would not show you** |

**Notice what the employer did not do.** It did not cut the rate per script. It did not violate a clause. **It restructured the job so that the clauses stopped mapping onto it.** The contract said what a "season" pays. It did not say a season had to be twenty-two episodes, or that the room had to exist, or that you got to see the numbers your pay depended on.

**This is the most sophisticated idea in this course, and it is the one most likely to happen to you:** the employer does not break the contract. The employer **changes the work until the contract no longer describes it**, and then points out, accurately, that it has broken nothing.

**So the 2023 WGA agreement bargained over structure, not just price.** It set **minimum staffing levels and minimum durations** for writers' rooms, a floor under the *shape* of the job, not just its wage. It won **streaming viewership transparency**. And it wrote AI rules that are worth reading in the Guild's own words (WGA, n.d.):

- **"No written material produced by traditional AI or GAI can be considered literary material."** AI is not a writer. This matters because "literary material" is the unit the entire contract, credits, compensation, separated rights, is built on. If AI output counted as literary material, a studio could generate a draft, hire a human to "polish" it, and pay a rewrite fee for what used to be a script fee. **They wrote AI out of the definition rather than trying to ban it.**
- **AI-generated material is not "source material"** either, "meaning that AI-generated material can't be used to undermine a writer's credit or separated rights."
- **"The company can't require the writer to use AI software (e.g., ChatGPT) when performing writing services."** A writer *may* choose to use it, with the company's consent. The choice belongs to the writer.
- **"The Company must disclose to the writer if any materials given to the writer have been generated by AI or incorporate AI-generated material."** You get to know what you are being handed.
- **"The WGA reserves the right to assert that exploitation of writers' material to train AI is prohibited by MBA or other law."** The training question was not conceded; it was preserved.

**Look at the strategy in that list, because it is genuinely clever.** The WGA did not try to ban a technology, a fight it would have lost, and which would have been obsolete in eighteen months anyway. **It defined the technology's output as something that does not count**, protected the human's right to refuse it, and required disclosure. It legislated the *relationship* to the tool rather than the tool.

**Now put the whole course together.**

- **Wyatt**: the contract is the protection. A clause is worth more than a promise.
- **Huerta**: when the law does not cover you, build the power outside the room, and a movement is not a saint.
- **Sutton**: retaliation is real, the remedy is thin, and someone pays for the clause you inherit.
- **Nelson**: leverage is dependency, not desert. Find the seam.
- **Drescher**: read what you are signing away, and make them say what they will do with it.
- **Stiehm**: **and watch for the employer who does not break the contract, but changes the job until the contract stops protecting you.**

That last one is the one you should carry into whatever your work turns out to be. The clause you negotiate today describes a job. **Jobs change shape. Keep reading.**

:::reveal Your employer never cuts your pay rate and never breaks a single clause of your agreement, but reorganizes the work so that the protections in it no longer apply to what you actually do all day. What is that, and what did the WGA do about it? ||| That is **bargaining over structure, not price**, the employer restructuring the job until the old contract stops mapping onto it. The WGA answered it structurally: minimum staffing levels and minimum durations for writers' rooms (a floor under the *shape* of the job), streaming viewership transparency, and AI rules that define AI output as not "literary material" or "source material," protect a writer's right to refuse to use AI, and require the company to disclose AI-generated material it hands you.

## Sources
- Writers Guild of America West. (n.d.). *Artificial intelligence* [Know Your Rights]. https://www.wga.org/contracts/know-your-rights/artificial-intelligence
- Writers Guild of America West. (n.d.). *Summary of the 2023 WGA MBA*. https://www.wgacontract2023.org/the-campaign/summary-of-the-2023-wga-mba
- Deadline. (2025, September). *Michele Mulroney officially elected president of WGA West*. https://deadline.com/2025/09/wga-2025-election-results-michele-mulroney-president-1236553449/`,
    },
    {
      slug: "kyraw-read-the-ai-clause",
      title: "18 · Practice: read the clause that takes your face",
      section: "Section 6 · When the job changes shape",
      recallContent: [
        {
          prompt: "How long was the 2023 WGA strike, and what is the number people constantly confuse it with?",
          answer:
            "The WGA strike was 148 days (May 2, September 27, 2023). SAG-AFTRA's was 118 days. The two are routinely swapped.",
        },
        {
          prompt: "Rather than trying to ban AI, what did the WGA's 2023 agreement do?",
          answer:
            "It defined AI output as NOT \"literary material\" or \"source material\", so it cannot displace a writer's credit or fee, protected the writer's right to refuse to use AI, and required the company to disclose AI-generated material. It legislated the relationship to the tool, not the tool.",
        },
      ],
      body: `The whole course comes down to a habit: **before you sign, find the clause.** This drill builds it.

**The scope words.** When a document asks for your image, voice, name, likeness, or work product, these are the words that decide how much you are giving away:

| Word | What it actually means |
| --- | --- |
| **Perpetual** | Forever. It never comes back to you. |
| **Irrevocable** | You cannot change your mind. Ever. |
| **Worldwide** | Everywhere. |
| **Royalty-free** | They never have to pay you again. |
| **Sublicensable** | They can hand it to someone else, someone you never agreed to. |
| **In any media now known or hereafter devised** | Including technologies that do not exist yet. This clause is how a 1998 signature ends up training a 2026 model. |
| **For any purpose** | The opposite of the "reasonably specific description" SAG-AFTRA struck 118 days to win. |
| **Sole discretion** | They decide. You have no say. |

**The four questions to ask of any likeness, AI, or IP clause:**

1. **What exactly are they taking?** (My face? My voice? A recording? Everything I make on their equipment? Everything I make *at all*?)
2. **What will they do with it?** If the document will not say specifically, that refusal is the answer.
3. **For how long, and can I take it back?** (*Perpetual* and *irrevocable* mean: forever, and no.)
4. **Do I get paid when they use it again?** (*Royalty-free* means: no.)

Fill in each blank, then check. Spelling and capitalization are forgiving.

**This course explains general legal principles. It is not legal advice.** State laws on likeness and publicity rights vary a great deal, and some states have passed new digital-replica laws that federal law does not have. If a real contract is in front of you, a lawyer, your union, or a legal-aid organization can advise you on your state and your facts.`,
      exercise: {
        instructions: "Fill in each blank, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt: "SAG-AFTRA's 2023 agreement requires that consent to a digital replica include a \"reasonably ___ description\" of the intended use.",
            answer: "specific",
            explanation: "This is the phrase that defeats blanket consent. It forces the employer to say what it will actually do with your face.",
          },
          {
            prompt: "A licence term meaning \"forever, it never returns to you\" is ___.",
            answer: "perpetual",
            explanation: "Paired with \"irrevocable,\" it means you have given it away permanently and cannot change your mind.",
          },
          {
            prompt: "A licence term meaning \"you cannot change your mind, ever\" is ___.",
            answer: "irrevocable",
            explanation: "Look for it next to \"perpetual.\" They almost always travel together.",
          },
          {
            prompt: "A licence term meaning \"they never have to pay you again for it\" is ___-free.",
            answer: "royalty",
            explanation: "Royalty-free is the opposite of the residuals SAG-AFTRA won for digital replica use.",
          },
          {
            prompt: "A licence term meaning \"they can hand your likeness to a third party you never agreed to\" is ___.",
            answer: "sublicensable",
            explanation: "This is how a clause you signed with one company ends up benefiting a company you have never heard of.",
          },
          {
            prompt: "The 2023 SAG-AFTRA strike lasted ___ days. (Write the number.)",
            answer: "118",
            explanation: "SAG-AFTRA = 118 days (July 14, Nov 9, 2023). Do not cross it with the WGA's 148.",
          },
          {
            prompt: "The 2023 WGA strike lasted ___ days. (Write the number.)",
            answer: "148",
            explanation: "WGA = 148 days (May 2, Sept 27, 2023). The two strike lengths are constantly swapped.",
          },
          {
            prompt: "Under the 2023 WGA agreement, AI output cannot be considered \"___ material\", the unit on which credits and compensation are built.",
            answer: "literary",
            explanation: "Rather than banning AI, the WGA defined its output out of the category that pays and credits writers.",
          },
          {
            prompt: "Under the 2023 WGA agreement, can a company REQUIRE a writer to use AI software? Answer yes or no.",
            answer: "no",
            explanation: "\"The company can't require the writer to use AI software... when performing writing services.\" The choice belongs to the writer.",
          },
          {
            prompt: "Under the 2023 WGA agreement, a company must ___ to the writer if materials it hands them were generated by AI.",
            answer: "disclose",
            explanation: "You get to know what you are being handed. Disclosure is a right, not a courtesy.",
          },
        ],
      },
    },
    {
      slug: "kyraw-quiz-modern-fight",
      title: "19 · Quiz: when the job changes shape",
      section: "Section 6 · When the job changes shape",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Is Fran Drescher the current president of SAG-AFTRA?",
            options: [
              "No, she served 2021-2025 and was succeeded by Sean Astin in September 2025",
              "Yes, she was re-elected in 2025",
              "Yes, she has served continuously since 2021",
              "No, she resigned during the 2023 strike",
            ],
            correctIndex: 0,
            explanation:
              "She is a former president. Getting the tense right about a living person is the minimum standard for a cited course.",
            sourceLessonSlug: "kyraw-your-face-is-not-public-domain",
          },
          {
            prompt: "Is Meredith Stiehm the current president of the WGA West?",
            options: [
              "No, she served 2021-2025, termed out, and was succeeded by Michele Mulroney",
              "Yes, she is serving a third term",
              "Yes, she was re-elected in 2025",
              "No, she never held the office",
            ],
            correctIndex: 0,
            explanation: "Also a former president. Both left office in September 2025.",
            sourceLessonSlug: "kyraw-when-the-job-changes-shape",
          },
          {
            prompt: "How long were the two 2023 strikes?",
            options: [
              "SAG-AFTRA 118 days; WGA 148 days",
              "SAG-AFTRA 148 days; WGA 118 days",
              "Both 118 days",
              "SAG-AFTRA 100 days; WGA 200 days",
            ],
            correctIndex: 0,
            explanation:
              "SAG-AFTRA: July 14, Nov 9, 2023. WGA: May 2, Sept 27, 2023. These numbers are crossed more often than any other pair in this course.",
            sourceLessonSlug: "kyraw-your-face-is-not-public-domain",
          },
          {
            prompt: "Under SAG-AFTRA's 2023 agreement, what must consent to an employment-based digital replica include?",
            options: [
              "A clear and conspicuous consent with a \"reasonably specific description\" of the intended use",
              "A verbal agreement on set",
              "A blanket licence for any purpose, in perpetuity",
              "Nothing, consent is not required if you are already employed",
            ],
            correctIndex: 0,
            explanation:
              "\"Reasonably specific\" is the load-bearing phrase: it is designed to defeat exactly the blanket consent the studios wanted.",
            sourceLessonSlug: "kyraw-your-face-is-not-public-domain",
          },
          {
            prompt: "What is a \"synthetic performer\" under the 2023 SAG-AFTRA agreement?",
            options: [
              "A digitally created asset trained on multiple humans, not recognizably any one of them, producers must notify the union and bargain over compensation",
              "A body double",
              "A performer who works remotely",
              "An animated character voiced by a union member",
            ],
            correctIndex: 0,
            explanation:
              "It is distinct from a digital replica, which is recognizably a specific identifiable person.",
            sourceLessonSlug: "kyraw-your-face-is-not-public-domain",
          },
          {
            prompt: "In a contract, what does \"in any media now known or hereafter devised\" do?",
            options: [
              "Extends the licence to technologies that do not exist yet it is how an old signature ends up training a new model",
              "Limits the licence to current technology only",
              "Requires renegotiation when technology changes",
              "Restricts the licence to broadcast television",
            ],
            correctIndex: 0,
            explanation: "It is one of the most consequential phrases in modern contracts, and it is easy to skim past.",
            sourceLessonSlug: "kyraw-read-the-ai-clause",
          },
          {
            prompt: "A freelance contract takes a \"perpetual, irrevocable, worldwide, royalty-free, sublicensable\" licence to your work. What have you given up?",
            options: [
              "It forever, everywhere, with no further payment, with no ability to change your mind, and they may hand it to third parties you never agreed to",
              "A one-year licence you can cancel",
              "Nothing, these are standard terms with no legal effect",
              "Only the right to sell the work yourself",
            ],
            correctIndex: 0,
            explanation:
              "Every one of those five words is doing enormous work, and none of them is there by accident.",
            sourceLessonSlug: "kyraw-read-the-ai-clause",
          },
          {
            prompt: "What is a \"mini-room,\" and why did it matter to the WGA?",
            options: [
              "A small writers' room hired for a few weeks before a show is greenlit, an example of the employer restructuring the JOB so the old contract stopped protecting it",
              "A small room where arbitration hearings are held",
              "A union meeting of fewer than ten members",
              "A streaming service's internal development team",
            ],
            correctIndex: 0,
            explanation:
              "The studios broke no clause. They changed the work until the clauses no longer described it.",
            sourceLessonSlug: "kyraw-when-the-job-changes-shape",
          },
          {
            prompt: "Under the 2023 WGA agreement, can AI-generated text be \"literary material\"?",
            options: [
              "No, and that matters because \"literary material\" is the unit on which credits, compensation and separated rights are built",
              "Yes, if a human edits it",
              "Yes, if the company discloses it",
              "Only for streaming productions",
            ],
            correctIndex: 0,
            explanation:
              "If AI output counted, a studio could generate a draft, hire a human to polish it, and pay a rewrite fee instead of a script fee.",
            sourceLessonSlug: "kyraw-when-the-job-changes-shape",
          },
          {
            prompt: "Under the 2023 WGA agreement, can a company require a writer to use ChatGPT to perform writing services?",
            options: [
              "No, but a writer may choose to use AI, with the company's consent",
              "Yes, if it is in the writer's contract",
              "Yes, for any streaming project",
              "Only if the company pays a premium",
            ],
            correctIndex: 0,
            explanation: "The choice belongs to the writer. That is the point of the provision.",
            sourceLessonSlug: "kyraw-when-the-job-changes-shape",
          },
          {
            prompt: "What is the WGA's strategy toward AI, as the course describes it?",
            options: [
              "It did not ban the technology, it defined AI output as something that doesn't count, protected the human's right to refuse it, and required disclosure",
              "It banned all use of AI in film and television",
              "It required studios to pay a per-use AI licence fee to the Guild",
              "It took no position on AI",
            ],
            correctIndex: 0,
            explanation:
              "It legislated the *relationship* to the tool rather than the tool, a fight it could actually win, and one that does not go obsolete in eighteen months.",
            sourceLessonSlug: "kyraw-when-the-job-changes-shape",
          },
          {
            prompt: "Why does this course NOT reproduce Fran Drescher's most famous strike quote?",
            options: [
              "Two orderings of the passage circulate and the primary video could not be retrieved, so the course teaches the agreement instead of the anecdote",
              "Because the quote is copyrighted",
              "Because she has asked that it not be reproduced",
              "Because the quote is not relevant to the course",
            ],
            correctIndex: 0,
            explanation:
              "Same rule the course applied to Sutton's non-existent case and Nelson's unverifiable Time credit. Teach the document, not the anecdote.",
            sourceLessonSlug: "kyraw-your-face-is-not-public-domain",
          },
          {
            prompt: "Which single question does the course say to ask of any likeness or AI clause?",
            options: [
              "What, specifically, are you going to do with it?, and if the document will not say, that refusal is the answer",
              "Is this contract standard in the industry?",
              "Has anyone else signed this?",
              "Is the company reputable?",
            ],
            correctIndex: 0,
            explanation:
              "It is the question the 2023 agreement forced the studios to answer, via the \"reasonably specific description\" requirement.",
            sourceLessonSlug: "kyraw-read-the-ai-clause",
          },
          {
            prompt: "Meredith Stiehm's fight is described as the most sophisticated idea in the course. What is it?",
            options: [
              "The employer does not break the contract, it changes the work until the contract no longer describes it, and then correctly points out that it has broken nothing",
              "The employer refuses to sign any contract at all",
              "The employer replaces all workers with AI",
              "The employer relocates the work overseas",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the WGA bargained over STRUCTURE, minimum staffing, minimum room durations, data transparency, and not only over price.",
            sourceLessonSlug: "kyraw-when-the-job-changes-shape",
          },
          {
            prompt: "Which of these is Meredith Stiehm's actual credit?",
            options: [
              "Creator of Cold Case; co-creator of The Bridge; writer/EP on Homeland",
              "Creator of Homeland",
              "Creator of Bosch",
              "Creator of NYPD Blue",
            ],
            correctIndex: 0,
            explanation:
              "She did not create Homeland (Howard Gordon and Alex Gansa developed it), and Bosch is not her credit at all, it appears in some drafts and is wrong.",
            sourceLessonSlug: "kyraw-when-the-job-changes-shape",
          },
        ],
      },
    },
  ],
};
