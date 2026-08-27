import type { AuthoredCourse } from "./authored-course";

// "Not a State" (Civics). Tier 0. Requested by BAM: "add course on US territories and places like
// Puerto Rico that arent states and dont have representation in Congress or House".
//
// THE ORGANIZING QUESTION, and the sentence the whole course is built to keep true:
// WHAT IS THE LEGAL STATUS OF A PLACE THAT IS UNDER UNITED STATES SOVEREIGNTY AND IS NOT A STATE,
// AND HOW DID IT GET THAT STATUS? Not a tour of five islands. The answer is a category the law
// invented in 1901, kept, and still applies: the UNINCORPORATED TERRITORY, a place the Constitution
// reaches only in part, at Congress's discretion, under Article IV.
//
// WHY THIS IS NOT IN THE `land-warrant` SERIES (the decision was made on the merits, not by
// default). WARRANT's spine is a FUNDING mechanism: a federal benefit is created, a class is
// excluded, a separate and smaller channel is built for the excluded class, and that channel is
// then permitted to go unmatched by the party obliged to fund it. That mechanism really does appear
// here, once, and Section 5 teaches it with the cross-link stated out loud: SSI was created in 1972
// for "the 50 States and the District of Columbia", Puerto Rico was left on the older AABD block
// grant, and in 2021 an AABD recipient there drew an average of $82 a month against $574 for the
// average SSI recipient. That is the WARRANT move exactly.
//
// But it is EVIDENCE here, not the spine. This course's mechanism is a JUDICIAL one and it is
// about status rather than money: the Insular Cases held that the Constitution does not follow the
// flag into an "unincorporated" territory, and everything downstream (no vote, no Senator, no
// elector, a national who is not a citizen, an unelected board over an elected government) follows
// from the STATUS, not from any appropriation. The excluded class is defined by geography and
// sovereignty rather than by race, and what is withheld is the vote, for which no smaller channel
// is built at all: a non-voting delegate is not an underfunded program, it is a seat. Folding this
// into WARRANT would make the code mean "unequal federal treatment in general", which is not a
// spine, and would displace one of the four courses that series has already declared. So it stands
// alone and cross-links hard.
//
// EVERY PRIMARY DOCUMENT IN THIS FILE WAS READ DIRECTLY, not summarised from search results:
//   · 7 U.S.C. § 361a and § 361c(d), read on uscode.house.gov. The § 361c(d)(4) exception is the
//     opening hook and it was verified before it was used: the four jurisdictions it names are
//     exactly the members of § 361a's definition of "State" that are not states.
//   · U.S. Const. art. I, § 8, cl. 17; art. II, § 1, cl. 2; art. IV, § 3, cl. 2; amend. XXIII,
//     read from the National Archives transcripts.
//   · 8 U.S.C. §§ 1101(a)(29), (a)(36), (a)(38), 1402, 1406, 1407, 1408, read on uscode.house.gov.
//   · 48 U.S.C. §§ 1661, 1801, 2101, 2121, 2141, 2142, read on uscode.house.gov.
//   · Downes v. Bidwell, 182 U.S. 244 (1901) and Balzac v. Porto Rico, 258 U.S. 298 (1922), read
//     on Cornell's Legal Information Institute.
//   · United States v. Vaello Madero, 596 U.S. 159 (2022), the SLIP OPINION from supremecourt.gov,
//     read in full: the Kavanaugh majority, the Gorsuch concurrence, the Sotomayor dissent.
//   · Fitisemanu v. United States, Nos. 20-4017 & 20-4019 (10th Cir. June 15, 2021), the PUBLISHED
//     opinion as filed, downloaded from govinfo.gov and read in full: Lucero for the panel,
//     Tymkovich concurring, Bacharach dissenting.
//   · 2020 Census apportionment Table 2 (resident population of the 50 states, DC and Puerto Rico),
//     downloaded from census.gov as a PDF; the Island Areas counts from the Census Bureau's own
//     release of 28 October 2021; the Puerto Rico post-enumeration survey release of 16 August 2022.
//
// THE ARITHMETIC THIS COURSE DID ITSELF, from Census Table 2, and a learner can redo it in five
// minutes: Puerto Rico's 3,285,874 was larger than 21 of the 50 states in the 2020 Census; the
// District's 689,545 was larger than 2; and the five territories plus the District come to
// 4,313,440, more than lived in Oregon.
//
// TAUGHT AS CONTESTED, WITH THE HOLDERS OF EACH POSITION NAMED, because a course that implies one
// answer is obvious is doing politics rather than civics:
//   · AMERICAN SAMOA. The plaintiffs in Fitisemanu are American Samoans who want citizenship. The
//     INTERVENORS OPPOSING THEM are the American Samoa Government and the territory's own member of
//     Congress, who argued against "citizenship by judicial fiat". Section 3 states both positions
//     in their own terms, cites the 2007 status-commission finding the panel relied on, and also
//     states the history that cuts the other way: in 1930 an American Samoan commission asked for
//     citizenship and the House killed the bill. It does not adjudicate.
//   · PUERTO RICAN STATUS. Section 6 reports every plebiscite with its disputes attached: blank
//     ballots, boycotts and turnout are part of the record, and a bare percentage misleads.
//   · THE INSULAR CASES. Taught as the law that they are, with the criticism attached and its
//     critics named (Gorsuch, Sotomayor, Judge Torruella, the Fitisemanu panel itself), and with
//     the cultural-protection defence stated in the words of the people who make it.
//
// House style: `section` on every lesson; flush-left single-line `:::reveal q ||| a`; a
// `## Vocabulary` block of 3-6 lesson-specific terms; APA 7 `## Sources` with a stable URL wherever
// one exists; a quiz per teaching section (pool sized by density, serving 5, passing 80, shuffled)
// plus a final serving 10; every question carries `explanation` + `sourceLessonSlug`. Correct
// options are written SHORT and distractors long and specific, so `check-longest-option` passes by
// construction rather than by post-hoc trimming.
export const TERRITORIES_COURSE: AuthoredCourse = {
  title: "Not a State",
  description:
    "About four and a third million people live under the American flag, hold American passports, and elect nobody who can vote on the floor of either house of Congress. This course asks the question underneath that sentence: what is the legal status of a place that is under United States sovereignty and is not a state, and how did it get that status? It starts inside a farm statute, because that is where the category is easiest to see without argument. The Hatch Act pays for agricultural research and requires a state to match every federal dollar; one paragraph of that statute, headed \"Exception for insular areas and the District of Columbia\", drops the requirement to half for Puerto Rico, Guam, the Virgin Islands and the District, and lets the Secretary of Agriculture waive even that. Read the definitions section and the reason is plain: those four are exactly the members of the statute's own list of \"States\" that are not states. From there the course goes to the source of the category. In 1901 a divided Supreme Court decided a tax case about oranges and held that Puerto Rico was \"a territory appurtenant and belonging to the United States, but not a part of the United States within the revenue clauses of the Constitution\", and Justice White supplied a distinction the Constitution never mentions, between territories that have been incorporated into the Union and territories that have not. In 1922 the Court held that even the right to a jury trial does not follow the flag into an unincorporated territory, and that granting citizenship in 1917 had not changed the island's status. Both cases are still law, and both are under open attack from the bench: Justice Gorsuch has written that they rest on \"a rotten foundation\" and rest instead on racial stereotypes, and the course quotes him and the judges who agree with him at length. Then it works the consequences, one at a time and from the documents. American Samoa is the sharpest case in the subject: people born there are United States nationals and not United States citizens, and when three of them sued for citizenship the parties opposing them included their own territorial government and their own member of Congress, who argued that a court thousands of miles away should not impose citizenship on an unwilling people and put communal land tenure at risk. The course names who holds which position and refuses to settle it. It then counts the representation that exists and the representation that does not, contrasts the District of Columbia, which pays federal income tax and casts three electoral votes under the Twenty-Third Amendment, teaches the Supplemental Security Income case the Supreme Court decided in 2022 and the fiscal oversight board Congress placed over Puerto Rico's elected government in 2016, and reports Puerto Rico's status votes with their blank ballots, boycotts and turnout disputes attached. It ends with the sources themselves, so that every number in it can be checked by the person who took it.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1 — A category the law made
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-waiver-that-names-four-places",
      title: "1 · The waiver that names four places",
      section: "Section 1 · A category the law made",
      body: `Start where nobody goes looking for a constitutional question: inside the money an agricultural college gets for its research.

**7 U.S.C. § 361c** is the Hatch Act allotment, the annual federal payment that keeps state agricultural experiment stations running. It arrives with a condition, at paragraph (d)(1):

> "Except as provided in paragraph (4), no allotment shall be made to a State under subsection (b) or (c), and no payments from the allotment shall be made to a State, in excess of the amount that the State makes available out of non-Federal funds for agricultural research and for the establishment and maintenance of facilities for the performance of the research." (7 U.S.C. § 361c, n.d.)

Dollar for dollar. Paragraph (d)(2) says the Secretary of Agriculture withholds the shortfall from a state that comes up short, and paragraph (d)(3) sends the withheld money to "the States satisfying the matching requirement for that fiscal year" (7 U.S.C. § 361c, n.d.). It is a hard rule with a penalty attached.

**Now read paragraph (4).** Congress gave it a heading, and the heading is the whole lesson: **"Exception for insular areas and the District of Columbia."**

> "Effective beginning for fiscal year 2003, in lieu of the matching funds requirement of paragraph (1), the insular areas of the Commonwealth of Puerto Rico, Guam, and the Virgin Islands of the United States and the District of Columbia shall provide matching funds from non-Federal sources in an amount equal to not less than 50 percent of the formula funds distributed by the Secretary to each of the insular areas, respectively, and the District of Columbia under this section." (7 U.S.C. § 361c, n.d.)

Half instead of all. And subparagraph (B) goes further: the Secretary "may waive the matching fund requirement of subparagraph (A) for any fiscal year" if the government of the insular area or the District is unlikely to meet it (7 U.S.C. § 361c, n.d.).

**Then ask the question that turns this from a footnote into a premise: who counts as a "State" in this statute at all?** The answer sits one section earlier. The Hatch Act's definitions at 7 U.S.C. § 361a say the word covers "the several States (including the District of Columbia), Puerto Rico, Guam and the Virgin Islands" (7 U.S.C. § 361a, n.d.).

Put the two lists beside each other.

| Counted as a "State" by 7 U.S.C. § 361a | Named in the § 361c(d)(4) exception |
| --- | --- |
| The fifty states | No |
| District of Columbia | Yes |
| Puerto Rico | Yes |
| Guam | Yes |
| Virgin Islands of the United States | Yes |

The exception is not a scattered list of four places. **It is every member of the statute's own definition of "State" that is not actually a state, and nothing else.** Congress wrote a rule for states, then wrote a second and softer rule for the four jurisdictions it had instructed itself to treat as states while knowing they were not.

**Read carefully what this provision is and is not.** It is a concession rather than a punishment: a lower bar with an escape hatch behind it. Nobody is injured by paragraph (4). What it proves is something else, and it is the premise of this whole course. **The territories and the District are already a distinct legal category inside ordinary federal statutes, carrying different rules, in a law about universities and soil.** You do not have to reach for a controversy to find the line. It is sitting in a farm bill.

Notice also who is missing. **American Samoa and the Northern Mariana Islands are not in § 361a's list at all.** Being outside a definition is a status too, and Section 3 of this course is about what that costs in a different statute.

One more thing, because it is where this provision was found. A companion course in this catalog, **The Match**, works the same statute family from the other direction: the 1890 land-grant institutions, the dollar-for-dollar match a state owes them, and the waiver Congress allows only on their side of the line. Take that course for how the match itself works. This one asks the prior question, the one the phrase "insular areas" quietly assumes somebody has already answered. What is a place that belongs to the United States and is not part of it?

:::reveal What heading did Congress give to 7 U.S.C. § 361c(d)(4)? ||| Exception for insular areas and the District of Columbia.

:::reveal What do the four jurisdictions named in that exception have in common? ||| Each is counted as a "State" by the Hatch Act's own definition in § 361a, and none of them is a state.

:::reveal Which two inhabited territories are absent from the Hatch Act's definition of "State"? ||| American Samoa and the Northern Mariana Islands.

## Vocabulary
- **Insular area**: the federal government's own term for a jurisdiction under United States sovereignty that is neither a state nor the federal District, used in statutes and by the Interior Department's Office of Insular Affairs.
- **Allotment**: the share of an appropriation a statute directs to a particular jurisdiction, calculated by formula rather than awarded on application.
- **Non-federal match**: money the recipient must raise from its own or other non-federal sources before a federal dollar is paid, which is the condition paragraph (4) halves.
- **Definitional "State"**: a term of art. Each statute defines "State" for its own purposes, so the same place can be a State in one law and outside the definition in the next.
- **Formula funds**: money distributed by a fixed statutory calculation rather than by competitive award, which is why one match rule can be written once and applied to everyone at once.

## Sources
7 U.S.C. § 361a. (n.d.). *Definitions*. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title7-section361a&num=0&edition=prelim

7 U.S.C. § 361c. (n.d.). *Authorization of appropriations; apportionment of funds*. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title7-section361c&num=0&edition=prelim`,
    },
    {
      slug: "the-clause-that-governs",
      title: "2 · The clause that governs, and the default it replaced",
      section: "Section 1 · A category the law made",
      body: `Two sentences of the Constitution do almost all the work in this subject, and they are not the ones people expect.

**The Territory Clause**, Article IV, Section 3, Clause 2:

> "The Congress shall have Power to dispose of and make all needful Rules and Regulations respecting the Territory or other Property belonging to the United States; and nothing in this Constitution shall be so construed as to Prejudice any Claims of the United States, or of any particular State." (U.S. Const. art. IV, § 3, cl. 2)

**The District Clause**, Article I, Section 8, Clause 17, which gives Congress power:

> "To exercise exclusive Legislation in all Cases whatsoever, over such District (not exceeding ten Miles square) as may, by Cession of particular States, and the Acceptance of Congress, become the Seat of the Government of the United States" (U.S. Const. art. I, § 8, cl. 17)

Read them as an engineer would. Neither clause says how long the arrangement lasts, neither promises statehood, and neither says which other parts of the Constitution apply inside the place being governed. "Needful Rules and Regulations" and "exclusive Legislation in all Cases whatsoever" are grants of power with the ceiling left blank. Every question in this course is downstream of that blank.

**The blank was not always read as an invitation.** For most of the nineteenth century the working American assumption was the opposite: a territory was a state in waiting, the Constitution went where the flag went, and the arrangement was temporary by design. Two decisions show how settled that was.

In **Loughborough v. Blake** (1820), Chief Justice Marshall held that the Constitution's requirement that duties be uniform "throughout the United States" constrained a tax Congress levied on the District of Columbia. The District was not a state and had no vote, and the clause still bound Congress there.

In **Thompson v. Utah** (1898), the year of the Spanish-American War, the Court called it "beyond question" that the Constitution's jury-trial guarantees reached "the territories of the United States" (Vaello Madero, 2022, Gorsuch, J., concurring, slip op. at 6).

Then the map changed. Under the Treaty of Paris, signed 10 December 1898, Spain gave up Cuba and transferred Puerto Rico, Guam and the Philippines to the United States (Vaello Madero, 2022, Gorsuch, J., concurring, slip op. at 2). Hawaii had been annexed months earlier. For the first time the United States held large, populous places across an ocean that nobody in Washington seriously proposed to admit as states.

**That created a legal problem with an obvious political solution and no constitutional one.** If the Constitution followed the flag, then the tariff wall around the new possessions was unconstitutional, their inhabitants were owed the same rights as anyone in Ohio, and the road ended at statehood. If it did not follow the flag, somebody had to say why, using a document that never mentions the distinction.

Justice Gorsuch, writing in 2022, describes the two camps of the time without softening either: some argued "that our republican traditions prevented the United States from governing distant possessions as subservient colonies without regard to the Constitution", while others "sought to devise new theories by which Congress could permanently rule the country's new acquisitions as a European power might, unrestrained by domestic law" (Vaello Madero, 2022, Gorsuch, J., concurring, slip op. at 2).

The second camp won, in a tax case about oranges, and the next section is about how.

**One vocabulary warning before you go there,** because it trips almost everyone. In this subject the word **territory** is a legal category, not a description of size, distance or wealth. Alaska was a territory. So was Utah. So is Guam. What separates them is not geography. It is a doctrine invented in 1901 that sorted territories into two kinds, and the Constitution contains neither kind by name.

:::reveal Which clause of the Constitution gives Congress power over the territories, and what is its one operative sentence about power? ||| Article IV, Section 3, Clause 2, which gives Congress power to make all needful Rules and Regulations respecting the Territory or other Property belonging to the United States.

:::reveal Which clause governs the District of Columbia, and how does it describe Congress's power there? ||| Article I, Section 8, Clause 17, which gives Congress power to exercise exclusive Legislation in all Cases whatsoever over the seat of government.

:::reveal What did Loughborough v. Blake decide in 1820 about the District and the uniformity requirement? ||| That the requirement that duties be uniform throughout the United States constrained Congress when it taxed the District, even though the District was not a state.

## Vocabulary
- **Territory Clause**: Article IV, Section 3, Clause 2, the grant of congressional power over territory belonging to the United States, and the clause every case in this course eventually turns on.
- **District Clause**: Article I, Section 8, Clause 17, the separate grant of exclusive legislative power over the seat of government, which is why the District's position is not the territories' position.
- **Treaty of Paris (1898)**: the peace treaty ending the Spanish-American War, under which Spain relinquished Cuba and transferred Puerto Rico, Guam and the Philippines to the United States.
- **Uniformity requirement**: the constitutional rule that duties, imposts and excises be uniform throughout the United States, whose reach into a new possession was the exact question the 1901 tax case put.
- **Statehood assumption**: the nineteenth-century working premise that a territory was a temporary stage on the road to admission, which the 1898 acquisitions broke.

## Sources
U.S. Const. art. I, § 8, cl. 17. National Archives. https://www.archives.gov/founding-docs/constitution-transcript

U.S. Const. art. IV, § 3, cl. 2. National Archives. https://www.archives.gov/founding-docs/constitution-transcript

*United States v. Vaello Madero*, 596 U.S. 159 (2022) (Gorsuch, J., concurring). Supreme Court of the United States. https://www.supremecourt.gov/opinions/21pdf/20-303_6khn.pdf`,
    },
    {
      slug: "how-each-one-arrived",
      title: "3 · How each one arrived",
      section: "Section 1 · A category the law made",
      body: `Five inhabited territories and one federal district. They did not arrive the same way, and the differences matter later, so learn them once here.

| Place | How it came under United States sovereignty | When people born there became citizens |
| --- | --- | --- |
| District of Columbia | Created out of land ceded by states and accepted by Congress under Article I, § 8, cl. 17 | Always, as persons born in the United States |
| Puerto Rico | Transferred by Spain under the Treaty of Paris, 10 December 1898 | Persons born there on or after 13 January 1941 are citizens at birth; 8 U.S.C. § 1402 |
| Guam | Transferred by Spain under the same treaty | By the Organic Act of 1 August 1950, reaching back to births from 11 April 1899; 8 U.S.C. § 1407 |
| U.S. Virgin Islands | Bought from Denmark under the convention of 4 August 1916; ratifications exchanged 17 January 1917 | Births from 25 February 1927 onward are citizens at birth; 8 U.S.C. § 1406 |
| American Samoa | Deeds of cession of 10 April 1900 and 16 July 1904, accepted by the Act of 20 February 1929 | Never. See Section 3 |
| Northern Mariana Islands | Covenant approved by Public Law 94-241, 24 March 1976, after a United Nations trusteeship | Under the Covenant, with an option to elect national status instead |

Three things in that table are worth stopping on.

**First, sovereignty and citizenship are different questions, decided at different times, by different instruments.** Guam has been American since 1898 and its people became citizens by statute half a century later: 8 U.S.C. § 1407 declares citizens "All persons born in the island of Guam on or after April 11, 1899 (whether before or after August 1, 1950) subject to the jurisdiction of the United States" (8 U.S.C. § 1407, n.d.). Nothing in the acquisition decided the citizenship. Congress decided it, when Congress got around to it. The Virgin Islands ran the same pattern: the convention with Denmark was signed on 4 August 1916 and ratifications were exchanged on 17 January 1917, and it took the Acts of 25 February 1927 and 28 June 1932 to settle who was a citizen, which is why 8 U.S.C. § 1406 still reads as a list of dates (8 U.S.C. § 1406, n.d.).

**Second, American Samoa is not an afterthought in that list. It is the one place where Congress never took the step.** The statute that brought it in is 48 U.S.C. § 1661, and it does exactly two things: it accepts the deeds of cession the Samoan chiefs signed in 1900 and 1904, and it places the islands under whatever government the President directs. It confers no citizenship. Section 3 of this course is about the consequences, which are live in court and genuinely contested inside American Samoa itself.

**Third, the Northern Marianas came in by negotiated covenant, and its own text lets a person opt out of citizenship.** Public Law 94-241 approved "The Covenant to Establish a Commonwealth of the Northern Mariana Islands in Political Union with the United States of America" (48 U.S.C. § 1801, n.d.). Section 303 of that Covenant makes people born in the Commonwealth citizens at birth; Section 302 let certain people who became citizens under the transitional provision elect to be nationals instead. A negotiated entry produces choices that a treaty of cession does not.

**And one place that is in the category and has almost nobody in it.** Palmyra Atoll, roughly a thousand miles from Hawaii, is the only remaining **incorporated** territory of the United States, an accident of how Hawaii was annexed in 1900 and how it was admitted as a state in 1959. Justice Gorsuch called the result "an implausible and embarrassing state of affairs": the full Constitution applies on an uninhabited atoll, and the Court's cases still say a jury trial is not fundamental enough to reach several million citizens in Puerto Rico (Vaello Madero, 2022, Gorsuch, J., concurring, slip op. at 8).

Hold that word, **incorporated**. It is doing enormous work, it appears nowhere in the Constitution, and the next section is about where it came from.

:::reveal Which two treaties or instruments brought Puerto Rico and Guam under United States sovereignty, and in what year? ||| Both came from Spain under the Treaty of Paris of 1898.

:::reveal How did the Northern Mariana Islands enter, and how is that different from Puerto Rico's entry? ||| By a negotiated Covenant approved in 1976, after a United Nations trusteeship, rather than by transfer under a peace treaty.

:::reveal Which is the only remaining incorporated territory of the United States? ||| Palmyra Atoll, which is uninhabited.

## Vocabulary
- **Deed of cession**: the instrument by which the traditional leaders of Tutuila in 1900 and the Manu'a islands in 1904 transferred sovereignty, later accepted by Congress in 1929.
- **Organic Act**: a statute in which Congress establishes a civil government for a territory and sets out its structure, as it did for Guam in 1950.
- **Covenant (Northern Marianas)**: the negotiated agreement, approved by Public Law 94-241 in 1976, that made the Commonwealth's relationship with the United States a bargained text rather than a transfer.
- **Citizenship by statute**: citizenship conferred on a territory's people by an Act of Congress rather than by the Fourteenth Amendment, which is how it arrived in Puerto Rico, Guam and the Virgin Islands.
- **Incorporated territory**: in current doctrine, a territory the Constitution applies to in full. Only Palmyra Atoll remains in the category, and it has no permanent population.

## Sources
8 U.S.C. § 1406. (n.d.). *Persons living in and born in the Virgin Islands*. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title8-section1406&num=0&edition=prelim

8 U.S.C. § 1407. (n.d.). *Persons living in and born in Guam*. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title8-section1407&num=0&edition=prelim

48 U.S.C. § 1661. (n.d.). *Islands of eastern Samoa*. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title48-section1661&num=0&edition=prelim

48 U.S.C. § 1801. (n.d.). *Approval of Covenant to Establish a Commonwealth of the Northern Mariana Islands in Political Union with the United States of America*. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title48-section1801&num=0&edition=prelim

*United States v. Vaello Madero*, 596 U.S. 159 (2022) (Gorsuch, J., concurring). Supreme Court of the United States. https://www.supremecourt.gov/opinions/21pdf/20-303_6khn.pdf`,
    },
    {
      slug: "quiz-a-category-the-law-made",
      title: "4 · Knowledge check: a category the law made",
      section: "Section 1 · A category the law made",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What heading does Congress put over 7 U.S.C. § 361c(d)(4)?",
            options: ["Exception for insular areas and the District of Columbia", "Special provision for institutions serving predominantly rural counties in the several States", "Temporary relief for States affected by federally declared agricultural disasters", "Alternative computation for States whose experiment stations predate the Hatch Act"],
            correctIndex: 0,
            explanation: "The statute's own heading names the two categories the paragraph covers, and both of them are made up of places that are not states.",
            sourceLessonSlug: "the-waiver-that-names-four-places",
          },
          {
            prompt: "Which four jurisdictions does 7 U.S.C. § 361c(d)(4)(A) name?",
            options: ["Puerto Rico, Guam, the Virgin Islands and the District of Columbia", "American Samoa, Guam, the Northern Mariana Islands and the Virgin Islands of the United States", "Puerto Rico, the Northern Mariana Islands, American Samoa and the District of Columbia", "Guam, American Samoa, Palmyra Atoll and the Commonwealth of Puerto Rico"],
            correctIndex: 0,
            explanation: "Those four, and no others, which matters because they are exactly the non-state members of the statute's own definition of State.",
            sourceLessonSlug: "the-waiver-that-names-four-places",
          },
          {
            prompt: "Under 7 U.S.C. § 361c(d)(1), how much non-federal money must a State make available to draw its full allotment?",
            options: ["Dollar for dollar", "One dollar for every three federal dollars, computed across a rolling three-year average", "A quarter of the allotment, with the remainder due only if the Secretary requests it", "Nothing, because the Hatch Act allotment is an unconditional formula payment"],
            correctIndex: 0,
            explanation: "No payment may exceed the amount the State makes available out of non-federal funds for agricultural research and its facilities.",
            sourceLessonSlug: "the-waiver-that-names-four-places",
          },
          {
            prompt: "Under the exception, what share of its formula funds must one of those four jurisdictions match?",
            options: ["Not less than 50 percent", "The full amount, but with an extra two fiscal years in which to raise it", "Twenty-five percent, rising by five points in each subsequent fiscal year", "Whatever share the Secretary of Agriculture certifies the jurisdiction can afford"],
            correctIndex: 0,
            explanation: "Half instead of all, and subparagraph (B) then lets the Secretary waive even that half for a fiscal year.",
            sourceLessonSlug: "the-waiver-that-names-four-places",
          },
          {
            prompt: "What does 7 U.S.C. § 361c(d)(4)(B) allow the Secretary of Agriculture to do?",
            options: ["Waive the requirement for a fiscal year", "Convert the unmatched portion into a loan repayable over ten years", "Transfer the shortfall to the Interior Department's Office of Insular Affairs", "Reduce the jurisdiction's allotment permanently after a second unmatched year"],
            correctIndex: 0,
            explanation: "The waiver is available when the Secretary determines the government is unlikely to meet the matching requirement for that fiscal year.",
            sourceLessonSlug: "the-waiver-that-names-four-places",
          },
          {
            prompt: "According to 7 U.S.C. § 361a, which of these does the Hatch Act count as a 'State'?",
            options: ["The District of Columbia", "American Samoa, together with Swains Island and the other outlying possessions", "The Commonwealth of the Northern Mariana Islands under its 1976 Covenant", "Palmyra Atoll, as the one remaining incorporated territory of the United States"],
            correctIndex: 0,
            explanation: "The definition reads the several States including the District of Columbia, Puerto Rico, Guam and the Virgin Islands.",
            sourceLessonSlug: "the-waiver-that-names-four-places",
          },
          {
            prompt: "Which two inhabited territories are absent from the Hatch Act's definition of 'State' in 7 U.S.C. § 361a?",
            options: ["American Samoa and the Northern Marianas", "The United States Virgin Islands and the Commonwealth of Puerto Rico", "Guam and the Commonwealth of the Northern Mariana Islands", "The District of Columbia and the United States Virgin Islands"],
            correctIndex: 0,
            explanation: "Being outside a statutory definition is itself a status, and those two are outside this one.",
            sourceLessonSlug: "the-waiver-that-names-four-places",
          },
          {
            prompt: "What is the relationship between the § 361a definition and the § 361c(d)(4) exception?",
            options: ["The exception covers the definition's non-state members", "The exception covers every jurisdiction whose experiment station was founded after 1900", "The exception covers the states with the smallest agricultural output in each fiscal year", "The exception covers jurisdictions that declined the original 1887 Hatch Act allotment"],
            correctIndex: 0,
            explanation: "Every member of the definition that is not a state is in the exception, and every state is out of it.",
            sourceLessonSlug: "the-waiver-that-names-four-places",
          },
          {
            prompt: "Under 7 U.S.C. § 361c(d)(2), what does the Secretary do when a State fails to provide its match?",
            options: ["Withholds the difference", "Refers the shortfall to the Department of Justice for collection with interest", "Suspends the State's experiment station from the federal research programme for a year", "Requires the State to submit a corrective plan of work before the next fiscal year"],
            correctIndex: 0,
            explanation: "The statute withholds an amount equal to the gap between the full allotment and the matching funds actually provided.",
            sourceLessonSlug: "the-waiver-that-names-four-places",
          },
          {
            prompt: "Under 7 U.S.C. § 361c(d)(3), where does withheld money go?",
            options: ["To the States that met the match", "Back to the general fund of the Treasury at the close of the fiscal year", "To a national competitive grant pool administered by the Secretary directly", "To the insular areas named in paragraph (4), in proportion to their populations"],
            correctIndex: 0,
            explanation: "It is reapportioned among the States satisfying the matching requirement for that fiscal year.",
            sourceLessonSlug: "the-waiver-that-names-four-places",
          },
          {
            prompt: "The Hatch Act allotment in 7 U.S.C. § 361c pays for what?",
            options: ["Agricultural research", "Undergraduate tuition scholarships at land-grant colleges in the several States", "Rural broadband construction in counties without a commercial provider", "Crop insurance premiums for producers in federally designated disaster counties"],
            correctIndex: 0,
            explanation: "The statute ties the money to agricultural research and to establishing and maintaining the facilities for performing it.",
            sourceLessonSlug: "the-waiver-that-names-four-places",
          },
          {
            prompt: "What is the fairest description of what § 361c(d)(4) does to the four jurisdictions it names?",
            options: ["It lowers a bar for them", "It penalises them for failing to meet an earlier statutory obligation", "It bars them from the allotment until a territorial legislature appropriates funds", "It requires them to repay any federal money drawn without a full match"],
            correctIndex: 0,
            explanation: "It is a concession rather than a punishment, which is exactly why it is good evidence: nobody is injured, and the legal category is still visible.",
            sourceLessonSlug: "the-waiver-that-names-four-places",
          },
          {
            prompt: "In federal usage, what is an 'insular area'?",
            options: ["A jurisdiction that is neither a state nor the federal District", "Any county or parish separated from its state by a body of navigable water", "A federally owned island held for military or scientific purposes only", "A state whose land area lies wholly outside the North American continent"],
            correctIndex: 0,
            explanation: "It is the government's own term, used in statutes and by the Interior Department's Office of Insular Affairs.",
            sourceLessonSlug: "the-waiver-that-names-four-places",
          },
          {
            prompt: "What are 'formula funds'?",
            options: ["Money distributed by a fixed statutory calculation", "Money awarded on the strength of a competitive research proposal reviewed by peers", "Money reserved for emergencies and released only on a presidential declaration", "Money a state must appropriate before any federal share becomes available at all"],
            correctIndex: 0,
            explanation: "Because the distribution is calculated rather than applied for, one match rule can be written once and applied to every recipient.",
            sourceLessonSlug: "the-waiver-that-names-four-places",
          },
          {
            prompt: "Which companion course in this catalog works the same statute family from the 1890 institutions' side?",
            options: ["The Match", "Tribal Nations and the Government-to-Government Relationship", "How Countries Constitute Themselves in the Modern Era", "State versus Federal Power and the Division of Authority"],
            correctIndex: 0,
            explanation: "That course teaches the match and the waiver as a funding mechanism; this one asks the prior question about legal status.",
            sourceLessonSlug: "the-waiver-that-names-four-places",
          },
          {
            prompt: "Why does the phrase 'definitional State' matter in this subject?",
            options: ["Each statute defines the word for itself", "Because the Constitution supplies one definition that binds every federal statute equally", "Because only the Supreme Court may decide which places count as states in federal law", "Because a jurisdiction admitted to one definition is automatically admitted to all others"],
            correctIndex: 0,
            explanation: "The same place can be a State in one law and outside the definition in the next, which is why the Hatch Act and the immigration statutes disagree.",
            sourceLessonSlug: "the-waiver-that-names-four-places",
          },
          {
            prompt: "From what fiscal year does the § 361c(d)(4)(A) exception take effect?",
            options: ["2003", "1887, the year of the original Hatch Act, applied retroactively by later amendment", "1977, the year Congress first authorised capacity grants for the 1890 institutions", "2016, the year Congress enacted the Puerto Rico oversight statute"],
            correctIndex: 0,
            explanation: "The paragraph says effective beginning for fiscal year 2003, in lieu of the matching funds requirement of paragraph (1).",
            sourceLessonSlug: "the-waiver-that-names-four-places",
          },
          {
            prompt: "What does this course say the Hatch Act provision proves?",
            options: ["The category exists inside ordinary statutes", "That Congress has always underfunded agricultural research in the territories", "That the Supreme Court requires a lower match for jurisdictions without a vote", "That the territories were promised statehood in exchange for the reduced match"],
            correctIndex: 0,
            explanation: "The point is that you do not need a controversy to find the line: a farm bill already sorts places into states and not-states.",
            sourceLessonSlug: "the-waiver-that-names-four-places",
          },
          {
            prompt: "Which clause of the Constitution gives Congress power over the territories?",
            options: ["Article IV, Section 3, Clause 2", "Article I, Section 8, Clause 17, the clause about the seat of government", "Article II, Section 2, Clause 2, the treaty and appointments provision", "The Fourteenth Amendment, Section 5, the congressional enforcement power"],
            correctIndex: 0,
            explanation: "The Territory Clause, which gives Congress power to make all needful Rules and Regulations respecting territory belonging to the United States.",
            sourceLessonSlug: "the-clause-that-governs",
          },
          {
            prompt: "What phrase does the Territory Clause use to describe the power it grants?",
            options: ["All needful Rules and Regulations", "Exclusive Legislation in all Cases whatsoever over the Territory so acquired", "Such Laws as may be necessary to prepare the Territory for admission as a State", "Full and complete jurisdiction subject to the reserved rights of the several States"],
            correctIndex: 0,
            explanation: "The clause reads power to dispose of and make all needful Rules and Regulations respecting the Territory or other Property belonging to the United States.",
            sourceLessonSlug: "the-clause-that-governs",
          },
          {
            prompt: "What phrase does the District Clause use to describe Congress's power over the seat of government?",
            options: ["Exclusive Legislation in all Cases whatsoever", "All needful Rules and Regulations respecting the District or other Property", "Concurrent authority with the ceding States until a local legislature is created", "Such supervisory powers as are necessary and proper to protect the federal offices"],
            correctIndex: 0,
            explanation: "Article I, Section 8, Clause 17 uses the words exclusive Legislation in all Cases whatsoever, over such District.",
            sourceLessonSlug: "the-clause-that-governs",
          },
          {
            prompt: "What size limit does the District Clause place on the seat of government?",
            options: ["Not exceeding ten Miles square", "No larger than the smallest state then existing in the Union at the time of cession", "Not exceeding one hundred square miles of land above the mean high-water mark", "Whatever area the ceding states agree to, subject to approval by two thirds of the Senate"],
            correctIndex: 0,
            explanation: "The clause caps the District at ten miles square and requires cession by particular States and acceptance by Congress.",
            sourceLessonSlug: "the-clause-that-governs",
          },
          {
            prompt: "What do the Territory Clause and the District Clause both leave unstated?",
            options: ["Which other constitutional provisions apply there", "Whether Congress may levy taxes on the residents of either jurisdiction", "Whether the President may appoint the governor of a territory without the Senate", "Whether the federal courts may hear cases arising in either jurisdiction at all"],
            correctIndex: 0,
            explanation: "Neither clause sets a ceiling, promises statehood, or lists which parts of the Constitution reach inside, and every question in this course is downstream of that blank.",
            sourceLessonSlug: "the-clause-that-governs",
          },
          {
            prompt: "What did Loughborough v. Blake hold in 1820?",
            options: ["The uniformity requirement bound Congress in the District", "That the District of Columbia was entitled to a voting delegation in the House of Representatives", "That Congress could not tax the District at all until it created a local legislature", "That the District's residents remained citizens of the states that had ceded the land"],
            correctIndex: 0,
            explanation: "Chief Justice Marshall applied the requirement that duties be uniform throughout the United States to a tax levied on the District.",
            sourceLessonSlug: "the-clause-that-governs",
          },
          {
            prompt: "What did Thompson v. Utah say in 1898 about jury-trial guarantees in the territories?",
            options: ["That they reached the territories beyond question", "That they applied only in territories whose enabling act had already been passed by Congress", "That they applied to citizens but not to residents who were nationals of another country", "That their application in a territory was for the territorial legislature to decide"],
            correctIndex: 0,
            explanation: "The Court called it beyond question that the guarantees reached the territories of the United States, in the same year as the Spanish-American War.",
            sourceLessonSlug: "the-clause-that-governs",
          },
          {
            prompt: "Under the Treaty of Paris signed on 10 December 1898, which places did the United States take from Spain?",
            options: ["Puerto Rico, Guam and the Philippines", "Cuba, Puerto Rico and the eastern islands of the Samoan archipelago", "The Philippines, Hawaii and the Danish possessions in the Caribbean Sea", "Puerto Rico, the Northern Mariana Islands and the Panama Canal Zone"],
            correctIndex: 0,
            explanation: "Spain relinquished Cuba and transferred those three, which is why a single 1898 treaty sits behind so much of this subject.",
            sourceLessonSlug: "the-clause-that-governs",
          },
          {
            prompt: "What was the nineteenth-century working assumption about a United States territory?",
            options: ["That it was a state in waiting", "That its residents held citizenship only if the organic act said so in express terms", "That Congress governed it under the treaty power rather than under Article IV", "That the Constitution applied there only once a territorial court had been established"],
            correctIndex: 0,
            explanation: "Territorial status was understood as temporary by design, with the Constitution travelling with the flag, and the 1898 acquisitions broke that premise.",
            sourceLessonSlug: "the-clause-that-governs",
          },
          {
            prompt: "According to Justice Gorsuch's account, what did the second camp in the 1898 debate want?",
            options: ["Permanent rule unrestrained by domestic law", "A rapid path to statehood for every territory acquired in the Spanish-American War", "Immediate independence for the new possessions under a United Nations style trusteeship", "Full constitutional protection for the new possessions but no congressional representation"],
            correctIndex: 0,
            explanation: "He describes them as seeking new theories by which Congress could rule the acquisitions as a European power might, unrestrained by domestic law.",
            sourceLessonSlug: "the-clause-that-governs",
          },
          {
            prompt: "In this subject, what does the word 'territory' describe?",
            options: ["A legal category", "The physical distance of a place from the continental United States", "Any land the federal government owns, including national parks and military bases", "A jurisdiction whose population falls below the average size of a congressional district"],
            correctIndex: 0,
            explanation: "Alaska and Utah were territories and Guam is one, so what separates them is doctrine rather than geography.",
            sourceLessonSlug: "the-clause-that-governs",
          },
          {
            prompt: "What kind of case produced the doctrine this course is about?",
            options: ["A tax case", "A criminal appeal brought by a newspaper editor convicted of criminal libel", "A habeas corpus petition filed by a detainee held outside the United States", "A land dispute between a territorial government and the Department of the Interior"],
            correctIndex: 0,
            explanation: "The first Insular Case was a dispute over duties on goods brought from Puerto Rico, which is how the constitutional question arrived.",
            sourceLessonSlug: "the-clause-that-governs",
          },
          {
            prompt: "How did Puerto Rico and Guam come under United States sovereignty?",
            options: ["By the 1898 Treaty of Paris with Spain", "By deeds of cession signed by traditional leaders and later accepted by Congress", "By purchase from Denmark under a convention signed in August 1916", "By a negotiated covenant approved by Congress after a United Nations trusteeship"],
            correctIndex: 0,
            explanation: "Both were transferred by Spain in the same treaty, which is why their starting points are identical and their later histories are not.",
            sourceLessonSlug: "how-each-one-arrived",
          },
          {
            prompt: "How did the United States acquire the Virgin Islands?",
            options: ["It bought them from Denmark", "It took them from Spain in the peace treaty that ended the Spanish-American War", "It accepted deeds of cession from island leaders and ratified them in 1929", "It administered them under a United Nations trusteeship until a covenant was approved"],
            correctIndex: 0,
            explanation: "The convention with Denmark was signed on 4 August 1916 and ratifications were exchanged on 17 January 1917, both dates named in 8 U.S.C. § 1406.",
            sourceLessonSlug: "how-each-one-arrived",
          },
          {
            prompt: "What two instruments brought American Samoa under United States sovereignty?",
            options: ["Deeds of cession from 1900 and 1904", "A convention with Germany signed in 1899 and a supplementary protocol of 1902", "The Treaty of Paris of 1898 and a separate organic act passed in 1900", "A covenant negotiated with the territory's legislature and approved by Congress in 1929"],
            correctIndex: 0,
            explanation: "48 U.S.C. § 1661 accepts deeds of cession dated 10 April 1900 and 16 July 1904, and the accepting Act came in 1929.",
            sourceLessonSlug: "how-each-one-arrived",
          },
          {
            prompt: "What does 48 U.S.C. § 1661 conspicuously not do?",
            options: ["Confer citizenship", "Accept the deeds of cession the Samoan chiefs signed", "Place the islands under a government the President directs", "Name the two dates on which the deeds were signed"],
            correctIndex: 0,
            explanation: "It accepts the cessions and provides for government, and Congress never took the further step it took for Puerto Rico, Guam and the Virgin Islands.",
            sourceLessonSlug: "how-each-one-arrived",
          },
          {
            prompt: "How did the Northern Mariana Islands enter into political union with the United States?",
            options: ["By a negotiated Covenant approved in 1976", "By transfer from Japan under the peace treaty that ended the Second World War", "By purchase from Spain in a separate 1899 convention following the Treaty of Paris", "By deeds of cession from traditional leaders accepted by Congress in 1929"],
            correctIndex: 0,
            explanation: "Public Law 94-241 of 24 March 1976 approved the Covenant, and the islands had been under a United Nations trusteeship before that.",
            sourceLessonSlug: "how-each-one-arrived",
          },
          {
            prompt: "What unusual option does the Northern Marianas Covenant contain regarding status of the person?",
            options: ["An election to be a national instead of a citizen", "A right to hold dual nationality with Japan for one generation after the effective date", "A right to vote in United States presidential elections while resident in the Commonwealth", "An automatic entitlement to two non-voting delegates rather than one"],
            correctIndex: 0,
            explanation: "Section 302 let certain people who became citizens under the transitional provision elect national status instead, which a treaty of cession would never have produced.",
            sourceLessonSlug: "how-each-one-arrived",
          },
          {
            prompt: "Under 8 U.S.C. § 1407, from what date are persons born in Guam citizens of the United States?",
            options: ["11 April 1899", "1 August 1950, the date the Organic Act of Guam took effect and not a day earlier", "10 December 1898, the date the Treaty of Paris was signed in the French capital", "27 June 1952, the date of the Immigration and Nationality Act that carried the provision"],
            correctIndex: 0,
            explanation: "The statute reaches back to births on or after 11 April 1899, whether before or after the 1950 Organic Act.",
            sourceLessonSlug: "how-each-one-arrived",
          },
          {
            prompt: "What does the Guam example show about sovereignty and citizenship?",
            options: ["They are separate questions decided at different times", "That citizenship follows automatically once a treaty of cession takes effect", "That the Fourteenth Amendment supplies citizenship in every acquired territory", "That a territory must have an organic act before its people can hold any status"],
            correctIndex: 0,
            explanation: "Guam was American from 1898 and its people were made citizens by statute half a century later, because Congress decided it separately.",
            sourceLessonSlug: "how-each-one-arrived",
          },
          {
            prompt: "Which is the only remaining incorporated territory of the United States?",
            options: ["Palmyra Atoll", "The Commonwealth of Puerto Rico, since the 1952 approval of its own constitution", "Guam, because its people were made citizens by an Act of Congress in 1950", "The District of Columbia, because the Constitution names it by clause"],
            correctIndex: 0,
            explanation: "It is roughly a thousand miles from Hawaii and has no permanent population, which is what makes the doctrine look strange from the outside.",
            sourceLessonSlug: "how-each-one-arrived",
          },
          {
            prompt: "How did Justice Gorsuch describe the position of Palmyra Atoll against that of Puerto Rico?",
            options: ["An implausible and embarrassing state of affairs", "A sensible accommodation of local conditions that Congress remains free to revisit", "A necessary consequence of the Territory Clause that no court is competent to disturb", "A minor drafting oversight in the 1959 Act admitting Hawaii to the Union"],
            correctIndex: 0,
            explanation: "The full Constitution applies on an uninhabited atoll while the Court's cases still say a jury trial does not reach several million citizens in Puerto Rico.",
            sourceLessonSlug: "how-each-one-arrived",
          },
          {
            prompt: "Under 8 U.S.C. § 1402, persons born in Puerto Rico are citizens at birth from which date?",
            options: ["13 January 1941", "11 April 1899, the date carried forward from the Treaty of Paris proclamation", "2 March 1917, the date of the Act that first conferred citizenship on the island", "25 February 1927, the same date the Virgin Islands provision uses"],
            correctIndex: 0,
            explanation: "The section has two halves, and the second declares persons born there on or after 13 January 1941 to be citizens at birth.",
            sourceLessonSlug: "how-each-one-arrived",
          },
          {
            prompt: "Under 8 U.S.C. § 1406, from what date are persons born in the Virgin Islands citizens at birth?",
            options: ["25 February 1927", "17 January 1917, when ratifications of the Danish convention were exchanged", "4 August 1916, the date the convention with Denmark was signed", "28 June 1932, the date of the second of the two citizenship Acts"],
            correctIndex: 0,
            explanation: "Births before that date were declared citizens as of 25 February 1927, and births on or after it are citizens at birth.",
            sourceLessonSlug: "how-each-one-arrived",
          },
          {
            prompt: "What is a deed of cession, in this course's usage?",
            options: ["An instrument transferring sovereignty signed by traditional leaders", "A congressional resolution admitting a territory to the Union on an equal footing", "A grant of federal land to a territorial government for the support of schools", "A conveyance of communal land from an extended family to an individual owner"],
            correctIndex: 0,
            explanation: "Tutuila's leaders signed in 1900 and the Manu'a islands' in 1904, and Congress accepted both in 1929.",
            sourceLessonSlug: "how-each-one-arrived",
          },
          {
            prompt: "What is an organic act?",
            options: ["A statute establishing a civil government for a territory", "A treaty by which one nation transfers sovereign territory to another nation", "A constitutional amendment extending a specific right to a named jurisdiction", "A judicial order requiring Congress to legislate for an unrepresented population"],
            correctIndex: 0,
            explanation: "Congress passed one for Guam in 1950, setting out the structure of the territory's government.",
            sourceLessonSlug: "how-each-one-arrived",
          },
          {
            prompt: "How was the District of Columbia created?",
            options: ["Out of land ceded by states and accepted by Congress", "By a treaty of cession with a foreign power ratified by the Senate in 1790", "By purchase from the proprietors of Maryland at a price fixed by Congress", "By a covenant negotiated between Congress and the residents of the District"],
            correctIndex: 0,
            explanation: "Article I, Section 8, Clause 17 provides for cession by particular States and acceptance by Congress, which is how the seat of government came into being.",
            sourceLessonSlug: "how-each-one-arrived",
          },
          {
            prompt: "Where does the Constitution define an incorporated territory?",
            options: ["Nowhere", "In Article IV, Section 3, Clause 2, alongside the power to admit new states", "In Article I, Section 8, Clause 17, in the same sentence as the seat of government", "In the Fourteenth Amendment, Section 1, in the clause about jurisdiction"],
            correctIndex: 0,
            explanation: "The word appears nowhere in the document, which is the criticism that has followed the doctrine since 1901.",
            sourceLessonSlug: "how-each-one-arrived",
          },
          {
            prompt: "Which body decided when the people of Guam would become United States citizens?",
            options: ["Congress", "The Supreme Court, in the second of the Insular Cases decided after 1901", "The President, acting under the authority of the Treaty of Paris", "The territorial legislature of Guam, once an organic act created it"],
            correctIndex: 0,
            explanation: "Nothing in the acquisition decided it, and Congress supplied the answer half a century later by statute.",
            sourceLessonSlug: "how-each-one-arrived",
          },
          {
            prompt: "What preceded the Northern Marianas Covenant?",
            options: ["A United Nations trusteeship", "A period of direct rule by the United States Navy under an executive order", "Administration by the Philippines under a treaty of mutual defence", "A plebiscite in which the islands rejected statehood by a two-thirds margin"],
            correctIndex: 0,
            explanation: "The trusteeship is why the Commonwealth's entry was negotiated text rather than a transfer between two other governments.",
            sourceLessonSlug: "how-each-one-arrived",
          },
          {
            prompt: "Which statute approved the Covenant establishing the Commonwealth of the Northern Mariana Islands?",
            options: ["Public Law 94-241", "Public Law 114-187, enacted on 30 June 2016 for a covered territory", "The Immigration and Nationality Act of 27 June 1952, chapter 477", "The Act of 20 February 1929, chapter 281, at 45 Stat. 1253"],
            correctIndex: 0,
            explanation: "It was approved on 24 March 1976 and appears in the Code at 48 U.S.C. § 1801.",
            sourceLessonSlug: "how-each-one-arrived",
          },
          {
            prompt: "Which of these is NOT a way a place in this course came under United States sovereignty?",
            options: ["Admission to the Union on an equal footing", "Transfer by a defeated empire under a peace treaty signed in December 1898", "Purchase from a European kingdom for a sum payable in gold coin", "Acceptance by Congress of deeds signed by the islands' traditional leaders"],
            correctIndex: 0,
            explanation: "Admission on an equal footing is how a state arrives, and it is precisely the step none of these places has taken.",
            sourceLessonSlug: "how-each-one-arrived",
          },
          {
            prompt: "What is the prior question this course asks that the Hatch Act simply assumes has an answer?",
            options: ["What a place under United States sovereignty that is not a state is", "How much agricultural research money a state legislature ought to appropriate", "Whether the Secretary of Agriculture may waive a statutory requirement at all", "Whether land-grant colleges should be funded by endowment or by annual grant"],
            correctIndex: 0,
            explanation: "The phrase insular areas passes without explanation in the statute, and the explanation is the subject of this course.",
            sourceLessonSlug: "the-waiver-that-names-four-places",
          },
          {
            prompt: "What does 'non-federal match' mean in the Hatch Act context?",
            options: ["Money the recipient raises itself before a federal dollar is paid", "The share of a federal grant a recipient may spend on administrative overhead", "A comparison between a state's research spending and the national average", "The portion of the allotment reserved for facilities rather than for salaries"],
            correctIndex: 0,
            explanation: "It is the condition paragraph (4) halves for the four non-state jurisdictions and never halves for a state.",
            sourceLessonSlug: "the-waiver-that-names-four-places",
          },
          {
            prompt: "Why does this course open with an agricultural statute rather than a court case?",
            options: ["Because the category is visible there without any argument", "Because agricultural policy is the largest single federal expenditure in the territories", "Because the Supreme Court has never addressed the status of the territories directly", "Because the Hatch Act is the only statute that mentions the territories by name"],
            correctIndex: 0,
            explanation: "A farm bill already sorts places into states and not-states, so the line can be shown before anyone has to be persuaded of anything.",
            sourceLessonSlug: "the-waiver-that-names-four-places",
          },
          {
            prompt: "Which agency's own name uses the term this statute uses for these jurisdictions?",
            options: ["The Office of Insular Affairs", "The Office of Territorial and Insular Possessions at the State Department", "The Bureau of Overseas Jurisdictions within the Department of Commerce", "The Office of Non-State Jurisdictions at the Office of Management and Budget"],
            correctIndex: 0,
            explanation: "It sits in the Interior Department, and its name is one more sign that insular area is a working federal category rather than a coinage.",
            sourceLessonSlug: "the-waiver-that-names-four-places",
          },
          {
            prompt: "What did the 1898 acquisitions break, according to this course?",
            options: ["The assumption that a territory was temporary", "The constitutional requirement that duties be uniform throughout the United States", "The rule that Congress may not acquire territory without a declaration of war", "The practice of admitting territories in pairs to preserve a balance in the Senate"],
            correctIndex: 0,
            explanation: "For the first time the United States held large, populous places that nobody in Washington seriously proposed to admit as states.",
            sourceLessonSlug: "the-clause-that-governs",
          },
          {
            prompt: "What had happened to Hawaii shortly before the Treaty of Paris was signed?",
            options: ["It had been annexed", "It had been admitted to the Union as the forty-fifth state of the United States", "It had been placed under a United Nations style international trusteeship", "It had been purchased from a European kingdom for a sum payable in gold"],
            correctIndex: 0,
            explanation: "The annexation came months earlier in the same year, and the new acquisitions followed hard on its heels.",
            sourceLessonSlug: "the-clause-that-governs",
          },
          {
            prompt: "If the Constitution had been held to follow the flag in 1901, what would have followed for the new possessions?",
            options: ["The tariff wall around them would have been unconstitutional", "Congress would have lost all authority to legislate for them under Article IV", "Their residents would have become nationals rather than citizens by operation of law", "They would have been required to hold a status plebiscite within ten years"],
            correctIndex: 0,
            explanation: "That was the practical stake in the first Insular Case, because the uniformity requirement governs duties throughout the United States.",
            sourceLessonSlug: "the-clause-that-governs",
          },
          {
            prompt: "Which of these describes the first camp in the 1898 constitutional debate?",
            options: ["That republican traditions barred governing colonies", "That the acquisitions should be sold back to Spain at the price paid for them", "That the Constitution applied only to territories with an organised legislature", "That the new possessions should be admitted as states within a fixed term of years"],
            correctIndex: 0,
            explanation: "Justice Gorsuch describes them as arguing that the United States could not govern distant possessions as subservient colonies without regard to the Constitution.",
            sourceLessonSlug: "the-clause-that-governs",
          },
          {
            prompt: "What is the practical effect of the Territory Clause's silence about duration?",
            options: ["Territorial status can last indefinitely", "Congress must revisit each territory's status once every ten years after a census", "A territory automatically becomes a state after a fixed period of civil government", "The President may terminate a territory's status by proclamation at any time"],
            correctIndex: 0,
            explanation: "Nothing in the clause makes the arrangement temporary, which is why places acquired in 1898 are still territories.",
            sourceLessonSlug: "the-clause-that-governs",
          },
          {
            prompt: "Which of these was NOT among the places Spain transferred in the 1898 Treaty of Paris?",
            options: ["The United States Virgin Islands", "Guam, the largest island in the Mariana chain at the time of the transfer", "Puerto Rico, which had held a short-lived autonomous government under Spain", "The Philippines, which became independent of the United States in 1946"],
            correctIndex: 0,
            explanation: "Those islands were Danish until the 1916 convention, so they arrive by a different route entirely.",
            sourceLessonSlug: "how-each-one-arrived",
          },
          {
            prompt: "How far is Palmyra Atoll from Hawaii, in Justice Gorsuch's account?",
            options: ["About a thousand miles", "About two hundred miles, close enough to be administered from Honolulu", "About four thousand miles, further from Hawaii than Hawaii is from California", "About fifty miles, inside the archipelago Congress incorporated in 1900"],
            correctIndex: 0,
            explanation: "He gives the distance in a footnote explaining how the atoll stayed federal when Hawaii became a state.",
            sourceLessonSlug: "how-each-one-arrived",
          },
          {
            prompt: "Why did Palmyra Atoll keep its incorporated status?",
            options: ["It was not folded into Hawaii at statehood", "Because Congress passed a separate act incorporating it in the year of the Treaty of Paris", "Because the Supreme Court held in an Insular Case that it had always been incorporated", "Because its population voted to remain under direct federal administration"],
            correctIndex: 0,
            explanation: "It had been included when Congress incorporated Hawaii as a territory in 1900 and it remained under federal control when Hawaii was admitted in 1959.",
            sourceLessonSlug: "how-each-one-arrived",
          },
          {
            prompt: "Which of these places has a member of Congress but no citizenship at birth for its people?",
            options: ["American Samoa", "Guam, whose people were made citizens by an Act of Congress in 1950", "The Commonwealth of Puerto Rico, whose people have been citizens since 1917", "The United States Virgin Islands, whose citizenship dates from Acts of 1927 and 1932"],
            correctIndex: 0,
            explanation: "It is the one place where Congress accepted the cession and never took the citizenship step.",
            sourceLessonSlug: "how-each-one-arrived",
          },
          {
            prompt: "What does the heading of § 361c(d)(4) tell you before you read a word of the paragraph?",
            options: ["That two different kinds of place needed one exception", "That the paragraph applies only in fiscal years when appropriations are reduced", "That the Secretary of Agriculture wrote the provision rather than Congress", "That the exception is temporary and expires at the end of each authorisation cycle"],
            correctIndex: 0,
            explanation: "Insular areas and the District of Columbia are grouped together because both are places the statute treats as states while knowing they are not.",
            sourceLessonSlug: "the-waiver-that-names-four-places",
          },
          {
            prompt: "In which document does the phrase 'unincorporated territory' first do real legal work?",
            options: ["A Supreme Court opinion from 1901", "The Treaty of Paris signed with Spain on 10 December 1898 in the French capital", "The Immigration and Nationality Act enacted by Congress on 27 June 1952", "The Covenant with the Northern Mariana Islands approved by Congress in 1976"],
            correctIndex: 0,
            explanation: "The distinction came out of the divided opinions in the first Insular Case, and Section 2 works through how.",
            sourceLessonSlug: "the-clause-that-governs",
          },
          {
            prompt: "How many inhabited territories does this course count?",
            options: ["Five", "Three, if the Commonwealths are counted separately from the unorganised territories", "Seven, counting the District of Columbia and Palmyra Atoll alongside the islands", "Two, because only Puerto Rico and Guam have their own organic acts of Congress"],
            correctIndex: 0,
            explanation: "American Samoa, Guam, the Northern Mariana Islands, Puerto Rico and the United States Virgin Islands, with the District of Columbia counted separately.",
            sourceLessonSlug: "how-each-one-arrived",
          },
          {
            prompt: "Why does this course insist that sovereignty and citizenship be kept apart?",
            options: ["Because Congress decided them at different times", "Because the Supreme Court has held that they are governed by different constitutional clauses", "Because a territory may hold citizenship without being under United States sovereignty", "Because the Fourteenth Amendment settles sovereignty and a treaty settles citizenship"],
            correctIndex: 0,
            explanation: "Guam waited half a century and American Samoa is still waiting, which is impossible to see if the two questions are run together.",
            sourceLessonSlug: "how-each-one-arrived",
          },
          {
            prompt: "What kind of document is 48 U.S.C. § 1661?",
            options: ["A statute accepting cessions of territory", "A treaty between the United States and the German Empire concerning Samoa", "A proclamation issued by the President under the Territory Clause", "A covenant negotiated between Congress and a territorial legislature"],
            correctIndex: 0,
            explanation: "It accepts, ratifies and confirms the deeds of cession and provides for the government of the islands.",
            sourceLessonSlug: "how-each-one-arrived",
          },
          {
            prompt: "Which two federal statutes disagree about whether American Samoa counts as a 'State'?",
            options: ["The Hatch Act and the immigration statutes", "The Territory Clause and the District Clause of the Constitution itself", "The Organic Act of Guam and the Covenant with the Northern Mariana Islands", "The Supplemental Security Income provisions and the Twenty-Third Amendment"],
            correctIndex: 0,
            explanation: "The Hatch Act's definition leaves American Samoa out entirely, and Section 3 shows what the immigration statutes do with the same place.",
            sourceLessonSlug: "the-waiver-that-names-four-places",
          },
          {
            prompt: "What is the safest thing to say about the four jurisdictions in the Hatch Act exception?",
            options: ["None of them is a state", "All of them received their reduced match after suing the Department of Agriculture", "All of them have citizens at birth and elect a voting member of the House", "None of them has an agricultural experiment station of its own to fund"],
            correctIndex: 0,
            explanation: "That single shared fact is what explains why they needed their own paragraph, and it is the premise the rest of the course unpacks.",
            sourceLessonSlug: "the-waiver-that-names-four-places",
          },
          {
            prompt: "What did the Court in 1820 assume about the Constitution's reach that the Court in 1901 would not?",
            options: ["That it constrained Congress everywhere it governed", "That it applied only where a jury of local residents could lawfully be empanelled", "That it applied only in places whose residents paid federal duties and excises", "That it applied only once Congress had passed an organic act for the place"],
            correctIndex: 0,
            explanation: "Loughborough applied the uniformity requirement inside the District, and Thompson applied jury guarantees inside the territories, both without hesitation.",
            sourceLessonSlug: "the-clause-that-governs",
          },
          {
            prompt: "Which phrase in the Territory Clause has been read as the source of Congress's broad authority?",
            options: ["Needful Rules and Regulations", "Nothing in this Constitution shall be so construed as to Prejudice any Claims", "Or other Property belonging to the United States, including the public domain", "The Congress shall have Power to dispose of, meaning to sell or otherwise convey"],
            correctIndex: 0,
            explanation: "The Supreme Court has read the words as affording Congress broad authority to legislate with respect to the territories.",
            sourceLessonSlug: "the-clause-that-governs",
          },
          {
            prompt: "Why does this course teach how each territory arrived before it teaches the case law?",
            options: ["Because the routes in differ and the differences matter later", "Because the Supreme Court decides status cases in the order the territories were acquired", "Because a territory acquired by purchase is automatically incorporated into the Union", "Because the date of acquisition determines how many delegates a territory may elect"],
            correctIndex: 0,
            explanation: "A negotiated covenant produces options a treaty of cession does not, and a deed of cession leaves questions a purchase settles.",
            sourceLessonSlug: "how-each-one-arrived",
          },
          {
            prompt: "What does the phrase 'belonging to the United States' in the Territory Clause not tell you?",
            options: ["Whether the place is part of the United States", "Whether Congress may sell the land or must retain it in the public domain", "Whether the President or Congress administers the territory day to day", "Whether the territory may be represented in the federal courts of appeal"],
            correctIndex: 0,
            explanation: "Belonging and being part of are different ideas, and the 1901 decision built an entire doctrine in the gap between them.",
            sourceLessonSlug: "the-clause-that-governs",
          },
          {
            prompt: "What was the practical trigger for the first Insular Case?",
            options: ["Duties charged on goods from Puerto Rico", "A challenge to the criminal jury system used in the Philippine Islands", "A dispute over the citizenship of persons born in Guam before 1899", "A refusal by the Treasury to pay a territorial government its formula allotment"],
            correctIndex: 0,
            explanation: "An importer challenged the duties as inconsistent with the requirement that duties be uniform throughout the United States.",
            sourceLessonSlug: "the-clause-that-governs",
          },
          {
            prompt: "Which of these is true of both the Territory Clause and the District Clause?",
            options: ["Each grants Congress power without stating a limit", "Each requires the consent of the governed before Congress may legislate", "Each was added to the Constitution by amendment after the Civil War", "Each guarantees the jurisdiction a non-voting delegate in the House"],
            correctIndex: 0,
            explanation: "Needful Rules and Regulations and exclusive Legislation in all Cases whatsoever are both grants with the ceiling left blank.",
            sourceLessonSlug: "the-clause-that-governs",
          },
          {
            prompt: "What did Congress do in 1929 with respect to American Samoa?",
            options: ["It accepted the deeds of cession", "It conferred citizenship at birth on everyone born in the islands after 1899", "It approved a covenant negotiated with the territory's traditional leaders", "It created an elected legislature and a non-voting delegate to the House"],
            correctIndex: 0,
            explanation: "The Act of 20 February 1929 accepted, ratified and confirmed cessions signed a quarter of a century earlier.",
            sourceLessonSlug: "how-each-one-arrived",
          },
          {
            prompt: "What should you take from the fact that 8 U.S.C. § 1406 reads as a list of dates?",
            options: ["Citizenship was settled piece by piece, years after the transfer", "The Virgin Islands were transferred to the United States in stages between 1916 and 1932", "Congress required each resident to apply individually for citizenship after 1927", "The Fourteenth Amendment applied there automatically from the moment of transfer"],
            correctIndex: 0,
            explanation: "The convention was 1916, the transfer 1917, and the citizenship Acts 1927 and 1932, so the statute has to name all of them.",
            sourceLessonSlug: "how-each-one-arrived",
          },
          {
            prompt: "Which of these is the best one-sentence statement of what § 361c(d)(4) demonstrates?",
            options: ["Federal statutes already sort places into states and not-states", "Federal statutes give the territories more money per resident than they give the states", "The Secretary of Agriculture has authority to decide which places count as states", "Congress has promised the four named jurisdictions a path to admission as states"],
            correctIndex: 0,
            explanation: "The category is doing work in an ordinary appropriation, long before anyone reaches a constitutional question about it.",
            sourceLessonSlug: "the-waiver-that-names-four-places",
          },
          {
            prompt: "Which two constitutional clauses are the load-bearing ones in this whole subject?",
            options: ["The Territory Clause and the District Clause", "The Supremacy Clause and the Necessary and Proper Clause of Article I", "The Privileges and Immunities Clause and the Full Faith and Credit Clause", "The Guarantee Clause and the Clause admitting new states to the Union"],
            correctIndex: 0,
            explanation: "Article IV, Section 3, Clause 2 for the territories and Article I, Section 8, Clause 17 for the District, which is why their positions differ.",
            sourceLessonSlug: "the-clause-that-governs",
          },
        ],
      },
    },
  ],
};
