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
  ],
};
