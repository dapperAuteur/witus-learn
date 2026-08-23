import type { AuthoredCourse } from "./authored-course";

// CREDIT-00 · "Who Gets Named" (Culture & History), from BAM's own notes:
// plans/chat/did-the-work-vetting.md §4 ("One course, 'Who Gets Named', as CREDIT-00, teaching the
// mechanisms ... Then the people arrive as evidence for a mechanism rather than as a parade"),
// plans/future-courses/03-proposed-black-subjects.md, and 04-the-record-and-the-artists.md §5.
// Tier 0.
//
// THE THESIS, and why this is a course rather than a list of people:
// Credit is assigned by MECHANISMS, and the mechanisms are documentable. Each one is a named,
// citable concept with real literature behind it: the Matthew effect (Merton, 1968), the Matilda
// effect (Rossiter, 1993), authorship convention (ICMJE, CRediT), the inventorship/ownership split
// in patent law, the archive's own silences (Trouillot, 1995), and the anatomy of a correction.
// People appear as EVIDENCE for a mechanism, never as a parade of profiles. Same move that made
// `naacp-learned-to-win` work (four instruments, not four biographies) and `she-took-the-seat` work
// (one argument about how a closed profession opens, not twelve lives).
//
// ITS SIBLING: `who-gets-the-credit` (Black Inventors and the Machinery of Attribution) becomes
// CREDIT-01. That course owns the PATENT system end to end: the 1858 opinion, the 1836 oath, the
// assignment clause, eleven verified patent numbers, and a seven-step myth check. This course does
// NOT re-teach any of it. Lesson `inventorship-is-not-ownership` teaches only the one distinction
// that the general case needs (a patent must name humans even when a company owns it, which is the
// opposite of what the author line does) and hands the learner over to CREDIT-01 for the rest.
//
// HARD RULES THIS FILE KEEPS (do not relax without BAM's editorial sign-off):
//  1. IDENTITY CLAIMS. An identity tag may only be used when that person stated it publicly
//     THEMSELVES, and the lesson must cite where. No living person carries an identity claim in
//     this course. The single gender-identity claim in the whole file is Pauli Murray's, and it is
//     sourced to Murray's own papers as described by the Pauli Murray Center, whose pronoun
//     practice (s/he, their, they/them) the course follows and names out loud.
//  2. CONTESTED CLAIMS ARE TAUGHT AS CONTESTED, with the holders of each position named, the way
//     `the-moors` does. Three claims in this course are live disputes and are written that way:
//     the Malone/Walker origin story (A'Lelia Bundles versus the popular account), the Selma Burke
//     dime attribution (the U.S. Mint and Sinnock versus Burke, the Smithsonian American Art
//     Museum and FDR's son), and Malone's reported fortune.
//  3. NO INVENTED SOURCE, DATE, QUOTATION OR STATISTIC. Every figure here was checked against a
//     source before it was written: Merton (1968, 1988), Bol et al. (2018), Rossiter (1993), Gage
//     (1883), Lincoln et al. (2012), Wuchty et al. (2007), ICMJE, CRediT/NISO, 35 U.S.C. 115 and
//     261, Stanford v. Roche, Trouillot (1995), the Pauli Murray Center, and contemporaneous
//     reporting on the Lacks settlements and the Colvin expungement. What could not be settled is
//     hedged in the lesson AND filed in src/lib/research-checks.ts.
//
// House style: `section` on every lesson; flush-left single-line `:::reveal q ||| a`; a
// `## Vocabulary` block of 3-6 lesson-specific terms; APA 7 `## Sources`; a quiz per teaching
// section (40 serving 5, passing 80, shuffled) plus a 40-question final serving 10; every question
// carries `explanation` + `sourceLessonSlug`. Correct options are written SHORT and distractors
// long and specific, so `check-longest-option` passes by construction.
export const WHO_GETS_NAMED_COURSE: AuthoredCourse = {
  title: "Who Gets Named",
  description:
    "Doing the work and being named for it are two different events. They happen at different times, they leave different records, and the second one is decided by machinery you can learn. This course teaches that machinery: the Matthew effect, which sends credit to whoever is already eminent; the Matilda effect, which routes a woman's contribution to a male colleague; the authorship conventions that decide who goes on the paper and who is thanked underneath it; the split in patent law between the humans who must be named and the company that owns the result; the four moments at which an archive goes quiet; and how a correction actually happens, who does it, how long it takes, and what it can and cannot repair. Six people carry the evidence: Pauli Murray, whose argument the Brown litigation used; Vivien Thomas, who built an operation he was not permitted to author; Henrietta Lacks, whose cells were taken and whose name was replaced with a false one; Annie Turnbo Malone, whose business records mostly did not survive; Claudette Colvin, whom a movement chose not to name; and Selma Burke, whose claim on the dime has never been settled either way. Where the evidence is genuinely argued, this course teaches the argument and names who holds which position, because a dispute closed by assertion is not history.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1 — Credit is a second event, and it is assigned by machinery
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "credit-is-a-second-event",
      title: "1 · Credit is a second event",
      section: "Section 1 · Credit is assigned, and the assignment leaves a record",
      body: `Someone does a piece of work. Later, a name gets attached to it. Those are two events, not one. They happen at different times, they are recorded by different people in different documents, and the second one can go badly wrong while the first one went perfectly.

This course is about the second event.

**Why the framing changes what you look for.** If work and credit were the same thing, the only question about a missing name would be who lied. Because they are separate events, the question becomes procedural: which document assigned the credit, who was allowed to sign it, and what the rule was on the day it was signed. Those questions have answers you can go and read, which is the whole reason this is teachable.

**Credit comes in four currencies, and they do not obey the same rules.** *Authorship* is the list of names printed at the top of a paper or a report. *Inventorship and ownership* is who a patent must name and who holds the property, two different things that can travel a long way apart. *Attribution* is the byline, the caption credit, the eponym stuck to a procedure or a law. *Institutional memory* is the building, the prize, the plaque, the syllabus, the thing a stranger sees fifty years later. A person can hold one of these and none of the others. Vivien Thomas ended up with a portrait on a wall at Johns Hopkins while never once having been an author on the paper that made his operation famous, and Section 4 works out how.

**Credit is scarce, and the scarcity is designed in.** Each currency has a cap written into its format. A coin has room for one set of initials. A Nobel Prize may not be divided among more than three people, and since 1974 it cannot be awarded to someone already dead unless the death came after the announcement (Nobel Foundation, n.d.). An eponym holds two or three names, never thirty. A photo caption holds one line. So credit for any large collaboration is a rationing decision before it is anything else, and rationing decisions follow rules.

**Which means the failure is usually structural.** A name goes missing far more often because a format had four slots and a convention filled them than because anyone conspired. That is not a defense of the outcome. It is the reason the outcome repeats: nobody has to intend it for it to happen again, to somebody else.

:::reveal Name the four currencies of credit this lesson distinguishes, and give one example of a format cap on each. ||| Authorship (an author list a journal may cap), inventorship and ownership (a patent names humans, an assignee owns it), attribution (a caption or eponym holding one line or two names), and institutional memory (one building, one prize, one plaque).

:::reveal Why does treating work and credit as ONE event make the history harder to check? ||| Because it turns every missing name into a question about who lied, which is unanswerable from documents. Treating them as two events makes the question procedural: which document assigned the credit, who could sign it, and what the rule was that day. Those have readable answers.

## Vocabulary
- **Credit**: the public attachment of a name to a piece of work, recorded in a document, and separate from the work itself.
- **Currency of credit**: one of the four exchange systems credit travels in here, each with its own rules: authorship, inventorship and ownership, attribution, institutional memory.
- **Eponym**: a person's name fixed to a thing, such as a surgical procedure or a law, which acts as compressed permanent attribution.
- **Rationing decision**: the choice of whom to name when a format holds fewer slots than the work had contributors.
- **Format cap**: the hard limit a medium puts on how many names it can carry, such as three laureates or one set of initials on a coin.

## Sources
Nobel Foundation. (n.d.). *Frequently asked questions*. NobelPrize.org. https://www.nobelprize.org/frequently-asked-questions/`,
    },
    {
      slug: "mechanism-not-a-villain",
      title: "2 · A mechanism, not a villain",
      section: "Section 1 · Credit is assigned, and the assignment leaves a record",
      body: `The usual way to tell this history is a list of thefts. This course does not, and the reason is practical rather than delicate.

**A theft story does not travel.** "Blalock took Thomas's operation" tells you about two men in one hospital in the 1940s. "A person without a degree could not be an author under the authorship convention of the day, and that convention was written down" tells you what to go and check in any laboratory, in any decade, including one you work in now. The first is a fact you can repeat. The second is a tool you can use.

**A theft story is also the easiest kind to get wrong.** The most repeated stories in this genre are the ones that collapse first, which is why the sibling course in this series, Who Gets the Credit, spends a whole section naming and correcting the famous claims that do not survive checking. A learner carrying a long list of dramatic anecdotes loses the argument in public to anyone with a database. A learner carrying a mechanism does not.

**What earns the word mechanism here.** Three tests, and a candidate has to pass all three. First, it is **named by somebody other than this course**, in published literature, so you can look it up and read the disagreements. Second, it leaves a **document**: a paper's author line, a patent's inventor declaration, a court order, an accession record, a minutes entry. Third, it is **falsifiable**, meaning you can state in advance what evidence would show it did not operate in a given case.

**People are the evidence, not the syllabus.** Six people carry this course. Each appears where a mechanism needs a case that survives checking, and each is used to make one point rather than to be summarized. A parade of profiles teaches admiration, which nobody can act on. A mechanism with a case attached teaches a procedure, which anybody can run.

**The honest limit, stated up front.** A mechanism explains a *pattern*. It does not prove any *individual* case. That the eminent tend to collect the credit does not establish that a particular famous name stole a particular idea, and this course never argues from the pattern down to a person. When it makes a claim about a person, it points at that person's own documents, and when those documents do not settle the matter it says so and names who argues what.

:::reveal What are the three tests a candidate has to pass before this course calls it a mechanism? ||| It is named in published literature by someone other than this course, so it can be looked up. It leaves a document you can go and read. And it is falsifiable: you can say in advance what evidence would show it did not operate here.

:::reveal Why can a mechanism not be used to prove that a particular famous person stole a particular idea? ||| Because a mechanism explains a pattern across many cases, and a pattern does not license an inference down to any single case. A claim about a person has to rest on that person's own documents.

## Vocabulary
- **Mechanism**: a named, documented, falsifiable process that assigns credit, as opposed to a story about someone behaving badly.
- **Falsifiable**: stated so that you can say in advance what evidence would show the claim is wrong, which is what separates a mechanism from a mood.
- **Load-bearing document**: the record that actually assigned the credit, such as an author line, an inventor declaration, or a court order.
- **Pattern versus case**: the rule that evidence about many cases does not establish any one of them, and a claim about a person needs that person's own record.

## Sources
Merton, R. K. (1968). The Matthew effect in science. *Science, 159*(3810), 56-63. https://doi.org/10.1126/science.159.3810.56

Rossiter, M. W. (1993). The Matthew Matilda effect in science. *Social Studies of Science, 23*(2), 325-341. https://doi.org/10.1177/030631293023002004`,
    },
    {
      slug: "two-rules-this-course-follows",
      title: "3 · Two rules, and why they are not politeness",
      section: "Section 1 · Credit is assigned, and the assignment leaves a record",
      body: `Two rules govern everything after this lesson. Both look like manners and neither is.

**Rule one: an identity claim needs a self-statement.** If this course says a person was gay, or trans, or queer, that person has to have said so publicly themselves, and the lesson has to cite where they said it. Not inferred from a partnership. Not carried over from a list. Not sourced to an article that also does not cite anything. Where no self-statement can be found, the person is taught for their work with no identity claim attached, which is the honest default and costs the history nothing.

The reason is not sensitivity. Attaching an identity to someone who never claimed it is outing them, the harm lands on living relatives as well as on the person, and no correction repairs it, which is exactly the asymmetry this course is about. Note where the rule bites hardest: on the cases a writer most wants to claim.

Applied here: no living person in this course carries an identity claim. One historical figure does. Pauli Murray's papers document years of asking physicians for hormone therapy and exploratory surgery, requests that were refused, and the Pauli Murray Center uses s/he, their, and they/them for Murray on that basis (Pauli Murray Center, n.d.). This course follows the Center's practice and tells you it is doing so, rather than picking a pronoun silently and letting you assume it was obvious.

**Rule two: a contested claim is taught as contested.** Where the evidence is genuinely argued, you get the argument and the names of who holds each position, not a verdict. Three claims here are live disputes and are written that way: whether Annie Turnbo Malone trained Madam C. J. Walker, whether Selma Burke's plaque is the source of the Roosevelt dime, and how large Malone's fortune actually was.

Resolving a live dispute by assertion is the most common way a well meaning history goes wrong. It feels like clarity and it is actually a bet, and when the bet loses it takes the surrounding true material down with it.

**Two working habits follow.** A **gap is evidence**, not absence: a missing record is a finding about who was doing the recording, and Section 5 turns that into a method. And a **hedge gets filed**: when this course cannot settle something it says so and logs the open question where somebody can close it later, because a hedge nobody wrote down is a hedge nobody will ever clear.

:::reveal State rule one precisely, and say what the course does when the rule cannot be satisfied. ||| An identity claim may be used only when the person stated it publicly themselves, and the lesson must cite where they said it. When no self-statement can be found, the person is taught for their work with no identity claim attached.

:::reveal Why is resolving a contested claim by assertion worse than leaving it open? ||| Because it converts a judgment into a bet, and when the bet loses it discredits the verified material standing next to it. Naming who holds each position leaves the reader able to check.

:::reveal What two working habits does this lesson derive from the rules? ||| Treat a gap in a record as evidence about who was doing the recording rather than as absence. And file a hedge you cannot resolve as a written open question, because an unrecorded hedge never gets cleared.

## Vocabulary
- **Self-statement**: a public statement a person made about their own identity, in their own words, which is the only basis this course accepts for an identity claim.
- **Outing**: attaching an identity to someone who did not claim it publicly, a harm that no later correction repairs.
- **Contested claim**: one where competent people read the same evidence differently, taught by presenting the disagreement and naming who holds each position.
- **Hedge**: an honest statement that something could not be settled, which is only useful once it is filed somewhere as an open question.
- **Gap as evidence**: treating a missing record as a finding about who was doing the recording, rather than as proof that nothing happened.

## Sources
Pauli Murray Center for History and Social Justice. (n.d.). *Who is Pauli Murray?* https://www.paulimurraycenter.com/who-is-pauli`,
    },
    {
      slug: "quiz-credit-basics",
      title: "4 · Knowledge check: credit, mechanisms, and the two rules",
      section: "Section 1 · Credit is assigned, and the assignment leaves a record",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "Calling credit a \"second event\" means what?",
            options: ["The work and the naming happen separately", "That credit is always awarded later than the work it describes, by at least one publication cycle", "That a person must do the work twice before anyone will attach their name to it in a record", "That the second person to make a discovery is the one the record ends up naming"],
            correctIndex: 0,
            explanation: "Two events, at different times, recorded by different people in different documents. The second can fail while the first went perfectly.",
            sourceLessonSlug: "credit-is-a-second-event",
          },
          {
            prompt: "Separating work from credit changes the central question to what?",
            options: ["A procedural one about documents", "A moral one about which of the two people involved was more willing to lie in public", "A statistical one about how often the pattern shows up across a large sample of papers", "A biographical one about which contributor had the better mentor early in a career"],
            correctIndex: 0,
            explanation: "Which document assigned the credit, who was allowed to sign it, and what the rule was that day. Those have readable answers, which is what makes this teachable.",
            sourceLessonSlug: "credit-is-a-second-event",
          },
          {
            prompt: "The four currencies of credit in this course are:",
            options: ["Authorship, inventorship and ownership, attribution, institutional memory", "Publication, patenting, prize money, and tenure at a research university", "Reputation, citation count, grant funding, and appointment to an editorial board", "Copyright, trademark, trade secret, and the right of publicity in a person's likeness"],
            correctIndex: 0,
            explanation: "Four exchange systems with four different rule sets. A person can hold one and none of the others.",
            sourceLessonSlug: "credit-is-a-second-event",
          },
          {
            prompt: "The list of names printed at the top of a paper is which currency?",
            options: ["Authorship", "Attribution, because a name on a page is functionally the same as a photo caption credit", "Institutional memory, since the journal archive is what preserves the record long term", "Inventorship, because the paper establishes who conceived of the work being reported"],
            correctIndex: 0,
            explanation: "Authorship is the printed author list. Attribution is the byline, caption credit or eponym; institutional memory is the building, prize or syllabus.",
            sourceLessonSlug: "credit-is-a-second-event",
          },
          {
            prompt: "What does institutional memory cover?",
            options: ["Buildings, prizes, plaques, syllabuses", "The internal personnel files an employer keeps on who did which piece of work and when", "The oral tradition of a laboratory, passed from senior researchers to their graduate students", "The citation record, which accumulates automatically and needs no institutional decision at all"],
            correctIndex: 0,
            explanation: "The thing a stranger sees fifty years later, long after everyone involved has stopped explaining it.",
            sourceLessonSlug: "credit-is-a-second-event",
          },
          {
            prompt: "Under the Nobel Foundation's rules, one prize may be divided among at most:",
            options: ["Three people", "Five people, which is why large collaborations nominate a representative committee instead", "Two people, unless the awarding institution votes unanimously to add a third laureate", "As many people as contributed, provided each is named in the nomination documents"],
            correctIndex: 0,
            explanation: "A hard format cap. Credit for a collaboration larger than three is a rationing decision before it is anything else.",
            sourceLessonSlug: "credit-is-a-second-event",
          },
          {
            prompt: "What has been true of posthumous Nobel Prizes since 1974?",
            options: ["Not awarded unless the death followed the announcement", "They are permitted whenever the nominating body submits the name within five years of the death", "They are permitted only in the Peace Prize, which the Norwegian committee awards separately", "They were abolished entirely, so a laureate who dies before the ceremony forfeits the award"],
            correctIndex: 0,
            explanation: "The statutes have barred a posthumous award since 1974 unless the death came after the prize was announced.",
            sourceLessonSlug: "credit-is-a-second-event",
          },
          {
            prompt: "A format cap is:",
            options: ["A medium's hard limit on how many names it carries", "An editor's discretionary decision about how long an author list is allowed to run", "A funding agency's rule about how many investigators may be listed on one grant application", "A legal ceiling on the number of people who may hold an interest in a single piece of work"],
            correctIndex: 0,
            explanation: "One set of initials on a coin, three laureates, two or three names in an eponym, one line in a caption.",
            sourceLessonSlug: "credit-is-a-second-event",
          },
          {
            prompt: "Why is credit for a large collaboration a rationing decision?",
            options: ["More contributors than the format has slots", "Because funding bodies require a single named principal investigator on every award they make", "Because collaborators negotiate their order in advance and the negotiation always excludes someone", "Because journals charge per author name, so groups reduce the list to control publication costs"],
            correctIndex: 0,
            explanation: "And rationing decisions follow rules, which is exactly why the outcome is predictable rather than random.",
            sourceLessonSlug: "credit-is-a-second-event",
          },
          {
            prompt: "An eponym is:",
            options: ["A person's name fixed to a thing", "A pen name adopted by an author who does not wish to be identified with a published work", "A shorthand label a discipline uses for a technique whose originator has been forgotten", "A formal acknowledgement printed beneath an article naming everyone who assisted with it"],
            correctIndex: 0,
            explanation: "A surgical procedure, a law, an equation. It works as compressed permanent attribution, and it holds two or three names at most.",
            sourceLessonSlug: "credit-is-a-second-event",
          },
          {
            prompt: "Which currency did Vivien Thomas eventually hold at Johns Hopkins?",
            options: ["Institutional memory", "Authorship, once the journal issued a correction adding his name to the original report", "Inventorship, because the operation was patented and he was named on the resulting document", "Attribution, in the form of a contemporaneous press credit issued at the time of the first surgery"],
            correctIndex: 0,
            explanation: "A portrait on a wall. Section 4 works out how he came to hold that and never the author line.",
            sourceLessonSlug: "credit-is-a-second-event",
          },
          {
            prompt: "This lesson says a name usually goes missing because:",
            options: ["A format had slots and a convention filled them", "A senior colleague made a deliberate decision to remove a junior contributor from the record", "An institution's lawyers advised against naming anyone who was not covered by its insurance", "A publisher lost the correspondence establishing who had contributed which part of the work"],
            correctIndex: 0,
            explanation: "Not a defense of the outcome. It is the reason the outcome repeats: nobody has to intend it for it to happen again.",
            sourceLessonSlug: "credit-is-a-second-event",
          },
          {
            prompt: "Why does the structural account of missing credit matter practically?",
            options: ["The outcome repeats without anyone intending it", "Because it means the individuals involved can never be held responsible for what happened", "Because structural causes are easier to litigate than the intentions of a particular person", "Because it shows the problem was solved once formats stopped limiting how many names fit"],
            correctIndex: 0,
            explanation: "A conspiracy has to be organized each time. A convention runs by itself, in a different building, on a different person.",
            sourceLessonSlug: "credit-is-a-second-event",
          },
          {
            prompt: "Scarcity of credit, in this lesson, comes from:",
            options: ["The design of the format", "The limited attention any audience can pay to a long list of unfamiliar names", "The reluctance of prize committees to dilute an award's prestige by splitting it widely", "The cost of printing, which historically forced journals to truncate long author lists"],
            correctIndex: 0,
            explanation: "A coin has room for one set of initials. That is a design feature, not a matter of taste.",
            sourceLessonSlug: "credit-is-a-second-event",
          },
          {
            prompt: "Inventorship and ownership are treated here as:",
            options: ["Two things that can travel far apart", "One currency under two names, because a patent's owner is by definition its inventor", "The same as authorship, since a patent is a published document with a named author list", "A currency that no longer operates, because modern employment contracts assign everything"],
            correctIndex: 0,
            explanation: "Who a patent must name and who holds the property are different questions, and Section 4 measures the distance between them.",
            sourceLessonSlug: "credit-is-a-second-event",
          },
          {
            prompt: "What kind of record does this course say actually assigns credit?",
            options: ["A signed document with a rule behind it", "The recollection of the people who were present in the room when the work was done", "The press coverage that follows a discovery, which is what fixes a name in public memory", "The internal accounting of an institution, which records who was paid for which project"],
            correctIndex: 0,
            explanation: "An author line, an inventor declaration, a court order, an accession record. Each was signed under a rule you can read.",
            sourceLessonSlug: "credit-is-a-second-event",
          },
          {
            prompt: "A person can hold one currency of credit and not the others because:",
            options: ["Each currency has its own rules", "Institutions deliberately spread recognition across contributors to avoid concentrating it", "The currencies are awarded in a fixed sequence and most people drop out partway through", "Only one currency can be legally recorded for any single piece of work at a given time"],
            correctIndex: 0,
            explanation: "Authorship, inventorship, attribution and institutional memory are four separate systems, decided by different people at different times.",
            sourceLessonSlug: "credit-is-a-second-event",
          },
          {
            prompt: "If work and credit were treated as one event, the only question left would be:",
            options: ["Who lied", "Which of the two contributors did the larger share of the measurable labor involved", "Whether the work was significant enough to deserve any public recognition at all", "How long the institution waited before publishing the results under someone's name"],
            correctIndex: 0,
            explanation: "Which is unanswerable from documents. Splitting the events turns it into a procedural question with readable answers.",
            sourceLessonSlug: "credit-is-a-second-event",
          },
          {
            prompt: "Why does a theft story \"not travel\"?",
            options: ["It describes one place and one time", "Because most theft stories turn out on inspection to have been fabricated by later writers", "Because naming a wrongdoer exposes the writer to a defamation claim in most jurisdictions", "Because the people involved are usually dead and cannot confirm or deny what happened"],
            correctIndex: 0,
            explanation: "It is a fact you can repeat. A mechanism is a tool you can take to any laboratory in any decade, including one you work in.",
            sourceLessonSlug: "mechanism-not-a-villain",
          },
          {
            prompt: "The first test a mechanism must pass here is that it is:",
            options: ["Named in published literature by someone else", "Accepted by a majority of working historians in the field the claim is drawn from", "Traceable to a single originating scholar who can be interviewed about their intent", "Applicable to at least three separate documented cases across two different centuries"],
            correctIndex: 0,
            explanation: "So you can look it up and read the disagreements, rather than taking this course's word for the category.",
            sourceLessonSlug: "mechanism-not-a-villain",
          },
          {
            prompt: "The second test a mechanism must pass is that it:",
            options: ["Leaves a document you can read", "Produces a measurable statistical signal in a dataset of at least ten thousand records", "Can be demonstrated experimentally under controlled conditions in a modern institution", "Has been the subject of a court judgment establishing that it operated in a specific case"],
            correctIndex: 0,
            explanation: "An author line, an inventor declaration, a court order, an accession record, a minutes entry. Something a reader can go and find.",
            sourceLessonSlug: "mechanism-not-a-villain",
          },
          {
            prompt: "The third test a mechanism must pass is that it is:",
            options: ["Falsifiable", "Reversible, meaning the credit it misassigned can in principle be reassigned correctly later", "Universal, meaning it operates identically in every discipline and every historical period", "Quantifiable, meaning its effect can be expressed as a percentage of contributions lost"],
            correctIndex: 0,
            explanation: "You can state in advance what evidence would show the mechanism did not operate in a given case.",
            sourceLessonSlug: "mechanism-not-a-villain",
          },
          {
            prompt: "Falsifiable, in this lesson, means:",
            options: ["You can say in advance what would disprove it", "The claim has already been tested and survived at least one serious attempt to refute it", "The evidence behind the claim could have been forged, so it requires independent verification", "The claim is stated loosely enough that new cases can always be fitted into it later"],
            correctIndex: 0,
            explanation: "That is what separates a mechanism from a mood. A claim nothing could contradict explains nothing.",
            sourceLessonSlug: "mechanism-not-a-villain",
          },
          {
            prompt: "Why is a mechanism safer than an anecdote in a public argument?",
            options: ["It can be checked on the spot", "Because an anecdote about a named person invites a legal response the speaker cannot afford", "Because audiences find abstract explanations more persuasive than stories about individuals", "Because mechanisms are taught in schools, so most listeners already accept them as true"],
            correctIndex: 0,
            explanation: "A learner carrying a long list of dramatic anecdotes loses to anyone with a database. A learner carrying a mechanism does not.",
            sourceLessonSlug: "mechanism-not-a-villain",
          },
          {
            prompt: "Which course in this series corrects the famous invention claims that fail checking?",
            options: ["Who Gets the Credit", "The Moors, which teaches the same downgrade method on medieval and early modern sources", "What They Built, which reads five business districts out of charters and insurance filings", "How the NAACP Learned to Win, which teaches four instruments of a forty five year campaign"],
            correctIndex: 0,
            explanation: "The sibling course spends a whole section naming the claims and saying what the documentary record actually shows.",
            sourceLessonSlug: "mechanism-not-a-villain",
          },
          {
            prompt: "How does this course use the six people it teaches?",
            options: ["As evidence for one mechanism each", "As a chronological survey of uncredited work from the nineteenth century to the present", "As a set of biographies, each summarized in full so a learner leaves knowing all six lives", "As counterexamples, showing where the named mechanisms failed to predict what happened"],
            correctIndex: 0,
            explanation: "Each appears where a mechanism needs a case that survives checking, and each is used to make one point rather than to be summarized.",
            sourceLessonSlug: "mechanism-not-a-villain",
          },
          {
            prompt: "A parade of profiles teaches what, according to this lesson?",
            options: ["Admiration, which nobody can act on", "A working chronology, which is the necessary foundation for any later analytical work", "Empathy, which the lesson argues is the most durable outcome any history course can reach", "Skepticism, because a reader confronted with many similar stories starts to doubt all of them"],
            correctIndex: 0,
            explanation: "A mechanism with a case attached teaches a procedure instead, which anybody can run.",
            sourceLessonSlug: "mechanism-not-a-villain",
          },
          {
            prompt: "A mechanism explains a pattern. What does it NOT do?",
            options: ["Prove any individual case", "Predict which currency of credit will be affected in a future collaboration", "Survive contact with documents from outside the discipline it was first described in", "Account for cases where the person who lost the credit later recovered it in full"],
            correctIndex: 0,
            explanation: "That the eminent tend to collect the credit does not establish that a particular famous name took a particular idea.",
            sourceLessonSlug: "mechanism-not-a-villain",
          },
          {
            prompt: "A claim about a specific person must rest on what?",
            options: ["That person's own documents", "The consensus of specialists who have studied the period in which the person worked", "A pattern established across enough comparable cases to make the individual case likely", "The absence of any surviving evidence contradicting the claim being made about them"],
            correctIndex: 0,
            explanation: "And where those documents do not settle the matter, the course says so and names who argues what.",
            sourceLessonSlug: "mechanism-not-a-villain",
          },
          {
            prompt: "Which is an example of a load-bearing document in this course's sense?",
            options: ["A patent's inventor declaration", "A newspaper profile written about the researcher some years after the work was completed", "A colleague's memoir recalling who was present in the laboratory on a particular morning", "A modern institutional statement acknowledging that historical practices were unjust"],
            correctIndex: 0,
            explanation: "The record that actually assigned the credit: an author line, an inventor declaration, a court order, an accession record.",
            sourceLessonSlug: "mechanism-not-a-villain",
          },
          {
            prompt: "Arguing from a pattern down to an individual is refused here because:",
            options: ["A pattern licenses no inference about one case", "Individual cases are always better documented than patterns, so the pattern adds nothing", "Patterns are established from published cases only, which excludes anything unpublished", "The individuals involved are entitled to a presumption that no mechanism applied to them"],
            correctIndex: 0,
            explanation: "The course never argues that way. When it makes a claim about a person it points at that person's own record.",
            sourceLessonSlug: "mechanism-not-a-villain",
          },
          {
            prompt: "What does requiring an outside NAME for each mechanism buy the reader?",
            options: ["Somewhere to go and read the disagreements", "A guarantee that the mechanism has been demonstrated to operate in every case examined", "Legal protection, since a published term cannot be challenged as defamatory in court", "An assurance that the mechanism will be recognized by any specialist the reader consults"],
            correctIndex: 0,
            explanation: "Named by someone other than this course, in published literature, so the category is checkable rather than invented here.",
            sourceLessonSlug: "mechanism-not-a-villain",
          },
          {
            prompt: "The stated risk of carrying a long list of dramatic anecdotes is:",
            options: ["Losing the argument to anyone with a database", "Overwhelming an audience, which stops listening once the examples begin to sound similar", "Attracting a correction from an institution that would rather the stories were not repeated", "Crowding out the mechanisms, which need more space to explain than a single case does"],
            correctIndex: 0,
            explanation: "The most repeated stories in this genre are the ones that collapse first, which is why the sibling course corrects them.",
            sourceLessonSlug: "mechanism-not-a-villain",
          },
          {
            prompt: "Rule one of this course says an identity claim requires:",
            options: ["A public self-statement, cited", "Corroboration from at least two independent contemporaries who knew the person well", "A finding by a recognized scholarly biography published by a university press", "Documentation in an archive, whether or not the person ever spoke about it publicly"],
            correctIndex: 0,
            explanation: "Stated publicly by that person themselves, with the lesson citing where they said it. Not inferred, not carried over from a list.",
            sourceLessonSlug: "two-rules-this-course-follows",
          },
          {
            prompt: "When no self-statement can be found, this course:",
            options: ["Teaches the work with no identity claim", "Reports the claim with a hedge attached, so the reader can weigh it for themselves", "Omits the person entirely, since an incomplete account would mislead the reader", "Uses the most commonly published description while noting that it is unverified"],
            correctIndex: 0,
            explanation: "The honest default, and it costs the history nothing. The work is still there to teach.",
            sourceLessonSlug: "two-rules-this-course-follows",
          },
          {
            prompt: "Rule one is described as not being about sensitivity because:",
            options: ["Getting it wrong is outing someone", "Sensitivity varies by audience, and a course cannot design around every reader's preferences", "The rule protects the course from legal exposure rather than protecting the person named", "Historical figures cannot be harmed by a claim made long after their deaths"],
            correctIndex: 0,
            explanation: "The harm lands on living relatives as well as on the person, and no correction repairs it, which is the asymmetry this course is about.",
            sourceLessonSlug: "two-rules-this-course-follows",
          },
          {
            prompt: "Where does rule one bite hardest?",
            options: ["On the cases a writer most wants to claim", "On living people, since historical figures leave papers that settle the question either way", "On group biographies, where one unverified entry contaminates every other name on the list", "On recent decades, where the vocabulary for identity has changed faster than the sources"],
            correctIndex: 0,
            explanation: "Which is exactly why it has to be a rule rather than a preference: preferences bend under the cases that matter most.",
            sourceLessonSlug: "two-rules-this-course-follows",
          },
          {
            prompt: "How many living people in this course carry an identity claim?",
            options: ["None", "Two, both of whom have spoken about it in published interviews the course cites", "Six, one for each of the people the course uses as evidence for a mechanism", "One, and the lesson names the memoir in which that person made the statement"],
            correctIndex: 0,
            explanation: "The only identity claim in the whole course belongs to a historical figure, Pauli Murray, sourced to Murray's own papers.",
            sourceLessonSlug: "two-rules-this-course-follows",
          },
          {
            prompt: "Pauli Murray's papers document years of asking physicians for:",
            options: ["Hormone therapy and exploratory surgery", "Legal certification of a change of name and sex on official state identity documents", "Referral to a specialist willing to testify about gender in a federal employment case", "Access to medical literature that was restricted to practitioners at the time"],
            correctIndex: 0,
            explanation: "Requests that were refused. That documentary record, in Murray's own papers, is the basis for the only identity claim in this course.",
            sourceLessonSlug: "two-rules-this-course-follows",
          },
          {
            prompt: "Whose pronoun practice does this course follow for Pauli Murray?",
            options: ["The Pauli Murray Center's", "The Library of Congress catalog, which fixes a preferred form for every named historical figure", "Murray's own last published book, which settles the question in the author's own voice", "The Episcopal Church's, which ordained Murray and maintains the official biographical record"],
            correctIndex: 0,
            explanation: "The Center uses s/he, their, and they/them for Murray, and this course follows that practice and says so rather than choosing silently.",
            sourceLessonSlug: "two-rules-this-course-follows",
          },
          {
            prompt: "Which pronouns does that practice use for Murray?",
            options: ["S/he, their, and they/them", "She and her exclusively, on the ground that this is how contemporaries addressed Murray", "He and him exclusively, following the requests Murray made of physicians in the 1930s", "No pronouns at all, with the surname repeated in every sentence to avoid the question"],
            correctIndex: 0,
            explanation: "This course follows the Pauli Murray Center's practice and tells you it is doing so, rather than letting a reader assume the choice was obvious.",
            sourceLessonSlug: "two-rules-this-course-follows",
          },
          {
            prompt: "Why does the course announce which pronoun practice it follows?",
            options: ["So the choice is visible instead of assumed", "Because a published style guide requires every course to disclose its editorial conventions", "Because the pronouns used in the sources conflict, and the reader must pick one of them", "Because a silent choice would be legally indistinguishable from asserting an identity claim"],
            correctIndex: 0,
            explanation: "A silently chosen pronoun invites the reader to assume it was obvious. Naming the source of the practice keeps the decision checkable.",
            sourceLessonSlug: "two-rules-this-course-follows",
          },
          {
            prompt: "Rule two of this course requires that a contested claim be:",
            options: ["Taught as contested, with each position named", "Set aside until new evidence resolves it, since teaching a dispute confuses a beginner", "Reported with the majority scholarly view stated first and the minority view in a footnote", "Presented as a question for the learner to research, with no evidence supplied either way"],
            correctIndex: 0,
            explanation: "You get the argument and the names of who holds each position, not a verdict.",
            sourceLessonSlug: "two-rules-this-course-follows",
          },
          {
            prompt: "The three live disputes this course flags are about:",
            options: ["Malone and Walker, the dime, and Malone's fortune", "Patent assignment, the Nobel three person rule, and the growth of scientific author lists", "The Brown litigation, the blue baby operation, and the origin of the HeLa cell line", "The Matthew effect, the Matilda effect, and whether either can be measured reliably"],
            correctIndex: 0,
            explanation: "Whether Annie Turnbo Malone trained Madam C. J. Walker, whether Selma Burke's plaque is the source of the Roosevelt dime, and how large Malone's fortune actually was.",
            sourceLessonSlug: "two-rules-this-course-follows",
          },
          {
            prompt: "Why is closing a live dispute by assertion worse than leaving it open?",
            options: ["It is a bet, and losing it discredits the true material nearby", "Because a reader who wanted a verdict will simply look elsewhere and find a worse source", "Because an assertion cannot be cited, whereas an open question can be filed for later work", "Because disputes tend to resolve themselves within a decade, making the assertion redundant"],
            correctIndex: 0,
            explanation: "It feels like clarity and it is actually a wager. When the wager loses it takes the verified material standing beside it down too.",
            sourceLessonSlug: "two-rules-this-course-follows",
          },
          {
            prompt: "The first working habit this lesson derives from the rules is:",
            options: ["Treat a gap as evidence", "Prefer the earliest source available, since later accounts accumulate errors as they are copied", "Quote a person's own words wherever possible, and paraphrase only when no quotation exists", "Count how many sources repeat a claim, and weight the claim by how widely it is attested"],
            correctIndex: 0,
            explanation: "A missing record is a finding about who was doing the recording, not proof that nothing happened. Section 5 turns that into a method.",
            sourceLessonSlug: "two-rules-this-course-follows",
          },
          {
            prompt: "A gap in a record is a finding about what?",
            options: ["Who was doing the recording", "How much of an archive has survived fire, flood and ordinary institutional neglect", "Whether the event described was significant enough for anyone to have written it down", "The reliability of the person who later reported the event from memory"],
            correctIndex: 0,
            explanation: "Which is why the course treats absence as evidence rather than as nothing, and builds a method on it in Section 5.",
            sourceLessonSlug: "two-rules-this-course-follows",
          },
          {
            prompt: "The second working habit is that an unresolved question must be:",
            options: ["Filed as a written open question", "Removed from the lesson, so a reader is never handed a claim the course cannot support", "Marked in the text with a symbol readers can learn to recognize as a warning", "Assigned to a named reviewer who is responsible for settling it before the course ships"],
            correctIndex: 0,
            explanation: "A hedge nobody wrote down is a hedge nobody will ever clear. Logging it puts it somewhere a person can close it later.",
            sourceLessonSlug: "two-rules-this-course-follows",
          },
          {
            prompt: "A contested claim, as this lesson defines it, is one where:",
            options: ["Competent people read the same evidence differently", "The evidence has been destroyed, so no reading of it can be preferred over another", "One side has an obvious financial or family interest in the outcome of the question", "The claim has been asserted in popular writing but never examined by a specialist"],
            correctIndex: 0,
            explanation: "Which is why the response is to present the disagreement and name who holds each position, rather than to pick a winner.",
            sourceLessonSlug: "two-rules-this-course-follows",
          },
          {
            prompt: "Outing, as this lesson uses the word, means:",
            options: ["Attaching an identity the person never claimed publicly", "Publishing details of a person's private life that were known only to their close family", "Reporting an identity a person disclosed privately but asked a writer not to print", "Correcting a published account that had described a person's identity inaccurately"],
            correctIndex: 0,
            explanation: "And the harm is not repaired by a later correction, which is why the rule is absolute rather than a preference.",
            sourceLessonSlug: "two-rules-this-course-follows",
          },
          {
            prompt: "This course's default when the sources are silent about identity is to:",
            options: ["Say nothing and teach the work", "Note the silence and offer the most likely reading for the reader to weigh", "Follow whatever convention the person's own institution uses in its public materials", "Describe the person's relationships and let the reader draw the obvious conclusion"],
            correctIndex: 0,
            explanation: "Silence is the safe and honest default. The work survives the omission; a wrong identity claim does not survive anything.",
            sourceLessonSlug: "two-rules-this-course-follows",
          },
          {
            prompt: "Which of these would satisfy rule one as a source for an identity claim?",
            options: ["An interview in which the person states it themselves", "A well researched biography by a historian who examined the person's private correspondence", "A widely republished list of notable figures organized by the identity categories it assigns", "An obituary in a major newspaper describing the person's long partnership with another"],
            correctIndex: 0,
            explanation: "The rule is a public self-statement with a citation to where it was made: an interview, a memoir, the person's own site.",
            sourceLessonSlug: "two-rules-this-course-follows",
          },
          {
            prompt: "Taken together, the two rules exist to protect:",
            options: ["The reader's ability to check", "The reputations of the institutions whose records the course relies on to make its case", "The course's tone, which would otherwise become accusatory as the evidence accumulates", "The people teaching the course from having to make difficult editorial judgments"],
            correctIndex: 0,
            explanation: "A cited self-statement and a named position on each side of a dispute both hand the reader somewhere to go and verify.",
            sourceLessonSlug: "two-rules-this-course-follows",
          },
          {
            prompt: "Which pair of currencies did Vivien Thomas end up holding and never holding?",
            options: ["Held institutional memory, never held authorship", "Held authorship, never held the institutional memory an employer controls", "Held attribution in the press, never held ownership of the underlying property", "Held inventorship on the patent, never held a faculty appointment of any kind"],
            correctIndex: 0,
            explanation: "A portrait on a wall at Johns Hopkins, and never a place on the author line of the paper that made the operation famous.",
            sourceLessonSlug: "credit-is-a-second-event",
          },
          {
            prompt: "The reason this course teaches mechanisms rather than thefts is best described as:",
            options: ["Practical, not delicate", "Legal, since naming a thief in a published course creates liability for the publisher", "Statistical, since individual cases are too rare to support any general conclusion", "Editorial, since a course of this length cannot fit both the mechanisms and the cases"],
            correctIndex: 0,
            explanation: "A theft story describes one place and time. A mechanism is a tool a learner can use anywhere, including where they work now.",
            sourceLessonSlug: "mechanism-not-a-villain",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2 — The Matthew effect: credit runs uphill, toward eminence
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "merton-and-the-matthew-effect",
      title: "5 · Merton names the first mechanism",
      section: "Section 2 · The Matthew effect",
      body: `In January 1968 the sociologist Robert K. Merton published a paper in *Science* that gave this whole subject its first named mechanism (Merton, 1968).

**The claim.** Merton described the Matthew effect as the accruing of greater increments of recognition for particular scientific contributions to scientists of considerable repute, and the withholding of such recognition from scientists who have not yet made their mark (Merton, 1968, p. 58). Read it twice, because it is doing two things at once. Credit flows *toward* the already eminent, and it is *withheld* from the not yet known. Those are not the same event and they can happen in the same room on the same afternoon.

**Where the name comes from.** The Gospel of Matthew carries a line, at 13:12 and again at 25:29, whose sense is that to whoever has, more will be given, and from whoever has not, even what they have will be taken away. Merton titled the effect for it. The choice matters for teaching, because it makes the mechanism memorable in one sentence and because it warns you that the pattern was noticed long before anyone measured it.

**The two situations where it bites hardest.** First, **collaboration**: when a well known and a little known researcher publish together, the well known one is remembered as the author of the work. Second, **independent multiple discovery**: when two people reach the same result separately, the credit tends to settle on whichever of them was already eminent. Both are ordinary situations. Neither requires anyone to behave badly.

**The forty-first chair.** Merton borrowed an image from the French writer Arsene Houssaye, who in 1855 wrote about the writers the Academie francaise had no room for. The Academie has forty seats, so its "forty-first chair" is occupied by everyone excellent enough to belong and unlucky enough to arrive when the seats were full. The names usually listed for that chair include Descartes, Pascal, Rousseau, Diderot, Flaubert, Zola and Proust. The point is not that the Academie erred forty times. The point is that a format with forty slots produces a forty-first chair automatically, which is the format cap from lesson 1 doing its work.

**Merton's own verdict, which is more complicated than the summary.** He argued that the effect is dysfunctional for the individual scientist penalized early in a career, and at the same time arguably functional for the communication system of science, because attaching a known name to a result is one way an overloaded field decides what to read (Merton, 1968). That is not a defense of the outcome for the person. It is a reason the practice survives, and a mechanism that has a use is far harder to remove than one that has none.

:::reveal State the Matthew effect in Merton's terms, and name the two distinct things it does. ||| It is the accruing of greater increments of recognition for particular contributions to scientists of considerable repute, and the withholding of such recognition from scientists who have not yet made their mark. Credit flows toward the eminent AND is withheld from the unknown.

:::reveal What is the forty-first chair, and what does it illustrate about credit? ||| Houssaye's 1855 image for the writers the Academie francaise's forty seats had no room for. It illustrates that a format cap produces exclusion automatically, without anyone deciding to exclude a particular person.

:::reveal Why does Merton's claim that the effect is partly functional make it harder to remove? ||| Because a practice with a use survives criticism. Attaching a known name to a result is one way an overloaded field triages what to read, so the mechanism is doing a job for the field even while it penalizes the individual.

## Vocabulary
- **Matthew effect**: credit accruing to the already eminent and being withheld from the not yet known, named by Merton in 1968.
- **Independent multiple discovery**: two or more people reaching the same result separately, a situation in which the credit tends to settle on whoever was already eminent.
- **The forty-first chair**: Houssaye's image, borrowed by Merton, for those excluded by a fixed number of seats rather than by a judgment about them.
- **Functional for the field**: Merton's argument that using a known name as a filter helps an overloaded discipline decide what to read, whatever it costs the individual.

## Sources
Merton, R. K. (1968). The Matthew effect in science. *Science, 159*(3810), 56-63. https://doi.org/10.1126/science.159.3810.56`,
    },
    {
      slug: "the-footnote-inside-the-paper",
      title: "6 · The paper about credit that misassigned credit",
      section: "Section 2 · The Matthew effect",
      body: `Twenty years after the 1968 paper, Merton returned to the subject in *Isis* and added something about his own work (Merton, 1988).

**What he said.** He had drawn on Harriet Zuckerman's interview and other research materials so heavily that the 1968 paper should have appeared under joint authorship (Merton, 1988). Zuckerman had interviewed Nobel laureates for her own study, and those interviews are where much of the paper's evidence came from. The paper that named the mechanism was itself an instance of it, and the correction arrived two decades late, from the person who had benefited.

Teach that squarely rather than as an irony. It shows three things at once: the mechanism operates on people who understand it, a correction is possible, and a correction taking twenty years leaves twenty years of citations pointing at one name.

**Then somebody measured it.** Bol, de Vaan and van de Rijt (2018) used every review score and funding decision in a large Dutch early-career grant scheme they describe as a two billion euro program. The design is the useful part. Applicants who scored *just above* the funding threshold and applicants who scored *just below* it are, on the evidence of the scores themselves, near identical. The only systematic difference between them is the grant, so any later gap has to come from the grant rather than from the talent.

**The result.** Winners just above the threshold accumulated more than twice as much funding over the following eight years as non winners with near identical scores just below it (Bol et al., 2018). Two findings inside that matter more than the headline. The gap was driven partly by non winners **ceasing to compete**. And the authors reported no evidence that winners' improved chances came from the achievements the first grant paid for, so the money worked as an asset for getting more money.

**Does it replicate?** A 2025 replication using 109,624 funded and unfunded applications across 14 programs at six North American and European funders reports that the Matthew effect replicated, held across funders and specifications, and generalized to the whole population, while a separate claim in this literature, that an early setback later benefits those who survive it, did not hold up robustly and is better explained by who chooses to reapply (Traag et al., 2025). Note the honest shape of that: one finding survived and one did not, and a course reporting only the survivor would sell you a cleaner field than exists. That study is an eLife reviewed preprint rather than a version of record, so treat the citation as provisional.

:::reveal What did Merton say in 1988 about the authorship of his own 1968 paper? ||| That he had drawn on Harriet Zuckerman's interview and other research materials so heavily that the paper should have appeared under joint authorship. The paper naming the mechanism was an instance of it, corrected twenty years later.

:::reveal Explain the design Bol and colleagues used, and why it supports a causal reading. ||| They compared applicants scoring just above a funding threshold with applicants scoring just below it. On the scores themselves the two groups are near identical, so the grant is the only systematic difference, and a later gap between them is attributable to the grant rather than to talent.

:::reveal Name the two findings inside the Bol result that matter more than the headline figure. ||| The gap was driven partly by non winners ceasing to compete for later funding. And there was no evidence that winners' improved later chances came from what the first grant enabled, so the money itself acted as the asset.

## Vocabulary
- **Regression discontinuity**: comparing cases just above and just below a cutoff, where the cutoff is the only systematic difference, so a later gap can be read as caused by it.
- **Participation mechanism**: the part of an advantage produced by the losers dropping out rather than by the winners performing better.
- **Reviewed preprint**: a version posted with peer reviews attached but not yet a final version of record, which is a reason to cite it provisionally.
- **Replication study**: a re-test of a published finding on new data, whose value includes reporting which claims did NOT survive.

## Sources
Bol, T., de Vaan, M., & van de Rijt, A. (2018). The Matthew effect in science funding. *Proceedings of the National Academy of Sciences, 115*(19), 4887-4890. https://doi.org/10.1073/pnas.1719557115

Merton, R. K. (1988). The Matthew effect in science, II: Cumulative advantage and the symbolism of intellectual property. *Isis, 79*(4), 606-623. https://doi.org/10.1086/354848

Traag, V., Brady, E., Vincent-Lamarre, P., Bidel, F., Lopes-Bento, C., Andersen, J. P., & Bloch, C. (2025). *The Matthew effect and early-career setbacks in research funding: A replication study* (eLife Reviewed Preprint 109042). https://doi.org/10.7554/eLife.109042.1`,
    },
    {
      slug: "the-eminent-name-absorbs-the-story",
      title: "7 · Malone, Walker, and a story that ran uphill",
      section: "Section 2 · The Matthew effect",
      body: `The Matthew effect is usually taught inside science. It works the same way on a business story, and the clearest American case is a live dispute, so this lesson gives you the disagreement rather than a verdict.

**What both sides agree on.** Annie Turnbo, later Annie Turnbo Malone, was born in Metropolis, Illinois, on 9 August 1869 and died in Chicago on 10 May 1957. She developed a hair treatment around the turn of the century, moved the business to St. Louis in 1902 for the larger market, and expanded nationally after the 1904 World's Fair. In 1918 she established Poro College in St. Louis, a training school that also held her manufacturing and business operations and served as a gathering place for the neighborhood (State Historical Society of Missouri, n.d.). Both sides also agree that Sarah Breedlove, who became Madam C. J. Walker, sold Malone's Poro products in St. Louis and in Denver in 1905 and 1906, before her marriage to Charles Joseph Walker (Bundles, n.d.).

**What is contested, and who says what.** The popular version is that Malone trained Walker and that Walker took the formula. A'Lelia Bundles, Walker's biographer and her great great granddaughter, disputes both halves: she writes that Walker was introduced to hair care in the 1890s by her brothers, who were barbers in St. Louis, and that the petrolatum and sulfur preparation at issue appears in medical texts as early as the 1700s, so neither woman originated it (Bundles, n.d.). Bundles also disputes the widely repeated fourteen million dollar figure for Malone's fortune as lacking contemporaneous documentation. Weigh that as you would any interested source: Bundles represents the Walker estate, which is a reason to read her evidence closely rather than to discount it, and what she offers is company records rather than assertion.

**Where the State Historical Society of Missouri stands.** Its account calls Walker Malone's former employee and says Malone's legacy has largely been overshadowed by Walker's success (State Historical Society of Missouri, n.d.). That is a narrower claim than theft, and it is the one this course teaches: not that a formula was stolen, but that a story ran uphill toward the more famous name.

**Why that is the Matthew effect and not a scandal.** Nobody had to take anything. Walker became the household name, and once a name is the household name every retelling routes through it. Malone appears in the popular story as a supporting character in Walker's biography, or, in the correction that overshoots, as the victim of a theft the documents do not establish. Both are the same mechanism working on memory rather than on a paper.

**One warning about dates.** Sources differ on whether the Poro complex opened in 1917 or 1918. This course follows the State Historical Society of Missouri and says 1918. A one year disagreement about a landmark building previews Section 5: the record for these two businesses is not equally thick, and that asymmetry is itself a finding.

:::reveal Which parts of the Malone and Walker story do the disputing sides actually agree on? ||| That Malone founded the business, moved it to St. Louis in 1902 and established Poro College there in 1918, and that Walker sold Malone's Poro products in St. Louis and Denver in 1905 and 1906.

:::reveal What exactly does A'Lelia Bundles dispute, and what does she offer instead? ||| That Malone trained Walker and that Walker took the formula. She writes that Walker learned hair care in the 1890s from her brothers, who were St. Louis barbers, and that the petrolatum and sulfur preparation appears in medical texts as early as the 1700s, so neither woman originated it. She also disputes the fourteen million dollar figure for Malone's fortune as undocumented.

:::reveal Why is "a story ran uphill" a more defensible claim here than "a formula was stolen"? ||| Because the overshadowing is documented, including by the State Historical Society of Missouri, while the theft is not established by the records either side has produced. The mechanism explains the retelling without requiring anyone to have taken anything.

## Vocabulary
- **Poro College**: the St. Louis training school, factory and community building Malone established in 1918, which is the load-bearing document trail for her business.
- **Interested source**: one with a stake in the outcome, such as a descendant or an estate, which is a reason to examine the evidence offered rather than to discount the source.
- **Overshadowing**: the documented claim that one figure's story has absorbed another's, which is weaker and better supported than a claim of theft.
- **Documentation asymmetry**: two comparable subjects whose surviving records differ in thickness, so the better documented one looks more real.

## Sources
Bundles, A. (n.d.). *The facts about Madam C. J. Walker and Annie Malone*. https://aleliabundles.com/the-facts-about-madam-c-j-walker-and-annie-malone/

State Historical Society of Missouri. (n.d.). *Annie Turnbo Malone*. Historic Missourians. https://historicmissourians.shsmo.org/annie-turnbo-malone/`,
    },
    {
      slug: "quiz-matthew-effect",
      title: "8 · Knowledge check: the Matthew effect",
      section: "Section 2 · The Matthew effect",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "Who named the Matthew effect, and in what year and journal?",
            options: ["Merton, 1968, in Science", "Margaret Rossiter, in 1993, in the journal Social Studies of Science", "Harriet Zuckerman, in 1977, in her study of American Nobel laureates", "Derek de Solla Price, in 1965, in a paper on networks of scientific papers"],
            correctIndex: 0,
            explanation: "Robert K. Merton, in Science 159(3810), 56-63, published in January 1968.",
            sourceLessonSlug: "merton-and-the-matthew-effect",
          },
          {
            prompt: "Merton's definition of the Matthew effect does two things at once. They are:",
            options: ["Credit accrues to the eminent and is withheld from the unknown", "Credit is delayed for everyone and then awarded to whoever is still working in the field", "Credit is transferred from the junior researcher to the senior one who supervised the work", "Credit is split evenly among collaborators and then re-concentrated by later citation practice"],
            correctIndex: 0,
            explanation: "Greater increments of recognition accrue to scientists of considerable repute, and such recognition is withheld from those who have not yet made their mark.",
            sourceLessonSlug: "merton-and-the-matthew-effect",
          },
          {
            prompt: "Merton's phrase for who receives the greater increments of recognition is:",
            options: ["Scientists of considerable repute", "Investigators holding a permanent appointment at a doctorate-granting research university", "Researchers whose prior work has been cited above the median rate for their subfield", "Authors listed first on a paper, regardless of how much of the work they actually did"],
            correctIndex: 0,
            explanation: "And the recognition is withheld from scientists who have not yet made their mark. Both halves are in the same sentence (Merton, 1968, p. 58).",
            sourceLessonSlug: "merton-and-the-matthew-effect",
          },
          {
            prompt: "Where does the name of the effect come from?",
            options: ["A line in the Gospel of Matthew", "The surname of the first researcher Merton interviewed for the 1968 study", "A nineteenth century essay by Matthew Arnold on the distribution of literary reputation", "The Matthew Commission, an early twentieth century inquiry into scientific prize-giving"],
            correctIndex: 0,
            explanation: "The line appears at Matthew 13:12 and again at 25:29: to whoever has, more will be given, and from whoever has not, even what they have will be taken away.",
            sourceLessonSlug: "merton-and-the-matthew-effect",
          },
          {
            prompt: "The two situations where the Matthew effect bites hardest are:",
            options: ["Collaboration and independent multiple discovery", "Peer review and the awarding of tenure at an institution with a fixed number of positions", "Conference invitations and the selection of keynote speakers by program committees", "Textbook writing and the compilation of course syllabuses by departmental committees"],
            correctIndex: 0,
            explanation: "When a well known and a little known researcher publish together, and when two people reach the same result separately. Both are ordinary situations requiring nobody to behave badly.",
            sourceLessonSlug: "merton-and-the-matthew-effect",
          },
          {
            prompt: "Independent multiple discovery means:",
            options: ["Two people reach the same result separately", "One researcher makes several unrelated discoveries over the course of a single career", "A discovery is announced by one group and then confirmed by a second group replicating it", "A finding is published simultaneously in several journals to establish priority beyond dispute"],
            correctIndex: 0,
            explanation: "And the credit tends to settle on whichever of them was already eminent, which is the Matthew effect operating without anyone taking anything.",
            sourceLessonSlug: "merton-and-the-matthew-effect",
          },
          {
            prompt: "The forty-first chair is an image borrowed from:",
            options: ["Arsene Houssaye, writing in 1855", "Alexis de Tocqueville's account of the French academies in Democracy in America", "The Royal Society's nineteenth century debates about limiting the number of fellows", "Merton's own earlier work on the sociology of science, where he first proposed the term"],
            correctIndex: 0,
            explanation: "Houssaye wrote about the writers the Academie francaise's forty seats had no room for, and Merton borrowed the image for the 1968 paper.",
            sourceLessonSlug: "merton-and-the-matthew-effect",
          },
          {
            prompt: "How many seats does the Academie francaise have?",
            options: ["Forty", "Fifty, with ten reserved for foreign members elected by the standing membership", "An unfixed number, set each year by the academy's governing council before elections", "Thirty six, a number chosen to match the number of departments in metropolitan France"],
            correctIndex: 0,
            explanation: "Which is why a forty-first chair exists at all: a format with forty slots produces exclusion automatically.",
            sourceLessonSlug: "merton-and-the-matthew-effect",
          },
          {
            prompt: "What does the forty-first chair illustrate about exclusion?",
            options: ["A format cap excludes without any decision about a person", "That selection committees consistently prefer established figures over promising newcomers", "That academies eventually admit everyone worthy, merely later than those people deserved", "That excluded figures are remembered better than admitted ones, because the exclusion is notable"],
            correctIndex: 0,
            explanation: "The point is not that the Academie erred forty times. It is that a fixed number of slots produces a forty-first chair automatically.",
            sourceLessonSlug: "merton-and-the-matthew-effect",
          },
          {
            prompt: "Merton argued the Matthew effect was dysfunctional for whom?",
            options: ["The individual scientist penalized early in a career", "The eminent scientist, who becomes overloaded with attributions for work others performed", "The journals, which lose readers once audiences learn to read only famous author names", "The funding agencies, whose portfolios concentrate in a small number of laboratories"],
            correctIndex: 0,
            explanation: "And at the same time arguably functional for the communication system of science, which is why the practice survives.",
            sourceLessonSlug: "merton-and-the-matthew-effect",
          },
          {
            prompt: "In what sense did Merton call the effect functional?",
            options: ["A known name helps an overloaded field triage what to read", "It rewards the scientists most likely to convert additional resources into further discoveries", "It concentrates prizes, which keeps the number of contested attributions manageably small", "It gives junior researchers a clear target to work toward as they build their own reputations"],
            correctIndex: 0,
            explanation: "Not a defense of the outcome for the individual. It is a reason the mechanism is hard to remove: it is doing a job for the field.",
            sourceLessonSlug: "merton-and-the-matthew-effect",
          },
          {
            prompt: "Why does a mechanism that has a use resist removal?",
            options: ["Something depends on it working", "Because the people it benefits are by definition the ones with the power to protect it", "Because removing it would require changing the format caps, which are set by statute", "Because no alternative has ever been proposed that would perform the same filtering job"],
            correctIndex: 0,
            explanation: "A mechanism doing a job for the field is far harder to remove than one that has none, whatever it costs the individual.",
            sourceLessonSlug: "merton-and-the-matthew-effect",
          },
          {
            prompt: "The Matthew effect predicts that a joint paper by a famous and an unknown researcher will be:",
            options: ["Remembered as the famous one's work", "Cited less than either author's solo work, because readers distrust uneven collaborations", "Attributed to whichever author is listed first, following the journal's ordering convention", "Split evenly in memory, since the author line records both names with equal prominence"],
            correctIndex: 0,
            explanation: "That is the collaboration case, one of the two situations Merton identified as where the effect bites hardest.",
            sourceLessonSlug: "merton-and-the-matthew-effect",
          },
          {
            prompt: "Which of these is NOT part of Merton's 1968 claim as this lesson states it?",
            options: ["That the eminent scientist acted deliberately", "That recognition accrues in greater increments to scientists of considerable repute", "That recognition is withheld from scientists who have not yet made their mark", "That the effect is dysfunctional for a scientist penalized early in a career"],
            correctIndex: 0,
            explanation: "Nothing in the mechanism requires anyone to behave badly. That is precisely what makes it repeat.",
            sourceLessonSlug: "merton-and-the-matthew-effect",
          },
          {
            prompt: "The Gospel line behind the effect's name appears at which two places in Matthew?",
            options: ["13:12 and 25:29", "5:3 and 6:24, in the Sermon on the Mount and the passage about serving two masters", "7:7 and 19:24, in the passage on asking and the one about the eye of a needle", "22:21 and 28:19, in the passages on rendering to Caesar and on going to all nations"],
            correctIndex: 0,
            explanation: "Merton titled the effect for the line, which warns you the pattern was noticed long before anyone measured it.",
            sourceLessonSlug: "merton-and-the-matthew-effect",
          },
          {
            prompt: "This lesson says the forty-first chair connects back to which idea from lesson 1?",
            options: ["The format cap", "The four currencies, since an academy seat is a form of institutional memory", "The rationing decision, which is made only when contributors outnumber the available slots", "The distinction between doing the work and being named for it, which the academy formalizes"],
            correctIndex: 0,
            explanation: "A format with forty slots produces a forty-first chair automatically, which is the format cap doing its work in a different setting.",
            sourceLessonSlug: "merton-and-the-matthew-effect",
          },
          {
            prompt: "Names usually listed as occupying the forty-first chair include:",
            options: ["Descartes, Pascal, Rousseau and Proust", "Voltaire, Racine, Corneille and Victor Hugo, all of whom served terms as academicians", "Marie Curie, Henri Poincare and Louis Pasteur, none of whom were writers by profession", "Merton himself, along with the other sociologists excluded from the French academies"],
            correctIndex: 0,
            explanation: "Along with Diderot, Flaubert and Zola. The usual lists name writers excellent enough to belong who arrived when the seats were full.",
            sourceLessonSlug: "merton-and-the-matthew-effect",
          },
          {
            prompt: "Read carefully: withholding recognition from the unknown and granting it to the eminent are:",
            options: ["Two separate events in one mechanism", "The same event described from the perspectives of the two people involved in it", "Sequential stages, with the withholding always preceding the granting by several years", "Alternative outcomes, only one of which can occur in any given case of collaboration"],
            correctIndex: 0,
            explanation: "They are not the same event and they can happen in the same room on the same afternoon, which is why the definition names both.",
            sourceLessonSlug: "merton-and-the-matthew-effect",
          },
          {
            prompt: "The Matthew effect was named in which decade?",
            options: ["The 1960s", "The 1990s, alongside the naming of the Matilda effect by a historian of science", "The 1980s, in the follow-up paper that revisited the original argument in Isis", "The 1930s, in the earliest sociological studies of scientific reward systems"],
            correctIndex: 0,
            explanation: "January 1968. The Matilda effect was named a quarter century later, in 1993, and was named partly in reference to it.",
            sourceLessonSlug: "merton-and-the-matthew-effect",
          },
          {
            prompt: "In 1988 Merton said his 1968 paper should have appeared:",
            options: ["Under joint authorship", "In a sociology journal rather than in a general science journal like Science", "With a formal acknowledgement of the Nobel laureates who agreed to be interviewed", "Under a different title, because the biblical reference had obscured the argument"],
            correctIndex: 0,
            explanation: "He had drawn on Harriet Zuckerman's interview and other research materials so heavily that joint authorship was warranted (Merton, 1988).",
            sourceLessonSlug: "the-footnote-inside-the-paper",
          },
          {
            prompt: "Whose research materials did Merton say the 1968 paper relied on?",
            options: ["Harriet Zuckerman's", "Margaret Rossiter's, whose archival work on women in American science he had read in draft", "Derek de Solla Price's, whose citation data supplied the paper's quantitative backbone", "The Science editorial staff's, who had commissioned a survey of laureates for the issue"],
            correctIndex: 0,
            explanation: "Zuckerman had interviewed Nobel laureates for her own study, and those interviews are where much of the paper's evidence came from.",
            sourceLessonSlug: "the-footnote-inside-the-paper",
          },
          {
            prompt: "How long after the 1968 paper did Merton's acknowledgment appear?",
            options: ["Twenty years", "Two years, in a correction printed by Science in the volume following publication", "Forty years, in a memoir published near the end of Merton's life", "Five years, when the paper was reprinted in a collected volume of his essays"],
            correctIndex: 0,
            explanation: "It appeared in Isis in 1988, and twenty years of citations had already accumulated pointing at one name.",
            sourceLessonSlug: "the-footnote-inside-the-paper",
          },
          {
            prompt: "This lesson says the Merton and Zuckerman case shows three things. One of them is:",
            options: ["The mechanism operates on people who understand it", "That an acknowledgment in a later paper carries the same weight as an author line", "That interview-based research is more vulnerable to misattribution than quantitative work", "That journals of the period had no procedure for adding an author after publication"],
            correctIndex: 0,
            explanation: "The other two: a correction is possible, and a correction taking twenty years leaves twenty years of citations pointing at one name.",
            sourceLessonSlug: "the-footnote-inside-the-paper",
          },
          {
            prompt: "Bol, de Vaan and van de Rijt (2018) studied funding decisions in:",
            options: ["A Dutch early-career grant program", "The United States National Institutes of Health's investigator-initiated award portfolio", "The European Research Council's starting grants across all twenty seven member states", "A consortium of private foundations funding biomedical research in North America"],
            correctIndex: 0,
            explanation: "They describe it as a two billion euro program, and used every review score and funding decision in it.",
            sourceLessonSlug: "the-footnote-inside-the-paper",
          },
          {
            prompt: "The comparison at the heart of the Bol design is between applicants:",
            options: ["Just above and just below the funding threshold", "Who applied early in their careers and those who applied after obtaining a permanent post", "Who received the largest awards and those who received the smallest awards in the scheme", "Working in laboratory disciplines and those working in theoretical or computational fields"],
            correctIndex: 0,
            explanation: "On the evidence of the scores themselves the two groups are near identical, so the grant is the only systematic difference between them.",
            sourceLessonSlug: "the-footnote-inside-the-paper",
          },
          {
            prompt: "Why does the just-above versus just-below comparison support a causal reading?",
            options: ["The grant is the only systematic difference", "Because the sample is large enough that random variation between the groups cancels out", "Because reviewers cannot see the threshold, so their scores are unaffected by where it falls", "Because both groups were followed for the same length of time under the same conditions"],
            correctIndex: 0,
            explanation: "Near identical scores mean near identical assessed quality, so any later gap has to come from the grant rather than from the talent.",
            sourceLessonSlug: "the-footnote-inside-the-paper",
          },
          {
            prompt: "What did the winners just above the threshold accumulate over the following eight years?",
            options: ["More than twice as much funding", "About thirty percent more funding, a gap that narrowed steadily after the fourth year", "Roughly the same funding, but far more citations and invitations to speak at conferences", "A permanent professorship at nearly double the rate, with no measurable funding difference"],
            correctIndex: 0,
            explanation: "Compared with non winners whose review scores fell just below the same threshold (Bol et al., 2018).",
            sourceLessonSlug: "the-footnote-inside-the-paper",
          },
          {
            prompt: "Part of the funding gap was driven by non winners:",
            options: ["Ceasing to compete", "Leaving research entirely within two years of the rejection they received", "Moving to institutions with weaker administrative support for grant applications", "Applying to smaller schemes whose maximum award sizes were substantially lower"],
            correctIndex: 0,
            explanation: "A participation mechanism: part of the advantage came from the losers dropping out rather than from the winners performing better.",
            sourceLessonSlug: "the-footnote-inside-the-paper",
          },
          {
            prompt: "What did Bol and colleagues report about the source of the winners' later advantage?",
            options: ["No evidence it came from what the grant enabled", "That it came almost entirely from the publications the first grant made possible", "That it disappeared once they controlled for the applicant's institution and discipline", "That it was strongest among applicants whose scores were furthest above the threshold"],
            correctIndex: 0,
            explanation: "Which means early funding worked as an asset for getting later funding, more or less directly, rather than through the achievements it paid for.",
            sourceLessonSlug: "the-footnote-inside-the-paper",
          },
          {
            prompt: "The 2025 replication study covered how many applications?",
            options: ["109,624", "About 3,660, the same sample the original Dutch study had analyzed", "Roughly 19.9 million, drawn from five decades of published papers and patents", "Just under 500,000, covering every national funder in the European Research Area"],
            correctIndex: 0,
            explanation: "Funded and unfunded applications across 14 programs at six North American and European funders (Traag et al., 2025).",
            sourceLessonSlug: "the-footnote-inside-the-paper",
          },
          {
            prompt: "What did the 2025 replication find about the Matthew effect itself?",
            options: ["It replicated and generalized", "It held only in the original Dutch data and vanished at the other five funders", "It reversed direction, with non winners outperforming winners after the sixth year", "It could not be tested, because the other funders do not record numerical review scores"],
            correctIndex: 0,
            explanation: "Robust across funders and model specifications, and generalizing to the whole population rather than only to cases near the threshold.",
            sourceLessonSlug: "the-footnote-inside-the-paper",
          },
          {
            prompt: "Which claim did the 2025 replication find did NOT hold up robustly?",
            options: ["That an early setback later benefits survivors", "That grant winners accumulate more funding than near-identical non winners", "That review scores near a funding threshold are effectively indistinguishable", "That funding decisions differ systematically between European and North American funders"],
            correctIndex: 0,
            explanation: "The authors report it is better explained by selection into reapplying: unfunded applicants with high impact are simply more likely to try again.",
            sourceLessonSlug: "the-footnote-inside-the-paper",
          },
          {
            prompt: "Why does this lesson insist on reporting the finding that did NOT survive?",
            options: ["Otherwise the field looks cleaner than it is", "Because a failed replication is stronger evidence than a successful one in this literature", "Because the setback claim is the one most often repeated in popular science writing", "Because the replication's authors asked that both results be cited together whenever used"],
            correctIndex: 0,
            explanation: "A course reporting only the survivor would sell you a tidier science than exists, which is the same failure as closing a dispute by assertion.",
            sourceLessonSlug: "the-footnote-inside-the-paper",
          },
          {
            prompt: "Why is the 2025 replication cited provisionally here?",
            options: ["It is a reviewed preprint, not a version of record", "Because its sample is drawn from funders that do not publish their review criteria", "Because its authors are the same team that produced the original 2018 finding", "Because it has not yet been cited by other researchers working on the same question"],
            correctIndex: 0,
            explanation: "A reviewed preprint carries its peer reviews but is not the final published version, which is a reason to check before repeating its numbers.",
            sourceLessonSlug: "the-footnote-inside-the-paper",
          },
          {
            prompt: "A participation mechanism, as this lesson defines it, is:",
            options: ["Advantage produced by losers dropping out", "The requirement that an applicant reapply within a fixed window to remain eligible", "The tendency of review panels to favor applicants who have applied to them before", "The share of a funding gap attributable to differences in how groups spend their awards"],
            correctIndex: 0,
            explanation: "Rather than by winners performing better. It is why the Bol result is about competition behavior as much as about money.",
            sourceLessonSlug: "the-footnote-inside-the-paper",
          },
          {
            prompt: "Regression discontinuity, as used here, means comparing cases:",
            options: ["Just either side of a cutoff", "Before and after a policy change, using the change as a natural experiment", "Matched on every observable characteristic except the outcome being measured", "Randomly assigned to treatment and control by the researchers running the study"],
            correctIndex: 0,
            explanation: "The cutoff is the only systematic difference between the groups, so a later gap can be read as caused by crossing it.",
            sourceLessonSlug: "the-footnote-inside-the-paper",
          },
          {
            prompt: "The Merton and Zuckerman episode is best described as:",
            options: ["The mechanism operating inside the paper that named it", "An early example of the authorship criteria that journals later formalized in writing", "A dispute between two researchers that was eventually settled by their institution", "A case where the credit was correctly assigned and later challenged without cause"],
            correctIndex: 0,
            explanation: "Which is why the lesson teaches it squarely rather than as an irony: it shows the effect reaches people who understand it perfectly well.",
            sourceLessonSlug: "the-footnote-inside-the-paper",
          },
          {
            prompt: "Annie Turnbo Malone moved her business to St. Louis in which year?",
            options: ["1902", "1918, at the same time she opened the Poro College complex in the Ville", "1905, the year Sarah Breedlove began selling Poro products in that city", "1869, the year of her birth, when her family relocated from Metropolis, Illinois"],
            correctIndex: 0,
            explanation: "For the larger market. The company expanded nationally after the 1904 World's Fair (State Historical Society of Missouri, n.d.).",
            sourceLessonSlug: "the-eminent-name-absorbs-the-story",
          },
          {
            prompt: "Poro College, as this course dates it, was established in:",
            options: ["1918", "1902, when Malone first arrived in St. Louis with the business", "1904, to serve visitors drawn to the city by the World's Fair that year", "1927, using the proceeds of the settlement that followed Malone's divorce"],
            correctIndex: 0,
            explanation: "Following the State Historical Society of Missouri. Some sources say 1917, and this course names the disagreement rather than hiding it.",
            sourceLessonSlug: "the-eminent-name-absorbs-the-story",
          },
          {
            prompt: "What did the Poro College building contain?",
            options: ["A training school, manufacturing and business operations", "Only classrooms, with manufacturing kept at a separate plant elsewhere in Missouri", "A department store selling other manufacturers' products alongside Malone's own line", "A residential hotel operated as a separate business from the hair care company"],
            correctIndex: 0,
            explanation: "It also served as a gathering place for the neighborhood, which is part of why it is the load-bearing document trail for her business.",
            sourceLessonSlug: "the-eminent-name-absorbs-the-story",
          },
          {
            prompt: "What do BOTH sides of the Malone and Walker dispute agree on?",
            options: ["Walker sold Poro products in 1905 and 1906", "That Malone personally trained Walker in the treatment before she left for Denver", "That the two women shared a formula developed jointly during their time in St. Louis", "That Walker's company records were destroyed, leaving only Malone's side documented"],
            correctIndex: 0,
            explanation: "In St. Louis and in Denver, before her marriage to Charles Joseph Walker. Bundles states this as fact and so does the State Historical Society.",
            sourceLessonSlug: "the-eminent-name-absorbs-the-story",
          },
          {
            prompt: "A'Lelia Bundles is:",
            options: ["Walker's biographer and great great granddaughter", "A historian at the State Historical Society of Missouri who catalogued the Poro records", "The archivist who assembled the Malone papers after Poro College closed in St. Louis", "An independent scholar with no family connection to either of the two businesses"],
            correctIndex: 0,
            explanation: "She also represents the Walker estate, which the lesson discloses so you can weigh her as an interested source.",
            sourceLessonSlug: "the-eminent-name-absorbs-the-story",
          },
          {
            prompt: "Bundles says Walker was first introduced to hair care by:",
            options: ["Her brothers, who were St. Louis barbers", "Annie Turnbo Malone, during her first months as a Poro sales agent in Missouri", "A Denver pharmacist who helped her adapt an existing preparation for commercial sale", "Her first husband, who had worked in the trade before their marriage in the 1880s"],
            correctIndex: 0,
            explanation: "In the 1890s, which on her account puts Walker's exposure to the trade before any contact with Poro.",
            sourceLessonSlug: "the-eminent-name-absorbs-the-story",
          },
          {
            prompt: "What does Bundles say about the petrolatum and sulfur preparation?",
            options: ["It appears in medical texts as early as the 1700s", "That Malone patented it in Illinois before either woman began selling commercially", "That the two versions differed enough chemically that neither could have copied the other", "That no surviving sample of either product exists, so the comparison cannot be made"],
            correctIndex: 0,
            explanation: "Her conclusion is that neither woman originated the recipe, which undercuts the theft framing from underneath rather than denying the contact.",
            sourceLessonSlug: "the-eminent-name-absorbs-the-story",
          },
          {
            prompt: "The fourteen million dollar figure for Malone's fortune is treated here as:",
            options: ["Disputed for lack of contemporaneous documentation", "An established figure drawn from the company's surviving tax filings for the 1920s", "A conservative estimate, since Poro's overseas sales were never counted in the total", "Irrelevant, because personal wealth has no bearing on any question about credit"],
            correctIndex: 0,
            explanation: "Bundles disputes it on documentary grounds. The course reports the dispute and names who holds the position rather than printing the number as fact.",
            sourceLessonSlug: "the-eminent-name-absorbs-the-story",
          },
          {
            prompt: "How does this lesson say an interested source should be handled?",
            options: ["Read the evidence offered, closely", "Set aside, because a family connection makes an account unusable as history", "Balanced against an equally interested source on the other side of the question", "Accepted, since a descendant has access to records no outside scholar can reach"],
            correctIndex: 0,
            explanation: "Bundles represents the Walker estate, which is a reason to examine what she offers, which is company records rather than assertion.",
            sourceLessonSlug: "the-eminent-name-absorbs-the-story",
          },
          {
            prompt: "How does the State Historical Society of Missouri describe Walker's relation to Malone?",
            options: ["As her former employee", "As her business partner during the years the company operated out of St. Louis", "As her student, trained at Poro College before founding a competing enterprise", "As an unrelated competitor whose products entered the market independently"],
            correctIndex: 0,
            explanation: "And it says Malone's legacy has largely been overshadowed by Walker's success, which is a narrower claim than theft.",
            sourceLessonSlug: "the-eminent-name-absorbs-the-story",
          },
          {
            prompt: "The claim this course actually teaches about Malone and Walker is that:",
            options: ["A story ran uphill toward the more famous name", "A formula was taken and the documentary record proves it beyond reasonable doubt", "Both women independently invented the same preparation within a few years of each other", "The dispute cannot be discussed responsibly, so the course omits both women entirely"],
            correctIndex: 0,
            explanation: "Overshadowing is documented, including by a state historical society. Theft is not established by the records either side has produced.",
            sourceLessonSlug: "the-eminent-name-absorbs-the-story",
          },
          {
            prompt: "Why is this a Matthew effect rather than a scandal?",
            options: ["Nobody had to take anything for it to happen", "Because the two businesses competed openly and neither concealed anything from the other", "Because the credit was eventually reassigned correctly once historians examined the records", "Because both women ended up equally famous, so no lasting advantage was gained by either"],
            correctIndex: 0,
            explanation: "Once a name is the household name, every retelling routes through it. The mechanism works on memory here rather than on a paper.",
            sourceLessonSlug: "the-eminent-name-absorbs-the-story",
          },
          {
            prompt: "The lesson names two opposite distortions of the Malone and Walker story. They are:",
            options: ["Malone as a footnote, and Malone as the victim of a proven theft", "Walker as an inventor, and Walker as a saleswoman who never developed a product", "Both women as inventors, and both women as marketers who invented nothing at all", "Malone as the wealthier woman, and Walker as the more commercially successful one"],
            correctIndex: 0,
            explanation: "A supporting character in Walker's biography, or the victim of a theft the documents do not establish. Both are the same mechanism working on memory.",
            sourceLessonSlug: "the-eminent-name-absorbs-the-story",
          },
          {
            prompt: "Annie Turnbo Malone was born and died in which years?",
            options: ["1869 and 1957", "1867 and 1919, the same span as her better known contemporary in the trade", "1875 and 1946, the year the St. Louis orphans home was renamed for her", "1880 and 1927, the year of the divorce settlement that reduced her holdings"],
            correctIndex: 0,
            explanation: "Born in Metropolis, Illinois on 9 August 1869, died in Chicago on 10 May 1957 (State Historical Society of Missouri, n.d.).",
            sourceLessonSlug: "the-eminent-name-absorbs-the-story",
          },
          {
            prompt: "What does the 1917 versus 1918 disagreement about Poro College preview?",
            options: ["Section 5, on unequal records", "Section 4, on how authorship conventions decide who appears on a document", "Section 6, on the instruments available for correcting a record after the fact", "Section 3, on how a woman's contribution is routed to a male colleague instead"],
            correctIndex: 0,
            explanation: "The record for these two businesses is not equally thick, and that asymmetry is itself a finding rather than a nuisance.",
            sourceLessonSlug: "the-eminent-name-absorbs-the-story",
          },
          {
            prompt: "Documentation asymmetry means:",
            options: ["Comparable subjects whose surviving records differ in thickness", "A record kept in two places whose copies disagree about a date or a figure", "The gap between what an institution recorded and what it later chose to publish", "A dispute in which only one side has been willing to open its archives to scholars"],
            correctIndex: 0,
            explanation: "And the better documented subject looks more real, which is a bias in the reader rather than a fact about the past.",
            sourceLessonSlug: "the-eminent-name-absorbs-the-story",
          },
          {
            prompt: "This course prints 1918 for Poro College and then does what?",
            options: ["Names the sources that say 1917", "Removes the date from the quiz, since a contested figure should never be assessed", "Averages the two dates and reports the result as approximately the end of 1917", "Cites only the state historical society, so the reader never encounters the alternative"],
            correctIndex: 0,
            explanation: "Following the State Historical Society of Missouri while saying that other sources differ, which is rule two applied to a small factual disagreement.",
            sourceLessonSlug: "the-eminent-name-absorbs-the-story",
          },
          {
            prompt: "Malone's company expanded nationally after which event?",
            options: ["The 1904 World's Fair", "The opening of Poro College, which drew agents from across the country to train", "The 1927 divorce settlement, which forced a restructuring of the sales organization", "Walker's departure for Denver, which opened western territory to Poro's own agents"],
            correctIndex: 0,
            explanation: "The positive reception at the fair is the documented turning point in the business's national growth.",
            sourceLessonSlug: "the-eminent-name-absorbs-the-story",
          },
          {
            prompt: "The Matthew effect applies to business history in this lesson because:",
            options: ["Retellings route through the better known name", "Businesses compete for customers the way scientists compete for citations and prizes", "The wealthier of two founders can afford to commission the histories that get written", "Commercial records are kept to different standards than scientific ones, so credit shifts"],
            correctIndex: 0,
            explanation: "The mechanism is not confined to science. It operates wherever a story has to be told through a name.",
            sourceLessonSlug: "the-eminent-name-absorbs-the-story",
          },
          {
            prompt: "Merton's 1988 acknowledgment appeared in which journal?",
            options: ["Isis", "Science, in the same journal that had published the original 1968 paper", "Social Studies of Science, where the Matilda effect was named five years later", "The Proceedings of the National Academy of Sciences, alongside the funding study"],
            correctIndex: 0,
            explanation: "Isis 79(4), 606-623, under the title The Matthew Effect in Science, II: Cumulative Advantage and the Symbolism of Intellectual Property.",
            sourceLessonSlug: "the-footnote-inside-the-paper",
          },
          {
            prompt: "Zuckerman's interviews, which the 1968 paper drew on, were with:",
            options: ["Nobel laureates", "Graduate students at the beginning of their research careers in the United States", "Journal editors responsible for deciding which submissions were sent out for review", "Members of the Academie francaise, whose forty seats supplied the paper's central image"],
            correctIndex: 0,
            explanation: "Collected for her own study, and the source of much of the 1968 paper's evidence, which is why Merton later said joint authorship was warranted.",
            sourceLessonSlug: "the-footnote-inside-the-paper",
          },
          {
            prompt: "Taking the Bol and Traag results together, the fairest summary is:",
            options: ["The funding advantage is real and replicates", "Both the funding advantage and the early-setback benefit are firmly established", "Neither result survived scrutiny once larger multi-funder data became available", "The advantage exists only in the Netherlands, where the original data were collected"],
            correctIndex: 0,
            explanation: "The Matthew effect held across six funders and 14 programs. The separate early-setback claim did not, and is better explained by who reapplies.",
            sourceLessonSlug: "the-footnote-inside-the-paper",
          },
          {
            prompt: "Merton's 1968 paper appeared in which volume and issue of Science?",
            options: ["159(3810)", "115(19), the same issue that later carried the Dutch funding study", "79(4), which is the volume in which his follow-up essay appeared two decades later", "23(2), matching the volume in which the Matilda effect was named in 1993"],
            correctIndex: 0,
            explanation: "Science 159(3810), 56-63, published in January 1968. The definition quoted in this course sits on page 58.",
            sourceLessonSlug: "merton-and-the-matthew-effect",
          },
          {
            prompt: "Malone's business first grew out of a product she developed:",
            options: ["Around the turn of the twentieth century", "During the First World War, when wartime shortages created demand for a substitute", "In the 1880s, while still living in Metropolis, Illinois with her family", "After opening Poro College, using formulations worked out by her teaching staff"],
            correctIndex: 0,
            explanation: "A hair treatment, developed before the 1902 move to St. Louis and before the 1904 World's Fair that carried the company nationally.",
            sourceLessonSlug: "the-eminent-name-absorbs-the-story",
          },
          {
            prompt: "The Traag replication attributes the apparent early-setback benefit to:",
            options: ["Selection into who reapplies", "A coding error in the original study's treatment of applicants near the threshold", "Differences between American and European funders in how rejections are communicated", "The larger sample, which detected an effect the original study had been too small to see"],
            correctIndex: 0,
            explanation: "Unfunded applicants with high citation impact are simply more likely to try again, which produces the appearance of a benefit without a causal one.",
            sourceLessonSlug: "the-footnote-inside-the-paper",
          },
        ],
      },
    },
  ],
};
