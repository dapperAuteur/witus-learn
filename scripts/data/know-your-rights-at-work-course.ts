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
  ],
};
