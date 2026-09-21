import type { AuthoredCourse } from "./authored-course";

// "Who Gets Nominated: Chien-Shiung Wu and the Stage Before the Prize" (Culture & History, with
// Science & Math alongside). Slug to be registered: `who-gets-nominated`. PRIVATE study, by BAM's
// approval on 2026-09-20 of the brief at
// plans/future-courses/uncredited/2026-09-19-chien-shiung-wu-brief.md (rubric: gates pass;
// B 3/3/3/3/3/3 = 36; form C6, standalone). RESEARCH TIER 1 (not health, law, safety, money or
// credential-adjacent), with the contested half quoted and attributed rather than summarised,
// because the cost of being wrong here is a wrong claim about named people.
// NO series code and NO series position: private courses carry no CREDIT code (BAM, 2026-09-19).
// Every `sourceLessonSlug` below is course-internal, so the registered slug does not affect them.
//
// THE SPINE, and it overturns the popular telling rather than repeating it:
// For the 1957 physics prize Wu received ZERO nominations. The archive's own 1957 physics list
// runs to 66 nomination rows and she is in none of them, while Lee and Yang appear exactly once,
// on a single form filed by one physicist in Chicago. The famous 23 nominations are all LATER:
// 1958 to 1974, across ten years, from eighteen nominators including five sitting Nobel laureates
// in physics, with Tsung-Dao Lee himself filing three of them. So the failure sits at the
// NOMINATION stage, one step earlier than the citation, which is a different mechanism from every
// other case in this catalog and is why the course is standalone rather than a section of
// `what-the-citation-records`.
//
// AND THE OTHER HALF, which the course must teach with equal weight: the author line HELD (she is
// first author, alone under her affiliation), the ceremony DID name her (Klein's presentation
// speech describes the cobalt-60 experiment and names her), and Yang's Nobel lecture names her
// group three times in the body and thanks them for "their courage and their skill". This is not a
// story about a woman nobody mentioned.
//
// FETCH-OR-DO-NOT-CITE. The brief fetched everything below on 2026-09-19 with curl and a desktop
// browser User-Agent, because WebFetch gets HTTP 403 from nobelprize.org. This build RE-FETCHED and
// re-read the following on 2026-09-20, independently, and every count below is this pass's own:
//  - nomination archive search.php, prize=0, 1901 to 1976, cname=Wu: 34 rows, 23 of them
//    Chien-Shiung Wu (20 as "Chien-Shiung Wu", 3 as "C. S. Wu" in 1974). Matches the brief exactly.
//  - nomination archive list.php?prize=1&year=1957: 67 table rows, one of them the header, so 66
//    nomination rows. No Wu. Lee and Yang once, row 48, nominator J Simpson of Chicago. Wigner
//    seven times. Marietta Blau by Erwin Schroedinger, Dorothy Crowfoot Hodgkin by J. D. Bernal,
//    Maria Goeppert-Mayer by James Franck.
//  - show.php records 18574 (the Lee and Yang 1957 form, carrying the statutes §8 withholding
//    note), 15049, 15372, 24827, 21865, 22343.
//  - The 1957 summary page, Klein's presentation speech, and BOTH banquet speeches. Neither
//    banquet speech contains the string "Wu".
//  - yang-lecture.pdf (11 scan pages, printed 393 to 403) and lee-lecture.pdf (13 scan pages,
//    printed 406 to 418), text extracted with pypdf. Wu appears 4 times in Yang's lecture (printed
//    pp. 399, 400 twice, and reference 12 on p. 402) and once in Lee's, as reference 3 on p. 418.
//  - wolffund.org.il/chien-shiung-wu/ (the 1978 Wolf Prize citation, prize share "None").
//  - biographicalmemoirs.org/pdfs/wu-chien-shiung.pdf, the National Academy memoir, 17 pages.
//    Extracted text: 0 occurrences of "nobel", 19 of "parity", 11 of "Columbia". The extraction
//    drops digits, so NO YEAR is taken from it anywhere in this course, and lesson 21 says so.
//
// NOT re-fetched here, taken from the brief's VERIFIED reading of the page images on 2026-09-19:
// the 1957 Physical Review Letter itself (byline, affiliations, received date, acknowledgment).
// The brief warns that the OCR of the 1957 typesetting garbles characters, so every quotation from
// it came off the page image rather than the extracted text, and this file repeats only those.
//
// HOW EACH REPORTED OR UNVERIFIED ITEM IS HANDLED (rubric Part H, and the brief's build condition):
//  1. The 1957 committee report, Hulthen's and Klein's internal reports, and the 1971 Nagel
//     assessment are REPORTED at one remove through Larsson and Wyss (2026), who read the file in
//     Stockholm in November 2025. Lesson 15 attributes every sentence of it to them by name and
//     NEVER says "the committee decided". That is the brief's gate A6 condition, verbatim.
//  2. The Oppenheimer and Steinberger quotations that circulate are UNVERIFIED. Both Physics World
//     articles were fetched in full for the brief and contain neither name. They appear NOWHERE in
//     this course except in lesson 16, which teaches the failed trace as the finding.
//  3. "Herwig Schopper filed the two anonymous nominations" is REPORTED and not asserted. The
//     course says the public database anonymises two of the twenty-three and names nobody.
//  4. Barany's account of the publication-deadline rule is REPORTED, attributed to him, and the
//     course does NOT state the statute, because the statute was not read. Research check C.
//  5. Wu's own 1973 account of proposing the cobalt-60 method is REPORTED through Hargittai; it is
//     attributed to her account as Hargittai quotes it, and it is research check A.
//  6. Hargittai's list of institutional firsts is REPORTED. Lesson 21 prints only the two items the
//     National Academy memoir states in its own words, WITHOUT years, because the extraction lost
//     the digits. Research check D.
//  7. The 66-versus-58 count discrepancy is printed as a discrepancy, with the source of each
//     number named, and reconciled nowhere.
//
// House style, matching drew-blood-bank-course.ts and what-the-citation-records-course.ts:
// `section` on every lesson; flush-left single-line `:::reveal q ||| a`; a `## Vocabulary` block of
// 3 to 6 lesson-specific terms; an APA 7 `## Sources` block WITH LOCATORS on every lesson; a quiz
// per teaching section (pool sized to the audit density target, serving 5, passing 80, shuffled)
// plus a final pooling 44 and serving 10, placed LAST; every question carries `explanation` and
// `sourceLessonSlug`. Correct options are written SHORT and distractors long and specifically
// wrong, so check-longest-option passes by construction. No em dashes in user-visible copy.
export const WHO_GETS_NOMINATED_COURSE: AuthoredCourse = {
  title: "Who Gets Nominated: Chien-Shiung Wu and the Stage Before the Prize",
  description:
    "In February 1957 the Physical Review published a three-page Letter titled Experimental Test of Parity Conservation in Beta Decay. The first name on it is C. S. Wu of Columbia University, alone under her affiliation, followed by four physicists of the National Bureau of Standards. Ten months later the Nobel Prize in Physics went to Chen Ning Yang and Tsung-Dao Lee, and Wu was not included. The usual telling stops there and supplies a motive. The documents say something stranger and more useful. The Nobel nomination archive, open through 1974 and free to search, shows that for the 1957 prize Wu received no nominations at all: the year's physics list runs to sixty-six entries and she is on none of them, while the two men who won were nominated once, on one form, by one physicist in Chicago. Then, starting the year after the prize, twenty-three nominations for her arrived across ten different years, from eighteen nominators including five sitting Nobel laureates and Tsung-Dao Lee three times. She never won. So the failure in this case is at the nomination, one stage before the citation everybody argues about, and the second half of the story is stranger still: once she was nominated, and nominated heavily, it changed nothing. This course reads the whole record line by line. The paper and its byline. The citation, which names an investigation rather than an experiment. The presentation speech, which describes her cobalt-60 experiment at length and names her, so this is not a story about a woman nobody mentioned. Two Nobel lectures that treat her completely differently. Two banquet speeches that do not mention her at all, which is where a famous claim about this case falls apart. Then the archive itself, with a search you can run in about ten minutes and check against the counts printed here. Along the way it teaches the discipline the research needed: the archive returns a successful response with the wrong page when it does not understand your query, so a working link is not proof that your question was asked. And it teaches the argument against the injustice framing in the words of the physicists who make it, because a course that only carried the flattering half would be doing to the evidence exactly what it accuses the record of doing.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1 — The question before the experiment
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-puzzle-that-would-not-resolve",
      title: "1 · The puzzle that would not resolve",
      section: "Section 1 · The question before the experiment",
      body: `This course is about who gets named for a discovery, and it is going to spend most of its time in an archive. But the archive only makes sense if you know what the discovery was, so the first three lessons are physics, read off the two Nobel lectures the men who won it delivered in December 1957.

**The problem started with two particles that would not behave.** In his Nobel lecture Chen Ning Yang describes a classification physicists had built up over fifty years: four classes of force, from the strong nuclear interactions that hold a nucleus together, through the electromagnetic interactions, to the weak interactions first met in the beta radioactivity of nuclei, and finally gravity, which at nuclear scale is too feeble to matter at all (Yang, 1957, pp. 396-397).

Inside that picture sat an anomaly. Two particles, called theta and tau, decayed differently. Yang explains the reasoning: the parity of a pi meson is odd, so a particle decaying into two pi mesons should carry even parity, and a particle decaying into three should carry odd parity. By that argument theta and tau had different parities and therefore had to be different particles (Yang, 1957, p. 397).

**Except they were identical in every other respect.** Yang quotes his own report from a conference in Seattle in September 1956, and the quotation is worth reading slowly because it is a physicist describing how a discipline gets stuck. "However it will not do to jump to hasty conclusions. This is because experimentally the K mesons (i.e. tau and theta) seem all to have the same masses and the same lifetimes. The masses are known to an accuracy of, say, from 2 to 10 electron masses, or a fraction of a percent, and the lifetimes are known to an accuracy of, say, 20 percent." Particles with different spin and parity are not expected to share a mass and a lifetime that closely, so, he wrote, "one is forced to keep the question open" (Yang, 1957, p. 398).

That was the deadlock, and it had a name. Yang's lecture calls it the theta-tau puzzle and says it "was widely discussed" (Yang, 1957, p. 397).

**One note on how this course reads its sources, because it starts here.** The Nobel lecture PDFs are typeset with Greek letters, and the text extraction used for this course dropped several of them, so an extracted sentence can read "the so-called puzzle" where the page says "the theta-tau puzzle". That is exactly the kind of small silent corruption that makes a quotation untrustworthy. Every quotation printed in this course was checked against the passage around it, and where a character was lost the course says so instead of guessing. You will meet a much larger version of this problem in Section 4.

**What the deadlock felt like.** Yang reached for an image rather than an equation: the physicist of that moment "has been likened to a man in a dark room groping for an outlet. He is aware of the fact that in some direction there must be a door which would lead him out of his predicament. But in which direction?" (Yang, 1957, p. 398). The next lesson is about the direction two people tried, and it was not the one anybody wanted.

:::reveal What made the theta-tau puzzle a puzzle rather than just two different particles? ||| Their decays implied different parities, so they should have been different particles, but they had the same mass and the same lifetime to within a fraction of a percent and about 20 percent, which particles of different spin and parity are not expected to share.

:::reveal Why does this course tell you that the PDF extraction dropped Greek characters? ||| Because a quotation is only worth printing if it is what the page says, and a silent character loss is the kind of small corruption that makes a source untrustworthy without looking wrong.

## Vocabulary
- **Parity**: the behaviour of a physical process under a mirror reflection, treated before 1957 as a quantity conserved in all interactions.
- **Weak interaction**: the class of force first met in the beta radioactivity of nuclei, far weaker than the nuclear and electromagnetic interactions.
- **Theta-tau puzzle**: the contradiction, sharp by spring 1956, between decay evidence that theta and tau had different parities and mass and lifetime evidence that they were the same particle.
- **Meson**: a class of subatomic particle; the parity argument in this lesson runs on the pi meson's odd parity.
- **Lifetime**: the characteristic decay time of a particle, known for theta and tau to about 20 percent in 1956 and used as evidence they were one particle.

## Sources
Yang, C. N. (1957, December 11). *Law of parity conservation and other symmetry laws of physics* [Nobel lecture]. Nobel Foundation. https://www.nobelprize.org/uploads/2018/06/yang-lecture.pdf (Printed pp. 393-403; the four classes of interaction at pp. 396-397, the theta-tau parity argument and the Seattle quotation at pp. 397-398, the dark-room image at p. 398. Scan pages run one behind: printed 397 is PDF page 5.)`,
    },
    {
      slug: "what-lee-and-yang-asked",
      title: "2 · What Lee and Yang actually asked",
      section: "Section 1 · The question before the experiment",
      body: `The move that broke the deadlock was not an experiment and not a new particle. It was a question about the evidence, and it is the kind of question this whole course is built to teach.

**The question.** Yang's lecture puts it in one sentence: "to uproot an accepted concept one must first demonstrate why the previous evidence in its favor were insufficient" (Yang, 1957, p. 398). So instead of asking whether parity is conserved, Lee and Yang asked what experimental support the assumption actually had.

**The answer, in May 1956, was none.** Yang states their two conclusions plainly. "(A) Past experiments on the weak interactions had actually no bearing on the question of parity conservation. (B) In the strong interactions ... there were indeed many experiments that established parity conservation to a high degree of accuracy, but not to a sufficiently high degree to be able to reveal the effects of a lack of parity conservation in the weak interactions" (Yang, 1957, p. 398).

Read that again with the credit question in mind. A belief held for decades by everybody in the field turned out to rest on experiments that could not have detected a violation if one existed. Nobody had lied and nobody had blundered. The experiments had simply been arranged, as Klein put it from the podium in Stockholm, "so as to give the same result whether the assumption was valid or not" (Klein, 1957).

**They did not enjoy the conclusion.** Yang is unusually candid about this: "what was more startling was the prospect that a space-time symmetry law which the physicists have learned so well may be violated. This prospect did not appeal to us. Rather we were, so to speak, driven to it through frustration with the various other efforts at understanding the puzzle" (Yang, 1957, p. 398). The idea arrived as a last resort, not as an inspiration.

**Then they did the part that matters here.** Having shown the assumption was untested, they designed tests. Yang: "Dr. Lee and I proposed in the summer of 1956 a number of these tests concerning beta-decay, and strange-particle decays" (Yang, 1957, p. 399). The written form of that proposal is the paper his lecture lists as reference 9: T. D. Lee and C. N. Yang, Physical Review 104 (1956) 254 (Yang, 1957, p. 402). This course did not read that paper, so it says only what Yang's lecture says about it.

**Klein's version, from the ceremony.** "Lee and Yang did not confine themselves to this negative statement but devised a number of experiments which would make it possible to test the right-left symmetry in different elementary particle transformations, and proposed them to their experimental colleagues" (Klein, 1957). That sentence is the hinge of the entire credit dispute, and it is spoken by the Nobel Committee's own presenter. Somebody proposed. Somebody else had to carry it out. Both halves are in the prize speech, and only one half is on the prize.

:::reveal What did Lee and Yang conclude in May 1956 about the existing evidence for parity conservation in weak interactions? ||| That past experiments on the weak interactions had no bearing on the question at all, and that the strong-interaction experiments, though accurate, were not accurate enough to reveal a violation in the weak interactions.

:::reveal Why does this course refuse to describe the contents of Lee and Yang's 1956 paper? ||| Because it did not read that paper. It knows the paper only as reference 9 of Yang's Nobel lecture, so it repeats only what the lecture says about it.

## Vocabulary
- **Right-left symmetry**: Klein's plain-language name for parity conservation, the assumption that a process and its mirror image behave identically.
- **Untested assumption**: a belief the evidence neither supports nor contradicts, because no experiment was arranged in a way that could tell the difference.
- **Beta decay**: the radioactive process, governed by the weak interaction, in which a nucleus emits an electron.
- **Proposal, in a prize context**: the published suggestion of an experiment, distinct from performing it, and the distinction the 1957 prize turns on.

## Sources
Klein, O. B. (1957, December 10). *Award ceremony speech, the Nobel Prize in Physics 1957*. Nobel Foundation. https://www.nobelprize.org/prizes/physics/1957/ceremony-speech/ (Unpaginated web text; the "so as to give the same result" sentence and the "did not confine themselves" sentence sit in the two paragraphs immediately before the description of the cobalt-60 experiment.)
Yang, C. N. (1957, December 11). *Law of parity conservation and other symmetry laws of physics* [Nobel lecture]. Nobel Foundation. https://www.nobelprize.org/uploads/2018/06/yang-lecture.pdf (Printed p. 398 for conclusions A and B and for "this prospect did not appeal to us"; p. 399 for the summer 1956 proposals; p. 402, reference 9, for Lee and Yang, *Physical Review, 104*, 254.)`,
    },
    {
      slug: "why-nobody-had-checked",
      title: "3 · Why nobody had checked",
      section: "Section 1 · The question before the experiment",
      body: `A reasonable person hearing that a physical law went untested for decades wants to know how. Yang's lecture answers it directly, and the answer turns out to be the reason the experiment was hard enough to need a specialist.

**Reason one: the neutrino.** "the fact that the neutrino does not have a measurable mass introduces an ambiguity that rules out indirect information on parity conservation from such simple experiments as the spectrum of beta-decay" (Yang, 1957, p. 399). The easy measurement could not settle it.

**Reason two, and this is the deeper one: people had been measuring the wrong thing.** "to study directly parity conservation in beta-decay it is not enough to discuss nuclear parities, as one had always done. One must study parity conservation of the whole decay process" (Yang, 1957, p. 399). Physicists had been assigning parities to nuclei. The question was about the process, which is not the same object.

**What a test would have to look like.** Yang states the design principle in one sentence, and it is beautifully simple: "One constructs two sets of experimental arrangements which are mirror images of each other, and which contain weak interactions. One then examines whether the two arrangements always give the same results in terms of the readings of their meters (or counters). If the results are not the same, one would have an unequivocal proof that right-left symmetry, as we usually understand it, breaks down" (Yang, 1957, p. 399).

**Klein made the same point to a room in evening dress.** Take a coil lying flat like a spool of thread on a table, with the current running counterclockwise. The cobalt nuclei line up with their north poles upward. Now watch where the electrons go. The experiment "gave the result that the electrons from the radioactive process with this arrangement were preferentially thrown downwards towards the floor. From this it follows unambiguously that the process lacks that right-left symmetry, which one had earlier assumed" (Klein, 1957).

Then he drew the consequence that made the result famous. You could now explain what we mean by left and right to someone who had never seen us, an inhabitant of a distant stellar system, by telling them to arrange this experiment and make the electrons come out downwards (Klein, 1957). Before 1957 there was no way to do that. Nature, it turned out, is not ambidextrous.

**And here is the sentence that sets up everything after it.** The design principle was general. Lee and Yang proposed several experiments. Somebody had to build one, at a temperature near absolute zero, with a technique that did not yet exist. Yang's own lecture says the combination "was unknown before and constituted a major difficulty" (Yang, 1957, p. 399). Section 2 is about who solved it, and about what the paper that reported it says on its own first line.

:::reveal What did Yang say physicists had been discussing instead of what they needed to discuss? ||| Nuclear parities. The question was about parity conservation in the whole decay process, which is a different object from the parity of a nucleus.

:::reveal In Klein's account, what result showed that right-left symmetry breaks down? ||| With the cobalt nuclei aligned north pole upward by a counterclockwise current, the electrons came out preferentially downward rather than equally in both directions.

## Vocabulary
- **Neutrino**: the particle emitted alongside the electron in beta decay, whose lack of a measurable mass blocked the indirect route to testing parity.
- **Mirror-image arrangement**: two experimental setups that are reflections of each other, the design at the heart of any direct parity test.
- **Nuclear parity**: the parity assigned to a nucleus, which physicists had long measured, as opposed to the parity of the decay process itself.
- **Absolute zero**: the temperature floor near which the cobalt-60 experiment had to run, and the reason it needed cryogenic expertise.

## Sources
Klein, O. B. (1957, December 10). *Award ceremony speech, the Nobel Prize in Physics 1957*. Nobel Foundation. https://www.nobelprize.org/prizes/physics/1957/ceremony-speech/ (Unpaginated web text; the coil, the counterclockwise current and the downward electrons are in the paragraph following the naming of Wu, and the distant-stellar-system passage in the paragraph after that.)
Yang, C. N. (1957, December 11). *Law of parity conservation and other symmetry laws of physics* [Nobel lecture]. Nobel Foundation. https://www.nobelprize.org/uploads/2018/06/yang-lecture.pdf (Printed p. 399, PDF page 7: the neutrino ambiguity, the whole-decay-process point, the mirror-image design principle, and "unknown before and constituted a major difficulty".)`,
    },
    {
      slug: "section-1-quiz",
      title: "Section 1 quiz · The question before the experiment",
      section: "Section 1 · The question before the experiment",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "In Yang's Nobel lecture, which class of interaction was first discovered in the beta radioactivity of nuclei?",
            options: ["The weak interactions", "The strong nuclear interactions that bind nuclei together and act between nuclei and mesons", "The electromagnetic interactions understood in detail by nineteenth-century physicists", "The gravitational interactions, negligible at nuclear scale with existing techniques"],
            correctIndex: 0,
            explanation: "Yang lists four classes and places the weak interactions third, first discovered around the beginning of the century in the beta radioactivity of nuclei (Yang, 1957, pp. 396-397).",
            sourceLessonSlug: "the-puzzle-that-would-not-resolve",
          },
          {
            prompt: "How many classes of interaction does Yang's lecture list?",
            options: ["Four", "Three, once gravity is set aside as negligible at nuclear scale", "Five, counting strange-particle production as its own class", "Two, dividing everything into strong and weak"],
            correctIndex: 0,
            explanation: "Strong nuclear, electromagnetic, weak, and gravitational. Yang notes gravity is negligible in atomic and nuclear interactions rather than dropping it from the list (Yang, 1957, pp. 396-397).",
            sourceLessonSlug: "the-puzzle-that-would-not-resolve",
          },
          {
            prompt: "What parity does Yang's lecture say a pi meson has?",
            options: ["Odd", "Even, which is why a two-pion decay carries odd total parity", "It depends on the relative motion of the mesons in the decay", "Undetermined before the 1957 cobalt-60 experiment settled it"],
            correctIndex: 0,
            explanation: "The pi meson parity is odd, so two pi mesons give an even product parity and three give an odd one. That arithmetic is what made theta and tau look like different particles (Yang, 1957, p. 397).",
            sourceLessonSlug: "the-puzzle-that-would-not-resolve",
          },
          {
            prompt: "On the parity argument Yang describes, what total parity must a particle decaying into three pi mesons carry?",
            options: ["Odd", "Even, because the product of three odd parities is even", "Neither, because parity is not defined for a three-body decay", "The same as the parity of a particle decaying into two pi mesons"],
            correctIndex: 0,
            explanation: "Three odd factors multiply to an odd product. The two-pion case gives even. Different parities meant different particles, which is where the puzzle began (Yang, 1957, p. 397).",
            sourceLessonSlug: "the-puzzle-that-would-not-resolve",
          },
          {
            prompt: "To what accuracy does Yang's Seattle quotation say the theta and tau lifetimes were known?",
            options: ["About 20 percent", "To within a fraction of a percent, the same accuracy as the masses", "To two to ten electron masses, the figure he gives for the lifetimes", "They were not measured at all before the spring of 1956"],
            correctIndex: 0,
            explanation: "The masses were known to about 2 to 10 electron masses, a fraction of a percent; the lifetimes to about 20 percent. Sharing both is what forced the question open (Yang, 1957, p. 398).",
            sourceLessonSlug: "the-puzzle-that-would-not-resolve",
          },
          {
            prompt: "In the same quotation, what accuracy does Yang give for the theta and tau masses?",
            options: ["A fraction of a percent", "About 20 percent, which he calls close enough to force the question open", "Better than one part in a million, from bubble chamber measurements", "Unknown, because K mesons were too short-lived to weigh in 1956"],
            correctIndex: 0,
            explanation: "Two to ten electron masses, which he describes as a fraction of a percent. The lifetimes were the looser figure, about 20 percent (Yang, 1957, p. 398).",
            sourceLessonSlug: "the-puzzle-that-would-not-resolve",
          },
          {
            prompt: "What does Yang's quoted Seattle report say one is forced to do about the inference that theta and tau are different particles?",
            options: ["Keep the question open", "Accept it as more well-founded than most inferences in physics", "Reject it outright, since the masses and lifetimes settle the matter", "Wait for the cobalt-60 experiment, which he says was already under way"],
            correctIndex: 0,
            explanation: "He writes that the mass and lifetime degeneracies force the question open, and adds that the inference would otherwise have been regarded as conclusive (Yang, 1957, p. 398).",
            sourceLessonSlug: "the-puzzle-that-would-not-resolve",
          },
          {
            prompt: "What image does Yang use for the position physicists were in during the theta-tau deadlock?",
            options: ["A man groping in a dark room", "A ship whose compass points in two directions at once", "A locked door with the key visible on the other side", "A map of a country nobody has yet surveyed"],
            correctIndex: 0,
            explanation: "A man in a dark room groping for an outlet, aware there must be a door somewhere but not which direction (Yang, 1957, p. 398).",
            sourceLessonSlug: "the-puzzle-that-would-not-resolve",
          },
          {
            prompt: "Where and when did Yang give the report he quotes in his Nobel lecture?",
            options: ["Seattle, September 1956", "Stockholm, in December 1957, the day before the lecture itself", "Rochester, at the April 1956 conference cited in reference 10", "Brookhaven, in the summer of 1956, when the tests were proposed"],
            correctIndex: 0,
            explanation: "The International Conference on Theoretical Physics in Seattle, September 1956, in a report titled Present Knowledge about the New Particles (Yang, 1957, p. 398).",
            sourceLessonSlug: "the-puzzle-that-would-not-resolve",
          },
          {
            prompt: "Why does this course tell you that the lecture PDFs lost some Greek characters in extraction?",
            options: ["Because a silent corruption makes a quotation untrustworthy", "Because the Nobel Foundation asks users of its PDFs to disclose extraction errors", "Because the lost characters change the physics of the parity argument", "Because the printed page numbers are also unreliable in those files"],
            correctIndex: 0,
            explanation: "An extracted sentence can read the so-called puzzle where the page says the theta-tau puzzle. Every quotation here was checked against the surrounding passage, and losses are declared (lesson 1).",
            sourceLessonSlug: "the-puzzle-that-would-not-resolve",
          },
          {
            prompt: "What are the printed page numbers of Yang's Nobel lecture as this course cites it?",
            options: ["393 to 403", "406 to 418, the run this course gives for Lee's lecture instead", "1413 to 1415, the pages of the Physical Review Letter", "Unpaginated, because the lecture is cited from a web page"],
            correctIndex: 0,
            explanation: "Yang's lecture runs printed pp. 393 to 403 across 11 PDF pages. Lee's is the 406 to 418 run, and 1413 to 1415 belongs to the Physical Review Letter (lesson 1 sources).",
            sourceLessonSlug: "the-puzzle-that-would-not-resolve",
          },
          {
            prompt: "In Yang's lecture, which class of interaction does he describe as completely negligible in atomic and nuclear interactions with existing techniques?",
            options: ["Gravitational", "Electromagnetic, because quantum mechanics already accounted for it in full", "Weak, because it is far feebler than the nuclear interactions", "Strong, outside the immediate neighbourhood of the nucleus"],
            correctIndex: 0,
            explanation: "Gravity. He gives it one sentence and moves on, precisely because it is too weak to register at nuclear scale (Yang, 1957, p. 397).",
            sourceLessonSlug: "the-puzzle-that-would-not-resolve",
          },
          {
            prompt: "Which interactions does Yang describe as the crowning achievement of nineteenth-century physics to have understood in detail?",
            options: ["The electromagnetic interactions", "The weak interactions responsible for the decay of strange particles", "The nuclear interactions that bind nuclei and act between nuclei and mesons", "The gravitational interactions, which Newton had already described"],
            correctIndex: 0,
            explanation: "He calls the detailed understanding of electromagnetic forces the crowning achievement of the physicists of the nineteenth century (Yang, 1957, p. 396).",
            sourceLessonSlug: "the-puzzle-that-would-not-resolve",
          },
          {
            prompt: "What did Yang's lecture say had roughly the same strengths as beta-interactions, leading them all to be called weak?",
            options: ["Muon decay and muon capture", "The strange-particle production processes seen in cloud chambers", "The electromagnetic interactions, once quantum corrections are applied", "Nuclear binding forces at distances beyond one fermi"],
            correctIndex: 0,
            explanation: "The lecture records that with the discovery of those decays it was noticed independently by Klein, by Tiomno and Wheeler, and by Lee, Rosenbluth and Yang that the strengths were roughly the same (Yang, 1957, p. 397).",
            sourceLessonSlug: "the-puzzle-that-would-not-resolve",
          },
          {
            prompt: "What does the course call the small, invisible kind of error that a dropped Greek letter in an extracted PDF represents?",
            options: ["A silent corruption", "A transcription convention that every archive applies to Greek text", "A rounding error, of the same class as an approximate lifetime", "A citation error, corrected by naming the printed page"],
            correctIndex: 0,
            explanation: "The text still reads like a sentence, which is what makes it dangerous: nothing about it looks wrong. The fix is to check every quotation against the passage around it (lesson 1).",
            sourceLessonSlug: "the-puzzle-that-would-not-resolve",
          },
          {
            prompt: "Which two particles sat at the centre of the puzzle Yang describes?",
            options: ["Theta and tau", "Theta and the pi meson, whose parities disagreed in every decay", "Tau and the neutrino, which had no measurable mass", "The electron and the positron, shown later to have opposite parity"],
            correctIndex: 0,
            explanation: "Theta and tau, later understood as the same K meson. Yang's lecture calls the contradiction the theta-tau puzzle (Yang, 1957, p. 397).",
            sourceLessonSlug: "the-puzzle-that-would-not-resolve",
          },
          {
            prompt: "According to Yang, what made the parity argument about theta and tau less simple than the bare multiplication of parities suggests?",
            options: ["The relative motion of the pi mesons", "The uncertainty in the lifetimes, which ran to about 20 percent", "The absence of any measured parity for the pi meson before 1956", "The lack of a low-temperature technique for holding nuclei still"],
            correctIndex: 0,
            explanation: "Because of the mesons' relative motion the argument needed experimental study of their momentum and angular distribution before it could be called conclusive (Yang, 1957, p. 397).",
            sourceLessonSlug: "the-puzzle-that-would-not-resolve",
          },
          {
            prompt: "By what point does Yang say the accumulated experimental data seemed to show unambiguously that theta and tau do not have the same parity?",
            options: ["Spring 1956", "December 1957, when the prize was awarded in Stockholm", "1953, when Dalitz and Fabri first pointed out the argument", "January 1957, when the cobalt-60 Letter was received"],
            correctIndex: 0,
            explanation: "By the spring of 1956, he writes, studies in many laboratories had made the case; the contradiction with mass and lifetime data hardened at about the same time (Yang, 1957, p. 397).",
            sourceLessonSlug: "the-puzzle-that-would-not-resolve",
          },
          {
            prompt: "Who does Yang credit with pointing out in 1953 that the decays could yield information about the spins and parities of theta and tau?",
            options: ["Dalitz and Fabri", "Lee and Yang themselves, three years before their own paper", "Wu, Ambler, Hayward, Hoppes and Hudson at the Bureau of Standards", "Klein, Tiomno and Wheeler, working independently of one another"],
            correctIndex: 0,
            explanation: "Reference 7 of the lecture is R. Dalitz, Phil. Mag. 44 (1953) 1068, and E. Fabri, Nuovo Cimento II (1954) 479 (Yang, 1957, pp. 397, 402).",
            sourceLessonSlug: "the-puzzle-that-would-not-resolve",
          },
          {
            prompt: "What kind of lesson are the first three lessons of this course, before the archive work begins?",
            options: ["Physics", "Biography, covering Wu's education and wartime work", "Archival method, taught before any of the documents appear", "Prize history, covering the Nobel statutes and their drafting"],
            correctIndex: 0,
            explanation: "The archive only makes sense once you know what the discovery was, so Section 1 is physics read off the two Nobel lectures (lesson 1).",
            sourceLessonSlug: "the-puzzle-that-would-not-resolve",
          },
          {
            prompt: "What does Yang say must be demonstrated first if an accepted concept is to be uprooted?",
            options: ["Why the previous evidence was insufficient", "That an alternative concept already explains every known measurement", "That the concept was never formally derived from first principles", "That the experiments supporting it were performed incorrectly"],
            correctIndex: 0,
            explanation: "His sentence is that one must first demonstrate why the previous evidence in its favor were insufficient. That is a question about the evidence, not about the law (Yang, 1957, p. 398).",
            sourceLessonSlug: "what-lee-and-yang-asked",
          },
          {
            prompt: "What was conclusion (A) that Lee and Yang reached in May 1956?",
            options: ["Past weak-interaction experiments had no bearing on parity", "Parity conservation had been disproved in the strong interactions but not yet in the weak ones", "The theta and tau particles were certainly identical, whatever their decays showed", "A mirror-image experiment had already been run and had been misread"],
            correctIndex: 0,
            explanation: "Conclusion (A) is that past experiments on the weak interactions had actually no bearing on the question of parity conservation (Yang, 1957, p. 398).",
            sourceLessonSlug: "what-lee-and-yang-asked",
          },
          {
            prompt: "What was conclusion (B)?",
            options: ["Strong-interaction tests were accurate but not accurate enough", "Strong-interaction experiments had never tested parity conservation at all", "Electromagnetic experiments had already revealed a parity violation in 1949", "Gravitational experiments would be needed to settle the question"],
            correctIndex: 0,
            explanation: "Many strong-interaction experiments established parity conservation to high accuracy, but not to an accuracy that could reveal a violation in the weak interactions (Yang, 1957, p. 398).",
            sourceLessonSlug: "what-lee-and-yang-asked",
          },
          {
            prompt: "How did Klein describe the way earlier experiments had been arranged?",
            options: ["To give the same result whether the assumption held or not", "To be repeated at several laboratories so that errors would cancel out", "To measure nuclear parities with the greatest precision then available", "To avoid the weak interactions, which were still poorly understood"],
            correctIndex: 0,
            explanation: "Klein's presentation speech says the symmetry assumption had no experimental support whatsoever, because every experiment had been arranged so as to give the same result either way (Klein, 1957).",
            sourceLessonSlug: "what-lee-and-yang-asked",
          },
          {
            prompt: "How does Yang describe his and Lee's feelings about the prospect of parity violation?",
            options: ["It did not appeal to them", "They had expected it since 1949 and welcomed the confirmation", "They regarded it as the obvious reading of the strange-particle data", "They thought it too speculative to publish under their own names"],
            correctIndex: 0,
            explanation: "He writes that the prospect did not appeal to them and that they were driven to it through frustration with other attempts at the puzzle (Yang, 1957, p. 398).",
            sourceLessonSlug: "what-lee-and-yang-asked",
          },
          {
            prompt: "When does Yang say he and Lee proposed a number of tests of parity conservation?",
            options: ["Summer 1956", "December 1957, in the Nobel lectures themselves", "Spring 1953, following the Dalitz and Fabri argument", "February 1957, once the cobalt-60 result was published"],
            correctIndex: 0,
            explanation: "In the summer of 1956 they proposed tests concerning beta-decay and strange-particle decays; the cobalt-60 experiment was one of them (Yang, 1957, p. 399).",
            sourceLessonSlug: "what-lee-and-yang-asked",
          },
          {
            prompt: "Which paper does Yang's reference 9 name?",
            options: ["Lee and Yang, Physical Review 104 (1956) 254", "Wu, Ambler, Hayward, Hoppes and Hudson, Physical Review 105 (1957) 1413", "Lee, Oehme and Yang, Physical Review 106 (1957) 340", "Yang, Reviews of Modern Physics 29 (1957) 231"],
            correctIndex: 0,
            explanation: "Reference 9 is the 1956 Lee and Yang paper. Reference 12 is the Wu Letter, and reference 8 is Yang's own Seattle report (Yang, 1957, p. 402).",
            sourceLessonSlug: "what-lee-and-yang-asked",
          },
          {
            prompt: "What does this course say about the contents of Lee and Yang's 1956 paper?",
            options: ["Only what Yang's lecture says about it", "That it proposed the cobalt-60 experiment in the exact form Wu performed it", "That it named the National Bureau of Standards as the right laboratory", "That it predicted the size of the electron asymmetry in advance"],
            correctIndex: 0,
            explanation: "The course did not read the 1956 paper. It knows it only as reference 9 of the lecture, so it repeats only the lecture's description (lesson 2).",
            sourceLessonSlug: "what-lee-and-yang-asked",
          },
          {
            prompt: "In Klein's presentation speech, what did Lee and Yang do beyond making a negative statement?",
            options: ["They devised experiments and proposed them to colleagues", "They built the first low-temperature apparatus capable of the test", "They withdrew the claim until an experiment could confirm it", "They calculated the expected asymmetry for every known decay"],
            correctIndex: 0,
            explanation: "Klein says they devised a number of experiments to test right-left symmetry and proposed them to their experimental colleagues, which is the hinge of the whole credit dispute (Klein, 1957).",
            sourceLessonSlug: "what-lee-and-yang-asked",
          },
          {
            prompt: "Why does the course call Klein's sentence about proposing experiments the hinge of the credit dispute?",
            options: ["It separates proposing from carrying out", "It is the only sentence in the ceremony that mentions the weak interactions", "It shows the committee knew the experiment had failed once before", "It gives the exact date on which the experiment was suggested"],
            correctIndex: 0,
            explanation: "Somebody proposed and somebody else carried out. Both halves are in the prize speech, and only one half is on the prize (lesson 2).",
            sourceLessonSlug: "what-lee-and-yang-asked",
          },
          {
            prompt: "What kind of question did Lee and Yang ask instead of asking whether parity is conserved?",
            options: ["What support the assumption actually had", "Whether the theta and tau masses had been measured correctly", "Whether a different symmetry could replace parity in the weak interactions", "Whether the Seattle conference had reached a consensus"],
            correctIndex: 0,
            explanation: "They asked what experimental support the assumption had, which turned out to be none. That is a question about evidence rather than about nature (lesson 2).",
            sourceLessonSlug: "what-lee-and-yang-asked",
          },
          {
            prompt: "According to lesson 2, what had gone wrong with the decades of belief in parity conservation in weak interactions?",
            options: ["Nothing dishonest; the tests could not have detected a violation", "Results had been suppressed by journals unwilling to publish anomalies", "A single influential measurement had been fabricated in the 1930s", "Physicists had confused parity with charge conjugation invariance"],
            correctIndex: 0,
            explanation: "Nobody lied and nobody blundered. The experiments were simply arranged so that a violation would not show up, which is a different kind of failure (lesson 2).",
            sourceLessonSlug: "what-lee-and-yang-asked",
          },
          {
            prompt: "Yang says the frustration that drove them came from efforts at understanding which problem?",
            options: ["The theta-tau puzzle", "The neutrino's missing rest mass, unmeasured in 1956", "The disagreement between nuclear and atomic parity assignments", "The failure of earlier cryogenic experiments at Columbia"],
            correctIndex: 0,
            explanation: "The lecture places the frustration squarely on the various other efforts at understanding the theta-tau puzzle (Yang, 1957, p. 398).",
            sourceLessonSlug: "what-lee-and-yang-asked",
          },
          {
            prompt: "Which decays did Lee and Yang's summer 1956 proposals concern, as Yang's lecture describes them?",
            options: ["Beta decay and strange-particle decays", "Only the decays of the K mesons that produced the puzzle", "Electron and positron annihilation in a magnetic field", "The muon capture processes first discussed in 1949"],
            correctIndex: 0,
            explanation: "He writes that they proposed a number of tests concerning beta-decay and strange-particle decays (Yang, 1957, p. 399).",
            sourceLessonSlug: "what-lee-and-yang-asked",
          },
          {
            prompt: "What word does Klein use in place of parity conservation when speaking to the ceremony audience?",
            options: ["Right-left symmetry", "Mirror invariance, borrowed from the German literature of the 1920s", "Reflection parity, the term used in the 1957 citation itself", "Handedness, which he attributes to Lee and Yang's own paper"],
            correctIndex: 0,
            explanation: "Klein calls it the symmetry of Nature with respect to right and left, and speaks of right-left symmetry throughout (Klein, 1957).",
            sourceLessonSlug: "what-lee-and-yang-asked",
          },
          {
            prompt: "In lesson 2's terms, what is an untested assumption?",
            options: ["A belief the evidence can neither support nor contradict", "A belief contradicted by evidence that nobody has published", "A belief held only by theorists and never by experimenters", "A belief that has been tested but only at low precision"],
            correctIndex: 0,
            explanation: "No experiment was arranged in a way that could tell the difference, so the evidence was silent rather than favourable (lesson 2 vocabulary).",
            sourceLessonSlug: "what-lee-and-yang-asked",
          },
          {
            prompt: "What is the first reason Yang gives that beta-decay experiments had yielded no information about parity conservation?",
            options: ["The neutrino has no measurable mass", "Beta decay is too weak a process to measure with counters", "Nuclear parities had never been assigned with sufficient accuracy", "Low-temperature apparatus had not been invented before 1956"],
            correctIndex: 0,
            explanation: "The absence of a measurable neutrino mass introduces an ambiguity that rules out indirect information from simple experiments like the beta-decay spectrum (Yang, 1957, p. 399).",
            sourceLessonSlug: "why-nobody-had-checked",
          },
          {
            prompt: "What is the second reason, which lesson 3 calls the deeper one?",
            options: ["People had measured nuclear parities, not the decay process", "People had used the wrong isotope, cobalt-60 rather than a lighter nucleus", "People had failed to align the nuclei at low enough temperatures", "People had trusted theory over the counters in front of them"],
            correctIndex: 0,
            explanation: "Yang writes that it is not enough to discuss nuclear parities, as one had always done; one must study parity conservation of the whole decay process (Yang, 1957, p. 399).",
            sourceLessonSlug: "why-nobody-had-checked",
          },
          {
            prompt: "What is the design principle Yang states for any direct test of right-left symmetry?",
            options: ["Build two mirror-image setups and compare the meters", "Repeat one setup at two laboratories on opposite sides of the world", "Reverse the sign of the magnetic field and measure the decay rate", "Compare a weak-interaction process against a strong-interaction control"],
            correctIndex: 0,
            explanation: "Two arrangements that are mirror images of each other, both containing weak interactions; if the meter readings differ, right-left symmetry breaks down (Yang, 1957, p. 399).",
            sourceLessonSlug: "why-nobody-had-checked",
          },
          {
            prompt: "In Klein's description, which way do the cobalt nuclei point when the current runs counterclockwise in the coil?",
            options: ["North poles upward", "North poles downward, opposite to the electron emission", "Randomly, until the temperature falls far enough", "Along the plane of the table rather than across it"],
            correctIndex: 0,
            explanation: "With the coil lying like a spool of thread and the current counterclockwise, the north poles of the cobalt nuclei are directed upwards (Klein, 1957).",
            sourceLessonSlug: "why-nobody-had-checked",
          },
          {
            prompt: "Where did the electrons preferentially go in the experiment Klein describes?",
            options: ["Downwards, towards the floor", "Upwards, in the direction the nuclear north poles pointed", "Equally in both directions, which is the result parity predicts", "Sideways, in the plane of the coil carrying the current"],
            correctIndex: 0,
            explanation: "The electrons were preferentially thrown downwards, which Klein says shows unambiguously that the process lacks the assumed right-left symmetry (Klein, 1957).",
            sourceLessonSlug: "why-nobody-had-checked",
          },
          {
            prompt: "What did Klein say the result made it possible to explain to an inhabitant of a distant stellar system?",
            options: ["What we mean by left and right", "How to build a low-temperature apparatus from first principles", "Why the theta and tau particles share a mass and a lifetime", "Which of the four interactions is the strongest"],
            correctIndex: 0,
            explanation: "You could ask them to arrange the experiment so the electrons come out downwards, and the current direction then fixes left and right. Before 1957 there was no way to do that (Klein, 1957).",
            sourceLessonSlug: "why-nobody-had-checked",
          },
          {
            prompt: "What does Yang's lecture say about the technique of combining beta-decay measurement with low-temperature apparatus?",
            options: ["It was unknown before and was a major difficulty", "It had been standard at the Bureau of Standards since the 1940s", "It was proposed in detail in the 1956 Lee and Yang paper", "It was tried first in Europe and abandoned as impractical"],
            correctIndex: 0,
            explanation: "He writes that the technique was unknown before and constituted a major difficulty which was successfully solved by these authors (Yang, 1957, p. 399).",
            sourceLessonSlug: "why-nobody-had-checked",
          },
          {
            prompt: "According to lesson 3, what did physicists need to study that they had not been studying?",
            options: ["The whole decay process", "The lifetime of the neutrino after emission", "The parity of the cobalt-60 nucleus in its ground state", "The angular distribution of pi mesons in three-body decays"],
            correctIndex: 0,
            explanation: "Nuclear parity and process parity are different objects, and only the second could answer the question (Yang, 1957, p. 399).",
            sourceLessonSlug: "why-nobody-had-checked",
          },
          {
            prompt: "What does lesson 3 say the cobalt-60 result showed about nature's handedness?",
            options: ["Nature is not ambidextrous", "Nature prefers the left hand in strong interactions and the right in weak ones", "Handedness is a property of the apparatus rather than of nature", "Handedness cannot be communicated without a shared definition of matter"],
            correctIndex: 0,
            explanation: "Before 1957 there was no way to explain left and right to someone who had never seen us. Afterwards there was, which is what Klein's distant-observer passage dramatises (lesson 3).",
            sourceLessonSlug: "why-nobody-had-checked",
          },
          {
            prompt: "What object does Klein compare the magnetic coil to in his speech?",
            options: ["A spool of thread on a table", "A compass needle held above a bar magnet", "A clock face, with the current running around the hours", "A mirror laid flat, reflecting the nuclei back on themselves"],
            correctIndex: 0,
            explanation: "He asks the audience to picture a coil placed like a spool of thread on a table, with the current flowing counterclockwise (Klein, 1957).",
            sourceLessonSlug: "why-nobody-had-checked",
          },
          {
            prompt: "Whose skill does Yang's lecture credit with solving the low-temperature difficulty?",
            options: ["The authors of the cobalt-60 experiment", "The theorists who proposed the test in the summer of 1956", "The Nobel Committee's own experimental adviser in Stockholm", "The Rochester conference participants of April 1956"],
            correctIndex: 0,
            explanation: "He writes that the major difficulty was successfully solved by these authors, meaning Wu, Ambler, Hayward, Hoppes and Hudson (Yang, 1957, p. 399).",
            sourceLessonSlug: "why-nobody-had-checked",
          },
          {
            prompt: "What does the absence of a measurable neutrino mass rule out, in Yang's account?",
            options: ["Indirect information from simple beta-decay experiments", "Any possibility of detecting the neutrino in a counter", "The use of cobalt-60 as a source for a parity test", "The conservation of energy in beta decay"],
            correctIndex: 0,
            explanation: "The ambiguity blocks the indirect route, such as reading parity information off the beta-decay spectrum. A direct mirror-image test was the way through (Yang, 1957, p. 399).",
            sourceLessonSlug: "why-nobody-had-checked",
          },
          {
            prompt: "What is the temperature floor that lesson 3 names as the reason the experiment needed cryogenic expertise?",
            options: ["Absolute zero", "The boiling point of liquid nitrogen, well within ordinary laboratory reach", "Room temperature, once a strong enough magnetic field is applied", "The melting point of cobalt, which limits how the source can be prepared"],
            correctIndex: 0,
            explanation: "The experiment had to run near absolute zero so the aligned nuclei would stay aligned, which is why it needed a laboratory with cryogenic capability (lesson 3 vocabulary).",
            sourceLessonSlug: "why-nobody-had-checked",
          },
          {
            prompt: "What does lesson 3 say Section 2 will be about?",
            options: ["Who solved the problem, and what the paper's first line says", "The Nobel statutes and the rules governing eligibility", "The 1957 nomination list and the names on it", "The physicists who dispute the injustice framing"],
            correctIndex: 0,
            explanation: "Section 2 reads the 1957 Letter itself, starting with its byline. The nomination list is Section 4 and the contesting physicists are Section 5 (lesson 3).",
            sourceLessonSlug: "why-nobody-had-checked",
          },
          {
            prompt: "According to Klein, what had physicists assumed almost tacitly about elementary particle reactions?",
            options: ["That they are symmetric with respect to right and left", "That they conserve energy only on average over many events", "That the weak interactions obey the same laws as the strong ones", "That antiparticles behave exactly as their particles do in a mirror"],
            correctIndex: 0,
            explanation: "He says the assumption entered the field almost tacitly and played an important part in the elaboration of Fermi's theory (Klein, 1957).",
            sourceLessonSlug: "what-lee-and-yang-asked",
          },
          {
            prompt: "Which two earlier Nobel laureates does Klein name as having developed the theories that border on one another where electrons are concerned?",
            options: ["Dirac and Fermi", "Wigner and Laporte, whose work on reflection invariance he also cites", "Bohr and Heisenberg, the founders of the quantum edifice", "Rutherford and Chadwick, for the structure of the nucleus"],
            correctIndex: 0,
            explanation: "Klein names Dirac and Fermi, calling the first the outermost wing of the quantum mechanical edifice and the second the first unfinished room of elementary particle law (Klein, 1957).",
            sourceLessonSlug: "what-lee-and-yang-asked",
          },
          {
            prompt: "Which observations does Klein say were the starting point of Lee and Yang's revision?",
            options: ["Strange observations about K mesons", "Anomalies in the beta-decay spectra measured at Columbia", "Discrepancies between atomic and nuclear parity assignments", "Measurements of the electron asymmetry in polarised cobalt"],
            correctIndex: 0,
            explanation: "He describes certain strange observations concerning a kind of new particles called K mesons, which is the theta-tau puzzle in ceremony language (Klein, 1957).",
            sourceLessonSlug: "what-lee-and-yang-asked",
          },
          {
            prompt: "In Yang's 1927 attribution, who proved that the empirical rule of Laporte follows from reflection invariance?",
            options: ["Wigner", "Dirac, in the theory Klein called the outermost wing of quantum mechanics", "Fermi, in the theory of beta decay that assumed right-left symmetry", "Laporte himself, three years after stating the rule"],
            correctIndex: 0,
            explanation: "Yang credits Wigner with the critical and profound step in 1927; Laporte's own paper is reference 4, from 1924 (Yang, 1957, pp. 396, 402).",
            sourceLessonSlug: "the-puzzle-that-would-not-resolve",
          },
          {
            prompt: "What does lesson 1 say happens to a quotation when a character is lost and the loss is not declared?",
            options: ["It becomes untrustworthy while still reading like a sentence", "It becomes unreadable, so the error announces itself", "It changes the physics being described in a detectable way", "It is automatically corrected by the archive that hosts the file"],
            correctIndex: 0,
            explanation: "The danger is precisely that nothing looks wrong. Declaring the loss is what keeps the quotation honest (lesson 1).",
            sourceLessonSlug: "the-puzzle-that-would-not-resolve",
          },
          {
            prompt: "What did the accumulated evidence about theta and tau contradict, according to Yang?",
            options: ["Other experimental results that hardened at the same time", "The predictions of Fermi's theory of beta decay", "The parity assignments made for atomic states in the 1920s", "The Seattle conference's published consensus of September 1956"],
            correctIndex: 0,
            explanation: "The parity inference was in marked contradiction with other experimental results, the mass and lifetime degeneracies, which became definite at about the same time (Yang, 1957, p. 397).",
            sourceLessonSlug: "the-puzzle-that-would-not-resolve",
          },
          {
            prompt: "Which of these is the correct description of the weak interactions as Yang's lecture ranks them?",
            options: ["Third in strength of the four classes", "The strongest class, since they govern nuclear binding", "Second in strength, between the nuclear and electromagnetic classes", "The weakest class, below gravity at nuclear distances"],
            correctIndex: 0,
            explanation: "His order is nuclear, electromagnetic, weak, gravitational, with gravity negligible at these scales (Yang, 1957, pp. 396-397).",
            sourceLessonSlug: "the-puzzle-that-would-not-resolve",
          },
          {
            prompt: "What does Yang call the pattern of the weak interactions all having almost the same strength?",
            options: ["One of the most tantalizing phenomena", "A coincidence with no physical content worth pursuing", "A direct consequence of parity conservation in those processes", "An artefact of the counters used to measure decay rates"],
            correctIndex: 0,
            explanation: "He calls the consistent and striking pattern of their almost uniform strength one of the most tantalizing phenomena, and returns to it later in the lecture (Yang, 1957, p. 397).",
            sourceLessonSlug: "the-puzzle-that-would-not-resolve",
          },
          {
            prompt: "What does this course mean by a proposal, in a prize context?",
            options: ["The published suggestion of an experiment, not its performance", "A nomination form submitted to the Nobel Committee for Physics", "A grant application to fund a laboratory's next year of work", "A draft paper circulated before publication to invite comment"],
            correctIndex: 0,
            explanation: "Proposing and carrying out are two different acts, and the 1957 prize turns on the distinction. A nomination form is a different document entirely, and Section 4 reads those (lesson 2 vocabulary).",
            sourceLessonSlug: "what-lee-and-yang-asked",
          },
          {
            prompt: "Why does lesson 2 tell the reader to read Yang's conclusions with the credit question in mind?",
            options: ["Because a whole field's belief rested on evidence that could not test it", "Because Yang's lecture names the physicists who should have shared the prize", "Because the conclusions were published under Wu's name as well", "Because the Nobel Committee quoted them in its 1957 citation"],
            correctIndex: 0,
            explanation: "The point is about how confident collective belief can be, not about blame. The evidence had been silent, not misread (lesson 2).",
            sourceLessonSlug: "what-lee-and-yang-asked",
          },
          {
            prompt: "What does lesson 3 give as the reason the cobalt-60 test needed a specialist rather than any competent laboratory?",
            options: ["It required a technique that did not yet exist", "It required an isotope that only one laboratory was licensed to hold", "It required approval from the Atomic Energy Commission for each run", "It required more counters than a university department could afford"],
            correctIndex: 0,
            explanation: "Combining beta-decay measurement with low-temperature apparatus was, in Yang's own words, unknown before (Yang, 1957, p. 399).",
            sourceLessonSlug: "why-nobody-had-checked",
          },
          {
            prompt: "What does the course say the design principle behind the mirror-image test was, in one word?",
            options: ["General", "Cryogenic, because only cold experiments could realise it", "Statistical, because it depends on averaging many decays", "Provisional, because Lee and Yang expected it to fail"],
            correctIndex: 0,
            explanation: "The principle covered many possible experiments. Somebody still had to build one of them, near absolute zero, with a technique nobody had (lesson 3).",
            sourceLessonSlug: "why-nobody-had-checked",
          },
          {
            prompt: "Which lecture does this course use for the physics of Section 1?",
            options: ["Yang's Nobel lecture, with Klein's speech alongside", "Lee's Nobel lecture, which covers the same ground in more detail", "The 1957 banquet speeches of both laureates", "Wu's own account, published in 1973 in a collected volume"],
            correctIndex: 0,
            explanation: "Section 1 is read off Yang's Nobel lecture and Klein's presentation speech. Lee's lecture enters in Section 3, and Wu's 1973 account is a research check rather than an asserted source (lesson 1).",
            sourceLessonSlug: "the-puzzle-that-would-not-resolve",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2 — The experiment, and who was in the room
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-byline-read-as-a-document",
      title: "4 · The byline, read as a document",
      section: "Section 2 · The experiment, and who was in the room",
      body: `A byline is a document. It records an order, a set of affiliations and a set of decisions, and it can be read as carefully as any other line on a page. This one is worth reading slowly, because almost everything people believe about this case assumes a byline that does not exist.

**The paper.** Wu, C. S., Ambler, E., Hayward, R. W., Hoppes, D. D., and Hudson, R. P. (1957). Experimental test of parity conservation in beta decay. *Physical Review, 105*(4), 1413-1415. It is a Letter to the Editor, three pages long, received on 15 January 1957 and published on 15 February 1957.

**The byline itself**, as it is set on the page: C. S. WU, Columbia University, New York, New York AND E. AMBLER, R. W. HAYWARD, D. D. HOPPES, AND R. P. HUDSON, National Bureau of Standards, Washington, D. C.

Four things in that line matter, and none of them matches the popular story.

**One. She is first.** Not buried, not third, not in an acknowledgment. First.

**Two. She is alone under her affiliation.** Columbia has one author on this paper and the National Bureau of Standards has four. That formatting is what makes the collaboration visible: two institutions, unevenly staffed, on one result.

**Three. The four Bureau authors are in alphabetical order.** Ambler, Hayward, Hoppes, Hudson. So the order within that block carries no information about contribution, which means that the one piece of ordering information on the whole line is the decision to put Wu in front of it.

**Four. Somebody made that decision, and he explained why.** Ernest Ambler told Magdolna Hargittai in correspondence: "I invited her to go first in the list of names out of courtesy for having brought the preprint of Lee and Yang's paper prior to actual publication." Hargittai adds that other Bureau authors have described it as courtesy toward a woman, and that alphabetical order was the usual Bureau custom (Hargittai, 2012). Take that seriously in both directions. It says her position on the line was a courtesy rather than a measured judgment of contribution. It also says the courtesy was extended for bringing the theorists' preprint, which is a description of her role, not a dismissal of it.

**What the paper does not say, and this is a real absence.** It never states that the experiment was performed at the National Bureau of Standards. The affiliations are there; the location of the work is not. Hargittai, who read it for the same reason, calls that "a misleading oversight" (Hargittai, 2012). The reading is hers and the course attributes it to her. The absence is in the document.

**A caution about how this line was read.** The optical character recognition of the 1957 typesetting is poor: it renders Wu as Ku and Columbia as Cotumbia. Every quotation here comes from the page image rather than the extracted text. You will meet that discipline again, in a much more consequential form, in Section 4.

**Where the catalog already teaches this.** *Who Gets Named*, lesson 13, "Who counts as an author, and who gets thanked", teaches author order and acknowledgment as two different instruments. This course does not repeat it. What it adds is a case in which the instruments point in the unexpected direction, which is lesson 6.

:::reveal What is the one piece of ordering information on the 1957 byline? ||| The decision to put Wu in front, since the four National Bureau of Standards authors are in alphabetical order and so carry no ranking among themselves.

:::reveal What does the 1957 paper never state about the experiment? ||| Where it was performed. The affiliations appear but the location of the work does not, an absence Hargittai calls a misleading oversight.

## Vocabulary
- **Byline**: the author line of a paper, carrying names, order and affiliations, each of which is a separate piece of evidence.
- **Letter to the Editor**: in the *Physical Review* of this period, a short rapid-publication format; this one runs three pages.
- **Affiliation block**: the grouping of authors under an institution, which here separates one Columbia author from four Bureau of Standards authors.
- **Received date**: the date a journal logs a submission, here 15 January 1957, a month before publication.
- **Optical character recognition**: automated conversion of a page image to text, unreliable on 1957 typesetting and the reason quotations here come from the image.

## Sources
Hargittai, M. (2012, September 13). Credit where credit's due? *Physics World*. https://physicsworld.com/a/credit-where-credits-due/ (Web article, unpaginated; the Ambler correspondence and the alphabetical-custom note are in the section on the authorship of the 1957 Letter, and the misleading-oversight remark is in the same passage.)
Wu, C. S., Ambler, E., Hayward, R. W., Hoppes, D. D., & Hudson, R. P. (1957). Experimental test of parity conservation in beta decay. *Physical Review, 105*(4), 1413-1415. https://doi.org/10.1103/PhysRev.105.1413 (Byline, affiliations and received date at the head of p. 1413, read from the page image rather than the extracted text.)`,
    },
    {
      slug: "what-the-experiment-had-to-do",
      title: "5 · What the experiment had to do",
      section: "Section 2 · The experiment, and who was in the room",
      body: `To test a mirror, you have to make the world point one way. That is the whole difficulty of this experiment, and it is why it took a collaboration rather than a single laboratory.

**The requirement.** Yang's lecture: "The actual experimental setup was very involved, because to eliminate disturbing outside influences the experiment had to be done at very low temperatures" (Yang, 1957, p. 399). Cold is not a convenience here. Nuclei are jostled by heat; a nucleus that will not hold still cannot be aligned, and an experiment on unaligned nuclei has no mirror to break.

**Why that split the work in two.** A beta-decay physicist knows how to count electrons coming out of a nucleus. A cryogenics group knows how to get a sample near absolute zero and keep it there. In 1957 those were different laboratories with different equipment, which is why the byline carries two institutions. Yang states the consequence without hedging: the technique of combining beta-decay measurement with low-temperature apparatus "was unknown before and constituted a major difficulty which was successfully solved by these authors" (Yang, 1957, p. 399).

**What came out.** "The results of Drs. Wu, Ambler, and their collaborators was that there is a very large difference in the readings of the two meters" (Yang, 1957, p. 400). Not a marginal excess. A very large difference, which is why the result was believed almost immediately.

**And a second result, which usually gets left out.** Yang's lecture adds: "As Dr. Lee will discuss, the experiment of Wu, Ambler, and their collaborators also proves that charge conjugation invariance is violated" (Yang, 1957, p. 400). One experiment, two symmetry laws broken. That matters for the credit argument later, because it is evidence about how much a single measurement can settle.

**What a committee reader made of the difficulty, reported and attributed.** Larsson and Wyss, who read the 1957 physics committee file in Stockholm in November 2025, report that Erik Hulthen's internal experimental report describes Wu's technical difficulties in detail, including a requirement to reach one thousandth of a degree above absolute zero (Larsson and Wyss, 2026). This course does not treat that as the committee's view or as its own finding. It is what two named authors say they read in a file this course has not seen, and Section 5 explains why that distinction is kept so rigidly.

**One thing this course will not do.** It will not tell you whose idea the cobalt-60 method was. Wu's own published account, quoted by Hargittai, says she suggested using a cobalt-60 source polarised by demagnetisation when Lee came to her office in the spring of 1956. That account reaches this course at one remove, through a secondary source, and the original volume was not obtained. So it sits in the research queue rather than in a lesson, and you will see in Section 5 why that particular claim is the one most worth chasing.

:::reveal Why did the experiment have to be done at very low temperatures? ||| Because heat jostles nuclei, and nuclei that will not hold still cannot be aligned, so there is no mirror arrangement to compare against.

:::reveal What second symmetry law does Yang's lecture say the same experiment proved was violated? ||| Charge conjugation invariance, which he flags as a point Lee's lecture will take up.

## Vocabulary
- **Aligned nuclei**: nuclei whose spins point predominantly one way, achieved here by a magnetic field at very low temperature.
- **Cryogenics**: the technology of reaching and holding temperatures near absolute zero, the Bureau of Standards contribution to this collaboration.
- **Charge conjugation invariance**: the symmetry between particles and antiparticles, which Yang says the same cobalt-60 result also violated.
- **At one remove**: reached only through a source quoting another source, the status of Wu's own 1973 account here.

## Sources
Hargittai, M. (2012, September 13). Credit where credit's due? *Physics World*. https://physicsworld.com/a/credit-where-credits-due/ (Web article, unpaginated; the quotation of Wu's 1973 account appears in the passage on how the experiment was chosen. The underlying volume was not obtained for this course.)
Larsson, M., & Wyss, R. (2026, February 3). Twenty-three nominations, yet no Nobel prize: How Chien-Shiung Wu missed out on the top award in physics. *Physics World*. https://physicsworld.com/a/twenty-three-nominations-yet-no-nobel-prize-how-chien-shiung-wu-missed-out/ (Web article, unpaginated; the description of Hulthen's experimental report is in the section on the 1957 committee file, which the authors say they viewed on 13 November 2025.)
Yang, C. N. (1957, December 11). *Law of parity conservation and other symmetry laws of physics* [Nobel lecture]. Nobel Foundation. https://www.nobelprize.org/uploads/2018/06/yang-lecture.pdf (Printed p. 399 for the low-temperature requirement and the unknown technique; printed p. 400, PDF page 8, for the very large difference in the meters and for charge conjugation invariance.)`,
    },
    {
      slug: "the-acknowledgment-that-runs-the-other-way",
      title: "6 · The acknowledgment that runs the other way",
      section: "Section 2 · The experiment, and who was in the room",
      body: `Acknowledgments usually run downhill. The senior people are on the byline and the helpers are thanked at the bottom, which is why an acknowledgment section is so often where a contribution goes to be quietly filed away. *Who Gets Named*, lesson 13, is built on that pattern.

This paper inverts it, and the inversion is one of the most useful facts in the whole case.

**The sentence.** At the end of the 1957 Letter: "The inspiring discussions held with Professor T. D. Lee and Professor C. N. Yang by one of us (C. S. Wu) are gratefully acknowledged."

Read what that does. The experimenters are on the byline. The two theorists, who would hold the Nobel Prize within the year, are in the acknowledgment. The people who did the work thanked the people who suggested it, in print, ten months before the prize went the other way.

**A second line worth noticing.** A footnote records that the work was "partially supported by the U. S. Atomic Energy Commission." A funder is a third kind of credit, and it is the only one of the three that a prize never considers.

**So the author line held.** This is the point at which this course separates from almost every other credit case in this catalog, and it must be said as plainly as *The Paper and the Prize* says it about Esther Lederberg. Wu was not written out of her own paper. She was not demoted to a technician. She was not thanked instead of credited. She was the first name on the Letter, alone under her institution, and the men who later won the prize were the ones being thanked.

**Which is why the question has to move.** If the author line worked, then whatever failed, failed somewhere else. There are only so many places it could have failed, and Section 6 lays them out as four stages. The rest of this course is an argument about which stage, settled with documents rather than with adjectives.

**What the catalog already has, and what it does not.** *The Paper and the Prize*, the public course that works the adjacent case of Esther Lederberg, teaches in its lesson 5, "Who is on the paper, and who is on the prize", that a Nobel citation is not a bibliography, so a gap between the paper and the prize "is not by itself evidence of anything improper". Its lesson 6, "The Matilda effect, and what this case does and does not prove", teaches the discipline of not reaching past your evidence. Both are worth reading beside this one, and neither is repeated here. Neither has what this case has, which is a nomination record: a numbered, dated, signed document for every time somebody put a name in front of the committee. That record is Section 4.

:::reveal In what direction does the acknowledgment in the 1957 Letter run? ||| Upward rather than downward. The experimenters on the byline thank the two theorists, who held the Nobel Prize within the year.

:::reveal If the author line held, what follows for the rest of this course? ||| That whatever failed in this case failed at some other stage, so the question moves from the paper to the stages that come after it.

## Vocabulary
- **Acknowledgment**: the closing credit block of a paper, conventionally for contributions that did not earn authorship.
- **Funder credit**: the recorded financial support for a piece of work, here the U.S. Atomic Energy Commission, and a form of credit no prize weighs.
- **Author line held**: this course's shorthand for a case in which the paper itself records the contribution correctly.
- **Stage**: a point in the path from work to recognition at which credit can be granted or lost, four of which Section 6 names.

## Sources
Wu, C. S., Ambler, E., Hayward, R. W., Hoppes, D. D., & Hudson, R. P. (1957). Experimental test of parity conservation in beta decay. *Physical Review, 105*(4), 1413-1415. https://doi.org/10.1103/PhysRev.105.1413 (The acknowledgment is in the closing paragraph of the Letter and the Atomic Energy Commission note is a footnote to p. 1413; both were read from the page image, not from extracted text.)`,
    },
    {
      slug: "section-2-quiz",
      title: "Section 2 quiz · The experiment, and who was in the room",
      section: "Section 2 · The experiment, and who was in the room",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Whose name is first on the 1957 Physical Review Letter?",
            options: ["C. S. Wu", "E. Ambler, the senior National Bureau of Standards author on the paper", "R. P. Hudson, who headed the cryogenics group at the Bureau", "T. D. Lee, whose proposal the experiment was built to test"],
            correctIndex: 0,
            explanation: "The byline opens with C. S. WU, Columbia University, and the four Bureau of Standards authors follow. Lee is not an author at all; he is in the acknowledgment (Wu et al., 1957, p. 1413).",
            sourceLessonSlug: "the-byline-read-as-a-document",
          },
          {
            prompt: "How many authors sit under the Columbia University affiliation on that byline?",
            options: ["One", "Two, since Wu shared the Columbia line with a graduate student", "Four, matching the Bureau of Standards block exactly", "Five, because the whole author list belonged to Columbia"],
            correctIndex: 0,
            explanation: "Wu alone. The four Bureau of Standards authors carry the second affiliation, which is what makes the collaboration visible on the page (Wu et al., 1957, p. 1413).",
            sourceLessonSlug: "the-byline-read-as-a-document",
          },
          {
            prompt: "In what order do the four National Bureau of Standards authors appear?",
            options: ["Alphabetical", "By seniority, with the group leader named first", "By contribution, as agreed among them before submission", "By institution, since two of them held joint appointments"],
            correctIndex: 0,
            explanation: "Ambler, Hayward, Hoppes, Hudson. Alphabetical order carries no ranking, which is precisely why Wu's placement in front of it is the one piece of ordering information on the line (lesson 4).",
            sourceLessonSlug: "the-byline-read-as-a-document",
          },
          {
            prompt: "What reason did Ernest Ambler give Hargittai for inviting Wu to go first?",
            options: ["Courtesy for bringing the Lee and Yang preprint", "Her seniority over every other author on the paper", "A Columbia rule requiring its authors to be listed first", "The Physical Review's policy for multi-institution Letters"],
            correctIndex: 0,
            explanation: "His words, as Hargittai quotes them, are that he invited her to go first out of courtesy for having brought the preprint of Lee and Yang's paper prior to actual publication (Hargittai, 2012).",
            sourceLessonSlug: "the-byline-read-as-a-document",
          },
          {
            prompt: "What does Hargittai report was the usual authorship custom at the National Bureau of Standards?",
            options: ["Alphabetical order", "Listing the principal investigator last, as in some European laboratories", "Listing the youngest author first to help early careers", "No fixed custom, with each group deciding paper by paper"],
            correctIndex: 0,
            explanation: "She reports alphabetical order as the Bureau's usual custom, which is why placing Wu ahead of the block was a departure that needed explaining (Hargittai, 2012).",
            sourceLessonSlug: "the-byline-read-as-a-document",
          },
          {
            prompt: "What does the 1957 Letter never state?",
            options: ["Where the experiment was performed", "Which isotope was used as the beta source", "That parity conservation was the property under test", "The date on which the manuscript was received"],
            correctIndex: 0,
            explanation: "The affiliations appear but the location of the work does not. Hargittai, reading it for the same reason, calls that a misleading oversight, and the course attributes the reading to her (lesson 4).",
            sourceLessonSlug: "the-byline-read-as-a-document",
          },
          {
            prompt: "How does this course handle Hargittai's phrase misleading oversight?",
            options: ["As her reading, attributed to her", "As a finding of its own, since the absence is verifiable", "As a quotation from the Physical Review editors of 1957", "As the view of the Nobel Committee for Physics"],
            correctIndex: 0,
            explanation: "The absence is in the document and anyone can confirm it. The judgment that the absence is misleading is Hargittai's, so the course names her rather than adopting it (lesson 4).",
            sourceLessonSlug: "the-byline-read-as-a-document",
          },
          {
            prompt: "What date was the 1957 Letter received by the journal?",
            options: ["15 January 1957", "15 February 1957, the same day it appeared in print", "10 December 1957, the day of the Nobel ceremony", "Late 1956, before the experiment was finished"],
            correctIndex: 0,
            explanation: "Received 15 January 1957 and published 15 February 1957, a month apart. The prize was awarded the following December (lesson 4).",
            sourceLessonSlug: "the-byline-read-as-a-document",
          },
          {
            prompt: "What format is the 1957 paper?",
            options: ["A Letter to the Editor", "A full research article of the standard Physical Review length", "A conference proceeding reprinted by the journal", "A review of work performed at two institutions"],
            correctIndex: 0,
            explanation: "A three-page Letter to the Editor, pages 1413 to 1415 of volume 105, the rapid-publication format of the period (lesson 4).",
            sourceLessonSlug: "the-byline-read-as-a-document",
          },
          {
            prompt: "Which two garbled words does the course give as examples of bad optical character recognition on the 1957 page?",
            options: ["Ku and Cotumbia", "Wu and Columbia, correctly rendered in every extraction tried", "Parity and beta, the two words that matter most", "Ambler and Hudson, whose surnames the scanner merged"],
            correctIndex: 0,
            explanation: "The extraction renders Wu as Ku and Columbia as Cotumbia, which is why every quotation in this course comes from the page image (lesson 4).",
            sourceLessonSlug: "the-byline-read-as-a-document",
          },
          {
            prompt: "What does this course mean by calling a byline a document?",
            options: ["It records order, affiliations and decisions that can be read", "It is filed separately from the paper in the journal's archive", "It is the only part of a paper a prize committee reads", "It must be notarised before a journal will accept a submission"],
            correctIndex: 0,
            explanation: "Names, order and affiliations are three different pieces of evidence, and each can be checked. Reading them carefully is the point of lesson 4.",
            sourceLessonSlug: "the-byline-read-as-a-document",
          },
          {
            prompt: "Which existing lesson in this catalog already teaches author order and acknowledgment as two different instruments?",
            options: ["Who Gets Named, lesson 13", "Who Gets the Credit, lesson 19, on checking a claim yourself", "The Paper and the Prize, lesson 1, on replica plating", "What the Citation Records, in its 1985 section"],
            correctIndex: 0,
            explanation: "Who Gets Named, lesson 13, Who counts as an author, and who gets thanked. This course points at it rather than repeating it (lesson 4).",
            sourceLessonSlug: "the-byline-read-as-a-document",
          },
          {
            prompt: "What does the course say the Ambler explanation should be taken to mean, in both directions?",
            options: ["A courtesy, and a description of a real role", "A measured ranking of every author's contribution", "A concession forced on the Bureau by Columbia", "A mistake the Bureau later tried to correct in print"],
            correctIndex: 0,
            explanation: "It says her position was a courtesy rather than a judgment of contribution, and also that the courtesy was extended for bringing the theorists' preprint, which describes a role rather than dismissing one (lesson 4).",
            sourceLessonSlug: "the-byline-read-as-a-document",
          },
          {
            prompt: "What volume and pages of the Physical Review carry the 1957 Letter?",
            options: ["Volume 105, pages 1413 to 1415", "Volume 104, page 254, which is the Lee and Yang paper instead", "Volume 106, page 340, which is Lee, Oehme and Yang", "Volume 105, page 1671, a later Lee and Yang paper"],
            correctIndex: 0,
            explanation: "105(4), 1413-1415. Volume 104 page 254 is the 1956 Lee and Yang proposal, cited as reference 9 of Yang's lecture (lesson 4 sources).",
            sourceLessonSlug: "the-byline-read-as-a-document",
          },
          {
            prompt: "Why does Yang's lecture say the experimental setup had to run at very low temperatures?",
            options: ["To eliminate disturbing outside influences", "To slow the decay rate enough for the counters to keep up", "To prevent the cobalt source from melting under the magnetic field", "To match the conditions specified in the 1956 proposal"],
            correctIndex: 0,
            explanation: "His words are that the setup was very involved because, to eliminate disturbing outside influences, the experiment had to be done at very low temperatures (Yang, 1957, p. 399).",
            sourceLessonSlug: "what-the-experiment-had-to-do",
          },
          {
            prompt: "In the course's plain-language explanation, why does heat defeat this experiment?",
            options: ["It jostles nuclei so they will not stay aligned", "It raises the background count beyond what a counter can subtract", "It changes the parity of the cobalt-60 nucleus", "It weakens the magnetic field produced by the coil"],
            correctIndex: 0,
            explanation: "A nucleus that will not hold still cannot be aligned, and an experiment on unaligned nuclei has no mirror arrangement to break (lesson 5).",
            sourceLessonSlug: "what-the-experiment-had-to-do",
          },
          {
            prompt: "Why did this experiment require two institutions rather than one?",
            options: ["Beta counting and cryogenics were different laboratories", "The Atomic Energy Commission required two grantees per project", "Columbia had no radiation licence for cobalt-60 in 1957", "The Physical Review required multi-institution authorship for Letters"],
            correctIndex: 0,
            explanation: "A beta-decay physicist knows how to count electrons from a nucleus; a cryogenics group knows how to reach and hold temperatures near absolute zero. In 1957 those were separate laboratories (lesson 5).",
            sourceLessonSlug: "what-the-experiment-had-to-do",
          },
          {
            prompt: "How does Yang's lecture describe the state of the combined technique before this work?",
            options: ["Unknown before, and a major difficulty", "Routine at the Bureau of Standards, though not at universities", "Attempted twice in Europe with inconclusive results", "Specified in detail in the 1956 Lee and Yang proposal"],
            correctIndex: 0,
            explanation: "He writes that combining beta-decay measurement with low-temperature apparatus was unknown before and constituted a major difficulty which was successfully solved by these authors (Yang, 1957, p. 399).",
            sourceLessonSlug: "what-the-experiment-had-to-do",
          },
          {
            prompt: "What result does Yang's lecture report from the two meters?",
            options: ["A very large difference", "A small excess, significant only after long averaging", "No difference at all, until the apparatus was rebuilt", "A difference that reversed when the field was reversed"],
            correctIndex: 0,
            explanation: "The results of Drs. Wu, Ambler and their collaborators showed a very large difference in the readings of the two meters, which is why the result was believed so quickly (Yang, 1957, p. 400).",
            sourceLessonSlug: "what-the-experiment-had-to-do",
          },
          {
            prompt: "What second symmetry does Yang say the same experiment proved is violated?",
            options: ["Charge conjugation invariance", "Time reversal invariance, which he says was already settled", "Rotational invariance in the plane of the coil", "Isotopic spin conservation in the weak interactions"],
            correctIndex: 0,
            explanation: "He writes that the experiment also proves charge conjugation invariance is violated, and flags time reversal invariance as still being tested at the time (Yang, 1957, p. 400).",
            sourceLessonSlug: "what-the-experiment-had-to-do",
          },
          {
            prompt: "Who reports the detail about a requirement to reach one thousandth of a degree above absolute zero?",
            options: ["Larsson and Wyss", "The Nobel Committee for Physics, in its published citation", "Yang, in the low-temperature passage of his Nobel lecture", "Ambler, in his correspondence with Hargittai"],
            correctIndex: 0,
            explanation: "It reaches this course only through Larsson and Wyss's account of Hulthen's internal report, so the course attributes it to them and never states it as the committee's view (lesson 5).",
            sourceLessonSlug: "what-the-experiment-had-to-do",
          },
          {
            prompt: "When do Larsson and Wyss say they viewed the 1957 physics committee file?",
            options: ["13 November 2025", "10 December 1957, the day of the ceremony", "3 February 2026, the date their article appeared", "19 September 2026, when this course's brief was written"],
            correctIndex: 0,
            explanation: "They state that they viewed the file at the Center for History of Science in Stockholm on 13 November 2025; their article appeared on 3 February 2026 (lesson 5 sources).",
            sourceLessonSlug: "what-the-experiment-had-to-do",
          },
          {
            prompt: "Why does this course refuse to say whose idea the cobalt-60 method was?",
            options: ["Wu's own account reaches it only at one remove", "The question is unanswerable because no participant ever wrote about it", "Lee and Yang's paper specified the method, so the question does not arise", "The Nobel archive withholds every document that would settle it"],
            correctIndex: 0,
            explanation: "Her published account is quoted by Hargittai but the original volume was not obtained, so it sits in the research queue rather than in a lesson (lesson 5).",
            sourceLessonSlug: "what-the-experiment-had-to-do",
          },
          {
            prompt: "In the account Hargittai quotes, when did Lee come to Wu's office?",
            options: ["Spring 1956", "January 1957, after the Letter was submitted", "December 1957, during the Nobel week in Stockholm", "Autumn 1955, before the theta-tau puzzle had hardened"],
            correctIndex: 0,
            explanation: "The account places the conversation in the spring of 1956, the same season Lee and Yang reached their two conclusions about the evidence (lesson 5).",
            sourceLessonSlug: "what-the-experiment-had-to-do",
          },
          {
            prompt: "What does at one remove mean in this course's vocabulary?",
            options: ["Reached only through a source quoting another source", "Published in a language the course could not read", "Held in a physical archive that requires an appointment", "Withheld by the Nobel statutes until a laureate has died"],
            correctIndex: 0,
            explanation: "It is the status of Wu's 1973 account here: quoted by Hargittai, with the underlying volume not obtained (lesson 5 vocabulary).",
            sourceLessonSlug: "what-the-experiment-had-to-do",
          },
          {
            prompt: "What is the acknowledgment sentence at the end of the 1957 Letter?",
            options: ["Thanks to Lee and Yang for inspiring discussions", "Thanks to the Bureau of Standards cryogenics group for the apparatus", "Thanks to Columbia University for the use of its counters", "Thanks to the Nobel Committee for its interest in the result"],
            correctIndex: 0,
            explanation: "The line reads that the inspiring discussions held with Professor T. D. Lee and Professor C. N. Yang by one of us, C. S. Wu, are gratefully acknowledged (Wu et al., 1957).",
            sourceLessonSlug: "the-acknowledgment-that-runs-the-other-way",
          },
          {
            prompt: "Why does the course call that acknowledgment an inversion?",
            options: ["The people who did the work thanked the people who suggested it", "It appears before the byline rather than after the text", "It thanks a funder rather than a collaborator", "It names five people where a Letter usually names one"],
            correctIndex: 0,
            explanation: "Acknowledgments usually run downhill, with helpers thanked at the bottom. Here the experimenters on the byline thank the theorists, who held the prize within the year (lesson 6).",
            sourceLessonSlug: "the-acknowledgment-that-runs-the-other-way",
          },
          {
            prompt: "Which body is recorded in a footnote as partially supporting the work?",
            options: ["The U.S. Atomic Energy Commission", "The National Science Foundation, through a Columbia physics grant", "The Royal Swedish Academy of Sciences, before the prize was decided", "The National Bureau of Standards alone, from its own appropriation"],
            correctIndex: 0,
            explanation: "A footnote records partial support from the U.S. Atomic Energy Commission. The course calls funder credit a third kind of credit, and the only one a prize never weighs (lesson 6).",
            sourceLessonSlug: "the-acknowledgment-that-runs-the-other-way",
          },
          {
            prompt: "What does the course mean by saying the author line held?",
            options: ["The paper itself records the contribution correctly", "The journal refused to change the order after submission", "The authors signed an agreement fixing the order in advance", "The order survived unchanged into the Nobel citation"],
            correctIndex: 0,
            explanation: "She was first, alone under her institution, and the men who later won the prize were the ones being thanked. So whatever failed, failed elsewhere (lesson 6).",
            sourceLessonSlug: "the-acknowledgment-that-runs-the-other-way",
          },
          {
            prompt: "What follows, for the shape of this course, from the author line holding?",
            options: ["The question has to move to a later stage", "The case cannot be a credit case at all", "The citation must be where the failure happened", "The paper must be read again for a hidden error"],
            correctIndex: 0,
            explanation: "There are only so many stages at which credit can fail, and Section 6 lays out four of them. The rest of the course argues about which one, using documents (lesson 6).",
            sourceLessonSlug: "the-acknowledgment-that-runs-the-other-way",
          },
          {
            prompt: "Which public lesson teaches that a Nobel citation is not a bibliography?",
            options: ["The Paper and the Prize, lesson 5", "Who Gets Named, lesson 10, on what the award data show", "Who Gets the Credit, lesson 17, on claims that fail checking", "What the Citation Records, in its Opening section"],
            correctIndex: 0,
            explanation: "Lesson 5 of The Paper and the Prize, the public course working the Esther Lederberg case. It adds that a gap between paper and prize is not by itself evidence of anything improper (lesson 6).",
            sourceLessonSlug: "the-acknowledgment-that-runs-the-other-way",
          },
          {
            prompt: "What does this case have that the Lederberg case does not?",
            options: ["A nomination record", "A published citation naming the omitted researcher", "A surviving laboratory notebook from the experiment", "A written policy on authorship from the institution involved"],
            correctIndex: 0,
            explanation: "A numbered, dated, signed document for every time a name was put in front of the committee. That record is what Section 4 reads (lesson 6).",
            sourceLessonSlug: "the-acknowledgment-that-runs-the-other-way",
          },
          {
            prompt: "Which lesson of The Paper and the Prize teaches the discipline of not reaching past your evidence?",
            options: ["Lesson 6, on the Matilda effect and its limits", "Lesson 1, on replica plating and what a piece of velvet does", "Lesson 2, on what replica plating settled and what it did not", "Lesson 3, on the plaques that should not have been there"],
            correctIndex: 0,
            explanation: "Lesson 6, The Matilda effect, and what this case does and does not prove. It is public and worth reading beside this course (lesson 6).",
            sourceLessonSlug: "the-acknowledgment-that-runs-the-other-way",
          },
          {
            prompt: "What kind of credit does the course say a prize never considers?",
            options: ["Funder credit", "Authorship order within an affiliation block", "The acknowledgment section of a published paper", "A nomination filed by a sitting laureate"],
            correctIndex: 0,
            explanation: "Funding is recorded on the paper and weighed by nobody at the ceremony, which is what makes it the third kind of credit in lesson 6.",
            sourceLessonSlug: "the-acknowledgment-that-runs-the-other-way",
          },
          {
            prompt: "How many months separated the publication of the Letter and the Nobel ceremony?",
            options: ["About ten", "About three, since the prize was announced in the spring", "About twenty-two, spanning two prize years", "About one, which is why the committee could not consider it"],
            correctIndex: 0,
            explanation: "Published 15 February 1957, ceremony 10 December 1957. The course uses that interval repeatedly when it turns to the 1957 nomination deadline (lesson 6).",
            sourceLessonSlug: "the-acknowledgment-that-runs-the-other-way",
          },
          {
            prompt: "What is an affiliation block, as lesson 4 uses the term?",
            options: ["The grouping of authors under one institution", "The paragraph of a paper that lists funding sources", "The section of a journal reserved for one university's work", "The list of institutions a prize committee is allowed to consider"],
            correctIndex: 0,
            explanation: "Here it separates one Columbia author from four Bureau of Standards authors, and that separation is what makes the collaboration visible on the page (lesson 4 vocabulary).",
            sourceLessonSlug: "the-byline-read-as-a-document",
          },
          {
            prompt: "What does the course say about reading the four Bureau authors' order for information about contribution?",
            options: ["It carries none, because the order is alphabetical", "It ranks them from most to least senior", "It reverses the usual convention, so the last name led the work", "It matches the order in which they joined the project"],
            correctIndex: 0,
            explanation: "Alphabetical order is informationless by design, which is why the decision to place Wu ahead of it is the only ordering signal on the line (lesson 4).",
            sourceLessonSlug: "the-byline-read-as-a-document",
          },
          {
            prompt: "What did other Bureau of Standards authors describe Wu's first position as, according to Hargittai?",
            options: ["Courtesy toward a woman", "A requirement of the Bureau's publication office", "Recognition of her having done most of the counting", "A compromise reached after a dispute over the order"],
            correctIndex: 0,
            explanation: "Hargittai reports that description alongside Ambler's own account of the preprint courtesy. The course prints both because they do not say the same thing (lesson 4).",
            sourceLessonSlug: "the-byline-read-as-a-document",
          },
          {
            prompt: "Why does the course print quotations from the 1957 page image rather than from extracted text?",
            options: ["The extraction of 1957 typesetting is unreliable", "The journal forbids quotation from its digital edition", "The page image carries handwritten corrections by the authors", "The extracted text omits the acknowledgment entirely"],
            correctIndex: 0,
            explanation: "It renders Wu as Ku and Columbia as Cotumbia, which would corrupt any quotation taken from it (lesson 4).",
            sourceLessonSlug: "the-byline-read-as-a-document",
          },
          {
            prompt: "What is the title of the 1957 Letter?",
            options: ["Experimental test of parity conservation in beta decay", "Question of parity conservation in weak interactions, the Lee and Yang title", "Weak interactions and nonconservation of parity, which is Lee's lecture title", "Law of parity conservation and other symmetry laws of physics"],
            correctIndex: 0,
            explanation: "Question of parity conservation in weak interactions is the 1956 Lee and Yang paper; Weak interactions and nonconservation of parity is Lee's Nobel lecture; Law of parity conservation and other symmetry laws of physics is Yang's (lesson 4).",
            sourceLessonSlug: "the-byline-read-as-a-document",
          },
          {
            prompt: "What does lesson 6 say an acknowledgment section usually is?",
            options: ["Where a contribution goes to be quietly filed away", "The most carefully negotiated paragraph in any paper", "A legal requirement imposed by research funders", "The section a prize committee reads most closely"],
            correctIndex: 0,
            explanation: "Acknowledgments usually run downhill, with the senior people on the byline and the helpers thanked at the bottom. This paper reverses that (lesson 6).",
            sourceLessonSlug: "the-acknowledgment-that-runs-the-other-way",
          },
          {
            prompt: "Which three things does lesson 6 say Wu was NOT, on her own paper?",
            options: ["Written out, demoted, or thanked instead of credited", "Funded, supervised, or employed by the Bureau of Standards", "Nominated, shortlisted, or considered by the committee", "Quoted, interviewed, or photographed by the press"],
            correctIndex: 0,
            explanation: "She was first author, alone under her institution. The course insists on saying that as plainly as the Lederberg course says it about Lederberg (lesson 6).",
            sourceLessonSlug: "the-acknowledgment-that-runs-the-other-way",
          },
          {
            prompt: "According to lesson 5, what is the point of the charge conjugation result for the credit argument later?",
            options: ["It shows how much one measurement can settle", "It proves the experiment was designed by theorists", "It explains why the citation names an investigation", "It establishes that the committee misread the physics"],
            correctIndex: 0,
            explanation: "One experiment broke two symmetry laws, which is evidence about the weight a single measurement can carry (lesson 5).",
            sourceLessonSlug: "what-the-experiment-had-to-do",
          },
          {
            prompt: "Whose skill does Yang's lecture say solved the major difficulty?",
            options: ["These authors, meaning the five on the Letter", "The Columbia physics department's technical staff", "The Nobel Committee's own experimental referee", "The Atomic Energy Commission's laboratory at Brookhaven"],
            correctIndex: 0,
            explanation: "His phrase is that the difficulty was successfully solved by these authors, referring to the five names on the 1957 Letter (Yang, 1957, p. 399).",
            sourceLessonSlug: "what-the-experiment-had-to-do",
          },
          {
            prompt: "What does the word cryogenics name in this course's vocabulary?",
            options: ["Reaching and holding temperatures near absolute zero", "Counting electrons emitted in a beta decay", "Aligning nuclear spins with a strong magnetic field", "Preserving radioactive sources for long-term storage"],
            correctIndex: 0,
            explanation: "It was the Bureau of Standards contribution to the collaboration, and the half of the technique that did not exist in combination with beta counting (lesson 5 vocabulary).",
            sourceLessonSlug: "what-the-experiment-had-to-do",
          },
          {
            prompt: "What are aligned nuclei, in this experiment?",
            options: ["Nuclei whose spins point predominantly one way", "Nuclei arranged in a regular crystal lattice", "Nuclei that have all decayed within the same interval", "Nuclei stripped of their surrounding electrons"],
            correctIndex: 0,
            explanation: "Alignment was achieved with a magnetic field at very low temperature, and without it there is no mirror arrangement to compare (lesson 5 vocabulary).",
            sourceLessonSlug: "what-the-experiment-had-to-do",
          },
          {
            prompt: "What kind of source does the course say Larsson and Wyss are for the committee file?",
            options: ["Two named authors reporting a file this course has not seen", "Primary witnesses who sat on the 1957 committee", "The official publishers of the Nobel Foundation's archive", "Anonymous contributors to a physics news site"],
            correctIndex: 0,
            explanation: "That distinction is kept rigidly throughout the course, and Section 5 explains why (lesson 5).",
            sourceLessonSlug: "what-the-experiment-had-to-do",
          },
          {
            prompt: "In lesson 5's framing, what has to happen before a mirror can be tested?",
            options: ["The world has to be made to point one way", "The experiment has to be repeated at a second laboratory", "The theorists have to publish their proposal first", "The counters have to be calibrated against a known source"],
            correctIndex: 0,
            explanation: "Without aligned nuclei there is no asymmetry to look for, which is the whole reason the experiment needed cryogenic conditions (lesson 5).",
            sourceLessonSlug: "what-the-experiment-had-to-do",
          },
          {
            prompt: "What does this course say about repeating material already taught elsewhere in the catalog?",
            options: ["It points at the existing lesson and moves on", "It repeats it in full so each course stands alone", "It rewrites it from different sources for variety", "It omits the subject entirely to avoid duplication"],
            correctIndex: 0,
            explanation: "Lesson 4 points at Who Gets Named lesson 13, and lesson 6 points at two lessons of The Paper and the Prize, rather than re-teaching either (lessons 4 and 6).",
            sourceLessonSlug: "the-acknowledgment-that-runs-the-other-way",
          },
          {
            prompt: "Which of these is a stage, in the sense lesson 6 introduces?",
            options: ["A point where credit can be granted or lost", "A section of a Nobel ceremony programme", "A level of a journal's peer review process", "A rung of an academic career ladder"],
            correctIndex: 0,
            explanation: "Four of them are named in Section 6, and the whole argument of this course is about which one failed here (lesson 6 vocabulary).",
            sourceLessonSlug: "the-acknowledgment-that-runs-the-other-way",
          },
          {
            prompt: "What is the Letter's page range?",
            options: ["1413 to 1415", "254 to 258, the range of the Lee and Yang proposal", "393 to 403, the range of Yang's Nobel lecture", "406 to 418, the range of Lee's Nobel lecture"],
            correctIndex: 0,
            explanation: "Three pages of volume 105. The other three ranges belong to the 1956 proposal and the two Nobel lectures (lesson 4 sources).",
            sourceLessonSlug: "the-byline-read-as-a-document",
          },
          {
            prompt: "Why does the course say the result was believed almost immediately?",
            options: ["The difference between the meters was very large", "The Nobel Committee endorsed it before publication", "Three other laboratories had already published the same result", "Lee and Yang had predicted the exact size of the effect"],
            correctIndex: 0,
            explanation: "Yang's lecture records a very large difference rather than a marginal excess, and a large effect needs less argument (lesson 5).",
            sourceLessonSlug: "what-the-experiment-had-to-do",
          },
          {
            prompt: "What does lesson 4 say almost everything people believe about this case assumes?",
            options: ["A byline that does not exist", "A committee decision that was never recorded", "A quotation that was never spoken", "A nomination that was never filed"],
            correctIndex: 0,
            explanation: "The popular version imagines her buried in the author list or left off it. The page says otherwise, which is why the byline is read first (lesson 4).",
            sourceLessonSlug: "the-byline-read-as-a-document",
          },
          {
            prompt: "Which physicist named in the 1957 acknowledgment went on to win the prize that year?",
            options: ["Both of those named", "Neither, since the acknowledgment names only Bureau of Standards staff", "Only Lee, because Yang was not part of the discussions", "Only Yang, because Lee declined to be acknowledged"],
            correctIndex: 0,
            explanation: "The acknowledgment names T. D. Lee and C. N. Yang, and both shared the 1957 Nobel Prize in Physics (lesson 6).",
            sourceLessonSlug: "the-acknowledgment-that-runs-the-other-way",
          },
          {
            prompt: "How does the course describe the Letter's three-page length in relation to its importance?",
            options: ["It notes the length as a fact about the format", "It argues that short papers are taken less seriously by committees", "It claims the editors cut the paper to make room for another", "It treats the length as evidence the work was rushed"],
            correctIndex: 0,
            explanation: "A Letter to the Editor was the period's rapid-publication format. The course records the format and draws no inference from it (lesson 4).",
            sourceLessonSlug: "the-byline-read-as-a-document",
          },
          {
            prompt: "What does the course do with the fact that the paper's location of work is missing?",
            options: ["States the absence and attributes the interpretation", "Fills the gap from the affiliations, since four authors were at the Bureau", "Treats it as proof that the experiment was done at Columbia", "Leaves it out, since an absence cannot be cited"],
            correctIndex: 0,
            explanation: "An absence is a finding when it is checked and stated. The judgment about what the absence means belongs to Hargittai and is attributed to her (lesson 4).",
            sourceLessonSlug: "the-byline-read-as-a-document",
          },
          {
            prompt: "Which of these correctly describes the 1957 collaboration's shape?",
            options: ["One Columbia author and four Bureau of Standards authors", "Five Columbia authors with Bureau of Standards funding", "Two institutions with two and three authors respectively", "One author with four named technical assistants"],
            correctIndex: 0,
            explanation: "The affiliation blocks are uneven by design, and the unevenness is visible on the byline itself (lesson 4).",
            sourceLessonSlug: "the-byline-read-as-a-document",
          },
          {
            prompt: "What does lesson 6 say about how plainly the author-line point must be made?",
            options: ["As plainly as the Lederberg course makes it about Lederberg", "Only in passing, since it favours one side of the argument", "In a footnote, because it complicates the main story", "Not at all, because the nomination record supersedes it"],
            correctIndex: 0,
            explanation: "The course treats both halves with equal weight. Saying the author line held is as much a part of the record as saying she received no 1957 nomination (lesson 6).",
            sourceLessonSlug: "the-acknowledgment-that-runs-the-other-way",
          },
          {
            prompt: "What did the National Bureau of Standards contribute that Columbia could not?",
            options: ["Low-temperature capability", "A licence to handle radioactive cobalt", "The theoretical proposal the experiment tested", "The counters used to detect the emitted electrons"],
            correctIndex: 0,
            explanation: "Beta counting was the Columbia side of the work and cryogenics the Bureau side; combining them was the difficulty Yang's lecture singles out (lesson 5).",
            sourceLessonSlug: "what-the-experiment-had-to-do",
          },
          {
            prompt: "Which lesson does this course say Section 6 will use the four stages for?",
            options: ["Deciding which stage failed in this case", "Ranking the four by how often they fail in general", "Proving that every stage failed at least once here", "Showing that the stages cannot be separated in practice"],
            correctIndex: 0,
            explanation: "The argument is settled with documents rather than adjectives, and the documents are the paper, the prize record and the nomination archive (lesson 6).",
            sourceLessonSlug: "the-acknowledgment-that-runs-the-other-way",
          },
          {
            prompt: "What did Wu bring to the Bureau of Standards authors, on Ambler's account?",
            options: ["The Lee and Yang preprint before publication", "The cobalt-60 source used in the experiment", "The funding that paid for the low-temperature apparatus", "A draft of the Letter with the byline already fixed"],
            correctIndex: 0,
            explanation: "His stated reason for inviting her to go first is the preprint, brought prior to actual publication (Hargittai, 2012).",
            sourceLessonSlug: "the-byline-read-as-a-document",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3 — The prize record, read line by line
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-citation-and-what-it-names",
      title: "7 · The citation, and what it names",
      section: "Section 3 · The prize record, read line by line",
      body: `A prize citation is one sentence long and it is the most quoted sentence in any credit dispute, usually by people who have not read it. Here it is, from the Nobel Foundation's own summary page for 1957.

"The Nobel Prize in Physics 1957 was awarded jointly to Chen Ning Yang and Tsung-Dao (T.D.) Lee 'for their penetrating investigation of the so-called parity laws which has led to important discoveries regarding the elementary particles'."

The same page gives each laureate a prize share of one half.

**Read the noun.** The award is for an **investigation**, not for an experiment, and not for a theory. The citation does not use the word theoretical anywhere. It does not use the word experiment either. It names an investigation of the parity laws and then says what that investigation led to.

**Read the verb that follows.** "Has led to important discoveries regarding the elementary particles." The investigation led to discoveries. The citation does not say the laureates made those discoveries. It says their investigation led to them. That is a carefully built sentence, and it is worth sitting with before anyone decides what it proves.

**Two things it settles, and one it does not.**

It settles who the prize went to: two people, in equal shares. It settles what they were honoured for: an investigation of the parity laws. It does not settle who made the discoveries the investigation led to, because it does not say.

**Why that last point is not a dodge.** *What the Citation Records*, a private course in this catalog, is built on exactly this: a citation is a short sentence chosen under constraints, so reading it as a complete account of who did what is a category error. Its Opening section teaches how a prize page is put together and what the format caps explain, and its Closing section gives a five-step method for reading one. Those two sections never renumber as cases are added, so they are safe to point at. This course does not repeat them.

**What is different here, and it is the reason this course exists.** In the cases that course reads, the argument is about the wording. Somebody was left out of a sentence, and you compare the sentence against the papers. In Wu's case the wording argument barely gets started, because of what Section 4 shows: for the 1957 prize her name was never put in front of the committee at all. There was no sentence she could have been left out of, because there was no candidacy to leave out.

**A note on what a citation is for.** It is the public, permanent, one-line description of why a prize was given. It is read aloud, printed, and quoted forever. It is not a list of contributors, it is not a bibliography, and it is not the transcript of a deliberation. The next two lessons read documents from the same week that do much more naming than the citation does, and one of them names Wu at length.

:::reveal What noun does the 1957 citation use for what the prize was awarded for? ||| Investigation. It does not use the word experiment, and it does not use the word theoretical anywhere.

:::reveal What does the 1957 citation not settle? ||| Who made the discoveries. It says the investigation has led to important discoveries regarding the elementary particles, without saying who made them.

## Vocabulary
- **Citation, prize**: the single sentence published with an award stating what it was given for.
- **Prize share**: the fraction of a Nobel Prize each laureate receives, here one half each.
- **Category error**: treating a document as a kind of thing it is not, such as reading a citation as a list of contributors.
- **Candidacy**: the state of having been nominated and therefore being available for a committee to consider.

## Sources
Nobel Prize Outreach. (n.d.). *The Nobel Prize in Physics 1957*. https://www.nobelprize.org/prizes/physics/1957/summary/ (Web page, unpaginated; the citation sentence sits below the two laureate portraits, and the prize share of 1/2 is printed beside each name. Re-read 2026-09-20.)`,
    },
    {
      slug: "the-speech-that-names-her",
      title: "8 · The speech that names her",
      section: "Section 3 · The prize record, read line by line",
      body: `On 10 December 1957, Professor O. B. Klein of the Nobel Committee for Physics stood up in Stockholm to present the prize. His speech is published on the Nobel Foundation's own site. It runs to about two thousand words, and it names Chien-Shiung Wu.

**The sentence.** "Lee and Yang did not confine themselves to this negative statement but devised a number of experiments which would make it possible to test the right-left symmetry in different elementary particle transformations, and proposed them to their experimental colleagues. The first of these experiments was carried out by the Chinese physicist, Mrs. C.S. Wu and her collaborators" (Klein, 1957).

He then spends the next two paragraphs on that experiment: the cobalt nuclei lined up like compass needles at very low temperature, the coil like a spool of thread with its counterclockwise current, the electrons thrown preferentially towards the floor, and the conclusion that a distant observer could now be told what we mean by left and right.

**So this is not a story about a woman nobody mentioned.** The Nobel Committee's own presenter described her experiment at length, in the ceremony, on the day, with the King of Sweden in the room. Any version of this case that opens with erasure has to be reconciled with that paragraph, and mostly it is not.

**A wording fact, stated as a fact.** In the same speech Klein addresses the laureates as "Professor Lee and Professor Yang". He calls her "Mrs. C.S. Wu". The Nobel Foundation's own nomination archive records her, on her 1958 nominee record, with Profession "Professor" and University "Columbia University" (Nobel Prize Outreach, n.d.-b, record 15049).

Both of those are verified. The course states both and says nothing about why, because nothing read for this course says why. That restraint is the rule, not a hedge: a document can show you that two people were addressed differently without showing you the reason, and inventing the reason is how a checkable case turns into an unfalsifiable one.

**What the speech does not do.** It does not say she deserved the prize, and it does not say she did not. It does not discuss the committee's reasoning, because a presentation speech is not a deliberation. It describes the physics and it credits the experiment to her and her collaborators.

**The shape of the record so far.** Take stock before Section 4, because the pattern is not the one people expect:

- The paper names her first, alone under her institution.
- The acknowledgment thanks the theorists, not the other way round.
- The ceremony speech describes her experiment for three paragraphs and names her.
- The prize names two people, and she is not one of them.

Three documents out of four point one way and the fourth points the other. That is not what erasure looks like. It is what a specific, locatable failure looks like, and the next section locates it.

:::reveal What did Klein's presentation speech say about the first of the experiments Lee and Yang proposed? ||| That it was carried out by the Chinese physicist Mrs. C. S. Wu and her collaborators, followed by two paragraphs describing the cobalt-60 experiment.

:::reveal How does Klein address the two laureates, and how does he refer to Wu? ||| He addresses them as Professor Lee and Professor Yang and calls her Mrs. C. S. Wu, while the Nobel Foundation's own archive records her profession as Professor.

## Vocabulary
- **Presentation speech**: the address given by a committee member at the award ceremony, describing the prize-winning work to a general audience.
- **Deliberation**: a committee's internal discussion of candidates, which a presentation speech is not.
- **Unfalsifiable**: a claim built so that no document could count against it, which is what supplying an unrecorded motive produces.
- **Nominee record**: an entry in the Nobel nomination archive describing one nominated person, including profession and institution as recorded at the time.

## Sources
Klein, O. B. (1957, December 10). *Award ceremony speech, the Nobel Prize in Physics 1957*. Nobel Foundation. https://www.nobelprize.org/prizes/physics/1957/ceremony-speech/ (Web text, unpaginated; the naming of Wu closes the paragraph about the proposed experiments, and the cobalt-60 description occupies the two paragraphs after it. The laureates are addressed as Professor Lee and Professor Yang in the closing address. Re-read 2026-09-20.)
Nobel Prize Outreach. (n.d.-b). *Nomination archive* [Database]. https://www.nobelprize.org/nomination/archive/search.php (Record 15049, Physics 1958, number 29-0: nominee Chien-Shiung Wu, Profession Professor, University Columbia University, New York, NY; nominator Polykarp Kusch. Retrieved 2026-09-20.)`,
    },
    {
      slug: "two-lectures-two-banquet-speeches",
      title: "9 · Two lectures, two banquet speeches, one claim that fails",
      section: "Section 3 · The prize record, read line by line",
      body: `Nobel week produces several different documents, and treating them as interchangeable is how a false claim about this case got into circulation. There are four more worth reading, and they split two and two.

**Yang's Nobel lecture, 11 December 1957.** Wu appears four times: three in the body and once in the reference list. The first: "This experiment was first performed in the latter half of 1956 and finished early this year by Wu, Ambler, Hayward, Hoppes, and Hudson" (Yang, 1957, p. 399). Then, immediately after describing the low-temperature difficulty: "To their courage and their skill, physicists owe the exciting and clarifying developments concerning parity conservation in the past year" (Yang, 1957, p. 399). Then twice on the next page, crediting the result and the charge conjugation finding to "Drs. Wu, Ambler, and their collaborators" (Yang, 1957, p. 400). Reference 12 gives the full Letter (Yang, 1957, p. 402).

That is a laureate, in the lecture that accompanies the prize, giving the experimental group a sentence of open praise.

**Lee's Nobel lecture, the same day.** Wu appears once, in reference 3 of the bibliography: "C. S. Wu, E. Ambler, R. W. Hayward, D. D. Hoppes, and R. P. Hudson, Phys. Rev., 105 (1957) 1413" (Lee, 1957, p. 418). She is not named in the body of the lecture.

**How that was checked, because the method matters.** The two lectures were downloaded as PDFs, their text extracted, and every occurrence of the surname located and read in its surrounding passage on the page it sits on. Extraction is imperfect, and this course has already shown you a case where it dropped Greek letters. Two independent passes, on 2026-09-19 and 2026-09-20, returned the same counts. A third reader should still confirm by reading the pages rather than trusting any count, including this one.

**Now the two banquet speeches, and the claim that fails.** Both laureates spoke at the Nobel Banquet on 10 December 1957, and both speeches are published. Neither contains the string Wu. What Lee's speech contains instead is this: "A scientific accomplishment is always the cumulative result of many people working in the same field or related fields ... it is often the reaping that is remembered but the tilling forgotten. On this solemn occasion, I am singularly aware of the many great physicists who have contributed much to our understanding of nature but who have not yet been so honored as I am today" (Lee, 1957, banquet speech).

It is a generous paragraph. It names nobody.

**So the widely repeated claim that Lee and Yang thanked Wu in their acceptance speech is wrong, and it is wrong in an instructive way.** It is not fabricated. Something very like it happened: Yang thanked her group, warmly, for their courage and their skill. But he did it in his **lecture**, not in an acceptance speech, and Lee did not do it at all. The claim collapses two documents into one and attributes to both men what one of them said in a different setting.

**The general rule, which is worth more than this case.** When a claim says somebody said something, ask which document, on which day, in which format. Nobel week alone offers a citation, a presentation speech, two lectures and two banquet speeches, and they are written for different purposes by different people. A claim that cannot name its document has not been checked.

*Who Gets the Credit*, lesson 17, "Five claims that do not survive checking", is the catalog's home for exactly this kind of correction. This one belongs on that list.

:::reveal How many times does Wu appear in Lee's Nobel lecture, and where? ||| Once, as reference 3 in the bibliography on printed page 418. She is not named in the body of the lecture.

:::reveal Why is the claim that Lee and Yang thanked Wu in their acceptance speech wrong? ||| Because the thanks are in Yang's Nobel lecture, not in an acceptance speech, and Lee did not name her at all. Neither banquet speech contains her name.

## Vocabulary
- **Nobel lecture**: the technical address each laureate delivers, distinct from the banquet speech and from the ceremony presentation.
- **Banquet speech**: the short remarks a laureate gives at the Nobel Banquet, the document usually meant by acceptance speech.
- **Whole-text search**: locating every occurrence of a string in an extracted document, a method that is only as good as the extraction.
- **Document collapse**: treating two separate documents as one, the error behind the acceptance-speech claim.

## Sources
Lee, T. D. (1957, December 10). *Banquet speech, Nobel Prize in Physics 1957*. Nobel Foundation. https://www.nobelprize.org/prizes/physics/1957/lee/speech/ (Web text, unpaginated; the cumulative-result passage is the second paragraph of the speech. The surname Wu does not occur. Re-read 2026-09-20.)
Lee, T. D. (1957, December 11). *Weak interactions and nonconservation of parity* [Nobel lecture]. Nobel Foundation. https://www.nobelprize.org/uploads/2018/06/lee-lecture.pdf (Printed pp. 406-418 across 13 PDF pages; the only occurrence of the surname is reference 3 on printed p. 418, PDF page 13.)
Yang, C. N. (1957, December 10). *Banquet speech, Nobel Prize in Physics 1957*. Nobel Foundation. https://www.nobelprize.org/prizes/physics/1957/yang/speech/ (Web text, unpaginated; the surname Wu does not occur. Re-read 2026-09-20.)
Yang, C. N. (1957, December 11). *Law of parity conservation and other symmetry laws of physics* [Nobel lecture]. Nobel Foundation. https://www.nobelprize.org/uploads/2018/06/yang-lecture.pdf (Printed p. 399 for the first naming and the courage-and-skill sentence, p. 400 for the two later mentions, p. 402 for reference 12.)`,
    },
    {
      slug: "section-3-quiz",
      title: "Section 3 quiz · The prize record, read line by line",
      section: "Section 3 · The prize record, read line by line",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What noun does the 1957 Nobel citation use for the work it honours?",
            options: ["Investigation", "Experiment, which is why the experimental group is read into it", "Theory, distinguishing the laureates from the experimenters", "Discovery, which it attributes directly to the two laureates"],
            correctIndex: 0,
            explanation: "The citation reads for their penetrating investigation of the so-called parity laws. It uses neither experiment nor theoretical anywhere (Nobel Prize Outreach, n.d.).",
            sourceLessonSlug: "the-citation-and-what-it-names",
          },
          {
            prompt: "Which word does the 1957 citation not contain?",
            options: ["Theoretical", "Parity, which appears in the phrase the so-called parity laws", "Elementary, which appears in elementary particles", "Investigation, which the course says is the wrong reading"],
            correctIndex: 0,
            explanation: "The citation never uses the word theoretical, which matters because people quote it as though it did (lesson 7).",
            sourceLessonSlug: "the-citation-and-what-it-names",
          },
          {
            prompt: "What prize share does the Nobel Foundation's 1957 summary page give each laureate?",
            options: ["One half", "One third each, with the remaining third unawarded", "The full prize to Yang and an honorary share to Lee", "The page does not state a share for either laureate"],
            correctIndex: 0,
            explanation: "The summary page prints a prize share of 1/2 beside each of Chen Ning Yang and Tsung-Dao Lee (Nobel Prize Outreach, n.d.).",
            sourceLessonSlug: "the-citation-and-what-it-names",
          },
          {
            prompt: "What does the citation say the investigation led to?",
            options: ["Important discoveries regarding the elementary particles", "The overthrow of parity conservation by the laureates themselves", "A new low-temperature technique for beta-decay measurement", "The award of the prize to two rather than three people"],
            correctIndex: 0,
            explanation: "It says the investigation has led to important discoveries, without saying who made them. That distinction is the point of lesson 7.",
            sourceLessonSlug: "the-citation-and-what-it-names",
          },
          {
            prompt: "What does lesson 7 say the citation does not settle?",
            options: ["Who made the discoveries", "Whether parity is conserved in weak interactions", "Which laureate received the larger share", "What year the prize was awarded"],
            correctIndex: 0,
            explanation: "It settles who the prize went to and what they were honoured for. It is silent on who made the discoveries the investigation led to (lesson 7).",
            sourceLessonSlug: "the-citation-and-what-it-names",
          },
          {
            prompt: "What is a category error, as lesson 7 uses the term?",
            options: ["Treating a document as a kind of thing it is not", "Filing a nomination in the wrong prize category", "Assigning a paper to the wrong journal section", "Counting a multi-nominee form as several nominations"],
            correctIndex: 0,
            explanation: "Reading a one-sentence citation as a complete account of who did what is the example lesson 7 gives (lesson 7 vocabulary).",
            sourceLessonSlug: "the-citation-and-what-it-names",
          },
          {
            prompt: "Which private course in this catalog is built on reading prize citations against papers?",
            options: ["What the Citation Records", "Who Gets Named, the first course in the credit series", "The Paper and the Prize, on Esther Lederberg", "Who Gets the Credit, which teaches claim checking"],
            correctIndex: 0,
            explanation: "Its Opening section teaches how a prize page is assembled and its Closing section gives a five-step reading method. Neither is repeated here (lesson 7).",
            sourceLessonSlug: "the-citation-and-what-it-names",
          },
          {
            prompt: "Why does lesson 7 say the wording argument barely gets started in Wu's case?",
            options: ["She was never put in front of the 1957 committee", "The citation was rewritten after the ceremony", "The citation names three people rather than two", "The wording was never published in English"],
            correctIndex: 0,
            explanation: "There was no sentence she could have been left out of, because there was no candidacy to leave out. Section 4 shows the record (lesson 7).",
            sourceLessonSlug: "the-citation-and-what-it-names",
          },
          {
            prompt: "Which two sections of What the Citation Records does this course point at, and why those two?",
            options: ["Opening and Closing, because they never renumber", "The 1934 and 1985 sections, because they cover physics prizes", "The 1978 section alone, because it carries the exercise", "Its final assessment, because it summarises every case"],
            correctIndex: 0,
            explanation: "Cases are keyed by prize year in that course, so a new case splices in without renumbering. The Opening and Closing method lessons are therefore stable targets (lesson 7).",
            sourceLessonSlug: "the-citation-and-what-it-names",
          },
          {
            prompt: "What is a prize citation for, in lesson 7's description?",
            options: ["A permanent one-line public statement of why a prize was given", "A summary of the committee's internal deliberations", "A bibliography of the papers that earned the award", "A list of everyone who contributed to the work"],
            correctIndex: 0,
            explanation: "It is read aloud, printed and quoted forever, and it is none of the other three things (lesson 7).",
            sourceLessonSlug: "the-citation-and-what-it-names",
          },
          {
            prompt: "Who delivered the presentation speech at the 1957 physics ceremony?",
            options: ["O. B. Klein", "Manne Siegbahn, the chair of the Nobel Committee for Physics", "B. Karlgren, who addressed the laureates at the banquet", "Erik Hulthen, who wrote the experimental report"],
            correctIndex: 0,
            explanation: "Professor O. B. Klein, a member of the Nobel Committee for Physics. Karlgren spoke at the banquet, which is a different occasion (Klein, 1957).",
            sourceLessonSlug: "the-speech-that-names-her",
          },
          {
            prompt: "How does Klein's speech describe who carried out the first of the proposed experiments?",
            options: ["The Chinese physicist, Mrs. C.S. Wu and her collaborators", "An American team at the National Bureau of Standards in Washington", "Colleagues of Lee and Yang whose names he does not give", "A group at Columbia University working under Wu's direction"],
            correctIndex: 0,
            explanation: "That is his sentence verbatim, and it comes immediately after the description of Lee and Yang proposing experiments to their experimental colleagues (Klein, 1957).",
            sourceLessonSlug: "the-speech-that-names-her",
          },
          {
            prompt: "How much of Klein's speech is spent on the cobalt-60 experiment after he names Wu?",
            options: ["Two further paragraphs", "One sentence, before he returns to the theory", "The entire second half of the address", "Nothing further, since he moves to the laureates directly"],
            correctIndex: 0,
            explanation: "The aligned nuclei, the coil and its counterclockwise current, the downward electrons and the distant-observer conclusion fill the two paragraphs after the naming (Klein, 1957).",
            sourceLessonSlug: "the-speech-that-names-her",
          },
          {
            prompt: "How does Klein address the two laureates in his speech?",
            options: ["Professor Lee and Professor Yang", "Doctor Lee and Doctor Yang, matching the committee's internal report", "Mr Lee and Mr Yang, as Karlgren does at the banquet", "By their full names without any title"],
            correctIndex: 0,
            explanation: "He addresses them as Professor Lee and Professor Yang. He calls Wu Mrs. C.S. Wu. The course states both facts and explains neither (Klein, 1957).",
            sourceLessonSlug: "the-speech-that-names-her",
          },
          {
            prompt: "What profession does the Nobel nomination archive record for Wu on her 1958 nominee record?",
            options: ["Professor", "Research associate at the National Bureau of Standards", "Lecturer at Columbia University without tenure", "The record leaves the profession field blank"],
            correctIndex: 0,
            explanation: "Record 15049 gives Profession Professor and University Columbia University, New York, NY. That is the Nobel Foundation's own database (Nobel Prize Outreach, n.d.-b).",
            sourceLessonSlug: "the-speech-that-names-her",
          },
          {
            prompt: "Why does the course decline to explain the difference between Professor Lee and Mrs. C.S. Wu?",
            options: ["Nothing read for the course says why", "The difference is too minor to be worth discussing", "Explaining it would contradict the nomination record", "The Nobel Foundation asks that the speech not be analysed"],
            correctIndex: 0,
            explanation: "A document can show that two people were addressed differently without showing the reason, and inventing a reason turns a checkable case into an unfalsifiable one (lesson 8).",
            sourceLessonSlug: "the-speech-that-names-her",
          },
          {
            prompt: "What does unfalsifiable mean in lesson 8's vocabulary?",
            options: ["Built so that no document could count against it", "Proved beyond any reasonable doubt by the record", "Impossible to publish without a named source", "Written in a way that no translator can render"],
            correctIndex: 0,
            explanation: "Supplying an unrecorded motive produces exactly that: a claim nothing can test, which is the opposite of what this course is teaching (lesson 8 vocabulary).",
            sourceLessonSlug: "the-speech-that-names-her",
          },
          {
            prompt: "What does lesson 8 say a presentation speech is not?",
            options: ["A deliberation", "A published document, since it is only spoken aloud", "A description of the prize-winning work", "An address to a general audience"],
            correctIndex: 0,
            explanation: "It describes the work to the room. The committee's internal discussion is a different kind of document, and Section 5 handles what is known of it (lesson 8).",
            sourceLessonSlug: "the-speech-that-names-her",
          },
          {
            prompt: "Of the four documents lesson 8 lists, how many name or credit Wu?",
            options: ["Three", "One, the 1957 Letter alone", "All four, including the prize itself", "None, which is what the erasure account predicts"],
            correctIndex: 0,
            explanation: "The paper names her first, the acknowledgment thanks the theorists rather than her, and the ceremony speech describes her experiment. Only the prize itself does not (lesson 8).",
            sourceLessonSlug: "the-speech-that-names-her",
          },
          {
            prompt: "What does lesson 8 say the pattern of the record looks like?",
            options: ["A specific, locatable failure rather than erasure", "A deliberate campaign to remove one name", "An ordinary oversight of no historical interest", "A dispute that the documents cannot settle at all"],
            correctIndex: 0,
            explanation: "Three documents point one way and the fourth points the other, which is not what erasure looks like. Section 4 locates the failure (lesson 8).",
            sourceLessonSlug: "the-speech-that-names-her",
          },
          {
            prompt: "How many times does the surname Wu appear in Yang's Nobel lecture?",
            options: ["Four", "Once, in the reference list only, as in Lee's lecture", "Twice, both in the body of the lecture", "Eleven, once on each page of the lecture"],
            correctIndex: 0,
            explanation: "Three times in the body, on printed pages 399 and 400, and once in reference 12 on printed page 402 (Yang, 1957).",
            sourceLessonSlug: "two-lectures-two-banquet-speeches",
          },
          {
            prompt: "What does Yang's lecture say physicists owe to the courage and skill of the experimental group?",
            options: ["The developments concerning parity conservation that year", "The invention of the low-temperature technique they used", "The idea of testing right-left symmetry in the first place", "The reference list that closes his own lecture"],
            correctIndex: 0,
            explanation: "His sentence is that to their courage and their skill physicists owe the exciting and clarifying developments concerning parity conservation in the past year (Yang, 1957, p. 399).",
            sourceLessonSlug: "two-lectures-two-banquet-speeches",
          },
          {
            prompt: "Where in Lee's Nobel lecture does Wu appear?",
            options: ["Reference 3, on printed page 418", "The opening paragraph, alongside the theta-tau puzzle", "A footnote describing the cobalt-60 apparatus", "She does not appear in his lecture at all"],
            correctIndex: 0,
            explanation: "The only occurrence is the bibliographic entry for the 1957 Letter. She is not named in the body of the lecture (Lee, 1957, p. 418).",
            sourceLessonSlug: "two-lectures-two-banquet-speeches",
          },
          {
            prompt: "How were the counts of Wu mentions in the two lectures checked?",
            options: ["Every occurrence was located and read on its page", "By trusting the search box on the Nobel Foundation website", "By counting the entries in each lecture's reference list", "By comparing the two lectures against a secondary summary"],
            correctIndex: 0,
            explanation: "The PDFs were downloaded, the text extracted, and each occurrence read in its surrounding passage. Two independent passes returned the same counts, and the course still tells a third reader to confirm (lesson 9).",
            sourceLessonSlug: "two-lectures-two-banquet-speeches",
          },
          {
            prompt: "What does neither 1957 banquet speech contain?",
            options: ["The surname Wu", "Any reference to the parity experiments", "Thanks to the Royal Swedish Academy of Sciences", "A mention of the other laureate by name"],
            correctIndex: 0,
            explanation: "Both were read in full on 2026-09-20 and neither contains her name. Lee's does contain a generous paragraph that names nobody (lesson 9).",
            sourceLessonSlug: "two-lectures-two-banquet-speeches",
          },
          {
            prompt: "What image does Lee's banquet speech use for work that is remembered and work that is forgotten?",
            options: ["Reaping and tilling", "Building and demolishing, in the edifice of physical law", "A door in a dark room, which Yang uses in his lecture", "A spool of thread on a table, which Klein uses in his speech"],
            correctIndex: 0,
            explanation: "He says it is often the reaping that is remembered but the tilling forgotten. The dark room is Yang's lecture and the spool of thread is Klein's speech (Lee, 1957, banquet speech).",
            sourceLessonSlug: "two-lectures-two-banquet-speeches",
          },
          {
            prompt: "Whom does Lee's banquet paragraph name?",
            options: ["Nobody", "Wu, Ambler, Hayward, Hoppes and Hudson together", "Wu alone, as the physicist who performed the experiment", "The members of the Nobel Committee for Physics"],
            correctIndex: 0,
            explanation: "It speaks of many great physicists who have contributed much but have not yet been so honored, without naming any of them (Lee, 1957, banquet speech).",
            sourceLessonSlug: "two-lectures-two-banquet-speeches",
          },
          {
            prompt: "Why does lesson 9 call the acceptance-speech claim wrong in an instructive way?",
            options: ["It collapses two documents into one", "It invents a quotation that nobody ever said", "It confuses Lee with Yang throughout", "It cites a source that has since been withdrawn"],
            correctIndex: 0,
            explanation: "Something like it happened, in Yang's lecture, but the claim moves it into an acceptance speech and attributes it to both men (lesson 9).",
            sourceLessonSlug: "two-lectures-two-banquet-speeches",
          },
          {
            prompt: "What should you ask when a claim says somebody said something?",
            options: ["Which document, on which day, in which format", "Whether the speaker later repeated it in writing", "Whether the quotation appears in more than one retelling", "Whether any witness has publicly denied it"],
            correctIndex: 0,
            explanation: "Nobel week alone produces a citation, a presentation speech, two lectures and two banquet speeches, written for different purposes by different people (lesson 9).",
            sourceLessonSlug: "two-lectures-two-banquet-speeches",
          },
          {
            prompt: "Which catalog lesson is the home for corrections of this kind?",
            options: ["Who Gets the Credit, lesson 17", "Who Gets Named, lesson 9, on Rossiter's cases", "The Paper and the Prize, lesson 2", "What the Citation Records, in its 1934 section"],
            correctIndex: 0,
            explanation: "Five claims that do not survive checking. This course says the acceptance-speech claim belongs on that list (lesson 9).",
            sourceLessonSlug: "two-lectures-two-banquet-speeches",
          },
          {
            prompt: "What is a banquet speech, as distinct from a Nobel lecture?",
            options: ["Short remarks at the banquet, usually meant by acceptance speech", "The technical address a laureate gives the following day", "The committee member's description of the prize-winning work", "The printed citation read aloud during the ceremony"],
            correctIndex: 0,
            explanation: "The lecture is the technical address; the banquet speech is what people usually mean by an acceptance speech, and neither 1957 banquet speech names Wu (lesson 9 vocabulary).",
            sourceLessonSlug: "two-lectures-two-banquet-speeches",
          },
          {
            prompt: "What does document collapse name in this course?",
            options: ["Treating two separate documents as one", "Losing a document from an archive's holdings", "Compressing a long file so that text is lost", "Summarising a document without reading it"],
            correctIndex: 0,
            explanation: "It is the error behind the acceptance-speech claim, which merges a Nobel lecture and a banquet speech (lesson 9 vocabulary).",
            sourceLessonSlug: "two-lectures-two-banquet-speeches",
          },
          {
            prompt: "In Yang's lecture, when does he say the experiment was first performed and finished?",
            options: ["Performed in the latter half of 1956, finished early in 1957", "Performed entirely in January 1957, the month of submission", "Performed over two years, from 1955 to 1957", "He gives no dates for the experiment at all"],
            correctIndex: 0,
            explanation: "His phrasing is first performed in the latter half of 1956 and finished early this year, the lecture being delivered in December 1957 (Yang, 1957, p. 399).",
            sourceLessonSlug: "two-lectures-two-banquet-speeches",
          },
          {
            prompt: "Which phrase does Yang use twice on printed page 400 for the experimental group?",
            options: ["Wu, Ambler, and their collaborators", "The National Bureau of Standards cryogenics team", "Our experimental colleagues at Columbia University", "The authors of the Physical Review Letter"],
            correctIndex: 0,
            explanation: "He uses it for the meter result and again for the charge conjugation finding (Yang, 1957, p. 400).",
            sourceLessonSlug: "two-lectures-two-banquet-speeches",
          },
          {
            prompt: "What does lesson 9 say about a claim that cannot name its document?",
            options: ["It has not been checked", "It is probably true but hard to verify", "It should be repeated with a hedge attached", "It can be accepted if two retellings agree"],
            correctIndex: 0,
            explanation: "That rule is worth more than this particular case, which is why lesson 9 states it as a general rule (lesson 9).",
            sourceLessonSlug: "two-lectures-two-banquet-speeches",
          },
          {
            prompt: "What does whole-text search mean in this course's vocabulary?",
            options: ["Locating every occurrence of a string in an extracted document", "Reading a document from beginning to end without skipping", "Searching several archives for the same phrase at once", "Using a library catalogue to find every edition of a work"],
            correctIndex: 0,
            explanation: "It is only as good as the extraction, which is why the course states the method and asks a third reader to confirm from the pages (lesson 9 vocabulary).",
            sourceLessonSlug: "two-lectures-two-banquet-speeches",
          },
          {
            prompt: "How many documents from Nobel week does lesson 9 count as worth reading beyond the citation and the presentation speech?",
            options: ["Four", "One, Yang's lecture alone", "Six, counting the ceremony programme and the press release", "Two, the two lectures, since the banquet speeches say nothing"],
            correctIndex: 0,
            explanation: "Two lectures and two banquet speeches, splitting two and two. The banquet speeches matter precisely because of what they do not contain (lesson 9).",
            sourceLessonSlug: "two-lectures-two-banquet-speeches",
          },
          {
            prompt: "What does the course call the fact that Yang praised the experimental group in his lecture?",
            options: ["A laureate giving them a sentence of open praise", "A concession forced on him by the Nobel Committee", "A private remark that was later published without consent", "A footnote that most readers of the lecture miss"],
            correctIndex: 0,
            explanation: "It sits in the body of the lecture that accompanies the prize, which is why the course treats it as public and deliberate (lesson 9).",
            sourceLessonSlug: "two-lectures-two-banquet-speeches",
          },
          {
            prompt: "According to lesson 7, who quotes a prize citation most often?",
            options: ["People who have not read it", "The committee members who wrote it", "The laureates themselves in later interviews", "Journal editors setting the record straight"],
            correctIndex: 0,
            explanation: "That is why lesson 7 prints the whole sentence before analysing a word of it (lesson 7).",
            sourceLessonSlug: "the-citation-and-what-it-names",
          },
          {
            prompt: "What are the two names in the 1957 physics citation?",
            options: ["Chen Ning Yang and Tsung-Dao Lee", "Chien-Shiung Wu and Chen Ning Yang", "Tsung-Dao Lee and Ernest Ambler", "Chen Ning Yang alone, with Lee added later"],
            correctIndex: 0,
            explanation: "Awarded jointly to Chen Ning Yang and Tsung-Dao Lee, in that order, each with a prize share of one half (Nobel Prize Outreach, n.d.).",
            sourceLessonSlug: "the-citation-and-what-it-names",
          },
          {
            prompt: "What does lesson 8 mean by saying this is not a story about a woman nobody mentioned?",
            options: ["The committee's own presenter described her experiment at length", "Her name appears in the citation alongside the laureates", "She was invited to the ceremony as a guest of honour", "The press reported her role more fully than the laureates'"],
            correctIndex: 0,
            explanation: "Klein named her and spent two further paragraphs on the experiment, in the ceremony, on the day. Any erasure account has to reconcile itself with that (lesson 8).",
            sourceLessonSlug: "the-speech-that-names-her",
          },
          {
            prompt: "What does lesson 8 say the presentation speech does not do about the prize decision?",
            options: ["It neither defends nor questions who received it", "It defends the choice of two laureates over three", "It explains why the experimenters were not included", "It records a dissent by one committee member"],
            correctIndex: 0,
            explanation: "It describes the physics and credits the experiment. It says nothing about whether anyone deserved the prize (lesson 8).",
            sourceLessonSlug: "the-speech-that-names-her",
          },
          {
            prompt: "Which record number does the course give for Wu's 1958 nominee entry?",
            options: ["15049", "18574, which is the Lee and Yang 1957 form", "21865, a 1971 nomination by Robert Serber", "24827, a 1964 nomination by Tsung-Dao Lee"],
            correctIndex: 0,
            explanation: "Record 15049 is Physics 1958, number 29-0, nominated by Polykarp Kusch. The others are named correctly here but belong to other years (lesson 8 sources).",
            sourceLessonSlug: "the-speech-that-names-her",
          },
          {
            prompt: "What does lesson 7 say a citation is not, in three words or phrases?",
            options: ["Not a contributor list, a bibliography, or a transcript", "Not public, permanent, or quotable", "Not written, spoken, or printed by a committee", "Not short, constrained, or carefully worded"],
            correctIndex: 0,
            explanation: "It is the public one-line statement of why a prize was given, and mistaking it for any of those three is the category error (lesson 7).",
            sourceLessonSlug: "the-citation-and-what-it-names",
          },
          {
            prompt: "What does candidacy mean in lesson 7's vocabulary?",
            options: ["Having been nominated and so available to be considered", "Having published work eligible for a given prize year", "Having been shortlisted by a committee's internal report", "Having been named in a laureate's published lecture"],
            correctIndex: 0,
            explanation: "The distinction matters because the course's central finding is that Wu had no 1957 candidacy at all (lesson 7 vocabulary).",
            sourceLessonSlug: "the-citation-and-what-it-names",
          },
          {
            prompt: "Which two instruments does lesson 8 say the ceremony and the prize point in different directions about?",
            options: ["Naming the experimenter and awarding the prize", "The published citation and the printed programme", "The committee's report and the laureates' lectures", "The nomination deadline and the publication date"],
            correctIndex: 0,
            explanation: "The ceremony named her and the prize did not, which is why the pattern is a locatable failure rather than an erasure (lesson 8).",
            sourceLessonSlug: "the-speech-that-names-her",
          },
          {
            prompt: "In Yang's lecture, which page carries both the first naming of the group and the courage-and-skill sentence?",
            options: ["Printed page 399", "Printed page 393, the opening page of the lecture", "Printed page 402, which carries the reference list", "Printed page 418, which belongs to Lee's lecture"],
            correctIndex: 0,
            explanation: "Both sit on printed page 399, PDF page 7. Page 402 carries reference 12 and 418 belongs to Lee (lesson 9 sources).",
            sourceLessonSlug: "two-lectures-two-banquet-speeches",
          },
          {
            prompt: "On what date were both 1957 banquet speeches delivered?",
            options: ["10 December 1957", "11 December 1957, the day of the Nobel lectures", "15 February 1957, the day the Letter was published", "3 February 2026, the date of the Physics World article"],
            correctIndex: 0,
            explanation: "The banquet followed the ceremony on 10 December; the lectures were delivered the next day (lesson 9).",
            sourceLessonSlug: "two-lectures-two-banquet-speeches",
          },
          {
            prompt: "What is the effect of the citation saying the investigation led to discoveries rather than that the laureates made them?",
            options: ["It leaves the makers of the discoveries unnamed", "It transfers the credit to the experimental group", "It restricts the prize to theoretical work only", "It makes the citation shorter than the committee intended"],
            correctIndex: 0,
            explanation: "Lesson 7 calls it a carefully built sentence and asks the reader to sit with it before deciding what it proves (lesson 7).",
            sourceLessonSlug: "the-citation-and-what-it-names",
          },
          {
            prompt: "How long does lesson 8 say Klein's speech runs?",
            options: ["About two thousand words", "About four hundred words, a ceremonial minimum", "About ten thousand words, longer than either lecture", "The course does not estimate its length"],
            correctIndex: 0,
            explanation: "About two thousand words, of which several paragraphs are given to the experiment the prize did not name (lesson 8).",
            sourceLessonSlug: "the-speech-that-names-her",
          },
          {
            prompt: "What does this course do when a document shows a difference but not its reason?",
            options: ["States the difference and stops", "Supplies the most likely reason with a hedge", "Omits the difference to avoid speculation", "Asks the reader to supply the reason themselves"],
            correctIndex: 0,
            explanation: "Lesson 8 calls that restraint the rule rather than a hedge, because inventing a reason makes the case unfalsifiable (lesson 8).",
            sourceLessonSlug: "the-speech-that-names-her",
          },
          {
            prompt: "Which of these did Klein's speech describe as being directed like compass needles?",
            options: ["The cobalt nuclei", "The electrons emitted in the decay", "The counters placed above and below the sample", "The coils carrying the magnetising current"],
            correctIndex: 0,
            explanation: "The nuclei are themselves small magnets, so a magnetic field at very low temperature directs them like compass needles (Klein, 1957).",
            sourceLessonSlug: "the-speech-that-names-her",
          },
          {
            prompt: "What kind of failure does lesson 8 say the four-document pattern shows?",
            options: ["A specific, locatable one", "A systemic one that no document could locate", "An accidental one with no consequences", "One that the ceremony speech itself caused"],
            correctIndex: 0,
            explanation: "Erasure would show a different pattern. Three documents naming her and one not is the signature of a failure at one identifiable stage (lesson 8).",
            sourceLessonSlug: "the-speech-that-names-her",
          },
          {
            prompt: "Which claim does lesson 9 say is not fabricated but still wrong?",
            options: ["That Lee and Yang thanked Wu in their acceptance speech", "That Wu received twenty-three nominations for the 1957 prize", "That Klein refused to name Wu in the ceremony", "That Lee's lecture praises the experimental group"],
            correctIndex: 0,
            explanation: "Something very like it happened, in Yang's lecture. The claim moves it to the wrong document and attributes it to both men (lesson 9).",
            sourceLessonSlug: "two-lectures-two-banquet-speeches",
          },
          {
            prompt: "How many separate document types does lesson 9 say Nobel week alone produces?",
            options: ["Six, counting the citation, presentation speech, lectures and banquet speeches", "Two, the citation and the lectures", "Three, the citation, the ceremony and the banquet", "Ten, if press releases and interviews are included"],
            correctIndex: 0,
            explanation: "A citation, a presentation speech, two lectures and two banquet speeches. They are written for different purposes by different people (lesson 9).",
            sourceLessonSlug: "two-lectures-two-banquet-speeches",
          },
          {
            prompt: "What did two independent passes over the Nobel lecture PDFs establish?",
            options: ["The same counts of the surname in each lecture", "That the extraction was free of any error", "That the printed page numbers were wrong", "That Lee's lecture names her in the body after all"],
            correctIndex: 0,
            explanation: "Passes on 2026-09-19 and 2026-09-20 agreed, and the course still tells a third reader to check the pages rather than trust a count (lesson 9).",
            sourceLessonSlug: "two-lectures-two-banquet-speeches",
          },
          {
            prompt: "What does the 1957 citation call the parity laws?",
            options: ["The so-called parity laws", "The fundamental laws of right-left symmetry", "The laws of reflection invariance in weak interactions", "The Lee and Yang laws of elementary particles"],
            correctIndex: 0,
            explanation: "The phrase in the citation is the so-called parity laws, which is the wording the summary page prints (Nobel Prize Outreach, n.d.).",
            sourceLessonSlug: "the-citation-and-what-it-names",
          },
          {
            prompt: "Which document from Nobel week credits the experiment to Wu and her collaborators?",
            options: ["The presentation speech", "The citation printed on the summary page", "Lee's banquet speech of 10 December", "Yang's banquet speech of 10 December"],
            correctIndex: 0,
            explanation: "Klein's presentation speech. The citation names only the laureates and the two banquet speeches name her not at all (lessons 8 and 9).",
            sourceLessonSlug: "the-speech-that-names-her",
          },
          {
            prompt: "Which lecture does lesson 9 say treats the experimental group most fully?",
            options: ["Yang's", "Lee's, which discusses the cobalt-60 result in detail", "Neither, since both confine her to a reference", "Both equally, with three mentions each"],
            correctIndex: 0,
            explanation: "Yang names the group three times in the body and thanks them explicitly. Lee's only mention is a bibliographic entry (lesson 9).",
            sourceLessonSlug: "two-lectures-two-banquet-speeches",
          },
          {
            prompt: "What does lesson 9 warn about trusting any count, including its own?",
            options: ["A third reader should confirm from the pages", "Counts of common surnames are never reliable", "The Nobel Foundation updates its PDFs without notice", "A count is meaningless without a statistical test"],
            correctIndex: 0,
            explanation: "Extraction is imperfect, as the dropped Greek letters in Section 1 showed, so the method is stated and independent confirmation invited (lesson 9).",
            sourceLessonSlug: "two-lectures-two-banquet-speeches",
          },
          {
            prompt: "What does lesson 7 say the next two lessons read?",
            options: ["Documents from the same week that do far more naming", "Nomination forms filed after the prize was decided", "Secondary accounts written decades after the ceremony", "The committee's internal reports from September 1957"],
            correctIndex: 0,
            explanation: "The presentation speech and the lectures name people the one-sentence citation cannot. The internal reports are Section 5 and the nomination forms are Section 4 (lesson 7).",
            sourceLessonSlug: "the-citation-and-what-it-names",
          },
          {
            prompt: "Which detail of the archive record does lesson 8 use beside Klein's form of address?",
            options: ["The profession field on her 1958 nominee record", "The comments field on the Lee and Yang 1957 record", "The number of nominations filed for her in 1971", "The country field recorded for her nominators"],
            correctIndex: 0,
            explanation: "The Nobel Foundation's own database records her profession as Professor, which the course prints beside Klein's Mrs. C.S. Wu and leaves unexplained (lesson 8).",
            sourceLessonSlug: "the-speech-that-names-her",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4 — The archive, and the search you run yourself
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "what-the-nomination-archive-is",
      title: "10 · What the nomination archive is, and what it withholds",
      section: "Section 4 · The archive, and the search you run yourself",
      body: `Most credit disputes end in an argument about a closed room. This one does not, because the Nobel Foundation publishes a searchable database of who nominated whom, and you can read it yourself, free, in a browser.

**What it holds.** One record per nomination form. Each record gives the prize, the year, a number in the form 29-0 or 48-3, the nominee or nominees, and the nominator. For each person it gives a name, gender, year of birth and death where known, profession, university, city, state and country, and, if the person later won, the year of the prize. Record 15049, for example, is Physics 1958, number 29-0: nominee Chien-Shiung Wu, F, born 1912, died 1997, Profession Professor, University Columbia University, New York, NY, United States; nominator Polykarp Kusch, awarded the Nobel Prize in Physics 1955.

That is a signed, dated, numbered document. Hold that thought until lesson 18.

**Where it stops.** A search of every prize from 1901 to 1976 for nominees whose name contains Wu returned nothing later than 1974. The archive's coverage has an end date, and 1974 is where it fell for this search on 20 September 2026.

**What it hides, in its own words.** The 1957 record for Lee and Yang, number 39-0, carries a Comments field that reads: "Information regarding nominations to Chen Ning Yang cannot be released at this time according to the statutes governing the Nobel archives of the Royal Swedish Academy of Sciences, §8 second paragraph". It then quotes the statute, whose rule is "that material relating to the research work of a named person may not be released during that persons lifetime". That note was still on the record when it was fetched for this course.

**Read what that does to every count in this section.** The archive states, on its own page, that some material is withheld. So the 1957 list is not certified complete by the body that publishes it, and no count taken from it can be called exhaustive. This course prints its counts and prints that caveat beside them, every time.

**A second, smaller withholding.** Two of the twenty-three records for Wu give the nominator as N.N., the database's placeholder for a name it is not printing. Secondary accounts have suggested who one of those nominators was. This course does not name anybody, because the database does not, and an identification that the database itself does not support is exactly the kind of claim this course exists to refuse.

**One practical note before the next lesson.** The archive is served over ordinary web pages, and it answers requests that it does not understand by giving you a page anyway. Lesson 19 is entirely about what that means for anyone who checks this work. For now, know that the working search endpoint is search.php, taking a prize, a start year, an end year and a name, and that the year list endpoint is list.php, taking a prize and a year.

:::reveal What does the Lee and Yang 1957 record say in its Comments field? ||| That information regarding nominations to Chen Ning Yang cannot be released at this time under the statutes governing the Nobel archives, whose rule is that material relating to a named person's research work may not be released during that person's lifetime.

:::reveal Why does this course refuse to name the nominator behind either N.N. entry? ||| Because the database does not name them, and an identification the source itself does not support is the kind of claim this course exists to refuse.

## Vocabulary
- **Nomination record**: one entry in the archive, covering one nomination form, with its year, number, nominee or nominees and nominator.
- **N.N.**: the archive's placeholder for a nominator whose name it is not printing.
- **Withholding note**: a statement in a record that some related material is not being released, which limits what any count from the archive can claim.
- **Exhaustive**: covering everything there is, which no count from a database carrying a withholding note can claim to be.
- **Endpoint**: the specific page of a web service that answers a particular kind of request, here search.php and list.php.

## Sources
Nobel Prize Outreach. (n.d.-b). *Nomination archive* [Database]. https://www.nobelprize.org/nomination/archive/search.php (Record 15049, Physics 1958, number 29-0, for the field list; record 18574, Physics 1957, number 39-0, for the Comments field quoting the statutes. Both retrieved 2026-09-20 and read in full.)`,
    },
    {
      slug: "the-1957-list",
      title: "11 · The 1957 list, and the name that is not on it",
      section: "Section 4 · The archive, and the search you run yourself",
      body: `The archive will give you every nomination it holds for one prize in one year. Ask it for physics in 1957 and this is what comes back.

**Sixty-six nomination rows.** The page returns 67 table rows, one of which is the header, so the count of nominations is 66. Retrieved and counted on 20 September 2026, and the same count the brief made a day earlier.

**Chien-Shiung Wu is not on it.** Not once, under any form of her name. For the prize awarded in December 1957, nobody nominated her.

**Chen Ning Yang and Tsung-Dao Lee are on it exactly once.** Row 48 of the list, which is record 39-0: two nominees, one form, one nominator, J A Simpson of Chicago, Illinois. That is the whole of their 1957 candidacy as the public archive shows it, and the same record is the one carrying the withholding note from lesson 10.

**Some things the list is full of, which are worth seeing.** Eugene Wigner appears seven times, nominated by seven different people, every one of those seven forms naming him alone. Counting solo and shared forms together, Emilio Segre is named on nine, Pyotr Kapitsa on six and Bruno Rossi on four. It is a long, crowded list of serious candidates, most of whom did not win that year.

**And three women are on it.** Marietta Blau, nominated by Erwin Schrodinger. Dorothy Crowfoot Hodgkin, nominated by J. D. Bernal. Maria Goeppert-Mayer, nominated by James Franck and named again on a four-nominee form filed by Karl Johann Freudenberg.

Be careful with that last paragraph, in both directions. It does not show that the physics of 1957 was fair to women, and this course is not going to pretend it does. What it shows is narrower and harder to argue with: the 1957 physics nomination list was not a list from which women were absent. Three were nominated. Wu was not one of them, and the reason she was not cannot be that the list had no room for women in it.

**A discrepancy, printed as a discrepancy.** Larsson and Wyss, who read the bound committee book in Stockholm, report 58 nominations for the 1957 physics prize. The online archive returns 66 rows. This course cannot reconcile the two and does not try. A plausible explanation is that a form naming several people is counted once in one place and once per nominee in the other, but that is a guess and is labelled as one. The rule that follows is simple and worth carrying out of this course: **never print either number without saying which source it came from.**

**What this lesson does not say.** It does not say the committee passed her over. A committee cannot pass over a name that is not in front of it. What failed in 1957 failed before the committee met, and the next lesson shows how completely the situation reversed afterwards.

:::reveal How many nomination rows does the archive return for the 1957 physics prize, and how many name Wu? ||| Sixty-six rows, after subtracting the header row from the 67 the page returns, and none of them name her.

:::reveal Why must neither the figure 66 nor the figure 58 be printed without its source? ||| Because they come from two different sources, the online archive and the bound committee book as reported by Larsson and Wyss, and this course cannot reconcile them.

## Vocabulary
- **Year list**: the archive view showing every nomination held for one prize in one year.
- **Header row**: the labelling row of a table, which must be subtracted before a row count becomes a count of records.
- **Multi-nominee form**: one nomination naming several people, the likeliest source of a counting discrepancy between two tallies.
- **Passed over**: considered and not chosen, which is not what happens to a name that was never submitted.

## Sources
Larsson, M., & Wyss, R. (2026, February 3). Twenty-three nominations, yet no Nobel prize: How Chien-Shiung Wu missed out on the top award in physics. *Physics World*. https://physicsworld.com/a/twenty-three-nominations-yet-no-nobel-prize-how-chien-shiung-wu-missed-out/ (Web article, unpaginated; the figure of 58 nominations for 1957 appears in their account of the committee book.)
Nobel Prize Outreach. (n.d.-b). *Nomination archive* [Database]. https://www.nobelprize.org/nomination/archive/ (The physics 1957 year list, retrieved 2026-09-20: 67 table rows including one header. Row 48 is record 39-0, nominees Chen Ning Yang and Tsung-Dao Lee, nominator J A Simpson, Chicago, Illinois.)`,
    },
    {
      slug: "twenty-three-nominations",
      title: "12 · Twenty-three nominations, 1958 to 1974",
      section: "Section 4 · The archive, and the search you run yourself",
      body: `Search the whole archive, every prize, 1901 to 1976, for nominees whose name contains Wu. Thirty-four rows come back. Eleven of them are other people: Wilhelm Wundt three times, Rene Wurmser, Lien-Teh Wu, and a run of peace nominations for Gregers Winther Wulfsberg Gram. The remaining **twenty-three are Chien-Shiung Wu**, twenty of them filed under that name and three, in 1974, filed as C. S. Wu.

**Not one of the twenty-three is for the 1957 prize.** The first is 1958. The last is 1974.

| Year | Number | On the form with her | Nominator |
|---|---|---|---|
| 1958 | 29-0 | (alone) | Polykarp Kusch, Physics 1955 |
| 1958 | 30-0 | (alone) | Willis Eugene Lamb, Jr, Physics 1955 |
| 1960 | 64-0 | Wigner, Feynman, Schwinger, Deutsch, Goldhaber, Rossi, Van Allen | David Henry Frisch |
| 1964 | 43-0 | (alone) | Tsung-Dao Lee, Physics 1957 |
| 1964 | 44-0 | (alone) | N.N. |
| 1964 | 73-0 | Charles Hard Townes | Emilio Gino Segre, Physics 1959 |
| 1965 | 76-0 | Rossi, Feynman, Gell-Mann | Emilio Gino Segre, Physics 1959 |
| 1968 | 87-0 | (alone) | Ryoyu Utiyama |
| 1970 | 84-0 | Maurice Goldhaber | H Morinaga |
| 1970 | 105-0 | Victor Weisskopf | U Hauser |
| 1970 | 114-0 | Cronin, Fitch | Feza Gursey |
| 1971 | 72-0 | (alone) | H Foley |
| 1971 | 73-0 | (alone) | Tsung-Dao Lee, Physics 1957 |
| 1971 | 74-0 | (alone) | Robert Serber |
| 1971 | 75-0 | (alone) | Jack Steinberger |
| 1971 | 76-0 | (alone) | Gian Carlo Wick |
| 1971 | 118-0 | Leon Lederman | Allan Maxwell Sachs |
| 1972 | 99-0 | (alone) | Tsung-Dao Lee, Physics 1957 |
| 1972 | 100-0 | (alone) | Isidor Rabi, Physics 1944 |
| 1973 | 113-0 | (alone) | Henry Primakoff |
| 1974 | 48-1 | (alone, as C. S. Wu) | T Gerholm |
| 1974 | 48-2 | (alone, as C. S. Wu) | N.N. |
| 1974 | 48-3 | (alone, as C. S. Wu) | Ryoyu Utiyama |

**What the table adds up to, and every line of it is re-derivable from the table itself.** Twenty-three nominations. Ten distinct years. Eighteen distinct nominators, counting N.N. as one. Six in 1971, the peak. Five nominators who already held the Nobel Prize in Physics when they filed: Kusch, Lamb, Lee, Segre and Rabi. One more, Jack Steinberger, who would win it in 1988. And five of the 1971 and 1972 filings came from Columbia colleagues.

**Tsung-Dao Lee nominated her three times.** 1964, 1971 and 1972. The man who held half the 1957 prize spent eight years trying to get her one.

**And a fact that must not be turned into a motive.** On the open record, Chen Ning Yang never nominated her. The archive closes at 1974 and Yang lived until 2025, so what is true is this and only this: the public record through 1974 shows no nomination of Wu by Yang. That is a statement about a record, not about a man, and the difference is the whole discipline of this course.

**Now hold the two halves together, because the pair is the finding.** In 1957 nobody nominated her and the prize went elsewhere. From 1958 to 1974 eighteen people nominated her twenty-three times, five of them Nobel laureates, one of them the laureate whose prize the experiment had made possible, and it changed nothing. Neither half on its own is the story.

:::reveal How many of the 34 archive rows for the name Wu are Chien-Shiung Wu, and across what years? ||| Twenty-three, spread over ten distinct years from 1958 to 1974, with none for the 1957 prize.

:::reveal What is the only true statement about Yang and the nomination record? ||| That the public record through 1974 shows no nomination of Wu by him. The archive closes in 1974 and he lived until 2025, so it is a statement about a record rather than about a man.

## Vocabulary
- **Distinct nominators**: the count of different people who filed, as opposed to the count of forms, here eighteen against twenty-three.
- **Sitting laureate**: a nominator who already held the prize in that category when the nomination was filed.
- **Open record**: what a public archive shows, as distinct from what happened, and the only thing a claim about an archive may describe.
- **Peak year**: 1971 here, with six separate nominations filed for her in one year.

## Sources
Nobel Prize Outreach. (n.d.-b). *Nomination archive* [Database]. https://www.nobelprize.org/nomination/archive/search.php (Search on prize=0, startyear 1901, endyear 1976, cname Wu, retrieved 2026-09-20: 34 rows, 23 of them Chien-Shiung Wu. Every row in the table above was read on its own detail page, show.php by record id; 15049, 15372, 24827, 21865 and 22343 were re-read in full for this build.)`,
    },
    {
      slug: "run-the-search-yourself",
      title: "13 · Primary source: run the search yourself",
      section: "Section 4 · The archive, and the search you run yourself",
      body: `This is the course's primary source exercise, and it is the reason the subject was worth building at all. Every number in Section 4 came out of a database anyone can open. You should not take those numbers on trust, and the next twenty minutes are how you avoid having to.

**What you need.** A browser and the Nobel Prize nomination archive at nobelprize.org/nomination/archive. Nothing else. There is no login, no fee and no request form.

**The two views you will use.** The search view, search.php, takes a prize, a start year, an end year and a name, and returns one row per nomination form. The year list view, list.php, takes a prize and a year, and returns every nomination that archive holds for that prize in that year. Each row links to a detail page, show.php, carrying the full record.

**A warning that you should treat as part of the exercise, not as a footnote.** This archive answers a request it does not understand by serving you a page anyway, with a successful status, showing a different year's list. If your search seems to return something odd, the first thing to suspect is that your query never ran. Lesson 19 is about that failure mode in general, and it is the single most useful thing in this course for anybody who checks other people's work.

**Work from the page, not from memory, and not from this course.** Where an answer below is a count, count the rows yourself. If your count and this course's count disagree, that is a finding and you should write it down rather than assuming you are wrong. Two independent passes a day apart agreed on every number printed here, which is a reason to expect agreement and not a reason to skip the check.

**One thing to notice while you work.** Every row you look at is a document with a number on it. It has a year, a form number, a named nominee and, in twenty-one of twenty-three cases, a named nominator. Compare that, when you get to Section 5, with a famous quotation that nobody can trace to a source.

:::reveal What should you do if your count of a list disagrees with the count printed in this course? ||| Write it down as a finding rather than assuming you are wrong, and check whether your query actually ran before concluding anything about history.

:::reveal Why is it worth doing this exercise even though the counts are printed in Section 4? ||| Because the whole argument of the course rests on a count of zero, and a count anyone can reproduce in a free public database is the only kind that does not have to be taken on trust.

## Vocabulary
- **Detail page**: the per-record view, show.php, carrying every field the archive holds for one nomination.
- **Query parameter**: one of the values in a web address that tells a service what to look for, such as the prize, the year or the name.
- **Independent pass**: a repetition of the same check by a different reader or on a different day, used here to catch counting errors.

## Sources
Nobel Prize Outreach. (n.d.-b). *Nomination archive* [Database]. https://www.nobelprize.org/nomination/archive/ (The search, year list and detail views used throughout this exercise. All counts below were taken from pages retrieved 2026-09-20.)`,
      exercise: {
        instructions:
          "Open the Nobel Prize nomination archive and answer from the pages themselves. Type short answers: a surname, a number you have counted, or a single word.",
        items: [
          {
            prompt: "Step 1. Search every prize from 1901 to 1976 for nominees whose name contains Wu. How many rows come back in total?",
            answer: "34",
            computedAnswer: true,
            explanation: "Thirty-four rows. Counting them yourself is the point of the step: the total includes people who are not her, which is why step 2 exists.",
          },
          {
            prompt: "Step 2. Read down that list and count only the rows for Chien-Shiung Wu, including the 1974 rows filed as C. S. Wu. How many?",
            answer: "23",
            computedAnswer: true,
            explanation: "Twenty-three. The other eleven rows are Wilhelm Wundt, Rene Wurmser, Lien-Teh Wu and a run of peace nominations for Gregers Winther Wulfsberg Gram.",
          },
          {
            prompt: "Step 3. Open the 1958 record numbered 29-0. Type the surname of the nominator.",
            answer: "Kusch",
            accept: ["Polykarp Kusch"],
            explanation: "Polykarp Kusch, who held the 1955 Nobel Prize in Physics. The other 1958 nomination, number 30-0, came from Willis Eugene Lamb, Jr, who shared that same 1955 prize.",
          },
          {
            prompt: "Step 4. Two of the twenty-three rows give no nominator name. Type the placeholder the database prints instead, exactly as it appears.",
            answer: "N.N.",
            accept: ["NN", "N. N.", "N.N"],
            explanation: "N.N., on the 1964 record 44-0 and the 1974 record 48-2. Secondary accounts have suggested a name for one of them. The database does not, and neither does this course.",
          },
          {
            prompt: "Step 5. Switch to the year list for physics in 1957 and count the nomination rows, not counting the header row. How many?",
            answer: "66",
            computedAnswer: true,
            explanation: "Sixty-six, from 67 table rows minus the header. Larsson and Wyss report 58 from the bound committee book, and this course prints both figures with their sources rather than choosing.",
          },
          {
            prompt: "Step 6. Search that 1957 list for Wu. How many rows name her?",
            answer: "0",
            accept: ["none", "zero"],
            explanation: "None. That single count is the finding this course is built on: for the prize awarded in December 1957, she was never nominated.",
          },
          {
            prompt: "Step 7. Find the one 1957 row naming Chen Ning Yang and Tsung-Dao Lee. Type the surname of the nominator.",
            answer: "Simpson",
            accept: ["J A Simpson", "J. A. Simpson"],
            explanation: "J A Simpson of Chicago, Illinois, on record 39-0. One form, two nominees, one nominator. That is the whole of their 1957 candidacy in the public archive.",
          },
          {
            prompt: "Step 8. Open that same record and read its Comments field. Whose nominations does it say cannot be released at this time? Type the surname.",
            answer: "Yang",
            accept: ["Chen Ning Yang"],
            explanation: "The note cites the statutes governing the Nobel archives and their rule that material relating to a named person's research work may not be released during that person's lifetime. It is the archive telling you its own list is not certified complete.",
          },
          {
            prompt: "Step 9. Back in the Wu list, one nominator appears three times, in 1964, 1971 and 1972. Type the surname.",
            answer: "Lee",
            accept: ["Tsung-Dao Lee", "T. D. Lee", "T.D. Lee"],
            explanation: "Tsung-Dao Lee, who held half of the 1957 prize. He filed for her in 1964, 1971 and 1972.",
          },
          {
            prompt: "Step 10. Count the distinct years between 1958 and 1974 in which at least one nomination for her was filed. How many years?",
            answer: "10",
            computedAnswer: true,
            explanation: "Ten: 1958, 1960, 1964, 1965, 1968, 1970, 1971, 1972, 1973 and 1974. Producing that count by hand is what makes the spread of the nominations visible.",
          },
          {
            prompt: "Step 11. In the year that carries six of them, open record 74-0. Type the surname of the nominator.",
            answer: "Serber",
            accept: ["Robert Serber"],
            explanation: "Robert Serber of Columbia University, one of five Columbia colleagues who filed for her in 1971 and 1972.",
          },
          {
            prompt: "Step 12. Which of the twenty-three nominations was filed for the 1957 prize? If none was, type none.",
            answer: "none",
            accept: ["not one", "no nomination", "nothing"],
            explanation: "None. Every one of the twenty-three is later than the prize, and the popular version of this story has the timing exactly backwards.",
          },
        ],
      },
    },
    {
      slug: "section-4-quiz",
      title: "Section 4 quiz · The archive, and the search you run yourself",
      section: "Section 4 · The archive, and the search you run yourself",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "How many nominations for the 1957 physics prize name Chien-Shiung Wu?",
            options: ["None", "Twenty-three, which is why her case is so well documented", "One, filed two days before the deadline by a Chicago physicist", "Six, the same number she received in her peak year"],
            correctIndex: 0,
            explanation: "The 1957 physics list runs to 66 nomination rows and she is on none of them. Twenty-three is the total for 1958 to 1974, and the single late filing belongs to Lee and Yang (lesson 11).",
            sourceLessonSlug: "the-1957-list",
          },
          {
            prompt: "How many nomination rows does the archive return for the 1957 physics prize?",
            options: ["Sixty-six", "Fifty-eight, the figure Larsson and Wyss give from the committee book", "Sixty-seven, counting every row the page prints", "Thirty-four, the number returned by the Wu name search"],
            correctIndex: 0,
            explanation: "The page prints 67 rows, one of which is the header, so the nomination count is 66. Fifty-eight is the other source's figure and 34 belongs to the name search (lesson 11).",
            sourceLessonSlug: "the-1957-list",
          },
          {
            prompt: "How many times do Lee and Yang appear on the 1957 physics nomination list?",
            options: ["Once, on a single form", "Seven times, the same as Eugene Wigner that year", "Twice, once each under their own names", "Not at all, since their prize was decided without nominations"],
            correctIndex: 0,
            explanation: "Row 48 of the list, record 39-0: two nominees, one form, one nominator, J A Simpson of Chicago, Illinois (lesson 11).",
            sourceLessonSlug: "the-1957-list",
          },
          {
            prompt: "Who filed the only 1957 nomination naming Lee and Yang?",
            options: ["J A Simpson of Chicago", "Erwin Schrodinger, who nominated Marietta Blau that year", "James Franck, who nominated Maria Goeppert-Mayer", "Polykarp Kusch, who nominated Wu the following year"],
            correctIndex: 0,
            explanation: "Record 39-0 gives the nominator as J A Simpson, Chicago, Illinois. The other three named here filed for other people (lesson 11).",
            sourceLessonSlug: "the-1957-list",
          },
          {
            prompt: "How many times does Eugene Wigner appear on the 1957 physics list?",
            options: ["Seven", "Once, like Lee and Yang together on their single form", "Four, which is Bruno Rossi's count that year", "Nine, which is Emilio Segre's count that year"],
            correctIndex: 0,
            explanation: "Seven separate nominators put Wigner forward in 1957, each on a form naming him alone. Segre is named on nine forms that year and Rossi on four (lesson 11).",
            sourceLessonSlug: "the-1957-list",
          },
          {
            prompt: "Which three women appear on the 1957 physics nomination list?",
            options: ["Blau, Hodgkin and Goeppert-Mayer", "Wu, Blau and Hodgkin, but not Goeppert-Mayer", "Goeppert-Mayer, Wu and Marietta Blau", "Hodgkin, Goeppert-Mayer and Chien-Shiung Wu"],
            correctIndex: 0,
            explanation: "Marietta Blau nominated by Erwin Schrodinger, Dorothy Crowfoot Hodgkin by J. D. Bernal, and Maria Goeppert-Mayer by James Franck and again on a four-nominee form. Wu is on none of the rows (lesson 11).",
            sourceLessonSlug: "the-1957-list",
          },
          {
            prompt: "What does the presence of three women on the 1957 list show, in this course's careful phrasing?",
            options: ["The list was not one from which women were absent", "The physics of 1957 was fair to women", "The committee favoured women nominees that year", "Wu's absence must have had a technical explanation"],
            correctIndex: 0,
            explanation: "The claim is narrow on purpose: whatever explains her absence, it cannot be that the list had no room for women in it (lesson 11).",
            sourceLessonSlug: "the-1957-list",
          },
          {
            prompt: "Who nominated Marietta Blau for the 1957 physics prize?",
            options: ["Erwin Schrodinger", "J. D. Bernal, who nominated Dorothy Crowfoot Hodgkin", "James Franck, who nominated Maria Goeppert-Mayer", "Karl Johann Freudenberg, on a four-nominee form"],
            correctIndex: 0,
            explanation: "Schrodinger nominated Blau. Bernal nominated Hodgkin and Franck nominated Goeppert-Mayer, who also appears on Freudenberg's form (lesson 11).",
            sourceLessonSlug: "the-1957-list",
          },
          {
            prompt: "What figure do Larsson and Wyss give for the number of 1957 physics nominations?",
            options: ["Fifty-eight", "Sixty-six, agreeing with the online archive exactly", "Twenty-three, the total for Wu across all years", "Sixty-seven, including the header row of the online list"],
            correctIndex: 0,
            explanation: "They read the bound committee book and report 58. The online archive returns 66 rows, and the course prints both with their sources (lesson 11).",
            sourceLessonSlug: "the-1957-list",
          },
          {
            prompt: "What explanation does the course offer for the 66 against 58 discrepancy?",
            options: ["A guess about multi-nominee forms, labelled as a guess", "A confirmed difference in how the two sources define a year", "An error in the online archive, corrected since publication", "A transcription mistake in the Physics World article"],
            correctIndex: 0,
            explanation: "A form naming several people may be counted once in one place and once per nominee in the other. The course labels that a guess and reconciles nothing (lesson 11).",
            sourceLessonSlug: "the-1957-list",
          },
          {
            prompt: "What rule does lesson 11 say to carry out of this course about the two counts?",
            options: ["Never print either without saying which source it came from", "Always prefer the archive figure over the committee book", "Average the two figures when a range is needed", "Omit both until a third source settles the question"],
            correctIndex: 0,
            explanation: "Naming the source is what lets a later reader work out which number is right, which is the entire purpose of a locator (lesson 11).",
            sourceLessonSlug: "the-1957-list",
          },
          {
            prompt: "Why does lesson 11 say the committee did not pass Wu over in 1957?",
            options: ["A committee cannot pass over a name not in front of it", "The committee's minutes record that it discussed her at length", "The prize had been decided before nominations closed", "She had asked in writing not to be considered"],
            correctIndex: 0,
            explanation: "Passed over means considered and not chosen, which is not what happens to a name that was never submitted. What failed, failed before the committee met (lesson 11).",
            sourceLessonSlug: "the-1957-list",
          },
          {
            prompt: "How many rows come back from a search of all prizes, 1901 to 1976, for nominees whose name contains Wu?",
            options: ["Thirty-four", "Twenty-three, all of them Chien-Shiung Wu", "Sixty-six, the size of the 1957 physics list", "Eleven, the number belonging to other people"],
            correctIndex: 0,
            explanation: "Thirty-four rows, of which 23 are Chien-Shiung Wu and 11 belong to other people entirely (lesson 12).",
            sourceLessonSlug: "twenty-three-nominations",
          },
          {
            prompt: "Which of these people also appears in that Wu name search but is not Chien-Shiung Wu?",
            options: ["Wilhelm Wundt", "Polykarp Kusch, who nominated her in 1958", "Emilio Segre, who nominated her twice", "Leon Lederman, named beside her in 1971"],
            correctIndex: 0,
            explanation: "The eleven other rows are Wilhelm Wundt three times, Rene Wurmser, Lien-Teh Wu and a run of peace nominations for Gregers Winther Wulfsberg Gram. The others named here are nominators or co-nominees (lesson 12).",
            sourceLessonSlug: "twenty-three-nominations",
          },
          {
            prompt: "Under what form of her name are the three 1974 nominations filed?",
            options: ["C. S. Wu", "Chien-Shiung Wu, as in every other year", "Madame Wu, the form used in press coverage", "Professor Wu, matching her archive profession field"],
            correctIndex: 0,
            explanation: "Twenty of the twenty-three are filed as Chien-Shiung Wu and the three 1974 rows, numbers 48-1, 48-2 and 48-3, as C. S. Wu (lesson 12).",
            sourceLessonSlug: "twenty-three-nominations",
          },
          {
            prompt: "Across how many distinct years do the twenty-three nominations fall?",
            options: ["Ten", "Seventeen, one for each year from 1958 to 1974", "Twenty-three, one year per nomination", "Six, concentrated in the years around 1971"],
            correctIndex: 0,
            explanation: "1958, 1960, 1964, 1965, 1968, 1970, 1971, 1972, 1973 and 1974 (lesson 12).",
            sourceLessonSlug: "twenty-three-nominations",
          },
          {
            prompt: "How many distinct nominators filed the twenty-three nominations, counting N.N. as one?",
            options: ["Eighteen", "Twenty-three, one nominator per form", "Five, all of them Nobel laureates in physics", "Ten, one for each year in which a nomination was filed"],
            correctIndex: 0,
            explanation: "Eighteen distinct nominators against twenty-three forms, because several people filed more than once (lesson 12).",
            sourceLessonSlug: "twenty-three-nominations",
          },
          {
            prompt: "Which year carries the most nominations for her, and how many?",
            options: ["1971, with six", "1974, with three filed under C. S. Wu", "1958, with two from Kusch and Lamb", "1964, with three including one anonymised"],
            correctIndex: 0,
            explanation: "Six in 1971: records 72-0, 73-0, 74-0, 75-0, 76-0 and 118-0. 1964 and 1974 each carry three and 1958 carries two (lesson 12).",
            sourceLessonSlug: "twenty-three-nominations",
          },
          {
            prompt: "How many of her nominators already held the Nobel Prize in Physics when they filed?",
            options: ["Five", "One, Tsung-Dao Lee alone", "Eighteen, since every nominator must be a laureate", "None, which is what the course says made the campaign weak"],
            correctIndex: 0,
            explanation: "Kusch, Lamb, Lee, Segre and Rabi. Jack Steinberger, who filed in 1971, would win the prize in 1988 (lesson 12).",
            sourceLessonSlug: "twenty-three-nominations",
          },
          {
            prompt: "Which of her nominators won the Nobel Prize in Physics after filing rather than before?",
            options: ["Jack Steinberger", "Isidor Rabi, whose prize came in 1944", "Emilio Segre, whose prize came in 1959", "Polykarp Kusch, whose prize came in 1955"],
            correctIndex: 0,
            explanation: "Steinberger filed for her in 1971 and won in 1988. The other three already held the prize when they filed (lesson 12).",
            sourceLessonSlug: "twenty-three-nominations",
          },
          {
            prompt: "How many times did Tsung-Dao Lee nominate her?",
            options: ["Three", "Once, in 1964, and never again", "Six, once in each of the peak year's filings", "Never, on the open record"],
            correctIndex: 0,
            explanation: "1964, 1971 and 1972. The man who held half the 1957 prize spent eight years trying to get her one (lesson 12).",
            sourceLessonSlug: "twenty-three-nominations",
          },
          {
            prompt: "What is the only true statement the course allows about Yang and these nominations?",
            options: ["The public record through 1974 shows none by him", "He refused to nominate her when asked", "He nominated her once, in a year the archive withholds", "He nominated her every year from 1958 onward"],
            correctIndex: 0,
            explanation: "The archive closes at 1974 and Yang lived until 2025, so the statement is about a record, not about a man. The course refuses to make it a motive (lesson 12).",
            sourceLessonSlug: "twenty-three-nominations",
          },
          {
            prompt: "Which two people nominated her in 1958?",
            options: ["Kusch and Lamb", "Lee and Segre, filing separately for the same prize", "Serber and Wick, both of Columbia University", "Utiyama and Gerholm, who filed again in 1974"],
            correctIndex: 0,
            explanation: "Records 29-0 and 30-0, filed by Polykarp Kusch and Willis Eugene Lamb, Jr, who had shared the 1955 physics prize (lesson 12).",
            sourceLessonSlug: "twenty-three-nominations",
          },
          {
            prompt: "Who filed the 1960 nomination naming eight people including Wu?",
            options: ["David Henry Frisch", "Emilio Segre, who filed multi-nominee forms in 1964 and 1965", "Feza Gursey, who filed the 1970 form naming Cronin and Fitch", "Allan Maxwell Sachs, who filed the 1971 form naming Lederman"],
            correctIndex: 0,
            explanation: "Record 64-0 of 1960 names Wigner, Feynman, Schwinger, Deutsch, Goldhaber, Wu, Rossi and Van Allen, filed by David Henry Frisch (lesson 12).",
            sourceLessonSlug: "twenty-three-nominations",
          },
          {
            prompt: "How many times did Emilio Segre nominate her?",
            options: ["Twice, in 1964 and 1965", "Once, in 1964 alongside Charles Hard Townes", "Three times, matching Tsung-Dao Lee", "Never, though he held the 1959 prize"],
            correctIndex: 0,
            explanation: "Record 73-0 of 1964, naming her with Charles Hard Townes, and record 76-0 of 1965, naming her with Rossi, Feynman and Gell-Mann (lesson 12).",
            sourceLessonSlug: "twenty-three-nominations",
          },
          {
            prompt: "Which nominator filed for her in both 1968 and 1974?",
            options: ["Ryoyu Utiyama", "Henry Primakoff, who filed in 1973", "H Foley, who filed in 1971", "T Gerholm, who filed in 1974 only"],
            correctIndex: 0,
            explanation: "Utiyama filed record 87-0 in 1968 and record 48-3 in 1974. Primakoff, Foley and Gerholm each appear once (lesson 12).",
            sourceLessonSlug: "twenty-three-nominations",
          },
          {
            prompt: "In 1970, alongside which pair of physicists was she named on record 114-0?",
            options: ["Cronin and Fitch", "Goldhaber and Weisskopf, who appear on the other 1970 forms", "Rossi and Gell-Mann, from the 1965 filing", "Lederman and Sachs, from the 1971 filing"],
            correctIndex: 0,
            explanation: "Feza Gursey's 1970 form names James Watson Cronin, Val Logsdon Fitch and Wu. Goldhaber and Weisskopf are on the other two 1970 forms (lesson 12).",
            sourceLessonSlug: "twenty-three-nominations",
          },
          {
            prompt: "How many of the 1971 and 1972 filings came from Columbia colleagues?",
            options: ["Five", "One, from Tsung-Dao Lee alone", "All eight, since every nominator was at Columbia", "None, because Columbia colleagues are barred from nominating"],
            correctIndex: 0,
            explanation: "The course derives that count from the table itself, which is the point of printing the table in full (lesson 12).",
            sourceLessonSlug: "twenty-three-nominations",
          },
          {
            prompt: "What does the course say the pair of halves adds up to?",
            options: ["No nomination in 1957, then many that changed nothing", "A committee that reconsidered her every year", "A campaign that succeeded in 1974", "A record too thin to support any conclusion"],
            correctIndex: 0,
            explanation: "Neither half on its own is the story. In 1957 nobody nominated her; from 1958 to 1974 eighteen people did, twenty-three times, and it changed nothing (lesson 12).",
            sourceLessonSlug: "twenty-three-nominations",
          },
          {
            prompt: "What does the archive record for a nomination include about each person named?",
            options: ["Name, gender, dates, profession, institution and place", "Only the name and the year of the nomination", "The nominator's written justification in full", "The committee's response to the nomination"],
            correctIndex: 0,
            explanation: "Record 15049 gives name, gender, years of birth and death, profession, university, city, state and country, plus the prize year if the person later won (lesson 10).",
            sourceLessonSlug: "what-the-nomination-archive-is",
          },
          {
            prompt: "What does the Comments field on record 39-0 say cannot be released?",
            options: ["Information regarding nominations to Chen Ning Yang", "The names of every nominator for the 1957 physics prize", "The committee's reports from September 1957", "The list of nominations filed after the deadline"],
            correctIndex: 0,
            explanation: "The note cites the statutes governing the Nobel archives and the rule that material relating to a named person's research work may not be released during that person's lifetime (lesson 10).",
            sourceLessonSlug: "what-the-nomination-archive-is",
          },
          {
            prompt: "What does that withholding note do to every count taken from the archive?",
            options: ["It stops any of them being called exhaustive", "It makes all of them unusable as evidence", "It shifts the counts upward by a known amount", "It applies only to the 1957 prize and no other"],
            correctIndex: 0,
            explanation: "The publishing body says on its own page that some material is withheld, so no count from it is complete. The course prints the caveat beside the counts every time (lesson 10).",
            sourceLessonSlug: "what-the-nomination-archive-is",
          },
          {
            prompt: "What does N.N. mean on a nomination record?",
            options: ["A nominator whose name the archive is not printing", "A nomination that was withdrawn before the deadline", "A nominee who declined to be considered", "A form with no nominee named on it"],
            correctIndex: 0,
            explanation: "It is the database's placeholder for an unprinted nominator name. Two of Wu's twenty-three records carry it, in 1964 and 1974 (lesson 10).",
            sourceLessonSlug: "what-the-nomination-archive-is",
          },
          {
            prompt: "Why does the course decline to name the physicist behind an N.N. entry?",
            options: ["The database does not name them", "The physicist's family has objected in writing", "No secondary source has ever suggested a name", "Naming a nominator is forbidden by the Nobel statutes"],
            correctIndex: 0,
            explanation: "Secondary accounts have suggested a name. An identification the source itself does not support is the kind of claim this course exists to refuse (lesson 10).",
            sourceLessonSlug: "what-the-nomination-archive-is",
          },
          {
            prompt: "What is the latest year returned by the archive search used in this course?",
            options: ["1974", "1976, the end year the search specified", "1997, the year of Wu's death", "2025, the year of Yang's death"],
            correctIndex: 0,
            explanation: "The search ran to 1976 and nothing came back later than 1974, which is where the archive's coverage fell on 20 September 2026 (lesson 10).",
            sourceLessonSlug: "what-the-nomination-archive-is",
          },
          {
            prompt: "Which two endpoints does this course name for the nomination archive?",
            options: ["search.php and list.php", "index.php and results.php", "nominations.php and archive.php", "query.php and detail.php"],
            correctIndex: 0,
            explanation: "search.php takes a prize, a start year, an end year and a name; list.php takes a prize and a year. Each row links to a detail page, show.php (lessons 10 and 13).",
            sourceLessonSlug: "what-the-nomination-archive-is",
          },
          {
            prompt: "What kind of document does lesson 10 say a nomination record is?",
            options: ["Signed, dated and numbered", "Anonymous and undated by design", "A summary written decades after the fact", "A private letter never intended for publication"],
            correctIndex: 0,
            explanation: "Lesson 10 tells you to hold that thought until lesson 18, where a nomination is compared with an untraceable quotation (lesson 10).",
            sourceLessonSlug: "what-the-nomination-archive-is",
          },
          {
            prompt: "What does the course say you need in order to run this search?",
            options: ["A browser and nothing else", "An academic affiliation and a reader's ticket", "A written request to the Royal Swedish Academy", "A subscription to the Nobel Foundation's archive service"],
            correctIndex: 0,
            explanation: "There is no login, no fee and no request form. That is what makes the exercise possible and the counts checkable (lesson 13).",
            sourceLessonSlug: "run-the-search-yourself",
          },
          {
            prompt: "What does the archive do when it does not understand a request?",
            options: ["Serves a page anyway, with a successful status", "Returns an error message naming the bad parameter", "Refuses the connection until the query is corrected", "Redirects to the archive home page"],
            correctIndex: 0,
            explanation: "It shows a different year's list. That failure mode is the whole of lesson 19, and the exercise treats it as part of the work rather than a footnote (lesson 13).",
            sourceLessonSlug: "run-the-search-yourself",
          },
          {
            prompt: "What should you do if your count disagrees with this course's count?",
            options: ["Write it down as a finding", "Assume you counted wrong and use the printed number", "Stop the exercise and report a broken page", "Average the two counts and continue"],
            correctIndex: 0,
            explanation: "A disagreement is information. Two independent passes a day apart agreed on every number, which is a reason to expect agreement, not a reason to skip the check (lesson 13).",
            sourceLessonSlug: "run-the-search-yourself",
          },
          {
            prompt: "What does lesson 13 ask you to notice about every row you open?",
            options: ["It is a document with a number on it", "It carries the nominator's full written justification", "It has been checked by the Nobel Committee for accuracy", "It records whether the nomination was discussed"],
            correctIndex: 0,
            explanation: "A year, a form number, a named nominee and in most cases a named nominator. Section 5 sets that against a famous quotation nobody can trace (lesson 13).",
            sourceLessonSlug: "run-the-search-yourself",
          },
          {
            prompt: "In how many of the twenty-three records is the nominator named?",
            options: ["Twenty-one", "All twenty-three, with no anonymised entries", "Eighteen, matching the count of distinct nominators", "Twenty, with three filed under initials only"],
            correctIndex: 0,
            explanation: "Two carry N.N. instead of a name, so twenty-one name their nominator (lessons 10 and 13).",
            sourceLessonSlug: "run-the-search-yourself",
          },
          {
            prompt: "What is a detail page in this archive?",
            options: ["The per-record view carrying every field", "The year list showing all nominations for one prize", "The search form used to build a query", "A printable summary of a laureate's career"],
            correctIndex: 0,
            explanation: "It is reached as show.php with a record id, and every row of the Section 4 table was read on one (lesson 13 vocabulary).",
            sourceLessonSlug: "run-the-search-yourself",
          },
          {
            prompt: "What is an independent pass, as lesson 13 uses the term?",
            options: ["The same check repeated by a different reader or on a different day", "A search run with different query parameters", "A review of the course by an outside expert", "A second copy of a record held in another archive"],
            correctIndex: 0,
            explanation: "It is how counting errors get caught, and the course reports that two passes a day apart agreed (lesson 13 vocabulary).",
            sourceLessonSlug: "run-the-search-yourself",
          },
          {
            prompt: "What does a header row have to do with counting nominations?",
            options: ["It must be subtracted before a row count is a record count", "It must be included, since it names a nominee too", "It contains the year totals the archive calculates", "It is absent from the year list view"],
            correctIndex: 0,
            explanation: "Sixty-seven table rows minus one header gives 66 nominations. Forgetting the subtraction is how a count goes wrong by one (lesson 11 vocabulary).",
            sourceLessonSlug: "the-1957-list",
          },
          {
            prompt: "What is a multi-nominee form?",
            options: ["One nomination naming several people", "A form submitted jointly by several nominators", "A form naming a nominee in more than one prize category", "A form that has been filed in more than one year"],
            correctIndex: 0,
            explanation: "Frisch's 1960 form names eight people including Wu. Such forms are the likeliest source of a discrepancy between two tallies (lesson 11 vocabulary).",
            sourceLessonSlug: "the-1957-list",
          },
          {
            prompt: "What does open record mean in this course's vocabulary?",
            options: ["What a public archive shows, as distinct from what happened", "A record that has never been sealed by any statute", "A nomination that remains under consideration", "An archive with no end date on its coverage"],
            correctIndex: 0,
            explanation: "It is the only thing a claim about an archive may describe, which is why the statement about Yang is carefully limited (lesson 12 vocabulary).",
            sourceLessonSlug: "twenty-three-nominations",
          },
          {
            prompt: "What does sitting laureate mean here?",
            options: ["A nominator who already held the prize when filing", "A laureate serving on the Nobel Committee", "A laureate attending the ceremony in person", "A nominee who has won the prize in another category"],
            correctIndex: 0,
            explanation: "Five of her nominators were sitting laureates in physics: Kusch, Lamb, Lee, Segre and Rabi (lesson 12 vocabulary).",
            sourceLessonSlug: "twenty-three-nominations",
          },
          {
            prompt: "Who filed record 100-0 in 1972?",
            options: ["Isidor Rabi", "Tsung-Dao Lee, who filed record 99-0 the same year", "Henry Primakoff, who filed the following year", "Gian Carlo Wick, who filed in 1971"],
            correctIndex: 0,
            explanation: "Rabi, who held the 1944 physics prize, filed 100-0 in 1972. Lee filed 99-0 that year (lesson 12).",
            sourceLessonSlug: "twenty-three-nominations",
          },
          {
            prompt: "Who filed the only 1973 nomination for her?",
            options: ["Henry Primakoff", "Ryoyu Utiyama, who filed in 1968 and 1974", "Robert Serber, who filed in 1971", "T Gerholm, who filed in 1974"],
            correctIndex: 0,
            explanation: "Record 113-0 of 1973, filed by Henry Primakoff, is the only one that year (lesson 12).",
            sourceLessonSlug: "twenty-three-nominations",
          },
          {
            prompt: "Which 1971 form names her alongside Leon Lederman?",
            options: ["Record 118-0, filed by Allan Maxwell Sachs", "Record 72-0, filed by H Foley", "Record 75-0, filed by Jack Steinberger", "Record 76-0, filed by Gian Carlo Wick"],
            correctIndex: 0,
            explanation: "Five of the 1971 forms name her alone; 118-0 is the one naming her with Lederman (lesson 12).",
            sourceLessonSlug: "twenty-three-nominations",
          },
          {
            prompt: "How does the course describe the 1957 physics list as a whole?",
            options: ["A long, crowded list of serious candidates", "A short list of three or four obvious names", "A list dominated by theorists with no experimenters", "A list the archive says is complete and certified"],
            correctIndex: 0,
            explanation: "Most of the people on it did not win that year, which is worth seeing before drawing conclusions from any single absence (lesson 11).",
            sourceLessonSlug: "the-1957-list",
          },
          {
            prompt: "What does the course tell you to suspect first if a search returns something odd?",
            options: ["That the query never ran", "That the archive has changed its holdings", "That the count was taken from the wrong prize", "That a record has been withdrawn under the statutes"],
            correctIndex: 0,
            explanation: "The archive answers requests it does not understand with a page anyway, so an odd result is more likely a failed query than a surprising fact (lesson 13).",
            sourceLessonSlug: "run-the-search-yourself",
          },
          {
            prompt: "What is a query parameter?",
            options: ["A value in a web address telling a service what to look for", "A field printed on a nomination record", "A rule in the Nobel statutes governing releases", "A limit on how many rows a search may return"],
            correctIndex: 0,
            explanation: "The prize, the years and the name are the query parameters of the search used here, and lesson 19 is about what happens when they are ignored (lesson 13 vocabulary).",
            sourceLessonSlug: "run-the-search-yourself",
          },
          {
            prompt: "How many of the twenty-three nominations name her alone on the form?",
            options: ["Sixteen", "All twenty-three, since she was always nominated singly", "Three, the 1974 filings under C. S. Wu", "Six, the peak-year filings of 1971"],
            correctIndex: 0,
            explanation: "Sixteen name her alone and seven name her alongside other physicists. Counting the solo rows is one of the derivations the course says is re-derivable from the table itself (lesson 12).",
            sourceLessonSlug: "twenty-three-nominations",
          },
          {
            prompt: "What did the course do with every row in the Section 4 table?",
            options: ["Read it on its own detail page", "Copied it from the Physics World article", "Reconstructed it from the year lists alone", "Took it from the brief without checking"],
            correctIndex: 0,
            explanation: "Each row was read on show.php, and five records were re-read in full for this build on 2026-09-20 (lesson 12 sources).",
            sourceLessonSlug: "twenty-three-nominations",
          },
          {
            prompt: "What makes this credit dispute different from one that ends in an argument about a closed room?",
            options: ["The nominations are published and searchable", "The committee has released its full deliberations", "Every participant left a written memoir", "The prize was later reissued with a correction"],
            correctIndex: 0,
            explanation: "The Nobel Foundation publishes who nominated whom, free and without a login, which is why this course can put numbers where other cases have adjectives (lesson 10).",
            sourceLessonSlug: "what-the-nomination-archive-is",
          },
          {
            prompt: "Which record number belongs to the 1958 nomination by Willis Eugene Lamb, Jr?",
            options: ["30-0", "29-0, which is Polykarp Kusch's nomination", "43-0, which is Lee's 1964 nomination", "39-0, which is the Lee and Yang form"],
            correctIndex: 0,
            explanation: "Kusch filed 29-0 and Lamb filed 30-0, both in 1958, both naming her alone (lesson 12).",
            sourceLessonSlug: "twenty-three-nominations",
          },
          {
            prompt: "What are the three 1974 record numbers?",
            options: ["48-1, 48-2 and 48-3", "72-0, 73-0 and 74-0, which are 1971 records", "29-0, 30-0 and 43-0, spread across three years", "99-0, 100-0 and 113-0, from 1972 and 1973"],
            correctIndex: 0,
            explanation: "The 1974 filings share a form number with different suffixes, filed by T Gerholm, N.N. and Ryoyu Utiyama (lesson 12).",
            sourceLessonSlug: "twenty-three-nominations",
          },
          {
            prompt: "Which nominator's record gives Wu's profession as Professor, particle and experimental physicist?",
            options: ["Robert Serber's 1971 record", "Polykarp Kusch's 1958 record", "David Henry Frisch's 1960 record", "Emilio Segre's 1964 record"],
            correctIndex: 0,
            explanation: "Record 21865, Physics 1971 number 74-0, carries that fuller profession field; the 1958 record gives simply Professor (lesson 12 sources).",
            sourceLessonSlug: "twenty-three-nominations",
          },
          {
            prompt: "How many of the twenty-three nominations arrived before the 1957 prize was awarded?",
            options: ["None", "Two, from Kusch and Lamb", "One, filed just before the deadline", "Six, all in the peak year"],
            correctIndex: 0,
            explanation: "Every one of them is later. The earliest is 1958, the year after the prize (lesson 12).",
            sourceLessonSlug: "twenty-three-nominations",
          },
          {
            prompt: "What does exhaustive mean in lesson 10's vocabulary?",
            options: ["Covering everything there is", "Requiring a great deal of effort to compile", "Checked by two independent readers", "Published without any withheld material"],
            correctIndex: 0,
            explanation: "No count drawn from a database carrying a withholding note can claim to be exhaustive, which is why the caveat travels with every number here (lesson 10 vocabulary).",
            sourceLessonSlug: "what-the-nomination-archive-is",
          },
          {
            prompt: "What form does a nomination record number take?",
            options: ["A pair of numbers such as 29-0 or 48-3", "A single sequential number for each prize year", "The nominator's initials followed by the year", "A checksum generated when the record was digitised"],
            correctIndex: 0,
            explanation: "The second part distinguishes filings that share a form number, as the three 1974 rows do (lesson 10).",
            sourceLessonSlug: "what-the-nomination-archive-is",
          },
          {
            prompt: "Which physicist appears three times in the Wu name search but is not a physicist at all?",
            options: ["Wilhelm Wundt", "Lien-Teh Wu, nominated in medicine in 1935", "Rene Wurmser, nominated in chemistry in 1942", "Gregers Winther Wulfsberg Gram, nominated for peace"],
            correctIndex: 0,
            explanation: "Wundt's three rows are medicine nominations. The point of the step is that a name search returns people who are not your subject (lesson 12).",
            sourceLessonSlug: "twenty-three-nominations",
          },
          {
            prompt: "What does the course say the twenty-minute exercise lets you avoid?",
            options: ["Taking its numbers on trust", "Reading the whole of Section 4", "Consulting any secondary source at all", "Learning the physics of the experiment"],
            correctIndex: 0,
            explanation: "Every number in Section 4 came out of a database anyone can open, which is the reason the subject was worth building (lesson 13).",
            sourceLessonSlug: "run-the-search-yourself",
          },
          {
            prompt: "What should you work from while doing the exercise?",
            options: ["The page in front of you", "Your memory of the lesson you just read", "The table printed in lesson 12", "A summary written by a secondary source"],
            correctIndex: 0,
            explanation: "Lesson 13 says to work from the page, not from memory and not from this course, because the check is only worth something if it is independent (lesson 13).",
            sourceLessonSlug: "run-the-search-yourself",
          },
          {
            prompt: "What does the 1957 prize year show about the relationship between nominations and outcomes?",
            options: ["One nomination was enough to win that year", "A large number of nominations guarantees a prize", "Nominations are only counted in the year of publication", "The committee ignores nomination counts entirely"],
            correctIndex: 0,
            explanation: "Lee and Yang were nominated once, on one form, and won. Wu was nominated twenty-three times across sixteen years and did not (lessons 11 and 12).",
            sourceLessonSlug: "the-1957-list",
          },
          {
            prompt: "Which 1970 nomination names her alongside Victor Weisskopf?",
            options: ["Record 105-0, filed by U Hauser", "Record 84-0, filed by H Morinaga", "Record 114-0, filed by Feza Gursey", "Record 87-0, filed by Ryoyu Utiyama"],
            correctIndex: 0,
            explanation: "Hauser's form names Weisskopf and Wu; Morinaga's names Goldhaber and Wu; Gursey's names Cronin, Fitch and Wu (lesson 12).",
            sourceLessonSlug: "twenty-three-nominations",
          },
          {
            prompt: "What does the course mean by saying every derivation is re-derivable from the table?",
            options: ["A reader can recount the totals from the printed rows", "The archive recalculates them automatically", "The totals were supplied by the Nobel Foundation", "The figures come from a statistical model"],
            correctIndex: 0,
            explanation: "Printing the full table is what lets a reader check the totals for years, nominators and laureates without going back to the archive (lesson 12).",
            sourceLessonSlug: "twenty-three-nominations",
          },
          {
            prompt: "Which year in the table carries exactly three nominations besides 1974?",
            options: ["1964", "1958, with filings by Kusch and Lamb", "1972, with filings by Lee and Rabi", "1973, with a single filing by Primakoff"],
            correctIndex: 0,
            explanation: "1964 carries records 43-0, 44-0 and 73-0. 1970 also carries three. 1958 and 1972 carry two and 1973 carries one (lesson 12).",
            sourceLessonSlug: "twenty-three-nominations",
          },
          {
            prompt: "What does lesson 10 say you should hold in mind until lesson 18?",
            options: ["That a nomination record is a signed, dated, numbered document", "That the archive withholds material under the statutes", "That two records give the nominator as N.N.", "That the archive's coverage ends in 1974"],
            correctIndex: 0,
            explanation: "Lesson 18 sets that against a quotation that cannot be traced to any source, which is the comparison the whole course turns on (lesson 10).",
            sourceLessonSlug: "what-the-nomination-archive-is",
          },
          {
            prompt: "On how many 1957 forms is Emilio Segre named, counting solo and shared forms together?",
            options: ["Nine", "Six, which is Pyotr Kapitsa's count that year", "Four, which is Bruno Rossi's count that year", "Seven, which is Eugene Wigner's count that year"],
            correctIndex: 0,
            explanation: "Six forms name Segre alone and three more name him with others. Kapitsa is on six, Rossi on four and Wigner on seven (lesson 11).",
            sourceLessonSlug: "the-1957-list",
          },
          {
            prompt: "What is true of every one of the seven 1957 forms naming Eugene Wigner?",
            options: ["Each names him alone", "Each was filed by the same nominator", "Each also names Lee and Yang", "Each was filed after the annual deadline"],
            correctIndex: 0,
            explanation: "Seven different nominators, seven forms, his name alone on each. That is the densest single candidacy on the 1957 list (lesson 11).",
            sourceLessonSlug: "the-1957-list",
          },
          {
            prompt: "What does lesson 13 say makes a count worth having?",
            options: ["That anyone can reproduce it in a free public database", "That it was taken by an expert in prize history", "That it matches a figure published elsewhere", "That it was produced by a program rather than by hand"],
            correctIndex: 0,
            explanation: "The whole argument rests on a count of zero, and a reproducible count is the only kind that does not have to be taken on trust (lesson 13).",
            sourceLessonSlug: "run-the-search-yourself",
          },
          {
            prompt: "Which field on a nomination record tells you whether a nominator later won the prize?",
            options: ["The awarded-prize line under their name", "The number in the form's second position", "The comments field quoting the statutes", "The profession field recorded for them"],
            correctIndex: 0,
            explanation: "Record 15049 shows Polykarp Kusch as awarded the Nobel Prize in Physics 1955 under his entry, which is how the five sitting laureates were identified (lesson 10).",
            sourceLessonSlug: "what-the-nomination-archive-is",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5 — What the record does not show, and who says so
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-physicists-who-contest-it",
      title: "14 · The physicists who contest the framing",
      section: "Section 5 · What the record does not show, and who says so",
      body: `A course that printed only Section 4 would be doing to the evidence exactly what it accuses the popular story of doing. So here is the other side, in the words of the people who hold it, none of them anonymous and none of them paraphrased.

All four quotations below come from Magdolna Hargittai's 2012 article in *Physics World*, which interviewed or corresponded with the physicists it quotes.

**Valentine Telegdi, interviewed in 2002.** "I don't think that anybody among the experimentalists deserves the Nobel prize very much in this case. If an experimentalist performs an experiment with known techniques and on top of it that experiment has been clearly suggested by the theorists, where is the merit? This is true for me, too."

That last sentence is why the quotation carries weight. Telegdi was one of the other experimenters: reference 8 of Lee's Nobel lecture lists J. I. Friedman and V. L. Telegdi, *Physical Review* 105 (1957) 1681. He is arguing himself out of the prize along with her.

**James Cronin, interviewed in 2002.** "There were four people ... who did the cobalt-60 experiment and they all contributed to it in a major way. Ms Wu is often given the credit but I think that the most dispassionate view would be to recognize that those other guys were very important and it would not have happened without them."

Cronin is an interesting witness for a reason the archive supplies: in 1970 Feza Gursey filed a nomination naming Cronin, Val Logsdon Fitch and Wu on the same form. He is not a hostile party.

**Nicholas Kurti and Christine Sutton, in a note Hargittai quotes.** "The purpose of this note is to state for the record that the NBS parity violation experiment was a collaborative team effort in which nuclear physicists and cryophysicists pooled their knowledge and expertise to carry out an experiment proposed by Lee and Yang."

One honest gap: the publication the note appeared in could not be identified from the page as fetched, so this course quotes it as Hargittai quotes it and files the question as a research check rather than inventing a citation.

**Hargittai's own conclusion.** "My view is that Wu made an outstanding contribution to bringing down the axiom of parity conservation in weak interactions. But to say it was an injustice that she did not win a Nobel prize is an oversimplification of a complex story."

**And a procedural argument, reported rather than asserted.** Anders Barany, a former secretary of the Nobel Committee for Physics, told Hargittai that the awarded work must have been published before the year of the prize, which in this case would mean before 1 January 1957. All three of the 1957 experimental papers appeared during 1957: Wu and colleagues at *Physical Review* 105, 1413; Garwin, Lederman and Weinrich at 105, 1415; Friedman and Telegdi at 105, 1681. On Barany's account of the rule, no experimentalist was eligible that year.

That is an account of a rule offered by a former officer, not the text of a statute. This course did not read the Nobel Foundation statutes, so it does not state the rule, and the question is filed as a research check.

**What these four arguments do and do not settle.** They settle that serious physicists, including one of her competitors and one of her co-nominees, have publicly argued against the injustice framing on grounds that have nothing to do with her sex. They do not settle the 1957 nomination question, because none of them is about nominations at all. Every one of them is an argument about merit, and Section 4 showed that the merit question was never reached.

:::reveal Why does Telegdi's argument carry extra weight? ||| Because he was one of the other experimenters, published in the same volume, and his argument disqualifies himself along with her.

:::reveal What do the four contesting arguments not settle? ||| The 1957 nomination question. Every one of them is an argument about merit, and the merit question was never reached because she was never nominated that year.

## Vocabulary
- **Framing**: the way a case is presented before any evidence is weighed, here the injustice reading of the 1957 prize.
- **Hostile party**: someone with a stake in the outcome, which Cronin is not, since he was nominated jointly with Wu in 1970.
- **Procedural argument**: a claim that a rule of process decided the outcome, as distinct from a claim about merit.
- **Former officer**: someone who held an official post and speaks about its rules afterwards, whose account is evidence but is not the rule itself.

## Sources
Hargittai, M. (2012, September 13). Credit where credit's due? *Physics World*. https://physicsworld.com/a/credit-where-credits-due/ (Web article, unpaginated; the Telegdi and Cronin interviews are quoted in the section weighing the experimental contribution, the Kurti and Sutton note in the same passage, Barany's account of the deadline shortly after, and Hargittai's conclusion in the closing paragraphs.)
Lee, T. D. (1957, December 11). *Weak interactions and nonconservation of parity* [Nobel lecture]. Nobel Foundation. https://www.nobelprize.org/uploads/2018/06/lee-lecture.pdf (Printed p. 418, PDF page 13, reference 8: R. L. Garwin, L. M. Lederman and M. Weinrich, *Phys. Rev.*, 105 (1957) 1415; J. I. Friedman and V. L. Telegdi, *Phys. Rev.*, 105 (1957) 1681.)
Nobel Prize Outreach. (n.d.-b). *Nomination archive* [Database]. https://www.nobelprize.org/nomination/archive/search.php (Physics 1970, record 114-0: nominees James Watson Cronin, Val Logsdon Fitch and Chien-Shiung Wu, nominator Feza Gursey. Retrieved 2026-09-20.)`,
    },
    {
      slug: "what-a-committee-reader-wrote",
      title: "15 · What a committee reader wrote, and who reports it",
      section: "Section 5 · What the record does not show, and who says so",
      body: `Everything in this lesson reaches you at one remove, and the remove is the lesson. Read how it is written as carefully as what it says.

**The source.** Mats Larsson and Ramon Wyss published an article in *Physics World* on 3 February 2026. They state that they viewed the 1957 physics file at the Center for History of Science at the Royal Swedish Academy of Sciences on 13 November 2025, and that they were the first to do so, the file having been sealed while a named laureate was alive. This course did not go to Stockholm and did not see those documents. Every sentence below is what Larsson and Wyss report.

**What they say the committee proposed, on 20 September 1957.** They reproduce the report as an image and translate it: "the committee proposes that the 1957 Nobel Prize in Physics be awarded jointly to: Dr T D Lee, New York, and Dr C N Yang, Princeton, for their profound investigation of the so-called parity laws, which has led to the discovery of new properties of elementary particles." They give the signatories as Manne Siegbahn as chair, with Gudmund Borelius, Erik Hulthen, Oskar Klein, Erik Rudberg and Ivar Waller.

Set that beside the published citation from lesson 7 and you can see a sentence being polished between September and December. That comparison is available to you only because two named people went and looked.

**What they say about the internal reports.** Hulthen wrote the experimental report and described Wu's technical difficulties in detail. Klein wrote the theoretical report and gave about half of its four pages to Eugene Wigner, who carried seven nominations that year. Larsson and Wyss observe that every physicist named in Klein's report except Wu eventually won a Nobel Prize.

**And the finding that replaces the motive everyone assumes.** When six nominations for Wu arrived in 1971, the committee commissioned Bengt Nagel of the Royal Institute of Technology to assess the theoretical importance of her experiments. Larsson and Wyss quote him. He wrote that the three experiments had "without doubt been of great importance for our understanding of the weak interaction". He also wrote that "the experiments, at least the last two, have been conducted to certain aspects as commissioned or direct suggestions of theoreticians", and that "I feel somewhat hesitant whether their theoretical importance is a sufficient motivation to render Wu the Nobel prize."

**Now look at what that is, and what it is not.** It is not a statement about her sex. It is the same argument Valentine Telegdi made in lesson 14, and made about himself: that an experiment carried out at a theorist's suggestion earns less. It is also the argument that Wu's own published account would undercut, if that account can be obtained and confirms that she proposed the cobalt-60 method. Three positions, one triangle, and the document that would settle the middle of it is sitting in a research queue.

**How this course is allowed to say all that.** Only like this: Larsson and Wyss, who read the file, report that Nagel wrote these words. Not "the committee decided". Not "the reason was". A named account of a document is evidence about what that document says, and it is not the document. The difference is what stops a checkable case from turning into a story.

:::reveal What did Bengt Nagel write about the theoretical importance of Wu's experiments? ||| That they had without doubt been of great importance for understanding the weak interaction, but that he felt hesitant whether their theoretical importance was sufficient motivation to award her the prize.

:::reveal Why may this course never write the sentence "the committee decided that"? ||| Because it has not seen the committee's documents. It has a named account of them by two authors who did, which is evidence about the documents rather than the documents themselves.

## Vocabulary
- **At one remove**: reached through an account by someone who saw the source, rather than through the source.
- **Commissioned assessment**: an expert report requested by a committee about a particular candidate, as Nagel's 1971 report was.
- **Signatory**: a person whose name is on a document as having agreed to it, here the six members named on the September 1957 report.
- **Attribution**: naming who says a thing, which is what allows a course to use a claim it cannot verify directly.

## Sources
Larsson, M., & Wyss, R. (2026, February 3). Twenty-three nominations, yet no Nobel prize: How Chien-Shiung Wu missed out on the top award in physics. *Physics World*. https://physicsworld.com/a/twenty-three-nominations-yet-no-nobel-prize-how-chien-shiung-wu-missed-out/ (Web article, unpaginated. The committee report of 20 September 1957 is reproduced as an image with a translation; the accounts of Hulthen's and Klein's reports follow it; the Nagel quotations are in the section on the 1971 nominations. The authors state they viewed the file on 13 November 2025.)`,
    },
    {
      slug: "two-quotations-that-could-not-be-traced",
      title: "16 · Two quotations that could not be traced",
      section: "Section 5 · What the record does not show, and who says so",
      body: `Two quotations turn up in almost every retelling of this case. Neither appears in this course, and the reason they do not is worth more than they are.

**The first** has J. Robert Oppenheimer saying publicly that Wu should have shared the prize. **The second** has Jack Steinberger calling her omission the biggest mistake in the Nobel committee's history.

The seed note that started this course attributed both to two named articles in *Physics World*: "Overlooked for the Nobel: Chien-Shiung Wu" from 2020 and "Twenty-three nominations, yet no Nobel prize" from 2026.

**Both articles were fetched in full and read. Neither contains the word Oppenheimer. Neither contains the word Steinberger.** The attribution is simply wrong.

A search beyond those articles found the quotations circulating in blog posts, a student newspaper and an encyclopedia entry, with no primary source anywhere. A secondary source is a pointer to follow, never a citation to rest on, and both pointers led nowhere.

**So both quotations are unverified, and an unverified claim does not appear in a lesson.** Not with a hedge, not with a maybe, not in a footnote. They may well be real. Somebody may find the interview or the letter tomorrow. Until somebody does, printing them would put this course in the position of being the next link in a chain nobody can trace, which is precisely the failure it is teaching you to catch.

**Here is the part that makes this bearable rather than merely careful.** Neither quotation is needed, and the reason is in Section 4.

Jack Steinberger did not need to call anything a mistake in an interview. He filed a nomination for her, under his own name, for the 1971 prize. It is record 75-0, it has a number, and you can open it. Isidor Rabi filed in 1972. Robert Serber, Gian Carlo Wick and Allan Maxwell Sachs filed in 1971. Emilio Segre filed in 1964 and again in 1965. Polykarp Kusch and Willis Lamb filed in 1958. Tsung-Dao Lee filed three times.

Twenty-three signed, dated, numbered documents were verified for this course. Zero quotations were. That contrast is not an accident of what happened to be available. It is a fact about what kinds of evidence survive and can be checked, and lesson 18 turns it into a working rule.

**A note on the encyclopedia.** Wikipedia is a pointer, never a citation. The right use of it is to follow its references to the thing it cites and read that. When the references run out before reaching a source, as they did here, the correct conclusion is not that the claim is false. It is that the claim is unverified, which is a different and more useful thing to know.

:::reveal What did fetching the two Physics World articles in full establish about the Oppenheimer and Steinberger quotations? ||| That neither article contains either name, so the attribution carried by the seed note was wrong.

:::reveal What is the correct conclusion when a chain of references runs out before reaching a source? ||| That the claim is unverified, which is different from the claim being false, and which means it may not be asserted.

## Vocabulary
- **Unverified**: not confirmed against a source that was fetched and read, a status that bars a claim from a lesson entirely.
- **Pointer**: a secondary source worth following to the thing it cites, which is the only legitimate use of an encyclopedia entry here.
- **Chain of references**: the trail from a retelling back to a primary source, which in this case ends before it arrives.
- **Seed note**: the internal note that proposed this subject, itself a claim that had to be checked, and which was wrong on this point.

## Sources
Hargittai, M. (2012, September 13). Credit where credit's due? *Physics World*. https://physicsworld.com/a/credit-where-credits-due/ (Fetched in full and read; searched for both names, with no occurrence of either.)
Larsson, M., & Wyss, R. (2026, February 3). Twenty-three nominations, yet no Nobel prize: How Chien-Shiung Wu missed out on the top award in physics. *Physics World*. https://physicsworld.com/a/twenty-three-nominations-yet-no-nobel-prize-how-chien-shiung-wu-missed-out/ (Fetched in full and read for the brief on 2026-09-19; contains neither the word Oppenheimer nor the word Steinberger.)
Physics World. (2020, October 2). Overlooked for the Nobel: Chien-Shiung Wu. https://physicsworld.com/a/overlooked-for-the-nobel-chien-shiung-wu/ (Fetched in full and read for the brief on 2026-09-19; contains neither name.)
Nobel Prize Outreach. (n.d.-b). *Nomination archive* [Database]. https://www.nobelprize.org/nomination/archive/search.php (Physics 1971, record 75-0: nominee Chien-Shiung Wu, nominator Jack Steinberger. Retrieved 2026-09-20.)`,
    },
    {
      slug: "section-5-quiz",
      title: "Section 5 quiz · What the record does not show, and who says so",
      section: "Section 5 · What the record does not show, and who says so",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Why does the course print the arguments against the injustice framing?",
            options: ["Printing only one side would misuse the evidence", "The brief required a balanced word count for each side", "The contesting physicists asked for a right of reply", "The archive evidence alone is too thin to support a course"],
            correctIndex: 0,
            explanation: "A course that printed only Section 4 would be doing to the evidence exactly what it accuses the popular story of doing (lesson 14).",
            sourceLessonSlug: "the-physicists-who-contest-it",
          },
          {
            prompt: "Where do the four contesting quotations in lesson 14 come from?",
            options: ["Hargittai's 2012 Physics World article", "Larsson and Wyss's 2026 Physics World article", "The 1957 committee file in Stockholm", "The Nobel Foundation's nomination archive"],
            correctIndex: 0,
            explanation: "Hargittai interviewed or corresponded with the physicists she quotes, and the course quotes them as she does, naming her throughout (lesson 14).",
            sourceLessonSlug: "the-physicists-who-contest-it",
          },
          {
            prompt: "What is Valentine Telegdi's argument about experimentalists in this case?",
            options: ["Where is the merit, if the theorists suggested it", "That the experiment was too technically demanding to reward", "That the Bureau of Standards deserved the credit rather than Columbia", "That the prize should have gone to five people instead of two"],
            correctIndex: 0,
            explanation: "He asks where the merit is if an experimentalist uses known techniques on an experiment clearly suggested by theorists, and adds that this is true for him too (Hargittai, 2012).",
            sourceLessonSlug: "the-physicists-who-contest-it",
          },
          {
            prompt: "Why does Telegdi's argument carry extra weight in this course's reading?",
            options: ["He disqualifies himself along with her", "He served on the Nobel Committee for Physics", "He was the first to publish a parity result in 1957", "He was one of Wu's nominators in the archive"],
            correctIndex: 0,
            explanation: "Telegdi was one of the other experimenters, published at Physical Review 105, 1681 with Friedman, and his argument applies to his own work (lesson 14).",
            sourceLessonSlug: "the-physicists-who-contest-it",
          },
          {
            prompt: "Where is Telegdi's own 1957 experimental paper cited?",
            options: ["Reference 8 of Lee's Nobel lecture", "Reference 12 of Yang's Nobel lecture", "The 1957 presentation speech by Klein", "The Nobel Foundation's 1957 summary page"],
            correctIndex: 0,
            explanation: "Reference 8 on printed page 418 of Lee's lecture lists Friedman and Telegdi at Physical Review 105, 1681, alongside Garwin, Lederman and Weinrich at 105, 1415 (lesson 14 sources).",
            sourceLessonSlug: "the-physicists-who-contest-it",
          },
          {
            prompt: "What does James Cronin say the most dispassionate view would recognise?",
            options: ["That the other contributors were very important", "That Wu alone made the experiment possible", "That the prize should have gone to the theorists only", "That the Bureau of Standards should have been named in the citation"],
            correctIndex: 0,
            explanation: "He says Wu is often given the credit but that the others were very important and it would not have happened without them (Hargittai, 2012).",
            sourceLessonSlug: "the-physicists-who-contest-it",
          },
          {
            prompt: "What does the archive show about Cronin's relationship to Wu's candidacy?",
            options: ["They were named on the same 1970 nomination form", "He nominated her three times in the 1970s", "He was a member of the committee that assessed her", "He published a rival cobalt-60 result in 1957"],
            correctIndex: 0,
            explanation: "Feza Gursey's 1970 record 114-0 names James Watson Cronin, Val Logsdon Fitch and Chien-Shiung Wu. He is not a hostile party (lesson 14).",
            sourceLessonSlug: "the-physicists-who-contest-it",
          },
          {
            prompt: "What do Kurti and Sutton state for the record about the parity violation experiment?",
            options: ["It was a collaborative team effort", "It was conceived and executed by Wu alone", "It was performed at Columbia rather than at the Bureau", "It was proposed by the experimenters and not by the theorists"],
            correctIndex: 0,
            explanation: "Their note says nuclear physicists and cryophysicists pooled their knowledge to carry out an experiment proposed by Lee and Yang (Hargittai, 2012).",
            sourceLessonSlug: "the-physicists-who-contest-it",
          },
          {
            prompt: "What gap does the course admit about the Kurti and Sutton note?",
            options: ["Its publication could not be identified", "Its authors could not be contacted for permission", "Its text survives only in translation", "Its date is disputed between two sources"],
            correctIndex: 0,
            explanation: "The course quotes it as Hargittai quotes it and files the question of where it appeared as a research check rather than inventing a citation (lesson 14).",
            sourceLessonSlug: "the-physicists-who-contest-it",
          },
          {
            prompt: "What is Hargittai's own conclusion about the injustice reading?",
            options: ["It is an oversimplification of a complex story", "It is the only conclusion the documents allow", "It is unprovable and therefore not worth discussing", "It is correct but for reasons usually misstated"],
            correctIndex: 0,
            explanation: "She writes that Wu made an outstanding contribution but that calling her omission an injustice oversimplifies a complex story (Hargittai, 2012).",
            sourceLessonSlug: "the-physicists-who-contest-it",
          },
          {
            prompt: "What did Anders Barany tell Hargittai about eligibility?",
            options: ["The awarded work must be published before the prize year", "A nomination must be filed by a sitting laureate", "An experimentalist may not share a prize with a theorist", "The committee must consider every nomination received"],
            correctIndex: 0,
            explanation: "On his account the work must have appeared before 1 January 1957, which would exclude every experimental paper of that year (lesson 14).",
            sourceLessonSlug: "the-physicists-who-contest-it",
          },
          {
            prompt: "Why does this course not state the publication-deadline rule as a rule?",
            options: ["It did not read the Nobel Foundation statutes", "The rule was repealed before the 1957 prize", "Barany declined to be quoted on the record", "The rule applies only to chemistry and medicine"],
            correctIndex: 0,
            explanation: "Barany's account is evidence about a rule offered by a former officer, not the text of the statute, so the question is filed as a research check (lesson 14).",
            sourceLessonSlug: "the-physicists-who-contest-it",
          },
          {
            prompt: "Which three 1957 experimental papers does lesson 14 name?",
            options: ["Wu and colleagues, Garwin and colleagues, Friedman and Telegdi", "Lee and Yang, Wu and colleagues, Wigner and colleagues", "Garwin and colleagues, Cronin and Fitch, Kurti and Sutton", "Wu and colleagues, Rabi and colleagues, Segre and Chamberlain"],
            correctIndex: 0,
            explanation: "Physical Review 105 at pages 1413, 1415 and 1681 respectively. All three appeared during 1957 (lesson 14).",
            sourceLessonSlug: "the-physicists-who-contest-it",
          },
          {
            prompt: "What do the four contesting arguments have in common?",
            options: ["Every one is about merit rather than nomination", "Every one rests on the 1957 committee file", "Every one was published after Wu's death", "Every one names the Bureau of Standards as the true author"],
            correctIndex: 0,
            explanation: "None of them is about nominations, and Section 4 showed the merit question was never reached in 1957 (lesson 14).",
            sourceLessonSlug: "the-physicists-who-contest-it",
          },
          {
            prompt: "On what grounds do the contesting physicists argue, according to lesson 14?",
            options: ["Grounds that have nothing to do with her sex", "Grounds drawn from the committee's internal reports", "Grounds of national preference within the physics community", "Grounds of procedure rather than of contribution"],
            correctIndex: 0,
            explanation: "That is the point of printing them. Serious physicists, including a competitor and a co-nominee, argue against the framing without reference to her sex (lesson 14).",
            sourceLessonSlug: "the-physicists-who-contest-it",
          },
          {
            prompt: "What is a procedural argument, in lesson 14's vocabulary?",
            options: ["A claim that a rule of process decided the outcome", "A claim about how a committee usually behaves", "A claim that the process was deliberately abused", "A claim about who deserved the prize on merit"],
            correctIndex: 0,
            explanation: "Barany's publication-deadline account is the example: it would settle the case without any judgment about contribution (lesson 14 vocabulary).",
            sourceLessonSlug: "the-physicists-who-contest-it",
          },
          {
            prompt: "Who are the two authors of the 2026 Physics World article about the committee file?",
            options: ["Larsson and Wyss", "Kurti and Sutton, who wrote the note about teamwork", "Friedman and Telegdi, who published a 1957 result", "Hargittai and Barany, who discussed the deadline"],
            correctIndex: 0,
            explanation: "Mats Larsson and Ramon Wyss. Kurti and Sutton wrote the teamwork note, and the others are named in different contexts (lesson 15).",
            sourceLessonSlug: "what-a-committee-reader-wrote",
          },
          {
            prompt: "What do Larsson and Wyss say about their access to the 1957 file?",
            options: ["They were the first to view it, on 13 November 2025", "They were given a copy by the Nobel Foundation", "They viewed it in 1997, after Wu's death", "They worked from a published transcription rather than the file"],
            correctIndex: 0,
            explanation: "They state they viewed it at the Center for History of Science at the Royal Swedish Academy of Sciences, the file having been sealed while a named laureate was alive (lesson 15).",
            sourceLessonSlug: "what-a-committee-reader-wrote",
          },
          {
            prompt: "What date do Larsson and Wyss give for the committee report they reproduce?",
            options: ["20 September 1957", "10 December 1957, the day of the ceremony", "13 November 2025, the day they read the file", "3 February 2026, the day their article appeared"],
            correctIndex: 0,
            explanation: "They reproduce the 20 September 1957 report as an image with a translation. The other dates belong to the ceremony, their visit and their publication (lesson 15).",
            sourceLessonSlug: "what-a-committee-reader-wrote",
          },
          {
            prompt: "Who do Larsson and Wyss give as the chair signing the September 1957 report?",
            options: ["Manne Siegbahn", "Oskar Klein, who also gave the presentation speech", "Erik Hulthen, who wrote the experimental report", "Ivar Waller, who nominated Neel, Wollan and Shull that year"],
            correctIndex: 0,
            explanation: "Siegbahn as chair, with Borelius, Hulthen, Klein, Rudberg and Waller as the other signatories (lesson 15).",
            sourceLessonSlug: "what-a-committee-reader-wrote",
          },
          {
            prompt: "What can a reader see by setting the September report against the published citation?",
            options: ["A sentence being polished between September and December", "A change in which laureates were proposed", "An error in the published prize share", "A reversal of the committee's recommendation"],
            correctIndex: 0,
            explanation: "The reported September wording speaks of a profound investigation leading to the discovery of new properties; the published citation speaks of a penetrating investigation leading to important discoveries (lesson 15).",
            sourceLessonSlug: "what-a-committee-reader-wrote",
          },
          {
            prompt: "Which committee member is reported to have written the experimental report?",
            options: ["Erik Hulthen", "Oskar Klein, who wrote the theoretical report instead", "Manne Siegbahn, as chair of the committee", "Bengt Nagel, who reported in 1971"],
            correctIndex: 0,
            explanation: "Hulthen wrote the experimental report and Klein the theoretical one. Nagel's assessment came fourteen years later (lesson 15).",
            sourceLessonSlug: "what-a-committee-reader-wrote",
          },
          {
            prompt: "To whom is Klein's theoretical report reported to have given about half its four pages?",
            options: ["Eugene Wigner", "Chien-Shiung Wu, whose experiment it assessed", "Lee and Yang, the eventual laureates", "Pyotr Kapitsa, repeatedly nominated that year"],
            correctIndex: 0,
            explanation: "Wigner carried seven nominations that year, the most on the 1957 list, and Larsson and Wyss report that half of Klein's four pages went to him (lesson 15).",
            sourceLessonSlug: "what-a-committee-reader-wrote",
          },
          {
            prompt: "What do Larsson and Wyss observe about the physicists named in Klein's report?",
            options: ["All except Wu eventually won a Nobel Prize", "None of them was ever nominated again", "All of them had been nominated by Lee or Yang", "All of them were European, unlike Wu"],
            correctIndex: 0,
            explanation: "That observation is theirs, reported here as theirs and not adopted as a finding of this course (lesson 15).",
            sourceLessonSlug: "what-a-committee-reader-wrote",
          },
          {
            prompt: "Whom did the committee commission to assess Wu's experiments in 1971?",
            options: ["Bengt Nagel", "Erik Hulthen, who had written the 1957 experimental report", "Anders Barany, later secretary of the committee", "Ramon Wyss, who read the file in 2025"],
            correctIndex: 0,
            explanation: "Nagel of the Royal Institute of Technology, after six nominations for her arrived that year (lesson 15).",
            sourceLessonSlug: "what-a-committee-reader-wrote",
          },
          {
            prompt: "What did Nagel write about the importance of the three experiments?",
            options: ["They had without doubt been of great importance", "They had added nothing to the understanding of weak interactions", "They had been superseded by later measurements", "They could not be assessed from the published papers"],
            correctIndex: 0,
            explanation: "He wrote that they had without doubt been of great importance for our understanding of the weak interaction, and then raised a separate objection (lesson 15).",
            sourceLessonSlug: "what-a-committee-reader-wrote",
          },
          {
            prompt: "What was Nagel's stated hesitation?",
            options: ["Whether their theoretical importance sufficed as motivation", "Whether the results had been independently reproduced", "Whether Wu or Ambler had directed the work", "Whether the papers had appeared in time to qualify"],
            correctIndex: 0,
            explanation: "He felt somewhat hesitant whether their theoretical importance was a sufficient motivation to render Wu the Nobel prize (lesson 15).",
            sourceLessonSlug: "what-a-committee-reader-wrote",
          },
          {
            prompt: "What objection did Nagel raise about how the experiments came about?",
            options: ["They followed suggestions of theoreticians", "They repeated work already done in Europe", "They used techniques borrowed without credit", "They were funded by a body with an interest in the result"],
            correctIndex: 0,
            explanation: "He wrote that the experiments, at least the last two, had been conducted to certain aspects as commissioned or direct suggestions of theoreticians (lesson 15).",
            sourceLessonSlug: "what-a-committee-reader-wrote",
          },
          {
            prompt: "Which earlier argument does Nagel's objection match?",
            options: ["Telegdi's, made about himself as well", "Cronin's, about the other contributors", "Kurti and Sutton's, about teamwork", "Barany's, about the publication deadline"],
            correctIndex: 0,
            explanation: "Both hold that an experiment carried out at a theorist's suggestion earns less. Telegdi applied it to his own work too (lesson 15).",
            sourceLessonSlug: "what-a-committee-reader-wrote",
          },
          {
            prompt: "Which document would undercut Nagel's objection if it can be obtained and confirmed?",
            options: ["Wu's own published account of proposing the method", "The Nobel Foundation statutes on eligibility", "The Kurti and Sutton note in its original publication", "The 1957 committee report of 20 September"],
            correctIndex: 0,
            explanation: "If her account confirms that she proposed the cobalt-60 method, the suggestion-of-a-theorist objection loses its footing. It sits in the research queue (lesson 15).",
            sourceLessonSlug: "what-a-committee-reader-wrote",
          },
          {
            prompt: "What sentence may this course never write?",
            options: ["The committee decided that", "Larsson and Wyss report that", "The archive shows that", "The published citation reads"],
            correctIndex: 0,
            explanation: "It has not seen the committee's documents. A named account of a document is evidence about what it says, and it is not the document (lesson 15).",
            sourceLessonSlug: "what-a-committee-reader-wrote",
          },
          {
            prompt: "What does lesson 15 say the difference between an account and a document stops?",
            options: ["A checkable case turning into a story", "A reader from finding the original source", "A committee from revising its own record", "An archive from withholding material"],
            correctIndex: 0,
            explanation: "Attribution is what lets a course use a claim it cannot verify directly without pretending to have verified it (lesson 15).",
            sourceLessonSlug: "what-a-committee-reader-wrote",
          },
          {
            prompt: "What is a commissioned assessment, in lesson 15's vocabulary?",
            options: ["An expert report a committee requests about a candidate", "A paper written to order for a scientific journal", "A nomination filed at a committee's invitation", "A translation prepared for an archive's readers"],
            correctIndex: 0,
            explanation: "Nagel's 1971 report is the example, commissioned after six nominations for Wu arrived that year (lesson 15 vocabulary).",
            sourceLessonSlug: "what-a-committee-reader-wrote",
          },
          {
            prompt: "What are the two quotations that lesson 16 refuses to print?",
            options: ["One attributed to Oppenheimer and one to Steinberger", "One attributed to Klein and one to Siegbahn", "One attributed to Telegdi and one to Cronin", "One attributed to Nagel and one to Barany"],
            correctIndex: 0,
            explanation: "One has Oppenheimer saying publicly that Wu should have shared the prize; the other has Steinberger calling the omission the biggest mistake in the committee's history (lesson 16).",
            sourceLessonSlug: "two-quotations-that-could-not-be-traced",
          },
          {
            prompt: "What did fetching the two Physics World articles establish about those quotations?",
            options: ["Neither article contains either name", "Both articles carry the quotations without sources", "One article carries both and the other neither", "Both articles were withdrawn after publication"],
            correctIndex: 0,
            explanation: "Neither contains the word Oppenheimer and neither contains the word Steinberger, so the attribution carried by the seed note is simply wrong (lesson 16).",
            sourceLessonSlug: "two-quotations-that-could-not-be-traced",
          },
          {
            prompt: "Where did a wider search find the quotations circulating?",
            options: ["Blog posts, a student newspaper and an encyclopedia entry", "Two peer-reviewed physics journals", "The Nobel Foundation's own laureate pages", "Interviews published by Physics World in 2002"],
            correctIndex: 0,
            explanation: "With no primary source anywhere. A secondary source is a pointer to follow, and both pointers led nowhere (lesson 16).",
            sourceLessonSlug: "two-quotations-that-could-not-be-traced",
          },
          {
            prompt: "How does this course treat an unverified claim?",
            options: ["It does not appear in a lesson at all", "It appears with a hedge naming the doubt", "It appears in a footnote for completeness", "It appears if two retellings agree on the wording"],
            correctIndex: 0,
            explanation: "Not with a hedge, not with a maybe, not in a footnote. Printing it would make the course the next link in a chain nobody can trace (lesson 16).",
            sourceLessonSlug: "two-quotations-that-could-not-be-traced",
          },
          {
            prompt: "Why does lesson 16 say the two quotations are not needed?",
            options: ["Steinberger filed a nomination under his own name", "Both men wrote letters that survive in the Nobel archive", "The committee file already records their objections", "The presentation speech makes the same point"],
            correctIndex: 0,
            explanation: "Record 75-0 of 1971 is a signed, dated, numbered document you can open, which does the same work far better than an untraceable sentence (lesson 16).",
            sourceLessonSlug: "two-quotations-that-could-not-be-traced",
          },
          {
            prompt: "What is the contrast lesson 16 draws between kinds of evidence?",
            options: ["Twenty-three nominations verified, zero quotations verified", "Two contested articles against one reliable archive", "Three experimental papers against one prize citation", "Six committee signatories against one commissioned reader"],
            correctIndex: 0,
            explanation: "The course calls it a fact about what kinds of evidence survive and can be checked, and lesson 18 turns it into a working rule (lesson 16).",
            sourceLessonSlug: "two-quotations-that-could-not-be-traced",
          },
          {
            prompt: "What does lesson 16 say is the right use of an encyclopedia entry?",
            options: ["Follow its references to the thing it cites", "Cite it directly when no better source exists", "Treat it as settled once several editors agree", "Use it for dates but not for quotations"],
            correctIndex: 0,
            explanation: "Wikipedia is a pointer, never a citation. Here the references ran out before reaching a source (lesson 16).",
            sourceLessonSlug: "two-quotations-that-could-not-be-traced",
          },
          {
            prompt: "What is the correct conclusion when a chain of references runs out?",
            options: ["The claim is unverified, which is not the same as false", "The claim is false and should be corrected in print", "The claim is true but poorly documented", "The claim should be repeated with the chain described"],
            correctIndex: 0,
            explanation: "Unverified is a different and more useful thing to know than false, and it is a status that bars the claim from a lesson (lesson 16).",
            sourceLessonSlug: "two-quotations-that-could-not-be-traced",
          },
          {
            prompt: "Which nominators does lesson 16 list as filing under their own names?",
            options: ["Steinberger, Rabi, Serber, Wick, Sachs, Segre, Kusch, Lamb and Lee", "Oppenheimer, Steinberger and Telegdi", "Klein, Siegbahn, Hulthen and Waller", "Hargittai, Larsson, Wyss and Barany"],
            correctIndex: 0,
            explanation: "Each filing is a record with a number on it. The second group is the untraceable quotations, the third the committee signatories and the fourth the secondary authors (lesson 16).",
            sourceLessonSlug: "two-quotations-that-could-not-be-traced",
          },
          {
            prompt: "What is a seed note, in lesson 16's vocabulary?",
            options: ["The internal note that proposed this subject", "A nomination filed before a prize year opens", "An editor's note attached to a published article", "The first draft of a course's description"],
            correctIndex: 0,
            explanation: "It is itself a claim that had to be checked, and it was wrong on this point, which is why the course treats it as evidence rather than instruction (lesson 16 vocabulary).",
            sourceLessonSlug: "two-quotations-that-could-not-be-traced",
          },
          {
            prompt: "In which year did Jack Steinberger file his nomination for Wu?",
            options: ["1971", "1988, the year he won the prize himself", "1958, alongside Kusch and Lamb", "1964, the year Lee first filed"],
            correctIndex: 0,
            explanation: "Record 75-0 of 1971, one of six filed that year. His own prize came in 1988 (lesson 16).",
            sourceLessonSlug: "two-quotations-that-could-not-be-traced",
          },
          {
            prompt: "What does lesson 16 say might happen to the two quotations in future?",
            options: ["Someone may find the interview or the letter", "They will be removed from every encyclopedia", "They will be confirmed by the committee file", "They will be re-attributed to a different physicist"],
            correctIndex: 0,
            explanation: "They may well be real. Until a source is found, they stay out, which is a statement about evidence rather than about the men (lesson 16).",
            sourceLessonSlug: "two-quotations-that-could-not-be-traced",
          },
          {
            prompt: "What does framing mean in lesson 14's vocabulary?",
            options: ["How a case is presented before evidence is weighed", "The border a museum puts around a document", "The wording a committee chooses for a citation", "The order in which a course presents its sections"],
            correctIndex: 0,
            explanation: "Here it is the injustice reading of the 1957 prize, which the contesting physicists argue against on grounds of merit (lesson 14 vocabulary).",
            sourceLessonSlug: "the-physicists-who-contest-it",
          },
          {
            prompt: "What does the course mean by calling Cronin not a hostile party?",
            options: ["He was nominated jointly with Wu in 1970", "He never commented on the 1957 prize", "He was a member of the Nobel Committee", "He co-authored the 1957 Letter with her"],
            correctIndex: 0,
            explanation: "A witness with no stake against her is a more useful witness, which is why the archive detail is printed beside his quotation (lesson 14).",
            sourceLessonSlug: "the-physicists-who-contest-it",
          },
          {
            prompt: "What does at one remove mean in lesson 15?",
            options: ["Reached through an account by someone who saw the source", "Held in an archive that requires an appointment", "Translated from a language the course cannot read", "Published more than fifty years after the event"],
            correctIndex: 0,
            explanation: "Everything in lesson 15 reaches the reader that way, and the lesson says the remove is itself the lesson (lesson 15 vocabulary).",
            sourceLessonSlug: "what-a-committee-reader-wrote",
          },
          {
            prompt: "How many members are reported to have signed the September 1957 committee report?",
            options: ["Six", "Two, the chair and the secretary", "Four, matching the pages of Klein's report", "Eight, the size of the 1960 multi-nominee form"],
            correctIndex: 0,
            explanation: "Siegbahn as chair plus Borelius, Hulthen, Klein, Rudberg and Waller (lesson 15).",
            sourceLessonSlug: "what-a-committee-reader-wrote",
          },
          {
            prompt: "What does lesson 15 call the pattern formed by Telegdi, Nagel and Wu's own account?",
            options: ["A triangle whose middle document sits in a research queue", "A chain of references that ends before a source", "A record of three independent confirmations", "A sequence of committee decisions over fourteen years"],
            correctIndex: 0,
            explanation: "Three positions on whether a theorist's suggestion reduces an experimenter's claim, with the document that would settle the middle still unobtained (lesson 15).",
            sourceLessonSlug: "what-a-committee-reader-wrote",
          },
          {
            prompt: "Why was the 1957 file sealed until 2025, on Larsson and Wyss's account?",
            options: ["A named laureate was still alive", "The Academy had not finished cataloguing it", "It had been mislaid during a building move", "The Nobel Foundation charged a fee for access"],
            correctIndex: 0,
            explanation: "That matches the withholding note on the 1957 nomination record itself, which cites the rule about material relating to a living named person (lessons 10 and 15).",
            sourceLessonSlug: "what-a-committee-reader-wrote",
          },
          {
            prompt: "Which of these does the course treat as evidence about a document rather than as the document?",
            options: ["Larsson and Wyss's account of the committee file", "The nomination record for 1971 number 75-0", "Klein's published presentation speech", "The Physical Review Letter of February 1957"],
            correctIndex: 0,
            explanation: "The other three were fetched and read directly. The committee file was not (lessons 10, 14 and 15).",
            sourceLessonSlug: "what-a-committee-reader-wrote",
          },
          {
            prompt: "What does lesson 14 say about the relationship between the contesting arguments and the 1957 nomination?",
            options: ["None of the arguments is about nominations", "All of them assume she was nominated that year", "They each cite the nomination record directly", "They were written before the archive opened"],
            correctIndex: 0,
            explanation: "They are arguments about merit, and merit was never reached in 1957 because no nomination was filed (lesson 14).",
            sourceLessonSlug: "the-physicists-who-contest-it",
          },
          {
            prompt: "What is a former officer, in lesson 14's vocabulary?",
            options: ["Someone who held a post and speaks about its rules afterwards", "Someone appointed to review a single candidate", "Someone who signed a committee report", "Someone who nominated a candidate more than once"],
            correctIndex: 0,
            explanation: "Barany is the example. His account is evidence, and it is not the rule itself (lesson 14 vocabulary).",
            sourceLessonSlug: "the-physicists-who-contest-it",
          },
          {
            prompt: "What page of Physical Review volume 105 carries the Garwin, Lederman and Weinrich paper?",
            options: ["1415", "1413, where the Wu Letter begins", "1681, where Friedman and Telegdi appear", "254, where the Lee and Yang proposal appears"],
            correctIndex: 0,
            explanation: "Reference 8 of Lee's lecture gives 105 (1957) 1415, which is also the last page of the Wu Letter (lesson 14 sources).",
            sourceLessonSlug: "the-physicists-who-contest-it",
          },
          {
            prompt: "What was the committee's proposed wording in September 1957, as reported?",
            options: ["Their profound investigation of the so-called parity laws", "Their penetrating investigation of the so-called parity laws", "Their experimental test of parity conservation in beta decay", "Their discovery of new properties of elementary particles"],
            correctIndex: 0,
            explanation: "Profound in the reported September text, penetrating in the published citation. Experimental test of parity conservation in beta decay is the title of Wu's own paper, not a prize wording (lessons 7 and 15).",
            sourceLessonSlug: "what-a-committee-reader-wrote",
          },
          {
            prompt: "How does the reported September wording describe what the investigation led to?",
            options: ["The discovery of new properties of elementary particles", "Important discoveries regarding the elementary particles", "The overthrow of right-left symmetry in weak interactions", "A new low-temperature technique for beta decay"],
            correctIndex: 0,
            explanation: "The published citation uses the second phrasing. Comparing the two is possible only because two named people went and read the file (lesson 15).",
            sourceLessonSlug: "what-a-committee-reader-wrote",
          },
          {
            prompt: "How does lesson 16 describe the consequence of printing an untraceable quotation?",
            options: ["Becoming the next link in a chain nobody can trace", "Being corrected by a reader within days", "Violating the terms of the source's licence", "Making the course longer than it needs to be"],
            correctIndex: 0,
            explanation: "That is precisely the failure the course is teaching a reader to catch, which is why it will not commit it (lesson 16).",
            sourceLessonSlug: "two-quotations-that-could-not-be-traced",
          },
          {
            prompt: "Which of the contesting voices is a named editor rather than a physicist?",
            options: ["Christine Sutton", "Nicholas Kurti", "Valentine Telegdi", "James Cronin"],
            correctIndex: 0,
            explanation: "Sutton co-signed the note with Kurti. The course quotes the note as Hargittai quotes it and does not claim to know where it appeared (lesson 14).",
            sourceLessonSlug: "the-physicists-who-contest-it",
          },
          {
            prompt: "How many nominations for Wu arrived in the year that prompted the Nagel assessment?",
            options: ["Six", "Two, from Kusch and Lamb", "Three, filed under C. S. Wu", "Twenty-three, across the whole period"],
            correctIndex: 0,
            explanation: "Six in 1971, which is what prompted the committee to commission an assessment of her experiments (lessons 12 and 15).",
            sourceLessonSlug: "what-a-committee-reader-wrote",
          },
          {
            prompt: "What does attribution allow a course to do, in lesson 15's account?",
            options: ["Use a claim it cannot verify directly", "Skip the step of reading the source", "Assert a claim as its own finding", "Cite a secondary source as a primary one"],
            correctIndex: 0,
            explanation: "Naming who says a thing is the difference between reporting and asserting, and it is what keeps the Nagel material usable (lesson 15 vocabulary).",
            sourceLessonSlug: "what-a-committee-reader-wrote",
          },
          {
            prompt: "Which two parties does lesson 14 say argue against the framing despite having no reason to?",
            options: ["A competitor and a co-nominee", "A committee member and an archivist", "A biographer and a journalist", "A funder and an employer"],
            correctIndex: 0,
            explanation: "Telegdi published a competing 1957 result and disqualifies himself too; Cronin shared a 1970 nomination form with her (lesson 14).",
            sourceLessonSlug: "the-physicists-who-contest-it",
          },
          {
            prompt: "What does this course do with a claim it can neither verify nor attribute?",
            options: ["Leaves it out and files a research check", "Prints it with a warning about its status", "Assigns it to the most likely speaker", "Records it as a disputed fact in the vocabulary"],
            correctIndex: 0,
            explanation: "Attribution rescues a reported claim. An unverified one, with nobody to attribute it to, goes into the research queue instead (lessons 15 and 16).",
            sourceLessonSlug: "two-quotations-that-could-not-be-traced",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 6 — Four stages, and which one failed
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "four-stages-of-credit",
      title: "17 · Four stages at which credit can fail",
      section: "Section 6 · Four stages, and which one failed",
      body: `Here is the method this course exists to teach, and it generalises far beyond one prize. Between doing a piece of work and being recognised for it there are several distinct stages, each with its own documents and its own ways of going wrong. Naming them separately is what turns an argument into an investigation.

**Stage one, the author line.** Who is on the paper, in what order, under which affiliation. The documents are the paper itself and whatever correspondence survives about how the order was chosen.

**Stage two, the nomination.** Who is put in front of the awarding body at all. The document is a nomination form, and for the Nobel Prizes it is published after a delay.

**Stage three, the assessment.** What a committee makes of a candidate it actually has. The documents are internal reports and minutes, which are usually sealed and often stay sealed for a long time.

**Stage four, the citation.** The wording of the award, and who is named in it.

**Now run this case through them.**

**Stage one held.** She is first author, alone under Columbia, and the theorists are in the acknowledgment. Section 2 showed the whole line.

**Stage two failed completely, and then reversed.** In 1957 the count is zero out of sixty-six. From 1958 to 1974 it is twenty-three nominations across ten years from eighteen people. Both halves are stage two, and the second half is as strange as the first.

**Stage three is visible only at one remove, and only for 1971.** Larsson and Wyss report Nagel's assessment, and this course reports them reporting it. For 1957 there was nothing to assess, because there was no candidate.

**Stage four never applied to her.** A citation names the laureates. Section 3 showed that the ceremony speech, which is not the citation, did name her at length.

**Why that matters for how you read any credit story.** The popular version of this case is a stage four story: a committee wrote a sentence and left somebody out of it. The evidence says it is a stage two story, and the two have almost nothing in common. A stage four failure means a decision was made about a person. A stage two failure means the decision was never available to be made.

**And the second half of stage two is the part nobody tells.** If the whole story were "nobody put her forward", it would be a story about 1957 and about a handful of physicists who did not get round to filing a form. But eighteen people did put her forward, repeatedly, for sixteen years, including five who already held the prize and one who held half of the very prize in question. Whatever explains the outcome has to explain that too.

**Where else this catalog runs the same method.** *The Paper and the Prize* reads the Lederberg case at stage one and stage four. *What the Citation Records* is a course entirely about stage four, keyed by prize year. *Who Gets Named*, lesson 10, reads award-share data across many prizes. This course is the catalog's stage two case, and it is the only one of the four where the deciding document is a count rather than a wording.

:::reveal What are the four stages at which credit can fail, in order? ||| The author line, the nomination, the assessment, and the citation.

:::reveal What is the difference between a stage four failure and a stage two failure? ||| A stage four failure means a decision was made about a person. A stage two failure means the decision was never available to be made.

## Vocabulary
- **Stage one, the author line**: who appears on the paper, in what order, under which affiliation.
- **Stage two, the nomination**: who is put in front of the awarding body, evidenced by a filed form.
- **Stage three, the assessment**: what a committee makes of a candidate it has, evidenced by internal reports.
- **Stage four, the citation**: the published wording of an award and the names in it.
- **Deciding document**: the single document that settles which stage failed, here a count of nomination rows rather than a sentence.

## Sources
Nobel Prize Outreach. (n.d.-b). *Nomination archive* [Database]. https://www.nobelprize.org/nomination/archive/ (The physics 1957 year list and the 23 Chien-Shiung Wu records, retrieved 2026-09-20, are the stage two evidence used here.)
Wu, C. S., Ambler, E., Hayward, R. W., Hoppes, D. D., & Hudson, R. P. (1957). Experimental test of parity conservation in beta decay. *Physical Review, 105*(4), 1413-1415. https://doi.org/10.1103/PhysRev.105.1413 (Byline and acknowledgment, p. 1413 and the closing paragraph, read from the page image: the stage one evidence.)`,
    },
    {
      slug: "a-nomination-beats-a-quotation",
      title: "18 · A nomination is a better document than a quotation",
      section: "Section 6 · Four stages, and which one failed",
      body: `Lesson 10 asked you to hold a thought. Here it is.

**What a nomination record is.** A form, filed with a body that keeps records, carrying a year, a number, a named nominee and in most cases a named nominator. It was written at the time, for a purpose other than making an argument, by a person who put their name to it. Twenty-three of them exist for Chien-Shiung Wu and you can open every one.

**What a quotation is.** A sentence somebody is said to have spoken, usually reaching you through a retelling, often without a date, a setting or a first-hand witness. The two in lesson 16 have been repeated for years, and not one retelling can say where they came from.

**Twenty-three verified against zero verified.** That is the arithmetic of this course, and it is not luck. It is a property of the two kinds of evidence. A form has an identifier. A remembered sentence does not.

**So here is the working rule.** When a case offers both kinds of evidence, build the argument on the kind with identifiers, and use the other only with attribution, if at all. If the identifiable evidence will not carry the argument, the honest move is to say the argument is not supported yet, rather than to prop it up with a sentence that cannot be traced.

**A second rule that follows from the first, and it is about your own writing.** Say where in the source to look. A link to a database is barely better than no link: the reader has to redo your work. A link plus a record number is a different thing entirely. That is why this course prints record 75-0 for Steinberger, 39-0 for Lee and Yang, and 15049 for the 1958 entry that gives her profession as Professor. It is why the Nobel lecture citations here carry a printed page and a PDF page, because they differ by six. It is why the Physical Review citation says which page the byline sits on and that it was read from the image rather than the extracted text.

A citation without a locator is a claim that somewhere in this large thing there is something that supports me. A citation with one is an invitation to check.

**What this rule costs, honestly.** It will sometimes make your work less quotable. The untraceable Oppenheimer sentence is a better sentence than anything in this course: it is short, dramatic and attributed to a famous man. Record 75-0 is a row in a table. But the row is true, and the sentence, for now, is just repeated.

**Where the catalog already drills this.** *Who Gets the Credit*, lesson 19, "Check it yourself, in about ten minutes", is a ten-minute check in a different archive, and lesson 17, "Five claims that do not survive checking", is the home for the corrections that come out of doing it. This course adds a third archive and one more correction.

:::reveal Why is a nomination record better evidence than a remembered quotation? ||| Because it has an identifier: a year, a number and a named filer, written at the time by someone who put their name to it, and kept by a body that keeps records.

:::reveal What does a citation without a locator actually say to a reader? ||| That somewhere in a large source there is something that supports the claim, which leaves the reader to redo the work.

## Vocabulary
- **Identifier**: the number or reference that lets a reader find one specific document among many, such as a nomination record number.
- **Locator**: the part of a citation that says where in the source to look, such as a printed page, a record number or a section.
- **Traceable**: able to be followed back to a source that was fetched and read, the property the two lesson 16 quotations lack.
- **Quotable**: memorable and easy to repeat, a property that has no relationship to whether something is true.

## Sources
Nobel Prize Outreach. (n.d.-b). *Nomination archive* [Database]. https://www.nobelprize.org/nomination/archive/search.php (Records cited by number throughout this course: 39-0 of 1957, 29-0 and 30-0 of 1958, 43-0 and 44-0 of 1964, 74-0 and 75-0 of 1971, 99-0 and 100-0 of 1972, and detail pages 15049, 15372, 24827, 21865 and 22343. Retrieved 2026-09-20.)`,
    },
    {
      slug: "http-200-is-not-proof",
      title: "19 · A successful response is not proof the query ran",
      section: "Section 6 · Four stages, and which one failed",
      body: `This is the most useful lesson in the course for anyone who checks other people's work, and it came out of the research rather than out of the subject.

**What happened.** An early attempt to search the nomination archive used an address built from guessed parameters. The server answered with a successful status and a perfectly ordinary page of nomination rows. The page was the physics list for 1901. The parameters had not been understood, and rather than say so, the service had quietly served something else.

Nothing about that response looks like a failure. There is no error message, no warning and no empty result. If you are counting rows, you will count the wrong rows and never know.

**The general form of the problem.** There are three things a request can do, and only two of them announce themselves:

1. **It is refused.** A 403 or a 404. This is the honest failure, because you can see it.
2. **It succeeds and answers your question.** What you wanted.
3. **It succeeds and answers a different question.** The dangerous one, because it is indistinguishable from case 2 unless you check the content.

**A second version of the same trap, from the same research.** Fetching nobelprize.org through one tool returned 403 every time, and the same addresses fetched with an ordinary browser user agent returned 200. A tool reporting that a source is unavailable is telling you about the tool, not about the source. Anyone reading a note that says "this could not be retrieved" should ask what it was retrieved with.

**And a third, which is about guessing.** Several addresses tried during this research were guesses at where a document might live, and they returned 404. A guessed address that fails proves nothing at all, and nothing in this course is asserted from any of them. A failed fetch is reported as a failed fetch, not converted into an absence.

**How to defend yourself, in four moves.**

1. **Read the page's own heading.** The archive prints the year it is showing. If you asked for 1957 and it says 1901, you have case 3.
2. **Sanity check one number you already know.** If a list you expect to contain a famous name does not, suspect the query before suspecting history.
3. **Change one parameter deliberately and watch.** If the output does not change when the input does, the input is being ignored.
4. **Count twice, on different days if you can.** Every number in this course was counted twice, a day apart, by different readers.

**Why this belongs in a course about a prize.** Because the central finding here is a count of zero, and a count of zero is exactly the result a broken query produces. A course that reported zero nominations without also reporting how it made sure the search actually ran would be asking you to trust the one kind of result that is easiest to get by accident. Lesson 13 is there so you do not have to.

:::reveal What are the three things a request can do, and which one is dangerous? ||| It can be refused, it can succeed and answer your question, or it can succeed and answer a different question. The third is dangerous because it looks exactly like success.

:::reveal Why does a finding of zero need more checking than any other count? ||| Because zero is exactly what a query that never ran produces, so it is the easiest result to get by accident.

## Vocabulary
- **Silent failure**: a request that returns a successful response to a question other than the one asked.
- **User agent**: the identifier a client sends with a web request, which some services use to decide whether to answer at all.
- **Guessed address**: a web address constructed from a plausible pattern rather than found, whose failure proves nothing.
- **Sanity check**: testing a result against something you already know, to catch a failure the result itself will not announce.

## Sources
Nobel Prize Outreach. (n.d.-b). *Nomination archive* [Database]. https://www.nobelprize.org/nomination/archive/ (The list view returns a successful response and a different year's page when its parameters are not recognised; the working query form used throughout this course is search.php with a prize, a start year, an end year and a name, and list.php with a prize and a year. Behaviour observed 2026-09-19 and again 2026-09-20.)`,
    },
    {
      slug: "section-6-quiz",
      title: "Section 6 quiz · Four stages, and which one failed",
      section: "Section 6 · Four stages, and which one failed",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What are the four stages at which credit can fail, in order?",
            options: ["Author line, nomination, assessment, citation", "Proposal, experiment, publication, prize", "Discovery, replication, review, award", "Funding, authorship, citation, correction"],
            correctIndex: 0,
            explanation: "Each stage has its own documents and its own ways of going wrong, which is what turns an argument into an investigation (lesson 17).",
            sourceLessonSlug: "four-stages-of-credit",
          },
          {
            prompt: "Which stage does the author line belong to?",
            options: ["Stage one", "Stage two, alongside the nomination form", "Stage three, because committees read author lines", "Stage four, because a citation restates it"],
            correctIndex: 0,
            explanation: "Stage one is who is on the paper, in what order and under which affiliation, evidenced by the paper itself (lesson 17).",
            sourceLessonSlug: "four-stages-of-credit",
          },
          {
            prompt: "What is the document of stage two?",
            options: ["A nomination form", "A published paper with its author line", "A committee's internal report", "The published wording of an award"],
            correctIndex: 0,
            explanation: "For the Nobel Prizes it is published after a delay, which is why this case can be investigated at all (lesson 17).",
            sourceLessonSlug: "four-stages-of-credit",
          },
          {
            prompt: "What are the documents of stage three?",
            options: ["Internal reports and minutes, usually sealed", "Nomination forms held by the awarding body", "Author lists and acknowledgment sections", "Ceremony speeches and laureate lectures"],
            correctIndex: 0,
            explanation: "They often stay sealed for a long time, which is why the 1957 file was not read until November 2025 (lesson 17).",
            sourceLessonSlug: "four-stages-of-credit",
          },
          {
            prompt: "Which stage held in this case?",
            options: ["Stage one", "Stage two, since eighteen people nominated her", "Stage three, since the committee assessed her fairly", "Stage four, since the citation named her"],
            correctIndex: 0,
            explanation: "She is first author, alone under Columbia, with the theorists in the acknowledgment. Section 2 read the whole line (lesson 17).",
            sourceLessonSlug: "four-stages-of-credit",
          },
          {
            prompt: "What is the 1957 stage two count?",
            options: ["Zero out of sixty-six", "Twenty-three out of sixty-six", "One out of sixty-six, filed late", "Six out of sixty-six, all from Columbia"],
            correctIndex: 0,
            explanation: "None of the 66 nomination rows for the 1957 physics prize names her. Twenty-three is the total for 1958 to 1974, and six is the 1971 peak (lesson 17).",
            sourceLessonSlug: "four-stages-of-credit",
          },
          {
            prompt: "What does lesson 17 say about the second half of stage two in this case?",
            options: ["It reversed, with twenty-three nominations over sixteen years", "It stayed empty until the archive closed in 1974", "It produced a single nomination in 1974", "It cannot be examined because the records are sealed"],
            correctIndex: 0,
            explanation: "Both halves are stage two, and the course insists the second is as strange as the first (lesson 17).",
            sourceLessonSlug: "four-stages-of-credit",
          },
          {
            prompt: "Why is stage three visible only at one remove here?",
            options: ["The committee file reaches the course through two named authors", "The committee never produced any internal reports", "The archive redacted every internal document", "The reports were destroyed after the prize was awarded"],
            correctIndex: 0,
            explanation: "Larsson and Wyss read it and reported what it says. This course reports them reporting it (lesson 17).",
            sourceLessonSlug: "four-stages-of-credit",
          },
          {
            prompt: "Why was there nothing to assess at stage three in 1957?",
            options: ["There was no candidate", "The committee ran out of time before the deadline", "Her papers had not yet been published", "The assessment was postponed to 1971"],
            correctIndex: 0,
            explanation: "An assessment is what a committee makes of a candidate it actually has, and no nomination for her existed that year (lesson 17).",
            sourceLessonSlug: "four-stages-of-credit",
          },
          {
            prompt: "Why did stage four never apply to her?",
            options: ["A citation names the laureates", "The citation was written before her paper appeared", "Her name was removed from a draft citation", "The committee declined to publish a citation that year"],
            correctIndex: 0,
            explanation: "The ceremony speech, which is not the citation, did name her at length. Section 3 read both (lesson 17).",
            sourceLessonSlug: "four-stages-of-credit",
          },
          {
            prompt: "What kind of story does the popular version of this case tell, in the four-stage scheme?",
            options: ["A stage four story", "A stage one story about an author line", "A stage two story about a missing nomination", "A stage three story about a committee report"],
            correctIndex: 0,
            explanation: "It says a committee wrote a sentence and left somebody out of it. The evidence says it is a stage two story instead (lesson 17).",
            sourceLessonSlug: "four-stages-of-credit",
          },
          {
            prompt: "What is the difference between a stage four failure and a stage two failure?",
            options: ["One means a decision was made, the other that none was available", "One is documented and the other never is", "One happens to theorists and the other to experimenters", "One can be corrected later and the other cannot"],
            correctIndex: 0,
            explanation: "A stage four failure means a decision was made about a person. A stage two failure means the decision was never available to be made (lesson 17).",
            sourceLessonSlug: "four-stages-of-credit",
          },
          {
            prompt: "What does lesson 17 say any explanation of the outcome must also account for?",
            options: ["Sixteen years of nominations that changed nothing", "The wording chosen for the 1957 citation", "The order of names on the 1957 byline", "The sealing of the committee file until 2025"],
            correctIndex: 0,
            explanation: "Eighteen people filed twenty-three times, five of them sitting laureates and one holding half the prize in question (lesson 17).",
            sourceLessonSlug: "four-stages-of-credit",
          },
          {
            prompt: "Which course in this catalog is entirely about stage four?",
            options: ["What the Citation Records", "Who Gets Named, which reads award-share data", "The Paper and the Prize, on Esther Lederberg", "Who Gets the Credit, which teaches claim checking"],
            correctIndex: 0,
            explanation: "It is keyed by prize year so a new case splices in without renumbering. The Lederberg course reads stages one and four together (lesson 17).",
            sourceLessonSlug: "four-stages-of-credit",
          },
          {
            prompt: "What makes this course the catalog's stage two case?",
            options: ["Its deciding document is a count rather than a wording", "It is the only private course in the credit series", "It is the only case involving a physics prize", "It is the only case where the author line failed"],
            correctIndex: 0,
            explanation: "Every other case in the catalog turns on how a sentence was written. This one turns on how many rows a search returns (lesson 17).",
            sourceLessonSlug: "four-stages-of-credit",
          },
          {
            prompt: "What is a deciding document, in lesson 17's vocabulary?",
            options: ["The document that settles which stage failed", "The document an awarding body publishes last", "The document a committee votes on", "The document a laureate signs on accepting"],
            correctIndex: 0,
            explanation: "Here it is a count of nomination rows rather than a sentence, which is what separates this case from the others (lesson 17 vocabulary).",
            sourceLessonSlug: "four-stages-of-credit",
          },
          {
            prompt: "What does a nomination record carry that makes it strong evidence?",
            options: ["A year, a number and in most cases a named filer", "A summary of the nominee's whole career", "The committee's response to the nomination", "A guarantee that the nominee was considered"],
            correctIndex: 0,
            explanation: "It was written at the time, for a purpose other than making an argument, by a person who put their name to it (lesson 18).",
            sourceLessonSlug: "a-nomination-beats-a-quotation",
          },
          {
            prompt: "What does lesson 18 say a quotation usually lacks?",
            options: ["A date, a setting or a first-hand witness", "A speaker anyone can name", "Any relationship to what was said", "Publication in a printed source"],
            correctIndex: 0,
            explanation: "The two quotations in lesson 16 have been repeated for years and not one retelling can say where they came from (lesson 18).",
            sourceLessonSlug: "a-nomination-beats-a-quotation",
          },
          {
            prompt: "What is the arithmetic lesson 18 calls the arithmetic of this course?",
            options: ["Twenty-three verified against zero verified", "Sixty-six against fifty-eight", "Four stages against two documents", "Eighteen nominators against five laureates"],
            correctIndex: 0,
            explanation: "Twenty-three nomination records verified, zero quotations verified. The course says that is not luck but a property of the two kinds of evidence (lesson 18).",
            sourceLessonSlug: "a-nomination-beats-a-quotation",
          },
          {
            prompt: "What is the working rule lesson 18 gives for a case offering both kinds of evidence?",
            options: ["Build on evidence with identifiers, attribute the rest", "Use whichever evidence is more widely repeated", "Weight the two kinds equally and average them", "Prefer the evidence that best fits the conclusion"],
            correctIndex: 0,
            explanation: "And when the identifiable evidence will not carry the argument, say so rather than propping it up with an untraceable sentence (lesson 18).",
            sourceLessonSlug: "a-nomination-beats-a-quotation",
          },
          {
            prompt: "What second rule follows from the first, about your own writing?",
            options: ["Say where in the source to look", "Cite every source at least twice", "Quote only from primary documents", "Publish your search history alongside your claims"],
            correctIndex: 0,
            explanation: "A link to a database is barely better than no link, because the reader has to redo the work. A link plus a record number is a different thing (lesson 18).",
            sourceLessonSlug: "a-nomination-beats-a-quotation",
          },
          {
            prompt: "Which record number does this course print for Steinberger's nomination?",
            options: ["75-0", "39-0, which is the Lee and Yang form", "15049, which is the 1958 detail page", "29-0, which is Kusch's filing"],
            correctIndex: 0,
            explanation: "Record 75-0 of 1971. Printing the number is what lets a reader open the exact document rather than search for it (lesson 18).",
            sourceLessonSlug: "a-nomination-beats-a-quotation",
          },
          {
            prompt: "Why do the Nobel lecture citations in this course carry two page numbers?",
            options: ["The printed page and the PDF page differ by six", "The lectures were published twice in different editions", "One number is the lecture and one the reference list", "The archive paginates its files at random"],
            correctIndex: 0,
            explanation: "A reader sent to page 399 of the file lands six pages short of printed page 399, which is why both are given (lesson 18).",
            sourceLessonSlug: "a-nomination-beats-a-quotation",
          },
          {
            prompt: "What does the Physical Review citation in this course specify about how the page was read?",
            options: ["That it was read from the image, not the extracted text", "That it was read in a printed bound volume", "That it was read in translation", "That it was read only in summary"],
            correctIndex: 0,
            explanation: "The extraction renders Wu as Ku and Columbia as Cotumbia, so the citation points at the image and the lesson says so (lessons 4 and 18).",
            sourceLessonSlug: "a-nomination-beats-a-quotation",
          },
          {
            prompt: "What does a citation without a locator actually say?",
            options: ["Somewhere in this large thing there is something supporting me", "This claim has been checked by a second reader", "This source is too long to summarise", "This claim rests on more than one document"],
            correctIndex: 0,
            explanation: "A citation with a locator is an invitation to check. One without leaves the reader to redo the finding (lesson 18).",
            sourceLessonSlug: "a-nomination-beats-a-quotation",
          },
          {
            prompt: "What does lesson 18 admit the locator rule costs?",
            options: ["It sometimes makes the work less quotable", "It makes citations harder to format correctly", "It slows down the reader's progress", "It limits the number of sources a lesson can use"],
            correctIndex: 0,
            explanation: "The untraceable Oppenheimer sentence is short, dramatic and attributed to a famous man. Record 75-0 is a row in a table, and the row is true (lesson 18).",
            sourceLessonSlug: "a-nomination-beats-a-quotation",
          },
          {
            prompt: "What is an identifier, in lesson 18's vocabulary?",
            options: ["The reference that finds one document among many", "A signature at the bottom of a form", "A digital fingerprint of a scanned page", "The name of the person who wrote a source"],
            correctIndex: 0,
            explanation: "A nomination record number is the example, and it is precisely what a remembered sentence does not have (lesson 18 vocabulary).",
            sourceLessonSlug: "a-nomination-beats-a-quotation",
          },
          {
            prompt: "What does quotable mean in this course's vocabulary?",
            options: ["Memorable and easy to repeat, with no bearing on truth", "Supported by a source a reader can open", "Approved for reproduction by a rights holder", "Short enough to fit in a citation"],
            correctIndex: 0,
            explanation: "The course names the property precisely so that a reader can notice when it is doing the persuading instead of the evidence (lesson 18 vocabulary).",
            sourceLessonSlug: "a-nomination-beats-a-quotation",
          },
          {
            prompt: "Which existing lesson does the course name as a ten-minute check in a different archive?",
            options: ["Who Gets the Credit, lesson 19", "Who Gets Named, lesson 13", "The Paper and the Prize, lesson 6", "What the Citation Records, in its Closing section"],
            correctIndex: 0,
            explanation: "Check it yourself, in about ten minutes. Lesson 17 of the same course is the home for corrections that come out of doing it (lesson 18).",
            sourceLessonSlug: "a-nomination-beats-a-quotation",
          },
          {
            prompt: "What happened when an early search of the nomination archive used guessed parameters?",
            options: ["A successful response served the 1901 physics list", "The server refused the connection outright", "The page loaded but showed no rows at all", "The archive returned an error naming the bad parameter"],
            correctIndex: 0,
            explanation: "No error message, no warning and no empty result. If you are counting rows you will count the wrong rows and never know (lesson 19).",
            sourceLessonSlug: "http-200-is-not-proof",
          },
          {
            prompt: "Which of the three outcomes of a request is the dangerous one?",
            options: ["Success answering a different question", "Refusal with a clear status code", "Success answering the question asked", "A timeout with no response at all"],
            correctIndex: 0,
            explanation: "It is indistinguishable from real success unless you check the content of the page (lesson 19).",
            sourceLessonSlug: "http-200-is-not-proof",
          },
          {
            prompt: "Why does lesson 19 call a refusal the honest failure?",
            options: ["You can see it", "It gives you the correct page anyway", "It names the parameter that was wrong", "It can be retried and will eventually succeed"],
            correctIndex: 0,
            explanation: "A 403 or a 404 announces itself. Silent failure is the one that does not (lesson 19).",
            sourceLessonSlug: "http-200-is-not-proof",
          },
          {
            prompt: "What did the difference between a 403 and a 200 from nobelprize.org turn out to depend on?",
            options: ["The user agent sent with the request", "The time of day the request was made", "Whether the requester held an academic affiliation", "Which country the request came from"],
            correctIndex: 0,
            explanation: "One tool got 403 every time; the same addresses with an ordinary browser user agent returned 200 (lesson 19).",
            sourceLessonSlug: "http-200-is-not-proof",
          },
          {
            prompt: "What is a tool telling you when it reports a source as unavailable?",
            options: ["Something about the tool, not about the source", "That the source has been withdrawn", "That the source requires a subscription", "That the address was constructed incorrectly"],
            correctIndex: 0,
            explanation: "Anyone reading a note saying this could not be retrieved should ask what it was retrieved with (lesson 19).",
            sourceLessonSlug: "http-200-is-not-proof",
          },
          {
            prompt: "What does a guessed address returning 404 prove?",
            options: ["Nothing at all", "That the document does not exist", "That the document has been moved", "That the host is blocking automated requests"],
            correctIndex: 0,
            explanation: "A failed fetch is reported as a failed fetch, never converted into an absence, and nothing in this course is asserted from any of them (lesson 19).",
            sourceLessonSlug: "http-200-is-not-proof",
          },
          {
            prompt: "What is the first of the four defensive moves lesson 19 gives?",
            options: ["Read the page's own heading", "Count the rows twice in a row", "Change a parameter and watch the output", "Compare the result against a secondary source"],
            correctIndex: 0,
            explanation: "The archive prints the year it is showing. If you asked for 1957 and it says 1901, you have a silent failure (lesson 19).",
            sourceLessonSlug: "http-200-is-not-proof",
          },
          {
            prompt: "What should you suspect if a list you expect to contain a famous name does not?",
            options: ["The query, before you suspect history", "The archive's coverage dates", "The spelling of the famous name", "The completeness of the historical record"],
            correctIndex: 0,
            explanation: "A sanity check against something you already know is the cheapest way to catch a query that never ran (lesson 19).",
            sourceLessonSlug: "http-200-is-not-proof",
          },
          {
            prompt: "What does it mean if the output does not change when you change a parameter?",
            options: ["The parameter is being ignored", "The archive caches results for repeated queries", "The two queries happen to match", "The server is under heavy load"],
            correctIndex: 0,
            explanation: "Deliberately changing one input and watching is the third of the four defensive moves (lesson 19).",
            sourceLessonSlug: "http-200-is-not-proof",
          },
          {
            prompt: "How were the counts in this course checked against counting error?",
            options: ["Counted twice, a day apart, by different readers", "Verified against the Physics World article's figures", "Computed by a script rather than by hand", "Confirmed by correspondence with the archive"],
            correctIndex: 0,
            explanation: "That is the fourth defensive move, and the course reports the agreement rather than assuming it (lesson 19).",
            sourceLessonSlug: "http-200-is-not-proof",
          },
          {
            prompt: "Why does this lesson belong in a course about a prize?",
            options: ["The central finding is a count of zero", "The prize committee used the same archive", "The archive was built to support prize research", "Every credit dispute involves a database"],
            correctIndex: 0,
            explanation: "Zero is exactly the result a broken query produces, so a course reporting zero has to show how it made sure the search ran (lesson 19).",
            sourceLessonSlug: "http-200-is-not-proof",
          },
          {
            prompt: "What is a silent failure?",
            options: ["A successful response to a question other than the one asked", "A request that never reaches the server", "An error message shown in the wrong language", "A page that loads slowly enough to be missed"],
            correctIndex: 0,
            explanation: "It is the failure mode the whole lesson exists to name, and it produced a 1901 list in answer to a question about a later year (lesson 19 vocabulary).",
            sourceLessonSlug: "http-200-is-not-proof",
          },
          {
            prompt: "What is a user agent?",
            options: ["The identifier a client sends with a web request", "A person authorised to search a restricted archive", "The software an archive uses to serve its pages", "A parameter naming which prize to search"],
            correctIndex: 0,
            explanation: "Some services use it to decide whether to answer at all, which is why the same address gave 403 to one tool and 200 to another (lesson 19 vocabulary).",
            sourceLessonSlug: "http-200-is-not-proof",
          },
          {
            prompt: "What is a sanity check, as lesson 19 uses the term?",
            options: ["Testing a result against something you already know", "Repeating a query with identical parameters", "Asking a second person to review your conclusion", "Comparing two archives holding the same records"],
            correctIndex: 0,
            explanation: "It catches a failure that the result itself will not announce, which is the defining property of the dangerous case (lesson 19 vocabulary).",
            sourceLessonSlug: "http-200-is-not-proof",
          },
          {
            prompt: "Which working query forms does this course name as reliable for the archive?",
            options: ["search.php with prize, years and name, and list.php with prize and year", "list.php with a name and a country", "show.php with a nominee's surname", "search.php with a nominator's name alone"],
            correctIndex: 0,
            explanation: "Those are the two forms used for every count in this course, and show.php is the detail view reached from their rows (lesson 19 sources).",
            sourceLessonSlug: "http-200-is-not-proof",
          },
          {
            prompt: "What does lesson 19 say the problem came out of?",
            options: ["The research rather than the subject", "A disagreement between two secondary sources", "A change the archive made during the build", "A limitation of the course's publishing platform"],
            correctIndex: 0,
            explanation: "It is the most useful lesson in the course for anyone who checks other people's work, and it is a byproduct of doing the checking (lesson 19).",
            sourceLessonSlug: "http-200-is-not-proof",
          },
          {
            prompt: "What does lesson 13 exist for, in lesson 19's account?",
            options: ["So you do not have to trust the course's zero", "So the course meets its assessment requirements", "So the archive gets credit for being free", "So the physics of Section 1 is reinforced"],
            correctIndex: 0,
            explanation: "The exercise lets a reader reproduce the count themselves, which is the only real answer to a finding that is easy to get by accident (lesson 19).",
            sourceLessonSlug: "http-200-is-not-proof",
          },
          {
            prompt: "Which stage does lesson 17 say the Lederberg course reads?",
            options: ["Stages one and four", "Stage two alone, like this course", "Stage three, through committee documents", "All four, in the same order as here"],
            correctIndex: 0,
            explanation: "The Paper and the Prize reads the author line against the citation. Neither course has the other's deciding document (lesson 17).",
            sourceLessonSlug: "four-stages-of-credit",
          },
          {
            prompt: "Which lesson of Who Gets Named does lesson 17 name as reading award-share data across many prizes?",
            options: ["Lesson 10", "Lesson 13, on who counts as an author", "Lesson 9, on Rossiter's named cases", "Lesson 19, which belongs to a different course"],
            correctIndex: 0,
            explanation: "Lesson 10, What the award data show, and what they do not. Lesson 19 belongs to Who Gets the Credit (lesson 17).",
            sourceLessonSlug: "four-stages-of-credit",
          },
          {
            prompt: "What does naming the stages separately achieve, according to lesson 17?",
            options: ["It turns an argument into an investigation", "It shortens the list of possible explanations to one", "It removes the need to read the primary documents", "It lets a course avoid taking a position"],
            correctIndex: 0,
            explanation: "Each stage has its own documents and its own failure modes, so separating them tells you which documents to go and read (lesson 17).",
            sourceLessonSlug: "four-stages-of-credit",
          },
          {
            prompt: "What was the purpose for which a nomination form was written, in lesson 18's description?",
            options: ["A purpose other than making an argument", "Publication in a scientific journal", "Persuading the public of a candidate's merit", "Recording a committee's internal discussion"],
            correctIndex: 0,
            explanation: "That is part of why it is strong evidence: it was not composed to win the argument it is now being used in (lesson 18).",
            sourceLessonSlug: "a-nomination-beats-a-quotation",
          },
          {
            prompt: "What does traceable mean in lesson 18's vocabulary?",
            options: ["Able to be followed back to a source that was read", "Recorded in more than one archive", "Attributed to a named speaker", "Repeated consistently across retellings"],
            correctIndex: 0,
            explanation: "It is precisely the property the two lesson 16 quotations lack, however consistently they are repeated (lesson 18 vocabulary).",
            sourceLessonSlug: "a-nomination-beats-a-quotation",
          },
          {
            prompt: "Which record number does this course print for the 1958 detail page giving her profession?",
            options: ["15049", "21865, the 1971 Serber record", "22343, the 1972 Lee record", "24827, the 1964 Lee record"],
            correctIndex: 0,
            explanation: "All four were read for this build, but 15049 is the one carrying Profession Professor and University Columbia University (lesson 18 sources).",
            sourceLessonSlug: "a-nomination-beats-a-quotation",
          },
          {
            prompt: "What does lesson 17 say about the relationship between the popular story and the evidence?",
            options: ["They describe failures at two different stages", "They agree on the stage but differ on the reason", "They rest on the same documents read differently", "They cannot be compared, since one is not documented"],
            correctIndex: 0,
            explanation: "A stage four story and a stage two story have almost nothing in common, which is what makes the correction worth making (lesson 17).",
            sourceLessonSlug: "four-stages-of-credit",
          },
          {
            prompt: "Which physicists filed for her among the eighteen, in the summary lesson 17 gives?",
            options: ["Five who already held the prize, and one holding half of the 1957 prize", "Only colleagues from Columbia University", "Only physicists working outside the United States", "Nobody who had ever won the prize themselves"],
            correctIndex: 0,
            explanation: "Kusch, Lamb, Lee, Segre and Rabi held the prize when they filed, and Lee held half of the 1957 award itself (lessons 12 and 17).",
            sourceLessonSlug: "four-stages-of-credit",
          },
          {
            prompt: "What does lesson 18 say the honest move is when identifiable evidence will not carry an argument?",
            options: ["Say the argument is not supported yet", "Use the untraceable evidence with a caveat", "Present both sides and let the reader decide", "Postpone publication until new evidence appears"],
            correctIndex: 0,
            explanation: "Propping an argument up with a sentence that cannot be traced is what the course is teaching a reader to catch (lesson 18).",
            sourceLessonSlug: "a-nomination-beats-a-quotation",
          },
          {
            prompt: "What did the page served by the failed archive query look like?",
            options: ["A perfectly ordinary page of nomination rows", "A blank page with no table at all", "An error page with a numeric code", "A login form requesting credentials"],
            correctIndex: 0,
            explanation: "That is exactly why it is dangerous. Nothing about the response looks like a failure (lesson 19).",
            sourceLessonSlug: "http-200-is-not-proof",
          },
          {
            prompt: "What is a guessed address?",
            options: ["One built from a plausible pattern rather than found", "One copied from a secondary source's footnote", "One that redirects to a different host", "One that requires a subscription to open"],
            correctIndex: 0,
            explanation: "Several were tried during this research and returned 404. Their failure proves nothing and nothing is asserted from them (lesson 19 vocabulary).",
            sourceLessonSlug: "http-200-is-not-proof",
          },
          {
            prompt: "In how many moves does lesson 19 say you can defend yourself against a silent failure?",
            options: ["Four", "Two, reading the heading and counting twice", "Six, one for each document type in Nobel week", "One, changing the user agent"],
            correctIndex: 0,
            explanation: "Read the heading, sanity check a known number, change a parameter deliberately, and count twice on different days (lesson 19).",
            sourceLessonSlug: "http-200-is-not-proof",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 7 — What a later correction repairs, and what it does not
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-1978-citation-that-names-her",
      title: "20 · The 1978 citation that names her alone",
      section: "Section 7 · What a later correction repairs, and what it does not",
      body: `Twenty-one years after the prize she was not nominated for, a different body gave her a different prize, and its citation is the one document in this whole story that names her and nobody else.

**The Wolf Prize in Physics, 1978.** Chien-Shiung Wu, affiliation at the time of the award Columbia University, USA. The citation, from the Wolf Foundation's own laureate page: "for her persistent and successful exploration of the weak interaction which helped establish the precise form and the non conservation of parity for this new natural force."

Prize share: None. That is the Foundation's way of recording a sole laureate, and it is worth pausing on. No shares, no co-recipients, no second name.

**Read the noun again, the way you read the 1957 one.** The Nobel citation honours an investigation of the parity laws. The Wolf citation honours an exploration of the weak interaction. Both are careful nouns. But the Wolf sentence attaches its noun to a person, says the exploration was persistent as well as successful, and then says what it helped establish.

**What the Foundation's accompanying essay says.** It describes outstanding experimental work on the mechanism of beta disintegration and on weak interactions generally, and it dates that work mostly from 1948 to 1963. On the parity experiment: "In her most famous work, she demonstrated that the direction of emission of beta rays is strongly correlated with the direction of the spin of the emitting nucleus. This showed that parity is not conserved in beta disintegration, in accord with the epochal theory of Lee and Yang, which had been developed just a few months before."

Notice what that sentence does not do. It does not take the theory away from Lee and Yang. It calls their theory epochal, in the same breath as it hands her the prize. The Wolf Prize is not a rebuttal of the 1957 decision, and reading it as one misses what it is.

**The essay also names work that has nothing to do with 1957.** That she showed the two quanta from positron and electron annihilation are polarised at right angles to each other, as Dirac's theory requires, which proves electron and positron have opposite parity. That from 1966 to 1971 she made a thorough study of the X-ray spectra of muonic atoms. That she turned to biological problems, and that her Mossbauer studies of haemoglobin clarified its structure.

**And that is the real difference between the two prizes.** The 1957 Nobel Prize was for one investigation. The 1978 Wolf Prize was for a career spanning fifteen years of beta-decay work and reaching into biology. A later award that honours a whole working life is not the same act as an earlier one that honours a single discovery, and it cannot undo it. It can only add something beside it.

**One more fact, from a different source.** The National Academy of Sciences memoir records that she was the first recipient of the Wolf Prize awarded by the State of Israel (Benczer-Koller, 2009).

:::reveal What does the Wolf Foundation print for Wu's prize share in 1978? ||| None, which is how it records a sole laureate: no shares, no co-recipients and no second name.

:::reveal Why is the Wolf Prize not a rebuttal of the 1957 Nobel decision? ||| Because its own essay calls the Lee and Yang theory epochal while awarding her the prize, and because it honours a career of work from about 1948 to 1963 and beyond rather than the single 1957 investigation.

## Vocabulary
- **Sole laureate**: an award recipient with no co-recipients, recorded by the Wolf Foundation as a prize share of None.
- **Beta disintegration**: the Wolf citation's term for beta decay, the process at the centre of her experimental work.
- **Muonic atom**: an atom in which a muon replaces an electron, the subject of her X-ray spectrum studies from 1966 to 1971.
- **Career award**: a prize given for a body of work over many years rather than for one discovery.

## Sources
Benczer-Koller, N. (2009). *Chien-Shiung Wu 1912-1997: A biographical memoir*. National Academy of Sciences. http://biographicalmemoirs.org/pdfs/wu-chien-shiung.pdf (17-page PDF; the Wolf Prize sentence appears in the paragraph listing her honours, in the closing third of the memoir. The extraction of this file drops digits, so no year is taken from it here.)
Wolf Foundation. (n.d.). *Chien-Shiung Wu, Wolf Prize laureate in Physics 1978*. https://wolffund.org.il/chien-shiung-wu/ (Web page, unpaginated; the citation, the affiliation and the prize share of None sit at the head of the page, and the descriptive essay follows immediately below them. Retrieved 2026-09-20.)`,
    },
    {
      slug: "the-memoir-that-never-says-nobel",
      title: "21 · The memoir that never says Nobel",
      section: "Section 7 · What a later correction repairs, and what it does not",
      body: `The National Academy of Sciences publishes biographical memoirs of its members. The one for Chien-Shiung Wu, written by Noemie Benczer-Koller, runs to seventeen pages and tells the parity story at length.

**It never uses the word Nobel.**

**How that was established, and the method matters as much as the result.** The PDF was downloaded and its text extracted. A whitespace-insensitive search of the whole extracted text returns zero occurrences of nobel, against nineteen of parity, eleven of Columbia and two of Ambler. Two independent passes, a day apart, returned the same counts.

**Now the caution, which is not optional.** This extraction is poor. It drops most digits, so a sentence about a promotion in a given year comes out with a gap where the year should be. It also mangles capitals, rendering her name as a broken string. An extraction that damaged in one way can have damaged in another, so this course states the method, states the result, and asks you to confirm from the pages before repeating it. If it holds, it is a quietly remarkable artefact: the Academy's official life of her tells the parity story nineteen times over and leaves the prize out entirely.

**What the course will not do with that.** It will not say the omission was deliberate, or a protest, or a statement of any kind. A memoir writer is writing a life in science, and a life in science is not a prize ledger. The absence is worth noticing and is not worth interpreting.

**What the memoir does say, in its own words, about her position at Columbia.** That she was promoted to an associate professorship at Columbia, the first woman to hold a tenured faculty position in the physics department, and to a full professorship later, and that she was appointed the first Michael I. Pupin Professor of Physics. It also records her election to the National Academy of Sciences and her National Medal of Science.

**The years for all of that are not printed here**, because the extraction lost the digits and this course does not take a number from a source that cannot hold its numbers. Hargittai's 2012 article supplies dates for these and several other firsts, and this course reports that she does so without reprinting them, because each one is a small institutional fact checkable against Columbia, Princeton, the American Physical Society and the National Science Foundation, and none of those checks was done for this build. They are filed as a research check.

**That is a small lesson with a wide application.** A source can be perfectly reliable about what happened and unusable for when. The right response is to take what it can carry, say what it cannot, and go to a different source for the rest, rather than quietly printing a year you are not sure of.

:::reveal How many occurrences of the word Nobel does the extracted text of the National Academy memoir contain? ||| Zero, against nineteen occurrences of parity, eleven of Columbia and two of Ambler.

:::reveal Why does this course print no years from the National Academy memoir? ||| Because the extraction drops most digits, and a source that cannot hold its numbers must not be quoted for a number.

## Vocabulary
- **Biographical memoir**: the National Academy of Sciences' published account of a deceased member's life and work.
- **Whitespace-insensitive search**: a search that ignores spacing, used here because the extraction inserted spaces inside words.
- **Damaged extraction**: text pulled from a document with characters lost or altered, which limits what the file may be quoted for.
- **Institutional fact**: a checkable claim about an appointment, election or award, verifiable against the body that made it.

## Sources
Benczer-Koller, N. (2009). *Chien-Shiung Wu 1912-1997: A biographical memoir*. National Academy of Sciences. http://biographicalmemoirs.org/pdfs/wu-chien-shiung.pdf (17-page PDF, retrieved 2026-09-20. Counts taken from a whitespace-insensitive search of the full extracted text: 0 occurrences of nobel, 19 of parity, 11 of Columbia, 2 of Ambler. The Columbia appointments and the Pupin professorship appear in the paragraph listing her honours; the years in that paragraph are lost to the extraction.)
Hargittai, M. (2012, September 13). Credit where credit's due? *Physics World*. https://physicsworld.com/a/credit-where-credits-due/ (Web article, unpaginated; its list of institutional firsts and their years appears in the biographical passage. Reported here as her list; the individual dates were not independently checked for this course.)`,
    },
    {
      slug: "what-this-course-does-not-claim",
      title: "22 · What this course does not claim",
      section: "Section 7 · What a later correction repairs, and what it does not",
      body: `A course about evidence should end by stating its own limits as plainly as it stated anybody else's.

**What this course claims, and what each claim rests on.**

- For the 1957 physics prize, Chien-Shiung Wu received no nominations. Sixty-six rows in the archive's own 1957 list, none of them hers, counted twice on different days.
- Lee and Yang were nominated once, on one form, by one person. Record 39-0.
- Between 1958 and 1974 she was nominated twenty-three times by eighteen people, five of them sitting Nobel laureates in physics, and Tsung-Dao Lee three times. Twenty-three records, each read on its own page.
- The author line held. The paper itself.
- The ceremony named her and described her experiment. Klein's presentation speech.
- Yang's Nobel lecture thanks her group; Lee's lecture names her only in a reference; neither banquet speech names her at all. The four documents, read and counted.
- Serious physicists contest the injustice framing on grounds unrelated to her sex. Their own words, quoted from Hargittai.
- A committee reader in 1971 raised a doubt based on experiments performed at theorists' suggestion. Reported by Larsson and Wyss, who read the file.

**What this course does not claim, and this is the important half.**

It does not claim that the Nobel Committee excluded her because she was a woman. No document read for this course supports that. The only committee-side reasoning on the record, and it reaches us at one remove, gives a different reason entirely. Saying so is not a defence of anybody. It is a refusal to assert something unevidenced in a course whose whole argument is that unevidenced assertions are how this case got misunderstood in the first place.

It does not claim to know why Klein said Mrs where he said Professor.

It does not claim that Yang never nominated her, only that the record open through 1974 shows no such nomination.

It does not claim the archive's counts are complete, because the archive says on its own page that material is withheld.

It does not claim to have read the 1957 committee file, the Nobel Foundation statutes, Wu's own 1973 account, or the Kurti and Sutton note in its original publication.

**And what a later correction cannot repair.** The 1978 Wolf Prize names her alone, and it is a career award from a different body for a different span of work. It does not retroactively nominate her in 1957. Nothing does. A stage two failure is not repairable later, because the stage it failed at has closed.

**The method to carry away, in four moves.**

1. **Name the stage.** Author line, nomination, assessment or citation. Most arguments about credit are arguments about different stages that nobody has separated.
2. **Find the document for that stage**, and prefer the one with an identifier.
3. **Print the locator.** The record number, the printed page and the scan page, the section, the timestamp.
4. **Say plainly what you could not check**, and file it where somebody can pick it up.

*What the Citation Records* ends its Closing section with a lesson called "What these cases do not prove", and *The Paper and the Prize* has a lesson on what its case does and does not prove. This lesson is the third of that family. Read any of them and you have the discipline; read all three and you have seen it survive contact with three very different kinds of record.

:::reveal What is the one thing this course most firmly declines to claim? ||| That the Nobel Committee excluded Wu because she was a woman. No document read for this course supports it, and the only committee-side reasoning on the record gives a different reason.

:::reveal Why can a stage two failure not be repaired by a later prize? ||| Because the stage has closed. A later award from a different body for a different span of work adds something beside the record; it cannot retroactively put a name in front of a committee in 1957.

## Vocabulary
- **Limit statement**: a course's own account of what it did not read and cannot claim.
- **Unevidenced assertion**: a claim stated as fact with no source that was fetched and read behind it.
- **Career award**: a prize for a body of work over years, which cannot substitute for one given for a single discovery.
- **Open question**: a claim this course could not settle, recorded so that somebody else can settle it.

## Sources
Klein, O. B. (1957, December 10). *Award ceremony speech, the Nobel Prize in Physics 1957*. Nobel Foundation. https://www.nobelprize.org/prizes/physics/1957/ceremony-speech/ (Web text, unpaginated; the naming of Wu and the two paragraphs describing the cobalt-60 experiment.)
Larsson, M., & Wyss, R. (2026, February 3). Twenty-three nominations, yet no Nobel prize: How Chien-Shiung Wu missed out on the top award in physics. *Physics World*. https://physicsworld.com/a/twenty-three-nominations-yet-no-nobel-prize-how-chien-shiung-wu-missed-out/ (Web article, unpaginated; the Nagel quotations in the section on the 1971 nominations.)
Nobel Prize Outreach. (n.d.-b). *Nomination archive* [Database]. https://www.nobelprize.org/nomination/archive/ (The physics 1957 year list, 66 nomination rows with no Wu; record 39-0 for Lee and Yang; the 23 Chien-Shiung Wu records of 1958 to 1974. Retrieved 2026-09-20.)
Wolf Foundation. (n.d.). *Chien-Shiung Wu, Wolf Prize laureate in Physics 1978*. https://wolffund.org.il/chien-shiung-wu/ (Web page, unpaginated; citation and prize share at the head of the page.)`,
    },
    {
      slug: "section-7-quiz",
      title: "Section 7 quiz · What a later correction repairs, and what it does not",
      section: "Section 7 · What a later correction repairs, and what it does not",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Which prize did Chien-Shiung Wu receive in 1978?",
            options: ["The Wolf Prize in Physics", "The Nobel Prize in Physics, awarded belatedly", "The National Medal of Science, for her work on parity", "The Michael I. Pupin Prize of Columbia University"],
            correctIndex: 0,
            explanation: "The Wolf Prize in Physics, with her affiliation given as Columbia University, USA (Wolf Foundation, n.d.).",
            sourceLessonSlug: "the-1978-citation-that-names-her",
          },
          {
            prompt: "What prize share does the Wolf Foundation record for her?",
            options: ["None", "One half, matching the 1957 Nobel arrangement", "One third, shared with Ambler and Hayward", "The page does not record a share"],
            correctIndex: 0,
            explanation: "None is the Foundation's way of recording a sole laureate: no shares, no co-recipients, no second name (lesson 20).",
            sourceLessonSlug: "the-1978-citation-that-names-her",
          },
          {
            prompt: "What does the 1978 Wolf citation say she explored?",
            options: ["The weak interaction", "The parity laws, in the same words as the Nobel citation", "The structure of haemoglobin", "The X-ray spectra of muonic atoms"],
            correctIndex: 0,
            explanation: "For her persistent and successful exploration of the weak interaction. The other three are real subjects of her work but not the citation's noun (lesson 20).",
            sourceLessonSlug: "the-1978-citation-that-names-her",
          },
          {
            prompt: "What two adjectives does the Wolf citation attach to her exploration?",
            options: ["Persistent and successful", "Penetrating and profound, as in the Nobel wording", "Original and decisive", "Careful and collaborative"],
            correctIndex: 0,
            explanation: "Penetrating belongs to the published Nobel citation and profound to the reported September committee draft (lessons 7, 15 and 20).",
            sourceLessonSlug: "the-1978-citation-that-names-her",
          },
          {
            prompt: "What does the Wolf Foundation essay call the Lee and Yang theory?",
            options: ["Epochal", "Unsupported by the experimental record", "A restatement of Wu's own proposal", "Secondary to the experiment that tested it"],
            correctIndex: 0,
            explanation: "It calls their theory epochal in the same breath as it hands her the prize, which is why the Wolf award is not a rebuttal of 1957 (lesson 20).",
            sourceLessonSlug: "the-1978-citation-that-names-her",
          },
          {
            prompt: "In the Wolf essay's description, what did her most famous work demonstrate?",
            options: ["Beta emission correlates with the emitting nucleus's spin", "That parity is conserved in strong interactions", "That the neutrino has no measurable rest mass", "That theta and tau are the same particle"],
            correctIndex: 0,
            explanation: "The direction of emission of beta rays is strongly correlated with the direction of the spin of the emitting nucleus, which showed parity is not conserved in beta disintegration (lesson 20).",
            sourceLessonSlug: "the-1978-citation-that-names-her",
          },
          {
            prompt: "Over what span does the Wolf essay date most of her experimental work on beta disintegration?",
            options: ["Mostly from 1948 to 1963", "The single year 1957", "From 1966 to 1971, the muonic atom period", "From 1978 onward, after the Wolf Prize"],
            correctIndex: 0,
            explanation: "That span is what makes the Wolf Prize a career award rather than a prize for one investigation. 1966 to 1971 is the muonic atom study (lesson 20).",
            sourceLessonSlug: "the-1978-citation-that-names-her",
          },
          {
            prompt: "What did her annihilation-quanta work prove, according to the Wolf essay?",
            options: ["Electron and positron have opposite parity", "That parity is violated in electromagnetic interactions", "That the two quanta carry identical polarisation", "That Dirac's theory needed correction"],
            correctIndex: 0,
            explanation: "The two quanta are polarised at right angles to each other, as Dirac's theory requires, which proves electron and positron have opposite parity (lesson 20).",
            sourceLessonSlug: "the-1978-citation-that-names-her",
          },
          {
            prompt: "What subject did the Wolf essay say she turned to in later years?",
            options: ["Biological problems, especially haemoglobin", "Cosmology and the structure of distant galaxies", "The history and philosophy of physics", "Nuclear reactor design and safety"],
            correctIndex: 0,
            explanation: "It records that her Mossbauer studies of haemoglobin gave surprising results and clarified its structure (lesson 20).",
            sourceLessonSlug: "the-1978-citation-that-names-her",
          },
          {
            prompt: "What does lesson 20 say is the real difference between the two prizes?",
            options: ["One honoured an investigation, the other a career", "One was awarded in Sweden and the other in Israel", "One named a theory and the other an experiment", "One was shared and the other was refused"],
            correctIndex: 0,
            explanation: "A later award for a whole working life is not the same act as an earlier one for a single discovery, and it cannot undo it (lesson 20).",
            sourceLessonSlug: "the-1978-citation-that-names-her",
          },
          {
            prompt: "What does the National Academy memoir record about her and the Wolf Prize?",
            options: ["She was its first recipient", "She declined it and it was awarded posthumously", "She shared it with two other physicists", "It does not mention the Wolf Prize"],
            correctIndex: 0,
            explanation: "The memoir states she was the first recipient of the Wolf Prize awarded by the State of Israel (Benczer-Koller, 2009).",
            sourceLessonSlug: "the-1978-citation-that-names-her",
          },
          {
            prompt: "What is a sole laureate?",
            options: ["An award recipient with no co-recipients", "A laureate who won in more than one category", "A laureate nominated by a single person", "The first person ever to receive a given prize"],
            correctIndex: 0,
            explanation: "The Wolf Foundation records it as a prize share of None, which is how the 1978 award is printed (lesson 20 vocabulary).",
            sourceLessonSlug: "the-1978-citation-that-names-her",
          },
          {
            prompt: "Who wrote the National Academy of Sciences memoir of Chien-Shiung Wu?",
            options: ["Noemie Benczer-Koller", "Magdolna Hargittai, who wrote the 2012 Physics World article", "Mats Larsson, who read the 1957 committee file", "Bengt Nagel, who assessed her experiments in 1971"],
            correctIndex: 0,
            explanation: "The 2009 memoir is by Noemie Benczer-Koller. The other three are named in this course for other work (lesson 21).",
            sourceLessonSlug: "the-memoir-that-never-says-nobel",
          },
          {
            prompt: "How many occurrences of the word Nobel does the memoir's extracted text contain?",
            options: ["Zero", "Nineteen, the same as the count for parity", "Eleven, the same as the count for Columbia", "Two, the same as the count for Ambler"],
            correctIndex: 0,
            explanation: "Zero occurrences of nobel, against nineteen of parity, eleven of Columbia and two of Ambler, from a whitespace-insensitive search of the full text (lesson 21).",
            sourceLessonSlug: "the-memoir-that-never-says-nobel",
          },
          {
            prompt: "How long is the National Academy memoir?",
            options: ["Seventeen pages", "Three pages, like the 1957 Letter", "Eleven pages, like Yang's Nobel lecture", "Four pages, like Klein's theoretical report"],
            correctIndex: 0,
            explanation: "Seventeen pages, of which the parity story occupies a substantial part, with nineteen uses of the word parity (lesson 21).",
            sourceLessonSlug: "the-memoir-that-never-says-nobel",
          },
          {
            prompt: "Why does lesson 21 refuse to take a year from the memoir?",
            options: ["Its extraction drops most digits", "The memoir gives no years at all in its text", "Its dates conflict with the Wolf Foundation's", "The memoir was published too long after her death"],
            correctIndex: 0,
            explanation: "A sentence about a promotion comes out with a gap where the year should be, and a source that cannot hold its numbers must not be quoted for a number (lesson 21).",
            sourceLessonSlug: "the-memoir-that-never-says-nobel",
          },
          {
            prompt: "What does the course refuse to say about the memoir's silence on the prize?",
            options: ["That it was deliberate, a protest, or a statement", "That the count of occurrences is reliable", "That the memoir tells the parity story at length", "That the extraction may have damaged other text"],
            correctIndex: 0,
            explanation: "A memoir writer is writing a life in science, and a life in science is not a prize ledger. The absence is worth noticing and not worth interpreting (lesson 21).",
            sourceLessonSlug: "the-memoir-that-never-says-nobel",
          },
          {
            prompt: "What does the memoir say about her position in the Columbia physics department?",
            options: ["She was the first woman there to hold a tenured post", "She was the department's first female graduate student", "She held a visiting appointment throughout her career", "She was appointed department chair in her final years"],
            correctIndex: 0,
            explanation: "It records her promotion to an associate professorship as the first woman to hold a tenured faculty position in the physics department, then a full professorship (lesson 21).",
            sourceLessonSlug: "the-memoir-that-never-says-nobel",
          },
          {
            prompt: "Which professorship does the memoir say she was the first to hold?",
            options: ["The Michael I. Pupin Professorship of Physics", "The Nobel Chair in Experimental Physics at Columbia", "The Wolf Professorship, endowed after her 1978 award", "The Ambler Chair at the National Bureau of Standards"],
            correctIndex: 0,
            explanation: "She was appointed the first Michael I. Pupin Professor of Physics. The other three do not exist in any source read here (lesson 21).",
            sourceLessonSlug: "the-memoir-that-never-says-nobel",
          },
          {
            prompt: "How does the course handle Hargittai's list of institutional firsts and their dates?",
            options: ["Reports that she supplies them without reprinting them", "Prints them all as verified facts", "Omits her article from the sources entirely", "Prints them with the years changed to approximations"],
            correctIndex: 0,
            explanation: "Each is a small institutional fact checkable against Columbia, Princeton, the American Physical Society and the National Science Foundation, and none of those checks was done for this build (lesson 21).",
            sourceLessonSlug: "the-memoir-that-never-says-nobel",
          },
          {
            prompt: "What is the wide lesson in lesson 21's treatment of the memoir?",
            options: ["A source can be reliable about what and unusable for when", "A damaged extraction should never be cited at all", "Every institutional claim needs two independent sources", "An official memoir is always the most reliable account"],
            correctIndex: 0,
            explanation: "Take what the source can carry, say what it cannot, and go elsewhere for the rest, rather than quietly printing a year you are not sure of (lesson 21).",
            sourceLessonSlug: "the-memoir-that-never-says-nobel",
          },
          {
            prompt: "What is a whitespace-insensitive search, and why was one used here?",
            options: ["A search ignoring spacing, because the extraction inserted spaces inside words", "A search ignoring capitals, because the file lowercased everything", "A search across several files at once, to compare counts", "A search that also matches partial words, to catch variants"],
            correctIndex: 0,
            explanation: "The extraction breaks words apart, so a plain search would miss occurrences that are in the file (lesson 21 vocabulary).",
            sourceLessonSlug: "the-memoir-that-never-says-nobel",
          },
          {
            prompt: "What does this course firmly decline to claim?",
            options: ["That the committee excluded her because she was a woman", "That she received no nominations for the 1957 prize", "That the ceremony speech named her", "That Lee nominated her three times"],
            correctIndex: 0,
            explanation: "No document read for this course supports it, and the only committee-side reasoning on the record gives a different reason (lesson 22).",
            sourceLessonSlug: "what-this-course-does-not-claim",
          },
          {
            prompt: "Why does lesson 22 say declining that claim is not a defence of anybody?",
            options: ["It refuses an unevidenced assertion in a course built against them", "It leaves the question open for a future reader", "It follows a rule imposed by the publisher", "It reflects the view of the physicists quoted in Section 5"],
            correctIndex: 0,
            explanation: "Unevidenced assertions are how this case got misunderstood in the first place, which is exactly what the course exists to correct (lesson 22).",
            sourceLessonSlug: "what-this-course-does-not-claim",
          },
          {
            prompt: "Which of these does lesson 22 list as something the course does not claim to have read?",
            options: ["The 1957 committee file", "The 1957 Physical Review Letter", "Klein's presentation speech", "Yang's Nobel lecture"],
            correctIndex: 0,
            explanation: "Nor the Nobel Foundation statutes, Wu's 1973 account, or the Kurti and Sutton note in its original publication. The other three were read directly (lesson 22).",
            sourceLessonSlug: "what-this-course-does-not-claim",
          },
          {
            prompt: "What does the course say about the completeness of the archive's counts?",
            options: ["It does not claim they are complete", "It claims completeness because the archive is official", "It claims completeness for 1957 but not for later years", "It treats the question as unanswerable and ignores it"],
            correctIndex: 0,
            explanation: "The archive says on its own page that material is withheld, so no count from it can be called exhaustive (lessons 10 and 22).",
            sourceLessonSlug: "what-this-course-does-not-claim",
          },
          {
            prompt: "What does the course claim about Yang and the nominations?",
            options: ["Only that the record open through 1974 shows none by him", "That he deliberately withheld a nomination", "That he nominated her once in a withheld year", "That he opposed her candidacy in writing"],
            correctIndex: 0,
            explanation: "The archive closes at 1974 and he lived until 2025, so the claim is about a record rather than about a man (lessons 12 and 22).",
            sourceLessonSlug: "what-this-course-does-not-claim",
          },
          {
            prompt: "What does lesson 22 say about the Mrs and Professor difference in Klein's speech?",
            options: ["It does not claim to know why", "It treats the difference as decisive evidence", "It attributes the wording to a translation error", "It does not mention the difference at all"],
            correctIndex: 0,
            explanation: "Section 3 states both facts, the speech's wording and the archive's profession field, and explains neither (lessons 8 and 22).",
            sourceLessonSlug: "what-this-course-does-not-claim",
          },
          {
            prompt: "Why can no later award repair a stage two failure?",
            options: ["The stage has closed", "Later awards are always smaller in prestige", "A committee may not revisit a decided year", "The nomination archive stops accepting entries"],
            correctIndex: 0,
            explanation: "Nothing can retroactively put a name in front of the 1957 committee. A later prize adds something beside the record rather than changing it (lesson 22).",
            sourceLessonSlug: "what-this-course-does-not-claim",
          },
          {
            prompt: "What is the first of the four moves in the method lesson 22 leaves you with?",
            options: ["Name the stage", "Print the locator", "Find the document with an identifier", "Say what you could not check"],
            correctIndex: 0,
            explanation: "Most arguments about credit are arguments about different stages that nobody has separated, so naming the stage comes first (lesson 22).",
            sourceLessonSlug: "what-this-course-does-not-claim",
          },
          {
            prompt: "What is the fourth move?",
            options: ["Say plainly what you could not check, and file it", "Publish the finding as soon as it is counted", "Seek a second opinion before printing anything", "Repeat the search a year later"],
            correctIndex: 0,
            explanation: "Filing it where somebody can pick it up is what turns an admission into a task rather than a hedge (lesson 22).",
            sourceLessonSlug: "what-this-course-does-not-claim",
          },
          {
            prompt: "Which two lessons elsewhere in the catalog does lesson 22 name as its siblings?",
            options: ["What these cases do not prove, and the Lederberg limits lesson", "Check it yourself, and Five claims that do not survive checking", "Who counts as an author, and What the award data show", "Format caps, and Three documents on one page"],
            correctIndex: 0,
            explanation: "The Closing lesson of What the Citation Records and lesson 6 of The Paper and the Prize. This lesson is the third of that family (lesson 22).",
            sourceLessonSlug: "what-this-course-does-not-claim",
          },
          {
            prompt: "What does lesson 22 say you get from reading all three limits lessons?",
            options: ["The discipline seen surviving three different kinds of record", "A complete history of twentieth-century physics prizes", "A method for predicting future prize decisions", "Permission to skip the primary sources"],
            correctIndex: 0,
            explanation: "Any one of them teaches the discipline. All three show it applied to a citation, an author line and a nomination count (lesson 22).",
            sourceLessonSlug: "what-this-course-does-not-claim",
          },
          {
            prompt: "Which evidence does lesson 22 cite for the claim that the author line held?",
            options: ["The paper itself", "The Wolf Foundation citation of 1978", "Klein's presentation speech", "The nomination archive's 1958 record"],
            correctIndex: 0,
            explanation: "Each claim in lesson 22 is listed with the document it rests on, and stage one rests on the Letter (lesson 22).",
            sourceLessonSlug: "what-this-course-does-not-claim",
          },
          {
            prompt: "What evidence does lesson 22 cite for the count of twenty-three nominations?",
            options: ["Twenty-three records, each read on its own page", "The Physics World article of February 2026", "The 1957 year list of the archive", "The National Academy memoir of 2009"],
            correctIndex: 0,
            explanation: "The year list supports the 1957 zero; the twenty-three come from the individual detail pages (lesson 22).",
            sourceLessonSlug: "what-this-course-does-not-claim",
          },
          {
            prompt: "What is an unevidenced assertion, in lesson 22's vocabulary?",
            options: ["A claim stated as fact with no source fetched behind it", "A claim supported only by a secondary source", "A claim that contradicts a primary document", "A claim made about a person who cannot reply"],
            correctIndex: 0,
            explanation: "The course names it because unevidenced assertions are how this case got misunderstood, and it declines to add another (lesson 22 vocabulary).",
            sourceLessonSlug: "what-this-course-does-not-claim",
          },
          {
            prompt: "What is an open question, as lesson 22 uses the term?",
            options: ["A claim the course could not settle, recorded for someone else", "A question a learner is asked at the end of a lesson", "A dispute between two published sources", "A record the archive has not yet released"],
            correctIndex: 0,
            explanation: "Recording it is what makes it findable, which is the difference between a hedge and a task (lesson 22 vocabulary).",
            sourceLessonSlug: "what-this-course-does-not-claim",
          },
          {
            prompt: "What does a limit statement do, in this course's terms?",
            options: ["States what a course did not read and cannot claim", "Sets a maximum length for a lesson", "Restricts a claim to one jurisdiction", "Caps the number of sources a lesson may cite"],
            correctIndex: 0,
            explanation: "A course about evidence should state its own limits as plainly as it stated anybody else's, which is what lesson 22 is (lesson 22 vocabulary).",
            sourceLessonSlug: "what-this-course-does-not-claim",
          },
          {
            prompt: "How many of the claims lesson 22 lists rest on documents read directly by this course?",
            options: ["All but the committee reader's doubt", "None, since every claim reaches it at one remove", "Only the archive counts", "Only the published Nobel documents"],
            correctIndex: 0,
            explanation: "The Nagel material is reported by Larsson and Wyss, who read the file. Everything else was fetched and read for this build (lesson 22).",
            sourceLessonSlug: "what-this-course-does-not-claim",
          },
          {
            prompt: "What is a career award, in lesson 20's vocabulary?",
            options: ["A prize for a body of work over many years", "A prize given at the end of a working life", "A prize awarded by an employer rather than a foundation", "A prize with no monetary component"],
            correctIndex: 0,
            explanation: "The 1978 Wolf Prize is the example, spanning beta-decay work from about 1948 to 1963 and reaching into biology (lesson 20 vocabulary).",
            sourceLessonSlug: "the-1978-citation-that-names-her",
          },
          {
            prompt: "What is beta disintegration, as the Wolf citation uses the term?",
            options: ["Beta decay", "The breakup of a nucleus into two lighter nuclei", "The annihilation of a positron and an electron", "The capture of a muon by an atom"],
            correctIndex: 0,
            explanation: "It is the Wolf citation's term for the process at the centre of her experimental work (lesson 20 vocabulary).",
            sourceLessonSlug: "the-1978-citation-that-names-her",
          },
          {
            prompt: "What is a muonic atom?",
            options: ["An atom in which a muon replaces an electron", "An atom whose nucleus has captured a stray neutrino", "An atom stripped of all its electrons", "An atom of an isotope that decays by muon emission"],
            correctIndex: 0,
            explanation: "The Wolf essay records her thorough study of the X-ray spectra of muonic atoms from 1966 to 1971 (lesson 20 vocabulary).",
            sourceLessonSlug: "the-1978-citation-that-names-her",
          },
          {
            prompt: "What is a biographical memoir, in lesson 21's vocabulary?",
            options: ["The National Academy's published account of a deceased member", "An autobiography written for a general audience", "A committee's internal assessment of a candidate", "A laureate's own account of their prize-winning work"],
            correctIndex: 0,
            explanation: "The Academy publishes them for its members, and Wu's runs to seventeen pages (lesson 21 vocabulary).",
            sourceLessonSlug: "the-memoir-that-never-says-nobel",
          },
          {
            prompt: "What does lesson 21 call the memoir if its count holds?",
            options: ["A quietly remarkable artefact", "A deliberate correction of the record", "An incomplete account of her career", "A standard obituary of no special interest"],
            correctIndex: 0,
            explanation: "The Academy's official life of her tells the parity story nineteen times over and leaves the prize out entirely (lesson 21).",
            sourceLessonSlug: "the-memoir-that-never-says-nobel",
          },
          {
            prompt: "What does lesson 21 ask a reader to do before repeating its count?",
            options: ["Confirm it from the pages", "Run the same extraction tool again", "Compare it against Hargittai's article", "Request a clean copy from the Academy"],
            correctIndex: 0,
            explanation: "An extraction that damaged text in one way can have damaged it in another, so the method is stated and confirmation invited (lesson 21).",
            sourceLessonSlug: "the-memoir-that-never-says-nobel",
          },
          {
            prompt: "Which two other honours does the memoir record alongside the Columbia appointments?",
            options: ["Election to the National Academy and the National Medal of Science", "The Nobel Prize and the Wolf Prize", "An honorary doctorate from Princeton and a Columbia medal", "The presidency of the American Physical Society and a stamp"],
            correctIndex: 0,
            explanation: "Those two appear in the same paragraph as the Wolf Prize sentence, with their years lost to the extraction (lesson 21).",
            sourceLessonSlug: "the-memoir-that-never-says-nobel",
          },
          {
            prompt: "What is an institutional fact, in lesson 21's vocabulary?",
            options: ["A checkable claim about an appointment, election or award", "A claim about how an institution usually behaves", "A fact recorded only in an institution's private files", "A claim that only an institution may publish"],
            correctIndex: 0,
            explanation: "It is verifiable against the body that made it, which is why Hargittai's list of firsts is filed as a research check rather than reprinted (lesson 21 vocabulary).",
            sourceLessonSlug: "the-memoir-that-never-says-nobel",
          },
          {
            prompt: "What does the Wolf citation say her exploration helped establish?",
            options: ["The precise form and non conservation of parity for the weak force", "The existence of the neutrino as a distinct particle", "The equality of the four fundamental interactions", "The structure of haemoglobin at atomic resolution"],
            correctIndex: 0,
            explanation: "The citation's own words, printed verbatim in lesson 20, describe what the exploration helped establish for this new natural force (lesson 20).",
            sourceLessonSlug: "the-1978-citation-that-names-her",
          },
          {
            prompt: "How does lesson 20 describe the 1978 citation among all the documents in this story?",
            options: ["The one that names her and nobody else", "The shortest of the prize citations read", "The only one written in English", "The only one that mentions the 1957 prize"],
            correctIndex: 0,
            explanation: "A sole laureate, named in the citation, with the prize share printed as None (lesson 20).",
            sourceLessonSlug: "the-1978-citation-that-names-her",
          },
          {
            prompt: "What does lesson 20 say reading the Wolf Prize as a rebuttal misses?",
            options: ["What the prize actually is", "The date on which it was awarded", "The identity of the awarding body", "The size of the prize fund"],
            correctIndex: 0,
            explanation: "Its own essay calls the Lee and Yang theory epochal, and it honours a career rather than a single investigation (lesson 20).",
            sourceLessonSlug: "the-1978-citation-that-names-her",
          },
          {
            prompt: "Which claim in lesson 22 rests on Klein's presentation speech?",
            options: ["That the ceremony named her and described her experiment", "That the author line held", "That Lee nominated her three times", "That a committee reader raised a doubt in 1971"],
            correctIndex: 0,
            explanation: "Each claim is listed with its document, and the ceremony claim rests on the presentation speech alone (lesson 22).",
            sourceLessonSlug: "what-this-course-does-not-claim",
          },
          {
            prompt: "What does lesson 22 say about the counting of the 1957 rows?",
            options: ["They were counted twice on different days", "They were taken from a published article", "They were counted once and checked against a script", "They were supplied by the Nobel Foundation on request"],
            correctIndex: 0,
            explanation: "Counting twice is the fourth defensive move of lesson 19, applied to the course's own central finding (lessons 19 and 22).",
            sourceLessonSlug: "what-this-course-does-not-claim",
          },
          {
            prompt: "What does the second move of the method tell you to prefer?",
            options: ["The document with an identifier", "The document published most recently", "The document with the most detail", "The document that is easiest to obtain"],
            correctIndex: 0,
            explanation: "Find the document for the stage you named, and prefer the one a reader can open by number (lesson 22).",
            sourceLessonSlug: "what-this-course-does-not-claim",
          },
          {
            prompt: "What does the third move ask you to print?",
            options: ["The locator", "The full text of the source", "The date you accessed the source", "The name of the tool you used"],
            correctIndex: 0,
            explanation: "The record number, the printed page and the scan page, the section, the timestamp: whatever tells the reader where to look (lesson 22).",
            sourceLessonSlug: "what-this-course-does-not-claim",
          },
          {
            prompt: "According to lesson 22, what do most arguments about credit turn out to be?",
            options: ["Arguments about different stages nobody has separated", "Arguments about the wording of a single sentence", "Arguments between institutions rather than people", "Arguments that no document could settle"],
            correctIndex: 0,
            explanation: "Which is why naming the stage is the first move, and why this course spends Section 6 on the four of them (lesson 22).",
            sourceLessonSlug: "what-this-course-does-not-claim",
          },
          {
            prompt: "Which of these is listed in lesson 22 as a claim the course does make?",
            options: ["That Lee and Yang were nominated once, on one form", "That the committee reasoned as the popular story says", "That Klein intended a slight by his form of address", "That the archive's 1957 list is certified complete"],
            correctIndex: 0,
            explanation: "Record 39-0 is the evidence. The other three are among the claims the course refuses to make (lesson 22).",
            sourceLessonSlug: "what-this-course-does-not-claim",
          },
          {
            prompt: "What does the Wolf essay say about the timing of the Lee and Yang theory relative to her experiment?",
            options: ["It had been developed just a few months before", "It was published two years earlier", "It was developed after the experimental result", "It appeared in the same issue of the same journal"],
            correctIndex: 0,
            explanation: "The essay's own phrasing, which the course prints verbatim because it shows the Foundation crediting the theory while awarding her the prize (lesson 20).",
            sourceLessonSlug: "the-1978-citation-that-names-her",
          },
          {
            prompt: "What is a damaged extraction?",
            options: ["Text pulled from a document with characters lost or altered", "A document that was torn before being scanned", "A file corrupted during download", "A translation that changes a source's meaning"],
            correctIndex: 0,
            explanation: "It limits what the file may be quoted for, which is why the memoir's words are used and its years are not (lesson 21 vocabulary).",
            sourceLessonSlug: "the-memoir-that-never-says-nobel",
          },
          {
            prompt: "Which institutions does lesson 21 name as the places to check Hargittai's firsts against?",
            options: ["Columbia, Princeton, the American Physical Society and the National Science Foundation", "The Nobel Foundation and the Wolf Foundation", "The National Bureau of Standards and the Atomic Energy Commission", "The Royal Swedish Academy and the National Academy of Sciences"],
            correctIndex: 0,
            explanation: "Each first is a small institutional fact verifiable against the body that made it, and none of those checks was done for this build (lesson 21).",
            sourceLessonSlug: "the-memoir-that-never-says-nobel",
          },
          {
            prompt: "Where in the National Academy memoir does the Wolf Prize sentence appear?",
            options: ["In the paragraph listing her honours", "In the opening biographical summary", "In a footnote to the parity discussion", "In the bibliography of her published papers"],
            correctIndex: 0,
            explanation: "The same paragraph carries her Columbia appointments, the Pupin professorship, her Academy election and the National Medal of Science (lesson 20 sources).",
            sourceLessonSlug: "the-1978-citation-that-names-her",
          },
          {
            prompt: "What does lesson 22 say a later prize can do?",
            options: ["Add something beside the record", "Reverse an earlier committee's decision", "Trigger a review of an earlier prize year", "Transfer a share of an earlier award"],
            correctIndex: 0,
            explanation: "It cannot undo the earlier act, because the stage at which that act failed has closed (lesson 22).",
            sourceLessonSlug: "what-this-course-does-not-claim",
          },
          {
            prompt: "Which body publishes the biographical memoir discussed in lesson 21?",
            options: ["The National Academy of Sciences", "The American Physical Society, for its past presidents", "Columbia University, for its emeritus faculty", "The Wolf Foundation, for its laureates"],
            correctIndex: 0,
            explanation: "The Academy publishes memoirs of its deceased members, and Wu was elected to it during her Columbia career (lesson 21).",
            sourceLessonSlug: "the-memoir-that-never-says-nobel",
          },
          {
            prompt: "How does lesson 22 describe the proper ending for a course about evidence?",
            options: ["Stating its own limits as plainly as anybody else's", "Summarising its findings without qualification", "Recommending further reading on the subject", "Inviting the reader to reach their own verdict"],
            correctIndex: 0,
            explanation: "That is the whole purpose of the lesson, and it lists what the course did not read alongside what it claims (lesson 22).",
            sourceLessonSlug: "what-this-course-does-not-claim",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // FINAL ASSESSMENT — pools 44, serves 10, passes at 80
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "who-gets-nominated-final",
      title: "Final assessment · Who Gets Nominated",
      section: "Final assessment",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          {
            prompt: "How many nominations did Chien-Shiung Wu receive for the 1957 physics prize?",
            options: ["None", "Twenty-three, filed across that single year", "One, on the same form as Lee and Yang", "Six, the number she received in her peak year"],
            correctIndex: 0,
            explanation: "The archive's 1957 physics list runs to 66 nomination rows and she is on none of them (lesson 11).",
            sourceLessonSlug: "the-1957-list",
          },
          {
            prompt: "Across what years do her twenty-three nominations fall?",
            options: ["1958 to 1974", "1955 to 1957, clustering around the parity work", "1957 to 1997, ending at her death", "1978 to 1988, after the Wolf Prize"],
            correctIndex: 0,
            explanation: "The first is 1958 and the last 1974, spread over ten distinct years. Not one is for the 1957 prize (lesson 12).",
            sourceLessonSlug: "twenty-three-nominations",
          },
          {
            prompt: "How many times were Lee and Yang nominated for the 1957 prize?",
            options: ["Once", "Seven times, the same as Eugene Wigner", "Twice, once each under their own names", "Twenty-three times, matching Wu's later total"],
            correctIndex: 0,
            explanation: "One form, record 39-0, two nominees, one nominator: J A Simpson of Chicago (lesson 11).",
            sourceLessonSlug: "the-1957-list",
          },
          {
            prompt: "At which of the four stages did this case fail?",
            options: ["The nomination", "The author line, where her name was demoted", "The citation, which left her out of a sentence", "The assessment, where the committee rejected her"],
            correctIndex: 0,
            explanation: "Stage one held, stage three had nothing to assess in 1957 and stage four never applied to her. The failure is at stage two (lesson 17).",
            sourceLessonSlug: "four-stages-of-credit",
          },
          {
            prompt: "Whose name is first on the 1957 Physical Review Letter?",
            options: ["C. S. Wu", "E. Ambler, the first of the Bureau of Standards authors", "T. D. Lee, whose proposal it tested", "R. P. Hudson, the cryogenics specialist"],
            correctIndex: 0,
            explanation: "Wu first, alone under Columbia University, with the four Bureau of Standards authors following in alphabetical order (lesson 4).",
            sourceLessonSlug: "the-byline-read-as-a-document",
          },
          {
            prompt: "Who is thanked in the acknowledgment of that Letter?",
            options: ["Lee and Yang", "The National Bureau of Standards cryogenics group", "The Atomic Energy Commission, which funded the work", "Columbia University's physics department"],
            correctIndex: 0,
            explanation: "The experimenters on the byline thank the two theorists, who held the Nobel Prize within the year. The Atomic Energy Commission appears in a funding footnote instead (lesson 6).",
            sourceLessonSlug: "the-acknowledgment-that-runs-the-other-way",
          },
          {
            prompt: "What did Klein's presentation speech say about the first of the proposed experiments?",
            options: ["It was carried out by Mrs. C.S. Wu and her collaborators", "It had not yet been performed at the time of the ceremony", "It was carried out at the National Bureau of Standards without naming anyone", "It was proposed and performed by Lee and Yang themselves"],
            correctIndex: 0,
            explanation: "He then spent two further paragraphs describing the cobalt-60 experiment, which is why this is not a story about a woman nobody mentioned (lesson 8).",
            sourceLessonSlug: "the-speech-that-names-her",
          },
          {
            prompt: "What is wrong with the claim that Lee and Yang thanked Wu in their acceptance speech?",
            options: ["Neither banquet speech names her", "Only one of them gave a banquet speech that year", "The thanks were given before the prize was announced", "The speech was never published by the Nobel Foundation"],
            correctIndex: 0,
            explanation: "The thanks are in Yang's Nobel lecture, a different document on a different day, and Lee did not name her at all (lesson 9).",
            sourceLessonSlug: "two-lectures-two-banquet-speeches",
          },
          {
            prompt: "How many times does Wu appear in Lee's Nobel lecture?",
            options: ["Once, in the reference list", "Four times, three of them in the body", "Not at all, in any part of the lecture", "Twice, in the body and the bibliography"],
            correctIndex: 0,
            explanation: "Reference 3 on printed page 418 is the only occurrence. The four-mention count belongs to Yang's lecture (lesson 9).",
            sourceLessonSlug: "two-lectures-two-banquet-speeches",
          },
          {
            prompt: "What does Yang's Nobel lecture say physicists owe to the experimental group?",
            options: ["The developments concerning parity conservation that year", "The low-temperature technique itself", "The proposal that led to the experiment", "The correct interpretation of the theta-tau puzzle"],
            correctIndex: 0,
            explanation: "To their courage and their skill, physicists owe the exciting and clarifying developments concerning parity conservation in the past year (Yang, 1957, p. 399).",
            sourceLessonSlug: "two-lectures-two-banquet-speeches",
          },
          {
            prompt: "How many times did Tsung-Dao Lee nominate Wu?",
            options: ["Three", "Once, in 1964", "Never, on the open record", "Six, once for each of the 1971 filings"],
            correctIndex: 0,
            explanation: "1964, 1971 and 1972. Yang, on the open record through 1974, never did (lesson 12).",
            sourceLessonSlug: "twenty-three-nominations",
          },
          {
            prompt: "How many of her nominators already held the Nobel Prize in Physics when they filed?",
            options: ["Five", "One, Tsung-Dao Lee", "Eighteen, since every nominator holds a prize", "None, which is why the campaign failed"],
            correctIndex: 0,
            explanation: "Kusch, Lamb, Lee, Segre and Rabi. Jack Steinberger, who filed in 1971, won his own prize in 1988 (lesson 12).",
            sourceLessonSlug: "twenty-three-nominations",
          },
          {
            prompt: "What noun does the 1957 Nobel citation use for the prize-winning work?",
            options: ["Investigation", "Experiment, which is why the experimenters read themselves into it", "Theory, distinguishing the laureates from the experimenters", "Discovery, attributed directly to the laureates"],
            correctIndex: 0,
            explanation: "For their penetrating investigation of the so-called parity laws. The citation uses neither experiment nor theoretical anywhere (lesson 7).",
            sourceLessonSlug: "the-citation-and-what-it-names",
          },
          {
            prompt: "What did the archive do when a search was built from unrecognised parameters?",
            options: ["Served a successful response and the 1901 list", "Refused the request with a clear error", "Returned an empty table with no rows", "Redirected to the archive's home page"],
            correctIndex: 0,
            explanation: "Nothing about that response looks like a failure, which is why a successful status is not proof the query ran (lesson 19).",
            sourceLessonSlug: "http-200-is-not-proof",
          },
          {
            prompt: "Why does a finding of zero deserve more checking than other counts?",
            options: ["Zero is what a query that never ran produces", "Zero cannot be confirmed by a second reader", "Zero is always the result of a withheld record", "Zero is harder to count accurately than a large number"],
            correctIndex: 0,
            explanation: "It is the easiest result to get by accident, which is why lesson 13 asks the learner to reproduce it themselves (lesson 19).",
            sourceLessonSlug: "http-200-is-not-proof",
          },
          {
            prompt: "Which two quotations does this course refuse to print?",
            options: ["Ones attributed to Oppenheimer and Steinberger", "Ones attributed to Telegdi and Cronin", "Ones attributed to Klein and Siegbahn", "Ones attributed to Kurti and Sutton"],
            correctIndex: 0,
            explanation: "Both were fetched for in the two named Physics World articles and neither article contains either name. The others are quoted, from Hargittai (lesson 16).",
            sourceLessonSlug: "two-quotations-that-could-not-be-traced",
          },
          {
            prompt: "What does the course say is better evidence than a famous quotation?",
            options: ["A nomination record", "A secondary account by a named historian", "A laureate's published lecture", "A committee's internal assessment"],
            correctIndex: 0,
            explanation: "It is signed, dated and numbered, written at the time for a purpose other than making an argument. Twenty-three were verified and zero quotations were (lesson 18).",
            sourceLessonSlug: "a-nomination-beats-a-quotation",
          },
          {
            prompt: "What does this course firmly decline to claim about the committee?",
            options: ["That it excluded her because she was a woman", "That it recorded its reasoning in 1957", "That it considered her in 1971", "That its file was sealed until 2025"],
            correctIndex: 0,
            explanation: "No document read for this course supports it, and the only committee-side reasoning on the record gives a different reason (lesson 22).",
            sourceLessonSlug: "what-this-course-does-not-claim",
          },
          {
            prompt: "What did Bengt Nagel write, as Larsson and Wyss report it?",
            options: ["He felt hesitant about the theoretical importance as motivation", "He recommended the prize be awarded to Wu at once", "He found the experiments technically flawed", "He declined to assess the case at all"],
            correctIndex: 0,
            explanation: "He called the experiments of great importance while doubting whether their theoretical importance sufficed as motivation, partly because they followed theorists' suggestions (lesson 15).",
            sourceLessonSlug: "what-a-committee-reader-wrote",
          },
          {
            prompt: "How must a lesson in this course introduce anything from the 1957 committee file?",
            options: ["As what Larsson and Wyss report", "As what the committee decided", "As an established historical fact", "As a claim the archive has confirmed"],
            correctIndex: 0,
            explanation: "The course has not seen the documents. A named account of a document is evidence about it, and is not the document (lesson 15).",
            sourceLessonSlug: "what-a-committee-reader-wrote",
          },
          {
            prompt: "What argument does Valentine Telegdi make about experimentalists in this case?",
            options: ["Where is the merit, if the theorists suggested it", "That the experimenters deserved the prize more than the theorists", "That the Bureau of Standards should have been named", "That the prize rules unfairly favour theory over experiment"],
            correctIndex: 0,
            explanation: "And he adds that this is true for him too, having published a competing 1957 parity result with Friedman (lesson 14).",
            sourceLessonSlug: "the-physicists-who-contest-it",
          },
          {
            prompt: "What is Hargittai's own conclusion about the injustice reading?",
            options: ["It oversimplifies a complex story", "It is fully supported by the nomination record", "It is impossible to evaluate without the committee file", "It understates how badly Wu was treated"],
            correctIndex: 0,
            explanation: "She writes that Wu made an outstanding contribution but that calling the omission an injustice is an oversimplification (lesson 14).",
            sourceLessonSlug: "the-physicists-who-contest-it",
          },
          {
            prompt: "What is the 1978 Wolf Prize citation's prize share for Wu?",
            options: ["None", "One half, matching the 1957 Nobel arrangement", "One third, shared with two Bureau of Standards authors", "The Foundation does not publish shares"],
            correctIndex: 0,
            explanation: "None is how the Wolf Foundation records a sole laureate, with no co-recipients and no second name (lesson 20).",
            sourceLessonSlug: "the-1978-citation-that-names-her",
          },
          {
            prompt: "Why is the Wolf Prize not a rebuttal of the 1957 decision?",
            options: ["Its own essay calls the Lee and Yang theory epochal", "It was awarded after her death", "It was given for work unrelated to parity", "It was shared with the 1957 laureates"],
            correctIndex: 0,
            explanation: "And it honours a career spanning roughly 1948 to 1963 and beyond rather than one investigation (lesson 20).",
            sourceLessonSlug: "the-1978-citation-that-names-her",
          },
          {
            prompt: "How many occurrences of the word Nobel appear in the National Academy memoir's extracted text?",
            options: ["Zero", "Nineteen, matching the count for parity", "Eleven, matching the count for Columbia", "Two, matching the count for Ambler"],
            correctIndex: 0,
            explanation: "The seventeen-page memoir tells the parity story at length and never uses the word, on two independent passes a day apart (lesson 21).",
            sourceLessonSlug: "the-memoir-that-never-says-nobel",
          },
          {
            prompt: "Why does the course print no years from that memoir?",
            options: ["Its extraction drops most digits", "Its years disagree with every other source", "The Academy has withdrawn the dates", "The memoir gives no years in its text"],
            correctIndex: 0,
            explanation: "A source that cannot hold its numbers must not be quoted for a number, so the course takes the words and leaves the dates (lesson 21).",
            sourceLessonSlug: "the-memoir-that-never-says-nobel",
          },
          {
            prompt: "What does the Lee and Yang 1957 nomination record say in its Comments field?",
            options: ["Information about nominations to Yang cannot be released", "The nomination arrived after the annual deadline", "The nominator withdrew the form before the decision", "The committee returned the form for correction"],
            correctIndex: 0,
            explanation: "It cites the statutes governing the Nobel archives and the rule about material relating to a named living person, which is why no count from the archive is exhaustive (lesson 10).",
            sourceLessonSlug: "what-the-nomination-archive-is",
          },
          {
            prompt: "What does the withholding note mean for the archive counts in this course?",
            options: ["None of them can be called exhaustive", "All of them must be doubled to allow for omissions", "Only the 1957 counts are affected", "They must be taken from the committee book instead"],
            correctIndex: 0,
            explanation: "The publishing body says on its own page that material is withheld, and the course prints that caveat beside its counts every time (lesson 10).",
            sourceLessonSlug: "what-the-nomination-archive-is",
          },
          {
            prompt: "What did Lee and Yang conclude in May 1956 about the existing evidence?",
            options: ["Past weak-interaction experiments had no bearing on parity", "Parity conservation had already been disproved in beta decay", "The theta-tau particles were certainly identical", "A mirror-image experiment had been run and misread"],
            correctIndex: 0,
            explanation: "Conclusion (A). Conclusion (B) was that strong-interaction tests, though accurate, were not accurate enough to reveal a weak-interaction violation (Yang, 1957, p. 398).",
            sourceLessonSlug: "what-lee-and-yang-asked",
          },
          {
            prompt: "What made theta and tau a puzzle rather than two ordinary particles?",
            options: ["Their decays implied different parities but they matched in mass and lifetime", "They were never observed in the same laboratory", "Their masses differed by exactly one electron mass", "They decayed into the same number of pi mesons"],
            correctIndex: 0,
            explanation: "Masses to a fraction of a percent and lifetimes to about 20 percent, which particles of different spin and parity are not expected to share (lesson 1).",
            sourceLessonSlug: "the-puzzle-that-would-not-resolve",
          },
          {
            prompt: "Why did the cobalt-60 experiment have to run at very low temperatures?",
            options: ["To keep the nuclei aligned against thermal jostling", "To slow the decay so counters could follow it", "To prevent the sample melting in the magnetic field", "To match the conditions stated in the 1956 proposal"],
            correctIndex: 0,
            explanation: "Yang's lecture says it had to be done at very low temperatures to eliminate disturbing outside influences, and that the combined technique was unknown before (lesson 5).",
            sourceLessonSlug: "what-the-experiment-had-to-do",
          },
          {
            prompt: "Which second symmetry law did the same experiment show to be violated?",
            options: ["Charge conjugation invariance", "Time reversal invariance", "Isotopic spin conservation", "Rotational invariance"],
            correctIndex: 0,
            explanation: "Yang's lecture flags it on printed page 400 and says Lee will take it up. Time reversal invariance was still being tested at the time (lesson 5).",
            sourceLessonSlug: "what-the-experiment-had-to-do",
          },
          {
            prompt: "Which three women appear on the 1957 physics nomination list?",
            options: ["Blau, Hodgkin and Goeppert-Mayer", "Wu, Blau and Hodgkin", "Goeppert-Mayer, Wu and Hodgkin", "Blau, Wu and Goeppert-Mayer"],
            correctIndex: 0,
            explanation: "Nominated by Schrodinger, Bernal and Franck respectively. Wu appears on none of the rows (lesson 11).",
            sourceLessonSlug: "the-1957-list",
          },
          {
            prompt: "What does the presence of those three women show, in this course's careful phrasing?",
            options: ["The 1957 list was not one from which women were absent", "The 1957 committee actively sought women candidates", "Physics in 1957 treated women fairly", "Wu's absence must have a technical explanation"],
            correctIndex: 0,
            explanation: "Narrow on purpose: whatever explains her absence, it cannot be that the list had no room for women in it (lesson 11).",
            sourceLessonSlug: "the-1957-list",
          },
          {
            prompt: "What are the two counts of 1957 physics nominations, and where does each come from?",
            options: ["66 from the online archive, 58 from the committee book", "58 from the online archive, 66 from the committee book", "66 and 67, both from the online archive", "23 and 34, both from the name search"],
            correctIndex: 0,
            explanation: "Larsson and Wyss report 58 from the bound book. The course reconciles nothing and says never to print either figure without its source (lesson 11).",
            sourceLessonSlug: "the-1957-list",
          },
          {
            prompt: "What does a locator add to a citation?",
            options: ["It says where in the source to look", "It records who fetched the source and when", "It proves the source is free to reproduce", "It identifies which edition was consulted"],
            correctIndex: 0,
            explanation: "A record number, a printed page and a scan page, a section, a timestamp. Without one, a citation says only that something somewhere supports the claim (lesson 18).",
            sourceLessonSlug: "a-nomination-beats-a-quotation",
          },
          {
            prompt: "Why do this course's Nobel lecture citations give two page numbers?",
            options: ["The printed page and the PDF page differ by six", "The lectures appear in two different editions", "One page number is the lecture and one the reference list", "The Nobel Foundation repaginates its files periodically"],
            correctIndex: 0,
            explanation: "A reader sent to page 399 of the file lands six pages short of printed page 399 (lesson 18).",
            sourceLessonSlug: "a-nomination-beats-a-quotation",
          },
          {
            prompt: "What is the first move of the four-move method this course leaves you with?",
            options: ["Name the stage", "Find the document", "Print the locator", "Say what you could not check"],
            correctIndex: 0,
            explanation: "Most arguments about credit are arguments about different stages that nobody has separated (lesson 22).",
            sourceLessonSlug: "what-this-course-does-not-claim",
          },
          {
            prompt: "Why can no later prize repair this particular failure?",
            options: ["The stage at which it failed has closed", "Later prizes are awarded by different bodies", "The Nobel statutes forbid reconsideration", "The archive stops accepting nominations after fifty years"],
            correctIndex: 0,
            explanation: "Nothing can retroactively put a name in front of the 1957 committee. A later award adds something beside the record (lesson 22).",
            sourceLessonSlug: "what-this-course-does-not-claim",
          },
          {
            prompt: "What is the only true statement about Yang and the nomination record?",
            options: ["The record open through 1974 shows no nomination by him", "He never nominated her at any time in his life", "He nominated her once in a year the archive withholds", "He publicly opposed her candidacy"],
            correctIndex: 0,
            explanation: "The archive closes at 1974 and he lived until 2025, so the statement is about a record rather than about a man (lesson 12).",
            sourceLessonSlug: "twenty-three-nominations",
          },
          {
            prompt: "What reason did Ernest Ambler give for inviting Wu to head the author list?",
            options: ["Courtesy for bringing the Lee and Yang preprint", "Her seniority over the other four authors", "A Columbia requirement for joint papers", "A journal policy on multi-institution Letters"],
            correctIndex: 0,
            explanation: "As Hargittai quotes him. Other Bureau authors have described it as courtesy toward a woman, and the Bureau's usual custom was alphabetical (lesson 4).",
            sourceLessonSlug: "the-byline-read-as-a-document",
          },
          {
            prompt: "Which fact is missing from the 1957 Letter itself?",
            options: ["Where the experiment was performed", "Which isotope was used", "The date the manuscript was received", "The names of the authors' institutions"],
            correctIndex: 0,
            explanation: "The affiliations appear but the location of the work does not, an absence Hargittai calls a misleading oversight (lesson 4).",
            sourceLessonSlug: "the-byline-read-as-a-document",
          },
          {
            prompt: "What is the right use of an encyclopedia entry when checking a quotation?",
            options: ["Follow its references to the thing it cites", "Cite it when no better source is available", "Treat it as settled if several editors agree", "Use it for dates but not for wording"],
            correctIndex: 0,
            explanation: "Here the references ran out before reaching a source, and the correct conclusion is that the claim is unverified rather than false (lesson 16).",
            sourceLessonSlug: "two-quotations-that-could-not-be-traced",
          },
          {
            prompt: "What does this course do with a claim it can neither verify nor attribute?",
            options: ["Leaves it out and files a research check", "Prints it with a hedge naming the doubt", "Puts it in a footnote for completeness", "Assigns it to the most plausible speaker"],
            correctIndex: 0,
            explanation: "Attribution rescues a reported claim. An unverified one with nobody to attribute it to goes into the research queue instead (lessons 15 and 16).",
            sourceLessonSlug: "two-quotations-that-could-not-be-traced",
          },
        ],
      },
    },
  ],
};

// ══════════════════════════════════════════════════════════════════════════════════════════════
// D5a SOURCE TIERING (rubric v1.3, CLAUDE.md source-hosting rule), for whoever runs
// `pnpm gen:citations`. The tier is decided PER SOURCE, not per course, and this course's private
// visibility is a separate question from whether a document may be rehosted.
//
// TIER A, free to host (US federal work, out of copyright, or an open licence): **NONE.**
//   Nothing this course cites qualifies, and two near-misses are worth naming so nobody upgrades
//   them by accident:
//   - The National Academy of Sciences biographical memoir is NOT a US federal work. The Academy is
//     a private non-profit chartered by Congress, not an agency, so 17 U.S.C. 105 does not reach it.
//     Tier B.
//   - The APS PDF of the 1957 Letter is marked "Free to Read". That is an access setting, not a
//     licence, and it is the exact Tier B trap CLAUDE.md names. Tier B.
//
// TIER B, copyrighted but publicly readable, LINK ONLY, never upload to Cloudinary:
//   - Nobel Prize Outreach AB: the 1957 summary page, Klein's presentation speech, both banquet
//     speeches, both Nobel lecture PDFs, and every nomination archive page (search.php, list.php
//     and each show.php record). All open without a login; all are the Foundation's copyright.
//   - Wu, C. S., Ambler, E., Hayward, R. W., Hoppes, D. D., & Hudson, R. P. (1957), Phys. Rev.
//     105(4), 1413-1415, via doi.org/10.1103/PhysRev.105.1413. American Physical Society copyright.
//   - Hargittai, M. (2012), Larsson, M., & Wyss, R. (2026), and Physics World (2020). IOP
//     Publishing copyright; all three open freely today, which decides nothing.
//   - Benczer-Koller, N. (2009), the National Academy memoir PDF at biographicalmemoirs.org.
//   - Wolf Foundation (n.d.), the 1978 laureate page at wolffund.org.il.
//
// TIER C, cite only, no link to a copy, nothing to upload:
//   - Wu, C. S. (1973), in B. Maglich (Ed.), *Adventures in Experimental Physics: Gamma Volume*.
//     Not obtained. It is named in lesson 5 as her published account, reached only through
//     Hargittai's quotation, and is research check A.
//   - The Kurti and Sutton note. Quoted only as Hargittai quotes it, because the publication it
//     appeared in could not be identified. Research check B.
//   - The 1957 physics committee file, Center for History of Science, Royal Swedish Academy of
//     Sciences. A physical archive in Stockholm, not visited. It appears in this course only
//     through Larsson and Wyss, and is never cited as a source in its own right.
//   - The Statutes of the Nobel Foundation. Not read, so the publication-deadline rule is stated
//     only as Barany's account of it. Research check C.
//
// LOCATORS. Every `## Sources` entry above carries one, per the 2026-09-20 rule:
//   - Nobel lectures: the PRINTED page AND the PDF page, because they differ by six. Yang's lecture
//     is printed pp. 393-403 across 11 PDF pages, Lee's printed pp. 406-418 across 13.
//   - Archive records: the record NUMBER (39-0, 75-0) and, where a page was read in full, the
//     show.php id (15049, 15372, 24827, 21865, 22343).
//   - The Physical Review Letter: the page the byline sits on (1413), the closing paragraph for the
//     acknowledgment, and the statement that both were read from the PAGE IMAGE, because the OCR of
//     the 1957 typesetting renders Wu as Ku and Columbia as Cotumbia.
//   - Web pages with no pagination say which paragraph or section of the page carries the quotation.
//   - The National Academy memoir: the paragraph, plus the counts and the search method, plus the
//     warning that the extraction drops digits so no year may be taken from it.
//
// ══════════════════════════════════════════════════════════════════════════════════════════════
// PROPOSED RESEARCH CHECKS for src/lib/research-checks.ts (I do not own that file). Each is written
// in the ResearchCheck shape. `course` is the slug to be registered, `who-gets-nominated`.
//
//  A. key "wu-proposed-cobalt-60-method" · course who-gets-nominated · severity HIGH
//     lesson: "what-the-experiment-had-to-do"
//     quote: "This course will not tell you whose idea the cobalt-60 method was."
//     title: Did Wu write that she proposed the cobalt-60 method?
//     question: In Wu, C. S. (1973), in B. Maglich (Ed.), Adventures in Experimental Physics: Gamma
//               Volume, does she write that she suggested using a cobalt-60 beta source polarised by
//               the demagnetisation method when Lee raised the problem in spring 1956? Quote the
//               sentence and give its page.
//     claim: The course says only that her published account, as Hargittai quotes it, describes her
//            suggesting the method, and refuses to state whose idea it was.
//     stakes: This is the document that answers Bengt Nagel and Valentine Telegdi. Their shared
//             objection is that the experiment was performed at a theorist's suggestion. If Wu's own
//             published account says she chose the method, the objection loses its footing, and
//             lessons 5, 14 and 15 all change. It is the highest-value open question in the course.
//     needs: the verbatim sentence with its page; the volume's full bibliographic record; whether
//            any co-author published a contrary account.
//     where: Maglich, B. (Ed.), Adventures in Experimental Physics: Gamma Volume (1973), World
//            Science Education / Princeton; a university library holding it; Hargittai (2012) for
//            the passage she quotes, as a pointer to the page.
//
//  B. key "kurti-sutton-note-publication" · severity medium · lesson "the-physicists-who-contest-it"
//     quote: "the publication the note appeared in could not be identified from the page as fetched"
//     title: Where did the Kurti and Sutton note appear?
//     question: In which publication, issue and page did Nicholas Kurti and Christine Sutton publish
//               the note stating for the record that the parity violation experiment was a
//               collaborative team effort?
//     claim: The course quotes the note as Hargittai quotes it and names no outlet.
//     stakes: A quotation with no outlet is one step from the untraceable quotations lesson 16
//             refuses to print. The note is used as one of the four contesting voices, so it should
//             carry a citation of the same quality as the others.
//     needs: the outlet, date, volume and page; whether the fetched Hargittai page names it in a
//            link that did not survive text extraction.
//     where: CERN Courier, which Hargittai identifies Sutton as having edited; the Hargittai article
//            read in a browser rather than as extracted text; Kurti's published bibliography.
//
//  C. key "nobel-publication-deadline-rule" · severity medium · lesson "the-physicists-who-contest-it"
//     quote: "That is an account of a rule offered by a former officer, not the text of a statute."
//     title: Do the Nobel statutes require the awarded work to have been published before the prize year?
//     question: Do the Statutes of the Nobel Foundation, or the Royal Swedish Academy's own rules,
//               require that the work being rewarded was published before the year of the award?
//               Quote the operative article and paragraph.
//     claim: The course reports Anders Barany's account that the awarded work must have been
//            published before the year of the prize, and explicitly does not state the rule itself.
//     stakes: If the rule holds as Barany states it, the 1957 outcome has a procedural explanation
//             that applies to every experimentalist that year and makes the nomination count a
//             secondary fact. If it does not, the course is right to have refused it.
//     needs: the article and paragraph, quoted, from the statutes as they stood in 1957 and as they
//            stand now; a source for the 1957 text if it has since been amended.
//     where: nobelprize.org statutes pages; the Nobel Foundation's published Statutes; Crawford, E.,
//            The Beginnings of the Nobel Institution, for the historical text.
//
//  D. key "wu-institutional-firsts-years" · severity low · lesson "the-memoir-that-never-says-nobel"
//     quote: "The years for all of that are not printed here"
//     title: The years of Wu's institutional firsts
//     question: In which years was Wu given tenure at Columbia, promoted to full professor,
//               appointed the first Michael I. Pupin Professor of Physics, elected to the National
//               Academy of Sciences, elected president of the American Physical Society, and awarded
//               the National Medal of Science?
//     claim: The course prints the National Academy memoir's WORDS for the Columbia appointments and
//            prints no years at all, because the PDF extraction dropped the digits. It reports that
//            Hargittai supplies dates without reprinting them.
//     stakes: Low individually and high in aggregate: six small institutional facts that a reader
//             will reasonably expect a course to know, currently absent rather than wrong.
//     needs: each year with the institution's own record behind it.
//     where: the National Academy memoir read as PAGE IMAGES rather than extracted text, which is
//            the cheapest fix and probably settles most of them; Columbia physics department
//            records; the American Physical Society past-presidents list; the National Science
//            Foundation National Medal of Science laureate list (my guessed NSF URL 404ed, so find
//            the real one rather than guessing again).
//
//  E. key "nomination-count-66-vs-58" · severity medium · lesson "the-1957-list"
//     quote: "This course cannot reconcile the two and does not try."
//     title: Why does the 1957 physics nomination count differ between the archive and the committee book?
//     question: Why does the online nomination archive return 66 nomination rows for physics 1957
//               while Larsson and Wyss report 58 from the bound committee book? Is a multi-nominee
//               form counted once in one and once per nominee in the other, or is something missing
//               from one of them?
//     claim: The course prints both numbers with their sources, offers the multi-nominee explanation
//            as an explicitly labelled guess, and reconciles nothing.
//     stakes: The central finding is a count from that same list. If the two sources disagree because
//             one is incomplete, a reader is entitled to know which, and the withholding note on
//             record 39-0 makes the question live rather than pedantic.
//     needs: the counting convention each source uses; whether the 58 excludes forms naming several
//            people; whether any 1957 physics nomination is withheld from the online archive.
//     where: Larsson and Wyss directly, since they are named authors who read the book; the Nobel
//            Prize Outreach archive team; the archive's own about page for its counting rules.
//
//  F. key "nas-memoir-nobel-absence" · severity low · lesson "the-memoir-that-never-says-nobel"
//     quote: "asks you to confirm from the pages before repeating it"
//     title: Confirm from page images that the National Academy memoir never says Nobel
//     question: Read all 17 pages of Benczer-Koller (2009) as page images and confirm that the word
//               Nobel appears nowhere in it.
//     claim: The course states the zero count, states the method (a whitespace-insensitive search of
//            the extracted text, two passes a day apart) and asks the reader to confirm.
//     stakes: The extraction is known to be damaged, since it drops most digits. A claim about an
//             absence built on a damaged extraction is exactly the kind of claim lesson 19 warns
//             about, and the course would rather be checked than believed.
//     needs: a yes or no from the page images, with any occurrence's page number if one is found.
//     where: http://biographicalmemoirs.org/pdfs/wu-chien-shiung.pdf, read page by page. Note that
//            the nasonline.org copy returned HTTP 403 to curl, with and without a referer.
//
//  G. key "wu-nn-nominators" · severity low · lesson "what-the-nomination-archive-is"
//     quote: "This course does not name anybody, because the database does not"
//     title: Who filed the two anonymised nominations for Wu?
//     question: Who filed the nominations recorded as N.N. in 1964 (record 44-0) and 1974 (record
//               48-2)? Larsson and Wyss, and a 2020 Physics World piece, both name Herwig Schopper as
//               one of her nominators, and the online database names no Schopper anywhere.
//     claim: The course says the public database anonymises two of the twenty-three and names nobody.
//     stakes: Low. Nothing in the course depends on it. It is filed because two published sources
//             name someone the database does not, and an unresolved disagreement between sources is
//             worth recording rather than smoothing.
//     needs: a source that names either nominator, or confirmation from the archive that the names
//            are withheld under the statutes.
//     where: Larsson and Wyss; Physics World (2020); Nobel Prize Outreach archive enquiries.
//
// ══════════════════════════════════════════════════════════════════════════════════════════════
// PROPOSED REGISTRATION BLOCK for scripts/seed-courses.ts (I do not own that file).
// Import: `import { WHO_GETS_NOMINATED_COURSE } from "./data/who-gets-nominated-course";`
// NO migration. NO seed:* re-run beyond `pnpm seed:courses`.
//
//   // "Who Gets Nominated" (Chien-Shiung Wu, plans/83 E-10). PRIVATE study, by BAM's approval on
//   // 2026-09-20 of plans/future-courses/uncredited/2026-09-19-chien-shiung-wu-brief.md, built
//   // STANDALONE rather than as a section of `what-the-citation-records` because the mechanism is
//   // different: the deciding document here is a COUNT of nomination rows, not the wording of a
//   // citation. Its central finding overturns the popular telling: she received ZERO nominations
//   // for the 1957 prize, and the famous 23 are all 1958 to 1974, after it. NO series code, per
//   // BAM's 2026-09-19 decision that private courses carry none. NO migration: pnpm seed:courses.
//   await seedAuthoredCourse(db, {
//     tenantId: learnWitus,
//     instructorId,
//     slug: "who-gets-nominated",
//     course: WHO_GETS_NOMINATED_COURSE,
//     category: "Culture & History",
//     additionalCategories: ["Science & Math"],
//     seriesSlug: "credit",
//     seriesTitle: "Credit: Who Gets Named",
//     seriesOrder: 15,
//     navigationMode: "linear",
//     price: 0,
//     priceType: "free",
//     visibility: "private",
//     publishHoldReason:
//       "Private study for BAM (plans/83). Built from the Nobel Prize nomination archive, read record by record, plus the 1957 prize record, the two Nobel lectures, both banquet speeches and the 1957 Physical Review Letter. It contradicts the popular telling of this case: she received no nominations for the 1957 prize, and the twenty-three famous ones are all later. The committee's own documented reasoning reaches the course only through two named authors who read the file, is attributed to them throughout, and is never stated as a decision of the committee. Two quotations that circulate widely could not be traced to any source and do not appear.",
//   });
//
// WHY "Culture & History" IS PRIMARY AND "Science & Math" SECONDARY, since the brief proposed the
// reverse: the deciding documents are archival and administrative (a nomination count, a ceremony
// speech, a committee file) and the method taught is source criticism, which is the Culture &
// History spine the whole credit series sits on. Its three nearest neighbours, `what-the-citation-
// records`, `the-author-line-and-the-finding` and `whose-name-is-on-the-score`, all carry Culture &
// History primary, and a learner browsing the series should find them together. Science & Math is
// genuinely earned rather than decorative: Section 1 teaches the theta-tau puzzle, the four classes
// of interaction and why parity conservation had gone untested, and Section 2 teaches what aligning
// nuclei near absolute zero required and why the result also broke charge conjugation invariance.
// If a reviewer prefers the brief's ordering, swap them; the course stands under either.
//
// FOR THE REGISTERING AGENT (all outside this file):
//  - CITATIONS: add `who-gets-nominated` to STAGED_COURSES in src/lib/citations.ts and run
//    `pnpm gen:citations` once seeded. Every lesson carries an APA 7 `## Sources` block with a
//    locator, and the D5a tiers above say which entries may be hosted. The answer is none of them.
//  - RESEARCH CHECKS: the seven above, A to G. A is the high-severity one and is the single question
//    whose answer would change three lessons.
//  - STANDARDS: a primary-source history course (sourcing, corroboration, chronology, claim versus
//    evidence, reading a record that contradicts a popular account), so per the repo rule it should
//    be MAPPED in src/lib/standards/ rather than BACKLOGged. Until it is mapped it needs a BACKLOG
//    line in scripts/check-standards-coverage.ts or `pnpm lint` fails.
//  - SERIES: seriesOrder 15. Orders 9 to 12 and 14 are taken in scripts/seed-courses.ts as of this
//    build and 13 is unoccupied there; BAM's task note said the next free order is 15, so 15 is what
//    this block uses. Confirm against whatever landed while this course was being written.
//  - VISIBILITY: private, insert-only. The price, priceType, visibility and publishHoldReason above
//    must be right on the FIRST seed, because a re-seed never rewrites them.
//  - GUARDS: check-em-dashes, check-longest-option, check-quiz-balance, check-reveals and
//    check-assessment-fit all read `git ls-files`, so they skip this file while it is untracked. It
//    was measured directly with the same constants and the same arithmetic, and the results are in
//    the handoff. Re-run the real guards once the file is tracked.
