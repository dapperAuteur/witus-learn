import type { AuthoredCourse } from "./authored-course";

// REPORT-05 · The Law You Work Inside (plans/68).
//
// THIS COURSE IS NOT LEGAL ADVICE AND SAYS SO IN ITS FIRST LESSON AND ITS LAST. It is a map: what
// the categories are, what the leading cases decided, where the rules vary, and the moment to stop
// and call a lawyer. plans/68 asked for exactly that shape and it is followed literally.
//
// SOURCING DISCIPLINE, load-bearing here more than anywhere else in the track:
//   * Every case is named with its court and year. Supreme Court decisions carry their U.S. Reports
//     citation. The one circuit decision is given by name, court and year rather than by a volume
//     and page this pass could not read against the reporter, because a wrong pin cite in a legal
//     course is worse than none.
//   * Federal statutes are cited by title and section. STATE law is described as varying, always,
//     and the reader is sent to their own state's text and to the Reporters Committee's guides.
//   * INDIANA is the worked example, per plans/68's jurisdiction decision. Where this pass could
//     not read the current Indiana text, the course names the chapter and refuses to print the
//     operative detail, and a source check is filed (report-in-shield-scope, report-in-recording).
//   * No holding is stated more broadly than it is. Where a doctrine is unsettled or splits by
//     circuit or state, the course says so instead of choosing the tidier answer.
export const REPORTER_MEDIA_LAW_COURSE: AuthoredCourse = {
  title: "Reporter 05: The Law You Work Inside",
  description:
    "A map, not legal advice. What a defamation claim actually requires and where the actual-malice standard came from, the four privacy torts and which one a reporter really meets, why how you gathered something is judged separately from what you published, recording consent, shield protections and their limits, publishing material somebody else obtained, and the specific moments to stop and call a lawyer. Federal law and leading cases as the spine, Indiana as the worked example, your own state as the homework.",
  lessons: [
    // ── Section 1 ───────────────────────────────────────────────────────────────────────────
    {
      slug: "not-legal-advice",
      title: "1 · A map, and what it is not",
      section: "Section 1 · Defamation",
      body: `This course does not tell you whether you can publish something. It tells you which body of law your question belongs to, what the leading cases decided, where the rule varies by state, and when to stop and call somebody qualified.

**Say the limit plainly, because it is the most important sentence here.** This is not legal advice. It is written by a journalist for journalists, it describes general principles, and general principles lose to specific facts every time. If a real decision turns on any of it, the answer comes from a lawyer licensed where you publish, not from a course.

**Why a reporter needs the map anyway.** Three reasons. You have to recognize the moment a question has become legal, which is the failure that costs most: people publish things without realizing there was a question. You have to preserve your position while you get help, which mostly means not destroying things and not making promises. And you have to be able to have a useful conversation with a lawyer, which is much faster if you already know what the categories are.

**The five bodies of law a working reporter meets.** Defamation, which is about reputational harm from false statements of fact. Privacy, which is four separate torts that get fused into one word. Newsgathering liability, which is about how you got something rather than what you published. Compelled disclosure, which is about whether you can be made to reveal a source or hand over material. And a scattering of everything else: copyright, recording statutes, court access, and platform liability.

**The single most useful thing in this course.** How you gathered material is judged separately from what you published, and the protections are not the same. A story can be completely true, entirely publishable, and still expose you because of what you did to get it. That distinction is section 2, and it is the one working reporters most often do not know.

**What varies, so you stop expecting a national answer.** Defamation is state law with a federal constitutional floor. Privacy torts are state law and not every state recognizes all four. Recording consent is state law. Shield protection is state law, with no general federal statute. Anti-SLAPP statutes exist in many states and not all, and they differ enormously. The federal cases in this course set floors and ceilings; the operative rule where you work is usually your state's.

**And the discipline this course keeps.** Every case here is named with its court and year so you can read it yourself. Where this course could not verify a detail against a primary text, it says so and declines to print the detail rather than guessing, which is the same rule the records course applied to Indiana's deadlines.

:::reveal What are the three reasons a reporter needs the legal map even though this is not legal advice? ||| To recognize the moment a question has become legal, to preserve your position while getting help, and to have a useful conversation with a lawyer faster.

:::reveal What is the single most useful distinction in this course? ||| How you gathered material is judged separately from what you published, and the protections are not the same. A true, publishable story can still expose you because of how it was obtained.

:::reveal Which of these bodies of law are state rather than federal? ||| Defamation with a federal constitutional floor, the privacy torts, recording consent, shield protection, and anti-SLAPP. The federal cases set floors and ceilings; the operative rule is usually your state's.

## Vocabulary
- **Not legal advice**: general principles described by a journalist, which lose to specific facts and cannot substitute for a licensed lawyer.
- **Newsgathering liability**: exposure arising from how material was obtained, judged separately from what was published.
- **Compelled disclosure**: being required to reveal a source or produce material, governed mostly by state law.
- **Constitutional floor**: the minimum protection federal decisions require, below which no state's rule may fall.

## Sources
- Reporters Committee for Freedom of the Press. (n.d.). *Reporters Committee legal guides*. https://www.rcfp.org/
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "what-defamation-requires",
      title: "2 · What a defamation claim actually requires",
      section: "Section 1 · Defamation",
      body: `Defamation is the exposure reporters worry about most and understand least. It is a state-law tort with a federal constitutional overlay, and knowing its elements tells you exactly which sentence in your story is the one at risk.

**The elements, in the form most states use.** A statement of fact, about an identifiable person or entity, published to somebody other than that person, that is false, that harms reputation, and that was made with the required degree of fault. Every one of those is a separate thing a plaintiff has to establish, and a story survives by failing any of them.

**Statement of FACT is doing the heaviest work.** A claim that can be proven true or false is a statement of fact. Pure evaluation is not. But the Supreme Court held in *Milkovich v. Lorain Journal Co.*, 497 U.S. 1 (1990), that there is no separate wholesale exemption for anything labeled opinion: a statement that implies an assertion of objective fact can be actionable however it is phrased. Writing "in my opinion, the treasurer stole the money" does not convert a factual accusation into a protected opinion.

**Identifiability does not require a name.** A person is identifiable if the description would lead people who know them to recognize them, which is the same point the interviewing course made about protecting a source. A group can be too large for any individual member to claim they were identified, and how large is large enough is a question of state law and of the specific facts.

**Falsity, and who has to prove it.** At common law, statements were presumed false and truth was a defense the publisher raised. That is no longer the picture for media defendants on matters of public concern: in *Philadelphia Newspapers, Inc. v. Hepps*, 475 U.S. 767 (1986), the Court held that a private-figure plaintiff suing a media defendant over speech of public concern bears the burden of proving falsity. Which is a real protection and is not a reason to relax, because litigation is expensive whoever wins.

**Fault is the part that depends on who the plaintiff is**, and it is the whole of the next lesson.

**The practical translation for a working reporter.** Before publishing anything accusatory, identify the specific sentences that assert checkable facts about a specific person, and confirm each one to the standard the verification course sets. Softening the language does not help. Removing a name usually does not help. Getting the fact right is what helps.

:::reveal Name the six things a defamation plaintiff generally has to establish. ||| A statement of fact, about an identifiable person, published to a third party, that is false, that harms reputation, made with the required degree of fault.

:::reveal What did Milkovich decide about statements labeled as opinion? ||| That there is no separate wholesale exemption for opinion. A statement implying an assertion of objective fact can be actionable however it is phrased.

:::reveal Who bears the burden of proving falsity when a private figure sues a media defendant over a matter of public concern? ||| The plaintiff, under Philadelphia Newspapers v. Hepps (1986). It is a real protection and not a reason to relax, because litigation is expensive whoever wins.

## Vocabulary
- **Statement of fact**: an assertion capable of being proven true or false, which is what defamation law reaches.
- **Identifiable**: describable such that people who know the person would recognize them, with or without a name.
- **Hepps burden**: the rule placing the burden of proving falsity on a private-figure plaintiff suing media over public-concern speech.
- **Fault**: the degree of carelessness or knowledge a plaintiff must show, which depends on who they are.

## Sources
- Milkovich v. Lorain Journal Co., 497 U.S. 1 (1990). https://supreme.justia.com/cases/federal/us/497/1/
- Philadelphia Newspapers, Inc. v. Hepps, 475 U.S. 767 (1986). https://supreme.justia.com/cases/federal/us/475/767/`,
    },
    {
      slug: "actual-malice",
      title: "3 · Public officials, public figures, and actual malice",
      section: "Section 1 · Defamation",
      body: `Who the plaintiff is decides how careless you had to be before you are liable, and that single question drives most of American media law.

**Where the standard came from.** *New York Times Co. v. Sullivan*, 376 U.S. 254 (1964), arose from an advertisement about the civil rights movement in the South that contained factual errors, and from a Montgomery city commissioner's suit over it. The Court held that a public official cannot recover damages for a defamatory falsehood relating to official conduct unless the statement was made with actual malice.

**What actual malice means, and it is not what it sounds like.** Knowledge that the statement was false, or reckless disregard of whether it was false or not. It is not ill will, not bias, not a grudge, and not aggressive reporting. A reporter who despises the subject and gets the facts right has not acted with actual malice, and a reporter who likes the subject and published something they seriously doubted may have.

**It expanded beyond officials.** *Curtis Publishing Co. v. Butts*, 388 U.S. 130 (1967), extended a comparable standard to public figures who are not government officials.

**And it stopped at private figures.** In *Gertz v. Robert Welch, Inc.*, 418 U.S. 323 (1974), the Court held that states may set their own fault standard for private-figure plaintiffs, so long as they do not impose liability without fault, and that presumed and punitive damages generally require a showing of actual malice. Most states settled on negligence for private figures. Which state, and what its courts mean by negligence, is a question for a lawyer where you publish.

**The category question is genuinely hard, so do not assume.** Public officials are reasonably clear. Public figures split into all-purpose figures, who are famous generally, and limited-purpose figures, who have injected themselves into a particular public controversy and are public only as to that. Whether a school board member, a local business owner, or a person who went viral once is a public figure is litigated constantly and turns on the facts.

**And the standard does not reach parody the way people expect.** In *Hustler Magazine v. Falwell*, 485 U.S. 46 (1988), the Court held that a public figure could not recover for intentional infliction of emotional distress over a parody that could not reasonably be understood as stating actual facts, absent a false statement of fact made with actual malice.

**The working translation.** Assume you will have to show you were careful, whoever the plaintiff turns out to be, because you will not know their category in advance and the category is decided later by a court.

:::reveal What does actual malice mean, and what does it not mean? ||| Knowledge of falsity, or reckless disregard of whether the statement was false. Not ill will, bias, a grudge, or aggressive reporting.

:::reveal What did Gertz hold about private-figure plaintiffs? ||| That states may set their own fault standard so long as they do not impose liability without fault, and that presumed and punitive damages generally require actual malice. Most states chose negligence.

:::reveal What is a limited-purpose public figure? ||| Someone who has injected themselves into a particular public controversy and is treated as a public figure only as to that controversy. Whether a given person qualifies is litigated constantly.

## Vocabulary
- **Actual malice**: knowledge of falsity or reckless disregard for whether a statement was false, from New York Times v. Sullivan.
- **Public official**: a government officeholder, whose claim over official conduct requires actual malice.
- **Limited-purpose public figure**: someone public only as to a controversy they entered, a category decided on the facts.
- **Negligence standard**: the fault level most states apply to private-figure plaintiffs after Gertz.

## Sources
- New York Times Co. v. Sullivan, 376 U.S. 254 (1964). https://supreme.justia.com/cases/federal/us/376/254/
- Curtis Publishing Co. v. Butts, 388 U.S. 130 (1967). https://supreme.justia.com/cases/federal/us/388/130/
- Gertz v. Robert Welch, Inc., 418 U.S. 323 (1974). https://supreme.justia.com/cases/federal/us/418/323/
- Hustler Magazine, Inc. v. Falwell, 485 U.S. 46 (1988). https://supreme.justia.com/cases/federal/us/485/46/`,
    },
    {
      slug: "quiz-defamation",
      title: "4 · Knowledge check: defamation",
      section: "Section 1 · Defamation",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What does this course say about its own standing?",
            options: [
              "It is a map, not legal advice",
              "It states the settled rule in every American jurisdiction",
              "It replaces the need for legal review of routine stories",
              "It is written by counsel for use by newsroom staff",
            ],
            correctIndex: 0,
            explanation:
              "General principles lose to specific facts every time, and the answer comes from a lawyer licensed where you publish.",
            sourceLessonSlug: "not-legal-advice",
          },
          {
            prompt: "Which failure does the course say costs the most?",
            options: [
              "Publishing without realizing there was a legal question",
              "Calling a lawyer earlier than necessary",
              "Refusing to publish when the law would have allowed it",
              "Making a promise the outlet cannot keep",
            ],
            correctIndex: 0,
            explanation:
              "Recognizing the moment a question has become legal is the first of the three reasons a reporter needs the map.",
            sourceLessonSlug: "not-legal-advice",
          },
          {
            prompt: "What are the five bodies of law a working reporter meets?",
            options: [
              "Defamation, privacy, newsgathering, compelled disclosure, and the rest",
              "Constitutional, statutory, regulatory, common, and administrative",
              "Federal, state, county, municipal, and international",
              "Criminal, civil, contract, employment, and tax",
            ],
            correctIndex: 0,
            explanation:
              "The last category covers copyright, recording statutes, court access, and platform liability.",
            sourceLessonSlug: "not-legal-advice",
          },
          {
            prompt: "What is the single most useful distinction in the course?",
            options: [
              "How you gathered material is judged separately from what you published",
              "Truth is a defense to every claim a reporter faces",
              "Federal law preempts state law wherever both apply",
              "Publication protection extends to everything preceding it",
            ],
            correctIndex: 0,
            explanation:
              "A story can be completely true, entirely publishable, and still expose you because of what you did to get it.",
            sourceLessonSlug: "not-legal-advice",
          },
          {
            prompt: "Which of these is state law with a federal constitutional floor?",
            options: [
              "Defamation",
              "The Privacy Protection Act's search restrictions",
              "The federal wiretap statute's one-party rule",
              "Justice Department policy on news media records",
            ],
            correctIndex: 0,
            explanation:
              "As are the privacy torts, recording consent, shield protection, and anti-SLAPP. The federal cases set floors and ceilings.",
            sourceLessonSlug: "not-legal-advice",
          },
          {
            prompt: "What does this course do where it could not verify a detail?",
            options: [
              "Says so and declines to print the detail",
              "Prints the most commonly cited version with a caveat",
              "Omits the topic entirely",
              "Cites a secondary source instead",
            ],
            correctIndex: 0,
            explanation:
              "The same rule the records course applied to Indiana's deadlines, and a wrong pin cite in a legal course is worse than none.",
            sourceLessonSlug: "not-legal-advice",
          },
          {
            prompt: "What are the elements of a defamation claim, as most states frame them?",
            options: [
              "A false statement of fact about an identifiable person, published, harming reputation, with fault",
              "An offensive statement, widely distributed, causing measurable financial loss",
              "A published accusation the subject formally denies within a statutory period",
              "Any statement a subject can show they would prefer not to have been published",
            ],
            correctIndex: 0,
            explanation:
              "Each is a separate thing a plaintiff must establish, and a story survives by failing any one of them.",
            sourceLessonSlug: "what-defamation-requires",
          },
          {
            prompt: "Which element does the lesson say does the heaviest work?",
            options: [
              "Statement of fact",
              "Publication to a third party",
              "Harm to reputation",
              "Identifiability",
            ],
            correctIndex: 0,
            explanation:
              "A claim that can be proven true or false is a statement of fact. Pure evaluation is not.",
            sourceLessonSlug: "what-defamation-requires",
          },
          {
            prompt: "What did Milkovich v. Lorain Journal Co. decide?",
            options: [
              "There is no separate wholesale exemption for opinion",
              "That all opinion is constitutionally protected from defamation liability",
              "That a private figure must prove actual malice on public matters",
              "That truth is not a complete defense in every state",
            ],
            correctIndex: 0,
            explanation:
              "A statement implying an assertion of objective fact can be actionable however it is phrased, so labeling an accusation an opinion does not convert it.",
            sourceLessonSlug: "what-defamation-requires",
          },
          {
            prompt: "In what year was Milkovich decided?",
            options: [
              "1990",
              "1964, the same year the actual-malice standard was announced",
              "1974, alongside the private-figure fault rule",
              "2001, with the case on publishing intercepted communications",
            ],
            correctIndex: 0,
            explanation:
              "497 U.S. 1. It is the decision that closed the supposed opinion loophole.",
            sourceLessonSlug: "what-defamation-requires",
          },
          {
            prompt: "Does identifiability require a name?",
            options: [
              "No, a description recognizable to those who know them suffices",
              "Yes, a defamation claim requires the plaintiff to be named",
              "Yes, unless the plaintiff is a public official",
              "No, but only where the person is a public figure",
            ],
            correctIndex: 0,
            explanation:
              "The same point the interviewing course made about protecting a source, arriving from the opposite direction.",
            sourceLessonSlug: "what-defamation-requires",
          },
          {
            prompt: "Who bears the burden of proving falsity under Philadelphia Newspapers v. Hepps?",
            options: [
              "A private-figure plaintiff suing media over public-concern speech",
              "The media defendant, in every defamation action",
              "The plaintiff, only where they are a public official",
              "Neither party, since falsity is presumed",
            ],
            correctIndex: 0,
            explanation:
              "475 U.S. 767 (1986). A real protection, and not a reason to relax, because litigation is expensive whoever wins.",
            sourceLessonSlug: "what-defamation-requires",
          },
          {
            prompt: "What was the common-law position on falsity that Hepps changed for media defendants?",
            options: [
              "Statements were presumed false and truth was a defense to be raised",
              "Falsity had to be proven by the plaintiff in all cases",
              "Truth was irrelevant if the statement harmed reputation",
              "Falsity was assumed only where the plaintiff was a private figure",
            ],
            correctIndex: 0,
            explanation:
              "The shift matters because it changes who has to prove what, which is often the whole shape of a case.",
            sourceLessonSlug: "what-defamation-requires",
          },
          {
            prompt: "What is the practical translation of the defamation elements for a reporter?",
            options: [
              "Identify the sentences asserting checkable facts about a person and confirm each",
              "Soften accusatory language wherever possible",
              "Remove names from any sentence that could be disputed",
              "Attribute every accusation to a source rather than asserting it",
            ],
            correctIndex: 0,
            explanation:
              "Softening the language does not help, removing a name usually does not help, and getting the fact right is what helps.",
            sourceLessonSlug: "what-defamation-requires",
          },
          {
            prompt: "What case produced the actual-malice standard?",
            options: [
              "New York Times Co. v. Sullivan (1964)",
              "Gertz v. Robert Welch, Inc. (1974)",
              "Curtis Publishing Co. v. Butts (1967)",
              "Hustler Magazine v. Falwell (1988)",
            ],
            correctIndex: 0,
            explanation:
              "376 U.S. 254. It arose from an advertisement about the civil rights movement and a Montgomery city commissioner's suit over its factual errors.",
            sourceLessonSlug: "actual-malice",
          },
          {
            prompt: "What does actual malice mean?",
            options: [
              "Knowledge of falsity, or reckless disregard of whether it was false",
              "Ill will or a demonstrated grudge against the subject",
              "A failure to seek comment before publication",
              "Publishing despite a warning from the subject's lawyer",
            ],
            correctIndex: 0,
            explanation:
              "It is not bias and not aggressive reporting. A reporter who despises the subject and gets the facts right has not acted with actual malice.",
            sourceLessonSlug: "actual-malice",
          },
          {
            prompt: "Which reporter has arguably acted with actual malice?",
            options: [
              "One who published something they seriously doubted",
              "One who disliked the subject intensely and got the facts right",
              "One who pursued the story aggressively over many months",
              "One who declined to give the subject additional time to respond",
            ],
            correctIndex: 0,
            explanation:
              "Reckless disregard is about the reporter's relationship to the truth of the statement, not their feelings about the person.",
            sourceLessonSlug: "actual-malice",
          },
          {
            prompt: "What did Curtis Publishing Co. v. Butts do?",
            options: [
              "Extended a comparable standard to public figures who are not officials",
              "Established the negligence standard for private figures",
              "Created the fair report privilege as a constitutional matter",
              "Rejected a reporter's privilege before grand juries",
            ],
            correctIndex: 0,
            explanation:
              "388 U.S. 130 (1967), three years after Sullivan.",
            sourceLessonSlug: "actual-malice",
          },
          {
            prompt: "What did Gertz v. Robert Welch, Inc. hold about private-figure plaintiffs?",
            options: [
              "States may set their own fault standard but not liability without fault",
              "Private figures must show actual malice like public officials",
              "Private figures need show no fault at all",
              "Private figures may not recover from media defendants",
            ],
            correctIndex: 0,
            explanation:
              "418 U.S. 323 (1974). It also held that presumed and punitive damages generally require a showing of actual malice.",
            sourceLessonSlug: "actual-malice",
          },
          {
            prompt: "What fault standard did most states settle on for private figures after Gertz?",
            options: [
              "Negligence",
              "Actual malice, matching the public-official rule",
              "Strict liability, subject to a truth defense",
              "Recklessness short of knowledge of falsity",
            ],
            correctIndex: 0,
            explanation:
              "Which state, and what its courts mean by negligence, is a question for a lawyer where you publish.",
            sourceLessonSlug: "actual-malice",
          },
          {
            prompt: "What is a limited-purpose public figure?",
            options: [
              "Someone public only as to a controversy they entered",
              "Someone famous generally but not in government",
              "A government employee below policymaking level",
              "A private person mentioned in a news story once",
            ],
            correctIndex: 0,
            explanation:
              "Whether a school board member, a local business owner, or somebody who went viral qualifies is litigated constantly and turns on the facts.",
            sourceLessonSlug: "actual-malice",
          },
          {
            prompt: "What did Hustler Magazine v. Falwell decide?",
            options: [
              "A public figure could not recover for distress over a parody stating no actual facts",
              "That parody is never protected where the subject objects",
              "That emotional distress claims replace defamation for public figures",
              "That advertisements are outside First Amendment protection",
            ],
            correctIndex: 0,
            explanation:
              "485 U.S. 46 (1988), absent a false statement of fact made with actual malice.",
            sourceLessonSlug: "actual-malice",
          },
          {
            prompt: "What is the working translation of the fault rules?",
            options: [
              "Assume you will have to show you were careful, whoever the plaintiff turns out to be",
              "Assume actual malice applies whenever the subject holds any office",
              "Assume negligence applies unless the subject is nationally famous",
              "Assume no standard applies until a court has categorized the plaintiff",
            ],
            correctIndex: 0,
            explanation:
              "You will not know the category in advance, and it is decided later by a court.",
            sourceLessonSlug: "actual-malice",
          },
          {
            prompt: "What did the Sullivan advertisement contain?",
            options: [
              "Factual errors, about the civil rights movement in the South",
              "An unauthorized endorsement by a public official",
              "A parody of a named public figure",
              "An accusation against a private business",
            ],
            correctIndex: 0,
            explanation:
              "A Montgomery city commissioner sued over it, and the Court set the actual-malice standard for public officials suing over official conduct.",
            sourceLessonSlug: "actual-malice",
          },
          {
            prompt: "Which category question does the lesson call genuinely hard?",
            options: [
              "Whether a given person is a public figure",
              "Whether a statement is one of fact",
              "Whether publication occurred",
              "Whether the plaintiff was identifiable",
            ],
            correctIndex: 0,
            explanation:
              "All-purpose and limited-purpose figures are distinct categories and the line is litigated constantly.",
            sourceLessonSlug: "actual-malice",
          },
          {
            prompt: "What kind of writing does the lesson say does not convert a factual accusation?",
            options: [
              "Prefacing it with in my opinion",
              "Attributing it to a named source",
              "Placing it in a clearly labeled analysis piece",
              "Publishing it as a question rather than a statement",
            ],
            correctIndex: 0,
            explanation:
              "Milkovich holds that a statement implying an assertion of objective fact can be actionable however it is phrased.",
            sourceLessonSlug: "what-defamation-requires",
          },
          {
            prompt: "When can a group be too large for a defamation claim?",
            options: [
              "When no individual member can show they were identified",
              "When the group has more than one hundred members",
              "When the group is an unincorporated association",
              "When the group includes public officials",
            ],
            correctIndex: 0,
            explanation:
              "How large is large enough is a question of state law and of the specific facts.",
            sourceLessonSlug: "what-defamation-requires",
          },
          {
            prompt: "What does the course say about the value of the Hepps protection?",
            options: [
              "Real, and not a reason to relax",
              "Decisive, because it ends most media defamation suits early",
              "Limited to public officials suing over official conduct",
              "Available only where an anti-SLAPP statute also applies",
            ],
            correctIndex: 0,
            explanation:
              "Litigation is expensive whoever wins, which is the practical reason burden allocation is not the whole story.",
            sourceLessonSlug: "what-defamation-requires",
          },
          {
            prompt: "Which is the correct citation form used throughout this course for Supreme Court cases?",
            options: [
              "Name, U.S. Reports volume and page, and year",
              "Name and year only, since volumes are unreliable",
              "Name and court only, without a year",
              "Docket number and decision date",
            ],
            correctIndex: 0,
            explanation:
              "The single circuit decision in the course is given by name, court, and year, because a wrong pin cite in a legal course is worse than none.",
            sourceLessonSlug: "not-legal-advice",
          },
          {
            prompt: "Which body of law is about how you got something rather than what you published?",
            options: [
              "Newsgathering liability",
              "Defamation",
              "Compelled disclosure",
              "Platform liability",
            ],
            correctIndex: 0,
            explanation:
              "It is the second section of the course and the distinction working reporters most often do not know.",
            sourceLessonSlug: "not-legal-advice",
          },
          {
            prompt: "What is a constitutional floor?",
            options: [
              "The minimum protection federal decisions require of every state",
              "The maximum protection a state may grant a publisher",
              "The threshold below which a claim cannot be filed",
              "The damages cap a federal court will apply",
            ],
            correctIndex: 0,
            explanation:
              "States may protect speech more than the floor requires; they may not protect it less.",
            sourceLessonSlug: "not-legal-advice",
          },
          {
            prompt: "What is the second reason a reporter needs the legal map?",
            options: [
              "To preserve your position while getting help",
              "To argue the case yourself if a claim is filed",
              "To decide whether the outlet's insurance applies",
              "To advise a source on their own exposure",
            ],
            correctIndex: 0,
            explanation:
              "Which mostly means not destroying things and not making promises.",
            sourceLessonSlug: "not-legal-advice",
          },
          {
            prompt: "Why does knowing the categories speed up a conversation with a lawyer?",
            options: [
              "You can say which body of law the question belongs to",
              "You can propose the argument the lawyer should make",
              "You can decide whether the lawyer is needed at all",
              "You can limit the lawyer's review to a single sentence",
            ],
            correctIndex: 0,
            explanation:
              "It is the third of the three reasons, and it is why the course is arranged as a map of categories.",
            sourceLessonSlug: "not-legal-advice",
          },
          {
            prompt: "What is the relationship between the verification course and this one?",
            options: [
              "A file showing the assertion is accurate is the strongest legal position",
              "Verification replaces the need for legal review",
              "Legal review replaces the need for verification",
              "They address different stories and do not overlap",
            ],
            correctIndex: 0,
            explanation:
              "Truth is the first and best defense to defamation, so the verification file is the practical half of this course.",
            sourceLessonSlug: "what-defamation-requires",
          },
          {
            prompt: "Which sentence in a story is the one at legal risk?",
            options: [
              "The one asserting a checkable fact about a specific person",
              "The one that reads most harshly",
              "The one the subject complained about",
              "The one placed in the headline",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the elements are worth knowing: they tell you exactly which sentence to confirm hardest.",
            sourceLessonSlug: "what-defamation-requires",
          },
          {
            prompt: "What is a public official, for actual-malice purposes?",
            options: [
              "A government officeholder, whose claim over official conduct requires actual malice",
              "Any employee of a public body regardless of role",
              "Any person who has held elected office at any time",
              "Any person whose salary is paid from public funds",
            ],
            correctIndex: 0,
            explanation:
              "It is the clearest of the categories, which is why the difficulty lives in the public-figure question instead.",
            sourceLessonSlug: "actual-malice",
          },
          {
            prompt: "Which damages did Gertz say generally require actual malice?",
            options: [
              "Presumed and punitive damages",
              "All damages, including actual loss",
              "Only damages awarded against non-media defendants",
              "Only damages exceeding a statutory threshold",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the fault standard matters even where a private-figure plaintiff can establish negligence.",
            sourceLessonSlug: "actual-malice",
          },
          {
            prompt: "What does the course say about relying on your own assessment of a plaintiff's category?",
            options: [
              "Do not, because a court decides it later",
              "Rely on it, since the categories are well settled",
              "Rely on it only where the subject holds office",
              "Ask the subject to confirm their own category",
            ],
            correctIndex: 0,
            explanation:
              "Assume you will have to show you were careful whoever the plaintiff turns out to be.",
            sourceLessonSlug: "actual-malice",
          },
          {
            prompt: "What did the Falwell parody fail to do, which is why the claim failed?",
            options: [
              "Assert facts that could reasonably be understood as true",
              "Name the plaintiff in a recognizable way",
              "Reach a substantial audience",
              "Appear in a publication of general circulation",
            ],
            correctIndex: 0,
            explanation:
              "A parody that cannot reasonably be understood as stating actual facts is not a false statement of fact.",
            sourceLessonSlug: "actual-malice",
          },
          {
            prompt: "What is the difference between statements of fact and pure evaluation?",
            options: [
              "One can be proven true or false",
              "One is published and the other is not",
              "One names a person and the other does not",
              "One appears in news and the other in commentary",
            ],
            correctIndex: 0,
            explanation:
              "And Milkovich means the label attached to a sentence does not decide which category it falls in.",
            sourceLessonSlug: "what-defamation-requires",
          },
          {
            prompt: "What does the course say about anti-SLAPP statutes at the federal level?",
            options: [
              "There is no general federal statute",
              "The federal statute preempts weaker state versions",
              "Federal courts apply the strongest available state statute",
              "Federal anti-SLAPP protection applies only to broadcasters",
            ],
            correctIndex: 0,
            explanation:
              "Many states have them, several do not, and they vary enormously, including in whether they apply in federal court.",
            sourceLessonSlug: "not-legal-advice",
          },
          {
            prompt: "What is the closing claim of the first lesson about how cases are cited here?",
            options: [
              "Named with court and year so you can read them yourself",
              "Summarized so you do not need to read them",
              "Cited only where a holding is undisputed",
              "Paraphrased from a standard media law text",
            ],
            correctIndex: 0,
            explanation:
              "Which is the same discipline the rest of the catalog applies: cite so the reader can check you rather than trust you.",
            sourceLessonSlug: "not-legal-advice",
          },
          {
            prompt: "Which is NOT one of the five bodies of law the course names?",
            options: [
              "Employment discrimination",
              "Defamation",
              "Compelled disclosure",
              "Newsgathering liability",
            ],
            correctIndex: 0,
            explanation:
              "The five are defamation, privacy, newsgathering liability, compelled disclosure, and a scattering of copyright, recording, court access, and platform liability.",
            sourceLessonSlug: "not-legal-advice",
          },
          {
            prompt: "What does the course say general principles do against specific facts?",
            options: [
              "They lose, every time",
              "They govern, unless a statute says otherwise",
              "They apply equally in every jurisdiction",
              "They control until a court rules otherwise",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the course is a map and the answer comes from a lawyer licensed where you publish.",
            sourceLessonSlug: "not-legal-advice",
          },
          {
            prompt: "What does publication to a third party mean as an element?",
            options: [
              "The statement reached somebody other than the person described",
              "The statement appeared in a publication of general circulation",
              "The statement was broadcast rather than printed",
              "The statement was republished by another outlet",
            ],
            correctIndex: 0,
            explanation:
              "It is a low bar in practice, which is why the contested elements are usually fact, falsity, and fault.",
            sourceLessonSlug: "what-defamation-requires",
          },
          {
            prompt: "What does the course say about removing a name to reduce defamation risk?",
            options: [
              "It usually does not help",
              "It eliminates the claim entirely",
              "It shifts the burden of proof to the plaintiff",
              "It converts the statement into protected opinion",
            ],
            correctIndex: 0,
            explanation:
              "Identifiability does not require a name, so a description recognizable to people who know the person still identifies them.",
            sourceLessonSlug: "what-defamation-requires",
          },
          {
            prompt: "What year was New York Times Co. v. Sullivan decided?",
            options: [
              "1964",
              "1967, with the extension to public figures",
              "1974, with the private-figure rule",
              "1988, with the parody case",
            ],
            correctIndex: 0,
            explanation:
              "376 U.S. 254, and the standard it set drives most of American media law that follows.",
            sourceLessonSlug: "actual-malice",
          },
          {
            prompt: "What is the honest reason burden allocation does not end the analysis?",
            options: [
              "Litigation is expensive whoever wins",
              "Burdens shift during a case",
              "Courts rarely apply Hepps consistently",
              "Most claims settle before burdens are assigned",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the practical advice is to confirm the checkable assertions rather than rely on the plaintiff's burden.",
            sourceLessonSlug: "what-defamation-requires",
          },
          {
            prompt: "Which of these does the course explicitly say actual malice is not?",
            options: [
              "Aggressive reporting",
              "Reckless disregard for truth",
              "Knowledge that a statement was false",
              "Publishing something you seriously doubted",
            ],
            correctIndex: 0,
            explanation:
              "Along with ill will, bias, and a grudge. The standard is about the reporter's relationship to the truth of the statement.",
            sourceLessonSlug: "actual-malice",
          },
          {
            prompt: "What does the course recommend doing before publishing anything accusatory?",
            options: [
              "Identify the checkable factual sentences and confirm each",
              "Have the subject review the passage in advance",
              "Attribute the accusation rather than assert it",
              "Move the accusation below the fold",
            ],
            correctIndex: 0,
            explanation:
              "To the standard the verification course sets, because getting the fact right is what helps.",
            sourceLessonSlug: "what-defamation-requires",
          },
          {
            prompt: "Which two categories does the public-figure question split into?",
            options: [
              "All-purpose and limited-purpose",
              "Elected and appointed",
              "National and local",
              "Voluntary and involuntary",
            ],
            correctIndex: 0,
            explanation:
              "All-purpose figures are famous generally; limited-purpose figures are public only as to a controversy they entered.",
            sourceLessonSlug: "actual-malice",
          },
          {
            prompt: "What does the course say a reporter is expected to do about legal questions?",
            options: [
              "Notice them early enough that somebody qualified still has options",
              "Answer them from the principles the course sets out",
              "Refer every published sentence to counsel before filing",
              "Defer entirely to the editor's judgment",
            ],
            correctIndex: 0,
            explanation:
              "Recognizing the question is the reporter's job. Answering it is not, and the course says so in its first lesson and its last.",
            sourceLessonSlug: "not-legal-advice",
          },
          {
            prompt: "Why does the course say a story can be publishable and still expose you?",
            options: [
              "Gathering and publishing are judged under different rules",
              "Because truth is not a defense to defamation",
              "Because federal protection does not apply to local outlets",
              "Because publication protection expires after a period",
            ],
            correctIndex: 0,
            explanation:
              "The two questions are asked separately, answered separately, and lost separately, which is the second section of the course.",
            sourceLessonSlug: "not-legal-advice",
          },
        ],
      },
    },
    // ── Section 2 ───────────────────────────────────────────────────────────────────────────
    {
      slug: "four-privacy-torts",
      title: "5 · Four privacy torts, and which one you actually meet",
      section: "Section 2 · Privacy and how you got it",
      body: `Privacy is one word covering four different claims with four different elements. Reporters treat it as a single vague risk, which is why they misjudge which one they are near.

**The four, as American tort law generally frames them.** Intrusion upon seclusion: intruding on somebody's private affairs in a way highly offensive to a reasonable person. Public disclosure of private facts: publicizing private information that is highly offensive and not of legitimate public concern. False light: publicizing something that places a person in a false light highly offensive to a reasonable person. And appropriation: using somebody's name or likeness for commercial advantage.

**Not every state recognizes all four.** False light in particular is rejected in a number of jurisdictions as duplicating defamation. Which ones, and with what elements, is state law and is exactly the sort of question a lawyer answers in a sentence and a course cannot.

**The one a reporter actually meets is intrusion**, and this is the lesson's point. Intrusion is about the GATHERING, not the publishing. It can be complete before a word is written, it is not cured by the story being true or important, and it is where hidden recording, entering private space, and persistent surveillance live. A reporter who thinks about privacy only at publication is watching the wrong end of the process.

**Public disclosure of private facts is narrower than reporters fear**, because legitimate public concern is a real limit and courts have generally read it broadly for news. It is still live for medical information, sexual history, and material about people who are not public in any sense.

**And truth is not a defense to all of them.** Truth defeats defamation. It does not defeat intrusion, where the whole claim is about how you got it. It does not defeat public disclosure of private facts, where the material is true by definition. That single sentence is the most commonly missed fact in this section.

**Appropriation is mostly not a reporter's problem**, because news use is generally not the commercial exploitation the tort targets, but it becomes one at the edges: promotional use, merchandise, and material republished by a marketing department.

:::reveal Which privacy tort is about gathering rather than publishing, and what follows? ||| Intrusion upon seclusion. It can be complete before a word is written and it is not cured by the story being true or important.

:::reveal Why is truth not a general defense across the privacy torts? ||| Truth defeats defamation. It does not defeat intrusion, where the claim is about how you got it, and it does not defeat public disclosure of private facts, where the material is true by definition.

:::reveal Which of the four is rejected in a number of states, and why? ||| False light, on the ground that it duplicates defamation. Which states recognize which torts, and with what elements, is state law.

## Vocabulary
- **Intrusion upon seclusion**: a claim about the manner of gathering, complete before publication and unaffected by truth.
- **Public disclosure of private facts**: publicizing true but highly offensive private information not of legitimate public concern.
- **False light**: publicizing a highly offensive false impression, a tort several states decline to recognize.
- **Appropriation**: commercial use of a name or likeness, mostly outside news use and live at the promotional edges.

## Sources
- Reporters Committee for Freedom of the Press. (n.d.). *Reporters Committee legal guides*. https://www.rcfp.org/
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "newsgathering-liability",
      title: "6 · How you got it is judged separately",
      section: "Section 2 · Privacy and how you got it",
      body: `The constitutional protections that make American publishing hard to punish do not extend to generally applicable laws about conduct. A reporter is not exempt from trespass, fraud, or contract law because the resulting story was true and important.

**The principle, stated by the Supreme Court in a case this track has already met.** *Cohen v. Cowles Media Co.*, 501 U.S. 663 (1991), held that the First Amendment does not bar a promissory estoppel claim against a newspaper that broke a promise of confidentiality, because generally applicable law may be applied to the press as to anyone else. The promise lesson in REPORT-00 used it for source relationships. Here it is the general rule: laws about conduct apply to you.

**What that reaches in practice.** Trespass on private property. Misrepresentation used to obtain access or employment. Breach of a contract or a duty owed to an employer while working undercover. Violations of recording statutes. Interference with an investigation. None of those turn on whether the resulting story was accurate.

**The case that made the point concrete for newsrooms.** In *Food Lion, Inc. v. Capital Cities/ABC, Inc.*, decided by the Fourth Circuit in 1999, reporters obtained jobs at a grocery chain using false applications and recorded conditions with hidden cameras. The defamation exposure did not carry, and liability arising from the conduct of getting the story is what survived. Read the decision itself rather than a summary of it, including this one, because how far it reaches is exactly the kind of thing summaries flatten.

**The working conclusion, which is not that undercover work is forbidden.** It is that undercover and deceptive newsgathering is a decision with a legal cost that has to be priced in advance, by a lawyer, alongside the editorial justification. Most newsrooms that do it have a written standard requiring that the information be of significant public importance, that there be no reasonable alternative means, and that the decision be made above the reporter's level. Adopt a version of that even if your outlet has none.

**Publication protection does not cure gathering exposure, and this bears repeating.** You can be entitled to publish something and still be liable for how you obtained it. The two questions are asked separately, answered separately, and lost separately.

**The everyday version, which matters more than the dramatic one.** Most gathering exposure is not hidden cameras. It is walking through an unlocked door into a non-public area, recording a call across a state line, or telling somebody you are not a reporter when they ask. Those are ordinary afternoons, and they are where the risk actually is.

:::reveal What did Cohen v. Cowles Media establish as a general rule about conduct? ||| That generally applicable law may be applied to the press like anyone else, so laws about conduct reach reporters regardless of the accuracy or importance of the resulting story.

:::reveal What survived in the Food Lion litigation, and what did not? ||| Liability arising from the conduct of getting the story survived; the defamation exposure did not carry. Read the decision rather than a summary, including this one.

:::reveal Where is most newsgathering exposure actually found? ||| Not hidden cameras. Walking through an unlocked door into a non-public area, recording a call across a state line, and denying you are a reporter when asked.

## Vocabulary
- **Generally applicable law**: a rule about conduct that applies to everybody, and therefore to the press.
- **Undercover standard**: a written newsroom test requiring significant public importance, no reasonable alternative, and a decision above the reporter.
- **Gathering exposure**: liability arising from how material was obtained, unaffected by whether publication was protected.
- **Non-public area**: space a member of the public is not invited into, where an unlocked door is not an invitation.

## Sources
- Cohen v. Cowles Media Co., 501 U.S. 663 (1991). https://supreme.justia.com/cases/federal/us/501/663/
- Food Lion, Inc. v. Capital Cities/ABC, Inc. (4th Cir. 1999).
- Reporters Committee for Freedom of the Press. (n.d.). *Reporters Committee legal guides*. https://www.rcfp.org/`,
    },
    {
      slug: "recording-consent",
      title: "7 · Recording, consent, and what varies",
      section: "Section 2 · Privacy and how you got it",
      body: `Recording is the legal question a reporter meets most often and the one where a wrong assumption is easiest to make, because the rule genuinely differs from state to state and reporters cross state lines with a phone.

**The federal floor.** The federal wiretap statute, 18 U.S.C. 2511, generally permits a person who is a party to a communication to record it, or to record with the prior consent of a party, where it is not done for a criminal or tortious purpose. That is the one-party rule, and it is a floor rather than the whole answer.

**States can and do require more.** A number of states require the consent of all parties to a private communication, and the penalties in those states can be criminal. Which states, and what counts as a private communication in each, is state law that changes, and the Reporters Committee maintains a state-by-state recording guide that is the right first stop.

**The cross-border problem, which catches careful people.** When a call has parties in two states with different rules, which rule applies is not obvious and has been litigated. The safe operating assumption for a reporter is the stricter of the two, and the safe habit is to ask.

**Indiana as the worked example, with an explicit refusal.** Indiana is commonly described as a one-party consent state for the recording of conversations, and this course does not print a statutory section or the operative language for that proposition because this pass could not read the current Indiana text against a primary source. Read the current statute and your state's chapter in the Reporters Committee's recording guide before relying on any characterization, including this one. A source check is filed so the citation can be added once verified.

**The habit that makes the question mostly disappear.** Say you are recording, say it is for accuracy, and record the person agreeing. It costs eight seconds, it satisfies an all-party rule wherever one applies, it removes the ethical question the interviewing course raised, and it produces a better relationship with the source. There are narrow circumstances where announcing defeats the purpose, and those are exactly the circumstances that need a lawyer first.

**Recording in public, and of officials, is a different question.** Courts have generally recognized a right to record police and other officials performing their duties in public, subject to reasonable time, place, and manner restrictions, and the details vary by circuit. Knowing your circuit's position before you need it is worth an hour, and the Reporters Committee tracks it.

**Body cameras, doorbells, and everything else that records.** Material recorded by somebody else and handed to you raises the separate question the next section covers: what you may publish when the person who obtained it may not have been entitled to.

:::reveal What is the federal one-party rule, and why is it only a floor? ||| Under 18 U.S.C. 2511 a party to a communication may generally record it, or record with a party's consent, absent a criminal or tortious purpose. States may require more, and a number require all-party consent with criminal penalties.

:::reveal What is the safe operating assumption on a cross-border call? ||| The stricter of the two states' rules, because which rule applies is not obvious and has been litigated. The safe habit is to ask.

:::reveal Why does this course refuse to print an Indiana recording citation? ||| Because this pass could not read the current Indiana text against a primary source, and a wrong statutory citation in a legal course is worse than none. A source check is filed so it can be added once verified.

## Vocabulary
- **One-party consent**: the rule permitting recording by a participant, or with a participant's permission, which is the federal floor.
- **All-party consent**: a state rule requiring everyone on a private communication to agree, sometimes with criminal penalties.
- **Cross-border recording**: a call whose parties are in states with different rules, where the stricter rule is the safe assumption.
- **Announced recording**: saying you are recording and capturing the agreement, which satisfies an all-party rule and costs eight seconds.

## Sources
- Electronic Communications Privacy Act provisions, 18 U.S.C. 2511. https://www.law.cornell.edu/uscode/text/18/2511
- Reporters Committee for Freedom of the Press. (n.d.). *Reporter's recording guide*. https://www.rcfp.org/`,
    },
    {
      slug: "quiz-privacy-and-gathering",
      title: "8 · Knowledge check: privacy and how you got it",
      section: "Section 2 · Privacy and how you got it",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "How many distinct privacy torts does American tort law generally recognize?",
            options: [
              "Four",
              "One, covering all invasions of privacy",
              "Two, split between gathering and publishing",
              "Six, matching the categories in the professional code",
            ],
            correctIndex: 0,
            explanation:
              "Intrusion upon seclusion, public disclosure of private facts, false light, and appropriation.",
            sourceLessonSlug: "four-privacy-torts",
          },
          {
            prompt: "Which privacy tort is about the gathering rather than the publishing?",
            options: [
              "Intrusion upon seclusion",
              "Public disclosure of private facts",
              "False light",
              "Appropriation",
            ],
            correctIndex: 0,
            explanation:
              "It can be complete before a word is written, and it is not cured by the story being true or important.",
            sourceLessonSlug: "four-privacy-torts",
          },
          {
            prompt: "What lives inside the intrusion tort?",
            options: [
              "Hidden recording, entering private space, and persistent surveillance",
              "Publishing medical information about a private person",
              "Using a photograph in a promotional campaign",
              "Creating a false impression through selective quotation",
            ],
            correctIndex: 0,
            explanation:
              "Which is why a reporter who thinks about privacy only at publication is watching the wrong end of the process.",
            sourceLessonSlug: "four-privacy-torts",
          },
          {
            prompt: "Which privacy tort do a number of states decline to recognize?",
            options: [
              "False light",
              "Intrusion upon seclusion",
              "Appropriation",
              "Public disclosure of private facts",
            ],
            correctIndex: 0,
            explanation:
              "On the ground that it duplicates defamation. Which states recognize which torts, with what elements, is state law.",
            sourceLessonSlug: "four-privacy-torts",
          },
          {
            prompt: "Why is truth not a general defense across the privacy torts?",
            options: [
              "Intrusion is about how you got it and disclosure concerns true material",
              "Because truth must be proven by the defendant in privacy cases",
              "Because privacy claims do not require a false statement to be identified",
              "Because privacy is a federal claim rather than a state one",
            ],
            correctIndex: 0,
            explanation:
              "It is the most commonly missed fact in this section. Truth defeats defamation and does not defeat either of those two.",
            sourceLessonSlug: "four-privacy-torts",
          },
          {
            prompt: "What limits the public disclosure tort in practice?",
            options: [
              "Legitimate public concern, which courts have read broadly for news",
              "A requirement that the plaintiff be a private figure",
              "A one-year statute of limitations in most states",
              "A requirement of proven financial loss",
            ],
            correctIndex: 0,
            explanation:
              "It remains live for medical information, sexual history, and material about people who are not public in any sense.",
            sourceLessonSlug: "four-privacy-torts",
          },
          {
            prompt: "When does appropriation become a reporter's problem?",
            options: [
              "At the promotional and merchandising edges",
              "Whenever a person's photograph appears in a news story",
              "Whenever a name is used without written permission",
              "Whenever a story is republished by another outlet",
            ],
            correctIndex: 0,
            explanation:
              "News use is generally not the commercial exploitation the tort targets, but material republished by a marketing department is a different question.",
            sourceLessonSlug: "four-privacy-torts",
          },
          {
            prompt: "What general principle does Cohen v. Cowles Media establish about conduct?",
            options: [
              "Generally applicable law may be applied to the press like anyone else",
              "The press is exempt from tort claims arising from true reporting",
              "Only statutes that name the press may be applied to it",
              "Contract claims against publishers are constitutionally barred",
            ],
            correctIndex: 0,
            explanation:
              "501 U.S. 663 (1991). The promise lesson used it for source relationships; here it is the general rule that laws about conduct apply to you.",
            sourceLessonSlug: "newsgathering-liability",
          },
          {
            prompt: "Which of these is newsgathering exposure rather than publication exposure?",
            options: [
              "Trespass on private property",
              "A false statement of fact about a named person",
              "A parody a public figure found offensive",
              "A summary of a filed lawsuit's allegations",
            ],
            correctIndex: 0,
            explanation:
              "With misrepresentation to obtain access, breach of a duty owed while working undercover, recording violations, and interference with an investigation.",
            sourceLessonSlug: "newsgathering-liability",
          },
          {
            prompt: "Does newsgathering liability turn on whether the story was accurate?",
            options: [
              "No",
              "Yes, an accurate story defeats a gathering claim",
              "Yes, where the subject is a public official",
              "Only where the material was published",
            ],
            correctIndex: 0,
            explanation:
              "None of the named conduct claims turn on the accuracy or importance of the resulting story.",
            sourceLessonSlug: "newsgathering-liability",
          },
          {
            prompt: "What happened in the Food Lion litigation?",
            options: [
              "Reporters obtained jobs with false applications and used hidden cameras",
              "A newspaper published a confidential source's name",
              "A broadcaster aired an illegally intercepted call",
              "A reporter refused to testify before a grand jury",
            ],
            correctIndex: 0,
            explanation:
              "Decided by the Fourth Circuit in 1999. The defamation exposure did not carry, and liability arising from the conduct of getting the story is what survived.",
            sourceLessonSlug: "newsgathering-liability",
          },
          {
            prompt: "What does the course tell readers to do about the Food Lion decision?",
            options: [
              "Read the decision rather than a summary, including this one",
              "Treat the summary here as sufficient for practical purposes",
              "Assume it has been superseded by later authority",
              "Apply it only within the Fourth Circuit",
            ],
            correctIndex: 0,
            explanation:
              "How far it reaches is exactly the kind of thing summaries flatten.",
            sourceLessonSlug: "newsgathering-liability",
          },
          {
            prompt: "What is the course's conclusion about undercover work?",
            options: [
              "It is a decision with a legal cost that has to be priced in advance",
              "It is forbidden by the professional code",
              "It is protected wherever the resulting story is accurate",
              "It is safe where the reporter does not sign anything false",
            ],
            correctIndex: 0,
            explanation:
              "Priced by a lawyer, alongside the editorial justification, rather than decided by a reporter under deadline.",
            sourceLessonSlug: "newsgathering-liability",
          },
          {
            prompt: "What three conditions does a written undercover standard typically require?",
            options: [
              "Significant public importance, no reasonable alternative, and a decision above the reporter",
              "Legal review, insurance coverage, and an editor's signature",
              "Two sources, a records request, and a right of reply",
              "A named subject, a public official, and a public place",
            ],
            correctIndex: 0,
            explanation:
              "The course tells a reporter to adopt a version of it even where their outlet has none.",
            sourceLessonSlug: "newsgathering-liability",
          },
          {
            prompt: "Where is most newsgathering exposure actually found?",
            options: [
              "Unlocked doors, cross-border calls, and denying you are a reporter",
              "Hidden cameras and long-term undercover placements",
              "Payments to sources for exclusive access",
              "Publishing before an official investigation concludes",
            ],
            correctIndex: 0,
            explanation:
              "Those are ordinary afternoons, and they are where the risk actually is.",
            sourceLessonSlug: "newsgathering-liability",
          },
          {
            prompt: "What does the federal wiretap statute generally permit?",
            options: [
              "A party to a communication to record it, absent a criminal or tortious purpose",
              "Any person to record any communication for journalistic purposes",
              "Recording only with the written consent of all parties",
              "Recording only where a court has authorized it",
            ],
            correctIndex: 0,
            explanation:
              "18 U.S.C. 2511, and it also permits recording with the prior consent of a party. It is a floor rather than the whole answer.",
            sourceLessonSlug: "recording-consent",
          },
          {
            prompt: "What do a number of states require beyond the federal floor?",
            options: [
              "The consent of all parties to a private communication",
              "Written notice to each party before a call begins",
              "Registration of recording devices with the state",
              "A journalistic purpose stated at the outset",
            ],
            correctIndex: 0,
            explanation:
              "And the penalties in those states can be criminal, which is why the state rule matters more than the federal one.",
            sourceLessonSlug: "recording-consent",
          },
          {
            prompt: "What is the safe operating assumption on a cross-border call?",
            options: [
              "The stricter of the two states' rules",
              "The rule of the state where the reporter is located",
              "The rule of the state where the source is located",
              "The federal one-party rule, which preempts both",
            ],
            correctIndex: 0,
            explanation:
              "Which rule applies is not obvious and has been litigated, and the safe habit is to ask.",
            sourceLessonSlug: "recording-consent",
          },
          {
            prompt: "Why does this course decline to print an Indiana recording citation?",
            options: [
              "This pass could not read the current text against a primary source",
              "Because Indiana's recording statute is not publicly available",
              "Because Indiana law is superseded by the federal statute",
              "Because the rule differs by county within the state",
            ],
            correctIndex: 0,
            explanation:
              "Indiana is commonly described as a one-party consent state, and the course names that characterization without printing a section or operative language it could not verify.",
            sourceLessonSlug: "recording-consent",
          },
          {
            prompt: "What habit makes the recording question mostly disappear?",
            options: [
              "Say you are recording, say it is for accuracy, and record the agreement",
              "Record everything and decide later what to use",
              "Take notes instead of recording in unfamiliar states",
              "Ask the source to send a written statement afterward",
            ],
            correctIndex: 0,
            explanation:
              "Eight seconds, satisfies an all-party rule wherever one applies, and removes the ethical question the interviewing course raised.",
            sourceLessonSlug: "recording-consent",
          },
          {
            prompt: "What does the course say about circumstances where announcing defeats the purpose?",
            options: [
              "Those are exactly the circumstances that need a lawyer first",
              "Those are the circumstances where the federal floor governs",
              "Those are covered by the professional code's undercover exception",
              "Those do not arise for reporters covering public bodies",
            ],
            correctIndex: 0,
            explanation:
              "The habit handles the ordinary case, and the exception is precisely where general principles stop being enough.",
            sourceLessonSlug: "recording-consent",
          },
          {
            prompt: "What have courts generally recognized about recording officials in public?",
            options: [
              "A right to record, subject to reasonable time, place, and manner limits",
              "A prohibition absent the official's consent",
              "A right that applies only to accredited journalists",
              "A rule identical in every federal circuit",
            ],
            correctIndex: 0,
            explanation:
              "The details vary by circuit, and knowing your circuit's position before you need it is worth an hour.",
            sourceLessonSlug: "recording-consent",
          },
          {
            prompt: "What separate question does material recorded by somebody else raise?",
            options: [
              "What you may publish when the person who obtained it may not have been entitled to",
              "Whether the recording is admissible in a defamation action",
              "Whether the recorder must be named in the story",
              "Whether the state's shield law protects the recording",
            ],
            correctIndex: 0,
            explanation:
              "Which is the subject of the next section, and the reason body cameras and doorbell footage get their own treatment.",
            sourceLessonSlug: "recording-consent",
          },
          {
            prompt: "What is intrusion upon seclusion, precisely?",
            options: [
              "Intruding on private affairs in a way highly offensive to a reasonable person",
              "Publishing private information of no public concern",
              "Creating a highly offensive false impression",
              "Using a name or likeness for commercial advantage",
            ],
            correctIndex: 0,
            explanation:
              "It is the one a reporter actually meets, and it concerns the gathering rather than the publication.",
            sourceLessonSlug: "four-privacy-torts",
          },
          {
            prompt: "What is public disclosure of private facts?",
            options: [
              "Publicizing highly offensive private information not of legitimate public concern",
              "Publishing a false statement about a private individual",
              "Recording a conversation without a party's consent",
              "Entering private property to obtain a story",
            ],
            correctIndex: 0,
            explanation:
              "The material is true by definition, which is why truth is not a defense to it.",
            sourceLessonSlug: "four-privacy-torts",
          },
          {
            prompt: "What is false light?",
            options: [
              "Publicizing a highly offensive false impression of a person",
              "Publishing true material in a misleading order",
              "Attributing a quotation to the wrong speaker",
              "Omitting a person's response from a story",
            ],
            correctIndex: 0,
            explanation:
              "It is rejected in a number of jurisdictions as duplicating defamation, which is why knowing your state's position matters.",
            sourceLessonSlug: "four-privacy-torts",
          },
          {
            prompt: "What does the course call the most commonly missed fact in the privacy section?",
            options: [
              "Truth is not a defense to all of the privacy torts",
              "Privacy claims require proof of financial loss",
              "Privacy claims are exclusively federal",
              "Privacy claims expire after one year",
            ],
            correctIndex: 0,
            explanation:
              "Truth defeats defamation. It does not defeat intrusion, and it does not defeat public disclosure of private facts.",
            sourceLessonSlug: "four-privacy-torts",
          },
          {
            prompt: "What is a non-public area, for gathering purposes?",
            options: [
              "Space the public is not invited into, where an unlocked door is not an invitation",
              "Any space owned privately rather than by a public body",
              "Any space where a sign restricts entry",
              "Any space where an official has asked you to leave",
            ],
            correctIndex: 0,
            explanation:
              "It is the everyday version of gathering exposure, and it is a more common failure than hidden cameras.",
            sourceLessonSlug: "newsgathering-liability",
          },
          {
            prompt: "What does publication protection do for gathering exposure?",
            options: [
              "Nothing, because the two questions are asked separately",
              "It cures it where the story is of public concern",
              "It cures it where the reporter acted in good faith",
              "It cures it where the material was never published",
            ],
            correctIndex: 0,
            explanation:
              "You can be entitled to publish something and still be liable for how you obtained it.",
            sourceLessonSlug: "newsgathering-liability",
          },
          {
            prompt: "What is announced recording worth in an all-party state?",
            options: [
              "It satisfies the rule",
              "It reduces the penalty but does not satisfy the rule",
              "It has no effect, since consent must be written",
              "It applies only where the other party is a public official",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the eight-second habit is the practical answer to a rule that differs across state lines.",
            sourceLessonSlug: "recording-consent",
          },
          {
            prompt: "Why does the course call recording the question a reporter meets most often?",
            options: [
              "Reporters cross state lines with a phone",
              "Because every interview must be recorded under professional standards",
              "Because recording is the only step with criminal exposure",
              "Because outlets require recordings for legal review",
            ],
            correctIndex: 0,
            explanation:
              "And the rule genuinely differs from state to state, which makes a wrong assumption easy to make.",
            sourceLessonSlug: "recording-consent",
          },
          {
            prompt: "What kind of penalty can an all-party consent state impose?",
            options: [
              "Criminal",
              "Only civil damages to the recorded party",
              "Only an injunction against publication",
              "Only exclusion of the recording from evidence",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the Reporters Committee's state-by-state recording guide is the right first stop rather than an assumption.",
            sourceLessonSlug: "recording-consent",
          },
          {
            prompt: "What does the course say about hidden cameras relative to everyday exposure?",
            options: [
              "Most exposure is not hidden cameras",
              "Hidden cameras are the primary source of gathering claims",
              "Hidden cameras are lawful wherever one-party consent applies",
              "Hidden cameras are covered by publication protection",
            ],
            correctIndex: 0,
            explanation:
              "Unlocked doors, cross-border calls, and denying you are a reporter are ordinary afternoons and are where the risk actually is.",
            sourceLessonSlug: "newsgathering-liability",
          },
          {
            prompt: "What was at issue in Cohen v. Cowles Media, for this section's purposes?",
            options: [
              "Whether the First Amendment barred a promissory estoppel claim",
              "Whether a newspaper could be searched without a subpoena",
              "Whether a reporter could refuse to testify",
              "Whether a broadcaster could air an intercepted call",
            ],
            correctIndex: 0,
            explanation:
              "The Court held it did not, which is the general rule that laws about conduct apply to the press as to anyone.",
            sourceLessonSlug: "newsgathering-liability",
          },
          {
            prompt: "Which claim can be complete before a word is published?",
            options: [
              "Intrusion",
              "Defamation",
              "False light",
              "Public disclosure of private facts",
            ],
            correctIndex: 0,
            explanation:
              "Which is why privacy has to be considered at the gathering stage rather than only at the publication stage.",
            sourceLessonSlug: "four-privacy-torts",
          },
          {
            prompt: "What is the practical reason the course gives for adopting an undercover standard personally?",
            options: [
              "Many outlets have none",
              "Because outlets require reporters to sign one",
              "Because it satisfies the professional code's requirements",
              "Because it transfers liability to the outlet",
            ],
            correctIndex: 0,
            explanation:
              "Significant public importance, no reasonable alternative means, and a decision made above the reporter's level.",
            sourceLessonSlug: "newsgathering-liability",
          },
          {
            prompt: "Which of the four privacy torts is mostly not a reporter's problem?",
            options: [
              "Appropriation",
              "Intrusion",
              "Public disclosure of private facts",
              "False light",
            ],
            correctIndex: 0,
            explanation:
              "News use is generally not the commercial exploitation the tort targets, though promotional and merchandising use is a different question.",
            sourceLessonSlug: "four-privacy-torts",
          },
          {
            prompt: "What does the course say a reporter watching only publication is doing?",
            options: [
              "Watching the wrong end of the process",
              "Applying the correct sequence for privacy analysis",
              "Following the professional code's guidance",
              "Reducing exposure to the greatest extent available",
            ],
            correctIndex: 0,
            explanation:
              "Because the tort a reporter actually meets is complete at gathering.",
            sourceLessonSlug: "four-privacy-torts",
          },
          {
            prompt: "Which subjects keep public disclosure of private facts live?",
            options: [
              "Medical information, sexual history, and non-public people",
              "Financial records of elected officials",
              "Contract awards and procurement decisions",
              "Statements made at public meetings",
            ],
            correctIndex: 0,
            explanation:
              "Legitimate public concern is a real limit that courts have generally read broadly for news, but not without edges.",
            sourceLessonSlug: "four-privacy-torts",
          },
          {
            prompt: "What does the course say about the phrase generally applicable law?",
            options: [
              "It means a rule about conduct that applies to everybody, including the press",
              "It means a statute that names the press specifically",
              "It means a rule that has been upheld in every circuit",
              "It means a rule with no First Amendment exception at all",
            ],
            correctIndex: 0,
            explanation:
              "Which is why trespass, fraud, and contract law reach reporters regardless of what the resulting story showed.",
            sourceLessonSlug: "newsgathering-liability",
          },
          {
            prompt: "What is the relationship between this section and the interviewing course's recording guidance?",
            options: [
              "Announced recording answers the ethical and the legal question at once",
              "The interviewing course's rule is stricter than the law requires",
              "The legal rule replaces the ethical one where they conflict",
              "They address different kinds of interview and do not overlap",
            ],
            correctIndex: 0,
            explanation:
              "Saying you are recording and why costs eight seconds and satisfies an all-party rule wherever one applies.",
            sourceLessonSlug: "recording-consent",
          },
          {
            prompt: "What does the course recommend knowing before you need it, about recording officials?",
            options: [
              "Your circuit's position on the right to record in public",
              "The outlet's insurance position on field recording",
              "Whether the official consents to being recorded",
              "Whether the state requires a permit for recording equipment",
            ],
            correctIndex: 0,
            explanation:
              "Courts have generally recognized such a right subject to reasonable limits, and the details vary by circuit.",
            sourceLessonSlug: "recording-consent",
          },
          {
            prompt: "Which is an example of misrepresentation as gathering exposure?",
            options: [
              "Obtaining employment with a false application",
              "Declining to state your outlet when not asked",
              "Reporting on a body you have covered before",
              "Requesting records without stating a purpose",
            ],
            correctIndex: 0,
            explanation:
              "It is one of the named forms, along with trespass, breach of a duty owed to an employer, recording violations, and interference.",
            sourceLessonSlug: "newsgathering-liability",
          },
          {
            prompt: "What did the Food Lion outcome demonstrate about defamation and conduct claims?",
            options: [
              "They can come apart, with conduct liability surviving",
              "They rise and fall together in undercover cases",
              "Conduct claims are barred where defamation fails",
              "Defamation is the only viable theory against a broadcaster",
            ],
            correctIndex: 0,
            explanation:
              "Which is the concrete version of the section's whole point that gathering and publishing are judged separately.",
            sourceLessonSlug: "newsgathering-liability",
          },
          {
            prompt: "What does the federal wiretap statute exclude from its permission?",
            options: [
              "Recording for a criminal or tortious purpose",
              "Recording by anyone other than a licensed journalist",
              "Recording of any conversation with a public official",
              "Recording that crosses a state line",
            ],
            correctIndex: 0,
            explanation:
              "The one-party rule at 18 U.S.C. 2511 operates absent such a purpose.",
            sourceLessonSlug: "recording-consent",
          },
          {
            prompt: "Where should a reporter start on their own state's recording rule?",
            options: [
              "The Reporters Committee's state-by-state recording guide",
              "The outlet's internal legal memo",
              "A summary published by a professional association",
              "The federal statute, which governs in every state",
            ],
            correctIndex: 0,
            explanation:
              "And then the state's own text, because the guide orients you and the statute is what you rely on.",
            sourceLessonSlug: "recording-consent",
          },
          {
            prompt: "What does the course say about the phrase invasion of privacy as a single risk?",
            options: [
              "It fuses four claims with four different elements",
              "It is the correct legal term in most states",
              "It refers only to publication rather than gathering",
              "It is a federal claim distinct from the state torts",
            ],
            correctIndex: 0,
            explanation:
              "Treating it as one vague risk is why reporters misjudge which one they are actually near.",
            sourceLessonSlug: "four-privacy-torts",
          },
          {
            prompt: "Which question does a marketing department's reuse of a story raise?",
            options: [
              "Appropriation",
              "Intrusion",
              "False light",
              "Public disclosure of private facts",
            ],
            correctIndex: 0,
            explanation:
              "Promotional use, merchandise, and republication by a marketing department are the edges where news use stops protecting.",
            sourceLessonSlug: "four-privacy-torts",
          },
          {
            prompt: "What does the course say about pricing an undercover decision?",
            options: [
              "By a lawyer, in advance, alongside the editorial justification",
              "By the reporter, at the moment access becomes available",
              "By the editor, after the material has been gathered",
              "By the outlet's insurer, before the assignment is made",
            ],
            correctIndex: 0,
            explanation:
              "The conclusion is not that undercover work is forbidden. It is that the cost is priced before rather than discovered after.",
            sourceLessonSlug: "newsgathering-liability",
          },
          {
            prompt: "What is the ordinary-afternoon version of denying you are a reporter?",
            options: [
              "Telling somebody you are not a reporter when they ask",
              "Declining to name your outlet in a crowded room",
              "Using a personal phone rather than a work phone",
              "Attending a public meeting without press credentials",
            ],
            correctIndex: 0,
            explanation:
              "It sits alongside walking through an unlocked door into a non-public area and recording a call across a state line.",
            sourceLessonSlug: "newsgathering-liability",
          },
          {
            prompt: "Why does the course describe the federal one-party rule as a floor?",
            options: [
              "States may require more, and a number do",
              "Because it applies only to interstate communications",
              "Because it expires unless renewed by Congress",
              "Because it covers only recordings made by journalists",
            ],
            correctIndex: 0,
            explanation:
              "And in all-party states the penalties can be criminal, which makes the state rule the operative one.",
            sourceLessonSlug: "recording-consent",
          },
        ],
      },
    },
    // ── Section 3 ───────────────────────────────────────────────────────────────────────────
    {
      slug: "shield-and-privilege",
      title: "9 · Shield protection, and what actually exists",
      section: "Section 3 · Sources, subpoenas, and materials",
      body: `A reporter's ability to refuse to identify a source is much weaker and much more variable than most reporters assume, and knowing that before you make a promise is the entire practical point.

**What the Supreme Court decided.** In *Branzburg v. Hayes*, 408 U.S. 665 (1972), the Court rejected the claim that the First Amendment gives reporters a privilege to refuse to testify before a grand jury about information obtained in confidence. Lower courts have since read Branzburg in a range of ways, and some federal courts have recognized a qualified privilege in some circumstances. The honest summary is that federal protection is contested, uneven, and not something to rely on.

**There is no general federal shield statute.** What exists federally is a Justice Department policy on obtaining information from members of the news media, at 28 C.F.R. 50.10, which constrains the Department's own conduct. It is an internal policy rather than a privilege you hold, it has been revised more than once, and it binds nobody outside the Department.

**State shield laws are where the real protection is, and they vary enormously.** Whether a state has one at all, who counts as covered, whether the protection is absolute or qualified, whether it reaches unpublished material as well as source identity, and whether it survives a criminal defendant's subpoena are all separate questions with different answers in different states.

**Indiana as the worked example, and the part that should stop you.** Indiana's shield is at Indiana Code 34-46-4-1 and 34-46-4-2, and it dates to 1941. As the Reporters Committee summarizes it, section 2 provides that a person described in section 1 "shall not be compelled to disclose in any legal proceedings or elsewhere the source of any information procured or obtained in the course of the person's employment," covering information "published or not published" and "broadcast or not broadcast" (Reporters Committee for Freedom of the Press, n.d.).

Three features of that, and each one matters more than the fact that a shield exists.

**It is absolute, not qualified, as to state matters.** No balancing test, no showing of need that overcomes it. That is stronger than most states.

**It protects the SOURCE'S IDENTITY, and only that.** Not your notes, not your unpublished footage, not the information itself. A subpoena that asks what you learned rather than who told you is asking for something this statute does not cover.

**And section 1 defines who is covered by EMPLOYMENT.** The Reporters Committee describes the covered class as people employed by newspapers, periodicals with regular circulation, recognized press associations, wire services, or licensed radio and television stations, as owners, editors, or reporters drawing income from legitimate news work. Read that list against how journalism is actually done now. A freelancer with no employer. A newsletter writer. A podcaster. **A Documenter attending a public meeting for a civic program.** None of those is obviously an owner, editor, or reporter employed by a newspaper or a licensed broadcaster, and a 1941 list was not written with them in mind.

**Which is the whole reason this lesson exists.** The danger is not that you have no protection. It is believing you have protection you do not have, and making a promise to a source on the strength of it. If you are not plainly inside that employment list, assume you are outside it until a lawyer tells you otherwise, and make the promise you can actually keep.

**One more boundary.** The privilege reaches state matters. It does not control a federal proceeding or a federal grand jury, where Branzburg governs and there is no federal shield statute.

**What is still open here.** The above is the Reporters Committee's reading, which is an expert secondary source rather than the statute itself. This pass could not read the code text on the Indiana General Assembly's own site, which serves an application rather than a document to an automated reader. Read Indiana Code 34-46-4-1 for the covered list before you rely on your own place in it, and a narrowed source check is filed asking for exactly that verbatim text.

**The definitional problem to know about in advance.** Many shield statutes were written when a journalist meant an employee of a newspaper or a broadcaster. Whether they cover a freelancer, a newsletter writer, a documentary maker, or somebody publishing independently is a live question in many states, and the answer sometimes turns on whether you can show a journalistic purpose at the time you gathered the material.

**The practical consequence for how you make a promise.** The interviewing course told you to say what YOU will do rather than what will happen. This lesson is why. Before promising confidentiality, know your state's protection, know your employer's position on fighting a subpoena, and tell the source what you actually know.

**And the thing to do before a subpoena arrives rather than after.** Know who the outlet's lawyer is. Do not destroy anything once a dispute is foreseeable. And tell an editor and a lawyer immediately, because the deadlines for responding are short and the first response frequently decides the shape of everything after.

:::reveal What did Branzburg v. Hayes decide, and what is the honest summary of federal protection now? ||| It rejected a First Amendment privilege to refuse grand jury testimony about confidentially obtained information. Lower courts have read it in a range of ways, so federal protection is contested, uneven, and not something to rely on.

:::reveal What is 28 C.F.R. 50.10, and what is it not? ||| A Justice Department policy constraining the Department's own conduct when seeking information from the news media. It is not a privilege the reporter holds and it binds nobody outside the Department.

:::reveal What does Indiana's shield protect, and what does it not? ||| Only the identity of a source (Ind. Code 34-46-4-2), covering information published or not published and broadcast or not broadcast. It does NOT protect your notes, your unpublished material, or the information itself. It is absolute as to state matters and does not reach a federal proceeding.

:::reveal Why might a freelancer, a newsletter writer, or a Documenter not be covered by it? ||| Because section 1 defines the covered class by EMPLOYMENT: owners, editors, or reporters employed by newspapers, periodicals with regular circulation, press associations, wire services, or licensed broadcasters. A 1941 list did not anticipate them. The danger is not having no protection, it is believing you have protection you do not have and promising a source accordingly.

## Vocabulary
- **Reporter's privilege**: a claimed right to refuse to identify sources or produce material, rejected in Branzburg for grand juries and read variously since.
- **Shield law**: a state statute protecting journalists from compelled disclosure, varying in coverage, strength, and scope.
- **Qualified privilege**: protection that can be overcome on a showing, as opposed to absolute protection.
- **Covered person problem**: whether a shield statute written for newspaper and broadcast employees reaches independent publishers.

## Sources
- Branzburg v. Hayes, 408 U.S. 665 (1972). https://supreme.justia.com/cases/federal/us/408/665/
- U.S. Department of Justice policy regarding obtaining information from, or records of, members of the news media, 28 C.F.R. 50.10.
- Indiana Code 34-46-4. https://iga.in.gov/laws/2025/ic/titles/34
- Reporters Committee for Freedom of the Press. (n.d.). *Reporters Committee legal guides*. https://www.rcfp.org/
- Reporters Committee for Freedom of the Press. (n.d.). *The reporter's privilege compendium: Indiana*. https://www.rcfp.org/privilege-compendium/indiana/
- Ind. Code 34-46-4-1 (persons covered) and 34-46-4-2 (privilege). Indiana General Assembly. https://iga.in.gov/laws/current/ic/titles/34#34-46-4`,
    },
    {
      slug: "notes-and-materials",
      title: "10 · Notes, newsrooms, and the Privacy Protection Act",
      section: "Section 3 · Sources, subpoenas, and materials",
      body: `Source identity is one question. What happens to your notes, drafts, recordings, and unpublished photographs is a separate one with its own statute, and reporters routinely conflate them.

**Where the statute came from.** In *Zurcher v. Stanford Daily*, 436 U.S. 547 (1978), the Supreme Court held that the Fourth Amendment did not bar a search warrant for a newspaper office that was not itself suspected of crime. Congress responded with the Privacy Protection Act of 1980, 42 U.S.C. 2000aa, which restricts government searches and seizures of work product and documentary materials held by a person reasonably believed to be engaged in publishing, subject to exceptions.

**What the Act does and does not do.** It constrains government SEARCHES for such materials, generally pushing the government toward a subpoena instead. It does not stop a subpoena, it does not create a privilege against testifying, and its exceptions matter. Treat it as a reason to call a lawyer immediately rather than as an answer.

**Retention is a decision you make in advance, not during a dispute.** A written retention practice, applied consistently, is a defensible position. Deleting material once litigation or an investigation is reasonably foreseeable is a different thing entirely and can carry serious consequences of its own. The rule for a reporter is simple to state: decide your practice when nothing is happening, follow it, and stop deleting the moment anything is.

**What lives in more places than you think.** Cloud drives your employer administers, chat logs, calendars, phone backups, drafts in a content system, and the version history of a shared document. The source-hygiene lesson in REPORT-00 asked you to know where source material lives. This is the legal reason it mattered.

**Encryption and secure channels are useful and are not magic.** They protect material in transit and at rest against some threats. They do not stop a subpoena to you, they do not help if the other end of the conversation keeps everything, and they can create a false sense of protection you then pass on to a source. Tell sources what you actually can and cannot protect, which is the interviewing course's rule applied to technology.

**The single most useful preparation.** Know, before anything happens, who your outlet's lawyer is, whether the outlet will fight a subpoena on your behalf, and who owns your notes under your employment terms. A freelancer should assume none of those questions has been answered in their favor and ask them at the point of contract.

:::reveal What did Congress pass in response to Zurcher v. Stanford Daily, and what does it constrain? ||| The Privacy Protection Act of 1980, 42 U.S.C. 2000aa, which restricts government searches and seizures of work product and documentary materials held by people engaged in publishing, subject to exceptions.

:::reveal What does the Privacy Protection Act not do? ||| It does not stop a subpoena and it does not create a privilege against testifying. It generally pushes the government toward a subpoena rather than a search.

:::reveal What is the rule about retention and deletion? ||| Decide your practice when nothing is happening and follow it consistently, and stop deleting the moment a dispute or investigation is reasonably foreseeable.

## Vocabulary
- **Work product and documentary materials**: the categories of journalistic material the Privacy Protection Act addresses.
- **Retention practice**: a written, consistently applied rule about what is kept and for how long, decided before any dispute.
- **Reasonably foreseeable**: the point at which deletion stops being routine practice and becomes a separate problem.
- **Ownership of notes**: an employment question a staff reporter should confirm and a freelancer should raise at contract.

## Sources
- Zurcher v. Stanford Daily, 436 U.S. 547 (1978). https://supreme.justia.com/cases/federal/us/436/547/
- Privacy Protection Act of 1980, 42 U.S.C. 2000aa. https://www.law.cornell.edu/uscode/text/42/2000aa
- Reporters Committee for Freedom of the Press. (n.d.). *Reporters Committee legal guides*. https://www.rcfp.org/`,
    },
    {
      slug: "publishing-what-others-obtained",
      title: "11 · Publishing what somebody else obtained",
      section: "Section 3 · Sources, subpoenas, and materials",
      body: `A recording, a document, or a data set reaches you and you did not take it. Whether you may publish it is a different question from whether the person who took it was entitled to, and the Supreme Court has addressed it directly.

**The leading case.** *Bartnicki v. Vopper*, 532 U.S. 514 (2001), concerned a recording of a private call made illegally by an unknown person. It reached a radio commentator who had played no part in the interception and who broadcast it. The Court held that on those facts, where the material concerned a matter of public concern and the publisher had lawfully obtained it and had not participated in the unlawful interception, the First Amendment protected publication.

**Read the conditions carefully, because they are the holding.** The publisher did not participate in the illegal act. The publisher obtained it lawfully. The subject was a matter of public concern. Change any of those and you are outside what the case decided, and a reporter who solicits or encourages the unlawful acquisition is in a materially different position.

**The related line on lawfully obtained truthful information.** In *The Florida Star v. B.J.F.*, 491 U.S. 524 (1989), the Court held that imposing damages for publishing truthful information lawfully obtained about a matter of public significance requires a state interest of the highest order, in a case where a newspaper published a sexual assault victim's name that the paper had obtained from a publicly released police report. Earlier, *Cox Broadcasting Corp. v. Cohn*, 420 U.S. 469 (1975), reached a comparable conclusion about a name obtained from public court records.

**What that does not settle, and reporters overread it constantly.** These cases concern whether the state may PUNISH publication. They do not decide whether publishing is right, they do not protect how you obtained something, and they do not address the harm to the person named. The interviewing course's minimize-harm standard operates entirely inside the space these cases leave legally permitted, which is a great deal of space.

**Prior restraint, for completeness and because it is often invoked wrongly.** Stopping publication in advance faces an extremely heavy presumption against it, from *Near v. Minnesota*, 283 U.S. 697 (1931), through *New York Times Co. v. United States*, 403 U.S. 713 (1971), the Pentagon Papers case. That is a strong protection against being stopped. It is not protection against consequences afterward, and the two are different things.

**The practical procedure when material like this arrives.** Do not encourage anybody to obtain more. Record how it reached you and when. Establish whether the subject is genuinely of public concern rather than merely interesting. Consider publishing the substance rather than the raw material where that serves the reader equally. And call a lawyer before publishing, because this is the paradigm case where general principles lose to specific facts.

:::reveal What three conditions carry the holding in Bartnicki v. Vopper? ||| The publisher did not participate in the unlawful interception, obtained the material lawfully, and the subject was a matter of public concern.

:::reveal What did The Florida Star v. B.J.F. hold, and about what kind of information? ||| That punishing publication of truthful information lawfully obtained about a matter of public significance requires a state interest of the highest order. The information was a victim's name from a publicly released police report.

:::reveal What do these cases not settle? ||| Whether publishing is right, how the material was obtained, and the harm to the person named. They address whether the state may punish publication.

## Vocabulary
- **Bartnicki conditions**: no participation in the unlawful act, lawful receipt, and a matter of public concern.
- **Lawfully obtained truthful information**: material whose publication the state may punish only on an interest of the highest order.
- **Prior restraint**: stopping publication in advance, which faces a heavy presumption against it.
- **Permitted but not right**: the space these cases leave, inside which the minimize-harm standard still operates.

## Sources
- Bartnicki v. Vopper, 532 U.S. 514 (2001). https://supreme.justia.com/cases/federal/us/532/514/
- The Florida Star v. B.J.F., 491 U.S. 524 (1989). https://supreme.justia.com/cases/federal/us/491/524/
- Cox Broadcasting Corp. v. Cohn, 420 U.S. 469 (1975). https://supreme.justia.com/cases/federal/us/420/469/
- Near v. Minnesota, 283 U.S. 697 (1931). https://supreme.justia.com/cases/federal/us/283/697/
- New York Times Co. v. United States, 403 U.S. 713 (1971). https://supreme.justia.com/cases/federal/us/403/713/`,
    },
    {
      slug: "quiz-sources-subpoenas-materials",
      title: "12 · Knowledge check: sources, subpoenas, and materials",
      section: "Section 3 · Sources, subpoenas, and materials",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What did Branzburg v. Hayes decide?",
            options: [
              "There is no First Amendment privilege to refuse grand jury testimony about confidential information",
              "That reporters hold an absolute privilege against all subpoenas",
              "That a qualified privilege applies in every federal circuit",
              "That state shield laws are preempted by federal law",
            ],
            correctIndex: 0,
            explanation:
              "408 U.S. 665 (1972). Lower courts have since read it in a range of ways, and some federal courts have recognized a qualified privilege in some circumstances.",
            sourceLessonSlug: "shield-and-privilege",
          },
          {
            prompt: "What is the honest summary of federal reporter's privilege?",
            options: [
              "Contested, uneven, and not something to rely on",
              "Settled and protective in all federal courts",
              "Available only to employees of established outlets",
              "Identical to the strongest state shield law",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the practical protection, where it exists, is state law.",
            sourceLessonSlug: "shield-and-privilege",
          },
          {
            prompt: "What exists federally in place of a shield statute?",
            options: [
              "A Justice Department policy constraining the Department's own conduct",
              "A federal privilege recognized by statute since 2007",
              "A regulation binding all federal agencies seeking press records",
              "A rule of evidence adopted by the federal courts",
            ],
            correctIndex: 0,
            explanation:
              "At 28 C.F.R. 50.10. It is an internal policy rather than a privilege you hold, it has been revised more than once, and it binds nobody outside the Department.",
            sourceLessonSlug: "shield-and-privilege",
          },
          {
            prompt: "Which of these does 28 C.F.R. 50.10 NOT do?",
            options: [
              "Give a reporter a privilege they can assert",
              "Constrain how the Justice Department seeks information from the news media",
              "Exist as an internal Department policy",
              "Change over time through revision",
            ],
            correctIndex: 0,
            explanation:
              "It binds the Department. It does not bind other litigants, other agencies, or state authorities.",
            sourceLessonSlug: "shield-and-privilege",
          },
          {
            prompt: "Which questions does the course say state shield laws answer differently?",
            options: [
              "Whether one exists, who is covered, how strong it is, and what it reaches",
              "Only whether the protection is absolute or qualified",
              "Only whether a criminal defendant can overcome it",
              "Only whether unpublished material is included",
            ],
            correctIndex: 0,
            explanation:
              "All four are separate questions with different answers in different states, plus whether it survives a criminal defendant's subpoena.",
            sourceLessonSlug: "shield-and-privilege",
          },
          {
            prompt: "Which Indiana chapter does the course name for its shield provision?",
            options: [
              "Indiana Code 34-46-4",
              "Indiana Code 5-14-3, which is the records act",
              "Indiana Code 5-14-1.5, which is the meetings act",
              "Indiana Code 5-14-4, which creates the access counselor",
            ],
            correctIndex: 0,
            explanation:
              "The course names the chapter and refuses to print the scope, covered categories, or operative language it could not verify.",
            sourceLessonSlug: "shield-and-privilege",
          },
          {
            prompt: "Why does the course refuse to print the scope of Indiana's shield provision?",
            options: [
              "The details are precisely what would matter and could not be verified",
              "Because shield provisions are confidential by design",
              "Because Indiana's provision has been repealed",
              "Because federal law governs the question instead",
            ],
            correctIndex: 0,
            explanation:
              "A source check is filed so the detail can be added once it is read against a primary text.",
            sourceLessonSlug: "shield-and-privilege",
          },
          {
            prompt: "What is the covered-person problem in shield law?",
            options: [
              "Whether statutes written for newspaper and broadcast employees reach independent publishers",
              "Whether a source can invoke the shield on the reporter's behalf",
              "Whether a shield applies to material published outside the state",
              "Whether an editor is covered separately from a reporter",
            ],
            correctIndex: 0,
            explanation:
              "The answer sometimes turns on whether you can show a journalistic purpose at the time you gathered the material.",
            sourceLessonSlug: "shield-and-privilege",
          },
          {
            prompt: "What should a reporter know before promising confidentiality?",
            options: [
              "Your state's protection, your employer's position, and what to tell the source",
              "Whether the source will accept a written agreement",
              "Whether the story will run before any subpoena could arrive",
              "Whether the source has spoken to other reporters",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the interviewing course's rule is to say what you will do rather than what will happen.",
            sourceLessonSlug: "shield-and-privilege",
          },
          {
            prompt: "What three things should be done before a subpoena arrives?",
            options: [
              "Know the outlet's lawyer, stop destroying anything, and tell an editor immediately",
              "Notify sources, publish quickly, and archive everything publicly",
              "Retain personal counsel, insure the story, and register the material",
              "Delete drafts, encrypt notes, and move files off employer systems",
            ],
            correctIndex: 0,
            explanation:
              "The deadlines for responding are short and the first response frequently decides the shape of everything after.",
            sourceLessonSlug: "shield-and-privilege",
          },
          {
            prompt: "What did Zurcher v. Stanford Daily hold?",
            options: [
              "The Fourth Amendment did not bar a search warrant for a newspaper office not suspected of crime",
              "That newsroom searches are per se unconstitutional",
              "That reporters may refuse to produce notes under subpoena",
              "That a state shield law preempts a federal warrant",
            ],
            correctIndex: 0,
            explanation:
              "436 U.S. 547 (1978). Congress responded with the Privacy Protection Act of 1980.",
            sourceLessonSlug: "notes-and-materials",
          },
          {
            prompt: "What does the Privacy Protection Act of 1980 restrict?",
            options: [
              "Government searches and seizures of work product and documentary materials",
              "Subpoenas issued to journalists in civil litigation",
              "Disclosure of a confidential source's identity",
              "Publication of material obtained from a government employee",
            ],
            correctIndex: 0,
            explanation:
              "42 U.S.C. 2000aa, covering materials held by a person reasonably believed to be engaged in publishing, subject to exceptions.",
            sourceLessonSlug: "notes-and-materials",
          },
          {
            prompt: "What does the Privacy Protection Act generally push the government toward?",
            options: [
              "A subpoena rather than a search",
              "A negotiated voluntary disclosure",
              "A court-supervised review of the material",
              "An application to the state shield authority",
            ],
            correctIndex: 0,
            explanation:
              "It does not stop a subpoena and it does not create a privilege against testifying.",
            sourceLessonSlug: "notes-and-materials",
          },
          {
            prompt: "How should the Privacy Protection Act be treated in practice?",
            options: [
              "As a reason to call a lawyer immediately rather than as an answer",
              "As a complete defense to any government demand",
              "As applying only to newspapers and broadcasters",
              "As superseded by state shield laws where they exist",
            ],
            correctIndex: 0,
            explanation:
              "Its exceptions matter, and the situations in which it comes up are exactly the ones where specific facts govern.",
            sourceLessonSlug: "notes-and-materials",
          },
          {
            prompt: "What is the rule about retention and deletion?",
            options: [
              "Decide the practice when nothing is happening, and stop deleting when something is",
              "Delete routinely to minimize what can be demanded",
              "Retain everything indefinitely regardless of circumstances",
              "Follow whatever the source requests about their material",
            ],
            correctIndex: 0,
            explanation:
              "A written practice applied consistently is defensible. Deleting once litigation or an investigation is reasonably foreseeable is a different thing entirely.",
            sourceLessonSlug: "notes-and-materials",
          },
          {
            prompt: "Where does source material live that reporters underestimate?",
            options: [
              "Cloud drives, chat logs, calendars, phone backups, and document version history",
              "Only in the notebook and the recorder",
              "Only in systems the employer administers",
              "Only in material the reporter has explicitly saved",
            ],
            correctIndex: 0,
            explanation:
              "The source-hygiene lesson in REPORT-00 asked you to know where it lives. This is the legal reason it mattered.",
            sourceLessonSlug: "notes-and-materials",
          },
          {
            prompt: "What do encryption and secure channels not do?",
            options: [
              "Stop a subpoena to you, or help if the other end keeps everything",
              "Protect material in transit against interception",
              "Protect material at rest against some threats",
              "Reduce the number of copies of a message in existence",
            ],
            correctIndex: 0,
            explanation:
              "And they can create a false sense of protection you then pass on to a source, which is the interviewing course's rule applied to technology.",
            sourceLessonSlug: "notes-and-materials",
          },
          {
            prompt: "What is the single most useful preparation about materials?",
            options: [
              "Know the lawyer, the outlet's subpoena position, and who owns your notes",
              "Encrypt every file and delete drafts weekly",
              "Store everything on personal devices rather than employer systems",
              "Publish source material alongside every story",
            ],
            correctIndex: 0,
            explanation:
              "A freelancer should assume none of those questions has been answered in their favor and should ask at the point of contract.",
            sourceLessonSlug: "notes-and-materials",
          },
          {
            prompt: "What did Bartnicki v. Vopper concern?",
            options: [
              "Broadcast of an illegally intercepted call by somebody who did not intercept it",
              "A newspaper's refusal to reveal a source",
              "A search warrant executed at a newsroom",
              "A parody of a public figure",
            ],
            correctIndex: 0,
            explanation:
              "532 U.S. 514 (2001). The Court held the First Amendment protected publication on those facts.",
            sourceLessonSlug: "publishing-what-others-obtained",
          },
          {
            prompt: "What are the three conditions carrying the Bartnicki holding?",
            options: [
              "No participation in the unlawful act, lawful receipt, and public concern",
              "Public figure subject, accurate reporting, and prior notice",
              "Government source, official record, and a public proceeding",
              "Two sources, a right of reply, and a stated deadline",
            ],
            correctIndex: 0,
            explanation:
              "Change any of them and you are outside what the case decided, and a reporter who solicits the unlawful acquisition is materially differently placed.",
            sourceLessonSlug: "publishing-what-others-obtained",
          },
          {
            prompt: "What did The Florida Star v. B.J.F. hold?",
            options: [
              "Punishing publication of lawfully obtained truthful information of public significance requires an interest of the highest order",
              "That victims' names may never be published without consent",
              "That police reports are always public records",
              "That newspapers may be enjoined from publishing names",
            ],
            correctIndex: 0,
            explanation:
              "491 U.S. 524 (1989), in a case where the name came from a publicly released police report.",
            sourceLessonSlug: "publishing-what-others-obtained",
          },
          {
            prompt: "What did Cox Broadcasting Corp. v. Cohn concern?",
            options: [
              "A name obtained from public court records",
              "A recording made without a party's consent",
              "A search of a broadcaster's newsroom",
              "An advertisement containing factual errors",
            ],
            correctIndex: 0,
            explanation:
              "420 U.S. 469 (1975), reaching a comparable conclusion to the later Florida Star decision.",
            sourceLessonSlug: "publishing-what-others-obtained",
          },
          {
            prompt: "What do these publication cases NOT settle?",
            options: [
              "Whether publishing is right, how you obtained it, and the harm to the person",
              "Whether the state may punish publication",
              "Whether the information was lawfully obtained",
              "Whether the subject was of public significance",
            ],
            correctIndex: 0,
            explanation:
              "The minimize-harm standard operates entirely inside the space these cases leave legally permitted, which is a great deal of space.",
            sourceLessonSlug: "publishing-what-others-obtained",
          },
          {
            prompt: "What is the doctrine of prior restraint?",
            options: [
              "Stopping publication in advance, which faces an extremely heavy presumption against it",
              "Punishing publication after the fact under a general statute",
              "Requiring a publisher to seek comment before publishing",
              "Restricting access to a proceeding rather than to a record",
            ],
            correctIndex: 0,
            explanation:
              "From Near v. Minnesota (1931) through New York Times Co. v. United States (1971), the Pentagon Papers case.",
            sourceLessonSlug: "publishing-what-others-obtained",
          },
          {
            prompt: "What is prior restraint protection not?",
            options: [
              "Protection against consequences afterward",
              "A strong presumption against being stopped in advance",
              "A doctrine reaching injunctions against publication",
              "A principle applied in the Pentagon Papers case",
            ],
            correctIndex: 0,
            explanation:
              "Being hard to stop and being hard to punish are different things, and reporters conflate them.",
            sourceLessonSlug: "publishing-what-others-obtained",
          },
          {
            prompt: "What is the first step when material somebody else obtained arrives?",
            options: [
              "Do not encourage anybody to obtain more",
              "Publish quickly, before an injunction can be sought",
              "Return it to the institution it came from",
              "Ask the source how they obtained it, on the record",
            ],
            correctIndex: 0,
            explanation:
              "With recording how it reached you and when, establishing genuine public concern, considering publishing the substance rather than the raw material, and calling a lawyer.",
            sourceLessonSlug: "publishing-what-others-obtained",
          },
          {
            prompt: "Why is this the paradigm case for calling a lawyer?",
            options: [
              "General principles lose to specific facts here more than anywhere",
              "Because the material is presumptively unlawful to hold",
              "Because prior restraint is likely to be sought",
              "Because the source will need representation too",
            ],
            correctIndex: 0,
            explanation:
              "The Bartnicki conditions are fact-specific and each one can fail in ways that are not obvious from the outside.",
            sourceLessonSlug: "publishing-what-others-obtained",
          },
          {
            prompt: "In what year was Bartnicki v. Vopper decided?",
            options: [
              "2001",
              "1989, with the Florida Star decision",
              "1975, with Cox Broadcasting",
              "1991, with Cohen v. Cowles Media",
            ],
            correctIndex: 0,
            explanation:
              "532 U.S. 514, and it is the leading case on publishing material somebody else obtained unlawfully.",
            sourceLessonSlug: "publishing-what-others-obtained",
          },
          {
            prompt: "In what year was Branzburg v. Hayes decided?",
            options: [
              "1972",
              "1978, alongside the newsroom search case",
              "1980, with the Privacy Protection Act",
              "1964, with the actual-malice standard",
            ],
            correctIndex: 0,
            explanation:
              "408 U.S. 665, and the range of later readings is what makes federal protection uneven.",
            sourceLessonSlug: "shield-and-privilege",
          },
          {
            prompt: "What year was the Privacy Protection Act passed, and in response to what?",
            options: [
              "1980, in response to Zurcher v. Stanford Daily",
              "1972, in response to Branzburg v. Hayes",
              "2001, in response to Bartnicki v. Vopper",
              "1991, in response to Cohen v. Cowles Media",
            ],
            correctIndex: 0,
            explanation:
              "Zurcher held the Fourth Amendment did not bar a warrant for a newspaper office not itself suspected of crime.",
            sourceLessonSlug: "notes-and-materials",
          },
          {
            prompt: "What is a defensible position on retention?",
            options: [
              "A written practice, applied consistently",
              "Deleting material on a fixed schedule regardless of circumstances",
              "Retaining nothing beyond the published story",
              "Following each source's individual preference",
            ],
            correctIndex: 0,
            explanation:
              "And the moment anything is happening, the deletion stops. Those two halves are the whole rule.",
            sourceLessonSlug: "notes-and-materials",
          },
          {
            prompt: "What should a reporter tell a source about what technology protects?",
            options: [
              "What you actually can and cannot protect",
              "That encrypted channels make disclosure impossible",
              "That the outlet's systems are secure against subpoena",
              "Nothing, since technical detail confuses the question",
            ],
            correctIndex: 0,
            explanation:
              "Which is the interviewing course's rule about promises applied to tools rather than to words.",
            sourceLessonSlug: "notes-and-materials",
          },
          {
            prompt: "What should a freelancer assume about subpoena support and note ownership?",
            options: [
              "That neither question has been answered in their favor",
              "That the commissioning outlet will cover both",
              "That the shield law resolves both automatically",
              "That the questions do not arise for freelance work",
            ],
            correctIndex: 0,
            explanation:
              "And should raise them at the point of contract rather than at the point of a subpoena.",
            sourceLessonSlug: "notes-and-materials",
          },
          {
            prompt: "Why does the course say to consider publishing the substance rather than the raw material?",
            options: [
              "It can serve the reader equally at lower exposure",
              "Because raw material may not be republished lawfully",
              "Because the source retains copyright in the material",
              "Because raw material cannot be verified",
            ],
            correctIndex: 0,
            explanation:
              "It is one of the five practical steps when material somebody else obtained arrives.",
            sourceLessonSlug: "publishing-what-others-obtained",
          },
          {
            prompt: "What does recording how material reached you and when serve?",
            options: [
              "Establishing that receipt was lawful and there was no participation",
              "Satisfying the state shield law's filing requirements",
              "Proving the material's authenticity to a court",
              "Protecting the source's identity from disclosure",
            ],
            correctIndex: 0,
            explanation:
              "Two of the three Bartnicki conditions are facts about you rather than about the material.",
            sourceLessonSlug: "publishing-what-others-obtained",
          },
          {
            prompt: "What is a qualified privilege?",
            options: [
              "Protection that can be overcome on a showing",
              "Protection available only to accredited journalists",
              "Protection limited to unpublished material",
              "Protection that expires after publication",
            ],
            correctIndex: 0,
            explanation:
              "As opposed to absolute protection, and which kind a state shield law grants is one of the questions that varies.",
            sourceLessonSlug: "shield-and-privilege",
          },
          {
            prompt: "What does the course say about how lower courts have read Branzburg?",
            options: [
              "In a range of ways, with some recognizing a qualified privilege",
              "Uniformly, as barring any privilege in any context",
              "As having been overruled by later decisions",
              "As applying only to grand juries and to nothing else",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the honest summary is contested and uneven rather than settled in either direction.",
            sourceLessonSlug: "shield-and-privilege",
          },
          {
            prompt: "What kind of showing sometimes decides whether a shield statute covers somebody?",
            options: [
              "Whether they had a journalistic purpose when they gathered the material",
              "Whether they held press credentials at the time",
              "Whether they were paid for the resulting work",
              "Whether they published within the state",
            ],
            correctIndex: 0,
            explanation:
              "Because many shield statutes were written when a journalist meant an employee of a newspaper or a broadcaster.",
            sourceLessonSlug: "shield-and-privilege",
          },
          {
            prompt: "What is the relationship between this lesson and the interviewing course's promise rule?",
            options: [
              "This is the reason you promise what you will do rather than what will happen",
              "This replaces the promise rule with a legal standard",
              "The promise rule applies only to minors and this to adults",
              "They address different kinds of source and do not overlap",
            ],
            correctIndex: 0,
            explanation:
              "Know your state's protection, your employer's position, and tell the source what you actually know.",
            sourceLessonSlug: "shield-and-privilege",
          },
          {
            prompt: "What does the course say about the first response to a subpoena?",
            options: [
              "It frequently decides the shape of everything after",
              "It should be sent by the reporter to preserve the relationship",
              "It can be delayed until the outlet's counsel is available",
              "It is a formality with little practical consequence",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the deadlines being short matters, and why the editor and lawyer are told immediately.",
            sourceLessonSlug: "shield-and-privilege",
          },
          {
            prompt: "Which two protections does the course pair as separate questions?",
            options: [
              "Source identity, and what happens to notes and materials",
              "Defamation, and privacy",
              "Federal law, and state law",
              "Gathering, and publishing",
            ],
            correctIndex: 0,
            explanation:
              "Reporters routinely conflate them, and the second has its own statute.",
            sourceLessonSlug: "notes-and-materials",
          },
          {
            prompt: "Whose materials does the Privacy Protection Act cover?",
            options: [
              "A person reasonably believed to be engaged in publishing",
              "Only employees of newspapers and broadcasters",
              "Only persons holding state press credentials",
              "Only persons who have published the material already",
            ],
            correctIndex: 0,
            explanation:
              "Work product and documentary materials, subject to exceptions that matter.",
            sourceLessonSlug: "notes-and-materials",
          },
          {
            prompt: "What does the course say encryption can create?",
            options: [
              "A false sense of protection passed on to a source",
              "A legal privilege against disclosure",
              "An exemption from the Privacy Protection Act's conditions",
              "A record that cannot be subpoenaed",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the rule is to tell sources what you actually can and cannot protect.",
            sourceLessonSlug: "notes-and-materials",
          },
          {
            prompt: "Which case pair does the course use for lawfully obtained truthful information?",
            options: [
              "The Florida Star and Cox Broadcasting",
              "Branzburg and Zurcher",
              "Near and New York Times Co. v. United States",
              "Gertz and Hepps",
            ],
            correctIndex: 0,
            explanation:
              "1989 and 1975 respectively, both involving names obtained from official sources.",
            sourceLessonSlug: "publishing-what-others-obtained",
          },
          {
            prompt: "Which case pair does the course use for prior restraint?",
            options: [
              "Near v. Minnesota and New York Times Co. v. United States",
              "Bartnicki and Cohen",
              "Branzburg and Zurcher",
              "Sullivan and Gertz",
            ],
            correctIndex: 0,
            explanation:
              "1931 and 1971. The presumption against stopping publication in advance is extremely heavy.",
            sourceLessonSlug: "publishing-what-others-obtained",
          },
          {
            prompt: "What position is a reporter in who solicits an unlawful acquisition?",
            options: [
              "Materially different from the Bartnicki publisher",
              "Identical, provided they did not perform the act themselves",
              "Protected, because publication remains of public concern",
              "Protected, because the interception was performed by another",
            ],
            correctIndex: 0,
            explanation:
              "No participation in the unlawful act is one of the three conditions carrying the holding.",
            sourceLessonSlug: "publishing-what-others-obtained",
          },
          {
            prompt: "What is the practical purpose of establishing genuine public concern?",
            options: [
              "It is one of the Bartnicki conditions, and merely interesting is not the same",
              "It establishes the state's interest of the highest order",
              "It converts unlawfully obtained material into lawfully obtained material",
              "It removes the need for legal review before publication",
            ],
            correctIndex: 0,
            explanation:
              "Which is one of the five steps to take when material somebody else obtained arrives.",
            sourceLessonSlug: "publishing-what-others-obtained",
          },
          {
            prompt: "What kind of protection does the course say the state shield laws provide relative to federal law?",
            options: [
              "The real protection, where it exists at all",
              "A supplement to a settled federal privilege",
              "A weaker version of the federal rule",
              "Protection identical across states",
            ],
            correctIndex: 0,
            explanation:
              "There is no general federal shield statute, and the federal case law is contested and uneven.",
            sourceLessonSlug: "shield-and-privilege",
          },
          {
            prompt: "Which document types does the version-history warning cover?",
            options: [
              "Drafts in a content system and shared documents",
              "Only files stored on personal devices",
              "Only material the reporter deliberately archived",
              "Only recordings and transcripts",
            ],
            correctIndex: 0,
            explanation:
              "With cloud drives, chat logs, calendars, and phone backups. Knowing where material lives is the legal reason source hygiene mattered.",
            sourceLessonSlug: "notes-and-materials",
          },
          {
            prompt: "What is the course's summary of what the Privacy Protection Act is worth in a crisis?",
            options: [
              "A reason to call a lawyer immediately",
              "A complete answer to a government demand",
              "A privilege the reporter can assert in court",
              "A bar on any subpoena for journalistic material",
            ],
            correctIndex: 0,
            explanation:
              "Its exceptions matter, which is exactly the kind of thing a general course cannot resolve for a specific situation.",
            sourceLessonSlug: "notes-and-materials",
          },
          {
            prompt: "What does the course say about being hard to stop versus hard to punish?",
            options: [
              "They are different things",
              "They are the same protection described two ways",
              "The first implies the second in every case",
              "The second is stronger in American law",
            ],
            correctIndex: 0,
            explanation:
              "Prior restraint doctrine is a strong protection against being stopped and is not protection against consequences afterward.",
            sourceLessonSlug: "publishing-what-others-obtained",
          },
          {
            prompt: "Why does the course call the Bartnicki conditions the holding?",
            options: [
              "Because changing any one of them puts you outside what the case decided",
              "Because the Court described them as dicta",
              "Because they were adopted by statute afterward",
              "Because they apply only to broadcasters",
            ],
            correctIndex: 0,
            explanation:
              "Read the conditions carefully rather than the headline that publishing intercepted material is protected.",
            sourceLessonSlug: "publishing-what-others-obtained",
          },
          {
            prompt: "What does the course say about relying on federal reporter's privilege?",
            options: [
              "Do not, because it is contested and uneven",
              "Rely on it in federal court, where it is settled",
              "Rely on it wherever a state has no shield law",
              "Rely on it only for grand jury proceedings",
            ],
            correctIndex: 0,
            explanation:
              "Branzburg rejected the claim for grand juries, later courts have read it in a range of ways, and there is no general federal shield statute.",
            sourceLessonSlug: "shield-and-privilege",
          },
          {
            prompt: "Which comes first when a subpoena arrives?",
            options: [
              "Telling an editor and a lawyer",
              "Preparing a written objection",
              "Contacting the source who may be affected",
              "Reviewing which materials are responsive",
            ],
            correctIndex: 0,
            explanation:
              "The deadlines are short and the first response frequently decides the shape of everything after.",
            sourceLessonSlug: "shield-and-privilege",
          },
          {
            prompt: "What does the course say the Privacy Protection Act's exceptions do?",
            options: [
              "They matter, which is why the Act is not an answer by itself",
              "They apply only to state rather than federal authorities",
              "They have been repealed by later legislation",
              "They cover only material already published",
            ],
            correctIndex: 0,
            explanation:
              "Treat the statute as a reason to call a lawyer immediately rather than as a resolution of the situation.",
            sourceLessonSlug: "notes-and-materials",
          },
          {
            prompt: "What does the course say about deleting once a dispute is foreseeable?",
            options: [
              "It can carry serious consequences of its own",
              "It is protected by the Privacy Protection Act",
              "It is required by most retention practices",
              "It is neutral if the practice was written in advance",
            ],
            correctIndex: 0,
            explanation:
              "A consistently applied written practice is defensible; deleting after the moment anything is happening is a different thing entirely.",
            sourceLessonSlug: "notes-and-materials",
          },
          {
            prompt: "Which Indiana Code sections create the state's reporter's shield, and from when?",
            options: ["34-46-4-1 and 34-46-4-2, dating to 1941", "34-46-3-1 and 34-46-3-2, enacted in the 1970s after Branzburg was decided", "5-14-3-9, the same chapter that governs access to public records in the state", "A rule of evidence rather than a statute, adopted by the Indiana Supreme Court"],
            correctIndex: 0,
            explanation: "Section 1 names who is covered; section 2 states the privilege. The 1941 date is why the covered list reads the way it does.",
            sourceLessonSlug: "shield-and-privilege",
          },
          {
            prompt: "Is Indiana's shield absolute or qualified as to state matters?",
            options: ["Absolute", "Qualified, defeated when a party shows the information goes to the heart of the case", "Qualified, and defeated automatically whenever a criminal defendant issues the subpoena", "Absolute for civil proceedings and qualified for criminal ones"],
            correctIndex: 0,
            explanation: "No balancing test and no showing of need overcomes it, which is stronger than most states manage.",
            sourceLessonSlug: "shield-and-privilege",
          },
          {
            prompt: "What exactly does Indiana's shield protect?",
            options: ["The source's identity", "All material gathered in reporting, whether or not it was ever published or broadcast", "The reporter's notes and unpublished footage, but not the identity behind them", "Any communication between a reporter and an editor about an unpublished story"],
            correctIndex: 0,
            explanation: "It reaches the source of information published or not published, broadcast or not broadcast. The information itself is not covered.",
            sourceLessonSlug: "shield-and-privilege",
          },
          {
            prompt: "A subpoena demands your unpublished notes but does not ask who told you. Does Indiana's shield answer it?",
            options: ["No, it covers identity rather than material", "Yes, because notes are the direct product of the protected relationship with the source", "Yes, provided the notes were never published or broadcast in any form", "Only if disclosing the notes would let a reader infer the source's identity"],
            correctIndex: 0,
            explanation: "A subpoena asking what you learned rather than who told you is asking for something the statute does not cover.",
            sourceLessonSlug: "shield-and-privilege",
          },
          {
            prompt: "How does section 1 define who is covered?",
            options: ["By employment", "By whether the person's work was published or broadcast in the previous twelve months", "By registration with a state press body that issues credentials on application", "By whether a court finds the person was acting journalistically when they gathered the material"],
            correctIndex: 0,
            explanation: "Owners, editors or reporters employed by newspapers, periodicals of regular circulation, press associations, wire services, or licensed broadcasters, drawing income from legitimate news work.",
            sourceLessonSlug: "shield-and-privilege",
          },
          {
            prompt: "Which of these is LEAST clearly inside that employment list?",
            options: ["A Documenter attending a public meeting for a civic program", "A staff reporter drawing a salary from a daily newspaper of general circulation", "An editor employed by a licensed television station in the state", "An owner of a periodical that circulates on a regular published schedule"],
            correctIndex: 0,
            explanation: "A 1941 list of owners, editors and reporters was not written with civic documenters, freelancers, newsletter writers or podcasters in mind.",
            sourceLessonSlug: "shield-and-privilege",
          },
          {
            prompt: "What is the danger the lesson says matters most about the covered list?",
            options: ["Believing you are protected when you are not", "Being covered but failing to invoke the privilege at the correct procedural moment", "Having protection so strong that a court treats an assertion of it as bad faith", "Losing coverage retroactively if the story is never published or broadcast"],
            correctIndex: 0,
            explanation: "The exposure lands on the source rather than the journalist, because the promise was made on protection that did not exist.",
            sourceLessonSlug: "shield-and-privilege",
          },
          {
            prompt: "If you are not plainly inside the covered list, what does the lesson tell you to do?",
            options: ["Assume you are outside it and promise only what you can keep", "Assert the privilege anyway, since a court will resolve the definitional question in your favour", "Ask the source to sign a written agreement acknowledging the limits before you talk", "Route the interview through an employed reporter at a partner outlet to inherit their coverage"],
            correctIndex: 0,
            explanation: "This is the interviewing course's rule applied to law: say what YOU will do, not what will happen.",
            sourceLessonSlug: "shield-and-privilege",
          },
          {
            prompt: "Does Indiana's shield control a federal grand jury proceeding?",
            options: ["No", "Yes, because a state privilege travels with the reporter into any court sitting in the state", "Yes, unless the federal court expressly declines to apply the state privilege", "Only where the underlying reporting concerned a matter of state rather than federal law"],
            correctIndex: 0,
            explanation: "The privilege reaches state matters. Branzburg governs federally, and there is no federal shield statute.",
            sourceLessonSlug: "shield-and-privilege",
          },
          {
            prompt: "On whose authority does the course currently state the shield's scope?",
            options: ["The Reporters Committee, an expert secondary source", "The Indiana General Assembly's own published code text, read directly", "An Indiana Supreme Court opinion construing the covered-persons list", "The Indiana Public Access Counselor's handbook, which restates the chapter"],
            correctIndex: 0,
            explanation: "The lesson says so and keeps an open check, because iga.in.gov serves an application rather than a document to an automated reader.",
            sourceLessonSlug: "shield-and-privilege",
          },
          {
            prompt: "What does the phrase 'published or not published, broadcast or not broadcast' do in the statute?",
            options: ["Extends the identity protection to unaired work", "Extends the protection to the underlying material once the story runs in any medium", "Limits the protection to reporters who actually published something in the matter", "Distinguishes the print privilege from the broadcast privilege, which have different scopes"],
            correctIndex: 0,
            explanation: "Whether the story ever ran does not decide whether the source is protected. What is protected is still only the identity.",
            sourceLessonSlug: "shield-and-privilege",
          },
          {
            prompt: "Why does the 1941 enactment date matter to a working reporter today?",
            options: ["The covered list predates how most journalism is now done", "Older statutes are read narrowly by courts as a general rule of construction", "A privilege that old is presumed superseded by later rules of evidence", "The date determines which appellate decisions are still good law under it"],
            correctIndex: 0,
            explanation: "The list describes employment relationships that were nearly universal in 1941 and are not now.",
            sourceLessonSlug: "shield-and-privilege",
          },
          {
            prompt: "A source asks you to promise their name will never come out. What can you honestly say if your coverage is uncertain?",
            options: ["What you will do, and what you cannot control", "That the state shield is absolute, which is true as a general statement of the law", "That you will destroy your notes if a subpoena arrives, removing the risk entirely", "That you will publish nothing at all unless the protection is confirmed in advance"],
            correctIndex: 0,
            explanation: "And destroying material once a dispute is foreseeable is its own serious problem, which the lesson names separately.",
            sourceLessonSlug: "shield-and-privilege",
          },
          {
            prompt: "What is 28 C.F.R. 50.10 in relation to a state shield law?",
            options: ["A Justice Department policy binding only that department", "A federal shield regulation that supplements weaker state statutes", "The federal rule that decides when a state privilege applies in federal court", "A reporting requirement imposed on newsrooms that receive federal subpoenas"],
            correctIndex: 0,
            explanation: "An internal policy, revised more than once, binding nobody outside the Department. It is not a privilege you hold.",
            sourceLessonSlug: "shield-and-privilege",
          },
          {
            prompt: "Which question about a state shield law is NOT one the lesson says varies by state?",
            options: ["Whether a federal grand jury must honour it", "Whether the protection is absolute or qualified in that jurisdiction", "Whether it reaches unpublished material as well as the source's identity", "Whether it survives a subpoena issued by a criminal defendant"],
            correctIndex: 0,
            explanation: "That one does not vary: Branzburg governs federally and no state statute changes it. The other three are exactly the state-by-state questions.",
            sourceLessonSlug: "shield-and-privilege",
          },
          {
            prompt: "Before a subpoena arrives, what three things does the lesson say to have done?",
            options: ["Know the lawyer, preserve material, tell an editor and lawyer at once", "Register with a press body, file a protective motion, and notify the source in writing", "Move notes off any device the outlet owns, encrypt them, and store them out of state", "Publish the story quickly, since an unpublished story attracts more legal risk"],
            correctIndex: 0,
            explanation: "Destroying anything once a dispute is foreseeable is a separate and serious problem, whatever the privilege says.",
            sourceLessonSlug: "shield-and-privilege",
          },
          {
            prompt: "What would the open source check on this lesson actually settle?",
            options: ["The verbatim covered-persons list in 34-46-4-1", "Whether the privilege has ever been asserted successfully in an Indiana trial court", "Whether the Reporters Committee's compendium is updated on a fixed schedule", "Whether a federal court sitting in Indiana would apply the state privilege"],
            correctIndex: 0,
            explanation: "The lesson rests on an expert secondary reading; the verbatim list would let it state the categories as law rather than as summary.",
            sourceLessonSlug: "shield-and-privilege",
          },
          {
            prompt: "Why is this the check whose being wrong hurts somebody other than the course?",
            options: ["A source is exposed by a promise the reporter could not keep", "A newsroom faces a fine for asserting a privilege it did not hold", "A court sanctions the reporter personally for a frivolous filing", "The story is delayed while a lawyer resolves the definitional question"],
            correctIndex: 0,
            explanation: "The reporter takes a legal risk; the source takes the consequence. That asymmetry is why the check sits at high severity.",
            sourceLessonSlug: "shield-and-privilege",
          },
        ],
      },
    },
    // ── Section 4 ───────────────────────────────────────────────────────────────────────────
    {
      slug: "defenses-and-privileges",
      title: "13 · Defenses, privileges, and the retraction question",
      section: "Section 4 · Defenses, minors, and the lawyer",
      body: `Knowing what protects a story is as useful as knowing what threatens it, because it tells you which sentence to write differently and which document to attach to your file.

**Truth, first and best.** A true statement of fact is not defamatory. That is why the verification course is the practical half of this one: the strongest legal position available is a file that shows the assertion is accurate and how you established it.

**The fair report privilege.** Most states recognize a privilege for fair and accurate reports of official proceedings and official records: a court hearing, a filed complaint, a council meeting, a police report. Its scope varies, it typically requires the report to be fair and accurate and often to be attributed to the proceeding, and it protects the REPORT rather than the underlying assertion. Summarizing a filed lawsuit accurately is very different from adopting its allegations as your own.

**Opinion, carefully.** After *Milkovich* there is no blanket opinion exemption, but a statement that cannot reasonably be read as asserting a provable fact is not defamatory. In practice this protects clearly-signaled evaluation resting on disclosed facts, which is also just better writing: state the facts, then say what you make of them.

**Neutral reportage, which is not available everywhere.** Some jurisdictions recognize a privilege for accurately reporting newsworthy accusations made by a responsible source about a public figure, even where the reporter doubts them. Others reject it outright. Do not rely on it without knowing your jurisdiction's position.

**Anti-SLAPP statutes, where they exist.** Many states have laws allowing early dismissal and sometimes fee recovery for suits targeting speech on public issues. They vary enormously in scope and in whether they apply in federal court, several states have none, and there is no general federal statute. Whether one covers you is one of the first questions a media lawyer will ask.

**Retraction and correction statutes.** A number of states have statutes under which a prompt correction, sometimes after a demand in a specified form, limits the damages recoverable. The conditions are technical and the deadlines are short. This is a specific reason to route a correction demand to a lawyer the day it arrives rather than answering it yourself.

**And the thing that helps in every one of these.** A contemporaneous file: the decomposed claims, the sourcing chain, the right-of-reply email, the responses, and the dated notes. Nothing else you can do afterward improves your position as much as the record you made at the time.

:::reveal What does the fair report privilege protect, and what does it not? ||| A fair and accurate report of an official proceeding or record. It protects the report, not the underlying assertion, so summarizing a filed suit is very different from adopting its allegations.

:::reveal After Milkovich, what kind of evaluative writing is genuinely safer? ||| Clearly-signaled evaluation resting on disclosed facts: state the facts, then say what you make of them. There is no blanket exemption for anything labeled opinion.

:::reveal Why route a retraction demand to a lawyer the day it arrives? ||| Because a number of states have retraction statutes whose conditions are technical and whose deadlines are short, and a prompt correction in the right form can limit recoverable damages.

## Vocabulary
- **Fair report privilege**: protection for a fair and accurate account of an official proceeding or record, varying by state.
- **Neutral reportage**: a privilege for accurately reporting a responsible source's newsworthy accusation, recognized in some jurisdictions and rejected in others.
- **Anti-SLAPP**: a state statute permitting early dismissal, and sometimes fees, for suits targeting public-issue speech.
- **Retraction statute**: a state law under which a prompt correction in a specified form limits recoverable damages.

## Sources
- Milkovich v. Lorain Journal Co., 497 U.S. 1 (1990). https://supreme.justia.com/cases/federal/us/497/1/
- Reporters Committee for Freedom of the Press. (n.d.). *Reporters Committee legal guides*. https://www.rcfp.org/`,
    },
    {
      slug: "minors-and-sensitive-categories",
      title: "14 · Minors, victims, and the categories that carry extra weight",
      section: "Section 4 · Defenses, minors, and the lawyer",
      body: `Some subjects carry heightened legal and ethical exposure at once, and the two are frequently confused. Being permitted to publish and being right to publish are different questions with different answers.

**The legal picture on names, stated accurately.** As the previous section covered, *The Florida Star* and *Cox Broadcasting* mean the state generally may not punish publication of truthful information about a matter of public significance that was lawfully obtained, including in cases involving victims. Juvenile court proceedings and records are frequently restricted by state law on the court's side, which is a limit on ACCESS rather than a general prohibition on publishing what you lawfully learn. Those are different mechanisms and reporters mix them up constantly.

**Which means the operative constraint is usually editorial.** Most newsrooms have written standards on naming minors, naming victims of sexual violence, and identifying people with mental health conditions, and those standards typically go well beyond what the law requires. That is a deliberate choice, not a legal misunderstanding, and it is the standard you should expect to be held to.

**The professional code names the category.** The Society of Professional Journalists asks for heightened sensitivity with juveniles, victims of sex crimes, and sources who are inexperienced or unable to give consent, and for recognizing that legal access to information is not the same as an ethical justification to publish it (Society of Professional Journalists, 2014). The second half of that is the sentence this lesson turns on.

**Health, immigration, and criminal history, briefly.** Health information held by a covered provider is restricted on the PROVIDER's side by federal law; that constrains who may release it, not what a person may tell you about themselves. Immigration status and criminal history are lawful to report and can carry severe consequences for the person, which makes them a minimize-harm question rather than a legal one. Treat all three as decisions requiring a reason.

**Durability, which the interviewing course raised and the law does not solve.** A name attached to a difficult subject is searchable for decades. Some jurisdictions have created narrow removal or sealing mechanisms; most have not, and none of them reach a published news archive as a matter of course. Decide identification before publication, because afterward you are relying on somebody else's discretion.

**And the one line to carry out of this lesson.** Ask whether you are permitted and whether you are right, separately, in that order, and write down the answer to the second one.

:::reveal What is the difference between restricted juvenile records and a prohibition on publishing? ||| Restrictions on juvenile proceedings and records limit ACCESS on the court's side. They are not a general bar on publishing what a reporter lawfully learns, and the two mechanisms are constantly confused.

:::reveal What does the professional code say about legal access and ethical justification? ||| That legal access to information is not the same as an ethical justification to publish it, alongside heightened sensitivity with juveniles, victims of sex crimes, and inexperienced sources.

:::reveal What is the one line to carry out of this lesson? ||| Ask whether you are permitted and whether you are right, separately and in that order, and write down the answer to the second.

## Vocabulary
- **Access restriction**: a limit on obtaining records or attending proceedings, as distinct from a limit on publishing.
- **Editorial standard**: a newsroom rule on naming that typically goes further than the law requires, by choice.
- **Provider-side restriction**: a rule binding who may release information rather than what a person may say about themselves.
- **Durability**: the decades-long searchability of a published name, which the law does not generally solve afterward.

## Sources
- The Florida Star v. B.J.F., 491 U.S. 524 (1989). https://supreme.justia.com/cases/federal/us/491/524/
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/
- Reporters Committee for Freedom of the Press. (n.d.). *Reporters Committee legal guides*. https://www.rcfp.org/`,
    },
    {
      slug: "call-the-lawyer",
      title: "15 · The moment to call a lawyer, and what to have ready",
      section: "Section 4 · Defenses, minors, and the lawyer",
      body: `The purpose of the whole course is this list. You are not expected to answer legal questions. You are expected to notice them early enough that somebody qualified still has options.

**Call before publication when any of these is true.** The story accuses a specific person of a crime, of dishonesty, or of professional misconduct. It relies on material obtained by somebody who may not have been entitled to it. It involves undercover work, misrepresentation, or entry into non-public space. It names a minor or a victim in a sensitive category. It rests on a single anonymous source for its central allegation. Or the subject has already threatened litigation.

**Call immediately, before doing anything else, when any of these arrives.** A subpoena, of any kind. A preservation or litigation-hold letter. A retraction demand. A cease and desist. Contact from law enforcement about your material or your sources. Or the discovery that you may have broken a recording or access rule.

**What to have ready, so the conversation takes twenty minutes instead of two hours.** The specific sentences at issue, not the whole story. Your decomposed claim list with the confidence level of each line. The sourcing chain. The right-of-reply correspondence and every response. Your dated notes, including what you promised whom. And the one-sentence version of what you are actually asking.

**Three things to stop doing the moment a dispute is foreseeable.** Deleting anything. Discussing the matter on channels you do not control. And communicating with the other side without telling the lawyer, however reasonable it seems.

**What to do if you have no lawyer, which is the position most freelancers and small outlets are in.** Several press freedom organizations run legal hotlines and referral services for journalists, and student and nonprofit clinics exist in a number of states. Find out which ones cover you BEFORE you need them, and put the number in your beat file. An hour spent on that now is the difference between a call on the day and a week of improvising.

**Where the track goes next.** You now have the beat, the records, the report, the interview, the verification, and the legal frame. What remains is what to do with a story once it can be told: solutions journalism and what it is not, the pitch and the shapes a story can take, and a capstone that asks you to run the whole method on a beat of your own.

**And the closing sentence of this course, which is the opening one.** This is a map, not advice. The value of a map is that you can see where you are before you decide which way to walk.

:::reveal Name three circumstances that call for a lawyer before publication. ||| An accusation of crime, dishonesty, or professional misconduct against a named person; reliance on material obtained by somebody who may not have been entitled to it; undercover work or entry into non-public space; naming a minor or a sensitive-category victim; a single anonymous source carrying the central allegation; or a subject who has already threatened suit.

:::reveal What arrives that means calling immediately, before doing anything else? ||| A subpoena, a preservation or litigation-hold letter, a retraction demand, a cease and desist, contact from law enforcement, or the discovery that a recording or access rule may have been broken.

:::reveal What three things stop the moment a dispute is foreseeable? ||| Deleting anything, discussing the matter on channels you do not control, and communicating with the other side without telling the lawyer.

## Vocabulary
- **Pre-publication call**: the set of circumstances that require legal review before a story runs.
- **Litigation hold**: a letter requiring preservation of material, which stops any routine deletion immediately.
- **The twenty-minute file**: the sentences at issue, the claim list with confidence levels, the sourcing chain, the reply correspondence, and dated notes.
- **Legal hotline**: a press freedom organization's referral or advice line, identified and recorded before it is needed.

## Sources
- Reporters Committee for Freedom of the Press. (n.d.). *Reporters Committee legal guides*. https://www.rcfp.org/
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "quiz-defenses-minors-lawyer",
      title: "16 · Knowledge check: defenses, minors, and the lawyer",
      section: "Section 4 · Defenses, minors, and the lawyer",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What is the first and best defense to defamation?",
            options: [
              "Truth",
              "A prompt correction after publication",
              "Attribution to a named source",
              "An anti-SLAPP motion",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the verification course is the practical half of this one: a file showing the assertion is accurate is the strongest position available.",
            sourceLessonSlug: "defenses-and-privileges",
          },
          {
            prompt: "What does the fair report privilege cover?",
            options: [
              "A fair and accurate report of an official proceeding or record",
              "Any statement made by a public official in any setting",
              "Any material obtained through a records request",
              "Any report about a matter of public concern",
            ],
            correctIndex: 0,
            explanation:
              "A court hearing, a filed complaint, a council meeting, a police report. Its scope varies by state.",
            sourceLessonSlug: "defenses-and-privileges",
          },
          {
            prompt: "What does the fair report privilege protect, and what does it not?",
            options: [
              "The report, not the underlying assertion",
              "The underlying assertion, once officially recorded",
              "Both, provided the report is attributed",
              "Neither, unless the proceeding was open to the public",
            ],
            correctIndex: 0,
            explanation:
              "Summarizing a filed lawsuit accurately is very different from adopting its allegations as your own.",
            sourceLessonSlug: "defenses-and-privileges",
          },
          {
            prompt: "What does the fair report privilege typically require?",
            options: [
              "That the report be fair, accurate, and often attributed to the proceeding",
              "That the reporter attended the proceeding in person",
              "That the proceeding have concluded before publication",
              "That the subject be given an opportunity to respond",
            ],
            correctIndex: 0,
            explanation:
              "Its exact conditions vary by state, which is one more reason to know your own jurisdiction's version.",
            sourceLessonSlug: "defenses-and-privileges",
          },
          {
            prompt: "What kind of evaluative writing is genuinely safer after Milkovich?",
            options: [
              "Clearly-signaled evaluation resting on disclosed facts",
              "Any statement prefaced with in my view",
              "Any statement published in a labeled opinion section",
              "Any statement phrased as a rhetorical question",
            ],
            correctIndex: 0,
            explanation:
              "State the facts, then say what you make of them. It is also just better writing.",
            sourceLessonSlug: "defenses-and-privileges",
          },
          {
            prompt: "What is neutral reportage?",
            options: [
              "A privilege for accurately reporting a responsible source's newsworthy accusation",
              "A requirement to give equal space to both sides",
              "A rule barring a reporter's own characterizations",
              "A defense available in every state by statute",
            ],
            correctIndex: 0,
            explanation:
              "Some jurisdictions recognize it, others reject it outright, and it should not be relied on without knowing your jurisdiction's position.",
            sourceLessonSlug: "defenses-and-privileges",
          },
          {
            prompt: "What do anti-SLAPP statutes generally allow?",
            options: [
              "Early dismissal, and sometimes fee recovery, for suits targeting public-issue speech",
              "A publisher to countersue for the cost of defending",
              "A court to enjoin a plaintiff from filing further claims",
              "A defendant to move a case from state to federal court",
            ],
            correctIndex: 0,
            explanation:
              "They vary enormously, several states have none, whether they apply in federal court is contested, and there is no general federal statute.",
            sourceLessonSlug: "defenses-and-privileges",
          },
          {
            prompt: "What do retraction statutes typically do?",
            options: [
              "Limit recoverable damages where a prompt correction is made in a specified form",
              "Require an outlet to publish any correction a subject demands",
              "Bar a claim entirely once a correction is published",
              "Extend the deadline for filing a defamation action",
            ],
            correctIndex: 0,
            explanation:
              "The conditions are technical and the deadlines short, which is a specific reason to route a demand to a lawyer the day it arrives.",
            sourceLessonSlug: "defenses-and-privileges",
          },
          {
            prompt: "What helps in every one of the defenses?",
            options: [
              "A contemporaneous file made at the time",
              "An editor's sign-off recorded before publication",
              "A legal opinion obtained after the complaint",
              "A public statement standing behind the reporting",
            ],
            correctIndex: 0,
            explanation:
              "The decomposed claims, the sourcing chain, the right-of-reply email, the responses, and the dated notes.",
            sourceLessonSlug: "defenses-and-privileges",
          },
          {
            prompt: "Why should a retraction demand go to a lawyer the same day?",
            options: [
              "Retraction statutes have technical conditions and short deadlines",
              "Because answering it personally waives the anti-SLAPP defense",
              "Because it constitutes formal service of a claim",
              "Because the outlet's insurer requires immediate notice",
            ],
            correctIndex: 0,
            explanation:
              "A prompt correction in the right form can limit recoverable damages, and the right form is jurisdiction-specific.",
            sourceLessonSlug: "defenses-and-privileges",
          },
          {
            prompt: "What is the legal position on publishing lawfully obtained truthful information about a matter of public significance?",
            options: [
              "The state generally may not punish it absent an interest of the highest order",
              "It may be punished wherever a victim is identified",
              "It may be enjoined where a court finds harm likely",
              "It is prohibited where a juvenile is involved",
            ],
            correctIndex: 0,
            explanation:
              "From The Florida Star and Cox Broadcasting, including in cases involving victims.",
            sourceLessonSlug: "minors-and-sensitive-categories",
          },
          {
            prompt: "What do restrictions on juvenile court records actually limit?",
            options: [
              "Access, on the court's side",
              "Publication of anything about a minor",
              "The naming of minors in any published piece",
              "A reporter's ability to interview a minor",
            ],
            correctIndex: 0,
            explanation:
              "They are not a general prohibition on publishing what a reporter lawfully learns, and reporters mix the two mechanisms up constantly.",
            sourceLessonSlug: "minors-and-sensitive-categories",
          },
          {
            prompt: "What is the operative constraint on naming minors and victims, in practice?",
            options: [
              "Editorial standards, which typically go beyond what the law requires",
              "Federal statute, which prohibits it in most circumstances",
              "State law, which is uniform across jurisdictions",
              "Court order, which is required before any publication",
            ],
            correctIndex: 0,
            explanation:
              "That is a deliberate choice rather than a legal misunderstanding, and it is the standard you should expect to be held to.",
            sourceLessonSlug: "minors-and-sensitive-categories",
          },
          {
            prompt: "What does the professional code say about legal access and publication?",
            options: [
              "Legal access is not the same as an ethical justification to publish",
              "Legal access establishes a presumption in favor of publishing",
              "Legal access is required before any material may be used",
              "Legal access transfers responsibility to the releasing body",
            ],
            correctIndex: 0,
            explanation:
              "Alongside heightened sensitivity with juveniles, victims of sex crimes, and inexperienced sources.",
            sourceLessonSlug: "minors-and-sensitive-categories",
          },
          {
            prompt: "What does federal health privacy law constrain?",
            options: [
              "Who may release information, on the provider's side",
              "What a person may tell a reporter about themselves",
              "What a reporter may publish about a named patient",
              "Whether a hospital may be named in a story",
            ],
            correctIndex: 0,
            explanation:
              "It binds covered providers. It does not govern what somebody chooses to say about their own care.",
            sourceLessonSlug: "minors-and-sensitive-categories",
          },
          {
            prompt: "How does the course treat immigration status and criminal history?",
            options: [
              "Lawful to report, and a minimize-harm question rather than a legal one",
              "Prohibited from publication without consent",
              "Public records that require no additional consideration",
              "Subject to the same restrictions as health information",
            ],
            correctIndex: 0,
            explanation:
              "They can carry severe consequences for the person, which makes them decisions requiring a reason.",
            sourceLessonSlug: "minors-and-sensitive-categories",
          },
          {
            prompt: "What does the law generally not solve about a published name?",
            options: [
              "Its durability, since removal mechanisms rarely reach news archives",
              "Its accuracy, which is the reporter's responsibility",
              "Its placement, which is an editorial decision",
              "Its attribution, which is a matter of style",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the identification decision is made before publication rather than relied on somebody else's discretion afterward.",
            sourceLessonSlug: "minors-and-sensitive-categories",
          },
          {
            prompt: "What is the one line to carry out of the minors lesson?",
            options: [
              "Ask whether you are permitted and whether you are right, separately and in that order",
              "Never name a minor under any circumstances",
              "Name only where the law expressly permits it",
              "Defer the decision to the outlet's legal review",
            ],
            correctIndex: 0,
            explanation:
              "And write down the answer to the second one, because that is the one nobody will be able to reconstruct later.",
            sourceLessonSlug: "minors-and-sensitive-categories",
          },
          {
            prompt: "What is the purpose of the whole course, according to its last lesson?",
            options: [
              "The list of moments to call a lawyer",
              "The summary of the leading cases",
              "The description of the state-by-state variations",
              "The account of the professional code's requirements",
            ],
            correctIndex: 0,
            explanation:
              "You are not expected to answer legal questions. You are expected to notice them early enough that somebody qualified still has options.",
            sourceLessonSlug: "call-the-lawyer",
          },
          {
            prompt: "Which is a pre-publication trigger for legal review?",
            options: [
              "The story accuses a named person of a crime or professional misconduct",
              "The story relies on a records request that was answered late",
              "The story quotes an official who declined to be named",
              "The story concerns an institution that has complained before",
            ],
            correctIndex: 0,
            explanation:
              "With reliance on material somebody may not have been entitled to, undercover work, naming a minor or sensitive-category victim, a single anonymous source carrying the central allegation, or a prior litigation threat.",
            sourceLessonSlug: "call-the-lawyer",
          },
          {
            prompt: "Which arrival means calling immediately, before doing anything else?",
            options: [
              "A preservation or litigation-hold letter",
              "A request for a correction to a minor detail",
              "A complaint from a reader about tone",
              "A request for an interview from another outlet",
            ],
            correctIndex: 0,
            explanation:
              "With a subpoena of any kind, a retraction demand, a cease and desist, law enforcement contact, or the discovery that a recording or access rule may have been broken.",
            sourceLessonSlug: "call-the-lawyer",
          },
          {
            prompt: "What should be ready for the lawyer conversation?",
            options: [
              "The sentences at issue, the claim list, the sourcing chain, the reply correspondence, and dated notes",
              "The full draft and every source's contact details",
              "The outlet's insurance policy and editorial standards",
              "A written summary of the reporter's own legal assessment",
            ],
            correctIndex: 0,
            explanation:
              "Plus the one-sentence version of what you are actually asking. It turns a two-hour conversation into twenty minutes.",
            sourceLessonSlug: "call-the-lawyer",
          },
          {
            prompt: "What three things stop the moment a dispute is foreseeable?",
            options: [
              "Deleting, discussing on channels you do not control, and contacting the other side alone",
              "Reporting, publishing, and correcting",
              "Interviewing, recording, and archiving",
              "Filing records requests, seeking comment, and taking notes",
            ],
            correctIndex: 0,
            explanation:
              "The third one matters however reasonable the contact seems at the time.",
            sourceLessonSlug: "call-the-lawyer",
          },
          {
            prompt: "What should a reporter with no lawyer do?",
            options: [
              "Find which press freedom hotlines and clinics cover them before they need one",
              "Rely on the outlet's general counsel when a problem arises",
              "Publish only material that carries no conceivable risk",
              "Seek advice from a colleague at a larger outlet",
            ],
            correctIndex: 0,
            explanation:
              "Put the number in your beat file. An hour spent now is the difference between a call on the day and a week of improvising.",
            sourceLessonSlug: "call-the-lawyer",
          },
          {
            prompt: "What remains in the track after this course?",
            options: [
              "Solutions journalism, the pitch, and the capstone",
              "Records, reports, and interviews",
              "Verification and the legal frame",
              "The beat and community listening",
            ],
            correctIndex: 0,
            explanation:
              "What to do with a story once it can be told, and a capstone that runs the whole method on a beat of the learner's choosing.",
            sourceLessonSlug: "call-the-lawyer",
          },
          {
            prompt: "What is the closing sentence of the course, and where else does it appear?",
            options: [
              "This is a map, not advice, and it is also the opening",
              "Truth is the best defense, first stated in the defamation section",
              "Call a lawyer, first stated in the privacy section",
              "Know your state's law, first stated in the records course",
            ],
            correctIndex: 0,
            explanation:
              "The value of a map is that you can see where you are before you decide which way to walk.",
            sourceLessonSlug: "call-the-lawyer",
          },
          {
            prompt: "Why is a single anonymous source carrying a central allegation a legal trigger?",
            options: [
              "It is one of the named pre-publication circumstances requiring review",
              "Because anonymous sources are inadmissible in litigation",
              "Because shield laws do not cover single-source stories",
              "Because attribution to an anonymous source is defamatory in itself",
            ],
            correctIndex: 0,
            explanation:
              "It sits with criminal accusations, questionably obtained material, undercover work, sensitive-category names, and prior litigation threats.",
            sourceLessonSlug: "call-the-lawyer",
          },
          {
            prompt: "What does the course say about a subject who has already threatened litigation?",
            options: [
              "It is a pre-publication trigger for legal review",
              "It is a reason to publish sooner rather than later",
              "It is a reason to remove the subject's name",
              "It has no bearing until a claim is actually filed",
            ],
            correctIndex: 0,
            explanation:
              "It is one of the six circumstances that call for a lawyer before the story runs.",
            sourceLessonSlug: "call-the-lawyer",
          },
          {
            prompt: "What is the twenty-minute file?",
            options: [
              "The material that makes a legal conversation short and useful",
              "The record required by most outlets before publication",
              "The archive of every document obtained during reporting",
              "The summary an editor prepares for legal review",
            ],
            correctIndex: 0,
            explanation:
              "The sentences at issue rather than the whole story, the claim list with confidence levels, the sourcing chain, the reply correspondence, and dated notes.",
            sourceLessonSlug: "call-the-lawyer",
          },
          {
            prompt: "Why does the course say to bring the sentences at issue rather than the whole story?",
            options: [
              "The specific sentences are what a legal question actually concerns",
              "Because lawyers charge by the page reviewed",
              "Because the whole story may not be shared before publication",
              "Because an editor reviews the story and a lawyer reviews sentences",
            ],
            correctIndex: 0,
            explanation:
              "It is one of the six things that turn a two-hour conversation into twenty minutes.",
            sourceLessonSlug: "call-the-lawyer",
          },
          {
            prompt: "What kind of organizations run legal hotlines for journalists?",
            options: [
              "Press freedom organizations, plus student and nonprofit clinics",
              "State bar associations, which are required to provide them",
              "Newsroom unions, as part of collective agreements",
              "Insurers, as a condition of media liability cover",
            ],
            correctIndex: 0,
            explanation:
              "Find out which ones cover you before you need them, which is the position most freelancers and small outlets are in.",
            sourceLessonSlug: "call-the-lawyer",
          },
          {
            prompt: "What does a fair and accurate report of a filed complaint let you do?",
            options: [
              "Report what the complaint alleges without adopting the allegations",
              "Assert the allegations as established facts",
              "Publish without seeking any response",
              "Ignore the fault standard entirely",
            ],
            correctIndex: 0,
            explanation:
              "The privilege protects the report rather than the underlying assertion, which is the distinction to keep in the writing.",
            sourceLessonSlug: "defenses-and-privileges",
          },
          {
            prompt: "What is the risk of relying on neutral reportage?",
            options: [
              "Some jurisdictions reject it outright",
              "It requires the accusation to be true",
              "It applies only to private figures",
              "It has been superseded by the fair report privilege",
            ],
            correctIndex: 0,
            explanation:
              "Do not rely on it without knowing your jurisdiction's position, which is a question a media lawyer answers quickly.",
            sourceLessonSlug: "defenses-and-privileges",
          },
          {
            prompt: "What is one of the first questions a media lawyer will ask?",
            options: [
              "Whether an anti-SLAPP statute covers you",
              "Whether the source will testify",
              "Whether the outlet carries insurance",
              "Whether the story can be unpublished",
            ],
            correctIndex: 0,
            explanation:
              "They vary enormously in scope, several states have none, and whether they apply in federal court is contested.",
            sourceLessonSlug: "defenses-and-privileges",
          },
          {
            prompt: "What does the course say is the strongest legal position available?",
            options: [
              "A file showing the assertion is accurate and how you established it",
              "A signed release from every person named",
              "A legal opinion obtained before publication",
              "A prompt correction policy applied consistently",
            ],
            correctIndex: 0,
            explanation:
              "Truth is the first and best defense, which is why the verification course is the practical half of this one.",
            sourceLessonSlug: "defenses-and-privileges",
          },
          {
            prompt: "Which mechanisms does the course say reporters constantly confuse?",
            options: [
              "Access restrictions and publication prohibitions",
              "Defamation and false light",
              "State shield laws and the federal privilege",
              "Correction statutes and anti-SLAPP statutes",
            ],
            correctIndex: 0,
            explanation:
              "Juvenile records are restricted on the court's side, which limits obtaining them rather than publishing what you lawfully learn.",
            sourceLessonSlug: "minors-and-sensitive-categories",
          },
          {
            prompt: "Why do newsroom standards on naming go beyond the law?",
            options: [
              "It is a deliberate choice rather than a legal misunderstanding",
              "Because the law is unclear in most states",
              "Because insurers require the additional restriction",
              "Because professional bodies impose them by rule",
            ],
            correctIndex: 0,
            explanation:
              "And it is the standard a reporter should expect to be held to, whatever the law permits.",
            sourceLessonSlug: "minors-and-sensitive-categories",
          },
          {
            prompt: "What kind of question are immigration status and criminal history?",
            options: [
              "Minimize-harm questions rather than legal ones",
              "Legal questions requiring counsel before publication",
              "Access questions governed by records law",
              "Attribution questions governed by style",
            ],
            correctIndex: 0,
            explanation:
              "Lawful to report and capable of severe consequences, which makes them decisions requiring a reason.",
            sourceLessonSlug: "minors-and-sensitive-categories",
          },
          {
            prompt: "What is a provider-side restriction?",
            options: [
              "A rule binding who may release information rather than what a person may say",
              "A limit on which reporters may attend a proceeding",
              "A restriction imposed by a court on publication",
              "A condition attached to a records release",
            ],
            correctIndex: 0,
            explanation:
              "Federal health privacy law binds covered providers, not the patient's own account of their care.",
            sourceLessonSlug: "minors-and-sensitive-categories",
          },
          {
            prompt: "What should be written down about the second question in the minors lesson?",
            options: [
              "The answer to whether you are right, as distinct from permitted",
              "The legal basis for publishing the name",
              "The editor's approval of the identification decision",
              "The subject's response to being identified",
            ],
            correctIndex: 0,
            explanation:
              "Nobody will be able to reconstruct that judgment later, which is why it goes in the file at the time.",
            sourceLessonSlug: "minors-and-sensitive-categories",
          },
          {
            prompt: "What is a litigation hold?",
            options: [
              "A letter requiring preservation, which stops any routine deletion immediately",
              "A court order suspending publication",
              "An internal decision to delay a story",
              "A demand that a correction be published",
            ],
            correctIndex: 0,
            explanation:
              "It is one of the arrivals that means calling a lawyer before doing anything else.",
            sourceLessonSlug: "call-the-lawyer",
          },
          {
            prompt: "Why does the course put the hotline number in the beat file?",
            options: [
              "So it exists before it is needed",
              "So the outlet can be billed for the call",
              "So sources can contact it directly",
              "So an editor can verify it was consulted",
            ],
            correctIndex: 0,
            explanation:
              "An hour spent finding out which service covers you is the difference between a call on the day and a week of improvising.",
            sourceLessonSlug: "call-the-lawyer",
          },
          {
            prompt: "Which of these is NOT a pre-publication trigger the course names?",
            options: [
              "The story is longer than the desk originally commissioned",
              "The story involves entry into non-public space",
              "The story names a sensitive-category victim",
              "The story relies on questionably obtained material",
            ],
            correctIndex: 0,
            explanation:
              "The six are criminal or misconduct accusations, questionably obtained material, undercover work, sensitive names, a single anonymous central source, and a prior litigation threat.",
            sourceLessonSlug: "call-the-lawyer",
          },
          {
            prompt: "What does the course say about communicating with the other side once a dispute is foreseeable?",
            options: [
              "Not without telling the lawyer, however reasonable it seems",
              "Only in writing, and only through the editor",
              "Freely, since informal resolution is usually cheapest",
              "Only after the outlet has published a correction",
            ],
            correctIndex: 0,
            explanation:
              "With not deleting anything and not discussing the matter on channels you do not control.",
            sourceLessonSlug: "call-the-lawyer",
          },
          {
            prompt: "What does the fair report privilege's variation by state mean in practice?",
            options: [
              "Know your own jurisdiction's version before relying on it",
              "Assume the broadest version applies wherever you publish",
              "Assume it does not exist unless a statute says so",
              "Rely on the federal standard, which sets a floor",
            ],
            correctIndex: 0,
            explanation:
              "Its scope, its conditions, and whether attribution is required all differ.",
            sourceLessonSlug: "defenses-and-privileges",
          },
          {
            prompt: "What is the practical writing advice that follows from Milkovich?",
            options: [
              "State the facts, then say what you make of them",
              "Label evaluative passages clearly as opinion",
              "Attribute every characterization to a source",
              "Avoid evaluation in news writing entirely",
            ],
            correctIndex: 0,
            explanation:
              "A statement that cannot reasonably be read as asserting a provable fact is not defamatory, and disclosed facts are what make evaluation read that way.",
            sourceLessonSlug: "defenses-and-privileges",
          },
          {
            prompt: "What does the course say improves your position more than anything done afterward?",
            options: [
              "The record you made at the time",
              "A public statement standing behind the story",
              "A prompt correction of any disputed detail",
              "Retaining specialist counsel early",
            ],
            correctIndex: 0,
            explanation:
              "The decomposed claims, the sourcing chain, the right-of-reply correspondence, the responses, and the dated notes.",
            sourceLessonSlug: "defenses-and-privileges",
          },
          {
            prompt: "How does the course frame being permitted versus being right?",
            options: [
              "Different questions with different answers, asked separately and in that order",
              "The same question answered by different bodies of law",
              "A legal question followed by an editorial formality",
              "An editorial question that the law resolves",
            ],
            correctIndex: 0,
            explanation:
              "The professional code's point that legal access is not an ethical justification is the sentence the lesson turns on.",
            sourceLessonSlug: "minors-and-sensitive-categories",
          },
          {
            prompt: "What does the course say about removal or sealing mechanisms for published names?",
            options: [
              "Most jurisdictions have none, and none reach news archives as a matter of course",
              "They are widely available and routinely granted",
              "They apply automatically once a person turns eighteen",
              "They are administered by the publishing outlet",
            ],
            correctIndex: 0,
            explanation:
              "Which is why identification is decided before publication rather than relied on somebody else's discretion later.",
            sourceLessonSlug: "minors-and-sensitive-categories",
          },
          {
            prompt: "What is the value of a map, in the course's closing image?",
            options: [
              "Seeing where you are before deciding which way to walk",
              "Knowing the destination before the journey begins",
              "Replacing the need for a guide",
              "Measuring the distance still to travel",
            ],
            correctIndex: 0,
            explanation:
              "Which is the same claim the first lesson made about what a non-advice legal course can honestly offer.",
            sourceLessonSlug: "call-the-lawyer",
          },
          {
            prompt: "Which defense does the course pair most closely with the verification course?",
            options: [
              "Truth",
              "The fair report privilege",
              "Neutral reportage",
              "Anti-SLAPP",
            ],
            correctIndex: 0,
            explanation:
              "A file showing the assertion is accurate and how you established it is the strongest legal position available.",
            sourceLessonSlug: "defenses-and-privileges",
          },
          {
            prompt: "What does the course say about the deadlines attached to retraction statutes?",
            options: [
              "Short, which is why the demand goes to a lawyer the day it arrives",
              "Generous, which is why a reporter can answer one personally",
              "Uniform across states, so one procedure covers every demand",
              "Set by the outlet's own corrections policy",
            ],
            correctIndex: 0,
            explanation:
              "The conditions are technical as well, and a prompt correction in the right form can limit recoverable damages.",
            sourceLessonSlug: "defenses-and-privileges",
          },
          {
            prompt: "What does the course say the reporter's job is, regarding legal questions?",
            options: [
              "Noticing them, not answering them",
              "Answering the routine ones and escalating the rest",
              "Documenting them for the editor to resolve",
              "Avoiding stories that raise them at all",
            ],
            correctIndex: 0,
            explanation:
              "Early enough that somebody qualified still has options, which is the purpose of the whole course.",
            sourceLessonSlug: "call-the-lawyer",
          },
        ],
      },
    },
    {
      slug: "final-media-law",
      title: "17 · Final: the law you work inside",
      section: "Section 4 · Defenses, minors, and the lawyer",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 10,
        questions: [
          {
            prompt: "What is this course's standing?",
            options: [
              "A map, not legal advice",
              "A statement of settled law in every jurisdiction",
              "A substitute for legal review of routine stories",
              "Guidance written by counsel for newsroom use",
            ],
            correctIndex: 0,
            explanation:
              "General principles lose to specific facts, and the answer comes from a lawyer licensed where you publish.",
            sourceLessonSlug: "not-legal-advice",
          },
          {
            prompt: "What is the single most useful distinction in the course?",
            options: [
              "Gathering is judged separately from publishing",
              "Federal law preempts state law where both apply",
              "Truth defeats every claim a reporter faces",
              "Opinion is exempt from defamation liability",
            ],
            correctIndex: 0,
            explanation:
              "A story can be true, publishable, and still expose you because of what you did to get it.",
            sourceLessonSlug: "not-legal-advice",
          },
          {
            prompt: "What does a defamation claim generally require?",
            options: [
              "A false statement of fact about an identifiable person, published, harming reputation, with fault",
              "An offensive published statement causing the subject a measurable financial loss",
              "A published accusation that the subject has formally denied within a statutory window",
              "Any published statement about a person that the person would have preferred unpublished",
            ],
            correctIndex: 0,
            explanation:
              "Each element is separate, and a story survives by failing any one of them.",
            sourceLessonSlug: "what-defamation-requires",
          },
          {
            prompt: "What did Milkovich decide about opinion?",
            options: [
              "There is no separate wholesale exemption for it",
              "All opinion is constitutionally protected",
              "Opinion is protected where clearly labeled",
              "Opinion is actionable only against public figures",
            ],
            correctIndex: 0,
            explanation:
              "497 U.S. 1 (1990). A statement implying an assertion of objective fact can be actionable however it is phrased.",
            sourceLessonSlug: "what-defamation-requires",
          },
          {
            prompt: "Who bears the burden of proving falsity under Hepps?",
            options: [
              "A private-figure plaintiff suing media over public-concern speech",
              "The media defendant, in every defamation action brought against a publisher",
              "The plaintiff, but only where they hold public office at the time of publication",
              "Neither party, because falsity is presumed as it was at common law",
            ],
            correctIndex: 0,
            explanation:
              "475 U.S. 767 (1986). A real protection, and not a reason to relax, because litigation is expensive whoever wins.",
            sourceLessonSlug: "what-defamation-requires",
          },
          {
            prompt: "What does actual malice mean?",
            options: [
              "Knowledge of falsity, or reckless disregard of whether it was false",
              "Demonstrated ill will or personal hostility toward the subject of the story",
              "A failure to seek comment from the subject before the piece was published",
              "Publishing after receiving a warning letter from the subject's own counsel",
            ],
            correctIndex: 0,
            explanation:
              "From New York Times Co. v. Sullivan, 376 U.S. 254 (1964). It is not bias and not aggressive reporting.",
            sourceLessonSlug: "actual-malice",
          },
          {
            prompt: "What did Gertz hold about private figures?",
            options: [
              "States may set their own standard but not liability without fault",
              "They must show actual malice, exactly as a public official suing over official conduct does",
              "They need show no fault at all, since liability without fault remains available",
              "They may not recover damages at all where the defendant is a media organization",
            ],
            correctIndex: 0,
            explanation:
              "418 U.S. 323 (1974). It also held presumed and punitive damages generally require actual malice, and most states chose negligence.",
            sourceLessonSlug: "actual-malice",
          },
          {
            prompt: "What is a limited-purpose public figure?",
            options: [
              "Someone public only as to a controversy they entered",
              "Someone famous generally but outside government",
              "A government employee below policymaking level",
              "A private person mentioned once in the news",
            ],
            correctIndex: 0,
            explanation:
              "Whether a given person qualifies is litigated constantly and turns on the facts, which is why you assume you will have to show care.",
            sourceLessonSlug: "actual-malice",
          },
          {
            prompt: "How many distinct privacy torts does American tort law generally recognize?",
            options: [
              "Four",
              "One general invasion-of-privacy claim",
              "Two, split by gathering and publishing",
              "Six, matching the professional code's categories",
            ],
            correctIndex: 0,
            explanation:
              "Intrusion, public disclosure of private facts, false light, and appropriation. Not every state recognizes all four.",
            sourceLessonSlug: "four-privacy-torts",
          },
          {
            prompt: "Which privacy tort does a reporter actually meet, and why?",
            options: [
              "Intrusion, because it is about the gathering",
              "False light, because it resembles defamation",
              "Appropriation, because news use is commercial",
              "Public disclosure, because publication is the risk",
            ],
            correctIndex: 0,
            explanation:
              "It can be complete before a word is written and is not cured by the story being true or important.",
            sourceLessonSlug: "four-privacy-torts",
          },
          {
            prompt: "Why is truth not a general defense across privacy claims?",
            options: [
              "Intrusion is about how you got it and disclosure concerns true material",
              "Because the privacy claims are federal causes of action rather than state ones",
              "Because the defendant carries the burden of proving truth in every privacy case",
              "Because privacy claims do not require any false statement to be identified at all",
            ],
            correctIndex: 0,
            explanation:
              "The most commonly missed fact in the privacy section.",
            sourceLessonSlug: "four-privacy-torts",
          },
          {
            prompt: "What general rule about conduct did Cohen v. Cowles Media establish?",
            options: [
              "Generally applicable law may be applied to the press like anyone else",
              "The press is exempt from tort claims arising from true reporting",
              "Only statutes naming the press may be applied to it",
              "Contract claims against publishers are barred",
            ],
            correctIndex: 0,
            explanation:
              "501 U.S. 663 (1991). Trespass, fraud, and contract law reach reporters regardless of what the story showed.",
            sourceLessonSlug: "newsgathering-liability",
          },
          {
            prompt: "What survived in the Food Lion litigation?",
            options: [
              "Liability arising from the conduct of getting the story",
              "The defamation claim brought over the content of the broadcast itself",
              "A claim that the broadcast invaded the grocery chain's own privacy interests",
              "An injunction preventing the network from broadcasting the material again",
            ],
            correctIndex: 0,
            explanation:
              "Decided by the Fourth Circuit in 1999. Read the decision rather than a summary, including this one.",
            sourceLessonSlug: "newsgathering-liability",
          },
          {
            prompt: "Where is most newsgathering exposure found?",
            options: [
              "Unlocked doors, cross-border calls, and denying you are a reporter",
              "Hidden cameras and long-term undercover placements inside an institution",
              "Payments made to sources in exchange for exclusive access to material",
              "Publishing a story before an official investigation has formally concluded",
            ],
            correctIndex: 0,
            explanation:
              "Ordinary afternoons rather than dramatic operations.",
            sourceLessonSlug: "newsgathering-liability",
          },
          {
            prompt: "What does 18 U.S.C. 2511 generally permit?",
            options: [
              "A party to a communication to record it, absent a criminal or tortious purpose",
              "Any working journalist to record any communication they consider newsworthy",
              "Recording only where every party has given consent in a signed written form",
              "Recording only where a court has authorized the interception in advance",
            ],
            correctIndex: 0,
            explanation:
              "It is the one-party floor, and a number of states require all-party consent with criminal penalties.",
            sourceLessonSlug: "recording-consent",
          },
          {
            prompt: "What is the safe assumption on a cross-border call?",
            options: [
              "The stricter of the two states' rules",
              "The reporter's own state's rule",
              "The source's state's rule",
              "The federal rule, which preempts both",
            ],
            correctIndex: 0,
            explanation:
              "Which rule applies is not obvious and has been litigated. The safe habit is to ask.",
            sourceLessonSlug: "recording-consent",
          },
          {
            prompt: "Why does the course decline to print an Indiana recording citation?",
            options: [
              "This pass could not read the current text against a primary source",
              "Because Indiana's recording statute is not made available to the public online",
              "Because the federal wiretap statute governs the question in place of state law",
              "Because the consent rule varies between counties within the state of Indiana",
            ],
            correctIndex: 0,
            explanation:
              "Indiana is commonly described as one-party consent, and the course names that characterization without printing an unverified section.",
            sourceLessonSlug: "recording-consent",
          },
          {
            prompt: "What habit resolves most recording questions?",
            options: [
              "Say you are recording, say it is for accuracy, and record the agreement",
              "Record everything you can and decide afterward what may lawfully be used",
              "Take written notes rather than recording whenever you are in an unfamiliar state",
              "Ask the source for a written statement instead of recording the conversation",
            ],
            correctIndex: 0,
            explanation:
              "Eight seconds, and it satisfies an all-party rule wherever one applies.",
            sourceLessonSlug: "recording-consent",
          },
          {
            prompt: "What did Branzburg v. Hayes decide?",
            options: [
              "No First Amendment privilege to refuse grand jury testimony about confidential information",
              "An absolute privilege protecting reporters against every form of subpoena",
              "A qualified privilege recognized uniformly across all of the federal circuits",
              "That state shield statutes are preempted wherever a federal proceeding is involved",
            ],
            correctIndex: 0,
            explanation:
              "408 U.S. 665 (1972). Later courts have read it in a range of ways, so federal protection is contested and uneven.",
            sourceLessonSlug: "shield-and-privilege",
          },
          {
            prompt: "What exists federally in place of a shield statute?",
            options: [
              "A Justice Department policy constraining the Department's own conduct",
              "A statutory reporter's privilege enacted by Congress and still in force today",
              "A rule of evidence adopted by the federal courts recognizing a press privilege",
              "A regulation binding every federal agency that seeks records from journalists",
            ],
            correctIndex: 0,
            explanation:
              "28 C.F.R. 50.10. An internal policy rather than a privilege you hold, revised more than once, binding nobody outside the Department.",
            sourceLessonSlug: "shield-and-privilege",
          },
          {
            prompt: "Which Indiana chapter carries its shield provision, and what does the course print about it?",
            options: [
              "Indiana Code 34-46-4, and the course refuses to print its scope",
              "Indiana Code 5-14-3, printed here with its full list of covered categories",
              "Indiana Code 5-14-4, printed here with the operative language of the provision",
              "Indiana Code 5-14-1.5, printed here with each of its stated exceptions",
            ],
            correctIndex: 0,
            explanation:
              "The details are precisely what would matter and this pass could not read them against a primary text, so a source check is filed.",
            sourceLessonSlug: "shield-and-privilege",
          },
          {
            prompt: "What is the covered-person problem?",
            options: [
              "Whether statutes written for newspaper and broadcast employees reach independent publishers",
              "Whether a source rather than the reporter may invoke the shield on their own behalf",
              "Whether editors and photographers are covered separately from reporters themselves",
              "Whether a shield statute reaches material a reporter published outside the state",
            ],
            correctIndex: 0,
            explanation:
              "The answer sometimes turns on showing a journalistic purpose at the time the material was gathered.",
            sourceLessonSlug: "shield-and-privilege",
          },
          {
            prompt: "What did Congress pass after Zurcher v. Stanford Daily?",
            options: [
              "The Privacy Protection Act of 1980",
              "A federal shield statute",
              "The Freedom of Information Act",
              "A rule barring newsroom subpoenas",
            ],
            correctIndex: 0,
            explanation:
              "42 U.S.C. 2000aa, restricting government searches and seizures of work product and documentary materials, subject to exceptions.",
            sourceLessonSlug: "notes-and-materials",
          },
          {
            prompt: "What does the Privacy Protection Act not do?",
            options: [
              "Stop a subpoena or create a privilege against testifying",
              "Restrict government searches of journalistic material",
              "Push the government toward a subpoena",
              "Cover people reasonably believed to be engaged in publishing",
            ],
            correctIndex: 0,
            explanation:
              "Treat it as a reason to call a lawyer immediately rather than as an answer.",
            sourceLessonSlug: "notes-and-materials",
          },
          {
            prompt: "What is the rule about retention and deletion?",
            options: [
              "Decide the practice when nothing is happening, and stop deleting when something is",
              "Delete material routinely, so as to minimize what any future demand could reach",
              "Retain everything indefinitely, regardless of what the outlet's policy provides",
              "Follow whatever individual preference each source expresses about their material",
            ],
            correctIndex: 0,
            explanation:
              "Deleting once litigation or an investigation is reasonably foreseeable can carry serious consequences of its own.",
            sourceLessonSlug: "notes-and-materials",
          },
          {
            prompt: "What do encryption and secure channels not do?",
            options: [
              "Stop a subpoena to you, or help if the other end keeps everything",
              "Protect material while it is in transit between two correspondents",
              "Protect material at rest on a device against at least some kinds of threat",
              "Reduce the number of intermediaries handling a message between two people",
            ],
            correctIndex: 0,
            explanation:
              "And they can create a false sense of protection you then pass on to a source.",
            sourceLessonSlug: "notes-and-materials",
          },
          {
            prompt: "What are the three conditions carrying the Bartnicki holding?",
            options: [
              "No participation in the unlawful act, lawful receipt, and public concern",
              "A public figure subject, accurate reporting of it, and prior notice to that subject",
              "A government source, an official record, and an open public proceeding",
              "Two independent sources, an offered right of reply, and a stated publication deadline",
            ],
            correctIndex: 0,
            explanation:
              "532 U.S. 514 (2001). Change any one and you are outside what the case decided.",
            sourceLessonSlug: "publishing-what-others-obtained",
          },
          {
            prompt: "What did The Florida Star v. B.J.F. hold?",
            options: [
              "Punishing publication of lawfully obtained truthful information of public significance requires an interest of the highest order",
              "That the names of crime victims may never lawfully be published by a newspaper",
              "That any information appearing in a police report is automatically publishable",
              "That a court may enjoin publication where it finds serious privacy harm likely",
            ],
            correctIndex: 0,
            explanation:
              "491 U.S. 524 (1989), where the name came from a publicly released police report. Cox Broadcasting (1975) reached a comparable conclusion about court records.",
            sourceLessonSlug: "publishing-what-others-obtained",
          },
          {
            prompt: "What do the publication cases not settle?",
            options: [
              "Whether publishing is right, how you got it, and the harm to the person",
              "Whether the state may constitutionally punish the publication in question",
              "Whether the material reaching the publisher was itself lawfully obtained",
              "Whether the subject matter was of genuine public significance at the time",
            ],
            correctIndex: 0,
            explanation:
              "The minimize-harm standard operates entirely inside the space these cases leave legally permitted.",
            sourceLessonSlug: "publishing-what-others-obtained",
          },
          {
            prompt: "What is prior restraint protection, and what is it not?",
            options: [
              "A heavy presumption against being stopped, not protection against consequences after",
              "An absolute bar on any punishment imposed for publishing lawfully obtained material",
              "A doctrine that applies only where national security material is at issue",
              "A rule requiring advance notice to a publisher before any injunction may issue",
            ],
            correctIndex: 0,
            explanation:
              "From Near v. Minnesota (1931) through New York Times Co. v. United States (1971).",
            sourceLessonSlug: "publishing-what-others-obtained",
          },
          {
            prompt: "What does the fair report privilege protect?",
            options: [
              "The report, not the underlying assertion",
              "Both the report and the assertion, if attributed",
              "Any statement made in an official setting",
              "Any material obtained through official channels",
            ],
            correctIndex: 0,
            explanation:
              "Summarizing a filed lawsuit accurately is very different from adopting its allegations as your own.",
            sourceLessonSlug: "defenses-and-privileges",
          },
          {
            prompt: "What do anti-SLAPP statutes do, and where do they apply?",
            options: [
              "Allow early dismissal and sometimes fees, in many but not all states",
              "Apply uniformly across the country under a single general federal statute",
              "Apply only in federal court, and never to a case filed in a state court",
              "Bar defamation claims outright wherever the defendant is a media organization",
            ],
            correctIndex: 0,
            explanation:
              "They vary enormously, several states have none, and whether they apply in federal court is contested.",
            sourceLessonSlug: "defenses-and-privileges",
          },
          {
            prompt: "What do retraction statutes typically do?",
            options: [
              "Limit recoverable damages where a prompt correction is made in a specified form",
              "Bar a defamation claim entirely once any correction has been published by the outlet",
              "Require an outlet to publish whatever correction the complaining party demands",
              "Extend the limitation period for filing a claim by the length of the correction process",
            ],
            correctIndex: 0,
            explanation:
              "The conditions are technical and the deadlines short, so a demand goes to a lawyer the day it arrives.",
            sourceLessonSlug: "defenses-and-privileges",
          },
          {
            prompt: "What do juvenile record restrictions actually limit?",
            options: [
              "Access, on the court's side",
              "Publication of anything concerning a minor",
              "A reporter's ability to interview a minor",
              "The naming of minors in any published piece",
            ],
            correctIndex: 0,
            explanation:
              "They are not a general prohibition on publishing what a reporter lawfully learns, and the two mechanisms are constantly confused.",
            sourceLessonSlug: "minors-and-sensitive-categories",
          },
          {
            prompt: "What is the operative constraint on naming, in practice?",
            options: [
              "Editorial standards, which go beyond what the law requires",
              "Federal statute, which prohibits naming in the great majority of these cases",
              "State law, which is substantially uniform across American jurisdictions",
              "A court order, which must be obtained before publication in every instance",
            ],
            correctIndex: 0,
            explanation:
              "A deliberate choice rather than a legal misunderstanding, and the standard a reporter should expect to be held to.",
            sourceLessonSlug: "minors-and-sensitive-categories",
          },
          {
            prompt: "What does federal health privacy law constrain?",
            options: [
              "Who may release information, on the provider's side",
              "What a person may say about their own care",
              "What a reporter may publish about a patient",
              "Whether a hospital may be named",
            ],
            correctIndex: 0,
            explanation:
              "Which is why immigration status, criminal history, and health are minimize-harm decisions rather than legal prohibitions.",
            sourceLessonSlug: "minors-and-sensitive-categories",
          },
          {
            prompt: "What is the one line to carry out of the minors lesson?",
            options: [
              "Ask whether you are permitted and whether you are right, separately and in that order",
              "Never name a minor in a published story under any circumstances whatsoever",
              "Name a minor only in the narrow situations where a statute expressly permits it",
              "Defer every identification decision to the outlet's pre-publication legal review",
            ],
            correctIndex: 0,
            explanation:
              "And write down the answer to the second, because nobody will be able to reconstruct that judgment later.",
            sourceLessonSlug: "minors-and-sensitive-categories",
          },
          {
            prompt: "Which arrival means calling a lawyer before doing anything else?",
            options: [
              "A subpoena, a litigation hold, a retraction demand, or law enforcement contact",
              "A reader complaint about the tone of a published piece on your beat",
              "A request to correct a minor factual detail such as a misspelled title",
              "An interview request from a competing outlet covering the same subject",
            ],
            correctIndex: 0,
            explanation:
              "With a cease and desist, and the discovery that a recording or access rule may have been broken.",
            sourceLessonSlug: "call-the-lawyer",
          },
          {
            prompt: "What three things stop the moment a dispute is foreseeable?",
            options: [
              "Deleting, discussing on channels you do not control, and contacting the other side alone",
              "Reporting the story, publishing the piece, and correcting any error afterward",
              "Interviewing new sources, recording conversations, and archiving the material",
              "Filing records requests, seeking comment from the subject, and taking notes",
            ],
            correctIndex: 0,
            explanation:
              "The third holds however reasonable the contact seems at the time.",
            sourceLessonSlug: "call-the-lawyer",
          },
          {
            prompt: "What is the first and best defense to defamation?",
            options: [
              "Truth",
              "A prompt public correction",
              "Attribution to a named source",
              "An early anti-SLAPP motion",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the verification course is the practical half of this one: a file showing the assertion is accurate is the strongest position available.",
            sourceLessonSlug: "defenses-and-privileges",
          },
        ],
      },
    },
  ],
};
