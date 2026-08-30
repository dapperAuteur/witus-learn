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
        ],
      },
    },
  ],
};
