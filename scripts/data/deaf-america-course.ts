import type { AuthoredCourse } from "./authored-course";

// "Deaf America: Language, Schools, and the Record" (Culture & History). Tier 0. Standalone: it is
// NOT in the `credit` series, because only one of its six sections is a credit mechanism end to end
// and a series code that overstates the spine is worse than none. PRIVATE and FREE by BAM's
// decision 06 of 2026-08-30 ("build it, make it free and private to me only, I'll try to find a
// deaf teacher"), which is the §7 condition of the feasibility document made operational: the
// course exists, nobody outside the owner can read it, and it publishes when a Deaf co-author has
// been found, paid, credited, and has had the authority to change or cut any of it.
//
// WHAT BAM APPROVED, and the research that produced it:
// plans/future-courses/languages/2026-08-25-02-sign-language-feasibility.md sections 3 to 7. That
// document established, by reading the actual licence text, that every usable sign-media dataset is
// barred from a paid course (ASL-LEX carves the videos out entirely, WLASL allows no commercial
// usage, ASL Citizen forbids redistribution of any kind), and that a signing curriculum needs a Deaf
// co-author and original video that does not exist. So this course teaches HISTORY, CULTURE,
// LINGUISTICS and LAW, requires no video, and says in its first lesson that it does not teach anyone
// to sign.
//
// THE THESIS, and why it belongs in this catalog rather than in a language app:
// A language was used for two centuries before the academy agreed it was a language, and the people
// who used it were described, schooled, legislated about and recorded almost entirely by people who
// did not use it. That is this catalog's subject (`who-gets-named`, `archives-and-finding-aids`,
// `documents-against-people`) operating on an entire language. BLACK ASL IS THE CENTRE: a variety
// produced by segregated schools, then judged wrong by the standard it had been excluded from, and
// not described in the scholarly record until 2011.
//
// HARD RULES THIS FILE KEEPS (do not relax without BAM's editorial sign-off):
//  1. IT DOES NOT TEACH SIGNS. No lesson asks a learner to produce a sign, and no lesson describes a
//     sign's form as something to copy. Grammar is taught the way a syntax course teaches Japanese
//     to people who do not speak Japanese.
//  2. STANDPOINT IS STATED, NOT IMPLIED. Lesson 1 says in plain words that a hearing author wrote
//     this from published sources, what that costs, and where to learn ASL from Deaf teachers
//     instead. The course description says it above the fold as well.
//  3. IDENTITY CLAIMS REQUIRE A PUBLIC SELF-STATEMENT with a citation, the same rule
//     `who-gets-named` keeps. Deaf identity is an identity claim.
//  4. CONTESTED CLAIMS ARE TAUGHT AS CONTESTED with the holders of each position named.
//  5. NO INVENTED SOURCE, DATE, QUOTATION, URL OR STATISTIC, and every "first" carries the
//     institution that issues it. What could not be settled is hedged in the lesson AND filed in
//     src/lib/research-checks.ts.
//
// WHERE THE FACTS COME FROM, and the one thing that limits every citation in this file:
// plans/future-courses/languages/2026-08-27-04-black-asl-verification.md is a primary-source
// verification report produced by an earlier research pass that FETCHED AND READ the pages it
// lists, and this file follows it exactly, including its three "fix before this ships" items: the
// constructed-action feature is taught as unresolved rather than as a finding, the McCaskill
// quotation is the four words the book actually prints, and the 2011 ISBN is not printed at all.
// The identifiers reproduced here are the ones that report recorded as read. Nothing in this file
// carries a DOI or URL that no pass has retrieved. Where an authoritative page was blocked to
// automated fetching (gallaudet.edu, nfb.org, the AFB and NAD pages), the claim is either dropped
// or attributed to the source that WAS read, and the gap is filed in src/lib/research-checks.ts.
//
// House style, matching who-gets-named-course.ts: `section` on every lesson; flush-left single-line
// `:::reveal q ||| a`; a `## Vocabulary` block of 3-6 lesson-specific terms; APA 7 `## Sources`; a
// quiz per teaching section (serving 5, passing 80, shuffled) plus a final serving 10; every question
// carries `explanation` + `sourceLessonSlug`. Correct options are written SHORT and distractors long
// and specific, so `check-longest-option` passes by construction.
export const DEAF_AMERICA_COURSE: AuthoredCourse = {
  title: "Deaf America: Language, Schools, and the Record",
  description:
    "This course does not teach you to sign, and that sentence is the first thing it says out loud rather than the last. It was written by a hearing author from published sources, and it teaches history, culture, linguistics and law: what makes American Sign Language a language rather than English on the hands, what the residential school did for a scattered minority and what the Milan Congress of 1880 did to it, and, at the centre, Black ASL. Beginning in 1869, seventeen states and the District of Columbia ran separate schools or departments for Black Deaf children, the last of them opening in Louisiana in 1938. Most resisted the desegregation that Brown v. Board required in 1954 and did not integrate until the mid-1960s; Louisiana held out until 1978. The underfunding that gave those students less of everything also left them being taught in sign while white Deaf students were being taught orally. The variety that came out of that was called wrong by the standard it had been excluded from, and it was not systematically described until 2011. Every contested claim here is taught as contested with the holders of each position named, every identity claim rests on a public self-statement, and the research team's own caution about its own findings is quoted rather than smoothed over. To learn ASL, learn it from Deaf teachers, and the last lesson says where to start looking.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1 — Whose account this is, and what a signed language is
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "standpoint-and-what-this-course-is",
      title: "1 · Whose account this is",
      section: "Section 1 · Whose account this is, and what a signed language is",
      body: `A hearing author wrote this course, from published sources, without a Deaf co-author. You should know that before you read anything else in it, and you should know what it costs.

**What it costs, specifically.** Three things. First, everything here is filtered through what got written down, and the writing about Deaf people was done overwhelmingly by hearing people: educators, doctors, superintendents, legislators and, much later, linguists. A course built from that record inherits its angle even when every individual fact in it is true. Second, a hearing author cannot check a claim about ASL against fluent intuition, the way a native user checks a sentence in their own language, so this course only makes claims that a published source makes first. Third, and least obvious, a hearing author does not notice the questions a Deaf reader would ask. Absence of that kind does not show up as an error you can point at.

**What this course therefore is.** History, culture, linguistics and law, about signed languages and about Deaf people in the United States. It is a course you could take about Japanese syntax without speaking Japanese.

**What it is not, stated flatly.** It does not teach you to sign. No lesson asks you to produce a sign, copy a handshape, or learn vocabulary, and finishing it will not make you able to hold a conversation, still less to interpret. If you came here for that, stop and go to the last lesson, which says where to start.

**Why it does not teach signs, which is not modesty.** A signing curriculum needs video of fluent Deaf signers that a course may lawfully use, and a licence review of every usable sign-media dataset found that none of them clears that bar for a course that charges money. The best-built and most ethically-sourced corpus is also the most tightly restricted: it forbids redistribution of any kind. Others permit research use only. So a text course about signs would be a course of still pictures and prose descriptions, which is a bad product about a real language, and Deaf people would say so, correctly and publicly.

**The rules this course keeps, so you can hold it to them.**

*An identity claim needs a public self-statement.* Deaf identity is an identity claim. Where this course says a person is Deaf, it is because that person said so in public and the lesson cites where, or because it is reporting what a named published source says and telling you that is what it is doing. Where no self-statement could be reached, the course says so rather than filling the gap.

*A contested claim is taught as contested.* Where the evidence is genuinely argued, you get the argument and the names of who holds each position. That includes the arguments Deaf people have with each other, which are not the author's to settle.

*A research team's own caution outranks a journalist's summary.* Section 5 turns on this. The scholars who documented Black ASL published a sentence saying their own answer was "yes and no", and a great deal of writing about their work drops it. This course does not.

*A hedge gets filed.* Where something could not be settled against a source, the lesson says so and the question is logged where somebody can close it, rather than hedged in prose that nobody will ever act on.

**One convention, used from here on.** Writers in this field commonly use capital-D **Deaf** for a cultural and linguistic identity and lowercase-d **deaf** for the audiological fact of not hearing. This course uses that convention because the sources it draws on use it. It is also argued about inside the community, and Section 6 comes back to why.

:::reveal Name the three costs this lesson says a hearing-authored account carries. ||| It inherits the angle of a written record made mostly by hearing educators, doctors and officials. It cannot check a claim about ASL against fluent intuition, so it only claims what a published source claims. And it does not notice the questions a Deaf reader would ask, which is an absence you cannot point at.

:::reveal Why does this course teach no signs, in terms of licences rather than taste? ||| Because a signing curriculum needs lawfully usable video of fluent Deaf signers, and a review of the available sign-media datasets found none that a paid course may use: the best-sourced one forbids redistribution entirely, and others permit research use only.

## Vocabulary
- **Standpoint**: the position an account is written from, including who wrote it and what they could and could not check, stated openly instead of left for the reader to infer.
- **Deaf (capital D)**: a cultural and linguistic identity, used in this course because its sources use it, and itself argued about within the community.
- **deaf (lowercase d)**: the audiological fact of not hearing, which is a different claim from the identity one.
- **Identity claim**: a statement that a person belongs to a group, which this course makes only from that person's own public statement or from a named source it identifies as the speaker.
- **Filed hedge**: an unresolved question written into the repository's source-check list rather than left as a caveat in prose, so that somebody can actually close it.`,
    },
    {
      slug: "a-language-not-a-code",
      title: "2 · A language, not a code on the hands",
      section: "Section 1 · Whose account this is, and what a signed language is",
      body: `The single most common error a hearing person makes about ASL is to assume it is English, delivered manually. Everything else in this course depends on that error being cleared first, because the schools, the laws and the research in later sections were all built by people who either made it or refused to.

**American Sign Language is a natural language.** It arose in a community, it is acquired by children from the people around them, it changes over time, it has regional and social varieties, and it has a grammar of its own that is not English grammar. Nothing about it was designed.

**The academy came to that position late.** William C. Stokoe's *Sign Language Structure* (1960) is the work conventionally credited with establishing ASL's linguistic status in the American academy, by analysing signs as combinations of smaller meaningless parts rather than as pictures. Deaf people had been using the language for a century and a half by then. The gap between when a thing is true and when the people with degrees agree it is true is one of this catalog's recurring subjects, and here the gap is roughly a hundred and forty years.

**A manual code for English is a different object.** Systems such as Signed Exact English were constructed, deliberately and by committee, to put English on the hands in English word order, with invented markers for English endings. They are codes for a spoken language, in the way that Morse is a code for the alphabet. They are not ASL, they are not what Deaf communities use among themselves, and their existence in schools was tied to a theory that ASL was not a real language and so could not carry an education. Confusing the two is not a vocabulary slip. It reverses the argument of the last century of Deaf education.

**"Sign language" is not one language.** ASL, British Sign Language, French Sign Language, Japanese Sign Language and Auslan are separate languages, and ASL and BSL are not mutually intelligible despite both being used in English-speaking countries. The reason is historical rather than linguistic: ASL's documented ancestry runs to French Sign Language through the founding of the first permanent American school, which Section 3 works out. A signed language tracks the community that used it, not the spoken language spoken around it.

**How many signed languages are there? Nobody can give you a clean number, and the reason is interesting.** Counting languages requires deciding where a language ends and a variety begins, which is a judgement, and signed languages have been catalogued for a much shorter time than spoken ones. A figure of more than two hundred national signed languages is widely attributed to the World Federation of the Deaf, along with a claim that a minority of them have any legal recognition. This course could not retrieve the Federation's own current statement of either figure, so it reports them as attributed and unverified rather than printing them as facts, and the question is filed for someone who can reach the source.

**What non-manual markers are, since they are the part hearing people miss entirely.** In ASL, the face and the upper body carry grammar, not merely feeling. Brow position, head tilt, eye gaze and mouth configuration mark question forms, topics, negation and adverbial meaning. A hearing learner who reads them as emotional expression is throwing away the grammatical layer, and an animated avatar that renders signs with a blank face is producing something that is not the language. That is one of the reasons the community position on signing avatars in accessibility settings is documented and negative.

:::reveal What is the difference between American Sign Language and a manual code such as Signed Exact English? ||| ASL is a natural language with its own grammar, acquired in a community and not designed by anyone. A manual code was constructed to put English on the hands in English word order, and it is a code for a spoken language rather than a language.

:::reveal Why are ASL and British Sign Language not mutually intelligible? ||| Because a signed language descends from the community that used it rather than from the spoken language around it, and ASL's documented ancestry runs to French Sign Language, not to BSL.

:::reveal Why does this course report the count of the world's signed languages as attributed rather than as a fact? ||| Because the figure commonly attributed to the World Federation of the Deaf could not be retrieved from the Federation's own current statement in this pass, and counting languages is a judgement about where a variety ends in any case.

## Vocabulary
- **Natural language**: a language that arose in a community and is acquired by children from the people around them, as opposed to one designed for a purpose.
- **Manual code**: a constructed system for representing a spoken language on the hands in that language's word order, such as Signed Exact English.
- **Non-manual marker**: grammar carried by the face and upper body, including brow position, head tilt, eye gaze and mouth configuration, and not the same thing as facial expression.
- **Mutual intelligibility**: whether users of two varieties can understand each other without having learned the other, which ASL and BSL cannot.
- **Attributed and unverified**: a figure this course repeats with the name of whoever is said to have published it, while stating that it could not reach the original.

## Sources
Stokoe, W. C. (1960). *Sign language structure: An outline of the visual communication systems of the American deaf*. Studies in Linguistics: Occasional Papers 8. University of Buffalo.`,
    },
    {
      slug: "section-1-quiz",
      title: "Section 1 quiz · Standpoint and what a signed language is",
      section: "Section 1 · Whose account this is, and what a signed language is",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Who wrote this course, and under what conditions?",
            options: [
              "A hearing author, from published sources",
              "A Deaf co-author and a hearing author working together from the outline stage onward",
              "A team of certified interpreters drawing on their own working experience in classrooms",
              "A Deaf research collective at a university that granted the catalog publication rights",
            ],
            correctIndex: 0,
            explanation:
              "The course says so in its first lesson and in its description, because standpoint stated is checkable and standpoint implied is not. A Deaf co-author is the condition on publication, not a fact about the draft.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "Which of these does this course explicitly refuse to do?",
            options: [
              "Explain how ASL grammar works in prose",
              "Teach a learner to sign, including vocabulary, handshapes and conversation practice",
              "Name the schools that served Black Deaf students and the years they opened",
              "Describe what non-manual markers do inside the grammar of a signed language",
            ],
            correctIndex: 1,
            explanation:
              "It teaches history, culture, linguistics and law, and states in lesson 1 that finishing it will not make anyone able to hold a conversation, still less to interpret.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "The licence review behind this course found that the most ethically-built sign-video corpus was also the most restricted. In what way?",
            options: [
              "It forbids redistribution of any kind",
              "It requires each contributing signer to approve every course that uses their clip individually",
              "It charges a per-minute licence fee that rises with the number of enrolled learners",
              "It permits commercial use only by organisations with a Deaf majority on their board",
            ],
            correctIndex: 0,
            explanation:
              "That corpus was crowdsourced from consenting Deaf and hard-of-hearing contributors with a documented datasheet, and its research licence still bars distributing the data or any modification of it.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "What does this course require before it will attach a Deaf identity to a named person?",
            options: [
              "A public self-statement it can cite",
              "Agreement between at least two independent biographical reference works published since 2000",
              "Evidence that the person attended a residential school for deaf students as a child",
              "A statement from the person's employer, university or professional association confirming it",
            ],
            correctIndex: 0,
            explanation:
              "Deaf identity is an identity claim, and the catalog's rule is that an identity claim rests on the person's own public statement. Where none could be reached the course reports what a named published source says and says that is what it is doing.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "What does this course do with a question it could not settle against a source?",
            options: [
              "Files it as a source check",
              "Removes the surrounding material entirely so that no unverified claim can reach a learner",
              "Publishes it with a footnote asking learners to write in if they know the answer",
              "Marks it with a confidence percentage estimated from how often the claim appears elsewhere",
            ],
            correctIndex: 0,
            explanation:
              "A hedge left as prose is honest and unactionable, because nobody holds a list. Filing it puts the question somewhere it can actually be closed.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "In the convention this course follows, what does capital-D Deaf mark?",
            options: [
              "A cultural and linguistic identity",
              "A measured hearing loss above a threshold set by the audiological profession",
              "Membership of a national organisation of deaf people, such as a state association",
              "Having acquired a signed language before the age of five from signing parents",
            ],
            correctIndex: 0,
            explanation:
              "Lowercase-d deaf marks the audiological fact instead. The course uses the convention because its sources do, and returns in section 6 to the fact that the convention is argued about within the community.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "Which statement about a hearing author's blind spot does lesson 1 call the least obvious cost?",
            options: [
              "Not noticing the questions a Deaf reader would ask",
              "Being unable to obtain permission to quote from Deaf-authored scholarship without a fee",
              "Relying on interpreters whose renderings introduce errors the author cannot detect",
              "Writing for an audience that expects a signing course and being disappointed by a history one",
            ],
            correctIndex: 0,
            explanation:
              "The lesson calls it least obvious because an absence of that kind does not show up as an error anyone can point at, unlike a wrong date or a misquotation.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "What kind of course does lesson 1 compare this one to, to explain how grammar can be taught without production?",
            options: [
              "A Japanese syntax course for non-speakers",
              "A conversation class in which learners listen for a term before being asked to produce it",
              "A translation workshop where students work only from written texts into their first language",
              "A phonetics laboratory in which learners transcribe recordings without ever speaking",
            ],
            correctIndex: 0,
            explanation:
              "A syntax course describes how a language is put together for people who do not speak it, which is exactly the relationship this course has to ASL.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "Why does this course say a text-only signing curriculum would be a bad product rather than a partial one?",
            options: [
              "It misrepresents a real language",
              "It would be too expensive to maintain once the still images needed replacing every few years",
              "It could not be assessed, because a quiz cannot measure whether a learner formed a handshape correctly",
              "It would compete with free curricula already published by universities and state associations",
            ],
            correctIndex: 0,
            explanation:
              "Still pictures and prose descriptions of signs teach a small and distorted fraction of the language, and the course argues that shipping that damages the standing needed to do it properly later.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "What is a natural language, as lesson 2 defines it?",
            options: [
              "One that arose in a community and is acquired by children",
              "One with a written form and a published grammar produced by trained linguists",
              "One recognised in the constitution or statutes of at least one sovereign state",
              "One whose vocabulary can be traced to a single documented ancestor language",
            ],
            correctIndex: 0,
            explanation:
              "The definition turns on origin and acquisition rather than on documentation or recognition, which is why ASL qualified long before the academy said so.",
            sourceLessonSlug: "a-language-not-a-code",
          },
          {
            prompt: "Which work is conventionally credited with establishing ASL's linguistic status in the American academy?",
            options: [
              "Stokoe's Sign Language Structure, 1960",
              "The Hidden Treasure of Black ASL, published by Gallaudet University Press in 2011",
              "The proceedings of the Second International Congress on Education of the Deaf, 1880",
              "Lucas, Bayley and Valli's sociolinguistic survey of variation in ASL, published in 2001",
            ],
            correctIndex: 0,
            explanation:
              "Stokoe analysed signs as combinations of smaller meaningless parts rather than as pictures. The later works listed here are real and matter in this course, but none of them is the one that made the academic case.",
            sourceLessonSlug: "a-language-not-a-code",
          },
          {
            prompt: "Roughly how long had ASL been in use in the United States before the academic argument for its linguistic status was published?",
            options: [
              "About a century and a half",
              "About twenty-five years, since the language was largely a twentieth-century development",
              "About four hundred years, dating from the earliest European settlements in North America",
              "About sixty years, since it began with the founding of the national deaf university",
            ],
            correctIndex: 0,
            explanation:
              "The first permanent American school opened in 1817 and Stokoe published in 1960, so the gap between the language being used and the academy agreeing it was a language runs to roughly a hundred and forty years.",
            sourceLessonSlug: "a-language-not-a-code",
          },
          {
            prompt: "What is Signed Exact English?",
            options: [
              "A constructed manual code for English",
              "A regional variety of ASL used mainly in schools on the west coast of the United States",
              "The interpreting register used in courtrooms, where word-for-word accuracy is legally required",
              "An early written notation system devised so that linguists could transcribe signs on paper",
            ],
            correctIndex: 0,
            explanation:
              "It was designed to put English on the hands in English word order, with invented markers for English endings, and it is not what Deaf communities use among themselves.",
            sourceLessonSlug: "a-language-not-a-code",
          },
          {
            prompt: "Why does lesson 2 say confusing ASL with a manual code is not merely a vocabulary slip?",
            options: [
              "It reverses the last century's argument",
              "It causes learners to produce signs in an order that fluent signers find comic rather than wrong",
              "It makes the two systems impossible to tell apart in video, so research corpora become unusable",
              "It leads schools to hire the wrong kind of interpreter for classroom placements",
            ],
            correctIndex: 0,
            explanation:
              "Manual codes were pushed in schools on a theory that ASL was not a real language and so could not carry an education, so treating the two as interchangeable adopts that theory by accident.",
            sourceLessonSlug: "a-language-not-a-code",
          },
          {
            prompt: "ASL's documented ancestry runs to which language?",
            options: [
              "French Sign Language",
              "British Sign Language, brought to the colonies by English-speaking settlers in the eighteenth century",
              "A home sign system that developed at the national deaf university after its founding",
              "Martha's Vineyard Sign Language, from which every later American variety is descended",
            ],
            correctIndex: 0,
            explanation:
              "That inheritance is why ASL and BSL are not mutually intelligible even though both are used in English-speaking countries, and section 3 works out how it happened.",
            sourceLessonSlug: "a-language-not-a-code",
          },
          {
            prompt: "What does mutual intelligibility mean, as lesson 2 uses it?",
            options: [
              "Understanding each other without having learned the other variety",
              "Sharing enough vocabulary that a bilingual dictionary between the two can be compiled",
              "Being classed by linguists as varieties of one language rather than as two languages",
              "Having a common ancestor language documented in the historical record",
            ],
            correctIndex: 0,
            explanation:
              "It is a fact about users rather than about family trees, which is why two languages used in English-speaking countries can fail it.",
            sourceLessonSlug: "a-language-not-a-code",
          },
          {
            prompt: "How does this course handle the figure of more than two hundred national signed languages?",
            options: [
              "As attributed and unverified",
              "As an established count, since the World Federation of the Deaf is the authoritative body on the question",
              "As an underestimate, on the grounds that village signed languages are systematically undercounted",
              "As obsolete, since improved documentation has since produced a much larger and firmer total",
            ],
            correctIndex: 0,
            explanation:
              "The figure is widely attributed to the World Federation of the Deaf, and this course could not retrieve the Federation's own current statement of it, so it prints the attribution and the uncertainty together.",
            sourceLessonSlug: "a-language-not-a-code",
          },
          {
            prompt: "Why is counting the world's signed languages a judgement rather than a measurement?",
            options: [
              "Deciding where a variety ends is a judgement",
              "Because signed languages change too quickly for any count to remain accurate for more than a decade",
              "Because most of them have no written form, so no census of users can be conducted",
              "Because national governments refuse to report the languages used inside their own school systems",
            ],
            correctIndex: 0,
            explanation:
              "The same problem applies to spoken languages. It bites harder here because signed languages have been catalogued for a much shorter time.",
            sourceLessonSlug: "a-language-not-a-code",
          },
          {
            prompt: "In ASL, what do brow position, head tilt, eye gaze and mouth configuration carry?",
            options: [
              "Grammar",
              "Emphasis and emotional colouring layered on top of the meaning the hands carry",
              "Regional accent, which is how researchers identify which school a signer attended",
              "Turn-taking cues that tell a conversation partner when it is their turn to sign",
            ],
            correctIndex: 0,
            explanation:
              "Non-manual markers mark question forms, topics, negation and adverbial meaning, so reading them as feeling throws away a grammatical layer.",
            sourceLessonSlug: "a-language-not-a-code",
          },
          {
            prompt: "Why does an animated signing avatar with a blank face produce something that is not the language?",
            options: [
              "It drops the non-manual grammar",
              "It renders handshapes at a speed no human signer could achieve, so learners cannot follow it",
              "It uses a vocabulary drawn from dictionaries rather than from how signers actually sign",
              "It cannot be paused or replayed, which is how learners normally study a signed sentence",
            ],
            correctIndex: 0,
            explanation:
              "Question forms, negation, topic marking and adverbial meaning live on the face and upper body, so an expressionless avatar deletes part of the grammar rather than part of the style.",
            sourceLessonSlug: "a-language-not-a-code",
          },
          {
            prompt: "What did Stokoe's analysis treat signs as?",
            options: [
              "Combinations of smaller meaningless parts",
              "Stylised pictures of the objects and actions they refer to, arranged in English order",
              "Gestures whose meaning is negotiated fresh in each conversation between two signers",
              "Borrowings from spoken English, adapted for the hands by nineteenth-century teachers",
            ],
            correctIndex: 0,
            explanation:
              "Treating a sign as decomposable into parts that mean nothing on their own is what let it be analysed the way spoken words are, and that is the move the academy credits.",
            sourceLessonSlug: "a-language-not-a-code",
          },
          {
            prompt: "This course says the gap between a thing being true and the academy agreeing it is true is one of the catalog's recurring subjects. What is that gap here?",
            options: [
              "Roughly a hundred and forty years",
              "Roughly thirty years, from the founding of the national deaf university to the first linguistic study",
              "Roughly eighty years, from the Milan Congress of 1880 to its formal rejection",
              "Roughly ten years, between the first sociolinguistic survey and its acceptance in journals",
            ],
            correctIndex: 0,
            explanation:
              "The language was in use from the founding of the first permanent American school in 1817, and the academic case was published in 1960.",
            sourceLessonSlug: "a-language-not-a-code",
          },
          {
            prompt: "What does this course mean when it says a research team's own caution outranks a journalist's summary?",
            options: [
              "The team's stated limits are reported, not smoothed",
              "Peer-reviewed articles are preferred to newspaper coverage whenever both describe the same study",
              "Journalists are excluded as sources entirely, because they lack linguistic training",
              "A finding is only taught once a second independent team has replicated it in a later study",
            ],
            correctIndex: 0,
            explanation:
              "Section 5 turns on a sentence in which the Black ASL research team says its own answer is yes and no, which a great deal of writing about their work drops.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "Which of these is an identity claim under this course's rule?",
            options: [
              "That a named person is Deaf",
              "That a named person attended a residential school that this course lists by founding year",
              "That a named person published a study of variation in ASL with three named co-authors",
              "That a named person was the founding director of a university research centre",
            ],
            correctIndex: 0,
            explanation:
              "The others are matters of record that a document can settle. Membership of a cultural and linguistic community is a claim about a person that only that person can make.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "Lesson 1 says a hearing author cannot do one thing a native user does routinely. What?",
            options: [
              "Check a claim against fluent intuition",
              "Attend the conferences at which new research on signed languages is first presented",
              "Read the historical record left by superintendents and educators of deaf children",
              "Distinguish a regional variety of ASL from a manual code in recorded video",
            ],
            correctIndex: 0,
            explanation:
              "That is why the course restricts itself to claims a published source makes first, rather than reasoning about the language directly.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "Whose arguments does lesson 1 say are not the author's to settle?",
            options: [
              "Arguments Deaf people have with each other",
              "Arguments among linguists about how many parameters a sign should be analysed into",
              "Arguments between school districts and parents over classroom placement",
              "Arguments about whether a research corpus may lawfully be redistributed",
            ],
            correctIndex: 0,
            explanation:
              "The contested-claim rule requires naming who holds which position, and it applies with particular force to disputes inside the community the course is about.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "What is the written record about Deaf people in the United States mostly made by, according to lesson 1?",
            options: [
              "Hearing educators, doctors, officials and legislators",
              "Deaf teachers at residential schools, who kept the fullest classroom records of any staff group",
              "Linguists, from the 1960s onward, working with native signers as consultants",
              "State archivists compiling enrolment registers from institutional annual reports",
            ],
            correctIndex: 0,
            explanation:
              "Linguists arrive late in that record and Deaf-authored scholarship later still, which is exactly why a course built from the record inherits its angle even when each fact in it is true.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "A learner finishes this course. Which claim may they honestly make?",
            options: [
              "They know some history of Deaf America",
              "They have a working knowledge of ASL sufficient for everyday conversation with Deaf people",
              "They are qualified to interpret in a low-stakes setting such as a community meeting",
              "They can teach the manual alphabet to beginners, since that part needs no video",
            ],
            correctIndex: 0,
            explanation:
              "The course is history, culture, linguistics and law. It teaches no signs at all, so none of the production claims listed here follows from finishing it.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "Which of these is NOT a reason lesson 2 gives for ASL counting as a natural language?",
            options: [
              "It has been recognised in state statutes",
              "It arose in a community rather than being designed by anyone for a purpose",
              "It is acquired by children from the people around them as they grow up",
              "It changes over time and has regional and social varieties of its own",
            ],
            correctIndex: 0,
            explanation:
              "Legal recognition is a political fact about a language, not a linguistic one, and lesson 2 is careful to define the category by origin, acquisition and change instead.",
            sourceLessonSlug: "a-language-not-a-code",
          },
          {
            prompt: "What theory were manual codes for English tied to when they were used in schools?",
            options: [
              "That ASL could not carry an education",
              "That deaf children learn a second language faster if the first one shares its word order",
              "That teachers without signing fluency could be trained more cheaply in a coded system",
              "That a written record of classroom signing was needed for state inspection of schools",
            ],
            correctIndex: 0,
            explanation:
              "The codes existed to deliver English, on the premise that the language the children already used was not a real language. That premise is what section 3's history is about.",
            sourceLessonSlug: "a-language-not-a-code",
          },
          {
            prompt: "Which pair of countries' signed languages does lesson 2 use to show that a signed language does not track the surrounding spoken language?",
            options: [
              "The United States and Britain",
              "France and Japan, whose signed languages developed under very different educational systems",
              "Australia and New Zealand, where two signed languages coexist with the same spoken language",
              "Canada and Mexico, where a shared border produced two unrelated signed languages",
            ],
            correctIndex: 0,
            explanation:
              "Both countries speak English and their signed languages are not mutually intelligible, because ASL's ancestry is French rather than British.",
            sourceLessonSlug: "a-language-not-a-code",
          },
          {
            prompt: "How does lesson 1 describe what it would cost to publish a signing course built from still images and prose?",
            options: [
              "It would damage standing needed later",
              "It would breach the research licences that govern every published dictionary of ASL signs",
              "It would require a disclaimer long enough to deter most of the learners who wanted it",
              "It would take longer to author than a history course and sell to a smaller audience",
            ],
            correctIndex: 0,
            explanation:
              "The argument is that shipping a bad product about a real language is worse than not shipping, because it forfeits the credibility needed to do it properly with a Deaf collaborator later.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "What does this course do when it repeats a figure it could not trace to its publisher?",
            options: [
              "It names who is said to have published it",
              "It converts the figure to a range wide enough that the true value is certainly inside it",
              "It omits the figure and replaces it with a qualitative description such as many or few",
              "It cites the most widely read secondary source that carries the figure",
            ],
            correctIndex: 0,
            explanation:
              "Naming the attributed source and the failure to reach it lets a reader do the check the author could not, which citing a repeater would not.",
            sourceLessonSlug: "a-language-not-a-code",
          },
          {
            prompt: "Which is the better description of what a residential school did for a signed language, as lesson 2 sets up for section 3?",
            options: [
              "It concentrated a scattered minority",
              "It standardised the language by publishing a dictionary that all state schools then taught from",
              "It replaced regional varieties with a single national form approved by the federal government",
              "It kept the language out of classrooms while permitting it in dormitories and on playgrounds",
            ],
            correctIndex: 0,
            explanation:
              "Concentration is the mechanism: a language passes between children who are in the same place, which is what makes the segregation history in sections 4 and 5 consequential.",
            sourceLessonSlug: "a-language-not-a-code",
          },
          {
            prompt: "Why does lesson 1 say a hearing author's account is filtered even when every fact in it is true?",
            options: [
              "The record itself has an angle",
              "Because translation from a signed source into written English always loses grammatical information",
              "Because published sources are selected by editors who prefer dramatic material to ordinary material",
              "Because facts about a community mean different things to insiders and outsiders in every field",
            ],
            correctIndex: 0,
            explanation:
              "What got written down about Deaf people was written mostly by hearing professionals, so the selection of what counted as worth recording is inherited along with the facts.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "The D and d convention is used in this course for what stated reason?",
            options: [
              "Because its sources use it",
              "Because it is the usage required by the style guides of the journals this course cites most often",
              "Because federal disability law distinguishes the two categories and assigns different rights to each",
              "Because Deaf organisations voted to adopt it at a national convention in the 1980s",
            ],
            correctIndex: 0,
            explanation:
              "The course adopts its sources' usage and then says the convention is itself argued about within the community, rather than presenting it as settled.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "Which best describes the relationship between Morse code and the alphabet, as lesson 2 uses the comparison?",
            options: [
              "The same relationship a manual code has to English",
              "The relationship a natural language has to the community that acquired it as children",
              "The relationship a regional variety has to the standard form taught in classes",
              "The relationship a writing system has to the spoken language it was invented to record",
            ],
            correctIndex: 0,
            explanation:
              "A code re-encodes a language that already exists. It is not itself a language, which is the whole point of the comparison.",
            sourceLessonSlug: "a-language-not-a-code",
          },
          {
            prompt: "What has been documented about the community position on signing avatars in accessibility settings?",
            options: [
              "It is negative",
              "It is broadly supportive where the avatar has been trained on video from consenting Deaf signers",
              "It is divided along the same lines as the debate about cochlear implants",
              "It has never been stated publicly, because the technology is too recent to have produced one",
            ],
            correctIndex: 0,
            explanation:
              "The published objection is specific rather than general: an avatar that renders signs with a blank face deletes the grammar the face carries, so it produces something that is not the language.",
            sourceLessonSlug: "a-language-not-a-code",
          },
          {
            prompt: "This course only makes claims about ASL that a published source makes first. Why?",
            options: [
              "Its author cannot check them against intuition",
              "Because unpublished claims cannot be cited in APA style, which the catalog requires throughout",
              "Because the licences on ASL research corpora forbid drawing new conclusions from them",
              "Because a claim without a published source cannot be assessed in a quiz question",
            ],
            correctIndex: 0,
            explanation:
              "A native user checks a sentence against fluent intuition. An author who cannot do that has to borrow the check from someone who can, which is what a citation is here.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "A reader wants to hold this course to its own rules. Which of these is one of them?",
            options: [
              "Contested claims name who holds each position",
              "Every claim is corroborated by at least three independent sources before it may be taught",
              "No claim is taught unless a Deaf scholar has reviewed the specific lesson it appears in",
              "Statistics are only used when the underlying dataset is publicly downloadable",
            ],
            correctIndex: 0,
            explanation:
              "Naming the holders is what lets a reader go and check the argument, rather than being handed a verdict the author reached privately.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "What is the first thing this course says about itself?",
            options: [
              "That it does not teach you to sign",
              "That it was reviewed by a Deaf editorial board before release",
              "That it is the most complete account of Deaf history available",
              "That it replaces the need for a class with a Deaf teacher",
            ],
            correctIndex: 0,
            explanation:
              "Saying it first rather than last is the point: a reader should know the scope and the standpoint before anything else.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "Why does stating standpoint matter more than implying it?",
            options: [
              "A reader can weigh the account knowing who assembled it",
              "It satisfies a citation requirement for published curricula",
              "It transfers responsibility for errors to the reader",
              "It is a legal requirement for educational materials",
            ],
            correctIndex: 0,
            explanation:
              "Standpoint stated is checkable. Standpoint implied asks the reader to trust a judgement they cannot see.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "Which licence problem rules out sign video in a paid course?",
            options: [
              "Datasets bar commercial use or redistribution",
              "Video hosting costs exceed the course's budget",
              "Signers in the datasets never consented to recording",
              "No dataset covers Black ASL specifically",
            ],
            correctIndex: 0,
            explanation:
              "ASL-LEX carves out its videos, WLASL forbids commercial use, and ASL Citizen forbids redistribution. The constraint was established by reading the licence text.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "What does the course teach instead of signing?",
            options: [
              "History, culture, linguistics and law",
              "Fingerspelling and basic classroom vocabulary",
              "Interpreting technique for hearing learners",
              "The written notation systems linguists use for signs",
            ],
            correctIndex: 0,
            explanation:
              "Those four subjects need no video and no sign production, which is what makes the course possible under the licence constraint.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "How does ASL grammar relate to English grammar?",
            options: [
              "It is a separate grammar",
              "It follows English word order with added markers",
              "It is a simplified version of English grammar",
              "It varies by signer between English and its own order",
            ],
            correctIndex: 0,
            explanation:
              "ASL is a natural language with a grammar of its own. A system that follows English word order is a manual code, which is a different object.",
            sourceLessonSlug: "a-language-not-a-code",
          },
          {
            prompt: "Who was using ASL before the academy accepted it as a language?",
            options: [
              "Deaf communities, for about a century and a half",
              "Only teachers in residential schools",
              "Interpreters working in legal settings",
              "Hearing families of Deaf children",
            ],
            correctIndex: 0,
            explanation:
              "The gap between a thing being true and the people with degrees agreeing it is true runs to roughly 140 years here.",
            sourceLessonSlug: "a-language-not-a-code",
          },
          {
            prompt: "What does a blank-faced signing avatar fail to produce?",
            options: [
              "The grammatical layer carried on the face",
              "Regional accent in the handshapes",
              "Correct fingerspelling speed",
              "Vocabulary specific to a Deaf community",
            ],
            correctIndex: 0,
            explanation:
              "Brow position, head tilt, eye gaze and mouth configuration mark question forms, topics, negation and adverbial meaning. Without them it is not the language.",
            sourceLessonSlug: "a-language-not-a-code",
          },
          {
            prompt: "Why is counting the world's signed languages difficult?",
            options: [
              "Deciding where a language ends and a variety begins is a judgement",
              "Most signed languages have never been given names",
              "Governments refuse to report the figure",
              "The count changes with each new dictionary published",
            ],
            correctIndex: 0,
            explanation:
              "That, plus signed languages having been catalogued for a much shorter time than spoken ones, is why the course reports the common figure as attributed rather than as fact.",
            sourceLessonSlug: "a-language-not-a-code",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2 — Black ASL, the centre of the course
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-schools-that-made-a-variety",
      title: "3 \u00b7 The schools that made a variety",
      section: "Section 2 · Black ASL: the schools, the policy split, and what the project found",
      body: `A language variety is made by who talks to whom, and for Deaf children in the American South that was decided by law.

**The separate schools, and how long they ran.** Beginning in **1869**, seventeen states and the District of Columbia operated separate schools, or separate departments inside existing schools, for Black Deaf children. The last of them opened in **Louisiana in 1938**. *Brown v. Board of Education* was decided in **1954**; most of these schools resisted it, integrating only in the **mid-1960s**, and Louisiana held out until **1978**. Read those dates together: a system that began four years after the Civil War ended was still running, in one state, into the era of the personal computer.

**The policy split, which is the whole mechanism.** The obvious assumption is that the Black schools, being underfunded, gave their students a worse version of the language. The documented history runs the other way, and the reason is a difference in *teaching policy* rather than in money. White schools in this period were in the grip of **oralism**: signing was restricted or forbidden, and children were to be taught to speak and lipread. The Black schools, poorer and offering narrower vocational programmes, **kept teaching in sign, with Deaf instructors** (Lucas et al., 2022).

**So the neglect had a linguistic consequence nobody intended.** The institution that was denied resources was also, by being denied attention, left alone with its language. What the students there received was less of almost everything, and more of one thing: continuous access to a signed language from adults who used it.

**Then integration arrived and the two groups could not easily understand each other.** When the schools merged in the 1960s and 1970s, Black and white Deaf students met varieties that had developed apart for the better part of a century, and the difficulty was documented as a real communication problem, not a matter of accent (Lucas et al., 2022). Whose variety was then treated as the standard, in a school system that had just been forced to admit the students it had excluded, is not a linguistic question.

:::reveal Why did the underfunded Black schools end up preserving more signing rather than less? ||| Because the difference was one of teaching policy, not budget. White schools were practising oralism and restricting signing, while the Black schools continued teaching in sign with Deaf instructors.

:::reveal What happened linguistically when the schools were integrated in the 1960s and 1970s? ||| Two varieties that had developed separately for close to a century were suddenly in one room, and the resulting difficulty was documented as a genuine communication problem rather than a matter of accent.

## Vocabulary
- **Oralism**: the educational policy of teaching Deaf children to speak and lipread while restricting or forbidding signing.
- **Variety**: a form of a language associated with a group or region, without the judgement that "dialect" often carries in ordinary speech.
- **Language policy**: the rules an institution sets about which language may be used in it, which here did more to shape ASL than any linguist did.
- **Vocational programme**: job-focused training, which is most of what the segregated Black schools were funded to offer.

## Sources
Lucas, C., Bayley, R., Hill, J. C., & McCaskill, C. (2022). Segregation and desegregation of the Southern schools for the deaf: The relationship between language policy and dialect development. *Language, 98*(4), e173-e198. https://doi.org/10.1353/lan.2022.0027
McCaskill, C., Lucas, C., Bayley, R., & Hill, J. C. (2011). *The hidden treasure of Black ASL: Its history and structure*. Gallaudet University Press. ISBN 9781563684890`,
    },
    {
      slug: "what-the-black-asl-project-found",
      title: "4 \u00b7 What the Black ASL Project found, and what it did not claim",
      section: "Section 2 · Black ASL: the schools, the policy split, and what the project found",
      body: `Black ASL was used for generations before anyone systematically described it. The description arrived in **2011**.

**The study.** The Black ASL Project began in **2007**, funded by the Spencer Foundation and the National Science Foundation. It interviewed **96 Deaf African American participants** in **six of the seventeen states** that had run segregated schools, in **two age groups**: over 55, and under 35. The two cohorts are the design of the thing. Signers over 55 attended the segregated schools; signers under 35 did not, so the comparison can show what changed after integration rather than merely what differs.

**The central finding, which inverts the usual assumption.** Black signers, older and younger alike, were found to use **more traditional and more standardised forms** than their white counterparts in the same regions. The variety that had been dismissed as broken turned out to have conserved older forms, precisely because its schools had never stopped signing (McCaskill et al., 2011; Lucas et al., 2022).

**What was actually analysed.** The project's published analyses include the use of **two-handed forms** of signs that appear one-handed elsewhere, **role shift**, and the influence of **African American English** on signing. Those are specific, countable features, which is what makes the claim checkable rather than impressionistic.

**Now the part a course should not smooth over: what this evidence can and cannot support.** Six states of seventeen. Ninety-six people. Two age bands with a gap in the middle. That is a real study and a serious one, and it is also a *sample*, so it is honest to say that it establishes the existence and some structure of the variety far better than it establishes a complete grammar or the situation in the eleven states nobody interviewed. Reporting a study's scope is not undermining it. Overstating it is how a finding becomes folklore.

**Why "hidden treasure" is the right phrase and not a flourish.** The variety was in continuous use, in public, for over a century, by people who knew exactly what they were doing with it. It was hidden only from the record, and only because of who was keeping the record. That is this catalog's subject operating on a language.

:::reveal What is the Black ASL Project's central finding about how Black signers sign? ||| That Black signers, both older and younger, use more traditional and more standardised forms than white signers in the same regions, which reverses the assumption that the variety was a degraded one.

:::reveal Why does the course state the study's sample size and state coverage rather than only its conclusions? ||| Because six of seventeen states and 96 participants strongly support the existence and some structure of the variety, but not a complete grammar or the states nobody interviewed, and overstating a finding is how it turns into folklore.

## Vocabulary
- **Role shift**: a grammatical device in which a signer takes on the perspective of a character, marked by body and eye-gaze shifts rather than by a quotative word.
- **Two-handed form**: a sign produced with both hands where another variety produces it with one, one of the countable features the project analysed.
- **Cohort**: an age band sampled deliberately, here over-55 and under-35, so that schooling before or after integration is what separates the groups.
- **Standardised form**: a form closer to the widely documented citation form of a sign, which the project found more often among Black signers.
- **African American English**: a rule-governed variety of English whose influence on Black ASL the project examined directly.

## Sources
McCaskill, C., Lucas, C., Bayley, R., & Hill, J. C. (2011). *The hidden treasure of Black ASL: Its history and structure*. Gallaudet University Press. ISBN 9781563684890
Lucas, C., Bayley, R., Hill, J. C., & McCaskill, C. (2022). Segregation and desegregation of the Southern schools for the deaf: The relationship between language policy and dialect development. *Language, 98*(4), e173-e198. https://doi.org/10.1353/lan.2022.0027
University of Pennsylvania, American Sign Language and Deaf Studies. (n.d.). *Dr. Ceil Lucas and Dr. Carolyn McCaskill: "Black ASL: A historical and linguistic overview"* [Lecture announcement]. https://web.sas.upenn.edu/asl-deafstudies/asl-lecture-series/dr-ceil-lucas-and-dr-carolyn-mccaskill-black-asl-a-historical-and-linguistic-overview/`,
    },
    {
      slug: "section-2-quiz",
      title: "Section 2 quiz \u00b7 Black ASL, the schools and the findings",
      section: "Section 2 · Black ASL: the schools, the policy split, and what the project found",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "In what year did the first separate school or department for Black Deaf children open?",
            options: [
              "1869",
              "1938, the year the very last such school in the country was established in Louisiana",
              "1954, the year Brown v. Board of Education was decided by the Supreme Court",
              "1978, the year the final holdout school in Louisiana was ordered to integrate",
            ],
            correctIndex: 0,
            explanation:
              "1869, four years after the Civil War ended. The other three dates are all real dates in this history, which is why they make good distractors: 1938 is the last opening, 1954 is Brown, and 1978 is Louisiana's integration.",
            sourceLessonSlug: "the-schools-that-made-a-variety",
          },
          {
            prompt: "Which state was the last to integrate its schools for Deaf students?",
            options: [
              "Louisiana",
              "Alabama, which had opened the earliest of the seventeen segregated schools",
              "Texas, whose Deaf school system was the largest of the segregated group",
              "Virginia, where the District of Columbia schools were legally administered",
            ],
            correctIndex: 0,
            explanation:
              "Louisiana held out until 1978, twenty-four years after Brown. The other options name states in the region but none of them was the final holdout.",
            sourceLessonSlug: "the-schools-that-made-a-variety",
          },
          {
            prompt: "Why did the underfunded Black schools preserve more signing than the better-funded white schools?",
            options: [
              "The white schools were practising oralism",
              "The Black schools received targeted federal grants specifically earmarked for sign-language instruction",
              "The Black schools enrolled far more students, which made speech training impractical to deliver",
              "The white schools had not yet been introduced to American Sign Language in this period",
            ],
            correctIndex: 0,
            explanation:
              "The difference was teaching policy, not money: white schools restricted or forbade signing under oralism, while the Black schools kept teaching in sign with Deaf instructors. No such federal grants existed, enrolment was not the driver, and ASL was long established in white schools by then.",
            sourceLessonSlug: "the-schools-that-made-a-variety",
          },
          {
            prompt: "What is oralism?",
            options: [
              "Teaching Deaf children to speak and lipread while restricting signing",
              "A method of teaching sign language by having Deaf adults model signs for hearing parents at home",
              "The practice of recording Deaf community histories through spoken interviews with hearing interpreters",
              "A nineteenth-century theory that signed languages descend directly from spoken ones",
            ],
            correctIndex: 0,
            explanation:
              "Oralism is the educational policy that children should be taught speech and lipreading, with signing restricted or forbidden. It is the policy that produced the split this section describes.",
            sourceLessonSlug: "the-schools-that-made-a-variety",
          },
          {
            prompt: "What happened linguistically when the schools were integrated?",
            options: [
              "Two long-separated varieties met and understanding was genuinely difficult",
              "The two groups discovered their varieties were identical, since both descended from the same school",
              "Black ASL disappeared within a single school year once the schools were combined",
              "Teachers introduced a new constructed sign system to bridge the two groups",
            ],
            correctIndex: 0,
            explanation:
              "Varieties that had developed apart for close to a century met at once, and the difficulty was documented as a real communication problem rather than an accent. Black ASL did not disappear, and no bridging system was introduced.",
            sourceLessonSlug: "the-schools-that-made-a-variety",
          },
          {
            prompt: "How many participants did the Black ASL Project interview?",
            options: [
              "96",
              "Just over 500, drawn from every state that had operated a segregated school",
              "Fewer than 20, since the project was designed as a set of in-depth case studies",
              "Roughly 2,000, using a written questionnaire distributed through Deaf clubs",
            ],
            correctIndex: 0,
            explanation:
              "Ninety-six Deaf African American participants. The scale matters in both directions: large enough to be a real study, small enough that the course states it rather than implying a census.",
            sourceLessonSlug: "what-the-black-asl-project-found",
          },
          {
            prompt: "How many of the seventeen states did the project actually interview in?",
            options: [
              "Six",
              "All seventeen, plus the District of Columbia, so the coverage was complete",
              "Two, chosen because they had the oldest surviving school records",
              "Eleven, the states that had integrated before 1970",
            ],
            correctIndex: 0,
            explanation:
              "Six of seventeen. The course prints that because it bounds what the study can support: it establishes the variety's existence and structure well, and says nothing direct about the eleven states nobody visited.",
            sourceLessonSlug: "what-the-black-asl-project-found",
          },
          {
            prompt: "What was the Black ASL Project's central finding about how Black signers sign?",
            options: [
              "They use more traditional and standardised forms",
              "They use a simplified grammar with fewer non-manual markers than other signers",
              "They borrow most of their vocabulary directly from British Sign Language",
              "They sign in English word order because of the vocational school curriculum",
            ],
            correctIndex: 0,
            explanation:
              "Black signers, older and younger, were found to use more traditional and more standardised forms than white signers in the same regions, which reverses the assumption that the variety was degraded. The other options describe things the project did not find.",
            sourceLessonSlug: "what-the-black-asl-project-found",
          },
          {
            prompt: "Why were the project's two age groups chosen as over-55 and under-35?",
            options: [
              "So schooling before or after integration separates the groups",
              "Because those were the only age bands for which school enrolment records still survived",
              "To match the age brackets used by the United States Census for language questions",
              "Because signers between 35 and 55 were found to have no distinctive features",
            ],
            correctIndex: 0,
            explanation:
              "The older cohort attended the segregated schools and the younger did not, so the comparison can show what changed after integration rather than merely what differs between individuals.",
            sourceLessonSlug: "what-the-black-asl-project-found",
          },
          {
            prompt: "Which of these did the Black ASL Project actually analyse as a countable feature?",
            options: [
              "Two-handed forms of signs that are one-handed elsewhere",
              "The average number of words per minute produced by signers when interpreting spoken English",
              "Whether participants preferred capital-D Deaf or lowercase-d deaf in written self-description",
              "The proportion of participants who had hearing parents versus Deaf parents",
            ],
            correctIndex: 0,
            explanation:
              "Two-handed forms, role shift, and the influence of African American English are the published analyses. Countable features are what make the claim checkable rather than impressionistic.",
            sourceLessonSlug: "what-the-black-asl-project-found",
          },
          {
            prompt: "In what year was Black ASL first systematically described in book form?",
            options: [
              "2011",
              "1960, in the same work that established ASL's linguistic status in the academy",
              "2007, the year the research project began collecting interviews",
              "2022, when the segregation and desegregation article appeared in Language",
            ],
            correctIndex: 0,
            explanation:
              "2011, in The Hidden Treasure of Black ASL. 1960 is Stokoe on ASL generally, 2007 is when the project started, and 2022 is the later Language article, so all three are real dates that belong to other events.",
            sourceLessonSlug: "what-the-black-asl-project-found",
          },
          {
            prompt: "What does the course mean by calling the variety a hidden treasure rather than a lost one?",
            options: [
              "It was in continuous public use, hidden only from the record",
              "It was deliberately concealed by its users to keep it from being suppressed by hearing school authorities",
              "It survived only in written descriptions kept by teachers at the segregated schools",
              "It was reconstructed from archival film after falling out of everyday use",
            ],
            correctIndex: 0,
            explanation:
              "The variety was used continuously and publicly by people who knew what they were doing with it. It was hidden from the record, and only because of who was keeping the record.",
            sourceLessonSlug: "what-the-black-asl-project-found",
          },
          {
            prompt: "How long did separate provision for Black Deaf children run, end to end?",
            options: [
              "From 1869 to 1978",
              "From 1938 to 1954, the years between the last opening and Brown",
              "From 1880 to 1965, tracking the rise and fall of oralism",
              "From 1900 to 1970, roughly one human lifetime",
            ],
            correctIndex: 0,
            explanation:
              "A system beginning four years after the Civil War was still running in one state into the era of the personal computer.",
            sourceLessonSlug: "the-schools-that-made-a-variety",
          },
          {
            prompt: "What did the segregated Black schools mostly have funding to offer?",
            options: [
              "Narrow vocational programmes",
              "Speech and lipreading instruction from specialist teachers",
              "College-preparatory academic curricula",
              "Bilingual instruction in both ASL and written English",
            ],
            correctIndex: 0,
            explanation:
              "They were funded for job-focused training, which is part of what makes the linguistic outcome so unintended.",
            sourceLessonSlug: "the-schools-that-made-a-variety",
          },
          {
            prompt: "Who taught in the Black schools during segregation?",
            options: [
              "Deaf instructors using sign",
              "Hearing speech therapists trained in oral methods",
              "Interpreters relaying hearing teachers' spoken lessons",
              "Older students, under a monitorial system",
            ],
            correctIndex: 0,
            explanation:
              "Continuous access to a signed language from adults who used it is exactly what the white schools of the period were withdrawing.",
            sourceLessonSlug: "the-schools-that-made-a-variety",
          },
          {
            prompt: "Whose variety was treated as standard after integration?",
            options: [
              "The course notes this is not a linguistic question",
              "Black ASL, because it preserved older forms",
              "Neither, since a new shared standard was negotiated",
              "Whichever variety had more signers in a given school",
            ],
            correctIndex: 0,
            explanation:
              "Which variety a newly integrated school system treated as correct is a question about power, and the course says so rather than pretending the answer follows from the linguistics.",
            sourceLessonSlug: "the-schools-that-made-a-variety",
          },
          {
            prompt: "What does the course mean by calling the Black schools' isolation a linguistic consequence nobody intended?",
            options: [
              "Neglect preserved the language by leaving it alone",
              "Administrators deliberately protected signing in Black schools",
              "Linguists chose those schools for long-term study",
              "Federal policy required sign instruction where funding was lowest",
            ],
            correctIndex: 0,
            explanation:
              "The schools were denied resources and, by being denied attention, were left alone with their language. No one designed that outcome.",
            sourceLessonSlug: "the-schools-that-made-a-variety",
          },
          {
            prompt: "Which comparison did the project make to reach its central finding?",
            options: [
              "Black and white signers in the same regions",
              "Black signers today against archival film of the 1930s",
              "American and British Deaf signers of the same age",
              "Signers inside and outside the former Confederacy",
            ],
            correctIndex: 0,
            explanation:
              "Comparing within the same regions is what rules out simple regional variation as the explanation.",
            sourceLessonSlug: "what-the-black-asl-project-found",
          },
          {
            prompt: "What kind of evidence makes the project's claims checkable rather than impressionistic?",
            options: [
              "Countable features such as two-handed forms",
              "The number of participants who described their own signing as distinctive",
              "Video recordings released publicly for anyone to review",
              "Testimony from teachers at the segregated schools",
            ],
            correctIndex: 0,
            explanation:
              "Two-handed forms, role shift and AAE influence are specific and countable, so another researcher can look for the same things.",
            sourceLessonSlug: "what-the-black-asl-project-found",
          },
          {
            prompt: "Which is a fair statement of what the project's sample supports?",
            options: [
              "The variety's existence and some of its structure",
              "A complete grammar of Black ASL",
              "The situation in all seventeen states with segregated schools",
              "How Black ASL is changing year by year",
            ],
            correctIndex: 0,
            explanation:
              "Six states of seventeen, 96 participants and two age bands support existence and structure well, and do not reach a complete grammar or the states nobody visited.",
            sourceLessonSlug: "what-the-black-asl-project-found",
          },
          {
            prompt: "Why is the under-35 cohort important to the design?",
            options: [
              "Its members did not attend the segregated schools",
              "It is large enough to make the sample statistically representative",
              "It provides the only participants with Deaf parents",
              "Its members were the easiest to recruit through universities",
            ],
            correctIndex: 0,
            explanation:
              "With one cohort schooled before integration and one after, a single round of interviews can speak to change across that boundary.",
            sourceLessonSlug: "what-the-black-asl-project-found",
          },
          {
            prompt: "What was the state of the scholarly record on Black ASL before 2011?",
            options: [
              "No systematic description existed",
              "Several competing grammars had been published and disputed",
              "It had been described only in unpublished dissertations",
              "It was documented but classified as a separate language",
            ],
            correctIndex: 0,
            explanation:
              "The variety had been in use for generations. What arrived in 2011 was the description, not the language.",
            sourceLessonSlug: "what-the-black-asl-project-found",
          },
          {
            prompt: "What does the course say the phrase hidden treasure is hidden from?",
            options: [
              "The record",
              "Hearing educators, who never encountered it",
              "Younger Deaf signers, who had lost access to it",
              "Linguists outside the United States",
            ],
            correctIndex: 0,
            explanation:
              "It was used publicly and continuously by people who knew what they were doing with it, and hidden only from the record, because of who was keeping the record.",
            sourceLessonSlug: "what-the-black-asl-project-found",
          },
          {
            prompt: "Which of these did the project NOT report?",
            options: [
              "That Black ASL uses a simplified grammar",
              "That Black signers use more standardised forms",
              "That two-handed forms were analysed as a feature",
              "That African American English influence was examined",
            ],
            correctIndex: 0,
            explanation:
              "The simplification claim is the assumption the findings reverse. The other three are things the project actually did or found.",
            sourceLessonSlug: "what-the-black-asl-project-found",
          },
          {
            prompt: "What was the policy in white Deaf schools during this period called?",
            options: [
              "Oralism",
              "Manualism, the doctrine that signing should be the language of instruction",
              "Total Communication, combining speech and sign in one classroom",
              "Bilingual-bicultural education, teaching ASL and English as two languages",
            ],
            correctIndex: 0,
            explanation:
              "Oralism restricted or forbade signing in favour of speech and lipreading. The other three name real approaches, but none was the policy that produced this split.",
            sourceLessonSlug: "the-schools-that-made-a-variety",
          },
          {
            prompt: "What kind of difference produced the two varieties?",
            options: [
              "A difference in which language schools permitted",
              "A difference in the ages at which children were enrolled",
              "A difference in the regional origin of each school's teachers",
              "A difference in how many students each school could house",
            ],
            correctIndex: 0,
            explanation:
              "Language policy is the mechanism: one system restricted signing and the other continued it.",
            sourceLessonSlug: "the-schools-that-made-a-variety",
          },
          {
            prompt: "How many years separated Brown v. Board from Louisiana's integration of its Deaf schools?",
            options: [
              "Twenty-four",
              "Five, the period most Southern states took to comply",
              "Eleven, matching the mid-1960s compliance of the other states",
              "Forty, since compliance did not begin until the 1990s",
            ],
            correctIndex: 0,
            explanation:
              "Brown was 1954 and Louisiana integrated in 1978. Most other states integrated in the mid-1960s.",
            sourceLessonSlug: "the-schools-that-made-a-variety",
          },
          {
            prompt: "Why does the course prefer variety to dialect?",
            options: [
              "Dialect carries a judgement in ordinary speech",
              "Dialect is reserved by linguists for spoken languages only",
              "Variety is the term the Black ASL Project itself uses exclusively",
              "Dialect implies a written standard, which ASL lacks",
            ],
            correctIndex: 0,
            explanation:
              "The linguistic term does not carry the judgement the everyday word does, and this is a course about a variety that was judged.",
            sourceLessonSlug: "the-schools-that-made-a-variety",
          },
          {
            prompt: "What did separate provision look like in practice?",
            options: [
              "Separate schools or separate departments within existing schools",
              "Entirely separate campuses in every one of the seventeen jurisdictions",
              "Shared campuses with separate classrooms and shared teaching staff",
              "Residential schools for white students and day programmes for Black students",
            ],
            correctIndex: 0,
            explanation:
              "Some jurisdictions ran wholly separate schools, others ran separate departments inside an existing school.",
            sourceLessonSlug: "the-schools-that-made-a-variety",
          },
          {
            prompt: "What is the relationship between the seventeen states and the six states?",
            options: [
              "Seventeen had segregated schools; six were interviewed in",
              "Seventeen is the total including DC; six is the number in the Deep South",
              "Six had separate schools and eleven had separate departments",
              "Seventeen is the number before 1900 and six the number after",
            ],
            correctIndex: 0,
            explanation:
              "Confusing the two is the easiest error in this material: seventeen is the historical extent, six is the study's coverage, and the gap is exactly why the course prints both.",
            sourceLessonSlug: "what-the-black-asl-project-found",
          },
          {
            prompt: "Which body funded the Black ASL Project alongside the Spencer Foundation?",
            options: [
              "The National Science Foundation",
              "The Department of Education's Office for Civil Rights",
              "The Library of Congress American Folklife Center",
              "The National Endowment for the Humanities",
            ],
            correctIndex: 0,
            explanation:
              "Both funders are named in the project's own public description of the work.",
            sourceLessonSlug: "what-the-black-asl-project-found",
          },
          {
            prompt: "What is the point of reporting a study's scope alongside its conclusions?",
            options: [
              "It shows what the evidence can and cannot support",
              "It allows the reader to recalculate the statistics independently",
              "It is a citation requirement for peer-reviewed linguistics",
              "It signals that the authors doubted their own results",
            ],
            correctIndex: 0,
            explanation:
              "Reporting scope is not undermining a study. The course is explicit that the project is serious and that it is a sample.",
            sourceLessonSlug: "what-the-black-asl-project-found",
          },
          {
            prompt: "How does the project's finding change the meaning of the word broken here?",
            options: [
              "The variety judged broken had conserved older forms",
              "The variety was indeed simplified, but for reasons of policy",
              "Both varieties turned out to be equally innovative",
              "The word was never applied to Black ASL by researchers",
            ],
            correctIndex: 0,
            explanation:
              "The forms treated as errors by the standard that had excluded them were often the more traditional ones.",
            sourceLessonSlug: "what-the-black-asl-project-found",
          },
          {
            prompt: "Which of these is a countable feature rather than an impression?",
            options: [
              "Whether a sign is produced with one hand or two",
              "Whether a signer seems fluent to an observer",
              "Whether a variety sounds regional to a listener",
              "Whether a school was well or poorly funded",
            ],
            correctIndex: 0,
            explanation:
              "One-handed versus two-handed is a fact about a production that another researcher can check on a recording.",
            sourceLessonSlug: "what-the-black-asl-project-found",
          },
          {
            prompt: "What does the course say about the eleven states nobody interviewed?",
            options: [
              "The study says nothing direct about them",
              "Their signers were assumed to match the six studied",
              "They had no segregated schools to study",
              "They were covered by archival research instead",
            ],
            correctIndex: 0,
            explanation:
              "Six of seventeen is the coverage, and the honest consequence is that the other eleven are outside what this evidence reaches.",
            sourceLessonSlug: "what-the-black-asl-project-found",
          },
          {
            prompt: "Why did the project need a book rather than a single article to report itself?",
            options: [
              "It reported history and structure together",
              "Because journals declined to publish work on a signed variety",
              "Because the DVD of signed data could not accompany an article",
              "Because the findings were too contested for peer review",
            ],
            correctIndex: 0,
            explanation:
              "The 2011 volume is titled for both halves, its history and its structure, and the later journal article takes up the policy history separately.",
            sourceLessonSlug: "what-the-black-asl-project-found",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3 — The founding, and the congress that tried to undo it
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "hartford-1817",
      title: "5 \u00b7 Hartford, 1817, and why ASL's ancestry is French",
      section: "Section 3 · Hartford 1817, Milan 1880, and the century between",
      body: `Section 1 said ASL's documented ancestry runs to French Sign Language rather than to English. This is where that gets settled.

**The founding.** The **American School for the Deaf** opened in Hartford, Connecticut, on **15 April 1817**, in rooms at Bennett's City Hotel. It was the work of three people: **Thomas Hopkins Gallaudet**, a hearing minister; **Mason Cogswell**, a physician whose daughter Alice was Deaf; and **Laurent Clerc**, a Deaf Frenchman who had been a pupil and then a teacher at the Paris institution. It is the first permanent school for Deaf children in the United States, and the first anywhere in the western hemisphere. The first class had **seven children**, Alice Cogswell among them.

**The detail that explains the language.** Gallaudet had gone to Europe to learn how Deaf children were taught. He returned with Clerc, and on the **fifty-five-day voyage** each taught the other: Clerc taught Gallaudet signs, Gallaudet taught Clerc English. So the language that took root in the first American school arrived in the hands of a Deaf French teacher, and spread outward from Hartford as its graduates founded and staffed schools elsewhere. That is why ASL is related to French Sign Language and not to British Sign Language, even though the United States and Britain share a spoken language. **A signed language descends from the people who taught it, not from the speech in the air around them.**

**Note who Clerc was, precisely.** He was a Deaf teacher, and the school's founding therefore depended on Deaf expertise from the first day. Popular retellings often reduce him to Gallaudet's assistant or misdescribe his profession. The record does not support that reduction, and this course states his role plainly because who is credited with a founding is exactly the kind of thing this catalog watches.

**Public money, early.** The Connecticut General Assembly made the school the **first recipient of state aid to education in America** in **1819**. In **1820** the United States Congress granted it land in the Alabama Territory, which is recorded as the **first instance of federal aid to elementary and secondary special education** in the country. A land grant as the funding instrument should look familiar to anyone who has taken this catalog's courses on the 1862 and 1890 Acts: the same tool, aimed at a different excluded group, four decades earlier.

:::reveal Why is ASL related to French Sign Language rather than British Sign Language? ||| Because the language of the first permanent American school arrived with Laurent Clerc, a Deaf teacher from the Paris institution, and spread from Hartford. A signed language descends from the people who taught it, not from the spoken language around them.

:::reveal What was the funding instrument in the school's 1820 federal grant, and why should it look familiar? ||| A land grant, in the Alabama Territory. It is the same instrument the 1862 and 1890 Acts used for colleges, aimed here at a different excluded group and four decades earlier.

## Vocabulary
- **American School for the Deaf**: the first permanent school for Deaf children in the United States, opened at Hartford on 15 April 1817.
- **Laurent Clerc**: the Deaf French teacher who brought the language, and who taught Gallaudet signs on the voyage from Europe.
- **Land grant**: a grant of public land used as a funding instrument, here in 1820 and later in the Morrill Acts for colleges.
- **Western hemisphere first**: the school was the first for Deaf children anywhere in the Americas, not only in the United States.

## Sources
American School for the Deaf. (n.d.). *History and Cogswell Heritage House*. https://www.asd-1817.org/about/history--cogswell-heritage-house
Connecticut Humanities. (n.d.). *Gallaudet's vision advances deaf education*. Connecticut History. https://connecticuthistory.org/gallaudets-vision-advances-deaf-education/`,
    },
    {
      slug: "milan-1880",
      title: "6 \u00b7 Milan, 1880, and the century that followed",
      section: "Section 3 · Hartford 1817, Milan 1880, and the century between",
      body: `Sixty-three years after Hartford, an international meeting of educators voted to take signing out of Deaf schools.

**The congress.** The **Second International Congress on Education of the Deaf** met in **Milan from 6 to 11 September 1880**. It resolved that oral education was superior to manual education, and it passed a resolution against the use of sign language in schools. The wording most often reproduced declares the "incontestable superiority of speech over signs," and holds that using speech and signs together injures speech, lipreading and precision of ideas, so that the pure oral method should be preferred. **This course has not reached the 1880 proceedings themselves**, so that wording is reported as the widely reproduced text rather than as a verified quotation, exactly as the course treats the count of the world's signed languages.

**Who dissented.** The delegates voting against were the **Americans and one English delegate**. Among the Americans was **Edward Miner Gallaudet** (1837-1917), son of the Hartford founder and president of the college that now bears the family name. **Alexander Graham Bell**, whose reputation elsewhere is as an inventor, was a prominent advocate on the oralist side. Note what the dissent did and did not achieve: it did not carry the vote, and American Deaf education was never converted to oralism as completely as Europe's was.

**What followed.** Schools across Europe and the United States moved toward teaching speech without sign. Deaf teachers, who had been central since Clerc, were pushed out of the classrooms. **This is the policy that Section 2's white Southern schools were practising**, which is what makes the Black schools' continued signing so consequential. Milan is not background to the Black ASL story; it is the mechanism.

**The formal apology, and its date.** At the **21st International Congress on Education of the Deaf, in Vancouver in 2010**, a formal apology was issued for the 1880 resolutions. One hundred and thirty years is how long the record took to be corrected, and the correction did not restore the century of teaching that was lost.

:::reveal What did the Milan congress of 1880 resolve, and who voted against it? ||| That oral education was superior to manual education, with a resolution against sign language in schools. The Americans and one English delegate voted against, including Edward Miner Gallaudet.

:::reveal Why does this course say Milan is the mechanism of the Black ASL story rather than its background? ||| Because oralism is precisely the policy the white Southern schools were practising while the segregated Black schools kept teaching in sign, which is what produced the two varieties.

:::reveal How does the course handle the famous wording of the Milan resolutions? ||| As the widely reproduced text rather than a verified quotation, because it could not reach the 1880 proceedings themselves, the same treatment it gives the count of the world's signed languages.

## Vocabulary
- **Second International Congress on Education of the Deaf**: the Milan meeting of 6-11 September 1880 whose resolutions turned schools toward oralism.
- **Edward Miner Gallaudet**: 1837-1917, son of the Hartford founder, college president, and one of the dissenting delegates at Milan.
- **Pure oral method**: instruction by speech and lipreading alone, which the congress resolved should be preferred.
- **ICED**: the International Congress on Education of the Deaf, whose 21st meeting in Vancouver in 2010 apologised for the 1880 resolutions.

## Sources
Rochester Institute of Technology. (n.d.). *Milan Resolution (1880)*. LEAD 306 Leadership in the Deaf Community InfoGuide. https://infoguides.rit.edu/deafleader/milan
Report of the proceedings of the International Congress on the Education of the Deaf, held at Milan, September 6th-11th, 1880. [Primary source of record; not consulted directly for this lesson.]`,
    },
    {
      slug: "section-3-quiz",
      title: "Section 3 quiz \u00b7 Hartford, Milan, and the century between",
      section: "Section 3 · Hartford 1817, Milan 1880, and the century between",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "When did the American School for the Deaf open?",
            options: [
              "15 April 1817",
              "6 September 1880, the opening day of the Milan congress",
              "1819, when Connecticut awarded it the first state aid to education",
              "1820, the year of the federal land grant in the Alabama Territory",
            ],
            correctIndex: 0,
            explanation:
              "It opened on 15 April 1817 in rooms at Bennett's City Hotel in Hartford. The other dates are real dates in this history that belong to other events.",
            sourceLessonSlug: "hartford-1817",
          },
          {
            prompt: "Who was Laurent Clerc?",
            options: [
              "A Deaf French teacher",
              "A hearing minister who travelled to Europe to study Deaf education",
              "A physician whose Deaf daughter prompted the school's founding",
              "An English delegate who dissented at the Milan congress",
            ],
            correctIndex: 0,
            explanation:
              "Clerc was Deaf, had been a pupil and then a teacher at the Paris institution, and brought the language. The other three options describe Gallaudet, Cogswell, and the Milan dissent.",
            sourceLessonSlug: "hartford-1817",
          },
          {
            prompt: "What happened during the fifty-five-day voyage from Europe?",
            options: [
              "Clerc taught Gallaudet signs and Gallaudet taught Clerc English",
              "Gallaudet drafted the charter that Connecticut would later approve",
              "Clerc translated the Paris institution's curriculum into English",
              "The two men recruited the school's first seven students by letter",
            ],
            correctIndex: 0,
            explanation:
              "Each taught the other, which is how the language of the Paris institution reached Hartford.",
            sourceLessonSlug: "hartford-1817",
          },
          {
            prompt: "Why is ASL related to French Sign Language rather than to British Sign Language?",
            options: [
              "Because the language arrived with a Deaf French teacher",
              "Because British Sign Language had not yet developed in 1817",
              "Because Britain refused to share its methods with American educators",
              "Because French was the language of instruction in early American schools",
            ],
            correctIndex: 0,
            explanation:
              "A signed language descends from the people who taught it, not from the spoken language around them. That is why ASL and BSL are not mutually intelligible despite a shared spoken language.",
            sourceLessonSlug: "hartford-1817",
          },
          {
            prompt: "How many children were in the school's first class?",
            options: [
              "Seven",
              "Fifty-five, one for each day of the voyage",
              "Seventeen, the number of states that later ran segregated schools",
              "Ninety-six, the number later interviewed by the Black ASL Project",
            ],
            correctIndex: 0,
            explanation:
              "Seven children, Alice Cogswell among them. The other numbers are real figures from elsewhere in this course.",
            sourceLessonSlug: "hartford-1817",
          },
          {
            prompt: "What was the significance of Connecticut's 1819 grant?",
            options: [
              "It was the first state aid to education in America",
              "It was the first federal aid to special education",
              "It established the school's charter as a state institution",
              "It funded the construction of a permanent campus",
            ],
            correctIndex: 0,
            explanation:
              "The federal land grant of 1820 is the separate first, and the course is careful to keep the two apart.",
            sourceLessonSlug: "hartford-1817",
          },
          {
            prompt: "What instrument did Congress use to aid the school in 1820?",
            options: [
              "A land grant in the Alabama Territory",
              "An annual cash appropriation from the federal treasury",
              "A tariff exemption on imported teaching materials",
              "A charter granting the school degree-awarding powers",
            ],
            correctIndex: 0,
            explanation:
              "A land grant, the same instrument the 1862 and 1890 Morrill Acts later used for colleges, aimed here at a different excluded group four decades earlier.",
            sourceLessonSlug: "hartford-1817",
          },
          {
            prompt: "Why does the course state Clerc's role precisely?",
            options: [
              "Because who is credited with a founding is what this catalog watches",
              "Because his title was disputed by the school's later historians",
              "Because he was the only founder whose nationality is recorded",
              "Because the record of his teaching was lost until recently",
            ],
            correctIndex: 0,
            explanation:
              "Popular retellings reduce him to an assistant or misdescribe his profession. The school's founding depended on Deaf expertise from the first day.",
            sourceLessonSlug: "hartford-1817",
          },
          {
            prompt: "What was the first permanent school for Deaf children in the western hemisphere?",
            options: [
              "The American School for the Deaf",
              "The Paris institution where Clerc trained",
              "The National Deaf-Mute College in Washington",
              "The school established in Louisiana in 1938",
            ],
            correctIndex: 0,
            explanation:
              "Hartford was the first anywhere in the Americas, not only in the United States.",
            sourceLessonSlug: "hartford-1817",
          },
          {
            prompt: "When and where did the Second International Congress on Education of the Deaf meet?",
            options: [
              "Milan, 6 to 11 September 1880",
              "Vancouver, in 2010, at its twenty-first meeting",
              "Hartford, in 1817, at the founding of the American School",
              "Paris, in 1880, at the institution where Clerc had taught",
            ],
            correctIndex: 0,
            explanation:
              "Milan, over six days in September 1880. Vancouver 2010 is where the apology was issued.",
            sourceLessonSlug: "milan-1880",
          },
          {
            prompt: "What did the Milan congress resolve?",
            options: [
              "That oral education was superior to manual education",
              "That each nation should choose its own method of instruction",
              "That Deaf teachers should lead instruction in every school",
              "That sign language should be standardised across Europe",
            ],
            correctIndex: 0,
            explanation:
              "It resolved for the superiority of speech and passed a resolution against the use of sign language in schools.",
            sourceLessonSlug: "milan-1880",
          },
          {
            prompt: "Who voted against the Milan resolutions?",
            options: [
              "The Americans and one English delegate",
              "The French delegation, led by the Paris institution",
              "A majority of the Deaf delegates present at the congress",
              "Nobody; the resolutions passed unanimously",
            ],
            correctIndex: 0,
            explanation:
              "The dissent did not carry the vote, but American Deaf education was never converted to oralism as completely as Europe's was.",
            sourceLessonSlug: "milan-1880",
          },
          {
            prompt: "Which dissenting delegate was the son of the Hartford founder?",
            options: [
              "Edward Miner Gallaudet",
              "Thomas Hopkins Gallaudet, who led the manual side at the congress",
              "Laurent Clerc, returning to Europe as an American delegate",
              "Mason Cogswell, representing the school he had helped found",
            ],
            correctIndex: 0,
            explanation:
              "Edward Miner Gallaudet, 1837-1917, was president of the college that now bears the family name. His father Thomas Hopkins Gallaudet died in 1851 and was not at Milan, and Clerc died in 1869.",
            sourceLessonSlug: "milan-1880",
          },
          {
            prompt: "Which figure better known as an inventor advocated for the oralist side?",
            options: [
              "Alexander Graham Bell",
              "Thomas Edison, whose own deafness shaped his position",
              "Samuel Morse, whose code was cited in the debate",
              "Guglielmo Marconi, representing the Italian hosts",
            ],
            correctIndex: 0,
            explanation:
              "Bell was a prominent advocate of oral methods, a part of his reputation that sits alongside the telephone.",
            sourceLessonSlug: "milan-1880",
          },
          {
            prompt: "What happened to Deaf teachers after 1880?",
            options: [
              "They were pushed out of classrooms",
              "They were required to retrain in oral methods and mostly stayed",
              "They moved into administration in the same schools",
              "Their numbers grew, since demand for instruction rose",
            ],
            correctIndex: 0,
            explanation:
              "Deaf teachers had been central since Clerc. Removing sign from the classroom removed them with it.",
            sourceLessonSlug: "milan-1880",
          },
          {
            prompt: "How does Milan connect to the Black ASL story?",
            options: [
              "Oralism is what the white Southern schools were practising",
              "Milan's delegates voted specifically on segregated schooling",
              "The congress funded the first separate Black Deaf schools",
              "Milan's resolutions were never applied in the United States",
            ],
            correctIndex: 0,
            explanation:
              "Milan is the mechanism rather than the background: it is the policy the white schools followed while the segregated Black schools kept signing.",
            sourceLessonSlug: "milan-1880",
          },
          {
            prompt: "When was a formal apology issued for the Milan resolutions?",
            options: [
              "2010, at the twenty-first ICED in Vancouver",
              "1978, when Louisiana finally integrated its Deaf schools",
              "1960, when Stokoe's work established ASL's linguistic status",
              "2011, when Black ASL was first systematically described",
            ],
            correctIndex: 0,
            explanation:
              "One hundred and thirty years after 1880. The apology did not restore the century of teaching that was lost.",
            sourceLessonSlug: "milan-1880",
          },
          {
            prompt: "How does the course treat the famous wording of the Milan resolutions?",
            options: [
              "As widely reproduced text, not a verified quotation",
              "As a verified quotation, checked against the 1880 proceedings",
              "As a later paraphrase with no basis in the original",
              "As disputed between two named historians",
            ],
            correctIndex: 0,
            explanation:
              "The course did not reach the 1880 proceedings, so it reports the wording as widely reproduced, the same treatment it gives the count of the world's signed languages.",
            sourceLessonSlug: "milan-1880",
          },
          {
            prompt: "What is the pure oral method?",
            options: [
              "Instruction by speech and lipreading alone",
              "Instruction in sign with speech taught as a separate subject",
              "A method of teaching speech through written English first",
              "The use of a manual code alongside spoken English",
            ],
            correctIndex: 0,
            explanation:
              "The congress resolved that it should be preferred, on the grounds that combining speech and signs injured both.",
            sourceLessonSlug: "milan-1880",
          },
          {
            prompt: "What does ICED stand for?",
            options: [
              "International Congress on Education of the Deaf",
              "Institute forCed Education of the Deaf",
              "International Council on English Deafness",
              "Interstate Conference on Education of the Deaf",
            ],
            correctIndex: 0,
            explanation:
              "Its second meeting was Milan in 1880 and its twenty-first, in Vancouver in 2010, apologised for what the second decided.",
            sourceLessonSlug: "milan-1880",
          },
          {
            prompt: "How long passed between the Milan resolutions and the formal apology?",
            options: [
              "130 years",
              "63 years, the span between Hartford and Milan",
              "55 years, matching the length of the Atlantic voyage",
              "24 years, the gap between Brown and Louisiana's integration",
            ],
            correctIndex: 0,
            explanation:
              "1880 to 2010. The other spans are real intervals from elsewhere in this course.",
            sourceLessonSlug: "milan-1880",
          },
          {
            prompt: "How many years separated the Hartford founding from the Milan congress?",
            options: [
              "63",
              "130, the span before the formal apology",
              "24, the delay between Brown and Louisiana's integration",
              "140, the gap before the academy accepted ASL as a language",
            ],
            correctIndex: 0,
            explanation:
              "1817 to 1880. Sixty-three years after Deaf expertise founded American Deaf education, an international congress voted to remove it from the classroom.",
            sourceLessonSlug: "milan-1880",
          },
          {
            prompt: "What did the American dissent at Milan actually achieve?",
            options: [
              "American schools were never converted as completely as Europe's",
              "It reversed the resolutions at the following congress",
              "It secured an exemption for schools founded before 1880",
              "It produced no effect of any kind on later practice",
            ],
            correctIndex: 0,
            explanation:
              "The dissent did not carry the vote, and the course is careful to say both what it failed to do and what it preserved.",
            sourceLessonSlug: "milan-1880",
          },
          {
            prompt: "Which three people founded the American School for the Deaf?",
            options: [
              "Gallaudet, Cogswell and Clerc",
              "Gallaudet, Clerc and Alice Cogswell",
              "Edward Miner Gallaudet, Clerc and Bell",
              "Clerc, Cogswell and the Connecticut General Assembly",
            ],
            correctIndex: 0,
            explanation:
              "Thomas Hopkins Gallaudet a hearing minister, Mason Cogswell a physician whose daughter was Deaf, and Laurent Clerc a Deaf French teacher.",
            sourceLessonSlug: "hartford-1817",
          },
          {
            prompt: "Where did the American School for the Deaf first open its doors?",
            options: [
              "Rooms at Bennett's City Hotel in Hartford",
              "A purpose-built campus funded by the state",
              "The Paris institution's American annexe",
              "A church hall donated by Gallaudet's congregation",
            ],
            correctIndex: 0,
            explanation:
              "It began in hotel rooms; the state aid and the land grant came in 1819 and 1820.",
            sourceLessonSlug: "hartford-1817",
          },
          {
            prompt: "Why does the course connect the 1820 land grant to its own Morrill Act material?",
            options: [
              "Because it is the same funding instrument, used earlier",
              "Because both grants were made in the Alabama Territory",
              "Because the same congressional committee handled both",
              "Because the Morrill Acts explicitly cited the 1820 precedent",
            ],
            correctIndex: 0,
            explanation:
              "A land grant aimed at an excluded group, four decades before the 1862 Act, which is the kind of continuity this catalog is built to surface.",
            sourceLessonSlug: "hartford-1817",
          },
          {
            prompt: "What was Mason Cogswell's connection to the school?",
            options: [
              "He was a physician whose daughter Alice was Deaf",
              "He was the Deaf teacher who brought the language from Paris",
              "He was the minister who travelled to Europe to study methods",
              "He was the Connecticut legislator who secured the 1819 grant",
            ],
            correctIndex: 0,
            explanation:
              "Alice Cogswell was among the seven children in the first class.",
            sourceLessonSlug: "hartford-1817",
          },
          {
            prompt: "Which statement about Edward Miner Gallaudet is correct?",
            options: [
              "He was president of the college now bearing the family name",
              "He founded the American School for the Deaf in 1817",
              "He was a Deaf teacher trained at the Paris institution",
              "He chaired the Milan congress that passed the resolutions",
            ],
            correctIndex: 0,
            explanation:
              "He lived 1837 to 1917, led the National Deaf-Mute College, and dissented at Milan. His father founded the Hartford school.",
            sourceLessonSlug: "milan-1880",
          },
          {
            prompt: "What did the congress claim about combining speech and signs?",
            options: [
              "That it injured speech, lipreading and precision of ideas",
              "That it was acceptable in early years but not in later ones",
              "That it should be decided school by school",
              "That it produced better outcomes than either method alone",
            ],
            correctIndex: 0,
            explanation:
              "That claim is the stated basis for preferring the pure oral method, and it is reported here as the widely reproduced wording.",
            sourceLessonSlug: "milan-1880",
          },
          {
            prompt: "What is the relationship between Milan 1880 and Stokoe 1960?",
            options: [
              "Eighty years separate the resolution from the academic vindication",
              "Stokoe presented his findings at the Milan congress",
              "Stokoe's work was commissioned to answer the Milan resolutions",
              "They concern different languages and are unrelated",
            ],
            correctIndex: 0,
            explanation:
              "The congress declared signs inferior in 1880; the work conventionally credited with establishing ASL's linguistic status appeared in 1960.",
            sourceLessonSlug: "milan-1880",
          },
          {
            prompt: "Why does the course name Bell's role rather than omitting it?",
            options: [
              "Because contested figures are taught with their positions named",
              "Because Bell's involvement is disputed by historians",
              "Because he later reversed his position publicly",
              "Because he funded the congress that passed the resolutions",
            ],
            correctIndex: 0,
            explanation:
              "Naming who held a position is what lets a reader check the argument, and it is the rule this course applies throughout.",
            sourceLessonSlug: "milan-1880",
          },
          {
            prompt: "Which of these did NOT happen after the Milan congress?",
            options: [
              "Deaf teachers were given expanded classroom authority",
              "Schools across Europe moved toward speech without sign",
              "Deaf teachers were pushed out of classrooms",
              "American schools resisted more successfully than European ones",
            ],
            correctIndex: 0,
            explanation:
              "The removal of sign from classrooms removed the Deaf teachers who had been central since Clerc; it did not expand their authority.",
            sourceLessonSlug: "milan-1880",
          },
          {
            prompt: "What does the 2010 apology tell you about the record?",
            options: [
              "It took 130 years to correct and restored nothing lost",
              "It reversed the resolutions retroactively in law",
              "It was issued by the Italian government rather than by ICED",
              "It concluded that the 1880 vote had been procedurally invalid",
            ],
            correctIndex: 0,
            explanation:
              "The correction came from the twenty-first ICED in Vancouver, and the course is explicit that an apology does not return a century of teaching.",
            sourceLessonSlug: "milan-1880",
          },
          {
            prompt: "What kind of school was the American School for the Deaf when it opened?",
            options: [
              "The first permanent one in the United States",
              "A temporary experiment that closed within five years",
              "A branch of the Paris institution",
              "A private academy admitting only hearing-impaired adults",
            ],
            correctIndex: 0,
            explanation:
              "It is the oldest permanent school for Deaf children in the country and the first anywhere in the western hemisphere.",
            sourceLessonSlug: "hartford-1817",
          },
          {
            prompt: "Which pairing is correct?",
            options: [
              "1817 Hartford founding, 1880 Milan congress",
              "1817 Milan congress, 1880 Hartford founding",
              "1819 federal land grant, 1820 first state aid",
              "1860 Stokoe, 1960 Milan congress",
            ],
            correctIndex: 0,
            explanation:
              "Hartford opened in 1817 and Milan met in 1880. State aid was 1819 and the federal land grant 1820, in that order.",
            sourceLessonSlug: "hartford-1817",
          },
          {
            prompt: "How did the language spread beyond Hartford?",
            options: [
              "Its graduates founded and staffed schools elsewhere",
              "The federal government mandated its use in every state",
              "Clerc travelled to each new school to teach the staff",
              "Printed sign dictionaries were distributed nationally",
            ],
            correctIndex: 0,
            explanation:
              "That is the ordinary mechanism by which a school variety becomes a national language, and it is why Hartford's French inheritance reached the whole country.",
            sourceLessonSlug: "hartford-1817",
          },
        ],
      },
    },
    {
      slug: "deaf-america-final",
      title: "Final assessment \u00b7 Deaf America",
      section: "Final assessment",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Does this course teach you to sign?",
            options: [
              "No, and it says so in its first lesson",
              "Yes, through written descriptions of handshapes that a learner copies from the page",
              "Yes, but only the fingerspelled alphabet and a small set of everyday greetings",
              "Only the non-manual markers, since those can be conveyed without video",
            ],
            correctIndex: 0,
            explanation:
              "It teaches history, culture, linguistics and law. No lesson asks a learner to produce or copy a sign, and the first lesson states that plainly.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "Who wrote this course, and why does the course tell you?",
            options: [
              "A hearing author from published sources",
              "A Deaf co-author team whose members are named in the acknowledgements",
              "An anonymous committee drawn from several Deaf advocacy organisations",
              "A hearing author working under the supervision of a Deaf editorial board",
            ],
            correctIndex: 0,
            explanation:
              "Standpoint is stated rather than implied, so a reader can weigh the account knowing who assembled it and from what.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "Why does the course teach no signs rather than including sign video?",
            options: [
              "Every usable sign-media dataset bars a paid course",
              "Video files were judged too large to serve reliably to learners on slow connections",
              "Sign video was considered but rejected because it distracts from the historical argument",
              "The course is intended for learners who already sign fluently",
            ],
            correctIndex: 0,
            explanation:
              "ASL-LEX carves the videos out, WLASL forbids commercial use, and ASL Citizen forbids redistribution. The constraint is licensing, established by reading the licence text.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "What kind of language is American Sign Language?",
            options: [
              "A natural language with its own grammar",
              "A manual encoding of English designed to be learned alongside written English",
              "A universal signed system understood by Deaf people in every country",
              "A gestural pidgin that developed from hearing people's improvised signs",
            ],
            correctIndex: 0,
            explanation:
              "It arose in a community, is acquired by children from the people around them, changes over time, and has a grammar that is not English grammar. Nothing about it was designed.",
            sourceLessonSlug: "a-language-not-a-code",
          },
          {
            prompt: "Which 1960 work is credited with establishing ASL's linguistic status in the American academy?",
            options: [
              "Stokoe's Sign Language Structure",
              "The Hidden Treasure of Black ASL, which appeared in the same year under a different title",
              "The proceedings of the Milan Congress, republished with linguistic commentary",
              "The first Gallaudet dictionary of American Sign Language idioms",
            ],
            correctIndex: 0,
            explanation:
              "Stokoe analysed signs as combinations of smaller meaningless parts rather than as pictures. Deaf people had used the language for a century and a half by then.",
            sourceLessonSlug: "a-language-not-a-code",
          },
          {
            prompt: "What is a manual code such as Signed Exact English?",
            options: [
              "A constructed system putting English on the hands",
              "An older regional variety of ASL still used in parts of the American South",
              "The set of non-manual markers that carry grammar on the face and upper body",
              "A transcription notation linguists use to write signs down on paper",
            ],
            correctIndex: 0,
            explanation:
              "It was built deliberately to follow English word order with invented markers for English endings. It is a code for a spoken language, not a language.",
            sourceLessonSlug: "a-language-not-a-code",
          },
          {
            prompt: "Are ASL and British Sign Language mutually intelligible?",
            options: [
              "No, they are separate languages",
              "Yes, because both developed in English-speaking countries",
              "Yes for everyday vocabulary, though their grammars differ substantially",
              "Only in fingerspelling, since both use the same manual alphabet",
            ],
            correctIndex: 0,
            explanation:
              "A signed language tracks the community that used it, not the spoken language around it. ASL's documented ancestry runs to French Sign Language.",
            sourceLessonSlug: "a-language-not-a-code",
          },
          {
            prompt: "In ASL, what do brow position, head tilt and eye gaze carry?",
            options: [
              "Grammar",
              "Emphasis only, in the way a speaker's tone of voice adds feeling",
              "Regional accent, which is how varieties are told apart",
              "Nothing systematic; they vary freely between individual signers",
            ],
            correctIndex: 0,
            explanation:
              "Non-manual markers mark question forms, topics, negation and adverbial meaning. Reading them as emotional expression throws away the grammatical layer.",
            sourceLessonSlug: "a-language-not-a-code",
          },
          {
            prompt: "Why does the course report the world count of signed languages as attributed rather than as fact?",
            options: [
              "It could not reach the original source",
              "Because the figure changes every year as new languages are recognised",
              "Because counting signed languages is forbidden by the World Federation of the Deaf",
              "Because the count is disputed between two named research groups",
            ],
            correctIndex: 0,
            explanation:
              "The figure commonly attributed to the World Federation of the Deaf could not be retrieved from the Federation's own current statement, so it is reported as attributed and filed for someone who can reach it.",
            sourceLessonSlug: "a-language-not-a-code",
          },
          {
            prompt: "Beginning in which year did separate schools for Black Deaf children operate?",
            options: [
              "1869",
              "1938, when the last of the seventeen state systems was finally established",
              "1954, immediately following the Brown v. Board of Education decision",
              "1880, the year of the Milan Congress on the education of the deaf",
            ],
            correctIndex: 0,
            explanation:
              "1869, four years after the Civil War ended. The other dates belong to other events in this same history.",
            sourceLessonSlug: "the-schools-that-made-a-variety",
          },
          {
            prompt: "How many states, plus the District of Columbia, ran separate provision for Black Deaf children?",
            options: [
              "Seventeen",
              "Six, all of them in the Deep South and all documented by the Black ASL Project",
              "Eleven, corresponding to the states of the former Confederacy",
              "Twenty-four, including several outside the South",
            ],
            correctIndex: 0,
            explanation:
              "Seventeen states and DC. Six is the number the Black ASL Project actually interviewed in, which is a different figure and a common confusion.",
            sourceLessonSlug: "the-schools-that-made-a-variety",
          },
          {
            prompt: "Which state integrated its Deaf schools last, and in what year?",
            options: [
              "Louisiana, in 1978",
              "Alabama, in 1965, after a federal court order specific to Deaf education",
              "Mississippi, in 1970, the last year covered by the project's archival research",
              "Texas, in 1972, following a state legislative reorganisation",
            ],
            correctIndex: 0,
            explanation:
              "Louisiana held out until 1978, twenty-four years after Brown v. Board of Education was decided in 1954.",
            sourceLessonSlug: "the-schools-that-made-a-variety",
          },
          {
            prompt: "What was the mechanism that left Black schools signing while white schools did not?",
            options: [
              "Teaching policy, not funding",
              "A shortage of speech therapists willing to work in segregated institutions",
              "Federal desegregation orders that required sign instruction in Black schools",
              "The absence of any written curriculum in the underfunded schools",
            ],
            correctIndex: 0,
            explanation:
              "White schools restricted or forbade signing under oralism; the Black schools continued teaching in sign with Deaf instructors. The neglect had a linguistic consequence nobody intended.",
            sourceLessonSlug: "the-schools-that-made-a-variety",
          },
          {
            prompt: "What does oralism describe?",
            options: [
              "Teaching speech and lipreading while restricting signing",
              "The oral transmission of Deaf community history between generations",
              "A signed system that follows the word order of the spoken language",
              "The practice of interpreting spoken lectures into sign for Deaf students",
            ],
            correctIndex: 0,
            explanation:
              "It is the educational policy that produced the split between the white and Black schools in this period.",
            sourceLessonSlug: "the-schools-that-made-a-variety",
          },
          {
            prompt: "What did integration in the 1960s and 1970s produce linguistically?",
            options: [
              "Documented difficulty understanding across the two varieties",
              "Rapid convergence, with both groups adopting a shared standard within a year",
              "No measurable effect, since both varieties had remained essentially identical",
              "A new constructed system introduced by teachers to bridge the gap",
            ],
            correctIndex: 0,
            explanation:
              "Varieties that had developed apart for close to a century met at once, and the difficulty was recorded as a genuine communication problem rather than an accent.",
            sourceLessonSlug: "the-schools-that-made-a-variety",
          },
          {
            prompt: "When did the Black ASL Project begin collecting interviews?",
            options: [
              "2007",
              "2011, the year its findings were published in book form",
              "1960, alongside the first linguistic work on ASL generally",
              "2022, when its segregation and desegregation analysis appeared",
            ],
            correctIndex: 0,
            explanation:
              "The project began in 2007, funded by the Spencer Foundation and the National Science Foundation, and published in 2011.",
            sourceLessonSlug: "what-the-black-asl-project-found",
          },
          {
            prompt: "How many Deaf African American participants did the project interview?",
            options: [
              "96",
              "Around 500, sampled proportionally across all seventeen states",
              "Fewer than 20, since it was designed as a set of case studies",
              "About 2,000, through a written questionnaire circulated to Deaf clubs",
            ],
            correctIndex: 0,
            explanation:
              "Ninety-six participants, in six states, in two age cohorts. The course prints the number because it bounds what the study can support.",
            sourceLessonSlug: "what-the-black-asl-project-found",
          },
          {
            prompt: "Which two age groups did the project sample, and why?",
            options: [
              "Over 55 and under 35, to separate schooling before and after integration",
              "Under 18 and over 65, to capture the youngest and oldest living signers",
              "Every decade band from 20 to 80, to trace change continuously",
              "Only signers over 55, since younger signers were assumed to use mainstream ASL",
            ],
            correctIndex: 0,
            explanation:
              "The older cohort attended the segregated schools and the younger did not, so the comparison shows what changed after integration rather than what merely differs between individuals.",
            sourceLessonSlug: "what-the-black-asl-project-found",
          },
          {
            prompt: "What did the project find about the forms Black signers use?",
            options: [
              "More traditional and standardised forms",
              "A simplified grammar with markedly fewer non-manual markers",
              "Heavy borrowing of vocabulary from British Sign Language",
              "Consistent use of English word order learned in vocational classes",
            ],
            correctIndex: 0,
            explanation:
              "Older and younger Black signers alike used more traditional and standardised forms than white signers in the same regions, reversing the assumption that the variety was degraded.",
            sourceLessonSlug: "what-the-black-asl-project-found",
          },
          {
            prompt: "Which feature did the project analyse as countable evidence?",
            options: [
              "Two-handed forms of signs that are one-handed elsewhere",
              "Signing speed measured in signs produced per minute",
              "Whether participants wrote Deaf with a capital or lowercase d",
              "The proportion of participants with Deaf rather than hearing parents",
            ],
            correctIndex: 0,
            explanation:
              "Two-handed forms, role shift, and the influence of African American English are the published analyses. Countable features are what make the claim checkable.",
            sourceLessonSlug: "what-the-black-asl-project-found",
          },
          {
            prompt: "What is role shift?",
            options: [
              "Taking on a character's perspective through body and gaze",
              "Switching between ASL and a manual English code within one conversation",
              "A teacher and student exchanging positions during signed instruction",
              "The historical shift of Deaf schools from residential to day programmes",
            ],
            correctIndex: 0,
            explanation:
              "It is a grammatical device marked by body and eye-gaze shifts rather than by a quotative word, and one of the features the project examined.",
            sourceLessonSlug: "what-the-black-asl-project-found",
          },
          {
            prompt: "Why does the course state the study's sample size and state coverage?",
            options: [
              "Because a sample bounds what a finding can support",
              "Because the authors required that any citation reproduce their methods section",
              "Because the study has been challenged and the numbers are disputed",
              "Because the figures are the study's most surprising result",
            ],
            correctIndex: 0,
            explanation:
              "Six states of seventeen and 96 participants establish the variety's existence and structure well, and say nothing direct about the eleven states nobody visited. Overstating a finding is how it becomes folklore.",
            sourceLessonSlug: "what-the-black-asl-project-found",
          },
          {
            prompt: "In what year was Black ASL first systematically described in book form?",
            options: [
              "2011",
              "1960, in the work that established ASL's status in the academy",
              "2007, when the interviews began",
              "1978, when the last segregated school integrated",
            ],
            correctIndex: 0,
            explanation:
              "2011, in The Hidden Treasure of Black ASL. The other dates are real dates belonging to other events in this history.",
            sourceLessonSlug: "what-the-black-asl-project-found",
          },
          {
            prompt: "Why is hidden treasure a precise description rather than a flourish?",
            options: [
              "It was used publicly for a century, hidden only from the record",
              "It was concealed deliberately by signers to protect it from hearing authorities",
              "It survived only in teachers' written notes at the segregated schools",
              "It was reconstructed from archival film after falling out of use",
            ],
            correctIndex: 0,
            explanation:
              "The variety was in continuous public use by people who knew what they were doing with it. It was hidden from the record, and only because of who was keeping the record.",
            sourceLessonSlug: "what-the-black-asl-project-found",
          },
          {
            prompt: "What is a language variety, as this course uses the word?",
            options: [
              "A form of a language tied to a group or region",
              "A language that has not yet been described by linguists",
              "A constructed system built from an existing language",
              "Any form of a language that departs from a written standard",
            ],
            correctIndex: 0,
            explanation:
              "The course prefers variety to dialect because dialect carries a judgement in ordinary speech that the linguistic term does not.",
            sourceLessonSlug: "the-schools-that-made-a-variety",
          },
          {
            prompt: "Which of these is a natural language?",
            options: [
              "American Sign Language",
              "Signed Exact English",
              "The manual alphabet used for fingerspelling",
              "Stokoe notation, the system for writing signs on paper",
            ],
            correctIndex: 0,
            explanation:
              "ASL arose in a community and is acquired by children from those around them. The other three were constructed for a purpose.",
            sourceLessonSlug: "a-language-not-a-code",
          },
          {
            prompt: "What does the course say about the gap between a thing being true and the academy agreeing?",
            options: [
              "It is roughly 140 years in ASL's case",
              "It is a gap of about twenty years, typical for language research",
              "It did not occur here, since Deaf educators published early findings themselves",
              "The course avoids the question as unanswerable",
            ],
            correctIndex: 0,
            explanation:
              "Deaf people had used ASL for a century and a half before Stokoe's 1960 work is credited with establishing its linguistic status in the American academy.",
            sourceLessonSlug: "a-language-not-a-code",
          },
          {
            prompt: "What did the Black schools offer that the white schools of the period restricted?",
            options: [
              "Continuous access to a signed language from adults who used it",
              "Newer facilities and better-funded vocational equipment",
              "Formal instruction in written English composition",
              "Speech therapy delivered by specialist teachers",
            ],
            correctIndex: 0,
            explanation:
              "They were denied resources and, by being denied attention, left alone with their language. That is the mechanism the section describes.",
            sourceLessonSlug: "the-schools-that-made-a-variety",
          },
          {
            prompt: "How does the course handle a contested claim?",
            options: [
              "It names the holders of each position",
              "It reports the majority view and omits the minority one",
              "It declines to teach contested material at all",
              "It presents both sides without identifying who holds them",
            ],
            correctIndex: 0,
            explanation:
              "Naming the holders is what lets a reader go and check the argument rather than being handed a verdict the author reached privately.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "What does the course require before it will state someone's identity?",
            options: [
              "A public self-statement with a citation",
              "Confirmation from a recognised Deaf organisation",
              "Agreement between at least three published biographies",
              "Nothing, since identity is treated as a matter of record",
            ],
            correctIndex: 0,
            explanation:
              "Deaf identity is an identity claim, and the course applies the same rule it applies elsewhere in this catalog.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "Where does the course tell a reader to go to learn ASL?",
            options: [
              "To Deaf teachers",
              "To the sign-media datasets the course consulted for its research",
              "To the manual codes described in the second lesson",
              "To the archival film held by the segregated schools",
            ],
            correctIndex: 0,
            explanation:
              "The course does not teach signing, states that in lesson one, and points to Deaf teachers instead.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "What happened to signing in white Deaf schools during the segregation era?",
            options: [
              "It was restricted or forbidden",
              "It was formally taught as a second language alongside speech",
              "It was permitted only outside the classroom, in dormitories",
              "It was replaced entirely by Signed Exact English",
            ],
            correctIndex: 0,
            explanation:
              "Oralism held that children should be taught speech and lipreading, and signing was restricted or forbidden as a matter of policy.",
            sourceLessonSlug: "the-schools-that-made-a-variety",
          },
          {
            prompt: "What does the 2022 Language article connect to dialect development?",
            options: [
              "Language policy",
              "Funding levels in the segregated school systems",
              "Migration patterns of Deaf families after the Second World War",
              "The introduction of televised sign interpretation",
            ],
            correctIndex: 0,
            explanation:
              "Its subject is the relationship between the policy a school set about which language could be used and the variety that resulted.",
            sourceLessonSlug: "the-schools-that-made-a-variety",
          },
          {
            prompt: "Which is true of the seventeen jurisdictions in this history?",
            options: [
              "Some ran separate departments rather than separate schools",
              "All seventeen built entirely separate physical campuses",
              "All of them integrated within five years of Brown v. Board",
              "None of them admitted Black Deaf students before 1900",
            ],
            correctIndex: 0,
            explanation:
              "They operated separate schools or separate departments inside existing schools, and most resisted Brown until the mid-1960s.",
            sourceLessonSlug: "the-schools-that-made-a-variety",
          },
          {
            prompt: "What funded the Black ASL Project?",
            options: [
              "The Spencer Foundation and the National Science Foundation",
              "Gallaudet University's own endowment, with no external grants",
              "The Department of Education, under a desegregation compliance programme",
              "A consortium of the six state schools where interviews took place",
            ],
            correctIndex: 0,
            explanation:
              "Both funders are named in the project's own public description of its work.",
            sourceLessonSlug: "what-the-black-asl-project-found",
          },
          {
            prompt: "Why can the project say something about change over time from a single round of interviews?",
            options: [
              "Because it sampled two cohorts schooled either side of integration",
              "Because it re-interviewed the same participants at five-year intervals",
              "Because it compared its recordings against archival film from the 1930s",
              "It cannot; the project describes only the present-day variety",
            ],
            correctIndex: 0,
            explanation:
              "Sampling over-55 and under-35 signers lets the comparison stand in for change across the integration boundary without waiting decades.",
            sourceLessonSlug: "what-the-black-asl-project-found",
          },
          {
            prompt: "What assumption does the project's central finding overturn?",
            options: [
              "That the segregated schools produced a degraded variety",
              "That Black ASL and mainstream ASL are separate languages",
              "That signing survived in white schools throughout the period",
              "That the variety had died out before it could be recorded",
            ],
            correctIndex: 0,
            explanation:
              "The variety dismissed as broken turned out to have conserved older and more standardised forms, precisely because its schools never stopped signing.",
            sourceLessonSlug: "what-the-black-asl-project-found",
          },
          {
            prompt: "Which pairing correctly matches a date to its event?",
            options: [
              "1954, Brown v. Board of Education",
              "1869, the Milan Congress on the education of the deaf",
              "1938, the Supreme Court decision requiring school integration",
              "1978, the founding of the first separate school for Black Deaf children",
            ],
            correctIndex: 0,
            explanation:
              "Brown was decided in 1954. 1869 is the first separate provision, 1938 is the last school to open, and 1978 is Louisiana's integration.",
            sourceLessonSlug: "the-schools-that-made-a-variety",
          },
          {
            prompt: "What is African American English, as the project treats it?",
            options: [
              "A rule-governed variety of English",
              "An informal register used only in casual speech",
              "A creole descended directly from West African languages",
              "A manual code developed in the segregated Deaf schools",
            ],
            correctIndex: 0,
            explanation:
              "The project examined its influence on Black ASL directly, which requires treating it as rule-governed rather than as error.",
            sourceLessonSlug: "what-the-black-asl-project-found",
          },
          {
            prompt: "Why does a signed language descend from a community rather than from the spoken language around it?",
            options: [
              "Because it is transmitted between the people who use it",
              "Because signed languages are designed to be independent of speech",
              "Because spoken and signed languages use unrelated parts of the brain",
              "Because national governments assign each community a signed language",
            ],
            correctIndex: 0,
            explanation:
              "That is why ASL's documented ancestry runs to French Sign Language, and why ASL and BSL are not mutually intelligible despite both being used in English-speaking countries.",
            sourceLessonSlug: "a-language-not-a-code",
          },
        ],
      },
    },
  ],
};
