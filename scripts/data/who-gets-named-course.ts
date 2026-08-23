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
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3 — The Matilda effect: credit with a destination
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "rossiter-and-the-matilda-effect",
      title: "9 · Rossiter names the second mechanism",
      section: "Section 3 · The Matilda effect",
      body: `Twenty five years after Merton, the historian of science Margaret W. Rossiter published a paper naming a second mechanism, and named it deliberately in reference to his (Rossiter, 1993).

**The claim.** The Matilda effect is the systematic under-recognition of women in science: their contributions denied, and their work repeatedly attributed to male colleagues. Rossiter opened by quoting the same Gospel line Merton had used, so a reader would see that this is the Matthew effect with something added rather than a rival to it.

**Whom it is named for.** Matilda Joslyn Gage (1826 to 1898) was an American suffragist and abolitionist who wrote "Woman as an Inventor," first circulated as a tract in 1870 and published in the *North American Review* in May 1883 (Gage, 1883). Gage's opening observation is the one worth carrying: no assertion about woman is more common than that she has no inventive or mechanical genius, and even the United States census failed to count her among the country's inventors. She then listed women who had in fact invented things. Rossiter's title honors a woman who had made the same argument a hundred and ten years earlier and been forgotten for it, which is the effect performing on the person it is named for.

**The cases Rossiter worked with.** Trotula of Salerno, a twelfth century physician whose works were later attributed to male authors. Nettie Stevens on chromosomal sex determination. Lise Meitner on nuclear fission. Marietta Blau on photographic methods in nuclear physics. Rosalind Franklin. Jocelyn Bell Burnell on pulsars. The list spans eight centuries, which is part of the argument: a pattern this durable is not a run of bad luck.

**Why this is not simply Matthew with a gender attached.** This course reads the difference as a **destination**. The Matthew effect says credit runs uphill toward eminence, and eminence is something anyone can lack. The Matilda effect adds a routing rule: the credit does not merely leave the woman, it arrives somewhere specific, at a male colleague. That is a stronger and more checkable claim, because it predicts *where* to look. If the mechanism is real, the credit is not floating loose in the literature. It is sitting on a name, and you can go and read the name.

**The two run together.** A junior woman working with a senior man is exposed to both at once: Matthew because he is eminent, Matilda because he is the male colleague. Treating them as one effect makes the case look overdetermined and unfalsifiable. Keeping them separate lets you ask which one the evidence in a particular case actually supports, which is the discipline lesson 2 asked for.

:::reveal State the Matilda effect, and say what Rossiter added to Merton's account. ||| The systematic under-recognition of women in science, with their contributions denied and repeatedly attributed to male colleagues. Rossiter added a destination: the credit does not merely leave the woman, it arrives at a specific male colleague.

:::reveal Who was Matilda Joslyn Gage, and why is naming the effect for her part of the argument? ||| An American suffragist and abolitionist (1826 to 1898) whose essay "Woman as an Inventor" appeared in the North American Review in 1883, listing women who had invented things. She had made the argument a hundred and ten years earlier and been forgotten for it, so the effect had already operated on her.

:::reveal Why does this course keep the Matthew and Matilda effects separate rather than merging them? ||| Because a junior woman with a senior man is exposed to both, and merging them makes any such case look overdetermined and unfalsifiable. Kept apart, you can ask which one the evidence in this particular case supports.

## Vocabulary
- **Matilda effect**: the systematic under-recognition of women in science, with their contributions attributed to male colleagues, named by Rossiter in 1993.
- **Destination**: this course's term for what Matilda adds to Matthew, namely that the credit arrives at a specific person rather than merely departing.
- **Overdetermined**: explained by so many mechanisms at once that no evidence could distinguish among them, which is what merging the two effects would produce.
- **Woman as an Inventor**: Gage's 1870 tract, published in the North American Review in 1883, which the 1993 paper's title honors.

## Sources
Gage, M. J. (1883). Woman as an inventor. *The North American Review, 136*(318), 478-489. https://www.jstor.org/stable/25118273

Rossiter, M. W. (1993). The Matthew Matilda effect in science. *Social Studies of Science, 23*(2), 325-341. https://doi.org/10.1177/030631293023002004`,
    },
    {
      slug: "matilda-measured",
      title: "10 · What the award data show, and what they do not",
      section: "Section 3 · The Matilda effect",
      body: `Rossiter's evidence was historical cases. Nineteen years later a team counted prizes instead, and the counting design is worth learning independently of the result (Lincoln et al., 2012).

**What they did.** They took the awards given by thirteen disciplinary societies in science, technology, engineering and medicine, over the twenty years from 1991 to 2010, and sorted them by what the award was *for*: scholarship, service, or teaching.

**What they found.** In the decade from 2000 to 2010, women won 10 percent of the research based awards, 32.2 percent of the service awards, and 37.1 percent of the teaching awards. Across the full twenty years the number of awards going to women rose by 78.5 percent, and the gap in scholarly recognition nevertheless got worse in the second decade rather than better. The authors' own reading is that women are honored roughly twice as often for service as for scholarship, and they connect that to a tacit assumption that a scientist and a rigorous scholar is a man.

**Why the design is the strong part.** A bare figure like "women won 10 percent of research awards" invites an obvious objection: perhaps 10 percent is the share of eligible senior women. That objection is exactly why the comparison across award *types* matters. The same societies, in the same years, drawing from the same membership, gave women a third of the service awards and a third of the teaching awards. Whatever the eligible pool was, it was the same pool for all three categories. The gap between 10 and 32.2 is therefore not a pool effect; it is a difference in what women were being recognized *for*.

**What the study does not establish.** It is observational, not experimental: nobody randomized who got nominated. It measures thirteen societies, not all of science. It reports shares of awards, not the quality of the work behind them, and it cannot tell you about any individual award. And a share can move for reasons that have nothing to do with bias, which is why the internal comparison across categories is doing the work rather than the headline number.

**How to say it accurately.** Not "women are 90 percent less likely to win a science prize," which the study does not support. Say instead: across thirteen STEM societies from 2000 to 2010, women took about a tenth of the awards for scholarship and about a third of the awards for service and teaching. That sentence survives an argument. The looser one does not, and losing it costs you the true thing standing beside it.

:::reveal What exactly did Lincoln and colleagues count, and over what period? ||| Awards from thirteen disciplinary societies in science, technology, engineering and medicine, from 1991 to 2010, sorted by whether the award was for scholarship, service, or teaching.

:::reveal Give the three percentages for 2000 to 2010 and say which comparison carries the argument. ||| Women won 10 percent of research based awards, 32.2 percent of service awards, and 37.1 percent of teaching awards. The comparison ACROSS categories carries it, because the eligible pool is the same for all three, so the gap is about what women were recognized for.

:::reveal Name two things this study cannot establish. ||| It is observational rather than experimental, so nobody randomized nominations; it covers thirteen societies rather than all of science; it reports shares rather than the quality of work; and it says nothing about any individual award.

## Vocabulary
- **Eligible pool**: the set of people who could have won, the usual objection to any bare share, and the reason the across-category comparison matters here.
- **Internal comparison**: setting two categories from the same source against each other so shared confounders cancel, which is the design's strength.
- **Observational study**: one where nobody assigned the treatment, so it can establish a pattern but not an experimental cause.
- **Overclaim**: restating a finding in a stronger form than the design supports, which loses the argument and the true material beside it.

## Sources
Lincoln, A. E., Pincus, S., Koster, J. B., & Leboy, P. S. (2012). The Matilda effect in science: Awards and prizes in the US, 1990s and 2000s. *Social Studies of Science, 42*(2), 307-320. https://doi.org/10.1177/0306312711435830`,
    },
    {
      slug: "pauli-murray-the-argument-before-the-case",
      title: "11 · Pauli Murray, and the argument that arrived before the case",
      section: "Section 3 · The Matilda effect",
      body: `Pauli Murray was born in Baltimore on 20 November 1910 and died in Pittsburgh on 1 July 1985. This lesson uses s/he, their, and they/them, following the practice of the Pauli Murray Center, which bases it on Murray's own papers: through the 1930s Murray repeatedly asked physicians for hormone therapy and for exploratory surgery, and was refused (Pauli Murray Center, n.d.). That is a self-documented record, which is what rule one requires, and it is the only identity claim in this course.

**Jane Crow.** Murray coined the term at Howard Law School for the specific position of a Black person perceived as a woman: shut out of one movement by race and out of the other by sex, and therefore invisible to both (Pauli Murray Center, n.d.). Naming a mechanism is itself a credit act. It gives later people something to cite.

**The argument, in 1944.** In a Howard seminar Murray argued that the way to end segregation was to attack *separate* itself, on Thirteenth and Fourteenth Amendment grounds, rather than to keep proving that particular separate facilities were unequal. The professor, Spottswood Robinson, kept the paper, and referred to it a decade later when he and the NAACP were preparing *Brown v. Board of Education* (American Civil Liberties Union, n.d.). Murray graduated at the top of that class.

**The reference work, in 1950 or 1951.** Murray compiled and edited *States' Laws on Race and Color* for the Woman's Division of Christian Service of the Methodist Church: 746 pages cataloguing the segregation statutes of every state. Thurgood Marshall called it the bible of civil rights litigators. The imprint reads 1950 and library catalogs record it as 1950, corrected to 1951, and the Pauli Murray Center dates it 1951. This course reports the disagreement rather than choosing silently.

**Then the same move on sex.** Murray and Mary O. Eastwood published "Jane Crow and the Law: Sex Discrimination and Title VII" in the *George Washington Law Review* in December 1965, arguing that the Fourteenth Amendment reasoning built for race applied to sex. Murray joined the American Civil Liberties Union board that year and co-founded the National Organization for Women in 1966.

**And then something unusual happened.** In 1971, preparing the brief in *Reed v. Reed*, Ruth Bader Ginsburg put Murray's name and Dorothy Kenyon's on the cover page, although neither had written it, because their work was the ground the argument stood on (American Civil Liberties Union, n.d.). That is the mechanism running backwards on purpose: a deliberate assignment of credit by someone who did not have to make it, recorded on the document itself, where it is still legible. Keep it in mind for Section 6, because most corrections are nothing like this cheap or this fast.

In 1977 Murray was ordained an Episcopal priest, the first Black person perceived as a woman to be.

**One widely repeated detail this course will not assert.** Many accounts add that Murray bet Robinson ten dollars that *Plessy* would fall within twenty five years, and that he paid. It traces to Murray's own recollection rather than to a contemporaneous record, so it is flagged here and filed as an open question rather than printed as fact.

:::reveal What did Murray's 1944 seminar argument say the litigation strategy should be? ||| Attack "separate" itself, on Thirteenth and Fourteenth Amendment grounds, rather than continue proving that particular separate facilities were unequal. Spottswood Robinson kept the paper and returned to it a decade later while preparing Brown.

:::reveal What is Jane Crow, and why does naming a mechanism count as a credit act? ||| Murray's term for the position of a Black person perceived as a woman, shut out of one movement by race and the other by sex. Naming it gives later people something to cite, which is how a contribution becomes attributable at all.

:::reveal What did Ginsburg do with the Reed v. Reed brief in 1971, and why is it unusual? ||| She put Murray's and Kenyon's names on the cover page although neither wrote it, because their work was the ground the argument stood on. It is a deliberate credit assignment nobody required, recorded on the document itself.

## Vocabulary
- **Jane Crow**: Murray's term for the position of a Black person perceived as a woman, excluded by race from one movement and by sex from the other.
- **States' Laws on Race and Color**: Murray's 746-page compilation of state segregation statutes, which Thurgood Marshall called the bible of civil rights litigators.
- **Frontal attack**: the strategy of challenging segregation itself rather than the inequality of particular facilities, which is what Murray's 1944 paper argued for.
- **Deliberate credit assignment**: naming someone on a document who did not write it, because the work depended on theirs, as Ginsburg did in 1971.

## Sources
American Civil Liberties Union. (n.d.). *Pauli Murray's indelible mark on the fight for equal rights*. https://www.aclu.org/news/womens-rights/pauli-murrays-indelible-mark-on-the-fight-for-equal-rights

Murray, P., & Eastwood, M. O. (1965). Jane Crow and the law: Sex discrimination and Title VII. *George Washington Law Review, 34*(2), 232-256.

Pauli Murray Center for History and Social Justice. (n.d.). *Who is Pauli Murray?* https://www.paulimurraycenter.com/who-is-pauli`,
    },
    {
      slug: "quiz-matilda-effect",
      title: "12 · Knowledge check: the Matilda effect",
      section: "Section 3 · The Matilda effect",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "Who named the Matilda effect, and in what year?",
            options: ["Margaret W. Rossiter, in 1993", "Robert K. Merton, in 1988, in the follow-up to his original Matthew effect paper", "Matilda Joslyn Gage, in 1883, in her essay for the North American Review", "Harriet Zuckerman, in 1977, in her study of the American Nobel laureates"],
            correctIndex: 0,
            explanation: "In Social Studies of Science 23(2), 325-341, a quarter century after Merton named the Matthew effect.",
            sourceLessonSlug: "rossiter-and-the-matilda-effect",
          },
          {
            prompt: "The Matilda effect names which pattern?",
            options: ["Women's contributions attributed to male colleagues", "The tendency of prize committees to award scholarship later in a woman's career than a man's", "The exclusion of women from the disciplinary societies that give out scientific awards", "The under-citation of papers on which a woman appears as the corresponding author"],
            correctIndex: 0,
            explanation: "Systematic under-recognition of women in science, their contributions denied, and their work repeatedly attributed to male colleagues.",
            sourceLessonSlug: "rossiter-and-the-matilda-effect",
          },
          {
            prompt: "Rossiter opened her paper by quoting:",
            options: ["The same Gospel line Merton had used", "Gage's 1883 essay on women as inventors, which supplies the name of the effect", "The Nobel Foundation statutes limiting a prize to no more than three recipients", "A passage from Trotula of Salerno's twelfth century medical writings"],
            correctIndex: 0,
            explanation: "So a reader would see the Matilda effect as the Matthew effect with something added, rather than as a rival account.",
            sourceLessonSlug: "rossiter-and-the-matilda-effect",
          },
          {
            prompt: "Matilda Joslyn Gage was:",
            options: ["An American suffragist and abolitionist", "A nineteenth century physician who published the first survey of women in medicine", "A patent examiner who compiled the first official count of American women inventors", "A historian of science whose archival work Rossiter built directly upon a century later"],
            correctIndex: 0,
            explanation: "She lived from 1826 to 1898, and wrote the essay Woman as an Inventor, for which the effect is named.",
            sourceLessonSlug: "rossiter-and-the-matilda-effect",
          },
          {
            prompt: "Gage's essay Woman as an Inventor appeared in the North American Review in:",
            options: ["May 1883", "January 1870, in the same year it also circulated separately as a printed tract", "1898, the year of her death, as the last of her published essays on the subject", "1993, when it was reprinted alongside Rossiter's paper naming the effect for her"],
            correctIndex: 0,
            explanation: "It first circulated as a tract in 1870 and was published in the Review in 1883, in volume 136, issue 318, pages 478 to 489.",
            sourceLessonSlug: "rossiter-and-the-matilda-effect",
          },
          {
            prompt: "Gage's opening observation was that women were said to have no inventive genius, and that:",
            options: ["Even the census failed to count women among inventors", "No woman had ever been granted a patent by the United States Patent Office", "The scientific societies of her day admitted women only as honorary members", "Inventions by women were routinely filed under their husbands' names instead"],
            correctIndex: 0,
            explanation: "She then listed women who had in fact invented things, which is the same move Rossiter made a hundred and ten years later.",
            sourceLessonSlug: "rossiter-and-the-matilda-effect",
          },
          {
            prompt: "Why is naming the effect for Gage part of the argument?",
            options: ["She made the case and was forgotten for it", "She was the first woman to receive a scientific award from a disciplinary society", "She had coined the term herself, and Rossiter was restoring her original wording", "Her essay is the earliest surviving document to describe a specific case of misattribution"],
            correctIndex: 0,
            explanation: "The effect had already operated on the person the effect is named for, a hundred and ten years before it was named.",
            sourceLessonSlug: "rossiter-and-the-matilda-effect",
          },
          {
            prompt: "Which of these is one of the historical cases Rossiter worked with?",
            options: ["Trotula of Salerno", "Annie Turnbo Malone, whose business was overshadowed by a more famous competitor", "Harriet Zuckerman, whose interview data underlay Merton's 1968 paper on the Matthew effect", "Pauli Murray, whose 1944 seminar argument was used a decade later in the Brown litigation"],
            correctIndex: 0,
            explanation: "Along with Nettie Stevens, Lise Meitner, Marietta Blau, Rosalind Franklin and Jocelyn Bell Burnell.",
            sourceLessonSlug: "rossiter-and-the-matilda-effect",
          },
          {
            prompt: "What happened to Trotula of Salerno's works?",
            options: ["They were later attributed to male authors", "They were destroyed in the twelfth century and survive only in later paraphrase", "They were published anonymously and their authorship has never been established at all", "They were credited to her correctly until a nineteenth century editor questioned it"],
            correctIndex: 0,
            explanation: "A twelfth century physician, and the earliest of Rossiter's cases. The list spans eight centuries, which is part of the argument.",
            sourceLessonSlug: "rossiter-and-the-matilda-effect",
          },
          {
            prompt: "Nettie Stevens appears in Rossiter's cases for work on:",
            options: ["Chromosomal sex determination", "Nuclear fission, for which a male colleague received the prize she was denied", "Photographic methods for detecting particles in nuclear physics experiments", "The structure of DNA, where her contribution was reduced to an acknowledgement"],
            correctIndex: 0,
            explanation: "Lise Meitner is the fission case, Marietta Blau the photographic methods case, and Rosalind Franklin the DNA case.",
            sourceLessonSlug: "rossiter-and-the-matilda-effect",
          },
          {
            prompt: "The span of Rossiter's cases matters because:",
            options: ["A pattern lasting eight centuries is not bad luck", "Older cases are better documented, so the earliest ones carry the most evidentiary weight", "It shows the effect weakened over time as scientific institutions became more formal", "It allows a direct comparison between the medieval and modern reward systems of science"],
            correctIndex: 0,
            explanation: "Durability across eight centuries is what distinguishes a mechanism from a run of individual misfortunes.",
            sourceLessonSlug: "rossiter-and-the-matilda-effect",
          },
          {
            prompt: "This course reads the difference between Matthew and Matilda as:",
            options: ["A destination", "A difference of degree, with Matilda being a stronger version of the same effect", "A difference of discipline, with Matthew in the sciences and Matilda in the humanities", "A difference of period, with Matthew describing the modern era and Matilda the premodern"],
            correctIndex: 0,
            explanation: "Matthew says credit runs uphill toward eminence. Matilda adds that it arrives somewhere specific, at a male colleague.",
            sourceLessonSlug: "rossiter-and-the-matilda-effect",
          },
          {
            prompt: "Why does the destination make the Matilda claim more checkable?",
            options: ["It predicts where to look", "Because a destination can be verified from a single document rather than a whole archive", "Because it converts a historical claim into a statistical one that can be tested on data", "Because male colleagues are more likely than institutions to have left surviving papers"],
            correctIndex: 0,
            explanation: "If the mechanism is real the credit is not floating loose in the literature. It is sitting on a name, and you can go and read the name.",
            sourceLessonSlug: "rossiter-and-the-matilda-effect",
          },
          {
            prompt: "A junior woman working with a senior man is exposed to:",
            options: ["Both effects at once", "Only the Matilda effect, because the gender routing rule takes precedence over eminence", "Only the Matthew effect, because seniority is the stronger of the two mechanisms", "Neither, because a formal collaboration agreement settles credit before the work begins"],
            correctIndex: 0,
            explanation: "Matthew because he is eminent, Matilda because he is the male colleague. Keeping them separate is what makes either testable in that case.",
            sourceLessonSlug: "rossiter-and-the-matilda-effect",
          },
          {
            prompt: "Merging the two effects into one would make a case:",
            options: ["Overdetermined and unfalsifiable", "Easier to teach, at the cost of some historical precision about the mechanism involved", "Legally stronger, because it removes the need to establish which mechanism operated", "Statistically cleaner, because the combined effect would have a larger measurable size"],
            correctIndex: 0,
            explanation: "Explained by so many mechanisms at once that no evidence could distinguish among them, which is the opposite of what lesson 2 requires.",
            sourceLessonSlug: "rossiter-and-the-matilda-effect",
          },
          {
            prompt: "Rossiter's evidence was of what kind?",
            options: ["Historical cases", "A statistical analysis of prize records held by American disciplinary societies", "Interviews with women scientists conducted across several disciplines in the 1990s", "An experiment in which reviewers rated identical papers under different author names"],
            correctIndex: 0,
            explanation: "The counting came nineteen years later, from Lincoln and colleagues, and used a different design entirely.",
            sourceLessonSlug: "rossiter-and-the-matilda-effect",
          },
          {
            prompt: "Lincoln and colleagues counted awards from how many societies?",
            options: ["Thirteen", "Six, matching the number of funders in the later replication of the Matthew effect", "Fifty one, one for each state plus the District of Columbia", "All of them, which is what makes the study a census rather than a sample"],
            correctIndex: 0,
            explanation: "Thirteen disciplinary societies in science, technology, engineering and medicine, over the years 1991 to 2010.",
            sourceLessonSlug: "matilda-measured",
          },
          {
            prompt: "The Lincoln study sorted awards by:",
            options: ["What the award was for", "The seniority of the recipient at the time the award was made", "Whether the society was national or regional in its membership and reach", "The size of the monetary prize attached to each award in the sample"],
            correctIndex: 0,
            explanation: "Scholarship, service, or teaching. That sorting is what turns a bare share into an informative comparison.",
            sourceLessonSlug: "matilda-measured",
          },
          {
            prompt: "From 2000 to 2010, women won what share of the research based awards?",
            options: ["10 percent", "32.2 percent, the same figure recorded for the service awards in that decade", "37.1 percent, the highest of the three award categories the study measured", "78.5 percent, reflecting the growth in awards going to women across the period"],
            correctIndex: 0,
            explanation: "Against 32.2 percent of service awards and 37.1 percent of teaching awards from the same societies in the same years.",
            sourceLessonSlug: "matilda-measured",
          },
          {
            prompt: "The service and teaching award shares for women in that decade were:",
            options: ["32.2 and 37.1 percent", "10 and 12 percent, roughly matching the research award share the study reported", "50 and 55 percent, which is why the authors called those categories effectively equal", "Not reported, because too few societies distinguished those categories to allow a count"],
            correctIndex: 0,
            explanation: "Which is why the authors say women are honored roughly twice as often for service as for scholarship.",
            sourceLessonSlug: "matilda-measured",
          },
          {
            prompt: "Across the full twenty years, awards going to women:",
            options: ["Rose by 78.5 percent", "Fell steadily, from about a third of all awards to just under a tenth of them", "Stayed flat, which is what prompted the societies to commission the study", "Doubled in the first decade and then reverted to their 1991 level by 2010"],
            correctIndex: 0,
            explanation: "And the gap in scholarly recognition nevertheless worsened in the second decade rather than improving, which is the finding that matters.",
            sourceLessonSlug: "matilda-measured",
          },
          {
            prompt: "The authors connect the service-versus-scholarship gap to:",
            options: ["A tacit assumption that a rigorous scholar is a man", "The heavier service loads women carry, which leave less time for the research that wins prizes", "The nomination rules of the societies, which allow self-nomination only for service awards", "A shortage of senior women eligible for the research awards during the years studied"],
            correctIndex: 0,
            explanation: "That is the authors' own reading of why women are honored about twice as often for service as for scholarship.",
            sourceLessonSlug: "matilda-measured",
          },
          {
            prompt: "The obvious objection to a bare figure like \"women won 10 percent of research awards\" is:",
            options: ["That may be the share of eligible senior women", "That awards are given by committees whose composition the study did not record", "That ten percent of a small number of awards is too few cases to analyze", "That the figure combines societies with very different award traditions"],
            correctIndex: 0,
            explanation: "Which is exactly why the comparison across award categories, not the headline figure, is what carries the argument.",
            sourceLessonSlug: "matilda-measured",
          },
          {
            prompt: "Why does the across-category comparison answer the eligible-pool objection?",
            options: ["The pool is the same for all three categories", "Because the study restricted itself to societies that publish their membership demographics", "Because service and teaching awards are given to more junior people than research awards", "Because the authors adjusted every share for the number of women holding senior posts"],
            correctIndex: 0,
            explanation: "Same societies, same years, same membership. Whatever the eligible pool was, it did not differ between the scholarship and service categories.",
            sourceLessonSlug: "matilda-measured",
          },
          {
            prompt: "Which of these does the Lincoln study NOT establish?",
            options: ["That any particular award was decided unfairly", "That women's share of research awards was about a tenth from 2000 to 2010", "That women's share of service awards was about a third in the same decade", "That the total number of awards going to women rose across the twenty years"],
            correctIndex: 0,
            explanation: "It is observational and reports shares, so it can establish a pattern across societies and say nothing at all about an individual case.",
            sourceLessonSlug: "matilda-measured",
          },
          {
            prompt: "An observational study differs from an experiment in that:",
            options: ["Nobody assigned the treatment", "It uses records rather than interviews as its primary source of evidence", "It reports proportions rather than absolute counts of the cases it examines", "It covers a longer period, which is why its conclusions carry more historical weight"],
            correctIndex: 0,
            explanation: "Nobody randomized who got nominated, so the study can establish a pattern but not an experimental cause.",
            sourceLessonSlug: "matilda-measured",
          },
          {
            prompt: "Which sentence does this lesson say the study does NOT support?",
            options: ["Women are 90 percent less likely to win a science prize", "Women took about a tenth of the scholarship awards from 2000 to 2010", "Women took about a third of the service awards from the same thirteen societies", "The number of awards going to women rose 78.5 percent across the two decades"],
            correctIndex: 0,
            explanation: "A share of awards is not a probability per person. The looser sentence loses an argument, and takes the true material beside it down too.",
            sourceLessonSlug: "matilda-measured",
          },
          {
            prompt: "Overclaiming, as this lesson uses the term, means:",
            options: ["Restating a finding more strongly than its design supports", "Citing a study for a conclusion its authors explicitly declined to draw themselves", "Reporting a result before it has completed peer review and become a version of record", "Generalizing from one discipline to another without checking whether the data transfer"],
            correctIndex: 0,
            explanation: "And the cost is not just the overclaim: losing it in public discredits the accurate material standing beside it.",
            sourceLessonSlug: "matilda-measured",
          },
          {
            prompt: "The Lincoln study appeared in which journal?",
            options: ["Social Studies of Science", "Science, which had published Merton's original Matthew effect paper in 1968", "The Proceedings of the National Academy of Sciences, alongside the funding study", "Isis, where Merton acknowledged Zuckerman's contribution to the earlier work"],
            correctIndex: 0,
            explanation: "Social Studies of Science 42(2), 307-320, the same journal that had published Rossiter's paper naming the effect in 1993.",
            sourceLessonSlug: "matilda-measured",
          },
          {
            prompt: "An internal comparison, in the design sense used here, is:",
            options: ["Two categories from the same source set against each other", "A comparison between the study's own data and an external national dataset", "A check of the same measurement taken twice by two independent coders", "A test of whether a result holds within each society before pooling them together"],
            correctIndex: 0,
            explanation: "Shared confounders cancel, which is why the scholarship-versus-service gap is stronger evidence than either share on its own.",
            sourceLessonSlug: "matilda-measured",
          },
          {
            prompt: "Pauli Murray was born and died in which years?",
            options: ["1910 and 1985", "1826 and 1898, the same span as the suffragist the Matilda effect is named for", "1900 and 1971, the year Ginsburg filed the Reed v. Reed brief", "1920 and 1977, the year of the ordination that closed a long career"],
            correctIndex: 0,
            explanation: "Born in Baltimore on 20 November 1910, died in Pittsburgh on 1 July 1985.",
            sourceLessonSlug: "pauli-murray-the-argument-before-the-case",
          },
          {
            prompt: "The identity claim this course makes about Murray rests on:",
            options: ["Murray's own papers", "A biography published after Murray's death by a historian with archival access", "The consensus of scholars who have worked on Murray's life since the 1990s", "Contemporary press coverage of Murray's ordination as an Episcopal priest"],
            correctIndex: 0,
            explanation: "Through the 1930s Murray repeatedly asked physicians for hormone therapy and exploratory surgery and was refused. That self-documented record is what rule one requires.",
            sourceLessonSlug: "pauli-murray-the-argument-before-the-case",
          },
          {
            prompt: "Jane Crow is Murray's term for:",
            options: ["The position of a Black person perceived as a woman", "The set of state laws that segregated public accommodations by race in the South", "The exclusion of women from the legal profession before the Second World War", "The practice of listing a woman's contribution in an acknowledgement rather than a byline"],
            correctIndex: 0,
            explanation: "Shut out of one movement by race and out of the other by sex, and therefore invisible to both. Murray coined it at Howard Law School.",
            sourceLessonSlug: "pauli-murray-the-argument-before-the-case",
          },
          {
            prompt: "Why does this lesson call naming a mechanism a credit act?",
            options: ["It gives later people something to cite", "Because the person who names a thing is normally treated as its discoverer as well", "Because a named mechanism can be registered and protected the way an invention can", "Because naming establishes priority in a dispute over who noticed the pattern first"],
            correctIndex: 0,
            explanation: "A contribution becomes attributable at all once it has a name, which is why Jane Crow matters as much as the argument it describes.",
            sourceLessonSlug: "pauli-murray-the-argument-before-the-case",
          },
          {
            prompt: "Murray's 1944 seminar argument was that the litigation should:",
            options: ["Attack separate itself", "Prove in each case that the separate facilities provided were materially unequal", "Concentrate on graduate and professional schools before reaching primary education", "Rely on the Fifteenth Amendment rather than on the Thirteenth and Fourteenth"],
            correctIndex: 0,
            explanation: "On Thirteenth and Fourteenth Amendment grounds, rather than continuing to prove that particular separate facilities were unequal.",
            sourceLessonSlug: "pauli-murray-the-argument-before-the-case",
          },
          {
            prompt: "Who kept Murray's 1944 paper and returned to it a decade later?",
            options: ["Spottswood Robinson", "Thurgood Marshall, who was directing the NAACP legal department at the time", "Charles Hamilton Houston, who had built the graduate-school litigation strategy", "Mary O. Eastwood, Murray's later co-author on the Jane Crow article"],
            correctIndex: 0,
            explanation: "The professor of the seminar. He referred to it while he and the NAACP were preparing Brown v. Board of Education.",
            sourceLessonSlug: "pauli-murray-the-argument-before-the-case",
          },
          {
            prompt: "What was States' Laws on Race and Color?",
            options: ["A 746-page catalogue of state segregation statutes", "A memoir of Murray's arrest and trial in Petersburg, Virginia in March 1940", "A law review article arguing that Fourteenth Amendment reasoning extended to sex", "A collection of NAACP litigation briefs assembled for use by cooperating attorneys"],
            correctIndex: 0,
            explanation: "Murray compiled and edited it for the Woman's Division of Christian Service of the Methodist Church.",
            sourceLessonSlug: "pauli-murray-the-argument-before-the-case",
          },
          {
            prompt: "Thurgood Marshall described States' Laws on Race and Color as:",
            options: ["The bible of civil rights litigators", "The single most complete survey of southern practice compiled in the twentieth century", "A useful reference which the association's own research staff had largely duplicated", "An argument the NAACP was not yet prepared to make in front of the Supreme Court"],
            correctIndex: 0,
            explanation: "Which is a striking description of a reference work whose compiler was not on the litigation team that used it.",
            sourceLessonSlug: "pauli-murray-the-argument-before-the-case",
          },
          {
            prompt: "How does this course handle the 1950 versus 1951 date on that book?",
            options: ["It reports the disagreement", "It follows the imprint date, since a title page outranks a later catalog correction", "It omits the date entirely, because a contested figure should not appear in a lesson", "It uses 1950 in the text and 1951 in the reference list, following APA convention"],
            correctIndex: 0,
            explanation: "The imprint reads 1950, library catalogs record it as 1950 corrected to 1951, and the Pauli Murray Center dates it 1951.",
            sourceLessonSlug: "pauli-murray-the-argument-before-the-case",
          },
          {
            prompt: "Murray's 1965 article with Mary O. Eastwood argued that:",
            options: ["Fourteenth Amendment reasoning built for race applied to sex", "Title VII's sex provision had been added as a joke and should be repealed by Congress", "The Equal Rights Amendment was unnecessary given existing constitutional doctrine", "Employment discrimination should be litigated in state rather than federal courts"],
            correctIndex: 0,
            explanation: "Jane Crow and the Law: Sex Discrimination and Title VII, in the George Washington Law Review, December 1965.",
            sourceLessonSlug: "pauli-murray-the-argument-before-the-case",
          },
          {
            prompt: "Murray co-founded which organization, and in what year?",
            options: ["The National Organization for Women, in 1966", "The American Civil Liberties Union, whose board Murray had joined the year before", "The NAACP Legal Defense and Educational Fund, in the year States' Laws appeared", "The Women's Rights Project, which Ruth Bader Ginsburg later directed at the ACLU"],
            correctIndex: 0,
            explanation: "Murray joined the ACLU board in 1965, a year before co-founding NOW. The ACLU existed long before either.",
            sourceLessonSlug: "pauli-murray-the-argument-before-the-case",
          },
          {
            prompt: "In 1971 Ruth Bader Ginsburg put Murray's and Kenyon's names:",
            options: ["On the cover page of the Reed v. Reed brief", "In a footnote of the brief acknowledging the sources of its constitutional argument", "On the ACLU Women's Rights Project's founding documents as its first two directors", "In the bibliography she supplied to the Court alongside the brief she had written"],
            correctIndex: 0,
            explanation: "Although neither had written it, because their work was the ground the argument stood on.",
            sourceLessonSlug: "pauli-murray-the-argument-before-the-case",
          },
          {
            prompt: "Why is the Reed v. Reed cover page called the mechanism running backwards?",
            options: ["Credit was assigned deliberately by someone not required to", "Because the brief lost, so the credit attached to an unsuccessful argument", "Because the two named people later disclaimed any involvement in the case", "Because the Court itself ordered the additional names added to the filing"],
            correctIndex: 0,
            explanation: "And it is recorded on the document itself, where it is still legible, which most corrections are not.",
            sourceLessonSlug: "pauli-murray-the-argument-before-the-case",
          },
          {
            prompt: "In 1977 Murray became:",
            options: ["An ordained Episcopal priest", "The first Black woman appointed to a federal appellate court in the United States", "A tenured professor of law at Howard University, where the 1944 seminar had been held", "President of the National Organization for Women, eleven years after co-founding it"],
            correctIndex: 0,
            explanation: "The first Black person perceived as a woman to be ordained an Episcopal priest.",
            sourceLessonSlug: "pauli-murray-the-argument-before-the-case",
          },
          {
            prompt: "Which detail about Murray does this course explicitly refuse to assert?",
            options: ["A ten dollar bet with Robinson over Plessy", "That Murray graduated at the top of the 1944 Howard Law class", "That Murray coined the term Jane Crow while at Howard Law School", "That Ginsburg named Murray on the Reed v. Reed brief in 1971"],
            correctIndex: 0,
            explanation: "It traces to Murray's own later recollection rather than a contemporaneous record, so it is flagged and filed as an open question.",
            sourceLessonSlug: "pauli-murray-the-argument-before-the-case",
          },
          {
            prompt: "Which pronouns does this lesson use for Murray?",
            options: ["S/he, their, and they/them", "She and her, following the usage of Murray's own published memoir", "He and him, following the requests Murray made of physicians in the 1930s", "None, avoiding the question by repeating the surname in every sentence"],
            correctIndex: 0,
            explanation: "Following the practice of the Pauli Murray Center, which bases it on Murray's own papers, and saying so rather than choosing silently.",
            sourceLessonSlug: "pauli-murray-the-argument-before-the-case",
          },
          {
            prompt: "Murray's Jane Crow article was published in which law review?",
            options: ["The George Washington Law Review", "The Harvard Law Review, in the same term the Civil Rights Act took effect", "The Yale Law Journal, where Murray had completed doctoral work in law", "The Howard Law Journal, published by the school where the term was coined"],
            correctIndex: 0,
            explanation: "Volume 34, December 1965, pages 232 to 256, co-authored with Mary O. Eastwood.",
            sourceLessonSlug: "pauli-murray-the-argument-before-the-case",
          },
          {
            prompt: "Murray joined the board of which organization in 1965?",
            options: ["The American Civil Liberties Union", "The National Organization for Women, which Murray would co-found the following year", "The NAACP, which had used the 1944 seminar paper in preparing the Brown litigation", "The Methodist Church's Woman's Division, which had commissioned States' Laws"],
            correctIndex: 0,
            explanation: "Working there with Dorothy Kenyon on gender inequality, which is the connection Ginsburg recorded on the Reed brief six years later.",
            sourceLessonSlug: "pauli-murray-the-argument-before-the-case",
          },
          {
            prompt: "The Murray case belongs in the Matilda section because:",
            options: ["The argument was used and the author was not named", "Murray was the only woman on the NAACP litigation team that argued Brown", "Murray's work was attributed to Spottswood Robinson in the Supreme Court record", "Murray published under initials, which concealed the author's sex from readers"],
            correctIndex: 0,
            explanation: "The seminar paper and the reference work were both used by the litigation that followed, and neither put Murray's name where the credit landed.",
            sourceLessonSlug: "pauli-murray-the-argument-before-the-case",
          },
          {
            prompt: "The Reed v. Reed cover page is flagged for Section 6 because:",
            options: ["Most corrections are neither that cheap nor that fast", "It was later challenged and the names were removed from the published record", "The Supreme Court cited the added names in its opinion, which is unusual", "It is the only correction in this course made while all parties were still living"],
            correctIndex: 0,
            explanation: "Adding two names to a cover page cost nothing and took no time. Section 6 measures how long the other corrections in this course took.",
            sourceLessonSlug: "pauli-murray-the-argument-before-the-case",
          },
          {
            prompt: "Rossiter's paper and the Lincoln study appeared in the same journal, which shows:",
            options: ["The naming and the counting happened in one venue", "That the two teams collaborated on a single long-running research program", "That the journal commissioned both papers as parts of a planned special issue", "That the counting study was intended as a rebuttal to the earlier naming paper"],
            correctIndex: 0,
            explanation: "Social Studies of Science published Rossiter in 1993 and Lincoln and colleagues in 2012, nineteen years apart.",
            sourceLessonSlug: "matilda-measured",
          },
          {
            prompt: "Between 1991 and 2010, what happened to women's share of SCHOLARLY recognition?",
            options: ["The gap worsened in the second decade", "It converged steadily with men's share, reaching near parity by the end of the period", "It stayed exactly flat, which the authors describe as the study's central finding", "It could not be tracked, because societies changed their award categories midway"],
            correctIndex: 0,
            explanation: "Even though the total number of awards going to women rose by 78.5 percent across the same twenty years.",
            sourceLessonSlug: "matilda-measured",
          },
          {
            prompt: "The eligible pool objection matters most to which kind of claim?",
            options: ["A bare share of a total", "A comparison between two categories drawn from the same population", "A historical case study of one misattributed contribution", "An experimental result where participants were randomly assigned"],
            correctIndex: 0,
            explanation: "Which is why this lesson leans on the across-category comparison rather than on the ten percent figure by itself.",
            sourceLessonSlug: "matilda-measured",
          },
          {
            prompt: "Rossiter is described in this lesson as:",
            options: ["A historian of science", "A sociologist at Columbia University, working in Merton's own department", "A physicist who turned to history after her own work was misattributed", "A statistician who developed the counting method the 2012 study later used"],
            correctIndex: 0,
            explanation: "Which is why her evidence is historical cases rather than the prize counts a later team assembled.",
            sourceLessonSlug: "rossiter-and-the-matilda-effect",
          },
          {
            prompt: "Which of Rossiter's cases involves nuclear fission?",
            options: ["Lise Meitner", "Marietta Blau, whose photographic methods made the particle tracks visible", "Jocelyn Bell Burnell, whose supervisor received the prize for the discovery", "Nettie Stevens, whose work on chromosomes was credited to a male colleague"],
            correctIndex: 0,
            explanation: "Blau is the photographic methods case, Bell Burnell the pulsars case, and Stevens the chromosomal sex determination case.",
            sourceLessonSlug: "rossiter-and-the-matilda-effect",
          },
          {
            prompt: "Which of Rossiter's cases involves pulsars?",
            options: ["Jocelyn Bell Burnell", "Rosalind Franklin, whose photographic work underlay a structural discovery", "Trotula of Salerno, whose writings were reassigned to male authors", "Lise Meitner, whose theoretical account explained an experimental result"],
            correctIndex: 0,
            explanation: "Franklin is the DNA case, Trotula the twelfth century reattribution case, and Meitner the fission case.",
            sourceLessonSlug: "rossiter-and-the-matilda-effect",
          },
          {
            prompt: "Murray was arrested in Virginia in 1940 for:",
            options: ["Refusing to move on a segregated bus", "Attempting to enroll at a state university that did not admit Black students", "Picketing a federal building in violation of a local ordinance on assembly", "Compiling and distributing a list of the state's segregation statutes"],
            correctIndex: 0,
            explanation: "In March 1940, fifteen years before the Montgomery arrests that Section 6 takes up.",
            sourceLessonSlug: "pauli-murray-the-argument-before-the-case",
          },
          {
            prompt: "Murray's rank in the 1944 Howard Law class was:",
            options: ["Top of the class", "Second, behind the classmate who later joined the NAACP litigation team", "Unrecorded, because the school did not publish class rankings during the war years", "Middle of the class, which Murray later cited as a reason the paper was dismissed"],
            correctIndex: 0,
            explanation: "Which makes the reception of the seminar argument, and what happened to it afterward, harder to explain by anything about the student.",
            sourceLessonSlug: "pauli-murray-the-argument-before-the-case",
          },
          {
            prompt: "Gage's essay first circulated in which form and year?",
            options: ["A tract, in 1870", "A lecture delivered to a suffrage convention, in 1898, the year of her death", "A chapter in a multi-volume history of woman suffrage, published in the 1880s", "A letter to the United States Patent Office, later reprinted by a magazine"],
            correctIndex: 0,
            explanation: "It was published in the North American Review thirteen years later, in May 1883.",
            sourceLessonSlug: "rossiter-and-the-matilda-effect",
          },
          {
            prompt: "What makes the Matilda claim testable in a specific case?",
            options: ["You can go and read the name it landed on", "The historical record for women scientists is unusually complete before 1900", "Disciplinary societies publish the nomination papers behind every award they give", "The effect only operates in collaborations, which are documented in the author line"],
            correctIndex: 0,
            explanation: "The destination is the testable part: if the credit did not arrive at a male colleague, the Matilda reading of that case fails.",
            sourceLessonSlug: "rossiter-and-the-matilda-effect",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4 — The author line and the patent: two formats, two failures
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "who-counts-as-an-author",
      title: "13 · Who counts as an author, and who gets thanked",
      section: "Section 4 · The author line and the patent",
      body: `The author line at the top of a paper looks like a description of who did the work. It is not. It is the output of a rule, and the rule is written down.

**The rule most of medicine and much of science uses.** The International Committee of Medical Journal Editors sets four criteria, and a contributor must meet **all four** to be an author. Substantial contributions to the conception or design of the work, or to the acquisition, analysis or interpretation of data. Drafting the work or reviewing it critically for important intellectual content. Final approval of the version to be published. And agreement to be accountable for all aspects of the work (International Committee of Medical Journal Editors, n.d.).

**And the rule says where everyone else goes.** A contributor who fails any one of the four should be acknowledged rather than listed as an author. ICMJE names some contributions that do not by themselves qualify: acquiring the funding, general supervision of a research group, general administrative support, and writing assistance, technical editing, language editing and proofreading.

**Read criterion two again, because it is the trapdoor.** Criteria one, three and four are about what you did and what you will stand behind. Criterion two is about being *asked into the writing*. Someone who is not invited to draft or to review the draft cannot satisfy it, no matter how much of the underlying work they did. So a rule that looks like a measure of contribution contains one clause that measures inclusion, and inclusion is exactly the thing a hierarchy controls.

**The acknowledgement line is a different currency, not a smaller share of the same one.** An acknowledgement is not indexed as authorship, so it does not accumulate. Twenty years of them add up to nothing a hiring committee counts. That is the four-currencies point from lesson 1 in one paragraph: being named and being counted are separate.

**A partial fix exists.** CRediT is a community-owned taxonomy of fourteen contributor roles, from conceptualization and data curation through software, supervision and writing, approved as an ANSI/NISO standard, Z39.104-2022 (NISO, 2022). It lets a paper say *what each person did*, which is a real improvement. It does not decide who counts as an author, so it solves the description problem and leaves the counting problem where it was.

**Why this matters more every decade.** Wuchty, Jones and Uzzi (2007) examined 19.9 million papers across five decades and 2.1 million patents, and found that teams increasingly dominate solo authors across science and engineering, the social sciences, the arts and humanities, and patents, with team-produced work also more frequently cited. As teams grow, more people work on each output, and the number sitting below the authorship bar grows with them. That last step is a prediction from the rule rather than a measured finding, and it is worth saying which is which.

:::reveal How many ICMJE authorship criteria are there, and how many must a contributor meet? ||| Four, and all four. Substantial contribution to conception, design, acquisition, analysis or interpretation; drafting or critically reviewing the work; final approval; and agreement to be accountable for all aspects of it.

:::reveal Why does this lesson call criterion two the trapdoor? ||| Because drafting or critically reviewing the work requires being asked into the writing. Someone excluded from that step cannot meet it however much of the underlying work they did, so a rule that looks like a measure of contribution contains a clause that measures inclusion.

:::reveal What does CRediT fix, and what does it leave alone? ||| Its fourteen roles let a paper record what each person did, which fixes the description problem. It does not decide who qualifies as an author, so the counting problem is untouched.

## Vocabulary
- **ICMJE criteria**: the four conditions, all of which a contributor must meet to be listed as an author rather than acknowledged.
- **Acknowledgement**: the line for contributors who fail any criterion, which names a person without accumulating the way a byline does.
- **CRediT**: a community-owned taxonomy of fourteen contributor roles, ANSI/NISO Z39.104-2022, which describes contribution without deciding authorship.
- **Trapdoor clause**: a criterion that measures inclusion rather than contribution, and which a hierarchy can therefore control.

## Sources
International Committee of Medical Journal Editors. (n.d.). *Defining the role of authors and contributors*. https://www.icmje.org/recommendations/browse/roles-and-responsibilities/defining-the-role-of-authors-and-contributors.html

NISO. (2022). *CRediT: Contributor Roles Taxonomy* (ANSI/NISO Z39.104-2022). https://credit.niso.org/

Wuchty, S., Jones, B. F., & Uzzi, B. (2007). The increasing dominance of teams in production of knowledge. *Science, 316*(5827), 1036-1039. https://doi.org/10.1126/science.1136099`,
    },
    {
      slug: "vivien-thomas-and-the-author-line",
      title: "14 · Vivien Thomas, and a rule that decided before it weighed",
      section: "Section 4 · The author line and the patent",
      body: `Vivien Thomas was born on 29 August 1910 and died on 26 November 1985. In 1930 he took a job in Alfred Blalock's laboratory at Vanderbilt. His job title was assistant janitor, and although he was soon doing work at a postdoctoral level he continued to be classified and paid as a janitor and maintenance worker (Vanderbilt University, n.d.). In 1941 Blalock was recruited to Johns Hopkins and Thomas went with him.

**What he actually did.** Thomas developed the systemic-to-pulmonary shunt in the laboratory, working out the operation in dogs and adapting the instruments for use on an infant. On 29 November 1944, when the operation was first performed on a fifteen-month-old patient, Eileen Saxon, Blalock had Thomas stand close behind him at the operating table, against all convention, so that he could give quiet advice during the procedure (Treasure, 2017).

**What the record said.** The landmark paper, "The surgical treatment of malformations of the heart in which there is pulmonary stenosis or pulmonary atresia," appeared in *JAMA* on 19 May 1945 under two names, Alfred Blalock and Helen B. Taussig. Thomas is not among the authors.

**Run the ICMJE test on it, knowing the criteria did not exist yet.** This is an exercise in mechanism, not a verdict on 1945. Criterion one, substantial contribution to conception, design or the acquisition and analysis of data: plainly satisfied. Criteria three and four, approval and accountability: withheld from him by the fact that nobody offered. Criterion two, drafting the work or reviewing it critically: he was not asked, and a technician in 1945 could not have asked to be. That is the trapdoor from the previous lesson, and it shows the shape of the thing. The convention decided the outcome *before* anyone weighed the contribution, because the one criterion Thomas could not reach was the one his job title controlled.

**The corrections came, and they came slowly.** In 1971 his colleagues arranged a ceremony and presented his portrait to the institution. In 1976 Johns Hopkins awarded him an honorary Doctor of Laws, not a medical doctorate, and appointed him to the faculty as Instructor of Surgery. His autobiography was published in 1985, the year he died, and reissued in 1998 as *Partners of the Heart*. In 2022 Kathleen Blake and Clyde W. Yancy argued in *JAMA Surgery* that the procedure should be renamed the Blalock-Thomas-Taussig shunt (Blake & Yancy, 2022). On 26 February 2024 five Ontario children's hospitals announced they had adopted that name.

**Count the years, because Section 6 will.** Twenty seven from the operation to the portrait. Thirty two to the faculty appointment. Seventy eight from the paper to the *JAMA Surgery* argument for the rename. None of that restored an author line, because an author line from 1945 is not a thing anyone can reopen.

:::reveal What was Thomas's job classification while doing postdoctoral-level surgical research? ||| He was hired at Vanderbilt in 1930 with the title assistant janitor, and continued to be classified and paid as a janitor and maintenance worker while doing the research.

:::reveal Which ICMJE criterion could Thomas not have satisfied in 1945, and why does that decide the case? ||| Drafting the work or reviewing it critically for important intellectual content, because he was not asked into the writing and his position made asking impossible. It is the one criterion his job title controlled, so the convention decided the outcome before anyone weighed his contribution.

:::reveal List the corrections Thomas received and their years. ||| A portrait presented in 1971. An honorary Doctor of Laws and appointment as Instructor of Surgery in 1976. His autobiography in 1985, reissued in 1998. A published argument for renaming the procedure in 2022, and five Ontario children's hospitals adopting Blalock-Thomas-Taussig in February 2024.

## Vocabulary
- **Systemic-to-pulmonary shunt**: the surgical connection Thomas worked out in the laboratory, which raised oxygenation in children with certain heart malformations.
- **Honorary Doctor of Laws**: the degree Hopkins awarded Thomas in 1976, which is not a medical doctorate, and the distinction matters to what the correction did and did not do.
- **Eponym change**: renaming a procedure to add a contributor, one of the few instruments available when the original document cannot be reopened.
- **Retrospective rule test**: applying a modern criterion to an old case to see which clause decided it, without pretending the criterion applied at the time.

## Sources
Blake, K., & Yancy, C. W. (2022). Change the name of the Blalock-Taussig shunt to Blalock-Thomas-Taussig shunt. *JAMA Surgery, 157*(4), 287-288. https://doi.org/10.1001/jamasurg.2021.5611

Treasure, T. (2017). Turning blue babies pink: Alfred Blalock's shunt for Fallot's tetralogy. *Journal of the Royal Society of Medicine, 110*(9), 376-379. https://pmc.ncbi.nlm.nih.gov/articles/PMC5962041/

Vanderbilt University. (n.d.). *Opening doors: Vivien Thomas*. Eskind Biomedical Library. https://www.library.vanderbilt.edu/specialcollections/history-of-medicine/exhibits/opening_doors/vivien_thomas.php`,
    },
    {
      slug: "inventorship-is-not-ownership",
      title: "15 · The patent does the opposite, and that is the lesson",
      section: "Section 4 · The author line and the patent",
      body: `A patent and a paper are both documents that attach names to work. They fail in opposite directions, and setting them side by side is the fastest way to see that credit rules are choices rather than nature.

**United States patent law splits two questions that the author line fuses.** *Inventorship* is a question of fact about who conceived the claimed invention, and the statute requires that an application name the inventor, with each inventor or joint inventor executing an oath or declaration (35 U.S.C. § 115). *Ownership* is a question of property: a patent has the attributes of personal property and is assignable (35 U.S.C. § 261). Two questions, two answers, both recorded.

**The Supreme Court has been explicit about the order.** In *Board of Trustees of the Leland Stanford Junior University v. Roche Molecular Systems*, 563 U.S. 776 (2011), the Court held that title in a patented invention vests first in the inventor, even where the research was federally funded under the Bayh-Dole Act, and that an obligation to assign is contractual and comes second.

**Now compare the two failure modes.** On a paper, a contributor who fails one criterion disappears from the top of the document and reappears, if at all, in a paragraph nobody counts. On a patent, the human inventors stay named on the document permanently, and what moves is the money. A company can own every commercial benefit of an invention while the inventor's name remains printed on the grant, findable a century later by anyone with the number.

**Which makes a patent an unusually good historical record and a poor public one.** The document keeps the name. The *product* does not. The failure in the patent system is not erasure from the record but erasure from the thing the public sees, where a brand carries the name instead of a person, and where the assignment that moved the property is invisible to a customer.

**This course stops here on purpose.** The assignment clause, what it required and when, who was legally permitted to hold a patent and in which years, the 1836 oath requirement, the 1858 opinion, and eleven verified patent numbers are the whole subject of the sibling course in this series, Who Gets the Credit. Taking a patent number and reading it yourself is taught there, step by step. What you need here is only the contrast: two formats, two rules, two different things that go missing.

**The transferable habit.** When you meet a credit dispute, ask which document was supposed to record the answer, then ask what that document's rule actually decides. A paper's rule decides who is *named*. A patent's rule decides who is named *and*, separately, who *owns*. Neither rule decides who did the work, and neither was ever designed to.

:::reveal What two questions does United States patent law keep separate, and where is each recorded? ||| Inventorship, a question of fact about who conceived the claimed invention, recorded by the requirement that the application name the inventor with an oath or declaration. And ownership, a question of property, which is assignable. Both are recorded, separately.

:::reveal What did Stanford v. Roche hold about where title first vests? ||| That title in a patented invention vests first in the inventor, even where the work was federally funded under Bayh-Dole, and that an obligation to assign is contractual and secondary.

:::reveal Contrast the failure mode of a paper with that of a patent. ||| On a paper the contributor vanishes from the document itself into an uncounted acknowledgement. On a patent the inventor stays named permanently and the money moves instead, so the erasure happens on the product and the brand rather than in the record.

## Vocabulary
- **Inventorship**: a factual question about who conceived the claimed invention, which the statute requires an application to name.
- **Assignment**: the transfer of a patent's ownership, possible because a patent has the attributes of personal property.
- **Bayh-Dole**: the 1980 federal statute on federally funded inventions, which Stanford v. Roche held does not displace the inventor's first title.
- **Erasure from the product**: the patent system's characteristic failure, where the record keeps the name but the brand the public sees does not.

## Sources
Board of Trustees of the Leland Stanford Junior University v. Roche Molecular Systems, Inc., 563 U.S. 776 (2011).

Patent Act, 35 U.S.C. § 115 (Inventor's oath or declaration). https://uscode.house.gov/view.xhtml?req=granuleid%3AUSC-prelim-title35-section115

Patent Act, 35 U.S.C. § 261 (Ownership; assignment).`,
    },
    {
      slug: "quiz-author-line-and-patent",
      title: "16 · Knowledge check: the author line and the patent",
      section: "Section 4 · The author line and the patent",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "The author line at the top of a paper is best described as:",
            options: ["The output of a written rule", "A description of everyone whose labor contributed to the published result", "A negotiated ranking, ordered by how much of the work each person performed", "A legal record of who holds the copyright in the text as it was submitted"],
            correctIndex: 0,
            explanation: "It looks like a description of who did the work and is not. The rule exists in writing and can be read.",
            sourceLessonSlug: "who-counts-as-an-author",
          },
          {
            prompt: "How many ICMJE authorship criteria are there?",
            options: ["Four", "Three, covering contribution, approval, and accountability for the published work", "Seven, one for each stage of a study from design through to post-publication review", "Fourteen, matching the number of contributor roles defined in the CRediT taxonomy"],
            correctIndex: 0,
            explanation: "Fourteen is CRediT, which is a different instrument and does not decide authorship at all.",
            sourceLessonSlug: "who-counts-as-an-author",
          },
          {
            prompt: "How many of the ICMJE criteria must a contributor meet to be listed as an author?",
            options: ["All of them", "At least two, provided one of them concerns the intellectual content of the work", "A majority, as judged by the corresponding author when the submission is assembled", "Whichever the journal specifies in its own instructions, which vary between titles"],
            correctIndex: 0,
            explanation: "All four. A contributor failing any one of them should be acknowledged rather than listed as an author.",
            sourceLessonSlug: "who-counts-as-an-author",
          },
          {
            prompt: "Which of these is one of the four ICMJE criteria?",
            options: ["Final approval of the version to be published", "Employment by an institution that has agreed to indemnify the work's authors", "Presence at the site where the data were collected during the study period", "Named receipt of the grant funding that paid for the research being reported"],
            correctIndex: 0,
            explanation: "The others are substantial contribution to conception, design, acquisition, analysis or interpretation; drafting or critical review; and agreement to be accountable.",
            sourceLessonSlug: "who-counts-as-an-author",
          },
          {
            prompt: "Which of these does ICMJE say does NOT by itself qualify someone for authorship?",
            options: ["Acquiring the funding", "Interpreting the data on which the paper's central claim depends", "Reviewing the manuscript critically for important intellectual content", "Designing the study that produced the results being reported"],
            correctIndex: 0,
            explanation: "Along with general supervision of a research group, general administrative support, and writing assistance, technical editing, language editing and proofreading.",
            sourceLessonSlug: "who-counts-as-an-author",
          },
          {
            prompt: "This lesson calls which ICMJE criterion the trapdoor?",
            options: ["Drafting or critically reviewing the work", "Agreement to be accountable for all aspects of the published work", "Substantial contribution to the acquisition and analysis of the data", "Final approval of the version that the journal ultimately publishes"],
            correctIndex: 0,
            explanation: "It requires being asked into the writing, which is a measure of inclusion rather than of contribution, and inclusion is what a hierarchy controls.",
            sourceLessonSlug: "who-counts-as-an-author",
          },
          {
            prompt: "Why is the trapdoor clause dangerous even when applied honestly?",
            options: ["A hierarchy decides who is invited to write", "Because drafting is the least skilled part of research and rewards the wrong people", "Because journals rarely check whether the claimed drafting actually took place", "Because non-native speakers are systematically excluded from the drafting stage"],
            correctIndex: 0,
            explanation: "Someone who is never asked to draft or review cannot satisfy it, however much of the underlying work they did.",
            sourceLessonSlug: "who-counts-as-an-author",
          },
          {
            prompt: "An acknowledgement differs from an authorship credit because it:",
            options: ["Does not accumulate", "Names the person less prominently, in smaller type at the foot of the article", "Requires no permission from the person being named in the published version", "Can be added after publication, whereas an author line is fixed at acceptance"],
            correctIndex: 0,
            explanation: "It is not indexed as authorship, so twenty years of acknowledgements add up to nothing a hiring committee counts. Being named and being counted are separate.",
            sourceLessonSlug: "who-counts-as-an-author",
          },
          {
            prompt: "The acknowledgement line illustrates which idea from lesson 1?",
            options: ["Credit comes in separate currencies", "The format cap, since an acknowledgement paragraph has a fixed maximum length", "The rationing decision, which only arises once the author list is already full", "The eponym, because a thanked contributor is sometimes later attached to the method"],
            correctIndex: 0,
            explanation: "Being named and being counted are two different currencies, and holding one does not get you the other.",
            sourceLessonSlug: "who-counts-as-an-author",
          },
          {
            prompt: "CRediT defines how many contributor roles?",
            options: ["Fourteen", "Four, aligned one to one with the ICMJE authorship criteria it was built to supplement", "Twenty six, covering every task a modern multi-site research collaboration involves", "A variable number, which each participating publisher extends to suit its own fields"],
            correctIndex: 0,
            explanation: "From conceptualization and data curation through software, supervision, and the two writing roles.",
            sourceLessonSlug: "who-counts-as-an-author",
          },
          {
            prompt: "CRediT's formal standard designation is:",
            options: ["ANSI/NISO Z39.104-2022", "ISO 21001:2018, the management standard for educational organizations", "ICMJE Recommendation 2.1, issued alongside the four authorship criteria", "IEEE 1471-2000, adapted from the software architecture description standard"],
            correctIndex: 0,
            explanation: "A community-owned taxonomy, approved as an ANSI/NISO standard in 2022.",
            sourceLessonSlug: "who-counts-as-an-author",
          },
          {
            prompt: "What does CRediT solve, and what does it leave untouched?",
            options: ["Solves description, leaves counting", "Solves counting, leaves the description of individual contributions to each journal", "Solves both, which is why major publishers adopted it in place of the ICMJE rule", "Solves neither, since it is advisory and no journal is required to implement it"],
            correctIndex: 0,
            explanation: "It records what each person did. It does not decide who qualifies as an author, so the counting problem sits exactly where it was.",
            sourceLessonSlug: "who-counts-as-an-author",
          },
          {
            prompt: "Wuchty, Jones and Uzzi examined how many papers?",
            options: ["19.9 million", "109,624, across fourteen funding programs at six separate research funders", "2.1 million, which is the number of patents rather than of papers in their data", "About 5,000, drawn from the thirteen disciplinary societies whose awards were counted"],
            correctIndex: 0,
            explanation: "Across five decades, together with 2.1 million patents.",
            sourceLessonSlug: "who-counts-as-an-author",
          },
          {
            prompt: "What did Wuchty, Jones and Uzzi find about teams?",
            options: ["They increasingly dominate solo authors", "That team size peaked in the 1980s and has fallen steadily in every field since", "That teams produce more papers but each is cited less often than solo-authored work", "That the shift toward teams occurred in the sciences but not in the humanities or in patents"],
            correctIndex: 0,
            explanation: "Across science and engineering, the social sciences, the arts and humanities, and patents, with team-produced work also more frequently cited.",
            sourceLessonSlug: "who-counts-as-an-author",
          },
          {
            prompt: "This lesson's claim that growing teams push more people below the authorship bar is:",
            options: ["A prediction from the rule, not a measured finding", "A direct result reported in the Wuchty, Jones and Uzzi paper itself", "An ICMJE policy statement about how large collaborations should assign credit", "A conclusion drawn from the CRediT data collected by participating publishers"],
            correctIndex: 0,
            explanation: "And the lesson says which is which, because presenting an inference as a measurement is the failure this course keeps warning about.",
            sourceLessonSlug: "who-counts-as-an-author",
          },
          {
            prompt: "The Wuchty, Jones and Uzzi study appeared in which journal and year?",
            options: ["Science, in 2007", "Social Studies of Science, in 2012, alongside the study of awards and prizes", "The Proceedings of the National Academy of Sciences, in 2018", "JAMA Surgery, in 2022, in the viewpoint proposing an eponym change"],
            correctIndex: 0,
            explanation: "Science 316(5827), 1036-1039, four decades after Merton named the Matthew effect in the same journal.",
            sourceLessonSlug: "who-counts-as-an-author",
          },
          {
            prompt: "Which ICMJE criterion concerns standing behind the work after publication?",
            options: ["Agreement to be accountable", "Final approval of the version to be published before it goes to press", "Drafting the work or reviewing it critically for important intellectual content", "Substantial contribution to the conception or design of the reported study"],
            correctIndex: 0,
            explanation: "Accountability for all aspects of the work, ensuring questions about accuracy or integrity are investigated and resolved.",
            sourceLessonSlug: "who-counts-as-an-author",
          },
          {
            prompt: "Under the ICMJE rule, where does a contributor who fails one criterion belong?",
            options: ["In the acknowledgements", "Nowhere, since a partial contribution creates no obligation on the authors", "In a supplementary file listing all personnel who worked on the project", "As a corresponding author, a category with a lower threshold than full authorship"],
            correctIndex: 0,
            explanation: "Acknowledged rather than listed as an author, with the contribution specified and written permission obtained.",
            sourceLessonSlug: "who-counts-as-an-author",
          },
          {
            prompt: "Vivien Thomas's job title when he was hired into Blalock's laboratory in 1930 was:",
            options: ["Assistant janitor", "Surgical research technician, a grade created for him by the medical school", "Laboratory supervisor, the post he would later hold at Johns Hopkins as well", "Research assistant, with a salary matched to the postdoctoral scale of the period"],
            correctIndex: 0,
            explanation: "At Vanderbilt. He continued to be classified and paid as a janitor and maintenance worker while doing postdoctoral-level work.",
            sourceLessonSlug: "vivien-thomas-and-the-author-line",
          },
          {
            prompt: "Thomas moved to Johns Hopkins in which year, and why?",
            options: ["1941, when Blalock was recruited there", "1930, immediately after completing his own training in surgical research methods", "1944, so that he could be present for the first operation on a human patient", "1976, when the medical school appointed him an instructor and awarded a degree"],
            correctIndex: 0,
            explanation: "He had joined Blalock's laboratory at Vanderbilt in 1930 and went with him to Baltimore eleven years later.",
            sourceLessonSlug: "vivien-thomas-and-the-author-line",
          },
          {
            prompt: "What did Thomas develop in the laboratory?",
            options: ["The systemic-to-pulmonary shunt", "A method of preserving blood plasma for transfusion during surgery", "The first mechanical pump capable of sustaining circulation during an operation", "A diagnostic technique for identifying heart malformations before birth"],
            correctIndex: 0,
            explanation: "Working the operation out in dogs and adapting the instruments for use on an infant.",
            sourceLessonSlug: "vivien-thomas-and-the-author-line",
          },
          {
            prompt: "The first blue baby operation took place on:",
            options: ["29 November 1944", "19 May 1945, the day the landmark paper appeared in JAMA", "12 March 1945, when the results were read to the Johns Hopkins Medical Society", "26 February 2024, the date now marked by five Ontario children's hospitals"],
            correctIndex: 0,
            explanation: "On Eileen Saxon, a fifteen-month-old patient. The paper reporting it followed nearly six months later.",
            sourceLessonSlug: "vivien-thomas-and-the-author-line",
          },
          {
            prompt: "Where did Thomas stand during that first operation?",
            options: ["Close behind Blalock at the table", "In the observation gallery above the theater, with the medical students", "At a second table, preparing the instruments he had adapted for the procedure", "Outside the theater entirely, because hospital policy barred him from the room"],
            correctIndex: 0,
            explanation: "Against all convention, so that he could give quiet advice during the procedure.",
            sourceLessonSlug: "vivien-thomas-and-the-author-line",
          },
          {
            prompt: "Who were the named authors of the 1945 JAMA paper?",
            options: ["Blalock and Taussig", "Blalock, Taussig and Thomas, with Thomas listed in the final position", "Blalock alone, with Taussig and Thomas both named in the acknowledgements", "Taussig and Thomas, since Blalock had already published the technique separately"],
            correctIndex: 0,
            explanation: "Alfred Blalock and Helen B. Taussig. Thomas is not among the authors.",
            sourceLessonSlug: "vivien-thomas-and-the-author-line",
          },
          {
            prompt: "Which ICMJE criterion does the lesson say Thomas plainly satisfied?",
            options: ["Substantial contribution to the work", "Drafting the paper or reviewing it critically for important intellectual content", "Final approval of the version of the manuscript that JAMA ultimately published", "Agreement to be publicly accountable for the accuracy of everything reported"],
            correctIndex: 0,
            explanation: "Conception, design, and the acquisition and analysis of data. The other three were withheld from him because nobody offered.",
            sourceLessonSlug: "vivien-thomas-and-the-author-line",
          },
          {
            prompt: "Why does the lesson say the convention decided before it weighed?",
            options: ["His job title controlled the one criterion he could not reach", "Because the journal's editors rejected his name when the manuscript was submitted", "Because the criteria were applied by Blalock personally rather than by the journal", "Because the operation's success was announced before the paper was written"],
            correctIndex: 0,
            explanation: "A technician in 1945 could not ask to be brought into the drafting, so the outcome was fixed by his position rather than by his contribution.",
            sourceLessonSlug: "vivien-thomas-and-the-author-line",
          },
          {
            prompt: "Applying the ICMJE criteria to a 1945 paper is described here as:",
            options: ["An exercise in mechanism, not a verdict on 1945", "A legitimate basis for a formal correction to the published author line", "The method the JAMA Surgery viewpoint used to argue for renaming the shunt", "An anachronism the lesson performs deliberately in order to reject the criteria"],
            correctIndex: 0,
            explanation: "The criteria did not exist then. Running them backwards shows which clause decides such a case, which is what a mechanism course wants.",
            sourceLessonSlug: "vivien-thomas-and-the-author-line",
          },
          {
            prompt: "What happened for Thomas in 1971?",
            options: ["His portrait was presented to the institution", "He was awarded an honorary degree and appointed to the faculty of the medical school", "He published the autobiography that was later reissued as Partners of the Heart", "The procedure was renamed to include his name in the standard eponym"],
            correctIndex: 0,
            explanation: "Colleagues arranged a ceremony and presented the portrait. The degree and the faculty appointment came five years later.",
            sourceLessonSlug: "vivien-thomas-and-the-author-line",
          },
          {
            prompt: "What did Johns Hopkins award Thomas in 1976?",
            options: ["An honorary Doctor of Laws", "An honorary Doctor of Medicine, backdated to the year of the first operation", "A tenured full professorship in the department of surgery at the medical school", "A retroactive listing as third author on the 1945 paper reporting the operation"],
            correctIndex: 0,
            explanation: "Not a medical doctorate. He was also appointed to the faculty as Instructor of Surgery in the same year.",
            sourceLessonSlug: "vivien-thomas-and-the-author-line",
          },
          {
            prompt: "The faculty title Thomas received in 1976 was:",
            options: ["Instructor of Surgery", "Associate Professor of Surgical Research, with a laboratory of his own", "Director of the Surgical Laboratories, the post he had effectively held for decades", "Adjunct Lecturer in Anatomy, a title carrying no departmental voting rights"],
            correctIndex: 0,
            explanation: "Alongside the honorary Doctor of Laws, thirty two years after the first operation.",
            sourceLessonSlug: "vivien-thomas-and-the-author-line",
          },
          {
            prompt: "Thomas's autobiography was published in 1985 and reissued in 1998 under what title?",
            options: ["Partners of the Heart", "Something the Lord Made, the title later used for a film about the collaboration", "The Blue Baby Operation, following the name by which the procedure was known", "Pioneering Research, an abbreviation of the original title used on the first edition"],
            correctIndex: 0,
            explanation: "The year of the first publication was the year he died, which is itself part of the timing this course keeps counting.",
            sourceLessonSlug: "vivien-thomas-and-the-author-line",
          },
          {
            prompt: "Who argued in JAMA Surgery in 2022 for renaming the shunt?",
            options: ["Kathleen Blake and Clyde W. Yancy", "Alfred Blalock's surviving students at the Johns Hopkins department of surgery", "The International Committee of Medical Journal Editors, in a policy recommendation", "Helen Taussig, in a late essay revisiting the credit for the original procedure"],
            correctIndex: 0,
            explanation: "Their viewpoint proposed that the procedure be known as the Blalock-Thomas-Taussig shunt.",
            sourceLessonSlug: "vivien-thomas-and-the-author-line",
          },
          {
            prompt: "What happened on 26 February 2024?",
            options: ["Five Ontario children's hospitals adopted the new name", "Johns Hopkins issued a formal correction to the 1945 JAMA paper", "The American Medical Association added Thomas to the paper's author line", "Vanderbilt University reclassified Thomas's historical employment records"],
            correctIndex: 0,
            explanation: "They announced they had adopted Blalock-Thomas-Taussig, two years after the published argument for the change.",
            sourceLessonSlug: "vivien-thomas-and-the-author-line",
          },
          {
            prompt: "How many years separated the first operation from the portrait ceremony?",
            options: ["Twenty seven", "Thirty two, the same interval as the faculty appointment that followed", "Seventy eight, matching the gap to the published argument for the rename", "Eleven, counting from his arrival at Johns Hopkins with Blalock in 1941"],
            correctIndex: 0,
            explanation: "1944 to 1971. Thirty two years to the faculty appointment, and seventy eight from the paper to the JAMA Surgery viewpoint.",
            sourceLessonSlug: "vivien-thomas-and-the-author-line",
          },
          {
            prompt: "What did none of the corrections to Thomas's record restore?",
            options: ["An author line", "An honorary degree, which Johns Hopkins was unable to award him", "A named place in the eponym, which no institution has yet adopted", "A record of his laboratory work, which had never been documented at all"],
            correctIndex: 0,
            explanation: "A 1945 author line is not a thing anyone can reopen, which is exactly the limit Section 6 measures.",
            sourceLessonSlug: "vivien-thomas-and-the-author-line",
          },
          {
            prompt: "Thomas was born and died in which years?",
            options: ["1910 and 1985", "1899 and 1964, spanning the whole period of the shunt's development", "1910 and 1976, the year of the honorary degree and faculty appointment", "1920 and 1998, the year his autobiography was reissued in paperback"],
            correctIndex: 0,
            explanation: "Born 29 August 1910, died 26 November 1985, the same year his autobiography appeared.",
            sourceLessonSlug: "vivien-thomas-and-the-author-line",
          },
          {
            prompt: "United States patent law separates which two questions?",
            options: ["Inventorship and ownership", "Novelty and non-obviousness, which are the two tests an application must survive", "Conception and reduction to practice, which decide the date of the invention", "Disclosure and enforcement, which govern publication and litigation respectively"],
            correctIndex: 0,
            explanation: "Inventorship is a question of fact about who conceived the claimed invention. Ownership is a question of property, and it is assignable.",
            sourceLessonSlug: "inventorship-is-not-ownership",
          },
          {
            prompt: "Which statute requires that a patent application name the inventor?",
            options: ["35 U.S.C. section 115", "35 U.S.C. section 261, which concerns the assignment of issued patents", "The Bayh-Dole Act of 1980, for any invention arising from federal funding", "Article I section 8 of the Constitution, which establishes the patent power"],
            correctIndex: 0,
            explanation: "The inventor's oath or declaration provision. Section 261 is the ownership and assignment provision.",
            sourceLessonSlug: "inventorship-is-not-ownership",
          },
          {
            prompt: "What does 35 U.S.C. section 261 establish about a patent?",
            options: ["It has the attributes of personal property and is assignable", "That it expires twenty years from the date the application was first filed", "That only a natural person, never a company, may be recorded as its holder", "That the inventor may not transfer it without the consent of the Patent Office"],
            correctIndex: 0,
            explanation: "Which is what lets ownership move to a company while the inventor's name stays printed on the grant.",
            sourceLessonSlug: "inventorship-is-not-ownership",
          },
          {
            prompt: "Stanford v. Roche was decided in which year, and at what citation?",
            options: ["2011, at 563 U.S. 776", "1980, the year Congress passed the Bayh-Dole Act it interpreted", "2022, alongside the JAMA Surgery viewpoint on the shunt's eponym", "1933, in the earlier line of cases on an employer's shop rights"],
            correctIndex: 0,
            explanation: "Board of Trustees of the Leland Stanford Junior University v. Roche Molecular Systems, Inc.",
            sourceLessonSlug: "inventorship-is-not-ownership",
          },
          {
            prompt: "What did the Court hold in Stanford v. Roche?",
            options: ["Title vests first in the inventor", "That federally funded inventions vest automatically in the funding agency", "That a university may take title unilaterally to any invention made on its premises", "That an inventor may not assign a patent before the application has been granted"],
            correctIndex: 0,
            explanation: "Even where the research was federally funded under Bayh-Dole. An obligation to assign is contractual and comes second.",
            sourceLessonSlug: "inventorship-is-not-ownership",
          },
          {
            prompt: "Under Stanford v. Roche, an obligation to assign an invention is:",
            options: ["Contractual and secondary", "Automatic wherever the inventor is an employee of the assignee", "Void unless it is recorded with the Patent Office before the grant issues", "The primary source of title, displacing the inventor's own claim entirely"],
            correctIndex: 0,
            explanation: "It comes second, after the inventor's first title, which is the order the Court was explicit about.",
            sourceLessonSlug: "inventorship-is-not-ownership",
          },
          {
            prompt: "Bayh-Dole concerns:",
            options: ["Federally funded inventions", "The four criteria a contributor must meet to be listed as an author", "The number of people among whom a single prize may be divided", "The taxonomy of contributor roles used by academic publishers"],
            correctIndex: 0,
            explanation: "The 1980 statute governing them, which Stanford v. Roche held does not displace the inventor's first title.",
            sourceLessonSlug: "inventorship-is-not-ownership",
          },
          {
            prompt: "On a paper, a contributor who fails one criterion:",
            options: ["Disappears from the top of the document", "Is listed last, in a position conventionally reserved for junior contributors", "Retains a legal interest in the work even though the byline omits their name", "Must be named in a supplementary contributions file the journal publishes"],
            correctIndex: 0,
            explanation: "And reappears, if at all, in a paragraph nobody counts.",
            sourceLessonSlug: "inventorship-is-not-ownership",
          },
          {
            prompt: "On a patent, what moves when a company acquires the rights?",
            options: ["The money", "The inventor's name, which is replaced by the assignee's on the printed grant", "The oath or declaration, which the assignee re-executes in the inventor's place", "The filing date, which resets to the date the assignment was recorded"],
            correctIndex: 0,
            explanation: "The human inventors stay named on the document permanently, findable a century later by anyone with the number.",
            sourceLessonSlug: "inventorship-is-not-ownership",
          },
          {
            prompt: "The characteristic failure of the patent system, in this lesson's account, is:",
            options: ["Erasure from the product", "Erasure from the record, since assignment removes the inventor from the document", "Delay, because a patent takes years to issue and the inventor may die first", "Duplication, because two inventors may hold patents on substantially the same thing"],
            correctIndex: 0,
            explanation: "The document keeps the name. The product the public sees carries a brand instead, and the assignment that moved the property is invisible to a customer.",
            sourceLessonSlug: "inventorship-is-not-ownership",
          },
          {
            prompt: "Why is a patent an unusually good historical record?",
            options: ["The inventor's name stays on it permanently", "Because patent examiners verify each claimed contribution before granting it", "Because the Patent Office publishes the correspondence behind every application", "Because assignments must be recorded publicly before ownership can transfer"],
            correctIndex: 0,
            explanation: "And it is retrievable by number, which makes it checkable in a way an old author line is not.",
            sourceLessonSlug: "inventorship-is-not-ownership",
          },
          {
            prompt: "Which subjects does this course deliberately leave to its sibling, Who Gets the Credit?",
            options: ["The assignment clause and the verified patent numbers", "The four ICMJE criteria and the CRediT contributor taxonomy", "The Matthew effect and its replication across six research funders", "The four moments at which silences enter historical production"],
            correctIndex: 0,
            explanation: "Along with who was legally permitted to hold a patent and when, the 1836 oath requirement and the 1858 opinion. This course teaches only the contrast it needs.",
            sourceLessonSlug: "inventorship-is-not-ownership",
          },
          {
            prompt: "The transferable habit this lesson teaches is to ask:",
            options: ["Which document was supposed to record the answer", "Who benefited financially from the arrangement that produced the dispute", "Whether the person raising the claim has a personal interest in its outcome", "How many independent sources repeat the version of events being challenged"],
            correctIndex: 0,
            explanation: "Then ask what that document's rule actually decides, which is never the same as who did the work.",
            sourceLessonSlug: "inventorship-is-not-ownership",
          },
          {
            prompt: "A paper's rule decides who is named. A patent's rule decides:",
            options: ["Who is named and, separately, who owns", "Only who owns, since inventorship is a formality with no legal consequence", "Who is named, with ownership following automatically from the naming", "Neither, since both questions are settled by the employment contract instead"],
            correctIndex: 0,
            explanation: "Two questions, two answers, both recorded. Neither rule decides who did the work, and neither was designed to.",
            sourceLessonSlug: "inventorship-is-not-ownership",
          },
          {
            prompt: "Setting the paper and the patent side by side shows that credit rules are:",
            options: ["Choices rather than nature", "Converging, since both systems now require the same disclosures", "Equivalent, because both attach a name to work in a public document", "Determined by the technology involved rather than by institutional decision"],
            correctIndex: 0,
            explanation: "Two formats built for the same job fail in opposite directions, which is only possible if each rule was designed rather than discovered.",
            sourceLessonSlug: "inventorship-is-not-ownership",
          },
          {
            prompt: "Inventorship, as the statute treats it, is:",
            options: ["A question of fact about who conceived the invention", "A matter of agreement among the parties who funded and performed the work", "A designation the assignee selects when the application is prepared for filing", "A ranking of contributors by the proportion of the claims each one supported"],
            correctIndex: 0,
            explanation: "Which is why it names humans, and why it cannot be transferred the way ownership can.",
            sourceLessonSlug: "inventorship-is-not-ownership",
          },
          {
            prompt: "Under section 115, who executes the oath or declaration?",
            options: ["Each inventor or joint inventor", "The attorney of record, on behalf of everyone named in the application", "The assignee, once ownership of the pending application has been transferred", "A witness present when the invention was first reduced to practice"],
            correctIndex: 0,
            explanation: "The application must name the inventor for any invention claimed, and each individual inventor executes the oath or declaration.",
            sourceLessonSlug: "inventorship-is-not-ownership",
          },
          {
            prompt: "This course's reason for stopping at the inventorship and ownership distinction is:",
            options: ["The patent system is the sibling course's whole subject", "That patent law changes too often for a general course to state accurately", "That the distinction is the only part of patent law with any bearing on credit", "That patent records are not publicly available in a form a learner could check"],
            correctIndex: 0,
            explanation: "Who Gets the Credit teaches the assignment clause, the legal history and eleven verified patent numbers, step by step. Repeating it here would waste the learner's time.",
            sourceLessonSlug: "inventorship-is-not-ownership",
          },
          {
            prompt: "A hiring committee counting a candidate's record will look at:",
            options: ["Authorship, not acknowledgements", "Both equally, since each records a documented contribution to published work", "Acknowledgements first, because they identify the technical work behind a paper", "Neither, since committees rely on letters of reference rather than on documents"],
            correctIndex: 0,
            explanation: "An acknowledgement is not indexed as authorship, so it does not accumulate however many times a person earns one.",
            sourceLessonSlug: "who-counts-as-an-author",
          },
          {
            prompt: "Where was the 1945 paper's content first presented?",
            options: ["To the Johns Hopkins Medical Society", "At the annual meeting of the American Medical Association in Chicago", "In a lecture at Vanderbilt, where the laboratory work had begun in 1930", "Nowhere; JAMA publication was the first public account of the operation"],
            correctIndex: 0,
            explanation: "In March 1945, roughly two months before the paper appeared in JAMA on 19 May.",
            sourceLessonSlug: "vivien-thomas-and-the-author-line",
          },
          {
            prompt: "Eileen Saxon was:",
            options: ["The first blue baby patient", "The nurse who assisted at the first operation in November 1944", "The Johns Hopkins administrator who arranged the 1971 portrait ceremony", "The cardiologist who referred the first patients to Blalock's surgical service"],
            correctIndex: 0,
            explanation: "Fifteen months old at the time of the operation on 29 November 1944.",
            sourceLessonSlug: "vivien-thomas-and-the-author-line",
          },
          {
            prompt: "The 1945 paper's title concerned malformations of the heart involving:",
            options: ["Pulmonary stenosis or pulmonary atresia", "Coarctation of the aorta and its surgical correction in older children", "Defects of the atrial septum repaired under direct vision", "Valvular disease arising as a late consequence of rheumatic fever"],
            correctIndex: 0,
            explanation: "The surgical treatment of malformations of the heart in which there is pulmonary stenosis or pulmonary atresia.",
            sourceLessonSlug: "vivien-thomas-and-the-author-line",
          },
          {
            prompt: "Which correction instrument was available to Thomas's supporters but not to a 1945 author line?",
            options: ["An eponym change", "A published erratum adding a name to the original article's byline", "A retraction and republication of the paper with the corrected authorship", "A ruling from the journal's editors reassigning credit between the parties"],
            correctIndex: 0,
            explanation: "Renaming the procedure is one of the few instruments available when the original document cannot be reopened.",
            sourceLessonSlug: "vivien-thomas-and-the-author-line",
          },
          {
            prompt: "The lesson describes ICMJE criteria three and four as, in Thomas's case:",
            options: ["Withheld because nobody offered", "Satisfied, since he stood behind the results in his own later writing", "Irrelevant, because they apply only to the corresponding author of a paper", "Impossible, since no technician could be held accountable for a clinical result"],
            correctIndex: 0,
            explanation: "Approval and accountability were never put to him. Criterion two, the drafting clause, was the one his position made unreachable.",
            sourceLessonSlug: "vivien-thomas-and-the-author-line",
          },
          {
            prompt: "What can a customer looking at a product NOT see?",
            options: ["The assignment that moved the property", "The patent number, which manufacturers are forbidden to print on packaging", "The inventor's name, which patent law removes once ownership transfers", "Whether the product is covered by a patent at all, since grants are not public"],
            correctIndex: 0,
            explanation: "The brand carries the name instead of a person, which is why the patent system's failure lands on the product rather than on the record.",
            sourceLessonSlug: "inventorship-is-not-ownership",
          },
          {
            prompt: "Reading the author line and the patent grant together, the general lesson is that:",
            options: ["Neither rule was designed to record who did the work", "Both rules record contribution accurately, and disputes arise from misapplication", "The older of the two formats is the more reliable guide to historical contribution", "A single reformed standard could replace both and settle credit disputes for good"],
            correctIndex: 0,
            explanation: "A paper's rule decides who is named; a patent's decides naming and ownership separately. Contribution is not the question either one answers.",
            sourceLessonSlug: "inventorship-is-not-ownership",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5 — The archive's silences: reading a gap as evidence
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "four-moments-of-silence",
      title: "17 · Four places a record goes quiet",
      section: "Section 5 · The archive's silences",
      body: `Everything so far assumed a document exists to argue about. Often one does not, and the absence is the most misread evidence in this whole subject.

**Trouillot's four moments.** In *Silencing the Past*, the anthropologist Michel-Rolph Trouillot argued that silences enter the production of history at four distinct points: the moment of **fact creation**, which is the making of sources; the moment of **fact assembly**, which is the making of archives; the moment of **fact retrieval**, which is the making of narratives; and the moment of **retrospective significance**, which is the making of history in the final instance (Trouillot, 1995). Four separate operations, four separate opportunities for a name to drop out, and each one leaves a different trace.

**Run them on credit.** *Fact creation*: the payroll classification, the author line, the inventor declaration. If a surgical researcher is carried on the payroll as a janitor, the payroll is now a source, and it says he was a janitor. *Fact assembly*: which papers a family keeps, which an institution accessions, which a fire takes. *Fact retrieval*: which of the surviving records a writer actually picks up, which is where the Matthew effect gets a second turn, because the better known name is the one a researcher searches for first. *Retrospective significance*: which of the assembled stories anyone decides is worth telling.

**The rule that makes a gap usable.** Do not read absence as proof of absence, and do not read it as proof of suppression either. Ask instead: **what would have had to happen for this record to exist?** If the answer is "somebody would have had to be permitted to sign it," then the gap is evidence about the permission rule, and the permission rule is documented elsewhere. That is a finding. If the answer is "somebody would have had to have done the thing," the gap is evidence the thing may not have happened, and you should say so.

**The discipline that keeps it honest.** Write down what the record would look like under *each* hypothesis before you look. If a contribution was real but unnameable, expect corroboration in the surrounding material: laboratory notes, correspondence, later testimony, an eventual honorary correction. If the contribution was not real, expect the surrounding material to be silent too. A gap that is *isolated* is a finding about the record. A gap surrounded by more silence is often just an absence.

**One asymmetry to watch for.** Two comparable people can leave very different quantities of paper, and the better documented one will look more real. That is a bias in the reader, not a fact about the past. It is why lesson 7 could show what the Walker company earned in specific years while the comparable figures for Malone's business are, by her own biographer's account, not documented anywhere anyone has produced. The correct inference is about what survived, not about which business was larger.

:::reveal Name Trouillot's four moments in order. ||| Fact creation, the making of sources. Fact assembly, the making of archives. Fact retrieval, the making of narratives. And retrospective significance, the making of history in the final instance.

:::reveal What is the question that turns a gap into a finding? ||| What would have had to happen for this record to exist? If the answer is that somebody would have had to be permitted to sign it, the gap is evidence about a permission rule that is documented elsewhere.

:::reveal How do you tell a gap that is evidence from a gap that is just an absence? ||| Write down what the record would look like under each hypothesis before you look. A real but unnameable contribution should leave corroboration nearby, in notes, correspondence, testimony or a later correction. An absent contribution leaves the surrounding material silent too.

## Vocabulary
- **Fact creation**: Trouillot's first moment, the making of sources, where a payroll classification or an author line becomes the record.
- **Fact assembly**: his second moment, the making of archives, which decides what survives to be read at all.
- **Fact retrieval**: his third moment, the making of narratives, where a researcher's search terms give the Matthew effect a second turn.
- **Retrospective significance**: his fourth moment, the making of history, where someone decides which assembled story matters.
- **Isolated gap**: a silence surrounded by corroborating material, which is evidence about the record rather than about the event.

## Sources
Trouillot, M.-R. (1995). *Silencing the past: Power and the production of history*. Beacon Press.`,
    },
    {
      slug: "henrietta-lacks-and-the-substituted-name",
      title: "18 · Henrietta Lacks, and a record that carried the wrong name",
      section: "Section 5 · The archive's silences",
      body: `On 8 February 1951 a biopsy was taken from Henrietta Lacks, a 31-year-old woman being treated for cervical cancer at Johns Hopkins Hospital. The tissue went to George Otto Gey's Tissue Culture Laboratory, where his assistant Mary Kubicek grew it, and the cells did what no previous human cells had done: they kept dividing. Gey distributed them freely to anyone who asked. Neither Lacks nor her family gave permission, and Johns Hopkins states that in 1951 there was no established practice of obtaining consent for the collection of cells or tissue for research (Johns Hopkins Medicine, n.d.).

**The family's position leads, and it is about more than consent.** The objection the Lacks family has pressed is not only that the cells were taken. It is that a global industry was built on them while the family had no knowledge, no say and no share. That is the shape of the case, and everything else in this lesson is subordinate to it.

**Now the part that belongs to this section.** For roughly two decades the cell line was not attributed to Henrietta Lacks in print. It was attributed to a "Helen Lane," and in some accounts a "Helen Larson." A name that never existed sat in the literature in the place of a real one. The substitution ended in 1973, when a query in *Nature* obtained her actual name. Who introduced the false name, and why, is not settled by the record, and this course does not guess.

**Read that against Trouillot.** The moment of fact creation produced a source containing a wrong name. The moment of fact assembly filed it. The moment of fact retrieval meant that every researcher for twenty years who went looking found "Helen Lane," which is worse than a gap: a gap invites a question, and a plausible wrong answer stops one being asked.

**What the family learned, and when.** Also in 1973, after staff at Johns Hopkins found that HeLa cells could contaminate other cultures, a physician contacted the Lacks family seeking blood samples. Accounts agree the family did not understand the purpose of the visit.

**The corrections, with their dates.** In March 2013 the genome of a HeLa strain was published without the family's knowledge, and the authors withdrew access after the family objected. On 7 August 2013 the National Institutes of Health announced a controlled-access policy for HeLa genomic data, agreed with the family after three meetings, with review by a committee that includes two members of the Lacks family. On 1 August 2023 the family announced a settlement with Thermo Fisher Scientific; the terms are confidential, and no court ruled on the merits of the claim. Further litigation has followed, and this course does not state its outcomes, because a case's status changes and an out-of-date assertion in a lesson is worse than a hedge.

**What was and was not repaired.** The name is right now. The family sits on the committee. A settlement was reached on undisclosed terms. The cells are still in use worldwide, and nothing reaches back to 1951.

:::reveal What was taken, when, and under what consent conditions? ||| A biopsy from Henrietta Lacks on 8 February 1951 at Johns Hopkins Hospital, during treatment for cervical cancer, without her or her family's permission. Johns Hopkins states there was no established practice of obtaining consent for research tissue at the time.

:::reveal Why does this lesson say a substituted name is worse than a gap? ||| Because a gap invites a question and a plausible wrong answer stops one being asked. For about two decades researchers looking for the source of HeLa found "Helen Lane," a person who did not exist.

:::reveal Give the three dated corrections in this case and say what none of them reached. ||| The 1973 Nature query that recovered her name, the NIH controlled-access agreement announced on 7 August 2013 with two family members on the review committee, and the confidential settlement with Thermo Fisher announced on 1 August 2023. None of them reaches back to 1951, and the cells remain in worldwide use.

## Vocabulary
- **HeLa**: the cell line grown from Henrietta Lacks's 1951 biopsy, the first human cells to keep dividing indefinitely in culture.
- **Substituted name**: a false attribution occupying the place of the true one in a record, which suppresses the question a blank space would have raised.
- **Controlled access**: the 2013 arrangement under which requests to use HeLa genomic data are reviewed by a committee including two Lacks family members.
- **Confidential settlement**: a resolution whose terms are not disclosed and in which no court rules on the merits, so it establishes no precedent for anyone else.

## Sources
Johns Hopkins Medicine. (n.d.). *The legacy of Henrietta Lacks*. https://www.hopkinsmedicine.org/henrietta-lacks

National Public Radio. (2023, August 1). *Henrietta Lacks' family reaches settlement over use of her "stolen" cells*. https://www.npr.org/2023/08/01/1191283359/henrietta-lacks-descendants-settlement-stolen-cells`,
    },
    {
      slug: "selma-burke-and-the-dime",
      title: "19 · Selma Burke, and a dispute the record cannot close",
      section: "Section 5 · The archive's silences",
      body: `Selma Burke lived from 1900 to 1995. In 1943 she won a Commission of Fine Arts competition to sculpt a relief portrait of Franklin Delano Roosevelt for the Recorder of Deeds Building in Washington. She asked for and received a sitting with the president, because photographs did not give her what she wanted. The finished relief was unveiled in 1945. On 30 January 1946, which would have been Roosevelt's sixty-fourth birthday, the United States Mint released a dime carrying a Roosevelt profile and the initials JS, for John Sinnock, chief engraver from 1925 to 1947.

Burke maintained for the rest of her life that the dime derived from her relief. This lesson does not settle that, and says why.

**The case for Burke.** She had a documented sitting with the subject in the year before the coin, and a finished, publicly unveiled relief. The Smithsonian American Art Museum's own record describes her relief portrait of Roosevelt as the model for his image on the dime and says the 1944 work inspired the Roosevelt dime (Smithsonian American Art Museum, n.d.). One of Roosevelt's sons also credited her. Burke and her supporters raised the objection as soon as the coin circulated and asked for an investigation.

**The case for Sinnock.** He was the Mint's chief engraver, the initials on the coin are his, and the Mint credits him. He had produced presidential medals before, including work on Roosevelt, so a design lineage inside the Mint that predates Burke's relief is at least available as an explanation. He denied the accusation. Some numismatic comparisons of the two profiles report visible differences, particularly around the nose and hair.

**Why the record cannot close it.** A resemblance between two portraits of the same man, both made from life or from good photographs, is weak evidence of copying in either direction, because the underlying face constrains both. There is no document in which anyone records taking the design from the relief, and no document establishing independent derivation either. What exists is an official attribution, a rival claim made contemporaneously by a named artist, and an institution that later credited the artist. Each is real. None is dispositive.

**What this case teaches that a resolved one could not.** Every other case in this course eventually acquired something: a portrait, a degree, an agreement, an expungement, a rename. This one acquired an argument and kept it. That is the ordinary outcome, not the exception, and a course that only taught the cases with tidy endings would leave you expecting an ending. The honest position is the one the evidence supports: Burke's claim is serious, documented and unproven, the Mint's attribution is official and uninterrogated, and a reader who repeats either as settled fact is making a bet.

:::reveal Give the three dates that frame the Burke and Sinnock dispute. ||| The 1943 competition she won for the Recorder of Deeds relief, the 1945 unveiling of the finished relief, and the release of the Roosevelt dime on 30 January 1946 carrying John Sinnock's initials.

:::reveal Name one piece of evidence on each side, and say why neither settles it. ||| For Burke: a documented sitting with Roosevelt and the Smithsonian American Art Museum's record calling her relief the model for the dime. For Sinnock: the Mint's official attribution, his initials on the coin, and his prior presidential medal work. Neither settles it, because a resemblance between two portraits of the same face is weak evidence of copying and no document records a derivation either way.

:::reveal Why does this course include a case it cannot resolve? ||| Because an unresolved argument is the ordinary outcome, and a course teaching only the cases with tidy endings would leave a reader expecting one. The defensible position is that Burke's claim is serious, documented and unproven.

## Vocabulary
- **Official attribution**: the credit an institution records as fact, here the Mint's crediting of Sinnock, which carries authority without constituting evidence about derivation.
- **Contemporaneous claim**: an objection raised at the time by a named person, which is stronger than a later reconstruction and still not proof.
- **Weak evidence of copying**: a resemblance between two portraits of the same subject, which the subject's own face largely explains.
- **Dispositive**: sufficient on its own to settle a question, which nothing in this dispute is.

## Sources
Smithsonian American Art Museum. (n.d.). *Selma Burke*. https://americanart.si.edu/artist/selma-burke-27983`,
    },
    {
      slug: "quiz-archive-silences",
      title: "20 · Knowledge check: the archive's silences",
      section: "Section 5 · The archive's silences",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "Who identified four moments at which silences enter historical production?",
            options: ["Michel-Rolph Trouillot", "Robert K. Merton, in the follow-up essay he published in Isis in 1988", "Margaret W. Rossiter, in the 1993 paper that named the Matilda effect", "Matilda Joslyn Gage, in her 1883 essay for the North American Review"],
            correctIndex: 0,
            explanation: "In Silencing the Past: Power and the Production of History, published by Beacon Press in 1995.",
            sourceLessonSlug: "four-moments-of-silence",
          },
          {
            prompt: "Trouillot's first moment of silence is:",
            options: ["Fact creation, the making of sources", "Fact assembly, which is the process by which archives decide what to keep", "Fact retrieval, when a researcher chooses which surviving records to read", "Retrospective significance, when a historian decides which story matters"],
            correctIndex: 0,
            explanation: "The four run in order: fact creation, fact assembly, fact retrieval, and retrospective significance.",
            sourceLessonSlug: "four-moments-of-silence",
          },
          {
            prompt: "The making of archives corresponds to which moment?",
            options: ["Fact assembly", "Fact creation, since a document only exists once an archive has accessioned it", "Fact retrieval, because an archive's finding aids determine what a reader locates", "Retrospective significance, since accessioning is a judgment about importance"],
            correctIndex: 0,
            explanation: "Fact creation is the making of sources; fact retrieval is the making of narratives; retrospective significance is the making of history in the final instance.",
            sourceLessonSlug: "four-moments-of-silence",
          },
          {
            prompt: "The making of narratives corresponds to which moment?",
            options: ["Fact retrieval", "Fact creation, where the first written account of an event is composed", "Fact assembly, which gathers the sources a narrative will later be built from", "Retrospective significance, which is where a narrative acquires its audience"],
            correctIndex: 0,
            explanation: "It is where a writer picks up some of the surviving records and not others, which gives the Matthew effect a second turn.",
            sourceLessonSlug: "four-moments-of-silence",
          },
          {
            prompt: "Trouillot's fourth moment is described as the making of:",
            options: ["History in the final instance", "The canon, once textbooks and syllabuses fix a version for teaching", "The public record, when documents are released and become citable", "The consensus, once specialists in a field stop disputing an account"],
            correctIndex: 0,
            explanation: "Retrospective significance: the moment at which someone decides which of the assembled stories is worth telling.",
            sourceLessonSlug: "four-moments-of-silence",
          },
          {
            prompt: "A payroll classification recording a surgical researcher as a janitor is an example of:",
            options: ["Fact creation", "Fact assembly, since payroll ledgers are among the first records an archive keeps", "Fact retrieval, because a later writer must decide whether to consult payroll records", "Retrospective significance, since the classification shaped how the work was valued"],
            correctIndex: 0,
            explanation: "The payroll is now a source, and it says he was a janitor. That is the making of a source, Trouillot's first moment.",
            sourceLessonSlug: "four-moments-of-silence",
          },
          {
            prompt: "Where does the Matthew effect get a second turn, in Trouillot's scheme?",
            options: ["Fact retrieval", "Fact creation, since eminent people generate more documents in the first place", "Fact assembly, because archives preferentially accession the papers of famous figures", "Retrospective significance, where prizes decide which work is remembered"],
            correctIndex: 0,
            explanation: "The better known name is the one a researcher searches for first, so the retrieval step reproduces the concentration a second time.",
            sourceLessonSlug: "four-moments-of-silence",
          },
          {
            prompt: "The question that turns a gap into a finding is:",
            options: ["What would have had to happen for this record to exist?", "Who benefited from the record not existing, and what did they gain by its absence?", "How many comparable records from the same period and institution have survived?", "Which archive would have held the record, and when was that collection destroyed?"],
            correctIndex: 0,
            explanation: "If the answer is that somebody would have had to be permitted to sign it, the gap is evidence about a permission rule documented elsewhere.",
            sourceLessonSlug: "four-moments-of-silence",
          },
          {
            prompt: "When does a gap point toward the thing not having happened?",
            options: ["When the record would have required someone to do it", "When the archive holding it was destroyed and no copies were made elsewhere", "When the people involved had a motive to suppress the record at the time", "When no comparable record exists for anyone else in the same institution"],
            correctIndex: 0,
            explanation: "If the record's existence would have required only that somebody did the thing, its absence is evidence the thing may not have happened, and the lesson says to say so.",
            sourceLessonSlug: "four-moments-of-silence",
          },
          {
            prompt: "The discipline that keeps gap-reading honest is to:",
            options: ["Write down what each hypothesis predicts before looking", "Consult at least three independent archives before drawing any conclusion", "Assume the more conservative reading whenever two are equally consistent", "Treat any silence as neutral until a specialist in the period has reviewed it"],
            correctIndex: 0,
            explanation: "A real but unnameable contribution should leave corroboration nearby. An absent one leaves the surrounding material silent too.",
            sourceLessonSlug: "four-moments-of-silence",
          },
          {
            prompt: "An isolated gap, as this lesson uses the term, is:",
            options: ["A silence surrounded by corroborating material", "A record missing from one archive but present in another collection", "A single missing year in a run of otherwise continuous documentation", "A silence for which no explanation has ever been proposed by historians"],
            correctIndex: 0,
            explanation: "It is a finding about the record. A gap surrounded by more silence is often just an absence.",
            sourceLessonSlug: "four-moments-of-silence",
          },
          {
            prompt: "When two comparable people leave very different quantities of paper, the correct inference concerns:",
            options: ["What survived", "Which of the two was more significant in their own lifetime", "Which institution was more careful about keeping its own records", "How much each of them chose to write down about their own activities"],
            correctIndex: 0,
            explanation: "The better documented one looks more real, and that is a bias in the reader rather than a fact about the past.",
            sourceLessonSlug: "four-moments-of-silence",
          },
          {
            prompt: "This lesson cites which pair as its example of documentation asymmetry?",
            options: ["Walker and Malone", "Merton and Zuckerman, whose collaboration left only one name on the paper", "Blalock and Thomas, one of whom appears on the payroll as a janitor", "Burke and Sinnock, only one of whom left a signed design record"],
            correctIndex: 0,
            explanation: "Walker company earnings are available for specific years while the comparable figures for Malone's business are, by Walker's own biographer's account, undocumented.",
            sourceLessonSlug: "four-moments-of-silence",
          },
          {
            prompt: "Trouillot's four moments are best understood as:",
            options: ["Four separate operations with four different traces", "Four stages that always occur in the same order and cannot be separated", "Four types of archive, distinguished by who controls their accession policies", "Four errors a historian can make when reading an incomplete documentary record"],
            correctIndex: 0,
            explanation: "Each is a separate opportunity for a name to drop out, and each leaves a different trace to look for.",
            sourceLessonSlug: "four-moments-of-silence",
          },
          {
            prompt: "Neither reading absence as proof of absence nor as proof of suppression is allowed, because:",
            options: ["Both skip the question of what the record required", "Both are equally likely, so the reader should simply report the gap and stop", "Suppression is a criminal allegation and requires a higher standard of proof", "Archives are too incomplete for any inference from silence to be defensible"],
            correctIndex: 0,
            explanation: "Asking what would have had to happen for the record to exist is what distinguishes the two, and the answer is usually documented elsewhere.",
            sourceLessonSlug: "four-moments-of-silence",
          },
          {
            prompt: "Silencing the Past was published in which year and by whom?",
            options: ["1995, by Beacon Press", "1993, in the journal Social Studies of Science alongside Rossiter's paper", "2007, by Science, in the same issue as the study of research teams", "1968, by Columbia University Press, contemporaneously with Merton's paper"],
            correctIndex: 0,
            explanation: "Michel-Rolph Trouillot, Silencing the Past: Power and the Production of History.",
            sourceLessonSlug: "four-moments-of-silence",
          },
          {
            prompt: "The biopsy from Henrietta Lacks was taken on:",
            options: ["8 February 1951", "1 August 2023, the date the family announced a settlement with Thermo Fisher", "7 August 2013, when the National Institutes of Health announced its data policy", "12 March 1973, when a query in Nature recovered her real name"],
            correctIndex: 0,
            explanation: "At Johns Hopkins Hospital, during treatment for cervical cancer. She was 31.",
            sourceLessonSlug: "henrietta-lacks-and-the-substituted-name",
          },
          {
            prompt: "Whose laboratory received the tissue, and who grew the cells?",
            options: ["George Otto Gey's lab, and his assistant Mary Kubicek", "Alfred Blalock's surgical laboratory, and his technician Vivien Thomas", "The National Institutes of Health tissue bank, under a federal research contract", "An independent commercial culture facility that had contracted with the hospital"],
            correctIndex: 0,
            explanation: "The Tissue Culture Laboratory at Johns Hopkins. Gey then distributed the cells freely to anyone who asked.",
            sourceLessonSlug: "henrietta-lacks-and-the-substituted-name",
          },
          {
            prompt: "What did Gey do with the cells once they grew?",
            options: ["Distributed them freely to anyone who asked", "Patented the line and licensed it to commercial suppliers on a royalty basis", "Restricted access to his own laboratory until the results had been published", "Sold them to a biotechnology company, which is the origin of the later lawsuits"],
            correctIndex: 0,
            explanation: "Which is part of why the line spread worldwide, and part of why no single act of profiting can be pointed to at the origin.",
            sourceLessonSlug: "henrietta-lacks-and-the-substituted-name",
          },
          {
            prompt: "What does Johns Hopkins state about consent practice in 1951?",
            options: ["There was no established practice of obtaining it", "That consent was obtained verbally but the documentation has not survived", "That the family consented on her behalf after her death later that year", "That its own policy required consent and the treating physician failed to follow it"],
            correctIndex: 0,
            explanation: "For the collection of cells or tissue for research. Neither Lacks nor her family gave permission.",
            sourceLessonSlug: "henrietta-lacks-and-the-substituted-name",
          },
          {
            prompt: "The Lacks family's objection, as this lesson frames it, is that:",
            options: ["An industry was built with no knowledge, say or share", "The cells were destroyed before the family could request their return", "The hospital failed to inform them of her diagnosis during her treatment", "Researchers published her genome before any settlement had been reached"],
            correctIndex: 0,
            explanation: "Not only that the cells were taken. That is the shape of the case, and everything else in the lesson is subordinate to it.",
            sourceLessonSlug: "henrietta-lacks-and-the-substituted-name",
          },
          {
            prompt: "For roughly two decades the cell line was attributed in print to:",
            options: ["A person who did not exist", "An anonymous donor, with no name attached in the published literature", "Johns Hopkins Hospital as an institution rather than to any individual", "George Gey's laboratory, which was credited as the line's originator"],
            correctIndex: 0,
            explanation: "A Helen Lane, and in some accounts a Helen Larson. Who introduced the false name, and why, is not settled by the record.",
            sourceLessonSlug: "henrietta-lacks-and-the-substituted-name",
          },
          {
            prompt: "How did the substitution end?",
            options: ["A 1973 query in Nature obtained her real name", "Johns Hopkins issued a public correction after the family's 1973 blood draw", "Rebecca Skloot's research located the original pathology records in the 2000s", "The National Institutes of Health required disclosure as a condition of funding"],
            correctIndex: 0,
            explanation: "The same year staff at Hopkins contacted the family about contamination of other cultures.",
            sourceLessonSlug: "henrietta-lacks-and-the-substituted-name",
          },
          {
            prompt: "Why is a substituted name worse than a blank in the record?",
            options: ["A plausible wrong answer stops the question being asked", "Because a false name is harder to correct than an omission once it is indexed", "Because it implies deliberate deception, whereas a gap may be accidental", "Because indexes cannot be searched for a name that was never recorded at all"],
            correctIndex: 0,
            explanation: "A gap invites a question. For twenty years every researcher who went looking found a satisfying answer that happened to be false.",
            sourceLessonSlug: "henrietta-lacks-and-the-substituted-name",
          },
          {
            prompt: "Why did a physician contact the Lacks family in 1973?",
            options: ["To seek blood samples after a contamination finding", "To inform them that their mother's cells had been used without permission", "To obtain retrospective consent before a genome sequencing project began", "To notify them of a settlement offer from a commercial cell supplier"],
            correctIndex: 0,
            explanation: "Staff at Johns Hopkins had found that HeLa cells could contaminate other cultures. Accounts agree the family did not understand the purpose of the visit.",
            sourceLessonSlug: "henrietta-lacks-and-the-substituted-name",
          },
          {
            prompt: "What happened in March 2013?",
            options: ["A HeLa genome was published without the family's knowledge", "The National Institutes of Health announced its controlled-access policy", "The family filed suit against Thermo Fisher Scientific in federal court", "Johns Hopkins formally apologized and renamed a building for Henrietta Lacks"],
            correctIndex: 0,
            explanation: "The authors withdrew access after the family objected, which is what led to the negotiation announced later that year.",
            sourceLessonSlug: "henrietta-lacks-and-the-substituted-name",
          },
          {
            prompt: "The NIH policy announced on 7 August 2013 established:",
            options: ["Controlled access reviewed by a committee including two family members", "A royalty stream paid to the Lacks family from every federally funded HeLa study", "A prohibition on further use of HeLa cells in research supported by federal funds", "A requirement that all published papers using HeLa name Henrietta Lacks as an author"],
            correctIndex: 0,
            explanation: "Agreed with the family after three meetings, governing requests to use HeLa genomic data.",
            sourceLessonSlug: "henrietta-lacks-and-the-substituted-name",
          },
          {
            prompt: "The settlement announced on 1 August 2023 was with:",
            options: ["Thermo Fisher Scientific", "Johns Hopkins Medicine, which had held the original tissue samples", "The National Institutes of Health, on behalf of all federally funded users", "George Gey's estate, which had retained rights in the original culture"],
            correctIndex: 0,
            explanation: "The terms are confidential, and no court ruled on the merits of the claim.",
            sourceLessonSlug: "henrietta-lacks-and-the-substituted-name",
          },
          {
            prompt: "Why does a confidential settlement establish nothing for anyone else?",
            options: ["No court ruled on the merits", "Because the parties agreed not to discuss the case in any public forum", "Because settlements are sealed and cannot be located in the court record", "Because the amount was too small to influence how other companies behave"],
            correctIndex: 0,
            explanation: "A resolution with undisclosed terms and no judicial finding creates no precedent, whatever it did for the parties themselves.",
            sourceLessonSlug: "henrietta-lacks-and-the-substituted-name",
          },
          {
            prompt: "Why does this course decline to state the outcomes of later Lacks litigation?",
            options: ["A case's status changes and a stale assertion is worse than a hedge", "Because ongoing litigation cannot legally be described in educational materials", "Because the family has asked that no further cases be discussed publicly", "Because none of the later cases involves the same underlying legal question"],
            correctIndex: 0,
            explanation: "Which is the same discipline that put the reviewed-preprint caveat on the replication study in Section 2.",
            sourceLessonSlug: "henrietta-lacks-and-the-substituted-name",
          },
          {
            prompt: "What does this lesson say was NOT repaired?",
            options: ["Anything reaching back to 1951", "The attribution of the cell line, which still carries the wrong name in older papers", "The family's exclusion from the data access committee governing HeLa genomes", "The consent standard, which remains unchanged for research tissue in the US"],
            correctIndex: 0,
            explanation: "The name is right now, the family sits on the committee, a settlement was reached. The cells are still in worldwide use.",
            sourceLessonSlug: "henrietta-lacks-and-the-substituted-name",
          },
          {
            prompt: "Read against Trouillot, the Helen Lane substitution occurred at which moment first?",
            options: ["Fact creation", "Fact assembly, when journals were bound and indexed under the false name", "Fact retrieval, when researchers began citing earlier papers that used it", "Retrospective significance, when the line's importance made the name matter"],
            correctIndex: 0,
            explanation: "The source itself was made with a wrong name in it. Assembly filed it and retrieval propagated it, but creation is where it entered.",
            sourceLessonSlug: "henrietta-lacks-and-the-substituted-name",
          },
          {
            prompt: "Selma Burke's dates are:",
            options: ["1900 to 1995", "1910 to 1985, the same span as Vivien Thomas and Pauli Murray", "1869 to 1957, matching the founder of the Poro business in St. Louis", "1826 to 1898, the dates of the suffragist the Matilda effect is named for"],
            correctIndex: 0,
            explanation: "She maintained her claim on the dime design for the rest of her life after the coin's release in 1946.",
            sourceLessonSlug: "selma-burke-and-the-dime",
          },
          {
            prompt: "What did Burke win in 1943?",
            options: ["A Commission of Fine Arts competition", "A federal commission to design a circulating United States coin", "A Guggenheim fellowship that paid for her studio year in New York", "An open call from the Treasury Department for a Roosevelt memorial medal"],
            correctIndex: 0,
            explanation: "To sculpt a relief portrait of Franklin Delano Roosevelt for the Recorder of Deeds Building in Washington.",
            sourceLessonSlug: "selma-burke-and-the-dime",
          },
          {
            prompt: "Why did Burke request a sitting with Roosevelt?",
            options: ["Photographs did not give her what she wanted", "Because the competition rules required the winner to work from life", "Because the Commission of Fine Arts had rejected her first submitted study", "Because no recent photographs of the president had been released to artists"],
            correctIndex: 0,
            explanation: "She asked for and received it, which is part of what makes her claim documented rather than merely asserted.",
            sourceLessonSlug: "selma-burke-and-the-dime",
          },
          {
            prompt: "The Roosevelt dime was released on:",
            options: ["30 January 1946", "12 April 1945, the day of Roosevelt's death", "8 February 1951, the same date as the Lacks biopsy", "26 February 2024, a date this course uses for a different correction"],
            correctIndex: 0,
            explanation: "Which would have been Roosevelt's sixty-fourth birthday. Burke's relief had been unveiled the previous year.",
            sourceLessonSlug: "selma-burke-and-the-dime",
          },
          {
            prompt: "The initials on the dime are:",
            options: ["JS", "SB, which supporters of Burke's claim read as her own monogram", "FDR, placed there in place of any engraver's mark on this issue", "None; the Roosevelt dime carries no designer's initials at all"],
            correctIndex: 0,
            explanation: "For John Sinnock, the Mint's chief engraver from 1925 to 1947, whom the Mint credits with the design.",
            sourceLessonSlug: "selma-burke-and-the-dime",
          },
          {
            prompt: "John Sinnock's position was:",
            options: ["Chief engraver of the United States Mint", "Director of the United States Mint during the Roosevelt administration", "A private sculptor under contract to the Treasury for commemorative issues", "An assistant in the Commission of Fine Arts that ran the 1943 competition"],
            correctIndex: 0,
            explanation: "From 1925 to 1947. He had produced presidential medals before, including work on Roosevelt.",
            sourceLessonSlug: "selma-burke-and-the-dime",
          },
          {
            prompt: "What does the Smithsonian American Art Museum's record say about Burke's relief?",
            options: ["It was the model for Roosevelt's image on the dime", "That its resemblance to the dime is coincidental and has been overstated", "That the museum takes no position on the disputed attribution of the coin", "That it was completed after the dime was released and could not be its source"],
            correctIndex: 0,
            explanation: "The museum also says the 1944 work inspired the Roosevelt dime, which is an institutional position on Burke's side.",
            sourceLessonSlug: "selma-burke-and-the-dime",
          },
          {
            prompt: "Besides the Smithsonian American Art Museum, who else credited Burke?",
            options: ["One of Roosevelt's sons", "The United States Mint, in a statement issued after Burke's death", "The Commission of Fine Arts, which had run the original 1943 competition", "The Treasury Department, in the announcement accompanying the coin's release"],
            correctIndex: 0,
            explanation: "The Mint credits Sinnock, and its attribution has not been withdrawn.",
            sourceLessonSlug: "selma-burke-and-the-dime",
          },
          {
            prompt: "When did Burke and her supporters raise the objection?",
            options: ["As soon as the coin circulated", "Decades later, once the Smithsonian acquired her relief for its collection", "Only after Sinnock's death in 1947, when he could no longer respond to it", "In her final years, when she published an account of the 1944 sitting"],
            correctIndex: 0,
            explanation: "They asked for an investigation, which makes it a contemporaneous claim rather than a later reconstruction.",
            sourceLessonSlug: "selma-burke-and-the-dime",
          },
          {
            prompt: "What is the case for Sinnock, as this lesson sets it out?",
            options: ["His initials, the Mint's credit, and prior presidential medal work", "A signed statement from Roosevelt authorizing him to use an earlier design", "Documentary evidence that Burke's relief was not completed until after 1946", "A Commission of Fine Arts finding that the two profiles are wholly unalike"],
            correctIndex: 0,
            explanation: "Plus his denial of the accusation. A design lineage inside the Mint predating Burke's relief is at least available as an explanation.",
            sourceLessonSlug: "selma-burke-and-the-dime",
          },
          {
            prompt: "Why is a resemblance between the two profiles weak evidence of copying?",
            options: ["The underlying face constrains both portraits", "Because relief sculpture and coin engraving use incompatible techniques", "Because no photographs survive of the relief as it appeared in 1945", "Because portrait resemblance is a subjective judgment no expert can settle"],
            correctIndex: 0,
            explanation: "Both were made of the same man, from life or from good photographs, so a resemblance is expected under either hypothesis.",
            sourceLessonSlug: "selma-burke-and-the-dime",
          },
          {
            prompt: "What do some numismatic comparisons of the two profiles report?",
            options: ["Visible differences around the nose and hair", "That the two are identical when overlaid at the same scale and orientation", "That the dime's profile matches a 1936 medal rather than any Roosevelt sitting", "That the relief was itself copied from a Mint design circulated to competitors"],
            correctIndex: 0,
            explanation: "Which is evidence in the dispute without settling it, since two portraits of one face can differ and still share a source.",
            sourceLessonSlug: "selma-burke-and-the-dime",
          },
          {
            prompt: "What document does the record NOT contain, either way?",
            options: ["Any record of taking the design or of deriving it independently", "The minutes of the 1943 Commission of Fine Arts competition", "The Mint's internal correspondence about the coin's release date", "Burke's own account of her February sitting with the president"],
            correctIndex: 0,
            explanation: "What exists is an official attribution, a contemporaneous rival claim, and a later institutional credit. None of them is dispositive.",
            sourceLessonSlug: "selma-burke-and-the-dime",
          },
          {
            prompt: "Dispositive, as used in this lesson, means:",
            options: ["Sufficient on its own to settle the question", "Admissible as evidence under the rules a court would apply", "Recorded by an institution with official authority over the matter", "Made at the time of the events rather than reconstructed afterward"],
            correctIndex: 0,
            explanation: "Nothing in the Burke and Sinnock dispute is, which is why the lesson refuses to close it.",
            sourceLessonSlug: "selma-burke-and-the-dime",
          },
          {
            prompt: "What makes this case different from every other case in the course?",
            options: ["It acquired an argument and kept it", "It is the only one in which the disputed party denied the accusation", "It is the only case where an institution officially credited the wrong person", "It is the only dispute in which the person concerned was still alive to argue"],
            correctIndex: 0,
            explanation: "The others eventually acquired a portrait, a degree, an agreement, an expungement or a rename. This one did not.",
            sourceLessonSlug: "selma-burke-and-the-dime",
          },
          {
            prompt: "Why does this course teach an unresolved case at all?",
            options: ["An unresolved argument is the ordinary outcome", "Because the unresolved cases are the ones most often left out of other accounts", "Because a reader must practice on a case where no answer can be checked", "Because the Mint has indicated it will revisit the attribution in future"],
            correctIndex: 0,
            explanation: "A course teaching only the cases with tidy endings would leave a reader expecting an ending.",
            sourceLessonSlug: "selma-burke-and-the-dime",
          },
          {
            prompt: "The defensible position on the dime, according to this lesson, is that Burke's claim is:",
            options: ["Serious, documented and unproven", "Established by the Smithsonian American Art Museum's own catalog record", "Refuted by the numismatic comparisons of the two portrait profiles", "Unfalsifiable, and therefore not worth including in a history of credit"],
            correctIndex: 0,
            explanation: "And the Mint's attribution is official and uninterrogated. A reader repeating either as settled fact is making a bet.",
            sourceLessonSlug: "selma-burke-and-the-dime",
          },
          {
            prompt: "A contemporaneous claim is stronger than a later reconstruction because:",
            options: ["It was made at the time by a named person", "It can be tested against physical evidence that has since been lost", "It carries legal weight that a subsequent account cannot acquire", "It removes the possibility that the claimant was mistaken about the facts"],
            correctIndex: 0,
            explanation: "Stronger, and still not proof. Burke raised the objection as soon as the coin circulated, which is what puts her claim above a later reconstruction.",
            sourceLessonSlug: "selma-burke-and-the-dime",
          },
          {
            prompt: "An official attribution, in this lesson's sense, is:",
            options: ["Credit an institution records as fact", "A finding made after an investigation into a disputed claim", "A statement by the person credited, published under their own name", "The consensus of specialists in the field where the work was produced"],
            correctIndex: 0,
            explanation: "It carries authority without constituting evidence about derivation, which is why the Mint's credit does not close the question.",
            sourceLessonSlug: "selma-burke-and-the-dime",
          },
          {
            prompt: "Burke's relief was unveiled in which year?",
            options: ["1945", "1943, immediately after she won the competition to produce it", "1946, a few months after the dime entered circulation", "1944, the year the Smithsonian assigns to the finished work"],
            correctIndex: 0,
            explanation: "The Smithsonian American Art Museum dates the work itself to 1944; the public unveiling followed in 1945, the year before the coin.",
            sourceLessonSlug: "selma-burke-and-the-dime",
          },
          {
            prompt: "The relief was commissioned for which building?",
            options: ["The Recorder of Deeds Building in Washington", "The Franklin Delano Roosevelt Memorial on the National Mall", "The Treasury Building, adjacent to the Mint's Washington offices", "The Smithsonian American Art Museum, which still holds the work"],
            correctIndex: 0,
            explanation: "Through a Commission of Fine Arts competition Burke won in 1943.",
            sourceLessonSlug: "selma-burke-and-the-dime",
          },
          {
            prompt: "Applying Trouillot to the Burke case, which moment does the Mint's attribution belong to?",
            options: ["Fact creation", "Fact assembly, since the Mint archives its own design records", "Fact retrieval, since later writers must choose whether to consult the Mint", "Retrospective significance, since the coin's fame is what made the credit matter"],
            correctIndex: 0,
            explanation: "The attribution is a source, made at the time, and everything downstream inherits it. That is the first moment doing its work.",
            sourceLessonSlug: "four-moments-of-silence",
          },
          {
            prompt: "Which of these is NOT one of Trouillot's four moments?",
            options: ["Fact verification", "Fact creation, the making of sources", "Fact assembly, the making of archives", "Fact retrieval, the making of narratives"],
            correctIndex: 0,
            explanation: "The fourth is retrospective significance, the making of history in the final instance. Verification is not among them.",
            sourceLessonSlug: "four-moments-of-silence",
          },
          {
            prompt: "Henrietta Lacks was how old when the biopsy was taken?",
            options: ["31", "45, which is why the cancer had already advanced by the time of treatment", "21, which is part of why the family's later consent claim was contested", "Unrecorded, because the hospital's admission papers have not survived"],
            correctIndex: 0,
            explanation: "She was being treated for cervical cancer at Johns Hopkins Hospital in February 1951.",
            sourceLessonSlug: "henrietta-lacks-and-the-substituted-name",
          },
          {
            prompt: "What made the HeLa cells unlike previous human cells in culture?",
            options: ["They kept dividing", "They could be frozen and revived without any loss of viability", "They were the first to be grown from a tumor rather than from healthy tissue", "They were the first for which a complete genome sequence was ever published"],
            correctIndex: 0,
            explanation: "Which is why Gey could distribute them freely and why they spread worldwide within a few years.",
            sourceLessonSlug: "henrietta-lacks-and-the-substituted-name",
          },
          {
            prompt: "Controlled access, in the 2013 arrangement, means requests are:",
            options: ["Reviewed by a committee including two Lacks family members", "Approved only where the research has no potential commercial application", "Granted automatically to federally funded investigators and denied to others", "Charged a licensing fee that is paid directly to the Lacks family estate"],
            correctIndex: 0,
            explanation: "It governs use of HeLa genomic data, and was agreed with the family after three meetings.",
            sourceLessonSlug: "henrietta-lacks-and-the-substituted-name",
          },
          {
            prompt: "Taking Sections 4 and 5 together, the deepest problem with an old author line is that:",
            options: ["It cannot be reopened", "It was never indexed, so no record of the original decision survives", "It is protected by copyright and cannot be reproduced in a correction", "Journals of the period did not record who had approved each submission"],
            correctIndex: 0,
            explanation: "Which is why the corrections available are eponym changes, portraits, degrees and settlements, none of which touches the document itself.",
            sourceLessonSlug: "four-moments-of-silence",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 6 — How a correction actually happens, and what it reaches
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "anatomy-of-a-correction",
      title: "21 · Who corrects a record, and with what",
      section: "Section 6 · How a correction happens",
      body: `Corrections are not one thing. They are made by five kinds of actor using six or seven instruments, and each instrument reaches a different part of the problem. Knowing which is which is the difference between an effective demand and a satisfying gesture.

**Five actors, with different powers.** The **person** can state a claim, publish a memoir, give an interview. It is the fastest route and the weakest in the record, because it is self-interested by construction, which is why Burke's contemporaneous objection persuaded institutions but never the Mint. The **family** has something the person often does not: standing to negotiate and standing to sue, which is the entire mechanism of the Lacks agreements. A **scholar or biographer** produces the document later actors cite; Rossiter, Bundles and Colvin's biographer Phillip Hoose all function this way. An **institution** can rename, appoint, hang a portrait, award a degree, or change a catalog record. A **court or legislature** is the only actor that can vacate a legal record.

**The instruments, and what each one can actually touch.** An **erratum or retraction** reaches the publication itself, and only while the venue still exists and the record is still live. An **eponym change** reaches every future utterance of a name and never the original document. An **honor**, meaning a portrait, a degree, an appointment, a building, reaches institutional memory and never authorship. A **catalog or archival change** reaches Trouillot's assembly moment, so everything retrieved downstream inherits it, which is why the Smithsonian American Art Museum's record does more work in the Burke case than any statement Burke made. A **negotiated agreement** reaches future conduct. A **court order** reaches the legal record. A **settlement** reaches the parties and nobody else.

**Two structural facts that explain most of what follows.** First, **a correction arrives through whichever instrument is available, not whichever is appropriate.** Nobody chose to honor Vivien Thomas with a portrait instead of an author line; the author line was not reopenable and the portrait was. Second, and following from it, **the available instrument is usually the one furthest from the original harm.** A degree is not a byline. A rename is not a citation. A confidential settlement is not an admission.

**And the timing is not random either.** Look at the intervals this course has already counted: twenty seven years, thirty two, sixty six, seventy eight. Corrections cluster around the moment when the last person who could be embarrassed has retired or died, and around anniversaries, which are cheap. That is not cynicism, it is a pattern with dates attached, and it predicts when to expect the next one.

:::reveal Name the five kinds of actor who make corrections and one power each has. ||| The person, who can state a claim but is self-interested by construction. The family, which has standing to negotiate and to sue. A scholar, who produces the document later actors cite. An institution, which can rename, appoint, honor or change a catalog record. A court or legislature, the only actor that can vacate a legal record.

:::reveal Which instrument reaches Trouillot's assembly moment, and why does that matter? ||| A catalog or archival record change, because everything retrieved downstream inherits it. That is why a museum's catalog line does more work in the Burke case than anything Burke herself said.

:::reveal State the two structural facts about how corrections arrive. ||| A correction comes through whichever instrument is available rather than whichever is appropriate. And the available instrument is usually the one furthest from the original harm: a degree is not a byline, a rename is not a citation.

## Vocabulary
- **Erratum**: a published correction to a live publication, the only instrument that reaches the original document, and useless once the venue or the record is closed.
- **Eponym change**: renaming a thing to add a contributor, which reaches all future usage and never the original record.
- **Standing**: the legal position that lets a person or family negotiate or sue, which the contributor themselves often does not have.
- **Available instrument**: the tool that actually exists in a given case, which usually sits further from the original harm than the appropriate one would.

## Sources
Trouillot, M.-R. (1995). *Silencing the past: Power and the production of history*. Beacon Press.`,
    },
    {
      slug: "claudette-colvin-and-the-choice-not-to-name",
      title: "22 · Claudette Colvin, and the decision not to use a name",
      section: "Section 6 · How a correction happens",
      body: `Every mechanism so far has been something that happens to a name. This one is a decision somebody makes about a name, on purpose, for reasons that can be defensible and costly at the same time.

**What happened.** Claudette Colvin was born on 5 September 1939. On 2 March 1955, aged fifteen, she refused to give up her seat to a white woman on a segregated Montgomery bus, nine months before Rosa Parks did the same thing. She was charged with disturbing the peace, violating the segregation ordinance, and assaulting a police officer. Her lawyer, Fred Gray, got the first two charges dismissed on appeal. The assault charge stayed, and she was given probation and a fine.

**The decision.** Montgomery's civil rights leadership considered building a campaign around her case and did not. Her biographer Phillip Hoose told the *New York Times* in 2009 that they worried they could not win with her, and described the words used about her at the time, mouthy, emotional, feisty, against the way Rosa Parks was seen, as stolid, calm and unflappable. Note what that is evidence of and what it is not: it is a biographer's account of the reasoning, given decades later, and this course reports it as that rather than as the leadership's own recorded minutes.

**Why the decision was not stupid.** A campaign choosing a plaintiff is choosing who will be cross-examined, photographed, and attacked in the press for years. That is a strategic judgment, and the same instrument is taught in the sibling course on the NAACP's litigation. A movement that picks badly loses the case and the people it was for.

**And why it still cost her the credit.** The bus segregation ordinance was not struck down by the boycott. It was struck down in *Browder v. Gayle*, a federal case with four women as plaintiffs, in which Colvin was one and a central witness. The district court ruled on 4 June 1956 and the Supreme Court affirmed on 13 November 1956. So Colvin is in the case that actually won, and out of the story that is actually told, and both of those are true at once because a campaign made a decision about a name.

**The correction, sixty six years later.** In October 2021 Colvin petitioned to have her juvenile record expunged, because the assault conviction was still on it. Judge Calvin Williams of the Montgomery County juvenile court signed the order on 24 November 2021, and it was granted that December. She was eighty two. She died in January 2026, aged eighty six; sources give slightly different days for her death and this course does not pick one.

**What the expungement was and was not.** It was a court order, which means it reached the one thing only a court can reach: the legal record. It did not put her in the story. Nothing in that order touches the moment of retrospective significance, which is where the credit actually went missing.

:::reveal What was Colvin charged with, and which charge survived appeal? ||| Disturbing the peace, violating the segregation ordinance, and assaulting a police officer. Fred Gray got the first two dismissed on appeal; the assault charge stayed, with probation and a fine.

:::reveal Why is the decision not to build a campaign around Colvin described as defensible? ||| Because choosing a plaintiff is choosing who will be cross-examined, photographed and attacked in the press for years, and a campaign that picks badly loses the case and the people it was for. It is a strategic instrument, not a slight.

:::reveal What did Colvin's 2021 expungement reach, and what did it leave untouched? ||| It was a court order, so it reached the legal record, which only a court can reach. It did not reach retrospective significance, which is where the credit went missing, so it did not put her in the story.

## Vocabulary
- **Plaintiff selection**: a campaign's strategic choice of whose case to litigate, which decides who is named and who is not.
- **Browder v. Gayle**: the 1956 federal case, with four women as plaintiffs, that actually struck down Montgomery bus segregation.
- **Expungement**: a court order destroying a legal record, the one correction instrument reserved to a court.
- **Biographer's account**: a reconstruction of reasoning given decades later, which is evidence about the reasoning and not a record of it.

## Sources
Equal Justice Initiative. (n.d.). *EJI remembers civil rights pioneer Claudette Colvin*. https://eji.org/news/eji-remembers-civil-rights-pioneer-claudette-colvin/

Smithsonian Magazine. (n.d.). *Months before Rosa Parks made headlines, Claudette Colvin refused to give up her seat for a white woman on a segregated bus*. https://www.smithsonianmag.com/smart-news/months-before-rosa-parks-made-headlines-claudette-colvin-refused-to-give-up-her-seat-for-a-white-woman-on-a-segregated-bus-180988009/`,
    },
    {
      slug: "what-a-correction-cannot-repair",
      title: "23 · The ledger, and the check you can run yourself",
      section: "Section 6 · How a correction happens",
      body: `Put the six cases in one column and the years in another, and the shape of the whole subject shows up at once.

| Case | First public act | Correction, and what kind | Interval |
| --- | --- | --- | --- |
| Vivien Thomas | 1944 operation | 1971 portrait; 1976 honorary degree and faculty post | 27 and 32 years |
| Pauli Murray | 1944 seminar paper | 1971 names on the Reed brief, an author's own choice | 27 years |
| Henrietta Lacks | 1951 biopsy | 1973 name restored; 2013 access agreement; 2023 settlement | 22, 62 and 72 years |
| Claudette Colvin | 1955 arrest | 2021 expungement, a court order | 66 years |
| Annie Turnbo Malone | business from 1902 | no correction; a live dispute | none |
| Selma Burke | 1946 dime | no correction; a museum record and a live dispute | none |

**What a correction repairs.** The record going forward, which is real. A reader's default, which is what a catalog line or a rename actually changes. Sometimes money, in the two cases here where somebody had standing to sue or to negotiate.

**What it does not repair.** The career, which is the compounding the Matthew effect was describing: a name missing from a 1945 paper is missing from every citation of that paper for eighty years, and no 1976 degree pays that back. The original document, which cannot be reopened. And the choice the person would have made with the credit at the time, which is the part nobody can even estimate.

**One warning, because this course is itself an instance.** Attention to corrections obeys the same rule as attention to anything else: it flows toward the cases that are already known. Six people are named here because their cases are documented well enough to teach. The mechanisms in this course predict that the great majority of comparable cases left no retrievable trace at all, and a reader who finishes with six names and a feeling of completion has learned the opposite of the argument.

**The check, in five questions.** Run it on any credit claim, including one you agree with.

1. **Which document was supposed to record this?** An author line, an inventor declaration, a court file, an accession record. If there is no such document, say so before going further.
2. **What did that document's rule actually decide?** Naming, ownership, both, neither. It never decided who did the work.
3. **Is the gap isolated or surrounded?** Corroboration nearby means a record problem; silence all around often means an absence.
4. **Who is claiming, and what is their interest?** Not to discount them. To know which part of their evidence to read closely.
5. **What would settle it, and does that thing exist?** If nothing would, the honest answer is that the claim is serious and unproven, and you say that instead of picking.

:::reveal Which two of the six cases have no correction at all, and what do they have instead? ||| Annie Turnbo Malone and Selma Burke. Each has a live dispute, and Burke additionally has a museum catalog record that credits her while the official attribution does not.

:::reveal Name the three things a correction cannot repair. ||| The career, because the missing name is missing from every citation of that paper for decades and no later honor pays that back. The original document, which cannot be reopened. And the choice the person would have made with the credit at the time.

:::reveal Give the five questions of the check, in order. ||| Which document was supposed to record this? What did that document's rule actually decide? Is the gap isolated or surrounded by more silence? Who is claiming, and what is their interest? And what would settle it, and does that thing exist?

## Vocabulary
- **Compounding**: the Matthew effect measured over time, where a name missing from one document is missing from everything that cites it afterward.
- **Reader's default**: the version a person arrives at without investigating, which a catalog line or a rename can change and a memoir usually cannot.
- **Survivorship in corrections**: the tendency for attention to reach only the cases already documented, which this course is itself an instance of.
- **Serious and unproven**: the correct verdict when no available evidence would settle a claim, and the alternative to picking a side.

## Sources
Merton, R. K. (1968). The Matthew effect in science. *Science, 159*(3810), 56-63. https://doi.org/10.1126/science.159.3810.56

Trouillot, M.-R. (1995). *Silencing the past: Power and the production of history*. Beacon Press.`,
    },
    {
      slug: "quiz-how-corrections-happen",
      title: "24 · Knowledge check: how a correction happens",
      section: "Section 6 · How a correction happens",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "How many kinds of actor make corrections, in this lesson's account?",
            options: ["Five", "Three, namely the person affected, an institution, and a court of competent jurisdiction", "Seven, matching the number of distinct instruments the lesson goes on to describe", "Two, since only institutions and courts have the authority to change a public record"],
            correctIndex: 0,
            explanation: "The person, the family, a scholar or biographer, an institution, and a court or legislature.",
            sourceLessonSlug: "anatomy-of-a-correction",
          },
          {
            prompt: "Why is a correction made by the person themselves the weakest in the record?",
            options: ["It is self-interested by construction", "Because it is usually made too long after the events to be reliable evidence", "Because a person cannot publish in a venue an institution would treat as citable", "Because the law gives no weight to an uncorroborated statement about one's own work"],
            correctIndex: 0,
            explanation: "It is also the fastest route, which is why Burke's objection persuaded institutions and never moved the Mint.",
            sourceLessonSlug: "anatomy-of-a-correction",
          },
          {
            prompt: "What does a family have that the contributor often does not?",
            options: ["Standing to negotiate and to sue", "Access to private papers that the contributor destroyed during their lifetime", "Immunity from the accusation of self-interest when they press a claim publicly", "The ability to compel an institution to reopen a closed publication record"],
            correctIndex: 0,
            explanation: "Which is the entire mechanism behind the Lacks agreements and the 2023 settlement.",
            sourceLessonSlug: "anatomy-of-a-correction",
          },
          {
            prompt: "What is a scholar or biographer's function in a correction?",
            options: ["Producing the document later actors cite", "Persuading the institution directly, since scholars carry standing that families lack", "Locating physical evidence that the participants themselves were unaware of", "Adjudicating between the competing claims once both sides have been heard"],
            correctIndex: 0,
            explanation: "Rossiter, Bundles and Colvin's biographer Phillip Hoose all work this way.",
            sourceLessonSlug: "anatomy-of-a-correction",
          },
          {
            prompt: "Which actor is the only one able to vacate a legal record?",
            options: ["A court or legislature", "An institution, acting through its own governing board and general counsel", "The family, provided every surviving descendant joins the petition", "A scholar, by publishing a finding that the record was created in error"],
            correctIndex: 0,
            explanation: "Which is why Colvin's 2021 expungement took a judge and could not have come from any other actor in this list.",
            sourceLessonSlug: "anatomy-of-a-correction",
          },
          {
            prompt: "Which instrument reaches the original publication itself?",
            options: ["An erratum or retraction", "An eponym change, which alters how the work is named in every later citation", "A catalog record change, which propagates to everything retrieved downstream", "An honorary degree, which the awarding institution records permanently"],
            correctIndex: 0,
            explanation: "And only while the venue still exists and the record is still live, which is why it was never available to Vivien Thomas.",
            sourceLessonSlug: "anatomy-of-a-correction",
          },
          {
            prompt: "An eponym change reaches:",
            options: ["Every future utterance, and never the original document", "The original document, by amending the author line retroactively", "Only the institution that adopts it, with no effect on wider usage", "The legal record, since a procedure's name is registered with a regulator"],
            correctIndex: 0,
            explanation: "Which is exactly the trade the Blalock-Thomas-Taussig rename makes: all future usage, and nothing in the 1945 paper.",
            sourceLessonSlug: "anatomy-of-a-correction",
          },
          {
            prompt: "An honor such as a portrait, degree or appointment reaches:",
            options: ["Institutional memory, and never authorship", "Authorship, by establishing the recipient as a member of the faculty retrospectively", "The legal record, since an honorary degree is recorded in a public register", "Fact retrieval, because researchers search award lists before searching archives"],
            correctIndex: 0,
            explanation: "It is the fourth currency from lesson 1, and it is a different currency from the one that went missing.",
            sourceLessonSlug: "anatomy-of-a-correction",
          },
          {
            prompt: "A catalog or archival record change reaches which of Trouillot's moments?",
            options: ["Assembly", "Creation, since the catalog entry becomes a new primary source about the work", "Retrospective significance, because cataloguers decide what is worth describing", "None of them, since a catalog is a finding aid rather than part of the record"],
            correctIndex: 0,
            explanation: "So everything retrieved downstream inherits it, which is why a museum's record does more work in the Burke case than Burke's own statements did.",
            sourceLessonSlug: "anatomy-of-a-correction",
          },
          {
            prompt: "A settlement reaches:",
            options: ["The parties and nobody else", "Every comparable claimant, by establishing the value of a similar claim", "The public record, since the terms must be filed with the court that approved it", "Future conduct across an industry, which is why companies resist settling at all"],
            correctIndex: 0,
            explanation: "A confidential settlement with no ruling on the merits creates no precedent, whatever it did for the people who signed it.",
            sourceLessonSlug: "anatomy-of-a-correction",
          },
          {
            prompt: "The first structural fact about corrections is that they arrive through:",
            options: ["Whichever instrument is available", "The actor with the strongest claim to authority over the original record", "The fastest route, which is why most corrections come from the person affected", "A negotiated process in which all interested parties agree on the remedy"],
            correctIndex: 0,
            explanation: "Not whichever is appropriate. Nobody chose a portrait over an author line for Thomas; the author line was not reopenable and the portrait was.",
            sourceLessonSlug: "anatomy-of-a-correction",
          },
          {
            prompt: "The second structural fact is that the available instrument is usually:",
            options: ["The one furthest from the original harm", "The cheapest one, since institutions optimize for cost when correcting a record", "Controlled by the institution that caused the harm in the first place", "Unavailable to the person affected, who must always work through an intermediary"],
            correctIndex: 0,
            explanation: "A degree is not a byline, a rename is not a citation, and a confidential settlement is not an admission.",
            sourceLessonSlug: "anatomy-of-a-correction",
          },
          {
            prompt: "This lesson says corrections cluster around:",
            options: ["Retirements, deaths, and anniversaries", "Court terms, since litigation drives most institutional acknowledgments", "Leadership changes, when a new administration reviews its predecessor's record", "Funding cycles, because an institution needs a budget line to act on a claim"],
            correctIndex: 0,
            explanation: "Around the moment the last person who could be embarrassed has gone, and around anniversaries, which are cheap. It is a pattern with dates attached.",
            sourceLessonSlug: "anatomy-of-a-correction",
          },
          {
            prompt: "Standing, as this lesson uses the term, means:",
            options: ["The legal position that lets someone negotiate or sue", "The reputation an institution has for correcting its own historical record", "A scholar's authority to be cited by later writers on the same subject", "The formal recognition an eponym confers on a named contributor"],
            correctIndex: 0,
            explanation: "The contributor themselves often does not have it, which is why so many corrections in this field come through families.",
            sourceLessonSlug: "anatomy-of-a-correction",
          },
          {
            prompt: "Why was an erratum never available in the Vivien Thomas case?",
            options: ["A 1945 author line cannot be reopened", "Because JAMA's editorial policy at the time forbade adding authors after acceptance", "Because Thomas himself never requested one during his lifetime", "Because the operation was reported at a medical society meeting rather than in print"],
            correctIndex: 0,
            explanation: "The record is closed, which forces the correction into instruments that reach institutional memory instead.",
            sourceLessonSlug: "anatomy-of-a-correction",
          },
          {
            prompt: "Claudette Colvin was born on:",
            options: ["5 September 1939", "20 November 1910, the same year as Vivien Thomas and Pauli Murray", "2 March 1955, the date this course associates with her arrest instead", "9 August 1869, matching the founder of the Poro business in St. Louis"],
            correctIndex: 0,
            explanation: "She was fifteen at the time of the March 1955 arrest.",
            sourceLessonSlug: "claudette-colvin-and-the-choice-not-to-name",
          },
          {
            prompt: "The Colvin arrest took place on:",
            options: ["2 March 1955", "1 December 1955, the date of the more widely reported Montgomery arrest", "4 June 1956, when the federal district court ruled in Browder v. Gayle", "24 November 2021, when a judge signed the order expunging her record"],
            correctIndex: 0,
            explanation: "Nine months before Rosa Parks did the same thing on the same city's buses.",
            sourceLessonSlug: "claudette-colvin-and-the-choice-not-to-name",
          },
          {
            prompt: "What was Colvin charged with?",
            options: ["Disturbing the peace, segregation, and assaulting an officer", "Trespass and refusal to obey a lawful order, both misdemeanors under city code", "Only violation of the segregation ordinance, which carried a fine and no probation", "Conspiracy to organize an illegal boycott of a public transportation system"],
            correctIndex: 0,
            explanation: "Fred Gray got the first two dismissed on appeal. The assault charge stayed, with probation and a fine.",
            sourceLessonSlug: "claudette-colvin-and-the-choice-not-to-name",
          },
          {
            prompt: "Which charge survived Colvin's appeal?",
            options: ["Assaulting a police officer", "Disturbing the peace, which carried the probation term she served", "Violating the segregation ordinance, which the appeal court declined to review", "All three, which is why the record required an expungement sixty six years later"],
            correctIndex: 0,
            explanation: "That surviving conviction is the specific thing the 2021 expungement destroyed.",
            sourceLessonSlug: "claudette-colvin-and-the-choice-not-to-name",
          },
          {
            prompt: "Who was Colvin's lawyer?",
            options: ["Fred Gray", "Thurgood Marshall, directing the NAACP legal department at the time", "Spottswood Robinson, who had taught the Howard seminar a decade earlier", "Calvin Williams, the judge who later signed her expungement order"],
            correctIndex: 0,
            explanation: "He got two of the three charges dismissed on appeal and later brought the federal case.",
            sourceLessonSlug: "claudette-colvin-and-the-choice-not-to-name",
          },
          {
            prompt: "What does this course cite as the source for the leadership's reasoning about Colvin?",
            options: ["Her biographer, speaking to a newspaper in 2009", "The Montgomery Improvement Association's own contemporaneous meeting minutes", "Colvin's testimony in Browder v. Gayle, where she was asked about the decision", "An Equal Justice Initiative investigation of the boycott's organizing records"],
            correctIndex: 0,
            explanation: "Phillip Hoose told the New York Times that they worried they could not win with her. The lesson reports that as a biographer's account, not as minutes.",
            sourceLessonSlug: "claudette-colvin-and-the-choice-not-to-name",
          },
          {
            prompt: "Why does the lesson call the decision not to center Colvin defensible?",
            options: ["Choosing a plaintiff means choosing who gets attacked for years", "Because her conviction for assault would have been raised against the whole campaign", "Because a juvenile plaintiff could not have brought a federal constitutional claim", "Because the leadership had already committed to a different legal strategy entirely"],
            correctIndex: 0,
            explanation: "It is a strategic instrument, taught in the sibling course on the NAACP's litigation, and a campaign that picks badly loses the case and the people it was for.",
            sourceLessonSlug: "claudette-colvin-and-the-choice-not-to-name",
          },
          {
            prompt: "Which case actually struck down Montgomery bus segregation?",
            options: ["Browder v. Gayle", "Brown v. Board of Education, which the Montgomery courts applied to buses", "Reed v. Reed, the brief on which Ginsburg named Murray and Kenyon", "Plessy v. Ferguson, which was overruled directly in the Montgomery litigation"],
            correctIndex: 0,
            explanation: "A federal case with four women as plaintiffs, in which Colvin was one and a central witness. The boycott did not strike the ordinance down.",
            sourceLessonSlug: "claudette-colvin-and-the-choice-not-to-name",
          },
          {
            prompt: "The Browder v. Gayle district court ruling came on:",
            options: ["4 June 1956", "13 November 1956, which is the date of the Supreme Court's affirmance", "2 March 1955, the same day as the arrest that began the litigation", "1 December 1955, when the Montgomery bus boycott itself began"],
            correctIndex: 0,
            explanation: "The Supreme Court affirmed on 13 November 1956, five months later.",
            sourceLessonSlug: "claudette-colvin-and-the-choice-not-to-name",
          },
          {
            prompt: "How many plaintiffs did Browder v. Gayle have?",
            options: ["Four women", "One, Aurelia Browder, with the others appearing only as witnesses", "Twelve, drawn from every Montgomery neighborhood served by the bus lines", "Two, in a case deliberately kept small so it could move quickly through the courts"],
            correctIndex: 0,
            explanation: "Colvin was one of them and a central witness, which is why she is in the case that won and out of the story that is told.",
            sourceLessonSlug: "claudette-colvin-and-the-choice-not-to-name",
          },
          {
            prompt: "When did Colvin petition to have her juvenile record expunged?",
            options: ["October 2021", "November 2021, the month the order was signed by the court", "1956, immediately after the Supreme Court affirmed in Browder v. Gayle", "2009, when her biographer published the account of the leadership's decision"],
            correctIndex: 0,
            explanation: "The order was signed on 24 November 2021 and granted that December, when she was eighty two.",
            sourceLessonSlug: "claudette-colvin-and-the-choice-not-to-name",
          },
          {
            prompt: "Which judge signed Colvin's expungement order?",
            options: ["Calvin Williams", "Fred Gray, who had represented her at the original trial in 1955", "Frank Johnson, who had sat on the Browder v. Gayle district panel", "The order was signed by the clerk of the court rather than by a judge"],
            correctIndex: 0,
            explanation: "Of the Montgomery County juvenile court, on 24 November 2021.",
            sourceLessonSlug: "claudette-colvin-and-the-choice-not-to-name",
          },
          {
            prompt: "How does this course handle the date of Colvin's death?",
            options: ["It gives the month and year and declines to pick a day", "It follows the earliest published report and notes no disagreement exists", "It omits the death entirely, since it postdates the events the course teaches", "It gives both candidate dates in the reference list and neither in the lesson"],
            correctIndex: 0,
            explanation: "She died in January 2026, aged eighty six, and sources give slightly different days, so the lesson reports the disagreement instead of choosing.",
            sourceLessonSlug: "claudette-colvin-and-the-choice-not-to-name",
          },
          {
            prompt: "What did the expungement reach?",
            options: ["The legal record", "The historical record, by requiring archives to add her to accounts of the boycott", "Institutional memory, since Montgomery renamed a public building in her honor", "Retrospective significance, which is where the credit had gone missing"],
            correctIndex: 0,
            explanation: "A court order reaches the one thing only a court can reach. It did not put her in the story.",
            sourceLessonSlug: "claudette-colvin-and-the-choice-not-to-name",
          },
          {
            prompt: "The Colvin case adds which mechanism to this course?",
            options: ["A deliberate decision not to use a name", "A misattribution of her contribution to a more eminent colleague", "The disappearance of a name into a corporate assignee's ownership", "The substitution of a false name in the place of a true one"],
            correctIndex: 0,
            explanation: "Every other mechanism here is something that happens to a name. This one is a choice somebody makes about a name, on purpose.",
            sourceLessonSlug: "claudette-colvin-and-the-choice-not-to-name",
          },
          {
            prompt: "Colvin's age at the time of the arrest was:",
            options: ["Fifteen", "Eighteen, which is why she was tried in the adult rather than the juvenile court", "Twenty two, the same age at which she later testified in the federal case", "Eighty two, which is her age at the time of the expungement instead"],
            correctIndex: 0,
            explanation: "Which is also why the record that survived was a juvenile record, and why an expungement was the available instrument in 2021.",
            sourceLessonSlug: "claudette-colvin-and-the-choice-not-to-name",
          },
          {
            prompt: "The words Hoose reported being used about Colvin were contrasted with descriptions of Rosa Parks as:",
            options: ["Stolid, calm and unflappable", "Educated, professional and well connected within the Montgomery community", "Older, married and therefore harder for the local press to attack in public", "Experienced in organizing, having worked with the NAACP for over a decade"],
            correctIndex: 0,
            explanation: "Against mouthy, emotional and feisty for Colvin. The lesson reports this as a biographer's decades-later account of the reasoning.",
            sourceLessonSlug: "claudette-colvin-and-the-choice-not-to-name",
          },
          {
            prompt: "In the course's ledger, which case shows an interval of 66 years?",
            options: ["Claudette Colvin", "Vivien Thomas, from the 1944 operation to the portrait ceremony", "Henrietta Lacks, from the 1951 biopsy to the NIH access agreement", "Pauli Murray, from the 1944 seminar paper to the Reed v. Reed brief"],
            correctIndex: 0,
            explanation: "1955 arrest to 2021 expungement. Thomas is 27 and 32 years, Murray 27, and Lacks 22, 62 and 72.",
            sourceLessonSlug: "what-a-correction-cannot-repair",
          },
          {
            prompt: "Which two cases in the ledger have no correction at all?",
            options: ["Annie Turnbo Malone and Selma Burke", "Selma Burke and Claudette Colvin, both of whose claims remain disputed", "Henrietta Lacks and Annie Turnbo Malone, neither of whom left surviving records", "Vivien Thomas and Pauli Murray, whose author lines were never reopened"],
            correctIndex: 0,
            explanation: "Each has a live dispute instead. Burke additionally has a museum catalog record crediting her while the official attribution does not.",
            sourceLessonSlug: "what-a-correction-cannot-repair",
          },
          {
            prompt: "The intervals in the Lacks row of the ledger are:",
            options: ["22, 62 and 72 years", "27 and 32 years, matching the two corrections in the Thomas row", "66 years, from the taking of the cells to the confidential settlement", "None, because the case is still in litigation and no correction has landed"],
            correctIndex: 0,
            explanation: "1951 to the 1973 name restoration, the 2013 access agreement, and the 2023 settlement.",
            sourceLessonSlug: "what-a-correction-cannot-repair",
          },
          {
            prompt: "Which of these does a correction genuinely repair?",
            options: ["The record going forward", "The compounding of citations that accumulated while the name was missing", "The career the person would have had if they had been named at the time", "The original document, once an institution formally acknowledges the error"],
            correctIndex: 0,
            explanation: "Along with a reader's default, and sometimes money where somebody had standing to sue or negotiate.",
            sourceLessonSlug: "what-a-correction-cannot-repair",
          },
          {
            prompt: "Why does a later honor not repay a missing author line?",
            options: ["The citations compounded for decades without the name", "Because an honorary degree carries no professional standing in the field", "Because institutions award honors only after the recipient has stopped working", "Because the honor is granted by a different body than the one that published"],
            correctIndex: 0,
            explanation: "That compounding is what the Matthew effect was describing in the first place, and no 1976 degree pays back eighty years of it.",
            sourceLessonSlug: "what-a-correction-cannot-repair",
          },
          {
            prompt: "Which of the following does this lesson say nobody can even estimate?",
            options: ["What the person would have done with the credit at the time", "How many comparable cases left no retrievable trace in any archive", "How long an institution will take to act once a claim is made public", "Whether a settlement's confidential terms were adequate compensation"],
            correctIndex: 0,
            explanation: "The career and the original document are at least describable losses. The counterfactual choice is not.",
            sourceLessonSlug: "what-a-correction-cannot-repair",
          },
          {
            prompt: "This course warns that attention to corrections obeys which rule?",
            options: ["It flows toward cases that are already known", "It follows the severity of the original harm rather than the fame of the case", "It concentrates on cases where a family survives to press the claim", "It arrives only once an institution has been publicly embarrassed"],
            correctIndex: 0,
            explanation: "The same rule as attention to anything else, which makes this course itself an instance of the mechanism it teaches.",
            sourceLessonSlug: "what-a-correction-cannot-repair",
          },
          {
            prompt: "A reader who finishes this course with six names and a sense of completion has:",
            options: ["Learned the opposite of the argument", "Understood the mechanisms but missed the chronology connecting them", "Retained the cases the course considers most important to remember", "Met the course's stated objective, which is to teach six documented cases"],
            correctIndex: 0,
            explanation: "The mechanisms predict that the great majority of comparable cases left no retrievable trace at all.",
            sourceLessonSlug: "what-a-correction-cannot-repair",
          },
          {
            prompt: "The first question of the check is:",
            options: ["Which document was supposed to record this?", "Who is making the claim, and what interest do they have in its outcome?", "Is the gap in the record isolated, or is it surrounded by further silence?", "What evidence would settle this question, and does that evidence exist?"],
            correctIndex: 0,
            explanation: "An author line, an inventor declaration, a court file, an accession record. If no such document exists, say so before going further.",
            sourceLessonSlug: "what-a-correction-cannot-repair",
          },
          {
            prompt: "The second question of the check asks what the document's rule:",
            options: ["Actually decided", "Was intended to achieve when the institution first adopted it", "Requires of a contributor who wishes to challenge an omission", "Says about who may amend the record after publication"],
            correctIndex: 0,
            explanation: "Naming, ownership, both, or neither. It never decided who did the work.",
            sourceLessonSlug: "what-a-correction-cannot-repair",
          },
          {
            prompt: "The third question of the check concerns whether the gap is:",
            options: ["Isolated or surrounded", "Recent or historical, since older records are held to a different standard", "Documented in more than one archive holding comparable material", "Explained by any surviving statement from the institution involved"],
            correctIndex: 0,
            explanation: "Corroboration nearby means a record problem. Silence all around often means an absence.",
            sourceLessonSlug: "what-a-correction-cannot-repair",
          },
          {
            prompt: "Asking who is claiming and what their interest is serves to:",
            options: ["Show which part of their evidence to read closely", "Establish whether the claim can be admitted as evidence at all", "Discount claims made by descendants and estates on principle", "Rank competing claims by the credibility of the people making them"],
            correctIndex: 0,
            explanation: "Not to discount them. It is the same handling the course gave A'Lelia Bundles in Section 2.",
            sourceLessonSlug: "what-a-correction-cannot-repair",
          },
          {
            prompt: "If nothing would settle a claim, the honest answer is that it is:",
            options: ["Serious and unproven", "Most likely false, since an unfalsifiable claim carries no evidentiary weight", "A matter of interpretation on which reasonable readers may simply differ", "Best omitted, since a course cannot responsibly teach an unresolvable dispute"],
            correctIndex: 0,
            explanation: "And you say that instead of picking, which is rule two from Section 1 applied at the end of the check.",
            sourceLessonSlug: "what-a-correction-cannot-repair",
          },
          {
            prompt: "Compounding, as this lesson defines it, is:",
            options: ["The Matthew effect measured over time", "The accumulation of separate corrections into a single institutional acknowledgment", "The combination of the Matthew and Matilda effects operating on one person", "The growth in the number of contributors falling below the authorship bar"],
            correctIndex: 0,
            explanation: "A name missing from one document is missing from everything that cites it afterward, for as long as the document is cited.",
            sourceLessonSlug: "what-a-correction-cannot-repair",
          },
          {
            prompt: "A reader's default is best changed by:",
            options: ["A catalog line or a rename", "A memoir, since a first-person account is the most persuasive form of evidence", "A confidential settlement, which signals that the claim had merit", "A court order, which carries more authority than any other instrument"],
            correctIndex: 0,
            explanation: "The version a person arrives at without investigating is set by what they retrieve, which is why the assembly moment matters most.",
            sourceLessonSlug: "what-a-correction-cannot-repair",
          },
          {
            prompt: "In the ledger, Pauli Murray's correction is distinctive because it was made by:",
            options: ["Another author, by choice", "A court, which vacated the record of the original seminar decision", "An institution, which named a residential college and a historic site", "The family, which negotiated recognition decades after Murray's death"],
            correctIndex: 0,
            explanation: "Ginsburg put Murray's and Kenyon's names on the Reed brief in 1971, which nobody required her to do.",
            sourceLessonSlug: "what-a-correction-cannot-repair",
          },
          {
            prompt: "Which correction instrument did the Lacks case use that no other case here did?",
            options: ["A negotiated agreement about future conduct", "An eponym change adopted by hospitals in more than one country", "An honorary degree awarded by the institution that held the record", "A published erratum correcting the original paper's author line"],
            correctIndex: 0,
            explanation: "The 2013 controlled-access arrangement governs how HeLa genomic data may be used going forward, which is a different kind of reach than an honor or an order.",
            sourceLessonSlug: "anatomy-of-a-correction",
          },
          {
            prompt: "Why does the lesson say Burke's contemporaneous objection persuaded institutions but not the Mint?",
            options: ["A person's own claim is self-interested by construction", "Because the Mint had already destroyed the design records by the time she objected", "Because she raised it too late, after the coin had been in circulation for years", "Because museums accept artist statements as evidence and federal agencies cannot"],
            correctIndex: 0,
            explanation: "It is the fastest instrument and the weakest in the record, which is the general limit on corrections made by the person affected.",
            sourceLessonSlug: "anatomy-of-a-correction",
          },
          {
            prompt: "Which pair of instruments reaches future conduct rather than a past record?",
            options: ["A negotiated agreement and an eponym change", "An erratum and a court order, both of which alter what is already written", "An honorary degree and a portrait, both of which record a past contribution", "A catalog change and a settlement, both of which are retrospective in effect"],
            correctIndex: 0,
            explanation: "An agreement governs what people may do next; a rename governs what everyone will say next. Neither touches the original document.",
            sourceLessonSlug: "anatomy-of-a-correction",
          },
          {
            prompt: "The reason a correction usually cannot be the appropriate remedy is that:",
            options: ["Only some instruments still exist by the time anyone acts", "Institutions prefer symbolic gestures to remedies with financial consequences", "The person affected is rarely alive to say which remedy they would want", "Appropriate remedies would require admitting fault, which lawyers prevent"],
            correctIndex: 0,
            explanation: "An erratum needs a live record; standing needs a surviving claimant; a court order needs a legal record to vacate.",
            sourceLessonSlug: "anatomy-of-a-correction",
          },
          {
            prompt: "In the ledger, Vivien Thomas's two intervals are:",
            options: ["27 and 32 years", "22 and 62 years, matching two of the three Lacks intervals", "66 years, the single interval recorded for the Colvin case", "None, because his case is one of the two with no correction at all"],
            correctIndex: 0,
            explanation: "From the 1944 operation to the 1971 portrait, and to the 1976 honorary degree and faculty post.",
            sourceLessonSlug: "what-a-correction-cannot-repair",
          },
          {
            prompt: "Colvin is described as being in the case that won and out of the story that is told because:",
            options: ["Both are true, and a campaign's decision produced both", "The federal court sealed the plaintiffs' names when it issued its ruling", "She withdrew from the litigation before the Supreme Court affirmed the ruling", "Her testimony was given in closed session and never entered the public record"],
            correctIndex: 0,
            explanation: "She was a plaintiff and a central witness in Browder v. Gayle, and the campaign had already chosen a different name to build the public story around.",
            sourceLessonSlug: "claudette-colvin-and-the-choice-not-to-name",
          },
          {
            prompt: "The instrument the Ontario children's hospitals used in February 2024 was:",
            options: ["An eponym change", "A court order vacating the original attribution of the procedure", "A negotiated agreement with the Thomas family about future use", "A catalog record change in their institutional archives"],
            correctIndex: 0,
            explanation: "Which reaches every future utterance of the procedure's name and leaves the 1945 paper exactly as it was.",
            sourceLessonSlug: "anatomy-of-a-correction",
          },
          {
            prompt: "Survivorship in corrections, as the final lesson names it, means:",
            options: ["Attention reaches only the cases already documented", "Only claims pressed by a surviving family member are ever acted upon", "Corrections are made only where the person lived long enough to see them", "Institutions correct only those records that survived in their own archives"],
            correctIndex: 0,
            explanation: "Which makes any list of corrected cases, including this course's six, a biased sample of the underlying problem.",
            sourceLessonSlug: "what-a-correction-cannot-repair",
          },
          {
            prompt: "What is the fifth and last question of the check?",
            options: ["What would settle it, and does that thing exist?", "Which institution has the authority to make the correction you are seeking?", "How long have comparable corrections taken in similar documented cases?", "Whether the claim has been repeated by enough independent sources to be safe"],
            correctIndex: 0,
            explanation: "If nothing would settle it, the honest answer is that the claim is serious and unproven, and you say that rather than picking.",
            sourceLessonSlug: "what-a-correction-cannot-repair",
          },
          {
            prompt: "The Malone row of the ledger records her business as beginning in:",
            options: ["1902", "1918, when the Poro College complex was established in St. Louis", "1869, the year of her birth in Metropolis, Illinois", "1946, when the St. Louis orphans home was renamed for her"],
            correctIndex: 0,
            explanation: "The move to St. Louis. Her row has no correction and a live dispute instead.",
            sourceLessonSlug: "what-a-correction-cannot-repair",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // FINAL — 40 pooled questions serving 10, drawing on all 18 teaching lessons
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "final-exam-who-gets-named",
      title: "25 · Final assessment",
      section: "Final assessment",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 10,
        questions: [
          {
            prompt: "The organizing claim of this whole course is that credit is:",
            options: ["Assigned by mechanisms you can document", "Awarded by consensus among the people who witnessed the work being done", "Distributed fairly in most fields, with a small number of notorious exceptions", "Impossible to reconstruct historically, which is why the course teaches people instead"],
            correctIndex: 0,
            explanation: "Which is why people appear here as evidence for a mechanism rather than as a parade of profiles.",
            sourceLessonSlug: "credit-is-a-second-event",
          },
          {
            prompt: "Doing the work and being named for it are treated here as:",
            options: ["Two events with two different records", "One event described from two institutional perspectives", "A single process that the four currencies divide into stages", "A cause and its inevitable effect, absent deliberate interference"],
            correctIndex: 0,
            explanation: "They happen at different times, are recorded by different people, and the second can fail while the first went perfectly.",
            sourceLessonSlug: "credit-is-a-second-event",
          },
          {
            prompt: "A format cap produces exclusion because:",
            options: ["It has fewer slots than the work had contributors", "It is applied by committees who prefer familiar names to unfamiliar ones", "It requires a ranking, and rankings always place someone at the bottom", "It was designed at a time when research was performed by individuals"],
            correctIndex: 0,
            explanation: "One set of initials on a coin, three Nobel laureates, two or three names in an eponym. Rationing is the design, not an accident.",
            sourceLessonSlug: "credit-is-a-second-event",
          },
          {
            prompt: "The three tests a candidate must pass to be called a mechanism here are:",
            options: ["Named elsewhere, documented, falsifiable", "Repeated across three centuries, quantified, and accepted by specialists", "Legally recognized, statistically significant, and reversible in principle", "Observed in science, in business, and in law, so that it generalizes"],
            correctIndex: 0,
            explanation: "Named in published literature by someone other than this course, leaving a document you can read, and stated so you can say what would disprove it.",
            sourceLessonSlug: "mechanism-not-a-villain",
          },
          {
            prompt: "Why does this course refuse to argue from a pattern down to an individual?",
            options: ["A pattern licenses no inference about one case", "Because individual cases are too poorly documented to support any conclusion", "Because doing so would expose the course to a defamation claim", "Because the mechanisms operate only at the level of whole institutions"],
            correctIndex: 0,
            explanation: "A claim about a person rests on that person's own documents, and where those do not settle it, the course says so and names who argues what.",
            sourceLessonSlug: "mechanism-not-a-villain",
          },
          {
            prompt: "Rule one of this course permits an identity claim only when:",
            options: ["The person stated it publicly themselves, with a citation", "A reputable biography establishes it from private papers and correspondence", "The person's institution or estate confirms it in a published statement", "Two independent sources agree, neither of which is a compiled list"],
            correctIndex: 0,
            explanation: "Where no self-statement exists, the person is taught for their work with no identity claim attached.",
            sourceLessonSlug: "two-rules-this-course-follows",
          },
          {
            prompt: "How many living people in this course carry an identity claim?",
            options: ["None", "One, whose published memoir the course cites directly", "Six, one for each person used as evidence for a mechanism", "Three, all of whom have stated it in recorded public interviews"],
            correctIndex: 0,
            explanation: "The only identity claim in the whole course concerns Pauli Murray, a historical figure, and rests on Murray's own papers.",
            sourceLessonSlug: "two-rules-this-course-follows",
          },
          {
            prompt: "Closing a live dispute by assertion is refused because it:",
            options: ["Is a bet that takes the true material down with it", "Removes the reader's opportunity to research the question independently", "Violates the citation standard this catalog applies to all published claims", "Requires the author to choose between two equally reputable institutions"],
            correctIndex: 0,
            explanation: "It feels like clarity and is actually a wager, and when the wager loses it discredits the verified material standing beside it.",
            sourceLessonSlug: "two-rules-this-course-follows",
          },
          {
            prompt: "Merton's 1968 definition says recognition accrues to scientists of considerable repute and is:",
            options: ["Withheld from those who have not yet made their mark", "Redistributed to junior collaborators once the senior figure retires", "Delayed for everyone until a contribution has been independently confirmed", "Divided in proportion to each contributor's measurable share of the work"],
            correctIndex: 0,
            explanation: "Two things at once, and they can happen in the same room on the same afternoon.",
            sourceLessonSlug: "merton-and-the-matthew-effect",
          },
          {
            prompt: "The forty-first chair image comes from:",
            options: ["Arsene Houssaye, writing in 1855", "Merton himself, who coined it for the 1968 paper in Science", "Matilda Joslyn Gage's 1883 essay on women as inventors", "The Nobel Foundation's statutes limiting a prize to three people"],
            correctIndex: 0,
            explanation: "About the writers the Academie francaise's forty seats had no room for. Merton borrowed it.",
            sourceLessonSlug: "merton-and-the-matthew-effect",
          },
          {
            prompt: "Merton argued the Matthew effect is dysfunctional for the individual and:",
            options: ["Arguably functional for the field", "Equally damaging to the eminent scientist over a long career", "Self-correcting, because reputations eventually match contributions", "Confined to disciplines where collaboration is the normal mode of work"],
            correctIndex: 0,
            explanation: "Attaching a known name to a result is one way an overloaded field triages what to read, which is why the practice is hard to remove.",
            sourceLessonSlug: "merton-and-the-matthew-effect",
          },
          {
            prompt: "In 1988 Merton wrote that his 1968 paper should have appeared:",
            options: ["Under joint authorship", "With a correction to its central definition of the effect", "In a sociology journal rather than in a general science journal", "Anonymously, since its evidence came from confidential interviews"],
            correctIndex: 0,
            explanation: "He had drawn on Harriet Zuckerman's interview and other research materials so heavily that joint authorship was warranted.",
            sourceLessonSlug: "the-footnote-inside-the-paper",
          },
          {
            prompt: "In the Bol funding study, winners just above the threshold accumulated:",
            options: ["More than twice the funding over eight years", "About fifteen percent more funding, concentrated in the first two years", "The same funding but substantially more citations and speaking invitations", "Less funding than non winners, once the first grant's obligations were counted"],
            correctIndex: 0,
            explanation: "Compared with non winners whose review scores fell just below the same threshold, and partly because non winners stopped competing.",
            sourceLessonSlug: "the-footnote-inside-the-paper",
          },
          {
            prompt: "What do both sides of the Malone and Walker dispute agree on?",
            options: ["Walker sold Poro products in 1905 and 1906", "That Malone trained Walker before she left St. Louis for Denver", "That the two women's preparations were chemically identical", "That neither woman's company records survive in usable form"],
            correctIndex: 0,
            explanation: "In St. Louis and Denver, before her marriage. A'Lelia Bundles and the State Historical Society of Missouri both state it.",
            sourceLessonSlug: "the-eminent-name-absorbs-the-story",
          },
          {
            prompt: "The claim this course actually makes about Malone and Walker is that:",
            options: ["A story ran uphill toward the more famous name", "A formula was taken, and the surviving records establish it", "The two women collaborated and later disagreed about the terms", "Neither woman's contribution can be assessed from what survives"],
            correctIndex: 0,
            explanation: "Overshadowing is documented, including by a state historical society. Theft is not established by the records either side has produced.",
            sourceLessonSlug: "the-eminent-name-absorbs-the-story",
          },
          {
            prompt: "The Matilda effect, as Rossiter named it in 1993, describes women's contributions being:",
            options: ["Attributed to male colleagues", "Recognized later in a career than a comparable man's would be", "Excluded from the disciplinary societies that give scientific awards", "Published under initials, which concealed the author's sex from readers"],
            correctIndex: 0,
            explanation: "Systematic under-recognition, contributions denied, and the work repeatedly attributed to male colleagues.",
            sourceLessonSlug: "rossiter-and-the-matilda-effect",
          },
          {
            prompt: "This course reads the difference between Matthew and Matilda as:",
            options: ["A destination", "A difference in magnitude between two versions of one effect", "A difference between science and the humanities as fields of practice", "A difference between deliberate and accidental misattribution"],
            correctIndex: 0,
            explanation: "Matthew says credit runs uphill toward eminence. Matilda says it arrives somewhere specific, which is the more checkable claim.",
            sourceLessonSlug: "rossiter-and-the-matilda-effect",
          },
          {
            prompt: "Naming the effect for Matilda Joslyn Gage is part of the argument because she:",
            options: ["Made the case in 1883 and was forgotten for it", "Was the first woman elected to a national scientific society", "Compiled the census data showing women were not counted as inventors", "Was Rossiter's own great grandmother, which the 1993 paper discloses"],
            correctIndex: 0,
            explanation: "Her essay Woman as an Inventor appeared in the North American Review a hundred and ten years before the paper that honors her.",
            sourceLessonSlug: "rossiter-and-the-matilda-effect",
          },
          {
            prompt: "From 2000 to 2010, women's shares of research, service and teaching awards were:",
            options: ["10, 32.2 and 37.1 percent", "32.2, 10 and 37.1 percent, with service awards the least often given to women", "About a third in all three categories, showing no difference by award type", "78.5, 32.2 and 37.1 percent, reflecting the growth across the whole period"],
            correctIndex: 0,
            explanation: "Across thirteen STEM disciplinary societies, from the Lincoln and colleagues study published in 2012.",
            sourceLessonSlug: "matilda-measured",
          },
          {
            prompt: "The across-category comparison answers the eligible-pool objection because:",
            options: ["The pool is the same for all three categories", "The study adjusted every share for the number of senior women in each society", "Service awards are open to a wider group than research awards are", "The societies published their membership demographics for each year studied"],
            correctIndex: 0,
            explanation: "Same societies, same years, same membership. So the gap between 10 and 32.2 is about what women were recognized for.",
            sourceLessonSlug: "matilda-measured",
          },
          {
            prompt: "Murray's 1944 seminar argument was that segregation should be attacked by:",
            options: ["Challenging separate itself", "Proving facility by facility that separate provision was materially unequal", "Bringing the challenge under the Fifteenth Amendment rather than the Fourteenth", "Starting with professional schools and working down to primary education"],
            correctIndex: 0,
            explanation: "On Thirteenth and Fourteenth Amendment grounds. Spottswood Robinson kept the paper and returned to it a decade later preparing Brown.",
            sourceLessonSlug: "pauli-murray-the-argument-before-the-case",
          },
          {
            prompt: "Thurgood Marshall called States' Laws on Race and Color:",
            options: ["The bible of civil rights litigators", "A valuable survey that duplicated the association's own internal research", "The most complete account of southern practice written in that decade", "An argument the association was not yet prepared to put to the Court"],
            correctIndex: 0,
            explanation: "Murray compiled and edited the 746-page catalogue of state segregation statutes for the Methodist Church's Woman's Division of Christian Service.",
            sourceLessonSlug: "pauli-murray-the-argument-before-the-case",
          },
          {
            prompt: "In 1971 Ruth Bader Ginsburg named Murray and Dorothy Kenyon on the Reed v. Reed brief because:",
            options: ["Their work was the ground the argument stood on", "Both had reviewed and revised the brief before it was filed", "The ACLU required that board members be listed on its Supreme Court filings", "The Court had asked for the sources of the constitutional argument to be named"],
            correctIndex: 0,
            explanation: "Neither had written it. It is a deliberate credit assignment nobody required, recorded on the document itself.",
            sourceLessonSlug: "pauli-murray-the-argument-before-the-case",
          },
          {
            prompt: "Which ICMJE criterion does this course call the trapdoor, and why?",
            options: ["Drafting or critical review, because it measures inclusion", "Final approval, because a junior contributor is rarely shown the final version", "Accountability, because an employee cannot accept liability for an employer's work", "Substantial contribution, because the word substantial is left undefined"],
            correctIndex: 0,
            explanation: "It requires being asked into the writing, and inclusion is exactly what a hierarchy controls.",
            sourceLessonSlug: "who-counts-as-an-author",
          },
          {
            prompt: "CRediT's fourteen roles solve which problem?",
            options: ["Description", "Counting, by fixing how many authors a paper may list", "Both description and counting, which is why publishers adopted it", "Neither, since it is advisory and no journal is obliged to use it"],
            correctIndex: 0,
            explanation: "It records what each person did. It does not decide who qualifies as an author, so the counting problem is untouched.",
            sourceLessonSlug: "who-counts-as-an-author",
          },
          {
            prompt: "Vivien Thomas was hired into Blalock's laboratory in 1930 with what job title?",
            options: ["Assistant janitor", "Surgical research fellow, a post created for him by the medical school", "Laboratory supervisor, the position he would later hold at Johns Hopkins", "Instructor of Surgery, the title he was formally awarded again in 1976"],
            correctIndex: 0,
            explanation: "At Vanderbilt, and he continued to be classified and paid as a janitor and maintenance worker while doing postdoctoral-level work.",
            sourceLessonSlug: "vivien-thomas-and-the-author-line",
          },
          {
            prompt: "The 1945 JAMA paper reporting the blue baby operation named:",
            options: ["Blalock and Taussig", "Blalock, Taussig and Thomas, in that order on the byline", "Blalock alone, with the others thanked in the acknowledgements", "Thomas and Blalock, with Taussig credited for the clinical referral"],
            correctIndex: 0,
            explanation: "Thomas is not among the authors, although he had developed the operation in the laboratory and coached the surgeon through it.",
            sourceLessonSlug: "vivien-thomas-and-the-author-line",
          },
          {
            prompt: "What did Johns Hopkins award Thomas in 1976?",
            options: ["An honorary Doctor of Laws and a faculty post", "An honorary Doctor of Medicine, with retroactive hospital privileges", "A retroactive listing as an author on the 1945 JAMA paper", "The directorship of the surgical laboratories he had run for decades"],
            correctIndex: 0,
            explanation: "Not a medical doctorate. He was appointed Instructor of Surgery in the same year, thirty two years after the first operation.",
            sourceLessonSlug: "vivien-thomas-and-the-author-line",
          },
          {
            prompt: "United States patent law separates inventorship from ownership, which means:",
            options: ["The named humans stay named while the property moves", "The company that owns a patent is recorded as its inventor", "Only the assignee signs the oath required at the time of filing", "Inventorship may be reassigned by contract in the same way ownership is"],
            correctIndex: 0,
            explanation: "Section 115 requires the application to name the inventor; section 261 makes the patent assignable as personal property.",
            sourceLessonSlug: "inventorship-is-not-ownership",
          },
          {
            prompt: "Stanford v. Roche held that title in a patented invention vests first in:",
            options: ["The inventor", "The federal funding agency, under the Bayh-Dole Act", "The employer, wherever an employment agreement exists", "The university, for any invention made using its facilities"],
            correctIndex: 0,
            explanation: "Even where the research was federally funded. An obligation to assign is contractual and comes second.",
            sourceLessonSlug: "inventorship-is-not-ownership",
          },
          {
            prompt: "Trouillot's four moments of silence are:",
            options: ["Fact creation, assembly, retrieval, retrospective significance", "Observation, documentation, publication, and canonization by later historians", "Collection, cataloguing, digitization, and the writing of finding aids", "Testimony, corroboration, narration, and the assignment of significance"],
            correctIndex: 0,
            explanation: "The making of sources, of archives, of narratives, and of history in the final instance. Four operations, four traces.",
            sourceLessonSlug: "four-moments-of-silence",
          },
          {
            prompt: "The question that turns a gap in a record into a finding is:",
            options: ["What would have had to happen for this record to exist?", "Who had a motive to remove the record, and what did they gain by it?", "Which archive should have held it, and when was that collection lost?", "How many comparable records from the same institution have survived?"],
            correctIndex: 0,
            explanation: "If the answer is that somebody would have had to be permitted to sign it, the gap is evidence about a permission rule documented elsewhere.",
            sourceLessonSlug: "four-moments-of-silence",
          },
          {
            prompt: "For about two decades the HeLa cell line was attributed in print to:",
            options: ["A person who did not exist", "Johns Hopkins Hospital rather than to any individual donor", "George Gey, whose laboratory had first cultured the cells", "An anonymous donor, with no name appearing in the literature"],
            correctIndex: 0,
            explanation: "A Helen Lane, and in some accounts a Helen Larson. A 1973 query in Nature recovered her real name.",
            sourceLessonSlug: "henrietta-lacks-and-the-substituted-name",
          },
          {
            prompt: "Why is a substituted name worse than a blank space in a record?",
            options: ["A plausible wrong answer stops the question being asked", "Because it can never be corrected once indexes have propagated it", "Because it proves deliberate deception, which a gap does not", "Because a false name cannot be searched for by later researchers"],
            correctIndex: 0,
            explanation: "A gap invites a question. For twenty years everyone who went looking found a satisfying answer that happened to be false.",
            sourceLessonSlug: "henrietta-lacks-and-the-substituted-name",
          },
          {
            prompt: "The Selma Burke dime dispute is left open because:",
            options: ["Nothing in the record is dispositive", "The Mint has declined to release the relevant design correspondence", "Burke never stated her claim publicly during her own lifetime", "The Smithsonian and the Mint have both since withdrawn their positions"],
            correctIndex: 0,
            explanation: "A resemblance between two portraits of the same face is weak evidence of copying, and no document records a derivation either way.",
            sourceLessonSlug: "selma-burke-and-the-dime",
          },
          {
            prompt: "Which institution's record calls Burke's relief the model for Roosevelt's image on the dime?",
            options: ["The Smithsonian American Art Museum", "The United States Mint, which has revised its official attribution", "The Commission of Fine Arts, which ran the 1943 competition", "The Franklin Delano Roosevelt Presidential Library and Museum"],
            correctIndex: 0,
            explanation: "The Mint credits John Sinnock, whose initials appear on the coin, and that attribution has not been withdrawn.",
            sourceLessonSlug: "selma-burke-and-the-dime",
          },
          {
            prompt: "The first structural fact about corrections is that one arrives through:",
            options: ["Whichever instrument is available", "The actor whose authority over the record is strongest", "The remedy the person affected has publicly requested", "A negotiation among all the parties with an interest in the outcome"],
            correctIndex: 0,
            explanation: "Not whichever is appropriate, and the available instrument is usually the one furthest from the original harm.",
            sourceLessonSlug: "anatomy-of-a-correction",
          },
          {
            prompt: "Which correction instrument is reserved to a court?",
            options: ["Vacating a legal record", "Renaming a procedure so that all future usage changes", "Changing a catalog record so downstream retrieval inherits it", "Publishing an erratum that amends the original document"],
            correctIndex: 0,
            explanation: "Which is why Colvin's 2021 expungement required a judge and could not have come from any other actor.",
            sourceLessonSlug: "anatomy-of-a-correction",
          },
          {
            prompt: "The lesson of the Claudette Colvin case is that:",
            options: ["A campaign's choice about a name is itself a mechanism", "A juvenile conviction bars a plaintiff from federal constitutional litigation", "The boycott rather than the litigation ended Montgomery bus segregation", "A movement's leadership acted maliciously in setting her case aside"],
            correctIndex: 0,
            explanation: "Plaintiff selection is a defensible strategic instrument, and it still decided who was named. She was a plaintiff in Browder v. Gayle, the case that won.",
            sourceLessonSlug: "claudette-colvin-and-the-choice-not-to-name",
          },
          {
            prompt: "The final lesson warns that this course is itself an instance of:",
            options: ["Attention flowing toward already documented cases", "The Matilda effect, since most of its evidence concerns women", "The authorship convention, since it names only one author itself", "The archive's silence, because it relies on secondary rather than primary sources"],
            correctIndex: 0,
            explanation: "Six names and a sense of completion is the opposite of the argument: the mechanisms predict most comparable cases left no retrievable trace.",
            sourceLessonSlug: "what-a-correction-cannot-repair",
          },
        ],
      },
    },
  ],
};
